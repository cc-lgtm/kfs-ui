const componentProps = (names: string[], types: any[]) => {
  const props = {} as {[propname: string]: any}
  names.map((name, index) => {
    props[name] = types[index]
  })
  return props;
}

export default componentProps;
