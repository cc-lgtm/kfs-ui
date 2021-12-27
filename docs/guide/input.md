# Input
*用于让用户输入数据*
#### 基础
:::demo
```vue
<template>
  <div>
    <cc-input />
  </div>
</template>
```
:::

#### 禁用
:::demo
```vue
<template>
  <div>
    <cc-input disabled />
  </div>
</template>
```
:::

#### 只读
:::demo
```vue
<template>
  <div>
    <cc-input readonly />
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| className | 自定义输入框的样式类名 | `string` | `-` | `-`  |
| type  | 输入框的类型 | `string` | `text`,`number`,`password` | `text` |
| value | 输入框的默认值 | `string` | `-` | `-` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| readonly | 是否只读 | `boolean` | `true`,`false` | `false` |
| tips | 输入框的placeholder | `string` | `-` | `请输入...` |
| leftText | 输入框的左边文字 | `string` | `-` | `-` |
| leftIcon | 输入框左边图标 | `string` | `-` | `-` |
| rightIcon | 输入框右边图标 | `string` | `-` | `-` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| update:input | 输入框输入时触发 | `当前的值` |
| click | 输入框右边icon点击触发 | `-` |
| inputChange | 当前值改变时触发 | `当前的值` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Input`内自定义内容 |
