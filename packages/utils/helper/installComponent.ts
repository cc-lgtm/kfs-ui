import { App } from 'vue'
const installComponent = (component: any) => {
  (component as Record<string, unknown>).install = (app: App) => {
    const { name } = component
    app.component(name, component)
  }
  return component
}

export default installComponent;
