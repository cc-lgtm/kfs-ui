# Rating
*一般用于用户评分*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-rate />
  </div>
</template>
```
:::

#### 禁用
:::demo
```vue
<template>
  <div>
    <cc-rate disabled value="5" />
  </div>
</template>
```
:::

#### 带文字
:::demo
```vue
<template>
  <div>
    <cc-rate value="3" showText />
  </div>
</template>
```
:::

#### 带评分
:::demo
```vue
<template>
  <div>
    <cc-rate value="1" showScore />
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 评分的初始值 | `string` | `-` | `0`  |
| showScore | 是否显示分数 | `boolean` | `true`,`false` | `false` |
| showText | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
