import {
  computed,
  CSSProperties,
  defineComponent,
  PropType,
  ref
} from 'vue'
import CcOption from '@/packages/option/index'
import './index.scss'

type SizeType = 'mini' | 'small' | 'medium' | 'large'

const CcSelect = defineComponent({
  name: 'cc-select',
  components: {CcOption},
  props: {
    modelValue: {
      type: [String, Array] as PropType<string | string[]>
    },
    placeholder: {
      type: String
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

    const val = ref<string>(props.placeholder as string)
    const onChange = (index: number) => {
      const props = slot_arr?.[index].props as {[propname: string]: any}
      const keys = Object.keys(props)
      if (keys.includes('disabled') && !props?.['disabled']) return;
      val.value = props?.label
      if (val.value) optionStatus.value = false
      emit('change', val.value)
    }

    const optionStatus = ref<boolean>(false)
    const onClick = () => {
      if (props.disabled) return;
      optionStatus.value = true
    }

    const classNmae = computed(() => {
      const names = ['input']
      props.disabled && names.push('input-disabled')
      props.size && names.push(`input-${props.size}`)
      return names.join(' ')
    })

    const sizeStyle = computed(() => {
      const sizeMap = {
        'mini': 90 + 'px',
        'small': 120 + 'px',
        'medium': 150 + 'px',
        'large': 180 + 'px'
      } as {[propname: string]: any}
      const w = {
        '--w': sizeMap[props.size]
      } as CSSProperties
      return w
    })

    return () => (
      <div class="cc-select" style={sizeStyle.value}>
        <div class={classNmae.value} onClick={onClick}>{val.value}</div>
        {optionStatus.value &&
        <div class="container">
          { renderOptions() }
        </div>}
      </div>
    )
  }
})

export default CcSelect;
