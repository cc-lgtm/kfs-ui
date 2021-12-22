import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref
} from 'vue'
import './index.scss'
import close_icon from './../assets/close.svg';

type drawerPosition = 'left' | 'right'

const CcDrawer = defineComponent({
  name: 'cc-drawer',
  props: {
    position: {
      type: String as PropType<drawerPosition>,
      default: 'right'
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
  emits: ['opened', 'closed'],
  setup(props, { emit, slots }) {
    const renderContent = () => {
      const valueType = Object.prototype.toString.call(props.content)
      const typeMap: {[propname: string]: string} = {
        '[object, String]': 'string',
        '[object, Array]': 'array',
        '[object, Object]': 'object'
      }
      const currentType = ref<string>('')
      Object.keys(typeMap).forEach((type, _) => {
        if (valueType === type) {
          currentType.value = typeMap[type]
        }
      })
      if ((['string', 'array', 'object'].includes(currentType.value as string))) {
        throw Error('类型必须为 string | array | object');
      }
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

    const positionStyle = () => {
      const position = props.position
      const positionStyle: CSSProperties & {[propname: string]: any} = reactive({})
      if (position === 'left') {
        positionStyle['--position_top'] = 0
        positionStyle['--position_left'] = 0
        positionStyle['--mask_top'] = 0
        positionStyle['--mask_left'] = 100 + '%'
        positionStyle['--animation_name'] = 'FadeInL'
      }
      if (position === 'right') {
        positionStyle['--position_top'] = 0
        positionStyle['--position_right'] = 0
        positionStyle['--mask_top'] = 0
        positionStyle['--mask_right'] = 100 + '%'
        positionStyle['--animation_name'] = 'FadeInR'
      }
      return positionStyle
    }

    const styles = computed(() => {
      const style: CSSProperties & {[propname: string]: any} = {
        '--shadow': getScorllW()
      }
      return Object.assign(style, positionStyle())
    })

    const onClose = () => {
      showDrawer.value = false
      emit('closed', showDrawer.value)
    }

    onMounted(() => {
      showDrawer.value = true
      emit('opened', showDrawer.value)
    })

    const showDrawer = ref<boolean>(false)
    const clickMask = (e: Event) => {
      const el = document.querySelector('.cc-drawer-box')
      if (el) {
        if (!el.contains(e.target as Node)) {
          showDrawer.value = false
        }
      }
    }

    return () => (
      showDrawer.value &&
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
