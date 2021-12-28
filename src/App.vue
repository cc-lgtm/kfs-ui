<template>
  <div>
    <Steps :space=100>
      <Step />
      <Step />
      <Step />
    </Steps>
  </div>
</template>

<script lang="ts" setup>
import Steps from './../packages/stepbar/index'
import Step from './../packages/stepitem/index'
</script>
