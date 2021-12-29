import { defineComponent, onMounted, ref } from "vue";
import Button from '../packages/button/index'
import { useRef } from './../packages/utils/hooks/index'

const App: Record<string, unknown> = defineComponent({
  components: {Button},
  setup() {
    const buttonRef = useRef<HTMLDivElement>('el')
    onMounted(() => {
      console.log(buttonRef)
    })
    return () => (
      <div>
        <div ref={() => buttonRef}>aaaa</div>
        <Button type="default" />
      </div>
    );
  },
});

export default App;
