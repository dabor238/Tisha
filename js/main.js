function _main_menu() {
    var t = document.getElementById("top-bar"),
        e = document.getElementById("top-bar__navigation-toggler"),
        i = document.getElementById("top-bar__navigation"),
        n = $(t),
        s = $(e),
        o = $(i),
        r = o.find("li a"),
        a = $(nStartScreen).innerHeight() - 80;
    window.onscroll = function () {
        (window.pageYOffset || document.documentElement.scrollTop) >= a ? n.addClass("fixed in") : n.hasClass("fixed") && (n.removeClass("in").addClass("out"), setTimeout(function () {
            n.removeClass("fixed out")
        }, 100))
    }, r.on("touchend click", function (t) {
        if (t.preventDefault(), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && $("html,body").stop().animate({
                scrollTop: e.offset().top - 80
            }, 1e3)
        }
        return s.is(":visible") && (n.removeClass("expanded"), s.removeClass("active")), !1
    }), s.on("touchend click", function (t) {
        t.preventDefault();
        var e = $(this);
        return e.toggleClass("active"), n.toggleClass("expanded"), !1
    }), $window.smartresize(function () {
        $(this).width() > 991 && (s.removeClass("active"), n.removeClass("expanded"))
    })
}

function _home_slider() {
    var t = $(nStartScreen).children(".start-screen__slider");
    if (t.length > 0) {
        var e, i, n = [{
            name: "img 1",
            src: "img/home_img/1.jpg"
        }, {
            name: "img 2",
            src: "img/home_img/2.jpg"
        }, {
            name: "img 3",
            src: "img/home_img/3.jpg"
        }],
            s = $(".start-screen__content");
        t.vegas({
            timer: !1,
            transition: ["fade", "zoomOut", "blur", "swirlLeft", "swirlRight"],
            transitionDuration: 4e3,
            delay: 5e3,
            slides: n,
            overlay: "img/home_img/overlays/03.png",
            init: function (t) {
                if (1 == this.data("dots")) {
                    var o = this,
                        r = $('<nav class="vegas-dots"></nav>');
                    o.find(".vegas-control").append(r);
                    for (var a = 0; a < n.length; a++) i = $('<a "href="#" class="paginatorLink"></a>'), i.on("click", function (t) {
                        t.preventDefault(), o.vegas("jump", r.find("a").index(this))
                    }), r.append(i);
                    e = r.find("a"), e.eq(0).addClass("active"), s.eq(0).addClass("active")
                }
            },
            play: function (t, e) { },
            walk: function (t, i) {
                1 == this.data("dots") && e.removeClass("active").eq(t).addClass("active"), s.removeClass("active").eq(t).addClass("active")
            }
        })
    }
}

function _owl_carousel() {
    var t = $(".feedback-slider--style-1"),
        e = $(".feedback-slider--style-2");
    t.length > 0 && t.children(".owl-carousel").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        autoHeight: !0,
        smartSpeed: 1e3,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    }), e.length > 0 && e.children(".owl-carousel").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        autoHeight: !0,
        smartSpeed: 1e3,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
}

function _g_map() {
    var t = $(".g_map");
    t.length > 0 && t.each(function () {
        var t = $(this),
            e = new google.maps.LatLng(t.attr("data-longitude"), t.attr("data-latitude")),
            i = t.attr("data-marker"),
            n = {
                zoom: 14,
                center: e,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: !1,
                scrollwheel: !1,
                draggable: !0,
                panControl: !1,
                zoomControl: !1,
                disableDefaultUI: !0
            },
            s = [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }]
            }],
            o = new google.maps.Map(t[0], n),
            r = new google.maps.StyledMapType(s, {
                name: "Grayscale"
            });
        o.mapTypes.set("Grayscale", r), o.setMapTypeId("Grayscale");
        new google.maps.Marker({
            map: o,
            icon: {
                size: new google.maps.Size(66, 56),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(20, 56),
                url: i
            },
            position: e
        });
        google.maps.event.addDomListener(window, "resize", function () {
            var t = o.getCenter();
            google.maps.event.trigger(o, "resize"), o.setCenter(t)
        })
    })
}

function _parallax() {
    device.desktop() && ($.stellar({
        scrollProperty: "scroll",
        verticalOffset: 0,
        horizontalOffset: 0,
        horizontalScrolling: !1
    }), $window.smartresize(function () {
        $.stellar("refresh")
    }))
}

function _scrollTop() {
    var t = document.getElementById("btn-to-top-wrap"),
        e = $(t);
    if (e.length > 0) {
        var i = document.getElementById("btn-to-top"),
            n = $(i);
        n.on("click", function (t) {
            return t.preventDefault(), $("body,html").stop().animate({
                scrollTop: 0
            }, 1500), !1
        }), $window.on("scroll", function (t) {
            $window.scrollTop() > n.data("visible-offset") ? e.is(":hidden") && e.fadeIn() : e.is(":visible") && e.fadeOut()
        })
    }
}

function _scrollTop2() {
    var t = document.getElementById("btn-to-top-wrap2"),
        e = $(t);
    if (e.length > 0) {
        var i = document.getElementById("btn-to-top2"),
            n = $(i);
        n.on("click", function (t) {
            return t.preventDefault(), $("body,html").stop().animate({
                scrollTop: 0
            }, 1500), !1
        }), $window.on("scroll", function (t) {
            $window.scrollTop() > n.data("visible-offset") ? e.is(":hidden") && e.fadeIn() : e.is(":visible") && e.fadeOut()
        })
    }
}

function _gall() {
    var t = $("a[data-gallery]");
    t.length > 0 && t.boxer({
        fixed: !0,
        videoWidth: 800
    })
}

function _equal_height() {
    $(".matchHeight-container").each(function () {
        $(this).find(".matchHeight-item").matchHeight({
            byRow: !0,
            property: "height"
        })
    })
}
if (! function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
} : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = ot.type(t);
            return "function" !== i && !ot.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
}

        function n(t, e, i) {
            if (ot.isFunction(e)) return ot.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
});
            if (e.nodeType) return ot.grep(t, function (t) {
                return t === e !== i
});
            if ("string" == typeof e) {
                if (gt.test(e)) return ot.filter(e, t, i);
                e = ot.filter(e, t)
}
            return ot.grep(t, function (t) {
                return J.call(e, t) > -1 !== i
})
}

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
}

        function o(t) {
            var e = {};
            return ot.each(t.match(bt) || [], function (t, i) {
                e[i] = !0
}), e
}

        function r() {
            G.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), ot.ready()
}

        function a() {
            this.expando = ot.expando + a.uid++
}

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(Et, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? ot.parseJSON(i) : i)
} catch (t) { }
                    Ht.set(t, e, i)
} else i = void 0;
            return i
}

        function c(t, e, i, n) {
            var s, o = 1,
                r = 20,
                a = n ? function () {
                    return n.cur()
} : function () {
                    return ot.css(t, e, "")
},
                l = a(),
                c = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                h = (ot.cssNumber[e] || "px" !== c && +l) && Lt.exec(ot.css(t, e));
            if (h && h[3] !== c) {
                c = c || h[3], i = i || [], h = +l || 1;
                do o = o || ".5", h /= o, ot.style(t, e, h + c); while (o !== (o = a() / l) && 1 !== o && --r)
}
            return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
}

        function h(t, e) {
            var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], i) : i
}

        function u(t, e) {
            for (var i = 0, n = t.length; n > i; i++) Ct.set(t[i], "globalEval", !e || Ct.get(e[i], "globalEval"))
}

        function d(t, e, i, n, s) {
            for (var o, r, a, l, c, d, p = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
                if (o = t[g], o || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(f, o.nodeType ? [o] : o);
else if (Nt.test(o)) {
                for (r = r || p.appendChild(e.createElement("div")), a = (At.exec(o) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, r.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) r = r.lastChild;
                ot.merge(f, r.childNodes), r = p.firstChild, r.textContent = ""
} else f.push(e.createTextNode(o));
            for (p.textContent = "", g = 0; o = f[g++];)
                if (n && ot.inArray(o, n) > -1) s && s.push(o);
else if (c = ot.contains(o.ownerDocument, o), r = h(p.appendChild(o), "script"), c && u(r), i)
                for (d = 0; o = r[d++];) Ot.test(o.type || "") && i.push(o);
            return p
}

        function p() {
            return !0
}

        function f() {
            return !1
}

        function g() {
            try {
                return G.activeElement
} catch (t) { }
}

        function m(t, e, i, n, s, o) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) m(t, a, i, n, e[a], o);
                return t
}
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1) s = f;
else if (!s) return t;
            return 1 === o && (r = s, s = function (t) {
                return ot().off(t), r.apply(this, arguments)
}, s.guid = r.guid || (r.guid = ot.guid++)), t.each(function () {
                ot.event.add(this, e, s, n, i)
})
}

        function v(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
}

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
}

        function w(t) {
            var e = Bt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
}

        function x(t, e) {
            var i, n, s, o, r, a, l, c;
            if (1 === e.nodeType) {
                if (Ct.hasData(t) && (o = Ct.access(t), r = Ct.set(e, o), c = o.events)) {
                    delete r.handle, r.events = {};
                    for (s in c)
                        for (i = 0, n = c[s].length; n > i; i++) ot.event.add(e, s, c[s][i])
}
                Ht.hasData(t) && (a = Ht.access(t), l = ot.extend({}, a), Ht.set(e, l))
}
}

        function b(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && jt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
}

        function _(t, e, i, n) {
            e = Z.apply([], e);
            var s, o, r, a, l, c, u = 0,
                p = t.length,
                f = p - 1,
                g = e[0],
                m = ot.isFunction(g);
            if (m || p > 1 && "string" == typeof g && !nt.checkClone && Ft.test(g)) return t.each(function (s) {
                var o = t.eq(s);
                m && (e[0] = g.call(this, s, o.html())), _(o, e, i, n)
});
            if (p && (s = d(e, t[0].ownerDocument, !1, t, n), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
                for (r = ot.map(h(s, "script"), y), a = r.length; p > u; u++) l = s, u !== f && (l = ot.clone(l, !0, !0), a && ot.merge(r, h(l, "script"))), i.call(t[u], l, u);
                if (a)
                    for (c = r[r.length - 1].ownerDocument, ot.map(r, w), u = 0; a > u; u++) l = r[u], Ot.test(l.type || "") && !Ct.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Vt, "")))
}
            return t
}

        function $(t, e, i) {
            for (var n, s = e ? ot.filter(e, t) : t, o = 0; null != (n = s[o]) ; o++) i || 1 !== n.nodeType || ot.cleanData(h(n)), n.parentNode && (i && ot.contains(n.ownerDocument, n) && u(h(n, "script")), n.parentNode.removeChild(n));
            return t
}

        function T(t, e) {
            var i = ot(e.createElement(t)).appendTo(e.body),
                n = ot.css(i[0], "display");
            return i.detach(), n
}

        function C(t) {
            var e = G,
                i = Xt[t];
            return i || (i = T(t, e), "none" !== i && i || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), i = T(t, e), Ut.detach()), Xt[t] = i), i
}

        function H(t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || Yt(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== r && void 0 !== r || ot.contains(t.ownerDocument, t) || (r = ot.style(t, e)), i && !nt.pixelMarginRight() && Gt.test(r) && Qt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), void 0 !== r ? r + "" : r
}

        function k(t, e) {
            return {
    get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
}
}
}

        function E(t) {
            if (t in ne) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
                if (t = ie[i] + e, t in ne) return t
}

        function S(t, e, i) {
            var n = Lt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
}

        function L(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += ot.css(t, i + Dt[o], !0, s)), n ? ("content" === i && (r -= ot.css(t, "padding" + Dt[o], !0, s)), "margin" !== i && (r -= ot.css(t, "border" + Dt[o] + "Width", !0, s))) : (r += ot.css(t, "padding" + Dt[o], !0, s), "padding" !== i && (r += ot.css(t, "border" + Dt[o] + "Width", !0, s)));
            return r
}

        function D(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Yt(t),
                r = "border-box" === ot.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = H(t, e, o), (0 > s || null == s) && (s = t.style[e]), Gt.test(s)) return s;
                n = r && (nt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
}
            return s + L(t, e, i || (r ? "border" : "content"), n, o) + "px"
}

        function W(t, e) {
            for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = Ct.get(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Wt(n) && (o[r] = Ct.access(n, "olddisplay", C(n.nodeName)))) : (s = Wt(n), "none" === i && s || Ct.set(n, "olddisplay", s ? i : ot.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
            return t
}

        function j(t, e, i, n, s) {
            return new j.prototype.init(t, e, i, n, s)
}

        function A() {
            return t.setTimeout(function () {
                se = void 0
}), se = ot.now()
}

        function O(t, e) {
            var i, n = 0,
                s = {
    height: t
};
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Dt[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
}

        function z(t, e, i) {
            for (var n, s = (P.tweeners[e] || []).concat(P.tweeners["*"]), o = 0, r = s.length; r > o; o++)
                if (n = s[o].call(i, e, t)) return n
}

        function N(t, e, i) {
            var n, s, o, r, a, l, c, h, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && Wt(t),
                g = Ct.get(t, "fxshow");
            i.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
}), a.unqueued++, u.always(function () {
                u.always(function () {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
})
})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(t, "display"), h = "none" === c ? Ct.get(t, "olddisplay") || C(t.nodeName) : c, "inline" === h && "none" === ot.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function () {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
}));
            for (n in e)
                if (s = e[n], re.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        f = !0
}
                    d[n] = g && g[n] || ot.style(t, n)
} else c = void 0;
            if (ot.isEmptyObject(d)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c);
else {
                g ? "hidden" in g && (f = g.hidden) : g = Ct.access(t, "fxshow", {}), o && (g.hidden = !f), f ? ot(t).show() : u.done(function () {
                    ot(t).hide()
}), u.done(function () {
                    var e;
                    Ct.remove(t, "fxshow");
                    for (e in d) ot.style(t, e, d[e])
});
                for (n in d) r = z(f ? g[n] : 0, n, u), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
}
}

        function I(t, e) {
            var i, n, s, o, r;
            for (i in t)
                if (n = ot.camelCase(i), s = e[n], o = t[i], ot.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = ot.cssHooks[n], r && "expand" in r) {
                    o = r.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
} else e[n] = s
}

        function P(t, e, i) {
            var n, s, o = 0,
                r = P.prefilters.length,
                a = ot.Deferred().always(function () {
                    delete l.elem
}),
                l = function () {
                    if (s) return !1;
                    for (var e = se || A(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
                    return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
},
                c = a.promise({
    elem: t,
    props: ot.extend({}, e),
    opts: ot.extend(!0, {
    specialEasing: {},
    easing: ot.easing._default
}, i),
    originalProperties: e,
    originalOptions: i,
    startTime: se || A(),
    duration: i.duration,
    tweens: [],
    createTween: function (e, i) {
                        var n = ot.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
},
    stop: function (e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
}
}),
                h = c.props;
            for (I(h, c.opts.specialEasing) ; r > o; o++)
                if (n = P.prefilters[o].call(c, t, h, c.opts)) return ot.isFunction(n.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(n.stop, n)), n;
            return ot.map(h, z, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
    elem: t,
    anim: c,
    queue: c.opts.queue
})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}

        function M(t) {
            return t.getAttribute && t.getAttribute("class") || ""
}

        function q(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
}
}

        function R(t, e, i, n) {
            function s(a) {
                var l;
                return o[a] = !0, ot.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
}), l
}
            var o = {},
                r = t === He;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
}

        function F(t, e) {
            var i, n, s = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
}

        function B(t, e, i) {
            for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (s in a)
                    if (a[s] && a[s].test(n)) {
                        l.unshift(s);
                        break
}
            if (l[0] in i) o = l[0];
else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
}
                    r || (r = s)
}
                o = o || r
}
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
}

        function V(t, e, i, n) {
            var s, o, r, a, l, c = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (o = h.shift() ; o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                    if ("*" === o) o = l;
else if ("*" !== l && l !== o) {
                if (r = c[l + " " + o] || c["* " + o], !r)
                    for (s in c)
                        if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], h.unshift(a[1]));
                            break
}
                if (r !== !0)
                    if (r && t.throws) e = r(e);
else try {
                        e = r(e)
} catch (t) {
                        return {
    state: "parsererror",
    error: r ? t : "No conversion from " + l + " to " + o
}
}
}
            return {
    state: "success",
    data: e
}
}

        function U(t, e, i, n) {
            var s;
            if (ot.isArray(e)) ot.each(e, function (e, s) {
                i || Le.test(t) ? n(t, s) : U(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
});
else if (i || "object" !== ot.type(e)) n(t, e);
else
                for (s in e) U(t + "[" + s + "]", e[s], i, n)
}

        function X(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
}
        var Q = [],
            G = t.document,
            Y = Q.slice,
            Z = Q.concat,
            K = Q.push,
            J = Q.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            st = "2.2.4",
            ot = function (t, e) {
                return new ot.fn.init(t, e)
},
            rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ct = function (t, e) {
                return e.toUpperCase()
};
        ot.fn = ot.prototype = {
    jquery: st,
    constructor: ot,
    selector: "",
    length: 0,
    toArray: function () {
                return Y.call(this)
},
    get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
},
    pushStack: function (t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
},
    each: function (t) {
                return ot.each(this, t)
},
    map: function (t) {
                return this.pushStack(ot.map(this, function (e, i) {
                    return t.call(e, i, e)
}))
},
    slice: function () {
                return this.pushStack(Y.apply(this, arguments))
},
    first: function () {
                return this.eq(0)
},
    last: function () {
                return this.eq(-1)
},
    eq: function (t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
},
    end: function () {
                return this.prevObject || this.constructor()
},
    push: K,
    sort: Q.sort,
    splice: Q.splice
}, ot.extend = ot.fn.extend = function () {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ot.isFunction(r) || (r = {}), a === l && (r = this, a--) ; l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], n = t[e], r !== n && (c && n && (ot.isPlainObject(n) || (s = ot.isArray(n))) ? (s ? (s = !1, o = i && ot.isArray(i) ? i : []) : o = i && ot.isPlainObject(i) ? i : {}, r[e] = ot.extend(c, o, n)) : void 0 !== n && (r[e] = n));
            return r
}, ot.extend({
    expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (t) {
                throw new Error(t)
},
    noop: function () { },
    isFunction: function (t) {
                return "function" === ot.type(t)
},
    isArray: Array.isArray,
    isWindow: function (t) {
                return null != t && t === t.window
},
    isNumeric: function (t) {
                var e = t && t.toString();
                return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
},
    isPlainObject: function (t) {
                var e;
                if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || it.call(t, e)
},
    isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
},
    type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
},
    globalEval: function (t) {
                var e, i = eval;
                t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
},
    camelCase: function (t) {
                return t.replace(at, "ms-").replace(lt, ct)
},
    nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
},
    each: function (t, e) {
                var n, s = 0;
                if (i(t))
                    for (n = t.length; n > s && e.call(t[s], s, t[s]) !== !1; s++);
else
                    for (s in t)
                        if (e.call(t[s], s, t[s]) === !1) break; return t
},
    trim: function (t) {
                return null == t ? "" : (t + "").replace(rt, "")
},
    makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ot.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
},
    inArray: function (t, e, i) {
                return null == e ? -1 : J.call(e, t, i)
},
    merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
                return t.length = s, t
},
    grep: function (t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
                return s
},
    map: function (t, e, n) {
                var s, o, r = 0,
                    a = [];
                if (i(t))
                    for (s = t.length; s > r; r++) o = e(t[r], r, n), null != o && a.push(o);
else
                    for (r in t) o = e(t[r], r, n), null != o && a.push(o);
                return Z.apply([], a)
},
    guid: 1,
    proxy: function (t, e) {
                var i, n, s;
                return "string" == typeof e && (i = t[e], e = t, t = i), ot.isFunction(t) ? (n = Y.call(arguments, 2), s = function () {
                    return t.apply(e || this, n.concat(Y.call(arguments)))
}, s.guid = t.guid = t.guid || ot.guid++, s) : void 0
},
    now: Date.now,
    support: nt
}), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Q[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
});
        var ht = function (t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, c, u, p, f = e && e.ownerDocument,
                    g = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
                if (!n && ((e ? e.ownerDocument || e : M) !== W && D(e), e = e || W, A)) {
                    if (11 !== g && (c = vt.exec(t)))
                        if (s = c[1]) {
                            if (9 === g) {
                                if (!(r = e.getElementById(s))) return i;
                                if (r.id === s) return i.push(r), i
} else if (f && (r = f.getElementById(s)) && I(e, r) && r.id === s) return i.push(r), i
} else {
                            if (c[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = c[3]) && b.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), i
}
                    if (b.qsa && !V[t + " "] && (!O || !O.test(t))) {
                        if (1 !== g) f = e, p = t;
else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = P), u = C(t), o = u.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) u[o] = l + " " + d(u[o]);
                            p = u.join(","), f = yt.test(t) && h(e.parentNode) || e
}
                        if (p) try {
                            return K.apply(i, f.querySelectorAll(p)), i
} catch (t) { } finally {
                            a === P && e.removeAttribute("id")
}
}
}
                return k(t.replace(at, "$1"), e, i, n)
}

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
}
                var e = [];
                return t
}

            function n(t) {
                return t[P] = !0, t
}

            function s(t) {
                var e = W.createElement("div");
                try {
                    return !!t(e)
} catch (t) {
                    return !1
} finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
}
}

            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) _.attrHandle[i[n]] = e
}

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
}

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
}
}

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
}
}

            function c(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
})
})
}

            function h(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
}

            function u() { }

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
}

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = R++;
                return e.first ? function (e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
} : function (e, i, r) {
                    var a, l, c, h = [q, o];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0
} else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (c = e[P] || (e[P] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === o) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, r)) return !0
}
}
}

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
} : t[0]
}

            function g(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
}

            function m(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
                return r
}

            function v(t, e, i, s, o, r) {
                return s && !s[P] && (s = v(s)), o && !o[P] && (o = v(o, r)), n(function (n, r, a, l) {
                    var c, h, u, d = [],
                        p = [],
                        f = r.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : m(v, d, t, a, l),
                        w = i ? o || (n ? t : f || s) ? [] : r : y;
                    if (i && i(y, w, a, l), s)
                        for (c = m(w, p), s(c, [], a, l), h = c.length; h--;) (u = c[h]) && (w[p[h]] = !(y[p[h]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], h = w.length; h--;) (u = w[h]) && c.push(y[h] = u);
                                o(null, w = [], c, l)
}
                            for (h = w.length; h--;) (u = w[h]) && (c = o ? tt(n, u) : d[h]) > -1 && (n[c] = !(r[c] = u))
}
} else w = m(w === r ? w.splice(f, w.length) : w), o ? o(null, r, w, l) : K.apply(r, w)
})
}

            function y(t) {
                for (var e, i, n, s = t.length, o = _.relative[t[0].type], r = o || _.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                        return t === e
}, r, !0), c = p(function (t) {
                        return tt(e, t) > -1
}, r, !0), h = [function (t, i, n) {
                        var s = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, s
}]; s > a; a++)
                    if (i = _.relative[t[a].type]) h = [p(f(h), i)];
else {
                        if (i = _.filter[t[a].type].apply(null, t[a].matches), i[P]) {
                            for (n = ++a; s > n && !_.relative[t[n].type]; n++);
                            return v(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({
    value: " " === t[a - 2].type ? "*" : ""
})).replace(at, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && d(t))
}
                        h.push(i)
}
                return f(h)
}

            function w(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    r = function (n, r, a, l, c) {
                        var h, u, d, p = 0,
                            f = "0",
                            g = n && [],
                            v = [],
                            y = E,
                            w = n || o && _.find.TAG("*", c),
                            x = q += null == y ? 1 : Math.random() || .1,
                            b = w.length;
                        for (c && (E = r === W || r || c) ; f !== b && null != (h = w[f]) ; f++) {
                            if (o && h) {
                                for (u = 0, r || h.ownerDocument === W || (D(h), a = !A) ; d = t[u++];)
                                    if (d(h, r || W, a)) {
                                        l.push(h);
                                        break
}
                                c && (q = x)
}
                            s && ((h = !d && h) && p--, n && g.push(h))
}
                        if (p += f, s && f !== p) {
                            for (u = 0; d = i[u++];) d(g, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) g[f] || v[f] || (v[f] = Y.call(l));
                                v = m(v)
}
                            K.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
}
                        return c && (q = x, E = y), g
};
                return s ? n(r) : r
}
            var x, b, _, $, T, C, H, k, E, S, L, D, W, j, A, O, z, N, I, P = "sizzle" + 1 * new Date,
                M = t.document,
                q = 0,
                R = 0,
                F = i(),
                B = i(),
                V = i(),
                U = function (t, e) {
                    return t === e && (L = !0), 0
},
                X = 1 << 31,
                Q = {}.hasOwnProperty,
                G = [],
                Y = G.pop,
                Z = G.push,
                K = G.push,
                J = G.slice,
                tt = function (t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
},
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                rt = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ut = new RegExp(ot),
                dt = new RegExp("^" + nt + "$"),
                pt = {
    ID: new RegExp("^#(" + nt + ")"),
    CLASS: new RegExp("^\\.(" + nt + ")"),
    TAG: new RegExp("^(" + nt + "|[*])"),
    ATTR: new RegExp("^" + st),
    PSEUDO: new RegExp("^" + ot),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + et + ")$", "i"),
    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
},
                ft = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                bt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
},
                _t = function () {
                    D()
};
            try {
                K.apply(G = J.call(M.childNodes), M.childNodes), G[M.childNodes.length].nodeType
} catch (t) {
                K = {
    apply: G.length ? function (t, e) {
                        Z.apply(t, J.call(e))
} : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
}
}
}
            b = e.support = {}, T = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
}, D = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : M;
                return n !== W && 9 === n.nodeType && n.documentElement ? (W = n, j = W.documentElement, A = !T(W), (i = W.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), b.attributes = s(function (t) {
                    return t.className = "i", !t.getAttribute("className")
}), b.getElementsByTagName = s(function (t) {
                    return t.appendChild(W.createComment("")), !t.getElementsByTagName("*").length
}), b.getElementsByClassName = mt.test(W.getElementsByClassName), b.getById = s(function (t) {
                    return j.appendChild(t).id = P, !W.getElementsByName || !W.getElementsByName(P).length
}), b.getById ? (_.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && A) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
}
}, _.filter.ID = function (t) {
                    var e = t.replace(xt, bt);
                    return function (t) {
                        return t.getAttribute("id") === e
}
}) : (delete _.find.ID, _.filter.ID = function (t) {
                    var e = t.replace(xt, bt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
}
}), _.find.TAG = b.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
} : function (t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
}
                    return o
}, _.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return "undefined" != typeof e.getElementsByClassName && A ? e.getElementsByClassName(t) : void 0
}, z = [], O = [], (b.qsa = mt.test(W.querySelectorAll)) && (s(function (t) {
                    j.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
}), s(function (t) {
                    var e = W.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
})), (b.matchesSelector = mt.test(N = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && s(function (t) {
                    b.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), z.push("!=", ot)
}), O = O.length && new RegExp(O.join("|")), z = z.length && new RegExp(z.join("|")), e = mt.test(j.compareDocumentPosition), I = e || mt.test(j.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
} : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
}, U = e ? function (t, e) {
                    if (t === e) return L = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === W || t.ownerDocument === M && I(M, t) ? -1 : e === W || e.ownerDocument === M && I(M, e) ? 1 : S ? tt(S, t) - tt(S, e) : 0 : 4 & i ? -1 : 1)
} : function (t, e) {
                    if (t === e) return L = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!s || !o) return t === W ? -1 : e === W ? 1 : s ? -1 : o ? 1 : S ? tt(S, t) - tt(S, e) : 0;
                    if (s === o) return r(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? r(a[n], l[n]) : a[n] === M ? -1 : l[n] === M ? 1 : 0
}, W) : W
}, e.matches = function (t, i) {
                return e(t, null, null, i)
}, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== W && D(t), i = i.replace(ht, "='$1']"), b.matchesSelector && A && !V[i + " "] && (!z || !z.test(i)) && (!O || !O.test(i))) try {
                    var n = N.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
} catch (t) { }
                return e(i, W, null, [t]).length > 0
}, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== W && D(t), I(t, e)
}, e.attr = function (t, e) {
                (t.ownerDocument || t) !== W && D(t);
                var i = _.attrHandle[e.toLowerCase()],
                    n = i && Q.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !A) : void 0;
                return void 0 !== n ? n : b.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
}, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
}, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (L = !b.detectDuplicates, S = !b.sortStable && t.slice(0), t.sort(U), L) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
}
                return S = null, t
}, $ = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += $(t)
} else if (3 === s || 4 === s) return t.nodeValue
} else
                    for (; e = t[n++];) i += $(e);
                return i
}, _ = e.selectors = {
    cacheLength: 50,
    createPseudo: n,
    match: pt,
    attrHandle: {},
    find: {},
    relative: {
                    ">": {
    dir: "parentNode",
    first: !0
},
                    " ": {
    dir: "parentNode"
},
                    "+": {
    dir: "previousSibling",
    first: !0
},
                    "~": {
    dir: "previousSibling"
}
},
    preFilter: {
    ATTR: function (t) {
                        return t[1] = t[1].replace(xt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, bt),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
},
    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
},
    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
}
},
    filter: {
    TAG: function (t) {
                        var e = t.replace(xt, bt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
} : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
}
},
    CLASS: function (t) {
                        var e = F[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && F(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
})
},
    ATTR: function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
}
},
    CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
} : function (e, i, l) {
                            var c, h, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
}
                                    return !0
}
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (d = m, u = d[P] || (d[P] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === q && c[1], w = p && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (w = p = 0) || f.pop() ;)
                                        if (1 === d.nodeType && ++w && d === e) {
                                            h[t] = [q, p, w];
                                            break
}
} else if (y && (d = e, u = d[P] || (d[P] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === q && c[1], w = p), w === !1)
                                    for (;
                                        (d = ++p && d && d[g] || (w = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (u = d[P] || (d[P] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [q, w]), d !== e)) ;);
                                return w -= s, w === n || w % n === 0 && w / n >= 0
}
}
},
    PSEUDO: function (t, i) {
                        var s, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[P] ? o(i) : o.length > 1 ? (s = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, s = o(t, i), r = s.length; r--;) n = tt(t, s[r]), t[n] = !(e[n] = s[r])
}) : function (t) {
                            return o(t, 0, s)
}) : o
}
},
    pseudos: {
    not: n(function (t) {
                        var e = [],
                            i = [],
                            s = H(t.replace(at, "$1"));
                        return s[P] ? n(function (t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
}) : function (t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
}
}),
    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
}
}),
    contains: n(function (t) {
                        return t = t.replace(xt, bt),
                            function (e) {
                                return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
}
}),
    lang: n(function (t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, bt).toLowerCase(),
                            function (e) {
                                var i;
                                do
                                    if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
}
}),
    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
},
    root: function (t) {
                        return t === j
},
    focus: function (t) {
                        return t === W.activeElement && (!W.hasFocus || W.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
},
    enabled: function (t) {
                        return t.disabled === !1
},
    disabled: function (t) {
                        return t.disabled === !0
},
    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
},
    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
},
    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
},
    parent: function (t) {
                        return !_.pseudos.empty(t)
},
    header: function (t) {
                        return gt.test(t.nodeName)
},
    input: function (t) {
                        return ft.test(t.nodeName)
},
    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
},
    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
},
    first: c(function () {
                        return [0]
}),
    last: c(function (t, e) {
                        return [e - 1]
}),
    eq: c(function (t, e, i) {
                        return [0 > i ? i + e : i]
}),
    even: c(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
}),
    odd: c(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
}),
    lt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
}),
    gt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
})
}
}, _.pseudos.nth = _.pseudos.eq;
            for (x in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
}) _.pseudos[x] = a(x);
            for (x in {
    submit: !0,
    reset: !0
}) _.pseudos[x] = l(x);
            return u.prototype = _.filters = _.pseudos, _.setFilters = new u, C = e.tokenize = function (t, i) {
                var n, s, o, r, a, l, c, h = B[t + " "];
                if (h) return i ? 0 : h.slice(0);
                for (a = t, l = [], c = _.preFilter; a;) {
                    n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ct.exec(a)) && (n = s.shift(), o.push({
    value: n,
    type: s[0].replace(at, " ")
}), a = a.slice(n.length));
                    for (r in _.filter) !(s = pt[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
    value: n,
    type: r,
    matches: s
}), a = a.slice(n.length));
                    if (!n) break
}
                return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
}, H = e.compile = function (t, e) {
                var i, n = [],
                    s = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--;) o = y(e[i]), o[P] ? n.push(o) : s.push(o);
                    o = V(t, w(s, n)), o.selector = t
}
                return o
}, k = e.select = function (t, e, i, n) {
                var s, o, r, a, l, c = "function" == typeof t && t,
                    u = !n && C(t = c.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === e.nodeType && A && _.relative[o[1].type]) {
                        if (e = (_.find.ID(r.matches[0].replace(xt, bt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
}
                    for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !_.relative[a = r.type]) ;)
                        if ((l = _.find[a]) && (n = l(r.matches[0].replace(xt, bt), yt.test(o[0].type) && h(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && d(o), !t) return K.apply(i, n), i;
                            break
}
}
                return (c || H(t, u))(n, e, !A, i, !e || yt.test(t) && h(e.parentNode) || e), i
}, b.sortStable = P.split("").sort(U).join("") === P, b.detectDuplicates = !!L, D(), b.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(W.createElement("div"))
}), s(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
}) || o("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
}), b.attributes && s(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
}) || o("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
}), s(function (t) {
                return null == t.getAttribute("disabled")
}) || o(et, function (t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
}), e
}(t);
        ot.find = ht, ot.expr = ht.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ht.uniqueSort, ot.text = ht.getText, ot.isXMLDoc = ht.isXML, ot.contains = ht.contains;
        var ut = function (t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && ot(t).is(i)) break;
                        n.push(t)
}
                return n
},
            dt = function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
},
            pt = ot.expr.match.needsContext,
            ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^.[^:#\[\.,]*$/;
        ot.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [n] : [] : ot.find.matches(t, ot.grep(e, function (t) {
                return 1 === t.nodeType
}))
}, ot.fn.extend({
    find: function (t) {
                var e, i = this.length,
                    n = [],
                    s = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
                    for (e = 0; i > e; e++)
                        if (ot.contains(s[e], this)) return !0
}));
                for (e = 0; i > e; e++) ot.find(t, s[e], n);
                return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
},
    filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
},
    not: function (t) {
                return this.pushStack(n(this, t || [], !0))
},
    is: function (t) {
                return !!n(this, "string" == typeof t && pt.test(t) ? ot(t) : t || [], !1).length
}
});
        var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = ot.fn.init = function (t, e, i) {
                var n, s;
                if (!t) return this;
                if (i = i || mt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), ft.test(n[1]) && ot.isPlainObject(e))
                            for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
}
                    return s = G.getElementById(n[2]), s && s.parentNode && (this.length = 1, this[0] = s), this.context = G, this.selector = t, this
}
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
};
        yt.prototype = ot.fn, mt = ot(G);
        var wt = /^(?:parents|prev(?:Until|All))/,
            xt = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
};
        ot.fn.extend({
    has: function (t) {
                var e = ot(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; i > t; t++)
                        if (ot.contains(this, e[t])) return !0
})
},
    closest: function (t, e) {
                for (var i, n = 0, s = this.length, o = [], r = pt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
}
                return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
},
    index: function (t) {
                return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
},
    add: function (t, e) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
},
    addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
}
}), ot.each({
    parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
},
    parents: function (t) {
                return ut(t, "parentNode")
},
    parentsUntil: function (t, e, i) {
                return ut(t, "parentNode", i)
},
    next: function (t) {
                return s(t, "nextSibling")
},
    prev: function (t) {
                return s(t, "previousSibling")
},
    nextAll: function (t) {
                return ut(t, "nextSibling")
},
    prevAll: function (t) {
                return ut(t, "previousSibling")
},
    nextUntil: function (t, e, i) {
                return ut(t, "nextSibling", i)
},
    prevUntil: function (t, e, i) {
                return ut(t, "previousSibling", i)
},
    siblings: function (t) {
                return dt((t.parentNode || {}).firstChild, t)
},
    children: function (t) {
                return dt(t.firstChild)
},
    contents: function (t) {
                return t.contentDocument || ot.merge([], t.childNodes)
}
}, function (t, e) {
            ot.fn[t] = function (i, n) {
                var s = ot.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ot.filter(n, s)), this.length > 1 && (xt[t] || ot.uniqueSort(s), wt.test(t) && s.reverse()), this.pushStack(s)
}
});
        var bt = /\S+/g;
        ot.Callbacks = function (t) {
            t = "string" == typeof t ? o(t) : ot.extend({}, t);
            var e, i, n, s, r = [],
                a = [],
                l = -1,
                c = function () {
                    for (s = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift() ; ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
                    t.memory || (i = !1), e = !1, s && (r = i ? [] : "")
},
                h = {
    add: function () {
                        return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                            ot.each(i, function (i, n) {
                                ot.isFunction(n) ? t.unique && h.has(n) || r.push(n) : n && n.length && "string" !== ot.type(n) && e(n)
})
}(arguments), i && !e && c()), this
},
    remove: function () {
                        return ot.each(arguments, function (t, e) {
                            for (var i;
                                (i = ot.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
}), this
},
    has: function (t) {
                        return t ? ot.inArray(t, r) > -1 : r.length > 0
},
    empty: function () {
                        return r && (r = []), this
},
    disable: function () {
                        return s = a = [], r = i = "", this
},
    disabled: function () {
                        return !r
},
    lock: function () {
                        return s = a = [], i || (r = i = ""), this
},
    locked: function () {
                        return !!s
},
    fireWith: function (t, i) {
                        return s || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
},
    fire: function () {
                        return h.fireWith(this, arguments), this
},
    fired: function () {
                        return !!n
}
};
            return h
}, ot.extend({
    Deferred: function (t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
],
                    i = "pending",
                    n = {
    state: function () {
                            return i
},
    always: function () {
                            return s.done(arguments).fail(arguments), this
},
    then: function () {
                            var t = arguments;
                            return ot.Deferred(function (i) {
                                ot.each(e, function (e, o) {
                                    var r = ot.isFunction(t[e]) && t[e];
                                    s[o[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
})
}), t = null
}).promise()
},
    promise: function (t) {
                            return null != t ? ot.extend(t, n) : n
}
},
                    s = {};
                return n.pipe = n.then, ot.each(e, function (t, o) {
                    var r = o[2],
                        a = o[3];
                    n[o[1]] = r.add, a && r.add(function () {
                        i = a
}, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
}, s[o[0] + "With"] = r.fireWith
}), n.promise(s), t && t.call(s, s), s
},
    when: function (t) {
                var e, i, n, s = 0,
                    o = Y.call(arguments),
                    r = o.length,
                    a = 1 !== r || t && ot.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    c = function (t, i, n) {
                        return function (s) {
                            i[t] = this, n[t] = arguments.length > 1 ? Y.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
}
};
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r) ; r > s; s++) o[s] && ot.isFunction(o[s].promise) ? o[s].promise().progress(c(s, i, e)).done(c(s, n, o)).fail(l.reject) : --a;
                return a || l.resolveWith(n, o), l.promise()
}
});
        var _t;
        ot.fn.ready = function (t) {
            return ot.ready.promise().done(t), this
}, ot.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (t) {
                t ? ot.readyWait++ : ot.ready(!0)
},
    ready: function (t) {
                (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (_t.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
}
}), ot.ready.promise = function (e) {
            return _t || (_t = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), _t.promise(e)
}, ot.ready.promise();
        var $t = function (t, e, i, n, s, o, r) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === ot.type(i)) {
                    s = !0;
                    for (a in i) $t(t, e, a, i[a], !0, o, r)
} else if (void 0 !== n && (s = !0, ot.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                        return c.call(ot(t), i)
})), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
},
            Tt = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
};
        a.uid = 1, a.prototype = {
    register: function (t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
    value: i,
    writable: !0,
    configurable: !0
}), t[this.expando]
},
    cache: function (t) {
                if (!Tt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
    value: e,
    configurable: !0
}))), e
},
    set: function (t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e) s[e] = i;
else
                    for (n in e) s[n] = e[n];
                return s
},
    get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
},
    access: function (t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, ot.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
},
    remove: function (t, e) {
                var i, n, s, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
else {
                        ot.isArray(e) ? n = e.concat(e.map(ot.camelCase)) : (s = ot.camelCase(e), e in o ? n = [e, s] : (n = s, n = n in o ? [n] : n.match(bt) || [])), i = n.length;
                        for (; i--;) delete o[n[i]]
} (void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
}
},
    hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !ot.isEmptyObject(e)
}
};
        var Ct = new a,
            Ht = new a,
            kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Et = /[A-Z]/g;
        ot.extend({
    hasData: function (t) {
                return Ht.hasData(t) || Ct.hasData(t)
},
    data: function (t, e, i) {
                return Ht.access(t, e, i)
},
    removeData: function (t, e) {
                Ht.remove(t, e)
},
    _data: function (t, e, i) {
                return Ct.access(t, e, i)
},
    _removeData: function (t, e) {
                Ct.remove(t, e)
}
}), ot.fn.extend({
    data: function (t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = Ht.get(o), 1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = ot.camelCase(n.slice(5)), l(o, n, s[n])));
                        Ct.set(o, "hasDataAttrs", !0)
}
                    return s
}
                return "object" == typeof t ? this.each(function () {
                    Ht.set(this, t)
}) : $t(this, function (e) {
                    var i, n;
                    if (o && void 0 === e) {
                        if (i = Ht.get(o, t) || Ht.get(o, t.replace(Et, "-$&").toLowerCase()), void 0 !== i) return i;
                        if (n = ot.camelCase(t), i = Ht.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
} else n = ot.camelCase(t), this.each(function () {
                        var i = Ht.get(this, n);
                        Ht.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Ht.set(this, t, e)
})
}, null, e, arguments.length > 1, null, !0)
},
    removeData: function (t) {
                return this.each(function () {
                    Ht.remove(this, t)
})
}
}), ot.extend({
    queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = Ct.get(t, e), i && (!n || ot.isArray(i) ? n = Ct.access(t, e, ot.makeArray(i)) : n.push(i)), n || []) : void 0
},
    dequeue: function (t, e) {
                e = e || "fx";
                var i = ot.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = ot._queueHooks(t, e),
                    r = function () {
                        ot.dequeue(t, e)
};
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
},
    _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return Ct.get(t, i) || Ct.access(t, i, {
    empty: ot.Callbacks("once memory").add(function () {
                        Ct.remove(t, [e + "queue", i])
})
})
}
}), ot.fn.extend({
    queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t)
})
},
    dequeue: function (t) {
                return this.each(function () {
                    ot.dequeue(this, t)
})
},
    clearQueue: function (t) {
                return this.queue(t || "fx", [])
},
    promise: function (t, e) {
                var i, n = 1,
                    s = ot.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --n || s.resolveWith(o, [o])
};
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = Ct.get(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
}
});
        var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Lt = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
            Dt = ["Top", "Right", "Bottom", "Left"],
            Wt = function (t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
},
            jt = /^(?:checkbox|radio)$/i,
            At = /<([\w:-]+)/,
            Ot = /^$|\/(?:java|ecma)script/i,
            zt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
};
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Nt = /<|&#?\w+;/;
        ! function () {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                i = G.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
}();
        var It = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Mt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
    global: {},
    add: function (t, e, i, n, s) {
                var o, r, a, l, c, h, u, d, p, f, g, m = Ct.get(t);
                if (m)
                    for (i.handler && (o = i, i = o.handler, s = o.selector), i.guid || (i.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
                            return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
}), e = (e || "").match(bt) || [""], c = e.length; c--;) a = Mt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (u = ot.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = ot.event.special[p] || {}, h = ot.extend({
    type: p,
    origType: g,
    data: n,
    handler: i,
    guid: i.guid,
    selector: s,
    needsContext: s && ot.expr.match.needsContext.test(s),
    namespace: f.join(".")
}, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), ot.event.global[p] = !0)
},
    remove: function (t, e, i, n, s) {
                var o, r, a, l, c, h, u, d, p, f, g, m = Ct.hasData(t) && Ct.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                        if (a = Mt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = ot.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) h = d[o], !s && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                            r && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || ot.removeEvent(t, p, m.handle), delete l[p])
} else
                            for (p in l) ot.event.remove(t, p + e[c], i, n, !0);
                    ot.isEmptyObject(l) && Ct.remove(t, "handle events")
}
},
    dispatch: function (t) {
                t = ot.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = Y.call(arguments),
                    l = (Ct.get(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (r = ot.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped() ;)
                        for (t.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !t.isImmediatePropagationStopped() ;) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
}
},
    handlers: function (t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? ot(s, this).index(l) > -1 : ot.find(s, this, null, [l]).length), n[s] && n.push(o);
                            n.length && r.push({
    elem: l,
    handlers: n
})
}
                return a < e.length && r.push({
    elem: this,
    handlers: e.slice(a)
}), r
},
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
}
},
    mouseHooks: {
    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function (t, e) {
                    var i, n, s, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
}
},
    fix: function (t) {
                if (t[ot.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = Pt.test(s) ? this.mouseHooks : It.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new ot.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
},
    special: {
    load: {
    noBubble: !0
},
    focus: {
    trigger: function () {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
},
    delegateType: "focusin"
},
    blur: {
    trigger: function () {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
},
    delegateType: "focusout"
},
    click: {
    trigger: function () {
                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
},
    _default: function (t) {
                        return ot.nodeName(t.target, "a")
}
},
    beforeunload: {
    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
}
}
}
}, ot.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
}, ot.Event = function (t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void (this[ot.expando] = !0)) : new ot.Event(t, e)
}, ot.Event.prototype = {
    constructor: ot.Event,
    isDefaultPrevented: f,
    isPropagationStopped: f,
    isImmediatePropagationStopped: f,
    isSimulated: !1,
    preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && !this.isSimulated && t.preventDefault()
},
    stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && !this.isSimulated && t.stopPropagation()
},
    stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
}
}, ot.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function (t, e) {
            ot.event.special[t] = {
    delegateType: e,
    bindType: e,
    handle: function (t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return s && (s === n || ot.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
}
}
}), ot.fn.extend({
    on: function (t, e, i, n) {
                return m(this, t, e, i, n)
},
    one: function (t, e, i, n) {
                return m(this, t, e, i, n, 1)
},
    off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ot(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
}
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = f), this.each(function () {
                    ot.event.remove(this, t, i, e)
})
}
});
        var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Rt = /<script|<style|<link/i,
            Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Bt = /^true\/(.*)/,
            Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
    htmlPrefilter: function (t) {
                return t.replace(qt, "<$1></$2>")
},
    clone: function (t, e, i) {
                var n, s, o, r, a = t.cloneNode(!0),
                    l = ot.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (r = h(a), o = h(t), n = 0, s = o.length; s > n; n++) b(o[n], r[n]);
                if (e)
                    if (i)
                        for (o = o || h(t), r = r || h(a), n = 0, s = o.length; s > n; n++) x(o[n], r[n]);
else x(t, a);
                return r = h(a, "script"), r.length > 0 && u(r, !l && h(t, "script")), a
},
    cleanData: function (t) {
                for (var e, i, n, s = ot.event.special, o = 0; void 0 !== (i = t[o]) ; o++)
                    if (Tt(i)) {
                        if (e = i[Ct.expando]) {
                            if (e.events)
                                for (n in e.events) s[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, e.handle);
                            i[Ct.expando] = void 0
}
                        i[Ht.expando] && (i[Ht.expando] = void 0)
}
}
}), ot.fn.extend({
    domManip: _,
    detach: function (t) {
                return $(this, t, !0)
},
    remove: function (t) {
                return $(this, t)
},
    text: function (t) {
                return $t(this, function (t) {
                    return void 0 === t ? ot.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
})
}, null, t, arguments.length)
},
    append: function () {
                return _(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
}
})
},
    prepend: function () {
                return _(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
}
})
},
    before: function () {
                return _(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
})
},
    after: function () {
                return _(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
})
},
    empty: function () {
                for (var t, e = 0; null != (t = this[e]) ; e++) 1 === t.nodeType && (ot.cleanData(h(t, !1)), t.textContent = "");
                return this
},
    clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ot.clone(this, t, e)
})
},
    html: function (t) {
                return $t(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Rt.test(t) && !zt[(At.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ot.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (ot.cleanData(h(e, !1)), e.innerHTML = t);
                            e = 0
} catch (t) { }
}
                    e && this.empty().append(t)
}, null, t, arguments.length)
},
    replaceWith: function () {
                var t = [];
                return _(this, arguments, function (e) {
                    var i = this.parentNode;
                    ot.inArray(this, t) < 0 && (ot.cleanData(h(this)), i && i.replaceChild(e, this))
}, t)
}
}), ot.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function (t, e) {
            ot.fn[t] = function (t) {
                for (var i, n = [], s = ot(t), o = s.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), ot(s[r])[e](i), K.apply(n, i.get());
                return this.pushStack(n)
}
});
        var Ut, Xt = {
    HTML: "block",
    BODY: "block"
},
            Qt = /^margin/,
            Gt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
            Yt = function (e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
},
            Zt = function (t, e, i, n) {
                var s, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []);
                for (o in e) t.style[o] = r[o];
                return s
},
            Kt = G.documentElement;
        ! function () {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", s = "4px" === e.marginRight, Kt.removeChild(r)
}
            var i, n, s, o, r = G.createElement("div"),
                a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), ot.extend(nt, {
    pixelPosition: function () {
                    return e(), i
},
    boxSizingReliable: function () {
                    return null == n && e(), n
},
    pixelMarginRight: function () {
                    return null == n && e(), s
},
    reliableMarginLeft: function () {
                    return null == n && e(), o
},
    reliableMarginRight: function () {
                    var e, i = a.appendChild(G.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Kt.appendChild(r), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(r), a.removeChild(i), e
}
}))
}();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            te = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
},
            ee = {
    letterSpacing: "0",
    fontWeight: "400"
},
            ie = ["Webkit", "O", "Moz", "ms"],
            ne = G.createElement("div").style;
        ot.extend({
    cssHooks: {
    opacity: {
    get: function (t, e) {
                        if (e) {
                            var i = H(t, "opacity");
                            return "" === i ? "1" : i
}
}
}
},
    cssNumber: {
    animationIterationCount: !0,
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
},
    cssProps: {
    float: "cssFloat"
},
    style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = ot.camelCase(e),
                        l = t.style;
                    return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), r = ot.cssHooks[e] || ot.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : (o = typeof i, "string" === o && (s = Lt.exec(i)) && s[1] && (i = c(t, e, s), o = "number"), void (null != i && i === i && ("number" === o && (i += s && s[3] || (ot.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
}
},
    css: function (t, e, i, n) {
                var s, o, r, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), r = ot.cssHooks[e] || ot.cssHooks[a], r && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = H(t, e, n)), "normal" === s && e in ee && (s = ee[e]), "" === i || i ? (o = parseFloat(s), i === !0 || isFinite(o) ? o || 0 : s) : s
}
}), ot.each(["height", "width"], function (t, e) {
            ot.cssHooks[e] = {
    get: function (t, i, n) {
                    return i ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function () {
                        return D(t, e, n)
}) : D(t, e, n) : void 0
},
    set: function (t, i, n) {
                    var s, o = n && Yt(t),
                        r = n && L(t, e, n, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                    return r && (s = Lt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = ot.css(t, e)), S(t, i, r)
}
}
}), ot.cssHooks.marginLeft = k(nt.reliableMarginLeft, function (t, e) {
            return e ? (parseFloat(H(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
    marginLeft: 0
}, function () {
                return t.getBoundingClientRect().left
})) + "px" : void 0
}), ot.cssHooks.marginRight = k(nt.reliableMarginRight, function (t, e) {
            return e ? Zt(t, {
    display: "inline-block"
}, H, [t, "marginRight"]) : void 0
}), ot.each({
    margin: "",
    padding: "",
    border: "Width"
}, function (t, e) {
            ot.cssHooks[t + e] = {
    expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Dt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
}
}, Qt.test(t) || (ot.cssHooks[t + e].set = S)
}), ot.fn.extend({
    css: function (t, e) {
                return $t(this, function (t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (ot.isArray(e)) {
                        for (n = Yt(t), s = e.length; s > r; r++) o[e[r]] = ot.css(t, e[r], !1, n);
                        return o
}
                    return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e)
}, t, e, arguments.length > 1)
},
    show: function () {
                return W(this, !0)
},
    hide: function () {
                return W(this)
},
    toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Wt(this) ? ot(this).show() : ot(this).hide()
})
}
}), ot.Tween = j, j.prototype = {
    constructor: j,
    init: function (t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ot.cssNumber[i] ? "" : "px")
},
    cur: function () {
                var t = j.propHooks[this.prop];
                return t && t.get ? t.get(this) : j.propHooks._default.get(this)
},
    run: function (t) {
                var e, i = j.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
}
}, j.prototype.init.prototype = j.prototype, j.propHooks = {
    _default: {
    get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
},
    set: function (t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
}
}
}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
    set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
}
}, ot.easing = {
    linear: function (t) {
                return t
},
    swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
},
    _default: "swing"
}, ot.fx = j.prototype.init, ot.fx.step = {};
        var se, oe, re = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        ot.Animation = ot.extend(P, {
    tweeners: {
                    "*": [function (t, e) {
                        var i = this.createTween(t, e);
                        return c(i.elem, t, Lt.exec(e), i), i
}]
},
    tweener: function (t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(bt);
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], P.tweeners[i] = P.tweeners[i] || [], P.tweeners[i].unshift(e)
},
    prefilters: [N],
    prefilter: function (t, e) {
                    e ? P.prefilters.unshift(t) : P.prefilters.push(t)
}
}), ot.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? ot.extend({}, t) : {
    complete: i || !i && e || ot.isFunction(t) && t,
    duration: t,
    easing: i && e || e && !ot.isFunction(e) && e
};
                return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    ot.isFunction(n.old) && n.old.call(this), n.queue && ot.dequeue(this, n.queue)
}, n
}, ot.fn.extend({
    fadeTo: function (t, e, i, n) {
                    return this.filter(Wt).css("opacity", 0).show().end().animate({
    opacity: e
}, t, i, n)
},
    animate: function (t, e, i, n) {
                    var s = ot.isEmptyObject(t),
                        o = ot.speed(e, i, n),
                        r = function () {
                            var e = P(this, ot.extend({}, t), o);
                            (s || Ct.get(this, "finish")) && e.stop(!0)
};
                    return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
},
    stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
};
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = ot.timers,
                            r = Ct.get(this);
                        if (s) r[s] && r[s].stop && n(r[s]);
else
                            for (s in r) r[s] && r[s].stop && ae.test(s) && n(r[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        !e && i || ot.dequeue(this, t)
})
},
    finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, i = Ct.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = ot.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, ot.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
})
}
}), ot.each(["toggle", "show", "hide"], function (t, e) {
                var i = ot.fn[e];
                ot.fn[e] = function (t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, s)
}
}), ot.each({
    slideDown: O("show"),
    slideUp: O("hide"),
    slideToggle: O("toggle"),
    fadeIn: {
    opacity: "show"
},
    fadeOut: {
    opacity: "hide"
},
    fadeToggle: {
    opacity: "toggle"
}
}, function (t, e) {
                ot.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
}
}), ot.timers = [], ot.fx.tick = function () {
                var t, e = 0,
                    i = ot.timers;
                for (se = ot.now() ; e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || ot.fx.stop(), se = void 0
}, ot.fx.timer = function (t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
}, ot.fx.interval = 13, ot.fx.start = function () {
                oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
}, ot.fx.stop = function () {
                t.clearInterval(oe), oe = null
}, ot.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
}, ot.fn.delay = function (e, i) {
                return e = ot.fx ? ot.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
                    var s = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(s)
}
})
},
            function () {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
}();
        var le, ce = ot.expr.attrHandle;
        ot.fn.extend({
    attr: function (t, e) {
                return $t(this, ot.attr, t, e, arguments.length > 1)
},
    removeAttr: function (t) {
                return this.each(function () {
                    ot.removeAttr(this, t)
})
}
}), ot.extend({
    attr: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), s = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void ot.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = ot.find.attr(t, e), null == n ? void 0 : n))
},
    attrHooks: {
    type: {
    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
}
}
}
},
    removeAttr: function (t, e) {
                var i, n, s = 0,
                    o = e && e.match(bt);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = ot.propFix[i] || i, ot.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
}
}), le = {
    set: function (t, e, i) {
                return e === !1 ? ot.removeAttr(t, i) : t.setAttribute(i, i), i
}
}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = ce[e] || ot.find.attr;
            ce[e] = function (t, e, n) {
                var s, o;
                return n || (o = ce[e], ce[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ce[e] = o), s
}
});
        var he = /^(?:input|select|textarea|button)$/i,
            ue = /^(?:a|area)$/i;
        ot.fn.extend({
    prop: function (t, e) {
                return $t(this, ot.prop, t, e, arguments.length > 1)
},
    removeProp: function (t) {
                return this.each(function () {
                    delete this[ot.propFix[t] || t]
})
}
}), ot.extend({
    prop: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, s = ot.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
},
    propHooks: {
    tabIndex: {
    get: function (t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : he.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
}
}
},
    propFix: {
                for: "htmlFor",
                class: "className"
}
}), nt.optSelected || (ot.propHooks.selected = {
    get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
},
    set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
}
}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ot.propFix[this.toLowerCase()] = this
});
        var de = /[\t\r\n\f]/g;
        ot.fn.extend({
    addClass: function (t) {
                var e, i, n, s, o, r, a, l = 0;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).addClass(t.call(this, e, M(this)))
});
                if ("string" == typeof t && t)
                    for (e = t.match(bt) || []; i = this[l++];)
                        if (s = M(i), n = 1 === i.nodeType && (" " + s + " ").replace(de, " ")) {
                            for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = ot.trim(n), s !== a && i.setAttribute("class", a)
}
                return this
},
    removeClass: function (t) {
                var e, i, n, s, o, r, a, l = 0;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).removeClass(t.call(this, e, M(this)))
});
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(bt) || []; i = this[l++];)
                        if (s = M(i), n = 1 === i.nodeType && (" " + s + " ").replace(de, " ")) {
                            for (r = 0; o = e[r++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            a = ot.trim(n), s !== a && i.setAttribute("class", a)
}
                return this
},
    toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (i) {
                    ot(this).toggleClass(t.call(this, i, M(this), e), e)
}) : this.each(function () {
                    var e, n, s, o;
                    if ("string" === i)
                        for (n = 0, s = ot(this), o = t.match(bt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
else void 0 !== t && "boolean" !== i || (e = M(this), e && Ct.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ct.get(this, "__className__") || ""))
})
},
    hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + M(i) + " ").replace(de, " ").indexOf(e) > -1) return !0;
                return !1
}
});
        var pe = /\r/g,
            fe = /[\x20\t\r\n\f]+/g;
        ot.fn.extend({
    val: function (t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = ot.isFunction(t), this.each(function (i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, ot(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ot.isArray(s) && (s = ot.map(s, function (t) {
                        return null == t ? "" : t + ""
})), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
})) : s ? (e = ot.valHooks[s.type] || ot.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(pe, "") : null == i ? "" : i)) : void 0
}
}), ot.extend({
    valHooks: {
    option: {
    get: function (t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t)).replace(fe, " ")
}
},
    select: {
    get: function (t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === s) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ot.nodeName(i.parentNode, "optgroup"))) {
                                if (e = ot(i).val(), o) return e;
                                r.push(e)
}
                        return r
},
    set: function (t, e) {
                        for (var i, n, s = t.options, o = ot.makeArray(e), r = s.length; r--;) n = s[r], (n.selected = ot.inArray(ot.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
}
}
}
}), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
    set: function (t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
}
}, nt.checkOn || (ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
})
});
        var ge = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
    trigger: function (e, i, n, s) {
                var o, r, a, l, c, h, u, d = [n || G],
                    p = it.call(e, "type") ? e.type : e,
                    f = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ot.makeArray(i, [e]), u = ot.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!s && !u.noBubble && !ot.isWindow(n)) {
                        for (l = u.delegateType || p, ge.test(l + p) || (r = r.parentNode) ; r; r = r.parentNode) d.push(r), a = r;
                        a === (n.ownerDocument || G) && d.push(a.defaultView || a.parentWindow || t)
}
                    for (o = 0;
                        (r = d[o++]) && !e.isPropagationStopped() ;) e.type = o > 1 ? l : u.bindType || p, h = (Ct.get(r, "events") || {})[e.type] && Ct.get(r, "handle"), h && h.apply(r, i), h = c && r[c], h && h.apply && Tt(r) && (e.result = h.apply(r, i), e.result === !1 && e.preventDefault());
                    return e.type = p, s || e.isDefaultPrevented() || u._default && u._default.apply(d.pop(), i) !== !1 || !Tt(n) || c && ot.isFunction(n[p]) && !ot.isWindow(n) && (a = n[c], a && (n[c] = null), ot.event.triggered = p, n[p](), ot.event.triggered = void 0, a && (n[c] = a)), e.result
}
},
    simulate: function (t, e, i) {
                var n = ot.extend(new ot.Event, i, {
    type: t,
    isSimulated: !0
});
                ot.event.trigger(n, null, e)
}
}), ot.fn.extend({
    trigger: function (t, e) {
                return this.each(function () {
                    ot.event.trigger(t, e, this)
})
},
    triggerHandler: function (t, e) {
                var i = this[0];
                return i ? ot.event.trigger(t, e, i, !0) : void 0
}
}), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ot.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
}
}), ot.fn.extend({
    hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
}
}), nt.focusin = "onfocusin" in t, nt.focusin || ot.each({
    focus: "focusin",
    blur: "focusout"
}, function (t, e) {
            var i = function (t) {
                ot.event.simulate(e, t.target, ot.event.fix(t))
};
            ot.event.special[e] = {
    setup: function () {
                    var n = this.ownerDocument || this,
                        s = Ct.access(n, e);
                    s || n.addEventListener(t, i, !0), Ct.access(n, e, (s || 0) + 1)
},
    teardown: function () {
                    var n = this.ownerDocument || this,
                        s = Ct.access(n, e) - 1;
                    s ? Ct.access(n, e, s) : (n.removeEventListener(t, i, !0), Ct.remove(n, e))
}
}
});
        var me = t.location,
            ve = ot.now(),
            ye = /\?/;
        ot.parseJSON = function (t) {
            return JSON.parse(t + "")
}, ot.parseXML = function (e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
} catch (t) {
                i = void 0
}
            return i && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), i
};
        var we = /#.*$/,
            xe = /([?&])_=[^&]*/,
            be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            $e = /^(?:GET|HEAD)$/,
            Te = /^\/\//,
            Ce = {},
            He = {},
            ke = "*/".concat("*"),
            Ee = G.createElement("a");
        Ee.href = me.href, ot.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
    url: me.href,
    type: "GET",
    isLocal: _e.test(me.protocol),
    global: !0,
    processData: !0,
    async: !0,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    accepts: {
                    "*": ke,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
},
    contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
},
    responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
},
    converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
},
    flatOptions: {
    url: !0,
    context: !0
}
},
    ajaxSetup: function (t, e) {
                return e ? F(F(t, ot.ajaxSettings), e) : F(ot.ajaxSettings, t)
},
    ajaxPrefilter: q(Ce),
    ajaxTransport: q(He),
    ajax: function (e, i) {
                function n(e, i, n, a) {
                    var c, u, y, w, b, $ = i;
                    2 !== x && (x = 2, l && t.clearTimeout(l), s = void 0, r = a || "", _.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (w = B(d, _, n)), w = V(d, w, _, c), c ? (d.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (ot.lastModified[o] = b), b = _.getResponseHeader("etag"), b && (ot.etag[o] = b)), 204 === e || "HEAD" === d.type ? $ = "nocontent" : 304 === e ? $ = "notmodified" : ($ = w.state, u = w.data, y = w.error, c = !y)) : (y = $, !e && $ || ($ = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (i || $) + "", c ? g.resolveWith(p, [u, $, _]) : g.rejectWith(p, [_, $, y]), _.statusCode(v), v = void 0, h && f.trigger(c ? "ajaxSuccess" : "ajaxError", [_, d, c ? u : y]), m.fireWith(p, [_, $]), h && (f.trigger("ajaxComplete", [_, d]), --ot.active || ot.event.trigger("ajaxStop")))
}
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var s, o, r, a, l, c, h, u, d = ot.ajaxSetup({}, i),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                    g = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    w = {},
                    x = 0,
                    b = "canceled",
                    _ = {
    readyState: 0,
    getResponseHeader: function (t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = be.exec(r) ;) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
}
                            return null == e ? null : e
},
    getAllResponseHeaders: function () {
                            return 2 === x ? r : null
},
    setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return x || (t = w[i] = w[i] || t, y[t] = e), this
},
    overrideMimeType: function (t) {
                            return x || (d.mimeType = t), this
},
    statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) v[e] = [v[e], t[e]];
else _.always(t[_.status]);
                            return this
},
    abort: function (t) {
                            var e = t || b;
                            return s && s.abort(e), n(0, e), this
}
};
                if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || me.href) + "").replace(we, "").replace(Te, me.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain) {
                    c = G.createElement("a");
                    try {
                        c.href = d.url, c.href = c.href, d.crossDomain = Ee.protocol + "//" + Ee.host != c.protocol + "//" + c.host
} catch (t) {
                        d.crossDomain = !0
}
}
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), R(Ce, d, i, _), 2 === x) return _;
                h = ot.event && d.global, h && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !$e.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ye.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = xe.test(o) ? o.replace(xe, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), d.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) _.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === x)) return _.abort();
                b = "abort";
                for (u in {
    success: 1,
    error: 1,
    complete: 1
}) _[u](d[u]);
                if (s = R(He, d, i, _)) {
                    if (_.readyState = 1, h && f.trigger("ajaxSend", [_, d]), 2 === x) return _;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function () {
                        _.abort("timeout")
}, d.timeout));
                    try {
                        x = 1, s.send(y, n)
} catch (t) {
                        if (!(2 > x)) throw t;
                        n(-1, t)
}
} else n(-1, "No Transport");
                return _
},
    getJSON: function (t, e, i) {
                return ot.get(t, e, i, "json")
},
    getScript: function (t, e) {
                return ot.get(t, void 0, e, "script")
}
}), ot.each(["get", "post"], function (t, e) {
            ot[e] = function (t, i, n, s) {
                return ot.isFunction(i) && (s = s || n, n = i, i = void 0), ot.ajax(ot.extend({
    url: t,
    type: e,
    dataType: s,
    data: i,
    success: n
}, ot.isPlainObject(t) && t))
}
}), ot._evalUrl = function (t) {
            return ot.ajax({
    url: t,
    type: "GET",
    dataType: "script",
    async: !1,
    global: !1,
    throws: !0
})
}, ot.fn.extend({
    wrapAll: function (t) {
                var e;
                return ot.isFunction(t) ? this.each(function (e) {
                    ot(this).wrapAll(t.call(this, e))
}) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
}).append(this)), this)
},
    wrapInner: function (t) {
                return ot.isFunction(t) ? this.each(function (e) {
                    ot(this).wrapInner(t.call(this, e))
}) : this.each(function () {
                    var e = ot(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
})
},
    wrap: function (t) {
                var e = ot.isFunction(t);
                return this.each(function (i) {
                    ot(this).wrapAll(e ? t.call(this, i) : t)
})
},
    unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
}).end()
}
}), ot.expr.filters.hidden = function (t) {
            return !ot.expr.filters.visible(t)
}, ot.expr.filters.visible = function (t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
};
        var Se = /%20/g,
            Le = /\[\]$/,
            De = /\r?\n/g,
            We = /^(?:submit|button|image|reset|file)$/i,
            je = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (t, e) {
            var i, n = [],
                s = function (t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
};
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
                s(this.name, this.value)
});
else
                for (i in t) U(i, t[i], e, s);
            return n.join("&").replace(Se, "+")
}, ot.fn.extend({
    serialize: function () {
                return ot.param(this.serializeArray())
},
    serializeArray: function () {
                return this.map(function () {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
}).filter(function () {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && je.test(this.nodeName) && !We.test(t) && (this.checked || !jt.test(t))
}).map(function (t, e) {
                    var i = ot(this).val();
                    return null == i ? null : ot.isArray(i) ? ot.map(i, function (t) {
                        return {
    name: e.name,
    value: t.replace(De, "\r\n")
}
}) : {
    name: e.name,
    value: i.replace(De, "\r\n")
}
}).get()
}
}), ot.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
} catch (t) { }
};
        var Ae = {
                0: 200,
                1223: 204
},
            Oe = ot.ajaxSettings.xhr();
        nt.cors = !!Oe && "withCredentials" in Oe, nt.ajax = Oe = !!Oe, ot.ajaxTransport(function (e) {
            var i, n;
            return nt.cors || Oe && !e.crossDomain ? {
    send: function (s, o) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    for (r in s) a.setRequestHeader(r, s[r]);
                    i = function (t) {
                        return function () {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ae[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
    binary: a.response
} : {
    text: a.responseText
}, a.getAllResponseHeaders()))
}
}, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                        4 === a.readyState && t.setTimeout(function () {
                            i && n()
})
}, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
} catch (t) {
                        if (i) throw t
}
},
    abort: function () {
                    i && i()
}
} : void 0
}), ot.ajaxSetup({
    accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
    contents: {
    script: /\b(?:java|ecma)script\b/
},
    converters: {
                "text script": function (t) {
                    return ot.globalEval(t), t
}
}
}), ot.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
}), ot.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i;
                return {
    send: function (n, s) {
                        e = ot("<script>").prop({
    charset: t.scriptCharset,
    src: t.url
}).on("load error", i = function (t) {
                            e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
}), G.head.appendChild(e[0])
},
    abort: function () {
                        i && i()
}
}
}
});
        var ze = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
                var t = ze.pop() || ot.expando + "_" + ve++;
                return this[t] = !0, t
}
}), ot.ajaxPrefilter("json jsonp", function (e, i, n) {
            var s, o, r, a = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + s) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return r || ot.error(s + " was not called"), r[0]
}, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
                r = arguments
}, n.always(function () {
                void 0 === o ? ot(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, ze.push(s)), r && ot.isFunction(o) && o(r[0]), r = o = void 0
}), "script") : void 0
}), ot.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || G;
            var n = ft.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = d([t], e, s), s && s.length && ot(s).remove(), ot.merge([], n.childNodes))
};
        var Ie = ot.fn.load;
        ot.fn.load = function (t, e, i) {
            if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return a > -1 && (n = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && ot.ajax({
    url: t,
    type: s || "GET",
    dataType: "html",
    data: e
}).done(function (t) {
                o = arguments, r.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t)
}).always(i && function (t, e) {
                r.each(function () {
                    i.apply(this, o || [t.responseText, e, t])
})
}), this
}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ot.fn[e] = function (t) {
                return this.on(e, t)
}
}), ot.expr.filters.animated = function (t) {
            return ot.grep(ot.timers, function (e) {
                return t === e.elem
}).length
}, ot.offset = {
    setOffset: function (t, e, i) {
                var n, s, o, r, a, l, c, h = ot.css(t, "position"),
                    u = ot(t),
                    d = {};
                "static" === h && (t.style.position = "relative"), a = u.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
}
}, ot.fn.extend({
    offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ot.offset.setOffset(this, t, e)
});
                var e, i, n = this[0],
                    s = {
    top: 0,
    left: 0
},
                    o = n && n.ownerDocument;
                return o ? (e = o.documentElement, ot.contains(e, n) ? (s = n.getBoundingClientRect(), i = X(o), {
    top: s.top + i.pageYOffset - e.clientTop,
    left: s.left + i.pageXOffset - e.clientLeft
}) : s) : void 0
},
    position: function () {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
    top: 0,
    left: 0
};
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
    top: e.top - n.top - ot.css(i, "marginTop", !0),
    left: e.left - n.left - ot.css(i, "marginLeft", !0)
}
}
},
    offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === ot.css(t, "position") ;) t = t.offsetParent;
                    return t || Kt
})
}
}), ot.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function (t, e) {
            var i = "pageYOffset" === e;
            ot.fn[t] = function (n) {
                return $t(this, function (t, n, s) {
                    var o = X(t);
                    return void 0 === s ? o ? o[e] : t[n] : void (o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
}, t, n, arguments.length)
}
}), ot.each(["top", "left"], function (t, e) {
            ot.cssHooks[e] = k(nt.pixelPosition, function (t, i) {
                return i ? (i = H(t, e), Gt.test(i) ? ot(t).position()[e] + "px" : i) : void 0
})
}), ot.each({
    Height: "height",
    Width: "width"
}, function (t, e) {
            ot.each({
    padding: "inner" + t,
    content: e,
                "": "outer" + t
}, function (i, n) {
                ot.fn[n] = function (n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border");
                    return $t(this, function (e, i, n) {
                        var s;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? ot.css(e, i, r) : ot.style(e, i, n, r)
}, e, o ? n : void 0, o, null)
}
})
}), ot.fn.extend({
    bind: function (t, e, i) {
                return this.on(t, null, e, i)
},
    unbind: function (t, e) {
                return this.off(t, null, e)
},
    delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
},
    undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
},
    size: function () {
                return this.length
}
}), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ot
});
        var Pe = t.jQuery,
            Me = t.$;
        return ot.noConflict = function (e) {
            return t.$ === ot && (t.$ = Me), e && t.jQuery === ot && (t.jQuery = Pe), ot
}, e || (t.jQuery = t.$ = ot), ot
}), ! function (t) {
        "use strict";
        var e = {
    slide: 0,
    delay: 5e3,
    loop: !0,
    preload: !1,
    preloadImage: !1,
    preloadVideo: !1,
    timer: !0,
    overlay: !1,
    autoplay: !0,
    shuffle: !1,
    cover: !0,
    color: null,
    align: "center",
    valign: "center",
    firstTransition: null,
    firstTransitionDuration: null,
    transition: "fade",
    transitionDuration: 1e3,
    transitionRegister: [],
    animation: null,
    animationDuration: "auto",
    animationRegister: [],
    init: function () { },
    play: function () { },
    pause: function () { },
    walk: function () { },
    slides: []
},
            i = {},
            n = function (i, n) {
                this.elmt = i, this.settings = t.extend({}, e, t.vegas.defaults, n), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == 0 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == 0 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
    objectFit: "objectFit" in document.body.style,
    transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
    video: t.vegas.isVideoCompatible()
}, this.settings.shuffle === !0 && this.shuffle(), this._init()
};
        n.prototype = {
    _init: function () {
                var e, i, n, s = "BODY" === this.elmt.tagName,
                    o = this.settings.timer,
                    r = this.settings.overlay,
                    a = this;
                this._preload(), s || (this.$elmt.css("height", this.$elmt.css("height")), e = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || e.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(e), this.elmt.innerHTML = ""), o && this.support.transition && (n = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = n, this.$elmt.prepend(n)), r && (i = t('<div class="vegas-overlay">'), "string" == typeof r && i.css("background-image", "url(" + r + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), s || this.$elmt.append(e), setTimeout(function () {
                    a.trigger("init"), a._goto(a.slide), a.settings.autoplay && a.trigger("play")
}, 1)
},
    _preload: function () {
                var t, e;
                for (e = 0; e < this.settings.slides.length; e++) (this.settings.preload || this.settings.preloadImages) && this.settings.slides[e].src && (t = new Image, t.src = this.settings.slides[e].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[e].video && (this.settings.slides[e].video instanceof Array ? this._video(this.settings.slides[e].video) : this._video(this.settings.slides[e].video.src))
},
    _random: function (t) {
                return t[Math.floor(Math.random() * t.length)]
},
    _slideShow: function () {
                var t = this;
                this.total > 1 && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function () {
                    t.next()
}, this._options("delay")))
},
    _timer: function (t) {
                var e = this;
                clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function () {
                    e.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", e._options("delay") - 100 + "ms")
}, 100))
},
    _video: function (t) {
                var e, n, s = t.toString();
                return i[s] ? i[s] : (t instanceof Array == 0 && (t = [t]), e = document.createElement("video"), e.preload = !0, t.forEach(function (t) {
                    n = document.createElement("source"), n.src = t, e.appendChild(n)
}), i[s] = e, e)
},
    _fadeOutSound: function (t, e) {
                var i = this,
                    n = e / 10,
                    s = t.volume - .09;
                s > 0 ? (t.volume = s, setTimeout(function () {
                    i._fadeOutSound(t, e)
}, n)) : t.pause()
},
    _fadeInSound: function (t, e) {
                var i = this,
                    n = e / 10,
                    s = t.volume + .09;
                1 > s && (t.volume = s, setTimeout(function () {
                    i._fadeInSound(t, e)
}, n))
},
    _options: function (t, e) {
                return void 0 === e && (e = this.slide), void 0 !== this.settings.slides[e][t] ? this.settings.slides[e][t] : this.settings[t]
},
    _goto: function (e) {
                function i() {
                    m._timer(!0), setTimeout(function () {
                        y && (m.support.transition ? (l.css("transition", "all " + w + "ms").addClass("vegas-transition-" + y + "-out"), l.each(function () {
                            var t = l.find("video").get(0);
                            t && (t.volume = 1, m._fadeOutSound(t, w))
}), n.css("transition", "all " + w + "ms").addClass("vegas-transition-" + y + "-in")) : n.fadeIn(w));
                        for (var t = 0; t < l.length - 4; t++) l.eq(t).remove();
                        m.trigger("walk"), m._slideShow()
}, 100)
}
                "undefined" == typeof this.settings.slides[e] && (e = 0), this.slide = e;
                var n, s, o, r, a, l = this.$elmt.children(".vegas-slide"),
                    c = this.settings.slides[e].src,
                    h = this.settings.slides[e].video,
                    u = this._options("delay"),
                    d = this._options("align"),
                    p = this._options("valign"),
                    f = this._options("cover"),
                    g = this._options("color") || this.$elmt.css("background-color"),
                    m = this,
                    v = l.length,
                    y = this._options("transition"),
                    w = this._options("transitionDuration"),
                    x = this._options("animation"),
                    b = this._options("animationDuration");
                this.settings.firstTransition && this.first && (y = this.settings.firstTransition || y), this.settings.firstTransitionDuration && this.first && (w = this.settings.firstTransitionDuration || w),
                    this.first && (this.first = !1), "repeat" !== f && (f === !0 ? f = "cover" : f === !1 && (f = "contain")), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)), ("random" === x || x instanceof Array) && (x = x instanceof Array ? this._random(x) : this._random(this.animations)), ("auto" === w || w > u) && (w = u), "auto" === b && (b = u), n = t('<div class="vegas-slide"></div>'), this.support.transition && y && n.addClass("vegas-transition-" + y), this.support.video && h ? (r = h instanceof Array ? this._video(h) : this._video(h.src), r.loop = void 0 === h.loop || h.loop, r.muted = void 0 === h.mute || h.mute, r.muted === !1 ? (r.volume = 0, this._fadeInSound(r, w)) : r.pause(), o = t(r).addClass("vegas-video").css("background-color", g), this.support.objectFit ? o.css("object-position", d + " " + p).css("object-fit", f).css("width", "100%").css("height", "100%") : "contain" === f && o.css("width", "100%").css("height", "100%"), n.append(o)) : (a = new Image, s = t('<div class="vegas-slide-inner"></div>').css("background-image", 'url("' + c + '")').css("background-color", g).css("background-position", d + " " + p), "repeat" === f ? s.css("background-repeat", "repeat") : s.css("background-size", f), this.support.transition && x && s.addClass("vegas-animation-" + x).css("animation-duration", b + "ms"), n.append(s)), this.support.transition || n.css("display", "none"), v ? l.eq(v - 1).after(n) : this.$elmt.prepend(n), l.css("transition", "all 0ms").each(function () {
                        this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), y && (this.className += " vegas-transition-" + y, this.className += " vegas-transition-" + y + "-in")
}), m._timer(!1), r ? (4 === r.readyState && (r.currentTime = 0), r.play(), i()) : (a.src = c, a.complete ? i() : a.onload = i)
},
    _end: function () {
                this.ended = !0, this._timer(!1), this.trigger("end")
},
    shuffle: function () {
                for (var t, e, i = this.total - 1; i > 0; i--) e = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[e], this.settings.slides[e] = t
},
    play: function () {
                this.paused && (this.paused = !1, this.next(), this.trigger("play"))
},
    pause: function () {
                this._timer(!1), this.paused = !0, this.trigger("pause")
},
    toggle: function () {
                this.paused ? this.play() : this.pause()
},
    playing: function () {
                return !this.paused && !this.noshow
},
    current: function (t) {
                return t ? {
    slide: this.slide,
    data: this.settings.slides[this.slide]
} : this.slide
},
    jump: function (t) {
                0 > t || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
},
    next: function () {
                if (this.slide++, this.slide >= this.total) {
                    if (!this.settings.loop) return this._end();
                    this.slide = 0
}
                this._goto(this.slide)
},
    previous: function () {
                if (this.slide--, this.slide < 0) {
                    if (!this.settings.loop) return void this.slide++;
                    this.slide = this.total - 1
}
                this._goto(this.slide)
},
    trigger: function (t) {
                var e = [];
                e = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, e), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, e)
},
    options: function (i, n) {
                var s = this.settings.slides.slice();
                if ("object" == typeof i) this.settings = t.extend({}, e, t.vegas.defaults, i);
else {
                    if ("string" != typeof i) return this.settings;
                    if (void 0 === n) return this.settings[i];
                    this.settings[i] = n
}
                this.settings.slides !== s && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
},
    destroy: function () {
                clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
}
}, t.fn.vegas = function (t) {
            var e, i = arguments,
                s = !1;
            if (void 0 === t || "object" == typeof t) return this.each(function () {
                this._vegas || (this._vegas = new n(this, t))
});
            if ("string" == typeof t) {
                if (this.each(function () {
                        var n = this._vegas;
                        if (!n) throw new Error("No Vegas applied to this element.");
                        "function" == typeof n[t] && "_" !== t[0] ? e = n[t].apply(n, [].slice.call(i, 1)) : s = !0
}), s) throw new Error('No method "' + t + '" in Vegas.');
                return void 0 !== e ? e : this
}
}, t.vegas = {}, t.vegas.defaults = e, t.vegas.isVideoCompatible = function () {
            return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
}
}(window.jQuery || window.Zepto), ! function (t, e, i, n) {
        function s(e, i) {
            this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
    time: null,
    target: null,
    pointer: null,
    stage: {
    start: null,
    current: null
},
    direction: null
}, this._states = {
    current: {},
    tags: {
    initializing: ["busy"],
    animating: ["busy"],
    dragging: ["interacting"]
}
}, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
                this._handlers[i] = t.proxy(this[i], this)
}, this)), t.each(s.Plugins, t.proxy(function (t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
}, this)), t.each(s.Workers, t.proxy(function (e, i) {
                this._pipe.push({
    filter: i.filter,
    run: t.proxy(i.run, this)
})
}, this)), this.setup(), this.initialize()
}
        s.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
}, s.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
}, s.Type = {
    Event: "event",
    State: "state"
}, s.Plugins = {}, s.Workers = [{
    filter: ["width", "settings"],
    run: function () {
                this._width = this.$element.width()
}
}, {
    filter: ["width", "items", "settings"],
    run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
}
}, {
    filter: ["items", "settings"],
    run: function () {
                this.$stage.children(".cloned").remove()
}
}, {
    filter: ["width", "items", "settings"],
    run: function (t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = {
    width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
};
                !i && this.$stage.children().css(s), t.css = s
}
}, {
    filter: ["width", "items", "settings"],
    run: function (t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
    merge: !1,
    width: e
}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                this._widths = o
}
}, {
    filter: ["items", "settings"],
    run: function () {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    s = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                    a = "",
                    l = "";
                for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
}
}, {
    filter: ["width", "items", "settings"],
    run: function () {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                this._coordinates = o
}
}, {
    filter: ["width", "items", "settings"],
    run: function () {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
};
                this.$stage.css(i)
}
}, {
    filter: ["width", "items", "settings"],
    run: function (t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
else i && (t.css.width = t.items.width, n.css(t.css))
}
}, {
    filter: ["items"],
    run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
}
}, {
    filter: ["width", "items", "settings"],
    run: function (t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
}
}, {
    filter: ["position"],
    run: function () {
                this.animate(this.coordinates(this._current))
}
}, {
    filter: ["width", "position", "items", "settings"],
    run: function () {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + o,
                    a = r + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
}
}], s.prototype.initialize = function () {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, s;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s && this.preloadAutoWidthImages(e)
}
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
}, s.prototype.setup = function () {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function (t) {
                e >= t && t > n && (n = Number(t))
}), s = t.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
    property: {
    name: "settings",
    value: s
}
}), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
    property: {
    name: "settings",
    value: this.settings
}
})
}, s.prototype.optionsLogic = function () {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
}, s.prototype.prepare = function (e) {
            var i = this.trigger("prepare", {
    content: e
});
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
    content: i.data
}), i.data
}, s.prototype.update = function () {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
                    return this[t]
}, this._invalidated), s = {}; i > e;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
}, s.prototype.width = function (t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
}
}, s.prototype.refresh = function () {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
}, s.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
}, s.prototype.onResize = function () {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
}, s.prototype.registerEventHandlers = function () {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                return !1
})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
}, s.prototype.onDragStart = function (e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
    x: n[16 === n.length ? 12 : 4],
    y: n[16 === n.length ? 13 : 5]
}) : (n = this.$stage.position(), n = {
    x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
    y: n.top
}), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
}, this)))
}, s.prototype.onDragMove = function (t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
}, s.prototype.onDragEnd = function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                s = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
                return !1
})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
}, s.prototype.closest = function (e, i) {
            var n = -1,
                s = 30,
                o = this.width(),
                r = this.coordinates();
            return this.settings.freeDrag || t.each(r, t.proxy(function (t, a) {
                return "left" === i && e > a - s && a + s > e ? n = t : "right" === i && e > a - o - s && a - o + s > e ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] || a - o) && (n = "left" === i ? t + 1 : t), -1 === n
}, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
}, s.prototype.animate = function (e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
    transform: "translate3d(" + e + "px,0px,0px)",
    transition: this.speed() / 1e3 + "s"
}) : i ? this.$stage.animate({
    left: e + "px"
}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
    left: e + "px"
})
}, s.prototype.is = function (t) {
            return this._states.current[t] && this._states.current[t] > 0
}, s.prototype.current = function (t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
    property: {
    name: "position",
    value: t
}
});
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
    property: {
    name: "position",
    value: this._current
}
})
}
            return this._current
}, s.prototype.invalidate = function (e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
                return e
})
}, s.prototype.reset = function (t) {
            t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
}, s.prototype.normalize = function (t, e) {
            var i = this._items.length,
                s = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || 1 > i ? t = n : (0 > t || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
}, s.prototype.relative = function (t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
}, s.prototype.maximum = function (t) {
            var e, i, n, s = this.settings,
                o = this._coordinates.length;
            if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
else if (s.autoWidth || s.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width() ; e-- && (i += this._items[e].width() + this.settings.margin, !(i > n)) ;);
                o = e + 1
} else o = s.center ? this._items.length - 1 : this._items.length - s.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
}, s.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
}, s.prototype.items = function (t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
}, s.prototype.mergers = function (t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
}, s.prototype.clones = function (e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                o = function (t) {
                    return t % 2 === 0 ? s + t / 2 : i - (t + 1) / 2
};
            return e === n ? t.map(this._clones, function (t, e) {
                return o(e)
}) : t.map(this._clones, function (t, i) {
                return t === e ? o(i) : null
})
}, s.prototype.speed = function (t) {
            return t !== n && (this._speed = t), this._speed
}, s.prototype.coordinates = function (e) {
            var i, s = 1,
                o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
                return this.coordinates(e)
}, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
}, s.prototype.duration = function (t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
}, s.prototype.to = function (t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                o = (s > 0) - (0 > s),
                r = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), t = i + s, n = ((t - a) % r + r) % r + a, n !== t && l >= n - s && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
}, s.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
}, s.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
}, s.prototype.onTransitionEnd = function (t) {
            return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
}, s.prototype.viewport = function () {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
else if (e.innerWidth) n = e.innerWidth;
else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
}
            return n
}, s.prototype.replace = function (e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
                return 1 === this.nodeType
}).each(t.proxy(function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
}, s.prototype.add = function (e, i) {
            var s = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
    content: e,
    position: i
}), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
    content: e,
    position: i
})
}, s.prototype.remove = function (t) {
            t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
    content: this._items[t],
    position: t
}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
    content: null,
    position: t
}))
}, s.prototype.preloadAutoWidthImages = function (e) {
            e.each(t.proxy(function (e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
}, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
}, this))
}, s.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
}, s.prototype.op = function (t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
}
}, s.prototype.on = function (t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
}, s.prototype.off = function (t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
}, s.prototype.trigger = function (e, i, n, o, r) {
            var a = {
    item: {
    count: this._items.length,
    index: this.current()
}
},
                l = t.camelCase(t.grep(["on", e, n], function (t) {
                    return t
}).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
    relatedTarget: this
}, a, i));
            return this._supress[e] || (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(c)
}), this.register({
    type: s.Type.Event,
    name: e
}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
}, s.prototype.enter = function (e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
}, this))
}, s.prototype.leave = function (e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
                this._states.current[e]--
}, this))
}, s.prototype.register = function (e) {
            if (e.type === s.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function (t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
}, t.event.special[e.name].owl = !0
}
} else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
}, this)))
}, s.prototype.suppress = function (e) {
            t.each(e, t.proxy(function (t, e) {
                this._supress[e] = !0
}, this))
}, s.prototype.release = function (e) {
            t.each(e, t.proxy(function (t, e) {
                delete this._supress[e]
}, this))
}, s.prototype.pointer = function (t) {
            var i = {
    x: null,
    y: null
};
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
}, s.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t))
}, s.prototype.difference = function (t, e) {
            return {
    x: t.x - e.x,
    y: t.y - e.y
}
}, t.fn.owlCarousel = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                    o.register({
    type: s.Type.Event,
    name: i
}), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
}, o))
})), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
})
}, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
        s.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
}, s.prototype.watch = function () {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
}, s.prototype.refresh = function () {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
}, s.prototype.destroy = function () {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * s || 0, r = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + o, a = this._core.clones().length, l = t.proxy(function (t, e) {
                                this.load(e)
}, this) ; o++ < s;) this.load(a / 2 + this._core.relative(r)), a && t.each(this._core.clones(this._core.relative(r)), l), r++
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
        s.Defaults = {
    lazyLoad: !1
}, s.prototype.load = function (i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function (i, n) {
                var s, o = t(n),
                    r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", {
    element: o,
    url: r
}, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
                    o.css("opacity", 1), this._core.trigger("loaded", {
    element: o,
    url: r
}, "lazy")
}, this)).attr("src", r) : (s = new Image, s.onload = t.proxy(function () {
                    o.css({
                        "background-image": "url(" + r + ")",
    opacity: "1"
}), this._core.trigger("loaded", {
    element: o,
    url: r
}, "lazy")
}, this), s.src = r)
}, this)), this._loaded.push(n.get(0)))
}, s.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
}, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
}, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
        s.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
}, s.prototype.update = function () {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                s = [],
                o = 0;
            t.each(n, function (e, i) {
                s.push(t(i).height())
}), o = Math.max.apply(null, s), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
}, s.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.register({
    type: "state",
    name: "playing",
    tags: ["interacting"]
})
}, this),
                "resize.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
}, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
}, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
}, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
}
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
                this.play(t)
}, this))
};
        s.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
}, s.prototype.fetch = function (t, e) {
            var i = function () {
                    return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
}(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
}
            n = n[6], this._videos[r] = {
    type: i,
    id: n,
    width: s,
    height: o
}, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
}, s.prototype.thumbnail = function (e, i) {
            var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                h = this._core.settings,
                u = function (t) {
                    s = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                        e.after(n), e.after(s)
};
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void ("youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({
    type: "GET",
    url: "//vimeo.com/api/v2/video/" + i.id + ".json",
    jsonp: "callback",
    dataType: "jsonp",
    success: function (t) {
                    o = t[0].thumbnail_large, u(o)
}
}) : "vzaar" === i.type && t.ajax({
    type: "GET",
    url: "//vzaar.com/api/videos/" + i.id + ".json",
    jsonp: "callback",
    dataType: "jsonp",
    success: function (t) {
                    o = t.framegrab_url, u(o)
}
}))
}, s.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
}, s.prototype.play = function (e) {
            var i, n = t(e.target),
                s = n.closest("." + this._core.settings.itemClass),
                o = this._videos[s.attr("data-video")],
                r = o.width || "100%",
                a = o.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === o.type ? i = '<iframe width="' + r + '" height="' + a + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
}, s.prototype.isInFullScreen = function () {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
}, s.prototype.destroy = function () {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
}, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type)
}, this),
                "translate.owl.carousel": t.proxy(function (t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
}, this)
}, this.core.$element.on(this.handlers)
};
        s.Defaults = {
    animateOut: !1,
    animateIn: !1
}, s.prototype.swap = function () {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
    left: e + "px"
}).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
}
}, s.prototype.clear = function (e) {
            t(e.target).css({
    left: ""
}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
}, s.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var s = function (e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function (t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
}, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.autoplay && this.play()
}, this),
                "play.owl.autoplay": t.proxy(function (t, e, i) {
                    t.namespace && this.play(e, i)
}, this),
                "stop.owl.autoplay": t.proxy(function (t) {
                    t.namespace && this.stop()
}, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
}, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
}, this),
                "touchstart.owl.core": t.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
}, this),
                "touchend.owl.core": t.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play()
}, this)
}, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
};
        s.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
}, s.prototype.play = function (t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
}, s.prototype._getNextTimeout = function (n, s) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
}, this), n || this._core.settings.autoplayTimeout)
}, s.prototype._setAutoPlayInterval = function () {
            this._timeout = this._getNextTimeout()
}, s.prototype.stop = function () {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
}, s.prototype.pause = function () {
            this._core.is("rotating") && (this._paused = !0)
}, s.prototype.destroy = function () {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        "use strict";
        var s = function (e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
    next: this._core.next,
    prev: this._core.prev,
    to: this._core.to
}, this._handlers = {
                "prepared.owl.carousel": t.proxy(function (e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
}, this),
                "added.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
}, this),
                "remove.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
}, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    t.namespace && "position" == t.property.name && this.draw()
}, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
}, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
};
        s.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
}, s.prototype.initialize = function () {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
                this.prev(i.navSpeed)
}, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
                this.next(i.navSpeed)
}, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
}, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
}, s.prototype.destroy = function () {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
}, s.prototype.update = function () {
            var t, e, i, n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                o = this._core.maximum(!0),
                r = this._core.settings,
                a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; s > t; t++) {
                    if (e >= a || 0 === e) {
                        if (this._pages.push({
    start: Math.min(o, t - n),
    end: t - n + a - 1
}), Math.min(o, t - n) === o) break;
                        e = 0, ++i
}
                    e += this._core.mergers(this._core.relative(t))
}
}, s.prototype.draw = function () {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                s = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
}, s.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
    index: t.inArray(this.current(), this._pages),
    count: this._pages.length,
    size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
}
}, s.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function (t, i) {
                return t.start <= e && t.end >= e
}, this)).pop()
}, s.prototype.getPosition = function (e) {
            var i, n, s = this._core.settings;
            return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
}, s.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
}, s.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
}, s.prototype.to = function (e, i, n) {
            var s;
            !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
}, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        "use strict";
        var s = function (i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function (i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
}, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
}
}, this),
                "changed.owl.carousel": t.proxy(function (i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            s = t.map(this._hashes, function (t, e) {
                                return t === n ? e : null
}).join();
                        if (!s || e.location.hash.slice(1) === s) return;
                        e.location.hash = s
}
}, this)
}, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
                var i = e.location.hash.substring(1),
                    s = this._core.$stage.children(),
                    o = this._hashes[i] && s.index(this._hashes[i]);
                o !== n && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
}, this))
};
        s.Defaults = {
    URLhashListener: !1
}, s.prototype.destroy = function () {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
}, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        function s(e, i) {
            var s = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
                return r[e] !== n ? (s = !i || e, !1) : void 0
}), s
}

        function o(t) {
            return s(t, !0)
}
        var r = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
    transition: {
    end: {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    transition: "transitionend"
}
},
    animation: {
    end: {
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "animationend",
    OAnimation: "oAnimationEnd",
    animation: "animationend"
}
}
},
            c = {
    csstransforms: function () {
                    return !!s("transform")
},
    csstransforms3d: function () {
                    return !!s("perspective")
},
    csstransitions: function () {
                    return !!s("transition")
},
    cssanimations: function () {
                    return !!s("animation")
}
};
        c.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), ! function (t, e, i, n) {
        function s(e, i) {
            this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = o, this.init()
}
        var o = "stellar",
            r = {
    scrollProperty: "scroll",
    positionProperty: "position",
    horizontalScrolling: !0,
    verticalScrolling: !0,
    horizontalOffset: 0,
    verticalOffset: 0,
    responsive: !1,
    parallaxBackgrounds: !0,
    parallaxElements: !0,
    hideDistantElements: !0,
    hideElement: function (t) {
                    t.hide()
},
    showElement: function (t) {
                    t.show()
}
},
            a = {
    scroll: {
    getLeft: function (t) {
                        return t.scrollLeft()
},
    setLeft: function (t, e) {
                        t.scrollLeft(e)
},
    getTop: function (t) {
                        return t.scrollTop()
},
    setTop: function (t, e) {
                        t.scrollTop(e)
}
},
    position: {
    getLeft: function (t) {
                        return -1 * parseInt(t.css("left"), 10)
},
    getTop: function (t) {
                        return -1 * parseInt(t.css("top"), 10)
}
},
    margin: {
    getLeft: function (t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
},
    getTop: function (t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
}
},
    transform: {
    getLeft: function (t) {
                        var e = getComputedStyle(t[0])[h];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
},
    getTop: function (t) {
                        var e = getComputedStyle(t[0])[h];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
}
}
},
            l = {
    position: {
    setLeft: function (t, e) {
                        t.css("left", e)
},
    setTop: function (t, e) {
                        t.css("top", e)
}
},
    transform: {
    setPosition: function (t, e, i, n, s) {
                        t[0].style[h] = "translate3d(" + (e - i) + "px, " + (n - s) + "px, 0)"
}
}
},
            c = function () {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = t("script")[0].style,
                    s = "";
                for (e in n)
                    if (i.test(e)) {
                        s = e.match(i)[0];
                        break
}
                return "WebkitOpacity" in n && (s = "Webkit"), "KhtmlOpacity" in n && (s = "Khtml"),
                    function (t) {
                        return s + (s.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
}
}(),
            h = c("transform"),
            u = t("<div />", {
    style: "background:#fff"
}).css("background-position-x") !== n,
            d = u ? function (t, e, i) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": i
})
} : function (t, e, i) {
                t.css("background-position", e + " " + i)
},
            p = u ? function (t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
} : function (t) {
                return t.css("background-position").split(" ")
},
            f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
};
        s.prototype = {
    init: function () {
                this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
    firstLoad: !0
}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
},
    _defineElements: function () {
                this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
},
    _defineGetters: function () {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function () {
                    return e.getLeft(t.$scrollElement)
}, this._getScrollTop = function () {
                    return e.getTop(t.$scrollElement)
}
},
    _defineSetters: function () {
                var e = this,
                    i = a[e.options.scrollProperty],
                    n = l[e.options.positionProperty],
                    s = i.setLeft,
                    o = i.setTop;
                this._setScrollLeft = "function" == typeof s ? function (t) {
                    s(e.$scrollElement, t)
} : t.noop, this._setScrollTop = "function" == typeof o ? function (t) {
                    o(e.$scrollElement, t)
} : t.noop, this._setPosition = n.setPosition || function (t, i, s, o, r) {
                    e.options.horizontalScrolling && n.setLeft(t, i, s), e.options.verticalScrolling && n.setTop(t, o, r)
}
},
    _handleWindowLoadAndResize: function () {
                var i = this,
                    n = t(e);
                i.options.responsive && n.bind("load." + this.name, function () {
                    i.refresh()
}), n.bind("resize." + this.name, function () {
                    i._detectViewport(), i.options.responsive && i.refresh()
})
},
    refresh: function (i) {
                var n = this,
                    s = n._getScrollLeft(),
                    o = n._getScrollTop();
                i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function () {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
}), this._setScrollLeft(s), this._setScrollTop(o)
},
    _detectViewport: function () {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== n;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
},
    _findParticles: function () {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                    for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                    var i, s, o, r, a, l, c, h, u, d = t(this),
                        p = 0,
                        f = 0,
                        g = 0,
                        m = 0;
                    if (d.data("stellar-elementIsActive")) {
                        if (d.data("stellar-elementIsActive") !== this) return
} else d.data("stellar-elementIsActive", this);
                    e.options.showElement(d), d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")), d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")), d.data("stellar-startingTop", d.css("top"))), o = d.position().left, r = d.position().top, a = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), h = d.offset().left - a, u = d.offset().top - l, d.parents().each(function () {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (p = g, f = m, c = e, !1) : (g += e.position().left, void (m += e.position().top))
}), i = d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : e.horizontalOffset, s = d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
    $element: d,
    $offsetParent: c,
    isFixed: "fixed" === d.css("position"),
    horizontalOffset: i,
    verticalOffset: s,
    startingPositionLeft: o,
    startingPositionTop: r,
    startingOffsetLeft: h,
    startingOffsetTop: u,
    parentOffsetLeft: p,
    parentOffsetTop: f,
    stellarRatio: d.data("stellar-ratio") !== n ? d.data("stellar-ratio") : 1,
    width: d.outerWidth(!0),
    height: d.outerHeight(!0),
    isHidden: !1
})
})
},
    _findBackgrounds: function () {
                var e, i = this,
                    s = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function () {
                    var e, r, a, l, c, h, u, f = t(this),
                        g = p(f),
                        m = 0,
                        v = 0,
                        y = 0,
                        w = 0;
                    if (f.data("stellar-backgroundIsActive")) {
                        if (f.data("stellar-backgroundIsActive") !== this) return
} else f.data("stellar-backgroundIsActive", this);
                    f.data("stellar-backgroundStartingLeft") ? d(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", g[0]), f.data("stellar-backgroundStartingTop", g[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - s, h = f.offset().top - l - o, f.parents().each(function () {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (m = y, v = w, u = e, !1) : (y += e.position().left, void (w += e.position().top))
}), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, r = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
    $element: f,
    $offsetParent: u,
    isFixed: "fixed" === f.css("background-attachment"),
    horizontalOffset: e,
    verticalOffset: r,
    startingValueLeft: g[0],
    startingValueTop: g[1],
    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
    startingPositionLeft: f.position().left,
    startingPositionTop: f.position().top,
    startingOffsetLeft: c,
    startingOffsetTop: h,
    parentOffsetLeft: m,
    parentOffsetTop: v,
    stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
})
}))
},
    _reset: function () {
                var t, e, i, n, s;
                for (s = this.particles.length - 1; s >= 0; s--) t = this.particles[s], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (s = this.backgrounds.length - 1; s >= 0; s--) n = this.backgrounds[s], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(n.$element, n.startingValueLeft, n.startingValueTop)
},
    destroy: function () {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
},
    _setOffsets: function () {
                var i = this,
                    n = t(e);
                n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function () {
                    i.horizontalOffset = i.options.horizontalOffset()
})) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function () {
                    i.verticalOffset = i.options.verticalOffset()
})) : this.verticalOffset = this.options.verticalOffset
},
    _repositionElements: function () {
                var t, e, i, n, s, o, r, a, l, c, h = this._getScrollLeft(),
                    u = this._getScrollTop(),
                    p = !0,
                    f = !0;
                if (this.currentScrollLeft !== h || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = h, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (h + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = o - t.startingPositionLeft + t.startingOffsetLeft) : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (u + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : h) && a < (t.isFixed ? 0 : h) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : u) && l < (t.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (h + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, s = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, d(i.$element, n, s)
}
},
    _handleScrollEvent: function () {
                var t = this,
                    e = !1,
                    i = function () {
                        t._repositionElements(), e = !1
},
                    n = function () {
                        e || (f(i), e = !0)
};
                this.$scrollElement.bind("scroll." + this.name, n), n()
},
    _startAnimationLoop: function () {
                var t = this;
                this._animationLoop = function () {
                    f(t._animationLoop), t._repositionElements()
}, this._animationLoop()
}
}, t.fn[o] = function (e) {
            var i = arguments;
            return e === n || "object" == typeof e ? this.each(function () {
                t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new s(this, e))
}) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var n = t.data(this, "plugin_" + o);
                n instanceof s && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
}) : void 0
}, t[o] = function () {
            var i = t(e);
            return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
}, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = s
}(jQuery, this, document), ! function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
        var e = -1,
            i = -1,
            n = function (t) {
                return parseFloat(t) || 0
},
            s = function (e) {
                var i = 1,
                    s = t(e),
                    o = null,
                    r = [];
                return s.each(function () {
                    var e = t(this),
                        s = e.offset().top - n(e.css("margin-top")),
                        a = r.length > 0 ? r[r.length - 1] : null;
                    null === a ? r.push(e) : Math.floor(Math.abs(o - s)) <= i ? r[r.length - 1] = a.add(e) : r.push(e), o = s
}), r
},
            o = function (e) {
                var i = {
    byRow: !0,
    property: "height",
    target: null,
    remove: !1
};
                return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
},
            r = t.fn.matchHeight = function (e) {
                var i = o(e);
                if (i.remove) {
                    var n = this;
                    return this.css(i.property, ""), t.each(r._groups, function (t, e) {
                        e.elements = e.elements.not(n)
}), this
}
                return this.length <= 1 && !i.target ? this : (r._groups.push({
    elements: this,
    options: i
}), r._apply(this, i), this)
};
        r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = s, r._parse = n, r._parseOptions = o, r._apply = function (e, i) {
            var a = o(i),
                l = t(e),
                c = [l],
                h = t(window).scrollTop(),
                u = t("html").outerHeight(!0),
                d = l.parents().filter(":hidden");
            return d.each(function () {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
}), d.css("display", "block"), a.byRow && !a.target && (l.each(function () {
                var e = t(this),
                    i = e.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), e.css({
    display: i,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
    height: "100px",
    overflow: "hidden"
})
}), c = s(l), l.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
})), t.each(c, function (e, i) {
                var s = t(i),
                    o = 0;
                if (a.target) o = a.target.outerHeight(!1);
else {
                    if (a.byRow && s.length <= 1) return void s.css(a.property, "");
                    s.each(function () {
                        var e = t(this),
                            i = e.attr("style"),
                            n = e.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var s = {
    display: n
};
                        s[a.property] = "", e.css(s), e.outerHeight(!1) > o && (o = e.outerHeight(!1)), i ? e.attr("style", i) : e.css("display", "")
})
}
                s.each(function () {
                    var e = t(this),
                        i = 0;
                    a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), i += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(a.property, o - i + "px"))
})
}), d.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
}), r._maintainScroll && t(window).scrollTop(h / u * t("html").outerHeight(!0)), this
}, r._applyDataApi = function () {
            var e = {};
            t("[data-match-height], [data-mh]").each(function () {
                var i = t(this),
                    n = i.attr("data-mh") || i.attr("data-match-height");
                n in e ? e[n] = e[n].add(i) : e[n] = i
}), t.each(e, function () {
                this.matchHeight(!0)
})
};
        var a = function (e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
                r._apply(this.elements, this.options)
}), r._afterUpdate && r._afterUpdate(e, r._groups)
};
        r._update = function (n, s) {
            if (s && "resize" === s.type) {
                var o = t(window).width();
                if (o === e) return;
                e = o
}
            n ? -1 === i && (i = setTimeout(function () {
                a(s), i = -1
}, r._throttle)) : a(s)
}, t(r._applyDataApi), t(window).bind("load", function (t) {
            r._update(!1, t)
}), t(window).bind("resize orientationchange", function (t) {
            r._update(!0, t)
})
}), ! function (t, e) {
        "use strict";

        function i(e) {
            return N.formatter = c, A = t("body"), W = D(), j = W !== !1, j || (W = "transitionend.boxer"), t(this).on("click.boxer", t.extend({}, N, e || {}), n)
}

        function n(i) {
            if ("undefined" == typeof O.$boxer) {
                var n = t(this),
                    o = i.data.$object,
                    r = n[0].href ? n[0].href || "" : "",
                    l = n[0].hash ? n[0].hash || "" : "",
                    c = r.toLowerCase().split(".").pop().split(/\#|\?/),
                    u = c[0],
                    d = n.data("boxer-type") || "",
                    f = "image" === d || t.inArray(u, i.data.extensions) > -1 || "data:image" === r.substr(0, 10),
                    g = r.indexOf("youtube.com/embed") > -1 || r.indexOf("player.vimeo.com/video") > -1,
                    _ = "url" === d || !f && !g && "http" === r.substr(0, 4) && !l,
                    $ = "element" === d || !f && !g && !_ && "#" === l.substr(0, 1),
                    T = "undefined" != typeof o;
                if ($ && (r = l), t("#boxer").length > 1 || !(f || g || _ || $ || T)) return;
                if (E(i), O = t.extend({}, {
    $window: t(e),
    $body: t("body"),
    $target: n,
    $object: o,
    visible: !1,
    resizeTimer: null,
    touchTimer: null,
    gallery: {
    active: !1
},
    isMobile: z || i.data.mobile,
    isAnimating: !0,
    oldContentHeight: 0,
    oldContentWidth: 0
}, i.data), O.margin *= 2, O.type = f ? "image" : g ? "video" : "element", f || g) {
                    var C = O.$target.data("gallery") || O.$target.attr("rel");
                    "undefined" != typeof C && C !== !1 && (O.gallery.active = !0, O.gallery.id = C, O.gallery.$items = t("a[data-gallery= " + O.gallery.id + "], a[rel= " + O.gallery.id + "]"), O.gallery.index = O.gallery.$items.index(O.$target), O.gallery.total = O.gallery.$items.length - 1)
}
                var H = "";
                if (O.isMobile || (H += '<div id="boxer-overlay" class="' + O.customClass + '"></div>'), H += '<div id="boxer" class="loading animating ' + O.customClass, O.fixed && (H += " fixed"), O.isMobile && (H += " mobile"), _ && (H += " iframe"), ($ || T) && (H += " inline"), H += '">', H += '<span class="boxer-close">' + O.labels.close + "</span>", H += '<span class="boxer-loading"></span>', H += '<div class="boxer-container">', H += '<div class="boxer-content">', (f || g) && (H += '<div class="boxer-meta">', O.gallery.active ? (H += '<div class="boxer-control previous">' + O.labels.previous + "</div>", H += '<div class="boxer-control next">' + O.labels.next + "</div>", H += '<p class="boxer-position"', O.gallery.total < 1 && (H += ' style="display: none;"'), H += ">", H += '<span class="current">' + (O.gallery.index + 1) + "</span> " + O.labels.count + ' <span class="total">' + (O.gallery.total + 1) + "</span>", H += "</p>", H += '<div class="boxer-caption gallery">') : H += '<div class="boxer-caption">', H += O.formatter.apply(O.$body, [O.$target]), H += "</div></div>"), H += "</div></div></div>", O.$body.append(H), O.$overlay = t("#boxer-overlay"), O.$boxer = t("#boxer"), O.$container = O.$boxer.find(".boxer-container"), O.$content = O.$boxer.find(".boxer-content"), O.$meta = O.$boxer.find(".boxer-meta"), O.$position = O.$boxer.find(".boxer-position"), O.$caption = O.$boxer.find(".boxer-caption"), O.$controls = O.$boxer.find(".boxer-control"), O.paddingVertical = O.isMobile ? O.$boxer.find(".boxer-close").outerHeight() / 2 : parseInt(O.$boxer.css("paddingTop"), 10) + parseInt(O.$boxer.css("paddingBottom"), 10), O.paddingHorizontal = O.isMobile ? 0 : parseInt(O.$boxer.css("paddingLeft"), 10) + parseInt(O.$boxer.css("paddingRight"), 10), O.contentHeight = O.$boxer.outerHeight() - O.paddingVertical, O.contentWidth = O.$boxer.outerWidth() - O.paddingHorizontal, O.controlHeight = O.$controls.outerHeight(), a(), O.gallery.active && v(), O.$window.on("resize.boxer", I.resize).on("keydown.boxer", y), O.$body.on("touchstart.boxer click.boxer", "#boxer-overlay, #boxer .boxer-close", s).on("touchmove.boxer", E), O.gallery.active && O.$boxer.on("touchstart.boxer click.boxer", ".boxer-control", m), O.$boxer.on(W, function (e) {
                        E(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), f ? h(r) : g ? p(r) : _ ? x(r) : $ ? w(r) : T ? b(O.$object) : t.error("BOXER: '" + r + "' is not valid."))
}), A.addClass("boxer-open"), j || O.$boxer.trigger(W), T) return O.$boxer
}
}

        function s(e) {
            E(e), "undefined" != typeof O.$boxer && (O.$boxer.on(W, function (e) {
                E(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), O.$overlay.remove(), O.$boxer.remove(), O = {})
}).addClass("animating"), A.removeClass("boxer-open"), j || O.$boxer.trigger(W), L(O.resizeTimer), O.$window.off("resize.boxer").off("keydown.boxer"), O.$body.off(".boxer").removeClass("boxer-open"), O.gallery.active && O.$boxer.off(".boxer"), O.isMobile && "image" === O.type && O.gallery.active && O.$container.off(".boxer"), O.$window.trigger("close.boxer"))
}

        function o() {
            var e = l();
            O.isMobile ? 0 : O.duration, O.isMobile || O.$controls.css({
    marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
}), !O.visible && O.isMobile && O.gallery.active && O.$content.on("touchstart.boxer", ".boxer-image", T), (O.isMobile || O.fixed) && O.$body.addClass("boxer-open"), O.$boxer.on(W, function (e) {
                E(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), O.$container.on(W, function (e) {
                    E(e), t(e.target).is(O.$container) && (O.$container.off(W), O.$boxer.removeClass("animating"), O.isAnimating = !1)
}), O.$boxer.removeClass("loading"), j || O.$content.trigger(W), O.visible = !0, O.callback.apply(O.$boxer), O.$window.trigger("open.boxer"), O.gallery.active && g())
}), O.isMobile || O.$boxer.css({
    height: O.contentHeight + O.paddingVertical,
    width: O.contentWidth + O.paddingHorizontal,
    top: O.fixed ? 0 : e.top
});
            var i = O.oldContentHeight !== O.contentHeight || O.oldContentWidth !== O.contentWidth;
            !O.isMobile && j && i || O.$boxer.trigger(W), O.oldContentHeight = O.contentHeight, O.oldContentWidth = O.contentWidth
}

        function r() {
            if (O.visible && !O.isMobile) {
                var t = l();
                O.$controls.css({
    marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
}), O.$boxer.css({
    height: O.contentHeight + O.paddingVertical,
    width: O.contentWidth + O.paddingHorizontal,
    top: O.fixed ? 0 : t.top
})
}
}

        function a() {
            var t = l();
            O.$boxer.css({
    top: O.fixed ? 0 : t.top
})
}

        function l() {
            if (O.isMobile) return {
    left: 0,
    top: 0
};
            var t = {
    left: (O.$window.width() - O.contentWidth - O.paddingHorizontal) / 2,
    top: O.top <= 0 ? (O.$window.height() - O.contentHeight - O.paddingVertical) / 2 : O.top
};
            return O.fixed !== !0 && (t.top += O.$window.scrollTop()), t
}

        function c(t) {
            var e = t.attr("title");
            return void 0 !== e && "" !== e.trim() ? '<p class="caption">' + e.trim() + "</p>" : ""
}

        function h(e) {
            O.$image = t("<img />"), O.$image.load(function () {
                O.$image.off("load, error");
                var t = k(O.$image);
                O.naturalHeight = t.naturalHeight, O.naturalWidth = t.naturalWidth, O.retina && (O.naturalHeight /= 2, O.naturalWidth /= 2), O.$content.prepend(O.$image), "" === O.$caption.html() ? O.$caption.hide() : O.$caption.show(), u(), o()
}).error($).attr("src", e).addClass("boxer-image"), (O.$image[0].complete || 4 === O.$image[0].readyState) && O.$image.trigger("load")
}

        function u() {
            var t = 0;
            for (O.windowHeight = O.viewportHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.$window.width() - O.paddingHorizontal, O.contentHeight = 1 / 0, O.contentWidth = 1 / 0, O.imageMarginTop = 0, O.imageMarginLeft = 0; O.contentHeight > O.viewportHeight && 2 > t;) O.imageHeight = 0 === t ? O.naturalHeight : O.$image.outerHeight(), O.imageWidth = 0 === t ? O.naturalWidth : O.$image.outerWidth(), O.metaHeight = 0 === t ? 0 : O.metaHeight, 0 === t && (O.ratioHorizontal = O.imageHeight / O.imageWidth, O.ratioVertical = O.imageWidth / O.imageHeight, O.isWide = O.imageWidth > O.imageHeight), O.imageHeight < O.minHeight && (O.minHeight = O.imageHeight), O.imageWidth < O.minWidth && (O.minWidth = O.imageWidth), O.isMobile ? (O.$meta.css({
    width: O.windowWidth
}), O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.viewportHeight - O.paddingVertical, O.contentWidth = O.viewportWidth - O.paddingHorizontal, d(), O.imageMarginTop = (O.contentHeight - O.targetImageHeight - O.metaHeight) / 2, O.imageMarginLeft = (O.contentWidth - O.targetImageWidth) / 2) : (0 === t && (O.viewportHeight -= O.margin + O.paddingVertical, O.viewportWidth -= O.margin + O.paddingHorizontal), O.viewportHeight -= O.metaHeight, d(), O.contentHeight = O.targetImageHeight, O.contentWidth = O.targetImageWidth), O.$meta.css({
    width: O.contentWidth
}), O.$image.css({
    height: O.targetImageHeight,
    width: O.targetImageWidth,
    marginTop: O.imageMarginTop,
    marginLeft: O.imageMarginLeft
}), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight += O.metaHeight), t++
}

        function d() {
            var t = O.isMobile ? O.contentHeight - O.metaHeight : O.viewportHeight,
                e = O.isMobile ? O.contentWidth : O.viewportWidth;
            O.isWide ? (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal, O.targetImageHeight > t && (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical)) : (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical, O.targetImageWidth > e && (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal)), (O.targetImageWidth > O.imageWidth || O.targetImageHeight > O.imageHeight) && (O.targetImageHeight = O.imageHeight, O.targetImageWidth = O.imageWidth), (O.targetImageWidth < O.minWidth || O.targetImageHeight < O.minHeight) && (O.targetImageWidth < O.minWidth ? (O.targetImageWidth = O.minWidth, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal) : (O.targetImageHeight = O.minHeight, O.targetImageWidth = O.targetImageHeight * O.ratioVertical))
}

        function p(e) {
            O.$videoWrapper = t('<div class="boxer-video-wrapper" />'), O.$video = t('<iframe class="boxer-video" seamless="seamless" />'), O.$video.attr("src", e).addClass("boxer-video").prependTo(O.$videoWrapper), O.$content.prepend(O.$videoWrapper), f(), o()
}

        function f() {
            O.windowHeight = O.viewportHeight = O.contentHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.contentWidth = O.$window.width() - O.paddingHorizontal, O.videoMarginTop = 0, O.videoMarginLeft = 0, O.isMobile ? (O.$meta.css({
    width: O.windowWidth
}), O.metaHeight = O.$meta.outerHeight(!0), O.viewportHeight -= O.metaHeight, O.targetVideoWidth = O.viewportWidth, O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.targetVideoHeight > O.viewportHeight && (O.targetVideoHeight = O.viewportHeight, O.targetVideoWidth = O.targetVideoHeight / O.videoRatio), O.videoMarginTop = (O.viewportHeight - O.targetVideoHeight) / 2, O.videoMarginLeft = (O.viewportWidth - O.targetVideoWidth) / 2) : (O.viewportHeight = O.windowHeight - O.margin, O.viewportWidth = O.windowWidth - O.margin, O.targetVideoWidth = O.videoWidth > O.viewportWidth ? O.viewportWidth : O.videoWidth, O.targetVideoWidth < O.minWidth && (O.targetVideoWidth = O.minWidth), O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.contentHeight = O.targetVideoHeight, O.contentWidth = O.targetVideoWidth), O.$meta.css({
    width: O.contentWidth
}), O.$videoWrapper.css({
    height: O.targetVideoHeight,
    width: O.targetVideoWidth,
    marginTop: O.videoMarginTop,
    marginLeft: O.videoMarginLeft
}), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.targetVideoHeight + O.metaHeight)
}

        function g(e) {
            var i = "";
            O.gallery.index > 0 && (i = O.gallery.$items.eq(O.gallery.index - 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">')), O.gallery.index < O.gallery.total && (i = O.gallery.$items.eq(O.gallery.index + 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">'))
}

        function m(e) {
            E(e);
            var i = t(this);
            O.isAnimating || i.hasClass("disabled") || (O.isAnimating = !0, O.gallery.index += i.hasClass("next") ? 1 : -1, O.gallery.index > O.gallery.total && (O.gallery.index = O.gallery.total), O.gallery.index < 0 && (O.gallery.index = 0), O.$container.on(W, function (e) {
                if (E(e), t(e.target).is(O.$container)) {
                    O.$container.off(W), "undefined" != typeof O.$image && O.$image.remove(), "undefined" != typeof O.$videoWrapper && O.$videoWrapper.remove(), O.$target = O.gallery.$items.eq(O.gallery.index), O.$caption.html(O.formatter.apply(O.$body, [O.$target])), O.$position.find(".current").html(O.gallery.index + 1);
                    var i = O.$target.attr("href"),
                        n = i.indexOf("youtube.com/embed") > -1 || i.indexOf("player.vimeo.com/video") > -1;
                    n ? p(i) : h(i), v()
}
}), O.$boxer.addClass("loading animating"), j || O.$content.trigger(W))
}

        function v() {
            O.$controls.removeClass("disabled"), 0 === O.gallery.index && O.$controls.filter(".previous").addClass("disabled"), O.gallery.index === O.gallery.total && O.$controls.filter(".next").addClass("disabled")
}

        function y(t) {
            !O.gallery.active || 37 !== t.keyCode && 39 !== t.keyCode ? 27 === t.keyCode && O.$boxer.find(".boxer-close").trigger("click") : (E(t), O.$controls.filter(37 === t.keyCode ? ".previous" : ".next").trigger("click"))
}

        function w(e) {
            var i = t(e).find(">:first-child").clone();
            b(i)
}

        function x(e) {
            e += e.indexOf("?") > -1 ? "&" + N.requestKey + "=true" : "?" + N.requestKey + "=true";
            var i = t('<iframe class="boxer-iframe" src="' + e + '" />');
            b(i)
}

        function b(t) {
            O.$content.append(t), _(t), o()
}

        function _(t) {
            O.windowHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.$window.width() - O.paddingHorizontal, O.objectHeight = t.outerHeight(!0), O.objectWidth = t.outerWidth(!0), O.targetHeight = O.targetHeight || O.$target.data("boxer-height"), O.targetWidth = O.targetWidth || O.$target.data("boxer-width"), O.maxHeight = O.windowHeight < 0 ? N.minHeight : O.windowHeight, O.isIframe = t.is("iframe"), O.objectMarginTop = 0, O.objectMarginLeft = 0, O.isMobile || (O.windowHeight -= O.margin, O.windowWidth -= O.margin), O.contentHeight = void 0 !== O.targetHeight ? O.targetHeight : O.isIframe || O.isMobile ? O.windowHeight : O.objectHeight, O.contentWidth = void 0 !== O.targetWidth ? O.targetWidth : O.isIframe || O.isMobile ? O.windowWidth : O.objectWidth, (O.isIframe || O.isObject) && O.isMobile ? (O.contentHeight = O.windowHeight, O.contentWidth = O.windowWidth) : O.isObject && (O.contentHeight = O.contentHeight > O.windowHeight ? O.windowHeight : O.contentHeight, O.contentWidth = O.contentWidth > O.windowWidth ? O.windowWidth : O.contentWidth)
}

        function $(e) {
            var i = t('<div class="boxer-error"><p>Error Loading Resource</p></div>');
            O.type = "element", O.$meta.remove(), O.$image.off("load, error"), b(i)
}

        function T(t) {
            if (E(t), L(O.touchTimer), !O.isAnimating) {
                var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
                O.xStart = e ? e.pageX : t.clientX, O.leftPosition = 0, O.touchMax = 1 / 0, O.touchMin = -(1 / 0), O.edge = .25 * O.contentWidth, 0 === O.gallery.index && (O.touchMax = 0), O.gallery.index === O.gallery.total && (O.touchMin = 0), O.$boxer.on("touchmove.boxer", C).one("touchend.boxer", H)
}
}

        function C(t) {
            var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
            O.delta = O.xStart - (e ? e.pageX : t.clientX), O.delta > 20 && E(t), O.canSwipe = !0;
            var i = -O.delta;
            i < O.touchMin && (i = O.touchMin, O.canSwipe = !1), i > O.touchMax && (i = O.touchMax, O.canSwipe = !1), O.$image.css({
    transform: "translate3D(" + i + "px,0,0)"
}), O.touchTimer = S(O.touchTimer, 300, function () {
                H(t)
})
}

        function H(t) {
            E(t), L(O.touchTimer), O.$boxer.off("touchmove.boxer touchend.boxer"), O.delta && (O.$boxer.addClass("animated"), O.swipe = !1, O.canSwipe && (O.delta > O.edge || O.delta < -O.edge) ? (O.swipe = !0, O.$image.css(O.delta <= O.leftPosition ? {
    transform: "translate3D(" + O.contentWidth + "px,0,0)"
} : {
    transform: "translate3D(" + -O.contentWidth + "px,0,0)"
})) : O.$image.css({
    transform: "translate3D(0,0,0)"
}), O.swipe && O.$controls.filter(O.delta <= O.leftPosition ? ".previous" : ".next").trigger("click"), S(O.resetTimer, O.duration, function () {
                O.$boxer.removeClass("animated")
}))
}

        function k(t) {
            var e = t[0],
                i = new Image;
            return "undefined" != typeof e.naturalHeight ? {
    naturalHeight: e.naturalHeight,
    naturalWidth: e.naturalWidth
} : "img" === e.tagName.toLowerCase() && (i.src = e.src, {
    naturalHeight: i.height,
    naturalWidth: i.width
})
}

        function E(t) {
            t.preventDefault && (t.stopPropagation(), t.preventDefault())
}

        function S(t, e, i) {
            return L(t), setTimeout(i, e)
}

        function L(t) {
            t && (clearTimeout(t), t = null)
}

        function D() {
            var t = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    transition: "transitionend"
},
                e = document.createElement("div");
            for (var i in t)
                if (t.hasOwnProperty(i) && i in e.style) return t[i];
            return !1
}
        var W, j, A = null,
            O = {},
            z = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(e.navigator.userAgent || e.navigator.vendor || e.opera),
            N = {
    callback: t.noop,
    customClass: "",
    extensions: ["jpg", "sjpg", "jpeg", "png", "gif"],
    fixed: !1,
    formatter: t.noop,
    labels: {
    close: "Close",
    count: "of",
    next: "Next",
    previous: "Previous"
},
    margin: 50,
    minHeight: 100,
    minWidth: 100,
    mobile: !1,
    opacity: .75,
    retina: !1,
    requestKey: "boxer",
    top: 0,
    videoRatio: .5625,
    videoWidth: 600
},
            I = {
    close: function () {
                    "undefined" != typeof O.$boxer && (O.$boxer.off(".boxer"), O.$overlay.trigger("click"))
},
    defaults: function (e) {
                    return N = t.extend(N, e || {}), "object" == typeof this && t(this)
},
    destroy: function () {
                    return t(this).off(".boxer")
},
    resize: function (e) {
                    return "undefined" != typeof O.$boxer && ("object" != typeof e && (O.targetHeight = arguments[0], O.targetWidth = arguments[1]), "element" === O.type ? _(O.$content.find(">:first-child")) : "image" === O.type ? u() : "video" === O.type && f(), r()), t(this)
}
};
        t.fn.boxer = function (t) {
            return I[t] ? I[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? this : i.apply(this, arguments)
}, t.boxer = function (i, s) {
            return I[i] ? I[i].apply(e, Array.prototype.slice.call(arguments, 1)) : i instanceof t ? n.apply(e, [{
    data: t.extend({
    $object: i
}, N, s || {})
}]) : void 0
}
}(jQuery, window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [
                [o[i]().top + n, s]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery);
var $window = $(window),
    nStartScreen = document.getElementById("start-screen");
! function (t, e) {
    var i = function (t, e, i) {
        var n;
        return function () {
            function s() {
                i || t.apply(o, r), n = null
            }
            var o = this,
                r = arguments;
            n ? clearTimeout(n) : i && t.apply(o, r), n = setTimeout(s, e || 100)
        }
    };
    jQuery.fn[e] = function (t) {
        return t ? this.bind("resize", i(t)) : this.trigger(e)
    }
}(jQuery, "smartresize"), $(document).ready(function () {
    _main_menu(), _home_slider(), _owl_carousel(), _g_map(), _parallax(), _scrollTop(), _scrollTop2, _gall(), _equal_height()
});
//# sourceMappingURL=main.min.js.map