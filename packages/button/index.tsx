import {
  computed,
  defineComponent,
  PropType
} from "vue";
import "./index.scss";
import CcLoading from '../loading/index';
import {componentName, componentProps} from '../utils/helper';
import {classname, styles} from '../utils/theme';
import {Size, Type} from '../utils/theme'

const name = componentName('button')
const props = componentProps([
  'class','type','size','circle',
  'circle','disabled','value',
  'isLoading','round'
], [
  {type: String}, {type: String as PropType<Type>,default: "default"},
  {type: String as PropType<Size>,default: 'medium'}, {type: Boolean,default: false},
  {type: Boolean,default: false}, {type: String,default: '按钮'},
  {type: Boolean,default: false}, {type: [Number, String],default: 0}
])

const CcButton = defineComponent({
  name,
  props,
  components: {CcLoading},
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: Event) => {
      if (props.isLoading) return;
      if (props.disabled) return;
      emit('click', e)
    }

    const stateClass = [
      {state: props.type, className: `cc-button-${props.type}`},
      {state: props.isLoading, className: 'cc-button-isLoading'},
      {state: props.circle, className: 'cc-button-isCircle'},
      {state: props.disabled, className: 'cc-button-isDisabled'},
      {state: props.class, className: props.class}
    ]
    const className = computed(() => classname(stateClass, 'cc-button'))

    const r = typeof props.round === "string" ? +props.round : props.round;
    const sizeMap = {
      'large': 200,
      'medium': 150,
      'small': 100,
      'mini': 50
    } as {[propname: string]: number}
    const roundStyle = styles(['--round','--size'],
                              [r + 'px', sizeMap[props.size] + 'px'])

    const render = () => {
      const icon = slots['icon']
      const _default = slots['default']
      if (props.isLoading) {
        return <cc-loading type="loadLine" />
      }
      return icon
      ? (<>
        <div class="icon">{icon()}</div>
        {props.value}
        </>)
      : (<>
        {_default?.()}
        {props.value}
        </>)
    }
    
    return () => (
      <>
        <button
          class={className.value}
          onClick={onClick}
          style={roundStyle}
        >
          { render() }
        </button>
      </>
    )
  }
})

export default CcButton;
