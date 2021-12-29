import { ref, readonly, UnwrapRef, Ref } from 'vue'

type DispatchType = <T>() => UnwrapRef<T>
const useState = <T>(initValue?: T) => {
  const state = ref<T>(initValue as T)
  const dispatch = (props: DispatchType) => {
    typeof props === 'function' ? props() : state.value = props
  }
  return [readonly(state), dispatch] as [Ref<T>,  (v: UnwrapRef<T>) => void]
}

export default useState;
