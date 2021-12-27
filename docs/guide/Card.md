## Card 卡片
*基础的容器*
#### 默认的
:::demo
```vue
<template>
  <div>
    <cc-card value="vue" icon=""></cc-card>
  </div>
</template>
```
:::

#### 阴影
:::demo 使用`shadow`属性禁用 Card。
```vue
<template>
  <div style="display: flex; width: 30%; justify-content: space-around;">
    <cc-card value="一直" icon="" shadow="always"></cc-card>
    <cc-card value="悬停" icon="" shadow="hover"></cc-card>
    <cc-card value="从不" icon="" shadow="never"></cc-card>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义卡片的样式类名 | `string` | `-` | `-`  |
| value | 卡片的描述文字 | `string` | `-` | `-` |
| shadow | 卡片的阴影 | `string` | `always`,`hover`,`never` | `always` |
| icon | 卡片图片地址 | `string` | `-` | `-` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| click | 卡片点击时触发 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Card`内自定义内容 |
