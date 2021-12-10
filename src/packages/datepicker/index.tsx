import {
  defineComponent,
  PropType,
  ref,
  computed,
  CSSProperties
} from 'vue'
import './index.scss'
import date_icon from './../assets/date.svg'

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

    const onClick = (e: Event) => {
      if (e) {
        const el = datePicker.value
        const top = el?.offsetTop as number
        const pickerH = 500
        position.value = top > pickerH + 40 ? 'top' : 'bottom'

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
  
    return () => (
      <div class="cc-date_picker" ref={datePicker} onClick={onClick} style={positionStyle.value}>
        <div class="date_box">
          <img class="date_icon" src={date_icon} alt="logo" />
          <span class="tips">选择日期时间</span>
        </div>
        { position.value && <div class="picker_box">

        </div> }
        { slots.default?.() }
      </div>
    )
  }
})



export default CcDatePicker;
