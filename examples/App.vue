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
  </div>
</template>

<script lang="ts" setup>
import messageFn from '../packages/message/messageFn'
messageFn({
  type: 'error',
  text: 'text'
})
</script>

<style lang="scss">
</style>
