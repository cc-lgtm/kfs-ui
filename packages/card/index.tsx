import {
  computed,
  PropType,
  defineComponent
} from 'vue'
import './index.scss'

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

    const classStyle = computed(() => {
      const classes = ['cc-card']
      props.class && classes.push(props.class)
      props.shadow && classes.push(`cc-card-${props.shadow}`)
      return classes.join(' ')
    })

    return () => (
      <div class={classStyle.value} onClick={onClick}>
        <img src={props.icon} alt="icon" />
        <span>{ props.value }</span>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcCard;
