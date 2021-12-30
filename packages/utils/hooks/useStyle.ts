import { CSSProperties } from 'vue';
import { toArray } from './../helper/index'

type SourceType = {[propname: string]: any}
const useStyle = (source: SourceType) => {
  const styles = {} as CSSProperties & SourceType
  toArray(source).map((s, _) => {
    styles[s] = source[s]
  })
  return styles
}

export default useStyle;
