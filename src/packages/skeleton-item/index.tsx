import {
  computed,
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type VariableType = 'p' | 'text' | 'h1' | 'h3' | 'rect' | 'circle' | 'image' | 'button' | 'caption'

const CcSkeletonItem = defineComponent({
  name: 'cc-skeleton-item',
  props: {
    variable: {
      type: String as PropType<VariableType>,
      default: 'text'
    }
  },
  setup(props) {
    const skeletonItemClass = computed(() => {
      return `cc-skeleton-item-${props.variable}`
    })
    return () => (
      <div class="box">
        <div class={skeletonItemClass.value}></div>
      </div>
    )
  }
})

export default CcSkeletonItem;
