import {
  defineComponent,
  PropType,
  watch
} from 'vue'
import './index.scss'
import { useState, useClass, useEffect } from './../utils/hooks/index'

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
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    }
  },
  emits: ['input', 'click', 'inputChange'],
  setup(props, { slots, emit }) {

    const className = useClass((classes) => {
      props.className && classes.push(props.className)
    }, ['cc-input'])

    const [currentV, useCurrentV] = useState<string>("")

    const onInput = (e: Event) => {
      if (props.disabled) return;
      useCurrentV((e.target as unknown as HTMLInputElement).value)
      emit('input', currentV.value)
    }

    watch(currentV, (pre, next) => {
      emit('inputChange', pre, next)
    })

    const rightIconClick = (e: Event) => {
      emit('click', e)
    }

    return () => (
      <div class={className}>
        { props.leftText && <span class="title">{ props.leftText }</span> }
        {
          props.leftIcon && <img src={props.leftIcon} alt="left-icon" class="left-icon" />
        }
          <input
            type={props.type}
            value={props.value}
            disabled={props.disabled}
            readonly={props.readonly}
            onInput={onInput}
            placeholder={props.tips}
            class={props.disabled ? 'disabled': ''}
          />
        {
          props.rightIcon && <img src={props.rightIcon} alt="right-icon" class="right-icon" onClick={rightIconClick} />
        }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcInput;
