import {
  defineComponent,
  PropType,
  StyleValue
} from "vue";
import "./index.scss";
import CcLoading from '../loading/index';

type ButtonType = "normal" | "error" | "warn"

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
      emit('click', e)
    }

    const className = () => {
      const classes = []
      props.type && classes.push(`cc-button-${props.type}`)
      props.isLoading && classes.push('cc-button-isLoading')
      props.class && classes.push(props.class)

      return classes.join(' ')
    }

    const roundStyle = () => {
      const r = typeof props.round === "string" ? +props.round : props.round;

      return {
        '--round': r + 'px'
      } as StyleValue
    }

    const renderLoading = () => {
      return props.isLoading
      ? <cc-loading type="loadEffect" />
      : props.value
    }

    return () => (
      <div
        class="cc-button"
        onClick={onClick}
        style={roundStyle()}
      >
        <button class={className()}>
          {
            renderLoading()
          }
          { slots.default?.() }
        </button>
      </div>
    )
  }
})

export default CcButton;
