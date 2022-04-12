import{m as tt,d as et,a as b,w as st,R as w,j as C,f as _t,b as vt}from"./index.b35fedd9.js";import{c as yt,d as bt,e as wt,u as Et,w as St,M as It,a as Tt,r as kt}from"./index.e0eaf871.js";import{C as At}from"./CloseCircleFill.aff7b301.js";import{a as xt}from"./index.9d91e62d.js";const R="adm-popup",Pt={position:"bottom",visible:!1,getContainer:()=>document.body,mask:!0,stopPropagation:["click"]},Ct=s=>{const t=tt(Pt,s),e=et(`${R}-body`,t.bodyClassName,`${R}-body-position-${t.position}`),i=b.exports.useRef(null),[n,o]=b.exports.useState(t.visible);yt(i,n);const c=bt(n,t.forceRender,t.destroyOnClose),a=wt(),{percent:l}=Et({percent:t.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onStart:()=>{o(!0)},onRest:()=>{var r,u;a.current||(o(t.visible),t.visible?(r=t.afterShow)===null||r===void 0||r.call(t):(u=t.afterClose)===null||u===void 0||u.call(t))}}),f=St(t.stopPropagation,st(t,w.createElement("div",{className:R,onClick:t.onClick,style:{display:n?"unset":"none"}},t.mask&&C(It,{visible:t.visible,onMaskClick:t.onMaskClick,className:t.maskClassName,style:t.maskStyle,disableBodyScroll:!1,stopPropagation:t.stopPropagation}),w.createElement(Tt.div,{className:e,style:Object.assign(Object.assign({},t.bodyStyle),{transform:l.to(r=>t.position==="bottom"?`translate(0, ${r}%)`:t.position==="top"?`translate(0, -${r}%)`:t.position==="left"?`translate(-${r}%, 0)`:t.position==="right"?`translate(${r}%, 0)`:"none")}),ref:i},c&&t.children))));return kt(t.getContainer,f)};var Ce=Ct;function it(s,t,e){let i=s;return t!==void 0&&(i=Math.max(s,t)),e!==void 0&&(i=Math.min(i,e)),i}function Dt(s,t,e){return Math.max(t,Math.min(s,e))}const d={toVector(s,t){return s===void 0&&(s=t),Array.isArray(s)?s:[s,s]},add(s,t){return[s[0]+t[0],s[1]+t[1]]},sub(s,t){return[s[0]-t[0],s[1]-t[1]]},addTo(s,t){s[0]+=t[0],s[1]+=t[1]},subTo(s,t){s[0]-=t[0],s[1]-=t[1]}};function B(s,t,e){return t===0||Math.abs(t)===1/0?Math.pow(s,e*5):s*t*e/(t+e*s)}function U(s,t,e,i=.15){return i===0?Dt(s,t,e):s<t?-B(t-s,e-t,i)+t:s>e?+B(s-e,e-t,i)+e:s}function Ot(s,[t,e],[i,n]){const[[o,c],[a,l]]=s;return[U(t,o,c,i),U(e,a,l,n)]}function p(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function N(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,i)}return e}function h(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?N(Object(e),!0).forEach(function(i){p(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}const nt={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function $(s){return s?s[0].toUpperCase()+s.slice(1):""}function Mt(s,t="",e=!1){const i=nt[s],n=i&&i[t]||t;return"on"+$(s)+$(n)+(e?"Capture":"")}const Lt=["gotpointercapture","lostpointercapture"];function Rt(s){let t=s.substring(2).toLowerCase();const e=!!~t.indexOf("passive");e&&(t=t.replace("passive",""));const i=Lt.includes(t)?"capturecapture":"capture",n=!!~t.indexOf(i);return n&&(t=t.replace("capture","")),{device:t,capture:n,passive:e}}function Kt(s,t=""){const e=nt[s],i=e&&e[t]||t;return s+i}function M(s){return"touches"in s}function rt(s){return M(s)?"touch":"pointerType"in s?s.pointerType:"mouse"}function Vt(s){return Array.from(s.touches).filter(t=>{var e,i;return t.target===s.currentTarget||((e=s.currentTarget)===null||e===void 0||(i=e.contains)===null||i===void 0?void 0:i.call(e,t.target))})}function Ht(s){return s.type==="touchend"||s.type==="touchcancel"?s.changedTouches:s.targetTouches}function ot(s){return M(s)?Ht(s)[0]:s}function V(s,t){const e=t.clientX-s.clientX,i=t.clientY-s.clientY,n=(t.clientX+s.clientX)/2,o=(t.clientY+s.clientY)/2,c=Math.hypot(e,i);return{angle:-(Math.atan2(e,i)*180)/Math.PI,distance:c,origin:[n,o]}}function jt(s){return Vt(s).map(t=>t.identifier)}function Y(s,t){const[e,i]=Array.from(s.touches).filter(n=>t.includes(n.identifier));return V(e,i)}function K(s){const t=ot(s);return M(s)?t.identifier:t.pointerId}function G(s){const t=ot(s);return[t.clientX,t.clientY]}const X=40,z=800;function Bt(s){let{deltaX:t,deltaY:e,deltaMode:i}=s;return i===1?(t*=X,e*=X):i===2&&(t*=z,e*=z),[t,e]}function Ut(s){const t={};if("buttons"in s&&(t.buttons=s.buttons),"shiftKey"in s){const{shiftKey:e,altKey:i,metaKey:n,ctrlKey:o}=s;Object.assign(t,{shiftKey:e,altKey:i,metaKey:n,ctrlKey:o})}return t}function O(s,...t){return typeof s=="function"?s(...t):s}function Nt(){}function $t(...s){return s.length===0?Nt:s.length===1?s[0]:function(){let t;for(const e of s)t=e.apply(this,arguments)||t;return t}}function W(s,t){return Object.assign({},t,s||{})}const Yt=32;class at{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:i,args:n}=this;e[i]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=n,t.axis=void 0,t.memo=void 0,t.elapsedTime=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=i.from?O(i.from,e):e.offset,e.offset=e.lastOffset),e.startTime=e.timeStamp=t.timeStamp}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:i,shared:n}=this;e.args=this.args;let o=0;if(t&&(e.event=t,i.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,n.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,n.locked=!!document.pointerLockElement,Object.assign(n,Ut(t)),n.down=n.pressed=n.buttons%2===1||n.touches>0,o=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const _=e._delta.map(Math.abs);d.addTo(e._distance,_)}this.axisIntent&&this.axisIntent(t);const[c,a]=e._movement,[l,f]=i.threshold,{_step:r,values:u}=e;if(i.hasCustomTransform?(r[0]===!1&&(r[0]=Math.abs(c)>=l&&u[0]),r[1]===!1&&(r[1]=Math.abs(a)>=f&&u[1])):(r[0]===!1&&(r[0]=Math.abs(c)>=l&&Math.sign(c)*l),r[1]===!1&&(r[1]=Math.abs(a)>=f&&Math.sign(a)*f)),e.intentional=r[0]!==!1||r[1]!==!1,!e.intentional)return;const m=[0,0];if(i.hasCustomTransform){const[_,gt]=u;m[0]=r[0]!==!1?_-r[0]:0,m[1]=r[1]!==!1?gt-r[1]:0}else m[0]=r[0]!==!1?c-r[0]:0,m[1]=r[1]!==!1?a-r[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(m);const I=e.offset,T=e._active&&!e._blocked||e.active;T&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=n[this.ingKey]=e._active,t&&(e.first&&("bounds"in i&&(e._bounds=O(i.bounds,e)),this.setup&&this.setup()),e.movement=m,this.computeOffset()));const[k,A]=e.offset,[[L,ht],[dt,pt]]=e._bounds;e.overflow=[k<L?-1:k>ht?1:0,A<dt?-1:A>pt?1:0],e._movementBound[0]=e.overflow[0]?e._movementBound[0]===!1?e._movement[0]:e._movementBound[0]:!1,e._movementBound[1]=e.overflow[1]?e._movementBound[1]===!1?e._movement[1]:e._movementBound[1]:!1;const mt=e._active?i.rubberband||[0,0]:[0,0];if(e.offset=Ot(e._bounds,e.offset,mt),e.delta=d.sub(e.offset,I),this.computeMovement(),T&&(!e.last||o>Yt)){e.delta=d.sub(e.offset,I);const _=e.delta.map(Math.abs);d.addTo(e.distance,_),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&o>0&&(e.velocity=[_[0]/o,_[1]/o])}}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const n=this.handler(h(h(h({},e),t),{},{[this.aliasKey]:t.values}));n!==void 0&&(t.memo=n)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Gt([s,t],e){const i=Math.abs(s),n=Math.abs(t);if(i>n&&i>e)return"x";if(n>i&&n>e)return"y"}class Xt extends at{constructor(...t){super(...t),p(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=d.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=d.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,i=this.config;if(!e.axis&&t){const n=typeof i.axisThreshold=="object"?i.axisThreshold[rt(t)]:i.axisThreshold;e.axis=Gt(e._movement,n)}e._blocked=(i.lockDirection||!!i.axis)&&!e.axis||!!i.axis&&i.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const zt=s=>s,F=.15,ct={enabled(s=!0){return s},preventDefault(s=!1){return s},triggerAllEvents(s=!1){return s},rubberband(s=0){switch(s){case!0:return[F,F];case!1:return[0,0];default:return d.toVector(s)}},from(s){if(typeof s=="function")return s;if(s!=null)return d.toVector(s)},transform(s,t,e){const i=s||e.shared.transform;return this.hasCustomTransform=!!i,i||zt},threshold(s){return d.toVector(s,0)}},Wt=0,E=h(h({},ct),{},{axis(s,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},axisThreshold(s=Wt){return s},bounds(s={}){if(typeof s=="function")return o=>E.bounds(s(o));if("current"in s)return()=>s.current;if(typeof HTMLElement=="function"&&s instanceof HTMLElement)return s;const{left:t=-1/0,right:e=1/0,top:i=-1/0,bottom:n=1/0}=s;return[[t,e],[i,n]]}}),x=10,q={ArrowRight:(s=1)=>[x*s,0],ArrowLeft:(s=1)=>[-x*s,0],ArrowUp:(s=1)=>[0,-x*s],ArrowDown:(s=1)=>[0,x*s]};class Ft extends Xt{constructor(...t){super(...t),p(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),n={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=E.bounds(n)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,i=this.state;t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons)||(this.ctrl.setEventIds(t),e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!i._pointerActive&&(this.start(t),this.setupPointer(t),i._pointerId=K(t),i._pointerActive=!0,this.computeValues(G(t)),this.computeInitial(),e.preventScrollAxis&&rt(t)!=="mouse"?(i._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t)))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,i=this.config;if(!e._pointerActive||e.type===t.type&&t.timeStamp===e.timeStamp)return;const n=K(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;const o=G(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=d.sub(o,e._values),this.computeValues(o)),d.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(i.preventScrollAxis&&!e._preventScroll)if(e.axis)if(e.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const e=this.state,i=this.config;if(!e._active||!e._pointerActive)return;const n=K(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[o,c]=e._distance;if(e.tap=o<=i.tapsThreshold&&c<=i.tapsThreshold,e.tap&&i.filterTaps)e._force=!0;else{const[a,l]=e.direction,[f,r]=e.velocity,[u,m]=e.movement,[I,T]=i.swipe.velocity,[k,A]=i.swipe.distance,L=i.swipe.duration;e.elapsedTime<L&&(Math.abs(f)>I&&Math.abs(u)>k&&(e.swipe[0]=a),Math.abs(r)>T&&Math.abs(m)>A&&(e.swipe[1]=l))}this.emit()}pointerClick(t){this.state.tap||(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,i=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){qt(t),this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","end",this.clean.bind(this)),this.eventStore.add(this.sharedConfig.window,"touch","cancel",this.clean.bind(this)),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const e=q[t.key];if(e){const i=this.state,n=t.shiftKey?10:t.altKey?.1:1;i._delta=e(n),this.start(t),i._keyboardActive=!0,d.addTo(i._movement,i._delta),this.compute(t),this.emit()}}keyUp(t){t.key in q&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this)),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function qt(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}const S=typeof window!="undefined"&&window.document&&window.document.createElement;function Jt(){return S&&"ontouchstart"in window}function J(){return Jt()||S&&window.navigator.maxTouchPoints>1}function Qt(){return S&&"onpointerdown"in window}function Zt(){return S&&"exitPointerLock"in window.document}function te(){try{return"constructor"in GestureEvent}catch{return!1}}const g={isBrowser:S,gesture:te(),touch:J(),touchscreen:J(),pointer:Qt(),pointerLock:Zt()},ee=250,se=180,ie=.5,ne=50,re=250,Q={mouse:0,touch:0,pen:8},oe=h(h({},E),{},{device(s,t,{pointer:{touch:e=!1,lock:i=!1,mouse:n=!1}={}}){return this.pointerLock=i&&g.pointerLock,g.touch&&e?"touch":this.pointerLock?"mouse":g.pointer&&!n?"pointer":g.touch?"touch":"mouse"},preventScrollAxis(s,t,{preventScroll:e}){if(this.preventScrollDelay=typeof e=="number"?e:e||e===void 0&&s?ee:void 0,!(!g.touchscreen||e===!1))return s||(e!==void 0?"y":void 0)},pointerCapture(s,t,{pointer:{capture:e=!0,buttons:i=1}={}}){return this.pointerButtons=i,!this.pointerLock&&this.device==="pointer"&&e},threshold(s,t,{filterTaps:e=!1,tapsThreshold:i=3,axis:n=void 0}){const o=d.toVector(s,e?i:n?1:0);return this.filterTaps=e,this.tapsThreshold=i,o},swipe({velocity:s=ie,distance:t=ne,duration:e=re}={}){return{velocity:this.transform(d.toVector(s)),distance:this.transform(d.toVector(t)),duration:e}},delay(s=0){switch(s){case!0:return se;case!1:return 0;default:return s}},axisThreshold(s){return s?h(h({},Q),s):Q}}),ae=30,ce=100;class ue extends at{constructor(...t){super(...t),p(this,"ingKey","pinching"),p(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:e,lastOffset:i}=this.state;t==="wheel"?this.state.offset=d.add(e,i):this.state.offset=[(1+e[0])*i[0],e[1]+i[1]]}computeMovement(){const{offset:t,lastOffset:e}=this.state;this.state.movement=[t[0]/e[0],t[1]-e[1]]}axisIntent(){const t=this.state,[e,i]=t._movement;if(!t.axis){const n=Math.abs(e)*ae-Math.abs(i);n<0?t.axis="angle":n>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const e=this.state,i=this.ctrl.touchIds;if(e._active&&e._touchIds.every(o=>i.has(o))||i.size<2)return;this.start(t),e._touchIds=Array.from(i).slice(0,2);const n=Y(t,e._touchIds);this.pinchStart(t,n)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const e=this.state,i=e._pointerEvents,n=this.ctrl.pointerIds;if(e._active&&Array.from(i.keys()).every(c=>n.has(c))||(i.size<2&&i.set(t.pointerId,t),e._pointerEvents.size<2))return;this.start(t);const o=V(...Array.from(i.values()));this.pinchStart(t,o)}pinchStart(t,e){const i=this.state;i.origin=e.origin,this.computeValues([e.distance,e.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const e=Y(t,this.state._touchIds);this.pinchMove(t,e)}pointerMove(t){const e=this.state._pointerEvents;if(e.has(t.pointerId)&&e.set(t.pointerId,t),!this.state._active)return;const i=V(...Array.from(e.values()));this.pinchMove(t,i)}pinchMove(t,e){const i=this.state,n=i._values[1],o=e.angle-n;let c=0;Math.abs(o)>270&&(c+=Math.sign(o)),this.computeValues([e.distance,e.angle-360*c]),i.origin=e.origin,i.turns=c,i._movement=[i._values[0]/i._initial[0]-1,i._values[1]-i._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),!!this.state._active&&this.state._touchIds.some(e=>!this.ctrl.touchIds.has(e))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const e=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}e._pointerEvents.has(t.pointerId)&&e._pointerEvents.delete(t.pointerId),!!e._active&&e._pointerEvents.size<2&&(e._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const e=this.state;e._active||(this.start(t),this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const e=this.state;this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY];const i=e._movement;e._movement=[t.scale-1,t.rotation],e._delta=d.sub(e._movement,i),this.compute(t),this.emit()}gestureEnd(t){!this.state._active||(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const e=this.config.modifierKey;e&&!t[e]||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const i=this.state;i._delta=[-Bt(t)[1]/ce*i.offset[0],0],d.addTo(i._movement,i._delta),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){!this.state._active||(this.state._active=!1,this.compute(),this.emit())}bind(t){const e=this.config.device;e?(t(e,"start",this[e+"Start"].bind(this)),t(e,"change",this[e+"Move"].bind(this)),t(e,"end",this[e+"End"].bind(this)),t(e,"cancel",this[e+"End"].bind(this))):t("wheel","",this.wheel.bind(this),{passive:!1})}}const le=h(h({},ct),{},{device(s,t,{shared:e,pointer:{touch:i=!1}={}}){if(e.target&&!g.touch&&g.gesture)return"gesture";if(g.touch&&i)return"touch";if(g.touchscreen){if(g.pointer)return"pointer";if(g.touch)return"touch"}},bounds(s,t,{scaleBounds:e={},angleBounds:i={}}){const n=c=>{const a=W(O(e,c),{min:-1/0,max:1/0});return[a.min,a.max]},o=c=>{const a=W(O(i,c),{min:-1/0,max:1/0});return[a.min,a.max]};return typeof e!="function"&&typeof i!="function"?[n(),o()]:c=>[n(c),o(c)]},threshold(s,t,e){return this.lockDirection=e.axis==="lock",d.toVector(s,this.lockDirection?[.1,3]:0)},modifierKey(s){return s===void 0?"ctrlKey":s}});h(h({},E),{},{mouseOnly:(s=!0)=>s});h(h({},E),{},{mouseOnly:(s=!0)=>s});const j=new Map,H=new Map;function ut(s){j.set(s.key,s.engine),H.set(s.key,s.resolver)}const fe={key:"drag",engine:Ft,resolver:oe},De={key:"pinch",engine:ue,resolver:le};function he(s,t){if(s==null)return{};var e={},i=Object.keys(s),n,o;for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(e[n]=s[n]);return e}function de(s,t){if(s==null)return{};var e=he(s,t),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,i)||(e[i]=s[i]))}return e}const pe={target(s){if(s)return()=>"current"in s?s.current:s},enabled(s=!0){return s},window(s=g.isBrowser?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform(s){return s}},me=["target","eventOptions","window","enabled","transform"];function D(s={},t){const e={};for(const[i,n]of Object.entries(t))switch(typeof n){case"function":e[i]=n.call(e,s[i],i,s);break;case"object":e[i]=D(s[i],n);break;case"boolean":n&&(e[i]=s[i]);break}return e}function ge(s,t){const e=s,{target:i,eventOptions:n,window:o,enabled:c,transform:a}=e,l=de(e,me),f={shared:D({target:i,eventOptions:n,window:o,enabled:c,transform:a},pe)};if(t){const r=H.get(t);f[t]=D(h({shared:f.shared},l),r)}else for(const r in l){const u=H.get(r);u&&(f[r]=D(h({shared:f.shared},l[r]),u))}return f}class lt{constructor(t){p(this,"_listeners",[]),this._ctrl=t}add(t,e,i,n,o){const c=Kt(e,i),a=h(h({},this._ctrl.config.shared.eventOptions),o);t.addEventListener(c,n,a),this._listeners.push(()=>t.removeEventListener(c,n,a))}clean(){this._listeners.forEach(t=>t()),this._listeners=[]}}class _e{constructor(){p(this,"_timeouts",new Map)}add(t,e,i=140,...n){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...n))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class ve{constructor(t){p(this,"gestures",new Set),p(this,"_targetEventStore",new lt(this)),p(this,"gestureEventStores",{}),p(this,"gestureTimeoutStores",{}),p(this,"handlers",{}),p(this,"config",{}),p(this,"pointerIds",new Set),p(this,"touchIds",new Set),p(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),ye(this,t)}setEventIds(t){M(t)?this.touchIds=new Set(jt(t)):"pointerId"in t&&(t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId))}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=ge(t,e)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i=e.eventOptions,n={};let o;if(e.target&&(o=e.target(),!o))return;const c=be(n,i,!!o);if(e.enabled){for(const a of this.gestures)if(this.config[a].enabled){const l=j.get(a);new l(this,t,a).bind(c)}for(const a in this.nativeHandlers)c(a,"",l=>this.nativeHandlers[a](h(h({},this.state.shared),{},{event:l,args:t})),void 0,!0)}for(const a in n)n[a]=$t(...n[a]);if(!o)return n;for(const a in n){const{device:l,capture:f,passive:r}=Rt(a);this._targetEventStore.add(o,l,"",n[a],{capture:f,passive:r})}}}function v(s,t){s.gestures.add(t),s.gestureEventStores[t]=new lt(s),s.gestureTimeoutStores[t]=new _e}function ye(s,t){t.drag&&v(s,"drag"),t.wheel&&v(s,"wheel"),t.scroll&&v(s,"scroll"),t.move&&v(s,"move"),t.pinch&&v(s,"pinch"),t.hover&&v(s,"hover")}const be=(s,t,e)=>(i,n,o,c={},a=!1)=>{var l,f;const r=(l=c.capture)!==null&&l!==void 0?l:t.capture,u=(f=c.passive)!==null&&f!==void 0?f:t.passive;let m=a?i:Mt(i,n,r);e&&u&&(m+="Passive"),s[m]=s[m]||[],s[m].push(o)},we=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Ee(s){const t={},e={},i=new Set;for(let n in s)we.test(n)?(i.add(RegExp.lastMatch),e[n]=s[n]):t[n]=s[n];return[e,t,i]}function y(s,t,e,i,n,o){if(!s.has(e)||!j.has(i))return;const c=e+"Start",a=e+"End",l=f=>{let r;return f.first&&c in t&&t[c](f),e in t&&(r=t[e](f)),f.last&&a in t&&t[a](f),r};n[i]=l,o[i]=o[i]||{}}function Se(s,t){const[e,i,n]=Ee(s),o={};return y(n,e,"onDrag","drag",o,t),y(n,e,"onWheel","wheel",o,t),y(n,e,"onScroll","scroll",o,t),y(n,e,"onPinch","pinch",o,t),y(n,e,"onMove","move",o,t),y(n,e,"onHover","hover",o,t),{handlers:o,config:t,nativeHandlers:i}}function ft(s,t={},e,i){const n=w.useMemo(()=>new ve(s),[]);if(n.applyHandlers(s,i),n.applyConfig(t,e),w.useEffect(n.effect.bind(n)),w.useEffect(()=>n.clean.bind(n),[]),t.target===void 0)return n.bind.bind(n)}function Oe(s,t={}){return ut(fe),ft({drag:s},t,"drag")}function Me(s){return s.forEach(ut),function(e,i={}){const{handlers:n,nativeHandlers:o,config:c}=Se(e,i);return ft(n,c,void 0,o)}}function Z(s,t,e){return s*t*e/(t+e*s)}function Le(s,t,e,i,n=.15){return n===0?it(s,t,e):s<t?-Z(t-s,i,n)+t:s>e?+Z(s-e,i,n)+e:s}const P="adm-input",Ie={defaultValue:""},Te=b.exports.forwardRef((s,t)=>{const e=tt(Ie,s),[i,n]=_t(e),[o,c]=b.exports.useState(!1),a=b.exports.useRef(null);b.exports.useImperativeHandle(t,()=>({clear:()=>{n("")},focus:()=>{var r;(r=a.current)===null||r===void 0||r.focus()},blur:()=>{var r;(r=a.current)===null||r===void 0||r.blur()},get nativeElement(){return a.current}}));const l=r=>{var u;e.onEnterPress&&(r.code==="Enter"||r.keyCode===13)&&e.onEnterPress(r),(u=e.onKeyDown)===null||u===void 0||u.call(e,r)};xt(()=>{var r;if(!!e.enterKeyHint)return(r=a.current)===null||r===void 0||r.setAttribute("enterkeyhint",e.enterKeyHint),()=>{var u;(u=a.current)===null||u===void 0||u.removeAttribute("enterkeyhint")}},[e.enterKeyHint]);function f(){let r=i;e.type==="number"&&(r=r&&it(parseFloat(r),e.min,e.max).toString()),r!==i&&n(r)}return st(e,vt("div",{className:et(`${P}`,e.disabled&&`${P}-disabled`),children:[C("input",{ref:a,className:`${P}-element`,value:i,onChange:r=>{n(r.target.value)},onFocus:r=>{var u;c(!0),(u=e.onFocus)===null||u===void 0||u.call(e,r)},onBlur:r=>{var u;c(!1),f(),(u=e.onBlur)===null||u===void 0||u.call(e,r)},id:e.id,placeholder:e.placeholder,disabled:e.disabled,readOnly:e.readOnly,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,autoComplete:e.autoComplete,autoFocus:e.autoFocus,pattern:e.pattern,inputMode:e.inputMode,type:e.type,autoCapitalize:e.autoCapitalize,autoCorrect:e.autoCorrect,onKeyDown:l,onKeyUp:e.onKeyUp,onCompositionStart:e.onCompositionStart,onCompositionEnd:e.onCompositionEnd}),e.clearable&&!!i&&!e.readOnly&&o&&C("div",{className:`${P}-clear`,onMouseDown:r=>{r.preventDefault()},onClick:()=>{var r;n(""),(r=e.onClear)===null||r===void 0||r.call(e)},children:C(At,{})})]}))});var Re=Te;export{Re as I,Ce as P,it as b,Me as c,fe as d,De as p,Le as r,Oe as u};
