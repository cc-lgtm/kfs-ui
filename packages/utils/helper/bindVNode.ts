import { createVNode, render, Component } from 'vue'

const bindVNode = (
    c: Component | null,
    node: Element,
    opt?: {[key: string]: any}
  ) => {
    const VNode = createVNode(c!, opt)
    render(VNode, node)
}

export default bindVNode;
