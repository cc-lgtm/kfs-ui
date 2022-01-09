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
    (function(p, e) {
      typeof exports == "object" && typeof module != "undefined" ? e(exports, (init_runtime_dom_esm_bundler(), runtime_dom_esm_bundler_exports)) : typeof define == "function" && define.amd ? define(["exports", "vue"], e) : (p = typeof globalThis != "undefined" ? globalThis : p || self, e(p.index = {}, p.Vue));
    })(exports, function(p, e) {
      "use strict";
      var Le = "", Fe = "", Pe = "";
      const D = () => e.createVNode("div", { class: "loadLine" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Ae = "";
      const O = () => e.createVNode("div", { class: "loadEffect" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Ee = "";
      const R = () => e.createVNode("div", { class: "loadrect" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var De = "";
      const W = () => e.createVNode("div", { class: "loadback" }, [e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null), e.createVNode("span", null, null)]);
      var Oe = "";
      const q = () => e.createVNode("div", { class: "loadbackline" }, [e.createVNode("span", null, null)]), _ = e.defineComponent({ name: "cc-loading", components: { Line: D, Effect: O, Rect: R, Back: W, BackLine: q }, props: { type: { type: String, default: "line" } }, setup(t) {
        const n = () => ({ effect: e.createVNode(O, null, null), line: e.createVNode(D, null, null), rect: e.createVNode(R, null, null), back: e.createVNode(W, null, null), backLine: e.createVNode(q, null, null) })[t.type];
        return () => e.createVNode(e.Fragment, null, [n()]);
      } }), V = (t) => {
        const n = e.ref(t), a = (o) => {
          typeof o == "function" ? o() : n.value = o;
        };
        return [e.readonly(n), a];
      }, oe = (t, n) => {
        const a = {};
        n == null || n.map((o, c) => {
          a[o] = o;
        }), e.watchEffect(t, a);
      }, j = { getContext: (t, n) => {
        e.provide(t, n);
      }, setContext: (t, n) => e.inject(t, n) }, re = (t) => Object.prototype.toString.call(t), se = { "[object String]": "string", "[object Number]": "number", "[object Object]": "object" }, ie = (t) => {
        const n = se[re(t)], a = [];
        if (n !== "object")
          for (let o = 0; o < +t; o++)
            a.push(o);
        if (n === "object") {
          const o = Object.keys(t);
          let c;
          for (c of o) {
            const r = {};
            r[c] = t[c], a.push(r);
          }
        }
        return a;
      }, de = (t) => t, C = (t) => (t.install = (n) => {
        const { name: a } = t;
        n.component(a, t);
      }, t), k = (t, n) => {
        const a = de([...n]);
        return oe(() => t(a), a), a.join(" ");
      }, w = (t) => {
        const n = {};
        return ie(t).map((a, o) => {
          const c = Object.keys(a);
          n[c[0]] = a[c[0]];
        }), n;
      }, x = e.defineComponent({ name: "cc-button", components: { CcLoading: _ }, props: { class: { type: String }, type: { type: String, default: "default" }, size: { type: String, default: "medium" }, circle: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, isLoading: { type: Boolean, default: false }, round: { type: [Number, String], default: 0 } }, emits: ["click"], setup(t, { emit: n, slots: a }) {
        const o = (l) => {
          t.isLoading || t.disabled || n("click", l);
        }, c = k((l) => {
          t.type && l.push(`cc-button-${t.type}`), t.isLoading && l.push("cc-button-isLoading"), t.circle && l.push("cc-button-isCircle"), t.disabled && l.push("cc-button-isDisabled"), t.class && l.push(t.class);
        }, ["cc-button"]), r = typeof t.round == "string" ? +t.round : t.round, s = { large: 200, medium: 150, small: 100, mini: 50 }, f = w({ "--round": r + "px", "--size": s[t.size] + "px" }), u = () => {
          const l = a.icon, i = a.default;
          return t.isLoading ? e.createVNode(e.resolveComponent("cc-loading"), null, null) : e.createVNode(e.Fragment, null, [l ? e.createVNode("div", { class: "icon" }, [l()]) : i == null ? void 0 : i()]);
        };
        return () => e.createVNode(e.Fragment, null, [e.createVNode("button", { class: c, onClick: o, style: f }, [u()])]);
      } });
      var Re = "";
      const G = e.defineComponent({ name: "cc-card", props: { icon: { type: String }, value: { type: String, default: "icon" }, class: { type: String }, shadow: { type: String, default: "always" } }, emits: ["click"], setup(t, { emit: n, slots: a }) {
        const o = (r) => {
          n("click", r);
        }, c = k((r) => {
          t.class && r.push(t.class), t.shadow && r.push(`cc-card-${t.shadow}`);
        }, ["cc-card"]);
        return () => {
          var r;
          return e.createVNode("div", { class: c, onClick: o }, [e.createVNode("img", { src: t.icon, alt: "icon" }, null), e.createVNode("span", null, [t.value]), (r = a.default) == null ? void 0 : r.call(a)]);
        };
      } });
      var We = "";
      const $ = e.defineComponent({ name: "cc-input", props: { value: { type: String }, size: { type: String, default: "medium" }, leftIcon: { type: String }, rightIcon: { type: String }, type: { type: String, default: "text" }, tips: { type: String, default: "\u8BF7\u8F93\u5165..." }, leftText: { type: String }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, className: { type: String } }, emits: ["input", "click", "inputChange", "foucs", "blur"], setup(t, { slots: n, emit: a }) {
        const o = k((m) => {
          t.className && m.push(t.className);
        }, ["cc-input"]), c = { large: ["250px", "35px", "20px"], medium: ["200px", "30px", "18px"], small: ["150px", "25px", "16px"], mini: ["100px", "15px", "14px"] }, r = w({ "--w": c[t.size][0], "--h": c[t.size][1], "--size": c[t.size][2] }), [s, f] = V(""), u = (m) => {
          t.disabled || (f(m.target.value), a("input", s.value));
        };
        e.watch(s, (m, B) => {
          a("inputChange", m, B);
        });
        const l = (m) => {
          a("click", m);
        }, i = (m) => a("foucs", m), N = (m) => a("blur", m);
        return () => {
          var m;
          return e.createVNode("div", { class: o, style: r }, [t.leftText && e.createVNode("span", { class: "title" }, [t.leftText]), t.leftIcon && e.createVNode("img", { src: t.leftIcon, alt: "left-icon", class: "left-icon" }, null), e.createVNode("input", { type: t.type, value: t.value, disabled: t.disabled, readonly: t.readonly, onInput: u, onFocus: i, onBlur: N, placeholder: t.tips, class: t.disabled ? "disabled" : "" }, null), t.rightIcon && e.createVNode("img", { src: t.rightIcon, alt: "right-icon", class: "right-icon", onClick: l }, null), (m = n.default) == null ? void 0 : m.call(n)]);
        };
      } });
      var qe = "";
      const H = e.defineComponent({ name: "cc-drawer", props: { vModel: { type: Boolean, default: true }, position: { type: String, default: "right" }, width: { type: String, default: "15%" } }, emits: ["opened", "closed"], setup(t, { emit: n, slots: a }) {
        const o = e.onMounted(() => {
          const [l, i] = V(document.body.scrollWidth + "px");
          return window.onresize = () => {
            i(document.body.scrollWidth + "px");
          }, l.value;
        }), c = () => {
          const l = t.position, i = e.reactive({});
          return l === "left" && (i["--position_top"] = 0, i["--position_left"] = 0, i["--mask_top"] = 0, i["--mask_left"] = 100 + "%", i["--animation_name"] = "FadeInL"), l === "right" && (i["--position_top"] = 0, i["--position_right"] = 0, i["--mask_top"] = 0, i["--mask_right"] = 100 + "%", i["--animation_name"] = "FadeInR"), i;
        }, r = e.computed(() => {
          const l = { "--shadow": o, "--w": t.width };
          return Object.assign(l, c());
        }), [s, f] = V(false);
        e.onMounted(() => {
          f(true), n("opened", s.value);
        });
        const u = (l) => {
          const i = document.querySelector(".cc-drawer-box");
          i && (i.contains(l.target) || f(false));
        };
        return () => {
          var l;
          return s.value && t.vModel && e.createVNode("div", { class: "cc-drawer", style: r.value, onClick: u }, [e.createVNode("div", { class: "cc-drawer-box" }, [(l = a.default) == null ? void 0 : l.call(a)])]);
        };
      } });
      var Ge = "";
      const K = e.defineComponent({ name: "cc-tips", props: { tips: { type: String }, class: { type: String }, color: { type: String, default: "#57606f" } }, emits: ["hover", "hoverout"], setup(t, { slots: n, emit: a }) {
        const [o, c] = V(false), r = (l) => {
          c(true), a("hover", l);
        }, s = (l) => {
          c(false), a("hoverout", l);
        }, f = w({ "--color": t.color, "--opacity": o.value ? 1 : 0 }), u = k((l) => {
          t.class && l.push(t.class);
        }, ["cc-tips"]);
        return () => {
          var l;
          return e.createVNode("div", { class: u, onMouseover: r, onMouseout: s }, [(l = n.default) == null ? void 0 : l.call(n), e.createVNode("div", { class: "hover-tips", style: f }, [t.tips])]);
        };
      } });
      var He = "";
      const ue = () => e.createVNode("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7076", width: "20", height: "20" }, [e.createVNode("path", { d: "M793.6 972.8c-4.1984 0-8.3968-1.024-12.2368-3.1232l-269.3632-146.8928-269.3632 146.8928c-8.6016 4.7104-19.0976 4.0448-27.0848-1.6384s-12.032-15.4112-10.3936-25.088l49.0496-294.1952-195.4816-195.4816c-6.7584-6.7584-9.216-16.7936-6.2976-25.9072s10.7008-15.872 20.1728-17.4592l294.3488-49.0496 122.1632-244.3264c4.352-8.6528 13.2096-14.1312 22.8864-14.1312s18.5856 5.4784 22.8864 14.1312l122.1632 244.3264 294.3488 49.0496c9.472 1.5872 17.2544 8.2944 20.1728 17.4592s0.512 19.1488-6.2976 25.9072l-195.4816 195.4816 49.0496 294.1952c1.5872 9.6768-2.4576 19.4048-10.3936 25.088-4.4032 3.1232-9.6256 4.7616-14.848 4.7616zM512 768c4.1984 0 8.448 1.024 12.2368 3.1232l235.4688 128.4096-42.5472-255.3344c-1.3824-8.1408 1.28-16.4864 7.168-22.3232l169.6256-169.6256-258.1504-43.008c-8.0896-1.3312-15.0016-6.5024-18.688-13.824l-105.1136-210.2272-105.1136 210.2272c-3.6864 7.3216-10.5984 12.4416-18.688 13.824l-258.1504 43.008 169.6256 169.6256c5.8368 5.8368 8.4992 14.1312 7.168 22.3232l-42.5472 255.3344 235.4688-128.4096c3.84-2.0992 8.0384-3.1232 12.2368-3.1232z", "p-id": "7077", fill: "#C6D1DE" }, null)]), pe = () => e.createVNode("svg", { class: "icon", viewBox: "0 0 1093 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8272", width: "20", height: "20" }, [e.createVNode("path", { d: "M546.133333 819.2 225.122987 987.962027 286.43328 630.51776 26.7264 377.371307 385.631573 325.215573 546.133333 0 706.635093 325.215573 1065.540267 377.371307 805.833387 630.51776 867.14368 987.962027Z", "p-id": "8273", fill: "#f4ea2a" }, null)]), Z = e.defineComponent({ name: "cc-rating", props: { value: { type: String, default: "0" }, max: { type: Number, default: 5 }, disabled: { type: Boolean, default: false }, allowHalf: { type: Boolean, default: false }, colors: { type: Array }, voidColor: { type: String, default: "#C6D1DE" }, showText: { type: Boolean, default: false }, showScore: { type: Boolean, default: false } }, emits: ["mouse"], setup(t, { emit: n, slots: a }) {
        const o = () => {
          const y = e.reactive(["#F7BA2A", "#F7BA2A", "#F7BA2A"]);
          return t.colors && y.splice(0, 3).push(...t.colors), {};
        }, c = e.reactive({ star1: true, star2: false, star3: false, star4: false, star5: false }), [r, s] = V(false), [f, u] = V(0), l = (y) => {
          for (let b = 0; b < y; b++)
            c["star" + (b + 1)] = true;
          for (let b = 5; b > y; b--)
            c["star" + b] = false;
        }, i = (y, b) => {
          const S = +b.slice(4, 5);
          u(S), l(S), n("mouse", y);
        }, N = () => {
          if (!r.value) {
            u(0);
            for (let y = 0; y <= 5; y++)
              c["star" + (y + 1)] = false;
          }
        }, m = () => {
          s(true);
        }, B = e.computed(() => ({ 1: "\u6781\u5DEE", 2: "\u5931\u671B", 3: "\u4E00\u822C", 4: "\u6EE1\u610F", 5: "\u60CA\u559C" })[f.value]), F = e.computed(() => t.value ? (+t.value).toFixed(1) : f.value === 0 ? "" : f.value.toFixed(1)), P = () => {
          const y = +t.value;
          u(y), l(y);
        };
        t.value && P(), e.watch(c, (y, b) => {
          if (r.value)
            for (let S = 0; S < 5; S++)
              c["star" + (S + 1)] = b["star" + (S + 1)];
        }), t.disabled && Object.freeze(c);
        const A = () => [1, 2, 3, 4, 5].map((y, b) => e.createVNode("div", { onMouseover: (S) => i(S, `star${b + 1}`) }, [c[`star${b + 1}`] ? pe() : ue()]));
        return () => e.createVNode("div", { class: "cc-rate", onMouseout: N, onClick: m, style: o() }, [A(), t.showText && e.createVNode("span", null, [B.value]), t.showScore && e.createVNode("span", null, [F.value])]);
      } });
      var Ke = "";
      const J = e.defineComponent({ name: "cc-popup", components: { CcButton: x, CcInput: $ }, props: { type: { type: String, default: "upload  " }, title: { type: String, default: "title" }, content: { type: String, default: "content" } }, emits: ["close", "confirm"], setup(t, { emit: n, slots: a }) {
        const [o, c] = V(true), r = (u) => {
          c(false), n("close", u);
        }, s = (u) => {
          c(false), n("confirm", u);
        }, f = () => t.type === "confirm" ? e.createVNode("div", { class: "content" }, [t.content]) : e.createVNode($, { className: "input" }, null);
        return () => {
          var u;
          return o.value && e.createVNode("div", { class: "cc-popup" }, [e.createVNode("div", { class: "cc-popup-box" }, [e.createVNode("div", { class: "top" }, [e.createVNode("span", { class: "title" }, [t.title])]), f(), e.createVNode("div", { class: "btns" }, [t.type !== "message" && e.createVNode(x, { onClick: r }, { default: () => [e.createTextVNode("\u53D6\u6D88")] }), e.createVNode(x, { type: "success", onClick: s }, { default: () => [e.createTextVNode("\u786E\u5B9A")] })])]), (u = a.default) == null ? void 0 : u.call(a)]);
        };
      } });
      var Ze = "";
      const fe = e.defineComponent({ name: "cc-message", components: { TransitionGroup: e.TransitionGroup, Transition: e.Transition }, props: { text: { type: String, default: "" }, type: { type: String, default: "default" }, top: { type: String, default: "15" } }, setup(t, { slots: n }) {
        const a = { default: { "--color": "#fff", "--backgroundColor": "rgb(236, 240, 241)", "--borderColor": "rgb(233, 230, 221)" }, warn: { "--color": "#E6A23C", "--backgroundColor": "rgb(253, 246, 236)", "--borderColor": "rgb(250, 236, 216)" }, error: { "--color": "#F56C6C", "--backgroundColor": "rgb(254, 240, 240)", "--borderColor": "rgb(253, 226, 226)" }, success: { "--color": "#67C23A", "--backgroundColor": "rgb(240, 249, 235)", "--borderColor": "rgb(225, 243, 216)" } }, [o, c] = V(false);
        e.onMounted(() => {
          c(true);
        });
        const r = e.computed(() => Object.assign(a[t.type], { "--top": t.top + "px" }));
        return () => e.createVNode(e.TransitionGroup, { appear: false, persisted: false }, { default: () => [e.createVNode(e.Transition, { name: "down", mode: void 0 }, { default: () => {
          var s;
          return [o.value && e.createVNode("div", { class: "cc-message", style: r.value }, [e.createVNode("span", { class: "text" }, [t.text])]), (s = n.default) == null ? void 0 : s.call(n)];
        } })] });
      } });
      var Je = "";
      let T;
      e.onMounted(() => {
        T = document.createElement("div"), T.setAttribute("class", "cc-message"), document.body.appendChild(T);
      });
      const Q = e.ref(null);
      var z = ({ type: t, text: n }) => {
        const a = e.createVNode(z, { type: t, text: n });
        e.render(a, T), clearTimeout(Q), Q.value = setTimeout(() => {
          e.render(null, T);
        }, 2e3);
      };
      const U = e.defineComponent({ name: "cc-pagination", props: { background: { type: Boolean, default: false }, pageSize: { type: Number, default: 10 }, total: { type: Number, required: true }, prevText: { type: String }, nextText: { type: String }, currentPage: { type: Number, default: 1 }, layout: { type: String, default: "total, prev, pager, next, jumper" } }, emits: ["currentChange", "prevClick", "nextClick"], setup(t, { emit: n, slots: a }) {
        const o = () => t.prevText || "<", c = () => t.nextText || ">", r = e.computed(() => Math.ceil(t.total / t.pageSize)), [s, f] = V(), u = (d) => {
          if (d !== "pre" && d !== "next" && f(d), d === "pre") {
            if (s.value === 1)
              return;
            s.value -= 1, f(s.value--), n("prevClick", s.value);
          }
          if (d === "next") {
            if (s.value === r.value)
              return;
            f(s.value++), n("nextClick", s.value);
          }
        };
        e.watch(s, () => {
          n("currentChange", s.value);
        });
        const l = () => {
          const d = [];
          for (let g = 1; g <= r.value; g++)
            d.push({ pager: g, currentChange: (h) => u(h) });
          return d;
        }, i = (d) => {
          const g = ["pager"];
          return t.background && g.push("background"), s.value === d + 1 && (t.background ? g.push("currentBg") : g.push("currentPager")), g.join(" ");
        }, N = k((d) => {
          t.background && d.push("background"), s.value === 1 && d.push("is_end");
        }, ["change_pager"]), m = k((d) => {
          t.background && d.push("background"), s.value === r.value && d.push("is_end");
        }, ["change_pager"]), B = () => e.createVNode("div", { class: "total" }, [e.createTextVNode("\u5171 "), t.total, e.createTextVNode(" \u6761")]), F = () => e.createVNode("div", { class: N, onClick: () => u("pre") }, [o()]), P = () => e.createVNode("div", { class: "pagers" }, [l().map((d, g) => e.createVNode("span", { class: i(g), key: "change_pager" + g, onClick: () => {
          var h;
          return (h = d.currentChange) == null ? void 0 : h.call(d, d.pager);
        } }, [d.pager ? d.pager : "..."]))]), A = () => e.createVNode("div", { class: m, onClick: () => u("next") }, [c()]), y = () => e.createVNode("div", { class: "jumper" }, [e.createVNode("span", null, [e.createTextVNode("\u524D\u5F80")]), e.createVNode("input", { type: "text", value: le.value, onInput: ze, onKeydown: ve }, null), e.createVNode("span", null, [e.createTextVNode("\u9875")])]), b = () => {
          var d;
          return e.createVNode(e.Fragment, null, [(d = a.default) == null ? void 0 : d.call(a)]);
        }, S = () => {
          const d = t.layout.split(", "), g = [];
          return d.forEach((h, M) => {
            h === "total" && g.splice(M, 0, B), h === "prev" && g.splice(M, 0, F), h === "pager" && g.splice(M, 0, P), h === "next" && g.splice(M, 0, A), h === "jumper" && g.splice(M, 0, y);
          }), g.push(b), g.map((h) => h());
        }, [le, E] = V(), ze = (d) => {
          const g = d.target.value;
          if (g !== "" && typeof +g != "number" && z({ type: "error", text: "\u8BF7\u8F93\u5165\u6570\u5B57" }), +g < 1) {
            E(1);
            return;
          }
          if (+g > r.value) {
            E(r.value);
            return;
          }
          E(+g);
        }, ve = (d) => {
          d && d.code === "Enter" && f(le.value);
        };
        return () => e.createVNode("div", { class: "cc-pagination" }, [S()]);
      } });
      var Qe = "";
      const I = e.defineComponent({ name: "cc-skeleton-item", props: { variable: { type: String, default: "text" } }, setup(t) {
        const n = j.setContext("animated"), a = j.setContext("w", "200px"), c = w({ "--w": a, "--h": { button: "40px", caption: "30px", circle: a, h: "20px", image: "200px", p: "15px", rect: "100px", text: "15px" }[t.variable], "--r": t.variable === "circle" ? "50%" : "5px", "--animation": n ? "loading .8s infinite ease" : "" });
        return () => e.createVNode("div", { class: "cc-skeleton-item", style: c }, null);
      } }), X = e.defineComponent({ name: "cc-skeleton", components: { CcSkeletonItem: I }, props: { loading: { type: Boolean, default: false }, rows: { type: Number, default: 0 }, rowsWidth: { type: Array }, animated: { type: Boolean, default: false } }, setup(t, { slots: n }) {
        j.getContext("animated", t.animated);
        const a = (r) => ({ "--w": t.rowsWidth ? t.rowsWidth[r] : "200px" }), o = () => {
          const r = e.reactive([]);
          for (let s = 0; s < t.rows; s++)
            j.getContext("w", s), r.push(e.createVNode(I, { variable: "text", style: a(s) }, null));
          return r.map((s) => s);
        }, c = () => {
          var r;
          return t.rows ? o() : (r = n.default) == null ? void 0 : r.call(n);
        };
        return () => e.createVNode("div", { class: "cc-skeleton" }, [t.loading && c()]);
      } });
      var Ue = "";
      const v = e.defineComponent({ name: "cc-step", props: { title: { type: String }, description: { type: String }, icon: { type: String } }, setup(t) {
        const n = () => t.icon ? e.createVNode("img", { class: "icon", src: t.icon, alt: "icon" }, null) : e.createVNode("div", { class: "simple" }, null);
        return () => e.createVNode("div", { class: "cc-stepitem" }, [n(), e.createVNode("span", { class: "title" }, [t.title]), e.createVNode("div", { class: "description" }, [t.description])]);
      } });
      var Xe = "";
      const Y = e.defineComponent({ name: "cc-steps", components: { CcStepItem: v }, props: { space: { type: [Number, String] }, direction: { type: String, default: "horizontal" }, active: { type: Number, default: 0 }, processStatus: { type: String, default: "process" }, finishStatus: { type: String, default: "finish" }, alignCenter: { type: Boolean, default: false } }, setup(t, { slots: n }) {
        var u;
        const a = (u = n.default) == null ? void 0 : u.call(n), o = +t.space, c = w({ "--width": o * (a.length - 1) + "px" }), r = (l) => {
          const i = { "--line": +t.space - 12 + "px" };
          return l === 0 && Object.assign(i, { "--show": "none" }), i;
        }, s = (l) => l + 1 <= t.active ? { border: "2px solid #3498db" } : { "--border": "2px solid #000" }, f = () => a.map((l, i) => e.createVNode("div", { class: "cc-stepbar-box", key: i, style: s(i) }, [l, e.createVNode("span", { class: "cc-stepbar-box-index" }, [i + 1]), e.createVNode("span", { class: "cc-stepbar-box-line", style: r(i) }, null)]));
        return () => e.createVNode("div", { class: "cc-stepbar", style: c }, [f().map((l) => l)]);
      } });
      var Ye = "";
      const L = e.defineComponent({ name: "cc-tab", props: { title: { type: String } }, setup(t, { slots: n }) {
        return () => {
          var a;
          return e.createVNode("div", { class: "cc-tab" }, [e.createVNode("span", { class: "cc-tab-title" }, [t.title]), e.createVNode("div", { class: "cc-tab-context" }, [(a = n.default) == null ? void 0 : a.call(n)])]);
        };
      } });
      var et = "";
      const ee = e.defineComponent({ name: "cc-tabs", components: { CcTap: L }, props: { active: { type: [Number, String], default: 0 } }, emits: ["change", "click"], setup(t, { slots: n, emit: a }) {
        var l;
        const o = (l = n.default) == null ? void 0 : l.call(n), [c, r] = V(t.active);
        e.watch(c, () => {
          a("change", c.value);
        });
        const s = (i) => {
          const N = ["cc-tabs-box"];
          return i === c.value && N.push("active"), N.join(" ");
        }, f = (i, N) => {
          r(N), a("click", i);
        }, u = () => o == null ? void 0 : o.map((i, N) => e.createVNode("div", { class: s(N), key: N, onClick: (m) => f(m, N) }, [i]));
        return () => e.createVNode("div", { class: "cc-tabs" }, [u()]);
      } });
      var tt = "";
      const te = e.defineComponent({ name: "cc-switch", props: { value: { type: Boolean, default: false }, checkedValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, size: { type: String, default: "medium" }, disabled: { type: Boolean, default: false } }, emits: ["change"], setup(t, { emit: n }) {
        const a = k((N) => {
          t.disabled && N.push("cc-switch-disabled");
        }, ["cc-switch"]), o = { mini: 60 + "px", small: 70 + "px", medium: 80 + "px", large: 90 + "px" }, c = e.reactive({ "--left": 1 + "px", "--bg": "#bdc3c7", "--w": o[t.size] }), r = w(c), [s, f] = V(t.inactiveValue), [u, l] = V(t.value), i = () => {
          t.disabled || (l(!u.value), u.value && (f(t.checkedValue), c["--left"] = +o[t.size].split("p")[0] - 30 + "px", c["--bg"] = "#3498db"), u.value || (f(t.inactiveValue), c["--left"] = 1 + "px", c["--bg"] = "#bdc3c7"), n("change", s.value));
        };
        return () => e.createVNode("div", { class: a, style: r.value, onClick: i }, null);
      } });
      var nt = "";
      const ne = e.defineComponent({ name: "cc-link", props: { type: { type: String, default: "default" }, underline: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, href: String }, setup(t, { slots: n }) {
        const a = k((o) => {
          t.type && o.push(`cc-link-${t.type}`), t.underline && o.push("cc-link-underline"), t.disabled && o.push("cc-link-disabled");
        }, ["cc-link"]);
        return () => {
          var o;
          return e.createVNode("a", { class: a, href: t.disabled ? "javascript:void(0)" : t.href }, [(o = n.default) == null ? void 0 : o.call(n)]);
        };
      } }), ge = C(x), me = C(G), ye = C($), Ce = C(_), be = C(H), Ne = C(K), Ve = C(Z), he = C(J), ae = {};
      ae.install = (t) => {
        t.config.globalProperties.$toast = z;
      };
      const Se = C(U), ke = C(X), we = C(I), xe = C(Y), Te = C(v), Be = C(ee), Me = C(L), je = C(te), $e = C(ne), Ie = [x, G, $, _, H, K, Z, J, fe, U, Y, v, ee, L, te, ne, X, I], ce = (t) => {
        Ie.map((n) => {
          t.component(n.name, n);
        });
      };
      var _e = { install: ce };
      p.CcButton = ge, p.CcCard = me, p.CcDrawer = be, p.CcInput = ye, p.CcLink = $e, p.CcLoading = Ce, p.CcMessage = ae, p.CcPagination = Se, p.CcPopup = he, p.CcRating = Ve, p.CcSkeleton = ke, p.CcSkeletonItem = we, p.CcStep = Te, p.CcSteps = xe, p.CcSwitch = je, p.CcTab = Me, p.CcTabs = Be, p.CcTips = Ne, p.default = _e, p.install = ce, Object.defineProperty(p, "__esModule", { value: true }), p[Symbol.toStringTag] = "Module";
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
