! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length
            , n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return it.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (dt.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function (e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(kt, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? it.parseJSON(n) : n
                }
                catch (i) {}
                it.data(e, t, n)
            }
            else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando
                , s = e.nodeType
                , l = s ? it.cache : e
                , u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = U.pop() || it.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: it.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
        }
    }

    function f(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType
                , a = o ? it.cache : e
                , s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !it.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        }
        catch (e) {}
    }

    function g(e) {
        var t = Ot.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, r, i = 0
            , o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, m(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
    }

    function v(e) {
        jt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Qt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e)
                , a = it._data(t, o)
                , s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events) it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body)
            , o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }

    function k(e) {
        var t = ht
            , n = Kt[e];
        return n || (n = S(e, t), "none" !== n && n || (Zt = (Zt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Zt.detach()), Kt[e] = n), n
    }

    function E(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)
            if (t = pn[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[a] = it._data(r, "olddisplay", k(r.nodeName)))) : (i = At(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function P(e, t, n) {
        var r = un.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += it.css(e, n + Nt[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + Nt[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + Nt[o] + "Width", !0, i))) : (a += it.css(e, "padding" + Nt[o], !0, i), "padding" !== n && (a += it.css(e, "border" + Nt[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0
            , i = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = en(e)
            , a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function () {
            hn = void 0
        }), hn = it.now()
    }

    function F(e, t) {
        var n, r = {
                height: e
            }
            , i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, i, o, a, s, l, u, c, f = this
            , d = {}
            , p = e.style
            , h = e.nodeType && At(e)
            , g = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, f.always(function () {
            f.always(function () {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = it.css(e, "display"), c = "none" === u ? it._data(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], mn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                d[r] = g && g[r] || it.style(e, r)
            }
            else u = void 0;
        if (it.isEmptyObject(d)) "inline" === ("none" === u ? k(e.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = it._data(e, "fxshow", {}), o && (g.hidden = !h), h ? it(e).show() : f.done(function () {
                it(e).hide()
            }), f.done(function () {
                var t;
                it._removeData(e, "fxshow");
                for (t in d) it.style(e, t, d[t])
            });
            for (r in d) a = M(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function V(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            }
            else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o = 0
            , a = bn.length
            , s = it.Deferred().always(function () {
                delete l.elem
            })
            , l = function () {
                if (i) return !1;
                for (var t = hn || D(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            }
            , u = s.promise({
                elem: e
                , props: it.extend({}, t)
                , opts: it.extend(!0, {
                    specialEasing: {}
                }, n)
                , originalProperties: t
                , originalOptions: n
                , startTime: hn || D()
                , duration: n.duration
                , tweens: []
                , createTween: function (t, n) {
                    var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                }
                , stop: function (t) {
                    var n = 0
                        , r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            })
            , c = u.props;
        for (V(c, u.opts.specialEasing); a > o; o++)
            if (r = bn[o].call(u, e, c, u.opts)) return r;
        return it.map(c, M, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(l, {
            elem: e
            , anim: u
            , queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0
                , o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function I(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, it.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {}
            , a = e === Wn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function B(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }

    function z(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function _(e, t, n, r) {
        var i, o, a, s, l, u = {}
            , c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                }
                catch (f) {
                    return {
                        state: "parsererror"
                        , error: a ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success"
            , data: t
        }
    }

    function W(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function (t, i) {
            n || Un.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== it.type(t)) r(e, t);
        else
            for (i in t) W(e + "[" + i + "]", t[i], n, r)
    }

    function $() {
        try {
            return new e.XMLHttpRequest
        }
        catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (t) {}
    }

    function Q(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U = []
        , G = U.slice
        , Y = U.concat
        , J = U.push
        , Z = U.indexOf
        , K = {}
        , et = K.toString
        , tt = K.hasOwnProperty
        , nt = {}
        , rt = "1.11.2"
        , it = function (e, t) {
            return new it.fn.init(e, t)
        }
        , ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , at = /^-ms-/
        , st = /-([\da-z])/gi
        , lt = function (e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt
        , constructor: it
        , selector: ""
        , length: 0
        , toArray: function () {
            return G.call(this)
        }
        , get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        }
        , pushStack: function (e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }
        , each: function (e, t) {
            return it.each(this, e, t)
        }
        , map: function (e) {
            return this.pushStack(it.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }
        , slice: function () {
            return this.pushStack(G.apply(this, arguments))
        }
        , first: function () {
            return this.eq(0)
        }
        , last: function () {
            return this.eq(-1)
        }
        , eq: function (e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }
        , end: function () {
            return this.prevObject || this.constructor(null)
        }
        , push: J
        , sort: U.sort
        , splice: U.splice
    }, it.extend = it.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}
            , s = 1
            , l = arguments.length
            , u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, "")
        , isReady: !0
        , error: function (e) {
            throw new Error(e)
        }
        , noop: function () {}
        , isFunction: function (e) {
            return "function" === it.type(e)
        }
        , isArray: Array.isArray || function (e) {
            return "array" === it.type(e)
        }
        , isWindow: function (e) {
            return null != e && e == e.window
        }
        , isNumeric: function (e) {
            return !it.isArray(e) && e - parseFloat(e) + 1 >= 0
        }
        , isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }
        , isPlainObject: function (e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            }
            catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        }
        , type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[et.call(e)] || "object" : typeof e
        }
        , globalEval: function (t) {
            t && it.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }
        , camelCase: function (e) {
            return e.replace(at, "ms-").replace(st, lt)
        }
        , nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        , each: function (e, t, r) {
            var i, o = 0
                , a = e.length
                , s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            }
            else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        }
        , trim: function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        }
        , makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
        }
        , inArray: function (e, t, n) {
            var r;
            if (t) {
                if (Z) return Z.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        }
        , merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        }
        , grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        }
        , map: function (e, t, r) {
            var i, o = 0
                , a = e.length
                , s = n(e)
                , l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return Y.apply([], l)
        }
        , guid: 1
        , proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = G.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(G.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        }
        , now: function () {
            return +new Date
        }
        , support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, f, p, h, g;
            if ((t ? t.ownerDocument || t : I) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && F) {
                if (11 !== s && (i = yt.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        }
                        else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a) return n.push(o), n
                    }
                    else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = f = R, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = k(e), (f = t.getAttribute("id")) ? p = f.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        h = bt.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    }
                    catch (m) {}
                    finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(lt, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[R] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            }
            catch (n) {
                return !1
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir
                , i = n && "parentNode" === r
                , o = z++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, u = [B, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                }
                else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[R] || (t[R] = {}), (s = l[r]) && s[0] === B && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function (r, a, s, l) {
                var u, c, f, d = []
                    , p = []
                    , h = a.length
                    , v = r || g(t || "*", s.nodeType ? [s] : s, [])
                    , y = !e || !r && t ? v : m(v, d, e, s, l)
                    , b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = m(b, p), i(u, [], s, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (u = o ? et(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f))
                    }
                }
                else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                    return e === t
                }, a, !0), u = p(function (e) {
                    return et(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function (r, a, s, l, u) {
                    var c, f, d, p = 0
                        , h = "0"
                        , g = r && []
                        , v = []
                        , y = A
                        , b = r || o && T.find.TAG("*", u)
                        , x = B += null == y ? 1 : Math.random() || .1
                        , w = b.length;
                    for (u && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0; d = e[f++];)
                                if (d(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (B = x)
                        }
                        i && ((c = !d && c) && p--, r && g.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = Y.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (B = x, A = y), g
                };
            return i ? r(a) : a
        }
        var x, w, T, C, S, k, E, N, A, P, j, L, H, D, F, M, O, V, q, R = "sizzle" + 1 * new Date
            , I = e.document
            , B = 0
            , z = 0
            , _ = n()
            , W = n()
            , $ = n()
            , X = function (e, t) {
                return e === t && (j = !0), 0
            }
            , Q = 1 << 31
            , U = {}.hasOwnProperty
            , G = []
            , Y = G.pop
            , J = G.push
            , Z = G.push
            , K = G.slice
            , et = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            }
            , tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
            , nt = "[\\x20\\t\\r\\n\\f]"
            , rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
            , it = rt.replace("w", "w#")
            , ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]"
            , at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)"
            , st = new RegExp(nt + "+", "g")
            , lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g")
            , ut = new RegExp("^" + nt + "*," + nt + "*")
            , ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*")
            , ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g")
            , dt = new RegExp(at)
            , pt = new RegExp("^" + it + "$")
            , ht = {
                ID: new RegExp("^#(" + rt + ")")
                , CLASS: new RegExp("^\\.(" + rt + ")")
                , TAG: new RegExp("^(" + rt.replace("w", "w*") + ")")
                , ATTR: new RegExp("^" + ot)
                , PSEUDO: new RegExp("^" + at)
                , CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i")
                , bool: new RegExp("^(?:" + tt + ")$", "i")
                , needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }
            , gt = /^(?:input|select|textarea|button)$/i
            , mt = /^h\d$/i
            , vt = /^[^{]+\{\s*\[native \w/
            , yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
            , bt = /[+~]/
            , xt = /'|\\/g
            , wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig")
            , Tt = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }
            , Ct = function () {
                L()
            };
        try {
            Z.apply(G = K.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
        }
        catch (St) {
            Z = {
                apply: G.length ? function (e, t) {
                    J.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, D = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), F = !S(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function (e) {
                return D.appendChild(e).id = R, !r.getElementsByName || !r.getElementsByName(R).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = []
                    , i = 0
                    , o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return F ? t.getElementsByClassName(e) : void 0
            }, O = [], M = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function (e) {
                D.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + R + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || M.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = vt.test(V = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = V.call(e, "div"), V.call(e, "[s!='']:x"), O.push("!=", at)
            }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = vt.test(D.compareDocumentPosition), q = t || vt.test(D.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                    , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && q(I, e) ? -1 : t === r || t.ownerDocument === I && q(I, t) ? 1 : P ? et(P, e) - et(P, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0
                    , o = e.parentNode
                    , s = t.parentNode
                    , l = [e]
                    , u = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : P ? et(P, e) - et(P, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === I ? -1 : u[i] === I ? 1 : 0
            }, r) : H
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !F || O && O.test(n) || M && M.test(n))) try {
                var r = V.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            }
            catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), q(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()]
                , r = n && U.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== r ? r : w.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = []
                , r = 0
                , i = 0;
            if (j = !w.detectDuplicates, P = !w.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return P = null, e
        }, C = t.getText = function (e) {
            var t, n = ""
                , r = 0
                , i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                }
                else if (3 === i || 4 === i) return e.nodeValue
            }
            else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50
            , createPseudo: r
            , match: ht
            , attrHandle: {}
            , find: {}
            , relative: {
                ">": {
                    dir: "parentNode"
                    , first: !0
                }
                , " ": {
                    dir: "parentNode"
                }
                , "+": {
                    dir: "previousSibling"
                    , first: !0
                }
                , "~": {
                    dir: "previousSibling"
                }
            }
            , preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }
                , CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }
                , PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            }
            , filter: {
                TAG: function (e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }
                , CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }
                , ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }
                , CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                        , a = "last" !== e.slice(-4)
                        , s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling"
                            , m = t.parentNode
                            , v = s && t.nodeName.toLowerCase()
                            , y = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[R] || (m[R] = {}), u = c[e] || [], p = u[0] === B && u[1], d = u[0] === B && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++d && f === t) {
                                        c[e] = [B, p, d];
                                        break
                                    }
                            }
                            else if (y && (u = (t[R] || (t[R] = {}))[e]) && u[0] === B) d = u[1];
                            else
                                for (;
                                    (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[R] || (f[R] = {}))[e] = [B, d]), f !== t)););
                            return d -= i, d === r || d % r === 0 && d / r >= 0
                        }
                    }
                }
                , PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = et(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            }
            , pseudos: {
                not: r(function (e) {
                    var t = []
                        , n = []
                        , i = E(e.replace(lt, "$1"));
                    return i[R] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                })
                , has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                })
                , contains: r(function (e) {
                    return e = e.replace(wt, Tt)
                        , function (t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                })
                , lang: r(function (e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase()
                        , function (t) {
                            var n;
                            do
                                if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                })
                , target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }
                , root: function (e) {
                    return e === D
                }
                , focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }
                , enabled: function (e) {
                    return e.disabled === !1
                }
                , disabled: function (e) {
                    return e.disabled === !0
                }
                , checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }
                , selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }
                , empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                }
                , parent: function (e) {
                    return !T.pseudos.empty(e)
                }
                , header: function (e) {
                    return mt.test(e.nodeName)
                }
                , input: function (e) {
                    return gt.test(e.nodeName)
                }
                , button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }
                , text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }
                , first: u(function () {
                    return [0]
                })
                , last: u(function (e, t) {
                    return [t - 1]
                })
                , eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                })
                , even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                })
                , odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                })
                , lt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                })
                , gt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0
                , checkbox: !0
                , file: !0
                , password: !0
                , image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0
                , reset: !0
            }) T.pseudos[x] = l(x);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
            var r, i, o, a, s, l, u, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                    value: r
                    , type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = ht[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r
                    , type: a
                    , matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = []
                , i = []
                , o = $[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
                o = $(e, b(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function (e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e
                , f = !r && k(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || E(e, f))(r, t, !F, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = R.split("").sort(X).join("") === R, w.detectDuplicates = !!j, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext
        , ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , dt = /^.[^:#\[\.,]*$/;
    it.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function (e) {
            var t, n = []
                , r = this
                , i = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (it.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }
        , filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }
        , not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }
        , is: function (e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document
        , gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
        , mt = it.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), ft.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = ht.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
        };
    mt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/
        , yt = {
            children: !0
            , contents: !0
            , next: !0
            , prev: !0
        };
    it.extend({
        dir: function (e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        }
        , sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function (e) {
            var t, n = it(e, this)
                , r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t])) return !0
            })
        }
        , closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? it.unique(o) : o)
        }
        , index: function (e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }
        , add: function (e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        }
        , addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }
        , parents: function (e) {
            return it.dir(e, "parentNode")
        }
        , parentsUntil: function (e, t, n) {
            return it.dir(e, "parentNode", n)
        }
        , next: function (e) {
            return i(e, "nextSibling")
        }
        , prev: function (e) {
            return i(e, "previousSibling")
        }
        , nextAll: function (e) {
            return it.dir(e, "nextSibling")
        }
        , prevAll: function (e) {
            return it.dir(e, "previousSibling")
        }
        , nextUntil: function (e, t, n) {
            return it.dir(e, "nextSibling", n)
        }
        , prevUntil: function (e, t, n) {
            return it.dir(e, "previousSibling", n)
        }
        , siblings: function (e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        }
        , children: function (e) {
            return it.sibling(e.firstChild)
        }
        , contents: function (e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function (e, t) {
        it.fn[e] = function (n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g
        , xt = {};
    it.Callbacks = function (e) {
        e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, l = []
            , u = !e.once && []
            , c = function (o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : f.disable())
            }
            , f = {
                add: function () {
                    if (l) {
                        var r = l.length;
                        ! function o(t) {
                            it.each(t, function (t, n) {
                                var r = it.type(n);
                                "function" === r ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                }
                , remove: function () {
                    return l && it.each(arguments, function (e, n) {
                        for (var r;
                            (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                }
                , has: function (e) {
                    return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                }
                , empty: function () {
                    return l = [], i = 0, this
                }
                , disable: function () {
                    return l = u = n = void 0, this
                }
                , disabled: function () {
                    return !l
                }
                , lock: function () {
                    return u = void 0, n || f.disable(), this
                }
                , locked: function () {
                    return !u
                }
                , fireWith: function (e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                }
                , fire: function () {
                    return f.fireWith(this, arguments), this
                }
                , fired: function () {
                    return !!r
                }
            };
        return f
    }, it.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]]
                , n = "pending"
                , r = {
                    state: function () {
                        return n
                    }
                    , always: function () {
                        return i.done(arguments).fail(arguments), this
                    }
                    , then: function () {
                        var e = arguments;
                        return it.Deferred(function (n) {
                            it.each(t, function (t, o) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }
                    , promise: function (e) {
                        return null != e ? it.extend(e, r) : r
                    }
                }
                , i = {};
            return r.pipe = r.then, it.each(t, function (e, o) {
                var a = o[2]
                    , s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }
        , when: function (e) {
            var t, n, r, i = 0
                , o = G.call(arguments)
                , a = o.length
                , s = 1 !== a || e && it.isFunction(e.promise) ? a : 0
                , l = 1 === s ? e : it.Deferred()
                , u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? G.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var wt;
    it.fn.ready = function (e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1
        , readyWait: 1
        , holdReady: function (e) {
            e ? it.readyWait++ : it.ready(!0)
        }
        , ready: function (e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
            }
        }
    }), it.ready.promise = function (t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            }
            catch (r) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    }
                    catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in it(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function () {
            var e, t, n, r;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        })
        , function () {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                }
                catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), it.acceptData = function (e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()]
                , n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , kt = /([A-Z])/g;
    it.extend({
        cache: {}
        , noData: {
            "applet ": !0
            , "embed ": !0
            , "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        }
        , hasData: function (e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !u(e)
        }
        , data: function (e, t, n) {
            return c(e, t, n)
        }
        , removeData: function (e, t) {
            return f(e, t)
        }
        , _data: function (e, t, n) {
            return c(e, t, n, !0)
        }
        , _removeData: function (e, t) {
            return f(e, t, !0)
        }
    }), it.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0]
                , a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                it.data(this, e, t)
            }) : o ? l(o, e, it.data(o, e)) : void 0
        }
        , removeData: function (e) {
            return this.each(function () {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        }
        , dequeue: function (e, t) {
            t = t || "fx";
            var n = it.queue(e, t)
                , r = n.length
                , i = n.shift()
                , o = it._queueHooks(e, t)
                , a = function () {
                    it.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }
        , _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function () {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        }
        , dequeue: function (e) {
            return this.each(function () {
                it.dequeue(this, e)
            })
        }
        , clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }
        , promise: function (e, t) {
            var n, r = 1
                , i = it.Deferred()
                , o = this
                , a = this.length
                , s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Nt = ["Top", "Right", "Bottom", "Left"]
        , At = function (e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        }
        , Pt = it.access = function (e, t, n, r, i, o, a) {
            var s = 0
                , l = e.length
                , u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, o, a)
            }
            else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(it(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        }
        , jt = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = ht.createElement("input")
            , t = ht.createElement("div")
            , n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            }
            catch (r) {
                nt.deleteExpando = !1
            }
        }
    }()
    , function () {
        var t, n, r = ht.createElement("div");
        for (t in {
                submit: !0
                , change: !0
                , focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Lt = /^(?:input|select|textarea)$/i
        , Ht = /^key/
        , Dt = /^(?:mouse|pointer|contextmenu)|click/
        , Ft = /^(?:focusinfocus|focusoutblur)$/
        , Mt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {}
        , add: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = it._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                        return typeof it === Ct || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (u = it.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = it.event.special[p] || {}, f = it.extend({
                    type: p
                    , origType: g
                    , data: r
                    , handler: n
                    , guid: n.guid
                    , selector: i
                    , needsContext: i && it.expr.match.needsContext.test(i)
                    , namespace: h.join(".")
                }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), it.event.global[p] = !0);
                e = null
            }
        }
        , remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = it.hasData(e) && it._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Mt.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = it.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        l && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || it.removeEvent(e, p, m.handle), delete c[p])
                    }
                    else
                        for (p in c) it.event.remove(e, p + t[u], n, r, !0);
                it.isEmptyObject(c) && (delete m.handle, it._removeData(e, "events"))
            }
        }
        , trigger: function (t, n, r, i) {
            var o, a, s, l, u, c, f, d = [r || ht]
                , p = tt.call(t, "type") ? t.type : t
                , h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !Ft.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[p] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(r)) {
                    for (l = u.delegateType || p, Ft.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (r.ownerDocument || ht) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0;
                    (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) {
                    c = r[a], c && (r[a] = null), it.event.triggered = p;
                    try {
                        r[p]()
                    }
                    catch (g) {}
                    it.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        }
        , dispatch: function (e) {
            e = it.event.fix(e);
            var t, n, r, i, o, a = []
                , s = G.call(arguments)
                , l = (it._data(this, "events") || {})[e.type] || []
                , u = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        }
        , handlers: function (e, t) {
            var n, r, i, o, a = []
                , s = t.delegateCount
                , l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l
                            , handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this
                , handlers: t.slice(s)
            }), a
        }
        , fix: function (e) {
            if (e[it.expando]) return e;
            var t, n, r, i = e.type
                , o = e
                , a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Dt.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        }
        , props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")
        , fixHooks: {}
        , keyHooks: {
            props: "char charCode key keyCode".split(" ")
            , filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        }
        , mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")
            , filter: function (e, t) {
                var n, r, i, o = t.button
                    , a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        }
        , special: {
            load: {
                noBubble: !0
            }
            , focus: {
                trigger: function () {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    }
                    catch (e) {}
                }
                , delegateType: "focusin"
            }
            , blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                }
                , delegateType: "focusout"
            }
            , click: {
                trigger: function () {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
                , _default: function (e) {
                    return it.nodeName(e.target, "a")
                }
            }
            , beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
        , simulate: function (e, t, n, r) {
            var i = it.extend(new it.Event, n, {
                type: e
                , isSimulated: !0
                , originalEvent: {}
            });
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ht.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function (e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: p
        , isPropagationStopped: p
        , isImmediatePropagationStopped: p
        , preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }
        , stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }
        , stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover"
        , mouseleave: "mouseout"
        , pointerenter: "pointerover"
        , pointerleave: "pointerout"
    }, function (e, t) {
        it.event.special[e] = {
            delegateType: t
            , bindType: t
            , handle: function (e) {
                var n, r = this
                    , i = e.relatedTarget
                    , o = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target
                    , n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        }
        , postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        }
        , teardown: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function () {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        }
        , handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }
        , teardown: function () {
            return it.event.remove(this, "._change"), !Lt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin"
        , blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this
                    , i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            }
            , teardown: function () {
                var r = this.ownerDocument || this
                    , i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }
        }
    }), it.fn.extend({
        on: function (e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function (e) {
                return it().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function () {
                it.event.add(this, e, r, n, t)
            })
        }
        , one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }
        , off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                it.event.remove(this, e, n, t)
            })
        }
        , trigger: function (e, t) {
            return this.each(function () {
                it.event.trigger(e, t, this)
            })
        }
        , triggerHandler: function (e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , Vt = / jQuery\d+="(?:null|\d+)"/g
        , qt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i")
        , Rt = /^\s+/
        , It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , Bt = /<([\w:]+)/
        , zt = /<tbody/i
        , _t = /<|&#?\w+;/
        , Wt = /<(?:script|style|link)/i
        , $t = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Xt = /^$|\/(?:java|ecma)script/i
        , Qt = /^true\/(.*)/
        , Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"]
            , legend: [1, "<fieldset>", "</fieldset>"]
            , area: [1, "<map>", "</map>"]
            , param: [1, "<object>", "</object>"]
            , thead: [1, "<table>", "</table>"]
            , tr: [2, "<table><tbody>", "</tbody></table>"]
            , col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
            , td: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
            , _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
        , Yt = g(ht)
        , Jt = Yt.appendChild(ht.createElement("div"));
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, it.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !qt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Jt.innerHTML = e.outerHTML, Jt.removeChild(o = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = m(o), s = m(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || m(e), r = r || m(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = m(o, "script"), r.length > 0 && w(r, !l && m(e, "script")), r = s = i = null, o
        }
        , buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, l, u, c, f = e.length, d = g(t), p = [], h = 0; f > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o);
                    else if (_t.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, s.innerHTML = c[1] + o.replace(It, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Rt.test(o) && p.push(t.createTextNode(Rt.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || zt.test(o) ? "<table>" !== c[1] || zt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            }
            else p.push(t.createTextNode(o));
            for (s && d.removeChild(s), nt.appendChecked || it.grep(m(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = m(d.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Xt.test(o.type || "") && n.push(o);
            return s = null, d
        }
        , cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, U.push(i))
                }
        }
    }), it.fn.extend({
        text: function (e) {
            return Pt(this, function (e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        }
        , append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        }
        , prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }
        , before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }
        , after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }
        , remove: function (e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(m(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this
        }
        , empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }
        , clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return it.clone(this, e, t)
            })
        }
        , html: function (e) {
            return Pt(this, function (e) {
                var t = this[0] || {}
                    , n = 0
                    , r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Vt, "") : void 0;
                if (!("string" != typeof e || Wt.test(e) || !nt.htmlSerialize && qt.test(e) || !nt.leadingWhitespace && Rt.test(e) || Gt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(It, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    }
                    catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }
        , replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, it.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }
        , detach: function (e) {
            return this.remove(e, !0)
        }
        , domManip: function (e, t) {
            e = Y.apply([], e);
            var n, r, i, o, a, s, l = 0
                , u = this.length
                , c = this
                , f = u - 1
                , d = e[0]
                , p = it.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !nt.checkClone && $t.test(d)) return this.each(function (n) {
                var r = c.eq(n);
                p && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(m(s, "script"), b), i = o.length; u > l; l++) r = s, l !== f && (r = it.clone(r, !0, !0), i && it.merge(o, m(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, it.map(o, x), l = 0; i > l; l++) r = o[l], Xt.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ut, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append"
        , prependTo: "prepend"
        , insertBefore: "before"
        , insertAfter: "after"
        , replaceAll: "replaceWith"
    }, function (e, t) {
        it.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, Kt = {};
    ! function () {
        var e;
        nt.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/
        , rn = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i")
        , on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tn = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function (e) {
            return e.currentStyle
        }, tn = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        })
        , function () {
            function t() {
                var t, n, r, i;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                }
                , boxSizingReliable: function () {
                    return null == a && t(), a
                }
                , pixelPosition: function () {
                    return null == o && t(), o
                }
                , reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), it.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var an = /alpha\([^)]*\)/i
        , sn = /opacity\s*=\s*([^)]*)/
        , ln = /^(none|table(?!-c[ea]).+)/
        , un = new RegExp("^(" + Et + ")(.*)$", "i")
        , cn = new RegExp("^([+-])=(" + Et + ")", "i")
        , fn = {
            position: "absolute"
            , visibility: "hidden"
            , display: "block"
        }
        , dn = {
            letterSpacing: "0"
            , fontWeight: "400"
        }
        , pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }
        , cssNumber: {
            columnCount: !0
            , fillOpacity: !0
            , flexGrow: !0
            , flexShrink: !0
            , fontWeight: !0
            , lineHeight: !0
            , opacity: !0
            , order: !0
            , orphans: !0
            , widows: !0
            , zIndex: !0
            , zoom: !0
        }
        , cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        }
        , style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t)
                    , l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = N(l, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                }
                catch (u) {}
            }
        }
        , css: function (e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = N(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in dn && (o = dn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }
    }), it.each(["height", "width"], function (e, t) {
        it.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, fn, function () {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            }
            , set: function (e, n, r) {
                var i = r && en(e);
                return P(e, n, r ? j(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }
        , set: function (e, t) {
            var n = e.style
                , r = e.currentStyle
                , i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                , o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }
    }), it.cssHooks.marginRight = E(nt.reliableMarginRight, function (e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), it.each({
        margin: ""
        , padding: ""
        , border: "Width"
    }, function (e, t) {
        it.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = P)
    }), it.fn.extend({
        css: function (e, t) {
            return Pt(this, function (e, t, n) {
                var r, i, o = {}
                    , a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        }
        , show: function () {
            return A(this, !0)
        }
        , hide: function () {
            return A(this)
        }
        , toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                At(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = H, H.prototype = {
        constructor: H
        , init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        }
        , cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        }
        , run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }
            , set: function (e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function (e) {
            return e
        }
        , swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = H.prototype.init, it.fx.step = {};
    var hn, gn, mn = /^(?:toggle|show|hide)$/
        , vn = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i")
        , yn = /queueHooks$/
        , bn = [O]
        , xn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t)
                    , r = n.cur()
                    , i = vn.exec(t)
                    , o = i && i[3] || (it.cssNumber[e] ? "" : "px")
                    , a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e))
                    , s = 1
                    , l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(q, {
            tweener: function (e, t) {
                it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
            }
            , prefilter: function (e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), it.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? it.extend({}, e) : {
                complete: n || !n && t || it.isFunction(e) && e
                , duration: e
                , easing: n && t || t && !it.isFunction(t) && t
            };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
            }, r
        }, it.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            }
            , animate: function (e, t, n, r) {
                var i = it.isEmptyObject(e)
                    , o = it.speed(t, n, r)
                    , a = function () {
                        var t = q(this, it.extend({}, e), o);
                        (i || it._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }
            , stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0
                        , i = null != e && e + "queueHooks"
                        , o = it.timers
                        , a = it._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && it.dequeue(this, e)
                })
            }
            , finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = it._data(this)
                        , r = n[e + "queue"]
                        , i = n[e + "queueHooks"]
                        , o = it.timers
                        , a = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function (e, t) {
            var n = it.fn[t];
            it.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
            }
        }), it.each({
            slideDown: F("show")
            , slideUp: F("hide")
            , slideToggle: F("toggle")
            , fadeIn: {
                opacity: "show"
            }
            , fadeOut: {
                opacity: "hide"
            }
            , fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            it.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), it.timers = [], it.fx.tick = function () {
            var e, t = it.timers
                , n = 0;
            for (hn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), hn = void 0
        }, it.fx.timer = function (e) {
            it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function () {
            gn || (gn = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function () {
            clearInterval(gn), gn = null
        }, it.fx.speeds = {
            slow: 600
            , fast: 200
            , _default: 400
        }, it.fn.delay = function (e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }
        , function () {
            var e, t, n, r, i;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var wn = /\r/g;
    it.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = it.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            }
            , select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                }
                , set: function (e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)
                        if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        }
                        catch (s) {
                            r.scrollHeight
                        }
                        else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function () {
        it.valHooks[this] = {
            set: function (e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, Sn = it.expr.attrHandle
        , kn = /^(?:checked|selected)$/i
        , En = nt.getSetAttribute
        , Nn = nt.input;
    it.fn.extend({
        attr: function (e, t) {
            return Pt(this, it.attr, e, t, arguments.length > 1)
        }
        , removeAttr: function (e) {
            return this.each(function () {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ct ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        }
        , removeAttr: function (e, t) {
            var n, r, i = 0
                , o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Nn && En || !kn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(En ? n : r)
        }
        , attrHooks: {
            type: {
                set: function (e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function (e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Nn && En || !kn.test(n) ? e.setAttribute(!En && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Sn[t] || it.find.attr;
        Sn[t] = Nn && En || !kn.test(t) ? function (e, t, r) {
            var i, o;
            return r || (o = Sn[t], Sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Sn[t] = o), i
        } : function (e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nn && En || (it.attrHooks.value = {
        set: function (e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }), En || (Tn = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Sn.id = Sn.name = Sn.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }
        , set: Tn.set
    }, it.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function (e, t) {
        it.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }
        , set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i
        , Pn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function (e, t) {
            return Pt(this, it.prop, e, t, arguments.length > 1)
        }
        , removeProp: function (e) {
            return e = it.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                }
                catch (t) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor"
            , "class": "className"
        }
        , prop: function (e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }
        , propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || Pn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function (e, t) {
        it.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var jn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s = 0
                , l = this.length
                , u = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = it.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        }
        , removeClass: function (e) {
            var t, n, r, i, o, a, s = 0
                , l = this.length
                , u = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        }
        , toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function (n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        }
        , hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        it.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
        , bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }
        , unbind: function (e, t) {
            return this.off(e, null, t)
        }
        , delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }
        , undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln = it.now()
        , Hn = /\?/
        , Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null
            , i = it.trim(t + "");
        return i && !it.trim(i.replace(Dn, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        }
        catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var Fn, Mn, On = /#.*$/
        , Vn = /([?&])_=[^&]*/
        , qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
        , Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , In = /^(?:GET|HEAD)$/
        , Bn = /^\/\//
        , zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , _n = {}
        , Wn = {}
        , $n = "*/".concat("*");
    try {
        Mn = location.href
    }
    catch (Xn) {
        Mn = ht.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    Fn = zn.exec(Mn.toLowerCase()) || [], it.extend({
        active: 0
        , lastModified: {}
        , etag: {}
        , ajaxSettings: {
            url: Mn
            , type: "GET"
            , isLocal: Rn.test(Fn[1])
            , global: !0
            , processData: !0
            , async: !0
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , accepts: {
                "*": $n
                , text: "text/plain"
                , html: "text/html"
                , xml: "application/xml, text/xml"
                , json: "application/json, text/javascript"
            }
            , contents: {
                xml: /xml/
                , html: /html/
                , json: /json/
            }
            , responseFields: {
                xml: "responseXML"
                , text: "responseText"
                , json: "responseJSON"
            }
            , converters: {
                "* text": String
                , "text html": !0
                , "text json": it.parseJSON
                , "text xml": it.parseXML
            }
            , flatOptions: {
                url: !0
                , context: !0
            }
        }
        , ajaxSetup: function (e, t) {
            return t ? B(B(e, it.ajaxSettings), t) : B(it.ajaxSettings, e)
        }
        , ajaxPrefilter: R(_n)
        , ajaxTransport: R(Wn)
        , ajax: function (e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = z(f, w, n)), y = _(f, y, w, i), i ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : v]), g.fireWith(d, [w, T]), l && (p.trigger("ajaxComplete", [w, f]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, f = it.ajaxSetup({}, t)
                , d = f.context || f
                , p = f.context && (d.nodeType || d.jquery) ? it(d) : it.event
                , h = it.Deferred()
                , g = it.Callbacks("once memory")
                , m = f.statusCode || {}
                , v = {}
                , y = {}
                , b = 0
                , x = "canceled"
                , w = {
                    readyState: 0
                    , getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = qn.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }
                    , getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    }
                    , setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    }
                    , overrideMimeType: function (e) {
                        return b || (f.mimeType = e), this
                    }
                    , statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    }
                    , abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Mn) + "").replace(On, "").replace(Bn, Fn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = it.trim(f.dataType || "*").toLowerCase().match(bt) || [""], null == f.crossDomain && (r = zn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Fn[1] && r[2] === Fn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Fn[3] || ("http:" === Fn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = it.param(f.data, f.traditional)), I(_n, f, t, w), 2 === b) return w;
            l = it.event && f.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !In.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Hn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Vn.test(o) ? o.replace(Vn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), f.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : f.accepts["*"]);
            for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1
                    , error: 1
                    , complete: 1
                }) w[i](f[i]);
            if (u = I(Wn, f, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, u.send(v, n)
                }
                catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            }
            else n(-1, "No Transport");
            return w
        }
        , getJSON: function (e, t, n) {
            return it.get(e, t, n, "json")
        }
        , getScript: function (e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function (e, t) {
        it[t] = function (e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: e
                , type: t
                , dataType: i
                , data: n
                , success: r
            })
        }
    }), it._evalUrl = function (e) {
        return it.ajax({
            url: e
            , type: "GET"
            , dataType: "script"
            , async: !1
            , global: !1
            , "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function (e) {
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }
        , wrapInner: function (e) {
            return this.each(it.isFunction(e) ? function (t) {
                it(this).wrapInner(e.call(this, t))
            } : function () {
                var t = it(this)
                    , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }
        , wrap: function (e) {
            var t = it.isFunction(e);
            return this.each(function (n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        }
        , unwrap: function () {
            return this.parent().each(function () {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function (e) {
        return !it.expr.filters.hidden(e)
    };
    var Qn = /%20/g
        , Un = /\[\]$/
        , Gn = /\r?\n/g
        , Yn = /^(?:submit|button|image|reset|file)$/i
        , Jn = /^(?:input|select|textarea|keygen)/i;
    it.param = function (e, t) {
        var n, r = []
            , i = function (e, t) {
                t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, i);
        return r.join("&").replace(Qn, "+")
    }, it.fn.extend({
        serialize: function () {
            return it.param(this.serializeArray())
        }
        , serializeArray: function () {
            return this.map(function () {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Jn.test(this.nodeName) && !Yn.test(e) && (this.checked || !jt.test(e))
            }).map(function (e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function (e) {
                    return {
                        name: t.name
                        , value: e.replace(Gn, "\r\n")
                    }
                }) : {
                    name: t.name
                    , value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || X()
    } : $;
    var Zn = 0
        , Kn = {}
        , er = it.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Kn) Kn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function (n, r) {
                    var i, o = e.xhr()
                        , a = ++Zn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                }
                                catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kn[a] = t : t()
                }
                , abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }
        , contents: {
            script: /(?:java|ecma)script/
        }
        , converters: {
            "text script": function (e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function (r, i) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }
                , abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = []
        , nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback"
        , jsonpCallback: function () {
            var e = tr.pop() || it.expando + "_" + Ln++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), it.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var r = ft.exec(e)
            , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function (e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, o, a = this
            , s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
            url: e
            , type: o
            , dataType: "html"
            , data: t
        }).done(function (e) {
            i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        it.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), it.expr.filters.animated = function (e) {
        return it.grep(it.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, l, u, c = it.css(e, "position")
                , f = it(e)
                , d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = it.css(e, "top"), l = it.css(e, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, l]) > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, it.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0
                    , left: 0
                }
                , i = this[0]
                , o = i && i.ownerDocument;
            if (o) return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = Q(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0)
                , left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        }
        , position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0
                        , left: 0
                    }
                    , r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(r, "marginTop", !0)
                    , left: t.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        }
        , offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || ir
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset"
        , scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function (r) {
            return Pt(this, function (e, r, i) {
                var o = Q(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function (e, t) {
        it.cssHooks[t] = E(nt.pixelPosition, function (e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height"
        , Width: "width"
    }, function (e, t) {
        it.each({
            padding: "inner" + e
            , content: t
            , "": "outer" + e
        }, function (n, r) {
            it.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                    , a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Pt(this, function (t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function () {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return it
    });
    var or = e.jQuery
        , ar = e.$;
    return it.noConflict = function (t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
    }, typeof t === Ct && (e.jQuery = e.$ = it), it
})
, function (e) {
    var t = "waitForImages";
    e.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
    }, e.expr[":"].uncached = function (t) {
        if (!e(t).is('img[src!=""]')) return !1;
        var n = new Image;
        return n.src = t.src, !n.complete
    }, e.fn.waitForImages = function (n, r, i) {
        var o = 0
            , a = 0;
        if (e.isPlainObject(arguments[0]) && (i = arguments[0].waitForAll, r = arguments[0].each, n = arguments[0].finished), n = n || e.noop, r = r || e.noop, i = !!i, !e.isFunction(n) || !e.isFunction(r)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
            var s = e(this)
                , l = []
                , u = e.waitForImages.hasImageProperties || []
                , c = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            i ? s.find("*").addBack().each(function () {
                var t = e(this);
                t.is("img:uncached") && l.push({
                    src: t.attr("src")
                    , element: t[0]
                }), e.each(u, function (e, n) {
                    var r, i = t.css(n);
                    if (!i) return !0;
                    for (; r = c.exec(i);) l.push({
                        src: r[2]
                        , element: t[0]
                    })
                })
            }) : s.find("img:uncached").each(function () {
                l.push({
                    src: this.src
                    , element: this
                })
            }), o = l.length, a = 0, 0 === o && n.call(s[0]), e.each(l, function (i, l) {
                var u = new Image;
                e(u).on("load." + t + " error." + t, function (e) {
                    return a++, r.call(l.element, a, o, "load" == e.type), a == o ? (n.call(s[0]), !1) : void 0
                }), u.src = l.src
            })
        })
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad"
        , swing: function (e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        }
        , easeInQuad: function (e, t, n, r, i) {
            return r * (t /= i) * t + n
        }
        , easeOutQuad: function (e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        }
        , easeInOutQuad: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        }
        , easeInCubic: function (e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        }
        , easeOutCubic: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        }
        , easeInOutCubic: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        }
        , easeInQuart: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        }
        , easeOutQuart: function (e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        }
        , easeInOutQuart: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        }
        , easeInQuint: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        }
        , easeOutQuint: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        }
        , easeInOutQuint: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        }
        , easeInSine: function (e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        }
        , easeOutSine: function (e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        }
        , easeInOutSine: function (e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        }
        , easeInExpo: function (e, t, n, r, i) {
            return 0 == t ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        }
        , easeOutExpo: function (e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        }
        , easeInOutExpo: function (e, t, n, r, i) {
            return 0 == t ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        }
        , easeInCirc: function (e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        }
        , easeOutCirc: function (e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        }
        , easeInOutCirc: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        }
        , easeInElastic: function (e, t, n, r, i) {
            var o = 1.70158
                , a = 0
                , s = r;
            if (0 == t) return n;
            if (1 == (t /= i)) return n + r;
            if (a || (a = .3 * i), s < Math.abs(r)) {
                s = r;
                var o = a / 4
            }
            else var o = a / (2 * Math.PI) * Math.asin(r / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - o) * Math.PI / a)) + n
        }
        , easeOutElastic: function (e, t, n, r, i) {
            var o = 1.70158
                , a = 0
                , s = r;
            if (0 == t) return n;
            if (1 == (t /= i)) return n + r;
            if (a || (a = .3 * i), s < Math.abs(r)) {
                s = r;
                var o = a / 4
            }
            else var o = a / (2 * Math.PI) * Math.asin(r / s);
            return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * i - o) * Math.PI / a) + r + n
        }
        , easeInOutElastic: function (e, t, n, r, i) {
            var o = 1.70158
                , a = 0
                , s = r;
            if (0 == t) return n;
            if (2 == (t /= i / 2)) return n + r;
            if (a || (a = .3 * i * 1.5), s < Math.abs(r)) {
                s = r;
                var o = a / 4
            }
            else var o = a / (2 * Math.PI) * Math.asin(r / s);
            return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * i - o) * Math.PI / a) * .5 + r + n
        }
        , easeInBack: function (e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * (t /= i) * t * ((o + 1) * t - o) + n
        }
        , easeOutBack: function (e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
        }
        , easeInOutBack: function (e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        }
        , easeInBounce: function (e, t, n, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
        }
        , easeOutBounce: function (e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? 7.5625 * r * t * t + n : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
        , easeInOutBounce: function (e, t, n, r, i) {
            return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
        }
    })
    , function (e) {
        function t(e) {
            var t = e.length
                , r = n.type(e);
            return "function" === r || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        if (!e.jQuery) {
            var n = function (e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function (e) {
                return null != e && e == e.window
            }, n.type = function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function (e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                }
                catch (r) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, n.each = function (e, n, r) {
                var i, o = 0
                    , a = e.length
                    , s = t(e);
                if (r) {
                    if (s)
                        for (; a > o && (i = n.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = n.apply(e[o], r), i === !1) break
                }
                else if (s)
                    for (; a > o && (i = n.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = n.call(e[o], o, e[o]), i === !1) break; return e
            }, n.data = function (e, t, i) {
                if (void 0 === i) {
                    var o = e[n.expando]
                        , a = o && r[o];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                }
                else if (void 0 !== t) {
                    var o = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return r[o] = r[o] || {}, r[o][t] = i, i
                }
            }, n.removeData = function (e, t) {
                var i = e[n.expando]
                    , o = i && r[i];
                o && n.each(t, function (e, t) {
                    delete o[t]
                })
            }, n.extend = function () {
                var e, t, r, i, o, a, s = arguments[0] || {}
                    , l = 1
                    , u = arguments.length
                    , c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (i in o) e = s[i], r = o[i], s !== r && (c && r && (n.isPlainObject(r) || (t = n.isArray(r))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[i] = n.extend(c, a, r)) : void 0 !== r && (s[i] = r));
                return s
            }, n.queue = function (e, r, i) {
                function o(e, n) {
                    var r = n || [];
                    return null != e && (t(Object(e)) ? ! function (e, t) {
                        for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                        if (n !== n)
                            for (; void 0 !== t[r];) e[i++] = t[r++];
                        return e.length = i, e
                    }(r, "string" == typeof e ? [e] : e) : [].push.call(r, e)), r
                }
                if (e) {
                    r = (r || "fx") + "queue";
                    var a = n.data(e, r);
                    return i ? (!a || n.isArray(i) ? a = n.data(e, r, o(i)) : a.push(i), a) : a || []
                }
            }, n.dequeue = function (e, t) {
                n.each(e.nodeType ? [e] : e, function (e, r) {
                    t = t || "fx";
                    var i = n.queue(r, t)
                        , o = i.shift();
                    "inprogress" === o && (o = i.shift()), o && ("fx" === t && i.unshift("inprogress"), o.call(r, function () {
                        n.dequeue(r, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function (e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                }
                , offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0
                        , left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0)
                        , left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                }
                , position: function () {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0]
                        , e = e.apply(t)
                        , r = this.offset()
                        , i = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0
                            , left: 0
                        } : n(e).offset();
                    return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: r.top - i.top
                        , left: r.left - i.left
                    }
                }
            };
            var r = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var i = {}, o = i.hasOwnProperty, a = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) i["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window)
    , function (e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function () {
        return function (e, t, n, r) {
            function i(e) {
                for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                    var i = e[t];
                    i && r.push(i)
                }
                return r
            }

            function o(e) {
                return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = d.data(e, "velocity");
                return null === t ? r : t
            }

            function s(e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, n, r, i) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function u(e, t, n) {
                    return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function c(t, n) {
                    for (var i = 0; g > i; ++i) {
                        var o = u(n, e, r);
                        if (0 === o) return n;
                        var a = l(n, e, r) - t;
                        n -= a / o
                    }
                    return n
                }

                function f() {
                    for (var t = 0; b > t; ++t) C[t] = l(t * x, e, r)
                }

                function d(t, n, i) {
                    var o, a, s = 0;
                    do a = n + (i - n) / 2, o = l(a, e, r) - t, o > 0 ? i = a : n = a; while (Math.abs(o) > v && ++s < y);
                    return a
                }

                function p(t) {
                    for (var n = 0, i = 1, o = b - 1; i != o && C[i] <= t; ++i) n += x;
                    --i;
                    var a = (t - C[i]) / (C[i + 1] - C[i])
                        , s = n + a * x
                        , l = u(s, e, r);
                    return l >= m ? c(t, s) : 0 == l ? s : d(t, n, n + x)
                }

                function h() {
                    S = !0, (e != n || r != i) && f()
                }
                var g = 4
                    , m = .001
                    , v = 1e-7
                    , y = 10
                    , b = 11
                    , x = 1 / (b - 1)
                    , w = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var T = 0; 4 > T; ++T)
                    if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T])) return !1;
                e = Math.min(e, 1), r = Math.min(r, 1), e = Math.max(e, 0), r = Math.max(r, 0);
                var C = w ? new Float32Array(b) : new Array(b)
                    , S = !1
                    , k = function (t) {
                        return S || h(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, i)
                    };
                k.getControlPoints = function () {
                    return [{
                        x: e
                        , y: n
                    }, {
                        x: r
                        , y: i
                    }]
                };
                var E = "generateBezier(" + [e, n, r, i] + ")";
                return k.toString = function () {
                    return E
                }, k
            }

            function u(e, t) {
                var n = e;
                return g.isString(e) ? b.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime()
                        , n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = i(b.State.calls));
                    for (var o = 0; n > o; o++)
                        if (b.State.calls[o]) {
                            var s = b.State.calls[o]
                                , l = s[0]
                                , u = s[2]
                                , p = s[3]
                                , h = !!p
                                , m = null;
                            p || (p = b.State.calls[o][3] = t - 16);
                            for (var v = Math.min((t - p) / u.duration, 1), y = 0, x = l.length; x > y; y++) {
                                var T = l[y]
                                    , S = T.element;
                                if (a(S)) {
                                    var k = !1;
                                    if (u.display !== r && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(E, function (e, t) {
                                                w.setPropertyValue(S, "display", t)
                                            })
                                        }
                                        w.setPropertyValue(S, "display", u.display)
                                    }
                                    u.visibility !== r && "hidden" !== u.visibility && w.setPropertyValue(S, "visibility", u.visibility);
                                    for (var N in T)
                                        if ("element" !== N) {
                                            var A, P = T[N]
                                                , j = g.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                            if (1 === v) A = P.endValue;
                                            else {
                                                var L = P.endValue - P.startValue;
                                                if (A = P.startValue + L * j(v, u, L), !h && A === P.currentValue) continue
                                            }
                                            if (P.currentValue = A, "tween" === N) m = A;
                                            else {
                                                if (w.Hooks.registered[N]) {
                                                    var H = w.Hooks.getRoot(N)
                                                        , D = a(S).rootPropertyValueCache[H];
                                                    D && (P.rootPropertyValue = D)
                                                }
                                                var F = w.setPropertyValue(S, N, P.currentValue + (0 === parseFloat(A) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                w.Hooks.registered[N] && (a(S).rootPropertyValueCache[H] = w.Normalizations.registered[H] ? w.Normalizations.registered[H]("extract", null, F[1]) : F[1]), "transform" === F[0] && (k = !0)
                                            }
                                        }
                                    u.mobileHA && a(S).transformCache.translate3d === r && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", k = !0), k && w.flushTransformCache(S)
                                }
                            }
                            u.display !== r && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== r && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], v, Math.max(0, p + u.duration - t), p, m), 1 === v && f(o)
                        }
                }
                b.State.isTicking && C(c)
            }

            function f(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var n = b.State.calls[e][0], i = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                    var f = n[u].element;
                    if (t || o.loop || ("none" === o.display && w.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(f, "visibility", o.visibility)), o.loop !== !0 && (d.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(d.queue(f)[1])) && a(f)) {
                        a(f).isAnimating = !1, a(f).rootPropertyValueCache = {};
                        var p = !1;
                        d.each(w.Lists.transforms3D, function (e, t) {
                            var n = /^scale/.test(t) ? 1 : 0
                                , i = a(f).transformCache[t];
                            a(f).transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (p = !0, delete a(f).transformCache[t])
                        }), o.mobileHA && (p = !0, delete a(f).transformCache.translate3d), p && w.flushTransformCache(f), w.Values.removeClass(f, "velocity-animating")
                    }
                    if (!t && o.complete && !o.loop && u === c - 1) try {
                        o.complete.call(i, i)
                    }
                    catch (h) {
                        setTimeout(function () {
                            throw h
                        }, 1)
                    }
                    s && o.loop !== !0 && s(i), a(f) && o.loop === !0 && !t && (d.each(a(f).tweensContainer, function (e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(f, "reverse", {
                        loop: !0
                        , delay: o.delay
                    })), o.queue !== !1 && d.dequeue(f, o.queue)
                }
                b.State.calls[e] = !1;
                for (var g = 0, m = b.State.calls.length; m > g; g++)
                    if (b.State.calls[g] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var d, p = function () {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return r
                }()
                , h = function () {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                        var n, r = (new Date).getTime();
                        return n = Math.max(0, 16 - (r - e)), e = r + n, setTimeout(function () {
                            t(r + n)
                        }, n)
                    }
                }()
                , g = {
                    isString: function (e) {
                        return "string" == typeof e
                    }
                    , isArray: Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    , isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    }
                    , isNode: function (e) {
                        return e && e.nodeType
                    }
                    , isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== r && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    }
                    , isWrapped: function (e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    }
                    , isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    }
                    , isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0
                    }
                }
                , m = !1;
            if (e.fn && e.fn.jquery ? (d = e, m = !0) : d = t.Velocity.Utilities, 8 >= p && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var v = 400
                , y = "swing"
                , b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        , isAndroid: /Android/i.test(navigator.userAgent)
                        , isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent)
                        , isChrome: t.chrome
                        , isFirefox: /Firefox/i.test(navigator.userAgent)
                        , prefixElement: n.createElement("div")
                        , prefixMatches: {}
                        , scrollAnchor: null
                        , scrollPropertyLeft: null
                        , scrollPropertyTop: null
                        , isTicking: !1
                        , calls: []
                    }
                    , CSS: {}
                    , Utilities: d
                    , Redirects: {}
                    , Easings: {}
                    , Promise: t.Promise
                    , defaults: {
                        queue: ""
                        , duration: v
                        , easing: y
                        , begin: r
                        , complete: r
                        , progress: r
                        , display: r
                        , visibility: r
                        , loop: !1
                        , delay: !1
                        , mobileHA: !0
                        , _cacheValues: !0
                    }
                    , init: function (e) {
                        d.data(e, "velocity", {
                            isSVG: g.isSVG(e)
                            , isAnimating: !1
                            , computedStyle: null
                            , tweensContainer: null
                            , rootPropertyValueCache: {}
                            , transformCache: {}
                        })
                    }
                    , hook: null
                    , mock: !1
                    , version: {
                        major: 1
                        , minor: 2
                        , patch: 2
                    }
                    , debug: !1
                };
            t.pageYOffset !== r ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var x = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, r) {
                    var i = {
                        x: t.x + r.dx * n
                        , v: t.v + r.dv * n
                        , tension: t.tension
                        , friction: t.friction
                    };
                    return {
                        dx: i.v
                        , dv: e(i)
                    }
                }

                function n(n, r) {
                    var i = {
                            dx: n.v
                            , dv: e(n)
                        }
                        , o = t(n, .5 * r, i)
                        , a = t(n, .5 * r, o)
                        , s = t(n, r, a)
                        , l = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx)
                        , u = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + l * r, n.v = n.v + u * r, n
                }
                return function r(e, t, i) {
                    var o, a, s, l = {
                            x: -1
                            , v: 0
                            , tension: null
                            , friction: null
                        }
                        , u = [0]
                        , c = 0
                        , f = 1e-4
                        , d = .016;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, l.tension = e, l.friction = t, o = null !== i, o ? (c = r(e, t), a = c / i * d) : a = d;;)
                        if (s = n(s || l, a), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > f && Math.abs(s.v) > f)) break;
                    return o ? function (e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function (e) {
                    return e
                }
                , swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
                , spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var w = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i
                    , valueUnwrap: /^[A-z]+\((.*)\)$/i
                    , wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/
                    , valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                }
                , Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"]
                    , transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"]
                    , transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                }
                , Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"]
                        , boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"]
                        , clip: ["Top Right Bottom Left", "0px 0px 0px 0px"]
                        , backgroundPosition: ["X Y", "0% 0%"]
                        , transformOrigin: ["X Y Z", "50% 50% 0px"]
                        , perspectiveOrigin: ["X Y", "50% 50%"]
                    }
                    , registered: {}
                    , register: function () {
                        for (var e = 0; e < w.Lists.colors.length; e++) {
                            var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, r, i;
                        if (p)
                            for (n in w.Hooks.templates) {
                                r = w.Hooks.templates[n], i = r[0].split(" ");
                                var o = r[1].match(w.RegEx.valueSplit);
                                "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[n] = [i.join(" "), o.join(" ")])
                            }
                        for (n in w.Hooks.templates) {
                            r = w.Hooks.templates[n], i = r[0].split(" ");
                            for (var e in i) {
                                var a = n + i[e]
                                    , s = e;
                                w.Hooks.registered[a] = [n, s]
                            }
                        }
                    }
                    , getRoot: function (e) {
                        var t = w.Hooks.registered[e];
                        return t ? t[0] : e
                    }
                    , cleanRootPropertyValue: function (e, t) {
                        return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                    }
                    , extractValue: function (e, t) {
                        var n = w.Hooks.registered[e];
                        if (n) {
                            var r = n[0]
                                , i = n[1];
                            return t = w.Hooks.cleanRootPropertyValue(r, t), t.toString().match(w.RegEx.valueSplit)[i]
                        }
                        return t
                    }
                    , injectValue: function (e, t, n) {
                        var r = w.Hooks.registered[e];
                        if (r) {
                            var i, o, a = r[0]
                                , s = r[1];
                            return n = w.Hooks.cleanRootPropertyValue(a, n), i = n.toString().match(w.RegEx.valueSplit), i[s] = t, o = i.join(" ")
                        }
                        return n
                    }
                }
                , Normalizations: {
                    registered: {
                        clip: function (e, t, n) {
                            switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var r;
                                return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(w.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;
                            case "inject":
                                return "rect(" + n + ")"
                            }
                        }
                        , blur: function (e, t, n) {
                            switch (e) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var r = parseFloat(n);
                                if (!r && 0 !== r) {
                                    var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    r = i ? i[1] : 0
                                }
                                return r;
                            case "inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        }
                        , opacity: function (e, t, n) {
                            if (8 >= p) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = r ? r[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            }
                            else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return n;
                            case "inject":
                                return n
                            }
                        }
                    }
                    , register: function () {
                        9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                        for (var e = 0; e < w.Lists.transformsBase.length; e++) ! function () {
                            var t = w.Lists.transformsBase[e];
                            w.Normalizations.registered[t] = function (e, n, i) {
                                switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return a(n) === r || a(n).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                    case "translate":
                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                        break;
                                    case "scal":
                                    case "scale":
                                        b.State.isAndroid && a(n).transformCache[t] === r && 1 > i && (i = 1), o = !/(\d)$/i.test(i);
                                        break;
                                    case "skew":
                                        o = !/(deg|\d)$/i.test(i);
                                        break;
                                    case "rotate":
                                        o = !/(deg|\d)$/i.test(i)
                                    }
                                    return o || (a(n).transformCache[t] = "(" + i + ")"), a(n).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < w.Lists.colors.length; e++) ! function () {
                            var t = w.Lists.colors[e];
                            w.Normalizations.registered[t] = function (e, n, i) {
                                switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
                                    else {
                                        var a, s = {
                                            black: "rgb(0, 0, 0)"
                                            , blue: "rgb(0, 0, 255)"
                                            , gray: "rgb(128, 128, 128)"
                                            , green: "rgb(0, 128, 0)"
                                            , red: "rgb(255, 0, 0)"
                                            , white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : w.RegEx.isHex.test(i) ? a = "rgb(" + w.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= p ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                }
                , Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    }
                    , SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    }
                    , prefixCheck: function (e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; r > n; n++) {
                            var i;
                            if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), g.isString(b.State.prefixElement.style[i])) return b.State.prefixMatches[e] = i, [i, !0]
                        }
                        return [e, !1]
                    }
                }
                , Values: {
                    hexToRgb: function (e) {
                        var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
                            , r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(n, function (e, t, n, r) {
                            return t + t + n + n + r + r
                        }), t = r.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    }
                    , isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    }
                    , getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    }
                    , getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    }
                    , addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    }
                    , removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                }
                , getPropertyValue: function (e, n, i, o) {
                    function s(e, n) {
                        function i() {
                            u && w.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p) l = d.css(e, n);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (u = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !o) {
                                if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                    return i(), c
                                }
                                if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                    return i(), f
                                }
                            }
                            var h;
                            h = a(e) === r ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = e.style[n]), i()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = d(e).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (w.Hooks.registered[n]) {
                        var u = n
                            , c = w.Hooks.getRoot(u);
                        i === r && (i = w.getPropertyValue(e, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (i = w.Normalizations.registered[c]("extract", e, i)), l = w.Hooks.extractValue(u, i)
                    }
                    else if (w.Normalizations.registered[n]) {
                        var f, h;
                        f = w.Normalizations.registered[n]("name", e), "transform" !== f && (h = s(e, w.Names.prefixCheck(f)[0]), w.Values.isCSSNullValue(h) && w.Hooks.templates[n] && (h = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", e, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(e) && a(e).isSVG && w.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = e.getBBox()[n]
                            }
                            catch (g) {
                                l = 0
                            }
                            else l = e.getAttribute(n);
                    else l = s(e, w.Names.prefixCheck(n)[0]);
                    return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                }
                , setPropertyValue: function (e, n, r, i, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? t.scrollTo(r, o.alternateValue) : t.scrollTo(o.alternateValue, r);
                    else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e)) w.Normalizations.registered[n]("inject", e, r), s = "transform", r = a(e).transformCache[n];
                    else {
                        if (w.Hooks.registered[n]) {
                            var l = n
                                , u = w.Hooks.getRoot(n);
                            i = i || w.getPropertyValue(e, u), r = w.Hooks.injectValue(l, r, i), n = u
                        }
                        if (w.Normalizations.registered[n] && (r = w.Normalizations.registered[n]("inject", e, r), n = w.Normalizations.registered[n]("name", e)), s = w.Names.prefixCheck(n)[0], 8 >= p) try {
                            e.style[s] = r
                        }
                        catch (c) {
                            b.debug && console.log("Browser does not support [" + r + "] for [" + s + "]")
                        }
                        else a(e) && a(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, r) : e.style[s] = r;
                        b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + r)
                    }
                    return [s, r]
                }
                , flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(w.getPropertyValue(e, t))
                    }
                    var n = "";
                    if ((p || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                        var r = {
                            translate: [t("translateX"), t("translateY")]
                            , skewX: [t("skewX")]
                            , skewY: [t("skewY")]
                            , scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")]
                            , rotate: [t("rotateZ"), 0, 0]
                        };
                        d.each(a(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (n += e + "(" + r[e].join(" ") + ") ", delete r[e])
                        })
                    }
                    else {
                        var i, o;
                        d.each(a(e).transformCache, function (t) {
                            return i = a(e).transformCache[t], "transformPerspective" === t ? (o = i, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + i + " "))
                        }), o && (n = "perspective" + o + " " + n)
                    }
                    w.setPropertyValue(e, "transform", n)
                }
            };
            w.Hooks.register(), w.Normalizations.register(), b.hook = function (e, t, n) {
                var i = r;
                return e = o(e), d.each(e, function (e, o) {
                    if (a(o) === r && b.init(o), n === r) i === r && (i = b.CSS.getPropertyValue(o, t));
                    else {
                        var s = b.CSS.setPropertyValue(o, t, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(o), i = s
                    }
                }), i
            };
            var T = function () {
                function e() {
                    return s ? N.promise || null : l
                }

                function i() {
                    function e() {
                        function e(e, t) {
                            var n = r
                                , i = r
                                , a = r;
                            return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (g.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], s.duration), e[2] !== r && (a = e[2]))) : n = e, t || (i = i || s.easing), g.isFunction(n) && (n = n.call(o, S, C)), g.isFunction(a) && (a = a.call(o, S, C)), [n || 0, i, a]
                        }

                        function f(e, t) {
                            var n, r;
                            return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                return n = e, ""
                            }), n || (n = w.Values.getUnitType(e)), [r, n]
                        }

                        function p() {
                            var e = {
                                    myParent: o.parentNode || n.body
                                    , position: w.getPropertyValue(o, "position")
                                    , fontSize: w.getPropertyValue(o, "fontSize")
                                }
                                , r = e.position === F.lastPosition && e.myParent === F.lastParent
                                , i = e.fontSize === F.lastFontSize;
                            F.lastParent = e.myParent, F.lastPosition = e.position, F.lastFontSize = e.fontSize;
                            var s = 100
                                , l = {};
                            if (i && r) l.emToPx = F.lastEmToPx, l.percentToPxWidth = F.lastPercentToPxWidth, l.percentToPxHeight = F.lastPercentToPxHeight;
                            else {
                                var u = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                b.init(u), e.myParent.appendChild(u), d.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                    b.CSS.setPropertyValue(u, t, "hidden")
                                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                    b.CSS.setPropertyValue(u, t, s + "%")
                                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = F.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === F.remToPx && (F.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(t.innerWidth) / 100, F.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = F.remToPx, l.vwToPx = F.vwToPx, l.vhToPx = F.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                        }
                        if (s.begin && 0 === S) try {
                            s.begin.call(h, h)
                        }
                        catch (v) {
                            setTimeout(function () {
                                throw v
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var x, T, k, E = /^x$/i.test(s.axis) ? "Left" : "Top"
                                , P = parseFloat(s.offset) || 0;
                            s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, x = s.container["scroll" + E], k = x + d(o).position()[E.toLowerCase()] + P) : s.container = null : (x = b.State.scrollAnchor[b.State["scrollProperty" + E]], T = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], k = d(o).offset()[E.toLowerCase()] + P), l = {
                                scroll: {
                                    rootPropertyValue: !1
                                    , startValue: x
                                    , currentValue: x
                                    , endValue: k
                                    , unitType: ""
                                    , easing: s.easing
                                    , scrollData: {
                                        container: s.container
                                        , direction: E
                                        , alternateValue: T
                                    }
                                }
                                , element: o
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                        }
                        else if ("reverse" === A) {
                            if (!a(o).tweensContainer) return void d.dequeue(o, s.queue);
                            "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = d.extend({}, a(o).opts, s);
                            var j = d.extend(!0, {}, a(o).tweensContainer);
                            for (var L in j)
                                if ("element" !== L) {
                                    var H = j[L].startValue;
                                    j[L].startValue = j[L].currentValue = j[L].endValue, j[L].endValue = H, g.isEmptyObject(y) || (j[L].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(j[L]), o)
                                }
                            l = j
                        }
                        else if ("start" === A) {
                            var j;
                            a(o).tweensContainer && a(o).isAnimating === !0 && (j = a(o).tweensContainer), d.each(m, function (t, n) {
                                if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = e(n, !0)
                                        , o = i[0]
                                        , a = i[1]
                                        , s = i[2];
                                    if (w.RegEx.isHex.test(o)) {
                                        for (var l = ["Red", "Green", "Blue"], u = w.Values.hexToRgb(o), c = s ? w.Values.hexToRgb(s) : r, f = 0; f < l.length; f++) {
                                            var d = [u[f]];
                                            a && d.push(a), c !== r && d.push(c[f]), m[t + l[f]] = d
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var D in m) {
                                var O = e(m[D])
                                    , V = O[0]
                                    , q = O[1]
                                    , R = O[2];
                                D = w.Names.camelCase(D);
                                var I = w.Hooks.getRoot(D)
                                    , B = !1;
                                if (a(o).isSVG || "tween" === I || w.Names.prefixCheck(I)[1] !== !1 || w.Normalizations.registered[I] !== r) {
                                    (s.display !== r && null !== s.display && "none" !== s.display || s.visibility !== r && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !R && 0 !== V && (R = 0), s._cacheValues && j && j[D] ? (R === r && (R = j[D].endValue + j[D].unitType), B = a(o).rootPropertyValueCache[I]) : w.Hooks.registered[D] ? R === r ? (B = w.getPropertyValue(o, I), R = w.getPropertyValue(o, D, B)) : B = w.Hooks.templates[I][1] : R === r && (R = w.getPropertyValue(o, D));
                                    var z, _, W, $ = !1;
                                    if (z = f(D, R), R = z[0], W = z[1], z = f(D, V), V = z[0].replace(/^([+-\/*])=/, function (e, t) {
                                            return $ = t, ""
                                        }), _ = z[1], R = parseFloat(R) || 0, V = parseFloat(V) || 0, "%" === _ && (/^(fontSize|lineHeight)$/.test(D) ? (V /= 100, _ = "em") : /^scale/.test(D) ? (V /= 100, _ = "") : /(Red|Green|Blue)$/i.test(D) && (V = V / 100 * 255, _ = "")), /[\/*]/.test($)) _ = W;
                                    else if (W !== _ && 0 !== R)
                                        if (0 === V) _ = W;
                                        else {
                                            i = i || p();
                                            var X = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                            switch (W) {
                                            case "%":
                                                R *= "x" === X ? i.percentToPxWidth : i.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                R *= i[W + "ToPx"]
                                            }
                                            switch (_) {
                                            case "%":
                                                R *= 1 / ("x" === X ? i.percentToPxWidth : i.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                R *= 1 / i[_ + "ToPx"]
                                            }
                                        }
                                    switch ($) {
                                    case "+":
                                        V = R + V;
                                        break;
                                    case "-":
                                        V = R - V;
                                        break;
                                    case "*":
                                        V = R * V;
                                        break;
                                    case "/":
                                        V = R / V
                                    }
                                    l[D] = {
                                        rootPropertyValue: B
                                        , startValue: R
                                        , currentValue: R
                                        , endValue: V
                                        , unitType: _
                                        , easing: q
                                    }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), o)
                                }
                                else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                            }
                            l.element = o
                        }
                        l.element && (w.Values.addClass(o, "velocity-animating"), M.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, S === C - 1 ? (b.State.calls.push([M, h, s, null, N.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : S++)
                    }
                    var i, o = this
                        , s = d.extend({}, b.defaults, y)
                        , l = {};
                    switch (a(o) === r && b.init(o), parseFloat(s.delay) && s.queue !== !1 && d.queue(o, s.queue, function (e) {
                        b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay))
                            , next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = v;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== r && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== r && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : d.queue(o, s.queue, function (t, n) {
                        return n === !0 ? (N.promise && N.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
                }
                var s, l, p, h, m, y, x = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (s = !1, p = 0, h = this, l = this) : (s = !0, p = 1, h = x ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
                    x ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[p], y = arguments[p + 1]);
                    var C = h.length
                        , S = 0;
                    if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(y)) {
                        var k = p + 1;
                        y = {};
                        for (var E = k; E < arguments.length; E++) g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? y.easing = arguments[E] : g.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                    }
                    var N = {
                        promise: null
                        , resolver: null
                        , rejecter: null
                    };
                    s && b.Promise && (N.promise = new b.Promise(function (e, t) {
                        N.resolver = e, N.rejecter = t
                    }));
                    var A;
                    switch (m) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        d.each(h, function (e, t) {
                            a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                        });
                        var P = [];
                        return d.each(b.State.calls, function (e, t) {
                            t && d.each(t[1], function (n, i) {
                                var o = y === r ? "" : y;
                                return o === !0 || t[2].queue === o || y === r && t[2].queue === !1 ? void d.each(h, function (n, r) {
                                    r === i && ((y === !0 || g.isString(y)) && (d.each(d.queue(r, g.isString(y) ? y : ""), function (e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), d.queue(r, g.isString(y) ? y : "", [])), "stop" === m ? (a(r) && a(r).tweensContainer && o !== !1 && d.each(a(r).tweensContainer, function (e, t) {
                                        t.endValue = t.currentValue
                                    }), P.push(e)) : "finish" === m && (t[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === m && (d.each(P, function (e, t) {
                            f(t, !0)
                        }), N.promise && N.resolver(h)), e();
                    default:
                        if (!d.isPlainObject(m) || g.isEmptyObject(m)) {
                            if (g.isString(m) && b.Redirects[m]) {
                                var j = d.extend({}, y)
                                    , L = j.duration
                                    , H = j.delay || 0;
                                return j.backwards === !0 && (h = d.extend(!0, [], h).reverse()), d.each(h, function (e, t) {
                                    parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : g.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, C)), j.drag && (j.duration = parseFloat(L) || (/^(callout|transition)/.test(m) ? 1e3 : v), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / C : (e + 1) / C), .75 * j.duration, 200)), b.Redirects[m].call(t, t, j || {}, e, C, h, N.promise ? N : r)
                                }), e()
                            }
                            var D = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return N.promise ? N.rejecter(new Error(D)) : console.log(D), e()
                        }
                        A = "start"
                    }
                    var F = {
                            lastParent: null
                            , lastPosition: null
                            , lastFontSize: null
                            , lastPercentToPxWidth: null
                            , lastPercentToPxHeight: null
                            , lastEmToPx: null
                            , remToPx: null
                            , vwToPx: null
                            , vhToPx: null
                        }
                        , M = [];
                    d.each(h, function (e, t) {
                        g.isNode(t) && i.call(t)
                    });
                    var O, j = d.extend({}, b.defaults, y);
                    if (j.loop = parseInt(j.loop), O = 2 * j.loop - 1, j.loop)
                        for (var V = 0; O > V; V++) {
                            var q = {
                                delay: j.delay
                                , progress: j.progress
                            };
                            V === O - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), T(h, "reverse", q)
                        }
                    return e()
                }
            };
            b = d.extend(T, b), b.animate = T;
            var C = t.requestAnimationFrame || h;
            return b.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function () {
                n.hidden ? (C = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, c()) : C = t.requestAnimationFrame || h
            }), e.Velocity = b, e !== t && (e.fn.velocity = T, e.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function (e, t) {
                b.Redirects["slide" + t] = function (e, n, i, o, a, s) {
                    var l = d.extend({}, n)
                        , u = l.begin
                        , c = l.complete
                        , f = {
                            height: ""
                            , marginTop: ""
                            , marginBottom: ""
                            , paddingTop: ""
                            , paddingBottom: ""
                        }
                        , p = {};
                    l.display === r && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        u && u.call(a, a);
                        for (var n in f) {
                            p[n] = e.style[n];
                            var r = b.CSS.getPropertyValue(e, n);
                            f[n] = "Down" === t ? [r, 0] : [0, r]
                        }
                        p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in p) e.style[t] = p[t];
                        c && c.call(a, a), s && s.resolver(a)
                    }, b(e, f, l)
                }
            }), d.each(["In", "Out"], function (e, t) {
                b.Redirects["fade" + t] = function (e, n, i, o, a, s) {
                    var l = d.extend({}, n)
                        , u = {
                            opacity: "In" === t ? 1 : 0
                        }
                        , c = l.complete;
                    l.complete = i !== o - 1 ? l.begin = null : function () {
                        c && c.call(a, a), s && s.resolver(a)
                    }, l.display === r && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })
    , function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.viewportUnitsBuggyfill = t()
    }(this, function () {
        "use strict";

        function e(e, t) {
            var n;
            return function () {
                var r = this
                    , i = arguments
                    , o = function () {
                        e.apply(r, i)
                    };
                clearTimeout(n), n = setTimeout(o, t)
            }
        }

        function t() {
            try {
                return window.self !== window.top
            }
            catch (e) {
                return !0
            }
        }

        function n(n) {
            b || (n === !0 && (n = {
                force: !0
            }), g = n || {}, g.isMobileSafari = k, g.isBadStockAndroid = E, (g.force || k || C || E || S || g.hacks && g.hacks.required(g)) && (g.hacks && g.hacks.initialize(g), b = !0, y = document.createElement("style"), y.id = "patched-viewport", document.head.appendChild(y), f(function () {
                var n = e(i, g.refreshDebounceWait || 100);
                window.addEventListener("orientationchange", n, !0), window.addEventListener("pageshow", n, !0), (g.force || C || t()) && (window.addEventListener("resize", n, !0), g._listeningToResize = !0), g.hacks && g.hacks.initializeEvents(g, i, n), i()
            })))
        }

        function r() {
            y.textContent = s()
        }

        function i() {
            b && (o(), setTimeout(function () {
                r()
            }, 1))
        }

        function o() {
            return v = [], T.call(document.styleSheets, function (e) {
                "patched-viewport" !== e.ownerNode.id && e.cssRules && "ignore" !== e.ownerNode.getAttribute("data-viewport-units-buggyfill") && (e.media && e.media.mediaText && window.matchMedia && !window.matchMedia(e.media.mediaText).matches || T.call(e.cssRules, a))
            }), v
        }

        function a(e) {
            if (7 === e.type) {
                var t;
                try {
                    t = e.cssText
                }
                catch (n) {
                    return
                }
                return w.lastIndex = 0, void(w.test(t) && (v.push([e, null, t]), g.hacks && g.hacks.findDeclarations(v, e, null, t)))
            }
            if (!e.style) {
                if (!e.cssRules) return;
                return void T.call(e.cssRules, function (e) {
                    a(e)
                })
            }
            T.call(e.style, function (t) {
                var n = e.style.getPropertyValue(t);
                w.lastIndex = 0, w.test(n) && (v.push([e, t, n]), g.hacks && g.hacks.findDeclarations(v, e, t, n))
            })
        }

        function s() {
            m = c();
            var e, t, n = []
                , r = [];
            return v.forEach(function (i) {
                var o = l.apply(null, i)
                    , a = o.selector.length ? o.selector.join(" {\n") + " {\n" : ""
                    , s = new Array(o.selector.length + 1).join("\n}");
                return a && a === e ? (a && !e && (e = a, t = s), void r.push(o.content)) : (r.length && (n.push(e + r.join("\n") + t), r.length = 0), void(a ? (e = a, t = s, r.push(o.content)) : (n.push(o.content), e = null, t = null)))
            }), r.length && n.push(e + r.join("\n") + t), S && n.push("* { content: normal !important; }"), n.join("\n\n")
        }

        function l(e, t, n) {
            var r, i = [];
            r = n.replace(w, u), g.hacks && (r = g.hacks.overwriteDeclaration(e, t, r)), t && (i.push(e.selectorText), r = t + ": " + r + ";");
            for (var o = e.parentRule; o;) i.unshift("@media " + o.media.mediaText), o = o.parentRule;
            return {
                selector: i
                , content: r
            }
        }

        function u(e, t, n) {
            var r = m[n]
                , i = parseFloat(t) / 100;
            return i * r + "px"
        }

        function c() {
            var e = window.innerHeight
                , t = window.innerWidth;
            return {
                vh: e
                , vw: t
                , vmax: Math.max(t, e)
                , vmin: Math.min(t, e)
            }
        }

        function f(e) {
            var t = 0
                , n = function () {
                    t--, t || e()
                };
            T.call(document.styleSheets, function (e) {
                e.href && d(e.href) !== d(location.href) && (t++, p(e.ownerNode, n))
            }), t || e()
        }

        function d(e) {
            return e.slice(0, e.indexOf("/", e.indexOf("://") + 3))
        }

        function p(e, t) {
            h(e.href, function () {
                var n = document.createElement("style");
                n.media = e.media, n.setAttribute("data-href", e.href), n.textContent = this.responseText, e.parentNode.replaceChild(n, e), t()
            }, t)
        }

        function h(e, t, n) {
            var r = new XMLHttpRequest;
            if ("withCredentials" in r) r.open("GET", e, !0);
            else {
                if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                r = new XDomainRequest, r.open("GET", e)
            }
            return r.onload = t, r.onerror = n, r.send(), r
        }
        var g, m, v, y, b = !1
            , x = window.navigator.userAgent
            , w = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g
            , T = [].forEach
            , C = !1
            , S = x.indexOf("Opera Mini") > -1
            , k = /(iPhone|iPod|iPad).+AppleWebKit/i.test(x) && function () {
                var e = x.match(/OS (\d)/);
                return e && e.length > 1 && parseInt(e[1]) < 8
            }()
            , E = function () {
                var e = x.indexOf(" Android ") > -1;
                if (!e) return !1;
                var t = x.indexOf("Version/") > -1;
                if (!t) return !1;
                var n = parseFloat((x.match("Android ([0-9.]+)") || [])[1]);
                return 4.4 >= n
            }();
        return C || (C = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)), {
            version: "0.5.0"
            , findProperties: o
            , getCss: s
            , init: n
            , refresh: i
        }
    });