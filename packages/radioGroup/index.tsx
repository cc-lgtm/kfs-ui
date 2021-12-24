import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch,
  provide
} from 'vue'
import CcRadio from '../radio/index'
import './index.scss'

import { SizeType } from '../radio/index'

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
      type: String as PropType<SizeType>,
      default: 'medium'
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const slot_arr = slots.default?.()

    const val = ref<string>()
    const onClick = (e: Event, index: number) => {
      val.value = obj.value[index].props['value']
      console.log(obj.value[index].props['value'])
    }

    watch(val, () => {
      emit('change', val.value)
    })

    const obj = ref(slot_arr)
    const renderRadio = computed(() => {
      slot_arr.map((radio, index) => {
        if (typeof radio.props['checked'] !== 'boolean' && radio.props['checked'] !== '') {
          obj.value[index].props['checked'] = false
        }
      })
      return obj.value?.map((radio, index) => (
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
