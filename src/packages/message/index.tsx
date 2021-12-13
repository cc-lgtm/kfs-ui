import {
  defineComponent,
  ref,
  onMounted,
  TransitionGroup,
  Transition,
  PropType,
  computed
} from 'vue'
import './index.scss'

type MessageType = 'success' | 'error' | 'warn'

const CcMessage = defineComponent({
  name: 'cc-message',
  components: { TransitionGroup, Transition },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<MessageType>,
      default: 'warn'
    }
  },
  setup(props, { slots }) {

    const style: {[propname: string]: any} = {
      warn: {
        icon: 'icon-warning',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: 'icon-shanchu',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: 'icon-queren2',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }

    const flag = ref<boolean>(false)

    onMounted(() => {
      flag.value = true
    })

    const messageStyle = computed(() => {
      const styles = []
      props.type && styles.push(style[props.type])

      return styles.join(' ')
    })

    const iconClass = computed(() => {
      const classes = ['iconfont']
      props.type && classes.push(style[props.type].icon)

      return classes.join(' ')
    })

    return () => (
      <TransitionGroup appear={false} persisted={false}>
        <Transition name="down" mode={undefined}>
          {
            flag.value &&
            <div class="cc-message" style={messageStyle.value}>
              <i class={iconClass.value}></i>
              <span class="text">{props.text}</span>
            </div>
          }
          { slots.default?.() }
        </Transition>
      </TransitionGroup>
    )
  }
})

export default CcMessage;
