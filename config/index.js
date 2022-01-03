module.exports = {
    outputDir: './lib',
    configureWebpack: {
      entry: {"app":"./examples/main.ts","button":"./packages/button/index.ts"},
      output: {
        filename: '[name]/index.js'
      }
    },
    filenameHashing: false,
    css: {
      extract: true,
      sourceMap: false,
      requireModuleExtension: false
    }
  }