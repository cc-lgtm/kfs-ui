import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { uninterest } from 'uninterest'
import 'uninterest/lib/uninterest.css'

createApp(App)
.use(router)
.use(uninterest)
.mount('#app')
