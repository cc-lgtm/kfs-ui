<template><h2 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h2>
<h4 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h4>
<p>:::demo</p>
  <div>test</div>
:::
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <cc-button type="primary" @click="onClick">点击</cc-button>
  </div>
</template>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<h4 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h4>
<h4 id="文字按钮" tabindex="-1"><a class="header-anchor" href="#文字按钮" aria-hidden="true">#</a> 文字按钮</h4>
<h4 id="加载中" tabindex="-1"><a class="header-anchor" href="#加载中" aria-hidden="true">#</a> 加载中</h4>
<h4 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h4>
<h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<h4 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h4>
<h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
// import { CcButton } from 'uninterest'

const title = ref('vuepress-plugin-demoblock-plus')

const instance = getCurrentInstance()

const onClick = () => {
  instance.appContext.config.globalProperties.$message.success('消息')
}
</script>
