import { App } from 'vue'
import message from './messageFn'

export const Message = {}
Message['install'] = (app: App) => {
  app.config.globalProperties.$toast = message
}

export default Message;
