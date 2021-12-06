import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type inputType = 'text' | 'number' | 'password'

const CcInput = defineComponent({
  name: 'cc-input',
  props: {
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
    }
  },
  emits: ['input', 'click'],
  setup(props, { slots, emit }) {

    const onInput = (e: Event) => {
      emit('input', e)
    }

    const rightIconClick = (e: Event) => {
      emit('click', e)
    }

    return () => (
      <div class="cc-input" onInput={onInput}>
        {
          props.leftIcon && <img src={props.leftIcon} alt="left-icon" class="left-icon" />
        }
          <input type={props.type} placeholder={props.tips} />
        {
          props.rightIcon && <img src={props.rightIcon} alt="right-icon" class="right-icon" onClick={rightIconClick} />
        }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcInput;
