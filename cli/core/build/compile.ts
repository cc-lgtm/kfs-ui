import fs from 'fs-extra/lib/fs'

const buildAll = async (entry: string, output: string) => {
  const ENTRY = {}
  const configContent = (entry: {[propname: string]: string}) => `module.exports = {
    outputDir: './lib',
    configureWebpack: {
      entry: ${JSON.stringify(entry)},
      output: {
        filename: '[name]/index.js'
      }
    }
  }`
  const packages = fs.readdirSync(entry)
  fs.mkdir(output, () => {
    packages.forEach((component, _) => {
      const name = (component as string)
      if (name === 'utils') return;
      if (name === 'index.ts' || name === 'message') {
        return;
      }
      ENTRY[component] = `./packages/${component}/index.ts`
    })
    fs.writeFileSync(`${output}/index.js`, configContent(ENTRY))
  })
}

export {
  buildAll
}
