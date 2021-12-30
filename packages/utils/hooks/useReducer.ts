import { reactive, readonly } from 'vue'

type ObjType = {[propname: string]: any}
type InitType = (...args: any) => ObjType
type ReducerType = (state: ObjType, action: any) => ObjType

const useReducer = (reducer: ReducerType, initialArg: any, init?: InitType) => {
  const state = reactive(initialArg);
  const dispatch = (newVal: ObjType) => {
    const keys = Object.keys(newVal)
    keys.map((action, _) => {
      state[action] = newVal[action]
      reducer(initialArg, action)
    })
  }
  return [readonly(state), dispatch]
}

export default useReducer;
