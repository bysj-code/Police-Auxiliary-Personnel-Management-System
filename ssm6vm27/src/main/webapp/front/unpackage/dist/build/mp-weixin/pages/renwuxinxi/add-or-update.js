(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/renwuxinxi/add-or-update"],{"114a":function(n,e,t){"use strict";t.r(e);var r=t("9481"),a=t("9f94");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("5888");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"5283d178",null,!1,r["a"],u);e["default"]=c.exports},"268f":function(n,e,t){"use strict";(function(n){t("c321");r(t("66fd"));var e=r(t("114a"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},5888:function(n,e,t){"use strict";var r=t("e339"),a=t.n(r);a.a},"84e4":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,r,a,i,u){try{var o=n[i](u),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var u=n.apply(e,t);function o(n){i(u,r,a,o,c,"next",n)}function c(n){i(u,r,a,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("a30c"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{jingwuhao:"",xingming:"",touxiang:"",renwuxiangqing:"",riqi:""},jingwuhaoOptions:[],jingwuhaoIndex:0,user:{},ro:{jingwuhao:!1,xingming:!1,touxiang:!1,renwuxiangqing:!1,riqi:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=n.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:return u=a.sent,t.user=u.data,a.next=7,t.$api.option("jingwuyuan","jingwuhao",{});case 7:if(u=a.sent,t.jingwuhaoOptions=u.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=17;break}return t.ruleForm.id=e.id,a.next=15,t.$api.info("renwuxinxi",t.ruleForm.id);case 15:u=a.sent,t.ruleForm=u.data;case 17:if(!e.cross){a.next=44;break}o=n.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 20:if((a.t1=a.t0()).done){a.next=44;break}if(c=a.t1.value,"jingwuhao"!=c){a.next=26;break}return t.ruleForm.jingwuhao=o[c],t.ro.jingwuhao=!0,a.abrupt("continue",20);case 26:if("xingming"!=c){a.next=30;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,a.abrupt("continue",20);case 30:if("touxiang"!=c){a.next=34;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,a.abrupt("continue",20);case 34:if("renwuxiangqing"!=c){a.next=38;break}return t.ruleForm.renwuxiangqing=o[c],t.ro.renwuxiangqing=!0,a.abrupt("continue",20);case 38:if("riqi"!=c){a.next=42;break}return t.ruleForm.riqi=o[c],t.ro.riqi=!0,a.abrupt("continue",20);case 42:a.next=20;break;case 44:t.styleChange();case 45:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jingwuhaoChange:function(n){var e=this;return u(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.jingwuhaoIndex=n.target.value,e.ruleForm.jingwuhao=e.jingwuhaoOptions[e.jingwuhaoIndex],t.next=4,e.$api.follow("jingwuyuan","jingwuhao",{columnValue:e.ruleForm.jingwuhao});case 4:a=t.sent,a.data.xingming&&(e.ruleForm.xingming=a.data.xingming);case 6:case"end":return t.stop()}}),t)})))()},riqiChange:function(n){this.ruleForm.riqi=n.target.value,this.$forceUpdate()},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.id){e.next=5;break}return e.next=3,n.$api.update("renwuxinxi",n.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,n.$api.add("renwuxinxi",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},9481:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"9f94":function(n,e,t){"use strict";t.r(e);var r=t("84e4"),a=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=a.a},e339:function(n,e,t){}},[["268f","common/runtime","common/vendor"]]]);