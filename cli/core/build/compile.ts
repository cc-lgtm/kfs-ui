const path = require('path')
const fsExtra = require('fs-extra')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [ vue(), vueJsx() ]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const buildAll = async (entry: string, output: string) => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entry, 'index.ts'),
        name: 'kfs-ui',
        fileName: 'kfs-ui',
        formats: ['es', 'umd']
      },
      outDir: output
    }
  }))
}

const buildSingle = async (entry: string, output: string, name: string) => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entry, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(output, name)
    }
  }))
}

const createPackageJson = (output: string, name: string) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`

  fsExtra.outputFile(
    path.resolve(output, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

const buildLib = async (entry: string, output: string) => {
  await buildAll(entry, output)

  const components = fsExtra.readdirSync(entry).filter(name => {
    const componentDir = path.resolve(entry, name)
    const isDir = fsExtra.lstatSync(componentDir).isDirectory()
    return isDir && fsExtra.readdirSync(componentDir).includes('index.ts')
  })
  for(const name of components) {
    await buildSingle(entry, output, name)
    createPackageJson(output, name)
  }
}

export {
  buildAll,
  buildLib
}
