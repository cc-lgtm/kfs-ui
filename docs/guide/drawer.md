# Drawer
*展示侧边数据*
#### 默认
:::demo
```vue
<template>
  <div style="display:flex">
    <cc-button
      value="左"
      @click="openleft"
    />
    <cc-button
      value="右"
      @click="openright"
    />
    <cc-drawer
      :vModel="false"
      :position="left"
    />
    <cc-drawer
      :vModel="false"
      :position="right"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const left = ref<boolean>(false)
const right = ref<boolean>(false)
const openleft = () => {
  left.value = true
}
const openright = () => {
  right.value = true
}
</script>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| vModel | 是否显示 | `boolean` | `true`,`false` | `true`  |
| position | 打开位置 | `string` | `left`,`right` | `right` |
| width | 弹框大小 | `string` | `-` | `max-content` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| opened | 打开后触发 | `-` |
| closed | 关闭后触发 | `-` |
