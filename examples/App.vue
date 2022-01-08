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
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
</script>

<style lang="scss">
  * {
    position: absolute;
  }
</style>
