### 自定义主题
> 内部提供方法`useTheme`和一些主题`css变量`,只需要`useTheme({'--theme-bg-default': '#fff'})`即可以切换主题  
下面做一个简单的示例

<div id="app">
  <div class="container">
    <cc-tabs @change="onChange">
      <cc-tab title="首页" />
      <cc-tab title="组件" />
      <cc-tab title="npm" />
      <cc-tab title="github" />
      <cc-tab title="掘金" />
    </cc-tabs>
    <div class="pager">
      <div class="box" v-for="item in pagerDate" :key="item.id">
        <div v-if="!Loading">
          <img :src="item.path" />
          <span class="name">{{item.name}}</span>
          <span>{{item.tips}}</span>
        </div>
        <cc-skeleton :loading="Loading" :animated="true" style="margin-left: -10px;margin-top: -10px">
          <cc-skeleton-item variable="rect" style="width: 190px" />
          <cc-skeleton-item variable="h" style="width: 80%;margin-left: 20px" />
          <cc-skeleton-item variable="text" style="width: 80%;margin-left: 20px" />
          <cc-skeleton-item variable="text" style="width: 20%;margin-left: 20px" />
        </cc-skeleton>
      </div>
    </div>
  </div>

  <div class="change">
    <cc-button @click="chageTheme" :isLoading="Loading" type="success">切换</cc-button>
  </div>

  ```vue
  <script>
    import { onMounted } from 'vue'
    import { toArray } from './../helper'

    type ThemesType = {
      [key: string]: string
    }
    const useTheme = (themes: ThemesType) => {
      onMounted(() => {
        toArray(themes).forEach(theme => {
          const key = Object.keys(theme).join('')
          document.documentElement.style.setProperty(key, theme[key])
        })
      })
    }

    export default useTheme;
  </script>

  <style lang="scss">
    :root {
      --theme-bg-default: #fff;
      --theme-bg-success: #2ecc71;
      --theme-bg-error: #e74c3c;
      --theme-bg-warn: #f39c12;
      --theme-bg-info: #3498db;
      --theme-bg-disabled: #d2d6da;
      --theme-color-default: #7f8c8d;
      --theme-color-all: #fff;
      --theme-size-xs: 14px;
      --theme-size-sm: 16px;
      --theme-size-md: 18px;
      --theme-size-lg: 20px;
    }
  </style>
  ```
</div>

<script setup lang="ts">
import { ref } from 'vue'
type Status = 'home' | 'components' | 'npm' | 'github' | 'juejin'
const statusMap: {[key: number]: Status} = {
  0: 'home',
  1: 'components',
  2: 'npm',
  3: 'github',
  4: 'juejin'
}

const _DATA: {[key: string]: any[]} = {
  'home': [
    {path: 'test', name: 'home1', tips: '这是一个不知道什么home', id: 1},
    {path: 'test', name: 'home2', tips: '这是一个不知道什么home', id: 2}
  ],
  'components': [
    {path: 'test', name: 'components1', tips: '这是一个不知道什么component', id: 1},
    {path: 'test', name: 'components2', tips: '这是一个不知道什么component', id: 2}
  ],
  'npm': [
    {path: 'test', name: 'npm1', tips: 'npm地址', id: 1},
    {path: 'test', name: 'npm2', tips: 'npm地址', id: 2}
  ],
  'github': [
    {path: 'test', name: 'github1', tips: 'github地址', id: 1},
    {path: 'test', name: 'github2', tips: 'github地址', id: 2}
  ],
  'juejin': [
    {path: 'test', name: 'juejin1', tips: 'juejin地址', id: 1},
    {path: 'test', name: 'juejin2', tips: 'juejin地址', id: 2}
  ]
}

const pagerDate = ref<{[key: string]: any}[]>(_DATA['home'])
const onChange = (active: number) => {
  pagerDate.value = _DATA[statusMap[active]]
}
const Loading = ref<boolean>(false)
const useTheme = () => {
  document.documentElement.style.setProperty('--app-bg', '#282c34')
  document.documentElement.style.setProperty('--img-bg', '#fff')
  document.documentElement.style.setProperty('--app-color', '#fff')
  document.documentElement.style.setProperty('--theme-color-default', '#fff')
}
const defaultTheme = () => {
  document.documentElement.style.setProperty('--app-bg', '#fff')
  document.documentElement.style.setProperty('--img-bg', '#ccc')
  document.documentElement.style.setProperty('--app-color', '#344954')
  document.documentElement.style.setProperty('--theme-color-default', '#7f8c8d')
}
const crueet = ref(false)
const chageTheme = () => {
  Loading.value = !Loading.value
  crueet.value = !crueet.value
  setTimeout(() => {
    Loading.value = !Loading.value
    crueet.value ? useTheme() : defaultTheme()
  }, 800)
}
</script>

<style lang="scss">
:root {
  --app-bg: #fff;
  --img-bg: #ccc;
  --app-color: #34495e;
}
#app {
  display: flex;
  align-items: center;
}
.container {
  width: max-content;
  height: 700px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 2px 3px #ccc;
  background: var(--app-bg);
  box-sizing: border-box;
  .pager {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    .box {
      width: 190px;
      height: 200px;
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-sizing: border-box;
      margin: 0 2px;
      img {
        width: 100%;
        height: 100px;
        background: var(--img-bg);
        margin-bottom: 5px;
      }
      span {
        display: block;
        width: 80%;
        font-size: 16px;
        margin: 0 10px;
        color: var(--app-color)
      }
      .name {
        font-size: 20px;
      }
    }
  }
}
</style>
