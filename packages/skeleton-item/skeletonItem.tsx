import {
  defineComponent,
  PropType
} from 'vue'

type VariableType = 'p' | 'text' | 'h' | 'rect' | 'circle' | 'image' | 'button' | 'caption'
import SkeletonButton from './button/index'
import SkeletonCircle from './circle/index'
import SkeletonCaption from './caption/index'
import SkeletonH from './h/index'
import SkeletonImg from './img/index'
import SkeletonRect from './rect/index'
import SkeletonText from './text/index'
import SkeletonP from './p/index'

const CcSkeletonItem = defineComponent({
  name: 'cc-skeleton-item',
  components: {
    SkeletonButton,
    SkeletonCircle,
    SkeletonCaption,
    SkeletonH,
    SkeletonImg,
    SkeletonRect,
    SkeletonText,
    SkeletonP
  },
  props: {
    variable: {
      type: String as PropType<VariableType>,
      default: 'text'
    }
  },
  setup(props) {
    const renderSkeletonItem = () => {
      const type = {
        'p': <SkeletonP></SkeletonP>,
        'text': <SkeletonText></SkeletonText>,
        'h': <SkeletonH></SkeletonH>,
        'rect': <SkeletonRect></SkeletonRect>,
        'circle': <SkeletonCircle></SkeletonCircle>,
        'image': <SkeletonImg></SkeletonImg>,
        'button': <SkeletonButton></SkeletonButton>,
        'caption': <SkeletonCaption></SkeletonCaption>
      } as {[propname:string]: JSX.Element}
      return type[props.variable]
    }
    return () => (
      <div class="cc-skeleton-item-box">
        {renderSkeletonItem()}
      </div>
    )
  }
})

export default CcSkeletonItem;
