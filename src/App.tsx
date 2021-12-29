import { defineComponent } from "vue";
import Button from '../packages/button/index'
import Tips from '../packages/tips/index'
import Drawer from '../packages/drawer/index'

const App: Record<string, unknown> = defineComponent({
  components: {Button, Tips, Drawer},
  setup() {
    const configs = [{
      conponent: <Tips>tips</Tips>
    }] as Array<{[propname: string]: any}>
    return () => (
      <div>
        <Button type="default" />
        <Drawer />
        {
          configs.map((c, _) => (
            <c.conponent></c.conponent>
          ))
        }
      </div>
    );
  },
});

export default App;
