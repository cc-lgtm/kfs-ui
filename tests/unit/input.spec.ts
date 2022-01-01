import { mount } from '@vue/test-utils'
import Input from '../../packages/input/input'

const testInput = {
  template: '<Input id="input" value="test data" @input="onInput" />',
  setup() {
    const onInput = (value: string) => {
      console.log(value)
    }
    return {
      onInput
    }
  }
}

test('test input value', async () => {
  const wrapper = mount(testInput)
  const Input = wrapper.find('#input')
  await Input.setValue('test data')
  // expect(Input.element.value).toBe('test data')
})