import {
  defineComponent
} from 'vue'
import './tab.scss'

const CcTab = defineComponent({
  name: 'cc-tab',
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {

    return () => (
      <div class="cc-tab">
        <span class="cc-tab-title">{ props.title }</span>
        <div class="cc-tab-context">{slots.default?.()}</div>
      </div>
    )
  }
})

export default CcTab;
