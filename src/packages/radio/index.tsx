import {
  defineComponent
} from 'vue'
import './index.scss'

const CcRadio = defineComponent({
  name: 'cc-radio',
  props: {

  },
  setup(props, { emit, slots }) {

    return () => (
      <div class="cc-radio">
      </div>
    )
  }
})

export default CcRadio;
