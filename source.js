window._iesKnob = {
    att: function(t, e, i) {
        if (t) {
            if (!i) return t.getAttribute(e);
            t.setAttribute(e, i)
        }
        return !1
    },
    $$$: function(t) {
        return "string" == typeof t && (t = document.getElementById(t)), t
    },
    ins: function(t, e, i, r, n, o) {
        var a;
        if (o) var s = document.createElementNS("http://www.w3.org/2000/svg", e);
        else s = document.createElement(e);
        if (r && (s.innerHTML = r), t = _iesKnob.$$$(t), i)
            for (a = 0; a < i.length; a += 2) this.att(s, i[a], i[a + 1]);
        return t ? 1 == n ? t.insertBefore(s, t.firstChild) : n ? t.insertBefore(s, n) : t.appendChild(s) : s
    },
    init: function(t) {
        var e = document.createElement("style");
        document.getElementById("circle-animation-style") ? t && (document.getElementById("circle-animation-style").innerHTML = "") : (e.id = "circle-animation-style", document.head.appendChild(e));
        for (var i = document.getElementsByClassName("iesknob"), r = 0; r < i.length; r++) "true" == i[r].getAttribute("initiated") && "force" != t || ("" == i[r].id && (i[r].id = _iesKnob.guid()), _iesKnob.generate(i[r].id, i[r].getAttribute("data-knob-image"), i[r].getAttribute("data-knob-dotimage"), i[r].getAttribute("data-knob-percentage"), i[r].getAttribute("data-knob-timing"), i[r].getAttribute("data-knob-dotcolor"), i[r].getAttribute("data-knob-gradient1"), i[r].getAttribute("data-knob-gradient2"), i[r].getAttribute("data-knob-color"), i[r].getAttribute("data-knob-dotcolorinside"), i[r].getAttribute("data-knob-dotborder"), i[r].getAttribute("data-knob-dotradius"), i[r].getAttribute("data-knob-strokewidth"), i[r].getAttribute("data-knob-html"), i[r].getAttribute("data-knob-colorhover"), i[r].getAttribute("data-knob-iconhover"), i[r].getAttribute("data-knob-iconsize")), i[r].setAttribute("initiated", "true"))
    },
    guid: function() {
        for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i = 0; i < 15; i++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    },
    backgrounds: function(t, e, i) {
        if (t.getAttribute("data-oldstyle")) var r = t.getAttribute("data-oldstyle");
        else r = t.getAttribute("style");
        t.setAttribute("data-oldstyle", r), e = e + ";background-size: 99% ," + i + ";background-position: 50% 50%;background-repeat: no-repeat", t.setAttribute("style", r + ";background:" + e)
    },
    generate: function(t, e, i, r, n, o, a, s, l, d, c, u, g, b, m, f, h) {
        var k = -1 < navigator.userAgent.indexOf("Safari"),
            y = -1 < window.navigator.userAgent.indexOf("Edge"); - 1 < navigator.userAgent.indexOf("Chrome") && k && (k = !1);
        var p = document.getElementById(t);
        p.innerHTML = "";
        var v = _iesKnob.guid(),
            A = _iesKnob.ins(p, "svg", ["class", "circle-chart", "id", v, "height", "103%", "width", "103%", "viewbox", "0 0 33.83098862 33.83098862", "xmlns", "http://www.w3.org/2000/svg", "style", "height:103%;width:103%;overflow: visible  !important;box-shadow : 0px -0px 10000px transparent;position:absolute;top:-1.5%;left:-1.5%", "preserveAspectRatio", "none"], !1, !1, !0),
            _ = _iesKnob.ins(A, "defs", !1, !1, !1, !0),
            w = _iesKnob.guid(),
            K = _iesKnob.ins(_, "linearGradient", ["id", w, "x1", "0", "y1", "10", "x2", "30", "y2", "10", "gradientUnits", "userSpaceOnUse", "gradientTransform", "rotate(90)"], !1, !1, !0);
        if (a && null != a && "" != a || (a = "#FFD700"), s && null != s && "" != s || (s = "yellow"), _iesKnob.ins(K, "stop", ["stop-color", a, "offset", "0"], !1, !1, !0), _iesKnob.ins(K, "stop", ["stop-color", s, "offset", "1"], !1, !1, !0), b) {
            var x = document.createElement("div");
            x.setAttribute("style", "position:absolute;top:0;left:0;width:100%;height:100%;display: table; overflow:hidden;border-radius:50%");
            var E = document.createElement("div");
            E.setAttribute("style", "display: table-cell; vertical-align: middle;text-align: center;"), E.innerHTML = e, x.appendChild(E), p.appendChild(x)
        } else p.style.background = "url(" + e + ")", m && f && (h || (h = "99%"), p.setAttribute("onmouseover", "_iesKnob.backgrounds(this,'linear-gradient(0deg," + m + "," + m + ") , url(" + f + ") , url(" + e + ") ','" + h + "')"), p.setAttribute("onmouseleave", "_iesKnob.backgrounds(this,'url(" + e + ") ','" + h + "')"));
        if (p.style.backgroundSize = "99%", p.style.backgroundPosition = "50% 50%", p.style.backgroundRepeat = "no-repeat", g && null != g && "" != g || (g = "2"), l && null != l && "" != l || (l = "#efefef"), _iesKnob.ins(A, "circle", ["class", "circle-chart__background", "stroke", l, "stroke-width", g, "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431"], !1, !1, !0), y ? _iesKnob.ins(A, "circle", ["class", "circle-chart__circle", "stroke", "url(#" + w + ")", "stroke-width", g, "stroke-dasharray", r + ",100", "stroke-linecap", "round", "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431", "transform", "translate(-0,33.83098862) rotate(-90)"], !1, !1, !0) : _iesKnob.ins(A, "circle", ["class", "circle-chart__circle", "stroke", "url(#" + w + ")", "stroke-width", g, "stroke-dasharray", r + ",100", "stroke-linecap", "round", "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431"], !1, !1, !0), i)
            if (y || k) {
                var B = _iesKnob.ins(p, "div", ["style", "position:absolute;top:0%;left:42.5%;width:15%;height:50%", "class", "star-element"]);
                _iesKnob.ins(B, "img", ["src", i, "style", "position:absolute;top:-15%;left:0%;width:100%;"])
            } else _iesKnob.ins(A, "image", ["href", i, "height", "6", "width", "6", "class", "star-element", "x", "14", "y", "-2"], !1, !1, !0);
        else {
            o && null != o && "" != o || (o = "#000000"), d && null != d && "" != d || (d = o), c && null != c && "" != c || (c = "0.1"), u && null != u && "" != u || (u = "0.9");
            var M = _iesKnob.ins(A, "g", ["class", "star-element", "style", "position:relative"], !1, !1, !0);
            _iesKnob.ins(M, "circle", ["stroke", o, "stroke-width", c, "r", u, "fill", d, "cx", "17", "cy", "1.1"], !1, !1, !0)
        }
        p.innerHTML = p.innerHTML, document.getElementById(v).classList.add(v);
        var L = 360 / (100 / r);
        if (n && null != n && "" != n || (n = 1), y || k) var T = "@keyframes " + v + "-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes " + v + "-rotate-star {to { transform: rotate(0deg) }}." + v + " .circle-chart__circle {animation-timing-function: ease-out;animation: " + v + "-circle-chart-fill " + n + "s reverse;transform: rotate(-90deg);transform-origin: center}." + v + " + .star-element {animation-timing-function: ease-out;animation: " + v + "-rotate-star " + n + "s reverse;transform: rotate(" + L + "deg);transform-origin: bottom;}";
        else T = "@keyframes " + v + "-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes " + v + "-rotate-star {to { transform: rotate(0deg) }}." + v + " .circle-chart__circle {animation-timing-function: ease-out;animation: " + v + "-circle-chart-fill " + n + "s reverse;transform: rotate(-90deg);transform-origin: center}." + v + " .star-element {animation-timing-function: ease-out;animation: " + v + "-rotate-star " + n + "s reverse;transform: rotate(" + L + "deg);transform-origin: center 50%;}";
        y && (T += "*{-webkit-backface-visibility: hidden;}"), document.getElementById("circle-animation-style").innerHTML += T
    }
}, _iesKnob.init("force");
