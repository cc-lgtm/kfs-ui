import {
  defineComponent,
  CSSProperties,
  reactive
} from 'vue'
import './datePicker.scss';
import CcInput from '../input/input'
import { useState, useEffect } from '../utils/hooks'

const CcDatePicker = defineComponent({
  name: 'cc-date-picker',
  components: {CcInput},
  props: {

  },
  setup(props, { emit }) {
    const [display, setDisplay] = useState<string>('none')
    const onfocus = () => {
      setDisplay('block')
    }
    const onblur = () => {
      setDisplay('none')
    }

    const styles: CSSProperties & {[k: string]: any} = reactive({
      '--display': display.value
    });
    useEffect(() => {
      styles['--display'] = display.value
    }, [display.value])

    return () => (
      <div class="cc-date-picker" id="test">
        <cc-input tips="请选择日期" size="small" onFoucs={onfocus} onBlur={onblur}  />
        <div class="cc-date-picker-box" style={styles}>
          date-picker
        </div>
      </div>
    )
  }
})

export default CcDatePicker;
