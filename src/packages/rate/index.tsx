import {
  defineComponent
} from  'vue'
import './index.scss'

const CcRate = defineComponent({
  name: 'cc-rate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    colors: {
      type: [Object, Array],
      default: ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {

    return () => (
      <div class="cc-rate">

      </div>
    )
  }
})

export default CcRate;
