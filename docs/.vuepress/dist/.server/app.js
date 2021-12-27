"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var Vue = require("vue");
var core = require("@vueuse/core");
var shared = require("@vuepress/shared");
require("kfs-ui/lib/index");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var Vue__namespace = /* @__PURE__ */ _interopNamespace(Vue);
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = Vue.defineComponent({
  setup(_, ctx) {
    const isMounted = Vue.ref(false);
    Vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$1;
  })),
  "v-0cd0603d": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Card_html$2;
  })),
  "v-5319047b": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return button_html$2;
  })),
  "v-c4666b9e": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return datepicker_html$2;
  })),
  "v-672b1bc8": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return drawer_html$2;
  })),
  "v-7f60393b": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return input_html$2;
  })),
  "v-43288db3": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return link_html$2;
  })),
  "v-68a7fc09": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return loading_html$2;
  })),
  "v-704f37c4": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return message_html$2;
  })),
  "v-1d140b13": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return pagination_html$2;
  })),
  "v-8a5944ce": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return popup_html$2;
  })),
  "v-2c9a73aa": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return radio_html$2;
  })),
  "v-57bb7620": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return rating_html$2;
  })),
  "v-6e61f61e": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return select_html$2;
  })),
  "v-386b1740": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return skeleton_html$2;
  })),
  "v-02f84ffe": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return steps_html$2;
  })),
  "v-3ae325b9": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return switch_html$2;
  })),
  "v-391e9caf": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tabs_html$2;
  })),
  "v-5cbf4135": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tips_html$2;
  })),
  "v-3706649a": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-0cd0603d": () => Promise.resolve().then(function() {
    return Card_html;
  }).then(({ data: data2 }) => data2),
  "v-5319047b": () => Promise.resolve().then(function() {
    return button_html;
  }).then(({ data: data2 }) => data2),
  "v-c4666b9e": () => Promise.resolve().then(function() {
    return datepicker_html;
  }).then(({ data: data2 }) => data2),
  "v-672b1bc8": () => Promise.resolve().then(function() {
    return drawer_html;
  }).then(({ data: data2 }) => data2),
  "v-7f60393b": () => Promise.resolve().then(function() {
    return input_html;
  }).then(({ data: data2 }) => data2),
  "v-43288db3": () => Promise.resolve().then(function() {
    return link_html;
  }).then(({ data: data2 }) => data2),
  "v-68a7fc09": () => Promise.resolve().then(function() {
    return loading_html;
  }).then(({ data: data2 }) => data2),
  "v-704f37c4": () => Promise.resolve().then(function() {
    return message_html;
  }).then(({ data: data2 }) => data2),
  "v-1d140b13": () => Promise.resolve().then(function() {
    return pagination_html;
  }).then(({ data: data2 }) => data2),
  "v-8a5944ce": () => Promise.resolve().then(function() {
    return popup_html;
  }).then(({ data: data2 }) => data2),
  "v-2c9a73aa": () => Promise.resolve().then(function() {
    return radio_html;
  }).then(({ data: data2 }) => data2),
  "v-57bb7620": () => Promise.resolve().then(function() {
    return rating_html;
  }).then(({ data: data2 }) => data2),
  "v-6e61f61e": () => Promise.resolve().then(function() {
    return select_html;
  }).then(({ data: data2 }) => data2),
  "v-386b1740": () => Promise.resolve().then(function() {
    return skeleton_html;
  }).then(({ data: data2 }) => data2),
  "v-02f84ffe": () => Promise.resolve().then(function() {
    return steps_html;
  }).then(({ data: data2 }) => data2),
  "v-3ae325b9": () => Promise.resolve().then(function() {
    return switch_html;
  }).then(({ data: data2 }) => data2),
  "v-391e9caf": () => Promise.resolve().then(function() {
    return tabs_html;
  }).then(({ data: data2 }) => data2),
  "v-5cbf4135": () => Promise.resolve().then(function() {
    return tips_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = Vue.ref(pagesData$1);
const pageDataEmpty = Vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = Vue.ref(pageDataEmpty);
const usePageData = () => pageData;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = Vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = Vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = shared.isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...shared.isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return shared.dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = Vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = Vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales2, routePath) => shared.resolveLocalePath(locales2, routePath);
const siteData$1 = {
  "base": "/",
  "lang": "zh-CN",
  "title": "kfs-ui",
  "description": "\u81EA\u5DF1\u5B66\u4E60vue3\uFF0C\u5199\u7740\u73A9\u7684\u4E00\u4E2A\u7EC4\u4EF6\u5E93.",
  "head": [],
  "locales": {}
};
const siteData = Vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = Vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = Vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return Vue.h(component);
  }
  return Vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": Vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = Vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = Vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (shared.isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || Vue.resolveComponent(layoutName, false);
    });
    return () => Vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (shared.isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${shared.removeLeadingSlash(url)}`;
};
var vars$3 = "";
var externalLinkIcon = "";
const svg = Vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  Vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  Vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return Vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "navbar": [
    {
      "text": "\u9996\u9875",
      "link": "/"
    },
    {
      "text": "\u7EC4\u4EF6",
      "link": "/guide/button"
    },
    {
      "text": "npm",
      "link": "https://www.npmjs.com/package/kfs-ui"
    },
    {
      "text": "Github",
      "link": "https://github.com/cc-lgtm/kfs-ui"
    }
  ],
  "sidebar": [
    {
      "text": "\u901A\u7528",
      "children": [
        {
          "text": "\u6309\u94AE Button",
          "link": "/guide/button"
        },
        {
          "text": "\u5361\u7247 Card",
          "link": "/guide/card"
        },
        {
          "text": "\u6587\u5B57\u63D0\u793A Tips",
          "link": "/guide/tips"
        },
        {
          "text": "\u8FDE\u63A5 Link",
          "link": "/guide/link"
        }
      ]
    },
    {
      "text": "\u8868\u5355",
      "children": [
        {
          "text": "\u8F93\u5165\u6846 Input",
          "link": "/guide/input"
        },
        {
          "text": "\u8BC4\u5206 Rating",
          "link": "/guide/rating"
        },
        {
          "text": "\u9009\u62E9\u5668 Select",
          "link": "/guide/select"
        },
        {
          "text": "\u65E5\u5386\u65F6\u95F4\u9009\u62E9 DatePicker",
          "link": "/guide/datepicker"
        },
        {
          "text": "\u5207\u6362 Switch",
          "link": "/guide/switch"
        },
        {
          "text": "\u5355\u9009\u6846 Radio",
          "link": "/guide/radio"
        }
      ]
    },
    {
      "text": "\u6570\u636E\u5C55\u793A",
      "children": [
        {
          "text": "\u9AA8\u67B6\u5C4F Skeleton",
          "link": "/guide/skeleton"
        }
      ]
    },
    {
      "text": "\u5E03\u544A",
      "children": [
        {
          "text": "\u6D88\u606F\u63D0\u793A Message",
          "link": "/guide/message"
        },
        {
          "text": "\u5F39\u6846 Popup",
          "link": "/guide/popup"
        },
        {
          "text": "\u52A0\u8F7D Loading",
          "link": "/guide/loading"
        },
        {
          "text": "\u6B65\u9AA4\u6761 steps",
          "link": "/guide/steps"
        },
        {
          "text": "\u62BD\u5C49 Drawer",
          "link": "/guide/drawer"
        }
      ]
    },
    {
      "text": "\u5BFC\u822A",
      "children": [
        {
          "text": "\u9009\u9879\u5361 Tabs",
          "link": "/guide/tabs"
        },
        {
          "text": "\u5206\u9875 Pagination",
          "link": "/guide/pagination"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = Vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = Vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = Vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$D = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var CodeGroup = Vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = Vue.ref(-1);
    const tabRefs = Vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return Vue.h("div", { class: "code-group" }, [
        Vue.h("div", { class: "code-group__nav" }, Vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return Vue.h("li", { class: "code-group__li" }, Vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = Vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$C = /* @__PURE__ */ Vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = Vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = Vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  Vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  Vue.onMounted(() => {
    Vue.watch(isDarkMode, update, { immediate: true });
  });
  Vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = shared.isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = shared.isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = Vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = Vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  Vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (shared.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (shared.isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (shared.isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = shared.resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
const _sfc_main$B = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Vue.unref(ExternalLinkIcon), _attrs, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(Vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              Vue.createVNode("span", { class: "sr-only" }, Vue.toDisplayString(Vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index$2 = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$D);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$C);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$B);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return Vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
function throttle(method, delay) {
  let timer = null;
  let begin = new Date();
  return function() {
    const context = this, args = arguments;
    const current = new Date();
    const remaining = delay - (current - begin);
    clearTimeout(timer);
    if (remaining <= 0) {
      method.apply(context, args);
      begin = new Date();
    } else {
      timer = setTimeout(function() {
        method.apply(context, args);
      }, remaining);
    }
  };
}
function makeError() {
  return new DOMException("The request is not allowed", "NotAllowedError");
}
async function copyClipboardApi(text) {
  if (!navigator.clipboard) {
    throw makeError();
  }
  return navigator.clipboard.writeText(text);
}
async function copyExecCommand(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.style.whiteSpace = "pre";
  span.style.webkitUserSelect = "auto";
  span.style.userSelect = "all";
  document.body.appendChild(span);
  const selection = window.getSelection();
  const range = window.document.createRange();
  selection.removeAllRanges();
  range.selectNode(span);
  selection.addRange(range);
  let success = false;
  try {
    success = window.document.execCommand("copy");
  } finally {
    selection.removeAllRanges();
    window.document.body.removeChild(span);
  }
  if (!success)
    throw makeError();
}
async function clipboardCopy(text) {
  try {
    await copyClipboardApi(text);
  } catch (err) {
    try {
      await copyExecCommand(text);
    } catch (err2) {
      throw err2 || err || makeError();
    }
  }
}
var Message_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
let seed = 0;
function getUuid() {
  return "message_" + seed++;
}
const _sfc_main$A = {
  setup() {
    const messages = Vue.ref([]);
    function add(props) {
      const name = getUuid();
      const _message = __spreadValues({ name }, props);
      messages.value.push(_message);
      const duration = props.duration;
      setTimeout(() => {
        remove(name);
      }, duration * 1e3);
    }
    function remove(name) {
      for (const [i, v] of messages.value.entries()) {
        if (v.name === name) {
          messages.value.splice(i, 1);
          break;
        }
      }
    }
    return { messages, add, remove };
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div>`);
  serverRenderer.ssrRenderList($setup.messages, (item) => {
    _push(`<div class="${serverRenderer.ssrRenderClass(["demoblock-message", item.type ? `demoblock-message-${item.type}` : ""])}" data-v-03999699><div class="demoblock-message-content" data-v-03999699>${serverRenderer.ssrInterpolate(item.content)}</div></div>`);
  });
  _push(`</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/vuepress-plugin-demoblock-plus/client/components/Message.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var Message = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$l], ["__scopeId", "data-v-03999699"]]);
Message.newInstance = (props = {}) => {
  const container = document.createElement("div");
  const app = Vue.createApp({
    render() {
      return Vue.h(Message, __spreadProps(__spreadValues({}, props), {
        ref: "messageRef"
      }));
    }
  });
  const instance = app.mount(container);
  const messageRef = instance.$refs.messageRef;
  document.body.appendChild(container.firstElementChild);
  return {
    add(messageProps) {
      messageRef.add(messageProps);
    },
    remove(name) {
      messageRef.remove(name);
    }
  };
};
let messageInstance;
function getMessageInstance() {
  messageInstance = messageInstance || Message.newInstance();
  return messageInstance;
}
function message(content, { duration = 3, type = "" }) {
  const instance = getMessageInstance();
  instance.add({ content, duration, type });
}
var message$1 = {
  info(content, options) {
    return message(content, __spreadValues({}, options));
  },
  error(content, options) {
    return message(content, __spreadProps(__spreadValues({}, options), { type: "error" }));
  }
};
var Demo_vue_vue_type_style_index_0_scoped_true_lang = "";
var Demo_vue_vue_type_style_index_1_lang = "";
const _sfc_main$z = Vue.defineComponent({
  name: "Demo",
  props: {
    customClass: String,
    sourceCode: String,
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const hover = Vue.ref(false);
    const fixedControl = Vue.ref(false);
    const isExpanded = Vue.ref(false);
    Vue.reactive({});
    const route = vueRouter.useRoute();
    const blockClass = Vue.computed(() => {
      const pathArr = route.path.split("/");
      const component = pathArr[pathArr.length - 1].split(".")[0];
      return `demo-${component}`;
    });
    const onClickControl = () => {
      isExpanded.value = !isExpanded.value;
      hover.value = isExpanded.value;
    };
    const routeLocale = useRouteLocale();
    const locale = Vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) != null ? _a : props.locales["/"];
    });
    const controlText = Vue.computed(() => {
      return isExpanded.value ? locale.value["hide-text"] : locale.value["show-text"];
    });
    const highlight = Vue.ref(null);
    const description = Vue.ref(null);
    const meta = Vue.ref(null);
    const control = Vue.ref(null);
    const demoBlock = Vue.ref(null);
    const codeAreaHeight = Vue.computed(() => {
      if (description.value) {
        return description.value.clientHeight + highlight.value.clientHeight + 20;
      }
      return highlight.value.clientHeight;
    });
    const _scrollHandler = () => {
      const { top, bottom, left } = meta.value.getBoundingClientRect();
      const innerHeight = window.innerHeight || document.body.clientHeight;
      fixedControl.value = bottom > innerHeight && top + 44 <= innerHeight;
      control.value.style.left = fixedControl.value ? `${left}px` : "0";
      const dv = fixedControl.value ? 1 : 2;
      control.value.style.width = `${demoBlock.value.offsetWidth - dv}px`;
    };
    const scrollHandler = throttle(_scrollHandler, 200);
    const removeScrollHandler = () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    };
    const onCopy = async () => {
      try {
        await clipboardCopy(props.sourceCode);
        message$1.info(locale.value["copy-success-text"]);
      } catch (err) {
        message$1.error(locale.value["copy-success-text"]);
      }
    };
    const goCodepen = () => {
    };
    Vue.watch(isExpanded, (val) => {
      meta.value.style.height = val ? `${codeAreaHeight.value + 1}px` : "0";
      if (!val) {
        fixedControl.value = false;
        control.value.style.left = "0";
        control.value.style.width = "auto";
        removeScrollHandler();
        return;
      }
      setTimeout(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", scrollHandler);
        _scrollHandler();
      }, 300);
    });
    Vue.onMounted(() => {
      Vue.nextTick(() => {
        if (!description.value) {
          highlight.value.style.width = "100%";
        }
      });
    });
    Vue.onBeforeUnmount(() => {
      removeScrollHandler();
    });
    return {
      blockClass,
      hover,
      fixedControl,
      isExpanded,
      locale,
      controlText,
      onClickControl,
      highlight,
      description,
      meta,
      control,
      onCopy,
      goCodepen,
      demoBlock
    };
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    ref: "demoBlock",
    class: ["demo-block", _ctx.blockClass, _ctx.customClass ? _ctx.customClass : "", { hover: _ctx.hover }]
  }, _attrs))} data-v-4253daa5><div class="source" data-v-4253daa5>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="meta" data-v-4253daa5>`);
  if (_ctx.$slots.description) {
    _push(`<div class="description" data-v-4253daa5>`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="highlight" data-v-4253daa5>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "highlight", {}, null, _push, _parent);
  _push(`</div></div><div class="${serverRenderer.ssrRenderClass(["demo-block-control", { "is-fixed": _ctx.fixedControl }])}" data-v-4253daa5><i${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    class: [
      "control-icon",
      { "icon-caret-down": !_ctx.isExpanded, "icon-caret-up": _ctx.isExpanded, hovering: _ctx.hover }
    ]
  }, _attrs))} data-v-4253daa5></i><span${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    style: _ctx.hover ? null : { display: "none" },
    class: "control-text"
  }, _attrs))} data-v-4253daa5>${serverRenderer.ssrInterpolate(_ctx.controlText)}</span><div class="control-button-wrap" data-v-4253daa5><span${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    style: _ctx.isExpanded ? null : { display: "none" },
    class: "control-button copy-button"
  }, _attrs))} data-v-4253daa5>${serverRenderer.ssrInterpolate(_ctx.locale && _ctx.locale["copy-button-text"])}</span></div></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/vuepress-plugin-demoblock-plus/client/components/Demo.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var Demo = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$k], ["__scopeId", "data-v-4253daa5"]]);
var DemoBlock_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = Vue.defineComponent({
  name: "DemoBlock",
  props: {
    customClass: String
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    class: ["demo-block", [_ctx.customClass ? _ctx.customClass : ""]]
  }, _attrs))} data-v-00000acc><div class="source" data-v-00000acc>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/vuepress-plugin-demoblock-plus/client/components/DemoBlock.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var DemoBlock = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-00000acc"]]);
var index$1 = "";
const locales = { "/": { "hide-text": "\u9690\u85CF\u4EE3\u7801", "show-text": "\u663E\u793A\u4EE3\u7801", "copy-button-text": "\u590D\u5236\u4EE3\u7801\u7247\u6BB5", "copy-success-text": "\u590D\u5236\u6210\u529F" } };
var clientAppEnhance4 = defineClientAppEnhance(({ app }) => {
  app.component("Demo", (props, { slots }) => Vue.h(Demo, __spreadValues({ locales }, props), slots));
  app.component("DemoBlock", DemoBlock);
});
var index = "";
var clientAppEnhance5 = async ({
  app,
  router,
  siteData: siteData2,
  Vue: Vue2,
  isServer
}) => {
  if (!isServer) {
    await Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("kfs-ui/lib/index"));
    }).then((module) => {
      app.use(module.default);
    });
  }
};
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4,
  clientAppEnhance5
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = Vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = Vue.ref(0);
    const show = Vue.computed(() => scrollTop.value > 300);
    Vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => r(() => {
        scrollTop.value = getScrollTop();
      }, 100));
    });
    const backToTopEl = Vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => Vue.h(Vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  Vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-0cd0603d", "/guide/Card.html", { "title": "" }, ["/guide/Card", "/guide/Card.md"]],
  ["v-5319047b", "/guide/button.html", { "title": "" }, ["/guide/button", "/guide/button.md"]],
  ["v-c4666b9e", "/guide/datepicker.html", { "title": "DatePicker" }, ["/guide/datepicker", "/guide/datepicker.md"]],
  ["v-672b1bc8", "/guide/drawer.html", { "title": "Drawer" }, ["/guide/drawer", "/guide/drawer.md"]],
  ["v-7f60393b", "/guide/input.html", { "title": "Input" }, ["/guide/input", "/guide/input.md"]],
  ["v-43288db3", "/guide/link.html", { "title": "" }, ["/guide/link", "/guide/link.md"]],
  ["v-68a7fc09", "/guide/loading.html", { "title": "Loading" }, ["/guide/loading", "/guide/loading.md"]],
  ["v-704f37c4", "/guide/message.html", { "title": "Message" }, ["/guide/message", "/guide/message.md"]],
  ["v-1d140b13", "/guide/pagination.html", { "title": "Pagination" }, ["/guide/pagination", "/guide/pagination.md"]],
  ["v-8a5944ce", "/guide/popup.html", { "title": "Popup" }, ["/guide/popup", "/guide/popup.md"]],
  ["v-2c9a73aa", "/guide/radio.html", { "title": "Radio" }, ["/guide/radio", "/guide/radio.md"]],
  ["v-57bb7620", "/guide/rating.html", { "title": "Rating" }, ["/guide/rating", "/guide/rating.md"]],
  ["v-6e61f61e", "/guide/select.html", { "title": "" }, ["/guide/select", "/guide/select.md"]],
  ["v-386b1740", "/guide/skeleton.html", { "title": "Skeleton" }, ["/guide/skeleton", "/guide/skeleton.md"]],
  ["v-02f84ffe", "/guide/steps.html", { "title": "Steps" }, ["/guide/steps", "/guide/steps.md"]],
  ["v-3ae325b9", "/guide/switch.html", { "title": "Switch" }, ["/guide/switch", "/guide/switch.md"]],
  ["v-391e9caf", "/guide/tabs.html", { "title": "Tabs" }, ["/guide/tabs", "/guide/tabs.md"]],
  ["v-5cbf4135", "/guide/tips.html", { "title": "Tips" }, ["/guide/tips", "/guide/tips.md"]],
  ["v-3706649a", "/404.html", {}, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const provideGlobalComputed = (app, router) => {
  const routeLocale = Vue.computed(() => resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = Vue.computed(() => resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = Vue.computed(() => resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = Vue.computed(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = Vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = Vue.computed(() => resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = Vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        Vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => Vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(shared.removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$x = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const goto = () => {
      location.href = "/guide/button.html";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = Vue.resolveComponent("ClientOnly");
      const _component_cc_button = Vue.resolveComponent("cc-button");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer.ssrRenderStyle({ "margin": "10px auto" })}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_cc_button, {
              value: "\u8D77\u6B65",
              type: "success"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              Vue.createVNode("div", { style: { "margin": "10px auto" } }, [
                Vue.createVNode(_component_cc_button, {
                  value: "\u8D77\u6B65",
                  type: "success",
                  onClick: goto
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<blockquote><p>\u5B89\u88C5</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">npm i kfs-ui</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">yarn add kfs-ui</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u5F15\u7528</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> { createApp } </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;vue&#39;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> App </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;./App.vue&#39;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> kfs-ui </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;kfs-ui/lib/index&#39;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;kfs-ui/lib/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">app</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">createApp</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">app</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">.use</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">(kfs</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">ui)</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">.mount</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;#app&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u65B9\u6CD5</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> cc-message </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;kfs-ui/lib/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">cc</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">message</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">({</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;...&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  text</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;...&#39;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$x
});
const _sfc_main$w = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_card = _resolveComponent2("cc-card");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_card, {
            value: "vue",
            icon: ""
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex", "width": "30%", "justify-content": "space-around" } };
      function render(_ctx, _cache) {
        const _component_cc_card = _resolveComponent2("cc-card");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_card, {
            value: "\u4E00\u76F4",
            icon: "",
            shadow: "always"
          }),
          _createVNode2(_component_cc_card, {
            value: "\u60AC\u505C",
            icon: "",
            shadow: "hover"
          }),
          _createVNode2(_component_cc_card, {
            value: "\u4ECE\u4E0D",
            icon: "",
            shadow: "never"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  _push(`<!--[--><h2 id="card-\u5361\u7247" tabindex="-1"><a class="header-anchor" href="#card-\u5361\u7247" aria-hidden="true">#</a> Card \u5361\u7247</h2><p><em>\u57FA\u7840\u7684\u5BB9\u5668</em></p><h4 id="\u9ED8\u8BA4\u7684" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7684" aria-hidden="true">#</a> \u9ED8\u8BA4\u7684</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-card value="vue" icon=""></cc-card>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;vue&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>icon</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"vue"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "icon"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '""'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71" aria-hidden="true">#</a> \u9634\u5F71</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex; width: 30%; justify-content: space-around;">\n    <cc-card value="\u4E00\u76F4" icon="" shadow="always"></cc-card>\n    <cc-card value="\u60AC\u505C" icon="" shadow="hover"></cc-card>\n    <cc-card value="\u4ECE\u4E0D" icon="" shadow="never"></cc-card>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>shadow</code>\u5C5E\u6027\u7981\u7528 Card\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "shadow"),
            Vue.createTextVNode("\u5C5E\u6027\u7981\u7528 Card\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex; width: 30%; justify-content: space-around;&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u4E00\u76F4&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>icon</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>shadow</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;always&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u60AC\u505C&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>icon</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>shadow</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;hover&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u4ECE\u4E0D&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>icon</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>shadow</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;never&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-card</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex; width: 30%; justify-content: space-around;"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u4E00\u76F4"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "icon"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '""'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "shadow"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"always"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u60AC\u505C"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "icon"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '""'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "shadow"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"hover"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u4ECE\u4E0D"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "icon"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '""'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "shadow"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"never"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-card"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>class</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u81EA\u5B9A\u4E49\u5361\u7247\u7684\u6837\u5F0F\u7C7B\u540D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5361\u7247\u7684\u63CF\u8FF0\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>shadow</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5361\u7247\u7684\u9634\u5F71</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>always</code>,<code>hover</code>,<code>never</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>always</code></td></tr><tr><td>icon</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5361\u7247\u56FE\u7247\u5730\u5740</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5361\u7247\u70B9\u51FB\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Card</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/Card.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var Card_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$i]]);
var Card_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Card_html$1
});
const _sfc_main$v = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button),
          _createVNode2(_component_cc_button, { type: "success" }),
          _createVNode2(_component_cc_button, { type: "warn" }),
          _createVNode2(_component_cc_button, { type: "error" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button, { disabled: "" }),
          _createVNode2(_component_cc_button, {
            type: "success",
            disabled: "",
            value: "success"
          }),
          _createVNode2(_component_cc_button, {
            type: "warn",
            disabled: "",
            value: "warn"
          }),
          _createVNode2(_component_cc_button, {
            type: "error",
            disabled: "",
            value: "error"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button, { isLoading: "" }),
          _createVNode2(_component_cc_button, {
            isLoading: _ctx.isLoading,
            onClick: _ctx.onClick
          }, null, 8, ["isLoading", "onClick"])
        ]);
      }
      const { defineComponent, ref } = Vue__namespace;
      const democomponentExport = defineComponent({
        setup() {
          const isLoading = ref(false);
          const onClick = () => isLoading.value = true;
          return {
            isLoading,
            onClick
          };
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-3": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button, {
            size: "mini",
            type: "success"
          }),
          _createVNode2(_component_cc_button, {
            size: "small",
            type: "warn"
          }),
          _createVNode2(_component_cc_button, {
            size: "medium",
            type: "error"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-4": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button, {
            circle: "",
            type: "success"
          }),
          _createVNode2(_component_cc_button, {
            round: "10",
            type: "success"
          }),
          _createVNode2(_component_cc_button, {
            round: 20,
            type: "success"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  const _component_render_demo_3 = Vue.resolveComponent("render-demo-3");
  const _component_render_demo_4 = Vue.resolveComponent("render-demo-4");
  _push(`<!--[--><h2 id="button-\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#button-\u6309\u94AE" aria-hidden="true">#</a> Button \u6309\u94AE</h2><p><em>\u7528\u4E8E\u4E00\u4E2A\u57FA\u7840\u7684\u64CD\u4F5C</em></p><h4 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true">#</a> \u4E0D\u540C\u7C7B\u578B</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-button></cc-button>\n    <cc-button type="success"></cc-button>\n    <cc-button type="warn"></cc-button>\n    <cc-button type="error"></cc-button>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>type</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Button \u7684\u7C7B\u578B\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "type"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5B9A\u4E49 Button \u7684\u7C7B\u578B\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warn&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;error&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warn"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"error"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u72B6\u6001" aria-hidden="true">#</a> \u7981\u7528\u72B6\u6001</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-button disabled></cc-button>\n    <cc-button type="success" disabled value="success"></cc-button>\n    <cc-button type="warn" disabled value="warn"></cc-button>\n    <cc-button type="error" disabled value="error"></cc-button>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>disabled</code>\u5C5E\u6027\u7981\u7528 Button\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "disabled"),
            Vue.createTextVNode("\u5C5E\u6027\u7981\u7528 Button\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warn&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warn&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;error&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;error&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warn"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warn"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"error"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"error"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u52A0\u8F7D\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u4E2D" aria-hidden="true">#</a> \u52A0\u8F7D\u4E2D</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div style="display: flex">
    <cc-button isLoading></cc-button>
    <cc-button :isLoading="isLoading" @click="onClick"></cc-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const isLoading = ref(false)
    const onClick = () => isLoading.value = true
    return {
      isLoading,
      onClick
    }
  }
})
<\/script>
`
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>isLoading</code>\u5C5E\u6027\u8BA9 Button \u52A0\u8F7D\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "isLoading"),
            Vue.createTextVNode("\u5C5E\u6027\u8BA9 Button \u52A0\u8F7D\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> { defineComponent</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}"${_scopeId}>,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> ref } </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;vue&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>export</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>default</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>defineComponent</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>({</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>(){</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>return</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      isLoading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      onClick</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>})</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "import"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " { defineComponent"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-punctuation)" } }, ","),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " ref } "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "from"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'vue'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "export"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "default"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "defineComponent"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "({")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "(){")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "return"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      isLoading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-punctuation)" } }, ",")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      onClick")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    }")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  }")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "})")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true">#</a> \u4E0D\u540C\u5C3A\u5BF8</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-button size="mini" type="success"></cc-button>\n    <cc-button size="small" type="warn"></cc-button>\n    <cc-button size="medium" type="error"></cc-button>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>size</code>\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "size"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;mini&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;small&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warn&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;medium&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;error&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"mini"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"small"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warn"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"medium"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"error"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_3, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_3)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5706\u5F62-\u89D2-\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u5706\u5F62-\u89D2-\u6309\u94AE" aria-hidden="true">#</a> \u5706\u5F62(\u89D2)\u6309\u94AE</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-button circle type="success"></cc-button>\n    <cc-button round="10" type="success"></cc-button>\n    <cc-button :round="20" type="success"></cc-button>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>size</code>\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "size"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>circle</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>round</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;10&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>round</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>20</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "circle"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "round"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"10"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "round"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "20"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_4, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_4)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>class</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u6837\u5F0F\u7C7B\u540D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u7684\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>success</code>,<code>warn</code>,<code>error</code>,<code>defalut</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>defalut</code></td></tr><tr><td>size</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u7684\u5C3A\u5BF8</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>medium</code></td></tr><tr><td>circle</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u5706\u5F62\u6309\u94AE</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u6B62\u70B9\u51FB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>isLoading</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u5F00\u542F\u52A0\u8F7D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>round</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u7684\u5706\u89D2</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>number</code>,<code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>0</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Button</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/button.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var button_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$h]]);
var button_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": button_html$1
});
const _sfc_main$u = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
    id: "datepicker",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#datepicker" aria-hidden="true">#</a> DatePicker</h1>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/datepicker.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var datepicker_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$g]]);
var datepicker_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": datepicker_html$1
});
const _sfc_main$t = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        const _component_cc_drawer = _resolveComponent2("cc-drawer");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_button, {
            value: "\u5DE6",
            onClick: _ctx.openleft
          }, null, 8, ["onClick"]),
          _createVNode2(_component_cc_button, {
            value: "\u53F3",
            onClick: _ctx.openright
          }, null, 8, ["onClick"]),
          _createVNode2(_component_cc_drawer, {
            vModel: false,
            position: _ctx.left
          }, null, 8, ["position"]),
          _createVNode2(_component_cc_drawer, {
            vModel: false,
            position: _ctx.right
          }, null, 8, ["position"])
        ]);
      }
      const { defineComponent: _defineComponent } = Vue__namespace;
      const { ref } = Vue__namespace;
      const democomponentExport = /* @__PURE__ */ _defineComponent({
        setup(__props, { expose }) {
          expose();
          const left = ref(false);
          const right = ref(false);
          const openleft = () => {
            left.value = true;
          };
          const openright = () => {
            right.value = true;
          };
          const __returned__ = { left, right, openleft, openright, ref };
          Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
          return __returned__;
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  _push(`<!--[--><h1 id="drawer" tabindex="-1"><a class="header-anchor" href="#drawer" aria-hidden="true">#</a> Drawer</h1><p><em>\u5C55\u793A\u4FA7\u8FB9\u6570\u636E</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div style="display:flex">
    <cc-button
      value="\u5DE6"
      @click="openleft"
    />
    <cc-button
      value="\u53F3"
      @click="openright"
    />
    <cc-drawer
      :vModel="false"
      :position="left"
    />
    <cc-drawer
      :vModel="false"
      :position="right"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const left = ref<boolean>(false)
const right = ref<boolean>(false)
const openleft = () => {
  left.value = true
}
const openright = () => {
  right.value = true
}
<\/script>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display:flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u5DE6&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>openleft</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u53F3&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>openright</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-drawer</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>vModel</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>position</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>left</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-drawer</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>vModel</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>position</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>right</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>lang</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;ts&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {ref} </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;vue&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>left</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>right</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>openleft</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>left</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>openright</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>right</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display:flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u5DE6"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "openleft"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u53F3"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "openright"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-drawer")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "vModel"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "position"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "left"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-drawer")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "vModel"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "position"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "right"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "lang"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"ts"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "import"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {ref} "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "from"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'vue'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "left"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "boolean"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "right"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "boolean"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "openleft"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "left"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "openright"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "right"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>vModel</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u663E\u793A</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>true</code></td></tr><tr><td>position</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6253\u5F00\u4F4D\u7F6E</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>left</code>,<code>right</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>right</code></td></tr><tr><td>width</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F39\u6846\u5927\u5C0F</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>max-content</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>opened</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6253\u5F00\u540E\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>closed</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5173\u95ED\u540E\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/drawer.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var drawer_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$f]]);
var drawer_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": drawer_html$1
});
const _sfc_main$s = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_input = _resolveComponent2("cc-input");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_input)
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_input = _resolveComponent2("cc-input");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_input, { disabled: "" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_input = _resolveComponent2("cc-input");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_input, { readonly: "" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h1><p><em>\u7528\u4E8E\u8BA9\u7528\u6237\u8F93\u5165\u6570\u636E</em></p><h4 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-input />\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-input</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-input"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-input disabled />\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-input</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-input"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u53EA\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB" aria-hidden="true">#</a> \u53EA\u8BFB</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-input readonly />\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-input</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>readonly</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-input"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "readonly"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>className</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u7684\u6837\u5F0F\u7C7B\u540D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u7684\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>text</code>,<code>number</code>,<code>password</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>text</code></td></tr><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>readonly</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u53EA\u8BFB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>tips</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u7684placeholder</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u8BF7\u8F93\u5165...</code></td></tr><tr><td>leftText</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u7684\u5DE6\u8FB9\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>leftIcon</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u5DE6\u8FB9\u56FE\u6807</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>rightIcon</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u53F3\u8FB9\u56FE\u6807</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>update:input</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u8F93\u5165\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u7684\u503C</code></td></tr><tr><td>click</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8F93\u5165\u6846\u53F3\u8FB9icon\u70B9\u51FB\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>inputChange</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F53\u524D\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u7684\u503C</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Input</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/input.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var input_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$e]]);
var input_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": input_html$1
});
var link_html_vue_vue_type_style_index_0_lang = "";
const _sfc_main$r = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { class: "box" };
      const _hoisted_2 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_3 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_4 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_5 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_6 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_7 = /* @__PURE__ */ _createTextVNode2("link");
      function render(_ctx, _cache) {
        const _component_cc_link = _resolveComponent2("cc-link");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_link, null, {
            default: _withCtx2(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, { type: "primary" }, {
            default: _withCtx2(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, { type: "success" }, {
            default: _withCtx2(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, { type: "warning" }, {
            default: _withCtx2(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, { type: "danger" }, {
            default: _withCtx2(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, { type: "info" }, {
            default: _withCtx2(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { class: "box" };
      const _hoisted_2 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_3 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_4 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_5 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_6 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_7 = /* @__PURE__ */ _createTextVNode2("link");
      function render(_ctx, _cache) {
        const _component_cc_link = _resolveComponent2("cc-link");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_link, { underline: false }, {
            default: _withCtx2(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "primary",
            underline: false
          }, {
            default: _withCtx2(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "success",
            underline: false
          }, {
            default: _withCtx2(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "warning",
            underline: false
          }, {
            default: _withCtx2(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "danger",
            underline: false
          }, {
            default: _withCtx2(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "info",
            underline: false
          }, {
            default: _withCtx2(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { class: "box" };
      const _hoisted_2 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_3 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_4 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_5 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_6 = /* @__PURE__ */ _createTextVNode2("link");
      const _hoisted_7 = /* @__PURE__ */ _createTextVNode2("link");
      function render(_ctx, _cache) {
        const _component_cc_link = _resolveComponent2("cc-link");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_link, { disabled: "" }, {
            default: _withCtx2(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "primary",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "success",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "warning",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "danger",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_link, {
            type: "info",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-3": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { class: "box" };
      const _hoisted_2 = /* @__PURE__ */ _createTextVNode2("link");
      function render(_ctx, _cache) {
        const _component_cc_link = _resolveComponent2("cc-link");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_link, {
            href: "https://www.npmjs.com/package/kfs-ui",
            type: "success"
          }, {
            default: _withCtx2(() => [
              _hoisted_2
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  const _component_render_demo_3 = Vue.resolveComponent("render-demo-3");
  _push(`<!--[--><h1 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h1><p><em>\u7528\u4E8E\u8DF3\u8F6C\u5230\u6307\u5B9A\u5730\u5740</em></p><h4 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true">#</a> \u4E0D\u540C\u7C7B\u578B</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div class="box">\n    <cc-link>link</cc-link>\n    <cc-link type="primary">link</cc-link>\n    <cc-link type="success">link</cc-link>\n    <cc-link type="warning">link</cc-link>\n    <cc-link type="danger">link</cc-link>\n    <cc-link type="info">link</cc-link>\n  </div>\n</template>\n\n<style>\n.box {\n  width: 50%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n</style>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>type</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u7684\u7C7B\u578B\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "type"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u7684\u7C7B\u578B\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>class</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;box&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;primary&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warning&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;danger&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;info&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>.box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>width</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>%</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>box-sizing</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>border-box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>display</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>flex</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>justify-content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>space-between</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "class"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"box"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"primary"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warning"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"danger"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"info"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, ".box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "width"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "50"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "%"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "box-sizing"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "border-box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "display"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "flex"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "justify-content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "space-between"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u4E0D\u5E26\u4E0B\u5212\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5E26\u4E0B\u5212\u7EBF" aria-hidden="true">#</a> \u4E0D\u5E26\u4E0B\u5212\u7EBF</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div class="box">\n    <cc-link :underline="false">link</cc-link>\n    <cc-link type="primary" :underline="false">link</cc-link>\n    <cc-link type="success" :underline="false">link</cc-link>\n    <cc-link type="warning" :underline="false">link</cc-link>\n    <cc-link type="danger" :underline="false">link</cc-link>\n    <cc-link type="info" :underline="false">link</cc-link>\n  </div>\n</template>\n\n<style>\n.box {\n  width: 50%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n</style>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>underline</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u7684\u662F\u5426\u663E\u793A\u4E0B\u5212\u7EBF\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "underline"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u7684\u662F\u5426\u663E\u793A\u4E0B\u5212\u7EBF\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>class</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;box&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;primary&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warning&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;danger&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;info&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>underline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>.box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>width</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>%</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>box-sizing</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>border-box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>display</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>flex</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>justify-content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>space-between</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "class"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"box"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"primary"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warning"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"danger"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"info"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "underline"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, ".box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "width"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "50"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "%"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "box-sizing"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "border-box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "display"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "flex"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "justify-content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "space-between"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div class="box">\n    <cc-link disabled>link</cc-link>\n    <cc-link type="primary" disabled>link</cc-link>\n    <cc-link type="success" disabled>link</cc-link>\n    <cc-link type="warning" disabled>link</cc-link>\n    <cc-link type="danger" disabled>link</cc-link>\n    <cc-link type="info" disabled>link</cc-link>\n  </div>\n</template>\n\n<style>\n.box {\n  width: 50%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n</style>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>disabled</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u4E0D\u53EF\u70B9\u51FB\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "disabled"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u4E0D\u53EF\u70B9\u51FB\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>class</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;box&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;primary&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warning&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;danger&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;info&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>.box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>width</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>%</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>box-sizing</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>border-box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>display</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>flex</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>justify-content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>space-between</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "class"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"box"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"primary"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warning"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"danger"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"info"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, ".box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "width"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "50"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "%"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "box-sizing"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "border-box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "display"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "flex"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "justify-content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "space-between"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C" aria-hidden="true">#</a> \u8DF3\u8F6C</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div class="box">\n    <cc-link href="https://www.npmjs.com/package/kfs-ui" type="success">link</cc-link>\n  </div>\n</template>\n\n<style>\n.box {\n  width: 50%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n</style>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>href</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u8DF3\u8F6C\u8FDE\u63A5\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "href"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5B9A\u4E49 Link \u8DF3\u8F6C\u8FDE\u63A5\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>class</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;box&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>href</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;https://www.npmjs.com/package/kfs-ui&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;link&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-link</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>.box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>width</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>%</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>box-sizing</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>border-box</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>display</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>flex</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>justify-content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>space-between</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "class"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"box"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "href"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"https://www.npmjs.com/package/kfs-ui"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">link</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-link"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, ".box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "width"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "50"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "%"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "box-sizing"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "border-box"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "display"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "flex"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "justify-content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "space-between"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ";")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_3, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_3)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>underline</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u5E26\u4E0B\u5212\u7EBF</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>true</code></td></tr><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u7684\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>default</code>,<code>primary</code>,<code>success</code>,<code>warning</code>,<code>danger</code>,<code>info</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>default</code></td></tr><tr><td>href</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8DF3\u8F6C\u7684\u5730\u5740</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u6B62\u70B9\u51FB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Link</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/link.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var link_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$d]]);
var link_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": link_html$1
});
const _sfc_main$q = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_loading = _resolveComponent2("cc-loading");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_loading)
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_loading = _resolveComponent2("cc-loading");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_loading, { type: "effect" }),
          _createVNode2(_component_cc_loading, { type: "line" }),
          _createVNode2(_component_cc_loading, { type: "rect" }),
          _createVNode2(_component_cc_loading, { type: "back" }),
          _createVNode2(_component_cc_loading, { type: "backLine" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  _push(`<!--[--><h1 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h1><p><em>\u7528\u4E8E\u52A0\u8F7D\u524D</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-loading></cc-loading>\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-loading type="effect" />\n    <cc-loading type="line" />\n    <cc-loading type="rect" />\n    <cc-loading type="back" />\n    <cc-loading type="backLine" />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;effect&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;line&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;rect&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;back&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;backLine&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"effect"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"line"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"rect"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"back"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"backLine"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="loading\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#loading\u5C5E\u6027" aria-hidden="true">#</a> loading\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>effect</code>,<code>line</code>,<code>rect</code>,<code>back</code>,<code>backLine</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>line</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/loading.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var loading_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$c]]);
var loading_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": loading_html$1
});
const _sfc_main$p = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_button, {
            value: "\u70B9\u6211\u8BD5\u4E00\u8BD5",
            type: "success",
            onClick: _ctx.openMessage
          }, null, 8, ["onClick"])
        ]);
      }
      const { defineComponent: _defineComponent } = Vue__namespace;
      const democomponentExport = /* @__PURE__ */ _defineComponent({
        setup(__props, { expose }) {
          expose();
          const openMessage = () => {
            $message({
              type: "error",
              text: "\u6211\u51FA\u6765\u4E86"
            });
          };
          const __returned__ = { openMessage };
          Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
          return __returned__;
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  _push(`<!--[--><h1 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h1><p><em>\u7528\u4E8E\u63D0\u793A\u7528\u6237</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-button value="\u70B9\u6211\u8BD5\u4E00\u8BD5" type="success" @click="openMessage"></cc-button>
  </div>
</template>

<script setup lang="ts">
  const openMessage = () => {
    $message({
      type: 'error',
      text: '\u6211\u51FA\u6765\u4E86'
    })
  }
<\/script>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u70B9\u6211\u8BD5\u4E00\u8BD5&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>openMessage</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>lang</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;ts&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>openMessage</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>$message</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>({</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;error&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      text</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;\u6211\u51FA\u6765\u4E86&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    })</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u70B9\u6211\u8BD5\u4E00\u8BD5"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "openMessage"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "lang"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"ts"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "openMessage"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "$message"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "({")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'error'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-punctuation)" } }, ",")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      text"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'\u6211\u51FA\u6765\u4E86'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    })")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  }")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="message\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#message\u5C5E\u6027" aria-hidden="true">#</a> message\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>success</code>,<code>error</code>,<code>warn</code>,<code>default</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>default</code></td></tr><tr><td>text</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u5185\u5BB9</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>top</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>15</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/message.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var message_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$b]]);
var message_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": message_html$1
});
const _sfc_main$o = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_pagination = _resolveComponent2("cc-pagination");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_pagination, { total: "100" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_pagination = _resolveComponent2("cc-pagination");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_pagination, {
            total: "100",
            background: ""
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_pagination = _resolveComponent2("cc-pagination");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_pagination, {
            total: "100",
            background: "",
            layout: "prev, pager, next"
          }),
          _createVNode2(_component_cc_pagination, {
            total: "100",
            background: "",
            layout: "jumper, prev, pager, next"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h1><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-pagination total="100" />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-pagination</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>total</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;100&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-pagination"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "total"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"100"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-pagination total="100" background />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-pagination</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>total</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;100&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>background</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-pagination"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "total"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"100"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "background"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-pagination total="100" background :layout="'prev, pager, next'" />
    <cc-pagination total="100" background :layout="'jumper, prev, pager, next'" />
  </div>
</template>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-pagination</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>total</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;100&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>background</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>layout</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;prev, pager, next&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-pagination</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>total</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;100&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>background</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>layout</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;jumper, prev, pager, next&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-pagination"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "total"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"100"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "background"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "layout"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'prev, pager, next'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-pagination"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "total"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"100"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "background"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "layout"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'jumper, prev, pager, next'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>nextText</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u4E0B\u4E00\u9875\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>prevText</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u4E0A\u4E00\u9875\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u603B\u6570\u636E\u91CF</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>pageSize</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6570\u636E</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>10</code></td></tr><tr><td>background</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u663E\u793A\u80CC\u666F</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>currentPage</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F53\u524D\u7684\u9875\u6570</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>1</code></td></tr><tr><td>layout</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5E03\u5C40</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>total</code>,<code>prev</code>,<code>pager</code>,<code>next</code>,<code>jumper</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>&#39;total, prev, pager, next, jumper&#39;</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>currentChange</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F53\u524D\u9875\u6570\u53D8\u5316\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u7684\u503C</code></td></tr><tr><td>prevClick</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u70B9\u51FB\u4E0A\u4E00\u9875\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u7684\u503C</code></td></tr><tr><td>nextClick</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u70B9\u51FB\u4E0B\u4E00\u9875\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u7684\u503C</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/pagination.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var pagination_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$a]]);
var pagination_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": pagination_html$1
});
const _sfc_main$n = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        const _component_cc_popup = _resolveComponent2("cc-popup");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_button, {
            value: "\u70B9\u6211\u4E00\u4E0B",
            onClick: _ctx.onClick
          }, null, 8, ["onClick"]),
          _ctx.popupStatus ? (_openBlock(), _createBlock(_component_cc_popup, {
            key: 0,
            type: "confirm",
            title: "\u63D0\u793A",
            content: "\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
          })) : _createCommentVNode("", true)
        ]);
      }
      const { defineComponent: _defineComponent } = Vue__namespace;
      const { ref } = Vue__namespace;
      const democomponentExport = /* @__PURE__ */ _defineComponent({
        setup(__props, { expose }) {
          expose();
          const popupStatus = ref(false);
          const onClick = () => {
            popupStatus.value = !popupStatus.value;
          };
          const __returned__ = { popupStatus, onClick, ref };
          Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
          return __returned__;
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        const _component_cc_popup = _resolveComponent2("cc-popup");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_button, {
            type: "success",
            value: "\u70B9\u6211\u4E00\u4E0B",
            onClick: _ctx.onClick
          }, null, 8, ["onClick"]),
          _ctx.popupStatus ? (_openBlock(), _createBlock(_component_cc_popup, {
            key: 0,
            type: "upload",
            title: "\u63D0\u793A",
            content: "\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
          })) : _createCommentVNode("", true)
        ]);
      }
      const { defineComponent: _defineComponent } = Vue__namespace;
      const { ref } = Vue__namespace;
      const democomponentExport = /* @__PURE__ */ _defineComponent({
        setup(__props, { expose }) {
          expose();
          const popupStatus = ref(false);
          const onClick = () => {
            popupStatus.value = !popupStatus.value;
          };
          const __returned__ = { popupStatus, onClick, ref };
          Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
          return __returned__;
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_button = _resolveComponent2("cc-button");
        const _component_cc_popup = _resolveComponent2("cc-popup");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_button, {
            type: "warn",
            value: "\u70B9\u6211\u4E00\u4E0B",
            onClick: _ctx.onClick
          }, null, 8, ["onClick"]),
          _ctx.popupStatus ? (_openBlock(), _createBlock(_component_cc_popup, {
            key: 0,
            type: "message",
            title: "\u63D0\u793A",
            content: "\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
          })) : _createCommentVNode("", true)
        ]);
      }
      const { defineComponent: _defineComponent } = Vue__namespace;
      const { ref } = Vue__namespace;
      const democomponentExport = /* @__PURE__ */ _defineComponent({
        setup(__props, { expose }) {
          expose();
          const popupStatus = ref(false);
          const onClick = () => {
            popupStatus.value = !popupStatus.value;
          };
          const __returned__ = { popupStatus, onClick, ref };
          Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
          return __returned__;
        }
      });
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="popup" tabindex="-1"><a class="header-anchor" href="#popup" aria-hidden="true">#</a> Popup</h1><p><em>\u7528\u4E8E\u63D0\u793A\u7528\u6237\u8F93\u5165</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-button
      value="\u70B9\u6211\u4E00\u4E0B"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="confirm"
      title="\u63D0\u793A"
      content="\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
<\/script>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u70B9\u6211\u4E00\u4E0B&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-popup</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>v-if</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;confirm&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u6211\u662F\u4E00\u4E2A\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>lang</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;ts&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {ref} </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;vue&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>!</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u70B9\u6211\u4E00\u4E0B"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-popup")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "v-if"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"confirm"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u6211\u662F\u4E00\u4E2A\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "lang"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"ts"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "import"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {ref} "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "from"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'vue'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "boolean"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "!"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a> \u4E0A\u4F20</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-button
      type="success"
      value="\u70B9\u6211\u4E00\u4E0B"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="upload"
      title="\u63D0\u793A"
      content="\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
<\/script>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;success&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u70B9\u6211\u4E00\u4E0B&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-popup</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>v-if</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;upload&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u6211\u662F\u4E00\u4E2A\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>lang</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;ts&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {ref} </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;vue&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>!</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"success"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u70B9\u6211\u4E00\u4E0B"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-popup")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "v-if"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"upload"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u6211\u662F\u4E00\u4E2A\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "lang"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"ts"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "import"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {ref} "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "from"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'vue'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "boolean"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "!"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F" aria-hidden="true">#</a> \u6D88\u606F</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-button
      type="warn"
      value="\u70B9\u6211\u4E00\u4E0B"
      @click="onClick"
    />
    <cc-popup
      v-if="popupStatus"
      type="message"
      title="\u63D0\u793A"
      content="\u6211\u662F\u4E00\u4E2A\u63D0\u793A"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}
<\/script>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-button</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;warn&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u70B9\u6211\u4E00\u4E0B&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>@</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>click</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-popup</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>v-if</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;message&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>content</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u6211\u662F\u4E00\u4E2A\u63D0\u793A&quot;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>lang</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;ts&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>setup</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {ref} </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;vue&#39;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>ref</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>false</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>onClick</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> () </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=&gt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>!</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>popupStatus</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>.value</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>script</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-button")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"warn"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u70B9\u6211\u4E00\u4E0B"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "@"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "click"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-popup")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "v-if"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"message"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "content"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u6211\u662F\u4E00\u4E2A\u63D0\u793A"')
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "lang"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"ts"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "setup"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "import"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {ref} "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "from"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'vue'")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "ref"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "boolean"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">("),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "false"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ")")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "const"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "onClick"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " () "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "=>"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " {")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "!"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "popupStatus"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ".value")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "}")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "script"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>title</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u6846\u7684\u540D\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u6846\u7684\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>message</code>,<code>confirm</code>,<code>upload</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>upload</code></td></tr><tr><td>content</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u6846\u7684\u5185\u5BB9</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\`-</td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F39\u6846\u5173\u95ED\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>confirm</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F39\u6846\u786E\u8BA4\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Popup</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/popup.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var popup_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$9]]);
var popup_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": popup_html$1
});
const _sfc_main$m = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = /* @__PURE__ */ _createTextVNode2("js");
      function render(_ctx, _cache) {
        const _component_cc_radio = _resolveComponent2("cc-radio");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_radio, { value: "1" }, {
            default: _withCtx2(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = /* @__PURE__ */ _createTextVNode2("vue");
      function render(_ctx, _cache) {
        const _component_cc_radio = _resolveComponent2("cc-radio");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_radio, {
            disabled: "",
            value: "1"
          }, {
            default: _withCtx2(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = /* @__PURE__ */ _createTextVNode2("vue");
      const _hoisted_2 = /* @__PURE__ */ _createTextVNode2("react");
      function render(_ctx, _cache) {
        const _component_cc_radio = _resolveComponent2("cc-radio");
        const _component_cc_radio_group = _resolveComponent2("cc-radio-group");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_radio_group, null, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_radio, {
                disabled: "",
                value: "1"
              }, {
                default: _withCtx2(() => [
                  _hoisted_1
                ]),
                _: 1
              }),
              _createVNode2(_component_cc_radio, {
                disabled: "",
                value: "2"
              }, {
                default: _withCtx2(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="radio" tabindex="-1"><a class="header-anchor" href="#radio" aria-hidden="true">#</a> Radio</h1><p><em>\u7528\u4E8E\u662F\u5426\u9009\u62E9</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-radio value="1">js</cc-radio>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;js&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">js</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-radio disabled value="1">vue</cc-radio>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;vue&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">vue</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u4E00\u7EC4\u5355\u9009" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EC4\u5355\u9009" aria-hidden="true">#</a> \u4E00\u7EC4\u5355\u9009</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-radio-group>\n      <cc-radio disabled value="1">vue</cc-radio>\n      <cc-radio disabled value="2">react</cc-radio>\n    </cc-radio-group>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio-group</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;vue&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;2&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;react&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-radio-group</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio-group"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">vue</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"2"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">react</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-radio-group"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="radio-group\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#radio-group\u5C5E\u6027" aria-hidden="true">#</a> radio-group\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>checked</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u9009\u4E2D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>size</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">radio\u5C3A\u5BF8</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>medium</code></td></tr></tbody></table><h4 id="radio\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#radio\u5C5E\u6027" aria-hidden="true">#</a> radio\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9009\u9879\u552F\u4E00\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code>,<code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>checked</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u9009\u4E2D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>size</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">radio\u5C3A\u5BF8</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>medium</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9009\u62E9\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u503C</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/radio.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var radio_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$8]]);
var radio_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": radio_html$1
});
const _sfc_main$l = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_rate = _resolveComponent2("cc-rate");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_rate)
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_rate = _resolveComponent2("cc-rate");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_rate, {
            disabled: "",
            value: "5"
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_rate = _resolveComponent2("cc-rate");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_rate, {
            value: "3",
            showText: ""
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-3": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_rate = _resolveComponent2("cc-rate");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_rate, {
            value: "1",
            showScore: ""
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  const _component_render_demo_3 = Vue.resolveComponent("render-demo-3");
  _push(`<!--[--><h1 id="rating" tabindex="-1"><a class="header-anchor" href="#rating" aria-hidden="true">#</a> Rating</h1><p><em>\u4E00\u822C\u7528\u4E8E\u7528\u6237\u8BC4\u5206</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-rate />\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-rate</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-rate"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-rate disabled value="5" />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-rate</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;5&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-rate"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"5"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5E26\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5E26\u6587\u5B57" aria-hidden="true">#</a> \u5E26\u6587\u5B57</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-rate value="3" showText />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-rate</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;3&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>showText</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-rate"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"3"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "showText"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5E26\u8BC4\u5206" tabindex="-1"><a class="header-anchor" href="#\u5E26\u8BC4\u5206" aria-hidden="true">#</a> \u5E26\u8BC4\u5206</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-rate value="1" showScore />\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-rate</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>showScore</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-rate"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "value"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "showScore"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_3, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_3)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8BC4\u5206\u7684\u521D\u59CB\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>0</code></td></tr><tr><td>showScore</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u663E\u793A\u5206\u6570</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>showText</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u5706\u5F62\u6309\u94AE</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/rating.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var rating_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$7]]);
var rating_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": rating_html$1
});
const _sfc_main$k = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_option = _resolveComponent2("cc-option");
        const _component_cc_select = _resolveComponent2("cc-select");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_select, { placeholder: "select" }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, { label: "css" }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_option = _resolveComponent2("cc-option");
        const _component_cc_select = _resolveComponent2("cc-select");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_select, {
            placeholder: "select1",
            disabled: ""
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, { label: "css" }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_select, { placeholder: "select2" }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, {
                label: "css",
                disabled: ""
              }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "display": "flex" } };
      function render(_ctx, _cache) {
        const _component_cc_option = _resolveComponent2("cc-option");
        const _component_cc_select = _resolveComponent2("cc-select");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_select, {
            placeholder: "select1",
            disabled: "",
            size: "mini"
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, { label: "css" }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_select, {
            placeholder: "select2",
            size: "small"
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, {
                label: "css",
                disabled: ""
              }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_select, {
            placeholder: "select3",
            disabled: "",
            size: "medium"
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, { label: "css" }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          }),
          _createVNode2(_component_cc_select, {
            placeholder: "select4",
            size: "large"
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_option, { label: "js" }),
              _createVNode2(_component_cc_option, {
                label: "css",
                disabled: ""
              }),
              _createVNode2(_component_cc_option, { label: "html" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h1><p><em>\u7528\u4E8E\u4E00\u7EC4\u6570\u636E\u7684\u9009\u62E9</em></p><h4 id="\u666E\u901A\u7684" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7684" aria-hidden="true">#</a> \u666E\u901A\u7684</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-select placeholder="select">\n      <cc-option label="js" />\n      <cc-option label="css" />\n      <cc-option label="html" />\n    </cc-select>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u7528\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u72B6\u6001" aria-hidden="true">#</a> \u7981\u7528\u72B6\u6001</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-select placeholder="select1" disabled>\n      <cc-option label="js" />\n      <cc-option label="css" />\n      <cc-option label="html" />\n    </cc-select>\n    <cc-select placeholder="select2">\n      <cc-option label="js" />\n      <cc-option label="css" disabled />\n      <cc-option label="html" />\n    </cc-select>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>disabled</code>\u5C5E\u6027\u7981\u7528 select\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "disabled"),
            Vue.createTextVNode("\u5C5E\u6027\u7981\u7528 select\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select2&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select2"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true">#</a> \u4E0D\u540C\u5C3A\u5BF8</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="display: flex">\n    <cc-select placeholder="select1" disabled size="mini">\n      <cc-option label="js" />\n      <cc-option label="css" />\n      <cc-option label="html" />\n    </cc-select>\n    <cc-select placeholder="select2" size="small">\n      <cc-option label="js" />\n      <cc-option label="css" disabled />\n      <cc-option label="html" />\n    </cc-select>\n    <cc-select placeholder="select3" disabled size="medium">\n      <cc-option label="js" />\n      <cc-option label="css" />\n      <cc-option label="html" />\n    </cc-select>\n    <cc-select placeholder="select4" size="large">\n      <cc-option label="js" />\n      <cc-option label="css" disabled />\n      <cc-option label="html" />\n    </cc-select>\n  </div>\n</template>\n'
  }, {
    description: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>\u4F7F\u7528<code${_scopeId}>size</code>\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002</div>`);
      } else {
        return [
          Vue.createVNode("div", null, [
            Vue.createTextVNode("\u4F7F\u7528"),
            Vue.createVNode("code", null, "size"),
            Vue.createTextVNode("\u5C5E\u6027\u6765\u5C55\u793A Button \u4E0D\u540C\u5927\u5C0F\u3002")
          ])
        ];
      }
    }),
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;display: flex&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;mini&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select2&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;small&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select3&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;medium&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>placeholder</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;select4&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;large&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;css&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-option</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>label</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;html&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-select</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"display: flex"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"mini"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select2"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"small"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select3"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"medium"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "placeholder"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"select4"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "size"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"large"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"css"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-option"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "label"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"html"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-select"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="select\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#select\u5C5E\u6027" aria-hidden="true">#</a> select\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelValue</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u7ED1\u5B9A\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code>,<code>string[]</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>placeholder</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">placeholder</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u8BF7\u8F93\u5165</code></td></tr><tr><td>size</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6309\u94AE\u7684\u5C3A\u5BF8</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>medium</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u6B62\u4F7F\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><h4 id="option\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#option\u5C5E\u6027" aria-hidden="true">#</a> option\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9009\u9879\u552F\u4E00\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>label</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9009\u9879\u7684\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u6B62\u4F7F\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><h4 id="select\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#select\u4E8B\u4EF6" aria-hidden="true">#</a> select\u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9009\u62E9\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u503C</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/select.html.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var select_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
var select_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": select_html$1
});
const _sfc_main$j = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_skeleton_item = _resolveComponent2("cc-skeleton-item");
        const _component_cc_skeleton = _resolveComponent2("cc-skeleton");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_skeleton, { loading: true }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_skeleton_item, { type: "text" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_skeleton = _resolveComponent2("cc-skeleton");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_skeleton, {
            loading: true,
            rows: 3
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_skeleton = _resolveComponent2("cc-skeleton");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_skeleton, {
            loading: true,
            rows: 3,
            rowsWidth: ["200px", "150px", "100px"]
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-3": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_skeleton_item = _resolveComponent2("cc-skeleton-item");
        const _component_cc_skeleton = _resolveComponent2("cc-skeleton");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_skeleton, { loading: true }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_skeleton_item, { type: "rect" }),
              _createVNode2(_component_cc_skeleton_item, { type: "h" }),
              _createVNode2(_component_cc_skeleton_item, { type: "button" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  const _component_render_demo_3 = Vue.resolveComponent("render-demo-3");
  _push(`<!--[--><h1 id="skeleton" tabindex="-1"><a class="header-anchor" href="#skeleton" aria-hidden="true">#</a> Skeleton</h1><p><em>\u7528\u4E8E\u586B\u5145\u6570\u636E</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-skeleton :loading="true">\n      <cc-skeleton-item type="text"></cc-skeleton-item>\n    </cc-skeleton>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;text&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"text"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u591A\u884C" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C" aria-hidden="true">#</a> \u591A\u884C</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-skeleton :loading="true" :rows=3>\n    </cc-skeleton>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>rows</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>3&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "rows"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "3>")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u8BBE\u7F6E\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u957F\u5EA6" aria-hidden="true">#</a> \u8BBE\u7F6E\u957F\u5EA6</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: `<template>
  <div>
    <cc-skeleton :loading="true" :rows=3 :rowsWidth="['200px','150px','100px']">
    </cc-skeleton>
  </div>
</template>
`
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>rows</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>3 </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>rowsWidth</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>[</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;200px&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}"${_scopeId}>,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;150px&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}"${_scopeId}>,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&#39;100px&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>]</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "rows"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "3 "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "rowsWidth"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "["),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'200px'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-punctuation)" } }, ","),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'150px'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-punctuation)" } }, ","),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "'100px'"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "]"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5176\u4ED6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7C7B\u578B" aria-hidden="true">#</a> \u5176\u4ED6\u7C7B\u578B</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-skeleton :loading="true">\n      <cc-skeleton-item type="rect"></cc-skeleton-item>\n      <cc-skeleton-item type="h"></cc-skeleton-item>\n      <cc-skeleton-item type="button"></cc-skeleton-item>\n    </cc-skeleton>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>loading</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>true</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;rect&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;h&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;button&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton-item</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-skeleton</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "loading"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "true"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"rect"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"h"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "type"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"button"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton-item"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-skeleton"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_3, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_3)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="skeleton\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#skeleton\u5C5E\u6027" aria-hidden="true">#</a> skeleton\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>rows</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6E32\u67D3\u591A\u884C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>0</code></td></tr><tr><td>rowsWidth</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6E32\u67D3\u591A\u884C\u7684\u5BBD\u5EA6</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string[]</code>,<code>number[]</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>loading</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u663E\u793A</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><h4 id="skeleton-item\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#skeleton-item\u5C5E\u6027" aria-hidden="true">#</a> skeleton-item\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>variable</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">skeleton\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>variable-type</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>text</code></td></tr></tbody></table><h4 id="\u7C7B\u578B\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u53C2\u8003" aria-hidden="true">#</a> \u7C7B\u578B\u53C2\u8003</h4><table><thead><tr><th>\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>variable-type</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}"><code>p</code>,<code>text</code>,<code>h</code>,<code>rect</code>,<code>circle</code>,<code>image</code>,<code>button</code>,<code>caption</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/skeleton.html.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var skeleton_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5]]);
var skeleton_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": skeleton_html$1
});
const _sfc_main$i = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_stepitem = _resolveComponent2("cc-stepitem");
        const _component_cc_stepbar = _resolveComponent2("cc-stepbar");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_stepbar, {
            active: 1,
            space: 100
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_stepitem),
              _createVNode2(_component_cc_stepitem),
              _createVNode2(_component_cc_stepitem),
              _createVNode2(_component_cc_stepitem)
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = { style: { "height": "200px" } };
      function render(_ctx, _cache) {
        const _component_cc_stepitem = _resolveComponent2("cc-stepitem");
        const _component_cc_stepbar = _resolveComponent2("cc-stepbar");
        return _openBlock(), _createElementBlock("div", _hoisted_1, [
          _createVNode2(_component_cc_stepbar, {
            active: 2,
            space: 100
          }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_stepitem, {
                title: "title1",
                description: "\u8FD9\u662F\u4E00\u6761\u63CF\u8FF0"
              }),
              _createVNode2(_component_cc_stepitem, {
                title: "title2",
                description: "\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u63CF\u8FF0"
              }),
              _createVNode2(_component_cc_stepitem, {
                title: "title3",
                description: "\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u63CF\u8FF0"
              }),
              _createVNode2(_component_cc_stepitem, {
                title: "title4",
                description: "\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u5F88\u957F\u63CF\u8FF0"
              })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  _push(`<!--[--><h1 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h1><p><em>\u7528\u4E8E\u5C55\u793A\u5F53\u524D\u6B65\u9AA4</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-stepbar :active="1" :space="100">\n      <cc-stepitem />\n      <cc-stepitem />\n      <cc-stepitem />\n      <cc-stepitem />\n    </cc-stepbar>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepbar</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>active</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>1</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>space</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>100</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepbar</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepbar"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "active"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "1"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "space"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "100"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepbar"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u6807\u9898\u548C\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6807\u9898\u548C\u63CF\u8FF0" aria-hidden="true">#</a> \u6807\u9898\u548C\u63CF\u8FF0</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div style="height: 200px">\n    <cc-stepbar :active="2" :space="100">\n      <cc-stepitem title="title1" description="\u8FD9\u662F\u4E00\u6761\u63CF\u8FF0" />\n      <cc-stepitem title="title2" description="\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u63CF\u8FF0" />\n      <cc-stepitem title="title3" description="\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u63CF\u8FF0" />\n      <cc-stepitem title="title4" description="\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u5F88\u957F\u63CF\u8FF0" />\n    </cc-stepbar>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>style</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;height: 200px&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepbar</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>active</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>2</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>space</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}"${_scopeId}>100</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>description</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u8FD9\u662F\u4E00\u6761\u63CF\u8FF0&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title2&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>description</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u63CF\u8FF0&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title3&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>description</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u63CF\u8FF0&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepitem</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title4&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>description</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u5F88\u957F\u63CF\u8FF0&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-stepbar</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "style"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"height: 200px"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepbar"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "active"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "2"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "space"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-constant)" } }, "100"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, '"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "description"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u8FD9\u662F\u4E00\u6761\u63CF\u8FF0"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title2"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "description"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u63CF\u8FF0"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title3"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "description"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u63CF\u8FF0"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepitem"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title4"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "description"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u5F88\u957F\u63CF\u8FF0"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-stepbar"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="steps\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#steps\u5C5E\u6027" aria-hidden="true">#</a> steps\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>space</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u95F4\u9694</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code>,<code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>direction</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5E03\u5C40</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>vertical</code>,<code>horizontal</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>horizontal</code></td></tr><tr><td>active</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F53\u524D\u6B65\u9AA4</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>processStatus</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8FC7\u7A0B\u72B6\u6001</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>StepStatus</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>process</code></td></tr><tr><td>finishStatus</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B8C\u6210\u72B6\u6001</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>StepStatus</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>finish</code></td></tr></tbody></table><h4 id="\u7C7B\u578B\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63CF\u8FF0" aria-hidden="true">#</a> \u7C7B\u578B\u63CF\u8FF0</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>StepStatus</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u72B6\u6001</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>wait</code>,<code>process</code>,<code>finish</code>,<code>error</code>,<code>success</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="step\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#step\u5C5E\u6027" aria-hidden="true">#</a> step\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>title</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u6807\u9898</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>description</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u63CF\u8FF0</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>icon</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u56FE\u6807</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/steps.html.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var steps_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4]]);
var steps_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": steps_html$1
});
const _sfc_main$h = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_switch = _resolveComponent2("cc-switch");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_switch)
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-1": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_switch = _resolveComponent2("cc-switch");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_switch, { disabled: "" })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }(),
    "render-demo-2": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_switch = _resolveComponent2("cc-switch");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_switch)
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  const _component_render_demo_1 = Vue.resolveComponent("render-demo-1");
  const _component_render_demo_2 = Vue.resolveComponent("render-demo-2");
  _push(`<!--[--><h1 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h1><p><em>\u7528\u4E8E\u4E24\u79CD\u72B6\u6001\u5207\u6362</em></p><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-switch></cc-switch>\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u7981\u6B62\u70B9\u51FB" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u70B9\u51FB" aria-hidden="true">#</a> \u7981\u6B62\u70B9\u51FB</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-switch disabled></cc-switch>\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>disabled</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "disabled"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_1, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u8BBE\u7F6E\u5F00\u542F\u7684value\u548C\u5173\u95ED\u7684value" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F00\u542F\u7684value\u548C\u5173\u95ED\u7684value" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F00\u542F\u7684value\u548C\u5173\u95ED\u7684value</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: "<template>\n  <div>\n    <cc-switch></cc-switch>\n  </div>\n</template>\n"
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-switch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "></"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-switch"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_2, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>value</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u521D\u59CB\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>size</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Switch\u7684\u5C3A\u5BF8</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>medium</code></td></tr><tr><td>disabled</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u662F\u5426\u7981\u7528</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>true</code>,<code>false</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr><tr><td>checkedValue</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5F00\u542F\u7684\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code>,<code>string</code>,<code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>true</code></td></tr><tr><td>inactiveValue</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5173\u95ED\u7684\u503C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>boolean</code>,<code>string</code>,<code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>false</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5207\u6362\u65F6\u89E6\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>\u5F53\u524D\u503C</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/switch.html.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var switch_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3]]);
var switch_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": switch_html$1
});
const _sfc_main$g = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { resolveComponent: _resolveComponent2, createVNode: _createVNode2, withCtx: _withCtx2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      function render(_ctx, _cache) {
        const _component_cc_tab = _resolveComponent2("cc-tab");
        const _component_cc_tabs = _resolveComponent2("cc-tabs");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_tabs, { active: 0 }, {
            default: _withCtx2(() => [
              _createVNode2(_component_cc_tab, { title: "title1" }),
              _createVNode2(_component_cc_tab, { title: "title2" }),
              _createVNode2(_component_cc_tab, { title: "title3" })
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  _push(`<!--[--><h1 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h1><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-tabs :active=0>\n      <cc-tab title="title1" />\n      <cc-tab title="title2" />\n      <cc-tab title="title3" />\n    </cc-tabs>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tabs</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>active</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>0&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tab</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title1&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tab</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title2&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>      &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tab</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>title</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;title3&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tabs</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tabs"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, ":"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "active"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-keyword)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "0>")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tab"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title1"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tab"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title2"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "      <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tab"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "title"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"title3"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " />")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tabs"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="tabs\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#tabs\u5C5E\u6027" aria-hidden="true">#</a> tabs\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>active</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6B65\u9AA4\u95F4\u9694</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code>,<code>number</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>0</code></td></tr></tbody></table><h4 id="tab\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#tab\u5C5E\u6027" aria-hidden="true">#</a> tab\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>title</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">tab\u6807\u9898</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/tabs.html.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var tabs_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$2]]);
var tabs_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": tabs_html$1
});
const _sfc_main$f = {
  name: "component-doc",
  components: {
    "render-demo-0": function() {
      const { createTextVNode: _createTextVNode2, resolveComponent: _resolveComponent2, withCtx: _withCtx2, createVNode: _createVNode2, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue__namespace;
      const _hoisted_1 = /* @__PURE__ */ _createTextVNode2("\u6478\u6211\u4E00\u4E0B");
      function render(_ctx, _cache) {
        const _component_cc_tips = _resolveComponent2("cc-tips");
        return _openBlock(), _createElementBlock("div", null, [
          _createVNode2(_component_cc_tips, { tips: "js\u662F\u6D4F\u89C8\u5668\u5BC4\u751F\u8BED\u8A00" }, {
            default: _withCtx2(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]);
      }
      const democomponentExport = {};
      return __spreadValues({
        render
      }, democomponentExport);
    }()
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = Vue.resolveComponent("demo");
  const _component_render_demo_0 = Vue.resolveComponent("render-demo-0");
  _push(`<!--[--><h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><h4 id="\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a> \u9ED8\u8BA4</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_demo, {
    customClass: "",
    sourceCode: '<template>\n  <div>\n    <cc-tips tips="js\u662F\u6D4F\u89C8\u5668\u5BC4\u751F\u8BED\u8A00">\u6478\u6211\u4E00\u4E0B</cc-tips>\n  </div>\n</template>\n'
  }, {
    highlight: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><pre class="shiki" style="${serverRenderer.ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>    &lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tips</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"${_scopeId}>tips</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>&quot;js\u662F\u6D4F\u89C8\u5668\u5BC4\u751F\u8BED\u8A00&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;\u6478\u6211\u4E00\u4E0B&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>cc-tips</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>  &lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}"${_scopeId}>template</span><span style="${serverRenderer.ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          Vue.createVNode("div", { class: "language-vue" }, [
            Vue.createVNode("pre", {
              class: "shiki",
              style: { "background-color": "var(--shiki-color-background)" }
            }, [
              Vue.createVNode("code", null, [
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "<"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "    <"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tips"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, " "),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-function)" } }, "tips"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "="),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, '"js\u662F\u6D4F\u89C8\u5668\u5BC4\u751F\u8BED\u8A00"'),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">\u6478\u6211\u4E00\u4E0B</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "cc-tips"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "  </"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "div"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" }, [
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, "</"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-token-string-expression)" } }, "template"),
                  Vue.createVNode("span", { style: { "color": "var(--shiki-color-text)" } }, ">")
                ]),
                Vue.createTextVNode("\n"),
                Vue.createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_render_demo_0, null, null, _parent2, _scopeId));
      } else {
        return [
          Vue.createVNode(_component_render_demo_0)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u7C7B\u578B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u53EF\u9009\u503C</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>class</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u81EA\u5B9A\u4E49tips\u7684\u6837\u5F0F\u7C7B\u540D</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>tips</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u7684\u6587\u5B57</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>color</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D0\u793A\u7684\u6587\u5B57\u989C\u8272</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>string</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>#57606f</code></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">\u53C2\u6570</th></tr></thead><tbody><tr><td>hover</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9F20\u6807\u60AC\u505C\u89E6\u53D1\u4E8B\u4EF6</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr><tr><td>hoverout</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u9F20\u6807\u79BB\u5F00\u89E6\u53D1\u4E8B\u4EF6</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><code>-</code></td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4><table><thead><tr><th>\u540D\u79F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>Tips</code>\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/tips.html.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var tips_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
var tips_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": tips_html$1
});
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$j = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "features": [
      {
        "title": "\u4ECB\u7ECD",
        "details": "\u8BE5\u9879\u76EE\u662F\u81EA\u5DF1\u5199\u7740\u73A9\u7684\uFF0C\u6CA1\u5565\u5927\u7528\u3002"
      }
    ],
    "footer": "MIT | cc-lgtm"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164026359e4,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 4
      }
    ]
  },
  "filePathRelative": "README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-0cd0603d",
  "path": "/guide/Card.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/Card.md"
};
var Card_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-5319047b",
  "path": "/guide/button.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "guide/button.md"
};
var button_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-c4666b9e",
  "path": "/guide/datepicker.html",
  "title": "DatePicker",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164026359e4,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/datepicker.md"
};
var datepicker_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-672b1bc8",
  "path": "/guide/drawer.html",
  "title": "Drawer",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/drawer.md"
};
var drawer_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-7f60393b",
  "path": "/guide/input.html",
  "title": "Input",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/input.md"
};
var input_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-43288db3",
  "path": "/guide/link.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/link.md"
};
var link_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-68a7fc09",
  "path": "/guide/loading.html",
  "title": "Loading",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/loading.md"
};
var loading_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-704f37c4",
  "path": "/guide/message.html",
  "title": "Message",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/message.md"
};
var message_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-1d140b13",
  "path": "/guide/pagination.html",
  "title": "Pagination",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/pagination.md"
};
var pagination_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-8a5944ce",
  "path": "/guide/popup.html",
  "title": "Popup",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/popup.md"
};
var popup_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-2c9a73aa",
  "path": "/guide/radio.html",
  "title": "Radio",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/radio.md"
};
var radio_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-57bb7620",
  "path": "/guide/rating.html",
  "title": "Rating",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/rating.md"
};
var rating_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-6e61f61e",
  "path": "/guide/select.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "guide/select.md"
};
var select_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-386b1740",
  "path": "/guide/skeleton.html",
  "title": "Skeleton",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/skeleton.md"
};
var skeleton_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-02f84ffe",
  "path": "/guide/steps.html",
  "title": "Steps",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "guide/steps.md"
};
var steps_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-3ae325b9",
  "path": "/guide/switch.html",
  "title": "Switch",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/switch.md"
};
var switch_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-391e9caf",
  "path": "/guide/tabs.html",
  "title": "Tabs",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640436726e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/tabs.md"
};
var tabs_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-5cbf4135",
  "path": "/guide/tips.html",
  "title": "Tips",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640424568e3,
    "contributors": [
      {
        "name": "coderC",
        "email": "2448856797@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "guide/tips.md"
};
var tips_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": []
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$d = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = Vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: Vue.unref(homeLink) }, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(Vue.unref(homeText))}`);
          } else {
            return [
              Vue.createTextVNode(Vue.toDisplayString(Vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$d
});
const __default__ = Vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$c = /* @__PURE__ */ Vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = Vue.toRefs(props);
    const hasHttpProtocol = Vue.computed(() => shared.isLinkHttp(item.value.link));
    const hasNonHttpProtocol = Vue.computed(() => shared.isLinkMailto(item.value.link) || shared.isLinkTel(item.value.link));
    const linkTarget = Vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = Vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = Vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = Vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = Vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = Vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = Vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = Vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = Vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = Vue.resolveComponent("ExternalLinkIcon");
      if (Vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, Vue.mergeProps({
          class: ["nav-link", { "router-link-active": Vue.unref(isActive) }],
          to: Vue.unref(item).link,
          "aria-label": Vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(Vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                Vue.renderSlot(_ctx.$slots, "before"),
                Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref(item).text) + " ", 1),
                Vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
          class: "nav-link external",
          href: Vue.unref(item).link,
          rel: Vue.unref(linkRel),
          target: Vue.unref(linkTarget),
          "aria-label": Vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(Vue.unref(item).text)} `);
        if (Vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = Vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = Vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = Vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = Vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = Vue.computed(() => {
      if (!shared.isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const features = Vue.computed(() => {
      if (shared.isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    const footer = Vue.computed(() => frontmatter.value.footer);
    const footerHtml = Vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = Vue.resolveComponent("ClientOnly");
      const _component_Content = Vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: "home",
        "aria-labelledby": Vue.unref(heroText) ? "main-title" : void 0
      }, _attrs))}><header class="hero">`);
      _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Vue.unref(heroImage)) {
              _push2(`<img${serverRenderer.ssrRenderAttr("src", Vue.unref(withBase)(Vue.unref(heroImage)))}${serverRenderer.ssrRenderAttr("alt", Vue.unref(heroAlt))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Vue.unref(heroImage) ? (Vue.openBlock(), Vue.createBlock("img", {
                key: 0,
                src: Vue.unref(withBase)(Vue.unref(heroImage)),
                alt: Vue.unref(heroAlt)
              }, null, 8, ["src", "alt"])) : Vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (Vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(Vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (Vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(Vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (Vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(Vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$c, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (Vue.unref(features).length) {
        _push(`<div class="features"><!--[-->`);
        serverRenderer.ssrRenderList(Vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="theme-default-content custom">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      if (Vue.unref(footer)) {
        _push(`<!--[-->`);
        if (Vue.unref(footerHtml)) {
          _push(`<div class="footer">${Vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(Vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const resolveRepoType = (repo) => {
  if (!shared.isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, shared.isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, shared.removeLeadingSlash(`${shared.removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = Vue.toRefs(props);
    const dropdownAriaLabel = Vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = Vue.ref(false);
    const route = vueRouter.useRoute();
    Vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: ["dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", Vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(Vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="mobile-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", Vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(Vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="nav-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(Vue.unref(item).children, (child, index2) => {
              _push2(`<li class="dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$c, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$c, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$c, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              Vue.withDirectives(Vue.createVNode("ul", { class: "nav-dropdown" }, [
                (Vue.openBlock(true), Vue.createBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(item).children, (child, index2) => {
                  return Vue.openBlock(), Vue.createBlock("li", {
                    key: child.link || index2,
                    class: "dropdown-item"
                  }, [
                    child.children ? (Vue.openBlock(), Vue.createBlock(Vue.Fragment, { key: 0 }, [
                      Vue.createVNode("h4", { class: "dropdown-subtitle" }, [
                        child.link ? (Vue.openBlock(), Vue.createBlock(_sfc_main$c, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, Vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (Vue.openBlock(), Vue.createBlock("span", { key: 1 }, Vue.toDisplayString(child.text), 1))
                      ]),
                      Vue.createVNode("ul", { class: "dropdown-subitem-wrapper" }, [
                        (Vue.openBlock(true), Vue.createBlock(Vue.Fragment, null, Vue.renderList(child.children, (grandchild) => {
                          return Vue.openBlock(), Vue.createBlock("li", {
                            key: grandchild.link,
                            class: "dropdown-subitem"
                          }, [
                            Vue.createVNode(_sfc_main$c, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, Vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (Vue.openBlock(), Vue.createBlock(_sfc_main$c, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, Vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [Vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return Vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unkown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = Vue.computed(() => themeLocale.value.repo);
      const repoType = Vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = Vue.computed(() => {
        if (repo.value && !shared.isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = Vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return Vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (shared.isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return Vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = Vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (Vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "navbar-links" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(Vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-links-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$9, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: "toggle-dark-button",
        title: Vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!Vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(Vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: "toggle-sidebar-button",
        title: Vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbar = Vue.ref(null);
    const siteBrand = Vue.ref(null);
    const siteBrandLink = Vue.computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandLogo = Vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const siteBrandTitle = Vue.computed(() => siteLocale.value.title);
    const linksWrapperMaxWidth = Vue.ref(0);
    const linksWrapperStyle = Vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = Vue.computed(() => themeLocale.value.darkMode);
    Vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = siteBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = Vue.resolveComponent("RouterLink");
      const _component_ClientOnly = Vue.resolveComponent("ClientOnly");
      const _component_NavbarSearch = Vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: Vue.unref(siteBrandLink) }, {
        default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: Vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (Vue.unref(siteBrandLogo)) {
                    _push3(`<img class="logo"${serverRenderer.ssrRenderAttr("src", Vue.unref(withBase)(Vue.unref(siteBrandLogo)))}${serverRenderer.ssrRenderAttr("alt", Vue.unref(siteBrandTitle))}${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    Vue.unref(siteBrandLogo) ? (Vue.openBlock(), Vue.createBlock("img", {
                      key: 0,
                      class: "logo",
                      src: Vue.unref(withBase)(Vue.unref(siteBrandLogo)),
                      alt: Vue.unref(siteBrandTitle)
                    }, null, 8, ["src", "alt"])) : Vue.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (Vue.unref(siteBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": Vue.unref(siteBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(Vue.unref(siteBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Vue.createVNode(_component_ClientOnly, null, {
                default: Vue.withCtx(() => [
                  Vue.unref(siteBrandLogo) ? (Vue.openBlock(), Vue.createBlock("img", {
                    key: 0,
                    class: "logo",
                    src: Vue.unref(withBase)(Vue.unref(siteBrandLogo)),
                    alt: Vue.unref(siteBrandTitle)
                  }, null, 8, ["src", "alt"])) : Vue.createCommentVNode("", true)
                ]),
                _: 1
              }),
              Vue.unref(siteBrandTitle) ? (Vue.openBlock(), Vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": Vue.unref(siteBrandLogo) }]
              }, Vue.toDisplayString(Vue.unref(siteBrandTitle)), 3)) : Vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="navbar-links-wrapper" style="${serverRenderer.ssrRenderStyle(Vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (Vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return Vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      useSiteLocaleData();
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return Vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return Vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = Vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (Vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, {
          class: "meta-item-label",
          item: Vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (Vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(Vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(Vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                Vue.createVNode("span", { class: "meta-item-info" }, Vue.toDisplayString(Vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (Vue.unref(contributors) && Vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(Vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(Vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== Vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (shared.isString(conf)) {
        return useNavLink(conf);
      }
      if (shared.isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = Vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = Vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (Vue.unref(prevNavLink) || Vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (Vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { item: Vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (Vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { item: Vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = Vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (route, link) => {
  if (link === void 0) {
    return false;
  }
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.link)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child));
  }
  return false;
};
const renderItem = (item, props) => {
  if (item.link) {
    return Vue.h(_sfc_main$c, __spreadProps(__spreadValues({}, props), {
      item
    }));
  }
  return Vue.h("p", props, item.text);
};
const renderChildren = (item, depth) => {
  var _a;
  if (!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
    return null;
  }
  return Vue.h("ul", {
    class: {
      "sidebar-sub-items": depth > 0
    }
  }, item.children.map((child) => Vue.h("li", Vue.h(SidebarChild, {
    item: child,
    depth: depth + 1
  }))));
};
const SidebarChild = ({ item, depth = 0 }) => {
  const route = vueRouter.useRoute();
  const active = isActiveItem(route, item);
  return [
    renderItem(item, {
      class: {
        "sidebar-heading": depth === 0,
        "sidebar-item": true,
        active
      }
    }),
    renderChildren(item, depth)
  ];
};
SidebarChild.displayName = "SidebarChild";
SidebarChild.props = {
  item: {
    type: Object,
    required: true
  },
  depth: {
    type: Number,
    required: false
  }
};
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(Vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<ul class="sidebar-links"><!--[-->`);
      serverRenderer.ssrRenderList(Vue.unref(sidebarItems), (item) => {
        _push(serverRenderer.ssrRenderComponent(Vue.unref(SidebarChild), {
          key: item.link || item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = Vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = Vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = Vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    Vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    Vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(Vue.mergeProps({
        class: ["theme-container", Vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (Vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, {
            before: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  Vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  Vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                Vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                Vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (Vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$2, Vue.mergeProps({
            key: Vue.unref(page).path
          }, _attrs), {
            top: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  Vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: Vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  Vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = Vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
