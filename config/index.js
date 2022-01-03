module.exports = {
    outputDir: './lib',
    configureWebpack: {
      entry: {"button":"./packages/button/index.ts","card":"./packages/card/index.ts","datepicker":"./packages/datepicker/index.ts","drawer":"./packages/drawer/index.ts","index":"./packages/index.ts","input":"./packages/input/index.ts","link":"./packages/link/index.ts","loading":"./packages/loading/index.ts","message":"./packages/message/index.ts","option":"./packages/option/index.ts","pagination":"./packages/pagination/index.ts","popup":"./packages/popup/index.ts","radio":"./packages/radio/index.ts","radioGroup":"./packages/radioGroup/index.ts","rate":"./packages/rate/index.ts","select":"./packages/select/index.ts","skeleton":"./packages/skeleton/index.ts","skeleton-item":"./packages/skeleton-item/index.ts","stepbar":"./packages/stepbar/index.ts","stepitem":"./packages/stepitem/index.ts","switch":"./packages/switch/index.ts","tab":"./packages/tab/index.ts","tabs":"./packages/tabs/index.ts","tips":"./packages/tips/index.ts"},
      output: {
        filename: '[name]/index.js',
        libraryTarget: 'window',
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