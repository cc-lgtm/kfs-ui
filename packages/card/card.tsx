import {
  PropType,
  defineComponent
} from 'vue'
import './card.scss'
import { useClass } from '../utils/hooks/index'

type ShadowType = 'always' | 'hover' | 'never'

const CcCard = defineComponent({
  name: 'cc-card',
  props: {
    icon: {
      type: String
    },
    value: {
      type: String,
      default: "icon"
    },
    class: {
      type: String
    },
    shadow: {
      type: String as PropType<ShadowType>,
      default: 'always'
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: Event) => {
      emit('click', e)
    }

    const className = useClass((classes) => {
      props.class && classes.push(props.class)
      props.shadow && classes.push(`cc-card-${props.shadow}`)
    }, ['cc-card'])

    return () => (
      <div class={className} onClick={onClick}>
        <img src={props.icon} alt="icon" />
        <span>{ props.value }</span>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcCard;
