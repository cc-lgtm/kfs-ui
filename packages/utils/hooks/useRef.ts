import { toRefs, ToRefs } from 'vue'
const useRefs = <T>(initVal: T) => {
  return toRefs(initVal as ToRefs<T>)
}

export default useRefs;
