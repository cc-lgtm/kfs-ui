<template><h3 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h3>
<blockquote>
<p>内部提供方法<code>useTheme</code>和一些主题<code>css变量</code>,只需要<code>useTheme({'--theme-bg-default': '#fff'})</code>即可以切换主题<br>
下面做一个简单的示例</p>
</blockquote>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { onMounted } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { toArray } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./../helper&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ThemesType</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    [key</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">useTheme</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> (themes</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ThemesType</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">onMounted</span><span style="color: var(--shiki-color-text)">(() </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">toArray</span><span style="color: var(--shiki-color-text)">(themes)</span><span style="color: var(--shiki-token-function)">.forEach</span><span style="color: var(--shiki-color-text)">(theme </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">key</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">Object</span><span style="color: var(--shiki-token-function)">.keys</span><span style="color: var(--shiki-color-text)">(theme)</span><span style="color: var(--shiki-token-function)">.join</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">document</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">documentElement</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">style</span><span style="color: var(--shiki-token-function)">.setProperty</span><span style="color: var(--shiki-color-text)">(key</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> theme[key])</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      })</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    })</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> useTheme;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;scss&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">:root</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-default</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#fff</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-success</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#2ecc71</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-error</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#e74c3c</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-warn</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#f39c12</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-info</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#3498db</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-bg-disabled</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#d2d6da</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-color-default</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#7f8c8d</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-color-all</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">#fff</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-size-xs</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">14</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-size-sm</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">16</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-size-md</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">18</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    --theme-size-lg</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">20</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></div>
</template>

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
