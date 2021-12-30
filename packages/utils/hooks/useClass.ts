import {tuple} from '../helper/index';
import useEffect from './useEffect'

const useClass = (fn: (...args: any) => void, initClass?: string[]) => {
  const classes = tuple<string>([...initClass as string[]])
  useEffect(() => fn(classes), classes)
  return classes.join(' ')
}

export default useClass;
