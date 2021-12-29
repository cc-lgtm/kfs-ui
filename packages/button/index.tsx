import {
  computed,
  defineComponent,
  PropType,
  CSSProperties
} from "vue";
import "./index.scss";
import CcLoading from '../loading/index';
import { Type, Size } from './../utils/theme/index'

const CcButton = defineComponent({
  name: "cc-button",
  components: {CcLoading},
  props: {
    class: {
      type: String
    },
    type: {
      type: String as PropType<Type>,
      default: "default"
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: '按钮'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    round: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: Event) => {
      if (props.isLoading) return;
      if (props.disabled) return;
      emit('click', e)
    }

    const className = computed(() => {
      const classes = ['cc-button']
      props.type && classes.push(`cc-button-${props.type}`)
      props.isLoading && classes.push('cc-button-isLoading')
      props.circle && classes.push('cc-button-isCircle')
      props.disabled && classes.push('cc-button-isDisabled')
      props.class && classes.push(props.class)

      return classes.join(' ')
    })

    const roundStyle = () => {
      const r = typeof props.round === "string" ? +props.round : props.round;
      const sizeMap = {
        'large': 200,
        'medium': 150,
        'small': 100,
        'mini': 50
      }

      return {
        '--round': r + 'px',
        '--size': sizeMap[props.size] + 'px'
      } as CSSProperties & {[propname: string]: any}
    }

    const render = () => {
      const icon = slots['icon']
      const _default = slots['default']
      if (props.isLoading) {
        return <cc-loading type="loadEffect" />
      }
      return (
        <>
          {icon ? <div class="icon">{icon()}</div> : _default?.()}
          {props.value}
        </>
      )
    }
    
    return () => (
      <>
        <button
          class={className.value}
          onClick={onClick}
          style={roundStyle()}
        >
          { render() }
        </button>
      </>
    )
  }
})

export default CcButton;