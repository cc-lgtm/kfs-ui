import {tuple} from '../helper';

type ClassType = {
  state: any,
  className: string
}

const classname = (stateNames: Array<ClassType>, initName?: string) => {
  const classes = tuple<string>([])
  stateNames.map((_, index) => {
    stateNames[index].state && classes.push(stateNames[index].className)
  })
  return classes.join(' ')
}

export default classname;
