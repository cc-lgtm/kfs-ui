type PropType = {[propname: string]: any}

const toStr = (v: PropType) => {
  return Object.prototype.toString.call(v)
}

const typeMap = {
  '[object String]': 'string',
  '[object Number]': 'number',
  '[object Object]': 'object'
} as {[propname: string]: string}

const toArray = (prop: PropType): any[] => {
  const type = typeMap[toStr(prop)]
  const newArray = []
  if (type !== 'object') {
    for (let i = 0; i < +prop; i++) {
      newArray.push(i)
    }
  }
  if (type === 'object') {
    const keys = Object.keys(prop)
    let key: string;
    for (key of keys) {
      const obj = {} as {[propname: string]: any}
      obj[key] = prop[key]
      newArray.push(obj)
    }
  }
  return newArray
}

export default toArray;
