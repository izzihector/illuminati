/*! kjua v0.1.1 - https://larsjung.de/kjua/ */
!function (r, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.kjua = t() : r.kjua = t()
}(this, function () {
    return function (r) {
        function t(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {exports: {}, id: n, loaded: !1};
            return r[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var e = {};
        return t.m = r, t.c = e, t.p = "", t(0)
    }([function (r, t, e) {
        "use strict";
        var n = e(1), o = n.createCanvas, i = n.canvasToImg, a = n.dpr, u = e(2), f = e(3), c = e(4);
        r.exports = function (r) {
            var t = Object.assign({}, u, r), e = f(t.text, t.ecLevel, t.minVersion, t.quiet), n = t.ratio || a,
                l = o(t.size, n), s = l.getContext("2d");
            return s.scale(n, n), c(e, s, t), "image" === t.render ? i(l) : l
        }
    }, function (r, t) {
        "use strict";
        var e = window, n = e.document, o = e.devicePixelRatio || 1, i = function (r) {
            return n.createElement(r)
        }, a = function (r, t) {
            return r.getAttribute(t)
        }, u = function (r, t, e) {
            return r.setAttribute(t, e)
        }, f = function (r, t) {
            var e = i("canvas");
            return u(e, "width", r * t), u(e, "height", r * t), e.style.width = r + "px", e.style.height = r + "px", e
        }, c = function (r) {
            var t = i("img");
            return u(t, "crossorigin", "anonymous"), u(t, "src", r.toDataURL("image/png")), u(t, "width", a(r, "width")), u(t, "height", a(r, "height")), t.style.width = r.style.width, t.style.height = r.style.height, t
        };
        r.exports = {createCanvas: f, canvasToImg: c, dpr: o}
    }, function (r, t) {
        "use strict";
        r.exports = {
            render: "image",
            crisp: !0,
            minVersion: 1,
            ecLevel: "L",
            size: 200,
            ratio: null,
            fill: "#333",
            back: "#fff",
            text: "no text",
            rounded: 0,
            quiet: 0,
            mode: "plain",
            mSize: 30,
            mPosX: 50,
            mPosY: 50,
            label: "no label",
            fontname: "sans",
            fontcolor: "#333",
            image: null
        }
    }, function (r, t) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (r) {
            return typeof r
        } : function (r) {
            return r && "function" == typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r
        }, n = /code length overflow/i, o = function () {
            var e = function () {
                function r(t, e) {
                    if ("undefined" == typeof t.length) throw new Error(t.length + "/" + e);
                    var n = function () {
                        for (var r = 0; r < t.length && 0 == t[r];) r += 1;
                        for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) n[o] = t[o + r];
                        return n
                    }(), o = {};
                    return o.getAt = function (r) {
                        return n[r]
                    }, o.getLength = function () {
                        return n.length
                    }, o.multiply = function (t) {
                        for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1) for (var i = 0; i < t.getLength(); i += 1) e[n + i] ^= a.gexp(a.glog(o.getAt(n)) + a.glog(t.getAt(i)));
                        return r(e, 0)
                    }, o.mod = function (t) {
                        if (o.getLength() - t.getLength() < 0) return o;
                        for (var e = a.glog(o.getAt(0)) - a.glog(t.getAt(0)), n = new Array(o.getLength()), i = 0; i < o.getLength(); i += 1) n[i] = o.getAt(i);
                        for (var i = 0; i < t.getLength(); i += 1) n[i] ^= a.gexp(a.glog(t.getAt(i)) + e);
                        return r(n, 0).mod(t)
                    }, o
                }

                var t = function (t, e) {
                    var o = 236, a = 17, l = t, s = n[e], g = null, h = 0, d = null, w = new Array, y = {},
                        p = function (r, t) {
                            h = 4 * l + 17, g = function (r) {
                                for (var t = new Array(r), e = 0; r > e; e += 1) {
                                    t[e] = new Array(r);
                                    for (var n = 0; r > n; n += 1) t[e][n] = null
                                }
                                return t
                            }(h), m(0, 0), m(h - 7, 0), m(0, h - 7), E(), B(), M(r, t), l >= 7 && T(r), null == d && (d = x(l, s, w)), k(d, t)
                        }, m = function (r, t) {
                            for (var e = -1; 7 >= e; e += 1) if (!(-1 >= r + e || r + e >= h)) for (var n = -1; 7 >= n; n += 1) -1 >= t + n || t + n >= h || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? g[r + e][t + n] = !0 : g[r + e][t + n] = !1)
                        }, A = function () {
                            for (var r = 0, t = 0, e = 0; 8 > e; e += 1) {
                                p(!0, e);
                                var n = i.getLostPoint(y);
                                (0 == e || r > n) && (r = n, t = e)
                            }
                            return t
                        }, B = function () {
                            for (var r = 8; h - 8 > r; r += 1) null == g[r][6] && (g[r][6] = r % 2 == 0);
                            for (var t = 8; h - 8 > t; t += 1) null == g[6][t] && (g[6][t] = t % 2 == 0)
                        }, E = function () {
                            for (var r = i.getPatternPosition(l), t = 0; t < r.length; t += 1) for (var e = 0; e < r.length; e += 1) {
                                var n = r[t], o = r[e];
                                if (null == g[n][o]) for (var a = -2; 2 >= a; a += 1) for (var u = -2; 2 >= u; u += 1) -2 == a || 2 == a || -2 == u || 2 == u || 0 == a && 0 == u ? g[n + a][o + u] = !0 : g[n + a][o + u] = !1
                            }
                        }, T = function (r) {
                            for (var t = i.getBCHTypeNumber(l), e = 0; 18 > e; e += 1) {
                                var n = !r && 1 == (t >> e & 1);
                                g[Math.floor(e / 3)][e % 3 + h - 8 - 3] = n
                            }
                            for (var e = 0; 18 > e; e += 1) {
                                var n = !r && 1 == (t >> e & 1);
                                g[e % 3 + h - 8 - 3][Math.floor(e / 3)] = n
                            }
                        }, M = function (r, t) {
                            for (var e = s << 3 | t, n = i.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
                                var a = !r && 1 == (n >> o & 1);
                                6 > o ? g[o][8] = a : 8 > o ? g[o + 1][8] = a : g[h - 15 + o][8] = a
                            }
                            for (var o = 0; 15 > o; o += 1) {
                                var a = !r && 1 == (n >> o & 1);
                                8 > o ? g[8][h - o - 1] = a : 9 > o ? g[8][15 - o - 1 + 1] = a : g[8][15 - o - 1] = a
                            }
                            g[h - 8][8] = !r
                        }, k = function (r, t) {
                            for (var e = -1, n = h - 1, o = 7, a = 0, u = i.getMaskFunction(t), f = h - 1; f > 0; f -= 2) for (6 == f && (f -= 1); ;) {
                                for (var c = 0; 2 > c; c += 1) if (null == g[n][f - c]) {
                                    var l = !1;
                                    a < r.length && (l = 1 == (r[a] >>> o & 1));
                                    var s = u(n, f - c);
                                    s && (l = !l), g[n][f - c] = l, o -= 1, -1 == o && (a += 1, o = 7)
                                }
                                if (n += e, 0 > n || n >= h) {
                                    n -= e, e = -e;
                                    break
                                }
                            }
                        }, b = function (t, e) {
                            for (var n = 0, o = 0, a = 0, u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
                                var l = e[c].dataCount, s = e[c].totalCount - l;
                                o = Math.max(o, l), a = Math.max(a, s), u[c] = new Array(l);
                                for (var g = 0; g < u[c].length; g += 1) u[c][g] = 255 & t.getBuffer()[g + n];
                                n += l;
                                var h = i.getErrorCorrectPolynomial(s), v = r(u[c], h.getLength() - 1), d = v.mod(h);
                                f[c] = new Array(h.getLength() - 1);
                                for (var g = 0; g < f[c].length; g += 1) {
                                    var w = g + d.getLength() - f[c].length;
                                    f[c][g] = w >= 0 ? d.getAt(w) : 0
                                }
                            }
                            for (var y = 0, g = 0; g < e.length; g += 1) y += e[g].totalCount;
                            for (var p = new Array(y), m = 0, g = 0; o > g; g += 1) for (var c = 0; c < e.length; c += 1) g < u[c].length && (p[m] = u[c][g], m += 1);
                            for (var g = 0; a > g; g += 1) for (var c = 0; c < e.length; c += 1) g < f[c].length && (p[m] = f[c][g], m += 1);
                            return p
                        }, x = function (r, t, e) {
                            for (var n = u.getRSBlocks(r, t), c = f(), l = 0; l < e.length; l += 1) {
                                var s = e[l];
                                c.put(s.getMode(), 4), c.put(s.getLength(), i.getLengthInBits(s.getMode(), r)), s.write(c)
                            }
                            for (var g = 0, l = 0; l < n.length; l += 1) g += n[l].dataCount;
                            if (c.getLengthInBits() > 8 * g) throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * g + ")");
                            for (c.getLengthInBits() + 4 <= 8 * g && c.put(0, 4); c.getLengthInBits() % 8 != 0;) c.putBit(!1);
                            for (; ;) {
                                if (c.getLengthInBits() >= 8 * g) break;
                                if (c.put(o, 8), c.getLengthInBits() >= 8 * g) break;
                                c.put(a, 8)
                            }
                            return b(c, n)
                        };
                    return y.addData = function (r) {
                        var t = c(r);
                        w.push(t), d = null
                    }, y.isDark = function (r, t) {
                        if (0 > r || r >= h || 0 > t || t >= h) throw new Error(r + "," + t);
                        return g[r][t]
                    }, y.getModuleCount = function () {
                        return h
                    }, y.make = function () {
                        p(!1, A())
                    }, y.createTableTag = function (r, t) {
                        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
                        var e = "";
                        e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + t + "px;", e += '">', e += "<tbody>";
                        for (var n = 0; n < y.getModuleCount(); n += 1) {
                            e += "<tr>";
                            for (var o = 0; o < y.getModuleCount(); o += 1) e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + r + "px;", e += " height: " + r + "px;", e += " background-color: ", e += y.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
                            e += "</tr>"
                        }
                        return e += "</tbody>", e += "</table>"
                    }, y.createImgTag = function (r, t) {
                        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
                        var e = y.getModuleCount() * r + 2 * t, n = t, o = e - t;
                        return v(e, e, function (t, e) {
                            if (t >= n && o > t && e >= n && o > e) {
                                var i = Math.floor((t - n) / r), a = Math.floor((e - n) / r);
                                return y.isDark(a, i) ? 0 : 1
                            }
                            return 1
                        })
                    }, y
                };
                t.stringToBytes = function (r) {
                    for (var t = new Array, e = 0; e < r.length; e += 1) {
                        var n = r.charCodeAt(e);
                        t.push(255 & n)
                    }
                    return t
                }, t.createStringToBytes = function (r, t) {
                    var e = function () {
                        for (var e = g(r), n = function () {
                            var r = e.read();
                            if (-1 == r) throw new Error;
                            return r
                        }, o = 0, i = {}; ;) {
                            var a = e.read();
                            if (-1 == a) break;
                            var u = n(), f = n(), c = n(), l = String.fromCharCode(a << 8 | u), s = f << 8 | c;
                            i[l] = s, o += 1
                        }
                        if (o != t) throw new Error(o + " != " + t);
                        return i
                    }(), n = "?".charCodeAt(0);
                    return function (r) {
                        for (var t = new Array, o = 0; o < r.length; o += 1) {
                            var i = r.charCodeAt(o);
                            if (128 > i) t.push(i); else {
                                var a = e[r.charAt(o)];
                                "number" == typeof a ? (255 & a) == a ? t.push(a) : (t.push(a >>> 8), t.push(255 & a)) : t.push(n)
                            }
                        }
                        return t
                    }
                };
                var e = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8},
                    n = {L: 1, M: 0, Q: 3, H: 2}, o = {
                        PATTERN000: 0,
                        PATTERN001: 1,
                        PATTERN010: 2,
                        PATTERN011: 3,
                        PATTERN100: 4,
                        PATTERN101: 5,
                        PATTERN110: 6,
                        PATTERN111: 7
                    }, i = function () {
                        var t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                            n = 1335, i = 7973, u = 21522, f = {}, c = function (r) {
                                for (var t = 0; 0 != r;) t += 1, r >>>= 1;
                                return t
                            };
                        return f.getBCHTypeInfo = function (r) {
                            for (var t = r << 10; c(t) - c(n) >= 0;) t ^= n << c(t) - c(n);
                            return (r << 10 | t) ^ u
                        }, f.getBCHTypeNumber = function (r) {
                            for (var t = r << 12; c(t) - c(i) >= 0;) t ^= i << c(t) - c(i);
                            return r << 12 | t
                        }, f.getPatternPosition = function (r) {
                            return t[r - 1]
                        }, f.getMaskFunction = function (r) {
                            switch (r) {
                                case o.PATTERN000:
                                    return function (r, t) {
                                        return (r + t) % 2 == 0
                                    };
                                case o.PATTERN001:
                                    return function (r, t) {
                                        return r % 2 == 0
                                    };
                                case o.PATTERN010:
                                    return function (r, t) {
                                        return t % 3 == 0
                                    };
                                case o.PATTERN011:
                                    return function (r, t) {
                                        return (r + t) % 3 == 0
                                    };
                                case o.PATTERN100:
                                    return function (r, t) {
                                        return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
                                    };
                                case o.PATTERN101:
                                    return function (r, t) {
                                        return r * t % 2 + r * t % 3 == 0
                                    };
                                case o.PATTERN110:
                                    return function (r, t) {
                                        return (r * t % 2 + r * t % 3) % 2 == 0
                                    };
                                case o.PATTERN111:
                                    return function (r, t) {
                                        return (r * t % 3 + (r + t) % 2) % 2 == 0
                                    };
                                default:
                                    throw new Error("bad maskPattern:" + r)
                            }
                        }, f.getErrorCorrectPolynomial = function (t) {
                            for (var e = r([1], 0), n = 0; t > n; n += 1) e = e.multiply(r([1, a.gexp(n)], 0));
                            return e
                        }, f.getLengthInBits = function (r, t) {
                            if (t >= 1 && 10 > t) switch (r) {
                                case e.MODE_NUMBER:
                                    return 10;
                                case e.MODE_ALPHA_NUM:
                                    return 9;
                                case e.MODE_8BIT_BYTE:
                                    return 8;
                                case e.MODE_KANJI:
                                    return 8;
                                default:
                                    throw new Error("mode:" + r)
                            } else if (27 > t) switch (r) {
                                case e.MODE_NUMBER:
                                    return 12;
                                case e.MODE_ALPHA_NUM:
                                    return 11;
                                case e.MODE_8BIT_BYTE:
                                    return 16;
                                case e.MODE_KANJI:
                                    return 10;
                                default:
                                    throw new Error("mode:" + r)
                            } else {
                                if (!(41 > t)) throw new Error("type:" + t);
                                switch (r) {
                                    case e.MODE_NUMBER:
                                        return 14;
                                    case e.MODE_ALPHA_NUM:
                                        return 13;
                                    case e.MODE_8BIT_BYTE:
                                        return 16;
                                    case e.MODE_KANJI:
                                        return 12;
                                    default:
                                        throw new Error("mode:" + r)
                                }
                            }
                        }, f.getLostPoint = function (r) {
                            for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1) for (var o = 0; t > o; o += 1) {
                                for (var i = 0, a = r.isDark(n, o), u = -1; 1 >= u; u += 1) if (!(0 > n + u || n + u >= t)) for (var f = -1; 1 >= f; f += 1) 0 > o + f || o + f >= t || 0 == u && 0 == f || a == r.isDark(n + u, o + f) && (i += 1);
                                i > 5 && (e += 3 + i - 5)
                            }
                            for (var n = 0; t - 1 > n; n += 1) for (var o = 0; t - 1 > o; o += 1) {
                                var c = 0;
                                r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3)
                            }
                            for (var n = 0; t > n; n += 1) for (var o = 0; t - 6 > o; o += 1) r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
                            for (var o = 0; t > o; o += 1) for (var n = 0; t - 6 > n; n += 1) r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
                            for (var l = 0, o = 0; t > o; o += 1) for (var n = 0; t > n; n += 1) r.isDark(n, o) && (l += 1);
                            var s = Math.abs(100 * l / t / t - 50) / 5;
                            return e += 10 * s
                        }, f
                    }(), a = function () {
                        for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1) r[e] = 1 << e;
                        for (var e = 8; 256 > e; e += 1) r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
                        for (var e = 0; 255 > e; e += 1) t[r[e]] = e;
                        var n = {};
                        return n.glog = function (r) {
                            if (1 > r) throw new Error("glog(" + r + ")");
                            return t[r]
                        }, n.gexp = function (t) {
                            for (; 0 > t;) t += 255;
                            for (; t >= 256;) t -= 255;
                            return r[t]
                        }, n
                    }(), u = function () {
                        var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                            t = function (r, t) {
                                var e = {};
                                return e.totalCount = r, e.dataCount = t, e
                            }, e = {}, o = function (t, e) {
                                switch (e) {
                                    case n.L:
                                        return r[4 * (t - 1) + 0];
                                    case n.M:
                                        return r[4 * (t - 1) + 1];
                                    case n.Q:
                                        return r[4 * (t - 1) + 2];
                                    case n.H:
                                        return r[4 * (t - 1) + 3];
                                    default:
                                        return
                                }
                            };
                        return e.getRSBlocks = function (r, e) {
                            var n = o(r, e);
                            if ("undefined" == typeof n) throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);
                            for (var i = n.length / 3, a = new Array, u = 0; i > u; u += 1) for (var f = n[3 * u + 0], c = n[3 * u + 1], l = n[3 * u + 2], s = 0; f > s; s += 1) a.push(t(c, l));
                            return a
                        }, e
                    }(), f = function () {
                        var r = new Array, t = 0, e = {};
                        return e.getBuffer = function () {
                            return r
                        }, e.getAt = function (t) {
                            var e = Math.floor(t / 8);
                            return 1 == (r[e] >>> 7 - t % 8 & 1)
                        }, e.put = function (r, t) {
                            for (var n = 0; t > n; n += 1) e.putBit(1 == (r >>> t - n - 1 & 1))
                        }, e.getLengthInBits = function () {
                            return t
                        }, e.putBit = function (e) {
                            var n = Math.floor(t / 8);
                            r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1
                        }, e
                    }, c = function (r) {
                        var n = e.MODE_8BIT_BYTE, o = t.stringToBytes(r), i = {};
                        return i.getMode = function () {
                            return n
                        }, i.getLength = function (r) {
                            return o.length
                        }, i.write = function (r) {
                            for (var t = 0; t < o.length; t += 1) r.put(o[t], 8)
                        }, i
                    }, l = function () {
                        var r = new Array, t = {};
                        return t.writeByte = function (t) {
                            r.push(255 & t)
                        }, t.writeShort = function (r) {
                            t.writeByte(r), t.writeByte(r >>> 8)
                        }, t.writeBytes = function (r, e, n) {
                            e = e || 0, n = n || r.length;
                            for (var o = 0; n > o; o += 1) t.writeByte(r[o + e])
                        }, t.writeString = function (r) {
                            for (var e = 0; e < r.length; e += 1) t.writeByte(r.charCodeAt(e))
                        }, t.toByteArray = function () {
                            return r
                        }, t.toString = function () {
                            var t = "";
                            t += "[";
                            for (var e = 0; e < r.length; e += 1) e > 0 && (t += ","), t += r[e];
                            return t += "]"
                        }, t
                    }, s = function () {
                        var r = 0, t = 0, e = 0, n = "", o = {}, i = function (r) {
                            n += String.fromCharCode(a(63 & r))
                        }, a = function (r) {
                            if (0 > r) ; else {
                                if (26 > r) return 65 + r;
                                if (52 > r) return 97 + (r - 26);
                                if (62 > r) return 48 + (r - 52);
                                if (62 == r) return 43;
                                if (63 == r) return 47
                            }
                            throw new Error("n:" + r)
                        };
                        return o.writeByte = function (n) {
                            for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) i(r >>> t - 6), t -= 6
                        }, o.flush = function () {
                            if (t > 0 && (i(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3, a = 0; o > a; a += 1) n += "="
                        }, o.toString = function () {
                            return n
                        }, o
                    }, g = function (r) {
                        var t = r, e = 0, n = 0, o = 0, i = {};
                        i.read = function () {
                            for (; 8 > o;) {
                                if (e >= t.length) {
                                    if (0 == o) return -1;
                                    throw new Error("unexpected end of file./" + o)
                                }
                                var r = t.charAt(e);
                                if (e += 1, "=" == r) return o = 0, -1;
                                r.match(/^\s$/) || (n = n << 6 | a(r.charCodeAt(0)), o += 6)
                            }
                            var i = n >>> o - 8 & 255;
                            return o -= 8, i
                        };
                        var a = function (r) {
                            if (r >= 65 && 90 >= r) return r - 65;
                            if (r >= 97 && 122 >= r) return r - 97 + 26;
                            if (r >= 48 && 57 >= r) return r - 48 + 52;
                            if (43 == r) return 62;
                            if (47 == r) return 63;
                            throw new Error("c:" + r)
                        };
                        return i
                    }, h = function (r, t) {
                        var e = r, n = t, o = new Array(r * t), i = {};
                        i.setPixel = function (r, t, n) {
                            o[t * e + r] = n
                        }, i.write = function (r) {
                            r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r.writeShort(n), r.writeByte(0);
                            var t = 2, o = u(t);
                            r.writeByte(t);
                            for (var i = 0; o.length - i > 255;) r.writeByte(255), r.writeBytes(o, i, 255), i += 255;
                            r.writeByte(o.length - i), r.writeBytes(o, i, o.length - i), r.writeByte(0), r.writeString(";")
                        };
                        var a = function (r) {
                            var t = r, e = 0, n = 0, o = {};
                            return o.write = function (r, o) {
                                if (r >>> o != 0) throw new Error("length over");
                                for (; e + o >= 8;) t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
                                n = r << e | n, e += o
                            }, o.flush = function () {
                                e > 0 && t.writeByte(n)
                            }, o
                        }, u = function (r) {
                            for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, i = f(), u = 0; t > u; u += 1) i.add(String.fromCharCode(u));
                            i.add(String.fromCharCode(t)), i.add(String.fromCharCode(e));
                            var c = l(), s = a(c);
                            s.write(t, n);
                            var g = 0, h = String.fromCharCode(o[g]);
                            for (g += 1; g < o.length;) {
                                var v = String.fromCharCode(o[g]);
                                g += 1, i.contains(h + v) ? h += v : (s.write(i.indexOf(h), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(h + v)), h = v)
                            }
                            return s.write(i.indexOf(h), n), s.write(e, n), s.flush(), c.toByteArray()
                        }, f = function () {
                            var r = {}, t = 0, e = {};
                            return e.add = function (n) {
                                if (e.contains(n)) throw new Error("dup key:" + n);
                                r[n] = t, t += 1
                            }, e.size = function () {
                                return t
                            }, e.indexOf = function (t) {
                                return r[t]
                            }, e.contains = function (t) {
                                return "undefined" != typeof r[t]
                            }, e
                        };
                        return i
                    }, v = function (r, t, e, n) {
                        for (var o = h(r, t), i = 0; t > i; i += 1) for (var a = 0; r > a; a += 1) o.setPixel(a, i, e(a, i));
                        var u = l();
                        o.write(u);
                        for (var f = s(), c = u.toByteArray(), g = 0; g < c.length; g += 1) f.writeByte(c[g]);
                        f.flush();
                        var v = "";
                        return v += "<img", v += ' src="', v += "data:image/gif;base64,", v += f, v += '"', v += ' width="', v += r, v += '"', v += ' height="', v += t, v += '"', n && (v += ' alt="', v += n, v += '"'), v += "/>"
                    };
                return t
            }();
            return function (e) {
                "function" == typeof define && define.amd ? define([], e) : "object" == typeof t && (r.exports = e())
            }(function () {
                return e
            }), !function (r) {
                r.stringToBytes = function (r) {
                    function t(r) {
                        for (var t = [], e = 0; e < r.length; e++) {
                            var n = r.charCodeAt(e);
                            128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(e)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                        }
                        return t
                    }

                    return t(r)
                }
            }(e), e
        }(), i = function (r, t) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            i = Math.max(1, i);
            for (var a = i; 40 >= a; a += 1) try {
                var u = function () {
                    var e = o(a, t);
                    e.addData(r), e.make();
                    var n = e.getModuleCount(), i = function (r, t) {
                        return r >= 0 && n > r && t >= 0 && n > t && e.isDark(r, t)
                    };
                    return {v: {text: r, level: t, version: a, moduleCount: n, isDark: i}}
                }();
                if ("object" === ("undefined" == typeof u ? "undefined" : e(u))) return u.v
            } catch (f) {
                if (!n.test(f.message)) throw f
            }
            return null
        }, a = function () {
            var r = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                t = arguments.length <= 1 || void 0 === arguments[1] ? "L" : arguments[1],
                e = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
                n = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3], o = i(r, t, e);
            return o && !function () {
                var r = o.isDark;
                o.moduleCount += 2 * n, o.isDark = function (t, e) {
                    return r(t - n, e - n)
                }
            }(), o
        };
        r.exports = a
    }, function (r, t, e) {
        "use strict";
        var n = e(5), o = e(6), i = function (r, t) {
            r.fillStyle = t.back, r.fillRect(0, 0, t.size, t.size)
        }, a = function (r, t, e, n, o, i) {
            r.isDark(o, i) && t.rect(i * n, o * n, n, n)
        }, u = function (r, t, e) {
            if (r) {
                var o = e.rounded > 0 && e.rounded <= 100 ? n : a, i = r.moduleCount, u = e.size / i, f = 0;
                e.crisp && (u = Math.floor(u), f = Math.floor((e.size - u * i) / 2)), t.translate(f, f), t.beginPath();
                for (var c = 0; i > c; c += 1) for (var l = 0; i > l; l += 1) o(r, t, e, u, c, l);
                t.fillStyle = e.fill, t.fill(), t.translate(-f, -f)
            }
        }, f = function (r, t, e) {
            i(t, e), u(r, t, e), o(t, e)
        };
        r.exports = f
    }, function (r, t) {
        "use strict";
        var e = function (r) {
            return {
                c: r, m: function () {
                    var r;
                    return (r = this.c).moveTo.apply(r, arguments), this
                }, l: function () {
                    var r;
                    return (r = this.c).lineTo.apply(r, arguments), this
                }, a: function () {
                    var r;
                    return (r = this.c).arcTo.apply(r, arguments), this
                }
            }
        }, n = function (r, t, e, n, o, i, a, u, f, c) {
            a ? r.m(t + i, e) : r.m(t, e), u ? r.l(n - i, e).a(n, e, n, o, i) : r.l(n, e), f ? r.l(n, o - i).a(n, o, t, o, i) : r.l(n, o), c ? r.l(t + i, o).a(t, o, t, e, i) : r.l(t, o), a ? r.l(t, e + i).a(t, e, n, e, i) : r.l(t, e)
        }, o = function (r, t, e, n, o, i, a, u, f, c) {
            a && r.m(t + i, e).l(t, e).l(t, e + i).a(t, e, t + i, e, i), u && r.m(n - i, e).l(n, e).l(n, e + i).a(n, e, n - i, e, i), f && r.m(n - i, o).l(n, o).l(n, o - i).a(n, o, n - i, o, i), c && r.m(t + i, o).l(t, o).l(t, o - i).a(t, o, t + i, o, i)
        }, i = function (r, t, i, a, u, f) {
            var c = f * a, l = u * a, s = c + a, g = l + a, h = .005 * i.rounded * a, v = r.isDark, d = u - 1,
                w = u + 1, y = f - 1, p = f + 1, m = v(u, f), A = v(d, y), B = v(d, f), E = v(d, p), T = v(u, p),
                M = v(w, p), k = v(w, f), b = v(w, y), x = v(u, y), D = e(t);
            m ? n(D, c, l, s, g, h, !B && !x, !B && !T, !k && !T, !k && !x) : o(D, c, l, s, g, h, B && x && A, B && T && E, k && T && M, k && x && b)
        };
        r.exports = i
    }, function (r, t) {
        "use strict";
        var e = function (r, t) {
            var e = t.size, n = "bold " + .01 * t.mSize * e + "px " + t.fontname;
            r.strokeStyle = t.back, r.lineWidth = .01 * t.mSize * e * .1, r.fillStyle = t.fontcolor, r.font = n;
            var o = r.measureText(t.label).width, i = .01 * t.mSize, a = o / e, u = (1 - a) * t.mPosX * .01,
                f = (1 - i) * t.mPosY * .01, c = u * e, l = f * e + .75 * t.mSize * .01 * e;
            r.strokeText(t.label, c, l), r.fillText(t.label, c, l)
        }, n = function (r, t) {
            var e = t.size, n = t.image.naturalWidth || 1, o = t.image.naturalHeight || 1, i = .01 * t.mSize,
                a = i * n / o, u = (1 - a) * t.mPosX * .01, f = (1 - i) * t.mPosY * .01, c = u * e, l = f * e,
                s = a * e, g = i * e;
            r.drawImage(t.image, c, l, s, g)
        }, o = function (r, t) {
            var o = t.mode;
            "label" === o ? e(r, t) : "image" === o && n(r, t)
        };
        r.exports = o
    }])
});