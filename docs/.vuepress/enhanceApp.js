import { defineClientAppEnhance } from '@vuepress/client'
import uninterest from 'uninterest'
import 'uninterest/lib/uninterest.css'

export default defineClientAppEnhance(({
  app,
  router,
  siteData,
}) => {
  app.use(uninterest)
})
