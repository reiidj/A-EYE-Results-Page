(() => {
    var e = {
            1565: function(e, t, n) {
                "use strict";
                let r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                async function o() {
                    let {
                        Application: e
                    } = await Promise.resolve().then(n.bind(n, 9303));
                    r = e
                }! function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    createInstance: function() {
                        return l
                    },
                    destroy: function() {
                        return h
                    },
                    destroyInstance: function() {
                        return d
                    },
                    getInstance: function() {
                        return f
                    },
                    init: function() {
                        return y
                    },
                    ready: function() {
                        return v
                    },
                    setLoadHandler: function() {
                        return p
                    }
                });
                let i = new Map,
                    a = new Map,
                    s = new Event("w-spline-load");
                class c {
                    spline;
                    container;
                    destroy() {
                        this.container && (i.delete(this.container), a.delete(this.container)), this.spline?.dispose?.()
                    }
                    async load(e, t) {
                        !r && await o();
                        let n = e.querySelector("canvas"),
                            c = new r(n);
                        await c.load(t), i.set(e, this), this.container = e, this.spline = c, e.dispatchEvent(s), a.has(e) && (a.get(e)(c), a.delete(e))
                    }
                }
                let u = () => Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
                    l = async (e, t) => {
                        let n = i.get(e);
                        return null == n && (n = new c), await n.load(e, t), n
                    }, d = e => {
                        let t = i.get(e);
                        t?.destroy()
                    }, f = e => i.get(e), p = (e, t) => {
                        a.set(e, t)
                    }, y = () => {
                        u().forEach(e => {
                            let t = e.getAttribute("data-spline-url");
                            t && l(e, t)
                        })
                    }, h = () => {
                        u().forEach(d)
                    }, v = y
            },
            9766: function(e, t, n) {
                "use strict";
                var r = n(3949),
                    o = n(1565);
                r.define("spline", e.exports = function() {
                    return {
                        createInstance: o.createInstance,
                        destroyInstance: o.destroyInstance,
                        getInstance: o.getInstance,
                        setLoadHandler: o.setLoadHandler,
                        init: o.init,
                        destroy: o.destroy,
                        ready: o.ready
                    }
                })
            },
            7329: function(e, t, n) {
                n(9461), n(7624), n(286), n(8334), n(2338), n(3695), n(322), n(941), n(5134), n(9858), n(9766), n(2444), n(4014)
            },
            9303: function(e) {
                "use strict";
                e.exports = import("https://cdn.jsdelivr.net/npm/@splinetool/runtime/build/runtime.js")
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = e, n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, (() => {
        var e = [];
        n.O = function(t, r, o, i) {
            if (r) {
                i = i || 0;
                for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
                e[a] = [r, o, i];
                return
            }
            for (var s = 1 / 0, a = 0; a < e.length; a++) {
                for (var r = e[a][0], o = e[a][1], i = e[a][2], c = !0, u = 0; u < r.length; u++)(!1 & i || s >= i) && Object.keys(n.O).every(function(e) {
                    return n.O[e](r[u])
                }) ? r.splice(u--, 1) : (c = !1, i < s && (s = i));
                if (c) {
                    e.splice(a--, 1);
                    var l = o();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
    })(), n.rv = function() {
        return "1.1.8"
    }, (() => {
        var e = {
            890: 0
        };
        n.O.j = function(t) {
            return 0 === e[t]
        };
        var t = function(t, r) {
                var o = r[0],
                    i = r[1],
                    a = r[2],
                    s, c, u = 0;
                if (o.some(function(t) {
                        return 0 !== e[t]
                    })) {
                    for (s in i) n.o(i, s) && (n.m[s] = i[s]);
                    if (a) var l = a(n)
                }
                for (t && t(r); u < o.length; u++) c = o[u], n.o(e, c) && e[c] && e[c][0](), e[c] = 0;
                return n.O(l)
            },
            r = self.webpackChunk = self.webpackChunk || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), n.ruid = "bundler=rspack@1.1.8";
    var r = n.O(void 0, ["87", "397", "179", "520"], function() {
        return n("7329")
    });
    r = n.O(r)
})();