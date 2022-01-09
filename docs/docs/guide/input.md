# Input
*用于让用户输入数据*
#### 基础
:::demo
```vue
<template>
  <div>
    <cc-input />
  </div>
</template>
```
:::

#### 禁用
:::demo
```vue
<template>
  <div>
    <cc-input disabled />
  </div>
</template>
```
:::

#### 只读
:::demo
```vue
<template>
  <div>
    <cc-input readonly />
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| className | 自定义输入框的样式类名 | `string` | `-` | `-`  |
| type  | 输入框的类型 | `string` | `text`,`number`,`password` | `text` |
| value | 输入框的默认值 | `string` | `-` | `-` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |
| readonly | 是否只读 | `boolean` | `true`,`false` | `false` |
| tips | 输入框的placeholder | `string` | `-` | `请输入...` |
| leftText | 输入框的左边文字 | `string` | `-` | `-` |
| leftIcon | 输入框左边图标 | `string` | `-` | `-` |
| rightIcon | 输入框右边图标 | `string` | `-` | `-` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| update:input | 输入框输入时触发 | `当前的值` |
| click | 输入框右边icon点击触发 | `-` |
| inputChange | 当前值改变时触发 | `当前的值` |

#### slots
| 名称 | 描述 |
| ------------- |:-------------:|
| `-` | `Input`内自定义内容 |

#### 源码
```tsx
import {
  defineComponent,
  PropType,
  watch
} from 'vue'
import './index.scss'
import { useState, useClass } from './../utils/hooks/index'

type inputType = 'text' | 'number' | 'password'

const CcInput = defineComponent({
  name: 'cc-input',
  props: {
    value: {
      type: String
    },  
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    type: {
      type: String as PropType<inputType>,
      default: 'text'
    },
    tips: {
      type: String,
      default: '请输入...'
    },
    leftText: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    }
  },
  emits: ['update:input', 'click', 'inputChange'],
  setup(props, { slots, emit }) {

    const className = useClass((classes) => {
      props.className && classes.push(props.className)
    }, ['cc-input'])

    const [currentV, useCurrentV] = useState<string>("")

    const onInput = (e: Event) => {
      if (props.disabled) return;
      useCurrentV((e.target as unknown as HTMLInputElement).value)
      emit('update:input', currentV.value)
    }

    watch(currentV, (pre, next) => {
      emit('inputChange', pre, next)
    })

    const rightIconClick = (e: Event) => {
      emit('click', e)
    }

    return () => (
      <div class={className}>
        { props.leftText && <span class="title">{ props.leftText }</span> }
        {
          props.leftIcon && <img src={props.leftIcon} alt="left-icon" class="left-icon" />
        }
          <input
            type={props.type}
            value={props.value}
            disabled={props.disabled}
            readonly={props.readonly}
            onInput={onInput}
            placeholder={props.tips}
            class={props.disabled ? 'disabled': ''}
          />
        {
          props.rightIcon && <img src={props.rightIcon} alt="right-icon" class="right-icon" onClick={rightIconClick} />
        }
        { slots.default?.() }
      </div>
    )
  }
})

export default CcInput;
```
