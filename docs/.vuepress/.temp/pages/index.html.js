export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "actionText": "快速上手 →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "介绍",
        "details": "该项目是自己写着玩的，没啥大用。"
      }
    ],
    "footer": "MIT | cc-lgtm"
  },
  "excerpt": "",
  "headers": []
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
