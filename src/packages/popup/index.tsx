import {
  defineComponent,
  PropType,
  ref
} from 'vue'
import './index.scss'
import close_icon from './../assets/close.svg'
import CcButton from '../button/index';

type PopupType = 'message' | 'confirm' | 'upload'
type Buttons = [] | ['close'] | ['confirm'] | ['close', 'confirm']

const CcPopup = defineComponent({
  name: 'cc-popup',
  components: { CcButton },
  props: {
    type: {
      type: String as PropType<PopupType>,
      default: 'message'
    },
    buttons: {
      type: [] as PropType<Buttons>,
      default: ['confirm']
    },
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'content'
    }
  },
  emits: ['close', 'confirm'],
  setup(props, { emit, slots }) {
    const showPopup = ref<boolean>(true)
    const onClose = (e: Event) => {
      showPopup.value = false
      emit('close', e)
    }

    const onConfirm = (e: Event) => {
      showPopup.value = false
      emit('confirm', e)
    }

    return () => (
      showPopup.value &&
      <div class="cc-popup">
        <div class="cc-popup-box">
          <div class="top">
            <span class="title">{ props.title }</span>
            <img src={close_icon} alt="close" onClick={onClose} />
          </div>
          <div class="content">{ props.content }</div>
          <div class="btns">
            <CcButton value="取消" class="close" onClick={onClose} />
            <CcButton value="确认" onClick={onConfirm} />
          </div>
        </div>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcPopup;
