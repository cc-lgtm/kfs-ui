import {
  defineComponent
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
      type: Number
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

    return () => (
      <div class="cc-pagination">

      </div>
    )
  }
})

export default CcPagination;
