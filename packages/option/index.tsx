import {
  computed,
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
    const className = computed(() => {
      const classes = ['cc-option']
      props.disabled && classes.push('cc-option-disabled')
      return classes.join(' ')
    })

    return () => (
      <div class={className.value}>
        {props.label}
      </div>
    )
  }
})

export default CcOption;
