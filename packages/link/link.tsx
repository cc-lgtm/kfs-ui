import {
  defineComponent,
  PropType
} from 'vue'
import './link.scss'
import { useClass } from '../utils/hooks/index'

type LinkType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

const CcLink = defineComponent({
  name: 'cc-link',
  props: {
    type: {
      type: String as PropType<LinkType>,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: String
  },
  setup(props, { slots }) {
    const className = useClass((classes) => {
      props.type && classes.push(`cc-link-${props.type}`)
      props.underline && classes.push('cc-link-underline')
      props.disabled && classes.push('cc-link-disabled')
    }, ['cc-link'])

    return () => (
      <a
        class={className}
        href={props.disabled ? 'javascript:void(0)' : props.href}
      >{slots.default?.()}</a>
    )
  }
})

export default CcLink;
