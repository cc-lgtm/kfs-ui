import Message from './message'
import { ToastFnType } from '../toast/toastFn'
import { createTypeFn } from '../utils/helper'

const MessageFn: ToastFnType = {
  default(opts) {
    createTypeFn(Message, 'default', opts)
  },
  error(opts) {
    createTypeFn(Message, 'error', opts)
  },
  success(opts) {
    createTypeFn(Message, 'success', opts)
  },
  warn(opts) {
    createTypeFn(Message, 'warn', opts)
  }
}

export default MessageFn
