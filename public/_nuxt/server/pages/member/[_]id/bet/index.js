exports.ids = [5];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/_id/bet/index.vue?vue&type=template&id=45d8d771&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content1"},[_c('betMenu'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content2\" data-v-45d8d771>","</div>",[_c('b-card',{staticClass:"text-center",attrs:{"header":"รายชื่อเพื่อนทั้งหมด","header-bg-variant":"info"}},[_c('div',{staticClass:"overflow-auto"},[_c('b-input',{staticClass:"in",attrs:{"placeholder":"ค้นหาด้วยชื่อ"},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}),_vm._v(" "),_c('b-input',{staticClass:"in",attrs:{"placeholder":"ค้นหาด้วยเลขนักศึกษา"},model:{value:(_vm.search2),callback:function ($$v) {_vm.search2=$$v},expression:"search2"}}),_vm._v(" "),(this.listFilter.length > _vm.perPage)?_c('b-pagination',{attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"aria-controls":"my-table","align":"center"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_vm._v(" "),(this.listFilter.length > _vm.perPage)?_c('p',{staticClass:"mt-3"},[_vm._v("Current Page: "+_vm._s(_vm.currentPage))]):_vm._e(),_vm._v(" "),_c('b-table',{attrs:{"hober":"","id":"my-table","items":_vm.listFilter,"per-page":_vm.perPage,"current-page":_vm.currentPage,"fields":_vm.fields},scopedSlots:_vm._u([{key:"cell(uid)",fn:function(data){return [_c('nuxt-link',{attrs:{"to":{ name: 'member-id-bet-p2', params: { id: _vm.$route.params.id , p2:data.value}}}},[_c('b-button',{attrs:{"variant":"primary"}},[_vm._v("ท้า")])],1)]}}])})],1)])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/member/_id/bet/index.vue?vue&type=template&id=45d8d771&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/bet.vue?vue&type=template&id=2795545c&scoped=true&
var betvue_type_template_id_2795545c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('b-card',{staticClass:"text-center",attrs:{"header":"รายชื่อเพื่อนทั้งหมด","header-bg-variant":"secondary"}},[_c('div',{staticClass:"cover-button"},[_c('b-button',{staticClass:"buttonConfig",attrs:{"variant":"info"},on:{"click":function($event){return _vm.changeLoad(1)}}},[_vm._v("ดูที่ตัวเองท้า")]),_vm._v(" "),_c('b-button',{staticClass:"buttonConfig",attrs:{"variant":"warning"},on:{"click":function($event){return _vm.changeLoad(2)}}},[_vm._v("ดูคำท้าที่ได้รับ")]),_vm._v(" "),_c('b-button',{staticClass:"buttonConfig",attrs:{"variant":"danger"},on:{"click":function($event){return _vm.changeLoad(3)}}},[_vm._v("ดูคำท้าที่ยอมรับ")]),_vm._v(" "),_c('b-button',{staticClass:"buttonConfig",attrs:{"variant":"dark"},on:{"click":function($event){return _vm.changeLoad(4)}}},[_vm._v("ดูผลทั้งหมด")])],1),_vm._v(" "),_c('betSend',{attrs:{"load":_vm.load}}),_vm._v(" "),_c('betGot',{attrs:{"load":_vm.load}}),_vm._v(" "),_c('betAccept',{attrs:{"load":_vm.load}}),_vm._v(" "),_c('betResult',{attrs:{"load":_vm.load}})],1)],1)}
var betvue_type_template_id_2795545c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/member/bet/bet.vue?vue&type=template&id=2795545c&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betSend.vue?vue&type=template&id=57217559&
var betSendvue_type_template_id_57217559_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load == 1)?_c('div',{staticClass:"cont"},[_vm._ssrNode("<a class=\"text3\" style=\"font-size: 30px;\">คำท้าที่ได้ส่งไป !</a> "),(this.items.length > 0)?_vm._ssrNode("<div class=\"show-table\">","</div>",[(this.rows > this.perPage)?_c('b-pagination',{attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"aria-controls":"my-table","align":"center"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_vm._ssrNode(" "+((this.rows > this.perPage)?("<p class=\"mt-3\">"+_vm._ssrEscape("\n      Current Page: "+_vm._s(_vm.currentPage)+"\n    ")+"</p>"):"<!---->")+" "),_c('b-table',{attrs:{"hover":"","id":"my-table","items":_vm.items,"per-page":_vm.perPage,"current-page":_vm.currentPage,"fields":_vm.fields},on:{"row-clicked":_vm.showModal},scopedSlots:_vm._u([{key:"cell(uid)",fn:function(data){return [_c('nuxt-link',{attrs:{"to":{
            name: 'member-id-bet-p2',
            params: { id: _vm.$route.params.id, p2: data.value },
          }}},[_c('b-button',[_vm._v("ท้า")])],1)]}}],null,false,1288729361)})],2):_vm._ssrNode("<div class=\"show-content\">","</div>",[_vm._ssrNode("<a class=\"notext\">","</a>",[_c('b-alert',{attrs:{"show":"","variant":"warning"}},[_vm._v(" ไม่มีข้อมูล !")])],1)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-b","title":"ต้องการยกเลิกคำท้าหรือไม่ ?","centered":"","ok-title":"ตกลง","cancel-title":"ยกเลิก"},on:{"ok":_vm.cancel}},[_c('a',{staticClass:"text3"},[_vm._v(_vm._s('คำท้าคือ ' + _vm.bet.topic))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',[_vm._v(_vm._s('จำนวน : ' + _vm.bet.coin + ' coin'))]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.st != 0),expression:"st != 0"}]},[_vm._v("\n      "+_vm._s(_vm.test)+"\n    ")])])],2):_vm._e()}
var betSendvue_type_template_id_57217559_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/member/bet/betSend.vue?vue&type=template&id=57217559&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betSend.vue?vue&type=script&lang=js&
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
/* harmony default export */ var betSendvue_type_script_lang_js_ = ({
  props: {
    load: Number
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [{
        key: 'name1',
        label: 'คนท้า'
      }, {
        key: 'name2',
        label: 'คนได้รับคำท้า'
      }, {
        key: 'topic',
        label: 'หัวข้อที่ทำการท้า'
      }, {
        key: 'coin',
        label: 'มูลค่า',
        sortable: true
      }],
      bet: {},
      items: [],
      st: 0
    };
  },

  async mounted() {
    await this.$store.dispatch('LoadBetSend');
    this.items = this.$store.getters.getBetSend;
  },

  computed: {
    rows() {
      return this.items.length;
    },

    test() {
      return this.$store.getters.getBetSend;
    }

  },

  updated() {
    this.items = this.$store.getters.getBetSend;
  },

  methods: {
    cancel() {
      // alert('test')
      this.$store.dispatch('BetCancel', this.bet);
      this.$router.push('/member/' + this.$route.params.id + '/bet');
      this.items = this.$store.getters.getBetSend;
    },

    showModal(item) {
      this.bet = { ...item
      };
      this.$bvModal.show('modal-b');
    },

    nextPage() {
      if (this.currentPage * this.perPage < this.items.length) this.currentPage++;
      let x = this.load;
    },

    prePage() {
      if (this.currentPage > 1) this.currentPage--;
    }

  },

  beforeDestroy() {
    this.$store.commit('setBetSend', '');
  }

});
// CONCATENATED MODULE: ./src/components/member/bet/betSend.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_betSendvue_type_script_lang_js_ = (betSendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/member/bet/betSend.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bet_betSendvue_type_script_lang_js_,
  betSendvue_type_template_id_57217559_render,
  betSendvue_type_template_id_57217559_staticRenderFns,
  false,
  injectStyles,
  null,
  "57d74f2a"
  
)

/* harmony default export */ var betSend = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betGot.vue?vue&type=template&id=ffb3403a&scoped=true&
var betGotvue_type_template_id_ffb3403a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load == 2)?_c('div',{staticClass:"cont"},[_vm._ssrNode("<a class=\"text3\" style=\"font-size: 30px;\" data-v-ffb3403a>คำท้าที่ได้รับ !</a> "),(this.items.length > 0)?_vm._ssrNode("<div class=\"show-table\" data-v-ffb3403a>","</div>",[(this.rows > this.perPage)?_c('b-pagination',{attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"aria-controls":"my-table","align":"center"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_vm._ssrNode(" "+((this.rows > this.perPage)?("<p class=\"mt-3\" data-v-ffb3403a>"+_vm._ssrEscape("\n      Current Page: "+_vm._s(_vm.currentPage)+"\n    ")+"</p>"):"<!---->")+" "),_c('b-table',{attrs:{"hover":"","id":"my-table","items":_vm.items,"per-page":_vm.perPage,"current-page":_vm.currentPage,"fields":_vm.fields},on:{"row-clicked":_vm.showModal}})],2):_vm._ssrNode("<div class=\"show-content\" data-v-ffb3403a>","</div>",[_vm._ssrNode("<a class=\"notext\" data-v-ffb3403a>","</a>",[_c('b-alert',{attrs:{"show":"","variant":"warning"}},[_vm._v(" ไม่มีข้อมูล !")])],1)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-a","title":"ต้องการรับคำท้าหรือไม่ ?","centered":"","ok-title":"รับคำท้า","cancel-title":"ปฏิเสธคำท้า"},on:{"ok":_vm.accepted,"cancel":_vm.refuse}},[_c('a',{staticClass:"text3"},[_vm._v(_vm._s('คำท้าคือ ' + _vm.bet.topic))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',[_vm._v(_vm._s('จำนวน : ' + _vm.bet.coin + ' coin'))])]),_vm._ssrNode(" <a"+(_vm._ssrStyle(null,null, { display: (_vm.st != 0) ? '' : 'none' }))+" data-v-ffb3403a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.test)+"\n  ")+"</a>")],2):_vm._e()}
var betGotvue_type_template_id_ffb3403a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/member/bet/betGot.vue?vue&type=template&id=ffb3403a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betGot.vue?vue&type=script&lang=js&
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
/* harmony default export */ var betGotvue_type_script_lang_js_ = ({
  props: {
    load: Number
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [{
        key: 'name1',
        label: 'คนท้า'
      }, {
        key: 'name2',
        label: 'คนได้รับคำท้า'
      }, {
        key: 'topic',
        label: 'หัวข้อที่ทำการท้า'
      }, {
        key: 'coin',
        label: 'มูลค่า',
        sortable: true
      }],
      items: [],
      bet: {},
      st: 0
    };
  },

  async mounted() {
    await this.$store.dispatch('LoadBetGot');
    this.items = this.$store.getters.getBetGot;
  },

  computed: {
    rows() {
      return this.items.length;
    },

    test() {
      return this.$store.getters.getBetSend;
    }

  },

  updated() {
    this.items = this.$store.getters.getBetGot;
  },

  methods: {
    accepted() {
      this.$store.dispatch('BetAccept', this.bet); // this.$router.push('/member/'+ this.$route.params.id+'/bet')
    },

    refuse() {
      this.$store.dispatch('BetRefuse', this.bet);
    },

    showModal(item) {
      this.bet = { ...item
      };
      this.$bvModal.show('modal-a');
    },

    nextPage() {
      if (this.currentPage * this.perPage < this.items.length) this.currentPage++;
    },

    prePage() {
      if (this.currentPage > 1) this.currentPage--;
    }

  },

  beforeDestroy() {
    this.$store.commit('setBetGot', '');
  }

});
// CONCATENATED MODULE: ./src/components/member/bet/betGot.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_betGotvue_type_script_lang_js_ = (betGotvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/member/bet/betGot.vue



function betGot_injectStyles (context) {
  
  
}

/* normalize component */

var betGot_component = Object(componentNormalizer["a" /* default */])(
  bet_betGotvue_type_script_lang_js_,
  betGotvue_type_template_id_ffb3403a_scoped_true_render,
  betGotvue_type_template_id_ffb3403a_scoped_true_staticRenderFns,
  false,
  betGot_injectStyles,
  "ffb3403a",
  "93bf650e"
  
)

/* harmony default export */ var betGot = (betGot_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betAccept.vue?vue&type=template&id=10be9b7a&scoped=true&
var betAcceptvue_type_template_id_10be9b7a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load == 3)?_c('div',{staticClass:"cont"},[_vm._ssrNode("<a class=\"text3\" style=\"font-size: 30px;\" data-v-10be9b7a>คำท้าที่ยอมรับ !</a> "),(this.items.length > 0)?_vm._ssrNode("<div class=\"show-table\" data-v-10be9b7a>","</div>",[(this.rows > this.perPage)?_c('b-pagination',{attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"aria-controls":"my-table","align":"center"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_vm._ssrNode(" "+((this.rows > this.perPage)?("<p class=\"mt-3\" data-v-10be9b7a>"+_vm._ssrEscape("\n      Current Page: "+_vm._s(_vm.currentPage)+"\n    ")+"</p>"):"<!---->")+" "),_c('b-table',{attrs:{"hover":"","id":"my-table","items":_vm.items,"per-page":_vm.perPage,"current-page":_vm.currentPage,"fields":_vm.fields},on:{"row-clicked":_vm.showModal},scopedSlots:_vm._u([{key:"cell(status)",fn:function(data){return [(data.item.winner == _vm.users.uid || data.item.loser == _vm.users.uid)?_c('b',{staticClass:"text-warning"},[_vm._v("รอผลของอีกฝ่าย")]):(data.item.winner != '' || data.item.loser != '')?_c('b',{staticClass:"text-danger"},[_vm._v("รอผลจากคุณ")]):_c('b',{staticClass:"text-info"},[_vm._v("รอผลจากทั้งสองฝ่าย")])]}}],null,false,603676111)})],2):_vm._ssrNode("<div class=\"show-content\" data-v-10be9b7a>","</div>",[_vm._ssrNode("<a class=\"notext\" data-v-10be9b7a>","</a>",[_c('b-alert',{attrs:{"show":"","variant":"warning"}},[_vm._v(" ไม่มีข้อมูล !")])],1)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-c","title":"ได้เวลาหาผู้ชนะแล้ว !","centered":"","hide-footer":""}},[_c('div',{staticClass:"inmodal"},[_c('a',{staticClass:"text3"},[_vm._v(_vm._s('คำท้าคือ ' + _vm.bet.topic))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',[_vm._v(_vm._s('จำนวน : ' + _vm.bet.coin + ' coin'))])]),_vm._v(" "),_c('b-button',{staticClass:"buttons",attrs:{"variant":"warning"},on:{"click":_vm.Win}},[_vm._v("เราชนะ")]),_vm._v(" "),_c('b-button',{staticClass:"buttons",attrs:{"variant":"dark"},on:{"click":_vm.lose}},[_vm._v("เราแพ้")])],1),_vm._ssrNode(" <a"+(_vm._ssrStyle(null,null, { display: (_vm.st != 0) ? '' : 'none' }))+" data-v-10be9b7a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.test)+"\n  ")+"</a>")],2):_vm._e()}
var betAcceptvue_type_template_id_10be9b7a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/member/bet/betAccept.vue?vue&type=template&id=10be9b7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betAccept.vue?vue&type=script&lang=js&
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
/* harmony default export */ var betAcceptvue_type_script_lang_js_ = ({
  props: {
    load: Number
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [{
        key: 'name1',
        label: 'คนท้า'
      }, {
        key: 'name2',
        label: 'คนได้รับคำท้า'
      }, {
        key: 'topic',
        label: 'หัวข้อที่ทำการท้า'
      }, {
        key: 'coin',
        label: 'มูลค่า',
        sortable: true
      }, {
        key: 'status',
        label: 'สถานะ'
      }],
      bet: {},
      items: [],
      st: 0
    };
  },

  async mounted() {
    await this.$store.dispatch('LoadBetAccept');
    this.items = this.$store.getters.getBetAccept;
  },

  computed: {
    rows() {
      return this.items.length;
    },

    users() {
      return this.$store.getters.getUser;
    },

    test() {
      return this.$store.getters.getBetSend;
    }

  },
  methods: {
    Win() {
      this.$store.dispatch('BetWin', this.bet);
      this.$bvModal.hide('modal-c');
      this.items = this.$store.getters.getBetAccept;
    },

    lose() {
      this.$store.dispatch('BetLose', this.bet);
      this.$bvModal.hide('modal-c');
      this.items = this.$store.getters.getBetAccept;
    },

    cancel() {
      this.$store.dispatch('BetReport', this.bet);
    },

    showModal(item) {
      this.bet = { ...item
      };
      this.$bvModal.show('modal-c');
    },

    nextPage() {
      if (this.currentPage * this.perPage < this.items.length) this.currentPage++;
      let x = this.load;
    },

    prePage() {
      if (this.currentPage > 1) this.currentPage--;
    }

  },

  beforeDestroy() {
    this.$store.commit('setBetAccept', '');
  }

});
// CONCATENATED MODULE: ./src/components/member/bet/betAccept.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_betAcceptvue_type_script_lang_js_ = (betAcceptvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/member/bet/betAccept.vue



function betAccept_injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var betAccept_component = Object(componentNormalizer["a" /* default */])(
  bet_betAcceptvue_type_script_lang_js_,
  betAcceptvue_type_template_id_10be9b7a_scoped_true_render,
  betAcceptvue_type_template_id_10be9b7a_scoped_true_staticRenderFns,
  false,
  betAccept_injectStyles,
  "10be9b7a",
  "0d6bd1aa"
  
)

/* harmony default export */ var betAccept = (betAccept_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betResult.vue?vue&type=template&id=09ed26b0&
var betResultvue_type_template_id_09ed26b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load == 4)?_c('div',{staticClass:"cont"},[_vm._ssrNode("<a class=\"text3\" style=\"font-size: 30px;\">ผลทั้งหมด !</a> "),(this.items.length > 0)?_vm._ssrNode("<div class=\"show-table\">","</div>",[(this.rows > this.perPage)?_c('b-pagination',{attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"aria-controls":"my-table","align":"center"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_vm._ssrNode(" "+((this.rows > this.perPage)?("<p class=\"mt-3\">"+_vm._ssrEscape("Current Page: "+_vm._s(_vm.currentPage))+"</p>"):"<!---->")+" "),(this.items.length > 0)?_c('b-table',{attrs:{"id":"my-table","items":_vm.items,"per-page":_vm.perPage,"current-page":_vm.currentPage,"fields":_vm.fields},scopedSlots:_vm._u([{key:"cell(uid)",fn:function(data){return [_c('nuxt-link',{attrs:{"to":{
            name: 'member-id-bet-p2',
            params: { id: _vm.$route.params.id, p2: data.value },
          }}},[_c('b-button',[_vm._v("ท้า")])],1)]}},{key:"cell(winner)",fn:function(data){return [_c('span',[_vm._v(_vm._s(data.item.winner == data.item.player1 ? data.item.name1 : data.item.name2))])]}}],null,false,3470033516)}):_vm._e()],2):_vm._ssrNode("<div class=\"show-content\">","</div>",[_vm._ssrNode("<a class=\"notext\">","</a>",[_c('b-alert',{attrs:{"show":"","variant":"warning"}},[_vm._v("ไม่มีข้อมูล !")])],1)]),_vm._ssrNode(" <a"+(_vm._ssrStyle(null,null, { display: (_vm.st != 0) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.test))+"</a> <div class=\"testalert\"></div>")],2):_vm._e()}
var betResultvue_type_template_id_09ed26b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/member/bet/betResult.vue?vue&type=template&id=09ed26b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/betResult.vue?vue&type=script&lang=js&
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
/* harmony default export */ var betResultvue_type_script_lang_js_ = ({
  props: {
    load: Number
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [{
        key: 'name1',
        label: 'คนท้า'
      }, {
        key: 'name2',
        label: 'คนได้รับคำท้า'
      }, {
        key: 'topic',
        label: 'หัวข้อที่ทำการท้า'
      }, {
        key: 'coin',
        label: 'มูลค่า',
        sortable: true
      }, {
        key: 'winner',
        label: 'ผู้ชนะ'
      }],
      items: [],
      st: 0
    };
  },

  async mounted() {
    await this.$store.dispatch('LoadBetResult');
    this.items = this.$store.getters.getBetResult;
  },

  computed: {
    rows() {
      return this.items.length;
    },

    test() {
      return this.$store.getters.getBetSend;
    }

  },
  methods: {
    nextPage() {
      if (this.currentPage * this.perPage < this.items.length) this.currentPage++;
    },

    prePage() {
      if (this.currentPage > 1) this.currentPage--;
    }

  },

  beforeDestroy() {
    this.$store.commit('setBetResult', '');
  }

});
// CONCATENATED MODULE: ./src/components/member/bet/betResult.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_betResultvue_type_script_lang_js_ = (betResultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/member/bet/betResult.vue



function betResult_injectStyles (context) {
  
  
}

/* normalize component */

var betResult_component = Object(componentNormalizer["a" /* default */])(
  bet_betResultvue_type_script_lang_js_,
  betResultvue_type_template_id_09ed26b0_render,
  betResultvue_type_template_id_09ed26b0_staticRenderFns,
  false,
  betResult_injectStyles,
  null,
  "205697c0"
  
)

/* harmony default export */ var betResult = (betResult_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/member/bet/bet.vue?vue&type=script&lang=js&
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




/* harmony default export */ var betvue_type_script_lang_js_ = ({
  components: {
    betSend: betSend,
    betGot: betGot,
    betAccept: betAccept,
    betResult: betResult
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [{
        key: 'player1',
        label: 'คนท้า'
      }, {
        key: 'player2',
        label: 'คนได้รับคำท้า'
      }, {
        key: 'topic',
        label: 'หัวข้อที่ทำการท้า'
      }, {
        key: 'coin',
        label: 'มูลค่า',
        sortable: true
      }],
      items: [],
      load: 1
    };
  },

  methods: {
    changeLoad(X) {
      this.load = X;
    }

  }
});
// CONCATENATED MODULE: ./src/components/member/bet/bet.vue?vue&type=script&lang=js&
 /* harmony default export */ var bet_betvue_type_script_lang_js_ = (betvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/member/bet/bet.vue



function bet_injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(96)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var bet_component = Object(componentNormalizer["a" /* default */])(
  bet_betvue_type_script_lang_js_,
  betvue_type_template_id_2795545c_scoped_true_render,
  betvue_type_template_id_2795545c_scoped_true_staticRenderFns,
  false,
  bet_injectStyles,
  "2795545c",
  "0712137a"
  
)

/* harmony default export */ var bet = (bet_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/member/_id/bet/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _id_betvue_type_script_lang_js_ = ({
  components: {
    betMenu: bet
  },

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [{
        key: 'sid',
        label: 'รหัสนักศึกษา',
        sortable: true
      }, {
        key: 'name',
        label: 'ชื่อเล่น'
      }, {
        key: 'coin',
        label: 'Coin',
        sortable: true
      }, {
        key: 'uid',
        label: '*'
      }],
      items: [],
      search: '',
      search2: ''
    };
  },

  methods: {
    nextPage() {
      if (this.currentPage * this.perPage < this.listFilter.length) this.currentPage++;
    },

    prePage() {
      if (this.currentPage > 1) this.currentPage--;
    }

  },
  computed: {
    listFilter() {
      let text = this.search.trim();
      let text2 = this.search2.trim();
      return this.items.filter(item => {
        return item.name.includes(text) && item.sid.includes(text2);
      });
    },

    rows() {
      return this.listFilter.length;
    }

  },

  async mounted() {
    await this.$store.dispatch('getAllMember');
    this.items = this.$store.getters.getAllFriend;
  },

  beforeDestroy() {
    this.$store.commit('setFriendAll', '');
    this.$store.commit('setBetSend', '');
  }

});
// CONCATENATED MODULE: ./src/pages/member/_id/bet/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_id_betvue_type_script_lang_js_ = (_id_betvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/member/_id/bet/index.vue



function _id_bet_injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_bet_component = Object(componentNormalizer["a" /* default */])(
  member_id_betvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_bet_injectStyles,
  "45d8d771",
  "d68981dc"
  
)

/* harmony default export */ var _id_bet = __webpack_exports__["default"] = (_id_bet_component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betAccept_vue_vue_type_style_index_0_id_10be9b7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bet_vue_vue_type_style_index_1_id_2795545c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45d8d771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=index.js.map