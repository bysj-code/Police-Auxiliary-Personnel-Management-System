(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"253a":function(t,n,e){"use strict";e.r(n);var i=e("fa22"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},"3e1d":function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}))},"4c72":function(t,n,e){"use strict";(function(t){e("838f"),e("921b");i(e("66fd"));var n=i(e("4d09"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4d09":function(t,n,e){"use strict";e.r(n);var i=e("3e1d"),u=e("253a");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("9b15");var a,s=e("f0c5"),o=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,"2b43bb94",null,!1,i["a"],a);n["default"]=o.exports},"9b15":function(t,n,e){"use strict";var i=e("af73"),u=e.n(i);u.a},af73:function(t,n,e){},fa22:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,u,r,a){try{var s=t[r](a),o=s.value}catch(c){return void e(c)}s.done?n(o):Promise.resolve(o).then(i,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(i,u){var a=t.apply(n,e);function s(t){r(a,i,u,s,o,"next",t)}function o(t){r(a,i,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{jingwuyuanxingbieOptions:[],jingwuyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=a(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],e=t.getStorageSync("loginTable"),this.tableName=e,"jingwuyuan"==this.tableName&&(this.jingwuyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jingwuyuanxingbieOptions[0]),this.styleChange();case 5:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{jingwuyuanxingbieChange:function(t){this.jingwuyuanxingbieIndex=t.target.value,this.ruleForm.xingbie=this.jingwuyuanxingbieOptions[this.jingwuyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.jingwuhao||"jingwuyuan"!=this.tableName){t.next=3;break}return this.$utils.msg("警务号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"jingwuyuan"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"jingwuyuan"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("jingwuyuan"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){t.next=12;break}return this.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 12:return t.next=14,this.$api.register("".concat(this.tableName),this.ruleForm);case 14:this.$utils.msgBack("注册成功");case 16:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};n.default=s}).call(this,e("543d")["default"])}},[["4c72","common/runtime","common/vendor"]]]);