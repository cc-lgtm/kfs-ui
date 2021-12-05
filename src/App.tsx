import { defineComponent } from "vue";
import CcButton from "./packages/button/index.tsx";

const App: Record<string, unknown> = defineComponent({
  components: {
    CcButton,
  },
  setup() {
    return () => (
      <div>
        <cc-button type="normal" round={10} isLoading value="test1" click={() => console.log(1)}>aaa</cc-button>
        <cc-button type="error" round="20" value="test2" click={() => console.log(2)}>bbb</cc-button>
        <cc-button type="warn" round={20} value="test3" click={() => console.log(3)}>ccc</cc-button>
      </div>
    );
  },
});

export default App;
