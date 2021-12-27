# Steps
*用于展示当前步骤*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-stepbar :active="1" :space="100">
      <cc-stepitem />
      <cc-stepitem />
      <cc-stepitem />
      <cc-stepitem />
    </cc-stepbar>
  </div>
</template>
```
:::

#### 标题和描述
:::demo
```vue
<template>
  <div style="height: 200px">
    <cc-stepbar :active="2" :space="100">
      <cc-stepitem title="title1" description="这是一条描述" />
      <cc-stepitem title="title2" description="这是一条很长描述" />
      <cc-stepitem title="title3" description="这是一条很长很长描述" />
      <cc-stepitem title="title4" description="这是一条很长很长很长描述" />
    </cc-stepbar>
  </div>
</template>
```
:::

#### steps属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| space  | 步骤间隔 | `string`,`number` | `-` | `-` |
| direction | 布局 | `string` | `vertical`,`horizontal` | `horizontal` |
| active | 当前步骤 | `string` | `-` | `-` |
| processStatus | 过程状态 | `string` | `StepStatus` | `process` |
| finishStatus | 完成状态 | `string` | `StepStatus` | `finish` |

#### 类型描述
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| StepStatus | 步骤状态 | `string` | `wait`,`process`,`finish`,`error`,`success` | `-`  |

#### step属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| title | 步骤标题 | `string` | `-` | `-`  |
| description  | 步骤描述 | `string` | `-` | `-` |
| icon | 步骤图标 | `string` | `-` | `-` |
