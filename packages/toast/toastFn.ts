import Toast from './toast'
import { Type } from '../utils/theme'
import createTypeFn, { OptsType } from '../utils/helper/createTypeFn'

export type ToastFnType = {
  [key in Type]: (opts: OptsType) => void
}

const ToastFn: ToastFnType = {
  default(opts) {
    createTypeFn(Toast, 'default', opts)
  },
  error(opts) {
    createTypeFn(Toast, 'error', opts)
  },
  success(opts) {
    createTypeFn(Toast, 'success', opts)
  },
  warn(opts) {
    createTypeFn(Toast, 'warn', opts)
  }
}

export default ToastFn;
