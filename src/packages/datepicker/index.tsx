import {
  defineComponent,
  PropType,
  ref,
  computed,
  CSSProperties
} from 'vue'
import './index.scss'
import date_icon from './../assets/date.svg'
import CcButton from './../button/index'

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
        '--top': position.value === 'top' ? -425 + 'px' : 40 + 'px',
        '--borderColor': position.value === 'top'
          ? 'rgb(240, 238, 238) transparent transparent'
          : 'transparent transparent rgb(240, 238, 238)',
        '--beforeBottom': position.value === 'top' ? -20 + 'px' : 400 + 'px'
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

    const year = ref<string>('')
    const month = ref<string>('')
    const day = ref<string>('')
    const week = ref<number>(0)
    const leftY = '<<'
    const leftM = '<'
    const rightY = '>>'
    const rightM = '>';

    (() => {
      const date = new Date()
      year.value = date.getFullYear() + ''
      month.value = date.getMonth() + 1 + ''
      day.value = date.getDate() + ''
      week.value = date.getDay()
    })()

    const renderDays = computed(() => {
      const days = [] as Array<number>
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

    const addDays = (days: number, tragetArr: Array<number>) => {
      for (let i = 1; i <= days; i++) {
        tragetArr.push(i)
      }
    }

    const dayStyle = (num: number) => {
      const classes = []
      classes.push('day');
      +day.value === num && classes.push('current')

      return classes.join(' ')
    }
    
    const onClickDay = (index: number, day: number) => {
      const el = document.getElementById(`${index}day`)
      if (index + 1 === day) {
        el?.classList.add('click')
      }
    }
  
    return () => (
      <div class="cc-date_picker" onClick={onClick} ref={datePicker} style={positionStyle.value}>
        <div class="date_box">
          <img class="date_icon" src={date_icon} alt="logo" />
          <span class="tips">选择日期时间</span>
        </div>
        { showPicker.value && <div class="picker_box">
          <div class="top">
            <span>{leftY}</span>
            <span>{leftM}</span>
            <span class="date">{ year.value } 年 { month.value } 月</span>
            <span>{rightM}</span>
            <span>{rightY}</span>
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
            renderDays.value.map((d, index) => (
              <span id={index + 'day'} class={dayStyle(index + 1)} onClick={() => onClickDay(index, d)}>{d}</span>
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
