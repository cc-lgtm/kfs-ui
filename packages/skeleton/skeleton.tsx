import {
  CSSProperties,
  defineComponent,
  PropType,
  reactive
} from 'vue'
import CcSkeletonItem from '../skeleton-item/skeletonItem'

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
    }
  },
  setup(props, { slots }) {
    const styles = (index: number) => {
      const style = {
        '--w': props.rowsWidth![index]
      } as CSSProperties
      return style
    }
    const renderRows = () => {
      const skeletonRows = reactive([] as JSX.Element[])
      for (let i = 0; i < props.rows; i++) {
        skeletonRows.push(<CcSkeletonItem variable="text" style={styles(i)} />)
      }
      return skeletonRows.map((s, _) => (
        s
      ))
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
