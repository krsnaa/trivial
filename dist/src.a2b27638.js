// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
(function (_searchParams$get) {
  var allPages = [];
  var allProblems = [];
  $.getJSON("https://amctrivial.com/data/allpages.json", function (json) {
    console.log("getJson allpages");
    allPages = json;
  });
  $.getJSON("https://amctrivial.com/data/allproblems.json", function (json) {
    console.log("getJson allproblems");
    allProblems = json;
  });
  var categoryPages = [];
  var theoremPages = [];
  var testsList = "AMC 8, AMC 10, AMC 12, AIME, USAJMO, USAMO, IMO, AJHSME, AHSME";
  var validVersions = {
    "AMC 10": ["A", "B", "Fall A", "Fall B"],
    "AMC 12": ["A", "B", "Fall A", "Fall B"],
    AIME: ["I", "II"]
  };
  var validYears = {
    "AMC 8": {
      min: 1999,
      max: 2023
    },
    "AMC 10": {
      min: 2000,
      max: 2001
    },
    "AMC 10A": {
      min: 2002,
      max: 2022
    },
    "AMC 10B": {
      min: 2002,
      max: 2022
    },
    "AMC 10Fall A": {
      min: 2021,
      max: 2021
    },
    "AMC 10Fall B": {
      min: 2021,
      max: 2021
    },
    "AMC 12": {
      min: 2000,
      max: 2001
    },
    "AMC 12A": {
      min: 2002,
      max: 2022
    },
    "AMC 12B": {
      min: 2002,
      max: 2022
    },
    "AMC 12Fall A": {
      min: 2021,
      max: 2021
    },
    "AMC 12Fall B": {
      min: 2021,
      max: 2021
    },
    AIME: {
      min: 1983,
      max: 1999
    },
    AIMEI: {
      min: 2000,
      max: 2023
    },
    AIMEII: {
      min: 2000,
      max: 2022
    },
    USAJMO: {
      min: 2010,
      max: 2022
    },
    USAMO: {
      min: 1972,
      max: 2022
    },
    IMO: {
      min: 1959,
      max: 2022
    },
    AJHSME: {
      min: 1985,
      max: 1998
    },
    AHSME: {
      min: 1974,
      max: 1999
    }
  };
  var validNums = {
    "AMC 8": {
      min: 1,
      max: 25
    },
    "AMC 10": {
      min: 1,
      max: 25
    },
    "AMC 12": {
      min: 1,
      max: 25
    },
    AIME: {
      min: 1,
      max: 15
    },
    USAJMO: {
      min: 1,
      max: 6
    },
    USAMO: {
      min: 1,
      max: 6
    },
    IMO: {
      min: 1,
      max: 6
    },
    AJHSME: {
      min: 1,
      max: 25
    },
    AHSME: {
      min: 1,
      max: 30
    }
  };
  var whitelist = [{
    value: "3D Geometry Problems",
    shortName: "3D Geo"
  }, {
    value: "Introductory Algebra Problems",
    shortName: "Intro Alg"
  }, {
    value: "Introductory Combinatorics Problems",
    shortName: "Intro Combo"
  }, {
    value: "Introductory Geometry Problems",
    shortName: "Intro Geo"
  }, {
    value: "Introductory Number Theory Problems",
    shortName: "Intro NT"
  }, {
    value: "Introductory Probability Problems",
    shortName: "Intro Prob"
  }, {
    value: "Introductory Trigonometry Problems",
    shortName: "Intro Trig"
  }, {
    value: "Intermediate Algebra Problems",
    shortName: "Int Alg"
  }, {
    value: "Intermediate Combinatorics Problems",
    shortName: "Int Combo"
  }, {
    value: "Intermediate Geometry Problems",
    shortName: "Int Geo"
  }, {
    value: "Intermediate Number Theory Problems",
    shortName: "Int NT"
  }, {
    value: "Intermediate Probability Problems",
    shortName: "Int Prob"
  }, {
    value: "Intermediate Trigonometry Problems",
    shortName: "Int Trig"
  }, {
    value: "Olympiad Algebra Problems",
    shortName: "Oly Alg"
  }, {
    value: "Olympiad Combinatorics Problems",
    shortName: "Oly Combo"
  }, {
    value: "Olympiad Geometry Problems",
    shortName: "Oly Geo"
  }, {
    value: "Olympiad Inequality Problems",
    shortName: "Oly Ineq"
  }, {
    value: "Olympiad Number Theory Problems",
    shortName: "Oly NT"
  }, {
    value: "Olympiad Trigonometry Problems",
    shortName: "Oly Trig"
  }];
  function subjectTag(tagData) {
    console.log("subjectTag:", tagData);
    return "<tag title=\"".concat(tagData.value, "\" contenteditable=\"false\" spellcheck=\"false\" tabindex=\"-1\" class=\"tagify__tag \" value=\"").concat(tagData.value, "\">\n      <x title=\"\" class=\"tagify__tag__removeBtn\" role=\"button\" aria-label=\"remove tag\"></x>\n      <div>\n        <span class=\"tagify__tag-text\">").concat(tagData.shortName, "</span>\n      </div>\n    </tag>");
  }
  var problemOptions = "<input class=\"input-multi input-flex-full\" id=\"input-subjects\"\n    placeholder=\"Choose subjects\">\n  </input>\n  <input class=\"input-multi input-flex-full\" id=\"input-tests\"\n    placeholder=\"Choose tests\"\n    data-whitelist=\"(AMC Tests),AHSME,AMC 8,AMC 10,AMC 12,AIME,USAJMO,USAMO,IMO\">\n  </input>";
  var moreOptions = "<div class=\"options-container text-collapsed\">\n    <h3 class=\"text-collapse-header\" id=\"options-header\">More Options</h3>\n    <div class=\"options-input\" id=\"more-options\">\n      <input class=\"input-field\"\n        id=\"input-name\" type=\"text\" placeholder=\"Custom title\"/>\n      <input class=\"input-field\"\n        id=\"input-break\" type=\"number\" min=\"1\" max=\"40\"\n        placeholder=\"Page break every n problems\"/>\n      <div class=\"input-container checkbox-container input-flex-full\"> \n        <div class=\"checkbox-wrap\" id=\"sort-container\">\n          <input type=\"checkbox\" checked class=\"input-check\" id=\"input-sort\"/>\n          <label class=\"checkbox-label\">Sort by difficulty</label>\n        </div>\n        <div class=\"checkbox-wrap\">\n          <input type=\"checkbox\" class=\"input-check\" id=\"input-hide\"/>\n          <label class=\"checkbox-label\">Hide question sources</label>\n        </div>\n      </div>\n    </div>\n  </div>";
  var yearOption = "<div class=\"input-container input-flex-full\">\n    <label class=\"range-label\">Years</label>\n    <input class=\"input-range\" id=\"input-years\"></input>\n  </div>";
  var yearFullOption = "<div class=\"input-container input-full\">\n    <label class=\"range-label\">Years</label>\n    <input class=\"input-range\" id=\"input-years\"></input>\n  </div>";
  var difficultyOption = "<div class=\"input-container input-flex-full\">\n    <label class=\"range-label\">\n      Difficulty range<sup><a\n        class=\"dark-link\" id=\"difficulty-link\"\n        href=\"#\"\n        >(?)</a\n      ></sup>\n    </label>\n    <input class=\"input-range\" id=\"input-diff\"></input>\n  </div>";
  var difficultyChart = "\n      <div class=\"difficulty-info-hidden\" id=\"difficulty-info\">\n        Difficulty levels are based on <a\n          href=\"https://artofproblemsolving.com/wiki/index.php/AoPS_Wiki:Competition_ratings\"\n        >AoPS Wiki ratings</a>. They\u2019re just determined by test and problem\n        number, and may be inaccurate for old exams.\n        <div id=\"difficulty-chart\"></div>\n      </div>";
  var replaceButton = "<button class=\"text-button replace-problem\">\n    (Replace problem)\n  </button>";
  var displaySettingsText = "<div class=\"display-settings\">\n    <span class=\"settings-text\">Settings</span\n    ><button\n      class=\"text-button setting-button\"\n      id=\"serif-toggle\"\n      tabindex=\"0\"\n    >\n      Sans font\n    </button> \u22C5\n    <button\n      class=\"text-button setting-button\"\n      id=\"justify-toggle\"\n      tabindex=\"0\"\n    >\n      Unjustified text\n    </button> \u22C5\n    <button\n      class=\"text-button setting-button\"\n      id=\"counter-toggle\"\n      tabindex=\"0\"\n    >\n      Counters on\n    </button> \u22C5\n    <button\n      class=\"text-button setting-button\"\n      id=\"autogen-toggle\"\n      tabindex=\"0\"\n    >\n      Auto-generate on\n    </button> \u22C5\n    <button\n      class=\"text-button setting-button\"\n      id=\"print-toggle\"\n      tabindex=\"0\"\n    >\n      Links unprinted\n    </button>\n  </div>";
  var notes = "<div class=\"notes\">\n    <h3 class=\"text-collapse-header\" id=\"notes-header\">Tips</h3>\n    <ul id=\"notes-text\">\n      <li>\n        If nothing is chosen for the tests option, problems from all tests, even\n        non-AMC ones, will be included. Choosing AMC Tests includes all the\n        tests in the dropdown, counting the IMO as well.\n      </li>\n      <li>\n        The different subjects are based on AoPS Wiki categories. They don\u2019t\n        cover all the problems, so categorizing more pages on the wiki is greatly\n        appreciated.\n      </li>\n        <ul>\n          <li>To add a category, edit any problem page and add\n          <code>[[Category:SUBJECT]]</code> to the bottom (replace\n          <code>SUBJECT</code> with the actual subject, like Introductory\n          Geometry Problems).\n          </li>\n        </ul><!--\n      <li>\n        Historical notes:\n        <ul>\n          <li>AJHSME tests are counted as AMC 8 tests before 1999.</li>\n          <li>\n            The AHSME was introduced in its 30-question form in 1974. The AIME\n            was introduced in 1983, and the AJHSME in 1985. USAJMO problems are\n            available since 2010. All other major exams predate 1974. \n          </li>\n          <li>\n            The 30-question AHSME was replaced by the AMC 10 and AMC 12 while\n            the AIME was split into the AIME I and AIME II in 2000. The AMC 10\n            and AMC 12 were similarly split into\n            <a href=\"https://en.wikipedia.org/wiki/Taiwan\" class=\"secret-link\"\n              >tw</a\n            >o A and B tests in 2002.\n          </li>\n        </ul>\n      </li>-->\n      <li>\n        Check out more math materials in collections like <a\n        href=\"https://artofproblemsolving.com/community/c2008407h2550333_handouts_list\"\n        >this one</a> on AoPS, and join the\n        <a href=\"https://discord.gg/VExpSZfkAE\">Discord server</a> to\n        ask for help, discuss problems, and more!\n      </li>\n    <ul>\n  </div>";
  var printLinks = false;
  var clickedTimes = 0;
  var answerTimes = 0;
  var subtitleClicked = 0;
  var settingsClicked = "";
  var answerTries = 0;
  var streakCount = 0;
  var progressUpdated = false;
  var searchParams = new URLSearchParams(location.search);
  var lastParam = (_searchParams$get = searchParams.get("page")) !== null && _searchParams$get !== void 0 ? _searchParams$get : searchParams.get("problems");
  var testInfo = {
    testYear: searchParams.get("testyear"),
    testName: searchParams.get("testname")
  };

  // Toggles settings
  (function () {
    if (JSON.parse(localStorage.getItem("darkTheme"))) {
      $("#dark-toggle").text("Dark theme");
    }
    if (JSON.parse(localStorage.getItem("darkTheme")) == false) {
      $("#dark-toggle").text("Light theme");
    }
    $("#dark-toggle").click(function () {
      document.body.removeAttribute("style");
      document.querySelector(".page-container").removeAttribute("style");
      if (JSON.parse(localStorage.getItem("darkTheme"))) {
        if (!window.matchMedia("(prefers-color-scheme: dark)").matches) $("#dark-stylesheet-link").remove();
        localStorage.removeItem("darkTheme");
        $("meta[name='color-scheme']").attr("content", "light dark");
        $("#dark-toggle").text("System theme");
      } else if (JSON.parse(localStorage.getItem("darkTheme")) === null) {
        $("#dark-stylesheet-link").remove();
        localStorage.setItem("darkTheme", false);
        $("meta[name='color-scheme']").attr("content", "light");
        $("#dark-toggle").text("Light theme");
      } else {
        $("#stylesheet-link").after("<link id=\"dark-stylesheet-link\" href=\"/src/dark.css\" rel=\"stylesheet\" />");
        localStorage.setItem("darkTheme", true);
        $("meta[name='color-scheme']").attr("content", "dark");
        $("#dark-toggle").text("Dark theme");
      }
    });
  })();

  // Resets date
  (function () {
    if (localStorage.getItem("dateToday") !== new Date().toDateString()) {
      localStorage.setItem("dateToday", new Date().toDateString());
      localStorage.setItem("numToday", 0);
    }
  })();

  // Adds things
  function addProblem(_x, _x2) {
    return _addProblem.apply(this, arguments);
  }
  function _addProblem() {
    _addProblem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(pagename, pushUrl) {
      var _json3;
      var apiEndpoint, params, response, json, finalPage, problemText, problemProblem, problemSolutions, redirHref, redirPage;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            console.log("addProblem:", pagename, pushUrl);
            $(".notes").before("<div class=\"problem-section\" id=\"problem-section\">\n      <h2 class=\"section-header\" id=\"article-header\"></h2>\n      <div class=\"section-options\">\n        <a href=\"\" class=\"aops-link\">\n          View on the AoPS Wiki\n        </a> \u22C5 <button class=\"text-button section-button\" tabindex=\"0\"\n        onclick=\"window.print()\">\n          Print this page\n        </button>\n      </div>\n      <div class=\"article-text\" id=\"problem-text\"></div>\n    </div>\n    <div class=\"problem-section section-collapsed\" id=\"solutions-section\">\n      <h2 class=\"section-header collapse-header\" id=\"solutions-header\">Solutions</h2>\n      <div class=\"article-text\" id=\"solutions-text\"></div>\n    </div>\n    ".concat(displaySettingsText));
            if (JSON.parse(localStorage.getItem("countersHidden"))) {
              $("#counter-toggle").text("Counters off");
            }
            localStorage.setItem("numProblems", JSON.parse(localStorage.getItem("numProblems")) + 1);
            apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
            params = "action=parse&page=".concat(pagename, "&format=json");
            _context17.next = 8;
            return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
          case 8:
            response = _context17.sent;
            _context17.next = 11;
            return response.json();
          case 11:
            json = _context17.sent;
            finalPage = pagename;
            if (!((_json3 = json) !== null && _json3 !== void 0 && _json3.parse)) {
              _context17.next = 57;
              break;
            }
            problemText = latexer(json.parse.text["*"]);
            problemProblem = getProblem(problemText);
            problemSolutions = getSolutions(problemText);
            if (!(problemProblem && problemSolutions)) {
              _context17.next = 20;
              break;
            }
            _context17.next = 36;
            break;
          case 20:
            if (!problemText.includes("Redirect to:")) {
              _context17.next = 36;
              break;
            }
            console.log("Redirect problem, going there instead...");
            redirHref = $($.parseHTML(problemText)).find(".redirectText a").attr("href");
            redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
            console.log(redirPage);
            params = "action=parse&page=".concat(redirPage, "&format=json");
            _context17.next = 28;
            return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
          case 28:
            response = _context17.sent;
            _context17.next = 31;
            return response.json();
          case 31:
            json = _context17.sent;
            problemText = latexer(json.parse.text["*"]);
            problemProblem = getProblem(problemText);
            problemSolutions = getSolutions(problemText);
            finalPage = redirPage;
          case 36:
            addHistory(pagename, sourceCleanup(problemProblem).substring(0, 140));
            $("#problem-text").html(problemProblem);
            $("#solutions-text").html(problemSolutions);
            $("#article-header").html(titleCleanup(pagename));
            document.title = titleCleanup(pagename) + " - Trivial Math Practice";
            if (pushUrl) {
              history.pushState({
                page: pagename
              }, titleCleanup(pagename) + " - Trivial Math Practice", "?page=" + underscores(pagename));
              searchParams = new URLSearchParams(location.search);
              lastParam = searchParams.get("page");
            }
            $(".aops-link").attr("href", "https://artofproblemsolving.com/wiki/index.php/".concat(underscores(finalPage)));
            katexFallback();
            customText();
            fixLinks();
            directLinks();
            displaySettings();
            collapseSolutions();
            $("#random-input").addClass("random-input-active");
            if (!$(".practice-progress").length) {
              $("#problem-section").before("<div class=\"practice-progress progress-nobottom progress-hidden\">\n          <div class=\"streak-bar bar-hidden\">" + "<span id=\"streak-num\">0</span> streak</div>\n          <div class=\"question-bar right-questions bar-hidden\" style=\"flex-grow: 0\">" + "<span id=\"right-num\">0</span> correct</div>\n          <div class=\"question-bar retry-questions bar-hidden\" style=\"flex-grow: 0\">" + "<span id=\"retry-num\">0</span> retry</div>\n          <div class=\"spacer-bar\" style=\"flex-grow: 0\"></div>\n          <div class=\"question-bar blank-questions bar-hidden\" style=\"flex-grow: 0\">" + "<span id=\"blank-num\">0</span> blank</div>\n          <div class=\"question-bar wrong-questions bar-hidden\" style=\"flex-grow: 0\">" + "<span id=\"wrong-num\">0</span> incorrect</div>\n        </div>");
              if ($("#random-input").length) $("#random-input").after($(".practice-progress"));
            }
            $(".answer-check").remove();
            _context17.next = 54;
            return addAnswer(pagename.replace(/_/g, " "));
          case 54:
            return _context17.abrupt("return", problemProblem && problemSolutions);
          case 57:
            $(".article-text").before("<p class=\"error\">The page you specified does not exist.</p>");
            $(".article-text").remove();
            $("#article-header").html("Error");
            $(".section-options").remove();
            $("#solutions-section").remove();
          case 62:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return _addProblem.apply(this, arguments);
  }
  function addSearch() {
    console.log("addSearch");
    $(".notes").before("<div class=\"results-container\">\n      <span class=\"results-notice\"></span>\n    </div>");
  }
  function addHistoryContainer() {
    console.log("addHistoryContainer");
    $(".notes").before("<div class=\"results-container\">\n      <button class=\"text-button\" id=\"clear-history\">(Clear history)</button>\n    </div>");
  }
  function addBatch() {
    console.log("addBatch");
    $(".notes").before("<div class=\"problem-section\">\n      <h2 class=\"section-header\" id=\"batch-header\">Problem Set - ".concat(new Date().toLocaleString("en-UK", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }), "</h2>\n      <div class=\"article-text\" id=\"batch-text\"></div>\n    </div>\n    <div class=\"problem-section section-collapsed\" id=\"solutions-section\">\n      <h2 class=\"section-header collapse-header\" id=\"solutions-header\">Solutions</h2>\n      <div class=\"article-text batch-solutions-text\" id=\"solutions-text\"></div>\n    </div>\n    ").concat(displaySettingsText));
    if (JSON.parse(localStorage.getItem("countersHidden"))) {
      $("#counter-toggle").text("Counters off");
    }
    localStorage.setItem("numSets", JSON.parse(localStorage.getItem("numSets")) + 1);
  }
  function addUrlBatch() {
    console.log("addUrlBatch");
    $(".notes").before("<div class=\"options-input\" id=\"problems-input\">\n        <input class=\"input-field\" id=\"input-problems\"\n        type=\"text\" placeholder=\"Problems (paste problem lists here!)\"\n        data-whitelist=\"".concat(sortProblems(allProblems).map(function (e) {
      return titleCleanup(e);
    }).toString(), "\">\n        <button class=\"input-button\" id=\"problems-button\">\n          Go!\n        </button>\n      </div>").concat(moreOptions, "\n      <div class=\"problem-section\">\n        <h2 class=\"section-header\" id=\"batch-header\">Problem Set - ").concat(new Date().toLocaleString("en-UK", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }), "</h2>\n        <div class=\"article-text\" id=\"batch-text\"></div>\n      </div>\n      <div class=\"problem-section section-collapsed\" id=\"solutions-section\">\n        <h2 class=\"section-header collapse-header\" id=\"solutions-header\">Solutions</h2>\n        <div class=\"article-text batch-solutions-text\" id=\"solutions-text\"></div>\n      </div>\n      ").concat(displaySettingsText));
    if (JSON.parse(localStorage.getItem("countersHidden"))) {
      $("#counter-toggle").text("Counters off");
    }
    localStorage.setItem("numSets", JSON.parse(localStorage.getItem("numSets")) + 1);
  }
  function addArticle(_x3, _x4) {
    return _addArticle.apply(this, arguments);
  }
  function _addArticle() {
    _addArticle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(pagename, pushUrl) {
      var _json4;
      var apiEndpoint, params, response, json, problemText, redirHref, redirPage;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            console.log("addArticle:", pagename, pushUrl);
            $(".error").remove();
            $(".problem-section").remove();
            $(".display-settings").remove();
            $(".results-container").remove();
            $("#load-results").remove();
            $(".notes").before("<div class=\"problem-section\">\n      <h2 class=\"section-header\" id=\"article-header\"></h2>\n      <div class=\"section-options\">\n        <a href=\"\" class=\"aops-link\">\n          View on the AoPS Wiki\n        </a> \u22C5 <button class=\"text-button section-button\" tabindex=\"0\"\n        onclick=\"window.print()\">\n          Print this page\n        </button>\n      </div>\n      <div class=\"article-text\" id=\"full-text\"></div>\n    </div>\n    ".concat(displaySettingsText));
            if (JSON.parse(localStorage.getItem("countersHidden"))) {
              $("#counter-toggle").text("Counters off");
            }
            localStorage.setItem("numArticles", JSON.parse(localStorage.getItem("numArticles")) + 1);
            apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
            params = "action=parse&page=".concat(pagename, "&format=json");
            _context18.next = 13;
            return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
          case 13:
            response = _context18.sent;
            _context18.next = 16;
            return response.json();
          case 16:
            json = _context18.sent;
            if (!((_json4 = json) !== null && _json4 !== void 0 && _json4.parse)) {
              _context18.next = 43;
              break;
            }
            problemText = latexer(json.parse.text["*"]);
            if (!problemText.includes("Redirect to:")) {
              _context18.next = 33;
              break;
            }
            console.log("Redirect page, going there instead...");
            redirHref = $($.parseHTML(problemText)).find(".redirectText a").attr("href");
            redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
            console.log(redirPage);
            pagename = redirPage;
            params = "action=parse&page=".concat(redirPage, "&format=json");
            _context18.next = 28;
            return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
          case 28:
            response = _context18.sent;
            _context18.next = 31;
            return response.json();
          case 31:
            json = _context18.sent;
            problemText = latexer(json.parse.text["*"]);
          case 33:
            problemText = $($.parseHTML(problemText)).children().not(".toc").not("table:contains('Printable version')").not("pre:contains('<geogebra>')").map(function () {
              return this.outerHTML;
            }).get().join("");
            addHistory(pagename, sourceCleanup(problemText).substring(0, 140));
            $(".article-text").html(problemText);
            $("#article-header").html(titleCleanup(pagename));
            document.title = titleCleanup(pagename) + " - Trivial Math Practice";
            if (pushUrl) {
              history.pushState({
                page: pagename
              }, titleCleanup(pagename) + " - Trivial Math Practice", "?page=" + underscores(pagename));
              searchParams = new URLSearchParams(location.search);
              lastParam = searchParams.get("page");
            }
            $(".aops-link").attr("href", "https://artofproblemsolving.com/wiki/index.php/".concat(underscores(pagename)));
            katexFallback();
            _context18.next = 47;
            break;
          case 43:
            $(".article-text").before("<p class=\"error\">The page you specified does not exist.</p>");
            $(".article-text").remove();
            $("#article-header").html("Error");
            $(".section-options").remove();
          case 47:
            customText();
            fixLinks();
            directLinks();
            displaySettings();
          case 51:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return _addArticle.apply(this, arguments);
  }
  function fillBatch(_x5, _x6, _x7, _x8) {
    return _fillBatch.apply(this, arguments);
  }
  function _fillBatch() {
    _fillBatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(pagenames, pushUrl, testYear, testName) {
      var makeBatch, _makeBatch10, clickedTimesThen, name;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _makeBatch10 = function _makeBatch12() {
              _makeBatch10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                var problems, problemTitles, redirList, redirIndex, numProblems, invalidProblems, apiEndpoint, paramsList, responseList, jsonList, _iterator13, _step13, _step13$value, _index5, _currentProblem4, _problemText5, _problemProblem5, _problemSolutions5, redirHref, redirPage, _iterator14, _step14, _step14$value, index, currentProblem, problemText, problemProblem, problemSolutions;
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      problems = [];
                      problemTitles = pagenames.split("|").map(function (e) {
                        return e.replace(/_/g, " ").replace("#", "Problems/Problem ");
                      });
                      redirList = [];
                      redirIndex = [];
                      numProblems = problemTitles.length;
                      invalidProblems = 0;
                      apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                      $("#batch-header").after("<div class=\"loading-notice\">\n          <div class=\"loading-text\">Loading problems\u2026</div>\n          <div class=\"loading-bar-container\">\n            <div class=\"loading-bar\"></div>\n          </div>\n        </div>");
                      paramsList = problemTitles.map(function (currentProblem) {
                        return "action=parse&page=".concat(currentProblem, "&format=json");
                      });
                      console.log(paramsList);
                      _context19.next = 12;
                      return Promise.all(paramsList.map(function (params) {
                        return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                      }));
                    case 12:
                      responseList = _context19.sent;
                      console.log(responseList);
                      _context19.next = 16;
                      return Promise.all(responseList.map(function (response) {
                        return response.json();
                      }));
                    case 16:
                      jsonList = _context19.sent;
                      console.log(jsonList);
                      _iterator13 = _createForOfIteratorHelper(problemTitles.entries());
                      try {
                        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                          _step13$value = _slicedToArray(_step13.value, 2), _index5 = _step13$value[0], _currentProblem4 = _step13$value[1];
                          _problemText5 = latexer(jsonList[_index5].parse.text["*"]);
                          _problemProblem5 = getProblem(_problemText5);
                          _problemSolutions5 = getSolutions(_problemText5);
                          if (_problemProblem5 && _problemSolutions5) {
                            problems.push({
                              title: _currentProblem4,
                              difficulty: computeDifficulty(computeTest(_currentProblem4), computeNumber(_currentProblem4), computeYear(_currentProblem4)),
                              problem: _problemProblem5,
                              solutions: _problemSolutions5
                            });
                            $(".loading-bar").css("width", "".concat((problems.length + invalidProblems) / numProblems * 100, "%"));
                          } else if (_problemText5.includes("Redirect to:")) {
                            console.log("Redirect problem, going there instead...");
                            redirHref = $($.parseHTML(_problemText5)).find(".redirectText a").attr("href");
                            redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                            console.log(redirPage);
                            redirList.push(redirPage);
                            redirIndex.push(_index5);
                            $(".loading-bar").css("width", "".concat((problems.length + invalidProblems) / numProblems * 100, "%"));
                          } else {
                            console.log("Invalid problem, skipping...");
                            invalidProblems++;
                          }
                        }
                      } catch (err) {
                        _iterator13.e(err);
                      } finally {
                        _iterator13.f();
                      }
                      if (!redirList[0]) {
                        _context19.next = 33;
                        break;
                      }
                      paramsList = redirList.map(function (redirPage) {
                        return "action=parse&page=".concat(redirPage, "&format=json");
                      });
                      console.log(paramsList);
                      _context19.next = 25;
                      return Promise.all(paramsList.map(function (params) {
                        return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                      }));
                    case 25:
                      responseList = _context19.sent;
                      console.log(responseList);
                      _context19.next = 29;
                      return Promise.all(responseList.map(function (response) {
                        return response.json();
                      }));
                    case 29:
                      jsonList = _context19.sent;
                      console.log(jsonList);
                      _iterator14 = _createForOfIteratorHelper(redirList.entries());
                      try {
                        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                          _step14$value = _slicedToArray(_step14.value, 2), index = _step14$value[0], currentProblem = _step14$value[1];
                          problemText = latexer(jsonList[index].parse.text["*"]);
                          problemProblem = getProblem(problemText);
                          problemSolutions = getSolutions(problemText);
                          problems.splice(redirIndex[index], 0, {
                            title: currentProblem,
                            difficulty: computeDifficulty(computeTest(currentProblem), computeNumber(currentProblem), computeYear(currentProblem)),
                            problem: problemProblem,
                            solutions: problemSolutions
                          });
                        }
                      } catch (err) {
                        _iterator14.e(err);
                      } finally {
                        _iterator14.f();
                      }
                    case 33:
                      if (clickedTimes === clickedTimesThen) {
                        console.log(problems);
                        addProblems(problems, false);
                      }
                    case 34:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19);
              }));
              return _makeBatch10.apply(this, arguments);
            };
            makeBatch = function _makeBatch11() {
              return _makeBatch10.apply(this, arguments);
            };
            console.log("fillBatch:", pagenames, pushUrl, testYear, testName);
            clickedTimes++;
            clickedTimesThen = clickedTimes;
            _context20.next = 7;
            return makeBatch();
          case 7:
            if (clickedTimes === clickedTimesThen) {
              if (pushUrl) {
                console.log(_objectSpread({
                  problems: pagenames
                }, testName ? {
                  testyear: testYear,
                  testname: testName
                } : {}));
                history.pushState(_objectSpread({
                  problems: pagenames
                }, testName ? {
                  testyear: testYear,
                  testname: testName
                } : {}), "Problem Set - Trivial Math Practice", "?problems=" + pagenames + (testYear ? "&testyear=".concat(testYear, "&testname=").concat(testName) : ""));
                searchParams = new URLSearchParams(location.search);
                lastParam = searchParams.get("problems");
              }
              $(".loading-notice").remove();
              katexFallback();
              customText();
              changeName();
              if (testName) {
                name = sanitize("".concat(testYear, " ").concat(testName));
                $("#batch-header").html(name);
                document.title = name + " - Trivial Math Practice";
                $("#input-hide").prop("checked", true);
              }
              fixLinks();
              collapseSolutions();
              directLinks();
              displaySettings();
              hideLinks();
              breakSets();
              addBatchAnswers(pagenames.split("|").map(function (e) {
                return e.replace(/_/g, " ").replace("#", "Problems/Problem ");
              }), testName, testYear);
            }
          case 8:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    return _fillBatch.apply(this, arguments);
  }
  function addAnswer(_x9) {
    return _addAnswer.apply(this, arguments);
  }
  function _addAnswer() {
    _addAnswer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(pagename) {
      var _json$parse, _$;
      var clickedTimesThen, answersTitle, apiEndpoint, params, response, json, answerText, problemNum, answer;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            console.log("addAnswer:", pagename);
            clickedTimes++;
            answerTimes++;
            clickedTimesThen = clickedTimes;
            answerTries = 0;
            progressUpdated = false;
            answersTitle = "".concat(pagename === null || pagename === void 0 ? void 0 : pagename.split(" Problems/Problem")[0], " Answer Key");
            apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
            params = "action=parse&page=".concat(answersTitle, "&format=json");
            _context22.next = 11;
            return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
          case 11:
            response = _context22.sent;
            _context22.next = 14;
            return response.json();
          case 14:
            json = _context22.sent;
            answerText = (_json$parse = json.parse) === null || _json$parse === void 0 ? void 0 : _json$parse.text["*"];
            problemNum = computeNumber(pagename);
            answer = (_$ = $($.parseHTML(answerText))) === null || _$ === void 0 || (_$ = _$.find("ol li")) === null || _$ === void 0 || (_$ = _$.eq(problemNum - 1)) === null || _$ === void 0 ? void 0 : _$.text();
            if (answer) {
              if (clickedTimes === clickedTimesThen) {
                $("#problem-text").after("<div class=\"answer-check\">\n        <form class=\"options-input answer-options\" onsubmit=\"return false\">\n          <input class=\"input-field\" id=\"input-answer\"\n            type=\"text\" placeholder=\"Enter answer (optional)\"/>\n          <button type=\"submit\" class=\"input-button\" id=\"answer-button\">\n            Check Answer\n          </button>\n        </form>\n        <div class=\"answer-feedback\"></div>\n      </div>");
                $("#answer-button").click( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                  var originalAnswer, finalAnswer;
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                      case 0:
                        originalAnswer = sanitize($("#input-answer").val());
                        originalAnswer = originalAnswer.toUpperCase();
                        finalAnswer = originalAnswer;
                        if (finalAnswer) {
                          if (computeTest(pagename) === "AIME") finalAnswer = originalAnswer.padStart(3, "0");
                          answerTries++;
                          if (answerTries == 1) {
                            localStorage.setItem("numToday", JSON.parse(localStorage.getItem("numToday")) + 1);
                            localStorage.setItem("numAnswered", JSON.parse(localStorage.getItem("numAnswered")) + 1);
                          }
                          if (finalAnswer === answer || pagename === "2012 AMC 12B Problems/Problem 12" && (finalAnswer === "D" || finalAnswer === "E") || pagename === "2015 AMC 10A Problems/Problem 20" && finalAnswer === "B" || pagename === "2022 AIME II Problems/Problem 8" && (finalAnswer === "080" || finalAnswer === "081")) {
                            $("#input-answer").removeClass("glow");
                            void document.getElementById("input-answer").offsetWidth;
                            $("#input-answer").addClass("glow");
                            $(".answer-feedback").prepend("<div class=\"feedback-item correct-feedback\">\n                  ".concat(originalAnswer, " is correct! :)\n                </div>"));
                            if (!progressUpdated) {
                              $(".progress-hidden").removeClass("progress-hidden");
                              progressUpdated = true;
                              if (answerTries == 1) {
                                streakCount++;
                                if (streakCount > JSON.parse(localStorage.getItem("numStreak"))) localStorage.setItem("numStreak", streakCount);
                                $(".streak-bar").removeClass("bar-hidden");
                                $(".question-bar.right-questions").removeClass("bar-hidden");
                                $(".question-bar.right-questions").css("flex-grow", parseInt($(".question-bar.right-questions").css("flex-grow")) + 1);
                                $("#right-num").text(parseInt($(".question-bar.right-questions").css("flex-grow")));
                                localStorage.setItem("numCorrect", JSON.parse(localStorage.getItem("numCorrect")) + 1);
                              } else {
                                $(".streak-bar").removeClass("bar-hidden");
                                $(".question-bar.retry-questions").removeClass("bar-hidden");
                                $(".question-bar.retry-questions").css("flex-grow", parseInt($(".question-bar.retry-questions").css("flex-grow")) + 1);
                                $("#retry-num").text(parseInt($(".question-bar.retry-questions").css("flex-grow")));
                                localStorage.setItem("numRetry", JSON.parse(localStorage.getItem("numRetry")) + 1);
                              }
                              $("#solutions-header").click();
                            }
                          } else {
                            streakCount = 0;
                            $("#input-answer").removeClass("shake");
                            void document.getElementById("input-answer").offsetWidth;
                            $("#input-answer").addClass("shake");
                            $(".answer-feedback").prepend("<div class=\"feedback-item wrong-feedback\">\n              ".concat(originalAnswer, " is wrong :(\n              </div>"));
                          }
                        }
                        $("#input-answer").val("");
                        $("#streak-num").text(streakCount);
                      case 6:
                      case "end":
                        return _context21.stop();
                    }
                  }, _callee21);
                })));
              }
            }
          case 19:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    return _addAnswer.apply(this, arguments);
  }
  function addBatchAnswers(_x10, _x11, _x12) {
    return _addBatchAnswers.apply(this, arguments);
  } // Gets and checks pages
  function _addBatchAnswers() {
    _addBatchAnswers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(pagenames, testName, testYear) {
      var clickedTimesThen, apiEndpoint, testsList, uniqueTests, paramsList, responseList, jsonList, jsonDict, _iterator15, _step15, _jsonDict$pageTest, _$2, _step15$value, index, pagename, pageTest, answerText, problemNum, answer;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            console.log("addBatchAnswers:", pagenames, testName, testYear);
            clickedTimes++;
            clickedTimesThen = clickedTimes;
            apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
            testsList = pagenames.map(function (pagename) {
              return pagename === null || pagename === void 0 ? void 0 : pagename.split(" Problems/Problem")[0];
            });
            uniqueTests = _toConsumableArray(new Set(testsList));
            console.log(uniqueTests);
            paramsList = uniqueTests.map(function (test) {
              return "action=parse&page=".concat(test, " Answer Key&format=json");
            });
            _context24.next = 10;
            return Promise.all(paramsList.map(function (params) {
              return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
            }));
          case 10:
            responseList = _context24.sent;
            console.log(responseList);
            _context24.next = 14;
            return Promise.all(responseList.map(function (response) {
              return response.json();
            }));
          case 14:
            jsonList = _context24.sent;
            console.log(jsonList);
            jsonDict = jsonList.reduce(function (jsonDict, json, index) {
              return _objectSpread(_objectSpread({}, jsonDict), {}, _defineProperty({}, uniqueTests[index], json));
            }, {});
            console.log(jsonDict);
            _iterator15 = _createForOfIteratorHelper(pagenames.entries());
            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                _step15$value = _slicedToArray(_step15.value, 2), index = _step15$value[0], pagename = _step15$value[1];
                pageTest = pagename === null || pagename === void 0 ? void 0 : pagename.split(" Problems/Problem")[0];
                answerText = (_jsonDict$pageTest = jsonDict[pageTest]) === null || _jsonDict$pageTest === void 0 || (_jsonDict$pageTest = _jsonDict$pageTest.parse) === null || _jsonDict$pageTest === void 0 ? void 0 : _jsonDict$pageTest.text["*"];
                problemNum = computeNumber(pagename);
                answer = (_$2 = $($.parseHTML(answerText))) === null || _$2 === void 0 || (_$2 = _$2.find("ol li")) === null || _$2 === void 0 || (_$2 = _$2.eq(problemNum - 1)) === null || _$2 === void 0 ? void 0 : _$2.text();
                if (clickedTimes === clickedTimesThen) {
                  if (answer) {
                    if (!$("#batchans-section").length) $("#solutions-section").before("<div class=\"problem-section\" id=\"batchans-section\">\n              <h2 class=\"section-header collapse-header\" id=\"batchans-header\">\n              Answer Check\n                <span class=\"header-minor\">(opt.)</span></h2>\n              <div class=\"answer-list\"></div>\n              <div class=\"options-input batchans-options\">\n                <div class=\"input-container checkbox-container\n                input-flexone-full\">\n                  <div class=\"checkbox-wrap\">\n                    <div class=\"radio-block\">\n                      <input type=\"radio\" name=\"input-feedback\" id=\"score-only\"\n                      value=\"score-only\">\n                      <label class=\"checkbox-label\">Only show score</label>\n                    </div>\n                    <div class=\"radio-block\">\n                      <input type=\"radio\" name=\"input-feedback\" id=\"check-only\"\n                      value=\"check-only\">\n                      <label class=\"checkbox-label\">Only mark questions</label>\n                    </div>\n                    <div class=\"radio-block\">\n                      <input type=\"radio\" name=\"input-feedback\" id=\"show-ans\"\n                      value=\"show-ans\" checked>\n                      <label class=\"checkbox-label\">Show correct answers</label>\n                    </div>\n                    <div class=\"radio-block\">\n                      <input type=\"checkbox\" class=\"input-check\" id=\"input-amc\"/>\n                      <label class=\"checkbox-label\">Use AMC 10/12 scoring</label>\n                    </div>\n                  </div>\n                </div>\n                <button class=\"input-button input-button-flexone-full\"\n                id=\"batchans-button\">\n                  Check Answers\n                </button>\n              </div>\n            </div>");
                    $("#batchans-header").off("click");
                    $("#batchans-header").click(function () {
                      $("#batchans-section").toggleClass("section-collapsed");
                    });
                    $(".answer-list").append("<div class=\"answer-box\" index=\"".concat(index + 1, "\"\n            pagename=\"").concat(pagename, "\" answer=\"").concat(answer, "\">\n            <span class=\"answer-num\">").concat(index + 1, "</span>\n            <input class=\"input-field input-batchans\" type=\"text\"\n            placeholder=\"Enter answer\"/>\n          </div>"));
                  }
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
            $("#batchans-button").click( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var totalAnswers, rightAnswers, blankAnswers, wrongAnswers, statTests, _json$parse2, _apiEndpoint, params, response, json, statsText, statsList;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    $(".feedback-item").remove();
                    if ($("#score-only").prop("checked")) $("#batchans-section").addClass("batchans-scoreonly");else if ($("#check-only").prop("checked")) $("#batchans-section").addClass("batchans-checkonly");else $("#batchans-section").addClass("batchans-showans");
                    if ($("#input-amc").prop("checked")) $("#batchans-section").addClass("batchans-amcscore");
                    $("input[type=radio][name=input-feedback]").change(function () {
                      $("#batchans-section").removeClass("batchans-scoreonly batchans-checkonly batchans-showans");
                      console.log(this.value);
                      switch (this.value) {
                        case "score-only":
                          $("#batchans-section").addClass("batchans-scoreonly");
                        case "check-only":
                          $("#batchans-section").addClass("batchans-checkonly");
                        case "show-ans":
                          $("#batchans-section").addClass("batchans-showans");
                      }
                    });
                    $("#input-amc").off("change");
                    $("#input-amc").change(function () {
                      $("#batchans-section").toggleClass("batchans-amcscore");
                    });
                    totalAnswers = $(".answer-box").length;
                    rightAnswers = 0;
                    blankAnswers = 0;
                    wrongAnswers = 0;
                    $(".answer-box").each(function () {
                      var originalAnswer = sanitize($(this).find(".input-batchans").val());
                      originalAnswer = originalAnswer.toUpperCase();
                      var finalAnswer = originalAnswer;
                      if (finalAnswer) {
                        var pagename = $(this).attr("pagename");
                        if (computeTest(pagename) === "AIME") finalAnswer = originalAnswer.padStart(3, "0");
                        if (finalAnswer === $(this).attr("answer") || pagename === "2012 AMC 12B Problems/Problem 12" && (finalAnswer === "D" || finalAnswer === "E") || pagename === "2015 AMC 10A Problems/Problem 20" && finalAnswer === "B" || pagename === "2022 AIME II Problems/Problem 8" && (finalAnswer === "080" || finalAnswer === "081")) {
                          $(this).append("<span class=\"feedback-item correct-feedback\"><span class=\"feedback-icon\">\u2713</span></span>");
                          rightAnswers++;
                        } else {
                          $(this).append("<span class=\"feedback-item wrong-feedback\">\n                <span class=\"feedback-icon\">\u2717</span>\n                <span class=\"feedback-answer\">(".concat($(this).attr("answer"), ")</span>\n              </span>"));
                          wrongAnswers++;
                        }
                      } else {
                        $(this).append("<span class=\"feedback-item blank-feedback\">\n              <span class=\"feedback-icon\">&#8202;&#8210;&#8202;</span>\n              <span class=\"feedback-answer\">(".concat($(this).attr("answer"), ")</span>\n            </span>"));
                        blankAnswers++;
                      }
                    });
                    if (!$(".score-box").length) $(".batchans-options").after("<div class=\"score-box\">\n              <p class=\"score-line\" id=\"number-score\"></p>\n              <p class=\"score-line\" id=\"amc-score\"></p>\n              <p class=\"score-line amc-stats\" id=\"amc-stats\"></p>\n            </div>");
                    $("#number-score").text("Correct: ".concat(rightAnswers, "/").concat(totalAnswers));
                    $("#amc-score").html("<span class=\"score-num\">Score: ".concat(rightAnswers * 6 + blankAnswers * 1.5, "</span>"));
                    statTests = ["AMC 8", "AMC 10A", "AMC 10B", "AMC 12A", "AMC 12B", "AIME I", "AIME II"];
                    if (!(testName && statTests.includes(testName))) {
                      _context23.next = 29;
                      break;
                    }
                    _apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                    params = "action=parse&page=AMC_historical_results&format=json";
                    _context23.next = 20;
                    return fetch("".concat(_apiEndpoint, "?").concat(params, "&origin=*"));
                  case 20:
                    response = _context23.sent;
                    _context23.next = 23;
                    return response.json();
                  case 23:
                    json = _context23.sent;
                    statsText = (_json$parse2 = json.parse) === null || _json$parse2 === void 0 ? void 0 : _json$parse2.text["*"];
                    statsList = [];
                    $($.parseHTML(statsText)).find("h2:contains(\"".concat(testYear, "\")")).nextAll("h3:contains(\"".concat(testName, "\")")).nextAll("ul").eq(0).children().each(function () {
                      var statsMatch = /floor|cutoff|roll|DHR|Distinction|Median|Average/i;
                      statName = $(this).text().replace("Distinguished Honor Roll", "DHR").replace("Honor roll", "Honor Roll");
                      if (statsMatch.test(statName)) {
                        statsList.push(statName);
                      }
                    });
                    statsList = statsList.filter(function (e) {
                      return /\d/.test(e);
                    });
                    $("#amc-stats").html("".concat(statsList.join(", "), " <a href=\"?page=AMC_historical_results\">(link)</a>"));
                  case 29:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23);
            })));
          case 21:
          case "end":
            return _context24.stop();
        }
      }, _callee24);
    }));
    return _addBatchAnswers.apply(this, arguments);
  }
  function getPages() {
    return _getPages.apply(this, arguments);
  }
  function _getPages() {
    _getPages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var addPagesFromArray, addPagesFromJSON, inputSubjects, inputTests, inputYears, inputDiff, subjects, tests, yearsFrom, yearsTo, diffFrom, diffTo, pages, fullPages, _iterator18, _step18, problem, _iterator19, _step19, _loop;
      return _regeneratorRuntime().wrap(function _callee25$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            addPagesFromJSON = function _addPagesFromJSON(members) {
              var _iterator17 = _createForOfIteratorHelper(members),
                _step17;
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var problem = _step17.value;
                  if (validProblem(problem.title)) {
                    if (matchesOptions(problem.title, tests, yearsFrom, yearsTo, diffFrom, diffTo)) pages.push(problem.title);
                    fullPages.push(problem.title);
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            };
            addPagesFromArray = function _addPagesFromArray(members) {
              var _iterator16 = _createForOfIteratorHelper(members),
                _step16;
              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var problem = _step16.value;
                  if (matchesOptions(problem, tests, yearsFrom, yearsTo, diffFrom, diffTo)) pages.push(problem);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            };
            inputSubjects = $("#input-subjects");
            inputTests = $("#input-tests");
            inputYears = $("#input-years");
            inputDiff = $("#input-diff");
            subjects = inputSubjects.val().split(",");
            tests = inputTests.val().split(",");
            yearsFrom = inputYears.data().from;
            yearsTo = inputYears.data().to;
            diffFrom = inputDiff.data().from;
            diffTo = inputDiff.data().to;
            pages = [];
            fullPages = [];
            if (!subjects[0]) {
              subjects[0] = "(All Subjects)";
            }
            if (!tests[0]) {
              tests[0] = "(All Tests)";
            }
            console.log("getPages", subjects, tests, yearsFrom, yearsTo, diffFrom, diffTo);
            if (!subjects.includes("(All Subjects)")) {
              _context26.next = 22;
              break;
            }
            _iterator18 = _createForOfIteratorHelper(allProblems);
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                problem = _step18.value;
                if (matchesOptions(problem, tests, yearsFrom, yearsTo, diffFrom, diffTo)) pages.push(problem);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
            _context26.next = 38;
            break;
          case 22:
            _iterator19 = _createForOfIteratorHelper(subjects);
            _context26.prev = 23;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var subject, _json$query$categorym, apiEndpoint, pagename, params, paramsContinue, response, json, _json5;
              return _regeneratorRuntime().wrap(function _loop$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    subject = _step19.value;
                    if (!categoryPages.some(function (e) {
                      return e.subject === subject;
                    })) {
                      _context25.next = 5;
                      break;
                    }
                    addPagesFromArray(categoryPages.find(function (e) {
                      return e.subject === subject;
                    }).pages);
                    _context25.next = 30;
                    break;
                  case 5:
                    console.log("Loading category ".concat(subject, "..."));
                    apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                    pagename = subject;
                    params = "action=query&list=categorymembers" + "&cmtitle=Category:".concat(pagename, "&cmlimit=max&format=json");
                    _context25.next = 11;
                    return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                  case 11:
                    response = _context25.sent;
                    _context25.next = 14;
                    return response.json();
                  case 14:
                    json = _context25.sent;
                    if (!((_json$query$categorym = json.query.categorymembers) !== null && _json$query$categorym !== void 0 && _json$query$categorym[0])) {
                      _context25.next = 28;
                      break;
                    }
                    addPagesFromJSON(json.query.categorymembers);
                  case 17:
                    if (!((_json5 = json) !== null && _json5 !== void 0 && _json5.continue)) {
                      _context25.next = 28;
                      break;
                    }
                    paramsContinue = params + "&cmcontinue=".concat(json.continue.cmcontinue);
                    _context25.next = 21;
                    return fetch("".concat(apiEndpoint, "?").concat(paramsContinue, "&origin=*"));
                  case 21:
                    response = _context25.sent;
                    _context25.next = 24;
                    return response.json();
                  case 24:
                    json = _context25.sent;
                    addPagesFromJSON(json.query.categorymembers);
                    _context25.next = 17;
                    break;
                  case 28:
                    categoryPages.push({
                      subject: subject,
                      pages: fullPages
                    });
                    console.log("".concat(fullPages.length, " category pages retrieved."));
                  case 30:
                  case "end":
                    return _context25.stop();
                }
              }, _loop);
            });
            _iterator19.s();
          case 26:
            if ((_step19 = _iterator19.n()).done) {
              _context26.next = 30;
              break;
            }
            return _context26.delegateYield(_loop(), "t0", 28);
          case 28:
            _context26.next = 26;
            break;
          case 30:
            _context26.next = 35;
            break;
          case 32:
            _context26.prev = 32;
            _context26.t1 = _context26["catch"](23);
            _iterator19.e(_context26.t1);
          case 35:
            _context26.prev = 35;
            _iterator19.f();
            return _context26.finish(35);
          case 38:
            pages = _toConsumableArray(new Set(pages));
            return _context26.abrupt("return", pages);
          case 40:
          case "end":
            return _context26.stop();
        }
      }, _callee25, null, [[23, 32, 35, 38]]);
    }));
    return _getPages.apply(this, arguments);
  }
  function matchesOptions(problem, tests, yearsFrom, yearsTo, diffFrom, diffTo) {
    console.log("matchesOptions", problem, tests, yearsFrom, yearsTo, diffFrom, diffTo);
    if (!/^\d{4}.*Problems\/Problem \d+$/.test(problem)) return false;
    var problemTest = computeTest(problem);
    if (tests.includes("(AMC Tests)")) {
      tests.splice(tests.indexOf("(AMC Tests)"), 1, "AHSME", "AMC 8", "AMC 10", "AMC 12", "AIME", "USAMO", "IMO");
    }
    if (!tests.includes("(All Tests)") && !tests.includes(problemTest)) return false;
    var problemYear = computeYear(problem);
    if (problemYear < yearsFrom || yearsTo < problemYear) return false;
    var problemNumber = computeNumber(problem);
    var problemDiff = computeDifficulty(problemTest, problemNumber, problemYear);
    if (problemDiff < diffFrom || diffTo < problemDiff) return false;
    return true;
  }
  var validProblem = function validProblem(problem) {
    return problem.includes("Problems/Problem") && problem.match(/^\d{4}/) && problem.match(/\d+$/);
  };
  var computeTest = function computeTest(problem) {
    return problem.match(/(\d{4} )(.*)( Problems)/)[2].replace(/AMC ((?:10)|(?:12))[AB]/, "AMC $1").replace(/AIME I+/, "AIME").replace(/AJHSME/, "AMC 8");
  };
  var computeYear = function computeYear(problem) {
    return problem.match(/^\d{4}/)[0];
  };
  var computeNumber = function computeNumber(problem) {
    return problem.match(/\d+$/)[0];
  };
  function computeDifficulty(test, num, year) {
    console.log("computeDifficulty", test, num, year);
    var diff;
    switch (test) {
      case "AMC 8":
        diff = num < 4 ? 0.25 : num < 7 ? 0.5 : num < 10 ? 0.75 : num < 13 ? 1 : num < 17 ? 1.25 : num < 21 ? 1.5 : num < 24 ? 1.75 : 2;
        break;
      case "AMC 10":
        diff = num < 4 ? 1 : num < 7 ? 1.5 : num < 10 ? 1.75 : num < 13 ? 2 : num < 15 ? 2.25 : num < 17 ? 2.5 : num < 19 ? 2.75 : num < 21 ? 3 : num < 23 ? 3.5 : num < 25 ? 4 : 4.5;
        break;
      case "AMC 12":
        diff = num < 4 ? 1.25 : num < 6 ? 1.5 : num < 9 ? 1.75 : num < 11 ? 2 : num < 14 ? 2.5 : num < 17 ? 3 : num < 19 ? 3.25 : num < 21 ? 3.5 : num < 23 ? 4 : num < 24 ? 4.5 : num < 25 ? 5 : 5.5;
        break;
      case "AHSME":
        diff = num < 4 ? 1 : num < 7 ? 1.5 : num < 10 ? 1.75 : num < 13 ? 2 : num < 15 ? 2.25 : num < 17 ? 2.5 : num < 19 ? 2.75 : num < 21 ? 3 : num < 23 ? 3.5 : num < 25 ? 4 : num < 27 ? 4.5 : num < 29 ? 5 : 5.5;
        break;
      case "AIME":
        diff = num < 3 ? 3 : num < 6 ? 3.5 : num < 8 ? 4 : num < 10 ? 4.5 : num < 11 ? 5 : num < 13 ? 5.5 : num < 14 ? 6 : 6.5;
        break;
      case "USAJMO":
        diff = num == 1 || num == 4 ? 5.5 : num == 2 || num == 5 ? 6 : 7;
        break;
      case "USAMO":
        diff = num == 1 || num == 4 ? 6.5 : num == 2 || num == 5 ? 7.5 : 8.5;
        break;
      case "IMO":
        diff = num == 1 || num == 4 ? 6.5 : num == 2 || num == 5 ? 7.5 : 9.5;
        break;
      case "Alabama ARML TST":
        diff = num < 4 ? 3 : num < 7 ? 3.5 : num < 10 ? 4 : num < 13 ? 4.5 : 5;
        break;
      case "APMO":
        diff = num == 1 ? 6 : num == 2 ? 6.5 : num == 3 ? 7 : num == 4 ? 7.5 : 8.5;
        break;
      case "BMO":
        diff = num == 1 ? 6 : num == 2 ? 6.5 : num == 3 ? 7.5 : 8;
        break;
      case "Canadian MO":
        diff = num == 1 ? 5.5 : num == 2 ? 6 : num == 3 ? 6.5 : num == 4 ? 7 : 7.5;
        break;
      case "Indonesia MO":
        diff = num == 1 || num == 5 ? 3.5 : num == 2 || num == 6 ? 4.5 : num == 3 || num == 7 ? 5 : 6;
        break;
      case "iTest":
        switch (year) {
          case "2006":
          case "2007":
            diff = num < 5 ? 1 : num < 9 ? 1.5 : num < 13 ? 2 : num < 17 ? 2.5 : num < 21 ? 3 : num < 25 ? 3.5 : num < 29 ? 4 : num < 33 ? 4.5 : num < 37 ? 5 : 5.5;
            break;
          case "2008":
            diff = num < 11 ? 1 : num < 21 ? 1.5 : num < 31 ? 2 : num < 41 ? 2.5 : num < 51 ? 3 : num < 61 ? 3.5 : num < 71 ? 4 : num < 81 ? 4.5 : num < 91 ? 5 : 5.5;
            break;
        }
        break;
      case "JBMO":
        diff = num == 1 ? 4 : num == 2 ? 4.5 : num == 3 ? 5 : 6;
        break;
      case "Putnam":
        diff = num == 1 ? 7 : num == 2 ? 7.5 : num == 3 ? 8 : num == 4 ? 8.5 : 9;
        break;
      case "UMO":
        diff = num == 1 ? 3 : num == 2 ? 3.5 : num == 3 ? 4 : num == 4 ? 5 : num == 5 ? 6 : 6.5;
        break;
      case "UNCO Math Contest II":
        diff = num < 2 ? 1 : num < 3 ? 1.5 : num < 4 ? 2 : num < 5 ? 2.5 : num < 6 ? 3 : num < 7 ? 3.5 : num < 8 ? 4 : num < 9 ? 4.5 : num < 10 ? 5 : 5.5;
        break;
      case "UNM-PNM Statewide High School Mathematics Contest II":
        diff = num < 3 ? 2 : num < 4 ? 2.5 : num < 5 ? 3 : num < 6 ? 3.5 : num < 8 ? 4 : num < 9 ? 4.5 : num < 10 ? 5 : 5.5;
        break;
      default:
        diff = -1;
        break;
    }
    return diff;
  }

  // Sorts
  var sortProblems = function sortProblems(problems) {
    return problems.sort(function (a, b) {
      return Math.sign(computeYear(a) - computeYear(b)) || computeTest(a).localeCompare(computeTest(b)) || Math.sign(computeNumber(a) - computeNumber(b));
    });
  };

  // Splits and adds problem parts
  function getProblem(htmlString) {
    console.log("getProblem", htmlString);
    var htmlParsed = $.parseHTML(htmlString);
    var after = $(htmlParsed).children().not(".toc").not("dl:first-child").first().nextUntil(":header:not(:contains('Problem'))").addBack().not(".toc").not("p:last-child > br:first-child").not(":header");
    var afterHTML = $(after).map(function () {
      return this.outerHTML;
    }).get().join("");
    return afterHTML;
  }
  function getSolutions(htmlString) {
    console.log("getSolutions", htmlString);
    var htmlParsed = $.parseHTML(htmlString);
    var after = $(htmlParsed).children().filter(":header:contains('Solution'),:header:contains('Diagram')").nextUntil(":header:contains('See'), table").addBack(":header:contains(' Solution'), :header:contains('Solution '), :header:contains('Solution '), :header:contains('Diagram')").not("p:contains('The problems on this page are copyrighted by the')");
    var afterHTML = $(after).map(function () {
      return this.outerHTML;
    }).get().join("");
    return afterHTML;
  }
  function addProblems(problems, addReplace) {
    console.log("addProblems", problems, addReplace);
    var problemList = problems.map(function (e) {
      return titleCleanup(e.title);
    }).join(", ");
    $("#batch-text").before("<div class=\"section-options\">\n        <button class=\"text-button section-button\" id=\"copy-problems\"\n          data-clipboard-text=\"".concat(problemList, "\" title=\"This list can be copied into ") + "fields for multiple problems, such as making a custom Problem Set.\">\n          Copy problem list\n        </button> \u22C5 <button class=\"text-button section-button\" tabindex=\"0\"\n        onclick=\"window.print()\">\n          Print this page\n        </button>\n      </div>");
    new ClipboardJS("#copy-problems");
    var _iterator = _createForOfIteratorHelper(problems.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          problem = _step$value[1];
        $("#batch-text").append("<div class=\"article-problem\"\n        index=\"".concat(index + 1, "\" difficulty=\"").concat(problem.difficulty, "\">\n        <h2 class=\"problem-heading\">Problem ").concat(index + 1, "\n          <span class=\"source-link\">\n            (<a class=\"source-link-a\"\n              href=\"?page=").concat(underscores(problem.title), "\">").concat(titleCleanup(problem.title), "</a>)\n          </span>").concat(addReplace ? replaceButton : "", "\n        </h2>").concat(problem.problem, "\n      </div>"));
        $("#solutions-text").append("<div class=\"article-problem\" \n        index=\"".concat(index + 1, "\" difficulty=\"").concat(problem.difficulty, "\">\n        <h2 class=\"problem-heading\">\n          Problem ").concat(index + 1, "\n          <span class=\"source-link\">\n            (<a class=\"source-link-a\"\n              href=\"?page=").concat(underscores(problem.title), "\">").concat(titleCleanup(problem.title), "</a>)\n          </span>\n        </h2>").concat(problem.problem, "\n        <div class=\"solutions-divider\">Solution</div>\n        ").concat(problem.solutions, "\n      </div>"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  // Formatting
  var sanitize = function sanitize(string) {
    return string.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  var formatLatex = function formatLatex(string) {
    return string.replace(/&#160;/g, " ").replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^\$|\$$|\\\[|\\\]/g, "").replace(/&lt;/g, "\\lt ").replace(/&gt;/g, "\\gt ").replace(/\$/g, "\\$$").replace(/align\*/g, "aligned").replace(/eqnarray\*/g, "aligned").replace(/{tabular}(\[\w\])*/g, "{array}").replace(/\\bold{/g, "\\mathbf{").replace(/\\congruent/g, "\\cong").replace(/\\overarc/g, "\\overgroup").replace(/\\overparen/g, "\\overgroup").replace(/\\underarc/g, "\\undergroup").replace(/\\underparen/g, "\\undergroup").replace(/\\mathdollar/g, "\\$").replace(/\\textdollar/g, "\\$");
  };
  var titleCleanup = function titleCleanup(string) {
    return decodeURIComponent(string).replace(/_/g, " ").replace("Problems/Problem ", "#").replace(/'/g, "’");
  };
  var underscores = function underscores(string) {
    return string.replace(/ /g, "_").replace(/%2F/g, "/");
  };
  var capitalize = function capitalize(string) {
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  var latexer = function latexer(html) {
    html = html.replace(/<pre>\s+?([\s\S]*?)<\/pre>/g, "<p style='white-space: pre-line;'>$1</p>");
    var images = html.match(/<img (?:.*?) class="latex\w*?" (?:.*?)>/g);
    images = _toConsumableArray(new Set(images));
    if (images) {
      var _iterator2 = _createForOfIteratorHelper(images),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var image = _step2.value;
          if (!image.includes("[asy]")) {
            var isDisplay = /alt="\\\[|\\begin/.test(image);
            var imageLatex = formatLatex(image.match(/alt="(.*?)"/)[1]);
            var renderedLatex = katex.renderToString(imageLatex, {
              throwOnError: false,
              displayMode: isDisplay
            });
            html = html.replaceAll(image, "<span class=\"fallback-container\">$&</span>" + "<katex class=\"katex-container\">".concat(renderedLatex, "</katex>"));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return html;
  };
  var sourceCleanup = function sourceCleanup(string) {
    return string.replace(/<span class="fallback\x2Dcontainer">[\s\S]*?<\/span><katex class="katex\x2Dcontainer">[\s\S]*?<annotation encoding="application\/x\x2Dtex">([\s\S]*?)<\/annotation>[\s\S]*?<\/katex>/g, "$$$1$$").replace(/<span class="mw-headline" id="Problem">Problem<\/span><span class="mw-editsection"><span class="mw-editsection-bracket">\[<\/span><a href=".*?" title="Edit section: Problem">edit<\/a><span class="mw-editsection-bracket">\]<\/span><\/span><\/h2>/g, "").replace(/<span class="mw-headline" id=".*?">(.*?)<\/span>/g, "$1").replace(/<span class="mw-editsection">.*?<\/span><\/span>/g, "").replace(/<a.*?>/g, "").replace(/<\/a>/g, "").replace(/<br.*?>/g, "").replace(/<dl>.*?<\/dl>/g, "").replace(/<img.*?>/g, "").replace(/<p>/g, "").replace(/<\/p>/g, "");
  };

  // Nav elements
  $("#single-problem").click(function () {
    clearAll();
    activeButton("single-problem");
    $("#main-button-container").after("<div class=\"button-container\" id=\"secondary-button-container\">\n        <button type=\"button\" class=\"button secondary-button\"\n          id=\"random-nav\">\n          Random\n        </button>\n        <button type=\"button\" class=\"button secondary-button\"\n          id=\"single-nav\">\n          Select\n        </button>\n        <div class=\"secondary-spacer\"></div>\n      </div>");
    $("#random-nav").click();
    $("#random-input").after($(".practice-progress"));
  });
  $("#problem-batch").click(function () {
    clearAll();
    activeButton("problem-batch");
    $("#main-button-container").after("<div class=\"button-container\" id=\"secondary-button-container\">\n        <button type=\"button\" class=\"button secondary-button\" id=\"ranbatch-nav\">\n          Random\n        </button>\n        <button type=\"button\" class=\"button secondary-button\" id=\"batch-nav\">\n          Past Test\n        </button>\n        <button type=\"button\" class=\"button secondary-button \n        button-flex-full\" id=\"problems-nav\">\n          Custom\n        </button>\n        <div class=\"secondary-spacer\"></div>\n      </div>");
    $("#ranbatch-nav").click();
  });
  $(".page-container").on("click", "#single-nav", function () {
    clearOptions();
    activeSecondaryButton("single-nav");
    $("#secondary-button-container").after("<div class=\"options-input\" id=\"single-input\">\n        <input class=\"input-field input-singletest input-flexone-half\"\n          type=\"text\"\n          id=\"input-singletest\"\n          placeholder=\"Test\"\n          data-whitelist=\"".concat(testsList, "\">\n        </input>\n        <input class=\"input-field input-flexone-half\n          input-singlever\"\n          type=\"text\"\n          id=\"input-singlever\"\n          placeholder=\"Version\"\n          data-whitelist=\"A,B,Fall A,Fall B,I,II\">\n        </input>\n        <input class=\"input-field\"\n          type=\"number\"\n          min=\"1974\"\n          max=\"2022\"\n          id=\"input-singleyear\"\n          placeholder=\"Year\">\n        </input>\n        <input class=\"input-field\"\n          type=\"number\"\n          min=\"1\"\n          max=\"30\"\n          id=\"input-singlenum\"\n          placeholder=\"#\">\n        </input>\n        <button class=\"input-button\" id=\"single-button\">\n          Go!\n        </button>\n      </div>\n      ").concat(notes));
    updateYear();
    collapseText();
    directLinks();
    $("#input-singletest").tagify({
      mode: "select",
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
    $("#input-singlever").tagify({
      mode: "select",
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
  });
  $(".page-container").on("click", "#random-nav", function () {
    clearOptions();
    activeSecondaryButton("random-nav");
    $("#secondary-button-container").after("<div class=\"options-input\" id=\"random-input\">\n        ".concat(problemOptions).concat(yearOption).concat(difficultyOption, "\n        <button class=\"input-button input-button-full\" id=\"random-button\">\n          Go!\n        </button>\n      </div>\n      ").concat(difficultyChart, "\n      ").concat(notes));
    $("#random-input").after($(".practice-progress"));
    renderChart();
    collapseText();
    directLinks();
    $("#input-subjects").tagify({
      whitelist: whitelist,
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100,
        mapValueTo: function mapValueTo(e) {
          return e.value.replace(" Problems", "");
        }
      },
      templates: {
        tag: subjectTag
      }
    });
    $("#input-tests").tagify({
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
    $("#input-years").ionRangeSlider({
      type: "double",
      grid: true,
      min: 1974,
      max: 2022,
      from: 2010,
      to: 2022,
      prettify_enabled: false
    });
    $("#input-diff").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 10,
      from: 0,
      to: 10,
      step: 0.5
    });
    if (!JSON.parse(localStorage.getItem("autogenOff"))) $("#random-button").click();
  });
  $(".page-container").on("click", "#amc8-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["AMC 8"]);
    $("#random-button").click();
  });
  $(".page-container").on("click", "#amc8-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["AMC 8"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 0,
      to: 2
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 25
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#amc10-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["AMC 10"]);
    $("#random-button").click();
  });
  $(".page-container").on("click", "#amc10-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["AMC 10"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 1,
      to: 4.5
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 25
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#amc12-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["AMC 12"]);
    $("#random-button").click();
  });
  $(".page-container").on("click", "#amc12-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["AMC 12"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 1,
      to: 5.5
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 25
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#aime-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["AIME"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 3,
      to: 6.5
    });
    $("#random-button").click();
  });
  $(".page-container").on("click", "#aime-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["AIME"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 3,
      to: 6.5
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 15
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#usajmo-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["USAJMO"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 5.5,
      to: 7
    });
    $("#random-button").click();
  });
  $(".page-container").on("click", "#usajmo-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["USAJMO"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 5.5,
      to: 7
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 6
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#usamo-single", function () {
    $("#single-problem").click();
    $("#input-tests").data("tagify").addTags(["USAMO"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 6.5,
      to: 8.5
    });
    $("#random-button").click();
  });
  $(".page-container").on("click", "#usamo-test", function () {
    $("#problem-batch").click();
    $("#input-tests").data("tagify").addTags(["USAMO"]);
    $("#input-diff").data("ionRangeSlider").update({
      from: 6.5,
      to: 8.5
    });
    $("#input-number").data("ionRangeSlider").update({
      from: 6
    });
    $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#batch-nav", function () {
    var optionsUncollapsed;
    if ($(".options-container").length && !$(".options-container").hasClass("text-collapsed")) optionsUncollapsed = true;
    clearOptions();
    activeSecondaryButton("batch-nav");
    $("#secondary-button-container").after("<div class=\"options-input\" id=\"batch-input\">\n        <input class=\"input-field input-singletest input-flex-half\"\n          type=\"text\"\n          id=\"input-singletest\"\n          placeholder=\"Test\"\n          data-whitelist=\"".concat(testsList, "\">\n        </input>\n        <input class=\"input-field input-flex-half\n          input-singlever\"\n          type=\"text\"\n          id=\"input-singlever\"\n          placeholder=\"Version\"\n          data-whitelist=\"A,B,Fall A,Fall B,I,II\">\n        </input>\n          <input class=\"input-field\" type=\"number\" min=\"1974\" max=\"2022\"\n          id=\"input-singleyear\" placeholder=\"Year\">\n          </input>\n        <button class=\"input-button\" id=\"batch-button\">\n          Go!\n        </button>\n      </div>\n      ").concat(moreOptions, "\n      ").concat(notes));
    $("#sort-container").remove();
    $("#input-hide").prop("checked", true);
    if (optionsUncollapsed) $(".options-container").removeClass("text-collapsed");
    updateYear();
    collapseText();
    directLinks();
    nameLive();
    breakLive();
    hideToggle();
    $("#input-singletest").tagify({
      mode: "select",
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
    $("#input-singlever").tagify({
      mode: "select",
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
  });
  $(".page-container").on("click", "#problems-nav", function () {
    var optionsUncollapsed;
    if ($(".options-container").length && !$(".options-container").hasClass("text-collapsed")) optionsUncollapsed = true;
    clearOptions();
    activeSecondaryButton("problems-nav");
    $("#secondary-button-container").after("<div class=\"options-input\" id=\"problems-input\">\n        <input class=\"input-field\" id=\"input-problems\"\n        type=\"text\" placeholder=\"Problems (paste problem lists here!)\"\n        data-whitelist=\"".concat(sortProblems(allProblems).map(function (e) {
      return titleCleanup(e);
    }).toString(), "\">\n        <button class=\"input-button\" id=\"problems-button\">\n          Go!\n        </button>\n      </div>\n      ").concat(moreOptions, "\n      ").concat(notes));
    if (optionsUncollapsed) $(".options-container").removeClass("text-collapsed");
    collapseText();
    directLinks();
    nameLive();
    breakLive();
    hideToggle();
    $("#input-problems").tagify({
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0
      }
    });
  });
  $(".page-container").on("click", "#ranbatch-nav", function () {
    var optionsUncollapsed;
    if ($(".options-container").length && !$(".options-container").hasClass("text-collapsed")) optionsUncollapsed = true;
    clearOptions();
    activeSecondaryButton("ranbatch-nav");
    $("#secondary-button-container").after("<div class=\"options-input\" id=\"ranbatch-input\">\n        ".concat(problemOptions).concat(difficultyOption, "\n        <div class=\"input-container input-flex-full\">\n          <label class=\"range-label\">\n            # of problems\n          </label>\n          <input class=\"input-range\" id=\"input-number\"/>\n        </div>\n        <button class=\"input-button input-button-full\" id=\"ranbatch-button\">\n          Go!\n        </button>\n      </div>\n      ").concat(moreOptions, "\n      ").concat(difficultyChart, "\n      ").concat(notes));
    if (optionsUncollapsed) $(".options-container").removeClass("text-collapsed");
    $("#more-options").append("".concat(yearFullOption, "\n      <input class=\"input-field input-flex-full\" id=\"input-problems\"\n      type=\"text\" placeholder=\"Problems to always include (paste lists here!)\"\n      data-whitelist=\"").concat(sortProblems(allProblems).map(function (e) {
      return titleCleanup(e);
    }).toString(), "\">\n      <input class=\"input-field input-flex-full\" id=\"input-skip\"\n      type=\"text\" placeholder=\"Problems to exclude (paste lists here!)\"\n      data-whitelist=\"").concat(sortProblems(allProblems).map(function (e) {
      return titleCleanup(e);
    }).toString(), "\">"));
    collapseText();
    directLinks();
    nameLive();
    breakLive();
    hideToggle();
    $("#input-subjects").tagify({
      whitelist: whitelist,
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100,
        mapValueTo: function mapValueTo(e) {
          return e.value.replace(" Problems", "");
        }
      },
      templates: {
        tag: subjectTag
      }
    });
    $("#input-tests").tagify({
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0,
        maxItems: 100
      }
    });
    $("#input-problems").tagify({
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0
      }
    });
    $("#input-skip").tagify({
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        enabled: 0
      }
    });
    $("#input-years").ionRangeSlider({
      type: "double",
      grid: true,
      min: 1974,
      max: 2022,
      from: 2010,
      to: 2022,
      prettify_enabled: false
    });
    $("#input-diff").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 10,
      from: 0,
      to: 10,
      step: 0.5
    });
    $("#input-number").ionRangeSlider({
      grid: true,
      min: 0,
      max: 40,
      from: 5
    });
    if (!JSON.parse(localStorage.getItem("autogenOff"))) $("#ranbatch-button").click();
  });
  $(".page-container").on("click", "#search-nav", function () {
    clearAll();
    activeButton("search-nav");
    $("#main-button-container").after("<div class=\"options-input\" id=\"search-input\">\n        <div class=\"input-container checkbox-container\n          checkbox-container-smaller input-flexino-full\">\n          <div class=\"checkbox-wrap\">\n            <input type=\"checkbox\" class=\"input-check\" id=\"input-problemsonly\"/>\n            <label class=\"checkbox-label\">\n              Show problems only\n            </label>\n          </div>\n        </div>\n        <input class=\"input-field input-end\" id=\"input-search\"\n          type=\"text\" placeholder=\"Keywords (e.g. Cauchy)\">\n        <button class=\"input-button input-button-half\" id=\"search-button\">\n          Search!\n        </button>\n        <button class=\"input-button input-button-half\" id=\"theorem-button\">\n          Random Theorem\n        </button>\n      </div>\n      ".concat(notes));
    collapseText();
    directLinks();
    $("#input-search").tagify({
      mode: "select",
      originalInputValueFormat: function originalInputValueFormat(values) {
        return values.map(function (e) {
          return e.value;
        });
      },
      dropdown: {
        maxItems: 7
      },
      whitelist: allPages
    });
  });

  // Buttons
  $(".page-container").on("click", "#single-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var preTest, postTest, version;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          clearProblem();
          if (!(!($("#input-singletest").val() + $("#input-singlever").val() in validYears) || $("#input-singleyear").val() < validYears[$("#input-singletest").val() + $("#input-singlever").val()].min || $("#input-singleyear").val() > validYears[$("#input-singletest").val() + $("#input-singlever").val()].max)) {
            _context.next = 5;
            break;
          }
          $(".notes").before("<div class=\"problem-section\">\n          <h2 class=\"section-header\" id=\"article-header\">Error</h2>\n          <p class=\"error\">\n          The given test is not available for that year.\n        </p>\n        </div>");
          _context.next = 11;
          break;
        case 5:
          preTest = "";
          postTest = "";
          version = $("#input-singlever").val();
          if (version) {
            if (version.split(" ").length > 1) {
              preTest = version.split(" ")[0] + " ";
              postTest = version.split(" ")[1];
            } else if (version === "I" || version === "II") {
              postTest = " " + version;
            } else {
              postTest = version;
            }
          }
          _context.next = 11;
          return addProblem(sanitize("".concat($("#input-singleyear").val(), " ").concat(preTest).concat($("#input-singletest").val()).concat(postTest, " Problems/Problem ").concat($("#input-singlenum").val())), true);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  $(".page-container").on("click", "#random-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var clickedTimesThen, pages, invalid, response, randomPage;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log("amc12-single");
          clickedTimes++;
          clickedTimesThen = clickedTimes;
          answerTimes = 0;
          clearProblem();
          _context2.next = 7;
          return getPages();
        case 7:
          pages = _context2.sent;
          console.log("".concat(pages.length, " total problems retrieved."));
          if (pages.length) {
            _context2.next = 13;
            break;
          }
          $(".notes").before("<div class=\"problem-section\">\n          <h2 class=\"section-header\" id=\"article-header\">Error</h2>\n          <p class=\"error\">\n            No problems could be found meeting those requirements.\n          </p>\n        </div>");
          _context2.next = 26;
          break;
        case 13:
          invalid = true;
          response = true;
        case 15:
          if (!(invalid && clickedTimes === clickedTimesThen + answerTimes && answerTimes < 3)) {
            _context2.next = 26;
            break;
          }
          clearProblem();
          randomPage = pages[Math.floor(Math.random() * pages.length)];
          console.log(randomPage);
          if (!(clickedTimes === clickedTimesThen + answerTimes)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 22;
          return addProblem(randomPage, true);
        case 22:
          response = _context2.sent;
        case 23:
          invalid = !response;
          _context2.next = 15;
          break;
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  $(".page-container").on("click", "#batch-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var makeBatch, _makeBatch, clickedTimesThen, problems, fullTest, preTest, postTest, version, name;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _makeBatch = function _makeBatch3() {
            _makeBatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fullTest) {
              var problemTitles, redirList, redirIndex, numProblems, apiEndpoint, paramsList, responseList, jsonList, _iterator3, _step3, _step3$value, _index, _currentProblem, _problemText, _problemProblem, _problemSolutions, redirHref, redirPage, _iterator4, _step4, _step4$value, index, currentProblem, problemText, problemProblem, problemSolutions;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(fullTest);
                    problemTitles = sortProblems(allProblems).filter(function (e) {
                      return e.includes(sanitize("".concat($("#input-singleyear").val(), " ").concat(fullTest, " Problems/Problem ")));
                    });
                    redirList = [];
                    redirIndex = [];
                    numProblems = problemTitles.length;
                    apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                    $("#batch-header").after("<div class=\"loading-notice\">\n          <div class=\"loading-text\">Loading problems\u2026</div>\n          <div class=\"loading-bar-container\">\n            <div class=\"loading-bar\"></div>\n          </div>\n        </div>");
                    paramsList = problemTitles.map(function (currentProblem) {
                      return "action=parse&page=".concat(currentProblem, "&format=json");
                    });
                    console.log(paramsList);
                    _context3.next = 11;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 11:
                    responseList = _context3.sent;
                    console.log(responseList);
                    _context3.next = 15;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 15:
                    jsonList = _context3.sent;
                    console.log(jsonList);
                    _iterator3 = _createForOfIteratorHelper(problemTitles.entries());
                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        _step3$value = _slicedToArray(_step3.value, 2), _index = _step3$value[0], _currentProblem = _step3$value[1];
                        _problemText = latexer(jsonList[_index].parse.text["*"]);
                        _problemProblem = getProblem(_problemText);
                        _problemSolutions = getSolutions(_problemText);
                        if (_problemProblem && _problemSolutions) {
                          problems.push({
                            title: _currentProblem,
                            difficulty: computeDifficulty(computeTest(_currentProblem), computeNumber(_currentProblem), computeYear(_currentProblem)),
                            problem: _problemProblem,
                            solutions: _problemSolutions
                          });
                        } else if (_problemText.includes("Redirect to:")) {
                          console.log("Redirect problem, going there instead...");
                          redirHref = $($.parseHTML(_problemText)).find(".redirectText a").attr("href");
                          redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                          console.log(redirPage);
                          redirList.push(redirPage);
                          redirIndex.push(_index);
                          $(".loading-bar").css("width", "".concat(problems.length / numProblems * 100, "%"));
                        } else {
                          console.log("Invalid problem, skipping...");
                        }
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                    if (!redirList[0]) {
                      _context3.next = 32;
                      break;
                    }
                    paramsList = redirList.map(function (redirPage) {
                      return "action=parse&page=".concat(redirPage, "&format=json");
                    });
                    console.log(paramsList);
                    _context3.next = 24;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 24:
                    responseList = _context3.sent;
                    console.log(responseList);
                    _context3.next = 28;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 28:
                    jsonList = _context3.sent;
                    console.log(jsonList);
                    _iterator4 = _createForOfIteratorHelper(redirList.entries());
                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        _step4$value = _slicedToArray(_step4.value, 2), index = _step4$value[0], currentProblem = _step4$value[1];
                        problemText = latexer(jsonList[index].parse.text["*"]);
                        problemProblem = getProblem(problemText);
                        problemSolutions = getSolutions(problemText);
                        problems.splice(redirIndex[index], 0, {
                          title: currentProblem,
                          difficulty: computeDifficulty(computeTest(currentProblem), computeNumber(currentProblem), computeYear(currentProblem)),
                          problem: problemProblem,
                          solutions: problemSolutions
                        });
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  case 32:
                    if (clickedTimes === clickedTimesThen) {
                      addHistoryBatch(problems.map(function (e) {
                        return e.title;
                      }), sourceCleanup(problems[0].problem).substring(0, 140), $("#input-name").val() ? sanitize($("#input-name").val()) : sanitize("".concat($("#input-singleyear").val(), " ").concat(fullTest)), $("#input-singleyear").val(), fullTest);
                      console.log(problems);
                      addProblems(problems, false);
                    }
                  case 33:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return _makeBatch.apply(this, arguments);
          };
          makeBatch = function _makeBatch2(_x13) {
            return _makeBatch.apply(this, arguments);
          };
          clickedTimes++;
          clickedTimesThen = clickedTimes;
          clearProblem();
          addBatch();
          problems = [];
          if ($("#input-singletest").val()) {
            _context4.next = 14;
            break;
          }
          $(".article-text").before("<p class=\"error\">\n          No test was entered.\n        </p>");
          $(".article-text").remove();
          $("#batch-header").html("Error");
          $("#solutions-section").remove();
          _context4.next = 30;
          break;
        case 14:
          if (!(!($("#input-singletest").val() + $("#input-singlever").val() in validYears) || $("#input-singleyear").val() < validYears[$("#input-singletest").val() + $("#input-singlever").val()].min || $("#input-singleyear").val() > validYears[$("#input-singletest").val() + $("#input-singlever").val()].max)) {
            _context4.next = 22;
            break;
          }
          $(".article-text").before("<p class=\"error\">\n          The given test is not available for that year.\n        </p>");
          $(".article-text").remove();
          $("#batch-header").html("Error");
          $("#solutions-section").remove();
          $(".display-settings").remove();
          _context4.next = 30;
          break;
        case 22:
          preTest = "";
          postTest = "";
          version = $("#input-singlever").val();
          if (version) {
            if (version.split(" ").length > 1) {
              preTest = version.split(" ")[0] + " ";
              postTest = version.split(" ")[1];
            } else if (version === "I" || version === "II") {
              postTest = " " + version;
            } else {
              postTest = version;
            }
          }
          fullTest = "".concat(preTest).concat($("#input-singletest").val()).concat(postTest);
          _context4.next = 29;
          return makeBatch(fullTest);
        case 29:
          if (clickedTimes === clickedTimesThen) {
            $(".loading-notice").remove();
            katexFallback();
            customText();
            name = $("#input-name").val() ? sanitize($("#input-name").val()) : sanitize("".concat($("#input-singleyear").val(), " ").concat(fullTest));
            $("#batch-header").html(name);
            document.title = name + " - Trivial Math Practice";
            history.pushState({
              problems: problems.map(function (e) {
                return underscores(e.title);
              }).join("|"),
              testyear: $("#input-singleyear").val(),
              testname: fullTest
            }, name + " - Trivial Math Practice", "?problems=".concat(problems.map(function (e) {
              return underscores(e.title);
            }).join("|"), "&testyear=").concat($("#input-singleyear").val(), "&testname=").concat(fullTest));
            searchParams = new URLSearchParams(location.search);
            lastParam = searchParams.get("problems");
            fixLinks();
            collapseSolutions();
            directLinks();
            displaySettings();
            hideLinks();
            breakSets();
            addBatchAnswers(problems.map(function (e) {
              return e.title;
            }), fullTest, $("#input-singleyear").val());
          }
        case 30:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  $(".page-container").on("click", "#problems-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var makeBatch, _makeBatch4, clickedTimesThen, problems, inputProblems, name;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _makeBatch4 = function _makeBatch6() {
            _makeBatch4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var problemTitles, redirList, redirIndex, numProblems, invalidProblems, apiEndpoint, paramsList, responseList, jsonList, _iterator5, _step5, _step5$value, _index2, _currentProblem2, _problemText2, _problemProblem2, _problemSolutions2, redirHref, redirPage, _iterator6, _step6, _step6$value, index, currentProblem, problemText, problemProblem, problemSolutions;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    problemTitles = inputProblems.val().split(",").map(function (e) {
                      return e.replace("#", "Problems/Problem ");
                    });
                    redirList = [];
                    redirIndex = [];
                    numProblems = problemTitles.length;
                    invalidProblems = 0;
                    apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                    $("#batch-header").after("<div class=\"loading-notice\">\n          <div class=\"loading-text\">Loading problems\u2026</div>\n          <div class=\"loading-bar-container\">\n            <div class=\"loading-bar\"></div>\n          </div>\n        </div>");
                    paramsList = problemTitles.map(function (currentProblem) {
                      return "action=parse&page=".concat(currentProblem, "&format=json");
                    });
                    console.log(paramsList);
                    _context5.next = 11;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 11:
                    responseList = _context5.sent;
                    console.log(responseList);
                    _context5.next = 15;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 15:
                    jsonList = _context5.sent;
                    console.log(jsonList);
                    _iterator5 = _createForOfIteratorHelper(problemTitles.entries());
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        _step5$value = _slicedToArray(_step5.value, 2), _index2 = _step5$value[0], _currentProblem2 = _step5$value[1];
                        _problemText2 = latexer(jsonList[_index2].parse.text["*"]);
                        _problemProblem2 = getProblem(_problemText2);
                        _problemSolutions2 = getSolutions(_problemText2);
                        if (_problemProblem2 && _problemSolutions2) {
                          problems.push({
                            title: _currentProblem2,
                            difficulty: computeDifficulty(computeTest(_currentProblem2), computeNumber(_currentProblem2), computeYear(_currentProblem2)),
                            problem: _problemProblem2,
                            solutions: _problemSolutions2
                          });
                          $(".loading-bar").css("width", "".concat((problems.length + invalidProblems) / numProblems * 100, "%"));
                        } else if (_problemText2.includes("Redirect to:")) {
                          console.log("Redirect problem, going there instead...");
                          redirHref = $($.parseHTML(_problemText2)).find(".redirectText a").attr("href");
                          redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                          console.log(redirPage);
                          redirList.push(redirPage);
                          redirIndex.push(_index2);
                          $(".loading-bar").css("width", "".concat((problems.length + invalidProblems) / numProblems * 100, "%"));
                        } else {
                          console.log("Invalid problem, skipping...");
                          invalidProblems++;
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                    if (!redirList[0]) {
                      _context5.next = 32;
                      break;
                    }
                    paramsList = redirList.map(function (redirPage) {
                      return "action=parse&page=".concat(redirPage, "&format=json");
                    });
                    console.log(paramsList);
                    _context5.next = 24;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 24:
                    responseList = _context5.sent;
                    console.log(responseList);
                    _context5.next = 28;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 28:
                    jsonList = _context5.sent;
                    console.log(jsonList);
                    _iterator6 = _createForOfIteratorHelper(redirList.entries());
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        _step6$value = _slicedToArray(_step6.value, 2), index = _step6$value[0], currentProblem = _step6$value[1];
                        problemText = latexer(jsonList[index].parse.text["*"]);
                        problemProblem = getProblem(problemText);
                        problemSolutions = getSolutions(problemText);
                        problems.splice(redirIndex[index], 0, {
                          title: currentProblem,
                          difficulty: computeDifficulty(computeTest(currentProblem), computeNumber(currentProblem), computeYear(currentProblem)),
                          problem: problemProblem,
                          solutions: problemSolutions
                        });
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  case 32:
                    if (clickedTimes === clickedTimesThen) {
                      if ($("#input-sort").prop("checked")) problems.sort(function (a, b) {
                        return a.difficulty - b.difficulty;
                      });
                      addHistoryBatch(problems.map(function (e) {
                        return e.title;
                      }), sourceCleanup(problems[0].problem).substring(0, 140), $("#input-name").val());
                      console.log(problems);
                      addProblems(problems, false);
                    }
                  case 33:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return _makeBatch4.apply(this, arguments);
          };
          makeBatch = function _makeBatch5() {
            return _makeBatch4.apply(this, arguments);
          };
          clickedTimes++;
          clickedTimesThen = clickedTimes;
          clearProblem();
          addBatch();
          problems = [];
          inputProblems = $("#input-problems");
          if (inputProblems.val()) {
            _context6.next = 15;
            break;
          }
          $(".article-text").before("<p class=\"error\">\n          No problems were entered.\n        </p>");
          $(".article-text").remove();
          $("#batch-header").html("Error");
          $("#solutions-section").remove();
          _context6.next = 17;
          break;
        case 15:
          _context6.next = 17;
          return makeBatch();
        case 17:
          if (clickedTimes === clickedTimesThen) {
            name = $("#input-name").val();
            history.pushState({
              problems: problems.map(function (e) {
                return underscores(e.title);
              }).join("|")
            }, name + " - Trivial Math Practice", "?problems=" + problems.map(function (e) {
              return underscores(e.title);
            }).join("|"));
            searchParams = new URLSearchParams(location.search);
            lastParam = searchParams.get("problems");
            $(".loading-notice").remove();
            katexFallback();
            customText();
            changeName();
            fixLinks();
            collapseSolutions();
            directLinks();
            displaySettings();
            hideLinks();
            breakSets();
            addBatchAnswers(problems.map(function (e) {
              return e.title;
            }));
          }
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  $(".page-container").on("click", "#ranbatch-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var makeBatch, _makeBatch7, clickedTimesThen, inputNumber, inputProblems, inputSkip, pages, problems, name;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _makeBatch7 = function _makeBatch9() {
            _makeBatch7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var numProblems, randomPage, pageIndex, randomList, redirList, redirIndex, problemTitles, skipProblems, apiEndpoint, params, response, json, _paramsList, _responseList, _jsonList, _iterator7, _step7, _step7$value, index, currentProblem, problemText, problemProblem, problemSolutions, redirHref, redirPage, blockedProblem, paramsList, responseList, jsonList, _iterator8, _step8, _step8$value, _index4, _randomPage, _problemText4, _problemProblem4, _problemSolutions4, _redirHref, _redirPage, _blockedProblem, _iterator9, _step9, _step9$value, _index3, _currentProblem3, _problemText3, _problemProblem3, _problemSolutions3;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    numProblems = Math.min(inputNumber.data().from, pages.length);
                    randomList = [];
                    redirList = [];
                    redirIndex = [];
                    problemTitles = inputProblems.val().split(",").map(function (e) {
                      return e.replace("#", "Problems/Problem ");
                    });
                    skipProblems = inputSkip.val().split(",").map(function (e) {
                      return e.replace("#", "Problems/Problem ");
                    });
                    apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                    if (clickedTimes === clickedTimesThen) $("#batch-header").after("<div class=\"loading-notice\">\n          <div class=\"loading-text\">Loading problems\u2026</div>\n          <div class=\"loading-bar-container\">\n            <div class=\"loading-bar\"></div>\n          </div>\n        </div>");
                    if (!inputProblems.val()) {
                      _context7.next = 21;
                      break;
                    }
                    _paramsList = problemTitles.map(function (currentProblem) {
                      return "action=parse&page=".concat(currentProblem, "&format=json");
                    });
                    console.log(_paramsList);
                    _context7.next = 13;
                    return Promise.all(_paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 13:
                    _responseList = _context7.sent;
                    console.log(_responseList);
                    _context7.next = 17;
                    return Promise.all(_responseList.map(function (response) {
                      return response.json();
                    }));
                  case 17:
                    _jsonList = _context7.sent;
                    console.log(_jsonList);
                    _iterator7 = _createForOfIteratorHelper(problemTitles.entries());
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        _step7$value = _slicedToArray(_step7.value, 2), index = _step7$value[0], currentProblem = _step7$value[1];
                        problemText = latexer(_jsonList[index].parse.text["*"]);
                        problemProblem = getProblem(problemText);
                        problemSolutions = getSolutions(problemText);
                        if (problemProblem && problemSolutions) {
                          problems.push({
                            title: currentProblem,
                            difficulty: computeDifficulty(computeTest(currentProblem), computeNumber(currentProblem), computeYear(currentProblem)),
                            problem: problemProblem,
                            solutions: problemSolutions
                          });
                          $(".loading-bar").css("width", "".concat(problems.length / numProblems * 100, "%"));
                        } else if (problemText.includes("Redirect to:")) {
                          console.log("Redirect problem, going there instead...");
                          redirHref = $($.parseHTML(problemText)).find(".redirectText a").attr("href");
                          redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                          console.log(redirPage);
                          redirList.push(redirPage);
                          redirIndex.push(index);
                          $(".loading-bar").css("width", "".concat(problems.length / numProblems * 100, "%"));
                        } else {
                          console.log("Invalid problem, skipping...");
                        }
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                  case 21:
                    while (randomList.length + problems.length < numProblems && pages.length !== 0 && clickedTimes === clickedTimesThen) {
                      blockedProblem = true;
                      while (blockedProblem) {
                        pageIndex = Math.floor(Math.random() * pages.length);
                        randomPage = pages[pageIndex];
                        blockedProblem = skipProblems.includes(randomPage);
                        if (blockedProblem) pages.splice(pageIndex, 1);
                      }
                      randomList.push(randomPage);
                      pages.splice(pageIndex, 1);
                    }
                    paramsList = randomList.map(function (currentProblem) {
                      return "action=parse&page=".concat(currentProblem, "&format=json");
                    });
                    console.log(paramsList);
                    _context7.next = 26;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 26:
                    responseList = _context7.sent;
                    console.log(responseList);
                    _context7.next = 30;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 30:
                    jsonList = _context7.sent;
                    console.log(jsonList);
                    _iterator8 = _createForOfIteratorHelper(randomList.entries());
                    _context7.prev = 33;
                    _iterator8.s();
                  case 35:
                    if ((_step8 = _iterator8.n()).done) {
                      _context7.next = 72;
                      break;
                    }
                    _step8$value = _slicedToArray(_step8.value, 2), _index4 = _step8$value[0], _randomPage = _step8$value[1];
                    _problemText4 = latexer(jsonList[_index4].parse.text["*"]);
                    _problemProblem4 = getProblem(_problemText4);
                    _problemSolutions4 = getSolutions(_problemText4);
                    if (!(_problemProblem4 && _problemSolutions4)) {
                      _context7.next = 45;
                      break;
                    }
                    problems.push({
                      title: _randomPage,
                      difficulty: computeDifficulty(computeTest(_randomPage), computeNumber(_randomPage), computeYear(_randomPage)),
                      problem: _problemProblem4,
                      solutions: _problemSolutions4
                    });
                    $(".loading-bar").css("width", "".concat(problems.length / numProblems * 100, "%"));
                    _context7.next = 70;
                    break;
                  case 45:
                    if (!_problemText4.includes("Redirect to:")) {
                      _context7.next = 54;
                      break;
                    }
                    console.log("Redirect problem, going there instead...");
                    _redirHref = $($.parseHTML(_problemText4)).find(".redirectText a").attr("href");
                    _redirPage = _redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                    console.log(_redirPage);
                    redirList.push(_redirPage);
                    $(".loading-bar").css("width", "".concat(problems.length / numProblems * 100, "%"));
                    _context7.next = 70;
                    break;
                  case 54:
                    console.log("Invalid problem, skipping...");
                    _blockedProblem = true;
                    while (_blockedProblem) {
                      pageIndex = Math.floor(Math.random() * pages.length);
                      _randomPage = pages[pageIndex];
                      _blockedProblem = skipProblems.includes(_randomPage);
                      if (_blockedProblem) pages.splice(pageIndex, 1);
                    }
                    console.log(_randomPage);
                    pages.splice(pageIndex, 1);
                    params = "action=parse&page=".concat(_randomPage, "&format=json");
                    _context7.next = 62;
                    return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                  case 62:
                    response = _context7.sent;
                    _context7.next = 65;
                    return response.json();
                  case 65:
                    json = _context7.sent;
                    _problemText4 = latexer(json.parse.text["*"]);
                    _problemProblem4 = getProblem(_problemText4);
                    _problemSolutions4 = getSolutions(_problemText4);
                    problems.push({
                      title: _randomPage,
                      difficulty: computeDifficulty(computeTest(_randomPage), computeNumber(_randomPage), computeYear(_randomPage)),
                      problem: _problemProblem4,
                      solutions: _problemSolutions4
                    });
                  case 70:
                    _context7.next = 35;
                    break;
                  case 72:
                    _context7.next = 77;
                    break;
                  case 74:
                    _context7.prev = 74;
                    _context7.t0 = _context7["catch"](33);
                    _iterator8.e(_context7.t0);
                  case 77:
                    _context7.prev = 77;
                    _iterator8.f();
                    return _context7.finish(77);
                  case 80:
                    if (!redirList[0]) {
                      _context7.next = 93;
                      break;
                    }
                    paramsList = redirList.map(function (redirPage) {
                      return "action=parse&page=".concat(redirPage, "&format=json");
                    });
                    console.log(paramsList);
                    _context7.next = 85;
                    return Promise.all(paramsList.map(function (params) {
                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                    }));
                  case 85:
                    responseList = _context7.sent;
                    console.log(responseList);
                    _context7.next = 89;
                    return Promise.all(responseList.map(function (response) {
                      return response.json();
                    }));
                  case 89:
                    jsonList = _context7.sent;
                    console.log(jsonList);
                    _iterator9 = _createForOfIteratorHelper(redirList.entries());
                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        _step9$value = _slicedToArray(_step9.value, 2), _index3 = _step9$value[0], _currentProblem3 = _step9$value[1];
                        _problemText3 = latexer(jsonList[_index3].parse.text["*"]);
                        _problemProblem3 = getProblem(_problemText3);
                        _problemSolutions3 = getSolutions(_problemText3);
                        if (redirIndex[_index3]) problems.splice(redirIndex[_index3], 0, {
                          title: _currentProblem3,
                          difficulty: computeDifficulty(computeTest(_currentProblem3), computeNumber(_currentProblem3), computeYear(_currentProblem3)),
                          problem: _problemProblem3,
                          solutions: _problemSolutions3
                        });else problems.push({
                          title: _currentProblem3,
                          difficulty: computeDifficulty(computeTest(_currentProblem3), computeNumber(_currentProblem3), computeYear(_currentProblem3)),
                          problem: _problemProblem3,
                          solutions: _problemSolutions3
                        });
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  case 93:
                    if (clickedTimes === clickedTimesThen) {
                      if ($("#input-sort").prop("checked")) problems.sort(function (a, b) {
                        return a.difficulty - b.difficulty;
                      });
                      addHistoryBatch(problems.map(function (e) {
                        return e.title;
                      }), sourceCleanup(problems[0].problem).substring(0, 140), $("#input-name").val());
                      console.log(problems);
                      addProblems(problems, true);
                    }
                  case 94:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, null, [[33, 74, 77, 80]]);
            }));
            return _makeBatch7.apply(this, arguments);
          };
          makeBatch = function _makeBatch8() {
            return _makeBatch7.apply(this, arguments);
          };
          clickedTimes++;
          clickedTimesThen = clickedTimes;
          clearProblem();
          addBatch();
          inputNumber = $("#input-number");
          inputProblems = $("#input-problems");
          inputSkip = $("#input-skip");
          _context8.next = 11;
          return getPages();
        case 11:
          pages = _context8.sent;
          problems = [];
          console.log("".concat(pages.length, " total problems retrieved."));
          if (pages.length) {
            _context8.next = 21;
            break;
          }
          $(".article-text").before("<p class=\"error\">\n          No problems could be found meeting those requirements.\n        </p>");
          $(".article-text").remove();
          $("#batch-header").html("Error");
          $("#solutions-section").remove();
          _context8.next = 23;
          break;
        case 21:
          _context8.next = 23;
          return makeBatch();
        case 23:
          name = $("#input-name").val();
          history.pushState({
            problems: problems.map(function (e) {
              return underscores(e.title);
            }).join("|")
          }, name + " - Trivial Math Practice", "?problems=" + problems.map(function (e) {
            return underscores(e.title);
          }).join("|"));
          searchParams = new URLSearchParams(location.search);
          lastParam = searchParams.get("problems");
          if (clickedTimes === clickedTimesThen) {
            $(".loading-notice").remove();
            katexFallback();
            replaceProblems(problems);
            customText();
            changeName();
            fixLinks();
            collapseSolutions();
            directLinks();
            displaySettings();
            hideLinks();
            breakSets();
            addBatchAnswers(problems.map(function (e) {
              return e.title;
            }));
          }
        case 28:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  $(".page-container").on("click", "#search-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var addResults, _addResults, addResult, enterResult, clickedTimesThen, searchResults, pageExists, originalSearch, search, _json, apiEndpoint, params, response, json, _iterator10, _step10, page, _json2, paramsContinue, _iterator11, _step11, _page;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _addResults = function _addResults3() {
            _addResults = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(originalSearch, search, searchResults, pageExists) {
              var resultsNum, loadedTimes, i;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    resultsNum = searchResults.length;
                    loadedTimes = 0;
                    $(".results-notice").html("".concat(resultsNum, " results found"));
                    if (pageExists) $(".results-notice").append(" | <a href=\"https://artofproblemsolving.com/wiki/index.php/".concat(encodeURIComponent(underscores(search)), "\">").concat(capitalize(titleCleanup(encodeURIComponent(originalSearch))), "</a> exists on the wiki"));
                    for (i = 0; i < resultsNum && i < 10; i++) addResult();
                    loadedTimes++;
                    if (searchResults.length) $(".results-container").after("<button class=\"text-button\" id=\"load-results\">Load more\u2026</button>");
                    $("#load-results").click(function () {
                      for (var _i = 0; _i < resultsNum - loadedTimes * 10 && _i < 10; _i++) addResult();
                      loadedTimes++;
                      if (!searchResults.length) $("#load-results").remove();
                      fixLinks();
                      directLinks();
                    });
                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return _addResults.apply(this, arguments);
          };
          addResults = function _addResults2(_x14, _x15, _x16, _x17) {
            return _addResults.apply(this, arguments);
          };
          addResult = function addResult() {
            $(".results-container").append("<div class=\"result-item\">\n          <h2 class=\"result-title\">\n            <a class=\"result-link\" href=\"".concat(searchResults[0].url, "\">\n              ").concat(searchResults[0].title, "\n            </a>\n          </h2>\n          <p class=\"result-snippet\">").concat(searchResults[0].snippet, "</p>\n        </div>"));
            searchResults.shift();
          };
          enterResult = function enterResult(page) {
            if (page.snippet.indexOf("#REDIRECT") + page.snippet.indexOf("#redirect") + page.title.indexOf("\uFFFD") === -3 && (validProblem(page.title) || !$("#input-problemsonly").prop("checked"))) {
              searchResults.push({
                url: "/wiki/index.php/".concat(encodeURIComponent(underscores(page.title))),
                title: titleCleanup(page.title),
                snippet: page.snippet
              });
            }
          };
          clickedTimes++;
          clickedTimesThen = clickedTimes;
          clearProblem();
          searchResults = [];
          pageExists = false;
          originalSearch = $("#input-search").val();
          search = sanitize(originalSearch).replace(/&quot;/g, "\"").replace(/’/g, "'").replace("#", "Problems/Problem ");
          search = search.charAt(0).toUpperCase() + search.slice(1);
          if (search) {
            _context10.next = 16;
            break;
          }
          $(".notes").before("<div class=\"problem-section\">\n          <h2 class=\"section-header\" id=\"article-header\">Error</h2>\n          <p class=\"error\">\n            No search terms were entered.\n          </p>\n        </div>");
          _context10.next = 53;
          break;
        case 16:
          apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
          params = "action=parse&page=".concat(encodeURIComponent(underscores(search)), "&format=json");
          _context10.next = 20;
          return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
        case 20:
          response = _context10.sent;
          _context10.next = 23;
          return response.json();
        case 23:
          json = _context10.sent;
          if ((_json = json) !== null && _json !== void 0 && _json.parse) pageExists = true;
          params = "action=query&list=search&srwhat=text&srsearch=".concat(search) + "&srlimit=max&srqiprofile=wsum_inclinks_pv&format=json";
          _context10.next = 28;
          return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
        case 28:
          response = _context10.sent;
          _context10.next = 31;
          return response.json();
        case 31:
          json = _context10.sent;
          if (clickedTimes === clickedTimesThen) {
            _iterator10 = _createForOfIteratorHelper(json.query.search);
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                page = _step10.value;
                enterResult(page);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        case 33:
          if (!((_json2 = json) !== null && _json2 !== void 0 && _json2.continue)) {
            _context10.next = 45;
            break;
          }
          paramsContinue = params + "&sroffset=".concat(json.continue.sroffset);
          _context10.next = 37;
          return fetch("".concat(apiEndpoint, "?").concat(paramsContinue, "&origin=*"));
        case 37:
          response = _context10.sent;
          _context10.next = 40;
          return response.json();
        case 40:
          json = _context10.sent;
          _iterator11 = _createForOfIteratorHelper(json.query.search);
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              _page = _step11.value;
              enterResult(_page);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          _context10.next = 33;
          break;
        case 45:
          console.log(searchResults);
          if (!(clickedTimes === clickedTimesThen)) {
            _context10.next = 53;
            break;
          }
          addSearch();
          _context10.next = 50;
          return addResults(originalSearch, search, searchResults, pageExists);
        case 50:
          document.title = "Search results for ".concat(originalSearch) + " - Trivial Math Practice";
          fixLinks();
          directLinks();
        case 53:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  $(".page-container").on("click", "#theorem-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var apiEndpoint, params, response, json, _iterator12, _step12, page, randomTheorem;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (theoremPages[0]) {
            _context11.next = 12;
            break;
          }
          console.log("Loading theorems...");
          apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
          params = "action=query&list=categorymembers&cmtitle=Category:Theorems" + "&cmlimit=max&format=json";
          _context11.next = 6;
          return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
        case 6:
          response = _context11.sent;
          _context11.next = 9;
          return response.json();
        case 9:
          json = _context11.sent;
          _iterator12 = _createForOfIteratorHelper(json.query.categorymembers);
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              page = _step12.value;
              theoremPages.push(page.title);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        case 12:
          theoremPages = theoremPages.filter(function (e) {
            return e !== "H\uFFFDlder's Inequality" && e !== "Theorems";
          });
          randomTheorem = theoremPages[Math.floor(Math.random() * theoremPages.length)];
          console.log(randomTheorem);
          _context11.next = 17;
          return addArticle(randomTheorem, true);
        case 17:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));
  $(".page-container").on("click", "#history-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var addItems, _addItems, addItem, history;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _addItems = function _addItems3() {
            _addItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(history) {
              var resultsNum, loadedTimes, i;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    resultsNum = history.length;
                    loadedTimes = 0;
                    for (i = 0; i < resultsNum && i < 10; i++) addItem();
                    loadedTimes++;
                    if (history.length) $(".results-container").after("<button class=\"text-button\" id=\"load-results\">Load more\u2026</button>");
                    $("#load-results").click(function () {
                      for (var _i2 = 0; _i2 < resultsNum - loadedTimes * 10 && _i2 < 10; _i2++) addItem();
                      loadedTimes++;
                      if (!history.length) $("#load-results").remove();
                      fixLinks();
                      directLinks();
                    });
                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12);
            }));
            return _addItems.apply(this, arguments);
          };
          addItems = function _addItems2(_x18) {
            return _addItems.apply(this, arguments);
          };
          addItem = function addItem() {
            $(".results-container").append("<div class=\"result-item\">\n          <h2 class=\"result-title\">\n            <a class=\"result-link\" href=\"".concat(history[0].url.replace("https://artofproblemsolving.com", ""), "\">\n              ").concat(history[0].title, "\n            </a>\n          </h2>\n          <p class=\"result-snippet\">").concat(history[0].snippet, "...</p>\n        </div>"));
            history.shift();
          };
          clearAll();
          activeButton("history-button");
          $("#main-button-container").after("\n      ".concat(notes));
          collapseText();
          history = JSON.parse(localStorage.getItem("pageHistory"));
          if (history) {
            _context13.next = 12;
            break;
          }
          $(".notes").before("<div class=\"results-container\">\n        <div class=\"results-notice\">No history yet\u2026</div>\n      </div>");
          _context13.next = 20;
          break;
        case 12:
          console.log(history);
          addHistoryContainer();
          _context13.next = 16;
          return addItems(history);
        case 16:
          document.title = "View history - Trivial Math Practice";
          fixLinks();
          directLinks();
          $("#clear-history").click(function () {
            localStorage.removeItem("pageHistory");
            $(".results-container").remove();
            $("#load-results").remove();
            $(".notes").before("<div class=\"results-container\">\n            <div class=\"results-notice\">No history yet\u2026</div>\n          </div>");
          });
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  })));
  $(".page-container").on("click", "#stats-button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var refreshStats;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          refreshStats = function _refreshStats() {
            var numProblems = 0 + JSON.parse(localStorage.getItem("numProblems"));
            var numAnswered = 0 + JSON.parse(localStorage.getItem("numAnswered"));
            var numCorrect = 0 + JSON.parse(localStorage.getItem("numCorrect"));
            var numRetry = 0 + JSON.parse(localStorage.getItem("numRetry"));
            var numToday = 0 + JSON.parse(localStorage.getItem("numToday"));
            var numStreak = 0 + JSON.parse(localStorage.getItem("numStreak"));
            var numSets = 0 + JSON.parse(localStorage.getItem("numSets"));
            var numArticles = 0 + JSON.parse(localStorage.getItem("numArticles"));
            var numWrong = numAnswered - numCorrect - numRetry;
            $("#num-problems").text(numProblems.toLocaleString("en-US"));
            $("#num-answered").text(numAnswered.toLocaleString("en-US"));
            $("#num-correct").text(numCorrect.toLocaleString("en-US"));
            $("#num-retry").text(numRetry.toLocaleString("en-US"));
            $("#num-wrong").text(numWrong.toLocaleString("en-US"));
            $("#num-today").text(numToday.toLocaleString("en-US"));
            $("#num-streak").text(numStreak.toLocaleString("en-US"));
            $("#num-sets").text(numSets.toLocaleString("en-US"));
            $("#num-articles").text(numArticles.toLocaleString("en-US"));
            var options = {
              $schema: "https://vega.github.io/schema/vega-lite/v5.json",
              description: "A simple pie chart with labels.",
              data: {
                values: [{
                  Answers: "Correct",
                  value: numCorrect,
                  text: numCorrect ? numCorrect + "✓" : "",
                  sortOrder: 1
                }, {
                  Answers: "Retry",
                  value: numRetry,
                  text: numRetry ? numRetry + "↻" : "",
                  sortOrder: 2
                }, {
                  Answers: "Incorrect",
                  value: numWrong,
                  text: numWrong ? numWrong + "✗" : "",
                  sortOrder: 3
                }]
              },
              encoding: {
                theta: {
                  field: "value",
                  type: "quantitative",
                  stack: true
                },
                color: {
                  field: "Answers",
                  type: "nominal",
                  legend: null,
                  scale: {
                    domain: ["Correct", "Retry", "Incorrect"],
                    range: ["var(--correct-color)", "var(--retry-color)", "var(--wrong-color)"]
                  },
                  sort: {
                    field: "sortOrder"
                  }
                },
                order: {
                  field: "sortOrder",
                  type: "ordinal"
                }
              },
              layer: [{
                mark: {
                  type: "arc",
                  innerRadius: 50,
                  outerRadius: 80
                }
              }, {
                mark: {
                  type: "text",
                  radius: 100,
                  fontSize: 15,
                  fontWeight: "bold"
                },
                encoding: {
                  text: {
                    field: "text",
                    type: "nominal",
                    sort: {
                      field: "sortOrder"
                    }
                  }
                }
              }, {
                mark: {
                  type: "text",
                  fill: "var(--minor-color)",
                  align: "center",
                  baseline: "middle",
                  dy: 11,
                  fontSize: 16
                },
                encoding: {
                  text: {
                    value: "correct"
                  }
                }
              }, {
                mark: {
                  type: "text",
                  fill: "var(--minor-color)",
                  align: "center",
                  baseline: "middle",
                  dx: 1,
                  dy: -7,
                  font: "'Latin Modern Sans Demi-Condensed', sans-serif",
                  fontSize: 20
                },
                encoding: {
                  text: {
                    value: ((numCorrect + numRetry) / numAnswered * 100).toFixed(1) + "%"
                  }
                }
              }],
              background: null,
              config: {
                font: "'Latin Modern Sans', 'Inter', sans-serif"
              }
            };
            if (numAnswered > 0) vegaEmbed("#stats-chart", options, {
              actions: false,
              renderer: "svg"
            });
          };
          clearAll();
          activeButton("stats-button");
          $("#main-button-container").after("\n      ".concat(notes));
          collapseText();
          $(".notes").before("<div class=\"problem-section\" id=\"about-section\">\n          <h2 class=\"section-header\" id=\"about-header\">Your Statistics</h2>\n          <div class=\"article-text\" id=\"about-text\">\n              <div id=\"stats-chart\"></div>\n            <p class=\"list-head\">\n              Total problems generated: <span id=\"num-problems\"></span>\n            </p>\n            <ul class=\"list-indent\">\n              <li class=\"list list-answered\">\n                Total answered: <span id=\"num-answered\"></span>\n              <ul class=\"list-inner\">\n              <li class=\"list-minor list-correct\">\n                Total correct on first try:\n                <span id=\"num-correct\"></span>\n              </li>\n              <li class=\"list-minor list-retry\">\n                Total correct on retry:\n                <span id=\"num-retry\"></span>\n              </li>\n              <li class=\"list-minor list-wrong\">\n                Total given up on:\n                <span id=\"num-wrong\"></span>\n              </li>\n              </ul>\n              </li>\n              <li class=\"list list-today\">\n                Answered today:\n                <span id=\"num-today\"></span>\n              </li>\n              <li class=\"list list-streak\">\n                Longest streak:\n                <span id=\"num-streak\"></span>\n              </li>\n            </ul>\n            <p class=\"list-head\">\n              Total problem sets generated: <span id=\"num-sets\"></span>\n            </p>\n            <p class=\"list-head\">\n              Total articles viewed: <span id=\"num-articles\"></span>\n            </p>\n            <button class=\"text-button\" id=\"clear-button\">\n              <span class=\"feedback-icon\">\u2717</span> Clear stats forever\n            </button>\n            <div class=\"stats-notes\">\n              <p>\n                Per-user stats started being recorded from 17 July 2022 \u2014 if you\n                used Trivial for a while before then, add somewhere between a\n                few dozen and a few thousand to your numbers :)\n              </p>\n              <p class=\"brag\">\n                Over 250,000 problems and problem sets have been generated using\n                Trivial!\n              </p>\n            </div>\n          </div>\n        </div>");
          $("#clear-button").click(function () {
            localStorage.setItem("numProblems", 0);
            localStorage.setItem("numAnswered", 0);
            localStorage.setItem("numCorrect", 0);
            localStorage.setItem("numRetry", 0);
            localStorage.setItem("numSets", 0);
            localStorage.setItem("numArticles", 0);
            refreshStats();
          });
          refreshStats();
          document.title = "Statistics - Trivial Math Practice";
          fixLinks();
          directLinks();
        case 11:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  })));
  $(".page-container").on("click", "#difficulty-link", function () {
    $("#difficulty-info").toggleClass("difficulty-info-hidden");
    renderChart();
  });

  // Replace problems
  function replaceProblems(_x19) {
    return _replaceProblems.apply(this, arguments);
  } // Clear things
  function _replaceProblems() {
    _replaceProblems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(problems) {
      return _regeneratorRuntime().wrap(function _callee28$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            console.log("replaceProblems", problems);
            $(".replace-problem").click( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var replace, _replace, replacedProblem, replacedIndex, replacedDifficulty, pages;
              return _regeneratorRuntime().wrap(function _callee27$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    _replace = function _replace3() {
                      _replace = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                        var pageIndex, randomPage, newProblem, giveUp, apiEndpoint, params, response, json, _loop2;
                        return _regeneratorRuntime().wrap(function _callee26$(_context28) {
                          while (1) switch (_context28.prev = _context28.next) {
                            case 0:
                              giveUp = false;
                              apiEndpoint = "https://artofproblemsolving.com/wiki/api.php";
                              _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                                var problemText, problemProblem, problemSolutions, redirHref, redirPage, _newProblem$title, _json$parse3, _$3, problemsList, oldProblemsList, origOldProblemsList, origProblemsList, name, pageHistory, historyIndex, answersTitle, answerText, problemNum, answer, answerIndex;
                                return _regeneratorRuntime().wrap(function _loop2$(_context27) {
                                  while (1) switch (_context27.prev = _context27.next) {
                                    case 0:
                                      pageIndex = Math.floor(Math.random() * pages.length);
                                      randomPage = pages[pageIndex];
                                      console.log(randomPage);
                                      params = "action=parse&page=".concat(randomPage, "&format=json");
                                      _context27.next = 6;
                                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                                    case 6:
                                      response = _context27.sent;
                                      _context27.next = 9;
                                      return response.json();
                                    case 9:
                                      json = _context27.sent;
                                      problemText = latexer(json.parse.text["*"]);
                                      problemProblem = getProblem(problemText);
                                      problemSolutions = getSolutions(problemText);
                                      if (!(problemProblem && problemSolutions)) {
                                        _context27.next = 19;
                                        break;
                                      }
                                      newProblem = {
                                        title: randomPage,
                                        difficulty: computeDifficulty(computeTest(randomPage), computeNumber(randomPage), computeYear(randomPage)),
                                        problem: problemProblem,
                                        solutions: problemSolutions
                                      };
                                      problems.push(newProblem);
                                      pages.splice(pageIndex, 1);
                                      _context27.next = 42;
                                      break;
                                    case 19:
                                      if (!problemText.includes("Redirect to:")) {
                                        _context27.next = 39;
                                        break;
                                      }
                                      console.log("Redirect problem, going there instead...");
                                      redirHref = $($.parseHTML(problemText)).find(".redirectText a").attr("href");
                                      redirPage = redirHref.replace("/wiki/index.php/", "").replace(/_/g, " ");
                                      console.log(redirPage);
                                      params = "action=parse&page=".concat(redirPage, "&format=json");
                                      _context27.next = 27;
                                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                                    case 27:
                                      response = _context27.sent;
                                      _context27.next = 30;
                                      return response.json();
                                    case 30:
                                      json = _context27.sent;
                                      problemText = latexer(json.parse.text["*"]);
                                      problemProblem = getProblem(problemText);
                                      problemSolutions = getSolutions(problemText);
                                      newProblem = {
                                        title: randomPage,
                                        difficulty: computeDifficulty(computeTest(randomPage), computeNumber(randomPage), computeYear(randomPage)),
                                        problem: problemProblem,
                                        solutions: problemSolutions
                                      };
                                      problems.push(newProblem);
                                      pages.splice(pageIndex, 1);
                                      _context27.next = 42;
                                      break;
                                    case 39:
                                      console.log("Invalid problem, skipping...");
                                      pages.splice(pageIndex, 1);
                                      if (!pages.length) giveUp = true;
                                    case 42:
                                      if (!newProblem) {
                                        _context27.next = 81;
                                        break;
                                      }
                                      $("#batch-text .article-problem:nth-child(".concat(replacedIndex, ")")).replaceWith("<div class=\"article-problem\"\n                index=\"".concat(replacedIndex, "\" difficulty=\"").concat(newProblem.difficulty, "\">\n                <h2 class=\"problem-heading\">Problem ").concat(replacedIndex, "\n                  <span class=\"source-link\">\n                    (<a class=\"source-link-a\"\n                      href=\"?page=").concat(underscores(newProblem.title), "\">").concat(titleCleanup(newProblem.title), "</a>)\n                  </span>").concat(replaceButton, "\n                </h2>").concat(newProblem.problem, "\n              </div>"));
                                      $("#solutions-text .article-problem:nth-child(".concat(replacedIndex, ")")).replaceWith("<div class=\"article-problem\" \n                index=\"".concat(replacedIndex, "\" difficulty=\"").concat(newProblem.difficulty, "\">\n                <h2 class=\"problem-heading\">\n                  Problem ").concat(replacedIndex, "\n                  <span class=\"source-link\">\n                    (<a class=\"source-link-a\"\n                      href=\"?page=").concat(underscores(newProblem.title), "\">").concat(titleCleanup(newProblem.title), "</a>)\n                  </span>\n                </h2>").concat(newProblem.problem, "\n                <div class=\"solutions-divider\">Solution</div>\n                ").concat(newProblem.solutions, "\n              </div>"));
                                      problemsList = $("#copy-problems").attr("data-clipboard-text").split(", ");
                                      oldProblemsList = problemsList;
                                      origOldProblemsList = oldProblemsList.map(function (e) {
                                        return e.replace(/_/g, " ").replace("#", "Problems/Problem ");
                                      });
                                      problemsList[replacedIndex - 1] = titleCleanup(newProblem.title);
                                      $("#copy-problems").attr("data-clipboard-text", problemsList.join(", "));
                                      origProblemsList = problemsList.map(function (e) {
                                        return e.replace(/_/g, " ").replace("#", "Problems/Problem ");
                                      });
                                      name = $("#input-name").val();
                                      pageHistory = JSON.parse(localStorage.getItem("pageHistory"));
                                      historyIndex = pageHistory.findIndex(function (e) {
                                        return e.url === "?problems=".concat(underscores(origOldProblemsList.join("|")));
                                      });
                                      pageHistory[historyIndex].url = "?problems=".concat(underscores(origProblemsList.join("|")));
                                      pageHistory[historyIndex].title = name || problemsList.map(function (e) {
                                        return titleCleanup(e);
                                      }).join(", ").substring(0, 40) + "...";
                                      localStorage.setItem("pageHistory", JSON.stringify(pageHistory));
                                      history.replaceState({
                                        problems: underscores(origProblemsList.join("|"))
                                      }, name + " - Trivial Math Practice", "?problems=" + underscores(origProblemsList.join("|")));
                                      searchParams = new URLSearchParams(location.search);
                                      lastParam = searchParams.get("problems");
                                      katexFallback();
                                      $(".replace-problem").off("click");
                                      replaceProblems(problems);
                                      fixLinks();
                                      directLinks();
                                      hideLinks();
                                      breakSets();
                                      answersTitle = "".concat((_newProblem$title = newProblem.title) === null || _newProblem$title === void 0 ? void 0 : _newProblem$title.split(" Problems/Problem")[0], " Answer Key");
                                      params = "action=parse&page=".concat(answersTitle, "&format=json");
                                      _context27.next = 71;
                                      return fetch("".concat(apiEndpoint, "?").concat(params, "&origin=*"));
                                    case 71:
                                      response = _context27.sent;
                                      _context27.next = 74;
                                      return response.json();
                                    case 74:
                                      json = _context27.sent;
                                      $(".answer-box[index=".concat(replacedIndex, "]")).remove();
                                      answerText = (_json$parse3 = json.parse) === null || _json$parse3 === void 0 ? void 0 : _json$parse3.text["*"];
                                      problemNum = computeNumber(newProblem.title);
                                      answer = (_$3 = $($.parseHTML(answerText))) === null || _$3 === void 0 || (_$3 = _$3.find("ol li")) === null || _$3 === void 0 || (_$3 = _$3.eq(problemNum - 1)) === null || _$3 === void 0 ? void 0 : _$3.text();
                                      console.log(answer);
                                      if (answer) {
                                        if (!$("#batchans-section").length) $("#solutions-section").before("<div class=\"problem-section\" id=\"batchans-section\">\n                    <h2 class=\"section-header collapse-header\" id=\"batchans-header\">\n                    Answer Check\n                      <span class=\"header-minor\">(opt.)</span></h2>\n                    <div class=\"answer-list\"></div>\n                    <div class=\"options-input batchans-options\">\n                      <div class=\"input-container checkbox-container\n                      input-flexone-full\">\n                        <div class=\"checkbox-wrap\">\n                          <div class=\"radio-block\">\n                            <input type=\"radio\" name=\"input-feedback\" id=\"score-only\"\n                            value=\"score-only\">\n                            <label class=\"checkbox-label\">Only show score</label>\n                          </div>\n                          <div class=\"radio-block\">\n                            <input type=\"radio\" name=\"input-feedback\" id=\"check-only\"\n                            value=\"check-only\">\n                            <label class=\"checkbox-label\">Only mark questions</label>\n                          </div>\n                          <div class=\"radio-block\">\n                            <input type=\"radio\" name=\"input-feedback\" id=\"show-ans\"\n                            value=\"show-ans\" checked>\n                            <label class=\"checkbox-label\">Show correct answers</label>\n                          </div>\n                          <div class=\"radio-block\">\n                            <input type=\"checkbox\" class=\"input-check\" id=\"input-amc\"/>\n                            <label class=\"checkbox-label\">Use AMC 10/12 scoring</label>\n                          </div>\n                        </div>\n                      </div>\n                      <button class=\"input-button input-button-flexone-full\"\n                      id=\"batchans-button\">\n                        Check Answers\n                      </button>\n                    </div>\n                  </div>");
                                        $("#batchans-header").off("click");
                                        $("#batchans-header").click(function () {
                                          $("#batchans-section").toggleClass("section-collapsed");
                                        });
                                        if ($(".answer-box[index=".concat(replacedIndex, "]")).length) {
                                          $(".answer-box[index=".concat(replacedIndex, "]")).replaceWith("<div class=\"answer-box\" index=\"".concat(replacedIndex, "\"\n                    pagename=\"").concat(newProblem.title, "\" answer=\"").concat(answer, "\">\n                    <span class=\"answer-num\">").concat(replacedIndex, "</span>\n                    <input class=\"input-field input-batchans\" type=\"text\"\n                    placeholder=\"Enter answer\"/>\n                  </div>"));
                                        } else {
                                          answerIndex = replacedIndex;
                                          while (answerIndex && !$(".answer-box[index=".concat(answerIndex, "]")).length) answerIndex--;
                                          if (answerIndex !== 0) {
                                            $(".answer-box[index=".concat(answerIndex, "]")).after("<div class=\"answer-box\" index=\"".concat(replacedIndex, "\"\n                    pagename=\"").concat(newProblem.title, "\" answer=\"").concat(answer, "\">\n                    <span class=\"answer-num\">").concat(replacedIndex, "</span>\n                    <input class=\"input-field input-batchans\" type=\"text\"\n                    placeholder=\"Enter answer\"/>\n                  </div>"));
                                          } else {
                                            $(".answer-list").prepend("<div class=\"answer-box\" index=\"".concat(replacedIndex, "\"\n                    pagename=\"").concat(newProblem.title, "\" answer=\"").concat(answer, "\">\n                    <span class=\"answer-num\">").concat(replacedIndex, "</span>\n                    <input class=\"input-field input-batchans\" type=\"text\"\n                    placeholder=\"Enter answer\"/>\n                  </div>"));
                                          }
                                        }
                                      }
                                    case 81:
                                    case "end":
                                      return _context27.stop();
                                  }
                                }, _loop2);
                              });
                            case 3:
                              if (!(!newProblem && !giveUp)) {
                                _context28.next = 7;
                                break;
                              }
                              return _context28.delegateYield(_loop2(), "t0", 5);
                            case 5:
                              _context28.next = 3;
                              break;
                            case 7:
                            case "end":
                              return _context28.stop();
                          }
                        }, _callee26);
                      }));
                      return _replace.apply(this, arguments);
                    };
                    replace = function _replace2() {
                      return _replace.apply(this, arguments);
                    };
                    replacedProblem = $(this).closest(".article-problem");
                    replacedIndex = replacedProblem.attr("index");
                    replacedDifficulty = replacedProblem.attr("difficulty");
                    _context29.next = 7;
                    return getPages();
                  case 7:
                    pages = _context29.sent;
                    pages = pages.filter(function (problem) {
                      return !problems.map(function (e) {
                        return e.title;
                      }).includes(problem);
                    });
                    if ($("#input-sort").prop("checked")) pages = pages.filter(function (problem) {
                      return computeDifficulty(computeTest(problem), computeNumber(problem), computeYear(problem)) == replacedDifficulty;
                    });
                    console.log("".concat(pages.length, " total problems retrieved."));
                    if (pages.length) {
                      _context29.next = 15;
                      break;
                    }
                    $(this).replaceWith("<span class=\"replace-notice\">No replacements found</span>");
                    _context29.next = 19;
                    break;
                  case 15:
                    _context29.next = 17;
                    return replace();
                  case 17:
                    console.log(problems);
                    if (!pages.length) $(this).replaceWith("<span class=\"replace-notice\">No replacements found</span>");
                  case 19:
                  case "end":
                    return _context29.stop();
                }
              }, _callee27, this);
            })));
          case 2:
          case "end":
            return _context30.stop();
        }
      }, _callee28);
    }));
    return _replaceProblems.apply(this, arguments);
  }
  function clearProblem() {
    console.log("clearProblem");
    $(".problem-section").remove();
    $(".display-settings").remove();
    $(".results-container").remove();
    $("#load-results").remove();
  }
  function clearOptions() {
    console.log("clearOptions");
    clickedTimes++;
    document.title = "Trivial Math Practice";
    history.pushState({}, "Trivial Math Practice", location.href.split("?page=")[0].split("?problems=")[0]);
    lastParam = "";
    $("#difficulty-info").remove();
    $(".options-container").remove();
    $(".options-input").remove();
    $("#options-header").remove();
    $(".error").remove();
    $(".problem-section").remove();
    $(".display-settings").remove();
    $(".results-container").remove();
    $("#load-results").remove();
    $(".notes").remove();
  }
  function clearOptionsWithoutHistory() {
    console.log("clearOptionsWithoutHistory");
    clickedTimes++;
    $("#difficulty-info").remove();
    $(".options-container").remove();
    $(".options-input").remove();
    $("#options-header").remove();
    $(".error").remove();
    $(".problem-section").remove();
    $(".display-settings").remove();
    $(".results-container").remove();
    $("#load-results").remove();
    $(".notes").remove();
  }
  function clearAll() {
    console.log("clearAll");
    clickedTimes++;
    document.title = "Trivial Math Practice";
    history.pushState({}, "Trivial Math Practice", location.href.split("?page=")[0].split("?problems=")[0]);
    lastParam = "";
    $("#secondary-button-container").remove();
    $("#difficulty-info").remove();
    $(".options-container").remove();
    $(".options-input").remove();
    $("#options-header").remove();
    $(".error").remove();
    $(".problem-section").remove();
    $(".display-settings").remove();
    $(".results-container").remove();
    $("#load-results").remove();
    $(".notes").remove();
  }

  // Active buttons
  function activeButton(buttonName) {
    $(".button").removeClass("button-active");
    $("#".concat(buttonName)).addClass("button-active");
  }
  function activeSecondaryButton(buttonName) {
    $(".secondary-button").removeClass("secondary-button-active");
    $("#".concat(buttonName)).addClass("secondary-button-active");
  }

  // Formatting
  function collapseText() {
    console.log("collapseText");
    $("#notes-header").click(function () {
      $(".notes").toggleClass("text-collapsed");
    });
    $("#options-header").click(function () {
      $(".options-container").toggleClass("text-collapsed");
    });
  }
  function customText() {
    console.log("customText");
    if (JSON.parse(localStorage.getItem("serifFont"))) $(".article-text").addClass("serif-text");
    if (JSON.parse(localStorage.getItem("justifyText"))) $(".article-text").addClass("justify-text");
  }
  function changeName() {
    console.log("changeName");
    var name = $("#input-name").val();
    if (name) {
      $("#batch-header").html(sanitize(name));
      document.title = sanitize(name) + " - Trivial Math Practice";
    } else {
      document.title = "Problem Set - Trivial Math Practice";
    }
  }
  function nameLive() {
    console.log("nameLive");
    $("#input-name").change(function () {
      changeName();
    });
  }
  function katexFallback() {
    console.log("katexFallback");
    $(".katex-error, .text[style='color:#cc0000;']").each(function () {
      $(this).closest(".katex-container").addClass("katex-broken");
      $(this).closest(".katex-container").prev(".fallback-container").addClass("fallback-live");
    });
  }
  function fixLinks() {
    console.log("fixLinks");
    $("a").each(function () {
      var _$$attr;
      var href = (_$$attr = $(this).attr("href")) === null || _$$attr === void 0 ? void 0 : _$$attr.split("#")[0];
      if (href && /^\/wiki\/index\.php\//.test(href)) {
        $(this).attr({
          href: href.replace("/wiki/index.php/", "?page="),
          title: ""
        });
      } else if (href && /^\/wiki\/index\.php/.test(href)) {
        $(this).attr({
          href: href.replace("/wiki/index.php", "https://artofproblemsolving.com/wiki/index.php"),
          title: ""
        });
      }
    });
    $("a.image").each(function () {
      $(this).removeAttr("href");
    });
  }
  function directLinks() {
    return _directLinks.apply(this, arguments);
  }
  function _directLinks() {
    _directLinks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
      return _regeneratorRuntime().wrap(function _callee30$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            console.log("directLinks");
            $("a:not(#aops-wiki-link):not(.aops-link):not(.new)").off("click");
            $("a:not(#aops-wiki-link):not(.aops-link):not(.new)").click( /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(event) {
                var href, pagename;
                return _regeneratorRuntime().wrap(function _callee29$(_context31) {
                  while (1) switch (_context31.prev = _context31.next) {
                    case 0:
                      href = $(this).attr("href");
                      if (!(href && (href.includes("artofproblemsolving.com/wiki/") || href.includes("?page=")))) {
                        _context31.next = 13;
                        break;
                      }
                      event.preventDefault();
                      pagename = decodeURIComponent(href.replace(/^https?:\/\/(www\.)?artofproblemsolving\.com\/wiki\/index\.php\//, "").replace(/^\?page=/, "").replace(/_/g, " ").replace(/%/g, "%25")).replace(/%2F/g, "/");
                      clearProblem();
                      console.log(pagename);
                      if (!validProblem(pagename)) {
                        _context31.next = 11;
                        break;
                      }
                      _context31.next = 9;
                      return addProblem(pagename, true);
                    case 9:
                      _context31.next = 13;
                      break;
                    case 11:
                      _context31.next = 13;
                      return addArticle(pagename, true);
                    case 13:
                    case "end":
                      return _context31.stop();
                  }
                }, _callee29, this);
              }));
              return function (_x21) {
                return _ref15.apply(this, arguments);
              };
            }());
          case 3:
          case "end":
            return _context32.stop();
        }
      }, _callee30);
    }));
    return _directLinks.apply(this, arguments);
  }
  function hideLinks() {
    console.log("hideLinks");
    if ($("#input-hide").prop("checked")) $("#batch-text .source-link").addClass("source-link-hidden");else $("#batch-text .source-link").removeClass("source-link-hidden");
  }
  function hideToggle() {
    console.log("hideToggle");
    $("#input-hide").change(function () {
      $("#batch-text .source-link").toggleClass("source-link-hidden");
    });
  }
  function collapseSolutions() {
    console.log("collapseSolutions");
    $("#solutions-header").off("click");
    $("#solutions-header").click(function () {
      $("#solutions-section").toggleClass("section-collapsed");
      $("#input-answer").prop("disabled", true);
      if (!JSON.parse(localStorage.getItem("countersHidden")) && $(".answer-check").length && !$(".correct-feedback").length && !progressUpdated) {
        $("main").removeClass("hide-counters");
        $(".progress-hidden").removeClass("progress-hidden");
        $(".progress-nobottom").removeClass("progress-nobottom");
        progressUpdated = true;
        if (answerTries > 0) {
          $(".streak-bar").removeClass("bar-hidden");
          $(".question-bar.wrong-questions").removeClass("bar-hidden");
          $(".question-bar.wrong-questions").css("flex-grow", parseInt($(".question-bar.wrong-questions").css("flex-grow")) + 1);
          $("#wrong-num").text(parseInt($(".question-bar.wrong-questions").css("flex-grow")));
        } else {
          streakCount = 0;
          $("#streak-num").text(streakCount);
          $(".streak-bar").removeClass("bar-hidden");
          $(".question-bar.blank-questions").removeClass("bar-hidden");
          $(".question-bar.blank-questions").css("flex-grow", parseInt($(".question-bar.blank-questions").css("flex-grow")) + 1);
          $("#blank-num").text(parseInt($(".question-bar.blank-questions").css("flex-grow")));
        }
      }
    });
  }
  function displaySettings() {
    console.log("displaySettings");
    if (JSON.parse(localStorage.getItem("serifFont"))) {
      $("#serif-toggle").text("Serif font");
    }
    if (JSON.parse(localStorage.getItem("justifyText"))) {
      $("#justify-toggle").text("Justified text");
    }
    if (JSON.parse(localStorage.getItem("countersHidden"))) {
      $("#counter-toggle").text("Counters off");
      $("main").addClass("hide-counters");
    }
    if (JSON.parse(localStorage.getItem("autogenOff"))) {
      $("#autogen-toggle").text("Auto-generate off");
    }
    if (printLinks) {
      $(".page-container").addClass("links-text");
      $("#print-toggle").text("Links printed");
    }
    $("#serif-toggle").click(function () {
      settingsClicked += "1";
      $(".article-text").toggleClass("serif-text");
      if (!JSON.parse(localStorage.getItem("serifFont"))) {
        localStorage.setItem("serifFont", true);
        $("#serif-toggle").text("Serif font");
      } else {
        localStorage.setItem("serifFont", false);
        $("#serif-toggle").text("Sans font");
      }
    });
    $("#justify-toggle").click(function () {
      settingsClicked += "2";
      $(".article-text").toggleClass("justify-text");
      if (!JSON.parse(localStorage.getItem("justifyText"))) {
        localStorage.setItem("justifyText", true);
        $("#justify-toggle").text("Justified text");
      } else {
        localStorage.setItem("justifyText", false);
        $("#justify-toggle").text("Unjustified text");
      }
    });
    $("#counter-toggle").click(function () {
      settingsClicked += "3";
      $("main").toggleClass("hide-counters");
      if (!JSON.parse(localStorage.getItem("countersHidden"))) {
        localStorage.setItem("countersHidden", true);
        $("#counter-toggle").text("Counters off");
      } else {
        localStorage.setItem("countersHidden", false);
        $("#counter-toggle").text("Counters on");
      }
    });
    $("#autogen-toggle").click(function () {
      settingsClicked += "4";
      if (!JSON.parse(localStorage.getItem("autogenOff"))) {
        localStorage.setItem("autogenOff", true);
        $("#autogen-toggle").text("Auto-generate off");
      } else {
        localStorage.setItem("autogenOff", false);
        $("#autogen-toggle").text("Auto-generate on");
      }
    });
    $("#print-toggle").click(function () {
      settingsClicked += "5";
      if (settingsClicked === "12345" && !$("#fun-toggle").length) {
        $("#print-toggle").after("\n          <span class=\"divider\"> \u22C5 </span>\n          <button class=\"text-button setting-button\" id=\"fun-toggle\" tabindex=\"0\">\n            Made you click\n          </button>");
        settingsClicked = "";
      }
      $("#fun-toggle").click(function () {
        $(".divider").remove();
        $(this).remove();
      });
      $(".page-container").toggleClass("links-text");
      if (printLinks) {
        printLinks = false;
        $("#print-toggle").text("Links unprinted");
      } else {
        printLinks = true;
        $("#print-toggle").text("Links printed");
      }
    });
  }
  function breakSets() {
    console.log("breakSets");
    var breakNum = $("#input-break").val();
    if (breakNum) {
      $(".article-problem").css("break-after", "");
      $(".article-problem:nth-child(".concat(breakNum, "n)")).css("break-after", "page");
    } else $(".article-problem").css("break-after", "");
  }
  function breakLive() {
    console.log("breakLive");
    $("#input-break").change(function () {
      breakSets();
    });
  }

  // Update options
  function updateYear() {
    console.log("updateYear");
    $("#input-singletest, #input-singlever").off("change");
    $("#input-singletest").change(function () {
      var testName = $("#input-singletest").val();
      if (testName in validVersions) {
        $("#input-singlever").data("tagify").setDisabled(false);
        $("#input-singlever").data("tagify").whitelist = validVersions[testName];
      } else {
        $("#input-singlever").data("tagify").removeAllTags();
        $("#input-singlever").data("tagify").setDisabled(true);
      }
    });
    $("#input-singletest, #input-singlever").change(function () {
      var yearSelect = $(this).nextAll("#input-singleyear");
      var numSelect = $(this).nextAll("#input-singlenum");
      var testVer = $("#input-singlever").val();
      var testName = $("#input-singletest").val();
      if (testName + testVer in validYears) yearSelect.attr({
        min: validYears[testName + testVer].min,
        max: validYears[testName + testVer].max
      });
      if (testName in validNums) numSelect.attr({
        min: validNums[testName].min,
        max: validNums[testName].max
      });
    });
  }

  // Insert chart
  function renderChart() {
    console.log("renderChart");
    var options = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A simple bar chart with ranged data (aka Gantt Chart).",
      data: {
        values: [{
          Test: "AMC 8",
          "Start difficulty": 0.25,
          "End difficulty": 2,
          Level: "Introductory"
        }, {
          Test: "AMC 10",
          "Start difficulty": 1,
          "End difficulty": 4.5,
          Level: "Intermediate"
        }, {
          Test: "AMC 12",
          "Start difficulty": 1.25,
          "End difficulty": 5.5,
          Level: "Intermediate"
        }, {
          Test: "AHSME",
          "Start difficulty": 1,
          "End difficulty": 5.5,
          Level: "Intermediate"
        }, {
          Test: "AIME",
          "Start difficulty": 3,
          "End difficulty": 6.5,
          Level: "Intermediate"
        }, {
          Test: "USAJMO",
          "Start difficulty": 4,
          "End difficulty": 7,
          Level: "Olympiad"
        }, {
          Test: "USAMO",
          "Start difficulty": 4,
          "End difficulty": 8.5,
          Level: "Olympiad"
        }, {
          Test: "IMO",
          "Start difficulty": 4,
          "End difficulty": 9.5,
          Level: "Olympiad"
        }]
      },
      mark: "bar",
      encoding: {
        y: {
          field: "Test",
          type: "ordinal",
          sort: {
            order: null
          },
          axis: {
            titleFontSize: 14,
            labelFontSize: 13
          }
        },
        x: {
          field: "Start difficulty",
          type: "quantitative",
          axis: {
            tickMinStep: 1,
            titleFontSize: 14,
            labelFontSize: 13,
            title: "Difficulty"
          }
        },
        x2: {
          field: "End difficulty"
        },
        color: {
          type: "nominal",
          field: "Level",
          scale: {
            domain: ["Introductory", "Intermediate", "Olympiad"],
            range: ["#f58518", "#4c78a8", "#e45756"]
          },
          sort: {
            order: null
          },
          legend: {
            titleFontSize: 14,
            labelFontSize: 13
          }
        }
      },
      width: "container",
      height: 200,
      background: null,
      config: {
        font: "'Latin Modern Sans', sans-serif"
      }
    };
    vegaEmbed("#difficulty-chart", options, {
      actions: false,
      renderer: "svg"
    });
  }

  // Enter pages into history
  function addHistory(page, snippet) {
    console.log("addHistory", page, snippet);
    var history = JSON.parse(localStorage.getItem("pageHistory"));
    var url = "?page=".concat(underscores(page));
    var cleanedPage = titleCleanup(page);
    var sanitizedSnippet = sanitize(snippet);
    if (history) history.unshift({
      url: url,
      title: cleanedPage,
      snippet: sanitizedSnippet
    });else history = [{
      url: url,
      title: cleanedPage,
      snippet: sanitizedSnippet
    }];
    if (history.length > 50) history.pop();
    history = _toConsumableArray(new Map(history.map(function (item) {
      return [item.title, item];
    })).values());
    localStorage.setItem("pageHistory", JSON.stringify(history));
  }
  function addHistoryBatch(problems, snippet, title, testYear, testName) {
    console.log("addHistoryBatch", problems, snippet, title, testYear, testName);
    var history = JSON.parse(localStorage.getItem("pageHistory"));
    var url = "?problems=".concat(underscores(problems.join("|"))) + (testYear ? "&testyear=".concat(testYear, "&testname=").concat(testName) : "");
    var cleanedPage = title || problems.map(function (e) {
      return titleCleanup(e);
    }).join(", ").substring(0, 40) + "...";
    var sanitizedSnippet = sanitize(snippet);
    if (history) history.unshift({
      url: url,
      title: cleanedPage,
      snippet: sanitizedSnippet
    });else history = [{
      url: url,
      title: cleanedPage,
      snippet: sanitizedSnippet
    }];
    if (history.length > 50) history.pop();
    history = _toConsumableArray(new Map(history.map(function (item) {
      return [item.title, item];
    })).values());
    localStorage.setItem("pageHistory", JSON.stringify(history));
  }

  // Show article/batch if query
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (!searchParams.get("page")) {
            _context16.next = 12;
            break;
          }
          $("#main-button-container").after("".concat(notes));
          collapseText();
          if (!validProblem(lastParam)) {
            _context16.next = 8;
            break;
          }
          _context16.next = 6;
          return addProblem(lastParam, true);
        case 6:
          _context16.next = 10;
          break;
        case 8:
          _context16.next = 10;
          return addArticle(lastParam, true);
        case 10:
          _context16.next = 19;
          break;
        case 12:
          if (!searchParams.get("problems")) {
            _context16.next = 19;
            break;
          }
          $("#main-button-container").after("".concat(notes));
          addUrlBatch();
          collapseText();
          console.log(testInfo);
          _context16.next = 19;
          return fillBatch(lastParam, true, testInfo.testYear, testInfo.testName);
        case 19:
          window.onpopstate = /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(event) {
              var _event$state, _event$state2, _event$state3, _event$state4;
              var newPagename, newProblems, newTestYear, newTestName;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    newPagename = (_event$state = event.state) === null || _event$state === void 0 ? void 0 : _event$state.page;
                    newProblems = (_event$state2 = event.state) === null || _event$state2 === void 0 ? void 0 : _event$state2.problems;
                    newTestYear = (_event$state3 = event.state) === null || _event$state3 === void 0 ? void 0 : _event$state3.testyear;
                    newTestName = (_event$state4 = event.state) === null || _event$state4 === void 0 ? void 0 : _event$state4.testname;
                    console.log("newProblems:", newProblems);
                    if (!(newPagename && newPagename !== searchParams.get("page"))) {
                      _context15.next = 18;
                      break;
                    }
                    if (!$(".notes").length) {
                      if (!$("#secondary-button-container").length) $("#main-button-container").after("".concat(notes));else $("#secondary-button-container").after("".concat(notes));
                      collapseText();
                    }
                    clearProblem();
                    if (!validProblem(newPagename)) {
                      _context15.next = 13;
                      break;
                    }
                    _context15.next = 11;
                    return addProblem(newPagename, false);
                  case 11:
                    _context15.next = 15;
                    break;
                  case 13:
                    _context15.next = 15;
                    return addArticle(newPagename, false);
                  case 15:
                    lastParam = newPagename;
                    _context15.next = 27;
                    break;
                  case 18:
                    if (!(newProblems && newProblems !== searchParams.get("problems"))) {
                      _context15.next = 27;
                      break;
                    }
                    clearOptionsWithoutHistory();
                    $("#main-button-container").after("".concat(notes));
                    collapseText();
                    addUrlBatch();
                    _context15.next = 25;
                    return fillBatch(newProblems, false, newTestYear, newTestName);
                  case 25:
                    lastParam = newProblems;
                    testInfo = {
                      testYear: newTestYear,
                      testName: newTestName
                    };
                  case 27:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15);
            }));
            return function (_x20) {
              return _ref11.apply(this, arguments);
            };
          }();
        case 20:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }))();

  // Bonus
  /*
  $(".subtitle").click(() => {
    subtitleClicked++;
    let text;
    switch (subtitleClicked % 7) {
      case 0:
        text = "Studying & Practicing — AoPS Wiki Powered";
        break;
      case 1:
        text = "Alcumus, but you don’t get internet points";
        break;
      case 2:
        text = "Brilliant, but you don’t learn anything useful";
        break;
      case 3:
        text = "Wikiwand, but you don’t get ads everywhere";
        break;
      case 4:
        text = "A web browser, but you can only use AoPS";
        break;
      case 5:
        text = "A side project, but why didn’t I just use React.js";
        break;
      case 6:
        text =
          "The AoPS Wiki, but you waste time trying to find the other easter eggs";
        break;
    }
    $(".subtitle").html(text);
  });*/
})();
},{}],"node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57262" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map