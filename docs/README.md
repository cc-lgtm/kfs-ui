---
home: true
features:
- title: 介绍
  details: 该项目是自己写着玩的，没啥大用。
footer: MIT | cc-lgtm
---
<div style="margin: 10px auto">
  <cc-button value="起步" type="success" @click="goto" />
</div>

<script setup lang="ts">
const goto = () => {
  location.href = '/guide/button.html'
}
</script>

> 安装
```sh
npm i kfs-ui
yarn add kfs-ui
```

> 引用
```ts
import { createApp } from 'vue'
import App from './App.vue'
import kfs-ui from 'kfs-ui/lib/index'
import 'kfs-ui/lib/index.css'

const app = createApp(App)

app
.use(kfs-ui)
.mount('#app')
```

> 方法
```ts
import cc-message from 'kfs-ui/lib/index'

cc-message({
  type: '...',
  text: '...'
})
```