declare type ObjType = {
    [propname: string]: any;
};
declare type InitType = (...args: any) => ObjType;
declare type ReducerType = (state: ObjType, action: any) => ObjType;
declare const useReducer: (reducer: ReducerType, initialArg: any, init?: InitType | undefined) => any[];
export default useReducer;
