import { defineClientAppEnhance } from '@vuepress/client';
import KfsUi from './../../lib/index.js'
import './../../lib/index.css'

export default defineClientAppEnhance(({
  app,
  router,
  siteData,
  Vue,
  isServer
}) => {
  app.use(KfsUi)
})
