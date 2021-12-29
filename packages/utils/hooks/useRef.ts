import { toRefs, ToRefs, ref } from 'vue'

type Type = 'el' | 'val'
const useRef = <T>(type: Type = 'val', initVal?: T) => {
  return type === 'val' ? toRefs(initVal as ToRefs<T>) : ref(initVal)
}

export default useRef;
