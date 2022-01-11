import { Component } from 'vue'
import { Type } from '../theme'
import { createNode, bindVNode } from '../helper'
import { useState } from '../hooks'

export type OptsType = {
  text: string,
  success?: () => void
}

const createTypeFn = (c: Component, type: Type, opts: OptsType) => {
  const [timer, setTimer] = useState<any>(null)
  const container = createNode()!;
  const O = Object.assign(opts, {
    type: type
  })
  bindVNode(c, container, O)
  clearTimeout(timer.value)
  setTimer(
    setTimeout(() => {
      bindVNode(null, container)
    }, 3000)
  )
}

export default createTypeFn;
