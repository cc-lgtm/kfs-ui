### 自定义主题

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
    <cc-button @click="chageTheme" :isLoading="Loading">切换</cc-button>
  </div>
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
}
const chageTheme = () => {
  Loading.value = true
  setTimeout(() => {
    useTheme()
    Loading.value = false
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
