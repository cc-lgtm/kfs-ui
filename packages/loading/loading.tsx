import {
  defineComponent,
  PropType
} from 'vue'
import Line from './loadline/index'
import Effect from './loadeffect/index'
import Rect from './loadrect/index'
import Back from './loadback/index'
import BackLine from './loadbackline/index'

type loadType = 'effect' | 'line' | 'rect' | 'back' | 'backLine'

const CcLoading = defineComponent({
  name: "cc-loading",
  components: {
    Line,
    Effect,
    Rect,
    Back,
    BackLine
  },
  props: {
    type: {
      type: String as PropType<loadType>,
      default: 'line'
    }
  },
  setup(props) {

    const renderLoading = () => {
      const loadType = {
        'effect': <Effect />,
        'line': <Line />,
        'rect': <Rect />,
        'back': <Back />,
        'backLine': <BackLine />
      }
      return loadType[props.type]
    }

    return () => (
      <>
        {renderLoading()}
      </>
    )
  }
})

export default CcLoading;
