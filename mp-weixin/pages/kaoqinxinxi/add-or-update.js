(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kaoqinxinxi/add-or-update"],{"124b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,r,u){try{var o=t[r](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(i,a)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var u=t.apply(n,e);function o(t){r(u,i,a,o,s,"next",t)}function s(t){r(u,i,a,o,s,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("ffd4"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{jingwuhao:"",xingming:"",touxiang:"",kaoqinzhuangtai:"",kaoqinriqi:"",beizhu:"",userid:""},kaoqinzhuangtaiOptions:[],kaoqinzhuangtaiIndex:0,user:{},ro:{jingwuhao:!1,xingming:!1,touxiang:!1,kaoqinzhuangtai:!1,kaoqinriqi:!1,beizhu:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(e){var a,r,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.getStorageSync("nowTable"),n.next=3,this.$api.session(a);case 3:if(r=n.sent,this.user=r.data,this.kaoqinzhuangtaiOptions="正常,迟到,早退,请假,旷工".split(","),this.ruleForm.userid=t.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!e.id){n.next=14;break}return this.ruleForm.id=e.id,n.next=12,this.$api.info("kaoqinxinxi",this.ruleForm.id);case 12:r=n.sent,this.ruleForm=r.data;case 14:if(!e.cross){n.next=49;break}u=t.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=49;break}if(o=n.t1.value,"jingwuhao"!=o){n.next=23;break}return this.ruleForm.jingwuhao=u[o],this.ro.jingwuhao=!0,n.abrupt("continue",17);case 23:if("xingming"!=o){n.next=27;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",17);case 27:if("touxiang"!=o){n.next=31;break}return this.ruleForm.touxiang=u[o],this.ro.touxiang=!0,n.abrupt("continue",17);case 31:if("kaoqinzhuangtai"!=o){n.next=35;break}return this.ruleForm.kaoqinzhuangtai=u[o],this.ro.kaoqinzhuangtai=!0,n.abrupt("continue",17);case 35:if("kaoqinriqi"!=o){n.next=39;break}return this.ruleForm.kaoqinriqi=u[o],this.ro.kaoqinriqi=!0,n.abrupt("continue",17);case 39:if("beizhu"!=o){n.next=43;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,n.abrupt("continue",17);case 43:if("userid"!=o){n.next=47;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,n.abrupt("continue",17);case 47:n.next=17;break;case 49:this.styleChange();case 50:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},kaoqinriqiChange:function(t){this.ruleForm.kaoqinriqi=t.target.value,this.$forceUpdate()},kaoqinzhuangtaiChange:function(t){this.kaoqinzhuangtaiIndex=t.target.value,this.ruleForm.kaoqinzhuangtai=this.kaoqinzhuangtaiOptions[this.kaoqinzhuangtaiIndex]},touxiangTap:function(){var t=this;this.$api.upload((function(n){t.ruleForm.touxiang=t.$base.url+"upload/"+n.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.userid){t.next=3;break}return this.$utils.msg("用户id不能为空"),t.abrupt("return");case 3:if(!this.ruleForm.id){t.next=8;break}return t.next=6,this.$api.update("kaoqinxinxi",this.ruleForm);case 6:t.next=10;break;case 8:return t.next=10,this.$api.add("kaoqinxinxi",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var n=new Date,e=n.getFullYear(),i=n.getMonth()+1,a=n.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(e,"-").concat(i,"-").concat(a)},toggleTab:function(t){this.$refs[t].show()}}};n.default=s}).call(this,e("543d")["default"])},"24c7":function(t,n,e){"use strict";e.r(n);var i=e("4db1"),a=e("cade");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("6b17");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"04fac4ce",null,!1,i["a"],u);n["default"]=s.exports},"4db1":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}))},"5ae0":function(t,n,e){},"6b17":function(t,n,e){"use strict";var i=e("5ae0"),a=e.n(i);a.a},"78c0":function(t,n,e){"use strict";(function(t){e("838f"),e("921b");i(e("66fd"));var n=i(e("24c7"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},cade:function(t,n,e){"use strict";e.r(n);var i=e("124b"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a}},[["78c0","common/runtime","common/vendor"]]]);