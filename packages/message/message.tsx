import {
  defineComponent,
  onMounted,
  TransitionGroup,
  Transition,
  PropType,
  computed
} from 'vue'
import './message.scss'
import { Type } from '../utils/theme/index'
import { useState } from '../utils/hooks/index'

const CcMessage = defineComponent({
  name: 'cc-message',
  components: { TransitionGroup, Transition },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<Type>,
      default: 'default'
    },
    top: {
      type: String,
      default: '15'
    }
  },
  setup(props, { slots }) {

    const style: {[propname: string]: any} = {
      default: {
        '--color': '#fff',
        '--backgroundColor': 'rgb(236, 240, 241)',
        '--borderColor': 'rgb(233, 230, 221)'
      },
      warn: {
        '--color': '#E6A23C',
        '--backgroundColor': 'rgb(253, 246, 236)',
        '--borderColor': 'rgb(250, 236, 216)'
      },
      error: {
        '--color': '#F56C6C',
        '--backgroundColor': 'rgb(254, 240, 240)',
        '--borderColor': 'rgb(253, 226, 226)'
      },
      success: {
        '--color': '#67C23A',
        '--backgroundColor': 'rgb(240, 249, 235)',
        '--borderColor': 'rgb(225, 243, 216)'
      }
    }

    const [flag, useFlag] = useState<boolean>(false)

    onMounted(() => {
      useFlag(true)
    })

    const messageStyle = computed(() => {
      return Object.assign(style[props.type], {
        '--top': props.top + 'px'
      })
    })

    return () => (
      <TransitionGroup appear={false} persisted={false}>
        <Transition name="down" mode={undefined}>
          {
            flag.value &&
            <div class="cc-message" style={messageStyle.value}>
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
