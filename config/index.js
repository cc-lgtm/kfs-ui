module.exports = {
    outputDir: './lib',
    configureWebpack: {
      entry: {
        app: './examples/main.ts'
      },
      output: {
        filename: '[name]/index.js',
        libraryTarget: 'umd',
        library: 'kfs-ui',
        libraryExport: 'default'
      }
    },
    filenameHashing: false,
    css: {
      extract: true,
      sourceMap: false,
      requireModuleExtension: false
    }
}