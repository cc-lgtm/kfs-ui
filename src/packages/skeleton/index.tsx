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
      default: 0
    },
    rowsWidth: {
      type: Array as PropType<RowsWidthType>
    }
  },
  setup(props) {
    type SkeletonRowsType = () => JSX.Element

    const skeletonRows = reactive<SkeletonRowsType[]>([])

    const classes = computed(() => {
      const classes = []
      props.animated && classes.push('cc-skeleton-animated')

      return classes.join(' ')
    })

    const rowsToArray = () => {
      if (props.rows > 0 && props.rowsWidth) {
        for (let row = 1; row <= props.rows; row++) {
          const w = computed(() => {
            return {
              'width': props.rowsWidth![row - 1],
              '--bingW': props.rowsWidth![row - 1]  
            }
          })
          skeletonRows.push(() => <div class="box"><CcSkeletonItem class={classes.value} variable="button" style={w.value} /></div>)
        }
      }
    }
    rowsToArray()

    const renderRows = () => {
      if (props.rows === 0) return (<div class="div"><CcSkeletonItem class={classes.value} variable="rect" /></div>)
      return skeletonRows.map((fn) => fn())
    }

    return () => (
      <div class="cc-skeleton">
        { props.loading && renderRows() }
      </div>
    )
  }
})

export default CcSkeleton;
