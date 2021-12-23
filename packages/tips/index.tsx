import {
  defineComponent,
  computed,
  ref,
  CSSProperties
} from 'vue'
import './index.scss';

const CcTips = defineComponent({
  name: 'cc-tips',
  props: {
    tips: {
      type: String
    },
    class: {
      type: String
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    },
    color: {
      type: String,
      default: '#57606f'
    },
    tipsColor: {
      type: String,
      default: '#000'
    }
  },
  emits: ['hover', 'hoverout'],
  setup(props, { slots, emit }) {
    const isTips = ref<boolean>(false)
    const opacity = ref<number>(0)
    const onHover = (e: Event) => {
      isTips.value = true
      emit('hover', e)
    }
    const onHoverOut = (e: Event) => {
      isTips.value = false
      emit('hoverout', e)
    }

    const styles = computed(() => {
      if (isTips.value) return;
      const style: CSSProperties & {[propname: string]: any} = {
        '--animation': 'hidetip 3s 1',
        '--opacity': opacity.value
      }
      return style
    })

    const colorStyle = computed(() => {
      const style: CSSProperties & {[propname: string]: any} = {
        '--bg': props.background,
        '--color': props.color,
        '--tipsColor': props.tipsColor
      }
      return Object.assign(styles.value, style)
    })

    const classes = computed(() => {
      const classes = ['cc-tips']
      props.class && classes.push(props.class)
      return classes.join(' ')
    })

    return () => (
      <div class={classes.value} onMouseover={onHover} onMouseout={onHoverOut}>
        { props.tips }
        { <div class="hover-tips" style={colorStyle.value}>{ props.tips }</div> }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcTips;
