import { defineComponent, ref } from 'vue'
import { mount } from '@vue/test-utils'
import CcButton from '../../packages/button/button'

test('测试默认button', () => {
  const wraper = mount({
    template:
    <div class="container">
      <CcButton value="test" type="default">button</CcButton>
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

const MessageComponent = {
  template: `<CcButton value="" @click="handerClick">{{ msg }}{{ count }}</CcButton>`,
  props: ['msg'],
  data() {
    return {
      count: 0
    }
  }
}

test('test button slots', () => {
  const wraper = mount(MessageComponent, {
    props: {
      msg: 'hello button'
    }
  })
  expect(wraper.text()).toContain('hello button0')
})

test('test button click', () => {
  const wraper = mount(MessageComponent, {
    props: {
      msg: 'hello button'
    }
  })

  wraper.trigger('click')
  expect(wraper.emitted()).toHaveProperty('click')
})

