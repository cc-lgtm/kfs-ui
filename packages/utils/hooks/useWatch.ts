import { watch } from 'vue'
const useWatch = (fn: () => void, options: []) => {
  watch(options, fn)
}

export default useWatch;
