exports.ids = [2];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=1cd4bf82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container\" data-v-1cd4bf82><div class=\"textHeader\" data-v-1cd4bf82><h1 class=\"home-title\" data-v-1cd4bf82><span data-v-1cd4bf82>PREFRESHY</span> <span data-v-1cd4bf82>2020</span></h1></div></div> "),_c('teamcoin')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=1cd4bf82&scoped=true&

// EXTERNAL MODULE: ./src/components/teamcoin.vue + 4 modules
var teamcoin = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  components: {
    teamcoin: teamcoin["default"]
  }
});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cd4bf82",
  "a77d7c9a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Teamcoin: __webpack_require__(44).default})


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/teamcoin.vue?vue&type=template&id=681c6432&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (this.teamCoin.length>0)?_c('section',_vm._l((_vm.teamCoin),function(eachteam,index){return _vm._ssrNode("<div class=\"card card-x\" data-v-681c6432>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-681c6432>","</div>",[_vm._ssrNode("<div data-v-681c6432>","</div>",[(
            _vm.user != null ? (_vm.user.team == eachteam.team ? true : false) : false
          )?_c('font-awesome-icon',{staticClass:"text-danger",staticStyle:{"font-size":"50px","float":"left"},attrs:{"icon":"dollar-sign"}}):_c('font-awesome-icon',{staticClass:"text-info",staticStyle:{"font-size":"50px","float":"left"},attrs:{"icon":"dollar-sign"}}),_vm._ssrNode(" <div class=\"text-right\" data-v-681c6432>"+((
            _vm.user != null ? (_vm.user.team == eachteam.team ? true : false) : false
          )?("<h5 data-v-681c6432>"+_vm._ssrEscape("YOUR TEAM [ "+_vm._s(eachteam.team)+" ]")+"</h5>"):("<h5 data-v-681c6432>"+_vm._ssrEscape("TEAM "+_vm._s(eachteam.team))+"</h5>"))+" <h3 data-v-681c6432>"+_vm._ssrEscape(_vm._s(eachteam.coin))+"</h3></div>")],2)]),_vm._ssrNode(" "),(_vm.load == 4)?_vm._ssrNode("<div class=\"showcontent\" data-v-681c6432>","</div>",[(_vm.user != null ? (_vm.user.role == 'staff' || _vm.user.role == 'admin' ? true : false) : false)?_vm._ssrNode("<div class=\"card-footer\" data-v-681c6432>","</div>",[_vm._ssrNode("<form data-v-681c6432>","</form>",[_c('b-input-group',{attrs:{"size":"sm"}},[_c('b-input',{attrs:{"type":"number","placeholder":"จำนวน Coin ","min":"0"},model:{value:(_vm.formTeam[index]),callback:function ($$v) {_vm.$set(_vm.formTeam, index, $$v)},expression:"formTeam[index]"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{attrs:{"variant":"outline-secondary"},on:{"click":function($event){return _vm.AddTeamCoin(eachteam.team,index)}}},[_vm._v("ตกลง")])],1)],1)],1)]):_vm._e()]):_vm._e(),_vm._ssrNode(" "),(_vm.load == 5)?_vm._ssrNode("<div class=\"showcontent\" data-v-681c6432>","</div>",[(_vm.user != null ? (_vm.user.role == 'staff' || _vm.user.role == 'admin' ? true : false) : false)?_vm._ssrNode("<div class=\"card-footer\" data-v-681c6432>","</div>",[_vm._ssrNode("<form data-v-681c6432>","</form>",[_c('b-input-group',{attrs:{"size":"sm"}},[_c('b-input',{attrs:{"type":"number","placeholder":"จำนวน Coin ","min":"0"},model:{value:(_vm.formTeam[index]),callback:function ($$v) {_vm.$set(_vm.formTeam, index, $$v)},expression:"formTeam[index]"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{attrs:{"variant":"outline-secondary"},on:{"click":function($event){return _vm.DisTeamCoin(eachteam.team,index)}}},[_vm._v("ตกลง")])],1)],1)],1)]):_vm._e()]):_vm._e()],2)}),0):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/teamcoin.vue?vue&type=template&id=681c6432&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/teamcoin.vue?vue&type=script&lang=js&
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
/* harmony default export */ var teamcoinvue_type_script_lang_js_ = ({
  props: {
    load: Number
  },

  data() {
    return {
      formTeam: [],
      teamCoin: [],
      user: {},
      st: 0
    };
  },

  async mounted() {
    this.teamCoin = this.$store.getters.getAllTeamCoin;
    if (this.teamCoin.length == 0) await this.$store.dispatch('getAllTeamCoin');
    this.teamCoin = this.$store.getters.getAllTeamCoin;
    this.user = this.$store.getters.getUser;
  },

  computed: {
    users() {
      return this.user = this.$store.getters.getUser;
    },

    test() {
      return this.$store.getters.getAllTeamCoin;
    }

  },

  updated() {
    this.teamCoin = this.$store.getters.getAllTeamCoin;
  },

  beforeDestroy() {
    this.$store.commit('setAllTeamCoin', '');
  },

  methods: {
    async DisTeamCoin(team, int) {
      await this.$store.dispatch('discountCoinTeamStaff', {
        coin: this.formTeam[int],
        team: team,
        index: int
      });
      this.teamCoin = this.$store.getters.getAllTeamCoin;
      this.formTeam = [];
    },

    async AddTeamCoin(team, int) {
      await this.$store.dispatch('discountCoinTeamStaff', {
        coin: -this.formTeam[int],
        team: team,
        index: int
      });
      this.teamCoin = await this.$store.getters.getAllTeamCoin;
      this.formTeam = [];
    }

  }
});
// CONCATENATED MODULE: ./src/components/teamcoin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_teamcoinvue_type_script_lang_js_ = (teamcoinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/teamcoin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_teamcoinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "681c6432",
  "ddd26d26"
  
)

/* harmony default export */ var teamcoin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcoin_vue_vue_type_style_index_0_id_681c6432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cd4bf82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=index.js.map