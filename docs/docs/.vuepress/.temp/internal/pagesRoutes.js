import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-0cd0603d","/guide/Card.html",{"title":""},["/guide/Card","/guide/Card.md"]],
  ["v-5319047b","/guide/button.html",{"title":""},["/guide/button","/guide/button.md"]],
  ["v-672b1bc8","/guide/drawer.html",{"title":"Drawer"},["/guide/drawer","/guide/drawer.md"]],
  ["v-7f60393b","/guide/input.html",{"title":"Input"},["/guide/input","/guide/input.md"]],
  ["v-43288db3","/guide/link.html",{"title":""},["/guide/link","/guide/link.md"]],
  ["v-68a7fc09","/guide/loading.html",{"title":"Loading"},["/guide/loading","/guide/loading.md"]],
  ["v-704f37c4","/guide/message.html",{"title":"Message"},["/guide/message","/guide/message.md"]],
  ["v-1d140b13","/guide/pagination.html",{"title":"Pagination"},["/guide/pagination","/guide/pagination.md"]],
  ["v-8a5944ce","/guide/popup.html",{"title":"Popup"},["/guide/popup","/guide/popup.md"]],
  ["v-57bb7620","/guide/rating.html",{"title":"Rating"},["/guide/rating","/guide/rating.md"]],
  ["v-386b1740","/guide/skeleton.html",{"title":"Skeleton"},["/guide/skeleton","/guide/skeleton.md"]],
  ["v-02f84ffe","/guide/steps.html",{"title":"Steps"},["/guide/steps","/guide/steps.md"]],
  ["v-3ae325b9","/guide/switch.html",{"title":"Switch"},["/guide/switch","/guide/switch.md"]],
  ["v-391e9caf","/guide/tabs.html",{"title":"Tabs"},["/guide/tabs","/guide/tabs.md"]],
  ["v-5cbf4135","/guide/tips.html",{"title":"Tips"},["/guide/tips","/guide/tips.md"]],
  ["v-1c6d36c4","/guide/use.html",{"title":""},["/guide/use","/guide/use.md"]],
  ["v-91120e98","/guide/utils.html",{"title":""},["/guide/utils","/guide/utils.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
