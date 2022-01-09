export const data = {
  "key": "v-91120e98",
  "path": "/guide/utils.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "helper",
      "slug": "helper",
      "children": []
    },
    {
      "level": 3,
      "title": "hooks",
      "slug": "hooks",
      "children": []
    },
    {
      "level": 3,
      "title": "theme",
      "slug": "theme",
      "children": []
    }
  ]
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
