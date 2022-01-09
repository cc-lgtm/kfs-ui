---
home: true
features:
- title: 介绍
  details: 该项目是自己学习vue3写着玩的，没啥大用。
footer: MIT | cc-lgtm
---

> 安装
```sh
npm i kfs-ui
yarn add kfs-ui
```

> 引用
```ts
import { createApp } from 'vue'
import App from './App.vue'
import KfsUI, { CcButton, CcLink } from 'kfs-ui/lib'
import 'kfs-ui/lib/style.css'

const app = createApp(App)

app
.use(KfsUI)
.use(CcButton)
.use(CcLink)
.mount('#app')
```

> 方法
```ts
import Message from 'kfs-ui/lib/message/messageFn'

Message({
  type: '...',
  text: '...'
})
```