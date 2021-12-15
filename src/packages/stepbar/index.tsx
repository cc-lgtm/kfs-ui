import {
  computed,
  defineComponent,
  PropType,
  CSSProperties
} from 'vue'
import CcStepItem from '@/packages/stepitem/index'
import './index.scss'

type DirectionType = 'vertical' | 'horizontal'
type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'success'

const CcStepBar = defineComponent({
  name: 'cc-stepbar',
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
    
    const styles = computed(() => {
      const space = +props.space!
      const style: CSSProperties & {[propname: string]: any} = {
        '--width': space * slot_arr!.length + 'px'
      }
      return style
    })
    const renderItem = () => {
      return slot_arr!.map((slot, index) => (
        <div
          class="box"
          key={index}
        >
        { slot }
        <span>{index + 1}</span>
        </div>
      ))
    }
    return () => (
      <div class="cc-stepbar" style={styles.value}>
        {
          renderItem().map((item) => item)
        }
      </div>
    )
  }
})

export default CcStepBar;
