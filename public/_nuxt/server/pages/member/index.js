exports.ids = [7];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/index.vue?vue&type=template&id=fc4a4a28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/member/index.vue?vue&type=template&id=fc4a4a28&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var membervue_type_script_lang_js_ = ({
  async mounted() {
    var curuse = this.$store.getter.getUser;
    if (curuse) this.$router.push('/member' + curuse.uid);
  }

});
// CONCATENATED MODULE: ./src/pages/member/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_membervue_type_script_lang_js_ = (membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/member/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73d7af82"
  
)

/* harmony default export */ var member = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map