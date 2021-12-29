import { computed } from 'vue'
import useEffect from './useEffect';

const useMemo = (fn: (...args: any) => unknown, rely: any[]) => {
  useEffect(() => {
    computed(fn)
  }, rely)
}

export default useMemo;
