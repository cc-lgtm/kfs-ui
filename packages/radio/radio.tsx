import {
  defineComponent,
  PropType
} from 'vue'
import './radio.scss'
import { Size } from '../utils/theme/index'
import { useState, useClass } from '../utils/hooks/index'

const CcRadio = defineComponent({
  name: 'cc-radio',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const [value, useValue] = useState<boolean>(props.checked)
    const [radioRef] = useState<HTMLDivElement>()
    const onClick = () => {
      if (props.disabled) return;
      useValue(!value.value)
      emit('change', value.value, radioRef)
    }

    const className = useClass((classes) => {
      props.disabled && classes.push('cc-radio-disabed')
      props.size && classes.push(`cc-radio-${props.size}`)
      value.value && classes.push('cc-radio-checked')
    })

    return () => (
      <div class="cc-radio">
        <div
          ref={radioRef}
          class={className}
          onClick={onClick}
        ></div>
        {slots.default?.()}
      </div>
    )
  }
})

export default CcRadio;
