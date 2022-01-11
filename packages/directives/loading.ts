import { Directive } from 'vue'
import { bindVNode } from '../utils/helper'
import Loading from '../loading/loading'

export default {
  mounted(el, binding) {
    const content = el as HTMLElement
    bindVNode(Loading, content)
  },
  updated(el, binding) {
    console.log(el, binding, 'updated')
  }
} as Directive
