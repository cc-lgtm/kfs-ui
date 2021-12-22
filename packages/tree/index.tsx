import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'

type Func = (data: [], node: string) => void

type PropsType = {
  label: string | Func,
  children: string,
  disabled: boolean | Func,
  isLeaf: boolean | Func
}

type RenderContentType = {'node': string, 'data': [], 'store': unknown}

const CcTree = defineComponent({
  name: 'cc-tree',
  props: {
    data: {
      type: Array
    },
    emptyText: {
      type: String
    },
    nodeKey: {
      type: String
    },
    props: {
      type: Object as PropType<PropsType>
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    load: {
      type: Function as PropType<(node: string, resolve: () => void) => void>
    },
    renderContent: {
      type: Function as PropType<(h: unknown, {}: RenderContentType) => void>
    },
    highlightCurrent: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultExpandedKeys: {
      type: Array
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    defaultCheckedKeys: {
      type: Array
    },
    currentNodeKey: {
      type: [String, Number]
    },
    filterNodeMethod: {
      type: Function as PropType<(value: string | number, data: [], node: string) => void>
    },
    accordion: {
      type: Boolean,
      default: false
    },
    indent: {
      type: Number,
      default: 16
    },
    lazy: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: {
      type: Function as PropType<(node: string) => void>
    },
    allowDrop: {
      type: Function as PropType<(draggingNode: string, dropNode: string, type: string) => void>
    }
  },
  emits: ['nodeClick', 'nodeContextmenu', 'checkChange', 'check', 'currentChange',
  'nodeExpand', 'nodeCollapse', 'nodeDragStart', 'nodeDragEnter', 'nodeDragLeave',
  'nodeDragOver', 'nodeDragEnd', 'nodeDrop'],
  setup(props, { slots, emit }) {


  }
})

export default CcTree;
