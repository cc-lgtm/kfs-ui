import {
  CSSProperties,
  defineComponent,
  PropType,
  reactive
} from 'vue'
import CcSkeletonItem from '../skeleton-item/skeletonItem'
import { useContext } from '../utils/hooks'

type RowsWidthType = string[] | number[]

const CcSkeleton = defineComponent({
  name: 'cc-skeleton',
  components: {CcSkeletonItem},
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 0
    },
    rowsWidth: {
      type: Array as PropType<RowsWidthType>
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    useContext.getContext('animated', props.animated)
    const styles = (index: number) => {
      const style = {
        '--w': props.rowsWidth ? props.rowsWidth![index] : '200px'
      } as CSSProperties
      return style
    }
    const renderRows = () => {
      const skeletonRows = reactive([] as JSX.Element[])
      for (let i = 0; i < props.rows; i++) {
        useContext.getContext('w', i)
        skeletonRows.push(<CcSkeletonItem variable="text" style={styles(i)} />)
      }
      return skeletonRows.map(s => s)
    }
    const row = () => {
      return props.rows ? renderRows() : slots.default?.()
    }
    return () => (
      <div class="cc-skeleton">
        {props.loading && row()}
      </div>
    )
  }
})

export default CcSkeleton;
