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
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
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
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$F;
  })),
  "v-7445767f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$D;
  })),
  "v-8c02d0de": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$B;
  })),
  "v-4db4c8ca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Homebrew_______________html$2;
  })),
  "v-4ba74800": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Mac____SSH_______html$2;
  })),
  "v-74473916": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$z;
  })),
  "v-609d06f6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return PbootCMS_______________mp4___html$2;
  })),
  "v-2c3dda6e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$x;
  })),
  "v-73785f95": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$v;
  })),
  "v-65cad7be": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return wordpress__No_input_file_specified______html$2;
  })),
  "v-d14937e8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return wordpress__________html$2;
  })),
  "v-66a577e0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return __WordPress________html$2;
  })),
  "v-33e79a11": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ______wordpress_____html$2;
  })),
  "v-39f5b4c6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$t;
  })),
  "v-2ebea979": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _________Rem_html$2;
  })),
  "v-158ed2c3": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return babel____html$2;
  })),
  "v-a9ee2fe2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return for_of___for_in_____html$2;
  })),
  "v-39f3f210": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$r;
  })),
  "v-9b959746": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _65279_____________html$2;
  })),
  "v-7de668f3": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$p;
  })),
  "v-5b54bfc6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ____________video_____html$2;
  })),
  "v-c5075ec4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return jq______________html$2;
  })),
  "v-030c7ca0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$n;
  })),
  "v-7e388d7c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$l;
  })),
  "v-417626c9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Windows___Node_js_______html$2;
  })),
  "v-2e854bf4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-143f10bc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return swiper_animation_______html$2;
  })),
  "v-0a4e80f3": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-439c79a5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vscode_command_not_found_html$2;
  })),
  "v-17579900": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return webpack_config_js_____html$2;
  })),
  "v-4b80cdad": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return nuxt_js_____html$2;
  })),
  "v-39e4630c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-aef0a982": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vue_elementUi___________html$2;
  })),
  "v-ba37bd5c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return __npm______html$2;
  })),
  "v-085a2bfe": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ______XXX______________html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$d;
  }).then(({ data: data2 }) => data2),
  "v-7445767f": () => Promise.resolve().then(function() {
    return index_html$c;
  }).then(({ data: data2 }) => data2),
  "v-8c02d0de": () => Promise.resolve().then(function() {
    return index_html$b;
  }).then(({ data: data2 }) => data2),
  "v-4db4c8ca": () => Promise.resolve().then(function() {
    return Homebrew_______________html;
  }).then(({ data: data2 }) => data2),
  "v-4ba74800": () => Promise.resolve().then(function() {
    return Mac____SSH_______html;
  }).then(({ data: data2 }) => data2),
  "v-74473916": () => Promise.resolve().then(function() {
    return index_html$a;
  }).then(({ data: data2 }) => data2),
  "v-609d06f6": () => Promise.resolve().then(function() {
    return PbootCMS_______________mp4___html;
  }).then(({ data: data2 }) => data2),
  "v-2c3dda6e": () => Promise.resolve().then(function() {
    return index_html$9;
  }).then(({ data: data2 }) => data2),
  "v-73785f95": () => Promise.resolve().then(function() {
    return index_html$8;
  }).then(({ data: data2 }) => data2),
  "v-65cad7be": () => Promise.resolve().then(function() {
    return wordpress__No_input_file_specified______html;
  }).then(({ data: data2 }) => data2),
  "v-d14937e8": () => Promise.resolve().then(function() {
    return wordpress__________html;
  }).then(({ data: data2 }) => data2),
  "v-66a577e0": () => Promise.resolve().then(function() {
    return __WordPress________html;
  }).then(({ data: data2 }) => data2),
  "v-33e79a11": () => Promise.resolve().then(function() {
    return ______wordpress_____html;
  }).then(({ data: data2 }) => data2),
  "v-39f5b4c6": () => Promise.resolve().then(function() {
    return index_html$7;
  }).then(({ data: data2 }) => data2),
  "v-2ebea979": () => Promise.resolve().then(function() {
    return _________Rem_html;
  }).then(({ data: data2 }) => data2),
  "v-158ed2c3": () => Promise.resolve().then(function() {
    return babel____html;
  }).then(({ data: data2 }) => data2),
  "v-a9ee2fe2": () => Promise.resolve().then(function() {
    return for_of___for_in_____html;
  }).then(({ data: data2 }) => data2),
  "v-39f3f210": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-9b959746": () => Promise.resolve().then(function() {
    return _65279_____________html;
  }).then(({ data: data2 }) => data2),
  "v-7de668f3": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-5b54bfc6": () => Promise.resolve().then(function() {
    return ____________video_____html;
  }).then(({ data: data2 }) => data2),
  "v-c5075ec4": () => Promise.resolve().then(function() {
    return jq______________html;
  }).then(({ data: data2 }) => data2),
  "v-030c7ca0": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-7e388d7c": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-417626c9": () => Promise.resolve().then(function() {
    return Windows___Node_js_______html;
  }).then(({ data: data2 }) => data2),
  "v-2e854bf4": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-143f10bc": () => Promise.resolve().then(function() {
    return swiper_animation_______html;
  }).then(({ data: data2 }) => data2),
  "v-0a4e80f3": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-439c79a5": () => Promise.resolve().then(function() {
    return vscode_command_not_found_html;
  }).then(({ data: data2 }) => data2),
  "v-17579900": () => Promise.resolve().then(function() {
    return webpack_config_js_____html;
  }).then(({ data: data2 }) => data2),
  "v-4b80cdad": () => Promise.resolve().then(function() {
    return nuxt_js_____html;
  }).then(({ data: data2 }) => data2),
  "v-39e4630c": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-aef0a982": () => Promise.resolve().then(function() {
    return vue_elementUi___________html;
  }).then(({ data: data2 }) => data2),
  "v-ba37bd5c": () => Promise.resolve().then(function() {
    return __npm______html;
  }).then(({ data: data2 }) => data2),
  "v-085a2bfe": () => Promise.resolve().then(function() {
    return ______XXX______________html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
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
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "myBlog",
  "lang": "zh-CN",
  "title": "Lyeshen's blog",
  "description": "\u89E3\u51B3\u95EE\u9898\u5927\u591A\u6570\u90FD\u5F88\u5BB9\u6613\uFF1B\u627E\u5230\u95EE\u9898\u51FA\u5728\u54EA\u91CC\u5374\u5F88\u96BE\u3002",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/logo.png"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
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
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$4 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
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
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales$1 = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales: locales$1 }));
});
var vars$3 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "logo": "/images/logo.png",
  "navbar": [
    {
      "text": "\u9996\u9875",
      "link": "/"
    },
    {
      "text": "\u524D\u7AEF",
      "children": [
        {
          "text": "HTML",
          "link": "/front-end/html/"
        },
        {
          "text": "CSS",
          "link": "/front-end/css/"
        },
        {
          "text": "jQuery",
          "link": "/front-end/jquery/"
        },
        {
          "text": "Vue",
          "link": "/front-end/vue/"
        },
        {
          "text": "node.js",
          "link": "/front-end/node/"
        },
        {
          "text": "webpack",
          "link": "/front-end/webpack/"
        },
        {
          "text": "es6",
          "link": "/front-end/es6/"
        },
        {
          "text": "Swiper",
          "link": "/front-end/swiper/"
        }
      ]
    },
    {
      "text": "Git",
      "link": "/git/"
    },
    {
      "text": "CMS",
      "children": [
        {
          "text": "WordPress",
          "link": "/cms/wordpress/"
        },
        {
          "text": "pbootcms",
          "link": "/cms/pbootcms/"
        }
      ]
    }
  ],
  "sidebar": {
    "/front-end/html/": [
      {
        "text": "HTML",
        "children": [
          "65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5.md",
          "\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F.md"
        ]
      }
    ],
    "/front-end/css/": [
      {
        "text": "CSS",
        "children": [
          "\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem.md"
        ]
      }
    ],
    "/front-end/jquery/": [
      {
        "text": "jQuery",
        "children": [
          "jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21.md"
        ]
      }
    ],
    "/front-end/vue/": [
      {
        "text": "Vue",
        "children": [
          "\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C.md",
          "\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF.md",
          "vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316.md",
          "nuxt.js\u5B66\u4E60\u8BB0\u5F55.md"
        ]
      }
    ],
    "/front-end/node/": [
      {
        "text": "node.js",
        "children": [
          "Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B.md"
        ]
      }
    ],
    "/front-end/swiper/": [
      {
        "text": "Swiper",
        "children": [
          "swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F.md"
        ]
      }
    ],
    "/front-end/webpack/": [
      {
        "text": "webpack",
        "children": [
          "vscode command not found.md",
          "webpack.config.js\u57FA\u672C\u914D\u7F6E.md"
        ]
      }
    ],
    "/front-end/es6/": [
      {
        "text": "es6",
        "children": [
          "babel\u7684\u4F7F\u7528.md",
          "for of \u548C for in \u7684\u533A\u522B.md"
        ]
      }
    ],
    "/git/": [
      {
        "text": "Git",
        "children": [
          "Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09.md",
          "Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09.md"
        ]
      }
    ],
    "/cms/wordpress/": [
      {
        "text": "WordPress",
        "children": [
          "\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD.md",
          "wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848.md",
          "\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F.md",
          "wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D.md"
        ]
      }
    ],
    "/cms/pbootcms/": [
      {
        "text": "PbootCMS",
        "children": [
          "PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
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
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
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
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
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
const _sfc_main$W = /* @__PURE__ */ vue.defineComponent({
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
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
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
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
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
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
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
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$V = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
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
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
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
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
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
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
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
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
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
    if (isString(item)) {
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
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$W);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$V);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  const onKeydown = (event) => {
    if (!input.value || hotKeys2.value.length === 0)
      return;
    if (event.target === document.body && hotKeys2.value.includes(event.key)) {
      input.value.focus();
      event.preventDefault();
    }
  };
  vue.onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  vue.onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Cms",
    "headers": [],
    "path": "/cms/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Front-end",
    "headers": [],
    "path": "/front-end/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09",
    "headers": [],
    "path": "/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09",
    "headers": [],
    "path": "/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Git",
    "headers": [],
    "path": "/git/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F",
    "headers": [
      {
        "level": 2,
        "title": "\u5B9E\u73B0\u6548\u679C",
        "slug": "\u5B9E\u73B0\u6548\u679C",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4FEE\u6539\u6B65\u9AA4",
        "slug": "\u4FEE\u6539\u6B65\u9AA4",
        "children": []
      }
    ],
    "path": "/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "PbootCMS",
    "headers": [],
    "path": "/cms/pbootcms/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "WordPress",
    "headers": [],
    "path": "/cms/wordpress/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848",
    "headers": [],
    "path": "/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D",
    "headers": [],
    "path": "/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD",
    "headers": [],
    "path": "/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F",
    "headers": [],
    "path": "/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS",
    "headers": [],
    "path": "/front-end/css/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u79FB\u52A8\u7AEF",
    "headers": [],
    "path": "/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "babel\u7684\u4F7F\u7528",
    "headers": [],
    "path": "/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "for of \u548C for in \u7684\u533A\u522B",
    "headers": [],
    "path": "/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ES6",
    "headers": [],
    "path": "/front-end/es6/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "&#65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5",
    "headers": [],
    "path": "/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTML",
    "headers": [],
    "path": "/front-end/html/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F",
    "headers": [],
    "path": "/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21",
    "headers": [],
    "path": "/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "jQuery",
    "headers": [],
    "path": "/front-end/jquery/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "NodeJs",
    "headers": [],
    "path": "/front-end/node/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B",
    "headers": [
      {
        "level": 2,
        "title": "\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90",
        "slug": "\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E",
        "slug": "\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E",
        "children": []
      },
      {
        "level": 2,
        "title": "\u6D4B\u8BD5",
        "slug": "\u6D4B\u8BD5",
        "children": []
      }
    ],
    "path": "/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Swiper",
    "headers": [],
    "path": "/front-end/swiper/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F",
    "headers": [],
    "path": "/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "webpack",
    "headers": [],
    "path": "/front-end/webpack/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vscode\u91CC\u9762\u51FA\u73B0zsh command not found webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5",
    "headers": [],
    "path": "/front-end/webpack/vscode%20command%20not%20found.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "webpack.config.js\u57FA\u672C\u914D\u7F6E",
    "headers": [],
    "path": "/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "nuxt.js\u5B66\u4E60\u8BB0\u5F55",
    "headers": [],
    "path": "/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue",
    "headers": [],
    "path": "/front-end/vue/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316",
    "headers": [],
    "path": "/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF",
    "headers": [],
    "path": "/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C",
    "headers": [],
    "path": "/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = vue.ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
if (false) {
  __VUE_HMR_RUNTIME__.updateSearchIndex = (data2) => {
    searchIndex.value = data2;
  };
}
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = vue.computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return vue.computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = vue.ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = vue.defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = vue.toRefs(props);
    const router = vueRouter.useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = vue.ref(null);
    const isActive = vue.ref(false);
    const query = vue.ref("");
    const locale = vue.computed(() => {
      var _a;
      return (_a = locales2.value[routeLocale.value]) !== null && _a !== void 0 ? _a : {};
    });
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = vue.computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => vue.h("form", {
      class: "search-box",
      role: "search"
    }, [
      vue.h("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && vue.h("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => vue.h("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, vue.h("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        vue.h("span", {
          class: "page-title"
        }, title),
        header && vue.h("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
var vars$2 = "";
var search = "";
const locales = { "/": { "placeholder": "\u641C\u7D22" } };
const hotKeys = ["s", "/"];
const maxSuggestions = 5;
var clientAppEnhance4 = defineClientAppEnhance(({ app }) => {
  app.component("SearchBox", (props) => vue.h(SearchBox, __spreadValues({
    locales,
    hotKeys,
    maxSuggestions
  }, props)));
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
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
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
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
  vue.onMounted(() => {
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
  ["v-7445767f", "/cms/", { "title": "Cms" }, ["/cms/index.html", "/cms/README.md"]],
  ["v-8c02d0de", "/front-end/", { "title": "Front-end" }, ["/front-end/index.html", "/front-end/README.md"]],
  ["v-4db4c8ca", "/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.html", { "title": "Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09" }, ["/git/Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09.html", "/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89", "/git/Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09.md", "/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.md"]],
  ["v-4ba74800", "/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.html", { "title": "Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09" }, ["/git/Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09.html", "/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89", "/git/Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09.md", "/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.md"]],
  ["v-74473916", "/git/", { "title": "Git" }, ["/git/index.html", "/git/README.md"]],
  ["v-609d06f6", "/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.html", { "title": "PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F" }, ["/cms/pbootcms/PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F.html", "/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F", "/cms/pbootcms/PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F.md", "/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.md"]],
  ["v-2c3dda6e", "/cms/pbootcms/", { "title": "PbootCMS" }, ["/cms/pbootcms/index.html", "/cms/pbootcms/README.md"]],
  ["v-73785f95", "/cms/wordpress/", { "title": "WordPress" }, ["/cms/wordpress/index.html", "/cms/wordpress/README.md"]],
  ["v-65cad7be", "/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html", { "title": "wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848" }, ["/cms/wordpress/wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848.html", "/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88", "/cms/wordpress/wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848.md", "/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md"]],
  ["v-d14937e8", "/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.html", { "title": "wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D" }, ["/cms/wordpress/wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D.html", "/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D", "/cms/wordpress/wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D.md", "/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.md"]],
  ["v-66a577e0", "/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html", { "title": "\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD" }, ["/cms/wordpress/\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD.html", "/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD", "/cms/wordpress/\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD.md", "/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.md"]],
  ["v-33e79a11", "/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.html", { "title": "\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F" }, ["/cms/wordpress/\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F.html", "/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F", "/cms/wordpress/\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F.md", "/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.md"]],
  ["v-39f5b4c6", "/front-end/css/", { "title": "CSS" }, ["/front-end/css/index.html", "/front-end/css/README.md"]],
  ["v-2ebea979", "/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.html", { "title": "\u79FB\u52A8\u7AEF" }, ["/front-end/css/\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem.html", "/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem", "/front-end/css/\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem.md", "/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.md"]],
  ["v-158ed2c3", "/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.html", { "title": "babel\u7684\u4F7F\u7528" }, ["/front-end/es6/babel\u7684\u4F7F\u7528.html", "/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8", "/front-end/es6/babel\u7684\u4F7F\u7528.md", "/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],
  ["v-a9ee2fe2", "/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.html", { "title": "for of \u548C for in \u7684\u533A\u522B" }, ["/front-end/es6/for of \u548C for in \u7684\u533A\u522B.html", "/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB", "/front-end/es6/for of \u548C for in \u7684\u533A\u522B.md", "/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.md"]],
  ["v-39f3f210", "/front-end/es6/", { "title": "ES6" }, ["/front-end/es6/index.html", "/front-end/es6/README.md"]],
  ["v-9b959746", "/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html", { "title": "&#65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5" }, ["/front-end/html/65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5.html", "/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95", "/front-end/html/65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5.md", "/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.md"]],
  ["v-7de668f3", "/front-end/html/", { "title": "HTML" }, ["/front-end/html/index.html", "/front-end/html/README.md"]],
  ["v-5b54bfc6", "/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.html", { "title": "\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F" }, ["/front-end/html/\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F.html", "/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F", "/front-end/html/\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F.md", "/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.md"]],
  ["v-c5075ec4", "/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.html", { "title": "jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21" }, ["/front-end/jquery/jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21.html", "/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1", "/front-end/jquery/jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21.md", "/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.md"]],
  ["v-030c7ca0", "/front-end/jquery/", { "title": "jQuery" }, ["/front-end/jquery/index.html", "/front-end/jquery/README.md"]],
  ["v-7e388d7c", "/front-end/node/", { "title": "NodeJs" }, ["/front-end/node/index.html", "/front-end/node/README.md"]],
  ["v-417626c9", "/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.html", { "title": "Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B" }, ["/front-end/node/Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B.html", "/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B", "/front-end/node/Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B.md", "/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.md"]],
  ["v-2e854bf4", "/front-end/swiper/", { "title": "Swiper" }, ["/front-end/swiper/index.html", "/front-end/swiper/README.md"]],
  ["v-143f10bc", "/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.html", { "title": "swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F" }, ["/front-end/swiper/swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F.html", "/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F", "/front-end/swiper/swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F.md", "/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.md"]],
  ["v-0a4e80f3", "/front-end/webpack/", { "title": "webpack" }, ["/front-end/webpack/index.html", "/front-end/webpack/README.md"]],
  ["v-439c79a5", "/front-end/webpack/vscode%20command%20not%20found.html", { "title": "vscode\u91CC\u9762\u51FA\u73B0zsh command not found webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5" }, ["/front-end/webpack/vscode command not found.html", "/front-end/webpack/vscode%20command%20not%20found", "/front-end/webpack/vscode command not found.md", "/front-end/webpack/vscode%20command%20not%20found.md"]],
  ["v-17579900", "/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.html", { "title": "webpack.config.js\u57FA\u672C\u914D\u7F6E" }, ["/front-end/webpack/webpack.config.js\u57FA\u672C\u914D\u7F6E.html", "/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE", "/front-end/webpack/webpack.config.js\u57FA\u672C\u914D\u7F6E.md", "/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.md"]],
  ["v-4b80cdad", "/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.html", { "title": "nuxt.js\u5B66\u4E60\u8BB0\u5F55" }, ["/front-end/vue/nuxt.js\u5B66\u4E60\u8BB0\u5F55.html", "/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95", "/front-end/vue/nuxt.js\u5B66\u4E60\u8BB0\u5F55.md", "/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.md"]],
  ["v-39e4630c", "/front-end/vue/", { "title": "Vue" }, ["/front-end/vue/index.html", "/front-end/vue/README.md"]],
  ["v-aef0a982", "/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.html", { "title": "vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316" }, ["/front-end/vue/vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316.html", "/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96", "/front-end/vue/vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316.md", "/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.md"]],
  ["v-ba37bd5c", "/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.html", { "title": "\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF" }, ["/front-end/vue/\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF.html", "/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F", "/front-end/vue/\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF.md", "/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.md"]],
  ["v-085a2bfe", "/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html", { "title": "\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C" }, ["/front-end/vue/\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C.html", "/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC", "/front-end/vue/\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C.md", "/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
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
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
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
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$U = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var index_html$E = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$A]]);
var index_html$F = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$E
});
const _sfc_main$T = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/index.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var index_html$C = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$z]]);
var index_html$D = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$C
});
const _sfc_main$S = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF" aria-hidden="true">#</a> \u524D\u7AEF</h1><p>\u524D\u7AEF\u5F00\u53D1\u662F\u521B\u5EFAWEB\u9875\u9762\u6216APP\u7B49\u524D\u7AEF\u754C\u9762\u5448\u73B0\u7ED9\u7528\u6237\u7684\u8FC7\u7A0B\uFF0C\u901A\u8FC7HTML\uFF0CCSS\u53CAJavaScript\u4EE5\u53CA\u884D\u751F\u51FA\u6765\u7684\u5404\u79CD\u6280\u672F\u3001\u6846\u67B6\u3001\u89E3\u51B3\u65B9\u6848\uFF0C\u6765\u5B9E\u73B0\u4E92\u8054\u7F51\u4EA7\u54C1\u7684\u7528\u6237\u754C\u9762\u4EA4\u4E92\u3002</p><p>\u524D\u7AEF\u5F00\u53D1\u4ECE\u7F51\u9875\u5236\u4F5C\u6F14\u53D8\u800C\u6765\uFF0C\u540D\u79F0\u4E0A\u6709\u5F88\u660E\u663E\u7684\u65F6\u4EE3\u7279\u5F81\u3002\u5728\u4E92\u8054\u7F51\u7684\u6F14\u5316\u8FDB\u7A0B\u4E2D\uFF0C\u7F51\u9875\u5236\u4F5C\u662FWeb1.0\u65F6\u4EE3\u7684\u4EA7\u7269\uFF0C\u65E9\u671F\u7F51\u7AD9\u4E3B\u8981\u5185\u5BB9\u90FD\u662F\u9759\u6001\uFF0C\u4EE5\u56FE\u7247\u548C\u6587\u5B57\u4E3A\u4E3B\uFF0C\u7528\u6237\u4F7F\u7528\u7F51\u7AD9\u7684\u884C\u4E3A\u4E5F\u4EE5\u6D4F\u89C8\u4E3A\u4E3B\u3002\u968F\u7740\u4E92\u8054\u7F51\u6280\u672F\u7684\u53D1\u5C55\u548CHTML5\u3001CSS3\u7684\u5E94\u7528\uFF0C\u73B0\u4EE3\u7F51\u9875\u66F4\u52A0\u7F8E\u89C2\uFF0C\u4EA4\u4E92\u6548\u679C\u663E\u8457\uFF0C\u529F\u80FD\u66F4\u52A0\u5F3A\u5927\u3002</p><p>\u524D\u7AEF\u5F00\u53D1\u8DDF\u968F\u79FB\u52A8\u4E92\u8054\u7F51\u53D1\u5C55\u5E26\u6765\u4E86\u5927\u91CF\u9AD8\u6027\u80FD\u7684\u79FB\u52A8\u7EC8\u7AEF\u8BBE\u5907\u5E94\u7528\u3002HTML5\uFF0CNode.js\u7684\u5E7F\u6CDB\u5E94\u7528\uFF0C\u5404\u7C7BUI\u6846\u67B6\uFF0CJS\u7C7B\u5E93\u5C42\u51FA\u4E0D\u7A77\uFF0C\u5F00\u53D1\u96BE\u5EA6\u4E5F\u5728\u9010\u6B65\u63D0\u5347\u3002</p><!--]-->`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/index.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var index_html$A = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$y]]);
var index_html$B = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$A
});
const _sfc_main$R = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5-\u56FD\u5185\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5-\u56FD\u5185\u5730\u5740" aria-hidden="true">#</a> Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09</h1><p>\u81EA\u52A8\u811A\u672C(\u5168\u90E8\u56FD\u5185\u5730\u5740)\uFF08\u5728\u7EC8\u7AEF\u4E2D\u590D\u5236\u7C98\u8D34\u56DE\u8F66\u4E0B\u9762\u811A\u672C)</p><p>\u82F9\u679C\u7535\u8111 \u5E38\u89C4\u5B89\u88C5\u811A\u672C\uFF08\u63A8\u8350 \u5B8C\u5168\u4F53 \u51E0\u5206\u949F\u5B89\u88C5\u5B8C\u6210\uFF09\uFF1A /bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</p><p>\u82F9\u679C\u7535\u8111 \u6781\u901F\u5B89\u88C5\u811A\u672C\uFF08\u7CBE\u7B80\u7248 \u51E0\u79D2\u949F\u5B89\u88C5\u5B8C\u6210\uFF09\uFF1A /bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot; speed</p><p>\u82F9\u679C\u7535\u8111 \u5378\u8F7D\u811A\u672C\uFF1A /bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)&quot;</p><p>\u5E38\u89C1\u9519\u8BEF\u53BB\u4E0B\u65B9\u5730\u5740\u67E5\u770B https://gitee.com/cunkai/HomebrewCN/blob/master/error.md</p><p>Linux\u7535\u8111 \u5B89\u88C5\u811A\u672C\uFF1A rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh</p><p>Linux\u7535\u8111 \u5378\u8F7D\u811A\u672C\uFF1A rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh</p><!--]-->`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/git/Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var Homebrew_______________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$x]]);
var Homebrew_______________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Homebrew_______________html$1
});
const _sfc_main$Q = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="mac\u5982\u4F55\u914D\u7F6Essh\u516C\u94A5-\u7801\u4E91" tabindex="-1"><a class="header-anchor" href="#mac\u5982\u4F55\u914D\u7F6Essh\u516C\u94A5-\u7801\u4E91" aria-hidden="true">#</a> Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09</h1><p>1.\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FDB\u5165ssh\u6587\u4EF6 cd ~/.ssh</p><p>2.\u8F93\u5165\u547D\u4EE4\u751F\u6210 sshkey ssh-keygen -t rsa -C &quot;xxxxx@xxx.com&quot;</p><p>3.\u67E5\u770B\u751F\u6210\u7684\u516C\u94A5 \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A cat ~/.ssh/id_rsa.pub</p><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A open . \u7136\u540E\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00 id_rsa.pub \u6587\u4EF6</p><p>4.\u590D\u5236\u5185\u5BB9\u5230\u7801\u4E91</p><!--]-->`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/git/Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var Mac____SSH_______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$w]]);
var Mac____SSH_______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Mac____SSH_______html$1
});
const _sfc_main$P = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>Git \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u654F\u6377\u9AD8\u6548\u5730\u5904\u7406\u4EFB\u4F55\u6216\u5C0F\u6216\u5927\u7684\u9879\u76EE\u3002</p><p>Git \u662F Linus Torvalds \u4E3A\u4E86\u5E2E\u52A9\u7BA1\u7406 Linux \u5185\u6838\u5F00\u53D1\u800C\u5F00\u53D1\u7684\u4E00\u4E2A\u5F00\u653E\u6E90\u7801\u7684\u7248\u672C\u63A7\u5236\u8F6F\u4EF6\u3002</p><p>Git \u4E0E\u5E38\u7528\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177 CVS, Subversion \u7B49\u4E0D\u540C\uFF0C\u5B83\u91C7\u7528\u4E86\u5206\u5E03\u5F0F\u7248\u672C\u5E93\u7684\u65B9\u5F0F\uFF0C\u4E0D\u5FC5\u670D\u52A1\u5668\u7AEF\u8F6F\u4EF6\u652F\u6301\u3002</p><!--]-->`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/git/index.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var index_html$y = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$v]]);
var index_html$z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$y
});
var _imports_0$2 = "/myBlog/images/01.gif";
var _imports_1$2 = "/myBlog/images/01.png";
const _sfc_main$O = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u6DFB\u52A0\u5185\u5BB9\u65F6\u6709\u65F6\u9700\u8981\u6DFB\u52A0\u4E2A\u89C6\u9891\u94FE\u63A5mp4\u683C\u5F0F\u7684\uFF0C\u7136\u540E\u5728\u63D2\u5165\u89C6\u9891\u540E\u53D1\u73B0\u51FA\u6765\u7684\u662Fswf\u7684\u4EE3\u7801\uFF0C\u8FD9\u6837\u5C31\u5BFC\u81F4\u4E86\u89C6\u9891\u5728\u524D\u53F0\u65E0\u6CD5\u64AD\u653E\u3002<br>\u8FD9\u4E2A\u95EE\u9898\u9996\u5148\u9700\u8981\u4E86\u89E3\u5230\u8FD9\u662F\u767E\u5EA6\u7F16\u8F91\u5668UEditor\u9ED8\u8BA4\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u5B9E\u73B0\u7684\u601D\u8DEF\u53EA\u80FD\u53BB\u6539ueditor\u76F8\u5173\u7684js\u63A7\u5236\u4EE3\u7801\u6765\u5B9E\u73B0\u3002</p><h2 id="\u5B9E\u73B0\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6548\u679C" aria-hidden="true">#</a> \u5B9E\u73B0\u6548\u679C</h2><p>1\u3001\u6DFB\u52A0swf\u94FE\u63A5\u5C31\u5B9E\u7528\u9ED8\u8BA4\u7684\u6548\u679C\uFF0C\u751F\u6210emeb\u6807\u7B7E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-shockwave-flash<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edui-faked-video<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.pbhtml.com/demo/video/test.swf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>420<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>280<span class="token punctuation">&quot;</span></span> <span class="token attr-name">wmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2\u3001\u6DFB\u52A0mp4\u683C\u5F0F\u94FE\u63A5\u751F\u6210video\u6807\u7B7E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edui-faked-video video-js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>420<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>280<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.pbhtml.comhttps://pbhtml.imarc.work/static/upload/video/20200409/1586447634200979.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.pbhtml.comhttps://pbhtml.imarc.work/static/upload/video/20200409/1586447634200979.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)} alt="\u56FE\u7247"></p><h2 id="\u4FEE\u6539\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6B65\u9AA4" aria-hidden="true">#</a> \u4FEE\u6539\u6B65\u9AA4</h2><p>1\u3001\u4FEE\u6539video.js\u5B9E\u73B0\u9884\u89C8\u6B63\u786E\u9884\u89C8\u89C6\u9891</p><p>\u6253\u5F00\\core\\extend\\ueditor\\dialogs\\video\\video.js<br>\u627E\u5230\u7B2C275\u884C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$G(&quot;preview&quot;).innerHTML = &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>&#39;+lang.urlError+&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>&#39;+
&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewVideo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-shockwave-flash<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pluginspage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.macromedia.com/go/getflashplayer<span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
    <span class="token attr-name">&#39;</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + conUrl + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
    <span class="token attr-name">&#39;</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 420  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
    <span class="token attr-name">&#39;</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 280  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
    <span class="token attr-name">&#39;</span> <span class="token attr-name">wmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowscriptaccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>never<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>&#39; +
&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>embed</span><span class="token punctuation">&gt;</span></span>&#39;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4FEE\u6539\u6210</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>if(conUrl.indexOf(&quot;.swf&quot;) &gt;= 0 ) {
    $G(&quot;preview&quot;).innerHTML = &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>&#39;+lang.urlError+&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>&#39;+
    &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewVideo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-shockwave-flash<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pluginspage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.macromedia.com/go/getflashplayer<span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + conUrl + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 420  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 280  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">wmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowscriptaccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>never<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>&#39; +
    &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>embed</span><span class="token punctuation">&gt;</span></span>&#39;;
} else {
    $G(&quot;preview&quot;).innerHTML = &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewMsg<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>&#39;+lang.urlError+&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>&#39;+
    &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoplay<span class="token punctuation">&quot;</span></span> <span class="token attr-name">&#39;+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 420  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + 280  + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span>
        <span class="token attr-name">&#39;</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>&#39; +
        &#39; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span> + conUrl + <span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;</span> <span class="token attr-name">+</span> <span class="token attr-name">&#39;</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>&#39; +
    &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>&#39;;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u622A\u56FE\uFF1A<br><img${serverRenderer.ssrRenderAttr("src", _imports_1$2)} alt="\u622A\u56FE"><br>2\u3001\u4FEE\u6539ueditor.all.min.js\u5B9E\u73B0\u5F53\u586B\u5165\u7684\u662Fmp4\u94FE\u63A5\u65F6\u751F\u6210\u7684html\u4EE3\u7801\u4E3Avideo\u6807\u7B7E<br>\u6253\u5F00\\core\\extend\\ueditor\\ueditor.all.min.js<br>\u641C\u7D22\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>case&quot;embed&quot;:i=&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-shockwave-flash<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+g+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">pluginspage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.macromedia.com/go/getflashplayer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+utils.html(a)+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+b+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+d+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;+(f?&#39;</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span><span class="token string">&#39;+f+&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token attr-name"><span class="token namespace">&#39;:</span>&quot;&quot;)+&#39;</span> <span class="token attr-name">wmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowscriptaccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>never<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>&#39;;break;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u66FF\u6362\u6210</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>case&quot;embed&quot;:if(a.indexOf(&quot;.swf&quot;)&gt;=0){i=&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-shockwave-flash<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+g+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">pluginspage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.macromedia.com/go/getflashplayer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+utils.html(a)+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+b+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+d+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name">&#39;+(f?&#39;</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span><span class="token string">&#39;+f+&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token attr-name"><span class="token namespace">&#39;:</span>&quot;&quot;)+&#39;</span> <span class="token attr-name">wmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowscriptaccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>never<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>&#39;}else{var j=a.substr(a.lastIndexOf(&quot;.&quot;)+1);&quot;ogv&quot;==j&amp;&amp;(j=&quot;ogg&quot;),i=&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video&quot;+(e?&#39;</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+e+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token attr-name"><span class="token namespace">&#39;:</span>&quot;&quot;)+&#39;</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+g+<span class="token punctuation">&#39;</span> video-js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">&#39;+(f?&#39;</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span><span class="token string">&#39;+f+&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token attr-name"><span class="token namespace">&#39;:</span>&quot;&quot;)+&#39;</span> <span class="token attr-name">controls</span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+b+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+d+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+a+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-setup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+a+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/<span class="token punctuation">&#39;</span>+j+<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>&#39;;};break;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3\u3001\u4E0A\u9762\u4E24\u4E2A\u6B65\u9AA4\u64CD\u4F5C\u540E\u4FDD\u5B58\uFF0C\u7136\u540E\u5230\u540E\u53F0\u5F3A\u5236\u5237\u65B0\u9875\u9762\uFF08\u5FEB\u6377\u6309\u94AEctrl+f5\uFF09\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u548C\u4E0A\u9762gif\u52A8\u753B\u4E00\u6837\u7684\u64CD\u4F5C\u6548\u679C\u4E86\u3002</p><!--]-->`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/pbootcms/PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var PbootCMS_______________mp4___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$u]]);
var PbootCMS_______________mp4___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": PbootCMS_______________mp4___html$1
});
const _sfc_main$N = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="pbootcms" tabindex="-1"><a class="header-anchor" href="#pbootcms" aria-hidden="true">#</a> PbootCMS</h1><p>PbootCMS\u662F\u5168\u65B0\u5185\u6838\u4E14\u6C38\u4E45\u5F00\u6E90\u514D\u8D39\u7684PHP\u4F01\u4E1A\u7F51\u7AD9\u5F00\u53D1\u5EFA\u8BBE\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u662F\u4E00\u5957\u9AD8\u6548\u3001\u7B80\u6D01\u3001 \u5F3A\u608D\u7684\u53EF\u514D\u8D39\u5546\u7528\u7684PHP CMS\u6E90\u7801\uFF0C\u80FD\u591F\u6EE1\u8DB3\u5404\u7C7B\u4F01\u4E1A\u7F51\u7AD9\u5F00\u53D1\u5EFA\u8BBE\u7684\u9700\u8981\u3002\u7CFB\u7EDF\u91C7\u7528\u7B80\u5355\u5230\u60F3\u54ED\u7684\u6A21\u677F\u6807\u7B7E\uFF0C\u53EA\u8981\u61C2HTML\u5C31\u53EF\u5FEB\u901F\u5F00\u53D1\u4F01\u4E1A\u7F51\u7AD9\u3002\u5B98\u65B9\u63D0\u4F9B\u4E86\u5927\u91CF\u7F51\u7AD9\u6A21\u677F\u514D\u8D39\u4E0B\u8F7D\u548C\u4F7F\u7528\uFF0C\u5C06\u81F4\u529B\u4E8E\u4E3A\u5E7F\u5927\u5F00\u53D1\u8005\u548C\u4F01\u4E1A\u63D0\u4F9B\u6700\u4F73\u7684\u7F51\u7AD9\u5F00\u53D1\u5EFA\u8BBE\u89E3\u51B3\u65B9\u6848\u3002</p><p>1\u3001\u7CFB\u7EDF\u91C7\u7528\u9AD8\u6548\u3001\u7B80\u6D01\u3001\u5F3A\u608D\u7684\u6A21\u677F\u6807\u7B7E\uFF0C\u53EA\u8981\u61C2HTML\u5C31\u53EF\u5FEB\u901F\u5F00\u53D1\u4F01\u4E1A\u7F51\u7AD9\uFF1B</p><p>2\u3001\u7CFB\u7EDF\u91C7\u7528PHP\u8BED\u8A00\u5F00\u53D1\uFF0C\u4F7F\u7528\u81EA\u4E3B\u7814\u53D1\u7684\u9AD8\u901F\u591A\u5C42\u5F00\u53D1\u6846\u67B6\u53CA\u7F13\u5B58\u6280\u672F\uFF1B</p><p>3\u3001\u7CFB\u7EDF\u9ED8\u8BA4\u91C7\u7528sqlite\u8F7B\u578B\u6570\u636E\u5E93\uFF0C\u653E\u5165PHP\u7A7A\u95F4\u5373\u53EF\u76F4\u63A5\u4F7F\u7528\uFF0C\u53EF\u9009mysql. pgsql\u7B49\u6570\u636E\u5E93\uFF0C\u6EE1\u8DB3\u5404\u7C7B\u5B58\u50A8\u9700\u6C42\uFF1B</p><p>4\u3001\u7CFB\u7EDF\u91C7\u7528\u54CD\u5E94\u5F0F\u7BA1\u7406\u540E\u53F0\uFF0C\u6EE1\u8DB3\u5404\u7C7B\u8BBE\u5907\u968F\u65F6\u7BA1\u7406\u7684\u9700\u8981\uFF1B</p><p>5\u3001\u7CFB\u7EDF\u652F\u6301\u540E\u53F0\u5728\u7EBF\u5347\u7EA7\uFF0C\u6EE1\u8DB3\u7CFB\u7EDF\u53CA\u65F6\u5347\u7EA7\u66F4\u65B0\u7684\u9700\u8981\uFF1B</p><p>6\u3001\u7CFB\u7EDF\u652F\u6301\u5185\u5BB9\u6A21\u578B\u3001\u591A\u8BED\u8A00\u3001\u81EA\u5B9A\u4E49\u8868\u5355\u3001\u7B5B\u9009\u3001\u591A\u6761\u4EF6\u641C\u7D22\u3001\u5C0F\u7A0B\u5E8F\u3001APP\u7B49\u529F\u80FD\uFF1B</p><p>7\u3001\u7CFB\u7EDF\u652F\u6301\u591A\u79CDURL\u6A21\u5F0F\u53CA\u6A21\u578B\u3001\u680F\u76EE\u3001\u5185\u5BB9\u81EA\u5B9A\u4E49\u5730\u5740\u540D\u79F0\uFF0C\u6EE1\u8DB3\u5404\u7C7B\u7F51\u7AD9\u63A8\u5E7F\u4F18\u5316\u7684\u9700\u8981\u3002</p><!--]-->`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/pbootcms/index.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var index_html$w = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$t]]);
var index_html$x = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$w
});
const _sfc_main$M = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress" aria-hidden="true">#</a> WordPress</h1><p>WordPress\u662F\u4F7F\u7528PHP\u8BED\u8A00\u5F00\u53D1\u7684\u535A\u5BA2\u5E73\u53F0\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u652F\u6301PHP\u548CMySQL\u6570\u636E\u5E93\u7684\u670D\u52A1\u5668\u4E0A\u67B6\u8BBE\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7F51\u7AD9\u3002\u4E5F\u53EF\u4EE5\u628A WordPress\u5F53\u4F5C\u4E00\u4E2A\u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF\uFF08CMS\uFF09\u6765\u4F7F\u7528\u3002</p><p>WordPress\u662F\u4E00\u6B3E\u4E2A\u4EBA\u535A\u5BA2\u7CFB\u7EDF\uFF0C\u5E76\u9010\u6B65\u6F14\u5316\u6210\u4E00\u6B3E\u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF\u8F6F\u4EF6\uFF0C\u5B83\u662F\u4F7F\u7528PHP\u8BED\u8A00\u548CMySQL\u6570\u636E\u5E93\u5F00\u53D1\u7684\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u652F\u6301 PHP \u548C MySQL\u6570\u636E\u5E93\u7684\u670D\u52A1\u5668\u4E0A\u4F7F\u7528\u81EA\u5DF1\u7684\u535A\u5BA2\u3002</p><p>WordPress\u6709\u8BB8\u591A\u7B2C\u4E09\u65B9\u5F00\u53D1\u7684\u514D\u8D39\u6A21\u677F\uFF0C\u5B89\u88C5\u65B9\u5F0F\u7B80\u5355\u6613\u7528\u3002\u4E0D\u8FC7\u8981\u505A\u4E00\u4E2A\u81EA\u5DF1\u7684\u6A21\u677F\uFF0C\u5219\u9700\u8981\u4F60\u6709\u4E00\u5B9A\u7684\u4E13\u4E1A\u77E5\u8BC6\u3002\u6BD4\u5982\u4F60\u81F3\u5C11\u8981\u61C2\u7684\u6807\u51C6\u901A\u7528\u6807\u8BB0\u8BED\u8A00\u4E0B\u7684\u4E00\u4E2A\u5E94\u7528HTML\u4EE3\u7801\u3001CSS\u3001PHP\u7B49\u76F8\u5173\u77E5\u8BC6\u3002</p><p>WordPress\u5B98\u65B9\u652F\u6301\u4E2D\u6587\u7248\uFF0C\u540C\u65F6\u6709\u7231\u597D\u8005\u5F00\u53D1\u7684\u7B2C\u4E09\u65B9\u4E2D\u6587\u8BED\u8A00\u5305\uFF0C\u5982wopus\u4E2D\u6587\u8BED\u8A00\u5305\u3002WordPress\u62E5\u6709\u6210\u5343\u4E0A\u4E07\u4E2A\u5404\u5F0F\u63D2\u4EF6\u548C\u4E0D\u8BA1\u5176\u6570\u7684\u4E3B\u9898\u6A21\u677F\u6837\u5F0F\u3002</p><!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/wordpress/index.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var index_html$u = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$s]]);
var index_html$v = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$u
});
const _sfc_main$L = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="wordpress\u51FA\u73B0no-input-file-specified\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#wordpress\u51FA\u73B0no-input-file-specified\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848</h1><p>\u4ECA\u5929\u8FC1\u79FB\u4E00\u4E2Awordpress\u7AD9\u70B9\uFF0C\u5728\u8FC1\u79FB\u4E86\u7F51\u7AD9\u5185\u5BB9\u548C\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u8BBF\u95EE\u7F51\u7AD9\u51FA\u73B0No input file specified\u5B57\u6837\uFF0C\u670D\u52A1\u5668\u73AF\u5883\u4E3Aapache\uFF0C\u641C\u7D22\u76F8\u5173\u95EE\u9898\u540E\u53D1\u73B0\u662F.htaccess\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u800Cwordpress\u7684.htaccess\u6587\u4EF6\u4F1A\u7ECF\u5E38\u56E0\u4E3A\u4E00\u4E9B\u63D2\u4EF6\u7B49\u539F\u56E0\u66F4\u6539\uFF0C\u6240\u4EE5\u8981\u5C06.htaccess\u914D\u7F6E\u56DE\u590D\uFF0C\u4F7F\u7528wordpress\u9ED8\u8BA4\u7684.htaccess\u8986\u76D6\u540E\u7F51\u7AD9\u6210\u529F\u8FD0\u884C\u3002</p><p>.htaccess\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># BEGIN WordPress

RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><!--]-->`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/wordpress/wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var wordpress__No_input_file_specified______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$r]]);
var wordpress__No_input_file_specified______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": wordpress__No_input_file_specified______html$1
});
const _sfc_main$K = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D" aria-hidden="true">#</a> wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UPDATE wp_options SET option_value = replace( option_value, &#39;http://www.old.com&#39;, &#39;http://www.new.com&#39; ) WHERE option_name = &#39;home&#39; OR option_name = &#39;siteurl&#39;;

UPDATE wp_posts SET post_content = replace( post_content, &#39;http://www.old.com&#39;, &#39;http://www.new.com&#39; ) ;

UPDATE wp_posts SET guid = replace( guid, &#39;http://www.old.com&#39;, &#39;http://www.new.com&#39; ) ;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>old\u4EE3\u8868\u65E7\u57DF\u540D\uFF0Cnew\u4EE3\u8868\u65B0\u57DF\u540D\u3002</p><!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/wordpress/wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var wordpress__________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$q]]);
var wordpress__________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": wordpress__________html$1
});
const _sfc_main$J = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u79FB\u9664wordpress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664wordpress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD" aria-hidden="true">#</a> \u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD</h1><p>\u5220\u9664\u4E3B\u9898\u4E2D\u76F8\u5173\u6A21\u677F\u7684</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">comments_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">comments_template</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7C7B\u4F3C\u7684\u4EE3\u7801\u5373\u53EF</p><!--]-->`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/wordpress/\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var __WordPress________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$p]]);
var __WordPress________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __WordPress________html$1
});
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F" aria-hidden="true">#</a> \u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F</h1><p>\u4E00\u3001\u4F7F\u7528linux\u4E3B\u673A\uFF0Cwindows\u7CFB\u7EDF\u4E0Bwordpress\u8FD0\u884C\u76F8\u5BF9\u8F83\u6162\u3002</p><p>\u4E8C\u3001\u4F7F\u7528\u63D2\u4EF6Autoptimize\uFF0C\u6B64\u63D2\u4EF6\u6574\u5408\u5E76\u538B\u7F29 CSS \u548C JavaScript \u4EE3\u7801\uFF0C\u540C\u65F6\u53EF\u4EE5\u79FB\u9664\u8C37\u6B4C\u5B57\u4F53\u548C emojis\u3002</p><p>\u4E09\u3001\u4F7F\u7528\u63D2\u4EF6WP Super Cache\uFF0C\u542F\u7528\u7F13\u5B58\u529F\u80FD\uFF0C\u5728\u4E13\u5BB6\u6A21\u5F0F\u4E0B\u5C06\u63A8\u8350\u7684\u9879\u4EE5\u53CA\u201C\u5F53\u67D0\u9875\u9762\u6709\u65B0\u8BC4\u8BBA\u65F6\uFF0C\u53EA\u5237\u65B0\u8BE5\u9875\u9762\u7684\u7F13\u5B58\u201D\u9009\u4E2D\uFF0C\u5F00\u542F\u9884\u7F13\u5B58\u529F\u80FD\uFF0C\u7981\u7528\u5237\u65B0\u9884\u7F13\u5B58\u6587\u4EF6\uFF0C\u63D2\u4EF6\u6709CDN\u529F\u80FD\uFF0C\u6682\u672A\u7528\u8FC7\u3002</p><p>\u56DB\u3001\u4F7F\u7528\u4E03\u725B\u4E91\u5BF9\u7F51\u7AD9\u8FDB\u884C\u52A0\u901F\uFF0C\u76EE\u524D\u53EA\u5728\u4E00\u4E2A\u7F51\u7AD9\u4E2D\u8BD5\u9A8C\u8FC7\uFF0C\u4E86\u89E3\u4E0D\u6DF1\u3002</p><!--]-->`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/cms/wordpress/\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var ______wordpress_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var ______wordpress_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ______wordpress_____html$1
});
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><p>\u5C42\u53E0\u6837\u5F0F\u8868(\u82F1\u6587\u5168\u79F0\uFF1ACascading Style Sheets)\u662F\u4E00\u79CD\u7528\u6765\u8868\u73B0HTML\uFF08\u6807\u51C6\u901A\u7528\u6807\u8BB0\u8BED\u8A00\u7684\u4E00\u4E2A\u5E94\u7528\uFF09\u6216XML\uFF08\u6807\u51C6\u901A\u7528\u6807\u8BB0\u8BED\u8A00\u7684\u4E00\u4E2A\u5B50\u96C6\uFF09\u7B49\u6587\u4EF6\u6837\u5F0F\u7684\u8BA1\u7B97\u673A\u8BED\u8A00\u3002CSS\u4E0D\u4EC5\u53EF\u4EE5\u9759\u6001\u5730\u4FEE\u9970\u7F51\u9875\uFF0C\u8FD8\u53EF\u4EE5\u914D\u5408\u5404\u79CD\u811A\u672C\u8BED\u8A00\u52A8\u6001\u5730\u5BF9\u7F51\u9875\u5404\u5143\u7D20\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><p>CSS \u80FD\u591F\u5BF9\u7F51\u9875\u4E2D\u5143\u7D20\u4F4D\u7F6E\u7684\u6392\u7248\u8FDB\u884C\u50CF\u7D20\u7EA7\u7CBE\u786E\u63A7\u5236\uFF0C\u652F\u6301\u51E0\u4E4E\u6240\u6709\u7684\u5B57\u4F53\u5B57\u53F7\u6837\u5F0F\uFF0C\u62E5\u6709\u5BF9\u7F51\u9875\u5BF9\u8C61\u548C\u6A21\u578B\u6837\u5F0F\u7F16\u8F91\u7684\u80FD\u529B\u3002</p><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/css/index.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var index_html$s = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var index_html$t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$s
});
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem</h1><p>\u5728\u5B66\u4E60\u5B8Cpc\u7AEF\u7684\u5E03\u5C40\u540E\uFF0C\u5F00\u59CB\u7814\u7A76web\u7AEF\u7684\u5E03\u5C40\uFF0C\u5728pc\u7AEF\u5E03\u5C40\u65F6\uFF0C\u591A\u8003\u8651\u7684\u662F\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u800C\u5BF9\u4E8Eweb\u7AEF\u6765\u8BF4\uFF0C\u7531\u4E8E\u624B\u673A\u79CD\u7C7B\u7E41\u591A\uFF0C\u5C4F\u5E55\u7684\u5206\u8FA8\u7387\u4E5F\u5404\u5F0F\u5404\u6837\uFF0C\u6240\u4EE5\u5982\u4F55\u901A\u8FC7\u4E00\u4E2A\u65B9\u6848\u6765\u9002\u914D\u6240\u6709\u79FB\u52A8\u7AEF\u754C\u9762\uFF0C\u662F\u5F88\u91CD\u8981\u7684\u4E00\u70B9\u3002</p><p>web\u7684\u5E03\u5C40\u5927\u81F4\u4E0A\u6709\u6D41\u5F0F\u5E03\u5C40\u3001\u9650\u6B7B\u5BBD\u5EA6\u3001\u54CD\u5E94\u5F0F\u3001\u8BBE\u7F6Eviewport\u8FDB\u884C\u7F29\u653E\u3001rem\u7B49\u65B9\u6CD5\uFF0C\u6B64\u5904\u8BB0\u5F55rem\u65B9\u6CD5\u3002</p><p>rem\uFF08font size of the root element\uFF09\u662F\u6307\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u7684\u5355\u4F4D\uFF0C\u662F\u4E00\u4E2A\u76F8\u5BF9\u5355\u4F4D\u3002\u4E0E\u4E4B\u7C7B\u4F3C\u7684\u6709\u7684em\uFF08font size of the element\uFF09\u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u7684\u5355\u4F4D\u3002</p><p>\u4F8B\u5982html{font-size=100px};\uFF0C\u90A3\u4E481rem=100px\uFF1Bhtml{font-size=200px};\uFF0C\u90A3\u4E481rem=200px\u3002rem\u7684\u5927\u5C0F\u6C38\u8FDC\u90FD\u662F\u548C\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u6709\u5173\u7684\uFF0C\u4E5F\u5C31\u662F\u5B83\u4E3A\u4EC0\u4E48\u66F4\u5408\u9002web\u7AEF\u5E03\u5C40\u7684\u539F\u56E0\u3002\u6211\u4EEC\u5728\u7F16\u5199web\u7AEF\u9875\u9762\u7684\u65F6\u5019\uFF0C\u628A\u6240\u6709\u7684\u5927\u5C0F\u5355\u4F4D\uFF0C\u5305\u62ECheight\uFF0Cwidth\u7B49\u7B49\u90FD\u7528rem\u6765\u5199\uFF0C\u7136\u540E\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u7531\u5C4F\u5E55\u5206\u8FA8\u7387\u51B3\u5B9A\uFF0C\u8FD9\u6837\u5C31\u8FBE\u5230\u4E86\u4E00\u4E2A\u65E0\u8BBA\u5206\u8FA8\u7387\u53D8\u5316\uFF0C\u9875\u9762\u4E5F\u968F\u4E4B\u800C\u53D8\u5316\u7684\u6548\u679C\u3002</p><p>\u81F3\u4E8E\u5982\u4F55\u83B7\u53D6\u624B\u673A\u7684\u5206\u8FA8\u7387\uFF0C\u6709\u4F7F\u7528JS\u52A8\u6001\u8BA1\u7B97\u6216\u8005\u76F4\u63A5\u6839\u636E\u5C4F\u5E55\u6765\u9002\u914D\u7684\uFF0C\u4EE5\u4E0B\u5C31\u662F\u901A\u8FC7\u5C4F\u5E55\u6765\u9002\u914D\u7684\u65B9\u6CD5\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span> <span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 401px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 25px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 428px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 26.75px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 481px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 30px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 569px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 35px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 641px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 40px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4F46\u662F\u5E02\u9762\u4E0A\u7684\u624B\u673A\u578B\u53F7\u592A\u591A\uFF0C\u9488\u5BF9\u8BBE\u5907\u8FDB\u884C\u9002\u914D\u7684\u8BDD\u5DE5\u4F5C\u91CF\u4F1A\u592A\u5927\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8003\u8651\u901A\u8FC7JS\u52A8\u6001\u8BA1\u7B97\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span>
resizeEvt <span class="token operator">=</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
<span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> clientWidth <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientWidth<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> <span class="token number">750</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>doc<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>resizeEvt<span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5173\u4E8E\u8FD9\u4E00\u6BB5JS\uFF0C\u5176\u4E2D\u6700\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> <span class="token number">750</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E00\u884C\u4EE3\u7801\u4FBF\u662F\u51B3\u5B9A\u4F60html\u4E2D\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u7684\uFF0CclientWidth\u4E3A\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF0C\u800C750\u8FD9\u4E2A\u6570\u503C\u662F\u6839\u636E\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6\u51B3\u5B9A\u7684\uFF0C\u5982\u679C\u62FF\u5230\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u662F640px\uFF0C\u90A3\u4E48\u5C31\u7528640\u6765\u4EE3\u66FF\u3002</p><p>\u7528100\u6765\u4E58\u4E0A\u8FD9\u4E2A\u6570\u503C\u4E3B\u8981\u662F\u4E3A\u4E86\u65B9\u4FBF\u8BA1\u7B97\uFF0C\u8FD9\u6837750px\u7684\u5C4F\u5E55\uFF0C1rem=100px\uFF0C\u5176\u4ED6\u5BBD\u5EA6\u7684\u5C4F\u5E55\u4F1A\u7B49\u6BD4\u4F8B\u9002\u5E94\u3002</p><p>\u6CE8\uFF1A\u5728\u4F7F\u7528rem\u8FDB\u884C\u5E03\u5C40\u7684\u65F6\u5019\u50CF\u662F\u80CC\u666F\u3001\u7CBE\u7075\u56FE\u4E4B\u7C7B\u7684\uFF0C\u4E0D\u8981\u5FD8\u8BB0background-size\u8FD9\u4E2A\u5C5E\u6027\u3002</p><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/css/\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _________Rem_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var _________Rem_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _________Rem_html$1
});
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="babel\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#babel\u7684\u4F7F\u7528" aria-hidden="true">#</a> babel\u7684\u4F7F\u7528</h1><p>\u6574\u4E2A\u914D\u7F6E\u8FC7\u7A0B\u5305\u62EC\uFF1A</p><ol><li>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u6240\u9700\u7684\u5305\uFF08package\uFF09\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   npm install --save-dev @babel/core @babel/cli @babel/preset-env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u547D\u540D\u4E3A babel.config.json \u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u9700\u8981 v7.8.0 \u6216\u66F4\u9AD8\u7248\u672C\uFF09\uFF0C\u5E76\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230\u6B64\u6587\u4EF6\u4E2D\uFF1A</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>   <span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;67&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;ie&quot;</span><span class="token operator">:</span>&#39;<span class="token number">10</span>&#39;
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.6.5&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E0A\u8FF0\u6D4F\u89C8\u5668\u5217\u8868\u4EC5\u7528\u4E8E\u793A\u4F8B\u3002\u8BF7\u6839\u636E\u6240\u9700\u8981\u652F\u6301\u7684\u6D4F\u89C8\u5668\u8FDB\u884C\u8C03\u6574\u3002</p><p>3.\u8FD0\u884C\u6B64\u547D\u4EE4\u5C06 src \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u4EE3\u7801\u7F16\u8BD1\u5230 lib \u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./node_modules/.bin/babel src --out-dir lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u5229\u7528 npm@5.2.0 \u6240\u81EA\u5E26\u7684 npm \u5305\u8FD0\u884C\u5668\u5C06 ./node_modules/.bin/babel \u547D\u4EE4\u7F29\u77ED\u4E3A npx babel</p><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/es6/babel\u7684\u4F7F\u7528.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var babel____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var babel____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": babel____html$1
});
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="for-of-\u548C-for-in-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#for-of-\u548C-for-in-\u7684\u533A\u522B" aria-hidden="true">#</a> for of \u548C for in \u7684\u533A\u522B</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> xiyou <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5510\u50E7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u5B59\u609F\u7A7A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u732A\u516B\u6212&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> xiyou<span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u51FA&#39;\u5510\u50E7&#39;,&#39;\u5B59\u609F\u7A7A&#39;,&#39;\u732A\u516B\u6212&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">in</span> xiyou<span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u51FA0,1,2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>for of\u8F93\u51FA\u7684\u662Fvalue\uFF0Cfor in\u8F93\u51FA\u7684\u662Fkey</p><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/es6/for of \u548C for in \u7684\u533A\u522B.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var for_of___for_in_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var for_of___for_in_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": for_of___for_in_____html$1
});
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><p>ES6\uFF0C \u5168\u79F0 ECMAScript 6.0 \uFF0C\u662F JavaScript \u7684\u4E0B\u4E00\u4E2A\u7248\u672C\u6807\u51C6\uFF0C2015.06 \u53D1\u7248\u3002</p><p>ES6 \u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3 ES5 \u7684\u5148\u5929\u4E0D\u8DB3\uFF0C\u6BD4\u5982 JavaScript \u91CC\u5E76\u6CA1\u6709\u7C7B\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u76EE\u524D\u6D4F\u89C8\u5668\u7684 JavaScript \u662F ES5 \u7248\u672C\uFF0C\u5927\u591A\u6570\u9AD8\u7248\u672C\u7684\u6D4F\u89C8\u5668\u4E5F\u652F\u6301 ES6\uFF0C\u4E0D\u8FC7\u53EA\u5B9E\u73B0\u4E86 ES6 \u7684\u90E8\u5206\u7279\u6027\u548C\u529F\u80FD\u3002</p><!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/es6/index.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var index_html$q = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var index_html$r = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$q
});
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> &amp;#65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5</h1><p>\u51FA\u73B0\u95EE\u9898\u539F\u56E0\uFF1A\u9875\u9762\u5185\u5B58\u5728BOM</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u7F16\u7801\u65F6\u91C7\u7528\u4E0D\u5E26BOM\u7684\u65B9\u5F0F\u4FDD\u5B58\uFF0C\u4F8B\u5982\u4F7F\u7528sublime\uFF0C\u9009\u62E9\u6587\u4EF6\u300B\u4EE5\xB7\xB7\xB7\u7F16\u7801\u4FDD\u5B58\uFF0C\u9009\u62E9UTF-8\uFF0C\u5373\u53EF\u89E3\u51B3\u95EE\u9898</p><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/html/65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var _65279_____________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var _65279_____________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _65279_____________html$1
});
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><p>HTML\u7684\u5168\u79F0\u4E3A\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00\uFF0C\u662F\u4E00\u79CD\u6807\u8BB0\u8BED\u8A00\u3002\u5B83\u5305\u62EC\u4E00\u7CFB\u5217\u6807\u7B7E\uFF0E\u901A\u8FC7\u8FD9\u4E9B\u6807\u7B7E\u53EF\u4EE5\u5C06\u7F51\u7EDC\u4E0A\u7684\u6587\u6863\u683C\u5F0F\u7EDF\u4E00\uFF0C\u4F7F\u5206\u6563\u7684Internet\u8D44\u6E90\u8FDE\u63A5\u4E3A\u4E00\u4E2A\u903B\u8F91\u6574\u4F53\u3002HTML\u6587\u672C\u662F\u7531HTML\u547D\u4EE4\u7EC4\u6210\u7684\u63CF\u8FF0\u6027\u6587\u672C\uFF0CHTML\u547D\u4EE4\u53EF\u4EE5\u8BF4\u660E\u6587\u5B57\uFF0C\u56FE\u5F62\u3001\u52A8\u753B\u3001\u58F0\u97F3\u3001\u8868\u683C\u3001\u94FE\u63A5\u7B49\u3002</p><p>\u8D85\u6587\u672C\u662F\u4E00\u79CD\u7EC4\u7EC7\u4FE1\u606F\u7684\u65B9\u5F0F\uFF0C\u5B83\u901A\u8FC7\u8D85\u7EA7\u94FE\u63A5\u65B9\u6CD5\u5C06\u6587\u672C\u4E2D\u7684\u6587\u5B57\u3001\u56FE\u8868\u4E0E\u5176\u4ED6\u4FE1\u606F\u5A92\u4F53\u76F8\u5173\u8054\u3002\u8FD9\u4E9B\u76F8\u4E92\u5173\u8054\u7684\u4FE1\u606F\u5A92\u4F53\u53EF\u80FD\u5728\u540C\u4E00\u6587\u672C\u4E2D\uFF0C\u4E5F\u53EF\u80FD\u662F\u5176\u4ED6\u6587\u4EF6\uFF0C\u6216\u662F\u5730\u7406\u4F4D\u7F6E\u76F8\u8DDD\u9065\u8FDC\u7684\u67D0\u53F0\u8BA1\u7B97\u673A\u4E0A\u7684\u6587\u4EF6\u3002\u8FD9\u79CD\u7EC4\u7EC7\u4FE1\u606F\u65B9\u5F0F\u5C06\u5206\u5E03\u5728\u4E0D\u540C\u4F4D\u7F6E\u7684\u4FE1\u606F\u8D44\u6E90\u7528\u968F\u673A\u65B9\u5F0F\u8FDB\u884C\u8FDE\u63A5\uFF0C\u4E3A\u4EBA\u4EEC\u67E5\u627E\uFF0C\u68C0\u7D22\u4FE1\u606F\u63D0\u4F9B\u65B9\u4FBF\u3002</p><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/html/index.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index_html$o = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var index_html$p = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$o
});
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F</h1><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528\u5BA1\u67E5\u5DE5\u5177\u67E5\u770Bvideo\u5143\u7D20\u65F6\u5019\u662F\u770B\u4E0D\u5230\u8F83\u4E3A\u7EC6\u81F4\u7684\u5143\u7D20\u7684\uFF0C\u4F8B\u5982\u8FDB\u5EA6\u6761\u7684\u6837\u5F0F\uFF0C\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF0C\u9009\u62E9\u5F00\u53D1\u8005\u5DE5\u5177 -&gt; setting -&gt; Preferences -&gt; Elements -&gt; \u52FE\u9009 \u201CShow user agent shadow DOM\u201D\uFF0C\u4E4B\u540E\u5C31\u80FD\u770B\u5230video\u7684\u5404\u9879\u5185\u90E8\u5143\u7D20\u4E86\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528css\u8FDB\u884C\u4FEE\u6539\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u5BF9\u4E8Evideo\u63A7\u4EF6\u7684\u4FEE\u6539\uFF0C\u6700\u597D\u662F\u81EA\u5DF1\u5B9E\u73B0\u4E00\u5957controls\u3002</p><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/html/\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var ____________video_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var ____________video_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____________video_____html$1
});
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21" tabindex="-1"><a class="header-anchor" href="#jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21" aria-hidden="true">#</a> jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sec_4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.timer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> $<span class="token keyword">this</span> <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
options <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&#39;countToOptions&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">countTo</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.math&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&quot;timer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>bind\uFF1A\u7ED1\u5B9A\u51FD\u6570</p><p>unbind\uFF1A\u53D6\u6D88\u7ED1\u5B9A\u51FD\u6570</p><p>$(window).scrollTop()\uFF1A\u7A97\u53E3\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u8DDD\u79BB</p><p>$(window).height()\uFF1A\u6D4F\u89C8\u5668\u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6</p><p>$(&#39;.sec_4&#39;).offset().top\uFF1A\u8282\u70B9\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u8DDD\u79BB</p><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/jquery/jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var jq______________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var jq______________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": jq______________html$1
});
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h1><p>jQuery\u662F\u4E00\u4E2A\u5FEB\u901F\u3001\u7B80\u6D01\u7684JavaScript\u6846\u67B6\uFF0C\u662F\u7EE7Prototype\u4E4B\u540E\u53C8\u4E00\u4E2A\u4F18\u79C0\u7684JavaScript\u4EE3\u7801\u5E93\uFF08\u6846\u67B6\uFF09\u4E8E2006\u5E741\u6708\u7531John Resig\u53D1\u5E03\u3002jQuery\u8BBE\u8BA1\u7684\u5B97\u65E8\u662F\u201Cwrite Less\uFF0CDo More\u201D\uFF0C\u5373\u5021\u5BFC\u5199\u66F4\u5C11\u7684\u4EE3\u7801\uFF0C\u505A\u66F4\u591A\u7684\u4E8B\u60C5\u3002\u5B83\u5C01\u88C5JavaScript\u5E38\u7528\u7684\u529F\u80FD\u4EE3\u7801\uFF0C\u63D0\u4F9B\u4E00\u79CD\u7B80\u4FBF\u7684JavaScript\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u4F18\u5316HTML\u6587\u6863\u64CD\u4F5C\u3001\u4E8B\u4EF6\u5904\u7406\u3001\u52A8\u753B\u8BBE\u8BA1\u548CAjax\u4EA4\u4E92\u3002</p><p>jQuery\u7684\u6838\u5FC3\u7279\u6027\u53EF\u4EE5\u603B\u7ED3\u4E3A\uFF1A\u5177\u6709\u72EC\u7279\u7684\u94FE\u5F0F\u8BED\u6CD5\u548C\u77ED\u5C0F\u6E05\u6670\u7684\u591A\u529F\u80FD\u63A5\u53E3\uFF1B\u5177\u6709\u9AD8\u6548\u7075\u6D3B\u7684CSS\u9009\u62E9\u5668\uFF0C\u5E76\u4E14\u53EF\u5BF9CSS\u9009\u62E9\u5668\u8FDB\u884C\u6269\u5C55\uFF1B\u62E5\u6709\u4FBF\u6377\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236\u548C\u4E30\u5BCC\u7684\u63D2\u4EF6\u3002jQuery\u517C\u5BB9\u5404\u79CD\u4E3B\u6D41\u6D4F\u89C8\u5668\uFF0C\u5982IE 6.0+\u3001FF 1.5+\u3001Safari 2.0+\u3001Opera 9.0+\u7B49\u3002</p><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/jquery/index.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var index_html$m = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var index_html$n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$m
});
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><p>Node.js \u662F\u4E00\u4E2A\u5F00\u6E90\u548C\u8DE8\u5E73\u53F0\u7684 JavaScript \u8FD0\u884C\u65F6\u73AF\u5883\u3002 \u5B83\u51E0\u4E4E\u662F\u4EFB\u4F55\u7C7B\u578B\u9879\u76EE\u7684\u6D41\u884C\u5DE5\u5177\uFF01</p><p>Node.js \u5728\u6D4F\u89C8\u5668\u4E4B\u5916\u8FD0\u884C V8 JavaScript \u5F15\u64CE\uFF08Google Chrome \u7684\u5185\u6838\uFF09\u3002 \u8FD9\u4F7F\u5F97 Node.js \u7684\u6027\u80FD\u975E\u5E38\u597D\u3002</p><p>Node.js \u5E94\u7528\u7A0B\u5E8F\u5728\u5355\u4E2A\u8FDB\u7A0B\u4E2D\u8FD0\u884C\uFF0C\u65E0\u9700\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u3002 Node.js \u5728\u5176\u6807\u51C6\u5E93\u4E2D\u63D0\u4F9B\u4E86\u4E00\u7EC4\u5F02\u6B65\u7684 I/O \u539F\u8BED\uFF0C\u4EE5\u9632\u6B62 JavaScript \u4EE3\u7801\u963B\u585E\uFF0C\u901A\u5E38\uFF0CNode.js \u4E2D\u7684\u5E93\u662F\u4F7F\u7528\u975E\u963B\u585E\u8303\u5F0F\u7F16\u5199\u7684\uFF0C\u4F7F\u5F97\u963B\u585E\u884C\u4E3A\u6210\u4E3A\u5F02\u5E38\u800C\u4E0D\u662F\u5E38\u6001\u3002</p><p>\u5F53 Node.js \u6267\u884C I/O \u64CD\u4F5C\u65F6\uFF08\u6BD4\u5982\u4ECE\u7F51\u7EDC\u8BFB\u53D6\u3001\u8BBF\u95EE\u6570\u636E\u5E93\u6216\u6587\u4EF6\u7CFB\u7EDF\uFF09\uFF0CNode.js \u5C06\u5728\u54CD\u5E94\u8FD4\u56DE\u65F6\u6062\u590D\u64CD\u4F5C\uFF08\u800C\u4E0D\u662F\u963B\u585E\u7EBF\u7A0B\u548C\u6D6A\u8D39 CPU \u5468\u671F\u7B49\u5F85\uFF09\u3002</p><p>\u8FD9\u5141\u8BB8 Node.js \u4F7F\u7528\u5355\u4E2A\u670D\u52A1\u5668\u5904\u7406\u6570\u5343\u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF0C\u800C\u200B\u200B\u4E0D\u4F1A\u5F15\u5165\u7BA1\u7406\u7EBF\u7A0B\u5E76\u53D1\uFF08\u8FD9\u53EF\u80FD\u662F\u9519\u8BEF\u7684\u91CD\u8981\u6765\u6E90\uFF09\u7684\u8D1F\u62C5\u3002</p><p>Node.js \u5177\u6709\u72EC\u7279\u7684\u4F18\u52BF\uFF0C\u56E0\u4E3A\u6570\u767E\u4E07\u4E3A\u6D4F\u89C8\u5668\u7F16\u5199 JavaScript \u7684\u524D\u7AEF\u5F00\u53D1\u8005\u73B0\u5728\u65E0\u9700\u5B66\u4E60\u5B8C\u5168\u4E0D\u540C\u7684\u8BED\u8A00\uFF0C\u5C31\u53EF\u4EE5\u7F16\u5199\u9664\u5BA2\u6237\u7AEF\u4EE3\u7801\u4E4B\u5916\u7684\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\u3002</p><p>\u5728 Node.js \u4E2D\uFF0C\u53EF\u4EE5\u6BEB\u65E0\u95EE\u9898\u5730\u4F7F\u7528\u65B0\u7684 ECMAScript \u6807\u51C6\uFF0C\u56E0\u4E3A\u4F60\u4E0D\u5FC5\u7B49\u5F85\u6240\u6709\u7528\u6237\u66F4\u65B0\u4ED6\u4EEC\u7684\u6D4F\u89C8\u5668\uFF0C\u4F60\u8D1F\u8D23\u901A\u8FC7\u66F4\u6539 Node.js \u7248\u672C\u6765\u51B3\u5B9A\u4F7F\u7528\u54EA\u4E2A ECMAScript \u7248\u672C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u5E26\u6709\u6807\u5FD7\u7684 Node.js \u6765\u542F\u7528\u7279\u5B9A\u7684\u5B9E\u9A8C\u6027\u529F\u80FD\u3002</p><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/node/index.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var index_html$k = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var index_html$l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$k
});
var _imports_0$1 = "/myBlog/images/node01.png";
var _imports_1$1 = "/myBlog/images/node02.png";
var _imports_2 = "/myBlog/images/node03.png";
var _imports_3 = "/myBlog/images/node04.png";
var _imports_4 = "/myBlog/images/node05.png";
var _imports_5 = "/myBlog/images/node06.png";
var _imports_6 = "/myBlog/images/node07.png";
var _imports_7 = "/myBlog/images/node08.png";
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="windows\u4E0B\u5B89\u88C5node-js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#windows\u4E0B\u5B89\u88C5node-js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B" aria-hidden="true">#</a> Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B</h1><p>\u4E0B\u8F7D\u5730\u5740\uFF1A<a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noopener noreferrer">Node.js`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$1)} alt="image.png"></p><p>\u4E0B\u8F7D\u5B8C\u6BD5\u540E\u53CC\u51FB\u5B89\u88C5\u5305\u8FD0\u884C\u5B89\u88C5\uFF0C\u4E00\u8DEF\u9ED8\u8BA4\u5373\u53EF</p><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u5B89\u88C5\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u914D\u7F6E\u597D\u73AF\u5883\u53D8\u91CF\uFF0C\u6253\u5F00CMD\uFF08\u5982\u679C\u4E4B\u524D\u5DF2\u7ECF\u6253\u5F00\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\uFF09</p><p>\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node -v npm -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$1)} alt="image.png"></p><p>\u5230\u6B64\u5C31\u5B89\u88C5\u6210\u529F\u4E86</p><h2 id="\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90</h2><p>\u4F46\u662F\u6B64\u65F6\u7528npm\u4E0B\u8F7D\u65F6\u4F1A\u53D1\u73B0\u7F51\u901F\u53EF\u80FD\u7279\u522B\u6162\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u4E00\u4E0B\u4E0B\u8F7D\u6E90\u4E3A\u6DD8\u5B9D\u7684,CMD\u5185\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u67E5\u770B\u662F\u5426\u8BBE\u7F6E\u6210\u529F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm config list 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="image.png"></p><h2 id="\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E</h2><p>npm \u4E0D\u8FDB\u884C\u914D\u7F6E\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u4F1A\u5C06\u5168\u5C40\u5B89\u88C5\u547D\u4EE4\u7684\u6A21\u5757\u5B89\u88C5\u5728C\u76D8\uFF0C\u5360\u7528\u7A7A\u95F4\u662F\u975E\u5E38\u5927\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E0B\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E</p><p>\u5728\u51C6\u5907\u5B58\u653E\u5168\u5C40\u6A21\u5757\u7684\u4F4D\u7F6E\u65B0\u5EFA\u4E24\u4E2A\u6587\u4EF6\u5939 node_global \u548C node_cache\uFF0C\u6211\u7684node\u5B89\u88C5\u5230\u4E86E\u76D8\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u4EE5\u540E\u67E5\u627E\uFF0C\u6211\u76F4\u63A5\u653E\u5230\u4E86node\u5B89\u88C5\u7684\u6839\u76EE\u5F55\u4E0B\u9762</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="image.png"></p><p>\u5728CMD\u4E2D\u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF0C\u8DEF\u5F84\u4EE5\u4F60\u5B9E\u9645\u7684\u5B89\u88C5\u4F4D\u7F6E\u4E3A\u51C6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm config set prefix &quot;E:\\Program Files\\nodejs\\node_global&quot; npm config set cache &quot;E:\\Program Files\\nodejs\\node_cache&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u6B64\u7535\u8111-\u53F3\u51FB-\u5C5E\u6027-\u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E-\u73AF\u5883\u53D8\u91CF\u4E0B\u9762\u7CFB\u7EDF\u53D8\u91CF\u533A\u57DF\uFF0C\u65B0\u5EFA NODE_PATH \u53D8\u91CF\uFF0C\u8DEF\u5F84\u5982\u4E0B\uFF1AE:\\Program Files\\nodejs\\node_global\\node_modules\uFF0C\u4EE5\u4F60\u5B9E\u9645\u4F4D\u7F6E\u4E3A\u51C6</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_4)} alt="image.png"></p><p>\u4E0A\u9762\u7528\u6237\u53D8\u91CF\u533A\u57DF\uFF0C\u627E\u5230Path\u53D8\u91CF\uFF0C\u70B9\u51FB\u7F16\u8F91\u5C06\u539F\u6765npm\u7684\u53D8\u91CF\u4FEE\u6539\u4E3AE:\\Program Files\\nodejs\\node_global\uFF0C\u4EE5\u4F60\u5B9E\u9645\u8DEF\u5F84\u4E3A\u51C6</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5)} alt="image.png"></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_6)} alt="image.png"></p><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u53EF\u4EE5\u5168\u5C40\u5B89\u88C5\u4E00\u4E0Bwebpack\u6D4B\u8BD5\u662F\u5426\u914D\u7F6E\u6210\u529F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install webpack -g  npm install -D webpack-cli -g 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\u53EF\u4EE5\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack -v 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_7)} alt="image.png"></p><p>\u4E5F\u53EF\u4EE5\u53BB\u521A\u624D\u65B0\u5EFA\u7684\u6587\u4EF6\u5939\u4E2D\u770B\u4E00\u4E0B\uFF0C\u662F\u5426\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u5B89\u88C5\u8DEF\u5F84\u914D\u7F6E\u6210\u529F</p><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/node/Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var Windows___Node_js_______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var Windows___Node_js_______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Windows___Node_js_______html$1
});
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="swiper" tabindex="-1"><a class="header-anchor" href="#swiper" aria-hidden="true">#</a> Swiper</h1><p>Swiper \u662F\u4E00\u6B3E\u514D\u8D39\u4EE5\u53CA\u8F7B\u91CF\u7EA7\u7684\u79FB\u52A8\u8BBE\u5907\u89E6\u63A7\u6ED1\u5757\u7684js\u6846\u67B6\uFF0C\u4F7F\u7528\u786C\u4EF6\u52A0\u901F\u8FC7\u6E21\uFF08\u5982\u679C\u8BE5\u8BBE\u5907\u652F\u6301\u7684\u8BDD\uFF09\u3002\u4E3B\u8981\u4F7F\u7528\u4E8E\u79FB\u52A8\u7AEF\u7684\u7F51\u7AD9\u3001\u79FB\u52A8web apps\uFF0Cnative apps\u548Chybrid apps\u3002\u4E3B\u8981\u662F\u4E3AIOS\u800C\u8BBE\u8BA1\u7684\uFF0C\u540C\u65F6\uFF0C\u5728Android\u3001WP8\u7CFB\u7EDF\u4E5F\u6709\u7740\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0CSwiper\u4ECE3.0\u5F00\u59CB\u4E0D\u518D\u5168\u9762\u652F\u6301PC\u7AEF\u3002\u56E0\u6B64\uFF0C\u5982\u9700\u5728PC\u4E0A\u517C\u5BB9\u66F4\u591A\u7684\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u9009\u62E9Swiper2.x\uFF08\u751A\u81F3\u652F\u6301IE7\uFF09\u3002</p><p>Swiper \u5B8C\u5168\u514D\u8D39\u5E76\u5F00\u6E90\uFF08MIT Licensed\uFF09\uFF0C\u65E0\u8BBA\u4F60\u4F7F\u7528\u5728\u4E2A\u4EBA\u7F51\u7AD9\u6216\u5546\u4E1A\u7F51\u7AD9\uFF0C\u90FD\u65E0\u9700\u4ED8\u8D39\u3002</p><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/swiper/index.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var index_html$j = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$i
});
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F</h1><p>1.\u7AD6\u5C4F\u5168\u5C4F\u8F6E\u64AD\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

&lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;

&lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;js/swiper.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

&lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 1&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 2&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 3&lt;/div&gt;
   &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper = new Swiper (&#39;.swiper-container&#39;, {
 direction: &#39;vertical&#39;,
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>2.\u6A2A\u5C4F\u6548\u679C\uFF1A \u53EA\u66F4\u6539js\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var mySwiper = new Swiper (\u2019.swiper-container\u2019, {
})
//\u8FD9\u662F\u6700\u7B80\u5355\u7684\u5168\u5C4F\u8F6E\u64AD\u3002\u8BB8\u591A\u5C5E\u6027\u6CA1\u5199\uFF0C\u60F3\u5199\u7684\u8BDD\u53EF\u4EE5\u770Bapi\u5B98\u7F51
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.\u6A2A\u7AD6\u5C4F\u4EA4\u53C9\u7684\u5168\u5C4F\u8F6E\u64AD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\u7684\u5F15\u7528\u4E00\u81F4\uFF1B

&lt;body&gt;\u5185\uFF1A

 &lt;!-- Swiper --&gt;
  &lt;div class=&quot;swiper-container swiper-container-h&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 1&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 2&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 3&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide4&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;
       &lt;div class=&quot;swiper-container swiper-container-v&quot;&gt;
        &lt;div class=&quot;swiper-wrapper&quot;&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E00&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E8C&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E09&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u56DB&lt;/div&gt;
        &lt;/div&gt;
       &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 6&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 7&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 8&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 9&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 10&lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- Add Pagination --&gt;
  &lt;!--  &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;--&gt;
  &lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper = new Swiper (&#39;.swiper-container-v&#39;, {
 direction: &#39;vertical&#39;,
}) 
   var Swiper = new Swiper (&#39;.swiper-container-h&#39;, {
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>4.\u666E\u901A\u7684\u7AD6\u5C4F\u8F6E\u64AD\u52A0animation\u52A8\u753B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/animate.min.css&quot;&gt;
    &lt;style&gt;
		.swiper-container {
		    width: 600px;
		    height: 300px;
		    background-color: red;
		}  
	&lt;/style&gt;

  	&lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/swiper.jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/swiper.animate1.0.2.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

	&lt;div class=&quot;swiper-container&quot;&gt;
	    &lt;div class=&quot;swiper-wrapper&quot;&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani aa&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot;&gt;\u5185\u5BB91&lt;/p&gt;
	        &lt;/div&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani bb&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot; style=&quot;    visibility: visible;&quot;&gt;\u5185\u5BB92&lt;/p&gt;
	        &lt;/div&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani cc&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot; style=&quot;    visibility: visible;&quot;&gt;\u5185\u5BB93&lt;/p&gt;
	        &lt;/div&gt;
	    &lt;/div&gt;
	&lt;/div&gt;
&lt;!--effect:\u6548\u679C  duration\uFF1A\u6301\u7EED\u65F6\u95F4  delay\uFF1A\u7B49\u5F85\u65F6\u95F4--&gt;

&lt;script&gt;\u5185\uFF1A

 //Swiper3.x\u3001Swiper2.x
//var mySwiper = new Swiper (&#39;.swiper-container&#39;, {
//  onInit: function(swiper){ //Swiper2.x\u7684\u521D\u59CB\u5316\u662FonFirstInit
//    swiperAnimateCache(swiper); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
//    swiperAnimate(swiper); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
//  }, 
//  onSlideChangeEnd: function(swiper){ 
//    swiperAnimate(swiper); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
//  } 
//})

//Swiper4.x
var mySwiper1 = new Swiper (&#39;.swiper-container&#39;, {
    direction: &#39;vertical&#39;,//\u7AD6\u5C4F
    on:{
      init: function(){
        swiperAnimateCache(this); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
        swiperAnimate(this); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
      } 
    }
})

//\u6A2A\u5C4F\u4E0E\u7AD6\u5C4F\u57FA\u672C\u4E00\u81F4\uFF0C\u5C31\u53BB\u6389js\u4E2D direction:&#39;vertical&#39;,\u4E00\u53E5\u5C31\u53EF\u4EE5\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>5.\u7AD6\u5C4F\u53EF\u4EE5\u6709\u4E24\u6B21\u4E0D\u540C\u7684\u52A8\u753B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/animate.min.css&quot;&gt;

  &lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt; 
   &lt;!-- Swiper JS --&gt;
  &lt;script src=&quot;js/swiper.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;js/swiper.animate1.0.2.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

 &lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 1&lt;/span&gt;&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 2&lt;/span&gt;&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 3&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper1 = new Swiper (&#39;.swiper-container&#39;, {
    direction: &#39;vertical&#39;,//\u7AD6\u5C4F
    on:{
      init: function(){
        swiperAnimateCache(this); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
        swiperAnimate(this); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
      } 
    }
})

/*
at        \u540E\u9762\u8DDF\u7684\u662F     \u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4
from     \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u6837\u5F0F
use       \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u529B\u5EA6
during   \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u6301\u7EED\u65F6\u95F4
force     \u540E\u9762\u8DDF\u7684\u662F    \u662F\u5426\u4F7F\u7528 \u53EA\u6709\u5728\u51FA\u573A\u52A8\u753B\u7684\u65F6\u5019\u4F7F\u7528\u3002\u8FDB\u573A\u52A8\u753B\u65E0\u6548\u3002\u3002
*/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/swiper/swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var swiper_animation_______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var swiper_animation_______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": swiper_animation_______html$1
});
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><p>\u672C\u8D28\u4E0A\uFF0Cwebpack \u662F\u4E00\u4E2A\u7528\u4E8E\u73B0\u4EE3 JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684 \u9759\u6001\u6A21\u5757\u6253\u5305\u5DE5\u5177\u3002\u5F53 webpack \u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u5728\u5185\u90E8\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u5165\u53E3\u70B9\u6784\u5EFA\u4E00\u4E2A \u4F9D\u8D56\u56FE(dependency graph)\uFF0C\u7136\u540E\u5C06\u4F60\u9879\u76EE\u4E2D\u6240\u9700\u7684\u6BCF\u4E00\u4E2A\u6A21\u5757\u7EC4\u5408\u6210\u4E00\u4E2A\u6216\u591A\u4E2A bundles\uFF0C\u5B83\u4EEC\u5747\u4E3A\u9759\u6001\u8D44\u6E90\uFF0C\u7528\u4E8E\u5C55\u793A\u4F60\u7684\u5185\u5BB9\u3002</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/webpack/index.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var index_html$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$g
});
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="vscode\u91CC\u9762\u51FA\u73B0zsh-command-not-found-webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vscode\u91CC\u9762\u51FA\u73B0zsh-command-not-found-webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> vscode\u91CC\u9762\u51FA\u73B0zsh: command not found: webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5</h1><p>\u8BF7\u5728\u7EC8\u7AEF\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=&quot;./node_modules/.bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u56DE\u8F66\u540E\u518D\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u56DE\u8F66\u540E\u5C31\u597D\u4E86,\u518D\u6267\u884C\u6253\u5305\u547D\u4EE4</p><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/webpack/vscode command not found.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var vscode_command_not_found_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var vscode_command_not_found_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vscode_command_not_found_html$1
});
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="webpack-config-js\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack-config-js\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> webpack.config.js\u57FA\u672C\u914D\u7F6E</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7 npm \u5B89\u88C5</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5F53\u524D\u9879\u76EE\u7684\u6839\u76EE\u5F55</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u6A21\u5F0F\uFF0Cproduction</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u5165\u53E3\u6587\u4EF6</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//\u51FA\u53E3\u6587\u4EF6</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//\u8DEF\u5F84</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;foo.bundle.js&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u6587\u4EF6\u540D</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>  <span class="token comment">//\u4F7F\u7528\u54EA\u4E9B\u6587\u4EF6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>						<span class="token comment">//\u4F7F\u7528\u54EA\u4E9Bloder\u8FDB\u884C\u5904\u7406</span>
        	<span class="token string">&#39;style-loder&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loder&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/webpack/webpack.config.js\u57FA\u672C\u914D\u7F6E.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var webpack_config_js_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var webpack_config_js_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": webpack_config_js_____html$1
});
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = vue.resolveComponent("nuxt-link");
  _push(`<!--[--><h1 id="nuxt-js\u5B66\u4E60\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#nuxt-js\u5B66\u4E60\u8BB0\u5F55" aria-hidden="true">#</a> nuxt.js\u5B66\u4E60\u8BB0\u5F55</h1><p>\u9996\u5148\u9700\u8981node.js\uFF0C\u7136\u540E\u4F7F\u7528node -v\u4EE5\u53CAvue -V\u6765\u68C0\u6D4B\u73AF\u5883\u662F\u5426\u6210\u529F</p><p>\u7136\u540E\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx create-nuxt-app &lt;\u9879\u76EE\u540D&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u4F7F\u670D\u52A1\u8DD1\u8D77\u6765\uFF0C\u9ED8\u8BA4\u5E94\u7528\u8FD0\u884C\u5728 http://localhost:3000</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u5728package.json\u6587\u4EF6\u4E2D\u4FEE\u6539\u670D\u52A1\u7AEF\u53E3\uFF0C\u4FEE\u6539\u5B8C\u6210\u540E\u9700\u91CD\u542F\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;config&quot;:{
&quot;nuxt&quot;:{
&quot;host&quot;:&quot;127.0.0.1&quot;,
&quot;port&quot;:&quot;8888&quot;
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u914D\u7F6E\u5168\u5C40\u7684css\u53EF\u4EE5\u5728nuxt.config.js\u6587\u4EF6\u4E2D\uFF0C\u5176\u4E2D\u2018\uFF5E\u2019\u6307\u5411\u6839\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>css:[
&#39;~assets/css/normalize.css&#39;
]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>nuxt.config.js\u6587\u4EF6\u4E2D\u7684build\u53EF\u4EE5\u8BBE\u7F6Eloader\uFF0C\u5982\u56FE\u7247\u8D44\u6E90\u7684\u6253\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8DEF\u7531\u8DF3\u8F6C\u4F7F\u7528 `);
  _push(serverRenderer.ssrRenderComponent(_component_nuxt_link, null, null, _parent));
  _push(` \u6807\u7B7E\u8FDB\u884C\uFF0C:to\u540E\u9762\u53EF\u4EE5\u4F20\u53C2\u6570\uFF0C\u4F7F\u7528$route.params...\u63A5\u6536\u53C2\u6570</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:<span class="token punctuation">&#39;</span>news<span class="token punctuation">&#39;</span>,params:{newsId:3306}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>News<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>newsId:{{$route.params.newsId}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u52A8\u6001\u8DEF\u7531\u5219\u53EF\u4EE5\u5728\u6587\u4EF6\u5939\u4E0B\u5EFA\u7ACB\u4E00\u4E2A\u4E0B\u6ED1\u7EBF\u524D\u7F00\u7684vue\u6587\u4EF6\uFF0C\u4F8B\u5982_id.vue\uFF0C\u5728_id.vue\u4E2D\u5EFA\u7ACB\u6A21\u677F\u6587\u4EF6\uFF0Cparams\u540E\u63A5\u6536\u7684\u540D\u5B57\u9700\u8981\u4E0E\u5EFA\u7ACB\u7684\u52A8\u6001\u8DEF\u7531\u6587\u4EF6\u540D\u5B57\u76F8\u540C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>newsId:{{$route.params.id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F20\u5165\u5219\u53EF\u4EE5\u4F7F\u7528`);
  _push(serverRenderer.ssrRenderComponent(_component_nuxt_link, null, null, _parent));
  _push(`\u8FDB\u884C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news/123<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>news_1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">&gt;</span></span>
// or
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:<span class="token punctuation">&#39;</span>news-id<span class="token punctuation">&#39;</span>,params:{newsID:1234}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>news_1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FDB\u5165\u4E00\u4E2A\u9875\u9762\uFF0C\u5BF9\u4E8E\u53C2\u6570\u7684\u6821\u9A8C\u662F\u5FC5\u987B\u7684\uFF0Cnuxt.js\u63D0\u4F9B\u4E86\u4E00\u4E2Avalidate()\u65B9\u6CD5\u8FDB\u884C\u6821\u9A8C\uFF0C\u901A\u8FC7\u6B63\u5219\uFF0C\u5982\u679C\u7B26\u5408\u5219\u8FDB\u5165\uFF0C\u5982\u679C\u5931\u8D25\u5219404</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">validate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>params<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Must be a number</span>
    <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>nuxt.js\u8DEF\u7531\u52A8\u753B\u6548\u679C\u5206\u5168\u5C40\u548C\u5C40\u90E8\uFF0C\u5168\u5C40\u52A8\u753B\u6548\u679C\u5728css\u4E2D\u4F7F\u7528.page-enter-active,.page-leave-active,.page-enter\u6765\u64CD\u4F5C\uFF0C\u4F8B\u5982</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.page-enter-active,.page-leave-active</span><span class="token punctuation">{</span>
<span class="token property">transition</span><span class="token punctuation">:</span> opacity 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.page-enter,.page-leave-active</span><span class="token punctuation">{</span>
<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u60F3\u4F7F\u7528\u5C40\u90E8\u52A8\u753B\u5219\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u540D\uFF0C\u4F8B\u5982\uFF1A\u81EA\u5B9A\u4E49-enter-active</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.news-enter-active,.news-leave-active</span><span class="token punctuation">{</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 2s<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.news-enter,.news-leave-active</span><span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u81EA\u5B9A\u4E49\u540E\u5728\u9700\u8981\u4F7F\u7528\u52A8\u753B\u7684\u9875\u9762\u52A0\u5165js\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
export default {
    transition:&#39;news&#39;
}
&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>nuxt.js\u9ED8\u8BA4\u6A21\u677F\u662F\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2Aapp.html\u6587\u4EF6\uFF0C\u4F46\u662F<code>&lt;head&gt;</code>\u6807\u7B7E\u5185\u7684\u5185\u5BB9\u662F\u65E0\u6CD5\u63A7\u5236\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528${serverRenderer.ssrInterpolate(_ctx.HEAD)}\uFF0Cbody\u5185\u4E5F\u9700\u8981\u4F7F\u7528${serverRenderer.ssrInterpolate(_ctx.APP)}\u6765\u83B7\u53D6\uFF0C\u6CE8\u610F\u9700\u8981\u5927\u5199\uFF0C\u540C\u65F6\u9ED8\u8BA4\u6A21\u677F\u9700\u8981\u91CD\u542F\u670D\u52A1\u624D\u80FD\u751F\u6548</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    {{ HEAD }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4\u6A21\u677F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    {{ APP }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u9ED8\u8BA4\u5E03\u5C40\u662F\u5EFA\u7ACB/\u4FEE\u6539layouts\u6587\u4EF6\u5939\u4E0B\u7684default.vue\u6587\u4EF6\uFF0C\u53EA\u80FD\u4FEE\u6539template\u4E2D\u7684\u5185\u5BB9\uFF0C\u65E0\u9700\u91CD\u542F\u670D\u52A1\uFF0C\u901A\u5E38\u9879\u76EE\u5F53\u4E2D\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u5E03\u5C40</p><p>nuxt.js\u6709\u9ED8\u8BA4\u7684\u9519\u8BEF\u9875\u9762\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u5EFA\u7ACB/\u4FEE\u6539layouts\u6587\u4EF6\u5939\u4E0B\u7684error.vue\u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7error\u83B7\u53D6\u5F53\u524D\u72B6\u6001\u7801\u4ECE\u800C\u663E\u793A\u4E0D\u540C\u7684\u9519\u8BEF\u9875\u9762</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error.statusCode === 404<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>404<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>500<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
nuxt.js\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6ETDK\uFF0Ctitle\u53EF\u4EE5\u901A\u8FC7params\u4F20\u5165\uFF0C\u7136\u540E\u901A\u8FC7\u8DEF\u7531\u63A5\u6536\uFF0Cdescription\u4EE5\u53CAkeywords\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\uFF0C\u5176\u4ED6meta\u540C\u7406
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:<span class="token punctuation">&#39;</span>news-id<span class="token punctuation">&#39;</span>,params:{id:1234,title:<span class="token punctuation">&#39;</span>i am news<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>news_4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">&gt;</span></span>
data(){
return{
title:this.$route.params.title
}
},
head(){
return{
title:this.title,
meta:[
{hid: &#39;description&#39;, name: &#39;description&#39;, content: &#39;i am news&#39;},
{hid: &#39;keywords&#39;, name: &#39;keywords&#39;, content: &#39;news,news,news&#39;}
]
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>nuxt.js\u7684asyncData\u65B9\u6CD5\uFF0C\u9996\u5148\u9700\u8981\u5B89\u88C5axios\uFF0C\u5B89\u88C5\u5728\u751F\u4EA7\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install axios --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728\u9700\u8981\u4F7F\u7528axios\u7684\u6587\u4EF6\u4E2D\u5F15\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import axios from &#39;axios&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7axios\u83B7\u53D6\u670D\u52A1\u5668\u6570\u636E\uFF0Cinfo\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7${serverRenderer.ssrInterpolate(_ctx.info)}\u8FDB\u884C\u8C03\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>asyncData() {
return axios.get(&#39;https://api.apishop.net/common/joke/getJokesByRandom?apiKey=KeyID&amp;pageSize=1&#39;)
.then(res =&gt; {
return{info:res.data.result[0].content}
})
.catch(err =&gt; {
console.error(err);
})
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F7F\u7528async\u65B9\u6CD5\uFF0C\u66F4\u52A0\u4F18\u96C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async asyncData() {
let {data} = await axios.get(&#39;https://api.apishop.net/common/joke/getJokesByRandom?apiKey=keyId&amp;pageSize=1&#39;)
return {info:data.result[0].content}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F15\u5165\u56FE\u7247\u6216\u8005\u5176\u4ED6\u8D44\u6E90\u65F6\u5019\uFF0C\u5730\u5740\u53EF\u4EE5\u4F7F\u7528\u201C\uFF5E\u201D\uFF0C\u5728nuxt.js\u4E2D\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4F4D\u5728\u6839\u76EE\u5F55 \u4F7F\u7528npm run generate\u547D\u4EE4\u53EF\u4EE5\u5BF9\u6587\u4EF6\u8FDB\u884C\u6253\u5305\uFF0C\u6253\u5305\u540E\u4F1A\u751F\u6210\u4E00\u4E2Adist\u6587\u4EF6\u5939\uFF0C\u4F7F\u7528\u6700\u7B80\u5355\u7684live-server\u53EF\u4EE5\u5C06\u6253\u5305\u597D\u7684\u9759\u6001\u6587\u4EF6\u8FDB\u884C\u8BBF\u95EE</p><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/vue/nuxt.js\u5B66\u4E60\u8BB0\u5F55.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var nuxt_js_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var nuxt_js_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": nuxt_js_____html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><p>Vue (\u8BFB\u97F3 /vju\u02D0/\uFF0C\u7C7B\u4F3C\u4E8E view) \u662F\u4E00\u5957\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\u6E10\u8FDB\u5F0F\u6846\u67B6\u3002</p><p>\u4E0E\u5176\u5B83\u5927\u578B\u6846\u67B6\u4E0D\u540C\u7684\u662F\uFF0CVue \u88AB\u8BBE\u8BA1\u4E3A\u53EF\u4EE5\u81EA\u5E95\u5411\u4E0A\u9010\u5C42\u5E94\u7528\u3002Vue \u7684\u6838\u5FC3\u5E93\u53EA\u5173\u6CE8\u89C6\u56FE\u5C42\uFF0C\u4E0D\u4EC5\u6613\u4E8E\u4E0A\u624B\uFF0C\u8FD8\u4FBF\u4E8E\u4E0E\u7B2C\u4E09\u65B9\u5E93\u6216\u65E2\u6709\u9879\u76EE\u6574\u5408\u3002</p><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u5F53\u4E0E\u73B0\u4EE3\u5316\u7684\u5DE5\u5177\u94FE\u4EE5\u53CA\u5404\u79CD\u652F\u6301\u7C7B\u5E93\u7ED3\u5408\u4F7F\u7528\u65F6\uFF0CVue \u4E5F\u5B8C\u5168\u80FD\u591F\u4E3A\u590D\u6742\u7684\u5355\u9875\u5E94\u7528\u63D0\u4F9B\u9A71\u52A8\u3002</p><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/vue/index.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var index_html$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$e
});
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="vue-element-ui-\u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#vue-element-ui-\u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316</h1><p>\u4E0B\u8F7Dmoment.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install moment --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u7EC4\u4EF6\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;el-table-column
prop=&quot;createTime&quot;
:formatter=&quot;dateFormat&quot;
label=&quot;\u521B\u5EFA\u65F6\u95F4&quot;&gt;		 
&lt;/el-table-column&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7528 &#39;:formatter&#39; \u6765\u7ED1\u5B9A \u8BBE\u7F6E\u65F6\u95F4\u683C\u5F0F\u7684\u65B9\u6CD5 dateForma</p><p>\u5728methods \u4E2D\u5B9A\u4E49 dateForma</p><p>\u5F15\u5165moment.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import moment from &#39;moment&#39;
methods:{
dateForma:function(row,column){
var date = row[column.property];
if(date == undefined){return &#39;&#39;};
return moment(date).format(&quot;YYYY-MM-DD HH:mm:ss&quot;)
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/vue/vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var vue_elementUi___________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var vue_elementUi___________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vue_elementUi___________html$1
});
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF" aria-hidden="true">#</a> \u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF</h1><p>\u4F7F\u7528\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/vue/\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var __npm______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var __npm______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __npm______html$1
});
var _imports_0 = "/myBlog/images/k1.png";
var _imports_1 = "/myBlog/images/k2.png";
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6xxx-\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6xxx-\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C" aria-hidden="true">#</a> \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C</h1><p>\u5728\u7528\u811A\u624B\u67B6\u642D\u5EFAvue\u9879\u76EE\u65F6\uFF0C\u63D0\u793A\uFF1A\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 C:\\Users\\1111111\\AppData\\Roaming\\npm\\vue.ps1,\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C</p><p>\u8FD9\u662F\u4F60\u7B14\u8BB0\u672C\u7981\u6B62\u8FD0\u884C\u811A\u672C\uFF0C\u89E3\u51B3\u529E\u6CD5</p><p>1.\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="image.png"></p><p>2.\u8F93\u5165set-ExecutionPolicy RemoteSigned</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="image.png"></p><p>3.\u9009\u62E9Y \u6216\u8005A \uFF0C\u5C31\u597D\u4E86</p><p>\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014</p><p>\u7248\u6743\u58F0\u660E\uFF1A\u672C\u6587\u4E3ACSDN\u535A\u4E3B\u300C\u4E0D\u4F1A\u4E48\u4E48\u54D2\u300D\u7684\u539F\u521B\u6587\u7AE0\uFF0C\u9075\u5FAACC 4.0 BY-SA\u7248\u6743\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u9644\u4E0A\u539F\u6587\u51FA\u5904\u94FE\u63A5\u53CA\u672C\u58F0\u660E\u3002</p><p>\u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/wqnmlgbsz/article/details/100654258</p><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/front-end/vue/\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var ______XXX______________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var ______XXX______________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ______XXX______________html$1
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$z = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "images/logo.png",
    "actionText": "\u7B14\u8BB0 \u2192",
    "actionLink": "/note/front-end",
    "features": [
      {
        "title": "\u8BFB\u4E66",
        "details": "\u770B\u4E66\u4E0D\u80FD\u4FE1\u4EF0\u800C\u65E0\u601D\u8003\uFF0C\u8981\u5927\u80C6\u5730\u63D0\u51FA\u95EE\u9898\uFF0C\u52E4\u4E8E\u6458\u5F55\u8D44\u6599\uFF0C\u5206\u6790\u8D44\u6599\uFF0C\u627E\u51FA\u5176\u4E2D\u7684\u76F8\u4E92\u5173\u7CFB\uFF0C\u662F\u505A\u5B66\u95EE\u7684\u4E00\u79CD\u65B9\u6CD5\u3002\u2014\u2014\u987E\u9889\u521A"
      },
      {
        "title": "\u6280\u672F",
        "details": "\u5F53\u4F60\u60F3\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u627E\u5230\u4E00\u4E2A\u9519\u8BEF\u65F6\uFF0C\u8FD9\u5F88\u96BE\uFF1B \u5F53\u4F60\u8BA4\u4E3A\u4F60\u7684\u4EE3\u7801\u662F\u4E0D\u4F1A\u6709\u9519\u8BEF\u65F6\uFF0C\u8FD9\u5C31\u66F4\u96BE\u4E86\u3002 \u2014\u2014Steve McConnell"
      },
      {
        "title": "\u751F\u6D3B",
        "details": "\u751F\u6D3B\u4E2D\u5E76\u975E\u5168\u662F\u73AB\u7470\u82B1\uFF0C\u8FD8\u6709\u523A\u4EBA\u7684\u8346\u68D8\u3002\u2014\u2014\u5188\u5BDF\u6D1B\u592B"
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2017-2022 Lyeshen's blog"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
};
var index_html$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$z
});
const data$y = {
  "key": "v-7445767f",
  "path": "/cms/",
  "title": "Cms",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Cms"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/README.md"
};
var index_html$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$y
});
const data$x = {
  "key": "v-8c02d0de",
  "path": "/front-end/",
  "title": "Front-end",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Front-end"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/README.md"
};
var index_html$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$x
});
const data$w = {
  "key": "v-4db4c8ca",
  "path": "/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.html",
  "title": "Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "git/Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5\uFF08\u56FD\u5185\u5730\u5740\uFF09.md"
};
var Homebrew_______________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$w
});
const data$v = {
  "key": "v-4ba74800",
  "path": "/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.html",
  "title": "Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "git/Mac\u5982\u4F55\u914D\u7F6ESSH\u516C\u94A5\uFF08\u7801\u4E91\uFF09.md"
};
var Mac____SSH_______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$v
});
const data$u = {
  "key": "v-74473916",
  "path": "/git/",
  "title": "Git",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Git"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "git/README.md"
};
var index_html$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$u
});
const data$t = {
  "key": "v-609d06f6",
  "path": "/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.html",
  "title": "PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5B9E\u73B0\u6548\u679C",
      "slug": "\u5B9E\u73B0\u6548\u679C",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4FEE\u6539\u6B65\u9AA4",
      "slug": "\u4FEE\u6539\u6B65\u9AA4",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "cms/pbootcms/PbootCMS\u540E\u53F0\u7F16\u8F91\u5668\u63D2\u5165\u89C6\u9891\u7F51\u5740\u5B9E\u73B0\u652F\u6301mp4\u683C\u5F0F.md"
};
var PbootCMS_______________mp4___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$t
});
const data$s = {
  "key": "v-2c3dda6e",
  "path": "/cms/pbootcms/",
  "title": "PbootCMS",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "PbootCMS"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/pbootcms/README.md"
};
var index_html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$s
});
const data$r = {
  "key": "v-73785f95",
  "path": "/cms/wordpress/",
  "title": "WordPress",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "WordPress"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/wordpress/README.md"
};
var index_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$r
});
const data$q = {
  "key": "v-65cad7be",
  "path": "/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",
  "title": "wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/wordpress/wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848.md"
};
var wordpress__No_input_file_specified______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$q
});
const data$p = {
  "key": "v-d14937e8",
  "path": "/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.html",
  "title": "wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/wordpress/wordpress\u901A\u8FC7\u6570\u636E\u5E93\u66F4\u6362\u57DF\u540D.md"
};
var wordpress__________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$p
});
const data$o = {
  "key": "v-66a577e0",
  "path": "/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html",
  "title": "\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/wordpress/\u79FB\u9664WordPress\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD.md"
};
var __WordPress________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$o
});
const data$n = {
  "key": "v-33e79a11",
  "path": "/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.html",
  "title": "\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "cms/wordpress/\u865A\u62DF\u4E3B\u673A\u4E0B\u5BF9wordpress\u8FDB\u884C\u52A0\u901F.md"
};
var ______wordpress_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-39f5b4c6",
  "path": "/front-end/css/",
  "title": "CSS",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "CSS"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/css/README.md"
};
var index_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-2ebea979",
  "path": "/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.html",
  "title": "\u79FB\u52A8\u7AEF",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u79FB\u52A8\u7AEF"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/css/\u79FB\u52A8\u7AEF\u5C4F\u5E55\u9002\u914D\u5E03\u5C40-rem.md"
};
var _________Rem_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-158ed2c3",
  "path": "/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.html",
  "title": "babel\u7684\u4F7F\u7528",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "babel\u7684\u4F7F\u7528"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/es6/babel\u7684\u4F7F\u7528.md"
};
var babel____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-a9ee2fe2",
  "path": "/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.html",
  "title": "for of \u548C for in \u7684\u533A\u522B",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "for of \u548C for in \u7684\u533A\u522B"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/es6/for of \u548C for in \u7684\u533A\u522B.md"
};
var for_of___for_in_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-39f3f210",
  "path": "/front-end/es6/",
  "title": "ES6",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "ES6"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/es6/README.md"
};
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-9b959746",
  "path": "/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html",
  "title": "&#65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": null
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/html/65279\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u4E00\u884C\u89E3\u51B3\u65B9\u6CD5.md"
};
var _65279_____________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-7de668f3",
  "path": "/front-end/html/",
  "title": "HTML",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "HTML"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/html/README.md"
};
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-5b54bfc6",
  "path": "/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.html",
  "title": "\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/html/\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u663E\u793A\u5E76\u4FEE\u6539video\u9ED8\u8BA4\u6837\u5F0F.md"
};
var ____________video_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-c5075ec4",
  "path": "/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.html",
  "title": "jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/jquery/jq\u5B9E\u73B0\u6EDA\u52A8\u5230\u67D0\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u6B21.md"
};
var jq______________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-030c7ca0",
  "path": "/front-end/jquery/",
  "title": "jQuery",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "jQuery"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/jquery/README.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-7e388d7c",
  "path": "/front-end/node/",
  "title": "NodeJs",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "NodeJs"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/node/README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-417626c9",
  "path": "/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.html",
  "title": "Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90",
      "slug": "\u5207\u6362\u4E0B\u8F7D\u955C\u50CF\u6E90",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E",
      "slug": "\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u6A21\u5757\u7684\u4F4D\u7F6E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6D4B\u8BD5",
      "slug": "\u6D4B\u8BD5",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "front-end/node/Windows\u4E0B\u5B89\u88C5Node.js\u5B8C\u6574\u8BE6\u7EC6\u6559\u7A0B.md"
};
var Windows___Node_js_______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-2e854bf4",
  "path": "/front-end/swiper/",
  "title": "Swiper",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Swiper"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/swiper/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-143f10bc",
  "path": "/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.html",
  "title": "swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/swiper/swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F.md"
};
var swiper_animation_______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-0a4e80f3",
  "path": "/front-end/webpack/",
  "title": "webpack",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "webpack"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/webpack/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-439c79a5",
  "path": "/front-end/webpack/vscode%20command%20not%20found.html",
  "title": "vscode\u91CC\u9762\u51FA\u73B0zsh command not found webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vscode\u91CC\u9762\u51FA\u73B0zsh command not found webpack\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/webpack/vscode command not found.md"
};
var vscode_command_not_found_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-17579900",
  "path": "/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.html",
  "title": "webpack.config.js\u57FA\u672C\u914D\u7F6E",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "webpack.config.js\u57FA\u672C\u914D\u7F6E"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/webpack/webpack.config.js\u57FA\u672C\u914D\u7F6E.md"
};
var webpack_config_js_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-4b80cdad",
  "path": "/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.html",
  "title": "nuxt.js\u5B66\u4E60\u8BB0\u5F55",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "nuxt.js\u5B66\u4E60\u8BB0\u5F55"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/vue/nuxt.js\u5B66\u4E60\u8BB0\u5F55.md"
};
var nuxt_js_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-39e4630c",
  "path": "/front-end/vue/",
  "title": "Vue",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Vue"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/vue/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-aef0a982",
  "path": "/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.html",
  "title": "vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/vue/vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316.md"
};
var vue_elementUi___________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-ba37bd5c",
  "path": "/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.html",
  "title": "\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/vue/\u4FEE\u6539npm\u4E3A\u6DD8\u5B9D\u955C\u50CF.md"
};
var __npm______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-085a2bfe",
  "path": "/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",
  "title": "\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "front-end/vue/\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6XXX\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u7981\u6B62\u8FD0\u884C\u811A\u672C.md"
};
var ______XXX______________html = /* @__PURE__ */ Object.freeze({
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
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
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
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
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
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
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
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
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
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
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
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
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
      if (isString(item)) {
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
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
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
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
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
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
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
      return vue.computed(() => {
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
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
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
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
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
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
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
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
