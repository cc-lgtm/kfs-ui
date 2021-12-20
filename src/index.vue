<template>
  <div>
    <cc-button :disabled="true" />
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

    <Tabs :active="active" @change="activeChange">
      <Tab title="标题一">
        <div v-if="active === 0">
          adssds
          <span>dsads</span>
        </div>
      </Tab>
      <Tab title="标题二">
        <div v-if="active === 1">
          adssds
          <span>dsads</span>
          <blockquote>as</blockquote>
        </div>
      </Tab>
      <Tab title="标题三">
        <div v-if="active === 2">
          adssds
          <span>dsads</span>
          <nav>aas</nav>
        </div>
      </Tab>
    </Tabs>
    <Link type="warning" disabled>test</Link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
import Tabs from './packages/tabs/index.tsx'
import Tab from './packages/tab/index.tsx'
import Link from './packages/link/index'

export default defineComponent({
  components: {
    Link,
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
    Option,
    Tabs,
    Tab
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

    const active = ref<number>(0)

    const select = (label: string) => {
      console.log(label)
    }

    const onChange = (v: number) => {
      console.log(v)
    }

    const activeChange = (val: number) => {
      active.value = val
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
      val,
      active,
      activeChange
    }
  }
})
</script>
