import { defineComponent, onMounted, ref } from "vue";
import Button from '../packages/button/index'
import { useRef } from './../packages/utils/hooks/index'

const App: Record<string, unknown> = defineComponent({
  components: {Button},
  setup() {
    return () => (
      <div>
        <Button type="default" />
      </div>
    );
  },
});

export default App;
