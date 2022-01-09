# Popup
*用于提示用户输入*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-button
      @click="onClick"
    >
    点我一下
    </cc-button>
    <cc-popup
      v-if="popupStatus"
      type="confirm"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 上传
:::demo
```vue
<template>
  <div>
    <cc-button
      type="success"
      @click="onClick"
    >点我一下
    </cc-button>
    <cc-popup
      v-if="popupStatus"
      type="upload"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 消息
:::demo
```vue
<template>
  <div>
    <cc-button
      type="warn"
      @click="onClick"
    >点我一下
    </cc-button>
    <cc-popup
      v-if="popupStatus"
      type="message"
      title="提示"
      content="我是一个提示"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
</script>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| title | 提示框的名字 | `string` | `-` | `-`  |
| type  | 提示框的类型 | `string` | `message`,`confirm`,`upload` | `upload` |
| content | 提示框的内容 | `string` | `-` | `- |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| close | 弹框关闭时触发 | `-` |
| confirm | 弹框确认时触发 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Popup`内自定义内容 |

#### 源码
```tsx
import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'
import CcButton from '../button/index';
import CcInput from '../input';
import { useState } from './../utils/hooks/index'

type PopupType = 'message' | 'confirm' | 'upload'

const CcPopup = defineComponent({
  name: 'cc-popup',
  components: { CcButton, CcInput },
  props: {
    type: {
      type: String as PropType<PopupType>,
      default: 'upload  '
    },
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'content'
    }
  },
  emits: ['close', 'confirm'],
  setup(props, { emit, slots }) {
    const [showPopup, useShowPopup] = useState<boolean>(true)
    const onClose = (e: Event) => {
      useShowPopup(false)
      emit('close', e)
    }

    const onConfirm = (e: Event) => {
      useShowPopup(false)
      emit('confirm', e)
    }

    const renderType = () => {
      if (props.type === 'confirm') {
        return (
          <div class="content">{ props.content }</div>
        )
      } else {
        return (
          <CcInput leftText="上传信息" className="input" />
        )
      }
    }

    return () => (
      showPopup.value &&
      <div class="cc-popup">
        <div class="cc-popup-box">
          <div class="top">
            <span class="title">{ props.title }</span>
          </div>
          { renderType() }
          <div class="btns">
            { props.type !== 'message' && <CcButton value="取消" onClick={onClose} /> }
            <CcButton value="确认" type="success" onClick={onConfirm} />
          </div>
        </div>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcPopup;
```
