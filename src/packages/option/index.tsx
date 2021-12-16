import {
  defineComponent
} from 'vue'
import './index.scss'

const CcOption = defineComponent({
  name: 'cc-option',
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {

  }
})

export default CcOption;
