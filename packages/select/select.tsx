import {
  defineComponent,
  PropType
} from 'vue'
import CcOption from '../option/option'
import './select.scss'
import { Size } from '../utils/theme/index'
import { useState, useClass, useStyle } from '../utils/hooks/index'

const CcSelect = defineComponent({
  name: 'cc-select',
  components: {CcOption},
  props: {
    modelValue: {
      type: [String, Array] as PropType<string | string[]>
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const slot_arr = slots.default?.()

    const renderOptions = () => {
      return slot_arr?.map((slot, index) => (
        <div
          class="box"
          key={index}
          onClick={() => onChange(index)}
        >{ slot }</div>
      ))
    }

    const [val, useVal] = useState<string>(props.placeholder as string)
    const onChange = (index: number) => {
      const props = slot_arr?.[index].props as {[propname: string]: any}
      const keys = Object.keys(props)
      if (keys.includes('disabled') && !props?.['disabled']) return;
      useR(90)
      useVal(props?.label)
      if (val.value) useOptionStatus(false)
      emit('change', val.value)
    }

    const [optionStatus, useOptionStatus] = useState<boolean>(false)
    const [r, useR] = useState<number>(90)
    const onClick = () => {
      if (props.disabled) return;
      useR(-90)
      useOptionStatus(true)
    }

    const className = useClass((names) => {
      props.disabled && names.push('input-disabled')
      props.size && names.push(`input-${props.size}`)
    }, ['input'])

    const sizeMap = {
      'mini': 90 + 'px',
      'small': 120 + 'px',
      'medium': 150 + 'px',
      'large': 180 + 'px'
    }
    const sizeStyle = useStyle({
      '--w': sizeMap[props.size]
    })

    const icon = '>'
    const iconStyle = useStyle({
      '--r': r.value + 'deg'
    })

    return () => (
      <div class="cc-select" style={sizeStyle.value}>
        <div class={className} onClick={onClick}>{val.value}</div>
        <span class="icon" style={iconStyle.value}>{icon}</span>
        {optionStatus.value &&
        <div class="container">
          { renderOptions() }
        </div>}
      </div>
    )
  }
})

export default CcSelect;
