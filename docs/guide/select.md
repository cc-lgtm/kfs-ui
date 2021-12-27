# Select
*用于一组数据的选择*
#### 普通的
:::demo
```vue
<template>
  <div>
    <cc-select placeholder="select">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::

#### 禁用状态
:::demo 使用`disabled`属性禁用 select。
```vue
<template>
  <div style="display: flex">
    <cc-select placeholder="select1" disabled>
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select2">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::

#### 不同尺寸
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div style="display: flex">
    <cc-select placeholder="select1" disabled size="mini">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select2" size="small">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select3" disabled size="medium">
      <cc-option label="js" />
      <cc-option label="css" />
      <cc-option label="html" />
    </cc-select>
    <cc-select placeholder="select4" size="large">
      <cc-option label="js" />
      <cc-option label="css" disabled />
      <cc-option label="html" />
    </cc-select>
  </div>
</template>
```
:::

#### select属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| modelValue | 绑定值 | `string`,`string[]` | `-` | `-`  |
| placeholder  | placeholder | `string` | `-`| `请输入` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |
| disabled | 是否禁止使用 | `boolean` | `true`,`false` | `false` |

#### option属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 选项唯一值 | `string` | `-` | `-`  |
| label  | 选项的文字 | `string` | `-`| `-` |
| disabled | 是否禁止使用 | `boolean` | `true`,`false` | `false` |

#### select事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| change | 选择时触发 | `当前值` |
