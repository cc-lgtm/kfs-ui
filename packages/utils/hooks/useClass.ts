import { computed } from 'vue'
import {tuple} from '../helper/index';

type ClassType = {
  state: boolean,
  class: string
}
const useClass = computed((initClass?: string) => {
  const classes = tuple<string>([initClass as string])
  const addClass = (source: ClassType): void => {
    source.state && classes.push(source.class)
  }
  return [classes.join(' '), addClass] as [string, (source: ClassType) => void]
})

export default useClass;
