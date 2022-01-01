import { mount } from '@vue/test-utils'
import Drawer from './../../packages/drawer/drawer'

test('position', () => {
  const wrapper = mount(Drawer, {
    props: {
      vModel: false,
      position: 'left'
    }
  })
})
