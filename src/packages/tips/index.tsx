import {
  defineComponent, mergeProps
} from 'vue'
import './index.scss';

const CcTips = defineComponent({
  name: 'cc-tips',
  props: {

  },
  setup(props, { slots, emit }) {

    return () => {
      <div class="cc-tips">
        
      </div>
    }
  }
})

export default CcTips;
