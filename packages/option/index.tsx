import {
  defineComponent
} from 'vue'
import './index.scss'
import { useClass } from './../utils/hooks/index'

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
    const className = useClass((classes) => {
      props.disabled && classes.push('cc-option-disabled')
    }, ['cc-option'])

    return () => (
      <div class={className}>
        {props.label}
      </div>
    )
  }
})

export default CcOption;
