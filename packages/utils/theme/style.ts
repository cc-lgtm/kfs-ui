import {CSSProperties} from 'vue'

const styles = (variable: string[], state: any[]) => {
  const style = {} as CSSProperties & {[propname: string]: any}
  variable.map((value, index) => {
    style[value] = state[index]
  })
  return style
}

export default styles;
