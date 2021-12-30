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
