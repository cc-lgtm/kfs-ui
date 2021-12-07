<template>
  <div>
    <cc-button @click="onClick" :isLoading="isLoading" value="test"></cc-button>
    <CcCard :icon="icon"></CcCard>
    <CcInput :leftIcon="icon" :rightIcon="icon" />
    <CcTips tips="this is a tips"></CcTips>
    <CcDrawer  :showDrawer="showDrawer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CcButton from './packages/button/index.tsx'
import CcCard from './packages/card/index'
import CcInput from './packages/input/index'
import CcTips from './packages/tips/index'
import CcDrawer from './packages/drawer/index'
import icon from './assets/logo.png'

export default defineComponent({
  components: {
    CcButton,
    CcCard,
    CcInput,
    CcTips,
    CcDrawer
  },
  setup() {
    const isLoading = ref(false)
    const showDrawer = ref<boolean>(false)
    const onClick = () => {
      isLoading.value = true
      showDrawer.value = true
    }

    const onClose = (status: boolean) => {
      showDrawer.value = status
    }

    return {
      isLoading,
      showDrawer,
      onClick,
      onClose,
      icon
    }
  }
})
</script>
