import { mount } from '@vue/test-utils'
import Loading from '../../packages/loading/loading'
import Line from '../../packages/loading/loadline/index'

test('loading type', () => {
  const wrapper = mount(Loading, {
    type: 'Line'
  })
  expect(wrapper.html).toContain(Line)
})
