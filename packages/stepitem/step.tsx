import {
  defineComponent
} from 'vue'
import './step.scss'

const CcStepItem = defineComponent({
  name: 'cc-step',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  },
  setup(props) {

    const renderIcon = () => {
      if (props.icon) return <img class="icon" src={props.icon} alt="icon" />
      return <div class="simple"></div>
    }

    return () => (
      <div class="cc-stepitem">
        { renderIcon() }
        <span class="title">{props.title}</span>
        <div class="description">{props.description}</div>
      </div>
    )
  }
})

export default CcStepItem;
