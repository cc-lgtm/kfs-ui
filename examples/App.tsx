import { defineComponent } from "vue";
const App: Record<string, unknown> = defineComponent({
  setup() {
    return () => (
      <div>
        <cc-button />
      </div>
    );
  },
});

export default App;
