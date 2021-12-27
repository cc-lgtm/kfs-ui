# Pagination
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-pagination total="100" />
  </div>
</template>
```
:::

#### 背景
:::demo
```vue
<template>
  <div>
    <cc-pagination total="100" background />
  </div>
</template>
```
:::

#### 布局
:::demo
```vue
<template>
  <div>
    <cc-pagination total="100" background :layout="'prev, pager, next'" />
    <cc-pagination total="100" background :layout="'jumper, prev, pager, next'" />
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| nextText | 下一页文字 | `string` | `-` | `-`  |
| prevText  | 上一页文字 | `string` | `-` | `-` |
| total | 总数据量 | `number` | `-` | `-` |
| pageSize | 每页显示多少数据 | `number` | `-` | `10` |
| background | 是否显示背景 | `boolean` | `true`,`false` | `false` |
| currentPage | 当前的页数 | `string` | `-` | `1` |
| layout | 布局 | `string` | `total`,`prev`,`pager`,`next`,`jumper` | `'total, prev, pager, next, jumper'` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| currentChange | 当前页数变化时触发 | `当前的值` |
| prevClick | 点击上一页触发 | `当前的值` |
| nextClick | 点击下一页触发 | `当前的值` |
