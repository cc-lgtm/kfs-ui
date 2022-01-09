import {
  CSSProperties,
  defineComponent,
  PropType,
  reactive,
  computed
} from 'vue'
import './switch.scss'
import { Size } from '../utils/theme/index'
import { useState, useClass } from '../utils/hooks/index'

const CcSwitch = defineComponent({
  name: 'cc-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
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
  setup(props, { emit }) {
    const className = useClass((classes) => {
      props.disabled && classes.push('cc-switch-disabled')
    }, ['cc-switch'])

    const sizeMap = {
      'mini': 60 + 'px',
      'small': 70 + 'px',
      'medium': 80 + 'px',
      'large': 90 + 'px'
    }
    const styles: CSSProperties & {[propname: string]: any} = reactive({
      '--left': 1 + 'px',
      '--bg': '#bdc3c7',
      '--w': sizeMap[props.size]
    })
    const animate = computed(() => {
      return styles
    })

    const [currentValue, useCurrentValue] = useState(props.inactiveValue)
    const [value, useValue] = useState<boolean>(props.value)
    const onClick = () => {
      if (props.disabled) return;
      useValue(!value.value)
      if (value.value) {
        useCurrentValue(props.checkedValue)
        styles['--left'] = +sizeMap[props.size].split('p')[0] - 30 + 'px'
        styles['--bg'] = '#3498db'
      }
      if (!value.value) {
        useCurrentValue(props.inactiveValue)
        styles['--left'] = 1 + 'px'
        styles['--bg'] = '#bdc3c7'
      }
      emit("change", currentValue.value)
    }

    return () => (
      <div
        class={className}
        style={animate.value}
        onClick={onClick}
      ></div>
    )
  }
})

export default CcSwitch;
