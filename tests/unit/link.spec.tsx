import {ref} from 'vue'
import { mount } from '@vue/test-utils';
import Link from './../../packages/link/link'

const testLink = {
  template: `<Link :href="href" @click="addCount">{{count}}</Link>`,
  props: ['href'],
  setup() {

    const count = ref(0)
    const addCount = () => {
      count.value++
    }
    return {
      count,
      addCount
    }
  }
}
test('disabled text', async () => {
  const wrapper = mount(testLink, {
    props: {
      href: 'test'
    }
  })
  await wrapper.trigger('click')
  expect(wrapper.attributes('href')).toContain('test')
  expect(wrapper.text()).toContain(1)
  await wrapper.setProps({'underline': true, 'disabled': false})
  expect(wrapper.attributes('underline')).toContain(true)
  expect(wrapper.attributes('disabled')).toContain(false)
})

