import { mount } from '@vue/test-utils'
import CcCard from '../../packages/card/card'

test('test card html', () => {
  const wraper = mount(CcCard)

  expect(wraper.html).toMatchSnapshot()
})

const testCard = {
  template: `<CcCard value="value">{{ count }}<CcCard/>`,
  props: ['value'],
  data() {
    return {
      count: '0'
    }
  }
}

test('test card text', () => {
  const wrapwer = mount(testCard, {
    props: {
      value: 'test'
    }
  })

  expect(wrapwer.text()).toContain('0')
})

test('test card slots && click', () => {
  const wrapwer = mount(testCard, {
    props: {
      value: ''
    }
  })

  wrapwer.trigger('click')
  expect(wrapwer.emitted()).toHaveProperty('click')
  expect(wrapwer.text()).toContain(0)
})


