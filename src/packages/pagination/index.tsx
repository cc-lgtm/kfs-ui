import {
  computed,
  defineComponent,
  ref
} from 'vue'
import './index.scss'

const CcPagination = defineComponent({
  name: 'cc-pagination',
  props: {
    background: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    prevText: {
      type: String
    },
    nextText: {
      type: String
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total'
    }
  },
  emits: ['sizeChange', 'currentChange', 'prevClick', 'nextClick'],
  setup(props, { emit, slots }) {

    const renderPre = () => {
      console.log('1')
    }

    const renderNext = () => {
      console.log('2')
    }

    const pagers = ref<number>(0)
    const renderPager = computed(() => {
      return Math.ceil(props.total / props.pageSize)
    })

    return () => (
      <div class="cc-pagination">

      </div>
    )
  }
})

export default CcPagination;
