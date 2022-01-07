import { provide, inject } from 'vue'
const useContext = (() => {
  const context = {
    getContext: (name: string, value: any) => {
      provide(name, value)
    },
    setContext: (name: string, initVal?: any) => {
      return inject(name, initVal)
    }
  }
  return context
})()

export default useContext;
