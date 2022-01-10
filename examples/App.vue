<template>
  <div>
    <cc-button>test</cc-button>
    <cc-link>test</cc-link>
    <cc-tips tips="tips">test</cc-tips>
    <cc-skeleton :loading="true" :animated="true">
      <cc-skeleton />
      <cc-skeleton />
      <cc-skeleton />
    </cc-skeleton>
    <cc-switch />
    <cc-drawer />
    <cc-steps :space="100">
      <cc-step />
      <cc-step />
      <cc-step />
    </cc-steps>
  </div>
</template>

<script lang="ts" setup>
import messageFn from '../packages/message/messageFn'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()!
proxy!.$messageFn({
  type: 'error',
  text: 'text'
})
</script>

<style lang="scss">
</style>
