import { App, createApp } from 'vue';
import Button from './button';
import Card from './card';
import Input from './input';
import Loading from './loading';
import Drawer from './drawer'
import Tips from './tips'
import Rate from './rate'
import Popup from './popup'
import Message from './message/index.ts'
import Pagination from './pagination'
import Skeleton from './skeleton'
import SkeletonItem from './skeleton-item'
import Option from './option'
import Select from './select'
import Steps from './stepbar'
import Step from './stepitem'
import Tabs from './tabs'
import Tab from './tab'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radioGroup'
import Link from './link'
const components = [
  Button,
  Card,
  Input,
  Loading,
  Drawer,
  Tips,
  Rate,
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
];

const install = (app:App) => {
  components.map((component: any) => {
    if (component === Message) {
      createApp(app).config.globalProperties.$message = Message
    } else if (component.name) {
      app.component(component.name , component)
    }
  })
};

export {
  install,
  Button,
  Card,
  Input,
  Loading,
  Drawer,
  Tips,
  Rate,
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
};

export default {
  install
};
