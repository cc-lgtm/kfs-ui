import {
  defineComponent,
  PropType,
  onMounted
} from 'vue'
import './toast.scss'
import { useStyle } from '../utils/hooks'
import { Type } from '../utils/theme'

const CcToast = defineComponent({
  name: 'cc-toast',
  props: {
    text: String,
    type: {
      type: String as PropType<Type>,
      default: 'success'
    },
    success: Function as PropType<() => void>
  },
  setup(props) {
    const styles = useStyle({
      '--toast-bg': props.type === 'default' ? '#ccc' : `var(--theme-bg-${props.type})`
    })

    return () => (
      <div
        class="cc-toast"
        style={styles}
      >{props.text}</div>
    )
  }
})

export default CcToast;
