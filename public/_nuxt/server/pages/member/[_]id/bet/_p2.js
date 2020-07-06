exports.ids = [4];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/_id/bet/_p2.vue?vue&type=template&id=0f09a828&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('b-card',{staticClass:"text-center",attrs:{"header":"รายชื่อเพื่อนทั้งหมด","header-bg-variant":"info"}},[_c('span',{staticClass:"textshow"},[_vm._v(_vm._s(_vm.friend[0] ? 'ต้องการท้า ' + _vm.friend[0].name : ' '))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"textshow"},[_vm._v(_vm._s(_vm.friend[0] ? 'มี ' + _vm.friend[0].coin + ' coin' : ' '))]),_vm._v(" "),_c('b-form',[_c('label',{attrs:{"for":"topic"}},[_vm._v("ต้องการจะท้าให้เพื่อนทำอะไร")]),_vm._v(" "),_c('b-input',{attrs:{"id":"topic","type":"text","placeholder":"สิ่งที่ต้องการจะท้า"},model:{value:(_vm.form.topic),callback:function ($$v) {_vm.$set(_vm.form, "topic", $$v)},expression:"form.topic"}}),_vm._v(" "),_c('label',{attrs:{"for":"coin"}},[_vm._v("มูลค่า")]),_vm._v(" "),_c('b-input',{attrs:{"id":"coin","min":"1","type":"number","max":_vm.more,"placeholder":"หัวข้อที่ต้องการจะท้า"},model:{value:(_vm.form.coin),callback:function ($$v) {_vm.$set(_vm.form, "coin", _vm._n($$v))},expression:"form.coin"}}),_vm._v(" "),(_vm.friend[0])?_c('div',{},[_c('b-button',{staticClass:"button",attrs:{"variant":"primary","disabled":_vm.isValid},on:{"click":_vm.betSend}},[_vm._v("ท้าไปเล้ย !")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":{ name: 'member-id-bet', params: { id: _vm.$route.params.id } }}},[_c('b-button',{staticClass:"button",attrs:{"variant":"danger"}},[_vm._v("ยกเลิก")])],1)],1):_vm._e(),_vm._v(" "),(this.coinleft < 1)?_c('p',{staticStyle:{"color":"red"}},[_vm._v("\n        * อย่างน้อยต้องมี 1 coin น้า :D\n      ")]):_vm._e(),_vm._v(" "),(
          this.friend[0]
            ? this.friend[0].coin <= 0
              ? true
              : false
            : false < 1
        )?_c('p',{staticStyle:{"color":"red"}},[_vm._v("\n        * อย่างน้อยเพื่อนต้องมี 1 coin นะ! :D\n      ")]):_vm._e(),_vm._v(" "),(_vm.isValid)?_c('p',{staticStyle:{"color":"red"}},[_vm._v("\n        * กรอกตามจำนวนเงินที่สามารถกรอกได้นะ ! :D\n      ")]):_vm._e()],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/member/_id/bet/_p2.vue?vue&type=template&id=0f09a828&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/_id/bet/_p2.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var _p2vue_type_script_lang_js_ = ({
  data() {
    return {
      form: {
        player1: this.$route.params.id,
        player2: this.$route.params.p2,
        accept: false,
        coin: 1,
        topic: '',
        winner: '',
        loser: ''
      },
      friend: [],
      coinleft: 0
    };
  },

  methods: {
    betSend() {
      this.$store.dispatch('createBet', { ...this.form,
        name1: this.users.name,
        name2: this.friend[0].name
      });
      this.$router.push('/member/' + this.$route.params.id + '/bet');
    }

  },
  computed: {
    more() {
      if (this.friend[0]) {
        if (this.coinleft > this.friend[0].coin) return this.friend[0].coin;else return this.coinleft;
      } else return this.coinleft;
    },

    isValid() {
      if (this.friend[0]) {
        if (this.form.coin > this.friend[0].coin || this.form.coin < 1 || this.form.coin > this.users.coin) return true;
      } else return false;
    },

    users() {
      return this.$store.getters.getUser;
    }

  },

  async mounted() {
    await this.$store.dispatch('getSearchMember', this.$route.params.p2);
    this.friend = this.$store.getters.getAllFriend;
    this.coinleft = this.$store.getters.getUser.coin;
  },

  beforeDestroy() {
    this.$store.commit('setFriendSearch', '');
  }

});
// CONCATENATED MODULE: ./src/pages/member/_id/bet/_p2.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_p2vue_type_script_lang_js_ = (_p2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/member/_id/bet/_p2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bet_p2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f09a828",
  "c9f999be"
  
)

/* harmony default export */ var _p2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_p2_vue_vue_type_style_index_0_id_0f09a828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=_p2.js.map