import { createApp } from "vue";
import App from "./App.vue";
import KfsUI from '../lib'
import '../lib/button/style.css'

createApp(App).use(KfsUI).mount("#app");
