import {
  computed,
  CSSProperties,
  defineComponent,
  PropType,
  ref
} from 'vue'
import './index.scss'
import close_icon from './../assets/close.svg';

type drawerPosition = 'left' | 'top' | 'right' | 'bottom'

const CcDrawer = defineComponent({
  name: 'cc-drawer',
  props: {
    position: {
      type: String as PropType<drawerPosition>,
      default: 'left'
    },
    showDrawer: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: [String, Array, Object],
      default: 'content'
    }
  },
  setup(props, { emit, slots }) {
    const renderContent = () => {
      const valueType = Object.prototype.toString.call(props.content)
      const typeMap: {[propname: string]: string} = {
        '[object, String]': 'string',
        '[object, Array]': 'array',
        '[object, Object]': 'object'
      }
      const currentType = ref<string | null>(null)
      Object.keys(typeMap).forEach((type, _) => {
        if (valueType === type) {
          currentType.value = typeMap[type]
        } else {
          currentType.value = null
        }
      })
      if (!props.content) throw Error('类型必须为 string | array | object');
      if (currentType.value === 'string') return props.content;
      // if (currentType.value === 'array' || currentType.value === 'object') {
      // }
    }

    const getScorllW = () => {
      const w = ref<string>(document.body.scrollWidth + 'px')
      window.onresize = () => {
        w.value = document.body.scrollWidth + 'px'
      }
      return w.value
    }

    const styles = computed(() => {
      const style: CSSProperties & {[propname: string]: any} = {
        '--shadow': getScorllW()
      }
      return style
    })

    const onClose = () => {
      showDrawer.value = false
    }

    const showDrawer = ref<boolean>(true)
    const clickMask = (e: Event) => {
      const el = document.querySelector('.cc-drawer-box')
      if (el) {
        if (!el.contains(e.target as Node)) {
          showDrawer.value = false
        }
      }
    }

    return () => (
      (props.showDrawer && showDrawer.value) &&
      <div class="cc-drawer" style={styles.value} onClick={clickMask}>
        <div class='cc-drawer-box'>
          <span class='title'>{ props.title }</span>
          <div class='content'>
            {
              renderContent()
            }
          </div>
          <img src={close_icon} alt="close" onClick={onClose} />
        </div>
        {slots.default?.()}
      </div>
    )
  }
})

export default CcDrawer;
