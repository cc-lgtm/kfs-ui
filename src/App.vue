<template>
  <div>
    <cc-button>test</cc-button>
    <div v-loading></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
import ToastFn from '../packages/toast/toastFn'
import MessageFn from '../packages/message/messageFn'
import vLoading from '../packages/directives/loading'

// const { proxy } = getCurrentInstance()!;
// console.log(proxy!.Message)
// proxy!.Message.success({
//   text: '...'
// })

// proxy!.Toast.success({
//   text: '这是一条Toast',
//   success() {
//     console.log('执行成功了')
//   }
// })



ToastFn.success({
  text: '这是一条Toast',
  success() {
    console.log('执行成功了')
  }
})
MessageFn.success({
  text: '...'
})
const count = ref(10)
const load = () => {
  count.value += 2
  console.log(11)
}
</script>

<style lang="scss">
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;  
  list-style: none;
  .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: rgb(169, 223, 245);
  margin: 10px;
  color: rgb(65, 194, 245);
  }
  .infinite-list-item + .list-item {
    margin-top: 10px;
  }
}
</style>
