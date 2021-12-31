import { App } from 'vue'
import {Button} from './button'
import {Card} from './card'
import {Input} from './input'
import {Loading} from './loading'
import {Drawer} from './drawer'
import {Tips} from './tips'
import {Rating} from './rate'
import {Popup} from './popup'
import {Message} from './message'
import {Pagination} from './pagination'
import {Skeleton} from './skeleton'
import {SkeletonItem} from './skeleton-item'
import {Option} from './option'
import {Select} from './select'
import {Steps} from './stepbar'
import {Step} from './stepitem'
import {Tabs} from './tabs'
import {Tab} from './tab'
import {Switch} from './switch'
import {Radio} from './radio'
import {RadioGroup} from './radioGroup'
import {Link} from './link'
const components = [
  Button,
  Card,
  Input,
  Loading,
  Drawer,
  Tips,
  Rating,
  Popup,
  Message,
  Pagination,
  Option,
  Select,
  Steps,
  Step,
  Tabs,
  Tab,
  Switch,
  Radio,
  RadioGroup,
  Link,
  Skeleton,
  SkeletonItem
]

const install = (app:App) => {
  components.map((component: any) => {
    // if (component.install) {
    //   app.use(component)
    // } else if (component.name) {
      if (component.name) {
        app.component(component.name , component)
      }
    // }
  })
}

export * from './button'
export * from './card'
export * from './input'
export * from './loading'
export * from './drawer'
export * from './tips'
export * from './rate'
export * from './popup'
export * from './message'
export * from './pagination'
export * from './skeleton'
export * from './skeleton-item'
export * from './option'
export * from './select'
export * from './stepbar'
export * from './stepitem'
export * from './tabs'
export * from './tab'
export * from './switch'
export * from './radio'
export * from './radioGroup'
export * from './link'

export {
  install
}

export default install
