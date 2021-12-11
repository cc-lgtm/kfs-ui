import { App } from 'vue';
import Button from './button';
import Card from './card';
import Input from './input';
import Loading from './loading';
import Drawer from './drawer'
import Tips from './tips'
import Rate from './rate'
const components = [
  Button,
  Card,
  Input,
  Loading,
  Drawer,
  Tips,
  Rate
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
  Drawer,
  Tips,
  Rate
};

export default {
  install
};
