const fs = require('fs-extra')
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, build, InlineConfig } from 'vite'
import path = require('path')

const entry = path.join(__dirname, '../../../packages');
const output = path.join(__dirname, '../../../lib')

const baseConfig = defineConfig({
  optimizeDeps: {
    exclude: ['esbuild']
  },
  plugins: [Vue(), VueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const buildAll = () => {
  build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entry, 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['umd']
      },
      outDir: output
    }
  }) as InlineConfig)
}

const buildSingle = (name: string) => {
  build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entry, 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['umd']
      },
      outDir: path.resolve(output, name)
    }
  }) as InlineConfig)
}

const createPackageJson = (name: string) => {
  const config = `{
    "name": "${name}",
    "version": "1.0.0",
    "main": "index.umd.js",
    "module": "index.es.js",
    "style": "style.css"
  }`
  fs.outputFile(
    path.resolve(output, `${name}/packages.json`),
    config,
    'utf-8'
  )
}

const createTypes = (name: string) => {
  const config = `declare module 'kfs-ui/lib/${name}.umd.js'`
  fs.outputFile(
    path.resolve(output, `${name}/index.d.ts`),
    config,
    'utf-8'
  )
}

const buildLib = async () => {
  await buildAll()
  const components = fs.readdirSync(entry).filter(name => {
    const dir = path.resolve(entry, name)
    const isDir = fs.lstatSync(dir).isDirectory()
    return isDir && (fs.readdirSync(dir) as string[]).includes('index.ts')
  })

  for(const name of components) {
    await buildSingle(name)
    createPackageJson(name)
    createTypes(name)
  }
}

buildLib()

// const buildAll = async (entry: string, output: string) => {
  // const ENTRY = {}
  // const configContent = (entry: {[propname: string]: string}) => `module.exports = {
  //   outputDir: './lib',
  //   configureWebpack: {
  //     entry: ${JSON.stringify(entry)},
  //     output: {
  //       filename: '[name]/index.js',
  //       libraryTarget: 'umd',
  //       library: 'kfs-ui',
  //       libraryExport: 'default'
  //     }
  //   },
  //   filenameHashing: false,
  //   css: {
  //     extract: true,
  //     sourceMap: false,
  //     requireModuleExtension: false
  //   }
  // }`
  // const packages = fs.readdirSync(entry)
  // fs.mkdir(output, () => {
  //   packages.forEach((component, _) => {
  //     const name = (component as string)
  //     if (name === 'utils') return;
  //     if (name === 'index.ts') {
  //       ENTRY['index'] = './packages/index.ts'
  //       return;
  //     }
  //     ENTRY[component] = `./packages/${component}/index.ts`
  //   })
  //   fs.writeFileSync(`${output}/index.js`, configContent(ENTRY))
  // })
// }

export {
  buildAll,
  buildLib
}
