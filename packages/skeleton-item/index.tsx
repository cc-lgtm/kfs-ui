import {
  computed,
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type VariableType = 'p' | 'text' | 'h1' | 'h3' | 'rect' | 'circle' | 'image' | 'button' | 'caption'
import SkeletonButton from './button/index'
import SkeletonCircle from './circle/index'
import SkeletonCaption from './caption/index'
import SkeletonH from './h/index'
import SkeletonImg from './img/index'
import SkeletonRect from './rect/index'
import SkeletonText from './text/index'

const CcSkeletonItem = defineComponent({
  name: 'cc-skeleton-item',
  components: {
    SkeletonButton,
    SkeletonCircle,
    SkeletonCaption,
    SkeletonH,
    SkeletonImg,
    SkeletonRect,
    SkeletonText
  },
  props: {
    variable: {
      type: String as PropType<VariableType>,
      default: 'text'
    }
  },
  setup(props) {
    return () => (
      <div class="cc-skeleton-item-box">
        <SkeletonButton />
        <SkeletonCaption />
        <SkeletonCircle />
        <SkeletonH />
        <SkeletonImg />
        <SkeletonText />
        <SkeletonRect />
      </div>
    )
  }
})

export default CcSkeletonItem;
