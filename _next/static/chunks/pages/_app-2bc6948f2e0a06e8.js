(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [888], {
      6840: function (t, e, n) {
         (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(2283)
         }])
      },
      2283: function (t, e, n) {
         "use strict";
         n.r(e), n.d(e, {
            default: function () {
               return i
            }
         });
         var r = n(5893);
         n(8804);
         var o = n(7294);

         function a(t, e) {
            return Math.random() * (e - t + 1) + t
         }

         function c(t, e) {
            return Math.floor(a(t, e))
         }
         let u = (0, o.forwardRef)((t, e) => {
            let {
               progress: n,
               height: u = 3,
               className: s = "",
               color: i = "#F97316",
               background: l = "transparent",
               onLoaderFinished: f,
               transitionTime: h = 300,
               loaderSpeed: d = 500,
               waitingTime: p = 1e3,
               shadow: v = !0,
               containerStyle: m = {},
               style: w = {},
               shadowStyle: b = {},
               containerClassName: x = ""
            } = t, y = (0, o.useRef)(!1), [g, _] = (0, o.useState)(0), E = (0, o.useRef)({
               active: !1,
               refreshRate: 1e3
            }), [S, R] = (0, o.useState)(!1), [N, j] = (0, o.useState)({
               active: !1,
               value: 20
            }), [k, C] = (0, o.useState)({
               height: "100%",
               background: i,
               transition: "all ".concat(d, "ms ease"),
               width: "0%"
            }), I = {
               boxShadow: "0 0 10px ".concat(i, ", 0 0 10px ").concat(i),
               width: "5%",
               opacity: 1,
               position: "absolute",
               height: "100%",
               transition: "all ".concat(d, "ms ease"),
               transform: "rotate(3deg) translate(0px, -4px)",
               left: "-10rem"
            }, [M, T] = (0, o.useState)(I);
            (0, o.useEffect)(() => (y.current = !0, () => {
               y.current = !1
            }), []), (0, o.useImperativeHandle)(e, () => ({
               continuousStart(t) {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                  if (N.active) return;
                  if (S) {
                     console.warn("You can't use both controlling by props and ref methods to control the bar!");
                     return
                  }
                  let n = t || c(10, 20);
                  E.current = {
                     active: !0,
                     refreshRate: e
                  }, _(n), Y(n)
               },
               staticStart(t) {
                  if (E.current.active) return;
                  if (S) {
                     console.warn("You can't use both controlling by props and ref methods to control the bar!");
                     return
                  }
                  let e = t || c(30, 50);
                  j({
                     active: !0,
                     value: e
                  }), _(e), Y(e)
               },
               complete() {
                  if (S) {
                     console.warn("You can't use both controlling by props and ref methods to control the bar!");
                     return
                  }
                  _(100), Y(100)
               }
            })), (0, o.useEffect)(() => {
               C({
                  ...k,
                  background: i
               }), T({
                  ...M,
                  boxShadow: "0 0 10px ".concat(i, ", 0 0 5px ").concat(i)
               })
            }, [i]), (0, o.useEffect)(() => {
               if (e) {
                  if (e && void 0 !== n) {
                     console.warn("You can't use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if 'ref' property is available.");
                     return
                  }
                  Y(g), R(!1)
               } else n && Y(n), R(!0)
            }, [n]);
            let Y = t => {
               t >= 100 ? (C({
                  ...k,
                  width: "100%"
               }), v && T({
                  ...M,
                  left: t - 10 + "%"
               }), setTimeout(() => {
                  y.current && (C({
                     ...k,
                     opacity: 0,
                     width: "100%",
                     transition: "all ".concat(h, "ms ease-out"),
                     color: i
                  }), setTimeout(() => {
                     y.current && (E.current.active && (E.current = {
                        ...E.current,
                        active: !1
                     }, _(0), Y(0)), N.active && (j({
                        ...N,
                        active: !1
                     }), _(0), Y(0)), f && f(), _(0), Y(0))
                  }, h))
               }, p)) : (C(e => ({
                  ...e,
                  width: t + "%",
                  opacity: 1,
                  transition: t > 0 ? "all ".concat(d, "ms ease") : ""
               })), v && T({
                  ...M,
                  left: t - 5.5 + "%",
                  transition: t > 0 ? "all ".concat(d, "ms ease") : ""
               }))
            };
            return ! function (t, e, n) {
               let r = (0, o.useRef)(() => {});
               (0, o.useEffect)(() => {
                  r.current = t
               }), (0, o.useEffect)(() => {
                  n && null !== e && !1 !== e && r.current()
               }, [n]), (0, o.useEffect)(() => {
                  if (null === e || !1 === e) return;
                  let t = setInterval(() => r.current(), e);
                  return () => clearInterval(t)
               }, [e])
            }(() => {
               let t = Math.min(10, (100 - g) / 5),
                  e = Math.min(20, (100 - g) / 3),
                  n = a(t, e);
               g + n < 95 && (_(g + n), Y(g + n))
            }, E.current.active ? E.current.refreshRate : null), (0, r.jsx)("div", {
               className: x,
               style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  height: u,
                  background: l,
                  zIndex: 99999999999,
                  width: "100%",
                  ...m
               },
               children: (0, r.jsx)("div", {
                  className: s,
                  style: {
                     ...k,
                     ...w
                  },
                  children: v ? (0, r.jsx)("div", {
                     style: {
                        ...M,
                        ...b
                     }
                  }) : null
               })
            })
         });
         var s = n(1163);

         function i(t) {
            let {
               Component: e,
               pageProps: n
            } = t, a = (0, s.useRouter)(), c = (0, o.useRef)(null);
            return (0, o.useEffect)(() => {
               a.events.on("routeChangeStart", () => {
                  c.current && c.current.continuousStart()
               }), a.events.on("routeChangeComplete", () => {
                  c.current && c.current.complete()
               })
            }, [a.events]), (0, r.jsxs)(r.Fragment, {
               children: [(0, r.jsx)(u, {
                  ref: c
               }), (0, r.jsx)(e, {
                  ...n
               })]
            })
         }
      },
      8804: function () {},
      1163: function (t, e, n) {
         t.exports = n(6885)
      }
   },
   function (t) {
      var e = function (e) {
         return t(t.s = e)
      };
      t.O(0, [774, 179], function () {
         return e(6840), e(6885)
      }), _N_E = t.O()
   }
]);