import {
  init_runtime_dom_esm_bundler,
  runtime_dom_esm_bundler_exports
} from "./chunk-YHJK34GD.js";
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
    (function(p, e) {
      typeof exports == "object" && typeof module != "undefined" ? e(exports, (init_runtime_dom_esm_bundler(), runtime_dom_esm_bundler_exports)) : typeof define == "function" && define.amd ? define(["exports", "vue"], e) : (p = typeof globalThis != "undefined" ? globalThis : p || self, e(p.index = {}, p.Vue));
    })(exports, function(p, e) {
      "use strict";
      var Le = "";
      const V = (t) => {
        const n = e.ref(t), a = (c) => {
          typeof c == "function" ? c() : n.value = c;
        };
        return [e.readonly(n), a];
      }, le = (t, n) => {
        const a = {};
        n == null || n.map((c, o) => {
          a[c] = c;
        }), e.watchEffect(t, a);
      }, B = { getContext: (t, n) => {
        e.provide(t, n);
      }, setContext: (t, n) => e.inject(t, n) }, se = (t) => Object.prototype.toString.call(t), re = { "[object String]": "string", "[object Number]": "number", "[object Object]": "object" }, E = (t) => {
        const n = re[se(t)], a = [];
        if (n !== "object")
          for (let c = 0; c < +t; c++)
            a.push(c);
        if (n === "object") {
          const c = Object.keys(t);
          let o;
          for (o of c) {
            const s = {};
            s[o] = t[o], a.push(s);
          }
        }
        return a;
      }, ie = (t) => t, C = (t) => (t.install = (n) => {
        const { name: a } = t;
        n.component(a, t);
      }, t), k = (t, n) => {
        const a = ie([...n]);
        return le(() => t(a), a), a.join(" ");
      }, M = (t) => {
        const n = {};
        return E(t).map((a, c) => {
          const o = Object.keys(a);
          n[o[0]] = a[o[0]];
        }), n;
      }, de = (t) => {
        e.onMounted(() => {
          E(t).forEach((n) => {
            const a = Object.keys(n).join("");
            document.documentElement.style.setProperty(a, n[a]);
          });
        });
      };
      var Pe = "";
      const D = e.defineComponent({ name: "cc-message", components: { TransitionGroup: e.TransitionGroup, Transition: e.Transition }, props: { text: { type: String, default: "" }, type: { type: String, default: "default" }, top: { type: String, default: "15" } }, setup(t, { slots: n }) {
        const a = { default: { "--color": "#fff", "--backgroundColor": "rgb(236, 240, 241)", "--borderColor": "rgb(233, 230, 221)" }, warn: { "--color": "#E6A23C", "--backgroundColor": "rgb(253, 246, 236)", "--borderColor": "rgb(250, 236, 216)" }, error: { "--color": "#F56C6C", "--backgroundColor": "rgb(254, 240, 240)", "--borderColor": "rgb(253, 226, 226)" }, success: { "--color": "#67C23A", "--backgroundColor": "rgb(240, 249, 235)", "--borderColor": "rgb(225, 243, 216)" } }, [c, o] = V(false);
        e.onMounted(() => {
          o(true);
        });
        const s = e.computed(() => Object.assign(a[t.type], { "--top": t.top + "px" }));
        return () => e.createVNode(e.TransitionGroup, { appear: false, persisted: false }, { default: () => [e.createVNode(e.Transition, { name: "down", mode: void 0 }, { default: () => {
          var r;
          return [c.value && e.createVNode("div", { class: "cc-message", style: s.value }, [e.createVNode("span", { class: "text" }, [t.text])]), (r = n.default) == null ? void 0 : r.call(n)];
        } })] });
      } });
      var I = ({ type: t, text: n }) => {
        let a;
        e.onMounted(() => {
          a = document.createElement("div"), a.setAttribute("class", "cc-message"), document.body.appendChild(a), e.render(o, a);
        });
        const c = e.ref(null), o = e.createVNode(D, { type: t, text: n });
        clearTimeout(c), c.value = setTimeout(() => {
          e.render(null, a);
        }, 2e3);
      }, ve = "", Fe = "";
      const O = () => e.createVNode("div", { class: "loadLine" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Ae = "";
      const R = () => e.createVNode("div", { class: "loadEffect" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Ee = "";
      const W = () => e.createVNode("div", { class: "loadrect" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var De = "";
      const q = () => e.createVNode("div", { class: "loadback" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Oe = "";
      const G = () => e.createVNode("div", { class: "loadbackline" }, [e.createVNode("span", null, null)]), _ = e.defineComponent({ name: "cc-loading", components: { Line: O, Effect: R, Rect: W, Back: q, BackLine: G }, props: { type: { type: String, default: "line" } }, setup(t) {
        const n = () => ({ effect: e.createVNode(R, null, null), line: e.createVNode(O, null, null), rect: e.createVNode(W, null, null), back: e.createVNode(q, null, null), backLine: e.createVNode(G, null, null) })[t.type];
        return () => e.createVNode(e.Fragment, null, [n()]);
      } }), w = e.defineComponent({ name: "cc-button", components: { CcLoading: _ }, props: { class: { type: String }, type: { type: String, default: "default" }, size: { type: String, default: "medium" }, circle: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, isLoading: { type: Boolean, default: false }, round: { type: [Number, String], default: 0 } }, emits: ["click"], setup(t, { emit: n, slots: a }) {
        const c = (l) => {
          t.isLoading || t.disabled || n("click", l);
        }, o = k((l) => {
          t.type && l.push(`cc-button-${t.type}`), t.isLoading && l.push("cc-button-isLoading"), t.circle && l.push("cc-button-isCircle"), t.disabled && l.push("cc-button-isDisabled"), t.class && l.push(t.class);
        }, ["cc-button"]), s = typeof t.round == "string" ? +t.round : t.round, r = { large: 200, medium: 150, small: 100, mini: 50 }, f = M({ "--round": s + "px", "--size": r[t.size] + "px" }), u = () => {
          const l = a.icon, i = a.default;
          return t.isLoading ? e.createVNode(e.resolveComponent("cc-loading"), null, null) : e.createVNode(e.Fragment, null, [l ? e.createVNode("div", { class: "icon" }, [l()]) : i == null ? void 0 : i()]);
        };
        return () => e.createVNode(e.Fragment, null, [e.createVNode("button", { class: o, onClick: c, style: f }, [u()])]);
      } });
      var Re = "";
      const H = e.defineComponent({ name: "cc-card", props: { icon: { type: String }, value: { type: String, default: "icon" }, class: { type: String }, shadow: { type: String, default: "always" } }, emits: ["click"], setup(t, { emit: n, slots: a }) {
        const c = (s) => {
          n("click", s);
        }, o = k((s) => {
          t.class && s.push(t.class), t.shadow && s.push(`cc-card-${t.shadow}`);
        }, ["cc-card"]);
        return () => {
          var s;
          return e.createVNode("div", { class: o, onClick: c }, [e.createVNode("img", { src: t.icon, alt: "icon" }, null), e.createVNode("span", null, [t.value]), (s = a.default) == null ? void 0 : s.call(a)]);
        };
      } });
      var We = "";
      const j = e.defineComponent({ name: "cc-input", props: { value: { type: String }, size: { type: String, default: "medium" }, leftIcon: { type: String }, rightIcon: { type: String }, type: { type: String, default: "text" }, tips: { type: String, default: "\u8BF7\u8F93\u5165..." }, leftText: { type: String }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, className: { type: String } }, emits: ["input", "click", "inputChange", "foucs", "blur"], setup(t, { slots: n, emit: a }) {
        const c = k((m) => {
          t.className && m.push(t.className);
        }, ["cc-input"]), o = { large: ["250px", "35px", "20px"], medium: ["200px", "30px", "18px"], small: ["150px", "25px", "16px"], mini: ["100px", "15px", "14px"] }, s = M({ "--w": o[t.size][0], "--h": o[t.size][1], "--size": o[t.size][2] }), [r, f] = V(""), u = (m) => {
          t.disabled || (f(m.target.value), a("input", r.value));
        };
        e.watch(r, (m, x) => {
          a("inputChange", m, x);
        });
        const l = (m) => {
          a("click", m);
        }, i = (m) => a("foucs", m), N = (m) => a("blur", m);
        return () => {
          var m;
          return e.createVNode("div", { class: c, style: s }, [t.leftText && e.createVNode("span", { class: "title" }, [t.leftText]), t.leftIcon && e.createVNode("img", { src: t.leftIcon, alt: "left-icon", class: "left-icon" }, null), e.createVNode("input", { type: t.type, value: t.value, disabled: t.disabled, readonly: t.readonly, onInput: u, onFocus: i, onBlur: N, placeholder: t.tips, class: t.disabled ? "disabled" : "" }, null), t.rightIcon && e.createVNode("img", { src: t.rightIcon, alt: "right-icon", class: "right-icon", onClick: l }, null), (m = n.default) == null ? void 0 : m.call(n)]);
        };
      } });
      var qe = "";
      const K = e.defineComponent({ name: "cc-drawer", props: { vModel: { type: Boolean, default: true }, position: { type: String, default: "right" }, width: { type: String, default: "15%" } }, emits: ["opened", "closed"], setup(t, { emit: n, slots: a }) {
        const c = e.ref("");
        e.onMounted(() => {
          const [l, i] = V(document.body.scrollWidth + "px");
          window.onresize = () => {
            i(document.body.scrollWidth + "px");
          }, c.value = l.value;
        });
        const o = () => {
          const l = t.position, i = e.reactive({});
          return l === "left" && (i["--position_top"] = 0, i["--position_left"] = 0, i["--mask_top"] = 0, i["--mask_left"] = 100 + "%", i["--animation_name"] = "FadeInL"), l === "right" && (i["--position_top"] = 0, i["--position_right"] = 0, i["--mask_top"] = 0, i["--mask_right"] = 100 + "%", i["--animation_name"] = "FadeInR"), i;
        }, s = e.computed(() => {
          const l = { "--shadow": c.value, "--w": t.width };
          return Object.assign(l, o());
        }), [r, f] = V(false);
        e.onMounted(() => {
          f(true), n("opened", r.value);
        });
        const u = (l) => {
          const i = document.querySelector(".cc-drawer-box");
          i && (i.contains(l.target) || f(false));
        };
        return () => {
          var l;
          return r.value && t.vModel && e.createVNode("div", { class: "cc-drawer", style: s.value, onClick: u }, [e.createVNode("div", { class: "cc-drawer-box" }, [(l = a.default) == null ? void 0 : l.call(a)])]);
        };
      } });
      var Ge = "";
      const Z = e.defineComponent({ name: "cc-tips", props: { tips: { type: String }, class: { type: String }, color: { type: String, default: "#57606f" } }, emits: ["hover", "hoverout"], setup(t, { slots: n, emit: a }) {
        const [c, o] = V(false), s = (l) => {
          o(true), a("hover", l);
        }, r = (l) => {
          o(false), a("hoverout", l);
        }, f = e.computed(() => ({ "--color": t.color, "--opacity": c.value ? 1 : 0 })), u = k((l) => {
          t.class && l.push(t.class);
        }, ["cc-tips"]);
        return () => {
          var l;
          return e.createVNode("div", { class: u, onMouseover: s, onMouseout: r }, [(l = n.default) == null ? void 0 : l.call(n), e.createVNode("div", { class: "hover-tips", style: f.value }, [t.tips])]);
        };
      } });
      var He = "";
      const ue = () => e.createVNode("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7076", width: "20", height: "20" }, [e.createVNode("path", { d: "M793.6 972.8c-4.1984 0-8.3968-1.024-12.2368-3.1232l-269.3632-146.8928-269.3632 146.8928c-8.6016 4.7104-19.0976 4.0448-27.0848-1.6384s-12.032-15.4112-10.3936-25.088l49.0496-294.1952-195.4816-195.4816c-6.7584-6.7584-9.216-16.7936-6.2976-25.9072s10.7008-15.872 20.1728-17.4592l294.3488-49.0496 122.1632-244.3264c4.352-8.6528 13.2096-14.1312 22.8864-14.1312s18.5856 5.4784 22.8864 14.1312l122.1632 244.3264 294.3488 49.0496c9.472 1.5872 17.2544 8.2944 20.1728 17.4592s0.512 19.1488-6.2976 25.9072l-195.4816 195.4816 49.0496 294.1952c1.5872 9.6768-2.4576 19.4048-10.3936 25.088-4.4032 3.1232-9.6256 4.7616-14.848 4.7616zM512 768c4.1984 0 8.448 1.024 12.2368 3.1232l235.4688 128.4096-42.5472-255.3344c-1.3824-8.1408 1.28-16.4864 7.168-22.3232l169.6256-169.6256-258.1504-43.008c-8.0896-1.3312-15.0016-6.5024-18.688-13.824l-105.1136-210.2272-105.1136 210.2272c-3.6864 7.3216-10.5984 12.4416-18.688 13.824l-258.1504 43.008 169.6256 169.6256c5.8368 5.8368 8.4992 14.1312 7.168 22.3232l-42.5472 255.3344 235.4688-128.4096c3.84-2.0992 8.0384-3.1232 12.2368-3.1232z", "p-id": "7077", fill: "#C6D1DE" }, null)]), pe = () => e.createVNode("svg", { class: "icon", viewBox: "0 0 1093 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8272", width: "20", height: "20" }, [e.createVNode("path", { d: "M546.133333 819.2 225.122987 987.962027 286.43328 630.51776 26.7264 377.371307 385.631573 325.215573 546.133333 0 706.635093 325.215573 1065.540267 377.371307 805.833387 630.51776 867.14368 987.962027Z", "p-id": "8273", fill: "#f4ea2a" }, null)]), J = e.defineComponent({ name: "cc-rating", props: { value: { type: String, default: "0" }, max: { type: Number, default: 5 }, disabled: { type: Boolean, default: false }, allowHalf: { type: Boolean, default: false }, colors: { type: Array }, voidColor: { type: String, default: "#C6D1DE" }, showText: { type: Boolean, default: false }, showScore: { type: Boolean, default: false } }, emits: ["mouse"], setup(t, { emit: n, slots: a }) {
        const c = () => {
          const y = e.reactive(["#F7BA2A", "#F7BA2A", "#F7BA2A"]);
          return t.colors && y.splice(0, 3).push(...t.colors), {};
        }, o = e.reactive({ star1: true, star2: false, star3: false, star4: false, star5: false }), [s, r] = V(false), [f, u] = V(0), l = (y) => {
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
        }, x = e.computed(() => ({ 1: "\u6781\u5DEE", 2: "\u5931\u671B", 3: "\u4E00\u822C", 4: "\u6EE1\u610F", 5: "\u60CA\u559C" })[f.value]), P = e.computed(() => t.value ? (+t.value).toFixed(1) : f.value === 0 ? "" : f.value.toFixed(1)), v = () => {
          const y = +t.value;
          u(y), l(y);
        };
        t.value && v(), e.watch(o, (y, b) => {
          if (s.value)
            for (let S = 0; S < 5; S++)
              o["star" + (S + 1)] = b["star" + (S + 1)];
        }), t.disabled && Object.freeze(o);
        const F = () => [1, 2, 3, 4, 5].map((y, b) => e.createVNode("div", { onMouseover: (S) => i(S, `star${b + 1}`) }, [o[`star${b + 1}`] ? pe() : ue()]));
        return () => e.createVNode("div", { class: "cc-rate", onMouseout: N, onClick: m, style: c() }, [F(), t.showText && e.createVNode("span", null, [x.value]), t.showScore && e.createVNode("span", null, [P.value])]);
      } });
      var Ke = "";
      const Q = e.defineComponent({ name: "cc-popup", components: { CcButton: w, CcInput: j }, props: { type: { type: String, default: "upload  " }, title: { type: String, default: "title" }, content: { type: String, default: "content" } }, emits: ["close", "confirm"], setup(t, { emit: n, slots: a }) {
        const [c, o] = V(true), s = (u) => {
          o(false), n("close", u);
        }, r = (u) => {
          o(false), n("confirm", u);
        }, f = () => t.type === "confirm" ? e.createVNode("div", { class: "content" }, [t.content]) : e.createVNode(j, { className: "input" }, null);
        return () => {
          var u;
          return c.value && e.createVNode("div", { class: "cc-popup" }, [e.createVNode("div", { class: "cc-popup-box" }, [e.createVNode("div", { class: "top" }, [e.createVNode("span", { class: "title" }, [t.title])]), f(), e.createVNode("div", { class: "btns" }, [t.type !== "message" && e.createVNode(w, { onClick: s }, { default: () => [e.createTextVNode("\u53D6\u6D88")] }), e.createVNode(w, { type: "success", onClick: r }, { default: () => [e.createTextVNode("\u786E\u5B9A")] })])]), (u = a.default) == null ? void 0 : u.call(a)]);
        };
      } });
      var Ze = "";
      const U = e.defineComponent({ name: "cc-pagination", props: { background: { type: Boolean, default: false }, pageSize: { type: Number, default: 10 }, total: { type: Number, required: true }, prevText: { type: String }, nextText: { type: String }, currentPage: { type: Number, default: 1 }, layout: { type: String, default: "total, prev, pager, next, jumper" } }, emits: ["currentChange", "prevClick", "nextClick"], setup(t, { emit: n, slots: a }) {
        const c = () => t.prevText || "<", o = () => t.nextText || ">", s = e.computed(() => Math.ceil(t.total / t.pageSize)), [r, f] = V(), u = (d) => {
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
        e.watch(r, () => {
          n("currentChange", r.value);
        });
        const l = () => {
          const d = [];
          for (let g = 1; g <= s.value; g++)
            d.push({ pager: g, currentChange: (h) => u(h) });
          return d;
        }, i = (d) => {
          const g = ["pager"];
          return t.background && g.push("background"), r.value === d + 1 && (t.background ? g.push("currentBg") : g.push("currentPager")), g.join(" ");
        }, N = k((d) => {
          t.background && d.push("background"), r.value === 1 && d.push("is_end");
        }, ["change_pager"]), m = k((d) => {
          t.background && d.push("background"), r.value === s.value && d.push("is_end");
        }, ["change_pager"]), x = () => e.createVNode("div", { class: "total" }, [e.createTextVNode("\u5171 "), t.total, e.createTextVNode(" \u6761")]), P = () => e.createVNode("div", { class: N, onClick: () => u("pre") }, [c()]), v = () => e.createVNode("div", { class: "pagers" }, [l().map((d, g) => e.createVNode("span", { class: i(g), key: "change_pager" + g, onClick: () => {
          var h;
          return (h = d.currentChange) == null ? void 0 : h.call(d, d.pager);
        } }, [d.pager ? d.pager : "..."]))]), F = () => e.createVNode("div", { class: m, onClick: () => u("next") }, [o()]), y = () => e.createVNode("div", { class: "jumper" }, [e.createVNode("span", null, [e.createTextVNode("\u524D\u5F80")]), e.createVNode("input", { type: "text", value: oe.value, onInput: _e, onKeydown: ze }, null), e.createVNode("span", null, [e.createTextVNode("\u9875")])]), b = () => {
          var d;
          return e.createVNode(e.Fragment, null, [(d = a.default) == null ? void 0 : d.call(a)]);
        }, S = () => {
          const d = t.layout.split(", "), g = [];
          return d.forEach((h, T) => {
            h === "total" && g.splice(T, 0, x), h === "prev" && g.splice(T, 0, P), h === "pager" && g.splice(T, 0, v), h === "next" && g.splice(T, 0, F), h === "jumper" && g.splice(T, 0, y);
          }), g.push(b), g.map((h) => h());
        }, [oe, A] = V(), _e = (d) => {
          const g = d.target.value;
          if (g !== "" && typeof +g != "number" && I({ type: "error", text: "\u8BF7\u8F93\u5165\u6570\u5B57" }), +g < 1) {
            A(1);
            return;
          }
          if (+g > s.value) {
            A(s.value);
            return;
          }
          A(+g);
        }, ze = (d) => {
          d && d.code === "Enter" && f(oe.value);
        };
        return () => e.createVNode("div", { class: "cc-pagination" }, [S()]);
      } });
      var Je = "";
      const $ = e.defineComponent({ name: "cc-skeleton-item", props: { variable: { type: String, default: "text" } }, setup(t) {
        const n = B.setContext("animated"), a = B.setContext("w", "200px"), o = M({ "--w": a, "--h": { button: "40px", caption: "30px", circle: a, h: "20px", image: "200px", p: "15px", rect: "100px", text: "15px" }[t.variable], "--r": t.variable === "circle" ? "50%" : "5px", "--animation": n ? "loading .8s infinite ease" : "" });
        return () => e.createVNode("div", { class: "cc-skeleton-item", style: o }, null);
      } }), X = e.defineComponent({ name: "cc-skeleton", components: { CcSkeletonItem: $ }, props: { loading: { type: Boolean, default: false }, rows: { type: Number, default: 0 }, rowsWidth: { type: Array }, animated: { type: Boolean, default: false } }, setup(t, { slots: n }) {
        B.getContext("animated", t.animated);
        const a = (s) => ({ "--w": t.rowsWidth ? t.rowsWidth[s] : "200px" }), c = () => {
          const s = e.reactive([]);
          for (let r = 0; r < t.rows; r++)
            B.getContext("w", r), s.push(e.createVNode($, { variable: "text", style: a(r) }, null));
          return s.map((r) => r);
        }, o = () => {
          var s;
          return t.rows ? c() : (s = n.default) == null ? void 0 : s.call(n);
        };
        return () => e.createVNode("div", { class: "cc-skeleton" }, [t.loading && o()]);
      } });
      var Qe = "";
      const z = e.defineComponent({ name: "cc-step", props: { title: { type: String }, description: { type: String }, icon: { type: String } }, setup(t) {
        const n = () => t.icon ? e.createVNode("img", { class: "icon", src: t.icon, alt: "icon" }, null) : e.createVNode("div", { class: "simple" }, null);
        return () => e.createVNode("div", { class: "cc-stepitem" }, [n(), e.createVNode("span", { class: "title" }, [t.title]), e.createVNode("div", { class: "description" }, [t.description])]);
      } });
      var Ue = "";
      const Y = e.defineComponent({ name: "cc-steps", components: { CcStepItem: z }, props: { space: { type: [Number, String] }, direction: { type: String, default: "horizontal" }, active: { type: Number, default: 0 }, processStatus: { type: String, default: "process" }, finishStatus: { type: String, default: "finish" }, alignCenter: { type: Boolean, default: false } }, setup(t, { slots: n }) {
        var u;
        const a = (u = n.default) == null ? void 0 : u.call(n), c = +t.space, o = M({ "--width": c * (a.length - 1) + "px" }), s = (l) => {
          const i = { "--line": +t.space - 12 + "px" };
          return l === 0 && Object.assign(i, { "--show": "none" }), i;
        }, r = (l) => l + 1 <= t.active ? { border: "2px solid #3498db" } : { "--border": "2px solid #000" }, f = () => a.map((l, i) => e.createVNode("div", { class: "cc-stepbar-box", key: i, style: r(i) }, [l, e.createVNode("span", { class: "cc-stepbar-box-index" }, [i + 1]), e.createVNode("span", { class: "cc-stepbar-box-line", style: s(i) }, null)]));
        return () => e.createVNode("div", { class: "cc-stepbar", style: o }, [f().map((l) => l)]);
      } });
      var Xe = "";
      const L = e.defineComponent({ name: "cc-tab", props: { title: { type: String } }, setup(t, { slots: n }) {
        return () => {
          var a;
          return e.createVNode("div", { class: "cc-tab" }, [e.createVNode("span", { class: "cc-tab-title" }, [t.title]), e.createVNode("div", { class: "cc-tab-context" }, [(a = n.default) == null ? void 0 : a.call(n)])]);
        };
      } });
      var Ye = "";
      const ee = e.defineComponent({ name: "cc-tabs", components: { CcTap: L }, props: { active: { type: [Number, String], default: 0 } }, emits: ["change", "click"], setup(t, { slots: n, emit: a }) {
        var l;
        const c = (l = n.default) == null ? void 0 : l.call(n), [o, s] = V(t.active);
        e.watch(o, () => {
          a("change", o.value);
        });
        const r = (i) => {
          const N = ["cc-tabs-box"];
          return i === o.value && N.push("active"), N.join(" ");
        }, f = (i, N) => {
          s(N), a("click", i);
        }, u = () => c == null ? void 0 : c.map((i, N) => e.createVNode("div", { class: r(N), key: N, onClick: (m) => f(m, N) }, [i]));
        return () => e.createVNode("div", { class: "cc-tabs" }, [u()]);
      } });
      var et = "";
      const te = e.defineComponent({ name: "cc-switch", props: { value: { type: Boolean, default: false }, checkedValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, size: { type: String, default: "medium" }, disabled: { type: Boolean, default: false } }, emits: ["change"], setup(t, { emit: n }) {
        const a = k((N) => {
          t.disabled && N.push("cc-switch-disabled");
        }, ["cc-switch"]), c = { mini: 60 + "px", small: 70 + "px", medium: 80 + "px", large: 90 + "px" }, o = e.reactive({ "--left": 1 + "px", "--bg": "#bdc3c7", "--w": c[t.size] }), s = e.computed(() => o), [r, f] = V(t.inactiveValue), [u, l] = V(t.value), i = () => {
          t.disabled || (l(!u.value), u.value && (f(t.checkedValue), o["--left"] = +c[t.size].split("p")[0] - 30 + "px", o["--bg"] = "#3498db"), u.value || (f(t.inactiveValue), o["--left"] = 1 + "px", o["--bg"] = "#bdc3c7"), n("change", r.value));
        };
        return () => e.createVNode("div", { class: a, style: s.value, onClick: i }, null);
      } });
      var tt = "";
      const ne = e.defineComponent({ name: "cc-link", props: { type: { type: String, default: "default" }, underline: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, href: String }, setup(t, { slots: n }) {
        const a = k((c) => {
          t.type && c.push(`cc-link-${t.type}`), t.underline && c.push("cc-link-underline"), t.disabled && c.push("cc-link-disabled");
        }, ["cc-link"]);
        return () => {
          var c;
          return e.createVNode("a", { class: a, href: t.disabled ? "javascript:void(0)" : t.href }, [(c = n.default) == null ? void 0 : c.call(n)]);
        };
      } }), fe = C(w), ge = C(H), me = C(j), ye = C(_), Ce = C(K), be = C(Z), Ne = C(J), Ve = C(Q), ae = {};
      ae.install = (t) => {
        t.config.globalProperties.$toast = I;
      };
      const he = C(U), Se = C(X), ke = C($), we = C(Y), xe = C(z), Te = C(ee), Be = C(L), Me = C(te), je = C(ne), $e = [w, H, j, _, K, Z, J, Q, D, U, Y, z, ee, L, te, ne, X, $], ce = (t) => {
        t.config.globalProperties.$useTheme = de, t.config.globalProperties.$messageFn = I, $e.map((n) => {
          t.component(n.name, n);
        });
      };
      var Ie = { install: ce };
      p.CcButton = fe, p.CcCard = ge, p.CcDrawer = Ce, p.CcInput = me, p.CcLink = je, p.CcLoading = ye, p.CcMessage = ae, p.CcPagination = he, p.CcPopup = Ve, p.CcRating = Ne, p.CcSkeleton = Se, p.CcSkeletonItem = ke, p.CcStep = xe, p.CcSteps = we, p.CcSwitch = Me, p.CcTab = Be, p.CcTabs = Te, p.CcTips = be, p.default = Ie, p.install = ce, Object.defineProperty(p, "__esModule", { value: true }), p[Symbol.toStringTag] = "Module";
    });
  }
});

export {
  require_lib
};
//# sourceMappingURL=chunk-HVNY2EYZ.js.map
