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
        'opacity': opacity.value
      }
      return style
    })

    return () => (
      <div class="cc-tips" onMouseover={onHover} onMouseout={onHoverOut}>
        { props.tips }
        { <div class="hover-tips" style={styles.value}>{ props.tips }</div> }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcTips;
