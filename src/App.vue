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
    <Link type="success">Link</Link>
    <Link :underline="false" disabled type="success">link</Link>
    <Card shadow="always" />
    <Card shadow="hover" />
    <Card shadow="never" />
    <Tips tips="这是一条提示" />
  </div>
</template>

<script lang="ts">
import Button from './../packages/button/index'
import Link from './../packages/link/index'
import Card from './../packages/card/index'
import Tips from './../packages/tips/index'
export default {
  components: {Button, Link, Card, Tips}
}
</script>

<style>

</style>