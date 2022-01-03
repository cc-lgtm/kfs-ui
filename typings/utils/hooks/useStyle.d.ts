import { CSSProperties } from 'vue';
declare type SourceType = {
    [propname: string]: any;
};
declare const useStyle: (source: SourceType) => CSSProperties & SourceType;
export default useStyle;
