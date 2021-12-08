<template>
  <div>
    <cc-button @click="onClick" :isLoading="isLoading" value="test"></cc-button>
    <CcCard :icon="icon"></CcCard>
    <CcInput :leftIcon="icon" :rightIcon="icon" />
    <CcTips tips="this is a tips"></CcTips>
    <CcDrawer />
    <CcPopup v-if="showPopup" content="111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CcButton from './packages/button/index.tsx'
import CcCard from './packages/card/index'
import CcInput from './packages/input/index'
import CcTips from './packages/tips/index'
import CcDrawer from './packages/drawer/index'
import CcPopup from './packages/popup/index.tsx'
import icon from './assets/logo.png'
import Message from './packages/message/index.js'


export default defineComponent({
  components: {
    CcButton,
    CcCard,
    CcInput,
    CcTips,
    CcDrawer,
    CcPopup
  },
  setup() {
    const isLoading = ref(false)
    const showPopup = ref<boolean>(false)
    const showDrawer = ref<boolean>(false)
    const onClick = () => {
      isLoading.value = true
      showDrawer.value = true
      showPopup.value = true
    }

    Message({ type: 'success', text: 'test' })

    const onClose = (status: boolean) => {
      showDrawer.value = status
    }

    return {
      isLoading,
      showDrawer,
      showPopup,
      onClick,
      onClose,
      icon
    }
  }
})
</script>
