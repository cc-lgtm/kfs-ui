import {
  defineComponent,
  computed,
  CSSProperties
} from 'vue'
import './index.scss';
import { useState } from './../utils/hooks/index'

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
    const [tips, useTips] = useState<boolean>(false)
    const onHover = (e: Event) => {
      useTips(true)
      emit('hover', e)
    }
    const onHoverOut = (e: Event) => {
      useTips(false)
      emit('hoverout', e)
    }

    const styles = computed(() => {
      if (tips.value) return;
      const style: CSSProperties & {[propname: string]: any} = {
        '--color': props.color,
        '--opacity': tips.value ? 1 : 0
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
