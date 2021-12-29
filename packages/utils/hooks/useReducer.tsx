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
    return newVal
  }
  return [readonly(state), dispatch]
}

const initialState = {count: 0};

function reducer(state: {[propname: string]: number}, action: {[propname: string]: string}) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({'type': 'decrement'})}>-</button>
      <button onClick={() => dispatch({'type': 'increment'})}>+</button>
    </>
  );
}

export default useReducer;
