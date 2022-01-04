import { App } from 'vue'
import Button from './button/button'
import Card from './card/card'
import Input from './input/input'
import Loading from './loading/loading'
import Drawer from './drawer/drawer'
import Tips from './tips/tips'
import Rating from './rate/rating'
import Popup from './popup/popup'
import Message from './message/message'
import Pagination from './pagination/pagination'
import Skeleton from './skeleton/skeleton'
import SkeletonItem from './skeleton-item/skeletonItem'
import Option from './option/option'
import Select from './select/select'
import Steps from './stepbar/steps'
import Step from './stepitem/step'
import Tabs from './tabs/tabs'
import Tab from './tab/tab'
import Switch from './switch/switch'
import Radio from './radio/radio'
import RadioGroup from './radioGroup/radioGroup'
import Link from './link/link'
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
    app.component(component.name , component)
  })
}

export {
  install,
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
}

export default {
  install
}
