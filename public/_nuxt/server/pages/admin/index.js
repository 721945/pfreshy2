exports.ids = [1];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/index.vue?vue&type=template&id=3f968b32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('b-input',{attrs:{"type":"text"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}}),_vm._ssrNode(" "),_c('b-input',{attrs:{"type":"text"},model:{value:(_vm.form.sid),callback:function ($$v) {_vm.$set(_vm.form, "sid", $$v)},expression:"form.sid"}}),_vm._ssrNode(" <button>กดสิจ้ะ</button> <button>"+_vm._ssrEscape("=>"+_vm._s(_vm.uid))+"</button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/admin/index.vue?vue&type=template&id=3f968b32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  layout: 'default',

  data() {
    return {
      form: {
        name: 'ID',
        coin: 0,
        role: 'member',
        picture: "Don't have",
        sid: "620705010",
        team: 'a'
      },
      password: '123456',
      uid: '10'
    };
  },

  methods: {
    async addTodb() {
      alert('test');
      const B = this.uid;
      console.log(B);
      const memberRef = this.$fireStore.collection('member').doc(B);

      try {
        const Res = await memberRef.set(this.form);
        this.$router.push('/');
      } catch (e) {
        console.log(e.message);
        return;
      }
    },

    async createUSER() {
      try {
        const email = this.form.sid + '@pfreshy.com';
        await this.$fireAuth.createUserWithEmailAndPassword(email, this.password).then(user => {
          // console.log(user.user.uid)
          alert('kk');
          this.uid = user.user.uid; // this.addTodb()
        });
      } catch (e) {}
    }

  }
});
// CONCATENATED MODULE: ./src/pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/admin/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d2afaa6"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map