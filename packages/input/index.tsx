import {
  defineComponent,
  PropType,
  ref,
  watch
} from 'vue'
import './index.scss'

type inputType = 'text' | 'number' | 'password'

const CcInput = defineComponent({
  name: 'cc-input',
  props: {
    value: {
      type: String
    },  
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    type: {
      type: String as PropType<inputType>,
      default: 'text'
    },
    tips: {
      type: String,
      default: '请输入...'
    },
    leftText: {
      type: String,
      default: 'leftText'
    },
    className: {
      type: String
    }
  },
  emits: ['update:input', 'click', 'inputChange'],
  setup(props, { slots, emit }) {

    const styles = () => {
      const classes = []
      classes.push('cc-input')
      props.className && classes.push(props.className)

      return classes.join(' ')
    }

    const currentV = ref<string>("")

    const onInput = (e: Event) => {
      currentV.value = (e.target as unknown as HTMLInputElement).value
      emit('update:input', currentV.value)
    }

    watch(currentV, (pre, next) => {
      emit('inputChange', pre, next)
    })

    const rightIconClick = (e: Event) => {
      emit('click', e)
    }

    return () => (
      <div class={styles()}>
        { props.leftText && <span class="title">{ props.leftText }</span> }
        {
          props.leftIcon && <img src={props.leftIcon} alt="left-icon" class="left-icon" />
        }
          <input type={props.type} value={props.value}  onInput={onInput} placeholder={props.tips} />
        {
          props.rightIcon && <img src={props.rightIcon} alt="right-icon" class="right-icon" onClick={rightIconClick} />
        }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcInput;
