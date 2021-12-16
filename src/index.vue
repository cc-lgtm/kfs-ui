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
    <CcSkeleton loading animated></CcSkeleton>

    <Steps :space="200" :active="2">
      <Step title="标题一" description="这是一个一个一个一个一个描述" />
      <Step title="标题二"  />
      <Step title="标题三" description="描述" />
    </Steps>

    <Select placeholder="test" v-model="val" style="marginTop: 150px" @change="select" size="large">
      <Option label="js" value="0" />
      <Option label="css" value="1" disabled />
      <Option label="html" value="2" />
    </Select>
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
import Steps from './packages/stepbar/index'
import Step from './packages/stepitem/index'
import Select from './packages/select/index.tsx'
import Option from './packages/option/index'

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
    CcSkeleton,
    Steps,
    Step,
    Select,
    Option
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

    const select = (label: string) => {
      console.log(label)
    }

    const onChange = (v: number) => {
      console.log(v)
    }

    Message({ type: 'success', text: 'test' })

    const onClose = (status: boolean) => {
      showDrawer.value = status
    }
    const val = ref([])

    return {
      isLoading,
      showDrawer,
      showPopup,
      onClick,
      onClose,
      onChange,
      select,
      icon,
      val
    }
  }
})
</script>
