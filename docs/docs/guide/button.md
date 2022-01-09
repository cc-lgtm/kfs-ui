## Button 按钮
*用于一个基础的操作*
#### 不同类型
:::demo 使用`type`属性来定义 Button 的类型。
```vue
<template>
  <div style="display: flex">
    <cc-button>按钮</cc-button>
    <cc-button type="success">按钮</cc-button>
    <cc-button type="warn">按钮</cc-button>
    <cc-button type="error">按钮</cc-button>
  </div>
</template>
```
:::

#### 禁用状态
:::demo 使用`disabled`属性禁用 Button。
```vue
<template>
  <div style="display: flex">
    <cc-button disabled>按钮</cc-button>
    <cc-button type="success" disabled>按钮</cc-button>
    <cc-button type="warn" disabled>按钮</cc-button>
    <cc-button type="error" disabled>按钮</cc-button>
  </div>
</template>
```
:::

#### 加载中
:::demo 使用`isLoading`属性让 Button 加载。
```vue
<template>
  <div style="display: flex">
    <cc-button isLoading>按钮</cc-button>
    <cc-button :isLoading="isLoading" @click="onClick">按钮</cc-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const isLoading = ref(false)
    const onClick = () => isLoading.value = true
    return {
      isLoading,
      onClick
    }
  }
})
</script>
```
:::

#### 不同尺寸
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div style="display: flex">
    <cc-button size="mini">按钮</cc-button>
    <cc-button size="small">按钮</cc-button>
    <cc-button size="medium">按钮</cc-button>
  </div>
</template>
```
:::

#### 圆形(角)按钮
:::demo 使用`size`属性来展示 Button 不同大小。
```vue
<template>
  <div style="display: flex">
    <cc-button circle>按钮</cc-button>
    <cc-button round="10">按钮</cc-button>
    <cc-button :round="20">按钮</cc-button>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| class | 自定义按钮的样式类名 | `string` | `-` | `-`  |
| type  | 按钮的类型 | `string` | `success`,`warn`,`error`,`defalut` | `defalut` |
| size | 按钮的尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |
| circle | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁止点击 | `boolean` | `true`,`false` | `false` |
| isLoading | 是否开启加载 | `boolean` | `true`,`false` | `false` |
| round | 按钮的圆角 | `number`,`string` | `-` | `0` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| click | 按钮点击时触发 | `-` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Button`内自定义内容 |

#### 源码
```tsx
import {
  defineComponent,
  PropType
} from "vue";
import "./index.scss";
import CcLoading from '../loading/index';
import { Type, Size } from './../utils/theme/index'
import { useClass, useStyle } from './../utils/hooks/index'

const CcButton = defineComponent({
  name: "cc-button",
  components: {CcLoading},
  props: {
    class: {
      type: String
    },
    type: {
      type: String as PropType<Type>,
      default: "default"
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: '按钮'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    round: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: Event) => {
      if (props.isLoading) return;
      if (props.disabled) return;
      emit('click', e)
    }

    const className = useClass((classes) => {
      props.type && classes.push(`cc-button-${props.type}`)
      props.isLoading && classes.push('cc-button-isLoading')
      props.circle && classes.push('cc-button-isCircle')
      props.disabled && classes.push('cc-button-isDisabled')
      props.class && classes.push(props.class)
    }, ['cc-button'])

    const r = typeof props.round === "string" ? +props.round : props.round;
    const sizeMap = {
      'large': 200,
      'medium': 150,
      'small': 100,
      'mini': 50
    }
    const styles = useStyle({
      '--round': r + 'px',
      '--size': sizeMap[props.size] + 'px'
    })

    const render = () => {
      const icon = slots['icon']
      const _default = slots['default']
      if (props.isLoading) {
        return <cc-loading type="loadEffect" />
      }
      return (
        <>
          {icon ? <div class="icon">{icon()}</div> : _default?.()}
          {props.value}
        </>
      )
    }
    
    return () => (
      <>
        <button
          class={className}
          onClick={onClick}
          style={styles}
        >
          { render() }
        </button>
      </>
    )
  }
})

export default CcButton;
```
