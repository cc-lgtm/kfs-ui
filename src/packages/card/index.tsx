import {
  defineComponent
} from 'vue'
import './index.scss'

const CcCard = defineComponent({
  name: 'cc-card',
  props: {
    icon: {
      type: String
    },
    value: {
      type: String,
      default: "icon"
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: Event) => {
      emit('click', e)
    }

    return () => (
      <div class="cc-card" onClick={onClick}>
        <img src={props.icon} alt="icon" />
        <span>{ props.value }</span>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcCard;
