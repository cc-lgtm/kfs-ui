import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type loadType = 'loadEffect' | 'loadLine'

const CcLoading = defineComponent({
  name: "cc-loading",
  props: {
    type: {
      type: String as PropType<loadType>,
      default: 'loadEffect'
    }
  },
  emits: ['hover'],
  setup(props, { emit, slots }) {
    const hoverLoading = (e: Event) => {
      emit('hover', e)
    }

    const renderLoading = () => {
      if (props.type === 'loadLine') {
        return (
          <div class="loadEffect" onMouseover={hoverLoading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )
      }
      if (props.type === 'loadEffect') {
        return (
          <div class="loadLine" onMouseover={hoverLoading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )
      }
    }

    return () => (
      <>
        {
          renderLoading()
        }
        { slots.defalut?.() }
      </>
    )
  }
})

export default CcLoading;
