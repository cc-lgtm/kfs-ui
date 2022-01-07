import { provide, inject } from 'vue'
const useContext = {
  getContext: (name: string, value: any) => {
    provide(name, value)
  },
  setContext: (name: string, initVal?: any) => {
    return inject(name, initVal)
  }
}

export default useContext;
