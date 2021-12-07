import {
  defineComponent,
  PropType,
  ref
} from 'vue'
import './index.scss'

type drawerPosition = 'left' | 'top' | 'right' | 'bottom'

const CcDrawer = defineComponent({
  name: 'cc-drawer',
  props: {
    position: {
      type: String as PropType<drawerPosition>,
      default: 'left'
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
  emits: ['close'],
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
      if (currentType.value === null) return '类型必须为 string | array | object';
      if (currentType.value === 'string') return props.content;
      if (currentType.value === 'array' || currentType.value === 'object') {
      }
    }

    const onClose = (e: Event) => {
      emit('close', e)
    }

    return () => (
      <div class="cc-drawer">
        <div class='cc-drawer-box'>
          <span class='title'>{ props.title }</span>
          <div class='content'>
            {
              renderContent()
            }
          </div>
        </div>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcDrawer;
