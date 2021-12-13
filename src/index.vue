<template>
  <div>
    <cc-button @click="onClick" disabled circle :isLoading="isLoading" value="test"></cc-button>
    <CcCard :icon="icon"></CcCard>
    <CcInput :leftIcon="icon" :rightIcon="icon" />
    <CcTips tips="this is a tips"></CcTips>
    <CcDrawer v-if="false" />
    <CcPopup v-if="showPopup" content="111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111" />
    <CcRate />
    <CcDatePicker />
    <CcPagination
      :total="100"
      @currentChange="onChange"
      background
      layout="jumper, total, prev, pager, next"
    />
    <CcSkeleton :rowsWidth="['60px', '50px', '40px']" loading animated>aaaaaaaaaaaaa</CcSkeleton>
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
import Message from './packages/message/index.ts'
import CcRate from './packages/rate/index'
import CcDatePicker from './packages/datepicker/index'
import CcPagination from './packages/pagination/index'
import CcSkeleton from './packages/skeleton/index.tsx'

export default defineComponent({
  components: {
    CcButton,
    CcCard,
    CcInput,
    CcTips,
    CcDrawer,
    CcPopup,
    CcRate,
    CcDatePicker,
    CcPagination,
    CcSkeleton
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

    const onChange = (v: number) => {
      console.log(v)
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
      onChange,
      icon
    }
  }
})
</script>
