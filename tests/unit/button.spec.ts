import { mount } from '@vue/test-utils'
import CcButton from '../../src/packages/button/index'

test('测试默认button', () => {
  const wraper = mount(CcButton)

  expect(wraper.text()).toBe('按钮')
})
