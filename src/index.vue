<template>
  <div>
    <cc-button @click="onClick" :isLoading="isLoading" value="test"></cc-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CcButton from './packages/button/index.tsx'

export default defineComponent({
  components: {CcButton},
  setup() {
    const isLoading = ref(false)
    const onClick = () => {
      isLoading.value = true
    }

    return {
      isLoading,
      onClick
    }
  }
})
</script>
