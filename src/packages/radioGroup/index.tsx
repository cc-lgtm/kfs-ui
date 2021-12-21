import {
  defineComponent,
  PropType,
  ref,
  watch
} from 'vue'
import CcRadio from '@/packages/radio/index'
import './index.scss'

import { SizeType } from '@/packages/radio/index'

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
    const onClick = (index: number) => {
      let prop: {[propname: string]: any};
      let radio;
      for (radio in slot_arr) {
        prop = slot_arr?.[radio as unknown as number]?.props as {[propname: string]: any}
        prop['checked'] = index === +radio
        console.log(prop['checked'])
      }
      if (props.disabled) {
        prop!['disabled'] = props.disabled
      }
      val.value = props['value']
      prop!['size'] = props.size
    }

    watch(val, () => {
      emit('change', val.value)
    })

    const renderRadio = () => {
      return slot_arr?.map((radio, index) => (
        <div
          class="box"
          key={index}
          onClick={() => onClick(index)}
        >{radio}</div>
      ))
    }

    return () => (
      <div class="cc-radio-group">{renderRadio()}</div>
    )
  }
})

export default CcRadioGroup;
