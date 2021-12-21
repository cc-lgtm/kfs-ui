import {
  computed,
  defineComponent,
  PropType,
  ref
} from 'vue'
import './index.scss'

export type SizeType = 'mini' | 'small' | 'medium' | 'large'

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
      type: String as PropType<SizeType>,
      default: 'medium'
    }
  },
  emits: ['change'],
  setup(props, { emit, slots }) {
    const value = ref<boolean>(props.checked)
    const onClick = () => {
      if (props.disabled) return;
      value.value = !value.value
      emit('change', value.value)
    }

    const className = computed(() => {
      const classes = []
      props.disabled && classes.push('cc-radio-disabed')
      props.size && classes.push(`cc-radio-${props.size}`)
      value.value && classes.push('cc-radio-checked')
      return classes.join(' ')
    })

    return () => (
      <div class="cc-radio">
        <div
          class={className.value}
          onClick={onClick}
        ></div>
        {slots.default?.()}
      </div>
    )
  }
})

export default CcRadio;
