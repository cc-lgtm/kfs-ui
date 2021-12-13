import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type VariableType = 'p' | 'text' | 'h1' | 'h3' | 'rect' | 'circle' | 'image' | 'button' | 'caption'

const CcSkeletonItem = defineComponent({
  name: 'cc-skeleton-item',
  props: {
    variable: {
      type: String as PropType<VariableType>,
      default: 'text'
    }
  },
  setup(props) {

  }
})

export default CcSkeletonItem;
