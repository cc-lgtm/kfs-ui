<template>
  <div>
    <Button>
      <template #icon>
        <img src="./assets/logo.png" />
      </template>
    </Button>
    <Button type="success" disabled></Button>
    <Button type="error" isLoading />
    <Button type="warn" />
  </div>
</template>

<script lang="ts">
import Button from './../packages/button/index'
export default {
  components: {Button}
}
</script>

<style>

</style>