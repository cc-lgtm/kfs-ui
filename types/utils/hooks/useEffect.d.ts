declare type fnType = (...args: any) => void;
declare const useEffect: (fn: fnType, rely?: any[] | undefined) => void;
export default useEffect;
