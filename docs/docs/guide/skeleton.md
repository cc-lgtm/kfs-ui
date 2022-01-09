# Skeleton
*用于填充数据*
#### 默认
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true">
      <cc-skeleton-item type="text"></cc-skeleton-item>
    </cc-skeleton>
  </div>
</template>
```
:::

#### 多行
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true" :rows=3>
    </cc-skeleton>
  </div>
</template>
```
:::

#### 设置长度
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true" :rows=3 :rowsWidth="['200px','150px','100px']">
    </cc-skeleton>
  </div>
</template>
```
:::

#### 其他类型
:::demo
```vue
<template>
  <div>
    <cc-skeleton :loading="true">
      <cc-skeleton-item type="rect"></cc-skeleton-item>
      <cc-skeleton-item type="h"></cc-skeleton-item>
      <cc-skeleton-item type="button"></cc-skeleton-item>
    </cc-skeleton>
  </div>
</template>
```
:::

#### skeleton属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| rows | 渲染多行 | `number` | `-` | `0`  |
| rowsWidth  | 渲染多行的宽度 | `string[]`,`number[]` | `-`| `-` |
| loading | 是否显示 | `boolean` | `true`,`false` | `false` |

#### skeleton-item属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| variable | skeleton类型 | `string` | `variable-type` | `text`  |

#### 类型参考
| 类型 | 可选值 |
| ---- |:-----|
| variable-type |`p`,`text`,`h`,`rect`,`circle`,`image`,`button`,`caption`|

#### 源码
```tsx
import {
  CSSProperties,
  defineComponent,
  PropType,
  reactive
} from 'vue'
import CcSkeletonItem from './../skeleton-item/index'

type RowsWidthType = string[] | number[]

const CcSkeleton = defineComponent({
  name: 'cc-skeleton',
  components: {CcSkeletonItem},
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 0
    },
    rowsWidth: {
      type: Array as PropType<RowsWidthType>
    }
  },
  setup(props, { slots }) {
    const styles = (index: number) => {
      const style = {
        '--w': props.rowsWidth[index]
      } as CSSProperties
      return style
    }
    const renderRows = () => {
      const skeletonRows = reactive([])
      for (let i = 0; i < props.rows; i++) {
        skeletonRows.push(<CcSkeletonItem variable="text" style={styles(i)} />)
      }
      return skeletonRows.map((s, _) => (
        s
      ))
    }
    const row = () => {
      return props.rows ? renderRows() : slots.default?.()
    }
    return () => (
      <div class="cc-skeleton">
        {props.loading && row()}
      </div>
    )
  }
})

export default CcSkeleton;
```
