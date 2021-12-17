import {
  defineComponent
} from 'vue'

const CcSwperItem = defineComponent({
  name: 'cc-swper-item',
  setup(props, { slots }) {
    return () => (
      <div class="cc-swper-item">{ slots.default?.() }</div>
    )
  }
})

export default CcSwperItem;
