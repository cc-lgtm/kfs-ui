export const data = {
  "key": "v-386b1740",
  "path": "/guide/skeleton.html",
  "title": "Skeleton",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640587332000,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/skeleton.md"
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
