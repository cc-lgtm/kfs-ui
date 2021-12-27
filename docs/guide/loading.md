# Loading
*用于加载前*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-loading></cc-loading>
  </div>
</template>
```
:::

#### 类型
:::demo
```vue
<template>
  <div style="display: flex">
    <cc-loading type="effect" />
    <cc-loading type="line" />
    <cc-loading type="rect" />
    <cc-loading type="back" />
    <cc-loading type="backLine" />
  </div>
</template>
```
:::

#### loading属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| type | 类型 | `string` | `effect`,`line`,`rect`,`back`,`backLine` | `line`  |
