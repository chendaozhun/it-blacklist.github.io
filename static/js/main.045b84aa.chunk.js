(this["webpackJsonpsjz-it-blacklist"]=this["webpackJsonpsjz-it-blacklist"]||[]).push([[0],{337:function(t,e,n){},367:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(24),u=n.n(c),o=n(5),s=n(90),i=n(9),p=n(91),l=n(369),d=n(129),f=n(92),b=(n(337),[{path:"/",key:"home",component:Object(r.lazy)((function(){return n.e(6).then(n.bind(null,391))}))},{path:"/content",key:"content",component:Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,385))}))},{path:"/statement",key:"statement",component:Object(r.lazy)((function(){return n.e(4).then(n.bind(null,388))}))},{path:"/create",key:"create",component:Object(r.lazy)((function(){return n.e(7).then(n.bind(null,389))}))},{path:"/feedback",key:"feedback",component:Object(r.lazy)((function(){return n.e(8).then(n.bind(null,390))}))}]),h=n(50),j=n(19),y=function(){var t=Object(r.useReducer)(h.c,h.b),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(r.useEffect)((function(){var t=localStorage.getItem("$it-blacklist"),e=t?JSON.parse(t):{openid:Object(l.a)()};a({type:"userInfo/update",payload:e}),Object(f.d)().then((function(t){a({type:"noticeBar/update",payload:t[0].notice})}))}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(p.x,{content:"IT BLACKLIST",gapX:96,gapY:96}),Object(j.jsx)(h.a.Provider,{value:{state:n,dispatch:a},children:Object(j.jsx)(s.a,{children:Object(j.jsx)(d.AliveScope,{children:Object(j.jsx)(i.c,{children:b.map((function(t){return Object(j.jsx)(i.a,{path:t.path,element:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(j.Fragment,{children:"..."}),children:Object(j.jsx)(t.component,{})})},t.key)}))})})})})]})};u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=n(6),a=n(0),c={userInfo:null,cityList:[{value:"\u6cb3\u5317\u7701",label:"\u6cb3\u5317\u7701",children:[{value:"\u77f3\u5bb6\u5e84",label:"\u77f3\u5bb6\u5e84\u5e02"}]},{value:"\u5317\u4eac\u5e02",label:"\u5317\u4eac\u5e02",children:[{value:"\u5317\u4eac",label:"\u5e02\u8f96\u533a"}]}],noticeBar:null},u=function(t,e){switch(e.type){case"userInfo/update":return console.log(e,t),localStorage.setItem("$it-blacklist",JSON.stringify(e.payload)),Object(r.a)(Object(r.a)({},t),{},{userInfo:e.payload});case"noticeBar/update":return console.log(e,t),Object(r.a)(Object(r.a)({},t),{},{noticeBar:e.payload});default:return t}},o=Object(a.createContext)({state:c,dispatch:u})},92:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return m})),n.d(e,"d",(function(){return k}));var r=n(17),a=n(2),c=n.n(a),u=n(144),o=n.n(u).a.create({baseURL:"https://it-blacklist-a6de4b.service.tcloudbase.com/",timeout:2e4,validateStatus:function(t){return t>=200&&t<300}});o.interceptors.request.use((function(t){return t})),o.interceptors.response.use((function(t){var e,n=t.data;return null!==(e=n.data)&&void 0!==e?e:n}));var s=o;function i(t){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"list/get",data:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"list/update",data:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"list/count"}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"discuss/get",data:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"discuss/update",data:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"feedback/update",data:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s({method:"post",url:"system/get"}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}},[[367,1,2]]]);
//# sourceMappingURL=main.045b84aa.chunk.js.map