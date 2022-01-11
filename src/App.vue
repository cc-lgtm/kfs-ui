<template>
  <div>
    <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
      <li class="infinite-list-item" v-for="i in count" :key="i">{{i}}</li>
    </ul> -->
    <!-- <cc-toast>这是一条toast</cc-toast> -->
 
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ToastFn from '../packages/toast/toastFn'
ToastFn.success({
  text: '这是一条Toast',
  success() {
    console.log('执行成功了')
  }
})
const count = ref(10)
const load = () => {
  count.value += 2
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
