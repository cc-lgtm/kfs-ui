import { createVNode, render, ref, onMounted } from 'vue'
import CcMessage from './message'

export default ({ type, text }: {[propname: string]: any}) => {
  let div: HTMLDivElement;
  onMounted(() => {
    div = document.createElement('div')
    div.setAttribute('class', 'cc-message')
    document.body.appendChild(div)
    render(vnode, div)
  })

  const timer = ref<number | any>(null)

  const vnode = createVNode(CcMessage, { type, text })

  clearTimeout(timer)
  timer.value = setTimeout(() => {
    render(null, div)
  }, 2000)
}
