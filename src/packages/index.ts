import { App } from 'vue';
import Button from './button';
import Card from './card';
import Input from './input';
import Loading from './loading';
import Popup from './popup'
import Drawer from './drawer'
const components = [
  Button,
  Card,
  Input,
  Loading,
  Popup,
  Drawer
];
const install = (app:App) => {
  components.map((component:any) => {
    if (component.install) {
      app.use(component)
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
  Popup,
  Drawer
};

export default {
  install
};
