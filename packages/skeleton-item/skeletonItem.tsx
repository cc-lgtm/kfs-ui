import {
  defineComponent,
  PropType
} from 'vue'
import './skeleton-item.scss';
import { useStyle, useContext } from '../utils/hooks'

type VariableType = 'p' | 'text' | 'h' | 'rect' | 'circle' | 'image' | 'button' | 'caption'

const CcSkeletonItem = defineComponent({
  name: 'cc-skeleton-item',
  props: {
    variable: {
      type: String as PropType<VariableType>,
      default: 'text'
    }
  },
  setup(props) {
    const animated = useContext.setContext('animated')
    const w = useContext.setContext('w', '200px')

    const hMap = {
      'button': '40px',
      'caption': '30px',
      'circle': w,
      'h': '20px',
      'image': '200px',
      'p': '15px',
      'rect': '100px',
      'text': '15px'
    } as {[k: string]: string}

    const styles = useStyle({
      '--w': w,
      '--h': hMap[props.variable],
      '--r': props.variable === 'circle' ? '50%' : '5px',
      '--animation': animated ? 'loading .8s infinite ease' : ''
    })

    return () => (
      <div class="cc-skeleton-item" style={styles}>
      </div>
    )
  }
})

export default CcSkeletonItem;
