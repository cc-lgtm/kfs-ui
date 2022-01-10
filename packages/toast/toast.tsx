import {
  defineComponent,
  PropType
} from 'vue'
import './toast.scss'
import { useStyle } from '../utils/hooks'
import { Type } from '../utils/theme'

const CcToast = defineComponent({
  name: 'cc-toast',
  props: {
    type: {
      type: String as PropType<Type>,
      default: 'success'
    }
  },
  setup(props, { slots }) {
    const styles = useStyle({
      '--toast-bg': `var(--theme-bg-${props.type})`
    })

    return () => (
      <div
        class="cc-toast"
        style={styles}
      >{slots.default?.()}</div>
    )
  }
})

export default CcToast;
