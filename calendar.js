/*!
FullCalendar Scheduler v5.5.0
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
var FullCalendar = function(e) {
    "use strict";
    var t = function(e, n) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, n)
    };

    function n(e, n) {
        function r() {
            this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
    var r = function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function o() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
            o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
    }
    var i, a, s, l, u, c, d = {},
        p = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function h(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function v(e, t, n) {
        var r, o, i, a = arguments,
            s = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return m(e, s, r, o, null)
    }

    function m(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++i.__v : o
        };
        return null != i.vnode && i.vnode(a), a
    }

    function y(e) {
        return e.children
    }

    function S(e, t) {
        this.props = e, this.context = t
    }

    function E(e, t) {
        if (null == t) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? E(e) : null
    }

    function C(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return C(e)
        }
    }

    function b(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !R.__r++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(R)
    }

    function R() {
        for (var e; R.__r = a.length;) e = a.sort((function(e, t) {
            return e.__v.__b - t.__v.__b
        })), a = [], e.some((function(e) {
            var t, n, r, o, i, a, s;
            e.__d && (a = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = h({}, i)).__v = i.__v + 1, o = I(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [a] : null, n, null == a ? E(i) : a, i.__h), _(n, i), o != a && C(i)))
        }))
    }

    function D(e, t, n, r, o, i, a, s, l, u) {
        var c, f, h, v, S, C, b, R = r && r.__k || p,
            D = R.length;
        for (l == d && (l = null != a ? a[0] : D ? E(r, 0) : null), n.__k = [], c = 0; c < t.length; c++)
            if (null != (v = n.__k[c] = null == (v = t[c]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v ? m(null, v, null, null, v) : Array.isArray(v) ? m(y, {
                    children: v
                }, null, null, null) : null != v.__e || null != v.__c ? m(v.type, v.props, v.key, null, v.__v) : v)) {
                if (v.__ = n, v.__b = n.__b + 1, null === (h = R[c]) || h && v.key == h.key && v.type === h.type) R[c] = void 0;
                else
                    for (f = 0; f < D; f++) {
                        if ((h = R[f]) && v.key == h.key && v.type === h.type) {
                            R[f] = void 0;
                            break
                        }
                        h = null
                    }
                S = I(e, v, h = h || d, o, i, a, s, l, u), (f = v.ref) && h.ref != f && (b || (b = []), h.ref && b.push(h.ref, null, v), b.push(f, v.__c || S, v)), null != S ? (null == C && (C = S), l = w(e, v, h, R, a, S, l), u || "option" != n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && h.__e == l && l.parentNode != e && (l = E(h))
            } if (n.__e = C, null != a && "function" != typeof n.type)
            for (c = a.length; c--;) null != a[c] && g(a[c]);
        for (c = D; c--;) null != R[c] && O(R[c], R[c]);
        if (b)
            for (c = 0; c < b.length; c++) H(b[c], b[++c], b[++c])
    }

    function w(e, t, n, r, o, i, a) {
        var s, l, u;
        if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
        else if (o == n || i != a || null == i.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(i), s = null;
            else {
                for (l = a, u = 0;
                    (l = l.nextSibling) && u < r.length; u += 2)
                    if (l == i) break e;
                e.insertBefore(i, a), s = a
            } return void 0 !== s ? s : i.nextSibling
    }

    function T(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || f.test(t) ? n : n + "px"
    }

    function x(e, t, n, r, o) {
        var i, a, s;
        if (o && "className" == t && (t = "class"), "style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || T(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || T(e.style, t, n[t])
            }
        else "o" === t[0] && "n" === t[1] ? (i = t !== (t = t.replace(/Capture$/, "")), (a = t.toLowerCase()) in e && (t = a), t = t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, s = i ? k : M, n ? r || e.addEventListener(t, s, i) : e.removeEventListener(t, s, i)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
    }

    function M(e) {
        this.l[e.type + !1](i.event ? i.event(e) : e)
    }

    function k(e) {
        this.l[e.type + !0](i.event ? i.event(e) : e)
    }

    function P(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, o.__e && ("function" == typeof o.type && o.__k.length > 1 && P(o, t, n), t = w(n, o, o, e.__k, null, o.__e, t), "function" == typeof e.type && (e.__d = t)))
    }

    function I(e, t, n, r, o, a, s, l, u) {
        var c, d, p, f, g, v, m, E, C, b, R, w = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (c = i.__b) && c(t);
        try {
            e: if ("function" == typeof w) {
                if (E = t.props, C = (c = w.contextType) && r[c.__c], b = c ? C ? C.props.value : c.__ : r, n.__c ? m = (d = t.__c = n.__c).__ = d.__E : ("prototype" in w && w.prototype.render ? t.__c = d = new w(E, b) : (t.__c = d = new S(E, b), d.constructor = w, d.render = W), C && C.sub(d), d.props = E, d.state || (d.state = {}), d.context = b, d.__n = r, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != w.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, w.getDerivedStateFromProps(E, d.__s))), f = d.props, g = d.state, p) null == w.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == w.getDerivedStateFromProps && E !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(E, b), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(E, d.__s, b) || t.__v === n.__v) {
                        d.props = E, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, d.__h.length && s.push(d), P(t, l, e);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(E, d.__s, b), null != d.componentDidUpdate && d.__h.push((function() {
                        d.componentDidUpdate(f, g, v)
                    }))
                }
                d.context = b, d.props = E, d.state = d.__s, (c = i.__r) && c(t), d.__d = !1, d.__v = t, d.__P = e, c = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = h(h({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(f, g)), R = null != c && c.type == y && null == c.key ? c.props.children : c, D(e, Array.isArray(R) ? R : [R], t, n, r, o, a, s, l, u), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), m && (d.__E = d.__ = null), d.__e = !1
            } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, o, a, s, u);
            (c = i.diffed) && c(t)
        }
        catch (e) {
            t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), i.__e(e, t, n)
        }
        return t.__e
    }

    function _(e, t) {
        i.__c && i.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
                    e.call(t)
                }))
            } catch (e) {
                i.__e(e, t.__v)
            }
        }))
    }

    function N(e, t, n, r, o, i, a, s) {
        var l, u, c, f, h, g = n.props,
            v = t.props;
        if (o = "svg" === t.type || o, null != i)
            for (l = 0; l < i.length; l++)
                if (null != (u = i[l]) && ((null === t.type ? 3 === u.nodeType : u.localName === t.type) || e == u)) {
                    e = u, i[l] = null;
                    break
                } if (null == e) {
            if (null === t.type) return document.createTextNode(v);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, v.is && {
                is: v.is
            }), i = null, s = !1
        }
        if (null === t.type) g === v || s && e.data === v || (e.data = v);
        else {
            if (null != i && (i = p.slice.call(e.childNodes)), c = (g = n.props || d).dangerouslySetInnerHTML, f = v.dangerouslySetInnerHTML, !s) {
                if (null != i)
                    for (g = {}, h = 0; h < e.attributes.length; h++) g[e.attributes[h].name] = e.attributes[h].value;
                (f || c) && (f && (c && f.__html == c.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
            }(function(e, t, n, r, o) {
                var i;
                for (i in n) "children" === i || "key" === i || i in t || x(e, i, null, n[i], r);
                for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || x(e, i, t[i], n[i], r)
            })(e, v, g, o, s), f ? t.__k = [] : (l = t.props.children, D(e, Array.isArray(l) ? l : [l], t, n, r, "foreignObject" !== t.type && o, i, a, d, s)), s || ("value" in v && void 0 !== (l = v.value) && (l !== e.value || "progress" === t.type && !l) && x(e, "value", l, g.value, !1), "checked" in v && void 0 !== (l = v.checked) && l !== e.checked && x(e, "checked", l, g.checked, !1))
        }
        return e
    }

    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            i.__e(e, n)
        }
    }

    function O(e, t, n) {
        var r, o, a;
        if (i.unmount && i.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                i.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (a = 0; a < r.length; a++) r[a] && O(r[a], t, n);
        null != o && g(o)
    }

    function W(e, t, n) {
        return this.constructor(e, n)
    }

    function A(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t), o = (r = n === u) ? null : n && n.__k || t.__k, e = v(y, null, [e]), a = [], I(t, (r ? t : n || t).__k = e, o || d, d, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : t.childNodes.length ? p.slice.call(t.childNodes) : null, a, n || d, r), _(a, e)
    }
    i = {
        __e: function(e, t) {
            for (var n, r, o, i = t.__h; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return t.__h = i, n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        },
        __v: 0
    }, S.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this.__h.push(t), b(this))
    }, S.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), b(this))
    }, S.prototype.render = y, a = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R.__r = 0, u = d, c = 0;
    var L = "undefined" != typeof globalThis ? globalThis : window;
    L.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : L.FullCalendarVDom = {
        Component: S,
        createElement: v,
        render: A,
        createRef: function() {
            return {
                current: null
            }
        },
        Fragment: y,
        createContext: function(e) {
            var t = function(e, t) {
                    var n = {
                        __c: t = "__cC" + c++,
                        __: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e, n, r) {
                            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                                return r
                            }, this.shouldComponentUpdate = function(e) {
                                this.props.value !== e.value && n.some(b)
                            }, this.sub = function(e) {
                                n.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    n.splice(n.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                    return n.Provider.__ = n.Consumer.contextType = n
                }(e),
                n = t.Provider;
            return t.Provider = function() {
                var e = this,
                    t = !this.getChildContext,
                    r = n.apply(this, arguments);
                if (t) {
                    var o = [];
                    this.shouldComponentUpdate = function(t) {
                        e.props.value !== t.value && o.forEach((function(e) {
                            e.context = t.value, e.forceUpdate()
                        }))
                    }, this.sub = function(e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            o.splice(o.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return r
            }, t
        },
        flushToDom: function() {
            var e = i.debounceRendering,
                t = [];
            i.debounceRendering = function(e) {
                t.push(e)
            }, A(v(U, {}), document.createElement("div"));
            for (; t.length;) t.shift()();
            i.debounceRendering = e
        },
        unmountComponentAtNode: function(e) {
            A(null, e)
        }
    };
    var U = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            return v("div", {})
        }, t.prototype.componentDidMount = function() {
            this.setState({})
        }, t
    }(S);
    var B = function() {
        function e(e, t) {
            this.context = e, this.internalEventSource = t
        }
        return e.prototype.remove = function() {
            this.context.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: this.internalEventSource.sourceId
            })
        }, e.prototype.refetch = function() {
            this.context.dispatch({
                type: "FETCH_EVENT_SOURCES",
                sourceIds: [this.internalEventSource.sourceId]
            })
        }, Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this.internalEventSource.publicId
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function() {
                return this.internalEventSource.meta.url
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "format", {
            get: function() {
                return this.internalEventSource.meta.format
            },
            enumerable: !1,
            configurable: !0
        }), e
    }();

    function z(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function V(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (F(e, t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }

    function F(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }

    function j(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r
    }

    function G(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                var s = i[a];
                t && !F(s, t) || r.push(s)
            }
        return r
    }
    var q = /(top|left|right|bottom|width|height)$/i;

    function Y(e, t) {
        for (var n in t) Z(e, n, t[n])
    }

    function Z(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && q.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }

    function X(e) {
        e.preventDefault()
    }

    function K(e, t) {
        return function(n) {
            var r = V(n.target, e);
            r && t.call(r, n, r)
        }
    }

    function J(e, t, n, r) {
        var o = K(n, r);
        return e.addEventListener(t, o),
            function() {
                e.removeEventListener(t, o)
            }
    }
    var $ = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

    function Q(e, t) {
        var n = function(r) {
            t(r), $.forEach((function(t) {
                e.removeEventListener(t, n)
            }))
        };
        $.forEach((function(t) {
            e.addEventListener(t, n)
        }))
    }
    var ee = 0;

    function te() {
        return String(ee += 1)
    }

    function ne() {
        document.body.classList.add("fc-not-allowed")
    }

    function re() {
        document.body.classList.remove("fc-not-allowed")
    }

    function oe(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", X)
    }

    function ie(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", X)
    }

    function ae(e) {
        e.addEventListener("contextmenu", X)
    }

    function se(e) {
        e.removeEventListener("contextmenu", X)
    }

    function le(e) {
        var t, n, r = [],
            o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof(n = o[t]) ? r.push("-" === n.charAt(0) ? {
            field: n.substring(1),
            order: -1
        } : {
            field: n,
            order: 1
        }) : "function" == typeof n && r.push({
            func: n
        });
        return r
    }

    function ue(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1)
            if (o = ce(e, t, n[r])) return o;
        return 0
    }

    function ce(e, t, n) {
        return n.func ? n.func(e, t) : de(e[n.field], t[n.field]) * (n.order || 1)
    }

    function de(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }

    function pe(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }

    function fe(e, t) {
        return e - t
    }

    function he(e) {
        return e % 1 == 0
    }

    function ge(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }
    var ve = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    function me(e, t) {
        var n = Pe(e);
        return n[2] += 7 * t, Ie(n)
    }

    function ye(e, t) {
        var n = Pe(e);
        return n[2] += t, Ie(n)
    }

    function Se(e, t) {
        var n = Pe(e);
        return n[6] += t, Ie(n)
    }

    function Ee(e, t) {
        return Ce(e, t) / 7
    }

    function Ce(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }

    function be(e, t) {
        var n = we(e),
            r = we(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(Ce(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }

    function Re(e, t) {
        var n = De(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null
    }

    function De(e, t) {
        return Ne(e) === Ne(t) ? Math.round(Ce(e, t)) : null
    }

    function we(e) {
        return Ie([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }

    function Te(e, t, n, r) {
        var o = Ie([t, 0, 1 + xe(t, n, r)]),
            i = we(e),
            a = Math.round(Ce(o, i));
        return Math.floor(a / 7) + 1
    }

    function xe(e, t, n) {
        var r = 7 + t - n;
        return -((7 + Ie([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }

    function Me(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }

    function ke(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
    }

    function Pe(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }

    function Ie(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    }

    function _e(e) {
        return !isNaN(e.valueOf())
    }

    function Ne(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }

    function He(e, t, n, r) {
        return {
            instanceId: te(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }
    var Oe = Object.prototype.hasOwnProperty;

    function We(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break
                    }
                }
                o.length && (n[r] = We(o))
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l])
        }
        return n
    }

    function Ae(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n
    }

    function Le(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
    }

    function Ue(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }

    function Be(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }

    function ze(e, t) {
        if (e === t) return !0;
        for (var n in e)
            if (Oe.call(e, n) && !(n in t)) return !1;
        for (var n in t)
            if (Oe.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function Ve(e, t) {
        var n = [];
        for (var r in e) Oe.call(e, r) && (r in t || n.push(r));
        for (var r in t) Oe.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }

    function Fe(e, t, n) {
        if (void 0 === n && (n = {}), e === t) return !0;
        for (var r in t)
            if (!(r in e) || !je(e[r], t[r], n[r])) return !1;
        for (var r in e)
            if (!(r in t)) return !1;
        return !0
    }

    function je(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }

    function Ge(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }

    function qe(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in s = Ae(s, (function(e) {
                return !a[e.defId].recurringDef
            })), a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = Ye(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d],
                        h = He(l, {
                            start: f,
                            end: r.add(f, c)
                        });
                    s[h.instanceId] = h
                }
            }
        }
        return {
            defs: a,
            instances: s
        }
    }

    function Ye(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(we)), i
    }
    var Ze = ["years", "months", "days", "milliseconds"],
        Xe = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function Ke(e, t) {
        var n;
        return "string" == typeof e ? function(e) {
            var t = Xe.exec(e);
            if (t) {
                var n = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: n * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Je(e) : "number" == typeof e ? Je(((n = {})[t || "milliseconds"] = e, n)) : null
    }

    function Je(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
            },
            n = e.weeks || e.week;
        return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
    }

    function $e(e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }

    function Qe(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }

    function et(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t
        }
    }

    function tt(e) {
        return ot(e) / 864e5
    }

    function nt(e) {
        return ot(e) / 6e4
    }

    function rt(e) {
        return ot(e) / 1e3
    }

    function ot(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }

    function it(e, t) {
        for (var n = null, r = 0; r < Ze.length; r += 1) {
            var o = Ze[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!he(i) || null !== n && n !== i) return null;
                n = i
            } else if (e[o]) return null
        }
        return n
    }

    function at(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return {
                unit: "millisecond",
                value: t
            };
            if (t % 6e4 != 0) return {
                unit: "second",
                value: t / 1e3
            };
            if (t % 36e5 != 0) return {
                unit: "minute",
                value: t / 6e4
            };
            if (t) return {
                unit: "hour",
                value: t / 36e5
            }
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
            unit: "week",
            value: e.days / 7
        } : {
            unit: "day",
            value: e.days
        } : e.months ? {
            unit: "month",
            value: e.months
        } : e.years ? {
            unit: "year",
            value: e.years
        } : {
            unit: "millisecond",
            value: 0
        }
    }

    function st(e) {
        return e.toISOString().replace(/T.*$/, "")
    }

    function lt(e) {
        return pe(e.getUTCHours(), 2) + ":" + pe(e.getUTCMinutes(), 2) + ":" + pe(e.getUTCSeconds(), 2)
    }

    function ut(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t ? n + pe(o, 2) + ":" + pe(i, 2) : "GMT" + n + o + (i ? ":" + pe(i, 2) : "")
    }

    function ct(e, t) {
        for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
        return n
    }

    function dt(e, t, n) {
        if (e === t) return !0;
        var r, o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0
    }

    function pt(e, t, n) {
        var r, o;
        return function() {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            if (r) {
                if (!dt(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else o = e.apply(this, i);
            return r = i, o
        }
    }

    function ft(e, t, n) {
        var r, o, i = this;
        return function(a) {
            if (r) {
                if (!ze(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else o = e.call(i, a);
            return r = a, o
        }
    }

    function ht(e, t, n) {
        var r = this,
            o = [],
            i = [];
        return function(a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
                if (a[u]) {
                    if (!dt(o[u], a[u])) {
                        n && n(i[u]);
                        var c = e.apply(r, a[u]);
                        t && t(c, i[u]) || (i[u] = c)
                    }
                } else n && n(i[u]);
            for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
            return o = a, i.splice(l), i
        }
    }

    function gt(e, t, n) {
        var r = this,
            o = {},
            i = {};
        return function(a) {
            var s = {};
            for (var l in a)
                if (i[l])
                    if (dt(o[l], a[l])) s[l] = i[l];
                    else {
                        n && n(i[l]);
                        var u = e.apply(r, a[l]);
                        s[l] = t && t(u, i[l]) ? i[l] : u
                    }
            else s[l] = e.apply(r, a[l]);
            return o = a, i = s, s
        }
    }
    var vt = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0
        },
        mt = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1
        },
        yt = /\s*([ap])\.?m\.?/i,
        St = /,/g,
        Et = /\s+/g,
        Ct = /\u200e/g,
        bt = /UTC|GMT/,
        Rt = function() {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var o in e) o in vt ? (n[o] = e[o], r = Math.max(vt[o], r)) : (t[o] = e[o], o in mt && (r = Math.max(mt[o], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = pt(Dt)
            }
            return e.prototype.format = function(e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
            }, e.prototype.formatRange = function(e, t, n, r) {
                var o = this.standardDateProps,
                    i = this.extendedSettings,
                    a = function(e, t, n) {
                        if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
                        if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
                        if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
                        if (Ne(e) !== Ne(t)) return 1;
                        return 0
                    }(e.marker, t.marker, n.calendarSystem);
                if (!a) return this.format(e, n);
                var s = a;
                !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
                var l = this.format(e, n),
                    u = this.format(t, n);
                if (l === u) return l;
                var c = Dt(function(e, t) {
                        var n = {};
                        for (var r in e)(!(r in mt) || mt[r] <= t) && (n[r] = e[r]);
                        return n
                    }(o, s), i, n),
                    d = c(e),
                    p = c(t),
                    f = function(e, t, n, r) {
                        var o = 0;
                        for (; o < e.length;) {
                            var i = e.indexOf(t, o);
                            if (-1 === i) break;
                            var a = e.substr(0, i);
                            o = i + t.length;
                            for (var s = e.substr(o), l = 0; l < n.length;) {
                                var u = n.indexOf(r, l);
                                if (-1 === u) break;
                                var c = n.substr(0, u);
                                l = u + r.length;
                                var d = n.substr(l);
                                if (a === c && s === d) return {
                                    before: a,
                                    after: s
                                }
                            }
                        }
                        return null
                    }(l, d, u, p),
                    h = i.separator || r || n.defaultSeparator || "";
                return f ? f.before + d + h + p + f.after : l + h + u
            }, e.prototype.getLargestUnit = function() {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            }, e
        }();

    function Dt(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName ? function(e) {
            return ut(e.timeZoneOffset)
        } : 0 === o && t.week ? function(e) {
            return function(e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        } : function(e, t, n) {
            e = r({}, e), t = r({}, t),
                function(e, t) {
                    e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                    "long" === e.timeZoneName && (e.timeZoneName = "short");
                    t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                }(e, t), e.timeZone = "UTC";
            var o, i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
                var a = r({}, e);
                delete a.minute, o = new Intl.DateTimeFormat(n.locale.codes, a)
            }
            return function(r) {
                var a = r.marker;
                return function(e, t, n, r, o) {
                    e = e.replace(Ct, ""), "short" === n.timeZoneName && (e = function(e, t) {
                        var n = !1;
                        e = e.replace(bt, (function() {
                            return n = !0, t
                        })), n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : ut(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(St, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(yt, "").trim() : "narrow" === r.meridiem ? e = e.replace(yt, (function(e, t) {
                        return t.toLocaleLowerCase()
                    })) : "short" === r.meridiem ? e = e.replace(yt, (function(e, t) {
                        return t.toLocaleLowerCase() + "m"
                    })) : "lowercase" === r.meridiem && (e = e.replace(yt, (function(e) {
                        return e.toLocaleLowerCase()
                    })));
                    return e = (e = e.replace(Et, " ")).trim()
                }((o && !a.getUTCMinutes() ? o : i).format(a), r, e, t, n)
            }
        }(e, t, n)
    }

    function wt(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }

    function Tt(e, t, n, r) {
        var o = wt(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? wt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }
    var xt = function() {
            function e(e) {
                this.cmdStr = e
            }
            return e.prototype.format = function(e, t, n) {
                return t.cmdFormatter(this.cmdStr, Tt(e, null, t, n))
            }, e.prototype.formatRange = function(e, t, n, r) {
                return n.cmdFormatter(this.cmdStr, Tt(e, t, n, r))
            }, e
        }(),
        Mt = function() {
            function e(e) {
                this.func = e
            }
            return e.prototype.format = function(e, t, n) {
                return this.func(Tt(e, null, t, n))
            }, e.prototype.formatRange = function(e, t, n, r) {
                return this.func(Tt(e, t, n, r))
            }, e
        }();

    function kt(e) {
        return "object" == typeof e && e ? new Rt(e) : "string" == typeof e ? new xt(e) : "function" == typeof e ? new Mt(e) : null
    }
    var Pt = {
            navLinkDayClick: Ut,
            navLinkWeekClick: Ut,
            duration: Ke,
            bootstrapFontAwesome: Ut,
            buttonIcons: Ut,
            customButtons: Ut,
            defaultAllDayEventDuration: Ke,
            defaultTimedEventDuration: Ke,
            nextDayThreshold: Ke,
            scrollTime: Ke,
            slotMinTime: Ke,
            slotMaxTime: Ke,
            dayPopoverFormat: kt,
            slotDuration: Ke,
            snapDuration: Ke,
            headerToolbar: Ut,
            footerToolbar: Ut,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: kt,
            dayHeaderClassNames: Ut,
            dayHeaderContent: Ut,
            dayHeaderDidMount: Ut,
            dayHeaderWillUnmount: Ut,
            dayCellClassNames: Ut,
            dayCellContent: Ut,
            dayCellDidMount: Ut,
            dayCellWillUnmount: Ut,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: Ut,
            weekNumbers: Boolean,
            weekNumberClassNames: Ut,
            weekNumberContent: Ut,
            weekNumberDidMount: Ut,
            weekNumberWillUnmount: Ut,
            editable: Boolean,
            viewClassNames: Ut,
            viewDidMount: Ut,
            viewWillUnmount: Ut,
            nowIndicator: Boolean,
            nowIndicatorClassNames: Ut,
            nowIndicatorContent: Ut,
            nowIndicatorDidMount: Ut,
            nowIndicatorWillUnmount: Ut,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: Ut,
            locale: Ut,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: Ut,
            eventOrder: le,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: Ut,
            contentHeight: Ut,
            direction: String,
            weekNumberFormat: kt,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: Ut,
            initialDate: Ut,
            now: Ut,
            eventDataTransform: Ut,
            stickyHeaderDates: Ut,
            stickyFooterScrollbar: Ut,
            viewHeight: Ut,
            defaultAllDay: Boolean,
            eventSourceFailure: Ut,
            eventSourceSuccess: Ut,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: Ut,
            eventConstraint: Ut,
            eventAllow: Ut,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: Ut,
            eventContent: Ut,
            eventDidMount: Ut,
            eventWillUnmount: Ut,
            selectConstraint: Ut,
            selectOverlap: Ut,
            selectAllow: Ut,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: Ut,
            slotLaneClassNames: Ut,
            slotLaneContent: Ut,
            slotLaneDidMount: Ut,
            slotLaneWillUnmount: Ut,
            slotLabelClassNames: Ut,
            slotLabelContent: Ut,
            slotLabelDidMount: Ut,
            slotLabelWillUnmount: Ut,
            dayMaxEvents: Ut,
            dayMaxEventRows: Ut,
            dayMinWidth: Number,
            slotLabelInterval: Ke,
            allDayText: String,
            allDayClassNames: Ut,
            allDayContent: Ut,
            allDayDidMount: Ut,
            allDayWillUnmount: Ut,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: kt,
            rerenderDelay: Number,
            moreLinkText: Ut,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMinHeight: Number,
            slotEventOverlap: Boolean,
            plugins: Ut,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: Ke,
            hiddenDays: Ut,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: Ut,
            visibleRange: Ut,
            titleFormat: Ut,
            noEventsText: String
        },
        It = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {
                day: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1
        },
        _t = {
            datesSet: Ut,
            eventsSet: Ut,
            eventAdd: Ut,
            eventChange: Ut,
            eventRemove: Ut,
            windowResize: Ut,
            eventClick: Ut,
            eventMouseEnter: Ut,
            eventMouseLeave: Ut,
            select: Ut,
            unselect: Ut,
            loading: Ut,
            _unmount: Ut,
            _beforeprint: Ut,
            _afterprint: Ut,
            _noEventDrop: Ut,
            _noEventResize: Ut,
            _resize: Ut,
            _scrollRequest: Ut
        },
        Nt = {
            buttonText: Ut,
            views: Ut,
            plugins: Ut,
            initialEvents: Ut,
            events: Ut,
            eventSources: Ut
        },
        Ht = {
            headerToolbar: Ot,
            footerToolbar: Ot,
            buttonText: Ot,
            buttonIcons: Ot
        };

    function Ot(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? ze(e, t) : e === t
    }
    var Wt = {
        type: String,
        component: Ut,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: Ut,
        usesMinMaxTime: Boolean,
        classNames: Ut,
        content: Ut,
        didMount: Ut,
        willUnmount: Ut
    };

    function At(e) {
        return We(e, Ht)
    }

    function Lt(e, t) {
        var n = {},
            r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return {
            refined: n,
            extra: r
        }
    }

    function Ut(e) {
        return e
    }

    function Bt(e, t, n, r) {
        for (var o = {
                defs: {},
                instances: {}
            }, i = rn(n), a = 0, s = e; a < s.length; a++) {
            var l = tn(s[a], t, n, r, i);
            l && zt(l, o)
        }
        return o
    }

    function zt(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
    }

    function Vt(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                o = Gt(e, (function(e) {
                    return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
                    var t, n
                }));
            return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o
        }
        return {
            defs: {},
            instances: {}
        }
    }

    function Ft() {
        return {
            defs: {},
            instances: {}
        }
    }

    function jt(e, t) {
        return {
            defs: r(r({}, e.defs), t.defs),
            instances: r(r({}, e.instances), t.instances)
        }
    }

    function Gt(e, t) {
        var n = Ae(e.defs, t),
            r = Ae(e.instances, (function(e) {
                return n[e.defId]
            }));
        return {
            defs: n,
            instances: r
        }
    }

    function qt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }
    var Yt = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: Ut,
            overlap: Ut,
            allow: Ut,
            className: qt,
            classNames: qt,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String
        },
        Zt = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
        };

    function Xt(e, t) {
        var n = function(e, t) {
            return Array.isArray(e) ? Bt(e, null, t, !0) : "object" == typeof e && e ? Bt([e], null, t, !0) : null != e ? String(e) : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }

    function Kt(e) {
        return e.reduce(Jt, Zt)
    }

    function Jt(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }
    var $t = {
            id: String,
            groupId: String,
            title: String,
            url: String
        },
        Qt = {
            start: Ut,
            end: Ut,
            date: Ut,
            allDay: Boolean
        },
        en = r(r(r({}, $t), Qt), {
            extendedProps: Ut
        });

    function tn(e, t, n, r, o) {
        void 0 === o && (o = rn(n));
        var i = nn(e, n, o),
            a = i.refined,
            s = i.extra,
            l = function(e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n
            }(t, n),
            u = function(e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
                            allDay: a,
                            duration: i.duration,
                            typeData: i.typeData,
                            typeId: o
                        }
                    }
                }
                return null
            }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u) return (c = on(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
            typeId: u.typeId,
            typeData: u.typeData,
            duration: u.duration
        }, {
            def: c,
            instance: null
        };
        var c, d = function(e, t, n, r) {
            var o, i, a = e.allDay,
                s = null,
                l = !1,
                u = null,
                c = null != e.start ? e.start : e.date;
            if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker;
            else if (!r) return null;
            null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
            null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
            a && s && (s = we(s));
            i && (u = i.marker, a && (u = we(u)), s && u <= s && (u = null));
            u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: a,
                hasEnd: l,
                range: {
                    start: s,
                    end: u
                },
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null
            }
        }(a, l, n, r);
        return d ? {
            def: c = on(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
            instance: He(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
        } : null
    }

    function nn(e, t, n) {
        return void 0 === n && (n = rn(t)), Lt(e, n)
    }

    function rn(e) {
        return r(r(r({}, Yt), en), e.pluginHooks.eventRefiners)
    }

    function on(e, t, n, o, i, a) {
        for (var s = {
                title: e.title || "",
                groupId: e.groupId || "",
                publicId: e.id || "",
                url: e.url || "",
                recurringDef: null,
                defId: te(),
                sourceId: n,
                allDay: o,
                hasEnd: i,
                ui: Xt(e, a),
                extendedProps: r(r({}, e.extendedProps || {}), t)
            }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
            var c = u[l];
            r(s, c(e))
        }
        return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
    }

    function an(e) {
        var t = Math.floor(Ce(e.start, e.end)) || 1,
            n = we(e.start);
        return {
            start: n,
            end: ye(n, t)
        }
    }

    function sn(e, t) {
        void 0 === t && (t = Ke(0));
        var n = null,
            r = null;
        if (e.end) {
            r = we(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= ot(t) && (r = ye(r, 1))
        }
        return e.start && (n = we(e.start), r && r <= n && (r = ye(n, 1))), {
            start: n,
            end: r
        }
    }

    function ln(e) {
        var t = sn(e);
        return Ce(t.start, t.end) > 1
    }

    function un(e, t, n, r) {
        return "year" === r ? Ke(n.diffWholeYears(e, t), "year") : "month" === r ? Ke(n.diffWholeMonths(e, t), "month") : be(e, t)
    }

    function cn(e, t) {
        var n, r, o = [],
            i = t.start;
        for (e.sort(dn), n = 0; n < e.length; n += 1)(r = e[n]).start > i && o.push({
            start: i,
            end: r.start
        }), r.end > i && (i = r.end);
        return i < t.end && o.push({
            start: i,
            end: t.end
        }), o
    }

    function dn(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }

    function pn(e, t) {
        var n = e.start,
            r = e.end,
            o = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }), o
    }

    function fn(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }

    function hn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }

    function gn(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }

    function vn(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }

    function mn(e, t, n, r) {
        var o = {},
            i = {},
            a = {},
            s = [],
            l = [],
            u = Cn(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(E = e.defs[c]).defId]).display && (E.groupId ? (o[E.groupId] = [], a[E.groupId] || (a[E.groupId] = E)) : i[c] = [])
        }
        for (var d in e.instances) {
            var p = e.instances[d],
                f = u[(E = e.defs[p.defId]).defId],
                h = p.range,
                g = !E.allDay && r ? sn(h, r) : h,
                v = pn(g, n);
            v && ("inverse-background" === f.display ? E.groupId ? o[E.groupId].push(v) : i[p.defId].push(v) : "none" !== f.display && ("background" === f.display ? s : l).push({
                def: E,
                ui: f,
                instance: p,
                range: v,
                isStart: g.start && g.start.valueOf() === v.start.valueOf(),
                isEnd: g.end && g.end.valueOf() === v.end.valueOf()
            }))
        }
        for (var m in o)
            for (var y = 0, S = cn(o[m], n); y < S.length; y++) {
                var E, C = S[y];
                f = u[(E = a[m]).defId];
                s.push({
                    def: E,
                    ui: f,
                    instance: null,
                    range: C,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (var c in i)
            for (var b = 0, R = cn(i[c], n); b < R.length; b++) {
                C = R[b];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: C,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return {
            bg: s,
            fg: l
        }
    }

    function yn(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }

    function Sn(e, t) {
        e.fcSeg = t
    }

    function En(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }

    function Cn(e, t) {
        return Le(e, (function(e) {
            return bn(e, t)
        }))
    }

    function bn(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Kt(n)
    }

    function Rn(e, t) {
        var n = e.map(Dn);
        return n.sort((function(e, n) {
            return ue(e, n, t)
        })), n.map((function(e) {
            return e._seg
        }))
    }

    function Dn(e) {
        var t = e.eventRange,
            n = t.def,
            o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0,
            a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e
        })
    }

    function wn(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
            a = (0, l[s])(a, o, i, t)
        }
        return a
    }

    function Tn(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }

    function xn(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }

    function Mn(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        if (null == u && (u = !1 !== r), null == c && (c = !1 !== o), u && !d.allDay && (e.isStart || e.isEnd)) {
            var f = i || (e.isStart ? p.range.start : e.start || e.eventRange.range.start),
                h = a || (e.isEnd ? p.range.end : e.end || e.eventRange.range.end);
            return c && d.hasEnd ? s.formatRange(f, h, t, {
                forcedStartTzo: i ? null : p.forcedStartTzo,
                forcedEndTzo: a ? null : p.forcedEndTzo
            }) : s.format(f, t, {
                forcedTzo: i ? null : p.forcedStartTzo
            })
        }
        return ""
    }

    function kn(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && vn(t, r.start)
        }
    }

    function Pn(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
    }

    function In(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }
    var _n = {
        start: Ut,
        end: Ut,
        allDay: Boolean
    };

    function Nn(e, t, n) {
        var o = function(e, t) {
                var n = Lt(e, _n),
                    o = n.refined,
                    i = n.extra,
                    a = o.start ? t.createMarkerMeta(o.start) : null,
                    s = o.end ? t.createMarkerMeta(o.end) : null,
                    l = o.allDay;
                null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
                return r({
                    range: {
                        start: a ? a.marker : null,
                        end: s ? s.marker : null
                    },
                    allDay: l
                }, i)
            }(e, t),
            i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return o
    }

    function Hn(e, t) {
        return fn(e.range, t.range) && e.allDay === t.allDay && function(e, t) {
            for (var n in t)
                if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e)
                if (!(n in t)) return !1;
            return !0
        }(e, t)
    }

    function On(e, t, n) {
        return r(r({}, Wn(e, t, n)), {
            timeZone: t.timeZone
        })
    }

    function Wn(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {
                omitTime: n
            }),
            endStr: t.formatIso(e.end, {
                omitTime: n
            })
        }
    }

    function An(e, t, n) {
        var r = nn({
                editable: !1
            }, n),
            o = on(r.refined, r.extra, "", e.allDay, !0, n);
        return {
            def: o,
            ui: bn(o, t),
            instance: He(o.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0
        }
    }

    function Ln(e, t, n) {
        n.emitter.trigger("select", r(r({}, Un(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }

    function Un(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, o = t.dateEnv, r(r({}, Wn(n.range, o, n.allDay)), {
            allDay: n.allDay
        }))), i
    }

    function Bn(e, t, n) {
        var r = n.dateEnv,
            o = n.options,
            i = t;
        return e ? (i = we(i), i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration), i
    }

    function zn(e, t, n, r) {
        var o = Cn(e.defs, t),
            i = {
                defs: {},
                instances: {}
            };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = Vn(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = Fn(u, s, o[u.defId], n, r)
        }
        return i
    }

    function Vn(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
        var a = r(r(r({}, e), i), {
            ui: r(r({}, e.ui), i.ui)
        });
        n.extendedProps && (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
            (0, l[s])(a, n, o)
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a
    }

    function Fn(e, t, n, o, i) {
        var a = i.dateEnv,
            s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd,
            u = r({}, e);
        return s && (u.range = an(u.range)), o.datesDelta && n.startEditable && (u.range = {
            start: a.add(u.range.start, o.datesDelta),
            end: a.add(u.range.end, o.datesDelta)
        }), o.startDelta && n.durationEditable && (u.range = {
            start: a.add(u.range.start, o.startDelta),
            end: u.range.end
        }), o.endDelta && n.durationEditable && (u.range = {
            start: u.range.start,
            end: a.add(u.range.end, o.endDelta)
        }), l && (u.range = {
            start: u.range.start,
            end: Bn(t.allDay, u.range.start, i)
        }), t.allDay && (u.range = {
            start: we(u.range.start),
            end: we(u.range.end)
        }), u.range.end < u.range.start && (u.range.end = Bn(t.allDay, u.range.start, i)), u
    }
    var jn = function() {
            function e(e, t, n) {
                this.type = e, this.getCurrentData = t, this.dateEnv = n
            }
            return Object.defineProperty(e.prototype, "calendar", {
                get: function() {
                    return this.getCurrentData().calendarApi
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "title", {
                get: function() {
                    return this.getCurrentData().viewTitle
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "activeStart", {
                get: function() {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "activeEnd", {
                get: function() {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentStart", {
                get: function() {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentEnd", {
                get: function() {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.getOption = function(e) {
                return this.getCurrentData().options[e]
            }, e
        }(),
        Gn = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            format: String,
            events: Ut,
            eventDataTransform: Ut,
            success: Ut,
            failure: Ut
        };

    function qn(e, t, n) {
        var r;
        if (void 0 === n && (n = Yn(t)), "string" == typeof e ? r = {
                url: e
            } : "function" == typeof e || Array.isArray(e) ? r = {
                events: e
            } : "object" == typeof e && e && (r = e), r) {
            var o = Lt(r, n),
                i = o.refined,
                a = o.extra,
                s = function(e, t) {
                    for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                        var o = n[r].parseMeta(e);
                        if (o) return {
                            sourceDefId: r,
                            meta: o
                        }
                    }
                    return null
                }(i, t);
            if (s) return {
                _raw: e,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: i.defaultAllDay,
                eventDataTransform: i.eventDataTransform,
                success: i.success,
                failure: i.failure,
                publicId: i.id || "",
                sourceId: te(),
                sourceDefId: s.sourceDefId,
                meta: s.meta,
                ui: Xt(i, t),
                extendedProps: a
            }
        }
        return null
    }

    function Yn(e) {
        return r(r(r({}, Yt), Gn), e.pluginHooks.eventSourceRefiners)
    }

    function Zn(e, t) {
        return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
    }
    var Xn = function() {
            function e() {}
            return e.prototype.getCurrentData = function() {
                return this.currentDataManager.getCurrentData()
            }, e.prototype.dispatch = function(e) {
                return this.currentDataManager.dispatch(e)
            }, Object.defineProperty(e.prototype, "view", {
                get: function() {
                    return this.getCurrentData().viewApi
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.batchRendering = function(e) {
                e()
            }, e.prototype.updateSize = function() {
                this.trigger("_resize", !0)
            }, e.prototype.setOption = function(e, t) {
                this.dispatch({
                    type: "SET_OPTION",
                    optionName: e,
                    rawOptionValue: t
                })
            }, e.prototype.getOption = function(e) {
                return this.currentDataManager.currentCalendarOptionsInput[e]
            }, e.prototype.getAvailableLocaleCodes = function() {
                return Object.keys(this.getCurrentData().availableRawLocales)
            }, e.prototype.on = function(e, t) {
                var n = this.currentDataManager;
                n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
            }, e.prototype.off = function(e, t) {
                this.currentDataManager.emitter.off(e, t)
            }, e.prototype.trigger = function(e) {
                for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n))
            }, e.prototype.changeView = function(e, t) {
                var n = this;
                this.batchRendering((function() {
                    if (n.unselect(), t)
                        if (t.start && t.end) n.dispatch({
                            type: "CHANGE_VIEW_TYPE",
                            viewType: e
                        }), n.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: t
                        });
                        else {
                            var r = n.getCurrentData().dateEnv;
                            n.dispatch({
                                type: "CHANGE_VIEW_TYPE",
                                viewType: e,
                                dateMarker: r.createMarker(t)
                            })
                        }
                    else n.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e
                    })
                }))
            }, e.prototype.zoomTo = function(e, t) {
                var n;
                t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: n.type,
                    dateMarker: e
                }) : this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e
                })
            }, e.prototype.getUnitViewSpec = function(e) {
                var t, n, r = this.getCurrentData(),
                    o = r.viewSpecs,
                    i = r.toolbarConfig,
                    a = [].concat(i.viewsWithButtons);
                for (var s in o) a.push(s);
                for (t = 0; t < a.length; t += 1)
                    if ((n = o[a[t]]) && n.singleUnit === e) return n;
                return null
            }, e.prototype.prev = function() {
                this.unselect(), this.dispatch({
                    type: "PREV"
                })
            }, e.prototype.next = function() {
                this.unselect(), this.dispatch({
                    type: "NEXT"
                })
            }, e.prototype.prevYear = function() {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, -1)
                })
            }, e.prototype.nextYear = function() {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, 1)
                })
            }, e.prototype.today = function() {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: Zn(e.calendarOptions.now, e.dateEnv)
                })
            }, e.prototype.gotoDate = function(e) {
                var t = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.createMarker(e)
                })
            }, e.prototype.incrementDate = function(e) {
                var t = this.getCurrentData(),
                    n = Ke(e);
                n && (this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.add(t.currentDate, n)
                }))
            }, e.prototype.getDate = function() {
                var e = this.getCurrentData();
                return e.dateEnv.toDate(e.currentDate)
            }, e.prototype.formatDate = function(e, t) {
                var n = this.getCurrentData().dateEnv;
                return n.format(n.createMarker(e), kt(t))
            }, e.prototype.formatRange = function(e, t, n) {
                var r = this.getCurrentData().dateEnv;
                return r.formatRange(r.createMarker(e), r.createMarker(t), kt(n), n)
            }, e.prototype.formatIso = function(e, t) {
                var n = this.getCurrentData().dateEnv;
                return n.formatIso(n.createMarker(e), {
                    omitTime: t
                })
            }, e.prototype.select = function(e, t) {
                var n;
                n = null == t ? null != e.start ? e : {
                    start: e,
                    end: null
                } : {
                    start: e,
                    end: t
                };
                var r = this.getCurrentData(),
                    o = Nn(n, r.dateEnv, Ke({
                        days: 1
                    }));
                o && (this.dispatch({
                    type: "SELECT_DATES",
                    selection: o
                }), Ln(o, null, r))
            }, e.prototype.unselect = function(e) {
                var t = this.getCurrentData();
                t.dateSelection && (this.dispatch({
                    type: "UNSELECT_DATES"
                }), function(e, t) {
                    t.emitter.trigger("unselect", {
                        jsEvent: e ? e.origEvent : null,
                        view: t.viewApi || t.calendarApi.view
                    })
                }(e, t))
            }, e.prototype.addEvent = function(e, t) {
                if (e instanceof Kn) {
                    var n = e._def,
                        r = e._instance;
                    return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: zt({
                            def: n,
                            instance: r
                        })
                    }), this.triggerEventAdd(e)), e
                }
                var o, i = this.getCurrentData();
                if (t instanceof B) o = t.internalEventSource;
                else if ("boolean" == typeof t) t && (o = Be(i.eventSources)[0]);
                else if (null != t) {
                    var a = this.getEventSourceById(t);
                    if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                    o = a.internalEventSource
                }
                var s = tn(e, o, i, !1);
                if (s) {
                    var l = new Kn(i, s.def, s.def.recurringDef ? null : s.instance);
                    return this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: zt(s)
                    }), this.triggerEventAdd(l), l
                }
                return null
            }, e.prototype.triggerEventAdd = function(e) {
                var t = this;
                this.getCurrentData().emitter.trigger("eventAdd", {
                    event: e,
                    relatedEvents: [],
                    revert: function() {
                        t.dispatch({
                            type: "REMOVE_EVENTS",
                            eventStore: Jn(e)
                        })
                    }
                })
            }, e.prototype.getEventById = function(e) {
                var t = this.getCurrentData(),
                    n = t.eventStore,
                    r = n.defs,
                    o = n.instances;
                for (var i in e = String(e), r) {
                    var a = r[i];
                    if (a.publicId === e) {
                        if (a.recurringDef) return new Kn(t, a, null);
                        for (var s in o) {
                            var l = o[s];
                            if (l.defId === a.defId) return new Kn(t, a, l)
                        }
                    }
                }
                return null
            }, e.prototype.getEvents = function() {
                var e = this.getCurrentData();
                return $n(e.eventStore, e)
            }, e.prototype.removeAllEvents = function() {
                this.dispatch({
                    type: "REMOVE_ALL_EVENTS"
                })
            }, e.prototype.getEventSources = function() {
                var e = this.getCurrentData(),
                    t = e.eventSources,
                    n = [];
                for (var r in t) n.push(new B(e, t[r]));
                return n
            }, e.prototype.getEventSourceById = function(e) {
                var t = this.getCurrentData(),
                    n = t.eventSources;
                for (var r in e = String(e), n)
                    if (n[r].publicId === e) return new B(t, n[r]);
                return null
            }, e.prototype.addEventSource = function(e) {
                var t = this.getCurrentData();
                if (e instanceof B) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [e.internalEventSource]
                }), e;
                var n = qn(e, t);
                return n ? (this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [n]
                }), new B(t, n)) : null
            }, e.prototype.removeAllEventSources = function() {
                this.dispatch({
                    type: "REMOVE_ALL_EVENT_SOURCES"
                })
            }, e.prototype.refetchEvents = function() {
                this.dispatch({
                    type: "FETCH_EVENT_SOURCES"
                })
            }, e.prototype.scrollToTime = function(e) {
                var t = Ke(e);
                t && this.trigger("_scrollRequest", {
                    time: t
                })
            }, e
        }(),
        Kn = function() {
            function e(e, t, n) {
                this._context = e, this._def = t, this._instance = n || null
            }
            return e.prototype.setProp = function(e, t) {
                var n, r;
                if (e in Qt) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
                else if (e in $t) t = $t[e](t), this.mutate({
                    standardProps: (n = {}, n[e] = t, n)
                });
                else if (e in Yt) {
                    var o = Yt[e](t);
                    "color" === e ? o = {
                        backgroundColor: t,
                        borderColor: t
                    } : "editable" === e ? o = {
                        startEditable: t,
                        durationEditable: t
                    } : ((r = {})[e] = t, o = r), this.mutate({
                        standardProps: {
                            ui: o
                        }
                    })
                } else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
            }, e.prototype.setExtendedProp = function(e, t) {
                var n;
                this.mutate({
                    extendedProps: (n = {}, n[e] = t, n)
                })
            }, e.prototype.setStart = function(e, t) {
                void 0 === t && (t = {});
                var n = this._context.dateEnv,
                    r = n.createMarker(e);
                if (r && this._instance) {
                    var o = un(this._instance.range.start, r, n, t.granularity);
                    t.maintainDuration ? this.mutate({
                        datesDelta: o
                    }) : this.mutate({
                        startDelta: o
                    })
                }
            }, e.prototype.setEnd = function(e, t) {
                void 0 === t && (t = {});
                var n, r = this._context.dateEnv;
                if ((null == e || (n = r.createMarker(e))) && this._instance)
                    if (n) {
                        var o = un(this._instance.range.end, n, r, t.granularity);
                        this.mutate({
                            endDelta: o
                        })
                    } else this.mutate({
                        standardProps: {
                            hasEnd: !1
                        }
                    })
            }, e.prototype.setDates = function(e, t, n) {
                void 0 === n && (n = {});
                var r, o, i, a = this._context.dateEnv,
                    s = {
                        allDay: n.allDay
                    },
                    l = a.createMarker(e);
                if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                    var u = this._instance.range;
                    !0 === n.allDay && (u = an(u));
                    var c = un(u.start, l, a, n.granularity);
                    if (r) {
                        var d = un(u.end, r, a, n.granularity);
                        i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
                            datesDelta: c,
                            standardProps: s
                        }) : this.mutate({
                            startDelta: c,
                            endDelta: d,
                            standardProps: s
                        })
                    } else s.hasEnd = !1, this.mutate({
                        datesDelta: c,
                        standardProps: s
                    })
                }
            }, e.prototype.moveStart = function(e) {
                var t = Ke(e);
                t && this.mutate({
                    startDelta: t
                })
            }, e.prototype.moveEnd = function(e) {
                var t = Ke(e);
                t && this.mutate({
                    endDelta: t
                })
            }, e.prototype.moveDates = function(e) {
                var t = Ke(e);
                t && this.mutate({
                    datesDelta: t
                })
            }, e.prototype.setAllDay = function(e, t) {
                void 0 === t && (t = {});
                var n = {
                        allDay: e
                    },
                    r = t.maintainDuration;
                null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
                    standardProps: n
                })
            }, e.prototype.formatRange = function(e) {
                var t = this._context.dateEnv,
                    n = this._instance,
                    r = kt(e);
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                    forcedStartTzo: n.forcedStartTzo,
                    forcedEndTzo: n.forcedEndTzo
                }) : t.format(n.range.start, r, {
                    forcedTzo: n.forcedStartTzo
                })
            }, e.prototype.mutate = function(t) {
                var n = this._instance;
                if (n) {
                    var r = this._def,
                        o = this._context,
                        i = o.getCurrentData().eventStore,
                        a = Vt(i, n.instanceId);
                    a = zn(a, {
                        "": {
                            display: "",
                            startEditable: !0,
                            durationEditable: !0,
                            constraints: [],
                            overlap: null,
                            allows: [],
                            backgroundColor: "",
                            borderColor: "",
                            textColor: "",
                            classNames: []
                        }
                    }, t, o);
                    var s = new e(o, r, n);
                    this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], o.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: a
                    }), o.emitter.trigger("eventChange", {
                        oldEvent: s,
                        event: this,
                        relatedEvents: $n(a, o, n),
                        revert: function() {
                            o.dispatch({
                                type: "RESET_EVENTS",
                                eventStore: i
                            })
                        }
                    })
                }
            }, e.prototype.remove = function() {
                var e = this._context,
                    t = Jn(this);
                e.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: t
                }), e.emitter.trigger("eventRemove", {
                    event: this,
                    relatedEvents: [],
                    revert: function() {
                        e.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: t
                        })
                    }
                })
            }, Object.defineProperty(e.prototype, "source", {
                get: function() {
                    var e = this._def.sourceId;
                    return e ? new B(this._context, this._context.getCurrentData().eventSources[e]) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "start", {
                get: function() {
                    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "end", {
                get: function() {
                    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "startStr", {
                get: function() {
                    var e = this._instance;
                    return e ? this._context.dateEnv.formatIso(e.range.start, {
                        omitTime: this._def.allDay,
                        forcedTzo: e.forcedStartTzo
                    }) : ""
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "endStr", {
                get: function() {
                    var e = this._instance;
                    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                        omitTime: this._def.allDay,
                        forcedTzo: e.forcedEndTzo
                    }) : ""
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return this._def.publicId
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "groupId", {
                get: function() {
                    return this._def.groupId
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allDay", {
                get: function() {
                    return this._def.allDay
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "title", {
                get: function() {
                    return this._def.title
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this._def.url
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "display", {
                get: function() {
                    return this._def.ui.display || "auto"
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "startEditable", {
                get: function() {
                    return this._def.ui.startEditable
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "durationEditable", {
                get: function() {
                    return this._def.ui.durationEditable
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "constraint", {
                get: function() {
                    return this._def.ui.constraints[0] || null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "overlap", {
                get: function() {
                    return this._def.ui.overlap
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allow", {
                get: function() {
                    return this._def.ui.allows[0] || null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "backgroundColor", {
                get: function() {
                    return this._def.ui.backgroundColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "borderColor", {
                get: function() {
                    return this._def.ui.borderColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textColor", {
                get: function() {
                    return this._def.ui.textColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "classNames", {
                get: function() {
                    return this._def.ui.classNames
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "extendedProps", {
                get: function() {
                    return this._def.extendedProps
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.toPlainObject = function(e) {
                void 0 === e && (e = {});
                var t = this._def,
                    n = t.ui,
                    o = this.startStr,
                    i = this.endStr,
                    a = {};
                return t.title && (a.title = t.title), o && (a.start = o), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && "auto" !== n.display && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(a, t.extendedProps) : a.extendedProps = t.extendedProps), a
            }, e.prototype.toJSON = function() {
                return this.toPlainObject()
            }, e
        }();

    function Jn(e) {
        var t, n, r = e._def,
            o = e._instance;
        return {
            defs: (t = {}, t[r.defId] = r, t),
            instances: o ? (n = {}, n[o.instanceId] = o, n) : {}
        }
    }

    function $n(e, t, n) {
        var r = e.defs,
            o = e.instances,
            i = [],
            a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s],
                u = r[l.defId];
            l.instanceId !== a && i.push(new Kn(t, u, l))
        }
        return i
    }
    var Qn = {};
    var er, tr = function() {
        function e() {}
        return e.prototype.getMarkerYear = function(e) {
            return e.getUTCFullYear()
        }, e.prototype.getMarkerMonth = function(e) {
            return e.getUTCMonth()
        }, e.prototype.getMarkerDay = function(e) {
            return e.getUTCDate()
        }, e.prototype.arrayToMarker = function(e) {
            return Ie(e)
        }, e.prototype.markerToArray = function(e) {
            return Pe(e)
        }, e
    }();
    er = tr, Qn["gregory"] = er;
    var nr = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function rr(e) {
        var t = nr.exec(e);
        if (t) {
            var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
            if (_e(n)) {
                var r = null;
                return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: r
                }
            }
        }
        return null
    }
    var or = function() {
            function e(e) {
                var t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function(e) {
                    return new Qn[e]
                }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
            }
            return e.prototype.createMarker = function(e) {
                var t = this.createMarkerMeta(e);
                return null === t ? null : t.marker
            }, e.prototype.createNowMarker = function() {
                return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : Ie(Me(new Date))
            }, e.prototype.createMarkerMeta = function(e) {
                if ("string" == typeof e) return this.parse(e);
                var t = null;
                return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Ie(e)), null !== t && _e(t) ? {
                    marker: t,
                    isTimeUnspecified: !1,
                    forcedTzo: null
                } : null
            }, e.prototype.parse = function(e) {
                var t = rr(e);
                if (null === t) return null;
                var n = t.marker,
                    r = null;
                return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
                    marker: n,
                    isTimeUnspecified: t.isTimeUnspecified,
                    forcedTzo: r
                }
            }, e.prototype.getYear = function(e) {
                return this.calendarSystem.getMarkerYear(e)
            }, e.prototype.getMonth = function(e) {
                return this.calendarSystem.getMarkerMonth(e)
            }, e.prototype.add = function(e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.subtract = function(e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.addYears = function(e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] += t, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.addMonths = function(e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[1] += t, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.diffWholeYears = function(e, t) {
                var n = this.calendarSystem;
                return Ne(e) === Ne(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
            }, e.prototype.diffWholeMonths = function(e, t) {
                var n = this.calendarSystem;
                return Ne(e) === Ne(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
            }, e.prototype.greatestWholeUnit = function(e, t) {
                var n = this.diffWholeYears(e, t);
                return null !== n ? {
                    unit: "year",
                    value: n
                } : null !== (n = this.diffWholeMonths(e, t)) ? {
                    unit: "month",
                    value: n
                } : null !== (n = Re(e, t)) ? {
                    unit: "week",
                    value: n
                } : null !== (n = De(e, t)) ? {
                    unit: "day",
                    value: n
                } : he(n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 36e5
                }(e, t)) ? {
                    unit: "hour",
                    value: n
                } : he(n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 6e4
                }(e, t)) ? {
                    unit: "minute",
                    value: n
                } : he(n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 1e3
                }(e, t)) ? {
                    unit: "second",
                    value: n
                } : {
                    unit: "millisecond",
                    value: t.valueOf() - e.valueOf()
                }
            }, e.prototype.countDurationsBetween = function(e, t, n) {
                var r;
                return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (tt(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function(e) {
                    return tt(e) / 30
                }(n) : n.days && null !== (r = De(e, t)) ? r / tt(n) : (t.valueOf() - e.valueOf()) / ot(n)
            }, e.prototype.startOf = function(e, t) {
                return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? we(e) : "hour" === t ? function(e) {
                    return Ie([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
                }(e) : "minute" === t ? function(e) {
                    return Ie([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
                }(e) : "second" === t ? function(e) {
                    return Ie([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
                }(e) : null
            }, e.prototype.startOfYear = function(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
            }, e.prototype.startOfMonth = function(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
            }, e.prototype.startOfWeek = function(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
            }, e.prototype.computeWeekNumber = function(e) {
                return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
                    var r = e.getUTCFullYear(),
                        o = Te(e, r, t, n);
                    if (o < 1) return Te(e, r - 1, t, n);
                    var i = Te(e, r + 1, t, n);
                    return i >= 1 ? Math.min(o, i) : o
                }(e, this.weekDow, this.weekDoy)
            }, e.prototype.format = function(e, t, n) {
                return void 0 === n && (n = {}), t.format({
                    marker: e,
                    timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
                }, this)
            }, e.prototype.formatRange = function(e, t, n, r) {
                return void 0 === r && (r = {}), r.isEndExclusive && (t = Se(t, -1)), n.formatRange({
                    marker: e,
                    timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
                }, {
                    marker: t,
                    timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
                }, this, r.defaultSeparator)
            }, e.prototype.formatIso = function(e, t) {
                void 0 === t && (t = {});
                var n = null;
                return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
                    function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r = e.toISOString();
                        return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", ut(t, !0)))), r
                    }(e, n, t.omitTime)
            }, e.prototype.timestampToMarker = function(e) {
                return "local" === this.timeZone ? Ie(Me(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Ie(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
            }, e.prototype.offsetForMarker = function(e) {
                return "local" === this.timeZone ? -ke(Pe(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Pe(e)) : null
            }, e.prototype.toDate = function(e, t) {
                return "local" === this.timeZone ? ke(Pe(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Pe(e)) * 60) : new Date(e.valueOf() - (t || 0))
            }, e
        }(),
        ir = [],
        ar = {
            code: "en",
            week: {
                dow: 0,
                doy: 4
            },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list"
            },
            weekText: "W",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display"
        };

    function sr(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = ir.concat(e), r = {
                en: ar
            }, o = 0, i = n; o < i.length; o++) {
            var a = i[o];
            r[a.code] = a
        }
        return {
            map: r,
            defaultCode: t
        }
    }

    function lr(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function(e, t) {
            var n = [].concat(e || []),
                r = function(e, t) {
                    for (var n = 0; n < e.length; n += 1)
                        for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                            var i = r.slice(0, o).join("-");
                            if (t[i]) return t[i]
                        }
                    return null
                }(n, t) || ar;
            return ur(e, n, r)
        }(e, t) : ur(e.code, [e.code], e)
    }

    function ur(e, t, n) {
        var r = We([ar, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week, {
            codeArg: e,
            codes: t,
            week: o,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r
        }
    }

    function cr(e) {
        var t = lr(e.locale || "en", sr([]).map);
        return new or(r(r({
            timeZone: It.timeZone,
            calendarSystem: "gregory"
        }, e), {
            locale: t
        }))
    }
    var dr, pr = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };

    function fr(e, t) {
        return Bt(function(e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((function(e) {
                return e.daysOfWeek
            })) : "object" == typeof e && e ? [e] : [];
            return t = t.map((function(e) {
                return r(r({}, pr), e)
            }))
        }(e), null, t)
    }

    function hr(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }

    function gr(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function vr(e, t, n) {
        return {
            left: e.left + t,
            right: e.right + t,
            top: e.top + n,
            bottom: e.bottom + n
        }
    }

    function mr(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        }
    }

    function yr(e) {
        return {
            left: (e.left + e.right) / 2,
            top: (e.top + e.bottom) / 2
        }
    }

    function Sr(e, t) {
        return {
            left: e.left - t.left,
            top: e.top - t.top
        }
    }

    function Er() {
        return null == dr && (dr = function() {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
            var t = e.querySelector("div").offsetHeight > 0;
            return document.body.removeChild(e), t
        }()), dr
    }
    var Cr = {
            defs: {},
            instances: {}
        },
        br = function() {
            function e() {
                this.getKeysForEventDefs = pt(this._getKeysForEventDefs), this.splitDateSelection = pt(this._splitDateSpan), this.splitEventStore = pt(this._splitEventStore), this.splitIndividualUi = pt(this._splitIndividualUi), this.splitEventDrag = pt(this._splitInteraction), this.splitEventResize = pt(this._splitInteraction), this.eventUiBuilders = {}
            }
            return e.prototype.splitProps = function(e) {
                var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    o = this.splitDateSelection(e.dateSelection),
                    i = this.splitIndividualUi(e.eventUiBases, r),
                    a = this.splitEventStore(e.eventStore, r),
                    s = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    u = {};
                for (var c in this.eventUiBuilders = Le(n, (function(e, n) {
                        return t.eventUiBuilders[n] || pt(Rr)
                    })), n) {
                    var d = n[c],
                        p = a[c] || Cr,
                        f = this.eventUiBuilders[c];
                    u[c] = {
                        businessHours: d.businessHours || e.businessHours,
                        dateSelection: o[c] || null,
                        eventStore: p,
                        eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                        eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                        eventDrag: s[c] || null,
                        eventResize: l[c] || null
                    }
                }
                return u
            }, e.prototype._splitDateSpan = function(e) {
                var t = {};
                if (e)
                    for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                        t[r[n]] = e
                    }
                return t
            }, e.prototype._getKeysForEventDefs = function(e) {
                var t = this;
                return Le(e.defs, (function(e) {
                    return t.getKeysForEventDef(e)
                }))
            }, e.prototype._splitEventStore = function(e, t) {
                var n = e.defs,
                    r = e.instances,
                    o = {};
                for (var i in n)
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                        o[p = s[a]] || (o[p] = {
                            defs: {},
                            instances: {}
                        }), o[p].defs[i] = n[i]
                    }
                for (var l in r)
                    for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                        var p;
                        o[p = d[c]] && (o[p].instances[l] = u)
                    }
                return o
            }, e.prototype._splitIndividualUi = function(e, t) {
                var n = {};
                for (var r in e)
                    if (r)
                        for (var o = 0, i = t[r]; o < i.length; o++) {
                            var a = i[o];
                            n[a] || (n[a] = {}), n[a][r] = e[r]
                        }
                return n
            }, e.prototype._splitInteraction = function(e) {
                var t = {};
                if (e) {
                    var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        o = this._splitEventStore(e.mutatedEvents, r),
                        i = function(r) {
                            t[r] || (t[r] = {
                                affectedEvents: n[r] || Cr,
                                mutatedEvents: o[r] || Cr,
                                isEvent: e.isEvent
                            })
                        };
                    for (var a in n) i(a);
                    for (var a in o) i(a)
                }
                return t
            }, e
        }();

    function Rr(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = {
            "": Kt(o)
        };
        return n && r(i, n), i
    }

    function Dr(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !vn(r.activeRange, e)),
            isOther: Boolean(r && !vn(r.currentRange, e)),
            isToday: Boolean(t && vn(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end)
        }
    }

    function wr(e, t) {
        var n = ["fc-day", "fc-day-" + ve[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
    }

    function Tr(e, t) {
        var n = ["fc-slot", "fc-slot-" + ve[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
    }

    function xr(e, t) {
        return void 0 === t && (t = "day"), JSON.stringify({
            date: st(e),
            type: t
        })
    }
    var Mr, kr = null;

    function Pr() {
        return null === kr && (kr = function() {
            var e = document.createElement("div");
            Y(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }), e.innerHTML = "<div></div>", document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return z(e), t
        }()), kr
    }

    function Ir() {
        return Mr || (Mr = function() {
            var e = document.createElement("div");
            e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
            var t = _r(e);
            return document.body.removeChild(e), t
        }()), Mr
    }

    function _r(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth
        }
    }

    function Nr(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = _r(e),
            l = s.y - r - o,
            u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return Pr() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
    }

    function Hr(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : Or(e),
            o = Nr(e, t),
            i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom
            };
        return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i
    }

    function Or(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }

    function Wr(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
        }
        return t
    }

    function Ar(e, t, n) {
        var r = !1,
            o = function() {
                r || (r = !0, t.apply(this, arguments))
            },
            i = function() {
                r || (r = !0, n && n.apply(this, arguments))
            },
            a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }
    var Lr = function() {
        function e() {
            this.handlers = {}, this.thisContext = null
        }
        return e.prototype.setThisContext = function(e) {
            this.thisContext = e
        }, e.prototype.setOptions = function(e) {
            this.options = e
        }, e.prototype.on = function(e, t) {
            ! function(e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        }, e.prototype.off = function(e, t) {
            ! function(e, t, n) {
                n ? e[t] && (e[t] = e[t].filter((function(e) {
                    return e !== n
                }))) : delete e[t]
            }(this.handlers, e, t)
        }, e.prototype.trigger = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
                var l = s[a];
                l.apply(this.thisContext, t)
            }
        }, e.prototype.hasHandlers = function(e) {
            return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
        }, e
    }();
    var Ur = function() {
            function e(e, t, n, r) {
                this.els = t;
                var o = this.originClientRect = e.getBoundingClientRect();
                n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top)
            }
            return e.prototype.buildElHorizontals = function(e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.left - e), n.push(i.right - e)
                }
                this.lefts = t, this.rights = n
            }, e.prototype.buildElVerticals = function(e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.top - e), n.push(i.bottom - e)
                }
                this.tops = t, this.bottoms = n
            }, e.prototype.leftToIndex = function(e) {
                var t, n = this.lefts,
                    r = this.rights,
                    o = n.length;
                for (t = 0; t < o; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.topToIndex = function(e) {
                var t, n = this.tops,
                    r = this.bottoms,
                    o = n.length;
                for (t = 0; t < o; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.getWidth = function(e) {
                return this.rights[e] - this.lefts[e]
            }, e.prototype.getHeight = function(e) {
                return this.bottoms[e] - this.tops[e]
            }, e
        }(),
        Br = function() {
            function e() {}
            return e.prototype.getMaxScrollTop = function() {
                return this.getScrollHeight() - this.getClientHeight()
            }, e.prototype.getMaxScrollLeft = function() {
                return this.getScrollWidth() - this.getClientWidth()
            }, e.prototype.canScrollVertically = function() {
                return this.getMaxScrollTop() > 0
            }, e.prototype.canScrollHorizontally = function() {
                return this.getMaxScrollLeft() > 0
            }, e.prototype.canScrollUp = function() {
                return this.getScrollTop() > 0
            }, e.prototype.canScrollDown = function() {
                return this.getScrollTop() < this.getMaxScrollTop()
            }, e.prototype.canScrollLeft = function() {
                return this.getScrollLeft() > 0
            }, e.prototype.canScrollRight = function() {
                return this.getScrollLeft() < this.getMaxScrollLeft()
            }, e
        }(),
        zr = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.el = t, n
            }
            return n(t, e), t.prototype.getScrollTop = function() {
                return this.el.scrollTop
            }, t.prototype.getScrollLeft = function() {
                return this.el.scrollLeft
            }, t.prototype.setScrollTop = function(e) {
                this.el.scrollTop = e
            }, t.prototype.setScrollLeft = function(e) {
                this.el.scrollLeft = e
            }, t.prototype.getScrollWidth = function() {
                return this.el.scrollWidth
            }, t.prototype.getScrollHeight = function() {
                return this.el.scrollHeight
            }, t.prototype.getClientHeight = function() {
                return this.el.clientHeight
            }, t.prototype.getClientWidth = function() {
                return this.el.clientWidth
            }, t
        }(Br),
        Vr = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getScrollTop = function() {
                return window.pageYOffset
            }, t.prototype.getScrollLeft = function() {
                return window.pageXOffset
            }, t.prototype.setScrollTop = function(e) {
                window.scroll(window.pageXOffset, e)
            }, t.prototype.setScrollLeft = function(e) {
                window.scroll(e, window.pageYOffset)
            }, t.prototype.getScrollWidth = function() {
                return document.documentElement.scrollWidth
            }, t.prototype.getScrollHeight = function() {
                return document.documentElement.scrollHeight
            }, t.prototype.getClientHeight = function() {
                return document.documentElement.clientHeight
            }, t.prototype.getClientWidth = function() {
                return document.documentElement.clientWidth
            }, t
        }(Br),
        Fr = function() {
            function e(e) {
                this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
            }
            return e.prototype.setIconOverride = function(e) {
                var t, n;
                if ("object" == typeof e && e) {
                    for (n in t = r({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else !1 === e && (this.iconClasses = {})
            }, e.prototype.applyIconOverridePrefix = function(e) {
                var t = this.iconOverridePrefix;
                return t && 0 !== e.indexOf(t) && (e = t + e), e
            }, e.prototype.getClass = function(e) {
                return this.classes[e] || ""
            }, e.prototype.getIconClass = function(e, t) {
                var n;
                return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
            }, e.prototype.getCustomButtonIconClass = function(e) {
                var t;
                return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
            }, e
        }();
    if (Fr.prototype.classes = {}, Fr.prototype.iconClasses = {}, Fr.prototype.baseIconClass = "", Fr.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var jr = FullCalendarVDom.Component,
        Gr = FullCalendarVDom.createElement,
        qr = FullCalendarVDom.render,
        Yr = FullCalendarVDom.createRef,
        Zr = FullCalendarVDom.Fragment,
        Xr = FullCalendarVDom.createContext,
        Kr = FullCalendarVDom.flushToDom,
        Jr = FullCalendarVDom.unmountComponentAtNode,
        $r = function() {
            function e(e, t, n) {
                var o = this;
                this.execFunc = e, this.emitter = t, this.scrollTime = n, this.handleScrollRequest = function(e) {
                    o.queuedRequest = r({}, o.queuedRequest || {}, e), o.drain()
                }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
            }
            return e.prototype.detach = function() {
                this.emitter.off("_scrollRequest", this.handleScrollRequest)
            }, e.prototype.update = function(e) {
                e ? this.fireInitialScroll() : this.drain()
            }, e.prototype.fireInitialScroll = function() {
                this.handleScrollRequest({
                    time: this.scrollTime
                })
            }, e.prototype.drain = function() {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
            }, e
        }(),
        Qr = Xr({});

    function eo(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function(e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function(e) {
                u.off("_resize", e)
            },
            createScrollResponder: function(e) {
                return new $r(e, u, Ke(n.scrollTime))
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }
    var to = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
            return this.debug && console.log(Ve(e, this.props), Ve(t, this.state)), !Fe(this.props, e, this.propEquality) || !Fe(this.state, t, this.stateEquality)
        }, t.addPropsEquality = ro, t.addStateEquality = oo, t.contextType = Qr, t
    }(jr);
    to.prototype.propEquality = {}, to.prototype.stateEquality = {};
    var no = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.contextType = Qr, t
    }(to);

    function ro(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), this.prototype.propEquality = t
    }

    function oo(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), this.prototype.stateEquality = t
    }

    function io(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }

    function ao(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return function(e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = Bt(function(e, t, n) {
                            var r = n.options.eventDataTransform,
                                o = t ? t.eventDataTransform : null;
                            o && (e = so(e, o));
                            r && (e = so(e, r));
                            return e
                        }(o, t, i), t, i);
                        return r && (a = qe(a, r, i)), jt(lo(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return function(e, t, n, r) {
                    n && (t = qe(t, n, r));
                    return jt(e, t)
                }(e, t.eventStore, r ? r.activeRange : null, o);
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return jt(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? qe(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return function(e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return {
                        defs: o,
                        instances: i
                    }
                }(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return lo(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return Gt(e, (function(e) {
                    return !e.sourceId
                }));
            case "REMOVE_ALL_EVENTS":
                return {
                    defs: {}, instances: {}
                };
            default:
                return e
        }
    }

    function so(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            }
        } else n = e;
        return n
    }

    function lo(e, t) {
        return Gt(e, (function(e) {
            return e.sourceId !== t
        }))
    }

    function uo(e, t) {
        return co({
            eventDrag: e
        }, t)
    }

    function co(e, t) {
        var n = t.getCurrentData(),
            o = r({
                businessHours: n.businessHours,
                dateSelection: "",
                eventStore: n.eventStore,
                eventUiBases: n.eventUiBases,
                eventSelection: "",
                eventDrag: null,
                eventResize: null
            }, e);
        return (t.pluginHooks.isPropsValid || po)(o, t)
    }

    function po(e, t, n, o) {
        return void 0 === n && (n = {}), !(e.eventDrag && ! function(e, t, n, o) {
            var i = t.getCurrentData(),
                a = e.eventDrag,
                s = a.mutatedEvents,
                l = s.defs,
                u = s.instances,
                c = Cn(l, a.isEvent ? e.eventUiBases : {
                    "": i.selectionConfig
                });
            o && (c = Le(c, o));
            var d = (g = e.eventStore, v = a.affectedEvents.instances, {
                    defs: g.defs,
                    instances: Ae(g.instances, (function(e) {
                        return !v[e.instanceId]
                    }))
                }),
                p = d.defs,
                f = d.instances,
                h = Cn(p, e.eventUiBases);
            var g, v;
            for (var m in u) {
                var y = u[m],
                    S = y.range,
                    E = c[y.defId],
                    C = l[y.defId];
                if (!fo(E.constraints, S, d, e.businessHours, t)) return !1;
                var b = t.options.eventOverlap,
                    R = "function" == typeof b ? b : null;
                for (var D in f) {
                    var w = f[D];
                    if (hn(S, w.range)) {
                        if (!1 === h[w.defId].overlap && a.isEvent) return !1;
                        if (!1 === E.overlap) return !1;
                        if (R && !R(new Kn(t, p[w.defId], w), new Kn(t, C, y))) return !1
                    }
                }
                for (var T = i.eventStore, x = 0, M = E.allows; x < M.length; x++) {
                    var k = M[x],
                        P = r(r({}, n), {
                            range: y.range,
                            allDay: C.allDay
                        }),
                        I = T.defs[C.defId],
                        _ = T.instances[m],
                        N = void 0;
                    if (N = I ? new Kn(t, I, _) : new Kn(t, C), !k(Un(P, t), N)) return !1
                }
            }
            return !0
        }(e, t, n, o)) && !(e.dateSelection && ! function(e, t, n, o) {
            var i = e.eventStore,
                a = i.defs,
                s = i.instances,
                l = e.dateSelection,
                u = l.range,
                c = t.getCurrentData().selectionConfig;
            o && (c = o(c));
            if (!fo(c.constraints, u, i, e.businessHours, t)) return !1;
            var d = t.options.selectOverlap,
                p = "function" == typeof d ? d : null;
            for (var f in s) {
                var h = s[f];
                if (hn(u, h.range)) {
                    if (!1 === c.overlap) return !1;
                    if (p && !p(new Kn(t, a[h.defId], h), null)) return !1
                }
            }
            for (var g = 0, v = c.allows; g < v.length; g++) {
                var m = v[g],
                    y = r(r({}, n), l);
                if (!m(Un(y, t), null)) return !1
            }
            return !0
        }(e, t, n, o))
    }

    function fo(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!vo(ho(a[i], t, n, r, o), t)) return !1
        }
        return !0
    }

    function ho(e, t, n, r, o) {
        return "businessHours" === e ? go(qe(r, t, o)) : "string" == typeof e ? go(Gt(n, (function(t) {
            return t.groupId === e
        }))) : "object" == typeof e && e ? go(qe(e, t, o)) : []
    }

    function go(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function vo(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (gn(r[n], t)) return !0
        }
        return !1
    }
    var mo = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = te(), t
        }
        return n(t, e), t.prototype.prepareHits = function() {}, t.prototype.queryHit = function(e, t, n, r) {
            return null
        }, t.prototype.isInteractionValid = function(e) {
            var t = this.props.dateProfile,
                n = e.mutatedEvents.instances;
            if (t)
                for (var r in n)
                    if (!gn(t.validRange, n[r].range)) return !1;
            return uo(e, this.context)
        }, t.prototype.isDateSelectionValid = function(e) {
            var t, n, r = this.props.dateProfile;
            return !(r && !gn(r.validRange, e.range)) && (t = e, n = this.context, co({
                dateSelection: t
            }, n))
        }, t.prototype.isValidSegDownEl = function(e) {
            return !this.props.eventDrag && !this.props.eventResize && !V(e, ".fc-event-mirror")
        }, t.prototype.isValidDateDownEl = function(e) {
            return !(V(e, ".fc-event:not(.fc-bg-event)") || V(e, ".fc-daygrid-more-link") || V(e, "a[data-navlink]") || V(e, ".fc-popover"))
        }, t
    }(no);

    function yo(e) {
        return {
            id: te(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }

    function So() {
        var e, t = [],
            n = [];
        return function(o, i) {
            return e && dt(o, t) && dt(i, n) || (e = function(e, t) {
                var n = {},
                    o = {
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        eventResizeJoinTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };

                function i(e) {
                    for (var t = 0, a = e; t < a.length; t++) {
                        var s = a[t];
                        n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
                            reducers: (l = o).reducers.concat(u.reducers),
                            isLoadingFuncs: l.isLoadingFuncs.concat(u.isLoadingFuncs),
                            contextInit: l.contextInit.concat(u.contextInit),
                            eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                            eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
                            eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                            isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
                            eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
                            eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
                            dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
                            datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
                            dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
                            views: r(r({}, l.views), u.views),
                            viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
                            isPropsValid: u.isPropsValid || l.isPropsValid,
                            externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
                            eventResizeJoinTransforms: l.eventResizeJoinTransforms.concat(u.eventResizeJoinTransforms),
                            viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
                            eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
                            calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
                            componentInteractions: l.componentInteractions.concat(u.componentInteractions),
                            themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                            eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
                            cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                            recurringTypes: l.recurringTypes.concat(u.recurringTypes),
                            namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                            initialView: l.initialView || u.initialView,
                            elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                            optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                            scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                            contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                            listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                            optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                            propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers)
                        })
                    }
                    var l, u
                }
                return e && i(e), i(t), o
            }(o, i)), t = o, n = i, e
        }
    }
    var Eo = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t
    }(Fr);

    function Co(e, t, n, o) {
        if (t[e]) return t[e];
        var i = function(e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function(e) {
                    return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                c = Co(u, t, n, o)
            }!l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {})
            }
        }(e, t, n, o);
        return i && (t[e] = i), i
    }
    Eo.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    }, Eo.prototype.baseIconClass = "fc-icon", Eo.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    }, Eo.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    }, Eo.prototype.iconOverrideOption = "buttonIcons", Eo.prototype.iconOverrideCustomButtonOption = "icon", Eo.prototype.iconOverridePrefix = "fc-icon-";
    var bo = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t.handleRootEl = function(e) {
                    io(t.rootElRef, e), t.props.elRef && io(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.hookProps;
                return Gr(To, {
                    hookProps: n,
                    didMount: t.didMount,
                    willUnmount: t.willUnmount,
                    elRef: this.handleRootEl
                }, (function(r) {
                    return Gr(Do, {
                        hookProps: n,
                        content: t.content,
                        defaultContent: t.defaultContent,
                        backupElRef: e.rootElRef
                    }, (function(e, o) {
                        return t.children(r, Mo(t.classNames, n), e, o)
                    }))
                }))
            }, t
        }(no),
        Ro = Xr(0);

    function Do(e) {
        return Gr(Ro.Consumer, null, (function(t) {
            return Gr(wo, r({
                renderId: t
            }, e))
        }))
    }
    var wo = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.innerElRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                return this.props.children(this.innerElRef, this.renderInnerContent())
            }, t.prototype.componentDidMount = function() {
                this.updateCustomContent()
            }, t.prototype.componentDidUpdate = function() {
                this.updateCustomContent()
            }, t.prototype.componentWillUnmount = function() {
                this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
            }, t.prototype.renderInnerContent = function() {
                var e = this.context.pluginHooks.contentTypeHandlers,
                    t = this.props,
                    n = this.customContentInfo,
                    o = ko(t.content, t.hookProps),
                    i = null;
                if (void 0 === o && (o = ko(t.defaultContent, t.hookProps)), void 0 !== o) {
                    if (n) n.contentVal = o[n.contentKey];
                    else if ("object" == typeof o)
                        for (var a in e)
                            if (void 0 !== o[a]) {
                                var s = e[a]();
                                n = this.customContentInfo = r({
                                    contentKey: a,
                                    contentVal: o[a]
                                }, s);
                                break
                            } i = n ? [] : o
                }
                return i
            }, t.prototype.updateCustomContent = function() {
                this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
            }, t
        }(no),
        To = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function(e) {
                    t.rootEl = e, t.props.elRef && io(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                return this.props.children(this.handleRootEl)
            }, t.prototype.componentDidMount = function() {
                var e = this.props.didMount;
                e && e(r(r({}, this.props.hookProps), {
                    el: this.rootEl
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this.props.willUnmount;
                e && e(r(r({}, this.props.hookProps), {
                    el: this.rootEl
                }))
            }, t
        }(no);

    function xo() {
        var e, t, n = [];
        return function(r, o) {
            return t && ze(t, o) && r === e || (e = r, t = o, n = Mo(r, o)), n
        }
    }

    function Mo(e, t) {
        return "function" == typeof e && (e = e(t)), qt(e)
    }

    function ko(e, t) {
        return "function" == typeof e ? e(t, Gr) : e
    }
    var Po = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = xo(), t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = {
                    view: t.viewApi
                },
                o = this.normalizeClassNames(n.viewClassNames, r);
            return Gr(To, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, (function(t) {
                return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o))
            }))
        }, t
    }(no);

    function Io(e) {
        return Le(e, _o)
    }

    function _o(e) {
        var t, n = "function" == typeof e ? {
                component: e
            } : e,
            o = n.component;
        return n.content && (t = n, o = function(e) {
            return Gr(Qr.Consumer, null, (function(n) {
                return Gr(Po, {
                    viewSpec: n.viewSpec
                }, (function(o, i) {
                    var a = r(r({}, e), {
                        nextDayThreshold: n.options.nextDayThreshold
                    });
                    return Gr(bo, {
                        hookProps: a,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: o
                    }, (function(e, t, n, r) {
                        return Gr("div", {
                            className: i.concat(t).join(" "),
                            ref: e
                        }, r)
                    }))
                }))
            }))
        }), {
            superType: n.type,
            component: o,
            rawOptions: n
        }
    }

    function No(e, t, n, o) {
        var i = Io(e),
            a = Io(t.views);
        return Le(function(e, t) {
            var n, r = {};
            for (n in e) Co(n, r, e, t);
            for (n in t) Co(n, r, e, t);
            return r
        }(i, a), (function(e) {
            return function(e, t, n, o, i) {
                var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration,
                    s = null,
                    l = "",
                    u = "",
                    c = {};
                if (a && (s = function(e) {
                        var t = JSON.stringify(e),
                            n = Ho[t];
                        void 0 === n && (n = Ke(e), Ho[t] = n);
                        return n
                    }(a))) {
                    var d = at(s);
                    l = d.unit, 1 === d.value && (u = l, c = t[l] ? t[l].rawOptions : {})
                }
                var p = function(t) {
                    var n = t.buttonText || {},
                        r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault: p(i) || e.defaults.buttonText || p(It) || e.type
                }
            }(e, a, t, n, o)
        }))
    }
    var Ho = {};
    var Oo = function() {
        function e(e) {
            this.props = e, this.nowDate = Zn(e.nowInput, e.dateEnv), this.initHiddenDays()
        }
        return e.prototype.buildPrev = function(e, t, n) {
            var r = this.props.dateEnv,
                o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        }, e.prototype.buildNext = function(e, t, n) {
            var r = this.props.dateEnv,
                o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        }, e.prototype.build = function(e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, s, l, u, c, d = this.props;
            return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = pn(s, o.range)), s = pn(s = this.adjustActiveRange(s), r), l = hn(o.range, r), {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        }, e.prototype.buildValidRange = function() {
            var e = this.props.validRangeInput,
                t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
            return this.refineRange(t) || {
                start: null,
                end: null
            }
        }, e.prototype.buildCurrentRangeInfo = function(e, t) {
            var n, r = this.props,
                o = null,
                i = null,
                a = null;
            return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = at(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
                duration: o,
                unit: i,
                range: a
            }
        }, e.prototype.getFallbackDuration = function() {
            return Ke({
                day: 1
            })
        }, e.prototype.adjustActiveRange = function(e) {
            var t = this.props,
                n = t.dateEnv,
                r = t.usesMinMaxTime,
                o = t.slotMinTime,
                i = t.slotMaxTime,
                a = e.start,
                s = e.end;
            return r && (tt(o) < 0 && (a = we(a), a = n.add(a, o)), tt(i) > 1 && (s = ye(s = we(s), -1), s = n.add(s, i))), {
                start: a,
                end: s
            }
        }, e.prototype.buildRangeFromDuration = function(e, t, n, r) {
            var o, i, a, s = this.props,
                l = s.dateEnv,
                u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && ot(c) < ot(n) ? at(c).unit : r
            }

            function d() {
                o = l.startOf(e, u), i = l.add(o, n), a = {
                    start: o,
                    end: i
                }
            }
            return tt(n) <= 1 && this.isHiddenDay(o) && (o = we(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a
        }, e.prototype.buildRangeFromDayCount = function(e, t, n) {
            var r, o = this.props,
                i = o.dateEnv,
                a = o.dateAlignment,
                s = 0,
                l = e;
            a && (l = i.startOf(l, a)), l = we(l), r = l = this.skipHiddenDays(l, t);
            do {
                r = ye(r, 1), this.isHiddenDay(r) || (s += 1)
            } while (s < n);
            return {
                start: l,
                end: r
            }
        }, e.prototype.buildCustomVisibleRange = function(e) {
            var t = this.props,
                n = t.visibleRangeInput,
                r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
                o = this.refineRange(r);
            return !o || null != o.start && null != o.end ? o : null
        }, e.prototype.buildRenderRange = function(e, t, n) {
            return e
        }, e.prototype.buildDateIncrement = function(e) {
            var t, n = this.props.dateIncrement;
            return n || ((t = this.props.dateAlignment) ? Ke(1, t) : e || Ke({
                days: 1
            }))
        }, e.prototype.refineRange = function(e) {
            if (e) {
                var t = (n = e, r = this.props.dateEnv, o = null, i = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
                    start: o,
                    end: i
                } : null);
                return t && (t = sn(t)), t
            }
            var n, r, o, i;
            return null
        }, e.prototype.initHiddenDays = function() {
            var e, t = this.props.hiddenDays || [],
                n = [],
                r = 0;
            for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)(n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }, e.prototype.trimHiddenDays = function(e) {
            var t = e.start,
                n = e.end;
            return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
                start: t,
                end: n
            } : null
        }, e.prototype.isHiddenDay = function(e) {
            return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
        }, e.prototype.skipHiddenDays = function(e, t, n) {
            for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = ye(e, t);
            return e
        }, e
    }();

    function Wo(e, t, n) {
        var r = t ? t.activeRange : null;
        return Uo({}, function(e, t) {
            var n = Yn(t),
                r = [].concat(e.eventSources || []),
                o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = qn(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), r, n)
    }

    function Ao(e, t, n, o) {
        var i, a, s = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return Uo(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return i = e, a = t.sourceId, Ae(i, (function(e) {
                    return e.sourceId !== a
                }));
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? Bo(e, s, o) : e;
            case "FETCH_EVENT_SOURCES":
                return zo(e, t.sourceIds ? Ue(t.sourceIds) : Fo(e, o), s, o);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return function(e, t, n, o) {
                    var i, a = e[t];
                    if (a && n === a.latestFetchId) return r(r({}, e), ((i = {})[t] = r(r({}, a), {
                        isFetching: !1,
                        fetchRange: o
                    }), i));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function Lo(e) {
        for (var t in e)
            if (e[t].isFetching) return !0;
        return !1
    }

    function Uo(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l
        }
        return n && (i = Bo(i, n, o)), r(r({}, e), i)
    }

    function Bo(e, t, n) {
        return zo(e, Ae(e, (function(e) {
            return function(e, t, n) {
                if (!jo(e, n)) return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        })), t, n)
    }

    function zo(e, t, n, r) {
        var o = {};
        for (var i in e) {
            var a = e[i];
            t[i] ? o[i] = Vo(a, n, r) : o[i] = a
        }
        return o
    }

    function Vo(e, t, n) {
        var o = n.options,
            i = n.calendarApi,
            a = n.pluginHooks.eventSourceDefs[e.sourceDefId],
            s = te();
        return a.fetch({
            eventSource: e,
            range: t,
            context: n
        }, (function(r) {
            var a = r.rawEvents;
            o.eventSourceSuccess && (a = o.eventSourceSuccess.call(i, a, r.xhr) || a), e.success && (a = e.success.call(i, a, r.xhr) || a), n.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: s,
                fetchRange: t,
                rawEvents: a
            })
        }), (function(r) {
            console.warn(r.message, r), o.eventSourceFailure && o.eventSourceFailure.call(i, r), e.failure && e.failure(r), n.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: s,
                fetchRange: t,
                error: r
            })
        })), r(r({}, e), {
            isFetching: !0,
            latestFetchId: s
        })
    }

    function Fo(e, t) {
        return Ae(e, (function(e) {
            return jo(e, t)
        }))
    }

    function jo(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }

    function Go(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e
        }
    }

    function qo(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e
        }
    }

    function Yo(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Zo(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Xo(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? Ko(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? Ko(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }

    function Ko(e, t, n, r, o, i, a) {
        return Le(e, (function(e) {
            return function(e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction,
                    l = t.customButtons || {},
                    u = n.buttonText || {},
                    c = t.buttonText || {};
                return (e ? e.split(" ") : []).map((function(e) {
                    return e.split(",").map((function(e) {
                        return "title" === e ? {
                            buttonName: e
                        } : ((t = l[e]) ? (d = function(e) {
                            t.click && t.click.call(e.target, e, e.target)
                        }, (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e), d = function() {
                            i.changeView(e)
                        }, (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function() {
                            i[e]()
                        }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])), {
                            buttonName: e,
                            buttonClick: d,
                            buttonIcon: p,
                            buttonText: f
                        });
                        var t, n, d, p, f
                    }))
                }))
            }(e, t, n, r, o, i, a)
        }))
    }

    function Jo(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase()) ? t = function(e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + $o(t)
        }(t, n): i = $o(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function() {
            if (a.status >= 200 && a.status < 400) {
                var e = !1,
                    t = void 0;
                try {
                    t = JSON.parse(a.responseText), e = !0
                } catch (e) {}
                e ? r(t, a) : o("Failure parsing JSON", a)
            } else o("Request failed", a)
        }, a.onerror = function() {
            o("Request failed", a)
        }, a.send(i)
    }

    function $o(e) {
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }

    function Qo(e, t) {
        for (var n = Be(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), s = !0;
                    break
                } s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: d.sourceId
            })
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }
    var ei = [yo({
        eventSourceDefs: [{
            ignoreRange: !0,
            parseMeta: function(e) {
                return Array.isArray(e.events) ? e.events : null
            },
            fetch: function(e, t) {
                t({
                    rawEvents: e.eventSource.meta
                })
            }
        }]
    }), yo({
        eventSourceDefs: [{
            parseMeta: function(e) {
                return "function" == typeof e.events ? e.events : null
            },
            fetch: function(e, t, n) {
                var r = e.context.dateEnv;
                Ar(e.eventSource.meta.bind(null, On(e.range, r)), (function(e) {
                    t({
                        rawEvents: e
                    })
                }), n)
            }
        }]
    }), yo({
        eventSourceRefiners: {
            method: String,
            extraParams: Ut,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        },
        eventSourceDefs: [{
            parseMeta: function(e) {
                return !e.url || "json" !== e.format && e.format ? null : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                }
            },
            fetch: function(e, t, n) {
                var o = e.eventSource.meta,
                    i = function(e, t, n) {
                        var o, i, a, s, l = n.dateEnv,
                            u = n.options,
                            c = {};
                        null == (o = e.startParam) && (o = u.startParam);
                        null == (i = e.endParam) && (i = u.endParam);
                        null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                        s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                        r(c, s), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone);
                        return c
                    }(o, e.range, e.context);
                Jo(o.method, o.url, i, (function(e, n) {
                    t({
                        rawEvents: e,
                        xhr: n
                    })
                }), (function(e, t) {
                    n({
                        message: e,
                        xhr: t
                    })
                }))
            }
        }]
    }), yo({
        recurringTypes: [{
            parse: function(e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                            daysOfWeek: e.daysOfWeek || null,
                            startTime: e.startTime || null,
                            endTime: e.endTime || null,
                            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                        },
                        r = void 0;
                    return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
                        years: o.years - i.years,
                        months: o.months - i.months,
                        days: o.days - i.days,
                        milliseconds: o.milliseconds - i.milliseconds
                    }), {
                        allDayGuess: Boolean(!e.startTime && !e.endTime),
                        duration: r,
                        typeData: n
                    }
                }
                var o, i;
                return null
            },
            expand: function(e, t, n) {
                var r = pn(t, {
                    start: e.startRecur,
                    end: e.endRecur
                });
                return r ? function(e, t, n, r) {
                    var o = e ? Ue(e) : null,
                        i = we(n.start),
                        a = n.end,
                        s = [];
                    for (; i < a;) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = ye(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }],
        eventRefiners: {
            daysOfWeek: Ut,
            startTime: Ke,
            endTime: Ke,
            duration: Ke,
            startRecur: Ut,
            endRecur: Ut
        }
    }), yo({
        optionChangeHandlers: {
            events: function(e, t) {
                Qo([e], t)
            },
            eventSources: Qo
        }
    }), yo({
        isLoadingFuncs: [function(e) {
            return Lo(e.eventSources)
        }],
        contentTypeHandlers: {
            html: function() {
                return {
                    render: ti
                }
            },
            domNodes: function() {
                return {
                    render: ni
                }
            }
        },
        propSetHandlers: {
            dateProfile: function(e, t) {
                t.emitter.trigger("datesSet", r(r({}, On(e.activeRange, t.dateEnv)), {
                    view: t.viewApi
                }))
            },
            eventStore: function(e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", $n(e, t))
            }
        }
    })];

    function ti(e, t) {
        e.innerHTML = t
    }

    function ni(e, t) {
        var n = Array.prototype.slice.call(e.childNodes),
            r = Array.prototype.slice.call(t);
        if (!dt(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(z)
        }
    }
    var ri = function() {
            function e(e) {
                this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
            }
            return e.prototype.request = function(e) {
                this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
            }, e.prototype.pause = function(e) {
                void 0 === e && (e = "");
                var t = this.pauseDepths;
                t[e] = (t[e] || 0) + 1, this.clearTimeout()
            }, e.prototype.resume = function(e, t) {
                void 0 === e && (e = "");
                var n = this.pauseDepths;
                if (e in n) {
                    if (t) delete n[e];
                    else n[e] -= 1, n[e] <= 0 && delete n[e];
                    this.tryDrain()
                }
            }, e.prototype.isPaused = function() {
                return Object.keys(this.pauseDepths).length
            }, e.prototype.tryDrain = function() {
                if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
                    this.isRunning = !1
                }
            }, e.prototype.clear = function() {
                this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
            }, e.prototype.clearTimeout = function() {
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
            }, e.prototype.drained = function() {
                this.drainedOption && this.drainedOption()
            }, e
        }(),
        oi = function() {
            function e(e, t) {
                this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new ri(this.drain.bind(this))
            }
            return e.prototype.request = function(e, t) {
                this.queue.push(e), this.delayedRunner.request(t)
            }, e.prototype.pause = function(e) {
                this.delayedRunner.pause(e)
            }, e.prototype.resume = function(e, t) {
                this.delayedRunner.resume(e, t)
            }, e.prototype.drain = function() {
                for (var e = this.queue; e.length;) {
                    for (var t = [], n = void 0; n = e.shift();) this.runTask(n), t.push(n);
                    this.drained(t)
                }
            }, e.prototype.runTask = function(e) {
                this.runTaskOption && this.runTaskOption(e)
            }, e.prototype.drained = function(e) {
                this.drainedOption && this.drainedOption(e)
            }, e
        }();

    function ii(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, kt(t.titleFormat || function(e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return {
                year: "numeric"
            };
            if ("month" === t) return {
                year: "numeric",
                month: "long"
            };
            var n = De(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1) return {
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            return {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        }(e)), {
            isEndExclusive: e.isRangeAllDay,
            defaultSeparator: t.titleRangeSeparator
        })
    }
    var ai = function() {
        function e(e) {
            var t = this;
            this.computeOptionsData = pt(this._computeOptionsData), this.computeCurrentViewData = pt(this._computeCurrentViewData), this.organizeRawLocales = pt(sr), this.buildLocale = pt(lr), this.buildPluginHooks = So(), this.buildDateEnv = pt(si), this.buildTheme = pt(li), this.parseToolbars = pt(Xo), this.buildViewSpecs = pt(No), this.buildDateProfileGenerator = ft(ui), this.buildViewApi = pt(ci), this.buildViewUiProps = ft(fi), this.buildEventUiBySource = pt(di, ze), this.buildEventUiBases = pt(pi), this.parseContextBusinessHours = ft(gi), this.buildTitle = pt(ii), this.emitter = new Lr, this.actionRunner = new oi(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
                return t.data
            }, this.dispatch = function(e) {
                t.actionRunner.request(e)
            }, this.props = e, this.actionRunner.pause();
            var n = {},
                o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(a.options);
            var s, l, u, c = (s = o.calendarOptions, l = o.dateEnv, null != (u = s.initialDate) ? l.createMarker(u) : Zn(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            vn(d.activeRange, c) || (c = d.currentRange.start);
            for (var p = {
                    dateEnv: o.dateEnv,
                    options: o.calendarOptions,
                    pluginHooks: o.pluginHooks,
                    calendarApi: e.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, f = 0, h = o.pluginHooks.contextInit; f < h.length; f++) {
                (0, h[f])(p)
            }
            for (var g = Wo(o.calendarOptions, d, p), v = {
                    dynamicOptionOverrides: n,
                    currentViewType: i,
                    currentDate: c,
                    dateProfile: d,
                    businessHours: this.parseContextBusinessHours(p),
                    eventSources: g,
                    eventUiBases: {},
                    eventStore: {
                        defs: {},
                        instances: {}
                    },
                    renderableEventStore: {
                        defs: {},
                        instances: {}
                    },
                    dateSelection: null,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null,
                    selectionConfig: this.buildViewUiProps(p).selectionConfig
                }, m = r(r({}, p), v), y = 0, S = o.pluginHooks.reducers; y < S.length; y++) {
                var E = S[y];
                r(v, E(null, null, m))
            }
            hi(v, p) && this.emitter.trigger("loading", !0), this.state = v, this.updateData(), this.actionRunner.resume()
        }
        return e.prototype.resetOptions = function(e, t) {
            var n = this.props;
            n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e, this.actionRunner.request({
                type: "NOTHING"
            })
        }, e.prototype._handleAction = function(e) {
            var t = this.props,
                n = this.state,
                o = this.emitter,
                i = function(e, t) {
                    var n;
                    switch (t.type) {
                        case "SET_OPTION":
                            return r(r({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
                        default:
                            return e
                    }
                }(n.dynamicOptionOverrides, e),
                a = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
                s = function(e, t) {
                    switch (t.type) {
                        case "CHANGE_VIEW_TYPE":
                            e = t.viewType
                    }
                    return e
                }(n.currentViewType, e),
                l = this.computeCurrentViewData(s, a, t.optionOverrides, i);
            t.calendarApi.currentDataManager = this, o.setThisContext(t.calendarApi), o.setOptions(l.options);
            var u = {
                    dateEnv: a.dateEnv,
                    options: a.calendarOptions,
                    pluginHooks: a.pluginHooks,
                    calendarApi: t.calendarApi,
                    dispatch: this.dispatch,
                    emitter: o,
                    getCurrentData: this.getCurrentData
                },
                c = n.currentDate,
                d = n.dateProfile;
            this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (d = l.dateProfileGenerator.build(c)), d = function(e, t, n, r) {
                var o;
                switch (t.type) {
                    case "CHANGE_VIEW_TYPE":
                        return r.build(t.dateMarker || n);
                    case "CHANGE_DATE":
                        if (!e.activeRange || !vn(e.currentRange, t.dateMarker)) return r.build(t.dateMarker);
                        break;
                    case "PREV":
                        if ((o = r.buildPrev(e, n)).isValid) return o;
                        break;
                    case "NEXT":
                        if ((o = r.buildNext(e, n)).isValid) return o
                }
                return e
            }(d, e, c = function(e, t) {
                switch (t.type) {
                    case "CHANGE_DATE":
                        return t.dateMarker;
                    default:
                        return e
                }
            }(c, e), l.dateProfileGenerator), vn(d.currentRange, c) || (c = d.currentRange.start);
            for (var p = Ao(n.eventSources, e, d, u), f = ao(n.eventStore, e, p, d, u), h = Lo(p) && !l.options.progressiveEventRendering && n.renderableEventStore || f, g = this.buildViewUiProps(u), v = g.eventUiSingleBase, m = g.selectionConfig, y = this.buildEventUiBySource(p), S = {
                    dynamicOptionOverrides: i,
                    currentViewType: s,
                    currentDate: c,
                    dateProfile: d,
                    eventSources: p,
                    eventStore: f,
                    renderableEventStore: h,
                    selectionConfig: m,
                    eventUiBases: this.buildEventUiBases(h.defs, v, y),
                    businessHours: this.parseContextBusinessHours(u),
                    dateSelection: Go(n.dateSelection, e),
                    eventSelection: qo(n.eventSelection, e),
                    eventDrag: Yo(n.eventDrag, e),
                    eventResize: Zo(n.eventResize, e)
                }, E = r(r({}, u), S), C = 0, b = a.pluginHooks.reducers; C < b.length; C++) {
                var R = b[C];
                r(S, R(n, e, E))
            }
            var D = hi(n, u),
                w = hi(S, u);
            !D && w ? o.trigger("loading", !0) : D && !w && o.trigger("loading", !1), this.state = S, t.onAction && t.onAction(e)
        }, e.prototype.updateData = function() {
            var e, t, n, o, i = this.props,
                a = this.state,
                s = this.data,
                l = this.computeOptionsData(i.optionOverrides, a.dynamicOptionOverrides, i.calendarApi),
                u = this.computeCurrentViewData(a.currentViewType, l, i.optionOverrides, a.dynamicOptionOverrides),
                c = this.data = r(r(r({
                    viewTitle: this.buildTitle(a.dateProfile, u.options, l.dateEnv),
                    calendarApi: i.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, l), u), a),
                d = l.pluginHooks.optionChangeHandlers,
                p = s && s.calendarOptions,
                f = l.calendarOptions;
            if (p && p !== f)
                for (var h in p.timeZone !== f.timeZone && (a.eventSources = c.eventSources = (e = c.eventSources, t = a.dateProfile, n = c, o = t ? t.activeRange : null, zo(e, Fo(e, n), o, n)), a.eventStore = c.eventStore = function(e, t, n) {
                        var o = e.defs,
                            i = Le(e.instances, (function(e) {
                                var i = o[e.defId];
                                return i.allDay || i.recurringDef ? e : r(r({}, e), {
                                    range: {
                                        start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                                        end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                                    },
                                    forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                                    forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                                })
                            }));
                        return {
                            defs: o,
                            instances: i
                        }
                    }(c.eventStore, s.dateEnv, c.dateEnv)), d) p[h] !== f[h] && d[h](f[h], c);
            i.onData && i.onData(c)
        }, e.prototype._computeOptionsData = function(e, t, n) {
            var r = this.processRawCalendarOptions(e, t),
                o = r.refinedOptions,
                i = r.pluginHooks,
                a = r.localeDefaults,
                s = r.availableLocaleData;
            vi(r.extra);
            var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
                u = this.buildViewSpecs(i.views, e, t, a),
                c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        }, e.prototype.processRawCalendarOptions = function(e, t) {
            var n = At([It, e, t]),
                o = n.locales,
                i = n.locale,
                a = this.organizeRawLocales(o),
                s = a.map,
                l = this.buildLocale(i || a.defaultCode, s).options,
                u = this.buildPluginHooks(e.plugins || [], ei),
                c = this.currentCalendarOptionsRefiners = r(r(r(r(r({}, Pt), _t), Nt), u.listenerRefiners), u.optionRefiners),
                d = {},
                p = At([It, l, e, t]),
                f = {},
                h = this.currentCalendarOptionsInput,
                g = this.currentCalendarOptionsRefined,
                v = !1;
            for (var m in p) "plugins" !== m && (p[m] === h[m] || Ht[m] && m in h && Ht[m](h[m], p[m]) ? f[m] = g[m] : c[m] ? (f[m] = c[m](p[m]), v = !0) : d[m] = h[m]);
            return v && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = f), {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: u,
                availableLocaleData: a,
                localeDefaults: l,
                extra: d
            }
        }, e.prototype._computeCurrentViewData = function(e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
                a = i.refinedOptions;
            return vi(i.extra), {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        }, e.prototype.processRawViewOptions = function(e, t, n, o, i) {
            var a = At([It, e.optionDefaults, n, o, e.optionOverrides, i]),
                s = r(r(r(r(r(r({}, Pt), _t), Nt), Wt), t.listenerRefiners), t.optionRefiners),
                l = {},
                u = this.currentViewOptionsInput,
                c = this.currentViewOptionsRefined,
                d = !1,
                p = {};
            for (var f in a) a[f] === u[f] ? l[f] = c[f] : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? l[f] = s[f](a[f]) : p[f] = a[f], d = !0);
            return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: p
            }
        }, e
    }();

    function si(e, t, n, r, o, i, a, s) {
        var l = lr(t || a.defaultCode, a.map);
        return new or({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }

    function li(e, t) {
        return new(t.themeClasses[e.themeSystem] || Eo)(e)
    }

    function ui(e) {
        return new(e.dateProfileGeneratorClass || Oo)(e)
    }

    function ci(e, t, n) {
        return new jn(e, t, n)
    }

    function di(e) {
        return Le(e, (function(e) {
            return e.ui
        }))
    }

    function pi(e, t, n) {
        var r = {
            "": t
        };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }

    function fi(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Xt({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: Xt({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }

    function hi(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0
        }
        return !1
    }

    function gi(e) {
        return fr(e.options.businessHours, e)
    }

    function vi(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }
    var mi = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function(e) {
                n.dataManager ? n.setState(e) : n.state = e
            }, n.dataManager = new ai({
                optionOverrides: t.optionOverrides,
                calendarApi: t.calendarApi,
                onData: n.handleData
            }), n
        }
        return n(t, e), t.prototype.render = function() {
            return this.props.children(this.state)
        }, t.prototype.componentDidUpdate = function(e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t)
        }, t
    }(jr);
    var yi = function(e) {
            this.timeZoneName = e
        },
        Si = function() {
            function e(e) {
                this.component = e.component
            }
            return e.prototype.destroy = function() {}, e
        }();

    function Ei(e, t) {
        return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter
        }
    }

    function Ci(e) {
        var t;
        return (t = {})[e.component.uid] = e, t
    }
    var bi = {},
        Ri = function() {
            function e(e, t) {
                this.emitter = new Lr
            }
            return e.prototype.destroy = function() {}, e.prototype.setMirrorIsVisible = function(e) {}, e.prototype.setMirrorNeedsRevert = function(e) {}, e.prototype.setAutoScrollEnabled = function(e) {}, e
        }(),
        Di = {},
        wi = {
            startTime: Ke,
            duration: Ke,
            create: Boolean,
            sourceId: String
        };

    function Ti(e) {
        var t = Lt(e, wi),
            n = t.refined,
            r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }
    var xi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props.widgetGroups.map((function(t) {
                        return e.renderWidgetGroup(t)
                    }));
                return Gr.apply(void 0, o(["div", {
                    className: "fc-toolbar-chunk"
                }], t))
            }, t.prototype.renderWidgetGroup = function(e) {
                for (var t = this.props, n = this.context.theme, i = [], a = !0, s = 0, l = e; s < l.length; s++) {
                    var u = l[s],
                        c = u.buttonName,
                        d = u.buttonClick,
                        p = u.buttonText,
                        f = u.buttonIcon;
                    if ("title" === c) a = !1, i.push(Gr("h2", {
                        className: "fc-toolbar-title"
                    }, t.title));
                    else {
                        var h = f ? {
                                "aria-label": c
                            } : {},
                            g = ["fc-" + c + "-button", n.getClass("button")];
                        c === t.activeButton && g.push(n.getClass("buttonActive"));
                        var v = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
                        i.push(Gr("button", r({
                            disabled: v,
                            className: g.join(" "),
                            onClick: d,
                            type: "button"
                        }, h), p || (f ? Gr("span", {
                            className: f
                        }) : "")))
                    }
                }
                if (i.length > 1) {
                    var m = a && n.getClass("buttonGroup") || "";
                    return Gr.apply(void 0, o(["div", {
                        className: m
                    }], i))
                }
                return i[0]
            }, t
        }(no),
        Mi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e, t, n = this.props,
                    r = n.model,
                    o = n.extraClassName,
                    i = !1,
                    a = r.center;
                return r.left ? (i = !0, e = r.left) : e = r.start, r.right ? (i = !0, t = r.right) : t = r.end, Gr("div", {
                    className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
                }, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []))
            }, t.prototype.renderSection = function(e, t) {
                var n = this.props;
                return Gr(xi, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled
                })
            }, t
        }(no),
        ki = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    availableWidth: null
                }, t.handleEl = function(e) {
                    t.el = e, io(t.props.elRef, e), t.updateAvailableWidth()
                }, t.handleResize = function() {
                    t.updateAvailableWidth()
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.state,
                    n = e.aspectRatio,
                    r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                    o = "",
                    i = "";
                return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", Gr("div", {
                    ref: this.handleEl,
                    onClick: e.onClick,
                    className: r.join(" "),
                    style: {
                        height: o,
                        paddingBottom: i
                    }
                }, e.children)
            }, t.prototype.componentDidMount = function() {
                this.context.addResizeHandler(this.handleResize)
            }, t.prototype.componentWillUnmount = function() {
                this.context.removeResizeHandler(this.handleResize)
            }, t.prototype.updateAvailableWidth = function() {
                this.el && this.props.aspectRatio && this.setState({
                    availableWidth: this.el.offsetWidth
                })
            }, t
        }(no),
        Pi = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleSegClick = function(e, t) {
                    var r = n.component,
                        o = r.context,
                        i = En(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                        var a = V(e.target, ".fc-event-forced-url"),
                            s = a ? a.querySelector("a[href]").href : "";
                        o.emitter.trigger("eventClick", {
                            el: t,
                            event: new Kn(r.context, i.eventRange.def, i.eventRange.instance),
                            jsEvent: e,
                            view: o.viewApi
                        }), s && !e.defaultPrevented && (window.location.href = s)
                    }
                }, n.destroy = J(t.el, "click", ".fc-event", n.handleSegClick), n
            }
            return n(t, e), t
        }(Si),
        Ii = function(e) {
            function t(t) {
                var n, r, o, i, a, s = e.call(this, t) || this;
                return s.handleEventElRemove = function(e) {
                    e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
                }, s.handleSegEnter = function(e, t) {
                    En(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t))
                }, s.handleSegLeave = function(e, t) {
                    s.currentSegEl && (s.currentSegEl = null, s.triggerEvent("eventMouseLeave", e, t))
                }, s.removeHoverListeners = (n = t.el, r = ".fc-event", o = s.handleSegEnter, i = s.handleSegLeave, J(n, "mouseover", r, (function(e, t) {
                    if (t !== a) {
                        a = t, o(e, t);
                        var n = function(e) {
                            a = null, i(e, t), t.removeEventListener("mouseleave", n)
                        };
                        t.addEventListener("mouseleave", n)
                    }
                }))), s
            }
            return n(t, e), t.prototype.destroy = function() {
                this.removeHoverListeners()
            }, t.prototype.triggerEvent = function(e, t, n) {
                var r = this.component,
                    o = r.context,
                    i = En(n);
                t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
                    el: n,
                    event: new Kn(o, i.eventRange.def, i.eventRange.instance),
                    jsEvent: t,
                    view: o.viewApi
                })
            }, t
        }(Si),
        _i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildViewContext = pt(eo), t.buildViewPropTransformers = pt(Hi), t.buildToolbarProps = pt(Ni), t.handleNavLinkClick = K("a[data-navlink]", t._handleNavLinkClick.bind(t)), t.headerRef = Yr(), t.footerRef = Yr(), t.interactionsStore = {}, t.registerInteractiveComponent = function(e, n) {
                    var r = Ei(e, n),
                        o = [Pi, Ii].concat(t.props.pluginHooks.componentInteractions).map((function(e) {
                            return new e(r)
                        }));
                    t.interactionsStore[e.uid] = o, bi[e.uid] = r
                }, t.unregisterInteractiveComponent = function(e) {
                    for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                        r[n].destroy()
                    }
                    delete t.interactionsStore[e.uid], delete bi[e.uid]
                }, t.resizeRunner = new ri((function() {
                    t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", {
                        view: t.props.viewApi
                    })
                })), t.handleWindowResize = function(e) {
                    var n = t.props.options;
                    n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e, t = this.props,
                    n = t.toolbarConfig,
                    o = t.options,
                    i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Zn(t.options.now, t.dateEnv), t.viewTitle),
                    a = !1,
                    s = "";
                t.isHeightAuto || t.forPrint ? s = "" : null != o.height ? a = !0 : null != o.contentHeight ? s = o.contentHeight : e = Math.max(o.aspectRatio, .5);
                var l = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
                return Gr(Qr.Provider, {
                    value: l
                }, n.headerToolbar && Gr(Mi, r({
                    ref: this.headerRef,
                    extraClassName: "fc-header-toolbar",
                    model: n.headerToolbar
                }, i)), Gr(ki, {
                    liquid: a,
                    height: s,
                    aspectRatio: e,
                    onClick: this.handleNavLinkClick
                }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && Gr(Mi, r({
                    ref: this.footerRef,
                    extraClassName: "fc-footer-toolbar",
                    model: n.footerToolbar
                }, i)))
            }, t.prototype.componentDidMount = function() {
                var e = this.props;
                this.calendarInteractions = e.pluginHooks.calendarInteractions.map((function(t) {
                    return new t(e)
                })), window.addEventListener("resize", this.handleWindowResize);
                var t = e.pluginHooks.propSetHandlers;
                for (var n in t) t[n](e[n], e)
            }, t.prototype.componentDidUpdate = function(e) {
                var t = this.props,
                    n = t.pluginHooks.propSetHandlers;
                for (var r in n) t[r] !== e[r] && n[r](t[r], t)
            }, t.prototype.componentWillUnmount = function() {
                window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                    t[e].destroy()
                }
                this.props.emitter.trigger("_unmount")
            }, t.prototype._handleNavLinkClick = function(e, t) {
                var n = this.props,
                    r = n.dateEnv,
                    o = n.options,
                    i = n.calendarApi,
                    a = t.getAttribute("data-navlink");
                a = a ? JSON.parse(a) : {};
                var s = r.createMarker(a.date),
                    l = a.type,
                    u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
                "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u), i.zoomTo(s, l))
            }, t.prototype.buildAppendContent = function() {
                var e = this.props,
                    t = e.pluginHooks.viewContainerAppends.map((function(t) {
                        return t(e)
                    }));
                return Gr.apply(void 0, o([Zr, {}], t))
            }, t.prototype.renderView = function(e) {
                for (var t = e.pluginHooks, n = e.viewSpec, o = {
                        dateProfile: e.dateProfile,
                        businessHours: e.businessHours,
                        eventStore: e.renderableEventStore,
                        eventUiBases: e.eventUiBases,
                        dateSelection: e.dateSelection,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        isHeightAuto: e.isHeightAuto,
                        forPrint: e.forPrint
                    }, i = 0, a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++) {
                    var s = a[i];
                    r(o, s.transform(o, e))
                }
                var l = n.component;
                return Gr(l, r({}, o))
            }, t
        }(to);

    function Ni(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !vn(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }

    function Hi(e) {
        return e.map((function(e) {
            return new e
        }))
    }
    var Oi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                forPrint: !1
            }, t.handleBeforePrint = function() {
                t.setState({
                    forPrint: !0
                })
            }, t.handleAfterPrint = function() {
                t.setState({
                    forPrint: !1
                })
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.options,
                n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight,
                o = r || null == t.height ? "" : t.height,
                i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return Er() || i.push("fc-liquid-hack"), e.children(i, o, r, n)
        }, t.prototype.componentDidMount = function() {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
        }, t.prototype.componentWillUnmount = function() {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
        }, t
    }(no);

    function Wi(e, t) {
        return kt(!e || t > 10 ? {
            weekday: "short"
        } : t > 1 ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {
            weekday: "long"
        })
    }
    var Ai = "fc-col-header-cell";

    function Li(e) {
        return e.text
    }
    var Ui = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.context,
                    t = e.dateEnv,
                    n = e.options,
                    o = e.theme,
                    i = e.viewApi,
                    a = this.props,
                    s = a.date,
                    l = a.dateProfile,
                    u = Dr(s, a.todayRange, null, l),
                    c = [Ai].concat(wr(u, o)),
                    d = t.format(s, a.dayHeaderFormat),
                    p = n.navLinks && !u.isDisabled && a.colCnt > 1 ? {
                        "data-navlink": xr(s),
                        tabIndex: 0
                    } : {},
                    f = r(r(r({
                        date: t.toDate(s),
                        view: i
                    }, a.extraHookProps), {
                        text: d
                    }), u);
                return Gr(bo, {
                    hookProps: f,
                    classNames: n.dayHeaderClassNames,
                    content: n.dayHeaderContent,
                    defaultContent: Li,
                    didMount: n.dayHeaderDidMount,
                    willUnmount: n.dayHeaderWillUnmount
                }, (function(e, t, n, o) {
                    return Gr("th", r({
                        ref: e,
                        className: c.concat(t).join(" "),
                        "data-date": u.isDisabled ? void 0 : st(s),
                        colSpan: a.colSpan
                    }, a.extraDataAttrs), Gr("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, !u.isDisabled && Gr("a", r({
                        ref: n,
                        className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ")
                    }, p), o)))
                }))
            }, t
        }(no),
        Bi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    o = t.theme,
                    i = t.viewApi,
                    a = t.options,
                    s = ye(new Date(2592e5), e.dow),
                    l = {
                        dow: e.dow,
                        isDisabled: !1,
                        isFuture: !1,
                        isPast: !1,
                        isToday: !1,
                        isOther: !1
                    },
                    u = [Ai].concat(wr(l, o), e.extraClassNames || []),
                    c = n.format(s, e.dayHeaderFormat),
                    d = r(r(r(r({
                        date: s
                    }, l), {
                        view: i
                    }), e.extraHookProps), {
                        text: c
                    });
                return Gr(bo, {
                    hookProps: d,
                    classNames: a.dayHeaderClassNames,
                    content: a.dayHeaderContent,
                    defaultContent: Li,
                    didMount: a.dayHeaderDidMount,
                    willUnmount: a.dayHeaderWillUnmount
                }, (function(t, n, o, i) {
                    return Gr("th", r({
                        ref: t,
                        className: u.concat(n).join(" "),
                        colSpan: e.colSpan
                    }, e.extraDataAttrs), Gr("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, Gr("a", {
                        className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                        ref: o
                    }, i)))
                }))
            }, t
        }(no),
        zi = function(e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.initialNowDate = Zn(n.options.now, n.dateEnv), r.initialNowQueriedMs = (new Date).valueOf(), r.state = r.computeTiming().currentState, r
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.state;
                return e.children(t.nowDate, t.todayRange)
            }, t.prototype.componentDidMount = function() {
                this.setTimeout()
            }, t.prototype.componentDidUpdate = function(e) {
                e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
            }, t.prototype.componentWillUnmount = function() {
                this.clearTimeout()
            }, t.prototype.computeTiming = function() {
                var e = this.props,
                    t = this.context,
                    n = Se(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
                    r = t.dateEnv.startOf(n, e.unit),
                    o = t.dateEnv.add(r, Ke(1, e.unit)),
                    i = o.valueOf() - n.valueOf();
                return i = Math.min(864e5, i), {
                    currentState: {
                        nowDate: r,
                        todayRange: Vi(r)
                    },
                    nextState: {
                        nowDate: o,
                        todayRange: Vi(o)
                    },
                    waitMs: i
                }
            }, t.prototype.setTimeout = function() {
                var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    r = t.waitMs;
                this.timeoutId = setTimeout((function() {
                    e.setState(n, (function() {
                        e.setTimeout()
                    }))
                }), r)
            }, t.prototype.clearTimeout = function() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, t.contextType = Qr, t
        }(jr);

    function Vi(e) {
        var t = we(e);
        return {
            start: t,
            end: ye(t, 1)
        }
    }
    var Fi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = pt(ji), t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.context,
                t = this.props,
                n = t.dates,
                r = t.dateProfile,
                o = t.datesRepDistinctDays,
                i = t.renderIntro,
                a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return Gr(zi, {
                unit: "day"
            }, (function(e, t) {
                return Gr("tr", null, i && i("day"), n.map((function(e) {
                    return o ? Gr(Ui, {
                        key: e.toISOString(),
                        date: e,
                        dateProfile: r,
                        todayRange: t,
                        colCnt: n.length,
                        dayHeaderFormat: a
                    }) : Gr(Bi, {
                        key: e.getUTCDay(),
                        dow: e.getUTCDay(),
                        dayHeaderFormat: a
                    })
                })))
            }))
        }, t
    }(no);

    function ji(e, t, n) {
        return e || Wi(t, n)
    }
    var Gi = function() {
            function e(e, t) {
                for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (a += 1, o.push(a), i.push(n)), n = ye(n, 1);
                this.dates = i, this.indices = o, this.cnt = i.length
            }
            return e.prototype.sliceRange = function(e) {
                var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(ye(e.end, -1)),
                    r = Math.max(0, t),
                    o = Math.min(this.cnt - 1, n);
                return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
                    firstIndex: r,
                    lastIndex: o,
                    isStart: t === r,
                    isEnd: n === o
                } : null
            }, e.prototype.getDateDayIndex = function(e) {
                var t = this.indices,
                    n = Math.floor(Ce(this.dates[0], e));
                return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
            }, e
        }(),
        qi = function() {
            function e(e, t) {
                var n, r, o, i = e.dates;
                if (t) {
                    for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
                    o = Math.ceil(i.length / n)
                } else o = 1, n = i.length;
                this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
            }
            return e.prototype.buildCells = function() {
                for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                    for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                    e.push(n)
                }
                return e
            }, e.prototype.buildCell = function(e, t) {
                var n = this.daySeries.dates[e * this.colCnt + t];
                return {
                    key: n.toISOString(),
                    date: n
                }
            }, e.prototype.buildHeaderDates = function() {
                for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
                return e
            }, e.prototype.sliceRange = function(e) {
                var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                if (n)
                    for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                        var s = Math.floor(a / t),
                            l = Math.min((s + 1) * t, i + 1);
                        r.push({
                            row: s,
                            firstCol: a % t,
                            lastCol: (l - 1) % t,
                            isStart: n.isStart && a === o,
                            isEnd: n.isEnd && l - 1 === i
                        }), a = l
                    }
                return r
            }, e
        }(),
        Yi = function() {
            function e() {
                this.sliceBusinessHours = pt(this._sliceBusinessHours), this.sliceDateSelection = pt(this._sliceDateSpan), this.sliceEventStore = pt(this._sliceEventStore), this.sliceEventDrag = pt(this._sliceInteraction), this.sliceEventResize = pt(this._sliceInteraction), this.forceDayIfListItem = !1
            }
            return e.prototype.sliceProps = function(e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                var s = e.eventUiBases,
                    l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
                return {
                    dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
                    businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
                    fgEventSegs: l.fg,
                    bgEventSegs: l.bg,
                    eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
                    eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
                    eventSelection: e.eventSelection
                }
            }, e.prototype.sliceNowDate = function(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                return this._sliceDateSpan.apply(this, o([{
                    range: {
                        start: e,
                        end: Se(e, 1)
                    },
                    allDay: !1
                }, {}, t], n))
            }, e.prototype._sliceBusinessHours = function(e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                return e ? this._sliceEventStore.apply(this, o([qe(e, Zi(t, Boolean(n)), r), {}, t, n], i)).bg : []
            }, e.prototype._sliceEventStore = function(e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                if (e) {
                    var a = mn(e, t, Zi(n, Boolean(r)), r);
                    return {
                        bg: this.sliceEventRanges(a.bg, o),
                        fg: this.sliceEventRanges(a.fg, o)
                    }
                }
                return {
                    bg: [],
                    fg: []
                }
            }, e.prototype._sliceInteraction = function(e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                if (!e) return null;
                var a = mn(e.mutatedEvents, t, Zi(n, Boolean(r)), r);
                return {
                    segs: this.sliceEventRanges(a.fg, o),
                    affectedInstances: e.affectedEvents.instances,
                    isEvent: e.isEvent
                }
            }, e.prototype._sliceDateSpan = function(e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                if (!e) return [];
                for (var a = An(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
                    var c = u[l];
                    c.eventRange = a
                }
                return s
            }, e.prototype.sliceEventRanges = function(e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.sliceEventRange(i, t))
                }
                return n
            }, e.prototype.sliceEventRange = function(e, t) {
                var n = e.range;
                this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                    start: n.start,
                    end: ye(n.start, 1)
                });
                for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
                    var s = a[i];
                    s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd
                }
                return r
            }, e
        }();

    function Zi(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: Se(n.start, e.slotMinTime.milliseconds),
            end: Se(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }
    var Xi = /^(visible|hidden)$/,
        Ki = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleEl = function(e) {
                    t.el = e, io(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.liquid,
                    n = e.liquidIsAbsolute,
                    r = t && n,
                    o = ["fc-scroller"];
                return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), Gr("div", {
                    ref: this.handleEl,
                    className: o.join(" "),
                    style: {
                        overflowX: e.overflowX,
                        overflowY: e.overflowY,
                        left: r && -(e.overcomeLeft || 0) || "",
                        right: r && -(e.overcomeRight || 0) || "",
                        bottom: r && -(e.overcomeBottom || 0) || "",
                        marginLeft: !r && -(e.overcomeLeft || 0) || "",
                        marginRight: !r && -(e.overcomeRight || 0) || "",
                        marginBottom: !r && -(e.overcomeBottom || 0) || "",
                        maxHeight: e.maxHeight || ""
                    }
                }, e.children)
            }, t.prototype.needsXScrolling = function() {
                if (Xi.test(this.props.overflowX)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                    if (n[r].getBoundingClientRect().width > t) return !0
                }
                return !1
            }, t.prototype.needsYScrolling = function() {
                if (Xi.test(this.props.overflowY)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                    if (n[r].getBoundingClientRect().height > t) return !0
                }
                return !1
            }, t.prototype.getXScrollbarWidth = function() {
                return Xi.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
            }, t.prototype.getYScrollbarWidth = function() {
                return Xi.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
            }, t
        }(no),
        Ji = function() {
            function e(e) {
                var t = this;
                this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(e, n) {
                    var r = t,
                        o = r.depths,
                        i = r.currentMap,
                        a = !1,
                        s = !1;
                    null !== e ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0) : (o[n] -= 1, o[n] || (delete i[n], delete t.callbackMap[n], a = !0)), t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)))
                }
            }
            return e.prototype.createRef = function(e) {
                var t = this,
                    n = this.callbackMap[e];
                return n || (n = this.callbackMap[e] = function(n) {
                    t.handleValue(n, String(e))
                }), n
            }, e.prototype.collect = function(e, t, n) {
                return Ge(this.currentMap, e, t, n)
            }, e.prototype.getAll = function() {
                return Be(this.currentMap)
            }, e
        }();

    function $i(e) {
        for (var t = 0, n = 0, r = j(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, ge(o))
        }
        return Math.ceil(t)
    }

    function Qi(e, t) {
        return e.liquid && t.liquid
    }

    function ea(e, t) {
        return null != t.maxHeight || Qi(e, t)
    }

    function ta(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : Gr("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {
                minWidth: n.tableMinWidth,
                width: n.clientWidth,
                height: r ? n.clientHeight : ""
            }
        }, n.tableColGroupNode, Gr("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }

    function na(e, t) {
        return dt(e, t, ze)
    }

    function ra(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++)
            for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) n.push(Gr("col", {
                style: {
                    width: "shrink" === a.width ? oa(t) : a.width || "",
                    minWidth: a.minWidth || ""
                }
            }));
        return Gr.apply(void 0, o(["colgroup", {}], n))
    }

    function oa(e) {
        return null == e ? 4 : e
    }

    function ia(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0
        }
        return !1
    }

    function aa(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n
    }

    function sa(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
    }

    function la(e) {
        return Gr("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        })
    }

    function ua(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    function ca(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }
    var da = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = pt((function(e) {
                return e
            }), na), t.renderMicroColGroup = pt(ra), t.scrollerRefs = new Ji, t.scrollerElRefs = new Ji(t._handleScrollerEl.bind(t)), t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            }, t.handleSizing = function() {
                t.setState(r({
                    shrinkWidth: t.computeShrinkWidth()
                }, t.computeScrollerDims()))
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            for (var e, t = this.props, n = this.state, r = this.context, i = t.sections || [], a = this.processCols(t.cols), s = this.renderMicroColGroup(a, n.shrinkWidth), l = aa(t.liquid, r), u = i.length, c = 0, d = [], p = [], f = []; c < u && "header" === (e = i[c]).type;) d.push(this.renderSection(e, c, s)), c += 1;
            for (; c < u && "body" === (e = i[c]).type;) p.push(this.renderSection(e, c, s)), c += 1;
            for (; c < u && "footer" === (e = i[c]).type;) f.push(this.renderSection(e, c, s)), c += 1;
            var h = !Er();
            return Gr("table", {
                className: l.join(" "),
                style: {
                    height: t.height
                }
            }, Boolean(!h && d.length) && Gr.apply(void 0, o(["thead", {}], d)), Boolean(!h && p.length) && Gr.apply(void 0, o(["tbody", {}], p)), Boolean(!h && f.length) && Gr.apply(void 0, o(["tfoot", {}], f)), h && Gr.apply(void 0, o(["tbody", {}], d, p, f)))
        }, t.prototype.renderSection = function(e, t, n) {
            return "outerContent" in e ? Gr(Zr, {
                key: e.key
            }, e.outerContent) : Gr("tr", {
                key: e.key,
                className: sa(e, this.props.liquid).join(" ")
            }, this.renderChunkTd(e, t, n, e.chunk))
        }, t.prototype.renderChunkTd = function(e, t, n, r) {
            if ("outerContent" in r) return r.outerContent;
            var o = this.props,
                i = this.state,
                a = i.forceYScrollbars,
                s = i.scrollerClientWidths,
                l = i.scrollerClientHeights,
                u = ea(o, e),
                c = Qi(o, e),
                d = o.liquid ? a ? "scroll" : u ? "auto" : "hidden" : "visible",
                p = ta(e, r, {
                    tableColGroupNode: n,
                    tableMinWidth: "",
                    clientWidth: void 0 !== s[t] ? s[t] : null,
                    clientHeight: void 0 !== l[t] ? l[t] : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: function() {}
                });
            return Gr("td", {
                ref: r.elRef
            }, Gr("div", {
                className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
            }, Gr(Ki, {
                ref: this.scrollerRefs.createRef(t),
                elRef: this.scrollerElRefs.createRef(t),
                overflowY: d,
                overflowX: o.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: c,
                liquidIsAbsolute: !0
            }, p)))
        }, t.prototype._handleScrollerEl = function(e, t) {
            var n = parseInt(t, 10);
            io(this.props.sections[n].chunk.scrollerElRef, e)
        }, t.prototype.componentDidMount = function() {
            this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
        }, t.prototype.componentDidUpdate = function() {
            this.handleSizing()
        }, t.prototype.componentWillUnmount = function() {
            this.context.removeResizeHandler(this.handleSizing)
        }, t.prototype.computeShrinkWidth = function() {
            return ia(this.props.cols) ? $i(this.scrollerElRefs.getAll()) : 0
        }, t.prototype.computeScrollerDims = function() {
            for (var e = Ir(), t = this.props.sections.length, n = this.scrollerRefs, r = this.scrollerElRefs, o = !1, i = {}, a = {}, s = 0; s < t; s += 1) {
                var l = n.currentMap[s];
                if (l && l.needsYScrolling()) {
                    o = !0;
                    break
                }
            }
            for (s = 0; s < t; s += 1) {
                var u = r.currentMap[s];
                if (u) {
                    var c = u.parentNode;
                    i[s] = Math.floor(c.getBoundingClientRect().width - (o ? e.y : 0)), a[s] = Math.floor(c.getBoundingClientRect().height)
                }
            }
            return {
                forceYScrollbars: o,
                scrollerClientWidths: i,
                scrollerClientHeights: a
            }
        }, t
    }(no);
    da.addStateEquality({
        scrollerClientWidths: ze,
        scrollerClientHeights: ze
    });
    var pa = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = e.seg,
                    o = r.eventRange,
                    i = o.ui,
                    a = {
                        event: new Kn(t, o.def, o.instance),
                        view: t.viewApi,
                        timeText: e.timeText,
                        textColor: i.textColor,
                        backgroundColor: i.backgroundColor,
                        borderColor: i.borderColor,
                        isDraggable: !e.disableDragging && wn(r, t),
                        isStartResizable: !e.disableResizing && Tn(r, t),
                        isEndResizable: !e.disableResizing && xn(r),
                        isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                        isStart: Boolean(r.isStart),
                        isEnd: Boolean(r.isEnd),
                        isPast: Boolean(e.isPast),
                        isFuture: Boolean(e.isFuture),
                        isToday: Boolean(e.isToday),
                        isSelected: Boolean(e.isSelected),
                        isDragging: Boolean(e.isDragging),
                        isResizing: Boolean(e.isResizing)
                    },
                    s = Pn(a).concat(i.classNames);
                return Gr(bo, {
                    hookProps: a,
                    classNames: n.eventClassNames,
                    content: n.eventContent,
                    defaultContent: e.defaultContent,
                    didMount: n.eventDidMount,
                    willUnmount: n.eventWillUnmount,
                    elRef: this.elRef
                }, (function(t, n, r, o) {
                    return e.children(t, s.concat(n), r, o, a)
                }))
            }, t.prototype.componentDidMount = function() {
                Sn(this.elRef.current, this.props.seg)
            }, t.prototype.componentDidUpdate = function(e) {
                var t = this.props.seg;
                t !== e.seg && Sn(this.elRef.current, t)
            }, t
        }(no),
        fa = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    o = t.options.eventTimeFormat || e.defaultTimeFormat,
                    i = Mn(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
                return Gr(pa, {
                    seg: n,
                    timeText: i,
                    disableDragging: e.disableDragging,
                    disableResizing: e.disableResizing,
                    defaultContent: e.defaultContent || ha,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting,
                    isSelected: e.isSelected,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday
                }, (function(t, o, i, a, s) {
                    return Gr("a", r({
                        className: e.extraClassNames.concat(o).join(" "),
                        style: {
                            borderColor: s.borderColor,
                            backgroundColor: s.backgroundColor
                        },
                        ref: t
                    }, function(e) {
                        var t = e.eventRange.def.url;
                        return t ? {
                            href: t
                        } : {}
                    }(n)), Gr("div", {
                        className: "fc-event-main",
                        ref: i,
                        style: {
                            color: s.textColor
                        }
                    }, a), s.isStartResizable && Gr("div", {
                        className: "fc-event-resizer fc-event-resizer-start"
                    }), s.isEndResizable && Gr("div", {
                        className: "fc-event-resizer fc-event-resizer-end"
                    }))
                }))
            }, t
        }(no);

    function ha(e) {
        return Gr("div", {
            className: "fc-event-main-frame"
        }, e.timeText && Gr("div", {
            className: "fc-event-time"
        }, e.timeText), Gr("div", {
            className: "fc-event-title-container"
        }, Gr("div", {
            className: "fc-event-title fc-sticky"
        }, e.event.title || Gr(Zr, null, " "))))
    }
    var ga = function(e) {
            return Gr(Qr.Consumer, null, (function(t) {
                var n = t.options,
                    r = {
                        isAxis: e.isAxis,
                        date: t.dateEnv.toDate(e.date),
                        view: t.viewApi
                    };
                return Gr(bo, {
                    hookProps: r,
                    classNames: n.nowIndicatorClassNames,
                    content: n.nowIndicatorContent,
                    didMount: n.nowIndicatorDidMount,
                    willUnmount: n.nowIndicatorWillUnmount
                }, e.children)
            }))
        },
        va = kt({
            day: "numeric"
        }),
        ma = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = ya({
                        date: e.date,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        showDayNumber: e.showDayNumber,
                        extraProps: e.extraHookProps,
                        viewApi: t.viewApi,
                        dateEnv: t.dateEnv
                    });
                return Gr(Do, {
                    hookProps: r,
                    content: n.dayCellContent,
                    defaultContent: e.defaultContent
                }, e.children)
            }, t
        }(no);

    function ya(e) {
        var t = e.date,
            n = e.dateEnv,
            o = Dr(t, e.todayRange, null, e.dateProfile);
        return r(r(r({
            date: n.toDate(t),
            view: e.viewApi
        }, o), {
            dayNumberText: e.showDayNumber ? n.format(t, va) : ""
        }), e.extraProps)
    }
    var Sa = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = ft(ya), t.normalizeClassNames = xo(), t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = this.refineHookProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                }),
                o = wr(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                i = r.isDisabled ? {} : {
                    "data-date": st(e.date)
                };
            return Gr(To, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, (function(t) {
                return e.children(t, o, i, r.isDisabled)
            }))
        }, t
    }(no);

    function Ea(e) {
        return Gr("div", {
            className: "fc-" + e
        })
    }
    var Ca = function(e) {
        return Gr(pa, {
            defaultContent: ba,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, (function(e, t, n, r, o) {
            return Gr("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {
                    backgroundColor: o.backgroundColor
                }
            }, r)
        }))
    };

    function ba(e) {
        return e.event.title && Gr("div", {
            className: "fc-event-title"
        }, e.event.title)
    }
    var Ra = function(e) {
        return Gr(Qr.Consumer, null, (function(t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return Gr(bo, {
                hookProps: {
                    num: a,
                    text: s,
                    date: o
                },
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: Da,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        }))
    };

    function Da(e) {
        return e.text
    }
    var wa = function(e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return o.isRendering = !1, o.isRendered = !1, o.currentClassNames = [], o.customContentRenderId = 0, o.handleAction = function(e) {
                switch (e.type) {
                    case "SET_EVENT_DRAG":
                    case "SET_EVENT_RESIZE":
                        o.renderRunner.tryDrain()
                }
            }, o.handleData = function(e) {
                o.currentData = e, o.renderRunner.request(e.calendarOptions.rerenderDelay)
            }, o.handleRenderRequest = function() {
                if (o.isRendering) {
                    o.isRendered = !0;
                    var e = o.currentData;
                    qr(Gr(Oi, {
                        options: e.calendarOptions,
                        theme: e.theme,
                        emitter: e.emitter
                    }, (function(t, n, i, a) {
                        return o.setClassNames(t), o.setHeight(n), Gr(Ro.Provider, {
                            value: o.customContentRenderId
                        }, Gr(_i, r({
                            isHeightAuto: i,
                            forPrint: a
                        }, e)))
                    })), o.el)
                } else o.isRendered && (o.isRendered = !1, Jr(o.el), o.setClassNames([]), o.setHeight(""));
                Kr()
            }, o.el = t, o.renderRunner = new ri(o.handleRenderRequest), new ai({
                optionOverrides: n,
                calendarApi: o,
                onAction: o.handleAction,
                onData: o.handleData
            }), o
        }
        return n(t, e), Object.defineProperty(t.prototype, "view", {
            get: function() {
                return this.currentData.viewApi
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.isRendering;
            e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
        }, t.prototype.destroy = function() {
            this.isRendering && (this.isRendering = !1, this.renderRunner.request())
        }, t.prototype.updateSize = function() {
            e.prototype.updateSize.call(this), Kr()
        }, t.prototype.batchRendering = function(e) {
            this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
        }, t.prototype.pauseRendering = function() {
            this.renderRunner.pause("pauseRendering")
        }, t.prototype.resumeRendering = function() {
            this.renderRunner.resume("pauseRendering", !0)
        }, t.prototype.resetOptions = function(e, t) {
            this.currentDataManager.resetOptions(e, t)
        }, t.prototype.setClassNames = function(e) {
            if (!dt(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        }, t.prototype.setHeight = function(e) {
            Z(this.el, "height", e)
        }, t
    }(Xn);
    Di.touchMouseIgnoreWait = 500;
    var Ta = 0,
        xa = 0,
        Ma = !1,
        ka = function() {
            function e(e) {
                var t = this;
                this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(e) {
                    if (!t.shouldIgnoreMouse() && function(e) {
                            return 0 === e.button && !e.ctrlKey
                        }(e) && t.tryStart(e)) {
                        var n = t.createEventFromMouse(e, !0);
                        t.emitter.trigger("pointerdown", n), t.initScrollWatch(n), t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp)
                    }
                }, this.handleMouseMove = function(e) {
                    var n = t.createEventFromMouse(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n)
                }, this.handleMouseUp = function(e) {
                    document.removeEventListener("mousemove", t.handleMouseMove), document.removeEventListener("mouseup", t.handleMouseUp), t.emitter.trigger("pointerup", t.createEventFromMouse(e)), t.cleanup()
                }, this.handleTouchStart = function(e) {
                    if (t.tryStart(e)) {
                        t.isTouchDragging = !0;
                        var n = t.createEventFromTouch(e, !0);
                        t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                        var r = e.target;
                        t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove), r.addEventListener("touchend", t.handleTouchEnd), r.addEventListener("touchcancel", t.handleTouchEnd), window.addEventListener("scroll", t.handleTouchScroll, !0)
                    }
                }, this.handleTouchMove = function(e) {
                    var n = t.createEventFromTouch(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n)
                }, this.handleTouchEnd = function(e) {
                    if (t.isDragging) {
                        var n = e.target;
                        n.removeEventListener("touchmove", t.handleTouchMove), n.removeEventListener("touchend", t.handleTouchEnd), n.removeEventListener("touchcancel", t.handleTouchEnd), window.removeEventListener("scroll", t.handleTouchScroll, !0), t.emitter.trigger("pointerup", t.createEventFromTouch(e)), t.cleanup(), t.isTouchDragging = !1, Ta += 1, setTimeout((function() {
                            Ta -= 1
                        }), Di.touchMouseIgnoreWait)
                    }
                }, this.handleTouchScroll = function() {
                    t.wasTouchScroll = !0
                }, this.handleScroll = function(e) {
                    if (!t.shouldIgnoreMove) {
                        var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                            r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                        t.emitter.trigger("pointermove", {
                            origEvent: e,
                            isTouch: t.isTouchDragging,
                            subjectEl: t.subjectEl,
                            pageX: n,
                            pageY: r,
                            deltaX: n - t.origPageX,
                            deltaY: r - t.origPageY
                        })
                    }
                }, this.containerEl = e, this.emitter = new Lr, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), 1 === (xa += 1) && window.addEventListener("touchmove", Pa, {
                    passive: !1
                })
            }
            return e.prototype.destroy = function() {
                this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), (xa -= 1) || window.removeEventListener("touchmove", Pa, {
                    passive: !1
                })
            }, e.prototype.tryStart = function(e) {
                var t = this.querySubjectEl(e),
                    n = e.target;
                return !(!t || this.handleSelector && !V(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0)
            }, e.prototype.cleanup = function() {
                Ma = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
            }, e.prototype.querySubjectEl = function(e) {
                return this.selector ? V(e.target, this.selector) : this.containerEl
            }, e.prototype.shouldIgnoreMouse = function() {
                return Ta || this.isTouchDragging
            }, e.prototype.cancelTouchScroll = function() {
                this.isDragging && (Ma = !0)
            }, e.prototype.initScrollWatch = function(e) {
                this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
            }, e.prototype.recordCoords = function(e) {
                this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
            }, e.prototype.destroyScrollWatch = function() {
                this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
            }, e.prototype.createEventFromMouse = function(e, t) {
                var n = 0,
                    r = 0;
                return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                    origEvent: e,
                    isTouch: !1,
                    subjectEl: this.subjectEl,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    deltaX: n,
                    deltaY: r
                }
            }, e.prototype.createEventFromTouch = function(e, t) {
                var n, r, o = e.touches,
                    i = 0,
                    a = 0;
                return o && o.length ? (n = o[0].pageX, r = o[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
                    origEvent: e,
                    isTouch: !0,
                    subjectEl: this.subjectEl,
                    pageX: n,
                    pageY: r,
                    deltaX: i,
                    deltaY: a
                }
            }, e
        }();

    function Pa(e) {
        Ma && e.preventDefault()
    }
    var Ia = function() {
            function e() {
                this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
            }
            return e.prototype.start = function(e, t, n) {
                this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
            }, e.prototype.handleMove = function(e, t) {
                this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
            }, e.prototype.setIsVisible = function(e) {
                e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
            }, e.prototype.stop = function(e, t) {
                var n = this,
                    r = function() {
                        n.cleanup(), t()
                    };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
            }, e.prototype.doRevertAnimation = function(e, t) {
                var n = this.mirrorEl,
                    r = this.sourceEl.getBoundingClientRect();
                n.style.transition = "top " + t + "ms,left " + t + "ms", Y(n, {
                    left: r.left,
                    top: r.top
                }), Q(n, (function() {
                    n.style.transition = "", e()
                }))
            }, e.prototype.cleanup = function() {
                this.mirrorEl && (z(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
            }, e.prototype.updateElPosition = function() {
                this.sourceEl && this.isVisible && Y(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY
                })
            }, e.prototype.getMirrorEl = function() {
                var e = this.sourceElRect,
                    t = this.mirrorEl;
                return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), Y(t, {
                    position: "fixed",
                    zIndex: this.zIndex,
                    visibility: "",
                    boxSizing: "border-box",
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                    right: "auto",
                    bottom: "auto",
                    margin: 0
                }), this.parentNode.appendChild(t)), t
            }, e
        }(),
        _a = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.handleScroll = function() {
                    r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange()
                }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r
            }
            return n(t, e), t.prototype.destroy = function() {
                this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
            }, t.prototype.getScrollTop = function() {
                return this.scrollTop
            }, t.prototype.getScrollLeft = function() {
                return this.scrollLeft
            }, t.prototype.setScrollTop = function(e) {
                this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
            }, t.prototype.setScrollLeft = function(e) {
                this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
            }, t.prototype.getClientWidth = function() {
                return this.clientWidth
            }, t.prototype.getClientHeight = function() {
                return this.clientHeight
            }, t.prototype.getScrollWidth = function() {
                return this.scrollWidth
            }, t.prototype.getScrollHeight = function() {
                return this.scrollHeight
            }, t.prototype.handleScrollChange = function() {}, t
        }(Br),
        Na = function(e) {
            function t(t, n) {
                return e.call(this, new zr(t), n) || this
            }
            return n(t, e), t.prototype.getEventTarget = function() {
                return this.scrollController.el
            }, t.prototype.computeClientRect = function() {
                return Hr(this.scrollController.el)
            }, t
        }(_a),
        Ha = function(e) {
            function t(t) {
                return e.call(this, new Vr, t) || this
            }
            return n(t, e), t.prototype.getEventTarget = function() {
                return window
            }, t.prototype.computeClientRect = function() {
                return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight
                }
            }, t.prototype.handleScrollChange = function() {
                this.clientRect = this.computeClientRect()
            }, t
        }(_a),
        Oa = "function" == typeof performance ? performance.now : Date.now,
        Wa = function() {
            function e() {
                var e = this;
                this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
                    if (e.isAnimating) {
                        var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                        if (t) {
                            var n = Oa();
                            e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                        } else e.isAnimating = !1
                    }
                }
            }
            return e.prototype.start = function(e, t) {
                this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
            }, e.prototype.handleMove = function(e, t) {
                if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                        i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                    o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Oa()))
                }
            }, e.prototype.stop = function() {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy()
                    }
                    this.scrollCaches = null
                }
            }, e.prototype.requestAnimation = function(e) {
                this.msSinceRequest = e, requestAnimationFrame(this.animate)
            }, e.prototype.handleSide = function(e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    o = r - e.distance,
                    i = o * o / (r * r) * this.maxVelocity * t,
                    a = 1;
                switch (e.name) {
                    case "left":
                        a = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + i * a);
                        break;
                    case "top":
                        a = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + i * a)
                }
            }, e.prototype.computeBestEdge = function(e, t) {
                for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                    var a = i[o],
                        s = a.clientRect,
                        l = e - s.left,
                        u = s.right - e,
                        c = t - s.top,
                        d = s.bottom - t;
                    l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                        scrollCache: a,
                        name: "top",
                        distance: c
                    }), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                        scrollCache: a,
                        name: "bottom",
                        distance: d
                    }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                        scrollCache: a,
                        name: "left",
                        distance: l
                    }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                        scrollCache: a,
                        name: "right",
                        distance: u
                    }))
                }
                return r
            }, e.prototype.buildCaches = function() {
                return this.queryScrollEls().map((function(e) {
                    return e === window ? new Ha(!1) : new Na(e, !1)
                }))
            }, e.prototype.queryScrollEls = function() {
                for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                    var r = n[t];
                    "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
                }
                return e
            }, e
        }(),
        Aa = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function(e) {
                    r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, oe(document.body), ae(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)))
                }, r.onPointerMove = function(e) {
                    if (r.isInteracting) {
                        if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                            var t = r.minDistance,
                                n = e.deltaX,
                                o = e.deltaY;
                            n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                        }
                        r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                    }
                }, r.onPointerUp = function(e) {
                    r.isInteracting && (r.isInteracting = !1, ie(document.body), se(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null))
                };
                var o = r.pointer = new ka(t);
                return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), n && (o.selector = n), r.mirror = new Ia, r.autoScroller = new Wa, r
            }
            return n(t, e), t.prototype.destroy = function() {
                this.pointer.destroy(), this.onPointerUp({})
            }, t.prototype.startDelay = function(e) {
                var t = this;
                "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((function() {
                    t.delayTimeoutId = null, t.handleDelayEnd(e)
                }), this.delay) : this.handleDelayEnd(e)
            }, t.prototype.handleDelayEnd = function(e) {
                this.isDelayEnded = !0, this.tryStartDrag(e)
            }, t.prototype.handleDistanceSurpassed = function(e) {
                this.isDistanceSurpassed = !0, this.tryStartDrag(e)
            }, t.prototype.tryStartDrag = function(e) {
                this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
            }, t.prototype.tryStopDrag = function(e) {
                this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
            }, t.prototype.stopDrag = function(e) {
                this.isDragging = !1, this.emitter.trigger("dragend", e)
            }, t.prototype.setIgnoreMove = function(e) {
                this.pointer.shouldIgnoreMove = e
            }, t.prototype.setMirrorIsVisible = function(e) {
                this.mirror.setIsVisible(e)
            }, t.prototype.setMirrorNeedsRevert = function(e) {
                this.mirrorNeedsRevert = e
            }, t.prototype.setAutoScrollEnabled = function(e) {
                this.autoScroller.isEnabled = e
            }, t
        }(Ri),
        La = function() {
            function e(e) {
                this.origRect = Or(e), this.scrollCaches = Wr(e).map((function(e) {
                    return new Na(e, !0)
                }))
            }
            return e.prototype.destroy = function() {
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
            }, e.prototype.computeLeft = function() {
                for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft()
                }
                return e
            }, e.prototype.computeTop = function() {
                for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop()
                }
                return e
            }, e.prototype.isWithinClipping = function(e, t) {
                for (var n, r, o = {
                        left: e,
                        top: t
                    }, i = 0, a = this.scrollCaches; i < a.length; i++) {
                    var s = a[i];
                    if (n = s.getEventTarget(), r = void 0, "HTML" !== (r = n.tagName) && "BODY" !== r && !hr(o, s.clientRect)) return !1
                }
                return !0
            }, e
        }();
    var Ua = function() {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(e) {
                var t = n.dragging;
                n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }, this.handleDragStart = function(e) {
                n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
            }, this.handleDragMove = function(e) {
                n.emitter.trigger("dragmove", e), n.handleMove(e)
            }, this.handlePointerUp = function(e) {
                n.releaseHits(), n.emitter.trigger("pointerup", e)
            }, this.handleDragEnd = function(e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
            }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Lr
        }
        return e.prototype.processFirstCoord = function(e) {
            var t, n = {
                    left: e.pageX,
                    top: e.pageY
                },
                r = n,
                o = e.subjectEl;
            o !== document && (r = mr(r, t = Or(o)));
            var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
            if (i) {
                if (this.useSubjectCenter && t) {
                    var a = gr(t, i.rect);
                    a && (r = yr(a))
                }
                this.coordAdjust = Sr(r, n)
            } else this.coordAdjust = {
                left: 0,
                top: 0
            }
        }, e.prototype.handleMove = function(e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && Ba(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
        }, e.prototype.prepareHits = function() {
            this.offsetTrackers = Le(this.droppableStore, (function(e) {
                return e.component.prepareHits(), new La(e.el)
            }))
        }, e.prototype.releaseHits = function() {
            var e = this.offsetTrackers;
            for (var t in e) e[t].destroy();
            this.offsetTrackers = {}
        }, e.prototype.queryHitForOffset = function(e, t) {
            var n = this.droppableStore,
                r = this.offsetTrackers,
                o = null;
            for (var i in n) {
                var a = n[i].component,
                    s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft(),
                        u = s.computeTop(),
                        c = e - l,
                        d = t - u,
                        p = s.origRect,
                        f = p.right - p.left,
                        h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var g = a.queryHit(c, d, f, h),
                            v = a.context.getCurrentData().dateProfile;
                        g && gn(v.activeRange, g.dateSpan.range) && (!o || g.layer > o.layer) && (g.rect.left += l, g.rect.right += l, g.rect.top += u, g.rect.bottom += u, o = g)
                    }
                }
            }
            return o
        }, e
    }();

    function Ba(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && Hn(e.dateSpan, t.dateSpan)
    }

    function za(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, {
            date: (o = t.dateEnv).toDate(n.range.start),
            dateStr: o.formatIso(n.range.start, {
                omitTime: n.allDay
            }),
            allDay: n.allDay
        })), i
    }
    var Va = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handlePointerDown = function(e) {
                    var t = n.dragging,
                        r = e.origEvent.target;
                    t.setIgnoreMove(!n.component.isValidDateDownEl(r))
                }, n.handleDragEnd = function(e) {
                    var t = n.component;
                    if (!n.dragging.pointer.wasTouchScroll) {
                        var o = n.hitDragging,
                            i = o.initialHit,
                            a = o.finalHit;
                        if (i && a && Ba(i, a)) {
                            var s = t.context,
                                l = r(r({}, za(i.dateSpan, s)), {
                                    dayEl: i.dayEl,
                                    jsEvent: e.origEvent,
                                    view: s.viewApi || s.calendarApi.view
                                });
                            s.emitter.trigger("dateClick", l)
                        }
                    }
                }, n.dragging = new Aa(t.el), n.dragging.autoScroller.isEnabled = !1;
                var o = n.hitDragging = new Ua(n.dragging, Ci(t));
                return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragend", n.handleDragEnd), n
            }
            return n(t, e), t.prototype.destroy = function() {
                this.dragging.destroy()
            }, t
        }(Si),
        Fa = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.dragSelection = null, n.handlePointerDown = function(e) {
                    var t = n,
                        r = t.component,
                        o = t.dragging,
                        i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                    o.setIgnoreMove(!i), o.delay = e.isTouch ? function(e) {
                        var t = e.context.options,
                            n = t.selectLongPressDelay;
                        null == n && (n = t.longPressDelay);
                        return n
                    }(r) : null
                }, n.handleDragStart = function(e) {
                    n.component.context.calendarApi.unselect(e)
                }, n.handleHitUpdate = function(e, t) {
                    var o = n.component.context,
                        i = null,
                        a = !1;
                    e && ((i = function(e, t, n) {
                        var o = e.dateSpan,
                            i = t.dateSpan,
                            a = [o.range.start, o.range.end, i.range.start, i.range.end];
                        a.sort(fe);
                        for (var s = {}, l = 0, u = n; l < u.length; l++) {
                            var c = (0, u[l])(e, t);
                            if (!1 === c) return null;
                            c && r(s, c)
                        }
                        return s.range = {
                            start: a[0],
                            end: a[3]
                        }, s.allDay = o.allDay, s
                    }(n.hitDragging.initialHit, e, o.pluginHooks.dateSelectionTransformers)) && n.component.isDateSelectionValid(i) || (a = !0, i = null)), i ? o.dispatch({
                        type: "SELECT_DATES",
                        selection: i
                    }) : t || o.dispatch({
                        type: "UNSELECT_DATES"
                    }), a ? ne() : re(), t || (n.dragSelection = i)
                }, n.handlePointerUp = function(e) {
                    n.dragSelection && (Ln(n.dragSelection, e, n.component.context), n.dragSelection = null)
                };
                var o = t.component.context.options,
                    i = n.dragging = new Aa(t.el);
                i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
                var a = n.hitDragging = new Ua(n.dragging, Ci(t));
                return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("pointerup", n.handlePointerUp), n
            }
            return n(t, e), t.prototype.destroy = function() {
                this.dragging.destroy()
            }, t
        }(Si);
    var ja = function(e) {
        function t(n) {
            var o = e.call(this, n) || this;
            o.subjectEl = null, o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingContext = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function(e) {
                var t = e.origEvent.target,
                    n = o,
                    r = n.component,
                    i = n.dragging,
                    a = i.mirror,
                    s = r.context.options,
                    l = r.context;
                o.subjectEl = e.subjectEl;
                var u = o.subjectSeg = En(e.subjectEl),
                    c = (o.eventRange = u.eventRange).instance.instanceId;
                o.relevantEvents = Vt(l.getCurrentData().eventStore, c), i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, i.delay = e.isTouch && c !== r.props.eventSelection ? function(e) {
                    var t = e.context.options,
                        n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null, s.fixedMirrorParent ? a.parentNode = s.fixedMirrorParent : a.parentNode = V(t, ".fc"), a.revertDuration = s.dragRevertDuration;
                var d = r.isValidSegDownEl(t) && !V(t, ".fc-event-resizer");
                i.setIgnoreMove(!d), o.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
            }, o.handleDragStart = function(e) {
                var t = o.component.context,
                    n = o.eventRange,
                    r = n.instance.instanceId;
                e.isTouch ? r !== o.component.props.eventSelection && t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: r
                }) : t.dispatch({
                    type: "UNSELECT_EVENT"
                }), o.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                    el: o.subjectEl,
                    event: new Kn(t, n.def, n.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }))
            }, o.handleHitUpdate = function(e, t) {
                if (o.isDragging) {
                    var n = o.relevantEvents,
                        r = o.hitDragging.initialHit,
                        i = o.component.context,
                        a = null,
                        s = null,
                        l = null,
                        u = !1,
                        c = {
                            affectedEvents: n,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        };
                    if (e) {
                        var d = e.component,
                            p = (a = d.context).options;
                        i === a || p.editable && p.droppable ? (s = function(e, t, n) {
                            var r = e.dateSpan,
                                o = t.dateSpan,
                                i = r.range.start,
                                a = o.range.start,
                                s = {};
                            r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.component.context.options.allDayMaintainDuration, o.allDay && (i = we(i)));
                            var l = un(i, a, e.component.context.dateEnv, e.component === t.component ? e.component.largeUnit : null);
                            l.milliseconds && (s.allDay = !1);
                            for (var u = {
                                    datesDelta: l,
                                    standardProps: s
                                }, c = 0, d = n; c < d.length; c++) {
                                (0, d[c])(u, e, t)
                            }
                            return u
                        }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = zn(n, a.getCurrentData().eventUiBases, s, a), c.mutatedEvents = l, d.isInteractionValid(c) || (u = !0, s = null, l = null, c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        })) : a = null
                    }
                    o.displayDrag(a, c), u ? ne() : re(), t || (i === a && Ba(r, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")), o.receivingContext = a, o.validMutation = s, o.mutatedRelevantEvents = l)
                }
            }, o.handlePointerUp = function() {
                o.isDragging || o.cleanup()
            }, o.handleDragEnd = function(e) {
                if (o.isDragging) {
                    var t = o.component.context,
                        n = t.viewApi,
                        i = o,
                        a = i.receivingContext,
                        s = i.validMutation,
                        l = o.eventRange.def,
                        u = o.eventRange.instance,
                        c = new Kn(t, l, u),
                        d = o.relevantEvents,
                        p = o.mutatedRelevantEvents,
                        f = o.hitDragging.finalHit;
                    if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
                            el: o.subjectEl,
                            event: c,
                            jsEvent: e.origEvent,
                            view: n
                        }), s) {
                        if (a === t) {
                            var h = new Kn(t, p.defs[l.defId], u ? p.instances[u.instanceId] : null);
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: p
                            });
                            for (var g = {
                                    oldEvent: c,
                                    event: h,
                                    relatedEvents: $n(p, t, u),
                                    revert: function() {
                                        t.dispatch({
                                            type: "MERGE_EVENTS",
                                            eventStore: d
                                        })
                                    }
                                }, v = {}, m = 0, y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++) {
                                var S = y[m];
                                r(v, S(s, t))
                            }
                            t.emitter.trigger("eventDrop", r(r(r({}, g), v), {
                                el: e.subjectEl,
                                delta: s.datesDelta,
                                jsEvent: e.origEvent,
                                view: n
                            })), t.emitter.trigger("eventChange", g)
                        } else if (a) {
                            var E = {
                                event: c,
                                relatedEvents: $n(d, t, u),
                                revert: function() {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: d
                                    })
                                }
                            };
                            t.emitter.trigger("eventLeave", r(r({}, E), {
                                draggedEl: e.subjectEl,
                                view: n
                            })), t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: d
                            }), t.emitter.trigger("eventRemove", E);
                            var C = p.defs[l.defId],
                                b = p.instances[u.instanceId],
                                R = new Kn(a, C, b);
                            a.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: p
                            });
                            var D = {
                                event: R,
                                relatedEvents: $n(p, a, b),
                                revert: function() {
                                    a.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: p
                                    })
                                }
                            };
                            a.emitter.trigger("eventAdd", D), e.isTouch && a.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: u.instanceId
                            }), a.emitter.trigger("drop", r(r({}, za(f.dateSpan, a)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: f.component.context.viewApi
                            })), a.emitter.trigger("eventReceive", r(r({}, D), {
                                draggedEl: e.subjectEl,
                                view: f.component.context.viewApi
                            }))
                        }
                    } else t.emitter.trigger("_noEventDrop")
                }
                o.cleanup()
            };
            var i = o.component.context.options,
                a = o.dragging = new Aa(n.el);
            a.pointer.selector = t.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
            var s = o.hitDragging = new Ua(o.dragging, bi);
            return s.useSubjectCenter = n.useEventCenter, s.emitter.on("pointerdown", o.handlePointerDown), s.emitter.on("dragstart", o.handleDragStart), s.emitter.on("hitupdate", o.handleHitUpdate), s.emitter.on("pointerup", o.handlePointerUp), s.emitter.on("dragend", o.handleDragEnd), o
        }
        return n(t, e), t.prototype.destroy = function() {
            this.dragging.destroy()
        }, t.prototype.displayDrag = function(e, t) {
            var n = this.component.context,
                r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({
                type: "SET_EVENT_DRAG",
                state: {
                    affectedEvents: t.affectedEvents,
                    mutatedEvents: {
                        defs: {},
                        instances: {}
                    },
                    isEvent: !0
                }
            }) : r.dispatch({
                type: "UNSET_EVENT_DRAG"
            })), e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
            })
        }, t.prototype.clearDrag = function() {
            var e = this.component.context,
                t = this.receivingContext;
            t && t.dispatch({
                type: "UNSET_EVENT_DRAG"
            }), e !== t && e.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }, t.prototype.cleanup = function() {
            this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
        }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t
    }(Si);
    var Ga = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(e) {
                var t = n.component,
                    r = En(n.querySegEl(e)),
                    o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId)
            }, n.handleDragStart = function(e) {
                var t = n.component.context,
                    r = n.eventRange;
                n.relevantEvents = Vt(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
                var o = n.querySegEl(e);
                n.draggingSegEl = o, n.draggingSeg = En(o), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                    el: o,
                    event: new Kn(t, r.def, r.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                })
            }, n.handleHitUpdate = function(e, t, o) {
                var i = n.component.context,
                    a = n.relevantEvents,
                    s = n.hitDragging.initialHit,
                    l = n.eventRange.instance,
                    u = null,
                    c = null,
                    d = !1,
                    p = {
                        affectedEvents: a,
                        mutatedEvents: {
                            defs: {},
                            instances: {}
                        },
                        isEvent: !0
                    };
                e && (u = function(e, t, n, o, i) {
                    for (var a = e.component.context.dateEnv, s = e.dateSpan.range.start, l = t.dateSpan.range.start, u = un(s, l, a, e.component.largeUnit), c = {}, d = 0, p = i; d < p.length; d++) {
                        var f = (0, p[d])(e, t);
                        if (!1 === f) return null;
                        f && r(c, f)
                    }
                    if (n) {
                        if (a.add(o.start, u) < o.end) return c.startDelta = u, c
                    } else if (a.add(o.end, u) > o.start) return c.endDelta = u, c;
                    return null
                }(s, e, o.subjectEl.classList.contains("fc-event-resizer-start"), l.range, i.pluginHooks.eventResizeJoinTransforms)), u && (c = zn(a, i.getCurrentData().eventUiBases, u, i), p.mutatedEvents = c, n.component.isInteractionValid(p) || (d = !0, u = null, c = null, p.mutatedEvents = null)), c ? i.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: p
                }) : i.dispatch({
                    type: "UNSET_EVENT_RESIZE"
                }), d ? ne() : re(), t || (u && Ba(s, e) && (u = null), n.validMutation = u, n.mutatedRelevantEvents = c)
            }, n.handleDragEnd = function(e) {
                var t = n.component.context,
                    o = n.eventRange.def,
                    i = n.eventRange.instance,
                    a = new Kn(t, o, i),
                    s = n.relevantEvents,
                    l = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                        el: n.draggingSegEl,
                        event: a,
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    }), n.validMutation) {
                    var u = new Kn(t, l.defs[o.defId], i ? l.instances[i.instanceId] : null);
                    t.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: l
                    });
                    var c = {
                        oldEvent: a,
                        event: u,
                        relatedEvents: $n(l, t, i),
                        revert: function() {
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: s
                            })
                        }
                    };
                    t.emitter.trigger("eventResize", r(r({}, c), {
                        el: n.draggingSegEl,
                        startDelta: n.validMutation.startDelta || Ke(0),
                        endDelta: n.validMutation.endDelta || Ke(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })), t.emitter.trigger("eventChange", c)
                } else t.emitter.trigger("_noEventResize");
                n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null
            };
            var o = t.component,
                i = n.dragging = new Aa(t.el);
            i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.context.options.dragScroll;
            var a = n.hitDragging = new Ua(n.dragging, Ci(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("dragend", n.handleDragEnd), n
        }
        return n(t, e), t.prototype.destroy = function() {
            this.dragging.destroy()
        }, t.prototype.querySegEl = function(e) {
            return V(e.subjectEl, ".fc-event")
        }, t
    }(Si);
    var qa = function() {
            function e(e) {
                var t = this;
                this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(e) {
                    e.jsEvent && (t.isRecentPointerDateSelect = !0)
                }, this.onDocumentPointerDown = function(e) {
                    var n = t.context.options.unselectCancel,
                        r = e.origEvent.target;
                    t.matchesCancel = !!V(r, n), t.matchesEvent = !!V(r, ja.SELECTOR)
                }, this.onDocumentPointerUp = function(e) {
                    var n = t.context,
                        r = t.documentPointer,
                        o = n.getCurrentData();
                    if (!r.wasTouchScroll) {
                        if (o.dateSelection && !t.isRecentPointerDateSelect) {
                            var i = n.options.unselectAuto;
                            !i || i && t.matchesCancel || n.calendarApi.unselect(e)
                        }
                        o.eventSelection && !t.matchesEvent && n.dispatch({
                            type: "UNSELECT_EVENT"
                        })
                    }
                    t.isRecentPointerDateSelect = !1
                };
                var n = this.documentPointer = new ka(document);
                n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
            }
            return e.prototype.destroy = function() {
                this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
            }, e
        }(),
        Ya = {
            fixedMirrorParent: Ut
        },
        Za = {
            dateClick: Ut,
            eventDragStart: Ut,
            eventDragStop: Ut,
            eventDrop: Ut,
            eventResizeStart: Ut,
            eventResizeStop: Ut,
            eventResize: Ut,
            drop: Ut,
            eventReceive: Ut,
            eventLeave: Ut
        },
        Xa = function() {
            function e(e, t) {
                var n = this;
                this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function(e) {
                    n.dragMeta = n.buildDragMeta(e.subjectEl)
                }, this.handleHitUpdate = function(e, t, o) {
                    var i = n.hitDragging.dragging,
                        a = null,
                        s = null,
                        l = !1,
                        u = {
                            affectedEvents: {
                                defs: {},
                                instances: {}
                            },
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: n.dragMeta.create
                        };
                    e && (a = e.component.context, n.canDropElOnCalendar(o.subjectEl, a) && (s = function(e, t, n) {
                        for (var o = r({}, t.leftoverProps), i = 0, a = n.pluginHooks.externalDefTransforms; i < a.length; i++) {
                            var s = a[i];
                            r(o, s(e, t))
                        }
                        var l = nn(o, n),
                            u = l.refined,
                            c = l.extra,
                            d = on(u, c, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                            p = e.range.start;
                        e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
                        var f = t.duration ? n.dateEnv.add(p, t.duration) : Bn(e.allDay, p, n),
                            h = He(d.defId, {
                                start: p,
                                end: f
                            });
                        return {
                            def: d,
                            instance: h
                        }
                    }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = zt(s), (l = !uo(u, a)) && (u.mutatedEvents = {
                        defs: {},
                        instances: {}
                    }, s = null))), n.displayDrag(a, u), i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), l ? ne() : re(), t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s)
                }, this.handleDragEnd = function(e) {
                    var t = n,
                        o = t.receivingContext,
                        i = t.droppableEvent;
                    if (n.clearDrag(), o && i) {
                        var a = n.hitDragging.finalHit,
                            s = a.component.context.viewApi,
                            l = n.dragMeta;
                        if (o.emitter.trigger("drop", r(r({}, za(a.dateSpan, o)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: s
                            })), l.create) {
                            var u = zt(i);
                            o.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: u
                            }), e.isTouch && o.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: i.instance.instanceId
                            }), o.emitter.trigger("eventReceive", {
                                event: new Kn(o, i.def, i.instance),
                                relatedEvents: [],
                                revert: function() {
                                    o.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: u
                                    })
                                },
                                draggedEl: e.subjectEl,
                                view: s
                            })
                        }
                    }
                    n.receivingContext = null, n.droppableEvent = null
                };
                var o = this.hitDragging = new Ua(e, bi);
                o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
            }
            return e.prototype.buildDragMeta = function(e) {
                return "object" == typeof this.suppliedDragMeta ? Ti(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? Ti(this.suppliedDragMeta(e)) : Ti((t = function(e, t) {
                    var n = Di.dataAttrPrefix,
                        r = (n ? n + "-" : "") + t;
                    return e.getAttribute("data-" + r) || ""
                }(e, "event")) ? JSON.parse(t) : {
                    create: !1
                });
                var t
            }, e.prototype.displayDrag = function(e, t) {
                var n = this.receivingContext;
                n && n !== e && n.dispatch({
                    type: "UNSET_EVENT_DRAG"
                }), e && e.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: t
                })
            }, e.prototype.clearDrag = function() {
                this.receivingContext && this.receivingContext.dispatch({
                    type: "UNSET_EVENT_DRAG"
                })
            }, e.prototype.canDropElOnCalendar = function(e, t) {
                var n = t.options.dropAccept;
                return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(F(e, n))
            }, e
        }();
    Di.dataAttrPrefix = "";
    var Ka = function() {
            function e(e, t) {
                var n = this;
                void 0 === t && (t = {}), this.handlePointerDown = function(e) {
                    var t = n.dragging,
                        r = n.settings,
                        o = r.minDistance,
                        i = r.longPressDelay;
                    t.minDistance = null != o ? o : e.isTouch ? 0 : It.eventDragMinDistance, t.delay = e.isTouch ? null != i ? i : It.longPressDelay : 0
                }, this.handleDragStart = function(e) {
                    e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
                }, this.settings = t;
                var r = this.dragging = new Aa(e);
                r.touchScrollAllowed = !1, null != t.itemSelector && (r.pointer.selector = t.itemSelector), null != t.appendTo && (r.mirror.parentNode = t.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new Xa(r, t.eventData)
            }
            return e.prototype.destroy = function() {
                this.dragging.destroy()
            }, e
        }(),
        Ja = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(e) {
                    n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
                }, n.handlePointerMove = function(e) {
                    n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
                }, n.handlePointerUp = function(e) {
                    n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
                };
                var r = n.pointer = new ka(t);
                return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
            }
            return n(t, e), t.prototype.destroy = function() {
                this.pointer.destroy()
            }, t.prototype.setIgnoreMove = function(e) {
                this.shouldIgnoreMove = e
            }, t.prototype.setMirrorIsVisible = function(e) {
                if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
                else {
                    var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                    t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
                }
            }, t
        }(Ri),
        $a = function() {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
                var r = this.dragging = new Ja(n);
                "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Xa(r, t.eventData)
            }
            return e.prototype.destroy = function() {
                this.dragging.destroy()
            }, e
        }(),
        Qa = yo({
            componentInteractions: [Va, Fa, ja, Ga],
            calendarInteractions: [qa],
            elementDraggingImpl: Aa,
            optionRefiners: Ya,
            listenerRefiners: Za
        }),
        es = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.headerElRef = Yr(), t
            }
            return n(t, e), t.prototype.renderSimpleLayout = function(e, t) {
                var n = this.props,
                    r = this.context,
                    o = [],
                    i = ua(r.options);
                return e && o.push({
                    type: "header",
                    key: "header",
                    isSticky: i,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), o.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunk: {
                        content: t
                    }
                }), Gr(Po, {
                    viewSpec: r.viewSpec
                }, (function(e, t) {
                    return Gr("div", {
                        ref: e,
                        className: ["fc-daygrid"].concat(t).join(" ")
                    }, Gr(da, {
                        liquid: !n.isHeightAuto && !n.forPrint,
                        cols: [],
                        sections: o
                    }))
                }))
            }, t.prototype.renderHScrollLayout = function(e, t, n, r) {
                var o = this.context.pluginHooks.scrollGridImpl;
                if (!o) throw new Error("No ScrollGrid implementation");
                var i = this.props,
                    a = this.context,
                    s = !i.forPrint && ua(a.options),
                    l = !i.forPrint && ca(a.options),
                    u = [];
                return e && u.push({
                    type: "header",
                    key: "header",
                    isSticky: s,
                    chunks: [{
                        key: "main",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), u.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunks: [{
                        key: "main",
                        content: t
                    }]
                }), l && u.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "main",
                        content: la
                    }]
                }), Gr(Po, {
                    viewSpec: a.viewSpec
                }, (function(e, t) {
                    return Gr("div", {
                        ref: e,
                        className: ["fc-daygrid"].concat(t).join(" ")
                    }, Gr(o, {
                        liquid: !i.isHeightAuto && !i.forPrint,
                        colGroups: [{
                            cols: [{
                                span: n,
                                minWidth: r
                            }]
                        }],
                        sections: u
                    }))
                }))
            }, t
        }(mo);

    function ts(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }

    function ns(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }

    function rs(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }
    var os = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.context.options.navLinks ? {
                    "data-navlink": xr(e.date),
                    tabIndex: 0
                } : {};
            return Gr(ma, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: is
            }, (function(n, o) {
                return (o || e.forceDayTop) && Gr("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, Gr("a", r({
                    className: "fc-daygrid-day-number"
                }, t), o || Gr(Zr, null, " ")))
            }))
        }, t
    }(no);

    function is(e) {
        return e.dayNumberText
    }
    var as = kt({
            week: "narrow"
        }),
        ss = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function(e) {
                    t.rootEl = e, io(t.props.elRef, e)
                }, t.handleMoreLinkClick = function(e) {
                    var n = t.props;
                    if (n.onMoreClick) {
                        var r = n.segsByEachCol,
                            o = r.filter((function(e) {
                                return n.segIsHidden[e.eventRange.instance.instanceId]
                            }));
                        n.onMoreClick({
                            date: n.date,
                            allSegs: r,
                            hiddenSegs: o,
                            moreCnt: n.moreCnt,
                            dayEl: t.rootEl,
                            ev: e
                        })
                    }
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.context,
                    n = t.options,
                    o = t.viewApi,
                    i = this.props,
                    a = i.date,
                    s = i.dateProfile,
                    l = {
                        num: i.moreCnt,
                        text: i.buildMoreLinkText(i.moreCnt),
                        view: o
                    },
                    u = n.navLinks ? {
                        "data-navlink": xr(a, "week"),
                        tabIndex: 0
                    } : {};
                return Gr(Sa, {
                    date: a,
                    dateProfile: s,
                    todayRange: i.todayRange,
                    showDayNumber: i.showDayNumber,
                    extraHookProps: i.extraHookProps,
                    elRef: this.handleRootEl
                }, (function(t, o, c, d) {
                    return Gr("td", r({
                        ref: t,
                        className: ["fc-daygrid-day"].concat(o, i.extraClassNames || []).join(" ")
                    }, c, i.extraDataAttrs), Gr("div", {
                        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                        ref: i.innerElRef
                    }, i.showWeekNumber && Gr(Ra, {
                        date: a,
                        defaultFormat: as
                    }, (function(e, t, n, o) {
                        return Gr("a", r({
                            ref: e,
                            className: ["fc-daygrid-week-number"].concat(t).join(" ")
                        }, u), o)
                    })), !d && Gr(os, {
                        date: a,
                        dateProfile: s,
                        showDayNumber: i.showDayNumber,
                        forceDayTop: i.forceDayTop,
                        todayRange: i.todayRange,
                        extraHookProps: i.extraHookProps
                    }), Gr("div", {
                        className: "fc-daygrid-day-events",
                        ref: i.fgContentElRef,
                        style: {
                            paddingBottom: i.fgPaddingBottom
                        }
                    }, i.fgContent, Boolean(i.moreCnt) && Gr("div", {
                        className: "fc-daygrid-day-bottom",
                        style: {
                            marginTop: i.moreMarginTop
                        }
                    }, Gr(bo, {
                        hookProps: l,
                        classNames: n.moreLinkClassNames,
                        content: n.moreLinkContent,
                        defaultContent: ls,
                        didMount: n.moreLinkDidMount,
                        willUnmount: n.moreLinkWillUnmount
                    }, (function(t, n, r, o) {
                        return Gr("a", {
                            ref: t,
                            className: ["fc-daygrid-more-link"].concat(n).join(" "),
                            onClick: e.handleMoreLinkClick
                        }, o)
                    })))), Gr("div", {
                        className: "fc-daygrid-day-bg"
                    }, i.bgContent)))
                }))
            }, t
        }(mo);

    function ls(e) {
        return e.text
    }
    ss.addPropsEquality({
        onMoreClick: !0
    });
    var us = kt({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    });

    function cs(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }
    var ds = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.context,
                n = t.options.eventTimeFormat || us,
                o = Mn(e.seg, n, t, !0, e.defaultDisplayEventEnd);
            return Gr(pa, {
                seg: e.seg,
                timeText: o,
                defaultContent: ps,
                isDragging: e.isDragging,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, (function(t, n, o, i) {
                return Gr("a", r({
                    className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
                    ref: t
                }, (a = e.seg, (s = a.eventRange.def.url) ? {
                    href: s
                } : {})), i);
                var a, s
            }))
        }, t
    }(no);

    function ps(e) {
        return Gr(Zr, null, Gr("div", {
            className: "fc-daygrid-event-dot",
            style: {
                borderColor: e.borderColor || e.backgroundColor
            }
        }), e.timeText && Gr("div", {
            className: "fc-event-time"
        }, e.timeText), Gr("div", {
            className: "fc-event-title"
        }, e.event.title || Gr(Zr, null, " ")))
    }
    var fs = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props;
            return Gr(fa, r({}, e, {
                extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                defaultTimeFormat: us,
                defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                disableResizing: !e.seg.eventRange.def.allDay
            }))
        }, t
    }(no);

    function hs(e, t, n, o, i, a, s, l) {
        for (var u = [], c = [], d = {}, p = {}, f = {}, h = {}, g = {}, v = 0; v < s; v += 1) u.push([]), c.push(0);
        for (var m = 0, y = t = Rn(t, l); m < y.length; m++) {
            T(D = y[m], i[D.eventRange.instance.instanceId + ":" + D.firstCol] || 0)
        }!0 === n || !0 === o ? function(e, t, n, r) {
            vs(e, t, n, !0, (function(e) {
                return e.bottom <= r
            }))
        }(c, d, u, a) : "number" == typeof n ? function(e, t, n, r) {
            vs(e, t, n, !1, (function(e, t) {
                return t < r
            }))
        }(c, d, u, n) : "number" == typeof o && function(e, t, n, r) {
            vs(e, t, n, !0, (function(e, t) {
                return t < r
            }))
        }(c, d, u, o);
        for (var S = 0; S < s; S += 1) {
            for (var E = 0, C = 0, b = 0, R = u[S]; b < R.length; b++) {
                var D, w = R[b];
                d[(D = w.seg).eventRange.instance.instanceId] || (p[D.eventRange.instance.instanceId] = w.top, D.firstCol === D.lastCol && D.isStart && D.isEnd ? (f[D.eventRange.instance.instanceId] = w.top - E, C = 0, E = w.bottom) : C = w.bottom - E)
            }
            C && (c[S] ? h[S] = C : g[S] = C)
        }

        function T(e, t) {
            if (!x(e, t, 0))
                for (var n = e.firstCol; n <= e.lastCol; n += 1)
                    for (var r = 0, o = u[n]; r < o.length; r++) {
                        if (x(e, t, o[r].bottom)) return
                    }
        }

        function x(e, t, n) {
            if (function(e, t, n) {
                    for (var r = e.firstCol; r <= e.lastCol; r += 1)
                        for (var o = 0, i = u[r]; o < i.length; o++) {
                            var a = i[o];
                            if (n < a.bottom && n + t > a.top) return !1
                        }
                    return !0
                }(e, t, n)) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1) {
                    for (var o = u[r], i = 0; i < o.length && n >= o[i].top;) i += 1;
                    o.splice(i, 0, {
                        seg: e,
                        top: n,
                        bottom: n + t
                    })
                }
                return !0
            }
            return !1
        }
        for (var M in i) i[M] || (d[M.split(":")[0]] = !0);
        return {
            segsByFirstCol: u.map(gs),
            segsByEachCol: u.map((function(t, n) {
                var o = function(e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        t.push(o.seg)
                    }
                    return t
                }(t);
                return o = function(e, t, n) {
                    for (var o = t, i = ye(o, 1), a = {
                            start: o,
                            end: i
                        }, s = [], l = 0, u = e; l < u.length; l++) {
                        var c = u[l],
                            d = c.eventRange,
                            p = d.range,
                            f = pn(p, a);
                        f && s.push(r(r({}, c), {
                            firstCol: n,
                            lastCol: n,
                            eventRange: {
                                def: d.def,
                                ui: r(r({}, d.ui), {
                                    durationEditable: !1
                                }),
                                instance: d.instance,
                                range: f
                            },
                            isStart: c.isStart && f.start.valueOf() === p.start.valueOf(),
                            isEnd: c.isEnd && f.end.valueOf() === p.end.valueOf()
                        }))
                    }
                    return s
                }(o, e[n].date, n)
            })),
            segIsHidden: d,
            segTops: p,
            segMarginTops: f,
            moreCnts: c,
            moreTops: h,
            paddingBottoms: g
        }
    }

    function gs(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            i.seg.firstCol === t && n.push(i.seg)
        }
        return n
    }

    function vs(e, t, n, r, o) {
        for (var i = e.length, a = {}, s = [], l = 0; l < i; l += 1) s.push([]);
        for (l = 0; l < i; l += 1)
            for (var u = 0, c = 0, d = n[l]; c < d.length; c++) {
                var p = d[c];
                o(p, u) ? f(p) : h(p, u, r), p.top !== p.bottom && (u += 1)
            }

        function f(e) {
            var t = e.seg,
                n = t.eventRange.instance.instanceId;
            if (!a[n]) {
                a[n] = !0;
                for (var r = t.firstCol; r <= t.lastCol; r += 1) {
                    for (var o = s[r], i = 0; i < o.length && e.top >= o[i].top;) i += 1;
                    o.splice(i, 0, e)
                }
            }
        }

        function h(n, r, o) {
            var i = n.seg,
                a = i.eventRange.instance.instanceId;
            if (!t[a]) {
                t[a] = !0;
                for (var l = i.firstCol; l <= i.lastCol; l += 1) {
                    e[l] += 1;
                    var u = e[l];
                    if (o && 1 === u && r > 0)
                        for (var c = r - 1; s[l].length > c;) h(s[l].pop(), s[l].length, !1)
                }
            }
        }
    }
    var ms = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.cellElRefs = new Ji, t.frameElRefs = new Ji, t.fgElRefs = new Ji, t.segHarnessRefs = new Ji, t.rootElRef = Yr(), t.state = {
                framePositions: null,
                maxContentHeight: null,
                segHeights: {}
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = this.state,
                o = this.context,
                i = t.cells.length,
                a = ns(t.businessHourSegs, i),
                s = ns(t.bgEventSegs, i),
                l = ns(this.getHighlightSegs(), i),
                u = ns(this.getMirrorSegs(), i),
                c = hs(t.cells, t.fgEventSegs, t.dayMaxEvents, t.dayMaxEventRows, n.segHeights, n.maxContentHeight, i, o.options.eventOrder),
                d = c.paddingBottoms,
                p = c.segsByFirstCol,
                f = c.segsByEachCol,
                h = c.segIsHidden,
                g = c.segTops,
                v = c.segMarginTops,
                m = c.moreCnts,
                y = c.moreTops,
                S = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
            return Gr("tr", {
                ref: this.rootElRef
            }, t.renderIntro && t.renderIntro(), t.cells.map((function(n, o) {
                var i = e.renderFgSegs(p[o], h, g, v, S, t.todayRange),
                    c = e.renderFgSegs(u[o], {}, g, {}, {}, t.todayRange, Boolean(t.eventDrag), Boolean(t.eventResize), !1);
                return Gr(ss, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    innerElRef: e.frameElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    showDayNumber: t.showDayNumbers,
                    showWeekNumber: t.showWeekNumbers && 0 === o,
                    forceDayTop: t.showWeekNumbers,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    moreCnt: m[o],
                    buildMoreLinkText: t.buildMoreLinkText,
                    onMoreClick: function(e) {
                        t.onMoreClick(r(r({}, e), {
                            fromCol: o
                        }))
                    },
                    segIsHidden: h,
                    moreMarginTop: y[o],
                    segsByEachCol: f[o],
                    fgPaddingBottom: d[o],
                    fgContentElRef: e.fgElRefs.createRef(n.key),
                    fgContent: Gr(Zr, null, Gr(Zr, null, i), Gr(Zr, null, c)),
                    bgContent: Gr(Zr, null, e.renderFillSegs(l[o], "highlight"), e.renderFillSegs(a[o], "non-business"), e.renderFillSegs(s[o], "bg-event"))
                })
            })))
        }, t.prototype.componentDidMount = function() {
            this.updateSizing(!0)
        }, t.prototype.componentDidUpdate = function(e, t) {
            var n = this.props;
            this.updateSizing(!ze(e, n))
        }, t.prototype.getHighlightSegs = function() {
            var e = this.props;
            return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
        }, t.prototype.getMirrorSegs = function() {
            var e = this.props;
            return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
        }, t.prototype.renderFgSegs = function(e, t, n, o, i, a, s, l, u) {
            var c = this.context,
                d = this.props.eventSelection,
                p = this.state.framePositions,
                f = 1 === this.props.cells.length,
                h = [];
            if (p)
                for (var g = 0, v = e; g < v.length; g++) {
                    var m = v[g],
                        y = m.eventRange.instance.instanceId,
                        S = s || l || u,
                        E = i[y],
                        C = t[y] || E,
                        b = t[y] || S || m.firstCol !== m.lastCol || !m.isStart || !m.isEnd,
                        R = void 0,
                        D = void 0,
                        w = void 0,
                        T = void 0;
                    b ? (D = n[y], c.isRtl ? (T = 0, w = p.lefts[m.lastCol] - p.lefts[m.firstCol]) : (w = 0, T = p.rights[m.firstCol] - p.rights[m.lastCol])) : R = o[y], h.push(Gr("div", {
                        className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""),
                        key: y,
                        ref: S ? null : this.segHarnessRefs.createRef(y + ":" + m.firstCol),
                        style: {
                            visibility: C ? "hidden" : "",
                            marginTop: R || "",
                            top: D || "",
                            left: w || "",
                            right: T || ""
                        }
                    }, cs(m) ? Gr(ds, r({
                        seg: m,
                        isDragging: s,
                        isSelected: y === d,
                        defaultDisplayEventEnd: f
                    }, kn(m, a))) : Gr(fs, r({
                        seg: m,
                        isDragging: s,
                        isResizing: l,
                        isDateSelecting: u,
                        isSelected: y === d,
                        defaultDisplayEventEnd: f
                    }, kn(m, a)))))
                }
            return h
        }, t.prototype.renderFillSegs = function(e, t) {
            var n = this.context.isRtl,
                i = this.props.todayRange,
                a = this.state.framePositions,
                s = [];
            if (a)
                for (var l = 0, u = e; l < u.length; l++) {
                    var c = u[l],
                        d = n ? {
                            right: 0,
                            left: a.lefts[c.lastCol] - a.lefts[c.firstCol]
                        } : {
                            left: 0,
                            right: a.rights[c.firstCol] - a.rights[c.lastCol]
                        };
                    s.push(Gr("div", {
                        key: In(c.eventRange),
                        className: "fc-daygrid-bg-harness",
                        style: d
                    }, "bg-event" === t ? Gr(Ca, r({
                        seg: c
                    }, kn(c, i))) : Ea(t)))
                }
            return Gr.apply(void 0, o([Zr, {}], s))
        }, t.prototype.updateSizing = function(e) {
            var t = this.props,
                n = this.frameElRefs;
            if (null !== t.clientWidth) {
                if (e) {
                    var r = t.cells.map((function(e) {
                        return n.currentMap[e.key]
                    }));
                    if (r.length) {
                        var o = this.rootElRef.current;
                        this.setState({
                            framePositions: new Ur(o, r, !0, !1)
                        })
                    }
                }
                var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                this.setState({
                    segHeights: this.computeSegHeights(),
                    maxContentHeight: i ? this.computeMaxContentHeight() : null
                })
            }
        }, t.prototype.computeSegHeights = function() {
            return Le(this.segHarnessRefs.currentMap, (function(e) {
                return e.getBoundingClientRect().height
            }))
        }, t.prototype.computeMaxContentHeight = function() {
            var e = this.props.cells[0].key,
                t = this.cellElRefs.currentMap[e],
                n = this.fgElRefs.currentMap[e];
            return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
        }, t.prototype.getCellEls = function() {
            var e = this.cellElRefs.currentMap;
            return this.props.cells.map((function(t) {
                return e[t.key]
            }))
        }, t
    }(mo);
    ms.addPropsEquality({
        onMoreClick: !0
    }), ms.addStateEquality({
        segHeights: ze
    });
    var ys = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.repositioner = new ri(t.updateSize.bind(t)), t.handleRootEl = function(e) {
                    t.rootEl = e, t.props.elRef && io(t.props.elRef, e)
                }, t.handleDocumentMousedown = function(e) {
                    var n = t.props.onClose;
                    n && !t.rootEl.contains(e.target) && n()
                }, t.handleDocumentScroll = function() {
                    t.repositioner.request(10)
                }, t.handleCloseClick = function() {
                    var e = t.props.onClose;
                    e && e()
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.context.theme,
                    t = this.props,
                    n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
                return Gr("div", r({
                    className: n.join(" ")
                }, t.extraAttrs, {
                    ref: this.handleRootEl
                }), Gr("div", {
                    className: "fc-popover-header " + e.getClass("popoverHeader")
                }, Gr("span", {
                    className: "fc-popover-title"
                }, t.title), Gr("span", {
                    className: "fc-popover-close " + e.getIconClass("close"),
                    onClick: this.handleCloseClick
                })), Gr("div", {
                    className: "fc-popover-body " + e.getClass("popoverContent")
                }, t.children))
            }, t.prototype.componentDidMount = function() {
                document.addEventListener("mousedown", this.handleDocumentMousedown), document.addEventListener("scroll", this.handleDocumentScroll), this.updateSize()
            }, t.prototype.componentWillUnmount = function() {
                document.removeEventListener("mousedown", this.handleDocumentMousedown), document.removeEventListener("scroll", this.handleDocumentScroll)
            }, t.prototype.updateSize = function() {
                var e = this.props,
                    t = e.alignmentEl,
                    n = e.topAlignmentEl,
                    r = this.rootEl;
                if (r) {
                    var o, i = r.getBoundingClientRect(),
                        a = t.getBoundingClientRect(),
                        s = n ? n.getBoundingClientRect().top : a.top;
                    s = Math.min(s, window.innerHeight - i.height - 10), s = Math.max(s, 10), o = this.context.isRtl ? a.right - i.width : a.left, o = Math.min(o, window.innerWidth - i.width - 10), Y(r, {
                        top: s,
                        left: o = Math.max(o, 10)
                    })
                }
            }, t
        }(no),
        Ss = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.context,
                    t = e.options,
                    n = e.dateEnv,
                    o = this.props,
                    i = o.date,
                    a = o.hiddenInstances,
                    s = o.todayRange,
                    l = o.dateProfile,
                    u = o.selectedInstanceId,
                    c = n.format(i, t.dayPopoverFormat);
                return Gr(Sa, {
                    date: i,
                    dateProfile: l,
                    todayRange: s,
                    elRef: this.rootElRef
                }, (function(e, t, n) {
                    return Gr(ys, {
                        elRef: e,
                        title: c,
                        extraClassNames: ["fc-more-popover"].concat(t),
                        extraAttrs: n,
                        onClose: o.onCloseClick,
                        alignmentEl: o.alignmentEl,
                        topAlignmentEl: o.topAlignmentEl
                    }, Gr(ma, {
                        date: i,
                        dateProfile: l,
                        todayRange: s
                    }, (function(e, t) {
                        return t && Gr("div", {
                            className: "fc-more-popover-misc",
                            ref: e
                        }, t)
                    })), o.segs.map((function(e) {
                        var t = e.eventRange.instance.instanceId;
                        return Gr("div", {
                            className: "fc-daygrid-event-harness",
                            key: t,
                            style: {
                                visibility: a[t] ? "hidden" : ""
                            }
                        }, cs(e) ? Gr(ds, r({
                            seg: e,
                            isDragging: !1,
                            isSelected: t === u,
                            defaultDisplayEventEnd: !1
                        }, kn(e, s))) : Gr(fs, r({
                            seg: e,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: t === u,
                            defaultDisplayEventEnd: !1
                        }, kn(e, s))))
                    })))
                }))
            }, t.prototype.positionToHit = function(e, t, n) {
                var r = this.rootElRef.current;
                if (!n || !r) return null;
                var o = n.getBoundingClientRect(),
                    i = r.getBoundingClientRect(),
                    a = i.left - o.left,
                    s = i.top - o.top,
                    l = e - a,
                    u = t - s,
                    c = this.props.date;
                return l >= 0 && l < i.width && u >= 0 && u < i.height ? {
                    dateSpan: {
                        allDay: !0,
                        range: {
                            start: c,
                            end: ye(c, 1)
                        }
                    },
                    dayEl: r,
                    relativeRect: {
                        left: a,
                        top: s,
                        right: i.width,
                        bottom: i.height
                    },
                    layer: 1
                } : null
            }, t
        }(mo),
        Es = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.splitBusinessHourSegs = pt(ts), t.splitBgEventSegs = pt(ts), t.splitFgEventSegs = pt(ts), t.splitDateSelectionSegs = pt(ts), t.splitEventDrag = pt(rs), t.splitEventResize = pt(rs), t.buildBuildMoreLinkText = pt(Cs), t.morePopoverRef = Yr(), t.rowRefs = new Ji, t.state = {
                    morePopoverState: null
                }, t.handleRootEl = function(e) {
                    t.rootEl = e, io(t.props.elRef, e)
                }, t.handleMoreLinkClick = function(e) {
                    var n = t.context,
                        o = n.dateEnv,
                        i = n.options.moreLinkClick;

                    function a(e) {
                        var t = e.eventRange,
                            r = t.def,
                            i = t.instance,
                            a = t.range;
                        return {
                            event: new Kn(n, r, i),
                            start: o.toDate(a.start),
                            end: o.toDate(a.end),
                            isStart: e.isStart,
                            isEnd: e.isEnd
                        }
                    }
                    "function" == typeof i && (i = i({
                        date: o.toDate(e.date),
                        allDay: !0,
                        allSegs: e.allSegs.map(a),
                        hiddenSegs: e.hiddenSegs.map(a),
                        jsEvent: e.ev,
                        view: n.viewApi
                    })), i && "popover" !== i ? "string" == typeof i && n.calendarApi.zoomTo(e.date, i) : t.setState({
                        morePopoverState: r(r({}, e), {
                            currentFgEventSegs: t.props.fgEventSegs,
                            fromRow: e.fromRow,
                            fromCol: e.fromCol
                        })
                    })
                }, t.handleMorePopoverClose = function() {
                    t.setState({
                        morePopoverState: null
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.dateProfile,
                    o = t.dayMaxEventRows,
                    i = t.dayMaxEvents,
                    a = t.expandRows,
                    s = this.state.morePopoverState,
                    l = t.cells.length,
                    u = this.splitBusinessHourSegs(t.businessHourSegs, l),
                    c = this.splitBgEventSegs(t.bgEventSegs, l),
                    d = this.splitFgEventSegs(t.fgEventSegs, l),
                    p = this.splitDateSelectionSegs(t.dateSelectionSegs, l),
                    f = this.splitEventDrag(t.eventDrag, l),
                    h = this.splitEventResize(t.eventResize, l),
                    g = this.buildBuildMoreLinkText(this.context.options.moreLinkText),
                    v = !0 === i || !0 === o;
                return v && !a && (v = !1, o = null, i = null), Gr("div", {
                    className: ["fc-daygrid-body", v ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", a ? "" : "fc-daygrid-body-natural"].join(" "),
                    ref: this.handleRootEl,
                    style: {
                        width: t.clientWidth,
                        minWidth: t.tableMinWidth
                    }
                }, Gr(zi, {
                    unit: "day"
                }, (function(v, m) {
                    return Gr(Zr, null, Gr("table", {
                        className: "fc-scrollgrid-sync-table",
                        style: {
                            width: t.clientWidth,
                            minWidth: t.tableMinWidth,
                            height: a ? t.clientHeight : ""
                        }
                    }, t.colGroupNode, Gr("tbody", null, t.cells.map((function(a, s) {
                        return Gr(ms, {
                            ref: e.rowRefs.createRef(s),
                            key: a.length ? a[0].date.toISOString() : s,
                            showDayNumbers: l > 1,
                            showWeekNumbers: t.showWeekNumbers,
                            todayRange: m,
                            dateProfile: n,
                            cells: a,
                            renderIntro: t.renderRowIntro,
                            businessHourSegs: u[s],
                            eventSelection: t.eventSelection,
                            bgEventSegs: c[s].filter(bs),
                            fgEventSegs: d[s],
                            dateSelectionSegs: p[s],
                            eventDrag: f[s],
                            eventResize: h[s],
                            dayMaxEvents: i,
                            dayMaxEventRows: o,
                            clientWidth: t.clientWidth,
                            clientHeight: t.clientHeight,
                            buildMoreLinkText: g,
                            onMoreClick: function(t) {
                                e.handleMoreLinkClick(r(r({}, t), {
                                    fromRow: s
                                }))
                            }
                        })
                    })))), !t.forPrint && s && s.currentFgEventSegs === t.fgEventSegs && Gr(Ss, {
                        ref: e.morePopoverRef,
                        date: s.date,
                        dateProfile: n,
                        segs: s.allSegs,
                        alignmentEl: s.dayEl,
                        topAlignmentEl: 1 === l ? t.headerAlignElRef.current : null,
                        onCloseClick: e.handleMorePopoverClose,
                        selectedInstanceId: t.eventSelection,
                        hiddenInstances: (t.eventDrag ? t.eventDrag.affectedInstances : null) || (t.eventResize ? t.eventResize.affectedInstances : null) || {},
                        todayRange: m
                    }))
                })))
            }, t.prototype.prepareHits = function() {
                this.rowPositions = new Ur(this.rootEl, this.rowRefs.collect().map((function(e) {
                    return e.getCellEls()[0]
                })), !1, !0), this.colPositions = new Ur(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
            }, t.prototype.positionToHit = function(e, t) {
                var n = this.morePopoverRef.current,
                    o = n ? n.positionToHit(e, t, this.rootEl) : null,
                    i = this.state.morePopoverState;
                if (o) return r({
                    row: i.fromRow,
                    col: i.fromCol
                }, o);
                var a = this.colPositions,
                    s = this.rowPositions,
                    l = a.leftToIndex(e),
                    u = s.topToIndex(t);
                return null != u && null != l ? {
                    row: u,
                    col: l,
                    dateSpan: {
                        range: this.getCellRange(u, l),
                        allDay: !0
                    },
                    dayEl: this.getCellEl(u, l),
                    relativeRect: {
                        left: a.lefts[l],
                        right: a.rights[l],
                        top: s.tops[u],
                        bottom: s.bottoms[u]
                    }
                } : null
            }, t.prototype.getCellEl = function(e, t) {
                return this.rowRefs.currentMap[e].getCellEls()[t]
            }, t.prototype.getCellRange = function(e, t) {
                var n = this.props.cells[e][t].date;
                return {
                    start: n,
                    end: ye(n, 1)
                }
            }, t
        }(mo);

    function Cs(e) {
        return "function" == typeof e ? e : function(t) {
            return "+" + t + " " + e
        }
    }

    function bs(e) {
        return e.eventRange.def.allDay
    }
    var Rs = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.forceDayIfListItem = !0, t
            }
            return n(t, e), t.prototype.sliceRange = function(e, t) {
                return t.sliceRange(e)
            }, t
        }(Yi),
        Ds = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slicer = new Rs, t.tableRef = Yr(), t.handleRootEl = function(e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context;
                return Gr(Es, r({
                    ref: this.tableRef,
                    elRef: this.handleRootEl
                }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                    dateProfile: e.dateProfile,
                    cells: e.dayTableModel.cells,
                    colGroupNode: e.colGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    renderRowIntro: e.renderRowIntro,
                    dayMaxEvents: e.dayMaxEvents,
                    dayMaxEventRows: e.dayMaxEventRows,
                    showWeekNumbers: e.showWeekNumbers,
                    expandRows: e.expandRows,
                    headerAlignElRef: e.headerAlignElRef,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: e.forPrint
                }))
            }, t.prototype.prepareHits = function() {
                this.tableRef.current.prepareHits()
            }, t.prototype.queryHit = function(e, t) {
                var n = this.tableRef.current.positionToHit(e, t);
                return n ? {
                    component: this,
                    dateSpan: n.dateSpan,
                    dayEl: n.dayEl,
                    rect: {
                        left: n.relativeRect.left,
                        right: n.relativeRect.right,
                        top: n.relativeRect.top,
                        bottom: n.relativeRect.bottom
                    },
                    layer: 0
                } : null
            }, t
        }(mo),
        ws = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayTableModel = pt(Ts), t.headerRef = Yr(), t.tableRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.dateProfileGenerator,
                    o = this.props,
                    i = this.buildDayTableModel(o.dateProfile, r),
                    a = n.dayHeaders && Gr(Fi, {
                        ref: this.headerRef,
                        dateProfile: o.dateProfile,
                        dates: i.headerDates,
                        datesRepDistinctDays: 1 === i.rowCnt
                    }),
                    s = function(t) {
                        return Gr(Ds, {
                            ref: e.tableRef,
                            dateProfile: o.dateProfile,
                            dayTableModel: i,
                            businessHours: o.businessHours,
                            dateSelection: o.dateSelection,
                            eventStore: o.eventStore,
                            eventUiBases: o.eventUiBases,
                            eventSelection: o.eventSelection,
                            eventDrag: o.eventDrag,
                            eventResize: o.eventResize,
                            nextDayThreshold: n.nextDayThreshold,
                            colGroupNode: t.tableColGroupNode,
                            tableMinWidth: t.tableMinWidth,
                            dayMaxEvents: n.dayMaxEvents,
                            dayMaxEventRows: n.dayMaxEventRows,
                            showWeekNumbers: n.weekNumbers,
                            expandRows: !o.isHeightAuto,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: t.clientWidth,
                            clientHeight: t.clientHeight,
                            forPrint: o.forPrint
                        })
                    };
                return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
            }, t
        }(es);

    function Ts(e, t) {
        var n = new Gi(e.renderRange, t);
        return new qi(n, /year|month|week/.test(e.currentRangeUnit))
    }
    var xs = yo({
            initialView: "dayGridMonth",
            optionRefiners: {
                moreLinkClick: Ut,
                moreLinkClassNames: Ut,
                moreLinkContent: Ut,
                moreLinkDidMount: Ut,
                moreLinkWillUnmount: Ut
            },
            views: {
                dayGrid: {
                    component: ws,
                    dateProfileGeneratorClass: function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return n(t, e), t.prototype.buildRenderRange = function(t, n, r) {
                            var o, i = this.props.dateEnv,
                                a = e.prototype.buildRenderRange.call(this, t, n, r),
                                s = a.start,
                                l = a.end;
                            (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = me(o, 1))), this.props.monthMode && this.props.fixedWeekCount) && (l = me(l, 6 - Math.ceil(Ee(s, l))));
                            return {
                                start: s,
                                end: l
                            }
                        }, t
                    }(Oo)
                },
                dayGridDay: {
                    type: "dayGrid",
                    duration: {
                        days: 1
                    }
                },
                dayGridWeek: {
                    type: "dayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        Ms = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getKeyInfo = function() {
                return {
                    allDay: {},
                    timed: {}
                }
            }, t.prototype.getKeysForDateSpan = function(e) {
                return e.allDay ? ["allDay"] : ["timed"]
            }, t.prototype.getKeysForEventDef = function(e) {
                return e.allDay ? yn(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
            }, t
        }(br),
        ks = kt({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short"
        });

    function Ps(e) {
        var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return Gr(Qr.Consumer, null, (function(n) {
            if (!e.isLabeled) return Gr("td", {
                className: t.join(" "),
                "data-time": e.isoTimeStr
            });
            var r = n.dateEnv,
                o = n.options,
                i = n.viewApi,
                a = null == o.slotLabelFormat ? ks : Array.isArray(o.slotLabelFormat) ? kt(o.slotLabelFormat[0]) : kt(o.slotLabelFormat),
                s = {
                    level: 0,
                    time: e.time,
                    date: r.toDate(e.date),
                    view: i,
                    text: r.format(e.date, a)
                };
            return Gr(bo, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: Is,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, (function(n, r, o, i) {
                return Gr("td", {
                    ref: n,
                    className: t.concat(r).join(" "),
                    "data-time": e.isoTimeStr
                }, Gr("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, Gr("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            }))
        }))
    }

    function Is(e) {
        return e.text
    }
    var _s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                return this.props.slatMetas.map((function(e) {
                    return Gr("tr", {
                        key: e.key
                    }, Gr(Ps, r({}, e)))
                }))
            }, t
        }(no),
        Ns = kt({
            week: "short"
        }),
        Hs = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allDaySplitter = new Ms, t.headerElRef = Yr(), t.rootElRef = Yr(), t.scrollerElRef = Yr(), t.state = {
                    slatCoords: null
                }, t.handleScrollTopRequest = function(e) {
                    var n = t.scrollerElRef.current;
                    n && (n.scrollTop = e)
                }, t.renderHeadAxis = function(e, n) {
                    void 0 === n && (n = "");
                    var o = t.context.options,
                        i = t.props.dateProfile.renderRange,
                        a = Ce(i.start, i.end),
                        s = o.navLinks && 1 === a ? {
                            "data-navlink": xr(i.start, "week"),
                            tabIndex: 0
                        } : {};
                    return o.weekNumbers && "day" === e ? Gr(Ra, {
                        date: i.start,
                        defaultFormat: Ns
                    }, (function(e, t, o, i) {
                        return Gr("th", {
                            ref: e,
                            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                        }, Gr("div", {
                            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                            style: {
                                height: n
                            }
                        }, Gr("a", r({
                            ref: o,
                            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                        }, s), i)))
                    })) : Gr("th", {
                        className: "fc-timegrid-axis"
                    }, Gr("div", {
                        className: "fc-timegrid-axis-frame",
                        style: {
                            height: n
                        }
                    }))
                }, t.renderTableRowAxis = function(e) {
                    var n = t.context,
                        r = n.options,
                        o = n.viewApi,
                        i = {
                            text: r.allDayText,
                            view: o
                        };
                    return Gr(bo, {
                        hookProps: i,
                        classNames: r.allDayClassNames,
                        content: r.allDayContent,
                        defaultContent: Os,
                        didMount: r.allDayDidMount,
                        willUnmount: r.allDayWillUnmount
                    }, (function(t, n, r, o) {
                        return Gr("td", {
                            ref: t,
                            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                        }, Gr("div", {
                            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                            style: {
                                height: e
                            }
                        }, Gr("span", {
                            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                            ref: r
                        }, o)))
                    }))
                }, t.handleSlatCoords = function(e) {
                    t.setState({
                        slatCoords: e
                    })
                }, t
            }
            return n(t, e), t.prototype.renderSimpleLayout = function(e, t, n) {
                var r = this.context,
                    o = this.props,
                    i = [],
                    a = ua(r.options);
                return e && i.push({
                    type: "header",
                    key: "header",
                    isSticky: a,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), t && (i.push({
                    type: "body",
                    key: "all-day",
                    chunk: {
                        content: t
                    }
                }), i.push({
                    type: "body",
                    key: "all-day-divider",
                    outerContent: Gr("tr", {
                        className: "fc-scrollgrid-section"
                    }, Gr("td", {
                        className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                    }))
                })), i.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(r.options.expandRows),
                    chunk: {
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }
                }), Gr(Po, {
                    viewSpec: r.viewSpec,
                    elRef: this.rootElRef
                }, (function(e, t) {
                    return Gr("div", {
                        className: ["fc-timegrid"].concat(t).join(" "),
                        ref: e
                    }, Gr(da, {
                        liquid: !o.isHeightAuto && !o.forPrint,
                        cols: [{
                            width: "shrink"
                        }],
                        sections: i
                    }))
                }))
            }, t.prototype.renderHScrollLayout = function(e, t, n, r, o, i, a) {
                var s = this,
                    l = this.context.pluginHooks.scrollGridImpl;
                if (!l) throw new Error("No ScrollGrid implementation");
                var u = this.context,
                    c = this.props,
                    d = !c.forPrint && ua(u.options),
                    p = !c.forPrint && ca(u.options),
                    f = [];
                e && f.push({
                    type: "header",
                    key: "header",
                    isSticky: d,
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: function(e) {
                            return Gr("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                        }
                    }, {
                        key: "cols",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), t && (f.push({
                    type: "body",
                    key: "all-day",
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: function(e) {
                            return Gr("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                        }
                    }, {
                        key: "cols",
                        content: t
                    }]
                }), f.push({
                    key: "all-day-divider",
                    type: "body",
                    outerContent: Gr("tr", {
                        className: "fc-scrollgrid-section"
                    }, Gr("td", {
                        colSpan: 2,
                        className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                    }))
                }));
                var h = u.options.nowIndicator;
                return f.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(u.options.expandRows),
                    chunks: [{
                        key: "axis",
                        content: function(e) {
                            return Gr("div", {
                                className: "fc-timegrid-axis-chunk"
                            }, Gr("table", {
                                style: {
                                    height: e.expandRows ? e.clientHeight : ""
                                }
                            }, e.tableColGroupNode, Gr("tbody", null, Gr(_s, {
                                slatMetas: i
                            }))), Gr("div", {
                                className: "fc-timegrid-now-indicator-container"
                            }, Gr(zi, {
                                unit: h ? "minute" : "day"
                            }, (function(e) {
                                var t = h && a && a.safeComputeTop(e);
                                return "number" == typeof t ? Gr(ga, {
                                    isAxis: !0,
                                    date: e
                                }, (function(e, n, r, o) {
                                    return Gr("div", {
                                        ref: e,
                                        className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                                        style: {
                                            top: t
                                        }
                                    }, o)
                                })) : null
                            }))))
                        }
                    }, {
                        key: "cols",
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }]
                }), p && f.push({
                    key: "footer",
                    type: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "axis",
                        content: la
                    }, {
                        key: "cols",
                        content: la
                    }]
                }), Gr(Po, {
                    viewSpec: u.viewSpec,
                    elRef: this.rootElRef
                }, (function(e, t) {
                    return Gr("div", {
                        className: ["fc-timegrid"].concat(t).join(" "),
                        ref: e
                    }, Gr(l, {
                        liquid: !c.isHeightAuto && !c.forPrint,
                        colGroups: [{
                            width: "shrink",
                            cols: [{
                                width: "shrink"
                            }]
                        }, {
                            cols: [{
                                span: r,
                                minWidth: o
                            }]
                        }],
                        sections: f
                    }))
                }))
            }, t.prototype.getAllDayMaxEventProps = function() {
                var e = this.context.options,
                    t = e.dayMaxEvents,
                    n = e.dayMaxEventRows;
                return !0 !== t && !0 !== n || (t = void 0, n = 5), {
                    dayMaxEvents: t,
                    dayMaxEventRows: n
                }
            }, t
        }(mo);

    function Os(e) {
        return e.text
    }
    var Ws = function() {
            function e(e, t, n) {
                this.positions = e, this.dateProfile = t, this.slatMetas = n
            }
            return e.prototype.safeComputeTop = function(e) {
                var t = this.dateProfile;
                if (vn(t.currentRange, e)) {
                    var n = we(e),
                        r = e.valueOf() - n.valueOf();
                    if (r >= ot(t.slotMinTime) && r < ot(t.slotMaxTime)) return this.computeTimeTop(Ke(r))
                }
                return null
            }, e.prototype.computeDateTop = function(e, t) {
                return t || (t = we(e)), this.computeTimeTop(Ke(e.valueOf() - t.valueOf()))
            }, e.prototype.computeTimeTop = function(e) {
                var t, n, r = this.positions,
                    o = this.dateProfile,
                    i = this.slatMetas,
                    a = r.els.length,
                    s = i[1].date.valueOf() - i[0].date.valueOf(),
                    l = (e.milliseconds - ot(o.slotMinTime)) / s;
                return l = Math.max(0, l), l = Math.min(a, l), t = Math.floor(l), n = l - (t = Math.min(t, a - 1)), r.tops[t] + r.getHeight(t) * n
            }, e
        }(),
        As = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    o = e.slatElRefs;
                return Gr("tbody", null, e.slatMetas.map((function(i, a) {
                    var s = {
                            time: i.time,
                            date: t.dateEnv.toDate(i.date),
                            view: t.viewApi
                        },
                        l = ["fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled ? "" : "fc-timegrid-slot-minor"];
                    return Gr("tr", {
                        key: i.key,
                        ref: o.createRef(i.key)
                    }, e.axis && Gr(Ps, r({}, i)), Gr(bo, {
                        hookProps: s,
                        classNames: n.slotLaneClassNames,
                        content: n.slotLaneContent,
                        didMount: n.slotLaneDidMount,
                        willUnmount: n.slotLaneWillUnmount
                    }, (function(e, t, n, r) {
                        return Gr("td", {
                            ref: e,
                            className: l.concat(t).join(" "),
                            "data-time": i.isoTimeStr
                        }, r)
                    })))
                })))
            }, t
        }(no),
        Ls = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t.slatElRefs = new Ji, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context;
                return Gr("div", {
                    className: "fc-timegrid-slots",
                    ref: this.rootElRef
                }, Gr("table", {
                    className: t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, e.tableColGroupNode, Gr(As, {
                    slatElRefs: this.slatElRefs,
                    axis: e.axis,
                    slatMetas: e.slatMetas
                })))
            }, t.prototype.componentDidMount = function() {
                this.updateSizing()
            }, t.prototype.componentDidUpdate = function() {
                this.updateSizing()
            }, t.prototype.componentWillUnmount = function() {
                this.props.onCoords && this.props.onCoords(null)
            }, t.prototype.updateSizing = function() {
                var e, t = this.props;
                t.onCoords && null !== t.clientWidth && (this.rootElRef.current.offsetHeight && t.onCoords(new Ws(new Ur(this.rootElRef.current, (e = this.slatElRefs.currentMap, t.slatMetas.map((function(t) {
                    return e[t.key]
                }))), !1, !0), this.props.dateProfile, t.slatMetas)))
            }, t
        }(no);

    function Us(e, t) {
        var n, r = [];
        for (n = 0; n < t; n += 1) r.push([]);
        if (e)
            for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
        return r
    }

    function Bs(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }

    function zs(e, t, n, r, o) {
        return Vs(e, t, n, r),
            function(e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    (c = r[n]).level = null, c.forwardCoord = null, c.backwardCoord = null, c.forwardPressure = null
                }
                var o, i = function(e) {
                    var t, n, r, o = [];
                    for (t = 0; t < e.length; t += 1) {
                        for (n = e[t], r = 0; r < o.length && Fs(n, o[r]).length; r += 1);
                        n.level = r, (o[r] || (o[r] = [])).push(n)
                    }
                    return o
                }(e = Rn(e, t));
                if (function(e) {
                        var t, n, r, o, i;
                        for (t = 0; t < e.length; t += 1)
                            for (n = e[t], r = 0; r < n.length; r += 1)
                                for ((o = n[r]).forwardSegs = [], i = t + 1; i < e.length; i += 1) Fs(o, e[i], o.forwardSegs)
                    }(i), o = i[0]) {
                    for (var a = 0, s = o; a < s.length; a++) {
                        js(c = s[a])
                    }
                    for (var l = 0, u = o; l < u.length; l++) {
                        var c;
                        Gs(c = u[l], 0, 0, t)
                    }
                }
                return e
            }(e, o)
    }

    function Vs(e, t, n, r) {
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            a.top = n.computeDateTop(a.start, t), a.bottom = Math.max(a.top + (r || 0), n.computeDateTop(a.end, t))
        }
    }

    function Fs(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < t.length; r += 1) o = e, i = t[r], o.bottom > i.top && o.top < i.bottom && n.push(t[r]);
        var o, i;
        return n
    }

    function js(e) {
        var t, n, r = e.forwardSegs,
            o = 0;
        if (null == e.forwardPressure) {
            for (t = 0; t < r.length; t += 1) js(n = r[t]), o = Math.max(o, 1 + n.forwardPressure);
            e.forwardPressure = o
        }
    }

    function Gs(e, t, n, r) {
        var o, i = e.forwardSegs;
        if (null == e.forwardCoord)
            for (i.length ? (! function(e, t) {
                    var n = e.map(qs),
                        r = [{
                            field: "forwardPressure",
                            order: -1
                        }, {
                            field: "backwardCoord",
                            order: 1
                        }].concat(t);
                    n.sort((function(e, t) {
                        return ue(e, t, r)
                    })), n.map((function(e) {
                        return e._seg
                    }))
                }(i, r), Gs(i[0], t + 1, n, r), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1), o = 0; o < i.length; o += 1) Gs(i[o], 0, e.forwardCoord, r)
    }

    function qs(e) {
        var t = Dn(e);
        return t.forwardPressure = e.forwardPressure, t.backwardCoord = e.backwardCoord, t
    }
    var Ys = kt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: !1
        }),
        Zs = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = ["fc-timegrid-event", "fc-v-event"];
                return this.props.isCondensed && e.push("fc-timegrid-event-condensed"), Gr(fa, r({}, this.props, {
                    defaultTimeFormat: Ys,
                    extraClassNames: e
                }))
            }, t
        }(no),
        Xs = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props;
                return Gr(ma, {
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    extraHookProps: e.extraHookProps
                }, (function(e, t) {
                    return t && Gr("div", {
                        className: "fc-timegrid-col-misc",
                        ref: e
                    }, t)
                }))
            }, t
        }(no);
    Di.timeGridEventCondensedHeight = 30;
    var Ks = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context.options.selectMirror,
                    o = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || n && t.dateSelectionSegs || [],
                    i = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
                return Gr(Sa, {
                    elRef: t.elRef,
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                }, (function(a, s, l) {
                    return Gr("td", r({
                        ref: a,
                        className: ["fc-timegrid-col"].concat(s, t.extraClassNames || []).join(" ")
                    }, l, t.extraDataAttrs), Gr("div", {
                        className: "fc-timegrid-col-frame"
                    }, Gr("div", {
                        className: "fc-timegrid-col-bg"
                    }, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), Gr("div", {
                        className: "fc-timegrid-col-events"
                    }, e.renderFgSegs(t.fgEventSegs, i)), Gr("div", {
                        className: "fc-timegrid-col-events"
                    }, e.renderFgSegs(o, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(n))), Gr("div", {
                        className: "fc-timegrid-now-indicator-container"
                    }, e.renderNowIndicator(t.nowIndicatorSegs)), Gr(Xs, {
                        date: t.date,
                        dateProfile: t.dateProfile,
                        todayRange: t.todayRange,
                        extraHookProps: t.extraHookProps
                    })))
                }))
            }, t.prototype.renderFgSegs = function(e, t, n, r, o) {
                var i = this.props;
                return i.forPrint ? this.renderPrintFgSegs(e) : i.slatCoords ? this.renderPositionedFgSegs(e, t, n, r, o) : null
            }, t.prototype.renderPrintFgSegs = function(e) {
                var t = this.props;
                return (e = Rn(e, this.context.options.eventOrder)).map((function(e) {
                    return Gr("div", {
                        className: "fc-timegrid-event-harness",
                        key: e.eventRange.instance.instanceId
                    }, Gr(Zs, r({
                        seg: e,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: !1,
                        isCondensed: !1
                    }, kn(e, t.todayRange, t.nowDate))))
                }))
            }, t.prototype.renderPositionedFgSegs = function(e, t, n, o, i) {
                var a = this,
                    s = this.context,
                    l = this.props;
                return (e = zs(e, l.date, l.slatCoords, s.options.eventMinHeight, s.options.eventOrder)).map((function(e) {
                    var s = e.eventRange.instance.instanceId,
                        u = n || o || i ? r({
                            left: 0,
                            right: 0
                        }, a.computeSegTopBottomCss(e)) : a.computeFgSegPositionCss(e);
                    return Gr("div", {
                        className: "fc-timegrid-event-harness" + (e.level > 0 ? " fc-timegrid-event-harness-inset" : ""),
                        key: s,
                        style: r({
                            visibility: t[s] ? "hidden" : ""
                        }, u)
                    }, Gr(Zs, r({
                        seg: e,
                        isDragging: n,
                        isResizing: o,
                        isDateSelecting: i,
                        isSelected: s === l.eventSelection,
                        isCondensed: e.bottom - e.top < Di.timeGridEventCondensedHeight
                    }, kn(e, l.todayRange, l.nowDate))))
                }))
            }, t.prototype.renderFillSegs = function(e, t) {
                var n = this,
                    o = this.context,
                    i = this.props;
                if (!i.slatCoords) return null;
                Vs(e, i.date, i.slatCoords, o.options.eventMinHeight);
                var a = e.map((function(e) {
                    return Gr("div", {
                        key: In(e.eventRange),
                        className: "fc-timegrid-bg-harness",
                        style: n.computeSegTopBottomCss(e)
                    }, "bg-event" === t ? Gr(Ca, r({
                        seg: e
                    }, kn(e, i.todayRange, i.nowDate))) : Ea(t))
                }));
                return Gr(Zr, null, a)
            }, t.prototype.renderNowIndicator = function(e) {
                var t = this.props,
                    n = t.slatCoords,
                    r = t.date;
                return n ? e.map((function(e, t) {
                    return Gr(ga, {
                        isAxis: !1,
                        date: r,
                        key: t
                    }, (function(t, o, i, a) {
                        return Gr("div", {
                            ref: t,
                            className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
                            style: {
                                top: n.computeDateTop(e.start, r)
                            }
                        }, a)
                    }))
                })) : null
            }, t.prototype.computeFgSegPositionCss = function(e) {
                var t, n, o = this.context,
                    i = o.isRtl,
                    a = o.options.slotEventOverlap,
                    s = e.backwardCoord,
                    l = e.forwardCoord;
                a && (l = Math.min(1, s + 2 * (l - s))), i ? (t = 1 - l, n = s) : (t = s, n = 1 - l);
                var u = {
                    zIndex: e.level + 1,
                    left: 100 * t + "%",
                    right: 100 * n + "%"
                };
                return a && e.forwardPressure && (u[i ? "marginLeft" : "marginRight"] = 20), r(r({}, u), this.computeSegTopBottomCss(e))
            }, t.prototype.computeSegTopBottomCss = function(e) {
                return {
                    top: e.top,
                    bottom: -e.bottom
                }
            }, t
        }(no),
        Js = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.splitFgEventSegs = pt(Us), t.splitBgEventSegs = pt(Us), t.splitBusinessHourSegs = pt(Us), t.splitNowIndicatorSegs = pt(Us), t.splitDateSelectionSegs = pt(Us), t.splitEventDrag = pt(Bs), t.splitEventResize = pt(Bs), t.rootElRef = Yr(), t.cellElRefs = new Ji, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate),
                    r = t.cells.length,
                    o = this.splitFgEventSegs(t.fgEventSegs, r),
                    i = this.splitBgEventSegs(t.bgEventSegs, r),
                    a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                    s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                    l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
                    u = this.splitEventDrag(t.eventDrag, r),
                    c = this.splitEventResize(t.eventResize, r);
                return Gr("div", {
                    className: "fc-timegrid-cols",
                    ref: this.rootElRef
                }, Gr("table", {
                    style: {
                        minWidth: t.tableMinWidth,
                        width: t.clientWidth
                    }
                }, t.tableColGroupNode, Gr("tbody", null, Gr("tr", null, t.axis && Gr("td", {
                    className: "fc-timegrid-col fc-timegrid-axis"
                }, Gr("div", {
                    className: "fc-timegrid-col-frame"
                }, Gr("div", {
                    className: "fc-timegrid-now-indicator-container"
                }, "number" == typeof n && Gr(ga, {
                    isAxis: !0,
                    date: t.nowDate
                }, (function(e, t, r, o) {
                    return Gr("div", {
                        ref: e,
                        className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                        style: {
                            top: n
                        }
                    }, o)
                }))))), t.cells.map((function(n, r) {
                    return Gr(Ks, {
                        key: n.key,
                        elRef: e.cellElRefs.createRef(n.key),
                        dateProfile: t.dateProfile,
                        date: n.date,
                        nowDate: t.nowDate,
                        todayRange: t.todayRange,
                        extraHookProps: n.extraHookProps,
                        extraDataAttrs: n.extraDataAttrs,
                        extraClassNames: n.extraClassNames,
                        fgEventSegs: o[r],
                        bgEventSegs: i[r],
                        businessHourSegs: a[r],
                        nowIndicatorSegs: s[r],
                        dateSelectionSegs: l[r],
                        eventDrag: u[r],
                        eventResize: c[r],
                        slatCoords: t.slatCoords,
                        eventSelection: t.eventSelection,
                        forPrint: t.forPrint
                    })
                }))))))
            }, t.prototype.componentDidMount = function() {
                this.updateCoords()
            }, t.prototype.componentDidUpdate = function() {
                this.updateCoords()
            }, t.prototype.updateCoords = function() {
                var e, t = this.props;
                t.onColCoords && null !== t.clientWidth && t.onColCoords(new Ur(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.cells.map((function(t) {
                    return e[t.key]
                }))), !0, !1))
            }, t
        }(no);
    var $s = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = pt(Qs), t.state = {
                slatCoords: null
            }, t.handleScrollRequest = function(e) {
                var n = t.props.onScrollTopRequest,
                    r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1), n(o)
                    }
                    return !0
                }
                return !1
            }, t.handleColCoords = function(e) {
                t.colCoords = e
            }, t.handleSlatCoords = function(e) {
                t.setState({
                    slatCoords: e
                }), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.state;
            return Gr("div", {
                className: "fc-timegrid-body",
                ref: e.rootElRef,
                style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth
                }
            }, Gr(Ls, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows ? e.clientHeight : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                onCoords: this.handleSlatCoords
            }), Gr(Js, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        }, t.prototype.componentDidMount = function() {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }, t.prototype.componentDidUpdate = function(e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }, t.prototype.componentWillUnmount = function() {
            this.scrollResponder.detach()
        }, t.prototype.positionToHit = function(e, t) {
            var n = this.context,
                r = n.dateEnv,
                o = n.options,
                i = this.colCoords,
                a = this.props.dateProfile,
                s = this.state.slatCoords,
                l = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
                u = l.snapDuration,
                c = l.snapsPerSlot,
                d = i.leftToIndex(e),
                p = s.positions.topToIndex(t);
            if (null != d && null != p) {
                var f = s.positions.tops[p],
                    h = s.positions.getHeight(p),
                    g = (t - f) / h,
                    v = p * c + Math.floor(g * c),
                    m = this.props.cells[d].date,
                    y = Qe(a.slotMinTime, et(u, v)),
                    S = r.add(m, y);
                return {
                    col: d,
                    dateSpan: {
                        range: {
                            start: S,
                            end: r.add(S, u)
                        },
                        allDay: !1
                    },
                    dayEl: i.els[d],
                    relativeRect: {
                        left: i.lefts[d],
                        right: i.rights[d],
                        top: f,
                        bottom: f + h
                    }
                }
            }
            return null
        }, t
    }(no);

    function Qs(e, t) {
        var n = t || e,
            r = it(e, n);
        return null === r && (n = e, r = 1), {
            snapDuration: n,
            snapsPerSlot: r
        }
    }
    var el = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.sliceRange = function(e, t) {
                for (var n = [], r = 0; r < t.length; r += 1) {
                    var o = pn(e, t[r]);
                    o && n.push({
                        start: o.start,
                        end: o.end,
                        isStart: o.start.valueOf() === e.start.valueOf(),
                        isEnd: o.end.valueOf() === e.end.valueOf(),
                        col: r
                    })
                }
                return n
            }, t
        }(Yi),
        tl = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayRanges = pt(nl), t.slicer = new el, t.timeColsRef = Yr(), t.handleRootEl = function(e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.dateProfile,
                    i = t.dayTableModel,
                    a = n.options.nowIndicator,
                    s = this.buildDayRanges(i, o, n.dateEnv);
                return Gr(zi, {
                    unit: a ? "minute" : "day"
                }, (function(l, u) {
                    return Gr($s, r({
                        ref: e.timeColsRef,
                        rootElRef: e.handleRootEl
                    }, e.slicer.sliceProps(t, o, null, n, s), {
                        forPrint: t.forPrint,
                        axis: t.axis,
                        dateProfile: o,
                        slatMetas: t.slatMetas,
                        slotDuration: t.slotDuration,
                        cells: i.cells[0],
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        expandRows: t.expandRows,
                        nowDate: l,
                        nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
                        todayRange: u,
                        onScrollTopRequest: t.onScrollTopRequest,
                        onSlatCoords: t.onSlatCoords
                    }))
                }))
            }, t.prototype.queryHit = function(e, t) {
                var n = this.timeColsRef.current.positionToHit(e, t);
                return n ? {
                    component: this,
                    dateSpan: n.dateSpan,
                    dayEl: n.dayEl,
                    rect: {
                        left: n.relativeRect.left,
                        right: n.relativeRect.right,
                        top: n.relativeRect.top,
                        bottom: n.relativeRect.bottom
                    },
                    layer: 0
                } : null
            }, t
        }(mo);

    function nl(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime)
            })
        }
        return r
    }
    var rl = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];

    function ol(e, t, n, r, o) {
        for (var i = new Date(0), a = e, s = Ke(0), l = n || function(e) {
                var t, n, r;
                for (t = rl.length - 1; t >= 0; t -= 1)
                    if (n = Ke(rl[t]), null !== (r = it(n, e)) && r > 1) return n;
                return e
            }(r), u = []; ot(a) < ot(t);) {
            var c = o.add(i, a),
                d = null !== it(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: lt(c),
                isLabeled: d
            }), a = Qe(a, r), s = Qe(s, r)
        }
        return u
    }
    var il = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = pt(al), t.buildSlatMetas = pt(ol), t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this,
                t = this.context,
                n = t.options,
                o = t.dateEnv,
                i = t.dateProfileGenerator,
                a = this.props,
                s = a.dateProfile,
                l = this.buildTimeColsModel(s, i),
                u = this.allDaySplitter.splitProps(a),
                c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, n.slotLabelInterval, n.slotDuration, o),
                d = n.dayMinWidth,
                p = !d,
                f = d,
                h = n.dayHeaders && Gr(Fi, {
                    dates: l.headerDates,
                    dateProfile: s,
                    datesRepDistinctDays: !0,
                    renderIntro: p ? this.renderHeadAxis : null
                }),
                g = !1 !== n.allDaySlot && function(t) {
                    return Gr(Ds, r({}, u.allDay, {
                        dateProfile: s,
                        dayTableModel: l,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: p ? e.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: a.forPrint
                    }, e.getAllDayMaxEventProps()))
                },
                v = function(t) {
                    return Gr(tl, r({}, u.timed, {
                        dayTableModel: l,
                        dateProfile: s,
                        axis: p,
                        slotDuration: n.slotDuration,
                        slatMetas: c,
                        forPrint: a.forPrint,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        onSlatCoords: e.handleSlatCoords,
                        expandRows: t.expandRows,
                        onScrollTopRequest: e.handleScrollTopRequest
                    }))
                };
            return f ? this.renderHScrollLayout(h, g, v, l.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, g, v)
        }, t
    }(Hs);

    function al(e, t) {
        var n = new Gi(e.renderRange, t);
        return new qi(n, !1)
    }
    var sl = yo({
            initialView: "timeGridWeek",
            optionRefiners: {
                allDaySlot: Boolean
            },
            views: {
                timeGrid: {
                    component: il,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0
                },
                timeGridDay: {
                    type: "timeGrid",
                    duration: {
                        days: 1
                    }
                },
                timeGridWeek: {
                    type: "timeGrid",
                    duration: {
                        weeks: 1
                    }
                }
            }
        }),
        ll = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.dayDate,
                    n = e.todayRange,
                    o = this.context,
                    i = o.theme,
                    a = o.dateEnv,
                    s = o.options,
                    l = o.viewApi,
                    u = Dr(t, n),
                    c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
                    d = s.listDaySideFormat ? a.format(t, s.listDaySideFormat) : "",
                    p = s.navLinks ? xr(t) : null,
                    f = r({
                        date: a.toDate(t),
                        view: l,
                        text: c,
                        sideText: d,
                        navLinkData: p
                    }, u),
                    h = ["fc-list-day"].concat(wr(u, i));
                return Gr(bo, {
                    hookProps: f,
                    classNames: s.dayHeaderClassNames,
                    content: s.dayHeaderContent,
                    defaultContent: ul,
                    didMount: s.dayHeaderDidMount,
                    willUnmount: s.dayHeaderWillUnmount
                }, (function(e, n, r, o) {
                    return Gr("tr", {
                        ref: e,
                        className: h.concat(n).join(" "),
                        "data-date": st(t)
                    }, Gr("th", {
                        colSpan: 3
                    }, Gr("div", {
                        className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                        ref: r
                    }, o)))
                }))
            }, t
        }(no);

    function ul(e) {
        var t = e.navLinkData ? {
            "data-navlink": e.navLinkData,
            tabIndex: 0
        } : {};
        return Gr(Zr, null, e.text && Gr("a", r({
            className: "fc-list-day-text"
        }, t), e.text), e.sideText && Gr("a", r({
            className: "fc-list-day-side-text"
        }, t), e.sideText))
    }
    var cl = kt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short"
        }),
        dl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    r = t.options.eventTimeFormat || cl;
                return Gr(pa, {
                    seg: n,
                    timeText: "",
                    disableDragging: !0,
                    disableResizing: !0,
                    defaultContent: pl,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday,
                    isSelected: e.isSelected,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting
                }, (function(e, o, i, a, s) {
                    return Gr("tr", {
                        className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
                        ref: e
                    }, function(e, t, n) {
                        var r = n.options;
                        if (!1 !== r.displayEventTime) {
                            var o = e.eventRange.def,
                                i = e.eventRange.instance,
                                a = !1,
                                s = void 0;
                            if (o.allDay ? a = !0 : ln(e.eventRange.range) ? e.isStart ? s = Mn(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = Mn(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = Mn(e, t, n), a) {
                                var l = {
                                    text: n.options.allDayText,
                                    view: n.viewApi
                                };
                                return Gr(bo, {
                                    hookProps: l,
                                    classNames: r.allDayClassNames,
                                    content: r.allDayContent,
                                    defaultContent: fl,
                                    didMount: r.allDayDidMount,
                                    willUnmount: r.allDayWillUnmount
                                }, (function(e, t, n, r) {
                                    return Gr("td", {
                                        className: ["fc-list-event-time"].concat(t).join(" "),
                                        ref: e
                                    }, r)
                                }))
                            }
                            return Gr("td", {
                                className: "fc-list-event-time"
                            }, s)
                        }
                        return null
                    }(n, r, t), Gr("td", {
                        className: "fc-list-event-graphic"
                    }, Gr("span", {
                        className: "fc-list-event-dot",
                        style: {
                            borderColor: s.borderColor || s.backgroundColor
                        }
                    })), Gr("td", {
                        className: "fc-list-event-title",
                        ref: i
                    }, a))
                }))
            }, t
        }(no);

    function pl(e) {
        var t = e.event,
            n = t.url;
        return Gr("a", r({}, n ? {
            href: n
        } : {}), t.title)
    }

    function fl(e) {
        return e.text
    }
    var hl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeDateVars = pt(vl), t.eventStoreToSegs = pt(t._eventStoreToSegs), t.setRootEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = this.context,
                r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                o = this.computeDateVars(t.dateProfile),
                i = o.dayDates,
                a = o.dayRanges,
                s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
            return Gr(Po, {
                viewSpec: n.viewSpec,
                elRef: this.setRootEl
            }, (function(n, o) {
                return Gr("div", {
                    ref: n,
                    className: r.concat(o).join(" ")
                }, Gr(Ki, {
                    liquid: !t.isHeightAuto,
                    overflowX: t.isHeightAuto ? "visible" : "hidden",
                    overflowY: t.isHeightAuto ? "visible" : "auto"
                }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()))
            }))
        }, t.prototype.renderEmptyMessage = function() {
            var e = this.context,
                t = e.options,
                n = e.viewApi,
                r = {
                    text: t.noEventsText,
                    view: n
                };
            return Gr(bo, {
                hookProps: r,
                classNames: t.noEventsClassNames,
                content: t.noEventsContent,
                defaultContent: gl,
                didMount: t.noEventsDidMount,
                willUnmount: t.noEventsWillUnmount
            }, (function(e, t, n, r) {
                return Gr("div", {
                    className: ["fc-list-empty"].concat(t).join(" "),
                    ref: e
                }, Gr("div", {
                    className: "fc-list-empty-cushion",
                    ref: n
                }, r))
            }))
        }, t.prototype.renderSegList = function(e, t) {
            var n = this.context,
                o = n.theme,
                i = n.options,
                a = function(e) {
                    var t, n, r = [];
                    for (t = 0; t < e.length; t += 1) n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                    return r
                }(e);
            return Gr(zi, {
                unit: "day"
            }, (function(e, n) {
                for (var s = [], l = 0; l < a.length; l += 1) {
                    var u = a[l];
                    if (u) {
                        var c = t[l].toISOString();
                        s.push(Gr(ll, {
                            key: c,
                            dayDate: t[l],
                            todayRange: n
                        }));
                        for (var d = 0, p = u = Rn(u, i.eventOrder); d < p.length; d++) {
                            var f = p[d];
                            s.push(Gr(dl, r({
                                key: c + ":" + f.eventRange.instance.instanceId,
                                seg: f,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: !1
                            }, kn(f, n, e))))
                        }
                    }
                }
                return Gr("table", {
                    className: "fc-list-table " + o.getClass("table")
                }, Gr("tbody", null, s))
            }))
        }, t.prototype._eventStoreToSegs = function(e, t, n) {
            return this.eventRangesToSegs(mn(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
        }, t.prototype.eventRangesToSegs = function(e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.eventRangeToSegs(i, t))
            }
            return n
        }, t.prototype.eventRangeToSegs = function(e, t) {
            var n, r, o, i = this.context.dateEnv,
                a = this.context.options.nextDayThreshold,
                s = e.range,
                l = e.def.allDay,
                u = [];
            for (n = 0; n < t.length; n += 1)
                if ((r = pn(s, t[n])) && (o = {
                        component: this,
                        eventRange: e,
                        start: r.start,
                        end: r.end,
                        isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
                        isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                        dayIndex: n
                    }, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
                    o.end = s.end, o.isEnd = !0;
                    break
                } return u
        }, t
    }(mo);

    function gl(e) {
        return e.text
    }

    function vl(e) {
        for (var t = we(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
            start: t,
            end: ye(t, 1)
        }), t = ye(t, 1);
        return {
            dayDates: r,
            dayRanges: o
        }
    }

    function ml(e) {
        return !1 === e ? null : kt(e)
    }
    var yl = yo({
            optionRefiners: {
                listDayFormat: ml,
                listDaySideFormat: ml,
                noEventsClassNames: Ut,
                noEventsContent: Ut,
                noEventsDidMount: Ut,
                noEventsWillUnmount: Ut
            },
            views: {
                list: {
                    component: hl,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listDay: {
                    type: "list",
                    duration: {
                        days: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    }
                },
                listWeek: {
                    type: "list",
                    duration: {
                        weeks: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listMonth: {
                    type: "list",
                    duration: {
                        month: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                },
                listYear: {
                    type: "list",
                    duration: {
                        year: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                }
            }
        }),
        Sl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Fr);
    Sl.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    }, Sl.prototype.baseIconClass = "fa", Sl.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    }, Sl.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    }, Sl.prototype.iconOverrideOption = "bootstrapFontAwesome", Sl.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", Sl.prototype.iconOverridePrefix = "fa-";
    var El = yo({
        themeClasses: {
            bootstrap: Sl
        }
    });
    var Cl = yo({
            eventSourceDefs: [{
                parseMeta: function(e) {
                    var t = e.googleCalendarId;
                    return !t && e.url && (t = function(e) {
                        var t;
                        if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
                        if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
                        return null
                    }(e.url)), t ? {
                        googleCalendarId: t,
                        googleCalendarApiKey: e.googleCalendarApiKey,
                        googleCalendarApiBase: e.googleCalendarApiBase,
                        extraParams: e.extraParams
                    } : null
                },
                fetch: function(e, t, n) {
                    var o = e.context,
                        i = o.dateEnv,
                        a = o.options,
                        s = e.eventSource.meta,
                        l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                    if (l) {
                        var u = function(e) {
                                var t = e.googleCalendarApiBase;
                                t || (t = "https://www.googleapis.com/calendar/v3/calendars");
                                return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                            }(s),
                            c = s.extraParams,
                            d = "function" == typeof c ? c() : c,
                            p = function(e, t, n, o) {
                                var i, a, s;
                                o.canComputeOffset ? (a = o.formatIso(e.start), s = o.formatIso(e.end)) : (a = ye(e.start, -1).toISOString(), s = ye(e.end, 1).toISOString());
                                i = r(r({}, n || {}), {
                                    key: t,
                                    timeMin: a,
                                    timeMax: s,
                                    singleEvents: !0,
                                    maxResults: 9999
                                }), "local" !== o.timeZone && (i.timeZone = o.timeZone);
                                return i
                            }(e.range, l, d, i);
                        Jo("GET", u, p, (function(e, r) {
                            var o, i;
                            e.error ? n({
                                message: "Google Calendar API: " + e.error.message,
                                errors: e.error.errors,
                                xhr: r
                            }) : t({
                                rawEvents: (o = e.items, i = p.timeZone, o.map((function(e) {
                                    return function(e, t) {
                                        var n = e.htmlLink || null;
                                        n && t && (n = function(e, t) {
                                            return e.replace(/(\?.*?)?(#|$)/, (function(e, n, r) {
                                                return (n ? n + "&" : "?") + t + r
                                            }))
                                        }(n, "ctz=" + t));
                                        return {
                                            id: e.id,
                                            title: e.summary,
                                            start: e.start.dateTime || e.start.date,
                                            end: e.end.dateTime || e.end.date,
                                            url: n,
                                            location: e.location,
                                            description: e.description
                                        }
                                    }(e, i)
                                }))),
                                xhr: r
                            })
                        }), (function(e, t) {
                            n({
                                message: e,
                                xhr: t
                            })
                        }))
                    } else n({
                        message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
                    })
                }
            }],
            optionRefiners: {
                googleCalendarApiKey: String
            },
            eventSourceRefiners: {
                googleCalendarApiKey: String,
                googleCalendarId: String,
                googleCalendarApiBase: String,
                extraParams: Ut
            }
        }),
        bl = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"],
        Rl = {
            position: "absolute",
            zIndex: 99999,
            bottom: "1px",
            left: "1px",
            background: "#eee",
            borderColor: "#ddd",
            borderStyle: "solid",
            borderWidth: "1px 1px 0 0",
            padding: "2px 4px",
            fontSize: "12px",
            borderTopRightRadius: "3px"
        };
    var Dl, wl = yo({
            optionRefiners: {
                schedulerLicenseKey: String
            },
            viewContainerAppends: [function(e) {
                var t, n = e.options.schedulerLicenseKey;
                
                return null
            }]
        }),
        Tl = "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" "),
        xl = function() {
            function e(e) {
                var t = this;
                this.el = e, this.emitter = new Lr, this.isScrolling = !1, this.isTouching = !1, this.isRecentlyWheeled = !1, this.isRecentlyScrolled = !1, this.wheelWaiter = new ri(this._handleWheelWaited.bind(this)), this.scrollWaiter = new ri(this._handleScrollWaited.bind(this)), this.handleScroll = function() {
                    t.startScroll(), t.emitter.trigger("scroll", t.isRecentlyWheeled, t.isTouching), t.isRecentlyScrolled = !0, t.scrollWaiter.request(500)
                }, this.handleWheel = function() {
                    t.isRecentlyWheeled = !0, t.wheelWaiter.request(500)
                }, this.handleTouchStart = function() {
                    t.isTouching = !0
                }, this.handleTouchEnd = function() {
                    t.isTouching = !1, t.isRecentlyScrolled || t.endScroll()
                }, e.addEventListener("scroll", this.handleScroll), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), e.addEventListener("touchend", this.handleTouchEnd);
                for (var n = 0, r = Tl; n < r.length; n++) {
                    var o = r[n];
                    e.addEventListener(o, this.handleWheel)
                }
            }
            return e.prototype.destroy = function() {
                var e = this.el;
                e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), e.removeEventListener("touchend", this.handleTouchEnd);
                for (var t = 0, n = Tl; t < n.length; t++) {
                    var r = n[t];
                    e.removeEventListener(r, this.handleWheel)
                }
            }, e.prototype.startScroll = function() {
                this.isScrolling || (this.isScrolling = !0, this.emitter.trigger("scrollStart", this.isRecentlyWheeled, this.isTouching))
            }, e.prototype.endScroll = function() {
                this.isScrolling && (this.emitter.trigger("scrollEnd"), this.isScrolling = !1, this.isRecentlyScrolled = !0, this.isRecentlyWheeled = !1, this.scrollWaiter.clear(), this.wheelWaiter.clear())
            }, e.prototype._handleScrollWaited = function() {
                this.isRecentlyScrolled = !1, this.isTouching || this.endScroll()
            }, e.prototype._handleWheelWaited = function() {
                this.isRecentlyWheeled = !1
            }, e
        }();

    function Ml(e) {
        var t = e.scrollLeft;
        if ("rtl" === window.getComputedStyle(e).direction) switch (Pl()) {
            case "negative":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = e.scrollWidth - e.clientWidth - t
        }
        return t
    }

    function kl(e, t) {
        if ("rtl" === window.getComputedStyle(e).direction) switch (Pl()) {
            case "positive":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = -t
        }
        e.scrollLeft = t
    }

    function Pl() {
        return Dl || (Dl = function() {
            var e, t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "-1000px", t.style.width = "1px", t.style.height = "1px", t.style.overflow = "scroll", t.style.direction = "rtl", t.style.fontSize = "100px", t.innerHTML = "A", document.body.appendChild(t), t.scrollLeft > 0 ? e = "positive" : (t.scrollLeft = 1, e = t.scrollLeft > 0 ? "reverse" : "negative");
            return z(t), e
        }())
    }
    var Il = /Edge/.test(navigator.userAgent),
        _l = function() {
            function e(e, t) {
                var n = this;
                this.scrollEl = e, this.isRtl = t, this.usingRelative = null, this.updateSize = function() {
                    var e = n.scrollEl,
                        t = j(e, ".fc-sticky"),
                        r = n.queryElGeoms(t),
                        o = e.clientWidth,
                        i = e.clientHeight;
                    n.usingRelative ? function(e, t, n, r, o) {
                        e.forEach((function(e, i) {
                            var a, s, l = t[i],
                                u = l.naturalBound,
                                c = l.parentBound,
                                d = c.right - c.left,
                                p = c.bottom - c.bottom;
                            d > r || p > o ? (a = n[i].left - u.left, s = n[i].top - u.top) : (a = "", s = ""), Y(e, {
                                position: "relative",
                                left: a,
                                right: -a,
                                top: s
                            })
                        }))
                    }(t, r, n.computeElDestinations(r, o), o, i) : function(e, t, n) {
                        e.forEach((function(e, r) {
                            var o, i = t[r],
                                a = i.textAlign,
                                s = i.elWidth,
                                l = i.parentBound,
                                u = l.right - l.left;
                            Y(e, {
                                left: o = "center" === a && u > n ? (n - s) / 2 : "",
                                right: o,
                                top: 0
                            })
                        }))
                    }(t, r, o)
                }, this.usingRelative = ! function() {
                    var e = document.createElement("div");
                    e.className = "fc-sticky", document.body.appendChild(e);
                    var t = window.getComputedStyle(e).position;
                    if (z(e), -1 !== t.indexOf("sticky")) return t;
                    return null
                }() || Il && t, this.usingRelative && (this.listener = new xl(e), this.listener.emitter.on("scrollEnd", this.updateSize))
            }
            return e.prototype.destroy = function() {
                this.listener && this.listener.destroy()
            }, e.prototype.queryElGeoms = function(e) {
                for (var t = this.scrollEl, n = this.isRtl, r = function(e) {
                        var t = e.getBoundingClientRect(),
                            n = Nr(e);
                        return {
                            left: t.left + n.borderLeft + n.scrollbarLeft - Ml(e),
                            top: t.top + n.borderTop - e.scrollTop
                        }
                    }(t), o = [], i = 0, a = e; i < a.length; i++) {
                    var s = a[i],
                        l = vr(Hr(s.parentNode, !0, !0), -r.left, -r.top),
                        u = s.getBoundingClientRect(),
                        c = window.getComputedStyle(s),
                        d = window.getComputedStyle(s.parentNode).textAlign,
                        p = null;
                    "start" === d ? d = n ? "right" : "left" : "end" === d && (d = n ? "left" : "right"), "sticky" !== c.position && (p = vr(u, -r.left - (parseFloat(c.left) || 0), -r.top - (parseFloat(c.top) || 0))), o.push({
                        parentBound: l,
                        naturalBound: p,
                        elWidth: u.width,
                        elHeight: u.height,
                        textAlign: d
                    })
                }
                return o
            }, e.prototype.computeElDestinations = function(e, t) {
                var n = this.scrollEl,
                    r = n.scrollTop,
                    o = Ml(n),
                    i = o + t;
                return e.map((function(e) {
                    var t, n, a = e.elWidth,
                        s = e.elHeight,
                        l = e.parentBound,
                        u = e.naturalBound;
                    switch (e.textAlign) {
                        case "left":
                            t = o;
                            break;
                        case "right":
                            t = i - a;
                            break;
                        case "center":
                            t = (o + i) / 2 - a / 2
                    }
                    return t = Math.min(t, l.right - a), t = Math.max(t, l.left), n = r, n = Math.min(n, l.bottom - s), {
                        left: t,
                        top: n = Math.max(n, u.top)
                    }
                }))
            }, e
        }();
    var Nl = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elRef = Yr(), t.state = {
                    xScrollbarWidth: Ir().x,
                    yScrollbarWidth: Ir().y
                }, t.handleScroller = function(e) {
                    t.scroller = e, io(t.props.scrollerRef, e)
                }, t.handleSizing = function() {
                    var e = t.props;
                    "scroll-hidden" === e.overflowY && t.setState({
                        yScrollbarWidth: t.scroller.getYScrollbarWidth()
                    }), "scroll-hidden" === e.overflowX && t.setState({
                        xScrollbarWidth: t.scroller.getXScrollbarWidth()
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.state,
                    n = this.context.isRtl && Pr(),
                    r = 0,
                    o = 0,
                    i = 0;
                return "scroll-hidden" === e.overflowX && (i = t.xScrollbarWidth), "scroll-hidden" === e.overflowY && null != t.yScrollbarWidth && (n ? r = t.yScrollbarWidth : o = t.yScrollbarWidth), Gr("div", {
                    ref: this.elRef,
                    className: "fc-scroller-harness" + (e.liquid ? " fc-scroller-harness-liquid" : "")
                }, Gr(Ki, {
                    ref: this.handleScroller,
                    elRef: this.props.scrollerElRef,
                    overflowX: "scroll-hidden" === e.overflowX ? "scroll" : e.overflowX,
                    overflowY: "scroll-hidden" === e.overflowY ? "scroll" : e.overflowY,
                    overcomeLeft: r,
                    overcomeRight: o,
                    overcomeBottom: i,
                    maxHeight: "number" == typeof e.maxHeight ? e.maxHeight + ("scroll-hidden" === e.overflowX ? t.xScrollbarWidth : 0) : "",
                    liquid: e.liquid,
                    liquidIsAbsolute: !0
                }, e.children))
            }, t.prototype.componentDidMount = function() {
                this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
            }, t.prototype.componentDidUpdate = function(e) {
                ze(e, this.props) || this.handleSizing()
            }, t.prototype.componentWillUnmount = function() {
                this.context.removeResizeHandler(this.handleSizing)
            }, t.prototype.needsXScrolling = function() {
                return this.scroller.needsXScrolling()
            }, t.prototype.needsYScrolling = function() {
                return this.scroller.needsYScrolling()
            }, t
        }(no),
        Hl = function() {
            function e(e, t) {
                var n = this;
                this.isVertical = e, this.scrollEls = t, this.isPaused = !1, this.scrollListeners = t.map((function(e) {
                    return n.bindScroller(e)
                }))
            }
            return e.prototype.destroy = function() {
                for (var e = 0, t = this.scrollListeners; e < t.length; e++) {
                    t[e].destroy()
                }
            }, e.prototype.bindScroller = function(e) {
                var t = this,
                    n = this.scrollEls,
                    r = this.isVertical,
                    o = new xl(e);
                return o.emitter.on("scroll", (function(o, i) {
                    if (!t.isPaused && ((!t.masterEl || t.masterEl !== e && (o || i)) && t.assignMaster(e), t.masterEl === e))
                        for (var a = 0, s = n; a < s.length; a++) {
                            var l = s[a];
                            l !== e && (r ? l.scrollTop = e.scrollTop : l.scrollLeft = e.scrollLeft)
                        }
                })), o.emitter.on("scrollEnd", (function() {
                    t.masterEl === e && (t.masterEl = null)
                })), o
            }, e.prototype.assignMaster = function(e) {
                this.masterEl = e;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    var r = n[t];
                    r.el !== e && r.endScroll()
                }
            }, e.prototype.forceScrollLeft = function(e) {
                this.isPaused = !0;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    kl(n[t].el, e)
                }
                this.isPaused = !1
            }, e.prototype.forceScrollTop = function(e) {
                this.isPaused = !0;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    n[t].el.scrollTop = e
                }
                this.isPaused = !1
            }, e
        }(),
        Ol = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.compileColGroupStats = ht(Ul, Vl), t.renderMicroColGroups = ht(ra), t.clippedScrollerRefs = new Ji, t.scrollerElRefs = new Ji(t._handleScrollerEl.bind(t)), t.chunkElRefs = new Ji(t._handleChunkEl.bind(t)), t.getStickyScrolling = ht(Gl, null, ql), t.getScrollSyncersBySection = gt(Fl.bind(t, !0), null, jl), t.getScrollSyncersByColumn = gt(Fl.bind(t, !1), null, jl), t.stickyScrollings = [], t.scrollSyncersBySection = {}, t.scrollSyncersByColumn = {}, t.rowUnstableMap = new Map, t.rowInnerMaxHeightMap = new Map, t.anyRowHeightsChanged = !1, t.recentSizingCnt = 0, t.state = {
                    shrinkWidths: [],
                    forceYScrollbars: !1,
                    forceXScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {},
                    sectionRowMaxHeights: []
                }, t.handleSizing = function(e, n) {
                    if (t.allowSizing()) {
                        n || (t.anyRowHeightsChanged = !0);
                        var o = {};
                        (e || !n && !t.rowUnstableMap.size) && (o.sectionRowMaxHeights = t.computeSectionRowMaxHeights()), t.setState(r(r({
                            shrinkWidths: t.computeShrinkWidths()
                        }, t.computeScrollerDims()), o), (function() {
                            t.rowUnstableMap.size || t.updateStickyScrolling()
                        }))
                    }
                }, t.handleRowHeightChange = function(e, n) {
                    var r = t,
                        o = r.rowUnstableMap,
                        i = r.rowInnerMaxHeightMap;
                    if (n) {
                        o.delete(e);
                        var a = Al(e);
                        i.has(e) && i.get(e) === a || (i.set(e, a), t.anyRowHeightsChanged = !0), !o.size && t.anyRowHeightsChanged && (t.anyRowHeightsChanged = !1, t.setState({
                            sectionRowMaxHeights: t.computeSectionRowMaxHeights()
                        }))
                    } else o.set(e, !0)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                for (var e, t = this.props, n = this.state, r = this.context, i = n.shrinkWidths, a = this.compileColGroupStats(t.colGroups.map((function(e) {
                        return [e]
                    }))), s = this.renderMicroColGroups(a.map((function(e, t) {
                        return [e.cols, i[t]]
                    }))), l = aa(t.liquid, r), u = this.getDims(), c = (u[0], u[1], t.sections), d = c.length, p = 0, f = [], h = [], g = []; p < d && "header" === (e = c[p]).type;) f.push(this.renderSection(e, p, a, s, n.sectionRowMaxHeights)), p += 1;
                for (; p < d && "body" === (e = c[p]).type;) h.push(this.renderSection(e, p, a, s, n.sectionRowMaxHeights)), p += 1;
                for (; p < d && "footer" === (e = c[p]).type;) g.push(this.renderSection(e, p, a, s, n.sectionRowMaxHeights)), p += 1;
                var v = !Er();
                return Gr("table", {
                    ref: t.elRef,
                    className: l.join(" ")
                }, function(e, t) {
                    var n = e.map((function(e, n) {
                        var r = e.width;
                        return "shrink" === r && (r = e.totalColWidth + oa(t[n]) + 1), Gr("col", {
                            style: {
                                width: r
                            }
                        })
                    }));
                    return Gr.apply(void 0, o(["colgroup", {}], n))
                }(a, i), Boolean(!v && f.length) && Gr.apply(void 0, o(["thead", {}], f)), Boolean(!v && h.length) && Gr.apply(void 0, o(["tbody", {}], h)), Boolean(!v && g.length) && Gr.apply(void 0, o(["tfoot", {}], g)), v && Gr.apply(void 0, o(["tbody", {}], f, h, g)))
            }, t.prototype.renderSection = function(e, t, n, r, o) {
                var i = this;
                return "outerContent" in e ? Gr(Zr, {
                    key: e.key
                }, e.outerContent) : Gr("tr", {
                    key: e.key,
                    className: sa(e, this.props.liquid).join(" ")
                }, e.chunks.map((function(a, s) {
                    return i.renderChunk(e, t, n[s], r[s], a, s, (o[t] || [])[s] || [])
                })))
            }, t.prototype.renderChunk = function(e, t, n, r, o, i, a) {
                if ("outerContent" in o) return Gr(Zr, {
                    key: o.key
                }, o.outerContent);
                var s = this.state,
                    l = s.scrollerClientWidths,
                    u = s.scrollerClientHeights,
                    c = this.getDims(),
                    d = c[0],
                    p = c[1],
                    f = t * p + i,
                    h = i === (!this.context.isRtl || Pr() ? p - 1 : 0),
                    g = t === d - 1,
                    v = g && s.forceXScrollbars,
                    m = h && s.forceYScrollbars,
                    y = n && n.allowXScrolling,
                    S = ea(this.props, e),
                    E = Qi(this.props, e),
                    C = e.expandRows && E,
                    b = ta(e, o, {
                        tableColGroupNode: r,
                        tableMinWidth: n && n.totalColMinWidth || "",
                        clientWidth: void 0 !== l[f] ? l[f] : null,
                        clientHeight: void 0 !== u[f] ? u[f] : null,
                        expandRows: C,
                        syncRowHeights: Boolean(e.syncRowHeights),
                        rowSyncHeights: a,
                        reportRowHeightChange: this.handleRowHeightChange
                    }),
                    R = v ? g ? "scroll" : "scroll-hidden" : y ? g ? "auto" : "scroll-hidden" : "hidden",
                    D = m ? h ? "scroll" : "scroll-hidden" : S ? h ? "auto" : "scroll-hidden" : "hidden";
                return b = Gr(Nl, {
                    ref: this.clippedScrollerRefs.createRef(f),
                    scrollerElRef: this.scrollerElRefs.createRef(f),
                    overflowX: R,
                    overflowY: D,
                    liquid: E,
                    maxHeight: e.maxHeight
                }, b), Gr("td", {
                    key: o.key,
                    ref: this.chunkElRefs.createRef(f)
                }, b)
            }, t.prototype.componentDidMount = function() {
                this.updateScrollSyncers(), this.handleSizing(!1), this.context.addResizeHandler(this.handleSizing)
            }, t.prototype.componentDidUpdate = function(e, t) {
                this.updateScrollSyncers(), this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights)
            }, t.prototype.componentWillUnmount = function() {
                this.context.removeResizeHandler(this.handleSizing), this.destroyStickyScrolling(), this.destroyScrollSyncers()
            }, t.prototype.allowSizing = function() {
                var e = new Date;
                return !this.lastSizingDate || e.valueOf() > this.lastSizingDate.valueOf() + 1e3 ? (this.lastSizingDate = e, this.recentSizingCnt = 0, !0) : (this.recentSizingCnt += 1) <= 10
            }, t.prototype.computeShrinkWidths = function() {
                var e = this,
                    t = this.compileColGroupStats(this.props.colGroups.map((function(e) {
                        return [e]
                    }))),
                    n = this.getDims(),
                    r = n[0],
                    o = n[1],
                    i = r * o,
                    a = [];
                return t.forEach((function(t, n) {
                    if (t.hasShrinkCol) {
                        var r = e.chunkElRefs.collect(n, i, o);
                        a[n] = $i(r)
                    }
                })), a
            }, t.prototype.computeSectionRowMaxHeights = function() {
                for (var e = new Map, t = this.getDims(), n = t[0], r = t[1], o = [], i = 0; i < n; i += 1) {
                    var a = this.props.sections[i],
                        s = [];
                    if (a && a.syncRowHeights) {
                        for (var l = [], u = 0; u < r; u += 1) {
                            var c = i * r + u,
                                d = [],
                                p = this.chunkElRefs.currentMap[c];
                            d = p ? j(p, ".fc-scrollgrid-sync-table tr").map((function(t) {
                                var n = Al(t);
                                return e.set(t, n), n
                            })) : [], l.push(d)
                        }
                        var f = l[0].length,
                            h = !0;
                        for (u = 1; u < r; u += 1) {
                            if (!(a.chunks[u] && void 0 !== a.chunks[u].outerContent) && l[u].length !== f) {
                                h = !1;
                                break
                            }
                        }
                        if (h) {
                            for (u = 0; u < r; u += 1) s.push([]);
                            for (E = 0; E < f; E += 1) {
                                var g = [];
                                for (u = 0; u < r; u += 1) {
                                    var v = l[u][E];
                                    null != v && g.push(v)
                                }
                                var m = Math.max.apply(Math, g);
                                for (u = 0; u < r; u += 1) s[u].push(m)
                            }
                        } else {
                            for (var y = [], u = 0; u < r; u += 1) y.push(Wl(l[u]) + l[u].length);
                            for (var S = Math.max.apply(Math, y), u = 0; u < r; u += 1) {
                                var E, C = l[u].length,
                                    b = S - C,
                                    R = Math.floor(b / C),
                                    D = b - R * (C - 1),
                                    w = [];
                                for ((E = 0) < C && (w.push(D), E += 1); E < C;) w.push(R), E += 1;
                                s.push(w)
                            }
                        }
                    }
                    o.push(s)
                }
                return this.rowInnerMaxHeightMap = e, o
            }, t.prototype.computeScrollerDims = function() {
                for (var e = Ir(), t = this.getDims(), n = t[0], r = t[1], o = !this.context.isRtl || Pr() ? r - 1 : 0, i = n - 1, a = this.clippedScrollerRefs.currentMap, s = this.scrollerElRefs.currentMap, l = !1, u = !1, c = {}, d = {}, p = 0; p < n; p += 1) {
                    if ((h = a[g = p * r + o]) && h.needsYScrolling()) {
                        l = !0;
                        break
                    }
                }
                for (var f = 0; f < r; f += 1) {
                    var h;
                    if ((h = a[g = i * r + f]) && h.needsXScrolling()) {
                        u = !0;
                        break
                    }
                }
                for (p = 0; p < n; p += 1)
                    for (f = 0; f < r; f += 1) {
                        var g, v = s[g = p * r + f];
                        if (v) {
                            var m = v.parentNode;
                            c[g] = Math.floor(m.getBoundingClientRect().width - (f === o && l ? e.y : 0)), d[g] = Math.floor(m.getBoundingClientRect().height - (p === i && u ? e.x : 0))
                        }
                    }
                return {
                    forceYScrollbars: l,
                    forceXScrollbars: u,
                    scrollerClientWidths: c,
                    scrollerClientHeights: d
                }
            }, t.prototype.updateStickyScrolling = function() {
                var e = this.context.isRtl,
                    t = this.scrollerElRefs.getAll().map((function(t) {
                        return [t, e]
                    })),
                    n = this.getStickyScrolling(t);
                n.forEach((function(e) {
                    return e.updateSize()
                })), this.stickyScrollings = n
            }, t.prototype.destroyStickyScrolling = function() {
                this.stickyScrollings.forEach(ql)
            }, t.prototype.updateScrollSyncers = function() {
                for (var e = this.getDims(), t = e[0], n = e[1], r = t * n, o = {}, i = {}, a = this.scrollerElRefs.currentMap, s = 0; s < t; s += 1) {
                    var l = s * n,
                        u = l + n;
                    o[s] = Ge(a, l, u, 1)
                }
                for (var c = 0; c < n; c += 1) i[c] = this.scrollerElRefs.collect(c, r, n);
                this.scrollSyncersBySection = this.getScrollSyncersBySection(o), this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i)
            }, t.prototype.destroyScrollSyncers = function() {
                Le(this.scrollSyncersBySection, jl), Le(this.scrollSyncersByColumn, jl)
            }, t.prototype.getChunkConfigByIndex = function(e) {
                var t = this.getDims()[1],
                    n = Math.floor(e / t),
                    r = e % t,
                    o = this.props.sections[n];
                return o && o.chunks[r]
            }, t.prototype.forceScrollLeft = function(e, t) {
                var n = this.scrollSyncersByColumn[e];
                n && n.forceScrollLeft(t)
            }, t.prototype.forceScrollTop = function(e, t) {
                var n = this.scrollSyncersBySection[e];
                n && n.forceScrollTop(t)
            }, t.prototype._handleChunkEl = function(e, t) {
                var n = this.getChunkConfigByIndex(parseInt(t, 10));
                n && io(n.elRef, e)
            }, t.prototype._handleScrollerEl = function(e, t) {
                var n = this.getChunkConfigByIndex(parseInt(t, 10));
                n && io(n.scrollerElRef, e)
            }, t.prototype.getDims = function() {
                var e = this.props.sections.length;
                return [e, e ? this.props.sections[0].chunks.length : 0]
            }, t
        }(no);

    function Wl(e) {
        for (var t = 0, n = 0, r = e; n < r.length; n++) {
            t += r[n]
        }
        return t
    }

    function Al(e) {
        var t = j(e, ".fc-scrollgrid-sync-inner").map(Ll);
        return t.length ? Math.max.apply(Math, t) : 0
    }

    function Ll(e) {
        return e.offsetHeight
    }

    function Ul(e) {
        var t = Bl(e.cols, "width"),
            n = Bl(e.cols, "minWidth"),
            r = ia(e.cols);
        return {
            hasShrinkCol: r,
            totalColWidth: t,
            totalColMinWidth: n,
            allowXScrolling: "shrink" !== e.width && Boolean(t || n || r),
            cols: e.cols,
            width: e.width
        }
    }

    function Bl(e, t) {
        for (var n = 0, r = 0, o = e; r < o.length; r++) {
            var i = o[r],
                a = i[t];
            "number" == typeof a && (n += a * (i.span || 1))
        }
        return n
    }
    Ol.addStateEquality({
        shrinkWidths: dt,
        scrollerClientWidths: ze,
        scrollerClientHeights: ze
    });
    var zl = {
        cols: na
    };

    function Vl(e, t) {
        return Fe(e, t, zl)
    }

    function Fl(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new Hl(e, t)
    }

    function jl(e) {
        e.destroy()
    }

    function Gl(e, t) {
        return new _l(e, t)
    }

    function ql(e) {
        e.destroy()
    }
    var Yl = yo({
            deps: [wl],
            scrollGridImpl: Ol
        }),
        Zl = [],
        Xl = [],
        Kl = yo({
            deps: [wl],
            contextInit: function(e) {
                Zl.length || (window.addEventListener("beforeprint", Jl), window.addEventListener("afterprint", $l)), Zl.push(e), e.calendarApi.on("_unmount", (function() {
                    ct(Zl, e), Zl.length || (window.removeEventListener("beforeprint", Jl), window.removeEventListener("afterprint", $l))
                }))
            }
        });

    function Jl() {
        for (var e = j(document.body, ".fc-scroller-harness > .fc-scroller"), t = e.map((function(e) {
                var t = window.getComputedStyle(e);
                return {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop,
                    overflowX: t.overflowX,
                    overflowY: t.overflowY,
                    marginBottom: t.marginBottom
                }
            })), n = 0, r = Zl; n < r.length; n++) {
            r[n].emitter.trigger("_beforeprint")
        }
        Kr(),
            function(e, t) {
                e.forEach((function(e, n) {
                    e.style.overflowX = "visible", e.style.overflowY = "visible", e.style.marginBottom = "", e.style.left = -t[n].scrollLeft + "px"
                }))
            }(e, t), Xl.push((function() {
                return function(e, t) {
                    e.forEach((function(e, n) {
                        var r = t[n];
                        e.style.overflowX = r.overflowX, e.style.overflowY = r.overflowY, e.style.marginBottom = r.marginBottom, e.style.left = "", e.scrollLeft = r.scrollLeft, e.scrollTop = r.scrollTop
                    }))
                }(e, t)
            })), Xl.push(function() {
                var e = j(document.body, ".fc-scrollgrid");
                return e.forEach(Ql),
                    function() {
                        return e.forEach(eu)
                    }
            }())
    }

    function $l() {
        for (var e = 0, t = Zl; e < t.length; e++) {
            t[e].emitter.trigger("_afterprint")
        }
        for (Kr(); Xl.length;) Xl.shift()()
    }

    function Ql(e) {
        e.style.width = e.getBoundingClientRect().width + "px"
    }

    function eu(e) {
        e.style.width = ""
    }
    Di.MAX_TIMELINE_SLOTS = 1e3;
    var tu = [{
        years: 1
    }, {
        months: 1
    }, {
        days: 1
    }, {
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        minutes: 10
    }, {
        minutes: 5
    }, {
        minutes: 1
    }, {
        seconds: 30
    }, {
        seconds: 15
    }, {
        seconds: 10
    }, {
        seconds: 5
    }, {
        seconds: 1
    }, {
        milliseconds: 500
    }, {
        milliseconds: 100
    }, {
        milliseconds: 10
    }, {
        milliseconds: 1
    }];

    function nu(e, t, n, r) {
        var o = {
            labelInterval: n.slotLabelInterval,
            slotDuration: n.slotDuration
        };
        ! function(e, t, n) {
            var r = t.currentRange;
            if (e.labelInterval) {
                n.countDurationsBetween(r.start, r.end, e.labelInterval) > Di.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"), e.labelInterval = null)
            }
            if (e.slotDuration) {
                n.countDurationsBetween(r.start, r.end, e.slotDuration) > Di.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"), e.slotDuration = null)
            }
            if (e.labelInterval && e.slotDuration) {
                var o = it(e.labelInterval, e.slotDuration);
                (null === o || o < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"), e.slotDuration = null)
            }
        }(o, e, t), iu(o, e, t),
            function(e, t, n) {
                var r = t.currentRange,
                    o = e.slotDuration;
                if (!o) {
                    for (var i = iu(e, t, n), a = 0, s = tu; a < s.length; a++) {
                        var l = Ke(s[a]),
                            u = it(i, l);
                        if (null !== u && u > 1 && u <= 6) {
                            o = l;
                            break
                        }
                    }
                    if (o) n.countDurationsBetween(r.start, r.end, o) > 200 && (o = null);
                    o || (o = i), e.slotDuration = o
                }
            }(o, e, t);
        var i = n.slotLabelFormat,
            a = Array.isArray(i) ? i : null != i ? [i] : function(e, t, n, r) {
                var o, i, a = e.labelInterval,
                    s = at(a).unit,
                    l = r.weekNumbers,
                    u = o = i = null;
                "week" !== s || l || (s = "day");
                switch (s) {
                    case "year":
                        u = {
                            year: "numeric"
                        };
                        break;
                    case "month":
                        au("years", t, n) > 1 && (u = {
                            year: "numeric"
                        }), o = {
                            month: "short"
                        };
                        break;
                    case "week":
                        au("years", t, n) > 1 && (u = {
                            year: "numeric"
                        }), o = {
                            week: "narrow"
                        };
                        break;
                    case "day":
                        au("years", t, n) > 1 ? u = {
                            year: "numeric",
                            month: "long"
                        } : au("months", t, n) > 1 && (u = {
                            month: "long"
                        }), l && (o = {
                            week: "short"
                        }), i = {
                            weekday: "narrow",
                            day: "numeric"
                        };
                        break;
                    case "hour":
                        l && (u = {
                            week: "short"
                        }), au("days", t, n) > 1 && (o = {
                            weekday: "short",
                            day: "numeric",
                            month: "numeric",
                            omitCommas: !0
                        }), i = {
                            hour: "numeric",
                            minute: "2-digit",
                            omitZeroMinute: !0,
                            meridiem: "short"
                        };
                        break;
                    case "minute":
                        nt(a) / 60 >= 6 ? (u = {
                            hour: "numeric",
                            meridiem: "short"
                        }, o = function(e) {
                            return ":" + pe(e.date.minute, 2)
                        }) : u = {
                            hour: "numeric",
                            minute: "numeric",
                            meridiem: "short"
                        };
                        break;
                    case "second":
                        rt(a) / 60 >= 6 ? (u = {
                            hour: "numeric",
                            minute: "2-digit",
                            meridiem: "lowercase"
                        }, o = function(e) {
                            return ":" + pe(e.date.second, 2)
                        }) : u = {
                            hour: "numeric",
                            minute: "2-digit",
                            second: "2-digit",
                            meridiem: "lowercase"
                        };
                        break;
                    case "millisecond":
                        u = {
                            hour: "numeric",
                            minute: "2-digit",
                            second: "2-digit",
                            meridiem: "lowercase"
                        }, o = function(e) {
                            return "." + pe(e.millisecond, 3)
                        }
                }
                return [].concat(u || [], o || [], i || [])
            }(o, e, t, n);
        o.headerFormats = a.map((function(e) {
            return kt(e)
        })), o.isTimeScale = Boolean(o.slotDuration.milliseconds);
        var s = null;
        if (!o.isTimeScale) {
            var l = at(o.slotDuration).unit;
            /year|month|week/.test(l) && (s = l)
        }
        o.largeUnit = s, o.emphasizeWeeks = 1 === $e(o.slotDuration) && au("weeks", e, t) >= 2 && !n.businessHours;
        var u, c, d = n.snapDuration;
        d && (u = Ke(d), c = it(o.slotDuration, u)), null == c && (u = o.slotDuration, c = 1), o.snapDuration = u, o.snapsPerSlot = c;
        var p = ot(e.slotMaxTime) - ot(e.slotMinTime),
            f = ru(e.renderRange.start, o, t),
            h = ru(e.renderRange.end, o, t);
        o.isTimeScale && (f = t.add(f, e.slotMinTime), h = t.add(ye(h, -1), e.slotMaxTime)), o.timeWindowMs = p, o.normalizedRange = {
            start: f,
            end: h
        };
        for (var g = [], v = f; v < h;) ou(v, o, e, r) && g.push(v), v = t.add(v, o.slotDuration);
        o.slotDates = g;
        var m = -1,
            y = 0,
            S = [],
            E = [];
        for (v = f; v < h;) ou(v, o, e, r) ? (m += 1, S.push(m), E.push(y)) : S.push(m + .5), v = t.add(v, o.snapDuration), y += 1;
        return o.snapDiffToIndex = S, o.snapIndexToDiff = E, o.snapCnt = m + 1, o.slotCnt = o.snapCnt / o.snapsPerSlot, o.isWeekStarts = function(e, t) {
            for (var n = e.slotDates, r = e.emphasizeWeeks, o = null, i = [], a = 0, s = n; a < s.length; a++) {
                var l = s[a],
                    u = t.computeWeekNumber(l),
                    c = r && null !== o && o !== u;
                o = u, i.push(c)
            }
            return i
        }(o, t), o.cellRows = function(e, t) {
            for (var n = e.slotDates, r = e.headerFormats, o = r.map((function() {
                    return []
                })), i = $e(e.slotDuration), a = 7 === i ? "week" : 1 === i ? "day" : null, s = r.map((function(e) {
                    return e.getLargestUnit ? e.getLargestUnit() : null
                })), l = 0; l < n.length; l += 1)
                for (var u = n[l], c = e.isWeekStarts[l], d = 0; d < r.length; d += 1) {
                    var p = r[d],
                        f = o[d],
                        h = f[f.length - 1],
                        g = d === r.length - 1,
                        v = r.length > 1 && !g,
                        m = null,
                        y = s[d] || (g ? a : null);
                    if (v) {
                        var S = t.format(u, p);
                        h && h.text === S ? h.colspan += 1 : m = su(u, S, y)
                    } else if (!h || he(t.countDurationsBetween(e.normalizedRange.start, u, e.labelInterval))) {
                        S = t.format(u, p);
                        m = su(u, S, y)
                    } else h.colspan += 1;
                    m && (m.weekStart = c, f.push(m))
                }
            return o
        }(o, t), o.slotsPerLabel = it(o.labelInterval, o.slotDuration), o
    }

    function ru(e, t, n) {
        var r = e;
        return t.isTimeScale || (r = we(r), t.largeUnit && (r = n.startOf(r, t.largeUnit))), r
    }

    function ou(e, t, n, r) {
        if (r.isHiddenDay(e)) return !1;
        if (t.isTimeScale) {
            var o = we(e),
                i = e.valueOf() - o.valueOf() - ot(n.slotMinTime);
            return (i = (i % 864e5 + 864e5) % 864e5) < t.timeWindowMs
        }
        return !0
    }

    function iu(e, t, n) {
        var r = t.currentRange,
            o = e.labelInterval;
        if (!o) {
            if (e.slotDuration) {
                for (var i = 0, a = tu; i < a.length; i++) {
                    var s = Ke(a[i]),
                        l = it(s, e.slotDuration);
                    if (null !== l && l <= 6) {
                        o = s;
                        break
                    }
                }
                o || (o = e.slotDuration)
            } else
                for (var u = 0, c = tu; u < c.length; u++) {
                    if (o = Ke(c[u]), n.countDurationsBetween(r.start, r.end, o) >= 18) break
                }
            e.labelInterval = o
        }
        return o
    }

    function au(e, t, n) {
        var r = t.currentRange,
            o = null;
        return "years" === e ? o = n.diffWholeYears(r.start, r.end) : "months" === e || "weeks" === e ? o = n.diffWholeMonths(r.start, r.end) : "days" === e && (o = De(r.start, r.end)), o || 0
    }

    function su(e, t, n) {
        return {
            date: e,
            text: t,
            rowUnit: n,
            colspan: 1,
            isWeekStart: !1
        }
    }
    var lu = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = this.context,
                n = e.navLinkData ? {
                    "data-navlink": e.navLinkData,
                    tabIndex: 0
                } : {};
            return Gr(Do, {
                hookProps: e.hookProps,
                content: t.options.slotLabelContent,
                defaultContent: uu
            }, (function(t, o) {
                return Gr("a", r({
                    ref: t,
                    className: "fc-timeline-slot-cushion fc-scrollgrid-sync-inner" + (e.isSticky ? " fc-sticky" : "")
                }, n), o)
            }))
        }, t
    }(no);

    function uu(e) {
        return e.text
    }

    function cu(e) {
        return {
            level: e.level,
            date: e.dateEnv.toDate(e.dateMarker),
            view: e.viewApi,
            text: e.text
        }
    }
    var du = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = ft(cu), t.normalizeClassNames = xo(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    r = t.options,
                    o = e.cell,
                    i = e.dateProfile,
                    a = e.tDateProfile,
                    s = Dr(o.date, e.todayRange, e.nowDate, i),
                    l = ["fc-timeline-slot", "fc-timeline-slot-label"].concat("time" === o.rowUnit ? Tr(s, t.theme) : wr(s, t.theme));
                o.isWeekStart && l.push("fc-timeline-slot-em");
                var u = r.navLinks && o.rowUnit && "time" !== o.rowUnit ? xr(o.date, o.rowUnit) : null,
                    c = this.refineHookProps({
                        level: e.rowLevel,
                        dateMarker: o.date,
                        text: o.text,
                        dateEnv: t.dateEnv,
                        viewApi: t.viewApi
                    }),
                    d = this.normalizeClassNames(r.slotLabelClassNames, c);
                return Gr(To, {
                    hookProps: c,
                    didMount: r.slotLabelDidMount,
                    willUnmount: r.slotLabelWillUnmount
                }, (function(t) {
                    return Gr("th", {
                        ref: t,
                        className: l.concat(d).join(" "),
                        "data-date": n.formatIso(o.date, {
                            omitTime: !a.isTimeScale,
                            omitTimeZoneOffset: !0
                        }),
                        colSpan: o.colspan
                    }, Gr("div", {
                        className: "fc-timeline-slot-frame",
                        style: {
                            height: e.rowInnerHeight
                        }
                    }, Gr(lu, {
                        hookProps: c,
                        isSticky: e.isSticky,
                        navLinkData: u
                    })))
                }))
            }, t
        }(no),
        pu = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.dateProfile,
                    n = e.tDateProfile,
                    r = e.rowInnerHeights,
                    o = e.todayRange,
                    i = e.nowDate,
                    a = n.cellRows;
                return Gr(Zr, null, a.map((function(e, s) {
                    var l = s === a.length - 1,
                        u = n.isTimeScale && l;
                    return Gr("tr", {
                        key: s,
                        className: ["fc-timeline-header-row", u ? "fc-timeline-header-row-chrono" : ""].join(" ")
                    }, e.map((function(e) {
                        return Gr(du, {
                            key: e.date.toISOString(),
                            cell: e,
                            rowLevel: s,
                            dateProfile: t,
                            tDateProfile: n,
                            todayRange: o,
                            nowDate: i,
                            rowInnerHeight: r && r[s],
                            isSticky: !l
                        })
                    })))
                })))
            }, t
        }(no),
        fu = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = at(t.tDateProfile.slotDuration).unit,
                    o = t.slatCoords && t.slatCoords.dateProfile === t.dateProfile ? t.slatCoords : null;
                return Gr(zi, {
                    unit: r
                }, (function(r, i) {
                    return Gr("div", {
                        className: "fc-timeline-header",
                        ref: e.rootElRef
                    }, Gr("table", {
                        className: "fc-scrollgrid-sync-table",
                        style: {
                            minWidth: t.tableMinWidth,
                            width: t.clientWidth
                        }
                    }, t.tableColGroupNode, Gr("tbody", null, Gr(pu, {
                        dateProfile: t.dateProfile,
                        tDateProfile: t.tDateProfile,
                        nowDate: r,
                        todayRange: i,
                        rowInnerHeights: t.rowInnerHeights
                    }))), n.options.nowIndicator && Gr("div", {
                        className: "fc-timeline-now-indicator-container"
                    }, o && o.isDateInRange(r) && Gr(ga, {
                        isAxis: !0,
                        date: r
                    }, (function(e, t, n, i) {
                        return Gr("div", {
                            ref: e,
                            className: ["fc-timeline-now-indicator-arrow"].concat(t).join(" "),
                            style: {
                                left: o.dateToCoord(r)
                            }
                        }, i)
                    }))))
                }))
            }, t.prototype.componentDidMount = function() {
                this.updateSize()
            }, t.prototype.componentDidUpdate = function() {
                this.updateSize()
            }, t.prototype.updateSize = function() {
                this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth())
            }, t.prototype.computeMaxCushionWidth = function() {
                return Math.max.apply(Math, j(this.rootElRef.current, ".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map((function(e) {
                    return e.getBoundingClientRect().width
                })))
            }, t
        }(no),
        hu = function() {
            function e(e, t, n, r, o, i) {
                this.slatRootEl = e, this.dateProfile = n, this.tDateProfile = r, this.dateEnv = o, this.isRtl = i, this.outerCoordCache = new Ur(e, t, !0, !1), this.innerCoordCache = new Ur(e, G(t, "div"), !0, !1)
            }
            return e.prototype.rangeToCoords = function(e) {
                return this.isRtl ? {
                    right: this.dateToCoord(e.start),
                    left: this.dateToCoord(e.end)
                } : {
                    left: this.dateToCoord(e.start),
                    right: this.dateToCoord(e.end)
                }
            }, e.prototype.isDateInRange = function(e) {
                return vn(this.dateProfile.currentRange, e)
            }, e.prototype.dateToCoord = function(e) {
                var t = this.tDateProfile,
                    n = this.computeDateSnapCoverage(e) / t.snapsPerSlot,
                    r = Math.floor(n),
                    o = n - (r = Math.min(r, t.slotCnt - 1)),
                    i = this.innerCoordCache,
                    a = this.outerCoordCache;
                return this.isRtl ? a.rights[r] - i.getWidth(r) * o - a.originClientRect.width : a.lefts[r] + i.getWidth(r) * o
            }, e.prototype.computeDateSnapCoverage = function(e) {
                return gu(e, this.tDateProfile, this.dateEnv)
            }, e.prototype.computeDurationLeft = function(e) {
                var t = this.dateProfile,
                    n = this.tDateProfile,
                    r = this.dateEnv,
                    o = this.isRtl,
                    i = 0;
                if (t) {
                    var a = r.add(t.activeRange.start, e);
                    n.isTimeScale || (a = we(a)), i = this.dateToCoord(a), !o && i && (i += 1)
                }
                return i
            }, e
        }();

    function gu(e, t, n) {
        var r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
        if (r < 0) return 0;
        if (r >= t.snapDiffToIndex.length) return t.snapCnt;
        var o = Math.floor(r),
            i = t.snapDiffToIndex[o];
        return he(i) ? i += r - o : i = Math.ceil(i), i
    }
    var vu = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    o = t.options,
                    i = t.theme,
                    a = e.date,
                    s = e.tDateProfile,
                    l = e.isEm,
                    u = Dr(e.date, e.todayRange, e.nowDate, e.dateProfile),
                    c = ["fc-timeline-slot", "fc-timeline-slot-lane"],
                    d = {
                        "data-date": n.formatIso(a, {
                            omitTimeZoneOffset: !0,
                            omitTime: !s.isTimeScale
                        })
                    },
                    p = r(r({
                        date: n.toDate(e.date)
                    }, u), {
                        view: t.viewApi
                    });
                return l && c.push("fc-timeline-slot-em"), s.isTimeScale && c.push(he(n.countDurationsBetween(s.normalizedRange.start, e.date, s.labelInterval)) ? "fc-timeline-slot-major" : "fc-timeline-slot-minor"), c.push.apply(c, e.isDay ? wr(u, i) : Tr(u, i)), Gr(bo, {
                    hookProps: p,
                    classNames: o.slotLaneClassNames,
                    content: o.slotLaneContent,
                    didMount: o.slotLaneDidMount,
                    willUnmount: o.slotLaneWillUnmount,
                    elRef: e.elRef
                }, (function(e, t, n, o) {
                    return Gr("td", r({
                        ref: e,
                        className: c.concat(t).join(" ")
                    }, d), Gr("div", {
                        ref: n
                    }, o))
                }))
            }, t
        }(no),
        mu = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.tDateProfile,
                    n = e.cellElRefs,
                    r = t.slotDates,
                    o = t.isWeekStarts,
                    i = !t.isTimeScale && !t.largeUnit;
                return Gr("tbody", null, Gr("tr", null, r.map((function(r, a) {
                    var s = r.toISOString();
                    return Gr(vu, {
                        key: s,
                        elRef: n.createRef(s),
                        date: r,
                        dateProfile: e.dateProfile,
                        tDateProfile: t,
                        nowDate: e.nowDate,
                        todayRange: e.todayRange,
                        isEm: o[a],
                        isDay: i
                    })
                }))))
            }, t
        }(no),
        yu = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t.cellElRefs = new Ji, t.handleScrollRequest = function(e) {
                    var n = t.props.onScrollLeftRequest,
                        r = t.coords;
                    if (n && r) {
                        if (e.time) n(r.computeDurationLeft(e.time));
                        return !0
                    }
                    return null
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context;
                return Gr("div", {
                    className: "fc-timeline-slots",
                    ref: this.rootElRef
                }, Gr("table", {
                    className: t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth
                    }
                }, e.tableColGroupNode, Gr(mu, {
                    cellElRefs: this.cellElRefs,
                    dateProfile: e.dateProfile,
                    tDateProfile: e.tDateProfile,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange
                })))
            }, t.prototype.componentDidMount = function() {
                this.updateSizing(), this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
            }, t.prototype.componentDidUpdate = function(e) {
                this.updateSizing(), this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
            }, t.prototype.componentWillUnmount = function() {
                this.scrollResponder.detach(), this.props.onCoords && this.props.onCoords(null)
            }, t.prototype.updateSizing = function() {
                var e, t = this.props,
                    n = this.context;
                null !== t.clientWidth && this.scrollResponder && (this.rootElRef.current.offsetWidth && (this.coords = new hu(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.tDateProfile.slotDates.map((function(t) {
                    var n = t.toISOString();
                    return e[n]
                }))), t.dateProfile, t.tDateProfile, n.dateEnv, n.isRtl), t.onCoords && t.onCoords(this.coords), this.scrollResponder.update(!1)))
            }, t.prototype.positionToHit = function(e) {
                var t = this.coords.outerCoordCache,
                    n = this.context,
                    r = n.dateEnv,
                    o = n.isRtl,
                    i = this.props.tDateProfile,
                    a = t.leftToIndex(e);
                if (null != a) {
                    var s = t.getWidth(a),
                        l = o ? (t.rights[a] - e) / s : (e - t.lefts[a]) / s,
                        u = Math.floor(l * i.snapsPerSlot),
                        c = r.add(i.slotDates[a], et(i.snapDuration, u));
                    return {
                        dateSpan: {
                            range: {
                                start: c,
                                end: r.add(c, i.snapDuration)
                            },
                            allDay: !this.props.tDateProfile.isTimeScale
                        },
                        dayEl: this.cellElRefs.currentMap[a],
                        left: t.lefts[a],
                        right: t.rights[a]
                    }
                }
                return null
            }, t
        }(no);
    var Su = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
                return e.timelineCoords && Gr("div", {
                    className: "fc-timeline-bg"
                }, this.renderSegs(e.businessHourSegs || [], e.timelineCoords, "non-business"), this.renderSegs(e.bgEventSegs || [], e.timelineCoords, "bg-event"), this.renderSegs(t, e.timelineCoords, "highlight"))
            }, t.prototype.renderSegs = function(e, t, n) {
                var o = this.props,
                    i = o.todayRange,
                    a = o.nowDate,
                    s = e.map((function(e) {
                        var o = t.rangeToCoords(e);
                        return Gr("div", {
                            key: In(e.eventRange),
                            className: "fc-timeline-bg-harness",
                            style: {
                                left: o.left,
                                right: -o.right
                            }
                        }, "bg-event" === n ? Gr(Ca, r({
                            seg: e
                        }, kn(e, i, a))) : Ea(n))
                    }));
                return Gr(Zr, null, s)
            }, t
        }(no),
        Eu = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.sliceRange = function(e, t, n, r, o) {
                var i = function(e, t, n) {
                        if (!t.isTimeScale && (e = sn(e), t.largeUnit)) {
                            var r = e;
                            ((e = {
                                start: n.startOf(e.start, t.largeUnit),
                                end: n.startOf(e.end, t.largeUnit)
                            }).end.valueOf() !== r.end.valueOf() || e.end <= e.start) && (e = {
                                start: e.start,
                                end: n.add(e.end, t.slotDuration)
                            })
                        }
                        return e
                    }(e, r, o),
                    a = [];
                if (gu(i.start, r, o) < gu(i.end, r, o)) {
                    var s = pn(i, r.normalizedRange);
                    s && a.push({
                        start: s.start,
                        end: s.end,
                        isStart: s.start.valueOf() === i.start.valueOf() && ou(s.start, r, t, n),
                        isEnd: s.end.valueOf() === i.end.valueOf() && ou(Se(s.end, -1), r, t, n)
                    })
                }
                return a
            }, t
        }(Yi),
        Cu = kt({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "narrow"
        }),
        bu = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props;
                return Gr(fa, r({}, e, {
                    extraClassNames: ["fc-timeline-event", "fc-h-event"],
                    defaultTimeFormat: Cu,
                    defaultDisplayEventTime: !e.isTimeScale
                }))
            }, t
        }(no);

    function Ru(e, t) {
        var n = {};
        if (t)
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n[i.eventRange.instance.instanceId] = t.rangeToCoords(i)
            }
        return n
    }

    function Du(e, t, n) {
        var r, o, i, a, s = [],
            l = 0;
        if (n)
            for (var u = 0, c = e = Rn(e, t); u < c.length; u++) {
                var d = c[u].eventRange.instance.instanceId,
                    p = n[d];
                if (p) {
                    for (var f = 0, h = 0, g = 0; g < s.length; g += 1) {
                        var v = s[g];
                        r = p, o = f, i = v.dims, a = v.top, r.right > i.left && r.left < i.right && o + r.height > a && o < a + i.height && (f = v.top + v.dims.height, h = g)
                    }
                    for (; h < s.length && f >= s[h].top;) h += 1;
                    s.splice(h, 0, {
                        key: d,
                        dims: p,
                        top: f
                    }), l = Math.max(l, f + p.height)
                }
            }
        for (var m = {}, y = 0, S = s; y < S.length; y++) {
            m[(v = S[y]).key] = v.top
        }
        return {
            segTops: m,
            height: l
        }
    }
    var wu = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slicer = new Eu, t.computeFgSegHorizontals = pt(Ru), t.computeSegVerticals = pt(Du), t.harnessElRefs = new Ji, t.innerElRef = Yr(), t.state = {
                    segDims: null
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.state,
                    n = this.context,
                    r = e.dateProfile,
                    o = e.tDateProfile,
                    i = this.slicer.sliceProps(e, r, o.isTimeScale ? null : e.nextDayThreshold, n, r, n.dateProfileGenerator, o, n.dateEnv),
                    a = (i.eventDrag ? i.eventDrag.segs : null) || (i.eventResize ? i.eventResize.segs : null) || [],
                    s = this.computeFgSegHorizontals(i.fgEventSegs, e.timelineCoords),
                    l = this.computeSegVerticals(i.fgEventSegs, n.options.eventOrder, t.segDims),
                    u = l.segTops,
                    c = l.height,
                    d = (i.eventDrag ? i.eventDrag.affectedInstances : null) || (i.eventResize ? i.eventResize.affectedInstances : null) || {};
                return Gr(Zr, null, Gr(Su, {
                    businessHourSegs: i.businessHourSegs,
                    bgEventSegs: i.bgEventSegs,
                    timelineCoords: e.timelineCoords,
                    eventResizeSegs: i.eventResize ? i.eventResize.segs : [],
                    dateSelectionSegs: i.dateSelectionSegs,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange
                }), Gr("div", {
                    className: "fc-timeline-events fc-scrollgrid-sync-inner",
                    ref: this.innerElRef,
                    style: {
                        height: c
                    }
                }, this.renderFgSegs(i.fgEventSegs, s, u, d, !1, !1, !1), this.renderFgSegs(a, Ru(a, e.timelineCoords), u, {}, Boolean(i.eventDrag), Boolean(i.eventResize), !1)))
            }, t.prototype.componentDidMount = function() {
                this.updateSize()
            }, t.prototype.componentDidUpdate = function(e, t) {
                e.eventStore === this.props.eventStore && e.timelineCoords === this.props.timelineCoords || this.updateSize()
            }, t.prototype.updateSize = function() {
                var e = this,
                    t = this.props,
                    n = t.timelineCoords;
                if (t.onHeightChange && t.onHeightChange(this.innerElRef.current, !1), n) {
                    var r = n.slatRootEl.getBoundingClientRect();
                    this.setState({
                        segDims: Le(this.harnessElRefs.currentMap, (function(e) {
                            var t = e.getBoundingClientRect();
                            return {
                                left: Math.round(t.left - r.left),
                                right: Math.round(t.right - r.left),
                                height: Math.round(t.height)
                            }
                        }))
                    }, (function() {
                        t.onHeightChange && t.onHeightChange(e.innerElRef.current, !0)
                    }))
                }
            }, t.prototype.renderFgSegs = function(e, t, n, o, i, a, s) {
                var l = this,
                    u = this.harnessElRefs,
                    c = this.props,
                    d = i || a || s;
                return Gr(Zr, null, e.map((function(e) {
                    var p = e.eventRange.instance.instanceId,
                        f = t[p],
                        h = n[p];
                    return Gr("div", {
                        key: p,
                        ref: d ? null : u.createRef(p),
                        className: "fc-timeline-event-harness",
                        style: {
                            left: f ? f.left : "",
                            right: f ? -f.right : "",
                            top: null != h ? h : "",
                            visibility: o[p] ? "hidden" : ""
                        }
                    }, Gr(bu, r({
                        isTimeScale: l.props.tDateProfile.isTimeScale,
                        seg: e,
                        isDragging: i,
                        isResizing: a,
                        isDateSelecting: s,
                        isSelected: p === l.props.eventSelection
                    }, kn(e, c.todayRange, c.nowDate))))
                })))
            }, t
        }(no),
        Tu = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slatsRef = Yr(), t.state = {
                    coords: null
                }, t.handeEl = function(e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t.handleCoords = function(e) {
                    t.setState({
                        coords: e
                    }), t.props.onSlatCoords && t.props.onSlatCoords(e)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.state,
                    r = this.context.options,
                    o = t.dateProfile,
                    i = t.tDateProfile,
                    a = at(i.slotDuration).unit;
                return Gr("div", {
                    className: "fc-timeline-body",
                    ref: this.handeEl,
                    style: {
                        minWidth: t.tableMinWidth,
                        height: t.clientHeight,
                        width: t.clientWidth
                    }
                }, Gr(zi, {
                    unit: a
                }, (function(a, s) {
                    return Gr(Zr, null, Gr(yu, {
                        ref: e.slatsRef,
                        dateProfile: o,
                        tDateProfile: i,
                        nowDate: a,
                        todayRange: s,
                        clientWidth: t.clientWidth,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        onCoords: e.handleCoords,
                        onScrollLeftRequest: t.onScrollLeftRequest
                    }), Gr(wu, {
                        dateProfile: o,
                        tDateProfile: t.tDateProfile,
                        nowDate: a,
                        todayRange: s,
                        nextDayThreshold: r.nextDayThreshold,
                        businessHours: t.businessHours,
                        eventStore: t.eventStore,
                        eventUiBases: t.eventUiBases,
                        dateSelection: t.dateSelection,
                        eventSelection: t.eventSelection,
                        eventDrag: t.eventDrag,
                        eventResize: t.eventResize,
                        timelineCoords: n.coords
                    }), r.nowIndicator && n.coords && n.coords.isDateInRange(a) && Gr("div", {
                        className: "fc-timeline-now-indicator-container"
                    }, Gr(ga, {
                        isAxis: !1,
                        date: a
                    }, (function(e, t, r, o) {
                        return Gr("div", {
                            ref: e,
                            className: ["fc-timeline-now-indicator-line"].concat(t).join(" "),
                            style: {
                                left: n.coords.dateToCoord(a)
                            }
                        }, o)
                    }))))
                })))
            }, t.prototype.queryHit = function(e, t, n, r) {
                var o = this.slatsRef.current.positionToHit(e);
                return o ? {
                    component: this,
                    dateSpan: o.dateSpan,
                    rect: {
                        left: o.left,
                        right: o.right,
                        top: 0,
                        bottom: r
                    },
                    dayEl: o.dayEl,
                    layer: 0
                } : null
            }, t
        }(mo),
        xu = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildTimelineDateProfile = pt(nu), t.scrollGridRef = Yr(), t.state = {
                    slatCoords: null,
                    slotCushionMaxWidth: null
                }, t.handleSlatCoords = function(e) {
                    t.setState({
                        slatCoords: e
                    })
                }, t.handleScrollLeftRequest = function(e) {
                    t.scrollGridRef.current.forceScrollLeft(0, e)
                }, t.handleMaxCushionWidth = function(e) {
                    t.setState({
                        slotCushionMaxWidth: Math.ceil(e)
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.state,
                    o = this.context,
                    i = o.options,
                    a = !t.forPrint && ua(i),
                    s = !t.forPrint && ca(i),
                    l = this.buildTimelineDateProfile(t.dateProfile, o.dateEnv, i, o.dateProfileGenerator),
                    u = ["fc-timeline", !1 === i.eventOverlap ? "fc-timeline-overlap-disabled" : ""],
                    c = i.slotMinWidth,
                    d = Mu(l, c || this.computeFallbackSlotMinWidth(l)),
                    p = [{
                        type: "header",
                        key: "header",
                        isSticky: a,
                        chunks: [{
                            key: "timeline",
                            content: function(r) {
                                return Gr(fu, {
                                    dateProfile: t.dateProfile,
                                    clientWidth: r.clientWidth,
                                    clientHeight: r.clientHeight,
                                    tableMinWidth: r.tableMinWidth,
                                    tableColGroupNode: r.tableColGroupNode,
                                    tDateProfile: l,
                                    slatCoords: n.slatCoords,
                                    onMaxCushionWidth: c ? null : e.handleMaxCushionWidth
                                })
                            }
                        }]
                    }, {
                        type: "body",
                        key: "body",
                        liquid: !0,
                        chunks: [{
                            key: "timeline",
                            content: function(n) {
                                return Gr(Tu, r({}, t, {
                                    clientWidth: n.clientWidth,
                                    clientHeight: n.clientHeight,
                                    tableMinWidth: n.tableMinWidth,
                                    tableColGroupNode: n.tableColGroupNode,
                                    tDateProfile: l,
                                    onSlatCoords: e.handleSlatCoords,
                                    onScrollLeftRequest: e.handleScrollLeftRequest
                                }))
                            }
                        }]
                    }];
                return s && p.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "timeline",
                        content: la
                    }]
                }), Gr(Po, {
                    viewSpec: o.viewSpec
                }, (function(n, r) {
                    return Gr("div", {
                        ref: n,
                        className: u.concat(r).join(" ")
                    }, Gr(Ol, {
                        ref: e.scrollGridRef,
                        liquid: !t.isHeightAuto && !t.forPrint,
                        colGroups: [{
                            cols: d
                        }],
                        sections: p
                    }))
                }))
            }, t.prototype.computeFallbackSlotMinWidth = function(e) {
                return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
            }, t
        }(mo);

    function Mu(e, t) {
        return [{
            span: e.slotCnt,
            minWidth: t || 1
        }]
    }
    var ku = yo({
        deps: [wl],
        initialView: "timelineDay",
        views: {
            timeline: {
                component: xu,
                usesMinMaxTime: !0,
                eventResizableFromStart: !0
            },
            timelineDay: {
                type: "timeline",
                duration: {
                    days: 1
                }
            },
            timelineWeek: {
                type: "timeline",
                duration: {
                    weeks: 1
                }
            },
            timelineMonth: {
                type: "timeline",
                duration: {
                    months: 1
                }
            },
            timelineYear: {
                type: "timeline",
                duration: {
                    years: 1
                }
            }
        }
    });

    function Pu(e, t) {
        var n = e.resourceEditable;
        if (null == n) {
            var r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
            r && (n = r.extendedProps.resourceEditable), null == n && null == (n = t.options.eventResourceEditable) && (n = t.options.editable)
        }
        return n
    }
    var Iu = function() {
        function e() {
            this.filterResources = pt(_u)
        }
        return e.prototype.transform = function(e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? {
                resourceStore: this.filterResources(t.resourceStore, t.options.filterResourcesWithEvents, t.eventStore, t.dateProfile.activeRange),
                resourceEntityExpansions: t.resourceEntityExpansions
            } : null
        }, e
    }();

    function _u(e, t, n, o) {
        if (t) {
            var i = function(e, t) {
                var n = {};
                for (var r in e)
                    for (var o = e[r], i = 0, a = t[o.defId].resourceIds; i < a.length; i++) {
                        var s = a[i];
                        n[s] = !0
                    }
                return n
            }(function(e, t) {
                return Ae(e, (function(e) {
                    return hn(e.range, t)
                }))
            }(n.instances, o), n.defs);
            return r(i, function(e, t) {
                var n = {};
                for (var r in e)
                    for (var o = void 0;
                        (o = t[r]) && (r = o.parentId);) n[r] = !0;
                return n
            }(i, e)), Ae(e, (function(e, t) {
                return i[t]
            }))
        }
        return e
    }
    var Nu = function() {
        function e() {
            this.buildResourceEventUis = pt(Hu, ze), this.injectResourceEventUis = pt(Ou)
        }
        return e.prototype.transform = function(e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? null : {
                eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore))
            }
        }, e
    }();

    function Hu(e) {
        return Le(e, (function(e) {
            return e.ui
        }))
    }

    function Ou(e, t, n) {
        return Le(e, (function(e, r) {
            return r ? function(e, t, n) {
                for (var r = [], o = 0, i = t.resourceIds; o < i.length; o++) {
                    var a = i[o];
                    n[a] && r.unshift(n[a])
                }
                return r.unshift(e), Kt(r)
            }(e, t[r], n) : e
        }))
    }
    var Wu = [];

    function Au(e) {
        Wu.push(e)
    }

    function Lu(e) {
        return Wu[e]
    }

    function Uu() {
        return Wu
    }
    var Bu = {
        id: String,
        resources: Ut,
        url: String,
        method: String,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        extraParams: Ut
    };

    function zu(e) {
        var t;
        if ("string" == typeof e ? t = {
                url: e
            } : "function" == typeof e || Array.isArray(e) ? t = {
                resources: e
            } : "object" == typeof e && e && (t = e), t) {
            var n = Lt(t, Bu),
                r = n.refined;
            ! function(e) {
                for (var t in e) console.warn("Unknown resource prop '" + t + "'")
            }(n.extra);
            var o = function(e) {
                for (var t = Uu(), n = t.length - 1; n >= 0; n -= 1) {
                    var r = t[n].parseMeta(e);
                    if (r) return {
                        meta: r,
                        sourceDefId: n
                    }
                }
                return null
            }(r);
            if (o) return {
                _raw: e,
                sourceId: te(),
                sourceDefId: o.sourceDefId,
                meta: o.meta,
                publicId: r.id || "",
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null
            }
        }
        return null
    }

    function Vu(e, t, n) {
        var o = n.options,
            i = n.dateProfile;
        if (!e || !t) return Fu(o.initialResources || o.resources, i.activeRange, o.refetchResourcesOnNavigate, n);
        switch (t.type) {
            case "RESET_RESOURCE_SOURCE":
                return Fu(t.resourceSourceInput, i.activeRange, o.refetchResourcesOnNavigate, n);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return function(e, t, n, r) {
                    if (n && ! function(e) {
                            return Boolean(Lu(e.sourceDefId).ignoreRange)
                        }(e) && (!e.fetchRange || !fn(e.fetchRange, t))) return ju(e, t, r);
                    return e
                }(e, i.activeRange, o.refetchResourcesOnNavigate, n);
            case "RECEIVE_RESOURCES":
            case "RECEIVE_RESOURCE_ERROR":
                return function(e, t, n) {
                    if (t === e.latestFetchId) return r(r({}, e), {
                        isFetching: !1,
                        fetchRange: n
                    });
                    return e
                }(e, t.fetchId, t.fetchRange);
            case "REFETCH_RESOURCES":
                return ju(e, i.activeRange, n);
            default:
                return e
        }
    }

    function Fu(e, t, n, r) {
        if (e) {
            var o = zu(e);
            return o = ju(o, n ? t : null, r)
        }
        return null
    }

    function ju(e, t, n) {
        var o = Lu(e.sourceDefId),
            i = te();
        return o.fetch({
            resourceSource: e,
            range: t,
            context: n
        }, (function(e) {
            n.dispatch({
                type: "RECEIVE_RESOURCES",
                fetchId: i,
                fetchRange: t,
                rawResources: e.rawResources
            })
        }), (function(e) {
            n.dispatch({
                type: "RECEIVE_RESOURCE_ERROR",
                fetchId: i,
                fetchRange: t,
                error: e
            })
        })), r(r({}, e), {
            isFetching: !0,
            latestFetchId: i
        })
    }
    var Gu = {
        id: String,
        parentId: String,
        children: Ut,
        title: String,
        businessHours: Ut,
        extendedProps: Ut,
        eventEditable: Boolean,
        eventStartEditable: Boolean,
        eventDurationEditable: Boolean,
        eventConstraint: Ut,
        eventOverlap: Boolean,
        eventAllow: Ut,
        eventClassNames: qt,
        eventBackgroundColor: String,
        eventBorderColor: String,
        eventTextColor: String,
        eventColor: String
    };

    function qu(e, t, n, o) {
        void 0 === t && (t = "");
        var i = Lt(e, Gu),
            a = i.refined,
            s = i.extra,
            l = {
                id: a.id || "_fc:" + te(),
                parentId: a.parentId || t,
                title: a.title || "",
                businessHours: a.businessHours ? fr(a.businessHours, o) : null,
                ui: Xt({
                    editable: a.eventEditable,
                    startEditable: a.eventStartEditable,
                    durationEditable: a.eventDurationEditable,
                    constraint: a.eventConstraint,
                    overlap: a.eventOverlap,
                    allow: a.eventAllow,
                    classNames: a.eventClassNames,
                    backgroundColor: a.eventBackgroundColor,
                    borderColor: a.eventBorderColor,
                    textColor: a.eventTextColor,
                    color: a.eventColor
                }, o),
                extendedProps: r(r({}, s), a.extendedProps)
            };
        if (Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), n[l.id]);
        else if (n[l.id] = l, a.children)
            for (var u = 0, c = a.children; u < c.length; u++) {
                qu(c[u], l.id, n, o)
            }
        return l
    }

    function Yu(e) {
        return 0 === e.indexOf("_fc:") ? "" : e
    }

    function Zu(e, t, n, o) {
        if (!e || !t) return {};
        switch (t.type) {
            case "RECEIVE_RESOURCES":
                return function(e, t, n, r, o) {
                    if (r.latestFetchId === n) {
                        for (var i = {}, a = 0, s = t; a < s.length; a++) {
                            qu(s[a], "", i, o)
                        }
                        return i
                    }
                    return e
                }(e, t.rawResources, t.fetchId, n, o);
            case "ADD_RESOURCE":
                return i = e, a = t.resourceHash, r(r({}, i), a);
            case "REMOVE_RESOURCE":
                return function(e, t) {
                    var n = r({}, e);
                    for (var o in delete n[t], n) n[o].parentId === t && (n[o] = r(r({}, n[o]), {
                        parentId: ""
                    }));
                    return n
                }(e, t.resourceId);
            case "SET_RESOURCE_PROP":
                return function(e, t, n, o) {
                    var i, a, s = e[t];
                    if (s) return r(r({}, e), ((i = {})[t] = r(r({}, s), ((a = {})[n] = o, a)), i));
                    return e
                }(e, t.resourceId, t.propName, t.propValue);
            case "SET_RESOURCE_EXTENDED_PROP":
                return function(e, t, n, o) {
                    var i, a, s = e[t];
                    if (s) return r(r({}, e), ((i = {})[t] = r(r({}, s), {
                        extendedProps: r(r({}, s.extendedProps), (a = {}, a[n] = o, a))
                    }), i));
                    return e
                }(e, t.resourceId, t.propName, t.propValue);
            default:
                return e
        }
        var i, a
    }
    var Xu = {
        resourceId: String,
        resourceIds: Ut,
        resourceEditable: Boolean
    };
    var Ku = function() {
        function e(e, t) {
            this._context = e, this._resource = t
        }
        return e.prototype.setProp = function(e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }), this.sync(n)
        }, e.prototype.setExtendedProp = function(e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_EXTENDED_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }), this.sync(n)
        }, e.prototype.sync = function(t) {
            var n = this._context,
                r = t.id;
            this._resource = n.getCurrentData().resourceStore[r], n.emitter.trigger("resourceChange", {
                oldResource: new e(n, t),
                resource: this,
                revert: function() {
                    var e;
                    n.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (e = {}, e[r] = t, e)
                    })
                }
            })
        }, e.prototype.remove = function() {
            var e = this._context,
                t = this._resource,
                n = t.id;
            e.dispatch({
                type: "REMOVE_RESOURCE",
                resourceId: n
            }), e.emitter.trigger("resourceRemove", {
                resource: this,
                revert: function() {
                    var r;
                    e.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (r = {}, r[n] = t, r)
                    })
                }
            })
        }, e.prototype.getParent = function() {
            var t = this._context,
                n = this._resource.parentId;
            return n ? new e(t, t.getCurrentData().resourceSource[n]) : null
        }, e.prototype.getChildren = function() {
            var t = this._resource.id,
                n = this._context,
                r = n.getCurrentData().resourceStore,
                o = [];
            for (var i in r) r[i].parentId === t && o.push(new e(n, r[i]));
            return o
        }, e.prototype.getEvents = function() {
            var e = this._resource.id,
                t = this._context,
                n = t.getCurrentData().eventStore,
                r = n.defs,
                o = n.instances,
                i = [];
            for (var a in o) {
                var s = o[a],
                    l = r[s.defId]; - 1 !== l.resourceIds.indexOf(e) && i.push(new Kn(t, l, s))
            }
            return i
        }, Object.defineProperty(e.prototype, "id", {
            get: function() {
                return Yu(this._resource.id)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function() {
                return this._resource.title
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventConstraint", {
            get: function() {
                return this._resource.ui.constraints[0] || null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventOverlap", {
            get: function() {
                return this._resource.ui.overlap
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventAllow", {
            get: function() {
                return this._resource.ui.allows[0] || null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventBackgroundColor", {
            get: function() {
                return this._resource.ui.backgroundColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventBorderColor", {
            get: function() {
                return this._resource.ui.borderColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventTextColor", {
            get: function() {
                return this._resource.ui.textColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventClassNames", {
            get: function() {
                return this._resource.ui.classNames
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "extendedProps", {
            get: function() {
                return this._resource.extendedProps
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.toPlainObject = function(e) {
            void 0 === e && (e = {});
            var t = this._resource,
                n = t.ui,
                o = this.id,
                i = {};
            return o && (i.id = o), t.title && (i.title = t.title), e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.eventColor = n.backgroundColor : (n.backgroundColor && (i.eventBackgroundColor = n.backgroundColor), n.borderColor && (i.eventBorderColor = n.borderColor)), n.textColor && (i.eventTextColor = n.textColor), n.classNames.length && (i.eventClassNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(i, t.extendedProps) : i.extendedProps = t.extendedProps), i
        }, e.prototype.toJSON = function() {
            return this.toPlainObject()
        }, e
    }();
    Xn.prototype.addResource = function(e, t) {
        var n, r = this;
        void 0 === t && (t = !0);
        var o, i, a = this.getCurrentData();
        e instanceof Ku ? ((n = {})[(i = e._resource).id] = i, o = n) : i = qu(e, "", o = {}, a), this.dispatch({
            type: "ADD_RESOURCE",
            resourceHash: o
        }), t && this.trigger("_scrollRequest", {
            resourceId: i.id
        });
        var s = new Ku(a, i);
        return a.emitter.trigger("resourceAdd", {
            resource: s,
            revert: function() {
                r.dispatch({
                    type: "REMOVE_RESOURCE",
                    resourceId: i.id
                })
            }
        }), s
    }, Xn.prototype.getResourceById = function(e) {
        e = String(e);
        var t = this.getCurrentData();
        if (t.resourceStore) {
            var n = t.resourceStore[e];
            if (n) return new Ku(t, n)
        }
        return null
    }, Xn.prototype.getResources = function() {
        var e = this.getCurrentData(),
            t = e.resourceStore,
            n = [];
        if (t)
            for (var r in t) n.push(new Ku(e, t[r]));
        return n
    }, Xn.prototype.getTopLevelResources = function() {
        var e = this.getCurrentData(),
            t = e.resourceStore,
            n = [];
        if (t)
            for (var r in t) t[r].parentId || n.push(new Ku(e, t[r]));
        return n
    }, Xn.prototype.refetchResources = function() {
        this.dispatch({
            type: "REFETCH_RESOURCES"
        })
    };
    var Ju = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.getKeyInfo = function(e) {
            return r({
                "": {}
            }, e.resourceStore)
        }, t.prototype.getKeysForDateSpan = function(e) {
            return [e.resourceId || ""]
        }, t.prototype.getKeysForEventDef = function(e) {
            var t = e.resourceIds;
            return t.length ? t : [""]
        }, t
    }(br);

    function $u(e, t) {
        return r(r({}, t), {
            constraints: Qu(e, t.constraints)
        })
    }

    function Qu(e, t) {
        return t.map((function(t) {
            var n = t.defs;
            if (n)
                for (var r in n) {
                    var o = n[r].resourceIds;
                    if (o.length && -1 === o.indexOf(e)) return !1
                }
            return t
        }))
    }
    Kn.prototype.getResources = function() {
        var e = this._context.calendarApi;
        return this._def.resourceIds.map((function(t) {
            return e.getResourceById(t)
        }))
    }, Kn.prototype.setResources = function(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n],
                i = null;
            "string" == typeof o ? i = o : "number" == typeof o ? i = String(o) : o instanceof Ku ? i = o.id : console.warn("unknown resource type: " + o), i && t.push(i)
        }
        this.mutate({
            standardProps: {
                resourceIds: t
            }
        })
    };
    var ec = {
        resources: function(e, t) {
            t.getCurrentData().resourceSource._raw !== e && t.dispatch({
                type: "RESET_RESOURCE_SOURCE",
                resourceSourceInput: e
            })
        }
    };
    var tc = le("id,title");
    var nc = {
            initialResources: Ut,
            resources: Ut,
            eventResourceEditable: Boolean,
            refetchResourcesOnNavigate: Boolean,
            resourceOrder: le,
            filterResourcesWithEvents: Boolean,
            resourceGroupField: String,
            resourceAreaWidth: Ut,
            resourceAreaColumns: Ut,
            resourcesInitiallyExpanded: Boolean,
            datesAboveResources: Boolean,
            needsResourceData: Boolean,
            resourceAreaHeaderClassNames: Ut,
            resourceAreaHeaderContent: Ut,
            resourceAreaHeaderDidMount: Ut,
            resourceAreaHeaderWillUnmount: Ut,
            resourceGroupLabelClassNames: Ut,
            resourceGroupLabelContent: Ut,
            resourceGroupLabelDidMount: Ut,
            resourceGroupLabelWillUnmount: Ut,
            resourceLabelClassNames: Ut,
            resourceLabelContent: Ut,
            resourceLabelDidMount: Ut,
            resourceLabelWillUnmount: Ut,
            resourceLaneClassNames: Ut,
            resourceLaneContent: Ut,
            resourceLaneDidMount: Ut,
            resourceLaneWillUnmount: Ut,
            resourceGroupLaneClassNames: Ut,
            resourceGroupLaneContent: Ut,
            resourceGroupLaneDidMount: Ut,
            resourceGroupLaneWillUnmount: Ut
        },
        rc = {
            resourcesSet: Ut,
            resourceAdd: Ut,
            resourceChange: Ut,
            resourceRemove: Ut
        };

    function oc(e) {
        return Gr(Qr.Consumer, null, (function(t) {
            var n = t.options,
                r = {
                    resource: new Ku(t, e.resource),
                    date: e.date ? t.dateEnv.toDate(e.date) : null,
                    view: t.viewApi
                },
                o = {
                    "data-resource-id": e.resource.id,
                    "data-date": e.date ? st(e.date) : void 0
                };
            return Gr(bo, {
                hookProps: r,
                classNames: n.resourceLabelClassNames,
                content: n.resourceLabelContent,
                defaultContent: ic,
                didMount: n.resourceLabelDidMount,
                willUnmount: n.resourceLabelWillUnmount
            }, (function(t, n, r, i) {
                return e.children(t, n, o, r, i)
            }))
        }))
    }

    function ic(e) {
        return e.resource.title || e.resource.id
    }
    Au({
        ignoreRange: !0,
        parseMeta: function(e) {
            return Array.isArray(e.resources) ? e.resources : null
        },
        fetch: function(e, t) {
            t({
                rawResources: e.resourceSource.meta
            })
        }
    }), Au({
        parseMeta: function(e) {
            return "function" == typeof e.resources ? e.resources : null
        },
        fetch: function(e, t, n) {
            var r = e.context.dateEnv,
                o = e.resourceSource.meta,
                i = e.range ? {
                    start: r.toDate(e.range.start),
                    end: r.toDate(e.range.end),
                    startStr: r.formatIso(e.range.start),
                    endStr: r.formatIso(e.range.end),
                    timeZone: r.timeZone
                } : {};
            Ar(o.bind(null, i), (function(e) {
                t({
                    rawResources: e
                })
            }), n)
        }
    }), Au({
        parseMeta: function(e) {
            return e.url ? {
                url: e.url,
                method: (e.method || "GET").toUpperCase(),
                extraParams: e.extraParams
            } : null
        },
        fetch: function(e, t, n) {
            var o = e.resourceSource.meta,
                i = function(e, t, n) {
                    var o, i, a, s, l = n.dateEnv,
                        u = n.options,
                        c = {};
                    t && (null == (o = e.startParam) && (o = u.startParam), null == (i = e.endParam) && (i = u.endParam), null == (a = e.timeZoneParam) && (a = u.timeZoneParam), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone));
                    s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    return r(c, s), c
                }(o, e.range, e.context);
            Jo(o.method, o.url, i, (function(e, n) {
                t({
                    rawResources: e,
                    xhr: n
                })
            }), (function(e, t) {
                n({
                    message: e,
                    xhr: t
                })
            }))
        }
    });
    var ac = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props;
                return Gr(oc, {
                    resource: e.resource,
                    date: e.date
                }, (function(t, n, o, i, a) {
                    return Gr("th", r({
                        ref: t,
                        className: ["fc-col-header-cell", "fc-resource"].concat(n).join(" "),
                        colSpan: e.colSpan
                    }, o), Gr("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, Gr("span", {
                        className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                        ref: i
                    }, a)))
                }))
            }, t
        }(no),
        sc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDateFormat = pt(lc), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = this.buildDateFormat(n.options.dayHeaderFormat, t.datesRepDistinctDays, t.dates.length);
                return Gr(zi, {
                    unit: "day"
                }, (function(o, i) {
                    return 1 === t.dates.length ? e.renderResourceRow(t.resources, t.dates[0]) : n.options.datesAboveResources ? e.renderDayAndResourceRows(t.dates, r, i, t.resources) : e.renderResourceAndDayRows(t.resources, t.dates, r, i)
                }))
            }, t.prototype.renderResourceRow = function(e, t) {
                var n = e.map((function(e) {
                    return Gr(ac, {
                        key: e.id,
                        resource: e,
                        colSpan: 1,
                        date: t
                    })
                }));
                return this.buildTr(n, "resources")
            }, t.prototype.renderDayAndResourceRows = function(e, t, n, r) {
                for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                    var l = s[a];
                    o.push(this.renderDateCell(l, t, n, r.length, null, !0));
                    for (var u = 0, c = r; u < c.length; u++) {
                        var d = c[u];
                        i.push(Gr(ac, {
                            key: d.id + ":" + l.toISOString(),
                            resource: d,
                            colSpan: 1,
                            date: l
                        }))
                    }
                }
                return Gr(Zr, null, this.buildTr(o, "day"), this.buildTr(i, "resources"))
            }, t.prototype.renderResourceAndDayRows = function(e, t, n, r) {
                for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                    var l = s[a];
                    o.push(Gr(ac, {
                        key: l.id,
                        resource: l,
                        colSpan: t.length,
                        isSticky: !0
                    }));
                    for (var u = 0, c = t; u < c.length; u++) {
                        var d = c[u];
                        i.push(this.renderDateCell(d, n, r, 1, l))
                    }
                }
                return Gr(Zr, null, this.buildTr(o, "resources"), this.buildTr(i, "day"))
            }, t.prototype.renderDateCell = function(e, t, n, r, o, i) {
                var a = this.props,
                    s = o ? ":" + o.id : "",
                    l = o ? {
                        resource: new Ku(this.context, o)
                    } : {},
                    u = o ? {
                        "data-resource-id": o.id
                    } : {};
                return a.datesRepDistinctDays ? Gr(Ui, {
                    key: e.toISOString() + s,
                    date: e,
                    dateProfile: a.dateProfile,
                    todayRange: n,
                    colCnt: a.dates.length * a.resources.length,
                    dayHeaderFormat: t,
                    colSpan: r,
                    isSticky: i,
                    extraHookProps: l,
                    extraDataAttrs: u
                }) : Gr(Bi, {
                    key: e.getUTCDay() + s,
                    dow: e.getUTCDay(),
                    dayHeaderFormat: t,
                    colSpan: r,
                    isSticky: i,
                    extraHookProps: l,
                    extraDataAttrs: u
                })
            }, t.prototype.buildTr = function(e, t) {
                var n = this.props.renderIntro;
                return e.length || (e = [Gr("td", {
                    key: 0
                }, " ")]), Gr("tr", {
                    key: t
                }, n && n(t), e)
            }, t
        }(no);

    function lc(e, t, n) {
        return e || Wi(t, n)
    }
    var uc = function(e) {
            for (var t = {}, n = [], r = 0; r < e.length; r += 1) {
                var o = e[r].id;
                n.push(o), t[o] = r
            }
            this.ids = n, this.indicesById = t, this.length = e.length
        },
        cc = function() {
            function e(e, t, n) {
                this.dayTableModel = e, this.resources = t, this.context = n, this.resourceIndex = new uc(t), this.rowCnt = e.rowCnt, this.colCnt = e.colCnt * t.length, this.cells = this.buildCells()
            }
            return e.prototype.buildCells = function() {
                for (var e = this.rowCnt, t = this.dayTableModel, n = this.resources, r = [], o = 0; o < e; o += 1) {
                    for (var i = [], a = 0; a < t.colCnt; a += 1)
                        for (var s = 0; s < n.length; s += 1) {
                            var l = n[s],
                                u = {
                                    resource: new Ku(this.context, l)
                                },
                                c = {
                                    "data-resource-id": l.id
                                },
                                d = t.cells[o][a].date;
                            i[this.computeCol(a, s)] = {
                                key: l.id + ":" + d.toISOString(),
                                date: d,
                                resource: l,
                                extraHookProps: u,
                                extraDataAttrs: c,
                                extraClassNames: ["fc-resource"]
                            }
                        }
                    r.push(i)
                }
                return r
            }, e
        }(),
        dc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.computeCol = function(e, t) {
                return t * this.dayTableModel.colCnt + e
            }, t.prototype.computeColRanges = function(e, t, n) {
                return [{
                    firstCol: this.computeCol(e, n),
                    lastCol: this.computeCol(t, n),
                    isStart: !0,
                    isEnd: !0
                }]
            }, t
        }(cc),
        pc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.computeCol = function(e, t) {
                return e * this.resources.length + t
            }, t.prototype.computeColRanges = function(e, t, n) {
                for (var r = [], o = e; o <= t; o += 1) {
                    var i = this.computeCol(o, n);
                    r.push({
                        firstCol: i,
                        lastCol: i,
                        isStart: o === e,
                        isEnd: o === t
                    })
                }
                return r
            }, t
        }(cc),
        fc = [],
        hc = function() {
            function e() {
                this.joinDateSelection = pt(this.joinSegs), this.joinBusinessHours = pt(this.joinSegs), this.joinFgEvents = pt(this.joinSegs), this.joinBgEvents = pt(this.joinSegs), this.joinEventDrags = pt(this.joinInteractions), this.joinEventResizes = pt(this.joinInteractions)
            }
            return e.prototype.joinProps = function(e, t) {
                for (var n = [], r = [], i = [], a = [], s = [], l = [], u = "", c = 0, d = t.resourceIndex.ids.concat([""]); c < d.length; c++) {
                    var p = d[c],
                        f = e[p];
                    n.push(f.dateSelectionSegs), r.push(p ? f.businessHourSegs : fc), i.push(p ? f.fgEventSegs : fc), a.push(f.bgEventSegs), s.push(f.eventDrag), l.push(f.eventResize), u = u || f.eventSelection
                }
                return {
                    dateSelectionSegs: this.joinDateSelection.apply(this, o([t], n)),
                    businessHourSegs: this.joinBusinessHours.apply(this, o([t], r)),
                    fgEventSegs: this.joinFgEvents.apply(this, o([t], i)),
                    bgEventSegs: this.joinBgEvents.apply(this, o([t], a)),
                    eventDrag: this.joinEventDrags.apply(this, o([t], s)),
                    eventResize: this.joinEventResizes.apply(this, o([t], l)),
                    eventSelection: u
                }
            }, e.prototype.joinSegs = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = e.resources.length, o = [], i = 0; i < r; i += 1) {
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                        var l = s[a];
                        o.push.apply(o, this.transformSeg(l, e, i))
                    }
                    for (var u = 0, c = t[r]; u < c.length; u++) {
                        l = c[u];
                        o.push.apply(o, this.transformSeg(l, e, i))
                    }
                }
                return o
            }, e.prototype.expandSegs = function(e, t) {
                for (var n = e.resources.length, r = [], o = 0; o < n; o += 1)
                    for (var i = 0, a = t; i < a.length; i++) {
                        var s = a[i];
                        r.push.apply(r, this.transformSeg(s, e, o))
                    }
                return r
            }, e.prototype.joinInteractions = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var o = e.resources.length, i = {}, a = [], s = !1, l = !1, u = 0; u < o; u += 1) {
                    var c = t[u];
                    if (c) {
                        s = !0;
                        for (var d = 0, p = c.segs; d < p.length; d++) {
                            var f = p[d];
                            a.push.apply(a, this.transformSeg(f, e, u))
                        }
                        r(i, c.affectedInstances), l = l || c.isEvent
                    }
                    if (t[o])
                        for (var h = 0, g = t[o].segs; h < g.length; h++) {
                            f = g[h];
                            a.push.apply(a, this.transformSeg(f, e, u))
                        }
                }
                return s ? {
                    affectedInstances: i,
                    segs: a,
                    isEvent: l
                } : null
            }, e
        }(),
        gc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getKeyInfo = function(e) {
                var t = e.resourceDayTableModel,
                    n = Le(t.resourceIndex.indicesById, (function(e) {
                        return t.resources[e]
                    }));
                return n[""] = {}, n
            }, t.prototype.getKeysForDateSpan = function(e) {
                return [e.resourceId || ""]
            }, t.prototype.getKeysForEventDef = function(e) {
                var t = e.resourceIds;
                return t.length ? t : [""]
            }, t
        }(br);

    function vc(e, t) {
        return mc(e, [], t, !1, {}, !0).map((function(e) {
            return e.resource
        }))
    }

    function mc(e, t, n, r, o, i) {
        var a = [];
        return function e(t, n, r, o, i, a, s) {
            for (var l = 0; l < t.length; l += 1) {
                var u = t[l],
                    c = u.group;
                if (c)
                    if (r) {
                        var d = n.length,
                            p = o.length;
                        if (e(u.children, n, r, o.concat(0), i, a, s), d < n.length) {
                            var f = n[d];
                            (f.rowSpans = f.rowSpans.slice())[p] = n.length - d
                        }
                    } else {
                        var h = c.spec.field + ":" + c.value,
                            g = null != a[h] ? a[h] : s;
                        n.push({
                            id: h,
                            group: c,
                            isExpanded: g
                        }), g && e(u.children, n, r, o, i + 1, a, s)
                    }
                else if (u.resource) {
                    h = u.resource.id, g = null != a[h] ? a[h] : s;
                    n.push({
                        id: h,
                        rowSpans: o,
                        depth: i,
                        isExpanded: g,
                        hasChildren: Boolean(u.children.length),
                        resource: u.resource,
                        resourceFields: u.resourceFields
                    }), g && e(u.children, n, r, o, i + 1, a, s)
                }
            }
        }(function(e, t, n, r) {
            var o = function(e, t) {
                    var n = {};
                    for (var r in e) {
                        var o = e[r];
                        n[r] = {
                            resource: o,
                            resourceFields: Ec(o),
                            children: []
                        }
                    }
                    for (var r in e) {
                        if ((o = e[r]).parentId) {
                            var i = n[o.parentId];
                            i && Sc(n[r], i.children, t)
                        }
                    }
                    return n
                }(e, r),
                i = [];
            for (var a in o) {
                var s = o[a];
                s.resource.parentId || yc(s, i, n, 0, t, r)
            }
            return i
        }(e, r ? -1 : 1, t, n), a, r, [], 0, o, i), a
    }

    function yc(e, t, n, r, o, i) {
        n.length && (-1 === o || r <= o) ? yc(e, function(e, t, n) {
            var r, o, i = e.resourceFields[n.field];
            if (n.order)
                for (o = 0; o < t.length; o += 1) {
                    if ((s = t[o]).group) {
                        var a = de(i, s.group.value) * n.order;
                        if (0 === a) {
                            r = s;
                            break
                        }
                        if (a < 0) break
                    }
                } else
                    for (o = 0; o < t.length; o += 1) {
                        var s;
                        if ((s = t[o]).group && i === s.group.value) {
                            r = s;
                            break
                        }
                    }
            r || (r = {
                group: {
                    value: i,
                    spec: n
                },
                children: []
            }, t.splice(o, 0, r));
            return r
        }(e, t, n[0]).children, n.slice(1), r + 1, o, i) : Sc(e, t, i)
    }

    function Sc(e, t, n) {
        var r;
        for (r = 0; r < t.length; r += 1) {
            if (ue(t[r].resourceFields, e.resourceFields, n) > 0) break
        }
        t.splice(r, 0, e)
    }

    function Ec(e) {
        var t = r(r(r({}, e.extendedProps), e.ui), e);
        return delete t.ui, delete t.extendedProps, t
    }

    function Cc(e, t) {
        return e.spec === t.spec && e.value === t.value
    }
    var bc = yo({
            deps: [wl],
            reducers: [function(e, t, n) {
                var o = Vu(e && e.resourceSource, t, n);
                return {
                    resourceSource: o,
                    resourceStore: Zu(e && e.resourceStore, t, o, n),
                    resourceEntityExpansions: function(e, t) {
                        var n;
                        if (!e || !t) return {};
                        switch (t.type) {
                            case "SET_RESOURCE_ENTITY_EXPANDED":
                                return r(r({}, e), ((n = {})[t.id] = t.isExpanded, n));
                            default:
                                return e
                        }
                    }(e && e.resourceEntityExpansions, t)
                }
            }],
            isLoadingFuncs: [function(e) {
                return e.resourceSource && e.resourceSource.isFetching
            }],
            eventRefiners: Xu,
            eventDefMemberAdders: [function(e) {
                return {
                    resourceIds: (t = e.resourceIds, (t || []).map((function(e) {
                        return String(e)
                    }))).concat(e.resourceId ? [e.resourceId] : []),
                    resourceEditable: e.resourceEditable
                };
                var t
            }],
            isDraggableTransformers: [function(e, t, n, r) {
                if (!e) {
                    var o = r.getCurrentData();
                    if (o.viewSpecs[o.currentViewType].optionDefaults.needsResourceData && Pu(t, r)) return !0
                }
                return e
            }],
            eventDragMutationMassagers: [function(e, t, n) {
                var r = t.dateSpan.resourceId,
                    o = n.dateSpan.resourceId;
                r && o && r !== o && (e.resourceMutation = {
                    matchResourceId: r,
                    setResourceId: o
                })
            }],
            eventDefMutationAppliers: [function(e, t, n) {
                var r = t.resourceMutation;
                if (r && Pu(e, n)) {
                    var o = e.resourceIds.indexOf(r.matchResourceId);
                    if (-1 !== o) {
                        var i = e.resourceIds.slice();
                        i.splice(o, 1), -1 === i.indexOf(r.setResourceId) && i.push(r.setResourceId), e.resourceIds = i
                    }
                }
            }],
            dateSelectionTransformers: [function(e, t) {
                var n = e.dateSpan.resourceId,
                    r = t.dateSpan.resourceId;
                return n && r ? (!1 !== e.component.allowAcrossResources || n === r) && {
                    resourceId: n
                } : null
            }],
            datePointTransforms: [function(e, t) {
                return e.resourceId ? {
                    resource: t.calendarApi.getResourceById(e.resourceId)
                } : {}
            }],
            dateSpanTransforms: [function(e, t) {
                return e.resourceId ? {
                    resource: t.calendarApi.getResourceById(e.resourceId)
                } : {}
            }],
            viewPropsTransformers: [Iu, Nu],
            isPropsValid: function(e, t) {
                var n = (new Ju).splitProps(r(r({}, e), {
                    resourceStore: t.getCurrentData().resourceStore
                }));
                for (var o in n) {
                    var i = n[o];
                    if (o && n[""] && (i = r(r({}, i), {
                            eventStore: jt(n[""].eventStore, i.eventStore),
                            eventUiBases: r(r({}, n[""].eventUiBases), i.eventUiBases)
                        })), !po(i, t, {
                            resourceId: o
                        }, $u.bind(null, o))) return !1
                }
                return !0
            },
            externalDefTransforms: [function(e) {
                return e.resourceId ? {
                    resourceId: e.resourceId
                } : {}
            }],
            eventResizeJoinTransforms: [function(e, t) {
                return (!1 !== e.component.allowAcrossResources || e.dateSpan.resourceId === t.dateSpan.resourceId) && null
            }],
            eventDropTransformers: [function(e, t) {
                var n = e.resourceMutation;
                if (n) {
                    var r = t.calendarApi;
                    return {
                        oldResource: r.getResourceById(n.matchResourceId),
                        newResource: r.getResourceById(n.setResourceId)
                    }
                }
                return {
                    oldResource: null,
                    newResource: null
                }
            }],
            optionChangeHandlers: ec,
            optionRefiners: nc,
            listenerRefiners: rc,
            propSetHandlers: {
                resourceStore: function(e, t) {
                    var n = t.emitter;
                    n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", function(e, t) {
                        var n = [];
                        for (var r in e) n.push(new Ku(t, e[r]));
                        return n
                    }(e, t))
                }
            }
        }),
        Rc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.transformSeg = function(e, t, n) {
                return t.computeColRanges(e.firstCol, e.lastCol, n).map((function(t) {
                    return r(r(r({}, e), t), {
                        isStart: e.isStart && t.isStart,
                        isEnd: e.isEnd && t.isEnd
                    })
                }))
            }, t
        }(hc),
        Dc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allowAcrossResources = !1, t.splitter = new gc, t.slicers = {}, t.joiner = new Rc, t.tableRef = Yr(), t.handleRootEl = function(e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.resourceDayTableModel,
                    i = t.nextDayThreshold,
                    a = t.dateProfile,
                    s = this.splitter.splitProps(t);
                this.slicers = Le(s, (function(t, n) {
                    return e.slicers[n] || new Rs
                }));
                var l = Le(this.slicers, (function(e, t) {
                    return e.sliceProps(s[t], a, i, n, o.dayTableModel)
                }));
                return this.allowAcrossResources = 1 === o.dayTableModel.colCnt, Gr(Es, r({
                    forPrint: t.forPrint,
                    ref: this.tableRef,
                    elRef: this.handleRootEl
                }, this.joiner.joinProps(l, o), {
                    cells: o.cells,
                    dateProfile: a,
                    colGroupNode: t.colGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    renderRowIntro: t.renderRowIntro,
                    dayMaxEvents: t.dayMaxEvents,
                    dayMaxEventRows: t.dayMaxEventRows,
                    showWeekNumbers: t.showWeekNumbers,
                    expandRows: t.expandRows,
                    headerAlignElRef: t.headerAlignElRef,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight
                }))
            }, t.prototype.prepareHits = function() {
                this.tableRef.current.prepareHits()
            }, t.prototype.queryHit = function(e, t) {
                var n = this.tableRef.current.positionToHit(e, t);
                return n ? {
                    component: this,
                    dateSpan: {
                        range: n.dateSpan.range,
                        allDay: n.dateSpan.allDay,
                        resourceId: this.props.resourceDayTableModel.cells[n.row][n.col].resource.id
                    },
                    dayEl: n.dayEl,
                    rect: {
                        left: n.relativeRect.left,
                        right: n.relativeRect.right,
                        top: n.relativeRect.top,
                        bottom: n.relativeRect.bottom
                    },
                    layer: 0
                } : null
            }, t
        }(mo),
        wc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.flattenResources = pt(vc), t.buildResourceDayTableModel = pt(Tc), t.headerRef = Yr(), t.tableRef = Yr(), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = n.options,
                    o = r.resourceOrder || tc,
                    i = this.flattenResources(t.resourceStore, o),
                    a = this.buildResourceDayTableModel(t.dateProfile, n.dateProfileGenerator, i, r.datesAboveResources, n),
                    s = r.dayHeaders && Gr(sc, {
                        ref: this.headerRef,
                        resources: i,
                        dateProfile: t.dateProfile,
                        dates: a.dayTableModel.headerDates,
                        datesRepDistinctDays: !0
                    }),
                    l = function(n) {
                        return Gr(Dc, {
                            ref: e.tableRef,
                            dateProfile: t.dateProfile,
                            resourceDayTableModel: a,
                            businessHours: t.businessHours,
                            eventStore: t.eventStore,
                            eventUiBases: t.eventUiBases,
                            dateSelection: t.dateSelection,
                            eventSelection: t.eventSelection,
                            eventDrag: t.eventDrag,
                            eventResize: t.eventResize,
                            nextDayThreshold: r.nextDayThreshold,
                            tableMinWidth: n.tableMinWidth,
                            colGroupNode: n.tableColGroupNode,
                            dayMaxEvents: r.dayMaxEvents,
                            dayMaxEventRows: r.dayMaxEventRows,
                            showWeekNumbers: r.weekNumbers,
                            expandRows: !t.isHeightAuto,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            forPrint: t.forPrint
                        })
                    };
                return r.dayMinWidth ? this.renderHScrollLayout(s, l, a.colCnt, r.dayMinWidth) : this.renderSimpleLayout(s, l)
            }, t
        }(es);

    function Tc(e, t, n, r, o) {
        var i = Ts(e, t);
        return r ? new pc(i, n, o) : new dc(i, n, o)
    }
    var xc = yo({
            deps: [wl, bc, xs],
            initialView: "resourceDayGridDay",
            views: {
                resourceDayGrid: {
                    type: "dayGrid",
                    component: wc,
                    needsResourceData: !0
                },
                resourceDayGridDay: {
                    type: "resourceDayGrid",
                    duration: {
                        days: 1
                    }
                },
                resourceDayGridWeek: {
                    type: "resourceDayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                resourceDayGridMonth: {
                    type: "resourceDayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        Mc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.transformSeg = function(e, t, n) {
                return [r(r({}, e), {
                    col: t.computeCol(e.col, n)
                })]
            }, t
        }(hc),
        kc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allowAcrossResources = !1, t.buildDayRanges = pt(nl), t.splitter = new gc, t.slicers = {}, t.joiner = new Mc, t.timeColsRef = Yr(), t.handleRootEl = function(e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.dateEnv,
                    i = n.options,
                    a = t.dateProfile,
                    s = t.resourceDayTableModel,
                    l = this.dayRanges = this.buildDayRanges(s.dayTableModel, a, o),
                    u = this.splitter.splitProps(t);
                this.slicers = Le(u, (function(t, n) {
                    return e.slicers[n] || new el
                }));
                var c = Le(this.slicers, (function(e, t) {
                    return e.sliceProps(u[t], a, null, n, l)
                }));
                return this.allowAcrossResources = 1 === l.length, Gr(zi, {
                    unit: i.nowIndicator ? "minute" : "day"
                }, (function(n, o) {
                    return Gr($s, r({
                        ref: e.timeColsRef,
                        rootElRef: e.handleRootEl
                    }, e.joiner.joinProps(c, s), {
                        dateProfile: a,
                        axis: t.axis,
                        slotDuration: t.slotDuration,
                        slatMetas: t.slatMetas,
                        cells: s.cells[0],
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        expandRows: t.expandRows,
                        nowDate: n,
                        nowIndicatorSegs: i.nowIndicator && e.buildNowIndicatorSegs(n),
                        todayRange: o,
                        onScrollTopRequest: t.onScrollTopRequest,
                        forPrint: t.forPrint,
                        onSlatCoords: t.onSlatCoords
                    }))
                }))
            }, t.prototype.buildNowIndicatorSegs = function(e) {
                var t = this.slicers[""].sliceNowDate(e, this.context, this.dayRanges);
                return this.joiner.expandSegs(this.props.resourceDayTableModel, t)
            }, t.prototype.queryHit = function(e, t) {
                var n = this.timeColsRef.current.positionToHit(e, t);
                return n ? {
                    component: this,
                    dateSpan: {
                        range: n.dateSpan.range,
                        allDay: n.dateSpan.allDay,
                        resourceId: this.props.resourceDayTableModel.cells[0][n.col].resource.id
                    },
                    dayEl: n.dayEl,
                    rect: {
                        left: n.relativeRect.left,
                        right: n.relativeRect.right,
                        top: n.relativeRect.top,
                        bottom: n.relativeRect.bottom
                    },
                    layer: 0
                } : null
            }, t
        }(mo),
        Pc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.flattenResources = pt(vc), t.buildResourceTimeColsModel = pt(Ic), t.buildSlatMetas = pt(ol), t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.options,
                    i = n.dateEnv,
                    a = t.dateProfile,
                    s = this.allDaySplitter.splitProps(t),
                    l = o.resourceOrder || tc,
                    u = this.flattenResources(t.resourceStore, l),
                    c = this.buildResourceTimeColsModel(a, n.dateProfileGenerator, u, o.datesAboveResources, n),
                    d = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, o.slotLabelInterval, o.slotDuration, i),
                    p = o.dayMinWidth,
                    f = !p,
                    h = p,
                    g = o.dayHeaders && Gr(sc, {
                        resources: u,
                        dates: c.dayTableModel.headerDates,
                        dateProfile: a,
                        datesRepDistinctDays: !0,
                        renderIntro: f ? this.renderHeadAxis : null
                    }),
                    v = !1 !== o.allDaySlot && function(n) {
                        return Gr(Dc, r({}, s.allDay, {
                            dateProfile: a,
                            resourceDayTableModel: c,
                            nextDayThreshold: o.nextDayThreshold,
                            tableMinWidth: n.tableMinWidth,
                            colGroupNode: n.tableColGroupNode,
                            renderRowIntro: f ? e.renderTableRowAxis : null,
                            showWeekNumbers: !1,
                            expandRows: !1,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            forPrint: t.forPrint
                        }, e.getAllDayMaxEventProps()))
                    },
                    m = function(n) {
                        return Gr(kc, r({}, s.timed, {
                            dateProfile: a,
                            axis: f,
                            slotDuration: o.slotDuration,
                            slatMetas: d,
                            resourceDayTableModel: c,
                            tableColGroupNode: n.tableColGroupNode,
                            tableMinWidth: n.tableMinWidth,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            onSlatCoords: e.handleSlatCoords,
                            expandRows: n.expandRows,
                            forPrint: t.forPrint,
                            onScrollTopRequest: e.handleScrollTopRequest
                        }))
                    };
                return h ? this.renderHScrollLayout(g, v, m, c.colCnt, p, d, this.state.slatCoords) : this.renderSimpleLayout(g, v, m)
            }, t
        }(Hs);

    function Ic(e, t, n, r, o) {
        var i = al(e, t);
        return r ? new pc(i, n, o) : new dc(i, n, o)
    }
    var _c = yo({
        deps: [wl, bc, sl],
        initialView: "resourceTimeGridDay",
        views: {
            resourceTimeGrid: {
                type: "timeGrid",
                component: Pc,
                needsResourceData: !0
            },
            resourceTimeGridDay: {
                type: "resourceTimeGrid",
                duration: {
                    days: 1
                }
            },
            resourceTimeGridWeek: {
                type: "resourceTimeGrid",
                duration: {
                    weeks: 1
                }
            }
        }
    });

    function Nc(e) {
        for (var t = e.depth, n = e.hasChildren, r = e.isExpanded, i = e.onExpanderClick, a = [], s = 0; s < t; s += 1) a.push(Gr("span", {
            className: "fc-icon"
        }));
        var l = ["fc-icon"];
        return n && (r ? l.push("fc-icon-minus-square") : l.push("fc-icon-plus-square")), a.push(Gr("span", {
            className: "fc-datagrid-expander" + (n ? "" : " fc-datagrid-expander-placeholder"),
            onClick: i
        }, Gr("span", {
            className: l.join(" ")
        }))), Gr.apply(void 0, o([Zr, {}], a))
    }

    function Hc(e) {
        return {
            resource: new Ku(e.context, e.resource),
            fieldValue: e.fieldValue,
            view: e.context.viewApi
        }
    }
    var Oc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props;
            return Gr(Do, {
                hookProps: e.hookProps,
                content: e.colSpec.cellContent,
                defaultContent: Wc
            }, (function(e, t) {
                return Gr("span", {
                    className: "fc-datagrid-cell-main",
                    ref: e
                }, t)
            }))
        }, t
    }(no);

    function Wc(e) {
        return e.fieldValue || Gr(Zr, null, " ")
    }
    var Ac = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = ft(Hc), t.normalizeClassNames = xo(), t.onExpanderClick = function(e) {
                    var n = t.props;
                    n.hasChildren && t.context.dispatch({
                        type: "SET_RESOURCE_ENTITY_EXPANDED",
                        id: n.resource.id,
                        isExpanded: !n.isExpanded
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = t.colSpec,
                    o = this.refineHookProps({
                        resource: t.resource,
                        fieldValue: t.fieldValue,
                        context: n
                    }),
                    i = this.normalizeClassNames(r.cellClassNames, o);
                return Gr(To, {
                    hookProps: o,
                    didMount: r.cellDidMount,
                    willUnmount: r.cellWillUnmount
                }, (function(n) {
                    return Gr("td", {
                        ref: n,
                        "data-resource-id": t.resource.id,
                        className: ["fc-datagrid-cell", "fc-resource"].concat(i).join(" ")
                    }, Gr("div", {
                        className: "fc-datagrid-cell-frame",
                        style: {
                            height: t.innerHeight
                        }
                    }, Gr("div", {
                        className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                    }, r.isMain && Gr(Nc, {
                        depth: t.depth,
                        hasChildren: t.hasChildren,
                        isExpanded: t.isExpanded,
                        onExpanderClick: e.onExpanderClick
                    }), Gr(Oc, {
                        hookProps: o,
                        colSpec: r
                    }))))
                }))
            }, t
        }(no),
        Lc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = e.colSpec,
                    r = {
                        groupValue: e.fieldValue,
                        view: t.viewApi
                    };
                return Gr(bo, {
                    hookProps: r,
                    classNames: n.cellClassNames,
                    content: n.cellContent,
                    defaultContent: Uc,
                    didMount: n.cellDidMount,
                    willUnmount: n.cellWillUnmount
                }, (function(t, n, r, o) {
                    return Gr("td", {
                        className: ["fc-datagrid-cell", "fc-resource-group"].concat(n).join(" "),
                        rowSpan: e.rowSpan,
                        ref: t
                    }, Gr("div", {
                        className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid"
                    }, Gr("div", {
                        className: "fc-datagrid-cell-cushion fc-sticky",
                        ref: r
                    }, o)))
                }))
            }, t
        }(no);

    function Uc(e) {
        return e.groupValue || Gr(Zr, null, " ")
    }
    var Bc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.resource,
                n = e.rowSpans,
                r = e.depth,
                o = Ec(t);
            return Gr("tr", null, e.colSpecs.map((function(i, a) {
                var s = n[a];
                if (0 === s) return null;
                null == s && (s = 1);
                var l = i.field ? o[i.field] : t.title || Yu(t.id);
                return s > 1 ? Gr(Lc, {
                    key: a,
                    colSpec: i,
                    fieldValue: l,
                    rowSpan: s
                }) : Gr(Ac, {
                    key: a,
                    colSpec: i,
                    resource: t,
                    fieldValue: l,
                    depth: r,
                    hasChildren: e.hasChildren,
                    isExpanded: e.isExpanded,
                    innerHeight: e.innerHeight
                })
            })))
        }, t
    }(no);
    Bc.addPropsEquality({
        rowSpans: dt
    });
    var zc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerInnerRef = Yr(), t.onExpanderClick = function() {
                var e = t.props;
                t.context.dispatch({
                    type: "SET_RESOURCE_ENTITY_EXPANDED",
                    id: e.id,
                    isExpanded: !e.isExpanded
                })
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = this.context,
                r = {
                    groupValue: t.group.value,
                    view: n.viewApi
                },
                o = t.group.spec;
            return Gr("tr", null, Gr(bo, {
                hookProps: r,
                classNames: o.labelClassNames,
                content: o.labelContent,
                defaultContent: Vc,
                didMount: o.labelDidMount,
                willUnmount: o.labelWillUnmount
            }, (function(r, o, i, a) {
                return Gr("td", {
                    ref: r,
                    colSpan: t.spreadsheetColCnt,
                    className: ["fc-datagrid-cell", "fc-resource-group", n.theme.getClass("tableCellShaded")].concat(o).join(" ")
                }, Gr("div", {
                    className: "fc-datagrid-cell-frame",
                    style: {
                        height: t.innerHeight
                    }
                }, Gr("div", {
                    className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                    ref: e.innerInnerRef
                }, Gr(Nc, {
                    depth: 0,
                    hasChildren: !0,
                    isExpanded: t.isExpanded,
                    onExpanderClick: e.onExpanderClick
                }), Gr("span", {
                    className: "fc-datagrid-cell-main",
                    ref: i
                }, a))))
            })))
        }, t
    }(no);

    function Vc(e) {
        return e.groupValue || Gr(Zr, null, " ")
    }
    zc.addPropsEquality({
        group: Cc
    });
    var Fc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.resizerElRefs = new Ji(t._handleColResizerEl.bind(t)), t.colDraggings = {}, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.colSpecs,
                    r = t.superHeaderRendering,
                    o = t.rowInnerHeights,
                    i = {
                        view: this.context.viewApi
                    },
                    a = [];
                if (o = o.slice(), r) {
                    var s = o.shift();
                    a.push(Gr("tr", {
                        key: "row-super"
                    }, Gr(bo, {
                        hookProps: i,
                        classNames: r.headerClassNames,
                        content: r.headerContent,
                        didMount: r.headerDidMount,
                        willUnmount: r.headerWillUnmount
                    }, (function(e, t, r, o) {
                        return Gr("th", {
                            colSpan: n.length,
                            ref: e,
                            className: ["fc-datagrid-cell", "fc-datagrid-cell-super"].concat(t).join(" ")
                        }, Gr("div", {
                            className: "fc-datagrid-cell-frame",
                            style: {
                                height: s
                            }
                        }, Gr("div", {
                            className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                            ref: r
                        }, o)))
                    }))))
                }
                var l = o.shift();
                return a.push(Gr("tr", {
                    key: "row"
                }, n.map((function(t, r) {
                    var o = r === n.length - 1;
                    return Gr(bo, {
                        key: r,
                        hookProps: i,
                        classNames: t.headerClassNames,
                        content: t.headerContent,
                        didMount: t.headerDidMount,
                        willUnmount: t.headerWillUnmount
                    }, (function(n, i, a, s) {
                        return Gr("th", {
                            ref: n,
                            className: ["fc-datagrid-cell"].concat(i).join(" ")
                        }, Gr("div", {
                            className: "fc-datagrid-cell-frame",
                            style: {
                                height: l
                            }
                        }, Gr("div", {
                            className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                        }, t.isMain && Gr("span", {
                            className: "fc-datagrid-expander fc-datagrid-expander-placeholder"
                        }, Gr("span", {
                            className: "fc-icon"
                        })), Gr("span", {
                            className: "fc-datagrid-cell-main",
                            ref: a
                        }, s)), !o && Gr("div", {
                            className: "fc-datagrid-cell-resizer",
                            ref: e.resizerElRefs.createRef(r)
                        })))
                    }))
                })))), Gr(Zr, null, a)
            }, t.prototype._handleColResizerEl = function(e, t) {
                var n, r = this.colDraggings;
                e ? (n = this.initColResizing(e, parseInt(t, 10))) && (r[t] = n) : (n = r[t]) && (n.destroy(), delete r[t])
            }, t.prototype.initColResizing = function(e, t) {
                var n = this.context,
                    r = n.pluginHooks,
                    o = n.isRtl,
                    i = this.props.onColWidthChange,
                    a = r.elementDraggingImpl;
                if (a) {
                    var s, l, u = new a(e);
                    return u.emitter.on("dragstart", (function() {
                        var n = j(V(e, "tr"), "th");
                        l = n.map((function(e) {
                            return e.getBoundingClientRect().width
                        })), s = l[t]
                    })), u.emitter.on("dragmove", (function(e) {
                        l[t] = Math.max(s + e.deltaX * (o ? -1 : 1), 20), i && i(l.slice())
                    })), u.setAutoScrollEnabled(!1), u
                }
                return null
            }, t
        }(no),
        jc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = {
                        resource: new Ku(t, e.resource)
                    };
                return Gr(Do, {
                    hookProps: n,
                    content: t.options.resourceLaneContent
                }, (function(e, t) {
                    return t && Gr("div", {
                        className: "fc-timeline-lane-misc",
                        ref: e
                    }, t)
                }))
            }, t
        }(no),
        Gc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = ft(qc), t.normalizeClassNames = xo(), t.handleHeightChange = function(e, n) {
                    t.props.onHeightChange && t.props.onHeightChange(V(e, "tr"), n)
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = n.options,
                    o = this.refineHookProps({
                        resource: t.resource,
                        context: n
                    }),
                    i = this.normalizeClassNames(r.resourceLaneClassNames, o);
                return Gr("tr", {
                    ref: t.elRef
                }, Gr(To, {
                    hookProps: o,
                    didMount: r.resourceLaneDidMount,
                    willUnmount: r.resourceLaneWillUnmount
                }, (function(n) {
                    return Gr("td", {
                        ref: n,
                        className: ["fc-timeline-lane", "fc-resource"].concat(i).join(" "),
                        "data-resource-id": t.resource.id
                    }, Gr("div", {
                        className: "fc-timeline-lane-frame",
                        style: {
                            height: t.innerHeight
                        }
                    }, Gr(jc, {
                        resource: t.resource
                    }), Gr(wu, {
                        dateProfile: t.dateProfile,
                        tDateProfile: t.tDateProfile,
                        nowDate: t.nowDate,
                        todayRange: t.todayRange,
                        nextDayThreshold: t.nextDayThreshold,
                        businessHours: t.businessHours,
                        eventStore: t.eventStore,
                        eventUiBases: t.eventUiBases,
                        dateSelection: t.dateSelection,
                        eventSelection: t.eventSelection,
                        eventDrag: t.eventDrag,
                        eventResize: t.eventResize,
                        timelineCoords: t.timelineCoords,
                        onHeightChange: e.handleHeightChange
                    })))
                })))
            }, t
        }(no);

    function qc(e) {
        return {
            resource: new Ku(e.context, e.resource)
        }
    }
    var Yc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.props.renderingHooks,
                    r = {
                        groupValue: t.groupValue,
                        view: this.context.viewApi
                    };
                return Gr("tr", {
                    ref: t.elRef
                }, Gr(bo, {
                    hookProps: r,
                    classNames: n.laneClassNames,
                    content: n.laneContent,
                    didMount: n.laneDidMount,
                    willUnmount: n.laneWillUnmount
                }, (function(n, r, o, i) {
                    return Gr("td", {
                        ref: n,
                        className: ["fc-timeline-lane", "fc-resource-group", e.context.theme.getClass("tableCellShaded")].concat(r).join(" ")
                    }, Gr("div", {
                        style: {
                            height: t.innerHeight
                        },
                        ref: o
                    }, i))
                })))
            }, t
        }(no),
        Zc = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context,
                    n = e.rowElRefs,
                    o = e.innerHeights;
                return Gr("tbody", null, e.rowNodes.map((function(i, a) {
                    if (i.group) return Gr(Yc, {
                        key: i.id,
                        elRef: n.createRef(i.id),
                        groupValue: i.group.value,
                        renderingHooks: i.group.spec,
                        innerHeight: o[a] || ""
                    });
                    if (i.resource) {
                        var s = i.resource;
                        return Gr(Gc, r({
                            key: i.id,
                            elRef: n.createRef(i.id)
                        }, e.splitProps[s.id], {
                            resource: s,
                            dateProfile: e.dateProfile,
                            tDateProfile: e.tDateProfile,
                            nowDate: e.nowDate,
                            todayRange: e.todayRange,
                            nextDayThreshold: t.options.nextDayThreshold,
                            businessHours: s.businessHours || e.fallbackBusinessHours,
                            innerHeight: o[a] || "",
                            timelineCoords: e.slatCoords,
                            onHeightChange: e.onRowHeightChange
                        }))
                    }
                    return null
                })))
            }, t
        }(no),
        Xc = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Yr(), t.rowElRefs = new Ji, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.context;
                return Gr("table", {
                    ref: this.rootElRef,
                    className: "fc-scrollgrid-sync-table " + t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, Gr(Zc, {
                    rowElRefs: this.rowElRefs,
                    rowNodes: e.rowNodes,
                    dateProfile: e.dateProfile,
                    tDateProfile: e.tDateProfile,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange,
                    splitProps: e.splitProps,
                    fallbackBusinessHours: e.fallbackBusinessHours,
                    slatCoords: e.slatCoords,
                    innerHeights: e.innerHeights,
                    onRowHeightChange: e.onRowHeightChange
                }))
            }, t.prototype.componentDidMount = function() {
                this.updateCoords()
            }, t.prototype.componentDidUpdate = function() {
                this.updateCoords()
            }, t.prototype.componentWillUnmount = function() {
                this.props.onRowCoords && this.props.onRowCoords(null)
            }, t.prototype.updateCoords = function() {
                var e, t = this.props;
                t.onRowCoords && null !== t.clientWidth && this.props.onRowCoords(new Ur(this.rootElRef.current, (e = this.rowElRefs.currentMap, t.rowNodes.map((function(t) {
                    return e[t.id]
                }))), !1, !0))
            }, t
        }(no);
    var Kc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeHasResourceBusinessHours = pt(Jc), t.resourceSplitter = new Ju, t.bgSlicer = new Eu, t.slatsRef = Yr(), t.state = {
                slatCoords: null
            }, t.handleEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }, t.handleSlatCoords = function(e) {
                t.setState({
                    slatCoords: e
                }), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t.handleRowCoords = function(e) {
                t.rowCoords = e, t.props.onRowCoords && t.props.onRowCoords(e)
            }, t
        }
        return n(t, e), t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = this.state,
                r = this.context,
                o = t.dateProfile,
                i = t.tDateProfile,
                a = at(i.slotDuration).unit,
                s = this.computeHasResourceBusinessHours(t.rowNodes),
                l = this.resourceSplitter.splitProps(t),
                u = l[""],
                c = this.bgSlicer.sliceProps(u, o, i.isTimeScale ? null : t.nextDayThreshold, r, o, r.dateProfileGenerator, i, r.dateEnv),
                d = n.slatCoords && n.slatCoords.dateProfile === t.dateProfile ? n.slatCoords : null;
            return Gr("div", {
                ref: this.handleEl,
                className: "fc-timeline-body",
                style: {
                    minWidth: t.tableMinWidth
                }
            }, Gr(zi, {
                unit: a
            }, (function(n, a) {
                return Gr(Zr, null, Gr(yu, {
                    ref: e.slatsRef,
                    dateProfile: o,
                    tDateProfile: i,
                    nowDate: n,
                    todayRange: a,
                    clientWidth: t.clientWidth,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    onCoords: e.handleSlatCoords,
                    onScrollLeftRequest: t.onScrollLeftRequest
                }), Gr(Su, {
                    businessHourSegs: s ? null : c.businessHourSegs,
                    bgEventSegs: c.bgEventSegs,
                    timelineCoords: d,
                    eventResizeSegs: c.eventResize ? c.eventResize.segs : [],
                    dateSelectionSegs: c.dateSelectionSegs,
                    nowDate: n,
                    todayRange: a
                }), Gr(Xc, {
                    rowNodes: t.rowNodes,
                    dateProfile: o,
                    tDateProfile: t.tDateProfile,
                    nowDate: n,
                    todayRange: a,
                    splitProps: l,
                    fallbackBusinessHours: s ? t.businessHours : null,
                    clientWidth: t.clientWidth,
                    minHeight: t.expandRows ? t.clientHeight : "",
                    tableMinWidth: t.tableMinWidth,
                    innerHeights: t.rowInnerHeights,
                    slatCoords: d,
                    onRowCoords: e.handleRowCoords,
                    onRowHeightChange: t.onRowHeightChange
                }), r.options.nowIndicator && d && d.isDateInRange(n) && Gr("div", {
                    className: "fc-timeline-now-indicator-container"
                }, Gr(ga, {
                    isAxis: !1,
                    date: n
                }, (function(e, t, r, o) {
                    return Gr("div", {
                        ref: e,
                        className: ["fc-timeline-now-indicator-line"].concat(t).join(" "),
                        style: {
                            left: d.dateToCoord(n)
                        }
                    }, o)
                }))))
            })))
        }, t.prototype.queryHit = function(e, t) {
            var n = this.rowCoords,
                r = n.topToIndex(t);
            if (null != r) {
                var o = this.props.rowNodes[r].resource;
                if (o) {
                    var i = this.slatsRef.current.positionToHit(e);
                    if (i) return {
                        component: this,
                        dateSpan: {
                            range: i.dateSpan.range,
                            allDay: i.dateSpan.allDay,
                            resourceId: o.id
                        },
                        rect: {
                            left: i.left,
                            right: i.right,
                            top: n.tops[r],
                            bottom: n.bottoms[r]
                        },
                        dayEl: i.dayEl,
                        layer: 0
                    }
                }
            }
            return null
        }, t
    }(mo);

    function Jc(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t].resource;
            if (r && r.businessHours) return !0
        }
        return !1
    }
    var $c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollGridRef = Yr(), t.timeBodyScrollerElRef = Yr(), t.spreadsheetHeaderChunkElRef = Yr(), t.rootElRef = Yr(), t.state = {
                    resourceAreaWidthOverride: null
                }, t
            }
            return n(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.state,
                    n = this.context,
                    r = n.options,
                    o = !e.forPrint && ua(r),
                    i = !e.forPrint && ca(r),
                    a = [{
                        type: "header",
                        key: "header",
                        syncRowHeights: !0,
                        isSticky: o,
                        chunks: [{
                            key: "datagrid",
                            elRef: this.spreadsheetHeaderChunkElRef,
                            tableClassName: "fc-datagrid-header",
                            rowContent: e.spreadsheetHeaderRows
                        }, {
                            key: "divider",
                            outerContent: Gr("td", {
                                className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                            })
                        }, {
                            key: "timeline",
                            content: e.timeHeaderContent
                        }]
                    }, {
                        type: "body",
                        key: "body",
                        syncRowHeights: !0,
                        liquid: !0,
                        expandRows: Boolean(r.expandRows),
                        chunks: [{
                            key: "datagrid",
                            tableClassName: "fc-datagrid-body",
                            rowContent: e.spreadsheetBodyRows
                        }, {
                            key: "divider",
                            outerContent: Gr("td", {
                                className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                            })
                        }, {
                            key: "timeline",
                            scrollerElRef: this.timeBodyScrollerElRef,
                            content: e.timeBodyContent
                        }]
                    }];
                i && a.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "datagrid",
                        content: la
                    }, {
                        key: "divider",
                        outerContent: Gr("td", {
                            className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                        })
                    }, {
                        key: "timeline",
                        content: la
                    }]
                });
                var s = null != t.resourceAreaWidthOverride ? t.resourceAreaWidthOverride : r.resourceAreaWidth;
                return Gr(Ol, {
                    ref: this.scrollGridRef,
                    elRef: this.rootElRef,
                    liquid: !e.isHeightAuto && !e.forPrint,
                    colGroups: [{
                        cols: e.spreadsheetCols,
                        width: s
                    }, {
                        cols: []
                    }, {
                        cols: e.timeCols
                    }],
                    sections: a
                })
            }, t.prototype.forceTimeScroll = function(e) {
                this.scrollGridRef.current.forceScrollLeft(2, e)
            }, t.prototype.forceResourceScroll = function(e) {
                this.scrollGridRef.current.forceScrollTop(1, e)
            }, t.prototype.getResourceScroll = function() {
                return this.timeBodyScrollerElRef.current.scrollTop
            }, t.prototype.componentDidMount = function() {
                this.initSpreadsheetResizing()
            }, t.prototype.componentWillUnmount = function() {
                this.destroySpreadsheetResizing()
            }, t.prototype.initSpreadsheetResizing = function() {
                var e = this,
                    t = this.context,
                    n = t.isRtl,
                    r = t.pluginHooks.elementDraggingImpl,
                    o = this.spreadsheetHeaderChunkElRef.current;
                if (r) {
                    var i, a, s = this.rootElRef.current,
                        l = this.spreadsheetResizerDragging = new r(s, ".fc-resource-timeline-divider");
                    l.emitter.on("dragstart", (function() {
                        i = o.getBoundingClientRect().width, a = s.getBoundingClientRect().width
                    })), l.emitter.on("dragmove", (function(t) {
                        var r = i + t.deltaX * (n ? -1 : 1);
                        r = Math.max(r, 30), r = Math.min(r, a - 30), e.setState({
                            resourceAreaWidthOverride: r
                        })
                    })), l.setAutoScrollEnabled(!1)
                }
            }, t.prototype.destroySpreadsheetResizing = function() {
                this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy()
            }, t
        }(no),
        Qc = function(e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.processColOptions = pt(rd), r.buildTimelineDateProfile = pt(nu), r.hasNesting = pt(nd), r.buildRowNodes = pt(mc), r.layoutRef = Yr(), r.rowNodes = [], r.renderedRowNodes = [], r.buildRowIndex = pt(ed), r.handleSlatCoords = function(e) {
                    r.setState({
                        slatCoords: e
                    })
                }, r.handleRowCoords = function(e) {
                    r.rowCoords = e, r.scrollResponder.update(!1)
                }, r.handleMaxCushionWidth = function(e) {
                    r.setState({
                        slotCushionMaxWidth: Math.ceil(e)
                    })
                }, r.handleScrollLeftRequest = function(e) {
                    r.layoutRef.current.forceTimeScroll(e)
                }, r.handleScrollRequest = function(e) {
                    var t = r.rowCoords,
                        n = r.layoutRef.current,
                        o = e.rowId || e.resourceId;
                    if (t) {
                        if (o) {
                            var i = r.buildRowIndex(r.renderedRowNodes)[o];
                            if (null != i) {
                                var a = null != e.fromBottom ? t.bottoms[i] - e.fromBottom : t.tops[i];
                                n.forceResourceScroll(a)
                            }
                        }
                        return !0
                    }
                    return null
                }, r.handleColWidthChange = function(e) {
                    r.setState({
                        spreadsheetColWidths: e
                    })
                }, r.state = {
                    resourceAreaWidth: n.options.resourceAreaWidth,
                    spreadsheetColWidths: []
                }, r
            }
            return n(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = this.state,
                    r = this.context,
                    o = r.options,
                    i = r.viewSpec,
                    a = this.processColOptions(r.options),
                    s = a.superHeaderRendering,
                    l = a.groupSpecs,
                    u = a.orderSpecs,
                    c = a.isVGrouping,
                    d = a.colSpecs,
                    p = this.buildTimelineDateProfile(t.dateProfile, r.dateEnv, o, r.dateProfileGenerator),
                    f = this.rowNodes = this.buildRowNodes(t.resourceStore, l, u, c, t.resourceEntityExpansions, o.resourcesInitiallyExpanded),
                    h = ["fc-resource-timeline", this.hasNesting(f) ? "" : "fc-resource-timeline-flat", "fc-timeline", !1 === o.eventOverlap ? "fc-timeline-overlap-disabled" : "fc-timeline-overlap-enabled"],
                    g = o.slotMinWidth,
                    v = Mu(p, g || this.computeFallbackSlotMinWidth(p));
                return Gr(Po, {
                    viewSpec: i
                }, (function(o, i) {
                    return Gr("div", {
                        ref: o,
                        className: h.concat(i).join(" ")
                    }, Gr($c, {
                        ref: e.layoutRef,
                        forPrint: t.forPrint,
                        isHeightAuto: t.isHeightAuto,
                        spreadsheetCols: td(d, n.spreadsheetColWidths, ""),
                        spreadsheetHeaderRows: function(t) {
                            return Gr(Fc, {
                                superHeaderRendering: s,
                                colSpecs: d,
                                onColWidthChange: e.handleColWidthChange,
                                rowInnerHeights: t.rowSyncHeights
                            })
                        },
                        spreadsheetBodyRows: function(t) {
                            return Gr(Zr, null, e.renderSpreadsheetRows(f, d, t.rowSyncHeights))
                        },
                        timeCols: v,
                        timeHeaderContent: function(r) {
                            return Gr(fu, {
                                clientWidth: r.clientWidth,
                                clientHeight: r.clientHeight,
                                tableMinWidth: r.tableMinWidth,
                                tableColGroupNode: r.tableColGroupNode,
                                dateProfile: t.dateProfile,
                                tDateProfile: p,
                                slatCoords: n.slatCoords,
                                rowInnerHeights: r.rowSyncHeights,
                                onMaxCushionWidth: g ? null : e.handleMaxCushionWidth
                            })
                        },
                        timeBodyContent: function(n) {
                            return Gr(Kc, {
                                dateProfile: t.dateProfile,
                                clientWidth: n.clientWidth,
                                clientHeight: n.clientHeight,
                                tableMinWidth: n.tableMinWidth,
                                tableColGroupNode: n.tableColGroupNode,
                                expandRows: n.expandRows,
                                tDateProfile: p,
                                rowNodes: f,
                                businessHours: t.businessHours,
                                dateSelection: t.dateSelection,
                                eventStore: t.eventStore,
                                eventUiBases: t.eventUiBases,
                                eventSelection: t.eventSelection,
                                eventDrag: t.eventDrag,
                                eventResize: t.eventResize,
                                resourceStore: t.resourceStore,
                                nextDayThreshold: r.options.nextDayThreshold,
                                rowInnerHeights: n.rowSyncHeights,
                                onSlatCoords: e.handleSlatCoords,
                                onRowCoords: e.handleRowCoords,
                                onScrollLeftRequest: e.handleScrollLeftRequest,
                                onRowHeightChange: n.reportRowHeightChange
                            })
                        }
                    }))
                }))
            }, t.prototype.renderSpreadsheetRows = function(e, t, n) {
                return e.map((function(e, r) {
                    return e.group ? Gr(zc, {
                        key: e.id,
                        id: e.id,
                        spreadsheetColCnt: t.length,
                        isExpanded: e.isExpanded,
                        group: e.group,
                        innerHeight: n[r] || ""
                    }) : e.resource ? Gr(Bc, {
                        key: e.id,
                        colSpecs: t,
                        rowSpans: e.rowSpans,
                        depth: e.depth,
                        isExpanded: e.isExpanded,
                        hasChildren: e.hasChildren,
                        resource: e.resource,
                        innerHeight: n[r] || ""
                    }) : null
                }))
            }, t.prototype.componentDidMount = function() {
                this.renderedRowNodes = this.rowNodes, this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
            }, t.prototype.getSnapshotBeforeUpdate = function() {
                return this.props.forPrint ? {} : {
                    resourceScroll: this.queryResourceScroll()
                }
            }, t.prototype.componentDidUpdate = function(e, t, n) {
                this.renderedRowNodes = this.rowNodes, this.scrollResponder.update(e.dateProfile !== this.props.dateProfile), n.resourceScroll && this.handleScrollRequest(n.resourceScroll)
            }, t.prototype.componentWillUnmount = function() {
                this.scrollResponder.detach()
            }, t.prototype.computeFallbackSlotMinWidth = function(e) {
                return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
            }, t.prototype.queryResourceScroll = function() {
                var e = this.rowCoords,
                    t = this.renderedRowNodes;
                if (e) {
                    for (var n = this.layoutRef.current, r = e.bottoms, o = n.getResourceScroll(), i = {}, a = 0; a < r.length; a += 1) {
                        var s = t[a],
                            l = r[a] - o;
                        if (l > 0) {
                            i.rowId = s.id, i.fromBottom = l;
                            break
                        }
                    }
                    return i
                }
                return null
            }, t
        }(no);

    function ed(e) {
        for (var t = {}, n = 0; n < e.length; n += 1) t[e[n].id] = n;
        return t
    }

    function td(e, t, n) {
        return void 0 === n && (n = ""), e.map((function(e, r) {
            return {
                className: e.isMain ? "fc-main-col" : "",
                width: t[r] || e.width || n
            }
        }))
    }

    function nd(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            if (r.group) return !0;
            if (r.resource && r.hasChildren) return !0
        }
        return !1
    }

    function rd(e) {
        var t = e.resourceAreaColumns || [],
            n = null;
        t.length ? e.resourceAreaHeaderContent && (n = {
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent,
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        }) : t.push({
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent || "Resources",
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        });
        for (var o = [], i = [], a = [], s = !1, l = 0, u = t; l < u.length; l++) {
            var c = u[l];
            c.group ? i.push(r(r({}, c), {
                cellClassNames: c.cellClassNames || e.resourceGroupLabelClassNames,
                cellContent: c.cellContent || e.resourceGroupLabelContent,
                cellDidMount: c.cellDidMount || e.resourceGroupLabelDidMount,
                cellWillUnmount: c.cellWillUnmount || e.resourceGroupLaneWillUnmount
            })) : o.push(c)
        }
        var d = o[0];
        if (d.isMain = !0, d.cellClassNames = d.cellClassNames || e.resourceLabelClassNames, d.cellContent = d.cellContent || e.resourceLabelContent, d.cellDidMount = d.cellDidMount || e.resourceLabelDidMount, d.cellWillUnmount = d.cellWillUnmount || e.resourceLabelWillUnmount, i.length) a = i, s = !0;
        else {
            var p = e.resourceGroupField;
            p && a.push({
                field: p,
                labelClassNames: e.resourceGroupLabelClassNames,
                labelContent: e.resourceGroupLabelContent,
                labelDidMount: e.resourceGroupLabelDidMount,
                labelWillUnmount: e.resourceGroupLabelWillUnmount,
                laneClassNames: e.resourceGroupLaneClassNames,
                laneContent: e.resourceGroupLaneContent,
                laneDidMount: e.resourceGroupLaneDidMount,
                laneWillUnmount: e.resourceGroupLaneWillUnmount
            })
        }
        for (var f = [], h = 0, g = e.resourceOrder || tc; h < g.length; h++) {
            for (var v = g[h], m = !1, y = 0, S = a; y < S.length; y++) {
                var E = S[y];
                if (E.field === v.field) {
                    E.order = v.order, m = !0;
                    break
                }
            }
            m || f.push(v)
        }
        return {
            superHeaderRendering: n,
            isVGrouping: s,
            groupSpecs: a,
            colSpecs: i.concat(o),
            orderSpecs: f
        }
    }
    Qc.addStateEquality({
        spreadsheetColWidths: dt
    });
    var od = yo({
        deps: [wl, bc, ku],
        initialView: "resourceTimelineDay",
        views: {
            resourceTimeline: {
                type: "timeline",
                component: Qc,
                needsResourceData: !0,
                resourceAreaWidth: "30%",
                resourcesInitiallyExpanded: !0,
                eventResizableFromStart: !0
            },
            resourceTimelineDay: {
                type: "resourceTimeline",
                duration: {
                    days: 1
                }
            },
            resourceTimelineWeek: {
                type: "resourceTimeline",
                duration: {
                    weeks: 1
                }
            },
            resourceTimelineMonth: {
                type: "resourceTimeline",
                duration: {
                    months: 1
                }
            },
            resourceTimelineYear: {
                type: "resourceTimeline",
                duration: {
                    years: 1
                }
            }
        }
    });
    return ei.push(Qa, xs, sl, yl, El, Cl, Yl, Kl, ku, bc, xc, _c, od), e.AbstractResourceDayTableModel = cc, e.BASE_OPTION_DEFAULTS = It, e.BASE_OPTION_REFINERS = Pt, e.BaseComponent = no, e.BgEvent = Ca, e.BootstrapTheme = Sl, e.Calendar = wa, e.CalendarApi = Xn, e.CalendarContent = _i, e.CalendarDataManager = ai, e.CalendarDataProvider = mi, e.CalendarRoot = Oi, e.Component = jr, e.ContentHook = Do, e.CustomContentRenderContext = Ro, e.DEFAULT_RESOURCE_ORDER = tc, e.DateComponent = mo, e.DateEnv = or, e.DateProfileGenerator = Oo, e.DayCellContent = ma, e.DayCellRoot = Sa, e.DayGridView = ws, e.DayHeader = Fi, e.DayResourceTableModel = pc, e.DaySeriesModel = Gi, e.DayTable = Ds, e.DayTableModel = qi, e.DayTableSlicer = Rs, e.DayTimeCols = tl, e.DayTimeColsSlicer = el, e.DayTimeColsView = il, e.DelayedRunner = ri, e.Draggable = Ka, e.ElementDragging = Ri, e.ElementScrollController = zr, e.Emitter = Lr, e.EventApi = Kn, e.EventRoot = pa, e.EventSourceApi = B, e.FeaturefulElementDragging = Aa, e.Fragment = Zr, e.Interaction = Si, e.ListView = hl, e.MountHook = To, e.NamedTimeZoneImpl = yi, e.NowIndicatorRoot = ga, e.NowTimer = zi, e.PointerDragging = ka, e.PositionCache = Ur, e.RefMap = Ji, e.RenderHook = bo, e.ResourceApi = Ku, e.ResourceDayHeader = sc, e.ResourceDayTable = Dc, e.ResourceDayTableModel = dc, e.ResourceDayTableView = wc, e.ResourceDayTimeCols = kc, e.ResourceDayTimeColsView = Pc, e.ResourceLabelRoot = oc, e.ResourceSplitter = Ju, e.ResourceTimelineLane = Gc, e.ResourceTimelineView = Qc, e.ScrollController = Br, e.ScrollGrid = Ol, e.ScrollResponder = $r, e.Scroller = Ki, e.SimpleScrollGrid = da, e.Slicer = Yi, e.Splitter = br, e.SpreadsheetRow = Bc, e.StandardEvent = fa, e.Table = Es, e.TableDateCell = Ui, e.TableDowCell = Bi, e.TableView = es, e.Theme = Fr, e.ThirdPartyDraggable = $a, e.TimeCols = $s, e.TimeColsSlatsCoords = Ws, e.TimeColsView = Hs, e.TimelineCoords = hu, e.TimelineHeader = fu, e.TimelineHeaderRows = pu, e.TimelineLane = wu, e.TimelineLaneBg = Su, e.TimelineLaneSlicer = Eu, e.TimelineSlats = yu, e.TimelineView = xu, e.VResourceJoiner = hc, e.VResourceSplitter = gc, e.ViewApi = jn, e.ViewContextType = Qr, e.ViewRoot = Po, e.WeekNumberRoot = Ra, e.WindowScrollController = Vr, e.addDays = ye, e.addDurations = Qe, e.addMs = Se, e.addWeeks = me, e.allowContextMenu = se, e.allowSelection = ie, e.applyMutationToEventStore = zn, e.applyStyle = Y, e.applyStyleProp = Z, e.asCleanDays = $e, e.asRoughMinutes = nt, e.asRoughMs = ot, e.asRoughSeconds = rt, e.buildClassNameNormalizer = xo, e.buildDayRanges = nl, e.buildDayTableModel = Ts, e.buildEventApis = $n, e.buildEventRangeKey = In, e.buildHashFromArray = function(e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    }, e.buildNavLinkData = xr, e.buildResourceFields = Ec, e.buildRowNodes = mc, e.buildSegCompareObj = Dn, e.buildSegTimeText = Mn, e.buildSlatCols = Mu, e.buildSlatMetas = ol, e.buildTimeColsModel = al, e.buildTimelineDateProfile = nu, e.collectFromHash = Ge, e.combineEventUis = Kt, e.compareByFieldSpec = ce, e.compareByFieldSpecs = ue, e.compareNumbers = fe, e.compareObjs = Fe, e.computeEdges = Nr, e.computeFallbackHeaderFormat = Wi, e.computeHeightAndMargins = function(e) {
        return e.getBoundingClientRect().height + function(e) {
            var t = window.getComputedStyle(e);
            return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
        }(e)
    }, e.computeInnerRect = Hr, e.computeRect = Or, e.computeSegDraggable = wn, e.computeSegEndResizable = xn, e.computeSegStartResizable = Tn, e.computeShrinkWidth = $i, e.computeSmallestCellWidth = ge, e.computeVisibleDayRange = sn, e.config = Di, e.constrainPoint = mr, e.createContext = Xr, e.createDuration = Ke, e.createElement = Gr, e.createEmptyEventStore = Ft, e.createEventInstance = He, e.createEventUi = Xt, e.createFormatter = kt, e.createPlugin = yo, e.createRef = Yr, e.diffDates = un, e.diffDayAndTime = be, e.diffDays = Ce, e.diffPoints = Sr, e.diffWeeks = Ee, e.diffWholeDays = De, e.diffWholeWeeks = Re, e.disableCursor = ne, e.elementClosest = V, e.elementMatches = F, e.enableCursor = re, e.eventTupleToStore = zt, e.filterEventStoreDefs = Gt, e.filterHash = Ae, e.findDirectChildren = G, e.findElements = j, e.flattenResources = vc, e.flexibleCompare = de, e.flushToDom = Kr, e.formatDate = function(e, t) {
        void 0 === t && (t = {});
        var n = cr(t),
            r = kt(t),
            o = n.createMarkerMeta(e);
        return o ? n.format(o.marker, r, {
            forcedTzo: o.forcedTzo
        }) : ""
    }, e.formatDayString = st, e.formatIsoTimeString = lt, e.formatRange = function(e, t, n) {
        var r = cr("object" == typeof n && n ? n : {}),
            o = kt(n),
            i = r.createMarkerMeta(e),
            a = r.createMarkerMeta(t);
        return i && a ? r.formatRange(i.marker, a.marker, o, {
            forcedStartTzo: i.forcedTzo,
            forcedEndTzo: a.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: It.defaultRangeSeparator
        }) : ""
    }, e.getAllowYScrolling = ea, e.getCanVGrowWithinCell = Er, e.getClippingParents = Wr, e.getDateMeta = Dr, e.getDayClassNames = wr, e.getDefaultEventEnd = Bn, e.getElSeg = En, e.getEventClassNames = Pn, e.getIsRtlScrollbarOnLeft = Pr, e.getPublicId = Yu, e.getRectCenter = yr, e.getRelevantEvents = Vt, e.getScrollGridClassNames = aa, e.getScrollbarWidths = Ir, e.getSectionClassNames = sa, e.getSectionHasLiquidHeight = Qi, e.getSegMeta = kn, e.getSlotClassNames = Tr, e.getStickyFooterScrollbar = ca, e.getStickyHeaderDates = ua, e.getUnequalProps = Ve, e.globalLocales = ir, e.globalPlugins = ei, e.greatestDurationDenominator = at, e.guid = te, e.hasBgRendering = yn, e.hasShrinkWidth = ia, e.identity = Ut, e.interactionSettingsStore = bi, e.interactionSettingsToStore = Ci, e.intersectRanges = pn, e.intersectRects = gr, e.isArraysEqual = dt, e.isColPropsEqual = na, e.isDateSpansEqual = Hn, e.isGroupsEqual = Cc, e.isInt = he, e.isInteractionValid = uo, e.isMultiDayRange = ln, e.isPropsEqual = ze, e.isPropsValid = po, e.isValidDate = _e, e.listenBySelector = J, e.mapHash = Le, e.memoize = pt, e.memoizeArraylike = ht, e.memoizeHashlike = gt, e.memoizeObjArg = ft, e.mergeEventStores = jt, e.multiplyDuration = et, e.padStart = pe, e.parseBusinessHours = fr, e.parseClassNames = qt, e.parseDragMeta = Ti, e.parseEventDef = on, e.parseFieldSpecs = le, e.parseMarker = rr, e.pointInsideRect = hr, e.preventContextMenu = ae, e.preventDefault = X, e.preventSelection = oe, e.rangeContainsMarker = vn, e.rangeContainsRange = gn, e.rangesEqual = fn, e.rangesIntersect = hn, e.refineEventDef = nn, e.refineProps = Lt, e.removeElement = z, e.removeExact = ct, e.render = qr, e.renderChunkContent = ta, e.renderFill = Ea, e.renderMicroColGroup = ra, e.renderScrollShim = la, e.requestJson = Jo, e.sanitizeShrinkWidth = oa, e.setElSeg = Sn, e.setRef = io, e.setScrollFromStartingEdge = kl, e.sliceEventStore = mn, e.sliceEvents = function(e, t) {
        return mn(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
    }, e.sortEventSegs = Rn, e.startOfDay = we, e.translateRect = vr, e.triggerDateSelect = Ln, e.unmountComponentAtNode = Jr, e.unpromisify = Ar, e.version = "5.5.0", e.whenTransitionDone = Q, e.wholeDivideDurations = it, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
