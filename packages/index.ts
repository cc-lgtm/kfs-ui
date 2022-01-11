import './style/var.scss';
import { App } from 'vue'
import useTheme from './utils/hooks/useTheme'
import Button from './button/button'
import Card from './card/card'
import Input from './input/input'
import Loading from './loading/loading'
import Drawer from './drawer/drawer'
import Tips from './tips/tips'
import Rating from './rate/rating'
import Popup from './popup/popup'
import Message from './message'
import Toast from './toast'
import Pagination from './pagination/pagination'
import Skeleton from './skeleton/skeleton'
import SkeletonItem from './skeleton-item/skeletonItem'
import Steps from './stepbar/steps'
import Step from './stepitem/step'
import Tabs from './tabs/tabs'
import Tab from './tab/tab'
import Switch from './switch/switch'
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
  Pagination,
  Steps,
  Step,
  Tabs,
  Tab,
  Switch,
  Link,
  Skeleton,
  SkeletonItem
]

const install = (app:App) => {
  app.config.globalProperties.Message = Message;
  app.config.globalProperties.Toast = Toast;
  app.config.globalProperties.useTheme = useTheme;
  components.map((component: any) => {
    app.component(component.name , component)
  })
}

import {CcButton} from './button'
import {CcCard} from './card'
import {CcInput} from './input'
import {CcLoading} from './loading'
import {CcDrawer} from './drawer'
import {CcTips} from './tips'
import {CcRating} from './rate'
import {CcPopup} from './popup'
import {messageFn} from './message'
import {toastFn} from './toast'
import {CcPagination} from './pagination'
import {CcSkeleton} from './skeleton'
import {CcSkeletonItem} from './skeleton-item'
import {CcSteps} from './stepbar'
import {CcStep} from './stepitem'
import {CcTabs} from './tabs'
import {CcTab} from './tab'
import {CcSwitch} from './switch'
import {CcLink} from './link'

export {
  install,
  CcButton,
  CcCard,
  CcInput,
  CcLoading,
  CcDrawer,
  CcTips,
  CcRating,
  CcPopup,
  messageFn,
  toastFn,
  CcPagination,
  CcSkeleton,
  CcSkeletonItem,
  CcSteps,
  CcStep,
  CcTabs,
  CcTab,
  CcSwitch,
  CcLink
}

export default {
  install
}
