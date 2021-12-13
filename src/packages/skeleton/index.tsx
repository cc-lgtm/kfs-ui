import {
  computed,
  defineComponent,
  PropType,  
  reactive
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
      default: 3
    },
    rowsWidth: {
      type: Array as PropType<RowsWidthType>
    }
  },
  setup(props) {
    type SkeletonRowsType = () => JSX.Element

    const skeletonRows = reactive<SkeletonRowsType[]>([])

    const rowsToArray = () => {
      if (props.rows && props.rowsWidth) {
        for (let row = 1; row <= props.rows; row++) {
          const w = computed(() => {
            return {
              'width': props.rowsWidth![row - 1]
            }
          })
          skeletonRows.push(() => <CcSkeletonItem variable="text" style={w.value} />)
        }
      }
    }
    rowsToArray()

    const renderRows = () => {
      if (props.rows === 0) return (<CcSkeletonItem variable="text" style="width: 50px" />)
      return skeletonRows.map((fn) => fn())
    }

    const classes = computed(() => {
      const classname = ['cc-skeleton']
      props.animated && classname.push('cc-skeleton-animated')
      props.loading && classname.push('cc-skeleton-isLoading')
      return classname.join(' ')
    })

    return () => (
      <div class={classes.value}>
        { renderRows() }
      </div>
    )
  }
})

export default CcSkeleton;
