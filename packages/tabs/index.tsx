import {
  defineComponent,
  ref,
  watch
} from 'vue'
import CcTap from './../tab'
import './index.scss'

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

    const activeVal = ref<number | string>(props.active)

    watch(activeVal, () => {
      emit('change', activeVal.value)
    })

    const tabs = ref<HTMLDivElement>()

    const activeClass = (index: number) => {
      const classes = ['cc-tabs-box']
      index === activeVal.value && classes.push('active')
      return classes.join(' ')
    }

    const onClick = (e: Event, index: number) => {
      activeVal.value = index
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
      <div class="cc-tabs" ref={tabs}>
        {renderTabs()}
      </div>
    )
  }
})

export default CcTabs;
