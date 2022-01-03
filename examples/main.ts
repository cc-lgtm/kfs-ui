import { createApp } from "vue";
import App from "./App";
import KfsUI from './../lib/index.js'
import './../lib/index.css'

createApp(App).use(KfsUI).mount("#app");
