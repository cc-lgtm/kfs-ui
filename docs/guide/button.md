## Button 按钮
#### 基础
:::demo
  <div>test</div>
:::

<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <cc-button type="primary" @click="onClick">点击</cc-button>
  </div>
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


:::tip
这是一个提示
:::

:::warning
这是一个警告
:::

:::danger
这是一个危险警告
:::

:::details
这是一个 details 标签
:::

#### 禁用状态
#### 文字按钮
#### 加载中
#### 不同尺寸
#### 属性
#### 事件
#### slots
