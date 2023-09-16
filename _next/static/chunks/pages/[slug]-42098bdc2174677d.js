(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [219], {
      1587: function (e, t, l) {
         (window.__NEXT_P = window.__NEXT_P || []).push(["/[slug]", function () {
            return l(1988)
         }])
      },
      8530: function (e, t) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "createAsyncLocalStorage", {
            enumerable: !0,
            get: function () {
               return r
            }
         });
         let l = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
         class s {
            disable() {
               throw l
            }
            getStore() {}
            run() {
               throw l
            }
            exit() {
               throw l
            }
            enterWith() {
               throw l
            }
         }
         let i = globalThis.AsyncLocalStorage;

         function r() {
            return i ? new i : new s
         }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      5182: function (e, t, l) {
         "use strict";

         function s(e) {}
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "clientHookInServerComponentError", {
            enumerable: !0,
            get: function () {
               return s
            }
         }), l(8754), l(7294), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      1414: function (e, t, l) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var l in t) Object.defineProperty(e, l, {
                  enumerable: !0,
                  get: t[l]
               })
            }(t, {
               ReadonlyURLSearchParams: function () {
                  return u
               },
               useSearchParams: function () {
                  return g
               },
               usePathname: function () {
                  return p
               },
               ServerInsertedHTMLContext: function () {
                  return c.ServerInsertedHTMLContext
               },
               useServerInsertedHTML: function () {
                  return c.useServerInsertedHTML
               },
               useRouter: function () {
                  return x
               },
               useParams: function () {
                  return w
               },
               useSelectedLayoutSegments: function () {
                  return f
               },
               useSelectedLayoutSegment: function () {
                  return v
               },
               redirect: function () {
                  return o.redirect
               },
               notFound: function () {
                  return d.notFound
               }
            });
         let s = l(7294),
            i = l(4224),
            r = l(8463),
            n = l(5182),
            a = l(2526),
            c = l(3014),
            o = l(8781),
            d = l(8147),
            h = Symbol("internal for urlsearchparams readonly");

         function m() {
            return Error("ReadonlyURLSearchParams cannot be modified")
         }
         class u {
            [Symbol.iterator]() {
               return this[h][Symbol.iterator]()
            }
            append() {
               throw m()
            }
            delete() {
               throw m()
            }
            set() {
               throw m()
            }
            sort() {
               throw m()
            }
            constructor(e) {
               this[h] = e, this.entries = e.entries.bind(e), this.forEach = e.forEach.bind(e), this.get = e.get.bind(e), this.getAll = e.getAll.bind(e), this.has = e.has.bind(e), this.keys = e.keys.bind(e), this.values = e.values.bind(e), this.toString = e.toString.bind(e), this.size = e.size
            }
         }

         function g() {
            (0, n.clientHookInServerComponentError)("useSearchParams");
            let e = (0, s.useContext)(r.SearchParamsContext),
               t = (0, s.useMemo)(() => e ? new u(e) : null, [e]);
            return t
         }

         function p() {
            return (0, n.clientHookInServerComponentError)("usePathname"), (0, s.useContext)(r.PathnameContext)
         }

         function x() {
            (0, n.clientHookInServerComponentError)("useRouter");
            let e = (0, s.useContext)(i.AppRouterContext);
            if (null === e) throw Error("invariant expected app router to be mounted");
            return e
         }

         function w() {
            (0, n.clientHookInServerComponentError)("useParams");
            let e = (0, s.useContext)(i.GlobalLayoutRouterContext);
            return e ? function e(t, l) {
               void 0 === l && (l = {});
               let s = t[1];
               for (let t of Object.values(s)) {
                  let s = t[0],
                     i = Array.isArray(s),
                     r = i ? s[1] : s;
                  if (!r || r.startsWith("__PAGE__")) continue;
                  let n = i && ("c" === s[2] || "oc" === s[2]);
                  n ? l[s[0]] = s[1].split("/") : i && (l[s[0]] = s[1]), l = e(t, l)
               }
               return l
            }(e.tree) : null
         }

         function f(e) {
            void 0 === e && (e = "children"), (0, n.clientHookInServerComponentError)("useSelectedLayoutSegments");
            let {
               tree: t
            } = (0, s.useContext)(i.LayoutRouterContext);
            return function e(t, l, s, i) {
               let r;
               if (void 0 === s && (s = !0), void 0 === i && (i = []), s) r = t[1][l];
               else {
                  var n;
                  let e = t[1];
                  r = null != (n = e.children) ? n : Object.values(e)[0]
               }
               if (!r) return i;
               let c = r[0],
                  o = (0, a.getSegmentValue)(c);
               return !o || o.startsWith("__PAGE__") ? i : (i.push(o), e(r, l, !1, i))
            }(t, e)
         }

         function v(e) {
            void 0 === e && (e = "children"), (0, n.clientHookInServerComponentError)("useSelectedLayoutSegment");
            let t = f(e);
            return 0 === t.length ? null : t[0]
         }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      8147: function (e, t) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var l in t) Object.defineProperty(e, l, {
                  enumerable: !0,
                  get: t[l]
               })
            }(t, {
               notFound: function () {
                  return s
               },
               isNotFoundError: function () {
                  return i
               }
            });
         let l = "NEXT_NOT_FOUND";

         function s() {
            let e = Error(l);
            throw e.digest = l, e
         }

         function i(e) {
            return (null == e ? void 0 : e.digest) === l
         }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      8781: function (e, t, l) {
         "use strict";
         var s, i;
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var l in t) Object.defineProperty(e, l, {
                  enumerable: !0,
                  get: t[l]
               })
            }(t, {
               RedirectType: function () {
                  return s
               },
               getRedirectError: function () {
                  return a
               },
               redirect: function () {
                  return c
               },
               isRedirectError: function () {
                  return o
               },
               getURLFromRedirectError: function () {
                  return d
               },
               getRedirectTypeFromError: function () {
                  return h
               }
            });
         let r = l(4505),
            n = "NEXT_REDIRECT";

         function a(e, t) {
            let l = Error(n);
            l.digest = n + ";" + t + ";" + e;
            let s = r.requestAsyncStorage.getStore();
            return s && (l.mutableCookies = s.mutableCookies), l
         }

         function c(e, t) {
            throw void 0 === t && (t = "replace"), a(e, t)
         }

         function o(e) {
            if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
            let [t, l, s] = e.digest.split(";", 3);
            return t === n && ("replace" === l || "push" === l) && "string" == typeof s
         }

         function d(e) {
            return o(e) ? e.digest.split(";", 3)[2] : null
         }

         function h(e) {
            if (!o(e)) throw Error("Not a redirect error");
            return e.digest.split(";", 3)[1]
         }(i = s || (s = {})).push = "push", i.replace = "replace", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      4505: function (e, t, l) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "requestAsyncStorage", {
            enumerable: !0,
            get: function () {
               return i
            }
         });
         let s = l(8530),
            i = (0, s.createAsyncLocalStorage)();
         ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      2526: function (e, t) {
         "use strict";

         function l(e) {
            return Array.isArray(e) ? e[1] : e
         }
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "getSegmentValue", {
            enumerable: !0,
            get: function () {
               return l
            }
         }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      3014: function (e, t, l) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var l in t) Object.defineProperty(e, l, {
                  enumerable: !0,
                  get: t[l]
               })
            }(t, {
               ServerInsertedHTMLContext: function () {
                  return r
               },
               useServerInsertedHTML: function () {
                  return n
               }
            });
         let s = l(1757),
            i = s._(l(7294)),
            r = i.default.createContext(null);

         function n(e) {
            let t = (0, i.useContext)(r);
            t && t(e)
         }
      },
      1988: function (e, t, l) {
         "use strict";
         l.r(t), l.d(t, {
            __N_SSP: function () {
               return ec
            },
            default: function () {
               return ed
            },
            runtime: function () {
               return eo
            }
         });
         var s = l(5893),
            i = l(7294),
            r = l(5675),
            n = l.n(r);

         function a() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 496 512",
               width: 16,
               height: 16,
               className: "fill-green-500",
               children: (0, s.jsx)("path", {
                  d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
               })
            })
         }

         function c() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 512 512",
               width: 16,
               height: 16,
               className: "fill-theme",
               children: (0, s.jsx)("path", {
                  d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
               })
            })
         }

         function o() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 512 512",
               width: 16,
               height: 16,
               className: "fill-theme",
               children: (0, s.jsx)("path", {
                  d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
               })
            })
         }

         function d(e) {
            let t = String(Math.floor(e / 60)).padStart(2, "0"),
               l = String(Math.floor(e % 60)).padStart(2, "0");
            return "".concat(t, ":").concat(l)
         }

         function h(e, t) {
            let l = Math.abs(Number(e) - Number(t));
            return {
               days: Math.floor(l / 864e5),
               hours: Math.floor(l % 864e5 / 36e5),
               minutes: Math.floor(l % 36e5 / 6e4),
               seconds: Math.floor(l % 6e4 / 1e3)
            }
         }

         function m(e) {
            return e.split(":").map(e => e.padStart(2, "0")).join(":")
         }

         function u(e) {
            let [t, l] = e.split(":").map(Number);
            return 60 * t + l
         }

         function g(e, t) {
            let {
               minutes: l,
               seconds: s
            } = h(e, t);
            return m("".concat(l, ":").concat(s))
         }

         function p(e, t) {
            let {
               minutes: l,
               seconds: s
            } = h(e, t);
            return m("".concat(l, ":").concat(s))
         }

         function x(e) {
            let {
               activity: t,
               currentActivity: l,
               index: r
            } = e, [d, x] = (0, i.useState)("00:00"), [w, f] = (0, i.useState)("00:00"), [v, j] = (0, i.useState)(0), [b, C] = (0, i.useState)("00:00:00");
            return "Spotify" === t.name ? setInterval(() => {
               var e, l;
               if ((null === (e = t.timestamps) || void 0 === e ? void 0 : e.start) && (null === (l = t.timestamps) || void 0 === l ? void 0 : l.end)) {
                  let e = new Date,
                     l = new Date(t.timestamps.start),
                     s = new Date(t.timestamps.end),
                     i = g(e, l),
                     r = p(l, s),
                     n = function (e, t, l) {
                        let s = u(g(e, t)),
                           i = u(p(t, l));
                        return s / i * 100
                     }(e, l, s);
                  i <= r && (x(i), f(r), j(n))
               }
            }, 1e3) : setInterval(() => {
               var e;
               if (null === (e = t.timestamps) || void 0 === e ? void 0 : e.start) {
                  let e = new Date,
                     l = new Date(t.timestamps.start),
                     s = function (e, t) {
                        let {
                           hours: l,
                           minutes: s,
                           seconds: i
                        } = h(e, t);
                        return m("".concat(l, ":").concat(s, ":").concat(i))
                     }(e, l);
                  C(s)
               }
            }, 1e3), l === r && (0, s.jsxs)("div", {
               className: "flex flex-[100%] items-center gap-6 sm:flex-[45%]",
               children: [t.icon ? (0, s.jsxs)("div", {
                  className: "relative aspect-square h-24",
                  children: [(0, s.jsx)(n(), {
                     className: "aspect-square h-24 w-24 rounded-xl border-1 border-theme p-1",
                     src: t.icon,
                     width: 78,
                     height: 78,
                     alt: "Icon",
                     draggable: !1,
                     loading: "lazy",
                     quality: 50
                  }), (0, s.jsxs)("span", {
                     className: "absolute bottom-0 right-0 -m-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-main bg-main",
                     children: ["LISTENING" === t.type && (0, s.jsx)(a, {}), "PLAYING" === t.type && (0, s.jsx)(c, {}), "LISTENING" !== t.type && "PLAYING" !== t.type && (0, s.jsx)(o, {})]
                  })]
               }) : (0, s.jsxs)("div", {
                  className: "relative flex aspect-square h-24 items-center justify-center",
                  children: [(0, s.jsx)(n(), {
                     className: "aspect-square h-24 w-24 rounded-xl border-1 border-theme p-1",
                     src: "".concat("https://assets.fkcri.me", "/assets/images/logo.png"),
                     width: 78,
                     height: 78,
                     alt: "Icon",
                     draggable: !1,
                     loading: "lazy",
                     quality: 50
                  }), (0, s.jsx)("span", {
                     className: "absolute bottom-0 right-0 -m-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-main bg-main text-xl",
                     children: (0, s.jsx)(o, {})
                  })]
               }), (0, s.jsx)("div", {
                  className: "!mr-3 w-full",
                  children: "Spotify" === t.name ? (0, s.jsxs)(s.Fragment, {
                     children: [t.details && (0, s.jsx)("h2", {
                        className: "text-lg leading-tight text-white",
                        children: t.details
                     }), t.state && (0, s.jsx)("p", {
                        children: t.state.replaceAll(";", ",")
                     }), t.timestamps && (0, s.jsxs)("div", {
                        className: "mt-1 flex w-full flex-1 items-center justify-between gap-2",
                        children: [(0, s.jsx)("p", {
                           className: "font-mono text-sm",
                           children: d
                        }), (0, s.jsx)("div", {
                           className: "relative flex h-2.5 basis-full overflow-hidden rounded-md bg-zinc-800",
                           children: (0, s.jsx)("div", {
                              className: "h-2.5 bg-theme",
                              style: {
                                 width: "".concat(v, "%"),
                                 transition: "width 1s ease"
                              }
                           })
                        }), (0, s.jsx)("p", {
                           className: "font-mono text-sm",
                           children: w
                        })]
                     })]
                  }) : (0, s.jsxs)(s.Fragment, {
                     children: [t.name && (0, s.jsx)("h2", {
                        className: "text-lg leading-tight text-white",
                        children: t.name
                     }), t.details && (0, s.jsx)("p", {
                        children: t.details
                     }), t.timestamps && t.timestamps.start && (0, s.jsxs)("p", {
                        className: "font-mono",
                        children: [b, " elapsed"]
                     })]
                  })
               })]
            })
         }

         function w(e) {
            let {
               options: t,
               activities: l
            } = e, [r, n] = (0, i.useState)(0), a = l.length - 1;
            return (0, i.useEffect)(() => {
               let e = setInterval(() => {
                  r < a ? n(r + 1) : r === a && n(0)
               }, 5e3);
               return () => clearInterval(e)
            }, [n, a, r]), (0, s.jsxs)("div", {
               className: "".concat(!(null == t ? void 0 : t.simple) && "bg-style p-3", " relative grid flex-[100%] gap-4 sm:flex-[45%]"),
               children: [l.map((e, t) => (0, s.jsx)(x, {
                  activity: e,
                  currentActivity: r,
                  index: t
               }, t)), l && l.length > 1 && (0, s.jsx)("div", {
                  className: "absolute inset-x-0 bottom-0 flex justify-center gap-2",
                  children: l.map((e, t) => (0, s.jsx)("button", {
                     className: "".concat(r === t ? "bg-theme" : "bg-zinc-800", " h-2 w-2 cursor-pointer rounded-full hover:bg-theme"),
                     onClick: () => n(t)
                  }, t))
               })]
            })
         }

         function f() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 100 100",
               className: "relative inline-flex h-7 w-7 rounded-full border-[3px] border-main bg-main",
               children: (0, s.jsx)("image", {
                  xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDMjY5NTBGMEY2MTExRUVCQzVDQjQ4MzM5QkFGMzI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDMjY5NTEwMEY2MTExRUVCQzVDQjQ4MzM5QkFGMzI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0MyNjk1MEQwRjYxMTFFRUJDNUNCNDgzMzlCQUYzMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyNjk1MEUwRjYxMTFFRUJDNUNCNDgzMzlCQUYzMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6v9G/8AAAN9ElEQVR42uyd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"
               })
            })
         }

         function v() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 100 100",
               width: 100,
               height: 100,
               className: "relative inline-flex h-7 w-7 rounded-full border-[3px] border-main bg-main",
               children: (0, s.jsx)("image", {
                  xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3QzU4MTBFMEY2MTExRUVCQjk2QzYwRDMzMDM1MjNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3QzU4MTBGMEY2MTExRUVCQjk2QzYwRDMzMDM1MjNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzdDNTgxMEMwRjYxMTFFRUJCOTZDNjBEMzMwMzUyM0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzdDNTgxMEQwRjYxMTFFRUJCOTZDNjBEMzMwMzUyM0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4cP0rxAAAH2ElEQVR42uxd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"
               })
            })
         }

         function j() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 100 100",
               width: 100,
               height: 100,
               className: "relative inline-flex h-7 w-7 rounded-full border-[3px] border-main bg-main",
               children: (0, s.jsx)("image", {
                  xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNTdBNTE4MEY2MTExRUU4ODZCRUEyQjgwRjRFRkJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxNTdBNTE5MEY2MTExRUU4ODZCRUEyQjgwRjRFRkJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODE1N0E1MTYwRjYxMTFFRTg4NkJFQTJCODBGNEVGQkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODE1N0E1MTcwRjYxMTFFRTg4NkJFQTJCODBGNEVGQkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6zgI8PAAAQXElEQVR42uxd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"
               })
            })
         }

         function b() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 100 100",
               width: 100,
               height: 100,
               className: "relative inline-flex h-7 w-7 rounded-full border-[3px] border-main bg-main",
               children: (0, s.jsx)("image", {
                  xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyMDhGNjgyMEY2MTExRUVCRUM1RTQwN0UxNjc3MUU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyMDhGNjgzMEY2MTExRUVCRUM1RTQwN0UxNjc3MUU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzIwOEY2ODAwRjYxMTFFRUJFQzVFNDA3RTE2NzcxRTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzIwOEY2ODEwRjYxMTFFRUJFQzVFNDA3RTE2NzcxRTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DBc/AAAALXUlEQVR42uxd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"
               })
            })
         }
         let C = {
            online: "#43B581",
            idle: "#FAA61A",
            dnd: "#F04747",
            offline: "#747F8D"
         };

         function A(e) {
            let {
               status: t
            } = e;
            return (0, s.jsxs)("span", {
               className: "absolute bottom-0 right-0 -m-2 flex h-7 w-7",
               children: ["offline" !== t && (0, s.jsx)("span", {
                  className: "absolute inline-flex h-full w-full animate-ping-slow rounded-full opacity-50",
                  style: {
                     background: "".concat(C[t])
                  }
               }), "online" === t && (0, s.jsx)(b, {}), "idle" === t && (0, s.jsx)(v, {}), "dnd" === t && (0, s.jsx)(f, {}), "online" !== t && "idle" !== t && "dnd" !== t && (0, s.jsx)(j, {})]
            })
         }

         function M() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 448 512",
               width: 13,
               height: 13,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
               })
            })
         }

         function N(e) {
            let {
               text: t,
               external: l,
               children: i
            } = e;
            return (0, s.jsxs)("div", {
               className: "group relative flex cursor-pointer items-center justify-center",
               children: [i, (0, s.jsxs)("div", {
                  className: "pointer-events-none absolute -top-10 flex translate-y-2 scale-95 items-center gap-3 rounded-md border-1 border-stone-500/5 bg-main px-3 py-1 opacity-0 transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
                  children: [(0, s.jsx)("span", {
                     className: "select-none truncate text-sm text-white",
                     children: t
                  }), l && (0, s.jsx)(M, {})]
               })]
            })
         }

         function y() {
            return (0, s.jsxs)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 31 22",
               width: 24,
               height: 24,
               children: [(0, s.jsx)("path", {
                  d: "M21.26 16h-1.67A3.64 3.64 0 0 1 16 12.32V10.6a1.45 1.45 0 0 1 1.43-1.47h7.88V7.08h-14c-1.27 2.86-2.57 5.83-3 7a3.65 3.65 0 0 1-3.37 2.31v1.23a6 6 0 0 0 4.16 1.7h12.58a3.64 3.64 0 0 0 3.63-3.63v-.26a3.45 3.45 0 0 1-1.9.57zm-8.43-2.8a1.24 1.24 0 1 1 1.24-1.2 1.24 1.24 0 0 1-1.24 1.2z",
                  fill: "#aabff2"
               }), (0, s.jsx)("path", {
                  d: "M12.83 10.72a1.24 1.24 0 0 0 0 2.48 1.24 1.24 0 0 0 0-2.48z"
               }), (0, s.jsx)("path", {
                  d: "M25.56 9.13h-8.13A1.45 1.45 0 0 0 16 10.6v1.72A3.64 3.64 0 0 0 19.59 16h3.82a3.45 3.45 0 0 0 1.9-.57.53.53 0 0 0 .1-.06 3.69 3.69 0 0 0 1.59-3V10.6a1.46 1.46 0 0 0-1.44-1.47zM22 14.4h-1.61a.61.61 0 1 1 0-1.21H22a.61.61 0 1 1 0 1.21zm2.85 0h-.65a.61.61 0 1 1 0-1.21h.61a.61.61 0 0 1 0 1.21z",
                  fill: "#cbdaf7"
               }), (0, s.jsx)("path", {
                  d: "M22 13.19h-1.61a.61.61 0 1 0 0 1.21H22a.61.61 0 1 0 0-1.21zM24.81 13.19h-.61a.61.61 0 1 0 0 1.21h.61a.61.61 0 0 0 0-1.21z",
                  fill: "#aabff2"
               }), (0, s.jsx)("path", {
                  d: "M2.23 15.37a3.75 3.75 0 0 1-.44-.24v5.78L3.34 22l1.55-1.09v-4.55a3.76 3.76 0 0 1-2.66-.99z",
                  fill: "#ef8843"
               }), (0, s.jsx)("path", {
                  d: "M7.29 13.41a3.75 3.75 0 0 1-5.06 2 3.76 3.76 0 0 0 2.66 1 3.65 3.65 0 0 0 3.37-2.31c.45-1.14 1.75-4.11 3-7H10s-1.74 3.84-2.71 6.31z",
                  fill: "#d0d9ea"
               }), (0, s.jsx)("path", {
                  d: "M14.46 0l.85.07zM11.32.11A16.07 16.07 0 0 1 13.19 0a16.07 16.07 0 0 0-1.87.11zM21.83 4.3a23 23 0 0 1 3.59.36c-.79-.93-3.82-4-10.11-4.55 4.55 1.09 6.23 3.68 6.52 4.19zM7.29 13.41C8.26 10.94 10 7.08 10 7.08s3.08-2.33 9.41-2.73c-2.2-3-5.83-4-8.08-4.24C3.61.94 0 6.8 0 11.48a4.08 4.08 0 0 0 1.79 3.65 3.77 3.77 0 0 0 5.5-1.72zM.77 10.57A2.86 2.86 0 0 1 3.7 7.85a2.85 2.85 0 0 1 2.18 3.35A2.84 2.84 0 0 1 3 13.92a2.84 2.84 0 0 1-2.23-3.35z",
                  fill: "#ebeff7"
               }), (0, s.jsx)("path", {
                  d: "M19.39 4.35c.46 0 .93 0 1.42-.06h1c-.29-.51-2-3.1-6.52-4.19l-.83-.1h-1.27a16.07 16.07 0 0 0-1.87.11c2.24.27 5.87 1.19 8.07 4.24z",
                  fill: "#fc964b"
               }), (0, s.jsx)("path", {
                  d: "M20.81 4.29c-.49 0-1 0-1.42.06-6.33.4-9.39 2.73-9.39 2.73h21.43a13.46 13.46 0 0 0-6-2.42 23 23 0 0 0-3.59-.36zM3 13.92a2.84 2.84 0 0 0 2.88-2.72A2.85 2.85 0 0 0 3.7 7.85a2.86 2.86 0 0 0-2.93 2.72A2.84 2.84 0 0 0 3 13.92zm-1.76-3.24a1.9 1.9 0 0 1 2-1.81 1.9 1.9 0 0 1 1.4 2.23 1.89 1.89 0 0 1-1.95 1.8 1.89 1.89 0 0 1-1.45-2.22z",
                  fill: "#647096"
               }), (0, s.jsx)("path", {
                  d: "M2.69 12.9a1.89 1.89 0 0 0 1.95-1.8 1.9 1.9 0 0 0-1.45-2.23 1.9 1.9 0 0 0-1.95 1.81 1.89 1.89 0 0 0 1.45 2.22z",
                  fill: "#fc964b"
               })]
            })
         }

         function z() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 24,
               height: 24,
               children: (0, s.jsx)("path", {
                  clipRule: "evenodd",
                  d: "m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z",
                  fill: "#9c84ef",
                  fillRule: "evenodd"
               })
            })
         }

         function I() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 24,
               height: 24,
               children: (0, s.jsx)("path", {
                  clipRule: "evenodd",
                  d: "m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                  fill: "#f47b67",
                  fillRule: "evenodd"
               })
            })
         }

         function S() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 24,
               height: 24,
               children: (0, s.jsx)("path", {
                  clipRule: "evenodd",
                  d: "m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                  fill: "#45ddc0",
                  fillRule: "evenodd"
               })
            })
         }

         function E() {
            return (0, s.jsxs)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 24,
               height: 24,
               children: [(0, s.jsx)("circle", {
                  cx: "15",
                  cy: "12",
                  fill: "#fff",
                  r: "6"
               }), (0, s.jsx)("path", {
                  clipRule: "evenodd",
                  d: "m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z",
                  fill: "#4f5d7f",
                  fillRule: "evenodd"
               }), (0, s.jsx)("path", {
                  d: "m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z",
                  fill: "#c5cedd"
               })]
            })
         }

         function R() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 24,
               height: 24,
               children: (0, s.jsx)("path", {
                  d: "M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z",
                  fill: "#2EA967"
               })
            })
         }

         function H(e) {
            let {
               badge: t
            } = e;
            return (0, s.jsxs)(N, {
               text: t,
               children: ["Discord Employee" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Partnered Server Owner" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "HypeSquad Events" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Bug Hunter Level 1" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "HypeSquad Bravery" === t && (0, s.jsx)(z, {}), "HypeSquad Brilliance" === t && (0, s.jsx)(I, {}), "HypeSquad Balance" === t && (0, s.jsx)(S, {}), "Early Adopter" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Bug Hunter Level 2" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Verified Bot" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Early Verified Bot Developer" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Moderator Programs Alumni" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "BOT_HTTP_INTERACTIONS" === t && (0, s.jsx)("small", {
                  children: "soon"
               }), "Active Developer" === t && (0, s.jsx)(R, {}), "Early Supporter" === t && (0, s.jsx)(y, {}), "Discord Nitro" === t && (0, s.jsx)(E, {})]
            })
         }

         function B(e) {
            let {
               options: t,
               discord: l
            } = e;
            return (0, s.jsxs)("div", {
               className: "".concat(!(null == t ? void 0 : t.simple) && "bg-style p-3", " flex flex-[100%] items-center gap-6 sm:flex-[45%]"),
               children: [(0, s.jsxs)("div", {
                  className: "relative aspect-square h-24",
                  children: [(0, s.jsx)(n(), {
                     className: "h-full w-full rounded-xl border-1 border-theme p-1",
                     src: l.avatar,
                     width: 78,
                     height: 78,
                     alt: "Avatar",
                     draggable: !1,
                     loading: "lazy",
                     decoding: "async"
                  }), (0, s.jsx)(A, {
                     status: l.status
                  })]
               }), (0, s.jsxs)("div", {
                  className: "!mr-3 w-full",
                  children: [(0, s.jsxs)("div", {
                     className: "flex flex-wrap items-center gap-2",
                     children: [(0, s.jsx)("h2", {
                        className: "text-lg font-medium text-white",
                        children: l.name
                     }), l.badges && l.badges.length > 0 && (0, s.jsx)("div", {
                        className: "flex gap-2",
                        children: l.badges.map((e, t) => (0, s.jsx)(H, {
                           badge: e
                        }, t))
                     })]
                  }), l.description && (0, s.jsxs)("div", {
                     className: "flex items-center gap-2 break-all text-left",
                     children: [l.description.emoji && !l.description.emoji.url && l.description.emoji.name && (0, s.jsx)("span", {
                        children: l.description.emoji.name
                     }), l.description.emoji && l.description.emoji.url && (0, s.jsx)(n(), {
                        className: "h-3 w-3",
                        src: l.description.emoji.url,
                        width: 12,
                        height: 12,
                        alt: "Emoji",
                        draggable: !1,
                        loading: "lazy",
                        decoding: "async"
                     }), l.description.text && (0, s.jsx)("span", {
                        children: l.description.text
                     })]
                  })]
               })]
            })
         }

         function L(e) {
            let {
               name: t,
               theme: l
            } = e;
            return (0, s.jsxs)(s.Fragment, {
               children: ["audiomack" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 279 192",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(244, 117, 33, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     className: l ? "fill-theme drop-shadow-theme" : "",
                     fillRule: "evenodd",
                     clipRule: "evenodd",
                     d: "M3.84817 88.829C3.84817 88.829 10.1459 87.7898 12.741 90.5016C15.3386 93.2126 13.6364 98.8211 10.1897 98.9144C6.74296 99.0069 3.55741 99.6438 1.29561 97.2419C-0.966184 94.8399 -0.358921 90.0142 3.84817 88.829ZM72.2145 127.105C71.6077 127.169 70.9656 126.89 70.3084 126.421C65.7929 120.128 64.1619 98.6105 62.0891 97.3287C59.9399 95.9998 52.1564 109.251 36.6748 107.826C30.2013 107.23 23.6131 103.036 19.7335 100.131C20.0942 95.2417 20.1569 83.8245 29.7993 87.5374C35.6568 89.7919 45.6874 95.9846 54.4966 84.8642C64.2368 72.5656 69.6083 76.1384 72.8305 78.8116C76.0513 81.4847 73.9051 95.3878 78.7095 91.5014C83.5138 87.615 102.913 63.4821 102.913 63.4821C102.913 63.4821 117.932 48.3353 120.232 64.2585C122.533 80.1816 132.325 97.828 134.92 97.3257C137.517 96.8218 167.728 35.4187 172.056 31.4577C176.383 27.4951 190.949 28.0158 190.257 38.1786C189.564 48.3414 188.081 111.509 188.081 111.509C188.081 111.509 186.372 129.309 189.156 119.796C190.31 115.852 191.55 112.294 193.1 108.143C200.556 84.272 213.257 43.4929 219.586 22.4807C221.041 17.4526 222.294 13.1369 223.266 9.81982L223.268 9.81068C223.646 8.27317 224.022 7.05534 224.399 5.96842C224.928 4.18734 225.286 3.00909 225.396 2.69854C225.679 1.91304 226.472 1.31325 227.586 0.873311C228.705 0.16849 229.905 0.131955 231.266 0.0969425C234.778 -0.218172 239.295 0.240038 243.357 1.39698C244.54 1.44417 245.827 1.82322 247.044 2.69702V2.69854C247.044 2.69854 247.117 2.74268 247.219 2.80967C247.247 2.83098 247.276 2.8462 247.305 2.86903C247.559 3.04562 247.972 3.39423 248.448 3.96813C248.462 3.9864 248.477 4.00923 248.494 4.02598C248.691 4.26802 248.89 4.55421 249.092 4.87998C251.36 8.20771 252.754 14.3425 251.357 25.2224C247.874 52.3709 245.177 108.221 245.177 108.221C245.177 108.221 244.641 110.892 250.237 99.1296C250.433 98.7201 250.682 98.3669 250.911 97.9909C251.214 97.7915 251.553 97.5053 251.973 96.9999C255.43 92.8775 264.723 90.4571 271.168 90.5058C273.884 90.8346 276.159 91.5181 277.518 92.3767C280.061 96.2479 278.56 110.535 278.56 110.535C273.199 111.031 262.979 113.916 259.356 114.448C255.732 114.984 250.229 138.511 242.579 136.105C234.928 133.699 217.88 123.005 217.88 121.535C217.88 120.254 219.22 104.625 219.569 100.591C219.595 100.312 219.615 100.054 219.636 99.7964C219.644 99.7218 219.651 99.635 219.651 99.635L219.65 99.6396C219.897 96.4625 219.677 95.0742 218.21 98.2451C216.947 100.973 211.455 118.425 205.332 137.432C204.685 139.093 193.112 174.118 191.593 178.388C189.78 183.341 188.256 187.133 187.204 189.094C185.602 191.265 183.444 192.624 180.431 191.712C172.915 189.441 163.396 179.054 163.308 176.477C163.127 161.942 164.014 83.791 160.49 90.3034C156.874 96.9816 128.754 143.323 128.754 143.323C128.283 143.404 127.935 143.389 127.52 143.427C125.529 143.209 122.444 142.562 121.591 140.656C121.544 140.544 121.482 140.442 121.441 140.324C121.4 140.206 121.354 140.073 121.284 139.857C120.902 138.581 120.746 137.196 120.409 136.062C119.151 131.816 117.138 125.732 115.026 119.542C111.79 108.988 108.453 98.1919 107.904 96.9999C106.831 94.6678 105.267 95.6512 103.864 96.9984C97.5875 102.322 84.2552 125.82 72.2145 127.105Z",
                     fill: "url(#paint0_linear)"
                  }), (0, s.jsx)("defs", {
                     children: (0, s.jsxs)("linearGradient", {
                        id: "paint0_linear",
                        x1: "-126.232",
                        y1: "91.6907",
                        x2: "64.4169",
                        y2: "345.209",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, s.jsx)("stop", {
                           stopColor: "#FFBE00"
                        }), (0, s.jsx)("stop", {
                           offset: "1",
                           stopColor: "#E85E0A"
                        })]
                     })
                  })]
               }), "lastfm" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 32 32",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#D92323]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(217, 35, 35, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M14.131 22.948l-1.172-3.193c0 0-1.912 2.131-4.771 2.131-2.537 0-4.333-2.203-4.333-5.729 0-4.511 2.276-6.125 4.515-6.125 3.224 0 4.245 2.089 5.125 4.772l1.161 3.667c1.161 3.561 3.365 6.421 9.713 6.421 4.548 0 7.631-1.391 7.631-5.068 0-2.968-1.697-4.511-4.844-5.244l-2.344-0.511c-1.624-0.371-2.104-1.032-2.104-2.131 0-1.249 0.985-1.984 2.604-1.984 1.767 0 2.704 0.661 2.865 2.24l3.661-0.444c-0.297-3.301-2.584-4.656-6.323-4.656-3.308 0-6.532 1.251-6.532 5.245 0 2.5 1.204 4.077 4.245 4.807l2.484 0.589c1.865 0.443 2.484 1.224 2.484 2.287 0 1.359-1.323 1.921-3.828 1.921-3.703 0-5.244-1.943-6.124-4.625l-1.204-3.667c-1.541-4.765-4.005-6.531-8.891-6.531-5.287-0.016-8.151 3.385-8.151 9.192 0 5.573 2.864 8.595 8.005 8.595 4.14 0 6.125-1.943 6.125-1.943z"
                  })
               }), "statsfm" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#1ED760]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(30, 215, 96, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "M77.7698 151.964H31.8607C14.3745 151.964 0.199219 166.169 0.199219 183.691V477.17C0.199219 494.691 14.3745 508.896 31.8607 508.896H77.7698C95.256 508.896 109.431 494.691 109.431 477.17V183.691C109.431 166.169 95.256 151.964 77.7698 151.964Z"
                  }), (0, s.jsx)("path", {
                     d: "M277.239 0.72998H231.33C213.843 0.72998 199.668 14.9348 199.668 32.4574V477.17C199.668 494.691 213.843 508.896 231.33 508.896H277.239C294.726 508.896 308.9 494.691 308.9 477.17V32.4574C308.9 14.9348 294.726 0.72998 277.239 0.72998Z"
                  }), (0, s.jsx)("path", {
                     d: "M476.702 291.035H430.794C413.306 291.035 399.133 305.24 399.133 322.761V477.168C399.133 494.691 413.306 508.896 430.794 508.896H476.702C494.19 508.896 508.363 494.691 508.363 477.168V322.761C508.363 305.24 494.19 291.035 476.702 291.035Z"
                  })]
               }), "ogusers" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 350 350",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#ffffff]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 255, 255, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M2132 2825c-114-21-209-53-311-105l-94-49-76 39c-171 85-323 120-530 120-376-1-670-155-899-472-128-177-180-338-189-576-8-209 18-350 92-506 92-194 301-403 505-506 191-96 479-143 664-109 165 31 348 97 421 153l32 24 109-54c366-181 801-153 1136 73 213 143 358 331 431 558 32 98 62 248 54 269-6 14-75 16-622 16h-615v98c0 91-15 195-41 287-23 81-130 268-195 341-35 39-64 74-64 76 0 8 87 44 170 70 67 20 94 23 245 23 131-1 185-5 235-19 155-43 317-144 410-258 29-35 61-73 71-85 18-21 27-23 133-23 123 0 146 4 146 27 0 19-99 170-168 256-141 178-370 301-626 336-104 15-334 12-424-4zm-819-256c56-11 126-31 155-44l54-25-22-27c-11-16-38-50-59-77-52-66-124-197-151-276-29-84-60-275-60-365 0-79 23-232 47-315 8-30 31-86 51-125 32-64 116-203 131-215 3-3 26-26 50-52l44-46-51-26c-107-54-193-71-362-71-130 1-168 4-233 23-319 91-568 369-618 692-15 95-6 241 20 343 50 193 180 367 367 492 185 123 402 162 637 114zm546-364c43-63 80-147 114-260 16-54 21-99 21-200 1-115-2-141-27-225-16-52-47-130-70-173-44-83-132-190-152-185-6 2-40 35-74 73-74 83-155 240-176 342-19 89-19 261 0 343 30 130 106 280 189 376l49 56 49-53c27-30 61-72 77-94zm1306-757c-4-13-28-59-53-103-117-199-373-383-590-426-133-25-387 9-525 71l-48 21 49 57c26 31 63 80 81 109 38 62 121 241 121 264 0 9 3 19 7 22 3 4 222 7 485 7h479l-6-22z",
                     transform: "matrix(.1 0 0 -.1 0 350)"
                  })
               }), "crunchyroll" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 100 100",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#F47521]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(244, 117, 33, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     className: "st120",
                     d: "m95.861 43.517c-7.059-44.746-67.18-53.838-87.55-13.491-14.094 28.783 5.422 62.6 37.287 65.569-0.246 0.138 11.835 0.216 5.657-0.32-2.384-0.191-5.999-0.995-8.814-1.959-36.39-12.825-36.26-63.1 0.176-75.704 23.974-8.48 50.92 8.586 53.287 33.766 0.096 1.138 0.173 1.413 0.319 1.15 0.27-0.481 0.038-6.243-0.362-9.011z"
                  }), (0, s.jsx)("path", {
                     className: "st120",
                     d: "m88.716 53.078c-8.249 8.928-23.788 3.74-25.163-8.21-0.951-6.583 3.482-13.149 9.804-15.499-46.918-21.531-70.066 53.155-17.955 60.528 21.169 1.764 38.564-17.143 34.611-37.897-0.052-0.085-0.636 0.4-1.297 1.078z"
                  })]
               }), "discord" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#4D4FB7]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(88, 101, 242, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                  })
               }), "email" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 75 75",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-white",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 255, 255, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "m66.097 12.089h-56.9c-5.071 0-9.197 4.126-9.197 9.197v32.722c0 5.071 4.126 9.197 9.197 9.197h56.9c5.071 0 9.197-4.126 9.197-9.197v-32.721c1e-3 -5.072-4.125-9.198-9.197-9.198zm-4.494 6-23.956 15.434-23.956-15.434h47.912zm4.494 39.117h-56.9c-1.763 0-3.197-1.435-3.197-3.197v-32.552l29.796 19.16c0.04 0.025 0.083 0.042 0.124 0.065 0.043 0.024 0.087 0.047 0.131 0.069 0.231 0.119 0.469 0.215 0.712 0.278 0.025 7e-3 0.05 0.01 0.075 0.016 0.267 0.063 0.537 0.102 0.807 0.102h2e-3 4e-3c0.27 0 0.54-0.038 0.807-0.102 0.025-6e-3 0.05-9e-3 0.075-0.016 0.243-0.063 0.48-0.159 0.712-0.278 0.044-0.022 0.088-0.045 0.131-0.069 0.041-0.023 0.084-0.04 0.124-0.065l29.796-19.16v32.551c-1e-3 1.763-1.436 3.198-3.199 3.198z"
                  })
               }), "facebook" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#385899]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(1, 101, 225, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                  })
               }), "github" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-white",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 255, 255, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  })
               }), "instagram" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#F00075]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(225, 48, 108, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  })
               }), "leagueoflegends" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  width: 24,
                  height: 24,
                  className: l ? "drop-shadow-theme" : "",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(29, 161, 242, 0.5)"
                  },
                  children: (0, s.jsxs)("g", {
                     transform: "translate(0 512) scale(.1 -.1)",
                     children: [(0, s.jsx)("path", {
                        d: "m993 4473c2-5 103-171 225-369l222-361v-1182-1181l-240-368-240-367 1397-3c1196-2 1399 0 1411 12 8 8 173 223 367 478l352 463-963 3-964 2v1440 1440h-786c-432 0-783-3-781-7zm1247-1753v-1440h794 795l-121-160-122-160h-1008c-554 0-1008 2-1008 5 0 2 43 70 95 150l95 145v1299 1299l-90 146c-49 80-90 148-90 151s149 5 330 5h330v-1440z",
                        className: l ? "fill-theme" : "fill-[#ffc107]"
                     }), (0, s.jsx)("path", {
                        d: "m2880 3965c0-124 3-167 13-169 138-43 198-65 277-102 335-159 605-453 737-803 54-145 74-255 80-441 5-192-6-296-50-448l-24-82h173 173l10 38c41 160 46 207 46 447-1 268-11 341-81 553-156 478-535 883-1004 1073-107 43-295 99-333 99-15 0-17-18-17-165z",
                        className: l ? "fill-theme" : "fill-[#01579b]"
                     }), (0, s.jsx)("path", {
                        d: "m1067 3340c-106-165-193-381-239-591-20-92-22-132-22-349s2-257 22-349c46-210 132-422 243-596l44-70 3 508c1 279 1 735 0 1014l-3 508-48-75z",
                        className: l ? "fill-theme" : "fill-[#0091ea]"
                     })]
                  })
               }), "onlyfans" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "-20.62 .53 820.42 555.49",
                  width: 24,
                  height: 24,
                  className: l ? "drop-shadow-theme" : "",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(0, 175, 240, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "m266.82 0.53c35 0 69.65 6.91 101.98 20.34s61.71 33.11 86.45 57.93c24.75 24.81 44.37 54.27 57.77 86.7a267.92 267.92 0 0 1 20.29 102.27c0 108.09-64.93 205.53-164.51 246.89s-214.2 18.5-290.41-57.93-99.01-191.37-57.77-291.23c41.25-99.86 138.42-164.97 246.2-164.97zm0 347.4c10.5 0.01 20.9-2.05 30.61-6.07s18.52-9.93 25.95-17.38 13.31-16.29 17.33-26.02a80.365 80.365 0 0 0 6.06-30.7c0-32.43-19.48-61.66-49.35-74.07s-64.26-5.55-87.12 17.38-29.7 57.41-17.33 87.37 41.53 49.49 73.86 49.49z",
                     className: l ? "fill-theme" : "fill-[#00aeef]"
                  }), (0, s.jsx)("path", {
                     d: "M566.35 200.96c67.71 19.54 147.63 0 147.63 0-23.19 101.55-96.75 165.15-202.81 172.89a266.766 266.766 0 0 1-40.48 65.86 266.208 266.208 0 0 1-57.62 51.43c-21.6 14.24-45.15 25.25-69.92 32.68s-50.48 11.19-76.33 11.18l79.95-254.81C428.95 18.28 471.08.54 665.98.54H799.8c-22.38 98.88-99.54 174.41-233.44 200.42z",
                     className: l ? "fill-theme" : "fill-[#008ccf]"
                  })]
               }), "osu" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 290 290",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#FF66AA]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 102, 170, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "M70.1,128.1c-4.1,0-7.1,1.6-8.9,4.7s-2.8,7.6-2.8,13.4.9,10.3,2.8,13.4,4.8,4.7,8.9,4.7,7.2-1.6,9-4.7,2.7-7.6,2.7-13.4-.9-10.3-2.7-13.4S74.3,128.1,70.1,128.1Z"
                  }), (0, s.jsx)("path", {
                     className: "cls-1",
                     d: "M145,0A145,145,0,1,0,290,145,145,145,0,0,0,145,0Zm90.3,93.7a53,53,0,0,1,8.8.7L243,149.3a49.86,49.86,0,0,1-7.5.7,39.09,39.09,0,0,1-7.6-.7l-1.2-54.9A63.6,63.6,0,0,1,235.3,93.7ZM96.4,158.1a24.83,24.83,0,0,1-5.2,9.6,23.06,23.06,0,0,1-8.8,6.4,29.05,29.05,0,0,1-12.3,2.3,31,31,0,0,1-12.3-2.3,22.35,22.35,0,0,1-8.6-6.4,27.78,27.78,0,0,1-5.2-9.6,38.06,38.06,0,0,1-1.7-11.9,41.92,41.92,0,0,1,1.7-12,28.26,28.26,0,0,1,5.2-9.7,25.42,25.42,0,0,1,8.6-6.5,29.34,29.34,0,0,1,12.3-2.4A29.34,29.34,0,0,1,82.4,118a25,25,0,0,1,8.8,6.5,28.26,28.26,0,0,1,5.2,9.7,41.92,41.92,0,0,1,1.7,12A41.22,41.22,0,0,1,96.4,158.1Zm52.6,6.5a17.61,17.61,0,0,1-5,6.2,26.37,26.37,0,0,1-8,4.2,35,35,0,0,1-10.7,1.5c-1.8,0-3.4-.1-4.9-.2a29.69,29.69,0,0,1-4.3-.6c-1.4-.3-2.7-.6-4.1-1s-2.8-.9-4.4-1.5a26.12,26.12,0,0,1,1.1-6.1,38.9,38.9,0,0,1,2.2-6,46.35,46.35,0,0,0,7,2.2,31.06,31.06,0,0,0,6.9.7,21.36,21.36,0,0,0,3.4-.3,12.22,12.22,0,0,0,3.4-1,8.32,8.32,0,0,0,2.6-1.9,5.26,5.26,0,0,0-.5-7,15.77,15.77,0,0,0-4.5-2.1l-7.3-1.9h0a22.33,22.33,0,0,1-9.8-5.3c-2.4-2.4-3.5-5.9-3.5-10.6,0-5.7,2-10.1,6.1-13.4s9.6-4.8,16.7-4.8a49.1,49.1,0,0,1,17.2,3.2,35.79,35.79,0,0,1-1.1,6.1,31.62,31.62,0,0,1-2.1,5.5c-1.8-.7-3.8-1.4-5.9-2a25.83,25.83,0,0,0-6.8-.8,12.08,12.08,0,0,0-5.9,1.2,4.64,4.64,0,0,0-.6,7.3,16,16,0,0,0,4.3,1.9l6.4,1.9a29.4,29.4,0,0,1,5.7,2.2,15.57,15.57,0,0,1,4.3,3.2,13.66,13.66,0,0,1,2.8,4.7,19.89,19.89,0,0,1,1,6.8A18.08,18.08,0,0,1,149,164.6Zm63.1,8.3a86.1,86.1,0,0,1-9.5,2.4,65.16,65.16,0,0,1-23.3.3,22.61,22.61,0,0,1-9.3-3.8,18.66,18.66,0,0,1-6.3-8.5c-1.6-3.7-2.4-8.7-2.4-14.9V117.1h-.1a54,54,0,0,1,8-.7,44,44,0,0,1,8,.7v30.7a32.2,32.2,0,0,0,.7,7.6,10.84,10.84,0,0,0,2.2,4.7,8.18,8.18,0,0,0,3.8,2.5,17,17,0,0,0,5.3.7,27.52,27.52,0,0,0,7-.8V117.1a53.88,53.88,0,0,1,7.9-.7,44,44,0,0,1,8,.7Zm31.5,2.2a59.22,59.22,0,0,1-8.2.7,77.42,77.42,0,0,1-8.3-.7,58,58,0,0,1-.7-8.2,47.3,47.3,0,0,1,.7-8.3,58,58,0,0,1,8.2-.7,47.3,47.3,0,0,1,8.3.7,59.22,59.22,0,0,1,.7,8.2A46.51,46.51,0,0,1,243.6,175.1Z"
                  })]
               }), "paypal" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#3B7BBF]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(59, 123, 191, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"
                  })
               }), "kick" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 933 300",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#53FC18]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(83, 252, 24, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M0 0H100V66.6667H133.333V33.3333H166.667V0H266.667V100H233.333V133.333H200V166.667H233.333V200H266.667V300H166.667V266.667H133.333V233.333H100V300H0V0ZM666.667 0H766.667V66.6667H800V33.3333H833.333V0H933.333V100H900V133.333H866.667V166.667H900V200H933.333V300H833.333V266.667H800V233.333H766.667V300H666.667V0ZM300 0H400V300H300V0ZM533.333 0H466.667V33.3333H433.333V266.667H466.667V300H533.333H633.333V200H533.333V100H633.333V0H533.333Z"
                  })
               }), "kik" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 85 43",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#5DCD11]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(93, 205, 17, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "M80.1029046,20.3100775 C82.8069998,20.3100775 84.9983601,22.4985731 84.9983601,25.1984805 C84.9983601,27.8983878 82.8069998,30.0868835 80.1029046,30.0868835 C77.3990308,30.0868835 75.2078919,27.8983878 75.2078919,25.1984805 C75.2078919,22.4985731 77.3990308,20.3100775 80.1029046,20.3100775"
                  }), (0, s.jsx)("path", {
                     d: "M36.2570369,42.664411 L36.2499494,42.664411 C33.8021109,42.664411 31.8178379,40.6734154 31.8187238,38.218328 L31.8253683,16.0492295 C31.8262543,13.5863666 33.8231519,11.5938158 36.2782993,11.6058125 L36.2782993,11.6058125 C38.7172785,11.6175869 40.688041,13.6041394 40.688041,16.0503403 L40.688484,38.2194388 C40.688484,40.674304 38.7044325,42.664411 36.2570369,42.664411"
                  }), (0, s.jsx)("path", {
                     d: "M17.8427318,24.8147767 L23.4416198,19.2878866 C25.2526925,17.5001672 25.2130469,14.5587722 23.3545767,12.8205944 L23.3545767,12.8205944 C21.6088417,11.1877203 18.8912359,11.2210442 17.185811,12.896573 L8.88703592,21.0489469 L8.85270594,4.54669908 C8.8478333,2.14470794 6.98648377,0.0999496682 4.59335173,0.0110857712 C2.07618878,-0.0824434805 0.000221483761,1.93721074 0.000221483761,4.44761583 L0,38.2358911 C0,40.6763159 1.97231289,42.6546484 4.40531201,42.6546484 L4.40531201,42.6546484 C6.83808965,42.6546484 8.81040254,40.676538 8.81062403,38.2361132 L8.81084551,32.7194425 L11.0438448,30.6413603 L18.5917899,40.8324942 C20.0429515,42.7919431 22.7959947,43.2151574 24.7654283,41.7815606 L24.7654283,41.7815606 C26.7623258,40.3279694 27.1953266,37.5207589 25.72999,35.5299854 L17.8427318,24.8147767 Z"
                  }), (0, s.jsx)("path", {
                     d: "M64.1910452,24.8147767 L69.7899332,19.2878866 C71.6010059,17.5001672 71.5613603,14.5587722 69.7028901,12.8205944 L69.7028901,12.8205944 C67.9571551,11.1877203 65.2395493,11.2210442 63.5341244,12.896573 L55.2353493,21.0489469 L55.2010193,4.54669908 C55.1961467,2.14470794 53.3347972,0.0999496682 50.9416651,0.0110857712 C48.4245022,-0.0824434805 46.3485349,1.93721074 46.3485349,4.44761583 L46.3483134,38.2358911 C46.3483134,40.6763159 48.3206263,42.6546484 50.7536254,42.6546484 L50.7536254,42.6546484 C53.1866245,42.6546484 55.1587159,40.676538 55.1589374,38.2361132 L55.1591589,32.7194425 L57.3921582,30.6413603 L64.9401033,40.8324942 C66.3912649,42.7919431 69.144308,43.2151574 71.1137416,41.7815606 L71.1137416,41.7815606 C73.1106392,40.3279694 73.54364,37.5207589 72.0783034,35.5299854 L64.1910452,24.8147767 Z"
                  })]
               }), "pinterest" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#E60023]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(230, 0, 35, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
                     fillRule: "evenodd",
                     clipRule: "evenodd"
                  })
               }), "reddit" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#FF4500]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 86, 0, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                  })
               }), "snapchat" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 514 514",
                  width: 24,
                  height: 24,
                  className: l ? "drop-shadow-theme" : "",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 252, 0, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "M513.74,120.45a157.18,157.18,0,0,0-2.53-27.64c-2.12-11.13-5.11-22-10.44-32.05a111.08,111.08,0,0,0-21.41-28.57A106,106,0,0,0,432.64,5.53C416.43,1.2,399.9.24,383.24.26a.64.64,0,0,1-.1-.26H131V.26c-9.45.17-18.92.1-28.33,1.26C92.36,2.8,82.15,4.73,72.4,8.34A106.51,106.51,0,0,0,32.29,34.68,106,106,0,0,0,5.44,81.58C1.13,97.66.19,114.06.17,130.58L0,383.73H0C.31,395.18.4,406.67,2.33,418c2,12,5,23.73,10.53,34.63A110.88,110.88,0,0,0,43.78,490,100.52,100.52,0,0,0,74.72,506.8c16.52,5.33,33.57,7.37,50.87,7.47,10.79.07,21.57.34,32.37.29,78.39-.33,156.79.57,235.19-.48A184.64,184.64,0,0,0,424,510.82a104.49,104.49,0,0,0,51.67-25.13c17.24-15.38,28.88-34.21,34.13-56.92,3.43-14.85,4.29-29.92,4.44-45v-3C514.23,379.54,513.79,123.83,513.74,120.45ZM450,356.25a11.76,11.76,0,0,1-.95,4c-1.86,4.29-6.13,7.95-13.06,11.16-8.49,3.95-21.18,7.26-37.74,9.86-.83,1.6-1.73,5.71-2.29,8.28-.65,3-1.3,5.87-2.22,9a9.76,9.76,0,0,1-9.91,7.42h-.44a47.38,47.38,0,0,1-8.87-1.09,100.56,100.56,0,0,0-20.25-2.15A90.13,90.13,0,0,0,339.79,404c-9.45,1.57-17.59,7.32-27,14h0c-13.79,9.75-29.41,20.8-53.29,20.8-1,0-2,0-2.8-.06s-1.3.06-2,.06c-23.88,0-39.5-11-53.3-20.8-9.44-6.67-17.59-12.43-27-14a87.81,87.81,0,0,0-14.48-1.23A99.47,99.47,0,0,0,139.64,405a50.91,50.91,0,0,1-8.87,1.23c-6.72,0-9.34-4.11-10.35-7.56-.93-3.17-1.59-6.16-2.22-9.07-.6-2.74-1.47-6.73-2.3-8.32-16.55-2.6-29.24-5.91-37.73-9.86-7-3.23-11.22-6.89-13.07-11.2h0a11.88,11.88,0,0,1-.93-3.94,9,9,0,0,1,7.56-9.43A86.07,86.07,0,0,0,104.64,334a109.37,109.37,0,0,0,23.45-20.75,127.59,127.59,0,0,0,19.42-30.16c.06-.15.13-.29.2-.43,2.63-5.36,3.25-9.78,1.82-13.15-2.82-6.64-13.63-10.07-20.78-12.34-2.06-.65-4-1.27-5.64-1.91C116.87,252.77,112,250,108.74,247c-6-5.46-6-10.85-5.49-13.58.78-4.12,3.68-7.84,8.16-10.47A23.3,23.3,0,0,1,123,219.7a15.54,15.54,0,0,1,6.55,1.35c6.54,3.07,12.32,4.62,17.18,4.62a15.16,15.16,0,0,0,6.34-1.19c-.17-2.85-.35-5.78-.53-8.58v-.05c-1.65-26.17-3.69-58.74,4.93-78.07A105.38,105.38,0,0,1,180.94,104a98.11,98.11,0,0,1,28.14-18.66A111.69,111.69,0,0,1,253.2,76l6.63-.06h1a112.26,112.26,0,0,1,44.1,9.27,98.53,98.53,0,0,1,28.24,18.66,105.6,105.6,0,0,1,23.61,33.89c8.62,19.35,6.57,51.94,4.92,78.13l-.07,1.11c-.16,2.59-.32,5.07-.46,7.49a14.53,14.53,0,0,0,5.32,1.17c4.64-.22,10.05-1.77,16.08-4.59a18.73,18.73,0,0,1,7.81-1.59,22,22,0,0,1,8.4,1.61c7.53,2.69,12.27,8.19,12.39,14.39.05,2.56-.73,6.47-4.69,10.55-3.32,3.43-8.35,6.44-15.39,9.22-1.62.65-3.57,1.27-5.64,1.92-7.15,2.27-18,5.7-20.78,12.33-1.43,3.37-.82,7.79,1.82,13.15l.21.44c1,2.25,24.2,55.25,75.78,63.75A9,9,0,0,1,450,356.25Z",
                     className: l ? "fill-theme" : "fill-[#FFFC00]"
                  }), (0, s.jsx)("path", {
                     d: "M259.49,434.18c-1.07,0-2.08,0-2.86-.07-.61.05-1.25.07-1.89.07-22.43,0-37.43-10.6-50.67-20-9.49-6.7-18.44-13-28.93-14.77a92.63,92.63,0,0,0-15.22-1.29,103.81,103.81,0,0,0-21.1,2.39,46.7,46.7,0,0,1-8,1.15c-2.21,0-4.9-.49-6-4.31-.89-3-1.53-5.94-2.14-8.75-1.54-7-2.65-11.32-5.28-11.72-28.14-4.35-44.77-10.74-48.08-18.49a7.26,7.26,0,0,1-.59-2.44,4.52,4.52,0,0,1,3.78-4.71c22.35-3.68,42.22-15.49,59.06-35.12a132.51,132.51,0,0,0,20.15-31.32,2,2,0,0,1,.1-.21c3.25-6.59,3.89-12.28,1.93-16.92-3.63-8.55-15.64-12.36-23.58-14.88-2-.63-3.85-1.22-5.34-1.81-7-2.78-18.62-8.66-17.08-16.77,1.12-5.92,9-10,15.27-10a10.88,10.88,0,0,1,4.62.92c7.15,3.35,13.58,5,19.11,5,6.87,0,10.2-2.62,11-3.36-.2-3.67-.44-7.55-.68-11.22v0c-1.61-25.68-3.63-57.63,4.55-76,24.46-54.85,76.33-59.12,91.65-59.12l6.67-.06h.91c15.35,0,67.34,4.27,91.81,59.15,8.18,18.34,6.16,50.32,4.54,76l-.07,1.23c-.22,3.49-.43,6.79-.6,10,.75.7,3.79,3.1,10,3.34,5.27-.2,11.32-1.89,18-5a14.24,14.24,0,0,1,5.9-1.17,18,18,0,0,1,6.71,1.28l.11,0c5.66,2,9.37,6,9.45,10.24.07,3.93-2.86,9.81-17.23,15.48-1.47.59-3.35,1.18-5.33,1.81-7.95,2.52-19.95,6.33-23.58,14.88-2,4.63-1.32,10.32,1.93,16.91a2.14,2.14,0,0,0,.1.22c1,2.35,25.2,57.54,79.21,66.43a4.53,4.53,0,0,1,3.78,4.71,7.32,7.32,0,0,1-.6,2.47c-3.29,7.7-19.92,14.09-48.07,18.44-2.64.41-3.75,4.68-5.27,11.67-.63,2.88-1.27,5.71-2.15,8.69a5.26,5.26,0,0,1-5.57,4.16h-.44a45.52,45.52,0,0,1-8-1,105.26,105.26,0,0,0-21.11-2.24,94,94,0,0,0-15.23,1.29c-10.47,1.74-19.42,8.06-28.89,14.76-13.27,9.38-28.27,20-50.71,20",
                     className: l ? "fill-none" : "fill-white"
                  }), (0, s.jsx)("path", {
                     d: "M260.83,84.93c14.46,0,64.23,3.89,87.69,56.48,7.72,17.31,5.74,48.68,4.16,73.88-.25,4-.5,7.88-.7,11.58l-.08,1.59,1.06,1.18c.43.48,4.44,4.68,13.37,5h.3c5.9-.23,12.55-2.06,19.77-5.45a9.82,9.82,0,0,1,4-.74,13.34,13.34,0,0,1,5,1l.23.09c3.78,1.33,6.46,3.83,6.5,6.1,0,1.28-.93,5.89-14.36,11.19-1.31.52-3,1.07-5,1.7-8.74,2.77-21.93,7-26.38,17.43-2.5,5.89-1.81,12.85,2,20.68,1.58,3.69,26.52,59.86,82.63,69.11a2.53,2.53,0,0,1-.23.9c-1,2.24-7,10-44.61,15.78-5.89.9-7.33,7.5-9,15.17-.61,2.75-1.22,5.52-2.06,8.38-.26.87-.31.91-1.24.91h-.44a40.9,40.9,0,0,1-7.13-.92,110.54,110.54,0,0,0-22-2.32,97.18,97.18,0,0,0-16,1.36c-11.51,1.91-20.87,8.53-30.78,15.54-13.32,9.41-27.08,19.14-48.07,19.14-.92,0-1.82,0-2.71-.07h-.48c-.51,0-1,.07-1.56.07-21,0-34.76-9.73-48.07-19.14-9.91-7-19.28-13.63-30.79-15.54a97.08,97.08,0,0,0-16-1.36,107.83,107.83,0,0,0-22,2.48,45,45,0,0,1-7.14,1.06c-1.36,0-1.38-.08-1.67-1.06-.85-2.87-1.46-5.71-2.06-8.45-1.68-7.68-3.12-14.31-9-15.21-37.61-5.81-43.65-13.56-44.61-15.8a2.81,2.81,0,0,1-.23-.92c56.11-9.23,81-65.4,82.63-69.11,3.86-7.82,4.54-14.78,2-20.68-4.44-10.46-17.64-14.66-26.37-17.42-2-.64-3.73-1.19-5-1.71-11.34-4.48-14.83-9-14.31-11.72.6-3.16,6.07-6.36,10.84-6.36a6.67,6.67,0,0,1,2.71.49c7.74,3.64,14.81,5.48,21,5.48,9.75,0,14.09-4.54,14.55-5.06l1.06-1.18-.08-1.58c-.2-3.7-.44-7.58-.7-11.57-1.58-25.2-3.56-56.55,4.16-73.87C189.11,89,238.64,85,253.26,85l6.72-.07h.85m0-9h-1l-6.63.07a111.86,111.86,0,0,0-44.12,9.33A98.54,98.54,0,0,0,181,104a105.34,105.34,0,0,0-23.51,33.8c-8.62,19.33-6.57,51.9-4.93,78.08v0c.17,2.8.36,5.73.53,8.58a15.17,15.17,0,0,1-6.34,1.19c-4.87,0-10.65-1.55-17.19-4.62a15.44,15.44,0,0,0-6.54-1.34,23.21,23.21,0,0,0-11.56,3.23c-4.48,2.63-7.37,6.35-8.16,10.47-.52,2.73-.49,8.12,5.49,13.58,3.29,3,8.13,5.78,14.37,8.25,1.64.64,3.58,1.26,5.64,1.91,7.15,2.27,18,5.71,20.78,12.34,1.43,3.37.82,7.8-1.82,13.15-.07.14-.14.29-.2.44a127.57,127.57,0,0,1-19.42,30.15A109.34,109.34,0,0,1,104.68,334a86.23,86.23,0,0,1-32.92,12.86,9,9,0,0,0-7.56,9.42,12,12,0,0,0,.93,3.94l0,0c1.84,4.31,6.11,8,13.06,11.2,8.49,4,21.18,7.26,37.73,9.86.84,1.59,1.7,5.59,2.31,8.32.62,2.91,1.28,5.9,2.22,9.08,1,3.44,3.62,7.55,10.34,7.55a50.6,50.6,0,0,0,8.88-1.23,99.46,99.46,0,0,1,20.24-2.31,89.22,89.22,0,0,1,14.48,1.23c9.46,1.57,17.61,7.33,27,14,13.8,9.76,29.43,20.8,53.3,20.8q1,0,1.95-.06c.79,0,1.77.06,2.8.06,23.88,0,39.5-11.05,53.29-20.8l0,0c9.43-6.66,17.57-12.41,27-14a89.13,89.13,0,0,1,14.48-1.23,100.81,100.81,0,0,1,20.24,2.15,47.62,47.62,0,0,0,8.87,1.09h.45a9.77,9.77,0,0,0,9.91-7.43c.91-3.11,1.57-6,2.21-9,.56-2.57,1.46-6.68,2.3-8.28,16.55-2.6,29.25-5.91,37.74-9.86,6.93-3.21,11.19-6.87,13-11.16a11.64,11.64,0,0,0,1-4,9,9,0,0,0-7.56-9.42c-51.58-8.51-74.82-61.51-75.78-63.76a3.55,3.55,0,0,0-.21-.44c-2.63-5.35-3.24-9.78-1.81-13.15,2.81-6.63,13.62-10.06,20.77-12.33,2.07-.65,4-1.27,5.64-1.91,7-2.78,12.07-5.8,15.39-9.23,4-4.08,4.74-8,4.69-10.55-.12-6.19-4.86-11.7-12.39-14.39a22,22,0,0,0-8.4-1.61,18.83,18.83,0,0,0-7.8,1.59c-6,2.83-11.45,4.37-16.09,4.59a14.71,14.71,0,0,1-5.32-1.17c.14-2.42.3-4.9.46-7.49l.07-1.11c1.65-26.19,3.71-58.78-4.92-78.13a105.3,105.3,0,0,0-23.61-33.89,98.21,98.21,0,0,0-28.24-18.66,112.24,112.24,0,0,0-44.1-9.27",
                     className: l ? "fill-none" : "fill-black"
                  })]
               }), "soundcloud" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#FF6600]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 136, 0, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
                  })
               }), "spotify" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#00DE80]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(30, 215, 96, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                  })
               }), "steam" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-white",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 255, 255, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M24 12c0 6.627-5.373 12-12 12-5.782 0-10.608-4.091-11.744-9.537l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091 0-2.26-1.834-4.093-4.093-4.093-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51l-6.294-2.646c.708-5.953 5.765-10.572 11.908-10.572 6.627 0 12 5.373 12 12zm-16.577 5.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102s-2.102.943-2.102 2.102c.001 1.159.943 2.101 2.102 2.101z"
                  })
               }), "telegram" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#32A7E3]",
                  style: l ? {
                     fillRule: "evenodd",
                     clipRule: "evenodd",
                     strokeLinejoin: "round",
                     strokeMiterlimit: 1.41421
                  } : {
                     fillRule: "evenodd",
                     clipRule: "evenodd",
                     strokeLinejoin: "round",
                     strokeMiterlimit: 1.41421,
                     filter: "drop-shadow(0 0 3.5px rgba(0, 136, 204, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"
                  })
               }), "tiktok" === t && (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 472 534",
                  width: 24,
                  height: 24,
                  className: l ? "drop-shadow-theme" : "fill-none",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(0, 242, 234, 0.5)"
                  },
                  children: [(0, s.jsx)("path", {
                     d: "M183.965 210.373V189.591C176.751 188.448 169.464 187.822 162.161 187.717C91.4522 187.567 28.849 233.388 7.6184 300.834C-13.6156 368.278 11.4478 441.695 69.4891 482.08C26.0126 435.549 13.94 367.81 38.6662 309.125C63.3906 250.44 120.297 211.762 183.965 210.373Z",
                     className: l ? "fill-theme" : "fill-[#25F4EE]"
                  }), (0, s.jsx)("path", {
                     d: "M187.883 445.796C227.416 445.743 259.914 414.596 261.644 375.101V22.649H326.036C324.722 15.2845 324.095 7.8138 324.162 0.333252H236.092V352.444C234.627 392.141 202.055 423.585 162.331 423.65C150.46 423.549 138.783 420.63 128.261 415.133C135.08 424.58 144.035 432.282 154.397 437.611C164.758 442.94 176.232 445.744 187.883 445.796ZM446.303 142.234V122.644C422.605 122.652 399.433 115.659 379.696 102.543C396.998 122.656 420.379 136.589 446.303 142.234Z",
                     className: l ? "fill-theme" : "fill-[#25F4EE]"
                  }), (0, s.jsx)("path", {
                     d: "M379.696 102.543C360.254 80.4029 349.536 51.9431 349.544 22.4786H326.036C329.072 38.7693 335.396 54.2703 344.622 68.0358C353.848 81.8012 365.782 93.5424 379.696 102.543ZM162.161 275.787C128.234 275.961 98.7806 299.204 90.7231 332.159C82.6656 365.115 98.0719 399.324 128.091 415.133C120.114 404.12 115.336 391.115 114.287 377.557C113.237 363.999 115.956 350.415 122.143 338.305C128.33 326.195 137.745 316.031 149.346 308.937C160.948 301.842 174.284 298.093 187.883 298.103C195.276 298.195 202.618 299.343 209.688 301.51V211.907C202.469 210.825 195.183 210.256 187.883 210.203H183.965V278.343C176.859 276.437 169.514 275.577 162.161 275.787Z",
                     className: l ? "fill-theme" : "fill-[#FE2C55]"
                  }), (0, s.jsx)("path", {
                     d: "M446.302 142.234V210.373C402.433 210.288 359.702 196.402 324.162 170.682V349.719C323.975 439.057 251.498 511.38 162.161 511.38C128.983 511.439 96.604 501.202 69.4908 482.08C114.739 530.745 185.158 546.765 247.006 522.463C308.853 498.159 349.529 438.486 349.544 372.035V193.509C385.203 219.061 427.987 232.766 471.855 232.689V144.959C463.266 144.932 454.704 144.019 446.302 142.234Z",
                     className: l ? "fill-theme" : "fill-[#FE2C55]"
                  }), (0, s.jsx)("path", {
                     d: "M324.162 349.719V170.682C359.81 196.255 402.601 209.962 446.473 209.862V141.723C420.554 136.25 397.117 122.499 379.696 102.543C365.782 93.5424 353.848 81.8012 344.622 68.0358C335.396 54.2703 329.072 38.7693 326.036 22.4786H261.644V375.101C260.356 406.561 239.284 433.752 209.143 442.852C179 451.952 146.403 440.965 127.92 415.474C97.9016 399.665 82.4952 365.456 90.5527 332.5C98.6102 299.544 128.064 276.302 161.99 276.128C169.386 276.194 176.732 277.342 183.795 279.535V211.396C119.769 212.481 62.4332 251.291 37.6373 310.329C12.843 369.367 25.2699 437.477 69.3204 483.954C96.7011 502.445 129.127 512.024 162.161 511.38C251.498 511.38 323.975 439.057 324.162 349.719Z",
                     className: l ? "fill-none" : "fill-black"
                  })]
               }), "tumblr" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#2D4157]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(52, 82, 111, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.105 18.739c-.524.691-2.29 1.261-3.889 1.261-3.979 0-6.006-1.466-6.006-4.573v-4.104h-1.933l-.067-.067v-3.16l.045-.064.178-.059c1.597-.534 2.624-1.432 2.851-3.284.055-.447.431-.689.757-.689h4.767l.066.067v3.211l.066.067h2.535l.068.067v3.844l-.068.067h-2.545l-.067.067v3.81c.002.103.006.414.109.414h2.182l.064.046.992 2.941-.105.138zm-1.309-2.278l.664 1.967-.016.07c-.5.48-1.703.837-2.686.854l-.111.001c-3.232 0-3.788-2.468-3.788-3.926v-4.692l-.066-.067h-1.854l-.067-.067-.016-2.041.042-.062c1.67-.65 2.604-1.73 2.849-3.729.014-.111.105-.114.106-.114h2.298l.067.067v3.211l.068.067h2.535l.066.067v2.534l-.066.067h-2.547l-.064.067v4.47c.016.959.477 1.445 1.377 1.445.362 0 .744-.084 1.123-.229l.086.04z"
                  })
               }), "twitch" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#9C4FFF]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(100, 65, 165, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                  })
               }), "twitter" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#1DA1F2]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(29, 161, 242, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  })
               }), "valorant" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 300 247",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#fa4454]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(250, 68, 84, 0.5)"
                  },
                  children: (0, s.jsxs)("g", {
                     transform: "translate(0 247) scale(.1 -.1)",
                     children: [(0, s.jsx)("path", {
                        d: "m10 1863v-611l466-588c256-324 483-606 505-626l38-38h470c261 0 472 4 475 9 5 8-1869 2378-1930 2441l-24 25v-612z"
                     }), (0, s.jsx)("path", {
                        d: "m2958 2458c-27-22-1260-1580-1266-1600-4-17 14-18 475-18 400 0 482 2 499 14 11 8 88 99 170 203l149 188 3 604c1 333-1 608-6 613-4 4-15 2-24-4z"
                     })]
                  })
               }), "website" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-white",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(255, 255, 255, 0.5)"
                  },
                  children: (0, s.jsx)("g", {
                     transform: "translate(0 512) scale(.1 -.1)",
                     children: (0, s.jsx)("path", {
                        d: "m2321 5109c-398-36-836-191-1173-416-626-418-1021-1053-1130-1818-20-140-17-504 6-660 39-278 121-541 247-794 331-667 931-1152 1657-1340 509-132 1067-98 1560 94 349 137 639 330 907 606 205 210 340 404 465 663 119 246 190 474 232 741 31 200 31 550 0 750-43 273-114 500-237 750-123 251-262 448-459 652-210 218-417 370-691 509-431 217-898 306-1384 263zm-358-546c-92-112-213-286-313-453-62-103-221-413-234-457l-7-23h-345-345l12 23c31 59 140 207 224 305 232 270 552 488 900 612 148 53 157 52 108-7zm1289 11c465-160 878-492 1127-906l23-38h-346-345l-6 23c-4 12-44 96-90 187-122 246-246 445-406 657-44 57-79 105-79 108 0 10 19 5 122-31zm-584-90c157-179 303-380 425-580 60-100 147-258 147-268 0-3-306-6-680-6s-680 3-680 6c0 21 163 299 252 433 119 176 404 531 427 531 5 0 54-52 109-116zm-1424-1341c-56-237-81-513-64-731 10-143 36-317 64-434l13-58h-367-368l-26 108c-47 192-58 271-63 477-6 230 7 357 57 565l32 130h368 367l-13-57zm2192 0c34-116 64-291 76-435 18-228-11-508-76-730l-17-58h-859-858l-16 53c-48 157-86 419-86 587s38 430 86 588l16 52h858 859l17-57zm1192-70c83-338 83-688 0-1025l-31-128h-368-367l15 63c89 377 89 777 0 1155l-15 62h367 368l31-127zm-3212-1605c12-40 158-330 212-421 106-179 239-373 335-489 26-32 34-48 24-48-32 0-227 74-342 129-272 130-504 306-690 523-84 98-193 246-224 306l-12 22h345 345l7-22zm1824 14c0-14-151-275-227-391-81-125-195-279-281-381-97-115-165-190-172-190-23 0-311 357-428 531-89 134-252 412-252 433 0 3 306 6 680 6s680-4 680-8zm1139-29c-211-350-527-634-911-818-116-55-325-132-334-122-3 3 30 52 74 109 161 213 285 412 407 658 46 91 86 175 90 188l6 22h345 346l-23-37z"
                     })
                  })
               }), "youtube" === t && (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: l ? "fill-theme drop-shadow-theme" : "fill-[#FF0000]",
                  style: l ? {} : {
                     filter: "drop-shadow(0 0 3.5px rgba(196, 48, 43, 0.5)"
                  },
                  children: (0, s.jsx)("path", {
                     d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  })
               })]
            })
         }
         var Z = l(1664),
            V = l.n(Z);

         function k(e) {
            let {
               url: t,
               classes: l,
               styles: i,
               children: r
            } = e;
            return t ? (0, s.jsx)(V(), {
               href: "redirect?url=".concat(encodeURIComponent(t)),
               draggable: !1,
               className: l,
               style: i,
               children: r
            }) : (0, s.jsx)("div", {
               className: l,
               style: i,
               children: r
            })
         }

         function Y(e) {
            let {
               options: t,
               links: l,
               theme: i
            } = e;
            return (0, s.jsx)("div", {
               className: "flex flex-wrap ".concat((null == t ? void 0 : t.simple) ? "gap-6" : "gap-4"),
               children: l.map((e, l) => {
                  let {
                     name: r,
                     title: n,
                     url: a
                  } = e;
                  return (0, s.jsx)(k, {
                     url: a || null,
                     classes: (null == t ? void 0 : t.simple) ? "" : "bg-style inline-block flex-[100%] sm:flex-[45%] w-full break-all p-3 ".concat(a ? "button" : "cursor-default"),
                     styles: a ? {
                        willChange: "opacity, transform"
                     } : {},
                     children: (null == t ? void 0 : t.simple) ? (0, s.jsx)(N, {
                        text: n || r,
                        external: !!a,
                        children: (0, s.jsx)(L, {
                           name: r,
                           theme: i
                        })
                     }) : (0, s.jsxs)("div", {
                        className: "flex items-center gap-5",
                        children: [(0, s.jsx)("span", {
                           className: (null == t ? void 0 : t.simple) ? "" : "flex items-center justify-center rounded-xl bg-secondary/50 p-3",
                           children: (0, s.jsx)(L, {
                              name: r,
                              theme: i
                           })
                        }), (0, s.jsxs)("div", {
                           className: "flex w-full items-center justify-between",
                           children: [n ? (0, s.jsx)("p", {
                              className: "w-full text-left text-sm",
                              children: n
                           }) : (0, s.jsx)("p", {}), a && (0, s.jsx)("span", {
                              className: "mr-3",
                              children: (0, s.jsx)(M, {})
                           })]
                        })]
                     })
                  }, l)
               })
            })
         }

         function G(e) {
            let {
               options: t,
               url: l
            } = e;
            return (0, s.jsx)("iframe", {
               className: "".concat(!(null == t ? void 0 : t.simple) && "bg-style p-3", " w-full"),
               src: l,
               height: (null == t ? void 0 : t.simple) ? 80 : 101,
               allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            })
         }

         function D() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M18 1h-11.917l-6.083 7 12 15 12-14.917-6-7.083zm-10.498 9.576c-.366-1.197-1.303-2.134-2.501-2.5 1.196-.366 2.135-1.303 2.499-2.5.367 1.197 1.305 2.135 2.5 2.5-1.195.366-2.133 1.303-2.498 2.5zm3.499 4.5c-.293-.958-1.042-1.708-2.001-2 .957-.292 1.708-1.042 1.999-2 .294.958 1.043 1.708 2 2-.957.293-1.706 1.043-1.998 2zm4.499-3.576c-.511-1.676-1.823-2.988-3.5-3.499 1.677-.512 2.989-1.824 3.5-3.501.512 1.677 1.824 2.989 3.5 3.501-1.676.511-2.988 1.823-3.5 3.499z"
               })
            })
         }

         function F() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 14,
               height: 14,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"
               })
            })
         }

         function U() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 448 512",
               width: 12,
               height: 12,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"
               })
            })
         }

         function J() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 384 512",
               width: 11,
               height: 11,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
               })
            })
         }
         var O = l(9332);
         let Q = {
            headline: {
               regex: /\[h\]([\s\S]*?)\[\/h\]/g,
               replacement: '<span class="text-2xl font-medium">$1</span>',
               remove: "$1"
            },
            break: {
               regex: /\[br\]/g,
               replacement: "<br />",
               remove: ""
            },
            "horizontal-rule": {
               regex: /\[hr\]/g,
               replacement: "<hr />",
               remove: ""
            },
            theme: {
               regex: /\[theme\]([\s\S]*?)\[\/theme\]/g,
               replacement: '<span class="theme">$1</span>',
               remove: "$1"
            },
            bold: {
               regex: /\[b\]([\s\S]*?)\[\/b\]/g,
               replacement: "<b>$1</b>",
               remove: "$1"
            },
            italic: {
               regex: /\[em\]([\s\S]*?)\[\/em\]/g,
               replacement: "<em>$1</em>",
               remove: "$1"
            },
            underline: {
               regex: /\[u\]([\s\S]*?)\[\/u\]/g,
               replacement: "<u>$1</u>",
               remove: "$1"
            },
            "strike-through": {
               regex: /\[del\]([\s\S]*?)\[\/del\]/g,
               replacement: "<del>$1</del>",
               remove: "$1"
            },
            quote: {
               regex: /\[quote\]([\s\S]*?)\[\/quote\]/g,
               replacement: "<quote>$1</quote>",
               remove: "$1"
            },
            code: {
               regex: /\[code\]([\s\S]*?)\[\/code\]/g,
               replacement: "<pre>$1</pre>",
               remove: "$1"
            },
            url: {
               regex: /\[url\](https?:\/\/.*?)\[\/url\]/g,
               replacement: '<a href="$1" target="_blank" rel="noopener noreferrer" draggable="false">$1</a>',
               remove: "$1"
            },
            img: {
               regex: /\[img\](https?:\/\/.*?\.(?:jpg|jpeg|gif|png|webp|bmp|avif))\[\/img\]/g,
               replacement: '<img src="$1">',
               remove: ""
            },
            list: {
               regex: /\[list\]([\s\S]*?)\[\/list\]/g,
               replacement: "<list>$1</list>",
               remove: "$1"
            },
            item: {
               regex: /\[item\]([\s\S]*?)\[\/item\]/g,
               replacement: "<li>$1</li>",
               remove: "$1"
            },
            center: {
               regex: /\[center\]([\s\S]*?)\[\/center\]/g,
               replacement: "<center>$1</center>",
               remove: "$1"
            }
         };

         function T() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"
               })
            })
         }

         function W() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
               })
            })
         }

         function P() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 20,
               height: 20,
               clipRule: "evenodd",
               fillRule: "evenodd",
               strokeLinejoin: "round",
               strokeMiterlimit: "2",
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z",
                  fillRule: "nonzero"
               })
            })
         }

         function X() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M13.664 5.789c3.015-.714 7.986.497 10.336 2.568-1.74-4.282-6.446-7.357-11.993-7.357-4.904 0-9.084 3.078-9.863 7.265-.794 4.258 2.152 8.84 8.208 9.923-3.019.714-8.005-.5-10.352-2.581 1.729 4.3 6.445 7.393 12.007 7.393l.308-.003c4.828-.099 8.882-3.169 9.633-7.294.778-4.275-2.194-8.827-8.284-9.914zm1 7.643c-.759.771-2.571.755-4.042-.036-1.475-.792-2.046-2.058-1.286-2.829.759-.771 2.568-.755 4.043.037 1.469.792 2.046 2.057 1.285 2.828z"
               })
            })
         }

         function q(e) {
            let {
               id: t,
               avatar: l,
               name: i,
               description: r,
               badges: a,
               role: c,
               views: o,
               options: d,
               location: h
            } = e, m = (0, O.usePathname)(), u = (null == d ? void 0 : d.left) || (null == d ? void 0 : d.simple) ? "text-left" : "text-center", g = (null == d ? void 0 : d.left) || (null == d ? void 0 : d.simple) ? "justify-start" : "justify-center", p = (null == d ? void 0 : d.simple) ? "h-28 w-28" : "h-32 w-32";
            return (0, s.jsxs)("div", {
               className: "".concat(!(null == d ? void 0 : d.simple) && "bg-style p-10", " space-y-8 ").concat(u),
               children: [(0, s.jsxs)("div", {
                  className: "flex ".concat((null == d ? void 0 : d.simple) ? "items-center gap-6" : "flex-col gap-8"),
                  children: [(0, s.jsx)(n(), {
                     className: "".concat(p, " rounded-full ").concat((null == d ? void 0 : d.left) || !(null == d ? void 0 : d.simple) && "mx-auto"),
                     src: l || "".concat("https://assets.fkcri.me", "/assets/images/logo.png"),
                     width: 104,
                     height: 104,
                     alt: "Avatar",
                     draggable: !1,
                     quality: 75
                  }), (0, s.jsxs)("div", {
                     children: [(0, s.jsxs)("div", {
                        className: "flex ".concat(g, " ").concat((null == d ? void 0 : d.simple) ? "flex-col gap-0 sm:flex-row sm:gap-3" : "gap-3", " items-center"),
                        children: [(0, s.jsx)("h1", {
                           className: "".concat((null == d ? void 0 : d.simple) ? "text-3xl" : "text-2xl", " font-semibold text-white"),
                           children: i
                        }), (0, s.jsxs)("div", {
                           className: "flex flex-wrap gap-2 ".concat((null == d ? void 0 : d.simple) && "w-full sm:w-auto"),
                           children: ["Admin" === c && (0, s.jsx)(N, {
                              text: "Admin",
                              children: (0, s.jsx)(X, {})
                           }), ["Admin", "Lifetime"].includes(c) && (0, s.jsx)(N, {
                              text: "Lifetime",
                              children: (0, s.jsx)(D, {})
                           }), "Premium" === c && (0, s.jsx)(N, {
                              text: "Premium",
                              children: (0, s.jsx)(P, {})
                           }), t < 100 && (0, s.jsx)(N, {
                              text: "Early User",
                              children: (0, s.jsx)(W, {})
                           }), (0, s.jsx)(N, {
                              text: "Verified",
                              children: (0, s.jsx)(T, {})
                           })]
                        })]
                     }), (0, s.jsx)("p", {
                        children: m.replace("/", "@")
                     })]
                  })]
               }), a && a.length > 0 && (0, s.jsx)("div", {
                  className: "flex flex-wrap gap-2 ".concat(g),
                  children: a.map((e, t) => (0, s.jsx)("span", {
                     className: "rounded-full border-1 border-theme px-3 py-1 text-sm text-theme",
                     children: e
                  }, t))
               }), r && (0, s.jsx)("div", {
                  className: "whitespace-pre-wrap break-all leading-tight",
                  dangerouslySetInnerHTML: {
                     __html: function (e) {
                        let t = e;
                        for (let e in Q)
                           if (Q.hasOwnProperty(e)) {
                              let {
                                 regex: l,
                                 replacement: s
                              } = Q[e];
                              t = t.replace(l, s)
                           } return t
                     }(r)
                  }
               }), (!!o || !!(null == d ? void 0 : d.id) || !!h) && (0, s.jsxs)("div", {
                  className: "flex ".concat(g, " gap-6"),
                  children: [!!o && (0, s.jsxs)("span", {
                     className: "flex items-center gap-3 text-sm",
                     children: [(0, s.jsx)(F, {}), o]
                  }), !!(null == d ? void 0 : d.id) && (0, s.jsxs)("span", {
                     className: "flex items-center gap-3 text-sm",
                     children: [(0, s.jsx)(U, {}), t]
                  }), !!h && (0, s.jsxs)("span", {
                     className: "flex items-center gap-3 text-sm",
                     children: [(0, s.jsx)(J, {}), h]
                  })]
               })]
            })
         }
         var K = l(9008),
            _ = l.n(K),
            $ = l(1163);

         function ee(e) {
            let {
               avatar: t,
               name: l,
               description: i,
               theme: r
            } = e, n = (0, $.useRouter)(), a = "".concat(l, " (@").concat(n.query.slug, ") — ").concat("abused.lol"), c = i ? function (e) {
               let t = e;
               for (let e in Q)
                  if (Q.hasOwnProperty(e)) {
                     let {
                        regex: l,
                        remove: s
                     } = Q[e];
                     t = t.replace(l, s)
                  } return t.replace(/^\s*\n/gm, "")
            }(i) : "";
            return (0, s.jsxs)(_(), {
               children: [(0, s.jsx)("title", {
                  children: a
               }), i && (0, s.jsx)("meta", {
                  name: "description",
                  content: c
               }), (0, s.jsx)("meta", {
                  name: "theme-color",
                  content: r
               }), (0, s.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1"
               }), (0, s.jsx)("meta", {
                  name: "copyright",
                  content: "fakecrime.bio"
               }), (0, s.jsx)("link", {
                  rel: "canonical",
                  href: "".concat("https://fakecrime.bio", "/").concat(n.query.slug)
               }), (0, s.jsx)("meta", {
                  property: "og:title",
                  content: a
               }), i && (0, s.jsx)("meta", {
                  property: "og:description",
                  content: c
               }), (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "https://fakecrime.bio"
               }), t && (0, s.jsx)("meta", {
                  property: "og:image",
                  content: t
               }), (0, s.jsx)("meta", {
                  property: "og:type",
                  content: "Biography"
               }), (0, s.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary"
               }), (0, s.jsx)("meta", {
                  name: "twitter:title",
                  content: a
               }), i && (0, s.jsx)("meta", {
                  name: "twitter:description",
                  content: c
               }), t && (0, s.jsx)("meta", {
                  name: "twitter:image",
                  content: t
               }), (0, s.jsx)("link", {
                  rel: "shortcut icon",
                  href: t || "".concat("https://assets.fkcri.me", "/favicon.ico")
               }), (0, s.jsx)("link", {
                  rel: "preconnect",
                  href: "https://assets.fkcri.me"
               })]
            })
         }

         function et() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme",
               children: (0, s.jsx)("path", {
                  d: "M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-15.44 4.912c-.572-.401-1.07-.899-1.471-1.471l-3.691 1.641c.859 1.45 2.071 2.662 3.521 3.521l1.641-3.691zm7.44-4.912c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm4.603-5.08c-.859-1.451-2.071-2.663-3.522-3.522l-1.641 3.691c.572.401 1.07.899 1.472 1.471l3.691-1.64z"
               })
            })
         }

         function el() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 448 512",
               width: 13,
               height: 13,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
               })
            })
         }

         function es() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 448 512",
               width: 13,
               height: 13,
               className: "fill-theme drop-shadow-theme",
               children: (0, s.jsx)("path", {
                  d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
               })
            })
         }
         let ei = (0, i.createContext)({
            isPlaying: !1,
            setIsPlaying: e => {}
         });

         function er(e) {
            let {
               options: t,
               name: l,
               cover: r,
               audio: a
            } = e, {
               isPlaying: c,
               setIsPlaying: o
            } = (0, i.useContext)(ei), [h, m] = (0, i.useState)(0), [u, g] = (0, i.useState)(0), [p, x] = (0, i.useState)(.25), [w, f] = (0, i.useState)(!1), v = (0, i.useRef)(null), j = (0, i.useRef)(null);
            return (0, i.useEffect)(() => {
               let e = v.current,
                  t = () => g((null == e ? void 0 : e.duration) || 0),
                  l = () => {
                     o(!1), m(0), e && (e.currentTime = 0)
                  };
               if (g((null == e ? void 0 : e.duration) || 0), e) return e.addEventListener("loadedmetadata", t), e.addEventListener("ended", l), () => {
                  e.removeEventListener("loadedmetadata", t), e.removeEventListener("ended", l)
               }
            }, [o]), (0, i.useEffect)(() => {
               if (c) {
                  let e = v.current;
                  e && (e.volume = .25), null == e || e.play()
               }
            }, [c]), (0, s.jsxs)("div", {
               className: "".concat(!(null == t ? void 0 : t.simple) && "bg-style p-3", " flex items-center justify-center gap-6"),
               children: [(0, s.jsxs)("div", {
                  className: "relative flex aspect-square h-24 items-center justify-center",
                  children: [(0, s.jsx)(n(), {
                     className: "aspect-square h-24 w-24 rounded-xl border-1 border-theme p-1",
                     src: r,
                     width: 78,
                     height: 78,
                     alt: "Cover",
                     draggable: !1,
                     loading: "lazy",
                     decoding: "async",
                     quality: 50
                  }), (0, s.jsx)("span", {
                     className: "absolute bottom-0 right-0 -m-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-main bg-main text-xl",
                     children: (0, s.jsx)(et, {})
                  })]
               }), (0, s.jsxs)("div", {
                  className: "!mr-3 w-full",
                  children: [(0, s.jsx)("h2", {
                     className: "mb-3 text-lg leading-tight text-white",
                     children: l
                  }), (0, s.jsxs)("div", {
                     className: "flex w-full select-none items-center gap-4",
                     children: [(0, s.jsx)("button", {
                        className: "flex w-5 justify-center",
                        onClick: () => {
                           let e = v.current;
                           e && (e.volume = .25), c ? null == e || e.pause() : null == e || e.play(), o(!c)
                        },
                        children: c ? (0, s.jsx)(el, {}) : (0, s.jsx)(es, {})
                     }), (0, s.jsxs)("div", {
                        className: "flex w-full flex-1 items-center justify-between gap-2",
                        children: [(0, s.jsx)("span", {
                           className: "font-mono",
                           children: d(h)
                        }), (0, s.jsx)("div", {
                           className: "relative flex h-2.5 basis-full cursor-pointer overflow-hidden rounded-md bg-zinc-800",
                           ref: j,
                           onClick: e => {
                              if (v.current && j.current) {
                                 let t = j.current.getBoundingClientRect(),
                                    l = t.width,
                                    s = e.clientX - t.left,
                                    i = s / l * u;
                                 i >= 0 && i <= u && (v.current.currentTime = i, m(i))
                              }
                           },
                           onMouseDown: () => f(!0),
                           onMouseMove: e => {
                              if (w && v.current && j.current) {
                                 let t = j.current.getBoundingClientRect(),
                                    l = e.clientX - t.left,
                                    s = l / t.width * u;
                                 v.current.currentTime = s, m(s)
                              }
                           },
                           onMouseUp: () => f(!1),
                           children: (0, s.jsx)("div", {
                              className: "h-2.5 bg-theme",
                              style: {
                                 flexBasis: "".concat(h / u * 100, "%")
                              }
                           })
                        }), (0, s.jsx)("span", {
                           className: "font-mono",
                           children: d(u)
                        })]
                     }), (0, s.jsx)("input", {
                        type: "range",
                        min: 0,
                        max: 1,
                        step: .01,
                        value: p,
                        onChange: e => {
                           let t = parseFloat(e.target.value);
                           v.current && (v.current.volume = t), x(t)
                        },
                        className: "h-2.5 !w-10 cursor-pointer appearance-none rounded-full bg-zinc-800 sm:!w-20"
                     }), (0, s.jsx)("audio", {
                        ref: v,
                        src: a,
                        onTimeUpdate: () => v.current && m(v.current.currentTime)
                     })]
                  })]
               })]
            })
         }

         function en() {
            return (0, s.jsx)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               viewBox: "0 0 24 24",
               width: 16,
               height: 16,
               className: "fill-theme",
               children: (0, s.jsx)("path", {
                  d: "M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z"
               })
            })
         }

         function ea() {
            return (0, s.jsx)("div", {
               className: "fixed bottom-0 right-0 m-5 hidden sm:block",
               children: (0, s.jsx)(V(), {
                  href: "",
                  draggable: !1,
                  children: (0, s.jsxs)("div", {
                     children: [(0, s.jsx)(en, {}), (0, s.jsx)("span", {
                        className: "text-sm font-semibold text-theme",
                     })]
                  })
               })
            })
         }
         var ec = !0;
         let eo = "experimental-edge";

         function ed(e) {
            var t, l, r;
            let {
               portfolio: n,
               discord: a
            } = e, c = {
               fontFamily: n.font,
               "--theme-color": n.theme
            }, o = n.theme.replace("#", ""), [d, h] = (0, i.useState)(!0), [m, u] = (0, i.useState)(!1);
            return (0, s.jsx)(ei.Provider, {
               value: {
                  isPlaying: m,
                  setIsPlaying: u
               },
               children: (0, s.jsxs)("main", {
                  style: c,
                  children: [n.track && n.track.name && n.track.cover && n.track.audio && d && (0, s.jsx)("div", {
                     className: "fixed z-50 flex h-full w-full cursor-pointer select-none items-center justify-center bg-black/50 backdrop-blur-lg",
                     onClick: () => {
                        u(!0), h(!1)
                     },
                     children: (0, s.jsx)("p", {
                        className: "text-lg text-white",
                        children: "Click"
                     })
                  }), n && (0, s.jsx)(ee, {
                     ...n
                  }), !n.background && (0, s.jsx)("div", {
                     className: "fixed h-full w-full bg-main bg-theme-background-mobile bg-cover bg-center bg-no-repeat sm:bg-theme-background",
                     style: {
                        "--theme-background": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080' fill='%23".concat(o, "'%0A%3E%3Cpath d='M0,263.1V526.3l5.3-4.9c38.6-36.2,88.2-64.4,133.9-75.9,32.9-8.4,57.8-9.1,106.1-3.3,14.2,1.8,23.7,2.2,43.2,2.3,22.4,0,26.1-.2,35.9-2.3,46.9-10.1,79-35.1,108.8-84.9,4.2-7,15.1-26.6,24.1-43.4,36.6-68.1,47.8-82.6,96.7-126,30.4-26.9,44.2-41.6,56.3-59.7,22.2-33.3,32.2-78.7,27.1-122.7L636.7,0H0Z' /%3E%3Cpath d='M1917.9,555.7c-2.7,3.2-22.4,19.7-33.3,27.8-33.4,24.8-68.6,42.1-103.8,51-32.9,8.4-57.8,9.1-106.1,3.3-14.2-1.8-23.7-2.2-43.2-2.3-22.4,0-26.1.2-35.9,2.3-46.9,10.1-79,35.1-108.8,84.9-4.2,7-15.1,26.6-24.1,43.4-36.6,68.1-47.8,82.6-96.7,126-30.4,26.9-44.2,41.6-56.3,59.7-22.2,33.3-32.2,78.7-27.1,122.7l.7,5.5H1920V817c0-144.7-.2-263-.4-263A6.23,6.23,0,0,0,1917.9,555.7Z' /%3E%3C/svg%3E\")"),
                        "--theme-background-mobile": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 414 896' fill='%23".concat(o, "'%0A%3E%3Cpath d='M0,116.6V233.1l6.5-5.5q29-24.6,60.5-31.2c9.8-2,26.8-2.2,40.5-.4,13.5,1.7,31.8,1.5,39.5-.5a63.32,63.32,0,0,0,28.5-15.6c9.2-8.8,14.8-16.9,27-39.4,16.9-31.3,21.5-37.3,44.3-57.8,15.9-14.2,22.7-22.2,28.2-32.8,6.7-12.8,10.4-32.8,8.6-45.2L282.9,0H0Z' /%3E%3Cpath d='M409.5,666.7c-17.8,15.9-40,27.8-60.9,32.5-10.5,2.4-27.7,2.7-42.1.8-13.4-1.7-31.8-1.5-39.5.5a63.32,63.32,0,0,0-28.5,15.6c-9.2,8.8-14.8,16.9-27,39.4-16.9,31.3-21.5,37.3-44.3,57.8-15.9,14.2-22.7,22.2-28.2,32.8-6.7,12.8-10.4,32.8-8.6,45.2l.7,4.7H414V779.5c0-64.1-.1-116.5-.2-116.5S411.7,664.7,409.5,666.7Z' /%3E%3C/svg%3E\")")
                     }
                  }), n.background ? "mp4" === (n.background.split(".").pop() || "").toLowerCase() ? (0, s.jsx)("video", {
                     autoPlay: !0,
                     loop: !0,
                     muted: !0,
                     className: "fixed h-full w-full",
                     children: (0, s.jsx)("source", {
                        src: n.background,
                        type: "video/mp4"
                     })
                  }) : (0, s.jsx)("div", {
                     className: "fixed h-full w-full bg-cover bg-center bg-no-repeat",
                     style: {
                        backgroundImage: "url(".concat(n.background, ")")
                     }
                  }) : null, (0, s.jsx)("div", {
                     className: "".concat(n.track && n.track.name && n.track.cover && n.track.audio && d ? "hidden" : "", " relative table h-full w-full"),
                     children: (0, s.jsx)("div", {
                        className: "table-cell px-4 py-20 align-middle",
                        children: (0, s.jsxs)("div", {
                           className: "".concat((null === (t = n.options) || void 0 === t ? void 0 : t.simple) ? "bg-style space-y-8 p-10" : "space-y-6", " mx-auto ").concat((null == n ? void 0 : null === (l = n.options) || void 0 === l ? void 0 : l.small) ? "sm:max-w-xl" : "sm:max-w-5xl"),
                           children: [n && (0, s.jsx)(q, {
                              ...n
                           }), n.links && n.links.length > 0 && (0, s.jsx)(Y, {
                              options: n.options,
                              links: n.links,
                              theme: null === (r = n.options) || void 0 === r ? void 0 : r.theme
                           }), a && (0, s.jsx)(B, {
                              options: n.options,
                              discord: a
                           }), a && a.activities && a.activities.length > 0 && (0, s.jsx)(w, {
                              options: n.options,
                              activities: a.activities
                           }), n.spotify && (0, s.jsx)(G, {
                              options: n.options,
                              url: n.spotify
                           }), n.track && n.track.name && n.track.cover && n.track.audio && (0, s.jsx)(er, {
                              options: n.options,
                              ...n.track
                           })]
                        })
                     })
                  }), (0, s.jsx)(ea, {})]
               })
            })
         }
      },
      9332: function (e, t, l) {
         e.exports = l(1414)
      }
   },
   function (e) {
      e.O(0, [996, 675, 774, 888, 179], function () {
         return e(e.s = 1587)
      }), _N_E = e.O()
   }
]);