# Message
*用于提示用户*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-button type="success" @click="openMessage">Message</cc-button>
    <cc-button type="success" @click="openToast">Toast</cc-button>
  </div>
</template>

<script setup>
  import { getCurrentInstance } from 'vue'
  const { proxy } = getCurrentInstance()
  const openMessage = () => {
    proxy.Message.default({
      text: 'text'
    })
  }
  const openToast = () => {
    proxy.Toast.default({
      text: 'text',
      success() {
        alert('toast成功了')
      }
    })
  }
</script>
```
:::

#### message属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| type | 提示类型 | `string` | `success`,`error`,`warn`,`default` | `default`  |
| text  | 提示内容 | `string` | `-`| `-` |
| top | 距离顶部距离 | `string` | `-` | `15` |

#### 源码
```tsx
import {
  defineComponent,
  onMounted,
  TransitionGroup,
  Transition,
  PropType,
  computed
} from 'vue'
import './index.scss'
import { Type } from './../utils/theme/index'
import { useState } from './../utils/hooks/index'

const CcMessage = defineComponent({
  name: 'cc-message',
  components: { TransitionGroup, Transition },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<Type>,
      default: 'default'
    },
    top: {
      type: String,
      default: '15'
    }
  },
  setup(props, { slots }) {

    const style: {[propname: string]: any} = {
      default: {
        '--color': '#fff',
        '--backgroundColor': 'rgb(236, 240, 241)',
        '--borderColor': 'rgb(233, 230, 221)'
      },
      warn: {
        '--color': '#E6A23C',
        '--backgroundColor': 'rgb(253, 246, 236)',
        '--borderColor': 'rgb(250, 236, 216)'
      },
      error: {
        '--color': '#F56C6C',
        '--backgroundColor': 'rgb(254, 240, 240)',
        '--borderColor': 'rgb(253, 226, 226)'
      },
      success: {
        '--color': '#67C23A',
        '--backgroundColor': 'rgb(240, 249, 235)',
        '--borderColor': 'rgb(225, 243, 216)'
      }
    }

    const [flag, useFlag] = useState<boolean>(false)

    onMounted(() => {
      useFlag(true)
    })

    const messageStyle = computed(() => {
      return Object.assign(style[props.type], {
        '--top': props.top + 'px'
      })
    })

    return () => (
      <TransitionGroup appear={false} persisted={false}>
        <Transition name="down" mode={undefined}>
          {
            flag.value &&
            <div class="cc-message" style={messageStyle.value}>
              <span class="text">{props.text}</span>
            </div>
          }
          { slots.default?.() }
        </Transition>
      </TransitionGroup>
    )
  }
})

export default CcMessage;

import { createVNode, render, ref } from 'vue'
import CcMessage from './index'

const div: HTMLDivElement = document.createElement('div')
div.setAttribute('class', 'cc-message')
document.body.appendChild(div)

const timer = ref<number | any>(null)

export default ({ type, text }: {[propname: string]: any}) => {
 const vnode = createVNode(CcMessage, { type, text })
 render(vnode, div)

 clearTimeout(timer)
 timer.value = setTimeout(() => {
   render(null, div)
 }, 2000)
}
```
