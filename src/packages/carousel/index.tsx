import {
  defineComponent
} from 'vue'
import './index.scss'

const CcSwper = defineComponent({
  name: 'cc-swper',
  props: {
    duration: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: false
    },
    initalValue: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change'],
  setup(props, { emit }) {

    return () => (
      <div></div>
    )
  }
})

export default CcSwper;
