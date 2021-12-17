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
import Option from './option'
import Select from './select'
import Steps from './stepbar'
import Step from './stepitem'
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
  Step
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
  Step
};

export default {
  install
};
