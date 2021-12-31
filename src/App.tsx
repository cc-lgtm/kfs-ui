import { defineComponent, onMounted, ref } from "vue";
import Button from '../packages/button/index'
import Input from '../packages/input/index'

const App: Record<string, unknown> = defineComponent({
  components: {Button},
  setup() {
    return () => (
      <div>
        <Button type="default" />
        <Input />
      </div>
    );
  },
});

export default App;
