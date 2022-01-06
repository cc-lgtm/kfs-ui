import {
  defineComponent,
  PropType
} from "vue";
import "./button.scss";
import CcLoading from '../loading/loading';
import { Type, Size } from '../utils/theme/index'
import { useClass, useStyle } from '../utils/hooks/index'

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

    const className = useClass((classes) => {
      props.type && classes.push(`cc-button-${props.type}`)
      props.isLoading && classes.push('cc-button-isLoading')
      props.circle && classes.push('cc-button-isCircle')
      props.disabled && classes.push('cc-button-isDisabled')
      props.class && classes.push(props.class)
    }, ['cc-button'])

    const r = typeof props.round === "string" ? +props.round : props.round;
    const sizeMap = {
      'large': 200,
      'medium': 150,
      'small': 100,
      'mini': 50
    }
    const styles = useStyle({
      '--round': r + 'px',
      '--size': sizeMap[props.size] + 'px'
    })

    const render = () => {
      const icon = slots['icon']
      const _default = slots['default']
      if (props.isLoading) {
        return <cc-loading />
      }
      return (
        <>
          {icon ? <div class="icon">{icon()}</div> : _default?.()}
        </>
      )
    }
    
    return () => (
      <>
        <button
          class={className}
          onClick={onClick}
          style={styles}
        >
          { render() }
        </button>
      </>
    )
  }
})

export default CcButton;