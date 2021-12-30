import { watchEffect } from 'vue'
type fnType = (...args: any) => void
const useEffect = (fn: fnType, rely?: any[]) => {
  const options = {} as {[propname: string]: any}
  rely?.map((o, _) => {
    options[o] = o
  })
  watchEffect(fn, options)
}

export default useEffect;