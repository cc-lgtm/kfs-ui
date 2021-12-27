# Message
*用于提示用户*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-button value="点我试一试" type="success" @click="openMessage"></cc-button>
  </div>
</template>

<script setup lang="ts">
  const openMessage = () => {
    $message({
      type: 'error',
      text: '我出来了'
    })
  }
</script>
```
:::

#### message属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| type | 提示类型 | `string` | `success`,`error`,`warn`,`default` | `default`  |
| text  | 提示内容 | `string` | `-`| `-` |
| top | 距离顶部距离 | `string` | `-` | `15` |
