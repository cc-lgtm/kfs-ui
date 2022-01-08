import {
  defineComponent,
  watch
} from 'vue'
import CcTap from '../tab/tab'
import './tabs.scss'
import { useState } from '../utils/hooks/index'

const CcTabs = defineComponent({
  name: 'cc-tabs',
  components: {CcTap},
  props: {
    active: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['change', 'click'],
  setup(props, { slots, emit }) {
    const slot_arr = slots.default?.()
    const [activeVal, useActiveVal] = useState<number | string>(props.active)

    watch(activeVal, () => {
      emit('change', activeVal.value)
    })

    const activeClass = (index: number) => {
      const classes = ['cc-tabs-box']
      index === activeVal.value && classes.push('active')
      return classes.join(' ')
    }

    const onClick = (e: Event, index: number) => {
      useActiveVal(index)
      emit('click', e)
    }

    const renderTabs = () => {
      return slot_arr?.map((tab, index) => (
        <div
          class={activeClass(index)}
          key={index}
          onClick={(e) => onClick(e, index)}
        >{tab}</div>
      ))
    }

    return () => (
      <div class="cc-tabs">
        {renderTabs()}
      </div>
    )
  }
})

export default CcTabs;
