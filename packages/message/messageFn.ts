import { createVNode, render, ref, onMounted } from 'vue'
import CcMessage from './message'

export default ({ type, text }: {[propname: string]: any}) => {
  let div: HTMLDivElement;
  onMounted(() => {
    div = document.createElement('div')
    div.setAttribute('class', 'cc-message')
    document.body.appendChild(div)
    const vnode = createVNode(CcMessage, { type, text })
    render(vnode, div)
  })

  const timer = ref<number | any>(null)

  clearTimeout(timer)
  timer.value = setTimeout(() => {
    render(null, div)
  }, 2000)
}
