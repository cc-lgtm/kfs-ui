import {
  defineComponent
} from 'vue'
import './tips.scss';
import { useState, useClass, useStyle } from '../utils/hooks/index'

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

    const styles = useStyle({
      '--color': props.color,
      '--opacity': tips.value ? 1 : 0
    })
    const className = useClass((classes) => {
      props.class && classes.push(props.class)
    }, ['cc-tips'])

    return () => (
      <div class={className} onMouseover={onHover} onMouseout={onHoverOut}>
        { slots.default?.() }
        { <div class="hover-tips" style={styles}>{ props.tips }</div> }
      </div>
    )
  }
})

export default CcTips;
