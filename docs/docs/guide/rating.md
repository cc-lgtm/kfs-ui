# Rating
*一般用于用户评分*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-rating />
  </div>
</template>
```
:::

#### 禁用
:::demo
```vue
<template>
  <div>
    <cc-rating disabled value="5" />
  </div>
</template>
```
:::

#### 带文字
:::demo
```vue
<template>
  <div>
    <cc-rating value="3" showText />
  </div>
</template>
```
:::

#### 带评分
:::demo
```vue
<template>
  <div>
    <cc-rating value="1" showScore />
  </div>
</template>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| value | 评分的初始值 | `string` | `-` | `0`  |
| showScore | 是否显示分数 | `boolean` | `true`,`false` | `false` |
| showText | 是否圆形按钮 | `boolean` | `true`,`false` | `false` |
| disabled | 是否禁用 | `boolean` | `true`,`false` | `false` |

#### 源码
```tsx
import {
  defineComponent,
  reactive,
  computed,
  watch
} from  'vue'
import './index.scss'
import star from './star'
import full_star from './fullStar'
import { useState } from './../utils/hooks/index'

const CcRate = defineComponent({
  name: 'cc-rate',
  props: {
    value: {
      type: String,
      default: '0'
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    }
  },
  emits: ['mouse'],
  setup(props, { emit, slots }) {

    const renderColors = () => {
      const colors = reactive<Array<string>>(['#F7BA2A', '#F7BA2A', '#F7BA2A'])
      if (props.colors) {
        colors.splice(0, 3).push(...props.colors as Array<string>)
      }
      const style = {

      }
      return style
    }

    const starObj = reactive<{[propname: string]: boolean}>({
      "star1": true,
      "star2": false,
      "star3": false,
      "star4": false,
      "star5": false
    })
    const [saveStatus, useSaveStatus] = useState<boolean>(false)
    const [currentState, useCurrentState] = useState<number>(0)

    const renderStar = (num: number) => {
      for (let s = 0; s < num; s++) {
        starObj['star' + (s + 1)] = true
      }
      for (let s = 5; s > num; s--) {
        starObj['star' + s] = false
      }
    }

    const onMouse = (e: MouseEvent, id: string) => {
      const num: number = +id.slice(4, 5)
      useCurrentState(num)
      renderStar(num)
      emit('mouse', e)
    }

    const onMouseOut = () => {
      if (!saveStatus.value) {
        useCurrentState(0)
        for (let s = 0; s <= 5; s++) {
          starObj['star' + (s + 1)] = false 
        }
      }
    }

    const onClick = () => {
      useSaveStatus(true)
    }

    const renderText = computed(() => {
      const state: {[propname: number]: string} = {
        1: '极差',
        2: '失望',
        3: '一般',
        4: '满意',
        5: '惊喜'
      }
      return state[currentState.value]
    })

    const renderScore = computed(() => {
        if (props.value) return (+props.value).toFixed(1)
        return currentState.value === 0
        ? ''
        : currentState.value.toFixed(1)
      }
    )

    const setValue = () => {
      const num: number = +props.value
      useCurrentState(num)
      renderStar(num)
    }
    props.value && setValue()

    watch(
      starObj,
      (newV, oldV) => {
        if (saveStatus.value) {
          for (let s = 0; s < 5; s++) {
            starObj['star' + (s + 1)] = oldV['star' + (s + 1)]
          }
        }
      }
    )

    props.disabled && Object.freeze(starObj);

    const render = () => {
      return (
        [1, 2, 3, 4, 5].map((_, index) => (
          <div onMouseover={(e) => onMouse(e, `star${index + 1}`)}>
            {
              starObj[`star${index + 1}`] ? full_star() : star()
            }
          </div>
        ))
      )
    }

    return () => (
      <div class="cc-rate" onMouseout={onMouseOut} onClick={onClick} style={renderColors()}>
        { render() }
        { props.showText && <span>{ renderText.value }</span> }
        { props.showScore && <span>{ renderScore.value }</span> }
      </div>
    )
  }
})

export default CcRate;
```
