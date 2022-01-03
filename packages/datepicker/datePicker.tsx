import {
  defineComponent,
  PropType,
  ref,
  computed,
  CSSProperties,
  reactive
} from 'vue'
import './datePicker.scss'
import CcButton from '../button/button'

type DateType = 'datetime' | 'datetimerange'

type Option = {
  text: string,
  onClick: (instance: unknown) => void
}

interface PickerOptions {
  shortcuts: Array<Option>
}

const CcDatePicker = defineComponent({
  name: 'cc-datePicker',
  components: {CcButton},
  props: {
    type: {
      type: String as PropType<DateType>,
      default: 'datetime'
    },
    pickerOptions: {
      type: Object as PropType<PickerOptions>
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const datePicker = ref<HTMLDivElement>()
    const position = ref<string | null>(null)
    const showPicker = ref<boolean>(false)

    const onClick = (e: Event) => {
      if (e) {
        const el = datePicker.value
        const top = el?.offsetTop as number
        const pickerH = 500
        position.value = top > pickerH + 40 ? 'top' : 'bottom'
        showPicker.value = true
        emit('click')
      }
    }

    const positionStyle = computed(() => {
      const style: CSSProperties & {[propname: string]: any} = {
        '--top': position.value === 'top' ? -408 + 'px' : 40 + 'px',
        '--borderColor': position.value === 'top'
          ? 'rgb(240, 238, 238) transparent transparent'
          : 'transparent transparent rgb(240, 238, 238)',
        '--beforeBottom': position.value === 'top' ? -20 + 'px' : 384 + 'px'
      }

      return style
    })

    const onclose = (e: Event) => {
      const el = document.querySelector('body')
      const node = document.querySelector('.cc-date_picker')
      console.log(el)
      if (el) {
        console.log(11)
        if (el.contains(node as Node)) {
          console.log('2')
          showPicker.value = false
        }
      }
    }

    const year = ref<number>(0)
    const month = ref<number>(0)
    const day = ref<number>(0)
    const weekDay = ref<number>(0)
    const leftY = '<<'
    const leftM = '<'
    const rightY = '>>'
    const rightM = '>';

    const subYear = () => year.value--
    const addYear = () => year.value++
    const subMonth = () => {
      if (month.value === 1) {
        year.value--
        month.value = 12
        return
      }
      month.value--
    }
    const addMonth = () => {
      days.fill({'day': 0, 'isClick': false})
      if (month.value === 12) {
        year.value++
        month.value = 1
        return
      }
      month.value++
    }

    (() => {
      const date = new Date()
      year.value = date.getFullYear()
      month.value = date.getMonth() + 1
      day.value = date.getDate()
      weekDay.value = date.getDay()
    })()

    const days = reactive<Array<{[propname: string]: any}>>([])
    const renderDays = computed(() => {
      const bigM = [1, 3, 5, 7, 8, 10, 12]
      const smallM = [4, 6, 9, 11]
      const flatM = [2];
      if (flatM.includes(+month.value)) {
        let day = 28
        if (+year.value % 4 === 0) day = 29
        addDays(day, days)
      }
      if (bigM.includes(+month.value)) addDays(31, days)
      if (smallM.includes(+month.value)) addDays(30, days)
      return days
    })

    const addDays = (days: number, tragetArr: Array<{[propname: string]: any}>) => {
      const flagDay = 31 - ((day.value % 7) + weekDay.value - 7);
      let d = 0
      if (days === 31) d = 30;
      if (days === 30) d = 31;
      if (days === 28 || days === 29) d = days
      for (d; d > flagDay; d--) {
        tragetArr.unshift({'day': d, 'isClick': false, 'isPre': true})
      }
      for (let i = 1; i <= days; i++) {
        const day = {
          'day': i,
          'isClick': false
        }
        tragetArr.push(day)
      }
      const filterArr = tragetArr.filter(item => item.day !== 0)
      if (filterArr.length < 42) {
        for (let i = 1; i <= 42 - filterArr.length; i++) {
          tragetArr.push({'day': i, 'isClick': false, 'isNext': true})
        }
      }
    }

    const dayStyle = (day: {[propname: string]: any}, num: number) => {
      const classes = []
      classes.push('day');
      +day.value === num && classes.push('current')
      if (day.isPre || day.isNext) {
        classes.push('isPre_isNext')
      }

      return classes.join(' ')
    }
    
    const onClickDay = (index: number, day: number) => {
      const el = document.getElementById(`${index}day`)
      if (index + 1 === day) {
        days[index].isClick = true
        el!.classList.add('click')
      }
    }
  
    return () => (
      <div class="cc-date_picker" ref={datePicker} style={positionStyle.value}>
        <div class="date_box" onClick={onClick}>
          {/* <img class="date_icon" src={date_icon} alt="logo" /> */}
          <span class="tips">选择日期时间</span>
        </div>
        { showPicker.value && <div class="picker_box">
          <div class="top">
            <span onClick={subYear}>{leftY}</span>
            <span onClick={subMonth}>{leftM}</span>
            <span class="date">{ year.value } 年 { month.value } 月</span>
            <span onClick={addMonth}>{rightM}</span>
            <span onClick={addYear}>{rightY}</span>
          </div>  
          <div class="days">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
          </div>
          <div class="content">
          {
            renderDays.value.map((day, index) => (
              day.day === 0 ? '' :
              <span
                id={index + 'day'}
                key={index + 'day'}
                class={dayStyle(day, index + 1)}
                onClick={() => onClickDay(index, day.day)}
              >{day.day}</span>
            ))
          }
          </div>
          <div class="btns">
            <span>此刻</span>
            <CcButton value="确定" />
          </div>
        </div> }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcDatePicker;
