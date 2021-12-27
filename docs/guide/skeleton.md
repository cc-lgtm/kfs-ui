# Skeleton
*用于填充数据*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true">
      <cc-skeleton-item type="text"></cc-skeleton-item>
    </cc-skeleton>
  </div>
</template>
```
:::

#### 多行
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true" :rows=3>
    </cc-skeleton>
  </div>
</template>
```
:::

#### 设置长度
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true" :rows=3 :rowsWidth="['200px','150px','100px']">
    </cc-skeleton>
  </div>
</template>
```
:::

#### 其他类型
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true">
      <cc-skeleton-item type="rect"></cc-skeleton-item>
      <cc-skeleton-item type="h"></cc-skeleton-item>
      <cc-skeleton-item type="button"></cc-skeleton-item>
    </cc-skeleton>
  </div>
</template>
```
:::

#### skeleton属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| rows | 渲染多行 | `number` | `-` | `0`  |
| rowsWidth  | 渲染多行的宽度 | `string[]`,`number[]` | `-`| `-` |
| loading | 是否显示 | `boolean` | `true`,`false` | `false` |

#### skeleton-item属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| variable | skeleton类型 | `string` | `variable-type` | `text`  |

#### 类型参考
| 类型 | 可选值 |
| ---- |:-----|
| variable-type |`p`,`text`,`h`,`rect`,`circle`,`image`,`button`,`caption`|
