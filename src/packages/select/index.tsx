import {
  defineComponent,
  PropType
} from 'vue'
import CcOption from '@/packages/option/index'
import './index.scss'

type SizeType = 'mini' | 'small' | 'medium' | 'large'

const CcSelect = defineComponent({
  name: 'cc-select',
  components: {CcOption},
  props: {
    modelValue: {
      type: [String, Array] as PropType<string | string[]>
    },
    placeholder: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<SizeType>,
      default: 'medium'
    },
    width: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, { emit }) {

  }
})