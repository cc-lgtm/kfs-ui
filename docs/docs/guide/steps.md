# Steps
*用于展示当前步骤*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-steps :active="1" :space="100">
      <cc-step />
      <cc-step />
      <cc-step />
      <cc-step />
    </cc-steps>
  </div>
</template>
```
:::

#### 标题和描述
:::demo
```vue
<template>
  <div style="height: 200px">
    <cc-steps :active="2" :space="100">
      <cc-step title="title1" description="这是一条描述" />
      <cc-step title="title2" description="这是一条很长描述" />
      <cc-step title="title3" description="这是一条很长很长描述" />
      <cc-step title="title4" description="这是一条很长很长很长描述" />
    </cc-steps>
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

#### 源码
```tsx
import {
  defineComponent,
  PropType,
  CSSProperties
} from 'vue'
import CcStepItem from '../stepitem/index'
import './index.scss'
import { useStyle } from './../utils/hooks/index'

type DirectionType = 'vertical' | 'horizontal'
type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'success'

const CcStepBar = defineComponent({
  name: 'cc-stepbar',
  components: {CcStepItem},
  props: {
    space: {
      type: [Number, String]
    },
    direction: {
      type: String as PropType<DirectionType>,
      default: 'horizontal'
    },
    active: {
      type: Number,
      default: 0
    },
    processStatus: {
      type: String as PropType<StepStatus>,
      default: 'process'
    },
    finishStatus: {
      type: String as PropType<StepStatus>,
      default: 'finish'
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const slot_arr = slots.default?.()
    
    const space = +props.space!
    const style = useStyle({
      '--width': space * (slot_arr!.length - 1) + 'px'
    })

    const lineStyle = (index: number) => {
      const style = {
        '--line': +props.space! - 12 + 'px'
      } as CSSProperties

      if (index === 0) Object.assign(style, {
        '--show': 'none'
      })

      return style
    }

    const borderStyle = (index: number) => {
      if (index + 1 <= props.active) {
        return {
          'border': '2px solid #3498db'
        } as CSSProperties
      }
      return {
        '--border': '2px solid #000'
      } as CSSProperties
    }

    const renderItem = () => {
      return slot_arr!.map((slot, index) => (
        <div
          class="cc-stepbar-box"
          key={index}
          style={borderStyle(index)}
        >
          { slot }
          <span class="cc-stepbar-box-index">{index + 1}</span>
          <span class="cc-stepbar-box-line" style={lineStyle(index)} />
        </div>
      ))
    }
    return () => (
      <div class="cc-stepbar" style={style}>
        {
          renderItem().map((item) => item)
        }
      </div>
    )
  }
})

export default CcStepBar;
```
