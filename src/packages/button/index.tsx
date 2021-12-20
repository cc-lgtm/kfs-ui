import {
  computed,
  defineComponent,
  PropType,
  CSSProperties
} from "vue";
import "./index.scss";
import CcLoading from '../loading/index';

type ButtonType = "normal" | "error" | "warn"

type ButtonSize = "medium" | "small" | "mini"

const CcButton = defineComponent({
  name: "cc-button",
  components: {CcLoading},
  props: {
    class: {
      type: String
    },
    type: {
      type: String as PropType<ButtonType>,
      default: "normal"
    },
    size: {
      type: String as PropType<ButtonSize>,
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
        'medium': 150,
        'small': 100,
        'mini': 50
      }

      return {
        '--round': r + 'px',
        '--size': sizeMap[props.size] + 'px'
      } as CSSProperties & {[propname: string]: any}
    }

    const renderLoading = () => {
      return props.isLoading
      ? <cc-loading type="loadEffect" />
      : props.value
    }

    return () => (
      <>
        <button
          class={className.value}
          onClick={onClick}
          style={roundStyle()}
        >
          {
            renderLoading()
          }
          { slots.default?.() }
        </button>
      </>
    )
  }
})

export default CcButton;
