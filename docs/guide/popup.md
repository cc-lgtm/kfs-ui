# Popup
*用于提示用户输入*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-button
      value="点我一下"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="confirm"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 上传
:::demo
```vue
<template>
  <div>
    <cc-button
      type="success"
      value="点我一下"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="upload"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 消息
:::demo
```vue
<template>
  <div>
    <cc-button
      type="warn"
      value="点我一下"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="message"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| title | 提示框的名字 | `string` | `-` | `-`  |
| type  | 提示框的类型 | `string` | `message`,`confirm`,`upload` | `upload` |
| content | 提示框的内容 | `string` | `-` | `- |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| close | 弹框关闭时触发 | `-` |
| confirm | 弹框确认时触发 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Popup`内自定义内容 |
