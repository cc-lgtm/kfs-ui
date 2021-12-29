import {
  defineComponent,
  PropType
} from 'vue'
import './index.scss'
import CcButton from '../button/index';
import CcInput from '../input';
import { useState } from './../utils/hooks/index'

type PopupType = 'message' | 'confirm' | 'upload'

const CcPopup = defineComponent({
  name: 'cc-popup',
  components: { CcButton, CcInput },
  props: {
    type: {
      type: String as PropType<PopupType>,
      default: 'upload  '
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
    const [showPopup, useShowPopup] = useState<boolean>(true)
    const onClose = (e: Event) => {
      useShowPopup(false)
      emit('close', e)
    }

    const onConfirm = (e: Event) => {
      useShowPopup(false)
      emit('confirm', e)
    }

    const renderType = () => {
      if (props.type === 'confirm') {
        return (
          <div class="content">{ props.content }</div>
        )
      } else {
        return (
          <CcInput leftText="上传信息" className="input" />
        )
      }
    }

    return () => (
      showPopup.value &&
      <div class="cc-popup">
        <div class="cc-popup-box">
          <div class="top">
            <span class="title">{ props.title }</span>
          </div>
          { renderType() }
          <div class="btns">
            { props.type !== 'message' && <CcButton value="取消" onClick={onClose} /> }
            <CcButton value="确认" type="success" onClick={onConfirm} />
          </div>
        </div>
        { slots.default?.() }
      </div>
    )
  }
})

export default CcPopup;
