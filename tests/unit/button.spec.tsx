import { defineComponent, ref } from 'vue'
import { mount } from '@vue/test-utils'
import CcButton from '../../src/packages/button/index'

test('测试默认button', () => {
  const wraper = mount({
    template:
    <div class="container">
      <CcButton value="test" type="normal">button</CcButton>
      <CcButton value="test" type="error">button</CcButton>
      <CcButton value="test" type="warn">button</CcButton>
    </div>
  })
  expect(wraper.html).toMatchSnapshot()
})

const errorBtn = {
  template:
  '<CcButton type="error" value="test">111</CcButton>'
}

test('test button error', () => {
  const error = mount(errorBtn)
  expect(error.text()).toBe("111")
})

const clickBtn = defineComponent({
  setup(props, { emit }) {
    const count = ref<number>(0)
    const onClick = () => {
      emit('click')
    }

    return () => (
      <CcButton onClick={onClick}></CcButton>
    )
  }
})

test('test button click event', () => {
  const wraper = mount(clickBtn)

  wraper.find('button').trigger('click')

  expect(wraper.emitted()).toHaveProperty('click')
})

