import { ref } from 'vue'

const createNode = () => {
  const container = ref<HTMLDivElement | null>(null)
  container.value = document.createElement('div')
  document.body.appendChild(container.value)
  return container.value
}

export default createNode;
