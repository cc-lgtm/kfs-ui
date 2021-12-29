import { watch } from 'vue'

const useCallBack = (fn: (...args: any) => unknown, rely: any[]) => {
  watch(rely, fn)
}

export default useCallBack;
