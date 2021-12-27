# Switch
*用于两种状态切换*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-switch></cc-switch>
  </div>
</template>
```
:::

#### 禁止点击
:::demo
```vue
<template>
  <div>
    <cc-switch disabled></cc-switch>
  </div>
</template>
```
:::

#### 设置开启的value和关闭的value
:::demo
```vue
<template>
  <div>
    <cc-switch></cc-switch>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 初始值 | `boolean` | `true`,`false` | `false`  |
| size | Switch的尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| checkedValue | 开启的值 | `boolean`,`string`,`number` | `-` | `true` |
| inactiveValue | 关闭的值 | `boolean`,`string`,`number` | `-` | `false` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| change | 切换时触发 | `当前值` |
