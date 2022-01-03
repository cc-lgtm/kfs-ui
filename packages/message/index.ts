import { App } from 'vue'
import messageJsx from './message'
import message from './messageFn'

export const Message = {} as {[propname: string]: any}
export {
  messageJsx
}
Message['install'] = (app: App) => {
  app.config.globalProperties.$toast = message
}

export default Message;
