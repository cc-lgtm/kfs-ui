import {
  defineComponent,
  PropType  
} from 'vue'
import CcSkeletonItem from '@/packages/skeleton-item/index'
import './index.scss'

type RowsWidthType = string[] | number[]

const CcSkeleton = defineComponent({
  name: 'cc-skeleton',
  components: {CcSkeletonItem},
  props: {
    animated: {
      type: Boolean,
      default: false
    },
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
  setup(props) {

  }
})

export default CcSkeleton;
