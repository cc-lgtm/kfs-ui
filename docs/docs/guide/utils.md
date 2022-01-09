### helper
#### toArray
```ts
type PropType = {[propname: string]: any}

const toStr = (v: PropType) => {
  return Object.prototype.toString.call(v)
}

const typeMap = {
  '[object String]': 'string',
  '[object Number]': 'number',
  '[object Object]': 'object'
} as {[propname: string]: string}

const toArray = (prop: PropType): any[] => {
  const type = typeMap[toStr(prop)]
  const newArray = []
  if (type !== 'object') {
    for (let i = 0; i < +prop; i++) {
      newArray.push(i)
    }
  }
  if (type === 'object') {
    const keys = Object.keys(prop)
    let key: string;
    for (key of keys) {
      const obj = {} as {[propname: string]: any}
      obj[key] = prop[key]
      newArray.push(obj)
    }
  }
  return newArray
}

export default toArray;
```

#### tuple
```ts
const tuple = <T>(array: Array<T>) => array

export default tuple;
```

### hooks
#### useState
```ts
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
```

#### useEffect
```ts
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
```

#### useCallBack
```ts
import { watch } from 'vue'

const useCallBack = (fn: (...args: any) => unknown, rely: any[]) => {
  watch(rely, fn)
}

export default useCallBack;
```

#### useMemo
```ts
import { computed } from 'vue'
import useEffect from './useEffect';

const useMemo = (fn: (...args: any) => unknown, rely: any[]) => {
  useEffect(() => {
    computed(fn)
  }, rely)
}

export default useMemo;
```

#### useRef
```ts
import { toRefs, ToRefs, ref } from 'vue'

type Type = 'el' | 'val'
const useRef = <T>(type: Type = 'val', initVal?: T) => {
  return type === 'val' ? toRefs(initVal as ToRefs<T>) : ref(initVal)
}

export default useRef;
```

#### useContext
```ts
import { provide, inject } from 'vue'
const useContext = (() => {
  const context = {
    setContext: (name: string, value: any) => {
      provide(name, value)
      return context
    },
    getContext: (name: string, initVal?: any) => {
      inject(name, initVal)
      return context
    }
  }
  return context
})()

export default useContext;
```

#### useReducer
```ts
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
```

#### useClass
```ts
import {tuple} from '../helper/index';
import useEffect from './useEffect'

const useClass = (fn: (...args: any) => void, initClass?: string[]) => {
  const classes = tuple<string>([...initClass as string[]])
  useEffect(() => fn(classes), classes)
  return classes.join(' ')
}

export default useClass;
```

#### useStyle
```ts
import { CSSProperties } from 'vue';
import { toArray } from './../helper/index'

type SourceType = {[propname: string]: any}
const useStyle = (source: SourceType) => {
  const styles = {} as CSSProperties & SourceType
  toArray(source).map((s, _) => {
    const k = Object.keys(s)
    styles[k[0]] = s[k[0]]
  })
  return styles
}

export default useStyle;
```

### theme
#### size
```ts
type Size = "medium" | "small" | "mini" | "large"

export default Size;
```

#### type
```ts
type Type = "success" | "error" | "warn" | "default"

export default Type;
```
