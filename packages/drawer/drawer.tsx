import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref
} from 'vue'
import './drawer.scss'
import { useState } from '../utils/hooks/index'

type drawerPosition = 'left' | 'right'

const CcDrawer = defineComponent({
  name: 'cc-drawer',
  props: {
    vModel: {
      type: Boolean,
      default: true
    },
    position: {
      type: String as PropType<drawerPosition>,
      default: 'right'
    },
    width: {
      type: String,
      default: '15%'
    }
  },  
  emits: ['opened', 'closed'],
  setup(props, { emit, slots }) {
    const getScorllW = ref<string>('')
    onMounted(() => {
      const [width, useWidth] = useState<string>(document.body.scrollWidth + 'px')
      window.onresize = () => {
        useWidth(document.body.scrollWidth + 'px')
      }
      getScorllW.value = width.value
    })

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
        '--shadow': getScorllW.value,
        '--w': props.width
      }
      return Object.assign(style, positionStyle())
    })
    const [showDrawer, useShowDrawer] = useState<boolean>(false)
    const onClose = () => {
      useShowDrawer(true)
      emit('closed', showDrawer.value)
    }

    onMounted(() => {
      useShowDrawer(true)
      emit('opened', showDrawer.value)
    })

    const clickMask = (e: Event) => {
      const el = document.querySelector('.cc-drawer-box')
      if (el) {
        if (!el.contains(e.target as Node)) {
          useShowDrawer(false)
        }
      }
    }

    return () => (
      showDrawer.value && props.vModel &&
      <div class="cc-drawer" style={styles.value} onClick={clickMask}>
        <div class='cc-drawer-box'>
          {slots.default?.()}
        </div>
      </div>
    )
  }
})

export default CcDrawer;
