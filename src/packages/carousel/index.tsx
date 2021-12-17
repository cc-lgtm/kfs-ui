import {
  defineComponent
} from 'vue'
import CcSwperItem from '@/packages/swperitem/index'
import './index.scss'

const CcSwper = defineComponent({
  name: 'cc-swper',
  components: {CcSwperItem},
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
  setup(props, { emit, slots }) {
    const slot_arr = slots.default?.()

    const renderSwper = () => {
      return slot_arr?.map((item, index) => (
        <div class="cc-swper-box" key={index}>
          { item }
        </div>
      ))
    }

    return () => (
      <div class="cc-swper">
        {renderSwper()}
      </div>
    )
  }
})

export default CcSwper;
