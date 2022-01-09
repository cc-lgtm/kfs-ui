# Switch
*用于两种状态切换*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-switch size="medium" />
  </div>
</template>
```
:::

#### 禁止点击
:::demo
```vue
<template>
  <div>
    <cc-switch disabled></cc-switch>
  </div>
</template>
```
:::

#### 设置开启的value和关闭的value
:::demo
```vue
<template>
  <div>
    <cc-switch></cc-switch>
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 初始值 | `boolean` | `true`,`false` | `false`  |
| size | Switch的尺寸 | `string` | `mini`,`small`,`medium`,`large` | `medium` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| checkedValue | 开启的值 | `boolean`,`string`,`number` | `-` | `true` |
| inactiveValue | 关闭的值 | `boolean`,`string`,`number` | `-` | `false` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| change | 切换时触发 | `当前值` |

#### 源码
```tsx
import {
  CSSProperties,
  defineComponent,
  PropType,
  reactive
} from 'vue'
import './index.scss'
import { Size } from './../utils/theme/index'
import { useState, useClass, useStyle } from './../utils/hooks/index'

const CcSwitch = defineComponent({
  name: 'cc-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const className = useClass((classes) => {
      props.disabled && classes.push('cc-switch-disabled')
    }, ['cc-switch'])

    const sizeMap = {
      'mini': 60 + 'px',
      'small': 70 + 'px',
      'medium': 80 + 'px',
      'large': 90 + 'px'
    }
    const styles: CSSProperties & {[propname: string]: any} = reactive({
      '--left': 1 + 'px',
      '--bg': '#bdc3c7',
      '--w': sizeMap[props.size]
    })
    const animate = useStyle(styles)

    const [currentValue, useCurrentValue] = useState(props.inactiveValue)
    const [value, useValue] = useState<boolean>(props.value)
    const onClick = () => {
      if (props.disabled) return;
      useValue(!value.value)
      if (value.value) {
        useCurrentValue(props.checkedValue)
        styles['--left'] = +sizeMap[props.size].split('p')[0] - 30 + 'px'
        styles['--bg'] = '#3498db'
      }
      if (!value.value) {
        useCurrentValue(props.inactiveValue)
        styles['--left'] = 1 + 'px'
        styles['--bg'] = '#bdc3c7'
      }
      emit("change", currentValue.value)
    }

    return () => (
      <div
        class={className}
        style={animate.value}
        onClick={onClick}
      ></div>
    )
  }
})

export default CcSwitch;
```
