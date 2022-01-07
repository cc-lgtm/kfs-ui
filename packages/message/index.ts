import { App } from 'vue'
import messageJsx from './message'
import message from './messageFn'

export const CcMessage = {} as {[propname: string]: any}
export {
  messageJsx
}
CcMessage['install'] = (app: App) => {
  app.config.globalProperties.$toast = message
}

export default CcMessage;
