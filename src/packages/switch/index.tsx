import {
  computed,
  CSSProperties,
  defineComponent,
  PropType,
  reactive,
  ref
} from 'vue'
import './index.scss'

type SizeType = 'mini' | 'small' | 'medium' | 'large'

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
      type: String as PropType<SizeType>,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const className = computed(() => {
      const classes = ['cc-switch']
      props.size && classes.push(`cc-switch-${props.size}`)
      props.disabled && classes.push('cc-switch-disabled')
      return classes.join(' ')
    })

    const styles: CSSProperties & {[propname: string]: any} = reactive({
      '--left': '',
      '--right': '',
      '--bg': '#bdc3c7'
    })

    const animate = computed(() => {
      return styles
    })

    const currentValue = ref(props.inactiveValue)
    const value = ref<boolean>(props.value)
    const onClick = () => {
      if (props.disabled) return;
      if (value.value) {
        console.log(value.value)
        value.value = !value.value
        currentValue.value = props.checkedValue
        styles['--right'] = 1 + 'px'
        styles['--bg'] = '#3498db'
      }
      if (!value.value) {
        console.log(value.value)
        value.value = !value.value
        currentValue.value = props.inactiveValue
        styles['--left'] = 1 + 'px'
        styles['--bg'] = '#bdc3c7'
      }
      emit("change", currentValue.value)
    }

    return () => (
      <div
        class={className.value}
        style={animate.value}
        onClick={onClick}
      ></div>
    )
  }
})

export default CcSwitch;
