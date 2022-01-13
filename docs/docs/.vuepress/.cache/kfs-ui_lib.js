import {
  init_runtime_dom_esm_bundler,
  runtime_dom_esm_bundler_exports
} from "./chunk-YHJK34GD.js";
import "./chunk-F5S5MEXP.js";
import {
  __commonJS,
  init_define_DEMOBLOCK_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-LJWCPGCO.js";

// node_modules/kfs-ui/lib/index.js
var require_lib = __commonJS({
  "node_modules/kfs-ui/lib/index.js"(exports, module) {
    init_define_DEMOBLOCK_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    (function(p, t) {
      typeof exports == "object" && typeof module != "undefined" ? t(exports, (init_runtime_dom_esm_bundler(), runtime_dom_esm_bundler_exports)) : typeof define == "function" && define.amd ? define(["exports", "vue"], t) : (p = typeof globalThis != "undefined" ? globalThis : p || self, t(p.index = {}, p.Vue));
    })(exports, function(p, t) {
      "use strict";
      var Ee = "";
      const ie = (e) => Object.prototype.toString.call(e), de = { "[object String]": "string", "[object Number]": "number", "[object Object]": "object" }, R = (e) => {
        const n = de[ie(e)], c = [];
        if (n !== "object")
          for (let a = 0; a < +e; a++)
            c.push(a);
        if (n === "object") {
          const a = Object.keys(e);
          let o;
          for (o of a) {
            const s = {};
            s[o] = e[o], c.push(s);
          }
        }
        return c;
      }, ue = (e) => e, C = (e) => (e.install = (n) => {
        const { name: c } = e;
        n.component(c, e);
      }, e), pe = () => {
        const e = t.ref(null);
        return e.value = document.createElement("div"), document.body.appendChild(e.value), e.value;
      }, W = (e, n, c) => {
        const a = t.createVNode(e, c);
        t.render(a, n);
      }, V = (e) => {
        const n = t.ref(e), c = (a) => {
          typeof a == "function" ? a() : n.value = a;
        };
        return [t.readonly(n), c];
      }, fe = (e, n) => {
        const c = {};
        n == null || n.map((a, o) => {
          c[a] = a;
        }), t.watchEffect(e, c);
      }, M = { getContext: (e, n) => {
        t.provide(e, n);
      }, setContext: (e, n) => t.inject(e, n) }, k = (e, n) => {
        const c = ue([...n]);
        return fe(() => e(c), c), c.join(" ");
      }, x = (e) => {
        const n = {};
        return R(e).map((c, a) => {
          const o = Object.keys(c);
          n[o[0]] = c[o[0]];
        }), n;
      }, w = (e, n, c) => {
        const [a, o] = V(null), s = pe(), r = Object.assign(c, { type: n });
        W(e, s, r), clearTimeout(a.value), o(setTimeout(() => {
          W(null, s);
        }, 3e3));
      }, ge = (e) => {
        t.onMounted(() => {
          R(e).forEach((n) => {
            const c = Object.keys(n).join("");
            document.documentElement.style.setProperty(c, n[c]);
          });
        });
      };
      var Ae = "", Oe = "";
      const q = () => t.createVNode("div", { class: "loadLine" }, [t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null)]);
      var De = "";
      const G = () => t.createVNode("div", { class: "loadEffect" }, [t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null)]);
      var Re = "";
      const H = () => t.createVNode("div", { class: "loadrect" }, [t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null)]);
      var We = "";
      const K = () => t.createVNode("div", { class: "loadback" }, [t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null), t.createVNode("span", null, null)]);
      var qe = "";
      const Z = () => t.createVNode("div", { class: "loadbackline" }, [t.createVNode("span", null, null)]), v = t.defineComponent({ name: "cc-loading", components: { Line: q, Effect: G, Rect: H, Back: K, BackLine: Z }, props: { type: { type: String, default: "line" } }, setup(e) {
        const n = () => ({ effect: t.createVNode(G, null, null), line: t.createVNode(q, null, null), rect: t.createVNode(H, null, null), back: t.createVNode(K, null, null), backLine: t.createVNode(Z, null, null) })[e.type];
        return () => t.createVNode(t.Fragment, null, [n()]);
      } }), T = t.defineComponent({ name: "cc-button", components: { CcLoading: v }, props: { class: { type: String }, type: { type: String, default: "default" }, size: { type: String, default: "medium" }, circle: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, isLoading: { type: Boolean, default: false }, round: { type: [Number, String], default: 0 } }, emits: ["click"], setup(e, { emit: n, slots: c }) {
        const a = (l) => {
          e.isLoading || e.disabled || n("click", l);
        }, o = k((l) => {
          e.type && l.push(`cc-button-${e.type}`), e.isLoading && l.push("cc-button-isLoading"), e.circle && l.push("cc-button-isCircle"), e.disabled && l.push("cc-button-isDisabled"), e.class && l.push(e.class);
        }, ["cc-button"]), s = typeof e.round == "string" ? +e.round : e.round, r = { large: 200, medium: 150, small: 100, mini: 50 }, f = x({ "--round": s + "px", "--size": r[e.size] + "px" }), u = () => {
          const l = c.icon, i = c.default;
          return e.isLoading ? t.createVNode(t.resolveComponent("cc-loading"), null, null) : t.createVNode(t.Fragment, null, [l ? t.createVNode("div", { class: "icon" }, [l()]) : i == null ? void 0 : i()]);
        };
        return () => t.createVNode(t.Fragment, null, [t.createVNode("button", { class: o, onClick: a, style: f }, [u()])]);
      } });
      var Ge = "";
      const J = t.defineComponent({ name: "cc-card", props: { icon: { type: String }, value: { type: String, default: "icon" }, class: { type: String }, shadow: { type: String, default: "always" } }, emits: ["click"], setup(e, { emit: n, slots: c }) {
        const a = (s) => {
          n("click", s);
        }, o = k((s) => {
          e.class && s.push(e.class), e.shadow && s.push(`cc-card-${e.shadow}`);
        }, ["cc-card"]);
        return () => {
          var s;
          return t.createVNode("div", { class: o, onClick: a }, [t.createVNode("img", { src: e.icon, alt: "icon" }, null), t.createVNode("span", null, [e.value]), (s = c.default) == null ? void 0 : s.call(c)]);
        };
      } });
      var He = "";
      const I = t.defineComponent({ name: "cc-input", props: { value: { type: String }, size: { type: String, default: "medium" }, leftIcon: { type: String }, rightIcon: { type: String }, type: { type: String, default: "text" }, tips: { type: String, default: "\u8BF7\u8F93\u5165..." }, leftText: { type: String }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, className: { type: String } }, emits: ["input", "click", "inputChange", "foucs", "blur"], setup(e, { slots: n, emit: c }) {
        const a = k((m) => {
          e.className && m.push(e.className);
        }, ["cc-input"]), o = { large: ["250px", "35px", "20px"], medium: ["200px", "30px", "18px"], small: ["150px", "25px", "16px"], mini: ["100px", "15px", "14px"] }, s = x({ "--w": o[e.size][0], "--h": o[e.size][1], "--size": o[e.size][2] }), [r, f] = V(""), u = (m) => {
          e.disabled || (f(m.target.value), c("input", r.value));
        };
        t.watch(r, (m, B) => {
          c("inputChange", m, B);
        });
        const l = (m) => {
          c("click", m);
        }, i = (m) => c("foucs", m), N = (m) => c("blur", m);
        return () => {
          var m;
          return t.createVNode("div", { class: a, style: s }, [e.leftText && t.createVNode("span", { class: "title" }, [e.leftText]), e.leftIcon && t.createVNode("img", { src: e.leftIcon, alt: "left-icon", class: "left-icon" }, null), t.createVNode("input", { type: e.type, value: e.value, disabled: e.disabled, readonly: e.readonly, onInput: u, onFocus: i, onBlur: N, placeholder: e.tips, class: e.disabled ? "disabled" : "" }, null), e.rightIcon && t.createVNode("img", { src: e.rightIcon, alt: "right-icon", class: "right-icon", onClick: l }, null), (m = n.default) == null ? void 0 : m.call(n)]);
        };
      } });
      var Ke = "";
      const Q = t.defineComponent({ name: "cc-drawer", props: { vModel: { type: Boolean, default: true }, position: { type: String, default: "right" }, width: { type: String, default: "15%" } }, emits: ["opened", "closed"], setup(e, { emit: n, slots: c }) {
        const a = t.ref("");
        t.onMounted(() => {
          const [l, i] = V(document.body.scrollWidth + "px");
          window.onresize = () => {
            i(document.body.scrollWidth + "px");
          }, a.value = l.value;
        });
        const o = () => {
          const l = e.position, i = t.reactive({});
          return l === "left" && (i["--position_top"] = 0, i["--position_left"] = 0, i["--mask_top"] = 0, i["--mask_left"] = 100 + "%", i["--animation_name"] = "FadeInL"), l === "right" && (i["--position_top"] = 0, i["--position_right"] = 0, i["--mask_top"] = 0, i["--mask_right"] = 100 + "%", i["--animation_name"] = "FadeInR"), i;
        }, s = t.computed(() => {
          const l = { "--shadow": a.value, "--w": e.width };
          return Object.assign(l, o());
        }), [r, f] = V(false);
        t.onMounted(() => {
          f(true), n("opened", r.value);
        });
        const u = (l) => {
          const i = document.querySelector(".cc-drawer-box");
          i && (i.contains(l.target) || f(false));
        };
        return () => {
          var l;
          return r.value && e.vModel && t.createVNode("div", { class: "cc-drawer", style: s.value, onClick: u }, [t.createVNode("div", { class: "cc-drawer-box" }, [(l = c.default) == null ? void 0 : l.call(c)])]);
        };
      } });
      var Ze = "";
      const U = t.defineComponent({ name: "cc-tips", props: { tips: { type: String }, class: { type: String }, color: { type: String, default: "#57606f" } }, emits: ["hover", "hoverout"], setup(e, { slots: n, emit: c }) {
        const [a, o] = V(false), s = (l) => {
          o(true), c("hover", l);
        }, r = (l) => {
          o(false), c("hoverout", l);
        }, f = t.computed(() => ({ "--color": e.color, "--opacity": a.value ? 1 : 0 })), u = k((l) => {
          e.class && l.push(e.class);
        }, ["cc-tips"]);
        return () => {
          var l;
          return t.createVNode("div", { class: u, onMouseover: s, onMouseout: r }, [(l = n.default) == null ? void 0 : l.call(n), t.createVNode("div", { class: "hover-tips", style: f.value }, [e.tips])]);
        };
      } });
      var Je = "";
      const me = () => t.createVNode("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7076", width: "20", height: "20" }, [t.createVNode("path", { d: "M793.6 972.8c-4.1984 0-8.3968-1.024-12.2368-3.1232l-269.3632-146.8928-269.3632 146.8928c-8.6016 4.7104-19.0976 4.0448-27.0848-1.6384s-12.032-15.4112-10.3936-25.088l49.0496-294.1952-195.4816-195.4816c-6.7584-6.7584-9.216-16.7936-6.2976-25.9072s10.7008-15.872 20.1728-17.4592l294.3488-49.0496 122.1632-244.3264c4.352-8.6528 13.2096-14.1312 22.8864-14.1312s18.5856 5.4784 22.8864 14.1312l122.1632 244.3264 294.3488 49.0496c9.472 1.5872 17.2544 8.2944 20.1728 17.4592s0.512 19.1488-6.2976 25.9072l-195.4816 195.4816 49.0496 294.1952c1.5872 9.6768-2.4576 19.4048-10.3936 25.088-4.4032 3.1232-9.6256 4.7616-14.848 4.7616zM512 768c4.1984 0 8.448 1.024 12.2368 3.1232l235.4688 128.4096-42.5472-255.3344c-1.3824-8.1408 1.28-16.4864 7.168-22.3232l169.6256-169.6256-258.1504-43.008c-8.0896-1.3312-15.0016-6.5024-18.688-13.824l-105.1136-210.2272-105.1136 210.2272c-3.6864 7.3216-10.5984 12.4416-18.688 13.824l-258.1504 43.008 169.6256 169.6256c5.8368 5.8368 8.4992 14.1312 7.168 22.3232l-42.5472 255.3344 235.4688-128.4096c3.84-2.0992 8.0384-3.1232 12.2368-3.1232z", "p-id": "7077", fill: "#C6D1DE" }, null)]), ye = () => t.createVNode("svg", { class: "icon", viewBox: "0 0 1093 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8272", width: "20", height: "20" }, [t.createVNode("path", { d: "M546.133333 819.2 225.122987 987.962027 286.43328 630.51776 26.7264 377.371307 385.631573 325.215573 546.133333 0 706.635093 325.215573 1065.540267 377.371307 805.833387 630.51776 867.14368 987.962027Z", "p-id": "8273", fill: "#f4ea2a" }, null)]), X = t.defineComponent({ name: "cc-rating", props: { value: { type: String, default: "0" }, max: { type: Number, default: 5 }, disabled: { type: Boolean, default: false }, allowHalf: { type: Boolean, default: false }, colors: { type: Array }, voidColor: { type: String, default: "#C6D1DE" }, showText: { type: Boolean, default: false }, showScore: { type: Boolean, default: false } }, emits: ["mouse"], setup(e, { emit: n, slots: c }) {
        const a = () => {
          const y = t.reactive(["#F7BA2A", "#F7BA2A", "#F7BA2A"]);
          return e.colors && y.splice(0, 3).push(...e.colors), {};
        }, o = t.reactive({ star1: true, star2: false, star3: false, star4: false, star5: false }), [s, r] = V(false), [f, u] = V(0), l = (y) => {
          for (let b = 0; b < y; b++)
            o["star" + (b + 1)] = true;
          for (let b = 5; b > y; b--)
            o["star" + b] = false;
        }, i = (y, b) => {
          const S = +b.slice(4, 5);
          u(S), l(S), n("mouse", y);
        }, N = () => {
          if (!s.value) {
            u(0);
            for (let y = 0; y <= 5; y++)
              o["star" + (y + 1)] = false;
          }
        }, m = () => {
          r(true);
        }, B = t.computed(() => ({ 1: "\u6781\u5DEE", 2: "\u5931\u671B", 3: "\u4E00\u822C", 4: "\u6EE1\u610F", 5: "\u60CA\u559C" })[f.value]), E = t.computed(() => e.value ? (+e.value).toFixed(1) : f.value === 0 ? "" : f.value.toFixed(1)), A = () => {
          const y = +e.value;
          u(y), l(y);
        };
        e.value && A(), t.watch(o, (y, b) => {
          if (s.value)
            for (let S = 0; S < 5; S++)
              o["star" + (S + 1)] = b["star" + (S + 1)];
        }), e.disabled && Object.freeze(o);
        const O = () => [1, 2, 3, 4, 5].map((y, b) => t.createVNode("div", { onMouseover: (S) => i(S, `star${b + 1}`) }, [o[`star${b + 1}`] ? ye() : me()]));
        return () => t.createVNode("div", { class: "cc-rate", onMouseout: N, onClick: m, style: a() }, [O(), e.showText && t.createVNode("span", null, [B.value]), e.showScore && t.createVNode("span", null, [E.value])]);
      } });
      var Qe = "";
      const Y = t.defineComponent({ name: "cc-popup", components: { CcButton: T, CcInput: I }, props: { type: { type: String, default: "upload  " }, title: { type: String, default: "title" }, content: { type: String, default: "content" } }, emits: ["close", "confirm"], setup(e, { emit: n, slots: c }) {
        const [a, o] = V(true), s = (u) => {
          o(false), n("close", u);
        }, r = (u) => {
          o(false), n("confirm", u);
        }, f = () => e.type === "confirm" ? t.createVNode("div", { class: "content" }, [e.content]) : t.createVNode(I, { className: "input" }, null);
        return () => {
          var u;
          return a.value && t.createVNode("div", { class: "cc-popup" }, [t.createVNode("div", { class: "cc-popup-box" }, [t.createVNode("div", { class: "top" }, [t.createVNode("span", { class: "title" }, [e.title])]), f(), t.createVNode("div", { class: "btns" }, [e.type !== "message" && t.createVNode(T, { onClick: s }, { default: () => [t.createTextVNode("\u53D6\u6D88")] }), t.createVNode(T, { type: "success", onClick: r }, { default: () => [t.createTextVNode("\u786E\u5B9A")] })])]), (u = c.default) == null ? void 0 : u.call(c)]);
        };
      } });
      var Ue = "";
      const $ = t.defineComponent({ name: "cc-message", components: { TransitionGroup: t.TransitionGroup, Transition: t.Transition }, props: { text: { type: String, default: "" }, type: { type: String, default: "default" }, top: { type: String, default: "15" } }, setup(e, { slots: n }) {
        const c = { default: { "--color": "#fff", "--backgroundColor": "rgb(236, 240, 241)", "--borderColor": "rgb(233, 230, 221)" }, warn: { "--color": "#E6A23C", "--backgroundColor": "rgb(253, 246, 236)", "--borderColor": "rgb(250, 236, 216)" }, error: { "--color": "#F56C6C", "--backgroundColor": "rgb(254, 240, 240)", "--borderColor": "rgb(253, 226, 226)" }, success: { "--color": "#67C23A", "--backgroundColor": "rgb(240, 249, 235)", "--borderColor": "rgb(225, 243, 216)" } }, [a, o] = V(false);
        t.onMounted(() => {
          o(true);
        });
        const s = t.computed(() => Object.assign(c[e.type], { "--top": e.top + "px" }));
        return () => t.createVNode(t.TransitionGroup, { appear: false, persisted: false }, { default: () => [t.createVNode(t.Transition, { name: "down", mode: void 0 }, { default: () => {
          var r;
          return [a.value && t.createVNode("div", { class: "cc-message", style: s.value }, [t.createVNode("span", { class: "text" }, [e.text])]), (r = n.default) == null ? void 0 : r.call(n)];
        } })] });
      } }), z = { default(e) {
        w($, "default", e);
      }, error(e) {
        w($, "error", e);
      }, success(e) {
        w($, "success", e);
      }, warn(e) {
        w($, "warn", e);
      } };
      var Xe = "";
      const F = t.defineComponent({ name: "cc-toast", props: { text: String, type: { type: String, default: "success" }, success: Function }, setup(e) {
        const n = x({ "--toast-bg": e.type === "default" ? "#ccc" : `var(--theme-bg-${e.type})` });
        return t.onMounted(() => e.success()), () => t.createVNode("div", { class: "cc-toast", style: n }, [e.text]);
      } }), ee = { default(e) {
        w(F, "default", e);
      }, error(e) {
        w(F, "error", e);
      }, success(e) {
        w(F, "success", e);
      }, warn(e) {
        w(F, "warn", e);
      } };
      var Ye = "";
      const te = t.defineComponent({ name: "cc-pagination", props: { background: { type: Boolean, default: false }, pageSize: { type: Number, default: 10 }, total: { type: Number, required: true }, prevText: { type: String }, nextText: { type: String }, currentPage: { type: Number, default: 1 }, layout: { type: String, default: "total, prev, pager, next, jumper" } }, emits: ["currentChange", "prevClick", "nextClick"], setup(e, { emit: n, slots: c }) {
        const a = () => e.prevText || "<", o = () => e.nextText || ">", s = t.computed(() => Math.ceil(e.total / e.pageSize)), [r, f] = V(), u = (d) => {
          if (d !== "pre" && d !== "next" && f(d), d === "pre") {
            if (r.value === 1)
              return;
            r.value -= 1, f(r.value--), n("prevClick", r.value);
          }
          if (d === "next") {
            if (r.value === s.value)
              return;
            f(r.value++), n("nextClick", r.value);
          }
        };
        t.watch(r, () => {
          n("currentChange", r.value);
        });
        const l = () => {
          const d = [];
          for (let g = 1; g <= s.value; g++)
            d.push({ pager: g, currentChange: (h) => u(h) });
          return d;
        }, i = (d) => {
          const g = ["pager"];
          return e.background && g.push("background"), r.value === d + 1 && (e.background ? g.push("currentBg") : g.push("currentPager")), g.join(" ");
        }, N = k((d) => {
          e.background && d.push("background"), r.value === 1 && d.push("is_end");
        }, ["change_pager"]), m = k((d) => {
          e.background && d.push("background"), r.value === s.value && d.push("is_end");
        }, ["change_pager"]), B = () => t.createVNode("div", { class: "total" }, [t.createTextVNode("\u5171 "), e.total, t.createTextVNode(" \u6761")]), E = () => t.createVNode("div", { class: N, onClick: () => u("pre") }, [a()]), A = () => t.createVNode("div", { class: "pagers" }, [l().map((d, g) => t.createVNode("span", { class: i(g), key: "change_pager" + g, onClick: () => {
          var h;
          return (h = d.currentChange) == null ? void 0 : h.call(d, d.pager);
        } }, [d.pager ? d.pager : "..."]))]), O = () => t.createVNode("div", { class: m, onClick: () => u("next") }, [o()]), y = () => t.createVNode("div", { class: "jumper" }, [t.createVNode("span", null, [t.createTextVNode("\u524D\u5F80")]), t.createVNode("input", { type: "text", value: re.value, onInput: Le, onKeydown: Pe }, null), t.createVNode("span", null, [t.createTextVNode("\u9875")])]), b = () => {
          var d;
          return t.createVNode(t.Fragment, null, [(d = c.default) == null ? void 0 : d.call(c)]);
        }, S = () => {
          const d = e.layout.split(", "), g = [];
          return d.forEach((h, j) => {
            h === "total" && g.splice(j, 0, B), h === "prev" && g.splice(j, 0, E), h === "pager" && g.splice(j, 0, A), h === "next" && g.splice(j, 0, O), h === "jumper" && g.splice(j, 0, y);
          }), g.push(b), g.map((h) => h());
        }, [re, D] = V(), Le = (d) => {
          const g = d.target.value;
          if (g !== "" && typeof +g != "number" && z.warn({ text: "\u8BF7\u8F93\u5165\u6570\u5B57" }), +g < 1) {
            D(1);
            return;
          }
          if (+g > s.value) {
            D(s.value);
            return;
          }
          D(+g);
        }, Pe = (d) => {
          d && d.code === "Enter" && f(re.value);
        };
        return () => t.createVNode("div", { class: "cc-pagination" }, [S()]);
      } });
      var et = "";
      const _ = t.defineComponent({ name: "cc-skeleton-item", props: { variable: { type: String, default: "text" } }, setup(e) {
        const n = M.setContext("animated"), c = M.setContext("w", "200px"), o = x({ "--w": c, "--h": { button: "40px", caption: "30px", circle: c, h: "20px", image: "200px", p: "15px", rect: "100px", text: "15px" }[e.variable], "--r": e.variable === "circle" ? "50%" : "5px", "--animation": n ? "loading .8s infinite ease" : "" });
        return () => t.createVNode("div", { class: "cc-skeleton-item", style: o }, null);
      } }), ne = t.defineComponent({ name: "cc-skeleton", components: { CcSkeletonItem: _ }, props: { loading: { type: Boolean, default: false }, rows: { type: Number, default: 0 }, rowsWidth: { type: Array }, animated: { type: Boolean, default: false } }, setup(e, { slots: n }) {
        M.getContext("animated", e.animated);
        const c = (s) => ({ "--w": e.rowsWidth ? e.rowsWidth[s] : "200px" }), a = () => {
          const s = t.reactive([]);
          for (let r = 0; r < e.rows; r++)
            M.getContext("w", r), s.push(t.createVNode(_, { variable: "text", style: c(r) }, null));
          return s.map((r) => r);
        }, o = () => {
          var s;
          return e.rows ? a() : (s = n.default) == null ? void 0 : s.call(n);
        };
        return () => t.createVNode("div", { class: "cc-skeleton" }, [e.loading && o()]);
      } });
      var tt = "";
      const L = t.defineComponent({ name: "cc-step", props: { title: { type: String }, description: { type: String }, icon: { type: String } }, setup(e) {
        const n = () => e.icon ? t.createVNode("img", { class: "icon", src: e.icon, alt: "icon" }, null) : t.createVNode("div", { class: "simple" }, null);
        return () => t.createVNode("div", { class: "cc-stepitem" }, [n(), t.createVNode("span", { class: "title" }, [e.title]), t.createVNode("div", { class: "description" }, [e.description])]);
      } });
      var nt = "";
      const ce = t.defineComponent({ name: "cc-steps", components: { CcStepItem: L }, props: { space: { type: [Number, String] }, direction: { type: String, default: "horizontal" }, active: { type: Number, default: 0 }, processStatus: { type: String, default: "process" }, finishStatus: { type: String, default: "finish" }, alignCenter: { type: Boolean, default: false } }, setup(e, { slots: n }) {
        var u;
        const c = (u = n.default) == null ? void 0 : u.call(n), a = +e.space, o = x({ "--width": a * (c.length - 1) + "px" }), s = (l) => {
          const i = { "--line": +e.space - 12 + "px" };
          return l === 0 && Object.assign(i, { "--show": "none" }), i;
        }, r = (l) => l + 1 <= e.active ? { border: "2px solid #3498db" } : { "--border": "2px solid #000" }, f = () => c.map((l, i) => t.createVNode("div", { class: "cc-stepbar-box", key: i, style: r(i) }, [l, t.createVNode("span", { class: "cc-stepbar-box-index" }, [i + 1]), t.createVNode("span", { class: "cc-stepbar-box-line", style: s(i) }, null)]));
        return () => t.createVNode("div", { class: "cc-stepbar", style: o }, [f().map((l) => l)]);
      } });
      var ct = "";
      const P = t.defineComponent({ name: "cc-tab", props: { title: { type: String } }, setup(e, { slots: n }) {
        return () => {
          var c;
          return t.createVNode("div", { class: "cc-tab" }, [t.createVNode("span", { class: "cc-tab-title" }, [e.title]), t.createVNode("div", { class: "cc-tab-context" }, [(c = n.default) == null ? void 0 : c.call(n)])]);
        };
      } });
      var at = "";
      const ae = t.defineComponent({ name: "cc-tabs", components: { CcTap: P }, props: { active: { type: [Number, String], default: 0 } }, emits: ["change", "click"], setup(e, { slots: n, emit: c }) {
        var l;
        const a = (l = n.default) == null ? void 0 : l.call(n), [o, s] = V(e.active);
        t.watch(o, () => {
          c("change", o.value);
        });
        const r = (i) => {
          const N = ["cc-tabs-box"];
          return i === o.value && N.push("active"), N.join(" ");
        }, f = (i, N) => {
          s(N), c("click", i);
        }, u = () => a == null ? void 0 : a.map((i, N) => t.createVNode("div", { class: r(N), key: N, onClick: (m) => f(m, N) }, [i]));
        return () => t.createVNode("div", { class: "cc-tabs" }, [u()]);
      } });
      var ot = "";
      const oe = t.defineComponent({ name: "cc-switch", props: { value: { type: Boolean, default: false }, checkedValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, size: { type: String, default: "medium" }, disabled: { type: Boolean, default: false } }, emits: ["change"], setup(e, { emit: n }) {
        const c = k((N) => {
          e.disabled && N.push("cc-switch-disabled");
        }, ["cc-switch"]), a = { mini: 60 + "px", small: 70 + "px", medium: 80 + "px", large: 90 + "px" }, o = t.reactive({ "--left": 1 + "px", "--bg": "#bdc3c7", "--w": a[e.size] }), s = t.computed(() => o), [r, f] = V(e.inactiveValue), [u, l] = V(e.value), i = () => {
          e.disabled || (l(!u.value), u.value && (f(e.checkedValue), o["--left"] = +a[e.size].split("p")[0] - 30 + "px", o["--bg"] = "#3498db"), u.value || (f(e.inactiveValue), o["--left"] = 1 + "px", o["--bg"] = "#bdc3c7"), n("change", r.value));
        };
        return () => t.createVNode("div", { class: c, style: s.value, onClick: i }, null);
      } });
      var lt = "";
      const le = t.defineComponent({ name: "cc-link", props: { type: { type: String, default: "default" }, underline: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, href: String }, setup(e, { slots: n }) {
        const c = k((a) => {
          e.type && a.push(`cc-link-${e.type}`), e.underline && a.push("cc-link-underline"), e.disabled && a.push("cc-link-disabled");
        }, ["cc-link"]);
        return () => {
          var a;
          return t.createVNode("a", { class: c, href: e.disabled ? "javascript:void(0)" : e.href }, [(a = n.default) == null ? void 0 : a.call(n)]);
        };
      } }), Ce = C(T), be = C(J), Ne = C(I), Ve = C(v), he = C(Q), Se = C(U), ke = C(X), we = C(Y), xe = C(te), Te = C(ne), Be = C(_), je = C(ce), Me = C(L), Ie = C(ae), $e = C(P), Fe = C(oe), _e = C(le), ve = [T, J, I, v, Q, U, X, Y, te, ce, L, ae, P, oe, le, ne, _], se = (e) => {
        e.config.globalProperties.Message = z, e.config.globalProperties.Toast = ee, e.config.globalProperties.useTheme = ge, ve.map((n) => {
          e.component(n.name, n);
        });
      };
      var ze = { install: se };
      p.CcButton = Ce, p.CcCard = be, p.CcDrawer = he, p.CcInput = Ne, p.CcLink = _e, p.CcLoading = Ve, p.CcPagination = xe, p.CcPopup = we, p.CcRating = ke, p.CcSkeleton = Te, p.CcSkeletonItem = Be, p.CcStep = Me, p.CcSteps = je, p.CcSwitch = Fe, p.CcTab = $e, p.CcTabs = Ie, p.CcTips = Se, p.default = ze, p.install = se, p.messageFn = z, p.toastFn = ee, Object.defineProperty(p, "__esModule", { value: true }), p[Symbol.toStringTag] = "Module";
    });
  }
});

// dep:kfs-ui_lib
init_define_DEMOBLOCK_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var kfs_ui_lib_default = require_lib();
export {
  kfs_ui_lib_default as default
};
//# sourceMappingURL=kfs-ui_lib.js.map
