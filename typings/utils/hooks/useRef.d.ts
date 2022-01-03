import { ToRefs } from 'vue';
declare type Type = 'el' | 'val';
declare const useRef: <T>(type?: Type, initVal?: T | undefined) => ToRefs<ToRefs<T>> | import("vue").Ref<import("vue").UnwrapRef<T> | undefined>;
export default useRef;
