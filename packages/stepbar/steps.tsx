import {
  defineComponent,
  PropType,
  CSSProperties
} from 'vue'
import CcStepItem from '../stepitem/step'
import './steps.scss'
import { useStyle } from '../utils/hooks/index'

type DirectionType = 'vertical' | 'horizontal'
type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'success'

const CcStepBar = defineComponent({
  name: 'cc-steps',
  components: {CcStepItem},
  props: {
    space: {
      type: [Number, String]
    },
    direction: {
      type: String as PropType<DirectionType>,
      default: 'horizontal'
    },
    active: {
      type: Number,
      default: 0
    },
    processStatus: {
      type: String as PropType<StepStatus>,
      default: 'process'
    },
    finishStatus: {
      type: String as PropType<StepStatus>,
      default: 'finish'
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const slot_arr = slots.default?.()
    
    const space = +props.space!
    const style = useStyle({
      '--width': space * (slot_arr!.length - 1) + 'px'
    })

    const lineStyle = (index: number) => {
      const style = {
        '--line': +props.space! - 12 + 'px'
      } as CSSProperties

      if (index === 0) Object.assign(style, {
        '--show': 'none'
      })

      return style
    }

    const borderStyle = (index: number) => {
      if (index + 1 <= props.active) {
        return {
          'border': '2px solid #3498db'
        } as CSSProperties
      }
      return {
        '--border': '2px solid #000'
      } as CSSProperties
    }

    const renderItem = () => {
      return slot_arr!.map((slot, index) => (
        <div
          class="cc-stepbar-box"
          key={index}
          style={borderStyle(index)}
        >
          { slot }
          <span class="cc-stepbar-box-index">{index + 1}</span>
          <span class="cc-stepbar-box-line" style={lineStyle(index)} />
        </div>
      ))
    }
    return () => (
      <div class="cc-stepbar" style={style}>
        {
          renderItem().map((item) => item)
        }
      </div>
    )
  }
})

export default CcStepBar;
