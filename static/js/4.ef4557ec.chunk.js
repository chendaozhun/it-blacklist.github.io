(this["webpackJsonpsjz-it-blacklist"]=this["webpackJsonpsjz-it-blacklist"]||[]).push([[4],{370:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",o="hour",a="day",u="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,o=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:a,D:h,h:o,m:s,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",O={};O[y]=g;var b=function(t){return t instanceof D},j=function(t,e,n){var i;if(!t)return y;if("string"==typeof t)O[t]&&(i=t),e&&(O[t]=e,i=t);else{var r=t.name;O[r]=t,i=r}return!n&&i&&(y=i),i||!n&&y},v=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=M;w.l=j,w.i=b,w.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function g(t){this.$L=j(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!(this.$d.toString()===d)},p.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return v(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<v(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!w.u(e)||e,l=w.p(t),d=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(a)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(l){case f:return i?d(1,0):d(31,11);case c:return i?d(1,g):d(0,g+1);case u:var y=this.$locale().weekStart||0,O=($<y?$+7:$)-y;return d(i?p-O:p+(6-O),g);case a:case h:return m(M+"Hours",0);case o:return m(M+"Minutes",1);case s:return m(M+"Seconds",2);case r:return m(M+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=w.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[a]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[u],m=u===a?this.$D+(e-this.$W):e;if(u===c||u===f){var $=this.clone().set(h,1);$.$d[d](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(i,l){var h,d=this;i=Number(i);var m=w.p(l),$=function(t){var e=v(d);return w.w(e.date(e.date()+Math.round(t*i)),d)};if(m===c)return this.set(c,this.$M+i);if(m===f)return this.set(f,this.$y+i);if(m===a)return $(1);if(m===u)return $(7);var g=(h={},h[s]=e,h[o]=n,h[r]=t,h)[m]||1,p=this.$d.getTime()+i*g;return w.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},f=function(t){return w.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,o,!0),A:h(s,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,d){var m,$=w.p(h),g=v(i),p=(g.utcOffset()-this.utcOffset())*e,M=this-g,y=w.m(this,g);return y=(m={},m[f]=y/12,m[c]=y,m[l]=y/3,m[u]=(M-p)/6048e5,m[a]=(M-p)/864e5,m[o]=M/n,m[s]=M/e,m[r]=M/t,m)[$]||M,d?y:w.a(y)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return O[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=j(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),S=D.prototype;return v.prototype=S,[["$ms",i],["$s",r],["$m",s],["$H",o],["$W",a],["$M",c],["$y",f],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t.$i||(t(e,D,v),t.$i=!0),v},v.locale=j,v.isDayjs=b,v.unix=function(t){return v(1e3*t)},v.en=O[y],v.Ls=O,v.p={},v}()},383:function(t,e,n){"use strict";var i=n(0);e.a=function(t){return i.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),i.createElement("title",null,"32430ABC-BBF4-4419-9688-83F66DA664E6@2x"),i.createElement("g",{id:"MessageFill-MessageFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"MessageFill-\u7f16\u7ec4"},i.createElement("rect",{id:"MessageFill-\u77e9\u5f62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),i.createElement("path",{d:"M24,5 C35.0454654,5 44,13.5065417 44,23.9999335 C44,34.3816935 35.234974,42.8187175 24.3517967,42.9970537 L24,42.999934 C20.5361038,43.0086689 17.1256565,42.1499296 14.0827434,40.5027329 L9.12272736,42.6506288 C8.20180797,43.0490167 7.13075643,42.6289802 6.73046083,41.7124519 C6.57362597,41.3533578 6.53805635,40.953324 6.6290919,40.5723965 L7.89727419,35.2705244 C5.44727043,32.1174388 4,28.2188348 4,23.999959 C4,13.5065671 12.9545346,5 24,5 Z M16.2500001,22 C15.2835003,22 14.5,22.7835045 14.5,23.75 C14.5,24.7164996 15.2835044,25.5 16.2499999,25.5 L16.2499999,25.5 C17.2164997,25.5 18,24.7164955 18,23.75 C18,22.7835004 17.2164956,22 16.2500001,22 L16.2500001,22 Z M32.2500001,22 C31.2835003,22 30.5,22.7835045 30.5,23.75 C30.5,24.7164996 31.2835044,25.5 32.2499999,25.5 L32.2499999,25.5 C33.2164997,25.5 34,24.7164955 34,23.75 C34,22.7835004 33.2164956,22 32.2500001,22 L32.2500001,22 Z M24.2500001,22 C23.2835003,22 22.5,22.7835045 22.5,23.75 C22.5,24.7164996 23.2835044,25.5 24.2499999,25.5 L24.2499999,25.5 C25.2164997,25.5 26,24.7164955 26,23.75 C26,22.7835004 25.2164956,22 24.2500001,22 L24.2500001,22 Z",id:"MessageFill-\u5f62\u72b6\u7ed3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}},384:function(t,e,n){t.exports={page_statement:"page_statement_ZTFfd",discuss_title:"discuss_title_vcNR1"}},388:function(t,e,n){"use strict";n.r(e);var i=n(6),r=n(5),s=n(0),o=n(91),a=n(383),u=n(9),c=n(90),l=n(92),f=n(384),h=n.n(f),d=n(370),m=n.n(d),$=n(50),g=n(19);e.default=function(){var t=Object(s.useContext)($.a).state,e=Object(u.f)(),n=t.noticeBar||{},f=Object(s.useState)([]),d=Object(r.a)(f,2),p=d[0],M=d[1],y=Object(s.useState)(!1),O=Object(r.a)(y,2),b=O[0],j=O[1],v=Object(s.useState)(!1),w=Object(r.a)(v,2),D=w[0],S=w[1],x=function(t){Object(l.a)({company:t,current:1,pageSize:100}).then((function(t){M(t),console.log(t)}))};Object(s.useEffect)((function(){n.title&&x(n.title)}),[n.title]);return n?Object(g.jsxs)("div",{className:h.a.page_statement,children:[Object(g.jsx)(o.q,{onBack:function(){e("/")}}),Object(g.jsx)(o.b,{title:n.title,bodyStyle:{fontSize:18},children:n.content}),Object(g.jsxs)("div",{className:h.a.discuss_title,children:[Object(g.jsx)(a.a,{}),"\u7cbe\u9009\u8bc4\u8bba"]}),Object(g.jsx)(o.n,{children:p.map((function(t){return Object(g.jsx)(o.n.Item,{children:Object(g.jsx)("div",{onClick:function(){return o.w.show("\u53d1\u8868\u65f6\u95f4:".concat(m()(t.createTime).format("YYYY-MM-DD HH:mm:ss")))},children:t.content})},t._id)}))}),Object(g.jsx)(o.i,{style:{marginTop:20},layout:"horizontal",footer:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(o.d,{checked:D,onChange:function(t){return S(t)},style:{"--icon-size":"18px","--font-size":"14px","--gap":"6px",marginBottom:8},children:["\u52fe\u9009\u4ee3\u8868\u5df2\u9605\u8bfb\u5e76\u540c\u610f",Object(g.jsx)(c.b,{to:"/statement",children:"\u76f8\u5173\u6761\u6b3e"})]}),Object(g.jsx)(o.a,{block:!0,type:"submit",color:"primary",loading:b,children:"\u63d0\u4ea4"})]}),onFinish:function(e){var r;r=e,D?o.p.confirm({content:"\u786e\u8ba4\u8981\u63d0\u4ea4\u5417\uff1f",onConfirm:function(){j(!0),Object(l.e)(Object(i.a)(Object(i.a)({},r),{},{userInfo:t.userInfo,company:n.title})).then((function(t){console.log(t),null!==t&&void 0!==t&&t.errcode?o.e.alert({content:"\u5185\u5bb9\u53ef\u80fd\u542b\u6709\u8fdd\u6cd5\u8fdd\u89c4\u5185\u5bb9",onConfirm:function(){}}):o.e.alert({content:"\u4fdd\u5b58\u6210\u529f",onConfirm:function(){x(n.title)}})})).finally((function(){j(!1)}))}}):o.e.alert({content:"\u8bf7\u5148\u52fe\u9009\u534f\u8bae",onConfirm:function(){}})},children:Object(g.jsx)(o.i.Item,{name:"content",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(g.jsx)(o.v,{placeholder:"\u6211\u8981\u8bc4\u8bba\u2026",maxLength:2e3,rows:4})})})]}):null}}}]);
//# sourceMappingURL=4.ef4557ec.chunk.js.map