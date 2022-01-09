# Drawer
*展示侧边数据*
#### 默认
:::demo
```vue
<template>
  <div style="display:flex">
    <cc-button
      @click="openleft"
    >左
    </cc-button>
    <cc-button
      @click="openright"
    >右</cc-button>
    <cc-drawer
      :vModel="false"
      :position="left"
    />
    <cc-drawer
      :vModel="false"
      :position="right"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const left = ref<boolean>(false)
const right = ref<boolean>(false)
const openleft = () => {
  left.value = true
}
const openright = () => {
  right.value = true
}
</script>
```
:::

#### 属性
| 属性 | 描述 | 类型 | 可选值 | 默认 |
| ------------- |:-------------:| -----:|:-------------:| -----:|
| vModel | 是否显示 | `boolean` | `true`,`false` | `true`  |
| position | 打开位置 | `string` | `left`,`right` | `right` |
| width | 弹框大小 | `string` | `-` | `max-content` |

#### 事件
| 名称 | 描述 | 参数 |
| ------------- |:-------------:| -----:|
| opened | 打开后触发 | `-` |
| closed | 关闭后触发 | `-` |

#### 源码
```tsx
import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  PropType,
  reactive
} from 'vue'
import './index.scss'
import { useState } from './../utils/hooks/index'

type drawerPosition = 'left' | 'right'

const CcDrawer = defineComponent({
  name: 'cc-drawer',
  props: {
    vModel: {
      type: Boolean,
      default: true
    },
    position: {
      type: String as PropType<drawerPosition>,
      default: 'right'
    },
    width: {
      type: String,
      default: '15%'
    }
  },  
  emits: ['opened', 'closed'],
  setup(props, { emit, slots }) {
    const getScorllW = () => {
      const [width, useWidth] = useState<string>(document.body.scrollWidth + 'px')
      window.onresize = () => {
        useWidth(document.body.scrollWidth + 'px')
      }
      return width.value
    }

    const positionStyle = () => {
      const position = props.position
      const positionStyle: CSSProperties & {[propname: string]: any} = reactive({})
      if (position === 'left') {
        positionStyle['--position_top'] = 0
        positionStyle['--position_left'] = 0
        positionStyle['--mask_top'] = 0
        positionStyle['--mask_left'] = 100 + '%'
        positionStyle['--animation_name'] = 'FadeInL'
      }
      if (position === 'right') {
        positionStyle['--position_top'] = 0
        positionStyle['--position_right'] = 0
        positionStyle['--mask_top'] = 0
        positionStyle['--mask_right'] = 100 + '%'
        positionStyle['--animation_name'] = 'FadeInR'
      }
      return positionStyle
    }

    const styles = computed(() => {
      const style: CSSProperties & {[propname: string]: any} = {
        '--shadow': getScorllW(),
        '--w': props.width
      }
      return Object.assign(style, positionStyle())
    })
    const [showDrawer, useShowDrawer] = useState<boolean>(false)
    const onClose = () => {
      useShowDrawer(true)
      emit('closed', showDrawer.value)
    }

    onMounted(() => {
      useShowDrawer(true)
      emit('opened', showDrawer.value)
    })

    const clickMask = (e: Event) => {
      const el = document.querySelector('.cc-drawer-box')
      if (el) {
        if (!el.contains(e.target as Node)) {
          useShowDrawer(false)
        }
      }
    }

    return () => (
      showDrawer.value && props.vModel &&
      <div class="cc-drawer" style={styles.value} onClick={clickMask}>
        <div class='cc-drawer-box'>
          {slots.default?.()}
        </div>
      </div>
    )
  }
})

export default CcDrawer;
```
