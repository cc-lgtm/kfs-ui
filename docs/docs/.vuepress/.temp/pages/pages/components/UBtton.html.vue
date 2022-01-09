<template><template>
  <div>
    <UBtton type="error" value="按钮" />
    <UBtton type="warn" value="按钮" />
  </div>
</template>
</template>

<script>
import { defineComponent } from 'vue'
import UBtton from '@/packages/button/index.tsx'

export default defineComponent({
  components: {UBtton},
  setup() {
    
  },
})
</script>

<style lang="scss">

</style>
