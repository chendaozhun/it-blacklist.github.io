(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-index"],{"1e79":function(e,t,n){"use strict";n.r(t);var i=n("27c2"),a=n("9237");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("55b8");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"76a788a9",null,!1,i["a"],o);t["default"]=s.exports},"247d":function(e,t,n){var i=n("5d70");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("91cfef2c",i,!0,{sourceMap:!1,shadowMode:!1})},"27c2":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uIcon:n("f86b").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},r=[]},"55b8":function(e,t,n){"use strict";var i=n("247d"),a=n.n(i);a.a},"5b89":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uForm:n("aa8f").default,uFormItem:n("e0a3").default,uInput:n("d5da").default,uCheckbox:n("1e79").default,uButton:n("d9ad").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-padding-30"},[n("u-form",{ref:"uForm",attrs:{model:e.model,rules:e.rules,errorType:["toast"]}},[n("u-form-item",{attrs:{"label-width":"0",prop:"content"}},[n("u-input",{attrs:{type:"textarea",maxlength:"2000",border:!0,placeholder:"我要留言…"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1),n("v-uni-view",{staticClass:"agreement"},[n("u-checkbox",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}}),n("v-uni-view",{staticClass:"agreement-text"},[e._v("勾选代表已阅读并同意"),n("v-uni-navigator",{attrs:{url:"../statement/index"}},[e._v("相关条款")])],1)],1),n("u-button",{attrs:{loading:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)},r=[]},"5d70":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";.agreement[data-v-76a788a9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?40?% 0}.agreement .agreement-text[data-v-76a788a9]{display:-webkit-box;display:-webkit-flex;display:flex;padding-left:%?8?%;color:#909399}.agreement .agreement-text uni-navigator[data-v-76a788a9]{color:#2979ff}\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-76a788a9]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-76a788a9]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-76a788a9]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-76a788a9]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-76a788a9]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-76a788a9]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-76a788a9]{color:#c8c9cc!important}.u-checkbox__label[data-v-76a788a9]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-76a788a9]{color:#c8c9cc}',""]),e.exports=t},"74fe":function(e,t,n){"use strict";n.r(t);var i=n("b485"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},9237:function(e,t,n){"use strict";n.r(t);var i=n("a90d"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},a90d:function(e,t,n){"use strict";n("a15b"),n("d81d"),n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),(1==this.value||this.parent&&e<this.parent.max||!this.parent)&&(this.$emit("input",!this.value),this.emitEvent())}}};t.default=i},b485:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),r={content:[{required:!0,message:"请输入内容",trigger:"blur"}]},o={data:function(){return{model:{content:""},rules:r,check:!1,loading:!1}},onLoad:function(){},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{submit:function(){var e=this;this.$refs.uForm.validate((function(t){if(t){if(!e.check)return e.$u.toast("请勾选协议");e.confirmSubmit()}else console.log("验证失败")}))},confirmSubmit:function(){var t=this;uni.showModal({content:"是否确认提交",success:function(n){n.confirm&&(t.loading=!0,uni.showLoading({title:"提交中..."}),e.callFunction({name:"feedback",data:(0,a.default)((0,a.default)({},t.model),{},{createTime:(new Date).getTime()})}).then((function(e){uni.hideLoading(),uni.showModal({content:"提交成功",showCancel:!1,success:function(){uni.navigateBack()}})})).catch((function(e){uni.hideLoading(),uni.showModal({content:"提交失败",showCancel:!1}),t.loading=!1})))}})},checkboxChange:function(e){this.check=e.value}}};t.default=o}).call(this,n("a9ff")["default"])},d2ac:function(e,t,n){"use strict";n.r(t);var i=n("5b89"),a=n("74fe");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"29326272",null,!1,i["a"],o);t["default"]=s.exports}}]);