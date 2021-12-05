import { defineComponent } from 'vue'

const CcLoading = defineComponent({
  name: "cc-loading",
  props: {

  },
  setup(props, { emit, slots }) {

    return () => (
      <div class="cc-loading">loading...</div>
    )
  }
})

export default CcLoading;