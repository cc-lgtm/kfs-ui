import { UnwrapRef, Ref } from 'vue';
declare const useState: <T>(initValue?: T | undefined) => [Ref<T>, (v: UnwrapRef<T>) => void];
export default useState;
