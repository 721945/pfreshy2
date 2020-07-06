exports.ids = [3];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login.vue?vue&type=template&id=a3fad6fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('Auth')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/login.vue?vue&type=template&id=a3fad6fa&scoped=true&

// EXTERNAL MODULE: ./src/components/Auth.vue + 4 modules
var Auth = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'defaultmember',
  middleware: 'login',
  components: {
    Auth: Auth["default"]
  }
});
// CONCATENATED MODULE: ./src/pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a3fad6fa",
  "75e8e4ca"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Auth: __webpack_require__(76).default})


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Auth.vue?vue&type=template&id=24238d78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"links\" data-v-24238d78>","</div>",[(!_vm.isLoggedIn)?_c('b-form',{model:{value:(_vm.formValid),callback:function ($$v) {_vm.formValid=$$v},expression:"formValid"}},[_c('div',{staticClass:"TextTop"},[_c('a',{attrs:{"align":"center"}},[_vm._v("LOGIN")])]),_vm._v(" "),_c('div',{staticClass:"formText"},[_c('label',{attrs:{"for":"username"}},[_vm._v("Username :")]),_vm._v(" "),_c('b-input',{staticClass:"in",attrs:{"id":"username","placeholder":"Email","type":"text","autocomplete":"username"},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}})],1),_vm._v(" "),_c('div',{staticClass:"formPass"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Password :")]),_vm._v(" "),_c('b-input',{attrs:{"id":"password","placeholder":"Password","type":"password","autocomplete":"current-password"},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}})],1),_vm._v(" "),_c('div',{staticClass:"formButton"},[_c('b-button',{staticClass:"butt",attrs:{"disabled":!_vm.formValid,"block":"","variant":"outline-dark"},on:{"click":function($event){return _vm.signInUser()}}},[_vm._v("LOGIN")])],1)]):_c('div',[_c('p',[_vm._v("You are logged in with "+_vm._s(_vm.authUser.name)+".")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"outline-primary"},on:{"click":_vm.logout}},[_vm._v("Logout")])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Auth.vue?vue&type=template&id=24238d78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Auth.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Authvue_type_script_lang_js_ = ({
  computed: {
    authUser() {
      return this.$store.state.authUser;
    },

    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }

  },

  fetch() {// INFO -> this.$fireAuth user etc. are accessible
    // INFO -> this.$store.state.authUser is accessible even on server-side
  },

  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    formValid: false
  }),
  methods: {
    async signInUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(this.formData.email + '@pfreshy.com', this.formData.password).then(() => {
          this.$router.push('/');
        });
      } catch (e) {
        alert('USERNAME / PASSWORD ไม่ถูกต้อง ');
      }
    },

    async logout() {
      try {
        await this.$fireAuth.signOut();
      } catch (e) {
        alert('เกิดข้อผิดพลาด');
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/Auth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Authvue_type_script_lang_js_ = (Authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Auth.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24238d78",
  "5117a172"
  
)

/* harmony default export */ var Auth = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_id_24238d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a3fad6fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=login.js.map