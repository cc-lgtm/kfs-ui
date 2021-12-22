import { defineComponent } from "vue";
import Button from './../packages/button/index'

const App: Record<string, unknown> = defineComponent({
  components: {Button},
  setup() {
    return () => (
      <div>
        <Button></Button>
        <Button type="success" />
        <Button type="error" />
        <Button type="warn" />
      </div>
    );
  },
});

export default App;
