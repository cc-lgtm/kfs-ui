import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/littlebird/桌面/vue3-components/vue3-components/v3-components/docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/littlebird/桌面/vue3-components/vue3-components/v3-components/docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
