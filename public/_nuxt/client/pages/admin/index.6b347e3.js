(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{303:function(e,t,r){"use strict";r.r(t);r(37);var n=r(9),o={layout:"default",data:function(){return{form:{name:"ID",coin:0,role:"member",picture:"Don't have",sid:"620705010",team:"a"},password:"123456",uid:"10"}},methods:{addTodb:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return alert("test"),r=e.uid,console.log(r),n=e.$fireStore.collection("member").doc(r),t.prev=4,t.next=7,n.set(e.form);case 7:t.sent,e.$router.push("/"),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(4),console.log(t.t0.message),t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()},createUSER:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.form.sid+"@pfreshy.com",t.next=4,e.$fireAuth.createUserWithEmailAndPassword(r,e.password).then((function(t){alert("kk"),e.uid=t.user.uid}));case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},c=r(36),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("b-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("b-input",{attrs:{type:"text"},model:{value:e.form.sid,callback:function(t){e.$set(e.form,"sid",t)},expression:"form.sid"}}),e._v(" "),r("button",{on:{click:e.createUSER}},[e._v("กดสิจ้ะ")]),e._v(" "),r("button",{on:{click:e.addTodb}},[e._v("=>"+e._s(e.uid))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);