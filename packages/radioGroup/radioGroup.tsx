import {
  computed,
  defineComponent,
  PropType,
  watch,
  reactive
} from 'vue'
import CcRadio from '../radio/radio'
import './radioGroup.scss'
import { Size } from '../utils/theme/index'
import { useState } from '../utils/hooks/index'

const CcRadioGroup = defineComponent({
  name: 'cc-radio-group',
  components: {CcRadio},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const slot_arr = slots.default?.() as {[propname: string]: any}[]

    const [val, useVal] = useState<string>()
    const onClick = (e: Event, index: number) => {
      useVal(obj[index].props['value'])
    }

    watch(val, () => {
      emit('change', val.value)
    })

    const obj = reactive(slot_arr)
    const renderRadio = computed(() => {
      slot_arr.map((radio, index) => {
        if (typeof radio.props['checked'] !== 'boolean' && radio.props['checked'] !== '') {
          obj[index].props['checked'] = false
        }
      })
      return obj?.map((radio, index) => (
        <div
          class="box"
          key={index}
          onClick={(e) => onClick(e, index)}
        >{radio}</div>
      ))
    })

    return () => (
      <div class="cc-radio-group">{renderRadio.value}</div>
    )
  }
})

export default CcRadioGroup;
