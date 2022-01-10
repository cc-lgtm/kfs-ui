import {ref} from 'vue'
import { mount } from '@vue/test-utils';
import Tips from '../../packages/tips/tips'

const testTips = {
  template: `<Tips :tips="tips" @hover="onHover">{{msg}}</Tips>`,
  props: ['tips'],
  setup() {
    const msg = ref('this is a tips')
    const onHover = () => {
      console.log('111')
      msg.value = 'this not is a tips'
    }
    return {
      msg,
      onHover
    }
  }
}
test('disabled text', async () => {
  const wrapper = mount(testTips, {
    props: {
      msg: 'this is a tips'
    }
  })
  expect(wrapper.attributes('msg')).toContain('this is a tips')
  expect(wrapper.text()).toContain('this is a tips')
  await wrapper.setProps({'class': 'myClass'})
  expect(wrapper.attributes('class')).toContain('myClass')
  await wrapper.trigger('hover')
  expect(wrapper.text()).toContain('this not is a tips')
})
