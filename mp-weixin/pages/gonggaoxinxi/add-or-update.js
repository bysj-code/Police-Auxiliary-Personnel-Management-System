(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gonggaoxinxi/add-or-update"],{"2ff7":function(t,e,n){"use strict";n.r(e);var r=n("94ea"),i=n("8413");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ebd4");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"1f72ef52",null,!1,r["a"],o);e["default"]=c.exports},3562:function(t,e,n){},"803b":function(t,e,n){"use strict";(function(t){n("838f"),n("921b");r(n("66fd"));var e=r(n("2ff7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},8413:function(t,e,n){"use strict";n.r(e);var r=n("adec"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"94ea":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},adec:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,c,"next",t)}function c(t){a(o,r,i,u,c,"throw",t)}u(void 0)}))}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("ffd4"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{biaoti:"",tupian:"",gonggaoneirong:"",faburiqi:""},user:{},ro:{biaoti:!1,tupian:!1,gonggaoneirong:!1,faburiqi:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=o(r.default.mark((function e(n){var i,a,o,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=13;break}return this.ruleForm.id=n.id,e.next=11,this.$api.info("gonggaoxinxi",this.ruleForm.id);case 11:a=e.sent,this.ruleForm=a.data;case 13:if(!n.cross){e.next=36;break}o=t.getStorageSync("crossObj"),e.t0=r.default.keys(o);case 16:if((e.t1=e.t0()).done){e.next=36;break}if(u=e.t1.value,"biaoti"!=u){e.next=22;break}return this.ruleForm.biaoti=o[u],this.ro.biaoti=!0,e.abrupt("continue",16);case 22:if("tupian"!=u){e.next=26;break}return this.ruleForm.tupian=o[u],this.ro.tupian=!0,e.abrupt("continue",16);case 26:if("gonggaoneirong"!=u){e.next=30;break}return this.ruleForm.gonggaoneirong=o[u],this.ro.gonggaoneirong=!0,e.abrupt("continue",16);case 30:if("faburiqi"!=u){e.next=34;break}return this.ruleForm.faburiqi=o[u],this.ro.faburiqi=!0,e.abrupt("continue",16);case 34:e.next=16;break;case 36:this.styleChange();case 37:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(t){this.ruleForm.faburiqi=t.target.value,this.$forceUpdate()},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=o(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.id){t.next=5;break}return t.next=3,this.$api.update("gonggaoxinxi",this.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,this.$api.add("gonggaoxinxi",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])},ebd4:function(t,e,n){"use strict";var r=n("3562"),i=n.n(r);i.a}},[["803b","common/runtime","common/vendor"]]]);