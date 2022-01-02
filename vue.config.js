const config = require('./config/index')
module.exports = {
  lintOnSave: false,
  ...config,
  css: {
    extract: {
      ignoreOrder: false,
    }
  }  
}
