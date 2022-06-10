var requirejs, require, define;
!function(e) {
    var n, r, i, t, o = {}, u = {}, f = {}, c = {}, l = Object.prototype.hasOwnProperty, s = [].slice;
    function p(e, n) {
        return l.call(e, n)
    }
    function a(e, n) {
        var r, i, t, o, u, c, l, s, p, a, d = n && n.split("/"), g = f.map, q = g && g["*"] || {};
        if (e && "." === e.charAt(0))
            if (n) {
                for (e = (d = d.slice(0, d.length - 1)).concat(e.split("/")),
                s = 0; s < e.length; s += 1)
                    if ("." === (a = e[s]))
                        e.splice(s, 1),
                        s -= 1;
                    else if (".." === a) {
                        if (1 === s && (".." === e[2] || ".." === e[0]))
                            break;
                        s > 0 && (e.splice(s - 1, 2),
                        s -= 2)
                    }
                e = e.join("/")
            } else
                0 === e.indexOf("./") && (e = e.substring(2));
        if ((d || q) && g) {
            for (s = (r = e.split("/")).length; s > 0; s -= 1) {
                if (i = r.slice(0, s).join("/"),
                d)
                    for (p = d.length; p > 0; p -= 1)
                        if ((t = g[d.slice(0, p).join("/")]) && (t = t[i])) {
                            o = t,
                            u = s;
                            break
                        }
                if (o)
                    break;
                !c && q && q[i] && (c = q[i],
                l = s)
            }
            !o && c && (o = c,
            u = l),
            o && (r.splice(0, u, o),
            e = r.join("/"))
        }
        return e
    }
    function d(n, i) {
        return function() {
            return r.apply(e, s.call(arguments, 0).concat([n, i]))
        }
    }
    function g(e) {
        return function(n) {
            o[e] = n
        }
    }
    function q(r) {
        if (p(u, r)) {
            var i = u[r];
            delete u[r],
            c[r] = !0,
            n.apply(e, i)
        }
        if (!p(o, r) && !p(c, r))
            throw new Error("No " + r);
        return o[r]
    }
    function O(e) {
        var n, r = e ? e.indexOf("!") : -1;
        return r > -1 && (n = e.substring(0, r),
        e = e.substring(r + 1, e.length)),
        [n, e]
    }
    function h(e) {
        return function() {
            return f && f.config && f.config[e] || {}
        }
    }
    i = function(e, n) {
        var r, i = O(e), t = i[0];
        return e = i[1],
        t && (r = q(t = a(t, n))),
        t ? e = r && r.normalize ? r.normalize(e, function(e) {
            return function(n) {
                return a(n, e)
            }
        }(n)) : a(e, n) : (t = (i = O(e = a(e, n)))[0],
        e = i[1],
        t && (r = q(t))),
        {
            f: t ? t + "!" + e : e,
            n: e,
            pr: t,
            p: r
        }
    }
    ,
    t = {
        require: function(e) {
            return d(e)
        },
        exports: function(e) {
            var n = o[e];
            return void 0 !== n ? n : o[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: o[e],
                config: h(e)
            }
        }
    },
    n = function(n, r, f, l) {
        var s, a, O, h, E, j, m = [];
        if (l = l || n,
        "function" == typeof f) {
            for (r = !r.length && f.length ? ["require", "exports", "module"] : r,
            E = 0; E < r.length; E += 1)
                if ("require" === (a = (h = i(r[E], l)).f))
                    m[E] = t.require(n);
                else if ("exports" === a)
                    m[E] = t.exports(n),
                    j = !0;
                else if ("module" === a)
                    s = m[E] = t.module(n);
                else if (p(o, a) || p(u, a) || p(c, a))
                    m[E] = q(a);
                else {
                    if (!h.p)
                        throw new Error(n + " missing " + a);
                    h.p.load(h.n, d(l, !0), g(a), {}),
                    m[E] = o[a]
                }
            O = f.apply(o[n], m),
            n && (s && s.exports !== e && s.exports !== o[n] ? o[n] = s.exports : O === e && j || (o[n] = O))
        } else
            n && (o[n] = f)
    }
    ,
    requirejs = require = r = function(o, u, c, l, s) {
        return "string" == typeof o ? t[o] ? t[o](u) : q(i(o, u).f) : (o.splice || (f = o,
        u.splice ? (o = u,
        u = c,
        c = null) : o = e),
        u = u || function() {}
        ,
        "function" == typeof c && (c = l,
        l = s),
        l ? n(e, o, u, c) : setTimeout(function() {
            n(e, o, u, c)
        }, 4),
        r)
    }
    ,
    r.config = function(e) {
        return (f = e).deps && r(f.deps, f.callback),
        r
    }
    ,
    (define = function(e, n, r) {
        n.splice || (r = n,
        n = []),
        p(o, e) || p(u, e) || (u[e] = [e, n, r])
    }
    ).amd = {
        jQuery: !0
    }
}(),
"undefined" != typeof ALMOND_OVERRIDES && ALMOND_OVERRIDES && (define = ALMOND_OVERRIDES.define || define,
require = ALMOND_OVERRIDES.require || require,
requirejs = ALMOND_OVERRIDES.requirejs || requirejs);
define("core/vendor/almond", function() {});

define("pjs", [], function() {
    return function(n, t, o) {
        function r(n) {
            return "object" == typeof n
        }
        function e(n) {
            return "function" == typeof n
        }
        function i() {}
        return function n(o, p) {
            function u() {
                var n = new c;
                return e(n.init) && n.init.apply(n, arguments),
                n
            }
            function c() {}
            undefined === p && (p = o,
            o = Object),
            u.Bare = c;
            var f, y = i.prototype = o.prototype, a = c.prototype = u.prototype = new i;
            return a.constructor = u,
            u.mixin = function(t) {
                return c.prototype = u.prototype = n(u, t).prototype,
                u
            }
            ,
            (u.open = function(n) {
                if (f = {},
                e(n) ? f = n.call(u, a, y, u, o) : r(n) && (f = n),
                r(f))
                    for (var i in f)
                        t.call(f, i) && (a[i] = f[i]);
                return e(a.init) || (a.init = o),
                u
            }
            )(p)
        }
    }(0, {}.hasOwnProperty)
});
define('core/math/parser/input-span', ["require", "exports"], function(require, n) {
    "use strict";
    function t(n, t, e) {
        return {
            input: n,
            start: t,
            end: e
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.slice = n.joinSpans = n.emptySpanAt = n.Span = void 0,
    n.Span = t,
    n.emptySpanAt = function(n, e) {
        return t(n, e, e)
    }
    ,
    n.joinSpans = function(n, e) {
        if (n.input !== e.input)
            throw new Error("Programming Error: cannot form a span on different inputs");
        return t(n.input, n.start, e.end)
    }
    ,
    n.slice = function(n) {
        return n.input.slice(n.start, n.end)
    }
});
define('core/math/domaintypes', ["require", "exports"], function(require, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.intersectDomains = n.allReals = n.linearPositiveDomain = n.knownDomain = n.unknownDomain = n.emptyDomain = void 0;
    n.emptyDomain = function() {
        return {
            type: "empty"
        }
    }
    ;
    n.unknownDomain = function() {
        return {
            type: "unknown"
        }
    }
    ;
    n.knownDomain = function(e) {
        return isNaN(e[0]) || isNaN(e[1]) || e[1] < e[0] ? n.emptyDomain() : {
            type: "known",
            bounds: e
        }
    }
    ;
    n.linearPositiveDomain = function(e, o) {
        if (0 === o)
            return e > 0 ? n.allReals() : n.emptyDomain();
        var t = -e / o
          , i = o < 0 ? [-1 / 0, t] : [t, 1 / 0];
        return n.knownDomain(i)
    }
    ;
    n.allReals = function() {
        return n.knownDomain([-1 / 0, 1 / 0])
    }
    ;
    n.intersectDomains = function(e, o) {
        if ("empty" === e.type || "empty" === o.type)
            return n.emptyDomain();
        if ("unknown" === e.type || "unknown" === o.type)
            return n.unknownDomain();
        if (e.bounds && o.bounds) {
            var t = [Math.max(e.bounds[0], o.bounds[0]), Math.min(e.bounds[1], o.bounds[1])];
            return n.knownDomain(t)
        }
        return n.emptyDomain()
    }
});
define('core/lib/worker-i18n', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.s = void 0,
    e.s = function(e, r) {
        return {
            key: e,
            vars: r
        }
    }
});
define('core/math/types', ["require", "exports", "core/lib/worker-i18n"], function(require, e, t) {
    "use strict";
    var r;
    function s(t) {
        switch (t) {
        case e.Any:
            return "Any";
        case e.Number:
            return "Number";
        case e.Bool:
            return "Bool";
        case e.Point:
            return "Point";
        case e.Distribution:
            return "Distribution";
        case e.Action:
            return "Action";
        case e.ListOfAny:
            return "ListOfAny";
        case e.ListOfNumber:
            return "ListOfNumber";
        case e.ListOfBool:
            return "ListOfBool";
        case e.ListOfPoint:
            return "ListOfPoint";
        case e.ListOfDistribution:
            return "ListOfDistribution";
        case e.EmptyList:
            return "EmptyList";
        case e.ErrorType:
            return "ErrorType";
        case e.SeedType:
            return "SeedType";
        case e.RGBColor:
            return "RGBColor";
        case e.ListOfColor:
            return "ListOfColor";
        case e.Polygon:
            return "Polygon";
        case e.ListOfPolygon:
            return "ListOfPolygon";
        default:
            throw new Error("Invalid type: " + t)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isTypeOrListOfType = e.typesMatch = e.isSubType = e.isOneOf = e.hasListType = e.listType = e.elementType = e.isList = e.prettyPrint = e.repr = e.ListOfPolygon = e.Polygon = e.ListOfColor = e.RGBColor = e.SeedType = e.ErrorType = e.EmptyList = e.ListOfDistribution = e.ListOfPoint = e.ListOfBool = e.ListOfNumber = e.ListOfAny = e.Action = e.Distribution = e.Point = e.Bool = e.Number = e.Any = void 0,
    e.Any = 0,
    e.Number = 1,
    e.Bool = 2,
    e.Point = 3,
    e.Distribution = 4,
    e.Action = 5,
    e.ListOfAny = 6,
    e.ListOfNumber = 7,
    e.ListOfBool = 8,
    e.ListOfPoint = 9,
    e.ListOfDistribution = 10,
    e.EmptyList = 11,
    e.ErrorType = 12,
    e.SeedType = 13,
    e.RGBColor = 14,
    e.ListOfColor = 15,
    e.Polygon = 16,
    e.ListOfPolygon = 17,
    e.repr = s,
    e.prettyPrint = function(r) {
        switch (r) {
        case e.Any:
            return t.s("shared-calculator-label-value-type-any");
        case e.Number:
            return t.s("shared-calculator-label-value-type-number");
        case e.Bool:
            return t.s("shared-calculator-label-value-type-bool");
        case e.Point:
            return t.s("shared-calculator-label-value-type-point");
        case e.Distribution:
            return t.s("shared-calculator-label-value-type-distribution");
        case e.Action:
            return t.s("shared-calculator-label-value-type-action");
        case e.ListOfAny:
            return t.s("shared-calculator-label-value-type-list-of-any");
        case e.ListOfNumber:
            return t.s("shared-calculator-label-value-type-list-of-numbers");
        case e.ListOfBool:
            return t.s("shared-calculator-label-value-type-list-of-bool");
        case e.ListOfPoint:
            return t.s("shared-calculator-label-value-type-list-of-points");
        case e.ListOfDistribution:
            return t.s("shared-calculator-label-value-type-list-of-distributions");
        case e.EmptyList:
            return t.s("shared-calculator-label-value-type-empty-list");
        case e.ErrorType:
            return t.s("shared-calculator-label-value-type-error");
        case e.SeedType:
            return t.s("shared-calculator-label-value-type-seed");
        case e.RGBColor:
            return t.s("shared-calculator-label-value-type-color");
        case e.ListOfColor:
            return t.s("shared-calculator-label-value-type-list-of-colors");
        case e.Polygon:
            return t.s("shared-calculator-label-value-type-polygon");
        case e.ListOfPolygon:
            return t.s("shared-calculator-label-value-type-list-of-polygons");
        default:
            throw new Error("Invalid type: " + r)
        }
    }
    ;
    (r = {})[e.ListOfAny] = e.Any,
    r[e.EmptyList] = e.Number,
    r[e.ListOfNumber] = e.Number,
    r[e.ListOfBool] = e.Bool,
    r[e.ListOfPoint] = e.Point,
    r[e.ListOfDistribution] = e.Distribution,
    r[e.ListOfColor] = e.RGBColor,
    r[e.ListOfPolygon] = e.Polygon;
    function o(t) {
        switch (t) {
        case e.ListOfAny:
        case e.ListOfNumber:
        case e.ListOfBool:
        case e.ListOfPoint:
        case e.ListOfDistribution:
        case e.ListOfColor:
        case e.ListOfPolygon:
        case e.EmptyList:
            return !0;
        case e.Any:
        case e.Number:
        case e.Bool:
        case e.Point:
        case e.Distribution:
        case e.ErrorType:
        case e.SeedType:
        case e.RGBColor:
        case e.Action:
        case e.Polygon:
            return !1;
        default:
            throw new Error("Invalid type: " + t)
        }
    }
    function i(t) {
        switch (t) {
        case e.EmptyList:
        case e.ListOfNumber:
            return e.Number;
        case e.ListOfBool:
            return e.Bool;
        case e.ListOfPoint:
            return e.Point;
        case e.ListOfDistribution:
            return e.Distribution;
        case e.ListOfColor:
            return e.RGBColor;
        case e.ListOfPolygon:
            return e.Polygon;
        case e.ListOfAny:
            return e.Any;
        case e.Any:
        case e.Number:
        case e.Bool:
        case e.Point:
        case e.Distribution:
        case e.ErrorType:
        case e.SeedType:
        case e.RGBColor:
        case e.Action:
        case e.Polygon:
            return e.Any;
        default:
            throw new Error("Invalid type: " + t)
        }
    }
    function a(t, r) {
        return !(t !== e.EmptyList || !o(r)) || (!(r !== e.ListOfAny || !o(t)) || t === r)
    }
    e.isList = o,
    e.elementType = i,
    e.listType = function(t) {
        switch (t) {
        case e.Any:
            return e.ListOfAny;
        case e.Number:
            return e.ListOfNumber;
        case e.Bool:
            return e.ListOfBool;
        case e.Point:
            return e.ListOfPoint;
        case e.Distribution:
            return e.ListOfDistribution;
        case e.RGBColor:
            return e.ListOfColor;
        case e.Polygon:
            return e.ListOfPolygon;
        case e.EmptyList:
        case e.ListOfNumber:
        case e.ListOfBool:
        case e.ListOfPoint:
        case e.ListOfDistribution:
        case e.ListOfColor:
        case e.ListOfPolygon:
        case e.ListOfAny:
        case e.ErrorType:
        case e.SeedType:
        case e.Action:
            throw new Error("Type " + s(t) + " does not implement listType.");
        default:
            throw new Error("Invalid type: " + t)
        }
    }
    ,
    e.hasListType = function(t) {
        switch (t) {
        case e.Any:
        case e.Number:
        case e.Bool:
        case e.Point:
        case e.Distribution:
        case e.RGBColor:
        case e.Polygon:
            return !0;
        case e.EmptyList:
        case e.ListOfNumber:
        case e.ListOfBool:
        case e.ListOfPoint:
        case e.ListOfDistribution:
        case e.ListOfColor:
        case e.ListOfPolygon:
        case e.ListOfAny:
        case e.ErrorType:
        case e.SeedType:
        case e.Action:
            return !1;
        default:
            throw new Error("Invalid type: " + t)
        }
    }
    ,
    e.isOneOf = function(e, t) {
        for (var r = 0, s = t; r < s.length; r++) {
            if (e === s[r])
                return !0
        }
        return !1
    }
    ,
    e.isSubType = a,
    e.typesMatch = function(e, t) {
        return a(e, t) || a(t, e)
    }
    ,
    e.isTypeOrListOfType = function(t, r) {
        return t === r || !!o(t) && (t === e.EmptyList || i(t) === r)
    }
});
define('core/math/parsenode/base', ['require', 'pjs', 'core/math/parser/input-span', 'core/math/domaintypes', 'core/math/types'], function(require) {
    "use strict";
    var e = require("pjs")
      , n = require("core/math/parser/input-span")
      , t = require("core/math/domaintypes")
      , i = require("core/math/types");
    return e(function(e, s, d) {
        e.init = function() {
            this._dependencies = [],
            this._dummyDependencies = [],
            this._updateSymbols = [],
            this._scope = {
                definitions: [],
                dependencies: [],
                scopes: []
            },
            this._exports = []
        }
        ,
        e.exportPenalty = 0,
        e.setInputSpan = function(e) {
            this._inputSpan = e
        }
        ,
        e.getInputString = function() {
            return void 0 === this.getInputSpan() ? "" : n.slice(this._inputSpan)
        }
        ,
        e.getInputSpan = function() {
            return this._inputSpan
        }
        ,
        e.shouldExportAns = function() {
            return !1
        }
        ,
        e.getAnsVariable = function() {
            return this.shouldExportAns() && this.userData && this.userData.hasOwnProperty("index") ? ["ans_" + this.userData.index] : []
        }
        ,
        e.addDependency = function(e) {
            -1 === this._dependencies.indexOf(e) && this._dependencies.push(e),
            -1 === this._scope.dependencies.indexOf(e) && this._scope.dependencies.push(e)
        }
        ,
        e.addDependencies = function(e) {
            for (var n = 0; n < e.length; n++)
                this.addDependency(e[n])
        }
        ,
        e.addDummyDependency = function(e) {
            -1 === this._dependencies.indexOf(e) && this._dependencies.push(e),
            -1 === this._dummyDependencies.indexOf(e) && this._dummyDependencies.push(e)
        }
        ,
        e.addDummyDependencies = function(e) {
            for (var n = 0; n < e.length; n++)
                this.addDummyDependency(e[n])
        }
        ,
        e.addUpdateSymbol = function(e) {
            -1 === this._dependencies.indexOf(e) && this._dependencies.push(e),
            -1 === this._updateSymbols.indexOf(e) && this._updateSymbols.push(e)
        }
        ,
        e.mergeDependencies = function() {
            for (var e = 0; e < arguments.length; e++) {
                var n, t = arguments[e];
                for (n = 0; n < t._dependencies.length; n++)
                    -1 === this._dependencies.indexOf(t._dependencies[n]) && this._dependencies.push(t._dependencies[n]);
                for (n = 0; n < t._updateSymbols.length; n++)
                    -1 === this._updateSymbols.indexOf(t._updateSymbols[n]) && this._updateSymbols.push(t._updateSymbols[n]);
                for (n = 0; n < t._scope.dependencies.length; n++)
                    -1 === this._scope.dependencies.indexOf(t._scope.dependencies[n]) && this._scope.dependencies.push(t._scope.dependencies[n]);
                this.addDummyDependencies(t.getDummyDependencies()),
                Array.prototype.push.apply(this._scope.scopes, t._scope.scopes)
            }
        }
        ,
        e.mergeDependenciesInScope = function(e, n) {
            this.addDummyDependencies(e);
            var t = n.getScope()
              , i = {
                definitions: e,
                dependencies: t.dependencies,
                scopes: t.scopes
            };
            this._scope.scopes.push(i);
            for (var s = 0; s < n._dependencies.length; s++)
                -1 === this._dependencies.indexOf(n._dependencies[s]) && this._dependencies.push(n._dependencies[s]);
            for (s = 0; s < n._updateSymbols.length; s++)
                -1 === this._updateSymbols.indexOf(n._updateSymbols[s]) && this._updateSymbols.push(n._updateSymbols[s]);
            this.addDummyDependencies(n.getDummyDependencies())
        }
        ,
        e.getDependencies = function() {
            return this._dependencies
        }
        ,
        e.getDummyDependencies = function() {
            return this._dummyDependencies
        }
        ,
        e.getUpdateSymbols = function() {
            return this._updateSymbols
        }
        ,
        e.getScope = function() {
            return this._scope
        }
        ,
        e.dependsOn = function(e) {
            return this._dependencies.indexOf(e) > -1
        }
        ,
        e.getExports = function() {
            return (this._exports || []).concat(this.getAnsVariable())
        }
        ,
        e.getLegalExports = function(e) {
            return this.getExports().filter(function(n) {
                return !e.assignmentForbidden(n)
            })
        }
        ,
        e.exportsSymbol = function(e) {
            return this._exports.indexOf(e) > -1
        }
        ,
        e.exportTo = function(e, n, t) {
            for (var i = this.getLegalExports(e), s = 0; s < i.length; s++) {
                var d = i[s];
                if (t[d])
                    return;
                t[d] = n.blocksExport ? n : this
            }
        }
        ,
        e.getOperator = function() {
            return this.operator || "="
        }
        ,
        e.isInequality = function() {
            return !1
        }
        ,
        e.isShadeBetween = function() {
            return !1
        }
        ,
        e.getAllIds = function() {
            return this.userData ? [this.userData.id] : []
        }
        ,
        e.getEvaluationInfo = function() {
            return !1
        }
        ,
        e.shouldPromoteToSlider = function(e) {
            return !1
        }
        ,
        e.getSliderVariables = function(e, n) {
            var t = e.sliderVariables(n.getDependencies());
            return n.valueType === i.Point || n.valueType === i.ListOfPoint ? t.filter(function(n) {
                return !e.validParametricVariable(n)
            }) : t
        }
        ,
        e.getCompiledDerivative = function() {
            var e = this.getDependencies();
            return this.takeDerivative(e[0] || "x").getCompiledFunction()
        }
        ,
        e.asValue = function() {}
        ,
        e.boundDomain = function(e) {
            return t.unknownDomain()
        }
    })
});
define('core/math/parsenode/error', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(t, n) {
        t.init = function(t) {
            n.init.call(this),
            this._msg = t,
            this.blocksExport = !0
        }
        ,
        t.evaluateOnce = function(t) {
            return this._msg
        }
        ,
        t.isError = !0,
        t.getError = function() {
            return this._msg
        }
        ,
        t.setDependencies = function(t) {
            return this.addDependencies(t),
            this
        }
        ,
        t.setActionValue = function(t) {
            this.actionValue = t
        }
        ,
        t.allowExport = function() {
            return this.blocksExport = !1,
            this
        }
    })
});
!function(n, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : function() {
        var t = n._
          , e = r();
        n._ = e,
        e.noConflict = function() {
            return n._ = t,
            e
        }
    }()
}(this, function() {
    var n = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}
      , r = Array.prototype
      , t = Object.prototype
      , e = "undefined" != typeof Symbol ? Symbol.prototype : null
      , u = r.push
      , o = r.slice
      , i = t.toString
      , a = t.hasOwnProperty
      , f = Array.isArray
      , c = Object.keys
      , l = Object.create
      , p = n.isNaN
      , s = n.isFinite
      , v = function() {};
    function h(n) {
        return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n)
    }
    var y = h.VERSION = "1.10.2";
    function g(n, r, t) {
        if (void 0 === r)
            return n;
        switch (null == t ? 3 : t) {
        case 1:
            return function(t) {
                return n.call(r, t)
            }
            ;
        case 3:
            return function(t, e, u) {
                return n.call(r, t, e, u)
            }
            ;
        case 4:
            return function(t, e, u, o) {
                return n.call(r, t, e, u, o)
            }
        }
        return function() {
            return n.apply(r, arguments)
        }
    }
    function d(n, r, t) {
        return null == n ? ur : Cn(n) ? g(n, r, t) : Ln(n) && !Kn(n) ? ir(n) : or(n)
    }
    function m(n, r) {
        return d(n, r, 1 / 0)
    }
    function b(n, r, t) {
        return h.iteratee !== m ? h.iteratee(n, r) : d(n, r, t)
    }
    function j(n, r) {
        return r = null == r ? n.length - 1 : +r,
        function() {
            for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; u < t; u++)
                e[u] = arguments[u + r];
            switch (r) {
            case 0:
                return n.call(this, e);
            case 1:
                return n.call(this, arguments[0], e);
            case 2:
                return n.call(this, arguments[0], arguments[1], e)
            }
            var o = Array(r + 1);
            for (u = 0; u < r; u++)
                o[u] = arguments[u];
            return o[r] = e,
            n.apply(this, o)
        }
    }
    function _(n) {
        if (!Ln(n))
            return {};
        if (l)
            return l(n);
        v.prototype = n;
        var r = new v;
        return v.prototype = null,
        r
    }
    function w(n) {
        return function(r) {
            return null == r ? void 0 : r[n]
        }
    }
    function x(n, r) {
        return null != n && a.call(n, r)
    }
    function S(n, r) {
        for (var t = r.length, e = 0; e < t; e++) {
            if (null == n)
                return;
            n = n[r[e]]
        }
        return t ? n : void 0
    }
    h.iteratee = m;
    var A = Math.pow(2, 53) - 1
      , O = w("length");
    function M(n) {
        var r = O(n);
        return "number" == typeof r && r >= 0 && r <= A
    }
    function E(n, r, t) {
        var e, u;
        if (r = g(r, t),
        M(n))
            for (e = 0,
            u = n.length; e < u; e++)
                r(n[e], e, n);
        else {
            var o = Sn(n);
            for (e = 0,
            u = o.length; e < u; e++)
                r(n[o[e]], o[e], n)
        }
        return n
    }
    function N(n, r, t) {
        r = b(r, t);
        for (var e = !M(n) && Sn(n), u = (e || n).length, o = Array(u), i = 0; i < u; i++) {
            var a = e ? e[i] : i;
            o[i] = r(n[a], a, n)
        }
        return o
    }
    function k(n) {
        var r = function(r, t, e, u) {
            var o = !M(r) && Sn(r)
              , i = (o || r).length
              , a = n > 0 ? 0 : i - 1;
            for (u || (e = r[o ? o[a] : a],
            a += n); a >= 0 && a < i; a += n) {
                var f = o ? o[a] : a;
                e = t(e, r[f], f, r)
            }
            return e
        };
        return function(n, t, e, u) {
            var o = arguments.length >= 3;
            return r(n, g(t, u, 4), e, o)
        }
    }
    var I = k(1)
      , T = k(-1);
    function B(n, r, t) {
        var e = (M(n) ? on : Tn)(n, r, t);
        if (void 0 !== e && -1 !== e)
            return n[e]
    }
    function R(n, r, t) {
        var e = [];
        return r = b(r, t),
        E(n, function(n, t, u) {
            r(n, t, u) && e.push(n)
        }),
        e
    }
    function F(n, r, t) {
        r = b(r, t);
        for (var e = !M(n) && Sn(n), u = (e || n).length, o = 0; o < u; o++) {
            var i = e ? e[o] : o;
            if (!r(n[i], i, n))
                return !1
        }
        return !0
    }
    function q(n, r, t) {
        r = b(r, t);
        for (var e = !M(n) && Sn(n), u = (e || n).length, o = 0; o < u; o++) {
            var i = e ? e[o] : o;
            if (r(n[i], i, n))
                return !0
        }
        return !1
    }
    function D(n, r, t, e) {
        return M(n) || (n = On(n)),
        ("number" != typeof t || e) && (t = 0),
        ln(n, r, t) >= 0
    }
    var W = j(function(n, r, t) {
        var e, u;
        return Cn(r) ? u = r : Kn(r) && (e = r.slice(0, -1),
        r = r[r.length - 1]),
        N(n, function(n) {
            var o = u;
            if (!o) {
                if (e && e.length && (n = S(n, e)),
                null == n)
                    return;
                o = n[r]
            }
            return null == o ? o : o.apply(n, t)
        })
    });
    function z(n, r) {
        return N(n, or(r))
    }
    function P(n, r, t) {
        var e, u, o = -1 / 0, i = -1 / 0;
        if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n)
            for (var a = 0, f = (n = M(n) ? n : On(n)).length; a < f; a++)
                null != (e = n[a]) && e > o && (o = e);
        else
            r = b(r, t),
            E(n, function(n, t, e) {
                ((u = r(n, t, e)) > i || u === -1 / 0 && o === -1 / 0) && (o = n,
                i = u)
            });
        return o
    }
    function K(n, r, t) {
        if (null == r || t)
            return M(n) || (n = On(n)),
            n[ar(n.length - 1)];
        var e = M(n) ? Dn(n) : On(n)
          , u = O(e);
        r = Math.max(Math.min(r, u), 0);
        for (var o = u - 1, i = 0; i < r; i++) {
            var a = ar(i, o)
              , f = e[i];
            e[i] = e[a],
            e[a] = f
        }
        return e.slice(0, r)
    }
    function L(n, r) {
        return function(t, e, u) {
            var o = r ? [[], []] : {};
            return e = b(e, u),
            E(t, function(r, u) {
                var i = e(r, u, t);
                n(o, r, i)
            }),
            o
        }
    }
    var V = L(function(n, r, t) {
        x(n, t) ? n[t].push(r) : n[t] = [r]
    })
      , C = L(function(n, r, t) {
        n[t] = r
    })
      , J = L(function(n, r, t) {
        x(n, t) ? n[t]++ : n[t] = 1
    })
      , U = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    var $ = L(function(n, r, t) {
        n[t ? 0 : 1].push(r)
    }, !0);
    function G(n, r, t) {
        return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[0] : H(n, n.length - r)
    }
    function H(n, r, t) {
        return o.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)))
    }
    function Q(n, r, t) {
        return o.call(n, null == r || t ? 1 : r)
    }
    function X(n, r, t, e) {
        for (var u = (e = e || []).length, o = 0, i = O(n); o < i; o++) {
            var a = n[o];
            if (M(a) && (Kn(a) || Vn(a)))
                if (r)
                    for (var f = 0, c = a.length; f < c; )
                        e[u++] = a[f++];
                else
                    X(a, r, t, e),
                    u = e.length;
            else
                t || (e[u++] = a)
        }
        return e
    }
    var Y = j(function(n, r) {
        return rn(n, r)
    });
    function Z(n, r, t, e) {
        er(r) || (e = t,
        t = r,
        r = !1),
        null != t && (t = b(t, e));
        for (var u = [], o = [], i = 0, a = O(n); i < a; i++) {
            var f = n[i]
              , c = t ? t(f, i, n) : f;
            r && !t ? (i && o === c || u.push(f),
            o = c) : t ? D(o, c) || (o.push(c),
            u.push(f)) : D(u, f) || u.push(f)
        }
        return u
    }
    var nn = j(function(n) {
        return Z(X(n, !0, !0))
    });
    var rn = j(function(n, r) {
        return r = X(r, !0, !0),
        R(n, function(n) {
            return !D(r, n)
        })
    });
    function tn(n) {
        for (var r = n && P(n, O).length || 0, t = Array(r), e = 0; e < r; e++)
            t[e] = z(n, e);
        return t
    }
    var en = j(tn);
    function un(n) {
        return function(r, t, e) {
            t = b(t, e);
            for (var u = O(r), o = n > 0 ? 0 : u - 1; o >= 0 && o < u; o += n)
                if (t(r[o], o, r))
                    return o;
            return -1
        }
    }
    var on = un(1)
      , an = un(-1);
    function fn(n, r, t, e) {
        for (var u = (t = b(t, e, 1))(r), o = 0, i = O(n); o < i; ) {
            var a = Math.floor((o + i) / 2);
            t(n[a]) < u ? o = a + 1 : i = a
        }
        return o
    }
    function cn(n, r, t) {
        return function(e, u, i) {
            var a = 0
              , f = O(e);
            if ("number" == typeof i)
                n > 0 ? a = i >= 0 ? i : Math.max(i + f, a) : f = i >= 0 ? Math.min(i + 1, f) : i + f + 1;
            else if (t && i && f)
                return e[i = t(e, u)] === u ? i : -1;
            if (u != u)
                return (i = r(o.call(e, a, f), tr)) >= 0 ? i + a : -1;
            for (i = n > 0 ? a : f - 1; i >= 0 && i < f; i += n)
                if (e[i] === u)
                    return i;
            return -1
        }
    }
    var ln = cn(1, on, fn)
      , pn = cn(-1, an);
    function sn(n, r, t, e, u) {
        if (!(e instanceof r))
            return n.apply(t, u);
        var o = _(n.prototype)
          , i = n.apply(o, u);
        return Ln(i) ? i : o
    }
    var vn = j(function(n, r, t) {
        if (!Cn(n))
            throw new TypeError("Bind must be called on a function");
        var e = j(function(u) {
            return sn(n, e, r, this, t.concat(u))
        });
        return e
    })
      , hn = j(function(n, r) {
        var t = hn.placeholder
          , e = function() {
            for (var u = 0, o = r.length, i = Array(o), a = 0; a < o; a++)
                i[a] = r[a] === t ? arguments[u++] : r[a];
            for (; u < arguments.length; )
                i.push(arguments[u++]);
            return sn(n, e, this, this, i)
        };
        return e
    });
    hn.placeholder = h;
    var yn = j(function(n, r) {
        var t = (r = X(r, !1, !1)).length;
        if (t < 1)
            throw new Error("bindAll must be passed function names");
        for (; t--; ) {
            var e = r[t];
            n[e] = vn(n[e], n)
        }
    });
    var gn = j(function(n, r, t) {
        return setTimeout(function() {
            return n.apply(null, t)
        }, r)
    })
      , dn = hn(gn, h, 1);
    function mn(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    function bn(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)),
            n <= 1 && (r = null),
            t
        }
    }
    var jn = hn(bn, 2)
      , _n = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , wn = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    function xn(n, r) {
        var e = wn.length
          , u = n.constructor
          , o = Cn(u) && u.prototype || t
          , i = "constructor";
        for (x(n, i) && !D(r, i) && r.push(i); e--; )
            (i = wn[e])in n && n[i] !== o[i] && !D(r, i) && r.push(i)
    }
    function Sn(n) {
        if (!Ln(n))
            return [];
        if (c)
            return c(n);
        var r = [];
        for (var t in n)
            x(n, t) && r.push(t);
        return _n && xn(n, r),
        r
    }
    function An(n) {
        if (!Ln(n))
            return [];
        var r = [];
        for (var t in n)
            r.push(t);
        return _n && xn(n, r),
        r
    }
    function On(n) {
        for (var r = Sn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
            e[u] = n[r[u]];
        return e
    }
    function Mn(n) {
        for (var r = {}, t = Sn(n), e = 0, u = t.length; e < u; e++)
            r[n[t[e]]] = t[e];
        return r
    }
    function En(n) {
        var r = [];
        for (var t in n)
            Cn(n[t]) && r.push(t);
        return r.sort()
    }
    function Nn(n, r) {
        return function(t) {
            var e = arguments.length;
            if (r && (t = Object(t)),
            e < 2 || null == t)
                return t;
            for (var u = 1; u < e; u++)
                for (var o = arguments[u], i = n(o), a = i.length, f = 0; f < a; f++) {
                    var c = i[f];
                    r && void 0 !== t[c] || (t[c] = o[c])
                }
            return t
        }
    }
    var kn = Nn(An)
      , In = Nn(Sn);
    function Tn(n, r, t) {
        r = b(r, t);
        for (var e, u = Sn(n), o = 0, i = u.length; o < i; o++)
            if (r(n[e = u[o]], e, n))
                return e
    }
    function Bn(n, r, t) {
        return r in t
    }
    var Rn = j(function(n, r) {
        var t = {}
          , e = r[0];
        if (null == n)
            return t;
        Cn(e) ? (r.length > 1 && (e = g(e, r[1])),
        r = An(n)) : (e = Bn,
        r = X(r, !1, !1),
        n = Object(n));
        for (var u = 0, o = r.length; u < o; u++) {
            var i = r[u]
              , a = n[i];
            e(a, i, n) && (t[i] = a)
        }
        return t
    })
      , Fn = j(function(n, r) {
        var t, e = r[0];
        return Cn(e) ? (e = mn(e),
        r.length > 1 && (t = r[1])) : (r = N(X(r, !1, !1), String),
        e = function(n, t) {
            return !D(r, t)
        }
        ),
        Rn(n, e, t)
    })
      , qn = Nn(An, !0);
    function Dn(n) {
        return Ln(n) ? Kn(n) ? n.slice() : kn({}, n) : n
    }
    function Wn(n, r) {
        var t = Sn(r)
          , e = t.length;
        if (null == n)
            return !e;
        for (var u = Object(n), o = 0; o < e; o++) {
            var i = t[o];
            if (r[i] !== u[i] || !(i in u))
                return !1
        }
        return !0
    }
    function zn(n, r, t, u) {
        if (n === r)
            return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r)
            return !1;
        if (n != n)
            return r != r;
        var o = typeof n;
        return ("function" === o || "object" === o || "object" == typeof r) && function(n, r, t, u) {
            n instanceof h && (n = n._wrapped);
            r instanceof h && (r = r._wrapped);
            var o = i.call(n);
            if (o !== i.call(r))
                return !1;
            switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + r;
            case "[object Number]":
                return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +r;
            case "[object Symbol]":
                return e.valueOf.call(n) === e.valueOf.call(r)
            }
            var a = "[object Array]" === o;
            if (!a) {
                if ("object" != typeof n || "object" != typeof r)
                    return !1;
                var f = n.constructor
                  , c = r.constructor;
                if (f !== c && !(Cn(f) && f instanceof f && Cn(c) && c instanceof c) && "constructor"in n && "constructor"in r)
                    return !1
            }
            u = u || [];
            var l = (t = t || []).length;
            for (; l--; )
                if (t[l] === n)
                    return u[l] === r;
            if (t.push(n),
            u.push(r),
            a) {
                if ((l = n.length) !== r.length)
                    return !1;
                for (; l--; )
                    if (!zn(n[l], r[l], t, u))
                        return !1
            } else {
                var p, s = Sn(n);
                if (l = s.length,
                Sn(r).length !== l)
                    return !1;
                for (; l--; )
                    if (!x(r, p = s[l]) || !zn(n[p], r[p], t, u))
                        return !1
            }
            return t.pop(),
            u.pop(),
            !0
        }(n, r, t, u)
    }
    function Pn(n) {
        return function(r) {
            return i.call(r) === "[object " + n + "]"
        }
    }
    var Kn = f || Pn("Array");
    function Ln(n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n
    }
    var Vn = Pn("Arguments")
      , Cn = Pn("Function")
      , Jn = Pn("String")
      , Un = Pn("Number")
      , $n = Pn("Date")
      , Gn = Pn("RegExp")
      , Hn = Pn("Error")
      , Qn = Pn("Symbol")
      , Xn = Pn("Map")
      , Yn = Pn("WeakMap")
      , Zn = Pn("Set")
      , nr = Pn("WeakSet");
    !function() {
        Vn(arguments) || (Vn = function(n) {
            return x(n, "callee")
        }
        )
    }();
    var rr = n.document && n.document.childNodes;
    function tr(n) {
        return Un(n) && p(n)
    }
    function er(n) {
        return !0 === n || !1 === n || "[object Boolean]" === i.call(n)
    }
    function ur(n) {
        return n
    }
    function or(n) {
        return Kn(n) ? function(r) {
            return S(r, n)
        }
        : w(n)
    }
    function ir(n) {
        return n = In({}, n),
        function(r) {
            return Wn(r, n)
        }
    }
    function ar(n, r) {
        return null == r && (r = n,
        n = 0),
        n + Math.floor(Math.random() * (r - n + 1))
    }
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof rr && (Cn = function(n) {
        return "function" == typeof n || !1
    }
    );
    var fr = Date.now || function() {
        return (new Date).getTime()
    }
      , cr = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , lr = Mn(cr);
    function pr(n) {
        var r = function(r) {
            return n[r]
        }
          , t = "(?:" + Sn(n).join("|") + ")"
          , e = RegExp(t)
          , u = RegExp(t, "g");
        return function(n) {
            return n = null == n ? "" : "" + n,
            e.test(n) ? n.replace(u, r) : n
        }
    }
    var sr = pr(cr)
      , vr = pr(lr);
    var hr = 0;
    var yr = h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }
      , gr = /(.)^/
      , dr = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , mr = /\\|'|\r|\n|\u2028|\u2029/g
      , br = function(n) {
        return "\\" + dr[n]
    };
    function jr(n, r) {
        return n._chain ? h(r).chain() : r
    }
    function _r(n) {
        return E(En(n), function(r) {
            var t = h[r] = n[r];
            h.prototype[r] = function() {
                var n = [this._wrapped];
                return u.apply(n, arguments),
                jr(this, t.apply(h, n))
            }
        }),
        h
    }
    E(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            jr(this, r)
        }
    }),
    E(["concat", "join", "slice"], function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            return jr(this, t.apply(this._wrapped, arguments))
        }
    }),
    h.prototype.value = function() {
        return this._wrapped
    }
    ,
    h.prototype.valueOf = h.prototype.toJSON = h.prototype.value,
    h.prototype.toString = function() {
        return String(this._wrapped)
    }
    ;
    var wr = _r({
        default: h,
        VERSION: y,
        iteratee: m,
        restArguments: j,
        each: E,
        forEach: E,
        map: N,
        collect: N,
        reduce: I,
        foldl: I,
        inject: I,
        reduceRight: T,
        foldr: T,
        find: B,
        detect: B,
        filter: R,
        select: R,
        reject: function(n, r, t) {
            return R(n, mn(b(r)), t)
        },
        every: F,
        all: F,
        some: q,
        any: q,
        contains: D,
        includes: D,
        include: D,
        invoke: W,
        pluck: z,
        where: function(n, r) {
            return R(n, ir(r))
        },
        findWhere: function(n, r) {
            return B(n, ir(r))
        },
        max: P,
        min: function(n, r, t) {
            var e, u, o = 1 / 0, i = 1 / 0;
            if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n)
                for (var a = 0, f = (n = M(n) ? n : On(n)).length; a < f; a++)
                    null != (e = n[a]) && e < o && (o = e);
            else
                r = b(r, t),
                E(n, function(n, t, e) {
                    ((u = r(n, t, e)) < i || u === 1 / 0 && o === 1 / 0) && (o = n,
                    i = u)
                });
            return o
        },
        shuffle: function(n) {
            return K(n, 1 / 0)
        },
        sample: K,
        sortBy: function(n, r, t) {
            var e = 0;
            return r = b(r, t),
            z(N(n, function(n, t, u) {
                return {
                    value: n,
                    index: e++,
                    criteria: r(n, t, u)
                }
            }).sort(function(n, r) {
                var t = n.criteria
                  , e = r.criteria;
                if (t !== e) {
                    if (t > e || void 0 === t)
                        return 1;
                    if (t < e || void 0 === e)
                        return -1
                }
                return n.index - r.index
            }), "value")
        },
        groupBy: V,
        indexBy: C,
        countBy: J,
        toArray: function(n) {
            return n ? Kn(n) ? o.call(n) : Jn(n) ? n.match(U) : M(n) ? N(n, ur) : On(n) : []
        },
        size: function(n) {
            return null == n ? 0 : M(n) ? n.length : Sn(n).length
        },
        partition: $,
        first: G,
        head: G,
        take: G,
        initial: H,
        last: function(n, r, t) {
            return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[n.length - 1] : Q(n, Math.max(0, n.length - r))
        },
        rest: Q,
        tail: Q,
        drop: Q,
        compact: function(n) {
            return R(n, Boolean)
        },
        flatten: function(n, r) {
            return X(n, r, !1)
        },
        without: Y,
        uniq: Z,
        unique: Z,
        union: nn,
        intersection: function(n) {
            for (var r = [], t = arguments.length, e = 0, u = O(n); e < u; e++) {
                var o = n[e];
                if (!D(r, o)) {
                    var i;
                    for (i = 1; i < t && D(arguments[i], o); i++)
                        ;
                    i === t && r.push(o)
                }
            }
            return r
        },
        difference: rn,
        unzip: tn,
        zip: en,
        object: function(n, r) {
            for (var t = {}, e = 0, u = O(n); e < u; e++)
                r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
            return t
        },
        findIndex: on,
        findLastIndex: an,
        sortedIndex: fn,
        indexOf: ln,
        lastIndexOf: pn,
        range: function(n, r, t) {
            null == r && (r = n || 0,
            n = 0),
            t || (t = r < n ? -1 : 1);
            for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0; o < e; o++,
            n += t)
                u[o] = n;
            return u
        },
        chunk: function(n, r) {
            if (null == r || r < 1)
                return [];
            for (var t = [], e = 0, u = n.length; e < u; )
                t.push(o.call(n, e, e += r));
            return t
        },
        bind: vn,
        partial: hn,
        bindAll: yn,
        memoize: function(n, r) {
            var t = function(e) {
                var u = t.cache
                  , o = "" + (r ? r.apply(this, arguments) : e);
                return x(u, o) || (u[o] = n.apply(this, arguments)),
                u[o]
            };
            return t.cache = {},
            t
        },
        delay: gn,
        defer: dn,
        throttle: function(n, r, t) {
            var e, u, o, i, a = 0;
            t || (t = {});
            var f = function() {
                a = !1 === t.leading ? 0 : fr(),
                e = null,
                i = n.apply(u, o),
                e || (u = o = null)
            }
              , c = function() {
                var c = fr();
                a || !1 !== t.leading || (a = c);
                var l = r - (c - a);
                return u = this,
                o = arguments,
                l <= 0 || l > r ? (e && (clearTimeout(e),
                e = null),
                a = c,
                i = n.apply(u, o),
                e || (u = o = null)) : e || !1 === t.trailing || (e = setTimeout(f, l)),
                i
            };
            return c.cancel = function() {
                clearTimeout(e),
                a = 0,
                e = u = o = null
            }
            ,
            c
        },
        debounce: function(n, r, t) {
            var e, u, o = function(r, t) {
                e = null,
                t && (u = n.apply(r, t))
            }, i = j(function(i) {
                if (e && clearTimeout(e),
                t) {
                    var a = !e;
                    e = setTimeout(o, r),
                    a && (u = n.apply(this, i))
                } else
                    e = gn(o, r, this, i);
                return u
            });
            return i.cancel = function() {
                clearTimeout(e),
                e = null
            }
            ,
            i
        },
        wrap: function(n, r) {
            return hn(r, n)
        },
        negate: mn,
        compose: function() {
            var n = arguments
              , r = n.length - 1;
            return function() {
                for (var t = r, e = n[r].apply(this, arguments); t--; )
                    e = n[t].call(this, e);
                return e
            }
        },
        after: function(n, r) {
            return function() {
                if (--n < 1)
                    return r.apply(this, arguments)
            }
        },
        before: bn,
        once: jn,
        keys: Sn,
        allKeys: An,
        values: On,
        mapObject: function(n, r, t) {
            r = b(r, t);
            for (var e = Sn(n), u = e.length, o = {}, i = 0; i < u; i++) {
                var a = e[i];
                o[a] = r(n[a], a, n)
            }
            return o
        },
        pairs: function(n) {
            for (var r = Sn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
                e[u] = [r[u], n[r[u]]];
            return e
        },
        invert: Mn,
        functions: En,
        methods: En,
        extend: kn,
        extendOwn: In,
        assign: In,
        findKey: Tn,
        pick: Rn,
        omit: Fn,
        defaults: qn,
        create: function(n, r) {
            var t = _(n);
            return r && In(t, r),
            t
        },
        clone: Dn,
        tap: function(n, r) {
            return r(n),
            n
        },
        isMatch: Wn,
        isEqual: function(n, r) {
            return zn(n, r)
        },
        isEmpty: function(n) {
            return null == n || (M(n) && (Kn(n) || Jn(n) || Vn(n)) ? 0 === n.length : 0 === Sn(n).length)
        },
        isElement: function(n) {
            return !(!n || 1 !== n.nodeType)
        },
        isArray: Kn,
        isObject: Ln,
        isArguments: Vn,
        isFunction: Cn,
        isString: Jn,
        isNumber: Un,
        isDate: $n,
        isRegExp: Gn,
        isError: Hn,
        isSymbol: Qn,
        isMap: Xn,
        isWeakMap: Yn,
        isSet: Zn,
        isWeakSet: nr,
        isFinite: function(n) {
            return !Qn(n) && s(n) && !p(parseFloat(n))
        },
        isNaN: tr,
        isBoolean: er,
        isNull: function(n) {
            return null === n
        },
        isUndefined: function(n) {
            return void 0 === n
        },
        has: function(n, r) {
            if (!Kn(r))
                return x(n, r);
            for (var t = r.length, e = 0; e < t; e++) {
                var u = r[e];
                if (null == n || !a.call(n, u))
                    return !1;
                n = n[u]
            }
            return !!t
        },
        identity: ur,
        constant: function(n) {
            return function() {
                return n
            }
        },
        noop: function() {},
        property: or,
        propertyOf: function(n) {
            return null == n ? function() {}
            : function(r) {
                return Kn(r) ? S(n, r) : n[r]
            }
        },
        matcher: ir,
        matches: ir,
        times: function(n, r, t) {
            var e = Array(Math.max(0, n));
            r = g(r, t, 1);
            for (var u = 0; u < n; u++)
                e[u] = r(u);
            return e
        },
        random: ar,
        now: fr,
        escape: sr,
        unescape: vr,
        result: function(n, r, t) {
            Kn(r) || (r = [r]);
            var e = r.length;
            if (!e)
                return Cn(t) ? t.call(n) : t;
            for (var u = 0; u < e; u++) {
                var o = null == n ? void 0 : n[r[u]];
                void 0 === o && (o = t,
                u = e),
                n = Cn(o) ? o.call(n) : o
            }
            return n
        },
        uniqueId: function(n) {
            var r = ++hr + "";
            return n ? n + r : r
        },
        templateSettings: yr,
        template: function(n, r, t) {
            !r && t && (r = t),
            r = qn({}, r, h.templateSettings);
            var e, u = RegExp([(r.escape || gr).source, (r.interpolate || gr).source, (r.evaluate || gr).source].join("|") + "|$", "g"), o = 0, i = "__p+='";
            n.replace(u, function(r, t, e, u, a) {
                return i += n.slice(o, a).replace(mr, br),
                o = a + r.length,
                t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : u && (i += "';\n" + u + "\n__p+='"),
                r
            }),
            i += "';\n",
            r.variable || (i = "with(obj||{}){\n" + i + "}\n"),
            i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                e = new Function(r.variable || "obj","_",i)
            } catch (n) {
                throw n.source = i,
                n
            }
            var a = function(n) {
                return e.call(this, n, h)
            }
              , f = r.variable || "obj";
            return a.source = "function(" + f + "){\n" + i + "}",
            a
        },
        chain: function(n) {
            var r = h(n);
            return r._chain = !0,
            r
        },
        mixin: _r
    });
    return wr._ = wr,
    wr
});
define('core/math/distance', ["require", "exports"], function(require, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.halfRound = t.approx = t.pointToSegment = t.closestPointOnSegment = t.pointToSegmentParameter = t.mean = t.hypot = void 0;
    var n = Math.hypot && Math.hypot(1 / 0, NaN) === 1 / 0;
    function r(t) {
        return t === 1 / 0 || t === -1 / 0
    }
    function e(n, r, e, o, a, i, u, h, f) {
        var p = t.hypot(u - o, h - a, f - i);
        return 0 === p ? 0 : function(t, n, r, e, o, a) {
            return t * e + n * o + r * a
        }((n - o) / p, (r - a) / p, (e - i) / p, (u - o) / p, (h - a) / p, (f - i) / p)
    }
    function o(t, n, r, o, a, i) {
        var u = e(t, n, 0, r, o, 0, a, i, 0);
        return u <= 0 ? [r, o] : u >= 1 ? [a, i] : [r + u * (a - r), o + u * (i - o)]
    }
    t.hypot = n ? Math.hypot : function(t, n, e) {
        if (r(t) || r(n) || void 0 !== e && r(e))
            return 1 / 0;
        if (isNaN(t) || isNaN(n) || void 0 !== e && isNaN(e))
            return NaN;
        if (0 === t && 0 === n && (void 0 === e || 0 === e))
            return 0;
        for (var o = 0, a = 0, i = 0; i < arguments.length; i += 1) {
            var u = Math.abs(Number(arguments[i]));
            u > o && (a *= o / u * (o / u),
            o = u),
            a += 0 === u && 0 === o ? 0 : u / o * (u / o)
        }
        return o === 1 / 0 ? 1 / 0 : o * Math.sqrt(a)
    }
    ,
    t.mean = function(t, n) {
        return t > 0 == n > 0 ? t + .5 * (n - t) : .5 * (t + n)
    }
    ,
    t.pointToSegmentParameter = e,
    t.closestPointOnSegment = o,
    t.pointToSegment = function(n, r, e, a, i, u) {
        var h = o(n, r, e, a, i, u);
        return t.hypot(n - h[0], r - h[1])
    }
    ,
    t.approx = function(t, n, r) {
        if (void 0 === r && (r = 1),
        t === n)
            return !0;
        if (!isFinite(t) || !isFinite(n))
            return !1;
        if (r > 50)
            throw new Error("Within " + (52 - r) + " bits isn't really approximate any more");
        var e = Math.max(Math.max(Math.abs(t), Math.abs(n)), 1);
        return e === e + (1 === r ? .5 : Math.pow(.5, r)) * Math.abs(n - t)
    }
    ,
    t.halfRound = function(t) {
        return Math.round(t - .5) + .5
    }
});
define('core/math/tofraction', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = function(e, r) {
        if (void 0 === r && (r = 1e6),
        e === 1 / 0)
            return {
                n: 1 / 0,
                d: 1
            };
        if (e === -1 / 0)
            return {
                n: -1 / 0,
                d: 1
            };
        if (!isFinite(e))
            return {
                n: NaN,
                d: 1
            };
        for (var n, t, i, u = 0, f = 1, d = 1, o = 0; !(t = (n = Math.floor(e)) * f + u,
        (i = n * o + d) > r || (u = f,
        d = o,
        f = t,
        o = i,
        e === n)); )
            e = 1 / (e - n);
        return {
            n: f,
            d: o
        }
    }
});
define('core/lib/label', ["require", "exports", "underscore", "core/math/distance", "core/math/tofraction"], function(require, e, t, n, r) {
    "use strict";
    function a(e, t) {
        if (void 0 === t && (t = e),
        isNaN(e) || !isFinite(e))
            return {
                ariaString: "undefined",
                string: "undefined",
                value: e
            };
        if (0 === e)
            return {
                ariaString: "0",
                string: "0",
                value: e
            };
        Math.abs(e) > Math.abs(t) && (t = e);
        var a, i = r.default(e / Math.PI, 24);
        if (m(t) && n.approx(i.n / i.d * Math.PI, e, 3))
            return {
                ariaString: f(a = (0 === i.n ? "0" : 1 === i.n ? "π" : -1 === i.n ? "-π" : i.n.toString() + "π") + (1 === i.d ? "" : "/" + i.d.toString())),
                string: a,
                value: i.n / i.d * Math.PI
            };
        if (m(t))
            return {
                ariaString: f(a = function(e) {
                    return "-0" === e ? "0" : e
                }(l(e.toFixed(v(t))))),
                string: a,
                value: parseFloat(a)
            };
        var u = p(e.toExponential(v(t / e))).split("e")
          , o = u[0] + "×10"
          , c = u[1].replace("+", "");
        return {
            ariaString: f(a = p(e.toExponential(v(t / e))).replace("+", "")),
            string: a,
            mantissa: o,
            superscript: c,
            value: parseFloat(a)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.trimLatex = e.latexToIdentifier = e.identifierToHTML = e.identifierToLatex = e.formatSymbol = e.truncatedAriaLabel = e.truncatedLatexLabel = e.truncatedPlainmathLabel = e.truncatedHTMLLabel = e.numericLabel = e.canDisplayAsFraction = e.point = e.value = void 0,
    e.value = a;
    var i = {
        "[e]": " times 10 to the ",
        "[+]": " plus ",
        "[-]": " minus ",
        "[*]": " times ",
        "[/]": " over ",
        "[π]": " pi ",
        "[τ]": " tau ",
        "[θ]": " theta ",
        "[ϕ]": " phi "
    }
      , u = new RegExp(Object.keys(i).join("|"),"gi");
    function o(e) {
        return i["[" + e + "]"]
    }
    var c = /(\.)([0-9]+)/g;
    function s(e, t, n) {
        return t + n.split("").join(" ").trim()
    }
    function f(e) {
        return e.replace(c, s).replace(u, o).replace(/ +/gi, " ").trim()
    }
    e.point = function(e, t, n, r) {
        var i = a(e, t);
        return [i, a(r(i.value), n)]
    }
    ;
    var d = /\.?0+$/;
    function l(e) {
        return -1 === e.indexOf(".") ? e : e.replace(d, "")
    }
    function p(e) {
        return e.replace(/\.?0+e/, "e")
    }
    function m(e) {
        return 1e-4 < (e = Math.abs(e)) && e < 1e7
    }
    function v(e) {
        return e = Math.abs(e),
        e = Math.max(e, 1e-16),
        Math.max(3, Math.floor(4.5 - Math.log(e) / Math.LN10))
    }
    function h(e) {
        return 1e6 / Math.sqrt(Math.abs(e))
    }
    function b(e) {
        var t = h(e);
        if (t < 1)
            return !1;
        if (t > 1e12)
            return !1;
        var n = r.default(e, t)
          , a = n.n
          , i = n.d;
        return 1 !== i && e === e + Math.pow(2, -3) * Math.abs(a / i - e)
    }
    function g(e, t) {
        if (t = t || {},
        isNaN(e) || !isFinite(e))
            return {
                type: "undefined"
            };
        if (0 === e || t.zeroCutoff && Math.abs(e) < t.zeroCutoff)
            return {
                type: "decimal",
                value: "0"
            };
        var n = t.smallCutoff || .001
          , a = t.bigCutoff || 1e6
          , i = t.digits || 10
          , u = p(e.toExponential(i - 2)).match(/([\d\.\-]+)e\+?([\d\-]+)/);
        if (!u)
            return {
                type: "undefined"
            };
        var o = parseInt(u[2], 10) >= i;
        if (b(e) && t.displayAsFraction) {
            var c = r.default(e, h(e));
            return {
                type: "fraction",
                numerator: c.n.toString(),
                denominator: c.d.toString()
            }
        }
        if (Math.abs(e) > a || Math.abs(e) < n || o)
            return {
                type: "scientific",
                mantissa: u[1],
                exponent: u[2]
            };
        var s = l(e.toPrecision(i));
        return e !== Number(s) && t.addEllipses && (s += "..."),
        {
            type: "decimal",
            value: s
        }
    }
    function x(e) {
        e = e.replace("\\", "");
        var t = {
            pi: "π",
            tau: "τ",
            theta: "θ",
            phi: "ϕ",
            div: "÷",
            cdot: "⋅",
            times: "×",
            lt: "<",
            gt: ">",
            le: "≤",
            ge: "≥",
            sim: "∼",
            ldots: "…",
            prime: "′",
            approx: "≈",
            to: "→",
            "->": "→"
        };
        return t.hasOwnProperty(e) ? t[e] : e
    }
    e.canDisplayAsFraction = b,
    e.numericLabel = g,
    e.truncatedHTMLLabel = function(e, t) {
        var n = g(e, t);
        switch (n.type) {
        case "undefined":
            return "undefined";
        case "decimal":
            return n.value;
        case "scientific":
            return n.mantissa + "<span class='dcg-cross'>×</span>10<sup>" + n.exponent + "</sup>";
        case "fraction":
            return "1" === n.denominator ? n.numerator : n.numerator + "/" + n.denominator;
        default:
            return n
        }
    }
    ,
    e.truncatedPlainmathLabel = function(e, t) {
        var n = g(e, t);
        switch (n.type) {
        case "undefined":
            return "undefined";
        case "decimal":
            return n.value;
        case "scientific":
            return n.mantissa + " * 10^" + n.exponent;
        case "fraction":
            return "1" === n.denominator ? n.numerator : n.numerator + "/" + n.denominator;
        default:
            return n
        }
    }
    ,
    e.truncatedLatexLabel = function(e, t) {
        var n = g(e, t);
        switch (n.type) {
        case "undefined":
            return "undefined";
        case "decimal":
            return n.value;
        case "scientific":
            return n.mantissa + "\\times10^{" + n.exponent + "}";
        case "fraction":
            return "1" === n.denominator ? n.numerator : "-" === n.numerator[0] ? "-\\frac{" + n.numerator.slice(1) + "}{" + n.denominator + "}" : "\\frac{" + n.numerator + "}{" + n.denominator + "}";
        default:
            return n
        }
    }
    ,
    e.truncatedAriaLabel = function(e, t) {
        var n = g(e, t);
        switch (n.type) {
        case "undefined":
            return "undefined";
        case "decimal":
            return f(n.value);
        case "scientific":
            return f(n.mantissa + "e" + n.exponent);
        case "fraction":
            return f(n.numerator + "/" + n.denominator);
        default:
            return n
        }
    }
    ,
    e.formatSymbol = x,
    e.identifierToLatex = function(e) {
        var t = e.match(/^\$(\d+)$/);
        if (t)
            return "\\token{" + t[1] + "}";
        var n = e.split("_")
          , r = "";
        return n[0].length > 1 && (r += "\\"),
        r += n[0],
        n[1] && (r += "_{" + n[1] + "}"),
        r
    }
    ,
    e.identifierToHTML = function(e) {
        if (!e)
            return "";
        var n = e.split("_").map(x).map(t.escape)
          , r = n[0];
        return n[1] && (r += "<sub>" + n[1] + "</sub>"),
        r
    }
    ,
    e.latexToIdentifier = function(e) {
        var t = e.match(/\\token\{(\d+)\}/);
        return t ? "$" + t[1] : (e = e.replace(/\\operatorname\{(.*)\}/, "$1")).replace(/[{}\\]/g, "")
    }
    ,
    e.trimLatex = function(e) {
        return e.replace(/^(\\ | |\\space)+/, "").replace(/(\\ | |\\space)+$/, "")
    }
});
define('core/math/errormsg', ["require", "exports", "core/math/parsenode/error", "core/lib/worker-i18n", "core/lib/label", "core/math/types"], function(require, r, e, o, n, t) {
    "use strict";
    function a(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-multiply-defined", {
            dependency: r
        }))
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.variableLengthProductBodyDependsOnIndex = r.variableLengthSumBodyDependsOnIndex = r.variableLengthDistributionList = r.variableLengthTopLevelList = r.badListComprehensionInputDependency = r.shadowedListComprehensionInput = r.unexpectedForKeyword = r.listComprehensionIncorrectInput = r.listComprehensionInputListTypeError = r.matrixInvalidVariable = r.matrixElementTypeError = r.matrixPowerDimensions = r.matrixFractionalPower = r.matrixMultiplyDimensions = r.matrixSubtractDimensions = r.matrixAddDimensions = r.matrixAssignment = r.clickableObjectInvalidExpression = r.clickableObjectAssignmentNotIdentifier = r.clickableObjectAlreadyAssigned = r.clickableObjectAssignmentNotDefined = r.singularInverse = r.nonSquareInverse = r.nonSquareTrace = r.nonSquareDeterminant = r.fractionsUnavailable = r.featureUnavailable = r.pointsUnsupported = r.regressionsUnsupported = r.inequalitiesUnsupported = r.equationsUnsupported = r.functionDefinitionsUnsupported = r.assignmentsUnsupported = r.variableUnsupported = r.constantUnsupported = r.logbaseUnsupported = r.functionUnsupported = r.variablesUnsupported = r.ansUndefined = r.badSymbolContext = r.variableSeed = r.badSampleSize = r.ttestListTooShort = r.illegalBinWidth = r.percentMissingOf = r.badIntegralBoundDependency = r.shadowedIntegrationVariable = r.mismatchedBraces = r.derivativeMissingBody = r.integralMissingBody = r.productMissingBody = r.sumMissingBody = r.differentialWithSuperscript = r.integralMissingDifferential = r.integralMissingBound = r.badProductBoundDependency = r.badSumBoundDependency = r.incorrectProductLowerBound = r.incorrectSumLowerBound = r.productMissingBound = r.sumMissingBound = r.invalidHalfEmptyRange = r.nonArithmeticRange = r.functionFreeVariable = r.methodRequiresList = r.nonListParameterizedReducer = r.nonListDoubleReducer = r.optimizationError = r.invalidRegressionParameter = r.invalidDependentFirstTableColumn = r.invalidFirstTableColumn = r.invalidTableEntry = r.invalidTableHeader = r.distributionAsFunction = r.variableAsFunction = r.equationRequired = r.complicatedDoubleInequality = r.mismatchedDoubleInequality = r.invalidDoubleInequalityVariables = r.complicatedPolarImplicit = r.inequalitiesDisabled = r.implicitsDisabled = r.singleVariableImplicitEquationsDisabled = r.invalidImplicitVariables = r.invalidInequalityVariables = r.unplottablePolarFunction = r.invalidLHS = r.addArgumentsToDefinition = r.tooManyVariables = r.cdfMaxLessThanMin = r.cdfMaxInvalid = r.cdfMinInvalid = r.domainMaxLessThanMin = r.domainMaxInvalid = r.domainMinInvalid = r.sliderStepInvalid = r.sliderMaxLessThanMin = r.sliderMaxInvalid = r.sliderMinInvalid = r.sliderLimitReferencesExport = r.tickerMinStepNonNegativeNumber = r.selfReferentialFunction = r.cycle = r.shadowedIndex = r.multiplyDefinedByTables = r.multiplyDefined = r.cannotSubscript = r.cannotRedefine = r.parameterAlreadyDefined = r.functionNotDefined = r.blankExpression = r.colonMissingCondition = r.piecewisePartMissingCondition = r.piecewiseMissingCondition = r.inequalityChainTooLong = r.badLogExponent = r.badTrigExponent = r.emptyPipe = r.emptySquareBracket = r.emptyParen = r.emptyRadicalIndex = r.emptyRadical = r.primeWithoutParen = r.unexpectedPrime = r.superscriptWithPrime = r.unexpectedSubscript = r.invalidOperatorName = r.invalidSubscript = r.emptySuperscript = r.emptySubscript = r.fractionEmpty = r.fractionMissingDenominator = r.fractionMissingNumerator = r.unaryOperatorMissingRight = r.unaryOperatorMissingLeft = r.binaryOperatorMissingOperand = r.identifierAsFunction = r.tokenWithSubscript = r.adjacentNumbers = r.badImplicitCall = r.badTupleDimensions = r.malformedList = r.malformedPoint = r.zeroArgReducer = r.primedFunctionArity = r.wrongDoubleReducerArity = r.wrongParameterizedReducerArity = r.wrongArity = r.colorArity = r.randomFromBroadcastDistribution = r.randomArity = r.tdistWrongArity = r.cdfTooManyArguments = r.cdfRequiresArguments = r.pdfWrongArity = r.tooManyArguments = r.boxplotBreadthInvalid = r.boxplotOffsetInvalid = r.polygonTwoNumbersError = r.polygonPointArgsError = r.polygonListTypeError = r.maxListSize = r.deeplyNested = r.combineTypeError = r.heterogeneousList = r.eventHandlerTypeError = r.actionMergeFreeVariable = r.updateRuleLocalLHS = r.updateRuleFunctionLHS = r.updateRuleIllegalLHS = r.updateRuleUndefinedLHS = r.duplicateUpdateRules = r.updateRuleNonIdentifierLHS = r.updateRuleTypeError = r.regressionTypeError = r.tableEntryTypeError = r.tableHeaderTypeError = r.piecewiseBranchTypeError = r.piecewiseConditionTypeError = r.derivativeVariableTypeError = r.derivativeTypeError = r.integralArgumentTypeError = r.integralUpperBoundTypeError = r.integralLowerBoundTypeError = r.productArgumentTypeError = r.productInfiniteBoundError = r.productUpperBoundTypeError = r.productLowerBoundTypeError = r.sumArgumentTypeError = r.sumInfiniteBoundError = r.sumUpperBoundTypeError = r.sumLowerBoundTypeError = r.dotLHSTypeError = r.illegalDotCall = r.functionTypeError = r.orderedPairAccessTypeError = r.indexTypeError = r.pointTypeError = r.listTypeError = r.andTypeError = r.comparatorTypeError = r.negativeTypeError = r.exponentTypeError = r.divideTypeError = r.multiplyTypeError = r.subtractTypeError = r.addTypeError = r.unexpectedSymbol = r.unexpectedInequality = r.unrecognizedSymbol = r.parseError = void 0,
    r.parseError = function() {
        return e(o.s("shared-calculator-error-parse-error"))
    }
    ,
    r.unrecognizedSymbol = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-unrecognized-symbol", {
            symbol: r
        }))
    }
    ,
    r.unexpectedInequality = function() {
        return e(o.s("shared-calculator-error-unexpected-inequality"))
    }
    ,
    r.unexpectedSymbol = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-unexpected-symbol", {
            symbol: r
        }))
    }
    ,
    r.addTypeError = function(r) {
        return e(o.s("shared-calculator-error-add-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.subtractTypeError = function(r) {
        return e(o.s("shared-calculator-error-subtract-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.multiplyTypeError = function(r) {
        return e(o.s("shared-calculator-error-multiply-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.divideTypeError = function(r) {
        return e(o.s("shared-calculator-error-divide-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.exponentTypeError = function(r) {
        return e(o.s("shared-calculator-error-exponent-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.negativeTypeError = function(r) {
        return e(o.s("shared-calculator-error-negative-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.comparatorTypeError = function(r) {
        return e(o.s("shared-calculator-error-comparator-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.andTypeError = function(r) {
        return e(o.s("shared-calculator-error-and-type-error", {
            symbol: "and",
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.listTypeError = function(r) {
        return e(o.s("shared-calculator-error-list-type-error", {
            symbol1: r[0]
        })).allowExport()
    }
    ,
    r.pointTypeError = function(r) {
        return e(o.s("shared-calculator-error-point-type-error", {
            symbol1: r,
            symbol2: t.prettyPrint(t.Point)
        })).allowExport()
    }
    ,
    r.indexTypeError = function(r) {
        return e(o.s("shared-calculator-error-index-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.orderedPairAccessTypeError = function(r) {
        return e(o.s("shared-calculator-error-ordered-pair-access-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.functionTypeError = function(r, t) {
        switch (t.length) {
        case 1:
            return e(o.s("shared-calculator-error-function-type-error-1", {
                fn: n.formatSymbol(r),
                arg: t[0]
            })).allowExport();
        case 2:
            return e(o.s("shared-calculator-error-function-type-error-2", {
                fn: n.formatSymbol(r),
                arg1: t[0],
                arg2: t[1]
            })).allowExport();
        default:
            return e(o.s("shared-calculator-error-function-type-error-many", {
                fn: n.formatSymbol(r)
            })).allowExport()
        }
    }
    ,
    r.illegalDotCall = function(r) {
        return e(o.s("shared-calculator-error-illegal-dot-call", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.dotLHSTypeError = function(r, t) {
        return e(o.s("shared-calculator-error-dot-lhs-type-error", {
            symbol: n.formatSymbol(r),
            type: t
        })).allowExport()
    }
    ,
    r.sumLowerBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-sum-lower-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.sumUpperBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-sum-upper-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.sumInfiniteBoundError = function() {
        return e(o.s("shared-calculator-error-sum-infinite-bound-type-error"))
    }
    ,
    r.sumArgumentTypeError = function(r) {
        return e(o.s("shared-calculator-error-sum-argument-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.productLowerBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-product-lower-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.productUpperBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-product-upper-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.productInfiniteBoundError = function() {
        return e(o.s("shared-calculator-error-product-infinite-bound-type-error"))
    }
    ,
    r.productArgumentTypeError = function(r) {
        return e(o.s("shared-calculator-error-product-argument-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.integralLowerBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-integral-lower-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.integralUpperBoundTypeError = function(r) {
        return e(o.s("shared-calculator-error-integral-upper-bound-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.integralArgumentTypeError = function(r) {
        return e(o.s("shared-calculator-error-integral-argument-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.derivativeTypeError = function(r) {
        return e(o.s("shared-calculator-error-derivative-type-error", {
            symbol: r[0]
        })).allowExport()
    }
    ,
    r.derivativeVariableTypeError = function(r, t) {
        return e(o.s("shared-calculator-error-derivative-variable-type-error", {
            symbol1: n.formatSymbol(r),
            symbol2: t[0]
        }))
    }
    ,
    r.piecewiseConditionTypeError = function(r) {
        return e(o.s("shared-calculator-error-piecewise-condition-type-error", {
            symbol1: t.prettyPrint(t.Bool),
            symbol2: r[0]
        })).allowExport()
    }
    ,
    r.piecewiseBranchTypeError = function(r) {
        return e(o.s("shared-calculator-error-piecewise-branch-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.tableHeaderTypeError = function(r) {
        return e(o.s("shared-calculator-error-table-header-type-error", {
            symbol: r[0]
        }))
    }
    ,
    r.tableEntryTypeError = function(r) {
        return e(o.s("shared-calculator-error-table-entry-type-error", {
            symbol: r[0]
        }))
    }
    ,
    r.regressionTypeError = function(r) {
        return e(o.s("shared-calculator-error-regression-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        }))
    }
    ,
    r.updateRuleTypeError = function(r) {
        return e(o.s("shared-calculator-error-update-rule-type-error", {
            symbol: r
        }))
    }
    ,
    r.updateRuleNonIdentifierLHS = function() {
        return e(o.s("shared-calculator-error-update-rule-non-identifier-lhs", {
            arrow: "→",
            example: "a"
        }))
    }
    ,
    r.duplicateUpdateRules = function(r) {
        return e(o.s("shared-calculator-error-duplicate-update-rules", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.updateRuleUndefinedLHS = function(r) {
        return e(o.s("shared-calculator-error-update-rule-undefined-lhs", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.updateRuleIllegalLHS = function(r) {
        return e(o.s("shared-calculator-error-update-rule-illegal-lhs", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.updateRuleFunctionLHS = function(r) {
        return e(o.s("shared-calculator-error-update-rule-function-lhs", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.updateRuleLocalLHS = function(r) {
        return e(o.s("shared-calculator-error-update-rule-local-lhs", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.actionMergeFreeVariable = function(r) {
        var t = r.filter(function(r) {
            return "free" === r.scope
        }).map(function(r) {
            return r.symbol
        });
        return e(o.s("shared-calculator-error-action-merge-free-variable", {
            symbol: n.formatSymbol(t[0] || "")
        })).setDependencies(t).allowExport()
    }
    ,
    r.eventHandlerTypeError = function(r) {
        return e(o.s("shared-calculator-error-event-handler-type-error", {
            example: "a→a+1"
        }))
    }
    ,
    r.heterogeneousList = function() {
        return e(o.s("shared-calculator-error-heterogeneous-list")).allowExport()
    }
    ,
    r.combineTypeError = function(r) {
        return e(o.s("shared-calculator-error-combine-type-error", {
            symbol1: r[0],
            symbol2: r[1]
        })).allowExport()
    }
    ,
    r.deeplyNested = function() {
        return e(o.s("shared-calculator-error-deeply-nested")).allowExport()
    }
    ,
    r.maxListSize = function(r) {
        return e(o.s("shared-calculator-error-max-list-size", {
            maxListSize: r
        })).allowExport()
    }
    ,
    r.polygonListTypeError = function(r) {
        return e(o.s("shared-calculator-error-polygon-list-type-error", {
            type: r[0]
        }))
    }
    ,
    r.polygonPointArgsError = function() {
        return e(o.s("shared-calculator-error-polygon-point-args-error"))
    }
    ,
    r.polygonTwoNumbersError = function() {
        return e(o.s("shared-calculator-error-two-numbers-error"))
    }
    ,
    r.boxplotOffsetInvalid = function() {
        return e(o.s("shared-calculator-error-boxplot-offset-invalid"))
    }
    ,
    r.boxplotBreadthInvalid = function() {
        return e(o.s("shared-calculator-error-boxplot-breadth-invalid"))
    }
    ,
    r.tooManyArguments = function(r, n) {
        return e(o.s("shared-calculator-error-too-many-arguments", {
            symbol: r,
            max: n
        }))
    }
    ,
    r.pdfWrongArity = function() {
        var r = o.s("shared-calculator-error-pdf-wrong-arity-recommendation")
          , n = o.s("shared-calculator-error-pdf-wrong-arity", {
            recommendation: r
        });
        return e(n)
    }
    ,
    r.cdfRequiresArguments = function() {
        var r = o.s("shared-calculator-error-cdf-wrong-arity-recommendation")
          , n = o.s("shared-calculator-error-cdf-wrong-arity", {
            recommendation: r
        });
        return e(n)
    }
    ,
    r.cdfTooManyArguments = function() {
        var r = o.s("shared-calculator-error-cdf-too-many-arguments-recommendation")
          , n = o.s("shared-calculator-error-cdf-too-many-arguments", {
            recommendation: r
        });
        return e(n)
    }
    ,
    r.tdistWrongArity = function() {
        return e(o.s("shared-calculator-error-tdist-wrong-arity"))
    }
    ,
    r.randomArity = function() {
        return e(o.s("shared-calculator-error-random-arity"))
    }
    ,
    r.randomFromBroadcastDistribution = function() {
        return e(o.s("shared-calculator-error-random-from-broadcast-distribution"))
    }
    ,
    r.colorArity = function(r) {
        var t = "rgb" === r ? [150, 30, 100] : [180, .5, .5]
          , a = o.s("shared-calculator-error-color-arity-recommendation", {
            recommendation: n.formatSymbol(r) + "(" + t.join(", ") + ")"
        })
          , i = o.s("shared-calculator-error-color-arity", {
            symbol: r,
            recommendation: a
        });
        return e(i)
    }
    ,
    r.wrongArity = function(r, t, a, i) {
        var l, s;
        if (r = n.formatSymbol(r),
        1 === t)
            i || (i = r + "(x)"),
            s = o.s("shared-calculator-error-wrong-arity-supplement", {
                recommendation: i
            }),
            l = a > 1 ? o.s("shared-calculator-error-wrong-arity-single-arg-too-many", {
                dependency: r,
                supplement: s
            }) : o.s("shared-calculator-error-wrong-arity-single-arg-too-few", {
                dependency: r,
                supplement: s
            });
        else {
            var u = [];
            if (!i) {
                for (var c = 0; c < t; c++)
                    u[c] = c + 1;
                i = n.formatSymbol(r) + "(" + u.join(", ") + ")"
            }
            s = o.s("shared-calculator-error-wrong-arity-supplement", {
                recommendation: i
            }),
            l = o.s("shared-calculator-error-wrong-arity-many-arg", {
                dependency: r,
                assignment_arity: t,
                supplement: s
            })
        }
        return e(l)
    }
    ,
    r.wrongParameterizedReducerArity = function(r) {
        return e(o.s("shared-calculator-error-wrong-two-arg-arity", {
            symbol: n.formatSymbol(r),
            recommendation: n.formatSymbol(r) + "([1,2,3], 1)"
        }))
    }
    ,
    r.wrongDoubleReducerArity = function(r) {
        return e(o.s("shared-calculator-error-wrong-two-arg-arity", {
            symbol: n.formatSymbol(r),
            recommendation: n.formatSymbol(r) + "([1,2,3], [3,2,1])"
        }))
    }
    ,
    r.primedFunctionArity = function() {
        return e(o.s("shared-calculator-error-primed-function-arity"))
    }
    ,
    r.zeroArgReducer = function(r) {
        return e(o.s("shared-calculator-error-zero-arg-reducer", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.malformedPoint = function() {
        return e(o.s("shared-calculator-error-malformed-point"))
    }
    ,
    r.malformedList = function() {
        return e(o.s("shared-calculator-error-malformed-list"))
    }
    ,
    r.badTupleDimensions = function(r) {
        return e(o.s("shared-calculator-error-bad-tuple-dimensions", {
            symbol: r
        }))
    }
    ,
    r.badImplicitCall = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-bad-implicit-call", {
            symbol: r
        }))
    }
    ,
    r.adjacentNumbers = function(r, n) {
        return e(o.s("shared-calculator-error-adjacent-numbers", {
            left: r,
            right: n
        }))
    }
    ,
    r.tokenWithSubscript = function() {
        return e(o.s("shared-calculator-error-token-with-subscript"))
    }
    ,
    r.identifierAsFunction = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-identifier-as-function", {
            symbol: r
        }))
    }
    ,
    r.binaryOperatorMissingOperand = function(r) {
        return "%" === (r = n.formatSymbol(r)) && (r = "% of"),
        e(o.s("shared-calculator-error-binary-operator-missing-operand", {
            symbol: r
        }))
    }
    ,
    r.unaryOperatorMissingLeft = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-unary-operator-missing-left", {
            symbol: r
        }))
    }
    ,
    r.unaryOperatorMissingRight = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-unary-operator-missing-right", {
            symbol: r
        }))
    }
    ,
    r.fractionMissingNumerator = function() {
        return e(o.s("shared-calculator-error-fraction-missing-numerator"))
    }
    ,
    r.fractionMissingDenominator = function() {
        return e(o.s("shared-calculator-error-fraction-missing-denominator"))
    }
    ,
    r.fractionEmpty = function() {
        return e(o.s("shared-calculator-error-fraction-empty"))
    }
    ,
    r.emptySubscript = function() {
        return e(o.s("shared-calculator-error-empty-subscript"))
    }
    ,
    r.emptySuperscript = function() {
        return e(o.s("shared-calculator-error-empty-superscript"))
    }
    ,
    r.invalidSubscript = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-invalid-subscript", {
            symbol: r
        }))
    }
    ,
    r.invalidOperatorName = function() {
        return e(o.s("shared-calculator-error-invalid-operator-name"))
    }
    ,
    r.unexpectedSubscript = function() {
        return e(o.s("shared-calculator-error-unexpected-subscript"))
    }
    ,
    r.superscriptWithPrime = function() {
        return e(o.s("shared-calculator-error-superscript-with-prime"))
    }
    ,
    r.unexpectedPrime = function() {
        return e(o.s("shared-calculator-error-unexpected-prime"))
    }
    ,
    r.primeWithoutParen = function() {
        return e(o.s("shared-calculator-error-prime-without-paren"))
    }
    ,
    r.emptyRadical = function() {
        return e(o.s("shared-calculator-error-empty-radical"))
    }
    ,
    r.emptyRadicalIndex = function() {
        return e(o.s("shared-calculator-error-empty-radical-index"))
    }
    ,
    r.emptyParen = function() {
        return e(o.s("shared-calculator-error-empty-paren"))
    }
    ,
    r.emptySquareBracket = function() {
        return e(o.s("shared-calculator-error-empty-square-bracket"))
    }
    ,
    r.emptyPipe = function() {
        return e(o.s("shared-calculator-error-empty-pipe"))
    }
    ,
    r.badTrigExponent = function(r) {
        var n = r + "^2"
          , t = r + "^-1";
        return e(o.s("shared-calculator-error-bad-trig-exponent", {
            form1: n,
            form2: t
        }))
    }
    ,
    r.badLogExponent = function(r) {
        var n = r + "^2";
        return e(o.s("shared-calculator-error-bad-log-exponent", {
            form: n
        }))
    }
    ,
    r.inequalityChainTooLong = function() {
        return e(o.s("shared-calculator-error-inequality-chain-too-long"))
    }
    ,
    r.piecewiseMissingCondition = function() {
        return e(o.s("shared-calculator-error-piecewise-missing-condition"))
    }
    ,
    r.piecewisePartMissingCondition = function() {
        return e(o.s("shared-calculator-error-piecewise-part-missing-condition"))
    }
    ,
    r.colonMissingCondition = function() {
        return e(o.s("shared-calculator-error-colon-missing-condition"))
    }
    ,
    r.blankExpression = function() {
        return e(o.s("shared-calculator-error-blank-expression"))
    }
    ,
    r.functionNotDefined = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-function-not-defined", {
            dependency: r
        }))
    }
    ,
    r.parameterAlreadyDefined = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-parameter-already-defined", {
            dependency: r
        }))
    }
    ,
    r.cannotRedefine = function(r, t) {
        return r = n.formatSymbol(r),
        e(void 0 === t ? o.s("shared-calculator-error-cannot-redefine", {
            symbol: r
        }) : o.s("shared-calculator-error-cannot-redefine-root", {
            symbol: r,
            symbolRoot: t
        }))
    }
    ,
    r.cannotSubscript = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-cannot-subscript", {
            symbol: r
        }))
    }
    ,
    r.multiplyDefined = a,
    r.multiplyDefinedByTables = function(r) {
        var e = a(r);
        return e.isMultiplyDefinedByTables = !0,
        e
    }
    ,
    r.shadowedIndex = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-shadowed-index", {
            symbol: r
        }))
    }
    ,
    r.cycle = function(r) {
        var t = (r = r.map(n.formatSymbol)).pop() || "";
        return e(o.s("shared-calculator-error-dependency-cycle", {
            symbols: r.join("', '"),
            lastSymbol: t
        }))
    }
    ,
    r.selfReferentialFunction = function(r) {
        return e(o.s("shared-calculator-error-self-referential-function", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.tickerMinStepNonNegativeNumber = function() {
        return e(o.s("shared-calculator-error-ticker-min-step-nonnegative"))
    }
    ,
    r.sliderLimitReferencesExport = function(r) {
        return e(o.s("shared-calculator-error-slider-limit-references-export", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.sliderMinInvalid = function() {
        return e(o.s("shared-calculator-error-slider-min-invalid"))
    }
    ,
    r.sliderMaxInvalid = function() {
        return e(o.s("shared-calculator-error-slider-max-invalid"))
    }
    ,
    r.sliderMaxLessThanMin = function() {
        return e(o.s("shared-calculator-error-slider-max-less-than-min"))
    }
    ,
    r.sliderStepInvalid = function() {
        return e(o.s("shared-calculator-error-slider-step-invalid"))
    }
    ,
    r.domainMinInvalid = function() {
        return e(o.s("shared-calculator-error-domain-min-invalid"))
    }
    ,
    r.domainMaxInvalid = function() {
        return e(o.s("shared-calculator-error-domain-max-invalid"))
    }
    ,
    r.domainMaxLessThanMin = function() {
        return e(o.s("shared-calculator-error-domain-max-less-than-min"))
    }
    ,
    r.cdfMinInvalid = function() {
        return e(o.s("shared-calculator-error-cdf-min-invalid"))
    }
    ,
    r.cdfMaxInvalid = function() {
        return e(o.s("shared-calculator-error-cdf-max-invalid"))
    }
    ,
    r.cdfMaxLessThanMin = function() {
        return e(o.s("shared-calculator-error-cdf-max-less-than-min"))
    }
    ,
    r.tooManyVariables = function(r) {
        if (0 === (r = r.map(n.formatSymbol)).length)
            return e(o.s("shared-calculator-error-too-many-variables-no-symbols"));
        var t = r.pop() || "";
        return r.length > 0 ? e(o.s("shared-calculator-error-too-many-variables-many-symbols", {
            variables: r.join("', '"),
            lastVariable: t
        })) : e(o.s("shared-calculator-error-too-many-variables-one-symbol", {
            variable: t
        }))
    }
    ,
    r.addArgumentsToDefinition = function(r, t, a) {
        r = r.map(n.formatSymbol);
        var i = (t = n.formatSymbol(t)) + "(" + (a = a.map(n.formatSymbol)).join(",") + "," + r.join(",") + ")"
          , l = r.pop() || ""
          , s = {
            symbols: r.join("', '"),
            lastSymbol: l,
            newSignature: i
        };
        return r.length ? e(o.s("shared-calculator-error-add-arguments-to-definition-many", s)) : e(o.s("shared-calculator-error-add-arguments-to-definition-one", s))
    }
    ,
    r.invalidLHS = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-invalid-lhs", {
            symbol: r
        }))
    }
    ,
    r.unplottablePolarFunction = function() {
        return e(o.s("shared-calculator-error-unplottable-polar-function"))
    }
    ,
    r.invalidInequalityVariables = function() {
        return e(o.s("shared-calculator-error-invalid-inequality-variables"))
    }
    ,
    r.invalidImplicitVariables = function() {
        return e(o.s("shared-calculator-error-invalid-implicit-variables"))
    }
    ,
    r.singleVariableImplicitEquationsDisabled = function() {
        return e(o.s("shared-calculator-error-single-variable-implicit-equations-disabled"))
    }
    ,
    r.implicitsDisabled = function() {
        return e(o.s("shared-calculator-error-implicits-disabled"))
    }
    ,
    r.inequalitiesDisabled = function() {
        return e(o.s("shared-calculator-error-inequalities-disabled"))
    }
    ,
    r.complicatedPolarImplicit = function() {
        return e(o.s("shared-calculator-error-complicated-polar-implicit"))
    }
    ,
    r.invalidDoubleInequalityVariables = function() {
        return e(o.s("shared-calculator-error-invalid-double-inequality-variables"))
    }
    ,
    r.mismatchedDoubleInequality = function() {
        return e(o.s("shared-calculator-error-mismatched-double-inequality", {
            example: "1 < y < 2"
        }))
    }
    ,
    r.complicatedDoubleInequality = function() {
        return e(o.s("shared-calculator-error-complicated-double-inequality"))
    }
    ,
    r.equationRequired = function(r) {
        return r ? (r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-equation-required-symbol", {
            lhs: r + "="
        }))) : e(o.s("shared-calculator-error-equation-required"))
    }
    ,
    r.variableAsFunction = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-variable-as-function", {
            dependency: r
        }))
    }
    ,
    r.distributionAsFunction = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-distribution-as-function", {
            symbol: r
        }))
    }
    ,
    r.invalidTableHeader = function(r) {
        return e(o.s("shared-calculator-error-invalid-table-header", {
            supplement: r
        }))
    }
    ,
    r.invalidTableEntry = function(r) {
        return e(o.s("shared-calculator-error-invalid-table-entry", {
            supplement: r
        }))
    }
    ,
    r.invalidFirstTableColumn = function() {
        return e(o.s("shared-calculator-error-invalid-first-table-column", {
            most: "'y', 'r',",
            last: "'θ'"
        }))
    }
    ,
    r.invalidDependentFirstTableColumn = function() {
        return e(o.s("shared-calculator-error-invalid-dependent-first-table-column"))
    }
    ,
    r.invalidRegressionParameter = function(r) {
        return e(o.s("shared-calculator-error-invalid-regression-parameter", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.optimizationError = function() {
        return e(o.s("shared-calculator-error-optimization-error"))
    }
    ,
    r.nonListDoubleReducer = function(r) {
        return e(o.s("shared-calculator-error-non-list-double-reducer", {
            symbol: n.formatSymbol(r),
            recommendation: n.formatSymbol(r) + "([1,2,3], [3,2,1])"
        })).allowExport()
    }
    ,
    r.nonListParameterizedReducer = function(r) {
        return e(o.s("shared-calculator-error-non-list-parameterized-reducer", {
            symbol: n.formatSymbol(r),
            recommendation: n.formatSymbol(r) + "([1,2,3], 1)"
        })).allowExport()
    }
    ,
    r.methodRequiresList = function(r) {
        return e(o.s("shared-calculator-error-method-requires-list", {
            symbol: n.formatSymbol(r),
            recommendation: n.formatSymbol(r) + "([1,2,3])"
        })).allowExport()
    }
    ,
    r.functionFreeVariable = function(r, n) {
        return e(o.s("shared-calculator-error-variable-function-free-variable", {
            functionSymbol: r,
            variableSymbol: n
        })).allowExport()
    }
    ,
    r.nonArithmeticRange = function() {
        return e(o.s("shared-calculator-error-non-arithmetic-range")).allowExport()
    }
    ,
    r.invalidHalfEmptyRange = function() {
        return e(o.s("shared-calculator-error-invalid-half-empty-range"))
    }
    ,
    r.sumMissingBound = function() {
        return e(o.s("shared-calculator-error-sum-missing-bound"))
    }
    ,
    r.productMissingBound = function() {
        return e(o.s("shared-calculator-error-product-missing-bound"))
    }
    ,
    r.incorrectSumLowerBound = function() {
        return e(o.s("shared-calculator-error-incorrect-sum-lower-bound"))
    }
    ,
    r.incorrectProductLowerBound = function() {
        return e(o.s("shared-calculator-error-incorrect-product-lower-bound"))
    }
    ,
    r.badSumBoundDependency = function(r) {
        return e(o.s("shared-calculator-error-bad-sum-bound-dependency", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.badProductBoundDependency = function(r) {
        return e(o.s("shared-calculator-error-bad-product-bound-dependency", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.integralMissingBound = function() {
        return e(o.s("shared-calculator-error-integral-missing-bound"))
    }
    ,
    r.integralMissingDifferential = function() {
        return e(o.s("shared-calculator-error-integral-missing-differential"))
    }
    ,
    r.differentialWithSuperscript = function() {
        return e(o.s("shared-calculator-error-differential-with-superscript"))
    }
    ,
    r.sumMissingBody = function() {
        return e(o.s("shared-calculator-error-sum-missing-body"))
    }
    ,
    r.productMissingBody = function() {
        return e(o.s("shared-calculator-error-product-missing-body"))
    }
    ,
    r.integralMissingBody = function() {
        return e(o.s("shared-calculator-error-integral-missing-body"))
    }
    ,
    r.derivativeMissingBody = function() {
        return e(o.s("shared-calculator-error-derivative-missing-body"))
    }
    ,
    r.mismatchedBraces = function(r, t) {
        return r = n.formatSymbol(r),
        t = n.formatSymbol(t),
        e(o.s("shared-calculator-error-mismatched-braces", {
            symbol1: r,
            symbol2: t
        }))
    }
    ,
    r.shadowedIntegrationVariable = function(r) {
        return e(o.s("shared-calculator-error-shadowed-integration-variable", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.badIntegralBoundDependency = function(r) {
        return e(o.s("shared-calculator-error-bad-integral-bound-dependency", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.percentMissingOf = function() {
        return e(o.s("shared-calculator-error-percent-missing-of"))
    }
    ,
    r.illegalBinWidth = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-illegal-bin-width", {
            symbol: r
        }))
    }
    ,
    r.ttestListTooShort = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-ttest-list-too-short", {
            symbol: r
        }))
    }
    ,
    r.badSampleSize = function() {
        return e(o.s("shared-calculator-error-bad-sample-size"))
    }
    ,
    r.variableSeed = function(r) {
        return e(o.s("shared-calculator-error-variable-seed", {
            symbol: n.formatSymbol(r[0].symbol)
        })).setDependencies(r.filter(function(r) {
            return "free" === r.scope
        }).map(function(r) {
            return r.symbol
        })).allowExport()
    }
    ,
    r.badSymbolContext = function(r) {
        return e(o.s("shared-calculator-error-bad-symbol-context", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.ansUndefined = function() {
        return e(o.s("shared-calculator-error-ans-undefined"))
    }
    ,
    r.variablesUnsupported = function(r) {
        return e(o.s("shared-calculator-error-variables-unsupported", {
            variable: n.formatSymbol(r)
        }))
    }
    ,
    r.functionUnsupported = function(r) {
        return e(o.s("shared-calculator-error-function-unsupported", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.logbaseUnsupported = function() {
        return e(o.s("shared-calculator-error-logbase-unsupported"))
    }
    ,
    r.constantUnsupported = function(r) {
        return e(o.s("shared-calculator-error-constant-unsupported", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.variableUnsupported = function(r) {
        return e(o.s("shared-calculator-error-variable-unsupported", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.assignmentsUnsupported = function() {
        return e(o.s("shared-calculator-error-assignments-unsupported"))
    }
    ,
    r.functionDefinitionsUnsupported = function() {
        return e(o.s("shared-calculator-error-function-definition-unsupported"))
    }
    ,
    r.equationsUnsupported = function() {
        return e(o.s("shared-calculator-error-equations-unsupported"))
    }
    ,
    r.inequalitiesUnsupported = function() {
        return e(o.s("shared-calculator-error-inequalities-unsupported"))
    }
    ,
    r.regressionsUnsupported = function() {
        return e(o.s("shared-calculator-error-regressions-unsupported"))
    }
    ,
    r.pointsUnsupported = function() {
        return e(o.s("shared-calculator-error-points-unsupported"))
    }
    ,
    r.featureUnavailable = function() {
        return e(o.s("shared-calculator-error-feature-unavailable"))
    }
    ,
    r.fractionsUnavailable = function() {
        return e(o.s("basic-calculator-error-fractions-unavailable"))
    }
    ,
    r.nonSquareDeterminant = function() {
        return e(o.s("shared-calculator-error-non-square-determinant"))
    }
    ,
    r.nonSquareTrace = function() {
        return e(o.s("shared-calculator-error-non-square-trace"))
    }
    ,
    r.nonSquareInverse = function() {
        return e(o.s("shared-calculator-error-non-square-inverse"))
    }
    ,
    r.singularInverse = function() {
        return e(o.s("shared-calculator-error-non-singular-inverse"))
    }
    ,
    r.clickableObjectAssignmentNotDefined = function(r) {
        return e(o.s("shared-calculator-error-clickable-object-assignment-not-defined", {
            symbol: r
        }))
    }
    ,
    r.clickableObjectAlreadyAssigned = function(r) {
        return e(o.s("shared-calculator-error-multiply-defined", {
            dependency: r
        }))
    }
    ,
    r.clickableObjectAssignmentNotIdentifier = function() {
        return e(o.s("shared-calculator-error-clickable-object-assignment-not-identifier"))
    }
    ,
    r.clickableObjectInvalidExpression = function() {
        return e(o.s("shared-calculator-error-clickable-object-invalid-expression"))
    }
    ,
    r.matrixAssignment = function() {
        return e(o.s("shared-calculator-error-matrix-assignment"))
    }
    ,
    r.matrixAddDimensions = function() {
        return e(o.s("shared-calculator-error-matrix-add-dimensions"))
    }
    ,
    r.matrixSubtractDimensions = function() {
        return e(o.s("shared-calculator-error-matrix-subtract-dimensions"))
    }
    ,
    r.matrixMultiplyDimensions = function() {
        return e(o.s("shared-calculator-error-matrix-multiply-dimensions"))
    }
    ,
    r.matrixFractionalPower = function() {
        return e(o.s("shared-calculator-error-matrix-fractional-power"))
    }
    ,
    r.matrixPowerDimensions = function() {
        return e(o.s("shared-calculator-error-matrix-power-dimensions"))
    }
    ,
    r.matrixElementTypeError = function(r) {
        return e(o.s("shared-calculator-error-matrix-element-type-error", {
            arg: r[0]
        }))
    }
    ,
    r.matrixInvalidVariable = function(r) {
        return e(o.s("shared-calculator-error-matrix-invalid-variable", {
            symbol: n.formatSymbol(r)
        }))
    }
    ,
    r.listComprehensionInputListTypeError = function(r, n) {
        return e(o.s("shared-calculator-error-list-comprehension-input-type-error", {
            identifier: r,
            actual: n
        }))
    }
    ,
    r.listComprehensionIncorrectInput = function() {
        return e(o.s("shared-calculator-error-incorrect-list-comprehension-input"))
    }
    ,
    r.unexpectedForKeyword = function() {
        return e(o.s("shared-calculator-error-unexpected-for-keyword"))
    }
    ,
    r.shadowedListComprehensionInput = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-shadowed-list-comprehension-input", {
            symbol: r
        }))
    }
    ,
    r.badListComprehensionInputDependency = function(r) {
        return r = n.formatSymbol(r),
        e(o.s("shared-calculator-error-bad-list-comprehension-input-dependency", {
            symbol: r
        }))
    }
    ,
    r.variableLengthTopLevelList = function(r) {
        var t = r.filter(function(r) {
            return "free" === r.scope
        }).map(function(r) {
            return r.symbol
        });
        return e(o.s("shared-calculator-error-variable-length-top-level-list", {
            symbol: n.formatSymbol(t[0] || "")
        })).setDependencies(t).allowExport()
    }
    ,
    r.variableLengthDistributionList = function(r) {
        return e(o.s("shared-calculator-error-variable-length-distribution-list", {
            symbol: r[0].symbol
        })).setDependencies(r.filter(function(r) {
            return "free" === r.scope
        }).map(function(r) {
            return r.symbol
        }))
    }
    ,
    r.variableLengthSumBodyDependsOnIndex = function(r) {
        return e(o.s("shared-calculator-error-variable-length-sum-body-depends-on-index", {
            symbol: r
        }))
    }
    ,
    r.variableLengthProductBodyDependsOnIndex = function(r) {
        return e(o.s("shared-calculator-error-variable-length-product-body-depends-on-index", {
            symbol: r
        }))
    }
});
define('core/math/parsenode/expression', ['require', 'pjs', './base', 'core/math/errormsg'], function(require) {
    "use strict";
    var r = require("pjs")
      , e = require("./base");
    require("core/math/errormsg");
    return r(e, function(r, e) {
        r.init = function(r) {
            if (!Array.isArray(r))
                throw new TypeError("Argument to expression constructor must be an Array.");
            e.init.call(this),
            this.args = r,
            this.registerDependencies()
        }
        ,
        r.shouldExportAns = function() {
            return !0
        }
        ,
        r.registerDependencies = function() {
            for (var r = 0; r < this.args.length; r++)
                this.mergeDependencies(this.args[r])
        }
        ,
        r.copyWithArgs = function(r) {
            return new this.constructor(r)
        }
    })
});
define('core/math/parsenode/expressionTypes', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    var n = require("pjs")
      , t = require("./expression")
      , e = {
        Add: n(t, {}),
        Subtract: n(t, {}),
        Multiply: n(t, {}),
        Divide: n(t, {}),
        Exponent: n(t, {}),
        Negative: n(t, {}),
        And: n(t, {
            isInequality: function() {
                return this.args[0].isInequality() && this.args[1].isInequality()
            }
        }),
        PercentOf: n(t, {})
    };
    return e.RawExponent = n(e.Exponent, {}),
    e
});
define('core/math/builtin-common', ["require", "exports", "./tofraction", "core/math/distance"], function(require, r, t, e) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.pow = r.gcd = void 0,
    r.gcd = function(r, t) {
        if ((r = Math.round(r)) < 0 && (r = -r),
        (t = Math.round(t)) < 0 && (t = -t),
        t > r) {
            var e = t;
            t = r,
            r = e
        }
        if (0 === t)
            return r;
        for (var n = r % t; n > 0; )
            n = (r = t) % (t = n);
        return t
    }
    ,
    r.pow = function(r, n) {
        if (!isFinite(r) && 0 === n)
            return NaN;
        if (r >= 0 || n === Math.floor(n))
            return Math.pow(r, n);
        var o = t.default(n, 100);
        return e.approx(o.n / o.d, n, 2) && o.d % 2 == 1 ? (o.n % 2 == 0 ? 1 : -1) * Math.pow(-r, n) : NaN
    }
});
define('core/math/maybe-rational', ["require", "exports", "./builtin-common"], function(require, n, t) {
    "use strict";
    function r(n, t) {
        return {
            n: n,
            d: t
        }
    }
    function a(n) {
        return "object" == typeof n && "number" == typeof n.n && "number" == typeof n.d
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.total = n.mod = n.nthroot = n.sqrt = n.pow = n.div = n.sub = n.mul = n.add = n.reciprocal = n.abs = n.neg = n.maybeRational = n.isNanFloat = n.asFloat = n.fromDecimalString = n.isRational = void 0,
    n.isRational = a;
    var o = Math.pow(2, 53) - 1;
    function e(n) {
        return a(n) ? n.n / n.d : +n
    }
    function u(n, a) {
        if (!isFinite(n) || !isFinite(a) || 0 === a || Math.floor(n) !== n || Math.floor(a) !== a || Math.abs(n) > o || Math.abs(a) > o)
            return n / a;
        a < 0 && (n = -n,
        a = -a);
        var e = t.gcd(n, a);
        return r(n / e, a / e)
    }
    function i(n) {
        return a(n) ? r(-n.n, n.d) : -n
    }
    function d(n) {
        return a(n) ? 0 === n.n ? n.d / n.n : r(n.n < 0 ? -n.d : n.d, Math.abs(n.n)) : 1 / n
    }
    function f(n, r) {
        if (!a(n) || !a(r))
            return e(n) + e(r);
        var o = t.gcd(n.d, r.d);
        return u(n.n * (r.d / o) + r.n * (n.d / o), n.d / o * r.d)
    }
    function c(n, r) {
        if (!a(n) || !a(r))
            return e(n) * e(r);
        var o = t.gcd(n.n, r.d)
          , i = t.gcd(r.n, n.d);
        return u(n.n / o * (r.n / i), n.d / i * (r.d / o))
    }
    function s(n, t) {
        return f(n, i(t))
    }
    function h(n, t) {
        return a(n) && a(t) ? c(n, d(t)) : e(n) / e(t)
    }
    function M(n, r) {
        if (!a(n) || !a(r))
            return t.pow(e(n), e(r));
        var o = function(n, r) {
            var o = n
              , f = r;
            if (r.n < 0 && (f = i(r),
            o = d(n)),
            !a(o) || !a(f))
                return t.pow(e(n), e(r));
            if (n = o,
            1 === (r = f).d)
                return u(Math.pow(n.n, r.n), Math.pow(n.d, r.n));
            var c = n.n < 0;
            if (c && r.d % 2 != 1)
                return NaN;
            var s = (c ? -1 : 1) * Math.round(Math.pow(Math.abs(n.n), 1 / r.d))
              , h = Math.round(Math.pow(Math.abs(n.d), 1 / r.d));
            return Math.pow(s, r.d) !== n.n || Math.pow(h, r.d) !== n.d ? t.pow(e(n), e(r)) : u(Math.pow(s, r.n), Math.pow(h, r.n))
        }(n, r);
        return a(o) ? o : t.pow(e(n), e(r))
    }
    n.fromDecimalString = function(n) {
        var t = n.match(/^(-)?(\d*)?(?:\.(\d*))?$/);
        if (!t)
            return NaN;
        var r = t[1]
          , a = t[2]
          , e = t[3];
        if (!a && !e)
            return NaN;
        var i = !!r;
        if (e) {
            var d, f = e.replace(/0+$/, ""), c = f.length, s = Math.pow(10, c);
            return (d = parseInt(a || "0", 10) * s + parseInt(f || "0", 10)) > o || s > o ? parseFloat(n) : u(i ? -d : d, s)
        }
        return (d = parseInt(a, 10)) > o ? parseFloat(n) : u(i ? -d : d, 1)
    }
    ,
    n.asFloat = e,
    n.isNanFloat = function(n) {
        return !a(n) && isNaN(n)
    }
    ,
    n.maybeRational = u,
    n.neg = i,
    n.abs = function(n) {
        return a(n) ? r(Math.abs(n.n), Math.abs(n.d)) : Math.abs(n)
    }
    ,
    n.reciprocal = d,
    n.add = f,
    n.mul = c,
    n.sub = s,
    n.div = h,
    n.pow = M,
    n.sqrt = function(n) {
        if (!a(n))
            return Math.sqrt(n);
        var t = Math.round(Math.sqrt(n.n))
          , r = Math.round(Math.sqrt(n.d));
        return t * t !== n.n || r * r !== n.d ? Math.sqrt(e(n)) : u(t, r)
    }
    ,
    n.nthroot = function(n, t) {
        return M(n, d(t))
    }
    ,
    n.mod = function(n, t) {
        if (!a(n) || !a(t)) {
            var o = e(n)
              , u = e(t);
            return o - u * Math.floor(o / u)
        }
        return s(n, c(t, r(Math.floor(e(h(n, t))), 1)))
    }
    ,
    n.total = function(n) {
        for (var t = r(0, 1), a = 0, o = n; a < o.length; a++) {
            t = f(t, o[a])
        }
        return t
    }
});
define('core/math/parsenode/constant', ['require', 'pjs', './expression', 'core/math/maybe-rational'], function(require) {
    "use strict";
    var t = require("pjs")
      , n = require("./expression")
      , a = require("core/math/maybe-rational");
    return t(n, function(t, n) {
        t.init = function(t) {
            "number" == typeof t && (t = a.maybeRational(t, 1)),
            this._constantValue = t,
            n.init.call(this, [])
        }
        ,
        t.isConstant = !0,
        t.asValue = function() {
            return "boolean" == typeof this._constantValue ? this._constantValue : a.asFloat(this._constantValue)
        }
        ,
        t.asCompilerValue = function() {
            return this._constantValue
        }
        ,
        t.scalarExprString = function() {
            return this.asValue() > 0 ? String(this.asValue()) : "(" + String(this.asValue()) + ")"
        }
        ,
        t.getEvaluationInfo = function() {
            return [{
                val: this.asValue()
            }]
        }
        ,
        t.isNaN = function() {
            return "number" == typeof this.asValue() && isNaN(this.asValue())
        }
    })
});
define('core/math/parsenode/mixednumber', ['require', 'pjs', './constant'], function(require) {
    "use strict";
    return require("pjs")(require("./constant"), function(n, i) {
        n.init = function(n) {
            i.init.call(this, n)
        }
        ,
        n.is_mixed_number = !0
    })
});
define('core/math/parsenode/identifier', ['require', 'pjs', './expression', 'core/lib/label', 'core/math/parser/input-span'], function(require) {
    "use strict";
    var t = require("pjs")
      , n = require("./expression")
      , i = require("core/lib/label")
      , e = require("core/math/parser/input-span");
    return t(n, function(t, n, s) {
        t.init = function(t) {
            n.init.call(this, []),
            this._symbol = i.latexToIdentifier(t),
            this._errorSymbol = this._symbol,
            this.addDependency(this._symbol)
        }
        ,
        t.setInputSpan = function(t) {
            n.setInputSpan.call(this, t),
            this._errorSymbol = i.latexToIdentifier(this.getInputString())
        }
        ,
        t.getInputSpan = function() {
            return void 0 === this._inputSpan ? new e.Span(this._symbol,0,this._symbol.length) : this._inputSpan
        }
    })
});
define('core/math/parsenode/ans', ['require', 'pjs', './identifier'], function(require) {
    "use strict";
    return require("pjs")(require("./identifier"), function(i, n, e) {})
});
define('core/math/parsenode/list', ['require', 'pjs', './expression', 'core/math/types'], function(require) {
    "use strict";
    var t = require("pjs")
      , i = require("./expression")
      , n = require("core/math/types");
    return t(i, function(t, i, s) {
        t.init = function(t) {
            i.init.call(this, t),
            this.length = t.length
        }
        ,
        t.isList = !0,
        t.asValue = function() {
            for (var t = [], i = 0; i < this.args.length; i++)
                t.push(this.args[i].asValue());
            return t
        }
        ,
        t.asCompilerValue = function() {
            for (var t = [], i = 0; i < this.args.length; i++)
                t.push(this.args[i].asCompilerValue());
            return t
        }
        ,
        t.getEvaluationInfo = function() {
            if (this.args.every(function(t) {
                return t.isConstant
            }))
                return [{
                    val: this.args.map(function(t) {
                        return t.asValue()
                    })
                }]
        }
        ,
        s.eachArgs = function(t, i) {
            var s = function(t) {
                for (var i = 1 / 0, n = 0; n < t.length; n++)
                    (t[n].isList || t[n].isBroadcast) && (i = Math.min(i, t[n].length));
                return i
            }(t);
            if (isFinite(s))
                for (var e = 0; e < s; e++) {
                    for (var r = [], a = 0; a < t.length; a++)
                        r.push(t[a].isList || n.isList(t[a].valueType) ? t[a].elementAt(e) : t[a]);
                    i(r, e)
                }
            else
                i(t)
        }
        ,
        s.wrap = function(t) {
            return t.isList || n.isList(t.valueType) ? t : s([t])
        }
    })
});
define('core/math/parsenode/range', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(n, i, t) {
        n.init = function(n) {
            i.init.call(this, n),
            this.beginning = n[0],
            this.end = n[1]
        }
        ,
        n.isHalfEmpty = function() {
            return this.end && this.end.args && 0 === this.end.args.length
        }
    })
});
define('core/math/parsenode/listaccess', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i) {
            n.init.call(this, i),
            this.list = i[0],
            this.index = i[1]
        }
    })
});
define('core/math/parsenode/dotaccess', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), {})
});
define('core/math/parsenode/parenseq', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), {})
});
define('core/math/parsenode/movablepoint', ['require', 'pjs', './parenseq', 'core/math/types'], function(require) {
    "use strict";
    var t = require("pjs")
      , e = require("./parenseq")
      , a = require("core/math/types");
    return t(e, function(t, e) {
        t.asValue = function() {
            return [+this.args[0].asValue(), +this.args[1].asValue()]
        }
        ,
        t.asCompilerValue = function() {
            return [this.args[0].asCompilerValue(), this.args[1].asCompilerValue()]
        }
        ,
        t.init = function(t, i, s) {
            e.init.call(this, t),
            this.moveStrategy = i,
            this.defaultDragMode = s,
            this.valueType = a.Point
        }
        ,
        t.isMovablePoint = !0
    })
});
define('core/math/parsenode/orderedpairaccess', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i) {
            n.init.call(this, i),
            this.point = i[0],
            this.index = i[1]
        }
    })
});
define('core/math/parsenode/bareseq', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), {})
});
define('core/math/comparators', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.get = e.table = void 0,
    e.table = {
        "<": {
            inclusive: !1,
            direction: -1
        },
        "!=": {
            inclusive: !1,
            direction: 0
        },
        ">": {
            inclusive: !1,
            direction: 1
        },
        "<=": {
            inclusive: !0,
            direction: -1
        },
        "=": {
            inclusive: !0,
            direction: 0
        },
        ">=": {
            inclusive: !0,
            direction: 1
        }
    },
    e.get = function(e, i) {
        switch (i) {
        case -1:
            return e ? "<=" : "<";
        case 0:
            return e ? "=" : "!=";
        case 1:
            return e ? ">=" : ">";
        default:
            throw "Programming error.  Comparators must have a direction of -1, 0, or 1"
        }
    }
});
define('core/math/parsenode/basecomparator', ['require', 'pjs', './expression', './expressionTypes', 'core/math/comparators'], function(require) {
    "use strict";
    var t = require("pjs")
      , n = require("./expression")
      , i = require("./expressionTypes").Subtract
      , r = require("core/math/comparators").table;
    return t(n, function(n, e, o) {
        o.create = function(n) {
            return t(o, function(t, i) {
                t.operator = n,
                t.isInequality = function() {
                    return 0 !== r[n].direction
                }
            })
        }
        ,
        n.init = function(t) {
            e.init.call(this, t),
            this._difference = -1 === r[this.operator].direction ? i([t[1], t[0]]) : i([t[0], t[1]])
        }
        ,
        n.asComparator = function() {
            return this
        }
    })
});
define('core/math/parsenode/comparator', ['require', 'core/math/parsenode/basecomparator'], function(require) {
    "use strict";
    var e = require("core/math/parsenode/basecomparator");
    return {
        "<": e.create("<"),
        ">": e.create(">"),
        "<=": e.create("<="),
        ">=": e.create(">="),
        "=": e.create("=")
    }
});
define('core/math/parsenode/doubleinequality', ['require', 'pjs', './base', 'core/math/comparators', './comparator'], function(require) {
    "use strict";
    var i = require("pjs")
      , e = require("./base")
      , s = require("core/math/comparators")
      , t = require("./comparator");
    return i(e, function(i, e) {
        i.init = function(i) {
            e.init.call(this),
            this.args = i,
            this._symbol = i[2]._symbol,
            this._operators = [i[1], i[3]],
            this._expressions = [i[0], i[4]];
            var n = s.get(s.table[i[1]].inclusive && s.table[i[3]].inclusive, s.table[i[1]].direction);
            this._indicator = t[n]([i[0], i[4]]),
            this.addDependency(this._symbol),
            this.mergeDependencies(this._expressions[0], this._expressions[1])
        }
        ,
        i.isInequality = function() {
            return !0
        }
        ,
        i.isShadeBetween = function() {
            return !0
        }
    })
});
define('core/math/parsenode/repeatedoperator', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(e, i) {
        e.init = function(e) {
            this._index = e[0],
            i.init.call(this, e)
        }
        ,
        e.registerDependencies = function() {
            this.addDummyDependency(this._index._symbol),
            this.mergeDependencies(this.args[1]),
            this.mergeDependencies(this.args[2]),
            this.mergeDependenciesInScope([this._index._symbol], this.args[3])
        }
    })
});
define('core/math/parsenode/sum', ['require', 'pjs', './repeatedoperator'], function(require) {
    "use strict";
    return require("pjs")(require("./repeatedoperator"), function(t, n) {
        t.in_place_operator = "+=",
        t.starting_value = 0,
        t.evaluateConstant = function(t) {
            var n = 1 + Math.round(t[1]) - Math.round(t[0]);
            return n <= 0 ? this.starting_value : n * t[2]
        }
        ,
        t.update = function(t, n) {
            return t + n
        }
    })
});
define('core/math/parsenode/product', ['require', 'pjs', './repeatedoperator'], function(require) {
    "use strict";
    return require("pjs")(require("./repeatedoperator"), function(t, n) {
        t.in_place_operator = "*=",
        t.starting_value = 1,
        t.evaluateConstant = function(t) {
            var n = 1 + Math.round(t[1]) - Math.round(t[0]);
            return n <= 0 ? this.starting_value : Math.pow(t[2], n)
        }
        ,
        t.update = function(t, n) {
            return t * n
        }
    })
});
define('core/math/parsenode/integral', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(e, i) {
        e.init = function(e) {
            this._differential = e[0],
            i.init.call(this, e)
        }
        ,
        e.registerDependencies = function() {
            this.mergeDependencies(this.args[1]),
            this.mergeDependencies(this.args[2]),
            this.mergeDependenciesInScope([this._differential._symbol], this.args[3])
        }
    })
});
define('core/math/parsenode/assignmentexpression', ['require', './expression', 'pjs'], function(require) {
    "use strict";
    var i = require("./expression");
    return require("pjs")(i, function(i, n) {
        i.init = function(i) {
            n.init.call(this, i),
            this._symbol = i[0]._symbol
        }
    })
});
define('core/math/parsenode/listcomprehension', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, e) {
        i.init = function(i, s, n) {
            this._index = i,
            this._body = s,
            this._inputLists = n,
            e.init.call(this, [i, s].concat(n))
        }
        ,
        i.registerDependencies = function() {
            for (var i = [], e = 0; e < this._inputLists.length; e++) {
                var s = this._inputLists[e]
                  , n = s._symbol;
                this.addDummyDependency(n),
                i.push(n),
                this.mergeDependencies(s.args[1])
            }
            this.addDummyDependency(this._index._symbol),
            i.push(this._index._symbol),
            this.mergeDependenciesInScope(i, this._body)
        }
    })
});
define('core/math/ir/opcodes', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Action = e.BroadcastResult = e.BlockVar = e.ExtendSeed = e.Distribution = e.InboundsListAccess = e.DeferredListAccess = e.ListAccess = e.List = e.NativeFunction = e.Piecewise = e.And = e.GreaterEqual = e.LessEqual = e.Greater = e.Less = e.Equal = e.EndBroadcast = e.BeginBroadcast = e.EndIntegral = e.BeginIntegral = e.EndLoop = e.BeginLoop = e.OrderedPairAccess = e.OrderedPair = e.Negative = e.RawExponent = e.Exponent = e.Divide = e.Multiply = e.Subtract = e.Add = e.MAX_LEAF_OPCODE = e.SymbolicVar = e.LoadArg = e.Constant = e.Noop = void 0,
    e.Noop = 0,
    e.Constant = 1,
    e.LoadArg = 2,
    e.SymbolicVar = 3,
    e.MAX_LEAF_OPCODE = 3,
    e.Add = 8,
    e.Subtract = 9,
    e.Multiply = 10,
    e.Divide = 11,
    e.Exponent = 12,
    e.RawExponent = 13,
    e.Negative = 14,
    e.OrderedPair = 15,
    e.OrderedPairAccess = 16,
    e.BeginLoop = 17,
    e.EndLoop = 18,
    e.BeginIntegral = 19,
    e.EndIntegral = 20,
    e.BeginBroadcast = 21,
    e.EndBroadcast = 22,
    e.Equal = 23,
    e.Less = 24,
    e.Greater = 25,
    e.LessEqual = 26,
    e.GreaterEqual = 27,
    e.And = 30,
    e.Piecewise = 31,
    e.NativeFunction = 37,
    e.List = 38,
    e.ListAccess = 39,
    e.DeferredListAccess = 40,
    e.InboundsListAccess = 41,
    e.Distribution = 42,
    e.ExtendSeed = 44,
    e.BlockVar = 47,
    e.BroadcastResult = 48,
    e.Action = 49
});
define('core/math/ir/builtin-table', ["require", "exports", "core/math/types", "./opcodes", "core/math/maybe-rational"], function(require, e, t, r, n) {
    "use strict";
    function u(e, r, n) {
        var u, a, l, i, m, o, s = null !== (u = null == n ? void 0 : n.tag) && void 0 !== u ? u : "default", d = null !== (a = null == n ? void 0 : n.argumentTypes) && void 0 !== a ? a : function(e) {
            switch (e) {
            case "default":
            case "trig":
            case "inverseTrig":
            case "never-broadcast":
                return [t.Number];
            case "reducer":
                return [t.ListOfNumber];
            case "doubleReducer":
                return [t.ListOfNumber, t.ListOfNumber];
            case "parameterizedReducer":
                return [t.ListOfNumber, t.Number];
            case "color":
                return [t.Number, t.Number, t.Number]
            }
        }(s), g = (null == n ? void 0 : n.defaultArguments) ? n.defaultArguments.length : 0, c = null !== (l = null == n ? void 0 : n.minArity) && void 0 !== l ? l : d.length - g, p = null !== (i = null == n ? void 0 : n.maxArity) && void 0 !== i ? i : function(e, t, r) {
            return "reducer" === e ? 1 / 0 : t + r
        }(s, c, g), b = null !== (m = null == n ? void 0 : n.allowDotCall) && void 0 !== m ? m : function(e) {
            switch (e) {
            case "default":
            case "trig":
            case "inverseTrig":
            case "doubleReducer":
            case "color":
            case "never-broadcast":
                return !1;
            case "reducer":
            case "parameterizedReducer":
                return !0
            }
        }(s);
        return {
            module: e,
            symbol: r,
            argumentTypes: d,
            defaultArguments: null == n ? void 0 : n.defaultArguments,
            returnType: null !== (o = null == n ? void 0 : n.returnType) && void 0 !== o ? o : t.Number,
            tag: s,
            minArity: c,
            maxArity: p,
            allowDotCall: b
        }
    }
    function a(e) {
        if (!n.isRational(e))
            throw new Error("Programming Error: numeric constants should be rational");
        return {
            type: r.Constant,
            valueType: t.Number,
            value: e
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.CompilerFunctionTable = e.BuiltInTable = void 0;
    var l = a(n.maybeRational(0, 1))
      , i = a(n.maybeRational(1, 1))
      , m = a(n.maybeRational(1, 2));
    function o(e, t) {
        var r, n, u, a, l = null == t ? void 0 : t.defaultArguments, i = null !== (r = null == t ? void 0 : t.maxArity) && void 0 !== r ? r : function(e, t) {
            return t ? t.length + e : e
        }(e, l), m = null !== (n = null == t ? void 0 : t.fallthroughUnlessDistribution) && void 0 !== n && n, o = null !== (u = null == t ? void 0 : t.allowDotCall) && void 0 !== u && u, s = null !== (a = null == t ? void 0 : t.isSeeded) && void 0 !== a && a;
        return {
            minArity: e,
            maxArity: i,
            defaultArguments: l,
            fallthroughUnlessDistribution: m,
            minArityExampleArgs: null == t ? void 0 : t.minArityExampleArgs,
            maxArityExampleArgs: null == t ? void 0 : t.maxArityExampleArgs,
            dotMinArityExampleArgs: null == t ? void 0 : t.dotMinArityExampleArgs,
            dotMaxArityExampleArgs: null == t ? void 0 : t.dotMaxArityExampleArgs,
            allowDotCall: o,
            isSeeded: s
        }
    }
    function s() {
        return o(0, {
            maxArity: 1 / 0
        })
    }
    e.BuiltInTable = {
        sin: u("BuiltIn", "sin", {
            tag: "trig"
        }),
        cos: u("BuiltIn", "cos", {
            tag: "trig"
        }),
        tan: u("BuiltIn", "tan", {
            tag: "trig"
        }),
        cot: u("BuiltIn", "cot", {
            tag: "trig"
        }),
        sec: u("BuiltIn", "sec", {
            tag: "trig"
        }),
        csc: u("BuiltIn", "csc", {
            tag: "trig"
        }),
        arcsin: u("Math", "asin", {
            tag: "inverseTrig"
        }),
        arccos: u("Math", "acos", {
            tag: "inverseTrig"
        }),
        arctan: u("Math", "atan2", {
            argumentTypes: [t.Number, t.Number],
            defaultArguments: [i],
            tag: "inverseTrig"
        }),
        arccot: u("BuiltIn", "acot", {
            tag: "inverseTrig"
        }),
        arcsec: u("BuiltIn", "asec", {
            tag: "inverseTrig"
        }),
        arccsc: u("BuiltIn", "acsc", {
            tag: "inverseTrig"
        }),
        sinh: u("BuiltIn", "sinh"),
        cosh: u("BuiltIn", "cosh"),
        tanh: u("BuiltIn", "tanh"),
        coth: u("BuiltIn", "coth"),
        sech: u("BuiltIn", "sech"),
        csch: u("BuiltIn", "csch"),
        arcsinh: u("BuiltIn", "asinh"),
        arccosh: u("BuiltIn", "acosh"),
        arctanh: u("BuiltIn", "atanh"),
        arccoth: u("BuiltIn", "acoth"),
        arcsech: u("BuiltIn", "asech"),
        arccsch: u("BuiltIn", "acsch"),
        sqrt: u("Math", "sqrt"),
        rtxsqpone: u("BuiltIn", "sqrtxsqp1"),
        rtxsqmone: u("BuiltIn", "sqrtxsqm1"),
        nthroot: u("BuiltIn", "nthroot", {
            argumentTypes: [t.Number, t.Number]
        }),
        hypot: u("BuiltIn", "hypot", {
            argumentTypes: [t.Number, t.Number]
        }),
        log: u("BuiltIn", "common_log"),
        logbase: u("BuiltIn", "log_base", {
            argumentTypes: [t.Number, t.Number]
        }),
        ln: u("BuiltIn", "log"),
        exp: u("Math", "exp"),
        floor: u("Math", "floor"),
        ceil: u("Math", "ceil"),
        round: u("Math", "round"),
        abs: u("Math", "abs"),
        sign: u("BuiltIn", "sign"),
        mod: u("BuiltIn", "mod", {
            argumentTypes: [t.Number, t.Number]
        }),
        nCr: u("BuiltIn", "nCr", {
            argumentTypes: [t.Number, t.Number]
        }),
        nPr: u("BuiltIn", "nPr", {
            argumentTypes: [t.Number, t.Number]
        }),
        factorial: u("BuiltIn", "factorial"),
        polyGamma: u("BuiltIn", "polyGamma", {
            argumentTypes: [t.Number, t.Number]
        }),
        lcm: u("BuiltIn", "listLCM", {
            tag: "reducer"
        }),
        gcd: u("BuiltIn", "listGCD", {
            tag: "reducer"
        }),
        distance: u("BuiltIn", "distance", {
            argumentTypes: [t.Point, t.Point]
        }),
        polygon: u("BuiltIn", "polygon", {
            tag: "never-broadcast",
            argumentTypes: [t.ListOfPoint],
            returnType: t.Polygon
        }),
        mean: u("BuiltIn", "mean", {
            tag: "reducer"
        }),
        total: u("BuiltIn", "total", {
            tag: "reducer"
        }),
        stdev: u("BuiltIn", "stdev", {
            tag: "reducer"
        }),
        stdevp: u("BuiltIn", "stdevp", {
            tag: "reducer"
        }),
        mad: u("BuiltIn", "mad", {
            tag: "reducer"
        }),
        length: u("BuiltIn", "length", {
            tag: "reducer",
            argumentTypes: [t.ListOfAny]
        }),
        min: u("BuiltIn", "listMin", {
            tag: "reducer"
        }),
        max: u("BuiltIn", "listMax", {
            tag: "reducer"
        }),
        argmin: u("BuiltIn", "argMin", {
            tag: "reducer"
        }),
        argmax: u("BuiltIn", "argMax", {
            tag: "reducer"
        }),
        median: u("BuiltIn", "median", {
            tag: "reducer"
        }),
        var: u("BuiltIn", "variance", {
            tag: "reducer"
        }),
        varp: u("BuiltIn", "varp", {
            tag: "reducer"
        }),
        cov: u("BuiltIn", "cov", {
            tag: "doubleReducer"
        }),
        covp: u("BuiltIn", "covp", {
            tag: "doubleReducer"
        }),
        corr: u("BuiltIn", "corr", {
            tag: "doubleReducer"
        }),
        spearman: u("BuiltIn", "spearman", {
            tag: "doubleReducer"
        }),
        quantile: u("BuiltIn", "quantile", {
            tag: "parameterizedReducer"
        }),
        quartile: u("BuiltIn", "quartile", {
            tag: "parameterizedReducer"
        }),
        upperQuantileIndex: u("BuiltIn", "upperQuantileIndex", {
            tag: "parameterizedReducer"
        }),
        lowerQuantileIndex: u("BuiltIn", "lowerQuantileIndex", {
            tag: "parameterizedReducer"
        }),
        quartileIndex: u("BuiltIn", "quartileIndex", {
            tag: "parameterizedReducer"
        }),
        upperQuartileIndex: u("BuiltIn", "upperQuartileIndex", {
            tag: "parameterizedReducer"
        }),
        lowerQuartileIndex: u("BuiltIn", "lowerQuartileIndex", {
            tag: "parameterizedReducer"
        }),
        normalcdf: u("BuiltIn", "normalcdf", {
            argumentTypes: [t.Number, t.Number, t.Number, t.Number],
            defaultArguments: [l, i]
        }),
        normalpdf: u("BuiltIn", "normalpdf", {
            argumentTypes: [t.Number, t.Number, t.Number],
            defaultArguments: [l, i]
        }),
        binomcdf: u("BuiltIn", "binomcdf", {
            argumentTypes: [t.Number, t.Number, t.Number, t.Number],
            defaultArguments: [m]
        }),
        binompdf: u("BuiltIn", "binompdf", {
            argumentTypes: [t.Number, t.Number, t.Number],
            defaultArguments: [m]
        }),
        poissoncdf: u("BuiltIn", "poissoncdf", {
            argumentTypes: [t.Number, t.Number, t.Number]
        }),
        poissonpdf: u("BuiltIn", "poissonpdf", {
            argumentTypes: [t.Number, t.Number, t.Number]
        }),
        uniformcdf: u("BuiltIn", "uniformcdf", {
            argumentTypes: [t.Number, t.Number, t.Number, t.Number],
            defaultArguments: [l, i]
        }),
        uniformpdf: u("BuiltIn", "uniformpdf", {
            argumentTypes: [t.Number, t.Number, t.Number],
            defaultArguments: [l, i]
        }),
        invT: u("BuiltIn", "invT", {
            argumentTypes: [t.Number, t.Number]
        }),
        invPoisson: u("BuiltIn", "invPoisson", {
            argumentTypes: [t.Number, t.Number]
        }),
        invBinom: u("BuiltIn", "invBinom", {
            argumentTypes: [t.Number, t.Number, t.Number]
        }),
        invUniform: u("BuiltIn", "invUniform", {
            argumentTypes: [t.Number, t.Number, t.Number]
        }),
        tpdf: u("BuiltIn", "tpdf", {
            argumentTypes: [t.Number, t.Number]
        }),
        tcdf: u("BuiltIn", "tcdf", {
            argumentTypes: [t.Number, t.Number, t.Number]
        }),
        erf: u("BuiltIn", "erf"),
        invNorm: u("BuiltIn", "invNorm"),
        tscore: u("BuiltIn", "tscore", {
            tag: "parameterizedReducer",
            defaultArguments: [l]
        }),
        normalSample: u("BuiltIn", "normalSample", {
            argumentTypes: [t.SeedType, t.Number, t.Number]
        }),
        uniformSample: u("BuiltIn", "uniformSample", {
            argumentTypes: [t.SeedType, t.Number, t.Number]
        }),
        tSample: u("BuiltIn", "tSample", {
            argumentTypes: [t.SeedType, t.Number]
        }),
        poissonSample: u("BuiltIn", "poissonSample", {
            argumentTypes: [t.SeedType, t.Number]
        }),
        binomSample: u("BuiltIn", "binomSample", {
            argumentTypes: [t.SeedType, t.Number, t.Number]
        }),
        rgb: u("BuiltIn", "rgb", {
            returnType: t.RGBColor,
            tag: "color"
        }),
        hsv: u("BuiltIn", "hsv", {
            returnType: t.RGBColor,
            tag: "color"
        }),
        validateRangeLength: u("BuiltIn", "validateRangeLength", {
            returnType: t.Number,
            argumentTypes: [t.ListOfNumber, t.ListOfNumber, t.Number, t.Number],
            tag: "never-broadcast"
        }),
        validateSampleCount: u("BuiltIn", "validateSampleCount", {
            returnType: t.Number,
            argumentTypes: [t.Number]
        }),
        select: u("BuiltIn", "select", {
            argumentTypes: [t.ListOfAny, t.ListOfBool],
            returnType: function(e) {
                return e[0]
            },
            tag: "never-broadcast"
        }),
        shuffle: u("BuiltIn", "shuffle", {
            argumentTypes: [t.SeedType, t.ListOfAny],
            returnType: function(e) {
                return e[1]
            },
            tag: "never-broadcast"
        }),
        sortPerm: u("BuiltIn", "sortPerm", {
            argumentTypes: [t.ListOfNumber],
            returnType: t.ListOfNumber,
            tag: "never-broadcast"
        }),
        elementsAt: u("BuiltIn", "elementsAt", {
            argumentTypes: [t.ListOfAny, t.ListOfNumber],
            returnType: function(e) {
                return e[0]
            },
            tag: "never-broadcast"
        }),
        uniquePerm: u("BuiltIn", "uniquePerm", {
            argumentTypes: [t.ListOfAny],
            returnType: t.ListOfNumber,
            tag: "never-broadcast"
        })
    },
    e.CompilerFunctionTable = {
        round: o(1, {
            maxArity: 2
        }),
        midpoint: o(2),
        sort: o(1, {
            maxArity: 2,
            minArityExampleArgs: "([3,2,1])",
            maxArityExampleArgs: "([1,2,3],[3,2,1])",
            dotMaxArityExampleArgs: "([3,4])",
            allowDotCall: !0
        }),
        shuffle: o(2, {
            maxArity: 3,
            minArityExampleArgs: "([1,2,3])",
            maxArityExampleArgs: "([1,2,3],2)",
            dotMaxArityExampleArgs: "(2)",
            allowDotCall: !0,
            isSeeded: !0
        }),
        join: o(2, {
            maxArity: 1 / 0,
            minArityExampleArgs: "([1,2],[3,4])",
            dotMinArityExampleArgs: "([3,4])",
            allowDotCall: !0
        }),
        unique: o(1, {
            minArityExampleArgs: "([1,2,3])",
            maxArityExampleArgs: "([1,2,3])",
            allowDotCall: !0
        }),
        normaldist: o(0, {
            defaultArguments: [l, i]
        }),
        tdist: o(1),
        binomialdist: o(1, {
            defaultArguments: [m]
        }),
        poissondist: o(1),
        uniformdist: o(0, {
            defaultArguments: [l, i]
        }),
        pdf: o(2, {
            allowDotCall: !0
        }),
        cdf: o(2, {
            maxArity: 3,
            allowDotCall: !0
        }),
        mean: o(1, {
            fallthroughUnlessDistribution: !0,
            allowDotCall: !0
        }),
        median: o(1, {
            fallthroughUnlessDistribution: !0,
            allowDotCall: !0
        }),
        stdev: o(1, {
            fallthroughUnlessDistribution: !0,
            allowDotCall: !0
        }),
        var: o(1, {
            fallthroughUnlessDistribution: !0,
            allowDotCall: !0
        }),
        quantile: o(2, {
            fallthroughUnlessDistribution: !0,
            allowDotCall: !0,
            minArityExampleArgs: "([1,2,3], 1)",
            maxArityExampleArgs: "([1,2,3], 1)",
            dotMinArityExampleArgs: "(x)",
            dotMaxArityExampleArgs: "(x)"
        }),
        random: o(1, {
            maxArity: 4,
            allowDotCall: !0,
            isSeeded: !0
        }),
        polygon: o(0, {
            maxArity: 1 / 0
        }),
        histogram: s(),
        dotplot: s(),
        boxplot: s(),
        ttest: s(),
        ittest: s(),
        stats: s(),
        det: s(),
        inv: s(),
        transpose: s(),
        rref: s(),
        trace: s()
    }
});
define('core/math/parsenode/functioncall', ['require', 'pjs', './expression', './identifier', 'core/math/ir/builtin-table'], function(require) {
    "use strict";
    var i = require("pjs")
      , e = require("./expression")
      , t = require("./identifier")
      , r = require("core/math/ir/builtin-table").BuiltInTable;
    return i(e, function(i, e) {
        i.init = function(i, r) {
            "string" == typeof i && (i = t(i)),
            this._identifier = i,
            this._symbol = i._symbol,
            this._errorSymbol = "logbase" === i._errorSymbol ? "log" : i._errorSymbol,
            e.init.call(this, r)
        }
        ,
        i.registerDependencies = function() {
            this.addDependency(this._symbol),
            e.registerDependencies.call(this);
            var i = r[this._symbol];
            !i || "trig" !== i.tag && "inverseTrig" !== i.tag || this.addDependency("trigAngleMultiplier")
        }
        ,
        i.copyWithArgs = function(i) {
            return new this.constructor(t(this._symbol),i)
        }
    })
});
define('core/math/parsenode/seededfunctioncall', ['require', 'pjs', './functioncall'], function(require) {
    "use strict";
    return require("pjs")(require("./functioncall"), function(i, n) {
        i.init = function(i, t) {
            n.init.call(this, i, t),
            this.seed = t[0]
        }
    })
});
define('core/math/parsenode/functionexponent', ['require', 'pjs', './expression', 'core/math/ir/builtin-table'], function(require) {
    "use strict";
    var e = require("pjs")
      , i = require("./expression")
      , t = require("core/math/ir/builtin-table").BuiltInTable;
    return e(i, function(e, i) {
        e.registerDependencies = function() {
            if (i.registerDependencies.call(this),
            "Identifier" === this.args[0].type) {
                var e = this.args[0]._symbol
                  , n = t[e];
                !n || "trig" !== n.tag && "inverseTrig" !== n.tag || this.addDependency("trigAngleMultiplier")
            }
        }
    })
});
define('core/math/parsenode/functionfactorial', ['require', 'pjs', './expression', 'core/math/ir/builtin-table'], function(require) {
    "use strict";
    var e = require("pjs")
      , i = require("./expression")
      , t = require("core/math/ir/builtin-table").BuiltInTable;
    return e(i, function(e, i) {
        e.registerDependencies = function() {
            if (this.addDependency("factorial"),
            i.registerDependencies.call(this),
            "Identifier" === this.args[0].type) {
                var e = this.args[0]._symbol
                  , n = t[e];
                !n || "trig" !== n.tag && "inverseTrig" !== n.tag || this.addDependency("trigAngleMultiplier")
            }
        }
    })
});
define('core/math/parsenode/prime', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(t, i) {
        t.init = function(t, n) {
            i.init.call(this, n),
            this.order = t
        }
        ,
        t.copyWithArgs = function(t) {
            return new this.constructor(this.order,t)
        }
    })
});
define('core/math/parsenode/piecewise', ['require', 'pjs', './expression', './constant', 'core/math/maybe-rational'], function(require) {
    "use strict";
    var n = require("pjs")
      , t = require("./expression")
      , e = require("./constant")
      , r = require("core/math/maybe-rational").maybeRational
      , a = n(t, {});
    return a.chain = function(n, t) {
        for (var e, r = t; n.length; )
            e = n.pop(),
            r = a([e.condition, e.if_expr, r]);
        return r
    }
    ,
    a.empty = function() {
        return a([e(!0), e(r(1, 1)), e(NaN)])
    }
    ,
    a
});
define('core/math/parsenode/derivative', ['require', 'pjs', './expression', './identifier'], function(require) {
    "use strict";
    var i = require("pjs")
      , n = require("./expression")
      , s = require("./identifier");
    return i(n, function(i, n) {
        i.init = function(i, t) {
            this._symbol = i instanceof s ? i._symbol : s(i)._symbol,
            n.init.call(this, t),
            this.addDependency(this._symbol)
        }
    })
});
define('core/math/parsenode/updaterule', ['require', './expression', 'pjs'], function(require) {
    "use strict";
    var e = require("./expression");
    return require("pjs")(e, function(e, i) {
        e.init = function(e) {
            this._symbol = e[0]._symbol,
            this._expression = e[1],
            i.init.call(this, e)
        }
        ,
        e.registerDependencies = function() {
            this.addUpdateSymbol(this._symbol),
            this.mergeDependencies(this._expression)
        }
    })
});
define('core/math/parsenode/histogram', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i) {
            n.init.call(this, i),
            this._symbol = "histogram"
        }
    })
});
define('core/math/parsenode/object3d', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i, t) {
            n.init.call(this, i),
            this._symbol = t
        }
    })
});
define('core/math/parsenode/dotplot', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, t) {
        i.init = function(i) {
            t.init.call(this, i),
            this._symbol = "dotplot"
        }
    })
});
define('core/math/parsenode/boxplot', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i) {
            n.init.call(this, i),
            this._symbol = "boxplot"
        }
    })
});
define('core/math/parsenode/ttest', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(t, i) {
        t.init = function() {
            i.init.apply(this, arguments),
            this._symbol = "ttest"
        }
    })
});
define('core/math/parsenode/independent-ttest', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, t) {
        i.init = function() {
            t.init.apply(this, arguments),
            this._symbol = "ittest"
        }
    })
});
define('core/math/parsenode/stats', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, t) {
        i.init = function() {
            t.init.apply(this, arguments),
            this._symbol = "stats"
        }
    })
});
define('core/math/parsenode/equation', ['require', './base', 'pjs', './expressionTypes', 'core/math/parsenode/comparator'], function(require) {
    "use strict";
    var s = require("./base")
      , t = require("pjs")
      , i = require("./expressionTypes").Subtract
      , e = require("core/math/parsenode/comparator");
    return t(s, function(s, t) {
        s.init = function(s, e) {
            t.init.call(this),
            this.mergeDependencies(s, e),
            this._lhs = s,
            this._rhs = e,
            this._difference = i([this._lhs, this._rhs])
        }
        ,
        s.asComparator = function() {
            return e["="]([this._lhs, this._rhs])
        }
    })
});
define('core/math/parsenode/assignment', ['require', './base', './equation', './identifier', 'pjs'], function(require) {
    "use strict";
    var e = require("./base")
      , t = require("./equation")
      , i = require("./identifier");
    return require("pjs")(e, function(e, s) {
        e.init = function(e, t) {
            s.init.call(this),
            e = e._symbol,
            this.mergeDependencies(t),
            this._expression = t,
            this._symbol = e,
            this._exports = this.computeExports()
        }
        ,
        e.shouldExportAns = function() {
            return !0
        }
        ,
        e.computeExports = function() {
            for (var e = this._symbol, t = this.getDependencies(), i = 0; i < t.length; i++)
                if (t[i] === e)
                    return [];
            return [e]
        }
        ,
        e.isEquation = function(e) {
            return -1 !== e.getDependencies().indexOf(this._symbol)
        }
        ,
        e.asEquation = function() {
            var e = t(i(this._symbol), this._expression);
            return e.userData = this.userData,
            e.metaData = this.metaData,
            e
        }
        ,
        e.shouldPromoteToSlider = function(e) {
            return !!this._expression.isConstant && (!this._expression.is_mixed_number && ("number" == typeof this._expression.asValue() && (!!isFinite(this._expression.asValue()) && e.isValidSlider(this._symbol))))
        }
    })
});
define('core/math/parsenode/functiondefinition', ['require', 'pjs', './base', 'core/math/errormsg', './equation', './identifier', './functioncall'], function(require) {
    "use strict";
    var t = require("pjs")
      , e = require("./base")
      , i = require("core/math/errormsg")
      , r = require("./equation")
      , n = require("./identifier")
      , s = require("./functioncall");
    return t(e, function(t, e) {
        t.init = function(t, i, r) {
            e.init.call(this),
            t = t._symbol,
            this._argSymbols = i.map(function(t) {
                return t._symbol
            }),
            this._symbol = t,
            this._exports = [t],
            this._expression = r,
            this.mergeDependenciesInScope(this._argSymbols, this._expression)
        }
        ,
        t.isFunction = !0,
        t.getConcreteInvocationTree = function(t, e, r, n) {
            if (r.length !== this._argSymbols.length)
                throw i.wrongArity(n, this._argSymbols.length, r.length);
            for (var s = Object.create(e), o = 0; o < this._argSymbols.length; o++)
                s[this._argSymbols[o]] = r[o];
            return this._expression.getConcreteTree(t, s)
        }
        ,
        t.getSliderVariables = function(t, i) {
            var r = this._argSymbols;
            return e.getSliderVariables.call(this, t, i).filter(function(t) {
                return -1 === r.indexOf(t)
            })
        }
        ,
        t.asEquation = function() {
            var t = this._argSymbols.map(function(t) {
                return n(t)
            })
              , e = r(s(n(this._symbol), t), this._expression);
            return e.userData = this.userData,
            e.metaData = this.metaData,
            e
        }
    })
});
define('core/math/parsenode/regression', ['require', 'pjs', './base', 'core/math/errormsg', './functioncall', './identifier', './expressionTypes'], function(require) {
    "use strict";
    var e = require("pjs")
      , i = require("./base")
      , r = require("core/math/errormsg")
      , s = require("./functioncall")
      , n = require("./identifier")
      , t = require("./expressionTypes").Subtract;
    return e(i, function(e, i, a) {
        e.init = function(e, r) {
            i.init.call(this),
            this._lhs = e,
            this.isLhsSimple = e instanceof n,
            this._logLhs = s("ln", [e]),
            this._rhs = r,
            this._difference = t([e, r]),
            this._logDifference = t([s("ln", [e]), s("ln", [r])]),
            this.mergeDependencies(e, r)
        }
        ,
        e.isRegression = !0,
        e.exportTo = function(e, i, s) {
            if (!i.isError) {
                for (var n in i.parameters)
                    i.parameters.hasOwnProperty(n) && (e.assignmentForbidden(n) || (s[n] = s[n] ? r.multiplyDefined(n) : i.parameters[n]));
                e.assignmentForbidden(i.residualVariable) || (s[i.residualVariable] = i.residuals)
            }
        }
        ,
        e.getSliderVariables = function() {
            return []
        }
    })
});
define('core/math/parsenode/image', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(i, t, e, h) {
        i.isImage = !0,
        i.init = function(i, e) {
            t.init.call(this),
            this.center = i.center,
            this.radianAngle = i.radianAngle,
            this.width = i.width,
            this.height = i.height,
            this.opacity = i.opacity,
            this.moveStrategy = e,
            this.mergeDependencies(this.center, this.radianAngle, this.width, this.height, this.opacity)
        }
    })
});
define('core/math/parsenode/ticker', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(e, i) {
        e.init = function(e) {
            i.init.call(this),
            this.handler = e.handler,
            this.minStep = e.minStep,
            this.mergeDependencies(this.handler),
            this.mergeDependencies(this.minStep)
        }
    })
});
define('core/math/parsenode/slider', ['require', 'pjs', './assignment', './identifier'], function(require) {
    "use strict";
    var i = require("pjs")
      , s = require("./assignment")
      , e = require("./identifier");
    return i(s, function(i, t, n, r) {
        i.isSlider = !0,
        i.init = function(i, s) {
            t.init.call(this, e(i._symbol), i._expression),
            this.setInputSpan(i._inputSpan),
            this.sliderAssignment = i,
            this.sliderMin = s.sliderMin,
            this.sliderMax = s.sliderMax,
            this.sliderSoftMin = s.sliderSoftMin,
            this.sliderSoftMax = s.sliderSoftMax,
            this.sliderStep = s.sliderStep,
            this.sliderIsPlayingOnce = s.sliderIsPlayingOnce,
            this.sliderMin && this.mergeDependencies(this.sliderMin),
            this.sliderMax && this.mergeDependencies(this.sliderMax),
            this.sliderStep && this.mergeDependencies(this.sliderStep)
        }
        ,
        i.shouldPromoteToSlider = function(i) {
            return !1
        }
        ,
        i.asAssignment = function() {
            return s(this._symbol, this._expression)
        }
    })
});
define('core/math/parsenode/table', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(t, n) {
        t.init = function(t) {
            n.init.call(this),
            this.columns = t,
            this._exports = [],
            this.mergeDependencies.apply(this, t);
            for (var e = 0; e < t.length; e++)
                Array.prototype.push.apply(this._exports, t[e].getExports())
        }
        ,
        t.exportPenalty = 1,
        t.isTable = !0,
        t.exportTo = function(t, n, e) {
            for (var s = 0; s < this.columns.length; s++) {
                var r = this.columns[s].getExports();
                if (r.length) {
                    var i = r[0];
                    t.assignmentForbidden(i) || e[i] || (n.isError ? e[i] = n : this.columns[s].exportTo(t, n.columns[s], e))
                }
            }
        }
        ,
        t.getAllIds = function() {
            return this.columns.map(function(t) {
                return t.header.userData.id
            })
        }
    })
});
define('core/math/parsenode/tablecolumn', ['require', 'pjs', './base', './list', './constant', './identifier'], function(require) {
    "use strict";
    var e = require("pjs")
      , t = require("./base")
      , n = require("./list")
      , i = require("./constant")
      , s = require("./identifier");
    return e(t, function(e, o) {
        function r(e) {
            return e.isConstant ? i(e.asCompilerValue()) : i(NaN)
        }
        e.init = function(e, t, n) {
            o.init.call(this),
            this.header = e,
            this.length = t,
            this.values = n,
            this.isIndependent = !1,
            this.registerDependencies(),
            this._exports = this.computeExports()
        }
        ,
        e.registerDependencies = function() {
            this.mergeDependencies(this.header),
            this.mergeDependencies.apply(this, this.values)
        }
        ,
        e.computeExports = function() {
            return this.header instanceof s ? [this.header._symbol] : []
        }
        ,
        e.isDiscrete = function(e) {
            return !this.continuousConcreteTree || 1 !== this.continuousConcreteTree.getDependencies().length || 1 !== e.header.getDependencies().length || this.continuousConcreteTree.getDependencies()[0] !== e.header.getDependencies()[0]
        }
        ,
        e._exportSymbolsTo = function(e, i, s) {
            if (e.length) {
                var o = e[0];
                if (i.isError)
                    s[o] = i;
                else
                    try {
                        s[o] = n(i.values.map(r))
                    } catch (e) {
                        if (!(e instanceof t))
                            throw e;
                        s[o] = e
                    }
            }
        }
        ,
        e.exportTo = function(e, t, n) {
            var i = this.getLegalExports(e);
            this._exportSymbolsTo(i, t, n)
        }
        ,
        e.exportToLocal = function(e, t) {
            this._exportSymbolsTo(this.getExports(), e, t)
        }
    })
});
define('core/math/parsenode/solvedequation', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(i, e) {
        i.init = function(i, n, t) {
            e.init.call(this),
            this._symbol = i,
            this._expression = n,
            this.mergeDependencies(n),
            this.branchMultiplier = t
        }
    })
});
define('core/math/parsenode/optimizedregression', ['require', 'pjs', './base'], function(require) {
    "use strict";
    return require("pjs")(require("./base"), function(i, e) {
        i.init = function(i, t, s, r, a) {
            for (var n in e.init.call(this),
            this.parameters = i,
            this.residuals = t,
            this.statistics = s,
            this.model = r,
            this.isModelValid = a.isModelValid,
            this.residualVariable = a.residualVariable,
            this.residualSuggestionId = a.residualSuggestionId,
            this.shouldSuggestLogMode = a.shouldSuggestLogMode,
            this.isLinear = a.isLinear,
            this.parameterWarning = a.parameterWarning,
            this._exports = [this.residualVariable],
            i)
                i.hasOwnProperty(n) && this._exports.push(n);
            this.mergeDependencies(r)
        }
        ,
        i.getCompiledFunction = function() {
            return this.model.getCompiledFunction.apply(this.model, arguments)
        }
        ,
        i.getCompiledDerivative = function() {
            return this.model.getCompiledDerivative.apply(this.model, arguments)
        }
    })
});
define('core/math/parsenode/seed', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(i, n) {
        i.init = function(i) {
            "string" != typeof i && (i = "" + i),
            this._stringValue = i,
            n.init.call(this, [])
        }
        ,
        i.isString = !0,
        i.asValue = function() {
            return this._stringValue
        }
    })
});
define('core/math/parsenode/extendseed', ['require', 'pjs', './expression'], function(require) {
    "use strict";
    return require("pjs")(require("./expression"), function(t, s) {
        t.init = function(t, e) {
            s.init.call(this, e),
            this.seed = e[0],
            this.userSeed = e[1],
            this.tag = t
        }
        ,
        t.asValue = function() {
            return this.seed.asValue() + "::" + this.tag + this.userSeed.asValue()
        }
        ,
        t.copyWithArgs = function(t) {
            return new this.constructor(this.tag,t)
        }
    })
});
define('core/math/context-types', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isActionCompilerValue = void 0,
    e.isActionCompilerValue = function(e) {
        return !("object" != typeof e || !e) && "Action" === e.type
    }
});
define('core/math/ir/features/as-value', ["require", "exports", "../opcodes", "core/math/context-types", "core/math/maybe-rational"], function(require, e, t, a, r) {
    "use strict";
    function u(e) {
        if (Array.isArray(e))
            return e.map(u);
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
            return e;
        case "object":
            if (a.isActionCompilerValue(e)) {
                var t = {};
                for (var o in e.updateRules) {
                    var n = e.updateRules[o];
                    t[o] = {
                        value: u(n.value),
                        valueType: n.valueType
                    }
                }
                return {
                    type: "Action",
                    updateRules: t
                }
            }
            return r.asFloat(e);
        default:
            throw new Error("Unexpected value: " + e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.compilerValueToRuntimeValue = e.asValue = void 0,
    e.asValue = function(e, a) {
        var r = e.getInstruction(a);
        switch (r.type) {
        case t.Constant:
            return u(r.value);
        default:
            throw new Error("Unexpected opcode " + r.type + ".")
        }
    }
    ,
    e.compilerValueToRuntimeValue = u
});
define('core/math/ir/features/nan-of-type', ["require", "exports", "core/math/types"], function(require, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.nanOfType = e.isNanableValueType = void 0,
    e.isNanableValueType = function(e) {
        switch (e) {
        case a.Bool:
        case a.Number:
        case a.Point:
        case a.Action:
        case a.RGBColor:
        case a.Polygon:
            return !0;
        default:
            return !1
        }
    }
    ,
    e.nanOfType = function(e) {
        switch (e) {
        case a.Number:
            return NaN;
        case a.Point:
            return [NaN, NaN];
        case a.RGBColor:
            return [NaN, NaN, NaN];
        case a.Action:
            return {
                type: "Action",
                updateRules: {}
            };
        case a.Bool:
            return !1;
        case a.Polygon:
            return [];
        default:
            throw new Error(e + " does not have a NaN type.")
        }
    }
});
define('core/math/parsenode/irexpression', ['require', 'pjs', './base', 'core/math/types', 'core/math/ir/features/as-value', 'core/math/ir/features/nan-of-type', 'core/math/errormsg'], function(require) {
    "use strict";
    var e = require("pjs")
      , t = require("./base")
      , n = require("core/math/types")
      , i = require("core/math/ir/features/as-value").compilerValueToRuntimeValue
      , s = require("core/math/ir/features/nan-of-type").nanOfType
      , u = require("core/math/errormsg");
    return e(t, function(e, t, r) {
        e.init = function(e) {
            if (t.init.call(this),
            this._chunk = e,
            this.valueType = e.getReturnType(),
            this.addDependencies(e.getLiveArgNames()),
            this.isList = n.isList(this.valueType),
            this.isList && (this.length = this._chunk.getConstantListLength(),
            void 0 === this.length))
                throw u.variableLengthTopLevelList(e.getListLengthDependencies());
            var i = e.isConstant();
            this.isConstant = i && (this.valueType === n.Number || this.valueType === n.Bool),
            this.isEmptyAction = i && this.valueType === n.Action && 0 === Object.keys(e.asValue().updateRules).length
        }
        ,
        e.shouldExportAns = function() {
            return !0
        }
        ,
        e.getCompiledFunction = function(e) {
            return this._chunk.getCompiledFunction(e)
        }
        ,
        e.polynomialOrder = function(e) {
            return this._chunk.polynomialOrder(e, {
                allowRestriction: !0,
                allowClosedBlockReferences: !1
            })
        }
        ,
        e.getPolynomialCoefficients = function(e) {
            for (var t = this._chunk.getPolynomialCoefficients(e), n = t.chunk, i = t.coefficients, s = [], u = 0; u < i.length; u++) {
                var o = n.copy();
                o.returnIndex = i[u],
                o.close(),
                s.push(new r(o))
            }
            return s
        }
        ,
        e.takeDerivative = function(e) {
            var t = this._chunk.copy().takeDerivative(e).close();
            return new r(t)
        }
        ,
        e.boundDomain = function(e) {
            return this._chunk.boundDomain(e)
        }
        ,
        e.asValue = function() {
            if (this._chunk.isConstant())
                return this._chunk.asValue();
            if (this.isList) {
                for (var e = [], t = i(s(n.elementType(this.valueType))), u = 0; u < this.length; u++)
                    e.push(t);
                return e
            }
            return i(s(this.valueType))
        }
        ,
        e.asCompilerValue = function() {
            return this._chunk.asCompilerValue()
        }
        ,
        e.isNaN = function() {
            return "number" == typeof this.asValue() && isNaN(this.asValue())
        }
        ,
        e.getEvaluationInfo = function() {
            return !(!this._chunk.isConstant() || 0 !== this.getDependencies().length || !n.isTypeOrListOfType(this.valueType, n.Number) && !n.isTypeOrListOfType(this.valueType, n.Bool)) && [{
                val: this.asValue()
            }]
        }
        ,
        e.elementAt = function(e) {
            var t = this._chunk.elementAt(e);
            return new r(t)
        }
        ,
        e.findLinearSubset = function(e) {
            return this._chunk.findLinearSubset(e)
        }
        ,
        e.deriveRegressionRestrictions = function() {
            var e = this._chunk.deriveRegressionRestrictions();
            return e === this._chunk ? this : new r(e)
        }
        ,
        e.eachElement = function(e) {
            for (var t = 0; t < this.length; t++)
                e(this.elementAt(t), t)
        }
        ,
        e.mapElements = function(e) {
            for (var t = [], n = 0; n < this.length; n++)
                t.push(e(this.elementAt(n), n));
            return t
        }
    })
});
define('parsenodes', ['require', 'core/math/parsenode/expressionTypes', 'core/math/parsenode/base', 'core/math/parsenode/expression', 'core/math/parsenode/error', 'core/math/parsenode/constant', 'core/math/parsenode/mixednumber', 'core/math/parsenode/identifier', 'core/math/parsenode/ans', 'core/math/parsenode/list', 'core/math/parsenode/range', 'core/math/parsenode/listaccess', 'core/math/parsenode/dotaccess', 'core/math/parsenode/parenseq', 'core/math/parsenode/movablepoint', 'core/math/parsenode/orderedpairaccess', 'core/math/parsenode/bareseq', 'core/math/parsenode/basecomparator', 'core/math/parsenode/comparator', 'core/math/parsenode/doubleinequality', 'core/math/parsenode/repeatedoperator', 'core/math/parsenode/sum', 'core/math/parsenode/product', 'core/math/parsenode/integral', 'core/math/parsenode/assignmentexpression', 'core/math/parsenode/listcomprehension', 'core/math/parsenode/functioncall', 'core/math/parsenode/seededfunctioncall', 'core/math/parsenode/functionexponent', 'core/math/parsenode/functionfactorial', 'core/math/parsenode/prime', 'core/math/parsenode/piecewise', 'core/math/parsenode/derivative', 'core/math/parsenode/updaterule', 'core/math/parsenode/histogram', 'core/math/parsenode/object3d', 'core/math/parsenode/dotplot', 'core/math/parsenode/boxplot', 'core/math/parsenode/ttest', 'core/math/parsenode/independent-ttest', 'core/math/parsenode/stats', 'core/math/parsenode/assignment', 'core/math/parsenode/functiondefinition', 'core/math/parsenode/equation', 'core/math/parsenode/regression', 'core/math/parsenode/image', 'core/math/parsenode/ticker', 'core/math/parsenode/slider', 'core/math/parsenode/table', 'core/math/parsenode/tablecolumn', 'core/math/parsenode/solvedequation', 'core/math/parsenode/optimizedregression', 'core/math/parsenode/seed', 'core/math/parsenode/extendseed', 'core/math/parsenode/irexpression'], function(require) {
    "use strict";
    var e = require("core/math/parsenode/expressionTypes")
      , o = {
        Base: require("core/math/parsenode/base"),
        Expression: require("core/math/parsenode/expression"),
        Error: require("core/math/parsenode/error"),
        Constant: require("core/math/parsenode/constant"),
        MixedNumber: require("core/math/parsenode/mixednumber"),
        Identifier: require("core/math/parsenode/identifier"),
        Ans: require("core/math/parsenode/ans"),
        List: require("core/math/parsenode/list"),
        Range: require("core/math/parsenode/range"),
        ListAccess: require("core/math/parsenode/listaccess"),
        DotAccess: require("core/math/parsenode/dotaccess"),
        ParenSeq: require("core/math/parsenode/parenseq"),
        MovablePoint: require("core/math/parsenode/movablepoint"),
        OrderedPairAccess: require("core/math/parsenode/orderedpairaccess"),
        BareSeq: require("core/math/parsenode/bareseq"),
        BaseComparator: require("core/math/parsenode/basecomparator"),
        Comparator: require("core/math/parsenode/comparator"),
        DoubleInequality: require("core/math/parsenode/doubleinequality"),
        RepeatedOperator: require("core/math/parsenode/repeatedoperator"),
        Sum: require("core/math/parsenode/sum"),
        Product: require("core/math/parsenode/product"),
        Integral: require("core/math/parsenode/integral"),
        AssignmentExpression: require("core/math/parsenode/assignmentexpression"),
        ListComprehension: require("core/math/parsenode/listcomprehension"),
        FunctionCall: require("core/math/parsenode/functioncall"),
        SeededFunctionCall: require("core/math/parsenode/seededfunctioncall"),
        FunctionExponent: require("core/math/parsenode/functionexponent"),
        FunctionFactorial: require("core/math/parsenode/functionfactorial"),
        Prime: require("core/math/parsenode/prime"),
        Piecewise: require("core/math/parsenode/piecewise"),
        Derivative: require("core/math/parsenode/derivative"),
        UpdateRule: require("core/math/parsenode/updaterule"),
        Histogram: require("core/math/parsenode/histogram"),
        Object3D: require("core/math/parsenode/object3d"),
        DotPlot: require("core/math/parsenode/dotplot"),
        BoxPlot: require("core/math/parsenode/boxplot"),
        TTest: require("core/math/parsenode/ttest"),
        IndependentTTest: require("core/math/parsenode/independent-ttest"),
        Stats: require("core/math/parsenode/stats"),
        Assignment: require("core/math/parsenode/assignment"),
        FunctionDefinition: require("core/math/parsenode/functiondefinition"),
        Equation: require("core/math/parsenode/equation"),
        Regression: require("core/math/parsenode/regression"),
        Image: require("core/math/parsenode/image"),
        Ticker: require("core/math/parsenode/ticker"),
        Slider: require("core/math/parsenode/slider"),
        Table: require("core/math/parsenode/table"),
        TableColumn: require("core/math/parsenode/tablecolumn"),
        SolvedEquation: require("core/math/parsenode/solvedequation"),
        OptimizedRegression: require("core/math/parsenode/optimizedregression"),
        Seed: require("core/math/parsenode/seed"),
        ExtendSeed: require("core/math/parsenode/extendseed"),
        IRExpression: require("core/math/parsenode/irexpression")
    };
    for (var r in e)
        o[r] = e[r];
    for (var a in o)
        o.hasOwnProperty(a) && "Comparator" !== a && (o[a].prototype.type = a);
    for (var t in o.Comparator)
        o.Comparator.hasOwnProperty(t) && (o.Comparator[t].prototype.type = "Comparator['" + t + "']");
    return o
});
define('core/math/builtinconstants', ['require', 'core/math/parsenode/constant', 'core/math/maybe-rational'], function(require) {
    "use strict";
    var t = require("core/math/parsenode/constant")
      , a = require("core/math/maybe-rational").maybeRational;
    return {
        pi: t(Math.PI),
        tau: t(2 * Math.PI),
        e: t(Math.E),
        trigAngleMultiplier: t(a(1, 1)),
        infty: t(1 / 0)
    }
});
define('core/math/builtinframe', ['require', 'core/math/builtinconstants', 'core/math/ir/builtin-table'], function(require) {
    "use strict";
    var n, i = require("core/math/builtinconstants"), t = require("core/math/ir/builtin-table"), r = {};
    for (n in i)
        i.hasOwnProperty(n) && (r[n] = i[n]);
    for (n in t.BuiltInTable)
        t.BuiltInTable.hasOwnProperty(n) && (r[n] = {
            isFunction: !0
        });
    for (n in t.CompilerFunctionTable)
        t.CompilerFunctionTable.hasOwnProperty(n) && (r[n] = {
            isFunction: !0
        });
    return r
});
define('core/math/finddependencyorder', ["require", "exports", "core/math/builtinframe", "underscore"], function(require, e, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.findDependencyOrder = void 0,
    e.findDependencyOrder = function(e, i, t) {
        var o = []
          , a = {}
          , l = {}
          , p = {}
          , s = {}
          , f = {}
          , h = 0
          , u = []
          , d = [];
        if (!t)
            for (var v in t = [],
            i)
                i.hasOwnProperty(v) && t.push(v);
        for (var v in i)
            if (i.hasOwnProperty(v)) {
                for (var c = i[v].exportPenalty || 0; o.length < c + 1; )
                    o.push([]);
                o[c].push(v)
            }
        for (var y = 0, g = o; y < g.length; y++) {
            for (var w = {}, k = 0, O = g[y]; k < O.length; k++) {
                v = O[k];
                for (var x = 0, P = i[v].getLegalExports(e); x < P.length; x++) {
                    var m = P[x];
                    r[m] || (a[m] || (w[m] = w[m] || [],
                    w[m].push(v),
                    w[m].length > 1 && (!l[m] && i[v].isTable && (p[m] = !0),
                    l[m] = !0)))
                }
            }
            for (var m in w)
                p[m] || (a[m] = w[m])
        }
        for (var D = 0, b = t; D < b.length; D++) {
            m = b[D];
            f.hasOwnProperty(m) || M(m)
        }
        function M(r) {
            f[r] = f[r] || {};
            var t, o = f[r];
            o.id = r,
            o.index = h,
            o.lowlink = h,
            u.push(o),
            o.instack = !0,
            h++;
            for (var l = 0, p = i[r].getDependencies(); l < p.length; l++) {
                var v = p[l];
                if (a.hasOwnProperty(v))
                    for (var c = 0, y = a[v]; c < y.length; c++) {
                        var g = y[c];
                        f.hasOwnProperty(g) ? (t = f[g]).instack && (o.lowlink = Math.min(o.lowlink, t.index)) : (M(g),
                        t = f[g],
                        o.lowlink = Math.min(o.lowlink, t.lowlink))
                    }
            }
            if (o.lowlink === o.index)
                if ((t = u.pop()).instack = !1,
                t === o)
                    !function(e) {
                        d.push(e.id)
                    }(o);
                else {
                    for (var w = [t]; (t = u.pop()).instack = !1,
                    w.push(t),
                    t !== o; )
                        ;
                    !function(r) {
                        for (var t = [], o = r.length - 1; o >= 0; o--) {
                            var a = r[o]
                              , l = i[a.id].getLegalExports(e);
                            Array.prototype.push.apply(t, l),
                            t.push(l[0]),
                            d.push(a.id)
                        }
                        (t = n.unique(t)).sort();
                        for (var p = 0, f = t; p < f.length; p++) {
                            var h = f[p];
                            s[h] = t
                        }
                    }(w)
                }
        }
        return {
            resolved: d,
            multiplyDefined: l,
            multiplyDefinedByTables: p,
            cyclicallyDefined: s
        }
    }
});
define('core/math/workerconfig', [], function() {
    "use strict";
    return {
        pointsOfInterest: !0,
        plotSingleVariableImplicitEquations: !0,
        plotImplicits: !0,
        plotInequalities: !0,
        sliders: !0
    }
});
define('core/types/graphmode', ["require", "exports"], function(require, O) {
    "use strict";
    Object.defineProperty(O, "__esModule", {
        value: !0
    }),
    O.POLYGON = O.ERROR = O.PARAMETRIC_CURVE_3D = O.Z_3D = O.OBJECT3D = O.VISUALIZATION = O.NONE = O.IMPLICIT = O.POLYGONFILL = O.POLAR = O.PARAMETRIC = O.XYPOINT_MOVABLE = O.XYPOINT = O.Y = O.X = void 0,
    O.X = 1,
    O.Y = 2,
    O.XYPOINT = 3,
    O.XYPOINT_MOVABLE = 4,
    O.PARAMETRIC = 5,
    O.POLAR = 6,
    O.POLYGONFILL = 7,
    O.IMPLICIT = 8,
    O.NONE = 10,
    O.VISUALIZATION = 11,
    O.OBJECT3D = 12,
    O.Z_3D = 13,
    O.PARAMETRIC_CURVE_3D = 14,
    O.ERROR = 15,
    O.POLYGON = 16
});
!function() {
    var t, e, n, r, o, a, i, c, u, f, l, s, p, y, d, b, _, h, v, w, m, O, j, g, P = {};
    !function(t) {
        var e = "object" == typeof P ? P : "object" == typeof self ? self : "object" == typeof this ? this : {};
        function n(t, n) {
            return t !== e && ("function" == typeof Object.create ? Object.defineProperty(t, "__esModule", {
                value: !0
            }) : t.__esModule = !0),
            function(e, r) {
                return t[e] = n ? n(e, r) : r
            }
        }
        "function" == typeof define && define.amd ? define("tslib", ["exports"], function(r) {
            t(n(e, n(r)))
        }) : "object" == typeof module && "object" == typeof module.exports ? t(n(e, n(module.exports))) : t(n(e))
    }(function(P) {
        var S = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        ;
        t = function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function n() {
                this.constructor = t
            }
            S(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ,
        e = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ,
        n = function(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
            }
            return n
        }
        ,
        r = function(t, e, n, r) {
            var o, a = arguments.length, i = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(t, e, n, r);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (o = t[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(e, n, i) : o(e, n)) || i);
            return a > 3 && i && Object.defineProperty(e, n, i),
            i
        }
        ,
        o = function(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }
        ,
        a = function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        ,
        i = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, a) {
                function i(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function c(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(i, c)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }
        ,
        c = function(t, e) {
            var n, r, o, a, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function c(a) {
                return function(c) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, a[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (a = [2 & a[0], o.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = i.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = a;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, c])
                }
            }
        }
        ,
        u = function(t, e) {
            for (var n in t)
                "default" === n || Object.prototype.hasOwnProperty.call(e, n) || g(e, t, n)
        }
        ,
        g = Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        : function(t, e, n, r) {
            void 0 === r && (r = n),
            t[r] = e[n]
        }
        ,
        f = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator
              , n = e && t[e]
              , r = 0;
            if (n)
                return n.call(t);
            if (t && "number" == typeof t.length)
                return {
                    next: function() {
                        return t && r >= t.length && (t = void 0),
                        {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        ,
        l = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, a = n.call(t), i = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = a.next()).done; )
                    i.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return i
        }
        ,
        s = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(l(arguments[e]));
            return t
        }
        ,
        p = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
            var r = Array(t)
              , o = 0;
            for (e = 0; e < n; e++)
                for (var a = arguments[e], i = 0, c = a.length; i < c; i++,
                o++)
                    r[o] = a[i];
            return r
        }
        ,
        y = function(t, e) {
            for (var n = 0, r = e.length, o = t.length; n < r; n++,
            o++)
                t[o] = e[n];
            return t
        }
        ,
        d = function(t) {
            return this instanceof d ? (this.v = t,
            this) : new d(t)
        }
        ,
        b = function(t, e, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, o = n.apply(t, e || []), a = [];
            return r = {},
            i("next"),
            i("throw"),
            i("return"),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function i(t) {
                o[t] && (r[t] = function(e) {
                    return new Promise(function(n, r) {
                        a.push([t, e, n, r]) > 1 || c(t, e)
                    }
                    )
                }
                )
            }
            function c(t, e) {
                try {
                    (n = o[t](e)).value instanceof d ? Promise.resolve(n.value.v).then(u, f) : l(a[0][2], n)
                } catch (t) {
                    l(a[0][3], t)
                }
                var n
            }
            function u(t) {
                c("next", t)
            }
            function f(t) {
                c("throw", t)
            }
            function l(t, e) {
                t(e),
                a.shift(),
                a.length && c(a[0][0], a[0][1])
            }
        }
        ,
        _ = function(t) {
            var e, n;
            return e = {},
            r("next"),
            r("throw", function(t) {
                throw t
            }),
            r("return"),
            e[Symbol.iterator] = function() {
                return this
            }
            ,
            e;
            function r(r, o) {
                e[r] = t[r] ? function(e) {
                    return (n = !n) ? {
                        value: d(t[r](e)),
                        done: "return" === r
                    } : o ? o(e) : e
                }
                : o
            }
        }
        ,
        h = function(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, n = t[Symbol.asyncIterator];
            return n ? n.call(t) : (t = f(t),
            e = {},
            r("next"),
            r("throw"),
            r("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function r(n) {
                e[n] = t[n] && function(e) {
                    return new Promise(function(r, o) {
                        (function(t, e, n, r) {
                            Promise.resolve(r).then(function(e) {
                                t({
                                    value: e,
                                    done: n
                                })
                            }, e)
                        }
                        )(r, o, (e = t[n](e)).done, e.value)
                    }
                    )
                }
            }
        }
        ,
        v = function(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
            t
        }
        ;
        var x = Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(t, e) {
            t.default = e
        }
        ;
        w = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && g(e, t, n);
            return x(e, t),
            e
        }
        ,
        m = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ,
        O = function(t, e) {
            if (!e.has(t))
                throw new TypeError("attempted to get private field on non-instance");
            return e.get(t)
        }
        ,
        j = function(t, e, n) {
            if (!e.has(t))
                throw new TypeError("attempted to set private field on non-instance");
            return e.set(t, n),
            n
        }
        ,
        P("__extends", t),
        P("__assign", e),
        P("__rest", n),
        P("__decorate", r),
        P("__param", o),
        P("__metadata", a),
        P("__awaiter", i),
        P("__generator", c),
        P("__exportStar", u),
        P("__createBinding", g),
        P("__values", f),
        P("__read", l),
        P("__spread", s),
        P("__spreadArrays", p),
        P("__spreadArray", y),
        P("__await", d),
        P("__asyncGenerator", b),
        P("__asyncDelegator", _),
        P("__asyncValues", h),
        P("__makeTemplateObject", v),
        P("__importStar", w),
        P("__importDefault", m),
        P("__classPrivateFieldGet", O),
        P("__classPrivateFieldSet", j)
    })
}();
define('core/math/poi', ["require", "exports", "core/math/distance"], function(require, i, t) {
    "use strict";
    function r(i, r) {
        var n;
        i > r && (n = i,
        i = r,
        r = n);
        var e = i > 0
          , a = r > 0
          , s = Math.abs(i) > .01
          , f = Math.abs(r) > .01;
        if (s || f)
            return t.mean(i, r);
        if (0 === i)
            return r * Math.abs(r);
        if (0 === r)
            return i * Math.abs(i);
        if (e !== a)
            return 0;
        var u = e ? Math.sqrt(i * r) : -Math.sqrt(i * r);
        return u >= i && r >= u ? u : t.mean(i, r)
    }
    function n(i, t, n, s, f, u, o) {
        var c, F, v, b;
        if (isFinite(s))
            return isFinite(t) || (c = e(i, t, n, s, o)) && (i = c[0],
            t = c[1]),
            isFinite(u) || (c = e(n, s, f, u, o)) && (f = c[0],
            u = c[1]),
            F = t === s ? [i, t] : a(i, t, n, s, o, s),
            v = u === s ? [f, u] : a(n, s, f, u, o, s),
            F && v && (b = r(F[0], v[0])),
            void 0 !== b ? [b, o(b)] : void 0
    }
    function e(i, t, n, e, a) {
        if (isFinite(t) !== isFinite(e))
            for (; ; ) {
                var s = r(i, n)
                  , f = a(s);
                if (s === i || s === n)
                    return isFinite(t) ? [i, t] : [n, e];
                isFinite(f) !== isFinite(t) ? (n = s,
                e = f) : (i = s,
                t = f)
            }
    }
    function a(i, t, n, e, a, s) {
        if (t === s != (e === s))
            for (; ; ) {
                var f = r(i, n)
                  , u = a(f);
                if (f === i || f === n)
                    return t === s ? [i, t] : [n, e];
                u === s != (t === s) ? (n = f,
                e = u) : (i = f,
                t = u)
            }
    }
    function s(i, t) {
        var r = i[0]
          , n = i[1]
          , e = t[0]
          , a = t[1];
        return (e - r) * (e - r) + (a - n) * (a - n)
    }
    function f(i, t, n, e, a, f) {
        var u, o, c, F, v, b, M, h, m, d = f(i), l = f(t), P = f(n), p = s(d, e), C = s(l, e), O = s(P, e);
        if (!(t <= i || n <= t) && isFinite(p) && isFinite(C) && isFinite(O) && !(C >= p || C >= O))
            for (; ; ) {
                if (Math.abs(P[0] - d[0]) < a && Math.abs(P[1] - d[1]) < a)
                    return [i, n];
                var x = r(i, t)
                  , N = f(x)
                  , q = s(N, e)
                  , E = r(t, n)
                  , J = f(E)
                  , L = s(J, e);
                if (!isFinite(q) || !isFinite(L))
                    return;
                if (x === i || x === t || E === t || E === n)
                    return q < C && q < L ? [x, x] : L < q && L < C ? [E, E] : [t, t];
                if (!(q !== C && L !== C || q !== (C = s(l = f(t = .5 * (x + t)), e)) && L !== C))
                    return [i, n];
                q < C && q < L ? (n = (u = [t, x])[0],
                t = u[1],
                P = (o = [l, N])[0],
                l = o[1],
                O = (c = [C, q])[0],
                C = c[1]) : L < q && L < C ? (i = (F = [t, E])[0],
                t = F[1],
                d = (v = [l, J])[0],
                l = v[1],
                p = (b = [C, L])[0],
                C = b[1]) : (i = (M = [x, E])[0],
                n = M[1],
                d = (h = [N, J])[0],
                P = h[1],
                p = (m = [q, L])[0],
                O = m[1])
            }
    }
    function u(i, t, r) {
        return void 0 === t && (t = -1 / 0),
        void 0 === r && (r = 1 / 0),
        Math.min(r, Math.max(t, i))
    }
    function o(i, t, r, n, e, a) {
        var o, c, F, v, b;
        void 0 !== n && void 0 !== e ? b = r + .01 * (r < .5 * (n + e) ? e - n : n - e) : b = Math.abs(r) > 1 ? 1.00001 * r : r + 1e-5;
        var M = i(r)
          , h = i(b)
          , m = s(M, t)
          , d = s(h, t);
        if (isFinite(m) && isFinite(d)) {
            if (m === d)
                return [r, b];
            for (d > m && (r = (o = [b, r])[0],
            b = o[1],
            M = (c = [h, M])[0],
            h = c[1],
            m = (F = [d, m])[0],
            d = F[1]); isFinite(r) && isFinite(b) && r !== b; ) {
                if (void 0 !== e && b > e)
                    return [e, e];
                if (void 0 !== n && b < n)
                    return [n, n];
                var l = r + 3 * (b - r)
                  , P = s(i(l), t);
                if (!isFinite(P))
                    return [r, b];
                if (P === d)
                    return [r, b];
                if (P > d) {
                    var p = b > r ? f(r, b, l, t, a, i) : f(l, b, r, t, a, i);
                    return p ? [u(p[0], n, e), u(p[1], n, e)] : p
                }
                r = (v = [b, d, l, P])[0],
                m = v[1],
                b = v[2],
                d = v[3]
            }
            return [r, b]
        }
    }
    function c(i, t, r, n) {
        return !r || !!n && Math.min(s(i(n[0]), t), s(i(n[1]), t)) < Math.min(s(i(r[0]), t), s(i(r[1]), t))
    }
    function F(i, t, r, n, e, a, s, f) {
        var u = Math.abs(n - t)
          , o = Math.abs(a - n)
          , c = Math.abs(f - a);
        return u > o && u > c ? [[i, t], [r, n]] : c > o && c > u ? [[e, a], [s, f]] : [[r, n], [e, a]]
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.bisectJump = i.findLocalClosestPointOnParametric = i.clamp = i.bisectClosestPointOnParametric = i.bisectExtremum = i.bisectFinite = i.flatCenter = i.bisectZero = i.floatMiddle = void 0,
    i.floatMiddle = r,
    i.bisectZero = function(i, t, e, a, s) {
        if (!isNaN(t) && !isNaN(a) && t < 0 != a < 0)
            for (; ; ) {
                var f = r(i, e)
                  , u = s(f);
                if (!isFinite(u))
                    return;
                if (f === i || f === e)
                    return Math.abs(t) <= Math.abs(a) ? [i, t] : [e, a];
                if (0 === u)
                    return n(i, t, f, u, e, a, s);
                t < 0 != u < 0 ? (e = f,
                a = u) : (i = f,
                t = u)
            }
    }
    ,
    i.flatCenter = n,
    i.bisectFinite = e,
    i.bisectExtremum = function(i, t, e, a, s, f, u) {
        if (i < e && e < s && isFinite(t) && isFinite(a) && isFinite(f) && t !== a && a !== f && a > t == a > f)
            for (; ; ) {
                var o = r(i, e)
                  , c = u(o)
                  , F = r(e, s)
                  , v = u(F);
                if (!isFinite(c) || !isFinite(v))
                    return;
                if (o === i || o === e || F === e || F === s)
                    return c > a == a > t ? [o, c] : v > a == a > t ? [F, v] : [e, a];
                if (c === a || v === a)
                    return n(i, t, e, a, s, f, u);
                c > t == a > t && c > t == c > a ? (s = e,
                f = a,
                e = o,
                a = c) : v > f == a > f && v > a == v > f ? (i = e,
                t = a,
                e = F,
                a = v) : (i = o,
                t = c,
                s = F,
                f = v)
            }
    }
    ,
    i.bisectClosestPointOnParametric = f,
    i.clamp = u,
    i.findLocalClosestPointOnParametric = function(i, t, r, n, e, a) {
        var s = o(i, t, r, n, e, a);
        if (void 0 !== n) {
            var f = o(i, t, n, n, e, a);
            c(i, t, s, f) && (s = f)
        }
        if (void 0 !== e) {
            var u = o(i, t, e, n, e, a);
            c(i, t, s, u) && (s = u)
        }
        return s
    }
    ,
    i.bisectJump = function(i, n, a, s, f, u, o, c) {
        if (c || (c = 0),
        !((a - i) * (f - a) <= 0) && isFinite(i) && isFinite(a) && isFinite(f) && isFinite(n) && isFinite(u)) {
            if (!isFinite(s)) {
                var v = e(i, n, a, s, o)
                  , b = e(a, s, f, u, o);
                if (!v || !b)
                    return;
                return [v, b]
            }
            if (!(Math.abs(s - ((f - a) * n + (a - i) * u) / (f - i)) < c))
                for (; ; ) {
                    var M = r(i, a)
                      , h = o(M)
                      , m = r(a, f)
                      , d = o(m)
                      , l = Math.abs(h - t.mean(n, s))
                      , P = Math.abs(s - t.mean(h, d))
                      , p = Math.abs(d - t.mean(s, u));
                    if (l <= c && P <= c && p <= c)
                        return;
                    if (!isFinite(h)) {
                        v = e(i, n, M, h, o),
                        b = e(M, h, f, u, o);
                        if (!v || !b)
                            return;
                        return [v, b]
                    }
                    if (!isFinite(d)) {
                        v = e(i, n, m, d, o),
                        b = e(m, d, f, u, o);
                        if (!v || !b)
                            return;
                        return [v, b]
                    }
                    if (!(M !== i && M !== a || m !== a && m !== f))
                        return Math.abs(s - n) > Math.abs(u - s) ? [[i, n], [a, s]] : [[a, s], [f, u]];
                    if (M === i || M === a)
                        return F(i, n, a, s, m, d, f, u);
                    if (m === a || m === f)
                        return F(i, n, M, h, a, s, f, u);
                    l > p && l >= P ? (f = a,
                    u = s,
                    a = M,
                    s = h) : p > l && p >= P ? (i = a,
                    n = s,
                    a = m,
                    s = d) : (i = M,
                    n = h,
                    f = m,
                    u = d)
                }
        }
    }
});
define('core/math/curve-accumulator', ["require", "exports", "core/math/distance"], function(require, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Accumulator = void 0;
    var i = function() {
        function t(t) {
            t ? (this.xtolerance = t.xtolerance || t.tolerance || 0,
            this.ytolerance = t.ytolerance || t.tolerance || 0,
            this.ztolerance = t.ztolerance || t.tolerance || 0,
            this.map = t.map) : this.xtolerance = this.ytolerance = this.ztolerance = 0,
            this.segments = [],
            this.segment = [],
            this.pivotPoint = void 0,
            this.pendingPoint = void 0
        }
        return t.prototype.colinear = function(t, i, n) {
            this.map && (t = this.map(t),
            i = this.map(i),
            n = this.map(n));
            var s = e.pointToSegmentParameter(n[0], n[1], n[2] || 0, t[0], t[1], t[2] || 0, i[0], i[1], i[2] || 0);
            if (s < 1)
                return !1;
            var h = [t[0] + s * (i[0] - t[0]), t[1] + s * (i[1] - t[1]), 3 === t.length ? t[2] + s * (i[2] - t[2]) : 0];
            return Math.abs(n[0] - h[0]) <= this.xtolerance && Math.abs(n[1] - h[1]) <= this.ytolerance && (2 === t.length || Math.abs(n[2] - h[2]) <= this.ztolerance)
        }
        ,
        t.prototype.addPoint = function(t) {
            if (this.dimensions = t.length,
            this.xtolerance < 0 && this.ytolerance < 0 && (2 === this.dimensions || this.ztolerance < 0))
                this.segment.push.apply(this.segment, t);
            else if (this.segment.length) {
                var i = 2 === this.dimensions ? [this.segment[this.segment.length - 2], this.segment[this.segment.length - 1]] : [this.segment[this.segment.length - 3], this.segment[this.segment.length - 2], this.segment[this.segment.length - 1]];
                if (t[0] !== i[0] || t[1] !== i[1] || t[2] !== i[2]) {
                    if (!this.pivotPoint || !this.pendingPoint)
                        return this.pivotPoint = t,
                        void (this.pendingPoint = t);
                    (!this.colinear(i, this.pivotPoint, t) || e.hypot(i[0] - t[0], i[1] - t[1], (i[2] || 0) - (t[2] || 0)) < e.hypot(i[0] - this.pendingPoint[0], i[1] - this.pendingPoint[1], (i[2] || 0) - (this.pendingPoint[2] || 0))) && (this.flushPending(),
                    this.pivotPoint = t),
                    this.pendingPoint = t
                }
            } else
                this.segment.push.apply(this.segment, t)
        }
        ,
        t.prototype.flushPending = function() {
            this.pendingPoint && (this.segment.push.apply(this.segment, this.pendingPoint),
            this.pivotPoint = void 0,
            this.pendingPoint = void 0)
        }
        ,
        t.prototype.breakSegment = function() {
            this.flushPending(),
            this.segment.length > (this.dimensions || 2) && this.segments.push(this.segment),
            this.segment = []
        }
        ,
        t.prototype.getSegments = function() {
            return this.breakSegment(),
            this.segments
        }
        ,
        t.prototype.finish = function() {
            return {
                segments: this.getSegments(),
                resolved: !0
            }
        }
        ,
        t
    }();
    t.Accumulator = i
});
define('core/math/implicit-plotter', ["require", "exports", "core/math/distance", "./curve-accumulator"], function(require, e, r, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.displayTriangles = e.traceContours = e.triangulate = e.buildQuadTree = e.sampleImplicitDiagnostic = e.sampleImplicit = void 0;
    var n = Math.pow(2, 14);
    function t(e, r) {
        var i = Math.pow(2, -5)
          , n = u(r, i)
          , t = u(r, 2 * i)
          , c = v(e, n, t)
          , a = k(c.root, e, n);
        return {
            paddedDomain: n,
            rootDomain: t,
            quadTree: c,
            triangles: a,
            contours: I(a, e, n)
        }
    }
    function c(e, r, i) {
        return {
            x: e,
            y: r,
            z: i
        }
    }
    function a(e, r, i) {
        return {
            x: e,
            y: r,
            isZero: i
        }
    }
    function s(e, r, i) {
        return {
            vertices: [e, r, i],
            visited: !1,
            next: void 0
        }
    }
    function u(e, r) {
        var i = (1 + r) * e.xmin - r * e.xmax
          , n = (1 + r) * e.xmax - r * e.xmin;
        return {
            xmin: i,
            ymin: (1 + r) * e.ymin - r * e.ymax,
            xmax: n,
            ymax: (1 + r) * e.ymax - r * e.ymin,
            xtolerance: e.xtolerance,
            ytolerance: e.ytolerance
        }
    }
    function o(e, r) {
        return {
            depth: e,
            vertices: r,
            children: void 0,
            center: void 0
        }
    }
    function l(e, r, i) {
        e.center = p(e.vertices[0], e.vertices[1], e.vertices[2], e.vertices[3], r, i)
    }
    function v(e, r, i) {
        var t = function(e, r) {
            var i = r.xmin
              , n = r.xmax
              , t = r.ymin
              , c = r.ymax;
            return o(0, [m(i, c, e), m(n, c, e), m(n, t, e), m(i, t, e)])
        }(e, i)
          , c = []
          , a = [];
        a.push(t);
        var s = 1
          , u = !0;
        e: for (; a.length; ) {
            var v = c;
            c = a,
            a = v;
            for (var h = void 0; h = c.pop(); )
                if (d(h, e, r)) {
                    if (f(h, e),
                    !h.children) {
                        u = !1;
                        break e
                    }
                    if (a.push(h.children[0]),
                    a.push(h.children[1]),
                    a.push(h.children[2]),
                    a.push(h.children[3]),
                    (s += 3) >= n) {
                        u = !1;
                        break e
                    }
                } else
                    l(h, e, r)
        }
        for (var x = 0; x < c.length; x++)
            l(c[x], e, r);
        for (x = 0; x < a.length; x++)
            l(a[x], e, r);
        return {
            root: t,
            resolved: u
        }
    }
    function f(e, r) {
        var i = e.depth + 1
          , n = e.vertices[0]
          , t = e.vertices[1]
          , c = e.vertices[2]
          , a = e.vertices[3]
          , s = y(n, t, r)
          , u = y(t, c, r)
          , l = y(c, a, r)
          , v = y(a, n, r)
          , f = y(n, c, r);
        e.children = [o(i, [n, s, f, v]), o(i, [s, t, u, f]), o(i, [f, u, c, l]), o(i, [v, f, l, a])]
    }
    function d(e, r, i) {
        if (e.depth < 5)
            return !0;
        if (function(e, r) {
            return e.vertices[0].x < r.xmin || e.vertices[0].y > r.ymax || e.vertices[2].x > r.xmax || e.vertices[2].y < r.ymin
        }(e, i))
            return !1;
        if (function(e, r) {
            if (e.vertices[1].x - e.vertices[0].x < 10 * r.xtolerance)
                return !0;
            if (e.vertices[0].y - e.vertices[3].y < 10 * r.ytolerance)
                return !0;
            return !1
        }(e, i))
            return !1;
        var n = e.vertices[0]
          , t = e.vertices[1]
          , c = e.vertices[2]
          , a = e.vertices[3];
        if (isNaN(n.z) && isNaN(t.z) && isNaN(c.z) && isNaN(a.z))
            return !1;
        if (isNaN(n.z) || isNaN(t.z) || isNaN(c.z) || isNaN(a.z))
            return !0;
        var s = p(n, t, c, a, r, i)
          , u = N(n, t, r, i)
          , o = N(t, c, r, i)
          , l = N(c, a, r, i)
          , v = N(a, n, r, i);
        return x(n, u, r) || x(t, u, r) || x(t, o, r) || x(c, o, r) || x(c, l, r) || x(a, l, r) || x(a, v, r) || x(n, v, r) || h(n, u, s, r, i) || h(u, t, s, r, i) || h(t, o, s, r, i) || h(o, c, s, r, i) || h(c, l, s, r, i) || h(l, a, s, r, i) || h(a, v, s, r, i) || h(v, n, s, r, i)
    }
    function h(e, i, n, t, c) {
        if (e.z > 0 == i.z > 0 && i.z > 0 == n.z > 0)
            return !1;
        var a, s, u, o;
        if (e.z > 0 == i.z > 0) {
            if ((a = y(e, i, t)).z > 0 != e.z > 0)
                return !0;
            s = b(e, n, t, c),
            u = b(i, n, t, c),
            o = b(a, n, t, c)
        } else if (i.z > 0 == n.z > 0) {
            if ((a = y(i, n, t)).z > 0 != i.z > 0)
                return !0;
            s = b(i, e, t, c),
            u = b(n, e, t, c),
            o = b(a, e, t, c)
        } else {
            if ((a = y(n, e, t)).z > 0 != n.z > 0)
                return !0;
            s = b(n, i, t, c),
            u = b(e, i, t, c),
            o = b(a, i, t, c)
        }
        var l = c.xtolerance
          , v = c.ytolerance;
        return r.pointToSegment(v * o.x, l * o.y, v * s.x, l * s.y, v * u.x, l * u.y) > l * v
    }
    function x(e, r, i) {
        if (isNaN(e.z) && isNaN(r.z))
            return !1;
        if (isNaN(e.z) || isNaN(r.z))
            return e.z > 0 || r.z > 0;
        var n = 4 * y(e, r, i).z - r.z - 3 * e.z
          , t = 1e-4
          , c = (i(.9999 * e.x + t * r.x, .9999 * e.y + t * r.y) - e.z) / t
          , a = Math.max(Math.abs(e.z), Math.abs(r.z));
        return Math.abs(n - c) > .125 * a
    }
    function z(e, r) {
        return e.x < r.xmin || e.x > r.xmax || e.y < r.ymin || e.y > r.ymax
    }
    function m(e, r, i) {
        return c(e, r, i(e, r))
    }
    function y(e, r, i) {
        return m(.5 * (e.x + r.x), .5 * (e.y + r.y), i)
    }
    function N(e, r, i, n) {
        if (z(e, n) || z(r, n))
            return y(e, r, i);
        if (isNaN(e.z) || isNaN(r.z))
            return function(e, r, i, n) {
                if (isNaN(e.z) === isNaN(r.z))
                    return y(e, r, i);
                if (isNaN(e.z)) {
                    var t = e;
                    e = r,
                    r = t
                }
                var a = e.x
                  , s = r.x
                  , u = e.y
                  , o = r.y
                  , l = e.z
                  , v = n.xtolerance
                  , f = n.ytolerance;
                for (; Math.abs(a - s) > v || Math.abs(u - o) > f; ) {
                    var d = .5 * (a + s)
                      , h = .5 * (u + o)
                      , x = i(d, h);
                    isNaN(x) === isNaN(l) ? (a = d,
                    u = h,
                    l = x) : (s = d,
                    o = h)
                }
                return c(a, u, l)
            }(e, r, i, n);
        if (e.z > 0 != r.z > 0)
            return y(e, r, i);
        var t = .01
          , a = i(.99 * e.x + t * r.x, .99 * e.y + t * r.y) - e.z
          , s = r.z - i(t * e.x + .99 * r.x, t * e.y + .99 * r.y);
        return isNaN(a) || isNaN(s) || a > 0 == s > 0 ? y(e, r, i) : g(c(e.x, e.y, a), c(r.x, r.y, s), i)
    }
    function p(e, r, i, n, t, c) {
        var a = N(e, i, t, c);
        return e.z > 0 == i.z > 0 && a.z > 0 != e.z > 0 ? a : (a = N(r, n, t, c),
        r.z > 0 == n.z > 0 && a.z > 0 != r.z > 0 ? a : y(e, i, t))
    }
    function g(e, r, i) {
        if (isNaN(e.z))
            return r;
        if (isNaN(r.z))
            return e;
        if (isFinite(e.z) || isFinite(r.z)) {
            if (isFinite(e.z)) {
                if (isFinite(r.z)) {
                    var n = 1 - e.z / r.z
                      , t = 1 - r.z / e.z;
                    return m(e.x / n + r.x / t, e.y / n + r.y / t, i)
                }
                return e
            }
            return r
        }
        return y(e, r, i)
    }
    function b(e, r, i, n) {
        var t = e.x
          , s = r.x
          , u = e.y
          , o = r.y
          , l = e.z
          , v = r.z
          , f = n.xtolerance
          , d = n.ytolerance;
        if (z(e, n) || z(r, n)) {
            var h = y(e, r, i);
            return a(h.x, h.y, !1)
        }
        for (; Math.abs(t - s) > f || Math.abs(u - o) > d; ) {
            var x = .5 * (t + s)
              , m = .5 * (u + o)
              , N = i(x, m);
            N > 0 == l > 0 ? (t = x,
            u = m,
            l = N) : (s = x,
            o = m,
            v = N)
        }
        if (isNaN(l))
            return a(s, o, !1);
        if (isNaN(v))
            return a(t, u, !1);
        var p = g(c(t, u, l), c(s, o, v), i)
          , b = 0 === l || 0 === v || 0 === p.z || p.z >= l == v >= p.z && Math.abs(p.z) < 1e250;
        return a(p.x, p.y, b)
    }
    function k(e, r, i) {
        var n = {
            triangles: [],
            edgeCache: {},
            domain: i,
            fn: r
        };
        return M(e, n),
        n.triangles
    }
    function M(e, r) {
        e.children && (M(e.children[0], r),
        M(e.children[1], r),
        M(e.children[2], r),
        M(e.children[3], r),
        A(e.children[0], e.children[1], r),
        A(e.children[3], e.children[2], r),
        S(e.children[1], e.children[2], r),
        S(e.children[0], e.children[3], r))
    }
    function A(e, r, i) {
        e.children && r.children ? (A(e.children[1], r.children[0], i),
        A(e.children[2], r.children[3], i)) : e.children ? (A(e.children[1], r, i),
        A(e.children[2], r, i)) : r.children ? (A(e, r.children[0], i),
        A(e, r.children[3], i)) : function(e, r, i) {
            if (!e.center || !r.center)
                return;
            var n, t;
            e.depth >= r.depth ? (n = N(e.vertices[1], e.vertices[2], i.fn, i.domain),
            t = T(e.vertices[1], r.center, e.vertices[2], e.center, n)) : (n = N(r.vertices[0], r.vertices[3], i.fn, i.domain),
            t = T(r.vertices[0], r.center, r.vertices[3], e.center, n));
            D(t, i.edgeCache, i.domain);
            for (var c = 0; c < 4; c++)
                i.triangles.push(t[c])
        }(e, r, i)
    }
    function S(e, r, i) {
        e.children && r.children ? (S(e.children[2], r.children[1], i),
        S(e.children[3], r.children[0], i)) : e.children ? (S(e.children[2], r, i),
        S(e.children[3], r, i)) : r.children ? (S(e, r.children[1], i),
        S(e, r.children[0], i)) : function(e, r, i) {
            if (!e.center || !r.center)
                return;
            var n, t;
            e.depth >= r.depth ? (n = N(e.vertices[3], e.vertices[2], i.fn, i.domain),
            t = T(e.vertices[2], r.center, e.vertices[3], e.center, n)) : (n = N(r.vertices[1], r.vertices[0], i.fn, i.domain),
            t = T(r.vertices[1], r.center, r.vertices[0], e.center, n));
            D(t, i.edgeCache, i.domain);
            for (var c = 0; c < 4; c++)
                i.triangles.push(t[c])
        }(e, r, i)
    }
    function T(e, r, i, n, t) {
        return [s(e, t, r), s(r, t, i), s(i, t, n), s(n, t, e)]
    }
    function C(e, r, i) {
        return e.z > 0 && !z(e, i) && (!(r.z > 0) || z(r, i))
    }
    function w(e, r) {
        return e.x + "," + e.y + "," + r.x + "," + r.y
    }
    function D(e, r, i) {
        F(e[0], e[1], e[2], w(e[1].vertices[2], e[1].vertices[0]), r, i),
        F(e[1], e[2], e[3], w(e[2].vertices[0], e[2].vertices[2]), r, i),
        F(e[2], e[3], e[0], w(e[3].vertices[2], e[3].vertices[0]), r, i),
        F(e[3], e[0], e[1], w(e[0].vertices[0], e[0].vertices[2]), r, i)
    }
    function F(e, r, i, n, t, c) {
        var a = r.vertices[0]
          , s = r.vertices[1]
          , u = r.vertices[2];
        C(s, u, c) && (r.next = i),
        C(a, s, c) && (r.next = e),
        C(u, a, c) && function(e, r, i) {
            i[r] ? e.next = i[r] : i[r] = e
        }(r, n, t),
        C(a, u, c) && function(e, r, i) {
            i[r] ? i[r].next = e : i[r] = e
        }(r, n, t)
    }
    function I(e, r, n) {
        for (var t = {
            fillAccumulator: new i.Accumulator(n),
            strokeAccumulator: new i.Accumulator(n),
            fn: r,
            domain: n
        }, c = 0; c < e.length; c++) {
            var a = e[c];
            a.next && !a.visited && q(a, t)
        }
        return {
            strokeSegments: t.strokeAccumulator.finish().segments,
            fillSegments: t.fillAccumulator.finish().segments
        }
    }
    function q(e, r) {
        for (; ; ) {
            var i = e.vertices[0]
              , n = e.vertices[1]
              , t = e.vertices[2];
            if (P(i, n, r),
            P(n, t, r),
            P(t, i, r),
            e.visited)
                break;
            if (!e.next)
                break;
            e.visited = !0,
            e = e.next
        }
        r.strokeAccumulator.breakSegment(),
        r.fillAccumulator.breakSegment()
    }
    function P(e, r, i) {
        if (C(e, r, i.domain)) {
            var n = b(e, r, i.fn, i.domain);
            i.fillAccumulator.addPoint([n.x, n.y]),
            n.isZero ? i.strokeAccumulator.addPoint([n.x, n.y]) : i.strokeAccumulator.breakSegment()
        }
    }
    e.sampleImplicit = function(e, r) {
        var i = t(e, r);
        return {
            segments: i.contours.strokeSegments,
            fillSegments: i.contours.fillSegments,
            resolved: i.quadTree.resolved
        }
    }
    ,
    e.sampleImplicitDiagnostic = t,
    e.buildQuadTree = v,
    e.triangulate = k,
    e.traceContours = I,
    e.displayTriangles = function(e) {
        for (var r = [], i = 0; i < e.length; i++) {
            var n = e[i];
            r.push([n.vertices[0].x, n.vertices[0].y, n.vertices[1].x, n.vertices[1].y, n.vertices[2].x, n.vertices[2].y, n.vertices[0].x, n.vertices[0].y])
        }
        return r
    }
});
define('core/math/poi-finding-accumulator', ["require", "exports", "core/math/workerconfig", "tslib", "./curve-accumulator", "./poi"], function(require, e, t, i, r, s) {
    "use strict";
    function u(e) {
        return Math.abs(e) < 5e-8
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var f = function(e) {
        function r(t, i, r) {
            var s = e.call(this, t) || this;
            return s.domain = t,
            s.fn = i,
            s.derivative = r,
            s.poiData = {
                zeros: {
                    x: [],
                    y: []
                },
                intercept: {
                    x: [],
                    y: []
                },
                extrema: {
                    x: [],
                    y: []
                }
            },
            s.zeroBuffer = [],
            s.extremumBuffer = [],
            s
        }
        return i.__extends(r, e),
        r.prototype.getPOI = function() {
            return t.pointsOfInterest ? (void 0 !== this.fn && (this.poiData.intercept = this.findIntercept(this.fn)),
            this.poiData) : {
                zeros: {
                    x: [],
                    y: []
                },
                intercept: {
                    x: [],
                    y: []
                },
                extrema: {
                    x: [],
                    y: []
                }
            }
        }
        ,
        r.prototype.addLinearZero = function(e) {
            var t = -e[0] / e[1];
            this.isOutsideDomain(t) || (this.poiData.zeros = {
                x: [t],
                y: [0]
            })
        }
        ,
        r.prototype.addLinearIntercept = function(e) {
            this.isOutsideDomain(0) || (this.poiData.intercept = {
                x: [0],
                y: [e[0]]
            })
        }
        ,
        r.prototype.isOutsideDomain = function(e) {
            return !this.domain || void 0 === this.domain.min || void 0 === this.domain.max || (e < this.domain.min || e > this.domain.max || isNaN(e))
        }
        ,
        r.prototype.addPoint = function(t) {
            0 === this.segment.length && u(t[1]) && (this.poiData.zeros.x.push(t[0]),
            this.poiData.zeros.y.push(t[1])),
            this.updateZeroBuffer(t),
            this.updateExtremumBuffer(t),
            e.prototype.addPoint.call(this, t)
        }
        ,
        r.prototype.updateZeroBuffer = function(e) {
            if (this.fn)
                if (isFinite(e[0]) && isFinite(e[1]))
                    switch (this.zeroBuffer.length) {
                    case 0:
                        if (u(e[1]))
                            return;
                        return void this.zeroBuffer.push(e);
                    case 1:
                        return 0 === e[1] ? void this.zeroBuffer.push(e) : e[1] > 0 != this.zeroBuffer[0][1] > 0 ? ((t = s.bisectZero(this.zeroBuffer[0][0], this.zeroBuffer[0][1], e[0], e[1], this.fn)) && (this.poiData.zeros.x.push(t[0]),
                        this.poiData.zeros.y.push(t[1])),
                        this.zeroBuffer.length = 0,
                        void this.zeroBuffer.push(e)) : (this.zeroBuffer.length = 0,
                        void this.zeroBuffer.push(e));
                    case 2:
                        if (0 === e[1])
                            return;
                        var t;
                        return e[1] > 0 != this.zeroBuffer[0][1] > 0 ? ((t = s.flatCenter(this.zeroBuffer[0][0], this.zeroBuffer[0][1], this.zeroBuffer[1][0], this.zeroBuffer[1][1], e[0], e[1], this.fn)) && (this.poiData.zeros.x.push(t[0]),
                        this.poiData.zeros.y.push(t[1])),
                        this.zeroBuffer.length = 0,
                        void this.zeroBuffer.push(e)) : (this.zeroBuffer.length = 0,
                        void this.zeroBuffer.push(e))
                    }
                else
                    this.zeroBuffer.length = 0
        }
        ,
        r.prototype.updateExtremumBuffer = function(e) {
            if (this.fn)
                if (isFinite(e[0]) && isFinite(e[1]))
                    switch (this.extremumBuffer.length) {
                    case 0:
                        return void this.extremumBuffer.push(e);
                    case 1:
                        return e[1] === this.extremumBuffer[0][1] && (this.extremumBuffer.length = 0),
                        void this.extremumBuffer.push(e);
                    case 2:
                        if (e[1] === this.extremumBuffer[1][1])
                            return void this.extremumBuffer.push(e);
                        if (e[1] > this.extremumBuffer[1][1] != this.extremumBuffer[1][1] > this.extremumBuffer[0][1]) {
                            if (t = this.bisectExtremumUsingDerivative(this.extremumBuffer[0][0], this.extremumBuffer[0][1], this.extremumBuffer[1][0], this.extremumBuffer[1][1], e[0], e[1]))
                                this.poiData.extrema.x.push(t[0]),
                                this.poiData.extrema.y.push(t[1]),
                                !!!s.bisectJump(this.extremumBuffer[0][0], this.extremumBuffer[0][1], t[0], t[1], e[0], e[1], this.fn, this.ytolerance) && t[0] > this.segment[this.segment.length - 2] && (this.pendingPoint = t);
                            return this.extremumBuffer.shift(),
                            void this.extremumBuffer.push(e)
                        }
                        return this.extremumBuffer.shift(),
                        void this.extremumBuffer.push(e);
                    case 3:
                        if (e[1] === this.extremumBuffer[1][1])
                            return;
                        if (e[1] > this.extremumBuffer[1][1] != this.extremumBuffer[1][1] > this.extremumBuffer[0][1]) {
                            var t = void 0
                              , i = .5 * (this.extremumBuffer[1][0] + this.extremumBuffer[2][0])
                              , r = this.fn(i);
                            return (t = r === this.extremumBuffer[1][1] ? s.flatCenter(this.extremumBuffer[0][0], this.extremumBuffer[0][1], this.extremumBuffer[1][0], this.extremumBuffer[1][1], e[0], e[1], this.fn) : this.bisectExtremumUsingDerivative(this.extremumBuffer[1][0], this.extremumBuffer[1][1], i, r, this.extremumBuffer[2][0], this.extremumBuffer[2][1])) && (this.poiData.extrema.x.push(t[0]),
                            this.poiData.extrema.y.push(t[1])),
                            this.extremumBuffer.shift(),
                            this.extremumBuffer.shift(),
                            void this.extremumBuffer.push(e)
                        }
                        return this.extremumBuffer.shift(),
                        this.extremumBuffer.shift(),
                        void this.extremumBuffer.push(e)
                    }
                else
                    this.zeroBuffer.length = 0
        }
        ,
        r.prototype.bisectExtremumUsingDerivative = function(e, t, i, r, u, f) {
            if (this.fn) {
                var h;
                if (this.derivative) {
                    var n = this.derivative(e)
                      , m = this.derivative(u);
                    if (!isNaN(n) && !isNaN(m) && n < 0 != m < 0) {
                        var o = s.bisectZero(e, n, u, m, this.derivative);
                        o && (h = [o[0], this.fn(o[0])])
                    }
                }
                return h || (h = s.bisectExtremum(e, t, i, r, u, f, this.fn)),
                h
            }
        }
        ,
        r.prototype.breakSegment = function() {
            this.zeroBuffer.length = 0,
            this.extremumBuffer.length = 0,
            this.flushPending(),
            this.segment.length > 2 && (this.segments.push(this.segment),
            u(this.segment[this.segment.length - 1]) && (this.poiData.zeros.x.push(this.segment[this.segment.length - 2]),
            this.poiData.zeros.y.push(this.segment[this.segment.length - 1]))),
            this.segment = []
        }
        ,
        r.prototype.findIntercept = function(e) {
            if (!e)
                return {
                    x: [],
                    y: []
                };
            var t = e(0);
            return isFinite(t) ? {
                x: [0],
                y: [e(0)]
            } : {
                x: [],
                y: []
            }
        }
        ,
        r.prototype.finish = function() {
            return {
                segments: this.getSegments(),
                resolved: !0,
                poi: this.getPOI()
            }
        }
        ,
        r
    }(r.Accumulator);
    e.default = f
});
define('core/math/copy-defined-pois', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = function(e) {
        for (var r = [], t = [], u = e.length, n = 0; n < u; n++)
            r.push(e[n][0]),
            t.push(e[n][1]);
        return {
            defined: {
                x: r,
                y: t
            }
        }
    }
});
define('core/math/plotter', ["require", "exports", "tslib", "core/math/distance", "./poi", "./implicit-plotter", "./curve-accumulator", "./poi-finding-accumulator", "core/types/graphmode", "./domaintypes", "core/math/copy-defined-pois"], function(require, e, n, i, t, r, a, o, s, m, c) {
    "use strict";
    function l(e, n) {
        var i = new o.default(n)
          , t = e[0] + n.min * e[1]
          , r = e[0] + n.max * e[1];
        return isFinite(t) && isFinite(r) ? (i.addPoint([n.min, t]),
        i.addPoint([n.max, r]),
        i.addLinearZero(e),
        i.addLinearIntercept(e),
        i.finish()) : i.finish()
    }
    function u(e, i) {
        var t = e(i);
        return {
            segments: [n.__spreadArray(n.__spreadArray([], t), t)],
            resolved: !0
        }
    }
    function d(e, n, r) {
        var a = r.fn
          , o = r.jumpTolerance
          , s = e[0]
          , m = e[1]
          , c = n[0]
          , l = n[1]
          , u = i.mean(s, c)
          , d = a(u);
        return t.bisectJump(s, m, u, d, c, l, a, o)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.errorBranch = void 0,
    e.errorBranch = function(e) {
        return {
            graphMode: s.ERROR,
            error: e,
            segments: []
        }
    }
    ;
    var p = function(e, n, i) {
        var t = i.fn
          , r = i.jumpTolerance
          , a = i.accumulator;
        if (!isFinite(r) || r <= 0)
            return n;
        var o = d(e, n, i);
        if (!o)
            return n;
        for (var s = (n[0] - e[0]) / 10, m = [-s, s], c = n, l = 0; l < m.length; l++) {
            var u = e[0] + m[l]
              , p = t(u);
            isFinite(p) || (u = e[0],
            p = e[1],
            u = e[0],
            p = e[1]);
            var f = n[0] + m[l]
              , h = t(f);
            if (isFinite(h) ? c = [f, h] : (f = n[0],
            h = n[1]),
            d([u, p], [f, h], i)) {
                var v = o[0]
                  , g = o[1];
                return a.addPoint(v),
                a.breakSegment(),
                a.addPoint(g),
                n
            }
        }
        return c
    }
      , f = function(e, n, i) {
        this.derivative = i,
        this.accumulator = new o.default(n,e,i),
        this.fn = e,
        this.jumpTolerance = n.ytolerance || n.tolerance || 0
    };
    function h(e, n, i) {
        var t = n
          , r = e(t);
        return isFinite(r) || (r = e(t = n + i)),
        isFinite(r) || (r = e(t = n - i)),
        [t, r]
    }
    function v(e, n, i) {
        var r, a, o, s, m, c, l, u = new f(e,n,i), d = n.step / 10, v = n.min, g = [l = (r = h(e, v, d))[0], c = r[1]];
        isFinite(c) && u.accumulator.addPoint([l, c]);
        for (var x = Math.ceil((n.max - n.min) / n.step), y = 1; y <= x; y++)
            l = (a = h(e, v = (x - y) / x * n.min + y / x * n.max, d))[0],
            c = a[1],
            isFinite(c) && isFinite(g[1]) ? (l = (o = p(g, [l, c], u))[0],
            c = o[1],
            u.accumulator.addPoint([l, c])) : isFinite(c) && !isFinite(g[1]) ? (m = t.bisectFinite(g[0], g[1], l, c, e)) && (m[0] !== l && u.accumulator.addPoint(m),
            l = (s = p(m, [l, c], u))[0],
            c = s[1],
            u.accumulator.addPoint([l, c])) : !isFinite(c) && isFinite(g[1]) && (m = t.bisectFinite(g[0], g[1], l, c, e)) && ((m = p(g, m, u))[0] !== g[0] && u.accumulator.addPoint(m),
            u.accumulator.breakSegment()),
            g = [l, c];
        return u.accumulator.finish()
    }
    function g(e, n, i, t) {
        var r, a, o, s = n.min, m = n.max - n.min, c = n.xtolerance && n.ytolerance ? Math.min(n.xtolerance, n.ytolerance) : n.tolerance ? n.tolerance : 0, l = Math.floor(m / (Math.PI / i));
        function u(e, n) {
            var r = n % 2 == 0 ? 1 : -1;
            if (!t && -1 === r)
                return !1;
            for (var a = n * (Math.PI / i), o = [s, s + 1, s + 2, s + 3], m = !1, l = 0, u = o.length; l < u; l++) {
                var d = e(o[l])
                  , p = e(o[l] + a);
                if (isFinite(d) && isFinite(p) && (m = !0),
                isFinite(d) !== isFinite(p) || Math.abs(d - r * p) > c)
                    return !1
            }
            return !!m
        }
        for (r = 1; r <= l; r++)
            if (u(e, r)) {
                for (o = r,
                a = 2; a * r <= l; a++)
                    u(e, a * r) || (o = void 0);
                if (o)
                    break
            }
        return o ? o * (Math.PI / i) : null
    }
    function x(e) {
        return [e[1] * Math.cos(e[0]), e[1] * Math.sin(e[0])]
    }
    function y(e, n) {
        return n.map = x,
        v(e, n)
    }
    function F(e, n) {
        if (n.max < n.min)
            return {
                segments: [],
                resolved: !0
            };
        var i, t = new a.Accumulator(n), r = n.min, o = e(r);
        return isFinite(o[0]) && isFinite(o[1]) && t.addPoint(o),
        function(e, n) {
            for (var i = e.min, t = e.max, r = e.step, a = t - i, o = Math.ceil(a / r), s = a / o, m = 0; m < o; m++)
                n(i + m * s);
            n(t)
        }(n, function(n) {
            i = e(n),
            w(e, r, o, n, i, 10, t),
            r = n,
            o = i
        }),
        t.finish()
    }
    function w(e, n, t, r, a, o, s) {
        if (r !== n) {
            var m = s.xtolerance
              , c = s.ytolerance
              , l = s.ztolerance
              , u = i.mean(n, r)
              , d = e(u)
              , p = isFinite(t[0]) && isFinite(t[1]) && (2 === t.length || isFinite(t[2]))
              , f = isFinite(a[0]) && isFinite(a[1]) && (2 === a.length || isFinite(a[2]))
              , h = isFinite(d[0]) && isFinite(d[1]) && (2 === d.length || isFinite(d[2]));
            if (0 === o || u === n || u === r)
                return s.breakSegment(),
                void (f && s.addPoint(a));
            if (p || f)
                if (p === f) {
                    if (p && h && f) {
                        var v = i.pointToSegmentParameter(d[0], d[1], d[2] || 0, t[0], t[1], t[2] || 0, a[0], a[1], a[2] || 0);
                        if (v > .2 && v < .8 && Math.abs(d[0] - (t[0] + v * (a[0] - t[0]))) <= m && Math.abs(d[1] - (t[1] + v * (a[1] - t[1]))) <= c && (2 === t.length || Math.abs(d[2] - (t[2] + v * (a[2] - t[2]))) <= l))
                            return void s.addPoint(a)
                    }
                    t[0] === d[0] && t[1] === d[1] || w(e, n, t, u, d, o - 1, s),
                    a[0] === d[0] && a[1] === d[1] || w(e, u, d, r, a, o - 1, s)
                } else {
                    for (var g = n, x = r, y = t, F = a; n !== u && u !== r; )
                        h == p ? (n = u,
                        t = d,
                        p = h) : (r = u,
                        a = d,
                        f = h),
                        d = e(u = n + (r - n) / 2),
                        h = isFinite(d[0]) && isFinite(d[1]) && (2 === d.length || isFinite(d[2]));
                    p ? (w(e, g, y, n, t, o - 1, s),
                    s.breakSegment()) : (s.breakSegment(),
                    s.addPoint(a),
                    w(e, r, a, x, F, o - 1, s))
                }
        }
    }
    function P(e, n, i) {
        var t = e.viewport.xmin
          , r = e.viewport.xmax
          , a = e.viewport.ymin
          , o = e.viewport.ymax
          , c = n.lineWidth;
        if (c > 3) {
            var l = c * (r - t) / e.screen.width
              , u = c * (o - a) / e.screen.height;
            t -= l,
            r += l,
            a -= u,
            o += u
        }
        var d, p, f = e.trigAngleMultiplier || 1, h = e.oversample || 4, v = 1 / h * (r - t) / e.screen.width, x = 1 / h * (o - a) / e.screen.height, y = n.domainBound;
        switch (n.graphMode) {
        case s.X:
            switch ((d = m.intersectDomains(m.knownDomain([a, o]), y)).type) {
            case "empty":
                return !1;
            case "known":
                a = d.bounds[0],
                o = d.bounds[1]
            }
            p = {
                min: a,
                max: o,
                xtolerance: x,
                ytolerance: v,
                step: x
            };
            break;
        case s.Y:
            switch ((d = m.intersectDomains(m.knownDomain([t, r]), y)).type) {
            case "empty":
                return !1;
            case "known":
                t = d.bounds[0],
                r = d.bounds[1]
            }
            p = {
                min: t,
                max: r,
                xtolerance: v,
                ytolerance: x,
                step: v
            };
            break;
        case s.POLAR:
            if (!n.domain)
                throw new Error("Expected polar graph to have domain");
            if (p = {
                min: n.domain.min,
                max: n.domain.max,
                step: 2 * Math.PI / f / 1e3,
                tolerance: Math.min(v, x)
            },
            !n.domain.isExplicit) {
                var F = g(i, p, f, "=" === n.operator);
                F && (p.max = p.min + F)
            }
            p.step = Math.max(p.step, (p.max - p.min) / 11999);
            break;
        case s.PARAMETRIC:
        case s.PARAMETRIC_CURVE_3D:
            var w = n.domain ? n.domain.min : 0
              , P = n.domain ? n.domain.max : 1
              , M = n.domain ? n.domain.step : .01;
            switch ((d = m.intersectDomains(m.knownDomain([w, P]), y)).type) {
            case "empty":
                return !1;
            case "known":
                w = d.bounds[0],
                P = d.bounds[1]
            }
            p = {
                min: w,
                max: P,
                step: M,
                xtolerance: v,
                ytolerance: x,
                ztolerance: Math.min(v, x)
            };
            break;
        case s.IMPLICIT:
            p = {
                xmin: t,
                xmax: r,
                ymin: a,
                ymax: o,
                xtolerance: v,
                ytolerance: x
            };
            break;
        case s.Z_3D:
            return {
                xmin: -10,
                xmax: 10,
                ymin: -10,
                ymax: 10
            };
        default:
            return !1
        }
        return p
    }
    function M(e, n, i) {
        var t, r, a, o, m = [], c = null;
        switch (i) {
        case s.POLAR:
            c = x;
            break;
        case s.X:
            c = function(e) {
                return [e[1], e[0]]
            }
        }
        for (t = 0; t < e.length; t++)
            for (o = e[t],
            r = 0; r < o.length; r += 2)
                a = [o[r], o[r + 1]],
                c && (a = c(a)),
                m.push(a[0], a[1]);
        for (t = n.length - 1; t >= 0; t--)
            for (r = (o = n[t]).length - 2; r >= 0; r -= 2)
                a = [o[r], o[r + 1]],
                c && (a = c(a)),
                m.push(a[0], a[1]);
        return m
    }
    function b(e) {
        for (var n = [], i = {}, t = 0; t < e.length; t++) {
            var r = e[t]
              , a = r[0]
              , o = r[1];
            isNaN(a) || isNaN(o) ? i[t] = !0 : n.push(r)
        }
        return {
            points: n,
            droppedIndices: i
        }
    }
    e.default = {
        sampleLinear: l,
        sampleXY: v,
        findPiPeriod: g,
        samplePolar: y,
        sampleParametricRecursive: F,
        subsampleParametricRecursive: w,
        validateViewState: function(e) {
            if (!e)
                return !1;
            var n = e.viewport.xmin
              , i = e.viewport.xmax
              , t = e.viewport.ymin
              , r = e.viewport.ymax;
            return !(!isFinite(n) || !isFinite(i) || i <= n) && (!(!isFinite(t) || !isFinite(r) || r <= t) && (!(!isFinite(e.screen.width) || e.screen.width <= 0) && !(!isFinite(e.screen.height) || e.screen.height <= 0)))
        },
        computeDomain: P,
        computeGraphData: function(e) {
            var n, i, t, a = e.viewState, o = e.graphInfo, m = e.compiled, c = e.derivative, d = m.fn, p = P(a, o, d), f = o.graphMode;
            if (p) {
                switch (f) {
                case s.X:
                case s.Y:
                    var h = c ? c.fn : void 0;
                    n = o.isLinear ? l(o.linearCoefficients, p) : v(d, p, h);
                    break;
                case s.POLAR:
                    n = y(d, p);
                    break;
                case s.IMPLICIT:
                    n = r.sampleImplicit(d, p);
                    break;
                case s.PARAMETRIC:
                    p.step || (p.step = (p.max - p.min) / 1e3),
                    n = p.max === p.min ? u(d, p.min) : o.isLinear ? function(e, n) {
                        var i = l(e[0], n)
                          , t = l(e[1], n);
                        return i.segments.length && t.segments.length && 4 === i.segments[0].length && 4 === t.segments[0].length ? {
                            segments: [[i.segments[0][1], t.segments[0][1], i.segments[0][3], t.segments[0][3]]],
                            resolved: !0
                        } : {
                            segments: [],
                            resolved: !0
                        }
                    }(o.linearCoefficients, p) : F(d, p);
                    break;
                case s.PARAMETRIC_CURVE_3D:
                    return p.step || (p.step = (p.max - p.min) / 1e3),
                    n = p.max === p.min ? u(d, p.min) : F(d, p),
                    {
                        graphMode: s.PARAMETRIC_CURVE_3D,
                        segments: n.segments,
                        cacheKey: m.source + ":" + JSON.stringify(p),
                        color: o.color,
                        style: "dummy"
                    };
                case s.Z_3D:
                    return {
                        meshData: function(e, n) {
                            for (var i = e.fn, t = n.xmin, r = n.xmax, a = n.ymin, o = 30, s = (r - t) / 30, m = (n.ymax - a) / o, c = [], l = [], u = [], d = s / 1e3, p = m / 1e3, f = 0; f < 30; f++)
                                for (var h = 0; h < o; h++) {
                                    var v = t + f * s
                                      , g = a + h * m
                                      , x = i(v, g);
                                    c.push(v, g, x);
                                    var y = (i(v + d, g) - x) * p
                                      , F = (i(v, g + p) - x) * d
                                      , w = -d * p
                                      , P = Math.sqrt(y * y + F * F + w * w);
                                    l.push(y / P, F / P, w / P)
                                }
                            for (f = 0; f < 29; f++)
                                for (h = 0; h < 29; h++) {
                                    var M = h * o + f
                                      , b = h * o + f + 1
                                      , I = (h + 1) * o + f
                                      , k = (h + 1) * o + f + 1;
                                    u.push(M, I, b),
                                    u.push(I, k, b)
                                }
                            return {
                                cacheKey: e.source + ":" + JSON.stringify(n),
                                positions: new Float32Array(c),
                                normals: new Float32Array(l),
                                faces: new Int16Array(u)
                            }
                        }(m, p),
                        color: o.color,
                        graphMode: s.Z_3D,
                        poi: {
                            zeros: {
                                x: [],
                                y: []
                            },
                            extrema: {
                                x: [],
                                y: []
                            },
                            intercept: {
                                x: [],
                                y: []
                            }
                        },
                        compiled: m,
                        style: "dummy"
                    };
                default:
                    throw new Error("Programming Error: unexpected graphmode " + f)
                }
                t = n.poi
            } else
                n = {
                    segments: [],
                    resolved: !0
                };
            if ((!t || t.zeros.x.length + t.extrema.x.length + t.intercept.x.length > 250) && (t = {
                zeros: {
                    x: [],
                    y: []
                },
                extrema: {
                    x: [],
                    y: []
                },
                intercept: {
                    x: [],
                    y: []
                }
            }),
            f === s.X)
                for (var g in t)
                    if (t.hasOwnProperty(g)) {
                        var x = g;
                        i = t[x].y,
                        t[x].y = t[x].x,
                        t[x].x = i
                    }
            var w = {
                segments: n.segments,
                resolved: n.resolved,
                graphMode: f,
                color: o.color,
                style: o.lineStyle,
                lineWidth: o.lineWidth,
                lineOpacity: o.lineOpacity,
                listIndex: o.listIndex,
                operator: o.operator,
                poi: t,
                compiled: m
            };
            if (f === s.POLAR) {
                var M = p;
                w.sampledDomain = {
                    min: M.min,
                    max: M.max,
                    step: M.step
                }
            }
            return n.fillSegments && (w.fillSegments = n.fillSegments),
            w
        },
        computeDiscreteGraphData: function(e) {
            var n, i = e.viewState, t = e.graphInfo, r = e.compiled, a = e.maxOverride, o = e.showPoint, m = r.fn, l = P(i, t, m);
            l || (n = {
                segments: [],
                resolved: !0
            });
            var u = l
              , d = u.min
              , p = u.max
              , f = u.step
              , h = b((n = function(e) {
                for (var n = e.fn, i = e.domain, t = i.min, r = i.max, a = Math.floor(t), o = Math.ceil(r), s = [], m = a; m <= o; m++) {
                    var c = n(m);
                    isFinite(m) && isFinite(c) && s.push([m, c])
                }
                return {
                    segments: s,
                    resolved: !0
                }
            }({
                fn: m,
                domain: {
                    min: Math.max(d, 0),
                    max: void 0 !== a ? Math.min(a, p) : p,
                    step: f
                }
            })).segments);
            return {
                segments: [h.points],
                droppedIndices: h.droppedIndices,
                graphMode: s.XYPOINT,
                color: t.color,
                style: t.pointStyle,
                poi: c.default(n.segments),
                showPoint: o
            }
        },
        polygonsFromSegments: function(e, n, t) {
            for (var r = function(e) {
                var n = e[e.length - 1];
                return n[n.length - 2]
            }, a = [], o = 0, s = 0, m = [], c = [], l = -1 / 0, u = -1 / 0; ; ) {
                if (l <= u) {
                    if (o >= n.length)
                        break;
                    c.push(n[o++])
                }
                if (u <= l) {
                    if (s >= e.length)
                        break;
                    m.push(e[s++])
                }
                if (l = r(c),
                u = r(m),
                i.approx(l, u, 4)) {
                    a.push(M(m, c, t)),
                    c = [],
                    m = [];
                    var d = Math.max(l, u);
                    l = d,
                    u = d
                }
            }
            return a
        },
        dropUndefinedPoints: b
    }
});
define('core/math/findIntersections', ['require', 'core/types/graphmode', './plotter', 'parsenodes', 'core/math/distance'], function(require) {
    "use strict";
    var n = require("core/types/graphmode")
      , t = require("./plotter").default
      , e = require("parsenodes")
      , r = require("core/math/distance");
    function i(n) {
        for (var t = [], e = 0; e < n; e++)
            t[e] = {
                x: [],
                y: [],
                intersects: []
            };
        return t
    }
    function o(t, e, r, i) {
        return r === n.X && i === n.X || r === n.Y && i === n.Y ? function(n) {
            return e(n) - t(n)
        }
        : (r === n.X && i === n.Y || r === n.Y && i === n.X) && function(n) {
            return n - e(t(n))
        }
    }
    function s(n, t) {
        t instanceof e.SolvedEquation ? t = t._expression : t instanceof e.OptimizedRegression && (t = t.model);
        var r = []
          , i = [];
        return t instanceof e.DoubleInequality ? e.List.eachArgs(t._expressions, function(n) {
            r.push(n[0].getCompiledFunction()),
            i.push(n[0].isConstant && n[1].isNaN()),
            r.push(n[1].getCompiledFunction()),
            i.push(n[1].isConstant && n[1].isNaN())
        }) : e.List.wrap(t).eachElement(function(n) {
            r.push(n.getCompiledFunction()),
            i.push(n.isConstant && n.isNaN())
        }),
        {
            functions: r,
            skipIntersecting: i
        }
    }
    function p(n, t) {
        n.intersects = Array(n.x.length);
        for (var e = 0; e < n.x.length; e++)
            n.intersects[e] = t
    }
    function u(t, e) {
        if (e === n.X) {
            var r = t.y;
            t.y = t.x,
            t.x = r
        }
    }
    function c(n, t) {
        Array.prototype.push.apply(n.x, t.x),
        Array.prototype.push.apply(n.y, t.y),
        Array.prototype.push.apply(n.intersects, t.intersects)
    }
    function a(n, e, i) {
        var o = t.sampleXY(n, e)
          , s = o.poi.zeros
          , p = o.poi.extrema
          , u = []
          , c = 0
          , a = 0;
        for (c = 0; c < s.x.length; c++) {
            for (; a < p.x.length && p.x[a] < s.x[c]; a++)
                r.approx(p.y[a], 0) && u.push(p.x[a]);
            u.push(s.x[c])
        }
        for (; a < p.x.length; a++)
            r.approx(p.y[a], 0) && u.push(p.x[a]);
        return {
            x: u,
            y: u.map(i)
        }
    }
    return {
        findIntersections: function(n, e, r) {
            var f, h, g, l = n[r], y = l.getGraphInfo(), x = l.getGraphMode();
            try {
                h = i((f = s(l.policy, l.concreteTree)).functions.length),
                g = function(n, t) {
                    var e = [];
                    for (var r in n)
                        if (n.hasOwnProperty(r) && String(r) !== String(t) && n[r].shouldIntersect()) {
                            var i = n[r]
                              , o = s(i.policy, i.concreteTree);
                            e.push({
                                id: r,
                                graphMode: i.getGraphMode(),
                                functions: o.functions,
                                skipIntersecting: o.skipIntersecting
                            })
                        }
                    return e
                }(n, r)
            } catch (n) {
                return i(0)
            }
            if (!g)
                return h;
            for (var d = 0, v = 0; v < g.length; v++)
                for (var m = g[v], I = 0; I < f.functions.length; I++)
                    if (!f.skipIntersecting[I])
                        for (var C = f.functions[I].fn, N = t.computeDomain(e, y, C), X = 0; X < m.functions.length; X++)
                            if (!g[v].skipIntersecting[X]) {
                                var k = o(C, m.functions[X].fn, x, m.graphMode);
                                if (k) {
                                    var A = a(k, N, C);
                                    if ((d += A.x.length) > 100)
                                        return i(f.functions.length);
                                    p(A, m.id),
                                    u(A, x),
                                    c(h[I], A)
                                }
                            }
            return h
        },
        findIndicatorZeros: a
    }
});
define('core/vendor/d3-color', ['require'], function(require) {
    function e(e, t, r) {
        e.prototype = t.prototype = r,
        r.constructor = e
    }
    function t(e, t) {
        var r = Object.create(e.prototype);
        for (var n in t)
            r[n] = t[n];
        return r
    }
    function r() {}
    var n = .7
      , i = 1 / n
      , a = "\\s*([+-]?\\d+)\\s*"
      , o = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
      , s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
      , l = /^#([0-9a-f]{3,8})$/
      , h = new RegExp("^rgb\\(" + [a, a, a] + "\\)$")
      , u = new RegExp("^rgb\\(" + [s, s, s] + "\\)$")
      , g = new RegExp("^rgba\\(" + [a, a, a, o] + "\\)$")
      , c = new RegExp("^rgba\\(" + [s, s, s, o] + "\\)$")
      , d = new RegExp("^hsl\\(" + [o, s, s] + "\\)$")
      , b = new RegExp("^hsla\\(" + [o, s, s, o] + "\\)$")
      , p = {
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
    };
    function m() {
        return this.rgb().formatHex()
    }
    function f() {
        return this.rgb().formatRgb()
    }
    function y(e) {
        var t, r;
        return e = (e + "").trim().toLowerCase(),
        (t = l.exec(e)) ? (r = t[1].length,
        t = parseInt(t[1], 16),
        6 === r ? w(t) : 3 === r ? new v(t >> 8 & 15 | t >> 4 & 240,t >> 4 & 15 | 240 & t,(15 & t) << 4 | 15 & t,1) : 8 === r ? k(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === r ? k(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = h.exec(e)) ? new v(t[1],t[2],t[3],1) : (t = u.exec(e)) ? new v(255 * t[1] / 100,255 * t[2] / 100,255 * t[3] / 100,1) : (t = g.exec(e)) ? k(t[1], t[2], t[3], t[4]) : (t = c.exec(e)) ? k(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = d.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, 1) : (t = b.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, t[4]) : p.hasOwnProperty(e) ? w(p[e]) : "transparent" === e ? new v(NaN,NaN,NaN,0) : null
    }
    function w(e) {
        return new v(e >> 16 & 255,e >> 8 & 255,255 & e,1)
    }
    function k(e, t, r, n) {
        return n <= 0 && (e = t = r = NaN),
        new v(e,t,r,n)
    }
    function N(e) {
        return e instanceof r || (e = y(e)),
        e ? new v((e = e.rgb()).r,e.g,e.b,e.opacity) : new v
    }
    function x(e, t, r, n) {
        return 1 === arguments.length ? N(e) : new v(e,t,r,null == n ? 1 : n)
    }
    function v(e, t, r, n) {
        this.r = +e,
        this.g = +t,
        this.b = +r,
        this.opacity = +n
    }
    function M() {
        return "#" + q(this.r) + q(this.g) + q(this.b)
    }
    function R() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
    }
    function q(e) {
        return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
    }
    function E(e, t, r, n) {
        return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
        new C(e,t,r,n)
    }
    function $(e) {
        if (e instanceof C)
            return new C(e.h,e.s,e.l,e.opacity);
        if (e instanceof r || (e = y(e)),
        !e)
            return new C;
        if (e instanceof C)
            return e;
        var t = (e = e.rgb()).r / 255
          , n = e.g / 255
          , i = e.b / 255
          , a = Math.min(t, n, i)
          , o = Math.max(t, n, i)
          , s = NaN
          , l = o - a
          , h = (o + a) / 2;
        return l ? (s = t === o ? (n - i) / l + 6 * (n < i) : n === o ? (i - t) / l + 2 : (t - n) / l + 4,
        l /= h < .5 ? o + a : 2 - o - a,
        s *= 60) : l = h > 0 && h < 1 ? 0 : s,
        new C(s,l,h,e.opacity)
    }
    function H(e, t, r, n) {
        return 1 === arguments.length ? $(e) : new C(e,t,r,null == n ? 1 : n)
    }
    function C(e, t, r, n) {
        this.h = +e,
        this.s = +t,
        this.l = +r,
        this.opacity = +n
    }
    function j(e, t, r) {
        return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t)
    }
    return e(r, y, {
        copy: function(e) {
            return Object.assign(new this.constructor, this, e)
        },
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: m,
        formatHex: m,
        formatHsl: function() {
            return $(this).formatHsl()
        },
        formatRgb: f,
        toString: f
    }),
    e(v, x, t(r, {
        brighter: function(e) {
            return e = null == e ? i : Math.pow(i, e),
            new v(this.r * e,this.g * e,this.b * e,this.opacity)
        },
        darker: function(e) {
            return e = null == e ? n : Math.pow(n, e),
            new v(this.r * e,this.g * e,this.b * e,this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: M,
        formatHex: M,
        formatRgb: R,
        toString: R
    })),
    e(C, H, t(r, {
        brighter: function(e) {
            return e = null == e ? i : Math.pow(i, e),
            new C(this.h,this.s,this.l * e,this.opacity)
        },
        darker: function(e) {
            return e = null == e ? n : Math.pow(n, e),
            new C(this.h,this.s,this.l * e,this.opacity)
        },
        rgb: function() {
            var e = this.h % 360 + 360 * (this.h < 0)
              , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
              , r = this.l
              , n = r + (r < .5 ? r : 1 - r) * t
              , i = 2 * r - n;
            return new v(j(e >= 240 ? e - 240 : e + 120, i, n),j(e, i, n),j(e < 120 ? e + 240 : e - 120, i, n),this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function() {
            var e = this.opacity;
            return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")")
        }
    })),
    {
        Color: r,
        darker: n,
        brighter: i,
        color: y,
        rgbConvert: N,
        rgb: x,
        Rgb: v,
        hslConvert: $,
        hsl: H
    }
});
define('core/math/policyFourFunction', ["require", "exports"], function(require, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.PolicySingleExpressionFourFunction = n.PolicyFourFunction = void 0;
    var e = function() {
        function n(n) {
            this.singleExpression = n.singleExpression
        }
        return n.prototype.assignmentForbidden = function(n) {
            return "ans" !== n.slice(0, 3)
        }
        ,
        n.prototype.isValidSlider = function(n) {
            return !1
        }
        ,
        n.prototype.sliderVariables = function() {
            return []
        }
        ,
        n.prototype.graphingEnabled = function() {
            return !1
        }
        ,
        n.prototype.ansEnabled = function() {
            return !this.singleExpression
        }
        ,
        n.prototype.dimensionVarsEnabled = function() {
            return !1
        }
        ,
        n.prototype.disabledFeatures = function() {
            return ["Sum", "Product", "Integral", "List", "Derivative", "Piecewise", "Exponent", "PercentOf"]
        }
        ,
        n
    }();
    n.PolicyFourFunction = new e({
        singleExpression: !1
    }),
    n.PolicySingleExpressionFourFunction = new e({
        singleExpression: !0
    })
});
define('core/math/policyScientific', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.PolicySingleExpressionScientific = e.PolicyScientific = void 0;
    var i = function() {
        function e(e) {
            this.singleExpression = e.singleExpression
        }
        return e.prototype.assignmentForbidden = function(e) {
            return this.singleExpression ? "ans" !== e.slice(0, 3) : "tmp" === e.slice(0, 3)
        }
        ,
        e.prototype.isValidSlider = function(e) {
            return !1
        }
        ,
        e.prototype.sliderVariables = function() {
            return []
        }
        ,
        e.prototype.graphingEnabled = function() {
            return !1
        }
        ,
        e.prototype.ansEnabled = function() {
            return !this.singleExpression
        }
        ,
        e.prototype.dimensionVarsEnabled = function() {
            return !1
        }
        ,
        e.prototype.disabledFeatures = function() {
            return this.singleExpression ? ["Sum", "Product", "Integral", "Derivative", "Piecewise", "PercentOf"] : ["Sum", "Product", "Integral", "Derivative", "Piecewise"]
        }
        ,
        e
    }();
    e.PolicyScientific = new i({
        singleExpression: !1
    }),
    e.PolicySingleExpressionScientific = new i({
        singleExpression: !0
    })
});
define('core/math/policyGraphing', ["require", "exports", "./builtinframe", "core/types/graphmode"], function(require, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PolicyGraphing3D = t.PolicyGraphing = void 0;
    var e = function() {
        function t() {}
        return t.prototype.dimensions = function() {
            return 2
        }
        ,
        t.prototype.assignmentForbidden = function(t) {
            return "x" === t || "y" === t || "theta" === t || "index" === t || "dt" === t || "tmp" === t.slice(0, 3) || r.hasOwnProperty(t)
        }
        ,
        t.prototype.isValidSlider = function(t) {
            return "x" === t || "y" === t || "ans" !== t.slice(0, 3) && !this.assignmentForbidden(t)
        }
        ,
        t.prototype.sliderVariables = function(t) {
            var r = this;
            return -1 !== t.indexOf("theta") && (t = t.filter(function(t) {
                return "r" !== t
            })),
            t.filter(function(t) {
                return !r.assignmentForbidden(t) && ("ans" !== t.slice(0, 3) && "_" !== t[0])
            })
        }
        ,
        t.prototype.graphingEnabled = function() {
            return !0
        }
        ,
        t.prototype.ansEnabled = function() {
            return !1
        }
        ,
        t.prototype.dimensionVarsEnabled = function() {
            return !0
        }
        ,
        t.prototype.validRegressionParameter = function(t) {
            return "x" !== t && "y" !== t
        }
        ,
        t.prototype.validLHS = function(t) {
            return "theta" !== t
        }
        ,
        t.prototype.unplottablePolarFunction = function(t, r) {
            return "theta" === t && -1 !== r.indexOf("r")
        }
        ,
        t.prototype.validDoubleInequalitySymbol = function(t) {
            return "x" === t || "y" === t
        }
        ,
        t.prototype.validDoubleInequalityVariables = function(t) {
            return !(t.length > 2) && t.every(this.validDoubleInequalitySymbol)
        }
        ,
        t.prototype.validExpressionVariables = function(t) {
            return 1 === t.length && "x" === t[0]
        }
        ,
        t.prototype.validSolvedVariable = function(t) {
            return "x" === t || "y" === t || "r" === t
        }
        ,
        t.prototype.validImplicitVariables = function(t) {
            switch (t.length) {
            case 0:
                return !0;
            case 1:
                return "x" === t[0] || "y" === t[0] || "r" === t[0];
            case 2:
                return "x" === t[0] && "y" === t[1] || "y" === t[0] && "x" === t[1] || "r" === t[0] && "theta" === t[1] || "theta" === t[0] && "r" === t[1];
            default:
                return !1
            }
        }
        ,
        t.prototype.graphableListVariables = function(t, r) {
            return "x" === t || "y" === t || "r" === t || "x" === r || "y" === r
        }
        ,
        t.prototype.validParametricVariable = function(t) {
            return "t" === t
        }
        ,
        t.prototype.validParametricVariables = function(t) {
            return 1 === t.length && this.validParametricVariable(t[0])
        }
        ,
        t.prototype.validInequalityVariables = function(t) {
            switch (t.length) {
            case 1:
                return "x" === t[0] || "y" === t[0] || "r" === t[0];
            case 2:
                return this.validImplicitVariables(t);
            default:
                return !1
            }
        }
        ,
        t.prototype.validFirstColumnVariable = function(t) {
            return "y" !== t && "r" !== t && "theta" !== t && !t.match(/y_(\d+)/)
        }
        ,
        t.prototype.validActionVariable = function(t) {
            return "dt" === t || "index" === t
        }
        ,
        t.prototype.complicatedPolarImplicit = function(t, r) {
            return "theta" === t || "r" === t && 1 !== r
        }
        ,
        t.prototype.constantGraphMode = function(t) {
            return "x" === t ? n.X : "r" === t ? n.POLAR : n.Y
        }
        ,
        t.prototype.graphMode = function(t, r) {
            var e = r[0];
            return "y" === e || "x" === t ? n.X : "r" === t && "theta" === e ? n.POLAR : n.Y
        }
        ,
        t.prototype.tableableAsConstant = function(t) {
            return "x" !== t && ("r" !== t && "theta" !== t)
        }
        ,
        t.prototype.implicitIndependent = function(t) {
            return "x"
        }
        ,
        t.prototype.implicitDependency = function(t) {
            return 1 !== t.length ? "y" : "y" === t[0] ? "x" : "theta" === t[0] ? "r" : "y"
        }
        ,
        t.prototype.graphableAsConstant = function(t) {
            return "y" === t || "x" === t || "r" === t
        }
        ,
        t.prototype.disabledFeatures = function() {
            return []
        }
        ,
        t
    }()
      , i = function() {
        function t() {}
        return t.prototype.dimensions = function() {
            return 3
        }
        ,
        t.prototype.assignmentForbidden = function(t) {
            return "x" === t || "y" === t || "z" === t || "tmp" === t.slice(0, 3) || r.hasOwnProperty(t)
        }
        ,
        t.prototype.isValidSlider = function(t) {
            return "x" === t || "y" === t || "z" === t || "ans" !== t.slice(0, 3) && !this.assignmentForbidden(t)
        }
        ,
        t.prototype.sliderVariables = function(t) {
            var r = this;
            return t.filter(function(t) {
                return !r.assignmentForbidden(t) && "ans" !== t.slice(0, 3)
            })
        }
        ,
        t.prototype.graphingEnabled = function() {
            return !0
        }
        ,
        t.prototype.ansEnabled = function() {
            return !1
        }
        ,
        t.prototype.dimensionVarsEnabled = function() {
            return !0
        }
        ,
        t.prototype.validRegressionParameter = function(t) {
            return !1
        }
        ,
        t.prototype.validLHS = function(t) {
            return !0
        }
        ,
        t.prototype.unplottablePolarFunction = function(t, r) {
            return !1
        }
        ,
        t.prototype.validDoubleInequalitySymbol = function(t) {
            return !1
        }
        ,
        t.prototype.validDoubleInequalityVariables = function(t) {
            return !1
        }
        ,
        t.prototype.validExpressionVariables = function(t) {
            var r = t.join("");
            return "x" === r || "y" === r || "xy" === r || "yx" === r
        }
        ,
        t.prototype.validSolvedVariable = function(t) {
            return "x" === t || "y" === t || "z" === t
        }
        ,
        t.prototype.validImplicitVariables = function(t) {
            return !1
        }
        ,
        t.prototype.graphableListVariables = function(t, r) {
            return "x" === t || "y" === t || "x" === r || "y" === r
        }
        ,
        t.prototype.validParametricVariable = function(t) {
            return "t" === t
        }
        ,
        t.prototype.validParametricVariables = function(t) {
            return 1 === t.length && this.validParametricVariable(t[0])
        }
        ,
        t.prototype.validInequalityVariables = function(t) {
            return !1
        }
        ,
        t.prototype.validFirstColumnVariable = function(t) {
            return !1
        }
        ,
        t.prototype.validActionVariable = function(t) {
            return "dt" === t || "index" === t
        }
        ,
        t.prototype.complicatedPolarImplicit = function(t, r) {
            return !1
        }
        ,
        t.prototype.constantGraphMode = function(t) {
            return n.Z_3D
        }
        ,
        t.prototype.graphMode = function(t, r) {
            return "z" === t && this.validExpressionVariables(r) ? n.Z_3D : n.NONE
        }
        ,
        t.prototype.tableableAsConstant = function(t) {
            return "x" !== t && "r" !== t
        }
        ,
        t.prototype.implicitIndependent = function(t) {
            return "x"
        }
        ,
        t.prototype.implicitDependency = function(t) {
            if (2 !== t.length)
                return "z";
            var r = t[0] < t[1] ? t[0] + t[1] : t[1] + t[0];
            return "xy" === r ? "z" : "xz" === r ? "y" : "yz" === r ? "x" : "z"
        }
        ,
        t.prototype.graphableAsConstant = function(t) {
            return "z" === t
        }
        ,
        t.prototype.disabledFeatures = function() {
            return []
        }
        ,
        t
    }();
    t.PolicyGraphing = new e,
    t.PolicyGraphing3D = new i
});
define('core/math/frameFourFunction', ['require', 'core/math/builtinframe'], function(require) {
    "use strict";
    var t = require("core/math/builtinframe");
    return {
        getFrame: function(i) {
            var n = {};
            return i.additionalFunctions && -1 !== i.additionalFunctions.indexOf("sqrt") && (n.sqrt = t.sqrt),
            i.width && (n.width = i.width),
            i.height && (n.height = i.height),
            n
        }
    }
});
define('core/math/frameScientific', ['require', 'core/math/builtinframe'], function(require) {
    "use strict";
    var r = require("core/math/builtinframe")
      , t = ["pi", "e", "trigAngleMultiplier"]
      , n = ["sqrt", "nthroot", "abs", "ln", "sin", "cos", "tan", "log", "arcsin", "arccos", "arctan", "mean", "round", "stdev", "stdevp", "nCr", "nPr", "exp", "factorial"];
    function e(r, t) {
        for (var n = 0; n < r.length; n++) {
            var e = r[n];
            if (!t.hasOwnProperty(e))
                throw new Error("Programming Error: key '" + e + "' does not exist in table. Must be one of:\n" + Object.keys(t).join("\n"))
        }
    }
    return e(t, r),
    e(n, r),
    {
        getFrame: function(e) {
            var i = {};
            return t.forEach(function(t) {
                i[t] = r[t]
            }),
            n.forEach(function(t) {
                e.replaceRoundWithReciprocal && "round" === t || (i[t] = r[t])
            }),
            e.trigAngleMultiplier && (i.trigAngleMultiplier = e.trigAngleMultiplier),
            e.width && (i.width = e.width),
            e.height && (i.height = e.height),
            i
        }
    }
});
define('core/math/frameSingleExpressionScientific', ['require', 'core/math/builtinframe'], function(require) {
    "use strict";
    var r = require("core/math/builtinframe")
      , t = ["pi", "e", "trigAngleMultiplier"]
      , i = ["sqrt", "nthroot", "abs", "ln", "sin", "cos", "tan", "log", "arcsin", "arccos", "arctan", "exp", "factorial"];
    function n(r, t) {
        for (var i = 0; i < r.length; i++) {
            var n = r[i];
            if (!t.hasOwnProperty(n))
                throw new Error("Programming Error: key '" + n + "' does not exist in table. Must be one of:\n" + Object.keys(t).join("\n"))
        }
    }
    return n(t, r),
    n(i, r),
    {
        getFrame: function(n) {
            var e = {};
            return t.forEach(function(t) {
                e[t] = r[t]
            }),
            i.forEach(function(t) {
                e[t] = r[t]
            }),
            n.trigAngleMultiplier && (e.trigAngleMultiplier = n.trigAngleMultiplier),
            n.width && (e.width = n.width),
            n.height && (e.height = n.height),
            e
        }
    }
});
define('core/math/frameGraphing', ['require', 'core/math/builtinframe'], function(require) {
    "use strict";
    var t = require("core/math/builtinframe")
      , i = ["csc", "sec", "cot", "arccsc", "arcsec", "arccot", "csch", "sech", "coth", "arccsch", "arcsech", "arccoth", "mad", "cov", "distance", "midpoint"]
      , e = ["erf", "ttest", "tscore", "ittest", "normaldist", "tdist", "poissondist", "binomialdist", "pdf", "cdf", "random", "histogram", "dotplot", "boxplot"]
      , n = ["distance", "midpoint"]
      , o = ["det", "inv", "transpose", "rref", "trace"];
    function r(t, i) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (!i.hasOwnProperty(n))
                throw new Error("Programming Error: key '" + n + "' does not exist in table. Must be one of:\n" + Object.keys(i).join("\n"))
        }
    }
    return r(i, t),
    r(e, t),
    {
        getFrame: function(r) {
            var a, c = {};
            for (a in t)
                t.hasOwnProperty(a) && (!0 !== r.restrictedFunctions || -1 === i.indexOf(a) || !0 === r.forceEnableGeometryFunctions && -1 !== n.indexOf(a)) && (!1 === r.distributions && -1 !== e.indexOf(a) || -1 === o.indexOf(a) && (c[a] = t[a]));
            return r.trigAngleMultiplier && (c.trigAngleMultiplier = r.trigAngleMultiplier),
            r.globalRandomSeed && (c.globalRandomSeed = r.globalRandomSeed),
            r.initialEvaluation && (c.initialEvaluation = r.initialEvaluation),
            r.globalEventCount && (c.globalEventCount = r.globalEventCount),
            r.width && (c.width = r.width),
            r.height && (c.height = r.height),
            c
        }
    }
});
define('core/math/parser/char-codes', ["require", "exports"], function(require, e) {
    "use strict";
    function t(e) {
        return 97 <= e && e <= 122
    }
    function i(e) {
        return 65 <= e && e <= 90
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isWhitespace = e.isSingleQuote = e.isDot = e.isBackslash = e.isLetter = e.isUpperCaseLetter = e.isLowerCaseLetter = e.isDigit = void 0,
    e.isDigit = function(e) {
        return 48 <= e && e <= 57
    }
    ,
    e.isLowerCaseLetter = t,
    e.isUpperCaseLetter = i,
    e.isLetter = function(e) {
        return t(e) || i(e)
    }
    ,
    e.isBackslash = function(e) {
        return 92 === e
    }
    ,
    e.isDot = function(e) {
        return 46 === e
    }
    ,
    e.isSingleQuote = function(e) {
        return 39 === e
    }
    ,
    e.isWhitespace = function(e) {
        if (9 <= e && e <= 13)
            return !0;
        if (8192 <= e && e <= 8202)
            return !0;
        switch (e) {
        case 32:
        case 160:
        case 5760:
        case 8232:
        case 8233:
        case 8239:
        case 8287:
        case 12288:
        case 65279:
            return !0;
        default:
            return !1
        }
    }
});
define('core/math/parser/latex-lexer', ["require", "exports", "./char-codes", "./input-span"], function(require, e, t, n) {
    "use strict";
    function r(e, t, n) {
        return {
            type: e,
            span: t,
            val: n
        }
    }
    function a(e, a, i) {
        for (; t.isWhitespace(e.charCodeAt(a)); )
            a += 1;
        var o = function(e, a) {
            var i = a;
            if (a >= e.length)
                return r("End", n.emptySpanAt(e, a), "");
            var o = e.charCodeAt(a);
            if (t.isDigit(o))
                return r("Digit", u = n.Span(e, i, a + 1), e.charAt(i));
            if (t.isLetter(o))
                return r("Letter", u = n.Span(e, i, a + 1), e.charAt(i));
            if (t.isBackslash(o)) {
                if (a += 1,
                t.isLetter(e.charCodeAt(a))) {
                    for (; t.isLetter(e.charCodeAt(a)); )
                        a += 1;
                    var u = n.Span(e, i, a)
                      , c = n.slice(u);
                    return r(p[c] || "Cmd", u, c)
                }
                return a += 1,
                r("EscapedSymbol", u = n.Span(e, i, a), c = n.slice(u))
            }
            if (t.isSingleQuote(o)) {
                for (a += 1; t.isSingleQuote(e.charCodeAt(a)); )
                    a += 1;
                return "^" === e.charAt(a) ? (a += 1,
                r("Primes^", u = n.Span(e, i, a), c = n.slice(u))) : r("Primes", u = n.Span(e, i, a), c = n.slice(u))
            }
            u = n.Span(e, i, a + 1),
            c = e.charAt(i);
            return r(s[c] || "Symbol", u, c)
        }(e, a);
        return function(e, t, n, r) {
            return {
                input: e,
                prevSpan: t,
                pos: n,
                token: r
            }
        }(e, i, a, o)
    }
    function i(e) {
        return a(e.input, e.token.span.end, e.token.span)
    }
    function o(e) {
        return e.token
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isDone = e.isAt = e.eat = e.peek = e.advance = e.lex = e.LatexToken = e.spanStates = void 0,
    e.spanStates = function(e, t) {
        return n.joinSpans(e.token.span, t.prevSpan)
    }
    ,
    e.LatexToken = r,
    e.lex = function(e) {
        return a(e, 0, n.emptySpanAt(e, 0))
    }
    ,
    e.advance = i,
    e.peek = o,
    e.eat = function(e, t) {
        if (o(e).type !== t)
            throw "Parse Error: expected " + t + ".";
        return i(e)
    }
    ,
    e.isAt = function(e, t) {
        return o(e).type === t
    }
    ,
    e.isDone = function(e) {
        return e.pos >= e.input.length
    }
    ;
    var p = {
        "\\left": "Left",
        "\\right": "Right",
        "\\sqrt": "Sqrt",
        "\\frac": "Frac",
        "\\operatorname": "OperatorName",
        "\\token": "Token"
    }
      , s = {
        "[": "[",
        "]": "]",
        "{": "{",
        "}": "}",
        "^": "^",
        _: "_"
    }
});
define('core/math/parser/latex-node', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Symbol = e.TokenNode = e.OperatorName = e.LeftRight = e.SupSub = e.Frac = e.Sqrt = e.Group = void 0,
    e.Group = function(e, r) {
        return {
            type: "Group",
            span: e,
            args: r
        }
    }
    ,
    e.Sqrt = function(e, r, t) {
        return {
            type: "Sqrt",
            span: e,
            optArg: r,
            arg: t
        }
    }
    ,
    e.Frac = function(e, r, t) {
        return {
            type: "Frac",
            span: e,
            num: r,
            den: t
        }
    }
    ,
    e.SupSub = function(e, r, t, n) {
        return {
            type: "SupSub",
            span: e,
            sup: r,
            sub: t,
            nprimes: n
        }
    }
    ,
    e.LeftRight = function(e, r, t, n) {
        return {
            type: "LeftRight",
            span: e,
            left: r,
            right: t,
            arg: n
        }
    }
    ,
    e.OperatorName = function(e, r) {
        return {
            type: "OperatorName",
            span: e,
            arg: r
        }
    }
    ,
    e.TokenNode = function(e, r) {
        return {
            type: "TokenNode",
            span: e,
            arg: r
        }
    }
    ,
    e.Symbol = function(e, r) {
        return {
            type: "Symbol",
            span: e,
            val: r
        }
    }
});
define('core/math/parser/latex-parser', ["require", "exports", "./latex-lexer", "./input-span", "./latex-node"], function(require, e, r, a, t) {
    "use strict";
    function s(e) {
        switch (e) {
        case "Frac":
            return 2;
        case "^":
        case "_":
        case "Primes^":
        case "Left":
        case "Sqrt":
        case "OperatorName":
        case "Token":
            return 1;
        default:
            return 0
        }
    }
    function n(e, r) {
        return {
            state: e,
            tree: r
        }
    }
    function c(e, a) {
        var s, c = e, p = [];
        e: for (; !r.isDone(e); ) {
            var u = r.peek(e);
            switch (u.type) {
            case "Cmd":
            case "EscapedSymbol":
            case "Letter":
            case "Digit":
            case "Symbol":
            case "[":
            case "{":
            case "^":
            case "_":
            case "Primes":
            case "Primes^":
            case "Left":
            case "Frac":
            case "Sqrt":
            case "OperatorName":
            case "Token":
            case "]":
                if ("]" === u.type && a)
                    break e;
                var i;
                if (e = (s = o(e)).state,
                "Group" === (i = s.tree).type)
                    for (var v = 0, f = i.args; v < f.length; v++) {
                        var d = f[v];
                        p.push(d)
                    }
                else
                    p.push(i);
                break;
            case "}":
            case "Right":
            case "End":
                break e;
            default:
                throw "Unexpected token type " + u.type + "."
            }
        }
        var l = r.spanStates(c, e);
        return n(e, t.Group(l, p))
    }
    function o(e) {
        var a, s = r.peek(e);
        switch (s.type) {
        case "Cmd":
        case "EscapedSymbol":
        case "Letter":
        case "Digit":
        case "Symbol":
            return n(e = r.advance(e), s);
        case "[":
        case "]":
            return n(e = r.advance(e), t.Symbol(s.span, s.val));
        case "{":
            var o;
            return e = (a = c(e = r.advance(e), !1)).state,
            o = a.tree,
            n(e = r.eat(e, "}"), o);
        case "^":
        case "_":
        case "Primes":
        case "Primes^":
            return function(e) {
                var a, s, c, o, u, i = e, v = 0;
                e: for (; !r.isDone(e); ) {
                    var f = r.peek(e);
                    switch (f.type) {
                    case "^":
                        if (e = r.advance(e),
                        o)
                            throw "Parse Error: double superscript.";
                        e = (a = p(e, f)).state,
                        o = a.tree;
                        break;
                    case "_":
                        if (e = r.advance(e),
                        u)
                            throw "Parse Error: double subscript.";
                        e = (s = p(e, f)).state,
                        u = s.tree;
                        break;
                    case "Primes":
                        if (e = r.advance(e),
                        v > 0)
                            throw "Parse Error: double primes.";
                        v = f.val.length;
                        break;
                    case "Primes^":
                        if (e = r.advance(e),
                        v > 0)
                            throw "Parse Error: double primes.";
                        if (o)
                            throw "Parse Error: double superscript";
                        v = f.val.length - 1,
                        e = (c = p(e, f)).state,
                        o = c.tree;
                        break;
                    default:
                        break e
                    }
                }
                var d = r.spanStates(i, e);
                return n(e, t.SupSub(d, o, u, v))
            }(e);
        case "Left":
            return function(e) {
                var a, s = e;
                e = r.eat(e, "Left");
                var o, p = r.peek(e);
                e = r.advance(e),
                a = c(e, !1),
                e = a.state,
                o = a.tree,
                e = r.eat(e, "Right");
                var u = r.peek(e);
                e = r.advance(e);
                var i = r.spanStates(s, e);
                return n(e, t.LeftRight(i, p, u, o))
            }(e);
        case "Frac":
            return function(e) {
                var a, s, c, o, u = e, i = r.peek(e);
                e = r.eat(e, "Frac"),
                a = p(e, i),
                e = a.state,
                c = a.tree,
                s = p(e, i),
                e = s.state,
                o = s.tree;
                var v = r.spanStates(u, e);
                return n(e, t.Frac(v, c, o))
            }(e);
        case "Sqrt":
            return function(e) {
                var a, s, o, u, i = e, v = r.peek(e);
                e = r.eat(e, "Sqrt"),
                r.isAt(e, "[") && (a = function(e) {
                    var a, t;
                    return e = r.eat(e, "["),
                    a = c(e, !0),
                    e = a.state,
                    t = a.tree,
                    n(e = r.eat(e, "]"), t)
                }(e),
                e = a.state,
                o = a.tree);
                s = p(e, v),
                e = s.state,
                u = s.tree;
                var f = r.spanStates(i, e);
                return n(e, t.Sqrt(f, o, u))
            }(e);
        case "OperatorName":
            return function(e) {
                var a, s, c = e, o = r.peek(e);
                e = r.eat(e, "OperatorName"),
                a = p(e, o),
                e = a.state,
                s = a.tree;
                var u = r.spanStates(c, e);
                return n(e, t.OperatorName(u, s))
            }(e);
        case "Token":
            return function(e) {
                var a, s, c = e, o = r.peek(e);
                e = r.eat(e, "Token"),
                a = p(e, o),
                e = a.state,
                s = a.tree;
                var u = r.spanStates(c, e);
                return n(e, t.TokenNode(u, s))
            }(e);
        case "}":
        case "Right":
            throw "Parse Error: unexpected " + s.val + ".";
        case "End":
            throw "Parse Error: unexpected end.";
        default:
            throw "Unexpected token type " + s.type + "."
        }
    }
    function p(e, c) {
        var p, u, i = s(c.type);
        if (i <= 0)
            throw new Error("Programming Error: greediness must be greater than 0.");
        var v = s(r.peek(e).type);
        if (v > 0 && v <= i) {
            var f = a.slice(c.span);
            throw "Parse Error: can't use " + a.slice(r.peek(e).span) + " as argument of " + f + ". Use {}."
        }
        return e = (p = o(e)).state,
        "Group" !== (u = p.tree).type && (u = t.Group(u.span, [u])),
        n(e, u)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.parse = void 0,
    e.parse = function(e) {
        var t = c(r.lex(e), !1)
          , s = t.state
          , n = t.tree;
        if (!r.isDone(s))
            throw "Parse error: unexpected " + a.slice(r.peek(s).span) + ".";
        return n
    }
});
define('core/math/parser/command-aliases', ["require", "exports", "./char-codes"], function(require, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.translateCmd = void 0;
    var s = {
        mcd: "gcd",
        gcf: "gcd",
        mcm: "lcm",
        signum: "sign",
        sgn: "sign",
        stdDevP: "stdevp",
        stddevp: "stdevp",
        stdDev: "stdev",
        stddev: "stdev",
        variance: "var",
        TTest: "ttest",
        TScore: "tscore",
        IndependentTTest: "ittest",
        iTTest: "ittest",
        inverseCdf: "quantile",
        inversecdf: "quantile",
        arsinh: "arcsinh",
        arcosh: "arccosh",
        artanh: "arctanh",
        arcsch: "arccsch",
        arsech: "arcsech",
        arcoth: "arccoth"
    };
    e.translateCmd = function(e) {
        for (var c = 0; t.isBackslash(e.charCodeAt(c)); )
            c += 1;
        return c > 0 && (e = e.slice(c)),
        s[e] || e
    }
});
define('core/math/parser/surface-node', ["require", "exports", "./command-aliases"], function(require, n, t) {
    "use strict";
    function e(n) {
        if ("Subscript" === n.type) {
            if ("Alphanumeric" !== n.args[1].type)
                return !1;
            n = n.args[0]
        }
        switch (n.type) {
        case "Cmd":
        case "Letter":
            return !0;
        default:
            return !1
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.unwrapSeq = n.isDerivative = n.isSuperscriptedIdentifier = n.isIdentifier = n.MixedNumber = n.Alphanumeric = n.Cmd = n.Decimal = n.Letter = n.Juxt = n.RightArrow = n.PercentOf = n.Dot = n.For = n.Ellipsis = n.Colon = n.EmptyRangeEnd = n.EmptyPiecewise = n.Piecewise = n.Product = n.Sum = n.EmptyIntegral = n.Integral = n.Derivative = n.Frac = n.Nthroot = n.Sqrt = n.Seq = n.Prime = n.Superscript = n.Subscript = n.Pipes = n.List = n.Paren = n.Index = n.ImplicitCall = n.Call = n.Bang = n.Div = n.Mul = n.Sub = n.Add = n.Neg = n.Pos = n.Tilde = n.InequalityChain = n.TrailingInequalityPiece = n.Inequality = n.Equals = void 0,
    n.Equals = function(n, t) {
        return {
            type: "Equals",
            span: n,
            args: t
        }
    }
    ,
    n.Inequality = function(n, t, e) {
        return {
            type: "Inequality",
            span: n,
            symbol: t,
            args: e
        }
    }
    ,
    n.TrailingInequalityPiece = function(n, t, e) {
        return {
            type: "TrailingInequalityPiece",
            span: n,
            symbol: t,
            args: e
        }
    }
    ,
    n.InequalityChain = function(n, t, e) {
        return {
            type: "InequalityChain",
            span: n,
            first: t,
            chain: e
        }
    }
    ,
    n.Tilde = function(n, t) {
        return {
            type: "Tilde",
            span: n,
            args: t
        }
    }
    ,
    n.Pos = function(n, t) {
        return {
            type: "Pos",
            span: n,
            args: t
        }
    }
    ,
    n.Neg = function(n, t) {
        return {
            type: "Neg",
            span: n,
            args: t
        }
    }
    ,
    n.Add = function(n, t) {
        return {
            type: "Add",
            span: n,
            args: t
        }
    }
    ,
    n.Sub = function(n, t) {
        return {
            type: "Sub",
            span: n,
            args: t
        }
    }
    ,
    n.Mul = function(n, t) {
        return {
            type: "Mul",
            span: n,
            args: t
        }
    }
    ,
    n.Div = function(n, t) {
        return {
            type: "Div",
            span: n,
            args: t
        }
    }
    ,
    n.Bang = function(n, t) {
        return {
            type: "Bang",
            span: n,
            args: t
        }
    }
    ,
    n.Call = function(n, t) {
        return {
            type: "Call",
            span: n,
            args: t
        }
    }
    ,
    n.ImplicitCall = function(n, t) {
        return {
            type: "ImplicitCall",
            span: n,
            args: t
        }
    }
    ,
    n.Index = function(n, t) {
        return {
            type: "Index",
            span: n,
            args: t
        }
    }
    ,
    n.Paren = function(n, t) {
        return {
            type: "Paren",
            span: n,
            args: t
        }
    }
    ,
    n.List = function(n, t) {
        return {
            type: "List",
            span: n,
            args: t
        }
    }
    ,
    n.Pipes = function(n, t) {
        return {
            type: "Pipes",
            span: n,
            args: t
        }
    }
    ,
    n.Subscript = function(n, t) {
        return {
            type: "Subscript",
            span: n,
            args: t
        }
    }
    ,
    n.Superscript = function(n, t) {
        return {
            type: "Superscript",
            span: n,
            args: t
        }
    }
    ,
    n.Prime = function(n, t, e) {
        return {
            type: "Prime",
            span: n,
            nprimes: t,
            args: e
        }
    }
    ,
    n.Seq = function(n, t) {
        return {
            type: "Seq",
            span: n,
            args: t
        }
    }
    ,
    n.Sqrt = function(n, t) {
        return {
            type: "Sqrt",
            span: n,
            args: t
        }
    }
    ,
    n.Nthroot = function(n, t) {
        return {
            type: "Nthroot",
            span: n,
            args: t
        }
    }
    ,
    n.Frac = function(n, t) {
        return {
            type: "Frac",
            span: n,
            args: t
        }
    }
    ,
    n.Derivative = function(n, t) {
        return {
            type: "Derivative",
            span: n,
            args: t
        }
    }
    ,
    n.Integral = function(n, t) {
        return {
            type: "Integral",
            span: n,
            args: t
        }
    }
    ,
    n.EmptyIntegral = function(n, t) {
        return {
            type: "EmptyIntegral",
            span: n,
            args: t
        }
    }
    ,
    n.Sum = function(n, t) {
        return {
            type: "Sum",
            span: n,
            args: t
        }
    }
    ,
    n.Product = function(n, t) {
        return {
            type: "Product",
            span: n,
            args: t
        }
    }
    ,
    n.Piecewise = function(n, t) {
        return {
            type: "Piecewise",
            span: n,
            args: t
        }
    }
    ,
    n.EmptyPiecewise = function(n) {
        return {
            type: "EmptyPiecewise",
            span: n
        }
    }
    ,
    n.EmptyRangeEnd = function(n) {
        return {
            type: "EmptyRangeEnd",
            span: n
        }
    }
    ,
    n.Colon = function(n, t) {
        return {
            type: "Colon",
            span: n,
            args: t
        }
    }
    ,
    n.Ellipsis = function(n, t) {
        return {
            type: "Ellipsis",
            span: n,
            args: t
        }
    }
    ,
    n.For = function(n, t) {
        return {
            type: "For",
            span: n,
            args: t
        }
    }
    ,
    n.Dot = function(n, t) {
        return {
            type: "Dot",
            span: n,
            args: t
        }
    }
    ,
    n.PercentOf = function(n, t) {
        return {
            type: "PercentOf",
            span: n,
            args: t
        }
    }
    ,
    n.RightArrow = function(n, t) {
        return {
            type: "RightArrow",
            span: n,
            args: t
        }
    }
    ,
    n.Juxt = function(n, t) {
        return {
            type: "Juxt",
            span: n,
            args: t
        }
    }
    ,
    n.Letter = function(n, t) {
        return {
            type: "Letter",
            span: n,
            val: t
        }
    }
    ,
    n.Decimal = function(n, t) {
        return {
            type: "Decimal",
            span: n,
            val: t
        }
    }
    ,
    n.Cmd = function(n, e) {
        return {
            type: "Cmd",
            span: n,
            val: t.translateCmd(e)
        }
    }
    ,
    n.Alphanumeric = function(n, t) {
        return {
            type: "Alphanumeric",
            span: n,
            val: t
        }
    }
    ,
    n.MixedNumber = function(n, t, e, r) {
        return {
            type: "MixedNumber",
            span: n,
            whole: t,
            num: e,
            den: r
        }
    }
    ,
    n.isIdentifier = e,
    n.isSuperscriptedIdentifier = function(n) {
        return "Superscript" === n.type && e(n.args[0])
    }
    ,
    n.isDerivative = function(n, t) {
        if ("Letter" !== n.type || "d" !== n.val)
            return !1;
        if ("Juxt" !== t.type)
            return !1;
        var r = t.args
          , i = r[0]
          , a = r[1];
        return "Letter" === i.type && "d" === i.val && e(a)
    }
    ,
    n.unwrapSeq = function(n) {
        return "Seq" === n.type ? n.args : [n]
    }
});
define('core/math/parser/surface-node-error', ["require", "exports"], function(require, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TokenWithSubscript = t.UnexpectedFor = t.AdjacentNumbers = t.FractionEmpty = t.FractionMissingDenominator = t.FractionMissingNumerator = t.DifferentialWithSuperscript = t.IntegralMissingDifferential = t.DerivativeMissingBody = t.IntegralMissingBody = t.ProductMissingBody = t.SumMissingBody = t.IntegralMissingBound = t.MissingBound = t.ProductMissingBound = t.SumMissingBound = t.UnexpectedPrime = t.SuperscriptWithPrime = t.PrimeWithoutParen = t.PercentMissingOf = t.FunctionMissingArgument = t.UnexpectedSubscript = t.InvalidSubscript = t.InvalidOperatorName = t.UnrecognizedSymbol = t.UnexpectedDifferential = t.UnexpectedCloseDelimiter = t.MissingCloseDelimiter = t.UnaryOperatorMissingLeft = t.UnaryOperatorMissingRight = t.BinaryOperatorMissingLeft = t.BinaryOperatorMissingRight = t.UnexpectedEnd = t.EmptyRadicalIndex = t.EmptyPipe = t.EmptySquareBracket = t.EmptyRadical = t.EmptySuperscript = t.EmptySubscript = t.EmptyGroup = t.EmptyInput = t.UnexpectedParseError = t.Err = void 0,
    t.Err = function(t, n) {
        return {
            type: "Err",
            span: t,
            error: n
        }
    }
    ,
    t.UnexpectedParseError = function() {
        return {
            type: "UnexpectedParseError"
        }
    }
    ,
    t.EmptyInput = function() {
        return {
            type: "EmptyInput"
        }
    }
    ,
    t.EmptyGroup = function() {
        return {
            type: "EmptyGroup"
        }
    }
    ,
    t.EmptySubscript = function() {
        return {
            type: "EmptySubscript"
        }
    }
    ,
    t.EmptySuperscript = function() {
        return {
            type: "EmptySuperscript"
        }
    }
    ,
    t.EmptyRadical = function() {
        return {
            type: "EmptyRadical"
        }
    }
    ,
    t.EmptySquareBracket = function() {
        return {
            type: "EmptySquareBracket"
        }
    }
    ,
    t.EmptyPipe = function() {
        return {
            type: "EmptyPipe"
        }
    }
    ,
    t.EmptyRadicalIndex = function() {
        return {
            type: "EmptyRadicalIndex"
        }
    }
    ,
    t.UnexpectedEnd = function() {
        return {
            type: "UnexpectedEnd"
        }
    }
    ,
    t.BinaryOperatorMissingRight = function(t) {
        return {
            type: "BinaryOperatorMissingRight",
            val: t
        }
    }
    ,
    t.BinaryOperatorMissingLeft = function(t) {
        return {
            type: "BinaryOperatorMissingLeft",
            val: t
        }
    }
    ,
    t.UnaryOperatorMissingRight = function(t) {
        return {
            type: "UnaryOperatorMissingRight",
            val: t
        }
    }
    ,
    t.UnaryOperatorMissingLeft = function(t) {
        return {
            type: "UnaryOperatorMissingLeft",
            val: t
        }
    }
    ,
    t.MissingCloseDelimiter = function(t, n) {
        return {
            type: "MissingCloseDelimiter",
            open: t,
            close: n
        }
    }
    ,
    t.UnexpectedCloseDelimiter = function(t, n) {
        return {
            type: "UnexpectedCloseDelimiter",
            open: t,
            close: n
        }
    }
    ,
    t.UnexpectedDifferential = function() {
        return {
            type: "UnexpectedDifferential"
        }
    }
    ,
    t.UnrecognizedSymbol = function(t) {
        return {
            type: "UnrecognizedSymbol",
            val: t
        }
    }
    ,
    t.InvalidOperatorName = function(t) {
        return {
            type: "InvalidOperatorName",
            val: t
        }
    }
    ,
    t.InvalidSubscript = function(t) {
        return {
            type: "InvalidSubscript",
            val: t
        }
    }
    ,
    t.UnexpectedSubscript = function(t) {
        return {
            type: "UnexpectedSubscript",
            base: t
        }
    }
    ,
    t.FunctionMissingArgument = function(t) {
        return {
            type: "FunctionMissingArgument",
            val: t
        }
    }
    ,
    t.PercentMissingOf = function() {
        return {
            type: "PercentMissingOf"
        }
    }
    ,
    t.PrimeWithoutParen = function() {
        return {
            type: "PrimeWithoutParen"
        }
    }
    ,
    t.SuperscriptWithPrime = function() {
        return {
            type: "SuperscriptWithPrime"
        }
    }
    ,
    t.UnexpectedPrime = function() {
        return {
            type: "UnexpectedPrime"
        }
    }
    ,
    t.SumMissingBound = function() {
        return {
            type: "SumMissingBound"
        }
    }
    ,
    t.ProductMissingBound = function() {
        return {
            type: "ProductMissingBound"
        }
    }
    ,
    t.MissingBound = function() {
        return {
            type: "MissingBound"
        }
    }
    ,
    t.IntegralMissingBound = function() {
        return {
            type: "IntegralMissingBound"
        }
    }
    ,
    t.SumMissingBody = function() {
        return {
            type: "SumMissingBody"
        }
    }
    ,
    t.ProductMissingBody = function() {
        return {
            type: "ProductMissingBody"
        }
    }
    ,
    t.IntegralMissingBody = function() {
        return {
            type: "IntegralMissingBody"
        }
    }
    ,
    t.DerivativeMissingBody = function() {
        return {
            type: "DerivativeMissingBody"
        }
    }
    ,
    t.IntegralMissingDifferential = function() {
        return {
            type: "IntegralMissingDifferential"
        }
    }
    ,
    t.DifferentialWithSuperscript = function() {
        return {
            type: "DifferentialWithSuperscript"
        }
    }
    ,
    t.FractionMissingNumerator = function() {
        return {
            type: "FractionMissingNumerator"
        }
    }
    ,
    t.FractionMissingDenominator = function() {
        return {
            type: "FractionMissingDenominator"
        }
    }
    ,
    t.FractionEmpty = function() {
        return {
            type: "FractionEmpty"
        }
    }
    ,
    t.AdjacentNumbers = function(t) {
        return {
            type: "AdjacentNumbers",
            args: t
        }
    }
    ,
    t.UnexpectedFor = function() {
        return {
            type: "UnexpectedFor"
        }
    }
    ,
    t.TokenWithSubscript = function() {
        return {
            type: "TokenWithSubscript"
        }
    }
});
define('core/math/parser/expression-token-tables', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.allTokenTypes = e.rightTable = e.leftTable = e.escapedSymbolTable = e.symbolTable = e.commandTable = void 0;
    e.commandTable = {
        "\\lt": "<",
        "\\gt": ">",
        "\\le": "<=",
        "\\ge": ">=",
        "\\leq": "<=",
        "\\geq": ">=",
        "\\ldots": "...",
        "\\sim": "~",
        "\\to": "->",
        "\\cdot": "*",
        "\\times": "*",
        "\\div": "/",
        "\\ln": "Ln",
        "\\log": "Log",
        "\\int": "Int",
        "\\sum": "Sum",
        "\\prod": "Prod",
        "\\backslash": "Err",
        "\\for": "for"
    };
    for (var a = 0, l = ["sin", "cos", "tan", "cot", "sec", "csc"]; a < l.length; a++) {
        var o = l[a];
        e.commandTable["\\" + o] = "Trig",
        e.commandTable["\\" + o + "h"] = "Trig",
        e.commandTable["\\arc" + o] = "Trig",
        e.commandTable["\\arc" + o + "h"] = "Trig",
        e.commandTable["\\ar" + o + "h"] = "Trig"
    }
    e.symbolTable = {
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
        "!": "!",
        "(": "(",
        ")": ")",
        "[": "[",
        "]": "]",
        ",": ",",
        "...": "...",
        ":": ":",
        "=": "=",
        ">=": ">=",
        "<=": "<=",
        ">": ">",
        "<": "<",
        "~": "~",
        ".": "."
    },
    e.escapedSymbolTable = {
        "\\{": "\\{",
        "\\}": "\\}",
        "\\%": "%"
    },
    e.leftTable = {
        "|": "(|",
        "\\{": "\\{",
        "[": "[",
        "(": "("
    },
    e.rightTable = {
        "|": "|)",
        "\\}": "\\}",
        "]": "]",
        ")": ")"
    },
    e.allTokenTypes = Object.keys({
        "+": !0,
        "-": !0,
        "*": !0,
        "/": !0,
        "!": !0,
        "(": !0,
        ")": !0,
        "\\{": !0,
        "\\}": !0,
        "(|": !0,
        "|)": !0,
        "[": !0,
        "]": !0,
        ",": !0,
        "...": !0,
        ":": !0,
        "=": !0,
        ">": !0,
        "<": !0,
        ">=": !0,
        "<=": !0,
        "->": !0,
        "~": !0,
        "%": !0,
        ".": !0,
        for: !0,
        Letter: !0,
        Decimal: !0,
        Cmd: !0,
        TokenNode: !0,
        Differential: !0,
        End: !0,
        Trig: !0,
        Ln: !0,
        Log: !0,
        Int: !0,
        Sum: !0,
        Prod: !0,
        Err: !0
    })
});
define('core/math/parser/expression-lexer', ["require", "exports", "./expression-token-tables", "./input-span", "./input-span", "./surface-node"], function(require, e, n, r, t, a) {
    "use strict";
    function s(e, n, r, t, a, s, i, p) {
        return {
            opts: e,
            input: n,
            prevSpan: r,
            startIndex: t,
            endIndex: a,
            token: s,
            mode: i,
            parent: p
        }
    }
    function i(e, n, r) {
        return {
            type: e,
            span: n,
            val: r
        }
    }
    function p(e, r, t, a, p, u) {
        var f = r.args;
        if (t > f.length && u)
            return o(u, a);
        var v = g(r, t = m(f, t), p)
          , d = v.token
          , y = v.endIndex;
        if ("End" === d.type && u) {
            var S = u.input.args[u.startIndex];
            if ("LeftRight" === S.type) {
                var h = S.right;
                return s(e, r, a, t, y, i(n.rightTable[h.val] || "Err", h.span, h.val), p, u)
            }
        } else
            "Int" === d.type ? p = l(p) : "Differential" === d.type && (p = c(p));
        return s(e, r, a, t, y, d, p, u)
    }
    function o(e, n) {
        var r = e.input
          , t = e.endIndex
          , a = e.mode
          , s = e.parent;
        return p(e.opts, r, t + 1, n, a, s)
    }
    function u(e) {
        return e.token
    }
    function l(e) {
        return {
            type: "integral",
            parent: e
        }
    }
    function c(e) {
        if (!e || "integral" !== e.type)
            throw new Error("Programming Error: expected lexer to be in integral mode.");
        return e.parent
    }
    function f(e, n) {
        return {
            token: n,
            endIndex: e
        }
    }
    function g(e, t, a) {
        if (t >= e.args.length)
            return f(t, i("End", r.emptySpanAt(e.span.input, e.span.end), ""));
        var s = e.args[t];
        switch (s.type) {
        case "Sqrt":
        case "Frac":
        case "SupSub":
            return f(t, s);
        case "Letter":
            if (!a || "integral" !== a.type)
                return f(t, s);
            if ("d" != s.val)
                return f(t, s);
            var p = g(e, t + 1, a)
              , o = p.endIndex
              , u = p.token;
            return "Letter" === u.type || "Cmd" === u.type ? f(o, function(e, n) {
                return {
                    type: "Differential",
                    span: e,
                    val: n
                }
            }(r.joinSpans(s.span, u.span), u.val)) : f(t, s);
        case "LeftRight":
            var l = s.left;
            return f(t, i(n.leftTable[l.val] || "Err", r.joinSpans(s.span, l.span), l.val));
        case "OperatorName":
            for (var c = [], d = 0, h = s.arg.args; d < h.length; d++) {
                var b = h[d];
                if ("Letter" !== b.type)
                    return f(t, i("Err", s.span, r.slice(s.arg.span)));
                c.push(b.val)
            }
            var k = "\\" + c.join("");
            return f(t, i(n.commandTable[k] || "Cmd", s.span, k));
        case "TokenNode":
            var x = "$";
            if (0 === s.arg.args.length)
                return f(t, i("Err", s.span, r.slice(s.arg.span)));
            for (var j = 0, E = s.arg.args; j < E.length; j++) {
                var I = E[j];
                if ("Digit" !== I.type)
                    return f(t, i("Err", s.span, r.slice(s.arg.span)));
                x += I.val
            }
            return f(t, i("TokenNode", s.span, x));
        case "Cmd":
            return f(t, i(n.commandTable[s.val] || "Cmd", s.span, s.val));
        case "EscapedSymbol":
            return f(t, i(n.escapedSymbolTable[s.val] || "Err", s.span, s.val));
        case "Symbol":
            return function(e, t, a) {
                switch (a.val) {
                case ".":
                    return function(e, t) {
                        var a = e.args[t];
                        if ("Symbol" !== a.type || "." !== a.val)
                            throw new Error("Programming Error: expected '.'");
                        if (t + 2 < e.args.length && y(e.args[t + 1]) && y(e.args[t + 2])) {
                            var s = r.joinSpans(a.span, e.args[t + 2].span);
                            return f(t + 2, i("...", s, r.slice(s)))
                        }
                        var p = m(e.args, t + 1);
                        if (p < e.args.length && "Digit" === e.args[p].type)
                            return v(e, t);
                        var o = n.symbolTable[a.val] || "Err";
                        return f(t, i(o, a.span, a.val))
                    }(e, t);
                case "-":
                    if ((s = e.args[t + 1]) && S(s, ">"))
                        return f(t + 1, i("->", r.joinSpans(a.span, s.span), "->"));
                    break;
                case "<":
                    if ((s = e.args[t + 1]) && S(s, "="))
                        return f(t + 1, i("<=", r.joinSpans(a.span, s.span), "<="));
                    break;
                case ">":
                    var s;
                    if ((s = e.args[t + 1]) && S(s, "="))
                        return f(t + 1, i(">=", r.joinSpans(a.span, s.span), ">="))
                }
                var p = n.symbolTable[a.val] || "Err";
                return f(t, i(p, a.span, a.val))
            }(e, t, s);
        case "Digit":
            return v(e, t);
        default:
            throw "Unexpected atom " + s.type + "."
        }
    }
    function v(e, n) {
        var t = function(e, n) {
            for (var t = e.args, s = t[n].span, i = []; n < t.length; n++) {
                var p = m(t, n);
                if (p >= t.length)
                    break;
                if ("Digit" !== (S = t[p]).type)
                    break;
                n = p,
                i.push(S.val)
            }
            if ((n = m(t, n)) >= t.length)
                return;
            var o = t[n];
            if ("Frac" !== o.type)
                return;
            for (var u = [], l = [], c = 0, g = o.num.args; c < g.length; c++) {
                if (!d(S = g[c])) {
                    if ("Digit" !== S.type)
                        return;
                    u.push(S.val)
                }
            }
            for (var v = 0, y = o.den.args; v < y.length; v++) {
                var S;
                if (!d(S = y[v])) {
                    if ("Digit" !== S.type)
                        return;
                    l.push(S.val)
                }
            }
            var h = r.joinSpans(s, o.span);
            return f(n, a.MixedNumber(h, i.join(""), u.join(""), l.join("")))
        }(e, n);
        if (t)
            return t;
        for (var s = e.args, p = e.args[n].span, o = [], u = !1, l = !1; n < s.length; n++) {
            var c = m(s, n);
            if (c >= s.length)
                break;
            var g = s[c];
            if ("Digit" === g.type)
                n = c,
                u = !0,
                o.push(g.val);
            else {
                if (l || !y(g))
                    break;
                if (c + 1 < s.length && y(e.args[c + 1]))
                    break;
                n = c,
                l = !0,
                o.push(".")
            }
        }
        if (!u)
            throw new Error("Programming Error: decimals must have at least one digit.");
        return f(n - 1, i("Decimal", r.joinSpans(p, e.args[n - 1].span), o.join("")))
    }
    function d(e) {
        switch (e.type) {
        case "Sqrt":
        case "Frac":
        case "SupSub":
        case "LeftRight":
        case "OperatorName":
        case "TokenNode":
        case "Symbol":
        case "Letter":
        case "Digit":
            return !1;
        case "Cmd":
            return "\\space" === e.val;
        case "EscapedSymbol":
            return "\\ " === e.val || "\\:" === e.val || "\\," === e.val || "\\;" === e.val;
        default:
            throw "Unexpected atom " + e.type + "."
        }
    }
    function m(e, n) {
        for (; n < e.length && d(e[n]); )
            n += 1;
        return n
    }
    function y(e) {
        return S(e, ".")
    }
    function S(e, n) {
        return "Symbol" === e.type && e.val === n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.didAdvance = e.isDone = e.isAt = e.endIntegral = e.beginIntegral = e.peek = e.advance = e.lexAt = e.lex = e.emptySpanAtState = e.joinState = e.spanStates = e.Span = void 0,
    Object.defineProperty(e, "Span", {
        enumerable: !0,
        get: function() {
            return t.Span
        }
    }),
    e.spanStates = function(e, n) {
        return r.joinSpans(e.token.span, n.prevSpan)
    }
    ,
    e.joinState = function(e, n) {
        return r.joinSpans(e, n.prevSpan)
    }
    ,
    e.emptySpanAtState = function(e) {
        return r.emptySpanAt(e.token.span.input, e.token.span.start)
    }
    ,
    e.lex = function(e, n) {
        return p(n, e, 0, r.emptySpanAt(e.span.input, e.span.start), undefined, undefined)
    }
    ,
    e.lexAt = p,
    e.advance = function(e) {
        var n = e.input.args[e.startIndex]
          , r = e.token.span;
        return n && "LeftRight" === n.type ? p(e.opts, n.arg, 0, r, e.mode, e) : o(e, r)
    }
    ,
    e.peek = u,
    e.beginIntegral = l,
    e.endIntegral = c,
    e.isAt = function(e, n) {
        return u(e).type === n
    }
    ,
    e.isDone = function(e) {
        return e.startIndex >= e.input.args.length
    }
    ,
    e.didAdvance = function(e, n) {
        return n.token.span.start > e.token.span.start
    }
});
define('core/math/parser/precspec', ["require", "exports", "./expression-token-tables"], function(require, e, r) {
    "use strict";
    function t(e, t) {
        for (var n = 0, i = r.allTokenTypes; n < i.length; n++) {
            var o = i[n];
            if (void 0 === t[o])
                throw new Error("Programming Error: token " + o + " must be a assigned a " + e + " precedence")
        }
    }
    function n(e, r, t, n) {
        if (void 0 !== r[t])
            throw new Error("Programming Error: duplicate " + e + " entry for token " + t + ".");
        r[t] = n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.precSpec = e.ra = e.la = e.r = e.l = e.initial = void 0,
    e.initial = function(e) {
        return {
            type: "initial",
            tokenType: e
        }
    }
    ,
    e.l = function(e) {
        return {
            type: "l",
            tokenType: e
        }
    }
    ,
    e.r = function(e) {
        return {
            type: "r",
            tokenType: e
        }
    }
    ,
    e.la = function(e) {
        return {
            type: "la",
            tokenType: e
        }
    }
    ,
    e.ra = function(e) {
        return {
            type: "ra",
            tokenType: e
        }
    }
    ,
    e.precSpec = function(e) {
        for (var r = {}, i = {}, o = {}, a = 0; a < e.length; a++)
            for (var c = 0, l = e[a]; c < l.length; c++) {
                var u = l[c]
                  , f = u.type
                  , p = u.tokenType;
                switch (f) {
                case "initial":
                    n("initial", r, p, a);
                    break;
                case "l":
                    n("left", i, p, a);
                    break;
                case "r":
                    n("right", o, p, a);
                    break;
                case "la":
                    n("left", i, p, a),
                    n("right", o, p, a);
                    break;
                case "ra":
                    n("left", i, p, a),
                    n("right", o, p, a - 1)
                }
            }
        function s(e) {
            return o[e]
        }
        return t("left", i),
        t("right", o),
        {
            rightPrec: s,
            leftPrec: function(e) {
                return i[e]
            },
            initialPrec: function(e) {
                var t = r[e];
                return void 0 === t ? s(e) : t
            }
        }
    }
});
define('core/math/inverses', [], function() {
    "use strict";
    var c = {};
    return ["sin", "cos", "tan", "cot", "sec", "csc", "sinh", "cosh", "tanh", "coth", "sech", "csch"].forEach(function(n) {
        c[n] = "arc" + n,
        c["arc" + n] = n
    }),
    c
});
define('core/math/parser/lower', ["require", "exports", "core/math/inverses", "tslib", "core/math/errormsg", "./input-span", "./surface-node", "../maybe-rational"], function(require, e, r, t, a, n, s, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isLegalAssignmentLhs = e.isFunctionSignature = e.lower = void 0;
    var c = 0;
    function u(e, r) {
        for (var t = [], a = 0; a < r.length; a++)
            t.push(d(e, r[a]));
        return t
    }
    function o(e) {
        if ("Call" === e.type) {
            var r = e.args
              , t = r[0]
              , a = r[1]
              , n = s.unwrapSeq(a);
            return s.isIdentifier(t) && n.every(s.isIdentifier) ? {
                base: t,
                args: n
            } : void 0
        }
    }
    function p(e) {
        return s.isIdentifier(e)
    }
    function l(e) {
        if ("Paren" !== e.type)
            return !1;
        var r = e.args[0];
        return "Seq" === r.type && 2 === r.args.length
    }
    function d(e, r) {
        return e.setInput(g(e, r), r.span)
    }
    function g(e, r) {
        var t = e.nodes;
        switch (r.type) {
        case "Pos":
            return g(e, r.args[0]);
        case "Neg":
            for (var o = -1, p = r.args[0]; ; )
                if ("Pos" === p.type || "Paren" === p.type && !l(p))
                    p = p.args[0];
                else {
                    if ("Neg" !== p.type)
                        break;
                    p = p.args[0],
                    o *= -1
                }
            switch (p.type) {
            case "Decimal":
                var P = w(p);
                return t.Constant(-1 === o ? i.neg(P) : P);
            case "MixedNumber":
                P = S(p);
                return t.MixedNumber(-1 === o ? i.neg(P) : P);
            default:
                return -1 === o ? t.Negative([d(e, p)]) : g(e, p)
            }
        case "Add":
            return t.Add(u(e, r.args));
        case "Sub":
            return t.Subtract(u(e, r.args));
        case "Mul":
            return t.Multiply(u(e, r.args));
        case "Div":
            return t.Divide(u(e, r.args));
        case "Bang":
            var M = r.args[0];
            return "Call" === M.type ? t.FunctionFactorial(u(e, M.args)) : t.FunctionCall("\\factorial", u(e, r.args));
        case "PercentOf":
            return t.PercentOf(u(e, r.args));
        case "Call":
            return m(e, r);
        case "ImplicitCall":
            return function(e) {
                var r = e.args
                  , t = r[0]
                  , n = r[1];
                "Superscript" === t.type && (t = t.args[0]);
                if ("Cmd" === t.type && "logbase" === t.val && "Seq" === n.type && 2 === n.args.length) {
                    if (!I(n.args[0]))
                        throw a.badImplicitCall("log")
                } else if (!I(n)) {
                    if ("Cmd" === t.type)
                        throw a.badImplicitCall(t.val);
                    throw a.parseError()
                }
            }(r),
            m(e, r);
        case "Dot":
            var D = r.args[1]
              , A = u(e, r.args)
              , L = A[0]
              , F = A[1];
            if (C(D)) {
                var B = n.emptySpanAt(D.span.input, D.span.end)
                  , O = e.setInput(q(e), B);
                F = e.setInput(t.SeededFunctionCall(F, [O]), D.span)
            } else if ("Letter" === D.type)
                switch (D.val) {
                case "x":
                    return t.OrderedPairAccess([L, t.Constant(1)]);
                case "y":
                    return t.OrderedPairAccess([L, t.Constant(2)])
                }
            else if ("Call" === D.type) {
                if ("Letter" === (U = D.args[0]).type)
                    switch (U.val) {
                    case "x":
                        return t.Multiply([t.OrderedPairAccess([L, t.Constant(1)]), d(e, D.args[1])]);
                    case "y":
                        return t.Multiply([t.OrderedPairAccess([L, t.Constant(2)]), d(e, D.args[1])])
                    }
            }
            return t.DotAccess([L, F]);
        case "Prime":
            var N = r.args[0];
            if ("Call" === N.type) {
                var R = N.args
                  , U = R[0]
                  , _ = R[1]
                  , k = s.unwrapSeq(_).length;
                if ("Cmd" === U.type && "logbase" === U.val) {
                    if (2 !== k)
                        throw a.primedFunctionArity()
                } else if (1 !== k)
                    throw a.primedFunctionArity();
                return t.Prime(r.nprimes, u(e, r.args))
            }
            throw "ImplicitCall" === N.type ? a.primeWithoutParen() : a.unexpectedPrime();
        case "Index":
            var T = r.args
              , W = T[0]
              , j = T[1];
            if ("Seq" === j.type)
                return t.ListAccess([g(e, W), t.List(u(e, j.args))]);
            if ("Ellipsis" === j.type) {
                var z = j.args
                  , H = z[0]
                  , J = z[1];
                return t.ListAccess([g(e, W), t.Range([t.List(u(e, s.unwrapSeq(H))), t.List("EmptyRangeEnd" === J.type ? [] : u(e, s.unwrapSeq(J)))])])
            }
            return h(j) ? t.ListAccess([g(e, W), v(e, j)]) : t.ListAccess(u(e, r.args));
        case "Paren":
            var K = r.args[0];
            if ("Seq" === K.type) {
                if (0 === K.args.length)
                    throw a.emptyParen();
                return t.ParenSeq(u(e, K.args))
            }
            return g(e, K);
        case "List":
            if (0 === r.args.length)
                return t.List([]);
            var G = r.args[0];
            if ("Ellipsis" === G.type) {
                var Q = G.args;
                H = Q[0],
                J = Q[1];
                return t.Range([t.List(u(e, s.unwrapSeq(H))), t.List(u(e, s.unwrapSeq(J)))])
            }
            if ("For" === G.type) {
                for (var V = G.args, X = V[0], Y = V[1], Z = e.setInput(t.Identifier("_comprehensionIndex_" + c++), X.span), $ = d(E(e, {
                    prefix: "li",
                    expr: Z
                }), X), ee = [], re = 0, te = s.unwrapSeq(Y); re < te.length; re++) {
                    var ae = te[re];
                    if (!x(ae))
                        throw a.listComprehensionIncorrectInput();
                    ee.push(e.setInput(t.AssignmentExpression(u(e, ae.args)), ae.span))
                }
                return t.ListComprehension(Z, $, ee)
            }
            return t.List(u(e, s.unwrapSeq(G)));
        case "Pipes":
            return t.FunctionCall("\\abs", u(e, r.args));
        case "Subscript":
            var ne = r.args
              , se = ne[0]
              , ie = ne[1];
            if (0 === ie.val.length)
                throw a.emptySubscript();
            var ce = void 0;
            switch (se.type) {
            case "Letter":
            case "Cmd":
                ce = se.val;
                break;
            default:
                throw a.unexpectedSubscript()
            }
            return t.Identifier(ce + "_" + ie.val);
        case "Superscript":
            var ue = r.args
              , oe = (se = ue[0],
            ue[1]);
            if ("Call" !== se.type || "Seq" === se.args[1].type || function(e) {
                if ("Call" !== e.type)
                    return !1;
                var r = e.args[0];
                for (; "Superscript" === r.type || "Subscript" === r.type || "Prime" === r.type; )
                    r = r.args[0];
                return "Cmd" === r.type && (f(r.val) || y(r.val))
            }(se)) {
                if ("Dot" === se.type) {
                    D = se.args[1];
                    var pe = u(e, se.args)
                      , le = (L = pe[0],
                    F = pe[1],
                    d(e, oe));
                    if ("Letter" === D.type)
                        switch (D.val) {
                        case "x":
                            return t.Exponent([t.OrderedPairAccess([L, t.Constant(1)]), le]);
                        case "y":
                            return t.Exponent([t.OrderedPairAccess([L, t.Constant(2)]), le])
                        }
                    else if ("Call" === D.type) {
                        if ("Letter" === (U = D.args[0]).type)
                            switch (U.val) {
                            case "x":
                                return t.Multiply([t.OrderedPairAccess([L, t.Constant(1)]), t.Exponent([d(e, D.args[1]), le])]);
                            case "y":
                                return t.Multiply([t.OrderedPairAccess([L, t.Constant(2)]), t.Exponent([d(e, D.args[1]), le])])
                            }
                    }
                    return t.Exponent([t.DotAccess([L, F]), le])
                }
                return t.Exponent(u(e, r.args))
            }
            return t.FunctionExponent(u(e, [se.args[0], se.args[1], oe]));
        case "Sqrt":
            return t.FunctionCall("sqrt", u(e, r.args));
        case "Nthroot":
            return t.FunctionCall("nthroot", u(e, [r.args[1], r.args[0]]));
        case "Frac":
            return t.Divide(u(e, r.args));
        case "Derivative":
            var de = u(e, r.args);
            if (!s.isIdentifier(r.args[0]))
                throw a.parseError();
            return t.Derivative(de[0], [de[1]]);
        case "Integral":
            var ge = r.args;
            de = u(e, [ye = ge[0], ge[1], he = ge[2], ve = ge[3]]);
            return t.Integral(de);
        case "EmptyIntegral":
            var fe = u(e, r.args)
              , ye = fe[0]
              , me = fe[1]
              , he = fe[2]
              , ve = t.Constant(i.maybeRational(1, 1));
            return t.Integral([ye, me, he, ve]);
        case "Sum":
            var we = r.args
              , Se = (X = we[0],
            we[1]);
            he = we[2];
            if (!x(Se))
                throw a.incorrectSumLowerBound();
            var xe = d(E(e, {
                prefix: "ro",
                expr: (de = u(e, [Se.args[0], Se.args[1], he]))[0]
            }), X);
            return t.Sum(de.concat(xe));
        case "Product":
            var be = r.args
              , Ie = (X = be[0],
            be[1]);
            he = be[2];
            if (!x(Ie))
                throw a.incorrectProductLowerBound();
            xe = d(E(e, {
                prefix: "ro",
                expr: (de = u(e, [Ie.args[0], Ie.args[1], he]))[0]
            }), X);
            return t.Product(de.concat(xe));
        case "Juxt":
            return t.Multiply(u(e, r.args));
        case "Letter":
            return t.Identifier(r.val);
        case "Cmd":
            var Ce = r.val;
            switch (Ce) {
            case "ans":
                if (void 0 === e.currentIndex)
                    throw a.badSymbolContext("ans");
                return t.Ans("ans_{" + (e.currentIndex - 1) + "}");
            case "approx":
                throw a.unrecognizedSymbol(Ce);
            case "dt":
                if (!e.allowDt)
                    throw a.badSymbolContext(Ce);
                return t.Identifier(Ce);
            case "index":
                if (!e.allowIndex)
                    throw a.badSymbolContext(Ce);
                return t.Identifier(Ce);
            default:
                return t.Identifier(Ce)
            }
        case "Decimal":
            return t.Constant(w(r));
        case "MixedNumber":
            return t.MixedNumber(S(r));
        case "Piecewise":
            return function(e, r) {
                var t, n = e.nodes, c = r.args[0], u = s.unwrapSeq(c), o = [];
                e: for (t = 0; t < u.length; t++) {
                    var p = u[t];
                    switch (p.type) {
                    case "Colon":
                        var l = p.args
                          , g = l[0]
                          , f = l[1];
                        if (!h(g))
                            throw a.colonMissingCondition();
                        o.push({
                            condition: v(e, g),
                            if_expr: d(e, f)
                        });
                        break;
                    case "Equals":
                    case "Inequality":
                    case "InequalityChain":
                        o.push({
                            condition: v(e, p),
                            if_expr: n.Constant(i.maybeRational(1, 1))
                        });
                        break;
                    default:
                        break e
                    }
                }
                if (0 === t)
                    throw a.piecewiseMissingCondition();
                if (t < u.length - 1)
                    throw a.piecewisePartMissingCondition();
                var y = t === u.length - 1 ? d(e, u[t]) : n.Constant(NaN);
                if (!n.Piecewise.chain)
                    throw a.featureUnavailable();
                return n.Piecewise.chain(o, y)
            }(e, r);
        case "RightArrow":
            return function(e, r) {
                var t = e.nodes;
                if (!s.isIdentifier(r.args[0]))
                    throw a.updateRuleNonIdentifierLHS();
                return e = E(e, {
                    prefix: "ec",
                    expr: e.setInput(t.Identifier("globalEventCount"), n.emptySpanAt(r.span.input, r.span.start))
                }),
                t.UpdateRule(u(e, r.args))
            }(e, r);
        case "Seq":
            return t.BareSeq(u(e, r.args));
        case "EmptyPiecewise":
            if (!t.Piecewise.empty)
                throw a.featureUnavailable();
            return t.Piecewise.empty();
        case "Equals":
            throw a.unexpectedSymbol("=");
        case "Inequality":
        case "InequalityChain":
            throw a.unexpectedInequality();
        case "Tilde":
            throw a.unexpectedSymbol("~");
        case "Colon":
            throw a.unexpectedSymbol(":");
        case "Ellipsis":
            throw a.unexpectedSymbol("...");
        case "For":
            throw a.unexpectedForKeyword();
        case "EmptyRangeEnd":
            throw a.invalidHalfEmptyRange();
        case "Err":
            throw function(e) {
                switch (e.type) {
                case "UnexpectedParseError":
                case "MissingBound":
                case "EmptyGroup":
                case "UnexpectedDifferential":
                case "UnexpectedEnd":
                    return a.parseError();
                case "InvalidOperatorName":
                    return a.invalidOperatorName();
                case "UnexpectedCloseDelimiter":
                case "MissingCloseDelimiter":
                    return a.mismatchedBraces(e.open, e.close);
                case "UnrecognizedSymbol":
                    return "." === e.val ? a.unexpectedSymbol(e.val) : a.unrecognizedSymbol(e.val);
                case "EmptyInput":
                    return a.blankExpression();
                case "BinaryOperatorMissingRight":
                case "BinaryOperatorMissingLeft":
                    return a.binaryOperatorMissingOperand("%" === e.val ? "% of" : e.val);
                case "UnaryOperatorMissingLeft":
                    return a.unaryOperatorMissingLeft(e.val);
                case "UnaryOperatorMissingRight":
                    return a.unaryOperatorMissingRight(e.val);
                case "UnexpectedSubscript":
                    return a.cannotSubscript(e.base);
                case "PercentMissingOf":
                    return a.percentMissingOf();
                case "SumMissingBound":
                    return a.sumMissingBound();
                case "ProductMissingBound":
                    return a.productMissingBound();
                case "IntegralMissingBound":
                    return a.integralMissingBound();
                case "SumMissingBody":
                    return a.sumMissingBody();
                case "ProductMissingBody":
                    return a.productMissingBody();
                case "IntegralMissingBody":
                    return a.integralMissingBody();
                case "DerivativeMissingBody":
                    return a.derivativeMissingBody();
                case "IntegralMissingDifferential":
                    return a.integralMissingDifferential();
                case "DifferentialWithSuperscript":
                    return a.differentialWithSuperscript();
                case "FractionMissingNumerator":
                    return a.fractionMissingNumerator();
                case "FractionMissingDenominator":
                    return a.fractionMissingDenominator();
                case "FractionEmpty":
                    return a.fractionEmpty();
                case "EmptySuperscript":
                    return a.emptySuperscript();
                case "EmptySubscript":
                    return a.emptySubscript();
                case "InvalidSubscript":
                    return a.invalidSubscript(e.val);
                case "SuperscriptWithPrime":
                    return a.superscriptWithPrime();
                case "PrimeWithoutParen":
                    return a.primeWithoutParen();
                case "UnexpectedPrime":
                    return a.unexpectedPrime();
                case "EmptyRadical":
                    return a.emptyRadical();
                case "EmptyRadicalIndex":
                    return a.emptyRadicalIndex();
                case "EmptySquareBracket":
                    return a.emptySquareBracket();
                case "EmptyPipe":
                    return a.emptyPipe();
                case "FunctionMissingArgument":
                    return a.wrongArity(e.val, 1, 0);
                case "AdjacentNumbers":
                    return a.adjacentNumbers(b(e.args[0]), b(e.args[1]));
                case "TokenWithSubscript":
                    return a.tokenWithSubscript();
                case "UnexpectedFor":
                    return a.unexpectedForKeyword();
                default:
                    throw "Unexpected surface node " + e.type + "."
                }
            }(r.error);
        default:
            throw "Unexpected surface node " + r.type + "."
        }
    }
    function f(e) {
        return r.hasOwnProperty(e)
    }
    function y(e) {
        return "ln" === e || "log" === e || "logbase" === e
    }
    function m(e, t) {
        var i = e.nodes
          , c = t.args
          , o = c[0]
          , p = c[1]
          , l = d(e, o)
          , g = u(e, s.unwrapSeq(p));
        if (C(o)) {
            var m = n.emptySpanAt(p.span.input, p.span.start)
              , h = e.setInput(q(e), m);
            return i.SeededFunctionCall(l, [h].concat(g))
        }
        if (s.isIdentifier(o))
            return i.FunctionCall(l, g);
        if ("Superscript" === o.type) {
            var v = o.args
              , w = v[0]
              , S = v[1];
            if ("Cmd" === w.type) {
                var x = w.val;
                if (f(x) || y(x)) {
                    if (function(e) {
                        return "Decimal" === e.type && "2" === e.val
                    }(S))
                        return i.Exponent([i.FunctionCall(x, g), d(e, S)]);
                    if (function(e) {
                        return "Neg" === e.type && "Decimal" === (e = e.args[0]).type && "1" === e.val
                    }(S) && void 0 !== r[x])
                        return i.FunctionCall(r[x], g);
                    throw f(x) ? a.badTrigExponent(x) : a.badLogExponent("logbase" === x ? "log" : x)
                }
            }
        }
        return i.Multiply([l, d(e, p)])
    }
    function h(e) {
        return "Equals" === e.type || "Inequality" === e.type || "InequalityChain" === e.type
    }
    function v(e, r) {
        var t = e.nodes;
        switch (r.type) {
        case "Equals":
            return t.Comparator["="](u(e, r.args));
        case "Inequality":
            return t.Comparator[r.symbol](u(e, r.args));
        case "InequalityChain":
            if (r.chain.length > 1)
                throw a.inequalityChainTooLong();
            var i = r.first
              , c = i.symbol
              , o = i.args
              , p = o[0]
              , l = o[1]
              , d = r.chain[0]
              , g = d.symbol
              , f = d.args[0]
              , y = n.emptySpanAt(r.span.input, r.span.start);
            return t.And([v(e, s.Inequality(y, c, [p, l])), v(e, s.Inequality(y, g, [l, f]))]);
        default:
            throw a.parseError()
        }
    }
    function w(e) {
        return i.fromDecimalString(e.val)
    }
    function S(e) {
        var r = i.fromDecimalString(e.whole)
          , t = i.fromDecimalString(e.num)
          , a = i.fromDecimalString(e.den);
        return i.add(r, i.div(t, a))
    }
    function x(e) {
        return "Equals" === e.type && s.isIdentifier(e.args[0])
    }
    function b(e) {
        switch (e.type) {
        case "Decimal":
            return e.val;
        case "MixedNumber":
            return e.whole + " " + e.num + "/" + e.den;
        default:
            throw new Error("Unexpected node type " + e.type)
        }
    }
    function I(e) {
        switch (e.type) {
        case "Letter":
        case "Decimal":
        case "MixedNumber":
        case "Cmd":
        case "EmptyPiecewise":
            return !0;
        case "Neg":
            for (var r = e.args[0]; ; )
                if ("Pos" === r.type || "Paren" === r.type && !l(r))
                    r = r.args[0];
                else {
                    if ("Neg" !== r.type)
                        break;
                    r = r.args[0]
                }
            return "Decimal" === r.type || "MixedNumber" === r.type;
        case "Pos":
        case "Paren":
            return I(e.args[0]);
        case "Juxt":
        case "Mul":
        case "Div":
            return I(e.args[0]) && I(e.args[1]);
        case "Subscript":
            return I(e.args[0]);
        case "Superscript":
        case "Frac":
        case "Add":
        case "Sub":
            return I(e.args[0]) && I(e.args[1]);
        case "Piecewise":
            return "Equals" === (r = e.args[0]).type || "Inequality" === r.type || "InequalityChain" === r.type;
        case "Call":
            var t = e.args
              , a = t[0]
              , n = t[1];
            return !s.isIdentifier(a) && !s.isSuperscriptedIdentifier(a) && (I(a) && I(n));
        case "Derivative":
        case "Sqrt":
        case "Nthroot":
        case "Pipes":
        case "Bang":
            return !1;
        case "Equals":
        case "Inequality":
        case "InequalityChain":
        case "Tilde":
        case "ImplicitCall":
        case "Index":
        case "List":
        case "Seq":
        case "Integral":
        case "EmptyIntegral":
        case "Sum":
        case "Product":
        case "Colon":
        case "Ellipsis":
        case "For":
        case "Dot":
        case "PercentOf":
        case "Prime":
        case "EmptyRangeEnd":
        case "RightArrow":
            return !1;
        default:
            throw "Unexpected surface node " + e.type + "."
        }
    }
    function C(e) {
        return "Cmd" === e.type && ("random" === e.val || "shuffle" === e.val)
    }
    function q(e) {
        var r = e.nodes.ExtendSeed("", [e.nodes.Identifier("globalRandomSeed"), e.nodes.Seed(e.nextSeed())]);
        if (!e.seedExtensions)
            return r;
        for (var t = 0, a = e.seedExtensions; t < a.length; t++) {
            var n = a[t]
              , s = n.prefix
              , i = n.expr;
            r = e.nodes.ExtendSeed(s, [r, i])
        }
        return r
    }
    function E(e, r) {
        var a = e.seedExtensions || [];
        return t.__assign(t.__assign({}, e), {
            seedExtensions: a.concat(r)
        })
    }
    e.lower = function(e, r) {
        return function(e, r) {
            return e.setInput(function(e, r) {
                var t = e.nodes;
                switch (r.type) {
                case "Equals":
                    var n = r.args
                      , i = n[0]
                      , c = n[1]
                      , l = o(i);
                    if (l) {
                        var f = l.base
                          , y = l.args;
                        return t.FunctionDefinition(d(e, f), u(e, y), d(e, c))
                    }
                    return p(i) ? t.Assignment(d(e, i), d(e, c)) : t.Equation(d(e, i), d(e, c));
                case "Tilde":
                    var m = u(e, r.args);
                    i = m[0],
                    c = m[1];
                    return t.Regression(i, c);
                case "Inequality":
                    return v(e, r);
                case "InequalityChain":
                    if (r.chain.length > 1)
                        throw a.inequalityChainTooLong();
                    var h = r.first
                      , w = h.symbol
                      , S = h.args
                      , x = S[0]
                      , b = S[1]
                      , I = r.chain[0]
                      , C = I.symbol
                      , q = I.args[0];
                    return s.isIdentifier(b) ? t.DoubleInequality([d(e, x), w, d(e, b), C, d(e, q)]) : v(e, r);
                case "Call":
                    var E = r.args
                      , P = E[0]
                      , M = E[1];
                    if ("Cmd" === P.type)
                        switch (P.val) {
                        case "histogram":
                            return t.Histogram(u(e, s.unwrapSeq(M)));
                        case "cube":
                        case "sphere":
                        case "cone":
                        case "dodecahedron":
                        case "octahedron":
                        case "tetrahedron":
                            return t.Object3D(u(e, s.unwrapSeq(M)), P.val);
                        case "dotplot":
                            return t.DotPlot(u(e, s.unwrapSeq(M)));
                        case "boxplot":
                            return t.BoxPlot(u(e, s.unwrapSeq(M)));
                        case "ttest":
                            return t.TTest(u(e, s.unwrapSeq(M)));
                        case "ittest":
                            return t.IndependentTTest(u(e, s.unwrapSeq(M)));
                        case "stats":
                            return t.Stats(u(e, s.unwrapSeq(M)));
                        default:
                            return g(e, r)
                        }
                    return g(e, r);
                default:
                    return g(e, r)
                }
            }(e, r), r.span)
        }(e, r)
    }
    ,
    e.isFunctionSignature = function(e) {
        return void 0 !== o(e)
    }
    ,
    e.isLegalAssignmentLhs = p
});
define('core/math/parser/expression-parser', ["require", "exports", "tslib", "core/math/errormsg", "./surface-node", "./surface-node-error", "./input-span", "./expression-lexer", "./precspec", "./lower"], function(require, e, r, t, a, n, s, i, p, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.parse = void 0;
    var c = [[p.initial("("), p.la(")"), p.initial("\\{"), p.la("\\}"), p.r("["), p.la("]"), p.initial("(|"), p.la("|)"), p.la("Differential"), p.la("End")], [p.r("for")], [p.ra("...")], [p.la(",")], [p.ra(":")], [p.r("->")], [p.la("="), p.la(">"), p.la("<"), p.la(">="), p.la("<="), p.la("~")], [p.l("->")], [p.l("for")], [p.la("+"), p.la("-")], [p.la("*"), p.la("/"), p.la("Decimal"), p.la("MixedNumber"), p.la("Letter"), p.la("Cmd"), p.la("TokenNode"), p.la("%"), p.r("("), p.la("\\{"), p.la("(|"), p.la("Frac"), p.la("Sqrt"), p.la("Trig"), p.la("Ln"), p.la("Log"), p.ra("Int"), p.ra("Sum"), p.ra("Prod")], [p.initial("+"), p.initial("-")], [p.la("!")], [p.la("SupSub")], [p.l("["), p.la(".")], [p.l("(")], [p.la("Err")]]
      , o = p.precSpec(c)
      , l = o.leftPrec
      , d = o.rightPrec
      , E = o.initialPrec
      , f = {
        trailingComma: !1
    };
    function y(e, r) {
        var t = (void 0 === r ? {
            isToplevel: !1
        } : r).isToplevel;
        if (i.isDone(e))
            return n.Err(i.spanStates(e, e), n.EmptyGroup());
        var a = S(e, 0, {
            isToplevel: t
        })
          , s = a.state
          , p = a.tree;
        return "Err" === p.type || i.isDone(s) ? p : j(s).tree
    }
    function v(e, r) {
        return {
            state: e,
            tree: r
        }
    }
    function S(e, r, s) {
        var p, u, c, o = (void 0 === s ? {
            isToplevel: !1
        } : s).isToplevel, f = e;
        if (p = function(e) {
            var r, s, p, u, c, o, d, f, g, b, x, P, C, w, B, I, L, N, O, T = e, q = i.peek(e), F = E(q.type);
            switch (q.type) {
            case "+":
                if (e = (r = S(e = i.advance(e), F)).state,
                "Err" === (O = r.tree).type) {
                    if (!m(O.error))
                        return v(e, O);
                    var R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.UnaryOperatorMissingRight(q.val)))
                }
                return v(e, a.Pos(i.spanStates(T, e), [O]));
            case "-":
                if (e = (s = S(e = i.advance(e), F)).state,
                "Err" === (O = s.tree).type) {
                    if (!m(O.error))
                        return v(e, O);
                    R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.UnaryOperatorMissingRight(q.val)))
                }
                return v(e, a.Neg(i.spanStates(T, e), [O]));
            case "(":
                return A(e);
            case "\\{":
                return e = i.advance(e),
                i.isAt(e, "\\}") ? v(e = i.advance(e), a.EmptyPiecewise(i.spanStates(T, e))) : (e = (u = U(T, e = (p = S(e, F)).state, O = p.tree, "\\{", "\\}")).state,
                "Err" === (O = u.tree).type ? v(e, O) : v(e, a.Piecewise(i.spanStates(T, e), [O])));
            case "[":
                return e = i.advance(e),
                i.isAt(e, "]") ? v(e = i.advance(e), a.List(i.spanStates(T, e), [])) : (e = (o = U(T, e = (c = S(e, F)).state, O = c.tree, "[", "]")).state,
                "Err" === (O = o.tree).type ? v(e, O) : v(e, a.List(i.spanStates(T, e), [O])));
            case "(|":
                if (e = i.advance(e),
                i.isAt(e, "|)")) {
                    e = i.advance(e);
                    R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.EmptyPipe()))
                }
                return e = (f = U(T, e = (d = S(e, F)).state, O = d.tree, "(|", "|)")).state,
                "Err" === (O = f.tree).type ? v(e, O) : v(e, a.Pipes(i.spanStates(T, e), [O]));
            case "Frac":
                if (e.opts.disallowFrac)
                    throw t.fractionsUnavailable();
                e = i.advance(e);
                var G = y(i.lex(q.num, e.opts))
                  , _ = y(i.lex(q.den, e.opts));
                if ("Err" === G.type && "EmptyGroup" === G.error.type && "Err" === _.type && "EmptyGroup" === _.error.type) {
                    R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.FractionEmpty()))
                }
                if ("Err" === G.type && "EmptyGroup" === G.error.type) {
                    R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.FractionMissingNumerator()))
                }
                if ("Err" === _.type && "EmptyGroup" === _.error.type) {
                    R = i.spanStates(T, e);
                    return v(e, n.Err(R, n.FractionMissingDenominator()))
                }
                if ("Err" === G.type)
                    return v(e, G);
                if ("Err" === _.type)
                    return v(e, _);
                if (a.isDerivative(G, _) && "Juxt" === _.type) {
                    var W = _.args[1]
                      , J = void 0;
                    if (e = (g = S(e, l("*") - 1)).state,
                    "Err" === (J = g.tree).type) {
                        if (m(J.error)) {
                            R = i.spanStates(T, e);
                            return v(e, n.Err(R, n.DerivativeMissingBody()))
                        }
                        return v(e, J)
                    }
                    return v(e, a.Derivative(i.spanStates(T, e), [W, J]))
                }
                return v(e, a.Frac(i.spanStates(T, e), [G, _]));
            case "Sqrt":
                if (e = i.advance(e),
                q.optArg) {
                    var z = y(i.lex(q.optArg, e.opts));
                    return "Err" === z.type ? "EmptyGroup" === z.error.type ? v(e, n.Err(z.span, n.EmptyRadicalIndex())) : v(e, z) : "Err" === (H = y(i.lex(q.arg, e.opts))).type ? "EmptyGroup" === H.error.type ? v(e, n.Err(H.span, n.EmptyRadical())) : v(e, H) : v(e, a.Nthroot(i.spanStates(T, e), [z, H]))
                }
                var H;
                return "Err" === (H = y(i.lex(q.arg, e.opts))).type ? "EmptyGroup" === H.error.type ? v(e, n.Err(H.span, n.EmptyRadical())) : v(e, H) : v(e, a.Sqrt(i.spanStates(T, e), [H]));
            case "Trig":
            case "Ln":
                e = i.advance(e);
                var K = a.Cmd(i.spanStates(T, e), q.val)
                  , Q = 0;
                if ("SupSub" === (ie = i.peek(e)).type) {
                    if (e = i.advance(e),
                    ie.sub) {
                        R = i.spanStates(T, e);
                        return v(e, n.Err(R, n.UnexpectedSubscript(K.val)))
                    }
                    if (Z = h(ie, e.opts)) {
                        if ("Err" === Z.type)
                            return v(e, Z);
                        K = a.Superscript(i.spanStates(T, e), [K, Z])
                    }
                    Q = ie.nprimes
                }
                if (V = i.isAt(e, "(")) {
                    if (e = (b = A(e)).state,
                    "Err" === (O = b.tree).type)
                        return v(e, O);
                    O = a.Call(i.spanStates(T, e), [K, O.args[0]])
                } else {
                    if (e = (x = S(e, F - 1)).state,
                    "Err" === (O = x.tree).type)
                        return m(O.error) ? v(e, n.Err(i.spanStates(T, e), n.FunctionMissingArgument(q.val))) : v(e, O);
                    O = a.ImplicitCall(i.spanStates(T, e), [K, O])
                }
                if (Q > 0) {
                    R = i.spanStates(T, e);
                    if (!V)
                        return v(e, n.Err(R, n.PrimeWithoutParen()));
                    O = a.Prime(R, Q, [O])
                }
                return v(e, O);
            case "Log":
                e = i.advance(e);
                var V, X = i.spanStates(T, e), Y = (K = a.Cmd(X, q.val),
                Q = 0,
                void 0), Z = void 0;
                if ("SupSub" === (ie = i.peek(e)).type && (Y = M(ie, (e = i.advance(e)).opts),
                Z = h(ie, e.opts),
                Q = ie.nprimes),
                Y && "Err" === Y.type)
                    return v(e, Y);
                if (Z && "Err" === Z.type)
                    return v(e, Z);
                if (V = i.isAt(e, "(")) {
                    if (e = (P = A(e)).state,
                    "Err" === (O = P.tree).type)
                        return v(e, O);
                    O = O.args[0]
                } else if (e = (C = S(e, F - 1)).state,
                "Err" === (O = C.tree).type)
                    return m(O.error) ? v(e, n.Err(i.spanStates(T, e), n.FunctionMissingArgument(q.val))) : v(e, O);
                var $ = Y ? a.Cmd(X, "\\logbase") : K
                  , ee = Y ? a.Seq(i.spanStates(T, e), a.unwrapSeq(O).concat(Y)) : O;
                if (Z && ($ = a.Superscript(i.spanStates(T, e), [$, Z])),
                O = V ? a.Call(i.spanStates(T, e), [$, ee]) : a.ImplicitCall(i.spanStates(T, e), [$, ee]),
                Q > 0) {
                    R = i.spanStates(T, e);
                    if (!V)
                        return v(e, n.Err(R, n.PrimeWithoutParen()));
                    O = a.Prime(R, Q, [O])
                }
                return v(e, O);
            case "Int":
                if (e = i.advance(e),
                "Err" === (te = D(ie = i.peek(e), T, e = i.advance(e))).type)
                    return "MissingBound" === te.error.type ? v(e, n.Err(te.span, n.IntegralMissingBound())) : v(e, te);
                Z = te.sup,
                Y = te.sub,
                W = void 0;
                if (i.isAt(e, "Differential"))
                    return e = (w = k(e)).state,
                    "Err" === (W = w.tree).type ? v(e, W) : v(e, a.EmptyIntegral(i.spanStates(T, e), [W, Y, Z]));
                if (e = (B = S(e, F)).state,
                "Err" === (O = B.tree).type)
                    return m(O.error) ? v(e, n.Err(O.span, n.IntegralMissingBody())) : v(e, O);
                var re = O;
                return i.isAt(e, "Differential") ? (e = (I = k(e)).state,
                "Err" === (W = I.tree).type ? v(e, W) : v(e, a.Integral(i.spanStates(T, e), [W, Y, Z, re]))) : v(e, n.Err(i.spanStates(T, e), n.IntegralMissingDifferential()));
            case "Sum":
                if (e = i.advance(e),
                "Err" === (te = D(ie = i.peek(e), T, e = i.advance(e))).type)
                    return "MissingBound" === te.error.type ? v(e, n.Err(te.span, n.SumMissingBound())) : v(e, te);
                Z = te.sup,
                Y = te.sub;
                return e = (L = S(e, F)).state,
                "Err" === (O = L.tree).type ? m(O.error) ? v(e, n.Err(O.span, n.SumMissingBody())) : v(e, O) : v(e, a.Sum(i.spanStates(T, e), [O, Y, Z]));
            case "Prod":
                var te;
                if (e = i.advance(e),
                "Err" === (te = D(ie = i.peek(e), T, e = i.advance(e))).type)
                    return "MissingBound" === te.error.type ? v(e, n.Err(te.span, n.ProductMissingBound())) : v(e, te);
                Z = te.sup,
                Y = te.sub;
                return e = (N = S(e, F)).state,
                "Err" === (O = N.tree).type ? m(O.error) ? v(e, n.Err(O.span, n.ProductMissingBody())) : v(e, O) : v(e, a.Product(i.spanStates(T, e), [O, Y, Z]));
            case "Cmd":
                return v(e = i.advance(e), O = a.Cmd(i.spanStates(T, e), q.val));
            case "TokenNode":
                return e = i.advance(e),
                "SupSub" === (ie = i.peek(e)).type && ie.sub ? v(e = i.advance(e), n.Err(i.spanStates(T, e), n.TokenWithSubscript())) : v(e, O = a.Cmd(i.spanStates(T, e), q.val));
            case "Letter":
                return v(e = i.advance(e), O = a.Letter(i.spanStates(T, e), q.val));
            case "Decimal":
                e = i.advance(e);
                var ae = a.Decimal(i.spanStates(T, e), q.val);
                if ("Decimal" === (ie = e.token).type || "MixedNumber" === ie.type) {
                    var ne = e;
                    e = i.advance(e);
                    R = i.spanStates(T, e);
                    var se = "MixedNumber" === ie.type ? ie : a.Decimal(i.spanStates(ne, e), ie.val);
                    return v(e, n.Err(R, n.AdjacentNumbers([ae, se])))
                }
                return v(e, ae);
            case "MixedNumber":
                if (e.opts.disallowFrac)
                    throw t.fractionsUnavailable();
                var ie;
                if ("Decimal" === (ie = (e = i.advance(e)).token).type || "MixedNumber" === ie.type) {
                    ne = e;
                    e = i.advance(e);
                    R = i.spanStates(T, e),
                    se = "MixedNumber" === ie.type ? ie : a.Decimal(i.spanStates(ne, e), ie.val);
                    return v(e, n.Err(R, n.AdjacentNumbers([q, se])))
                }
                return v(e, q);
            case "*":
            case "/":
            case ",":
            case "=":
            case ">":
            case "<":
            case ">=":
            case "<=":
            case "->":
            case "~":
            case ":":
            case "...":
            case "%":
            case ".":
                e = i.advance(e);
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.BinaryOperatorMissingLeft(q.val)));
            case "for":
                e = i.advance(e);
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.UnexpectedFor()));
            case "!":
                e = i.advance(e);
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.UnaryOperatorMissingLeft(q.val)));
            case "SupSub":
                e = i.advance(e);
                var pe = "supsub";
                q.sub ? pe = "subscript" : q.sup ? pe = "superscript" : q.nprimes > 0 && (pe = "prime");
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.UnaryOperatorMissingLeft(pe)));
            case ")":
            case "\\}":
            case "]":
            case "|)":
            case "Differential":
                return j(e);
            case "Err":
                e = i.advance(e);
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.UnrecognizedSymbol(q.val)));
            case "End":
                R = i.spanStates(T, e);
                return v(e, n.Err(R, n.UnexpectedEnd()));
            default:
                throw "Unexpected token type " + q.type + "."
            }
        }(f),
        f = p.state,
        "Err" === (c = p.tree).type)
            return v(f, c);
        if (!i.didAdvance(e, f))
            throw new Error("Programming Error: parseInitial did not advance state.");
        for (; !i.isDone(f); ) {
            if (r >= (i.isAt(f, "(") && !x(c) ? d("(") : l(i.peek(f).type)))
                break;
            var P = f;
            if (f = (u = b(f, c, g(f, c, o) ? l(",") - 1 : d(i.peek(f).type))).state,
            "Err" === (c = u.tree).type)
                return v(f, c);
            if (!i.didAdvance(P, f))
                throw new Error("Programming Error: parseSuccessor did not advance state.")
        }
        return v(f, c)
    }
    function m(e) {
        return "UnexpectedDifferential" === e.type || "UnexpectedCloseDelimiter" === e.type || "UnexpectedEnd" === e.type || "BinaryOperatorMissingLeft" === e.type
    }
    function g(e, r, t) {
        return i.isAt(e, "=") && t && (u.isFunctionSignature(r) || u.isLegalAssignmentLhs(r))
    }
    function b(e, r, t) {
        var s, p, u, c, o, d, E, f, y, g, b, x, M, D = i.peek(e);
        switch (D.type) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
        case "~":
        case ":":
        case ".":
        case "->":
        case "for":
            if (e = (s = S(e = i.advance(e), t)).state,
            "Err" === (M = s.tree).type) {
                if (m(M.error)) {
                    var k = i.joinState(r.span, e);
                    return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                }
                return v(e, M)
            }
            return v(e, function(e, r, t) {
                switch (e) {
                case "+":
                    return a.Add(r, t);
                case "-":
                    return a.Sub(r, t);
                case "*":
                    return a.Mul(r, t);
                case "/":
                    return a.Div(r, t);
                case "=":
                    return a.Equals(r, t);
                case "~":
                    return a.Tilde(r, t);
                case ":":
                    return a.Colon(r, t);
                case ".":
                    return a.Dot(r, t);
                case "->":
                    return a.RightArrow(r, t);
                case "for":
                    return a.For(r, t);
                default:
                    throw "Unexpected token type " + e + "."
                }
            }(D.type, i.joinState(r.span, e), [r, M]));
        case "%":
            e = i.advance(e);
            var w = i.peek(e);
            if ("Cmd" !== w.type || "of" !== w.val && "\\of" !== w.val)
                return v(e, n.Err(D.span, n.PercentMissingOf()));
            if (e = (p = S(e = i.advance(e), t)).state,
            "Err" === (M = p.tree).type) {
                if (m(M.error)) {
                    k = i.joinState(r.span, e);
                    return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                }
                return v(e, M)
            }
            return v(e, a.PercentOf(i.joinState(r.span, e), [r, M]));
        case ">=":
        case "<=":
        case ">":
        case "<":
            var B = D.type;
            if (e = (u = S(e = i.advance(e), t)).state,
            "Err" === (M = u.tree).type) {
                if (m(M.error)) {
                    k = i.joinState(r.span, e);
                    return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                }
                return v(e, M)
            }
            for (var I = a.Inequality(i.joinState(r.span, e), B, [r, M]), L = [], N = i.peek(e).type; ">=" === N || "<=" === N || ">" === N || "<" === N; ) {
                var O = e;
                if (B = N,
                e = (c = S(e = i.advance(e), t)).state,
                "Err" === (M = c.tree).type) {
                    if (m(M.error)) {
                        k = i.joinState(r.span, e);
                        return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                    }
                    return v(e, M)
                }
                L.push(a.TrailingInequalityPiece(i.spanStates(O, e), B, [M])),
                N = i.peek(e).type
            }
            return L.length ? v(e, a.InequalityChain(i.joinState(r.span, e), I, L)) : v(e, I);
        case "!":
            return v(e = i.advance(e), a.Bang(i.joinState(r.span, e), [r]));
        case "[":
            O = e;
            if (e = i.advance(e),
            i.isAt(e, "]")) {
                e = i.advance(e);
                k = i.spanStates(O, e);
                return v(e, n.Err(k, n.EmptySquareBracket()))
            }
            return e = (d = U(O, e = (o = S(e, t)).state, M = o.tree, "[", "]")).state,
            "Err" === (M = d.tree).type ? v(e, M) : v(e, a.Index(i.joinState(r.span, e), [r, M]));
        case "Sqrt":
        case "Frac":
        case "Letter":
        case "Cmd":
        case "TokenNode":
        case "Trig":
        case "Ln":
        case "Log":
        case "Sum":
        case "Int":
        case "Prod":
        case "Decimal":
        case "MixedNumber":
        case "\\{":
        case "(|":
            return e = (E = S(e, t)).state,
            "Err" === (M = E.tree).type ? v(e, M) : v(e, a.Juxt(i.joinState(r.span, e), [r, M]));
        case "(":
            if (a.isIdentifier(r)) {
                if (e = (f = A(e)).state,
                "Err" === (M = f.tree).type)
                    return v(e, M);
                k = i.joinState(r.span, e);
                return v(e, a.Call(k, [r, M.args[0]]))
            }
            if ("Prime" === r.type && a.isIdentifier(r.args[0])) {
                if (e = (y = A(e)).state,
                "Err" === (M = y.tree).type)
                    return v(e, M);
                k = i.joinState(r.span, e);
                return v(e, a.Prime(k, r.nprimes, [a.Call(k, [r.args[0], M.args[0]])]))
            }
            return e = (g = S(e, t)).state,
            "Err" === (M = g.tree).type ? v(e, M) : v(e, a.Juxt(i.joinState(r.span, e), [r, M]));
        case "SupSub":
            e = i.advance(e);
            var T = P(D)
              , q = h(D, e.opts);
            if (T && "Err" === T.type)
                return v(e, T);
            if (q && "Err" === q.type)
                return v(e, q);
            if (T && (r = a.Subscript(i.joinState(r.span, e), [r, T])),
            q && (r = a.Superscript(i.joinState(r.span, e), [r, q])),
            D.nprimes > 0) {
                k = i.joinState(r.span, e);
                if (!a.isIdentifier(r))
                    return v(e, n.Err(k, n.UnexpectedPrime()));
                r = a.Prime(k, D.nprimes, [r])
            }
            return v(e, r);
        case ",":
            for (var F = [r]; i.isAt(e, ",") && (e = i.advance(e),
            !i.isAt(e, "...")) && (!e.opts.trailingComma || !C(e)); ) {
                if (e = (b = S(e, t)).state,
                "Err" === (M = b.tree).type) {
                    if (m(M.error)) {
                        k = i.joinState(r.span, e);
                        return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                    }
                    return v(e, M)
                }
                F.push(M)
            }
            return v(e, a.Seq(i.joinState(r.span, e), F));
        case "...":
            if (e = i.advance(e),
            i.isAt(e, ",") && (e = i.advance(e)),
            t >= l(i.peek(e).type))
                return v(e, a.Ellipsis(i.joinState(r.span, e), [r, a.EmptyRangeEnd(i.emptySpanAtState(e))]));
            if (e = (x = S(e, t)).state,
            "Err" === (M = x.tree).type) {
                if (m(M.error)) {
                    k = i.joinState(r.span, e);
                    return v(e, n.Err(k, n.BinaryOperatorMissingRight(D.val)))
                }
                return v(e, M)
            }
            return v(e, a.Ellipsis(i.joinState(r.span, e), [r, M]));
        case "]":
        case ")":
        case "\\}":
        case "|)":
        case "Differential":
            return j(e);
        case "Err":
            return S(e, t);
        case "End":
            k = i.spanStates(e, e);
            return v(e, n.Err(k, n.UnexpectedEnd()));
        default:
            throw "Unexpected token type " + D.type + "."
        }
    }
    function x(e) {
        return !!a.isIdentifier(e) || !("Prime" !== e.type || !a.isIdentifier(e.args[0]))
    }
    function M(e, r) {
        if (e.sub) {
            var t = e.sub
              , a = y(i.lex(t, r));
            return "Err" === a.type && "EmptyGroup" === a.error.type ? n.Err(a.span, n.EmptySubscript()) : a
        }
    }
    function P(e) {
        if (e.sub) {
            var r = e.sub;
            if (0 === r.args.length)
                return n.Err(r.span, n.EmptySubscript());
            for (var t = [], i = 0, p = r.args; i < p.length; i++) {
                var u = p[i];
                if ("Digit" !== u.type && "Letter" !== u.type) {
                    var c = u.span;
                    return n.Err(c, n.InvalidSubscript(s.slice(c)))
                }
                t.push(u.val)
            }
            return a.Alphanumeric(r.span, t.join(""))
        }
    }
    function h(e, r) {
        if (e.sup) {
            var t = y(i.lex(e.sup, r));
            return "Err" === t.type ? "EmptyGroup" === t.error.type ? n.Err(t.span, n.EmptySuperscript()) : t : e.nprimes > 0 ? n.Err(e.span, n.SuperscriptWithPrime()) : t
        }
    }
    function D(e, r, t) {
        if ("SupSub" !== e.type) {
            var a = i.spanStates(r, t);
            return n.Err(a, n.MissingBound())
        }
        if (e.nprimes > 0) {
            a = i.spanStates(r, t);
            return n.Err(a, n.UnexpectedPrime())
        }
        var s = M(e, t.opts)
          , p = h(e, t.opts);
        if (!s || "Err" === s.type && "EmptySubscript" === s.error.type || !p || "Err" === p.type && "EmptySuperscript" === p.error.type) {
            a = i.spanStates(r, t);
            return n.Err(a, n.MissingBound())
        }
        return "Err" === s.type ? s : "Err" === p.type ? p : {
            type: "Bounds",
            sup: p,
            sub: s
        }
    }
    function A(e) {
        var r, t, n, s = e, p = i.peek(e), u = E(p.type);
        if (!i.isAt(e, "("))
            throw new Error("Programming Error: expected '(' at start of parseParen.");
        if (e = i.advance(e),
        i.isAt(e, ")")) {
            var c = a.Seq(i.emptySpanAtState(e), []);
            e = i.advance(e);
            var o = i.spanStates(s, e);
            return v(e, a.Paren(o, [c]))
        }
        return e = (t = U(s, e = (r = S(e, u)).state, n = r.tree, "(", ")")).state,
        "Err" === (n = t.tree).type ? v(e, n) : v(e, a.Paren(i.spanStates(s, e), [n]))
    }
    function k(e) {
        var r = e
          , t = i.peek(e);
        if ("Differential" !== t.type)
            throw new Error("Programming Error: expected differential");
        e = i.advance(e);
        var s = a.Cmd(t.span, t.val)
          , p = i.peek(e);
        if ("SupSub" === p.type) {
            e = i.advance(e);
            var u = i.spanStates(r, e)
              , c = P(p);
            if (c) {
                if ("Err" === c.type)
                    return v(e, c);
                s = a.Subscript(u, [s, c])
            }
            if (p.sup)
                return v(e, n.Err(u, n.DifferentialWithSuperscript()));
            if (p.nprimes > 0)
                return v(e, n.Err(u, n.UnexpectedPrime()))
        }
        return v(e, s)
    }
    function U(e, r, t, a, s) {
        if ("Err" === t.type && "UnexpectedEnd" !== t.error.type)
            return v(r, t);
        if ("Err" === t.type || !i.isAt(r, s)) {
            var p = i.spanStates(e, r);
            return v(r, n.Err(p, n.MissingCloseDelimiter(a, s)))
        }
        return v(r = i.advance(r), t)
    }
    function j(e) {
        var r = e;
        switch (i.peek(e).type) {
        case ")":
            e = i.advance(e);
            var t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedCloseDelimiter("(", ")")));
        case "]":
            e = i.advance(e);
            t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedCloseDelimiter("[", "]")));
        case "\\}":
            e = i.advance(e);
            t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedCloseDelimiter("\\{", "\\}")));
        case "|)":
            e = i.advance(e);
            t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedCloseDelimiter("|", "|")));
        case "Differential":
            e = i.advance(e);
            t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedDifferential()));
        default:
            e = i.advance(e);
            t = i.spanStates(r, e);
            return v(e, n.Err(t, n.UnexpectedParseError()))
        }
    }
    function C(e) {
        return i.isAt(e, ")") || i.isAt(e, "]") || i.isAt(e, "\\}")
    }
    e.parse = function(e, t) {
        var a = t ? r.__assign(r.__assign({}, f), t) : f
          , s = y(i.lex(e, a), {
            isToplevel: !0
        });
        return "Err" === s.type && "EmptyGroup" === s.error.type ? n.Err(s.span, n.EmptyInput()) : s
    }
});
define('core/math/baseparser', ["require", "exports", "parsenodes", "core/math/errormsg", "core/math/parser/latex-parser", "core/math/parser/expression-parser", "core/math/parser/lower"], function(require, r, e, a, t, o, n) {
    "use strict";
    function i() {
        throw a.featureUnavailable()
    }
    function s(r, e) {
        return r.setInputSpan(e),
        r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.parse = void 0,
    r.parse = function(r, l) {
        void 0 === l && (l = {});
        var d = typeof r;
        if ("string" !== d)
            throw new Error("Type Error: parse can only be called with strings, got " + JSON.stringify(r) + " of type " + d);
        var c = e;
        if (l.disabledFeatures) {
            c = Object.create(c);
            for (var p = 0, u = l.disabledFeatures; p < u.length; p++) {
                var f = u[p];
                if (!c[f])
                    throw new Error("Programming Error: " + f + " cannot be disabled because it is not a parsenode.");
                c[f] = i
            }
        }
        var v = void 0 === l.seedPrefix ? "" : l.seedPrefix
          , w = 0
          , m = {
            nodes: c,
            currentIndex: l.index,
            setInput: s,
            nextSeed: function() {
                var r = v + "::vc" + w;
                return w += 1,
                r
            },
            allowDt: !!l.allowDt,
            allowIndex: !!l.allowIndex
        }
          , g = {};
        void 0 !== l.trailingComma && (g.trailingComma = l.trailingComma),
        l.disallowFrac && (g.disallowFrac = !0);
        try {
            var h = t.parse(r)
              , x = o.parse(h, g);
            return n.lower(m, x)
        } catch (r) {
            return r instanceof e.Error ? r : "string" == typeof r ? e.Error(r) : a.parseError()
        }
    }
});
define('core/math/sliders', ["require", "exports"], function(require, e) {
    "use strict";
    function a(e, a) {
        var r = Math.round(1e6 * e) / 1e6;
        return Math.abs(r - e) < a ? r : e
    }
    function r(e) {
        var r = e.target
          , t = e.hardMin
          , i = e.hardMax
          , n = e.step
          , o = 1e-10;
        if (void 0 !== t && void 0 !== i && (o = Math.min(o, Math.abs(i - t) / 1e3)),
        n && (o = Math.min(o, n / 10)),
        void 0 !== t && (t = a(t, o)),
        void 0 !== i && (i = a(i, o)),
        e.forceSliderToMax && void 0 !== i && (r = i),
        t > i)
            return t;
        if (r <= t)
            return t;
        if (r >= i)
            return i;
        if (n) {
            var d = void 0 !== t ? t : 0;
            r = n * Math.round((r - d) / n) + d
        }
        var u = a(r, o);
        return (n || t === u || i === u) && (r = u),
        r <= t ? t : r >= i ? i : r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.computeSoftMax = e.constrainSliderValueLikeEvaluator = e.determineWhichLimitsAreCompatibleWithValue = e.roundToReasonableDecimal = void 0,
    e.roundToReasonableDecimal = a,
    e.determineWhichLimitsAreCompatibleWithValue = function(e) {
        var a = !0
          , t = !0
          , i = !0;
        return void 0 !== e.hardMin && e.target < e.hardMin && (a = !1),
        void 0 !== e.hardMax && e.target > e.hardMax && (t = !1),
        e.step && r({
            target: e.target,
            step: e.step,
            hardMin: a ? e.hardMin : void 0,
            hardMax: t ? e.hardMax : void 0
        }) !== e.target && (i = !1),
        {
            min: a,
            max: t,
            step: i
        }
    }
    ,
    e.constrainSliderValueLikeEvaluator = r,
    e.computeSoftMax = function(e) {
        var a = e.storedMax
          , t = e.sliderValue
          , i = e.hardMin
          , n = e.step
          , o = 10;
        if (a > o && (o = a),
        t > o && (o = t),
        i > o && (o = i),
        n) {
            var d = r({
                target: o,
                hardMin: i,
                hardMax: void 0,
                step: n
            });
            o = d >= o ? d : d + n
        }
        return o
    }
});
define('core/math/features/getConcreteTree', ['require', 'parsenodes', 'core/math/errormsg', 'core/math/types', 'core/math/maybe-rational', 'core/math/sliders'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = require("core/math/errormsg")
      , r = require("core/math/types")
      , i = require("core/math/maybe-rational")
      , s = (e.List,
    e.ParenSeq,
    e.Constant)
      , n = e.Identifier
      , o = require("core/math/sliders");
    function a(e, r) {
        return e.isError ? e : -1 === r.indexOf(e.valueType) ? t.parseError() : e
    }
    function l(e, t, r) {
        if (t) {
            var i = t.getDependencies();
            if (t.isError)
                r.errors[e] = !0;
            else if (i.length > 0) {
                r.errors[e] = !0;
                for (var s = 0; s < i.length; s++)
                    i[s] === r.exportedSymbol ? r.errors.cycle = !0 : r.missingVars.push(i[s])
            } else
                r.values[e] = +t.asValue();
            r.valids[e] = isFinite(r.values[e]),
            r.valids[e] || (r.values[e] = void 0)
        } else
            r.valids[e] = !0
    }
    function c(e) {
        return e && e.valueType === r.ListOfNumber && 1 === e.length && e.args ? e.args[0] : e
    }
    function u(i, s) {
        if (!s[this._symbol])
            throw t.functionUnsupported(this._symbol);
        var n = this.args.map(function(e) {
            return e.getConcreteTree(i, s)
        });
        if (n.length > 0) {
            if (1 === n.length && n.push(e.Constant(1).getConcreteTree(i, s)),
            n[1].getDependencies().length)
                throw t.illegalBinWidth(this._symbol).setDependencies(n[1].getDependencies());
            if (n[1].valueType !== r.Number)
                throw t.illegalBinWidth(this._symbol);
            var o = n[1].asValue();
            if (!isFinite(o) || o <= 0)
                throw t.illegalBinWidth(this._symbol)
        }
        return this.typeCheck(i, n),
        new this.constructor(n)
    }
    function h(e, r) {
        if (!r[this._symbol])
            throw t.functionUnsupported(this._symbol);
        var i = this.args.map(function(t) {
            return t.getConcreteTree(e, r)
        });
        return this.typeCheck(e, i),
        new this.constructor(i)
    }
    e.Base.prototype.tryGetConcreteTree = function() {
        var r;
        try {
            r = this.getConcreteTree.apply(this, arguments)
        } catch (i) {
            r = i instanceof e.Base ? i : t.parseError()
        }
        return r
    }
    ,
    e.Base.prototype.getConcreteTree = function(e, t) {
        var r = this.buildIRExpression(e, t);
        if (r.isError)
            throw r;
        return r
    }
    ,
    e.DoubleInequality.prototype.getConcreteTree = function(t, r) {
        return new this.constructor([e.Piecewise([this._indicator, this._expressions[0], s(NaN)]).getConcreteTree(t, r), this._operators[0], n(this._symbol), this._operators[1], e.Piecewise([this._indicator, this._expressions[1], s(NaN)]).getConcreteTree(t, r)])
    }
    ,
    e.Error.prototype.getConcreteTree = function(e, t) {
        return this
    }
    ,
    e.Image.prototype.getConcreteTree = function(t, i) {
        var s = this.center.tryGetConcreteTree(t, i)
          , n = this.radianAngle.tryGetConcreteTree(t, i)
          , o = this.width.tryGetConcreteTree(t, i)
          , l = this.height.tryGetConcreteTree(t, i)
          , c = this.opacity.tryGetConcreteTree(t, i)
          , u = [r.Point, r.ListOfPoint, r.EmptyList]
          , h = [r.Number, r.ListOfNumber, r.EmptyList];
        return s = a(s, u),
        n = a(n, h),
        o = a(o, h),
        l = a(l, h),
        c = a(c, h),
        e.Image({
            center: s,
            radianAngle: n,
            width: o,
            height: l,
            opacity: c
        }, this.moveStrategy)
    }
    ,
    e.Ticker.prototype.getConcreteTree = function(i, s) {
        var n = this.handler.tryGetConcreteTree(i, s);
        n.isError || n.valueType === r.Action || (n = t.eventHandlerTypeError(r.prettyPrint(n.valueType)));
        var o = n.getDependencies().filter(function(e) {
            return !i.validActionVariable(e)
        });
        return o.length && (n = t.tooManyVariables(i.sliderVariables(o)).setDependencies(o)),
        e.Ticker({
            handler: n,
            minStep: this.minStep.tryGetConcreteTree(i, s)
        })
    }
    ,
    e.Slider.prototype.getConcreteTree = function(e, r) {
        var n = this._expression.getConcreteTree(e, r)
          , a = c(this.sliderMin && this.sliderMin.tryGetConcreteTree(e, r))
          , u = c(this.sliderMax && this.sliderMax.tryGetConcreteTree(e, r))
          , h = c(this.sliderStep && this.sliderStep.tryGetConcreteTree(e, r))
          , p = {
            exportedSymbol: this._symbol,
            errors: {},
            values: {},
            valids: {},
            missingVars: [],
            errMsg: void 0
        };
        if (l("min", a, p),
        l("max", u, p),
        l("step", h, p),
        h && p.valids.step && (0 === p.values.step ? delete p.values.step : p.values.step = Math.abs(p.values.step)),
        p.errors.cycle ? n = t.sliderLimitReferencesExport(p.exportedSymbol) : (p.errors.min || !p.valids.min ? p.errMsg = t.sliderMinInvalid() : p.errors.max || !p.valids.max ? p.errMsg = t.sliderMaxInvalid() : !p.errors.step && p.valids.step || (p.errMsg = t.sliderStepInvalid()),
        p.values.min > p.values.max && (p.valids.min = !1,
        p.valids.max = !1,
        p.errMsg || (p.errMsg = t.sliderMaxLessThanMin()))),
        n.isConstant) {
            var d = r.initialEvaluation && r.initialEvaluation.asValue() && this.sliderIsPlayingOnce
              , y = p.values.max
              , v = +n.asValue()
              , g = p.values.min
              , T = p.values.step;
            if (d && !isFinite(y)) {
                var m = c(this.sliderSoftMax && this.sliderSoftMax.tryGetConcreteTree(e, r));
                m && (y = o.computeSoftMax({
                    storedMax: +m.asValue(),
                    sliderValue: v,
                    step: T,
                    hardMin: g
                }))
            }
            var f = o.constrainSliderValueLikeEvaluator({
                target: v,
                hardMin: g,
                hardMax: y,
                step: T,
                forceSliderToMax: d
            })
              , C = i.fromDecimalString(f.toString())
              , b = isFinite(i.asFloat(C)) ? C : f;
            n = s(b).getConcreteTree(e, r)
        }
        return n.sliderInfo = p,
        n
    }
    ,
    e.Histogram.prototype.getConcreteTree = u,
    e.DotPlot.prototype.getConcreteTree = u,
    e.BoxPlot.prototype.getConcreteTree = function(e, i) {
        if (!i[this._symbol])
            throw t.functionUnsupported(this._symbol);
        var s = this.args.map(function(t) {
            return t.getConcreteTree(e, i)
        });
        return this.typeCheck(e, s),
        1 !== s.length || s[0].valueType !== r.ListOfNumber && s[0].valueType !== r.EmptyList ? t.parseError() : new this.constructor(s)
    }
    ,
    e.TTest.prototype.getConcreteTree = h,
    e.IndependentTTest.prototype.getConcreteTree = h,
    e.Stats.prototype.getConcreteTree = h,
    e.Table.prototype.getConcreteTree = function(e, t) {
        for (var r = [], i = Object.create(t), s = 0; s < this.columns.length; s++) {
            var n = this.columns[s].getConcreteTree(e, i);
            n.isIndependent && this.columns[s].exportToLocal(n, i),
            r.push(n)
        }
        return new this.constructor(r)
    }
    ,
    e.TableColumn.prototype.getConcreteTree = function(i, s, n) {
        var o, a, l = this.header.getConcreteTree(i, s);
        if (this.header instanceof e.Identifier && !s[this.header._symbol]) {
            o = [];
            for (var c = 0; c < this.values.length; c++)
                if (this.values[c].tableError())
                    o.push(t.invalidTableEntry(this.values[c].tableError()));
                else {
                    var u = this.values[c].tryGetConcreteTree(i, s);
                    u.isError ? o.push(u) : u.tableError() ? o.push(t.invalidTableEntry(u.tableError())) : u.valueType === r.Number ? o.push(u) : o.push(t.tableEntryTypeError([r.prettyPrint(u.valueType)]))
                }
            return (a = new this.constructor(l,this.length,o)).isIndependent = !0,
            a
        }
        if (l.isConstant) {
            for (var h = [], p = 0; p < this.length; p++)
                h.push(l);
            o = h
        } else
            o = l.isList ? l.mapElements(function(e) {
                return e
            }) : [];
        if (l.isError || l.valueType === r.Number || l.valueType === r.ListOfNumber || l.valueType === r.EmptyList || (l = t.tableHeaderTypeError([r.prettyPrint(l.valueType)])),
        a = new this.constructor(l,this.length,o),
        void 0 !== n) {
            var d = this.header.tryGetConcreteTree(i, n);
            d.isError || d.valueType !== r.Number || (a.continuousConcreteTree = d)
        }
        return a
    }
});
define('core/math/ir/scope', ["require", "exports"], function(require, e) {
    "use strict";
    function o(e, o) {
        return {
            symbolMap: e,
            maxIndex: o
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.childScope = e.setSymbol = e.getSymbol = e.Scope = void 0,
    e.Scope = o,
    e.getSymbol = function(e, o) {
        return e.symbolMap[o]
    }
    ,
    e.setSymbol = function(e, o, t) {
        e.symbolMap[o] = t,
        e.maxIndex = Math.max(e.maxIndex, t)
    }
    ,
    e.childScope = function(e) {
        return o(Object.create(e.symbolMap), e.maxIndex)
    }
});
define('core/math/mathshim', ["require", "exports"], function(require, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.sign = n.sqrtxsqm1 = n.sqrtxsqp1 = n.log1p = n.expm1 = n.atanh = n.asinh = n.acosh = n.tanh = n.sinh = n.cosh = void 0;
    var t = Math;
    n.cosh = t.cosh || function(n) {
        return .5 * (Math.exp(n) + Math.exp(-n))
    }
    ,
    n.sinh = t.sinh && 0 !== t.sinh(1e-20) ? t.sinh : function(t) {
        var a = t > 0 ? 1 : -1;
        return t = t > 0 ? t : -t,
        .5 * -a * Math.exp(t) * n.expm1(-2 * t)
    }
    ,
    n.tanh = t.tanh && 0 !== t.tanh(1e-20) ? t.tanh : function(t) {
        var a = t > 0 ? 1 : -1;
        t = t > 0 ? t : -t;
        var r = n.expm1(-2 * t);
        return -a * r / (2 + r)
    }
    ,
    n.acosh = t.acosh || function(t) {
        return t < 1 ? NaN : Math.log(t + n.sqrtxsqm1(t))
    }
    ,
    n.asinh = t.asinh && 0 !== t.asinh(1e-20) ? t.asinh : function(t) {
        var a = t > 0 ? 1 : -1;
        return 1 + (t = t > 0 ? t : -t) * t == 1 ? a * n.log1p(t) : a * Math.log(t + n.sqrtxsqp1(t))
    }
    ,
    n.atanh = t.atanh && 0 !== t.atanh(1e-20) ? t.atanh : function(t) {
        return .5 * (n.log1p(t) - n.log1p(-t))
    }
    ,
    n.expm1 = t.expm1 || function(n) {
        return n + .5 * n * n === n ? n : Math.exp(n) - 1
    }
    ,
    n.log1p = t.log1p || function(n) {
        return n - .5 * n * n === n ? n : Math.log(1 + n)
    }
    ;
    n.sqrtxsqp1 = function(n) {
        var t = n * n;
        return 1 + t === 1 ? 1 : 1 + t === t ? Math.abs(n) : Math.sqrt(t + 1)
    }
    ;
    n.sqrtxsqm1 = function(n) {
        var t = n * n;
        return t < 1 ? NaN : t - 1 === t ? Math.abs(n) : Math.sqrt(t - 1)
    }
    ,
    n.sign = t.sign || function(n) {
        return 0 === n ? 0 : n > 0 ? 1 : n < 0 ? -1 : NaN
    }
});
define('core/math/quadrature', ['require', 'core/math/mathshim', 'core/math/poi'], function(require) {
    "use strict";
    var a = require("core/math/mathshim")
      , r = require("core/math/poi")
      , t = r.bisectJump
      , i = r.bisectFinite
      , n = Math.pow(2, -13)
      , e = n * n
      , o = e * e
      , s = e
      , u = []
      , h = [];
    !function(r, t) {
        for (var i = 32; i > 0; i--) {
            var n = .09856311095410075 * i
              , e = a.sinh(n)
              , o = a.cosh(Math.PI / 2 * e)
              , s = 1 / (Math.exp(Math.PI / 2 * e) * o)
              , u = a.cosh(n) / (o * o);
            r.push(s),
            t.push(u)
        }
    }(u, h);
    for (var N = 0, f = 0; f < h.length; f++)
        N += h[f];
    var m = 1 / (1 + 2 * N);
    function x(a, r, t) {
        return .5 * (r * (2 - t) + a * t)
    }
    function M(a, r, i) {
        var n = .5 * (r + i)
          , e = t(r, a(r), n, a(n), i, a(i), a, 0);
        return e ? .5 * (e[0][0] + e[1][0]) : n
    }
    function v(a, r, t, i, n) {
        return {
            x1: a,
            x2: r,
            value: t,
            error: i,
            minerror: n
        }
    }
    function b(a, r, t) {
        var i = Math.abs(a(x(r, t, e)))
          , n = Math.abs(a(x(r, t, 2 * e)))
          , o = Math.abs(a(x(r, t, 4 * e)));
        return !(i < e || n < e) && (i > 1.95 * n && n > 1.95 * o)
    }
    function c(a, r, t) {
        var n, e, o = x(t, r, u[0]), N = x(r, t, u[0]), f = a(o), M = a(N), c = x(r, t, 1), l = a(c);
        if (isFinite(l) && !isFinite(f)) {
            if (n = i(o, f, c, l, a),
            Math.abs((n[0] - r) / (t - r)) > s)
                return v(r, t, NaN, NaN, NaN);
            r = n[0],
            f = n[1]
        }
        if (isFinite(l) && !isFinite(M)) {
            if (e = i(c, l, N, M, a),
            Math.abs((e[0] - t) / (t - r)) > s)
                return v(r, t, NaN, NaN, NaN);
            t = e[0],
            M = e[1]
        }
        if (isFinite(f) && isFinite(M) && !isFinite(l)) {
            if (n = i(o, f, c, l, a),
            e = i(c, l, N, M, a),
            Math.abs((e[0] - n[0]) / (t - r)) > s)
                return v(r, t, NaN, NaN, NaN);
            l = .5 * (n[1] + e[1])
        }
        if (b(a, r, t) || b(a, t, r))
            return v(r, t, NaN, NaN, NaN);
        for (var F = l, p = 0, d = 0, g = 0, I = 0, P = 0, q = 0, w = 0; w < 32; w += 4)
            P = a(x(r, t, u[w])),
            q = a(x(t, r, u[w])),
            I = Math.max(I, Math.abs(P), Math.abs(q)),
            p += h[w] * (P + q),
            P = a(x(r, t, u[w + 1])),
            q = a(x(t, r, u[w + 1])),
            I = Math.max(I, Math.abs(P), Math.abs(q)),
            g += h[w + 1] * (P + q),
            P = a(x(r, t, u[w + 2])),
            q = a(x(t, r, u[w + 2])),
            I = Math.max(I, Math.abs(P), Math.abs(q)),
            d += h[w + 2] * (P + q),
            P = a(x(r, t, u[w + 3])),
            q = a(x(t, r, u[w + 3])),
            I = Math.max(I, Math.abs(P), Math.abs(q)),
            g += h[w + 3] * (P + q);
        var J, j = F + p, k = j + d, y = k + g, z = Math.abs(d - j), A = Math.abs(g - k), B = m * (t - r) * y, C = m * Math.abs(t - r) * I * h[0];
        return J = 0 === z ? m * Math.abs(t - r) * A : m * Math.abs(t - r) * A * (A / z) * (A / z),
        v(r, t, B, J = Math.max(J, C), C)
    }
    function l(a) {
        for (var r = -1 / 0, t = -1 / 0, i = -1, n = 0, e = 0; e < a.length; e++) {
            var o = a[e];
            n += o.value,
            o.error > r && (r = o.error,
            i = e),
            o.minerror > t && (t = o.minerror)
        }
        return {
            maxerror: r,
            maxminerror: t,
            maxindex: i,
            totalvalue: n
        }
    }
    return {
        quad: function a(r, t, i, n) {
            if (void 0 === n && (n = 32),
            isNaN(t) || isNaN(i))
                return NaN;
            var e = 1;
            if (t > i) {
                var s = t;
                t = i,
                i = s,
                e = -1
            }
            if (t === 1 / 0 && i === 1 / 0)
                return NaN;
            if (t === -1 / 0 && i === -1 / 0)
                return NaN;
            if (t === -1 / 0 && i === 1 / 0)
                return e * a(function(a) {
                    return r(a / ((1 + a) * (1 - a))) * (1 + a * a) / ((1 + a) * (1 + a) * (1 - a) * (1 - a))
                }, -1, 1, n);
            if (t === -1 / 0)
                return e * a(function(a) {
                    return -r(i - a / (1 - a)) / ((1 - a) * (1 - a))
                }, 1, 0, n);
            if (i === 1 / 0)
                return e * a(function(a) {
                    return r(t + a / (1 - a)) / ((1 - a) * (1 - a))
                }, 0, 1, n);
            for (var u = [c(r, t, i)], h = l(u), N = 1; N < n && (!(Math.abs(h.maxerror / h.totalvalue) <= 32 * o || h.maxerror <= 32 * o || h.maxerror <= 32 * h.maxminerror) && isFinite(h.maxerror) && isFinite(h.maxminerror)); N++) {
                var f = u[u.length - 1];
                u[u.length - 1] = u[h.maxindex],
                u[h.maxindex] = f;
                var m = u.pop()
                  , v = M(r, x(m.x2, m.x1, .125), x(m.x1, m.x2, .125));
                u.push(c(r, m.x1, v)),
                u.push(c(r, v, m.x2)),
                h = l(u)
            }
            return isFinite(h.maxerror) && isFinite(h.maxminerror) ? Math.abs(h.totalvalue) <= 10 * h.maxminerror ? 0 : e * h.totalvalue : NaN
        }
    }
});
define('core/lib/md5', ["require", "exports"], function(require, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = function(n) {
        function r(n, r) {
            var t = (65535 & n) + (65535 & r);
            return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t
        }
        function t(n, t, e, u, o, c) {
            return r((f = r(r(t, n), r(u, c))) << (i = o) | f >>> 32 - i, e);
            var f, i
        }
        function e(n, r, e, u, o, c, f) {
            return t(r & e | ~r & u, n, r, o, c, f)
        }
        function u(n, r, e, u, o, c, f) {
            return t(r & u | e & ~u, n, r, o, c, f)
        }
        function o(n, r, e, u, o, c, f) {
            return t(r ^ e ^ u, n, r, o, c, f)
        }
        function c(n, r, e, u, o, c, f) {
            return t(e ^ (r | ~u), n, r, o, c, f)
        }
        function f(n, t) {
            var f, i, a, h, l;
            n[t >> 5] |= 128 << t % 32,
            n[14 + (t + 64 >>> 9 << 4)] = t;
            var v = 1732584193
              , d = -271733879
              , g = -1732584194
              , s = 271733878;
            for (f = 0; f < n.length; f += 16)
                i = v,
                a = d,
                h = g,
                l = s,
                v = e(v, d, g, s, n[f], 7, -680876936),
                s = e(s, v, d, g, n[f + 1], 12, -389564586),
                g = e(g, s, v, d, n[f + 2], 17, 606105819),
                d = e(d, g, s, v, n[f + 3], 22, -1044525330),
                v = e(v, d, g, s, n[f + 4], 7, -176418897),
                s = e(s, v, d, g, n[f + 5], 12, 1200080426),
                g = e(g, s, v, d, n[f + 6], 17, -1473231341),
                d = e(d, g, s, v, n[f + 7], 22, -45705983),
                v = e(v, d, g, s, n[f + 8], 7, 1770035416),
                s = e(s, v, d, g, n[f + 9], 12, -1958414417),
                g = e(g, s, v, d, n[f + 10], 17, -42063),
                d = e(d, g, s, v, n[f + 11], 22, -1990404162),
                v = e(v, d, g, s, n[f + 12], 7, 1804603682),
                s = e(s, v, d, g, n[f + 13], 12, -40341101),
                g = e(g, s, v, d, n[f + 14], 17, -1502002290),
                v = u(v, d = e(d, g, s, v, n[f + 15], 22, 1236535329), g, s, n[f + 1], 5, -165796510),
                s = u(s, v, d, g, n[f + 6], 9, -1069501632),
                g = u(g, s, v, d, n[f + 11], 14, 643717713),
                d = u(d, g, s, v, n[f], 20, -373897302),
                v = u(v, d, g, s, n[f + 5], 5, -701558691),
                s = u(s, v, d, g, n[f + 10], 9, 38016083),
                g = u(g, s, v, d, n[f + 15], 14, -660478335),
                d = u(d, g, s, v, n[f + 4], 20, -405537848),
                v = u(v, d, g, s, n[f + 9], 5, 568446438),
                s = u(s, v, d, g, n[f + 14], 9, -1019803690),
                g = u(g, s, v, d, n[f + 3], 14, -187363961),
                d = u(d, g, s, v, n[f + 8], 20, 1163531501),
                v = u(v, d, g, s, n[f + 13], 5, -1444681467),
                s = u(s, v, d, g, n[f + 2], 9, -51403784),
                g = u(g, s, v, d, n[f + 7], 14, 1735328473),
                v = o(v, d = u(d, g, s, v, n[f + 12], 20, -1926607734), g, s, n[f + 5], 4, -378558),
                s = o(s, v, d, g, n[f + 8], 11, -2022574463),
                g = o(g, s, v, d, n[f + 11], 16, 1839030562),
                d = o(d, g, s, v, n[f + 14], 23, -35309556),
                v = o(v, d, g, s, n[f + 1], 4, -1530992060),
                s = o(s, v, d, g, n[f + 4], 11, 1272893353),
                g = o(g, s, v, d, n[f + 7], 16, -155497632),
                d = o(d, g, s, v, n[f + 10], 23, -1094730640),
                v = o(v, d, g, s, n[f + 13], 4, 681279174),
                s = o(s, v, d, g, n[f], 11, -358537222),
                g = o(g, s, v, d, n[f + 3], 16, -722521979),
                d = o(d, g, s, v, n[f + 6], 23, 76029189),
                v = o(v, d, g, s, n[f + 9], 4, -640364487),
                s = o(s, v, d, g, n[f + 12], 11, -421815835),
                g = o(g, s, v, d, n[f + 15], 16, 530742520),
                v = c(v, d = o(d, g, s, v, n[f + 2], 23, -995338651), g, s, n[f], 6, -198630844),
                s = c(s, v, d, g, n[f + 7], 10, 1126891415),
                g = c(g, s, v, d, n[f + 14], 15, -1416354905),
                d = c(d, g, s, v, n[f + 5], 21, -57434055),
                v = c(v, d, g, s, n[f + 12], 6, 1700485571),
                s = c(s, v, d, g, n[f + 3], 10, -1894986606),
                g = c(g, s, v, d, n[f + 10], 15, -1051523),
                d = c(d, g, s, v, n[f + 1], 21, -2054922799),
                v = c(v, d, g, s, n[f + 8], 6, 1873313359),
                s = c(s, v, d, g, n[f + 15], 10, -30611744),
                g = c(g, s, v, d, n[f + 6], 15, -1560198380),
                d = c(d, g, s, v, n[f + 13], 21, 1309151649),
                v = c(v, d, g, s, n[f + 4], 6, -145523070),
                s = c(s, v, d, g, n[f + 11], 10, -1120210379),
                g = c(g, s, v, d, n[f + 2], 15, 718787259),
                d = c(d, g, s, v, n[f + 9], 21, -343485551),
                v = r(v, i),
                d = r(d, a),
                g = r(g, h),
                s = r(s, l);
            return [v, d, g, s]
        }
        function i(n) {
            var r, t = "", e = 32 * n.length;
            for (r = 0; r < e; r += 8)
                t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
            return t
        }
        function a(n) {
            var r, t = [];
            for (t[(n.length >> 2) - 1] = void 0,
            r = 0; r < t.length; r += 1)
                t[r] = 0;
            var e = 8 * n.length;
            for (r = 0; r < e; r += 8)
                t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
            return t
        }
        function h(n) {
            var r, t, e = "0123456789abcdef", u = "";
            for (t = 0; t < n.length; t += 1)
                r = n.charCodeAt(t),
                u += e.charAt(r >>> 4 & 15) + e.charAt(15 & r);
            return u
        }
        function l(n) {
            return unescape(encodeURIComponent(n))
        }
        function v(n) {
            return function(n) {
                return i(f(a(n), 8 * n.length))
            }(l(n))
        }
        function d(n, r) {
            return function(n, r) {
                var t, e, u = a(n), o = [], c = [];
                for (o[15] = c[15] = void 0,
                u.length > 16 && (u = f(u, 8 * n.length)),
                t = 0; t < 16; t += 1)
                    o[t] = 909522486 ^ u[t],
                    c[t] = 1549556828 ^ u[t];
                return e = f(o.concat(a(r)), 512 + 8 * r.length),
                i(f(c.concat(e), 640))
            }(l(n), l(r))
        }
        return function(n, r, t) {
            return r ? t ? d(r, n) : h(d(r, n)) : t ? v(n) : h(v(n))
        }
    }()
});
define('core/math/builtin', ["require", "exports", "core/vendor/d3-color", "core/math/quadrature", "core/lib/md5", "core/math/mathshim", "core/math/mathshim", "core/math/distance", "core/math/distance", "core/math/tofraction", "core/math/poi", "./maybe-rational", "./builtin-common"], function(require, t, r, n, e, a, u, o, i, f, h, c, s) {
    "use strict";
    function l(t, r, n) {
        return Math.max(r, Math.min(n, t))
    }
    function M(r, n) {
        r = Math.round(r),
        n = Math.round(n);
        var e = t.gcd(r, n);
        return Math.abs(r / e * n)
    }
    function v(t) {
        return p(t + 1)
    }
    function p(t) {
        if (t < 0)
            return Math.PI / (P(Math.PI * t) * p(1 - t));
        if (t > 170)
            return 1 / 0;
        var r, n = Math.round(t) === t;
        return r = t < 15 ? g(t) : t < 120 ? function(t) {
            var r = t - 1;
            return Math.pow(r, r) * Math.exp(T(r) - r) * Math.sqrt(2 * Math.PI * r)
        }(t) : Math.exp(d(t)),
        n ? Math.round(r) : r
    }
    function g(t) {
        var r = 1 + t * (4.077131788261185 + t * (7.024675027156382 + t * (6.657107767450176 + t * (3.766266976716022 + t * (1.2792371666711133 + t * (.24304596436338005 + .020049769312165774 * t))))))
          , n = 1 + t * (4.154347453162709 + t * (7.270007565107539 + t * (6.97805297331391 + t * (3.989651532924167 + t * (1.367176195613119 + t * (.26175627691546965 + .021742722739397567 * t))))));
        return Math.E * Math.pow((1 + t) / Math.E, 1 + t) / (t * Math.sqrt(1 + t)) * (r / n)
    }
    function d(t) {
        var r = t - 1;
        return r * (Math.log(r) - 1) + .5 * Math.log(2 * Math.PI * r) + T(r)
    }
    function m(t, r) {
        if (t !== Math.floor(t))
            return NaN;
        if (t < 0)
            return NaN;
        if (0 === t)
            return 1 / I(r);
        var n = P(r);
        if (1 === t)
            return -1 / (n * n);
        var e = w(r);
        if (2 === t)
            return 2 * e / (n * n * n);
        for (var a = [0, 2], u = [], o = 3; o <= t; o++) {
            u = [];
            for (var i = 0; i < o; i++) {
                var f = 0
                  , h = 0;
                i > 0 && (f = (o - i + 1) * a[i - 1]),
                i + 2 < o && (h = (i + 1) * a[i + 1]),
                u.push(-(f + h))
            }
            a = u
        }
        var c = 0;
        for (i = t - 1; i >= 0; i--)
            c = u[i] + e * c;
        return c / Math.pow(n, t + 1)
    }
    function N(t, r) {
        return 0 === r ? NaN : (n = r === Math.E ? Math.log(t) : 2 === r && Math.log2 ? Math.log2(t) : 10 === r && Math.log10 ? Math.log10(t) : Math.log(t) / Math.log(r),
        Math.pow(r, Math.round(n)) === t ? Math.round(n) : n);
        var n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.uniquePerm = t.elementsAt = t.select = t.polygon = t.hsv = t.rgb = t.distance = t.quad = t.stdevp = t.stdev = t.spearman = t.rank = t.validateSampleCount = t.validateRangeLength = t.corr = t.cov = t.covp = t.variance = t.mad = t.varp = t.argMax = t.argMin = t.median = t.lowerQuartileIndex = t.upperQuartileIndex = t.lowerQuantileIndex = t.upperQuantileIndex = t.quartileIndex = t.sortPerm = t.quartile = t.quantile = t.listMax = t.listMin = t.length = t.stats = t.ittest = t.ttest = t.itscore = t.tscore = t.invUniform = t.invT = t.invBinom = t.invPoisson = t.invNorm = t.erfcx = t.erf = t.uniformcdf = t.uniformpdf = t.poissoncdf = t.poissonpdf = t.binompdf = t.binomcdf = t.poissonSample = t.binomSample = t.tSample = t.normalSample = t.uniformSample = t.randomPerm = t.shuffle = t.random = t.normalpdf = t.normalcdf = t.tcdf = t.tpdf = t.total = t.mean = t.acoth = t.acsch = t.asech = t.coth = t.csch = t.sech = t.asec = t.acsc = t.acot = t.cot = t.csc = t.sec = t.tan = t.cos = t.sin = t.nthroot = t.common_log = t.log_base = t.log = t.polyGamma = t.cotDerivative = t.bernoulliTable = t.lnGamma = t.gamma = t.factorial = t.nPr = t.nCr = t.listLCM = t.listGCD = t.lcm = t.mod = t.pow = t.gcd = t.toFraction = t.hypot = t.sign = t.sqrtxsqm1 = t.sqrtxsqp1 = t.log1p = t.expm1 = t.atanh = t.asinh = t.acosh = t.tanh = t.sinh = t.cosh = t.md5Spyable = void 0,
    t.md5Spyable = e.default,
    Object.defineProperty(t, "cosh", {
        enumerable: !0,
        get: function() {
            return u.cosh
        }
    }),
    Object.defineProperty(t, "sinh", {
        enumerable: !0,
        get: function() {
            return u.sinh
        }
    }),
    Object.defineProperty(t, "tanh", {
        enumerable: !0,
        get: function() {
            return u.tanh
        }
    }),
    Object.defineProperty(t, "acosh", {
        enumerable: !0,
        get: function() {
            return u.acosh
        }
    }),
    Object.defineProperty(t, "asinh", {
        enumerable: !0,
        get: function() {
            return u.asinh
        }
    }),
    Object.defineProperty(t, "atanh", {
        enumerable: !0,
        get: function() {
            return u.atanh
        }
    }),
    Object.defineProperty(t, "expm1", {
        enumerable: !0,
        get: function() {
            return u.expm1
        }
    }),
    Object.defineProperty(t, "log1p", {
        enumerable: !0,
        get: function() {
            return u.log1p
        }
    }),
    Object.defineProperty(t, "sqrtxsqp1", {
        enumerable: !0,
        get: function() {
            return u.sqrtxsqp1
        }
    }),
    Object.defineProperty(t, "sqrtxsqm1", {
        enumerable: !0,
        get: function() {
            return u.sqrtxsqm1
        }
    }),
    Object.defineProperty(t, "sign", {
        enumerable: !0,
        get: function() {
            return u.sign
        }
    }),
    Object.defineProperty(t, "hypot", {
        enumerable: !0,
        get: function() {
            return i.hypot
        }
    }),
    t.toFraction = f.default,
    t.gcd = s.gcd,
    t.pow = s.pow,
    t.mod = function(t, r) {
        var n = t % r;
        return t * r < 0 && 0 !== n ? n + r : n
    }
    ,
    t.lcm = M,
    t.listGCD = function(r) {
        if (0 === r.length)
            return NaN;
        for (var n = r[0], e = 1; e < r.length; e++)
            n = t.gcd(n, r[e]);
        return n
    }
    ,
    t.listLCM = function(t) {
        if (0 === t.length)
            return NaN;
        for (var r = t[0], n = 1; n < t.length; n++)
            r = M(r, t[n]);
        return r
    }
    ,
    t.nCr = function(t, r) {
        if (t = Math.round(t),
        (r = Math.round(r)) > t || t < 0 || r < 0)
            return 0;
        if (r === 1 / 0 || t === 1 / 0)
            return NaN;
        r > t - r && (r = t - r);
        for (var n = 1, e = 0; e < r; e++)
            n *= (t - e) / (e + 1);
        return Math.round(n)
    }
    ,
    t.nPr = function(t, r) {
        if (t = Math.round(t),
        (r = Math.round(r)) > t || t < 0 || r < 0)
            return 0;
        if (r === 1 / 0 || t === 1 / 0)
            return NaN;
        for (var n = 1, e = 0; e < r; e++)
            n *= t - e;
        return n
    }
    ,
    t.factorial = v,
    t.gamma = p,
    t.lnGamma = function(t) {
        return t < 0 ? NaN : t < 15 ? Math.log(g(t)) : d(t)
    }
    ,
    t.bernoulliTable = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730, 7 / 6, -3617 / 510, 43867 / 798, -174611 / 330, 854513 / 138, -236364091 / 2730, 8553103 / 6, -23749461029 / 870],
    t.cotDerivative = m,
    t.polyGamma = function r(n, e) {
        if (n < 0)
            return NaN;
        if (n !== Math.floor(n))
            return NaN;
        var a = n % 2 == 0 ? -1 : 1;
        if (e < 0)
            return -a * r(n, 1 - e) - Math.pow(Math.PI, n + 1) * m(n, Math.PI * e);
        for (var u = v(n), o = 0, i = Math.pow(e, -(n + 1)); e < 10; )
            o += i,
            e++,
            i = Math.pow(e, -(n + 1));
        o += 0 === n ? -Math.log(e) : i * e / n,
        o += .5 * i;
        for (var f = t.bernoulliTable, h = n + 1, c = 2, s = i * e * h / c, l = 1 / (e * e), M = 1; M <= 14; M++)
            o += (s *= l) * f[M - 1],
            s *= ++h / ++c,
            s *= ++h / ++c;
        return u * a * o
    }
    ,
    t.log = function(t) {
        var r = Math.log(t);
        return Math.exp(Math.round(r)) === t ? Math.round(r) : r
    }
    ,
    t.log_base = N,
    t.common_log = function(t) {
        return N(t, 10)
    }
    ,
    t.nthroot = function(r, n) {
        return t.pow(r, 1 / n)
    }
    ;
    var b = 1 / Math.PI;
    function q(t) {
        return !(t > 1e12) && Math.round(b * t) * Math.PI === t
    }
    function x(t) {
        if (t > 1e12)
            return !1;
        var r = Math.round(2 * b * t);
        return r % 2 == 1 && r * Math.PI == 2 * t
    }
    function P(t) {
        return q(Math.abs(t)) ? 0 : Math.sin(t)
    }
    function w(t) {
        return x(Math.abs(t)) ? 0 : Math.cos(t)
    }
    function I(t) {
        var r = Math.abs(t);
        return q(r) ? 0 : x(r) ? 1 / 0 : Math.tan(t)
    }
    function y(t) {
        for (var r = 0, n = 0; n < t.length; n++)
            r += t[n];
        return r / t.length
    }
    function S(t) {
        return t > 50 ? Math.exp(.5 * ((1 - t) * a.log1p(-1 / (t - 1)) - 1) + O(.5 * (t - 1)) - O(.5 * (t - 2))) * Math.sqrt((1 - 1 / t) / (2 * Math.PI)) : p((t + 1) / 2) / (p(t / 2) * Math.sqrt(t * Math.PI))
    }
    function j(t, r, n) {
        if (void 0 === n && (n = t - r),
        Math.abs(n) < .1 * (t + r))
            for (var e = n / (t + r), a = n * n / (t + r), u = 2 * t * e, o = 1; o < 10; o++) {
                var i = a + (u *= e * e) / (2 * o + 1);
                if (i == a)
                    return i;
                a = i
            }
        return t * Math.log(t / r) + r - t
    }
    t.sin = P,
    t.cos = w,
    t.tan = I,
    t.sec = function(t) {
        return x(Math.abs(t)) ? 1 / 0 : 1 / Math.cos(t)
    }
    ,
    t.csc = function(t) {
        return q(Math.abs(t)) ? 1 / 0 : 1 / Math.sin(t)
    }
    ,
    t.cot = function(t) {
        var r = Math.abs(t);
        return q(r) ? 1 / 0 : x(r) ? 0 : 1 / Math.tan(t)
    }
    ,
    t.acot = function(t) {
        return Math.PI / 2 - Math.atan(t)
    }
    ,
    t.acsc = function(t) {
        return Math.asin(1 / t)
    }
    ,
    t.asec = function(t) {
        return Math.acos(1 / t)
    }
    ,
    t.sech = function(t) {
        return 1 / a.cosh(t)
    }
    ,
    t.csch = function(t) {
        return 1 / a.sinh(t)
    }
    ,
    t.coth = function(t) {
        return 1 / a.tanh(t)
    }
    ,
    t.asech = function(t) {
        return a.acosh(1 / t)
    }
    ,
    t.acsch = function(t) {
        return a.asinh(1 / t)
    }
    ,
    t.acoth = function(t) {
        return a.atanh(1 / t)
    }
    ,
    t.mean = y,
    t.total = function(t) {
        for (var r = 0, n = 0; n < t.length; n++)
            r += t[n];
        return r
    }
    ;
    var F = [0, .08106146679532726, .0413406959554093, .02767792568499834, .020790672103765093, .016644691189821193, .013876128823070748, .01189670994589177, .010411265261972096, .009255462182712733, .00833056343336287, .007573675487951841, .00694284010720953, .006408994188004207, .0059513701127588475, .005554733551962801];
    function O(t) {
        return t > 15 ? T(t) : t < 0 ? NaN : t === Math.floor(t) ? F[t] : Math.log(v(t) / (Math.pow(t, t) * Math.exp(-t) * Math.sqrt(2 * Math.PI * t)))
    }
    function T(t) {
        var r = t * t;
        return (.08333333333333333 - (.002777777777777778 - (.0007936507936507937 - (.0005952380952380953 - .0008417508417508417 / r) / r) / r) / r) / t
    }
    function Q(t, r) {
        return r <= 0 ? NaN : S(r) * Math.pow(1 + t * t / r, -(r + 1) / 2)
    }
    function C(t, r) {
        if (r > 0)
            return 1 - C(t, -r);
        if (r === -1 / 0)
            return 0;
        if (0 === r)
            return .5;
        if (t >= 40 && r > -1)
            return .5 + S(t) * function(t, r) {
                for (var n = r * r / t, e = r, a = e, u = 1; u <= 15; u++)
                    a += e *= -(2 * u - 1) / (2 * u + 1) * (.5 * (t + 1) + u - 1) / u * n;
                return a
            }(t, r);
        if (r / t < -1e3) {
            var n = r * r;
            return S(t) * Math.pow(t, .5 * (t - 1)) * Math.pow(Math.abs(r), -t) * (1 - t * t * (t + 1) * (1 / (2 + t) + t * (t + 3) / (4 * (4 + t) * n)) / (2 * n))
        }
        var e = Math.sqrt(r * r + t);
        return function(t, r, n) {
            if (t < 0 || t > 1)
                throw new RangeError("First argument must be between 0 and 1.");
            if (1 === r && 1 === n)
                return t;
            if (0 === t)
                return 0;
            if (1 === t)
                return 1;
            if (0 === r)
                return 1;
            if (0 === n)
                return 0;
            var e = O(r + n) - O(r) - O(n) - j(r, (r + n) * t) - j(n, (r + n) * (1 - t), (r + n) * t - r)
              , a = Math.exp(e) * Math.sqrt(r * n / (2 * Math.PI * (r + n)));
            return t < (r + 1) / (r + n + 2) ? a * R(t, r, n) / r : 1 - a * R(1 - t, n, r) / n
        }((r + e) / (2 * e), t / 2, t / 2)
    }
    function E(t, r, n) {
        return n <= 0 ? NaN : t === -1 / 0 ? C(n, r) : t > 0 && r > 0 ? C(n, -t) - C(n, -r) : C(n, r) - C(n, t)
    }
    function R(t, r, n) {
        var e = Math.pow(2, -52)
          , a = 1e-300
          , u = r + n
          , o = r + 1
          , i = r - 1
          , f = 1
          , h = 1 - u * t / o;
        Math.abs(h) < a && (h = a);
        for (var c = h = 1 / h, s = 1; s <= 100; s++) {
            var l = 2 * s
              , M = s * (n - s) * t / ((i + l) * (r + l));
            h = 1 + M * h,
            Math.abs(h) < a && (h = a),
            f = 1 + M / f,
            Math.abs(f) < a && (f = a),
            c *= (h = 1 / h) * f,
            h = 1 + (M = -(r + s) * (u + s) * t / ((r + l) * (o + l))) * h,
            Math.abs(h) < a && (h = a),
            f = 1 + M / f,
            Math.abs(f) < a && (f = a);
            var v = (h = 1 / h) * f;
            if (c *= v,
            Math.abs(v - 1) <= e)
                return c
        }
        return c
    }
    function _(t, r, n) {
        return (t - r) / (Math.SQRT2 * Math.abs(n))
    }
    function G(t) {
        return t < 0 ? .5 * Math.exp(-t * t) * K(-t) : 1 - .5 * Math.exp(-t * t) * K(t)
    }
    function A(r) {
        var n = t.md5Spyable(r);
        return (4294967296 * (2097151 & parseInt(n.slice(0, 8), 16)) + parseInt(n.slice(8, 16), 16)) / 9007199254740992
    }
    function D(t, r) {
        for (var n = r.length - 1; n > 0; n--) {
            var e = t + "::sc" + n
              , a = Math.floor(A(e) * (n + 1))
              , u = r[n];
            r[n] = r[a],
            r[a] = u
        }
    }
    function L(t, r, n) {
        return A(t) * (n - r) + r
    }
    function k(t, r, n) {
        return t >= r ? 1 : t < 0 ? 0 : t < Math.floor((r + 1) * n) ? B(t, r, n) : 1 - B(r - t - 1, r, 1 - n)
    }
    function B(t, r, n) {
        for (var e = (1 - n) / n, a = U(t, r, n), u = a; t > 0 && u + (a *= t / (r - t + 1) * e) !== u; t--)
            u += a;
        return u
    }
    function U(t, r, n) {
        if (t = Math.round(t),
        (r = l(Math.round(r), 0, 1 / 0)) === 1 / 0)
            return NaN;
        if (n = l(n, 0, 1),
        t < 0 || t > r)
            return 0;
        if (0 === n)
            return 0 === t ? 1 : 0;
        if (1 === n)
            return t === r ? 1 : 0;
        if (0 === t)
            return Math.exp(r * a.log1p(-n));
        if (t === r)
            return Math.pow(n, r);
        var e = O(r) - O(t) - O(r - t) - j(t, r * n) - j(r - t, r * (1 - n), r * n - t);
        return Math.exp(e) * Math.sqrt(r / (2 * Math.PI * t * (r - t)))
    }
    function z(t, r) {
        return r < 0 ? NaN : (t = Math.round(t)) < 0 ? 0 : 0 === r ? 0 === t ? 1 : 0 : 0 === t ? Math.exp(-r) : Math.exp(-O(t) - j(t, r)) / Math.sqrt(2 * Math.PI * t)
    }
    function H(t, r) {
        if (isNaN(t) || isNaN(r))
            return NaN;
        if (t === 1 / 0)
            return 1;
        if ((t = Math.floor(t)) < 0)
            return 0;
        if (0 === r)
            return 1;
        if (t + 1 > 12 && 2.35 * (t + 1) > r && .3 * (t + 1) < r)
            return function(t, r) {
                for (var n = r / t, e = a.sign(r - t) * Math.sqrt(2 * j(1, n)), u = [1, -.3333333333333333, .08333333333333333, -.014814814814814815, .0011574074074074073, .0003527336860670194, -.0001787551440329218, 3919263178522438e-20, -2185448510679992e-21, -185406221071516e-20, 8.296711340953087e-7, -1.7665952736826078e-7, 6.707853543401498e-9, 1.0261809784240309e-8, -4.382036018453353e-9, 9.14769958223679e-10, -25514193994946248e-27, -5830772132550426e-26, 24361948020667415e-27, -50276692801141755e-28, 11004392031956135e-29, 3371763262400985e-28, -1392388722418162e-28, 28534893807047445e-30, -5139111834242572e-31, -19752288294349442e-31, 8099521156704561e-31], o = u.length - 2, i = 0, f = 0, h = 0, c = 0; o >= 0; o--)
                    c = e * c + (h = (o + 2) * i / t + u[o + 1]),
                    i = f,
                    f = h;
                if (c *= t / (t + i),
                r < t) {
                    var s = Math.exp(-.5 * t * e * e) * (.5 * K(-e * Math.sqrt(t / 2)) - c / Math.sqrt(2 * Math.PI * t));
                    return isFinite(s) ? 1 - s : 1
                }
                var l = Math.exp(-.5 * t * e * e) * (.5 * K(e * Math.sqrt(t / 2)) + c / Math.sqrt(2 * Math.PI * t));
                return isFinite(l) ? l : 0
            }(t + 1, r);
        if (t + 1 >= r) {
            var n = function(t, r) {
                var n = Math.pow(2, -52)
                  , e = 1e-300
                  , a = 1 / t
                  , u = 1 / e
                  , o = 1 / t
                  , i = 2
                  , f = 0
                  , h = t
                  , c = -(t - 1)
                  , s = 0;
                do {
                    0 === (o = o * (c -= 1) * r + (h += 1)) && (o = e),
                    0 === (u = h + c * r / u) && (u = e),
                    a *= f = u * (o = 1 / o),
                    0 === (o = o * (s += 1) * r + (h += 1)) && (o = e),
                    0 === (u = h + s * r / u) && (u = e),
                    a *= f = u * (o = 1 / o),
                    i += 2
                } while (i < 100 && Math.abs(f - 1) > n);
                return a
            }(t + 1, r);
            return isFinite(n) ? 1 - r * z(t, r) * n : 1
        }
        n = function(t, r) {
            var n = Math.pow(2, -52)
              , e = 1e-300
              , a = r + 1 - t
              , u = 1 / a
              , o = 1 / e
              , i = 1 / a
              , f = 2
              , h = 0
              , c = a;
            do {
                var s = -(f - 1) * (f - t - 1);
                0 === (i = i * s + (c += 2)) && (i = e),
                0 === (o = c + s / o) && (o = e),
                u *= h = o * (i = 1 / i),
                f += 1
            } while (f < 100 && Math.abs(h - 1) > n);
            return u
        }(t + 1, r);
        return isFinite(n) ? r * z(t, r) * n : 0
    }
    function J(t, r, n) {
        return n <= r ? NaN : t < r ? 0 : t > n ? 1 : (t - r) / (n - r)
    }
    function K(t) {
        if (t < 0)
            return t < -6.1 ? 2 * Math.exp(t * t) : 2 * Math.exp(t * t) - K(-t);
        if (t > 50) {
            var r = .5641895835477563
              , n = t * t;
            return t > 5e7 ? r / t : r * (n * (n + 4.5) + 2) / (t * (n * (n + 5) + 3.75))
        }
        return (.9999999999999999 + t * (2.224574423459406 + t * (2.444115549920689 + t * (1.7057986861852539 + t * (.8257463703357973 + t * (.28647031042892007 + t * (.07124513844341643 + t * (.012296749268608364 + t * (.001347817214557592 + 7263959403471071e-20 * t))))))))) / (1 + t * (3.352953590554884 + t * (5.227518529742423 + t * (5.003720878235473 + t * (3.266590890998987 + t * (1.5255421920765353 + t * (.5185887413188858 + t * (.12747319185915415 + t * (.02185979575963238 + t * (.0023889438122503674 + .00012875032817508128 * t))))))))))
    }
    function V(t) {
        var r, n, e;
        return t > .5 ? -V(1 - t) : .5 === t ? 0 : t < 0 ? NaN : 0 === t ? -1 / 0 : (e = t < .02425 ? (((((-.00778489400243029 * (r = Math.sqrt(-2 * Math.log(t))) - .322396458041136) * r - 2.40075827716184) * r - 2.54973253934373) * r + 4.37466414146497) * r + 2.93816398269878) / ((((.00778469570904146 * r + .32246712907004) * r + 2.445134137143) * r + 3.75440866190742) * r + 1) : (((((-39.6968302866538 * (n = (r = t - .5) * r) + 220.946098424521) * n - 275.928510446969) * n + 138.357751867269) * n - 30.6647980661472) * n + 2.50662827745924) * r / (((((-54.4760987982241 * n + 161.585836858041) * n - 155.698979859887) * n + 66.8013118877197) * n - 13.2806815528857) * n + 1)) - Math.sqrt(2 * Math.PI) * (.5 * K(-e / Math.SQRT2) - Math.exp(.5 * e * e) * t)
    }
    function W(t, r) {
        if (r <= 0 || t < 0 || t > 1)
            return NaN;
        if (0 === t)
            return 0;
        if (1 === t)
            return 1 / 0;
        for (var n = 1, e = 1, a = 1; Math.exp(-r) * e < t; ) {
            if (e + (n *= r / a) === e)
                return 1 / 0;
            e += n,
            a += 1
        }
        return a - 1
    }
    function X(t, r, n) {
        if (r !== Math.round(r))
            return NaN;
        if (n < 0 || n > 1)
            return NaN;
        if (t < 0 || t > 1)
            return NaN;
        if (0 === t)
            return 0;
        if (1 === t)
            return r;
        if (0 === r)
            return 0;
        if (1 === n)
            return r;
        if (0 === n)
            return 0;
        for (var e = n / (1 - n), a = Math.pow(1 - n, r), u = a, o = 1; u < t; ) {
            if (u + (a *= (r - o + 1) / o * e) === u)
                return r;
            if (o > r)
                return r;
            u += a,
            o += 1
        }
        return o - 1
    }
    function Y(t, r) {
        var n = 4 * r * (1 - r);
        switch (t) {
        case 1:
            return Math.tan(Math.PI * (r - .5));
        case 2:
            return 2 * (r - .5) * Math.sqrt(2 / n);
        case 4:
            var e = Math.cos(Math.acos(Math.sqrt(n)) / 3) / Math.sqrt(n);
            return 2 * a.sign(r - .5) * Math.sqrt(e - 1);
        default:
            throw new Error("_invTSimple() must be called with 1, 2, or 4 df.")
        }
    }
    function Z(t, r) {
        var n = Mt(t);
        return (y(t) - r) * Math.sqrt(t.length) / n
    }
    function $(t, r) {
        var n = t.length
          , e = y(t)
          , a = Mt(t)
          , u = r.length
          , o = y(r)
          , i = Mt(r);
        return (e - o) / (Math.sqrt(((n - 1) * a * a + (u - 1) * i * i) / (n + u - 2)) * Math.sqrt(1 / n + 1 / u))
    }
    function tt(t, r, n) {
        return n < 0 ? E(-1 / 0, t, r) : n > 0 ? E(-1 / 0, -t, r) : 2 * E(-1 / 0, -Math.abs(t), r)
    }
    function rt(t) {
        if (t.length < 1)
            return NaN;
        var r = t[0];
        if (isNaN(r))
            return NaN;
        for (var n = 1; n < t.length; n++) {
            if (isNaN(t[n]))
                return NaN;
            t[n] < r && (r = t[n])
        }
        return r
    }
    function nt(t) {
        if (t.length < 1)
            return NaN;
        var r = t[0];
        if (isNaN(r))
            return NaN;
        for (var n = 1; n < t.length; n++) {
            if (isNaN(t[n]))
                return NaN;
            t[n] >= r && (r = t[n])
        }
        return r
    }
    function et(t, r) {
        if (!isFinite(r) || r < 0 || r > 1)
            return NaN;
        if (t.some(isNaN))
            return NaN;
        if (0 === t.length)
            return NaN;
        var n = t.length
          , e = ut(t)
          , a = r * (n - 1);
        return Math.floor(a) === a ? t[e[a]] : (Math.ceil(a) - a) * t[e[Math.floor(a)]] + (a - Math.floor(a)) * t[e[Math.ceil(a)]]
    }
    function at(t, r) {
        if (!isFinite(r) || r < 0 || r > 4)
            return NaN;
        if (t.some(isNaN))
            return NaN;
        var n = ut(t)
          , e = ot(t, r)
          , a = Math.floor(e)
          , u = Math.ceil(e);
        return (t[n[a]] + t[n[u]]) / 2
    }
    function ut(t) {
        for (var r = t.length, n = [], e = 0; e < r; e++)
            n.push(e);
        return n.sort(function(r, n) {
            return c.asFloat(c.sub(t[r], t[n]))
        }),
        n
    }
    function ot(t, r) {
        r = Math.round(r);
        var n, e = t.length, a = e % 2 == 1;
        return 1 === e ? 0 : (0 === r && (n = 0),
        2 === r && (n = (e - 1) / 2),
        4 === r && (n = e - 1),
        1 === r && (n = a ? (e + 1) / 4 - 1 : (e + 2) / 4 - 1),
        3 === r && (n = a ? (3 * e + 3) / 4 - 1 : (3 * e + 2) / 4 - 1),
        void 0 === n ? NaN : n)
    }
    function it(t) {
        return et(t, .5)
    }
    function ft(t) {
        for (var r = y(t), n = 0, e = 0; e < t.length; e++) {
            var a = t[e] - r;
            n += a * a
        }
        return n / t.length
    }
    function ht(t) {
        var r = t.length;
        return ft(t) * r / (r - 1)
    }
    function ct(t, r) {
        var n = Math.min(t.length, r.length);
        t.length !== n && (t = t.slice(0, n)),
        r.length !== n && (r = r.slice(0, n));
        for (var e = y(t), a = y(r), u = 0, o = 0; o < n; o++)
            u += (t[o] - e) * (r[o] - a);
        return u / n
    }
    function st(t, r) {
        var n = Math.min(t.length, r.length);
        t.length !== n && (t = t.slice(0, n)),
        r.length !== n && (r = r.slice(0, n));
        for (var e = y(t), a = y(r), u = 0, o = 0, i = 0, f = 0; f < n; f++) {
            var h = t[f] - e
              , c = r[f] - a;
            u += h * h,
            o += c * c,
            i += h * c
        }
        return i / Math.sqrt(u * o)
    }
    function lt(t) {
        var r = t.length;
        if (0 === r)
            return [];
        for (var n = [], e = [], a = 0; a < r; a++)
            e.push([t[a], a]);
        e.sort(function(t, r) {
            var n = t[0]
              , e = r[0];
            return n === 1 / 0 && e === 1 / 0 || n === -1 / 0 && e === -1 / 0 ? 0 : n - e
        });
        for (var u = 0, o = 1, i = 1; u < r; ) {
            for (var f = u; f < r - 1 && e[f][0] === e[f + 1][0]; )
                f += 1;
            i = f - u + 1;
            var h = void 0;
            for (f = 0; f < i; f++)
                n[h = e[u + f][1]] = isNaN(t[h]) ? NaN : o + .5 * (i - 1);
            o += i,
            u += i
        }
        return n
    }
    function Mt(t) {
        return Math.sqrt(ht(t))
    }
    function vt(t, r, n) {
        return [l(Math.round(t), 0, 255), l(Math.round(r), 0, 255), l(Math.round(n), 0, 255)]
    }
    function pt(t) {
        if (Array.isArray(t))
            return "[" + t.map(pt).join(",") + "]";
        switch (typeof t) {
        case "string":
            return t;
        case "boolean":
        case "number":
            return t.toString();
        case "object":
            if ("object" == typeof (e = t) && e && "Action" === e.type) {
                var r = [];
                for (var n in t.updateRules)
                    r.push('"' + n + '": ' + pt(t.updateRules[n].value));
                return "{" + r.join(",") + "}"
            }
            return t.n + "/" + t.d;
        default:
            return t
        }
        var e
    }
    t.tpdf = Q,
    t.tcdf = E,
    t.normalcdf = function(t, r, n, e) {
        var a = _(r, n, e);
        if (t === -1 / 0)
            return G(a);
        var u = _(t, n, e);
        return t > 0 && r > 0 ? G(-u) - G(-a) : G(a) - G(u)
    }
    ,
    t.normalpdf = function(t, r, n) {
        return 1 / Math.sqrt(2 * Math.PI * n * n) * Math.exp(-(t - r) * (t - r) / (2 * n * n))
    }
    ,
    t.random = A,
    t.shuffle = function(t, r) {
        var n = r.slice();
        return D(t, n),
        n
    }
    ,
    t.randomPerm = function(t, r) {
        for (var n = [], e = 0; e < r; e++)
            n.push(e);
        return D(t, n),
        n
    }
    ,
    t.uniformSample = L,
    t.normalSample = function(t, r, n) {
        var e, a, u, o, i = 0;
        do {
            e = t + "::sc" + i,
            i += 1,
            a = 2 * L(e, 0, 1) - 1,
            e = t + "::sc" + i,
            i += 1,
            o = a * a + (u = 2 * L(e, 0, 1) - 1) * u
        } while (o >= 1 || 0 === o);
        return r + n * a * Math.sqrt(-2 * Math.log(o) / o)
    }
    ,
    t.tSample = function(t, r) {
        if (r <= 0)
            return NaN;
        var n, e, a, u, o = 0;
        do {
            n = t + "::sc" + o,
            o += 1,
            e = 2 * L(n, 0, 1) - 1,
            n = t + "::sc" + o,
            o += 1,
            u = e * e + (a = 2 * L(n, 0, 1) - 1) * a
        } while (u > 1);
        var i = e * e / u
          , f = r * (Math.pow(u, -2 / r) - 1);
        return n = t + "::sc" + o,
        o += 1,
        (L(n, 0, 1) < .5 ? -1 : 1) * Math.sqrt(i * f)
    }
    ,
    t.binomSample = function(t, r, n) {
        return (r = l(Math.round(r), 0, 1 / 0)) === 1 / 0 ? NaN : (n = l(n, 0, 1),
        X(L(t, 0, 1), r, n))
    }
    ,
    t.poissonSample = function(t, r) {
        return r <= 0 ? NaN : W(L(t, 0, 1), r)
    }
    ,
    t.binomcdf = function(t, r, n, e) {
        return (n = l(Math.round(n), 0, 1 / 0)) === 1 / 0 ? NaN : (e = l(e, 0, 1),
        r < 0 ? 0 : (t = Math.ceil(t),
        r = Math.floor(r),
        t === -1 / 0 ? k(r, n, e) : k(r, n, e) - k(t - 1, n, e)))
    }
    ,
    t.binompdf = U,
    t.poissonpdf = z,
    t.poissoncdf = function(t, r, n) {
        return n <= 0 ? NaN : (t = Math.ceil(t),
        (r = Math.floor(r)) < 0 ? 0 : t === -1 / 0 ? H(r, n) : H(r, n) - H(t - 1, n))
    }
    ,
    t.uniformpdf = function(t, r, n) {
        return n <= r ? NaN : t < r || t > n ? 0 : 1 / (n - r)
    }
    ,
    t.uniformcdf = function(t, r, n, e) {
        return J(r, n, e) - J(t, n, e)
    }
    ,
    t.erf = function(t) {
        var r = -t * t;
        return r < -750 ? t >= 0 ? 1 : -1 : t >= .065 ? 1 - Math.exp(r) * K(t) : t <= -.065 ? Math.exp(r) * K(-t) - 1 : t * (1.1283791670955126 + r * (.37612638903183754 + r * (.11283791670955126 + r * (.026866170645131252 + .005223977625442188 * r))))
    }
    ,
    t.erfcx = K,
    t.invNorm = V,
    t.invPoisson = W,
    t.invBinom = X,
    t.invT = function t(r, n) {
        return isNaN(n) || n <= 0 || r < 0 || r > 1 ? NaN : 0 === r ? -1 / 0 : 1 === r ? 1 / 0 : 1 === n || 2 === n || 4 === n ? Y(n, r) : .5 === r ? 0 : r > .5 ? function(t, r, n, e) {
            if (!isFinite(n) || !isFinite(e))
                return NaN;
            var a = n
              , u = e;
            for (; ; ) {
                var o = h.floatMiddle(a, u)
                  , i = C(t, o);
                if (o === a || o === u)
                    return i > r ? a : u;
                i < r ? a = o : u = o
            }
        }(n, r, n > 1 ? V(r) : Y(1, r), n > 1 ? Y(1, r) : Math.pow(Q(0, n) * Math.pow(n, (n - 1) / 2) / (1 - r), 1 / n)) : -t(1 - r, n)
    }
    ,
    t.invUniform = function(t, r, n) {
        return t < 0 || t > 1 || n <= r ? NaN : 0 === t ? r : 1 === t ? n : r + t * (n - r)
    }
    ,
    t.tscore = Z,
    t.itscore = $,
    t.ttest = function(t, r) {
        1 === arguments.length && (r = 0);
        var n = Z(t, r)
          , e = t.length - 1;
        return {
            lessThan: tt(n, e, -1),
            greaterThan: tt(n, e, 1),
            notEqual: tt(n, e, 0)
        }
    }
    ,
    t.ittest = function(t, r) {
        var n = $(t, r)
          , e = t.length + r.length - 2;
        return {
            lessThan: tt(n, e, -1),
            greaterThan: tt(n, e, 1),
            notEqual: tt(n, e, 0)
        }
    }
    ,
    t.stats = function(t) {
        return {
            min: rt(t),
            q1: at(t, 1),
            median: it(t),
            q3: at(t, 3),
            max: nt(t)
        }
    }
    ,
    t.length = function(t) {
        return t.length
    }
    ,
    t.listMin = rt,
    t.listMax = nt,
    t.quantile = et,
    t.quartile = at,
    t.sortPerm = ut,
    t.quartileIndex = ot,
    t.upperQuantileIndex = function(t, r) {
        return ut(t)[Math.ceil(r * (t.length - 1))] + 1
    }
    ,
    t.lowerQuantileIndex = function(t, r) {
        return ut(t)[Math.floor(r * (t.length - 1))] + 1
    }
    ,
    t.upperQuartileIndex = function(t, r) {
        return ut(t)[Math.ceil(ot(t, r))] + 1
    }
    ,
    t.lowerQuartileIndex = function(t, r) {
        return ut(t)[Math.floor(ot(t, r))] + 1
    }
    ,
    t.median = it,
    t.argMin = function(t) {
        if (t.length < 1)
            return 0;
        var r = t[0];
        if (isNaN(r))
            return 0;
        for (var n = 0, e = 1; e < t.length; e++) {
            if (isNaN(t[e]))
                return 0;
            t[e] < r && (n = e,
            r = t[e])
        }
        return n + 1
    }
    ,
    t.argMax = function(t) {
        if (t.length < 1)
            return 0;
        var r = t[0];
        if (isNaN(r))
            return 0;
        for (var n = 0, e = 1; e < t.length; e++)
            if (t[e] >= r) {
                if (isNaN(t[e]))
                    return 0;
                n = e,
                r = t[e]
            }
        return n + 1
    }
    ,
    t.varp = ft,
    t.mad = function(t) {
        for (var r = y(t), n = 0, e = 0; e < t.length; e++)
            n += Math.abs(t[e] - r);
        return n / t.length
    }
    ,
    t.variance = ht,
    t.covp = ct,
    t.cov = function(t, r) {
        var n = Math.min(t.length, r.length);
        return ct(t, r) * n / (n - 1)
    }
    ,
    t.corr = st,
    t.validateRangeLength = function(t, r, n, e) {
        for (var a = t[0], u = 2; u < t.length; u++) {
            var i = c.asFloat(c.div(c.sub(t[u], a), n));
            if (!o.approx(i, u, 10))
                return 0
        }
        var f = c.asFloat(e);
        for (u = 0; u < r.length - 1; u++) {
            i = c.asFloat(c.div(c.sub(r[u], a), n));
            if (!o.approx(i, f - r.length + u, 10))
                return 0
        }
        return !isFinite(f) || f < t.length || f < r.length ? 0 : f
    }
    ,
    t.validateSampleCount = function(t) {
        return t < 0 || !isFinite(t) ? 0 : t
    }
    ,
    t.rank = lt,
    t.spearman = function(t, r) {
        var n = Math.min(t.length, r.length);
        return t.length !== n && (t = t.slice(0, n)),
        r.length !== n && (r = r.slice(0, n)),
        st(lt(t), lt(r))
    }
    ,
    t.stdev = Mt,
    t.stdevp = function(t) {
        return Math.sqrt(ft(t))
    }
    ,
    t.quad = n.quad,
    t.distance = function(t, r) {
        return o.hypot(r[0] - t[0], r[1] - t[1])
    }
    ,
    t.rgb = vt,
    t.hsv = function(t, n, e) {
        t = l(t, 0, 360),
        n = l(n, 0, 1);
        var a = (e = l(e, 0, 1)) * (1 - n / 2);
        n = 0 === a || 1 === a ? 0 : (e - a) / Math.min(a, 1 - a);
        var u = r.hsl(t, n, a).rgb();
        return vt(u.r, u.g, u.b)
    }
    ,
    t.polygon = function(t) {
        return t
    }
    ,
    t.select = function(t, r) {
        for (var n = [], e = 0; e < t.length; e++)
            r[e] && n.push(t[e]);
        return n
    }
    ,
    t.elementsAt = function(t, r) {
        for (var n = [], e = 0, a = r; e < a.length; e++) {
            var u = a[e];
            n.push(t[u])
        }
        return n
    }
    ,
    t.uniquePerm = function(t) {
        for (var r = [], n = {}, e = 0; e < t.length; e++) {
            var a = pt(t[e]);
            n.hasOwnProperty(a) || (n[a] = !0,
            r.push(e))
        }
        return r
    }
});
define('core/math/functions', ["require", "exports", "core/math/builtin"], function(require, e, t) {
    "use strict";
    function n(e) {
        delete e.fn
    }
    function r(e) {
        e.fn = i(e.args, e.source, e.constants)
    }
    function i(e, n, r) {
        var i = e.join(",");
        return new Function("BuiltIn","_C","return (function(" + i + '){"use strict"; ' + n + "})")(t, r)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.closureFunctionWithBuiltIn = e.rehydrateCompiledFunction = e.dehydrateCompiledFunction = e.rehydrateGraphData = e.dehydrateGraphData = void 0,
    e.dehydrateGraphData = function(e) {
        for (var t = 0, r = e; t < r.length; t++) {
            var i = r[t].compiled;
            i && n(i)
        }
    }
    ,
    e.rehydrateGraphData = function(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var i = n[t].compiled;
            i && r(i)
        }
    }
    ,
    e.dehydrateCompiledFunction = n,
    e.rehydrateCompiledFunction = r,
    e.closureFunctionWithBuiltIn = i
});
define('core/math/ir/instructions', ["require", "exports", "./opcodes"], function(require, e, n) {
    "use strict";
    function t(e) {
        return e.type <= n.MAX_LEAF_OPCODE
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.endsBlock = e.beginsBlock = e.isInternalInstruction = e.isLeafInstruction = void 0,
    e.isLeafInstruction = t,
    e.isInternalInstruction = function(e) {
        return !t(e)
    }
    ,
    e.beginsBlock = function(e) {
        switch (e.type) {
        case n.BeginIntegral:
        case n.BeginBroadcast:
        case n.BeginLoop:
            return !0;
        default:
            return !1
        }
    }
    ,
    e.endsBlock = function(e) {
        switch (e.type) {
        case n.EndLoop:
        case n.EndIntegral:
        case n.EndBroadcast:
            return !0;
        default:
            return !1
        }
    }
});
define('core/math/ir/features/print', ["require", "exports", "../instructions", "../opcodes", "core/math/types", "../../context-types"], function(require, e, r, t, n, s) {
    "use strict";
    function a(e, r) {
        var s = e.getInstruction(r);
        switch (s.type === t.Noop && s.removedInstructionForDebuggingOnly && (s = s.removedInstructionForDebuggingOnly),
        s.type) {
        case t.Noop:
            return c(s.type);
        case t.LoadArg:
            return c(s.type) + " " + n.repr(s.valueType) + " " + e.argNames[r];
        case t.SymbolicVar:
            return c(s.type) + " " + n.repr(s.valueType);
        case t.Constant:
            return c(s.type) + " " + n.repr(s.valueType) + " " + o(s.value);
        case t.NativeFunction:
        case t.Distribution:
            return c(s.type) + " " + n.repr(s.valueType) + " " + s.symbol + " " + s.args.join(" ");
        case t.ExtendSeed:
            return c(s.type) + " " + n.repr(s.valueType) + " " + s.tag + " " + s.args.join(" ");
        case t.BroadcastResult:
            return c(s.type) + " " + n.repr(s.valueType) + " " + s.args.join(" ") + (s.isConstantBroadcast ? " (constant)" : "");
        case t.Add:
        case t.Subtract:
        case t.Multiply:
        case t.Divide:
        case t.RawExponent:
        case t.Exponent:
        case t.Negative:
        case t.OrderedPair:
        case t.OrderedPairAccess:
        case t.BeginLoop:
        case t.EndLoop:
        case t.BeginIntegral:
        case t.EndIntegral:
        case t.BeginBroadcast:
        case t.EndBroadcast:
        case t.Equal:
        case t.Less:
        case t.Greater:
        case t.LessEqual:
        case t.GreaterEqual:
        case t.And:
        case t.Piecewise:
        case t.List:
        case t.ListAccess:
        case t.DeferredListAccess:
        case t.InboundsListAccess:
        case t.BlockVar:
        case t.Action:
            return c(s.type) + " " + n.repr(s.valueType) + " " + s.args.join(" ");
        default:
            throw new Error("Unexpected opcode " + s.type)
        }
    }
    function c(e) {
        switch (e) {
        case t.Noop:
            return "Noop";
        case t.Constant:
            return "Constant";
        case t.Add:
            return "Add";
        case t.Subtract:
            return "Subtract";
        case t.Multiply:
            return "Multiply";
        case t.Divide:
            return "Divide";
        case t.Exponent:
            return "Exponent";
        case t.RawExponent:
            return "RawExponent";
        case t.Negative:
            return "Negative";
        case t.OrderedPair:
            return "OrderedPair";
        case t.OrderedPairAccess:
            return "OrderedPairAccess";
        case t.BeginLoop:
            return "BeginLoop";
        case t.EndLoop:
            return "EndLoop";
        case t.BeginIntegral:
            return "BeginIntegral";
        case t.EndIntegral:
            return "EndIntegral";
        case t.BeginBroadcast:
            return "BeginBroadcast";
        case t.EndBroadcast:
            return "EndBroadcast";
        case t.Equal:
            return "Equal";
        case t.Less:
            return "Less";
        case t.Greater:
            return "Greater";
        case t.LessEqual:
            return "LessEqual";
        case t.GreaterEqual:
            return "GreaterEqual";
        case t.And:
            return "And";
        case t.Piecewise:
            return "Piecewise";
        case t.List:
            return "List";
        case t.ListAccess:
            return "ListAccess";
        case t.DeferredListAccess:
            return "DeferredListAccess";
        case t.InboundsListAccess:
            return "InboundsListAccess";
        case t.NativeFunction:
            return "NativeFunction";
        case t.Distribution:
            return "Distribution";
        case t.LoadArg:
            return "LoadArg";
        case t.BlockVar:
            return "BlockVar";
        case t.BroadcastResult:
            return "BroadcastResult";
        case t.SymbolicVar:
            return "SymbolicVar";
        case t.ExtendSeed:
            return "ExtendSeed";
        case t.Action:
            return "Action";
        default:
            throw new Error("Unexpected opcode " + e.type)
        }
    }
    function o(e) {
        if (Array.isArray(e))
            return "[" + e.map(o).join(",") + "]";
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
        case "number":
            return e.toString();
        case "object":
            if (s.isActionCompilerValue(e)) {
                var r = [];
                for (var t in e.updateRules)
                    r.push('"' + t + '": ' + o(e.updateRules[t].value));
                return "{" + r.join(", ") + "}"
            }
            return e.n + "/" + e.d;
        default:
            throw new Error("Unexpected value: " + e)
        }
    }
    function i(e, r) {
        var t = e.toString();
        return u(r - t.length) + t
    }
    function u(e) {
        for (var r = "", t = 0; t < e; t++)
            r += " ";
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.printValue = e.printOp = e.printInstruction = e.print = void 0,
    e.print = function(e) {
        for (var n = "", s = (e.instructionsLength() - 1).toString().length, c = 0, o = !1, d = 0; d < e.instructionsLength(); d++) {
            var p = e.getInstruction(d)
              , l = e.comments[d] || ""
              , g = p.type === t.Noop && p.removedInstructionForDebuggingOnly;
            if ((r.endsBlock(p) || g && r.endsBlock(g)) && (c -= 1),
            p.type !== t.Noop || g) {
                o = !1;
                var y = g ? " [X]" : "    ";
                n += i(d, s) + ":" + y + " " + u(2 * c) + a(e, d) + (l ? "\t\t# " + l : "") + "\n"
            } else
                o || (n += i(d, s) + ": " + u(2 * c) + "...\n"),
                o = !0;
            (r.beginsBlock(p) || g && r.beginsBlock(g)) && (c += 1)
        }
        return n
    }
    ,
    e.printInstruction = a,
    e.printOp = c,
    e.printValue = o
});
define('core/math/ir/features/is-constant', ["require", "exports", "../opcodes", "./print"], function(require, t, n, s) {
    "use strict";
    function o(t) {
        return t.type === n.Constant
    }
    function r(t) {
        return t.type === n.BroadcastResult && t.isConstantBroadcast
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isConstantOrConstantBroadcast = t.isConstantBroadcast = t.assertConstant = t.isConstant = void 0,
    t.isConstant = o,
    t.assertConstant = function(t) {
        if (!o(t))
            throw new Error("Programming error: expected constant instruction but found " + s.printOp(t.type) + " instead.")
    }
    ,
    t.isConstantBroadcast = r,
    t.isConstantOrConstantBroadcast = function(t) {
        return o(t) || r(t)
    }
});
define('core/math/ir/features/depends-on-outer-variable', ["require", "exports", "../instructions", "./is-constant"], function(require, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.dependsOnOuterVariable = void 0,
    t.dependsOnOuterVariable = function(t, e, s) {
        var i = t.getInstruction(s);
        if (!n.isLeafInstruction(i))
            for (var a = 0, o = i.args; a < o.length; a++) {
                var u = o[a];
                if (!r.isConstantOrConstantBroadcast(t.getInstruction(u)))
                    return !0
            }
        if (e < s)
            return !r.isConstantOrConstantBroadcast(t.getInstruction(e));
        for (var f = [!0], c = s + 1; c <= e; c++)
            f.push(!1);
        for (var d = [e]; d.length; ) {
            if (!f[(c = d.pop()) - s]) {
                f[c - s] = !0;
                var g = t.getInstruction(c);
                if (!n.isLeafInstruction(g))
                    for (var v = 0, l = g.args; v < l.length; v++) {
                        if ((u = l[v]) < s) {
                            if (!r.isConstantOrConstantBroadcast(t.getInstruction(u)))
                                return !0
                        } else
                            f[u - s] || d.push(u)
                    }
            }
        }
        return !1
    }
});
define('core/math/ir/features/reconstitute-ir', ["require", "exports", "core/math/types"], function(require, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.reconstituteIR = void 0,
    e.reconstituteIR = function e(r, n, o) {
        if (t.isList(n)) {
            for (var s = [], i = 0; i < o.length; i++)
                s.push(e(r, t.elementType(n), o[i]));
            return r.ConstantOfType(n, s)
        }
        switch (n) {
        case t.Number:
            return r.Constant(o);
        case t.Bool:
        case t.Point:
        case t.RGBColor:
            return r.ConstantOfType(n, o);
        default:
            throw new Error("Cannot reconstitute value of a " + t.prettyPrint(n) + ".")
        }
    }
});
define('core/math/ir/features/list-length', ["require", "exports", "../opcodes", "core/math/types", "./print"], function(require, t, n, e, r) {
    "use strict";
    function s(t, n) {
        var e = i(t, n);
        if (!(e < 0))
            return e
    }
    function i(t, s, a) {
        var o, u = a && a[s];
        if (u)
            return u;
        var c, g = t.getInstruction(s);
        switch (g.type) {
        case n.List:
            c = g.args.length;
            break;
        case n.Constant:
            c = g.value.length;
            break;
        case n.BroadcastResult:
            c = null !== (o = g.constantLength) && void 0 !== o ? o : -1
        }
        return void 0 === c && (c = function(t, s, a) {
            switch (s.type) {
            case n.Piecewise:
                var o = i(t, s.args[1], a);
                return o === i(t, s.args[2], a) ? o : -1;
            case n.NativeFunction:
                switch (s.symbol) {
                case "elementsAt":
                    return i(t, s.args[1], a);
                case "sortPerm":
                    return i(t, s.args[0], a);
                case "shuffle":
                    return i(t, s.args[1], a);
                default:
                    return -1
                }
            default:
                if (e.isList(s.valueType))
                    return -1;
                throw new Error("Programming Error: cannot find the list length of " + r.printOp(s.type) + " " + e.prettyPrint(s.valueType) + ".")
            }
        }(t, g, a = a || {})),
        a && (a[s] = c),
        c
    }
    function a(t, r) {
        var s = t.getInstruction(r);
        if (!e.isList(s.valueType))
            throw new Error("Programming Error: cannot find the list length of " + t.printInstruction(r));
        switch (s.type) {
        case n.List:
            return t.Constant(s.args.length);
        case n.Constant:
            return t.Constant(s.value.length);
        case n.BroadcastResult:
            var i = t.getInstruction(s.args[0]);
            return t.getInstruction(i.args[0]).args[0];
        case n.NativeFunction:
            switch (s.symbol) {
            case "elementsAt":
                return a(t, s.args[1]);
            case "sortPerm":
                return a(t, s.args[0]);
            case "shuffle":
                return a(t, s.args[1])
            }
        }
        return t.SyntheticNativeFunction("length", [r])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.minListLengthIndex = t.listLengthIndex = t.getConstantListLength = t.assertConstantListLength = void 0,
    t.assertConstantListLength = function(t, n, e) {
        var i = s(t, n);
        if (void 0 === i)
            throw new Error(e + '\nNon-constant instruction: "' + r.printInstruction(t, a(t, n)) + '"');
        return i
    }
    ,
    t.getConstantListLength = s,
    t.listLengthIndex = a,
    t.minListLengthIndex = function(t, n) {
        for (var r = [], i = 0, o = n; i < o.length; i++) {
            var u = o[i];
            e.isList(t.getInstruction(u).valueType) && r.push(u)
        }
        if (0 !== r.length) {
            if (1 === r.length)
                return a(t, r[0]);
            for (var c, g = [], h = 0, l = r; h < l.length; h++) {
                var f = l[h];
                g.push(s(t, f))
            }
            for (var v = 1 / 0, p = 0; p < g.length; p++) {
                var L = r[p]
                  , d = g[p];
                if (void 0 === d)
                    return t.SyntheticNativeFunction("min", [t.List(r.map(function(n) {
                        return a(t, n)
                    }))]);
                d < v && (c = L,
                v = d)
            }
            return void 0 !== c ? a(t, c) : t.Constant(v)
        }
    }
});
define('core/math/ir/features/contains-nan-value', ["require", "exports", "core/math/types", "core/math/maybe-rational"], function(require, e, t, n) {
    "use strict";
    function a(e, a) {
        switch (e) {
        case t.Number:
            return n.isNanFloat(a);
        case t.Point:
            var r = a
              , o = r[0]
              , i = r[1];
            return n.isNanFloat(o) || n.isNanFloat(i);
        case t.RGBColor:
            var s = a
              , u = s[0]
              , c = s[1]
              , l = s[2];
            return n.isNanFloat(u) || n.isNanFloat(c) || n.isNanFloat(l);
        case t.Action:
            return 0 === Object.keys(a.updateRules).length;
        case t.Bool:
            return !1;
        default:
            throw new Error("Type cannot contain a NaN value: " + t.prettyPrint(e) + ".")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.containsNanValue = void 0,
    e.containsNanValue = function(e, n) {
        if (t.isList(e)) {
            for (var r = t.elementType(e), o = 0; o < n.length; o++)
                if (a(r, n[o]))
                    return !0;
            return !1
        }
        return a(e, n)
    }
});
define('core/math/ir/features/interpret', ["require", "exports", "tslib", "core/math/maybe-rational", "../opcodes", "core/math/types", "../instructions", "../builtin-table", "./as-value", "./nan-of-type", "../../builtin", "../../errormsg"], function(require, r, e, t, a, n, s, u, o, c, i, l) {
    "use strict";
    function g(r, e) {
        return t.add(r, e)
    }
    function d(r, e) {
        return t.sub(r, e)
    }
    function p(r, e) {
        return t.mul(r, e)
    }
    function f(r, e) {
        return t.div(r, e)
    }
    function v(r, e) {
        return t.pow(r, e)
    }
    function h(r, e) {
        return v(r, e)
    }
    function y(r) {
        return t.neg(r)
    }
    function m(r, e) {
        return [r, e]
    }
    function E(r, e) {
        return r[t.asFloat(e) - 1]
    }
    function L(r, e) {
        return t.asFloat(r) === t.asFloat(e)
    }
    function A(r, e) {
        return t.asFloat(r) < t.asFloat(e)
    }
    function I(r, e) {
        return t.asFloat(r) > t.asFloat(e)
    }
    function b(r, e) {
        return t.asFloat(r) <= t.asFloat(e)
    }
    function F(r, e) {
        return t.asFloat(r) >= t.asFloat(e)
    }
    function B(r) {
        return r
    }
    function w(r, e, a) {
        var n = Math.floor(t.asFloat(a)) - 1;
        return !isFinite(n) || n < 0 || n >= e.length ? c.nanOfType(r) : e[n]
    }
    function R(r, e) {
        return r[Math.floor(t.asFloat(e)) - 1]
    }
    function q(r, e, a) {
        return t.isRational(a) && (a = t.asFloat(a)),
        e + "::" + r + a
    }
    function P(r, e) {
        switch (r) {
        case "mod":
            return t.mod(e[0], e[1]);
        case "abs":
            return t.abs(e[0]);
        case "sqrt":
            return t.sqrt(e[0]);
        case "nthroot":
            return t.nthroot(e[0], e[1]);
        case "total":
            return t.total(e[0]);
        case "length":
            return e[0].length;
        case "validateRangeLength":
            var a = e[0]
              , n = e[1]
              , s = e[2]
              , c = e[3];
            if (0 === (g = i.validateRangeLength(a, n, s, c)))
                throw l.nonArithmeticRange();
            return g;
        case "validateSampleCount":
            var g;
            c = o.compilerValueToRuntimeValue(e[0]);
            if (0 === (g = i.validateSampleCount(c)) && 0 !== c)
                throw l.badSampleSize();
            return g;
        case "select":
        case "elementsAt":
        case "uniquePerm":
        case "sortPerm":
            var d = u.BuiltInTable[r];
            return i[d.symbol].apply(null, e);
        default:
            return ("Math" === (d = u.BuiltInTable[r]).module ? Math : i)[d.symbol].apply(null, o.compilerValueToRuntimeValue(e))
        }
    }
    function T(r, e, a) {
        if (e.constantLength)
            return e.constantLength;
        var n = e.args[0]
          , s = r.getInstruction(n).args[0]
          , u = r.getInstruction(s);
        return t.asFloat(M(r, u.args[0], a))
    }
    function x(r, e, t, a) {
        var s = r.getInstruction(e)
          , u = T(r, s, a);
        if (!isFinite(t) || t < 0 || t >= u)
            return c.nanOfType(n.elementType(s.valueType));
        var o = s.args[0]
          , i = e - o
          , l = r.getInstruction(o)
          , g = l.args[0]
          , d = l.args[i];
        a[g] = t + 1;
        for (var p = M(r, d, a), f = g; f <= o; f++)
            a[f] = void 0;
        return p
    }
    function S(r, n, s) {
        var u = M(r, n.args[1], s)
          , o = n.args[0]
          , c = r.getInstruction(o);
        if (c.type === a.BroadcastResult)
            return x(r, o, t.asFloat(u) - 1, s);
        if (c.type === a.Piecewise) {
            var i = M(r, c.args[0], s);
            return S(r, e.__assign(e.__assign({}, n), {
                args: [i ? c.args[1] : c.args[2], n.args[1]]
            }), s)
        }
        var l = M(r, n.args[0], s);
        return w(n.valueType, l, u)
    }
    function M(r, e, a) {
        var n = a[e];
        if (void 0 !== n)
            return n;
        var s = O(r, e, a);
        return "number" == typeof s && s === Math.floor(s) && (s = t.maybeRational(s, 1)),
        a[e] = s,
        s
    }
    function O(r, e, t) {
        var n = r.getInstruction(e);
        switch (n.type) {
        case a.Constant:
            return n.value;
        case a.Add:
            return g(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Subtract:
            return d(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Multiply:
            return p(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Divide:
            return f(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Exponent:
            return v(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.RawExponent:
            return h(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Negative:
            return y(M(r, n.args[0], t));
        case a.OrderedPair:
            return m(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.OrderedPairAccess:
            return E(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Equal:
            return L(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Less:
            return A(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Greater:
            return I(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.LessEqual:
            return b(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.GreaterEqual:
            return F(M(r, n.args[0], t), M(r, n.args[1], t));
        case a.And:
            return M(r, n.args[0], t) && M(r, n.args[1], t);
        case a.ExtendSeed:
            return q(n.tag, M(r, n.args[0], t), M(r, n.args[1], t));
        case a.Piecewise:
            var u = M(r, n.args[0], t);
            return M(r, u ? n.args[1] : n.args[2], t);
        case a.NativeFunction:
            for (var o = [], c = 0, i = n.args; c < i.length; c++) {
                var l = i[c];
                o.push(M(r, l, t))
            }
            return P(n.symbol, o);
        case a.List:
            o = [];
            for (var B = 0, w = n.args; B < w.length; B++) {
                l = w[B];
                o.push(M(r, l, t))
            }
            return o;
        case a.ListAccess:
        case a.DeferredListAccess:
        case a.InboundsListAccess:
            return S(r, n, t);
        case a.BroadcastResult:
            return function(r, e, t) {
                for (var a = r.getInstruction(e), n = [], s = T(r, a, t) - 1; s >= 0; s--)
                    n[s] = x(r, e, s, t);
                return n
            }(r, e, t);
        case a.BlockVar:
            var R = n.args[0]
              , O = r.getInstruction(R).args[0]
              , D = e - R
              , N = r.getInstruction(R).args[D]
              , V = [];
            V[N] = !0;
            for (var _ = N; _ >= O; _--)
                if (V[_]) {
                    var C = r.getInstruction(_);
                    if (!s.isLeafInstruction(C))
                        for (var G = 0, k = C.args; G < k.length; G++) {
                            (l = k[G]) < O ? M(r, l, t) : V[l] = !0
                        }
                }
            var W = r.copy();
            W.truncate(O);
            for (_ = 0; _ < O; _++) {
                var j = t[_]
                  , z = r.getInstruction(_);
                if (void 0 !== j) {
                    var H = z.valueType;
                    W.replaceInstructionWithConstant(_, {
                        type: a.Constant,
                        valueType: H,
                        value: j
                    })
                }
            }
            var J = [];
            for (_ = O; _ < e; _++) {
                var K = r.getInstruction(_);
                if (s.isLeafInstruction(K))
                    J.push(W.copyInstruction(K));
                else {
                    for (var Q = [], U = 0, X = K.args; U < X.length; U++) {
                        l = X[U];
                        Q.push(l < O ? l : J[l - O])
                    }
                    K.type === a.DeferredListAccess ? J.push(W.InboundsListAccess(Q)) : J.push(W.copyInstructionWithArgs(K, Q))
                }
            }
            return W.Noop(),
            W.replaceInstructionWithBlockVar(W.returnIndex, {
                type: a.BlockVar,
                valueType: n.valueType,
                args: [R < O ? R : J[R - O]]
            }),
            W.close().getCompiledFunction().fn();
        case a.BeginLoop:
        case a.EndLoop:
        case a.BeginIntegral:
        case a.EndIntegral:
        case a.BeginBroadcast:
        case a.EndBroadcast:
        case a.Distribution:
        case a.Noop:
        case a.LoadArg:
        case a.SymbolicVar:
        case a.Action:
            throw new Error("Programming Error: cannot interpret opcode " + n.type);
        default:
            throw new Error("Programming Error: unexpected opcode " + n.type)
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r._interpretRecursive = r.interpretBroadcastElements = r.interpretBroadcastElement = r.interpret = r.NativeFunction = r.ExtendSeed = r.InboundsListAccess = r.DeferredListAccess = r.ListAccess = r.List = r.And = r.GreaterEqual = r.LessEqual = r.Greater = r.Less = r.Equal = r.OrderedPairAccess = r.OrderedPair = r.Negative = r.RawExponent = r.Exponent = r.Divide = r.Multiply = r.Subtract = r.Add = void 0,
    r.Add = g,
    r.Subtract = d,
    r.Multiply = p,
    r.Divide = f,
    r.Exponent = v,
    r.RawExponent = h,
    r.Negative = y,
    r.OrderedPair = m,
    r.OrderedPairAccess = E,
    r.Equal = L,
    r.Less = A,
    r.Greater = I,
    r.LessEqual = b,
    r.GreaterEqual = F,
    r.And = function(r, e) {
        return r && e
    }
    ,
    r.List = B,
    r.ListAccess = w,
    r.DeferredListAccess = function(r, e) {
        return R(r, e)
    }
    ,
    r.InboundsListAccess = R,
    r.ExtendSeed = q,
    r.NativeFunction = P,
    r.interpret = function(r, e) {
        return M(r, e, Array(e + 1))
    }
    ,
    r.interpretBroadcastElement = function(r, e, t) {
        return x(r, e, t, Array(e + 1))
    }
    ,
    r.interpretBroadcastElements = function(r, e, t) {
        for (var a = Array(e + 1), n = [], s = 0, u = t; s < u.length; s++) {
            var o = u[s];
            n.push(x(r, e, o, a))
        }
        return n
    }
    ,
    r._interpretRecursive = O
});
define('core/math/ir/features/find-dependency-symbols', ["require", "exports", "../instructions", "../opcodes"], function(require, e, o, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.findDependencySymbols = void 0,
    e.findDependencySymbols = function(e, r) {
        for (var n = [], a = [], t = 0; t < r; t++)
            a.push(!1);
        for (a.push(!0),
        t = r; t >= 0; t--)
            if (a[t]) {
                var i = e.getInstruction(t);
                if (i.type === s.LoadArg)
                    n.push({
                        symbol: e.argNames[t],
                        scope: "free"
                    });
                else if (o.beginsBlock(i))
                    switch (i.type) {
                    case s.BeginIntegral:
                        n.push({
                            symbol: i.callData.indexSymbol,
                            scope: "integral"
                        });
                        break;
                    case s.BeginLoop:
                        n.push({
                            symbol: i.callData.indexSymbol,
                            scope: i.callData.type
                        });
                        break;
                    case s.BeginBroadcast:
                        if (i.listComprehensionCallData)
                            for (var l = 0, c = i.listComprehensionCallData.inputListSymbols; l < c.length; l++) {
                                var p = c[l];
                                n.push({
                                    symbol: p,
                                    scope: "comprehension"
                                })
                            }
                        break;
                    default:
                        throw new Error("Programming Error: unexpected loop instruction " + i.type)
                    }
                else
                    i.type === s.SymbolicVar && i.symbol && n.push({
                        symbol: i.symbol,
                        scope: "symbolic-var"
                    });
                if (!o.isLeafInstruction(i))
                    for (var y = 0, u = i.args; y < u.length; y++) {
                        a[u[y]] = !0
                    }
            }
        return n.reverse()
    }
});
define('core/math/ir/features/fuse-broadcast', ["require", "exports", "../opcodes", "core/math/types", "../instructions", "./interpret", "./list-length", "../../errormsg", "./find-dependency-symbols"], function(require, t, r, e, n, s, i, o, u) {
    "use strict";
    function a(t, r, n) {
        if (n.valueType === e.ListOfDistribution) {
            var a = i.getConstantListLength(t, r);
            if (null == a)
                throw o.variableLengthDistributionList(u.findDependencySymbols(t, r));
            for (var c = [], f = 0; f < a; f++) {
                var d = t.InboundsListAccess([r, t.Constant(f + 1)]);
                c.push(d)
            }
            return t.List(c)
        }
        var p = s.interpret(t, r);
        return r === t.returnIndex && t.popInstruction(),
        t.ConstantOfType(n.valueType, p)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.fuseBroadcast = void 0,
    t.fuseBroadcast = function(t, e) {
        var s = t.getInstruction(e);
        if (s.type !== r.BroadcastResult)
            return e;
        if (s.isConstantBroadcast)
            return a(t, e, s);
        for (var i = s.args[0], o = t.getInstruction(i), u = o.args[0], c = !1, f = u + 1; f < i; f++) {
            var d = t.getInstruction(f);
            if (d.type === r.DeferredListAccess && d.args[1] === u) {
                c = !0;
                break
            }
        }
        if (!c)
            return e;
        for (var p = [], g = u; g <= i + o.args.length - 1; g++) {
            var v = t.getInstruction(g);
            if (n.isLeafInstruction(v))
                p.push(t.copyInstruction(v));
            else {
                for (var l = [], y = 0, I = v.args; y < I.length; y++) {
                    var h = I[y];
                    l.push(h >= u ? p[h - u] : h)
                }
                v.type === r.DeferredListAccess ? p.push(t.InboundsListAccess(l)) : p.push(t.copyInstructionWithArgs(v, l))
            }
        }
        var L = t.getInstruction(t.returnIndex);
        return L.type === r.BroadcastResult && L.isConstantBroadcast ? a(t, t.returnIndex, L) : t.returnIndex
    }
});
define('core/math/ir/features/element-at', ["require", "exports", "./list-length", "./interpret", "../opcodes", "core/math/types", "./nan-of-type"], function(require, t, e, n, s, a, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.elementsAt = t.elementAt = void 0,
    t.elementAt = function(t, r, o) {
        var i = t.getInstruction(r);
        if (a.isList(i.valueType)) {
            var p = e.getConstantListLength(t, r);
            if (o = Math.floor(o),
            isNaN(o) || o < 0 || void 0 !== p && o >= p) {
                var l = a.elementType(i.valueType);
                return t.NanOfType(l)
            }
            return i.type === s.List ? i.args[o] : i.type === s.Constant && a.isList(i.valueType) ? t.ConstantOfType(a.elementType(i.valueType), i.value[o]) : i.type === s.BroadcastResult && i.isConstantBroadcast ? t.ConstantOfType(a.elementType(i.valueType), n.interpretBroadcastElement(t, r, o)) : void 0 !== p ? t.InboundsListAccess([r, t.Constant(o + 1)]) : t.ListAccess([r, t.Constant(o + 1)])
        }
        if (i.valueType === a.Point)
            return isNaN(o) || o < 0 || o > 2 ? t.Constant(NaN) : i.type === s.OrderedPair ? i.args[o] : i.type === s.Constant ? t.Constant(i.value[o]) : t.OrderedPairAccess([r, t.Constant(o + 1)]);
        throw new Error("Cannot access elements of " + a.prettyPrint(i.valueType))
    }
    ,
    t.elementsAt = function(t, o, i) {
        var p = t.getInstruction(o);
        if (0 === i.length)
            return t.ConstantOfType(p.valueType, []);
        if (p.type === s.Constant && a.isList(p.valueType)) {
            for (var l = [], u = a.elementType(p.valueType), y = 0, c = i; y < c.length; y++) {
                var v = c[y]
                  , f = Math.floor(v);
                isNaN(f) || f < 0 || f >= e.assertConstantListLength(t, o, "Programming error: expected Constant list instruction to have constant length.") ? l.push(r.nanOfType(u)) : l.push(p.value[f])
            }
            return t.ConstantOfType(p.valueType, l)
        }
        if (p.type === s.List) {
            l = [];
            for (var T = 0, h = i; T < h.length; T++) {
                v = h[T],
                f = Math.floor(v);
                if (isNaN(f) || f < 0 || f >= e.assertConstantListLength(t, o, "Programming error: expected List instruction to have constant length.")) {
                    var d = a.elementType(p.valueType);
                    l.push(t.NanOfType(d))
                } else
                    l.push(p.args[f])
            }
            return t.List(l)
        }
        if (p.type === s.BroadcastResult && p.isConstantBroadcast)
            return t.ConstantOfType(p.valueType, n.interpretBroadcastElements(t, o, i));
        for (var g = [], C = !0, L = e.getConstantListLength(t, o), m = 0, N = i; m < N.length; m++) {
            v = N[m],
            f = Math.floor(v);
            g.push(t.Constant(f + 1)),
            (isNaN(f) || f < 0 || void 0 === L || f >= L) && (C = !1)
        }
        var O = [o, t.List(g)];
        return C ? t.InboundsListAccess(O) : t.ListAccess(O)
    }
});
define('core/math/ir/features/constant-collapse', ["require", "exports", "../opcodes", "../instructions", "core/math/types", "core/math/maybe-rational", "./depends-on-outer-variable", "./is-constant", "./as-value", "./reconstitute-ir", "./list-length", "./contains-nan-value", "./interpret", "./fuse-broadcast", "./element-at", "../../builtin"], function(require, t, n, e, r, s, a, o, u, i, c, p, l, g, I, v) {
    "use strict";
    function y(t, n) {
        for (var e = [], r = 0, s = n; r < s.length; r++) {
            var a = s[r]
              , u = t.getInstruction(a);
            if (!o.isConstant(u))
                return;
            e.push(u.value)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.constantCollapse = void 0,
    t.constantCollapse = function(t) {
        if (t.instructionsLength() - 1 !== t.returnIndex)
            throw new Error("Programming Error: only the final instruction in a chunk can be constant collapsed");
        var d = t.getInstruction(t.returnIndex);
        if (e.isLeafInstruction(d))
            return t.returnIndex;
        switch (d.type) {
        case n.Add:
            var C = t.getInstruction(d.args[0])
              , f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Add(C.value, f.value))) : C.type === n.Constant && 0 === s.asFloat(C.value) ? (t.popInstruction(),
            d.args[1]) : f.type === n.Constant && 0 === s.asFloat(f.value) ? (t.popInstruction(),
            d.args[0]) : t.returnIndex;
        case n.Subtract:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Subtract(C.value, f.value))) : C.type === n.Constant && 0 === s.asFloat(C.value) ? (t.popInstruction(),
            t.Negative([d.args[1]])) : f.type === n.Constant && 0 === s.asFloat(f.value) ? (t.popInstruction(),
            d.args[0]) : t.returnIndex;
        case n.Multiply:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Multiply(C.value, f.value))) : C.type === n.Constant && 1 === s.asFloat(C.value) ? (t.popInstruction(),
            d.args[1]) : f.type === n.Constant && 1 === s.asFloat(f.value) ? (t.popInstruction(),
            d.args[0]) : t.returnIndex;
        case n.Divide:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Divide(C.value, f.value))) : f.type === n.Constant && 1 === s.asFloat(f.value) ? (t.popInstruction(),
            d.args[0]) : t.returnIndex;
        case n.Exponent:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            if (C.type === n.Constant && f.type === n.Constant)
                return t.popInstruction(),
                t.Constant(l.Exponent(C.value, f.value));
            if (C.type === n.Constant && C.valueType === r.Number) {
                if ((x = s.asFloat(C.value)) === Math.E)
                    return t.popInstruction(),
                    t.SyntheticNativeFunction("exp", [d.args[1]]);
                if (x > 0)
                    return t.popInstruction(),
                    t.RawExponent(d.args)
            }
            if (f.type === n.Constant && f.valueType === r.Number) {
                var x;
                if (1 === (x = s.asFloat(f.value)))
                    return t.popInstruction(),
                    d.args[0];
                if (x === Math.floor(x))
                    return t.popInstruction(),
                    t.RawExponent(d.args);
                if (s.isRational(f.value)) {
                    var h = f.value
                      , T = h.n;
                    if (h.d % 2 == 1) {
                        t.popInstruction();
                        var L = t.RawExponent([t.SyntheticNativeFunction("abs", [d.args[0]]), d.args[1]]);
                        return T % 2 == 0 ? L : t.Multiply([t.SyntheticNativeFunction("sign", [d.args[0]]), L])
                    }
                }
            }
            return t.returnIndex;
        case n.RawExponent:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Exponent(C.value, f.value))) : f.type === n.Constant && 1 === s.asFloat(f.value) ? (t.popInstruction(),
            d.args[0]) : t.returnIndex;
        case n.Negative:
            return (C = t.getInstruction(d.args[0])).type === n.Constant ? (t.popInstruction(),
            t.Constant(l.Negative(C.value))) : t.returnIndex;
        case n.Equal:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.Equal(C.value, f.value))) : t.returnIndex;
        case n.Less:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.Less(C.value, f.value))) : t.returnIndex;
        case n.Greater:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.Greater(C.value, f.value))) : t.returnIndex;
        case n.LessEqual:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.LessEqual(C.value, f.value))) : t.returnIndex;
        case n.GreaterEqual:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.GreaterEqual(C.value, f.value))) : t.returnIndex;
        case n.And:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && f.type === n.Constant ? (t.popInstruction(),
            t.ConstantOfType(r.Bool, l.And(C.value, f.value))) : t.returnIndex;
        case n.Piecewise:
            return (C = t.getInstruction(d.args[0])).type === n.Constant ? (t.popInstruction(),
            C.value ? d.args[1] : d.args[2]) : t.returnIndex;
        case n.OrderedPairAccess:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.OrderedPair && f.type === n.Constant ? (t.popInstruction(),
            C.args[s.asFloat(f.value) - 1]) : C.type === n.Constant && C.valueType === r.Point && f.type === n.Constant ? (t.popInstruction(),
            t.Constant(C.value[s.asFloat(f.value) - 1])) : t.returnIndex;
        case n.List:
            if (function(t, n) {
                for (var e = 0, r = n; e < r.length; e++) {
                    var s = r[e]
                      , a = t.getInstruction(s);
                    if (!o.isConstant(a))
                        return !1
                }
                return !0
            }(t, d.args)) {
                t.popInstruction();
                for (var E = [], b = 0, A = d.args; b < A.length; b++) {
                    var m = A[b];
                    E.push(t.getInstruction(m).value)
                }
                return t.ConstantOfType(d.valueType, E)
            }
            return t.returnIndex;
        case n.ListAccess:
        case n.InboundsListAccess:
            var O = d.args[0]
              , N = t.getInstruction(O)
              , F = t.getInstruction(d.args[1]);
            if (N.type === n.Piecewise && F.type === n.Constant) {
                var B = d.type === n.ListAccess ? t.ListAccess([N.args[1], d.args[1]]) : t.InboundsListAccess([N.args[1], d.args[1]])
                  , w = d.type === n.ListAccess ? t.ListAccess([N.args[2], d.args[1]]) : t.InboundsListAccess([N.args[2], d.args[1]]);
                return t.Piecewise([N.args[0], B, w])
            }
            if (N.type === n.BroadcastResult) {
                if (F.type === n.Constant && N.isConstantBroadcast && N.valueType !== r.ListOfDistribution)
                    return t.ConstantOfType(d.valueType, l.interpret(t, t.returnIndex));
                t.popInstruction();
                var q = N.args[0]
                  , P = O - q
                  , R = (et = t.getInstruction(q)).args[0]
                  , M = void 0
                  , S = void 0;
                if (d.type === n.InboundsListAccess)
                    M = d.args[1];
                else {
                    var V = c.getConstantListLength(t, O);
                    if (F.type === n.Constant && F.valueType === r.Number && void 0 !== V) {
                        var D = s.asFloat(F.value)
                          , G = Math.floor(D);
                        if (G < 1 || G > V)
                            return t.NanOfType(d.valueType);
                        M = D === G ? d.args[1] : t.Constant(G)
                    } else {
                        var k = t.Constant(1)
                          , _ = t.getInstruction(R).args[0]
                          , j = t.SyntheticNativeFunction("floor", [d.args[1]])
                          , U = t.GreaterEqual([j, k])
                          , W = t.LessEqual([j, _]);
                        M = t.Piecewise([U, t.Piecewise([W, j, _]), k]),
                        S = {
                            one: k,
                            lengthIndex: _,
                            roundedIndex: j,
                            greaterEqualIndex: U,
                            lessEqualIndex: W
                        }
                    }
                }
                if (et.args[P] < R)
                    return et.args[P];
                for (var z = [M], H = R + 1; H <= et.args[P]; H++) {
                    var J = t.getInstruction(H);
                    if (e.isLeafInstruction(J))
                        z.push(t.copyInstruction(J));
                    else {
                        for (var K = [], Q = 0, X = J.args; Q < X.length; Q++) {
                            m = X[Q];
                            K.push(m >= R ? z[m - R] : m)
                        }
                        J.type === n.DeferredListAccess ? z.push(t.InboundsListAccess(K)) : z.push(t.copyInstructionWithArgs(J, K))
                    }
                }
                if (S) {
                    U = S.greaterEqualIndex,
                    W = S.lessEqualIndex,
                    _ = S.lengthIndex,
                    k = S.one;
                    var Y = r.elementType(N.valueType)
                      , Z = t.NanOfType(Y)
                      , $ = z[z.length - 1]
                      , tt = t.And([t.And([U, W]), t.GreaterEqual([_, k])]);
                    return t.Piecewise([tt, $, Z])
                }
                return z[z.length - 1]
            }
            if (F.type === n.Constant && F.valueType === r.Number) {
                if (N.type === n.List) {
                    t.popInstruction();
                    var nt = Math.floor(s.asFloat(F.value)) - 1;
                    return isNaN(nt) || nt < 0 || nt >= N.args.length ? t.NanOfType(d.valueType) : N.args[nt]
                }
                if (N.type === n.Constant) {
                    t.popInstruction();
                    nt = Math.floor(s.asFloat(F.value)) - 1;
                    return isNaN(nt) || nt < 0 || nt >= N.value.length ? t.NanOfType(d.valueType) : t.ConstantOfType(r.elementType(N.valueType), N.value[nt])
                }
                return t.returnIndex
            }
            return t.returnIndex;
        case n.BlockVar:
            var et = t.getInstruction(d.args[0]);
            if (!e.endsBlock(et))
                return t.returnIndex;
            P = t.returnIndex - d.args[0];
            if (a.dependsOnOuterVariable(t, et.args[P], et.args[0]))
                return t.returnIndex;
            var rt = t.copy();
            rt.close();
            E = rt.getCompiledFunction().fn();
            return t.popInstruction(),
            i.reconstituteIR(t, d.valueType, E);
        case n.NativeFunction:
            switch (d.symbol) {
            case "nthroot":
                if (void 0 !== (gt = y(t, d.args)))
                    return t.Constant(s.nthroot(gt[0], gt[1]));
                var st = t.getInstruction(d.args[1]);
                return st.type === n.Constant && st.valueType === r.Number ? t.Exponent([d.args[0], t.Constant(s.reciprocal(st.value))]) : t.returnIndex;
            case "length":
                return void 0 !== (V = c.getConstantListLength(t, d.args[0])) ? (t.popInstruction(),
                t.Constant(V)) : t.returnIndex;
            case "select":
                if (o.isConstant(t.getInstruction(d.args[1]))) {
                    t.popInstruction();
                    var at = u.asValue(t, d.args[1])
                      , ot = [];
                    for (H = 0; H < at.length; H++)
                        at[H] && ot.push(H);
                    return I.elementsAt(t, d.args[0], ot)
                }
                return t.returnIndex;
            case "shuffle":
                var ut = d.args[0];
                N = d.args[1];
                if (void 0 !== (V = c.getConstantListLength(t, N)) && o.isConstant(t.getInstruction(ut))) {
                    t.popInstruction();
                    var it = v.randomPerm(u.asValue(t, ut), V);
                    return I.elementsAt(t, N, it)
                }
                return t.returnIndex;
            case "elementsAt":
                var ct = d.args[0]
                  , pt = d.args[1];
                if (o.isConstant(t.getInstruction(pt))) {
                    t.popInstruction();
                    var lt = u.asValue(t, pt);
                    return I.elementsAt(t, ct, lt)
                }
                return t.returnIndex;
            default:
                var gt;
                return void 0 === (gt = y(t, d.args)) ? t.returnIndex : (t.popInstruction(),
                t.ConstantOfType(d.valueType, l.NativeFunction(d.symbol, gt)))
            }
        case n.ExtendSeed:
            var It = t.getInstruction(d.args[0])
              , vt = t.getInstruction(d.args[1]);
            return o.isConstant(It) && o.isConstant(vt) ? t.ConstantOfType(r.SeedType, l.ExtendSeed(d.tag, u.asValue(t, d.args[0]), u.asValue(t, d.args[1]))) : t.returnIndex;
        case n.OrderedPair:
            C = t.getInstruction(d.args[0]),
            f = t.getInstruction(d.args[1]);
            return C.type === n.Constant && C.valueType === r.Number && f.type === n.Constant && f.valueType === r.Number ? t.ConstantOfType(r.Point, [C.value, f.value]) : t.returnIndex;
        case n.BroadcastResult:
            return void 0 !== (V = c.getConstantListLength(t, t.returnIndex)) && 0 === V ? (t.popInstruction(),
            t.ConstantOfType(d.valueType, [])) : t.returnIndex;
        case n.Action:
            for (var yt = 0, dt = d.args; yt < dt.length; yt++) {
                m = dt[yt];
                if (!o.isConstantOrConstantBroadcast(t.getInstruction(m)))
                    return t.returnIndex
            }
            t.popInstruction();
            var Ct = {};
            for (H = 0; H < d.symbols.length; H++) {
                var ft = d.symbols[H]
                  , xt = t.getInstruction(d.args[H]);
                if (xt.type === n.BroadcastResult && (xt = t.getInstruction(g.fuseBroadcast(t, d.args[H]))),
                xt.type !== n.Constant)
                    throw new Error("Expected instruction to be constant");
                var ht = xt.valueType;
                E = xt.value;
                p.containsNanValue(ht, E) || (Ct[ft] = {
                    value: E,
                    valueType: ht
                })
            }
            return t.ConstantOfType(r.Action, {
                type: "Action",
                updateRules: Ct
            });
        case n.EndLoop:
        case n.EndIntegral:
        case n.BeginBroadcast:
        case n.EndBroadcast:
        case n.DeferredListAccess:
        case n.Distribution:
        case n.BeginIntegral:
        case n.BeginLoop:
            return t.returnIndex;
        default:
            throw new Error("Unexpected opcode " + d.type)
        }
    }
});
define('core/math/ir/features/type-check', ["require", "exports", "core/math/errormsg", "../opcodes", "core/math/types", "../builtin-table", "../instructions"], function(require, e, r, t, a, s, n) {
    "use strict";
    function i(e, r) {
        for (var t = [], s = 0, n = r; s < n.length; s++) {
            var i = n[s];
            t.push(a.prettyPrint(e.getInstruction(i).valueType))
        }
        return t
    }
    function u(e, r, t) {
        for (var s = 0; s < r.length; s++) {
            var n = e.getInstruction(r[s]).valueType
              , i = t[s];
            if (!a.isSubType(n, i))
                return !1
        }
        return !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.typeCheck = e.argIsTypeOrListOfType = e.argTypesMatch = e.extractScalarValueTypes = e.extractValueTypes = void 0,
    e.extractValueTypes = i,
    e.extractScalarValueTypes = function(e, r) {
        for (var t = [], s = 0, n = r; s < n.length; s++) {
            var i = n[s]
              , u = e.getInstruction(i).valueType
              , o = a.isList(u) ? a.elementType(u) : u;
            t.push(a.prettyPrint(o))
        }
        return t
    }
    ,
    e.argTypesMatch = u,
    e.argIsTypeOrListOfType = function(e, r, t) {
        return a.isTypeOrListOfType(e.getInstruction(r).valueType, t)
    }
    ,
    e.typeCheck = function(e, o) {
        var c = e.getInstruction(o);
        if (!n.isLeafInstruction(c))
            switch (c.type) {
            case t.Add:
                var p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.addTypeError(i(e, c.args));
                return;
            case t.Subtract:
                p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.subtractTypeError(i(e, c.args));
                return;
            case t.Multiply:
                p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.multiplyTypeError(i(e, c.args));
                return;
            case t.Divide:
                p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.divideTypeError(i(e, c.args));
                return;
            case t.Exponent:
            case t.RawExponent:
                p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.exponentTypeError(i(e, c.args));
                return;
            case t.Negative:
                p = [a.Number];
                if (!u(e, c.args, p))
                    throw r.negativeTypeError(i(e, c.args));
                return;
            case t.Equal:
            case t.Less:
            case t.Greater:
            case t.LessEqual:
            case t.GreaterEqual:
                p = [a.Number, a.Number];
                if (!u(e, c.args, p))
                    throw r.comparatorTypeError(i(e, c.args));
                return;
            case t.And:
                p = [a.Bool, a.Bool];
                if (!u(e, c.args, p))
                    throw r.andTypeError(i(e, c.args));
                return;
            case t.Piecewise:
                if (e.getInstruction(c.args[0]).valueType !== a.Bool)
                    throw r.piecewiseConditionTypeError(i(e, c.args));
                if (!a.isSubType(e.getInstruction(c.args[1]).valueType, c.valueType) || !a.isSubType(e.getInstruction(c.args[2]).valueType, c.valueType))
                    throw r.piecewiseBranchTypeError([a.prettyPrint(e.getInstruction(c.args[1]).valueType), a.prettyPrint(e.getInstruction(c.args[2]).valueType)]);
                return;
            case t.OrderedPair:
                for (var g = 0, y = c.args; g < y.length; g++) {
                    var l = y[g];
                    if ((m = e.getInstruction(l).valueType) !== a.Number)
                        throw r.pointTypeError(a.prettyPrint(m))
                }
                return;
            case t.OrderedPairAccess:
                p = [a.Point, a.Number];
                if (!u(e, c.args, p))
                    throw r.orderedPairAccessTypeError(i(e, c.args));
                return;
            case t.BeginIntegral:
                var T = e.getInstruction(c.args[0]).valueType
                  , v = e.getInstruction(c.args[1]).valueType;
                if (T !== a.Number)
                    throw r.integralLowerBoundTypeError([a.prettyPrint(T)]);
                if (v !== a.Number)
                    throw r.integralUpperBoundTypeError([a.prettyPrint(v)]);
                return;
            case t.EndIntegral:
                var f = e.getInstruction(c.args[1]).valueType;
                if (f !== a.Number)
                    throw r.integralArgumentTypeError([a.prettyPrint(f)]);
                return;
            case t.List:
                if (0 === c.args.length)
                    return;
                var d = e.getInstruction(c.args[0]).valueType;
                if (!a.hasListType(d))
                    throw r.listTypeError([a.prettyPrint(d)]);
                for (var h = 0, b = c.args; h < b.length; h++) {
                    l = b[h];
                    var m = e.getInstruction(l).valueType;
                    if (!a.hasListType(m))
                        throw r.listTypeError([a.prettyPrint(m)]);
                    if (m !== d)
                        throw r.heterogeneousList()
                }
                return;
            case t.ListAccess:
            case t.DeferredListAccess:
            case t.InboundsListAccess:
                var w = e.getInstruction(c.args[0]).valueType
                  , I = a.isList(w)
                  , E = e.getInstruction(c.args[1]).valueType === a.Number;
                if (!I || !E)
                    throw r.indexTypeError(i(e, c.args));
                return;
            case t.NativeFunction:
                var L = c.args
                  , N = c.symbol
                  , P = s.BuiltInTable[N]
                  , B = (p = P.argumentTypes,
                c.callData.errorSymbol);
                if (!u(e, c.args, p)) {
                    if ("doubleReducer" === P.tag) {
                        if (!a.isList(e.getInstruction(L[0]).valueType) || !a.isList(e.getInstruction(L[1]).valueType))
                            throw r.nonListDoubleReducer(B)
                    } else if ("parameterizedReducer" === P.tag && !a.isList(e.getInstruction(L[0]).valueType))
                        throw r.nonListParameterizedReducer(B);
                    var O = L;
                    throw r.functionTypeError(B, i(e, O))
                }
                return;
            case t.ExtendSeed:
                if (e.getInstruction(c.args[0]).valueType !== a.SeedType || e.getInstruction(c.args[1]).valueType !== a.SeedType && e.getInstruction(c.args[1]).valueType !== a.Number)
                    throw r.parseError();
                return;
            case t.Action:
                for (var x = 0, S = c.args; x < S.length; x++) {
                    l = S[x];
                    var A = e.getInstruction(l).valueType;
                    if (!a.isTypeOrListOfType(A, a.Number) && !a.isTypeOrListOfType(A, a.Point))
                        throw r.updateRuleTypeError(a.prettyPrint(A))
                }
                for (var R = {}, D = 0, V = c.symbols; D < V.length; D++) {
                    if (R[N = V[D]])
                        throw r.duplicateUpdateRules(N);
                    R[N] = !0
                }
                return;
            case t.BroadcastResult:
            case t.BlockVar:
            case t.BeginBroadcast:
            case t.EndBroadcast:
            case t.BeginLoop:
            case t.EndLoop:
            case t.Distribution:
                return;
            default:
                throw new Error("Unexpected opcode: " + c.type)
            }
    }
});
define('core/math/ir/features/count-references', ["require", "exports", "../opcodes", "../instructions"], function(require, e, n, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.countReferences = void 0,
    e.countReferences = function(e) {
        for (var t = [], s = 0; s < e.instructionsLength(); s++) {
            t.push(0);
            var o = e.getInstruction(s);
            if (!r.isLeafInstruction(o))
                if (r.endsBlock(o) && o.type !== n.EndIntegral)
                    for (var i = 0, c = o.args; i < c.length; i++) {
                        t[c[i]] = 1 / 0
                    }
                else
                    for (var u = 0, f = o.args; u < f.length; u++) {
                        t[f[u]] += 1
                    }
        }
        return t
    }
});
define('core/math/ir/features/emit-js', ["require", "exports", "../opcodes", "./print", "../instructions", "core/math/maybe-rational", "core/math/types", "../builtin-table", "./count-references", "core/math/context-types", "./as-value", "./nan-of-type"], function(require, e, r, n, t, a, s, o, c, u, i, g) {
    "use strict";
    function d(e) {
        return "_" + e
    }
    function l(e, r) {
        var n = r[e];
        return void 0 !== n ? n : d(e)
    }
    function p(e, t, a, c, u, p) {
        var v = a + 1;
        switch (t.type) {
        case r.Noop:
        case r.BlockVar:
        case r.BroadcastResult:
        case r.EndIntegral:
        case r.Action:
            return {
                source: "",
                nextIdx: v
            };
        case r.BeginIntegral:
            return {
                source: f(e, t, a, c, u, p),
                nextIdx: t.endIndex
            };
        case r.LoadArg:
            return u[a] = e.argNames[a],
            {
                source: "",
                nextIdx: v
            };
        case r.BeginBroadcast:
            return {
                source: x(e, t, a, u),
                nextIdx: v
            };
        case r.EndBroadcast:
            return {
                source: I(e, t, a, u),
                nextIdx: v
            };
        case r.BeginLoop:
            return {
                source: y(e, t, a, u),
                nextIdx: v
            };
        case r.EndLoop:
            return {
                source: h(e, t, a, u),
                nextIdx: v
            };
        default:
            var m = function(e, t, a) {
                switch (e.type) {
                case r.Constant:
                    return e.valueType === s.Number || e.valueType === s.Bool || e.valueType === s.Point ? B(e.value) : (a.push(i.compilerValueToRuntimeValue(e.value)),
                    "_C[" + (a.length - 1) + "]");
                case r.Add:
                    return l(e.args[0], t) + "+" + l(e.args[1], t);
                case r.Subtract:
                    return l(e.args[0], t) + "-" + l(e.args[1], t);
                case r.Multiply:
                    return l(e.args[0], t) + "*" + l(e.args[1], t);
                case r.Divide:
                    return l(e.args[0], t) + "/" + l(e.args[1], t);
                case r.Exponent:
                    return "BuiltIn.pow(" + l(e.args[0], t) + "," + l(e.args[1], t) + ")";
                case r.RawExponent:
                    return "Math.pow(" + l(e.args[0], t) + "," + l(e.args[1], t) + ")";
                case r.Negative:
                    return "-" + l(e.args[0], t);
                case r.Equal:
                    return l(e.args[0], t) + "===" + l(e.args[1], t);
                case r.Less:
                    return l(e.args[0], t) + "<" + l(e.args[1], t);
                case r.Greater:
                    return l(e.args[0], t) + ">" + l(e.args[1], t);
                case r.LessEqual:
                    return l(e.args[0], t) + "<=" + l(e.args[1], t);
                case r.GreaterEqual:
                    return l(e.args[0], t) + ">=" + l(e.args[1], t);
                case r.And:
                    return l(e.args[0], t) + "&&" + l(e.args[1], t);
                case r.Piecewise:
                    return l(e.args[0], t) + "?" + l(e.args[1], t) + ":" + l(e.args[2], t);
                case r.OrderedPair:
                    return "[" + l(e.args[0], t) + "," + l(e.args[1], t) + "]";
                case r.OrderedPairAccess:
                    return l(e.args[0], t) + "[" + l(e.args[1], t) + "-1]";
                case r.List:
                    return "[" + e.args.map(function(e) {
                        return l(e, t)
                    }).join(",") + "]";
                case r.DeferredListAccess:
                case r.Distribution:
                case r.SymbolicVar:
                    throw new Error("Programming Error: expect " + n.printOp(e.type) + " to be removed before emitting code.");
                case r.ListAccess:
                    var c = l(e.args[0], t);
                    return "(Math.floor(" + (u = l(e.args[1], t)) + ")>=1&&Math.floor(" + u + ")<=" + c + ".length)?" + c + "[Math.floor(" + u + ")-1]:" + B(g.nanOfType(e.valueType));
                case r.InboundsListAccess:
                    var u;
                    return (c = l(e.args[0], t)) + "[" + (u = l(e.args[1], t)) + "-1]";
                case r.NativeFunction:
                    var d = o.BuiltInTable[e.symbol]
                      , p = e.args.map(function(e) {
                        return l(e, t)
                    }).join(",");
                    return d.module + "." + d.symbol + "(" + p + ")";
                case r.ExtendSeed:
                    return l(e.args[0], t) + "+'::" + e.tag + "'+" + l(e.args[1], t);
                case r.LoadArg:
                case r.Noop:
                case r.BeginIntegral:
                case r.EndIntegral:
                case r.BeginLoop:
                case r.EndLoop:
                case r.BeginBroadcast:
                case r.EndBroadcast:
                case r.BlockVar:
                case r.BroadcastResult:
                case r.Action:
                    throw new Error("Unexpected opcode " + e.type);
                default:
                    throw new Error("Unexpected opcode " + e.type)
                }
            }(t, u, p);
            return c[a] <= 1 ? (u[a] = "(" + m + ")",
            {
                source: "",
                nextIdx: v
            }) : {
                source: d(a) + "=" + m + ";\n",
                nextIdx: v
            }
        }
    }
    function f(e, r, n, t, a, s) {
        var o = "BuiltIn.quad(";
        o += function(e, r, n, t, a, s) {
            var o = r.endIndex
              , c = "function(" + d(n) + ") {\n";
            c += v(e, n + 1, o - 1, t);
            for (var u = n + 1; u < o; ) {
                var i = e.getInstruction(u)
                  , g = p(e, i, u, t, a, s);
                c += g.source,
                u = g.nextIdx
            }
            return c + "return " + l(e.getInstruction(o).args[1], a) + ";\n}"
        }(e, r, n, t, a, s),
        o += "," + l(r.args[0], a) + "," + l(r.args[1], a) + ")";
        var c = r.endIndex;
        return t[c + 1] <= 1 ? (a[c + 1] = o,
        "") : d(c + 1) + "=" + o + ";"
    }
    function v(e, n, a, s) {
        for (var o = "", c = !1, u = n; u <= a; u++) {
            var i = e.getInstruction(u);
            if (i.type !== r.Noop && i.type !== r.EndBroadcast && i.type !== r.EndLoop)
                if (i.type !== r.BeginIntegral)
                    s[u] <= 1 && !t.beginsBlock(i) && !t.endsBlock(i) && i.type !== r.BlockVar && i.type !== r.BroadcastResult || (c ? o += "," : (o += "var ",
                    c = !0),
                    o += d(u));
                else {
                    var g = i.endIndex;
                    u = s[g + 1] <= 1 ? g + 1 : g
                }
        }
        return c && (o += ";\n"),
        o
    }
    function x(e, n, t, a) {
        for (var s = d(t), o = e.getInstruction(n.endIndex), c = l(n.args[0], a), u = "", i = 1; i < o.args.length; i++) {
            var g = n.endIndex + i;
            if (e.getInstruction(g).type === r.BroadcastResult)
                u += d(g) + "=[];\n"
        }
        return u += "for(" + s + "=1;" + s + "<=" + c + ";" + s + "++){\n"
    }
    function I(e, n, t, a) {
        for (var s = "", o = 1; o < n.args.length; o++) {
            var c = t + o;
            if (!(c >= e.instructionsLength()))
                if (e.getInstruction(c).type === r.BroadcastResult)
                    s += d(t + o) + ".push(" + l(n.args[o], a) + ");\n"
        }
        return s += "}\n"
    }
    function y(e, n, t, a) {
        for (var s = d(t), o = "" + l(n.args[0], a), c = "" + l(n.args[1], a), u = "if(!isFinite(" + c + "-" + o + ")){\n", i = 2; i < n.args.length; i++) {
            var p = n.endIndex + i - 1;
            if (!(p >= e.instructionsLength())) {
                var f = e.getInstruction(p);
                if (f.type === r.BlockVar)
                    u += d(p) + "=" + B(g.nanOfType(f.valueType)) + ";\n"
            }
        }
        u += "}else{\n";
        for (i = 2; i < n.args.length; i++) {
            var v = t + i - 1;
            if (e.getInstruction(v).type === r.BlockVar)
                u += d(v) + "=" + l(n.args[i], a) + ";\n"
        }
        return u += "for(" + s + "=" + o + ";" + s + "<=" + c + ";" + s + "++){\n"
    }
    function h(e, n, t, a) {
        for (var s = "", o = 1; o < n.args.length; o++) {
            var c = n.args[0] + o;
            if (e.getInstruction(c).type === r.BlockVar)
                s += d(c) + "=" + l(n.args[o], a) + ";\n"
        }
        s += "}\n";
        for (o = 1; o < n.args.length; o++) {
            var u = t + o;
            if (!(u >= e.instructionsLength()))
                if (e.getInstruction(u).type === r.BlockVar)
                    s += d(u) + "=" + l(n.args[0] + o, a) + ";\n"
        }
        return s += "}\n"
    }
    function B(e) {
        if (Array.isArray(e))
            return "[" + e.map(B).join(",") + "]";
        switch (typeof e) {
        case "boolean":
        case "number":
            return e.toString();
        case "string":
            return "" + JSON.stringify(e);
        case "object":
            if (u.isActionCompilerValue(e))
                throw new Error("Action values cannot be compiled");
            return a.asFloat(e).toString();
        default:
            throw new Error("Unexpected value: " + e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.emitJS = void 0,
    e.emitJS = function(e) {
        for (var r = c.countReferences(e), n = [], t = [], a = v(e, e.argNames.length, e.instructionsLength() - 1, r), s = 0; s < e.instructionsLength(); ) {
            var o = e.getInstruction(s)
              , u = p(e, o, s, r, n, t);
            a += u.source,
            s = u.nextIdx
        }
        return {
            source: a += "return " + l(e.returnIndex, n) + ";",
            constants: t
        }
    }
});
define('core/math/ir/features/get-value-type', ["require", "exports", "../opcodes", "core/math/types"], function(require, e, s, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getValueType = void 0,
    e.getValueType = function(e, a, c) {
        switch (a) {
        case s.Add:
        case s.Subtract:
        case s.Multiply:
        case s.Divide:
        case s.Exponent:
        case s.RawExponent:
        case s.Negative:
        case s.OrderedPairAccess:
        case s.BeginIntegral:
        case s.BeginLoop:
        case s.BeginBroadcast:
            return t.Number;
        case s.Equal:
        case s.Less:
        case s.Greater:
        case s.LessEqual:
        case s.GreaterEqual:
        case s.And:
            return t.Bool;
        case s.Piecewise:
            var r = e.getInstruction(c[1]).valueType
              , n = e.getInstruction(c[2]).valueType;
            return r === t.EmptyList && t.isList(n) ? n : r;
        case s.OrderedPair:
            return t.Point;
        case s.List:
            if (0 === c.length)
                return t.EmptyList;
            var i = e.getInstruction(c[0]).valueType;
            return t.hasListType(i) ? t.listType(i) : t.ListOfAny;
        case s.ListAccess:
        case s.DeferredListAccess:
        case s.InboundsListAccess:
            var o = e.getInstruction(c[0]).valueType;
            return t.isList(o) ? t.elementType(o) : t.Any;
        case s.ExtendSeed:
            return t.SeedType;
        case s.Action:
            return t.Action;
        case s.Constant:
        case s.LoadArg:
        case s.NativeFunction:
        case s.Distribution:
        case s.BlockVar:
        case s.BroadcastResult:
        case s.SymbolicVar:
        case s.Noop:
        case s.EndIntegral:
        case s.EndBroadcast:
        case s.EndLoop:
            return t.Any;
        default:
            throw new Error("Unexpected opcode " + a)
        }
    }
});
define('core/math/ir/features/drop-unreferenced-instructions', ["require", "exports", "../instructions"], function(require, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.dropUnreferencedInstructions = void 0,
    e.dropUnreferencedInstructions = function(e) {
        for (var r = [], t = 0; t < e.instructionsLength(); t++)
            r.push(!1);
        for (r[e.returnIndex] = !0,
        t = e.instructionsLength() - 1; t >= 0; t--)
            if (r[t]) {
                var i = e.getInstruction(t);
                if (!n.isLeafInstruction(i))
                    for (var o = 0, s = i.args; o < s.length; o++) {
                        r[s[o]] = !0
                    }
            } else
                e.replaceInstructionWithNoop(t)
    }
});
define('core/math/ir/features/copy-instruction', ["require", "exports", "../opcodes"], function(require, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.copyInstructionWithArgs = e.copyInstruction = void 0,
    e.copyInstruction = function(e, r) {
        return e.pushLeafInstruction(r)
    }
    ,
    e.copyInstructionWithArgs = function(e, t, s) {
        switch (t.type) {
        case r.Add:
            return e.Add(s);
        case r.Subtract:
            return e.Subtract(s);
        case r.Multiply:
            return e.Multiply(s);
        case r.Divide:
            return e.Divide(s);
        case r.Exponent:
            return e.Exponent(s);
        case r.RawExponent:
            return e.RawExponent(s);
        case r.Negative:
            return e.Negative(s);
        case r.Equal:
            return e.Equal(s);
        case r.Less:
            return e.Less(s);
        case r.Greater:
            return e.Greater(s);
        case r.LessEqual:
            return e.LessEqual(s);
        case r.GreaterEqual:
            return e.GreaterEqual(s);
        case r.And:
            return e.And(s);
        case r.Piecewise:
            return e.Piecewise(s);
        case r.BlockVar:
            return e.BlockVar(t.valueType, s);
        case r.BroadcastResult:
            return e.BroadcastResult(t.valueType, s);
        case r.OrderedPair:
            return e.OrderedPair(s);
        case r.OrderedPairAccess:
            return e.OrderedPairAccess(s);
        case r.NativeFunction:
            return e.NativeFunction(t.symbol, t.callData, s);
        case r.Distribution:
            return e.Distribution(t.symbol, s);
        case r.BeginIntegral:
            return e.BeginIntegral(t.callData, s);
        case r.EndIntegral:
            return e.EndIntegral(s);
        case r.BeginBroadcast:
            return e.BeginBroadcast(s);
        case r.EndBroadcast:
            return e.EndBroadcast(s);
        case r.BeginLoop:
            return e.BeginLoop(t.callData, s);
        case r.EndLoop:
            return e.EndLoop(s);
        case r.List:
            return e.List(s);
        case r.ListAccess:
            return e.ListAccess(s);
        case r.DeferredListAccess:
            return e.DeferredListAccess(s);
        case r.InboundsListAccess:
            return e.InboundsListAccess(s);
        case r.ExtendSeed:
            return e.ExtendSeed(t.tag, s);
        case r.Action:
            return e.Action(t.symbols, s);
        default:
            throw new Error("Unexpected opcode " + t.type)
        }
    }
});
define('core/math/ir/features/convert-to-broadcast', ["require", "exports", "core/math/errormsg", "../opcodes", "core/math/types", "./list-length", "../instructions", "../builtin-table", "./fuse-broadcast", "./is-constant", "./as-value", "./copy-instruction"], function(require, r, e, t, s, n, a, c, o, i, u, d) {
    "use strict";
    function g(r, e, a) {
        for (var c = e.args, g = !1, l = [], p = 0; p < c.length; p++)
            if (!a || a[p]) {
                var h = c[p]
                  , v = r.getInstruction(h).valueType;
                s.isList(v) && -1 === l.indexOf(h) && l.push(h),
                v === s.EmptyList && (g = !0)
            }
        if (0 === l.length)
            return r.returnIndex;
        if (e.type === t.Piecewise && -1 == l.indexOf(e.args[0]) && l.indexOf(e.args[1]) >= 0 && l.indexOf(e.args[2]) >= 0) {
            var I = o.fuseBroadcast(r, e.args[1])
              , y = o.fuseBroadcast(r, e.args[2]);
            return I !== e.args[1] || y !== e.args[2] ? d.copyInstructionWithArgs(r, e, [e.args[0], I, y]) : r.returnIndex
        }
        r.popInstruction();
        var m = n.minListLengthIndex(r, l);
        if (void 0 === m)
            throw new Error("Programming Error: expected minListLength to be defined for " + l.length + " lists");
        var L = m;
        if (i.isConstant(r.getInstruction(L)) && 0 === u.asValue(r, L) && g)
            return r.ConstantOfType(s.EmptyList, []);
        for (var x = r.BeginBroadcast([L]), B = [], E = 0, b = l; E < b.length; E++) {
            var w = b[E];
            B.push(f(r, w, x))
        }
        var A = [];
        for (p = 0; p < c.length; p++) {
            h = c[p];
            if (a && !a[p])
                A.push(h);
            else {
                var T = l.indexOf(h);
                A.push(-1 === T ? h : B[T])
            }
        }
        var O = r.copyInstructionWithArgs(e, A)
          , P = r.EndBroadcast([x, O]);
        return r.BroadcastResult(s.listType(r.getInstruction(O).valueType), [P])
    }
    function f(r, e, s) {
        return r.getInstruction(e).type == t.BroadcastResult ? r.DeferredListAccess([e, s]) : r.InboundsListAccess([e, s])
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.deferredOrInboundsAccess = r.convertToBroadcast = void 0,
    r.convertToBroadcast = function(r) {
        if (r.instructionsLength() - 1 !== r.returnIndex)
            throw new Error("Programming Error: only the final instruction in a chunk can be converted to broadcast");
        var n = r.getInstruction(r.returnIndex);
        if (a.isLeafInstruction(n))
            return r.returnIndex;
        switch (n.type) {
        case t.Add:
        case t.Subtract:
        case t.Multiply:
        case t.Divide:
        case t.Exponent:
        case t.RawExponent:
        case t.Equal:
        case t.Less:
        case t.Greater:
        case t.LessEqual:
        case t.GreaterEqual:
        case t.And:
        case t.OrderedPair:
        case t.Negative:
        case t.Piecewise:
        case t.OrderedPairAccess:
            return g(r, n);
        case t.Distribution:
            return o.fuseBroadcast(r, g(r, n));
        case t.NativeFunction:
            var i = c.BuiltInTable[n.symbol];
            switch (i.tag) {
            case "default":
            case "trig":
            case "inverseTrig":
            case "color":
                return g(r, n);
            case "never-broadcast":
                for (var u = [], d = !1, f = 0, l = n.args; f < l.length; f++) {
                    var p = l[f]
                      , h = o.fuseBroadcast(r, p);
                    h !== p ? (d = !0,
                    u.push(h)) : u.push(p)
                }
                return d ? r.copyInstructionWithArgs(n, u) : r.returnIndex;
            case "reducer":
                if (function(r, e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var a = n[t];
                        if (s.isList(r.getInstruction(a).valueType))
                            return !0
                    }
                    return !1
                }(r, n.args)) {
                    if (1 === n.args.length) {
                        var v = n.args[0]
                          , I = o.fuseBroadcast(r, v);
                        return I !== v ? r.copyInstructionWithArgs(n, [I]) : r.returnIndex
                    }
                    return g(r, n)
                }
                r.popInstruction();
                var y = function(r, e) {
                    var t = r.getInstruction(e[0]).valueType;
                    if (!s.hasListType(t))
                        return s.ListOfAny;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var c = a[n];
                        if (r.getInstruction(c).valueType !== t)
                            return s.ListOfAny
                    }
                    return s.listType(t)
                }(r, n.args);
                if (!s.isSubType(y, i.argumentTypes[0]))
                    throw e.functionTypeError(n.callData.errorSymbol, [s.prettyPrint(y)]);
                var m = r.List(n.args);
                return r.copyInstructionWithArgs(n, [m]);
            case "doubleReducer":
                if (2 !== n.args.length)
                    throw new Error("Programming error: double reducers must have two arguments");
                var L = o.fuseBroadcast(r, n.args[0])
                  , x = o.fuseBroadcast(r, n.args[1]);
                return L !== n.args[0] || x !== n.args[1] ? r.copyInstructionWithArgs(n, [L, x]) : r.returnIndex;
            case "parameterizedReducer":
                if (2 !== n.args.length)
                    throw new Error("Programming error: double reducers must have two arguments");
                return (L = o.fuseBroadcast(r, n.args[0])) === n.args[0] ? g(r, n, [!1, !0]) : r.copyInstructionWithArgs(n, [L, n.args[1]]);
            default:
                var B = i.tag;
                throw new Error("Programming Error: unexpected tag " + B)
            }
        case t.ListAccess:
        case t.DeferredListAccess:
        case t.InboundsListAccess:
            return g(r, n, [!1, !0]);
        case t.BeginIntegral:
        case t.EndIntegral:
        case t.BeginLoop:
        case t.EndLoop:
            return r.returnIndex;
        case t.List:
        case t.BlockVar:
        case t.BeginBroadcast:
        case t.EndBroadcast:
        case t.BroadcastResult:
        case t.ExtendSeed:
        case t.Action:
            return r.returnIndex;
        default:
            throw new Error("Unexpected opcode " + n.type)
        }
    }
    ,
    r.deferredOrInboundsAccess = f
});
define('core/math/ir/features/to-dot', ["require", "exports", "../instructions", "./print", "../opcodes"], function(require, t, n, r, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(t) {
        var i = [];
        i.push("digraph {");
        for (var s = 0; s < t.instructionsLength(); s++) {
            (o = t.getInstruction(s)).type !== e.Noop && i.push(s + ' [label="' + s + ": " + r.printInstruction(t, s) + '"];')
        }
        for (s = 0; s < t.instructionsLength(); s++) {
            var o = t.getInstruction(s);
            if (n.isInternalInstruction(o))
                for (var u = 0, c = o.args; u < c.length; u++) {
                    var p = c[u];
                    i.push(s + " -> " + p + ";")
                }
        }
        return i.push("}"),
        i.join("\n")
    }
});
define('core/math/ir/features/get-dependency-mask', ["require", "exports", "../instructions"], function(require, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getDependencyMask = void 0,
    e.getDependencyMask = function(e, n) {
        for (var t = [], s = 0; s < e.instructionsLength(); s++)
            t.push(!1);
        t[n] = !0;
        for (var i = 0; i <= 1; i++) {
            var o = !1;
            for (s = n + 1; s < e.instructionsLength(); s++) {
                var a = e.getInstruction(s);
                if (!r.isLeafInstruction(a) && !t[s]) {
                    for (var u = !1, c = 0, f = a.args; c < f.length; c++) {
                        if (t[f[c]]) {
                            u = !0;
                            break
                        }
                    }
                    t[s] = u,
                    u && r.endsBlock(a) && !t[a.args[0]] && (t[a.args[0]] = !0,
                    o = !0)
                }
            }
            if (!o)
                break
        }
        return t
    }
});
define('core/math/ir/features/polynomial-order', ["require", "exports", "../opcodes", "core/math/maybe-rational", "./get-dependency-mask", "../instructions"], function(require, e, r, a, s, t) {
    "use strict";
    function n(e, r, a) {
        var t = a.allowRestriction
          , n = a.allowClosedBlockReferences;
        return {
            chunk: e,
            argIndex: r,
            orderTable: [],
            mask: s.getDependencyMask(e, r),
            allowRestriction: t,
            allowClosedBlockReferences: n
        }
    }
    function c(e, s) {
        var n = e.orderTable[s];
        if (void 0 !== n)
            return n;
        var o = function(e, s) {
            var n = e.chunk
              , o = e.mask
              , i = e.argIndex
              , l = e.allowRestriction;
            if (!e.allowClosedBlockReferences && n.isInClosedBlock(s))
                return 1 / 0;
            if (s === i)
                return 1;
            var u = n.getInstruction(s);
            if (t.beginsBlock(u) || t.endsBlock(u))
                return 1 / 0;
            switch (u.type) {
            case r.Add:
            case r.Subtract:
            case r.Less:
            case r.LessEqual:
            case r.Greater:
            case r.GreaterEqual:
                var d = u.args
                  , f = d[0]
                  , v = d[1];
                return Math.max(c(e, f), c(e, v));
            case r.Multiply:
                var p = u.args;
                f = p[0],
                v = p[1];
                return c(e, f) + c(e, v);
            case r.Negative:
                return c(e, u.args[0]);
            case r.Divide:
                var g = u.args;
                f = g[0];
                return c(e, v = g[1]) > 0 ? 1 / 0 : c(e, f);
            case r.Exponent:
            case r.RawExponent:
                var y = u.args
                  , k = (f = y[0],
                v = y[1],
                n.getInstruction(v));
                if (0 === c(e, f) && 0 === c(e, v))
                    return 0;
                if (k.type === r.Constant) {
                    var m = a.asFloat(k.value);
                    return m === Math.round(m) && m > 0 ? c(e, f) * m : 1 / 0
                }
                return 1 / 0;
            case r.Piecewise:
                if (!o[s])
                    return 0;
                var x = n.getInstruction(u.args[2]);
                return l && x.type === r.Constant && isNaN(a.asFloat(x.value)) ? c(e, u.args[1]) : 1 / 0;
            case r.LoadArg:
            case r.Noop:
            case r.Constant:
            case r.Equal:
            case r.And:
            case r.OrderedPair:
            case r.OrderedPairAccess:
            case r.List:
            case r.ListAccess:
            case r.DeferredListAccess:
            case r.InboundsListAccess:
            case r.NativeFunction:
            case r.Distribution:
            case r.BroadcastResult:
            case r.BlockVar:
            case r.SymbolicVar:
            case r.ExtendSeed:
            case r.Action:
                return o[s] ? 1 / 0 : 0;
            default:
                throw new Error("Unexpected opcode " + u.type)
            }
        }(e, s);
        return e.orderTable[s] = o,
        o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.instructionOrder = e.polynomialOrderContext = e.polynomialOrder = void 0,
    e.polynomialOrder = function(e, r, a) {
        var s = e.argNames.indexOf(r);
        return -1 === s ? 0 : c(n(e, s, a), e.returnIndex)
    }
    ,
    e.polynomialOrderContext = n,
    e.instructionOrder = c
});
define('core/math/ir/features/get-polynomial-coefficients', ["require", "exports", "../chunk", "../opcodes", "core/math/maybe-rational", "./polynomial-order", "../instructions", "./copy-instruction"], function(require, e, n, r, t, a, s, o) {
    "use strict";
    function i(e) {
        var t, a, i = e.chunk, c = e.argIndex;
        if (i.isInClosedBlock(c))
            throw new Error("Programming Error: cannot find polynomial coefficients of an instruction in a closed block");
        c >= 0 && c < i.argNames.length ? (t = i.argNames.slice(),
        a = i.argTypes.slice(),
        t.splice(c, 1),
        a.splice(c, 1)) : (t = i.argNames,
        a = i.argTypes);
        for (var u = new n.Chunk({
            argNames: t,
            argTypes: a
        }), l = [], p = 0; p < i.instructionsLength(); p++) {
            var d = i.getInstruction(p);
            if (d.type === r.LoadArg)
                p < c || c < 0 ? l.push(p) : p === c ? l.push(u.SymbolicVar(i.argTypes[p])) : l.push(p - 1);
            else if (s.isLeafInstruction(d))
                l.push(o.copyInstruction(u, d));
            else {
                for (var f = [], g = 0, h = d.args; g < h.length; g++) {
                    var y = h[g];
                    f.push(l[y])
                }
                l.push(o.copyInstructionWithArgs(u, d, f))
            }
        }
        var m = u.Constant(0)
          , v = u.Constant(1)
          , C = u.Constant(NaN);
        return {
            chunk: i,
            newChunk: u,
            orderCtx: e,
            coefficientTable: [],
            mask: e.mask,
            valueMap: l,
            argIndex: c,
            zero: m,
            one: v,
            nan: C
        }
    }
    function c(e, n) {
        var s, o = e.newChunk, i = e.orderCtx, u = e.coefficientTable, l = e.mask, p = e.valueMap, d = e.argIndex, f = e.zero, g = e.one, h = e.nan, y = u[n];
        if (void 0 !== y)
            return y;
        for (s = l[n] ? n === d ? [f, g] : a.instructionOrder(i, n) > 2 ? [h] : function(e, n) {
            var a, s = e.chunk.getInstruction(n), o = e.newChunk;
            switch (s.type) {
            case r.Add:
                for (var i = s.args, u = i[0], l = i[1], p = c(e, u), d = c(e, l), f = p.length - 1, g = d.length - 1, h = [], y = 0; y <= Math.max(f, g); y++)
                    f >= y && g >= y ? h.push(o.Add([p[y], d[y]])) : h.push(f > g ? p[y] : d[y]);
                return h;
            case r.Subtract:
            case r.Less:
            case r.LessEqual:
            case r.Greater:
            case r.GreaterEqual:
                var m = s.args;
                u = m[0],
                l = m[1];
                s.type !== r.Less && s.type != r.LessEqual || (u = (a = [l, u])[0],
                l = a[1]);
                p = c(e, u),
                d = c(e, l),
                f = p.length - 1,
                g = d.length - 1,
                h = [];
                for (var v = 0; v <= Math.max(f, g); v++)
                    f >= v && g >= v ? h.push(o.Subtract([p[v], d[v]])) : h.push(f > g ? p[v] : o.Negative([d[v]]));
                return h;
            case r.Negative:
                p = c(e, u = s.args[0]),
                h = [];
                for (var C = 0; C < p.length; C++)
                    h.push(o.Negative([p[C]]));
                return h;
            case r.Multiply:
                for (var w = s.args, x = (u = w[0],
                l = w[1],
                p = c(e, u),
                d = c(e, l),
                f = p.length - 1,
                g = d.length - 1,
                h = [],
                0); x <= f; x++)
                    for (var I = 0; I <= g; I++)
                        if (!(x + I > 2)) {
                            var k = o.Multiply([p[x], d[I]])
                              , E = h[x + I];
                            h[x + I] = void 0 === E ? k : o.Add([E, k])
                        }
                return h;
            case r.Divide:
                for (var L = s.args, b = (u = L[0],
                l = L[1],
                p = c(e, u),
                d = c(e, l),
                h = [],
                0); b < p.length; b++)
                    h.push(o.Divide([p[b], d[0]]));
                return h;
            case r.Exponent:
            case r.RawExponent:
                var A = s.args;
                u = A[0],
                l = A[1],
                p = c(e, u),
                d = c(e, l);
                if (0 === (f = p.length - 1))
                    return [o.RawExponent([p[0], d[0]])];
                var M = o.getInstruction(d[0]);
                switch (t.asFloat(M.value)) {
                case 0:
                    return [o.Constant(0)];
                case 1:
                    return p;
                case 2:
                    return [o.Multiply([p[0], p[0]]), o.Multiply([o.Constant(2), o.Multiply([p[0], p[1]])]), o.Multiply([p[1], p[1]])]
                }
            case r.Piecewise:
                return c(e, s.args[1]);
            case r.Noop:
            case r.BeginBroadcast:
            case r.LoadArg:
            case r.Constant:
            case r.Equal:
            case r.And:
            case r.OrderedPair:
            case r.OrderedPairAccess:
            case r.List:
            case r.ListAccess:
            case r.DeferredListAccess:
            case r.InboundsListAccess:
            case r.NativeFunction:
            case r.Distribution:
            case r.BeginIntegral:
            case r.EndIntegral:
            case r.BeginLoop:
            case r.EndLoop:
            case r.EndBroadcast:
            case r.BroadcastResult:
            case r.BlockVar:
            case r.SymbolicVar:
            case r.ExtendSeed:
            case r.Action:
                throw new Error("Cannot find polynomial coefficients of opcode " + s.type + " that depends on symbol.");
            default:
                throw new Error("Unexpected opcode " + s.type)
            }
        }(e, n) : [p[n]]; s.length > 1; ) {
            var m = o.getInstruction(s[s.length - 1]);
            if (m.type !== r.Constant || 0 !== t.asFloat(m.value))
                break;
            s.pop()
        }
        if (0 === s.length)
            throw new Error("Programming Error: coefficients cannot be empty");
        return u[n] = s,
        s
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.instructionCoefficients = e.polynomialCoefficientContext = e.getPolynomialCoefficients = void 0,
    e.getPolynomialCoefficients = function(e, n) {
        var t = e.argNames.indexOf(n)
          , s = i(a.polynomialOrderContext(e, t, {
            allowRestriction: !0,
            allowClosedBlockReferences: !1
        }));
        if (a.instructionOrder(s.orderCtx, e.returnIndex) > 2)
            throw new Error("Programming Error: cannot compute polynomial coefficients for polynomials of order greater than 2");
        for (var o = c(s, e.returnIndex), u = !1, l = 0; l < e.instructionsLength(); l++)
            e.getInstruction(l).type === r.Piecewise && s.mask[l] && (u = !0);
        return {
            chunk: s.newChunk,
            coefficients: o,
            mappedArgIndex: s.valueMap[t],
            mappedReturnIndex: s.valueMap[e.returnIndex],
            isRestrictedPolynomial: u
        }
    }
    ,
    e.polynomialCoefficientContext = i,
    e.instructionCoefficients = c
});
define('core/math/ir/features/lift-point-operations', ["require", "exports", "../opcodes", "core/math/types", "../instructions"], function(require, e, r, s, a) {
    "use strict";
    function t(e, r) {
        return e.getInstruction(r).valueType === s.Point
    }
    function n(e, r) {
        return e.getInstruction(r).valueType === s.Number
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.liftPointOperations = void 0,
    e.liftPointOperations = function(e) {
        if (e.instructionsLength() - 1 !== e.returnIndex)
            throw new Error("Programming Error: only the final instruction in a chunk can be converted to broadcast");
        var s = e.getInstruction(e.returnIndex);
        if (a.isLeafInstruction(s))
            return e.returnIndex;
        switch (s.type) {
        case r.Add:
            if (t(e, s.args[0]) && t(e, s.args[1])) {
                var c = e.Constant(1)
                  , i = e.Constant(2);
                return e.OrderedPair([e.Add([e.OrderedPairAccess([s.args[0], c]), e.OrderedPairAccess([s.args[1], c])]), e.Add([e.OrderedPairAccess([s.args[0], i]), e.OrderedPairAccess([s.args[1], i])])])
            }
            return e.returnIndex;
        case r.Subtract:
            if (t(e, s.args[0]) && t(e, s.args[1])) {
                c = e.Constant(1),
                i = e.Constant(2);
                return e.OrderedPair([e.Subtract([e.OrderedPairAccess([s.args[0], c]), e.OrderedPairAccess([s.args[1], c])]), e.Subtract([e.OrderedPairAccess([s.args[0], i]), e.OrderedPairAccess([s.args[1], i])])])
            }
            return e.returnIndex;
        case r.Negative:
            if (t(e, s.args[0])) {
                c = e.Constant(1),
                i = e.Constant(2);
                return e.OrderedPair([e.Negative([e.OrderedPairAccess([s.args[0], c])]), e.Negative([e.OrderedPairAccess([s.args[0], i])])])
            }
            return e.returnIndex;
        case r.Multiply:
            if (t(e, s.args[0]) && n(e, s.args[1])) {
                c = e.Constant(1),
                i = e.Constant(2);
                return e.OrderedPair([e.Multiply([e.OrderedPairAccess([s.args[0], c]), s.args[1]]), e.Multiply([e.OrderedPairAccess([s.args[0], i]), s.args[1]])])
            }
            if (n(e, s.args[0]) && t(e, s.args[1])) {
                c = e.Constant(1),
                i = e.Constant(2);
                return e.OrderedPair([e.Multiply([s.args[0], e.OrderedPairAccess([s.args[1], c])]), e.Multiply([s.args[0], e.OrderedPairAccess([s.args[1], i])])])
            }
            return e.returnIndex;
        case r.Divide:
            if (t(e, s.args[0]) && n(e, s.args[1])) {
                c = e.Constant(1),
                i = e.Constant(2);
                return e.OrderedPair([e.Divide([e.OrderedPairAccess([s.args[0], c]), s.args[1]]), e.Divide([e.OrderedPairAccess([s.args[0], i]), s.args[1]])])
            }
            return e.returnIndex;
        case r.Exponent:
        case r.RawExponent:
        case r.Equal:
        case r.Less:
        case r.Greater:
        case r.LessEqual:
        case r.GreaterEqual:
        case r.And:
        case r.OrderedPair:
        case r.Piecewise:
        case r.OrderedPairAccess:
        case r.NativeFunction:
        case r.Distribution:
        case r.ListAccess:
        case r.DeferredListAccess:
        case r.InboundsListAccess:
        case r.BeginIntegral:
        case r.EndIntegral:
        case r.BeginLoop:
        case r.EndLoop:
        case r.List:
        case r.BlockVar:
        case r.BeginBroadcast:
        case r.EndBroadcast:
        case r.BroadcastResult:
        case r.ExtendSeed:
        case r.Action:
            return e.returnIndex;
        default:
            throw new Error("Unexpected opcode " + s.type)
        }
    }
});
define('core/math/policy', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.defaultPolicy = void 0;
    var n = ["Sum", "Product", "Integral", "List", "Derivative", "Piecewise", "Exponent", "PercentOf", "FunctionDefinition", "UpdateRule"];
    e.defaultPolicy = {
        assignmentForbidden: function(e) {
            return !0
        },
        graphingEnabled: function() {
            return !1
        },
        isValidSlider: function(e) {
            return !1
        },
        sliderVariables: function(e) {
            return []
        },
        ansEnabled: function() {
            return !1
        },
        disabledFeatures: function() {
            return n
        },
        dimensionVarsEnabled: function() {
            return !1
        }
    }
});
define('core/math/ir/features/substitute', ["require", "exports", "../instructions", "./copy-instruction", "../opcodes"], function(require, r, t, n, e) {
    "use strict";
    function s(r, n) {
        var o = r.chunk
          , a = r.argMap
          , u = r.start;
        if (n < u)
            return n;
        var c = a[n - u];
        if (void 0 !== c)
            return c;
        var g = i(r, n);
        r.argMap[n - u] = g;
        var f = o.getInstruction(n);
        if (t.beginsBlock(f))
            switch (f.type) {
            case e.BeginBroadcast:
            case e.BeginIntegral:
                break;
            case e.BeginLoop:
                for (var p = f.args.length - 2, v = 0; v < p; v++)
                    s(r, n + 1 + v);
                break;
            default:
                throw new Error("Programming Error. Unexpected OpCode: " + f.type)
            }
        else if (t.endsBlock(f))
            for (p = f.args.length - 1,
            v = 0; v < p; v++)
                s(r, n + 1 + v);
        return g
    }
    function i(r, e) {
        var i = r.chunk
          , o = r.start
          , a = i.getInstruction(e);
        if (t.endsBlock(a))
            for (var u = a.args[0], c = u; c <= e; c++) {
                var g = i.getInstruction(c);
                if (!t.isLeafInstruction(g))
                    for (var f = 0, p = g.args; f < p.length; f++) {
                        (h = p[f]) < u && s(r, h)
                    }
            }
        if (t.isLeafInstruction(a))
            return n.copyInstruction(i, a);
        for (var v = [], d = 0, l = a.args; d < l.length; d++) {
            var h = l[d];
            v.push(s(r, h))
        }
        var I = r.argMap[e - o];
        return void 0 !== I ? I : n.copyInstructionWithArgs(i, a, v)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r._substituteInstruction = r.substitute = void 0,
    r.substitute = function(r, t, n, e) {
        return s(function(r, t, n) {
            return {
                chunk: r,
                argMap: t,
                start: n
            }
        }(r, [t], n), e)
    }
    ,
    r._substituteInstruction = i
});
define('core/math/ir/dependencies', ["require", "exports", "core/math/builtinframe"], function(require, e, n) {
    "use strict";
    function r(e, n) {
        return "FunctionDefinition" === n.type && (n = n._expression),
        i(e, n, {})
    }
    function t(e, n, r) {
        for (var i = [], p = [], f = 0, o = n.scopes; f < o.length; f++) {
            for (var d = t(e, o[f], r), u = 0, a = d.freeDependencies; u < a.length; u++) {
                var c = a[u];
                -1 === i.indexOf(c) && -1 === n.definitions.indexOf(c) && i.push(c)
            }
            for (var l = 0, y = d.updateSymbols; l < y.length; l++) {
                c = y[l];
                -1 === p.indexOf(c) && p.push(c)
            }
        }
        for (var h = 0, g = n.dependencies; h < g.length; h++) {
            for (var v = s(e, g[h], r), D = 0, S = v.freeDependencies; D < S.length; D++) {
                c = S[D];
                -1 === i.indexOf(c) && -1 === n.definitions.indexOf(c) && i.push(c)
            }
            for (var m = 0, b = v.updateSymbols; m < b.length; m++) {
                c = b[m];
                -1 === p.indexOf(c) && p.push(c)
            }
        }
        return {
            freeDependencies: i,
            updateSymbols: p
        }
    }
    function i(e, n, r) {
        if ("Slider" === n.type || "Assignment" === n.type)
            return i(e, n._expression, r);
        var s = t(e, n.getScope(), r)
          , p = s.freeDependencies
          , f = s.updateSymbols
          , o = n.getUpdateSymbols();
        if (o.length > 0) {
            f = f.slice();
            for (var d = 0, u = o; d < u.length; d++) {
                var a = u[d];
                -1 === f.indexOf(a) && f.push(a)
            }
        }
        return {
            freeDependencies: p,
            updateSymbols: f
        }
    }
    function s(e, r, t) {
        if (t[r])
            return t[r];
        if (n[r])
            return t[r] = {
                freeDependencies: [],
                updateSymbols: []
            },
            t[r];
        var s = e[r];
        return s ? (t[r] = {
            freeDependencies: [r],
            updateSymbols: []
        },
        t[r] = i(e, s, t),
        t[r]) : (t[r] = {
            freeDependencies: [r],
            updateSymbols: []
        },
        t[r])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getCacheKeys = e.analyzeDependencies = e.getFreeDependencies = e.FRAME_SENTINEL = void 0,
    e.FRAME_SENTINEL = {},
    e.getFreeDependencies = function(e, n) {
        return r(e, n).freeDependencies
    }
    ,
    e.analyzeDependencies = r,
    e.getCacheKeys = function(n, r) {
        for (var t = {}, i = r.getDependencies().slice(); i.length; ) {
            var s = i.pop();
            if (!t.hasOwnProperty(s)) {
                var p = n[s];
                if (p === e.FRAME_SENTINEL)
                    return;
                t[s] = p,
                p && p.getDependencies && Array.prototype.push.apply(i, p.getDependencies())
            }
        }
        return function(e) {
            var n = [];
            for (var r in e)
                n.push([r, e[r]]);
            return n
        }(t)
    }
});
define('core/math/ir/features/take-derivative', ["require", "exports", "core/math/builtinframe", "tslib", "core/math/errormsg", "../scope", "../instructions", "../opcodes", "./get-dependency-mask", "core/math/policy", "core/math/baseparser", "../build-ir", "./copy-instruction", "core/math/types", "./substitute", "./list-length", "../dependencies", "core/math/maybe-rational"], function(require, t, e, r, n, a, s, x, i, o, u, c, p, y, l, d, f, g) {
    "use strict";
    function v(t, e, r) {
        for (var n = t.chunk, a = t.valueMap, i = t.derivativeMap, o = t.backwardMask, u = e; u <= r; u++) {
            var c = n.getInstruction(u);
            if (o[u] && s.beginsBlock(c) && -1 !== c.endIndex)
                switch (c.type) {
                case x.BeginIntegral:
                    u = _(t, u);
                    continue;
                case x.BeginLoop:
                case x.BeginBroadcast:
                    u = h(t, u);
                    continue
                }
            a.push(m(t, u)),
            i.push(I(t, u))
        }
        return r
    }
    function _(t, e) {
        var n = t.chunk
          , a = t.forwardMask
          , x = t.valueMap
          , i = t.derivativeMap
          , o = t.ZERO
          , u = n.getInstruction(e)
          , c = u.endIndex
          , y = n.getInstruction(c)
          , d = o;
        if (a[u.args[1]]) {
            var f = x[u.args[1]];
            d = n.Add([d, n.Multiply([i[u.args[1]], l.substitute(n, f, e, y.args[1])])])
        }
        if (a[u.args[0]]) {
            f = x[u.args[0]];
            d = n.Subtract([d, n.Multiply([i[u.args[0]], l.substitute(n, f, e, y.args[1])])])
        }
        if (function(t, e, r) {
            var n = t.getInstruction(e)
              , a = t.getInstruction(n.endIndex);
            if (a.args[1] < e + 1)
                return r[a.args[1]];
            for (var x = e + 1; x <= a.args[1]; x++) {
                var i = t.getInstruction(x);
                if (!s.isLeafInstruction(i))
                    for (var o = 0, u = i.args; o < u.length; o++) {
                        var c = u[o];
                        if (c < e && r[c])
                            return !0
                    }
            }
            return !1
        }(n, e, a)) {
            var g = x.slice();
            g.push(p.copyInstructionWithArgs(n, u, [g[u.args[0]], g[u.args[1]]])),
            i.push(o),
            v(r.__assign(r.__assign({}, t), {
                valueMap: g,
                mustCopy: !0
            }), e + 1, c - 1);
            var _ = p.copyInstructionWithArgs(n, y, [g[y.args[0]], i[y.args[1]]]);
            i.push(_),
            d = n.Add([d, p.copyInstructionWithArgs(n, n.getInstruction(c + 1), [_])])
        } else
            for (var h = e; h <= c; h++)
                i.push(o);
        if (function(t, e, r) {
            for (var n = t.getInstruction(e), a = e; a <= n.endIndex; a++) {
                var x = t.getInstruction(a);
                if (!s.isLeafInstruction(x))
                    for (var i = 0, o = x.args; i < o.length; i++) {
                        var u = o[i];
                        if (r[u] !== u)
                            return !0
                    }
            }
            return !1
        }(n, e, x)) {
            var I = r.__assign(r.__assign({}, t), {
                mustCopy: !0
            });
            for (h = e; h <= c + 1; h++)
                x.push(m(I, h))
        } else
            for (h = e; h <= c + 1; h++)
                x.push(h);
        return i.push(d),
        c + y.args.length - 1
    }
    function h(t, e) {
        var n = t.chunk
          , a = t.derivativeMap
          , s = t.valueMap
          , i = t.ZERO
          , o = n.getInstruction(e)
          , u = o.endIndex
          , c = n.getInstruction(u);
        if (o.type === x.BeginBroadcast)
            s.push(p.copyInstructionWithArgs(n, o, o.args)),
            a.push(i);
        else {
            var y = [];
            y.push(s[o.args[0]], s[o.args[1]]);
            for (var l = 2; l < o.args.length; l++)
                y.push(s[o.args[l]], a[o.args[l]]);
            s.push(p.copyInstructionWithArgs(n, o, y)),
            a.push(i);
            for (l = 2; l < o.args.length; l++)
                s.push(p.copyInstructionWithArgs(n, n.getInstruction(e + l - 1), [s[e]])),
                a.push(p.copyInstructionWithArgs(n, n.getInstruction(e + l - 1), [s[e]]))
        }
        v(r.__assign(r.__assign({}, t), {
            mustCopy: !0
        }), a.length, u - 1);
        var d = [];
        d.push(s[c.args[0]]);
        for (l = 1; l < c.args.length; l++)
            d.push(s[c.args[l]], a[c.args[l]]);
        s.push(p.copyInstructionWithArgs(n, c, d)),
        a.push(i);
        for (l = 1; l < c.args.length; l++)
            s.push(p.copyInstructionWithArgs(n, n.getInstruction(u + l), [s[u]])),
            a.push(p.copyInstructionWithArgs(n, n.getInstruction(u + l), [s[u]]));
        return u + c.args.length - 1
    }
    function m(t, e) {
        var r = t.chunk
          , n = t.valueMap
          , a = t.mustCopy
          , x = r.getInstruction(e);
        if (s.isLeafInstruction(x))
            return a ? p.copyInstruction(r, x) : e;
        for (var i = [], o = !1, u = 0, c = x.args; u < c.length; u++) {
            var y = c[u];
            i.push(n[y]),
            n[y] !== y && (o = !0)
        }
        return o || a ? p.copyInstructionWithArgs(r, x, i) : e
    }
    function I(t, e) {
        var r = t.chunk
          , n = t.derivativeVarIndex
          , a = t.forwardMask
          , i = t.backwardMask
          , o = t.valueMap
          , u = t.derivativeMap
          , c = t.ZERO
          , l = t.ONE
          , f = t.NAN
          , v = r.getInstruction(e);
        if (!i[e])
            return c;
        if (e === n) {
            if (y.isList(v.valueType)) {
                var _ = d.listLengthIndex(r, e)
                  , h = r.BeginBroadcast([_])
                  , m = r.EndBroadcast([h, l]);
                return r.BroadcastResult(y.ListOfNumber, [m])
            }
            return l
        }
        if (s.beginsBlock(v) || s.endsBlock(v) || v.type === x.BlockVar || v.type === x.BroadcastResult || v.type === x.Equal || v.type === x.Greater || v.type === x.Less || v.type === x.GreaterEqual || v.type === x.LessEqual || v.type === x.And || v.type === x.Distribution || v.type === x.ExtendSeed || v.type === x.Action)
            return c;
        if (!a[e] || s.isLeafInstruction(v))
            return v.valueType !== y.Number ? r.Multiply([c, o[e]]) : v.type !== x.Constant || isFinite(g.asFloat(v.value)) ? c : f;
        if (v.type === x.List || v.type === x.OrderedPair) {
            for (var I = [], b = 0, M = v.args; b < M.length; b++) {
                var A = M[b];
                I.push(u[A])
            }
            return p.copyInstructionWithArgs(r, v, I)
        }
        if (v.type === x.Piecewise)
            return p.copyInstructionWithArgs(r, v, [o[v.args[0]], u[v.args[1]], u[v.args[2]]]);
        for (var q = c, w = [], E = 0, N = v.args; E < N.length; E++) {
            var k = N[E];
            w.push(o[k])
        }
        for (var L = 0; L < v.args.length; L++)
            if (a[v.args[L]]) {
                var O = u[v.args[L]];
                if (O !== c) {
                    var T = z(t, v, L, w, O);
                    T !== c && (q = q === c ? T : r.Add([T, q]))
                }
            }
        return q
    }
    function z(t, r, n, s, i) {
        var u = t.chunk
          , y = t.ZERO
          , l = t.ONE
          , d = t.NAN;
        switch (r.type) {
        case x.Add:
            return i;
        case x.Subtract:
            switch (n) {
            case 0:
                return i;
            default:
                return u.Negative([i])
            }
        case x.Multiply:
            switch (n) {
            case 0:
                return u.Multiply([i, s[1]]);
            default:
                return u.Multiply([s[0], i])
            }
        case x.Divide:
            switch (n) {
            case 0:
                return u.Divide([i, s[1]]);
            default:
                return u.Multiply([s[0], u.Divide([u.Negative([i]), u.Multiply([s[1], s[1]])])])
            }
        case x.Negative:
            return u.Negative([i]);
        case x.Exponent:
        case x.RawExponent:
            switch (n) {
            case 0:
                return u.Multiply([u.Multiply([s[1], u.Exponent([s[0], u.Subtract([s[1], l])])]), i]);
            default:
                return u.Multiply([u.Piecewise([u.Equal([s[0], y]), u.Piecewise([u.GreaterEqual([s[1], y]), y, d]), u.Multiply([u.SyntheticNativeFunction("ln", [s[0]]), u.Exponent([s[0], s[1]])])]), i])
            }
        case x.NativeFunction:
            return function(t, r, n, s) {
                for (var x = Object.create(e), i = a.Scope({}, -1), u = 0; u < n.length; u++) {
                    var p = b[u];
                    a.setSymbol(i, p, n[u]),
                    x[p] = f.FRAME_SENTINEL
                }
                return a.setSymbol(i, "x_1", s),
                x.x_1 = f.FRAME_SENTINEL,
                c.addToIR(c.Ctx(o.defaultPolicy, x, t, i, void 0), r)
            }(u, A[r.symbol][n], s, i);
        case x.ListAccess:
        case x.DeferredListAccess:
        case x.InboundsListAccess:
        case x.OrderedPairAccess:
            switch (n) {
            case 0:
                return p.copyInstructionWithArgs(u, r, [i, s[1]]);
            default:
                return y
            }
        default:
            throw new Error("Unimplemented derivative for opcode " + r.type)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.takeDerivative = void 0,
    t.takeDerivative = function(t, e, r) {
        var a = t.getInstruction(e);
        if (!y.isTypeOrListOfType(a.valueType, y.Number) && !y.isTypeOrListOfType(a.valueType, y.Point))
            throw n.derivativeTypeError([y.prettyPrint(a.valueType)]);
        var o = t.getInstruction(r);
        if (!y.isTypeOrListOfType(o.valueType, y.Number) && o.type !== x.Noop)
            throw n.parseError();
        var u = t.Constant(0);
        if (e < r)
            return u;
        for (var c = t.Constant(1), p = t.Constant(NaN), l = i.getDependencyMask(t, r), d = function(t, e) {
            for (var r = [], n = 0; n < e; n++)
                r.push(!1);
            r.push(!0);
            for (n = e; n >= 0; n--)
                if (r[n]) {
                    var a = t.getInstruction(n);
                    if (!s.isLeafInstruction(a))
                        if (a.type === x.Piecewise)
                            r[a.args[1]] = !0,
                            r[a.args[2]] = !0;
                        else
                            for (var i = 0, o = a.args; i < o.length; i++) {
                                r[o[i]] = !0
                            }
                }
            return r
        }(t, e), f = [], g = [], _ = 0; _ < r; _++)
            g.push(_),
            f.push(u);
        return v({
            chunk: t,
            derivativeVarIndex: r,
            forwardMask: l,
            backwardMask: d,
            valueMap: g,
            derivativeMap: f,
            mustCopy: !1,
            ZERO: u,
            ONE: c,
            NAN: p
        }, r, e),
        f[e]
    }
    ;
    var b = ["x", "y", "z", "u"]
      , M = {
        exp: ["\\exp(x)*x_1"],
        ln: ["\\{x >= 0: x_1/x \\}"],
        log: ["\\{x >= 0: x_1/(x*\\ln(10)) \\}"],
        sqrt: ["x_1/(2*\\sqrt{x})"],
        rtxsqpone: ["x*x_1/\\rtxsqpone(x)"],
        rtxsqmone: ["x*x_1/\\rtxsqmone(x)"],
        sin: ["\\cos(x)*x_1"],
        cos: ["-\\sin(x)*x_1"],
        tan: ["\\sec(x)^2*x_1"],
        arcsin: ["x_1/\\sqrt{1 - x^2}"],
        arccos: ["-x_1/\\sqrt{1 - x^2}"],
        sinh: ["\\cosh(x)*x_1"],
        cosh: ["\\sinh(x)*x_1"],
        tanh: ["(\\sech(x))^2*x_1"],
        arcsinh: ["x_1/\\sqrt{x^2 + 1}"],
        arccosh: ["\\{ x > 0: x_1/\\rtxsqmone(x) \\}"],
        arctanh: ["\\{ \\abs(x) < 1: x_1/(1 - x^2) \\}"],
        csc: ["-\\cot(x)*\\csc(x)*x_1"],
        sec: ["\\tan(x)*\\sec(x)*x_1"],
        cot: ["-\\csc(x)^2*x_1"],
        arccsc: ["-x_1/(\\abs(x)*\\rtxsqmone(x))"],
        arcsec: ["x_1/(\\abs(x)*\\rtxsqmone(x))"],
        arccot: ["-x_1/(1+x^2)"],
        csch: ["-\\coth(x)*\\csch(x)*x_1"],
        sech: ["-\\tanh(x)*\\sech(x)*x_1"],
        coth: ["-(\\csch(x))^2*x_1"],
        arccsch: ["-x_1/(\\abs(x)*\\rtxsqpone(x))"],
        arcsech: ["\\{ x >= 0: -x_1/(x*\\sqrt{1 - x^2}) \\}"],
        arccoth: ["\\{ \\abs(x) > 1 : x_1/(1 - x^2) \\}"],
        factorial: ["(x)!*\\polyGamma(0, x + 1)*x_1"],
        floor: ["\\{ \\mod(x, 1) > 0: 0*x_1 \\}"],
        ceil: ["\\{ \\mod(x, 1) > 0: 0*x_1 \\}"],
        round: ["\\{ \\abs(\\mod(x, 1) - 0.5) > 0: 0*x_1 \\}"],
        abs: ["\\{ \\abs(x) > 0: \\sign(x)*x_1 \\}"],
        sign: ["\\{ \\abs(x) > 0: 0*x_1 \\}"],
        distance: ["-((y.x-x.x)*x_1.x+(y.y-x.y)*x_1.y)/\\distance(x,y)", "((y.x-x.x)*x_1.x+(y.y-x.y)*x_1.y)/\\distance(x,y)"],
        mean: ["\\mean(x_1)"],
        total: ["\\total(x_1)"],
        length: ["0"],
        var: ["2*\\cov(x, x_1)"],
        varp: ["2*\\cov(x, x_1)*(\\length(x)-1)/\\length(x)"],
        stdev: ["\\cov(x, x_1)/\\stdev(x)"],
        stdevp: ["\\covp(x, x_1)/\\stdevp(x)"],
        mad: ["\\mean(\\sign(x-\\mean(x))*(x_1 - \\mean(x_1)))"],
        min: ["x_1[\\argmin(x)]"],
        max: ["x_1[\\argmax(x)]"],
        median: ["0.5*(x_1[\\lowerQuantileIndex(x, 0.5)] + x_1[\\upperQuantileIndex(x, 0.5)])"],
        argmin: ["0/0"],
        argmax: ["0/0"],
        gcd: ["0/0"],
        lcm: ["0/0"],
        erf: ["\\frac{2x_1}{\\sqrt{\\pi }}e^{-x^2}"],
        invNorm: ["\\frac{x_1}{\\pdf(\\normaldist(0,1),\\invNorm(x))}"],
        logbase: ["\\{x > 0: \\frac{x_1}{x*\\ln(y)} \\}", "\\frac{-\\log_{y}(x)*x_1}{y*\\ln(y)}"],
        nthroot: ["x^{1/y - 1}/y*x_1", "-\\frac{x^{1/y}*\\ln(x)*x_1}{y^2}"],
        hypot: ["x_1*x/\\hypot(x,y)", "x_1*y/\\hypot(x,y)"],
        polyGamma: ["0/0", "\\polyGamma(1 + x, y)*x_1"],
        mod: ["\\{ \\abs(\\mod(x, y)) > 0: x_1 \\}", "\\{ \\mod(x/y, 1) > 0: -\\floor(x/y)*x_1 \\}"],
        cov: ["\\cov(x_1, y)", "\\cov(x, x_1)"],
        covp: ["\\covp(x_1, y)", "\\covp(x, x_1)"],
        corr: ["(\\cov(x_1, y) - (\\cov(x, y)*\\cov(x, x_1)/\\var(x)))/(\\stdevp(x)\\stdevp(y))", "(\\cov(x, x_1) - (\\cov(x, y)*\\cov(y, x_1)/\\var(y)))/(\\stdevp(x)\\stdevp(y))"],
        spearman: ["0/0", "0/0"],
        quantile: ["\\{ \\floor(y*(\\length(x)-1)) = y*(\\length(x)-1) :   x_1[\\upperQuantileIndex(x, y)],  (\\ceil(y*(\\length(x)-1)) - y*(\\length(x)-1))*x_1[\\lowerQuantileIndex(x, y)] +   (y*(\\length(x)-1) - \\floor(y*(\\length(x)-1)))*x_1[\\upperQuantileIndex(x, y)]\\}", "\\{ \\floor(y*(\\length(x)-1)) < y*(\\length(x)-1) :   (x[\\upperQuantileIndex(x, y)] - x[\\lowerQuantileIndex(x, y)])*x_1\\}"],
        quartile: ["0.5*(x_1[\\lowerQuartileIndex(x, y)] + x_1[\\upperQuartileIndex(x, y)])", "0/0"],
        tscore: ["\\frac{\\sqrt{\\length(x)}(\\stdev(x)*\\mean(x_1)-(\\mean(x)-y)*\\frac{\\cov(x,x_1)}{\\stdev(x)})}{\\stdev(x)^2}", "-x_1*\\sqrt{\\length(x)}/\\stdev(x)"],
        quartileIndex: ["0/0", "0/0"],
        upperQuartileIndex: ["0/0", "0/0"],
        lowerQuartileIndex: ["0/0", "0/0"],
        upperQuantileIndex: ["0/0", "0/0"],
        lowerQuantileIndex: ["0/0", "0/0"],
        nCr: ["0/0", "0/0"],
        nPr: ["0/0", "0/0"],
        arctan: ["x_1*y/(y^2+x^2)", "-x_1*x/(y^2+x^2)"],
        poissonpdf: ["0/0", "x_1\\frac{e^{-y}(\\floor(x)-y)y^{(\\floor(x)-1)}}{(\\floor(x))!}"],
        invPoisson: ["0/0", "0/0"],
        tpdf: ["x_1*\\pdf(\\tdist(y),x)*\\frac{-(y+1)*x}{y+x^2}", "x_1*\\frac{1}{2}\\pdf(\\tdist(y),x)(  \\frac{x^2-1}{y + x^2} + \\ln(\\frac{y}{y + x^2}) +   \\polyGamma(0, \\frac{1+y}{2}) - \\polyGamma(0, y/2))"],
        invT: ["x_1/\\pdf(\\tdist(y),\\invT(x, y))", "0/0"],
        tcdf: ["-x_1*\\pdf(\\tdist(z),x)", "x_1*\\pdf(\\tdist(z),y)", "0/0"],
        poissoncdf: ["0/0", "0/0", "x_1\\sum _{n=\\max(0,\\floor(\\min(x,y)))}^{\\floor(\\max(x,y))}\\frac{e^{-z}(n-z)z^{(n-1)}}{n!}"],
        normalpdf: ["-x_1*\\frac{x-y}{z^2} \\pdf(\\normaldist(y,z),x)", "x_1*\\frac{x-y}{z^2} \\pdf(\\normaldist(y,z),x)", "x_1*(\\frac{(x-y-z)*(x-y+z)}{z^3}) \\pdf(\\normaldist(y,z),x)"],
        binompdf: ["0/0", "0/0", "\\{0<=z<=1: x_1*\\pdf(\\binomialdist(y,z),x)*(\\frac{\\round(x)}{z}-\\frac{\\round(y)-\\round(x)}{1-z}), 0 \\}"],
        invBinom: ["0/0", "0/0", "0/0"],
        uniformpdf: ["0", "\\{y<=x: \\frac{x_1}{(z-y)^2}, 0\\}", "\\{z>=x: -\\frac{x_1}{(z-y)^2}, 0\\}"],
        invUniform: ["\\{y<=x<=z: x_1*(z-y), 0\\}", "\\{y<=x<=z: x_1*(1-x), 0\\}", "\\{y<=x<=z: x_1*x, 0\\}"],
        normalcdf: ["-x_1\\pdf(\\normaldist(z,u), x)", "x_1\\pdf(\\normaldist(z,u), y)", "-x_1*(\\pdf(\\normaldist(z,u), y) - \\pdf(\\normaldist(z,u), x))", "x_1*(  \\{\\abs(y)=1/0:0,\\frac{z-y}{u}\\pdf(\\normaldist(z,u),y)\\} -   \\{\\abs(x)=1/0:0,\\frac{z-x}{u}\\pdf(\\normaldist(z,u),x)\\})"],
        binomcdf: ["0/0", "0/0", "0/0", "\\{0<=u<=1: x_1*\\sum _{n=\\max(0,\\round(\\min(x,y)))}^{\\round(\\max(x,y))}(  \\pdf(\\binomialdist(z,u),n)*(\\frac{n}{u}-\\frac{\\round(z)-n}{1-u})), 0 \\}"],
        uniformcdf: ["\\{z>u: 0/0, -x_1\\pdf(\\uniformdist(z,u), x)\\}", "\\{z>u: 0/0, x_1\\pdf(\\uniformdist(z,u), y)\\}", "\\{z>u: 0/0, x_1*(\\frac{\\{z<x<u:u-x,0\\} + \\{z<y<u:y-u,0\\}}{(u-z)^2})\\}", "\\{z>u: 0/0, x_1*(\\frac{\\{z<x<u:x-z,0\\} + \\{z<y<u:z-y,0\\}}{(u-z)^2})\\}"],
        normalSample: ["0/0", "0/0", "0/0"],
        uniformSample: ["0/0", "0/0", "0/0"],
        tSample: ["0/0", "0/0"],
        poissonSample: ["0/0", "0/0"],
        binomSample: ["0/0", "0/0", "0/0"],
        rgb: ["0/0", "0/0", "0/0"],
        hsv: ["0/0", "0/0", "0/0"],
        polygon: ["\\polygon(x_1)"],
        validateRangeLength: ["0", "0", "0", "\\{\\validateRangeLength(x,y,z,u) \\ge 1: x_1, 0\\}"],
        validateSampleCount: ["\\{x<0:0,1\\}*x_1"],
        select: ["\\select(x_1, y)", "0*\\select(x,y)"],
        shuffle: ["0*y", "\\shuffle(x, x_1)"],
        sortPerm: ["0*x"],
        elementsAt: ["\\elementsAt(x_1, y)", "0*\\elementsAt(x,y)"],
        uniquePerm: ["0*\\uniquePerm(x)"]
    }
      , A = {};
    for (var q in M) {
        for (var w = q, E = M[w], N = [], k = 0; k < E.length; k++) {
            var L = E[k];
            N.push(u.parse(L, {}))
        }
        A[w] = N
    }
});
define('core/math/ir/features/bound-domain', ["require", "exports", "core/math/domaintypes", "core/math/types", "core/math/maybe-rational", "../opcodes", "./polynomial-order", "./get-polynomial-coefficients", "../instructions", "./is-constant", "./as-value"], function(require, e, a, n, t, r, s, i, o, c, u) {
    "use strict";
    function l(e, m) {
        var f = e.domainTable
          , d = f[m];
        if (void 0 !== d)
            return d;
        var v = function(e, m) {
            var f = e.chunk
              , d = e.mask
              , v = e.orderCtx
              , p = f.getInstruction(m);
            if (o.isLeafInstruction(p)) {
                if (p.type === r.Constant)
                    if (p.valueType == n.Number) {
                        if (isNaN(t.asFloat(p.value)))
                            return a.emptyDomain()
                    } else if (p.valueType === n.ListOfNumber)
                        for (var y = 0, g = p.value; y < g.length; y++) {
                            var D = g[y];
                            if (isNaN(t.asFloat(D)))
                                return a.unknownDomain()
                        }
                return a.allReals()
            }
            switch (p.type) {
            case r.And:
            case r.Add:
            case r.Subtract:
            case r.Multiply:
            case r.Divide:
            case r.Exponent:
            case r.RawExponent:
            case r.Negative:
            case r.BlockVar:
            case r.BroadcastResult:
            case r.OrderedPair:
            case r.OrderedPairAccess:
            case r.NativeFunction:
            case r.Distribution:
            case r.BeginIntegral:
            case r.EndIntegral:
            case r.BeginBroadcast:
            case r.EndBroadcast:
            case r.BeginLoop:
            case r.EndLoop:
            case r.ListAccess:
            case r.DeferredListAccess:
            case r.InboundsListAccess:
            case r.ExtendSeed:
            case r.Action:
                for (var k = a.allReals(), b = 0, N = p.args; b < N.length; b++) {
                    var w = N[b];
                    k = a.intersectDomains(k, l(e, w))
                }
                return k;
            case r.List:
                if (!d[m])
                    return a.allReals();
                var C = l(e, p.args[0]);
                if ("known" !== C.type)
                    return a.unknownDomain();
                for (var h = 1; h < p.args.length; h++) {
                    if ("known" !== (k = l(e, p.args[h])).type)
                        return a.unknownDomain();
                    if (k.bounds[0] !== C.bounds[0] || k.bounds[1] !== C.bounds[1])
                        return a.unknownDomain()
                }
                return C;
            case r.Equal:
                return d[m] ? a.unknownDomain() : a.allReals();
            case r.Piecewise:
                var x = f.getInstruction(p.args[2]);
                return x.type === r.Constant && x.valueType === n.Number && isNaN(t.asFloat(x.value)) ? a.intersectDomains(l(e, p.args[0]), l(e, p.args[1])) : a.unknownDomain();
            case r.Less:
            case r.Greater:
            case r.LessEqual:
            case r.GreaterEqual:
                if (!d[m])
                    return a.allReals();
                if (s.instructionOrder(v, m) > 1)
                    return a.unknownDomain();
                var E = e.coefficientCtx;
                void 0 === E && (E = i.polynomialCoefficientContext(v),
                e.coefficientCtx = E);
                var L = E.newChunk
                  , R = i.instructionCoefficients(E, m)
                  , B = R[0]
                  , I = R[1];
                if (!c.isConstant(L.getInstruction(B)))
                    return a.unknownDomain();
                var A = u.asValue(L, B);
                if (isNaN(A))
                    return a.emptyDomain();
                for (var O = a.allReals(), q = 0, T = p.args; q < T.length; q++) {
                    w = T[q];
                    O = a.intersectDomains(O, l(e, w))
                }
                if (void 0 === I)
                    return p.type === r.LessEqual || p.type === r.GreaterEqual ? A >= 0 ? O : a.emptyDomain() : A > 0 ? O : a.emptyDomain();
                var F = u.asValue(L, I);
                return a.intersectDomains(O, a.linearPositiveDomain(A, F))
            }
        }(e, m);
        return f[m] = v,
        v
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.boundDomain = void 0,
    e.boundDomain = function(e, i, o) {
        var c = e.argNames.indexOf(i);
        if (-1 === c) {
            var u = e.getInstruction(o);
            return u.type === r.Constant && u.valueType === n.Number && isNaN(t.asFloat(u.value)) ? a.emptyDomain() : a.allReals()
        }
        return l(function(e) {
            var a = e.chunk
              , n = e.mask;
            return {
                chunk: a,
                mask: n,
                orderCtx: e,
                domainTable: []
            }
        }(s.polynomialOrderContext(e, c, {
            allowRestriction: !0,
            allowClosedBlockReferences: !1
        })), o)
    }
});
define('core/math/ir/features/find-linear-subset', ["require", "exports", "../opcodes", "core/math/types", "../instructions"], function(require, e, r, s, a) {
    "use strict";
    function t(e, r, s) {
        var t = e.getInstruction(s)
          , n = function(e) {
            for (var r = [], s = 0; s < e; s++)
                r.push(!1);
            return r
        }(e.argNames.length);
        if (a.isLeafInstruction(t))
            return n;
        for (var c = 0, u = t.args; c < u.length; c++)
            for (var o = r[u[c]], i = 0; i < o.length; i++)
                n[i] = n[i] || o[i];
        return n
    }
    function n(e, s, t, n) {
        var u = e.getInstruction(n);
        if (a.isLeafInstruction(u))
            return c(e.argNames.length);
        switch (u.type) {
        case r.Add:
        case r.Subtract:
        case r.Negative:
        case r.List:
            for (var o = c(e.argNames.length), i = 0; i < u.args.length; i++)
                for (var g = t[u.args[i]], d = 0; d < g.length; d++)
                    o[d] = o[d] && g[d];
            return o;
        case r.Divide:
            for (var f = [], h = t[u.args[0]], l = s[u.args[1]], p = 0; p < h.length; p++)
                f.push(h[p] && !l[p]);
            return f;
        case r.Multiply:
            for (var v = t[u.args[0]].slice(), L = t[u.args[1]].slice(), E = s[u.args[0]], I = s[u.args[1]], N = 0, m = 0, b = 0; b < v.length; b++) {
                var x = v[b] && !I[b]
                  , A = L[b] && !E[b];
                v[b] = x,
                L[b] = A,
                x && (N += 1),
                A && (m += 1)
            }
            return N >= m ? v : L;
        case r.Piecewise:
            var B = s[u.args[0]]
              , y = t[u.args[1]]
              , w = t[u.args[2]]
              , q = [];
            for (n = 0; n < B.length; n++)
                q.push(!B[n] && y[n] && w[n]);
            return q;
        case r.ListAccess:
        case r.DeferredListAccess:
        case r.InboundsListAccess:
            var P = t[u.args[0]]
              , S = s[u.args[1]]
              , D = [];
            for (n = 0; n < S.length; n++)
                D.push(P[n] && !S[n]);
            return D;
        case r.BroadcastResult:
            var O = u.args[0]
              , G = n - O;
            return t[e.getInstruction(O).args[G]];
        case r.OrderedPair:
        case r.OrderedPairAccess:
        case r.Exponent:
        case r.RawExponent:
        case r.Less:
        case r.LessEqual:
        case r.Greater:
        case r.GreaterEqual:
        case r.Equal:
        case r.And:
        case r.NativeFunction:
        case r.Distribution:
        case r.BeginIntegral:
        case r.EndIntegral:
        case r.BeginLoop:
        case r.EndLoop:
        case r.BeginBroadcast:
        case r.EndBroadcast:
        case r.BlockVar:
        case r.ExtendSeed:
        case r.Action:
            for (var M = [], R = 0, _ = s[n]; R < _.length; R++) {
                var j = _[R];
                M.push(!j)
            }
            return M;
        default:
            throw new Error("Unexpected opcode " + u.type)
        }
    }
    function c(e) {
        for (var r = [], s = 0; s < e; s++)
            r.push(!0);
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.findLinearSubset = void 0,
    e.findLinearSubset = function(e) {
        for (var r = [], a = [], c = 0; c < e.argNames.length; c++) {
            for (var u = [], o = [], i = 0; i < e.argNames.length; i++)
                u.push(e.argTypes[i] === s.Number),
                o.push(c === i);
            a.push(o),
            r.push(u)
        }
        for (c = e.argNames.length; c <= e.returnIndex; c++)
            a.push(t(e, a, c)),
            r.push(n(e, a, r, c));
        return r[e.returnIndex]
    }
});
define('core/math/ir/features/derive-regression-restrictions', ["require", "exports", "../opcodes", "core/math/types", "../instructions", "./is-constant", "./as-value", "./polynomial-order", "./get-polynomial-coefficients", "core/math/domaintypes", "./list-length"], function(require, n, e, t, i, o, r, s, a, u, c) {
    "use strict";
    function l(n, e, t, i, o, r) {
        if ("known" !== e.type)
            return t;
        if (e.bounds[0] === -1 / 0 && e.bounds[1] === 1 / 0)
            return t;
        var s = n.And([n.LessEqual([n.Constant(e.bounds[0]), i]), n.LessEqual([i, n.Constant(e.bounds[1])])]);
        return n.Multiply([t, n.Piecewise([s, o, r])])
    }
    function f(n, e) {
        for (var t = [], i = 0; i < n.argNames.length; i++)
            t.push(i);
        var o = [];
        for (i = 0; i <= e; i++)
            o.push(p(n, t, o, i));
        return o[e]
    }
    function g(n) {
        return n.type === e.NativeFunction && ("sin" === n.symbol || "cos" === n.symbol)
    }
    function v(n) {
        for (var e = 1 / 0, t = -1 / 0, i = n.length, o = 0, r = n; o < r.length; o++) {
            var s = r[o];
            e = Math.min(e, s),
            t = Math.max(t, s)
        }
        return {
            min: e,
            max: t,
            length: i
        }
    }
    function p(n, e, t, o) {
        for (var r = n.getInstruction(o), s = function(n) {
            for (var e = [], t = 0; t < n; t++)
                e.push(!1);
            return e
        }(e.length), a = 0; a < e.length; a++)
            if (e[a] === o)
                return s[a] = !0,
                s;
        if (i.isLeafInstruction(r))
            return s;
        for (var u = 0, c = r.args; u < c.length; u++)
            for (var l = t[c[u]], f = 0; f < l.length; f++)
                s[f] = s[f] || l[f];
        return s
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.deriveRegressionRestrictions = void 0,
    n.deriveRegressionRestrictions = function(n) {
        var i = n.getInstruction(n.returnIndex);
        if (i.type !== e.BroadcastResult)
            return n;
        var h = i.args[0]
          , d = n.returnIndex - h
          , m = n.getInstruction(h)
          , C = m.args[0]
          , y = m.args[d]
          , w = []
          , x = [];
        w.push(C);
        var I = c.assertConstantListLength(n, n.returnIndex, "Programming error: cannot optimize regression on non-constant-length list");
        x.push({
            min: 1,
            max: I,
            length: I
        });
        for (var k = !1, R = !1, b = C + 1; b <= y; b++) {
            if ((W = n.getInstruction(b)).type === e.ListAccess || W.type === e.InboundsListAccess || W.type === e.DeferredListAccess) {
                if (W.args[1] !== C)
                    continue;
                var L = W.args[0];
                if (n.getInstruction(L).valueType !== t.ListOfNumber)
                    continue;
                if (!o.isConstant(n.getInstruction(L)))
                    continue;
                var D = v(r.asValue(n, L));
                if (!isFinite(D.min) || !isFinite(D.max))
                    continue;
                w.push(b),
                x.push(D)
            } else
                g(W) ? k = !0 : W.type !== e.Exponent && W.type !== e.RawExponent || (R = !0)
        }
        if (0 === w.length)
            return n;
        if (!R && !k)
            return n;
        var O = []
          , P = [];
        for (b = 0; b < n.argNames.length; b++)
            P.push(b),
            O.push(u.allReals());
        var N = []
          , B = [];
        for (b = 0; b <= y; b++)
            N.push(p(n, P, N, b)),
            B.push(p(n, w, B, b));
        for (b = 0; b <= y; b++) {
            if ((W = n.getInstruction(b)).type === e.Piecewise)
                for (var E = N[b], F = 0; F < E.length; F++)
                    E[F] && (O[F] = u.unknownDomain());
            else if (W.type === e.Exponent || W.type === e.RawExponent) {
                var M = !1
                  , V = !1;
                for (F = 0; F < w.length; F++)
                    B[W.args[0]][F] && (M = !0),
                    B[W.args[1]][F] && (V = !0);
                if (M)
                    continue;
                if (!V)
                    continue;
                E = N[W.args[0]];
                var A = 0
                  , q = void 0;
                for (F = 0; F < E.length; F++)
                    E[F] && (q = F,
                    A += 1);
                if (1 !== A)
                    continue;
                if (void 0 === q)
                    continue;
                var _ = P[q]
                  , j = s.polynomialOrderContext(n.copy().reopenFinalBlock(), _, {
                    allowRestriction: !1,
                    allowClosedBlockReferences: !1
                });
                if (1 !== s.instructionOrder(j, W.args[0]))
                    continue;
                var z = a.polynomialCoefficientContext(j)
                  , T = a.instructionCoefficients(z, W.args[0])
                  , G = T[0];
                if (void 0 === (en = T[1]))
                    continue;
                var H = r.asValue(z.newChunk, en)
                  , J = r.asValue(z.newChunk, G);
                O[q] = u.intersectDomains(O[q], u.linearPositiveDomain(J, H))
            }
        }
        if (k)
            for (var K = n.copy().reopenFinalBlock(), Q = 0; Q < w.length; Q++) {
                var S = s.polynomialOrderContext(K, w[Q], {
                    allowRestriction: !1,
                    allowClosedBlockReferences: !1
                })
                  , U = a.polynomialCoefficientContext(S);
                for (b = C + 1; b <= y; b++) {
                    var W;
                    if (g(W = K.getInstruction(b))) {
                        var X = W.args[0];
                        if (1 !== s.instructionOrder(S, X))
                            continue;
                        var Y = a.instructionCoefficients(U, X)[1];
                        if (void 0 === Y)
                            continue;
                        var Z = f(U.newChunk, Y)
                          , $ = (q = void 0,
                        0);
                        for (F = 0; F < Z.length; F++)
                            Z[F] && (q = F,
                            $ += 1);
                        if (1 !== $)
                            continue;
                        if (void 0 === q)
                            continue;
                        var nn = s.polynomialOrderContext(U.newChunk, q, {
                            allowRestriction: !1,
                            allowClosedBlockReferences: !1
                        });
                        if (1 !== s.instructionOrder(nn, Y))
                            continue;
                        var en, tn = a.polynomialCoefficientContext(nn), on = a.instructionCoefficients(tn, Y);
                        G = on[0];
                        if (void 0 === (en = on[1]) || !o.isConstant(tn.newChunk.getInstruction(G)) || !o.isConstant(tn.newChunk.getInstruction(en)))
                            continue;
                        J = r.asValue(tn.newChunk, G),
                        H = r.asValue(tn.newChunk, en);
                        var rn = (x[Q].max - x[Q].min) / Math.min(x[Q].length - 1, 31)
                          , sn = Math.PI / rn;
                        if (!isFinite(sn))
                            continue;
                        if (sn <= 0)
                            continue;
                        O[q] = u.intersectDomains(O[q], u.linearPositiveDomain(J, H)),
                        O[q] = u.intersectDomains(O[q], u.linearPositiveDomain(sn - J, -H))
                    }
                }
            }
        for (var an = !1, un = 0, cn = O; un < cn.length; un++) {
            var ln = cn[un];
            if ("known" !== ln.type)
                return n;
            ln.bounds[0] === -1 / 0 && ln.bounds[1] === 1 / 0 || (an = !0)
        }
        if (!an)
            return n;
        var fn = n.copy()
          , gn = n.returnIndex
          , vn = fn.Constant(1)
          , pn = fn.Constant(NaN);
        for (F = 0; F < fn.argNames.length; F++)
            gn = l(fn, O[F], gn, F, vn, pn);
        return fn.close(),
        fn
    }
});
define('core/math/ir/chunk', ["require", "exports", "core/math/errormsg", "core/math/types", "core/math/maybe-rational", "core/math/functions", "./opcodes", "./builtin-table", "./features/constant-collapse", "./features/type-check", "./features/emit-js", "./features/get-value-type", "./features/is-constant", "./features/list-length", "./features/drop-unreferenced-instructions", "./features/convert-to-broadcast", "./features/print", "./features/to-dot", "./features/fuse-broadcast", "./features/polynomial-order", "./features/get-polynomial-coefficients", "./features/copy-instruction", "./features/lift-point-operations", "./features/element-at", "./features/take-derivative", "./features/bound-domain", "./features/find-linear-subset", "./features/derive-regression-restrictions", "./features/as-value", "./features/depends-on-outer-variable", "./features/nan-of-type", "./features/find-dependency-symbols"], function(require, t, e, n, r, s, i, o, u, a, p, c, h, y, l, g, f, d, v, I, T, m, b, L, x, k, V, C, A, B, N, D) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Chunk = void 0;
    var E = 1e4
      , S = function() {
        function t(t) {
            if (this.instructions = [],
            this.blockMask = [],
            this.comments = [],
            t.argNames.length !== t.argTypes.length)
                throw new Error("Programming Error: length of argNames must match length of argTypes");
            this.argNames = t.argNames,
            this.argTypes = t.argTypes;
            for (var e = 0; e < this.argTypes.length; e++) {
                var n = this.argTypes[e];
                this.LoadArg(n)
            }
            this.returnIndex = -1
        }
        return t.prototype.addComments = function(t) {
            for (var e in t) {
                var n = this.comments[e] || "";
                this.comments[e] = n + t[e]
            }
            return this
        }
        ,
        t.prototype.instructionsLength = function() {
            return this.instructions.length
        }
        ,
        t.prototype.getInstruction = function(t) {
            return this.instructions[t]
        }
        ,
        t.prototype.popInstruction = function() {
            return this.instructions.pop()
        }
        ,
        t.prototype.truncate = function(t) {
            this.instructions.length = t,
            this.blockMask.length = t,
            this.comments.length = t
        }
        ,
        t.prototype.pushInstructionChecked = function(t) {
            if (this.instructions.length >= 32768)
                throw e.deeplyNested();
            this.instructions.push(t),
            this.returnIndex = this.instructions.length - 1
        }
        ,
        t.prototype.pushLeafInstruction = function(t) {
            return this.pushInstructionChecked(t),
            this.returnIndex
        }
        ,
        t.prototype.pushInstruction = function(t) {
            return this.checkInstructionArguments(t),
            this.pushInstructionChecked(t),
            this.returnIndex = g.convertToBroadcast(this),
            this.returnIndex = b.liftPointOperations(this),
            a.typeCheck(this, this.returnIndex),
            this.returnIndex = u.constantCollapse(this),
            this.returnIndex
        }
        ,
        t.prototype.checkInstructionArguments = function(t) {
            for (var e = 0, n = t.args; e < n.length; e++) {
                var r = n[e];
                if (this.blockMask[r])
                    throw new Error("Programming Error: cannot reference an instruction in a closed block")
            }
        }
        ,
        t.prototype.markClosedBlock = function(t, e) {
            for (var n = t; n < e; n++)
                this.blockMask[n] = !0
        }
        ,
        t.prototype.LoadArg = function(t) {
            return this.pushLeafInstruction({
                type: i.LoadArg,
                valueType: t
            })
        }
        ,
        t.prototype.BlockVar = function(t, e) {
            return this.pushInstruction({
                type: i.BlockVar,
                valueType: t,
                args: e
            })
        }
        ,
        t.prototype.SymbolicVar = function(t, e) {
            return this.pushLeafInstruction({
                type: i.SymbolicVar,
                valueType: t,
                symbol: e
            })
        }
        ,
        t.prototype.BroadcastResult = function(t, e) {
            var n = e[0]
              , r = this.instructions[n]
              , s = r.args[0]
              , o = this.instructions.length - n
              , u = r.args[o]
              , a = !B.dependsOnOuterVariable(this, u, s)
              , p = this.getInstruction(s).args[0]
              , c = this.getInstruction(p);
            return this.pushInstruction({
                type: i.BroadcastResult,
                valueType: t,
                args: e,
                isConstantBroadcast: a,
                constantLength: h.isConstant(c) ? A.asValue(this, p) : void 0
            })
        }
        ,
        t.prototype.Constant = function(t) {
            return this.ConstantOfType(n.Number, t)
        }
        ,
        t.prototype.ConstantOfType = function(t, s) {
            if ("number" == typeof s && (s = r.maybeRational(s, 1)),
            n.isList(t) && s.length > E)
                throw e.maxListSize(E.toLocaleString());
            return this.pushLeafInstruction({
                type: i.Constant,
                valueType: t,
                value: s
            })
        }
        ,
        t.prototype.NanOfType = function(t) {
            if (t === n.Distribution) {
                var e = this.Constant(NaN);
                return this.Distribution("uniformdist", [e, e])
            }
            return this.ConstantOfType(t, N.nanOfType(t))
        }
        ,
        t.prototype.Add = function(t) {
            var e = i.Add
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Subtract = function(t) {
            var e = i.Subtract
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Multiply = function(t) {
            var e = i.Multiply
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Divide = function(t) {
            var e = i.Divide
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Exponent = function(t) {
            var e = i.Exponent
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.RawExponent = function(t) {
            var e = i.RawExponent
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Negative = function(t) {
            var e = i.Negative
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Equal = function(t) {
            var e = i.Equal
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Less = function(t) {
            var e = i.Less
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Greater = function(t) {
            var e = i.Greater
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.LessEqual = function(t) {
            var e = i.LessEqual
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.GreaterEqual = function(t) {
            var e = i.GreaterEqual
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.And = function(t) {
            var e = i.And
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.Piecewise = function(t) {
            var e = i.Piecewise
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.OrderedPair = function(t) {
            var e = i.OrderedPair
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.OrderedPairAccess = function(t) {
            var e = i.OrderedPairAccess
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.List = function(t) {
            var n = i.List
              , r = c.getValueType(this, n, t);
            if (t.length > E)
                throw e.maxListSize(E.toLocaleString());
            return this.pushInstruction({
                type: n,
                valueType: r,
                args: t
            })
        }
        ,
        t.prototype.ListAccess = function(t) {
            var e = i.ListAccess
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.DeferredListAccess = function(t) {
            var e = i.DeferredListAccess
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.InboundsListAccess = function(t) {
            var e = i.InboundsListAccess
              , n = c.getValueType(this, e, t);
            return this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            })
        }
        ,
        t.prototype.NativeFunction = function(t, e, n) {
            var r = this
              , s = i.NativeFunction
              , u = o.BuiltInTable[t].returnType
              , a = "function" == typeof u ? u(n.map(function(t) {
                return r.getInstruction(t).valueType
            })) : u;
            return this.pushInstruction({
                type: s,
                valueType: a,
                args: n,
                symbol: t,
                callData: e
            })
        }
        ,
        t.prototype.SyntheticNativeFunction = function(t, e) {
            var n = this
              , r = i.NativeFunction
              , s = o.BuiltInTable[t].returnType
              , u = "function" == typeof s ? s(e.map(function(t) {
                return n.getInstruction(t).valueType
            })) : s
              , a = {
                errorSymbol: t,
                providedArity: e.length,
                isDotCall: !1
            };
            return this.pushInstruction({
                type: r,
                valueType: u,
                args: e,
                symbol: t,
                callData: a
            })
        }
        ,
        t.prototype.Distribution = function(t, e) {
            var r = i.Distribution
              , s = n.Distribution;
            return this.pushInstruction({
                type: r,
                valueType: s,
                args: e,
                symbol: t
            })
        }
        ,
        t.prototype.BeginIntegral = function(t, e) {
            var n = i.BeginIntegral
              , r = c.getValueType(this, n, []);
            return this.pushInstruction({
                type: n,
                valueType: r,
                args: e,
                endIndex: -1,
                callData: t
            })
        }
        ,
        t.prototype.EndIntegral = function(t) {
            var e = i.EndIntegral
              , n = c.getValueType(this, e, t)
              , r = t[0]
              , s = this.getInstruction(r);
            this.instructions[r] = {
                type: s.type,
                valueType: s.valueType,
                args: s.args,
                endIndex: this.instructionsLength(),
                callData: s.callData
            };
            var o = this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            });
            return this.markClosedBlock(r, o),
            o
        }
        ,
        t.prototype.BeginBroadcast = function(t, n) {
            var r = i.BeginBroadcast
              , s = c.getValueType(this, r, [])
              , o = this.getInstruction(t[0]);
            if (h.isConstant(o) && A.asValue(this, t[0]) > E)
                throw e.maxListSize(E.toLocaleString());
            return this.pushInstruction({
                type: r,
                valueType: s,
                endIndex: -1,
                args: t,
                listComprehensionCallData: n
            })
        }
        ,
        t.prototype.EndBroadcast = function(t) {
            var e = i.EndBroadcast
              , n = c.getValueType(this, e, t)
              , r = t[0]
              , s = this.getInstruction(r)
              , o = {
                type: s.type,
                valueType: s.valueType,
                args: s.args,
                endIndex: this.instructionsLength()
            };
            this.instructions[r] = o;
            var u = this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            });
            return this.markClosedBlock(r, u),
            u
        }
        ,
        t.prototype.BeginLoop = function(t, e) {
            var n = i.BeginLoop
              , r = c.getValueType(this, n, e);
            return this.pushInstruction({
                type: n,
                valueType: r,
                args: e,
                endIndex: -1,
                callData: t
            })
        }
        ,
        t.prototype.EndLoop = function(t) {
            var e = i.EndLoop
              , n = c.getValueType(this, e, t)
              , r = t[0]
              , s = this.getInstruction(r);
            this.instructions[r] = {
                type: s.type,
                valueType: s.valueType,
                args: s.args,
                endIndex: this.instructionsLength(),
                callData: s.callData
            };
            var o = this.pushInstruction({
                type: e,
                valueType: n,
                args: t
            });
            return this.markClosedBlock(r, o),
            o
        }
        ,
        t.prototype.ExtendSeed = function(t, e) {
            var r = i.ExtendSeed
              , s = n.SeedType;
            return this.pushInstruction({
                type: r,
                valueType: s,
                args: e,
                tag: t
            })
        }
        ,
        t.prototype.Noop = function() {
            var t = i.Noop
              , e = n.Any;
            return this.pushLeafInstruction({
                type: t,
                valueType: e
            })
        }
        ,
        t.prototype.Action = function(t, e) {
            return this.pushInstruction({
                type: i.Action,
                valueType: n.Action,
                args: e,
                symbols: t
            })
        }
        ,
        t.prototype.replaceInstructionWithConstant = function(t, e) {
            this.instructions[t] = e,
            this.blockMask[t] = void 0
        }
        ,
        t.prototype.replaceInstructionWithBlockVar = function(t, e) {
            this.instructions[t] = e
        }
        ,
        t.prototype.reopenFinalBlock = function() {
            var t = this.getInstruction(this.returnIndex);
            if (t.type !== i.BroadcastResult)
                return this;
            for (var e = t.args[0], n = this.getInstruction(e).args[0]; n < e; n++)
                this.blockMask[n] = void 0;
            return this.truncate(e),
            this
        }
        ,
        t.prototype.isInClosedBlock = function(t) {
            return this.blockMask[t]
        }
        ,
        t.prototype.copy = function() {
            var e = new t({
                argNames: this.argNames,
                argTypes: this.argTypes
            });
            return e.instructions = this.instructions.slice(),
            e.blockMask = this.blockMask.slice(),
            e.comments = this.comments.slice(),
            e.returnIndex = this.returnIndex,
            e
        }
        ,
        t.prototype.close = function() {
            return this.returnIndex = v.fuseBroadcast(this, this.returnIndex),
            l.dropUnreferencedInstructions(this),
            this
        }
        ,
        t.prototype.copyInstruction = function(t) {
            return m.copyInstruction(this, t)
        }
        ,
        t.prototype.copyInstructionWithArgs = function(t, e) {
            return m.copyInstructionWithArgs(this, t, e)
        }
        ,
        t.prototype.replaceInstructionWithNoop = function(t) {
            this.instructions[t] = {
                type: i.Noop,
                valueType: n.Any
            }
        }
        ,
        t.prototype.getReturnType = function() {
            return this.instructions[this.returnIndex].valueType
        }
        ,
        t.prototype.isConstant = function() {
            return h.isConstant(this.instructions[this.returnIndex])
        }
        ,
        t.prototype.asValue = function() {
            return A.asValue(this, this.returnIndex)
        }
        ,
        t.prototype.asCompilerValue = function() {
            var t = this.instructions[this.returnIndex];
            switch (t.type) {
            case i.Constant:
                return t.value;
            default:
                throw new Error("Unexpected opcode " + t.type + ".")
            }
        }
        ,
        t.prototype.getConstantListLength = function() {
            return y.getConstantListLength(this, this.returnIndex)
        }
        ,
        t.prototype.getListLengthDependencies = function() {
            var t = this.copy()
              , e = y.listLengthIndex(t, t.returnIndex);
            return D.findDependencySymbols(t, e)
        }
        ,
        t.prototype.elementAt = function(t) {
            var e = this.copy()
              , n = e.returnIndex;
            return e.returnIndex = L.elementAt(e, n, t),
            e.close(),
            e
        }
        ,
        t.prototype.getCompiledFunction = function(t) {
            var e;
            if (t) {
                e = t.slice();
                for (var n = 0, r = this.argNames; n < r.length; n++) {
                    var i = r[n];
                    -1 === e.indexOf(i) && e.push(i)
                }
            } else
                e = this.argNames;
            var o = p.emitJS(this)
              , u = o.source
              , a = o.constants;
            return {
                args: e,
                source: u,
                constants: a,
                fn: s.closureFunctionWithBuiltIn(e, u, a)
            }
        }
        ,
        t.prototype.polynomialOrder = function(t, e) {
            return I.polynomialOrder(this, t, e)
        }
        ,
        t.prototype.getPolynomialCoefficients = function(t) {
            return T.getPolynomialCoefficients(this, t)
        }
        ,
        t.prototype.takeDerivative = function(t) {
            var e = this.copy()
              , n = this.argNames.indexOf(t);
            return -1 === n ? (e.Constant(0),
            e.close(),
            e) : (e.returnIndex = x.takeDerivative(e, e.returnIndex, n),
            e.close(),
            e)
        }
        ,
        t.prototype.deriveRegressionRestrictions = function() {
            return C.deriveRegressionRestrictions(this)
        }
        ,
        t.prototype.boundDomain = function(t) {
            return k.boundDomain(this, t, this.returnIndex)
        }
        ,
        t.prototype.findLinearSubset = function(t) {
            for (var e = V.findLinearSubset(this), n = [], r = 0, s = t; r < s.length; r++) {
                var i = s[r]
                  , o = this.argNames.indexOf(i);
                if (-1 === o)
                    throw new Error("Programming Error: findLinearSubset called with a non-dependency");
                n.push(e[o])
            }
            return n
        }
        ,
        t.prototype.print = function() {
            return f.print(this)
        }
        ,
        t.prototype.printInstruction = function(t) {
            return f.printInstruction(this, t)
        }
        ,
        t.prototype.toDot = function() {
            return d.default(this)
        }
        ,
        t.prototype.getLiveArgNames = function() {
            for (var t = [], e = 0; e < this.argNames.length; e++) {
                this.instructions[e].type === i.LoadArg && t.push(this.argNames[e])
            }
            return t
        }
        ,
        t
    }();
    t.Chunk = S
});
define('core/math/ir/distribution-table', ["require", "exports", "./features/list-length"], function(require, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.randomSampleFromList = t.DistributionTable = void 0,
    t.DistributionTable = {
        normaldist: {
            pdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("normalpdf", i.concat(r.args))
            },
            cdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("normalcdf", i.concat(r.args))
            },
            mean: function(t, n, i) {
                return t.getInstruction(n).args[0]
            },
            median: function(n, i, r) {
                return t.DistributionTable.normaldist.mean(n, i, r)
            },
            stdev: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("abs", [r.args[1]])
            },
            var: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.Multiply([r.args[1], r.args[1]])
            },
            quantile: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.Add([t.Multiply([t.SyntheticNativeFunction("invNorm", i), t.SyntheticNativeFunction("abs", [r.args[1]])]), r.args[0]])
            },
            random: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("normalSample", [i[0], r.args[0], r.args[1]])
            }
        },
        tdist: {
            pdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("tpdf", i.concat(r.args))
            },
            cdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("tcdf", i.concat(r.args))
            },
            mean: function(t, n, i) {
                return t.Constant(0)
            },
            median: function(t, n, i) {
                return t.Constant(0)
            },
            stdev: function(n, i, r) {
                return n.SyntheticNativeFunction("sqrt", [t.DistributionTable.tdist.var(n, i, r)])
            },
            var: function(t, n, i) {
                var r = t.getInstruction(n)
                  , e = t.Constant(2)
                  , a = r.args[0];
                return t.Piecewise([t.GreaterEqual([a, e]), t.Divide([a, t.Subtract([a, e])]), t.Constant(NaN)])
            },
            quantile: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invT", [i[0], r.args[0]])
            },
            random: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("tSample", [i[0], r.args[0]])
            }
        },
        poissondist: {
            pdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("poissonpdf", i.concat(r.args))
            },
            cdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("poissoncdf", i.concat(r.args))
            },
            mean: function(t, n, i) {
                return t.getInstruction(n).args[0]
            },
            median: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invPoisson", [t.Constant(.5), r.args[0]])
            },
            stdev: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("sqrt", [r.args[0]])
            },
            var: function(n, i, r) {
                return t.DistributionTable.poissondist.mean(n, i, r)
            },
            quantile: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invPoisson", [i[0], r.args[0]])
            },
            random: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("poissonSample", [i[0], r.args[0]])
            }
        },
        binomialdist: {
            pdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("binompdf", i.concat(r.args))
            },
            cdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("binomcdf", i.concat(r.args))
            },
            mean: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.Multiply([r.args[0], r.args[1]])
            },
            median: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invBinom", [t.Constant(.5), r.args[0], r.args[1]])
            },
            stdev: function(n, i, r) {
                return n.SyntheticNativeFunction("sqrt", [t.DistributionTable.binomialdist.var(n, i, r)])
            },
            var: function(t, n, i) {
                var r = t.getInstruction(n).args
                  , e = r[0]
                  , a = r[1];
                return t.Multiply([e, t.Multiply([a, t.Subtract([t.Constant(1), a])])])
            },
            quantile: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invBinom", [i[0], r.args[0], r.args[1]])
            },
            random: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("binomSample", [i[0], r.args[0], r.args[1]])
            }
        },
        uniformdist: {
            pdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("uniformpdf", i.concat(r.args))
            },
            cdf: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("uniformcdf", i.concat(r.args))
            },
            mean: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.Divide([t.Add([r.args[0], r.args[1]]), t.Constant(2)])
            },
            median: function(n, i, r) {
                return t.DistributionTable.uniformdist.mean(n, i, r)
            },
            stdev: function(n, i, r) {
                return n.SyntheticNativeFunction("sqrt", [t.DistributionTable.uniformdist.var(n, i, r)])
            },
            var: function(t, n, i) {
                var r = t.getInstruction(n)
                  , e = t.Subtract([r.args[1], r.args[0]]);
                return t.Divide([t.Multiply([e, e]), t.Constant(12)])
            },
            quantile: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("invUniform", [i[0], r.args[0], r.args[1]])
            },
            random: function(t, n, i) {
                var r = t.getInstruction(n);
                return t.SyntheticNativeFunction("uniformSample", [i[0], r.args[0], r.args[1]])
            }
        }
    },
    t.randomSampleFromList = function(t, i, r) {
        var e = r[0]
          , a = t.Constant(0)
          , o = t.Constant(1);
        if (0 === n.getConstantListLength(t, i))
            return t.Constant(NaN);
        var u = n.listLengthIndex(t, i);
        return t.InboundsListAccess([i, t.Add([t.SyntheticNativeFunction("floor", [t.Multiply([t.SyntheticNativeFunction("uniformSample", [e, a, o]), u])]), o])])
    }
});
define('core/math/ir/features/depends-on-instruction', ["require", "exports", "../instructions"], function(require, r, n) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.dependsOnInstruction = void 0,
    r.dependsOnInstruction = function(r, e, t) {
        if (e === t)
            return !0;
        if (e < t)
            return !1;
        for (var i = [!0], u = t + 1; u <= e; u++)
            i.push(!1);
        for (var s = [e]; s.length; ) {
            if (!i[(u = s.pop()) - t]) {
                i[u - t] = !0;
                var o = r.getInstruction(u);
                if (!n.isLeafInstruction(o))
                    for (var f = 0, c = o.args; f < c.length; f++) {
                        var a = c[f];
                        if (a === t)
                            return !0;
                        a < t || (i[a - t] || s.push(a))
                    }
            }
        }
        return !1
    }
});
define('core/math/cache-stats', ["require", "exports"], function(require, e) {
    "use strict";
    var a;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.markCacheRead = e.markCacheWrite = e.markCacheMiss = e.markCacheHit = e.setCacheStatStore = void 0,
    e.setCacheStatStore = function(e) {
        a = e
    }
    ,
    e.markCacheHit = function() {
        a && (a.cacheHits += 1)
    }
    ,
    e.markCacheMiss = function() {
        a && (a.cacheMisses += 1)
    }
    ,
    e.markCacheWrite = function() {
        a && (a.cacheWrites += 1)
    }
    ,
    e.markCacheRead = function() {
        a && (a.cacheReads += 1)
    }
});
define('core/math/ir/build-ir', ["require", "exports", "parsenodes", "core/math/builtinframe", "core/math/errormsg", "./scope", "./chunk", "core/math/types", "core/math/maybe-rational", "./opcodes", "./builtin-table", "./features/list-length", "./features/is-constant", "./features/type-check", "./distribution-table", "./features/fuse-broadcast", "./features/find-dependency-symbols", "./features/element-at", "./features/take-derivative", "./features/substitute", "./features/convert-to-broadcast", "./features/copy-instruction", "./features/depends-on-instruction", "./dependencies", "../cache-stats", "./features/nan-of-type"], function(require, e, t, r, n, i, a, s, o, u, c, l, d, p, y, f, g, v, m, h, b, T, L, S, I, w) {
    "use strict";
    function A(e, t, r, n, i) {
        return {
            policy: e,
            frame: t,
            chunk: r,
            scope: n,
            parentNode: i
        }
    }
    function E(e) {
        var t = e.policy
          , r = e.frame
          , n = e.argNames
          , s = e.argTypes
          , o = new a.Chunk({
            argNames: n,
            argTypes: s
        });
        return A(t, r, o, function(e) {
            for (var t = i.Scope({}, -1), r = 0; r < e.argNames.length; r++)
                i.setSymbol(t, e.argNames[r], r);
            return t
        }(o), void 0)
    }
    function x(e, t, r) {
        if ("FunctionDefinition" === t.type)
            for (var i = 0, a = r; i < a.length; i++) {
                var o = a[i];
                if (-1 !== t._argSymbols.indexOf(o) || t._symbol === o)
                    throw n.updateRuleLocalLHS(o);
                if (t._sybmol === o)
                    throw n.updateRuleFunctionLHS(o)
            }
        for (var u = [], c = 0, l = r; c < l.length; c++) {
            o = l[c];
            e.frame[o] || u.push(o)
        }
        if (u.length) {
            var d = U(e, u[0]).setDependencies(e.chunk.argNames.concat(u));
            throw e.chunk.isConstant() && e.chunk.getReturnType() === s.Action && d.setActionValue(e.chunk.asValue()),
            d
        }
    }
    function C(e, a) {
        var c;
        if (I.markCacheRead(),
        _(e.frame, a))
            I.markCacheHit(),
            c = e.chunk.copyInstruction(a.__IRCache.instruction);
        else {
            I.markCacheMiss();
            var y = e.chunk.instructionsLength()
              , g = e.policy
              , v = e.frame
              , T = e.chunk
              , E = e.scope
              , x = e.parentNode;
            if (c = function(e, a) {
                var c = e.policy
                  , y = e.frame
                  , g = e.chunk
                  , v = e.scope
                  , T = e.parentNode;
                switch (a.type) {
                case "Constant":
                    var I = a._constantValue
                      , E = "boolean" == typeof I ? s.Bool : s.Number;
                    return g.ConstantOfType(E, I);
                case "MixedNumber":
                    return g.Constant(a._constantValue);
                case "Negative":
                    return g.Negative(function(e, t) {
                        return [C(e, t[0])]
                    }(e, a.args));
                case "Add":
                    return g.Add(D(e, a.args));
                case "Subtract":
                    return g.Subtract(D(e, a.args));
                case "Multiply":
                    return g.Multiply(D(e, a.args));
                case "Divide":
                    return g.Divide(D(e, a.args));
                case "Exponent":
                    return g.Exponent(D(e, a.args));
                case "Comparator['=']":
                    return g.Equal(D(e, a.args));
                case "Comparator['>']":
                    return g.Greater(D(e, a.args));
                case "Comparator['<']":
                    return g.Less(D(e, a.args));
                case "Comparator['>=']":
                    return g.GreaterEqual(D(e, a.args));
                case "Comparator['<=']":
                    return g.LessEqual(D(e, a.args));
                case "And":
                    return g.And(D(e, a.args));
                case "PercentOf":
                    return g.Divide([g.Multiply(D(e, a.args)), g.Constant(100)]);
                case "ParenSeq":
                    return function(e, t) {
                        for (var r, i, a, o, u = e.chunk, c = e.policy, l = B(e, t.args), d = !1, p = 0; p < l.length; p++) {
                            var y = u.getInstruction(l[p]).valueType;
                            if (y === s.Action) {
                                if (d = !0,
                                void 0 !== o)
                                    throw n.combineTypeError([s.prettyPrint(o), s.prettyPrint(s.Action)])
                            } else {
                                if (d)
                                    throw n.combineTypeError([s.prettyPrint(s.Action), s.prettyPrint(y)]);
                                o = y
                            }
                        }
                        if (d)
                            return V(e, l);
                        var f = null !== (a = null === (i = (r = c).dimensions) || void 0 === i ? void 0 : i.call(r)) && void 0 !== a ? a : 2;
                        if (2 !== f)
                            throw new Error("3D points not implemented.");
                        if (l.length !== f)
                            throw n.badTupleDimensions(f);
                        return u.OrderedPair(l)
                    }(e, a);
                case "BareSeq":
                    return function(e, t) {
                        var r = e.chunk
                          , i = B(e, t.args);
                        if (i.length < 2)
                            throw n.unexpectedSymbol(",");
                        for (var a = r.getInstruction(i[0]).valueType, o = 1; o < i.length; o++) {
                            var u = r.getInstruction(i[o]).valueType;
                            if (a !== u)
                                throw n.combineTypeError([s.prettyPrint(a), s.prettyPrint(u)])
                        }
                        if (a === s.Number)
                            throw 2 === i.length ? n.malformedPoint() : n.malformedList();
                        return a === s.Action ? V(e, i) : r.List(i)
                    }(e, a);
                case "OrderedPairAccess":
                    return g.OrderedPairAccess(D(e, a.args));
                case "UpdateRule":
                    var x = y[ne = a._symbol];
                    if (x) {
                        if (x.isError)
                            throw x;
                        if ("Assignment" !== x.type && "Slider" !== x.type)
                            throw U(e, ne)
                    }
                    return g.Action([ne], [C(e, a.args[1])]);
                case "List":
                    if (a.getDependencies().length > 0)
                        return g.List(B(e, a.args));
                    if (0 === a.args.length)
                        return g.ConstantOfType(s.EmptyList, []);
                    for (var N = g.instructionsLength(), F = [], O = void 0, _ = void 0, R = 0, k = a.args; R < k.length; R++) {
                        var M = C(e, k[R])
                          , H = g.getInstruction(M);
                        if (void 0 === O) {
                            if (O = H.valueType,
                            !s.hasListType(O))
                                throw n.listTypeError([s.prettyPrint(O)]);
                            _ = s.listType(O)
                        } else if (H.valueType !== O)
                            throw n.heterogeneousList();
                        if (H.type !== u.Constant)
                            throw new Error("Programming error: expected list with no dependencies to constant collapse.");
                        F.push(H.value),
                        g.truncate(N)
                    }
                    return g.ConstantOfType(_, F);
                case "ListAccess":
                    var j = C(e, a.args[0])
                      , z = g.getInstruction(j);
                    if ("Range" === a.args[1].type && 0 === a.args[1].args[1].length) {
                        if (!s.isList(z.valueType))
                            throw n.indexTypeError([s.prettyPrint(z.valueType), s.prettyPrint(s.Number)]);
                        var W = l.listLengthIndex(g, j)
                          , G = q(e, C(e, a.args[1].args[0]), g.List([W]), {
                            stepMustBePositive: !0
                        });
                        return g.ListAccess([j, G])
                    }
                    G = C(e, a.args[1]);
                    var K = g.getInstruction(G);
                    if (!s.isList(z.valueType))
                        throw n.indexTypeError([s.prettyPrint(z.valueType), s.prettyPrint(K.valueType)]);
                    return K.valueType === s.ListOfBool ? g.SyntheticNativeFunction("select", [j, G]) : g.ListAccess([j, G]);
                case "Range":
                    var J = D(e, a.args);
                    return q(e, J[0], J[1], {
                        stepMustBePositive: !1
                    });
                case "ListComprehension":
                    return function(e, t) {
                        for (var r = e.policy, a = e.frame, o = e.chunk, c = e.scope, d = e.parentNode, p = t._body, y = [], f = o.Constant(1), g = Object.create(a), v = 0, m = t._inputLists; v < m.length; v++) {
                            var h = m[v]._symbol;
                            g[h] = n.badListComprehensionInputDependency(h)
                        }
                        for (var b = i.childScope(c), T = t._inputLists.length - 1; T >= 0; T--) {
                            var L = t._inputLists[T]
                              , I = L._symbol
                              , w = C(A(r, g, o, b, d), L.args[1])
                              , E = o.getInstruction(w);
                            if (!s.isList(E.valueType))
                                throw n.listComprehensionInputListTypeError(I, s.prettyPrint(E.valueType));
                            var x = l.listLengthIndex(o, w);
                            y.push({
                                symbol: I,
                                assignedList: w,
                                lengthIndex: x
                            }),
                            f = o.Multiply([f, x])
                        }
                        var N = o.Constant(1)
                          , F = o.BeginBroadcast([f], {
                            inputListSymbols: y.map(function(e) {
                                return e.symbol
                            })
                        })
                          , O = i.childScope(c);
                        i.setSymbol(O, t._index._symbol, F);
                        var _ = N;
                        for (T = y.length - 1; T >= 0; T--) {
                            var D = y[T]
                              , B = (I = D.symbol,
                            w = D.assignedList,
                            x = D.lengthIndex,
                            void 0);
                            if (1 === y.length)
                                B = F;
                            else {
                                var P = o.SyntheticNativeFunction("floor", [o.Divide([o.Subtract([F, N]), _])]);
                                B = o.Add([o.SyntheticNativeFunction("mod", [P, x]), N]),
                                T > 0 && (_ = o.Multiply([_, x]))
                            }
                            var R = i.getSymbol(O, I);
                            if (void 0 !== a[I] || void 0 !== R && o.getInstruction(R).type !== u.LoadArg)
                                throw n.shadowedListComprehensionInput(I);
                            i.setSymbol(O, I, o.ListAccess([w, B]))
                        }
                        for (var k = Object.create(a), M = 0, V = y; M < V.length; M++) {
                            k[V[M].symbol] = S.FRAME_SENTINEL
                        }
                        var U = C(A(r, k, o, O, d), p)
                          , q = o.getInstruction(U);
                        if (!s.hasListType(q.valueType))
                            throw n.listTypeError([s.prettyPrint(q.valueType)]);
                        var H = o.EndBroadcast([F, U]);
                        return o.BroadcastResult(s.listType(q.valueType), [H])
                    }(e, a);
                case "Piecewise":
                    var Q = function(e, t) {
                        return [C(e, t[0]), C(e, t[1]), C(e, t[2])]
                    }(e, a.args)
                      , X = g.getInstruction(Q[0])
                      , Y = g.getInstruction(Q[1])
                      , Z = g.getInstruction(Q[2]);
                    if (X.type === u.Constant && X.valueType === s.Bool && s.typesMatch(Y.valueType, Z.valueType)) {
                        var $ = Q[X.value ? 1 : 2]
                          , ee = g.getInstruction($)
                          , te = Y.valueType !== s.EmptyList ? Y.valueType : Z.valueType;
                        return ee.valueType === s.EmptyList && te !== s.EmptyList ? g.ConstantOfType(te, []) : $
                    }
                    if (!s.typesMatch(Y.valueType, Z.valueType) && d.isConstant(Z) && Z.valueType === s.Number && o.isNanFloat(Z.value) && w.isNanableValueType(Y.valueType)) {
                        var re = g.NanOfType(Y.valueType);
                        Q = [Q[0], Q[1], re]
                    }
                    return g.Piecewise(Q);
                case "Ans":
                case "Identifier":
                    var ne = a._symbol
                      , ie = a._errorSymbol;
                    if ("Ans" === a.type && -1 !== g.argNames.indexOf(ne))
                        throw n.ansUndefined();
                    G = i.getSymbol(v, ne);
                    var ae = y[ne];
                    if (void 0 !== G) {
                        if (v.symbolMap.hasOwnProperty(ne))
                            return G;
                        if (void 0 === ae || ae === S.FRAME_SENTINEL)
                            return G
                    }
                    if (void 0 === ae) {
                        if (r[a._symbol])
                            throw r[a._symbol].isFunction ? n.functionUnsupported(ie) : n.constantUnsupported(ie);
                        throw new Error("Programming Error: reached undefined symbol " + ne)
                    }
                    if (ae.isError)
                        throw ae;
                    if (ae.isFunction)
                        throw n.identifierAsFunction(ie);
                    var se = C(A(c, y, g, v, void 0), ae);
                    return i.setSymbol(v, ne, se),
                    se;
                case "FunctionCall":
                case "SeededFunctionCall":
                    Q = B(e, a.args);
                    return P(e, a._symbol, a._errorSymbol, Q);
                case "FunctionExponent":
                    return y[tt = a.args[0]._symbol] && y[tt].isFunction ? C(e, t.Exponent([t.FunctionCall(tt, [a.args[1]]), a.args[2]])) : C(e, t.Multiply([a.args[0], t.Exponent([a.args[1], a.args[2]])]));
                case "FunctionFactorial":
                    return y[tt = a.args[0]._symbol] && y[tt].isFunction ? C(e, t.FunctionCall("\\factorial", [t.FunctionCall(tt, [a.args[1]])])) : C(e, t.Multiply([a.args[0], t.FunctionCall("\\factorial", [a.args[1]])]));
                case "DotAccess":
                    var oe = a.args[0]
                      , ue = a.args[1];
                    if (("Identifier" === ue.type || "FunctionCall" === ue.type) && y[ue._symbol] && y[ue._symbol].isFunction)
                        return P(e, ne = ue._symbol, ie = ue._errorSymbol, Q = B(e, "Identifier" === ue.type ? [oe] : [oe].concat(ue.args)), {
                            dotLHSIndex: Q[0]
                        });
                    if ("SeededFunctionCall" === ue.type)
                        return P(e, ne = ue._symbol, ie = ue._errorSymbol, Q = B(e, [ue.seed, oe].concat(ue.args.slice(1))), {
                            dotLHSIndex: Q[1]
                        });
                    throw n.unexpectedSymbol(".");
                case "Seed":
                    return g.ConstantOfType(s.SeedType, a._stringValue);
                case "ExtendSeed":
                    return g.ExtendSeed(a.tag, D(e, a.args));
                case "Integral":
                    var ce = a._differential._symbol
                      , le = i.getSymbol(v, ce);
                    if (void 0 !== y[ce] || void 0 !== le && g.getInstruction(le).type !== u.LoadArg)
                        throw n.shadowedIntegrationVariable(ce);
                    (xe = Object.create(y))[ce] = n.badIntegralBoundDependency(ce);
                    var de = C(Ne = A(c, xe, g, i.childScope(v), T), a.args[1])
                      , pe = C(Ne, a.args[2])
                      , ye = g.getInstruction(de)
                      , fe = g.getInstruction(pe)
                      , ge = g.SymbolicVar(s.Number, ce)
                      , ve = i.childScope(v);
                    i.setSymbol(ve, ce, ge);
                    var me = Object.create(y);
                    me[ce] = S.FRAME_SENTINEL;
                    var he = C(A(c, me, g, ve, T), a.args[3]);
                    if (!L.dependsOnInstruction(g, he, ge))
                        return g.Multiply([he, g.Subtract([pe, de])]);
                    var be = de;
                    void 0 !== (Ue = void 0 !== (Re = l.minListLengthIndex(g, [de, pe, he])) ? g.BeginBroadcast([Re]) : void 0) && s.isList(ye.valueType) && (be = b.deferredOrInboundsAccess(g, de, Ue));
                    var Te = pe;
                    void 0 !== Ue && s.isList(fe.valueType) && (Te = b.deferredOrInboundsAccess(g, pe, Ue));
                    var Le = g.BeginIntegral({
                        indexSymbol: ce
                    }, [be, Te])
                      , Se = h.substitute(g, Le, ge, he)
                      , Ie = g.getInstruction(Se);
                    void 0 !== Ue && s.isList(Ie.valueType) && (Se = b.deferredOrInboundsAccess(g, Se, Ue));
                    var we = g.EndIntegral([Le, Se])
                      , Ae = g.BlockVar(s.Number, [we]);
                    if (void 0 !== Ue) {
                        var Ee = g.EndBroadcast([Ue, Ae]);
                        return g.BroadcastResult(s.ListOfNumber, [Ee])
                    }
                    return Ae;
                case "Sum":
                case "Product":
                    ce = a._index._symbol,
                    le = i.getSymbol(v, ce);
                    if (void 0 !== y[ce] || void 0 !== le && g.getInstruction(le).type !== u.LoadArg)
                        throw n.shadowedIndex(ce);
                    var xe, Ce = "Sum" === a.type;
                    (xe = Object.create(y))[ce] = Ce ? n.badSumBoundDependency(ce) : n.badProductBoundDependency(ce);
                    var Ne, Fe = C(Ne = A(c, xe, g, i.childScope(v), T), a.args[1]), Oe = C(Ne, a.args[2]);
                    if (!p.argIsTypeOrListOfType(g, Fe, s.Number)) {
                        var _e = p.extractScalarValueTypes(g, [Fe]);
                        throw Ce ? n.sumLowerBoundTypeError(_e) : n.productLowerBoundTypeError(_e)
                    }
                    if (!p.argIsTypeOrListOfType(g, Oe, s.Number)) {
                        _e = p.extractScalarValueTypes(g, [Oe]);
                        throw Ce ? n.sumUpperBoundTypeError(_e) : n.productUpperBoundTypeError(_e)
                    }
                    de = g.SyntheticNativeFunction("round", [Fe]),
                    pe = g.SyntheticNativeFunction("round", [Oe]),
                    ye = g.getInstruction(de),
                    fe = g.getInstruction(pe);
                    if (ye.type === u.Constant && ye.valueType === s.Number && !isFinite(o.asFloat(ye.value)))
                        throw Ce ? n.sumInfiniteBoundError() : n.productInfiniteBoundError();
                    if (fe.type === u.Constant && fe.valueType === s.Number && !isFinite(o.asFloat(fe.value)))
                        throw Ce ? n.sumInfiniteBoundError() : n.productInfiniteBoundError();
                    var De = g.SymbolicVar(s.Number, ce)
                      , Be = i.childScope(v);
                    i.setSymbol(Be, ce, De);
                    var Pe = Object.create(y);
                    Pe[ce] = S.FRAME_SENTINEL;
                    var Re, ke = C(A(c, Pe, g, Be, T), a.args[3]);
                    if (!L.dependsOnInstruction(g, ke, De)) {
                        var Me = g.Add([g.Subtract([pe, de]), g.Constant(1)]);
                        Me = g.SyntheticNativeFunction("max", [Me, g.Constant(0)]);
                        var Ve = Ce ? g.Multiply([ke, Me]) : g.Exponent([ke, Me]);
                        return g.Piecewise([g.Less([Me, g.Constant(1 / 0)]), Ve, g.Constant(NaN)])
                    }
                    if (!p.argIsTypeOrListOfType(g, ke, s.Number)) {
                        _e = p.extractScalarValueTypes(g, [ke]);
                        throw Ce ? n.sumArgumentTypeError(_e) : n.productArgumentTypeError(_e)
                    }
                    if (void 0 !== (Re = l.minListLengthIndex(g, [de, pe, ke])) && L.dependsOnInstruction(g, Re, De))
                        throw Ce ? n.variableLengthSumBodyDependsOnIndex(ce) : n.variableLengthProductBodyDependsOnIndex(ce);
                    var Ue;
                    be = de;
                    void 0 !== (Ue = void 0 !== Re ? g.BeginBroadcast([Re]) : void 0) && s.isList(ye.valueType) && (be = b.deferredOrInboundsAccess(g, de, Ue));
                    Te = pe;
                    null != Ue && s.isList(fe.valueType) && (Te = b.deferredOrInboundsAccess(g, pe, Ue));
                    var qe = g.Constant(Ce ? 0 : 1)
                      , He = (Le = g.BeginLoop({
                        type: Ce ? "sum" : "product",
                        indexSymbol: ce
                    }, [be, Te, qe]),
                    g.BlockVar(s.Number, [Le]))
                      , je = h.substitute(g, Le, De, ke)
                      , ze = g.getInstruction(je);
                    void 0 !== Ue && s.isList(ze.valueType) && (je = b.deferredOrInboundsAccess(g, je, Ue));
                    var We = Ce ? g.Add([He, je]) : g.Multiply([He, je])
                      , Ge = (we = g.EndLoop([Le, We]),
                    g.BlockVar(s.Number, [we]));
                    if (void 0 !== Ue) {
                        Ee = g.EndBroadcast([Ue, Ge]);
                        return g.BroadcastResult(s.ListOfNumber, [Ee])
                    }
                    return Ge;
                case "Derivative":
                    var Ke = C(e, t.Identifier(a._symbol));
                    if (!p.argIsTypeOrListOfType(g, Ke, s.Number))
                        throw n.derivativeVariableTypeError(a._symbol, p.extractScalarValueTypes(g, [Ke]));
                    var Je = void 0
                      , Qe = void 0;
                    if ((rt = g.getInstruction(Ke)).type === u.LoadArg && rt.valueType === s.Number)
                        Je = e,
                        Qe = Ke;
                    else {
                        var Xe = i.childScope(v);
                        Qe = g.SymbolicVar(rt.valueType),
                        i.setSymbol(Xe, a._symbol, Qe);
                        var Ye = Object.create(y);
                        Ye[a._symbol] = S.FRAME_SENTINEL,
                        Je = A(c, Ye, g, Xe, T)
                    }
                    for (var Ze = 1; "Derivative" === a.args[0].type && a.args[0]._symbol === a._symbol; )
                        Ze += 1,
                        a = a.args[0];
                    for (var $e = f.fuseBroadcast(g, C(Je, a.args[0])), et = 0; et < Ze; et++)
                        $e = m.takeDerivative(g, $e, Qe);
                    return Qe === Ke ? $e : h.substitute(g, Ke, Qe, $e);
                case "Prime":
                    var tt;
                    if (!y[(tt = a.args[0])._symbol])
                        throw n.functionNotDefined(tt._symbol);
                    var rt;
                    Ke = C(e, tt.args[0]),
                    Qe = void 0;
                    Qe = (rt = g.getInstruction(Ke)).type === u.LoadArg && rt.valueType === s.Number ? Ke : g.SymbolicVar(rt.valueType);
                    Q = void 0;
                    if ("logbase" === tt._symbol) {
                        if (2 !== tt.args.length)
                            throw n.primedFunctionArity();
                        Q = [Qe, C(e, tt.args[1])]
                    } else {
                        if (1 !== tt.args.length)
                            throw n.primedFunctionArity();
                        Q = [Qe]
                    }
                    $e = f.fuseBroadcast(g, P(e, tt._symbol, tt._errorSymbol, Q));
                    for (var nt = 0; nt < a.order; nt++)
                        $e = m.takeDerivative(g, $e, Qe);
                    return Qe === Ke ? $e : h.substitute(g, Ke, Qe, $e);
                case "Slider":
                    return e.chunk.Constant(a.getConcreteTree(c, y).asCompilerValue());
                case "Assignment":
                    return C(e, a._expression);
                case "FunctionDefinition":
                    for (var it = 0; it < a._argSymbols.length; it++) {
                        if (y[a._argSymbols[it]])
                            throw n.parameterAlreadyDefined(a._argSymbols[it]);
                        if (a._argSymbols[it] === a._symbol)
                            throw n.parameterAlreadyDefined(a._argSymbols[it])
                    }
                    return C(e, a._expression);
                default:
                    throw new Error("Programming error, unimplemented node type " + a.type)
                }
            }(A(g, v, T, E, a), a),
            !F(a, x)) {
                var R = T.getInstruction(c);
                R.type === u.BroadcastResult && R.isConstantBroadcast && (c = f.fuseBroadcast(T, c))
            }
            O(e, a, c = N(e, y, c))
        }
        return e.chunk.returnIndex = c,
        c
    }
    function N(e, t, r) {
        var n = e.chunk
          , i = e.scope;
        if (r <= t)
            return r;
        var a = n.getInstruction(r);
        return d.isConstant(a) ? (n.truncate(Math.max(t, i.maxIndex + 1)),
        T.copyInstruction(n, a)) : r
    }
    function F(e, t) {
        if (!t)
            return !1;
        if (!e.getScope || !t.getScope)
            return !1;
        var n = t.getScope().dependencies
          , i = e.getScope().dependencies;
        if (i.length === n.length)
            return !0;
        for (var a = 0, s = 0, o = i; s < o.length; s++) {
            var u = o[s];
            r[u] || (a += 1)
        }
        for (var c = 0, l = 0, d = n; l < d.length; l++) {
            u = d[l];
            r[u] || (c += 1)
        }
        return a === c
    }
    function O(e, t, r) {
        var n = e.frame
          , i = e.chunk
          , a = e.parentNode
          , s = i.getInstruction(r);
        if (d.isConstant(s) && !F(t, a)) {
            var o = S.getCacheKeys(n, t);
            o && (I.markCacheWrite(),
            t.__IRCache = {
                keys: o,
                instruction: s
            })
        }
    }
    function _(e, t) {
        if (!t.__IRCache)
            return !1;
        for (var r = 0, n = t.__IRCache.keys; r < n.length; r++) {
            var i = n[r]
              , a = i[0]
              , s = i[1];
            if (e[a] !== s)
                return !1
        }
        return !0
    }
    function D(e, t) {
        return [C(e, t[0]), C(e, t[1])]
    }
    function B(e, t) {
        for (var r = [], n = 0, i = t; n < i.length; n++) {
            var a = i[n];
            r.push(C(e, a))
        }
        return r
    }
    function P(e, a, m, h, b) {
        var T = e.policy
          , L = e.frame
          , I = e.chunk
          , w = e.scope
          , E = e.parentNode
          , x = i.getSymbol(w, a);
        if (void 0 !== x) {
            if (1 == h.length)
                return I.Multiply([x, h[0]]);
            throw I.getInstruction(x).type === u.LoadArg ? n.functionNotDefined(m) : I.getInstruction(x).valueType === s.Distribution ? n.distributionAsFunction(m) : n.variableAsFunction(m)
        }
        var N = L[a];
        if (N && N.isError)
            throw N;
        if (void 0 === N || !N.isFunction) {
            if (r[a] && r[a].isFunction) {
                if ("logbase" === a && L.ln && L.log)
                    throw n.logbaseUnsupported();
                throw n.functionUnsupported(m)
            }
            if (N) {
                var F = C(e, N);
                if (I.getInstruction(F).valueType === s.Distribution)
                    throw n.distributionAsFunction(m)
            }
            if (1 == h.length)
                return I.Multiply([C(e, t.Identifier(a)), h[0]]);
            throw N ? n.variableAsFunction(m) : new Error("Programming Error: reached undefined symbol " + a)
        }
        if ("FunctionDefinition" === N.type) {
            if (b && void 0 !== b.dotLHSIndex)
                throw n.illegalDotCall(m);
            if (h.length !== N._argSymbols.length)
                throw n.wrongArity(m, N._argSymbols.length, h.length);
            for (var O = i.childScope(w), _ = Object.create(L), D = 0; D < N._argSymbols.length; D++)
                i.setSymbol(O, N._argSymbols[D], h[D]),
                _[N._argSymbols[D]] = S.FRAME_SENTINEL;
            return C(A(T, _, I, O, E), N._expression)
        }
        if (c.CompilerFunctionTable.hasOwnProperty(a))
            return function(e, t, r, i, a) {
                var m = e.chunk
                  , h = !(!a || void 0 === a.dotLHSIndex)
                  , b = c.CompilerFunctionTable[t];
                if (b.fallthroughUnlessDistribution && (0 === i.length || m.getInstruction(i[0]).valueType === s.EmptyList || !s.isTypeOrListOfType(m.getInstruction(i[0]).valueType, s.Distribution)))
                    return k(e, t, r, i, a);
                var T = b.minArity
                  , L = b.maxArity
                  , S = b.allowDotCall;
                if (a && void 0 !== a.dotLHSIndex) {
                    if (!S)
                        throw n.illegalDotCall(r);
                    R(m, a.dotLHSIndex, "." + r)
                }
                var I, w = i.length;
                if (w < T)
                    throw function(e, t, r, i, a) {
                        var s = a.isDotCall;
                        s && (r -= 1,
                        i -= 1,
                        t = "." + t);
                        var o = c.CompilerFunctionTable[e];
                        o.isSeeded && (r -= 1,
                        i -= 1);
                        var u = void 0;
                        s && o.dotMinArityExampleArgs ? u = t + o.dotMinArityExampleArgs : o.minArityExampleArgs && (u = t + o.minArityExampleArgs);
                        switch (e) {
                        case "pdf":
                            return s ? n.wrongArity(t, r, i, u) : n.pdfWrongArity();
                        case "cdf":
                            return s ? n.wrongArity(t, r, i, u) : n.cdfRequiresArguments();
                        case "tdist":
                            return n.tdistWrongArity();
                        case "random":
                            return n.randomArity();
                        case "round":
                        case "midpoint":
                        case "normaldist":
                        case "poissondist":
                        case "binomialdist":
                        case "uniformdist":
                        case "mean":
                        case "median":
                        case "stdev":
                        case "var":
                        case "quantile":
                        case "sort":
                        case "shuffle":
                        case "join":
                        case "unique":
                        case "polygon":
                            return n.wrongArity(t, r, i, u);
                        case "histogram":
                        case "dotplot":
                        case "boxplot":
                        case "ttest":
                        case "ittest":
                        case "stats":
                        case "det":
                        case "inv":
                        case "transpose":
                        case "rref":
                        case "trace":
                            throw n.parseError();
                        default:
                            throw new Error("Unexpected compiler function " + e)
                        }
                    }(t, r, T, w, {
                        isDotCall: h
                    });
                if (w > L)
                    throw function(e, t, r, i, a) {
                        var s = a.isDotCall;
                        s && (r -= 1,
                        i -= 1,
                        t = "." + t);
                        var o = c.CompilerFunctionTable[e];
                        o.isSeeded && (r -= 1,
                        i -= 1);
                        var u = void 0;
                        s && o.dotMaxArityExampleArgs ? u = t + o.dotMaxArityExampleArgs : o.maxArityExampleArgs && (u = t + o.maxArityExampleArgs);
                        switch (e) {
                        case "pdf":
                            return s ? n.wrongArity(t, r, i, u) : n.pdfWrongArity();
                        case "cdf":
                            return s ? n.wrongArity(t, r, i, u) : n.cdfTooManyArguments();
                        case "tdist":
                            return n.tdistWrongArity();
                        case "random":
                            return n.randomArity();
                        case "round":
                        case "midpoint":
                        case "normaldist":
                        case "poissondist":
                        case "binomialdist":
                        case "uniformdist":
                        case "mean":
                        case "median":
                        case "stdev":
                        case "var":
                        case "quantile":
                        case "sort":
                        case "shuffle":
                        case "join":
                        case "unique":
                        case "polygon":
                            return n.wrongArity(t, r, i, u);
                        case "histogram":
                        case "dotplot":
                        case "boxplot":
                        case "ttest":
                        case "ittest":
                        case "stats":
                        case "det":
                        case "inv":
                        case "transpose":
                        case "rref":
                        case "trace":
                            throw n.parseError();
                        default:
                            throw new Error("Unexpected compiler function " + e)
                        }
                    }(t, r, L, w, {
                        isDotCall: h
                    });
                if ("cdf" === t)
                    I = 2 === w ? [i[0], m.Constant(-1 / 0), i[1]] : i;
                else if ("random" === t)
                    if (1 === w || w < 4 && !s.isList(m.getInstruction(i[1]).valueType) && m.getInstruction(i[1]).valueType !== s.Distribution) {
                        var A = m.Distribution("uniformdist", [m.Constant(0), m.Constant(1)]);
                        I = [i[0], A].concat(i.slice(1))
                    } else
                        I = i;
                else
                    I = M(m, i, b);
                switch (t) {
                case "round":
                    if (1 === I.length)
                        return m.SyntheticNativeFunction("round", I);
                    if (!p.argIsTypeOrListOfType(m, I[0], s.Number) || !p.argIsTypeOrListOfType(m, I[1], s.Number))
                        throw n.functionTypeError(r, p.extractScalarValueTypes(m, I));
                    var E = m.SyntheticNativeFunction("round", [I[1]])
                      , x = m.RawExponent([m.Constant(10), E]);
                    return m.Divide([m.SyntheticNativeFunction("round", [m.Multiply([I[0], x])]), x]);
                case "midpoint":
                    if (!p.argIsTypeOrListOfType(m, I[0], s.Point) || !p.argIsTypeOrListOfType(m, I[1], s.Point))
                        throw n.functionTypeError(r, p.extractScalarValueTypes(m, I));
                    var C = m.Constant(o.maybeRational(1, 2));
                    return m.Multiply([C, m.Add(I)]);
                case "normaldist":
                case "tdist":
                case "poissondist":
                case "binomialdist":
                case "uniformdist":
                    for (var N = 0, F = I; N < F.length; N++) {
                        var O = F[N];
                        if (!p.argIsTypeOrListOfType(m, O, s.Number))
                            throw n.functionTypeError(r, p.extractScalarValueTypes(m, i))
                    }
                    return m.Distribution(t, I);
                case "pdf":
                case "cdf":
                case "mean":
                case "median":
                case "stdev":
                case "var":
                case "quantile":
                    var _ = I[0]
                      , D = m.getInstruction(_);
                    if (!s.isTypeOrListOfType(D.valueType, s.Distribution))
                        throw n.functionTypeError(r, p.extractScalarValueTypes(m, i));
                    for (var B = I.slice(1), P = 0, V = B; P < V.length; P++) {
                        O = V[P];
                        if (!s.isTypeOrListOfType(m.getInstruction(O).valueType, s.Number))
                            throw n.functionTypeError(r, p.extractScalarValueTypes(m, i))
                    }
                    if (s.isList(D.valueType)) {
                        for (var U = [], H = 1 / 0, j = 0, z = I; j < z.length; j++) {
                            O = z[j];
                            var W = f.fuseBroadcast(m, O);
                            U.push(W);
                            var G = m.getInstruction(W);
                            if (s.isList(G.valueType)) {
                                if (void 0 === (se = l.getConstantListLength(m, W)))
                                    throw n.variableLengthDistributionList(g.findDependencySymbols(m, W));
                                H = Math.min(H, se)
                            }
                        }
                        for (var K = [], J = 0; J < H; J++) {
                            var Q = v.elementAt(m, U[0], J)
                              , X = m.getInstruction(Q);
                            if (X.type !== u.Distribution)
                                throw n.parseError();
                            for (var Y = [], Z = 0, $ = U.slice(1); Z < $.length; Z++) {
                                O = $[Z];
                                s.isList(m.getInstruction(O).valueType) ? Y.push(v.elementAt(m, O, J)) : Y.push(O)
                            }
                            K.push(y.DistributionTable[X.symbol][t](m, Q, Y))
                        }
                        return m.List(K)
                    }
                    if (D.type !== u.Distribution)
                        throw n.parseError();
                    return y.DistributionTable[D.symbol][t](m, _, B);
                case "random":
                    var ee = I[0]
                      , te = (_ = I[1],
                    m.getInstruction(I[0]));
                    D = m.getInstruction(_);
                    if (te.valueType !== s.SeedType)
                        throw n.parseError();
                    if (D.valueType === s.ListOfDistribution)
                        throw n.randomFromBroadcastDistribution();
                    var re = void 0;
                    if (s.isList(D.valueType))
                        re = y.randomSampleFromList;
                    else {
                        if (D.valueType !== s.Distribution)
                            throw n.randomArity();
                        if (D.type !== u.Distribution)
                            throw n.parseError();
                        re = y.DistributionTable[D.symbol][t]
                    }
                    if (I.length > 2) {
                        var ne = I[2];
                        if (m.getInstruction(ne).valueType !== s.Number)
                            throw n.randomArity();
                        if (4 === I.length) {
                            var ie = m.getInstruction(I[3]);
                            if (ie.valueType !== s.Number)
                                throw n.randomArity();
                            if (!d.isConstant(ie))
                                throw n.variableSeed(g.findDependencySymbols(m, I[3]));
                            ee = m.ExtendSeed("us", [ee, I[3]])
                        }
                        var ae = m.Constant(1)
                          , se = m.SyntheticNativeFunction("round", [m.SyntheticNativeFunction("validateSampleCount", [ne])])
                          , oe = m.BeginBroadcast([se]);
                        ee = m.ExtendSeed("lc", [ee, m.Subtract([oe, ae])]);
                        var ue = re(m, _, [ee])
                          , ce = m.EndBroadcast([oe, ue]);
                        return m.BroadcastResult(s.listType(m.getInstruction(ue).valueType), [ce])
                    }
                    return re(m, _, [ee]);
                case "shuffle":
                    ee = I[0];
                    var le = I[1]
                      , de = I[2];
                    if (!s.isList(m.getInstruction(le).valueType) || void 0 !== de && m.getInstruction(de).valueType !== s.Number)
                        throw n.functionTypeError(r, p.extractValueTypes(m, i.slice(1)));
                    if (void 0 !== de) {
                        if (!d.isConstant(m.getInstruction(de)))
                            throw n.variableSeed(g.findDependencySymbols(m, de));
                        ee = m.ExtendSeed("us", [ee, de])
                    }
                    return m.SyntheticNativeFunction("shuffle", [ee, le]);
                case "sort":
                    var pe = 2 === I.length ? I[1] : I[0]
                      , ye = m.getInstruction(pe);
                    if (!s.isList(m.getInstruction(I[0]).valueType) || ye.valueType !== s.ListOfNumber && ye.valueType !== s.EmptyList)
                        throw n.functionTypeError(r, p.extractValueTypes(m, i));
                    if (0 === l.getConstantListLength(m, pe))
                        return pe;
                    var fe = m.SyntheticNativeFunction("min", [l.listLengthIndex(m, I[0]), l.listLengthIndex(m, pe)]);
                    return pe = m.ListAccess([pe, q(e, m.List([m.Constant(1)]), m.List([fe]), {
                        stepMustBePositive: !0
                    })]),
                    m.SyntheticNativeFunction("elementsAt", [I[0], m.SyntheticNativeFunction("sortPerm", [pe])]);
                case "join":
                    for (var ge = [], ve = !0, me = 0, he = I; me < he.length; me++) {
                        O = he[me];
                        var be = m.getInstruction(O);
                        d.isConstantOrConstantBroadcast(be) || (ve = !1);
                        var Te = be.valueType;
                        if (Te !== s.EmptyList)
                            if (s.isList(Te))
                                ge.push({
                                    isList: !0,
                                    index: O,
                                    elementType: s.elementType(Te)
                                });
                            else {
                                if (!s.hasListType(Te))
                                    throw n.functionTypeError(r, p.extractValueTypes(m, i));
                                ge.push({
                                    isList: !1,
                                    index: O,
                                    elementType: Te
                                })
                            }
                    }
                    if (0 === ge.length)
                        return m.ConstantOfType(s.EmptyList, []);
                    for (var Le = 0, Se = ge; Le < Se.length; Le++) {
                        if ((Ee = Se[Le]).elementType !== ge[0].elementType)
                            throw n.functionTypeError(r, p.extractValueTypes(m, i))
                    }
                    if (ve) {
                        for (var Ie = [], we = 0, Ae = ge; we < Ae.length; we++) {
                            var Ee = Ae[we]
                              , xe = m.getInstruction(f.fuseBroadcast(m, Ee.index));
                            d.assertConstant(xe),
                            Ee.isList ? Ie.push.apply(Ie, xe.value) : Ie.push(xe.value)
                        }
                        return m.ConstantOfType(s.listType(ge[0].elementType), Ie)
                    }
                    for (var Ce = m.Constant(0), Ne = m.Constant(1), Fe = {}, Oe = 0, _e = ge; Oe < _e.length; Oe++) {
                        (Ee = _e[Oe]).isList && void 0 === Fe[Ee.index] && (Fe[Ee.index] = l.listLengthIndex(m, Ee.index))
                    }
                    for (var De = m.SyntheticNativeFunction("total", ge.map(function(e) {
                        return e.isList ? Fe[e.index] : Ne
                    })), Be = (oe = m.BeginBroadcast([De]),
                    Ce), Pe = [], Re = [], ke = 0, Me = ge; ke < Me.length; ke++) {
                        var Ve = (Ee = Me[ke]).isList ? m.ListAccess([Ee.index, m.Subtract([oe, Be])]) : Ee.index;
                        if (Re.push(Ve),
                        Ee !== ge[ge.length - 1]) {
                            se = Ee.isList ? Fe[Ee.index] : Ne;
                            Be = m.Add([Be, se]),
                            Pe.push(m.LessEqual([oe, Be]))
                        }
                    }
                    var Ue = Re[Re.length - 1];
                    for (J = Re.length - 2; J >= 0; J--)
                        Ue = m.Piecewise([Pe[J], Re[J], Ue]);
                    ce = m.EndBroadcast([oe, Ue]);
                    return m.BroadcastResult(s.listType(ge[0].elementType), [ce]);
                case "unique":
                    var qe = I[0]
                      , He = m.getInstruction(qe);
                    if (!s.isList(He.valueType) || He.valueType === s.ListOfDistribution)
                        throw n.functionTypeError("unique", [s.prettyPrint(He.valueType)]);
                    return m.SyntheticNativeFunction("elementsAt", [qe, m.SyntheticNativeFunction("uniquePerm", [qe])]);
                case "polygon":
                    var je = void 0
                      , ze = I.map(function(e) {
                        return m.getInstruction(e)
                    });
                    if (1 === ze.length) {
                        if ((He = ze[0]).valueType !== s.ListOfPoint)
                            throw n.polygonListTypeError([s.prettyPrint(He.valueType)]);
                        je = I[0]
                    } else if (2 === ze.length && s.isTypeOrListOfType(ze[0].valueType, s.Number) && s.isTypeOrListOfType(ze[1].valueType, s.Number)) {
                        if (ze[0].valueType === s.Number && ze[1].valueType === s.Number)
                            throw n.polygonTwoNumbersError();
                        je = m.OrderedPair(I)
                    } else {
                        if (!ze.every(function(e) {
                            return e.valueType === s.Point
                        }))
                            throw n.polygonPointArgsError();
                        je = m.List(I)
                    }
                    return m.SyntheticNativeFunction("polygon", [je]);
                case "histogram":
                case "dotplot":
                case "boxplot":
                case "ttest":
                case "ittest":
                case "stats":
                case "det":
                case "inv":
                case "transpose":
                case "rref":
                case "trace":
                    throw n.unexpectedSymbol(r);
                default:
                    throw new Error("Programming Error: unexpected compiler function " + t)
                }
            }(e, a, m, h, b);
        if (c.BuiltInTable.hasOwnProperty(a))
            return k(e, a, m, h, b);
        throw n.functionUnsupported(m)
    }
    function R(e, t, r) {
        var i = e.getInstruction(t).valueType;
        if (!s.isList(i) && i !== s.Distribution)
            throw n.dotLHSTypeError(r, s.prettyPrint(i))
    }
    function k(e, r, i, a, s) {
        var o = e.chunk
          , u = c.BuiltInTable[r]
          , l = !(!s || void 0 === s.dotLHSIndex)
          , d = a.length
          , p = u.minArity
          , y = u.maxArity
          , f = u.allowDotCall;
        if (s && void 0 !== s.dotLHSIndex) {
            if (!f)
                throw n.illegalDotCall(i);
            R(o, s.dotLHSIndex, "." + i)
        }
        if ("logbase" === r && 2 !== d)
            throw n.wrongArity(i, 1, d - 1);
        if (d > y)
            throw l && (p -= 1,
            y -= 1,
            d -= 1,
            i = "." + i),
            "doubleReducer" === u.tag ? n.wrongDoubleReducerArity(i) : "parameterizedReducer" === u.tag ? n.wrongParameterizedReducerArity(i) : "color" === u.tag ? n.colorArity(i) : n.wrongArity(i, y, d);
        if (d < p)
            throw l && (p -= 1,
            y -= 1,
            d -= 1,
            i = "." + i),
            "reducer" === u.tag && 0 === d ? n.zeroArgReducer(i) : "doubleReducer" === u.tag ? n.wrongDoubleReducerArity(i) : "parameterizedReducer" === u.tag ? n.wrongParameterizedReducerArity(i) : "color" === u.tag ? n.colorArity(i) : n.wrongArity(i, p, d);
        var g = M(o, a, u)
          , v = {
            errorSymbol: i,
            providedArity: d,
            isDotCall: l
        };
        switch (u.tag) {
        case "default":
        case "reducer":
        case "doubleReducer":
        case "parameterizedReducer":
        case "color":
        case "never-broadcast":
            return o.NativeFunction(r, v, g);
        case "trig":
            var m = C(e, t.Identifier("trigAngleMultiplier"))
              , h = o.Multiply([g[0], m]);
            return o.NativeFunction(r, v, [h]);
        case "inverseTrig":
            m = C(e, t.Identifier("trigAngleMultiplier"));
            var b = o.NativeFunction(r, v, g);
            return o.Divide([b, m]);
        default:
            var T = u.tag;
            throw new Error("Programming Error: unexpected tag " + T)
        }
    }
    function M(e, t, r) {
        var n = r.minArity
          , i = r.defaultArguments;
        if (!i)
            return t;
        if (!(t.length - n < i.length))
            return t;
        for (var a = t.slice(); a.length - n < i.length; )
            a.push(e.copyInstruction(i[a.length - n]));
        return a
    }
    function V(e, t) {
        for (var r = e.chunk, i = [], a = [], s = 0, o = t; s < o.length; s++) {
            var c = o[s]
              , l = r.getInstruction(c);
            switch (l.type) {
            case u.Action:
                Array.prototype.push.apply(i, l.symbols),
                Array.prototype.push.apply(a, l.args);
                break;
            case u.Constant:
                var d = l.value.updateRules;
                for (var p in d)
                    i.push(p),
                    a.push(r.ConstantOfType(d[p].valueType, d[p].value));
                break;
            default:
                var y = g.findDependencySymbols(r, c);
                throw y.length > 0 ? n.actionMergeFreeVariable(y) : n.parseError()
            }
        }
        return r.Action(i, a)
    }
    function U(e, t) {
        var r = e.frame[t];
        return e.policy.assignmentForbidden(t) ? n.updateRuleIllegalLHS(t) : r === S.FRAME_SENTINEL ? n.updateRuleLocalLHS(t) : r && "FunctionDefinition" === r.type ? n.updateRuleFunctionLHS(t) : n.updateRuleUndefinedLHS(t).allowExport()
    }
    function q(e, t, r, i) {
        var a, o = i.stepMustBePositive, u = e.chunk, c = u.getInstruction(t), d = u.getInstruction(r), p = l.assertConstantListLength(u, t, "Programming error: expected range start list to have constant length."), y = l.assertConstantListLength(u, r, "Programming error: expected range start list to have constant length.");
        if (c.valueType !== s.ListOfNumber || d.valueType !== s.ListOfNumber)
            throw n.nonArithmeticRange();
        var f = u.Constant(1)
          , g = u.Constant(0)
          , v = u.ListAccess([t, f])
          , m = u.ListAccess([t, u.Constant(2)])
          , h = u.ListAccess([r, u.Constant(y)])
          , b = u.Subtract([h, v])
          , T = p > 1 ? u.Subtract([m, v]) : u.Piecewise([u.GreaterEqual([b, g]), f, u.Constant(-1)])
          , L = u.Add([f, u.SyntheticNativeFunction("round", [u.Divide([b, T])])])
          , S = u.SyntheticNativeFunction("validateRangeLength", [t, r, T, L]);
        o && (S = u.Piecewise([u.GreaterEqual([T, g]), S, g]));
        var I = u.BeginBroadcast([S])
          , w = u.Add([v, u.Multiply([T, u.Subtract([I, f])])])
          , A = u.EndBroadcast([I, w]);
        return u.addComments(((a = {})[v] = "start",
        a[m] = "second",
        a[h] = "last",
        a[L] = "proposedLength",
        a[T] = "step",
        a[w] = "body",
        a)),
        u.BroadcastResult(s.listType(u.getInstruction(w).valueType), [A])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isCacheValid = e.maybeCacheIR = e.hasSameUserDependenciesAsParent = e.maybeDropIntermediates = e.addToIR = e.checkForUndefinedUpdateSymbols = e.buildIR = e.buildIRContext = e.Ctx = void 0,
    e.Ctx = A,
    e.buildIRContext = E,
    e.buildIR = function(e, t) {
        var r = e.policy
          , n = e.frame
          , i = e.argNames
          , a = e.argTypes
          , o = S.analyzeDependencies(n, t)
          , u = o.freeDependencies
          , c = o.updateSymbols;
        if (i || (i = u),
        !a) {
            a = [];
            for (var l = 0; l < i.length; l++)
                a.push(s.Number)
        }
        var d = E({
            policy: r,
            frame: n,
            argNames: i,
            argTypes: a
        });
        return C(d, t),
        e.wrapInList && !s.isList(d.chunk.getReturnType()) && d.chunk.List([d.chunk.returnIndex]),
        d.chunk.close(),
        x(d, t, c),
        d.chunk
    }
    ,
    e.checkForUndefinedUpdateSymbols = x,
    e.addToIR = C,
    e.maybeDropIntermediates = N,
    e.hasSameUserDependenciesAsParent = F,
    e.maybeCacheIR = O,
    e.isCacheValid = _
});
define('core/math/features/buildIRExpression', ['require', 'core/math/ir/build-ir', 'core/math/parsenode/base', 'core/math/parsenode/irexpression', 'core/math/errormsg', 'core/math/parsenode/error'], function(require) {
    "use strict";
    var r = require("core/math/ir/build-ir").buildIR
      , e = require("core/math/parsenode/base")
      , t = require("core/math/parsenode/irexpression")
      , o = require("core/math/errormsg")
      , i = require("core/math/parsenode/error");
    e.prototype.buildIRExpression = function(i, n, s) {
        try {
            var a = r({
                policy: i,
                frame: n,
                wrapInList: s && s.wrapInList
            }, this);
            return new t(a)
        } catch (r) {
            return r instanceof e ? r : o.parseError()
        }
    }
    ,
    i.prototype.buildIRExpression = function() {
        return this
    }
});
define('core/math/features/typeCheck', ['require', 'parsenodes', 'core/math/types', 'core/math/errormsg'], function(require) {
    "use strict";
    var t = require("parsenodes")
      , e = require("core/math/types")
      , i = require("core/math/errormsg")
      , o = e.isOneOf;
    function s(t) {
        for (var i = [], o = 0; o < t.length; o++)
            i.push(e.prettyPrint(t[o].valueType));
        return i
    }
    function r(t, s) {
        var r = s.length
          , h = s[0];
        if (r < 2)
            throw i.methodRequiresList(this._symbol);
        if (!o(h.valueType, [e.ListOfNumber, e.EmptyList]))
            throw i.methodRequiresList(this._symbol);
        if (r > 2)
            throw i.tooManyArguments(this._symbol, 2)
    }
    var h = {
        Object3D: function(t, e) {
            if (e.length < 3)
                throw i.wrongArity(this._symbol, 3, e.length)
        },
        Histogram: r,
        DotPlot: r,
        BoxPlot: function(t, s) {
            var r = s.length
              , h = s[0];
            if (0 === r)
                throw i.methodRequiresList(this._symbol);
            if (!o(h.valueType, [e.ListOfNumber, e.EmptyList]))
                throw i.methodRequiresList(this._symbol);
            if (r > 1)
                throw i.methodRequiresList(this._symbol)
        },
        TTest: function(t, o) {
            var r = this._symbol;
            if (0 === o.length)
                throw i.methodRequiresList(r);
            if (o[0].valueType === e.EmptyList)
                throw i.ttestListTooShort(r);
            if (o[0].valueType !== e.ListOfNumber)
                throw i.methodRequiresList(r);
            if (o.length > 2)
                throw i.tooManyArguments(r, 2);
            if (o[0].length < 2)
                throw i.ttestListTooShort(r);
            if (o[1] && o[1].valueType !== e.Number)
                throw i.functionTypeError(r, s(o))
        },
        IndependentTTest: function(t, o) {
            var r = this._symbol;
            if (2 !== o.length)
                throw i.wrongDoubleReducerArity(r);
            if (!e.isList(o[0].valueType) || !e.isList(o[1].valueType))
                throw i.nonListDoubleReducer(r);
            if (o[0].valueType === e.EmptyList || o[1].valueType === e.EmptyList)
                throw i.ttestListTooShort("ittest");
            if (o[0].valueType !== e.ListOfNumber || o[1].valueType !== e.ListOfNumber)
                throw i.functionTypeError(r, s(o));
            if (o[0].length < 2 || o[1].length < 2)
                throw i.ttestListTooShort("ittest")
        },
        Stats: function(t, o) {
            var r = o.length
              , h = o[0];
            if (0 === r)
                throw i.methodRequiresList(this._symbol);
            if (h.valueType === e.EmptyList)
                throw i.functionTypeError(this._symbol, s(o));
            if (h.valueType !== e.ListOfNumber)
                throw i.methodRequiresList(this._symbol);
            if (r > 1)
                throw i.methodRequiresList(this._symbol)
        }
    };
    for (var n in h)
        t[n].prototype.typeCheck = h[n]
});
define('core/math/features/repr', ['require', 'parsenodes'], function(require) {
    "use strict";
    var r = require("parsenodes")
      , t = function(r, t, e) {
        e = e || 0;
        var i = Array(e + 1).join("  ")
          , n = i + "  ";
        return "[\n" + n + r.map(function(r) {
            return r.repr(t, e + 1)
        }).join(",\n" + n) + "\n" + i + "]"
    }
      , e = function(r, t) {
        return "" + (t = t || "") + r
    };
    r.Expression.prototype.repr = function(r, i) {
        return e(this.type, r) + "(" + t(this.args, r, i) + ")"
    }
    ,
    r.IRExpression.prototype.repr = function(r, t) {
        t = t || 0;
        var i = Array(t + 1).join("  ")
          , n = i + "  "
          , s = this._chunk.print().split("\n");
        return s.pop(),
        e(this.type, r) + "(`\n" + n + s.join("\n" + n) + "\n" + i + "`)"
    }
    ,
    r.DoubleInequality.prototype.repr = function(r, t) {
        t = t || 0;
        var i = Array(t + 1).join("  ")
          , n = i + "  ";
        return e(this.type, r) + "([\n" + n + this.args[0].repr(r, t + 1) + ",\n" + n + "'" + this.args[1] + "',\n" + n + this.args[2].repr(r, t + 1) + ",\n" + n + "'" + this.args[3] + "',\n" + n + this.args[4].repr(r, t + 1) + "\n" + i + "])"
    }
    ,
    r.Identifier.prototype.repr = function(r) {
        return e(this.type, r) + "('" + this._symbol + "')"
    }
    ,
    r.Constant.prototype.repr = function(r) {
        return e(this.type, r) + "(" + this.asValue() + ")"
    }
    ,
    r.ExtendSeed.prototype.repr = function(r, i) {
        return e(this.type, r) + "('" + this.tag + "', " + t(this.args, r, i) + ")"
    }
    ,
    r.Seed.prototype.repr = function(r) {
        return e(this.type, r) + "(" + this.asValue() + ")"
    }
    ,
    r.FunctionCall.prototype.repr = function(r, i) {
        return e(this.type, r) + "('" + this._symbol + "', " + t(this.args, r, i) + ")"
    }
    ,
    r.Assignment.prototype.repr = function(t, i) {
        return e(this.type, t) + "(" + r.Identifier(this._symbol).repr(t, i) + ", " + this._expression.repr(t, i) + ")"
    }
    ,
    r.Regression.prototype.repr = r.Equation.prototype.repr = function(r, t) {
        return e(this.type, r) + "(" + this._lhs.repr(r, t) + ", " + this._rhs.repr(r, t) + ")"
    }
    ,
    r.FunctionDefinition.prototype.repr = function(i, n) {
        return e(this.type, i) + "(" + r.Identifier(this._symbol).repr(i, n) + ", " + t(this._argSymbols.map(function(t) {
            return r.Identifier(t)
        }), i, n) + ", " + this._expression.repr(i, n) + ")"
    }
    ,
    r.Error.prototype.repr = function(r, t) {
        return e(this.type, r) + "('" + this._msg + "')"
    }
    ,
    r.Derivative.prototype.repr = function(r, i) {
        return e(this.type, r) + "('" + this._symbol + "', " + t(this.args, r, i) + ")"
    }
    ,
    r.SolvedEquation.prototype.repr = function(r, t) {
        return e(this.type, r) + "('" + this._symbol + "', " + this._expression.repr(r, t) + ")"
    }
    ,
    r.OptimizedRegression.prototype.repr = function(r, t) {
        return e(this.type, r) + "(" + JSON.stringify(this.parameters) + ", " + JSON.stringify(this.residuals) + ", " + JSON.stringify(this.statistics) + ", " + this.model.repr(r, t + 1) + ", " + JSON.stringify({
            isModelValid: this.isModelValid,
            residualVariable: this.residualVariable,
            residualSuggestionId: this.residualSuggestionId,
            shouldSuggestLogMode: this.shouldSuggestLogMode,
            isLinear: this.isLinear,
            parameterWarning: this.parameterWarning
        }) + ")"
    }
    ,
    r.Table.prototype.repr = function(r, i) {
        return e(this.type, r) + "(" + t(this.columns, r, i) + ")"
    }
    ,
    r.TableColumn.prototype.repr = function(r, i) {
        return e(this.type, r) + "(" + this.header.repr(r, i) + ", " + this.length + ", " + t(this.values, r, i) + ")"
    }
    ,
    r.Image.prototype.repr = function(r, t) {
        var i = Array(t + 1).join("  ")
          , n = i + "  ";
        return e(this.type, r) + "({\n" + n + "center: " + this.center.repr(r, t + 1) + ",\n" + n + "radianAngle: " + this.radianAngle.repr(r, t + 1) + ",\n" + n + "width: " + this.width.repr(r, t + 1) + ",\n" + n + "height: " + this.height.repr(r, t + 1) + "},\n" + n + "opacity: " + this.opacity.repr(r, t + 1) + ",\n" + n + JSON.stringify(this.moveStrategy) + "\n" + i + "})"
    }
    ,
    r.Ticker.prototype.repr = function(r, t) {
        var i = Array(t + 1).join("  ")
          , n = i + "  ";
        return e(this.type, r) + "({\n" + n + "handler: " + this.handler.repr(r, t + 1) + ",\n" + n + "minStep: " + this.minStep.repr(r, t + 1) + "\n" + i + "})"
    }
    ,
    r.Slider.prototype.repr = function(r, t) {
        var i = Array(t + 1).join("  ")
          , n = i + "  ";
        return e(this.type, r) + "({\n" + n + "sliderAssignment: " + this.sliderAssignment.repr(r, t + 1) + ",\n" + n + "sliderMin: " + (this.sliderMin && this.sliderMin.repr(r, t + 1)) + ",\n" + n + "sliderMax: " + (this.sliderMax && this.sliderMax.repr(r, t + 1)) + ",\n" + n + "sliderStep: " + (this.sliderStep && this.sliderStep.repr(r, t + 1)) + "},\n" + i + ")"
    }
});
define('core/math/features/substitute', ['require', 'parsenodes'], function(require) {
    "use strict";
    var t = require("parsenodes")
      , i = function(t, i) {
        return t.map(function(t) {
            return t.substitute(i)
        })
    }
      , r = {
        Identifier: function(t) {
            return t[this._symbol] ? t[this._symbol] : this
        },
        FunctionCall: function(r) {
            var n = r[this._symbol];
            if (n) {
                if ("Identifier" === n.type)
                    return t.FunctionCall(n, i(this.args, r));
                if ("Constant" === n.type)
                    return t.Multiply([n, 1 === this.args.length ? this.args[0].substitute(r) : t.Constant(NaN)])
            }
            return t.Expression.prototype.substitute.call(this, r)
        },
        Constant: function(t) {
            return this
        },
        Expression: function(t) {
            return this.copyWithArgs(i(this.args, t))
        },
        Derivative: function(r) {
            var n = r[this._symbol];
            if (n) {
                if ("Identifier" === n.type)
                    return t.Derivative(n, i(this.args, r));
                throw new Error("Cannot substitute for a derivative variable with a non-Identifier")
            }
            return t.Derivative(this._symbol, i(this.args, r))
        }
    };
    for (var n in r)
        t[n].prototype.substitute = r[n]
});
define('core/math/features/simpleFunctionExpression', ['require', 'parsenodes'], function(require) {
    "use strict";
    var n = require("parsenodes");
    n.Expression.prototype.simpleFunctionExpression = function() {
        return this
    }
    ,
    n.Assignment.prototype.simpleFunctionExpression = function() {
        return this._expression
    }
    ,
    n.FunctionDefinition.prototype.simpleFunctionExpression = function() {
        return this._expression
    }
    ,
    n.Equation.prototype.simpleFunctionExpression = function() {
        return this.asComparator().simpleFunctionExpression()
    }
});
define('core/math/distribution-spec', ["require", "exports", "core/math/baseparser", "tslib"], function(require, t, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getFunctionSpecFromTree = t.parseToplevelFunction = t.DistributionParameterDefaultsMap = void 0,
    t.DistributionParameterDefaultsMap = {
        normaldist: {
            type: "distribution",
            symbol: "normaldist",
            params: ["mean", "stdev"],
            defaults: ["0", "1"],
            discrete: !1
        },
        tdist: {
            type: "distribution",
            symbol: "tdist",
            params: ["dof"],
            defaults: [void 0],
            discrete: !1
        },
        binomialdist: {
            type: "distribution",
            symbol: "binomialdist",
            params: ["trials", "probsuccess"],
            defaults: [void 0, "0.5"],
            discrete: !0
        },
        poissondist: {
            type: "distribution",
            symbol: "poissondist",
            params: ["mean"],
            defaults: [void 0],
            discrete: !0
        },
        uniformdist: {
            type: "distribution",
            symbol: "uniformdist",
            params: ["min", "max"],
            defaults: ["0", "1"],
            discrete: !1
        }
    };
    var e = {
        Histogram: {
            type: "visualization",
            symbol: "histogram",
            params: ["data", "binwidth"],
            defaults: [void 0, "1"]
        },
        DotPlot: {
            type: "visualization",
            symbol: "dotplot",
            params: ["data", "binwidth"],
            defaults: [void 0, "1"]
        },
        BoxPlot: {
            type: "visualization",
            symbol: "boxplot",
            params: ["data"],
            defaults: [void 0]
        }
    };
    function a(i) {
        var a = i
          , o = e[a.type];
        if (!o)
            switch ("Assignment" === a.type && (a = a._expression),
            a.type) {
            case "FunctionCall":
                o = t.DistributionParameterDefaultsMap[a._symbol];
                break;
            default:
                return
            }
        if (o) {
            for (var r = {}, n = o.params, d = a.args, l = 0; l < n.length; l++) {
                var u = d[l];
                r[n[l]] = u && u.getInputString() || ""
            }
            return s.__assign(s.__assign({}, o), {
                span: a.getInputSpan(),
                values: r
            })
        }
    }
    t.parseToplevelFunction = function(t) {
        return a(i.parse(t, {
            trailingComma: !0
        }))
    }
    ,
    t.getFunctionSpecFromTree = a
});
define('core/lib/number-to-latex', ["require", "exports"], function(require, e) {
    "use strict";
    function r(e) {
        var r = e + "";
        if (/\d+\.?\d*e[\+\-]*\d+/i.test(r)) {
            var t = String(r).toLowerCase().split("e")
              , n = parseFloat(t[0])
              , i = parseInt(t[1], 10)
              , a = Math.abs(i)
              , o = Math.abs(n).toString().split(".");
            if (i < 0)
                r = "0." + new Array(a).join("0") + o.join("");
            else {
                var f = o[1];
                f && (a -= f.length),
                r = o.join("") + new Array(a + 1).join("0")
            }
            n < 0 && (r = "-" + r)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.numberToStatsConfidenceLatex = e.numberToDecimalString = void 0,
    e.default = function(e) {
        if ("string" == typeof e)
            return e;
        if (void 0 === e)
            return "";
        if (isNaN(e))
            return "\\frac{0}{0}";
        if (e === 1 / 0)
            return "\\infty";
        if (e === -1 / 0)
            return "-\\infty";
        var r = e + "";
        return r = (r = r.replace(/^1e\+?([-\d]+)/, "10^{$1}")).replace(/([-\d\.]+)e\+?([-\d]+)/, "$1\\cdot 10^{$2}")
    }
    ,
    e.numberToDecimalString = r,
    e.numberToStatsConfidenceLatex = function(e, t) {
        void 0 === t && (t = 2);
        var n, i = r(e), a = i.indexOf(".");
        if (-1 === a)
            return i;
        for (var o = a + 1; o < i.length; o++)
            if (n) {
                if (i[o] !== n)
                    break
            } else {
                if ("0" !== i[o] && "9" !== i[o])
                    break;
                n = i[o]
            }
        return i.substr(0, Math.max(a + 5, o + t))
    }
});
define('core/math/ir/features/value-to-latex', ["require", "exports", "core/math/types", "../../../lib/number-to-latex"], function(require, e, t, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.valueToLatex = void 0,
    e.valueToLatex = function e(a, i) {
        if (t.isList(a)) {
            for (var u = [], n = 0; n < i.length; n++)
                u.push(e(t.elementType(a), i[n]));
            return "\\left[" + u.join(",") + "\\right]"
        }
        switch (a) {
        case t.Number:
            return r.default(i);
        case t.Point:
            var o = i
              , l = o[0]
              , f = o[1];
            return "\\left(" + r.default(l) + "," + r.default(f) + "\\right)";
        default:
            throw new Error("Cannot serialize a value of type " + t.prettyPrint(a) + ".")
        }
    }
});
define('core/math/ir/features/action-to-latex', ["require", "exports", "../../../lib/label", "./value-to-latex"], function(require, e, t, a) {
    "use strict";
    function o(e, o) {
        var i = e.updateRules[o]
          , r = i.valueType
          , u = i.value;
        return t.identifierToLatex(o) + "=" + a.valueToLatex(r, u)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.actionLatexForSymbol = e.actionToLatex = void 0,
    e.actionToLatex = function(e) {
        var t = {};
        for (var a in e.updateRules)
            t[a] = o(e, a);
        return t
    }
    ,
    e.actionLatexForSymbol = o
});
define('core/math/evaluationstate', ["require", "exports", "core/vendor/d3-color", "parsenodes", "tslib", "core/math/errormsg", "core/types/graphmode", "core/lib/label", "core/math/distribution-spec", "./types", "./ir/features/action-to-latex"], function(require, e, r, i, a, t, n, s, o, l, u) {
    "use strict";
    function d(e) {
        return e.isError ? e.getError() : void 0 === e.asValue() ? "" : +e.asValue()
    }
    function c() {
        return {
            operator: "=",
            variables: []
        }
    }
    function p(e, r, i) {
        var a = e.variables;
        if (a && a.length) {
            for (var t = {}, n = 0, s = a; n < s.length; n++) {
                t[o = s[n]] = !0
            }
            for (var o in i)
                t[o] = !0;
            i = t
        }
        e.variables = r.sliderVariables(Object.keys(i))
    }
    function g(e, r) {
        if (r.blocksExport)
            return !1;
        var i = r.getDependencies();
        if (0 === i.length)
            return !1;
        for (var a = 0, t = i; a < t.length; a++) {
            var n = t[a];
            if (!e.validActionVariable(n))
                return !1
        }
        return !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isErrorExportableActionDefinition = e.addSliderPrompts = e.EvaluationState = e.defaultEvaluationState = void 0,
    e.defaultEvaluationState = c,
    e.EvaluationState = function(e, c, v) {
        if (c.isTable)
            return function(e, r, i) {
                for (var a = [], t = 0; t < r.columns.length; t++) {
                    var n = i.columns[t]
                      , s = n.isError ? [] : n.values.map(d)
                      , o = {
                        dependent: !n.isIndependent,
                        discrete: !!n.isIndependent,
                        values: s
                    };
                    n.isError && (o.error = n.getError()),
                    a.push(o)
                }
                return {
                    column_data: a
                }
            }(0, c, v);
        if (c.isImage)
            return function(e, r, a) {
                var t = {
                    variables: [],
                    errorMap: {},
                    dimensions: {}
                };
                if (a.center.isError && (t.errorMap.center = !0),
                a.radianAngle.isError && (t.errorMap.angle = !0),
                a.width.isError && (t.errorMap.width = !0),
                a.height.isError && (t.errorMap.height = !0),
                a.opacity.isError && (t.errorMap.opacity = !0),
                a.center.isError || a.radianAngle.isError || a.width.isError || a.height.isError || a.opacity.isError)
                    return t.variables = r.getSliderVariables(e, a),
                    t;
                t.dimensions.x = [],
                t.dimensions.y = [],
                t.dimensions.radianAngle = [],
                t.dimensions.width = [],
                t.dimensions.height = [],
                t.dimensions.opacity = [];
                var s = [a.center, a.radianAngle, a.width, a.height, a.opacity];
                return s.some(function(e) {
                    return e && e.valueType && l.isList(e.valueType)
                }) && (t.is_concrete_list = !0),
                i.List.eachArgs(s, function(e) {
                    var r = e[0].asValue()
                      , i = +e[1].asValue()
                      , a = Math.atan2(Math.sin(i), Math.cos(i));
                    t.dimensions.x.push(+r[0]),
                    t.dimensions.y.push(+r[1]),
                    t.dimensions.radianAngle.push(a),
                    t.dimensions.width.push(+e[2].asValue()),
                    t.dimensions.height.push(+e[3].asValue()),
                    t.dimensions.opacity.push(Math.max(0, Math.min(1, +e[4].asValue())))
                }),
                (e.graphingEnabled() ? r.getGraphMode(e, a) : n.NONE) !== n.NONE && (t.is_graphable = !0),
                a.moveStrategy && (t.move_strategy = a.moveStrategy),
                r.center && ("Identifier" === r.center.type ? (t.center_reference_id = r.center.referencedStatementId,
                t.center_reference_symbol = r.center._symbol) : "ParenSeq" === r.center.type && a.center.valueType === l.Point && (t.center_is_point_literal = !0)),
                t
            }(e, c, v);
        if (c instanceof i.Ticker)
            return function(e, r, i) {
                for (var n, s = i.handler, o = i.minStep, l = {}, u = {}, d = 0, c = s.getDependencies(); d < c.length; d++) {
                    var v = c[d];
                    e.validActionVariable(v) || (l[v] = !0)
                }
                for (var f = 0, m = o.getDependencies(); f < m.length; f++)
                    u[v = m[f]] = !0;
                if (o.isError)
                    n = {
                        status: "error",
                        error: o.getError()
                    };
                else {
                    var h = o.asValue();
                    n = "number" == typeof h && !isNaN(h) && h >= 0 ? {
                        status: "valid",
                        value: h
                    } : {
                        status: "error",
                        error: t.tickerMinStepNonNegativeNumber().getError()
                    }
                }
                var b = Object.keys(l);
                b.length > 0 && (s = t.tooManyVariables(b).setDependencies(s.getDependencies()));
                var _ = {
                    handler: s.isError && !g(e, s) ? {
                        status: "error",
                        error: s.getError()
                    } : s.isEmptyAction ? {
                        status: "empty"
                    } : {
                        status: "maybe-valid"
                    },
                    minStep: n,
                    variables: []
                };
                return p(_, e, a.__assign(a.__assign({}, l), u)),
                _
            }(e, 0, v);
        var f = {
            operator: "=",
            variables: []
        };
        if (v.isError && (!(c instanceof i.FunctionDefinition) || v.blocksExport))
            return f.error = v.getError(),
            f.variables = c.getSliderVariables(e, v),
            f.is_single_identifier = c instanceof i.Identifier,
            v.actionValue && (f.action_value = u.actionToLatex(v.actionValue)),
            f;
        if (v.valueType === l.RGBColor && 0 === v.getDependencies().length) {
            var m = v.asValue();
            f.rgb_value = r.rgb(m[0], m[1], m[2]).formatHex()
        }
        v.valueType === l.Action && 0 === v.getDependencies().length && (f.action_value = u.actionToLatex(v.asValue())),
        v.moveStrategy && (f.move_strategy = v.moveStrategy,
        f.default_drag_mode = v.defaultDragMode),
        c.isInequality() && (f.is_inequality = !0),
        f.operator = c.getOperator(),
        v instanceof i.SolvedEquation ? !0 !== v._expression.asValue() && !1 !== v._expression.asValue() && (f.assignment = v._symbol) : c instanceof i.Assignment && (f.assignment = c._symbol);
        var h = e.graphingEnabled() ? c.getGraphMode(e, v) : n.NONE;
        if (h !== n.NONE) {
            f.is_graphable = !0,
            f.expression_type = c.getExpressionType(h, v.valueType),
            v.isShadeBetween() && (f.is_shade_between = !0);
            var b = c.tableInfo(e, v);
            b && (f.is_tableable = !0,
            f.table_info = b)
        }
        if (void 0 !== v.valueType && l.isList(v.valueType) && (f.is_concrete_list = !0,
        v.valueType === l.ListOfColor && 0 === v.getDependencies().length)) {
            var _ = v.asValue();
            _ && (f.rgb_value = _.map(function(e) {
                return r.rgb(e[0], e[1], e[2]).formatHex()
            }))
        }
        f.variables = f.is_graphable ? [] : c.getSliderVariables(e, v),
        f.is_single_identifier = c instanceof i.Identifier,
        v.isConstant && (f.constant_value = v.asValue());
        var y = v.getEvaluationInfo();
        if (!y || "=" !== f.operator || c.isConstant || c.isFunction || v.valueType === l.Bool || v.valueType === l.ListOfBool || c instanceof i.Equation || c instanceof i.And || (f.is_evaluable = !0,
        f.zero_values = y),
        v instanceof i.OptimizedRegression) {
            var E = v
              , V = {};
            for (var S in E.parameters)
                E.parameters.hasOwnProperty(S) && (V[s.identifierToLatex(S)] = +E.parameters[S].asValue());
            f.is_regression = !0,
            f.regression = {
                parameters: V,
                residualVariable: s.identifierToLatex(E.residualVariable),
                residualSuggestionId: E.residualSuggestionId,
                shouldSuggestLogMode: E.shouldSuggestLogMode,
                isLinear: E.isLinear,
                statistics: E.statistics,
                parameterWarning: E.parameterWarning
            }
        }
        var x = o.getFunctionSpecFromTree(c);
        return x && x.discrete && (f.is_discrete_distribution = !0),
        f
    }
    ,
    e.addSliderPrompts = p,
    e.isErrorExportableActionDefinition = g
});
define('core/math/statementanalysis', ['require', 'core/math/evaluationstate', 'pjs', 'core/types/graphmode', 'core/math/workerconfig'], function(require) {
    "use strict";
    var e = require("core/math/evaluationstate").EvaluationState
      , t = require("pjs")
      , r = require("core/types/graphmode")
      , i = require("core/math/workerconfig");
    return t(function(t) {
        t.init = function(t, r, i) {
            this.policy = t,
            this.rawTree = r,
            this.concreteTree = i,
            this.evaluationState = e(t, r, i)
        }
        ,
        t.exportTo = function(e, t) {
            this.rawTree.exportTo(e, this.concreteTree, t)
        }
        ,
        t.graph = function(e) {
            return this.rawTree.tryGraph(this.policy, this.concreteTree, e)
        }
        ,
        t.getGraphMode = function() {
            return this.rawTree.getGraphMode(this.policy, this.concreteTree)
        }
        ,
        t.getGraphInfo = function() {
            return this.rawTree.getGraphInfo(this.policy, this.concreteTree)
        }
        ,
        t.shouldIntersect = function() {
            if (!this.evaluationState.is_graphable)
                return !1;
            if (!this.rawTree.userData.shouldGraph)
                return !1;
            if (!i.pointsOfInterest)
                return !1;
            var e = this.getGraphMode();
            return e === r.X || e === r.Y
        }
    })
});
define('core/math/expression-types', ["require", "exports"], function(require, i) {
    "use strict";
    var s;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.isClickableExpressionType = i.getReconciledExpressionProps = i.EXPRESSION_PROP_DEFAULTS = i.ExpressionType = void 0,
    function(i) {
        i.X_OR_Y = "X_OR_Y",
        i.SINGLE_POINT = "SINGLE_POINT",
        i.POINT_LIST = "POINT_LIST",
        i.PARAMETRIC = "PARAMETRIC",
        i.POLAR = "POLAR",
        i.IMPLICIT = "IMPLICIT",
        i.POLYGON = "POLYGON",
        i.HISTOGRAM = "HISTOGRAM",
        i.DOTPLOT = "DOTPLOT",
        i.BOXPLOT = "BOXPLOT",
        i.TTEST = "TTEST",
        i.STATS = "STATS",
        i.CUBE = "CUBE",
        i.SPHERE = "SPHERE"
    }(s = i.ExpressionType || (i.ExpressionType = {})),
    i.EXPRESSION_PROP_DEFAULTS = {
        X_OR_Y: {
            points: !1,
            lines: !0,
            fill: !1
        },
        SINGLE_POINT: {
            points: !0,
            lines: !1,
            fill: !1
        },
        POINT_LIST: {
            points: !0,
            lines: !1,
            fill: !1
        },
        PARAMETRIC: {
            points: !1,
            lines: !0,
            fill: !1
        },
        POLAR: {
            points: !1,
            lines: !0,
            fill: !1
        },
        IMPLICIT: {
            points: !1,
            lines: !0,
            fill: !1
        },
        POLYGON: {
            points: !1,
            lines: !0,
            fill: !0
        },
        HISTOGRAM: {
            points: !1,
            lines: !0,
            fill: !0
        },
        DOTPLOT: {
            points: !0,
            lines: !1,
            fill: !1
        },
        BOXPLOT: {
            points: !1,
            lines: !0,
            fill: !1
        },
        TTEST: {
            points: !1,
            lines: !1,
            fill: !1
        },
        STATS: {
            points: !1,
            lines: !1,
            fill: !1
        },
        CUBE: {
            points: !1,
            lines: !1,
            fill: !0
        },
        SPHERE: {
            points: !1,
            lines: !1,
            fill: !0
        }
    },
    i.getReconciledExpressionProps = function(e, T) {
        if (void 0 === e)
            return {
                points: !1,
                lines: !1,
                fill: !1
            };
        var l = i.EXPRESSION_PROP_DEFAULTS[e];
        switch (e) {
        case s.SINGLE_POINT:
            return {
                points: !0,
                lines: !1,
                fill: !1
            };
        case s.POINT_LIST:
        case s.DOTPLOT:
            return {
                points: void 0 === T.points ? l.points : T.points,
                lines: void 0 === T.lines ? l.lines : T.lines,
                fill: !1
            };
        case s.PARAMETRIC:
        case s.POLYGON:
        case s.X_OR_Y:
        case s.POLAR:
        case s.IMPLICIT:
        case s.HISTOGRAM:
        case s.BOXPLOT:
        case s.TTEST:
        case s.STATS:
        case s.CUBE:
        case s.SPHERE:
            return {
                points: !1,
                lines: void 0 === T.lines ? l.lines : T.lines,
                fill: void 0 === T.fill ? l.fill : T.fill
            };
        default:
            return e
        }
    }
    ,
    i.isClickableExpressionType = function(i) {
        if (void 0 === i)
            return !1;
        switch (i) {
        case s.SINGLE_POINT:
        case s.POINT_LIST:
        case s.PARAMETRIC:
        case s.POLYGON:
        case s.X_OR_Y:
        case s.POLAR:
        case s.IMPLICIT:
            return !0;
        case s.HISTOGRAM:
        case s.BOXPLOT:
        case s.DOTPLOT:
        case s.TTEST:
        case s.STATS:
        case s.CUBE:
        case s.SPHERE:
            return !1;
        default:
            return i
        }
    }
});
define('core/math/ir/features/reapply-restrictions', ["require", "exports", "../instructions", "../opcodes", "./get-dependency-mask"], function(require, e, r, n, t) {
    "use strict";
    function s(e, r) {
        for (var n = [], t = 0, s = r; t < s.length; t++) {
            var i = s[t];
            n.push(e[i])
        }
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.reapplyRestrictions = void 0,
    e.reapplyRestrictions = function(e, i) {
        for (var p = [], o = e.returnIndex, u = t.getDependencyMask(e, i.mappedArgIndex), c = function(e, t, s) {
            for (var i = [], p = 0; p < s; p++)
                i.push(!1);
            i[s] = t[s];
            for (p = s; p >= 0; p--)
                if (i[p] && t[p]) {
                    var o = e.getInstruction(p);
                    if (o.type === n.Piecewise)
                        i[o.args[1]] = !0;
                    else if (!r.isLeafInstruction(o))
                        for (var u = 0, c = o.args; u < c.length; u++) {
                            i[c[u]] = !0
                        }
                }
            return i
        }(e, u, i.mappedReturnIndex), a = o, f = e.NanOfType(e.getReturnType()), d = 0; d < i.mappedReturnIndex; d++) {
            var g = e.getInstruction(d);
            if (d !== i.mappedArgIndex)
                if (u[d] || e.isInClosedBlock(d))
                    if (r.isLeafInstruction(g))
                        p.push(e.copyInstruction(g));
                    else {
                        var l = s(p, g.args);
                        p.push(e.copyInstructionWithArgs(g, l)),
                        g.type === n.Piecewise && c[d] && (a = e.Piecewise([l[0], a, f]))
                    }
                else
                    p.push(d);
            else
                p.push(o)
        }
        return a
    }
});
define('core/math/ir/features/solve', ["require", "exports", "parsenodes", "core/math/workerconfig", "core/math/parsenode/irexpression", "core/math/errormsg", "../build-ir", "../dependencies", "core/math/comparators", "../opcodes", "./fuse-broadcast", "./reapply-restrictions", "core/math/types", "core/math/maybe-rational"], function(require, e, i, r, t, a, n, s, c, l, o, u, d, v) {
    "use strict";
    function f(e, i) {
        return i ? function(e) {
            var i = e.chunk
              , r = e.coefficients
              , t = r[0]
              , a = r[1]
              , n = r[2]
              , s = i.Constant(v.maybeRational(0, 1));
            void 0 === n && (n = s);
            void 0 === a && (a = s);
            void 0 === t && (t = s);
            var c = i.Constant(v.maybeRational(2, 1))
              , l = i.Constant(NaN)
              , o = i.Constant(v.maybeRational(1e305, 1))
              , u = i.Negative([o])
              , d = i.Multiply([c, n])
              , f = i.Negative([a])
              , p = i.Subtract([i.Multiply([a, a]), i.Multiply([c, i.Multiply([d, t])])])
              , g = i.SyntheticNativeFunction("sqrt", [p])
              , m = i.Divide([i.Add([f, g]), d])
              , y = i.Divide([i.Subtract([f, g]), d])
              , b = i.Negative([i.Divide([t, a])])
              , h = i.Equal([n, s])
              , w = i.Greater([n, s])
              , P = i.Equal([a, s])
              , I = i.Greater([a, s])
              , N = i.Less([a, s])
              , O = i.Greater([t, s])
              , q = i.Less([p, s]);
            return [i.Piecewise([h, i.Piecewise([N, b, l]), i.Piecewise([w, y, l])]), i.Piecewise([h, i.Piecewise([P, i.Piecewise([O, u, l]), l]), i.Piecewise([w, i.Piecewise([q, u, l]), m])]), i.Piecewise([h, i.Piecewise([P, i.Piecewise([O, o, l]), l]), i.Piecewise([w, i.Piecewise([q, o, l]), y])]), i.Piecewise([h, i.Piecewise([I, b, l]), i.Piecewise([w, m, l])])]
        }(e) : function(e) {
            var i = e.chunk
              , r = e.coefficients
              , t = r[0]
              , a = r[1]
              , n = r[2]
              , s = i.Constant(v.maybeRational(0, 1))
              , c = i.Constant(NaN);
            if (void 0 === n) {
                void 0 === a && (a = s);
                var o = i.Negative([i.Divide([t, a])])
                  , u = i.Equal([a, s]);
                return [i.Piecewise([u, c, o])]
            }
            var d = i.Constant(v.maybeRational(2, 1))
              , f = i.Multiply([d, n])
              , p = i.Negative([a])
              , g = i.Subtract([i.Multiply([a, a]), i.Multiply([d, i.Multiply([f, t])])])
              , m = i.Equal([n, s])
              , y = i.getInstruction(g);
            if (y.type === l.Constant && 0 === v.asFloat(y.value))
                return [i.Piecewise([m, c, i.Divide([p, f])])];
            var b = i.SyntheticNativeFunction("sqrt", [g])
              , h = i.Less([a, s])
              , w = i.Greater([a, s])
              , P = i.Divide([i.Add([p, b]), f])
              , I = i.Divide([i.Subtract([p, b]), f]);
            o = i.Negative([i.Divide([t, a])]);
            return [i.Piecewise([m, i.Piecewise([h, o, c]), I]), i.Piecewise([m, i.Piecewise([w, o, c]), P])]
        }(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.trySolve = void 0,
    e.trySolve = function(e, v) {
        try {
            return function(e, v) {
                for (var p = e.policy, g = e.frame, m = s.getFreeDependencies(g, v), y = [], b = 0; b < m.length; b++)
                    y.push(d.Number);
                var h = n.buildIRContext({
                    policy: p,
                    frame: g,
                    argNames: m,
                    argTypes: y
                })
                  , w = h.chunk
                  , P = n.addToIR(h, v.args[0])
                  , I = n.addToIR(h, v.args[1])
                  , N = v.getOperator()
                  , O = "=" !== N;
                switch (N) {
                case "<":
                    w.Less([P, I]);
                    break;
                case ">":
                    w.Greater([P, I]);
                    break;
                case "<=":
                    w.LessEqual([P, I]);
                    break;
                case ">=":
                    w.GreaterEqual([P, I]);
                    break;
                case "=":
                    w.Equal([P, I])
                }
                if (w.returnIndex = o.fuseBroadcast(w, w.returnIndex),
                w.isConstant())
                    return new t(w.close());
                var q = w.getInstruction(P).type !== l.LoadArg || -1 !== s.getFreeDependencies(g, v.args[1]).indexOf(w.argNames[P]);
                if (!r.plotImplicits && q)
                    throw a.implicitsDisabled();
                -1 === c.table[N].direction ? w.Subtract([I, P]) : w.Subtract([P, I]);
                w.close();
                var D = w.getLiveArgNames();
                if (0 === D.length)
                    throw a.parseError();
                if (1 === D.length && !O && !r.plotSingleVariableImplicitEquations)
                    return a.singleVariableImplicitEquationsDisabled();
                if (D.length > 2)
                    return a.tooManyVariables(p.sliderVariables(D)).setDependencies(D);
                if (O && !p.validInequalityVariables(D))
                    return a.invalidInequalityVariables().setDependencies(D);
                var C = function(e, i) {
                    var r = e.chunk
                      , t = e.policy
                      , a = r.argNames
                      , n = d.isList(r.getReturnType())
                      , s = [];
                    e: for (var c = 0; c < a.length; c++) {
                        var l = a[c]
                          , o = a.length > 1 && !t.validSolvedVariable(l);
                        s[c] = {
                            localFrames: [],
                            effectiveOrder: 0,
                            variableOfInterest: l
                        };
                        var u = !i;
                        if (o)
                            s[c].effectiveOrder = 1 / 0;
                        else {
                            var v = n ? r.getConstantListLength() : 1;
                            if (null == v)
                                throw new Error("Programming error: cannot solve a variable-length list expression");
                            for (var f = 0; f < v; f++) {
                                var p = n ? r.elementAt(f) : r;
                                if (p.polynomialOrder(l, {
                                    allowRestriction: u,
                                    allowClosedBlockReferences: !1
                                }) > 2) {
                                    s[c].effectiveOrder = 1 / 0;
                                    continue e
                                }
                                var g = p.getPolynomialCoefficients(l);
                                s[c].localFrames.push(g),
                                s[c].effectiveOrder = Math.max(s[c].effectiveOrder, g.coefficients.length - 1)
                            }
                        }
                    }
                    return 1 === a.length ? s[0] : ("y" === a[0] && (s = [s[1], s[0]]),
                    0 === s[0].effectiveOrder ? s[1] : 0 === s[1].effectiveOrder ? s[0] : s[s[0].effectiveOrder < s[1].effectiveOrder ? 0 : 1])
                }(h, O)
                  , E = C.localFrames
                  , R = C.effectiveOrder
                  , S = C.variableOfInterest;
                if (p.complicatedPolarImplicit(S, R))
                    return a.complicatedPolarImplicit().setDependencies(D);
                if (!p.validImplicitVariables(D))
                    return a.invalidImplicitVariables();
                if (R > 2)
                    return new t(w.close());
                for (var k = [], L = 1, M = 0, x = E; M < x.length; M++) {
                    var V = x[M]
                      , F = f(V, O);
                    L = F.length;
                    for (var G = 0, A = F; G < A.length; G++) {
                        var T = A[G]
                          , B = V.chunk.copy();
                        B.returnIndex = T,
                        V.isRestrictedPolynomial && (B.returnIndex = u.reapplyRestrictions(B, V)),
                        B.close(),
                        k.push(new t(B))
                    }
                }
                return i.SolvedEquation(S, i.List(k), L)
            }(e, v)
        } catch (e) {
            return e instanceof i.Base ? e : a.parseError()
        }
    }
});
define('numeric', [], function() {
    "use strict";
    var r = "undefined" == typeof exports ? function() {}
    : exports;
    return "undefined" != typeof global && (global.numeric = r),
    r.version = "1.2.6",
    r._myIndexOf = function(r) {
        var n, e = this.length;
        for (n = 0; n < e; ++n)
            if (this[n] === r)
                return n;
        return -1
    }
    ,
    r.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : r._myIndexOf,
    r.precision = 4,
    r.largeArray = 50,
    r.compile = function() {
        var n = Array.prototype.slice.call(arguments)
          , e = n.pop();
        return e = "return function (" + n.join(",") + ") {" + e + "}",
        new Function(["numeric"],e)(r)
    }
    ,
    r._dim = function(r) {
        for (var n = []; "object" == typeof r; )
            n.push(r.length),
            r = r[0];
        return n
    }
    ,
    r.dim = function(n) {
        var e;
        return "object" == typeof n ? "object" == typeof (e = n[0]) ? "object" == typeof e[0] ? r._dim(n) : [n.length, e.length] : [n.length] : []
    }
    ,
    r.mapreduce = function(n, e) {
        return r.compile("x", "accum", "_s", "_k", 'if(typeof accum === "undefined") accum = ' + e + ';\nif(typeof x === "number") { var xi = x; ' + n + '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' + n + ";\n    xi = x[i-1];\n    " + n + ";\n}\nif(i === 0) {\n    xi = x[i];\n    " + n + "\n}\nreturn accum;")
    }
    ,
    r.mapreduce2 = function(n, e) {
        return r.compile("x", "var n = x.length;\nvar i,xi;\n" + e + "\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    " + n + "\n}\nreturn accum;")
    }
    ,
    r.rep = function(n, e, t) {
        void 0 === t && (t = 0);
        var i, o = n[t], a = Array(o);
        if (t === n.length - 1) {
            for (i = o - 2; i >= 0; i -= 2)
                a[i + 1] = e,
                a[i] = e;
            return -1 === i && (a[0] = e),
            a
        }
        for (i = o - 1; i >= 0; i--)
            a[i] = r.rep(n, e, t + 1);
        return a
    }
    ,
    r.dotMMsmall = function(r, n) {
        var e, t, i, o, a, f, u, c, s, m, l;
        for (o = r.length,
        a = n.length,
        f = n[0].length,
        u = Array(o),
        e = o - 1; e >= 0; e--) {
            for (c = Array(f),
            s = r[e],
            i = f - 1; i >= 0; i--) {
                for (m = s[a - 1] * n[a - 1][i],
                t = a - 2; t >= 1; t -= 2)
                    l = t - 1,
                    m += s[t] * n[t][i] + s[l] * n[l][i];
                0 === t && (m += s[0] * n[0][i]),
                c[i] = m
            }
            u[e] = c
        }
        return u
    }
    ,
    r._getCol = function(r, n, e) {
        var t;
        for (t = r.length - 1; t > 0; --t)
            e[t] = r[t][n],
            e[--t] = r[t][n];
        0 === t && (e[0] = r[0][n])
    }
    ,
    r.dotMMbig = function(n, e) {
        var t, i, o, a = r._getCol, f = e.length, u = Array(f), c = n.length, s = e[0].length, m = new Array(c), l = r.dotVV;
        for (--f,
        i = --c; -1 !== i; --i)
            m[i] = Array(s);
        for (i = --s; -1 !== i; --i)
            for (a(e, i, u),
            o = c; -1 !== o; --o)
                0,
                t = n[o],
                m[o][i] = l(t, u);
        return m
    }
    ,
    r.dotMV = function(n, e) {
        var t, i = n.length, o = (e.length,
        Array(i)), a = r.dotVV;
        for (t = i - 1; t >= 0; t--)
            o[t] = a(n[t], e);
        return o
    }
    ,
    r.dotVM = function(r, n) {
        var e, t, i, o, a, f, u;
        for (i = r.length,
        o = n[0].length,
        a = Array(o),
        t = o - 1; t >= 0; t--) {
            for (f = r[i - 1] * n[i - 1][t],
            e = i - 2; e >= 1; e -= 2)
                u = e - 1,
                f += r[e] * n[e][t] + r[u] * n[u][t];
            0 === e && (f += r[0] * n[0][t]),
            a[t] = f
        }
        return a
    }
    ,
    r.dotVV = function(r, n) {
        var e, t, i = r.length, o = r[i - 1] * n[i - 1];
        for (e = i - 2; e >= 1; e -= 2)
            t = e - 1,
            o += r[e] * n[e] + r[t] * n[t];
        return 0 === e && (o += r[0] * n[0]),
        o
    }
    ,
    r.dot = function(n, e) {
        var t = r.dim;
        switch (1e3 * t(n).length + t(e).length) {
        case 2002:
            return e.length < 10 ? r.dotMMsmall(n, e) : r.dotMMbig(n, e);
        case 2001:
            return r.dotMV(n, e);
        case 1002:
            return r.dotVM(n, e);
        case 1001:
            return r.dotVV(n, e);
        case 1e3:
            return r.mulVS(n, e);
        case 1:
            return r.mulSV(n, e);
        case 0:
            return n * e;
        default:
            throw new Error("numeric.dot only works on vectors and matrices")
        }
    }
    ,
    r.diag = function(r) {
        var n, e, t, i, o = r.length, a = Array(o);
        for (n = o - 1; n >= 0; n--) {
            for (i = Array(o),
            e = n + 2,
            t = o - 1; t >= e; t -= 2)
                i[t] = 0,
                i[t - 1] = 0;
            for (t > n && (i[t] = 0),
            i[n] = r[n],
            t = n - 1; t >= 1; t -= 2)
                i[t] = 0,
                i[t - 1] = 0;
            0 === t && (i[0] = 0),
            a[n] = i
        }
        return a
    }
    ,
    r.getDiag = function(r) {
        var n, e = Math.min(r.length, r[0].length), t = Array(e);
        for (n = e - 1; n >= 1; --n)
            t[n] = r[n][n],
            t[--n] = r[n][n];
        return 0 === n && (t[0] = r[0][0]),
        t
    }
    ,
    r.identity = function(n) {
        return r.diag(r.rep([n], 1))
    }
    ,
    r.pointwise = function(n, e, t) {
        void 0 === t && (t = "");
        var i, o, a = [], f = /\[i\]$/, u = "", c = !1;
        for (i = 0; i < n.length; i++)
            f.test(n[i]) ? u = o = n[i].substring(0, n[i].length - 3) : o = n[i],
            "ret" === o && (c = !0),
            a.push(o);
        return a[n.length] = "_s",
        a[n.length + 1] = "_k",
        a[n.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + u + ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' + (c ? "" : ", ret = Array(_n)") + ";\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(" + n.join(",") + ",_s,_k+1);\n    return ret;\n}\n" + t + "\nfor(i=_n-1;i!==-1;--i) {\n    " + e + "\n}\nreturn ret;",
        r.compile.apply(null, a)
    }
    ,
    r.pointwise2 = function(n, e, t) {
        void 0 === t && (t = "");
        var i, o, a = [], f = /\[i\]$/, u = "", c = !1;
        for (i = 0; i < n.length; i++)
            f.test(n[i]) ? u = o = n[i].substring(0, n[i].length - 3) : o = n[i],
            "ret" === o && (c = !0),
            a.push(o);
        return a[n.length] = "var _n = " + u + ".length;\nvar i" + (c ? "" : ", ret = Array(_n)") + ";\n" + t + "\nfor(i=_n-1;i!==-1;--i) {\n" + e + "\n}\nreturn ret;",
        r.compile.apply(null, a)
    }
    ,
    r._biforeach = function r(n, e, t, i, o) {
        var a;
        if (i !== t.length - 1)
            for (a = t[i] - 1; a >= 0; a--)
                r("object" == typeof n ? n[a] : n, "object" == typeof e ? e[a] : e, t, i + 1, o);
        else
            o(n, e)
    }
    ,
    r._biforeach2 = function r(n, e, t, i, o) {
        if (i === t.length - 1)
            return o(n, e);
        var a, f = t[i], u = Array(f);
        for (a = f - 1; a >= 0; --a)
            u[a] = r("object" == typeof n ? n[a] : n, "object" == typeof e ? e[a] : e, t, i + 1, o);
        return u
    }
    ,
    r._foreach = function r(n, e, t, i) {
        var o;
        if (t !== e.length - 1)
            for (o = e[t] - 1; o >= 0; o--)
                r(n[o], e, t + 1, i);
        else
            i(n)
    }
    ,
    r._foreach2 = function r(n, e, t, i) {
        if (t === e.length - 1)
            return i(n);
        var o, a = e[t], f = Array(a);
        for (o = a - 1; o >= 0; o--)
            f[o] = r(n[o], e, t + 1, i);
        return f
    }
    ,
    r.ops2 = {
        add: "+",
        sub: "-",
        mul: "*",
        div: "/",
        mod: "%",
        and: "&&",
        or: "||",
        eq: "===",
        neq: "!==",
        lt: "<",
        gt: ">",
        leq: "<=",
        geq: ">=",
        band: "&",
        bor: "|",
        bxor: "^",
        lshift: "<<",
        rshift: ">>",
        rrshift: ">>>"
    },
    r.opseq = {
        addeq: "+=",
        subeq: "-=",
        muleq: "*=",
        diveq: "/=",
        modeq: "%=",
        lshifteq: "<<=",
        rshifteq: ">>=",
        rrshifteq: ">>>=",
        bandeq: "&=",
        boreq: "|=",
        bxoreq: "^="
    },
    r.mathfuns = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan", "isNaN", "isFinite"],
    r.mathfuns2 = ["atan2", "pow", "max", "min"],
    r.ops1 = {
        neg: "-",
        not: "!",
        bnot: "~",
        clone: ""
    },
    r.mapreducers = {
        any: ["if(xi) return true;", "var accum = false;"],
        all: ["if(!xi) return false;", "var accum = true;"],
        sum: ["accum += xi;", "var accum = 0;"],
        prod: ["accum *= xi;", "var accum = 1;"],
        norm2Squared: ["accum += xi*xi;", "var accum = 0;"],
        norminf: ["accum = max(accum,abs(xi));", "var accum = 0, max = Math.max, abs = Math.abs;"],
        norm1: ["accum += abs(xi);", "var accum = 0, abs = Math.abs;"],
        sup: ["accum = max(accum,xi);", "var accum = -Infinity, max = Math.max;"],
        inf: ["accum = min(accum,xi);", "var accum = Infinity, min = Math.min;"]
    },
    function() {
        var n, e;
        for (n = 0; n < r.mathfuns2.length; ++n)
            e = r.mathfuns2[n],
            r.ops2[e] = e;
        for (n in r.ops2)
            if (r.ops2.hasOwnProperty(n)) {
                e = r.ops2[n];
                var t, i, o = "";
                -1 !== r.myIndexOf.call(r.mathfuns2, n) ? (o = "var " + e + " = Math." + e + ";\n",
                t = function(r, n, t) {
                    return r + " = " + e + "(" + n + "," + t + ")"
                }
                ,
                i = function(r, n) {
                    return r + " = " + e + "(" + r + "," + n + ")"
                }
                ) : (t = function(r, n, t) {
                    return r + " = " + n + " " + e + " " + t
                }
                ,
                i = r.opseq.hasOwnProperty(n + "eq") ? function(r, n) {
                    return r + " " + e + "= " + n
                }
                : function(r, n) {
                    return r + " = " + r + " " + e + " " + n
                }
                ),
                r[n + "VV"] = r.pointwise2(["x[i]", "y[i]"], t("ret[i]", "x[i]", "y[i]"), o),
                r[n + "SV"] = r.pointwise2(["x", "y[i]"], t("ret[i]", "x", "y[i]"), o),
                r[n + "VS"] = r.pointwise2(["x[i]", "y"], t("ret[i]", "x[i]", "y"), o),
                r[n] = r.compile("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." + n + "VV, VS = numeric." + n + "VS, SV = numeric." + n + 'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' + i("x", "y") + "\n}\nreturn x;\n"),
                r[e] = r[n],
                r[n + "eqV"] = r.pointwise2(["ret[i]", "x[i]"], i("ret[i]", "x[i]"), o),
                r[n + "eqS"] = r.pointwise2(["ret[i]", "x"], i("ret[i]", "x"), o),
                r[n + "eq"] = r.compile("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." + n + "eqV, S = numeric." + n + 'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n')
            }
        for (n = 0; n < r.mathfuns2.length; ++n)
            e = r.mathfuns2[n],
            delete r.ops2[e];
        for (n = 0; n < r.mathfuns.length; ++n)
            e = r.mathfuns[n],
            r.ops1[e] = e;
        for (n in r.ops1)
            r.ops1.hasOwnProperty(n) && (o = "",
            e = r.ops1[n],
            -1 !== r.myIndexOf.call(r.mathfuns, n) && Math.hasOwnProperty(e) && (o = "var " + e + " = Math." + e + ";\n"),
            r[n + "eqV"] = r.pointwise2(["ret[i]"], "ret[i] = " + e + "(ret[i]);", o),
            r[n + "eq"] = r.compile("x", 'if(typeof x !== "object") return ' + e + "x\nvar i;\nvar V = numeric." + n + "eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n"),
            r[n + "V"] = r.pointwise2(["x[i]"], "ret[i] = " + e + "(x[i]);", o),
            r[n] = r.compile("x", 'if(typeof x !== "object") return ' + e + "(x)\nvar i;\nvar V = numeric." + n + "V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n"));
        for (n = 0; n < r.mathfuns.length; ++n)
            e = r.mathfuns[n],
            delete r.ops1[e];
        for (n in r.mapreducers)
            r.mapreducers.hasOwnProperty(n) && (e = r.mapreducers[n],
            r[n + "V"] = r.mapreduce2(e[0], e[1]),
            r[n] = r.compile("x", "s", "k", e[1] + 'if(typeof x !== "object") {    xi = x;\n' + e[0] + '\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' + n + "V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n" + e[0] + "\n}\nreturn accum;\n"))
    }(),
    r.inv = function(n) {
        var e, t, i, o, a, f, u, c = r.dim(n), s = Math.abs, m = c[0], l = c[1], h = r.clone(n), d = r.identity(m);
        for (f = 0; f < l; ++f) {
            var p = -1
              , y = -1;
            for (a = f; a !== m; ++a)
                (u = s(h[a][f])) > y && (p = a,
                y = u);
            for (t = h[p],
            h[p] = h[f],
            h[f] = t,
            o = d[p],
            d[p] = d[f],
            d[f] = o,
            n = t[f],
            u = f; u !== l; ++u)
                t[u] /= n;
            for (u = l - 1; -1 !== u; --u)
                o[u] /= n;
            for (a = m - 1; -1 !== a; --a)
                if (a !== f) {
                    for (e = h[a],
                    i = d[a],
                    n = e[f],
                    u = f + 1; u !== l; ++u)
                        e[u] -= t[u] * n;
                    for (u = l - 1; u > 0; --u)
                        i[u] -= o[u] * n,
                        i[--u] -= o[u] * n;
                    0 === u && (i[0] -= o[0] * n)
                }
        }
        return d
    }
    ,
    r.det = function(n) {
        var e = r.dim(n);
        if (2 !== e.length || e[0] !== e[1])
            throw new Error("numeric: det() only works on square matrices");
        var t, i, o, a, f, u, c, s, m = e[0], l = 1, h = r.clone(n);
        for (i = 0; i < m - 1; i++) {
            for (o = i,
            t = i + 1; t < m; t++)
                Math.abs(h[t][i]) > Math.abs(h[o][i]) && (o = t);
            for (o !== i && (c = h[o],
            h[o] = h[i],
            h[i] = c,
            l *= -1),
            a = h[i],
            t = i + 1; t < m; t++) {
                for (u = (f = h[t])[i] / a[i],
                o = i + 1; o < m - 1; o += 2)
                    s = o + 1,
                    f[o] -= a[o] * u,
                    f[s] -= a[s] * u;
                o !== m && (f[o] -= a[o] * u)
            }
            if (0 === a[i])
                return 0;
            l *= a[i]
        }
        return l * h[i][i]
    }
    ,
    r.transpose = function(r) {
        var n, e, t, i, o, a = r.length, f = r[0].length, u = Array(f);
        for (e = 0; e < f; e++)
            u[e] = Array(a);
        for (n = a - 1; n >= 1; n -= 2) {
            for (i = r[n],
            t = r[n - 1],
            e = f - 1; e >= 1; --e)
                (o = u[e])[n] = i[e],
                o[n - 1] = t[e],
                (o = u[--e])[n] = i[e],
                o[n - 1] = t[e];
            0 === e && ((o = u[0])[n] = i[0],
            o[n - 1] = t[0])
        }
        if (0 === n) {
            for (t = r[0],
            e = f - 1; e >= 1; --e)
                u[e][0] = t[e],
                u[--e][0] = t[e];
            0 === e && (u[0][0] = t[0])
        }
        return u
    }
    ,
    r.negtranspose = function(r) {
        var n, e, t, i, o, a = r.length, f = r[0].length, u = Array(f);
        for (e = 0; e < f; e++)
            u[e] = Array(a);
        for (n = a - 1; n >= 1; n -= 2) {
            for (i = r[n],
            t = r[n - 1],
            e = f - 1; e >= 1; --e)
                (o = u[e])[n] = -i[e],
                o[n - 1] = -t[e],
                (o = u[--e])[n] = -i[e],
                o[n - 1] = -t[e];
            0 === e && ((o = u[0])[n] = -i[0],
            o[n - 1] = -t[0])
        }
        if (0 === n) {
            for (t = r[0],
            e = f - 1; e >= 1; --e)
                u[e][0] = -t[e],
                u[--e][0] = -t[e];
            0 === e && (u[0][0] = -t[0])
        }
        return u
    }
    ,
    r.norm2 = function(n) {
        return Math.sqrt(r.norm2Squared(n))
    }
    ,
    r.linspace = function(r, n, e) {
        if (void 0 === e && (e = Math.max(Math.round(n - r) + 1, 1)),
        e < 2)
            return 1 === e ? [r] : [];
        var t, i = Array(e);
        for (t = --e; t >= 0; t--)
            i[t] = (t * n + (e - t) * r) / e;
        return i
    }
    ,
    r.getBlock = function(n, e, t) {
        var i = r.dim(n);
        return function r(n, o) {
            var a, f = e[o], u = t[o] - f, c = Array(u);
            if (o === i.length - 1) {
                for (a = u; a >= 0; a--)
                    c[a] = n[a + f];
                return c
            }
            for (a = u; a >= 0; a--)
                c[a] = r(n[a + f], o + 1);
            return c
        }(n, 0)
    }
    ,
    r.setBlock = function(n, e, t, i) {
        var o = r.dim(n);
        return function r(n, i, a) {
            var f, u = e[a], c = t[a] - u;
            if (a === o.length - 1)
                for (f = c; f >= 0; f--)
                    n[f + u] = i[f];
            for (f = c; f >= 0; f--)
                r(n[f + u], i[f], a + 1)
        }(n, i, 0),
        n
    }
    ,
    r.getRange = function(r, n, e) {
        var t, i, o, a, f = n.length, u = e.length, c = Array(f);
        for (t = f - 1; -1 !== t; --t)
            for (c[t] = Array(u),
            o = c[t],
            a = r[n[t]],
            i = u - 1; -1 !== i; --i)
                o[i] = a[e[i]];
        return c
    }
    ,
    r.blockMatrix = function(n) {
        var e = r.dim(n);
        if (e.length < 4)
            return r.blockMatrix([n]);
        var t, i, o, a, f, u = e[0], c = e[1];
        for (t = 0,
        i = 0,
        o = 0; o < u; ++o)
            t += n[o][0].length;
        for (a = 0; a < c; ++a)
            i += n[0][a][0].length;
        var s = Array(t);
        for (o = 0; o < t; ++o)
            s[o] = Array(i);
        var m, l, h, d, p, y = 0;
        for (o = 0; o < u; ++o) {
            for (m = i,
            a = c - 1; -1 !== a; --a)
                for (m -= (f = n[o][a])[0].length,
                h = f.length - 1; -1 !== h; --h)
                    for (p = f[h],
                    l = s[y + h],
                    d = p.length - 1; -1 !== d; --d)
                        l[m + d] = p[d];
            y += n[o][0].length
        }
        return s
    }
    ,
    r.tensor = function(n, e) {
        if ("number" == typeof n || "number" == typeof e)
            return r.mul(n, e);
        var t = r.dim(n)
          , i = r.dim(e);
        if (1 !== t.length || 1 !== i.length)
            throw new Error("numeric: tensor product is only defined for vectors");
        var o, a, f, u, c = t[0], s = i[0], m = Array(c);
        for (a = c - 1; a >= 0; a--) {
            for (o = Array(s),
            u = n[a],
            f = s - 1; f >= 3; --f)
                o[f] = u * e[f],
                o[--f] = u * e[f],
                o[--f] = u * e[f],
                o[--f] = u * e[f];
            for (; f >= 0; )
                o[f] = u * e[f],
                --f;
            m[a] = o
        }
        return m
    }
    ,
    r.epsilon = 2220446049250313e-31,
    r.LU = function(n, e) {
        e = e || !1;
        var t, i, o, a, f, u, c, s, m, l = Math.abs, h = n.length, d = h - 1, p = new Array(h);
        for (e || (n = r.clone(n)),
        o = 0; o < h; ++o) {
            for (c = o,
            m = l((u = n[o])[o]),
            i = o + 1; i < h; ++i)
                m < (a = l(n[i][o])) && (m = a,
                c = i);
            for (p[o] = c,
            c != o && (n[o] = n[c],
            n[c] = u,
            u = n[o]),
            f = u[o],
            t = o + 1; t < h; ++t)
                n[t][o] /= f;
            for (t = o + 1; t < h; ++t) {
                for (s = n[t],
                i = o + 1; i < d; ++i)
                    s[i] -= s[o] * u[i],
                    s[++i] -= s[o] * u[i];
                i === d && (s[i] -= s[o] * u[i])
            }
        }
        return {
            LU: n,
            P: p
        }
    }
    ,
    r.LUsolve = function(n, e) {
        var t, i, o, a, f, u = n.LU, c = u.length, s = r.clone(e), m = n.P;
        for (t = c - 1; -1 !== t; --t)
            s[t] = e[t];
        for (t = 0; t < c; ++t)
            for (o = m[t],
            m[t] !== t && (f = s[t],
            s[t] = s[o],
            s[o] = f),
            a = u[t],
            i = 0; i < t; ++i)
                s[t] -= s[i] * a[i];
        for (t = c - 1; t >= 0; --t) {
            for (a = u[t],
            i = t + 1; i < c; ++i)
                s[t] -= s[i] * a[i];
            s[t] /= a[t]
        }
        return s
    }
    ,
    r.solve = function(n, e, t) {
        return r.LUsolve(r.LU(n, t), e)
    }
    ,
    r
});
define('core/math/qr', ["require", "exports"], function(require, r) {
    "use strict";
    function t(r, t) {
        for (var n = r.length, e = t.length, a = 0, l = 0, h = e - n; h < e; h++)
            a += r[h + n - e] * t[h],
            l += r[h + n - e] * r[h + n - e];
        var o = a / l;
        for (h = e - n; h < e; h++)
            t[h] = 2 * o * r[h + n - e] - t[h]
    }
    function n(r, t, n) {
        for (var e = r.length, a = t.length, l = 0, h = 0, o = a - e; o < a; o++)
            l += r[o + e - a] * t[o][n],
            h += r[o + e - a] * r[o + e - a];
        var f = l / h;
        for (o = a - e; o < a; o++)
            t[o][n] = 2 * f * r[o + e - a] - t[o][n]
    }
    function e(r, t, n, e) {
        var a = Array(r.length - t);
        if (1 === a.length)
            return a[0] = 1,
            a;
        if (0 === e) {
            a[0] = 1;
            for (var l = 1; l < a.length; l++)
                a[l] = 0;
            return a
        }
        var h = r[t][n] < 0 ? -1 : 1;
        a[0] = r[t][n] + h * Math.sqrt(e);
        for (var o = t + 1; o < r.length; o++)
            a[o - t] = r[o][n];
        return a
    }
    function a(r, t, n) {
        for (var e = 0; t < r.length; t++)
            e += r[t][n] * r[t][n];
        return e
    }
    function l(r, n, e) {
        for (var a = r.reflectors, l = r.r, h = r.p, o = n.slice(), f = 0; f < a.length; f++)
            t(a[f], o);
        for (f = a.length; f < l[0].length; f++)
            o[f] = 0;
        o.length = l[0].length;
        var g = Math.pow(2, -52)
          , i = e.regularize ? g * Math.abs(l[0][0]) * Math.max(l.length, l[0].length) : 0;
        for (f = a.length - 1; f >= 0; f--) {
            var u = l[f];
            if (Math.abs(u[f]) <= i)
                o[f] = 0;
            else {
                for (var v = f + 1; v < a.length; v++)
                    o[f] -= o[v] * u[v];
                o[f] /= u[f]
            }
        }
        for (f = h.length - 1; f >= 0; f--)
            if (h[f] !== f) {
                var c = o[f];
                o[f] = o[h[f]],
                o[h[f]] = c
            }
        return o
    }
    function h(r) {
        var t = r.r
          , n = Math.min(t.length, t[0].length)
          , e = t[0][0]
          , a = t[n - 1][n - 1];
        return 0 === e ? 1 / 0 : Math.abs(e / a)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.isNumericallyFullRank = r.conditionNumber = r.qrSolve = r.qr = void 0,
    r.qr = function(r, t) {
        if (!t || !t.mutateInput) {
            var l = r;
            r = Array(r.length);
            for (var h = 0; h < l.length; h++)
                r[h] = l[h].slice()
        }
        for (var o = Math.min(r.length, r[0].length), f = Array(o), g = [], i = 0; i < o; i++) {
            for (var u = -1 / 0, v = i, c = i; c < r[i].length; c++) {
                var s = a(r, i, c);
                s > u && (u = s,
                v = c)
            }
            if (f[i] = v,
            v !== i)
                for (h = 0; h < r.length; h++) {
                    var y = r[h][v];
                    r[h][v] = r[h][i],
                    r[h][i] = y
                }
            var M = e(r, i, i, u);
            for (c = i; c < r[i].length; c++)
                n(M, r, c);
            g.push(M)
        }
        return {
            reflectors: g,
            r: r,
            p: f
        }
    }
    ,
    r.qrSolve = function(r, t, n) {
        return Array.isArray(t[0]) ? function(r, t, n) {
            for (var e = Array(r.r[0].length), a = 0; a < e.length; a++)
                e[a] = Array(t[0].length);
            for (var h = Array(t.length), o = 0; o < t[0].length; o++) {
                for (a = 0; a < t.length; a++)
                    h[a] = t[a][o];
                var f = l(r, h, n);
                for (a = 0; a < f.length; a++)
                    e[a][o] = f[a]
            }
            return e
        }(r, t, n) : l(r, t, n)
    }
    ,
    r.conditionNumber = h,
    r.isNumericallyFullRank = function(r) {
        var t = Math.pow(2, -52);
        return Math.max(r.r.length, r.r[0].length) * t * h(r) < 1
    }
});
define('core/math/least-squares', ["require", "exports", "numeric", "core/math/distance", "./qr"], function(require, r, e, n, t) {
    "use strict";
    function a(r, e) {
        for (var n = [], t = 0; t < e; t++)
            n.push(r);
        return n
    }
    function i(r, e) {
        for (var n = o(r, e), t = 0, a = 0, i = n; a < i.length; a++) {
            var u = i[a];
            t += u * u
        }
        return t / n.length
    }
    function o(r, e) {
        return r.apply(void 0, e)
    }
    function u(r, e) {
        for (var n = [], t = 0, a = r; t < a.length; t++) {
            var i = a[t].apply(void 0, e);
            n.push(i)
        }
        return n
    }
    function s(r, e) {
        for (var n = [], t = 0; t < r.length; t++)
            e[t] && n.push(r[t]);
        return n
    }
    function l(r, e, n) {
        for (var t = [], a = 0, i = 0; a < r.length; a++) {
            var o = 0;
            n[a] && (o = e[i],
            i += 1),
            t.push(r[a] + o)
        }
        return t
    }
    function v(r, n, v, f) {
        var S, p = f.maxIterations, g = f.linearSubset || a(!1, v.length), h = e.not(g), d = s(n, g), M = s(n, h), c = v, E = 0, m = .001;
        if (e.any(g)) {
            S = {
                Jv: G = e.transpose(u(d, c)),
                F: N = t.qr(G)
            };
            var q = o(r, c);
            c = l(c, e.neg(t.qrSolve(N, q, {
                regularize: !0
            })), g)
        }
        for (var b = !1, x = i(r, c); E < p && !b && isFinite(x); ) {
            q = o(r, c);
            var y = u(M, c)
              , z = e.transpose(y)
              , I = void 0
              , F = void 0;
            if (S) {
                var N = S.F
                  , G = S.Jv;
                I = e.dot(y, e.sub(q, e.dot(G, t.qrSolve(N, q, {
                    regularize: !0
                })))),
                F = e.dot(y, e.sub(z, e.dot(G, t.qrSolve(N, z, {
                    regularize: !0
                }))))
            } else
                I = e.dot(y, q),
                F = e.dot(y, z);
            for (var L = c, J = !1; E < p && !b && !J; ) {
                E += 1;
                var O = e.add(F, e.diag(a(m, M.length)));
                L = l(c, e.neg(e.solve(O, I, !0)), h),
                b = e.all(e.eq(L, c));
                var P = void 0;
                if (S) {
                    P = {
                        Jv: G = e.transpose(u(d, L)),
                        F: N = t.qr(G)
                    };
                    var R = o(r, L);
                    L = l(L, e.neg(t.qrSolve(N, R, {
                        regularize: !0
                    })), g)
                }
                var k = i(r, L);
                (J = k < x) ? (c = L,
                x = k,
                S = P,
                m *= .1) : (m = Math.max(m, 1e-64),
                m *= 2)
            }
        }
        return {
            solution: c,
            MSE: x
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.testOnlyExports = r.optimizeNonLinear = r.optimizeLinear = r.tryRoundingSmallParametersToZero = r.evaluateMeanSquare = void 0,
    r.evaluateMeanSquare = i,
    r.tryRoundingSmallParametersToZero = function(r, e) {
        var n = e.solution.map(function(r) {
            return Math.abs(r) < 1e-6 ? 0 : r
        })
          , t = i(r, n);
        return isFinite(e.MSE) && !isFinite(e.MSE) || t < e.MSE || e.MSE !== e.MSE + Math.pow(.5, 8) * (t - e.MSE) ? e : {
            solution: n,
            MSE: t
        }
    }
    ,
    r.optimizeLinear = function(r, n) {
        for (var s = a(0, n.length), l = u(n, s), v = t.qr(e.transpose(l), {
            mutateInput: !0
        }), f = 0; f < 2; f++) {
            var S = o(r, s)
              , p = e.neg(t.qrSolve(v, S, {
                regularize: !1
            }));
            s = e.add(s, p)
        }
        var g = i(r, s);
        if (t.isNumericallyFullRank(v))
            return {
                solution: s,
                MSE: g
            };
        var h = a(0, n.length);
        for (f = 0; f < 2; f++) {
            S = o(r, h),
            p = e.neg(t.qrSolve(v, S, {
                regularize: !0
            }));
            h = e.add(h, p)
        }
        var d = i(r, h);
        return .999 * d <= g ? {
            solution: h,
            MSE: d
        } : {
            solution: s,
            MSE: g
        }
    }
    ;
    var f = [18.9, .105, .0113, .089, 4.414, .373, .06, .149, 1.84, 9.26, 5, .7, .2, 1.13, 2.61, 1, .007, 30, 120, 1500, 4e-4, 7.23, -1, -.0081, -.03, -28.6, -1.71, -.4, -6.94, -.777, -500]
      , S = function(r) {
        for (var e = [], n = 0; n < f.length; n++) {
            for (var t = [], a = 0; a < r; a++)
                t[a] = 0 === n && 1 !== r ? 0 : 1 === n && 1 !== r ? 1 : f[503 * (n * r + a) % f.length];
            e.push(t)
        }
        return e
    }
      , p = function(r, e, n, t, a) {
        for (var i = [], o = 0, u = n; o < u.length; o++) {
            var s = u[o];
            i.push({
                soln: v(r, e, s, a),
                initialGuess: s
            })
        }
        i.sort(function(r, e) {
            return isNaN(r.soln.MSE) ? 1 : isNaN(e.soln.MSE) ? -1 : r.soln.MSE - e.soln.MSE
        });
        for (var l = [], f = 0; f < t; f++)
            l.push(i[f].initialGuess);
        return l
    };
    function g(r, e, n, t) {
        if (!e)
            return r;
        if ("known" !== e.type)
            return r;
        var a = e.bounds;
        return a[0] === -1 / 0 && a[1] === 1 / 0 ? r : a[0] === -1 / 0 ? a[1] - Math.exp(-r) : a[1] === 1 / 0 ? a[0] + Math.exp(r) : n / (t - 1) * a[1] + (t - 1 - n) / (t - 1) * a[0]
    }
    var h = [3, 5, 7, 11, 13, 17, 19];
    function d(r, e) {
        for (var n = [], t = 0; t < r.length; t++) {
            for (var a = r[t], i = [], o = 0; o < a.length; o++) {
                var u = h[o % h.length] * t % r.length;
                i.push(g(a[o], e[o], u, r.length))
            }
            n.push(i)
        }
        return n
    }
    r.optimizeNonLinear = function(r, e, t) {
        t || (t = {});
        var a = t.linearSubset
          , i = t.bounds
          , o = t.preferredInitialGuess
          , u = S(e.length);
        i && (u = d(u, i));
        var s = p(r, e, u, 5, {
            maxIterations: 3,
            linearSubset: a
        })
          , l = v(r, e, p(r, e, s, 1, {
            maxIterations: 60,
            linearSubset: a
        })[0], {
            maxIterations: 250,
            linearSubset: a
        });
        if (!o)
            return l;
        var f = v(r, e, o, {
            maxIterations: 100,
            linearSubset: a
        });
        return isFinite(f.MSE) && (f.MSE < l.MSE || n.approx(f.MSE, l.MSE, 8)) ? f : l
    }
    ,
    r.testOnlyExports = {
        generateInitialGuesses: S,
        mapInitialGuesses: d
    }
});
define('core/math/ir/features/reparameterize-regression', ["require", "exports", "core/math/builtin", "../opcodes", "core/math/types", "../instructions", "./is-constant", "./as-value", "./polynomial-order", "./get-polynomial-coefficients", "./copy-instruction", "core/math/maybe-rational", "./list-length"], function(require, e, r, t, a, n, i, s, o, u, c, l, v) {
    "use strict";
    function p(e) {
        return {
            chunk: e,
            isLazy: !0
        }
    }
    function f(e) {
        return e.slice()
    }
    function h(e) {
        if (!e.isLazy)
            return e;
        var r = e.chunk.copy();
        return r.reopenFinalBlock(),
        {
            chunk: r,
            forwardParameterMap: f,
            reverseParameterMap: f,
            isLazy: !1,
            valueMap: F(e.chunk.instructionsLength()),
            replacementMask: N(e.chunk.argNames.length)
        }
    }
    function d(e) {
        var r = e.chunk
          , t = e.forwardParameterMap
          , a = e.reverseParameterMap
          , n = e.isLazy
          , i = e.valueMap
          , s = e.replacementMask
          , o = e.didShiftScale;
        return {
            chunk: r.copy(),
            forwardParameterMap: t,
            reverseParameterMap: a,
            isLazy: n,
            valueMap: i.slice(),
            replacementMask: s.slice(),
            didShiftScale: o
        }
    }
    function g(e) {
        for (var r = 1 / 0, t = -1 / 0, a = e.length, n = 0, i = e; n < i.length; n++) {
            var s = i[n];
            r = Math.min(r, s),
            t = Math.max(t, s)
        }
        return {
            min: r,
            max: t,
            length: a
        }
    }
    function m(e, r, t, a) {
        if (void 0 !== t) {
            var i = e.getInstruction(a);
            if (n.isLeafInstruction(i))
                for (var s = 0, o = t; s < o.length; s++) {
                    (v = o[s]).valueMap[a] = a
                }
            else
                for (var u = 0, l = t; u < l.length; u++) {
                    for (var v, p = (v = l[u]).chunk, f = v.valueMap, h = [], d = 0, g = 0, m = i.args; g < m.length; g++) {
                        var M = m[g];
                        if (f[M] !== M) {
                            if ((d += 1) > 1)
                                return void (t.length = 0)
                        } else
                            for (var y = r[M], k = 0; k < y.length; k++)
                                if (y[k] && v.replacementMask[k])
                                    return void (t.length = 0);
                        h.push(f[M])
                    }
                    f[a] = d > 0 ? c.copyInstructionWithArgs(p, i, h) : a
                }
        }
    }
    function M(e, r) {
        for (var t, a = e.listAccessDependencyTable, n = e.listAccesses, i = e.listStatisticsTable, s = a[r], o = 0; o < s.length; o++)
            if (s[o]) {
                if (t)
                    return;
                t = {
                    listAccessIndex: n[o],
                    listStatistics: i[o]
                }
            }
        return t
    }
    function y(e, r) {
        for (var t = 0, a = e.listAccessDependencyTable[r]; t < a.length; t++) {
            if (a[t])
                return !0
        }
        return !1
    }
    function k(e, r) {
        for (var a, n = [], i = 0; i <= r; i++) {
            if (e.getInstruction(i).type === t.LoadArg) {
                var s = N(e.argNames.length);
                s[i] = !0,
                n.push(s)
            } else
                n.push(L(e, n, e.argNames.length, i))
        }
        var o = n[r];
        for (i = 0; i < o.length; i++)
            if (o[i]) {
                if (void 0 !== a)
                    return;
                a = i
            }
        return a
    }
    function x(e, a, n, i, s) {
        var o = e.chunk
          , u = k(o, n);
        if (void 0 !== u) {
            var c = w(e, n, u);
            if (void 0 !== c) {
                var l = o.getInstruction(i)
                  , v = l.args[0];
                if (void 0 !== (c = b(c, v, s))) {
                    var p = c.chunk
                      , f = c.valueMap
                      , h = p.getInstruction(f[v]);
                    if (h.type === t.Add) {
                        var d = h.args[1]
                          , g = p.getInstruction(h.args[0]);
                        if (g.type === t.Multiply) {
                            var m = g.args
                              , M = m[0]
                              , y = m[1]
                              , x = u
                              , P = d
                              , C = M
                              , I = y
                              , L = p.Multiply([C, I])
                              , N = p.SyntheticNativeFunction("cos", [L])
                              , F = p.SyntheticNativeFunction("sin", [L])
                              , S = "sin" === l.symbol ? p.Add([p.Multiply([x, F]), p.Multiply([P, N])]) : p.Subtract([p.Multiply([x, N]), p.Multiply([P, F])]);
                            f[a] = S;
                            var A = c.replacementMask.slice();
                            return A[u] = !0,
                            A[M] = !0,
                            A[d] = !0,
                            {
                                chunk: p,
                                forwardParameterMap: function(e) {
                                    var r = c.forwardParameterMap(e)
                                      , t = r[u]
                                      , a = r[d]
                                      , n = t * Math.cos(a)
                                      , i = t * Math.sin(a);
                                    return r[u] = n,
                                    r[d] = i,
                                    r
                                },
                                reverseParameterMap: function(e) {
                                    var t = e.slice()
                                      , a = e[u]
                                      , n = e[d]
                                      , i = r.hypot(a, n)
                                      , s = Math.atan2(n, a);
                                    return t[u] = i,
                                    t[d] = s,
                                    c.reverseParameterMap(t)
                                },
                                valueMap: f,
                                replacementMask: A,
                                isLazy: !1
                            }
                        }
                    }
                }
            }
        }
    }
    function P(e, r, n, i) {
        var s = e.chunk
          , o = s.getInstruction(r).args
          , u = o[0]
          , c = o[1]
          , v = s.getInstruction(u);
        if (v.type === t.Constant && v.valueType === a.Number && l.asFloat(v.value) > 0) {
            var p = h(e)
              , f = p.chunk
              , d = p.valueMap
              , g = f.Multiply([f.SyntheticNativeFunction("ln", [d[u]]), d[c]]);
            return d[c] = g,
            d[r] = f.SyntheticNativeFunction("exp", [g]),
            I(p, r, c, n, i) || p
        }
        var m = k(s, u);
        if (void 0 !== m) {
            var M = w(e, u, m);
            if (void 0 !== M) {
                var y = M.chunk
                  , x = M.valueMap
                  , P = y.Multiply([x[u], x[c]]);
                x[c] = P,
                x[r] = y.SyntheticNativeFunction("exp", [P]);
                var C = M.replacementMask.slice();
                C[m] = !0;
                var b = {
                    chunk: y,
                    forwardParameterMap: function(e) {
                        var r = M.forwardParameterMap(e)
                          , t = r[m]
                          , a = Math.log(t);
                        return r[m] = a,
                        r
                    },
                    reverseParameterMap: function(e) {
                        var r = e.slice()
                          , t = r[m]
                          , a = Math.exp(t);
                        return r[m] = a,
                        M.reverseParameterMap(r)
                    },
                    isLazy: !1,
                    valueMap: x,
                    replacementMask: C
                };
                return I(b, r, c, n, i) || b
            }
        }
    }
    function C(e, r, t, a, n, i) {
        if (e.isLazy || !e.didShiftScale) {
            var s = e.isLazy ? e : d(e)
              , o = k(e.chunk, t);
            if (void 0 !== o) {
                var u = w(e, t, o);
                if (void 0 !== u) {
                    var c = u.chunk
                      , l = u.valueMap
                      , v = c.getInstruction(l[a]).args[0]
                      , p = c.Add([v, l[t]]);
                    l[t] = p,
                    l[r] = c.SyntheticNativeFunction("exp", [p]);
                    var f = u.replacementMask.slice();
                    f[o] = !0;
                    var g = h(s);
                    g.valueMap[r] = g.chunk.Multiply([g.valueMap[t], g.valueMap[a]]);
                    var m = {
                        chunk: c,
                        forwardParameterMap: function(e) {
                            var r = u.forwardParameterMap(e)
                              , t = r[o]
                              , a = Math.log(t);
                            return r[o] = a,
                            r
                        },
                        reverseParameterMap: function(e) {
                            var r = e.slice()
                              , t = r[o]
                              , a = Math.exp(t);
                            return r[o] = a,
                            u.reverseParameterMap(r)
                        },
                        isLazy: !1,
                        valueMap: l,
                        replacementMask: f
                    }
                      , M = d(m);
                    return M.forwardParameterMap = function(e) {
                        var r = u.forwardParameterMap(e)
                          , t = r[o]
                          , a = Math.log(-t);
                        return r[o] = a,
                        r
                    }
                    ,
                    M.reverseParameterMap = function(e) {
                        var r = e.slice()
                          , t = r[o]
                          , a = -Math.exp(t);
                        return r[o] = a,
                        u.reverseParameterMap(r)
                    }
                    ,
                    m = I(m, r, t, n, i) || m,
                    (M = I(M, r, t, n, i) || M).valueMap[r] = M.chunk.Negative([M.valueMap[r]]),
                    [g, m, M]
                }
            }
        }
    }
    function I(e, r, a, n, i) {
        var s = function(e, r, a, n) {
            var i = b(e, r, a);
            if (void 0 === i)
                return;
            var s = i.chunk
              , o = i.valueMap
              , u = s.getInstruction(o[r]);
            if (u.type !== t.Add)
                return;
            var c = u.args[1]
              , l = s.getInstruction(u.args[0]);
            if (l.type !== t.Multiply)
                return;
            var v = l.args
              , p = v[0]
              , f = v[1]
              , h = n.min
              , d = n.max
              , g = d - h
              , m = .5 * (d + h)
              , M = s.Divide([s.Subtract([f, s.Constant(m)]), s.Constant(g)])
              , y = s.Add([s.Multiply([p, M]), c]);
            function k(e) {
                var r = i.forwardParameterMap(e)
                  , t = r[p]
                  , a = r[c]
                  , n = t * g
                  , s = a + m * t;
                return r[p] = n,
                r[c] = s,
                r
            }
            function x(e) {
                var r = e.slice()
                  , t = e[p]
                  , a = e[c]
                  , n = t / g
                  , s = a - n * m;
                return r[p] = n,
                r[c] = s,
                i.reverseParameterMap(r)
            }
            return o[r] = y,
            {
                chunk: s,
                forwardParameterMap: k,
                reverseParameterMap: x,
                isLazy: !1,
                valueMap: o,
                replacementMask: i.replacementMask,
                didShiftScale: !0
            }
        }(e, a, n, i);
        if (void 0 !== s)
            return s.valueMap[r] = s.chunk.SyntheticNativeFunction("exp", [s.valueMap[a]]),
            s
    }
    function w(e, r, n) {
        var i = e.chunk
          , s = o.polynomialOrderContext(i, n, {
            allowRestriction: !1,
            allowClosedBlockReferences: !1
        });
        if (1 === o.instructionOrder(s, r)) {
            var c = u.polynomialCoefficientContext(s)
              , v = u.instructionCoefficients(c, r)
              , p = v[0]
              , f = v[1];
            if (void 0 !== f) {
                var d = c.newChunk.getInstruction(p);
                if (d.type === t.Constant && d.valueType === a.Number) {
                    var g = c.newChunk.getInstruction(f);
                    if (g.type === t.Constant && g.valueType === a.Number) {
                        var m = h(e)
                          , M = m.chunk
                          , y = m.valueMap
                          , k = l.asFloat(d.value)
                          , x = l.asFloat(g.value);
                        y[r] = n;
                        var P = m.replacementMask.slice();
                        return P[n] = !0,
                        {
                            chunk: M,
                            forwardParameterMap: function(e) {
                                var r = m.forwardParameterMap(e)
                                  , t = r[n]
                                  , a = k + x * t;
                                return r[n] = a,
                                r
                            },
                            reverseParameterMap: function(e) {
                                var r = e.slice()
                                  , t = (r[n] - k) / x;
                                return r[n] = t,
                                m.reverseParameterMap(r)
                            },
                            isLazy: !1,
                            valueMap: y,
                            replacementMask: P
                        }
                    }
                }
            }
        }
    }
    function b(e, r, n) {
        var i = e.chunk
          , s = e.isLazy ? r : e.valueMap[r]
          , c = o.polynomialOrderContext(i, n, {
            allowRestriction: !1,
            allowClosedBlockReferences: !0
        });
        if (1 === o.instructionOrder(c, s)) {
            e.isLazy && (c = o.polynomialOrderContext(i.copy().reopenFinalBlock(), n, {
                allowRestriction: !1,
                allowClosedBlockReferences: !1
            }));
            var v = u.polynomialCoefficientContext(c)
              , p = u.instructionCoefficients(v, s)
              , f = p[0]
              , d = p[1];
            if (void 0 !== d) {
                for (var g, m, M = v.newChunk, y = Math.max(d, f), k = [], x = 0; x <= y; x++) {
                    if (M.getInstruction(x).type === t.LoadArg) {
                        var P = N(M.argNames.length);
                        P[x] = !0,
                        k.push(P)
                    } else
                        k.push(L(M, k, M.argNames.length, x))
                }
                for (x = 0; x < i.argNames.length; x++)
                    if (k[d][x]) {
                        if (void 0 !== g)
                            return;
                        g = x
                    } else if (k[f][x]) {
                        if (void 0 !== m)
                            return;
                        m = x
                    }
                if (void 0 !== g && void 0 !== m) {
                    var C = o.polynomialOrderContext(M, g, {
                        allowRestriction: !1,
                        allowClosedBlockReferences: !1
                    });
                    if (1 === o.instructionOrder(C, d)) {
                        var I = o.polynomialOrderContext(M, m, {
                            allowRestriction: !1,
                            allowClosedBlockReferences: !1
                        });
                        if (1 === o.instructionOrder(I, f)) {
                            var w = u.polynomialCoefficientContext(C)
                              , b = u.polynomialCoefficientContext(I)
                              , F = u.instructionCoefficients(w, d)
                              , S = F[0]
                              , A = F[1]
                              , z = w.newChunk.getInstruction(S);
                            if (z.type === t.Constant && z.valueType === a.Number) {
                                var R = w.newChunk.getInstruction(A);
                                if (R.type === t.Constant && R.valueType === a.Number) {
                                    var O = h(e)
                                      , T = O.chunk
                                      , B = O.valueMap
                                      , D = T.Add([T.Multiply([g, n]), m]);
                                    B[r] = D;
                                    var E = M.copy();
                                    E.List([d, f]);
                                    var _ = E.close().getCompiledFunction().fn
                                      , j = l.asFloat(z.value)
                                      , q = l.asFloat(R.value)
                                      , V = u.instructionCoefficients(b, f)
                                      , W = V[0]
                                      , G = V[1]
                                      , H = b.newChunk.copy();
                                    H.List([W, G]);
                                    var J = H.close().getCompiledFunction().fn
                                      , K = O.replacementMask.slice();
                                    return K[g] = !0,
                                    K[m] = !0,
                                    {
                                        chunk: T,
                                        forwardParameterMap: function(e) {
                                            var r = O.forwardParameterMap(e)
                                              , t = _.apply(null, r)
                                              , a = t[0]
                                              , n = t[1];
                                            return r[g] = a,
                                            r[m] = n,
                                            r
                                        },
                                        reverseParameterMap: function(e) {
                                            var r = e.slice()
                                              , t = e[g]
                                              , a = e[m]
                                              , n = (t - j) / q
                                              , i = e.slice();
                                            i[g] = n,
                                            i.splice(m, 1);
                                            var s = J.apply(null, i)
                                              , o = (a - s[0]) / s[1];
                                            return r[g] = n,
                                            r[m] = o,
                                            O.reverseParameterMap(r)
                                        },
                                        isLazy: !1,
                                        valueMap: B,
                                        replacementMask: K
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function L(e, r, t, a) {
        var i = e.getInstruction(a)
          , s = N(t);
        if (n.isLeafInstruction(i))
            return s;
        for (var o = 0, u = i.args; o < u.length; o++)
            for (var c = r[u[o]], l = 0; l < c.length; l++)
                s[l] = s[l] || c[l];
        return s
    }
    function N(e) {
        for (var r = [], t = 0; t < e; t++)
            r.push(!1);
        return r
    }
    function F(e) {
        for (var r = [], t = 0; t < e; t++)
            r.push(t);
        return r
    }
    function S(e) {
        return e.type === t.NativeFunction && ("sin" === e.symbol || "cos" === e.symbol)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.reparameterizeRegression = void 0,
    e.reparameterizeRegression = function(e) {
        var r = e.getInstruction(e.returnIndex);
        if (r.type === t.BroadcastResult) {
            var o = r.args[0]
              , u = e.returnIndex - o
              , c = e.getInstruction(o);
            if (2 === c.args.length) {
                var l = c.args[0]
                  , f = c.args[u]
                  , h = []
                  , d = [];
                h.push(l),
                d.push({
                    min: 1,
                    max: v.assertConstantListLength(e, e.returnIndex, "Programming error: cannot optimize regression on non-constant-length list"),
                    length: v.assertConstantListLength(e, e.returnIndex, "Programming error: cannot optimize regression on non-constant-length list")
                });
                for (var k = !1, w = !1, b = l + 1; b <= f; b++) {
                    if ((D = e.getInstruction(b)).type === t.ListAccess || D.type === t.InboundsListAccess || D.type === t.DeferredListAccess) {
                        if (D.args[1] !== l)
                            continue;
                        var F = D.args[0];
                        if (e.getInstruction(F).valueType !== a.ListOfNumber)
                            continue;
                        if (!i.isConstant(e.getInstruction(F)))
                            continue;
                        var A = g(s.asValue(e, F));
                        if (!isFinite(A.min) || !isFinite(A.max))
                            continue;
                        h.push(b),
                        d.push(A)
                    } else if (D.type === t.NativeFunction)
                        "exp" === D.symbol ? w = !0 : S(D) && (k = !0);
                    else if (D.type === t.Exponent || D.type === t.RawExponent)
                        w = !0;
                    else if (n.beginsBlock(D) || n.endsBlock(D))
                        return
                }
                if (0 !== h.length && (w || k)) {
                    var z = [];
                    for (b = 0; b <= f; b++) {
                        if (-1 !== (ie = h.indexOf(b)))
                            (O = N(h.length))[ie] = !0,
                            z.push(O);
                        else
                            z.push(L(e, z, h.length, b))
                    }
                    var R = [];
                    for (b = 0; b <= e.returnIndex; b++) {
                        var O;
                        if ((D = e.getInstruction(b)).type === t.LoadArg)
                            (O = N(e.argNames.length))[b] = !0,
                            R.push(O);
                        else
                            R.push(L(e, R, e.argNames.length, b))
                    }
                    var T = {
                        listAccessDependencyTable: z,
                        listAccesses: h,
                        listStatisticsTable: d
                    }
                      , B = void 0;
                    for (b = l + 1; b <= e.returnIndex; b++) {
                        var D;
                        switch ((D = e.getInstruction(b)).type) {
                        case t.NativeFunction:
                            if ("exp" === D.symbol) {
                                var E = D.args[0]
                                  , _ = M(T, E);
                                if (void 0 === _) {
                                    m(e, R, B, b);
                                    break
                                }
                                var j = _.listStatistics
                                  , q = _.listAccessIndex;
                                (ve = I(p(e), b, E, q, j)) ? B = [ve] : m(e, R, B, b)
                            }
                            break;
                        case t.Exponent:
                        case t.RawExponent:
                            var V = D.args
                              , W = V[0]
                              , G = M(T, V[1]);
                            if (void 0 === G || y(T, W)) {
                                m(e, R, B, b);
                                break
                            }
                            var H = G.listStatistics
                              , J = G.listAccessIndex;
                            (ve = P(p(e), b, J, H)) ? B = [ve] : m(e, R, B, b);
                            break;
                        case t.Multiply:
                            if (B && B.length > 1) {
                                m(e, R, B, b);
                                break
                            }
                            var K = B && B.length > 0 ? B[0] : p(e)
                              , Q = D.args
                              , U = Q[0]
                              , X = Q[1]
                              , Y = K.isLazy ? U : K.valueMap[U]
                              , Z = K.isLazy ? X : K.valueMap[X]
                              , $ = K.chunk.getInstruction(Y)
                              , ee = K.chunk.getInstruction(Z)
                              , re = void 0
                              , te = void 0
                              , ae = void 0;
                            if ($.type === t.NativeFunction)
                                re = U,
                                ae = $,
                                te = X;
                            else {
                                if (ee.type !== t.NativeFunction) {
                                    m(e, R, B, b);
                                    break
                                }
                                re = X,
                                ae = ee,
                                te = U
                            }
                            var ne = M(T, re);
                            if (void 0 === ne || y(T, te)) {
                                m(e, R, B, b);
                                break
                            }
                            var ie = ne.listAccessIndex
                              , se = ne.listStatistics;
                            if ("exp" === ae.symbol) {
                                var oe = C(K, b, te, re, ie, se);
                                if (oe) {
                                    B = oe;
                                    break
                                }
                            } else if (S(ae)) {
                                if (ve = x(K, b, te, re, ie)) {
                                    B = [ve];
                                    break
                                }
                            }
                            m(e, R, B, b);
                            break;
                        default:
                            m(e, R, B, b)
                        }
                    }
                    if (void 0 !== B && 0 !== B.length) {
                        for (var ue = [], ce = 0, le = B; ce < le.length; ce++) {
                            var ve = le[ce];
                            ue.push({
                                chunk: ve.chunk.close(),
                                forwardParameterMap: ve.forwardParameterMap,
                                reverseParameterMap: ve.reverseParameterMap
                            })
                        }
                        return ue
                    }
                }
            }
        }
    }
});
define('core/math/parsenode-from-value', ["require", "exports", "parsenodes", "core/math/types"], function(require, e, r, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.parseNodeFromValue = void 0,
    e.parseNodeFromValue = function e(t, s) {
        switch (t) {
        case o.Number:
        case o.Bool:
            return r.Constant(s);
        case o.SeedType:
            return r.Seed(s);
        case o.Point:
            return r.ParenSeq([e(o.Number, s[0]), e(o.Number, s[1])]);
        case o.RGBColor:
            return r.FunctionCall("rgb", [e(o.Number, s[0]), e(o.Number, s[1]), e(o.Number, s[2])]);
        case o.EmptyList:
        case o.ListOfNumber:
        case o.ListOfBool:
        case o.ListOfPoint:
        case o.ListOfColor:
        case o.ListOfPolygon:
        case o.ErrorType:
            for (var n = [], a = o.elementType(t), i = 0, c = s; i < c.length; i++) {
                var u = c[i];
                n.push(e(a, u))
            }
            return r.List(n);
        case o.Polygon:
            return r.FunctionCall("\\polygon", [e(o.ListOfPoint, s)]);
        case o.Any:
        case o.Distribution:
        case o.ListOfAny:
        case o.ListOfDistribution:
        case o.Action:
            throw new Error("Programming error: cannot create parse node from valueType: " + o.repr(t));
        default:
            var l = t;
            throw new Error("Programming error: unexpected valueType: " + o.repr(l))
        }
    }
});
define('core/math/ir/features/optimize-regression', ["require", "exports", "parsenodes", "core/math/builtin", "core/math/parsenode/irexpression", "tslib", "core/math/errormsg", "core/math/distance", "core/lib/label", "core/math/types", "core/math/least-squares", "./reparameterize-regression", "core/math/ir/build-ir", "../../parsenode-from-value"], function(require, e, r, i, n, t, a, s, o, u, l, f, p, d) {
    "use strict";
    function v(e, r, i) {
        for (var n, t, a = e.policy, s = e.frame, o = 0, l = r._rhs.getDependencies(); o < l.length; o++) {
            var f = l[o];
            if (!i.hasOwnProperty(f)) {
                var p = s[f];
                if (p && ("Assignment" === p.type && (p = p._expression),
                p.buildIRExpression)) {
                    var d = p.buildIRExpression(a, s);
                    if (!d.isError && d.valueType === u.ListOfNumber) {
                        if (void 0 !== n) {
                            n = void 0,
                            t = void 0;
                            break
                        }
                        0 === d.getDependencies().length && (n = f,
                        t = d)
                    }
                }
            }
        }
        var v = Object.create(s);
        void 0 !== n && (v[n] = void 0);
        var c = r._rhs.buildIRExpression(a, v)
          , g = Object.create(v);
        for (var m in i)
            g[m] = i[m];
        var h = r._rhs.buildIRExpression(a, g);
        return t ? {
            node: c,
            substituted: h,
            listNode: t,
            isValid: !0
        } : {
            node: c,
            substituted: h,
            listNode: t,
            isValid: !1
        }
    }
    function c(e, r) {
        var i = r.getDependencies()
          , n = r.getCompiledFunction(i).fn;
        if (i.length) {
            for (var a = r.findLinearSubset(i), s = a.every(function(e) {
                return e
            }), o = [], u = 0, f = i; u < f.length; u++) {
                var p = f[u];
                o.push(r.takeDerivative(p).getCompiledFunction(i).fn)
            }
            if (s)
                return t.__assign(t.__assign({}, l.tryRoundingSmallParametersToZero(n, l.optimizeLinear(n, o))), {
                    isLinear: s
                });
            for (var d = [], v = 0, c = i; v < c.length; v++) {
                p = c[v];
                d.push(r.boundDomain(p))
            }
            var g = {
                linearSubset: a,
                bounds: d,
                preferredInitialGuess: e
            };
            return t.__assign(t.__assign({}, l.tryRoundingSmallParametersToZero(n, l.optimizeNonLinear(n, o, g))), {
                isLinear: s
            })
        }
        return {
            solution: [],
            MSE: l.evaluateMeanSquare(n, []),
            isLinear: !0
        }
    }
    function g(e, i) {
        for (var n = {}, t = i.getDependencies(), a = 0; a < t.length; a++)
            n[t[a]] = r.Constant(e[a]);
        return n
    }
    function m(e, n, t, o, f, p) {
        if (o.getDependencies().length)
            throw a.optimizationError();
        var d = function(e) {
            var r = 0;
            return e.eachElement(function(e) {
                var i = +e.asValue();
                r += i * i
            }),
            r / e.length
        }(o);
        if (!isFinite(d))
            throw a.optimizationError();
        if (n.getDependencies().length > 0)
            return {
                RMSE: Math.sqrt(d)
            };
        var v = u.isList(n.valueType) ? i.varp(n.asValue()) : 0;
        if (n.getDependencies().length || !isFinite(v) || v <= 0 || !e.isLhsSimple)
            return {
                RMSE: Math.sqrt(d)
            };
        var c = 1 - d / v;
        if (t.isValid) {
            var g = []
              , m = []
              , h = f && (p === L.LINLOG || p === L.LOGLOG);
            r.List.eachArgs([t.listNode, n], function(e) {
                g.push(h ? Math.log(+e[0].asValue()) : +e[0].asValue()),
                m.push(+e[1].asValue())
            });
            var E = i.corr(g, m);
            if (s.approx(function(e, r) {
                function i(i, n) {
                    for (var t = [], a = 0; a < e.length; a++)
                        t.push(r[a] - (i * e[a] + n));
                    return t
                }
                var n = [function() {
                    return e.map(function(e) {
                        return -e
                    })
                }
                , function() {
                    return e.map(function() {
                        return -1
                    })
                }
                ];
                return l.optimizeLinear(i, n)
            }(g, m).MSE, d, 8))
                return {
                    r: E,
                    rsquared: E * E
                }
        }
        return {
            Rsquared: c
        }
    }
    function h(e, r) {
        var i = e.length
          , n = e[0]
          , t = r[0]
          , a = e[i - 1]
          , o = r[i - 1];
        if (!(isFinite(n) && isFinite(a) && isFinite(t) && isFinite(o)))
            return !1;
        if (o - t == 0)
            return !1;
        var u = a - n;
        if (0 === u)
            return !1;
        for (var l = 1; l < i - 1; l++) {
            var f = e[l]
              , p = r[l]
              , d = (o * (f - n) + t * (a - f)) / u;
            if (!s.approx(p, d, 5))
                return !1
        }
        return !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.tryOptimize = void 0,
    e.tryOptimize = function(e, i) {
        try {
            return function(e, i) {
                var n, t = e.policy, s = e.frame, l = e.exportFrame, f = e.lastExportFrame, p = e.priorAnalysis, d = i._lhs.buildIRExpression(t, s), c = i._rhs.buildIRExpression(t, s);
                if (d.isError)
                    throw d;
                if (c.isError)
                    throw c;
                if (d.valueType !== u.Number && d.valueType !== u.ListOfNumber || c.valueType !== u.Number && c.valueType !== u.ListOfNumber)
                    throw a.regressionTypeError([u.prettyPrint(d.valueType), u.prettyPrint(c.valueType)]);
                var g = i._difference.buildIRExpression(t, s, {
                    wrapInList: !0
                });
                if (g.isError)
                    throw g;
                for (var N = 0, b = g.getDependencies(); N < b.length; N++) {
                    var y = b[N];
                    if (!t.validRegressionParameter(y))
                        throw a.invalidRegressionParameter(y)
                }
                var R, _ = function(e, r, i) {
                    var n = [];
                    r || (r = {});
                    i || (i = {});
                    for (var t = 0, a = e; t < a.length; t++) {
                        var s = a[t]
                          , u = o.identifierToLatex(s);
                        i[s] && isFinite(i[s].asValue()) ? n.push(+i[s].asValue()) : r.hasOwnProperty(u) && isFinite(+r[u]) ? n.push(+r[u]) : n.push(1)
                    }
                    return n
                }(g.getDependencies(), i.userData.regressionParameters, f), D = O(_, g), I = D.parameters, x = D.isLinear, M = D.parameterWarning, w = {
                    policy: t,
                    frame: s
                }, V = v(w, i, I), T = E(w, i._difference, I), F = function(e, i, n) {
                    if (!e.isLhsSimple)
                        return L.NONE;
                    if (!n.isValid)
                        return L.NONE;
                    var t = n.substituted;
                    if (t.isError)
                        return L.NONE;
                    if (t.valueType !== u.Number)
                        return L.NONE;
                    var a = t.getDependencies();
                    if (1 !== a.length)
                        return L.NONE;
                    if (isFinite(n.node.polynomialOrder(a[0])))
                        return L.NONE;
                    var s = t.getCompiledFunction(a).fn
                      , o = n.listNode;
                    if (t.valueType !== u.Number)
                        return L.NONE;
                    var l = o.mapElements(function(e) {
                        return +e.asValue()
                    });
                    if (l.length < 3)
                        return L.NONE;
                    l.sort(function(e, r) {
                        return e - r
                    });
                    var f = l.map(s)
                      , p = f.map(Math.log)
                      , d = l.map(Math.log)
                      , v = !0;
                    return r.List.wrap(i).eachElement(function(e) {
                        isFinite(Math.log(+e.asValue())) || (v = !1)
                    }),
                    h(l, p) && v ? L.LOGLIN : h(d, p) && v ? L.LOGLOG : h(d, f) ? L.LINLOG : L.NONE
                }(i, d, V);
                if (!i.userData.isLogModeRegression || F !== L.LOGLIN && F !== L.LOGLOG)
                    R = m(i, d, V, T, i.userData.isLogModeRegression, F);
                else {
                    var S = i._logDifference.buildIRExpression(t, s, {
                        wrapInList: !0
                    });
                    if (S.isError)
                        throw S;
                    var G = i._logLhs.buildIRExpression(t, s, {
                        wrapInList: !0
                    });
                    if (G.isError)
                        throw G;
                    I = (n = O(_, S)).parameters,
                    x = n.isLinear,
                    M = n.parameterWarning,
                    V = v(w, i, I),
                    T = E(w, i._difference, I),
                    R = m(i, G, V, E(w, i._logDifference, I), i.userData.isLogModeRegression, F)
                }
                var P = function(e, r) {
                    if (e.userData && e.userData.residualVariable) {
                        var i = o.latexToIdentifier(e.userData.residualVariable);
                        if (!r[i])
                            return i
                    }
                    for (var n, t = e.getDependencies(), a = 0, s = t; a < s.length; a++) {
                        var u = s[a].match(/_(.*)/);
                        if (u && !r[n = "e_" + u[1]])
                            return n
                    }
                    var l = 1;
                    for (; ; ) {
                        if (!r[n = "e_" + l])
                            return n;
                        l++
                    }
                }(i, l)
                  , z = function(e, r, i) {
                    var n, t = e._rhs.getDependencies();
                    for (var a in i)
                        if (i.hasOwnProperty(a)) {
                            var s = i[a].concreteTree;
                            if (s.isTable && s.columns[0]) {
                                var o = i[a].rawTree.columns;
                                if (o && o.length) {
                                    var u = o[0].getExports();
                                    if (1 === u.length && -1 !== t.indexOf(u[0])) {
                                        for (var l = 1; l < o.length; l++)
                                            if (-1 !== o[l].getDependencies().indexOf(r))
                                                return;
                                        n = n || a
                                    }
                                }
                            }
                        }
                    return n || void 0
                }(i, P, p);
                return i.userData.residualVariable = o.identifierToLatex(P),
                r.OptimizedRegression(I, T, R, V.substituted, {
                    isModelValid: V.isValid,
                    residualVariable: P,
                    residualSuggestionId: z,
                    shouldSuggestLogMode: F !== L.NONE,
                    isLinear: x,
                    parameterWarning: M
                })
            }(e, i)
        } catch (e) {
            return e instanceof r.Error ? e : a.parseError()
        }
    }
    ;
    var L = {
        NONE: 0,
        LOGLIN: 1,
        LOGLOG: 2,
        LINLOG: 3
    };
    function E(e, r, i) {
        var n = e.policy
          , t = e.frame
          , a = Object.create(t);
        for (var s in i)
            i.hasOwnProperty(s) && (a[s] = i[s]);
        var o = p.buildIR({
            policy: n,
            frame: a,
            wrapInList: !0
        }, r);
        return d.parseNodeFromValue(o.getReturnType(), o.asCompilerValue())
    }
    function O(e, r) {
        var i, t, a = r._chunk;
        if (a && (t = f.reparameterizeRegression(a)),
        !t || 0 === t.length)
            return {
                parameters: g((i = c(e, r = r.deriveRegressionRestrictions())).solution, r),
                isLinear: i.isLinear,
                parameterWarning: !1
            };
        for (var s = r.getDependencies(), o = r.getCompiledFunction(s).fn, u = 1 / 0, p = {}, d = !1, v = 0, m = t; v < m.length; v++) {
            var h = m[v]
              , L = new n(h.chunk);
            if (L = L.deriveRegressionRestrictions(),
            (i = c(h.forwardParameterMap(e), L)).MSE < u) {
                var E = h.reverseParameterMap(i.solution)
                  , O = l.evaluateMeanSquare(o, E);
                if (p && (!isFinite(O) || O >= u)) {
                    isFinite(O) || (d = !0);
                    continue
                }
                u = i.MSE,
                p = g(E, r)
            }
        }
        return {
            parameters: p,
            isLinear: !1,
            parameterWarning: d
        }
    }
});
define('core/math/features/analyze', ['require', 'underscore', 'parsenodes', 'core/math/statementanalysis', 'core/math/builtin', 'core/math/builtinframe', 'core/math/errormsg', 'core/math/comparators', 'core/math/types', 'core/types/graphmode', 'core/math/expression-types', 'core/math/distribution-spec', 'core/math/workerconfig', 'core/math/ir/features/solve', 'core/math/ir/features/optimize-regression', 'core/math/ir/dependencies'], function(require) {
    "use strict";
    var e = require("underscore")
      , t = require("parsenodes")
      , i = require("core/math/statementanalysis")
      , r = require("core/math/builtin")
      , n = require("core/math/builtinframe")
      , a = require("core/math/errormsg")
      , s = require("core/math/comparators")
      , o = require("core/math/types")
      , l = require("core/types/graphmode")
      , c = require("core/math/expression-types").ExpressionType
      , u = require("core/math/distribution-spec").DistributionParameterDefaultsMap
      , h = require("core/math/workerconfig")
      , p = require("core/math/ir/features/solve").trySolve
      , d = require("core/math/ir/features/optimize-regression").tryOptimize
      , y = require("core/math/ir/dependencies").getFreeDependencies;
    function v(e, t, r, n) {
        if (n.isError)
            return i(e, r, n);
        var s = n.getDependencies();
        switch (n.valueType) {
        case o.Distribution:
        case o.ListOfDistribution:
        case o.EmptyList:
            return i(e, r, n);
        case o.RGBColor:
        case o.ListOfColor:
        case o.Action:
        case o.Polygon:
        case o.ListOfPolygon:
            return s.length ? i(e, r, a.tooManyVariables(r.getSliderVariables(e, n)).setDependencies(s)) : i(e, r, n);
        case o.Point:
        case o.ListOfPoint:
            if (s.length) {
                if (!e.validParametricVariables(s)) {
                    var l = r.getSliderVariables(e, n);
                    return i(e, r, a.tooManyVariables(l).setDependencies(l))
                }
                return i(e, r, n)
            }
            return i(e, r, n);
        case o.Number:
        case o.ListOfNumber:
            return 0 === s.length ? i(e, r, n) : s.length <= e.dimensions() - 1 ? e.validExpressionVariables(s) ? i(e, r, n) : i(e, r, a.equationRequired(e.implicitDependency(s)).setDependencies(s)) : e.validImplicitVariables(s) ? i(e, r, a.equationRequired().setDependencies(s)) : i(e, r, a.tooManyVariables(r.getSliderVariables(e, n)).setDependencies(s));
        default:
            return i(e, r, a.parseError())
        }
    }
    function f(e) {
        return t.FunctionCall("pdf", [e, t.Identifier("x")])
    }
    function g(e, t) {
        var r = this.tryGetConcreteTree(e, t)
          , n = r.getDependencies();
        return n.length ? i(e, this, a.tooManyVariables(this.getSliderVariables(e, r)).setDependencies(n)) : i(e, this, this.tryGetConcreteTree(e, t))
    }
    function b(e) {
        return function(t, r) {
            var n = this.tryGetConcreteTree(t, r)
              , s = n.getDependencies();
            if (s.length)
                return i(t, this, a.tooManyVariables(this.getSliderVariables(t, n)).setDependencies(s));
            var o = i(t, this, this.tryGetConcreteTree(t, r));
            if (!n.isError) {
                o.evaluationState.expression_type = c.TTEST;
                var l = n.args.map(function(e) {
                    return e.asValue()
                });
                o.evaluationState.ttest_results = e.apply(null, l)
            }
            return o
        }
    }
    function m(e, t) {
        return e.filter(function(e) {
            return !t[e]
        })
    }
    t.Base.prototype.analyze = function(e, t) {
        return i(e, this, this.tryGetConcreteTree(e, t))
    }
    ,
    t.FunctionCall.prototype.analyze = function(e, t) {
        return v(e, 0, this, u[this._symbol] && 0 === y(t, this).length ? f(this).tryGetConcreteTree(e, t) : this.tryGetConcreteTree(e, t))
    }
    ,
    t.Expression.prototype.analyze = function(e, t) {
        return v(e, 0, this, this.tryGetConcreteTree(e, t))
    }
    ,
    t.FunctionDefinition.prototype.analyze = function(e, t) {
        if (n[this._symbol])
            return this.asEquation().analyze(e, t);
        var r = this._symbol.split("_")[0];
        if (n[r] && n[r].isFunction)
            return i(e, this, a.cannotRedefine(this._symbol, r));
        var s = this.tryGetConcreteTree(e, t);
        if (s.isError)
            return i(e, this, s);
        var o = this._argSymbols
          , l = s.getDependencies();
        if (-1 !== l.indexOf(this._symbol))
            return i(e, this, a.selfReferentialFunction(this._symbol));
        var c = l.filter(function(e) {
            return -1 === o.indexOf(e)
        });
        if (e.unplottablePolarFunction(this._symbol, l))
            return i(e, this, a.unplottablePolarFunction());
        if (c.some(e.assignmentForbidden))
            return i(e, this, a.addArgumentsToDefinition(c, this._symbol, o).setDependencies(l));
        if (c.length) {
            var u = this.getSliderVariables(e, s);
            return i(e, this, a.tooManyVariables(u).setDependencies(u))
        }
        return i(e, this, s)
    }
    ,
    t.Assignment.prototype.analyze = function(e, r, s) {
        var l, c = this._symbol;
        if (!e.validLHS(c))
            return i(e, this, a.invalidLHS(c));
        if (n[c])
            return this.asEquation().analyze(e, r);
        if (this._expression instanceof t.FunctionCall && u[this._expression._symbol] && 0 === y(r, this).length)
            l = f(this._expression).tryGetConcreteTree(e, r);
        else {
            var h = Object.create(r);
            h[c] = e.validSolvedVariable(c) ? void 0 : a.invalidImplicitVariables(),
            l = this.tryGetConcreteTree(e, h)
        }
        if (l.isError)
            return i(e, this, l);
        var p = l.getDependencies();
        if (this.isEquation(l))
            return this.asEquation().analyze(e, r);
        var d = l.valueType === o.RGBColor || l.valueType === o.ListOfColor;
        if (p.length > 1 || d && p.length) {
            var v = this.getSliderVariables(e, l);
            return d || v.length ? i(e, this, a.tooManyVariables(v).allowExport().setDependencies(v)) : i(e, this, l)
        }
        var g = this.getMoveStrategy(e, r, l, s, this.userData);
        if (g) {
            var b = this.getDefaultDragMode(g);
            return i(e, this, t.MovablePoint([l.elementAt(0), l.elementAt(1)], g, b))
        }
        return i(e, this, l)
    }
    ,
    t.Regression.prototype.analyze = function(e, t, r, n, a) {
        return i(e, this, d({
            policy: e,
            frame: t,
            exportFrame: r,
            lastExportFrame: n,
            priorAnalysis: a
        }, this))
    }
    ,
    t.Histogram.prototype.analyze = g,
    t.Object3D.prototype.analyze = g,
    t.DotPlot.prototype.analyze = g,
    t.BoxPlot.prototype.analyze = g,
    t.TTest.prototype.analyze = b(r.ttest),
    t.IndependentTTest.prototype.analyze = b(r.ittest),
    t.Stats.prototype.analyze = function(e, t) {
        var n = this.tryGetConcreteTree(e, t)
          , s = n.getDependencies();
        if (s.length)
            return i(e, this, a.tooManyVariables(this.getSliderVariables(e, n)).setDependencies(s));
        var o = i(e, this, this.tryGetConcreteTree(e, t));
        if (!n.isError) {
            o.evaluationState.expression_type = c.STATS;
            var l = n.args.map(function(e) {
                return e.asValue()
            });
            o.evaluationState.stats_results = r.stats.apply(null, l)
        }
        return o
    }
    ,
    t.Equation.prototype.analyze = t.BaseComparator.prototype.analyze = function(e, r) {
        var n = "=" !== this.getOperator();
        if (!h.plotInequalities && n)
            return i(e, this, a.inequalitiesDisabled());
        var s = p({
            policy: e,
            frame: r
        }, this.asComparator());
        if (s.isError)
            return i(e, this, s);
        if (s instanceof t.SolvedEquation && s.getDependencies().length) {
            var o = s.getDependencies().concat(s._symbol);
            if (!e.validImplicitVariables(o))
                return i(e, this, a.invalidImplicitVariables().setDependencies(o))
        }
        return this.getGraphMode(e, s) !== l.IMPLICIT || e.validImplicitVariables(s.getDependencies()) ? i(e, this, s) : i(e, this, a.invalidImplicitVariables().setDependencies(s.getDependencies()))
    }
    ,
    t.DoubleInequality.prototype.analyze = function(e, t) {
        if (!h.plotInequalities)
            return i(e, this, a.inequalitiesDisabled());
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError)
            return i(e, this, r);
        var n = r.getDependencies();
        return s.table[this._operators[0]].direction !== s.table[this._operators[1]].direction ? i(e, this, a.mismatchedDoubleInequality()) : e.validDoubleInequalitySymbol(r._symbol) && e.validDoubleInequalityVariables(n) ? n.length > 2 ? i(e, this, a.tooManyVariables(this.getSliderVariables(e, r)).setDependencies(n)) : -1 !== r._expressions[0].getDependencies().indexOf(r._symbol) || -1 !== r._expressions[1].getDependencies().indexOf(r._symbol) ? i(e, this, a.complicatedDoubleInequality().setDependencies(n)) : i(e, this, r) : i(e, this, a.invalidDoubleInequalityVariables().setDependencies(n))
    }
    ,
    t.And.prototype.analyze = function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError)
            return i(e, this, r);
        var n = r.getDependencies();
        return n.length ? e.validDoubleInequalityVariables(n) ? i(e, this, a.complicatedDoubleInequality().setDependencies(n)) : i(e, this, a.tooManyVariables(this.getSliderVariables(e, r)).setDependencies(n)) : i(e, this, r)
    }
    ,
    t.ParenSeq.prototype.analyze = function(e, r, n) {
        var a = this.tryGetConcreteTree(e, r);
        if (a.isError)
            return i(e, this, a);
        var s = this.getMoveStrategy(e, r, a, n, this.userData);
        if (s) {
            var o = this.getDefaultDragMode(s)
              , l = a.asCompilerValue()
              , c = [t.Constant(l[0]), t.Constant(l[1])];
            return i(e, this, t.MovablePoint(c, s, o))
        }
        return v(e, 0, this, a)
    }
    ,
    t.Table.prototype.analyze = function(e, r) {
        for (var n = Object.create(r), s = Object.create(n), o = [], l = function(e) {
            for (var i = {}, r = 0; r < e.length; r++) {
                var n = e[r];
                if (n.header instanceof t.Identifier) {
                    var a = n.header._symbol;
                    void 0 === i[a] && (i[a] = 0),
                    i[a] += 1
                }
            }
            return i
        }(this.columns), c = 0; c < this.columns.length; c++) {
            var u = this.columns[c];
            if (u.header instanceof t.Identifier) {
                var h = u.header._symbol
                  , p = n[h]
                  , d = l[h] > 1;
                p && p.isError && p.isMultiplyDefinedByTables && !d && (n[h] = void 0)
            }
            var y = u.analyze(e, n, s);
            if (0 === c)
                if (y.concreteTree.isIndependent) {
                    var v = y.concreteTree.getDependencies()[0];
                    e.validFirstColumnVariable(v) ? s[v] = void 0 : y = i(e, u, a.invalidFirstTableColumn())
                } else
                    y = i(e, u, a.invalidDependentFirstTableColumn());
            if (y.concreteTree.isIndependent)
                y.rawTree.exportToLocal(y.concreteTree, n);
            else if (!y.concreteTree.isError) {
                var f = m(y.concreteTree.header.getDependencies(), n);
                f.length && (y = i(e, u, a.tooManyVariables(f).setDependencies(f)))
            }
            o.push(y.concreteTree)
        }
        var g = t.Table(o)
          , b = i(e, this, g);
        return b.evaluationState.is_graphable = !0,
        b
    }
    ,
    t.TableColumn.prototype.analyze = function(e, t, r) {
        var n = this.header.tableError();
        if (n)
            return i(e, this, a.invalidTableHeader(n));
        var s = this.tryGetConcreteTree(e, t, r);
        if (s.isError)
            return i(e, this, s);
        if (s.header.isError)
            return i(e, this, s.header);
        if (s.values.isError)
            return i(e, this, s.values);
        for (var o = 0; o < s.values.length; o++)
            if (!s.values[o].isError) {
                var l = this.values[o] && this.values[o].tableError();
                if (l)
                    s.values[o] = a.invalidTableEntry(l);
                else {
                    var c = s.values[o].getDependencies();
                    c.length && (s.values[o] = a.tooManyVariables(c).setDependencies(c))
                }
            }
        return i(e, this, s)
    }
    ,
    t.Image.prototype.analyze = function(e, r, n) {
        var s = this.tryGetConcreteTree(e, r);
        if (s.radianAngle.isError || s.center.isError || s.width.isError || s.height.isError || s.opacity.isError)
            return i(e, this, s);
        var o = s.center.getDependencies()
          , l = s.radianAngle.getDependencies()
          , c = s.width.getDependencies()
          , u = s.height.getDependencies()
          , h = s.opacity.getDependencies();
        return o.length || l.length || c.length || u.length || h.length ? i(e, this, t.Image({
            center: o.length ? a.tooManyVariables(l).setDependencies(o) : s.center,
            radianAngle: l.length ? a.tooManyVariables(l).setDependencies(l) : s.radianAngle,
            width: c.length ? a.tooManyVariables(c).setDependencies(c) : s.width,
            height: u.length ? a.tooManyVariables(u).setDependencies(u) : s.height,
            opacity: h.length ? a.tooManyVariables(h).setDependencies(h) : s.opacity
        })) : (s.moveStrategy = this.getMoveStrategy(e, r, s, n, this.userData),
        i(e, this, s))
    }
    ,
    t.Slider.prototype.analyze = function(t, r) {
        var n, s = this.tryGetConcreteTree(t, r), o = s.sliderInfo;
        if (o.missingVars.length) {
            var l = e.unique(o.missingVars);
            n = i(t, this, a.tooManyVariables(t.sliderVariables(l)).setDependencies(l).allowExport())
        } else
            n = i(t, this, s);
        var c = n.evaluationState;
        if (h.sliders) {
            c.assignment = o.exportedSymbol,
            c.slider_min_number = o.values.min,
            c.slider_max_number = o.values.max,
            c.slider_step_number = o.values.step,
            c.slider_min_valid = o.valids.min,
            c.slider_max_valid = o.valids.max,
            c.slider_step_valid = o.valids.step;
            var u = c.slider_min_valid && c.slider_max_valid && c.slider_step_valid;
            c.is_slider = !0,
            c.raw_slider_latex = this.getInputString(),
            c.is_slidable = u,
            c.is_animatable = c.is_slidable && !c.is_graphable,
            o.errMsg && (c.error = o.errMsg.getError())
        }
        return delete c.is_evaluable,
        delete c.zero_values,
        n
    }
});
define('core/math/features/analyzeFourFunction', ['require', 'parsenodes', 'core/math/statementanalysis', 'core/math/errormsg', 'core/math/builtinframe'], function(require) {
    "use strict";
    var n = require("parsenodes")
      , t = require("core/math/statementanalysis")
      , e = require("core/math/errormsg")
      , r = require("core/math/builtinframe");
    function o(n, r) {
        return t(n, this, e.inequalitiesUnsupported())
    }
    n.Base.prototype.analyzeFourFunction = function(n, r) {
        var o = this.tryGetConcreteTree(n, r);
        return o.isError ? t(n, this, o) : t(n, this, e.parseError())
    }
    ,
    n.Expression.prototype.analyzeFourFunction = function(n, o) {
        var i = this.tryGetConcreteTree(n, o);
        if (i.isError)
            return t(n, this, i);
        var u = i.getDependencies();
        if (u.length > 0) {
            var s, a = u[0], p = r[a];
            return s = p ? p.isFunction ? e.functionUnsupported(a) : e.constantUnsupported(a) : e.variablesUnsupported(a),
            t(n, this, s)
        }
        return t(n, this, i)
    }
    ,
    n.Assignment.prototype.analyzeFourFunction = function(n, r) {
        return t(n, this, e.assignmentsUnsupported())
    }
    ,
    n.FunctionDefinition.prototype.analyzeFourFunction = function(n, r) {
        return t(n, this, e.functionDefinitionsUnsupported())
    }
    ,
    n.Equation.prototype.analyzeFourFunction = function(n, r) {
        return t(n, this, e.equationsUnsupported())
    }
    ,
    n.And.prototype.analyzeFourFunction = o,
    n.DoubleInequality.prototype.analyzeFourFunction = o,
    n.BaseComparator.prototype.analyzeFourFunction = o,
    n.Regression.prototype.analyzeFourFunction = function(n, r) {
        return t(n, this, e.regressionsUnsupported())
    }
    ,
    n.ParenSeq.prototype.analyzeFourFunction = function(n, r) {
        return t(n, this, e.pointsUnsupported())
    }
});
define('core/math/features/analyzeScientific', ['require', 'parsenodes', 'core/math/statementanalysis', 'core/math/errormsg', 'core/math/builtinframe'], function(require) {
    "use strict";
    var t = require("parsenodes")
      , e = require("core/math/statementanalysis")
      , i = require("core/math/errormsg")
      , n = require("core/math/builtinframe");
    function r(t, n) {
        return e(t, this, i.inequalitiesUnsupported())
    }
    t.Base.prototype.analyzeScientific = function(t, n) {
        var r = this.tryGetConcreteTree(t, n);
        return r.isError ? e(t, this, r) : e(t, this, i.parseError())
    }
    ,
    t.Expression.prototype.analyzeScientific = function(t, n) {
        var r = this.tryGetConcreteTree(t, n);
        if (r.isError)
            return e(t, this, r);
        var s = r.getDependencies();
        return s.length > 0 ? e(t, this, i.tooManyVariables(s)) : e(t, this, r)
    }
    ,
    t.Assignment.prototype.analyzeScientific = function(t, r) {
        var s = this._symbol;
        if (n[s])
            return e(t, this, i.cannotRedefine(s));
        var o = Object.create(r);
        o[s] = i.equationsUnsupported();
        var a = this.tryGetConcreteTree(t, o);
        if (a.isError)
            return e(t, this, a);
        var c = a.getDependencies();
        return this.isEquation(a) ? e(t, this, i.equationsUnsupported()) : c.length > 0 ? e(t, this, i.tooManyVariables(c)) : e(t, this, a)
    }
    ,
    t.FunctionDefinition.prototype.analyzeScientific = function(t, r) {
        if (n[this._symbol])
            return e(t, this, i.cannotRedefine(this._symbol));
        var s = this.tryGetConcreteTree(t, r);
        if (s.isError)
            return e(t, this, s);
        var o = this._argSymbols
          , a = s.getDependencies();
        if (-1 !== a.indexOf(this._symbol))
            return e(t, this, i.selfReferentialFunction(this._symbol));
        var c = a.filter(function(t) {
            return -1 === o.indexOf(t)
        });
        return c.length ? e(t, this, i.addArgumentsToDefinition(c, this._symbol, o)) : e(t, this, s)
    }
    ,
    t.Equation.prototype.analyzeScientific = function(t, n) {
        return e(t, this, i.equationsUnsupported())
    }
    ,
    t.And.prototype.analyzeScientific = r,
    t.DoubleInequality.prototype.analyzeScientific = r,
    t.BaseComparator.prototype.analyzeScientific = r,
    t.Regression.prototype.analyzeScientific = function(t, n) {
        return e(t, this, i.regressionsUnsupported())
    }
    ,
    t.ParenSeq.prototype.analyzeScientific = function(t, n) {
        return e(t, this, i.pointsUnsupported())
    }
});
define('core/math/features/analyzeSingleExpressionScientific', ['require', 'parsenodes', 'core/math/statementanalysis', 'core/math/errormsg', 'core/math/builtinframe'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , n = require("core/math/statementanalysis")
      , i = require("core/math/errormsg")
      , t = require("core/math/builtinframe");
    function r(e, t) {
        return n(e, this, i.inequalitiesUnsupported())
    }
    e.Base.prototype.analyzeSingleExpressionScientific = function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        return r.isError ? n(e, this, r) : n(e, this, i.parseError())
    }
    ,
    e.Expression.prototype.analyzeSingleExpressionScientific = function(e, r) {
        var s = this.tryGetConcreteTree(e, r);
        if (s.isError)
            return n(e, this, s);
        var o = s.getDependencies();
        if (o.length > 0) {
            var p, a = o[0], c = t[a];
            return p = c ? c.isFunction ? i.functionUnsupported(a) : i.constantUnsupported(a) : i.variablesUnsupported(a),
            n(e, this, p)
        }
        return n(e, this, s)
    }
    ,
    e.Assignment.prototype.analyzeSingleExpressionScientific = function(e, t) {
        return n(e, this, i.assignmentsUnsupported())
    }
    ,
    e.FunctionDefinition.prototype.analyzeSingleExpressionScientific = function(e, t) {
        return n(e, this, i.functionDefinitionsUnsupported())
    }
    ,
    e.Equation.prototype.analyzeSingleExpressionScientific = function(e, t) {
        return n(e, this, i.equationsUnsupported())
    }
    ,
    e.And.prototype.analyzeSingleExpressionScientific = r,
    e.DoubleInequality.prototype.analyzeSingleExpressionScientific = r,
    e.BaseComparator.prototype.analyzeSingleExpressionScientific = r,
    e.Regression.prototype.analyzeSingleExpressionScientific = function(e, t) {
        return n(e, this, i.regressionsUnsupported())
    }
    ,
    e.ParenSeq.prototype.analyzeSingleExpressionScientific = function(e, t) {
        return n(e, this, i.pointsUnsupported())
    }
});
define('core/lib/dragmode', ["require", "exports"], function(require, e) {
    "use strict";
    var r;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.reconcileDragMode = e.DragMode = void 0,
    function(e) {
        e.NONE = "NONE",
        e.X = "X",
        e.Y = "Y",
        e.XY = "XY",
        e.AUTO = "AUTO"
    }(r = e.DragMode || (e.DragMode = {})),
    e.reconcileDragMode = function(e, n) {
        var t = function(e) {
            return e ? "none" === e[0].type && "none" === e[1].type ? r.NONE : "none" === e[1].type ? r.X : "none" === e[0].type ? r.Y : r.XY : r.NONE
        }(n);
        switch (e) {
        case r.NONE:
            return r.NONE;
        case r.AUTO:
        case r.XY:
            return t;
        case r.X:
            return t === r.X || t === r.XY ? r.X : r.NONE;
        case r.Y:
            return t === r.Y || t === r.XY ? r.Y : r.NONE;
        default:
            return r.NONE
        }
    }
});
define('core/math/features/getgraphmode', ['require', 'parsenodes', 'core/types/graphmode', 'core/lib/dragmode', 'core/lib/dragmode', 'core/math/types'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = require("core/types/graphmode")
      , r = require("core/lib/dragmode").reconcileDragMode
      , o = require("core/lib/dragmode").DragMode
      , n = require("core/math/types");
    function s(e, s) {
        if (s.isMovablePoint && function(e, t) {
            var n;
            return n = e && e.hasOwnProperty("dragMode") ? e.dragMode === o.AUTO ? t.defaultDragMode : e.dragMode : t.defaultDragMode,
            r(n, t.moveStrategy)
        }(this.userData, s) !== o.NONE)
            return t.XYPOINT_MOVABLE;
        var i = s.getDependencies();
        switch (s.valueType) {
        case n.Point:
        case n.ListOfPoint:
            return 0 === i.length ? t.XYPOINT : e.validParametricVariables(i) ? 2 === e.dimensions() ? t.PARAMETRIC : t.PARAMETRIC_CURVE_3D : t.NONE;
        case n.Number:
        case n.ListOfNumber:
            return 2 === e.dimensions() && 1 === i.length ? t.Y : 3 === e.dimensions() && 2 === i.length ? t.Z_3D : t.NONE;
        case n.Polygon:
        case n.ListOfPolygon:
            return t.POLYGON;
        default:
            return t.NONE
        }
    }
    function i(e, r) {
        var o = r._expression.getDependencies();
        if (o.length > 1)
            return t.NONE;
        if (r._expression.isList && 0 === r._expression.length)
            return t.NONE;
        var n = r._symbol;
        return e.graphMode(n, o)
    }
    function a(e, r) {
        return r.isError ? t.NONE : t.VISUALIZATION
    }
    e.Base.prototype.getGraphMode = function(e, r) {
        return t.NONE
    }
    ,
    e.Expression.prototype.getGraphMode = s,
    e.Equation.prototype.getGraphMode = e.BaseComparator.prototype.getGraphMode = function(r, o) {
        var n = o.getDependencies();
        return o.isConstant ? t.NONE : o instanceof e.SolvedEquation ? 0 === n.length ? r.graphableAsConstant(o._symbol) ? r.constantGraphMode(o._symbol) : t.NONE : i(r, o) : 1 === n.length || 2 === n.length ? t.IMPLICIT : t.NONE
    }
    ,
    e.DoubleInequality.prototype.getGraphMode = function(e, t) {
        return e.constantGraphMode(t._symbol)
    }
    ,
    e.Assignment.prototype.getGraphMode = function(r, o) {
        if (o instanceof e.SolvedEquation)
            return i(r, o);
        if (this.isEquation(o))
            return this.asEquation().getGraphMode(r, o);
        var a = o.getDependencies();
        switch (o.valueType) {
        case n.Number:
        case n.ListOfNumber:
        case n.EmptyList:
            switch (a.length) {
            case 0:
                return r.graphableAsConstant(this._symbol) ? r.constantGraphMode(this._symbol) : t.NONE;
            case 1:
                return o.valueType !== n.ListOfNumber || r.graphableListVariables(this._symbol, a[0]) ? this.isSlider ? t.NONE : r.graphMode(this._symbol, a) : t.NONE;
            case 2:
                return 3 === r.dimensions() && "z" === this._symbol ? t.Z_3D : t.NONE;
            default:
                return t.NONE
            }
            break;
        default:
            return s.call(this, r, o)
        }
    }
    ,
    e.FunctionDefinition.prototype.getGraphMode = function(e, r) {
        if (1 !== this._argSymbols.length)
            return t.NONE;
        var o = e.graphMode(this._symbol, this._argSymbols)
          , s = r.getDependencies();
        switch (r.valueType) {
        case n.Number:
        case n.ListOfNumber:
            switch (s.length) {
            case 0:
                return o;
            case 1:
                return s[0] !== this._argSymbols[0] ? t.NONE : o;
            default:
                return t.NONE
            }
            break;
        default:
            return t.NONE
        }
    }
    ,
    e.Regression.prototype.getGraphMode = function(e, r) {
        return this.isLhsSimple && r.isModelValid ? 1 !== r.model.getDependencies().length ? t.NONE : t.Y : t.NONE
    }
    ,
    e.Object3D.prototype.getGraphMode = function(e, r) {
        return r.isError ? t.NONE : t.OBJECT3D
    }
    ,
    e.Histogram.prototype.getGraphMode = a,
    e.DotPlot.prototype.getGraphMode = a,
    e.BoxPlot.prototype.getGraphMode = a,
    e.Image.prototype.getGraphMode = function(e, r) {
        return this.userData.showPoints ? this.center.isError || this.radianAngle.isError || this.width.isError || this.height.isError || this.opacity.isError ? t.NONE : t.XYPOINT : t.NONE
    }
});
define('core/lib/color-helpers', ["require", "exports"], function(require, e) {
    "use strict";
    function r(e) {
        return t(e) ? (e.match(/^#([A-Fa-f0-9]{3})$/g) && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
        e.toLowerCase()) : e
    }
    function t(e) {
        return "string" == typeof e && (e.match(/^#([A-Fa-f0-9]{3})$/g) || e.match(/^#([A-Fa-f0-9]{6})$/g))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.colors = e.getDisplayColor = e.mutateOpacity = e.parseHex = e.invertColor = e.shadeColor = e.isValidHexColor = e.normalizeColor = void 0,
    e.normalizeColor = r,
    e.isValidHexColor = t,
    e.shadeColor = function(e, a) {
        if (!t(e = r(e)))
            return e;
        a > 1 && (a = 1),
        a < -1 && (a = -1);
        var o = parseInt(e.slice(1), 16)
          , n = a < 0 ? 0 : 255
          , i = a < 0 ? -1 * a : a
          , l = o >> 16
          , c = o >> 8 & 255
          , s = 255 & o;
        return "#" + (16777216 + 65536 * (Math.round((n - l) * i) + l) + 256 * (Math.round((n - c) * i) + c) + (Math.round((n - s) * i) + s)).toString(16).slice(1)
    }
    ,
    e.invertColor = function(e) {
        if (!t(e = r(e)))
            return e;
        var a = "0123456789abcdef";
        return "#" + e.slice(1).split("").map(function(e) {
            return a[15 - a.indexOf(e)]
        }).join("")
    }
    ,
    e.parseHex = function(e) {
        if (3 === (e = e.replace(/#/, "")).length)
            var r = parseInt(e.slice(0, 1) + e.slice(0, 1), 16)
              , t = parseInt(e.slice(1, 2) + e.slice(1, 2), 16)
              , a = parseInt(e.slice(2, 3) + e.slice(2, 3), 16);
        else if (6 === e.length)
            r = parseInt(e.slice(0, 2), 16),
            t = parseInt(e.slice(2, 4), 16),
            a = parseInt(e.slice(4, 6), 16);
        else
            r = 0,
            t = 0,
            a = 0;
        return {
            r: r,
            g: t,
            b: a
        }
    }
    ,
    e.mutateOpacity = function(e, r) {
        var t = /(rgba\([\d]+\,\ ?[\d]+\,\ ?[\d]+\,\ ?)[\d.]+(\))/;
        return e.match(t) ? e.replace(t, "$1" + r + "$2") : e
    }
    ,
    e.getDisplayColor = function(e, r) {
        if (r && r.colorLatexValue) {
            var t = r.colorLatexValue;
            return Array.isArray(t) ? t[0] : t
        }
        return e.color
    }
    ,
    e.colors = {
        RED: "#c74440",
        BLUE: "#2d70b3",
        GREEN: "#388c46",
        PURPLE: "#6042a6",
        ORANGE: "#fa7e19",
        BLACK: "#000000",
        GRAY: "#aaaaaa"
    }
});
define('core/math/features/getgraphinfo', ['require', 'parsenodes', 'core/math/domaintypes', 'core/math/types', 'core/lib/color-helpers'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = require("core/math/domaintypes")
      , n = require("core/math/types")
      , a = require("core/lib/color-helpers").getDisplayColor;
    function r(e) {
        switch (e.valueType) {
        case n.Number:
            return o(e);
        case n.Point:
            var t = o(e.elementAt(0))
              , a = o(e.elementAt(1));
            if (!t || !a)
                return;
            return [t, a];
        default:
            return
        }
    }
    function o(e) {
        var t = e.getDependencies();
        switch (t.length) {
        case 0:
            return [+e.asValue(), 0];
        case 1:
            if (e.polynomialOrder(t[0]) > 1)
                return;
            var n = e.getPolynomialCoefficients(t[0]);
            return [n[0] ? +n[0].asValue() : 0, n[1] ? +n[1].asValue() : 0];
        default:
            return
        }
    }
    e.Base.prototype.getGraphInfo = function(e, n) {
        var o, i, s = n.getDependencies();
        switch (s.length) {
        case 0:
            o = r(n),
            i = n.boundDomain("x");
            break;
        case 1:
            "known" === (i = n.boundDomain(s[0])).type && (o = r(n));
            break;
        case 2:
            i = t.unknownDomain()
        }
        return {
            graphMode: this.getGraphMode(e, n),
            color: a(this.userData, this.metaData),
            pointStyle: this.userData.pointStyle,
            lineStyle: this.userData.lineStyle,
            operator: this.getOperator(),
            isLinear: !!o,
            linearCoefficients: o,
            domainBound: i
        }
    }
});
define('core/math/features/getMoveStrategy', ["require", "exports", "parsenodes", "core/math/types", "core/math/maybe-rational", "core/math/functions"], function(require, e, t, n, i, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = t.Constant(i.maybeRational(0, 1));
    function o(e, t, n, i, r) {
        return {
            type: "updateSliderNonlinear",
            inputString: e,
            id: t,
            initialValue: n.constant_value,
            min: n.slider_min_number,
            max: n.slider_max_number,
            compiled: i,
            hasLinearComponent: r
        }
    }
    function s(e, t, n, i, r, o) {
        for (var s = t.getDependencies(), p = 0, u = s; p < u.length; p++) {
            if (r[u[p]])
                return
        }
        for (var c = s.length - 1; c >= 0; c--) {
            var d = s[c];
            if (!o[d]) {
                var f = i[d];
                if (void 0 !== f) {
                    var l = n[d];
                    if (1 === l.order) {
                        var g = l.tree.getPolynomialCoefficients(d)
                          , y = g[1] || a
                          , v = g[0] || a;
                        if (v.isConstant && y.isConstant)
                            if (isFinite(v.asValue()) && isFinite(y.asValue()))
                                if (0 !== y.asValue())
                                    return {
                                        symbol: d,
                                        id: f,
                                        coefficients: [-v.asValue() / y.asValue(), 1 / y.asValue()]
                                    }
                    }
                }
            }
        }
    }
    function p(e, t) {
        var n = function(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                t[e[n]] = !0;
            return t
        }(e)
          , i = {};
        for (var r in t) {
            var a = t[r].evaluationState.assignment;
            t[r].evaluationState.is_slidable && n[a] && (i[a] = r)
        }
        return i
    }
    function u(e, t, n, i) {
        for (var r = [], a = 0; a < n.length; a++) {
            var o = n[a]
              , s = {};
            r.push(s);
            for (var p = 0; p < i.length; p++) {
                var u = i[p]
                  , c = Object.create(t);
                c[u] = void 0;
                var d = o.tryGetConcreteTree(e, c);
                d.isError ? s[u] = {
                    tree: d,
                    order: 1 / 0
                } : s[u] = {
                    tree: d,
                    order: d.polynomialOrder(u)
                }
            }
        }
        return r
    }
    function c(e, t, n) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            0 !== t[r].order && (n[r] = !0)
        }
    }
    t.Base.prototype.getMoveStrategy = function() {}
    ,
    t.Assignment.prototype.getMoveStrategy = function(e, n, i, r, a) {
        if (this._expression instanceof t.ParenSeq)
            return this._expression.getMoveStrategy(e, n, i, r, a)
    }
    ,
    t.ParenSeq.prototype.getMoveStrategy = function(e, t, i, a, d) {
        if (i.valueType === n.Point && 0 === i.getDependencies().length) {
            for (var f = p(this.getDependencies(), a), l = Object.keys(f), g = this.args, y = u(e, t, g, l), v = [], h = {}, S = {}, m = 0; m < 2; m++) {
                var C = g[m]
                  , b = C.getInputString();
                if (C.isConstant)
                    v[m] = {
                        type: "updateCoordinate",
                        inputString: b
                    };
                else {
                    var _ = s(0, C, y[m], f, h, S);
                    _ && (v[m] = {
                        type: "updateSlider",
                        inputString: b,
                        id: _.id,
                        coefficients: _.coefficients
                    },
                    h[_.symbol] = !0,
                    c(l, y[m], S)),
                    v[m] || (v[m] = {
                        type: "none",
                        inputString: b
                    })
                }
            }
            var D, I = v[0], P = v[1];
            if ("none" === I.type && "updateSlider" === P.type)
                for (var V = 0, M = g[0].getDependencies(); V < M.length; V++) {
                    f[x = M[V]] === P.id && (D = x)
                }
            else if ("updateSlider" === I.type && "none" === P.type)
                for (var O = 0, j = g[1].getDependencies(); O < j.length; O++) {
                    var x;
                    f[x = j[O]] === I.id && (D = x)
                }
            else
                "none" === I.type && "none" === P.type && 1 === l.length && (D = l[0]);
            if (!D)
                return "none" !== I.type || "none" !== P.type ? v : void 0;
            var q, F = f[D];
            try {
                var T = Object.create(t);
                T[D] = void 0,
                q = this.getConcreteTree(e, T).getCompiledFunction()
            } catch (e) {
                return
            }
            return r.dehydrateCompiledFunction(q),
            [o(g[0].getInputString(), F, a[F].evaluationState, q, "updateSlider" === I.type || "updateSlider" === P.type), {
                type: "none",
                inputString: g[1].getInputString()
            }]
        }
    }
    ,
    t.Image.prototype.getMoveStrategy = function(e, t, i, r, a) {
        if (i.center.valueType === n.Point && 0 === i.center.getDependencies().length && i.width.isConstant && i.height.isConstant && i.radianAngle.isConstant && i.opacity.isConstant) {
            var o = p(this.getDependencies(), r)
              , d = Object.keys(o)
              , f = [this.width, this.height];
            "ParenSeq" === this.center.type ? f.push(this.center.args[0], this.center.args[1]) : "Identifier" === this.center.type && (this.center.referencedStatementId = function(e, t) {
                for (var n in t)
                    if (t[n].evaluationState.assignment === e)
                        return n
            }(this.center._symbol, r));
            for (var l = {}, g = {}, y = u(e, t, f, d), v = [], h = [2, 3, 0, 1], S = 0; S < h.length; S++) {
                var m = h[S]
                  , C = f[m];
                if (C) {
                    var b = C.getInputString();
                    if (C.isConstant)
                        v[m] = {
                            type: "updateCoordinate",
                            inputString: b
                        };
                    else {
                        var _ = s(0, C, y[m], o, l, g);
                        _ && (v[m] = {
                            type: "updateSlider",
                            inputString: b,
                            id: _.id,
                            coefficients: _.coefficients
                        },
                        l[_.symbol] = !0,
                        c(d, y[m], g)),
                        v[m] || (v[m] = {
                            type: "none",
                            inputString: b
                        })
                    }
                } else
                    v[m] = {
                        type: "none",
                        inputString: ""
                    }
            }
            if ("none" !== v[0].type || "none" !== v[1].type || "none" !== v[2].type || "none" !== v[3].type)
                return v
        }
    }
});
define('core/math/features/getDefaultDragMode', ['require', 'parsenodes', 'core/lib/dragmode'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = require("core/lib/dragmode").DragMode;
    e.Base.prototype.getMoveStrategy = function() {
        return t.NONE
    }
    ,
    e.Assignment.prototype.getDefaultDragMode = function(e) {
        return "none" !== e[0].type && "none" !== e[1].type ? t.XY : "none" !== e[0].type ? t.X : "none" !== e[1].type ? t.Y : t.NONE
    }
    ,
    e.ParenSeq.prototype.getDefaultDragMode = function(e) {
        return "updateSlider" === e[0].type && "updateSlider" === e[1].type ? t.XY : "updateSlider" === e[0].type ? t.X : "updateSlider" === e[1].type ? t.Y : "updateSliderNonlinear" === e[0].type && e[0].hasLinearComponent ? t.X : t.NONE
    }
});
define('core/math/features/tableinfo', ['require', 'parsenodes', 'core/math/types', 'core/lib/label', 'core/math/distribution-spec'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = e.List
      , n = require("core/math/types")
      , i = require("core/lib/label")
      , r = require("core/math/distribution-spec").getFunctionSpecFromTree;
    e.Base.prototype.tableInfo = function(e, t) {
        return !1
    }
    ,
    e.Identifier.prototype.tableInfo = function(e, t) {
        return !!e.validFirstColumnVariable(this._symbol) && {
            independent_variable: this._symbol,
            dependent_column: this.getInputString(),
            by_reference: !1
        }
    }
    ,
    e.Expression.prototype.tableInfo = function(e, i) {
        var o = i.getDependencies();
        if (r(this))
            return !1;
        switch (i.valueType) {
        case n.Point:
        case n.ListOfPoint:
            return 0 === o.length && ((!i.isMovablePoint || "updateSlider" !== i.moveStrategy[0].type && "updateSlider" !== i.moveStrategy[1].type) && {
                independent_variable: "x",
                dependent_column: "y",
                by_reference: !1,
                values: t.wrap(i).asValue()
            });
        case n.Number:
            if (1 !== o.length)
                return !1;
            var a = o[0];
            return !!e.validFirstColumnVariable(a) && {
                independent_variable: a,
                dependent_column: this.getInputString(),
                by_reference: !1
            };
        default:
            return !1
        }
    }
    ,
    e.Assignment.prototype.tableInfo = function(t, n) {
        if (n instanceof e.SolvedEquation)
            return !1;
        if (!this.getInputString().length)
            return !1;
        if (r(this))
            return !1;
        var o, a = n.getDependencies();
        if (a.length > 1)
            return !1;
        if (0 === a.length) {
            if (!t.tableableAsConstant(this._symbol))
                return !1;
            o = t.implicitIndependent(this._symbol)
        } else
            o = a[0];
        return !!t.validFirstColumnVariable(o) && {
            independent_variable: o,
            dependent_column: t.assignmentForbidden(this._symbol) ? i.trimLatex(this.getInputString().replace(/[^=]*=/, "")) : i.trimLatex(this.getInputString().split("=")[0]),
            by_reference: !t.assignmentForbidden(this._symbol)
        }
    }
    ,
    e.FunctionDefinition.prototype.tableInfo = function(e, t) {
        if (1 !== this._argSymbols.length)
            return !1;
        if (!this.getInputString().length)
            return !1;
        if (t.getDependencies().length > 1)
            return !1;
        var n = this._argSymbols[0];
        if (!e.validFirstColumnVariable(n))
            return !1;
        var r = e.assignmentForbidden(this._symbol);
        return {
            independent_variable: n,
            dependent_column: r ? i.trimLatex(this.getInputString().replace(/[^=]*=/, "")) : i.trimLatex(this.getInputString().split("=")[0]),
            by_reference: !r
        }
    }
    ,
    e.BaseComparator.prototype.tableInfo = function(e, t) {
        return !1
    }
    ,
    e.DoubleInequality.prototype.tableInfo = function(e, t) {
        return !1
    }
    ,
    e.Equation.prototype.tableInfo = function(e, t) {
        return !1
    }
});
define('core/math/features/tableerror', ['require', 'parsenodes', 'core/lib/worker-i18n'], function(require) {
    "use strict";
    var r = require("parsenodes")
      , e = require("core/lib/worker-i18n");
    r.Base.prototype.tableError = function() {
        return this.isInequality() ? e.s("shared-calculator-error-table-inequality-supplement") : !(this instanceof r.Expression || this instanceof r.IRExpression) && e.s("shared-calculator-error-table-generic-supplement")
    }
    ,
    r.List.prototype.tableError = function() {
        return e.s("shared-calculator-error-table-list-supplement")
    }
    ,
    r.Equation.prototype.tableError = r.Assignment.prototype.tableError = function() {
        return e.s("shared-calculator-error-table-equation-supplement")
    }
    ,
    r.FunctionDefinition.prototype.tableError = function() {
        return e.s("shared-calculator-error-table-function-definition-supplement")
    }
    ,
    r.Regression.prototype.tableError = function() {
        return e.s("shared-calculator-error-table-regression-supplement")
    }
});
define('core/lib/deepCopy', ["require", "exports"], function(require, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.default = function r(e) {
        var t = e;
        if (t && "function" == typeof t.toJSON && (t = t.toJSON()),
        !t)
            return t;
        if ("object" != typeof t)
            return t;
        if (Array.isArray(t))
            return t.map(r);
        var n = {};
        for (var o in t)
            t.hasOwnProperty(o) && (n[o] = r(t[o]));
        return n
    }
});
define('core/types/styles', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.LineStyle = e.PointStyle = void 0,
    function(e) {
        e.POINT = "POINT",
        e.OPEN = "OPEN",
        e.CROSS = "CROSS"
    }(e.PointStyle || (e.PointStyle = {})),
    function(e) {
        e.SOLID = "SOLID",
        e.DASHED = "DASHED",
        e.DOTTED = "DOTTED"
    }(e.LineStyle || (e.LineStyle = {}))
});
define('core/math/cdf-branches', ["require", "exports", "tslib", "core/lib/deepCopy", "core/math/plotter", "core/math/domaintypes", "core/types/styles"], function(require, e, o, n, i, t, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.makeContinuousCDFTopBranches = e.makeDiscreteCDFTopBranches = void 0;
    function d(e) {
        var o = e.viewState
          , d = e.graphInfo
          , r = e.compiled
          , s = e.bounds
          , p = e.included
          , u = e.showPoint
          , c = n.default(d)
          , h = t.intersectDomains(d.domainBound, t.knownDomain(s));
        if ("known" === h.type)
            return c.domainBound = h,
            c.pointStyle = p ? a.PointStyle.POINT : a.PointStyle.OPEN,
            i.default.computeDiscreteGraphData({
                graphInfo: c,
                viewState: o,
                compiled: r,
                showPoint: u,
                maxOverride: void 0
            })
    }
    e.makeDiscreteCDFTopBranches = function(e) {
        var n, i = e.viewState, t = e.graphInfo, a = e.compiled, r = e.bounds, s = e.maxOverride, p = e.showPoint, u = r[0], c = r[1], h = [];
        u = Math.ceil(u),
        c = Math.floor(c);
        var l, v, m, f, w, S = void 0 !== s ? s : 1 / 0;
        if (u === -1 / 0 && c >= S)
            n = d({
                bounds: [u, S],
                included: !0,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            }),
            h.push(n);
        else if (u === -1 / 0 && c < 1 / 0)
            n = d({
                bounds: [u, c],
                included: !0,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            }),
            h.push(n),
            h.push(d({
                bounds: [c + 1, S],
                included: !1,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            }));
        else if (u > -1 / 0 && c >= S)
            n = d({
                bounds: [u, S],
                included: !0,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            }),
            h.push(d({
                bounds: [-1 / 0, u - 1],
                included: !1,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            })),
            h.push(n);
        else {
            n = d({
                bounds: [u, c],
                included: !0,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            });
            var g = d({
                bounds: [-1 / 0, u - 1],
                included: !1,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            })
              , I = d({
                bounds: [c + 1, S],
                included: !1,
                viewState: i,
                graphInfo: t,
                compiled: a,
                showPoint: p
            });
            h.push(n);
            var b = void 0;
            g && I && (v = I,
            m = (l = g).segments[0],
            f = v.segments[0],
            w = [o.__spreadArray(o.__spreadArray([], m), f)],
            b = o.__assign(o.__assign({}, l), {
                segments: w
            }),
            h.push(b))
        }
        return {
            cdfTopBranch: n,
            topBranches: h
        }
    }
    ;
    e.makeContinuousCDFTopBranches = function(e) {
        var o = e.viewState
          , d = e.graphInfo
          , r = e.compiled
          , s = e.derivative
          , p = e.bounds;
        return {
            cdfTopBranch: function(e) {
                var o = e.viewState
                  , d = e.graphInfo
                  , r = e.compiled
                  , s = e.derivative
                  , p = e.bounds
                  , u = n.default(d)
                  , c = t.intersectDomains(d.domainBound, t.knownDomain(p));
                if ("known" === c.type)
                    return u.domainBound = c,
                    u.lineStyle = a.LineStyle.SOLID,
                    i.default.computeGraphData({
                        graphInfo: u,
                        viewState: o,
                        compiled: r,
                        derivative: s
                    })
            }({
                bounds: [p[0], p[1]],
                viewState: o,
                graphInfo: d,
                compiled: r,
                derivative: s
            }),
            topBranches: [i.default.computeGraphData({
                viewState: o,
                graphInfo: d,
                compiled: r,
                derivative: s
            })]
        }
    }
});
define('core/types/opacity', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.HIGH = e.DEFAULT = e.LOW = void 0,
    e.LOW = .2,
    e.DEFAULT = .4,
    e.HIGH = .8
});
define('core/types/slider-loop-modes', ["require", "exports"], function(require, e) {
    "use strict";
    var o;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getSliderIcon = e.SliderLoopMode = void 0,
    function(e) {
        e.LOOP_FORWARD_REVERSE = "LOOP_FORWARD_REVERSE",
        e.LOOP_FORWARD = "LOOP_FORWARD",
        e.PLAY_ONCE = "PLAY_ONCE",
        e.PLAY_INDEFINITELY = "PLAY_INDEFINITELY"
    }(o = e.SliderLoopMode || (e.SliderLoopMode = {})),
    e.getSliderIcon = function(e) {
        switch (e) {
        case o.LOOP_FORWARD:
            return "dcg-icon-arrow-one-way";
        case o.LOOP_FORWARD_REVERSE:
            return "dcg-icon-arrow-two-way";
        case o.PLAY_ONCE:
            return "dcg-icon-arrow-once";
        case o.PLAY_INDEFINITELY:
            return "dcg-icon-arrow-infinite"
        }
    }
});
define('core/types/label-sizes', ["require", "exports"], function(require, e) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.maybeMigrateLabelSizeEnumToLatex = e.LabelSize = void 0,
    function(e) {
        e.SMALL = "small",
        e.MEDIUM = "medium",
        e.LARGE = "large"
    }(i = e.LabelSize || (e.LabelSize = {})),
    e.maybeMigrateLabelSizeEnumToLatex = function(e) {
        return e === i.SMALL ? ".85" : e === i.MEDIUM ? "1" : e === i.LARGE ? "1.35" : void 0
    }
});
define('core/types/label-orientations', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.LabelOrientation = void 0,
    function(e) {
        e.DEFAULT = "default",
        e.CENTER = "center",
        e.CENTER_AUTO = "center_auto",
        e.AUTO_CENTER = "auto_center",
        e.ABOVE = "above",
        e.ABOVE_LEFT = "above_left",
        e.ABOVE_RIGHT = "above_right",
        e.ABOVE_AUTO = "above_auto",
        e.BELOW = "below",
        e.BELOW_LEFT = "below_left",
        e.BELOW_RIGHT = "below_right",
        e.BELOW_AUTO = "below_auto",
        e.LEFT = "left",
        e.AUTO_LEFT = "auto_left",
        e.RIGHT = "right",
        e.AUTO_RIGHT = "auto_right"
    }(e.LabelOrientation || (e.LabelOrientation = {}))
});
define('core/lib/default-spec', ["require", "exports", "underscore", "core/lib/deepCopy"], function(require, e, r, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.populateDefaults = e.stripDefaultsAndMaybeReturnUndefined = e.stripDefaults = void 0,
    e.stripDefaults = function(e, t) {
        var n = {};
        for (var a in t)
            t.hasOwnProperty(a) && (r.isEqual(e[a], t[a]) || (n[a] = t[a]));
        return n
    }
    ,
    e.stripDefaultsAndMaybeReturnUndefined = function(e, t) {
        var n = void 0
          , a = {};
        for (var u in t)
            t.hasOwnProperty(u) && (r.isEqual(e[u], t[u]) || (a[u] = t[u],
            n = a));
        return n
    }
    ,
    e.populateDefaults = function(e, r) {
        r || (r = {});
        var n = {};
        for (var a in e)
            e.hasOwnProperty(a) && !r.hasOwnProperty(a) && (n[a] = t.default(e[a]));
        for (var a in r)
            r.hasOwnProperty(a) && (n[a] = r[a]);
        return n
    }
});
define('core/lib/copy-properties', ["require", "exports", "core/lib/deepCopy"], function(require, r, e) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    r.makeTrueMap = r.extractPropertiesLike = r.copyAllProperties = r.copyProperties = void 0,
    r.copyProperties = function(r) {
        var o = r.from
          , t = r.to
          , i = r.props;
        for (var n in i)
            i[n] && o.hasOwnProperty(n) && (t[n] = e.default(o[n]))
    }
    ,
    r.copyAllProperties = function(r, e) {
        for (var o in r)
            r.hasOwnProperty(o) && (e[o] = r[o])
    }
    ,
    r.extractPropertiesLike = function(r, e) {
        var o = {};
        for (var t in e)
            e.hasOwnProperty(t) && (o[t] = r[t]);
        return o
    }
    ,
    r.makeTrueMap = function(r) {
        var e = {};
        for (var o in r)
            r.hasOwnProperty(o) && (e[o] = !0);
        return e
    }
});
define('core/graphing-calc/json/expression', ["require", "exports", "tslib", "core/types/opacity", "core/types/styles", "core/lib/dragmode", "core/types/slider-loop-modes", "core/types/label-sizes", "core/types/label-orientations", "core/lib/default-spec", "../../lib/copy-properties"], function(require, e, i, a, l, t, s, r, n, o, d) {
    "use strict";
    var L;
    function D(i) {
        return d.extractPropertiesLike(i, e.DEFAULTS_DYNAMIC)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.computeParsableState = e.areDynamicPropertiesStrictEqual = e.extractDynamicProperties = e.stripDefaults = e.inflateDefaults = e.SLIDER_DEFAULTS = e.DEFAULTS = e.DEFAULTS_DYNAMIC = e.DEFAULT_SLIDER_PERIOD = e.EditableLabelMode = e.CLICKABLEINFO_DEFAULTS = e.VIZ_DEFAULTS = e.CDF_DEFAULTS = void 0,
    e.CDF_DEFAULTS = {
        show: !1,
        min: "",
        max: ""
    },
    e.VIZ_DEFAULTS = {
        breadth: "",
        axisOffset: "",
        alignedAxis: "x",
        showBoxplotOutliers: !0,
        binAlignment: "center",
        dotplotXMode: "exact",
        histogramMode: ""
    },
    e.CLICKABLEINFO_DEFAULTS = {
        enabled: !1,
        latex: ""
    },
    function(e) {
        e.None = "NONE",
        e.Math = "MATH",
        e.Text = "TEXT"
    }(L = e.EditableLabelMode || (e.EditableLabelMode = {})),
    e.DEFAULT_SLIDER_PERIOD = 4e3,
    e.DEFAULTS_DYNAMIC = {
        polarDomain: {
            min: "",
            max: ""
        },
        parametricDomain: {
            min: "",
            max: ""
        },
        cdf: e.CDF_DEFAULTS,
        colorLatex: "",
        description: "",
        fillOpacity: "" + a.DEFAULT,
        lineOpacity: "",
        pointOpacity: "",
        pointSize: "",
        lineWidth: "",
        labelAngle: "",
        vizProps: e.VIZ_DEFAULTS,
        clickableInfo: e.CLICKABLEINFO_DEFAULTS
    },
    e.DEFAULTS = i.__assign(i.__assign({
        folderId: "",
        latex: "",
        color: "",
        showLabel: !1,
        label: "",
        hidden: !1,
        secret: !1,
        dragMode: t.DragMode.AUTO,
        labelSize: "",
        labelOrientation: n.LabelOrientation.DEFAULT,
        suppressTextOutline: !1,
        interactiveLabel: !1,
        editableLabelMode: L.None,
        residualVariable: "",
        isLogModeRegression: !1,
        pointStyle: l.PointStyle.POINT,
        lineStyle: l.LineStyle.SOLID,
        regressionParameters: {},
        displayEvaluationAsFraction: !1,
        slider: {}
    }, e.DEFAULTS_DYNAMIC), {
        points: void 0,
        lines: void 0,
        fill: void 0
    }),
    e.SLIDER_DEFAULTS = {
        hardMin: !1,
        hardMax: !1,
        animationPeriod: e.DEFAULT_SLIDER_PERIOD,
        loopMode: s.SliderLoopMode.LOOP_FORWARD_REVERSE,
        playDirection: 1,
        isPlaying: !1,
        min: "-10",
        max: "10",
        step: ""
    },
    e.inflateDefaults = function(a) {
        return i.__assign(i.__assign(i.__assign({}, e.DEFAULTS), a), {
            slider: i.__assign(i.__assign({}, e.SLIDER_DEFAULTS), a.slider),
            cdf: i.__assign(i.__assign({}, e.CDF_DEFAULTS), a.cdf),
            vizProps: i.__assign(i.__assign({}, e.VIZ_DEFAULTS), a.vizProps),
            clickableInfo: i.__assign(i.__assign({}, e.CLICKABLEINFO_DEFAULTS), a.clickableInfo)
        })
    }
    ,
    e.stripDefaults = function(a) {
        var l = o.stripDefaults(e.DEFAULTS, i.__assign(i.__assign({}, a), {
            slider: o.stripDefaults(e.SLIDER_DEFAULTS, a.slider)
        }))
          , t = o.stripDefaultsAndMaybeReturnUndefined(e.CDF_DEFAULTS, a.cdf);
        void 0 === t ? delete l.cdf : l.cdf = t;
        var s = o.stripDefaultsAndMaybeReturnUndefined(e.VIZ_DEFAULTS, a.vizProps);
        void 0 === s ? delete l.vizProps : l.vizProps = s;
        var r = o.stripDefaultsAndMaybeReturnUndefined(e.CLICKABLEINFO_DEFAULTS, a.clickableInfo);
        return void 0 === r ? delete l.clickableInfo : l.clickableInfo = r,
        l
    }
    ,
    e.extractDynamicProperties = D,
    e.areDynamicPropertiesStrictEqual = function(i, a) {
        for (var l in e.DEFAULTS_DYNAMIC)
            if (e.DEFAULTS_DYNAMIC.hasOwnProperty(l) && i[l] !== a[l])
                return !1;
        return !0
    }
    ,
    e.computeParsableState = function(e) {
        var a = r.maybeMigrateLabelSizeEnumToLatex(e.labelSize)
          , l = a || e.labelSize;
        return i.__assign({
            type: "statement",
            id: e.id,
            latex: e.latex,
            label: e.label,
            color: e.color,
            fill: e.fill,
            points: e.points,
            lines: e.lines,
            pointStyle: e.pointStyle,
            lineStyle: e.lineStyle,
            dragMode: e.dragMode,
            labelSize: l,
            labelOrientation: e.labelOrientation,
            suppressTextOutline: e.suppressTextOutline,
            interactiveLabel: e.interactiveLabel,
            editableLabelMode: e.editableLabelMode,
            residualVariable: e.residualVariable,
            regressionParameters: e.regressionParameters,
            isLogModeRegression: e.isLogModeRegression,
            showLabel: e.showLabel,
            shouldGraph: e.hidden,
            slider: {
                min: e.slider.hardMin ? e.slider.min : "",
                max: e.slider.hardMax ? e.slider.max : "",
                softMin: e.slider.hardMin ? "" : e.slider.min,
                softMax: e.slider.hardMax ? "" : e.slider.max,
                step: e.slider.step,
                isPlayingOnce: e.slider.isPlaying && e.slider.loopMode === s.SliderLoopMode.PLAY_ONCE
            }
        }, D(e))
    }
});
define('core/math/features/getListIdx', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getListIdxFromBranchIdx = void 0,
    e.getListIdxFromBranchIdx = function(e, r) {
        var t;
        switch (r) {
        case "solvedEquation":
            t = 2;
            break;
        case "baseComparator":
            t = 4;
            break;
        default:
            t = 1
        }
        return Math.floor(e / t)
    }
});
define('core/types/point-size', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.DOTPLOT_DEFAULT = e.DEFAULT = void 0,
    e.DEFAULT = 9,
    e.DOTPLOT_DEFAULT = 14
});
define('core/math/features/graph', ["require", "exports", "parsenodes", "core/math/comparators", "core/math/parsenode/irexpression", "tslib", "core/math/errormsg", "core/math/builtin", "core/math/plotter", "core/types/graphmode", "core/lib/dragmode", "core/math/expression-types", "core/math/cdf-branches", "core/math/copy-defined-pois", "core/math/distribution-spec", "core/graphing-calc/json/expression", "core/types/opacity", "core/lib/color-helpers", "core/types/styles", "core/math/types", "../ir/opcodes", "core/math/ir/features/as-value", "./getListIdx", "core/types/point-size"], function(require, e, t, a, i, o, r, s, n, l, p, u, h, c, d, m, g, f, y, v, D, x, L, b) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var O = t.List;
    function I(e, t, a) {
        for (var i = 1 / 0, o = 0, r = t; o < r.length; o++) {
            var s = e[r[o]];
            Array.isArray(s) && s.length < i && (i = s.length)
        }
        var n = 1;
        return "solvedEquation" === a ? n = 2 : "baseComparator" === a && (n = 4),
        n * i
    }
    function M(e, t, a) {
        return Array.isArray(e) ? e[L.getListIdxFromBranchIdx(t, a)] : e
    }
    function P(e, t) {
        for (var a = 1 / 0, i = -1 / 0, o = 1 / 0, r = -1 / 0, s = 0, n = t; s < n.length; s++)
            for (var l = n[s], p = 0; p < l.length; p += 2) {
                var u = l[p]
                  , h = l[p + 1];
                u < a && (a = u),
                u > i && (i = u),
                h < o && (o = h),
                h > r && (r = h)
            }
        if (isFinite(a) && isFinite(o))
            return {
                type: e,
                xmin: a,
                ymin: o,
                xmax: i,
                ymax: r
            }
    }
    function V(e, t) {
        if (void 0 !== e && "binomialdist" === e.symbol && t instanceof i) {
            var a = t._chunk
              , o = a.getInstruction(a.returnIndex);
            if (o.type === D.NativeFunction && "binompdf" === o.symbol)
                return x.asValue(a, o.args[1])
        }
    }
    function A(e, t, a) {
        var i = {};
        a -= .5 * t;
        for (var o = e.length - 1; o >= 0; o--) {
            var r = e[o]
              , s = Math.floor((r - a) / t);
            i[s] ? i[s].data.push(r) : i[s] = {
                id: s,
                data: [r],
                min: s * t + a,
                max: s * t + a + t,
                center: s * t + a + t / 2
            }
        }
        return i
    }
    t.Base.prototype._graph = function(e, a, r, p, g) {
        var y = this;
        if (a instanceof t.SolvedEquation)
            return this._graph(e, a._expression, r, p, 2 === a.branchMultiplier ? "solvedEquation" : void 0);
        function b(e) {
            var t = e.editableLabelMode;
            return t === m.EditableLabelMode.Text || t === m.EditableLabelMode.Math
        }
        var P = a.getExpressionType(p.graphMode, a.valueType)
          , A = u.getReconciledExpressionProps(P, {
            points: this.userData.points,
            lines: this.userData.lines,
            fill: this.userData.fill
        });
        switch (p.graphMode) {
        case l.XYPOINT_MOVABLE:
            var E = n.default.dropUndefinedPoints([a.asValue()])
              , F = E.points
              , S = E.droppedIndices
              , N = this.userData.shouldGraph && A.points
              , C = this.userData.showLabel && !N;
            return N ? [{
                segments: [F],
                graphMode: p.graphMode,
                droppedIndices: S,
                color: f.getDisplayColor(this.userData, this.metaData),
                style: this.userData.pointStyle,
                showLabel: !!this.userData.showLabel,
                labelSize: this.metaData.computedLabelSize,
                labelAngle: this.metaData.computedLabelAngle,
                labelOrientation: this.userData.labelOrientation,
                pointOpacity: this.metaData.computedPointOpacity,
                suppressTextOutline: this.userData.suppressTextOutline,
                editableLabel: b(this.userData),
                labels: this.computedLabels || [],
                poi: c.default(F),
                movablePointInfo: []
            }] : C ? [{
                segments: [F],
                graphMode: l.XYPOINT,
                color: f.getDisplayColor(this.userData, this.metaData),
                style: this.userData.pointStyle,
                showLabel: !!this.userData.showLabel,
                nakedLabel: !0,
                labelSize: this.metaData.computedLabelSize,
                labelAngle: this.metaData.computedLabelAngle,
                labelOrientation: this.userData.labelOrientation,
                pointOpacity: this.metaData.computedPointOpacity,
                suppressTextOutline: this.userData.suppressTextOutline,
                editableLabel: b(this.userData),
                labels: this.computedLabels || [],
                poi: c.default(F),
                showPoint: !1
            }] : [];
        case l.XYPOINT:
            var B = []
              , w = this.userData.shouldGraph && A.points
              , _ = this.userData.shouldGraph && A.lines
              , z = ["colorLatexValue"];
            w && z.push("computedPointOpacity", "computedPointSize"),
            (this.userData.showLabel || w) && z.push("computedLabelSize", "computedLabelAngle");
            var G = I(this.metaData, z, g)
              , W = O.wrap(a).asValue();
            W.length > G && (W.length = G);
            var Y = this.userData.showLabel && !w && !_
              , R = n.default.dropUndefinedPoints(W);
            return (this.userData.showLabel || w) && B.push({
                segments: [R.points],
                graphMode: p.graphMode,
                droppedIndices: R.droppedIndices,
                color: this.metaData.colorLatexValue || this.userData.color,
                style: this.userData.pointStyle,
                showLabel: !!this.userData.showLabel,
                showPoint: w,
                labelSize: this.metaData.computedLabelSize,
                labelAngle: this.metaData.computedLabelAngle,
                labelOrientation: this.userData.labelOrientation,
                pointSize: this.metaData.computedPointSize,
                pointOpacity: this.metaData.computedPointOpacity,
                suppressTextOutline: this.userData.suppressTextOutline,
                interactiveLabel: !!this.userData.interactiveLabel,
                editableLabel: b(this.userData),
                nakedLabel: Y,
                labels: this.computedLabels || [],
                poi: c.default(W)
            }),
            _ && B.push({
                segments: T(W),
                graphMode: l.PARAMETRIC,
                color: f.getDisplayColor(this.userData, this.metaData),
                style: this.userData.lineStyle,
                lineWidth: this.metaData.computedLineWidth,
                lineOpacity: this.metaData.computedLineOpacity,
                poi: {}
            }),
            B;
        case l.PARAMETRIC:
        case l.PARAMETRIC_CURVE_3D:
            var X = this.userData
              , q = this.metaData
              , k = [];
            z = ["colorLatexValue"];
            A.lines && z.push("computedLineOpacity", "computedLineWidth"),
            A.fill && z.push("computedFillOpacity");
            var U = I(this.metaData, z, g);
            B = O.wrap(a).mapElements(function(t, a) {
                if (a >= U)
                    return {
                        segments: [],
                        poi: {},
                        graphMode: l.X,
                        color: ""
                    };
                var i = L.getListIdxFromBranchIdx(a, g)
                  , o = M(y.metaData.computedLineWidth, a, g)
                  , s = M(y.metaData.computedLineOpacity, a, g)
                  , u = y.metaData.colorLatexValue ? M(y.metaData.colorLatexValue, a, g) : y.userData.color;
                if (0 === t.getDependencies().length) {
                    var h = n.default.dropUndefinedPoints([t.asValue()])
                      , d = h.points
                      , m = h.droppedIndices;
                    return {
                        segments: [d],
                        graphMode: l.XYPOINT,
                        droppedIndices: m,
                        color: f.getDisplayColor(X, q),
                        style: X.lineStyle,
                        lineWidth: o,
                        lineOpacity: s,
                        poi: c.default(d)
                    }
                }
                var v = t.getCompiledFunction()
                  , D = y.getGraphInfo(e, t);
                return D.graphMode = p.graphMode,
                D.domain = {
                    min: y.metaData.evaluatedDomainMin,
                    max: y.metaData.evaluatedDomainMax
                },
                D.style = y.userData.lineStyle,
                D.lineWidth = o,
                D.lineOpacity = s,
                D.color = u,
                D.listIndex = i,
                n.default.computeGraphData({
                    viewState: r,
                    graphInfo: D,
                    compiled: v
                })
            });
            if (A.fill) {
                if (B.forEach(function(e, t) {
                    t >= U || k.push({
                        segments: e.segments,
                        color: y.metaData.colorLatexValue ? M(y.metaData.colorLatexValue, t, g) : y.userData.color,
                        fillOpacity: M(y.metaData.computedFillOpacity, t, g),
                        listIndex: L.getListIdxFromBranchIdx(t, g),
                        graphMode: l.POLYGONFILL,
                        poi: {}
                    })
                }),
                !A.lines)
                    return k;
                B = B.concat(k)
            }
            return B;
        case l.X:
        case l.Y:
        case l.IMPLICIT:
        case l.POLAR:
        case l.Z_3D:
            var j = []
              , Z = a.valueType === v.Number
              , J = I(this.metaData, ["computedLineOpacity", "computedLineWidth", "colorLatexValue", "fillOpacity"], g);
            return O.wrap(a).eachElement(function(t, a) {
                if (!(a >= J)) {
                    var u, c = p.graphMode === l.IMPLICIT || p.graphMode === l.Z_3D ? t.getCompiledFunction(["x", "y"]) : t.getCompiledFunction(), m = d.getFunctionSpecFromTree(y), f = m && m.discrete, v = function(e, t) {
                        if (!e)
                            return;
                        if (!(t instanceof i))
                            return;
                        var a = t._chunk
                          , o = a.getInstruction(a.returnIndex);
                        if (o.type !== D.NativeFunction)
                            return;
                        var r = e.discrete ? "discreteDistribution" : "continuousDistribution";
                        if ("binomialdist" === e.symbol && "binompdf" === o.symbol) {
                            var n = x.asValue(a, o.args[1])
                              , l = x.asValue(a, o.args[2]);
                            return {
                                type: r,
                                xmin: 0,
                                xmax: n,
                                ymin: 0,
                                ymax: h = s.binompdf(l * n, n, l)
                            }
                        }
                        if ("poissondist" === e.symbol && "poissonpdf" === o.symbol) {
                            return {
                                type: r,
                                xmin: 0,
                                xmax: 2.5 * (p = x.asValue(a, o.args[1])),
                                ymin: 0,
                                ymax: h = Math.max(s.poissonpdf(Math.floor(p), p), s.poissonpdf(Math.ceil(p), p))
                            }
                        }
                        if ("normaldist" === e.symbol && "normalpdf" === o.symbol) {
                            var p = x.asValue(a, o.args[1])
                              , u = x.asValue(a, o.args[2])
                              , h = s.normalpdf(p, p, u);
                            return {
                                type: r,
                                xmin: p - 2 * Math.abs(u),
                                xmax: p + 2 * Math.abs(u),
                                ymin: 0,
                                ymax: h
                            }
                        }
                        if ("uniformdist" === e.symbol && "uniformpdf" === o.symbol) {
                            var c = x.asValue(a, o.args[1])
                              , d = x.asValue(a, o.args[2])
                              , m = (p = (c + d) / 2,
                            d - c);
                            return {
                                type: r,
                                xmin: c - m / 3,
                                xmax: d + m / 3,
                                ymin: 0,
                                ymax: h = s.uniformpdf(p, c, d)
                            }
                        }
                        if ("tdist" === e.symbol && "tpdf" === o.symbol) {
                            var g = x.asValue(a, o.args[1]);
                            return {
                                type: r,
                                xmin: -3,
                                xmax: 3,
                                ymin: 0,
                                ymax: h = s.tpdf(0, g)
                            }
                        }
                        return
                    }(m, t);
                    try {
                        u = t.getCompiledDerivative()
                    } catch (e) {}
                    var b = y.getGraphInfo(e, t);
                    b.listIndex = L.getListIdxFromBranchIdx(a, g),
                    b.graphMode = p.graphMode,
                    b.style = y.userData.lineStyle,
                    b.lineWidth = M(y.metaData.computedLineWidth, a, g),
                    b.lineOpacity = M(y.metaData.computedLineOpacity, a, g);
                    var O = M(y.metaData.computedFillOpacity, a, g);
                    b.fillOpacity = O,
                    p.graphMode === l.POLAR && (b.domain = {
                        min: y.metaData.evaluatedDomainMin,
                        max: y.metaData.evaluatedDomainMax,
                        isExplicit: y.metaData.isExplicitDomain
                    });
                    var I = y.metaData.colorLatexValue ? M(y.metaData.colorLatexValue, a, g) : y.userData.color;
                    b.color = I;
                    var P = y.metaData.evaluatedCDFMin
                      , A = y.metaData.evaluatedCDFMax;
                    if (isNaN(P) || isNaN(A) || !Z)
                        if (f) {
                            var E = n.default.computeDiscreteGraphData({
                                viewState: r,
                                graphInfo: b,
                                compiled: c,
                                showPoint: y.userData.shouldGraph,
                                maxOverride: V(m, t)
                            });
                            v && (E.boundingBox = v),
                            j.push(E)
                        } else {
                            var F = void 0 === y.userData.lines || y.userData.lines
                              , S = {
                                viewState: r,
                                graphInfo: b,
                                compiled: c,
                                derivative: u
                            };
                            E = n.default.computeGraphData(S);
                            if (v && (E.boundingBox = v),
                            E.fillSegments) {
                                E.fillSegments;
                                var T = o.__rest(E, ["fillSegments"]);
                                F || (T.lineWidth = 0),
                                j.push(T)
                            } else
                                F || (E.lineWidth = 0),
                                j.push(E);
                            b.graphMode === l.IMPLICIT && "=" !== b.operator && j.push({
                                graphMode: l.POLYGONFILL,
                                segments: E.fillSegments,
                                poi: {},
                                listIndex: b.listIndex,
                                color: I,
                                fillOpacity: O
                            })
                        }
                    else if (f) {
                        var N = {
                            viewState: r,
                            graphInfo: b,
                            compiled: c,
                            bounds: [P, A],
                            maxOverride: V(m, t),
                            showPoint: y.userData.shouldGraph
                        }
                          , C = (w = h.makeDiscreteCDFTopBranches(N)).cdfTopBranch;
                        if ((_ = w.topBranches).forEach(function(e) {
                            e && v && (e.boundingBox = v)
                        }),
                        _.every(function(e) {
                            return void 0 !== e
                        }) && (j = _,
                        C && C.segments[0].length)) {
                            var B = [];
                            C.segments[0].forEach(function(e) {
                                isNaN(e[0]) || isNaN(e[1]) || B.push([e[0], 0, e[0], e[1]])
                            }),
                            j.push({
                                graphMode: l.PARAMETRIC,
                                segments: B,
                                boundingBox: v,
                                poi: {},
                                color: I
                            })
                        }
                    } else {
                        var w, _;
                        N = {
                            viewState: r,
                            graphInfo: b,
                            compiled: c,
                            derivative: u,
                            bounds: [P, A]
                        },
                        C = (w = h.makeContinuousCDFTopBranches(N)).cdfTopBranch;
                        if ((_ = w.topBranches).forEach(function(e) {
                            e && v && (e.boundingBox = v)
                        }),
                        j = _,
                        C && C.segments.length) {
                            for (var z = void 0, G = void 0, W = 0; W < C.segments.length; W++) {
                                if ((Y = C.segments[W]).length >= 4) {
                                    z = Y[0];
                                    break
                                }
                            }
                            for (W = C.segments.length - 1; W >= 0; W--) {
                                var Y;
                                if ((Y = C.segments[W]).length >= 4) {
                                    G = Y[Y.length - 2];
                                    break
                                }
                            }
                            if (void 0 !== z && void 0 !== G && isFinite(z) && isFinite(G)) {
                                var R = n.default.polygonsFromSegments(C.segments, [[z, 0, G, 0]], C.graphMode);
                                j.push({
                                    graphMode: l.POLYGONFILL,
                                    segments: R,
                                    poi: {},
                                    color: I
                                })
                            }
                        }
                    }
                }
            }),
            j;
        case l.POLYGON:
            B = [];
            var H = void 0 === this.userData.lines || this.userData.lines
              , K = void 0 === this.userData.fill || this.userData.fill;
            if (!K && !H)
                return B;
            G = I(this.metaData, ["computedLineOpacity", "computedLineWidth", "colorLatexValue", "fillOpacity"], g);
            var Q = a.asValue();
            v.isList(a.valueType) || (Q = [Q]);
            for (var $ = 0; $ < Q.length; $++)
                if (!($ > G - 1)) {
                    var ee = Q[$];
                    if (ee.length) {
                        var te = this.getGraphInfo(e, a)
                          , ae = L.getListIdxFromBranchIdx($, g)
                          , ie = M(this.metaData.computedLineWidth, $, g)
                          , oe = M(this.metaData.computedLineOpacity, $, g)
                          , re = M(this.metaData.computedFillOpacity, $, g)
                          , se = this.metaData.colorLatexValue ? M(this.metaData.colorLatexValue, $, g) : this.userData.color
                          , ne = T(ee = o.__spreadArray(o.__spreadArray([], ee), [ee[0]]));
                        ne.length && (K && B.push({
                            segments: ne,
                            graphMode: l.POLYGONFILL,
                            poi: {},
                            color: se,
                            fillOpacity: re,
                            style: te.style,
                            listIndex: ae
                        }),
                        H && B.push({
                            segments: ne,
                            graphMode: l.PARAMETRIC,
                            poi: {},
                            color: se,
                            style: this.userData.lineStyle,
                            lineWidth: ie,
                            lineOpacity: oe,
                            listIndex: ae
                        }))
                    }
                }
            return B;
        case l.POLYGONFILL:
        case l.VISUALIZATION:
        case l.OBJECT3D:
        case l.NONE:
        case l.ERROR:
            return !1;
        default:
            var le = p.graphMode;
            throw new Error("Unexpected graphMode: " + le)
        }
    }
    ,
    t.Base.prototype.tryGraph = function(e, a, i) {
        try {
            return this.graph(e, a, i)
        } catch (e) {
            var o = e instanceof t.Error ? e.getError() : r.parseError().getError();
            return [n.errorBranch(o)]
        }
    }
    ,
    t.Base.prototype.graph = function(e, t, a) {
        var i = this.getGraphInfo(e, t);
        return this._graph(e, t, a, i)
    }
    ,
    t.BaseComparator.prototype.graph = function(e, i, o) {
        var r = this.getGraphInfo(e, i)
          , s = r.graphMode
          , p = "baseComparator"
          , u = void 0 === this.userData.lines || this.userData.lines;
        if (s === l.IMPLICIT)
            return this._graph(e, i, o, r);
        if (s === l.NONE)
            return !1;
        if (!(i instanceof t.SolvedEquation))
            return !1;
        var h = this.getOperator()
          , c = []
          , d = []
          , m = !0;
        i._expression.eachElement(function(e) {
            c.push(e.getCompiledFunction());
            try {
                d.push(e.getCompiledDerivative())
            } catch (e) {
                m = !1
            }
        }),
        m || (d = void 0);
        for (var g = [], f = [-1, 0, 0, 1], y = I(this.metaData, ["computedLineWidth", "computedLineOpacity", "computedFillOpacity", "colorLatexValue"], p), v = Math.min(c.length, y), D = 0; D < v; D++) {
            var x = this.getGraphInfo(e, i._expression.args[D]);
            x.graphMode = s,
            x.listIndex = L.getListIdxFromBranchIdx(D, p),
            x.style = this.userData.lineStyle,
            x.color = this.metaData.colorLatexValue ? M(this.metaData.colorLatexValue, D, p) : this.userData.color,
            r.graphMode === l.POLAR && (x.domain = {
                min: this.metaData.evaluatedDomainMin,
                max: this.metaData.evaluatedDomainMax,
                isExplicit: this.metaData.isExplicitDomain
            });
            var b = n.default.computeGraphData({
                viewState: o,
                graphInfo: x,
                compiled: c[D],
                derivative: d ? d[D] : void 0
            });
            b.lineWidth = M(this.metaData.computedLineWidth, D, p),
            b.lineOpacity = M(this.metaData.computedLineOpacity, D, p),
            b.fillOpacity = M(this.metaData.computedFillOpacity, D, p),
            b.operator = a.get(a.table[h].inclusive, f[D % 4]),
            u || (b.lineWidth = 0),
            g.push(b)
        }
        for (D = 0; D < v; D += 4) {
            var O = n.default.polygonsFromSegments(g[D + 1].segments, g[D + 2].segments, s);
            g.push({
                graphMode: l.POLYGONFILL,
                listIndex: g[D].listIndex,
                segments: O,
                poi: {},
                fillOpacity: g[D].fillOpacity,
                color: g[D].color
            })
        }
        return g
    }
    ,
    t.DoubleInequality.prototype.graph = function(e, t, i) {
        var o = this
          , r = this.getGraphInfo(e, t);
        if (r.graphMode === l.NONE)
            return !1;
        var s = []
          , p = a.get(a.table[this._operators[0]].inclusive, 0)
          , u = a.get(a.table[this._operators[1]].inclusive, 0)
          , h = this.userData
          , c = this.metaData
          , d = void 0 === h.lines || h.lines
          , m = ["colorLatexValue", "computedFillOpacity"];
        d && m.push("computedLineWidth", "computedLineOpacity");
        var g = I(c, m);
        return O.eachArgs(t._expressions, function(t, a) {
            if (!(a >= g)) {
                t[0].userData = t[1].userData = h,
                t[0].metaData = t[1].metaData = c;
                var m = o.metaData.colorLatexValue ? M(c.colorLatexValue, a) : h.color
                  , f = M(c.computedLineWidth, a)
                  , y = M(c.computedLineOpacity, a)
                  , v = M(c.computedFillOpacity, a)
                  , D = o._graph(e, t[0], i, r)[0];
                D.listIndex = a,
                D.operator = p,
                D.color = m,
                D.lineWidth = f,
                D.lineOpacity = y,
                s.push(D);
                var x = o._graph(e, t[1], i, r)[0];
                x.listIndex = a,
                x.operator = u,
                x.color = m,
                x.lineWidth = f,
                x.lineOpacity = y,
                s.push(x);
                var L = n.default.polygonsFromSegments(D.segments, x.segments, D.graphMode);
                d || (D.lineWidth = 0,
                x.lineWidth = 0),
                s.push({
                    graphMode: l.POLYGONFILL,
                    listIndex: D.listIndex,
                    segments: L,
                    lineOpacity: y,
                    fillOpacity: v,
                    poi: {},
                    color: m
                })
            }
        }),
        s
    }
    ,
    t.Regression.prototype.graph = function(e, t, a) {
        var i = this.getGraphInfo(e, t);
        return this._graph(e, t.model, a, i)
    }
    ;
    var E = function(e) {
        var t = [];
        return O.wrap(e).eachElement(function(e) {
            t.push(e.args.map(function(e) {
                return e.asValue()
            }))
        }),
        t
    };
    function F(e) {
        return Array.prototype.concat.apply([], e)
    }
    function S(e, t, a) {
        return !!e && (0 === t && 0 === a ? "none" !== e[2].type || "none" !== e[3].type : 0 !== t && 0 !== a ? "none" !== e[0].type && "none" !== e[1].type : 0 !== t ? "none" !== e[0].type : 0 !== a && "none" !== e[1].type)
    }
    function T(e) {
        for (var t = [], a = [], i = 0, o = e; i < o.length; i++) {
            var r = o[i]
              , s = r[0]
              , n = r[1];
            isNaN(s) || isNaN(n) ? (t.length >= 4 && a.push(t),
            t = []) : t.push(s, n)
        }
        return t.length >= 4 && a.push(t),
        a
    }
    t.Object3D.prototype.graph = function(e, t, a) {
        var i = this.getGraphInfo(e, t);
        return [{
            segments: [E(t)],
            color: i.color,
            objectName: this._symbol,
            graphMode: l.OBJECT3D
        }]
    }
    ,
    t.Histogram.prototype.graph = function(e, t, a) {
        var i = this.getGraphInfo(e, t)
          , o = t.args[0].asValue()
          , r = t.args[1].asValue()
          , s = A(o, r, this.userData.vizProps && "left" === this.userData.vizProps.binAlignment ? r / 2 : 0)
          , n = 1;
        this.userData.vizProps && "density" === this.userData.vizProps.histogramMode ? n = 1 / (o.length * r) : this.userData.vizProps && "relative" === this.userData.vizProps.histogramMode && (n = 1 / o.length);
        var p = []
          , u = [];
        for (var h in s) {
            var c = s[h]
              , d = c.data.length;
            u.push([c.min, 0 * n, c.min, d * n, c.max, d * n, c.max, 0 * n]);
            var m = 0;
            s[c.id + 1] && (m = s[c.id + 1].data.length);
            var f = [c.min, 0 * n, c.min, d * n, c.max, d * n];
            m < d && f.push(c.max, m * n),
            p.push(f)
        }
        var y = P("histogram", u);
        return y && r && (y.binWidth = r),
        [{
            segments: u,
            graphMode: l.POLYGONFILL,
            boundingBox: y,
            poi: {},
            color: i.color,
            fillOpacity: g.DEFAULT
        }, {
            segments: p,
            graphMode: l.Y,
            poi: {
                zeros: {
                    x: [],
                    y: []
                },
                extrema: {
                    x: [],
                    y: []
                },
                intercept: {
                    x: [],
                    y: []
                }
            },
            color: i.color
        }]
    }
    ,
    t.DotPlot.prototype.graph = function(e, t, a) {
        var i, o = this.getGraphInfo(e, t), r = t.args[1].asValue(), s = this.userData.vizProps && "left" === this.userData.vizProps.binAlignment ? r / 2 : 0, n = A(t.args[0].asValue(), r, s), p = !1, u = [];
        for (var h in n)
            for (var d = (g = n[h]).data.length - 1; d >= 0; d--)
                g.center !== g.data[d] && (p = !0);
        if (this.userData.vizProps && "exact" === this.userData.vizProps.dotplotXMode)
            for (var h in n) {
                (i = (g = n[h]).data).reverse();
                for (var m = 0; m < i.length; m++)
                    u.push([i[m], m + 1])
            }
        else
            for (var h in n) {
                var g;
                i = (g = n[h]).data;
                for (m = 0; m < i.length; m++)
                    u.push([g.center, m + 1])
            }
        var f = P("dotplot", u);
        f && r && (f.ymin = 0,
        f.xmin -= .5 * r,
        f.xmax += .5 * r,
        f.binWidth = r);
        var y = this.metaData
          , v = y.computedPointOpacity
          , D = y.computedPointSize
          , x = M(v, 0)
          , L = this.userData.pointSize ? M(D, 0) : b.DOTPLOT_DEFAULT;
        return [{
            segments: [u],
            graphMode: l.XYPOINT,
            boundingBox: f,
            poi: c.default(u),
            color: o.color,
            style: this.userData.pointStyle,
            pointSize: L,
            pointOpacity: x,
            showPoint: !0,
            needsDotplotXMode: p
        }]
    }
    ,
    t.BoxPlot.prototype.graph = function(e, t, a) {
        var i = this.getGraphInfo(e, t)
          , o = this.metaData.evaluatedAxisOffset
          , r = this.metaData.evaluatedBreadth
          , n = t.args[0].asValue();
        if (isNaN(r) || isNaN(o))
            return !1;
        var p = Math.min.apply(null, n)
          , u = Math.max.apply(null, n)
          , h = s.quartile(n, 1)
          , d = s.quartile(n, 2)
          , m = s.quartile(n, 3)
          , g = o
          , f = g - r / 2
          , v = g + r / 2
          , D = r / 10
          , x = [];
        if (this.userData.vizProps.showBoxplotOutliers) {
            var L = m - h
              , b = h - 1.5 * L
              , O = m + 1.5 * L;
            p = 1 / 0,
            u = -1 / 0,
            n.forEach(function(e) {
                b <= e && e < p && (p = e),
                u < e && e <= O && (u = e),
                (e < b || e > O) && x.push([e, g])
            })
        }
        var I = [[h, f, m, f, m, v, h, v, h, f], [d, f, d, v], [h, g, p, g], [m, g, u, g], [p, g - D, p, g + D], [u, g - D, u, g + D]];
        if (this.userData.vizProps && "y" === this.userData.vizProps.alignedAxis) {
            for (var M = 0, V = I; M < V.length; M++)
                for (var A = V[M], E = 0; E < A.length; E += 2) {
                    var F = A[E];
                    A[E] = A[E + 1],
                    A[E + 1] = F
                }
            for (var S = 0, T = x; S < T.length; S++) {
                var N = T[S];
                F = N[0];
                N[0] = N[1],
                N[1] = F
            }
        }
        var C = [{
            segments: I,
            graphMode: l.PARAMETRIC,
            boundingBox: P("boxplot", I.concat(x)),
            poi: {},
            color: i.color
        }];
        return x.length && C.push({
            segments: [x],
            graphMode: l.XYPOINT,
            color: i.color,
            style: y.PointStyle.OPEN,
            showPoint: !0,
            poi: c.default(x)
        }),
        C
    }
    ,
    t.Table.prototype.isValueDraggable = function(e, t, a) {
        if (!e.columns[t].isIndependent)
            return !1;
        var i = this.columns[t].values
          , o = i && i[a];
        return !(!o || !isFinite(o.asValue()) || 0 !== o.getDependencies().length)
    }
    ,
    t.Table.prototype.graph = function(e, t, a) {
        var i = {};
        if (t.columns[0].isError)
            return i;
        for (var o = t.columns[0], r = o.values, s = 1; s < this.columns.length; s++) {
            var n = t.columns[s];
            if (!n.isError) {
                var u = this.columns[s].header.userData
                  , h = this.columns[s].header.metaData;
                if (!u.hidden) {
                    for (var d = I(h, ["colorLatexValue", "computedPointSize", "computedPointOpacity"]), m = u.dragMode, g = m === p.DragMode.X || m === p.DragMode.XY, y = m === p.DragMode.Y || m === p.DragMode.XY, v = !!u.points, D = !!u.lines, x = n.isDiscrete(o), L = D && x, b = D && !x, O = [], M = [], P = [], V = [], A = [], E = [], S = 1 / 0, T = -1 / 0, N = 1 / 0, C = -1 / 0, B = {}, w = 0; w < r.length; w++) {
                        var _ = r[w]
                          , z = n.values[w];
                        if (_ && z && isFinite(_.asValue()) && isFinite(z.asValue())) {
                            var G = _.asValue()
                              , W = z.asValue();
                            if (v) {
                                if (w >= d)
                                    continue;
                                var Y = g && this.isValueDraggable(t, 0, w)
                                  , R = y && this.isValueDraggable(t, s, w);
                                Y || R ? (P.push([G, W]),
                                V.push({
                                    index: w,
                                    dragX: Y,
                                    dragY: R
                                })) : M.push([G, W])
                            }
                            L && E.push([G, W]),
                            G < S && (S = G),
                            G > T && (T = G),
                            W < N && (N = W),
                            W > C && (C = W)
                        } else
                            B[w] = !0,
                            L && (E.length > 1 && A.push(E),
                            E = [])
                    }
                    var X = {
                        type: "table",
                        xmin: S,
                        xmax: T,
                        ymin: N,
                        ymax: C
                    };
                    if (P.length && O.push({
                        graphMode: l.XYPOINT_MOVABLE,
                        segments: [P],
                        color: h.colorLatexValue || u.color,
                        tableId: u.tableId,
                        poi: c.default(P),
                        movablePointInfo: V,
                        boundingBox: X,
                        pointOpacity: h.computedPointOpacity
                    }),
                    M.length && O.push({
                        segments: [M],
                        droppedIndices: B,
                        graphMode: l.XYPOINT,
                        showPoint: !0,
                        poi: c.default(M),
                        color: h.colorLatexValue || u.color,
                        pointSize: h.computedPointSize,
                        pointOpacity: h.computedPointOpacity,
                        style: u.pointStyle,
                        tableId: u.tableId,
                        boundingBox: X
                    }),
                    (A.length || E.length) && (A.push(E),
                    O.push({
                        segments: A.map(F),
                        graphMode: l.PARAMETRIC,
                        poi: {},
                        color: f.getDisplayColor(u, h),
                        style: u.lineStyle,
                        lineWidth: Array.isArray(h.computedLineWidth) ? h.computedLineWidth[0] : h.computedLineWidth,
                        lineOpacity: Array.isArray(h.computedLineOpacity) ? h.computedLineOpacity[0] : h.computedLineOpacity,
                        tableId: u.tableId,
                        boundingBox: X
                    })),
                    b) {
                        var q = this.columns[s].header.graph(e, t.columns[s].continuousConcreteTree, a);
                        q.length && Array.prototype.push.apply(O, q)
                    }
                    O.length && (i[u.id] = O)
                }
            }
        }
        return i
    }
    ,
    t.Image.prototype.graph = function(e, t, a) {
        var i = [];
        if (!(t.center.valueType === v.Point && 0 === t.center.getDependencies().length && t.radianAngle.isConstant && t.width.isConstant && t.height.isConstant && t.opacity.isConstant))
            return i;
        for (var o = [], r = [], s = t.width.asValue() / 2, n = t.height.asValue() / 2, p = t.radianAngle.asValue(), u = -1; u <= 1; u++)
            for (var h = -1; h <= 1; h++) {
                var d = t.center.asValue()
                  , m = d[0]
                  , g = d[1]
                  , y = [m + u * s * Math.cos(p) + h * n * Math.sin(p), g - u * s * Math.sin(p) + h * n * Math.cos(p)];
                S(t.moveStrategy, u, h) && (o.push(y),
                r.push([u, h]))
            }
        return i.push({
            segments: [o],
            scaleFactors: [r],
            graphMode: l.XYPOINT_MOVABLE,
            color: f.getDisplayColor(this.userData, this.metaData),
            style: this.userData.style,
            poi: c.default(o),
            movablePointInfo: [],
            pointOpacity: 1
        }),
        i
    }
});
define('core/math/features/elementAt', ['require', 'parsenodes'], function(require) {
    "use strict";
    var t = require("parsenodes");
    t.List.prototype.elementAt = function(e) {
        return (e = Math.floor(e)) >= 0 && e < this.args.length ? this.args[e] : t.Constant(NaN)
    }
    ,
    t.List.prototype.eachElement = function(t) {
        for (var e = 0; e < this.length; e++)
            t(this.elementAt(e), e)
    }
    ,
    t.List.prototype.mapElements = function(t) {
        for (var e = [], n = 0; n < this.length; n++)
            e.push(t(this.elementAt(n), n));
        return e
    }
    ,
    t.ParenSeq.prototype.elementAt = function(e) {
        return e < 0 || e > this.args.length - 1 ? t.Constant(NaN) : this.args[e]
    }
});
define('core/math/features/printLatex', ['require', 'parsenodes', 'core/lib/label', 'core/lib/number-to-latex'], function(require) {
    "use strict";
    var t = require("parsenodes")
      , r = require("core/lib/label")
      , i = require("core/lib/number-to-latex").default;
    function e(t) {
        switch (t) {
        case ">":
            return ">";
        case "<":
            return "<";
        case ">=":
            return "\\ge ";
        case "<=":
            return "\\le ";
        case "=":
            return "="
        }
    }
    function n(t) {
        return t.printLatex()
    }
    function a(t) {
        return t.isConstant && !0 === t.asValue()
    }
    t.Identifier.prototype.printLatex = function() {
        return r.identifierToLatex(this._symbol) + " "
    }
    ,
    t.Constant.prototype.printLatex = function() {
        return i(this.asValue())
    }
    ,
    t.Ticker.prototype.printLatex = function() {
        return "\\ticker\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.Negative.prototype.printLatex = function() {
        return "-\\left(" + this.args[0].printLatex() + "\\right)"
    }
    ,
    t.Add.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)+\\left(" + this.args[1].printLatex() + "\\right)"
    }
    ,
    t.PercentOf.prototype.printLatex = function() {
        return this.args[0].printLatex() + " \\% \\operatorname{of} " + this.args[1].printLatex()
    }
    ,
    t.Subtract.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)-\\left(" + this.args[1].printLatex() + "\\right)"
    }
    ,
    t.Multiply.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)*\\left(" + this.args[1].printLatex() + "\\right)"
    }
    ,
    t.Divide.prototype.printLatex = function() {
        return "\\frac{" + this.args[0].printLatex() + "}{" + this.args[1].printLatex() + "}"
    }
    ,
    t.Exponent.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)^{" + this.args[1].printLatex() + "}"
    }
    ,
    t.Assignment.prototype.printLatex = function() {
        return r.identifierToLatex(this._symbol) + "=" + this._expression.printLatex()
    }
    ,
    t.Equation.prototype.printLatex = function() {
        return this._lhs.printLatex() + "=" + this._rhs.printLatex()
    }
    ,
    t.BaseComparator.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)" + e(this.operator) + "\\left(" + this.args[1].printLatex() + "\\right)"
    }
    ,
    t.DoubleInequality.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)" + e(this.args[1]) + this.args[2].printLatex() + e(this.args[3]) + "\\left(" + this.args[4].printLatex() + "\\right)"
    }
    ,
    t.And.prototype.printLatex = function() {
        if (!(this.args[0]instanceof t.BaseComparator && this.args[1]instanceof t.BaseComparator))
            throw new Error("Not implemented");
        if (this.args[0].args[1].printLatex() !== this.args[1].args[0].printLatex())
            throw new Error("Not implemented");
        return "\\left(" + this.args[0].args[0].printLatex() + "\\right)" + e(this.args[0].operator) + "\\left(" + this.args[0].args[1].printLatex() + "\\right)" + e(this.args[1].operator) + "\\left(" + this.args[1].args[1].printLatex() + "\\right)"
    }
    ,
    t.FunctionCall.prototype.printLatex = function() {
        switch (this._symbol) {
        case "sqrt":
            return "\\sqrt{" + this.args[0].printLatex() + "}";
        case "nthroot":
            return "\\sqrt[" + this.args[1].printLatex() + "]{" + this.args[0].printLatex() + "}";
        case "logbase":
            return "\\log_{" + this.args[1].printLatex() + "}\\left(" + this.args[0].printLatex() + "\\right)";
        default:
            return r.identifierToLatex(this._symbol) + "\\left(" + this.args.map(n).join(", ") + "\\right)"
        }
    }
    ,
    t.SeededFunctionCall.prototype.printLatex = function() {
        return r.identifierToLatex(this._symbol) + "\\left(" + this.args.slice(1).map(n).join(", ") + "\\right)"
    }
    ,
    t.DotAccess.prototype.printLatex = function() {
        return "(" + this.args[0].printLatex() + ").(" + this.args[1].printLatex() + ")"
    }
    ,
    t.Prime.prototype.printLatex = function() {
        switch (this.args[0]._symbol) {
        case "logbase":
            return "\\log_{" + this.args[0].args[1].printLatex() + "}" + Array(this.order + 1).join("'") + "\\left(" + this.args[0].args[0].printLatex() + "\\right)";
        default:
            return r.identifierToLatex(this.args[0]._symbol) + Array(this.order + 1).join("'") + "\\left(" + this.args[0].args.map(n).join(", ") + "\\right)"
        }
    }
    ,
    t.List.prototype.printLatex = function() {
        return "\\left[" + this.args.map(n).join(", ") + "\\right]"
    }
    ,
    t.Range.prototype.printLatex = function() {
        return "\\left[" + this.args[0].args.map(n).join(", ") + " ... " + this.args[1].args.map(n).join(", ") + "\\right]"
    }
    ,
    t.UpdateRule.prototype.printLatex = function() {
        return this.args[0].printLatex() + "\\to(" + this.args[1].printLatex() + ")"
    }
    ,
    t.ListAccess.prototype.printLatex = function() {
        return "\\left(" + this.args[0].printLatex() + "\\right)\\left[" + this.args[1].printLatex() + "\\right]"
    }
    ,
    t.ParenSeq.prototype.printLatex = function() {
        return "\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.BareSeq.prototype.printLatex = function() {
        return this.args.map(n).join(", ")
    }
    ,
    t.Sum.prototype.printLatex = function() {
        return "\\sum_{" + this.args[0].printLatex() + "=" + this.args[1].printLatex() + "}^{" + this.args[2].printLatex() + "}\\left(" + this.args[3].printLatex() + "\\right)"
    }
    ,
    t.Product.prototype.printLatex = function() {
        return "\\prod_{" + this.args[0].printLatex() + "=" + this.args[1].printLatex() + "}^{" + this.args[2].printLatex() + "}\\left(" + this.args[3].printLatex() + "\\right)"
    }
    ,
    t.Integral.prototype.printLatex = function() {
        return "\\int_{" + this.args[1].printLatex() + "}^{" + this.args[2].printLatex() + "}\\left(" + this.args[3].printLatex() + "\\right)d" + this.args[0].printLatex()
    }
    ,
    t.FunctionExponent.prototype.printLatex = function() {
        return this.args[0].printLatex() + "\\left(" + this.args[1].printLatex() + "\\right)^{" + this.args[2].printLatex() + "}"
    }
    ,
    t.FunctionFactorial.prototype.printLatex = function() {
        return this.args[0].printLatex() + "\\left(" + this.args[1].printLatex() + "\\right)!"
    }
    ,
    t.Piecewise.prototype.printLatex = function() {
        var r = this;
        if (a(r.args[0]))
            return r.args[1].printLatex();
        for (var i, e = ["\\left\\{"]; ; ) {
            if (a(r.args[0])) {
                e.push(r.args[1].printLatex());
                break
            }
            if (e.push(r.args[0].printLatex(), ": "),
            (i = r.args[2]).isConstant && i.isNaN()) {
                e.push(r.args[1].printLatex());
                break
            }
            if (e.push(r.args[1].printLatex(), ", "),
            !(r.args[2]instanceof t.Piecewise)) {
                e.push(r.args[2].printLatex());
                break
            }
            r = r.args[2]
        }
        return e.push("\\right\\}"),
        e.join("")
    }
    ,
    t.FunctionDefinition.prototype.printLatex = function() {
        return r.identifierToLatex(this._symbol) + "\\left(" + this._argSymbols.map(r.identifierToLatex).join(", ") + "\\right) = " + this._expression.printLatex()
    }
    ,
    t.Derivative.prototype.printLatex = function() {
        return "\\frac{d}{d" + r.identifierToLatex(this._symbol) + "}\\left(" + this.args[0].printLatex() + "\\right)"
    }
    ,
    t.Regression.prototype.printLatex = function() {
        return "\\left(" + this._lhs.printLatex() + "\\right)\\sim\\left(" + this._rhs.printLatex() + "\\right)"
    }
    ,
    t.Histogram.prototype.printLatex = function() {
        return "\\histogram\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.Object3D.prototype.printLatex = function() {
        return "\\" + this._symbol + "\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.DotPlot.prototype.printLatex = function() {
        return "\\dotplot\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.BoxPlot.prototype.printLatex = function() {
        return "\\boxplot\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.TTest.prototype.printLatex = function() {
        return "\\TTest\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.IndependentTTest.prototype.printLatex = function() {
        return "\\IndependentTTest\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.Stats.prototype.printLatex = function() {
        return "\\Stats\\left(" + this.args.map(n).join(", ") + "\\right)"
    }
    ,
    t.AssignmentExpression.prototype.printLatex = function() {
        return r.identifierToLatex(this._symbol) + "=" + this.args[1].printLatex()
    }
    ,
    t.ListComprehension.prototype.printLatex = function() {
        return "\\left[" + this._body.printLatex() + "\\operatorname{for}" + this._inputLists.map(n).join(", ") + "\\right]"
    }
});
define('core/math/features/getExpressionType', ['require', 'parsenodes', 'core/types/graphmode', 'core/math/expression-types', 'core/math/types'], function(require) {
    "use strict";
    var e = require("parsenodes")
      , t = require("core/types/graphmode")
      , o = require("core/math/expression-types").ExpressionType
      , r = require("core/math/types");
    e.Base.prototype.getExpressionType = function(e, p) {
        return e === t.X || e === t.Y ? o.X_OR_Y : e === t.XYPOINT || e === t.XYPOINT_MOVABLE ? p === r.Point ? o.SINGLE_POINT : o.POINT_LIST : e === t.PARAMETRIC || e === t.PARAMETRIC_CURVE_3D ? o.PARAMETRIC : e === t.POLAR ? o.POLAR : e === t.IMPLICIT ? o.IMPLICIT : r.isTypeOrListOfType(p, r.Polygon) ? o.POLYGON : o.X_OR_Y
    }
    ,
    e.Histogram.prototype.getExpressionType = function(e, t) {
        return o.HISTOGRAM
    }
    ,
    e.Object3D.prototype.getExpressionType = function(e, t) {
        return o.CUBE
    }
    ,
    e.DotPlot.prototype.getExpressionType = function(e, t) {
        return o.DOTPLOT
    }
    ,
    e.BoxPlot.prototype.getExpressionType = function(e, t) {
        return o.BOXPLOT
    }
});
define('core/math/parser', ["require", "exports", "tslib", "core/math/baseparser", "core/math/features/getConcreteTree", "core/math/features/buildIRExpression", "core/math/features/typeCheck", "core/math/features/repr", "core/math/features/substitute", "core/math/features/simpleFunctionExpression", "core/math/features/analyze", "core/math/features/analyzeFourFunction", "core/math/features/analyzeScientific", "core/math/features/analyzeSingleExpressionScientific", "core/math/features/getgraphmode", "core/math/features/getgraphinfo", "core/math/features/getMoveStrategy", "core/math/features/getDefaultDragMode", "core/math/features/tableinfo", "core/math/features/tableerror", "core/math/features/graph", "core/math/features/elementAt", "core/math/features/printLatex", "core/math/features/getExpressionType"], function(require, e, t, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    t.__exportStar(r, e)
});
define('core/math/interpolatedlabel', ["require", "exports", "parsenodes", "core/lib/label", "./policy", "core/math/types"], function(require, e, t, n, r, a) {
    "use strict";
    function u(e) {
        if (e.length < 2)
            return "text";
        var t = e.split("`").length - 1;
        return t < 2 ? "text" : 2 === t && "`" === e[0] && "`" === e[e.length - 1] ? "latex" : "mixed"
    }
    function i(e) {
        if (0 === e.length)
            return [""];
        for (var t = [], n = e.split(/(`)/), r = !1, a = "", u = 0; u < n.length; u++) {
            var i = n[u];
            i.length && ("`" === i ? (a += "`",
            (r = !r) || (t.push(a),
            a = "")) : (a += i,
            r || (t.push(a),
            a = "")))
        }
        return a.length && t.push(a),
        t
    }
    function l(e) {
        for (var t, n = "\\$({" + ["[a-zA-Z][0-9]*", "[a-zA-Z]_[a-zA-Z0-9]+", "[a-zA-Z]_\\{[a-zA-Z0-9]+\\}", "\\\\[a-zA-Z]+", "\\\\[a-zA-Z]+_{[a-zA-Z0-9]+}", "\\\\[a-zA-Z]+_[a-zA-Z0-9]+"].join("})|\\$({") + "})", r = new RegExp(n,"g"), a = [], u = 0, i = 0; t = r.exec(e); ) {
            (i = t.index) > u && a.push(e.substr(u, i - u));
            var l = t[0]
              , s = l.replace(/[{}\$]/g, "").replace(/^([a-zA-Z])([0-9]+)$/, "$1_$2");
            a.push({
                symbol: s,
                str: l
            }),
            u = t.index + l.length
        }
        return u < e.length && a.push(e.substr(u)),
        {
            raw: e,
            parts: a
        }
    }
    function s(e, t) {
        return t ? "{" + n.truncatedLatexLabel(e, {
            bigCutoff: 1e7,
            digits: 8
        }) + "}" : n.truncatedPlainmathLabel(e, {
            bigCutoff: 1e7,
            digits: 8
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.interpolate = e.parse = e.chunkLabel = e.classifyLabelText = void 0,
    e.classifyLabelText = u,
    e.chunkLabel = i,
    e.parse = function(e) {
        return i(e).map(l)
    }
    ,
    e.interpolate = function(e, n, i) {
        return e.map(function(e) {
            return function(e, n, i) {
                for (var l = [], o = "latex" === u(e.raw), p = 0, f = e.parts; p < f.length; p++) {
                    var c = f[p];
                    if ("string" == typeof c)
                        l.push(c);
                    else {
                        var h = t.Identifier(c.symbol).tryGetConcreteTree(r.defaultPolicy, n);
                        if (h.valueType === a.Number && 0 === h.getDependencies().length) {
                            if ("number" == typeof (g = h.asValue())) {
                                l.push(s(g, o));
                                continue
                            }
                        } else if (h.valueType === a.ListOfNumber && i < h.length && 0 === h.getDependencies().length) {
                            var g;
                            if ("number" == typeof (g = h.elementAt(i).asValue())) {
                                l.push(s(g, o));
                                continue
                            }
                        }
                        o ? l.push("{?}") : l.push("?")
                    }
                }
                return l.join("")
            }(e, n, i)
        }).join("")
    }
});
define('core/math/getCLSymbolMap', ["require", "exports", "underscore", "core/lib/label"], function(require, e, t, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getCLSymbolMap = void 0,
    e.getCLSymbolMap = function() {
        var e = {}
          , a = {}
          , s = {}
          , i = [];
        for (var n in this.statements) {
            if (this.statements.hasOwnProperty(n))
                switch ((u = this.statements[n]).type) {
                case "Error":
                    break;
                case "Regression":
                    s[n] = [],
                    i.push(n);
                    break;
                default:
                    var o = u.getLegalExports(this.policy);
                    if (o) {
                        for (var p = 0, l = o; p < l.length; p++) {
                            var c = l[p];
                            u.exportPenalty > 0 ? a[c] = n : e[c] = n
                        }
                        s[n] = t.difference(u.getDependencies(), u.getDummyDependencies(), o)
                    }
                }
        }
        for (var d = 0, f = i; d < f.length; d++) {
            n = f[d];
            var u = this.statements[n]
              , h = r.latexToIdentifier(u.userData.residualVariable);
            h && (a[h] = n);
            var v = u.getDependencies().slice()
              , g = {};
            for (c = void 0; c = v.pop(); )
                if (!g[c]) {
                    g[c] = !0;
                    var y = e[c] || a[c];
                    y ? (v.push.apply(v, s[y]),
                    s[n].push(c)) : a[c] = n
                }
        }
        return {
            exportMap: e,
            weakExportMap: a,
            dependencyMap: s
        }
    }
});
define('core/types/line-width', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.THICK = e.DEFAULT = e.THIN = void 0,
    e.THIN = 1,
    e.DEFAULT = 2.5,
    e.THICK = 5
});
define('core/types/point-opacity', ["require", "exports"], function(require, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.DEFAULT = void 0,
    e.DEFAULT = .9
});
define('core/math/context', ["require", "exports", "parsenodes", "./finddependencyorder", "./workerconfig", "./findIntersections", "core/vendor/d3-color", "./policyFourFunction", "./policyScientific", "./policyGraphing", "./frameFourFunction", "./frameScientific", "./frameSingleExpressionScientific", "./frameGraphing", "tslib", "core/math/parser", "core/math/errormsg", "core/math/finddependencyorder", "underscore", "./plotter", "core/types/graphmode", "./interpolatedlabel", "./expression-types", "./getCLSymbolMap", "./distribution-spec", "./maybe-rational", "core/lib/label", "./functions", "core/types/line-width", "core/types/point-opacity", "core/types/point-size", "./evaluationstate", "core/math/types", "./cache-stats", "./parsenode-from-value", "./ir/features/action-to-latex"], function(require, e, t, i, a, s, r, n, o, l, p, d, c, u, h, f, m, v, y, g, _, x, D, b, S, P, O, E, T, F, w, R, M, A, C, I) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Context = void 0;
    var N = "undefined" != typeof performance ? function() {
        return performance.now()
    }
    : function() {
        return Date.now()
    }
      , k = t.Constant
      , L = t.Seed
      , G = t.FunctionCall
      , V = t.Image
      , z = t.Slider
      , W = t.Table
      , j = t.TableColumn
      , B = s.findIntersections
      , q = {
        fourFunction: n.PolicyFourFunction,
        scientific: o.PolicyScientific,
        singleExpressionScientific: o.PolicySingleExpressionScientific,
        singleExpressionFourFunction: n.PolicySingleExpressionFourFunction,
        graphing: l.PolicyGraphing,
        graphing_3d: l.PolicyGraphing3D
    }
      , H = {
        fourFunction: p,
        singleExpressionFourFunction: p,
        scientific: d,
        singleExpressionScientific: c,
        graphing: u,
        graphing_3d: u
    };
    function U(e, i) {
        var a = f.parse(e, i);
        return a.isError || a instanceof t.Expression ? a : m.parseError()
    }
    function X(e) {
        var t = e.rawTree.userData
          , i = e.rawTree.metaData;
        return !!(t.cdf && t.cdf.show && i.distributionSpec)
    }
    function Y(e) {
        var t = e.evaluationState.expression_type
          , i = e.rawTree.userData;
        return !(!i.clickableInfo || !i.clickableInfo.enabled) && (!!e.rawTree.isImage || e.getGraphMode() !== _.XYPOINT_MOVABLE && D.isClickableExpressionType(t))
    }
    function J(e, t) {
        for (var i = "id" + e, a = 0, s = t || []; a < s.length; a++) {
            var r = s[a];
            i += "::" + r[0] + r[1]
        }
        return i
    }
    var K = k(P.maybeRational(0, 1))
      , Q = k(P.maybeRational(1, 1))
      , Z = k(NaN);
    function $(e, t) {
        return e ? "0" === e ? K : "1" === e ? Q : U(e, t) : Z
    }
    function ee(e, t) {
        if (e)
            return U(e, t)
    }
    function te(e) {
        return "ans" !== e.slice(0, 3)
    }
    function ie(e, t) {
        var i = e.multiplyDefined
          , a = e.multiplyDefinedByTables
          , s = e.cyclicallyDefined;
        for (var r in i)
            i.hasOwnProperty(r) && (t[r] = a[r] ? m.multiplyDefinedByTables(r) : m.multiplyDefined(r));
        for (var r in s)
            s.hasOwnProperty(r) && (t[r] = m.cycle(s[r].filter(te)))
    }
    function ae(e, t, i) {
        for (var a = 0, s = i; a < s.length; a++) {
            var r = s[a];
            e[r] || (e[r] = []),
            e[r].push(t)
        }
    }
    function se(e, t, i) {
        if (i.extraDepNodes)
            for (var a = 0, s = i.extraDepNodes; a < s.length; a++) {
                var r = s[a];
                r && ae(e, t, r.getDependencies())
            }
        i.clickHandler && ae(e, t, i.clickHandler.getDependencies())
    }
    function re(e, t, i) {
        var a = e.evaluationState
          , s = e.rawTree
          , r = s.metaData.cdfMin
          , n = s.metaData.cdfMax
          , o = {}
          , l = NaN
          , p = NaN
          , d = "Assignment" === s.type ? s._expression : s
          , c = d && d.metaData && d.metaData.distributionSpec;
        if (r) {
            var u = r.tryGetConcreteTree(t, i);
            u.isConstant && (l = +u.asValue());
            for (var h = 0, f = u.getDependencies(); h < f.length; h++) {
                o[f[h]] = !0
            }
        } else
            l = -1 / 0;
        if (n) {
            var v = n.tryGetConcreteTree(t, i);
            v.isConstant && (p = +v.asValue());
            for (var y = 0, g = v.getDependencies(); y < g.length; y++) {
                o[g[y]] = !0
            }
        } else
            p = 1 / 0;
        var _ = !0
          , x = !0;
        if (isNaN(l) && (_ = !1,
        l = NaN),
        isNaN(p) && (x = !1,
        p = NaN),
        _ ? x ? l > p && (_ = !1,
        x = !1,
        a.error = m.cdfMaxLessThanMin().getError()) : a.error = m.cdfMaxInvalid().getError() : a.error = m.cdfMinInvalid().getError(),
        _ && x) {
            var D = G("cdf", [d, k(l), k(p)]);
            a.cdf_evaluation = +D.tryGetConcreteTree(t, i).asValue()
        }
        var b = -1 / 0
          , S = 1 / 0;
        if (c && (c.discrete && (b = 0),
        "binomialdist" === c.symbol && d.args && d.args[0])) {
            var P = +d.args[0].asValue();
            isFinite(P) && (S = P)
        }
        s.metaData.evaluatedCDFMin = l,
        s.metaData.evaluatedCDFMax = p,
        a.cdf_min_valid = _,
        a.cdf_max_valid = x,
        a.cdf_min_default = b,
        a.cdf_max_default = S,
        a.is_single_identifier = !1,
        R.addSliderPrompts(a, t, o)
    }
    var ne = {
        lineWidth: {
            parseNode: "lineWidth",
            valueOutputProp: "computedLineWidth",
            formulaOutputProp: "",
            validOutputProp: "line_width_valid",
            default: function() {
                return T.DEFAULT
            },
            transform: void 0,
            shouldEvaluate: void 0,
            seed: "lw"
        },
        lineOpacity: {
            parseNode: "lineOpacity",
            valueOutputProp: "computedLineOpacity",
            formulaOutputProp: "",
            validOutputProp: "line_opacity_valid",
            default: void 0,
            transform: void 0,
            shouldEvaluate: void 0,
            seed: "lo"
        },
        pointOpacity: {
            parseNode: "pointOpacity",
            valueOutputProp: "computedPointOpacity",
            formulaOutputProp: "",
            validOutputProp: "point_opacity_valid",
            default: function(e, t, i) {
                return e && t && e.getGraphMode(i, t) === _.XYPOINT_MOVABLE ? 1 : F.DEFAULT
            },
            transform: void 0,
            shouldEvaluate: void 0,
            seed: "po"
        },
        pointSize: {
            parseNode: "pointSize",
            valueOutputProp: "computedPointSize",
            formulaOutputProp: "",
            validOutputProp: "point_size_valid",
            default: function() {
                return w.DEFAULT
            },
            shouldEvaluate: void 0,
            transform: void 0,
            seed: "ps"
        },
        fillOpacity: {
            parseNode: "fillOpacity",
            valueOutputProp: "computedFillOpacity",
            formulaOutputProp: "",
            validOutputProp: "fill_opacity_valid",
            default: void 0,
            transform: void 0,
            shouldEvaluate: function(e) {
                if (!e)
                    return !1;
                var t = e.evaluationState
                  , i = t.expression_type
                  , a = t.is_inequality;
                return !(i !== D.ExpressionType.POLYGON && i !== D.ExpressionType.PARAMETRIC && !a)
            },
            seed: "fo"
        },
        labelSize: {
            parseNode: "labelSize",
            valueOutputProp: "computedLabelSize",
            formulaOutputProp: "",
            validOutputProp: "label_size_valid",
            transform: void 0,
            default: function() {
                return 1
            },
            shouldEvaluate: void 0,
            seed: "ls"
        },
        labelAngle: {
            parseNode: "labelAngle",
            valueOutputProp: "computedLabelAngle",
            formulaOutputProp: "label_angle_value",
            validOutputProp: "label_angle_valid",
            default: function() {
                return 0
            },
            transform: function(e) {
                return "-\\trigAngleMultiplier*(" + e + ")"
            },
            shouldEvaluate: void 0,
            seed: "la"
        }
    };
    function oe(e, t, i, a, s, r) {
        var n, o = ne[r];
        e && (n = e.tryGetConcreteTree(a, s));
        var l = o.default && o.default(e, n, a)
          , p = function(e, t, i, a) {
            var s, r = {}, n = !0, o = NaN, l = !1;
            if (i) {
                var p = i.tryGetConcreteTree(e, t);
                s = 0 === p.getDependencies().length ? p.asValue() : NaN,
                o = (l = Array.isArray(s)) ? s : +s;
                for (var d = 0, c = p.getDependencies(); d < c.length; d++)
                    r[c[d]] = !0
            }
            if (l)
                for (var u = 0, h = o; u < h.length; u++) {
                    var f = h[u];
                    if (!isFinite(+f)) {
                        n = !1,
                        o = NaN;
                        break
                    }
                }
            else
                isFinite(+o) || (n = !1,
                o = NaN);
            return i || (n = !0,
            void 0 !== a && (o = a)),
            {
                value: o,
                valid: n,
                missingVarsMap: r
            }
        }(a, s, i[o.parseNode], l);
        i[o.valueOutputProp] = p.value,
        o.formulaOutputProp && (t[o.formulaOutputProp] = p.value),
        t[o.validOutputProp] = p.valid,
        R.addSliderPrompts(t, a, p.missingVarsMap)
    }
    function le(e, t, i, a) {
        var s, r;
        if (e.rawTree.isTable && e.evaluationState.column_data && e.rawTree.columns)
            for (var n = 0; n < e.evaluationState.column_data.length; n++)
                s = e.evaluationState.column_data[n],
                oe((r = e.rawTree.columns[n].header.metaData)[a], s, r, t, i, a);
        else
            s = e.evaluationState,
            oe((r = e.rawTree.metaData)[a], s, r, t, i, a)
    }
    function pe(e) {
        return r.rgb(e[0], e[1], e[2]).formatHex()
    }
    function de(e, t, i, a, s) {
        var r;
        if (e) {
            var n = e.tryGetConcreteTree(a, s)
              , o = n.getDependencies().length > 0 ? void 0 : n.asValue()
              , l = n.valueType;
            if (r = !(!o || l !== M.RGBColor && l !== M.ListOfColor)) {
                var p = n && n.valueType === M.RGBColor ? pe(o) : o.map(pe);
                t.colorLatexValue = p,
                i.color_latex_value = p
            }
        } else
            r = !0;
        i.color_latex_valid = r
    }
    function ce(e, t, i) {
        var a, s;
        if (e.rawTree.isTable && e.evaluationState.column_data && e.rawTree.columns)
            for (var r = 0; r < e.evaluationState.column_data.length; r++)
                a = e.evaluationState.column_data[r],
                de((s = e.rawTree.columns[r].header.metaData).colorLatex, s, a, t, i);
        else
            a = e.evaluationState,
            de((s = e.rawTree.metaData).colorLatex, s, a, t, i)
    }
    function ue(e, t, i) {
        var a = e.evaluationState
          , s = {}
          , r = e.rawTree.metaData.clickHandler;
        if (r) {
            var n = r.tryGetConcreteTree(t, i);
            n.isError || n.valueType === M.Action || (n = m.eventHandlerTypeError(M.prettyPrint(n.valueType)));
            for (var o = 0, l = n.getDependencies(); o < l.length; o++) {
                var p = l[o];
                t.validActionVariable(p) || (s[p] = !0)
            }
            var d = Object.keys(s);
            d.length > 0 && (n = m.tooManyVariables(d).setDependencies(n.getDependencies())),
            n.isError && !R.isErrorExportableActionDefinition(t, n) ? a.click_handler = {
                status: "error",
                error: n.getError()
            } : n.isEmptyAction ? a.click_handler = {
                status: "empty"
            } : a.click_handler = {
                status: "maybe-valid"
            },
            R.addSliderPrompts(a, t, s)
        }
    }
    function he(e, t, i) {
        var a = e.evaluationState
          , s = e.rawTree
          , r = a.expression_type === D.ExpressionType.POLAR ? s.metaData.polarDomainMin : s.metaData.parametricDomainMin
          , n = a.expression_type === D.ExpressionType.POLAR ? s.metaData.polarDomainMax : s.metaData.parametricDomainMax
          , o = {}
          , l = NaN
          , p = NaN
          , d = !1;
        if (r) {
            d = !0;
            var c = r.tryGetConcreteTree(t, i);
            c.isConstant && (l = +c.asValue());
            for (var u = 0, h = c.getDependencies(); u < h.length; u++) {
                o[h[u]] = !0
            }
        } else
            l = 0;
        if (n) {
            d = !0;
            var f = n.tryGetConcreteTree(t, i);
            f.isConstant && (p = +f.asValue());
            for (var v = 0, y = f.getDependencies(); v < y.length; v++) {
                o[y[v]] = !0
            }
        } else
            a.expression_type === D.ExpressionType.PARAMETRIC ? p = 1 : a.expression_type === D.ExpressionType.POLAR && (p = 12 * Math.PI / +i.trigAngleMultiplier.asValue());
        var g = !0
          , _ = !0;
        isFinite(l) || (g = !1,
        l = NaN),
        isFinite(p) || (_ = !1,
        p = NaN),
        g ? _ ? l > p && (g = !1,
        _ = !1,
        a.error = m.domainMaxLessThanMin().getError()) : a.error = m.domainMaxInvalid().getError() : a.error = m.domainMinInvalid().getError(),
        s.metaData.evaluatedDomainMin = l,
        s.metaData.evaluatedDomainMax = p,
        a.expression_type === D.ExpressionType.POLAR && (s.metaData.isExplicitDomain = d),
        a.domain_min_number = l,
        a.domain_max_number = p,
        a.domain_min_valid = g,
        a.domain_max_valid = _,
        a.expression_type === D.ExpressionType.PARAMETRIC && (delete o.t,
        R.addSliderPrompts(a, t, o))
    }
    function fe(e, t, i) {
        var a = e.evaluationState
          , s = e.rawTree
          , r = s.metaData.vizAxisOffset
          , n = s.metaData.vizBreadth
          , o = {}
          , l = NaN
          , p = NaN;
        if (r) {
            var d = r.tryGetConcreteTree(t, i);
            d.isConstant && (l = +d.asValue());
            for (var c = 0, u = d.getDependencies(); c < u.length; c++) {
                o[u[c]] = !0
            }
        } else
            l = 1;
        if (n) {
            var h = n.tryGetConcreteTree(t, i);
            h.isConstant && (p = +h.asValue());
            for (var f = 0, v = h.getDependencies(); f < v.length; f++) {
                o[v[f]] = !0
            }
        } else
            p = 1;
        var y = !0
          , g = !0;
        isFinite(l) || (y = !1,
        l = NaN),
        isFinite(p) || (g = !1,
        p = NaN),
        y ? g || (a.error = m.boxplotBreadthInvalid().getError()) : a.error = m.boxplotOffsetInvalid().getError(),
        s.metaData.evaluatedAxisOffset = l,
        s.metaData.evaluatedBreadth = p,
        a.viz_values = {
            axisOffset: l,
            breadth: p
        },
        a.viz_valids = {
            axisOffset: y,
            breadth: g
        },
        R.addSliderPrompts(a, t, o)
    }
    function me(e, i, a) {
        if (!e.isError && !e.getDependencies().length && e.valueType === M.Action) {
            var s = e.asValue();
            if (s)
                for (var r in s.updateRules) {
                    i[r] = I.actionLatexForSymbol(s, r);
                    var n = s.updateRules[r]
                      , o = n.value
                      , l = n.valueType;
                    a[r] = t.Assignment(r, C.parseNodeFromValue(l, o))
                }
        }
    }
    var ve = function() {
        function e() {
            this.getCLSymbolMap = b.getCLSymbolMap,
            this.statements = {},
            this.analysis = {},
            this.currentStatus = {},
            this.currentLabel = {},
            this.unpublishedIds = {},
            this.dimensions = {
                width: 0,
                height: 0
            },
            this.intersectId = void 0,
            this.dirtyExportedSymbolRoots = {},
            this.dirtyStatementRoots = {},
            this.markedRegressionDirty = !1,
            this.use_degrees = !1,
            this.initialEvaluation = !1,
            this.globalEventCount = 0,
            this.actions = !0,
            this.setEvaluationMode("graphing"),
            this.setRestrictedFunctions(!1),
            this.setForceEnableGeometryFunctions(!1),
            this.setFunctionDefinition(!0),
            this.setReplaceRoundWithReciprocal(!1),
            this.setDistributions(!0),
            this.invalidate()
        }
        return e.prototype.invalidate = function() {
            for (var e in this.statements)
                this.statements.hasOwnProperty(e) && this.markAsDirtyRoot(e);
            this.currentStatus = {},
            this.analysis = {},
            this.parent_frame = H[this.evaluationMode].getFrame({
                restrictedFunctions: this.restrictedFunctions,
                forceEnableGeometryFunctions: this.forceEnableGeometryFunctions,
                replaceRoundWithReciprocal: this.replaceRoundWithReciprocal,
                distributions: this.distributions,
                additionalFunctions: this.additionalFunctions,
                trigAngleMultiplier: k(this.use_degrees ? Math.PI / 180 : P.maybeRational(1, 1)),
                initialEvaluation: k(this.initialEvaluation ? 1 : 0),
                globalEventCount: k(0),
                globalRandomSeed: L(this.globalRandomSeedString || ""),
                width: q[this.evaluationMode].dimensionVarsEnabled() ? k(P.maybeRational(this.dimensions.width, 1)) : m.variableUnsupported("width"),
                height: q[this.evaluationMode].dimensionVarsEnabled() ? k(P.maybeRational(this.dimensions.height, 1)) : m.variableUnsupported("height")
            }),
            this.frame = Object.create(this.parent_frame),
            this.lastFrame = Object.create(this.parent_frame),
            this.regressionFrame = Object.create(this.parent_frame),
            this.lastClockTickTime = void 0
        }
        ,
        e.prototype.processChangeSet = function(e) {
            var t = N()
              , i = {
                cacheWrites: 0,
                cacheReads: 0,
                cacheHits: 0,
                cacheMisses: 0
            };
            A.setCacheStatStore(i);
            var a = {
                intersections: {},
                graphs: {}
            };
            e.isCompleteState && (this.invalidate(),
            this.statements = {},
            this.currentLabel = {});
            var s = !!e.isCompleteState && !e.isUndoRedoState;
            s !== this.initialEvaluation && (this.initialEvaluation = s,
            this.invalidate()),
            e.viewState && this.setViewState(e.viewState),
            e.hasOwnProperty("degreeMode") && this.setDegreeMode(e.degreeMode),
            e.hasOwnProperty("globalRandomSeed") && this.setGlobalRandomSeed(e.globalRandomSeed),
            e.hasOwnProperty("evaluationMode") && this.setEvaluationMode(e.evaluationMode),
            e.hasOwnProperty("additionalFunctions") && this.setAdditionalFunctions(e.additionalFunctions),
            e.hasOwnProperty("restrictedFunctions") && this.setRestrictedFunctions(e.restrictedFunctions),
            e.hasOwnProperty("forceEnableGeometryFunctions") && this.setForceEnableGeometryFunctions(e.forceEnableGeometryFunctions),
            e.hasOwnProperty("distributions") && this.setDistributions(e.distributions),
            e.hasOwnProperty("functionDefinition") && this.setFunctionDefinition(e.functionDefinition),
            e.hasOwnProperty("replaceRoundWithReciprocal") && this.setReplaceRoundWithReciprocal(e.replaceRoundWithReciprocal),
            e.hasOwnProperty("pointsOfInterest") && this.setWorkerConfigProperty("pointsOfInterest", e.pointsOfInterest),
            e.hasOwnProperty("plotSingleVariableImplicitEquations") && this.setWorkerConfigProperty("plotSingleVariableImplicitEquations", e.plotSingleVariableImplicitEquations),
            e.hasOwnProperty("plotImplicits") && this.setWorkerConfigProperty("plotImplicits", e.plotImplicits),
            e.hasOwnProperty("plotInequalities") && this.setWorkerConfigProperty("plotInequalities", e.plotInequalities),
            e.hasOwnProperty("sliders") && this.setWorkerConfigProperty("sliders", e.sliders),
            e.hasOwnProperty("actions") && this.setActions(!!e.actions),
            e.hasOwnProperty("intersectId") && (this.intersectId = e.intersectId),
            e.hasOwnProperty("dimensions") && this.setDimensions(e.dimensions);
            var r = N();
            this.processStatements(e, a);
            var n = N();
            i.processStatements = n - r,
            r = n,
            this.updateAnalysis(),
            n = N(),
            i.updateAnalysis = n - r,
            r = n,
            e.hasOwnProperty("intersectId") && this._updateIntersections(e.intersectId, a),
            n = N(),
            i.updateIntersections = n - r,
            r = n;
            var o = this._publishAllStatuses();
            n = N(),
            i.publishAllStatuses = n - r,
            r = n,
            this._computeAllLabels(),
            n = N(),
            i.computeAllLabels = n - r,
            r = n,
            this._computeAriaDescriptions(),
            n = N(),
            i.computeAriaDescriptions = n - r,
            r = n,
            this._graphAllChanged(a),
            n = N(),
            i.graphAllChanges = n - r;
            var l = this.processEvents(e.events);
            return this.unpublishedIds = {},
            i.timeInWorker = n - t,
            {
                syncId: e.syncId,
                isCompleteState: e.isCompleteState,
                intersectionChanges: a.intersections,
                statusChanges: o,
                graphChanges: a.graphs,
                timingData: i,
                eventUpdates: l
            }
        }
        ,
        e.prototype.processStatements = function(e, t) {
            if (e.removes)
                for (var i in e.removes) {
                    var a = void 0;
                    if (!e.isCompleteState && this.statements.hasOwnProperty(i) && (a = this.statements[i].getAllIds()),
                    this.removeStatement(i, t),
                    !e.isCompleteState && a)
                        for (var s = 0, r = a; s < r.length; s++) {
                            var n = r[s];
                            t.graphs[n] = void 0
                        }
                }
            if (e.statements)
                for (var i in e.statements) {
                    var o = e.statements[i];
                    null === o || this.addStatement(o, t)
                }
        }
        ,
        e.prototype.setViewState = function(e) {
            if (!y.isEqual(e, this.viewState))
                for (var t in this.viewState = e,
                this.statements)
                    this.statements.hasOwnProperty(t) && (this.unpublishedIds[t] = !0)
        }
        ,
        e.prototype.getViewState = function() {
            if (this.viewState) {
                var e = Object.create(this.viewState);
                return this.parent_frame && this.parent_frame.trigAngleMultiplier ? e.trigAngleMultiplier = this.parent_frame.trigAngleMultiplier.asValue() : e.trigAngleMultiplier = 1,
                e
            }
        }
        ,
        e.prototype.setDegreeMode = function(e) {
            this.use_degrees = e,
            this.invalidate()
        }
        ,
        e.prototype.setDimensions = function(e) {
            void 0 !== e && (this.dimensions = e,
            this.invalidate())
        }
        ,
        e.prototype.setGlobalRandomSeed = function(e) {
            this.globalRandomSeedString = e,
            this.parent_frame.globalRandomSeed = L(e),
            this.dirtyExportedSymbolRoots.globalRandomSeed = !0
        }
        ,
        e.prototype.setEvaluationMode = function(e) {
            this.evaluationMode = e,
            this.policy = q[e],
            this.invalidate()
        }
        ,
        e.prototype.setAdditionalFunctions = function(e) {
            this.additionalFunctions = e,
            this.invalidate()
        }
        ,
        e.prototype.setRestrictedFunctions = function(e) {
            this.restrictedFunctions = e,
            this.invalidate()
        }
        ,
        e.prototype.setForceEnableGeometryFunctions = function(e) {
            this.forceEnableGeometryFunctions = e,
            this.invalidate()
        }
        ,
        e.prototype.setDistributions = function(e) {
            this.distributions = e,
            this.invalidate()
        }
        ,
        e.prototype.setFunctionDefinition = function(e) {
            this.functionDefinition = e,
            this.invalidate()
        }
        ,
        e.prototype.setReplaceRoundWithReciprocal = function(e) {
            this.replaceRoundWithReciprocal = e,
            this.invalidate()
        }
        ,
        e.prototype.setActions = function(e) {
            e !== this.actions && (this.actions = e,
            this.invalidate())
        }
        ,
        e.prototype.setWorkerConfigProperty = function(e, t) {
            t !== a[e] && (a[e] = t,
            this.invalidate())
        }
        ,
        e.prototype._publishAllStatuses = function() {
            var e = {}
              , t = this.currentStatus;
            for (var i in this.currentStatus = {},
            this.unpublishedIds)
                if (this.analysis.hasOwnProperty(i)) {
                    var a = this.analysis[i].evaluationState;
                    y.isEqual(a, t[i]) || (e[i] = a),
                    this.currentStatus[i] = a
                }
            return e
        }
        ,
        e.prototype._computeAllLabels = function() {
            for (var e in this.currentLabel) {
                var t = this.statements[e];
                if (t) {
                    var i = t.tryGetConcreteTree(this.policy, this.frame)
                      , a = 1;
                    i.valueType === M.ListOfPoint && (a = i.length);
                    for (var s = [], r = 0; r < a; r++)
                        s.push(x.interpolate(this.currentLabel[e], this.frame, r));
                    y.isEqual(s, t.computedLabels) || (t.computedLabels = s,
                    this.unpublishedIds[e] = !0)
                }
            }
        }
        ,
        e.prototype._computeAriaDescriptions = function() {
            for (var e in this.analysis) {
                var t = this.analysis[e]
                  , i = t.evaluationState
                  , a = t.rawTree.userData;
                if (a.description && "" !== a.description) {
                    i.computed_description = [];
                    var s = 1;
                    t.concreteTree.isList ? s = t.concreteTree.length : i.dimensions && i.dimensions.x && Array.isArray(i.dimensions.x) && (s = i.dimensions.x.length);
                    for (var r = 0; r < s; r++)
                        i.computed_description.push(x.interpolate(x.parse(a.description), this.frame, r))
                }
            }
        }
        ,
        e.prototype._graphAllChanged = function(e) {
            var t = this.getViewState()
              , i = !1;
            if (g.default.validateViewState(t)) {
                for (var a in this.unpublishedIds)
                    if (this.analysis.hasOwnProperty(a)) {
                        var s = this.analysis[a]
                          , r = s.evaluationState.expression_type
                          , n = r === D.ExpressionType.SINGLE_POINT || r === D.ExpressionType.POINT_LIST;
                        if (s.rawTree.isTable)
                            for (var o = s.graph(t), l = 0, p = s.rawTree.getAllIds(); l < p.length; l++) {
                                var d = p[l];
                                o[d] ? this._notifyGraphComputed(d, o[d], e) : this._notifyGraphRemoved(d, e)
                            }
                        else
                            s.evaluationState.is_graphable && (s.rawTree.userData.shouldGraph || s.rawTree.userData.showLabel && n) ? (this._notifyGraphComputed(a, s.graph(t), e),
                            this.intersectId === a && (i = !0)) : this._notifyGraphRemoved(a, e)
                    }
                y.keys(this.unpublishedIds).length && void 0 !== this.intersectId && (this.unpublishedIds.hasOwnProperty(this.intersectId) || (i = !0)),
                i && this._updateIntersections(this.intersectId, e)
            }
        }
        ,
        e.prototype._notifyGraphRemoved = function(e, t) {
            t.graphs[e] = void 0
        }
        ,
        e.prototype._notifyGraphComputed = function(e, t, i) {
            E.dehydrateGraphData(t),
            i.graphs[e] = t
        }
        ,
        e.prototype._updateIntersections = function(e, t) {
            if (this.viewState)
                if (this.analysis[e] && this.analysis[e].shouldIntersect()) {
                    var i = B(this.analysis, this.viewState, e);
                    t.intersections[e] = i
                } else
                    t.intersections[e] = []
        }
        ,
        e.prototype.getDisabledFeatures = function() {
            var e = this.policy.disabledFeatures();
            !1 === this.functionDefinition && (e = e.concat("FunctionDefinition")),
            !1 === this.actions && (e = e.concat("UpdateRule"));
            var t = this.additionalFunctions || [];
            return e = e.filter(function(e) {
                return ("Exponent" !== e || -1 === t.indexOf("exponent")) && ("PercentOf" !== e || -1 === t.indexOf("percent"))
            })
        }
        ,
        e.prototype.areFractionsDisallowed = function() {
            var e = this.evaluationMode;
            return ("fourFunction" === e || "singleExpressionFourFunction" === e) && (!this.additionalFunctions || -1 === this.additionalFunctions.indexOf("fraction"))
        }
        ,
        e.prototype.addStatement = function(e, i) {
            var a = this;
            if (e) {
                var s = e.id;
                this.markExportsDirty(s),
                this.markAsDirtyRoot(s);
                var r = {
                    index: this.policy.ansEnabled() ? e.index : void 0,
                    disabledFeatures: this.getDisabledFeatures(),
                    disallowFrac: this.areFractionsDisallowed(),
                    seedPrefix: J(s)
                }
                  , n = {
                    extraDepNodes: []
                };
                switch (e.type) {
                case "table":
                    var o = [];
                    this.statements.hasOwnProperty(s) && (o = this.statements[s].getAllIds()),
                    e.shouldGraph = !0;
                    for (var l = e.columns, p = [], d = 0, c = 0, u = l; c < u.length; c++) {
                        var m = u[c];
                        d = Math.max(m.values.length, d)
                    }
                    for (var v = 0; v < l.length; v++) {
                        var y, g = void 0, _ = void 0;
                        m = l[v];
                        y = f.parse(m.latex, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["tr", 0], ["tc", v]])
                        })),
                        g = [];
                        for (var D = -1, b = 0; b < l[v].values.length; b++)
                            m.values[b].replace(/\\space/g, "").match(/\S/) ? (g.push(f.parse(m.values[b], h.__assign(h.__assign({}, r), {
                                seedPrefix: J(s, [["tr", b + 1], ["tc", v]])
                            }))),
                            D = b) : g.push(k(NaN));
                        if (g = g.slice(0, D + 1),
                        (_ = j(y, d, g)).id = m.id,
                        _.header) {
                            if (_.header.userData = m,
                            _.header.metaData = {
                                extraDepNodes: []
                            },
                            m.colorLatex) {
                                var P = U(m.colorLatex, h.__assign(h.__assign({}, r), {
                                    seedPrefix: J(s, [["tr", 0], ["tc", v], ["cl", v]])
                                }));
                                _.header.metaData.colorLatex = P,
                                _.header.metaData.extraDepNodes.push(P)
                            }
                            if (m.pointSize) {
                                var O = U(m.pointSize, h.__assign(h.__assign({}, r), {
                                    seedPrefix: J(s, [["tr", 0], ["tc", v], ["ps", v]])
                                }));
                                _.header.metaData.pointSize = O,
                                _.header.metaData.extraDepNodes.push(O)
                            }
                            if (m.pointOpacity) {
                                var E = U(m.pointOpacity, h.__assign(h.__assign({}, r), {
                                    seedPrefix: J(s, [["tr", 0], ["tc", v], ["po", v]])
                                }));
                                _.header.metaData.pointOpacity = E,
                                _.header.metaData.extraDepNodes.push(E)
                            }
                            if (m.lineWidth) {
                                var T = U(m.lineWidth, h.__assign(h.__assign({}, r), {
                                    seedPrefix: J(s, [["tr", 0], ["tc", v], ["lw", v]])
                                }));
                                _.header.metaData.lineWidth = T,
                                _.header.metaData.extraDepNodes.push(T)
                            }
                            if (m.lineOpacity) {
                                var F = U(m.lineOpacity, h.__assign(h.__assign({}, r), {
                                    seedPrefix: J(s, [["tr", 0], ["tc", v], ["lo", v]])
                                }));
                                _.header.metaData.lineOpacity = F,
                                _.header.metaData.extraDepNodes.push(F)
                            }
                        }
                        p.push(_)
                    }
                    this.statements[s] = W(p);
                    var w = this.statements[s].getAllIds();
                    o.forEach(function(e) {
                        -1 === w.indexOf(e) && a._notifyGraphRemoved(e, i)
                    });
                    break;
                case "image":
                    var R = "-\\trigAngleMultiplier*(" + e.angle + ")"
                      , M = U(e.center, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["ic", s]])
                    }))
                      , A = U(R, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["ia", s]])
                    }))
                      , C = U(e.width, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["iw", s]])
                    }))
                      , I = U(e.height, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["ih", s]])
                    }))
                      , N = U(e.opacity, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["io", s]])
                    }));
                    this.statements[s] = V({
                        center: M,
                        radianAngle: A,
                        width: C,
                        height: I,
                        opacity: N
                    });
                    break;
                case "ticker":
                    this.statements[s] = t.Ticker({
                        handler: U(e.handlerLatex, h.__assign(h.__assign({}, r), {
                            allowDt: !0
                        })),
                        minStep: U(e.minStepLatex || "0", r)
                    });
                    break;
                default:
                    for (var L in e = e,
                    this.statements[s] = f.parse(e.latex, r),
                    ne) {
                        var G = L;
                        if (e[G]) {
                            var B = ne[G]
                              , q = e[G];
                            B.transform && (q = B.transform(q));
                            var H = $(q, h.__assign(h.__assign({}, r), {
                                seedPrefix: J(s, [[B.seed, s]])
                            }));
                            n[G] = H,
                            n.extraDepNodes.push(H)
                        }
                    }
                    if (e.colorLatex) {
                        H = ee(e.colorLatex, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["ac", s]])
                        }));
                        n.colorLatex = H,
                        n.extraDepNodes.push(H)
                    }
                    if (e.polarDomain && e.polarDomain.min && (n.polarDomainMin = $(e.polarDomain.min, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["lm", s]])
                    })),
                    n.extraDepNodes.push(n.polarDomainMin)),
                    e.polarDomain && e.polarDomain.max && (n.polarDomainMax = $(e.polarDomain.max, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["lM", s]])
                    })),
                    n.extraDepNodes.push(n.polarDomainMax)),
                    e.parametricDomain && e.parametricDomain.min && (n.parametricDomainMin = $(e.parametricDomain.min, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["lm", s]])
                    })),
                    n.extraDepNodes.push(n.parametricDomainMin)),
                    e.parametricDomain && e.parametricDomain.max && (n.parametricDomainMax = $(e.parametricDomain.max, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["lM", s]])
                    })),
                    n.extraDepNodes.push(n.parametricDomainMax)),
                    e.vizProps && (e.vizProps.axisOffset && (n.vizAxisOffset = $(e.vizProps.axisOffset, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["vo", s]])
                    })),
                    n.extraDepNodes.push(n.vizAxisOffset)),
                    e.vizProps.breadth && (n.vizBreadth = $(e.vizProps.breadth, h.__assign(h.__assign({}, r), {
                        seedPrefix: J(s, [["vb", s]])
                    })),
                    n.extraDepNodes.push(n.vizBreadth))),
                    e.cdf && e.cdf.show) {
                        var X = S.parseToplevelFunction(e.latex);
                        X && "distribution" === X.type && (n.distributionSpec = X,
                        n.cdfMin = ee(e.cdf.min, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["lm", s]])
                        })),
                        n.extraDepNodes.push(n.cdfMin),
                        n.cdfMax = ee(e.cdf.max, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["lM", s]])
                        })),
                        n.extraDepNodes.push(n.cdfMax))
                    }
                    if (this.statements[s].shouldPromoteToSlider(this.policy)) {
                        var Y = e.slider
                          , K = !(!Y || !Y.isPlayingOnce)
                          , Q = ee(Y && Y.softMin, r)
                          , Z = ee(Y && Y.softMax, r)
                          , te = ee(Y && Y.min, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["lm", s]])
                        }))
                          , ie = ee(Y && Y.max, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["lM", s]])
                        }))
                          , ae = ee(Y && Y.step, h.__assign(h.__assign({}, r), {
                            seedPrefix: J(s, [["ls", s]])
                        }));
                        this.statements[s] = z(this.statements[s], {
                            sliderMin: te,
                            sliderMax: ie,
                            sliderStep: ae,
                            sliderIsPlayingOnce: K,
                            sliderSoftMin: Q,
                            sliderSoftMax: Z
                        })
                    }
                }
                var se = e.clickableInfo;
                se && se.enabled && se.latex && (n.clickHandler = U(se.latex, h.__assign(h.__assign({}, r), {
                    allowIndex: !0
                }))),
                this.statements[s].userData = e,
                this.statements[s].metaData = n;
                var re = e.label;
                if (re) {
                    var oe = this.currentLabel[s];
                    oe && oe.raw === re || (this.currentLabel[s] = x.parse(re))
                } else
                    delete this.currentLabel[s]
            }
        }
        ,
        e.prototype.removeStatement = function(e, t) {
            var i = this.statements[e];
            if (i) {
                if (this.markExportsDirty(e),
                i.isTable) {
                    var a = this;
                    i.getAllIds().forEach(function(e) {
                        a._notifyGraphRemoved(e, t)
                    })
                } else
                    this._notifyGraphRemoved(e, t);
                delete this.currentLabel[e],
                delete this.statements[e],
                delete this.analysis[e],
                delete this.currentStatus[e]
            }
        }
        ,
        e.prototype.markExportsDirty = function(e) {
            if (this.statements[e]) {
                this.statements[e].isRegression && (this.markedRegressionDirty = !0);
                for (var t = 0, i = this.statements[e].getLegalExports(this.policy); t < i.length; t++) {
                    var a = i[t];
                    this.dirtyExportedSymbolRoots[a] = !0
                }
            }
        }
        ,
        e.prototype.markAsDirtyRoot = function(e) {
            this.dirtyStatementRoots[e] = !0
        }
        ,
        e.prototype.getFrame = function() {
            return this.updateAnalysis(),
            this.frame
        }
        ,
        e.prototype.getAnalysis = function() {
            return this.updateAnalysis(),
            this.analysis
        }
        ,
        e.prototype.getEvaluationState = function(e) {
            if (this.updateAnalysis(),
            this.analysis[e])
                return this.analysis[e].evaluationState
        }
        ,
        e.prototype._updateRegressions = function(e) {
            var t = this.frame
              , i = this.lastFrame
              , a = this.regressionFrame
              , s = [];
            for (var r in e)
                e.hasOwnProperty(r) && e[r].isRegression && s.push(r);
            var n = this;
            s.sort(function(e, t) {
                var i = n.statements[e].userData && n.statements[e].userData.residualVariable
                  , a = n.statements[t].userData && n.statements[t].userData.residualVariable;
                return i && !a ? -1 : a && !i ? 1 : 0
            });
            var o = v.findDependencyOrder(this.policy, e, s);
            ie(o, a);
            for (var l = {}, p = 0, d = o.resolved; p < d.length; p++) {
                r = d[p];
                if (this.statements[r].isRegression)
                    this.analysis[r] = e[r].analyze(this.policy, a, t, i, l),
                    this.analysis[r].exportTo(this.policy, t),
                    delete e[r];
                else {
                    var c = e[r].tryGetConcreteTree(this.policy, a);
                    e[r].exportTo(this.policy, c, a),
                    l[r] = {
                        rawTree: e[r],
                        concreteTree: c
                    }
                }
            }
        }
        ,
        e.prototype.buildSymbolToExpressionDirtyMap = function() {
            var e = {};
            for (var t in this.statements)
                if (this.statements.hasOwnProperty(t)) {
                    var i = this.statements[t]
                      , a = i.metaData;
                    if (ae(e, t, i.getDependencies()),
                    ae(e, t, i.getLegalExports(this.policy)),
                    i.isRegression && i.userData && i.userData.residualVariable && ae(e, t, [O.latexToIdentifier(i.userData.residualVariable)]),
                    se(e, t, a),
                    i.isTable && i.columns)
                        for (var s = 0; s < i.columns.length; s++) {
                            var r = i.columns[s];
                            r.header && r.header.metaData && se(e, t, r.header.metaData)
                        }
                }
            return e
        }
        ,
        e.prototype.getDirtyIdsAndSymbols = function(e) {
            var t = {}
              , i = {}
              , a = this.markedRegressionDirty
              , s = []
              , r = [];
            for (var n in this.dirtyStatementRoots)
                this.dirtyStatementRoots[n] && (i[n] = !0,
                s.push(n));
            for (var o in this.dirtyExportedSymbolRoots)
                this.dirtyExportedSymbolRoots[o] && (t[o] = !0,
                r.push(o));
            for (; s.length || r.length; ) {
                for (; s.length; ) {
                    n = s.pop();
                    var l = this.statements[n];
                    if (l) {
                        l.isRegression && (a = !0);
                        for (var p = 0, d = l.getLegalExports(this.policy); p < d.length; p++) {
                            t[o = d[p]] || (t[o] = !0,
                            r.push(o))
                        }
                    }
                }
                for (; r.length; ) {
                    var c = e[o = r.pop()];
                    if (c)
                        for (var u = 0, h = c; u < h.length; u++) {
                            i[n = h[u]] || (i[n] = !0,
                            s.push(n))
                        }
                }
            }
            return {
                ids: i,
                symbols: t,
                hasDirtyRegression: a
            }
        }
        ,
        e.prototype.updateAnalysis = function() {
            var e = this.buildSymbolToExpressionDirtyMap()
              , t = this.getDirtyIdsAndSymbols(e)
              , i = {};
            if (t.hasDirtyRegression) {
                for (var a in this.statements)
                    this.statements[a] && (i[a] = this.statements[a]);
                this.frame = Object.create(this.parent_frame),
                this.regressionFrame = Object.create(this.parent_frame)
            } else {
                var s = t.ids;
                for (var a in s)
                    this.statements[a] && (i[a] = this.statements[a]);
                var r = t.symbols;
                for (var n in r)
                    r[n] && (delete this.frame[n],
                    delete this.regressionFrame[n])
            }
            for (var a in i)
                i[a] && (this.unpublishedIds[a] = !0);
            this.markedRegressionDirty = !1,
            this.dirtyExportedSymbolRoots = {},
            this.dirtyStatementRoots = {};
            var o = this.analysis
              , l = this.frame;
            "graphing" === this.evaluationMode && this._updateRegressions(i);
            var p = v.findDependencyOrder(this.policy, i);
            ie(p, l);
            for (var d = p.resolved, c = 0, u = d; c < u.length; c++) {
                a = u[c];
                switch (this.evaluationMode) {
                case "fourFunction":
                case "singleExpressionFourFunction":
                    o[a] = this.statements[a].analyzeFourFunction(this.policy, l, o),
                    o[a].exportTo(this.policy, l);
                    break;
                case "scientific":
                    o[a] = this.statements[a].analyzeScientific(this.policy, l, o),
                    o[a].exportTo(this.policy, l);
                    break;
                case "singleExpressionScientific":
                    o[a] = this.statements[a].analyzeSingleExpressionScientific(this.policy, l, o),
                    o[a].exportTo(this.policy, l);
                    break;
                case "graphing":
                case "graphing_3d":
                    if (l.r) {
                        var h = Object.create(l);
                        if (h.r = void 0,
                        o[a] = this.statements[a].analyze(this.policy, h, o),
                        o[a].getGraphMode() === _.POLAR) {
                            o[a].exportTo(this.policy, l);
                            continue
                        }
                    }
                    o[a] = this.statements[a].analyze(this.policy, l, o),
                    o[a].exportTo(this.policy, l)
                }
            }
            if ("graphing" === this.evaluationMode || "graphing_3d" === this.evaluationMode)
                for (var f = 0, m = d; f < m.length; f++) {
                    a = m[f];
                    var y = o[a]
                      , g = y.evaluationState.expression_type;
                    for (var x in ne) {
                        var b = x
                          , S = ne[b];
                        S.shouldEvaluate && !S.shouldEvaluate(y) || le(y, this.policy, l, b)
                    }
                    ce(y, this.policy, l),
                    this.actions && Y(y) && ue(y, this.policy, l),
                    g === D.ExpressionType.PARAMETRIC || g === D.ExpressionType.POLAR ? he(y, this.policy, l) : g === D.ExpressionType.BOXPLOT ? fe(y, this.policy, l) : X(y) && re(y, this.policy, l)
                }
            for (var n in function(e) {
                return e.globalRandomSeed || []
            }(e).forEach(function(e) {
                o[e].evaluationState.depends_on_random_seed = !0
            }),
            this.lastFrame = Object.create(this.parent_frame),
            l)
                l.hasOwnProperty(n) && (this.lastFrame[n] = l[n])
        }
        ,
        e.prototype.processEvents = function(e) {
            if (e && this.actions) {
                for (var i, a = Object.create(this.frame), s = {}, r = !1, n = !1, o = 0, l = e; o < l.length; o++) {
                    var p = l[o];
                    switch (this.globalEventCount += 1,
                    a.globalEventCount = t.Constant(this.globalEventCount),
                    p.type) {
                    case "step":
                        if (!(d = this.statements[p.expressionId]))
                            continue;
                        n = !0,
                        me(d.tryGetConcreteTree(this.policy, a), s, a);
                        break;
                    case "click":
                        var d;
                        if (!(d = this.statements[p.expressionId]) || !d.metaData.clickHandler)
                            continue;
                        a.index = t.Constant(p.indexVar + 1),
                        n = !0,
                        r = !0,
                        me(d.metaData.clickHandler.tryGetConcreteTree(this.policy, a), s, a);
                        break;
                    case "clock-tick":
                        (void 0 === i || p.isFirstTick && !i.isFirstTick) && (i = p);
                        break;
                    default:
                        return p
                    }
                }
                if (i)
                    if ((d = this.statements[i.id]) && d instanceof t.Ticker) {
                        var c = d.minStep.tryGetConcreteTree(this.policy, a).asValue();
                        if ("number" == typeof c && c >= 0 && isFinite(c)) {
                            var u = this.lastClockTickTime;
                            if (this.lastClockTickTime = Date.now(),
                            !i.isFirstTick && void 0 !== u)
                                a.dt = t.Constant(this.lastClockTickTime - u),
                                me(d.handler.tryGetConcreteTree(this.policy, a), s, a)
                        }
                    }
                return {
                    objectClicked: r,
                    userAction: n,
                    updates: s
                }
            }
        }
        ,
        e
    }();
    e.Context = ve
});
define('worker/workercore', ['require', 'core/math/context'], function(require) {
    "use strict";
    var e = require("core/math/context").Context;
    return function(n) {
        var t = new e;
        return {
            processChangeSet: function(e) {
                var r = t.processChangeSet(e);
                n("processChangeSet", r)
            }
        }
    }
});
define('console', ['require'], function(require) {
    var o = function() {}
      , n = {};
    return ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd", "time", "timeEnd", "group", "groupCollapsed", "groupEnd", "trace"].forEach(function(e) {
        "undefined" != typeof window && window.console && window.console[e] ? n[e] = function() {
            Function.prototype.apply.call(window.console[e], window.console, arguments)
        }
        : n[e] = o
    }),
    n
});
define('worker/worker', ['require', 'worker/workercore', 'console'], function(require) {
    "use strict";
    var e = require("worker/workercore")
      , a = {};
    require("console").log = function(e) {
        self.postMessage({
            log: JSON.stringify(e)
        })
    }
    ;
    var s = self;
    s.window = s,
    s.onmessage = function(o) {
        var n = o.data && o.data.connectionId;
        if (n)
            if ("destroy" === o.data.originalMessage.type)
                delete a[n];
            else {
                var t = a[n];
                t || (t = e(function(e, a) {
                    s.postMessage({
                        connectionId: n,
                        originalMessage: {
                            type: e,
                            payload: a
                        }
                    })
                }),
                a[n] = t),
                t.processChangeSet(o.data.originalMessage)
            }
    }
    ,
    s.loadMessageQueue && (s.loadMessageQueue.forEach(function(e) {
        s.onmessage(e)
    }),
    delete s.loadMessageQueue)
});
!function() {
    "use strict";
    "undefined" == typeof window && ("undefined" == typeof requirejs && (importScripts("../vendor/require.js"),
    importScripts("config.js")),
    self.loadMessageQueue = [],
    self.onmessage = function(e) {
        self.loadMessageQueue.push(e)
    }
    ,
    requirejs(["worker/worker"]))
}();
define("toplevel/worker", function() {});
