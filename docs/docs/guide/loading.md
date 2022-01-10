# Loading
*用于加载前*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-loading></cc-loading>
  </div>
</template>
```
:::

#### 类型
:::demo
```vue
<template>
  <div style="display: flex;witdh: 50%">
    <cc-loading type="effect" />
    <cc-loading type="line" />
    <cc-loading type="rect" />
    <cc-loading type="back" />
    <cc-loading type="backLine" />
  </div>
</template>
```
:::

#### loading属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| type | 类型 | `string` | `effect`,`line`,`rect`,`back`,`backLine` | `line`  |

#### 源码
```tsx
import {
  defineComponent,
  PropType
} from 'vue'
import Line from './loadline/index'
import Effect from './loadeffect/index'
import Rect from './loadrect/index'
import Back from './loadback/index'
import BackLine from './loadbackline/index'

type loadType = 'effect' | 'line' | 'rect' | 'back' | 'backLine'

const CcLoading = defineComponent({
  name: "cc-loading",
  components: {
    Line,
    Effect,
    Rect,
    Back,
    BackLine
  },
  props: {
    type: {
      type: String as PropType<loadType>,
      default: 'line'
    }
  },
  setup(props) {

    const renderLoading = () => {
      const loadType = {
        'effect': <Effect />,
        'line': <Line />,
        'rect': <Rect />,
        'back': <Back />,
        'backLine': <BackLine />
      }
      return loadType[props.type]
    }

    return () => (
      <>
        {renderLoading()}
      </>
    )
  }
})

export default CcLoading;
```
