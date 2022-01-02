import fs from 'fs-extra'

const buildAll = async (entry: string, output: string) => {
  const ENTRY = {} as {[propname: string]: string}
  const configContent = (entry: {[propname: string]: string}) => `module.exports = {
    outputDir: './lib',
    configureWebpack: {
      entry: ${JSON.stringify(entry)},
      output: {
        filename: '[name]/index.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
      }
    }
  }`
  const packages = fs.readdirSync(entry)
  fs.mkdir(output, () => {
    packages.forEach((component, _) => {
      const name = (component as string)
      if (name === 'utils') return;
      if (name === 'index.ts') {
        ENTRY['index'] = './packages/index.ts'
        return;
      }
      ENTRY[name] = `./packages/${component}/index.ts`
    })
    fs.writeFileSync(`${output}/index.js`, configContent(ENTRY), 'utf-8')
  })
}

export {
  buildAll
}
