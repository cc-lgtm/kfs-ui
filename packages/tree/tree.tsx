import { 
  defineComponent,
  PropType,
  ref
} from 'vue'
import './tree.scss'

type TreeType = {
  label: string,
  children?: TreeType[]
}
const props = {
  data: {
    type: Array as PropType<Array<TreeType>>
  }
}

const CcTree = defineComponent({
  name: 'cc-tree',
  props,
  setup(props) {
    const treeRef = ref<HTMLDivElement>()

    const renderTree = (tree: TreeType[]) => {
      const container: HTMLDivElement = document.createElement('div')
      return tree.forEach(data => {
        console.log(data['label'])
        container.innerHTML += `<div>${data.label}</div>`
        if (data['children']?.length! > 0) {
          renderTree(data['children']!)
        }
        treeRef.value?.appendChild(container)
      })
    }
    return () => (
      <div class="cc-tree" ref={treeRef}>
        {renderTree(props.data!)}
      </div>
    )
  }
})

export default CcTree;
