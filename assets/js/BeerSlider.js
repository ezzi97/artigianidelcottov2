! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.BeerSlider = e() : t.BeerSlider = e()
}(window, function() {
  return function(t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      })
    }, n.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, n.t = function(t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
        for (var o in t) n.d(r, o, function(e) {
          return t[e]
        }.bind(null, o));
      return r
    }, n.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 47)
  }([function(t, e) {
    t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()
  }, function(t, e, n) {
    var r = n(11)("wks"),
      o = n(33),
      i = n(0).Symbol,
      c = n(54);
    t.exports = function(t) {
      return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
    }
  }, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object!");
      return t
    }
  }, function(t, e, n) {
    var r = n(8),
      o = n(21);
    t.exports = n(6) ? function(t, e, n) {
      return r.f(t, e, o(1, n))
    } : function(t, e, n) {
      return t[e] = n, t
    }
  }, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e)
    }
  }, function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function(t, e, n) {
    t.exports = !n(12)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1)
    }
  }, function(t, e, n) {
    var r = n(6),
      o = n(31),
      i = n(2),
      c = n(32),
      u = Object.defineProperty;
    e.f = r ? u : function(t, e, n) {
      if (i(t), e = c(e, !0), i(n), o) try {
        return u(t, e, n)
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t
    }
  }, function(t, e, n) {
    var r = n(0),
      o = n(3),
      i = n(14),
      c = n(19),
      u = n(57);
    t.exports = function(t, e) {
      var n, a, s, f, l = t.target;
      if (n = t.global ? r : t.stat ? r[l] || c(l, {}) : (r[l] || {}).prototype)
        for (a in e) {
          if (s = n[a], f = e[a], !t.forced && void 0 !== s) {
            if (typeof f == typeof s) continue;
            u(f, s)
          }(t.sham || s && s.sham) && o(f, "sham", !0), i(n, a, f, t.unsafe)
        }
    }
  }, function(t, e) {
    t.exports = {}
  }, function(t, e, n) {
    var r = n(0),
      o = n(19),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    (t.exports = function(t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
      version: "3.0.0-beta.3",
      mode: n(13) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
  }, function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function(t, e) {
    t.exports = !1
  }, function(t, e, n) {
    var r = n(0),
      o = n(3),
      i = n(4),
      c = n(19),
      u = n(34),
      a = n(15),
      s = a.get,
      f = a.enforce,
      l = String(u).split("toString");
    n(11)("inspectSource", function(t) {
      return u.call(t)
    }), (t.exports = function(t, e, n, u) {
      "function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), f(n).source = l.join("string" == typeof e ? e : "")), t === r ? c(e, n) : u ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n))
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && s(this).source || u.call(this)
    })
  }, function(t, e, n) {
    var r, o, i, c = n(0),
      u = n(34),
      a = n(5),
      s = n(3),
      f = n(4),
      l = n(22),
      p = n(23),
      v = c.WeakMap;
    if ("function" == typeof v && /native code/.test(u.call(v))) {
      var d = new v,
        h = d.get,
        y = d.has,
        g = d.set;
      r = function(t, e) {
        return g.call(d, t, e), e
      }, o = function(t) {
        return h.call(d, t) || {}
      }, i = function(t) {
        return y.call(d, t)
      }
    } else {
      var m = l("state");
      p[m] = !0, r = function(t, e) {
        return s(t, m, e), e
      }, o = function(t) {
        return f(t, m) ? t[m] : {}
      }, i = function(t) {
        return f(t, m)
      }
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function(t) {
        return i(t) ? o(t) : r(t, {})
      },
      getterFor: function(t) {
        return function(e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required!");
          return n
        }
      }
    }
  }, function(t, e, n) {
    var r = n(60),
      o = n(25);
    t.exports = function(t) {
      return r(o(t))
    }
  }, function(t, e) {
    t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function!");
      return t
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(17);
    t.exports.f = function(t) {
      return new function(t) {
        var e, n;
        this.promise = new t(function(t, r) {
          if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
          e = t, n = r
        }), this.resolve = r(e), this.reject = r(n)
      }(t)
    }
  }, function(t, e, n) {
    var r = n(0),
      o = n(3);
    t.exports = function(t, e) {
      try {
        o(r, t, e)
      } catch (n) {
        r[t] = e
      }
      return e
    }
  }, function(t, e, n) {
    var r = n(5),
      o = n(0).document,
      i = r(o) && r(o.createElement);
    t.exports = function(t) {
      return i ? o.createElement(t) : {}
    }
  }, function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  }, function(t, e, n) {
    var r = n(11)("keys"),
      o = n(33);
    t.exports = function(t) {
      return r[t] || (r[t] = o(t))
    }
  }, function(t, e) {
    t.exports = {}
  }, function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
  }, function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }, function(t, e, n) {
    var r = n(8).f,
      o = n(4),
      i = n(1)("toStringTag");
    t.exports = function(t, e, n) {
      t && !o(t = n ? t : t.prototype, i) && r(t, i, {
        configurable: !0,
        value: e
      })
    }
  }, function(t, e) {
    t.exports = function(t) {
      try {
        return {
          e: !1,
          v: t()
        }
      } catch (t) {
        return {
          e: !0,
          v: t
        }
      }
    }
  }, function(t, e, n) {
    t.exports = n(0)
  }, function(t, e, n) {
    var r = n(7),
      o = n(1)("toStringTag"),
      i = "Arguments" == r(function() {
        return arguments
      }());
    t.exports = function(t) {
      var e, n, c;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
        try {
          return t[e]
        } catch (t) {}
      }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
    }
  }, function(t, e, n) {
    t.exports = !n(6) && !n(12)(function() {
      return 7 != Object.defineProperty(n(20)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
      if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
      if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
  }, function(t, e, n) {
    t.exports = n(11)("native-function-to-string", Function.toString)
  }, function(t, e, n) {
    "use strict";
    var r = n(9),
      o = n(66),
      i = n(39),
      c = n(71),
      u = n(27),
      a = n(3),
      s = n(14),
      f = n(13),
      l = n(1)("iterator"),
      p = n(10),
      v = n(38),
      d = v.IteratorPrototype,
      h = v.BUGGY_SAFARI_ITERATORS,
      y = function() {
        return this
      };
    t.exports = function(t, e, n, v, g, m, x) {
      o(n, e, v);
      var b, j, S, w = function(t) {
          if (t === g && _) return _;
          if (!h && t in E) return E[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function() {
                return new n(this, t)
              }
          }
          return function() {
            return new n(this)
          }
        },
        O = e + " Iterator",
        P = !1,
        E = t.prototype,
        T = E[l] || E["@@iterator"] || g && E[g],
        _ = !h && T || w(g),
        L = "Array" == e && E.entries || T;
      if (L && (b = i(L.call(new t)), d !== Object.prototype && b.next && (f || i(b) === d || (c ? c(b, d) : "function" != typeof b[l] && a(b, l, y)), u(b, O, !0, !0), f && (p[O] = y))), "values" == g && T && "values" !== T.name && (P = !0, _ = function() {
          return T.call(this)
        }), f && !x || E[l] === _ || a(E, l, _), p[e] = _, g)
        if (j = {
            values: w("values"),
            keys: m ? _ : w("keys"),
            entries: w("entries")
          }, x)
          for (S in j) !h && !P && S in E || s(E, S, j[S]);
        else r({
          target: e,
          proto: !0,
          forced: h || P
        }, j);
      return j
    }
  }, function(t, e, n) {
    var r = n(4),
      o = n(16),
      i = n(61)(!1),
      c = n(23);
    t.exports = function(t, e) {
      var n, u = o(t),
        a = 0,
        s = [];
      for (n in u) !r(c, n) && r(u, n) && s.push(n);
      for (; e.length > a;) r(u, n = e[a++]) && (~i(s, n) || s.push(n));
      return s
    }
  }, function(t, e, n) {
    var r = n(24),
      o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0
    }
  }, function(t, e, n) {
    "use strict";
    var r, o, i, c = n(39),
      u = n(3),
      a = n(4),
      s = n(13),
      f = n(1)("iterator"),
      l = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (r = o) : l = !0), void 0 == r && (r = {}), s || a(r, f) || u(r, f, function() {
      return this
    }), t.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: l
    }
  }, function(t, e, n) {
    var r = n(4),
      o = n(67),
      i = n(22)("IE_PROTO"),
      c = n(68),
      u = Object.prototype;
    t.exports = c ? Object.getPrototypeOf : function(t) {
      return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
  }, function(t, e, n) {
    var r = n(2),
      o = n(69),
      i = n(26),
      c = n(41),
      u = n(20),
      a = n(22)("IE_PROTO"),
      s = function() {},
      f = function() {
        var t, e = u("iframe"),
          n = i.length;
        for (e.style.display = "none", c.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; n--;) delete f.prototype[i[n]];
        return f()
      };
    t.exports = Object.create || function(t, e) {
      var n;
      return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = f(), void 0 === e ? n : o(n, e)
    }, n(23)[a] = !0
  }, function(t, e, n) {
    var r = n(0).document;
    t.exports = r && r.documentElement
  }, function(t, e, n) {
    var r = n(2),
      o = n(79),
      i = n(37),
      c = n(43),
      u = n(80),
      a = n(81),
      s = {};
    (t.exports = function(t, e, n, f, l) {
      var p, v, d, h, y, g = c(e, n, f ? 2 : 1);
      if (l) p = t;
      else {
        if ("function" != typeof(v = u(t))) throw TypeError("Target is not iterable!");
        if (o(v)) {
          for (d = 0, h = i(t.length); h > d; d++)
            if ((f ? g(r(y = t[d])[0], y[1]) : g(t[d])) === s) return;
          return
        }
        p = v.call(t)
      }
      for (; !(y = p.next()).done;)
        if (a(p, g, y.value, f) === s) return
    }).BREAK = s
  }, function(t, e, n) {
    var r = n(17);
    t.exports = function(t, e, n) {
      if (r(t), void 0 === e) return t;
      switch (n) {
        case 0:
          return function() {
            return t.call(e)
          };
        case 1:
          return function(n) {
            return t.call(e, n)
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r)
          };
        case 3:
          return function(n, r, o) {
            return t.call(e, n, r, o)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
  }, function(t, e, n) {
    var r = n(2),
      o = n(17),
      i = n(1)("species");
    t.exports = function(t, e) {
      var n, c = r(t).constructor;
      return void 0 === c || void 0 == (n = r(c)[i]) ? e : o(n)
    }
  }, function(t, e, n) {
    var r, o, i, c = n(0),
      u = n(7),
      a = n(43),
      s = n(41),
      f = n(20),
      l = c.setImmediate,
      p = c.clearImmediate,
      v = c.process,
      d = c.MessageChannel,
      h = c.Dispatch,
      y = 0,
      g = {},
      m = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
          var e = g[t];
          delete g[t], e()
        }
      },
      x = function(t) {
        m.call(t.data)
      };
    l && p || (l = function(t) {
      for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
      return g[++y] = function() {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e)
      }, r(y), y
    }, p = function(t) {
      delete g[t]
    }, "process" == u(v) ? r = function(t) {
      v.nextTick(a(m, t, 1))
    } : h && h.now ? r = function(t) {
      h.now(a(m, t, 1))
    } : d ? (i = (o = new d).port2, o.port1.onmessage = x, r = a(i.postMessage, i, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(t) {
      c.postMessage(t + "", "*")
    }, c.addEventListener("message", x, !1)) : r = "onreadystatechange" in f("script") ? function(t) {
      s.appendChild(f("script")).onreadystatechange = function() {
        s.removeChild(this), m.call(t)
      }
    } : function(t) {
      setTimeout(a(m, t, 1), 0)
    }), t.exports = {
      set: l,
      clear: p
    }
  }, function(t, e, n) {
    var r = n(2),
      o = n(5),
      i = n(18);
    t.exports = function(t, e) {
      if (r(t), o(e) && e.constructor === t) return e;
      var n = i.f(t);
      return (0, n.resolve)(e), n.promise
    }
  }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), n(48);
    ! function(t) {
      t && t.__esModule
    }(n(50));
    var r = n(91);
    e.default = r.BeerSlider
  }, function(t, e, n) {}, , function(t, e, n) {
    t.exports = n(51), n(89), n(90)
  }, function(t, e, n) {
    n(52), n(55), n(73), n(77), n(88), t.exports = n(29).Promise
  }, function(t, e, n) {
    var r = n(53);
    r !== {}.toString && n(14)(Object.prototype, "toString", r, !0)
  }, function(t, e, n) {
    "use strict";
    var r = n(30),
      o = {};
    o[n(1)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() {
      return "[object " + r(this) + "]"
    } : o.toString
  }, function(t, e, n) {
    t.exports = !n(12)(function() {
      String(Symbol())
    })
  }, function(t, e, n) {
    "use strict";
    var r = n(56)(!0),
      o = n(15),
      i = n(35),
      c = o.set,
      u = o.getterFor("String Iterator");
    i(String, "String", function(t) {
      c(this, {
        type: "String Iterator",
        string: String(t),
        index: 0
      })
    }, function() {
      var t, e = u(this),
        n = e.string,
        o = e.index;
      return o >= n.length ? {
        value: void 0,
        done: !0
      } : (t = r(n, o), e.index += t.length, {
        value: t,
        done: !1
      })
    })
  }, function(t, e, n) {
    var r = n(24),
      o = n(25);
    t.exports = function(t) {
      return function(e, n) {
        var i, c, u = String(o(e)),
          a = r(n),
          s = u.length;
        return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function(t, e, n) {
    var r = n(4),
      o = n(58),
      i = n(64),
      c = n(8);
    t.exports = function(t, e) {
      for (var n = o(e), u = c.f, a = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, a(e, f))
      }
    }
  }, function(t, e, n) {
    var r = n(59),
      o = n(63),
      i = n(2),
      c = n(0).Reflect;
    t.exports = c && c.ownKeys || function(t) {
      var e = r.f(i(t)),
        n = o.f;
      return n ? e.concat(n(t)) : e
    }
  }, function(t, e, n) {
    var r = n(36),
      o = n(26).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
      return r(t, o)
    }
  }, function(t, e, n) {
    var r = n(7),
      o = "".split;
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
      return "String" == r(t) ? o.call(t, "") : Object(t)
    }
  }, function(t, e, n) {
    var r = n(16),
      o = n(37),
      i = n(62);
    t.exports = function(t) {
      return function(e, n, c) {
        var u, a = r(e),
          s = o(a.length),
          f = i(c, s);
        if (t && n != n) {
          for (; s > f;)
            if ((u = a[f++]) != u) return !0
        } else
          for (; s > f; f++)
            if ((t || f in a) && a[f] === n) return t || f || 0;
        return !t && -1
      }
    }
  }, function(t, e, n) {
    var r = n(24),
      o = Math.max,
      i = Math.min;
    t.exports = function(t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e)
    }
  }, function(t, e) {
    e.f = Object.getOwnPropertySymbols
  }, function(t, e, n) {
    var r = n(6),
      o = n(65),
      i = n(21),
      c = n(16),
      u = n(32),
      a = n(4),
      s = n(31),
      f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
      if (t = c(t), e = u(e, !0), s) try {
        return f(t, e)
      } catch (t) {}
      if (a(t, e)) return i(!o.f.call(t, e), t[e])
    }
  }, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({
        1: 2
      }, 1);
    e.f = i ? function(t) {
      var e = o(this, t);
      return !!e && e.enumerable
    } : r
  }, function(t, e, n) {
    "use strict";
    var r = n(38).IteratorPrototype,
      o = n(40),
      i = n(21),
      c = n(27),
      u = n(10),
      a = function() {
        return this
      };
    t.exports = function(t, e, n) {
      var s = e + " Iterator";
      return t.prototype = o(r, {
        next: i(1, n)
      }), c(t, s, !1, !0), u[s] = a, t
    }
  }, function(t, e, n) {
    var r = n(25);
    t.exports = function(t) {
      return Object(r(t))
    }
  }, function(t, e, n) {
    t.exports = !n(12)(function() {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
  }, function(t, e, n) {
    var r = n(6),
      o = n(8),
      i = n(2),
      c = n(70);
    t.exports = r ? Object.defineProperties : function(t, e) {
      i(t);
      for (var n, r = c(e), u = r.length, a = 0; u > a;) o.f(t, n = r[a++], e[n]);
      return t
    }
  }, function(t, e, n) {
    var r = n(36),
      o = n(26);
    t.exports = Object.keys || function(t) {
      return r(t, o)
    }
  }, function(t, e, n) {
    var r = n(72);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var t, e = {},
        n = !0;
      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
      } catch (t) {
        n = !1
      }
      return function(e, o) {
        return r(e, o), n ? t.call(e, o) : e.__proto__ = o, e
      }
    }() : void 0)
  }, function(t, e, n) {
    var r = n(5),
      o = n(2);
    t.exports = function(t, e) {
      if (o(t), !r(e) && null !== e) throw TypeError(String(e) + ": can't set as a prototype!")
    }
  }, function(t, e, n) {
    var r = n(74),
      o = n(75),
      i = n(0),
      c = n(3),
      u = n(1),
      a = u("iterator"),
      s = u("toStringTag"),
      f = o.values;
    for (var l in r) {
      var p = i[l],
        v = p && p.prototype;
      if (v) {
        if (v[a] !== f) try {
          c(v, a, f)
        } catch (t) {
          v[a] = f
        }
        if (v[s] || c(v, s, l), r[l])
          for (var d in o)
            if (v[d] !== o[d]) try {
              c(v, d, o[d])
            } catch (t) {
              v[d] = o[d]
            }
      }
    }
  }, function(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(16),
      o = n(76),
      i = n(10),
      c = n(15),
      u = n(35),
      a = c.set,
      s = c.getterFor("Array Iterator");
    t.exports = u(Array, "Array", function(t, e) {
      a(this, {
        type: "Array Iterator",
        target: r(t),
        index: 0,
        kind: e
      })
    }, function() {
      var t = s(this),
        e = t.target,
        n = t.kind,
        r = t.index++;
      return !e || r >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: e[r],
        done: !1
      } : {
        value: [r, e[r]],
        done: !1
      }
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
  }, function(t, e, n) {
    var r = n(1)("unscopables"),
      o = n(40),
      i = n(3),
      c = Array.prototype;
    void 0 == c[r] && i(c, r, o(null)), t.exports = function(t) {
      c[r][t] = !0
    }
  }, function(t, e, n) {
    "use strict";
    var r, o, i, c = "Promise",
      u = n(13),
      a = n(0),
      s = n(9),
      f = n(5),
      l = n(17),
      p = n(78),
      v = n(7),
      d = n(42),
      h = n(82),
      y = n(44),
      g = n(45).set,
      m = n(83)(),
      x = n(46),
      b = n(84),
      j = n(18),
      S = n(28),
      w = n(85),
      O = n(1)("species"),
      P = n(15),
      E = P.get,
      T = P.set,
      _ = P.getterFor(c),
      L = a.Promise,
      M = a.TypeError,
      I = a.document,
      A = a.process,
      k = A && A.versions,
      C = k && k.v8 || "",
      R = j.f,
      F = R,
      B = "process" == v(A),
      D = !!(I && I.createEvent && a.dispatchEvent),
      G = !! function() {
        try {
          var t = L.resolve(1),
            e = function() {},
            n = (t.constructor = {})[O] = function(t) {
              t(e, e)
            };
          return (B || "function" == typeof PromiseRejectionEvent) && (!u || t.finally) && t.then(e) instanceof n && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
        } catch (t) {}
      }(),
      N = function(t) {
        var e;
        return !(!f(t) || "function" != typeof(e = t.then)) && e
      },
      V = function(t, e, n) {
        if (!e.notified) {
          e.notified = !0;
          var r = e.reactions;
          m(function() {
            for (var o = e.value, i = 1 == e.state, c = 0, u = function(n) {
                var r, c, u, a = i ? n.ok : n.fail,
                  s = n.resolve,
                  f = n.reject,
                  l = n.domain;
                try {
                  a ? (i || (2 === e.rejection && U(t, e), e.rejection = 1), !0 === a ? r = o : (l && l.enter(), r = a(o), l && (l.exit(), u = !0)), r === n.promise ? f(M("Promise-chain cycle")) : (c = N(r)) ? c.call(r, s, f) : s(r)) : f(o)
                } catch (t) {
                  l && !u && l.exit(), f(t)
                }
              }; r.length > c;) u(r[c++]);
            e.reactions = [], e.notified = !1, n && !e.rejection && z(t, e)
          })
        }
      },
      W = function(t, e, n) {
        var r, o;
        D ? ((r = I.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), a.dispatchEvent(r)) : r = {
          promise: e,
          reason: n
        }, (o = a["on" + t]) ? o(r) : "unhandledrejection" === t && b("Unhandled promise rejection", n)
      },
      z = function(t, e) {
        g.call(a, function() {
          var n, r = e.value,
            o = H(e);
          if (o && (n = S(function() {
              B ? A.emit("unhandledRejection", r, t) : W("unhandledrejection", t, r)
            }), e.rejection = B || H(e) ? 2 : 1), o && n.e) throw n.v
        })
      },
      H = function(t) {
        return 1 !== t.rejection && !t.parent
      },
      U = function(t, e) {
        g.call(a, function() {
          B ? A.emit("rejectionHandled", t) : W("rejectionhandled", t, e.value)
        })
      },
      K = function(t, e, n, r) {
        return function(o) {
          t(e, n, o, r)
        }
      },
      q = function(t, e, n, r) {
        e.done || (e.done = !0, r && (e = r), e.value = n, e.state = 2, V(t, e, !0))
      },
      Y = function(t, e, n, r) {
        if (!e.done) {
          e.done = !0, r && (e = r);
          try {
            if (t === n) throw M("Promise can't be resolved itself!");
            var o = N(n);
            o ? m(function() {
              var r = {
                done: !1
              };
              try {
                o.call(n, K(Y, t, r, e), K(q, t, r, e))
              } catch (n) {
                q(t, r, n, e)
              }
            }) : (e.value = n, e.state = 1, V(t, e, !1))
          } catch (n) {
            q(t, {
              done: !1
            }, n, e)
          }
        }
      };
    G || (L = function(t) {
      p(this, L, c), l(t), r.call(this);
      var e = E(this);
      try {
        t(K(Y, this, e), K(q, this, e))
      } catch (t) {
        q(this, e, t)
      }
    }, (r = function(t) {
      T(this, {
        type: c,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0
      })
    }).prototype = n(86)(L.prototype, {
      then: function(t, e) {
        var n = _(this),
          r = R(y(this, L));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = B ? A.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && V(this, n, !1), r.promise
      },
      catch: function(t) {
        return this.then(void 0, t)
      }
    }), o = function() {
      var t = new r,
        e = E(t);
      this.promise = t, this.resolve = K(Y, t, e), this.reject = K(q, t, e)
    }, j.f = R = function(t) {
      return t === L || t === i ? new o(t) : F(t)
    }), s({
      global: !0,
      wrap: !0,
      forced: !G
    }, {
      Promise: L
    }), n(27)(L, c, !1, !0), n(87)(c), i = n(29).Promise, s({
      target: c,
      stat: !0,
      forced: !G
    }, {
      reject: function(t) {
        var e = R(this);
        return e.reject.call(void 0, t), e.promise
      }
    }), s({
      target: c,
      stat: !0,
      forced: u || !G
    }, {
      resolve: function(t) {
        return x(u && this === i ? L : this, t)
      }
    }), s({
      target: c,
      stat: !0,
      forced: !(G && h(function(t) {
        L.all(t).catch(function() {})
      }))
    }, {
      all: function(t) {
        var e = this,
          n = R(e),
          r = n.resolve,
          o = n.reject,
          i = S(function() {
            var n = [],
              i = 0,
              c = 1;
            d(t, function(t) {
              var u = i++,
                a = !1;
              n.push(void 0), c++, e.resolve(t).then(function(t) {
                a || (a = !0, n[u] = t, --c || r(n))
              }, o)
            }), --c || r(n)
          });
        return i.e && o(i.v), n.promise
      },
      race: function(t) {
        var e = this,
          n = R(e),
          r = n.reject,
          o = S(function() {
            d(t, function(t) {
              e.resolve(t).then(n.resolve, r)
            })
          });
        return o.e && r(o.v), n.promise
      }
    })
  }, function(t, e) {
    t.exports = function(t, e, n) {
      if (!(t instanceof e)) throw TypeError((n ? n + ": i" : "I") + "ncorrect invocation!");
      return t
    }
  }, function(t, e, n) {
    var r = n(10),
      o = n(1)("iterator"),
      i = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || i[o] === t)
    }
  }, function(t, e, n) {
    var r = n(30),
      o = n(1)("iterator"),
      i = n(10);
    t.exports = function(t) {
      if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
  }, function(t, e, n) {
    var r = n(2);
    t.exports = function(t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n)
      } catch (e) {
        var i = t.return;
        throw void 0 !== i && r(i.call(t)), e
      }
    }
  }, function(t, e, n) {
    var r = n(1)("iterator"),
      o = !1;
    try {
      var i = 0,
        c = {
          next: function() {
            return {
              done: !!i++
            }
          },
          return: function() {
            o = !0
          }
        };
      c[r] = function() {
        return this
      }, Array.from(c, function() {
        throw 2
      })
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        i[r] = function() {
          return {
            next: function() {
              return {
                done: n = !0
              }
            }
          }
        }, t(i)
      } catch (t) {}
      return n
    }
  }, function(t, e, n) {
    var r = n(0),
      o = n(7),
      i = n(45).set,
      c = r.MutationObserver || r.WebKitMutationObserver,
      u = r.process,
      a = r.Promise,
      s = "process" == o(u);
    t.exports = function() {
      var t, e, n, o = function() {
        var r, o;
        for (s && (r = u.domain) && r.exit(); t;) {
          o = t.fn, t = t.next;
          try {
            o()
          } catch (r) {
            throw t ? n() : e = void 0, r
          }
        }
        e = void 0, r && r.enter()
      };
      if (s) n = function() {
        u.nextTick(o)
      };
      else if (!c || r.navigator && r.navigator.standalone)
        if (a && a.resolve) {
          var f = a.resolve(void 0);
          n = function() {
            f.then(o)
          }
        } else n = function() {
          i.call(r, o)
        };
      else {
        var l = !0,
          p = document.createTextNode("");
        new c(o).observe(p, {
          characterData: !0
        }), n = function() {
          p.data = l = !l
        }
      }
      return function(r) {
        var o = {
          fn: r,
          next: void 0
        };
        e && (e.next = o), t || (t = o, n()), e = o
      }
    }
  }, function(t, e, n) {
    var r = n(0);
    t.exports = function(t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
    }
  }, function(t, e, n) {
    var r = n(0).navigator;
    t.exports = r && r.userAgent || ""
  }, function(t, e, n) {
    var r = n(14);
    t.exports = function(t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      o = n(8),
      i = n(6),
      c = n(1)("species");
    t.exports = function(t) {
      var e = r[t];
      i && e && !e[c] && o.f(e, c, {
        configurable: !0,
        get: function() {
          return this
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(29),
      o = n(0),
      i = n(44),
      c = n(46);
    n(9)({
      target: "Promise",
      proto: !0,
      real: !0
    }, {
      finally: function(t) {
        var e = i(this, "function" == typeof r.Promise ? r.Promise : o.Promise),
          n = "function" == typeof t;
        return this.then(n ? function(n) {
          return c(e, t()).then(function() {
            return n
          })
        } : t, n ? function(n) {
          return c(e, t()).then(function() {
            throw n
          })
        } : t)
      }
    })
  }, function(t, e, n) {
    "use strict";
    var r = n(18),
      o = n(28),
      i = n(42);
    n(9)({
      target: "Promise",
      stat: !0
    }, {
      allSettled: function(t) {
        var e = this,
          n = r.f(e),
          c = n.resolve,
          u = n.reject,
          a = o(function() {
            var n = [],
              r = 0,
              o = 1;
            i(t, function(t) {
              var i = r++,
                u = !1;
              n.push(void 0), o++, e.resolve(t).then(function(t) {
                u || (u = !0, n[i] = {
                  value: t,
                  status: "fulfilled"
                }, --o || c(n))
              }, function(t) {
                u || (u = !0, n[i] = {
                  reason: t,
                  status: "rejected"
                }, --o || c(n))
              })
            }), --o || c(n)
          });
        return a.e && u(a.v), n.promise
      }
    })
  }, function(t, e, n) {
    "use strict";
    var r = n(18),
      o = n(28);
    n(9)({
      target: "Promise",
      stat: !0
    }, {
      try: function(t) {
        var e = r.f(this),
          n = o(t);
        return (n.e ? e.reject : e.resolve)(n.v), e.promise
      }
    })
  }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }();
    e.BeerSlider = function() {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.start,
          o = void 0 === r ? "50" : r,
          i = n.prefix,
          c = void 0 === i ? "beer" : i;
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.start = parseInt(o) ? Math.min(100, Math.max(0, parseInt(o))) : 50, this.prefix = c, e && 2 === e.children.length && (this.element = e, this.revealContainer = this.element.children[1], this.revealContainer.children.length < 1 || (this.revealElement = this.revealContainer.children[0], this.range = this.addElement("input", {
          type: "range",
          class: this.prefix + "-range",
          "aria-label": "Percent of revealed content",
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-valuenow": this.start,
          value: this.start,
          min: "0",
          max: "100"
        }), this.handle = this.addElement("span", {
          class: this.prefix + "-handle"
        }), this.onImagesLoad()))
      }
      return r(t, [{
        key: "init",
        value: function() {
          this.element.classList.add(this.prefix + "-ready"), this.setImgWidth(), this.move(), this.addListeners()
        }
      }, {
        key: "loadingImg",
        value: function(t) {
          return new Promise(function(e, n) {
            t || e();
            var r = new Image;
            r.onload = function() {
              return e()
            }, r.onerror = function() {
              return n()
            }, r.src = t
          })
        }
      }, {
        key: "loadedBoth",
        value: function() {
          var t = this.element.children[0].src || this.element.children[0].getAttribute("data-" + this.prefix + "-src"),
            e = this.revealElement.src || this.revealElement.getAttribute("data-" + this.prefix + "-src");
          return Promise.all([this.loadingImg(t), this.loadingImg(e)])
        }
      }, {
        key: "onImagesLoad",
        value: function() {
          console.log(this);
          var t = this;
          this.revealElement && this.loadedBoth().then(function() {
            t.init()
          }, function() {
            console.error("Some errors occurred and images are not loaded.")
          })
        }
      }, {
        key: "addElement",
        value: function(t, e) {
          var n = document.createElement(t);
          return Object.keys(e).forEach(function(t) {
            n.setAttribute(t, e[t])
          }), this.element.appendChild(n), n
        }
      }, {
        key: "setImgWidth",
        value: function() {
          this.revealElement.style.width = getComputedStyle(this.element).width
        }
      }, {
        key: "addListeners",
        value: function() {
          var t = this;
          ["input", "change"].forEach(function(e) {
            t.range.addEventListener(e, function() {
              t.move()
            })
          }), window.addEventListener("resize", function() {
            t.setImgWidth()
          })
        }
      }, {
        key: "move",
        value: function() {
          this.revealContainer.style.width = this.range.value + "%", this.handle.style.left = this.range.value + "%", this.range.setAttribute("aria-valuenow", this.range.value)
        }
      }]), t
    }()
  }]).default
});
