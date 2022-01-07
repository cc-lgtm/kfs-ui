import {
  defineComponent,
  PropType,
  watch
} from 'vue'
import './input.scss'
import { useState, useClass, useStyle } from '../utils/hooks/index'
import { Size } from '../utils/theme'

type inputType = 'text' | 'number' | 'password'

const CcInput = defineComponent({
  name: 'cc-input',
  props: {
    value: {
      type: String
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
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
  emits: ['input', 'click', 'inputChange', 'foucs', 'blur'],
  setup(props, { slots, emit }) {

    const className = useClass((classes) => {
      props.className && classes.push(props.className)
    }, ['cc-input'])

    const sizeMap = {
      "large": ['250px', '35px', '20px'],
      "medium": ['200px', '30px', '18px'],
      "small": ['150px', '25px', '16px'],
      "mini": ['100px', '15px', '14px']
    } as {[k: string]: string[]}
    const styles = useStyle({
      '--w': sizeMap[props.size][0],
      '--h': sizeMap[props.size][1],
      '--size': sizeMap[props.size][2]
    })

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

    const onFocus = (e: Event) => emit('foucs', e)
    const onBlur = (e: Event) => emit('blur', e)

    return () => (
      <div class={className} style={styles}>
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
            onFocus={onFocus}
            onBlur={onBlur}
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
