import { provide, inject } from 'vue'
const useContext = (() => {
  const context = {
    setContext: (name: string, value: any) => {
      provide(name, value)
      return context
    },
    getContext: (name: string, initVal?: any) => {
      inject(name, initVal)
      return context
    }
  }
  return context
})()

export default useContext;
