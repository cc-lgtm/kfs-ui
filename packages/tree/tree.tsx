import { 
  defineComponent,
  PropType
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
    const renderTree = (tree: TreeType[], container: Element) => {
      tree.forEach((data, index) => {
        const node = document.createElement('div')
        node.innerText = data['label']
        const styles = `
          margin: 5px;
          margin-left: ${index * 10} + 'px';
          padding: 0 10px;
          color: var(--theme-color-default);
        }`
        node.setAttribute('style', styles)
        container.appendChild(node)
        if(data.children) {
          renderTree(data.children, node)
        }
      })
    }
    renderTree(props.data!, document.querySelector('body')!)

    return () => (
      <div class="cc-tree">
      </div>
    )
  }
})

export default CcTree;
