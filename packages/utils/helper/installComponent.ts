import { App } from 'vue'
const installComponent = (component: any) => {
  const __component__ = {} as {[propname: string]: any}
  (__component__ as Record<string, unknown>).install = (app: App) => {
    const { name } = component
    app.component(name, component)
  }
  return __component__
}

export default installComponent;
