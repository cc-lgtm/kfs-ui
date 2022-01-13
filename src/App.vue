<template>
  <div>
    <Tree :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
import ToastFn from '../packages/toast/toastFn'
import MessageFn from '../packages/message/messageFn'
import vLoading from '../packages/directives/loading'
import Tree from '../packages/tree/tree'

const list = [1, 2, 3]

const data = [
  {
    label: 'tree1',
    children: [
      {
        label: 'tree1-1'
      }
    ]
  },
  {
    label: 'tree2',
    children: [
      {
        label: 'tree2-1',
        children: [
          {
            label: 'tree2-2'
          }
        ]
      }
    ]
  },
  {
    label: 'tree3'
  }
]

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
    // alert('我成功了')
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


const callbackToChain = (
  fn: (...rely: any) => any
) => {
  return (rely: number[], init: number = 0) => {
    return {
      callback(callback: (pre: number, cur: number) => number) {
        return fn(rely, callback, init)
      }
    }
  }
}

const myreduce = (
  rely: number[],
  fn: (pre: number, cur: number) => number,
  init: number = 0
  ) => {
    let result = 0;
    rely.forEach((_, index) => {
      if (index - 1 >= 0) {
       result = fn(rely[index - 1], rely[index]) + init
      }
    })
    return result;
}
const test1 = myreduce([1, 2], (pre, cur) => pre + cur)
const test2 = myreduce([1, 2], (pre, cur) => pre + cur, 2)
console.log(test1, test2, 'reduce') // 3 5

const reduceChain = callbackToChain(myreduce)
const test3 = reduceChain([1, 2]).callback((pre, cur) => pre + cur)
const test4 = reduceChain([1, 2], 2).callback((pre, cur) => pre + cur)
console.log(test3, test4, 'chain') // 3 5

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
