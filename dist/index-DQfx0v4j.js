import ho, { createContext as el, use as tl, useEffect as hn, useState as mi, useMemo as oa, useRef as la } from "react";
import nl from "clsx";
import { createPortal as fo } from "react-dom";
var bi = { exports: {} }, si = {};
var ca;
function il() {
  if (ca) return si;
  ca = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(n, r, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      s = {};
      for (var o in r)
        o !== "key" && (s[o] = r[o]);
    } else s = r;
    return r = s.ref, {
      $$typeof: i,
      type: n,
      key: a,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return si.Fragment = e, si.jsx = t, si.jsxs = t, si;
}
var ai = {};
var ua;
function rl() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === S ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case d:
          return "Fragment";
        case b:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case A:
          return "SuspenseList";
        case g:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case M:
            return "Portal";
          case T:
            return D.displayName || "Context";
          case E:
            return (D._context.displayName || "Context") + ".Consumer";
          case k:
            var ie = D.render;
            return D = D.displayName, D || (D = ie.displayName || ie.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case O:
            return ie = D.displayName || null, ie !== null ? ie : i(D.type) || "Memo";
          case Q:
            ie = D._payload, D = D._init;
            try {
              return i(D(ie));
            } catch {
            }
        }
      return null;
    }
    function e(D) {
      return "" + D;
    }
    function t(D) {
      try {
        e(D);
        var ie = !1;
      } catch {
        ie = !0;
      }
      if (ie) {
        ie = console;
        var xe = ie.error, B = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return xe.call(
          ie,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), e(D);
      }
    }
    function n(D) {
      if (D === d) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === Q)
        return "<...>";
      try {
        var ie = i(D);
        return ie ? "<" + ie + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var D = V.A;
      return D === null ? null : D.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(D) {
      if (H.call(D, "key")) {
        var ie = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ie && ie.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function o(D, ie) {
      function xe() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ie
        ));
      }
      xe.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: xe,
        configurable: !0
      });
    }
    function l() {
      var D = i(this.type);
      return J[D] || (J[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function c(D, ie, xe, B, $, fe) {
      var ee = xe.ref;
      return D = {
        $$typeof: v,
        type: D,
        key: ie,
        props: xe,
        _owner: B
      }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(D, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function u(D, ie, xe, B, $, fe) {
      var ee = ie.children;
      if (ee !== void 0)
        if (B)
          if (X(ee)) {
            for (B = 0; B < ee.length; B++)
              f(ee[B]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ee);
      if (H.call(ie, "key")) {
        ee = i(D);
        var Te = Object.keys(ie).filter(function(Ie) {
          return Ie !== "key";
        });
        B = 0 < Te.length ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}", le[ee + B] || (Te = 0 < Te.length ? "{" + Te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          ee,
          Te,
          ee
        ), le[ee + B] = !0);
      }
      if (ee = null, xe !== void 0 && (t(xe), ee = "" + xe), a(ie) && (t(ie.key), ee = "" + ie.key), "key" in ie) {
        xe = {};
        for (var ye in ie)
          ye !== "key" && (xe[ye] = ie[ye]);
      } else xe = ie;
      return ee && o(
        xe,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), c(
        D,
        ee,
        xe,
        r(),
        $,
        fe
      );
    }
    function f(D) {
      p(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === Q && (D._payload.status === "fulfilled" ? p(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function p(D) {
      return typeof D == "object" && D !== null && D.$$typeof === v;
    }
    var m = ho, v = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.client.reference"), V = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, X = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var z, J = {}, G = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), oe = K(n(s)), le = {};
    ai.Fragment = d, ai.jsx = function(D, ie, xe) {
      var B = 1e4 > V.recentlyCreatedOwnerStacks++;
      return u(
        D,
        ie,
        xe,
        !1,
        B ? Error("react-stack-top-frame") : G,
        B ? K(n(D)) : oe
      );
    }, ai.jsxs = function(D, ie, xe) {
      var B = 1e4 > V.recentlyCreatedOwnerStacks++;
      return u(
        D,
        ie,
        xe,
        !0,
        B ? Error("react-stack-top-frame") : G,
        B ? K(n(D)) : oe
      );
    };
  })()), ai;
}
var ha;
function sl() {
  return ha || (ha = 1, process.env.NODE_ENV === "production" ? bi.exports = il() : bi.exports = rl()), bi.exports;
}
var re = sl();
const Gs = el(void 0), Ct = () => {
  const i = tl(Gs);
  if (!i)
    throw new Error("useSystem must be used within a NeuralProvider");
  return i;
}, Rt = (...i) => nl(...i), ks = ({
  children: i,
  variant: e = "primary",
  size: t = "md",
  className: n,
  onClick: r,
  ...s
}) => {
  const { engine: a } = Ct(), o = (f) => {
    if (a) {
      const p = f.currentTarget.getBoundingClientRect(), m = p.left + p.width / 2, v = p.top + p.height / 2;
      a.emitPulse(m, v, 1.25);
    }
    r && r(f);
  }, l = "jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest", c = {
    primary: "jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",
    secondary: "jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",
    outline: "border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",
    ghost: "text-white/40 hover:text-white hover:bg-white/5 bg-transparent"
  }, u = {
    sm: "px-4 py-1.5 text-[8px]",
    md: "px-8 py-2.5 text-[10px]",
    lg: "px-12 py-4 text-[12px] font-black"
  };
  return /* @__PURE__ */ re.jsxs(
    "button",
    {
      className: Rt(l, c[e], u[t], n),
      onClick: o,
      ...s,
      children: [
        /* @__PURE__ */ re.jsx("span", { className: "relative z-10", children: i }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity" })
      ]
    }
  );
}, al = ({
  title: i,
  value: e,
  trend: t,
  children: n,
  className: r,
  glow: s = !0
}) => {
  const { engine: a } = Ct(), o = (l) => {
    if (a) {
      const c = l.currentTarget.getBoundingClientRect(), u = c.left + c.width / 2, f = c.top + c.height / 2;
      a.emitPulse(u, f, 0.4);
    }
  };
  return /* @__PURE__ */ re.jsxs(
    "div",
    {
      onMouseEnter: o,
      className: Rt(
        "jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",
        s && "hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",
        r
      ),
      children: [
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
        /* @__PURE__ */ re.jsxs("div", { className: "relative z-10 flex flex-col space-y-4", children: [
          i && /* @__PURE__ */ re.jsx("h3", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500", children: i }),
          e !== void 0 && /* @__PURE__ */ re.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ re.jsx("span", { className: "text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500", children: e }),
            t && /* @__PURE__ */ re.jsx("span", { className: Rt(
              "jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500",
              t.direction === "up" ? "text-green-400 bg-green-400/10 group-hover:bg-green-400/20" : t.direction === "down" ? "text-red-400 bg-red-400/10 group-hover:bg-red-400/20" : "text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20"
            ), children: t.value })
          ] }),
          /* @__PURE__ */ re.jsx("div", { className: "text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500", children: n })
        ] }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" })
      ]
    }
  );
}, ol = ({
  label: i,
  glow: e = !0,
  className: t,
  onFocus: n,
  onChange: r,
  ...s
}) => {
  const { engine: a } = Ct(), o = (c) => {
    if (a) {
      const u = c.currentTarget.getBoundingClientRect();
      a.emitPulse(u.left + u.width / 2, u.top + u.height / 2, 0.8);
    }
    n && n(c);
  }, l = (c) => {
    if (a) {
      const u = c.currentTarget.getBoundingClientRect();
      a.emitPulse(u.left + u.width / 2, u.top + u.height / 2, 0.4);
    }
    r && r(c);
  };
  return /* @__PURE__ */ re.jsxs("div", { className: "jk-input-v2 flex flex-col space-y-3 group w-full", children: [
    i && /* @__PURE__ */ re.jsx("label", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1", children: i }),
    /* @__PURE__ */ re.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ re.jsx(
        "input",
        {
          onFocus: o,
          onChange: l,
          className: Rt(
            "w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300",
            "placeholder:text-white/20",
            e && "focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",
            t
          ),
          ...s
        }
      ),
      /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]" })
    ] })
  ] });
}, ll = ({
  variant: i = "accent",
  glow: e = !0,
  className: t,
  children: n,
  ...r
}) => {
  const { engine: s } = Ct(), a = (c) => {
    if (s) {
      const u = c.currentTarget.getBoundingClientRect();
      s.emitPulse(u.left + u.width / 2, u.top + u.height / 2, 0.2);
    }
  }, o = {
    accent: "text-neo-accent bg-neo-accent/10 border-neo-accent/20 group-hover:bg-neo-accent/20",
    glass: "text-white/80 bg-white/5 border-white/10 group-hover:bg-white/10",
    danger: "text-red-400 bg-red-400/10 border-red-400/20 group-hover:bg-red-400/20",
    warning: "text-amber-400 bg-amber-400/10 border-amber-400/20 group-hover:bg-amber-400/20",
    success: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:bg-emerald-400/20"
  }, l = {
    accent: "shadow-[0_0_15px_-3px_var(--neo-glow)]",
    glass: "shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]",
    danger: "shadow-[0_0_15px_-3px_rgba(248,113,113,0.3)]",
    warning: "shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)]",
    success: "shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]"
  };
  return /* @__PURE__ */ re.jsxs(
    "span",
    {
      onMouseEnter: a,
      className: Rt(
        "jk-badge-v2 group inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-[10px] uppercase font-bold tracking-widest border transition-all duration-300 backdrop-blur-md cursor-default",
        o[i],
        e && l[i],
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ re.jsx("span", { className: "w-1 h-1 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity" }),
        n
      ]
    }
  );
}, cl = ({
  columns: i = { base: 1, md: 2, lg: 3 },
  gap: e = "md",
  variant: t = "neural",
  className: n,
  children: r,
  ...s
}) => {
  const a = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8"
  }, o = i.base ? `grid-cols-${i.base}` : "grid-cols-1", l = i.md ? `md:grid-cols-${i.md}` : "", c = i.lg ? `lg:grid-cols-${i.lg}` : "", u = i.xl ? `xl:grid-cols-${i.xl}` : "";
  return /* @__PURE__ */ re.jsx(
    "div",
    {
      className: Rt(
        "grid w-full transition-all duration-300",
        o,
        l,
        c,
        u,
        a[e],
        t === "neural" && "relative z-10",
        // ensures neural structures render properly on top of background
        n
      ),
      ...s,
      children: r
    }
  );
}, ul = ({
  open: i,
  title: e,
  onClose: t,
  footer: n,
  children: r
}) => {
  const [s] = ho.useState(() => typeof document < "u" ? document.createElement("div") : null), { engine: a } = Ct();
  return hn(() => {
    if (s)
      return document.body.appendChild(s), () => {
        document.body.contains(s) && document.body.removeChild(s);
      };
  }, [s]), hn(() => {
    if (i && a) {
      const l = window.innerWidth / 2, c = window.innerHeight / 2;
      a.emitPulse(l, c, 1.5);
    }
  }, [i, a]), !i || !s ? null : fo(/* @__PURE__ */ re.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl transition-all duration-500 animate-in fade-in duration-300",
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ re.jsxs("div", { className: "jk-modal-v2 relative w-full max-w-xl mx-4 animate-in zoom-in-95 duration-500 rounded-[var(--neo-radius)]", children: [
        /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 jk-glass bg-white/5 border border-white/10 shadow-[0_0_80px_-20px_var(--neo-glow)] rounded-[var(--neo-radius)]" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 bg-neo-accent/20 blur-[100px] pointer-events-none -z-10" }),
        /* @__PURE__ */ re.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ re.jsxs("header", { className: "flex items-start justify-between px-8 py-6 border-b border-white/5", children: [
            e && /* @__PURE__ */ re.jsx("h3", { className: "jk-hud-heading text-lg font-bold text-white tracking-widest uppercase", children: e }),
            /* @__PURE__ */ re.jsx(ks, { variant: "ghost", onClick: t, "aria-label": "Close modal", className: "ml-auto", children: "✕" })
          ] }),
          /* @__PURE__ */ re.jsx("div", { className: "px-8 py-6 text-white/80 text-sm leading-relaxed max-h-[70vh] overflow-y-auto", children: r }),
          n && /* @__PURE__ */ re.jsx("footer", { className: "px-8 py-6 pt-4 border-t border-white/5 flex justify-end gap-4 items-center", children: n })
        ] }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 left-0 w-12 h-12 pointer-events-none border-t border-l border-white/30 rounded-tl-[var(--neo-radius)]" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-0 right-0 w-12 h-12 pointer-events-none border-b border-r border-white/30 rounded-br-[var(--neo-radius)]" })
      ] })
    }
  ), s);
}, hl = ({
  glow: i = !1,
  // Panels default to false to not overpower the screen
  className: e,
  children: t,
  ...n
}) => {
  const { engine: r } = Ct(), s = (a) => {
    if (r) {
      const o = a.currentTarget.getBoundingClientRect();
      r.emitPulse(o.left + o.width / 2, o.top + o.height / 2, 0.3);
    }
  };
  return /* @__PURE__ */ re.jsx(
    "div",
    {
      onMouseEnter: s,
      className: Rt(
        "jk-panel-v2 relative w-full jk-glass bg-black/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-700",
        i && "hover:border-white/10 hover:shadow-[0_0_50px_-15px_var(--neo-glow)] hover:bg-white/[0.02]",
        e
      ),
      ...n,
      children: /* @__PURE__ */ re.jsx("div", { className: "relative z-10 h-full w-full", children: t })
    }
  );
}, dl = ({ columns: i, data: e, className: t }) => {
  const { engine: n } = Ct(), r = (s) => {
    if (n) {
      const a = s.currentTarget.getBoundingClientRect(), o = a.left + a.width / 2, l = a.top + a.height / 2;
      n.emitPulse(o, l, 0.4);
    }
  };
  return /* @__PURE__ */ re.jsx("div", { className: Rt("jk-table-v2 w-full overflow-x-auto rounded-[var(--neo-radius)] border border-white/5 bg-white/[0.02] backdrop-blur-md", t), children: /* @__PURE__ */ re.jsxs("table", { className: "w-full text-left border-collapse", children: [
    /* @__PURE__ */ re.jsx("thead", { children: /* @__PURE__ */ re.jsx("tr", { className: "border-b border-white/10", children: i.map((s, a) => /* @__PURE__ */ re.jsx(
      "th",
      {
        className: "jk-hud-heading text-[10px] tracking-widest uppercase text-white/40 px-6 py-4 font-normal",
        children: s.header
      },
      a
    )) }) }),
    /* @__PURE__ */ re.jsxs("tbody", { className: "divide-y divide-white/5", children: [
      e.map((s, a) => /* @__PURE__ */ re.jsx(
        "tr",
        {
          onMouseEnter: r,
          className: "group transition-all duration-300 hover:bg-white/[0.04]",
          children: i.map((o, l) => /* @__PURE__ */ re.jsxs(
            "td",
            {
              className: "px-6 py-4 text-sm text-white/80 group-hover:text-neo-accent transition-colors duration-300 relative",
              children: [
                s[o.accessor],
                l === 0 && /* @__PURE__ */ re.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-[2px] bg-neo-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 shadow-[0_0_10px_var(--neo-glow)]" })
              ]
            },
            l
          ))
        },
        a
      )),
      e.length === 0 && /* @__PURE__ */ re.jsx("tr", { children: /* @__PURE__ */ re.jsx("td", { colSpan: i.length, className: "px-6 py-8 text-center text-white/30 text-xs tracking-widest uppercase jk-hud-heading", children: "NO DATA TOPOLOGIES FOUND" }) })
    ] })
  ] }) });
}, fl = ({
  tabs: i,
  value: e,
  defaultValue: t,
  onChange: n,
  className: r
}) => {
  const [s, a] = mi(t ?? i[0]?.id), o = e ?? s, { engine: l } = Ct(), c = (u, f, p) => {
    if (!p && (a(f), n?.(f), l)) {
      const m = u.currentTarget.getBoundingClientRect(), v = m.left + m.width / 2, M = m.bottom;
      l.emitPulse(v, M, 0.6);
    }
  };
  return /* @__PURE__ */ re.jsxs("div", { className: Rt("jk-tabs-v2 w-full flex flex-col space-y-6", r), children: [
    /* @__PURE__ */ re.jsx("div", { className: "relative flex border-b border-white/10", role: "tablist", children: i.map((u) => {
      const f = u.id === o;
      return /* @__PURE__ */ re.jsxs(
        "button",
        {
          role: "tab",
          "aria-selected": f,
          disabled: u.disabled,
          onClick: (p) => c(p, u.id, u.disabled),
          className: Rt(
            "relative px-6 py-4 jk-hud-heading text-[11px] tracking-widest uppercase transition-all duration-300",
            u.disabled && "opacity-30 cursor-not-allowed",
            !u.disabled && !f && "text-white/40 hover:text-white/80 hover:bg-white/[0.02]",
            f && "text-neo-accent bg-neo-accent/5"
          ),
          children: [
            u.label,
            f && /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-[-1px] left-0 right-0 h-[2px] bg-neo-accent shadow-[0_0_15px_var(--neo-glow)] animate-in fade-in slide-in-from-bottom-2 duration-300" }),
            f && /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neo-accent/10 to-transparent pointer-events-none" })
          ]
        },
        u.id
      );
    }) }),
    /* @__PURE__ */ re.jsxs("div", { className: "relative z-10 jk-glass p-6 border border-white/5 rounded-b-[var(--neo-radius)] rounded-tr-[var(--neo-radius)] bg-white/[0.01]", children: [
      i.map((u) => /* @__PURE__ */ re.jsx(
        "div",
        {
          role: "tabpanel",
          className: Rt(
            "transition-all duration-500",
            u.id === o ? "opacity-100 animate-in fade-in zoom-in-95" : "opacity-0 hidden"
          ),
          children: u.content
        },
        u.id
      )),
      /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-0 right-0 w-8 h-8 pointer-events-none border-b border-r border-white/10 rounded-br-[var(--neo-radius)]" })
    ] })
  ] });
}, pl = ({
  message: i,
  description: e,
  variant: t = "info",
  duration: n = 5e3,
  onClose: r,
  actionLabel: s,
  onAction: a
}) => {
  const [o] = mi(() => typeof document < "u" ? document.createElement("div") : null), { engine: l } = Ct(), [c, u] = mi(!0);
  hn(() => {
    if (o)
      return document.body.appendChild(o), () => {
        document.body.contains(o) && document.body.removeChild(o);
      };
  }, [o]), hn(() => {
    l && l.emitPulse(window.innerWidth - 50, 50, t === "error" ? 1 : 0.5);
  }, [l, t]), hn(() => {
    if (n > 0) {
      const v = setTimeout(() => {
        u(!1), setTimeout(r, 300);
      }, n);
      return () => clearTimeout(v);
    }
  }, [n, r]);
  const f = () => {
    u(!1), setTimeout(r, 300);
  };
  if (!o) return null;
  const p = {
    info: "border-neo-accent/30 shadow-[0_0_20px_-5px_var(--neo-glow)] text-neo-accent",
    success: "border-emerald-400/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)] text-emerald-400",
    warning: "border-amber-400/30 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)] text-amber-400",
    error: "border-red-500/40 shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] text-red-500"
  }, m = /* @__PURE__ */ re.jsx("div", { className: "fixed top-6 right-6 z-[100] flex flex-col items-end pointer-events-none", children: /* @__PURE__ */ re.jsxs(
    "div",
    {
      className: Rt(
        "jk-toast-v2 pointer-events-auto flex items-center gap-4 py-4 px-6 min-w-[320px] max-w-md jk-glass bg-black/60 border rounded-[var(--neo-radius)] backdrop-blur-xl transition-all duration-300",
        p[t],
        c ? "animate-in slide-in-from-right-10 fade-in" : "animate-out slide-out-to-right-10 fade-out"
      ),
      children: [
        /* @__PURE__ */ re.jsxs("div", { className: "flex-1 pr-2", children: [
          /* @__PURE__ */ re.jsx("p", { className: "font-bold tracking-wide uppercase text-[11px] mb-1 leading-tight text-white jk-hud-heading", children: i }),
          e && /* @__PURE__ */ re.jsx("p", { className: "text-sm text-white/60 leading-snug", children: e })
        ] }),
        s && a && /* @__PURE__ */ re.jsx(
          ks,
          {
            variant: "outline",
            onClick: a,
            className: "whitespace-nowrap px-3 py-1.5 min-h-0 text-[10px] bg-white/5 border-white/20",
            children: s
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            onClick: f,
            className: "text-white/40 hover:text-white transition-colors p-1",
            "aria-label": "Close toast",
            children: "✕"
          }
        ),
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 right-0 w-4 h-[1px] bg-current" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute top-0 right-0 h-4 w-[1px] bg-current" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-0 left-0 w-4 h-[1px] bg-current" }),
        /* @__PURE__ */ re.jsx("div", { className: "absolute bottom-0 left-0 h-4 w-[1px] bg-current" })
      ]
    }
  ) });
  return fo(m, o);
};
class po {
  nodes = [];
  edges = [];
  pulses = [];
  adjacency = /* @__PURE__ */ new Map();
  activeEdges = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Set();
  width;
  height;
  density = 45;
  // Pixels between nodes
  constructor(e, t) {
    this.width = e, this.height = t, this.initialize();
  }
  initialize() {
    this.nodes = [], this.edges = [], this.pulses = [], this.activeEdges.clear(), this.adjacency.clear();
    const e = Math.ceil(this.width / this.density) + 1, t = Math.ceil(this.height / this.density) + 1;
    for (let r = 0; r < t; r++)
      for (let s = 0; s < e; s++) {
        const a = r * e + s, o = s * this.density + (Math.random() - 0.5) * 20, l = r * this.density + (Math.random() - 0.5) * 20, c = (Math.random() - 0.5) * 10, u = (Math.random() - 0.5) * 10;
        this.nodes.push({
          id: a,
          position: [o, l, 0],
          velocity: [c, u, 0],
          energy: 0
        }), this.adjacency.set(a, []);
      }
    const n = (r, s) => {
      const a = 0.7 + Math.random() * 0.3;
      this.edges.push({ from: r, to: s, weight: a }), this.adjacency.get(r)?.push(s), this.adjacency.get(s)?.push(r);
    };
    for (let r = 0; r < t; r++)
      for (let s = 0; s < e; s++) {
        const a = r * e + s;
        s < e - 1 && n(a, a + 1), r < t - 1 && n(a, a + e), s < e - 1 && r < t - 1 && Math.random() > 0.7 && n(a, a + e + 1);
      }
  }
  update(e) {
    this.updatePositions(e);
    const t = [];
    this.activeEdges.clear();
    for (const n of this.pulses) {
      const r = this.nodes[n.nodeId];
      if (r && (r.energy = Math.min(r.energy + n.strength, 1.5), n.life > 1 && n.strength > 0.05)) {
        const s = this.adjacency.get(n.nodeId) || [];
        for (const a of s) {
          if (a === n.originId) continue;
          const o = [n.nodeId, a].sort((l, c) => l - c).join("-");
          this.activeEdges.add(o), t.push({
            nodeId: a,
            originId: n.nodeId,
            strength: n.strength * 0.75,
            // Higher retention for longer trails
            life: n.life - 1
          });
        }
      }
    }
    this.nodes.forEach((n) => {
      n.energy *= 0.92, n.energy < 1e-3 && (n.energy = 0);
    }), this.pulses = t.length > 600 ? t.sort((n, r) => r.strength - n.strength).slice(0, 600) : t, this.notify();
  }
  emitPulse(e, t, n = 1) {
    let r = -1, s = 1 / 0;
    for (const a of this.nodes) {
      const o = a.position[0] - e, l = a.position[1] - t, c = o * o + l * l;
      c < s && (s = c, r = a.id);
    }
    r !== -1 && s < 6e4 && this.pulses.push({
      nodeId: r,
      strength: n,
      life: 6
      // propagation steps
    });
  }
  updatePositions(e) {
    this.nodes.forEach((n) => {
      n.position[0] += n.velocity[0] * e * 0.5, n.position[1] += n.velocity[1] * e * 0.5;
      const r = 100;
      n.position[0] < -r && (n.position[0] = this.width + r), n.position[0] > this.width + r && (n.position[0] = -r), n.position[1] < -r && (n.position[1] = this.height + r), n.position[1] > this.height + r && (n.position[1] = -r);
    });
  }
  getState() {
    return {
      nodes: this.nodes,
      edges: this.edges,
      pulses: this.pulses,
      activeEdges: this.activeEdges,
      totalEnergy: this.nodes.reduce((e, t) => e + t.energy, 0)
    };
  }
  notify() {
    const e = this.getState();
    this.listeners.forEach((t) => t(e));
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  resize(e, t) {
    this.width = e, this.height = t, this.initialize();
  }
  destroy() {
    this.listeners.clear(), this.nodes = [], this.edges = [], this.pulses = [], this.adjacency.clear();
  }
}
const ml = {
  mission: {
    accent: "#f2b93b",
    accentStrong: "#ffffff",
    bg: "#05070a",
    surface: "#0b0f15",
    magenta: "#ff00ff",
    cyan: "#00ffff",
    muted: "#4a5b7c",
    glow: "rgba(242, 185, 59, 0.45)"
  },
  nebula: {
    accent: "#34d8ff",
    accentStrong: "#ffffff",
    bg: "#02040a",
    surface: "#0b0f14",
    magenta: "#ff2bd6",
    cyan: "#34d8ff",
    muted: "#4a5b7c",
    glow: "rgba(52, 216, 255, 0.35)"
  }
}, gl = (i) => {
  const e = ml[i];
  return {
    "--neo-accent": e.accent,
    "--neo-accent-strong": e.accentStrong,
    "--neo-bg": e.bg,
    "--neo-surface": e.surface,
    "--neo-magenta": e.magenta,
    "--neo-cyan": e.cyan,
    "--neo-muted": e.muted,
    "--neo-glow": e.glow
  };
}, mo = ({ children: i }) => {
  const [e, t] = mi("nebula"), n = oa(() => {
    if (typeof window > "u") return null;
    const s = window.innerWidth || 1920, a = window.innerHeight || 1080;
    return new po(s, a);
  }, []);
  hn(() => {
    if (!n) return;
    let s = performance.now(), a;
    const o = (c) => {
      const u = (c - s) / 1e3;
      s = c;
      const f = Math.min(u, 0.1);
      n.update(f), a = requestAnimationFrame(o);
    }, l = () => {
      n.resize(window.innerWidth, window.innerHeight);
    };
    return window.addEventListener("resize", l), a = requestAnimationFrame(o), () => {
      window.removeEventListener("resize", l), cancelAnimationFrame(a), n.destroy();
    };
  }, [n]), hn(() => {
    document.documentElement.setAttribute("data-theme", e);
  }, [e]);
  const r = oa(() => gl(e), [e]);
  return /* @__PURE__ */ re.jsx(Gs, { value: { engine: n, theme: e, setTheme: t }, children: /* @__PURE__ */ re.jsx("div", { className: `jk-system-root jk-theme-${e}`, style: r, children: i }) });
};
const Vs = "169", _l = 0, da = 1, vl = 2, go = 1, xl = 2, jt = 3, pn = 0, vt = 1, Kt = 2, dn = 0, Yn = 1, sr = 2, fa = 3, pa = 4, Ml = 5, bn = 100, Sl = 101, El = 102, yl = 103, Tl = 104, bl = 200, Al = 201, wl = 202, Rl = 203, Qr = 204, es = 205, Cl = 206, Pl = 207, Ll = 208, Dl = 209, Ul = 210, Il = 211, Nl = 212, Fl = 213, Ol = 214, ts = 0, ns = 1, is = 2, $n = 3, rs = 4, ss = 5, as = 6, os = 7, _o = 0, Bl = 1, zl = 2, fn = 0, Hl = 1, Gl = 2, kl = 3, Vl = 4, Wl = 5, Xl = 6, ql = 7, vo = 300, Zn = 301, Jn = 302, ls = 303, cs = 304, fr = 306, us = 1e3, wn = 1001, hs = 1002, wt = 1003, Yl = 1004, Ai = 1005, Nt = 1006, Sr = 1007, Rn = 1008, en = 1009, xo = 1010, Mo = 1011, gi = 1012, Ws = 1013, Cn = 1014, $t = 1015, _i = 1016, Xs = 1017, qs = 1018, Qn = 1020, So = 35902, Eo = 1021, yo = 1022, Ot = 1023, To = 1024, bo = 1025, jn = 1026, ei = 1027, Ao = 1028, Ys = 1029, wo = 1030, js = 1031, Ks = 1033, Ji = 33776, Qi = 33777, er = 33778, tr = 33779, ds = 35840, fs = 35841, ps = 35842, ms = 35843, gs = 36196, _s = 37492, vs = 37496, xs = 37808, Ms = 37809, Ss = 37810, Es = 37811, ys = 37812, Ts = 37813, bs = 37814, As = 37815, ws = 37816, Rs = 37817, Cs = 37818, Ps = 37819, Ls = 37820, Ds = 37821, nr = 36492, Us = 36494, Is = 36495, Ro = 36283, Ns = 36284, Fs = 36285, Os = 36286, jl = 3200, Kl = 3201, $l = 0, Zl = 1, un = "", zt = "srgb", mn = "srgb-linear", $s = "display-p3", pr = "display-p3-linear", ar = "linear", Je = "srgb", or = "rec709", lr = "p3", Dn = 7680, ma = 519, Jl = 512, Ql = 513, ec = 514, Co = 515, tc = 516, nc = 517, ic = 518, rc = 519, ga = 35044, _a = "300 es", Zt = 2e3, cr = 2001;
class ni {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const ct = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Er = Math.PI / 180, Bs = 180 / Math.PI;
function vi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ct[i & 255] + ct[i >> 8 & 255] + ct[i >> 16 & 255] + ct[i >> 24 & 255] + "-" + ct[e & 255] + ct[e >> 8 & 255] + "-" + ct[e >> 16 & 15 | 64] + ct[e >> 24 & 255] + "-" + ct[t & 63 | 128] + ct[t >> 8 & 255] + "-" + ct[t >> 16 & 255] + ct[t >> 24 & 255] + ct[n & 255] + ct[n >> 8 & 255] + ct[n >> 16 & 255] + ct[n >> 24 & 255]).toLowerCase();
}
function gt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function sc(i, e) {
  return (i % e + e) % e;
}
function yr(i, e, t) {
  return (1 - t) * i + t * e;
}
function oi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function mt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class je {
  constructor(e = 0, t = 0) {
    je.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(gt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, r, s, a, o, l, c) {
    Ue.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], f = n[7], p = n[2], m = n[5], v = n[8], M = r[0], d = r[3], h = r[6], b = r[1], E = r[4], T = r[7], k = r[2], R = r[5], A = r[8];
    return s[0] = a * M + o * b + l * k, s[3] = a * d + o * E + l * R, s[6] = a * h + o * T + l * A, s[1] = c * M + u * b + f * k, s[4] = c * d + u * E + f * R, s[7] = c * h + u * T + f * A, s[2] = p * M + m * b + v * k, s[5] = p * d + m * E + v * R, s[8] = p * h + m * T + v * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * s * u + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], f = u * a - o * c, p = o * l - u * s, m = c * s - a * l, v = t * f + n * p + r * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / v;
    return e[0] = f * M, e[1] = (r * c - u * n) * M, e[2] = (o * n - r * a) * M, e[3] = p * M, e[4] = (u * t - r * l) * M, e[5] = (r * s - o * t) * M, e[6] = m * M, e[7] = (n * l - c * t) * M, e[8] = (a * t - n * s) * M, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Tr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Tr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Tr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Tr = /* @__PURE__ */ new Ue();
function Po(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function ur(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function ac() {
  const i = ur("canvas");
  return i.style.display = "block", i;
}
const va = {};
function ir(i) {
  i in va || (va[i] = !0, console.warn(i));
}
function oc(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function lc(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function cc(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const xa = /* @__PURE__ */ new Ue().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ma = /* @__PURE__ */ new Ue().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), li = {
  [mn]: {
    transfer: ar,
    primaries: or,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [zt]: {
    transfer: Je,
    primaries: or,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [pr]: {
    transfer: ar,
    primaries: lr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.applyMatrix3(Ma),
    fromReference: (i) => i.applyMatrix3(xa)
  },
  [$s]: {
    transfer: Je,
    primaries: lr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ma),
    fromReference: (i) => i.applyMatrix3(xa).convertLinearToSRGB()
  }
}, uc = /* @__PURE__ */ new Set([mn, pr]), Xe = {
  enabled: !0,
  _workingColorSpace: mn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!uc.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = li[e].toReference, r = li[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return li[i].primaries;
  },
  getTransfer: function(i) {
    return i === un ? ar : li[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
    return i.fromArray(li[e].luminanceCoefficients);
  }
};
function Kn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function br(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Un;
class hc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Un === void 0 && (Un = ur("canvas")), Un.width = e.width, Un.height = e.height;
      const n = Un.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Un;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ur("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Kn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Kn(t[n] / 255) * 255) : t[n] = Kn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let dc = 0;
class Lo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: dc++ }), this.uuid = vi(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Ar(r[a].image)) : s.push(Ar(r[a]));
      } else
        s = Ar(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ar(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? hc.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let fc = 0;
class xt extends ni {
  constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = wn, r = wn, s = Nt, a = Rn, o = Ot, l = en, c = xt.DEFAULT_ANISOTROPY, u = un) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: fc++ }), this.uuid = vi(), this.name = "", this.source = new Lo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new je(0, 0), this.repeat = new je(1, 1), this.center = new je(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== vo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case us:
          e.x = e.x - Math.floor(e.x);
          break;
        case wn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case us:
          e.y = e.y - Math.floor(e.y);
          break;
        case wn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = vo;
xt.DEFAULT_ANISOTROPY = 1;
class nt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    nt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], u = l[4], f = l[8], p = l[1], m = l[5], v = l[9], M = l[2], d = l[6], h = l[10];
    if (Math.abs(u - p) < 0.01 && Math.abs(f - M) < 0.01 && Math.abs(v - d) < 0.01) {
      if (Math.abs(u + p) < 0.1 && Math.abs(f + M) < 0.1 && Math.abs(v + d) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, T = (m + 1) / 2, k = (h + 1) / 2, R = (u + p) / 4, A = (f + M) / 4, O = (v + d) / 4;
      return E > T && E > k ? E < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), r = R / n, s = A / n) : T > k ? T < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(T), n = R / r, s = O / r) : k < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(k), n = A / s, r = O / s), this.set(n, r, s, t), this;
    }
    let b = Math.sqrt((d - v) * (d - v) + (f - M) * (f - M) + (p - u) * (p - u));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (d - v) / b, this.y = (f - M) / b, this.z = (p - u) / b, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class pc extends ni {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new nt(0, 0, e, t), this.scissorTest = !1, this.viewport = new nt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Nt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new xt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Lo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Pn extends pc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Do extends xt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = wt, this.minFilter = wt, this.wrapR = wn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class mc extends xt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = wt, this.minFilter = wt, this.wrapR = wn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], f = n[r + 3];
    const p = s[a + 0], m = s[a + 1], v = s[a + 2], M = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (o === 1) {
      e[t + 0] = p, e[t + 1] = m, e[t + 2] = v, e[t + 3] = M;
      return;
    }
    if (f !== M || l !== p || c !== m || u !== v) {
      let d = 1 - o;
      const h = l * p + c * m + u * v + f * M, b = h >= 0 ? 1 : -1, E = 1 - h * h;
      if (E > Number.EPSILON) {
        const k = Math.sqrt(E), R = Math.atan2(k, h * b);
        d = Math.sin(d * R) / k, o = Math.sin(o * R) / k;
      }
      const T = o * b;
      if (l = l * d + p * T, c = c * d + m * T, u = u * d + v * T, f = f * d + M * T, d === 1 - o) {
        const k = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        l *= k, c *= k, u *= k, f *= k;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], f = s[a], p = s[a + 1], m = s[a + 2], v = s[a + 3];
    return e[t] = o * v + u * f + l * m - c * p, e[t + 1] = l * v + u * p + c * f - o * m, e[t + 2] = c * v + u * m + o * p - l * f, e[t + 3] = u * v - o * f - l * p - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(r / 2), f = o(s / 2), p = l(n / 2), m = l(r / 2), v = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = p * u * f + c * m * v, this._y = c * m * f - p * u * v, this._z = c * u * v + p * m * f, this._w = c * u * f - p * m * v;
        break;
      case "YXZ":
        this._x = p * u * f + c * m * v, this._y = c * m * f - p * u * v, this._z = c * u * v - p * m * f, this._w = c * u * f + p * m * v;
        break;
      case "ZXY":
        this._x = p * u * f - c * m * v, this._y = c * m * f + p * u * v, this._z = c * u * v + p * m * f, this._w = c * u * f - p * m * v;
        break;
      case "ZYX":
        this._x = p * u * f - c * m * v, this._y = c * m * f + p * u * v, this._z = c * u * v - p * m * f, this._w = c * u * f + p * m * v;
        break;
      case "YZX":
        this._x = p * u * f + c * m * v, this._y = c * m * f + p * u * v, this._z = c * u * v - p * m * f, this._w = c * u * f - p * m * v;
        break;
      case "XZY":
        this._x = p * u * f - c * m * v, this._y = c * m * f - p * u * v, this._z = c * u * v + p * m * f, this._w = c * u * f + p * m * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], f = t[10], p = n + o + f;
    if (p > 0) {
      const m = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(gt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + r * c - s * l, this._y = r * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - r * o, this._w = a * u - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), f = Math.sin((1 - t) * u) / c, p = Math.sin(t * u) / c;
    return this._w = a * f + this._w * p, this._x = n * f + this._x * p, this._y = r * f + this._y * p, this._z = s * f + this._z * p, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    N.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Sa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Sa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), u = 2 * (o * t - s * r), f = 2 * (s * n - a * t);
    return this.x = t + l * c + a * f - o * u, this.y = n + l * u + o * c - s * f, this.z = r + l * f + s * u - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return wr.copy(this).projectOnVector(e), this.sub(wr);
  }
  reflect(e) {
    return this.sub(wr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(gt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const wr = /* @__PURE__ */ new N(), Sa = /* @__PURE__ */ new xi();
class Mi {
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Lt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Lt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Lt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Lt) : Lt.fromBufferAttribute(s, a), Lt.applyMatrix4(e.matrixWorld), this.expandByPoint(Lt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), wi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), wi.copy(n.boundingBox)), wi.applyMatrix4(e.matrixWorld), this.union(wi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Lt), Lt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ci), Ri.subVectors(this.max, ci), In.subVectors(e.a, ci), Nn.subVectors(e.b, ci), Fn.subVectors(e.c, ci), rn.subVectors(Nn, In), sn.subVectors(Fn, Nn), _n.subVectors(In, Fn);
    let t = [
      0,
      -rn.z,
      rn.y,
      0,
      -sn.z,
      sn.y,
      0,
      -_n.z,
      _n.y,
      rn.z,
      0,
      -rn.x,
      sn.z,
      0,
      -sn.x,
      _n.z,
      0,
      -_n.x,
      -rn.y,
      rn.x,
      0,
      -sn.y,
      sn.x,
      0,
      -_n.y,
      _n.x,
      0
    ];
    return !Rr(t, In, Nn, Fn, Ri) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Rr(t, In, Nn, Fn, Ri)) ? !1 : (Ci.crossVectors(rn, sn), t = [Ci.x, Ci.y, Ci.z], Rr(t, In, Nn, Fn, Ri));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Lt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Lt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Vt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Vt = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], Lt = /* @__PURE__ */ new N(), wi = /* @__PURE__ */ new Mi(), In = /* @__PURE__ */ new N(), Nn = /* @__PURE__ */ new N(), Fn = /* @__PURE__ */ new N(), rn = /* @__PURE__ */ new N(), sn = /* @__PURE__ */ new N(), _n = /* @__PURE__ */ new N(), ci = /* @__PURE__ */ new N(), Ri = /* @__PURE__ */ new N(), Ci = /* @__PURE__ */ new N(), vn = /* @__PURE__ */ new N();
function Rr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    vn.fromArray(i, s);
    const o = r.x * Math.abs(vn.x) + r.y * Math.abs(vn.y) + r.z * Math.abs(vn.z), l = e.dot(vn), c = t.dot(vn), u = n.dot(vn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const gc = /* @__PURE__ */ new Mi(), ui = /* @__PURE__ */ new N(), Cr = /* @__PURE__ */ new N();
class Si {
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : gc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ui.subVectors(e, this.center);
    const t = ui.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ui, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Cr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ui.copy(e.center).add(Cr)), this.expandByPoint(ui.copy(e.center).sub(Cr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wt = /* @__PURE__ */ new N(), Pr = /* @__PURE__ */ new N(), Pi = /* @__PURE__ */ new N(), an = /* @__PURE__ */ new N(), Lr = /* @__PURE__ */ new N(), Li = /* @__PURE__ */ new N(), Dr = /* @__PURE__ */ new N();
class Zs {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Wt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Wt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Wt.copy(this.origin).addScaledVector(this.direction, t), Wt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Pr.copy(e).add(t).multiplyScalar(0.5), Pi.copy(t).sub(e).normalize(), an.copy(this.origin).sub(Pr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Pi), o = an.dot(this.direction), l = -an.dot(Pi), c = an.lengthSq(), u = Math.abs(1 - a * a);
    let f, p, m, v;
    if (u > 0)
      if (f = a * l - o, p = a * o - l, v = s * u, f >= 0)
        if (p >= -v)
          if (p <= v) {
            const M = 1 / u;
            f *= M, p *= M, m = f * (f + a * p + 2 * o) + p * (a * f + p + 2 * l) + c;
          } else
            p = s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
        else
          p = -s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
      else
        p <= -v ? (f = Math.max(0, -(-a * s + o)), p = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + p * (p + 2 * l) + c) : p <= v ? (f = 0, p = Math.min(Math.max(-s, -l), s), m = p * (p + 2 * l) + c) : (f = Math.max(0, -(a * s + o)), p = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + p * (p + 2 * l) + c);
    else
      p = a > 0 ? -s : s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Pr).addScaledVector(Pi, p), m;
  }
  intersectSphere(e, t) {
    Wt.subVectors(e.center, this.origin);
    const n = Wt.dot(this.direction), r = Wt.dot(Wt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, p = this.origin;
    return c >= 0 ? (n = (e.min.x - p.x) * c, r = (e.max.x - p.x) * c) : (n = (e.max.x - p.x) * c, r = (e.min.x - p.x) * c), u >= 0 ? (s = (e.min.y - p.y) * u, a = (e.max.y - p.y) * u) : (s = (e.max.y - p.y) * u, a = (e.min.y - p.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), f >= 0 ? (o = (e.min.z - p.z) * f, l = (e.max.z - p.z) * f) : (o = (e.max.z - p.z) * f, l = (e.min.z - p.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Wt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Lr.subVectors(t, e), Li.subVectors(n, e), Dr.crossVectors(Lr, Li);
    let a = this.direction.dot(Dr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    an.subVectors(this.origin, e);
    const l = o * this.direction.dot(Li.crossVectors(an, Li));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Lr.cross(an));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * an.dot(Dr);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class et {
  constructor(e, t, n, r, s, a, o, l, c, u, f, p, m, v, M, d) {
    et.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, u, f, p, m, v, M, d);
  }
  set(e, t, n, r, s, a, o, l, c, u, f, p, m, v, M, d) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = f, h[14] = p, h[3] = m, h[7] = v, h[11] = M, h[15] = d, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new et().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / On.setFromMatrixColumn(e, 0).length(), s = 1 / On.setFromMatrixColumn(e, 1).length(), a = 1 / On.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const p = a * u, m = a * f, v = o * u, M = o * f;
      t[0] = l * u, t[4] = -l * f, t[8] = c, t[1] = m + v * c, t[5] = p - M * c, t[9] = -o * l, t[2] = M - p * c, t[6] = v + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const p = l * u, m = l * f, v = c * u, M = c * f;
      t[0] = p + M * o, t[4] = v * o - m, t[8] = a * c, t[1] = a * f, t[5] = a * u, t[9] = -o, t[2] = m * o - v, t[6] = M + p * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const p = l * u, m = l * f, v = c * u, M = c * f;
      t[0] = p - M * o, t[4] = -a * f, t[8] = v + m * o, t[1] = m + v * o, t[5] = a * u, t[9] = M - p * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const p = a * u, m = a * f, v = o * u, M = o * f;
      t[0] = l * u, t[4] = v * c - m, t[8] = p * c + M, t[1] = l * f, t[5] = M * c + p, t[9] = m * c - v, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const p = a * l, m = a * c, v = o * l, M = o * c;
      t[0] = l * u, t[4] = M - p * f, t[8] = v * f + m, t[1] = f, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = m * f + v, t[10] = p - M * f;
    } else if (e.order === "XZY") {
      const p = a * l, m = a * c, v = o * l, M = o * c;
      t[0] = l * u, t[4] = -f, t[8] = c * u, t[1] = p * f + M, t[5] = a * u, t[9] = m * f - v, t[2] = v * f - m, t[6] = o * u, t[10] = M * f + p;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_c, e, vc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return yt.subVectors(e, t), yt.lengthSq() === 0 && (yt.z = 1), yt.normalize(), on.crossVectors(n, yt), on.lengthSq() === 0 && (Math.abs(n.z) === 1 ? yt.x += 1e-4 : yt.z += 1e-4, yt.normalize(), on.crossVectors(n, yt)), on.normalize(), Di.crossVectors(yt, on), r[0] = on.x, r[4] = Di.x, r[8] = yt.x, r[1] = on.y, r[5] = Di.y, r[9] = yt.y, r[2] = on.z, r[6] = Di.z, r[10] = yt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], f = n[5], p = n[9], m = n[13], v = n[2], M = n[6], d = n[10], h = n[14], b = n[3], E = n[7], T = n[11], k = n[15], R = r[0], A = r[4], O = r[8], Q = r[12], g = r[1], S = r[5], V = r[9], H = r[13], X = r[2], K = r[6], z = r[10], J = r[14], G = r[3], oe = r[7], le = r[11], D = r[15];
    return s[0] = a * R + o * g + l * X + c * G, s[4] = a * A + o * S + l * K + c * oe, s[8] = a * O + o * V + l * z + c * le, s[12] = a * Q + o * H + l * J + c * D, s[1] = u * R + f * g + p * X + m * G, s[5] = u * A + f * S + p * K + m * oe, s[9] = u * O + f * V + p * z + m * le, s[13] = u * Q + f * H + p * J + m * D, s[2] = v * R + M * g + d * X + h * G, s[6] = v * A + M * S + d * K + h * oe, s[10] = v * O + M * V + d * z + h * le, s[14] = v * Q + M * H + d * J + h * D, s[3] = b * R + E * g + T * X + k * G, s[7] = b * A + E * S + T * K + k * oe, s[11] = b * O + E * V + T * z + k * le, s[15] = b * Q + E * H + T * J + k * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], f = e[6], p = e[10], m = e[14], v = e[3], M = e[7], d = e[11], h = e[15];
    return v * (+s * l * f - r * c * f - s * o * p + n * c * p + r * o * m - n * l * m) + M * (+t * l * m - t * c * p + s * a * p - r * a * m + r * c * u - s * l * u) + d * (+t * c * f - t * o * m - s * a * f + n * a * m + s * o * u - n * c * u) + h * (-r * o * u - t * l * f + t * o * p + r * a * f - n * a * p + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], f = e[9], p = e[10], m = e[11], v = e[12], M = e[13], d = e[14], h = e[15], b = f * d * c - M * p * c + M * l * m - o * d * m - f * l * h + o * p * h, E = v * p * c - u * d * c - v * l * m + a * d * m + u * l * h - a * p * h, T = u * M * c - v * f * c + v * o * m - a * M * m - u * o * h + a * f * h, k = v * f * l - u * M * l - v * o * p + a * M * p + u * o * d - a * f * d, R = t * b + n * E + r * T + s * k;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / R;
    return e[0] = b * A, e[1] = (M * p * s - f * d * s - M * r * m + n * d * m + f * r * h - n * p * h) * A, e[2] = (o * d * s - M * l * s + M * r * c - n * d * c - o * r * h + n * l * h) * A, e[3] = (f * l * s - o * p * s - f * r * c + n * p * c + o * r * m - n * l * m) * A, e[4] = E * A, e[5] = (u * d * s - v * p * s + v * r * m - t * d * m - u * r * h + t * p * h) * A, e[6] = (v * l * s - a * d * s - v * r * c + t * d * c + a * r * h - t * l * h) * A, e[7] = (a * p * s - u * l * s + u * r * c - t * p * c - a * r * m + t * l * m) * A, e[8] = T * A, e[9] = (v * f * s - u * M * s - v * n * m + t * M * m + u * n * h - t * f * h) * A, e[10] = (a * M * s - v * o * s + v * n * c - t * M * c - a * n * h + t * o * h) * A, e[11] = (u * o * s - a * f * s - u * n * c + t * f * c + a * n * m - t * o * m) * A, e[12] = k * A, e[13] = (u * M * r - v * f * r + v * n * p - t * M * p - u * n * d + t * f * d) * A, e[14] = (v * o * r - a * M * r - v * n * l + t * M * l + a * n * d - t * o * d) * A, e[15] = (a * f * r - u * o * r + u * n * l - t * f * l - a * n * p + t * o * p) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, u = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      u * o + n,
      u * l - r * a,
      0,
      c * l - r * o,
      u * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, u = a + a, f = o + o, p = s * c, m = s * u, v = s * f, M = a * u, d = a * f, h = o * f, b = l * c, E = l * u, T = l * f, k = n.x, R = n.y, A = n.z;
    return r[0] = (1 - (M + h)) * k, r[1] = (m + T) * k, r[2] = (v - E) * k, r[3] = 0, r[4] = (m - T) * R, r[5] = (1 - (p + h)) * R, r[6] = (d + b) * R, r[7] = 0, r[8] = (v + E) * A, r[9] = (d - b) * A, r[10] = (1 - (p + M)) * A, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = On.set(r[0], r[1], r[2]).length();
    const a = On.set(r[4], r[5], r[6]).length(), o = On.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Dt.copy(this);
    const c = 1 / s, u = 1 / a, f = 1 / o;
    return Dt.elements[0] *= c, Dt.elements[1] *= c, Dt.elements[2] *= c, Dt.elements[4] *= u, Dt.elements[5] *= u, Dt.elements[6] *= u, Dt.elements[8] *= f, Dt.elements[9] *= f, Dt.elements[10] *= f, t.setFromRotationMatrix(Dt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = Zt) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), f = (t + e) / (t - e), p = (n + r) / (n - r);
    let m, v;
    if (o === Zt)
      m = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === cr)
      m = -a / (a - s), v = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = Zt) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), f = 1 / (a - s), p = (t + e) * c, m = (n + r) * u;
    let v, M;
    if (o === Zt)
      v = (a + s) * f, M = -2 * f;
    else if (o === cr)
      v = s * f, M = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = M, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const On = /* @__PURE__ */ new N(), Dt = /* @__PURE__ */ new et(), _c = /* @__PURE__ */ new N(0, 0, 0), vc = /* @__PURE__ */ new N(1, 1, 1), on = /* @__PURE__ */ new N(), Di = /* @__PURE__ */ new N(), yt = /* @__PURE__ */ new N(), Ea = /* @__PURE__ */ new et(), ya = /* @__PURE__ */ new xi();
class tn {
  constructor(e = 0, t = 0, n = 0, r = tn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], f = r[2], p = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(gt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(p, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-gt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(gt(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-gt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(p, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(gt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-gt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ea.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ea, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ya.setFromEuler(this), this.setFromQuaternion(ya, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
tn.DEFAULT_ORDER = "XYZ";
class Uo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let xc = 0;
const Ta = /* @__PURE__ */ new N(), Bn = /* @__PURE__ */ new xi(), Xt = /* @__PURE__ */ new et(), Ui = /* @__PURE__ */ new N(), hi = /* @__PURE__ */ new N(), Mc = /* @__PURE__ */ new N(), Sc = /* @__PURE__ */ new xi(), ba = /* @__PURE__ */ new N(1, 0, 0), Aa = /* @__PURE__ */ new N(0, 1, 0), wa = /* @__PURE__ */ new N(0, 0, 1), Ra = { type: "added" }, Ec = { type: "removed" }, zn = { type: "childadded", child: null }, Ur = { type: "childremoved", child: null };
class dt extends ni {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: xc++ }), this.uuid = vi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = dt.DEFAULT_UP.clone();
    const e = new N(), t = new tn(), n = new xi(), r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new et()
      },
      normalMatrix: {
        value: new Ue()
      }
    }), this.matrix = new et(), this.matrixWorld = new et(), this.matrixAutoUpdate = dt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Uo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.multiply(Bn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.premultiply(Bn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ba, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Aa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(wa, e);
  }
  translateOnAxis(e, t) {
    return Ta.copy(e).applyQuaternion(this.quaternion), this.position.add(Ta.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ba, e);
  }
  translateY(e) {
    return this.translateOnAxis(Aa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(wa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Xt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ui.copy(e) : Ui.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(hi, Ui, this.up) : Xt.lookAt(Ui, hi, this.up), this.quaternion.setFromRotationMatrix(Xt), r && (Xt.extractRotation(r.matrixWorld), Bn.setFromRotationMatrix(Xt), this.quaternion.premultiply(Bn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ra), zn.child = e, this.dispatchEvent(zn), zn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ec), Ur.child = e, this.dispatchEvent(Ur), Ur.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ra), zn.child = e, this.dispatchEvent(zn), zn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, e, Mc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, Sc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), f = a(e.shapes), p = a(e.skeletons), m = a(e.animations), v = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), p.length > 0 && (n.skeletons = p), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
dt.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
dt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ut = /* @__PURE__ */ new N(), qt = /* @__PURE__ */ new N(), Ir = /* @__PURE__ */ new N(), Yt = /* @__PURE__ */ new N(), Hn = /* @__PURE__ */ new N(), Gn = /* @__PURE__ */ new N(), Ca = /* @__PURE__ */ new N(), Nr = /* @__PURE__ */ new N(), Fr = /* @__PURE__ */ new N(), Or = /* @__PURE__ */ new N(), Br = /* @__PURE__ */ new nt(), zr = /* @__PURE__ */ new nt(), Hr = /* @__PURE__ */ new nt();
class Ft {
  constructor(e = new N(), t = new N(), n = new N()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ut.subVectors(e, t), r.cross(Ut);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ut.subVectors(r, t), qt.subVectors(n, t), Ir.subVectors(e, t);
    const a = Ut.dot(Ut), o = Ut.dot(qt), l = Ut.dot(Ir), c = qt.dot(qt), u = qt.dot(Ir), f = a * c - o * o;
    if (f === 0)
      return s.set(0, 0, 0), null;
    const p = 1 / f, m = (c * l - o * u) * p, v = (a * u - o * l) * p;
    return s.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Yt) === null ? !1 : Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, Yt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Yt.x), l.addScaledVector(a, Yt.y), l.addScaledVector(o, Yt.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return Br.setScalar(0), zr.setScalar(0), Hr.setScalar(0), Br.fromBufferAttribute(e, t), zr.fromBufferAttribute(e, n), Hr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Br, s.x), a.addScaledVector(zr, s.y), a.addScaledVector(Hr, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Ut.subVectors(n, t), qt.subVectors(e, t), Ut.cross(qt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ut.subVectors(this.c, this.b), qt.subVectors(this.a, this.b), Ut.cross(qt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ft.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ft.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Ft.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ft.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ft.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Hn.subVectors(r, n), Gn.subVectors(s, n), Nr.subVectors(e, n);
    const l = Hn.dot(Nr), c = Gn.dot(Nr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Fr.subVectors(e, r);
    const u = Hn.dot(Fr), f = Gn.dot(Fr);
    if (u >= 0 && f <= u)
      return t.copy(r);
    const p = l * f - u * c;
    if (p <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), t.copy(n).addScaledVector(Hn, a);
    Or.subVectors(e, s);
    const m = Hn.dot(Or), v = Gn.dot(Or);
    if (v >= 0 && m <= v)
      return t.copy(s);
    const M = m * c - l * v;
    if (M <= 0 && c >= 0 && v <= 0)
      return o = c / (c - v), t.copy(n).addScaledVector(Gn, o);
    const d = u * v - m * f;
    if (d <= 0 && f - u >= 0 && m - v >= 0)
      return Ca.subVectors(s, r), o = (f - u) / (f - u + (m - v)), t.copy(r).addScaledVector(Ca, o);
    const h = 1 / (d + M + p);
    return a = M * h, o = p * h, t.copy(n).addScaledVector(Hn, a).addScaledVector(Gn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Io = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, ln = { h: 0, s: 0, l: 0 }, Ii = { h: 0, s: 0, l: 0 };
function Gr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ge {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = zt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Xe.workingColorSpace) {
    if (e = sc(e, 1), t = gt(t, 0, 1), n = gt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Gr(a, s, e + 1 / 3), this.g = Gr(a, s, e), this.b = Gr(a, s, e - 1 / 3);
    }
    return Xe.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = zt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = zt) {
    const n = Io[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Kn(e.r), this.g = Kn(e.g), this.b = Kn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = br(e.r), this.g = br(e.g), this.b = br(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = zt) {
    return Xe.fromWorkingColorSpace(ut.copy(this), e), Math.round(gt(ut.r * 255, 0, 255)) * 65536 + Math.round(gt(ut.g * 255, 0, 255)) * 256 + Math.round(gt(ut.b * 255, 0, 255));
  }
  getHexString(e = zt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(ut.copy(this), t);
    const n = ut.r, r = ut.g, s = ut.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = u <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(ut.copy(this), t), e.r = ut.r, e.g = ut.g, e.b = ut.b, e;
  }
  getStyle(e = zt) {
    Xe.fromWorkingColorSpace(ut.copy(this), e);
    const t = ut.r, n = ut.g, r = ut.b;
    return e !== zt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(ln), this.setHSL(ln.h + e, ln.s + t, ln.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(ln), e.getHSL(Ii);
    const n = yr(ln.h, Ii.h, t), r = yr(ln.s, Ii.s, t), s = yr(ln.l, Ii.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ut = /* @__PURE__ */ new Ge();
Ge.NAMES = Io;
let yc = 0;
class ii extends ni {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: yc++ }), this.uuid = vi(), this.name = "", this.type = "Material", this.blending = Yn, this.side = pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Qr, this.blendDst = es, this.blendEquation = bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ge(0, 0, 0), this.blendAlpha = 0, this.depthFunc = $n, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ma, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Dn, this.stencilZFail = Dn, this.stencilZPass = Dn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Yn && (n.blending = this.blending), this.side !== pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Qr && (n.blendSrc = this.blendSrc), this.blendDst !== es && (n.blendDst = this.blendDst), this.blendEquation !== bn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== $n && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ma && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Dn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Dn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Dn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class No extends ii {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ge(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new tn(), this.combine = _o, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const rt = /* @__PURE__ */ new N(), Ni = /* @__PURE__ */ new je();
class _t {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ga, this.updateRanges = [], this.gpuType = $t, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ni.fromBufferAttribute(this, t), Ni.applyMatrix3(e), this.setXY(t, Ni.x, Ni.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        rt.fromBufferAttribute(this, t), rt.applyMatrix3(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      rt.fromBufferAttribute(this, t), rt.applyMatrix4(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      rt.fromBufferAttribute(this, t), rt.applyNormalMatrix(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      rt.fromBufferAttribute(this, t), rt.transformDirection(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = oi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = mt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = mt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array), r = mt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = mt(t, this.array), n = mt(n, this.array), r = mt(r, this.array), s = mt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== ga && (e.usage = this.usage), e;
  }
}
class Fo extends _t {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Oo extends _t {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Qt extends _t {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Tc = 0;
const At = /* @__PURE__ */ new et(), kr = /* @__PURE__ */ new dt(), kn = /* @__PURE__ */ new N(), Tt = /* @__PURE__ */ new Mi(), di = /* @__PURE__ */ new Mi(), ot = /* @__PURE__ */ new N();
class Bt extends ni {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Tc++ }), this.uuid = vi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Po(e) ? Oo : Fo)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return At.makeRotationFromQuaternion(e), this.applyMatrix4(At), this;
  }
  rotateX(e) {
    return At.makeRotationX(e), this.applyMatrix4(At), this;
  }
  rotateY(e) {
    return At.makeRotationY(e), this.applyMatrix4(At), this;
  }
  rotateZ(e) {
    return At.makeRotationZ(e), this.applyMatrix4(At), this;
  }
  translate(e, t, n) {
    return At.makeTranslation(e, t, n), this.applyMatrix4(At), this;
  }
  scale(e, t, n) {
    return At.makeScale(e, t, n), this.applyMatrix4(At), this;
  }
  lookAt(e) {
    return kr.lookAt(e), kr.updateMatrix(), this.applyMatrix4(kr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(kn).negate(), this.translate(kn.x, kn.y, kn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Qt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Mi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new N(-1 / 0, -1 / 0, -1 / 0),
        new N(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Tt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ot.addVectors(this.boundingBox.min, Tt.min), this.boundingBox.expandByPoint(ot), ot.addVectors(this.boundingBox.max, Tt.max), this.boundingBox.expandByPoint(ot)) : (this.boundingBox.expandByPoint(Tt.min), this.boundingBox.expandByPoint(Tt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Si());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Tt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          di.setFromBufferAttribute(o), this.morphTargetsRelative ? (ot.addVectors(Tt.min, di.min), Tt.expandByPoint(ot), ot.addVectors(Tt.max, di.max), Tt.expandByPoint(ot)) : (Tt.expandByPoint(di.min), Tt.expandByPoint(di.max));
        }
      Tt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        ot.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ot));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ot.fromBufferAttribute(o, c), l && (kn.fromBufferAttribute(e, c), ot.add(kn)), r = Math.max(r, n.distanceToSquared(ot));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new _t(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let O = 0; O < n.count; O++)
      o[O] = new N(), l[O] = new N();
    const c = new N(), u = new N(), f = new N(), p = new je(), m = new je(), v = new je(), M = new N(), d = new N();
    function h(O, Q, g) {
      c.fromBufferAttribute(n, O), u.fromBufferAttribute(n, Q), f.fromBufferAttribute(n, g), p.fromBufferAttribute(s, O), m.fromBufferAttribute(s, Q), v.fromBufferAttribute(s, g), u.sub(c), f.sub(c), m.sub(p), v.sub(p);
      const S = 1 / (m.x * v.y - v.x * m.y);
      isFinite(S) && (M.copy(u).multiplyScalar(v.y).addScaledVector(f, -m.y).multiplyScalar(S), d.copy(f).multiplyScalar(m.x).addScaledVector(u, -v.x).multiplyScalar(S), o[O].add(M), o[Q].add(M), o[g].add(M), l[O].add(d), l[Q].add(d), l[g].add(d));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: e.count
    }]);
    for (let O = 0, Q = b.length; O < Q; ++O) {
      const g = b[O], S = g.start, V = g.count;
      for (let H = S, X = S + V; H < X; H += 3)
        h(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const E = new N(), T = new N(), k = new N(), R = new N();
    function A(O) {
      k.fromBufferAttribute(r, O), R.copy(k);
      const Q = o[O];
      E.copy(Q), E.sub(k.multiplyScalar(k.dot(Q))).normalize(), T.crossVectors(R, Q);
      const S = T.dot(l[O]) < 0 ? -1 : 1;
      a.setXYZW(O, E.x, E.y, E.z, S);
    }
    for (let O = 0, Q = b.length; O < Q; ++O) {
      const g = b[O], S = g.start, V = g.count;
      for (let H = S, X = S + V; H < X; H += 3)
        A(e.getX(H + 0)), A(e.getX(H + 1)), A(e.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new _t(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let p = 0, m = n.count; p < m; p++)
          n.setXYZ(p, 0, 0, 0);
      const r = new N(), s = new N(), a = new N(), o = new N(), l = new N(), c = new N(), u = new N(), f = new N();
      if (e)
        for (let p = 0, m = e.count; p < m; p += 3) {
          const v = e.getX(p + 0), M = e.getX(p + 1), d = e.getX(p + 2);
          r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, M), a.fromBufferAttribute(t, d), u.subVectors(a, s), f.subVectors(r, s), u.cross(f), o.fromBufferAttribute(n, v), l.fromBufferAttribute(n, M), c.fromBufferAttribute(n, d), o.add(u), l.add(u), c.add(u), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(M, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let p = 0, m = t.count; p < m; p += 3)
          r.fromBufferAttribute(t, p + 0), s.fromBufferAttribute(t, p + 1), a.fromBufferAttribute(t, p + 2), u.subVectors(a, s), f.subVectors(r, s), u.cross(f), n.setXYZ(p + 0, u.x, u.y, u.z), n.setXYZ(p + 1, u.x, u.y, u.z), n.setXYZ(p + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ot.fromBufferAttribute(e, t), ot.normalize(), e.setXYZ(t, ot.x, ot.y, ot.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, f = o.normalized, p = new c.constructor(l.length * u);
      let m = 0, v = 0;
      for (let M = 0, d = l.length; M < d; M++) {
        o.isInterleavedBufferAttribute ? m = l[M] * o.data.stride + o.offset : m = l[M] * u;
        for (let h = 0; h < u; h++)
          p[v++] = c[m++];
      }
      return new _t(p, u, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Bt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, f = c.length; u < f; u++) {
        const p = c[u], m = e(p, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let f = 0, p = c.length; f < p; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], f = s[c];
      for (let p = 0, m = f.length; p < m; p++)
        u.push(f[p].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Pa = /* @__PURE__ */ new et(), xn = /* @__PURE__ */ new Zs(), Fi = /* @__PURE__ */ new Si(), La = /* @__PURE__ */ new N(), Oi = /* @__PURE__ */ new N(), Bi = /* @__PURE__ */ new N(), zi = /* @__PURE__ */ new N(), Vr = /* @__PURE__ */ new N(), Hi = /* @__PURE__ */ new N(), Da = /* @__PURE__ */ new N(), Gi = /* @__PURE__ */ new N();
class Jt extends dt {
  constructor(e = new Bt(), t = new No()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Hi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], f = s[l];
        u !== 0 && (Vr.fromBufferAttribute(f, e), a ? Hi.addScaledVector(Vr, u) : Hi.addScaledVector(Vr.sub(t), u));
      }
      t.add(Hi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Fi.copy(n.boundingSphere), Fi.applyMatrix4(s), xn.copy(e.ray).recast(e.near), !(Fi.containsPoint(xn.origin) === !1 && (xn.intersectSphere(Fi, La) === null || xn.origin.distanceToSquared(La) > (e.far - e.near) ** 2)) && (Pa.copy(s).invert(), xn.copy(e.ray).applyMatrix4(Pa), !(n.boundingBox !== null && xn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, xn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, f = s.attributes.normal, p = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let v = 0, M = p.length; v < M; v++) {
          const d = p[v], h = a[d.materialIndex], b = Math.max(d.start, m.start), E = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let T = b, k = E; T < k; T += 3) {
            const R = o.getX(T), A = o.getX(T + 1), O = o.getX(T + 2);
            r = ki(this, h, e, n, c, u, f, R, A, O), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start), M = Math.min(o.count, m.start + m.count);
        for (let d = v, h = M; d < h; d += 3) {
          const b = o.getX(d), E = o.getX(d + 1), T = o.getX(d + 2);
          r = ki(this, a, e, n, c, u, f, b, E, T), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let v = 0, M = p.length; v < M; v++) {
          const d = p[v], h = a[d.materialIndex], b = Math.max(d.start, m.start), E = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let T = b, k = E; T < k; T += 3) {
            const R = T, A = T + 1, O = T + 2;
            r = ki(this, h, e, n, c, u, f, R, A, O), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start), M = Math.min(l.count, m.start + m.count);
        for (let d = v, h = M; d < h; d += 3) {
          const b = d, E = d + 1, T = d + 2;
          r = ki(this, a, e, n, c, u, f, b, E, T), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
  }
}
function bc(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === vt ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === pn, o), l === null) return null;
  Gi.copy(o), Gi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Gi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Gi.clone(),
    object: i
  };
}
function ki(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Oi), i.getVertexPosition(l, Bi), i.getVertexPosition(c, zi);
  const u = bc(i, e, t, n, Oi, Bi, zi, Da);
  if (u) {
    const f = new N();
    Ft.getBarycoord(Da, Oi, Bi, zi, f), r && (u.uv = Ft.getInterpolatedAttribute(r, o, l, c, f, new je())), s && (u.uv1 = Ft.getInterpolatedAttribute(s, o, l, c, f, new je())), a && (u.normal = Ft.getInterpolatedAttribute(a, o, l, c, f, new N()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new N(),
      materialIndex: 0
    };
    Ft.getNormal(Oi, Bi, zi, p.normal), u.face = p, u.barycoord = f;
  }
  return u;
}
class Ei extends Bt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], f = [];
    let p = 0, m = 0;
    v("z", "y", "x", -1, -1, n, t, e, a, s, 0), v("z", "y", "x", 1, -1, n, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, n, t, r, a, 2), v("x", "z", "y", 1, -1, e, n, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, n, r, s, 4), v("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Qt(c, 3)), this.setAttribute("normal", new Qt(u, 3)), this.setAttribute("uv", new Qt(f, 2));
    function v(M, d, h, b, E, T, k, R, A, O, Q) {
      const g = T / A, S = k / O, V = T / 2, H = k / 2, X = R / 2, K = A + 1, z = O + 1;
      let J = 0, G = 0;
      const oe = new N();
      for (let le = 0; le < z; le++) {
        const D = le * S - H;
        for (let ie = 0; ie < K; ie++) {
          const xe = ie * g - V;
          oe[M] = xe * b, oe[d] = D * E, oe[h] = X, c.push(oe.x, oe.y, oe.z), oe[M] = 0, oe[d] = 0, oe[h] = R > 0 ? 1 : -1, u.push(oe.x, oe.y, oe.z), f.push(ie / A), f.push(1 - le / O), J += 1;
        }
      }
      for (let le = 0; le < O; le++)
        for (let D = 0; D < A; D++) {
          const ie = p + D + K * le, xe = p + D + K * (le + 1), B = p + (D + 1) + K * (le + 1), $ = p + (D + 1) + K * le;
          l.push(ie, xe, $), l.push(xe, B, $), G += 6;
        }
      o.addGroup(m, G, Q), m += G, p += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ei(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ti(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function ht(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ti(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Ac(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Bo(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Xe.workingColorSpace;
}
const wc = { clone: ti, merge: ht };
var Rc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Cc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Gt extends ii {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Rc, this.fragmentShader = Cc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ti(e.uniforms), this.uniformsGroups = Ac(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class zo extends dt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new et(), this.projectionMatrix = new et(), this.projectionMatrixInverse = new et(), this.coordinateSystem = Zt;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const cn = /* @__PURE__ */ new N(), Ua = /* @__PURE__ */ new je(), Ia = /* @__PURE__ */ new je();
class It extends zo {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Bs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Er * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(
      Math.tan(Er * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    cn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(cn.x, cn.y).multiplyScalar(-e / cn.z), cn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(cn.x, cn.y).multiplyScalar(-e / cn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Ua, Ia), t.subVectors(Ia, Ua);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Er * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Vn = -90, Wn = 1;
class Pc extends dt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new It(Vn, Wn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new It(Vn, Wn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new It(Vn, Wn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new It(Vn, Wn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new It(Vn, Wn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new It(Vn, Wn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === Zt)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === cr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, f = e.getRenderTarget(), p = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(f, p, m), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0;
  }
}
class Ho extends xt {
  constructor(e, t, n, r, s, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Zn, super(e, t, n, r, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Lc extends Pn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Ho(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Nt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Ei(5, 5, 5), s = new Gt({
      name: "CubemapFromEquirect",
      uniforms: ti(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: vt,
      blending: dn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Jt(r, s), o = t.minFilter;
    return t.minFilter === Rn && (t.minFilter = Nt), new Pc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Wr = /* @__PURE__ */ new N(), Dc = /* @__PURE__ */ new N(), Uc = /* @__PURE__ */ new Ue();
class yn {
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Wr.subVectors(n, t).cross(Dc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Wr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Uc.getNormalMatrix(e), r = this.coplanarPoint(Wr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mn = /* @__PURE__ */ new Si(), Vi = /* @__PURE__ */ new N();
class Go {
  constructor(e = new yn(), t = new yn(), n = new yn(), r = new yn(), s = new yn(), a = new yn()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Zt) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], f = r[6], p = r[7], m = r[8], v = r[9], M = r[10], d = r[11], h = r[12], b = r[13], E = r[14], T = r[15];
    if (n[0].setComponents(l - s, p - c, d - m, T - h).normalize(), n[1].setComponents(l + s, p + c, d + m, T + h).normalize(), n[2].setComponents(l + a, p + u, d + v, T + b).normalize(), n[3].setComponents(l - a, p - u, d - v, T - b).normalize(), n[4].setComponents(l - o, p - f, d - M, T - E).normalize(), t === Zt)
      n[5].setComponents(l + o, p + f, d + M, T + E).normalize();
    else if (t === cr)
      n[5].setComponents(o, f, M, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Mn);
  }
  intersectsSprite(e) {
    return Mn.center.set(0, 0, 0), Mn.radius = 0.7071067811865476, Mn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Vi.x = r.normal.x > 0 ? e.max.x : e.min.x, Vi.y = r.normal.y > 0 ? e.max.y : e.min.y, Vi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Vi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ko() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Ic(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, f = c.byteLength, p = i.createBuffer();
    i.bindBuffer(l, p), i.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array)
      m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      m = i.SHORT;
    else if (c instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      m = i.INT;
    else if (c instanceof Int8Array)
      m = i.BYTE;
    else if (c instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: p,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f
    };
  }
  function n(o, l, c) {
    const u = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, o), f.length === 0)
      i.bufferSubData(c, 0, u);
    else {
      f.sort((m, v) => m.start - v.start);
      let p = 0;
      for (let m = 1; m < f.length; m++) {
        const v = f[p], M = f[m];
        M.start <= v.start + v.count + 1 ? v.count = Math.max(
          v.count,
          M.start + M.count - v.start
        ) : (++p, f[p] = M);
      }
      f.length = p + 1;
      for (let m = 0, v = f.length; m < v; m++) {
        const M = f[m];
        i.bufferSubData(
          c,
          M.start * u.BYTES_PER_ELEMENT,
          u,
          M.start,
          M.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
class mr extends Bt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, u = l + 1, f = e / o, p = t / l, m = [], v = [], M = [], d = [];
    for (let h = 0; h < u; h++) {
      const b = h * p - a;
      for (let E = 0; E < c; E++) {
        const T = E * f - s;
        v.push(T, -b, 0), M.push(0, 0, 1), d.push(E / o), d.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let b = 0; b < o; b++) {
        const E = b + c * h, T = b + c * (h + 1), k = b + 1 + c * (h + 1), R = b + 1 + c * h;
        m.push(E, T, R), m.push(T, k, R);
      }
    this.setIndex(m), this.setAttribute("position", new Qt(v, 3)), this.setAttribute("normal", new Qt(M, 3)), this.setAttribute("uv", new Qt(d, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new mr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Nc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Fc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Oc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Bc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, zc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Hc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Gc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, kc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Vc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Wc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Xc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, qc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Yc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, jc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Kc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, $c = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Zc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Jc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Qc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, eu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, tu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, nu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, iu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, ru = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, su = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, au = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, ou = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, lu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, cu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, uu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, hu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", du = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, fu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, pu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, mu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, gu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, _u = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, vu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, xu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Mu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Su = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Eu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, yu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Tu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, bu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Au = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, wu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Ru = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Cu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Pu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Lu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Du = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Uu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Iu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Nu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Fu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ou = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Bu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, zu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Hu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Gu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ku = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Vu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Wu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Xu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, qu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Yu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, ju = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ku = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $u = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Zu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ju = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Qu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, eh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, th = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, nh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ih = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, rh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, sh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, ah = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, oh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, lh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ch = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, uh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, hh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, fh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ph = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, mh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, gh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, _h = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, vh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, xh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Mh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Sh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Eh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, yh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Th = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, bh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ah = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, wh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Rh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Ch = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Ph = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Lh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Dh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Uh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ih = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Nh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Oh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, zh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Hh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Gh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, kh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Vh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Wh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Xh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, qh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Kh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $h = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Qh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ed = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, td = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, nd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, id = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, sd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ad = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, od = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ld = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, cd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ud = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, dd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, De = {
  alphahash_fragment: Nc,
  alphahash_pars_fragment: Fc,
  alphamap_fragment: Oc,
  alphamap_pars_fragment: Bc,
  alphatest_fragment: zc,
  alphatest_pars_fragment: Hc,
  aomap_fragment: Gc,
  aomap_pars_fragment: kc,
  batching_pars_vertex: Vc,
  batching_vertex: Wc,
  begin_vertex: Xc,
  beginnormal_vertex: qc,
  bsdfs: Yc,
  iridescence_fragment: jc,
  bumpmap_pars_fragment: Kc,
  clipping_planes_fragment: $c,
  clipping_planes_pars_fragment: Zc,
  clipping_planes_pars_vertex: Jc,
  clipping_planes_vertex: Qc,
  color_fragment: eu,
  color_pars_fragment: tu,
  color_pars_vertex: nu,
  color_vertex: iu,
  common: ru,
  cube_uv_reflection_fragment: su,
  defaultnormal_vertex: au,
  displacementmap_pars_vertex: ou,
  displacementmap_vertex: lu,
  emissivemap_fragment: cu,
  emissivemap_pars_fragment: uu,
  colorspace_fragment: hu,
  colorspace_pars_fragment: du,
  envmap_fragment: fu,
  envmap_common_pars_fragment: pu,
  envmap_pars_fragment: mu,
  envmap_pars_vertex: gu,
  envmap_physical_pars_fragment: wu,
  envmap_vertex: _u,
  fog_vertex: vu,
  fog_pars_vertex: xu,
  fog_fragment: Mu,
  fog_pars_fragment: Su,
  gradientmap_pars_fragment: Eu,
  lightmap_pars_fragment: yu,
  lights_lambert_fragment: Tu,
  lights_lambert_pars_fragment: bu,
  lights_pars_begin: Au,
  lights_toon_fragment: Ru,
  lights_toon_pars_fragment: Cu,
  lights_phong_fragment: Pu,
  lights_phong_pars_fragment: Lu,
  lights_physical_fragment: Du,
  lights_physical_pars_fragment: Uu,
  lights_fragment_begin: Iu,
  lights_fragment_maps: Nu,
  lights_fragment_end: Fu,
  logdepthbuf_fragment: Ou,
  logdepthbuf_pars_fragment: Bu,
  logdepthbuf_pars_vertex: zu,
  logdepthbuf_vertex: Hu,
  map_fragment: Gu,
  map_pars_fragment: ku,
  map_particle_fragment: Vu,
  map_particle_pars_fragment: Wu,
  metalnessmap_fragment: Xu,
  metalnessmap_pars_fragment: qu,
  morphinstance_vertex: Yu,
  morphcolor_vertex: ju,
  morphnormal_vertex: Ku,
  morphtarget_pars_vertex: $u,
  morphtarget_vertex: Zu,
  normal_fragment_begin: Ju,
  normal_fragment_maps: Qu,
  normal_pars_fragment: eh,
  normal_pars_vertex: th,
  normal_vertex: nh,
  normalmap_pars_fragment: ih,
  clearcoat_normal_fragment_begin: rh,
  clearcoat_normal_fragment_maps: sh,
  clearcoat_pars_fragment: ah,
  iridescence_pars_fragment: oh,
  opaque_fragment: lh,
  packing: ch,
  premultiplied_alpha_fragment: uh,
  project_vertex: hh,
  dithering_fragment: dh,
  dithering_pars_fragment: fh,
  roughnessmap_fragment: ph,
  roughnessmap_pars_fragment: mh,
  shadowmap_pars_fragment: gh,
  shadowmap_pars_vertex: _h,
  shadowmap_vertex: vh,
  shadowmask_pars_fragment: xh,
  skinbase_vertex: Mh,
  skinning_pars_vertex: Sh,
  skinning_vertex: Eh,
  skinnormal_vertex: yh,
  specularmap_fragment: Th,
  specularmap_pars_fragment: bh,
  tonemapping_fragment: Ah,
  tonemapping_pars_fragment: wh,
  transmission_fragment: Rh,
  transmission_pars_fragment: Ch,
  uv_pars_fragment: Ph,
  uv_pars_vertex: Lh,
  uv_vertex: Dh,
  worldpos_vertex: Uh,
  background_vert: Ih,
  background_frag: Nh,
  backgroundCube_vert: Fh,
  backgroundCube_frag: Oh,
  cube_vert: Bh,
  cube_frag: zh,
  depth_vert: Hh,
  depth_frag: Gh,
  distanceRGBA_vert: kh,
  distanceRGBA_frag: Vh,
  equirect_vert: Wh,
  equirect_frag: Xh,
  linedashed_vert: qh,
  linedashed_frag: Yh,
  meshbasic_vert: jh,
  meshbasic_frag: Kh,
  meshlambert_vert: $h,
  meshlambert_frag: Zh,
  meshmatcap_vert: Jh,
  meshmatcap_frag: Qh,
  meshnormal_vert: ed,
  meshnormal_frag: td,
  meshphong_vert: nd,
  meshphong_frag: id,
  meshphysical_vert: rd,
  meshphysical_frag: sd,
  meshtoon_vert: ad,
  meshtoon_frag: od,
  points_vert: ld,
  points_frag: cd,
  shadow_vert: ud,
  shadow_frag: hd,
  sprite_vert: dd,
  sprite_frag: fd
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ue() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ue() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ue() },
    normalScale: { value: /* @__PURE__ */ new je(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ue() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ge(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ue() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new je(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  }
}, Ht = {
  basic: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: De.meshbasic_vert,
    fragmentShader: De.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) }
      }
    ]),
    vertexShader: De.meshlambert_vert,
    fragmentShader: De.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        specular: { value: /* @__PURE__ */ new Ge(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: De.meshphong_vert,
    fragmentShader: De.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.roughnessmap,
      se.metalnessmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: De.meshphysical_vert,
    fragmentShader: De.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.gradientmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) }
      }
    ]),
    vertexShader: De.meshtoon_vert,
    fragmentShader: De.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: De.meshmatcap_vert,
    fragmentShader: De.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ht([
      se.points,
      se.fog
    ]),
    vertexShader: De.points_vert,
    fragmentShader: De.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: De.linedashed_vert,
    fragmentShader: De.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.displacementmap
    ]),
    vertexShader: De.depth_vert,
    fragmentShader: De.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.meshnormal_vert,
    fragmentShader: De.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ht([
      se.sprite,
      se.fog
    ]),
    vertexShader: De.sprite_vert,
    fragmentShader: De.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ue() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: De.background_vert,
    fragmentShader: De.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ue() }
    },
    vertexShader: De.backgroundCube_vert,
    fragmentShader: De.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: De.cube_vert,
    fragmentShader: De.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: De.equirect_vert,
    fragmentShader: De.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ht([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: De.distanceRGBA_vert,
    fragmentShader: De.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ht([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new Ge(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.shadow_vert,
    fragmentShader: De.shadow_frag
  }
};
Ht.physical = {
  uniforms: /* @__PURE__ */ ht([
    Ht.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new je(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ge(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new je() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ge(0) },
      specularColor: { value: /* @__PURE__ */ new Ge(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ue() },
      anisotropyVector: { value: /* @__PURE__ */ new je() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ue() }
    }
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag
};
const Wi = { r: 0, b: 0, g: 0 }, Sn = /* @__PURE__ */ new tn(), pd = /* @__PURE__ */ new et();
function md(i, e, t, n, r, s, a) {
  const o = new Ge(0);
  let l = s === !0 ? 0 : 1, c, u, f = null, p = 0, m = null;
  function v(b) {
    let E = b.isScene === !0 ? b.background : null;
    return E && E.isTexture && (E = (b.backgroundBlurriness > 0 ? t : e).get(E)), E;
  }
  function M(b) {
    let E = !1;
    const T = v(b);
    T === null ? h(o, l) : T && T.isColor && (h(T, 1), E = !0);
    const k = i.xr.getEnvironmentBlendMode();
    k === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : k === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function d(b, E) {
    const T = v(E);
    T && (T.isCubeTexture || T.mapping === fr) ? (u === void 0 && (u = new Jt(
      new Ei(1, 1, 1),
      new Gt({
        name: "BackgroundCubeMaterial",
        uniforms: ti(Ht.backgroundCube.uniforms),
        vertexShader: Ht.backgroundCube.vertexShader,
        fragmentShader: Ht.backgroundCube.fragmentShader,
        side: vt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(k, R, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), Sn.copy(E.backgroundRotation), Sn.x *= -1, Sn.y *= -1, Sn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Sn.y *= -1, Sn.z *= -1), u.material.uniforms.envMap.value = T, u.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(pd.makeRotationFromEuler(Sn)), u.material.toneMapped = Xe.getTransfer(T.colorSpace) !== Je, (f !== T || p !== T.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, f = T, p = T.version, m = i.toneMapping), u.layers.enableAll(), b.unshift(u, u.geometry, u.material, 0, 0, null)) : T && T.isTexture && (c === void 0 && (c = new Jt(
      new mr(2, 2),
      new Gt({
        name: "BackgroundMaterial",
        uniforms: ti(Ht.background.uniforms),
        vertexShader: Ht.background.vertexShader,
        fragmentShader: Ht.background.fragmentShader,
        side: pn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = T, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.toneMapped = Xe.getTransfer(T.colorSpace) !== Je, T.matrixAutoUpdate === !0 && T.updateMatrix(), c.material.uniforms.uvTransform.value.copy(T.matrix), (f !== T || p !== T.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = T, p = T.version, m = i.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(b, E) {
    b.getRGB(Wi, Bo(i)), n.buffers.color.setClear(Wi.r, Wi.g, Wi.b, E, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(b, E = 1) {
      o.set(b), l = E, h(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(b) {
      l = b, h(o, l);
    },
    render: M,
    addToRenderList: d
  };
}
function gd(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = p(null);
  let s = r, a = !1;
  function o(g, S, V, H, X) {
    let K = !1;
    const z = f(H, V, S);
    s !== z && (s = z, c(s.object)), K = m(g, H, V, X), K && v(g, H, V, X), X !== null && e.update(X, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = !1, T(g, S, V, H), X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function u(g) {
    return i.deleteVertexArray(g);
  }
  function f(g, S, V) {
    const H = V.wireframe === !0;
    let X = n[g.id];
    X === void 0 && (X = {}, n[g.id] = X);
    let K = X[S.id];
    K === void 0 && (K = {}, X[S.id] = K);
    let z = K[H];
    return z === void 0 && (z = p(l()), K[H] = z), z;
  }
  function p(g) {
    const S = [], V = [], H = [];
    for (let X = 0; X < t; X++)
      S[X] = 0, V[X] = 0, H[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: S,
      enabledAttributes: V,
      attributeDivisors: H,
      object: g,
      attributes: {},
      index: null
    };
  }
  function m(g, S, V, H) {
    const X = s.attributes, K = S.attributes;
    let z = 0;
    const J = V.getAttributes();
    for (const G in J)
      if (J[G].location >= 0) {
        const le = X[G];
        let D = K[G];
        if (D === void 0 && (G === "instanceMatrix" && g.instanceMatrix && (D = g.instanceMatrix), G === "instanceColor" && g.instanceColor && (D = g.instanceColor)), le === void 0 || le.attribute !== D || D && le.data !== D.data) return !0;
        z++;
      }
    return s.attributesNum !== z || s.index !== H;
  }
  function v(g, S, V, H) {
    const X = {}, K = S.attributes;
    let z = 0;
    const J = V.getAttributes();
    for (const G in J)
      if (J[G].location >= 0) {
        let le = K[G];
        le === void 0 && (G === "instanceMatrix" && g.instanceMatrix && (le = g.instanceMatrix), G === "instanceColor" && g.instanceColor && (le = g.instanceColor));
        const D = {};
        D.attribute = le, le && le.data && (D.data = le.data), X[G] = D, z++;
      }
    s.attributes = X, s.attributesNum = z, s.index = H;
  }
  function M() {
    const g = s.newAttributes;
    for (let S = 0, V = g.length; S < V; S++)
      g[S] = 0;
  }
  function d(g) {
    h(g, 0);
  }
  function h(g, S) {
    const V = s.newAttributes, H = s.enabledAttributes, X = s.attributeDivisors;
    V[g] = 1, H[g] === 0 && (i.enableVertexAttribArray(g), H[g] = 1), X[g] !== S && (i.vertexAttribDivisor(g, S), X[g] = S);
  }
  function b() {
    const g = s.newAttributes, S = s.enabledAttributes;
    for (let V = 0, H = S.length; V < H; V++)
      S[V] !== g[V] && (i.disableVertexAttribArray(V), S[V] = 0);
  }
  function E(g, S, V, H, X, K, z) {
    z === !0 ? i.vertexAttribIPointer(g, S, V, X, K) : i.vertexAttribPointer(g, S, V, H, X, K);
  }
  function T(g, S, V, H) {
    M();
    const X = H.attributes, K = V.getAttributes(), z = S.defaultAttributeValues;
    for (const J in K) {
      const G = K[J];
      if (G.location >= 0) {
        let oe = X[J];
        if (oe === void 0 && (J === "instanceMatrix" && g.instanceMatrix && (oe = g.instanceMatrix), J === "instanceColor" && g.instanceColor && (oe = g.instanceColor)), oe !== void 0) {
          const le = oe.normalized, D = oe.itemSize, ie = e.get(oe);
          if (ie === void 0) continue;
          const xe = ie.buffer, B = ie.type, $ = ie.bytesPerElement, fe = B === i.INT || B === i.UNSIGNED_INT || oe.gpuType === Ws;
          if (oe.isInterleavedBufferAttribute) {
            const ee = oe.data, Te = ee.stride, ye = oe.offset;
            if (ee.isInstancedInterleavedBuffer) {
              for (let Ie = 0; Ie < G.locationSize; Ie++)
                h(G.location + Ie, ee.meshPerAttribute);
              g.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let Ie = 0; Ie < G.locationSize; Ie++)
                d(G.location + Ie);
            i.bindBuffer(i.ARRAY_BUFFER, xe);
            for (let Ie = 0; Ie < G.locationSize; Ie++)
              E(
                G.location + Ie,
                D / G.locationSize,
                B,
                le,
                Te * $,
                (ye + D / G.locationSize * Ie) * $,
                fe
              );
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let ee = 0; ee < G.locationSize; ee++)
                h(G.location + ee, oe.meshPerAttribute);
              g.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let ee = 0; ee < G.locationSize; ee++)
                d(G.location + ee);
            i.bindBuffer(i.ARRAY_BUFFER, xe);
            for (let ee = 0; ee < G.locationSize; ee++)
              E(
                G.location + ee,
                D / G.locationSize,
                B,
                le,
                D * $,
                D / G.locationSize * ee * $,
                fe
              );
          }
        } else if (z !== void 0) {
          const le = z[J];
          if (le !== void 0)
            switch (le.length) {
              case 2:
                i.vertexAttrib2fv(G.location, le);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, le);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, le);
                break;
              default:
                i.vertexAttrib1fv(G.location, le);
            }
        }
      }
    }
    b();
  }
  function k() {
    O();
    for (const g in n) {
      const S = n[g];
      for (const V in S) {
        const H = S[V];
        for (const X in H)
          u(H[X].object), delete H[X];
        delete S[V];
      }
      delete n[g];
    }
  }
  function R(g) {
    if (n[g.id] === void 0) return;
    const S = n[g.id];
    for (const V in S) {
      const H = S[V];
      for (const X in H)
        u(H[X].object), delete H[X];
      delete S[V];
    }
    delete n[g.id];
  }
  function A(g) {
    for (const S in n) {
      const V = n[S];
      if (V[g.id] === void 0) continue;
      const H = V[g.id];
      for (const X in H)
        u(H[X].object), delete H[X];
      delete V[g.id];
    }
  }
  function O() {
    Q(), a = !0, s !== r && (s = r, c(s.object));
  }
  function Q() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: O,
    resetDefaultState: Q,
    dispose: k,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: A,
    initAttributes: M,
    enableAttribute: d,
    disableUnusedAttributes: b
  };
}
function _d(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, u, f), t.update(u, n, f));
  }
  function o(c, u, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, f);
    let m = 0;
    for (let v = 0; v < f; v++)
      m += u[v];
    t.update(m, n, 1);
  }
  function l(c, u, f, p) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let v = 0; v < c.length; v++)
        a(c[v], u[v], p[v]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, p, 0, f);
      let v = 0;
      for (let M = 0; M < f; M++)
        v += u[M];
      for (let M = 0; M < p.length; M++)
        t.update(v, n, p[M]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function vd(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(A) {
    return !(A !== Ot && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const O = A === _i && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== en && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== $t && !O);
  }
  function l(A) {
    if (A === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const f = t.logarithmicDepthBuffer === !0, p = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (p === !0) {
    const A = e.get("EXT_clip_control");
    A.clipControlEXT(A.LOWER_LEFT_EXT, A.ZERO_TO_ONE_EXT);
  }
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), E = i.getParameter(i.MAX_VARYING_VECTORS), T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), k = v > 0, R = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: p,
    maxTextures: m,
    maxVertexTextures: v,
    maxTextureSize: M,
    maxCubemapSize: d,
    maxAttributes: h,
    maxVertexUniforms: b,
    maxVaryings: E,
    maxFragmentUniforms: T,
    vertexTextures: k,
    maxSamples: R
  };
}
function xd(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new yn(), o = new Ue(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, p) {
    const m = f.length !== 0 || p || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = p, n = f.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, p) {
    t = u(f, p, 0);
  }, this.setState = function(f, p, m) {
    const v = f.clippingPlanes, M = f.clipIntersection, d = f.clipShadows, h = i.get(f);
    if (!r || v === null || v.length === 0 || s && !d)
      s ? u(null) : c();
    else {
      const b = s ? 0 : n, E = b * 4;
      let T = h.clippingState || null;
      l.value = T, T = u(v, p, E, m);
      for (let k = 0; k !== E; ++k)
        T[k] = t[k];
      h.clippingState = T, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, p, m, v) {
    const M = f !== null ? f.length : 0;
    let d = null;
    if (M !== 0) {
      if (d = l.value, v !== !0 || d === null) {
        const h = m + M * 4, b = p.matrixWorldInverse;
        o.getNormalMatrix(b), (d === null || d.length < h) && (d = new Float32Array(h));
        for (let E = 0, T = m; E !== M; ++E, T += 4)
          a.copy(f[E]).applyMatrix4(b, o), a.normal.toArray(d, T), d[T + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = !0;
    }
    return e.numPlanes = M, e.numIntersection = 0, d;
  }
}
function Md(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === ls ? a.mapping = Zn : o === cs && (a.mapping = Jn), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ls || o === cs)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Lc(l.height);
            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Vo extends zo {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const qn = 4, Na = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], An = 20, Xr = /* @__PURE__ */ new Vo(), Fa = /* @__PURE__ */ new Ge();
let qr = null, Yr = 0, jr = 0, Kr = !1;
const Tn = (1 + Math.sqrt(5)) / 2, Xn = 1 / Tn, Oa = [
  /* @__PURE__ */ new N(-Tn, Xn, 0),
  /* @__PURE__ */ new N(Tn, Xn, 0),
  /* @__PURE__ */ new N(-Xn, 0, Tn),
  /* @__PURE__ */ new N(Xn, 0, Tn),
  /* @__PURE__ */ new N(0, Tn, -Xn),
  /* @__PURE__ */ new N(0, Tn, Xn),
  /* @__PURE__ */ new N(-1, 1, -1),
  /* @__PURE__ */ new N(1, 1, -1),
  /* @__PURE__ */ new N(-1, 1, 1),
  /* @__PURE__ */ new N(1, 1, 1)
];
class Ba {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    qr = this._renderer.getRenderTarget(), Yr = this._renderer.getActiveCubeFace(), jr = this._renderer.getActiveMipmapLevel(), Kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ga(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ha(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(qr, Yr, jr), this._renderer.xr.enabled = Kr, e.scissorTest = !1, Xi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Zn || e.mapping === Jn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), qr = this._renderer.getRenderTarget(), Yr = this._renderer.getActiveCubeFace(), jr = this._renderer.getActiveMipmapLevel(), Kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Nt,
      minFilter: Nt,
      generateMipmaps: !1,
      type: _i,
      format: Ot,
      colorSpace: mn,
      depthBuffer: !1
    }, r = za(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = za(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Sd(s)), this._blurMaterial = Ed(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Jt(this._lodPlanes[0], e);
    this._renderer.compile(t, Xr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new It(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, p = u.toneMapping;
    u.getClearColor(Fa), u.toneMapping = fn, u.autoClear = !1;
    const m = new No({
      name: "PMREM.Background",
      side: vt,
      depthWrite: !1,
      depthTest: !1
    }), v = new Jt(new Ei(), m);
    let M = !1;
    const d = e.background;
    d ? d.isColor && (m.color.copy(d), e.background = null, M = !0) : (m.color.copy(Fa), M = !0);
    for (let h = 0; h < 6; h++) {
      const b = h % 3;
      b === 0 ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0)) : b === 1 ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0)) : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const E = this._cubeSize;
      Xi(r, b * E, h > 2 ? E : 0, E, E), u.setRenderTarget(r), M && u.render(v, o), u.render(e, o);
    }
    v.geometry.dispose(), v.material.dispose(), u.toneMapping = p, u.autoClear = f, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Zn || e.mapping === Jn;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ga()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ha());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Jt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Xi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Xr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Oa[(r - s - 1) % Oa.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, f = new Jt(this._lodPlanes[r], c), p = c.uniforms, m = this._sizeLods[n] - 1, v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * An - 1), M = s / v, d = isFinite(s) ? 1 + Math.floor(u * M) : An;
    d > An && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${An}`);
    const h = [];
    let b = 0;
    for (let A = 0; A < An; ++A) {
      const O = A / M, Q = Math.exp(-O * O / 2);
      h.push(Q), A === 0 ? b += Q : A < d && (b += 2 * Q);
    }
    for (let A = 0; A < h.length; A++)
      h[A] = h[A] / b;
    p.envMap.value = e.texture, p.samples.value = d, p.weights.value = h, p.latitudinal.value = a === "latitudinal", o && (p.poleAxis.value = o);
    const { _lodMax: E } = this;
    p.dTheta.value = v, p.mipInt.value = E - n;
    const T = this._sizeLods[r], k = 3 * T * (r > E - qn ? r - E + qn : 0), R = 4 * (this._cubeSize - T);
    Xi(t, k, R, 3 * T, 2 * T), l.setRenderTarget(t), l.render(f, Xr);
  }
}
function Sd(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - qn + 1 + Na.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - qn ? l = Na[a - i + qn - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, f = 1 + c, p = [u, u, f, u, f, f, u, u, f, f, u, f], m = 6, v = 6, M = 3, d = 2, h = 1, b = new Float32Array(M * v * m), E = new Float32Array(d * v * m), T = new Float32Array(h * v * m);
    for (let R = 0; R < m; R++) {
      const A = R % 3 * 2 / 3 - 1, O = R > 2 ? 0 : -1, Q = [
        A,
        O,
        0,
        A + 2 / 3,
        O,
        0,
        A + 2 / 3,
        O + 1,
        0,
        A,
        O,
        0,
        A + 2 / 3,
        O + 1,
        0,
        A,
        O + 1,
        0
      ];
      b.set(Q, M * v * R), E.set(p, d * v * R);
      const g = [R, R, R, R, R, R];
      T.set(g, h * v * R);
    }
    const k = new Bt();
    k.setAttribute("position", new _t(b, M)), k.setAttribute("uv", new _t(E, d)), k.setAttribute("faceIndex", new _t(T, h)), e.push(k), r > qn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function za(i, e, t) {
  const n = new Pn(i, e, t);
  return n.texture.mapping = fr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Xi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Ed(i, e, t) {
  const n = new Float32Array(An), r = new N(0, 1, 0);
  return new Gt({
    name: "SphericalGaussianBlur",
    defines: {
      n: An,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Js(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ha() {
  return new Gt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Js(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ga() {
  return new Gt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Js(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Js() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function yd(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === ls || l === cs, u = l === Zn || l === Jn;
      if (c || u) {
        let f = e.get(o);
        const p = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return t === null && (t = new Ba(i)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && r(m) ? (t === null && (t = new Ba(i)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", s), f.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Td(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && ir("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function bd(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const p = f.target;
    p.index !== null && e.remove(p.index);
    for (const v in p.attributes)
      e.remove(p.attributes[v]);
    for (const v in p.morphAttributes) {
      const M = p.morphAttributes[v];
      for (let d = 0, h = M.length; d < h; d++)
        e.remove(M[d]);
    }
    p.removeEventListener("dispose", a), delete r[p.id];
    const m = s.get(p);
    m && (e.remove(m), s.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, p) {
    return r[p.id] === !0 || (p.addEventListener("dispose", a), r[p.id] = !0, t.memory.geometries++), p;
  }
  function l(f) {
    const p = f.attributes;
    for (const v in p)
      e.update(p[v], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const v in m) {
      const M = m[v];
      for (let d = 0, h = M.length; d < h; d++)
        e.update(M[d], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const p = [], m = f.index, v = f.attributes.position;
    let M = 0;
    if (m !== null) {
      const b = m.array;
      M = m.version;
      for (let E = 0, T = b.length; E < T; E += 3) {
        const k = b[E + 0], R = b[E + 1], A = b[E + 2];
        p.push(k, R, R, A, A, k);
      }
    } else if (v !== void 0) {
      const b = v.array;
      M = v.version;
      for (let E = 0, T = b.length / 3 - 1; E < T; E += 3) {
        const k = E + 0, R = E + 1, A = E + 2;
        p.push(k, R, R, A, A, k);
      }
    } else
      return;
    const d = new (Po(p) ? Oo : Fo)(p, 1);
    d.version = M;
    const h = s.get(f);
    h && e.remove(h), s.set(f, d);
  }
  function u(f) {
    const p = s.get(f);
    if (p) {
      const m = f.index;
      m !== null && p.version < m.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function Ad(i, e, t) {
  let n;
  function r(p) {
    n = p;
  }
  let s, a;
  function o(p) {
    s = p.type, a = p.bytesPerElement;
  }
  function l(p, m) {
    i.drawElements(n, m, s, p * a), t.update(m, n, 1);
  }
  function c(p, m, v) {
    v !== 0 && (i.drawElementsInstanced(n, m, s, p * a, v), t.update(m, n, v));
  }
  function u(p, m, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, p, 0, v);
    let d = 0;
    for (let h = 0; h < v; h++)
      d += m[h];
    t.update(d, n, 1);
  }
  function f(p, m, v, M) {
    if (v === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let h = 0; h < p.length; h++)
        c(p[h] / a, m[h], M[h]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, s, p, 0, M, 0, v);
      let h = 0;
      for (let b = 0; b < v; b++)
        h += m[b];
      for (let b = 0; b < M.length; b++)
        t.update(h, n, M[b]);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = f;
}
function wd(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Rd(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new nt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = u !== void 0 ? u.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== f) {
      let Q = function() {
        A.dispose(), n.delete(o), o.removeEventListener("dispose", Q);
      };
      p !== void 0 && p.texture.dispose();
      const m = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let E = 0;
      m === !0 && (E = 1), v === !0 && (E = 2), M === !0 && (E = 3);
      let T = o.attributes.position.count * E, k = 1;
      T > e.maxTextureSize && (k = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
      const R = new Float32Array(T * k * 4 * f), A = new Do(R, T, k, f);
      A.type = $t, A.needsUpdate = !0;
      const O = E * 4;
      for (let g = 0; g < f; g++) {
        const S = d[g], V = h[g], H = b[g], X = T * k * 4 * g;
        for (let K = 0; K < S.count; K++) {
          const z = K * O;
          m === !0 && (r.fromBufferAttribute(S, K), R[X + z + 0] = r.x, R[X + z + 1] = r.y, R[X + z + 2] = r.z, R[X + z + 3] = 0), v === !0 && (r.fromBufferAttribute(V, K), R[X + z + 4] = r.x, R[X + z + 5] = r.y, R[X + z + 6] = r.z, R[X + z + 7] = 0), M === !0 && (r.fromBufferAttribute(H, K), R[X + z + 8] = r.x, R[X + z + 9] = r.y, R[X + z + 10] = r.z, R[X + z + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      p = {
        count: f,
        texture: A,
        size: new je(T, k)
      }, n.set(o, p), o.addEventListener("dispose", Q);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let M = 0; M < c.length; M++)
        m += c[M];
      const v = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", v), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
  }
  return {
    update: s
  };
}
function Cd(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, f = e.get(l, u);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c));
    }
    return f;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Wo extends xt {
  constructor(e, t, n, r, s, a, o, l, c, u = jn) {
    if (u !== jn && u !== ei)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === jn && (n = Cn), n === void 0 && u === ei && (n = Qn), super(null, r, s, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : wt, this.minFilter = l !== void 0 ? l : wt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Xo = /* @__PURE__ */ new xt(), ka = /* @__PURE__ */ new Wo(1, 1), qo = /* @__PURE__ */ new Do(), Yo = /* @__PURE__ */ new mc(), jo = /* @__PURE__ */ new Ho(), Va = [], Wa = [], Xa = new Float32Array(16), qa = new Float32Array(9), Ya = new Float32Array(4);
function ri(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Va[r];
  if (s === void 0 && (s = new Float32Array(r), Va[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function st(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function at(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function gr(i, e) {
  let t = Wa[e];
  t === void 0 && (t = new Int32Array(e), Wa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Pd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Ld(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (st(t, e)) return;
    i.uniform2fv(this.addr, e), at(t, e);
  }
}
function Dd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (st(t, e)) return;
    i.uniform3fv(this.addr, e), at(t, e);
  }
}
function Ud(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (st(t, e)) return;
    i.uniform4fv(this.addr, e), at(t, e);
  }
}
function Id(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    Ya.set(n), i.uniformMatrix2fv(this.addr, !1, Ya), at(t, n);
  }
}
function Nd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    qa.set(n), i.uniformMatrix3fv(this.addr, !1, qa), at(t, n);
  }
}
function Fd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    Xa.set(n), i.uniformMatrix4fv(this.addr, !1, Xa), at(t, n);
  }
}
function Od(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (st(t, e)) return;
    i.uniform2iv(this.addr, e), at(t, e);
  }
}
function zd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (st(t, e)) return;
    i.uniform3iv(this.addr, e), at(t, e);
  }
}
function Hd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (st(t, e)) return;
    i.uniform4iv(this.addr, e), at(t, e);
  }
}
function Gd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function kd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (st(t, e)) return;
    i.uniform2uiv(this.addr, e), at(t, e);
  }
}
function Vd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (st(t, e)) return;
    i.uniform3uiv(this.addr, e), at(t, e);
  }
}
function Wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (st(t, e)) return;
    i.uniform4uiv(this.addr, e), at(t, e);
  }
}
function Xd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (ka.compareFunction = Co, s = ka) : s = Xo, t.setTexture2D(e || s, r);
}
function qd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Yo, r);
}
function Yd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || jo, r);
}
function jd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || qo, r);
}
function Kd(i) {
  switch (i) {
    case 5126:
      return Pd;
    // FLOAT
    case 35664:
      return Ld;
    // _VEC2
    case 35665:
      return Dd;
    // _VEC3
    case 35666:
      return Ud;
    // _VEC4
    case 35674:
      return Id;
    // _MAT2
    case 35675:
      return Nd;
    // _MAT3
    case 35676:
      return Fd;
    // _MAT4
    case 5124:
    case 35670:
      return Od;
    // INT, BOOL
    case 35667:
    case 35671:
      return Bd;
    // _VEC2
    case 35668:
    case 35672:
      return zd;
    // _VEC3
    case 35669:
    case 35673:
      return Hd;
    // _VEC4
    case 5125:
      return Gd;
    // UINT
    case 36294:
      return kd;
    // _VEC2
    case 36295:
      return Vd;
    // _VEC3
    case 36296:
      return Wd;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Xd;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return qd;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Yd;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return jd;
  }
}
function $d(i, e) {
  i.uniform1fv(this.addr, e);
}
function Zd(i, e) {
  const t = ri(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Jd(i, e) {
  const t = ri(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Qd(i, e) {
  const t = ri(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ef(i, e) {
  const t = ri(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function tf(i, e) {
  const t = ri(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function nf(i, e) {
  const t = ri(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function rf(i, e) {
  i.uniform1iv(this.addr, e);
}
function sf(i, e) {
  i.uniform2iv(this.addr, e);
}
function af(i, e) {
  i.uniform3iv(this.addr, e);
}
function of(i, e) {
  i.uniform4iv(this.addr, e);
}
function lf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function cf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function uf(i, e) {
  i.uniform3uiv(this.addr, e);
}
function hf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function df(i, e, t) {
  const n = this.cache, r = e.length, s = gr(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || Xo, s[a]);
}
function ff(i, e, t) {
  const n = this.cache, r = e.length, s = gr(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Yo, s[a]);
}
function pf(i, e, t) {
  const n = this.cache, r = e.length, s = gr(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || jo, s[a]);
}
function mf(i, e, t) {
  const n = this.cache, r = e.length, s = gr(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || qo, s[a]);
}
function gf(i) {
  switch (i) {
    case 5126:
      return $d;
    // FLOAT
    case 35664:
      return Zd;
    // _VEC2
    case 35665:
      return Jd;
    // _VEC3
    case 35666:
      return Qd;
    // _VEC4
    case 35674:
      return ef;
    // _MAT2
    case 35675:
      return tf;
    // _MAT3
    case 35676:
      return nf;
    // _MAT4
    case 5124:
    case 35670:
      return rf;
    // INT, BOOL
    case 35667:
    case 35671:
      return sf;
    // _VEC2
    case 35668:
    case 35672:
      return af;
    // _VEC3
    case 35669:
    case 35673:
      return of;
    // _VEC4
    case 5125:
      return lf;
    // UINT
    case 36294:
      return cf;
    // _VEC2
    case 36295:
      return uf;
    // _VEC3
    case 36296:
      return hf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return df;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return ff;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return pf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return mf;
  }
}
class _f {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Kd(t.type);
  }
}
class vf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = gf(t.type);
  }
}
class xf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const $r = /(\w+)(\])?(\[|\.)?/g;
function ja(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Mf(i, e, t) {
  const n = i.name, r = n.length;
  for ($r.lastIndex = 0; ; ) {
    const s = $r.exec(n), a = $r.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      ja(t, c === void 0 ? new _f(o, i, e) : new vf(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new xf(o), ja(t, f)), t = f;
    }
  }
}
class rr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      Mf(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ka(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Sf = 37297;
let Ef = 0;
function yf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Tf(i) {
  const e = Xe.getPrimaries(Xe.workingColorSpace), t = Xe.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === lr && t === or ? n = "LinearDisplayP3ToLinearSRGB" : e === or && t === lr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case mn:
    case pr:
      return [n, "LinearTransferOETF"];
    case zt:
    case $s:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function $a(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + yf(i.getShaderSource(e), a);
  } else
    return r;
}
function bf(i, e) {
  const t = Tf(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Af(i, e) {
  let t;
  switch (e) {
    case Hl:
      t = "Linear";
      break;
    case Gl:
      t = "Reinhard";
      break;
    case kl:
      t = "Cineon";
      break;
    case Vl:
      t = "ACESFilmic";
      break;
    case Xl:
      t = "AgX";
      break;
    case ql:
      t = "Neutral";
      break;
    case Wl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const qi = /* @__PURE__ */ new N();
function wf() {
  Xe.getLuminanceCoefficients(qi);
  const i = qi.x.toFixed(4), e = qi.y.toFixed(4), t = qi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Rf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(pi).join(`
`);
}
function Cf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Pf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function pi(i) {
  return i !== "";
}
function Za(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ja(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Lf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function zs(i) {
  return i.replace(Lf, Uf);
}
const Df = /* @__PURE__ */ new Map();
function Uf(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = Df.get(e);
    if (n !== void 0)
      t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return zs(t);
}
const If = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Qa(i) {
  return i.replace(If, Nf);
}
function Nf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function eo(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Ff(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === go ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === xl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === jt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Of(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Zn:
      case Jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case fr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Bf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === Jn && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function zf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case _o:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Bl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case zl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Hf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Gf(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Ff(t), c = Of(t), u = Bf(t), f = zf(t), p = Hf(t), m = Rf(t), v = Cf(s), M = r.createProgram();
  let d, h, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(pi).join(`
`), d.length > 0 && (d += `
`), h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(pi).join(`
`), h.length > 0 && (h += `
`)) : (d = [
    eo(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(pi).join(`
`), h = [
    eo(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + f : "",
    p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
    p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
    p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== fn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== fn ? De.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== fn ? Af("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    De.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    bf("linearToOutputTexel", t.outputColorSpace),
    wf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(pi).join(`
`)), a = zs(a), a = Za(a, t), a = Ja(a, t), o = zs(o), o = Za(o, t), o = Ja(o, t), a = Qa(a), o = Qa(o), t.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, h = [
    "#define varying in",
    t.glslVersion === _a ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === _a ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const E = b + d + a, T = b + h + o, k = Ka(r, r.VERTEX_SHADER, E), R = Ka(r, r.FRAGMENT_SHADER, T);
  r.attachShader(M, k), r.attachShader(M, R), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function A(S) {
    if (i.debug.checkShaderErrors) {
      const V = r.getProgramInfoLog(M).trim(), H = r.getShaderInfoLog(k).trim(), X = r.getShaderInfoLog(R).trim();
      let K = !0, z = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (K = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, M, k, R);
        else {
          const J = $a(r, k, "vertex"), G = $a(r, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + S.name + `
Material Type: ` + S.type + `

Program Info Log: ` + V + `
` + J + `
` + G
          );
        }
      else V !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", V) : (H === "" || X === "") && (z = !1);
      z && (S.diagnostics = {
        runnable: K,
        programLog: V,
        vertexShader: {
          log: H,
          prefix: d
        },
        fragmentShader: {
          log: X,
          prefix: h
        }
      });
    }
    r.deleteShader(k), r.deleteShader(R), O = new rr(r, M), Q = Pf(r, M);
  }
  let O;
  this.getUniforms = function() {
    return O === void 0 && A(this), O;
  };
  let Q;
  this.getAttributes = function() {
    return Q === void 0 && A(this), Q;
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(M, Sf)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ef++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = k, this.fragmentShader = R, this;
}
let kf = 0;
class Vf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Wf(e), t.set(e, n)), n;
  }
}
class Wf {
  constructor(e) {
    this.id = kf++, this.code = e, this.usedTimes = 0;
  }
}
function Xf(i, e, t, n, r, s, a) {
  const o = new Uo(), l = new Vf(), c = /* @__PURE__ */ new Set(), u = [], f = r.logarithmicDepthBuffer, p = r.reverseDepthBuffer, m = r.vertexTextures;
  let v = r.precision;
  const M = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function d(g) {
    return c.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function h(g, S, V, H, X) {
    const K = H.fog, z = X.geometry, J = g.isMeshStandardMaterial ? H.environment : null, G = (g.isMeshStandardMaterial ? t : e).get(g.envMap || J), oe = G && G.mapping === fr ? G.image.height : null, le = M[g.type];
    g.precision !== null && (v = r.getMaxPrecision(g.precision), v !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", v, "instead."));
    const D = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, ie = D !== void 0 ? D.length : 0;
    let xe = 0;
    z.morphAttributes.position !== void 0 && (xe = 1), z.morphAttributes.normal !== void 0 && (xe = 2), z.morphAttributes.color !== void 0 && (xe = 3);
    let B, $, fe, ee;
    if (le) {
      const pt = Ht[le];
      B = pt.vertexShader, $ = pt.fragmentShader;
    } else
      B = g.vertexShader, $ = g.fragmentShader, l.update(g), fe = l.getVertexShaderID(g), ee = l.getFragmentShaderID(g);
    const Te = i.getRenderTarget(), ye = X.isInstancedMesh === !0, Ie = X.isBatchedMesh === !0, Ye = !!g.map, Oe = !!g.matcap, w = !!G, Mt = !!g.aoMap, Ne = !!g.lightMap, ze = !!g.bumpMap, we = !!g.normalMap, $e = !!g.displacementMap, Pe = !!g.emissiveMap, y = !!g.metalnessMap, _ = !!g.roughnessMap, U = g.anisotropy > 0, Y = g.clearcoat > 0, Z = g.dispersion > 0, q = g.iridescence > 0, Me = g.sheen > 0, ae = g.transmission > 0, pe = U && !!g.anisotropyMap, He = Y && !!g.clearcoatMap, te = Y && !!g.clearcoatNormalMap, me = Y && !!g.clearcoatRoughnessMap, Re = q && !!g.iridescenceMap, Ce = q && !!g.iridescenceThicknessMap, ge = Me && !!g.sheenColorMap, Fe = Me && !!g.sheenRoughnessMap, Le = !!g.specularMap, Ke = !!g.specularColorMap, C = !!g.specularIntensityMap, he = ae && !!g.transmissionMap, W = ae && !!g.thicknessMap, j = !!g.gradientMap, ce = !!g.alphaMap, de = g.alphaTest > 0, Be = !!g.alphaHash, it = !!g.extensions;
    let ft = fn;
    g.toneMapped && (Te === null || Te.isXRRenderTarget === !0) && (ft = i.toneMapping);
    const ke = {
      shaderID: le,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: B,
      fragmentShader: $,
      defines: g.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: ee,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: v,
      batching: Ie,
      batchingColor: Ie && X._colorsTexture !== null,
      instancing: ye,
      instancingColor: ye && X.instanceColor !== null,
      instancingMorph: ye && X.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace: Te === null ? i.outputColorSpace : Te.isXRRenderTarget === !0 ? Te.texture.colorSpace : mn,
      alphaToCoverage: !!g.alphaToCoverage,
      map: Ye,
      matcap: Oe,
      envMap: w,
      envMapMode: w && G.mapping,
      envMapCubeUVHeight: oe,
      aoMap: Mt,
      lightMap: Ne,
      bumpMap: ze,
      normalMap: we,
      displacementMap: m && $e,
      emissiveMap: Pe,
      normalMapObjectSpace: we && g.normalMapType === Zl,
      normalMapTangentSpace: we && g.normalMapType === $l,
      metalnessMap: y,
      roughnessMap: _,
      anisotropy: U,
      anisotropyMap: pe,
      clearcoat: Y,
      clearcoatMap: He,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: me,
      dispersion: Z,
      iridescence: q,
      iridescenceMap: Re,
      iridescenceThicknessMap: Ce,
      sheen: Me,
      sheenColorMap: ge,
      sheenRoughnessMap: Fe,
      specularMap: Le,
      specularColorMap: Ke,
      specularIntensityMap: C,
      transmission: ae,
      transmissionMap: he,
      thicknessMap: W,
      gradientMap: j,
      opaque: g.transparent === !1 && g.blending === Yn && g.alphaToCoverage === !1,
      alphaMap: ce,
      alphaTest: de,
      alphaHash: Be,
      combine: g.combine,
      //
      mapUv: Ye && d(g.map.channel),
      aoMapUv: Mt && d(g.aoMap.channel),
      lightMapUv: Ne && d(g.lightMap.channel),
      bumpMapUv: ze && d(g.bumpMap.channel),
      normalMapUv: we && d(g.normalMap.channel),
      displacementMapUv: $e && d(g.displacementMap.channel),
      emissiveMapUv: Pe && d(g.emissiveMap.channel),
      metalnessMapUv: y && d(g.metalnessMap.channel),
      roughnessMapUv: _ && d(g.roughnessMap.channel),
      anisotropyMapUv: pe && d(g.anisotropyMap.channel),
      clearcoatMapUv: He && d(g.clearcoatMap.channel),
      clearcoatNormalMapUv: te && d(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: me && d(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Re && d(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ce && d(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: ge && d(g.sheenColorMap.channel),
      sheenRoughnessMapUv: Fe && d(g.sheenRoughnessMap.channel),
      specularMapUv: Le && d(g.specularMap.channel),
      specularColorMapUv: Ke && d(g.specularColorMap.channel),
      specularIntensityMapUv: C && d(g.specularIntensityMap.channel),
      transmissionMapUv: he && d(g.transmissionMap.channel),
      thicknessMapUv: W && d(g.thicknessMap.channel),
      alphaMapUv: ce && d(g.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (we || U),
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      pointsUvs: X.isPoints === !0 && !!z.attributes.uv && (Ye || ce),
      fog: !!K,
      useFog: g.fog === !0,
      fogExp2: !!K && K.isFogExp2,
      flatShading: g.flatShading === !0,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: p,
      skinning: X.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: ie,
      morphTextureStride: xe,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && V.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ft,
      decodeVideoTexture: Ye && g.map.isVideoTexture === !0 && Xe.getTransfer(g.map.colorSpace) === Je,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === Kt,
      flipSided: g.side === vt,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: it && g.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (it && g.extensions.multiDraw === !0 || Ie) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return ke.vertexUv1s = c.has(1), ke.vertexUv2s = c.has(2), ke.vertexUv3s = c.has(3), c.clear(), ke;
  }
  function b(g) {
    const S = [];
    if (g.shaderID ? S.push(g.shaderID) : (S.push(g.customVertexShaderID), S.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const V in g.defines)
        S.push(V), S.push(g.defines[V]);
    return g.isRawShaderMaterial === !1 && (E(S, g), T(S, g), S.push(i.outputColorSpace)), S.push(g.customProgramCacheKey), S.join();
  }
  function E(g, S) {
    g.push(S.precision), g.push(S.outputColorSpace), g.push(S.envMapMode), g.push(S.envMapCubeUVHeight), g.push(S.mapUv), g.push(S.alphaMapUv), g.push(S.lightMapUv), g.push(S.aoMapUv), g.push(S.bumpMapUv), g.push(S.normalMapUv), g.push(S.displacementMapUv), g.push(S.emissiveMapUv), g.push(S.metalnessMapUv), g.push(S.roughnessMapUv), g.push(S.anisotropyMapUv), g.push(S.clearcoatMapUv), g.push(S.clearcoatNormalMapUv), g.push(S.clearcoatRoughnessMapUv), g.push(S.iridescenceMapUv), g.push(S.iridescenceThicknessMapUv), g.push(S.sheenColorMapUv), g.push(S.sheenRoughnessMapUv), g.push(S.specularMapUv), g.push(S.specularColorMapUv), g.push(S.specularIntensityMapUv), g.push(S.transmissionMapUv), g.push(S.thicknessMapUv), g.push(S.combine), g.push(S.fogExp2), g.push(S.sizeAttenuation), g.push(S.morphTargetsCount), g.push(S.morphAttributeCount), g.push(S.numDirLights), g.push(S.numPointLights), g.push(S.numSpotLights), g.push(S.numSpotLightMaps), g.push(S.numHemiLights), g.push(S.numRectAreaLights), g.push(S.numDirLightShadows), g.push(S.numPointLightShadows), g.push(S.numSpotLightShadows), g.push(S.numSpotLightShadowsWithMaps), g.push(S.numLightProbes), g.push(S.shadowMapType), g.push(S.toneMapping), g.push(S.numClippingPlanes), g.push(S.numClipIntersection), g.push(S.depthPacking);
  }
  function T(g, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), g.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.alphaToCoverage && o.enable(20), g.push(o.mask);
  }
  function k(g) {
    const S = M[g.type];
    let V;
    if (S) {
      const H = Ht[S];
      V = wc.clone(H.uniforms);
    } else
      V = g.uniforms;
    return V;
  }
  function R(g, S) {
    let V;
    for (let H = 0, X = u.length; H < X; H++) {
      const K = u[H];
      if (K.cacheKey === S) {
        V = K, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new Gf(i, S, g, s), u.push(V)), V;
  }
  function A(g) {
    if (--g.usedTimes === 0) {
      const S = u.indexOf(g);
      u[S] = u[u.length - 1], u.pop(), g.destroy();
    }
  }
  function O(g) {
    l.remove(g);
  }
  function Q() {
    l.dispose();
  }
  return {
    getParameters: h,
    getProgramCacheKey: b,
    getUniforms: k,
    acquireProgram: R,
    releaseProgram: A,
    releaseShaderCache: O,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: Q
  };
}
function qf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Yf(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function to(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function no() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(f, p, m, v, M, d) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: f.id,
      object: f,
      geometry: p,
      material: m,
      groupOrder: v,
      renderOrder: f.renderOrder,
      z: M,
      group: d
    }, i[e] = h) : (h.id = f.id, h.object = f, h.geometry = p, h.material = m, h.groupOrder = v, h.renderOrder = f.renderOrder, h.z = M, h.group = d), e++, h;
  }
  function o(f, p, m, v, M, d) {
    const h = a(f, p, m, v, M, d);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : t.push(h);
  }
  function l(f, p, m, v, M, d) {
    const h = a(f, p, m, v, M, d);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function c(f, p) {
    t.length > 1 && t.sort(f || Yf), n.length > 1 && n.sort(p || to), r.length > 1 && r.sort(p || to);
  }
  function u() {
    for (let f = e, p = i.length; f < p; f++) {
      const m = i[f];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function jf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new no(), i.set(n, [a])) : r >= s.length ? (a = new no(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Kf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new N(),
            color: new Ge()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Ge(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new Ge(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new Ge(),
            groundColor: new Ge()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ge(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function $f() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new je()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new je()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new je(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Zf = 0;
function Jf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Qf(i) {
  const e = new Kf(), t = $f(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new N());
  const r = new N(), s = new et(), a = new et();
  function o(c) {
    let u = 0, f = 0, p = 0;
    for (let Q = 0; Q < 9; Q++) n.probe[Q].set(0, 0, 0);
    let m = 0, v = 0, M = 0, d = 0, h = 0, b = 0, E = 0, T = 0, k = 0, R = 0, A = 0;
    c.sort(Jf);
    for (let Q = 0, g = c.length; Q < g; Q++) {
      const S = c[Q], V = S.color, H = S.intensity, X = S.distance, K = S.shadow && S.shadow.map ? S.shadow.map.texture : null;
      if (S.isAmbientLight)
        u += V.r * H, f += V.g * H, p += V.b * H;
      else if (S.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(S.sh.coefficients[z], H);
        A++;
      } else if (S.isDirectionalLight) {
        const z = e.get(S);
        if (z.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
          const J = S.shadow, G = t.get(S);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, n.directionalShadow[m] = G, n.directionalShadowMap[m] = K, n.directionalShadowMatrix[m] = S.shadow.matrix, b++;
        }
        n.directional[m] = z, m++;
      } else if (S.isSpotLight) {
        const z = e.get(S);
        z.position.setFromMatrixPosition(S.matrixWorld), z.color.copy(V).multiplyScalar(H), z.distance = X, z.coneCos = Math.cos(S.angle), z.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), z.decay = S.decay, n.spot[M] = z;
        const J = S.shadow;
        if (S.map && (n.spotLightMap[k] = S.map, k++, J.updateMatrices(S), S.castShadow && R++), n.spotLightMatrix[M] = J.matrix, S.castShadow) {
          const G = t.get(S);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, n.spotShadow[M] = G, n.spotShadowMap[M] = K, T++;
        }
        M++;
      } else if (S.isRectAreaLight) {
        const z = e.get(S);
        z.color.copy(V).multiplyScalar(H), z.halfWidth.set(S.width * 0.5, 0, 0), z.halfHeight.set(0, S.height * 0.5, 0), n.rectArea[d] = z, d++;
      } else if (S.isPointLight) {
        const z = e.get(S);
        if (z.color.copy(S.color).multiplyScalar(S.intensity), z.distance = S.distance, z.decay = S.decay, S.castShadow) {
          const J = S.shadow, G = t.get(S);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, G.shadowCameraNear = J.camera.near, G.shadowCameraFar = J.camera.far, n.pointShadow[v] = G, n.pointShadowMap[v] = K, n.pointShadowMatrix[v] = S.shadow.matrix, E++;
        }
        n.point[v] = z, v++;
      } else if (S.isHemisphereLight) {
        const z = e.get(S);
        z.skyColor.copy(S.color).multiplyScalar(H), z.groundColor.copy(S.groundColor).multiplyScalar(H), n.hemi[h] = z, h++;
      }
    }
    d > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = se.LTC_FLOAT_1, n.rectAreaLTC2 = se.LTC_FLOAT_2) : (n.rectAreaLTC1 = se.LTC_HALF_1, n.rectAreaLTC2 = se.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = f, n.ambient[2] = p;
    const O = n.hash;
    (O.directionalLength !== m || O.pointLength !== v || O.spotLength !== M || O.rectAreaLength !== d || O.hemiLength !== h || O.numDirectionalShadows !== b || O.numPointShadows !== E || O.numSpotShadows !== T || O.numSpotMaps !== k || O.numLightProbes !== A) && (n.directional.length = m, n.spot.length = M, n.rectArea.length = d, n.point.length = v, n.hemi.length = h, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = T + k - R, n.spotLightMap.length = k, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = A, O.directionalLength = m, O.pointLength = v, O.spotLength = M, O.rectAreaLength = d, O.hemiLength = h, O.numDirectionalShadows = b, O.numPointShadows = E, O.numSpotShadows = T, O.numSpotMaps = k, O.numLightProbes = A, n.version = Zf++);
  }
  function l(c, u) {
    let f = 0, p = 0, m = 0, v = 0, M = 0;
    const d = u.matrixWorldInverse;
    for (let h = 0, b = c.length; h < b; h++) {
      const E = c[h];
      if (E.isDirectionalLight) {
        const T = n.directional[f];
        T.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(d), f++;
      } else if (E.isSpotLight) {
        const T = n.spot[m];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), T.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(d), m++;
      } else if (E.isRectAreaLight) {
        const T = n.rectArea[v];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), a.identity(), s.copy(E.matrixWorld), s.premultiply(d), a.extractRotation(s), T.halfWidth.set(E.width * 0.5, 0, 0), T.halfHeight.set(0, E.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), v++;
      } else if (E.isPointLight) {
        const T = n.point[p];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), p++;
      } else if (E.isHemisphereLight) {
        const T = n.hemi[M];
        T.direction.setFromMatrixPosition(E.matrixWorld), T.direction.transformDirection(d), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function io(i) {
  const e = new Qf(i), t = [], n = [];
  function r(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function ep(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new io(i), e.set(r, [o])) : s >= a.length ? (o = new io(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class tp extends ii {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = jl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class np extends ii {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ip = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function sp(i, e, t) {
  let n = new Go();
  const r = new je(), s = new je(), a = new nt(), o = new tp({ depthPacking: Kl }), l = new np(), c = {}, u = t.maxTextureSize, f = { [pn]: vt, [vt]: pn, [Kt]: Kt }, p = new Gt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new je() },
      radius: { value: 4 }
    },
    vertexShader: ip,
    fragmentShader: rp
  }), m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new Bt();
  v.setAttribute(
    "position",
    new _t(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new Jt(v, p), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = go;
  let h = this.type;
  this.render = function(R, A, O) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || R.length === 0) return;
    const Q = i.getRenderTarget(), g = i.getActiveCubeFace(), S = i.getActiveMipmapLevel(), V = i.state;
    V.setBlending(dn), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const H = h !== jt && this.type === jt, X = h === jt && this.type !== jt;
    for (let K = 0, z = R.length; K < z; K++) {
      const J = R[K], G = J.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      r.copy(G.mapSize);
      const oe = G.getFrameExtents();
      if (r.multiply(oe), s.copy(G.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / oe.x), r.x = s.x * oe.x, G.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / oe.y), r.y = s.y * oe.y, G.mapSize.y = s.y)), G.map === null || H === !0 || X === !0) {
        const D = this.type !== jt ? { minFilter: wt, magFilter: wt } : {};
        G.map !== null && G.map.dispose(), G.map = new Pn(r.x, r.y, D), G.map.texture.name = J.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(G.map), i.clear();
      const le = G.getViewportCount();
      for (let D = 0; D < le; D++) {
        const ie = G.getViewport(D);
        a.set(
          s.x * ie.x,
          s.y * ie.y,
          s.x * ie.z,
          s.y * ie.w
        ), V.viewport(a), G.updateMatrices(J, D), n = G.getFrustum(), T(A, O, G.camera, J, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === jt && b(G, O), G.needsUpdate = !1;
    }
    h = this.type, d.needsUpdate = !1, i.setRenderTarget(Q, g, S);
  };
  function b(R, A) {
    const O = e.update(M);
    p.defines.VSM_SAMPLES !== R.blurSamples && (p.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), R.mapPass === null && (R.mapPass = new Pn(r.x, r.y)), p.uniforms.shadow_pass.value = R.map.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(A, null, O, p, M, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(A, null, O, m, M, null);
  }
  function E(R, A, O, Q) {
    let g = null;
    const S = O.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (S !== void 0)
      g = S;
    else if (g = O.isPointLight === !0 ? l : o, i.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const V = g.uuid, H = A.uuid;
      let X = c[V];
      X === void 0 && (X = {}, c[V] = X);
      let K = X[H];
      K === void 0 && (K = g.clone(), X[H] = K, A.addEventListener("dispose", k)), g = K;
    }
    if (g.visible = A.visible, g.wireframe = A.wireframe, Q === jt ? g.side = A.shadowSide !== null ? A.shadowSide : A.side : g.side = A.shadowSide !== null ? A.shadowSide : f[A.side], g.alphaMap = A.alphaMap, g.alphaTest = A.alphaTest, g.map = A.map, g.clipShadows = A.clipShadows, g.clippingPlanes = A.clippingPlanes, g.clipIntersection = A.clipIntersection, g.displacementMap = A.displacementMap, g.displacementScale = A.displacementScale, g.displacementBias = A.displacementBias, g.wireframeLinewidth = A.wireframeLinewidth, g.linewidth = A.linewidth, O.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const V = i.properties.get(g);
      V.light = O;
    }
    return g;
  }
  function T(R, A, O, Q, g) {
    if (R.visible === !1) return;
    if (R.layers.test(A.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && g === jt) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, R.matrixWorld);
      const H = e.update(R), X = R.material;
      if (Array.isArray(X)) {
        const K = H.groups;
        for (let z = 0, J = K.length; z < J; z++) {
          const G = K[z], oe = X[G.materialIndex];
          if (oe && oe.visible) {
            const le = E(R, oe, Q, g);
            R.onBeforeShadow(i, R, A, O, H, le, G), i.renderBufferDirect(O, null, H, le, R, G), R.onAfterShadow(i, R, A, O, H, le, G);
          }
        }
      } else if (X.visible) {
        const K = E(R, X, Q, g);
        R.onBeforeShadow(i, R, A, O, H, K, null), i.renderBufferDirect(O, null, H, K, R, null), R.onAfterShadow(i, R, A, O, H, K, null);
      }
    }
    const V = R.children;
    for (let H = 0, X = V.length; H < X; H++)
      T(V[H], A, O, Q, g);
  }
  function k(R) {
    R.target.removeEventListener("dispose", k);
    for (const O in c) {
      const Q = c[O], g = R.target.uuid;
      g in Q && (Q[g].dispose(), delete Q[g]);
    }
  }
}
const ap = {
  [ts]: ns,
  [is]: as,
  [rs]: os,
  [$n]: ss,
  [ns]: ts,
  [as]: is,
  [os]: rs,
  [ss]: $n
};
function op(i) {
  function e() {
    let C = !1;
    const he = new nt();
    let W = null;
    const j = new nt(0, 0, 0, 0);
    return {
      setMask: function(ce) {
        W !== ce && !C && (i.colorMask(ce, ce, ce, ce), W = ce);
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce, de, Be, it, ft) {
        ft === !0 && (ce *= it, de *= it, Be *= it), he.set(ce, de, Be, it), j.equals(he) === !1 && (i.clearColor(ce, de, Be, it), j.copy(he));
      },
      reset: function() {
        C = !1, W = null, j.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let C = !1, he = !1, W = null, j = null, ce = null;
    return {
      setReversed: function(de) {
        he = de;
      },
      setTest: function(de) {
        de ? fe(i.DEPTH_TEST) : ee(i.DEPTH_TEST);
      },
      setMask: function(de) {
        W !== de && !C && (i.depthMask(de), W = de);
      },
      setFunc: function(de) {
        if (he && (de = ap[de]), j !== de) {
          switch (de) {
            case ts:
              i.depthFunc(i.NEVER);
              break;
            case ns:
              i.depthFunc(i.ALWAYS);
              break;
            case is:
              i.depthFunc(i.LESS);
              break;
            case $n:
              i.depthFunc(i.LEQUAL);
              break;
            case rs:
              i.depthFunc(i.EQUAL);
              break;
            case ss:
              i.depthFunc(i.GEQUAL);
              break;
            case as:
              i.depthFunc(i.GREATER);
              break;
            case os:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          j = de;
        }
      },
      setLocked: function(de) {
        C = de;
      },
      setClear: function(de) {
        ce !== de && (i.clearDepth(de), ce = de);
      },
      reset: function() {
        C = !1, W = null, j = null, ce = null;
      }
    };
  }
  function n() {
    let C = !1, he = null, W = null, j = null, ce = null, de = null, Be = null, it = null, ft = null;
    return {
      setTest: function(ke) {
        C || (ke ? fe(i.STENCIL_TEST) : ee(i.STENCIL_TEST));
      },
      setMask: function(ke) {
        he !== ke && !C && (i.stencilMask(ke), he = ke);
      },
      setFunc: function(ke, pt, kt) {
        (W !== ke || j !== pt || ce !== kt) && (i.stencilFunc(ke, pt, kt), W = ke, j = pt, ce = kt);
      },
      setOp: function(ke, pt, kt) {
        (de !== ke || Be !== pt || it !== kt) && (i.stencilOp(ke, pt, kt), de = ke, Be = pt, it = kt);
      },
      setLocked: function(ke) {
        C = ke;
      },
      setClear: function(ke) {
        ft !== ke && (i.clearStencil(ke), ft = ke);
      },
      reset: function() {
        C = !1, he = null, W = null, j = null, ce = null, de = null, Be = null, it = null, ft = null;
      }
    };
  }
  const r = new e(), s = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, v = !1, M = null, d = null, h = null, b = null, E = null, T = null, k = null, R = new Ge(0, 0, 0), A = 0, O = !1, Q = null, g = null, S = null, V = null, H = null;
  const X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, z = 0;
  const J = i.getParameter(i.VERSION);
  J.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(J)[1]), K = z >= 1) : J.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), K = z >= 2);
  let G = null, oe = {};
  const le = i.getParameter(i.SCISSOR_BOX), D = i.getParameter(i.VIEWPORT), ie = new nt().fromArray(le), xe = new nt().fromArray(D);
  function B(C, he, W, j) {
    const ce = new Uint8Array(4), de = i.createTexture();
    i.bindTexture(C, de), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Be = 0; Be < W; Be++)
      C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(he, 0, i.RGBA, 1, 1, j, 0, i.RGBA, i.UNSIGNED_BYTE, ce) : i.texImage2D(he + Be, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ce);
    return de;
  }
  const $ = {};
  $[i.TEXTURE_2D] = B(i.TEXTURE_2D, i.TEXTURE_2D, 1), $[i.TEXTURE_CUBE_MAP] = B(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), $[i.TEXTURE_2D_ARRAY] = B(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), $[i.TEXTURE_3D] = B(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), fe(i.DEPTH_TEST), s.setFunc($n), Ne(!1), ze(da), fe(i.CULL_FACE), w(dn);
  function fe(C) {
    c[C] !== !0 && (i.enable(C), c[C] = !0);
  }
  function ee(C) {
    c[C] !== !1 && (i.disable(C), c[C] = !1);
  }
  function Te(C, he) {
    return u[C] !== he ? (i.bindFramebuffer(C, he), u[C] = he, C === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = he), C === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = he), !0) : !1;
  }
  function ye(C, he) {
    let W = p, j = !1;
    if (C) {
      W = f.get(he), W === void 0 && (W = [], f.set(he, W));
      const ce = C.textures;
      if (W.length !== ce.length || W[0] !== i.COLOR_ATTACHMENT0) {
        for (let de = 0, Be = ce.length; de < Be; de++)
          W[de] = i.COLOR_ATTACHMENT0 + de;
        W.length = ce.length, j = !0;
      }
    } else
      W[0] !== i.BACK && (W[0] = i.BACK, j = !0);
    j && i.drawBuffers(W);
  }
  function Ie(C) {
    return m !== C ? (i.useProgram(C), m = C, !0) : !1;
  }
  const Ye = {
    [bn]: i.FUNC_ADD,
    [Sl]: i.FUNC_SUBTRACT,
    [El]: i.FUNC_REVERSE_SUBTRACT
  };
  Ye[yl] = i.MIN, Ye[Tl] = i.MAX;
  const Oe = {
    [bl]: i.ZERO,
    [Al]: i.ONE,
    [wl]: i.SRC_COLOR,
    [Qr]: i.SRC_ALPHA,
    [Ul]: i.SRC_ALPHA_SATURATE,
    [Ll]: i.DST_COLOR,
    [Cl]: i.DST_ALPHA,
    [Rl]: i.ONE_MINUS_SRC_COLOR,
    [es]: i.ONE_MINUS_SRC_ALPHA,
    [Dl]: i.ONE_MINUS_DST_COLOR,
    [Pl]: i.ONE_MINUS_DST_ALPHA,
    [Il]: i.CONSTANT_COLOR,
    [Nl]: i.ONE_MINUS_CONSTANT_COLOR,
    [Fl]: i.CONSTANT_ALPHA,
    [Ol]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function w(C, he, W, j, ce, de, Be, it, ft, ke) {
    if (C === dn) {
      v === !0 && (ee(i.BLEND), v = !1);
      return;
    }
    if (v === !1 && (fe(i.BLEND), v = !0), C !== Ml) {
      if (C !== M || ke !== O) {
        if ((d !== bn || E !== bn) && (i.blendEquation(i.FUNC_ADD), d = bn, E = bn), ke)
          switch (C) {
            case Yn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case sr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case fa:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case pa:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Yn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case sr:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case fa:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case pa:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        h = null, b = null, T = null, k = null, R.set(0, 0, 0), A = 0, M = C, O = ke;
      }
      return;
    }
    ce = ce || he, de = de || W, Be = Be || j, (he !== d || ce !== E) && (i.blendEquationSeparate(Ye[he], Ye[ce]), d = he, E = ce), (W !== h || j !== b || de !== T || Be !== k) && (i.blendFuncSeparate(Oe[W], Oe[j], Oe[de], Oe[Be]), h = W, b = j, T = de, k = Be), (it.equals(R) === !1 || ft !== A) && (i.blendColor(it.r, it.g, it.b, ft), R.copy(it), A = ft), M = C, O = !1;
  }
  function Mt(C, he) {
    C.side === Kt ? ee(i.CULL_FACE) : fe(i.CULL_FACE);
    let W = C.side === vt;
    he && (W = !W), Ne(W), C.blending === Yn && C.transparent === !1 ? w(dn) : w(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), s.setFunc(C.depthFunc), s.setTest(C.depthTest), s.setMask(C.depthWrite), r.setMask(C.colorWrite);
    const j = C.stencilWrite;
    a.setTest(j), j && (a.setMask(C.stencilWriteMask), a.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), a.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), $e(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? fe(i.SAMPLE_ALPHA_TO_COVERAGE) : ee(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ne(C) {
    Q !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), Q = C);
  }
  function ze(C) {
    C !== _l ? (fe(i.CULL_FACE), C !== g && (C === da ? i.cullFace(i.BACK) : C === vl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ee(i.CULL_FACE), g = C;
  }
  function we(C) {
    C !== S && (K && i.lineWidth(C), S = C);
  }
  function $e(C, he, W) {
    C ? (fe(i.POLYGON_OFFSET_FILL), (V !== he || H !== W) && (i.polygonOffset(he, W), V = he, H = W)) : ee(i.POLYGON_OFFSET_FILL);
  }
  function Pe(C) {
    C ? fe(i.SCISSOR_TEST) : ee(i.SCISSOR_TEST);
  }
  function y(C) {
    C === void 0 && (C = i.TEXTURE0 + X - 1), G !== C && (i.activeTexture(C), G = C);
  }
  function _(C, he, W) {
    W === void 0 && (G === null ? W = i.TEXTURE0 + X - 1 : W = G);
    let j = oe[W];
    j === void 0 && (j = { type: void 0, texture: void 0 }, oe[W] = j), (j.type !== C || j.texture !== he) && (G !== W && (i.activeTexture(W), G = W), i.bindTexture(C, he || $[C]), j.type = C, j.texture = he);
  }
  function U() {
    const C = oe[G];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function Y() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function q() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Me() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function pe() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function He() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function te() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Re() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ce(C) {
    ie.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), ie.copy(C));
  }
  function ge(C) {
    xe.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), xe.copy(C));
  }
  function Fe(C, he) {
    let W = l.get(he);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(he, W));
    let j = W.get(C);
    j === void 0 && (j = i.getUniformBlockIndex(he, C.name), W.set(C, j));
  }
  function Le(C, he) {
    const j = l.get(he).get(C);
    o.get(he) !== j && (i.uniformBlockBinding(he, j, C.__bindingPointIndex), o.set(he, j));
  }
  function Ke() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, G = null, oe = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, v = !1, M = null, d = null, h = null, b = null, E = null, T = null, k = null, R = new Ge(0, 0, 0), A = 0, O = !1, Q = null, g = null, S = null, V = null, H = null, ie.set(0, 0, i.canvas.width, i.canvas.height), xe.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: s,
      stencil: a
    },
    enable: fe,
    disable: ee,
    bindFramebuffer: Te,
    drawBuffers: ye,
    useProgram: Ie,
    setBlending: w,
    setMaterial: Mt,
    setFlipSided: Ne,
    setCullFace: ze,
    setLineWidth: we,
    setPolygonOffset: $e,
    setScissorTest: Pe,
    activeTexture: y,
    bindTexture: _,
    unbindTexture: U,
    compressedTexImage2D: Y,
    compressedTexImage3D: Z,
    texImage2D: me,
    texImage3D: Re,
    updateUBOMapping: Fe,
    uniformBlockBinding: Le,
    texStorage2D: He,
    texStorage3D: te,
    texSubImage2D: q,
    texSubImage3D: Me,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: pe,
    scissor: Ce,
    viewport: ge,
    reset: Ke
  };
}
function ro(i, e, t, n) {
  const r = lp(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Eo:
      return i * e;
    case To:
      return i * e;
    case bo:
      return i * e * 2;
    case Ao:
      return i * e / r.components * r.byteLength;
    case Ys:
      return i * e / r.components * r.byteLength;
    case wo:
      return i * e * 2 / r.components * r.byteLength;
    case js:
      return i * e * 2 / r.components * r.byteLength;
    case yo:
      return i * e * 3 / r.components * r.byteLength;
    case Ot:
      return i * e * 4 / r.components * r.byteLength;
    case Ks:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Ji:
    case Qi:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case er:
    case tr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case fs:
    case ms:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case ds:
    case ps:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case gs:
    case _s:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case vs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case xs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ms:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ss:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Es:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ys:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ts:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case bs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case As:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ws:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Rs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Cs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ps:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ls:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ds:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case nr:
    case Us:
    case Is:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Ro:
    case Ns:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Fs:
    case Os:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function lp(i) {
  switch (i) {
    case en:
    case xo:
      return { byteLength: 1, components: 1 };
    case gi:
    case Mo:
    case _i:
      return { byteLength: 2, components: 1 };
    case Xs:
    case qs:
      return { byteLength: 2, components: 4 };
    case Cn:
    case Ws:
    case $t:
      return { byteLength: 4, components: 1 };
    case So:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function cp(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new je(), u = /* @__PURE__ */ new WeakMap();
  let f;
  const p = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(y, _) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, _)
    ) : ur("canvas");
  }
  function M(y, _, U) {
    let Y = 1;
    const Z = Pe(y);
    if ((Z.width > U || Z.height > U) && (Y = U / Math.max(Z.width, Z.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const q = Math.floor(Y * Z.width), Me = Math.floor(Y * Z.height);
        f === void 0 && (f = v(q, Me));
        const ae = _ ? v(q, Me) : f;
        return ae.width = q, ae.height = Me, ae.getContext("2d").drawImage(y, 0, 0, q, Me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + q + "x" + Me + ")."), ae;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), y;
    return y;
  }
  function d(y) {
    return y.generateMipmaps && y.minFilter !== wt && y.minFilter !== Nt;
  }
  function h(y) {
    i.generateMipmap(y);
  }
  function b(y, _, U, Y, Z = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let q = _;
    if (_ === i.RED && (U === i.FLOAT && (q = i.R32F), U === i.HALF_FLOAT && (q = i.R16F), U === i.UNSIGNED_BYTE && (q = i.R8)), _ === i.RED_INTEGER && (U === i.UNSIGNED_BYTE && (q = i.R8UI), U === i.UNSIGNED_SHORT && (q = i.R16UI), U === i.UNSIGNED_INT && (q = i.R32UI), U === i.BYTE && (q = i.R8I), U === i.SHORT && (q = i.R16I), U === i.INT && (q = i.R32I)), _ === i.RG && (U === i.FLOAT && (q = i.RG32F), U === i.HALF_FLOAT && (q = i.RG16F), U === i.UNSIGNED_BYTE && (q = i.RG8)), _ === i.RG_INTEGER && (U === i.UNSIGNED_BYTE && (q = i.RG8UI), U === i.UNSIGNED_SHORT && (q = i.RG16UI), U === i.UNSIGNED_INT && (q = i.RG32UI), U === i.BYTE && (q = i.RG8I), U === i.SHORT && (q = i.RG16I), U === i.INT && (q = i.RG32I)), _ === i.RGB_INTEGER && (U === i.UNSIGNED_BYTE && (q = i.RGB8UI), U === i.UNSIGNED_SHORT && (q = i.RGB16UI), U === i.UNSIGNED_INT && (q = i.RGB32UI), U === i.BYTE && (q = i.RGB8I), U === i.SHORT && (q = i.RGB16I), U === i.INT && (q = i.RGB32I)), _ === i.RGBA_INTEGER && (U === i.UNSIGNED_BYTE && (q = i.RGBA8UI), U === i.UNSIGNED_SHORT && (q = i.RGBA16UI), U === i.UNSIGNED_INT && (q = i.RGBA32UI), U === i.BYTE && (q = i.RGBA8I), U === i.SHORT && (q = i.RGBA16I), U === i.INT && (q = i.RGBA32I)), _ === i.RGB && U === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), _ === i.RGBA) {
      const Me = Z ? ar : Xe.getTransfer(Y);
      U === i.FLOAT && (q = i.RGBA32F), U === i.HALF_FLOAT && (q = i.RGBA16F), U === i.UNSIGNED_BYTE && (q = Me === Je ? i.SRGB8_ALPHA8 : i.RGBA8), U === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), U === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
    }
    return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function E(y, _) {
    let U;
    return y ? _ === null || _ === Cn || _ === Qn ? U = i.DEPTH24_STENCIL8 : _ === $t ? U = i.DEPTH32F_STENCIL8 : _ === gi && (U = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Cn || _ === Qn ? U = i.DEPTH_COMPONENT24 : _ === $t ? U = i.DEPTH_COMPONENT32F : _ === gi && (U = i.DEPTH_COMPONENT16), U;
  }
  function T(y, _) {
    return d(y) === !0 || y.isFramebufferTexture && y.minFilter !== wt && y.minFilter !== Nt ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1;
  }
  function k(y) {
    const _ = y.target;
    _.removeEventListener("dispose", k), A(_), _.isVideoTexture && u.delete(_);
  }
  function R(y) {
    const _ = y.target;
    _.removeEventListener("dispose", R), Q(_);
  }
  function A(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0) return;
    const U = y.source, Y = p.get(U);
    if (Y) {
      const Z = Y[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && O(y), Object.keys(Y).length === 0 && p.delete(U);
    }
    n.remove(y);
  }
  function O(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const U = y.source, Y = p.get(U);
    delete Y[_.__cacheKey], a.memory.textures--;
  }
  function Q(y) {
    const _ = n.get(y);
    if (y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(_.__webglFramebuffer[Y]))
          for (let Z = 0; Z < _.__webglFramebuffer[Y].length; Z++) i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[Y]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let Y = 0; Y < _.__webglFramebuffer.length; Y++) i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
          _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const U = y.textures;
    for (let Y = 0, Z = U.length; Y < Z; Y++) {
      const q = n.get(U[Y]);
      q.__webglTexture && (i.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(U[Y]);
    }
    n.remove(y);
  }
  let g = 0;
  function S() {
    g = 0;
  }
  function V() {
    const y = g;
    return y >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), g += 1, y;
  }
  function H(y) {
    const _ = [];
    return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.colorSpace), _.join();
  }
  function X(y, _) {
    const U = n.get(y);
    if (y.isVideoTexture && we(y), y.isRenderTargetTexture === !1 && y.version > 0 && U.__version !== y.version) {
      const Y = y.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        xe(U, y, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, U.__webglTexture, i.TEXTURE0 + _);
  }
  function K(y, _) {
    const U = n.get(y);
    if (y.version > 0 && U.__version !== y.version) {
      xe(U, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, U.__webglTexture, i.TEXTURE0 + _);
  }
  function z(y, _) {
    const U = n.get(y);
    if (y.version > 0 && U.__version !== y.version) {
      xe(U, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, U.__webglTexture, i.TEXTURE0 + _);
  }
  function J(y, _) {
    const U = n.get(y);
    if (y.version > 0 && U.__version !== y.version) {
      B(U, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, U.__webglTexture, i.TEXTURE0 + _);
  }
  const G = {
    [us]: i.REPEAT,
    [wn]: i.CLAMP_TO_EDGE,
    [hs]: i.MIRRORED_REPEAT
  }, oe = {
    [wt]: i.NEAREST,
    [Yl]: i.NEAREST_MIPMAP_NEAREST,
    [Ai]: i.NEAREST_MIPMAP_LINEAR,
    [Nt]: i.LINEAR,
    [Sr]: i.LINEAR_MIPMAP_NEAREST,
    [Rn]: i.LINEAR_MIPMAP_LINEAR
  }, le = {
    [Jl]: i.NEVER,
    [rc]: i.ALWAYS,
    [Ql]: i.LESS,
    [Co]: i.LEQUAL,
    [ec]: i.EQUAL,
    [ic]: i.GEQUAL,
    [tc]: i.GREATER,
    [nc]: i.NOTEQUAL
  };
  function D(y, _) {
    if (_.type === $t && e.has("OES_texture_float_linear") === !1 && (_.magFilter === Nt || _.magFilter === Sr || _.magFilter === Ai || _.magFilter === Rn || _.minFilter === Nt || _.minFilter === Sr || _.minFilter === Ai || _.minFilter === Rn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, G[_.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, G[_.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, G[_.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, oe[_.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, oe[_.minFilter]), _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, le[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === wt || _.minFilter !== Ai && _.minFilter !== Rn || _.type === $t && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const U = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function ie(y, _) {
    let U = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, _.addEventListener("dispose", k));
    const Y = _.source;
    let Z = p.get(Y);
    Z === void 0 && (Z = {}, p.set(Y, Z));
    const q = H(_);
    if (q !== y.__cacheKey) {
      Z[q] === void 0 && (Z[q] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), Z[q].usedTimes++;
      const Me = Z[y.__cacheKey];
      Me !== void 0 && (Z[y.__cacheKey].usedTimes--, Me.usedTimes === 0 && O(_)), y.__cacheKey = q, y.__webglTexture = Z[q].texture;
    }
    return U;
  }
  function xe(y, _, U) {
    let Y = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Y = i.TEXTURE_3D);
    const Z = ie(y, _), q = _.source;
    t.bindTexture(Y, y.__webglTexture, i.TEXTURE0 + U);
    const Me = n.get(q);
    if (q.version !== Me.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + U);
      const ae = Xe.getPrimaries(Xe.workingColorSpace), pe = _.colorSpace === un ? null : Xe.getPrimaries(_.colorSpace), He = _.colorSpace === un || ae === pe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, He);
      let te = M(_.image, !1, r.maxTextureSize);
      te = $e(_, te);
      const me = s.convert(_.format, _.colorSpace), Re = s.convert(_.type);
      let Ce = b(_.internalFormat, me, Re, _.colorSpace, _.isVideoTexture);
      D(Y, _);
      let ge;
      const Fe = _.mipmaps, Le = _.isVideoTexture !== !0, Ke = Me.__version === void 0 || Z === !0, C = q.dataReady, he = T(_, te);
      if (_.isDepthTexture)
        Ce = E(_.format === ei, _.type), Ke && (Le ? t.texStorage2D(i.TEXTURE_2D, 1, Ce, te.width, te.height) : t.texImage2D(i.TEXTURE_2D, 0, Ce, te.width, te.height, 0, me, Re, null));
      else if (_.isDataTexture)
        if (Fe.length > 0) {
          Le && Ke && t.texStorage2D(i.TEXTURE_2D, he, Ce, Fe[0].width, Fe[0].height);
          for (let W = 0, j = Fe.length; W < j; W++)
            ge = Fe[W], Le ? C && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, Re, ge.data) : t.texImage2D(i.TEXTURE_2D, W, Ce, ge.width, ge.height, 0, me, Re, ge.data);
          _.generateMipmaps = !1;
        } else
          Le ? (Ke && t.texStorage2D(i.TEXTURE_2D, he, Ce, te.width, te.height), C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, te.width, te.height, me, Re, te.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ce, te.width, te.height, 0, me, Re, te.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Le && Ke && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Ce, Fe[0].width, Fe[0].height, te.depth);
          for (let W = 0, j = Fe.length; W < j; W++)
            if (ge = Fe[W], _.format !== Ot)
              if (me !== null)
                if (Le) {
                  if (C)
                    if (_.layerUpdates.size > 0) {
                      const ce = ro(ge.width, ge.height, _.format, _.type);
                      for (const de of _.layerUpdates) {
                        const Be = ge.data.subarray(
                          de * ce / ge.data.BYTES_PER_ELEMENT,
                          (de + 1) * ce / ge.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, de, ge.width, ge.height, 1, me, Be, 0, 0);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ge.width, ge.height, te.depth, me, ge.data, 0, 0);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, Ce, ge.width, ge.height, te.depth, 0, ge.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Le ? C && t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ge.width, ge.height, te.depth, me, Re, ge.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, Ce, ge.width, ge.height, te.depth, 0, me, Re, ge.data);
        } else {
          Le && Ke && t.texStorage2D(i.TEXTURE_2D, he, Ce, Fe[0].width, Fe[0].height);
          for (let W = 0, j = Fe.length; W < j; W++)
            ge = Fe[W], _.format !== Ot ? me !== null ? Le ? C && t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, ge.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, Ce, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Le ? C && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, Re, ge.data) : t.texImage2D(i.TEXTURE_2D, W, Ce, ge.width, ge.height, 0, me, Re, ge.data);
        }
      else if (_.isDataArrayTexture)
        if (Le) {
          if (Ke && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Ce, te.width, te.height, te.depth), C)
            if (_.layerUpdates.size > 0) {
              const W = ro(te.width, te.height, _.format, _.type);
              for (const j of _.layerUpdates) {
                const ce = te.data.subarray(
                  j * W / te.data.BYTES_PER_ELEMENT,
                  (j + 1) * W / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, j, te.width, te.height, 1, me, Re, ce);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, me, Re, te.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ce, te.width, te.height, te.depth, 0, me, Re, te.data);
      else if (_.isData3DTexture)
        Le ? (Ke && t.texStorage3D(i.TEXTURE_3D, he, Ce, te.width, te.height, te.depth), C && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, me, Re, te.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ce, te.width, te.height, te.depth, 0, me, Re, te.data);
      else if (_.isFramebufferTexture) {
        if (Ke)
          if (Le)
            t.texStorage2D(i.TEXTURE_2D, he, Ce, te.width, te.height);
          else {
            let W = te.width, j = te.height;
            for (let ce = 0; ce < he; ce++)
              t.texImage2D(i.TEXTURE_2D, ce, Ce, W, j, 0, me, Re, null), W >>= 1, j >>= 1;
          }
      } else if (Fe.length > 0) {
        if (Le && Ke) {
          const W = Pe(Fe[0]);
          t.texStorage2D(i.TEXTURE_2D, he, Ce, W.width, W.height);
        }
        for (let W = 0, j = Fe.length; W < j; W++)
          ge = Fe[W], Le ? C && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, me, Re, ge) : t.texImage2D(i.TEXTURE_2D, W, Ce, me, Re, ge);
        _.generateMipmaps = !1;
      } else if (Le) {
        if (Ke) {
          const W = Pe(te);
          t.texStorage2D(i.TEXTURE_2D, he, Ce, W.width, W.height);
        }
        C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, me, Re, te);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Ce, me, Re, te);
      d(_) && h(Y), Me.__version = q.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function B(y, _, U) {
    if (_.image.length !== 6) return;
    const Y = ie(y, _), Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + U);
    const q = n.get(Z);
    if (Z.version !== q.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + U);
      const Me = Xe.getPrimaries(Xe.workingColorSpace), ae = _.colorSpace === un ? null : Xe.getPrimaries(_.colorSpace), pe = _.colorSpace === un || Me === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, pe);
      const He = _.isCompressedTexture || _.image[0].isCompressedTexture, te = _.image[0] && _.image[0].isDataTexture, me = [];
      for (let j = 0; j < 6; j++)
        !He && !te ? me[j] = M(_.image[j], !0, r.maxCubemapSize) : me[j] = te ? _.image[j].image : _.image[j], me[j] = $e(_, me[j]);
      const Re = me[0], Ce = s.convert(_.format, _.colorSpace), ge = s.convert(_.type), Fe = b(_.internalFormat, Ce, ge, _.colorSpace), Le = _.isVideoTexture !== !0, Ke = q.__version === void 0 || Y === !0, C = Z.dataReady;
      let he = T(_, Re);
      D(i.TEXTURE_CUBE_MAP, _);
      let W;
      if (He) {
        Le && Ke && t.texStorage2D(i.TEXTURE_CUBE_MAP, he, Fe, Re.width, Re.height);
        for (let j = 0; j < 6; j++) {
          W = me[j].mipmaps;
          for (let ce = 0; ce < W.length; ce++) {
            const de = W[ce];
            _.format !== Ot ? Ce !== null ? Le ? C && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce, 0, 0, de.width, de.height, Ce, de.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce, Fe, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce, 0, 0, de.width, de.height, Ce, ge, de.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce, Fe, de.width, de.height, 0, Ce, ge, de.data);
          }
        }
      } else {
        if (W = _.mipmaps, Le && Ke) {
          W.length > 0 && he++;
          const j = Pe(me[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, he, Fe, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (te) {
            Le ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, me[j].width, me[j].height, Ce, ge, me[j].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Fe, me[j].width, me[j].height, 0, Ce, ge, me[j].data);
            for (let ce = 0; ce < W.length; ce++) {
              const Be = W[ce].image[j].image;
              Le ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce + 1, 0, 0, Be.width, Be.height, Ce, ge, Be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce + 1, Fe, Be.width, Be.height, 0, Ce, ge, Be.data);
            }
          } else {
            Le ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Ce, ge, me[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Fe, Ce, ge, me[j]);
            for (let ce = 0; ce < W.length; ce++) {
              const de = W[ce];
              Le ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce + 1, 0, 0, Ce, ge, de.image[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ce + 1, Fe, Ce, ge, de.image[j]);
            }
          }
      }
      d(_) && h(i.TEXTURE_CUBE_MAP), q.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function $(y, _, U, Y, Z, q) {
    const Me = s.convert(U.format, U.colorSpace), ae = s.convert(U.type), pe = b(U.internalFormat, Me, ae, U.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const te = Math.max(1, _.width >> q), me = Math.max(1, _.height >> q);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, q, pe, te, me, _.depth, 0, Me, ae, null) : t.texImage2D(Z, q, pe, te, me, 0, Me, ae, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, Z, n.get(U).__webglTexture, 0, Ne(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, Z, n.get(U).__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function fe(y, _, U) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer) {
      const Y = _.depthTexture, Z = Y && Y.isDepthTexture ? Y.type : null, q = E(_.stencilBuffer, Z), Me = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = Ne(_);
      ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ae, q, _.width, _.height) : U ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, q, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, q, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Me, i.RENDERBUFFER, y);
    } else {
      const Y = _.textures;
      for (let Z = 0; Z < Y.length; Z++) {
        const q = Y[Z], Me = s.convert(q.format, q.colorSpace), ae = s.convert(q.type), pe = b(q.internalFormat, Me, ae, q.colorSpace), He = Ne(_);
        U && ze(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, He, pe, _.width, _.height) : ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, He, pe, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, pe, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ee(y, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), X(_.depthTexture, 0);
    const Y = n.get(_.depthTexture).__webglTexture, Z = Ne(_);
    if (_.depthTexture.format === jn)
      ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0);
    else if (_.depthTexture.format === ei)
      ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Te(y) {
    const _ = n.get(y), U = y.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== y.depthTexture) {
      const Y = y.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), Y) {
        const Z = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, Y.removeEventListener("dispose", Z);
        };
        Y.addEventListener("dispose", Z), _.__depthDisposeCallback = Z;
      }
      _.__boundDepthTexture = Y;
    }
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      ee(_.__webglFramebuffer, y);
    } else if (U) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]), _.__webglDepthbuffer[Y] === void 0)
          _.__webglDepthbuffer[Y] = i.createRenderbuffer(), fe(_.__webglDepthbuffer[Y], y, !1);
        else {
          const Z = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = _.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
      _.__webglDepthbuffer = i.createRenderbuffer(), fe(_.__webglDepthbuffer, y, !1);
    else {
      const Y = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = _.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ye(y, _, U) {
    const Y = n.get(y);
    _ !== void 0 && $(Y.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), U !== void 0 && Te(y);
  }
  function Ie(y) {
    const _ = y.texture, U = n.get(y), Y = n.get(_);
    y.addEventListener("dispose", R);
    const Z = y.textures, q = y.isWebGLCubeRenderTarget === !0, Me = Z.length > 1;
    if (Me || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = _.version, a.memory.textures++), q) {
      U.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          U.__webglFramebuffer[ae] = [];
          for (let pe = 0; pe < _.mipmaps.length; pe++)
            U.__webglFramebuffer[ae][pe] = i.createFramebuffer();
        } else
          U.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let ae = 0; ae < _.mipmaps.length; ae++)
          U.__webglFramebuffer[ae] = i.createFramebuffer();
      } else
        U.__webglFramebuffer = i.createFramebuffer();
      if (Me)
        for (let ae = 0, pe = Z.length; ae < pe; ae++) {
          const He = n.get(Z[ae]);
          He.__webglTexture === void 0 && (He.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && ze(y) === !1) {
        U.__webglMultisampledFramebuffer = i.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Z.length; ae++) {
          const pe = Z[ae];
          U.__webglColorRenderbuffer[ae] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, U.__webglColorRenderbuffer[ae]);
          const He = s.convert(pe.format, pe.colorSpace), te = s.convert(pe.type), me = b(pe.internalFormat, He, te, pe.colorSpace, y.isXRRenderTarget === !0), Re = Ne(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Re, me, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, U.__webglColorRenderbuffer[ae]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (U.__webglDepthRenderbuffer = i.createRenderbuffer(), fe(U.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), D(i.TEXTURE_CUBE_MAP, _);
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let pe = 0; pe < _.mipmaps.length; pe++)
            $(U.__webglFramebuffer[ae][pe], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, pe);
        else
          $(U.__webglFramebuffer[ae], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      d(_) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Me) {
      for (let ae = 0, pe = Z.length; ae < pe; ae++) {
        const He = Z[ae], te = n.get(He);
        t.bindTexture(i.TEXTURE_2D, te.__webglTexture), D(i.TEXTURE_2D, He), $(U.__webglFramebuffer, y, He, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, 0), d(He) && h(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (ae = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, Y.__webglTexture), D(ae, _), _.mipmaps && _.mipmaps.length > 0)
        for (let pe = 0; pe < _.mipmaps.length; pe++)
          $(U.__webglFramebuffer[pe], y, _, i.COLOR_ATTACHMENT0, ae, pe);
      else
        $(U.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, ae, 0);
      d(_) && h(ae), t.unbindTexture();
    }
    y.depthBuffer && Te(y);
  }
  function Ye(y) {
    const _ = y.textures;
    for (let U = 0, Y = _.length; U < Y; U++) {
      const Z = _[U];
      if (d(Z)) {
        const q = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, Me = n.get(Z).__webglTexture;
        t.bindTexture(q, Me), h(q), t.unbindTexture();
      }
    }
  }
  const Oe = [], w = [];
  function Mt(y) {
    if (y.samples > 0) {
      if (ze(y) === !1) {
        const _ = y.textures, U = y.width, Y = y.height;
        let Z = i.COLOR_BUFFER_BIT;
        const q = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Me = n.get(y), ae = _.length > 1;
        if (ae)
          for (let pe = 0; pe < _.length; pe++)
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        for (let pe = 0; pe < _.length; pe++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ae) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Me.__webglColorRenderbuffer[pe]);
            const He = n.get(_[pe]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, He, 0);
          }
          i.blitFramebuffer(0, 0, U, Y, 0, 0, U, Y, Z, i.NEAREST), l === !0 && (Oe.length = 0, w.length = 0, Oe.push(i.COLOR_ATTACHMENT0 + pe), y.depthBuffer && y.resolveDepthBuffer === !1 && (Oe.push(q), w.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, w)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Oe));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ae)
          for (let pe = 0; pe < _.length; pe++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, Me.__webglColorRenderbuffer[pe]);
            const He = n.get(_[pe]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, He, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) {
        const _ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Ne(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function ze(y) {
    const _ = n.get(y);
    return y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function we(y) {
    const _ = a.render.frame;
    u.get(y) !== _ && (u.set(y, _), y.update());
  }
  function $e(y, _) {
    const U = y.colorSpace, Y = y.format, Z = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || U !== mn && U !== un && (Xe.getTransfer(U) === Je ? (Y !== Ot || Z !== en) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), _;
  }
  function Pe(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width, c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth, c.height = y.displayHeight) : (c.width = y.width, c.height = y.height), c;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = S, this.setTexture2D = X, this.setTexture2DArray = K, this.setTexture3D = z, this.setTextureCube = J, this.rebindTextures = ye, this.setupRenderTarget = Ie, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = Mt, this.setupDepthRenderbuffer = Te, this.setupFrameBufferTexture = $, this.useMultisampledRTT = ze;
}
function up(i, e) {
  function t(n, r = un) {
    let s;
    const a = Xe.getTransfer(r);
    if (n === en) return i.UNSIGNED_BYTE;
    if (n === Xs) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === qs) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === So) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === xo) return i.BYTE;
    if (n === Mo) return i.SHORT;
    if (n === gi) return i.UNSIGNED_SHORT;
    if (n === Ws) return i.INT;
    if (n === Cn) return i.UNSIGNED_INT;
    if (n === $t) return i.FLOAT;
    if (n === _i) return i.HALF_FLOAT;
    if (n === Eo) return i.ALPHA;
    if (n === yo) return i.RGB;
    if (n === Ot) return i.RGBA;
    if (n === To) return i.LUMINANCE;
    if (n === bo) return i.LUMINANCE_ALPHA;
    if (n === jn) return i.DEPTH_COMPONENT;
    if (n === ei) return i.DEPTH_STENCIL;
    if (n === Ao) return i.RED;
    if (n === Ys) return i.RED_INTEGER;
    if (n === wo) return i.RG;
    if (n === js) return i.RG_INTEGER;
    if (n === Ks) return i.RGBA_INTEGER;
    if (n === Ji || n === Qi || n === er || n === tr)
      if (a === Je)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Ji) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Qi) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === er) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === tr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Ji) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Qi) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === er) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === tr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === ds || n === fs || n === ps || n === ms)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === ds) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === fs) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ps) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === ms) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === gs || n === _s || n === vs)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === gs || n === _s) return a === Je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === vs) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === xs || n === Ms || n === Ss || n === Es || n === ys || n === Ts || n === bs || n === As || n === ws || n === Rs || n === Cs || n === Ps || n === Ls || n === Ds)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === xs) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ms) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ss) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Es) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ys) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ts) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === bs) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === As) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ws) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Rs) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Cs) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ps) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ls) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Ds) return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === nr || n === Us || n === Is)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === nr) return a === Je ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Us) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Is) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Ro || n === Ns || n === Fs || n === Os)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === nr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ns) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Fs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Os) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Qn ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class hp extends It {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Yi extends dt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const dp = { type: "move" };
class Zr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Yi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Yi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Yi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const d = t.getJointPose(M, n), h = this._getHandJoint(c, M);
          d !== null && (h.matrix.fromArray(d.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = d.radius), h.visible = d !== null;
        }
        const u = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], p = u.position.distanceTo(f.position), m = 0.02, v = 5e-3;
        c.inputState.pinching && p > m + v ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && p <= m - v && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(dp)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Yi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const fp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, pp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class mp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new xt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Gt({
        vertexShader: fp,
        fragmentShader: pp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Jt(new mr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class gp extends ni {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, f = null, p = null, m = null, v = null;
    const M = new mp(), d = t.getContextAttributes();
    let h = null, b = null;
    const E = [], T = [], k = new je();
    let R = null;
    const A = new It();
    A.layers.enable(1), A.viewport = new nt();
    const O = new It();
    O.layers.enable(2), O.viewport = new nt();
    const Q = [A, O], g = new hp();
    g.layers.enable(1), g.layers.enable(2);
    let S = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(B) {
      let $ = E[B];
      return $ === void 0 && ($ = new Zr(), E[B] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(B) {
      let $ = E[B];
      return $ === void 0 && ($ = new Zr(), E[B] = $), $.getGripSpace();
    }, this.getHand = function(B) {
      let $ = E[B];
      return $ === void 0 && ($ = new Zr(), E[B] = $), $.getHandSpace();
    };
    function H(B) {
      const $ = T.indexOf(B.inputSource);
      if ($ === -1)
        return;
      const fe = E[$];
      fe !== void 0 && (fe.update(B.inputSource, B.frame, c || a), fe.dispatchEvent({ type: B.type, data: B.inputSource }));
    }
    function X() {
      r.removeEventListener("select", H), r.removeEventListener("selectstart", H), r.removeEventListener("selectend", H), r.removeEventListener("squeeze", H), r.removeEventListener("squeezestart", H), r.removeEventListener("squeezeend", H), r.removeEventListener("end", X), r.removeEventListener("inputsourceschange", K);
      for (let B = 0; B < E.length; B++) {
        const $ = T[B];
        $ !== null && (T[B] = null, E[B].disconnect($));
      }
      S = null, V = null, M.reset(), e.setRenderTarget(h), m = null, p = null, f = null, r = null, b = null, xe.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(k.width, k.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(B) {
      s = B, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(B) {
      o = B, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(B) {
      c = B;
    }, this.getBaseLayer = function() {
      return p !== null ? p : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(B) {
      if (r = B, r !== null) {
        if (h = e.getRenderTarget(), r.addEventListener("select", H), r.addEventListener("selectstart", H), r.addEventListener("selectend", H), r.addEventListener("squeeze", H), r.addEventListener("squeezestart", H), r.addEventListener("squeezeend", H), r.addEventListener("end", X), r.addEventListener("inputsourceschange", K), d.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(k), r.renderState.layers === void 0) {
          const $ = {
            antialias: d.antialias,
            alpha: !0,
            depth: d.depth,
            stencil: d.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, $), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), b = new Pn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Ot,
              type: en,
              colorSpace: e.outputColorSpace,
              stencilBuffer: d.stencil
            }
          );
        } else {
          let $ = null, fe = null, ee = null;
          d.depth && (ee = d.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, $ = d.stencil ? ei : jn, fe = d.stencil ? Qn : Cn);
          const Te = {
            colorFormat: t.RGBA8,
            depthFormat: ee,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), p = f.createProjectionLayer(Te), r.updateRenderState({ layers: [p] }), e.setPixelRatio(1), e.setSize(p.textureWidth, p.textureHeight, !1), b = new Pn(
            p.textureWidth,
            p.textureHeight,
            {
              format: Ot,
              type: en,
              depthTexture: new Wo(p.textureWidth, p.textureHeight, fe, void 0, void 0, void 0, void 0, void 0, void 0, $),
              stencilBuffer: d.stencil,
              colorSpace: e.outputColorSpace,
              samples: d.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        b.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), xe.setContext(r), xe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    function K(B) {
      for (let $ = 0; $ < B.removed.length; $++) {
        const fe = B.removed[$], ee = T.indexOf(fe);
        ee >= 0 && (T[ee] = null, E[ee].disconnect(fe));
      }
      for (let $ = 0; $ < B.added.length; $++) {
        const fe = B.added[$];
        let ee = T.indexOf(fe);
        if (ee === -1) {
          for (let ye = 0; ye < E.length; ye++)
            if (ye >= T.length) {
              T.push(fe), ee = ye;
              break;
            } else if (T[ye] === null) {
              T[ye] = fe, ee = ye;
              break;
            }
          if (ee === -1) break;
        }
        const Te = E[ee];
        Te && Te.connect(fe);
      }
    }
    const z = new N(), J = new N();
    function G(B, $, fe) {
      z.setFromMatrixPosition($.matrixWorld), J.setFromMatrixPosition(fe.matrixWorld);
      const ee = z.distanceTo(J), Te = $.projectionMatrix.elements, ye = fe.projectionMatrix.elements, Ie = Te[14] / (Te[10] - 1), Ye = Te[14] / (Te[10] + 1), Oe = (Te[9] + 1) / Te[5], w = (Te[9] - 1) / Te[5], Mt = (Te[8] - 1) / Te[0], Ne = (ye[8] + 1) / ye[0], ze = Ie * Mt, we = Ie * Ne, $e = ee / (-Mt + Ne), Pe = $e * -Mt;
      if ($.matrixWorld.decompose(B.position, B.quaternion, B.scale), B.translateX(Pe), B.translateZ($e), B.matrixWorld.compose(B.position, B.quaternion, B.scale), B.matrixWorldInverse.copy(B.matrixWorld).invert(), Te[10] === -1)
        B.projectionMatrix.copy($.projectionMatrix), B.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const y = Ie + $e, _ = Ye + $e, U = ze - Pe, Y = we + (ee - Pe), Z = Oe * Ye / _ * y, q = w * Ye / _ * y;
        B.projectionMatrix.makePerspective(U, Y, Z, q, y, _), B.projectionMatrixInverse.copy(B.projectionMatrix).invert();
      }
    }
    function oe(B, $) {
      $ === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices($.matrixWorld, B.matrix), B.matrixWorldInverse.copy(B.matrixWorld).invert();
    }
    this.updateCamera = function(B) {
      if (r === null) return;
      let $ = B.near, fe = B.far;
      M.texture !== null && (M.depthNear > 0 && ($ = M.depthNear), M.depthFar > 0 && (fe = M.depthFar)), g.near = O.near = A.near = $, g.far = O.far = A.far = fe, (S !== g.near || V !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), S = g.near, V = g.far);
      const ee = B.parent, Te = g.cameras;
      oe(g, ee);
      for (let ye = 0; ye < Te.length; ye++)
        oe(Te[ye], ee);
      Te.length === 2 ? G(g, A, O) : g.projectionMatrix.copy(A.projectionMatrix), le(B, g, ee);
    };
    function le(B, $, fe) {
      fe === null ? B.matrix.copy($.matrixWorld) : (B.matrix.copy(fe.matrixWorld), B.matrix.invert(), B.matrix.multiply($.matrixWorld)), B.matrix.decompose(B.position, B.quaternion, B.scale), B.updateMatrixWorld(!0), B.projectionMatrix.copy($.projectionMatrix), B.projectionMatrixInverse.copy($.projectionMatrixInverse), B.isPerspectiveCamera && (B.fov = Bs * 2 * Math.atan(1 / B.projectionMatrix.elements[5]), B.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(p === null && m === null))
        return l;
    }, this.setFoveation = function(B) {
      l = B, p !== null && (p.fixedFoveation = B), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = B);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(g);
    };
    let D = null;
    function ie(B, $) {
      if (u = $.getViewerPose(c || a), v = $, u !== null) {
        const fe = u.views;
        m !== null && (e.setRenderTargetFramebuffer(b, m.framebuffer), e.setRenderTarget(b));
        let ee = !1;
        fe.length !== g.cameras.length && (g.cameras.length = 0, ee = !0);
        for (let ye = 0; ye < fe.length; ye++) {
          const Ie = fe[ye];
          let Ye = null;
          if (m !== null)
            Ye = m.getViewport(Ie);
          else {
            const w = f.getViewSubImage(p, Ie);
            Ye = w.viewport, ye === 0 && (e.setRenderTargetTextures(
              b,
              w.colorTexture,
              p.ignoreDepthValues ? void 0 : w.depthStencilTexture
            ), e.setRenderTarget(b));
          }
          let Oe = Q[ye];
          Oe === void 0 && (Oe = new It(), Oe.layers.enable(ye), Oe.viewport = new nt(), Q[ye] = Oe), Oe.matrix.fromArray(Ie.transform.matrix), Oe.matrix.decompose(Oe.position, Oe.quaternion, Oe.scale), Oe.projectionMatrix.fromArray(Ie.projectionMatrix), Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(), Oe.viewport.set(Ye.x, Ye.y, Ye.width, Ye.height), ye === 0 && (g.matrix.copy(Oe.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ee === !0 && g.cameras.push(Oe);
        }
        const Te = r.enabledFeatures;
        if (Te && Te.includes("depth-sensing")) {
          const ye = f.getDepthInformation(fe[0]);
          ye && ye.isValid && ye.texture && M.init(e, ye, r.renderState);
        }
      }
      for (let fe = 0; fe < E.length; fe++) {
        const ee = T[fe], Te = E[fe];
        ee !== null && Te !== void 0 && Te.update(ee, $, c || a);
      }
      D && D(B, $), $.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: $ }), v = null;
    }
    const xe = new ko();
    xe.setAnimationLoop(ie), this.setAnimationLoop = function(B) {
      D = B;
    }, this.dispose = function() {
    };
  }
}
const En = /* @__PURE__ */ new tn(), _p = /* @__PURE__ */ new et();
function vp(i, e) {
  function t(d, h) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix);
  }
  function n(d, h) {
    h.color.getRGB(d.fogColor.value, Bo(i)), h.isFog ? (d.fogNear.value = h.near, d.fogFar.value = h.far) : h.isFogExp2 && (d.fogDensity.value = h.density);
  }
  function r(d, h, b, E, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(d, h) : h.isMeshToonMaterial ? (s(d, h), f(d, h)) : h.isMeshPhongMaterial ? (s(d, h), u(d, h)) : h.isMeshStandardMaterial ? (s(d, h), p(d, h), h.isMeshPhysicalMaterial && m(d, h, T)) : h.isMeshMatcapMaterial ? (s(d, h), v(d, h)) : h.isMeshDepthMaterial ? s(d, h) : h.isMeshDistanceMaterial ? (s(d, h), M(d, h)) : h.isMeshNormalMaterial ? s(d, h) : h.isLineBasicMaterial ? (a(d, h), h.isLineDashedMaterial && o(d, h)) : h.isPointsMaterial ? l(d, h, b, E) : h.isSpriteMaterial ? c(d, h) : h.isShadowMaterial ? (d.color.value.copy(h.color), d.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    d.opacity.value = h.opacity, h.color && d.diffuse.value.copy(h.color), h.emissive && d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.bumpMap && (d.bumpMap.value = h.bumpMap, t(h.bumpMap, d.bumpMapTransform), d.bumpScale.value = h.bumpScale, h.side === vt && (d.bumpScale.value *= -1)), h.normalMap && (d.normalMap.value = h.normalMap, t(h.normalMap, d.normalMapTransform), d.normalScale.value.copy(h.normalScale), h.side === vt && d.normalScale.value.negate()), h.displacementMap && (d.displacementMap.value = h.displacementMap, t(h.displacementMap, d.displacementMapTransform), d.displacementScale.value = h.displacementScale, d.displacementBias.value = h.displacementBias), h.emissiveMap && (d.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, d.emissiveMapTransform)), h.specularMap && (d.specularMap.value = h.specularMap, t(h.specularMap, d.specularMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
    const b = e.get(h), E = b.envMap, T = b.envMapRotation;
    E && (d.envMap.value = E, En.copy(T), En.x *= -1, En.y *= -1, En.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (En.y *= -1, En.z *= -1), d.envMapRotation.value.setFromMatrix4(_p.makeRotationFromEuler(En)), d.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = h.reflectivity, d.ior.value = h.ior, d.refractionRatio.value = h.refractionRatio), h.lightMap && (d.lightMap.value = h.lightMap, d.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, d.lightMapTransform)), h.aoMap && (d.aoMap.value = h.aoMap, d.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, d.aoMapTransform));
  }
  function a(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, h.map && (d.map.value = h.map, t(h.map, d.mapTransform));
  }
  function o(d, h) {
    d.dashSize.value = h.dashSize, d.totalSize.value = h.dashSize + h.gapSize, d.scale.value = h.scale;
  }
  function l(d, h, b, E) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.size.value = h.size * b, d.scale.value = E * 0.5, h.map && (d.map.value = h.map, t(h.map, d.uvTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function c(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.rotation.value = h.rotation, h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function u(d, h) {
    d.specular.value.copy(h.specular), d.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function f(d, h) {
    h.gradientMap && (d.gradientMap.value = h.gradientMap);
  }
  function p(d, h) {
    d.metalness.value = h.metalness, h.metalnessMap && (d.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, d.metalnessMapTransform)), d.roughness.value = h.roughness, h.roughnessMap && (d.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, d.roughnessMapTransform)), h.envMap && (d.envMapIntensity.value = h.envMapIntensity);
  }
  function m(d, h, b) {
    d.ior.value = h.ior, h.sheen > 0 && (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), d.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (d.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, d.sheenColorMapTransform)), h.sheenRoughnessMap && (d.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))), h.clearcoat > 0 && (d.clearcoat.value = h.clearcoat, d.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (d.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, d.clearcoatMapTransform)), h.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (d.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === vt && d.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (d.dispersion.value = h.dispersion), h.iridescence > 0 && (d.iridescence.value = h.iridescence, d.iridescenceIOR.value = h.iridescenceIOR, d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (d.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, d.iridescenceMapTransform)), h.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), h.transmission > 0 && (d.transmission.value = h.transmission, d.transmissionSamplerMap.value = b.texture, d.transmissionSamplerSize.value.set(b.width, b.height), h.transmissionMap && (d.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, d.transmissionMapTransform)), d.thickness.value = h.thickness, h.thicknessMap && (d.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = h.attenuationDistance, d.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (d.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (d.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = h.specularIntensity, d.specularColor.value.copy(h.specularColor), h.specularColorMap && (d.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, d.specularColorMapTransform)), h.specularIntensityMap && (d.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function v(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function M(d, h) {
    const b = e.get(h).light;
    d.referencePosition.value.setFromMatrixPosition(b.matrixWorld), d.nearDistance.value = b.shadow.camera.near, d.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function xp(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, E) {
    const T = E.program;
    n.uniformBlockBinding(b, T);
  }
  function c(b, E) {
    let T = r[b.id];
    T === void 0 && (v(b), T = u(b), r[b.id] = T, b.addEventListener("dispose", d));
    const k = E.program;
    n.updateUBOMapping(b, k);
    const R = e.render.frame;
    s[b.id] !== R && (p(b), s[b.id] = R);
  }
  function u(b) {
    const E = f();
    b.__bindingPointIndex = E;
    const T = i.createBuffer(), k = b.__size, R = b.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, k, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, T), T;
  }
  function f() {
    for (let b = 0; b < o; b++)
      if (a.indexOf(b) === -1)
        return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(b) {
    const E = r[b.id], T = b.uniforms, k = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let R = 0, A = T.length; R < A; R++) {
      const O = Array.isArray(T[R]) ? T[R] : [T[R]];
      for (let Q = 0, g = O.length; Q < g; Q++) {
        const S = O[Q];
        if (m(S, R, Q, k) === !0) {
          const V = S.__offset, H = Array.isArray(S.value) ? S.value : [S.value];
          let X = 0;
          for (let K = 0; K < H.length; K++) {
            const z = H[K], J = M(z);
            typeof z == "number" || typeof z == "boolean" ? (S.__data[0] = z, i.bufferSubData(i.UNIFORM_BUFFER, V + X, S.__data)) : z.isMatrix3 ? (S.__data[0] = z.elements[0], S.__data[1] = z.elements[1], S.__data[2] = z.elements[2], S.__data[3] = 0, S.__data[4] = z.elements[3], S.__data[5] = z.elements[4], S.__data[6] = z.elements[5], S.__data[7] = 0, S.__data[8] = z.elements[6], S.__data[9] = z.elements[7], S.__data[10] = z.elements[8], S.__data[11] = 0) : (z.toArray(S.__data, X), X += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, V, S.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(b, E, T, k) {
    const R = b.value, A = E + "_" + T;
    if (k[A] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? k[A] = R : k[A] = R.clone(), !0;
    {
      const O = k[A];
      if (typeof R == "number" || typeof R == "boolean") {
        if (O !== R)
          return k[A] = R, !0;
      } else if (O.equals(R) === !1)
        return O.copy(R), !0;
    }
    return !1;
  }
  function v(b) {
    const E = b.uniforms;
    let T = 0;
    const k = 16;
    for (let A = 0, O = E.length; A < O; A++) {
      const Q = Array.isArray(E[A]) ? E[A] : [E[A]];
      for (let g = 0, S = Q.length; g < S; g++) {
        const V = Q[g], H = Array.isArray(V.value) ? V.value : [V.value];
        for (let X = 0, K = H.length; X < K; X++) {
          const z = H[X], J = M(z), G = T % k, oe = G % J.boundary, le = G + oe;
          T += oe, le !== 0 && k - le < J.storage && (T += k - le), V.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), V.__offset = T, T += J.storage;
        }
      }
    }
    const R = T % k;
    return R > 0 && (T += k - R), b.__size = T, b.__cache = {}, this;
  }
  function M(b) {
    const E = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" || typeof b == "boolean" ? (E.boundary = 4, E.storage = 4) : b.isVector2 ? (E.boundary = 8, E.storage = 8) : b.isVector3 || b.isColor ? (E.boundary = 16, E.storage = 12) : b.isVector4 ? (E.boundary = 16, E.storage = 16) : b.isMatrix3 ? (E.boundary = 48, E.storage = 48) : b.isMatrix4 ? (E.boundary = 64, E.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), E;
  }
  function d(b) {
    const E = b.target;
    E.removeEventListener("dispose", d);
    const T = a.indexOf(E.__bindingPointIndex);
    a.splice(T, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function h() {
    for (const b in r)
      i.deleteBuffer(r[b]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class Mp {
  constructor(e = {}) {
    const {
      canvas: t = ac(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const m = new Uint32Array(4), v = new Int32Array(4);
    let M = null, d = null;
    const h = [], b = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = zt, this.toneMapping = fn, this.toneMappingExposure = 1;
    const E = this;
    let T = !1, k = 0, R = 0, A = null, O = -1, Q = null;
    const g = new nt(), S = new nt();
    let V = null;
    const H = new Ge(0);
    let X = 0, K = t.width, z = t.height, J = 1, G = null, oe = null;
    const le = new nt(0, 0, K, z), D = new nt(0, 0, K, z);
    let ie = !1;
    const xe = new Go();
    let B = !1, $ = !1;
    const fe = new et(), ee = new et(), Te = new N(), ye = new nt(), Ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Ye = !1;
    function Oe() {
      return A === null ? J : 1;
    }
    let w = n;
    function Mt(x, P) {
      return t.getContext(x, P);
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Vs}`), t.addEventListener("webglcontextlost", j, !1), t.addEventListener("webglcontextrestored", ce, !1), t.addEventListener("webglcontextcreationerror", de, !1), w === null) {
        const P = "webgl2";
        if (w = Mt(P, x), w === null)
          throw Mt(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Ne, ze, we, $e, Pe, y, _, U, Y, Z, q, Me, ae, pe, He, te, me, Re, Ce, ge, Fe, Le, Ke, C;
    function he() {
      Ne = new Td(w), Ne.init(), Le = new up(w, Ne), ze = new vd(w, Ne, e, Le), we = new op(w), ze.reverseDepthBuffer && we.buffers.depth.setReversed(!0), $e = new wd(w), Pe = new qf(), y = new cp(w, Ne, we, Pe, ze, Le, $e), _ = new Md(E), U = new yd(E), Y = new Ic(w), Ke = new gd(w, Y), Z = new bd(w, Y, $e, Ke), q = new Cd(w, Z, Y, $e), Ce = new Rd(w, ze, y), te = new xd(Pe), Me = new Xf(E, _, U, Ne, ze, Ke, te), ae = new vp(E, Pe), pe = new jf(), He = new ep(Ne), Re = new md(E, _, U, we, q, p, l), me = new sp(E, q, ze), C = new xp(w, $e, ze, we), ge = new _d(w, Ne, $e), Fe = new Ad(w, Ne, $e), $e.programs = Me.programs, E.capabilities = ze, E.extensions = Ne, E.properties = Pe, E.renderLists = pe, E.shadowMap = me, E.state = we, E.info = $e;
    }
    he();
    const W = new gp(E, w);
    this.xr = W, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ne.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ne.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return J;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (J = x, this.setSize(K, z, !1));
    }, this.getSize = function(x) {
      return x.set(K, z);
    }, this.setSize = function(x, P, I = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      K = x, z = P, t.width = Math.floor(x * J), t.height = Math.floor(P * J), I === !0 && (t.style.width = x + "px", t.style.height = P + "px"), this.setViewport(0, 0, x, P);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(K * J, z * J).floor();
    }, this.setDrawingBufferSize = function(x, P, I) {
      K = x, z = P, J = I, t.width = Math.floor(x * I), t.height = Math.floor(P * I), this.setViewport(0, 0, x, P);
    }, this.getCurrentViewport = function(x) {
      return x.copy(g);
    }, this.getViewport = function(x) {
      return x.copy(le);
    }, this.setViewport = function(x, P, I, F) {
      x.isVector4 ? le.set(x.x, x.y, x.z, x.w) : le.set(x, P, I, F), we.viewport(g.copy(le).multiplyScalar(J).round());
    }, this.getScissor = function(x) {
      return x.copy(D);
    }, this.setScissor = function(x, P, I, F) {
      x.isVector4 ? D.set(x.x, x.y, x.z, x.w) : D.set(x, P, I, F), we.scissor(S.copy(D).multiplyScalar(J).round());
    }, this.getScissorTest = function() {
      return ie;
    }, this.setScissorTest = function(x) {
      we.setScissorTest(ie = x);
    }, this.setOpaqueSort = function(x) {
      G = x;
    }, this.setTransparentSort = function(x) {
      oe = x;
    }, this.getClearColor = function(x) {
      return x.copy(Re.getClearColor());
    }, this.setClearColor = function() {
      Re.setClearColor.apply(Re, arguments);
    }, this.getClearAlpha = function() {
      return Re.getClearAlpha();
    }, this.setClearAlpha = function() {
      Re.setClearAlpha.apply(Re, arguments);
    }, this.clear = function(x = !0, P = !0, I = !0) {
      let F = 0;
      if (x) {
        let L = !1;
        if (A !== null) {
          const ne = A.texture.format;
          L = ne === Ks || ne === js || ne === Ys;
        }
        if (L) {
          const ne = A.texture.type, ue = ne === en || ne === Cn || ne === gi || ne === Qn || ne === Xs || ne === qs, _e = Re.getClearColor(), ve = Re.getClearAlpha(), be = _e.r, Ae = _e.g, Se = _e.b;
          ue ? (m[0] = be, m[1] = Ae, m[2] = Se, m[3] = ve, w.clearBufferuiv(w.COLOR, 0, m)) : (v[0] = be, v[1] = Ae, v[2] = Se, v[3] = ve, w.clearBufferiv(w.COLOR, 0, v));
        } else
          F |= w.COLOR_BUFFER_BIT;
      }
      P && (F |= w.DEPTH_BUFFER_BIT, w.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), I && (F |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), w.clear(F);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", j, !1), t.removeEventListener("webglcontextrestored", ce, !1), t.removeEventListener("webglcontextcreationerror", de, !1), pe.dispose(), He.dispose(), Pe.dispose(), _.dispose(), U.dispose(), q.dispose(), Ke.dispose(), C.dispose(), Me.dispose(), W.dispose(), W.removeEventListener("sessionstart", Qs), W.removeEventListener("sessionend", ea), gn.stop();
    };
    function j(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function ce() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const x = $e.autoReset, P = me.enabled, I = me.autoUpdate, F = me.needsUpdate, L = me.type;
      he(), $e.autoReset = x, me.enabled = P, me.autoUpdate = I, me.needsUpdate = F, me.type = L;
    }
    function de(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Be(x) {
      const P = x.target;
      P.removeEventListener("dispose", Be), it(P);
    }
    function it(x) {
      ft(x), Pe.remove(x);
    }
    function ft(x) {
      const P = Pe.get(x).programs;
      P !== void 0 && (P.forEach(function(I) {
        Me.releaseProgram(I);
      }), x.isShaderMaterial && Me.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, P, I, F, L, ne) {
      P === null && (P = Ie);
      const ue = L.isMesh && L.matrixWorld.determinant() < 0, _e = $o(x, P, I, F, L);
      we.setMaterial(F, ue);
      let ve = I.index, be = 1;
      if (F.wireframe === !0) {
        if (ve = Z.getWireframeAttribute(I), ve === void 0) return;
        be = 2;
      }
      const Ae = I.drawRange, Se = I.attributes.position;
      let qe = Ae.start * be, Ze = (Ae.start + Ae.count) * be;
      ne !== null && (qe = Math.max(qe, ne.start * be), Ze = Math.min(Ze, (ne.start + ne.count) * be)), ve !== null ? (qe = Math.max(qe, 0), Ze = Math.min(Ze, ve.count)) : Se != null && (qe = Math.max(qe, 0), Ze = Math.min(Ze, Se.count));
      const Qe = Ze - qe;
      if (Qe < 0 || Qe === 1 / 0) return;
      Ke.setup(L, F, _e, I, ve);
      let St, Ve = ge;
      if (ve !== null && (St = Y.get(ve), Ve = Fe, Ve.setIndex(St)), L.isMesh)
        F.wireframe === !0 ? (we.setLineWidth(F.wireframeLinewidth * Oe()), Ve.setMode(w.LINES)) : Ve.setMode(w.TRIANGLES);
      else if (L.isLine) {
        let Ee = F.linewidth;
        Ee === void 0 && (Ee = 1), we.setLineWidth(Ee * Oe()), L.isLineSegments ? Ve.setMode(w.LINES) : L.isLineLoop ? Ve.setMode(w.LINE_LOOP) : Ve.setMode(w.LINE_STRIP);
      } else L.isPoints ? Ve.setMode(w.POINTS) : L.isSprite && Ve.setMode(w.TRIANGLES);
      if (L.isBatchedMesh)
        if (L._multiDrawInstances !== null)
          Ve.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
        else if (Ne.get("WEBGL_multi_draw"))
          Ve.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
        else {
          const Ee = L._multiDrawStarts, lt = L._multiDrawCounts, We = L._multiDrawCount, Pt = ve ? Y.get(ve).bytesPerElement : 1, Ln = Pe.get(F).currentProgram.getUniforms();
          for (let Et = 0; Et < We; Et++)
            Ln.setValue(w, "_gl_DrawID", Et), Ve.render(Ee[Et] / Pt, lt[Et]);
        }
      else if (L.isInstancedMesh)
        Ve.renderInstances(qe, Qe, L.count);
      else if (I.isInstancedBufferGeometry) {
        const Ee = I._maxInstanceCount !== void 0 ? I._maxInstanceCount : 1 / 0, lt = Math.min(I.instanceCount, Ee);
        Ve.renderInstances(qe, Qe, lt);
      } else
        Ve.render(qe, Qe);
    };
    function ke(x, P, I) {
      x.transparent === !0 && x.side === Kt && x.forceSinglePass === !1 ? (x.side = vt, x.needsUpdate = !0, Ti(x, P, I), x.side = pn, x.needsUpdate = !0, Ti(x, P, I), x.side = Kt) : Ti(x, P, I);
    }
    this.compile = function(x, P, I = null) {
      I === null && (I = x), d = He.get(I), d.init(P), b.push(d), I.traverseVisible(function(L) {
        L.isLight && L.layers.test(P.layers) && (d.pushLight(L), L.castShadow && d.pushShadow(L));
      }), x !== I && x.traverseVisible(function(L) {
        L.isLight && L.layers.test(P.layers) && (d.pushLight(L), L.castShadow && d.pushShadow(L));
      }), d.setupLights();
      const F = /* @__PURE__ */ new Set();
      return x.traverse(function(L) {
        if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite))
          return;
        const ne = L.material;
        if (ne)
          if (Array.isArray(ne))
            for (let ue = 0; ue < ne.length; ue++) {
              const _e = ne[ue];
              ke(_e, I, L), F.add(_e);
            }
          else
            ke(ne, I, L), F.add(ne);
      }), b.pop(), d = null, F;
    }, this.compileAsync = function(x, P, I = null) {
      const F = this.compile(x, P, I);
      return new Promise((L) => {
        function ne() {
          if (F.forEach(function(ue) {
            Pe.get(ue).currentProgram.isReady() && F.delete(ue);
          }), F.size === 0) {
            L(x);
            return;
          }
          setTimeout(ne, 10);
        }
        Ne.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
      });
    };
    let pt = null;
    function kt(x) {
      pt && pt(x);
    }
    function Qs() {
      gn.stop();
    }
    function ea() {
      gn.start();
    }
    const gn = new ko();
    gn.setAnimationLoop(kt), typeof self < "u" && gn.setContext(self), this.setAnimationLoop = function(x) {
      pt = x, W.setAnimationLoop(x), x === null ? gn.stop() : gn.start();
    }, W.addEventListener("sessionstart", Qs), W.addEventListener("sessionend", ea), this.render = function(x, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(P), P = W.getCamera()), x.isScene === !0 && x.onBeforeRender(E, x, P, A), d = He.get(x, b.length), d.init(P), b.push(d), ee.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), xe.setFromProjectionMatrix(ee), $ = this.localClippingEnabled, B = te.init(this.clippingPlanes, $), M = pe.get(x, h.length), M.init(), h.push(M), W.enabled === !0 && W.isPresenting === !0) {
        const ne = E.xr.getDepthSensingMesh();
        ne !== null && _r(ne, P, -1 / 0, E.sortObjects);
      }
      _r(x, P, 0, E.sortObjects), M.finish(), E.sortObjects === !0 && M.sort(G, oe), Ye = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, Ye && Re.addToRenderList(M, x), this.info.render.frame++, B === !0 && te.beginShadows();
      const I = d.state.shadowsArray;
      me.render(I, x, P), B === !0 && te.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const F = M.opaque, L = M.transmissive;
      if (d.setupLights(), P.isArrayCamera) {
        const ne = P.cameras;
        if (L.length > 0)
          for (let ue = 0, _e = ne.length; ue < _e; ue++) {
            const ve = ne[ue];
            na(F, L, x, ve);
          }
        Ye && Re.render(x);
        for (let ue = 0, _e = ne.length; ue < _e; ue++) {
          const ve = ne[ue];
          ta(M, x, ve, ve.viewport);
        }
      } else
        L.length > 0 && na(F, L, x, P), Ye && Re.render(x), ta(M, x, P);
      A !== null && (y.updateMultisampleRenderTarget(A), y.updateRenderTargetMipmap(A)), x.isScene === !0 && x.onAfterRender(E, x, P), Ke.resetDefaultState(), O = -1, Q = null, b.pop(), b.length > 0 ? (d = b[b.length - 1], B === !0 && te.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, h.pop(), h.length > 0 ? M = h[h.length - 1] : M = null;
    };
    function _r(x, P, I, F) {
      if (x.visible === !1) return;
      if (x.layers.test(P.layers)) {
        if (x.isGroup)
          I = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(P);
        else if (x.isLight)
          d.pushLight(x), x.castShadow && d.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || xe.intersectsSprite(x)) {
            F && ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ee);
            const ue = q.update(x), _e = x.material;
            _e.visible && M.push(x, ue, _e, I, ye.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || xe.intersectsObject(x))) {
          const ue = q.update(x), _e = x.material;
          if (F && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), ye.copy(x.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(), ye.copy(ue.boundingSphere.center)), ye.applyMatrix4(x.matrixWorld).applyMatrix4(ee)), Array.isArray(_e)) {
            const ve = ue.groups;
            for (let be = 0, Ae = ve.length; be < Ae; be++) {
              const Se = ve[be], qe = _e[Se.materialIndex];
              qe && qe.visible && M.push(x, ue, qe, I, ye.z, Se);
            }
          } else _e.visible && M.push(x, ue, _e, I, ye.z, null);
        }
      }
      const ne = x.children;
      for (let ue = 0, _e = ne.length; ue < _e; ue++)
        _r(ne[ue], P, I, F);
    }
    function ta(x, P, I, F) {
      const L = x.opaque, ne = x.transmissive, ue = x.transparent;
      d.setupLightsView(I), B === !0 && te.setGlobalState(E.clippingPlanes, I), F && we.viewport(g.copy(F)), L.length > 0 && yi(L, P, I), ne.length > 0 && yi(ne, P, I), ue.length > 0 && yi(ue, P, I), we.buffers.depth.setTest(!0), we.buffers.depth.setMask(!0), we.buffers.color.setMask(!0), we.setPolygonOffset(!1);
    }
    function na(x, P, I, F) {
      if ((I.isScene === !0 ? I.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[F.id] === void 0 && (d.state.transmissionRenderTarget[F.id] = new Pn(1, 1, {
        generateMipmaps: !0,
        type: Ne.has("EXT_color_buffer_half_float") || Ne.has("EXT_color_buffer_float") ? _i : en,
        minFilter: Rn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Xe.workingColorSpace
      }));
      const ne = d.state.transmissionRenderTarget[F.id], ue = F.viewport || g;
      ne.setSize(ue.z, ue.w);
      const _e = E.getRenderTarget();
      E.setRenderTarget(ne), E.getClearColor(H), X = E.getClearAlpha(), X < 1 && E.setClearColor(16777215, 0.5), E.clear(), Ye && Re.render(I);
      const ve = E.toneMapping;
      E.toneMapping = fn;
      const be = F.viewport;
      if (F.viewport !== void 0 && (F.viewport = void 0), d.setupLightsView(F), B === !0 && te.setGlobalState(E.clippingPlanes, F), yi(x, I, F), y.updateMultisampleRenderTarget(ne), y.updateRenderTargetMipmap(ne), Ne.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ae = !1;
        for (let Se = 0, qe = P.length; Se < qe; Se++) {
          const Ze = P[Se], Qe = Ze.object, St = Ze.geometry, Ve = Ze.material, Ee = Ze.group;
          if (Ve.side === Kt && Qe.layers.test(F.layers)) {
            const lt = Ve.side;
            Ve.side = vt, Ve.needsUpdate = !0, ia(Qe, I, F, St, Ve, Ee), Ve.side = lt, Ve.needsUpdate = !0, Ae = !0;
          }
        }
        Ae === !0 && (y.updateMultisampleRenderTarget(ne), y.updateRenderTargetMipmap(ne));
      }
      E.setRenderTarget(_e), E.setClearColor(H, X), be !== void 0 && (F.viewport = be), E.toneMapping = ve;
    }
    function yi(x, P, I) {
      const F = P.isScene === !0 ? P.overrideMaterial : null;
      for (let L = 0, ne = x.length; L < ne; L++) {
        const ue = x[L], _e = ue.object, ve = ue.geometry, be = F === null ? ue.material : F, Ae = ue.group;
        _e.layers.test(I.layers) && ia(_e, P, I, ve, be, Ae);
      }
    }
    function ia(x, P, I, F, L, ne) {
      x.onBeforeRender(E, P, I, F, L, ne), x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), L.onBeforeRender(E, P, I, F, x, ne), L.transparent === !0 && L.side === Kt && L.forceSinglePass === !1 ? (L.side = vt, L.needsUpdate = !0, E.renderBufferDirect(I, P, F, L, x, ne), L.side = pn, L.needsUpdate = !0, E.renderBufferDirect(I, P, F, L, x, ne), L.side = Kt) : E.renderBufferDirect(I, P, F, L, x, ne), x.onAfterRender(E, P, I, F, L, ne);
    }
    function Ti(x, P, I) {
      P.isScene !== !0 && (P = Ie);
      const F = Pe.get(x), L = d.state.lights, ne = d.state.shadowsArray, ue = L.state.version, _e = Me.getParameters(x, L.state, ne, P, I), ve = Me.getProgramCacheKey(_e);
      let be = F.programs;
      F.environment = x.isMeshStandardMaterial ? P.environment : null, F.fog = P.fog, F.envMap = (x.isMeshStandardMaterial ? U : _).get(x.envMap || F.environment), F.envMapRotation = F.environment !== null && x.envMap === null ? P.environmentRotation : x.envMapRotation, be === void 0 && (x.addEventListener("dispose", Be), be = /* @__PURE__ */ new Map(), F.programs = be);
      let Ae = be.get(ve);
      if (Ae !== void 0) {
        if (F.currentProgram === Ae && F.lightsStateVersion === ue)
          return sa(x, _e), Ae;
      } else
        _e.uniforms = Me.getUniforms(x), x.onBeforeCompile(_e, E), Ae = Me.acquireProgram(_e, ve), be.set(ve, Ae), F.uniforms = _e.uniforms;
      const Se = F.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Se.clippingPlanes = te.uniform), sa(x, _e), F.needsLights = Jo(x), F.lightsStateVersion = ue, F.needsLights && (Se.ambientLightColor.value = L.state.ambient, Se.lightProbe.value = L.state.probe, Se.directionalLights.value = L.state.directional, Se.directionalLightShadows.value = L.state.directionalShadow, Se.spotLights.value = L.state.spot, Se.spotLightShadows.value = L.state.spotShadow, Se.rectAreaLights.value = L.state.rectArea, Se.ltc_1.value = L.state.rectAreaLTC1, Se.ltc_2.value = L.state.rectAreaLTC2, Se.pointLights.value = L.state.point, Se.pointLightShadows.value = L.state.pointShadow, Se.hemisphereLights.value = L.state.hemi, Se.directionalShadowMap.value = L.state.directionalShadowMap, Se.directionalShadowMatrix.value = L.state.directionalShadowMatrix, Se.spotShadowMap.value = L.state.spotShadowMap, Se.spotLightMatrix.value = L.state.spotLightMatrix, Se.spotLightMap.value = L.state.spotLightMap, Se.pointShadowMap.value = L.state.pointShadowMap, Se.pointShadowMatrix.value = L.state.pointShadowMatrix), F.currentProgram = Ae, F.uniformsList = null, Ae;
    }
    function ra(x) {
      if (x.uniformsList === null) {
        const P = x.currentProgram.getUniforms();
        x.uniformsList = rr.seqWithValue(P.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function sa(x, P) {
      const I = Pe.get(x);
      I.outputColorSpace = P.outputColorSpace, I.batching = P.batching, I.batchingColor = P.batchingColor, I.instancing = P.instancing, I.instancingColor = P.instancingColor, I.instancingMorph = P.instancingMorph, I.skinning = P.skinning, I.morphTargets = P.morphTargets, I.morphNormals = P.morphNormals, I.morphColors = P.morphColors, I.morphTargetsCount = P.morphTargetsCount, I.numClippingPlanes = P.numClippingPlanes, I.numIntersection = P.numClipIntersection, I.vertexAlphas = P.vertexAlphas, I.vertexTangents = P.vertexTangents, I.toneMapping = P.toneMapping;
    }
    function $o(x, P, I, F, L) {
      P.isScene !== !0 && (P = Ie), y.resetTextureUnits();
      const ne = P.fog, ue = F.isMeshStandardMaterial ? P.environment : null, _e = A === null ? E.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : mn, ve = (F.isMeshStandardMaterial ? U : _).get(F.envMap || ue), be = F.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4, Ae = !!I.attributes.tangent && (!!F.normalMap || F.anisotropy > 0), Se = !!I.morphAttributes.position, qe = !!I.morphAttributes.normal, Ze = !!I.morphAttributes.color;
      let Qe = fn;
      F.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Qe = E.toneMapping);
      const St = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, Ve = St !== void 0 ? St.length : 0, Ee = Pe.get(F), lt = d.state.lights;
      if (B === !0 && ($ === !0 || x !== Q)) {
        const bt = x === Q && F.id === O;
        te.setState(F, x, bt);
      }
      let We = !1;
      F.version === Ee.__version ? (Ee.needsLights && Ee.lightsStateVersion !== lt.state.version || Ee.outputColorSpace !== _e || L.isBatchedMesh && Ee.batching === !1 || !L.isBatchedMesh && Ee.batching === !0 || L.isBatchedMesh && Ee.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && Ee.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && Ee.instancing === !1 || !L.isInstancedMesh && Ee.instancing === !0 || L.isSkinnedMesh && Ee.skinning === !1 || !L.isSkinnedMesh && Ee.skinning === !0 || L.isInstancedMesh && Ee.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && Ee.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && Ee.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && Ee.instancingMorph === !1 && L.morphTexture !== null || Ee.envMap !== ve || F.fog === !0 && Ee.fog !== ne || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== te.numPlanes || Ee.numIntersection !== te.numIntersection) || Ee.vertexAlphas !== be || Ee.vertexTangents !== Ae || Ee.morphTargets !== Se || Ee.morphNormals !== qe || Ee.morphColors !== Ze || Ee.toneMapping !== Qe || Ee.morphTargetsCount !== Ve) && (We = !0) : (We = !0, Ee.__version = F.version);
      let Pt = Ee.currentProgram;
      We === !0 && (Pt = Ti(F, P, L));
      let Ln = !1, Et = !1, vr = !1;
      const tt = Pt.getUniforms(), nn = Ee.uniforms;
      if (we.useProgram(Pt.program) && (Ln = !0, Et = !0, vr = !0), F.id !== O && (O = F.id, Et = !0), Ln || Q !== x) {
        ze.reverseDepthBuffer ? (fe.copy(x.projectionMatrix), lc(fe), cc(fe), tt.setValue(w, "projectionMatrix", fe)) : tt.setValue(w, "projectionMatrix", x.projectionMatrix), tt.setValue(w, "viewMatrix", x.matrixWorldInverse);
        const bt = tt.map.cameraPosition;
        bt !== void 0 && bt.setValue(w, Te.setFromMatrixPosition(x.matrixWorld)), ze.logarithmicDepthBuffer && tt.setValue(
          w,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && tt.setValue(w, "isOrthographic", x.isOrthographicCamera === !0), Q !== x && (Q = x, Et = !0, vr = !0);
      }
      if (L.isSkinnedMesh) {
        tt.setOptional(w, L, "bindMatrix"), tt.setOptional(w, L, "bindMatrixInverse");
        const bt = L.skeleton;
        bt && (bt.boneTexture === null && bt.computeBoneTexture(), tt.setValue(w, "boneTexture", bt.boneTexture, y));
      }
      L.isBatchedMesh && (tt.setOptional(w, L, "batchingTexture"), tt.setValue(w, "batchingTexture", L._matricesTexture, y), tt.setOptional(w, L, "batchingIdTexture"), tt.setValue(w, "batchingIdTexture", L._indirectTexture, y), tt.setOptional(w, L, "batchingColorTexture"), L._colorsTexture !== null && tt.setValue(w, "batchingColorTexture", L._colorsTexture, y));
      const xr = I.morphAttributes;
      if ((xr.position !== void 0 || xr.normal !== void 0 || xr.color !== void 0) && Ce.update(L, I, Pt), (Et || Ee.receiveShadow !== L.receiveShadow) && (Ee.receiveShadow = L.receiveShadow, tt.setValue(w, "receiveShadow", L.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (nn.envMap.value = ve, nn.flipEnvMap.value = ve.isCubeTexture && ve.isRenderTargetTexture === !1 ? -1 : 1), F.isMeshStandardMaterial && F.envMap === null && P.environment !== null && (nn.envMapIntensity.value = P.environmentIntensity), Et && (tt.setValue(w, "toneMappingExposure", E.toneMappingExposure), Ee.needsLights && Zo(nn, vr), ne && F.fog === !0 && ae.refreshFogUniforms(nn, ne), ae.refreshMaterialUniforms(nn, F, J, z, d.state.transmissionRenderTarget[x.id]), rr.upload(w, ra(Ee), nn, y)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (rr.upload(w, ra(Ee), nn, y), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && tt.setValue(w, "center", L.center), tt.setValue(w, "modelViewMatrix", L.modelViewMatrix), tt.setValue(w, "normalMatrix", L.normalMatrix), tt.setValue(w, "modelMatrix", L.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
        const bt = F.uniformsGroups;
        for (let Mr = 0, Qo = bt.length; Mr < Qo; Mr++) {
          const aa = bt[Mr];
          C.update(aa, Pt), C.bind(aa, Pt);
        }
      }
      return Pt;
    }
    function Zo(x, P) {
      x.ambientLightColor.needsUpdate = P, x.lightProbe.needsUpdate = P, x.directionalLights.needsUpdate = P, x.directionalLightShadows.needsUpdate = P, x.pointLights.needsUpdate = P, x.pointLightShadows.needsUpdate = P, x.spotLights.needsUpdate = P, x.spotLightShadows.needsUpdate = P, x.rectAreaLights.needsUpdate = P, x.hemisphereLights.needsUpdate = P;
    }
    function Jo(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return k;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(x, P, I) {
      Pe.get(x.texture).__webglTexture = P, Pe.get(x.depthTexture).__webglTexture = I;
      const F = Pe.get(x);
      F.__hasExternalTextures = !0, F.__autoAllocateDepthBuffer = I === void 0, F.__autoAllocateDepthBuffer || Ne.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(x, P) {
      const I = Pe.get(x);
      I.__webglFramebuffer = P, I.__useDefaultFramebuffer = P === void 0;
    }, this.setRenderTarget = function(x, P = 0, I = 0) {
      A = x, k = P, R = I;
      let F = !0, L = null, ne = !1, ue = !1;
      if (x) {
        const ve = Pe.get(x);
        if (ve.__useDefaultFramebuffer !== void 0)
          we.bindFramebuffer(w.FRAMEBUFFER, null), F = !1;
        else if (ve.__webglFramebuffer === void 0)
          y.setupRenderTarget(x);
        else if (ve.__hasExternalTextures)
          y.rebindTextures(x, Pe.get(x.texture).__webglTexture, Pe.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Se = x.depthTexture;
          if (ve.__boundDepthTexture !== Se) {
            if (Se !== null && Pe.has(Se) && (x.width !== Se.image.width || x.height !== Se.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            y.setupDepthRenderbuffer(x);
          }
        }
        const be = x.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (ue = !0);
        const Ae = Pe.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ae[P]) ? L = Ae[P][I] : L = Ae[P], ne = !0) : x.samples > 0 && y.useMultisampledRTT(x) === !1 ? L = Pe.get(x).__webglMultisampledFramebuffer : Array.isArray(Ae) ? L = Ae[I] : L = Ae, g.copy(x.viewport), S.copy(x.scissor), V = x.scissorTest;
      } else
        g.copy(le).multiplyScalar(J).floor(), S.copy(D).multiplyScalar(J).floor(), V = ie;
      if (we.bindFramebuffer(w.FRAMEBUFFER, L) && F && we.drawBuffers(x, L), we.viewport(g), we.scissor(S), we.setScissorTest(V), ne) {
        const ve = Pe.get(x.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + P, ve.__webglTexture, I);
      } else if (ue) {
        const ve = Pe.get(x.texture), be = P || 0;
        w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, ve.__webglTexture, I || 0, be);
      }
      O = -1;
    }, this.readRenderTargetPixels = function(x, P, I, F, L, ne, ue) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let _e = Pe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ue !== void 0 && (_e = _e[ue]), _e) {
        we.bindFramebuffer(w.FRAMEBUFFER, _e);
        try {
          const ve = x.texture, be = ve.format, Ae = ve.type;
          if (!ze.textureFormatReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ze.textureTypeReadable(Ae)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= x.width - F && I >= 0 && I <= x.height - L && w.readPixels(P, I, F, L, Le.convert(be), Le.convert(Ae), ne);
        } finally {
          const ve = A !== null ? Pe.get(A).__webglFramebuffer : null;
          we.bindFramebuffer(w.FRAMEBUFFER, ve);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, P, I, F, L, ne, ue) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let _e = Pe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ue !== void 0 && (_e = _e[ue]), _e) {
        const ve = x.texture, be = ve.format, Ae = ve.type;
        if (!ze.textureFormatReadable(be))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ze.textureTypeReadable(Ae))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (P >= 0 && P <= x.width - F && I >= 0 && I <= x.height - L) {
          we.bindFramebuffer(w.FRAMEBUFFER, _e);
          const Se = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, Se), w.bufferData(w.PIXEL_PACK_BUFFER, ne.byteLength, w.STREAM_READ), w.readPixels(P, I, F, L, Le.convert(be), Le.convert(Ae), 0);
          const qe = A !== null ? Pe.get(A).__webglFramebuffer : null;
          we.bindFramebuffer(w.FRAMEBUFFER, qe);
          const Ze = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await oc(w, Ze, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, Se), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, ne), w.deleteBuffer(Se), w.deleteSync(Ze), ne;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, P = null, I = 0) {
      x.isTexture !== !0 && (ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."), P = arguments[0] || null, x = arguments[1]);
      const F = Math.pow(2, -I), L = Math.floor(x.image.width * F), ne = Math.floor(x.image.height * F), ue = P !== null ? P.x : 0, _e = P !== null ? P.y : 0;
      y.setTexture2D(x, 0), w.copyTexSubImage2D(w.TEXTURE_2D, I, 0, 0, ue, _e, L, ne), we.unbindTexture();
    }, this.copyTextureToTexture = function(x, P, I = null, F = null, L = 0) {
      x.isTexture !== !0 && (ir("WebGLRenderer: copyTextureToTexture function signature has changed."), F = arguments[0] || null, x = arguments[1], P = arguments[2], L = arguments[3] || 0, I = null);
      let ne, ue, _e, ve, be, Ae;
      I !== null ? (ne = I.max.x - I.min.x, ue = I.max.y - I.min.y, _e = I.min.x, ve = I.min.y) : (ne = x.image.width, ue = x.image.height, _e = 0, ve = 0), F !== null ? (be = F.x, Ae = F.y) : (be = 0, Ae = 0);
      const Se = Le.convert(P.format), qe = Le.convert(P.type);
      y.setTexture2D(P, 0), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, P.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, P.unpackAlignment);
      const Ze = w.getParameter(w.UNPACK_ROW_LENGTH), Qe = w.getParameter(w.UNPACK_IMAGE_HEIGHT), St = w.getParameter(w.UNPACK_SKIP_PIXELS), Ve = w.getParameter(w.UNPACK_SKIP_ROWS), Ee = w.getParameter(w.UNPACK_SKIP_IMAGES), lt = x.isCompressedTexture ? x.mipmaps[L] : x.image;
      w.pixelStorei(w.UNPACK_ROW_LENGTH, lt.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, lt.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, _e), w.pixelStorei(w.UNPACK_SKIP_ROWS, ve), x.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, L, be, Ae, ne, ue, Se, qe, lt.data) : x.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, L, be, Ae, lt.width, lt.height, Se, lt.data) : w.texSubImage2D(w.TEXTURE_2D, L, be, Ae, ne, ue, Se, qe, lt), w.pixelStorei(w.UNPACK_ROW_LENGTH, Ze), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, Qe), w.pixelStorei(w.UNPACK_SKIP_PIXELS, St), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ve), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Ee), L === 0 && P.generateMipmaps && w.generateMipmap(w.TEXTURE_2D), we.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, P, I = null, F = null, L = 0) {
      x.isTexture !== !0 && (ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."), I = arguments[0] || null, F = arguments[1] || null, x = arguments[2], P = arguments[3], L = arguments[4] || 0);
      let ne, ue, _e, ve, be, Ae, Se, qe, Ze;
      const Qe = x.isCompressedTexture ? x.mipmaps[L] : x.image;
      I !== null ? (ne = I.max.x - I.min.x, ue = I.max.y - I.min.y, _e = I.max.z - I.min.z, ve = I.min.x, be = I.min.y, Ae = I.min.z) : (ne = Qe.width, ue = Qe.height, _e = Qe.depth, ve = 0, be = 0, Ae = 0), F !== null ? (Se = F.x, qe = F.y, Ze = F.z) : (Se = 0, qe = 0, Ze = 0);
      const St = Le.convert(P.format), Ve = Le.convert(P.type);
      let Ee;
      if (P.isData3DTexture)
        y.setTexture3D(P, 0), Ee = w.TEXTURE_3D;
      else if (P.isDataArrayTexture || P.isCompressedArrayTexture)
        y.setTexture2DArray(P, 0), Ee = w.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, P.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, P.unpackAlignment);
      const lt = w.getParameter(w.UNPACK_ROW_LENGTH), We = w.getParameter(w.UNPACK_IMAGE_HEIGHT), Pt = w.getParameter(w.UNPACK_SKIP_PIXELS), Ln = w.getParameter(w.UNPACK_SKIP_ROWS), Et = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, Qe.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, Qe.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, ve), w.pixelStorei(w.UNPACK_SKIP_ROWS, be), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Ae), x.isDataTexture || x.isData3DTexture ? w.texSubImage3D(Ee, L, Se, qe, Ze, ne, ue, _e, St, Ve, Qe.data) : P.isCompressedArrayTexture ? w.compressedTexSubImage3D(Ee, L, Se, qe, Ze, ne, ue, _e, St, Qe.data) : w.texSubImage3D(Ee, L, Se, qe, Ze, ne, ue, _e, St, Ve, Qe), w.pixelStorei(w.UNPACK_ROW_LENGTH, lt), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, We), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Pt), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ln), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Et), L === 0 && P.generateMipmaps && w.generateMipmap(Ee), we.unbindTexture();
    }, this.initRenderTarget = function(x) {
      Pe.get(x).__webglFramebuffer === void 0 && y.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? y.setTextureCube(x, 0) : x.isData3DTexture ? y.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? y.setTexture2DArray(x, 0) : y.setTexture2D(x, 0), we.unbindTexture();
    }, this.resetState = function() {
      k = 0, R = 0, A = null, we.reset(), Ke.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Zt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === $s ? "display-p3" : "srgb", t.unpackColorSpace = Xe.workingColorSpace === pr ? "display-p3" : "srgb";
  }
}
class Sp extends dt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new tn(), this.environmentIntensity = 1, this.environmentRotation = new tn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Ep extends ii {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ge(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const hr = /* @__PURE__ */ new N(), dr = /* @__PURE__ */ new N(), so = /* @__PURE__ */ new et(), fi = /* @__PURE__ */ new Zs(), ji = /* @__PURE__ */ new Si(), Jr = /* @__PURE__ */ new N(), ao = /* @__PURE__ */ new N();
class yp extends dt {
  constructor(e = new Bt(), t = new Ep()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        hr.fromBufferAttribute(t, r - 1), dr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += hr.distanceTo(dr);
      e.setAttribute("lineDistance", new Qt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ji.copy(n.boundingSphere), ji.applyMatrix4(r), ji.radius += s, e.ray.intersectsSphere(ji) === !1) return;
    so.copy(r).invert(), fi.copy(e.ray).applyMatrix4(so);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, p = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), v = Math.min(u.count, a.start + a.count);
      for (let M = m, d = v - 1; M < d; M += c) {
        const h = u.getX(M), b = u.getX(M + 1), E = Ki(this, e, fi, l, h, b);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const M = u.getX(v - 1), d = u.getX(m), h = Ki(this, e, fi, l, M, d);
        h && t.push(h);
      }
    } else {
      const m = Math.max(0, a.start), v = Math.min(p.count, a.start + a.count);
      for (let M = m, d = v - 1; M < d; M += c) {
        const h = Ki(this, e, fi, l, M, M + 1);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const M = Ki(this, e, fi, l, v - 1, m);
        M && t.push(M);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Ki(i, e, t, n, r, s) {
  const a = i.geometry.attributes.position;
  if (hr.fromBufferAttribute(a, r), dr.fromBufferAttribute(a, s), t.distanceSqToSegment(hr, dr, Jr, ao) > n) return;
  Jr.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Jr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: ao.clone().applyMatrix4(i.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const oo = /* @__PURE__ */ new N(), lo = /* @__PURE__ */ new N();
class Tp extends yp {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        oo.fromBufferAttribute(t, r), lo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + oo.distanceTo(lo);
      e.setAttribute("lineDistance", new Qt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class bp extends ii {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ge(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const co = /* @__PURE__ */ new et(), Hs = /* @__PURE__ */ new Zs(), $i = /* @__PURE__ */ new Si(), Zi = /* @__PURE__ */ new N();
class Ap extends dt {
  constructor(e = new Bt(), t = new bp()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), $i.copy(n.boundingSphere), $i.applyMatrix4(r), $i.radius += s, e.ray.intersectsSphere($i) === !1) return;
    co.copy(r).invert(), Hs.copy(e.ray).applyMatrix4(co);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, f = n.attributes.position;
    if (c !== null) {
      const p = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let v = p, M = m; v < M; v++) {
        const d = c.getX(v);
        Zi.fromBufferAttribute(f, d), uo(Zi, d, l, r, e, t, this);
      }
    } else {
      const p = Math.max(0, a.start), m = Math.min(f.count, a.start + a.count);
      for (let v = p, M = m; v < M; v++)
        Zi.fromBufferAttribute(f, v), uo(Zi, v, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function uo(i, e, t, n, r, s, a) {
  const o = Hs.distanceSqToPoint(i);
  if (o < t) {
    const l = new N();
    Hs.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Vs
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Vs);
const wp = `/**
 * JEIKEI NEURAL V2 - Vertex Shader
 * Corrected for Three.js ShaderMaterial compatibility.
 */

// Custom attribute for neural energy (provided by engine)
attribute float aEnergy;

// Uniforms provided by NeuralBackground
uniform float uTime;
uniform float uSize;

// Varyings to pass data to fragment shader
varying float vEnergy;
varying float vRandom;

// Helper to generate pseudo-random values per node
float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

void main() {
  // Built-in 'position' is automatically provided by Three.js ShaderMaterial.
  // DO NOT redefine 'attribute vec3 position;' here.

  vEnergy = aEnergy;
  vRandom = hash(position.x + position.y);

  // Apply light dynamic jitter (twinkle) based on time and random ID
  float twinkle = sin(uTime * 2.0 + vRandom * 10.0) * 0.1;
  vec3 animatedPos = position + vec3(twinkle, twinkle, 0.0);

  // Standard projection: projectionMatrix and modelViewMatrix are built-in
  gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPos, 1.0);

  // Dynamic size calculation: base size + pulsing + energy impact
  float pulse = 0.9 + 0.1 * sin(uTime * 1.5 + vRandom * 6.28);
  float size = uSize * pulse * (1.0 + vEnergy * 2.5);

  gl_PointSize = size;
}
`, Rp = `varying float vEnergy;
uniform vec3 uAccent;
uniform float uGlowIntensity;

void main() {
  float dist = distance(gl_PointCoord, vec2(0.5));
  if (dist > 0.5) discard;

  // Concentric bloom intensity
  float alpha = 0.0;

  // Core: 0.0-0.1
  if (dist < 0.1) {
    alpha = 1.0;
  } else {
    // Inverse exponential bloom for the halo
    float bloom = (1.0 - dist * 2.0);
    alpha = pow(bloom, 2.5);
  }

  // Pulse scaling via energy
  float energyBoost = vEnergy * 1.5;
  float ambientGlow = 0.08; // Ensure it's always faintly visible

  vec3 finalColor = mix(uAccent, vec3(1.0), vEnergy * 0.4);

  gl_FragColor = vec4(finalColor, alpha * (ambientGlow + energyBoost) * uGlowIntensity);
}
`, Cp = `/**
 * JEIKEI NEURAL V2 - Edge Vertex Shader
 */
attribute float aActive;
uniform float uTime;

varying float vActive;

void main() {
  vActive = aActive;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, Pp = `/**
 * JEIKEI NEURAL V2 - Edge Fragment Shader
 */
uniform vec3 uAccent;
varying float vActive;

void main() {
  float baseOpacity = 0.15;
  float activePulse = vActive * 0.85;

  vec3 finalColor = uAccent;
  if (vActive > 0.5) {
    finalColor = mix(uAccent, vec4(uAccent, 1.0).rgb * 2.0, 0.5);
  }

  gl_FragColor = vec4(finalColor, baseOpacity + activePulse);
}
`, Ko = ({
  mode: i = "fullscreen",
  className: e = ""
}) => {
  const { engine: t, theme: n } = Ct(), r = la(null), s = la(null), [a, o] = mi(0);
  hn(() => {
    if (!r.current || !t) return;
    const c = r.current, u = i === "fullscreen", f = new Mp({
      antialias: !0,
      alpha: !0,
      powerPreference: "high-performance"
    });
    f.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const p = () => {
      const S = u ? window.innerWidth : c.clientWidth, V = u ? window.innerHeight : c.clientHeight;
      return f.setSize(S, V), { width: S, height: V };
    }, m = p();
    f.setClearColor(0, 0), c.appendChild(f.domElement), s.current = f;
    const v = new Sp(), M = new Vo(
      -m.width / 2,
      m.width / 2,
      m.height / 2,
      -m.height / 2,
      0.1,
      1e3
    );
    M.position.z = 10;
    const d = new Bt(), h = new Gt({
      vertexShader: wp,
      fragmentShader: Rp,
      transparent: !0,
      blending: sr,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new Ge(n === "mission" ? 15907131 : 3463423) },
        uGlowIntensity: { value: 2.5 },
        uSize: { value: u ? 10 : 6 }
      }
    }), b = new Ap(d, h);
    v.add(b);
    const E = new Bt(), T = new Gt({
      vertexShader: Cp,
      fragmentShader: Pp,
      transparent: !0,
      blending: sr,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new Ge(n === "mission" ? 15907131 : 3463423) }
      }
    }), k = new Tp(E, T);
    v.add(k);
    let R = 0, A = performance.now();
    const O = t.subscribe((S) => {
      const { nodes: V, edges: H, activeEdges: X } = S, K = f.getSize(new je()), z = new Float32Array(V.length * 3), J = new Float32Array(V.length);
      V.forEach((D, ie) => {
        z[ie * 3] = D.position[0] - K.x / 2, z[ie * 3 + 1] = D.position[1] - K.y / 2, z[ie * 3 + 2] = D.position[2], J[ie] = D.energy;
      }), d.setAttribute("position", new _t(z, 3)), d.setAttribute("aEnergy", new _t(J, 1));
      const G = new Float32Array(H.length * 6), oe = new Float32Array(H.length * 2);
      H.forEach((D, ie) => {
        const xe = V[D.from], B = V[D.to];
        if (xe && B) {
          const $ = ie * 6;
          G[$] = xe.position[0] - K.x / 2, G[$ + 1] = xe.position[1] - K.y / 2, G[$ + 2] = xe.position[2], G[$ + 3] = B.position[0] - K.x / 2, G[$ + 4] = B.position[1] - K.y / 2, G[$ + 5] = B.position[2];
          const fe = [D.from, D.to].sort((Te, ye) => Te - ye).join("-"), ee = X.has(fe) ? 1 : 0;
          oe[ie * 2] = ee, oe[ie * 2 + 1] = ee;
        }
      }), E.setAttribute("position", new _t(G, 3)), E.setAttribute("aActive", new _t(oe, 1)), h.uniforms.uTime.value = performance.now() * 1e-3, T.uniforms.uTime.value = performance.now() * 1e-3, f.render(v, M), R++;
      const le = performance.now();
      le - A > 1e3 && (o(R), R = 0, A = le);
    }), Q = () => {
      const S = p();
      M.left = -S.width / 2, M.right = S.width / 2, M.top = S.height / 2, M.bottom = -S.height / 2, M.updateProjectionMatrix();
    }, g = new ResizeObserver(() => {
      Q();
    });
    return u ? window.addEventListener("resize", Q) : g.observe(c), () => {
      O(), window.removeEventListener("resize", Q), g.disconnect(), f.dispose(), c.contains(f.domElement) && c.removeChild(f.domElement);
    };
  }, [t, n, i]);
  const l = i === "fullscreen" ? "fixed inset-0 -z-10 bg-[#020202] pointer-events-none" : "relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 jk-glass pointer-events-none";
  return /* @__PURE__ */ re.jsxs("div", { ref: r, className: `${l} ${e}`, children: [
    /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" }),
    i === "fullscreen" && /* @__PURE__ */ re.jsxs("div", { className: "absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none", children: [
      "SYSTEM_LOAD: ",
      a,
      " FPS // ",
      n.toUpperCase(),
      "_MODE"
    ] })
  ] });
}, Lp = ({ children: i, showScanlines: e = !0 }) => (Ct(), /* @__PURE__ */ re.jsxs("div", { className: "jk-layout-v2 relative min-h-screen bg-transparent text-white font-outfit selection:bg-neo-accent selection:text-black", children: [
  /* @__PURE__ */ re.jsx(Ko, {}),
  /* @__PURE__ */ re.jsx("div", { className: "fixed inset-0 bg-black/40 pointer-events-none z-0" }),
  e && /* @__PURE__ */ re.jsx("div", { className: "jk-scanline" }),
  /* @__PURE__ */ re.jsx("div", { className: "fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]" }),
  /* @__PURE__ */ re.jsx("div", { className: "relative z-10", children: i })
] })), Dp = ({ children: i, showScanlines: e = !0 }) => /* @__PURE__ */ re.jsx(mo, { children: /* @__PURE__ */ re.jsx(Lp, { showScanlines: e, children: i }) }), Fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NeoBadge: ll,
  NeoButton: ks,
  NeoCard: al,
  NeoGrid: cl,
  NeoInput: ol,
  NeoLayout: Dp,
  NeoModal: ul,
  NeoPanel: hl,
  NeoTable: dl,
  NeoTabs: fl,
  NeoToast: pl,
  NeuralBackground: Ko,
  NeuralEngine: po,
  SystemContext: Gs,
  SystemProvider: mo,
  useSystem: Ct
}, Symbol.toStringTag, { value: "Module" }));
export {
  ll as N,
  Gs as S,
  ks as a,
  al as b,
  cl as c,
  ol as d,
  Dp as e,
  ul as f,
  hl as g,
  dl as h,
  fl as i,
  pl as j,
  Ko as k,
  po as l,
  mo as m,
  Fp as n,
  Rt as o,
  Ct as u
};
//# sourceMappingURL=index-DQfx0v4j.js.map
