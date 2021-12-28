// 开发环境
const devConfig = require('./config/config.dev.js');
// 打包环境
const buildConfig = require('./config/config.build.js');
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig;
