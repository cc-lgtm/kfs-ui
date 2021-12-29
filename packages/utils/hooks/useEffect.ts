import { watchEffect } from 'vue'
type fnType = () => void
const useEffect = (fn: fnType, arr?: []) => {
  const options = {}
  arr?.map((o, _) => {
    options[o] = o
  })
  watchEffect(fn, options)
}

export default useEffect;