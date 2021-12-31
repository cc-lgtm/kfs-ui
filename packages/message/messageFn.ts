import { createVNode, render, ref } from 'vue'
import CcMessage from './messageFn'

const div: HTMLDivElement = document.createElement('div')
div.setAttribute('class', 'cc-message')
document.body.appendChild(div)

const timer = ref<number | any>(null)

export default ({ type, text }: {[propname: string]: any}) => {
 const vnode = createVNode(CcMessage, { type, text })
 render(vnode, div)

 clearTimeout(timer)
 timer.value = setTimeout(() => {
   render(null, div)
 }, 2000)
}
