# Tabs
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-tabs :active=0>
      <cc-tab title="title1" />
      <cc-tab title="title2" />
      <cc-tab title="title3" />
    </cc-tabs>
  </div>
</template>
```
:::

#### tabs属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| active  | 步骤间隔 | `string`,`number` | `-` | `0` |

#### tab属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| title | tab标题 | `string` | `-` | `-`  |