module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/admin/index","2":"pages/index","3":"pages/login","4":"pages/member/[_]id/bet/_p2","5":"pages/member/[_]id/bet/index","6":"pages/member/[_]id/index","7":"pages/member/index","8":"pages/staff/[_]id/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  authUser: null,
  cointeam: 0,
  Lottery: [],
  friendlist: [],
  evidence: [],
  allfriend: [],
  bet: {
    betSend: [],
    betGot: [],
    betAccept: [],
    betResult: []
  },
  allteamcoin: [],
  group: []
}));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(39);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // console.log('555')
  const user = context.store.getters.isLoggedIn;

  if (!user) {
    context.router.push("/login");
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  const user = context.store.getters.getUser;
  const user2 = context.$fireAuth.currentUser;
  console.log(user2);

  if (user) {
    if (user.role == "member") {
      console.log("test2222"); // context.router.push("/" + user.uid);
    } else if (user.role == "staff") {// context.router.push("/staff/" + user.uid);
    } else if (user.role == "admin") {// context.router.push("/admin");
    }
  } else {
    console.log("333"); // context.router.push("/");
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.d8b5bfc.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  async nuxtServerInit({
    dispatch,
    commit
  }, ctx) {
    if (this.$fireAuth === null) {
      throw "nuxtServerInit Example not working - this.$fireAuth cannot be accessed.";
    }

    if (ctx.$fireAuth === null) {
      throw "nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.";
    }

    if (ctx.app.$fireAuth === null) {
      throw "nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.";
    }

    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const {
        allClaims: claims,
        ...authUser
      } = ctx.res.locals.user;
      console.info("Auth User verified on server-side. User: ", authUser, "Claims:", claims);
      await dispatch("onAuthStateChanged", {
        authUser,
        claims
      });
    }
  },

  // <!--     Member info    -->
  async onAuthStateChanged({
    commit
  }, {
    authUser
  }) {
    if (!authUser) {
      commit("RESET_STORE");
      return;
    }

    try {
      const res = await this.$fireStore.collection("member").doc(authUser.uid).get().then(doc => {
        return doc.data();
      });
      const data = { ...res,
        uid: authUser.uid
      };
      commit("SET_AUTH_USER", data);
      this.dispatch("LoadTeamcoin", data.team);
    } catch (error) {
      console.log(error);
    }
  },

  async userSignUp({
    commit
  }, data) {
    commit("setLoading", true);

    try {
      await this.$fireAuth.createUserWithEmailAndPassword(data.username + "@pfreshy.com", data.password).then(user => {
        commit("setUser", user);
        commit("setLoading", false);
        this.$router.push("/");
      });
    } catch (e) {
      commit("setError", e.message);
      commit("setLoading", false);
    }
  },

  async signout({
    commit
  }) {
    try {
      await this.$fireAuth.signOut().then(result => {
        commit("setUser", "");
        this.$router.push("/");
      });
    } catch (e) {
      console.log(e.message);
    }
  },

  // <!--    End member info    -->
  // <!-- Lottery  -->
  async buyLottery({
    commit,
    state
  }, numball) {
    // console.log(numball);
    const x = numball;
    let data = [];
    let lot = state.Lottery || [];

    for (let i = 0; i < 100; i++) {
      if (numball[i] == true || lot[i] == true) {
        data.push(i + 1);
      }
    }

    const Res = await this.$fireStore.collection("Lottery").doc(state.authUser.uid).set({
      lottery: data
    });
    commit("setLottery", x);
  },

  async setLotteryAll({
    commit,
    state
  }) {
    if (state.authUser) {
      const LotRef = this.$fireStore.collection("Lottery");

      try {
        const res = await LotRef.doc(state.authUser.uid).get().then(doc => {
          return doc.data();
        });
        commit("setLotteryAll", res);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("kuay");
    }
  },

  // <!-- End Lottery -->
  // <!-- coin setting -->
  async discountMoney({
    commit,
    state
  }, cost) {
    const memberRef = this.$fireStore.collection("member").doc(state.authUser.uid);
    let coinleft = parseInt(state.authUser.coin) - parseInt(cost);
    const res = await memberRef.update({
      coin: coinleft
    });
    commit("setCoin", coinleft);
  },

  async donate({
    commit,
    state
  }, coin) {
    try {
      const teamRef = this.$fireStore.collection("coin").doc(state.authUser.team);
      const doc = await teamRef.get();
      let coinleft = parseInt(doc.data().coin) + parseInt(coin);
      const res = await teamRef.update({
        coin: coinleft
      }); // console.log(coinleft)

      commit("setCoinTeam", coinleft);
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  },

  async LoadTeamcoin({
    commit,
    state
  }, team) {
    if (state.authUser) {
      const messageRef = this.$fireStore.collection("coin").doc(team);

      try {
        const messageDoc = await messageRef.get().then(data => {
          return data.data().coin;
        }); // const tc = messageDoc.data().coin

        commit("setCoinTeam", messageDoc); // commit('setCoinTeam', messageDoc.data().coin)
      } catch (e) {
        console.log(e.message);
        return;
      }
    }
  },

  async discountTeamCoin({
    commit,
    state
  }, cost) {
    const teamRef = this.$fireStore.collection("coin").doc(state.authUser.team);
    const doc = await teamRef.get();
    let coinleft = parseInt(doc.data().coin) - parseInt(cost);
    const res = await teamRef.update({
      coin: coinleft
    });
    commit("setCoinTeam", coinleft);
  },

  // <!-- End coin setting -->
  // <!-- Friend -->
  async LoadFriendlist({
    commit,
    state
  }) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection("member");

      try {
        const EveDoc = await FriendRef.where("team", "==", state.authUser.team).get().then(doc => {
          return doc.docs;
        });
        commit("setFriendlist", EveDoc);
      } catch (e) {
        console.log(e.message);
        return;
      }
    }
  },

  async getAllMember({
    commit,
    state
  }) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection("member");

      try {
        const EveDoc = await FriendRef.where("role", "==", "member").get().then(doc => {
          return doc.docs;
        });
        commit("setFriendAll", EveDoc);
      } catch (e) {
        console.log(e.message);
        return;
      }
    }
  },

  async getSearchMember({
    commit,
    state
  }, uid) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection("member");

      try {
        const EveDoc = await FriendRef.doc(uid).get().then(doc => {
          return doc.data();
        });
        commit("setFriendSearch", EveDoc);
      } catch (e) {
        console.log(e.message);
        return;
      }
    }
  },

  // <!-- End Friend -->
  // <!-- Evidence -->
  async loadEvidence({
    commit,
    state
  }) {
    if (state.authUser) {
      try {
        const teamRef = this.$fireStore.collection("Evidence").doc(state.authUser.team);
        const doc = await teamRef.get();
        const have = parseInt(doc.data().bought);
        const Eve = await this.$fireStore.collection("Evidence").doc("all").get();
        commit("setEvidence", { ...Eve.data(),
          have: have
        });
      } catch (e) {
        console.log(e.message);
        return;
      }
    }
  },

  async buyEve({
    commit,
    state
  }, buy) {
    try {
      const teamRef = this.$fireStore.collection("Evidence").doc(state.authUser.team);
      const doc = await teamRef.get();
      const before = parseInt(doc.data().bought);
      const boughts = before + parseInt(buy);
      const res = await teamRef.update({
        bought: boughts
      });
      const Eve = await this.$fireStore.collection("Evidence").doc("all").get();
      commit("setEve", { ...Eve.data(),
        before: before,
        bought: boughts
      });
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  },

  // <!-- End Evidence -->
  // <!-- Bet -->
  async createBet({
    commit
  }, form) {
    const BetRef = this.$fireStore.collection("Bet");

    try {
      const Res = await BetRef.doc().set(form);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async LoadBetSend({
    commit,
    state
  }) {
    const BetRef = this.$fireStore.collection("Bet");

    try {
      const Res = await BetRef.where("player1", "==", state.authUser.uid).where("accept", "==", false).get();
      commit("setBetSend", Res);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async LoadBetGot({
    commit,
    state
  }) {
    const BetRef = this.$fireStore.collection("Bet");

    try {
      const Res = await BetRef.where("player2", "==", state.authUser.uid).get();
      commit("setBetGot", Res);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async LoadBetAccept({
    commit,
    state
  }) {
    const BetRef = this.$fireStore.collection("Bet");

    try {
      const Res = await BetRef.where("player2", "==", state.authUser.uid).where("accept", "==", true).get();
      const Res2 = await BetRef.where("player1", "==", state.authUser.uid).where("accept", "==", true).get();
      const ResAll = Res.docs.concat(Res2.docs);
      commit("setBetAccept", ResAll);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async LoadBetResult({
    commit,
    state
  }) {
    const BetRef = this.$fireStore.collection("BetResult");

    try {
      const Res = await BetRef.where("player2", "==", state.authUser.uid).get();
      const Res2 = await BetRef.where("player1", "==", state.authUser.uid).get();
      const ResAll = Res.docs.concat(Res2.docs);
      commit("setBetResult", ResAll);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async BetAccept({
    commit
  }, bet) {
    try {
      const teamRef = this.$fireStore.collection("Bet").doc(bet.Betid); // console.log(bet)

      const res = await teamRef.update({
        accept: true
      });
      commit("setAccepted", bet);
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  },

  async BetRefuse({
    commit
  }, bet) {
    try {
      const teamRef = this.$fireStore.collection("Bet").doc(bet.Betid);
      const res = await teamRef.delete();
      bet.read = false;
      const insert = await this.$fireStore.collection("BetResult").doc(bet.Betid).set(bet);
      commit("setRefuse", bet);
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  },

  async BetCancel({
    commit
  }, bet) {
    try {
      const teamRef = this.$fireStore.collection("Bet").doc(bet.Betid);
      const res = await teamRef.delete();
      commit("setCancel", bet);
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  },

  async BetWin({
    commit,
    state
  }, bet) {
    try {
      const teamRef = this.$fireStore.collection("Bet").doc(bet.Betid);
      const res = await teamRef.get();
      const x = res.data();

      if (x.winner != "") {
        if (x.winner == state.authUser.uid) alert("ผู้ชนะคือคุณไง !");else alert("มีคนกดชนะไปแล้ว ! ถ้าถูกโกงโปรดแจ้งรุ่นพี่นะจ้ะ :D");
      } else {
        if (x.loser != "") {
          if (x.loser != state.authUser.uid) {
            bet.winner = state.authUser.uid;
            const insert = await this.$fireStore.collection("BetResult").doc(bet.Betid).set(bet);
            const delete1 = await teamRef.delete();
            commit("setWinLose", bet);
          } else {
            alert("กดแพ้ไปแล้วไม่ใช่หรอคุณ ?");
          }
        } else {
          const update = await teamRef.update({
            winner: state.authUser.uid
          });
        }
      }
    } catch (e) {
      console.log("Error ! ", e);
    }
  },

  async BetLose({
    commit,
    state
  }, bet) {
    try {
      const teamRef = this.$fireStore.collection("Bet").doc(bet.Betid); // const res = await teamRef.delete();

      const res = await teamRef.get();
      const x = res.data();

      if (x.loser != "") {
        if (x.loser == state.authUser.uid) alert("อยากแพ้ซ้ำซ้อนหรือไงกัน !");else alert("มีคนกดแพ้ไปแล้ว !");
      } else {
        if (x.winner != "") {
          if (x.winner != state.authUser.uid) {
            bet.loser = state.authUser.uid;
            const insert = await this.$fireStore.collection("BetResult").doc(bet.Betid).set(bet);
            const delete1 = await teamRef.delete();
            commit("setWinLose", bet);
          } else {
            alert("อยากแพ้ขนาดนั้นเชียวหรอ !");
          } // ย้า่ยไป Result

        } else {
          // set Winner
          const update = await teamRef.update({
            loser: state.authUser.uid
          });
        }
      }
    } catch (e) {
      console.log("Error ! ", e);
    }
  },

  // <!-- End Bet -->
  // <!-- Admin -->
  async addMemberNoMail({
    commit
  }, form) {
    const memberRef = this.$fireStore.collection("member").doc();

    try {
      const Res = await memberRef.set(form);
    } catch (e) {
      console.log(e.message);
      return;
    }
  },

  async getAllTeamCoin({
    commit
  }, form) {
    try {
      const docRef = this.$fireStore.collection("coin");
      const doc = await docRef.get();
      commit("setAllTeamCoin", doc);
    } catch (error) {
      console.log(error.message);
    }
  },

  async discountCoinTeamStaff({
    commit
  }, form) {
    try {
      const teamRef = this.$fireStore.collection("coin").doc(form.team);
      const doc = await teamRef.get();
      let coinleft = parseInt(doc.data().coin) - parseInt(form.coin);
      const res = await teamRef.update({
        coin: coinleft
      });
      commit("setTeamCoinStaff", { ...form,
        coin: coinleft
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  async addCoin({
    commit
  }, form) {
    try {
      const memberRef = this.$fireStore.collection("member").doc(form.uid);
      const doc = await memberRef.get();
      let coinleft = parseInt(doc.data().coin) + parseInt(form.coin);
      const res = await memberRef.update({
        coin: coinleft
      });
      commit("setMemberCoin", { ...form,
        coinleft: coinleft
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  async AddGroup({
    commit,
    state
  }, form) {
    try {
      let x = JSON.stringify(form);
      x = JSON.parse(x);
      x.forEach(element => {
        delete element.picture;
        delete element.role;
        delete element.coin;
      });
      const memberRef = this.$fireStore.collection("group").doc(state.authUser.group);
      const doc1 = await memberRef.get();
      let c = doc1.data();
      c = c.g;
      let o = [];
      let check = false;

      for (let Cindex in c) {
        o.push(c[Cindex]);
      }

      x.forEach(element => {
        check = false;

        for (let Cindex in c) {
          if (c[Cindex].uid == element.uid) {
            check = true;
          }
        }

        if (check == false) {
          if (!o.includes(element)) {
            o.push(element);
          }
        }
      });
      const doc = await memberRef.set({
        g: { ...o
        }
      });
      commit("setGroup", o);
    } catch (error) {
      console.log(error.message);
    }
  },

  async LoadGroup({
    commit,
    state
  }) {
    try {
      const memberRef = this.$fireStore.collection("group").doc(state.authUser.group);
      const doc = await memberRef.get();
      commit("LoadGroup", doc.data().g);
    } catch (error) {
      console.log(error.message);
    }
  },

  async DeletMemberFromGroup({
    commit,
    state
  }, form) {
    try {
      let w = JSON.parse(JSON.stringify(form));
      w.forEach(element => {
        delete element.picture;
        delete element.role;
        delete element.coin;
      });
      const memberRef = this.$fireStore.collection("group").doc(state.authUser.group);
      const doc1 = await memberRef.get();
      let c = doc1.data();
      c = c.g;
      let o = [];
      let check = false;

      for (let Cindex in c) {
        check = false;
        w.forEach(element => {
          if (c[Cindex].uid == element.uid) {
            check = true;
          }
        });

        if (check == false) {
          if (!o.includes(c[Cindex])) {
            o.push(c[Cindex]);
          }
        }
      }

      const doc = await memberRef.set({
        g: { ...o
        }
      });
      commit("setDGroup", o);
    } catch (error) {
      console.log(error.message);
    }
  },

  async LoadBetStaff({
    commit
  }) {
    try {} catch (error) {}
  } // <!-- End Admin -->


});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  isLoggedIn: state => {
    try {
      return state.authUser.uid !== null;
    } catch {
      return false;
    }
  },

  getUser(state) {
    return state.authUser;
  },

  getLottery(state) {
    return state.Lottery;
  },

  getCoin(state) {
    if (state.authUser) return state.authUser.coin;else return;
  },

  getCoinTeam(state) {
    if (state.authUser) return state.cointeam;else return;
  },

  getEvidence(state) {
    return state.evidence;
  },

  getTeamFriend(state) {
    return state.friendlist;
  },

  getPicture(state) {
    if (state.authUser) return state.authUser.picture;
  },

  getAllFriend(state) {
    if (state.authUser) return state.allfriend;
  },

  getBetSend(state) {
    if (state.bet.betSend) return state.bet.betSend;
  },

  getBetAccept(state) {
    if (state.bet.betSend) return state.bet.betAccept;
  },

  getBetGot(state) {
    if (state.bet.betSend) return state.bet.betGot;
  },

  getBetResult(state) {
    if (state.bet.betSend) return state.bet.betResult;
  },

  getAllTeamCoin(state) {
    if (state.allteamcoin) return state.allteamcoin;
  },

  getGroup(state) {
    return state.group;
  }

});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["default"] = ({
  RESET_STORE: state => {
    Object.assign(state, Object(_state__WEBPACK_IMPORTED_MODULE_0__["default"])());
  },
  SET_AUTH_USER: (state, form) => {
    state.authUser = form;
  },

  setError(state, payload) {
    state.error = payload;
  },

  setLoading(state, payload) {
    state.loading = payload;
  },

  setEvidence(state, payload) {
    if (payload.have != 0 && payload != "") {
      for (let i = 0; i < payload.have; i++) {
        state.evidence.push(payload.message[i]);
      }
    } else state.evidence = [];
  },

  setEve(state, payload) {
    if (payload.bought != 0) {
      for (let i = payload.before; i < payload.bought; i++) {
        state.evidence.push(payload.message[i]);
      }
    } else state.evidence = [];
  },

  setFriendlist(state, payload) {
    if (payload != "") {
      payload.forEach(doc => {
        state.friendlist.push({ ...doc.data()
        });
      });
    } else state.friendlist = [];
  },

  setFriendAll(state, payload) {
    if (payload != "") {
      payload.forEach(doc => {
        if (doc.id != state.authUser.uid) {
          state.allfriend.push({ ...doc.data(),
            uid: doc.id
          });
        }
      });
    } else state.allfriend = [];
  },

  setFriendSearch(state, payload) {
    if (payload) state.allfriend.push(payload);else state.allfriend = [];
  },

  setCoin(state, payload) {
    state.authUser.coin = payload;
  },

  setCoinTeam(state, payload) {
    state.cointeam = payload;
  },

  setFalseLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      state.Lottery[i] = false;
    }
  },

  setLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      if (payload[i] == true) {
        state.Lottery[i] = true;
      }
    }
  },

  setLotteryAll(state, payload) {
    for (let i = 0; i < payload.lottery.length; i++) {
      state.Lottery[payload.lottery[i] - 1] = true;
    }
  },

  setBetSend(state, payload) {
    if (payload != "") {
      payload.docs.forEach(doc => {
        state.bet.betSend.push({ ...doc.data(),
          Betid: doc.id
        });
      });
    } else state.bet.betSend = [];
  },

  setBetGot(state, payload) {
    if (payload != "") {
      payload.docs.forEach(doc => {
        if (doc.data().accept == false) {
          state.bet.betGot.push({ ...doc.data(),
            Betid: doc.id
          });
        }
      });
    } else state.bet.betGot = [];
  },

  setBetAccept(state, payload) {
    if (payload != "") {
      // console.log(payload);
      payload.forEach(doc => {
        state.bet.betAccept.push({ ...doc.data(),
          Betid: doc.id
        });
      }); // console.log(state.bet.betAccept);
    } else state.bet.betAccept = [];
  },

  setBetResult(state, payload) {
    if (payload != "") {
      payload.forEach(doc => {
        state.bet.betResult.push({ ...doc.data(),
          Betid: doc.id
        });
      });
    } else state.bet.betResult = [];
  },

  setAccepted(state, payload) {
    const b = state.bet.betGot;
    const a = b.filter(x => {
      return x.Betid != payload.Betid;
    });
    state.bet.betAccept.push(payload);
    state.bet.betGot = a;
  },

  setCancel(state, payload) {
    const b = state.bet.betSend;
    const a = b.filter(x => {
      return x.Betid != payload.Betid;
    });
    state.bet.betSend = a;
  },

  setWinLose(state, payload) {
    const b = state.bet.betAccept;
    const a = b.filter(x => {
      return x.Betid != payload.Betid;
    });
    state.bet.betResult.push(payload);
    state.bet.betAccept = a;
  },

  setRefuse(state, payload) {
    const b = state.bet.betGot;
    const a = b.filter(x => {
      return x.Betid != payload.Betid;
    });
    state.bet.betGot = a;
  },

  setAllTeamCoin(state, payload) {
    if (payload != "") {
      payload.forEach(doc => {
        state.allteamcoin.push({ ...doc.data(),
          team: doc.id
        });
      });
    } else state.allteamcoin = [];
  },

  setTeamCoinStaff(state, payload) {
    state.allteamcoin[payload.index] = {
      coin: payload.coin,
      team: payload.team
    };
    console.log(state.allteamcoin);
  },

  setTest(state, payload) {
    state.allfriend[payload.index] = { ...state.allfriend[payload.index],
      selected: payload.value
    };
  },

  setMemberCoin(state, payload) {
    state.allfriend[payload.index] = { ...state.allfriend[payload.index],
      coin: payload.coinleft
    };
  },

  setGroup(state, payload) {
    if (payload.length > 0) {
      payload.forEach(element2 => {
        if (state.group.length > 0) {
          let x = state.allfriend.findIndex(each => each.uid == element2.uid);

          if (!state.group.includes(state.allfriend[x])) {
            state.group.push(state.allfriend[x]);
          }
        } else {
          let x = state.allfriend.findIndex(each => each.uid == element2.uid);
          state.group.push(state.allfriend[x]);
        }
      });
    } else {
      state.group = [];
    }
  },

  LoadGroup(state, payload) {
    let x = state.allfriend;

    for (let c in payload) {
      for (let g in x) {
        // console.log();
        if (x[g].uid == payload[c].uid) {
          state.group.push(x[g]);
        }
      }
    } // }

  },

  setDGroup(state, payload) {
    if (payload.length > 0) {
      state.group = [];
      payload.forEach(element2 => {
        if (state.group.length > 0) {
          let x = state.allfriend.findIndex(each => each.uid == element2.uid);

          if (!state.group.includes(state.allfriend[x])) {
            state.group.push(state.allfriend[x]);
          }
        } else {
          let x = state.allfriend.findIndex(each => each.uid == element2.uid);
          state.group.push(state.allfriend[x]);
        }
      });
    } else {
      state.group = [];
    }
  }

});

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(16);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(17);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./functions/.nuxt/middleware.js
const middleware = {};
middleware['isLogged'] = __webpack_require__(24);
middleware['isLogged'] = middleware['isLogged'].default || middleware['isLogged'];
middleware['login'] = __webpack_require__(25);
middleware['login'] = middleware['login'].default || middleware['login'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./functions/.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./functions/.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(18);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(13);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(3);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./functions/.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./functions/.nuxt/router.js





const _3faacb5e = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/index */ 1).then(__webpack_require__.bind(null, 105)));

const _61df97be = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 3).then(__webpack_require__.bind(null, 106)));

const _2dac0566 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/index */ 7).then(__webpack_require__.bind(null, 107)));

const _b26cd026 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/[_]id/index */ 6).then(__webpack_require__.bind(null, 101)));

const _2d0d2be6 = () => interopDefault(__webpack_require__.e(/* import() | pages/staff/[_]id/index */ 8).then(__webpack_require__.bind(null, 102)));

const _52ed8bd4 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/[_]id/bet/index */ 5).then(__webpack_require__.bind(null, 100)));

const _e147c1b6 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/[_]id/bet/_p2 */ 4).then(__webpack_require__.bind(null, 104)));

const _cf9016b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 103))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/admin",
    component: _3faacb5e,
    name: "admin"
  }, {
    path: "/login",
    component: _61df97be,
    name: "login"
  }, {
    path: "/member",
    component: _2dac0566,
    name: "member"
  }, {
    path: "/member/:id",
    component: _b26cd026,
    name: "member-id"
  }, {
    path: "/staff/:id?",
    component: _2d0d2be6,
    name: "staff-id"
  }, {
    path: "/member/:id/bet",
    component: _52ed8bd4,
    name: "member-id-bet"
  }, {
    path: "/member/:id/bet/:p2",
    component: _e147c1b6,
    name: "member-id-bet-p2"
  }, {
    path: "/",
    component: _cf9016b2,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./functions/.nuxt/components/nuxt-error.vue?vue&type=template&id=b50c335e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-error.vue?vue&type=template&id=b50c335e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./functions/.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "252cc649"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./functions/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "036b553d"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=f4acfb48&
var defaultvue_type_template_id_f4acfb48_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('div',{staticClass:"Nav"},[_c('b-navbar',{staticClass:"t",attrs:{"variant":"faded","type":"light"}},[_c('b-navbar-brand',{attrs:{"href":"/"}},[_c('img',{attrs:{"src":__webpack_require__(31),"width":"50px","heifgt":"50px","alt":"Kitten"}}),_vm._v(" "),_c('a',[_vm._v("PRE-FRESHY")]),_vm._v(" "),_c('a',[_vm._v("2020")])]),_vm._v(" "),_c('b-navbar-nav',[_c('ul',{staticClass:"ulNav"},[_c('li',[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("หน้าแรก")])],1),_vm._v(" "),(_vm.users)?_c('li',[((_vm.users.role == 'member'))?_c('nuxt-link',{attrs:{"to":{ name: 'member-id', params: { id: _vm.users.uid } }}},[_vm._v("หน้าใช้งาน")]):_vm._e(),_vm._v(" "),((_vm.users.role == 'staff'))?_c('nuxt-link',{attrs:{"to":{ name: 'staff-id', params: { id: _vm.users.uid } }}},[_vm._v("หน้าใช้งาน")]):_vm._e()],1):_vm._e()])]),_vm._v(" "),_c('b-navbar-nav',{staticClass:"ml-auto"},[(_vm.users)?_c('div',{staticClass:"navbar"},[_c('span',{staticStyle:{"padding":"10px"}},[_vm._v("สวัสดีคุณ "+_vm._s(_vm.users.name))]),_vm._v(" "),_c('b-button',{attrs:{"variant":"outline-danger"},on:{"click":_vm.signout}},[_vm._v("LOGOUT")])],1):_c('div',{staticClass:"navbar"},[_c('nuxt-link',{attrs:{"to":"/login"}},[_c('b-button',{staticClass:"login",attrs:{"variant":"outline-primary"}},[_vm._v("LOGIN")])],1)],1)])],1)],1)]),_vm._ssrNode(" "),_c('Nuxt')],2)}
var defaultvue_type_template_id_f4acfb48_staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=f4acfb48&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {
      user: ''
    };
  },

  asyncData(context) {},

  computed: {
    users() {
      return this.$store.getters.getUser;
    }

  },
  methods: {
    signout() {
      this.$store.dispatch('signout');
    }

  }
});
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_f4acfb48_render,
  defaultvue_type_template_id_f4acfb48_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "2f64a867"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default2.vue?vue&type=template&id=04b53714&
var default2vue_type_template_id_04b53714_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var default2vue_type_template_id_04b53714_staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default2.vue?vue&type=template&id=04b53714&

// CONCATENATED MODULE: ./src/layouts/default2.vue

var script = {}
function default2_injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default2_component = Object(componentNormalizer["a" /* default */])(
  script,
  default2vue_type_template_id_04b53714_render,
  default2vue_type_template_id_04b53714_staticRenderFns,
  false,
  default2_injectStyles,
  null,
  "856fe44a"
  
)

/* harmony default export */ var default2 = (default2_component.exports);
// CONCATENATED MODULE: ./functions/.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_default2": sanitizeComponent(default2)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./functions/.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(34), 'actions.js');
  resolveStoreModules(__webpack_require__(36), 'getters.js');
  resolveStoreModules(__webpack_require__(37), 'mutations.js');
  resolveStoreModules(__webpack_require__(12), 'state.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const storeModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(storeModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./functions/.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(19);

// CONCATENATED MODULE: ./functions/.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(15);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(20);

// CONCATENATED MODULE: ./functions/.nuxt/templates.plugin.a3398616.js



fontawesome_svg_core_["config"].autoAddCss = false;

fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"]);
external_vue_default.a.component('font-awesome-icon', vue_fontawesome_["FontAwesomeIcon"]);
external_vue_default.a.component('font-awesome-layers', vue_fontawesome_["FontAwesomeLayers"]);
external_vue_default.a.component('font-awesome-layers-text', vue_fontawesome_["FontAwesomeLayersText"]);
// EXTERNAL MODULE: external "firebase-admin"
var external_firebase_admin_ = __webpack_require__(11);
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_);

// CONCATENATED MODULE: ./functions/.nuxt/firebase-module/ssrAuth.js

const ssrAuth_config = {
  "apiKey": "AIzaSyAivWrPDOGnH1ZeahoKP8t_B1o-98k7yRU",
  "authDomain": "prefreshy-1d048.firebaseapp.com",
  "databaseURL": "https:\u002F\u002Fprefreshy-1d048.firebaseio.com",
  "projectId": "prefreshy-1d048",
  "storageBucket": "prefreshy-1d048.appspot.com",
  "messagingSenderId": "987834299834",
  "appId": "1:987834299834:web:4a7a4760436d164ade5983",
  "measurementId": "G-Z0P6SZ4HCN"
};

const simulateUserRecord = ({
  uid,
  email,
  email_verified: emailVerified,
  name: displayName
}) => ({
  uid,
  email,
  emailVerified,
  displayName
});

if (!external_firebase_admin_default.a.apps.length) {
  external_firebase_admin_default.a.initializeApp(ssrAuth_config);
}

/* harmony default export */ var ssrAuth = (async ({
  req,
  res
}) => {
  if (!req || !req.headers.authorization) {
    return;
  } // Parse the injected ID token from the request header.


  const authorizationHeader = req.headers.authorization || '';
  const components = authorizationHeader.split(' ');
  const idToken = components.length > 1 ? components[1] : '';

  try {
    // Try to verify the id token, additionally checking if the token was revoked
    const decodedToken = await external_firebase_admin_default.a.auth().verifyIdToken(idToken);

    if (decodedToken.uid) {
      const authUser = simulateUserRecord(decodedToken);
      res.locals = { ...res.locals,
        user: { ...authUser,
          allClaims: decodedToken,
          idToken
        }
      };
    }
  } catch (e) {
    console.error(e);
  }
});
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(2);

// CONCATENATED MODULE: ./functions/.nuxt/firebase-module/main.js

const main_config = {
  "apiKey": "AIzaSyAivWrPDOGnH1ZeahoKP8t_B1o-98k7yRU",
  "authDomain": "prefreshy-1d048.firebaseapp.com",
  "databaseURL": "https:\u002F\u002Fprefreshy-1d048.firebaseio.com",
  "projectId": "prefreshy-1d048",
  "storageBucket": "prefreshy-1d048.appspot.com",
  "messagingSenderId": "987834299834",
  "appId": "1:987834299834:web:4a7a4760436d164ade5983",
  "measurementId": "G-Z0P6SZ4HCN"
};
/* harmony default export */ var main = (async ({
  res
}, inject) => {
  if (!app_["apps"].length) {
    app_["initializeApp"](main_config);
  }

  const session = app_["apps"][0];
  /** --------------------------------------------------------------------------------------------- **/

  /** -------------------------------------- FIREBASE AUTH ---------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/

  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 40, 7));
  const fireAuth = session.auth();
  const fireAuthObj = app_["auth"];
  inject('fireAuth', fireAuth);
  inject('fireAuthObj', fireAuthObj);
  /** --------------------------------------------------------------------------------------------- **/

  /** ------------------------------------- FIREBASE FIRESTORE ------------------------------------ **/

  /** --------------------------------------------------------------------------------------------- **/

  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 41, 7));
  const fireStore = session.firestore();
  const fireStoreObj = app_["firestore"];
  inject('fireStore', fireStore);
  inject('fireStoreObj', fireStoreObj);
  /** --------------------------------------------------------------------------------------------- **/

  /** ------------------------------------ FIREBASE FUNCTIONS ------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/

  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 42, 7));
  const fireFunc = session.functions();
  const fireFuncObj = app_["functions"];
  inject('fireFunc', fireFunc);
  inject('fireFuncObj', fireFuncObj);
});
// EXTERNAL MODULE: ./functions/.nuxt/empty.js
var _nuxt_empty = __webpack_require__(38);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(21);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./functions/.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // baseURL
  const baseURL =  false ? undefined : process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./functions/.nuxt/index.js











/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\bootstrap-vue.js (mode: 'all')

 // Source: .\\templates.plugin.a3398616.js (mode: 'all')

 // Source: .\\firebase-module\\ssrAuth.js (mode: 'server')

 // Source: .\\firebase-module\\main.js (mode: 'all')

 // Source: .\\firebase-module\\initAuth.js (mode: 'client')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "title": "PREFRESHY-2020",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Fassets\u002F2.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./functions/.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./functions/.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./functions/.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./functions/.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./functions/.nuxt/templates.plugin.a3398616.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./functions/.nuxt/templates.plugin.a3398616.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if ( true && typeof ssrAuth === 'function') {
    await ssrAuth(app.context, inject);
  }

  if (typeof main === 'function') {
    await main(app.context, inject);
  }

  if (false) {}

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./functions/.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map