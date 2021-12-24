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
    color: {
      type: String,
      default: '#57606f'
    },
  },
  emits: ['hover', 'hoverout'],
  setup(props, { slots, emit }) {
    const isTips = ref<boolean>(false)
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
        '--color': props.color,
        '--opacity': isTips.value ? 1 : 0
      }
      return style
    })

    const classes = computed(() => {
      const classes = ['cc-tips']
      props.class && classes.push(props.class)
      return classes.join(' ')
    })

    return () => (
      <div class={classes.value} onMouseover={onHover} onMouseout={onHoverOut}>
        { slots.default?.() }
        { <div class="hover-tips" style={styles.value}>{ props.tips }</div> }
      </div>
    )
  }
})

export default CcTips;
