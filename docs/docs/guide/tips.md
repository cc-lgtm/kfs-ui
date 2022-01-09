# Tips
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-tips tips="js是浏览器寄生语言">摸我一下</cc-tips>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义tips的样式类名 | `string` | `-` | `-`  |
| tips | 提示的文字 | `string` | `-` | `-` |
| color | 提示的文字颜色 | `string` | `-` | `#57606f` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| hover | 鼠标悬停触发事件 | `-` |
| hoverout | 鼠标离开触发事件 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Tips`内自定义内容 |

#### 源码
```tsx
import {
  defineComponent
} from 'vue'
import './index.scss';
import { useState, useClass, useStyle } from './../utils/hooks/index'

const CcTips = defineComponent({
  name: 'cc-tips',
  props: {
    tips: {
      type: String
    },
    class: {
      type: String
    },
    color: {
      type: String,
      default: '#57606f'
    },
  },
  emits: ['hover', 'hoverout'],
  setup(props, { slots, emit }) {
    const [tips, useTips] = useState<boolean>(false)
    const onHover = (e: Event) => {
      useTips(true)
      emit('hover', e)
    }
    const onHoverOut = (e: Event) => {
      useTips(false)
      emit('hoverout', e)
    }

    const styles = useStyle({
      '--color': props.color,
      '--opacity': tips.value ? 1 : 0
    })
    const className = useClass((classes) => {
      props.class && classes.push(props.class)
    }, ['cc-tips'])

    return () => (
      <div class={className} onMouseover={onHover} onMouseout={onHoverOut}>
        { slots.default?.() }
        { <div class="hover-tips" style={styles}>{ props.tips }</div> }
      </div>
    )
  }
})

export default CcTips;
```
