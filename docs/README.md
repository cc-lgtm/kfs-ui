---
home: true
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 介绍
  details: 该项目是自己写着玩的，没啥大用。
footer: MIT | cc-lgtm
---

> 安装
```ts
npm i uninterest
```

> 引用
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { uninterest } from 'uninterest'
import 'uninterest/lib/uninterest.css'

const app = createApp(App)

app
.use(uninterest)
.mount('#app')
```

> 方法
```ts
import { Message } from 'uninterest'

Message({
  type: '...',
  text: '...'
})
```
