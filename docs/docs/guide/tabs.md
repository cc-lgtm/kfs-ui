# Tabs
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-tabs :active=0>
      <cc-tab title="title1" />
      <cc-tab title="title2" />
      <cc-tab title="title3" />
    </cc-tabs>
  </div>
</template>
```
:::

#### tabs属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| active  | 步骤间隔 | `string`,`number` | `-` | `0` |

#### tab属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| title | tab标题 | `string` | `-` | `-`  |

#### 源码
```tsx
import {
  defineComponent,
  watch
} from 'vue'
import CcTap from '../tab'
import './index.scss'
import { useState, useClass } from './../utils/hooks/index'

const CcTabs = defineComponent({
  name: 'cc-tabs',
  components: {CcTap},
  props: {
    active: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['change', 'click'],
  setup(props, { slots, emit }) {
    const [tabs] = useState<HTMLDivElement>()
    const slot_arr = slots.default?.()
    const [activeVal, useActiveVal] = useState<number | string>(props.active)

    watch(activeVal, () => {
      emit('change', activeVal.value)
    })

    const activeClass = (index: number) => {
      const classes = ['cc-tabs-box']
      index === activeVal.value && classes.push('active')
      return classes.join(' ')
    }

    const onClick = (e: Event, index: number) => {
      useActiveVal(index)
      emit('click', e)
    }

    const renderTabs = () => {
      return slot_arr?.map((tab, index) => (
        <div
          class={activeClass(index)}
          key={index}
          onClick={(e) => onClick(e, index)}
        >{tab}</div>
      ))
    }

    return () => (
      <div class="cc-tabs" ref={tabs}>
        {renderTabs()}
      </div>
    )
  }
})

export default CcTabs;
```