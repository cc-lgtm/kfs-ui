import { ref } from 'vue'
import Toast from './toast'
import { Type } from '../utils/theme'
import { createNode, bindVNode } from '../utils/helper'

type OptsType = {
  text: string,
  success?: () => void
}
type ToastFnType = {
  [key in Type]: (opts: OptsType) => void
}

const createTypeFn = (type: Type, opts: OptsType) => {
  const timer = ref<any>(null)
  const container = createNode()!;
  const O = Object.assign(opts, {
    type: type
  })
  bindVNode(Toast, container, O)
  clearTimeout(timer)
  timer.value = setTimeout(() => {
    bindVNode(null, container)
  }, 3000)
}

const ToastFn: ToastFnType = {
  default(opts) {
    createTypeFn('default', opts)
  },
  error(opts) {
    createTypeFn('error', opts)
  },
  success(opts) {
    createTypeFn('success', opts)
  },
  warn(opts) {
    createTypeFn('warn', opts)
  }
}

export default ToastFn;
