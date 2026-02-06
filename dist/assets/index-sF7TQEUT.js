(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function hA(){if(ly)return dl;ly=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return dl.Fragment=e,dl.jsx=n,dl.jsxs=n,dl}var uy;function fA(){return uy||(uy=1,yd.exports=hA()),yd.exports}var q=fA(),vd={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function dA(){if(cy)return we;cy=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=I&&N[I]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function G(N,X,ae){this.props=N,this.context=X,this.refs=J,this.updater=ae||j}G.prototype.isReactComponent={},G.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function he(){}he.prototype=G.prototype;function ue(N,X,ae){this.props=N,this.context=X,this.refs=J,this.updater=ae||j}var le=ue.prototype=new he;le.constructor=ue,$(le,G.prototype),le.isPureReactComponent=!0;var Ee=Array.isArray,fe={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function D(N,X,ae,te,ne,Re){return ae=Re.ref,{$$typeof:r,type:N,key:X,ref:ae!==void 0?ae:null,props:Re}}function S(N,X){return D(N.type,X,void 0,void 0,void 0,N.props)}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function C(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ae){return X[ae]})}var k=/\/+/g;function P(N,X){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):X.toString(36)}function R(){}function nt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function it(N,X,ae,te,ne){var Re=typeof N;(Re==="undefined"||Re==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Re){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case r:case e:Se=!0;break;case b:return Se=N._init,it(Se(N._payload),X,ae,te,ne)}}if(Se)return ne=ne(N),Se=te===""?"."+P(N,0):te,Ee(ne)?(ae="",Se!=null&&(ae=Se.replace(k,"$&/")+"/"),it(ne,X,ae,"",function(rt){return rt})):ne!=null&&(A(ne)&&(ne=S(ne,ae+(ne.key==null||N&&N.key===ne.key?"":(""+ne.key).replace(k,"$&/")+"/")+Se)),X.push(ne)),1;Se=0;var mt=te===""?".":te+":";if(Ee(N))for(var Ue=0;Ue<N.length;Ue++)te=N[Ue],Re=mt+P(te,Ue),Se+=it(te,X,ae,Re,ne);else if(Ue=M(N),typeof Ue=="function")for(N=Ue.call(N),Ue=0;!(te=N.next()).done;)te=te.value,Re=mt+P(te,Ue++),Se+=it(te,X,ae,Re,ne);else if(Re==="object"){if(typeof N.then=="function")return it(nt(N),X,ae,te,ne);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Se}function ee(N,X,ae){if(N==null)return N;var te=[],ne=0;return it(N,te,"","",function(Re){return X.call(ae,Re,ne++)}),te}function ge(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(ae){(N._status===0||N._status===-1)&&(N._status=1,N._result=ae)},function(ae){(N._status===0||N._status===-1)&&(N._status=2,N._result=ae)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function qe(){}return we.Children={map:ee,forEach:function(N,X,ae){ee(N,function(){X.apply(this,arguments)},ae)},count:function(N){var X=0;return ee(N,function(){X++}),X},toArray:function(N){return ee(N,function(X){return X})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},we.Component=G,we.Fragment=n,we.Profiler=o,we.PureComponent=ue,we.StrictMode=s,we.Suspense=g,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe,we.act=function(){throw Error("act(...) is not supported in production builds of React.")},we.cache=function(N){return function(){return N.apply(null,arguments)}},we.cloneElement=function(N,X,ae){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=$({},N.props),ne=N.key,Re=void 0;if(X!=null)for(Se in X.ref!==void 0&&(Re=void 0),X.key!==void 0&&(ne=""+X.key),X)!Ae.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(te[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)te.children=ae;else if(1<Se){for(var mt=Array(Se),Ue=0;Ue<Se;Ue++)mt[Ue]=arguments[Ue+2];te.children=mt}return D(N.type,ne,void 0,void 0,Re,te)},we.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},we.createElement=function(N,X,ae){var te,ne={},Re=null;if(X!=null)for(te in X.key!==void 0&&(Re=""+X.key),X)Ae.call(X,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ne[te]=X[te]);var Se=arguments.length-2;if(Se===1)ne.children=ae;else if(1<Se){for(var mt=Array(Se),Ue=0;Ue<Se;Ue++)mt[Ue]=arguments[Ue+2];ne.children=mt}if(N&&N.defaultProps)for(te in Se=N.defaultProps,Se)ne[te]===void 0&&(ne[te]=Se[te]);return D(N,Re,void 0,void 0,null,ne)},we.createRef=function(){return{current:null}},we.forwardRef=function(N){return{$$typeof:m,render:N}},we.isValidElement=A,we.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:ge}},we.memo=function(N,X){return{$$typeof:_,type:N,compare:X===void 0?null:X}},we.startTransition=function(N){var X=fe.T,ae={};fe.T=ae;try{var te=N(),ne=fe.S;ne!==null&&ne(ae,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(qe,ce)}catch(Re){ce(Re)}finally{fe.T=X}},we.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()},we.use=function(N){return fe.H.use(N)},we.useActionState=function(N,X,ae){return fe.H.useActionState(N,X,ae)},we.useCallback=function(N,X){return fe.H.useCallback(N,X)},we.useContext=function(N){return fe.H.useContext(N)},we.useDebugValue=function(){},we.useDeferredValue=function(N,X){return fe.H.useDeferredValue(N,X)},we.useEffect=function(N,X){return fe.H.useEffect(N,X)},we.useId=function(){return fe.H.useId()},we.useImperativeHandle=function(N,X,ae){return fe.H.useImperativeHandle(N,X,ae)},we.useInsertionEffect=function(N,X){return fe.H.useInsertionEffect(N,X)},we.useLayoutEffect=function(N,X){return fe.H.useLayoutEffect(N,X)},we.useMemo=function(N,X){return fe.H.useMemo(N,X)},we.useOptimistic=function(N,X){return fe.H.useOptimistic(N,X)},we.useReducer=function(N,X,ae){return fe.H.useReducer(N,X,ae)},we.useRef=function(N){return fe.H.useRef(N)},we.useState=function(N){return fe.H.useState(N)},we.useSyncExternalStore=function(N,X,ae){return fe.H.useSyncExternalStore(N,X,ae)},we.useTransition=function(){return fe.H.useTransition()},we.version="19.0.0",we}var hy;function hm(){return hy||(hy=1,vd.exports=dA()),vd.exports}var Ye=hm();const mA=Wv(Ye);var Ed={exports:{}},ml={},Td={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function pA(){return fy||(fy=1,(function(r){function e(ee,ge){var ce=ee.length;ee.push(ge);e:for(;0<ce;){var qe=ce-1>>>1,N=ee[qe];if(0<o(N,ge))ee[qe]=ge,ee[ce]=N,ce=qe;else break e}}function n(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var ge=ee[0],ce=ee.pop();if(ce!==ge){ee[0]=ce;e:for(var qe=0,N=ee.length,X=N>>>1;qe<X;){var ae=2*(qe+1)-1,te=ee[ae],ne=ae+1,Re=ee[ne];if(0>o(te,ce))ne<N&&0>o(Re,te)?(ee[qe]=Re,ee[ne]=ce,qe=ne):(ee[qe]=te,ee[ae]=ce,qe=ae);else if(ne<N&&0>o(Re,ce))ee[qe]=Re,ee[ne]=ce,qe=ne;else break e}}return ge}function o(ee,ge){var ce=ee.sortIndex-ge.sortIndex;return ce!==0?ce:ee.id-ge.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],_=[],b=1,I=null,M=3,j=!1,$=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function le(ee){for(var ge=n(_);ge!==null;){if(ge.callback===null)s(_);else if(ge.startTime<=ee)s(_),ge.sortIndex=ge.expirationTime,e(g,ge);else break;ge=n(_)}}function Ee(ee){if(J=!1,le(ee),!$)if(n(g)!==null)$=!0,nt();else{var ge=n(_);ge!==null&&it(Ee,ge.startTime-ee)}}var fe=!1,Ae=-1,D=5,S=-1;function A(){return!(r.unstable_now()-S<D)}function C(){if(fe){var ee=r.unstable_now();S=ee;var ge=!0;try{e:{$=!1,J&&(J=!1,he(Ae),Ae=-1),j=!0;var ce=M;try{t:{for(le(ee),I=n(g);I!==null&&!(I.expirationTime>ee&&A());){var qe=I.callback;if(typeof qe=="function"){I.callback=null,M=I.priorityLevel;var N=qe(I.expirationTime<=ee);if(ee=r.unstable_now(),typeof N=="function"){I.callback=N,le(ee),ge=!0;break t}I===n(g)&&s(g),le(ee)}else s(g);I=n(g)}if(I!==null)ge=!0;else{var X=n(_);X!==null&&it(Ee,X.startTime-ee),ge=!1}}break e}finally{I=null,M=ce,j=!1}ge=void 0}}finally{ge?k():fe=!1}}}var k;if(typeof ue=="function")k=function(){ue(C)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,R=P.port2;P.port1.onmessage=C,k=function(){R.postMessage(null)}}else k=function(){G(C,0)};function nt(){fe||(fe=!0,k())}function it(ee,ge){Ae=G(function(){ee(r.unstable_now())},ge)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||j||($=!0,nt())},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_getFirstCallbackNode=function(){return n(g)},r.unstable_next=function(ee){switch(M){case 1:case 2:case 3:var ge=3;break;default:ge=M}var ce=M;M=ge;try{return ee()}finally{M=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,ge){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ce=M;M=ee;try{return ge()}finally{M=ce}},r.unstable_scheduleCallback=function(ee,ge,ce){var qe=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?qe+ce:qe):ce=qe,ee){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ce+N,ee={id:b++,callback:ge,priorityLevel:ee,startTime:ce,expirationTime:N,sortIndex:-1},ce>qe?(ee.sortIndex=ce,e(_,ee),n(g)===null&&ee===n(_)&&(J?(he(Ae),Ae=-1):J=!0,it(Ee,ce-qe))):(ee.sortIndex=N,e(g,ee),$||j||($=!0,nt())),ee},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(ee){var ge=M;return function(){var ce=M;M=ge;try{return ee.apply(this,arguments)}finally{M=ce}}}})(bd)),bd}var dy;function gA(){return dy||(dy=1,Td.exports=pA()),Td.exports}var Ad={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function _A(){if(my)return Gt;my=1;var r=hm();function e(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)_+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,b){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:I==null?null:""+I,children:g,containerInfo:_,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gt.createPortal=function(g,_){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return u(g,_,null,b)},Gt.flushSync=function(g){var _=f.T,b=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=b,s.d.f()}},Gt.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Gt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Gt.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var b=_.as,I=m(b,_.crossOrigin),M=typeof _.integrity=="string"?_.integrity:void 0,j=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;b==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:I,integrity:M,fetchPriority:j}):b==="script"&&s.d.X(g,{crossOrigin:I,integrity:M,fetchPriority:j,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Gt.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var b=m(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Gt.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var b=_.as,I=m(b,_.crossOrigin);s.d.L(g,b,{crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Gt.preloadModule=function(g,_){if(typeof g=="string")if(_){var b=m(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Gt.requestFormReset=function(g){s.d.r(g)},Gt.unstable_batchedUpdates=function(g,_){return g(_)},Gt.useFormState=function(g,_,b){return f.H.useFormState(g,_,b)},Gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Gt.version="19.0.0",Gt}var py;function yA(){if(py)return Ad.exports;py=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ad.exports=_A(),Ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function vA(){if(gy)return ml;gy=1;var r=gA(),e=hm(),n=yA();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),j=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Ee=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Ae(t){return t===null||typeof t!="object"?null:(t=fe&&t[fe]||t["@@iterator"],typeof t=="function"?t:null)}var D=Symbol.for("react.client.reference");function S(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case g:return"Fragment";case m:return"Portal";case b:return"Profiler";case _:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:S(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return S(t(i))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,k,P;function R(t){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+t+P}var nt=!1;function it(t,i){if(!t||nt)return"";nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(H){var z=H}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(H){z=H}t.call(Y.prototype)}}else{try{throw Error()}catch(H){z=H}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),x=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<x.length&&!x[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===x.length)for(l=w.length-1,h=x.length-1;1<=l&&0<=h&&w[l]!==x[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==x[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==x[h]){var F=`
`+w[l].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=l&&0<=h);break}}}finally{nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?R(a):""}function ee(t){switch(t.tag){case 26:case 27:case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 15:return t=it(t.type,!1),t;case 11:return t=it(t.type.render,!1),t;case 1:return t=it(t.type,!0),t;default:return""}}function ge(t){try{var i="";do i+=ee(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ce(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function qe(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function N(t){if(ce(t)!==t)throw Error(s(188))}function X(t){var i=t.alternate;if(!i){if(i=ce(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return N(h),t;if(d===l)return N(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function ae(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=ae(t),i!==null)return i;t=t.sibling}return null}var te=Array.isArray,ne=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re={pending:!1,data:null,method:null,action:null},Se=[],mt=-1;function Ue(t){return{current:t}}function rt(t){0>mt||(t.current=Se[mt],Se[mt]=null,mt--)}function Ge(t,i){mt++,Se[mt]=t.current,t.current=i}var Wt=Ue(null),Ei=Ue(null),yn=Ue(null),nr=Ue(null);function ir(t,i){switch(Ge(yn,i),Ge(Ei,t),Ge(Wt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?L_(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=L_(t),i=U_(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}rt(Wt),Ge(Wt,i)}function Ti(){rt(Wt),rt(Ei),rt(yn)}function oo(t){t.memoizedState!==null&&Ge(nr,t);var i=Wt.current,a=U_(i,t.type);i!==a&&(Ge(Ei,t),Ge(Wt,a))}function Xs(t){Ei.current===t&&(rt(Wt),rt(Ei)),nr.current===t&&(rt(nr),ll._currentValue=Re)}var Ws=Object.prototype.hasOwnProperty,ns=r.unstable_scheduleCallback,Zs=r.unstable_cancelCallback,vh=r.unstable_shouldYield,lo=r.unstable_requestPaint,rn=r.unstable_now,$l=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,bi=r.unstable_NormalPriority,Xl=r.unstable_LowPriority,uo=r.unstable_IdlePriority,Eh=r.log,is=r.unstable_setDisableYieldValue,rr=null,Ht=null;function co(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(rr,t,void 0,(t.current.flags&128)===128)}catch{}}function $n(t){if(typeof Eh=="function"&&is(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(rr,t)}catch{}}var Zt=Math.clz32?Math.clz32:Zl,ho=Math.log,Wl=Math.LN2;function Zl(t){return t>>>=0,t===0?32:31-(ho(t)/Wl|0)|0}var Xn=128,sr=4194304;function zn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?l=zn(a):(d&=E,d!==0?l=zn(d):t||(v=E&~v,v!==0&&(l=zn(v))))):(E=a&~h,E!==0?l=zn(E):d!==0?l=zn(d):t||(v=a&~v,v!==0&&(l=zn(v)))),l===0?0:i!==0&&i!==l&&(i&h)===0&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function ar(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Js(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var t=Xn;return Xn<<=1,(Xn&4194176)===0&&(Xn=128),t}function or(){var t=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),t}function ea(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ht(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jl(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,x=t.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Zt(a),Y=1<<F;E[F]=0,w[F]=-1;var z=x[F];if(z!==null)for(x[F]=null,F=0;F<z.length;F++){var H=z[F];H!==null&&(H.lane&=-536870913)}a&=~Y}l!==0&&lr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function lr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Zt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function ur(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Zt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function eu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tu(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:ny(t.type))}function cr(t,i){var a=ne.p;try{return ne.p=t,i()}finally{ne.p=a}}var Wn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Wn,Et="__reactProps$"+Wn,Ai="__reactContainer$"+Wn,rs="__reactEvents$"+Wn,ta="__reactListeners$"+Wn,Zn="__reactHandles$"+Wn,mo="__reactResources$"+Wn,hr="__reactMarker$"+Wn;function ss(t){delete t[Dt],delete t[Et],delete t[rs],delete t[ta],delete t[Zn]}function jn(t){var i=t[Dt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ai]||a[Dt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=B_(t);t!==null;){if(a=t[Dt])return a;t=B_(t)}return i}t=a,a=t.parentNode}return null}function Si(t){if(t=t[Dt]||t[Ai]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function fr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function dr(t){var i=t[mo];return i||(i=t[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ze(t){t[hr]=!0}var po=new Set,na={};function cn(t,i){sn(t,i),sn(t+"Capture",i)}function sn(t,i){for(na[t]=i,t=0;t<i.length;t++)po.add(i[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),go={},_o={};function nu(t){return Ws.call(_o,t)?!0:Ws.call(go,t)?!1:Th.test(t)?_o[t]=!0:(go[t]=!0,!1)}function mr(t,i,a){if(nu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function pr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function En(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iu(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function bh(t){var i=iu(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function as(t){t._valueTracker||(t._valueTracker=bh(t))}function yo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=iu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ia(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wi=/[\n"\\]/g;function st(t){return t.replace(wi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function gr(t,i,a,l,h,d,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Jt(i)):t.value!==""+Jt(i)&&(t.value=""+Jt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ra(t,v,Jt(i)):a!=null?ra(t,v,Jt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jt(E):t.removeAttribute("name")}function os(t,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Jt(a):"",i=i!=null?""+Jt(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function ra(t,i,a){i==="number"&&ia(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ze(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ls(t,i,a){if(i!=null&&(i=""+Jt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Jt(a):""}function _r(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(te(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Jt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Tn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Ah.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function ru(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&vo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&vo(t,d,i[d])}function Eo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(t){return wh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bn=null;function sa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ri=null,Ii=null;function Ci(t){var i=Si(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(gr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));gr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&yo(l)}break e;case"textarea":ls(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&ze(t,!!a.multiple,i,!1)}}}var To=!1;function su(t,i,a){if(To)return t(i,a);To=!0;try{var l=t(i);return l}finally{if(To=!1,(Ri!==null||Ii!==null)&&(Xu(),Ri&&(i=Ri,t=Ii,Ii=Ri=null,Ci(i),t)))for(i=0;i<t.length;i++)Ci(t[i])}}function us(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var An=!1;if(hn)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){An=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{An=!1}var ei=null,yr=null,Di=null;function bo(){if(Di)return Di;var t,i=yr,a=i.length,l,h="value"in ei?ei.value:ei.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(t,1<l?1-l:void 0)}function ti(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ni(){return!0}function Ao(){return!1}function Nt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:Ao,this.isPropagationStopped=Ao,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),i}var He={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Nt(He),hs=C({},He,{view:0,detail:0}),au=Nt(hs),oa,la,ii,fs=C({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ii&&(ii&&t.type==="mousemove"?(oa=t.screenX-ii.screenX,la=t.screenY-ii.screenY):la=oa=0,ii=t),oa)},movementY:function(t){return"movementY"in t?t.movementY:la}}),Sn=Nt(fs),ou=C({},fs,{dataTransfer:0}),Rh=Nt(ou),ds=C({},hs,{relatedTarget:0}),ua=Nt(ds),So=C({},He,{animationName:0,elapsedTime:0,pseudoElement:0}),ca=Nt(So),lu=C({},He,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ha=Nt(lu),Ih=C({},He,{data:0}),wo=Nt(Ih),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ro(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cu[t])?!!i[t]:!1}function ps(){return Ro}var hu=C({},hs,{key:function(t){if(t.key){var i=ms[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ti(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(t){return t.type==="keypress"?ti(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ti(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fa=Nt(hu),fu=C({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Nt(fu),Ni=C({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),du=Nt(Ni),mu=C({},He,{propertyName:0,elapsedTime:0,pseudoElement:0}),pu=Nt(mu),gu=C({},fs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),da=Nt(gu),en=C({},He,{newState:0,oldState:0}),_u=Nt(en),yu=[9,13,27,32],ri=hn&&"CompositionEvent"in window,c=null;hn&&"documentMode"in document&&(c=document.documentMode);var p=hn&&"TextEvent"in window&&!c,y=hn&&(!ri||c&&8<c&&11>=c),T=" ",L=!1;function B(t,i){switch(t){case"keyup":return yu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Me=!1;function Tt(t,i){switch(t){case"compositionend":return Z(i);case"keypress":return i.which!==32?null:(L=!0,T);case"textInput":return t=i.data,t===T&&L?null:t;default:return null}}function Ve(t,i){if(Me)return t==="compositionend"||!ri&&B(t,i)?(t=bo(),Di=yr=ei=null,Me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ot={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ot[t.type]:i==="textarea"}function Oi(t,i,a,l){Ri?Ii?Ii.push(l):Ii=[l]:Ri=l,i=tc(i,"onChange"),0<i.length&&(a=new aa("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Pt=null,si=null;function Co(t){k_(t,0)}function vu(t){var i=fr(t);if(yo(i))return t}function op(t,i){if(t==="change")return i}var lp=!1;if(hn){var Ch;if(hn){var Dh="oninput"in document;if(!Dh){var up=document.createElement("div");up.setAttribute("oninput","return;"),Dh=typeof up.oninput=="function"}Ch=Dh}else Ch=!1;lp=Ch&&(!document.documentMode||9<document.documentMode)}function cp(){Pt&&(Pt.detachEvent("onpropertychange",hp),si=Pt=null)}function hp(t){if(t.propertyName==="value"&&vu(si)){var i=[];Oi(i,si,t,sa(t)),su(Co,i)}}function BT(t,i,a){t==="focusin"?(cp(),Pt=i,si=a,Pt.attachEvent("onpropertychange",hp)):t==="focusout"&&cp()}function qT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(si)}function HT(t,i){if(t==="click")return vu(i)}function FT(t,i){if(t==="input"||t==="change")return vu(i)}function GT(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fn=typeof Object.is=="function"?Object.is:GT;function Do(t,i){if(fn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Ws.call(i,h)||!fn(t[h],i[h]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,i){var a=fp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function mp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ia(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ia(t.document)}return i}function Nh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function KT(t,i){var a=pp(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&mp(i.ownerDocument.documentElement,i)){if(l!==null&&Nh(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=dp(i,d);var v=dp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var QT=hn&&"documentMode"in document&&11>=document.documentMode,ma=null,Oh=null,No=null,kh=!1;function gp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kh||ma==null||ma!==ia(l)||(l=ma,"selectionStart"in l&&Nh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Do(No,l)||(No=l,l=tc(Oh,"onSelect"),0<l.length&&(i=new aa("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ma)))}function gs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var pa={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},xh={},_p={};hn&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function _s(t){if(xh[t])return xh[t];if(!pa[t])return t;var i=pa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in _p)return xh[t]=i[a];return t}var yp=_s("animationend"),vp=_s("animationiteration"),Ep=_s("animationstart"),YT=_s("transitionrun"),$T=_s("transitionstart"),XT=_s("transitioncancel"),Tp=_s("transitionend"),bp=new Map,Ap="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Bn(t,i){bp.set(t,i),cn(i,[t])}var wn=[],ga=0,Mh=0;function Eu(){for(var t=ga,i=Mh=ga=0;i<t;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Sp(a,h,d)}}function Tu(t,i,a,l){wn[ga++]=t,wn[ga++]=i,wn[ga++]=a,wn[ga++]=l,Mh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vh(t,i,a,l){return Tu(t,i,a,l),bu(t)}function vr(t,i){return Tu(t,null,null,i),bu(t)}function Sp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Zt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function bu(t){if(50<tl)throw tl=0,qf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var _a={},wp=new WeakMap;function Rn(t,i){if(typeof t=="object"&&t!==null){var a=wp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ge(i)},wp.set(t,i),i)}return{value:t,source:i,stack:ge(i)}}var ya=[],va=0,Au=null,Su=0,In=[],Cn=0,ys=null,ki=1,xi="";function vs(t,i){ya[va++]=Su,ya[va++]=Au,Au=t,Su=i}function Rp(t,i,a){In[Cn++]=ki,In[Cn++]=xi,In[Cn++]=ys,ys=t;var l=ki;t=xi;var h=32-Zt(l)-1;l&=~(1<<h),a+=1;var d=32-Zt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,ki=1<<32-Zt(i)+h|a<<h|l,xi=d+t}else ki=1<<d|a<<h|l,xi=t}function Ph(t){t.return!==null&&(vs(t,1),Rp(t,1,0))}function Lh(t){for(;t===Au;)Au=ya[--va],ya[va]=null,Su=ya[--va],ya[va]=null;for(;t===ys;)ys=In[--Cn],In[Cn]=null,xi=In[--Cn],In[Cn]=null,ki=In[--Cn],In[Cn]=null}var tn=null,Lt=null,je=!1,qn=null,ai=!1,Uh=Error(s(519));function Es(t){var i=Error(s(418,""));throw xo(Rn(i,t)),Uh}function Ip(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Dt]=t,i[Et]=l,a){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(a=0;a<il.length;a++)ke(il[a],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":ke("invalid",i),os(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),as(i);break;case"select":ke("invalid",i);break;case"textarea":ke("invalid",i),_r(i,l.value,l.defaultValue,l.children),as(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||P_(i.textContent,a)?(l.popover!=null&&(ke("beforetoggle",i),ke("toggle",i)),l.onScroll!=null&&ke("scroll",i),l.onScrollEnd!=null&&ke("scrollend",i),l.onClick!=null&&(i.onclick=nc),i=!0):i=!1,i||Es(t)}function Cp(t){for(tn=t.return;tn;)switch(tn.tag){case 3:case 27:ai=!0;return;case 5:case 13:ai=!1;return;default:tn=tn.return}}function Oo(t){if(t!==tn)return!1;if(!je)return Cp(t),je=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Lt&&Es(t),Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Lt=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Lt=null}}else Lt=tn?Fn(t.stateNode.nextSibling):null;return!0}function ko(){Lt=tn=null,je=!1}function xo(t){qn===null?qn=[t]:qn.push(t)}var Mo=Error(s(460)),Dp=Error(s(474)),zh={then:function(){}};function Np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wu(){}function Op(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(wu,wu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Mo?Error(s(483)):t;default:if(typeof i.status=="string")i.then(wu,wu);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Mo?Error(s(483)):t}throw Vo=i,Mo}}var Vo=null;function kp(){if(Vo===null)throw Error(s(459));var t=Vo;return Vo=null,t}var Ea=null,Po=0;function Ru(t){var i=Po;return Po+=1,Ea===null&&(Ea=[]),Op(Ea,t,i)}function Lo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Iu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function xp(t){var i=t._init;return i(t._payload)}function Mp(t){function i(V,O){if(t){var U=V.deletions;U===null?(V.deletions=[O],V.flags|=16):U.push(O)}}function a(V,O){if(!t)return null;for(;O!==null;)i(V,O),O=O.sibling;return null}function l(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function h(V,O){return V=Or(V,O),V.index=0,V.sibling=null,V}function d(V,O,U){return V.index=U,t?(U=V.alternate,U!==null?(U=U.index,U<O?(V.flags|=33554434,O):U):(V.flags|=33554434,O)):(V.flags|=1048576,O)}function v(V){return t&&V.alternate===null&&(V.flags|=33554434),V}function E(V,O,U,K){return O===null||O.tag!==6?(O=Mf(U,V.mode,K),O.return=V,O):(O=h(O,U),O.return=V,O)}function w(V,O,U,K){var re=U.type;return re===g?F(V,O,U.props.children,K,U.key):O!==null&&(O.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ue&&xp(re)===O.type)?(O=h(O,U.props),Lo(O,U),O.return=V,O):(O=Gu(U.type,U.key,U.props,null,V.mode,K),Lo(O,U),O.return=V,O)}function x(V,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Vf(U,V.mode,K),O.return=V,O):(O=h(O,U.children||[]),O.return=V,O)}function F(V,O,U,K,re){return O===null||O.tag!==7?(O=Ns(U,V.mode,K,re),O.return=V,O):(O=h(O,U),O.return=V,O)}function Y(V,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Mf(""+O,V.mode,U),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case f:return U=Gu(O.type,O.key,O.props,null,V.mode,U),Lo(U,O),U.return=V,U;case m:return O=Vf(O,V.mode,U),O.return=V,O;case ue:var K=O._init;return O=K(O._payload),Y(V,O,U)}if(te(O)||Ae(O))return O=Ns(O,V.mode,U,null),O.return=V,O;if(typeof O.then=="function")return Y(V,Ru(O),U);if(O.$$typeof===j)return Y(V,qu(V,O),U);Iu(V,O)}return null}function z(V,O,U,K){var re=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return re!==null?null:E(V,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case f:return U.key===re?w(V,O,U,K):null;case m:return U.key===re?x(V,O,U,K):null;case ue:return re=U._init,U=re(U._payload),z(V,O,U,K)}if(te(U)||Ae(U))return re!==null?null:F(V,O,U,K,null);if(typeof U.then=="function")return z(V,O,Ru(U),K);if(U.$$typeof===j)return z(V,O,qu(V,U),K);Iu(V,U)}return null}function H(V,O,U,K,re){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return V=V.get(U)||null,E(O,V,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case f:return V=V.get(K.key===null?U:K.key)||null,w(O,V,K,re);case m:return V=V.get(K.key===null?U:K.key)||null,x(O,V,K,re);case ue:var Ce=K._init;return K=Ce(K._payload),H(V,O,U,K,re)}if(te(K)||Ae(K))return V=V.get(U)||null,F(O,V,K,re,null);if(typeof K.then=="function")return H(V,O,U,Ru(K),re);if(K.$$typeof===j)return H(V,O,U,qu(O,K),re);Iu(O,K)}return null}function se(V,O,U,K){for(var re=null,Ce=null,oe=O,pe=O=0,Mt=null;oe!==null&&pe<U.length;pe++){oe.index>pe?(Mt=oe,oe=null):Mt=oe.sibling;var Be=z(V,oe,U[pe],K);if(Be===null){oe===null&&(oe=Mt);break}t&&oe&&Be.alternate===null&&i(V,oe),O=d(Be,O,pe),Ce===null?re=Be:Ce.sibling=Be,Ce=Be,oe=Mt}if(pe===U.length)return a(V,oe),je&&vs(V,pe),re;if(oe===null){for(;pe<U.length;pe++)oe=Y(V,U[pe],K),oe!==null&&(O=d(oe,O,pe),Ce===null?re=oe:Ce.sibling=oe,Ce=oe);return je&&vs(V,pe),re}for(oe=l(oe);pe<U.length;pe++)Mt=H(oe,V,pe,U[pe],K),Mt!==null&&(t&&Mt.alternate!==null&&oe.delete(Mt.key===null?pe:Mt.key),O=d(Mt,O,pe),Ce===null?re=Mt:Ce.sibling=Mt,Ce=Mt);return t&&oe.forEach(function(Ur){return i(V,Ur)}),je&&vs(V,pe),re}function Te(V,O,U,K){if(U==null)throw Error(s(151));for(var re=null,Ce=null,oe=O,pe=O=0,Mt=null,Be=U.next();oe!==null&&!Be.done;pe++,Be=U.next()){oe.index>pe?(Mt=oe,oe=null):Mt=oe.sibling;var Ur=z(V,oe,Be.value,K);if(Ur===null){oe===null&&(oe=Mt);break}t&&oe&&Ur.alternate===null&&i(V,oe),O=d(Ur,O,pe),Ce===null?re=Ur:Ce.sibling=Ur,Ce=Ur,oe=Mt}if(Be.done)return a(V,oe),je&&vs(V,pe),re;if(oe===null){for(;!Be.done;pe++,Be=U.next())Be=Y(V,Be.value,K),Be!==null&&(O=d(Be,O,pe),Ce===null?re=Be:Ce.sibling=Be,Ce=Be);return je&&vs(V,pe),re}for(oe=l(oe);!Be.done;pe++,Be=U.next())Be=H(oe,V,pe,Be.value,K),Be!==null&&(t&&Be.alternate!==null&&oe.delete(Be.key===null?pe:Be.key),O=d(Be,O,pe),Ce===null?re=Be:Ce.sibling=Be,Ce=Be);return t&&oe.forEach(function(cA){return i(V,cA)}),je&&vs(V,pe),re}function lt(V,O,U,K){if(typeof U=="object"&&U!==null&&U.type===g&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case f:e:{for(var re=U.key;O!==null;){if(O.key===re){if(re=U.type,re===g){if(O.tag===7){a(V,O.sibling),K=h(O,U.props.children),K.return=V,V=K;break e}}else if(O.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ue&&xp(re)===O.type){a(V,O.sibling),K=h(O,U.props),Lo(K,U),K.return=V,V=K;break e}a(V,O);break}else i(V,O);O=O.sibling}U.type===g?(K=Ns(U.props.children,V.mode,K,U.key),K.return=V,V=K):(K=Gu(U.type,U.key,U.props,null,V.mode,K),Lo(K,U),K.return=V,V=K)}return v(V);case m:e:{for(re=U.key;O!==null;){if(O.key===re)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(V,O.sibling),K=h(O,U.children||[]),K.return=V,V=K;break e}else{a(V,O);break}else i(V,O);O=O.sibling}K=Vf(U,V.mode,K),K.return=V,V=K}return v(V);case ue:return re=U._init,U=re(U._payload),lt(V,O,U,K)}if(te(U))return se(V,O,U,K);if(Ae(U)){if(re=Ae(U),typeof re!="function")throw Error(s(150));return U=re.call(U),Te(V,O,U,K)}if(typeof U.then=="function")return lt(V,O,Ru(U),K);if(U.$$typeof===j)return lt(V,O,qu(V,U),K);Iu(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(V,O.sibling),K=h(O,U),K.return=V,V=K):(a(V,O),K=Mf(U,V.mode,K),K.return=V,V=K),v(V)):a(V,O)}return function(V,O,U,K){try{Po=0;var re=lt(V,O,U,K);return Ea=null,re}catch(oe){if(oe===Mo)throw oe;var Ce=kn(29,oe,null,V.mode);return Ce.lanes=K,Ce.return=V,Ce}finally{}}}var Ts=Mp(!0),Vp=Mp(!1),Ta=Ue(null),Cu=Ue(0);function Pp(t,i){t=Fi,Ge(Cu,t),Ge(Ta,i),Fi=t|i.baseLanes}function jh(){Ge(Cu,Fi),Ge(Ta,Ta.current)}function Bh(){Fi=Cu.current,rt(Ta),rt(Cu)}var Dn=Ue(null),oi=null;function Er(t){var i=t.alternate;Ge(At,At.current&1),Ge(Dn,t),oi===null&&(i===null||Ta.current!==null||i.memoizedState!==null)&&(oi=t)}function Lp(t){if(t.tag===22){if(Ge(At,At.current),Ge(Dn,t),oi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(oi=t)}}else Tr()}function Tr(){Ge(At,At.current),Ge(Dn,Dn.current)}function Mi(t){rt(Dn),oi===t&&(oi=null),rt(At)}var At=Ue(0);function Du(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var WT=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},ZT=r.unstable_scheduleCallback,JT=r.unstable_NormalPriority,St={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new WT,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&ZT(JT,function(){t.controller.abort()})}var zo=null,Hh=0,ba=0,Aa=null;function eb(t,i){if(zo===null){var a=zo=[];Hh=0,ba=Xf(),Aa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hh++,i.then(Up,Up),i}function Up(){if(--Hh===0&&zo!==null){Aa!==null&&(Aa.status="fulfilled");var t=zo;zo=null,ba=0,Aa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function tb(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var zp=A.S;A.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eb(t,i),zp!==null&&zp(t,i)};var bs=Ue(null);function Fh(){var t=bs.current;return t!==null?t:Xe.pooledCache}function Nu(t,i){i===null?Ge(bs,bs.current):Ge(bs,i.pool)}function jp(){var t=Fh();return t===null?null:{parent:St._currentValue,pool:t}}var br=0,Ie=null,Ke=null,pt=null,Ou=!1,Sa=!1,As=!1,ku=0,jo=0,wa=null,nb=0;function ft(){throw Error(s(321))}function Gh(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fn(t[a],i[a]))return!1;return!0}function Kh(t,i,a,l,h,d){return br=d,Ie=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,A.H=t===null||t.memoizedState===null?Ss:Ar,As=!1,d=a(l,h),As=!1,Sa&&(d=qp(i,a,l,h)),Bp(t),d}function Bp(t){A.H=li;var i=Ke!==null&&Ke.next!==null;if(br=0,pt=Ke=Ie=null,Ou=!1,jo=0,wa=null,i)throw Error(s(300));t===null||kt||(t=t.dependencies,t!==null&&Bu(t)&&(kt=!0))}function qp(t,i,a,l){Ie=t;var h=0;do{if(Sa&&(wa=null),jo=0,Sa=!1,25<=h)throw Error(s(301));if(h+=1,pt=Ke=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}A.H=ws,d=i(a,l)}while(Sa);return d}function ib(){var t=A.H,i=t.useState()[0];return i=typeof i.then=="function"?Bo(i):i,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Ie.flags|=1024),i}function Qh(){var t=ku!==0;return ku=0,t}function Yh(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function $h(t){if(Ou){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ou=!1}br=0,pt=Ke=Ie=null,Sa=!1,jo=ku=0,wa=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ie.memoizedState=pt=t:pt=pt.next=t,pt}function gt(){if(Ke===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var i=pt===null?Ie.memoizedState:pt.next;if(i!==null)pt=i,Ke=t;else{if(t===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},pt===null?Ie.memoizedState=pt=t:pt=pt.next=t}return pt}var xu;xu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Bo(t){var i=jo;return jo+=1,wa===null&&(wa=[]),t=Op(wa,t,i),i=Ie,(pt===null?i.memoizedState:pt.next)===null&&(i=i.alternate,A.H=i===null||i.memoizedState===null?Ss:Ar),t}function Mu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===j)return Ft(t)}throw Error(s(438,String(t)))}function Xh(t){var i=null,a=Ie.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=xu(),Ie.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=Ee;return i.index++,a}function Vi(t,i){return typeof i=="function"?i(t):i}function Vu(t){var i=gt();return Wh(i,Ke,t)}function Wh(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=v=null,w=null,x=i,F=!1;do{var Y=x.lane&-536870913;if(Y!==x.lane?(Pe&Y)===Y:(br&Y)===Y){var z=x.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),Y===ba&&(F=!0);else if((br&z)===z){x=x.next,z===ba&&(F=!0);continue}else Y={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=Y,v=d):w=w.next=Y,Ie.lanes|=z,kr|=z;Y=x.action,As&&a(d,Y),d=x.hasEagerState?x.eagerState:a(d,Y)}else z={lane:Y,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,Ie.lanes|=Y,kr|=Y;x=x.next}while(x!==null&&x!==i);if(w===null?v=d:w.next=E,!fn(d,t.memoizedState)&&(kt=!0,F&&(a=Aa,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Zh(t){var i=gt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(kt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Hp(t,i,a){var l=Ie,h=gt(),d=je;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Ke||h).memoizedState,a);if(v&&(h.memoizedState=a,kt=!0),h=h.queue,tf(Kp.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||pt!==null&&pt.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Gp.bind(null,l,h,a,i),{destroy:void 0},null),Xe===null)throw Error(s(349));d||(br&60)!==0||Fp(l,i,a)}return a}function Fp(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ie.updateQueue,i===null?(i=xu(),Ie.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Gp(t,i,a,l){i.value=a,i.getSnapshot=l,Qp(i)&&Yp(t)}function Kp(t,i,a){return a(function(){Qp(i)&&Yp(t)})}function Qp(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fn(t,a)}catch{return!0}}function Yp(t){var i=vr(t,2);i!==null&&nn(i,t,2)}function Jh(t){var i=an();if(typeof t=="function"){var a=t;if(t=a(),As){$n(!0);try{a()}finally{$n(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},i}function $p(t,i,a,l){return t.baseState=a,Wh(t,Ke,typeof l=="function"?l:Vi)}function rb(t,i,a,l,h){if(Uu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};A.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Xp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Xp(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=A.T,v={};A.T=v;try{var E=a(h,l),w=A.S;w!==null&&w(v,E),Wp(t,i,E)}catch(x){ef(t,i,x)}finally{A.T=d}}else try{d=a(h,l),Wp(t,i,d)}catch(x){ef(t,i,x)}}function Wp(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Zp(t,i,l)},function(l){return ef(t,i,l)}):Zp(t,i,a)}function Zp(t,i,a){i.status="fulfilled",i.value=a,Jp(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Xp(t,a)))}function ef(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Jp(i),i=i.next;while(i!==l)}t.action=null}function Jp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function eg(t,i){return i}function tg(t,i){if(je){var a=Xe.formState;if(a!==null){e:{var l=Ie;if(je){if(Lt){t:{for(var h=Lt,d=ai;h.nodeType!==8;){if(!d){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=Fn(h.nextSibling),l=h.data==="F!";break e}}Es(l)}l=!1}l&&(i=a[0])}}return a=an(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:i},a.queue=l,a=vg.bind(null,Ie,l),l.dispatch=a,l=Jh(!1),d=of.bind(null,Ie,!1,l.queue),l=an(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=rb.bind(null,Ie,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function ng(t){var i=gt();return ig(i,Ke,t)}function ig(t,i,a){i=Wh(t,i,eg)[0],t=Vu(Vi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Bo(i):i;var l=gt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ie.flags|=2048,Ra(9,sb.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function sb(t,i){t.action=i}function rg(t){var i=gt(),a=Ke;if(a!==null)return ig(i,a,t);gt(),i=i.memoizedState,a=gt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ra(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Ie.updateQueue,i===null&&(i=xu(),Ie.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function sg(){return gt().memoizedState}function Pu(t,i,a,l){var h=an();Ie.flags|=t,h.memoizedState=Ra(1|i,a,{destroy:void 0},l===void 0?null:l)}function Lu(t,i,a,l){var h=gt();l=l===void 0?null:l;var d=h.memoizedState.inst;Ke!==null&&l!==null&&Gh(l,Ke.memoizedState.deps)?h.memoizedState=Ra(i,a,d,l):(Ie.flags|=t,h.memoizedState=Ra(1|i,a,d,l))}function ag(t,i){Pu(8390656,8,t,i)}function tf(t,i){Lu(2048,8,t,i)}function og(t,i){return Lu(4,2,t,i)}function lg(t,i){return Lu(4,4,t,i)}function ug(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function cg(t,i,a){a=a!=null?a.concat([t]):null,Lu(4,4,ug.bind(null,i,t),a)}function nf(){}function hg(t,i){var a=gt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Gh(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function fg(t,i){var a=gt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Gh(i,l[1]))return l[0];if(l=t(),As){$n(!0);try{t()}finally{$n(!1)}}return a.memoizedState=[l,i],l}function rf(t,i,a){return a===void 0||(br&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=m_(),Ie.lanes|=t,kr|=t,a)}function dg(t,i,a,l){return fn(a,i)?a:Ta.current!==null?(t=rf(t,a,l),fn(t,i)||(kt=!0),t):(br&42)===0?(kt=!0,t.memoizedState=a):(t=m_(),Ie.lanes|=t,kr|=t,i)}function mg(t,i,a,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var v=A.T,E={};A.T=E,of(t,!1,i,a);try{var w=h(),x=A.S;if(x!==null&&x(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=tb(w,l);qo(t,i,F,gn(t))}else qo(t,i,l,gn(t))}catch(Y){qo(t,i,{then:function(){},status:"rejected",reason:Y},gn())}finally{ne.p=d,A.T=v}}function ab(){}function sf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=pg(t).queue;mg(t,h,i,Re,a===null?ab:function(){return gg(t),a(l)})}function pg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Re,baseState:Re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Re},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function gg(t){var i=pg(t).next.queue;qo(t,i,{},gn())}function af(){return Ft(ll)}function _g(){return gt().memoizedState}function yg(){return gt().memoizedState}function ob(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();t=Rr(a);var l=Ir(i,t,a);l!==null&&(nn(l,i,a),Go(l,i,a)),i={cache:qh()},t.payload=i;return}i=i.return}}function lb(t,i,a){var l=gn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(t)?Eg(i,a):(a=Vh(t,i,a,l),a!==null&&(nn(a,t,l),Tg(a,i,l)))}function vg(t,i,a){var l=gn();qo(t,i,a,l)}function qo(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(t))Eg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,fn(E,v))return Tu(t,i,h,0),Xe===null&&Eu(),!1}catch{}finally{}if(a=Vh(t,i,h,l),a!==null)return nn(a,t,l),Tg(a,i,l),!0}return!1}function of(t,i,a,l){if(l={lane:2,revertLane:Xf(),action:l,hasEagerState:!1,eagerState:null,next:null},Uu(t)){if(i)throw Error(s(479))}else i=Vh(t,a,l,2),i!==null&&nn(i,t,2)}function Uu(t){var i=t.alternate;return t===Ie||i!==null&&i===Ie}function Eg(t,i){Sa=Ou=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Tg(t,i,a){if((a&4194176)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ur(t,a)}}var li={readContext:Ft,use:Mu,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft};li.useCacheRefresh=ft,li.useMemoCache=ft,li.useHostTransitionStatus=ft,li.useFormState=ft,li.useActionState=ft,li.useOptimistic=ft;var Ss={readContext:Ft,use:Mu,useCallback:function(t,i){return an().memoizedState=[t,i===void 0?null:i],t},useContext:Ft,useEffect:ag,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Pu(4194308,4,ug.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Pu(4194308,4,t,i)},useInsertionEffect:function(t,i){Pu(4,2,t,i)},useMemo:function(t,i){var a=an();i=i===void 0?null:i;var l=t();if(As){$n(!0);try{t()}finally{$n(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=an();if(a!==void 0){var h=a(i);if(As){$n(!0);try{a(i)}finally{$n(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=lb.bind(null,Ie,t),[l.memoizedState,t]},useRef:function(t){var i=an();return t={current:t},i.memoizedState=t},useState:function(t){t=Jh(t);var i=t.queue,a=vg.bind(null,Ie,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,i){var a=an();return rf(a,t,i)},useTransition:function(){var t=Jh(!1);return t=mg.bind(null,Ie,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ie,h=an();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));(Pe&60)!==0||Fp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ag(Kp.bind(null,l,d,t),[t]),l.flags|=2048,Ra(9,Gp.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=an(),i=Xe.identifierPrefix;if(je){var a=xi,l=ki;a=(l&~(1<<32-Zt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ku++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=nb++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return an().memoizedState=ob.bind(null,Ie)}};Ss.useMemoCache=Xh,Ss.useHostTransitionStatus=af,Ss.useFormState=tg,Ss.useActionState=tg,Ss.useOptimistic=function(t){var i=an();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=of.bind(null,Ie,!0,a),a.dispatch=i,[t,i]};var Ar={readContext:Ft,use:Mu,useCallback:hg,useContext:Ft,useEffect:tf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:fg,useReducer:Vu,useRef:sg,useState:function(){return Vu(Vi)},useDebugValue:nf,useDeferredValue:function(t,i){var a=gt();return dg(a,Ke.memoizedState,t,i)},useTransition:function(){var t=Vu(Vi)[0],i=gt().memoizedState;return[typeof t=="boolean"?t:Bo(t),i]},useSyncExternalStore:Hp,useId:_g};Ar.useCacheRefresh=yg,Ar.useMemoCache=Xh,Ar.useHostTransitionStatus=af,Ar.useFormState=ng,Ar.useActionState=ng,Ar.useOptimistic=function(t,i){var a=gt();return $p(a,Ke,t,i)};var ws={readContext:Ft,use:Mu,useCallback:hg,useContext:Ft,useEffect:tf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:fg,useReducer:Zh,useRef:sg,useState:function(){return Zh(Vi)},useDebugValue:nf,useDeferredValue:function(t,i){var a=gt();return Ke===null?rf(a,t,i):dg(a,Ke.memoizedState,t,i)},useTransition:function(){var t=Zh(Vi)[0],i=gt().memoizedState;return[typeof t=="boolean"?t:Bo(t),i]},useSyncExternalStore:Hp,useId:_g};ws.useCacheRefresh=yg,ws.useMemoCache=Xh,ws.useHostTransitionStatus=af,ws.useFormState=rg,ws.useActionState=rg,ws.useOptimistic=function(t,i){var a=gt();return Ke!==null?$p(a,Ke,t,i):(a.baseState=t,[t,a.queue.dispatch])};function lf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={isMounted:function(t){return(t=t._reactInternals)?ce(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=gn(),h=Rr(l);h.payload=i,a!=null&&(h.callback=a),i=Ir(t,h,l),i!==null&&(nn(i,t,l),Go(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=gn(),h=Rr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ir(t,h,l),i!==null&&(nn(i,t,l),Go(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=gn(),l=Rr(a);l.tag=2,i!=null&&(l.callback=i),i=Ir(t,l,a),i!==null&&(nn(i,t,a),Go(i,t,a))}};function bg(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Do(a,l)||!Do(h,d):!0}function Ag(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&uf.enqueueReplaceState(i,i.state,null)}function Rs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=C({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Sg(t){zu(t)}function wg(t){console.error(t)}function Rg(t){zu(t)}function ju(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ig(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function cf(t,i,a){return a=Rr(a),a.tag=3,a.payload={element:null},a.callback=function(){ju(t,i)},a}function Cg(t){return t=Rr(t),t.tag=3,t}function Dg(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Ig(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ig(i,a,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function ub(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Fo(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return oi===null?Gf():a.alternate===null&&ot===0&&(ot=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===zh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Qf(t,l,h)),!1;case 22:return a.flags|=65536,l===zh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Qf(t,l,h)),!1}throw Error(s(435,a.tag))}return Qf(t,l,h),Gf(),!1}if(je)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Uh&&(t=Error(s(422),{cause:l}),xo(Rn(t,a)))):(l!==Uh&&(i=Error(s(423),{cause:l}),xo(Rn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Rn(l,a),h=cf(t.stateNode,l,h),wf(t,h),ot!==4&&(ot=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),Jo===null?Jo=[d]:Jo.push(d),ot!==4&&(ot=2),i===null)return!0;l=Rn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=cf(a.stateNode,l,t),wf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Cg(h),Dg(h,t,a,l),wf(a,h),!1}a=a.return}while(a!==null);return!1}var Ng=Error(s(461)),kt=!1;function Ut(t,i,a,l){i.child=t===null?Vp(i,null,a,l):Ts(i,t.child,a,l)}function Og(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Cs(i),l=Kh(t,i,a,v,d,h),E=Qh(),t!==null&&!kt?(Yh(t,i,h),Pi(t,i,h)):(je&&E&&Ph(i),i.flags|=1,Ut(t,i,l,h),i.child)}function kg(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!xf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,xg(t,i,d,l,h)):(t=Gu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!vf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(v,l)&&t.ref===i.ref)return Pi(t,i,h)}return i.flags|=1,t=Or(d,l),t.ref=i.ref,t.return=i,i.child=t}function xg(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Do(d,l)&&t.ref===i.ref)if(kt=!1,i.pendingProps=l=d,vf(t,h))(t.flags&131072)!==0&&(kt=!0);else return i.lanes=t.lanes,Pi(t,i,h)}return hf(t,i,a,l,h)}function Mg(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(Ho(t,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Vg(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nu(i,v!==null?v.cachePool:null),v!==null?Pp(i,v):jh(),Lp(i);else return i.lanes=i.childLanes=536870912,Vg(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Nu(i,v.cachePool),Pp(i,v),Tr(),i.memoizedState=null):(t!==null&&Nu(i,null),jh(),Tr());return Ut(t,i,h,a),i.child}function Vg(t,i,a,l){var h=Fh();return h=h===null?null:{parent:St._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Nu(i,null),jh(),Lp(i),t!==null&&Fo(t,i,l,!0),null}function Ho(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function hf(t,i,a,l,h){return Cs(i),a=Kh(t,i,a,l,void 0,h),l=Qh(),t!==null&&!kt?(Yh(t,i,h),Pi(t,i,h)):(je&&l&&Ph(i),i.flags|=1,Ut(t,i,a,h),i.child)}function Pg(t,i,a,l,h,d){return Cs(i),i.updateQueue=null,a=qp(i,l,a,h),Bp(t),l=Qh(),t!==null&&!kt?(Yh(t,i,d),Pi(t,i,d)):(je&&l&&Ph(i),i.flags|=1,Ut(t,i,a,d),i.child)}function Lg(t,i,a,l,h){if(Cs(i),i.stateNode===null){var d=_a,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ft(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Af(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ft(v):_a,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(lf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&uf.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,w=Rs(a,E);d.props=w;var x=d.context,F=a.contextType;v=_a,typeof F=="object"&&F!==null&&(v=Ft(F));var Y=a.getDerivedStateFromProps;F=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||x!==v)&&Ag(i,d,l,v),wr=!1;var z=i.memoizedState;d.state=z,Qo(i,l,d,h),Ko(),x=i.memoizedState,E||z!==x||wr?(typeof Y=="function"&&(lf(i,a,Y,l),x=i.memoizedState),(w=wr||bg(i,a,w,l,z,x,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=x),d.props=l,d.state=x,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Sf(t,i),v=i.memoizedProps,F=Rs(a,v),d.props=F,Y=i.pendingProps,z=d.context,x=a.contextType,w=_a,typeof x=="object"&&x!==null&&(w=Ft(x)),E=a.getDerivedStateFromProps,(x=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||z!==w)&&Ag(i,d,l,w),wr=!1,z=i.memoizedState,d.state=z,Qo(i,l,d,h),Ko();var H=i.memoizedState;v!==Y||z!==H||wr||t!==null&&t.dependencies!==null&&Bu(t.dependencies)?(typeof E=="function"&&(lf(i,a,E,l),H=i.memoizedState),(F=wr||bg(i,a,F,l,z,H,w)||t!==null&&t.dependencies!==null&&Bu(t.dependencies))?(x||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ho(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ts(i,t.child,null,h),i.child=Ts(i,null,a,h)):Ut(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Pi(t,i,h),t}function Ug(t,i,a,l){return ko(),i.flags|=256,Ut(t,i,a,l),i.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:jp()}}function mf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=xn),t}function zg(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(At.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(je){if(h?Er(i):Tr(),je){var E=Lt,w;if(w=E){e:{for(w=E,E=ai;w.nodeType!==8;){if(!E){E=null;break e}if(w=Fn(w.nextSibling),w===null){E=null;break e}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:ys!==null?{id:ki,overflow:xi}:null,retryLane:536870912},w=kn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,tn=i,Lt=null,w=!0):w=!1}w||Es(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?i.lanes=16:i.lanes=536870912,null;Mi(i)}return E=l.children,l=l.fallback,h?(Tr(),h=i.mode,E=gf({mode:"hidden",children:E},h),l=Ns(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=df(a),h.childLanes=mf(t,v,a),i.memoizedState=ff,l):(Er(i),pf(i,E))}if(w=t.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(Er(i),i.flags&=-257,i=_f(t,i,a)):i.memoizedState!==null?(Tr(),i.child=t.child,i.flags|=128,i=null):(Tr(),h=l.fallback,E=i.mode,l=gf({mode:"visible",children:l.children},E),h=Ns(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ts(i,t.child,null,a),l=i.child,l.memoizedState=df(a),l.childLanes=mf(t,v,a),i.memoizedState=ff,i=h);else if(Er(i),E.data==="$!"){if(v=E.nextSibling&&E.nextSibling.dataset,v)var x=v.dgst;v=x,l=Error(s(419)),l.stack="",l.digest=v,xo({value:l,source:null,stack:null}),i=_f(t,i,a)}else if(kt||Fo(t,i,a,!1),v=(a&t.childLanes)!==0,kt||v){if(v=Xe,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane)throw w.retryLane=l,vr(t,l),nn(v,t,l),Ng}E.data==="$?"||Gf(),i=_f(t,i,a)}else E.data==="$?"?(i.flags|=128,i.child=t.child,i=Sb.bind(null,t),E._reactRetry=i,i=null):(t=w.treeContext,Lt=Fn(E.nextSibling),tn=i,je=!0,qn=null,ai=!1,t!==null&&(In[Cn++]=ki,In[Cn++]=xi,In[Cn++]=ys,ki=t.id,xi=t.overflow,ys=i),i=pf(i,l.children),i.flags|=4096);return i}return h?(Tr(),h=l.fallback,E=i.mode,w=t.child,x=w.sibling,l=Or(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&31457280,x!==null?h=Or(x,h):(h=Ns(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E===null?E=df(a):(w=E.cachePool,w!==null?(x=St._currentValue,w=w.parent!==x?{parent:x,pool:x}:w):w=jp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=mf(t,v,a),i.memoizedState=ff,l):(Er(i),a=t.child,t=a.sibling,a=Or(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function pf(t,i){return i=gf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function gf(t,i){return h_(t,i,0,null)}function _f(t,i,a){return Ts(i,t.child,null,a),t=pf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function jg(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tf(t.return,i,a)}function yf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Bg(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ut(t,i,l.children,a),l=At.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,a,i);else if(t.tag===19)jg(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ge(At,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Du(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),yf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Du(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}yf(i,!0,a,null,d);break;case"together":yf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),kr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Fo(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Or(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Or(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function vf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Bu(t)))}function cb(t,i,a){switch(i.tag){case 3:ir(i,i.stateNode.containerInfo),Sr(i,St,t.memoizedState.cache),ko();break;case 27:case 5:oo(i);break;case 4:ir(i,i.stateNode.containerInfo);break;case 10:Sr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(i),i.flags|=128,null):(a&i.child.childLanes)!==0?zg(t,i,a):(Er(i),t=Pi(t,i,a),t!==null?t.sibling:null);Er(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Fo(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Bg(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ge(At,At.current),l)break;return null;case 22:case 23:return i.lanes=0,Mg(t,i,a);case 24:Sr(i,St,t.memoizedState.cache)}return Pi(t,i,a)}function qg(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)kt=!0;else{if(!vf(t,a)&&(i.flags&128)===0)return kt=!1,cb(t,i,a);kt=(t.flags&131072)!==0}else kt=!1,je&&(i.flags&1048576)!==0&&Rp(i,Su,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")xf(l)?(t=Rs(l,t),i.tag=1,i=Lg(null,i,l,t,a)):(i.tag=0,i=hf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===$){i.tag=11,i=Og(null,i,l,t,a);break e}else if(h===he){i.tag=14,i=kg(null,i,l,t,a);break e}}throw i=S(l)||l,Error(s(306,i,""))}}return i;case 0:return hf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Rs(l,i.pendingProps),Lg(t,i,l,h,a);case 3:e:{if(ir(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,Sf(t,i),Qo(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Sr(i,St,d),d!==h.cache&&bf(i,[St],a,!0),Ko(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Ug(t,i,d,a);break e}else if(d!==l){l=Rn(Error(s(424)),i),xo(l),i=Ug(t,i,d,a);break e}else for(Lt=Fn(i.stateNode.containerInfo.firstChild),tn=i,je=!0,qn=null,ai=!0,a=Vp(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),d===l){i=Pi(t,i,a);break e}Ut(t,i,d,a)}i=i.child}return i;case 26:return Ho(t,i),t===null?(a=G_(i.type,null,i.pendingProps,null))?i.memoizedState=a:je||(a=i.type,t=i.pendingProps,l=ic(yn.current).createElement(a),l[Dt]=i,l[Et]=t,zt(l,a,t),Ze(l),i.stateNode=l):i.memoizedState=G_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return oo(i),t===null&&je&&(l=i.stateNode=q_(i.type,i.pendingProps,yn.current),tn=i,ai=!0,Lt=Fn(l.firstChild)),l=i.pendingProps.children,t!==null||je?Ut(t,i,l,a):i.child=Ts(i,null,l,a),Ho(t,i),i.child;case 5:return t===null&&je&&((h=l=Lt)&&(l=jb(l,i.type,i.pendingProps,ai),l!==null?(i.stateNode=l,tn=i,Lt=Fn(l.firstChild),ai=!1,h=!0):h=!1),h||Es(i)),oo(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,sd(h,d)?l=null:v!==null&&sd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Kh(t,i,ib,null,null,a),ll._currentValue=h),Ho(t,i),Ut(t,i,l,a),i.child;case 6:return t===null&&je&&((t=a=Lt)&&(a=Bb(a,i.pendingProps,ai),a!==null?(i.stateNode=a,tn=i,Lt=null,t=!0):t=!1),t||Es(i)),null;case 13:return zg(t,i,a);case 4:return ir(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ts(i,null,l,a):Ut(t,i,l,a),i.child;case 11:return Og(t,i,i.type,i.pendingProps,a);case 7:return Ut(t,i,i.pendingProps,a),i.child;case 8:return Ut(t,i,i.pendingProps.children,a),i.child;case 12:return Ut(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Sr(i,i.type,l.value),Ut(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Cs(i),h=Ft(h),l=l(h),i.flags|=1,Ut(t,i,l,a),i.child;case 14:return kg(t,i,i.type,i.pendingProps,a);case 15:return xg(t,i,i.type,i.pendingProps,a);case 19:return Bg(t,i,a);case 22:return Mg(t,i,a);case 24:return Cs(i),l=Ft(St),t===null?(h=Fh(),h===null&&(h=Xe,d=qh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Af(i),Sr(i,St,h)):((t.lanes&a)!==0&&(Sf(t,i),Qo(i,null,null,a),Ko()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Sr(i,St,l)):(l=d.cache,Sr(i,St,l),l!==h.cache&&bf(i,[St],a,!0))),Ut(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var Ef=Ue(null),Is=null,Li=null;function Sr(t,i,a){Ge(Ef,i._currentValue),i._currentValue=a}function Ui(t){t._currentValue=Ef.current,rt(Ef)}function Tf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function bf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Tf(d.return,a,t),l||(v=null);break e}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Tf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Fo(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;fn(h.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(h===nr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ll):t=[ll])}h=h.return}t!==null&&bf(i,t,a,l),i.flags|=262144}function Bu(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cs(t){Is=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Hg(Is,t)}function qu(t,i){return Is===null&&Cs(t),Hg(t,i)}function Hg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(s(308));Li=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Li=Li.next=i;return a}var wr=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(et&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=bu(t),Sp(t,null,a),i}return Tu(t,l,i,a),bu(t)}function Go(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ur(t,a)}}function wf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Rf=!1;function Ko(){if(Rf){var t=Aa;if(t!==null)throw t}}function Qo(t,i,a,l){Rf=!1;var h=t.updateQueue;wr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,x=w.next;w.next=null,v===null?d=x:v.next=x,v=w;var F=t.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=x:E.next=x,F.lastBaseUpdate=w))}if(d!==null){var Y=h.baseState;v=0,F=x=w=null,E=d;do{var z=E.lane&-536870913,H=z!==E.lane;if(H?(Pe&z)===z:(l&z)===z){z!==0&&z===ba&&(Rf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var se=t,Te=E;z=i;var lt=a;switch(Te.tag){case 1:if(se=Te.payload,typeof se=="function"){Y=se.call(lt,Y,z);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=Te.payload,z=typeof se=="function"?se.call(lt,Y,z):se,z==null)break e;Y=C({},Y,z);break e;case 2:wr=!0}}z=E.callback,z!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[z]:H.push(z))}else H={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(x=F=H,w=Y):F=F.next=H,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);F===null&&(w=Y),h.baseState=w,h.firstBaseUpdate=x,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),kr|=v,t.lanes=v,t.memoizedState=Y}}function Fg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Gg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fg(a[t],i)}function Yo(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){$e(i,i.return,E)}}function Cr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a;try{E()}catch(x){$e(h,w,x)}}}l=l.next}while(l!==d)}}catch(x){$e(i,i.return,x)}}function Kg(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Gg(i,a)}catch(l){$e(t,t.return,l)}}}function Qg(t,i,a){a.props=Rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){$e(t,i,l)}}function Ds(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){$e(t,i,d)}}function dn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$e(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$e(t,i,h)}else a.current=null}function Yg(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$e(t,t.return,h)}}function $g(t,i,a){try{var l=t.stateNode;Vb(l,t.type,a,i),l[Et]=i}catch(h){$e(t,t.return,h)}}function Xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Cf(t,i,a),t=t.sibling;t!==null;)Cf(t,i,a),t=t.sibling}function Hu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Hu(t,i,a),t=t.sibling;t!==null;)Hu(t,i,a),t=t.sibling}var zi=!1,at=!1,Df=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,xt=null,Zg=!1;function hb(t,i){if(t=t.containerInfo,id=uc,t=pp(t),Nh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,E=-1,w=-1,x=0,F=0,Y=t,z=null;t:for(;;){for(var H;Y!==a||h!==0&&Y.nodeType!==3||(E=v+h),Y!==d||l!==0&&Y.nodeType!==3||(w=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(H=Y.firstChild)!==null;)z=Y,Y=H;for(;;){if(Y===t)break t;if(z===a&&++x===h&&(E=v),z===d&&++F===l&&(w=v),(H=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=H}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},uc=!1,xt=i;xt!==null;)if(i=xt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,xt=t;else for(;xt!==null;){switch(i=xt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var se=Rs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(se,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Te){$e(a,a.return,Te)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,xt=t;break}xt=i.return}return se=Zg,Zg=!1,se}function Jg(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Bi(t,a),l&4&&Yo(5,a);break;case 1:if(Bi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(E){$e(a,a.return,E)}else{var h=Rs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){$e(a,a.return,E)}}l&64&&Kg(a),l&512&&Ds(a,a.return);break;case 3:if(Bi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Gg(l,t)}catch(E){$e(a,a.return,E)}}break;case 26:Bi(t,a),l&512&&Ds(a,a.return);break;case 27:case 5:Bi(t,a),i===null&&l&4&&Yg(a),l&512&&Ds(a,a.return);break;case 12:Bi(t,a);break;case 13:Bi(t,a),l&4&&n_(t,a);break;case 22:if(h=a.memoizedState!==null||zi,!h){i=i!==null&&i.memoizedState!==null||at;var d=zi,v=at;zi=h,(at=i)&&!v?Dr(t,a,(a.subtreeFlags&8772)!==0):Bi(t,a),zi=d,at=v}l&512&&(a.memoizedProps.mode==="manual"?Ds(a,a.return):dn(a,a.return));break;default:Bi(t,a)}}function e_(t){var i=t.alternate;i!==null&&(t.alternate=null,e_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ss(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _t=null,mn=!1;function ji(t,i,a){for(a=a.child;a!==null;)t_(t,i,a),a=a.sibling}function t_(t,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(rr,a)}catch{}switch(a.tag){case 26:at||dn(a,i),ji(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||dn(a,i);var l=_t,h=mn;for(_t=a.stateNode,ji(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);ss(a),_t=l,mn=h;break;case 5:at||dn(a,i);case 6:h=_t;var d=mn;if(_t=null,ji(t,i,a),_t=h,mn=d,_t!==null)if(mn)try{t=_t,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){$e(a,i,v)}else try{_t.removeChild(a.stateNode)}catch(v){$e(a,i,v)}break;case 18:_t!==null&&(mn?(i=_t,a=a.stateNode,i.nodeType===8?od(i.parentNode,a):i.nodeType===1&&od(i,a),fl(i)):od(_t,a.stateNode));break;case 4:l=_t,h=mn,_t=a.stateNode.containerInfo,mn=!0,ji(t,i,a),_t=l,mn=h;break;case 0:case 11:case 14:case 15:at||Cr(2,a,i),at||Cr(4,a,i),ji(t,i,a);break;case 1:at||(dn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Qg(a,i,l)),ji(t,i,a);break;case 21:ji(t,i,a);break;case 22:at||dn(a,i),at=(l=at)||a.memoizedState!==null,ji(t,i,a),at=l;break;default:ji(t,i,a)}}function n_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fl(t)}catch(a){$e(i,i.return,a)}}function fb(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Wg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Wg),i;default:throw Error(s(435,t.tag))}}function Nf(t,i){var a=fb(t);i.forEach(function(l){var h=wb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Nn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 27:case 5:_t=E.stateNode,mn=!1;break e;case 3:_t=E.stateNode.containerInfo,mn=!0;break e;case 4:_t=E.stateNode.containerInfo,mn=!0;break e}E=E.return}if(_t===null)throw Error(s(160));t_(d,v,h),_t=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)i_(i,t),i=i.sibling}var Hn=null;function i_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(i,t),On(t),l&4&&(Cr(3,t,t.return),Yo(3,t),Cr(5,t,t.return));break;case 1:Nn(i,t),On(t),l&512&&(at||a===null||dn(a,a.return)),l&64&&zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Hn;if(Nn(i,t),On(t),l&512&&(at||a===null||dn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hr]||d[Dt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),zt(d,l,a),d[Dt]=t,Ze(d),l=d;break e;case"link":var v=Y_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Y_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Dt]=t,Ze(d),l=d}t.stateNode=l}else $_(h,t.type,t.stateNode);else t.stateNode=Q_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?$_(h,t.type,t.stateNode):Q_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$g(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var w=h.firstChild;w;){var x=w.nextSibling,F=w.nodeName;w[hr]||F==="HEAD"||F==="BODY"||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&w.rel.toLowerCase()==="stylesheet"||h.removeChild(w),w=x}for(var Y=t.type,z=h.attributes;z.length;)h.removeAttributeNode(z[0]);zt(h,Y,d),h[Dt]=t,h[Et]=d}catch(se){$e(t,t.return,se)}}case 5:if(Nn(i,t),On(t),l&512&&(at||a===null||dn(a,a.return)),t.flags&32){h=t.stateNode;try{Tn(h,"")}catch(se){$e(t,t.return,se)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,$g(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Df=!0);break;case 6:if(Nn(i,t),On(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(se){$e(t,t.return,se)}}break;case 3:if(ac=null,h=Hn,Hn=rc(i.containerInfo),Nn(i,t),Hn=h,On(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(i.containerInfo)}catch(se){$e(t,t.return,se)}Df&&(Df=!1,r_(t));break;case 4:l=Hn,Hn=rc(t.stateNode.containerInfo),Nn(i,t),On(t),Hn=l;break;case 12:Nn(i,t),On(t);break;case 13:Nn(i,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zf=rn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nf(t,l)));break;case 22:if(l&512&&(at||a===null||dn(a,a.return)),w=t.memoizedState!==null,x=a!==null&&a.memoizedState!==null,F=zi,Y=at,zi=F||w,at=Y||x,Nn(i,t),at=Y,zi=F,On(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=w?i._visibility&-2:i._visibility|1,w&&(i=zi||at,a===null||x||i||Ia(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){x=a=i;try{if(h=x.stateNode,w)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=x.stateNode,E=x.memoizedProps.style;var H=E!=null&&E.hasOwnProperty("display")?E.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(se){$e(x,x.return,se)}}}else if(i.tag===6){if(a===null){x=i;try{x.stateNode.nodeValue=w?"":x.memoizedProps}catch(se){$e(x,x.return,se)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Nf(t,a))));break;case 19:Nn(i,t),On(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nf(t,l)));break;case 21:break;default:Nn(i,t),On(t)}}function On(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Xg(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=If(t);Hu(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Tn(v,""),l.flags&=-33);var E=If(t);Hu(t,E,v);break;case 3:case 4:var w=l.stateNode.containerInfo,x=If(t);Cf(t,x,w);break;default:throw Error(s(161))}}}catch(F){$e(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function r_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;r_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Bi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Jg(t,i.alternate,i),i=i.sibling}function Ia(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Cr(4,i,i.return),Ia(i);break;case 1:dn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Qg(i,i.return,a),Ia(i);break;case 26:case 27:case 5:dn(i,i.return),Ia(i);break;case 22:dn(i,i.return),i.memoizedState===null&&Ia(i);break;default:Ia(i)}t=t.sibling}}function Dr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Dr(h,d,a),Yo(4,d);break;case 1:if(Dr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(x){$e(l,l.return,x)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Fg(w[h],E)}catch(x){$e(l,l.return,x)}}a&&v&64&&Kg(d),Ds(d,d.return);break;case 26:case 27:case 5:Dr(h,d,a),a&&l===null&&v&4&&Yg(d),Ds(d,d.return);break;case 12:Dr(h,d,a);break;case 13:Dr(h,d,a),a&&v&4&&n_(h,d);break;case 22:d.memoizedState===null&&Dr(h,d,a),Ds(d,d.return);break;default:Dr(h,d,a)}i=i.sibling}}function Of(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function kf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Uo(t))}function Nr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)s_(t,i,a,l),i=i.sibling}function s_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Nr(t,i,a,l),h&2048&&Yo(9,i);break;case 3:Nr(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Uo(t)));break;case 12:if(h&2048){Nr(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){$e(i,i.return,w)}}else Nr(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Nr(t,i,a,l):$o(t,i):d._visibility&4?Nr(t,i,a,l):(d._visibility|=4,Ca(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Of(i.alternate,i);break;case 24:Nr(t,i,a,l),h&2048&&kf(i.alternate,i);break;default:Nr(t,i,a,l)}}function Ca(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,E=a,w=l,x=v.flags;switch(v.tag){case 0:case 11:case 15:Ca(d,v,E,w,h),Yo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&4?Ca(d,v,E,w,h):$o(d,v):(F._visibility|=4,Ca(d,v,E,w,h)),h&&x&2048&&Of(v.alternate,v);break;case 24:Ca(d,v,E,w,h),h&&x&2048&&kf(v.alternate,v);break;default:Ca(d,v,E,w,h)}i=i.sibling}}function $o(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:$o(a,l),h&2048&&Of(l.alternate,l);break;case 24:$o(a,l),h&2048&&kf(l.alternate,l);break;default:$o(a,l)}i=i.sibling}}var Xo=8192;function Da(t){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 26:Da(t),t.flags&Xo&&t.memoizedState!==null&&eA(Hn,t.memoizedState,t.memoizedProps);break;case 5:Da(t);break;case 3:case 4:var i=Hn;Hn=rc(t.stateNode.containerInfo),Da(t),Hn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Xo,Xo=16777216,Da(t),Xo=i):Da(t));break;default:Da(t)}}function o_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Wo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xt=l,u_(l,t)}o_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l_(t),t=t.sibling}function l_(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&Cr(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,Fu(t)):Wo(t);break;default:Wo(t)}}function Fu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xt=l,u_(l,t)}o_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Cr(8,i,i.return),Fu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Fu(i));break;default:Fu(i)}t=t.sibling}}function u_(t,i){for(;xt!==null;){var a=xt;switch(a.tag){case 0:case 11:case 15:Cr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xt=l;else e:for(a=t;xt!==null;){l=xt;var h=l.sibling,d=l.return;if(e_(l),l===a){xt=null;break e}if(h!==null){h.return=d,xt=h;break e}xt=d}}}function db(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,i,a,l){return new db(t,i,a,l)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Or(t,i){var a=t.alternate;return a===null?(a=kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function c_(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Gu(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")xf(t)&&(v=1);else if(typeof t=="string")v=Zb(t,a,Wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case g:return Ns(a.children,h,d,i);case _:v=8,h|=24;break;case b:return t=kn(12,a,i,h|2),t.elementType=b,t.lanes=d,t;case J:return t=kn(13,a,i,h),t.elementType=J,t.lanes=d,t;case G:return t=kn(19,a,i,h),t.elementType=G,t.lanes=d,t;case le:return h_(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:case j:v=10;break e;case M:v=9;break e;case $:v=11;break e;case he:v=14;break e;case ue:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=kn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,a,l){return t=kn(7,t,l,i),t.lanes=a,t}function h_(t,i,a,l){t=kn(22,t,l,i),t.elementType=le,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=vr(d,2);v!==null&&(h._pendingVisibility|=2,nn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=vr(d,2);v!==null&&(h._pendingVisibility&=-3,nn(v,d,2))}}};return t.stateNode=h,t}function Mf(t,i,a){return t=kn(6,t,null,i),t.lanes=a,t}function Vf(t,i,a){return i=kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function qi(t){t.flags|=4}function f_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X_(i)){if(i=Dn.current,i!==null&&((Pe&4194176)===Pe?oi!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||i!==oi))throw Vo=zh,Dp;t.flags|=8192}}function Ku(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?or():536870912,t.lanes|=i,Oa|=i)}function Zo(t,i){if(!je)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Je(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function mb(t,i,a){var l=i.pendingProps;switch(Lh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(St),Ti(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Oo(i)?qi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Hf(qn),qn=null))),Je(i),null;case 26:return a=i.memoizedState,t===null?(qi(i),a!==null?(Je(i),f_(i,a)):(Je(i),i.flags&=-16777217)):a?a!==t.memoizedState?(qi(i),Je(i),f_(i,a)):(Je(i),i.flags&=-16777217):(t.memoizedProps!==l&&qi(i),Je(i),i.flags&=-16777217),null;case 27:Xs(i),a=yn.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Je(i),null}t=Wt.current,Oo(i)?Ip(i):(t=q_(h,l,a),i.stateNode=t,qi(i))}return Je(i),null;case 5:if(Xs(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Je(i),null}if(t=Wt.current,Oo(i))Ip(i);else{switch(h=ic(yn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Dt]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(zt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qi(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=yn.current,Oo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=tn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Dt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||P_(t.nodeValue,a)),t||Es(i)}else t=ic(t).createTextNode(l),t[Dt]=i,i.stateNode=t}return Je(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Oo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Dt]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),h=!1}else qn!==null&&(Hf(qn),qn=null),h=!0;if(!h)return i.flags&256?(Mi(i),i):(Mi(i),null)}if(Mi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Ku(i,i.updateQueue),Je(i),null;case 4:return Ti(),t===null&&ed(i.stateNode.containerInfo),Je(i),null;case 10:return Ui(i.type),Je(i),null;case 19:if(rt(At),h=i.memoizedState,h===null)return Je(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Zo(h,!1);else{if(ot!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Du(t),d!==null){for(i.flags|=128,Zo(h,!1),t=d.updateQueue,i.updateQueue=t,Ku(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)c_(a,t),a=a.sibling;return Ge(At,At.current&1|2),i.child}t=t.sibling}h.tail!==null&&rn()>Qu&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Du(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Ku(i,t),Zo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!je)return Je(i),null}else 2*rn()-h.renderingStartTime>Qu&&a!==536870912&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=rn(),i.sibling=null,t=At.current,Ge(At,l?t&1|2:t&1),i):(Je(i),null);case 22:case 23:return Mi(i),Bh(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),a=i.updateQueue,a!==null&&Ku(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&rt(bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(St),Je(i),null;case 25:return null}throw Error(s(156,i.tag))}function pb(t,i){switch(Lh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ui(St),Ti(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Xs(i),null;case 13:if(Mi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ko()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return rt(At),null;case 4:return Ti(),null;case 10:return Ui(i.type),null;case 22:case 23:return Mi(i),Bh(),t!==null&&rt(bs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ui(St),null;case 25:return null;default:return null}}function d_(t,i){switch(Lh(i),i.tag){case 3:Ui(St),Ti();break;case 26:case 27:case 5:Xs(i);break;case 4:Ti();break;case 13:Mi(i);break;case 19:rt(At);break;case 10:Ui(i.type);break;case 22:case 23:Mi(i),Bh(),t!==null&&rt(bs);break;case 24:Ui(St)}}var gb={getCacheForType:function(t){var i=Ft(St),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},_b=typeof WeakMap=="function"?WeakMap:Map,et=0,Xe=null,De=null,Pe=0,We=0,pn=null,Hi=!1,Na=!1,Pf=!1,Fi=0,ot=0,kr=0,Os=0,Lf=0,xn=0,Oa=0,Jo=null,ui=null,Uf=!1,zf=0,Qu=1/0,Yu=null,xr=null,$u=!1,ks=null,el=0,jf=0,Bf=null,tl=0,qf=null;function gn(){if((et&2)!==0&&Pe!==0)return Pe&-Pe;if(A.T!==null){var t=ba;return t!==0?t:Xf()}return tu()}function m_(){xn===0&&(xn=(Pe&536870912)===0||je?fo():536870912);var t=Dn.current;return t!==null&&(t.flags|=32),xn}function nn(t,i,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(ka(t,0),Gi(t,Pe,xn,!1)),ht(t,a),((et&2)===0||t!==Xe)&&(t===Xe&&((et&2)===0&&(Os|=a),ot===4&&Gi(t,Pe,xn,!1)),ci(t))}function p_(t,i,a){if((et&6)!==0)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||ar(t,i),h=l?Eb(t,i):Kf(t,i,!0),d=l;do{if(h===0){Na&&!l&&Gi(t,i,0,!1);break}else if(h===6)Gi(t,i,0,!Hi);else{if(a=t.current.alternate,d&&!yb(a)){h=Kf(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var E=t;h=Jo;var w=E.current.memoizedState.isDehydrated;if(w&&(ka(E,v).flags|=256),v=Kf(E,v,!1),v!==2){if(Pf&&!w){E.errorRecoveryDisabledLanes|=d,Os|=d,h=4;break e}d=ui,ui=h,d!==null&&Hf(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){ka(t,0),Gi(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){Gi(l,i,xn,!Hi);break e}break;case 2:ui=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=zf+300-rn(),10<d)){if(Gi(l,i,xn,!Hi),vn(l,0)!==0)break e;l.timeoutHandle=z_(g_.bind(null,l,a,ui,Yu,Uf,i,xn,Os,Oa,Hi,2,-0,0),d);break e}g_(l,a,ui,Yu,Uf,i,xn,Os,Oa,Hi,0,-0,0)}}break}while(!0);ci(t)}function Hf(t){ui===null?ui=t:ui.push.apply(ui,t)}function g_(t,i,a,l,h,d,v,E,w,x,F,Y,z){var H=i.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:Jb},a_(i),i=tA(),i!==null)){t.cancelPendingCommit=i(A_.bind(null,t,a,l,h,v,E,w,1,Y,z)),Gi(t,d,v,!x);return}A_(t,a,l,h,v,E,w,F,Y,z)}function yb(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gi(t,i,a,l){i&=~Lf,i&=~Os,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Zt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&lr(t,a,i)}function Xu(){return(et&6)===0?(nl(0),!1):!0}function Ff(){if(De!==null){if(We===0)var t=De.return;else t=De,Li=Is=null,$h(t),Ea=null,Po=0,t=De;for(;t!==null;)d_(t.alternate,t),t=t.return;De=null}}function ka(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Lb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ff(),Xe=t,De=a=Or(t.current,null),Pe=i,We=0,pn=null,Hi=!1,Na=ar(t,i),Pf=!1,Oa=xn=Lf=Os=kr=ot=0,ui=Jo=null,Uf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Zt(l),d=1<<h;i|=t[h],l&=~d}return Fi=i,Eu(),a}function __(t,i){Ie=null,A.H=li,i===Mo?(i=kp(),We=3):i===Dp?(i=kp(),We=4):We=i===Ng?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,De===null&&(ot=1,ju(t,Rn(i,t.current)))}function y_(){var t=A.H;return A.H=li,t===null?li:t}function v_(){var t=A.A;return A.A=gb,t}function Gf(){ot=4,Hi||(Pe&4194176)!==Pe&&Dn.current!==null||(Na=!0),(kr&134217727)===0&&(Os&134217727)===0||Xe===null||Gi(Xe,Pe,xn,!1)}function Kf(t,i,a){var l=et;et|=2;var h=y_(),d=v_();(Xe!==t||Pe!==i)&&(Yu=null,ka(t,i)),i=!1;var v=ot;e:do try{if(We!==0&&De!==null){var E=De,w=pn;switch(We){case 8:Ff(),v=6;break e;case 3:case 2:case 6:Dn.current===null&&(i=!0);var x=We;if(We=0,pn=null,xa(t,E,w,x),a&&Na){v=0;break e}break;default:x=We,We=0,pn=null,xa(t,E,w,x)}}vb(),v=ot;break}catch(F){__(t,F)}while(!0);return i&&t.shellSuspendCounter++,Li=Is=null,et=l,A.H=h,A.A=d,De===null&&(Xe=null,Pe=0,Eu()),v}function vb(){for(;De!==null;)E_(De)}function Eb(t,i){var a=et;et|=2;var l=y_(),h=v_();Xe!==t||Pe!==i?(Yu=null,Qu=rn()+500,ka(t,i)):Na=ar(t,i);e:do try{if(We!==0&&De!==null){i=De;var d=pn;t:switch(We){case 1:We=0,pn=null,xa(t,i,d,1);break;case 2:if(Np(d)){We=0,pn=null,T_(i);break}i=function(){We===2&&Xe===t&&(We=7),ci(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Np(d)?(We=0,pn=null,T_(i)):(We=0,pn=null,xa(t,i,d,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var E=De;if(!v||X_(v)){We=0,pn=null;var w=E.sibling;if(w!==null)De=w;else{var x=E.return;x!==null?(De=x,Wu(x)):De=null}break t}}We=0,pn=null,xa(t,i,d,5);break;case 6:We=0,pn=null,xa(t,i,d,6);break;case 8:Ff(),ot=6;break e;default:throw Error(s(462))}}Tb();break}catch(F){__(t,F)}while(!0);return Li=Is=null,A.H=l,A.A=h,et=a,De!==null?0:(Xe=null,Pe=0,Eu(),ot)}function Tb(){for(;De!==null&&!vh();)E_(De)}function E_(t){var i=qg(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,i===null?Wu(t):De=i}function T_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Pg(a,i,i.pendingProps,i.type,void 0,Pe);break;case 11:i=Pg(a,i,i.pendingProps,i.type.render,i.ref,Pe);break;case 5:$h(i);default:d_(a,i),i=De=c_(i,Fi),i=qg(a,i,Fi)}t.memoizedProps=t.pendingProps,i===null?Wu(t):De=i}function xa(t,i,a,l){Li=Is=null,$h(i),Ea=null,Po=0;var h=i.return;try{if(ub(t,h,i,a,Pe)){ot=1,ju(t,Rn(a,t.current)),De=null;return}}catch(d){if(h!==null)throw De=h,d;ot=1,ju(t,Rn(a,t.current)),De=null;return}i.flags&32768?(je||l===1?t=!0:Na||(Pe&536870912)!==0?t=!1:(Hi=t=!0,(l===2||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),b_(i,t)):Wu(i)}function Wu(t){var i=t;do{if((i.flags&32768)!==0){b_(i,Hi);return}t=i.return;var a=mb(i.alternate,i,Fi);if(a!==null){De=a;return}if(i=i.sibling,i!==null){De=i;return}De=i=t}while(i!==null);ot===0&&(ot=5)}function b_(t,i){do{var a=pb(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);ot=6,De=null}function A_(t,i,a,l,h,d,v,E,w,x){var F=A.T,Y=ne.p;try{ne.p=2,A.T=null,bb(t,i,a,l,Y,h,d,v,E,w,x)}finally{A.T=F,ne.p=Y}}function bb(t,i,a,l,h,d,v,E){do Ma();while(ks!==null);if((et&6)!==0)throw Error(s(327));var w=t.finishedWork;if(l=t.finishedLanes,w===null)return null;if(t.finishedWork=null,t.finishedLanes=0,w===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=w.lanes|w.childLanes;if(x|=Mh,Jl(t,l,x,d,v,E),t===Xe&&(De=Xe=null,Pe=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||$u||($u=!0,jf=x,Bf=a,Rb(bi,function(){return Ma(),null})),a=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||a?(a=A.T,A.T=null,d=ne.p,ne.p=2,v=et,et|=4,hb(t,w),i_(w,t),KT(rd,t.containerInfo),uc=!!id,rd=id=null,t.current=w,Jg(t,w.alternate,w),lo(),et=v,ne.p=d,A.T=a):t.current=w,$u?($u=!1,ks=t,el=l):S_(t,x),x=t.pendingLanes,x===0&&(xr=null),co(w.stateNode),ci(t),i!==null)for(h=t.onRecoverableError,w=0;w<i.length;w++)x=i[w],h(x.value,{componentStack:x.stack});return(el&3)!==0&&Ma(),x=t.pendingLanes,(l&4194218)!==0&&(x&42)!==0?t===qf?tl++:(tl=0,qf=t):tl=0,nl(0),null}function S_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Uo(i)))}function Ma(){if(ks!==null){var t=ks,i=jf;jf=0;var a=eu(el),l=A.T,h=ne.p;try{if(ne.p=32>a?32:a,A.T=null,ks===null)var d=!1;else{a=Bf,Bf=null;var v=ks,E=el;if(ks=null,el=0,(et&6)!==0)throw Error(s(331));var w=et;if(et|=4,l_(v.current),s_(v,v.current,E,a),et=w,nl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(rr,v)}catch{}d=!0}return d}finally{ne.p=h,A.T=l,S_(t,i)}}return!1}function w_(t,i,a){i=Rn(a,i),i=cf(t.stateNode,i,2),t=Ir(t,i,2),t!==null&&(ht(t,2),ci(t))}function $e(t,i,a){if(t.tag===3)w_(t,t,a);else for(;i!==null;){if(i.tag===3){w_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=Rn(a,t),a=Cg(2),l=Ir(i,a,2),l!==null&&(Dg(a,l,i,t),ht(l,2),ci(l));break}}i=i.return}}function Qf(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new _b;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Pf=!0,h.add(a),t=Ab.bind(null,t,i,a),i.then(t,t))}function Ab(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Pe&a)===a&&(ot===4||ot===3&&(Pe&62914560)===Pe&&300>rn()-zf?(et&2)===0&&ka(t,0):Lf|=a,Oa===Pe&&(Oa=0)),ci(t)}function R_(t,i){i===0&&(i=or()),t=vr(t,i),t!==null&&(ht(t,i),ci(t))}function Sb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),R_(t,a)}function wb(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),R_(t,a)}function Rb(t,i){return ns(t,i)}var Zu=null,Va=null,Yf=!1,Ju=!1,$f=!1,xs=0;function ci(t){t!==Va&&t.next===null&&(Va===null?Zu=Va=t:Va=Va.next=t),Ju=!0,Yf||(Yf=!0,Cb(Ib))}function nl(t,i){if(!$f&&Ju){$f=!0;do for(var a=!1,l=Zu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Zt(42|t)+1)-1,d&=h&~(v&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,D_(l,d))}else d=Pe,d=vn(l,l===Xe?d:0),(d&3)===0||ar(l,d)||(a=!0,D_(l,d));l=l.next}while(a);$f=!1}}function Ib(){Ju=Yf=!1;var t=0;xs!==0&&(Pb()&&(t=xs),xs=0);for(var i=rn(),a=null,l=Zu;l!==null;){var h=l.next,d=I_(l,i);d===0?(l.next=null,a===null?Zu=h:a.next=h,h===null&&(Va=a)):(a=l,(t!==0||(d&3)!==0)&&(Ju=!0)),l=h}nl(t)}function I_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Zt(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=Js(E,i)):w<=i&&(t.expiredLanes|=E),d&=~E}if(i=Xe,a=Pe,a=vn(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Zs(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ar(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Zs(l),eu(a)){case 2:case 8:a=Ct;break;case 32:a=bi;break;case 268435456:a=uo;break;default:a=bi}return l=C_.bind(null,t),a=ns(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Zs(l),t.callbackPriority=2,t.callbackNode=null,2}function C_(t,i){var a=t.callbackNode;if(Ma()&&t.callbackNode!==a)return null;var l=Pe;return l=vn(t,t===Xe?l:0),l===0?null:(p_(t,l,i),I_(t,rn()),t.callbackNode!=null&&t.callbackNode===a?C_.bind(null,t):null)}function D_(t,i){if(Ma())return null;p_(t,i,!0)}function Cb(t){Ub(function(){(et&6)!==0?ns(vt,t):t()})}function Xf(){return xs===0&&(xs=fo()),xs}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jn(""+t)}function O_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Db(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=N_((h[Et]||null).action),v=l.submitter;v&&(i=(i=v[Et]||null)?N_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new aa("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var w=v?O_(h,v):new FormData(h);sf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?O_(h,v):new FormData(h),sf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var Wf=0;Wf<Ap.length;Wf++){var Zf=Ap[Wf],Nb=Zf.toLowerCase(),Ob=Zf[0].toUpperCase()+Zf.slice(1);Bn(Nb,"on"+Ob)}Bn(yp,"onAnimationEnd"),Bn(vp,"onAnimationIteration"),Bn(Ep,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(YT,"onTransitionRun"),Bn($T,"onTransitionStart"),Bn(XT,"onTransitionCancel"),Bn(Tp,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function k_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,x=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=x;try{d(h)}catch(F){zu(F)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,x=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=x;try{d(h)}catch(F){zu(F)}h.currentTarget=null,d=w}}}}function ke(t,i){var a=i[rs];a===void 0&&(a=i[rs]=new Set);var l=t+"__bubble";a.has(l)||(x_(i,t,2,!1),a.add(l))}function Jf(t,i,a){var l=0;i&&(l|=4),x_(a,t,l,i)}var ec="_reactListening"+Math.random().toString(36).slice(2);function ed(t){if(!t[ec]){t[ec]=!0,po.forEach(function(a){a!=="selectionchange"&&(kb.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ec]||(i[ec]=!0,Jf("selectionchange",!1,i))}}function x_(t,i,a,l){switch(ny(i)){case 2:var h=rA;break;case 8:h=sA;break;default:h=dd}a=h.bind(null,i,a,t),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function td(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&(w=v.stateNode.containerInfo,w===h||w.nodeType===8&&w.parentNode===h))return;v=v.return}for(;E!==null;){if(v=jn(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue e}E=E.parentNode}}l=l.return}su(function(){var x=d,F=sa(a),Y=[];e:{var z=bp.get(t);if(z!==void 0){var H=aa,se=t;switch(t){case"keypress":if(ti(a)===0)break e;case"keydown":case"keyup":H=fa;break;case"focusin":se="focus",H=ua;break;case"focusout":se="blur",H=ua;break;case"beforeblur":case"afterblur":H=ua;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=du;break;case yp:case vp:case Ep:H=ca;break;case Tp:H=pu;break;case"scroll":case"scrollend":H=au;break;case"wheel":H=da;break;case"copy":case"cut":case"paste":H=ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Io;break;case"toggle":case"beforetoggle":H=_u}var Te=(i&4)!==0,lt=!Te&&(t==="scroll"||t==="scrollend"),V=Te?z!==null?z+"Capture":null:z;Te=[];for(var O=x,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||V===null||(K=us(O,V),K!=null&&Te.push(rl(O,K,U))),lt)break;O=O.return}0<Te.length&&(z=new H(z,se,null,a,F),Y.push({event:z,listeners:Te}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",z&&a!==bn&&(se=a.relatedTarget||a.fromElement)&&(jn(se)||se[Ai]))break e;if((H||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,H?(se=a.relatedTarget||a.toElement,H=x,se=se?jn(se):null,se!==null&&(lt=ce(se),Te=se.tag,se!==lt||Te!==5&&Te!==27&&Te!==6)&&(se=null)):(H=null,se=x),H!==se)){if(Te=Sn,K="onMouseLeave",V="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(Te=Io,K="onPointerLeave",V="onPointerEnter",O="pointer"),lt=H==null?z:fr(H),U=se==null?z:fr(se),z=new Te(K,O+"leave",H,a,F),z.target=lt,z.relatedTarget=U,K=null,jn(F)===x&&(Te=new Te(V,O+"enter",se,a,F),Te.target=U,Te.relatedTarget=lt,K=Te),lt=K,H&&se)t:{for(Te=H,V=se,O=0,U=Te;U;U=Pa(U))O++;for(U=0,K=V;K;K=Pa(K))U++;for(;0<O-U;)Te=Pa(Te),O--;for(;0<U-O;)V=Pa(V),U--;for(;O--;){if(Te===V||V!==null&&Te===V.alternate)break t;Te=Pa(Te),V=Pa(V)}Te=null}else Te=null;H!==null&&M_(Y,z,H,Te,!1),se!==null&&lt!==null&&M_(Y,lt,se,Te,!0)}}e:{if(z=x?fr(x):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var re=op;else if(bt(z))if(lp)re=FT;else{re=qT;var Ce=BT}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?x&&Eo(x.elementType)&&(re=op):re=HT;if(re&&(re=re(t,x))){Oi(Y,re,a,F);break e}Ce&&Ce(t,z,x),t==="focusout"&&x&&z.type==="number"&&x.memoizedProps.value!=null&&ra(z,"number",z.value)}switch(Ce=x?fr(x):window,t){case"focusin":(bt(Ce)||Ce.contentEditable==="true")&&(ma=Ce,Oh=x,No=null);break;case"focusout":No=Oh=ma=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,gp(Y,a,F);break;case"selectionchange":if(QT)break;case"keydown":case"keyup":gp(Y,a,F)}var oe;if(ri)e:{switch(t){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Me?B(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(y&&a.locale!=="ko"&&(Me||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Me&&(oe=bo()):(ei=F,yr="value"in ei?ei.value:ei.textContent,Me=!0)),Ce=tc(x,pe),0<Ce.length&&(pe=new wo(pe,t,null,a,F),Y.push({event:pe,listeners:Ce}),oe?pe.data=oe:(oe=Z(a),oe!==null&&(pe.data=oe)))),(oe=p?Tt(t,a):Ve(t,a))&&(pe=tc(x,"onBeforeInput"),0<pe.length&&(Ce=new wo("onBeforeInput","beforeinput",null,a,F),Y.push({event:Ce,listeners:pe}),Ce.data=oe)),Db(Y,t,x,a,F)}k_(Y,i)})}function rl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function tc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=us(t,a),h!=null&&l.unshift(rl(t,h,d)),h=us(t,i),h!=null&&l.push(rl(t,h,d))),t=t.return}return l}function Pa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,x=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||x===null||(w=x,h?(x=us(a,d),x!=null&&v.unshift(rl(a,x,w))):h||(x=us(a,d),x!=null&&v.push(rl(a,x,w)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var xb=/\r\n?/g,Mb=/\u0000|\uFFFD/g;function V_(t){return(typeof t=="string"?t:""+t).replace(xb,`
`).replace(Mb,"")}function P_(t,i){return i=V_(i),V_(t)===i}function nc(){}function Qe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(t,""+l);break;case"className":pr(t,"class",l);break;case"tabIndex":pr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pr(t,a,l);break;case"style":ru(t,l,d);break;case"data":if(i!=="object"){pr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Jn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qe(t,i,"name",h.name,h,null),Qe(t,i,"formEncType",h.formEncType,h,null),Qe(t,i,"formMethod",h.formMethod,h,null),Qe(t,i,"formTarget",h.formTarget,h,null)):(Qe(t,i,"encType",h.encType,h,null),Qe(t,i,"method",h.method,h,null),Qe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Jn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=nc);break;case"onScroll":l!=null&&ke("scroll",t);break;case"onScrollEnd":l!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Jn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":ke("beforetoggle",t),ke("toggle",t),mr(t,"popover",l);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sh.get(a)||a,mr(t,a,l))}}function nd(t,i,a,l,h,d){switch(a){case"style":ru(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&Tn(t,""+l);break;case"onScroll":l!=null&&ke("scroll",t);break;case"onScrollEnd":l!=null&&ke("scrollend",t);break;case"onClick":l!=null&&(t.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!na.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):mr(t,a,l)}}}function zt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,d,v,a,null)}}h&&Qe(t,i,"srcSet",a.srcSet,a,null),l&&Qe(t,i,"src",a.src,a,null);return;case"input":ke("invalid",t);var E=d=v=h=null,w=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":x=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Qe(t,i,l,F,a,null)}}os(t,d,E,w,x,v,h,!1),as(t);return;case"select":ke("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Qe(t,i,h,E,a,null)}i=d,a=v,t.multiple=!!l,i!=null?ze(t,!!l,i,!1):a!=null&&ze(t,!!l,a,!0);return;case"textarea":ke("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qe(t,i,v,E,a,null)}_r(t,l,h,d),as(t);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,i,w,l,a,null)}return;case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(l=0;l<il.length;l++)ke(il[l],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,x,l,a,null)}return;default:if(Eo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&nd(t,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Qe(t,i,E,l,a,null))}function Vb(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,x=null,F=null;for(H in a){var Y=a[H];if(a.hasOwnProperty(H)&&Y!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(H)||Qe(t,i,H,null,l,Y)}}for(var z in l){var H=l[z];if(Y=a[z],l.hasOwnProperty(z)&&(H!=null||Y!=null))switch(z){case"type":d=H;break;case"name":h=H;break;case"checked":x=H;break;case"defaultChecked":F=H;break;case"value":v=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==Y&&Qe(t,i,z,H,l,Y)}}gr(t,v,E,w,x,F,d,h);return;case"select":H=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":H=w;default:l.hasOwnProperty(d)||Qe(t,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&Qe(t,i,h,d,l,w)}i=E,a=v,l=H,z!=null?ze(t,!!a,z,!1):!!l!=!!a&&(i!=null?ze(t,!!a,i,!0):ze(t,!!a,a?[]:"",!1));return;case"textarea":H=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qe(t,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qe(t,i,v,h,l,d)}ls(t,z,H);return;case"option":for(var se in a)if(z=a[se],a.hasOwnProperty(se)&&z!=null&&!l.hasOwnProperty(se))switch(se){case"selected":t.selected=!1;break;default:Qe(t,i,se,null,l,z)}for(w in l)if(z=l[w],H=a[w],l.hasOwnProperty(w)&&z!==H&&(z!=null||H!=null))switch(w){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qe(t,i,w,z,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)z=a[Te],a.hasOwnProperty(Te)&&z!=null&&!l.hasOwnProperty(Te)&&Qe(t,i,Te,null,l,z);for(x in l)if(z=l[x],H=a[x],l.hasOwnProperty(x)&&z!==H&&(z!=null||H!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qe(t,i,x,z,l,H)}return;default:if(Eo(i)){for(var lt in a)z=a[lt],a.hasOwnProperty(lt)&&z!==void 0&&!l.hasOwnProperty(lt)&&nd(t,i,lt,void 0,l,z);for(F in l)z=l[F],H=a[F],!l.hasOwnProperty(F)||z===H||z===void 0&&H===void 0||nd(t,i,F,z,l,H);return}}for(var V in a)z=a[V],a.hasOwnProperty(V)&&z!=null&&!l.hasOwnProperty(V)&&Qe(t,i,V,null,l,z);for(Y in l)z=l[Y],H=a[Y],!l.hasOwnProperty(Y)||z===H||z==null&&H==null||Qe(t,i,Y,z,l,H)}var id=null,rd=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function L_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function sd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ad=null;function Pb(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(zb)}:z_;function zb(t){setTimeout(function(){throw t})}function od(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),fl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);fl(i)}function ld(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),ss(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jb(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function Bb(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function B_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function q_(t,i,a){switch(i=ic(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var Mn=new Map,H_=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ki=ne.d;ne.d={f:qb,r:Hb,D:Fb,C:Gb,L:Kb,m:Qb,X:$b,S:Yb,M:Xb};function qb(){var t=Ki.f(),i=Xu();return t||i}function Hb(t){var i=Si(t);i!==null&&i.tag===5&&i.type==="form"?gg(i):Ki.r(t)}var La=typeof document>"u"?null:document;function F_(t,i,a){var l=La;if(l&&typeof i=="string"&&i){var h=st(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),H_.has(h)||(H_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zt(i,"link",t),Ze(i),l.head.appendChild(i)))}}function Fb(t){Ki.D(t),F_("dns-prefetch",t,null)}function Gb(t,i){Ki.C(t,i),F_("preconnect",t,i)}function Kb(t,i,a){Ki.L(t,i,a);var l=La;if(l&&t&&i){var h='link[rel="preload"][as="'+st(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+st(a.imageSizes)+'"]')):h+='[href="'+st(t)+'"]';var d=h;switch(i){case"style":d=Ua(t);break;case"script":d=za(t)}Mn.has(d)||(t=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Mn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),zt(i,"link",t),Ze(i),l.head.appendChild(i)))}}function Qb(t,i){Ki.m(t,i);var a=La;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=za(t)}if(!Mn.has(d)&&(t=C({rel:"modulepreload",href:t},i),Mn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}l=a.createElement("link"),zt(l,"link",t),Ze(l),a.head.appendChild(l)}}}function Yb(t,i,a){Ki.S(t,i,a);var l=La;if(l&&t){var h=dr(l).hoistableStyles,d=Ua(t);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(sl(d)))E.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Mn.get(d))&&ud(t,a);var w=v=l.createElement("link");Ze(w),zt(w,"link",t),w._p=new Promise(function(x,F){w.onload=x,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function $b(t,i){Ki.X(t,i);var a=La;if(a&&t){var l=dr(a).hoistableScripts,h=za(t),d=l.get(h);d||(d=a.querySelector(al(h)),d||(t=C({src:t,async:!0},i),(i=Mn.get(h))&&cd(t,i),d=a.createElement("script"),Ze(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Xb(t,i){Ki.M(t,i);var a=La;if(a&&t){var l=dr(a).hoistableScripts,h=za(t),d=l.get(h);d||(d=a.querySelector(al(h)),d||(t=C({src:t,async:!0,type:"module"},i),(i=Mn.get(h))&&cd(t,i),d=a.createElement("script"),Ze(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function G_(t,i,a,l){var h=(h=yn.current)?rc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ua(a.href),a=dr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ua(a.href);var d=dr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(sl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(t,a),d||Wb(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=za(a),a=dr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ua(t){return'href="'+st(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function K_(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function Wb(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zt(i,"link",a),Ze(i),t.head.appendChild(i))}function za(t){return'[src="'+st(t)+'"]'}function al(t){return"script[async]"+t}function Q_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return i.instance=l,Ze(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ze(l),zt(l,"style",h),sc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ua(a.href);var d=t.querySelector(sl(h));if(d)return i.state.loading|=4,i.instance=d,Ze(d),d;l=K_(a),(h=Mn.get(h))&&ud(l,h),d=(t.ownerDocument||t).createElement("link"),Ze(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),zt(d,"link",l),i.state.loading|=4,sc(d,a.precedence,t),i.instance=d;case"script":return d=za(a.src),(h=t.querySelector(al(d)))?(i.instance=h,Ze(h),h):(l=a,(h=Mn.get(d))&&(l=C({},a),cd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Ze(h),zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,sc(l,a.precedence,t));return i.instance}function sc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function ud(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function cd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var ac=null;function Y_(t,i,a){if(ac===null){var l=new Map,h=ac=new Map;h.set(a,l)}else h=ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[hr]||d[Dt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function $_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Zb(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function X_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ol=null;function Jb(){}function eA(t,i,a){if(ol===null)throw Error(s(475));var l=ol;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ua(a.href),d=t.querySelector(sl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=oc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,Ze(d);return}d=t.ownerDocument||t,a=K_(a),(h=Mn.get(h))&&ud(a,h),d=d.createElement("link"),Ze(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),zt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=oc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function tA(){if(ol===null)throw Error(s(475));var t=ol;return t.stylesheets&&t.count===0&&hd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&hd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function hd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,i.forEach(nA,t),lc=null,oc.call(t))}function nA(t,i){if(!(i.state.loading&4)){var a=lc.get(t);if(a)var l=a.get(null);else{a=new Map,lc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var ll={$$typeof:j,Provider:null,Consumer:null,_currentValue:Re,_currentValue2:Re,_threadCount:0};function iA(t,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.hiddenUpdates=ea(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function W_(t,i,a,l,h,d,v,E,w,x,F,Y){return t=new iA(t,i,a,v,E,w,x,Y),i=1,d===!0&&(i|=24),d=kn(3,null,null,i),t.current=d,d.stateNode=t,i=qh(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Af(d),t}function Z_(t){return t?(t=_a,t):_a}function J_(t,i,a,l,h,d){h=Z_(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Ir(t,l,i),a!==null&&(nn(a,t,i),Go(a,t,i))}function ey(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fd(t,i){ey(t,i),(t=t.alternate)&&ey(t,i)}function ty(t){if(t.tag===13){var i=vr(t,67108864);i!==null&&nn(i,t,67108864),fd(t,67108864)}}var uc=!0;function rA(t,i,a,l){var h=A.T;A.T=null;var d=ne.p;try{ne.p=2,dd(t,i,a,l)}finally{ne.p=d,A.T=h}}function sA(t,i,a,l){var h=A.T;A.T=null;var d=ne.p;try{ne.p=8,dd(t,i,a,l)}finally{ne.p=d,A.T=h}}function dd(t,i,a,l){if(uc){var h=md(l);if(h===null)td(t,i,l,cc,a),iy(t,l);else if(oA(h,t,i,a,l))l.stopPropagation();else if(iy(t,l),i&4&&-1<aA.indexOf(t)){for(;h!==null;){var d=Si(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=zn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-Zt(v);E.entanglements[1]|=w,v&=~w}ci(d),(et&6)===0&&(Qu=rn()+500,nl(0))}}break;case 13:E=vr(d,2),E!==null&&nn(E,d,2),Xu(),fd(d,2)}if(d=md(l),d===null&&td(t,i,l,cc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else td(t,i,l,null,a)}}function md(t){return t=sa(t),pd(t)}var cc=null;function pd(t){if(cc=null,t=jn(t),t!==null){var i=ce(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=qe(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cc=t,null}function ny(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($l()){case vt:return 2;case Ct:return 8;case bi:case Xl:return 32;case uo:return 268435456;default:return 32}default:return 32}}var gd=!1,Mr=null,Vr=null,Pr=null,ul=new Map,cl=new Map,Lr=[],aA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iy(t,i){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function hl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Si(i),i!==null&&ty(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function oA(t,i,a,l,h){switch(i){case"focusin":return Mr=hl(Mr,t,i,a,l,h),!0;case"dragenter":return Vr=hl(Vr,t,i,a,l,h),!0;case"mouseover":return Pr=hl(Pr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ul.set(d,hl(ul.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,cl.set(d,hl(cl.get(d)||null,t,i,a,l,h)),!0}return!1}function ry(t){var i=jn(t.target);if(i!==null){var a=ce(i);if(a!==null){if(i=a.tag,i===13){if(i=qe(a),i!==null){t.blockedOn=i,cr(t.priority,function(){if(a.tag===13){var l=gn(),h=vr(a,l);h!==null&&nn(h,a,l),fd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);bn=l,a.target.dispatchEvent(l),bn=null}else return i=Si(a),i!==null&&ty(i),t.blockedOn=a,!1;i.shift()}return!0}function sy(t,i,a){hc(t)&&a.delete(i)}function lA(){gd=!1,Mr!==null&&hc(Mr)&&(Mr=null),Vr!==null&&hc(Vr)&&(Vr=null),Pr!==null&&hc(Pr)&&(Pr=null),ul.forEach(sy),cl.forEach(sy)}function fc(t,i){t.blockedOn===i&&(t.blockedOn=null,gd||(gd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lA)))}var dc=null;function ay(t){dc!==t&&(dc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(pd(l||a)===null)continue;break}var d=Si(a);d!==null&&(t.splice(i,3),i-=3,sf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function fl(t){function i(w){return fc(w,t)}Mr!==null&&fc(Mr,t),Vr!==null&&fc(Vr,t),Pr!==null&&fc(Pr,t),ul.forEach(i),cl.forEach(i);for(var a=0;a<Lr.length;a++){var l=Lr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Lr.length&&(a=Lr[0],a.blockedOn===null);)ry(a),a.blockedOn===null&&Lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Et]||null;if(typeof d=="function")v||ay(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Et]||null)E=v.formAction;else if(pd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),ay(a)}}}function _d(t){this._internalRoot=t}mc.prototype.render=_d.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=gn();J_(a,l,t,i,null,null)},mc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&Ma(),J_(t.current,2,null,t,null,null),Xu(),i[Ai]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var i=tu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Lr.length&&i!==0&&i<Lr[a].priority;a++);Lr.splice(a,0,t),a===0&&ry(t)}};var oy=e.version;if(oy!=="19.0.0")throw Error(s(527,oy,"19.0.0"));ne.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=X(i),t=t!==null?ae(t):null,t=t===null?null:t.stateNode,t};var uA={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:jn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{rr=pc.inject(uA),Ht=pc}catch{}}return ml.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Sg,d=wg,v=Rg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=W_(t,1,!1,null,null,a,l,h,d,v,E,null),t[Ai]=i.current,ed(t.nodeType===8?t.parentNode:t),new _d(i)},ml.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Sg,v=wg,E=Rg,w=null,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(x=a.formState)),i=W_(t,1,!0,i,a??null,l,h,d,v,E,w,x),i.context=Z_(null),a=i.current,l=gn(),h=Rr(l),h.callback=null,Ir(a,h,l),i.current.lanes=l,ht(i,l),ci(i),t[Ai]=i.current,ed(t),new mc(i)},ml.version="19.0.0",ml}var _y;function EA(){if(_y)return Ed.exports;_y=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=vA(),Ed.exports}var TA=EA();const bA=Wv(TA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zv=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=Ye.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},g)=>Ye.createElement("svg",{ref:g,...SA,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Zv("lucide",o),...m},[...f.map(([_,b])=>Ye.createElement(_,b)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(r,e)=>{const n=Ye.forwardRef(({className:s,...o},u)=>Ye.createElement(wA,{ref:u,iconNode:e,className:Zv(`lucide-${AA(r)}`,s),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],IA=ct("ArrowLeft",RA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],DA=ct("Camera",CA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],OA=ct("ChevronRight",NA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],xA=ct("CreditCard",kA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],VA=ct("Download",MA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],LA=ct("EyeOff",PA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zA=ct("Eye",UA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],BA=ct("History",jA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],HA=ct("Image",qA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],GA=ct("Lock",FA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],QA=ct("LogIn",KA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],$A=ct("Mail",YA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],WA=ct("PanelsTopLeft",XA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],JA=ct("RefreshCw",ZA);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],tS=ct("Share2",eS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yy=ct("ShieldCheck",nS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Rl=ct("Sparkles",iS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],sS=ct("Star",rS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],oS=ct("Upload",aS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],uS=ct("UserPlus",lS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],hS=ct("Users",cS);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],dS=ct("Zap",fS);var vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},mS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},e0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,b=u>>2,I=(u&3)<<4|m>>4;let M=(m&15)<<2|_>>6,j=_&63;g||(j=64,f||(M=64)),s.push(n[b],n[I],n[M],n[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Jv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):mS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const I=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||I==null)throw new pS;const M=u<<2|m>>4;if(s.push(M),_!==64){const j=m<<4&240|_>>2;if(s.push(j),I!==64){const $=_<<6&192|I;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gS=function(r){const e=Jv(r);return e0.encodeByteArray(e,!0)},kc=function(r){return gS(r).replace(/\./g,"")},t0=function(r){try{return e0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=()=>_S().__FIREBASE_DEFAULTS__,vS=()=>{if(typeof process>"u"||typeof vy>"u")return;const r=vy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ES=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&t0(r[1]);return e&&JSON.parse(e)},Zc=()=>{try{return yS()||vS()||ES()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},n0=r=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},i0=r=>{const e=n0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},r0=()=>{var r;return(r=Zc())===null||r===void 0?void 0:r.config},s0=r=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[kc(JSON.stringify(n)),kc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function AS(){var r;const e=(r=Zc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function wS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RS(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function IS(){return!AS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dm(){try{return typeof indexedDB=="object"}catch{return!1}}function mm(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function o0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="FirebaseError";class Un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=CS,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?DS(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Un(o,m,s)}}function DS(r,e){return r.replace(NS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const NS=/\{\$([^}]+)}/g;function OS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Il(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(Ey(u)&&Ey(f)){if(!Il(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Ey(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function gl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function kS(r,e){const n=new xS(r,e);return n.subscribe.bind(n)}class xS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");MS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Sd),o.error===void 0&&(o.error=Sd),o.complete===void 0&&(o.complete=Sd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Sd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=1e3,PS=2,LS=14400*1e3,US=.5;function Ty(r,e=VS,n=PS){const s=e*Math.pow(n,r),o=Math.round(US*s*(Math.random()-.5)*2);return Math.min(LS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(r){return r&&r._delegate?r._delegate:r}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new TS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(r){return r===Ms?void 0:r}function BS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const HS={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},FS=Ne.INFO,GS={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},KS=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=GS[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=FS,this._logHandler=KS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const QS=(r,e)=>e.some(n=>r instanceof n);let by,Ay;function YS(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $S(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l0=new WeakMap,jd=new WeakMap,u0=new WeakMap,wd=new WeakMap,pm=new WeakMap;function XS(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Gr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&l0.set(n,r)}).catch(()=>{}),pm.set(e,r),e}function WS(r){if(jd.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});jd.set(r,e)}let Bd={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return jd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||u0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ZS(r){Bd=r(Bd)}function JS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Rd(this),e,...n);return u0.set(s,e.sort?e.sort():[e]),Gr(s)}:$S().includes(r)?function(...e){return r.apply(Rd(this),e),Gr(l0.get(this))}:function(...e){return Gr(r.apply(Rd(this),e))}}function ew(r){return typeof r=="function"?JS(r):(r instanceof IDBTransaction&&WS(r),QS(r,YS())?new Proxy(r,Bd):r)}function Gr(r){if(r instanceof IDBRequest)return XS(r);if(wd.has(r))return wd.get(r);const e=ew(r);return e!==r&&(wd.set(r,e),pm.set(e,r)),e}const Rd=r=>pm.get(r);function c0(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Gr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Gr(f.result),g.oldVersion,g.newVersion,Gr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const tw=["get","getKey","getAll","getAllKeys","count"],nw=["put","add","delete","clear"],Id=new Map;function Sy(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=nw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||tw.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[n](...m),o&&g.done]))[0]};return Id.set(e,u),u}ZS(r=>({...r,get:(e,n,s)=>Sy(e,n)||r.get(e,n,s),has:(e,n)=>!!Sy(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",wy="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Jc("@firebase/app"),sw="@firebase/app-compat",aw="@firebase/analytics-compat",ow="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",cw="@firebase/auth",hw="@firebase/auth-compat",fw="@firebase/database",dw="@firebase/data-connect",mw="@firebase/database-compat",pw="@firebase/functions",gw="@firebase/functions-compat",_w="@firebase/installations",yw="@firebase/installations-compat",vw="@firebase/messaging",Ew="@firebase/messaging-compat",Tw="@firebase/performance",bw="@firebase/performance-compat",Aw="@firebase/remote-config",Sw="@firebase/remote-config-compat",ww="@firebase/storage",Rw="@firebase/storage-compat",Iw="@firebase/firestore",Cw="@firebase/vertexai",Dw="@firebase/firestore-compat",Nw="firebase",Ow="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",kw={[qd]:"fire-core",[sw]:"fire-core-compat",[ow]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[cw]:"fire-auth",[hw]:"fire-auth-compat",[fw]:"fire-rtdb",[dw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[pw]:"fire-fn",[gw]:"fire-fn-compat",[_w]:"fire-iid",[yw]:"fire-iid-compat",[vw]:"fire-fcm",[Ew]:"fire-fcm-compat",[Tw]:"fire-perf",[bw]:"fire-perf-compat",[Aw]:"fire-rc",[Sw]:"fire-rc-compat",[ww]:"fire-gcs",[Rw]:"fire-gcs-compat",[Iw]:"fire-fst",[Dw]:"fire-fst-compat",[Cw]:"fire-vertex","fire-js":"fire-js",[Nw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map,xw=new Map,Fd=new Map;function Ry(r,e){try{r.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Qn(r){const e=r.name;if(Fd.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,r);for(const n of xc.values())Ry(n,r);for(const n of xw.values())Ry(n,r);return!0}function Jr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function hi(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new Hs("app","Firebase",Mw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=Ow;function h0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Kr.create("bad-app-name",{appName:String(o)});if(n||(n=r0()),!n)throw Kr.create("no-options");const u=xc.get(o);if(u){if(Il(n,u.options)&&Il(s,u.config))return u;throw Kr.create("duplicate-app",{appName:o})}const f=new qS(o);for(const g of Fd.values())f.addComponent(g);const m=new Vw(n,s,f);return xc.set(o,m),m}function eh(r=Hd){const e=xc.get(r);if(!e&&r===Hd&&r0())return h0();if(!e)throw Kr.create("no-app",{appName:r});return e}function ln(r,e,n){var s;let o=(s=kw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(m.join(" "));return}Qn(new Ln(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebase-heartbeat-database",Lw=1,Cl="firebase-heartbeat-store";let Cd=null;function f0(){return Cd||(Cd=c0(Pw,Lw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Cl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Kr.create("idb-open",{originalErrorMessage:r.message})})),Cd}async function Uw(r){try{const n=(await f0()).transaction(Cl),s=await n.objectStore(Cl).get(d0(r));return await n.done,s}catch(e){if(e instanceof Un)Zi.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function Iy(r,e){try{const s=(await f0()).transaction(Cl,"readwrite");await s.objectStore(Cl).put(e,d0(r)),await s.done}catch(n){if(n instanceof Un)Zi.warn(n.message);else{const s=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(s.message)}}}function d0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1024,jw=720*60*60*1e3;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const m=new Date(f.date).valueOf();return Date.now()-m<=jw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Zi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cy(),{heartbeatsToSend:s,unsentEntries:o}=qw(this._heartbeatsCache.heartbeats),u=kc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Zi.warn(n),""}}}function Cy(){return new Date().toISOString().substring(0,10)}function qw(r,e=zw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Dy(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Dy(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dm()?mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Dy(r){return kc(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(r){Qn(new Ln("platform-logger",e=>new iw(e),"PRIVATE")),Qn(new Ln("heartbeat",e=>new Bw(e),"PRIVATE")),ln(qd,wy,r),ln(qd,wy,"esm2017"),ln("fire-js","")}Fw("");var Gw="firebase",Kw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(Gw,Kw,"app");function gm(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=m0,p0=new Hs("auth","Firebase",m0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Jc("@firebase/auth");function Yw(r,...e){Mc.logLevel<=Ne.WARN&&Mc.warn(`Auth (${Fs}): ${r}`,...e)}function Ac(r,...e){Mc.logLevel<=Ne.ERROR&&Mc.error(`Auth (${Fs}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(r,...e){throw _m(r,...e)}function fi(r,...e){return _m(r,...e)}function g0(r,e,n){const s=Object.assign(Object.assign({},Qw()),{[e]:n});return new Hs("auth","Firebase",s).create(e,{appName:r.name})}function Xi(r){return g0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _m(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return p0.create(r,...e)}function _e(r,e,...n){if(!r)throw _m(e,...n)}function Qi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ac(e),new Error(e)}function Ji(r,e){r||Qi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function $w(){return Ny()==="http:"||Ny()==="https:"}function Ny(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($w()||fm()||"connection"in navigator)?navigator.onLine:!0}function Ww(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ji(n>e,"Short delay should be less than long delay!"),this.isMobile=bS()||wS()}get(){return Xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(r,e){Ji(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new Bl(3e4,6e4);function es(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ts(r,e,n,s,o={}){return y0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=jl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return SS()||(_.referrerPolicy="no-referrer"),_0.fetch()(v0(r,r.config.apiHost,n,m),_)})}async function y0(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Zw),e);try{const o=new t1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw gc(r,"user-disabled",f);const b=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw g0(r,b,_);Yn(r,b)}}catch(o){if(o instanceof Un)throw o;Yn(r,"network-request-failed",{message:String(o)})}}async function ql(r,e,n,s,o={}){const u=await ts(r,e,n,s,o);return"mfaPendingCredential"in u&&Yn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function v0(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?ym(r.config,o):`${r.config.apiScheme}://${o}`}function e1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class t1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fi(this.auth,"network-request-failed")),Jw.get())})}}function gc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=fi(r,e,s);return o.customData._tokenResponse=n,o}function Oy(r){return r!==void 0&&r.enterprise!==void 0}class n1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return e1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function i1(r,e){return ts(r,"GET","/v2/recaptchaConfig",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(r,e){return ts(r,"POST","/v1/accounts:delete",e)}async function E0(r,e){return ts(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s1(r,e=!1){const n=Xt(r),s=await n.getIdToken(e),o=vm(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:El(Dd(o.auth_time)),issuedAtTime:El(Dd(o.iat)),expirationTime:El(Dd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Dd(r){return Number(r)*1e3}function vm(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Ac("JWT malformed, contained fewer than 3 sections"),null;try{const o=t0(n);return o?JSON.parse(o):(Ac("Failed to decode base64 JWT payload"),null)}catch(o){return Ac("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ky(r){const e=vm(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Un&&a1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function a1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=El(this.lastLoginAt),this.creationTime=El(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(r){var e;const n=r.auth,s=await r.getIdToken(),o=await Dl(r,E0(n,{idToken:s}));_e(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?T0(u.providerUserInfo):[],m=u1(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),b=g?_:!1,I={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Kd(u.createdAt,u.lastLoginAt),isAnonymous:b};Object.assign(r,I)}async function l1(r){const e=Xt(r);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u1(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function T0(r){return r.map(e=>{var{providerId:n}=e,s=gm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(r,e){const n=await y0(r,{},async()=>{const s=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=v0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h1(r,e){return ts(r,"POST","/v2/accounts:revokeToken",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=ky(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await c1(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ga;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Kd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Dl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return s1(this,e)}reload(){return l1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hi(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await Dl(this,r1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,g,_,b;const I=(s=n.displayName)!==null&&s!==void 0?s:void 0,M=(o=n.email)!==null&&o!==void 0?o:void 0,j=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(m=n.tenantId)!==null&&m!==void 0?m:void 0,G=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,he=(_=n.createdAt)!==null&&_!==void 0?_:void 0,ue=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:le,emailVerified:Ee,isAnonymous:fe,providerData:Ae,stsTokenManager:D}=n;_e(le&&D,e,"internal-error");const S=Ga.fromJSON(this.name,D);_e(typeof le=="string",e,"internal-error"),zr(I,e.name),zr(M,e.name),_e(typeof Ee=="boolean",e,"internal-error"),_e(typeof fe=="boolean",e,"internal-error"),zr(j,e.name),zr($,e.name),zr(J,e.name),zr(G,e.name),zr(he,e.name),zr(ue,e.name);const A=new Yi({uid:le,auth:e,email:M,emailVerified:Ee,displayName:I,isAnonymous:fe,photoURL:$,phoneNumber:j,tenantId:J,stsTokenManager:S,createdAt:he,lastLoginAt:ue});return Ae&&Array.isArray(Ae)&&(A.providerData=Ae.map(C=>Object.assign({},C))),G&&(A._redirectEventId=G),A}static async _fromIdTokenResponse(e,n,s=!1){const o=new Ga;o.updateFromServerResponse(n);const u=new Yi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Vc(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?T0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ga;m.updateFromIdToken(s);const g=new Yi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function $i(r){Ji(r instanceof Function,"Expected a class definition");let e=xy.get(r);return e?(Ji(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xy.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b0.type="NONE";const My=b0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r,e,n){return`firebase:${r}:${e}:${n}`}class Ka{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Sc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Sc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ka($i(My),e,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||$i(My);const f=Sc(s,e.config.apiKey,e.name);let m=null;for(const _ of n)try{const b=await _._get(f);if(b){const I=Yi._fromJSON(e,b);_!==u&&(m=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ka(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Ka(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C0(e))return"Blackberry";if(D0(e))return"Webos";if(S0(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(I0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function A0(r=$t()){return/firefox\//i.test(r)}function S0(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(r=$t()){return/crios\//i.test(r)}function R0(r=$t()){return/iemobile/i.test(r)}function I0(r=$t()){return/android/i.test(r)}function C0(r=$t()){return/blackberry/i.test(r)}function D0(r=$t()){return/webos/i.test(r)}function Em(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function f1(r=$t()){var e;return Em(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d1(){return RS()&&document.documentMode===10}function N0(r=$t()){return Em(r)||I0(r)||D0(r)||C0(r)||/windows phone/i.test(r)||R0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r,e=[]){let n;switch(r){case"Browser":n=Vy($t());break;case"Worker":n=`${Vy($t())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(r,e={}){return ts(r,"GET","/v2/passwordPolicy",es(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=6;class _1{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:g1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Py(this),this.idTokenSubscription=new Py(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$i(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Ka.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E0(this,{idToken:e}),s=await Yi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hi(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ww()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hi(this.app))return Promise.reject(Xi(this));const n=e?Xt(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hi(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hi(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),n=new _1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await h1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$i(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Ka.create(this,[$i(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gs(r){return Xt(r)}class Py{constructor(e){this.auth=e,this.observer=null,this.addObserver=kS(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v1(r){th=r}function k0(r){return th.loadJS(r)}function E1(){return th.recaptchaEnterpriseScript}function T1(){return th.gapiScript}function b1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class A1{constructor(){this.enterprise=new S1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class S1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const w1="recaptcha-enterprise",x0="NO_RECAPTCHA";class R1{constructor(e){this.type=w1,this.auth=Gs(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{i1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new n1(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;Oy(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{f(_)}).catch(()=>{f(x0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new A1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Oy(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=E1();g.length!==0&&(g+=m),k0(g).then(()=>{o(m,u,f)}).catch(_=>{f(_)})}}).catch(m=>{f(m)})})}}async function Ly(r,e,n,s=!1,o=!1){const u=new R1(r);let f;if(o)f=x0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Qd(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Ly(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ly(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(r,e){const n=Jr(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Il(u,e??{}))return o;Yn(o,"already-initialized")}return n.initialize({options:e})}function C1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($i);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function D1(r,e,n){const s=Gs(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=M0(e),{host:f,port:m}=N1(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${f}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),O1()}function M0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function N1(r){const e=M0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Uy(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Uy(f)}}}function Uy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function O1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qi("not implemented")}_getIdTokenResponse(e){return Qi("not implemented")}_linkToIdToken(e,n){return Qi("not implemented")}_getReauthenticationResolver(e){return Qi("not implemented")}}async function k1(r,e){return ts(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(r,e){return ql(r,"POST","/v1/accounts:signInWithPassword",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(r,e){return ql(r,"POST","/v1/accounts:signInWithEmailLink",es(r,e))}async function V1(r,e){return ql(r,"POST","/v1/accounts:signInWithEmailLink",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Tm{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Nl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Nl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,n,"signInWithPassword",x1);case"emailLink":return M1(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,s,"signUpPassword",k1);case"emailLink":return V1(e,{idToken:n,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e){return ql(r,"POST","/v1/accounts:signInWithIdp",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class Us extends Tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=gm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Us(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Qa(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qa(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qa(e,n)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U1(r){const e=pl(gl(r)).link,n=e?pl(gl(e)).deep_link_id:null,s=pl(gl(r)).deep_link_id;return(s?pl(gl(s)).link:null)||s||n||e||r}class bm{constructor(e){var n,s,o,u,f,m;const g=pl(gl(e)),_=(n=g.apiKey)!==null&&n!==void 0?n:null,b=(s=g.oobCode)!==null&&s!==void 0?s:null,I=L1((o=g.mode)!==null&&o!==void 0?o:null);_e(_&&b&&I,"argument-error"),this.apiKey=_,this.operation=I,this.code=b,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=U1(e);try{return new bm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(e,n){return Nl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bm.parseLink(n);return _e(s,"argument-error"),Nl._fromEmailAndCode(e,s.code,s.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends V0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Hl{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Br.credential(n,s)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Hl{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Hl{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Hr.credential(n,s)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(r,e){return ql(r,"POST","/v1/accounts:signUp",es(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Yi._fromIdTokenResponse(e,s,o),f=zy(s);return new zs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=zy(s);return new zs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function zy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Un{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Pc(e,n,s,o)}}function P0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(r,u,e,s):u})}async function j1(r,e,n=!1){const s=await Dl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return zs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(r,e,n=!1){const{auth:s}=r;if(hi(s.app))return Promise.reject(Xi(s));const o="reauthenticate";try{const u=await Dl(r,P0(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=vm(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),zs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(r,e,n=!1){if(hi(r.app))return Promise.reject(Xi(r));const s="signIn",o=await P0(r,s,e),u=await zs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function q1(r,e){return L0(Gs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(r){const e=Gs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function H1(r,e,n){if(hi(r.app))return Promise.reject(Xi(r));const s=Gs(r),f=await Qd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&U0(r),g}),m=await zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function F1(r,e,n){return hi(r.app)?Promise.reject(Xi(r)):q1(Xt(r),no.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&U0(r),s})}function G1(r,e,n,s){return Xt(r).onIdTokenChanged(e,n,s)}function K1(r,e,n){return Xt(r).beforeAuthStateChanged(e,n)}function Q1(r,e,n,s){return Xt(r).onAuthStateChanged(e,n,s)}function Y1(r){return Xt(r).signOut()}const Lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=1e3,X1=10;class j0 extends z0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);d1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,X1):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j0.type="LOCAL";const W1=j0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends z0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B0.type="SESSION";const q0=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new nh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async _=>_(n.origin,u)),g=await Z1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const _=Am("",20);o.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(I){const M=I;if(M.data.eventId===_)switch(M.data.status){case"ack":clearTimeout(b),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(M.data.response);break;default:clearTimeout(b),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function eR(r){di().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function tR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function iR(){return H0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="firebaseLocalStorageDb",rR=1,Uc="firebaseLocalStorage",G0="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ih(r,e){return r.transaction([Uc],e?"readwrite":"readonly").objectStore(Uc)}function sR(){const r=indexedDB.deleteDatabase(F0);return new Fl(r).toPromise()}function Yd(){const r=indexedDB.open(F0,rR);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Uc,{keyPath:G0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Uc)?e(s):(s.close(),await sR(),e(await Yd()))})})}async function jy(r,e,n){const s=ih(r,!0).put({[G0]:e,value:n});return new Fl(s).toPromise()}async function aR(r,e){const n=ih(r,!1).get(e),s=await new Fl(n).toPromise();return s===void 0?null:s.value}function By(r,e){const n=ih(r,!0).delete(e);return new Fl(n).toPromise()}const oR=800,lR=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tR(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await jy(e,Lc,"1"),await By(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jy(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>By(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ih(o,!1).getAll();return new Fl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const uR=K0;new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(r,e){return e?$i(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends Tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qa(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qa(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qa(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hR(r){return L0(r.auth,new Sm(r),r.bypassAuthState)}function fR(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),B1(n,new Sm(r),r.bypassAuthState)}async function dR(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),j1(n,new Sm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return dR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Yn(this.auth,"internal-error")}}resolve(e){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new Bl(2e3,1e4);class Fa extends Q0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Ji(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Fa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="pendingRedirect",wc=new Map;class gR extends Q0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wc.get(this.auth._key());if(!e){try{const s=await _R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wc.set(this.auth._key(),e)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _R(r,e){const n=ER(e),s=vR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function yR(r,e){wc.set(r._key(),e)}function vR(r){return $i(r._redirectPersistence)}function ER(r){return Sc(pR,r.config.apiKey,r.name)}async function TR(r,e,n=!1){if(hi(r.app))return Promise.reject(Xi(r));const s=Gs(r),o=cR(s,e),f=await new gR(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=600*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Y0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qy(e))}saveEventToCache(e){this.cachedEventUids.add(qy(e)),this.lastProcessedEventTime=Date.now()}}function qy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Y0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(r,e={}){return ts(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function CR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await wR(r);for(const n of e)try{if(DR(n))return}catch{}Yn(r,"unauthorized-domain")}function DR(r){const e=Gd(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!IR.test(n))return!1;if(RR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new Bl(3e4,6e4);function Hy(){const r=di().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function OR(r){return new Promise((e,n)=>{var s,o,u;function f(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),n(fi(r,"network-request-failed"))},timeout:NR.get()})}if(!((o=(s=di().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=di().gapi)===null||u===void 0)&&u.load)f();else{const m=b1("iframefcb");return di()[m]=()=>{gapi.load?f():n(fi(r,"network-request-failed"))},k0(`${T1()}?onload=${m}`).catch(g=>n(g))}}).catch(e=>{throw Rc=null,e})}let Rc=null;function kR(r){return Rc=Rc||OR(r),Rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Bl(5e3,15e3),MR="__/auth/iframe",VR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UR(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?ym(e,VR):`https://${r.config.authDomain}/${MR}`,s={apiKey:e.apiKey,appName:r.name,v:Fs},o=LR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${jl(s).slice(1)}`}async function zR(r){const e=await kR(r),n=di().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:UR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=fi(r,"network-request-failed"),m=di().setTimeout(()=>{u(f)},xR.get());function g(){di().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BR=500,qR=600,HR="_blank",FR="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(r,e,n,s=BR,o=qR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},jR),{width:s.toString(),height:o.toString(),top:u,left:f}),_=$t().toLowerCase();n&&(m=w0(_)?HR:n),A0(_)&&(e=e||FR,g.scrollbars="yes");const b=Object.entries(g).reduce((M,[j,$])=>`${M}${j}=${$},`,"");if(f1(_)&&m!=="_self")return KR(e||"",m),new Fy(null);const I=window.open(e||"",m,b);_e(I,r,"popup-blocked");try{I.focus()}catch{}return new Fy(I)}function KR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="__/auth/handler",YR="emulator/auth/handler",$R=encodeURIComponent("fac");async function Gy(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Fs,eventId:o};if(e instanceof V0){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",OS(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,I]of Object.entries({}))f[b]=I}if(e instanceof Hl){const b=e.getScopes().filter(I=>I!=="");b.length>0&&(f.scopes=b.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const b of Object.keys(m))m[b]===void 0&&delete m[b];const g=await r._getAppCheckToken(),_=g?`#${$R}=${encodeURIComponent(g)}`:"";return`${XR(r)}?${jl(m).slice(1)}${_}`}function XR({config:r}){return r.emulator?ym(r,YR):`https://${r.authDomain}/${QR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q0,this._completeRedirectFn=TR,this._overrideRedirectResult=yR}async _openPopup(e,n,s,o){var u;Ji((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Gy(e,n,s,Gd(),o);return GR(e,f,Am())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Gy(e,n,s,Gd(),o);return eR(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Ji(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zR(e),s=new AR(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Nd];f!==void 0&&n(!!f),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N0()||S0()||Em()}}const ZR=WR;var Ky="@firebase/auth",Qy="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tI(r){Qn(new Ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O0(r)},_=new y1(s,o,u,g);return C1(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qn(new Ln("auth-internal",e=>{const n=Gs(e.getProvider("auth").getImmediate());return(s=>new JR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Ky,Qy,eI(r)),ln(Ky,Qy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=300,iI=s0("authIdTokenMaxAge")||nI;let Yy=null;const rI=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iI)return;const o=n==null?void 0:n.token;Yy!==o&&(Yy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $0(r=eh()){const e=Jr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=I1(r,{popupRedirectResolver:ZR,persistence:[uR,W1,q0]}),s=s0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=rI(u.toString());K1(n,f,()=>f(n.currentUser)),G1(n,m=>f(m))}}const o=n0("auth");return o&&D1(n,`http://${o}`),n}function sI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}v1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",sI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tI("Browser");var $y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ls,X0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function A(){}A.prototype=S.prototype,D.D=S.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(C,k,P){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return S.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,A){A||(A=0);var C=Array(16);if(typeof S=="string")for(var k=0;16>k;++k)C[k]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(k=0;16>k;++k)C[k]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=D.g[0],A=D.g[1],k=D.g[2];var P=D.g[3],R=S+(P^A&(k^P))+C[0]+3614090360&4294967295;S=A+(R<<7&4294967295|R>>>25),R=P+(k^S&(A^k))+C[1]+3905402710&4294967295,P=S+(R<<12&4294967295|R>>>20),R=k+(A^P&(S^A))+C[2]+606105819&4294967295,k=P+(R<<17&4294967295|R>>>15),R=A+(S^k&(P^S))+C[3]+3250441966&4294967295,A=k+(R<<22&4294967295|R>>>10),R=S+(P^A&(k^P))+C[4]+4118548399&4294967295,S=A+(R<<7&4294967295|R>>>25),R=P+(k^S&(A^k))+C[5]+1200080426&4294967295,P=S+(R<<12&4294967295|R>>>20),R=k+(A^P&(S^A))+C[6]+2821735955&4294967295,k=P+(R<<17&4294967295|R>>>15),R=A+(S^k&(P^S))+C[7]+4249261313&4294967295,A=k+(R<<22&4294967295|R>>>10),R=S+(P^A&(k^P))+C[8]+1770035416&4294967295,S=A+(R<<7&4294967295|R>>>25),R=P+(k^S&(A^k))+C[9]+2336552879&4294967295,P=S+(R<<12&4294967295|R>>>20),R=k+(A^P&(S^A))+C[10]+4294925233&4294967295,k=P+(R<<17&4294967295|R>>>15),R=A+(S^k&(P^S))+C[11]+2304563134&4294967295,A=k+(R<<22&4294967295|R>>>10),R=S+(P^A&(k^P))+C[12]+1804603682&4294967295,S=A+(R<<7&4294967295|R>>>25),R=P+(k^S&(A^k))+C[13]+4254626195&4294967295,P=S+(R<<12&4294967295|R>>>20),R=k+(A^P&(S^A))+C[14]+2792965006&4294967295,k=P+(R<<17&4294967295|R>>>15),R=A+(S^k&(P^S))+C[15]+1236535329&4294967295,A=k+(R<<22&4294967295|R>>>10),R=S+(k^P&(A^k))+C[1]+4129170786&4294967295,S=A+(R<<5&4294967295|R>>>27),R=P+(A^k&(S^A))+C[6]+3225465664&4294967295,P=S+(R<<9&4294967295|R>>>23),R=k+(S^A&(P^S))+C[11]+643717713&4294967295,k=P+(R<<14&4294967295|R>>>18),R=A+(P^S&(k^P))+C[0]+3921069994&4294967295,A=k+(R<<20&4294967295|R>>>12),R=S+(k^P&(A^k))+C[5]+3593408605&4294967295,S=A+(R<<5&4294967295|R>>>27),R=P+(A^k&(S^A))+C[10]+38016083&4294967295,P=S+(R<<9&4294967295|R>>>23),R=k+(S^A&(P^S))+C[15]+3634488961&4294967295,k=P+(R<<14&4294967295|R>>>18),R=A+(P^S&(k^P))+C[4]+3889429448&4294967295,A=k+(R<<20&4294967295|R>>>12),R=S+(k^P&(A^k))+C[9]+568446438&4294967295,S=A+(R<<5&4294967295|R>>>27),R=P+(A^k&(S^A))+C[14]+3275163606&4294967295,P=S+(R<<9&4294967295|R>>>23),R=k+(S^A&(P^S))+C[3]+4107603335&4294967295,k=P+(R<<14&4294967295|R>>>18),R=A+(P^S&(k^P))+C[8]+1163531501&4294967295,A=k+(R<<20&4294967295|R>>>12),R=S+(k^P&(A^k))+C[13]+2850285829&4294967295,S=A+(R<<5&4294967295|R>>>27),R=P+(A^k&(S^A))+C[2]+4243563512&4294967295,P=S+(R<<9&4294967295|R>>>23),R=k+(S^A&(P^S))+C[7]+1735328473&4294967295,k=P+(R<<14&4294967295|R>>>18),R=A+(P^S&(k^P))+C[12]+2368359562&4294967295,A=k+(R<<20&4294967295|R>>>12),R=S+(A^k^P)+C[5]+4294588738&4294967295,S=A+(R<<4&4294967295|R>>>28),R=P+(S^A^k)+C[8]+2272392833&4294967295,P=S+(R<<11&4294967295|R>>>21),R=k+(P^S^A)+C[11]+1839030562&4294967295,k=P+(R<<16&4294967295|R>>>16),R=A+(k^P^S)+C[14]+4259657740&4294967295,A=k+(R<<23&4294967295|R>>>9),R=S+(A^k^P)+C[1]+2763975236&4294967295,S=A+(R<<4&4294967295|R>>>28),R=P+(S^A^k)+C[4]+1272893353&4294967295,P=S+(R<<11&4294967295|R>>>21),R=k+(P^S^A)+C[7]+4139469664&4294967295,k=P+(R<<16&4294967295|R>>>16),R=A+(k^P^S)+C[10]+3200236656&4294967295,A=k+(R<<23&4294967295|R>>>9),R=S+(A^k^P)+C[13]+681279174&4294967295,S=A+(R<<4&4294967295|R>>>28),R=P+(S^A^k)+C[0]+3936430074&4294967295,P=S+(R<<11&4294967295|R>>>21),R=k+(P^S^A)+C[3]+3572445317&4294967295,k=P+(R<<16&4294967295|R>>>16),R=A+(k^P^S)+C[6]+76029189&4294967295,A=k+(R<<23&4294967295|R>>>9),R=S+(A^k^P)+C[9]+3654602809&4294967295,S=A+(R<<4&4294967295|R>>>28),R=P+(S^A^k)+C[12]+3873151461&4294967295,P=S+(R<<11&4294967295|R>>>21),R=k+(P^S^A)+C[15]+530742520&4294967295,k=P+(R<<16&4294967295|R>>>16),R=A+(k^P^S)+C[2]+3299628645&4294967295,A=k+(R<<23&4294967295|R>>>9),R=S+(k^(A|~P))+C[0]+4096336452&4294967295,S=A+(R<<6&4294967295|R>>>26),R=P+(A^(S|~k))+C[7]+1126891415&4294967295,P=S+(R<<10&4294967295|R>>>22),R=k+(S^(P|~A))+C[14]+2878612391&4294967295,k=P+(R<<15&4294967295|R>>>17),R=A+(P^(k|~S))+C[5]+4237533241&4294967295,A=k+(R<<21&4294967295|R>>>11),R=S+(k^(A|~P))+C[12]+1700485571&4294967295,S=A+(R<<6&4294967295|R>>>26),R=P+(A^(S|~k))+C[3]+2399980690&4294967295,P=S+(R<<10&4294967295|R>>>22),R=k+(S^(P|~A))+C[10]+4293915773&4294967295,k=P+(R<<15&4294967295|R>>>17),R=A+(P^(k|~S))+C[1]+2240044497&4294967295,A=k+(R<<21&4294967295|R>>>11),R=S+(k^(A|~P))+C[8]+1873313359&4294967295,S=A+(R<<6&4294967295|R>>>26),R=P+(A^(S|~k))+C[15]+4264355552&4294967295,P=S+(R<<10&4294967295|R>>>22),R=k+(S^(P|~A))+C[6]+2734768916&4294967295,k=P+(R<<15&4294967295|R>>>17),R=A+(P^(k|~S))+C[13]+1309151649&4294967295,A=k+(R<<21&4294967295|R>>>11),R=S+(k^(A|~P))+C[4]+4149444226&4294967295,S=A+(R<<6&4294967295|R>>>26),R=P+(A^(S|~k))+C[11]+3174756917&4294967295,P=S+(R<<10&4294967295|R>>>22),R=k+(S^(P|~A))+C[2]+718787259&4294967295,k=P+(R<<15&4294967295|R>>>17),R=A+(P^(k|~S))+C[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+P&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var A=S-this.blockSize,C=this.B,k=this.h,P=0;P<S;){if(k==0)for(;P<=A;)o(this,D,P),P+=this.blockSize;if(typeof D=="string"){for(;P<S;)if(C[k++]=D.charCodeAt(P++),k==this.blockSize){o(this,C),k=0;break}}else for(;P<S;)if(C[k++]=D[P++],k==this.blockSize){o(this,C),k=0;break}}this.h=k,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var A=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=A&255,A/=256;for(this.u(D),D=Array(16),S=A=0;4>S;++S)for(var C=0;32>C;C+=8)D[A++]=this.g[S]>>>C&255;return D};function u(D,S){var A=m;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=S(D)}function f(D,S){this.h=S;for(var A=[],C=!0,k=D.length-1;0<=k;k--){var P=D[k]|0;C&&P==S||(A[k]=P,C=!1)}this.g=A}var m={};function g(D){return-128<=D&&128>D?u(D,function(S){return new f([S|0],0>S?-1:0)}):new f([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return I;if(0>D)return G(_(-D));for(var S=[],A=1,C=0;D>=A;C++)S[C]=D/A|0,A*=4294967296;return new f(S,0)}function b(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return G(b(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(S,8)),C=I,k=0;k<D.length;k+=8){var P=Math.min(8,D.length-k),R=parseInt(D.substring(k,k+P),S);8>P?(P=_(Math.pow(S,P)),C=C.j(P).add(_(R))):(C=C.j(A),C=C.add(_(R)))}return C}var I=g(0),M=g(1),j=g(16777216);r=f.prototype,r.m=function(){if(J(this))return-G(this).m();for(var D=0,S=1,A=0;A<this.g.length;A++){var C=this.i(A);D+=(0<=C?C:4294967296+C)*S,S*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if($(this))return"0";if(J(this))return"-"+G(this).toString(D);for(var S=_(Math.pow(D,6)),A=this,C="";;){var k=Ee(A,S).g;A=he(A,k.j(S));var P=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=k,$(A))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function $(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function J(D){return D.h==-1}r.l=function(D){return D=he(this,D),J(D)?-1:$(D)?0:1};function G(D){for(var S=D.g.length,A=[],C=0;C<S;C++)A[C]=~D.g[C];return new f(A,~D.h).add(M)}r.abs=function(){return J(this)?G(this):this},r.add=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],C=0,k=0;k<=S;k++){var P=C+(this.i(k)&65535)+(D.i(k)&65535),R=(P>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);C=R>>>16,P&=65535,R&=65535,A[k]=R<<16|P}return new f(A,A[A.length-1]&-2147483648?-1:0)};function he(D,S){return D.add(G(S))}r.j=function(D){if($(this)||$(D))return I;if(J(this))return J(D)?G(this).j(G(D)):G(G(this).j(D));if(J(D))return G(this.j(G(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var S=this.g.length+D.g.length,A=[],C=0;C<2*S;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<D.g.length;k++){var P=this.i(C)>>>16,R=this.i(C)&65535,nt=D.i(k)>>>16,it=D.i(k)&65535;A[2*C+2*k]+=R*it,ue(A,2*C+2*k),A[2*C+2*k+1]+=P*it,ue(A,2*C+2*k+1),A[2*C+2*k+1]+=R*nt,ue(A,2*C+2*k+1),A[2*C+2*k+2]+=P*nt,ue(A,2*C+2*k+2)}for(C=0;C<S;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=S;C<2*S;C++)A[C]=0;return new f(A,0)};function ue(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function le(D,S){this.g=D,this.h=S}function Ee(D,S){if($(S))throw Error("division by zero");if($(D))return new le(I,I);if(J(D))return S=Ee(G(D),S),new le(G(S.g),G(S.h));if(J(S))return S=Ee(D,G(S)),new le(G(S.g),S.h);if(30<D.g.length){if(J(D)||J(S))throw Error("slowDivide_ only works with positive integers.");for(var A=M,C=S;0>=C.l(D);)A=fe(A),C=fe(C);var k=Ae(A,1),P=Ae(C,1);for(C=Ae(C,2),A=Ae(A,2);!$(C);){var R=P.add(C);0>=R.l(D)&&(k=k.add(A),P=R),C=Ae(C,1),A=Ae(A,1)}return S=he(D,k.j(S)),new le(k,S)}for(k=I;0<=D.l(S);){for(A=Math.max(1,Math.floor(D.m()/S.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=_(A),R=P.j(S);J(R)||0<R.l(D);)A-=C,P=_(A),R=P.j(S);$(P)&&(P=M),k=k.add(P),D=he(D,R)}return new le(k,D)}r.A=function(D){return Ee(this,D).h},r.and=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)&D.i(C);return new f(A,this.h&D.h)},r.or=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)|D.i(C);return new f(A,this.h|D.h)},r.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)^D.i(C);return new f(A,this.h^D.h)};function fe(D){for(var S=D.g.length+1,A=[],C=0;C<S;C++)A[C]=D.i(C)<<1|D.i(C-1)>>>31;return new f(A,D.h)}function Ae(D,S){var A=S>>5;S%=32;for(var C=D.g.length-A,k=[],P=0;P<C;P++)k[P]=0<S?D.i(P+A)>>>S|D.i(P+A+1)<<32-S:D.i(P+A);return new f(k,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,X0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=b,Ls=f}).apply(typeof $y<"u"?$y:typeof self<"u"?self:typeof window<"u"?window:{});var _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W0,_l,Z0,Ic,$d,J0,eE,tE;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,y){return c==Array.prototype||c==Object.prototype||(c[p]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof _c=="object"&&_c];for(var p=0;p<c.length;++p){var y=c[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var y=s;c=c.split(".");for(var T=0;T<c.length-1;T++){var L=c[T];if(!(L in y))break e;y=y[L]}c=c[c.length-1],T=y[c],p=p(T),p!=T&&p!=null&&e(y,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var y=0,T=!1,L={next:function(){if(!T&&y<c.length){var B=y++;return{value:p(B,c[B]),done:!1}}return T=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function _(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function b(c,p,y){return c.call.apply(c.bind,arguments)}function I(c,p,y){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,T),c.apply(p,L)}}return function(){return c.apply(p,arguments)}}function M(c,p,y){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:I,M.apply(null,arguments)}function j(c,p){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function $(c,p){function y(){}y.prototype=p.prototype,c.aa=p.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(T,L,B){for(var Z=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Z[Me-2]=arguments[Me];return p.prototype[L].apply(T,Z)}}function J(c){const p=c.length;if(0<p){const y=Array(p);for(let T=0;T<p;T++)y[T]=c[T];return y}return[]}function G(c,p){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(g(T)){const L=c.length||0,B=T.length||0;c.length=L+B;for(let Z=0;Z<B;Z++)c[L+Z]=T[Z]}else c.push(T)}}class he{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ue(c){return/^[\s\xa0]*$/.test(c)}function le(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Ee(c){return Ee[" "](c),c}Ee[" "]=function(){};var fe=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Ae(c,p,y){for(const T in c)p.call(y,c[T],T,c)}function D(c,p){for(const y in c)p.call(void 0,c[y],y,c)}function S(c){const p={};for(const y in c)p[y]=c[y];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,p){let y,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(y in T)c[y]=T[y];for(let B=0;B<A.length;B++)y=A[B],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function k(c){var p=1;c=c.split(":");const y=[];for(;0<p&&c.length;)y.push(c.shift()),p--;return c.length&&y.push(c.join(":")),y}function P(c){m.setTimeout(()=>{throw c},0)}function R(){var c=qe;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const T=it.get();T.set(p,y),this.h?this.h.next=T:this.g=T,this.h=T}}var it=new he(()=>new ee,c=>c.reset());class ee{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,ce=!1,qe=new nt,N=()=>{const c=m.Promise.resolve(void 0);ge=()=>{c.then(X)}};var X=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){P(y)}var p=it;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}ce=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ne=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};m.addEventListener("test",y,p),m.removeEventListener("test",y,p)}catch{}return c})();function Re(c,p){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(fe){e:{try{Ee(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=c.fromElement:y=="mouseout"&&(p=c.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}$(Re,te);var Se={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var mt="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function rt(c,p,y,T,L){this.listener=c,this.proxy=null,this.src=p,this.type=y,this.capture=!!T,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function Ge(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Wt(c){this.src=c,this.g={},this.h=0}Wt.prototype.add=function(c,p,y,T,L){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var Z=yn(c,p,T,L);return-1<Z?(p=c[Z],y||(p.fa=!1)):(p=new rt(p,this.src,B,!!T,L),p.fa=y,c.push(p)),p};function Ei(c,p){var y=p.type;if(y in c.g){var T=c.g[y],L=Array.prototype.indexOf.call(T,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(T,L,1),B&&(Ge(p),c.g[y].length==0&&(delete c.g[y],c.h--))}}function yn(c,p,y,T){for(var L=0;L<c.length;++L){var B=c[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==T)return L}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),ir={};function Ti(c,p,y,T,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Ti(c,p[B],y,T,L);return null}return y=$l(y),c&&c[mt]?c.K(p,y,_(T)?!!T.capture:!1,L):oo(c,p,y,!1,T,L)}function oo(c,p,y,T,L,B){if(!p)throw Error("Invalid event type");var Z=_(L)?!!L.capture:!!L,Me=lo(c);if(Me||(c[nr]=Me=new Wt(c)),y=Me.add(p,y,T,Z,B),y.proxy)return y;if(T=Xs(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)ne||(L=Z),L===void 0&&(L=!1),c.addEventListener(p.toString(),T,L);else if(c.attachEvent)c.attachEvent(Zs(p.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xs(){function c(y){return p.call(c.src,c.listener,y)}const p=vh;return c}function Ws(c,p,y,T,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ws(c,p[B],y,T,L);else T=_(T)?!!T.capture:!!T,y=$l(y),c&&c[mt]?(c=c.i,p=String(p).toString(),p in c.g&&(B=c.g[p],y=yn(B,y,T,L),-1<y&&(Ge(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete c.g[p],c.h--)))):c&&(c=lo(c))&&(p=c.g[p.toString()],c=-1,p&&(c=yn(p,y,T,L)),(y=-1<c?p[c]:null)&&ns(y))}function ns(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[mt])Ei(p.i,c);else{var y=c.type,T=c.proxy;p.removeEventListener?p.removeEventListener(y,T,c.capture):p.detachEvent?p.detachEvent(Zs(y),T):p.addListener&&p.removeListener&&p.removeListener(T),(y=lo(p))?(Ei(y,c),y.h==0&&(y.src=null,p[nr]=null)):Ge(c)}}}function Zs(c){return c in ir?ir[c]:ir[c]="on"+c}function vh(c,p){if(c.da)c=!0;else{p=new Re(p,this);var y=c.listener,T=c.ha||c.src;c.fa&&ns(c),c=y.call(T,p)}return c}function lo(c){return c=c[nr],c instanceof Wt?c:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $l(c){return typeof c=="function"?c:(c[rn]||(c[rn]=function(p){return c.handleEvent(p)}),c[rn])}function vt(){ae.call(this),this.i=new Wt(this),this.M=this,this.F=null}$(vt,ae),vt.prototype[mt]=!0,vt.prototype.removeEventListener=function(c,p,y,T){Ws(this,c,p,y,T)};function Ct(c,p){var y,T=c.F;if(T)for(y=[];T;T=T.F)y.push(T);if(c=c.M,T=p.type||p,typeof p=="string")p=new te(p,c);else if(p instanceof te)p.target=p.target||c;else{var L=p;p=new te(T,c),C(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var Z=p.g=y[B];L=bi(Z,T,!0,p)&&L}if(Z=p.g=c,L=bi(Z,T,!0,p)&&L,L=bi(Z,T,!1,p)&&L,y)for(B=0;B<y.length;B++)Z=p.g=y[B],L=bi(Z,T,!1,p)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var y=c.g[p],T=0;T<y.length;T++)Ge(y[T]);delete c.g[p],c.h--}}this.F=null},vt.prototype.K=function(c,p,y,T){return this.i.add(String(c),p,!1,y,T)},vt.prototype.L=function(c,p,y,T){return this.i.add(String(c),p,!0,y,T)};function bi(c,p,y,T){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==y){var Me=Z.listener,Tt=Z.ha||Z.src;Z.fa&&Ei(c.i,Z),L=Me.call(Tt,T)!==!1&&L}}return L&&!T.defaultPrevented}function Xl(c,p,y){if(typeof c=="function")y&&(c=M(c,y));else if(c&&typeof c.handleEvent=="function")c=M(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function uo(c){c.g=Xl(()=>{c.g=null,c.i&&(c.i=!1,uo(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Eh extends ae{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(c){ae.call(this),this.h=c,this.g={}}$(is,ae);var rr=[];function Ht(c){Ae(c.g,function(p,y){this.g.hasOwnProperty(y)&&ns(p)},c),c.g={}}is.prototype.N=function(){is.aa.N.call(this),Ht(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=m.JSON.stringify,$n=m.JSON.parse,Zt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function ho(){}ho.prototype.h=null;function Wl(c){return c.h||(c.h=c.i())}function Zl(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){te.call(this,"d")}$(sr,te);function zn(){te.call(this,"c")}$(zn,te);var vn={},ar=null;function Js(){return ar=ar||new vt}vn.La="serverreachability";function fo(c){te.call(this,vn.La,c)}$(fo,te);function or(c){const p=Js();Ct(p,new fo(p))}vn.STAT_EVENT="statevent";function ea(c,p){te.call(this,vn.STAT_EVENT,c),this.stat=p}$(ea,te);function ht(c){const p=Js();Ct(p,new ea(p,c))}vn.Ma="timingevent";function Jl(c,p){te.call(this,vn.Ma,c),this.size=p}$(Jl,te);function lr(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function eu(c,p,y,T,L,B){c.info(function(){if(c.g)if(B)for(var Z="",Me=B.split("&"),Tt=0;Tt<Me.length;Tt++){var Ve=Me[Tt].split("=");if(1<Ve.length){var Ot=Ve[0];Ve=Ve[1];var bt=Ot.split("_");Z=2<=bt.length&&bt[1]=="type"?Z+(Ot+"="+Ve+"&"):Z+(Ot+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function tu(c,p,y,T,L,B,Z){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+Z})}function cr(c,p,y,T){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Dt(c,y)+(T?" "+T:"")})}function Wn(c,p){c.info(function(){return"TIMEOUT: "+p})}ur.prototype.info=function(){};function Dt(c,p){if(!c.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var T=y[c];if(!(2>T.length)){var L=T[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return co(y)}catch{return p}}var Et={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rs;function ta(){}$(ta,ho),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},rs=new ta;function Zn(c,p,y,T){this.j=c,this.i=p,this.l=y,this.R=T||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var hr={},ss={};function jn(c,p,y){c.L=1,c.v=ls(st(p)),c.m=y,c.P=!0,Si(c,null)}function Si(c,p){c.F=Date.now(),Ze(c),c.A=st(c.v);var y=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ii(y.i,"t",T),c.C=0,y=c.j.J,c.h=new mo,c.g=pu(c.j,y?p:null,!c.m),0<c.O&&(c.M=new Eh(M(c.Y,c,c.g),c.O)),p=c.U,y=c.g,T=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(rr[0]=L.toString()),L=rr);for(var B=0;B<L.length;B++){var Z=Ti(y,L[B],T||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),or(),eu(c.i,c.u,c.A,c.l,c.R,c.m)}Zn.prototype.ca=function(c){c=c.target;const p=this.M;p&&Sn(c)==3?p.j():this.Y(c)},Zn.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Sn(this.g);var p=this.g.Ba();const Oi=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||ou(this.g)))){this.J||bt!=4||p==7||(p==8||0>=Oi?or(3):or(2)),na(this);var y=this.g.Z();this.X=y;t:if(fr(this)){var T=ou(this.g);c="";var L=T.length,B=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),cn(this);var Z="";break t}this.h.i=new m.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,c+=this.h.i.decode(T[p],{stream:!(B&&p==L-1)});T.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,tu(this.i,this.u,this.A,this.l,this.R,bt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,Tt=this.g;if((Me=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(Me)){var Ve=Me;break t}}Ve=null}if(y=Ve)cr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hn(this,y);else{this.o=!1,this.s=3,ht(12),sn(this),cn(this);break e}}if(this.P){y=!0;let Pt;for(;!this.J&&this.C<Z.length;)if(Pt=dr(this,Z),Pt==ss){bt==4&&(this.s=4,ht(14),y=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==hr){this.s=4,ht(15),cr(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else cr(this.i,this.l,Pt,null),hn(this,Pt);if(fr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||Z.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)cr(this.i,this.l,Z,"[Invalid Chunked Response]"),sn(this),cn(this);else if(0<Z.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ps(Ot),Ot.M=!0,ht(11))}}else cr(this.i,this.l,Z,null),hn(this,Z);bt==4&&sn(this),this.o&&!this.J&&(bt==4?fu(this.j,this):(this.o=!1,Ze(this)))}else Rh(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),sn(this),cn(this)}}}catch{}finally{}};function fr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function dr(c,p){var y=c.C,T=p.indexOf(`
`,y);return T==-1?ss:(y=Number(p.substring(y,T)),isNaN(y)?hr:(T+=1,T+y>p.length?ss:(p=p.slice(T,T+y),c.C=T+y,p)))}Zn.prototype.cancel=function(){this.J=!0,sn(this)};function Ze(c){c.S=Date.now()+c.I,po(c,c.I)}function po(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=lr(M(c.ba,c),p)}function na(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Zn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Wn(this.i,this.A),this.L!=2&&(or(),ht(17)),sn(this),this.s=2,cn(this)):po(this,this.S-c)};function cn(c){c.j.G==0||c.J||fu(c.j,c)}function sn(c){na(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,Ht(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function hn(c,p){try{var y=c.j;if(y.G!=0&&(y.g==c||mr(y.h,c))){if(!c.K&&mr(y.h,c)&&y.G==3){try{var T=y.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)fa(y),ca(y);else break e;Ro(y),ht(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=lr(M(y.Za,y),6e3));if(1>=nu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ni(y,11)}else if((c.K||y.g==c)&&fa(y),!ue(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ve=L[p];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const Ot=Ve[3];Ot!=null&&(y.la=Ot,y.j.info("VER="+y.la));const bt=Ve[4];bt!=null&&(y.Aa=bt,y.j.info("SVER="+y.Aa));const Oi=Ve[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(T=1.5*Oi,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Pt=c.g;if(Pt){const si=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var B=T.h;B.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(pr(B,B.h),B.h=null))}if(T.D){const Co=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(T.ya=Co,ze(T.I,T.D,Co))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var Z=c;if(T.qa=mu(T,T.J?T.ia:null,T.W),Z.K){En(T.h,Z);var Me=Z,Tt=T.L;Tt&&(Me.I=Tt),Me.B&&(na(Me),Ze(Me)),T.g=Z}else cu(T);0<y.i.length&&ha(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Ni(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ni(y,7):So(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}or(4)}catch{}}var Th=class{constructor(c,p){this.g=c,this.map=p}};function go(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function nu(c){return c.h?1:c.g?c.g.size:0}function mr(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function pr(c,p){c.g?c.g.add(p):c.h=p}function En(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}go.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Jt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const y of c.g.values())p=p.concat(y.D);return p}return J(c.i)}function iu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],y=c.length,T=0;T<y;T++)p.push(c[T]);return p}p=[],y=0;for(T in c)p[y++]=c[T];return p}function bh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var y=0;y<c;y++)p.push(y);return p}p=[],y=0;for(const T in c)p[y++]=T;return p}}}function as(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var y=bh(c),T=iu(c),L=T.length,B=0;B<L;B++)p.call(void 0,T[B],y&&y[B],c)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ia(c,p){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var T=c[y].indexOf("="),L=null;if(0<=T){var B=c[y].substring(0,T);L=c[y].substring(T+1)}else B=c[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function wi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wi){this.h=c.h,gr(this,c.j),this.o=c.o,this.g=c.g,os(this,c.s),this.l=c.l;var p=c.i,y=new Jn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),ra(this,y),this.m=c.m}else c&&(p=String(c).match(yo))?(this.h=!1,gr(this,p[1]||"",!0),this.o=_r(p[2]||""),this.g=_r(p[3]||"",!0),os(this,p[4]),this.l=_r(p[5]||"",!0),ra(this,p[6]||"",!0),this.m=_r(p[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}wi.prototype.toString=function(){var c=[],p=this.j;p&&c.push(Tn(p,vo,!0),":");var y=this.g;return(y||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Tn(p,vo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Tn(y,y.charAt(0)=="/"?Eo:ru,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Tn(y,wh)),c.join("")};function st(c){return new wi(c)}function gr(c,p,y){c.j=y?_r(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function os(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function ra(c,p,y){p instanceof Jn?(c.i=p,To(c.i,c.h)):(y||(p=Tn(p,Sh)),c.i=new Jn(p,c.h))}function ze(c,p,y){c.i.set(p,y)}function ls(c){return ze(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function _r(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Tn(c,p,y){return typeof c=="string"?(c=encodeURI(c).replace(p,Ah),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ah(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var vo=/[#\/\?@]/g,ru=/[#\?:]/g,Eo=/[#\?]/g,Sh=/[#\?@]/g,wh=/#/g;function Jn(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function bn(c){c.g||(c.g=new Map,c.h=0,c.i&&ia(c.i,function(p,y){c.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Jn.prototype,r.add=function(c,p){bn(this),this.i=null,c=Ci(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(p),this.h+=1,this};function sa(c,p){bn(c),p=Ci(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ri(c,p){return bn(c),p=Ci(c,p),c.g.has(p)}r.forEach=function(c,p){bn(this),this.g.forEach(function(y,T){y.forEach(function(L){c.call(p,L,T,this)},this)},this)},r.na=function(){bn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let T=0;T<p.length;T++){const L=c[T];for(let B=0;B<L.length;B++)y.push(p[T])}return y},r.V=function(c){bn(this);let p=[];if(typeof c=="string")Ri(this,c)&&(p=p.concat(this.g.get(Ci(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)p=p.concat(c[y])}return p},r.set=function(c,p){return bn(this),this.i=null,c=Ci(this,c),Ri(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Ii(c,p,y){sa(c,p),0<y.length&&(c.i=null,c.g.set(Ci(c,p),J(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var T=p[y];const B=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var L=B;Z[T]!==""&&(L+="="+encodeURIComponent(String(Z[T]))),c.push(L)}}return this.i=c.join("&")};function Ci(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function To(c,p){p&&!c.j&&(bn(c),c.i=null,c.g.forEach(function(y,T){var L=T.toLowerCase();T!=L&&(sa(this,T),Ii(this,L,y))},c)),c.j=p}function su(c,p){const y=new ur;if(m.Image){const T=new Image;T.onload=j(An,y,"TestLoadImage: loaded",!0,p,T),T.onerror=j(An,y,"TestLoadImage: error",!1,p,T),T.onabort=j(An,y,"TestLoadImage: abort",!1,p,T),T.ontimeout=j(An,y,"TestLoadImage: timeout",!1,p,T),m.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else p(!1)}function us(c,p){const y=new ur,T=new AbortController,L=setTimeout(()=>{T.abort(),An(y,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:T.signal}).then(B=>{clearTimeout(L),B.ok?An(y,"TestPingServer: ok",!0,p):An(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),An(y,"TestPingServer: error",!1,p)})}function An(c,p,y,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(y)}catch{}}function cs(){this.g=new Zt}function ei(c,p,y){const T=y||"";try{as(c,function(L,B){let Z=L;_(L)&&(Z=co(L)),p.push(T+B+"="+encodeURIComponent(Z))})}catch(L){throw p.push(T+"type="+encodeURIComponent("_badmap")),L}}function yr(c){this.l=c.Ub||null,this.j=c.eb||!1}$(yr,ho),yr.prototype.g=function(){return new Di(this.l,this.j)},yr.prototype.i=(function(c){return function(){return c}})({});function Di(c,p){vt.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Di,vt),r=Di.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ni(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?ti(this):ni(this),this.readyState==3&&bo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ti(this))},r.Qa=function(c){this.g&&(this.response=c,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ni(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=p.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ao(c){let p="";return Ae(c,function(y,T){p+=T,p+=":",p+=y,p+=`\r
`}),p}function Nt(c,p,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Ao(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):ze(c,p,y))}function He(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(He,vt);var aa=/^https?$/i,hs=["POST","PUT"];r=He.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rs.g(),this.v=this.o?Wl(this.o):Wl(rs),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(B){au(this,B);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)y.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(hs,p,void 0))||T||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){au(this,B)}};function au(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,oa(c),ii(c)}function oa(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),ii(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),He.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Xl(c.Ea,0,c);else if(Ct(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const Z=c.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var T;if(T=Z===0){var L=String(c.D).match(yo)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),T=!aa.test(L?L.toLowerCase():"")}y=T}if(y)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var B=2<Sn(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",oa(c)}}finally{ii(c)}}}}function ii(c,p){if(c.g){fs(c);const y=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ct(c,"ready");try{y.onreadystatechange=T}catch{}}}function fs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),$n(p)}};function ou(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(c){const p={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(ue(c[T]))continue;var y=k(c[T]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}D(p,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(c,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||p}function ua(c){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,c),this.cb=ds("retryDelaySeedMs",1e4,c),this.Wa=ds("forwardChannelMaxRetries",2,c),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new go(c&&c.concurrentRequestLimit),this.Da=new cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(c,p,y,T){ht(0),this.W=c,this.H=p||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=mu(this,null,this.W),ha(this)};function So(c){if(lu(c),c.G==3){var p=c.U++,y=st(c.I);if(ze(y,"SID",c.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),ms(c,y),p=new Zn(c,c.j,p),p.L=2,p.v=ls(st(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=p.v,y=!0),y||(p.g=pu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ze(p)}du(c)}function ca(c){c.g&&(ps(c),c.g.cancel(),c.g=null)}function lu(c){ca(c),c.u&&(m.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ha(c){if(!_o(c.h)&&!c.s){c.s=!0;var p=c.Ga;ge||N(),ce||(ge(),ce=!0),qe.add(p,c),c.B=0}}function Ih(c,p){return nu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=lr(M(c.Ga,c,p),Io(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new Zn(this,this.j,c);let B=this.o;if(this.S&&(B?(B=S(B),C(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=uu(this,L,p),y=st(this.I),ze(y,"RID",c),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),ms(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Ao(B)))+"&"+p:this.m&&Nt(y,this.m,B)),pr(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,jn(L,y,null)):jn(L,y,p),this.G=2}}else this.G==3&&(c?wo(this,c):this.i.length==0||_o(this.h)||wo(this))};function wo(c,p){var y;p?y=p.l:y=c.U++;const T=st(c.I);ze(T,"SID",c.K),ze(T,"RID",y),ze(T,"AID",c.T),ms(c,T),c.m&&c.o&&Nt(T,c.m,c.o),y=new Zn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),p&&(c.i=p.D.concat(c.i)),p=uu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),pr(c.h,y),jn(y,T,p)}function ms(c,p){c.H&&Ae(c.H,function(y,T){ze(p,T,y)}),c.l&&as({},function(y,T){ze(p,T,y)})}function uu(c,p,y){y=Math.min(c.i.length,y);var T=c.l?M(c.l.Na,c.l,c):null;e:{var L=c.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let Me=!0;for(let Tt=0;Tt<y;Tt++){let Ve=L[Tt].g;const Ot=L[Tt].map;if(Ve-=B,0>Ve)B=Math.max(0,L[Tt].g-100),Me=!1;else try{ei(Ot,Z,"req"+Ve+"_")}catch{T&&T(Ot)}}if(Me){T=Z.join("&");break e}}}return c=c.i.splice(0,y),p.D=c,T}function cu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ge||N(),ce||(ge(),ce=!0),qe.add(p,c),c.v=0}}function Ro(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=lr(M(c.Fa,c),Io(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=lr(M(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),ca(this),hu(this))};function ps(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function hu(c){c.g=new Zn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=st(c.qa);ze(p,"RID","rpc"),ze(p,"SID",c.K),ze(p,"AID",c.T),ze(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&ze(p,"TO",c.ja),ze(p,"TYPE","xmlhttp"),ms(c,p),c.m&&c.o&&Nt(p,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=ls(st(p)),y.m=null,y.P=!0,Si(y,c)}r.Za=function(){this.C!=null&&(this.C=null,ca(this),Ro(this),ht(19))};function fa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function fu(c,p){var y=null;if(c.g==p){fa(c),ps(c),c.g=null;var T=2}else if(mr(c.h,p))y=p.D,En(c.h,p),T=1;else return;if(c.G!=0){if(p.o)if(T==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=c.B;T=Js(),Ct(T,new Jl(T,y)),ha(c)}else cu(c);else if(L=p.s,L==3||L==0&&0<p.X||!(T==1&&Ih(c,p)||T==2&&Ro(c)))switch(y&&0<y.length&&(p=c.h,p.i=p.i.concat(y)),L){case 1:Ni(c,5);break;case 4:Ni(c,10);break;case 3:Ni(c,6);break;default:Ni(c,2)}}}function Io(c,p){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*p}function Ni(c,p){if(c.j.info("Error code "+p),p==2){var y=M(c.fb,c),T=c.Xa;const L=!T;T=new wi(T||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gr(T,"https"),ls(T),L?su(T.toString(),y):us(T.toString(),y)}else ht(2);c.G=0,c.l&&c.l.sa(p),du(c),lu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function du(c){if(c.G=0,c.ka=[],c.l){const p=Jt(c.h);(p.length!=0||c.i.length!=0)&&(G(c.ka,p),G(c.ka,c.i),c.h.i.length=0,J(c.i),c.i.length=0),c.l.ra()}}function mu(c,p,y){var T=y instanceof wi?st(y):new wi(y);if(T.g!="")p&&(T.g=p+"."+T.g),os(T,T.s);else{var L=m.location;T=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new wi(null);T&&gr(B,T),p&&(B.g=p),L&&os(B,L),y&&(B.l=y),T=B}return y=c.D,p=c.ya,y&&p&&ze(T,y,p),ze(T,"VER",c.la),ms(c,T),T}function pu(c,p,y){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new He(new yr({eb:y})):new He(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function da(){}da.prototype.g=function(c,p){return new en(c,p)};function en(c,p){vt.call(this),this.g=new ua(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!ue(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ue(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ri(this)}$(en,vt),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){So(this.g)},en.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=co(c),c=y);p.i.push(new Th(p.Ya++,c)),p.G==3&&ha(p)},en.prototype.N=function(){this.g.l=null,delete this.j,So(this.g),delete this.g,en.aa.N.call(this)};function _u(c){sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const y in p){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}$(_u,sr);function yu(){zn.call(this),this.status=1}$(yu,zn);function ri(c){this.g=c}$(ri,gu),ri.prototype.ua=function(){Ct(this.g,"a")},ri.prototype.ta=function(c){Ct(this.g,new _u(c))},ri.prototype.sa=function(c){Ct(this.g,new yu)},ri.prototype.ra=function(){Ct(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,tE=function(){return new da},eE=function(){return Js()},J0=vn,$d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Et.NO_ERROR=0,Et.TIMEOUT=8,Et.HTTP_ERROR=6,Ic=Et,Ai.COMPLETE="complete",Z0=Ai,Zl.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,_l=Zl,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,W0=He}).apply(typeof _c<"u"?_c:typeof self<"u"?self:typeof window<"u"?window:{});const Xy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Jc("@firebase/firestore");function ja(){return js.logLevel}function ie(r,...e){if(js.logLevel<=Ne.DEBUG){const n=e.map(wm);js.debug(`Firestore (${io}): ${r}`,...n)}}function er(r,...e){if(js.logLevel<=Ne.ERROR){const n=e.map(wm);js.error(`Firestore (${io}): ${r}`,...n)}}function $a(r,...e){if(js.logLevel<=Ne.WARN){const n=e.map(wm);js.warn(`Firestore (${io}): ${r}`,...n)}}function wm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+r;throw er(e),new Error(e)}function Fe(r,e){r||ye()}function be(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Qt.UNAUTHENTICATED)))}shutdown(){}}class oI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class lI{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Qr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Qr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new nE(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Qt(e)}}class uI{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cI{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new uI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable((()=>n(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Fe(this.o===void 0);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new hI(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=dI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%e.length))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function Xa(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new de(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Rt(0,0))}static max(){return new ve(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,s){n===void 0?n=0:n>e.length&&ye(),s===void 0?s=e.length-n:s>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ol?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=e.get(o),f=n.get(o);if(u<f)return-1;if(u>f)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends Ol{construct(e,n,s){return new ut(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ut(n)}static emptyPath(){return new ut([])}}const mI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends Ol{construct(e,n,s){return new Bt(e,n,s)}static isValidIdentifier(e){return mI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new de(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(ut.fromString(e))}static fromName(e){return new me(ut.fromString(e).popFirst(5))}static empty(){return new me(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new ut(e.slice()))}}function pI(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Rt(n+1,0):new Rt(n,s));return new Yr(o,me.empty(),e)}function gI(r){return new Yr(r.readTime,r.key,-1)}class Yr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yr(ve.min(),me.empty(),-1)}static max(){return new Yr(ve.max(),me.empty(),-1)}}function _I(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(r.documentKey,e.documentKey),n!==0?n:xe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==yI)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Q.reject(n)}static resolve(e){return new Q(((n,s)=>{n(e)}))}static reject(e){return new Q(((n,s)=>{s(e)}))}static waitFor(e){return new Q(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(g=>s(g)))})),f=!0,u===o&&n()}))}static or(e){let n=Q.resolve(!1);for(const s of e)n=n.next((o=>o?Q.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new Q(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;n(e[_]).next((b=>{f[_]=b,++m,m===u&&s(f)}),(b=>o(b)))}}))}static doWhile(e,n){return new Q(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function EI(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rh.oe=-1;function sh(r){return r==null}function zc(r){return r===0&&1/r==-1/0}function TI(r){return typeof r=="number"&&Number.isInteger(r)&&!zc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Wy(e)),e=AI(r.get(n),e);return Wy(e)}function AI(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case"":n+="";break;default:n+=u}}return n}function Wy(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function Ks(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function rE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??jt.RED,this.left=o??jt.EMPTY,this.right=u??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new jt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return jt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,s,o,u){return this}insert(e,n,s){return new jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jy(this.data.getIterator())}getIteratorFrom(e){return new Jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new It(Bt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xa(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new sE("Invalid base64 string: "+u):u}})(e);return new qt(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const SI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(r){if(Fe(!!r),typeof r=="string"){let e=0;const n=SI.exec(r);if(Fe(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xr(r){return typeof r=="string"?qt.fromBase64String(r):qt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ah(r){const e=r.mapValue.fields.__previous_value__;return Rm(e)?ah(e):e}function kl(r){const e=$r(r.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,s,o,u,f,m,g,_){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_}}class xl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={mapValue:{}};function Wr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rm(r)?4:II(r)?9007199254740991:RI(r)?10:11:ye()}function gi(r,e){if(r===e)return!0;const n=Wr(r);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return kl(r).isEqual(kl(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=$r(o.timestampValue),m=$r(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Xr(o.bytesValue).isEqual(Xr(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return dt(o.geoPointValue.latitude)===dt(u.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return dt(o.integerValue)===dt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=dt(o.doubleValue),m=dt(u.doubleValue);return f===m?zc(f)===zc(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return Xa(r.arrayValue.values||[],e.arrayValue.values||[],gi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Zy(f)!==Zy(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!gi(f[g],m[g])))return!1;return!0})(r,e);default:return ye()}}function Ml(r,e){return(r.values||[]).find((n=>gi(n,e)))!==void 0}function Wa(r,e){if(r===e)return 0;const n=Wr(r),s=Wr(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=dt(u.integerValue||u.doubleValue),g=dt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return ev(r.timestampValue,e.timestampValue);case 4:return ev(kl(r),kl(e));case 5:return xe(r.stringValue,e.stringValue);case 6:return(function(u,f){const m=Xr(u),g=Xr(f);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),g=f.split("/");for(let _=0;_<m.length&&_<g.length;_++){const b=xe(m[_],g[_]);if(b!==0)return b}return xe(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=xe(dt(u.latitude),dt(f.latitude));return m!==0?m:xe(dt(u.longitude),dt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return tv(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var m,g,_,b;const I=u.fields||{},M=f.fields||{},j=(m=I.value)===null||m===void 0?void 0:m.arrayValue,$=(g=M.value)===null||g===void 0?void 0:g.arrayValue,J=xe(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((b=$==null?void 0:$.values)===null||b===void 0?void 0:b.length)||0);return J!==0?J:tv(j,$)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===vc.mapValue&&f===vc.mapValue)return 0;if(u===vc.mapValue)return 1;if(f===vc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=f.fields||{},b=Object.keys(_);g.sort(),b.sort();for(let I=0;I<g.length&&I<b.length;++I){const M=xe(g[I],b[I]);if(M!==0)return M;const j=Wa(m[g[I]],_[b[I]]);if(j!==0)return j}return xe(g.length,b.length)})(r.mapValue,e.mapValue);default:throw ye()}}function ev(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const n=$r(r),s=$r(e),o=xe(n.seconds,s.seconds);return o!==0?o:xe(n.nanos,s.nanos)}function tv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Wa(n[o],s[o]);if(u)return u}return xe(n.length,s.length)}function Za(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=$r(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Xr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return me.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Xd(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Xd(n.fields[f])}`;return o+"}"})(r.mapValue):ye()}function Cc(r){switch(Wr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ah(r);return e?16+Cc(e):16;case 5:return 2*r.stringValue.length;case 6:return Xr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Cc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Ks(s.fields,((u,f)=>{o+=u.length+Cc(f)})),o})(r.mapValue);default:throw ye()}}function Wd(r){return!!r&&"integerValue"in r}function Im(r){return!!r&&"arrayValue"in r}function nv(r){return!!r&&"nullValue"in r}function iv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Dc(r){return!!r&&"mapValue"in r}function RI(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Tl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ks(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Tl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function II(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.value=e}static empty(){return new Vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tl(n)}setAll(e){let n=Bt.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Tl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Dc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){Ks(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Vn(Tl(this.value))}}function aE(r){const e=[];return Ks(r.fields,((n,s)=>{const o=new Bt([n]);if(Dc(s)){const u=aE(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Yt(e,0,ve.min(),ve.min(),ve.min(),Vn.empty(),0)}static newFoundDocument(e,n,s,o){return new Yt(e,1,n,ve.min(),s,o,0)}static newNoDocument(e,n){return new Yt(e,2,n,ve.min(),ve.min(),Vn.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,ve.min(),ve.min(),Vn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.position=e,this.inclusive=n}}function rv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(f.referenceValue),n.key):s=Wa(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function sv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!gi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n="asc"){this.field=e,this.dir=n}}function CI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class wt extends oE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new NI(e,n,s):n==="array-contains"?new xI(e,s):n==="in"?new MI(e,s):n==="not-in"?new VI(e,s):n==="array-contains-any"?new PI(e,s):new wt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OI(e,s):new kI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wa(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Wa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends oE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _i(e,n)}matches(e){return lE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lE(r){return r.op==="and"}function uE(r){return DI(r)&&lE(r)}function DI(r){for(const e of r.filters)if(e instanceof _i)return!1;return!0}function Zd(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+Za(r.value);if(uE(r))return r.filters.map((e=>Zd(e))).join(",");{const e=r.filters.map((n=>Zd(n))).join(",");return`${r.op}(${e})`}}function cE(r,e){return r instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&gi(s.value,o.value)})(r,e):r instanceof _i?(function(s,o){return o instanceof _i&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&cE(f,o.filters[m])),!0):!1})(r,e):void ye()}function hE(r){return r instanceof wt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Za(n.value)}`})(r):r instanceof _i?(function(n){return n.op.toString()+" {"+n.getFilters().map(hE).join(" ,")+"}"})(r):"Filter"}class NI extends wt{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class OI extends wt{constructor(e,n){super(e,"in",n),this.keys=fE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class kI extends wt{constructor(e,n){super(e,"not-in",n),this.keys=fE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function fE(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>me.fromName(s.referenceValue)))}class xI extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Im(n)&&Ml(n.arrayValue,this.value)}}class MI extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class VI extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class PI extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Im(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ml(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.ue=null}}function av(r,e=null,n=[],s=[],o=null,u=null,f=null){return new LI(r,e,n,s,o,u,f)}function Cm(r){const e=be(r);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Zd(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),sh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Za(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Za(s))).join(",")),e.ue=n}return e.ue}function Dm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!CI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!cE(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!sv(r.startAt,e.startAt)&&sv(r.endAt,e.endAt)}function Jd(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UI(r,e,n,s,o,u,f,m){return new oh(r,e,n,s,o,u,f,m)}function Nm(r){return new oh(r)}function ov(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function zI(r){return r.collectionGroup!==null}function bl(r){const e=be(r);if(e.ce===null){e.ce=[];const n=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new It(Bt.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Bc(u,s))})),n.has(Bt.keyField().canonicalString())||e.ce.push(new Bc(Bt.keyField(),s))}return e.ce}function mi(r){const e=be(r);return e.le||(e.le=jI(e,bl(r))),e.le}function jI(r,e){if(r.limitType==="F")return av(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Bc(o.field,u)}));const n=r.endAt?new jc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new jc(r.startAt.position,r.startAt.inclusive):null;return av(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function em(r,e,n){return new oh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function lh(r,e){return Dm(mi(r),mi(e))&&r.limitType===e.limitType}function dE(r){return`${Cm(mi(r))}|lt:${r.limitType}`}function Ba(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>hE(o))).join(", ")}]`),sh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>Za(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>Za(o))).join(",")),`Target(${s})`})(mi(r))}; limitType=${r.limitType})`}function uh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,g){const _=rv(f,m,g);return f.inclusive?_<=0:_<0})(s.startAt,bl(s),o)||s.endAt&&!(function(f,m,g){const _=rv(f,m,g);return f.inclusive?_>=0:_>0})(s.endAt,bl(s),o))})(r,e)}function BI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function mE(r){return(e,n)=>{let s=!1;for(const o of bl(r)){const u=qI(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function qI(r,e,n){const s=r.field.isKeyField()?me.comparator(e.key,n.key):(function(u,f,m){const g=f.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Wa(g,_):ye()})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new tt(me.comparator);function tr(){return HI}const pE=new tt(me.comparator);function yl(...r){let e=pE;for(const n of r)e=e.insert(n.key,n);return e}function gE(r){let e=pE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Vs(){return Al()}function _E(){return Al()}function Al(){return new Qs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const FI=new tt(me.comparator),GI=new It(me.comparator);function Oe(...r){let e=GI;for(const n of r)e=e.add(n);return e}const KI=new It(xe);function QI(){return KI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zc(e)?"-0":e}}function yE(r){return{integerValue:""+r}}function YI(r,e){return TI(e)?yE(e):Om(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this._=void 0}}function $I(r,e,n){return r instanceof Vl?(function(o,u){const f={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Rm(u)&&(u=ah(u)),u&&(f.fields.__previous_value__=u),{mapValue:f}})(n,e):r instanceof Pl?EE(r,e):r instanceof Ll?TE(r,e):(function(o,u){const f=vE(o,u),m=lv(f)+lv(o.Pe);return Wd(f)&&Wd(o.Pe)?yE(m):Om(o.serializer,m)})(r,e)}function XI(r,e,n){return r instanceof Pl?EE(r,e):r instanceof Ll?TE(r,e):n}function vE(r,e){return r instanceof qc?(function(s){return Wd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Vl extends ch{}class Pl extends ch{constructor(e){super(),this.elements=e}}function EE(r,e){const n=bE(e);for(const s of r.elements)n.some((o=>gi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Ll extends ch{constructor(e){super(),this.elements=e}}function TE(r,e){let n=bE(e);for(const s of r.elements)n=n.filter((o=>!gi(o,s)));return{arrayValue:{values:n}}}class qc extends ch{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lv(r){return dt(r.integerValue||r.doubleValue)}function bE(r){return Im(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.field=e,this.transform=n}}function ZI(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Pl&&o instanceof Pl||s instanceof Ll&&o instanceof Ll?Xa(s.elements,o.elements,gi):s instanceof qc&&o instanceof qc?gi(s.Pe,o.Pe):s instanceof Vl&&o instanceof Vl})(r.transform,e.transform)}class JI{constructor(e,n){this.version=e,this.transformResults=n}}class Wi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class hh{}function AE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new wE(r.key,Wi.none()):new Gl(r.key,r.data,Wi.none());{const n=r.data,s=Vn.empty();let o=new It(Bt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Ys(r.key,s,new Gn(o.toArray()),Wi.none())}}function eC(r,e,n){r instanceof Gl?(function(o,u,f){const m=o.value.clone(),g=cv(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof Ys?(function(o,u,f){if(!Nc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=cv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(SE(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function Sl(r,e,n,s){return r instanceof Gl?(function(u,f,m,g){if(!Nc(u.precondition,f))return m;const _=u.value.clone(),b=hv(u.fieldTransforms,g,f);return _.setAll(b),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null})(r,e,n,s):r instanceof Ys?(function(u,f,m,g){if(!Nc(u.precondition,f))return m;const _=hv(u.fieldTransforms,g,f),b=f.data;return b.setAll(SE(u)),b.setAll(_),f.convertToFoundDocument(f.version,b).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((I=>I.field)))})(r,e,n,s):(function(u,f,m){return Nc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function tC(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=vE(s.transform,o||null);u!=null&&(n===null&&(n=Vn.empty()),n.set(s.field,u))}return n||null}function uv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Xa(s,o,((u,f)=>ZI(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Gl extends hh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ys extends hh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function SE(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function cv(r,e,n){const s=new Map;Fe(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,XI(f,m,n[o]))}return s}function hv(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,$I(u,f,e))}return s}class wE extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nC extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&eC(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Sl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Sl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=_E();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=AE(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Xa(this.mutations,e.mutations,((n,s)=>uv(n,s)))&&Xa(this.baseMutations,e.baseMutations,((n,s)=>uv(n,s)))}}class km{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Fe(e.mutations.length===s.length);let o=(function(){return FI})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new km(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Le;function aC(r){switch(r){default:return ye();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function RE(r){if(r===void 0)return er("GRPC error has no .code"),W.UNKNOWN;switch(r){case yt.OK:return W.OK;case yt.CANCELLED:return W.CANCELLED;case yt.UNKNOWN:return W.UNKNOWN;case yt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case yt.INTERNAL:return W.INTERNAL;case yt.UNAVAILABLE:return W.UNAVAILABLE;case yt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case yt.NOT_FOUND:return W.NOT_FOUND;case yt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case yt.ABORTED:return W.ABORTED;case yt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case yt.DATA_LOSS:return W.DATA_LOSS;default:return ye()}}(Le=yt||(yt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new Ls([4294967295,4294967295],0);function fv(r){const e=oC().encode(r),n=new X0;return n.update(e),new Uint8Array(n.digest())}function dv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ls([n,s],0),new Ls([o,u],0)]}class xm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vl(`Invalid padding: ${n}`);if(s<0)throw new vl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new vl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Ls.fromNumber(this.Te)}Ee(e,n,s){let o=e.add(n.multiply(Ls.fromNumber(s)));return o.compare(lC)===1&&(o=new Ls([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=fv(e),[s,o]=dv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ee(s,o,u);if(!this.de(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new xm(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.Te===0)return;const n=fv(e),[s,o]=dv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ee(s,o,u);this.Ae(f)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Kl.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fh(ve.min(),o,new tt(xe),tr(),Oe())}}class Kl{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Kl(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,s,o){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=o}}class IE{constructor(e,n){this.targetId=e,this.me=n}}class CE{constructor(e,n,s=qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class mv{constructor(){this.fe=0,this.ge=pv(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),n=Oe(),s=Oe();return this.ge.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ye()}})),new Kl(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=pv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uC{constructor(e){this.Le=e,this.Be=new Map,this.ke=tr(),this.qe=Ec(),this.Qe=Ec(),this.Ke=new tt(xe)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,(n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:ye()}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach(((s,o)=>{this.je(o)&&n(o)}))}Je(e){const n=e.targetId,s=e.me.count,o=this.Ye(n);if(o){const u=o.target;if(Jd(u))if(s===0){const f=new me(u.path);this.We(n,f,Yt.newNoDocument(f,ve.min()))}else Fe(s===1);else{const f=this.Ze(n);if(f!==s){const m=this.Xe(e),g=m?this.et(m,e,f):1;if(g!==0){this.He(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,_)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Xr(s).toUint8Array()}catch(g){if(g instanceof sE)return $a("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new xm(f,o,u)}catch(g){return $a(g instanceof vl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Le.nt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(n,u,null),o++)})),o}it(e){const n=new Map;this.Be.forEach(((u,f)=>{const m=this.Ye(f);if(m){if(u.current&&Jd(m.target)){const g=new me(m.target.path);this.st(g).has(f)||this.ot(f,g)||this.We(f,g,Yt.newNoDocument(g,e))}u.be&&(n.set(f,u.ve()),u.Ce())}}));let s=Oe();this.Qe.forEach(((u,f)=>{let m=!0;f.forEachWhile((g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ke.forEach(((u,f)=>f.setReadTime(e)));const o=new fh(e,n,this.Ke,this.ke,s);return this.ke=tr(),this.qe=Ec(),this.Qe=Ec(),this.Ke=new tt(xe),o}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,n)?o.Fe(n,1):o.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new mv,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new It(xe),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(xe),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new mv),this.Le.getRemoteKeysForTarget(e).forEach((n=>{this.We(e,n,null)}))}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ec(){return new tt(me.comparator)}function pv(){return new tt(me.comparator)}const cC={asc:"ASCENDING",desc:"DESCENDING"},hC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fC={and:"AND",or:"OR"};class dC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tm(r,e){return r.useProto3Json||sh(e)?e:{value:e}}function Hc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function mC(r,e){return Hc(r,e.toTimestamp())}function pi(r){return Fe(!!r),ve.fromTimestamp((function(n){const s=$r(n);return new Rt(s.seconds,s.nanos)})(r))}function Mm(r,e){return nm(r,e).canonicalString()}function nm(r,e){const n=(function(o){return new ut(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function NE(r){const e=ut.fromString(r);return Fe(VE(e)),e}function im(r,e){return Mm(r.databaseId,e.path)}function Od(r,e){const n=NE(e);if(n.get(1)!==r.databaseId.projectId)throw new de(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new de(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new me(kE(n))}function OE(r,e){return Mm(r.databaseId,e)}function pC(r){const e=NE(r);return e.length===4?ut.emptyPath():kE(e)}function rm(r){return new ut(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kE(r){return Fe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function gv(r,e,n){return{name:im(r,e),fields:n.value.mapValue.fields}}function gC(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,b){return _.useProto3Json?(Fe(b===void 0||typeof b=="string"),qt.fromBase64String(b||"")):(Fe(b===void 0||b instanceof Buffer||b instanceof Uint8Array),qt.fromUint8Array(b||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(_){const b=_.code===void 0?W.UNKNOWN:RE(_.code);return new de(b,_.message||"")})(f);n=new CE(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Od(r,s.document.name),u=pi(s.document.updateTime),f=s.document.createTime?pi(s.document.createTime):ve.min(),m=new Vn({mapValue:{fields:s.document.fields}}),g=Yt.newFoundDocument(o,u,f,m),_=s.targetIds||[],b=s.removedTargetIds||[];n=new Oc(_,b,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Od(r,s.document),u=s.readTime?pi(s.readTime):ve.min(),f=Yt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Oc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Od(r,s.document),u=s.removedTargetIds||[];n=new Oc([],u,o,null)}else{if(!("filter"in e))return ye();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new sC(o,u),m=s.targetId;n=new IE(m,f)}}return n}function _C(r,e){let n;if(e instanceof Gl)n={update:gv(r,e.key,e.value)};else if(e instanceof wE)n={delete:im(r,e.key)};else if(e instanceof Ys)n={update:gv(r,e.key,e.data),updateMask:RC(e.fieldMask)};else{if(!(e instanceof nC))return ye();n={verify:im(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Vl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Pl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ll)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qc)return{fieldPath:f.field.canonicalString(),increment:m.Pe};throw ye()})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:mC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye()})(r,e.precondition)),n}function yC(r,e){return r&&r.length>0?(Fe(e!==void 0),r.map((n=>(function(o,u){let f=o.updateTime?pi(o.updateTime):pi(u);return f.isEqual(ve.min())&&(f=pi(u)),new JI(f,o.transformResults||[])})(n,e)))):[]}function vC(r,e){return{documents:[OE(r,e.path)]}}function EC(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=OE(r,o);const u=(function(_){if(_.length!==0)return ME(_i.create(_,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(_){if(_.length!==0)return _.map((b=>(function(M){return{field:qa(M.field),direction:AC(M.dir)}})(b)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=tm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ct:n,parent:o}}function TC(r){let e=pC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Fe(s===1);const b=n.from[0];b.allDescendants?o=b.collectionId:e=e.child(b.collectionId)}let u=[];n.where&&(u=(function(I){const M=xE(I);return M instanceof _i&&uE(M)?M.getFilters():[M]})(n.where));let f=[];n.orderBy&&(f=(function(I){return I.map((M=>(function($){return new Bc(Ha($.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(M)))})(n.orderBy));let m=null;n.limit&&(m=(function(I){let M;return M=typeof I=="object"?I.value:I,sh(M)?null:M})(n.limit));let g=null;n.startAt&&(g=(function(I){const M=!!I.before,j=I.values||[];return new jc(j,M)})(n.startAt));let _=null;return n.endAt&&(_=(function(I){const M=!I.before,j=I.values||[];return new jc(j,M)})(n.endAt)),UI(e,o,f,u,m,"F",g,_)}function bC(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return wt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return wt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return ye()}})(r):r.fieldFilter!==void 0?(function(n){return wt.create(Ha(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return _i.create(n.compositeFilter.filters.map((s=>xE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye()}})(n.compositeFilter.op))})(r):ye()}function AC(r){return cC[r]}function SC(r){return hC[r]}function wC(r){return fC[r]}function qa(r){return{fieldPath:r.canonicalString()}}function Ha(r){return Bt.fromServerFormat(r.fieldPath)}function ME(r){return r instanceof wt?(function(n){if(n.op==="=="){if(iv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(nv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(nv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:SC(n.op),value:n.value}}})(r):r instanceof _i?(function(n){const s=n.getFilters().map((o=>ME(o)));return s.length===1?s[0]:{compositeFilter:{op:wC(n.op),filters:s}}})(r):ye()}function RC(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function VE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,s,o,u=ve.min(),f=ve.min(),m=qt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.ht=e}}function CC(r){const e=TC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?em(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.ln=new NC}addToCollectionParentIndex(e,n){return this.ln.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Yr.min())}updateCollectionGroup(e,n,s){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class NC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new It(ut.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new It(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(41943040,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ja(0)}static Qn(){return new Ja(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv([r,e],[n,s]){const o=xe(r,n);return o===0?xe(e,s):o}class OC{constructor(e){this.Gn=e,this.buffer=new It(yv),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();yv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ie("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?ie("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Yn(3e5)}))}}class xC{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Q.resolve(rh.oe);const s=new OC(n);return this.Zn.forEachTarget(e,(o=>s.Hn(o.sequenceNumber))).next((()=>this.Zn.er(e,(o=>s.Hn(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(_v)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_v):this.tr(e,n)))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,o,u,f,m,g,_;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,f=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,m=Date.now(),this.removeTargets(e,s,n)))).next((I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),ja()<=Ne.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-b}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-b}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I}))))}}function MC(r,e){return new xC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.changes=new Qs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&Sl(s.mutation,o,Gn.empty(),Rt.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Oe()){const o=Vs();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=yl();return u.forEach(((m,g)=>{f=f.insert(m,g.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Vs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Oe())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=tr();const f=Al(),m=(function(){return Al()})();return n.forEach(((g,_)=>{const b=s.get(_.key);o.has(_.key)&&(b===void 0||b.mutation instanceof Ys)?u=u.insert(_.key,_):b!==void 0?(f.set(_.key,b.mutation.getFieldMask()),Sl(b.mutation,_,b.mutation.getFieldMask(),Rt.now())):f.set(_.key,Gn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,b)=>f.set(_,b))),n.forEach(((_,b)=>{var I;return m.set(_,new PC(b,(I=f.get(_))!==null&&I!==void 0?I:null))})),m)))}recalculateAndSaveOverlays(e,n){const s=Al();let o=new tt(((f,m)=>f-m)),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((g=>{const _=n.get(g);if(_===null)return;let b=s.get(g)||Gn.empty();b=m.applyToLocalView(_,b),s.set(g,b);const I=(o.get(m.batchId)||Oe()).add(g);o=o.insert(m.batchId,I)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,b=g.value,I=_E();b.forEach((M=>{if(!u.has(M)){const j=AE(n.get(M),s.get(M));j!==null&&I.set(M,j),u=u.add(M)}})),f.push(this.documentOverlayCache.saveOverlays(e,_,I))}return Q.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return me.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):Q.resolve(Vs());let m=-1,g=u;return f.next((_=>Q.forEach(_,((b,I)=>(m<I.largestBatchId&&(m=I.largestBatchId),u.get(b)?Q.resolve():this.remoteDocumentCache.getEntry(e,b).next((M=>{g=g.insert(b,M)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Oe()))).next((b=>({batchId:m,changes:gE(b)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let o=yl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=yl();return this.indexManager.getCollectionParents(e,u).next((m=>Q.forEach(m,(g=>{const _=(function(I,M){return new oh(M,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((b=>{b.forEach(((I,M)=>{f=f.insert(I,M)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((g,_)=>{const b=_.getKey();f.get(b)===null&&(f=f.insert(b,Yt.newInvalidDocument(b)))}));let m=yl();return f.forEach(((g,_)=>{const b=u.get(g);b!==void 0&&Sl(b.mutation,_,Gn.empty(),Rt.now()),uh(n,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return Q.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:pi(o.createTime)}})(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,(function(o){return{name:o.name,query:CC(o.bundledQuery),readTime:pi(o.readTime)}})(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.overlays=new tt(me.comparator),this.Er=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vs();return Q.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.Tt(e,n,u)})),Q.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Er.delete(s)),Q.resolve()}getOverlaysForCollection(e,n,s){const o=Vs(),u=n.length+1,f=new me(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new tt(((_,b)=>_-b));const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let b=u.get(_.largestBatchId);b===null&&(b=Vs(),u=u.insert(_.largestBatchId,b)),b.set(_.getKey(),_)}}const m=Vs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,b)=>m.set(_,b))),!(m.size()>=o)););return Q.resolve(m)}Tt(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new rC(n,s));let u=this.Er.get(n);u===void 0&&(u=Oe(),this.Er.set(n,u)),this.Er.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.dr=new It(Vt.Ar),this.Rr=new It(Vt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const s=new Vt(e,n);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.gr(new Vt(e,n))}pr(e,n){e.forEach((s=>this.removeReference(s,n)))}yr(e){const n=new me(new ut([])),s=new Vt(n,e),o=new Vt(n,e+1),u=[];return this.Rr.forEachInRange([s,o],(f=>{this.gr(f),u.push(f.key)})),u}wr(){this.dr.forEach((e=>this.gr(e)))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new me(new ut([])),s=new Vt(n,e),o=new Vt(n,e+1);let u=Oe();return this.Rr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Vt(e,0),s=this.dr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Vt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return me.comparator(e.key,n.key)||xe(e.br,n.br)}static Vr(e,n){return xe(e.br,n.br)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new It(Vt.Ar)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new iC(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.vr=this.vr.add(new Vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Q.resolve(f)}lookupMutationBatch(e,n){return Q.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Fr(s),u=o<0?0:o;return Q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Vt(n,0),o=new Vt(n,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],(f=>{const m=this.Cr(f.br);u.push(m)})),Q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(xe);return n.forEach((o=>{const u=new Vt(o,0),f=new Vt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,f],(m=>{s=s.add(m.br)}))})),Q.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const f=new Vt(new me(u),0);let m=new It(xe);return this.vr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.br)),!0)}),f),Q.resolve(this.Mr(m))}Mr(e){const n=[];return e.forEach((s=>{const o=this.Cr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){Fe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return Q.forEach(n.mutations,(o=>{const u=new Vt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.vr=s}))}Ln(e){}containsKey(e,n){const s=new Vt(n,0),o=this.vr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.Nr=e,this.docs=(function(){return new tt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let s=tr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Yt.newInvalidDocument(o))})),Q.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=tr();const f=n.path,m=new me(f.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:b}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||_I(gI(b),s)<=0||(o.has(b.key)||uh(n,b))&&(u=u.insert(b.key,b.mutableCopy()))}return Q.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ye()}Lr(e,n){return Q.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new HC(this)}getSize(e){return Q.resolve(this.size)}}class HC extends VC{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)})),Q.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.persistence=e,this.Br=new Qs((n=>Cm(n)),Dm),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.kr=0,this.qr=new Vm,this.targetCount=0,this.Qr=Ja.qn()}forEachTarget(e,n){return this.Br.forEach(((s,o)=>n(o))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),Q.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ja(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.Un(n),Q.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Br.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Br.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),Q.waitFor(u).next((()=>o))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const s=this.Br.get(n)||null;return Q.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),Q.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),Q.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return Q.resolve(s)}containsKey(e,n){return Q.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.Kr={},this.overlays={},this.$r=new rh(0),this.Ur=!1,this.Ur=!0,this.Wr=new jC,this.referenceDelegate=e(this),this.Gr=new FC(this),this.indexManager=new DC,this.remoteDocumentCache=(function(o){return new qC(o)})((s=>this.referenceDelegate.zr(s))),this.serializer=new IC(n),this.jr=new UC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new BC(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const o=new GC(this.$r.next());return this.referenceDelegate.Hr(),s(o).next((u=>this.referenceDelegate.Jr(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Yr(e,n){return Q.or(Object.values(this.Kr).map((s=>()=>s.containsKey(e,n))))}}class GC extends vI{constructor(e){super(),this.currentSequenceNumber=e}}class Pm{constructor(e){this.persistence=e,this.Zr=new Vm,this.Xr=null}static ei(e){return new Pm(e)}get ti(){if(this.Xr)return this.Xr;throw ye()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),Q.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach((o=>this.ti.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.ti.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ti,(s=>{const o=me.fromPath(s);return this.ni(e,o).next((u=>{u||n.removeEntry(o,ve.min())}))})).next((()=>(this.Xr=null,n.apply(e))))}updateLimboDocument(e,n){return this.ni(e,n).next((s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())}))}zr(e){return 0}ni(e,n){return Q.or([()=>Q.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Fc{constructor(e,n){this.persistence=e,this.ri=new Qs((s=>bI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=MC(this,n)}static ei(e,n){return new Fc(e,n)}Hr(){}Jr(e){return Q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}nr(e){let n=0;return this.er(e,(s=>{n++})).next((()=>n))}er(e,n){return Q.forEach(this.ri,((s,o)=>this.ir(e,s,o).next((u=>u?Q.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,(f=>this.ir(e,f,n).next((m=>{m||(s++,u.removeEntry(f,ve.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),Q.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),Q.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),Q.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cc(e.data.value)),n}ir(e,n,s){return Q.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.ri.get(n);return Q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=o}static zi(e,n){let s=Oe(),o=Oe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Lm(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=(function(){return IS()?8:EI($t())>0?6:4})()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.Xi(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.es(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new KC;return this.ts(e,n,f).next((m=>{if(u.result=m,this.Hi)return this.ns(e,n,f,m.size)}))})).next((()=>u.result))}ns(e,n,s,o){return s.documentReadCount<this.Ji?(ja()<=Ne.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ba(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Q.resolve()):(ja()<=Ne.DEBUG&&ie("QueryEngine","Query:",Ba(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(ja()<=Ne.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ba(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mi(n))):Q.resolve())}Xi(e,n){if(ov(n))return Q.resolve(null);let s=mi(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=em(n,null,"F"),s=mi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Oe(...u);return this.Zi.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.rs(n,m);return this.ss(n,_,f,g.readTime)?this.Xi(e,em(n,null,"F")):this.os(e,_,n,g)}))))})))))}es(e,n,s,o){return ov(n)||o.isEqual(ve.min())?Q.resolve(null):this.Zi.getDocuments(e,s).next((u=>{const f=this.rs(n,u);return this.ss(n,f,s,o)?Q.resolve(null):(ja()<=Ne.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ba(n)),this.os(e,f,n,pI(o,-1)).next((m=>m)))}))}rs(e,n){let s=new It(mE(e));return n.forEach(((o,u)=>{uh(e,u)&&(s=s.add(u))})),s}ss(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,n,s){return ja()<=Ne.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ba(n)),this.Zi.getDocumentsMatchingQuery(e,n,Yr.min(),s)}os(e,n,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,s,o){this.persistence=e,this._s=n,this.serializer=o,this.us=new tt(xe),this.cs=new Qs((u=>Cm(u)),Dm),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.us)))}}function $C(r,e,n,s){return new YC(r,e,n,s)}async function LE(r,e){const n=be(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Ps(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let g=Oe();for(const _ of o){f.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}for(const _ of u){m.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}return n.localDocuments.getDocuments(s,g).next((_=>({Ts:_,removedBatchIds:f,addedBatchIds:m})))}))}))}function XC(r,e){const n=be(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=n.hs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,b){const I=_.batch,M=I.keys();let j=Q.resolve();return M.forEach(($=>{j=j.next((()=>b.getEntry(g,$))).next((J=>{const G=_.docVersions.get($);Fe(G!==null),J.version.compareTo(G)<0&&(I.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),b.addEntry(J)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,I)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Oe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function UE(r){const e=be(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Gr.getLastRemoteSnapshotVersion(n)))}function WC(r,e){const n=be(r),s=e.snapshotVersion;let o=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.hs.newChangeBuffer({trackRemovals:!0});o=n.us;const m=[];e.targetChanges.forEach(((b,I)=>{const M=o.get(I);if(!M)return;m.push(n.Gr.removeMatchingKeys(u,b.removedDocuments,I).next((()=>n.Gr.addMatchingKeys(u,b.addedDocuments,I))));let j=M.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(I)!==null?j=j.withResumeToken(qt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):b.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(b.resumeToken,s)),o=o.insert(I,j),(function(J,G,he){return J.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=3e8?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(M,j,b)&&m.push(n.Gr.updateTargetData(u,j))}));let g=tr(),_=Oe();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,b))})),m.push(ZC(u,f,e.documentUpdates).next((b=>{g=b.Is,_=b.Es}))),!s.isEqual(ve.min())){const b=n.Gr.getLastRemoteSnapshotVersion(u).next((I=>n.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(b)}return Q.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(n.us=o,u)))}function ZC(r,e,n){let s=Oe(),o=Oe();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=tr();return n.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):ie("LocalStore","Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Is:f,Es:o}}))}function JC(r,e){const n=be(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function e2(r,e){const n=be(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Gr.getTargetData(s,e).next((u=>u?(o=u,Q.resolve(o)):n.Gr.allocateTargetId(s).next((f=>(o=new Fr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s}))}async function sm(r,e,n){const s=be(r),o=s.us.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!so(f))throw f;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${f}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function vv(r,e,n){const s=be(r);let o=ve.min(),u=Oe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(g,_,b){const I=be(g),M=I.cs.get(b);return M!==void 0?Q.resolve(I.us.get(M)):I.Gr.getTargetData(_,b)})(s,f,mi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(f,m.targetId).next((g=>{u=g}))})).next((()=>s._s.getDocumentsMatchingQuery(f,e,n?o:ve.min(),n?u:Oe()))).next((m=>(t2(s,BI(e),m),{documents:m,ds:u})))))}function t2(r,e,n){let s=r.ls.get(e)||ve.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.ls.set(e,s)}class Ev{constructor(){this.activeTargetIds=QI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class n2{constructor(){this._o=new Ev,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Ev,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc=null;function kd(){return Tc===null?Tc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Tc++,"0x"+Tc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class a2 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(n,s,o,u,f){const m=kd(),g=this.No(n,s.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${m}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,u,f),this.Bo(n,g,_,o).then((b=>(ie("RestConnection",`Received RPC '${n}' ${m}: `,b),b)),(b=>{throw $a("RestConnection",`RPC '${n}' ${m} failed with error: `,b,"url: ",g,"request:",o),b}))}ko(n,s,o,u,f,m){return this.Oo(n,s,o,u,f)}Lo(n,s,o){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+io})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,f)=>n[f]=u)),o&&o.headers.forEach(((u,f)=>n[f]=u))}No(n,s){const o=r2[n];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,s,o){const u=kd();return new Promise(((f,m)=>{const g=new W0;g.setWithCredentials(!0),g.listenOnce(Z0.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Ic.NO_ERROR:const b=g.getResponseJson();ie(Kt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(b)),f(b);break;case Ic.TIMEOUT:ie(Kt,`RPC '${e}' ${u} timed out`),m(new de(W.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const I=g.getStatus();if(ie(Kt,`RPC '${e}' ${u} failed with status:`,I,"response text:",g.getResponseText()),I>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const j=M==null?void 0:M.error;if(j&&j.status&&j.message){const $=(function(G){const he=G.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(he)>=0?he:W.UNKNOWN})(j.status);m(new de($,j.message))}else m(new de(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new de(W.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ie(Kt,`RPC '${e}' ${u} completed.`)}}));const _=JSON.stringify(o);ie(Kt,`RPC '${e}' ${u} sending request:`,o),g.send(n,"POST",_,s,15)}))}qo(e,n,s){const o=kd(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=tE(),m=eE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const b=u.join("");ie(Kt,`Creating RPC '${e}' stream ${o}: ${b}`,g);const I=f.createWebChannel(b,g);let M=!1,j=!1;const $=new s2({Eo:G=>{j?ie(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(M||(ie(Kt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),M=!0),ie(Kt,`RPC '${e}' stream ${o} sending:`,G),I.send(G))},Ao:()=>I.close()}),J=(G,he,ue)=>{G.listen(he,(le=>{try{ue(le)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return J(I,_l.EventType.OPEN,(()=>{j||(ie(Kt,`RPC '${e}' stream ${o} transport opened.`),$.So())})),J(I,_l.EventType.CLOSE,(()=>{j||(j=!0,ie(Kt,`RPC '${e}' stream ${o} transport closed`),$.Do())})),J(I,_l.EventType.ERROR,(G=>{j||(j=!0,$a(Kt,`RPC '${e}' stream ${o} transport errored:`,G),$.Do(new de(W.UNAVAILABLE,"The operation could not be completed")))})),J(I,_l.EventType.MESSAGE,(G=>{var he;if(!j){const ue=G.data[0];Fe(!!ue);const le=ue,Ee=(le==null?void 0:le.error)||((he=le[0])===null||he===void 0?void 0:he.error);if(Ee){ie(Kt,`RPC '${e}' stream ${o} received error:`,Ee);const fe=Ee.status;let Ae=(function(A){const C=yt[A];if(C!==void 0)return RE(C)})(fe),D=Ee.message;Ae===void 0&&(Ae=W.INTERNAL,D="Unknown error status: "+fe+" with message "+Ee.message),j=!0,$.Do(new de(Ae,D)),I.close()}else ie(Kt,`RPC '${e}' stream ${o} received:`,ue),$.vo(ue)}})),J(m,J0.STAT_EVENT,(G=>{G.stat===$d.PROXY?ie(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):G.stat===$d.NOPROXY&&ie(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.bo()}),0),$}}function xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(r){return new dC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,n-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,(()=>(this.Go=Date.now(),e()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,s,o,u,f,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new zE(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Xo===n&&this.I_(s,o)}),(s=>{e((()=>{const o=new de(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)}))}))}I_(e,n){const s=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro((()=>{s((()=>this.listener.Ro()))})),this.stream.mo((()=>{s((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((o=>{s((()=>this.E_(o)))})),this.stream.onMessage((o=>{s((()=>++this.n_==1?this.A_(o):this.onNext(o)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}E_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget((()=>this.Xo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class o2 extends jE{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=gC(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ve.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?ve.min():f.readTime?pi(f.readTime):ve.min()})(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=rm(this.serializer),n.addTarget=(function(u,f){let m;const g=f.target;if(m=Jd(g)?{documents:vC(u,g)}:{query:EC(u,g).ct},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=DE(u,f.resumeToken);const _=tm(u,f.expectedCount);_!==null&&(m.expectedCount=_)}else if(f.snapshotVersion.compareTo(ve.min())>0){m.readTime=Hc(u,f.snapshotVersion.toTimestamp());const _=tm(u,f.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=bC(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=rm(this.serializer),n.removeTarget=e,this.c_(n)}}class l2 extends jE{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=yC(e.writeResults,e.commitTime),s=pi(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=rm(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>_C(this.serializer,s)))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2 extends class{}{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new de(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Oo(e,nm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(W.UNKNOWN,u.toString())}))}ko(e,n,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.ko(e,nm(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(W.UNKNOWN,f.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class c2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(er(n),this.C_=!1):ie("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo((f=>{s.enqueueAndForget((async()=>{$s(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const _=be(g);_.k_.add(4),await Ql(_),_.K_.set("Unknown"),_.k_.delete(4),await mh(_)})(this))}))})),this.K_=new c2(s,o)}}async function mh(r){if($s(r))for(const e of r.q_)await e(!0)}async function Ql(r){for(const e of r.q_)await e(!1)}function BE(r,e){const n=be(r);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Bm(n)?jm(n):ao(n).s_()&&zm(n,e))}function Um(r,e){const n=be(r),s=ao(n);n.B_.delete(e),s.s_()&&qE(n,e),n.B_.size===0&&(s.s_()?s.a_():$s(n)&&n.K_.set("Unknown"))}function zm(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ao(r).V_(e)}function qE(r,e){r.U_.xe(e),ao(r).m_(e)}function jm(r){r.U_=new uC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.K_.F_()}function Bm(r){return $s(r)&&!ao(r).i_()&&r.B_.size>0}function $s(r){return be(r).k_.size===0}function HE(r){r.U_=void 0}async function f2(r){r.K_.set("Online")}async function d2(r){r.B_.forEach(((e,n)=>{zm(r,e)}))}async function m2(r,e){HE(r),Bm(r)?(r.K_.O_(e),jm(r)):r.K_.set("Unknown")}async function p2(r,e,n){if(r.K_.set("Online"),e instanceof CE&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.B_.delete(m),o.U_.removeTarget(m))})(r,e)}catch(s){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gc(r,s)}else if(e instanceof Oc?r.U_.$e(e):e instanceof IE?r.U_.Je(e):r.U_.Ge(e),!n.isEqual(ve.min()))try{const s=await UE(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.U_.it(f);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const b=u.B_.get(_);b&&u.B_.set(_,b.withResumeToken(g.resumeToken,f))}})),m.targetMismatches.forEach(((g,_)=>{const b=u.B_.get(g);if(!b)return;u.B_.set(g,b.withResumeToken(qt.EMPTY_BYTE_STRING,b.snapshotVersion)),qE(u,g);const I=new Fr(b.target,g,_,b.sequenceNumber);zm(u,I)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){ie("RemoteStore","Failed to raise snapshot:",s),await Gc(r,s)}}async function Gc(r,e,n){if(!so(e))throw e;r.k_.add(1),await Ql(r),r.K_.set("Offline"),n||(n=()=>UE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),r.k_.delete(1),await mh(r)}))}function FE(r,e){return e().catch((n=>Gc(r,n,e)))}async function ph(r){const e=be(r),n=Zr(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;g2(e);)try{const o=await JC(e.localStore,s);if(o===null){e.L_.length===0&&n.a_();break}s=o.batchId,_2(e,o)}catch(o){await Gc(e,o)}GE(e)&&KE(e)}function g2(r){return $s(r)&&r.L_.length<10}function _2(r,e){r.L_.push(e);const n=Zr(r);n.s_()&&n.f_&&n.g_(e.mutations)}function GE(r){return $s(r)&&!Zr(r).i_()&&r.L_.length>0}function KE(r){Zr(r).start()}async function y2(r){Zr(r).w_()}async function v2(r){const e=Zr(r);for(const n of r.L_)e.g_(n.mutations)}async function E2(r,e,n){const s=r.L_.shift(),o=km.from(s,e,n);await FE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await ph(r)}async function T2(r,e){e&&Zr(r).f_&&await(async function(s,o){if((function(f){return aC(f)&&f!==W.ABORTED})(o.code)){const u=s.L_.shift();Zr(s).__(),await FE(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await ph(s)}})(r,e),GE(r)&&KE(r)}async function bv(r,e){const n=be(r);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const s=$s(n);n.k_.add(3),await Ql(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await mh(n)}async function b2(r,e){const n=be(r);e?(n.k_.delete(2),await mh(n)):e||(n.k_.add(2),await Ql(n),n.K_.set("Unknown"))}function ao(r){return r.W_||(r.W_=(function(n,s,o){const u=be(n);return u.b_(),new o2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Ro:f2.bind(null,r),mo:d2.bind(null,r),po:m2.bind(null,r),R_:p2.bind(null,r)}),r.q_.push((async e=>{e?(r.W_.__(),Bm(r)?jm(r):r.K_.set("Unknown")):(await r.W_.stop(),HE(r))}))),r.W_}function Zr(r){return r.G_||(r.G_=(function(n,s,o){const u=be(n);return u.b_(),new l2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:y2.bind(null,r),po:T2.bind(null,r),p_:v2.bind(null,r),y_:E2.bind(null,r)}),r.q_.push((async e=>{e?(r.G_.__(),await ph(r)):(await r.G_.stop(),r.L_.length>0&&(ie("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))}))),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new qm(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hm(r,e){if(er("AsyncQueue",`${e}: ${r}`),so(r))return new de(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{static emptySet(e){return new Ya(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=yl(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ya)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ya;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.z_=new tt(me.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ye():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal(((n,s)=>{e.push(s)})),e}}class eo{constructor(e,n,s,o,u,f,m,g,_){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new eo(e,n,Ya.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((e=>e.Z_()))}}class S2{constructor(){this.queries=Sv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const o=be(n),u=o.queries;o.queries=Sv(),u.forEach(((f,m)=>{for(const g of m.J_)g.onError(s)}))})(this,new de(W.ABORTED,"Firestore shutting down"))}}function Sv(){return new Qs((r=>dE(r)),lh)}async function w2(r,e){const n=be(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new A2,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await n.onListen(o,!0);break;case 1:u.H_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Hm(f,`Initialization of query '${Ba(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.J_.push(e),e.ea(n.onlineState),u.H_&&e.ta(u.H_)&&Fm(n)}async function R2(r,e){const n=be(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.J_.indexOf(e);f>=0&&(u.J_.splice(f,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function I2(r,e){const n=be(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.J_)m.ta(o)&&(s=!0);f.H_=o}}s&&Fm(n)}function C2(r,e,n){const s=be(r),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(n);s.queries.delete(e)}function Fm(r){r.X_.forEach((e=>{e.next()}))}var am,wv;(wv=am||(am={})).na="default",wv.Cache="cache";class D2{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==am.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class YE{constructor(e){this.key=e}}class N2{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Oe(),this.mutatedKeys=Oe(),this.Va=mE(e),this.ma=new Ya(this.Va)}get fa(){return this.da}ga(e,n){const s=n?n.pa:new Av,o=n?n.ma:this.ma;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((b,I)=>{const M=o.get(b),j=uh(this.query,I)?I:null,$=!!M&&this.mutatedKeys.has(M.key),J=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let G=!1;M&&j?M.data.isEqual(j.data)?$!==J&&(s.track({type:3,doc:j}),G=!0):this.ya(M,j)||(s.track({type:2,doc:j}),G=!0,(g&&this.Va(j,g)>0||_&&this.Va(j,_)<0)&&(m=!0)):!M&&j?(s.track({type:0,doc:j}),G=!0):M&&!j&&(s.track({type:1,doc:M}),G=!0,(g||_)&&(m=!0)),G&&(j?(f=f.add(j),u=J?u.add(b):u.delete(b)):(f=f.delete(b),u=u.delete(b)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const b=this.query.limitType==="F"?f.last():f.first();f=f.delete(b.key),u=u.delete(b.key),s.track({type:1,doc:b})}return{ma:f,pa:s,ss:m,mutatedKeys:u}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const f=e.pa.j_();f.sort(((b,I)=>(function(j,$){const J=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return J(j)-J($)})(b.type,I.type)||this.Va(b.doc,I.doc))),this.wa(s),o=o!=null&&o;const m=n&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,f.length!==0||_?{snapshot:new eo(this.query,e.ma,u,f,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Av,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach((n=>this.da=this.da.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.da=this.da.delete(n))),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Oe(),this.ma.forEach((s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))}));const n=[];return e.forEach((s=>{this.Ra.has(s)||n.push(new YE(s))})),this.Ra.forEach((s=>{e.has(s)||n.push(new QE(s))})),n}va(e){this.da=e.ds,this.Ra=Oe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return eo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class O2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class k2{constructor(e){this.key=e,this.Fa=!1}}class x2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Ma={},this.xa=new Qs((m=>dE(m)),lh),this.Oa=new Map,this.Na=new Set,this.La=new tt(me.comparator),this.Ba=new Map,this.ka=new Vm,this.qa={},this.Qa=new Map,this.Ka=Ja.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function M2(r,e,n=!0){const s=eT(r);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await $E(s,e,n,!0),o}async function V2(r,e){const n=eT(r);await $E(n,e,!0,!1)}async function $E(r,e,n,s){const o=await e2(r.localStore,mi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await P2(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&BE(r.remoteStore,o),m}async function P2(r,e,n,s,o){r.Ua=(I,M,j)=>(async function(J,G,he,ue){let le=G.view.ga(he);le.ss&&(le=await vv(J.localStore,G.query,!1).then((({documents:D})=>G.view.ga(D,le))));const Ee=ue&&ue.targetChanges.get(G.targetId),fe=ue&&ue.targetMismatches.get(G.targetId)!=null,Ae=G.view.applyChanges(le,J.isPrimaryClient,Ee,fe);return Iv(J,G.targetId,Ae.ba),Ae.snapshot})(r,I,M,j);const u=await vv(r.localStore,e,!0),f=new N2(e,u.ds),m=f.ga(u.documents),g=Kl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(m,r.isPrimaryClient,g);Iv(r,n,_.ba);const b=new O2(e,n,f);return r.xa.set(e,b),r.Oa.has(n)?r.Oa.get(n).push(e):r.Oa.set(n,[e]),_.snapshot}async function L2(r,e,n){const s=be(r),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter((f=>!lh(f,e)))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Um(s.remoteStore,o.targetId),om(s,o.targetId)})).catch(ro)):(om(s,o.targetId),await sm(s.localStore,o.targetId,!0))}async function U2(r,e){const n=be(r),s=n.xa.get(e),o=n.Oa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Um(n.remoteStore,s.targetId))}async function z2(r,e,n){const s=K2(r);try{const o=await(function(f,m){const g=be(f),_=Rt.now(),b=m.reduce(((j,$)=>j.add($.key)),Oe());let I,M;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let $=tr(),J=Oe();return g.hs.getEntries(j,b).next((G=>{$=G,$.forEach(((he,ue)=>{ue.isValidDocument()||(J=J.add(he))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,$))).next((G=>{I=G;const he=[];for(const ue of m){const le=tC(ue,I.get(ue.key).overlayedDocument);le!=null&&he.push(new Ys(ue.key,le,aE(le.value.mapValue),Wi.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,he,m)})).next((G=>{M=G;const he=G.applyToLocalDocumentSet(I,J);return g.documentOverlayCache.saveOverlays(j,G.batchId,he)}))})).then((()=>({batchId:M.batchId,changes:gE(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,g){let _=f.qa[f.currentUser.toKey()];_||(_=new tt(xe)),_=_.insert(m,g),f.qa[f.currentUser.toKey()]=_})(s,o.batchId,n),await Yl(s,o.changes),await ph(s.remoteStore)}catch(o){const u=Hm(o,"Failed to persist write");n.reject(u)}}async function XE(r,e){const n=be(r);try{const s=await WC(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Ba.get(u);f&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Fa=!0:o.modifiedDocuments.size>0?Fe(f.Fa):o.removedDocuments.size>0&&(Fe(f.Fa),f.Fa=!1))})),await Yl(n,s,e)}catch(s){await ro(s)}}function Rv(r,e,n){const s=be(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.xa.forEach(((u,f)=>{const m=f.view.ea(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const g=be(f);g.onlineState=m;let _=!1;g.queries.forEach(((b,I)=>{for(const M of I.J_)M.ea(m)&&(_=!0)})),_&&Fm(g)})(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function j2(r,e,n){const s=be(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ba.get(e),u=o&&o.key;if(u){let f=new tt(me.comparator);f=f.insert(u,Yt.newNoDocument(u,ve.min()));const m=Oe().add(u),g=new fh(ve.min(),new Map,new tt(xe),f,m);await XE(s,g),s.La=s.La.remove(u),s.Ba.delete(e),Gm(s)}else await sm(s.localStore,e,!1).then((()=>om(s,e,n))).catch(ro)}async function B2(r,e){const n=be(r),s=e.batch.batchId;try{const o=await XC(n.localStore,e);ZE(n,s,null),WE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yl(n,o)}catch(o){await ro(o)}}async function q2(r,e,n){const s=be(r);try{const o=await(function(f,m){const g=be(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let b;return g.mutationQueue.lookupMutationBatch(_,m).next((I=>(Fe(I!==null),b=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,b,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,b))).next((()=>g.localDocuments.getDocuments(_,b)))}))})(s.localStore,e);ZE(s,e,n),WE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yl(s,o)}catch(o){await ro(o)}}function WE(r,e){(r.Qa.get(e)||[]).forEach((n=>{n.resolve()})),r.Qa.delete(e)}function ZE(r,e,n){const s=be(r);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function om(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),n&&r.Ma.Wa(s,n);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach((s=>{r.ka.containsKey(s)||JE(r,s)}))}function JE(r,e){r.Na.delete(e.path.canonicalString());const n=r.La.get(e);n!==null&&(Um(r.remoteStore,n),r.La=r.La.remove(e),r.Ba.delete(n),Gm(r))}function Iv(r,e,n){for(const s of n)s instanceof QE?(r.ka.addReference(s.key,e),H2(r,s)):s instanceof YE?(ie("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||JE(r,s.key)):ye()}function H2(r,e){const n=e.key,s=n.path.canonicalString();r.La.get(n)||r.Na.has(s)||(ie("SyncEngine","New document in limbo: "+n),r.Na.add(s),Gm(r))}function Gm(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const n=new me(ut.fromString(e)),s=r.Ka.next();r.Ba.set(s,new k2(n)),r.La=r.La.insert(n,s),BE(r.remoteStore,new Fr(mi(Nm(n.path)),s,"TargetPurposeLimboResolution",rh.oe))}}async function Yl(r,e,n){const s=be(r),o=[],u=[],f=[];s.xa.isEmpty()||(s.xa.forEach(((m,g)=>{f.push(s.Ua(g,e,n).then((_=>{var b;if((_||n)&&s.isPrimaryClient){const I=_?!_.fromCache:(b=n==null?void 0:n.targetChanges.get(g.targetId))===null||b===void 0?void 0:b.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Lm.zi(g.targetId,_);u.push(I)}})))})),await Promise.all(f),s.Ma.R_(o),await(async function(g,_){const b=be(g);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>Q.forEach(_,(M=>Q.forEach(M.Wi,(j=>b.persistence.referenceDelegate.addReference(I,M.targetId,j))).next((()=>Q.forEach(M.Gi,(j=>b.persistence.referenceDelegate.removeReference(I,M.targetId,j)))))))))}catch(I){if(!so(I))throw I;ie("LocalStore","Failed to update sequence numbers: "+I)}for(const I of _){const M=I.targetId;if(!I.fromCache){const j=b.us.get(M),$=j.snapshotVersion,J=j.withLastLimboFreeSnapshotVersion($);b.us=b.us.insert(M,J)}}})(s.localStore,u))}async function F2(r,e){const n=be(r);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const s=await LE(n.localStore,e);n.currentUser=e,(function(u,f){u.Qa.forEach((m=>{m.forEach((g=>{g.reject(new de(W.CANCELLED,f))}))})),u.Qa.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yl(n,s.Ts)}}function G2(r,e){const n=be(r),s=n.Ba.get(e);if(s&&s.Fa)return Oe().add(s.key);{let o=Oe();const u=n.Oa.get(e);if(!u)return o;for(const f of u){const m=n.xa.get(f);o=o.unionWith(m.view.fa)}return o}}function eT(r){const e=be(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=XE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=j2.bind(null,e),e.Ma.R_=I2.bind(null,e.eventManager),e.Ma.Wa=C2.bind(null,e.eventManager),e}function K2(r){const e=be(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=B2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class Kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return $C(this.persistence,new QC,e.initialUser,this.serializer)}ja(e){return new PE(Pm.ei,this.serializer)}za(e){return new n2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kc.provider={build:()=>new Kc};class Q2 extends Kc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Fe(this.persistence.referenceDelegate instanceof Fc);const s=this.persistence.referenceDelegate.garbageCollector;return new kC(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new PE((s=>Fc.ei(s,n)),this.serializer)}}class lm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=F2.bind(null,this.syncEngine),await b2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new S2})()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),s=(function(u){return new a2(u)})(e.databaseInfo);return(function(u,f,m,g){return new u2(u,f,m,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new h2(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>Rv(this.syncEngine,n,0)),(function(){return Tv.p()?new Tv:new i2})())}createSyncEngine(e,n){return(function(o,u,f,m,g,_,b){const I=new x2(o,u,f,m,g,_);return b&&(I.$a=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(o){const u=be(o);ie("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ql(u),u.Q_.shutdown(),u.K_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lm.provider={build:()=>new lm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=iE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{ie("FirestoreClient","Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(ie("FirestoreClient","Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hm(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Md(r,e){r.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await LE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Cv(r,e){r.asyncQueue.verifyOperationInProgress();const n=await X2(r);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>bv(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>bv(e.remoteStore,o))),r._onlineComponents=e}async function X2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await Md(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;$a("Error using user provided cache. Falling back to memory cache: "+n),await Md(r,new Kc)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await Md(r,new Q2(void 0));return r._offlineComponents}async function tT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(r,r._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Cv(r,new lm))),r._onlineComponents}function W2(r){return tT(r).then((e=>e.syncEngine))}async function Z2(r){const e=await tT(r),n=e.eventManager;return n.onListen=M2.bind(null,e.syncEngine),n.onUnlisten=L2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=V2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=U2.bind(null,e.syncEngine),n}function J2(r,e,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,g,_){const b=new Y2({next:M=>{b.eu(),f.enqueueAndForget((()=>R2(u,I)));const j=M.docs.has(m);!j&&M.fromCache?_.reject(new de(W.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&M.fromCache&&g&&g.source==="server"?_.reject(new de(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(M)},error:M=>_.reject(M)}),I=new D2(Nm(m.path),b,{includeMetadataChanges:!0,ua:!0});return w2(u,I)})(await Z2(r),r.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(r,e,n){if(!n)throw new de(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tD(r,e,n,s){if(e===!0&&s===!0)throw new de(W.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Nv(r){if(!me.isDocumentKey(r))throw new de(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Km(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye()}function Ul(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Km(r);throw new de(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qm{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ov({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ov(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new aI;switch(s.type){case"firstParty":return new cI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Dv.get(n);s&&(ie("ComponentProvider","Removing Datastore"),Dv.delete(n),s.terminate())})(this),Promise.resolve()}}function nD(r,e,n,s={}){var o;const u=(r=Ul(r,Qm))._getSettings(),f=`${e}:${n}`;if(u.host!=="firestore.googleapis.com"&&u.host!==f&&$a("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:f,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Qt.MOCK_USER;else{m=a0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new de(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Qt(_)}r._authCredentials=new oI(new nE(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ym(this.firestore,e,this._query)}}class Pn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class zl extends Ym{constructor(e,n,s){super(e,n,Nm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new me(e))}withConverter(e){return new zl(this.firestore,e,this._path)}}function iT(r,e,...n){if(r=Xt(r),arguments.length===1&&(e=iE.newId()),eD("doc","path",e),r instanceof Qm){const s=ut.fromString(e,...n);return Nv(s),new Pn(r,null,new me(s))}{if(!(r instanceof Pn||r instanceof zl))throw new de(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ut.fromString(e,...n));return Nv(s),new Pn(r.firestore,r instanceof zl?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new zE(this,"async_queue_retry"),this.fu=()=>{const s=xd();s&&ie("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise((()=>{}));const n=new Qr;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Iu.push(e),this.wu())))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!so(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(e){const n=this.gu.then((()=>(this.Ru=!0,e().catch((s=>{this.Au=s,this.Ru=!1;const o=(function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m})(s);throw er("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.Ru=!1,s))))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const o=qm.createAndSchedule(this,e,n,s,(u=>this.Su(u)));return this.du.push(o),o}pu(){this.Au&&ye()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then((()=>{this.du.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()}))}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class $m extends Qm{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new kv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kv(e),this._firestoreClient=void 0,await e}}}function rT(r,e){const n=typeof r=="object"?r:eh(),s=typeof r=="string"?r:"(default)",o=Jr(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=i0("firestore");u&&nD(o,...u)}return o}function sT(r){if(r._terminated)throw new de(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iD(r),r._firestoreClient}function iD(r){var e,n,s;const o=r._freezeSettings(),u=(function(m,g,_,b){return new wI(m,g,_,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,nT(b.experimentalLongPollingOptions),b.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new $2(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._byteString=e}static fromBase64String(e){try{return new to(qt.fromBase64String(e))}catch(n){throw new de(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new to(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=/^__.*__$/;class sD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gl(e,this.data,n,this.fieldTransforms)}}function aT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class ep{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Qc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(aT(this.Mu)&&rD.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class aD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||dh(e)}$u(e,n,s,o=!1){return new ep({Mu:e,methodName:n,Ku:s,path:Bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oD(r){const e=r._freezeSettings(),n=dh(r._databaseId);return new aD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function lD(r,e,n,s,o,u={}){const f=r.$u(u.merge||u.mergeFields?2:0,e,n,o);cT("Data must be an object, but it was:",f,s);const m=lT(s,f);let g,_;if(u.merge)g=new Gn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const b=[];for(const I of u.mergeFields){const M=uD(e,I,n);if(!f.contains(M))throw new de(W.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);hD(b,M)||b.push(M)}g=new Gn(b),_=f.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=f.fieldTransforms;return new sD(new Vn(m),g,_)}class tp extends Wm{_toFieldTransform(e){return new WI(e.path,new Vl)}isEqual(e){return e instanceof tp}}function oT(r,e){if(uT(r=Xt(r)))return cT("Unsupported field value:",e,r),lT(r,e);if(r instanceof Wm)return(function(s,o){if(!aT(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let g=oT(m,o.ku(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return YI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Rt.fromDate(s);return{timestampValue:Hc(o.serializer,u)}}if(s instanceof Rt){const u=new Rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hc(o.serializer,u)}}if(s instanceof Zm)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof to)return{bytesValue:DE(o.serializer,s._byteString)};if(s instanceof Pn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.qu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Mm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Jm)return(function(f,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return Om(m.serializer,g)}))}}}}}})(s,o);throw o.qu(`Unsupported field value: ${Km(s)}`)})(r,e)}function lT(r,e){const n={};return rE(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(r,((s,o)=>{const u=oT(o,e.Ou(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function uT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Rt||r instanceof Zm||r instanceof to||r instanceof Pn||r instanceof Wm||r instanceof Jm)}function cT(r,e,n){if(!uT(n)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(n)){const s=Km(n);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function uD(r,e,n){if((e=Xt(e))instanceof Xm)return e._internalPath;if(typeof e=="string")return hT(r,e);throw Qc("Field path arguments must be of type string or ",r,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function hT(r,e,n){if(e.search(cD)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Xm(...e.split("."))._internalPath}catch{throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Qc(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new de(W.INVALID_ARGUMENT,m+r+g)}function hD(r,e){return r.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fD extends fT{data(){return super.data()}}function dT(r,e){return typeof e=="string"?hT(r,e):e instanceof Xm?e._internalPath:e._delegate._internalPath}class dD{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ks(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((f=>dt(f.doubleValue)));return new Jm(u)}convertGeoPoint(e){return new Zm(dt(e.latitude),dt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ah(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const n=$r(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ut.fromString(e);Fe(VE(s));const o=new xl(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(n)||er(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mT extends fT{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gD extends mT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(r){r=Ul(r,Pn);const e=Ul(r.firestore,$m);return J2(sT(e),r._key).then((n=>ED(e,r,n)))}class _D extends dD{constructor(e){super(),this.firestore=e}convertBytes(e){return new to(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pn(this.firestore,null,n)}}function yD(r,e,n){r=Ul(r,Pn);const s=Ul(r.firestore,$m),o=mD(r.converter,e);return vD(s,[lD(oD(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Wi.none())])}function vD(r,e){return(function(s,o){const u=new Qr;return s.asyncQueue.enqueueAndForget((async()=>z2(await W2(s),o,u))),u.promise})(sT(r),e)}function ED(r,e,n){const s=n.docs.get(e._key),o=new _D(r);return new mT(r,o,e._key,s,new pD(n.hasPendingWrites,n.fromCache),e.converter)}function TD(){return new tp("serverTimestamp")}(function(e,n=!0){(function(o){io=o})(Fs),Qn(new Ln("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new $m(new lI(s.getProvider("auth-internal")),new fI(s.getProvider("app-check-internal")),(function(_,b){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new de(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(_.options.projectId,b)})(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),ln(Xy,"4.7.5",e),ln(Xy,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebasestorage.googleapis.com",bD="storageBucket",AD=120*1e3,SD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Un{constructor(e,n,s=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yi;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yi||(yi={}));function Vd(r){return"storage/"+r}function wD(){const r="An unknown error occurred, please check the error payload for server response.";return new vi(yi.UNKNOWN,r)}function RD(){return new vi(yi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ID(){return new vi(yi.CANCELED,"User canceled the upload/download.")}function CD(r){return new vi(yi.INVALID_URL,"Invalid URL '"+r+"'.")}function DD(r){return new vi(yi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function xv(r){return new vi(yi.INVALID_ARGUMENT,r)}function _T(){return new vi(yi.APP_DELETED,"The Firebase app was deleted.")}function ND(r){return new vi(yi.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Kn.makeFromUrl(e,n)}catch{return new Kn(e,"")}if(s.path==="")return s;throw DD(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(Ee){Ee.path.charAt(Ee.path.length-1)==="/"&&(Ee.path_=Ee.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(Ee){Ee.path_=decodeURIComponent(Ee.path)}const b="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),M="(/([^?#]*).*)?$",j=new RegExp(`^https?://${I}/${b}/b/${o}/o${M}`,"i"),$={bucket:1,path:3},J=n===gT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,G="([^?#]*)",he=new RegExp(`^https?://${J}/${o}/${G}`,"i"),le=[{regex:m,indices:g,postModify:u},{regex:j,indices:$,postModify:_},{regex:he,indices:{bucket:1,path:2},postModify:_}];for(let Ee=0;Ee<le.length;Ee++){const fe=le[Ee],Ae=fe.regex.exec(e);if(Ae){const D=Ae[fe.indices.bucket];let S=Ae[fe.indices.path];S||(S=""),s=new Kn(D,S),fe.postModify(s);break}}if(s==null)throw CD(e);return s}}class OD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(r,e,n){let s=1,o=null,u=null,f=!1,m=0;function g(){return m===2}let _=!1;function b(...G){_||(_=!0,e.apply(null,G))}function I(G){o=setTimeout(()=>{o=null,r(j,g())},G)}function M(){u&&clearTimeout(u)}function j(G,...he){if(_){M();return}if(G){M(),b.call(null,G,...he);return}if(g()||f){M(),b.call(null,G,...he);return}s<64&&(s*=2);let le;m===1?(m=2,le=0):le=(s+Math.random())*1e3,I(le)}let $=!1;function J(G){$||($=!0,M(),!_&&(o!==null?(G||(m=2),clearTimeout(o),I(0)):G||(m=1)))}return I(0),u=setTimeout(()=>{f=!0,J(!0)},n),J}function xD(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(r){return r!==void 0}function Mv(r,e,n,s){if(s<e)throw xv(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw xv(`Invalid value for '${r}'. Expected ${n} or less.`)}function VD(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Yc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Yc||(Yc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(r,e){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,s,o,u,f,m,g,_,b,I,M=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=b,this.connectionFactory_=I,this.retry=M,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,$)=>{this.resolve_=j,this.reject_=$,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new bc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const g=m.loaded,_=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Yc.NO_ERROR,g=u.getStatus();if(!m||PD(g,this.additionalRetryCodes_)&&this.retry){const b=u.getErrorCode()===Yc.ABORT;s(!1,new bc(!1,null,b));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new bc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(m,m.getResponse());MD(g)?u(g):u()}catch(g){f(g)}else if(m!==null){const g=wD();g.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,g)):f(g)}else if(o.canceled){const g=this.appDelete_?_T():ID();f(g)}else{const g=RD();f(g)}};this.canceled_?n(!1,new bc(!1,null,!0)):this.backoffId_=kD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function UD(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function zD(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jD(r,e){e&&(r["X-Firebase-GMPID"]=e)}function BD(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function qD(r,e,n,s,o,u,f=!0){const m=VD(r.urlParams),g=r.url+m,_=Object.assign({},r.headers);return jD(_,e),UD(_,n),zD(_,u),BD(_,s),new LD(g,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function FD(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this._service=e,n instanceof Kn?this._location=n:this._location=Kn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $c(e,n)}get root(){const e=new Kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FD(this._location.path)}get storage(){return this._service}get parent(){const e=HD(this._location.path);if(e===null)return null;const n=new Kn(this._location.bucket,e);return new $c(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ND(e)}}function Vv(r,e){const n=e==null?void 0:e[bD];return n==null?null:Kn.makeFromBucketSpec(n,r)}function GD(r,e,n,s={}){r.host=`${e}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:a0(o,r.app.options.projectId))}class KD{constructor(e,n,s,o,u){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=gT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AD,this._maxUploadRetryTime=SD,this._requests=new Set,o!=null?this._bucket=Kn.makeFromBucketSpec(o,this._host):this._bucket=Vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,e):this._bucket=Vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $c(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new OD(_T());{const f=qD(e,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const Pv="@firebase/storage",Lv="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="storage";function QD(r=eh(),e){r=Xt(r);const s=Jr(r,yT).getImmediate({identifier:e}),o=i0("storage");return o&&YD(s,...o),s}function YD(r,e,n,s={}){GD(r,e,n,s)}function $D(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new KD(n,s,o,e,Fs)}function XD(){Qn(new Ln(yT,$D,"PUBLIC").setMultipleInstances(!0)),ln(Pv,Lv,""),ln(Pv,Lv,"esm2017")}XD();const vT="@firebase/installations",np="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1e4,TT=`w:${np}`,bT="FIS_v2",WD="https://firebaseinstallations.googleapis.com/v1",ZD=3600*1e3,JD="installations",eN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bs=new Hs(JD,eN,tN);function AT(r){return r instanceof Un&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST({projectId:r}){return`${WD}/projects/${r}/installations`}function wT(r){return{token:r.token,requestStatus:2,expiresIn:iN(r.expiresIn),creationTime:Date.now()}}async function RT(r,e){const s=(await e.json()).error;return Bs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function IT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function nN(r,{refreshToken:e}){const n=IT(r);return n.append("Authorization",rN(e)),n}async function CT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function iN(r){return Number(r.replace("s","000"))}function rN(r){return`${bT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ST(r),o=IT(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const f={fid:n,authVersion:bT,appId:r.appId,sdkVersion:TT},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await CT(()=>fetch(s,m));if(g.ok){const _=await g.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:wT(_.authToken)}}else throw await RT("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=/^[cdef][\w-]{21}$/,um="";function lN(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=uN(r);return oN.test(n)?n:um}catch{return um}}function uN(r){return aN(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Map;function OT(r,e){const n=gh(r);kT(n,e),cN(n,e)}function kT(r,e){const n=NT.get(r);if(n)for(const s of n)s(e)}function cN(r,e){const n=hN();n&&n.postMessage({key:r,fid:e}),fN()}let Ps=null;function hN(){return!Ps&&"BroadcastChannel"in self&&(Ps=new BroadcastChannel("[Firebase] FID Change"),Ps.onmessage=r=>{kT(r.data.key,r.data.fid)}),Ps}function fN(){NT.size===0&&Ps&&(Ps.close(),Ps=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="firebase-installations-database",mN=1,qs="firebase-installations-store";let Pd=null;function ip(){return Pd||(Pd=c0(dN,mN,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(qs)}}})),Pd}async function Xc(r,e){const n=gh(r),o=(await ip()).transaction(qs,"readwrite"),u=o.objectStore(qs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&OT(r,e.fid),e}async function xT(r){const e=gh(r),s=(await ip()).transaction(qs,"readwrite");await s.objectStore(qs).delete(e),await s.done}async function _h(r,e){const n=gh(r),o=(await ip()).transaction(qs,"readwrite"),u=o.objectStore(qs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&OT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(r){let e;const n=await _h(r.appConfig,s=>{const o=pN(s),u=gN(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===um?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pN(r){const e=r||{fid:lN(),registrationStatus:0};return MT(e)}function gN(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_N(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yN(r)}:{installationEntry:e}}async function _N(r,e){try{const n=await sN(r,e);return Xc(r.appConfig,n)}catch(n){throw AT(n)&&n.customData.serverCode===409?await xT(r.appConfig):await Xc(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yN(r){let e=await Uv(r.appConfig);for(;e.registrationStatus===1;)await DT(100),e=await Uv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await rp(r);return s||n}return e}function Uv(r){return _h(r,e=>{if(!e)throw Bs.create("installation-not-found");return MT(e)})}function MT(r){return vN(r)?{fid:r.fid,registrationStatus:0}:r}function vN(r){return r.registrationStatus===1&&r.registrationTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN({appConfig:r,heartbeatServiceProvider:e},n){const s=TN(r,n),o=nN(r,n),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const f={installation:{sdkVersion:TT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await CT(()=>fetch(s,m));if(g.ok){const _=await g.json();return wT(_)}else throw await RT("Generate Auth Token",g)}function TN(r,{fid:e}){return`${ST(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(r,e=!1){let n;const s=await _h(r.appConfig,u=>{if(!VT(u))throw Bs.create("not-registered");const f=u.authToken;if(!e&&SN(f))return u;if(f.requestStatus===1)return n=bN(r,e),u;{if(!navigator.onLine)throw Bs.create("app-offline");const m=RN(u);return n=AN(r,m),m}});return n?await n:s.authToken}async function bN(r,e){let n=await zv(r.appConfig);for(;n.authToken.requestStatus===1;)await DT(100),n=await zv(r.appConfig);const s=n.authToken;return s.requestStatus===0?sp(r,e):s}function zv(r){return _h(r,e=>{if(!VT(e))throw Bs.create("not-registered");const n=e.authToken;return IN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AN(r,e){try{const n=await EN(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Xc(r.appConfig,s),n}catch(n){if(AT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xT(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xc(r.appConfig,s)}throw n}}function VT(r){return r!==void 0&&r.registrationStatus===2}function SN(r){return r.requestStatus===2&&!wN(r)}function wN(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+ZD}function RN(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function IN(r){return r.requestStatus===1&&r.requestTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(r){const e=r,{installationEntry:n,registrationPromise:s}=await rp(e);return s?s.catch(console.error):sp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(r,e=!1){const n=r;return await NN(n),(await sp(n,e)).token}async function NN(r){const{registrationPromise:e}=await rp(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(r){if(!r||!r.options)throw Ld("App Configuration");if(!r.name)throw Ld("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Ld(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ld(r){return Bs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="installations",kN="installations-internal",xN=r=>{const e=r.getProvider("app").getImmediate(),n=ON(e),s=Jr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},MN=r=>{const e=r.getProvider("app").getImmediate(),n=Jr(e,PT).getImmediate();return{getId:()=>CN(n),getToken:o=>DN(n,o)}};function VN(){Qn(new Ln(PT,xN,"PUBLIC")),Qn(new Ln(kN,MN,"PRIVATE"))}VN();ln(vT,np);ln(vT,np,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="analytics",PN="firebase_id",LN="origin",UN=60*1e3,zN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ap="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Jc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_n=new Hs("analytics","Analytics",jN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(r){if(!r.startsWith(ap)){const e=_n.create("invalid-gtag-resource",{gtagURL:r});return un.warn(e.message),""}return r}function LT(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function qN(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function HN(r,e){const n=qN("firebase-js-sdk-policy",{createScriptURL:BN}),s=document.createElement("script"),o=`${ap}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function FN(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function GN(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const g=(await LT(n)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(m){un.error(m)}r("config",o,u)}async function KN(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await LT(n);for(const g of f){const _=m.find(I=>I.measurementId===g),b=_&&e[_.appId];if(b)u.push(b);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){un.error(u)}}function QN(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,g]=f;await KN(r,e,n,m,g)}else if(u==="config"){const[m,g]=f;await GN(r,e,n,s,m,g)}else if(u==="consent"){const[m,g]=f;r("consent",m,g)}else if(u==="get"){const[m,g,_]=f;r("get",m,g,_)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){un.error(m)}}return o}function YN(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=QN(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function $N(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ap)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=30,WN=1e3;class ZN{constructor(e={},n=WN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const UT=new ZN;function JN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function eO(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:JN(s)},u=zN.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(m=g.error.message)}catch{}throw _n.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function tO(r,e=UT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw _n.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw _n.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new rO;return setTimeout(async()=>{m.abort()},UN),zT({appId:s,apiKey:o,measurementId:u},f,m,e)}async function zT(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=UT){var u;const{appId:f,measurementId:m}=r;try{await nO(s,e)}catch(g){if(m)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw g}try{const g=await eO(r);return o.deleteThrottleMetadata(f),g}catch(g){const _=g;if(!iO(_)){if(o.deleteThrottleMetadata(f),m)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:f,measurementId:m};throw g}const b=Number((u=_==null?void 0:_.customData)===null||u===void 0?void 0:u.httpStatus)===503?Ty(n,o.intervalMillis,XN):Ty(n,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+b,backoffCount:n+1};return o.setThrottleMetadata(f,I),un.debug(`Calling attemptFetch again in ${b} millis`),zT(r,I,s,o)}}function nO(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(_n.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iO(r){if(!(r instanceof Un)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class rO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sO(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(){if(dm())try{await mm()}catch(r){return un.warn(_n.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return un.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oO(r,e,n,s,o,u,f){var m;const g=tO(r);g.then(j=>{n[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>un.error(j)),e.push(g);const _=aO().then(j=>{if(j)return s.getId()}),[b,I]=await Promise.all([g,_]);$N(u)||HN(u,b.measurementId),o("js",new Date);const M=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return M[LN]="firebase",M.update=!0,I!=null&&(M[PN]=I),o("config",b.measurementId,M),b.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.app=e}_delete(){return delete wl[this.app.options.appId],Promise.resolve()}}let wl={},jv=[];const Bv={};let Ud="dataLayer",uO="gtag",qv,jT,Hv=!1;function cO(){const r=[];if(fm()&&r.push("This is a browser extension environment."),o0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=_n.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function hO(r,e,n){cO();const s=r.options.appId;if(!s)throw _n.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _n.create("no-api-key");if(wl[s]!=null)throw _n.create("already-exists",{id:s});if(!Hv){FN(Ud);const{wrappedGtag:u,gtagCore:f}=YN(wl,jv,Bv,Ud,uO);jT=u,qv=f,Hv=!0}return wl[s]=oO(r,jv,Bv,e,qv,Ud,n),new lO(r)}function fO(r=eh()){r=Xt(r);const e=Jr(r,Wc);return e.isInitialized()?e.getImmediate():dO(r)}function dO(r,e={}){const n=Jr(r,Wc);if(n.isInitialized()){const o=n.getImmediate();if(Il(e,n.getOptions()))return o;throw _n.create("already-initialized")}return n.initialize({options:e})}async function mO(){if(fm()||!o0()||!dm())return!1;try{return await mm()}catch{return!1}}function pO(r,e,n,s){r=Xt(r),sO(jT,wl[r.app.options.appId],e,n,s).catch(o=>un.error(o))}const Fv="@firebase/analytics",Gv="0.10.10";function gO(){Qn(new Ln(Wc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return hO(s,o,n)},"PUBLIC")),Qn(new Ln("analytics-internal",r,"PRIVATE")),ln(Fv,Gv),ln(Fv,Gv,"esm2017");function r(e){try{const n=e.getProvider(Wc).getImmediate();return{logEvent:(s,o,u)=>pO(n,s,o,u)}}catch(n){throw _n.create("interop-component-reg-failed",{reason:n})}}}gO();const _O={apiKey:"AIzaSyAN3eZ954WBlVzf4hfXDC0FUFwY8e-jEWg",authDomain:"foto-pro-comercio.firebaseapp.com",projectId:"foto-pro-comercio",storageBucket:"foto-pro-comercio.firebasestorage.app",messagingSenderId:"894219859206",appId:"1:894219859206:web:908edb4b9340d0b19fda87",measurementId:"G-3TQNBF6FQG"},yh=h0(_O),cm=$0(yh),yO=rT(yh);QD(yh);mO().then(r=>{r&&fO(yh)});function vO({onLogin:r}){const[e,n]=Ye.useState("login"),[s,o]=Ye.useState(""),[u,f]=Ye.useState(""),[m,g]=Ye.useState(!1),[_,b]=Ye.useState(!1),[I,M]=Ye.useState(""),j=Ye.useMemo(()=>s.trim().length>3&&u.trim().length>=6,[s,u]),$=async(G,he)=>{const ue=iT(yO,"users",G);(await pT(ue)).exists()||await yD(ue,{email:he,credits:0,createdAt:TD()})},J=async()=>{if(M(""),!j){M("Preencha e-mail e senha (senha com no mínimo 6 caracteres).");return}b(!0);try{if(e==="login"){const G=await F1(cm,s.trim(),u);await $(G.user.uid,G.user.email||s.trim()),r()}else{const G=await H1(cm,s.trim(),u);await $(G.user.uid,G.user.email||s.trim()),r()}}catch(G){console.error("Erro login:",G),M("Não foi possível. Verifique e-mail/senha e tente novamente.")}finally{b(!1)}};return q.jsx("div",{className:"max-w-md mx-auto w-full",children:q.jsxs("div",{className:"rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5",children:[q.jsxs("div",{className:"flex items-center justify-between mb-4",children:[q.jsxs("div",{children:[q.jsx("h2",{className:"text-lg font-extrabold",children:e==="login"?"Entrar":"Criar conta"}),q.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1",children:e==="login"?"Entre para usar seus créditos e gerar imagens.":"Crie seu usuário e comece a usar o ProPhoto IA."})]}),q.jsx("button",{onClick:()=>n(e==="login"?"signup":"login"),className:"text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-400 transition",type:"button",children:e==="login"?"Criar conta":"Já tenho conta"})]}),q.jsxs("div",{className:"mb-3",children:[q.jsx("label",{className:"text-[11px] font-bold text-slate-600 dark:text-slate-300",children:"E-mail"}),q.jsxs("div",{className:"mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2",children:[q.jsx($A,{className:"w-4 h-4 text-slate-400"}),q.jsx("input",{value:s,onChange:G=>o(G.target.value),placeholder:"seuemail@gmail.com",className:"w-full bg-transparent outline-none text-sm",type:"email",autoComplete:"email"})]})]}),q.jsxs("div",{className:"mb-2",children:[q.jsx("label",{className:"text-[11px] font-bold text-slate-600 dark:text-slate-300",children:"Senha"}),q.jsxs("div",{className:"mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2",children:[q.jsx(GA,{className:"w-4 h-4 text-slate-400"}),q.jsx("input",{value:u,onChange:G=>f(G.target.value),placeholder:"mínimo 6 caracteres",className:"w-full bg-transparent outline-none text-sm",type:m?"text":"password",autoComplete:e==="login"?"current-password":"new-password"}),q.jsx("button",{type:"button",onClick:()=>g(!m),className:"p-1 text-slate-400 hover:text-indigo-600 transition",title:m?"Ocultar senha":"Mostrar senha",children:m?q.jsx(LA,{className:"w-4 h-4"}):q.jsx(zA,{className:"w-4 h-4"})})]})]}),I&&q.jsx("div",{className:"mt-3 text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 px-3 py-2 rounded-xl",children:I}),q.jsx("button",{onClick:J,disabled:_,className:"mt-4 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-extrabold py-3 flex items-center justify-center gap-2 transition",type:"button",children:e==="login"?q.jsxs(q.Fragment,{children:[q.jsx(QA,{className:"w-4 h-4"})," ",_?"Entrando...":"Entrar"]}):q.jsxs(q.Fragment,{children:[q.jsx(uS,{className:"w-4 h-4"})," ",_?"Criando...":"Criar conta"]})}),q.jsxs("p",{className:"mt-3 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed",children:["✅ Se você criar uma conta nova, ela vai aparecer em:",q.jsx("b",{children:" Firebase > Authentication > Usuários"})]})]})})}const Kv=[{id:"foto-produto",name:"Foto do produto",prompt:"Professional commercial product photography, centered composition, realistic shadows. Sharp focus on every detail. No people. No background blur."},{id:"modelo-mostrando",name:"Modelo mostrando o produto",prompt:"A real human model holding the product naturally in a retail setting. Smile, confident expression. Product in absolute highlight. All five fingers visible and perfectly formed."},{id:"modelo-brincando",name:"Modelo brincando com o produto",prompt:"A real human model interacting naturally with the product inside a store. Spontaneous expression. Perfect anatomy, sharp focus on product and model."},{id:"modelo-vestindo",name:"Modelo vestindo o produto",prompt:"Professional photography of a real human model wearing the product in a lifestyle retail environment. Perfect proportions, absolute product fidelity, no background blur."}],Qv=[{id:"none",name:"Nenhum / Aleatório",prompt:""},{id:"mulher-adulta",name:"Mulher Adulta",prompt:"Adult woman, authentic human appearance, visible pores, natural skin."},{id:"mulher-plus",name:"Mulher Plus Size",prompt:"Plus-size adult woman, authentic human appearance, natural skin."},{id:"homem-adulto",name:"Homem Adulto",prompt:"Adult man, authentic human appearance, realistic skin texture."},{id:"homem-plus",name:"Homem Plus Size",prompt:"Plus-size adult man, authentic human appearance, natural skin."},{id:"mulher-jovem",name:"Mulher Jovem",prompt:"Young woman (18-25), fresh natural look, authentic skin."},{id:"homem-jovem",name:"Homem Jovem",prompt:"Young man (18-25), modern friendly appearance, authentic skin."},{id:"adolescente-homem",name:"Adolescente Homem",prompt:"Teenage boy, natural smile, authentic human features."},{id:"adolescente-mulher",name:"Adolescente Mulher",prompt:"Teenage girl, natural smile, authentic human features."},{id:"crianca-menina",name:"Criança Menina",prompt:"Young girl, happy expression, natural child proportions."},{id:"crianca-menino",name:"Criança Menino",prompt:"Young boy, happy expression, natural child proportions."},{id:"bebe-menina",name:"Bebê Menina",prompt:"Baby girl, soft natural appearance, calm expression."},{id:"bebe-menino",name:"Bebê Menino",prompt:"Baby boy, soft natural appearance, calm expression."}],Yv=[{id:"1:1",name:"1:1 (Quadrado)",aspectRatio:"1:1"},{id:"4:5",name:"4:5 (Retrato)",aspectRatio:"3:4"},{id:"9:16",name:"9:16 (Stories)",aspectRatio:"9:16"}],zd={},EO=({user:r,onImageGenerated:e,onCreditError:n})=>{var Ae;const[s,o]=Ye.useState(null),[u,f]=Ye.useState(Kv[0]),[m,g]=Ye.useState(Qv[0]),[_,b]=Ye.useState(Yv[0]),[I,M]=Ye.useState("hd"),[j,$]=Ye.useState(!1),[J,G]=Ye.useState(null),he=Ye.useRef(null),ue=((Ae=zd==null?void 0:zd.VITE_LOCAL_GENERATE_URL)==null?void 0:Ae.trim())||"http://localhost:5050",le=Ye.useMemo(()=>I==="4k"?3:1,[I]),Ee=D=>{var A;const S=(A=D.target.files)==null?void 0:A[0];if(S){const C=new FileReader;C.onloadend=()=>o(C.result),C.readAsDataURL(S)}},fe=async()=>{if(j)return;if(!(r!=null&&r.uid)){G("Você precisa estar logado para gerar.");return}if(Number((r==null?void 0:r.credits)??0)<le){G(`Créditos insuficientes. Você precisa de ${le} crédito(s).`),n();return}if(!s){G("Por favor, carregue uma imagem do produto.");return}$(!0),G(null),await new Promise(S=>setTimeout(S,0));try{const S=s.split(",")[1],A=s.split(";")[0].split(":")[1],C=I==="4k"?"Generate the final image in ultra high detail and maximum resolution possible. Prioritize sharpness and fine textures.":"Generate the final image in high quality (HD), clean and professional.",k=`
${u.prompt}
${m.prompt?`Featuring a character: ${m.prompt}`:""}
Keep the product from the attached image exactly as it is. It is the central element.
Ensure the lighting is professional and the product is the hero of the shot.
${C}
`.trim(),P=await fetch(`${ue}/generate-image`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({quality:I,prompt:k,input_image:s,base64Data:S,mimeType:A})}),R=await P.json().catch(()=>({}));if(!P.ok){const it=(R==null?void 0:R.error)||(R==null?void 0:R.message)||`Erro HTTP ${P.status}`;throw new Error(it)}const nt=(R==null?void 0:R.image_url)||null;if(!nt)throw new Error("Servidor não retornou image_url.");e(nt,{scenario:u.name,character:m.name,format:_.name,quality:I,creditsCost:le,engine:I==="4k"?"gemini-4k":"replicate-hd"})}catch(S){G((S==null?void 0:S.message)||"Falha ao gerar imagem.")}finally{$(!1)}};return q.jsxs("div",{className:"space-y-6 pb-20",children:[q.jsxs("section",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors",children:[q.jsxs("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2",children:[q.jsx(DA,{className:"w-4 h-4 text-indigo-600 dark:text-indigo-400"}),"1. Carregar Produto"]}),q.jsxs("div",{onClick:()=>{var D;return(D=he.current)==null?void 0:D.click()},className:`relative aspect-video rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center gap-3 overflow-hidden
            ${s?"border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-900/10":"border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600"}
          `,children:[s?q.jsx("img",{src:s,alt:"Product",className:"absolute inset-0 w-full h-full object-contain p-4"}):q.jsxs("div",{className:"text-center px-4",children:[q.jsx(oS,{className:"w-6 h-6 mx-auto mb-2 text-slate-400 dark:text-slate-600"}),q.jsx("p",{className:"text-sm font-medium text-slate-700 dark:text-slate-400",children:"Clique para selecionar"})]}),q.jsx("input",{type:"file",ref:he,className:"hidden",accept:"image/*",onChange:Ee})]})]}),q.jsxs("section",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors",children:[q.jsxs("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2",children:[q.jsx(WA,{className:"w-4 h-4 text-indigo-600 dark:text-indigo-400"}),"2. Cenário"]}),q.jsx("div",{className:"space-y-2",children:Kv.map(D=>q.jsxs("button",{onClick:()=>f(D),className:`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between
                ${u.id===D.id?"border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400":"border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}
              `,children:[q.jsx("span",{className:"text-sm font-medium",children:D.name}),q.jsx(OA,{className:`w-4 h-4 ${u.id===D.id?"opacity-100":"opacity-0"}`})]},D.id))})]}),u.id!=="foto-produto"&&q.jsxs("section",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors",children:[q.jsxs("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2",children:[q.jsx(hS,{className:"w-4 h-4 text-indigo-600 dark:text-indigo-400"}),"3. Personagem"]}),q.jsx("div",{className:"grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1",children:Qv.map(D=>q.jsx("button",{onClick:()=>g(D),className:`text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium
                  ${m.id===D.id?"border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400":"border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}
                `,children:D.name},D.id))})]}),q.jsxs("section",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors",children:[q.jsxs("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2",children:[q.jsx(HA,{className:"w-4 h-4 text-indigo-600 dark:text-indigo-400"}),"Formato"]}),q.jsx("div",{className:"flex gap-2",children:Yv.map(D=>q.jsx("button",{onClick:()=>b(D),className:`flex-1 p-3 rounded-xl border transition-all text-center
                ${_.id===D.id?"border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400":"border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}
              `,children:q.jsx("span",{className:"text-xs font-bold",children:D.name.split(" ")[0]})},D.id))})]}),q.jsxs("section",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors",children:[q.jsxs("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2",children:[q.jsx(Rl,{className:"w-4 h-4 text-indigo-600 dark:text-indigo-400"}),"Qualidade"]}),q.jsxs("div",{className:"flex gap-2",children:[q.jsxs("button",{onClick:()=>M("hd"),className:`flex-1 p-3 rounded-xl border transition-all text-center
              ${I==="hd"?"border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400":"border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}
            `,children:[q.jsx("div",{className:"text-sm font-bold",children:"HD"}),q.jsx("div",{className:"text-xs opacity-80",children:"1 crédito"})]}),q.jsxs("button",{onClick:()=>M("4k"),className:`flex-1 p-3 rounded-xl border transition-all text-center
              ${I==="4k"?"border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400":"border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}
            `,children:[q.jsx("div",{className:"text-sm font-bold",children:"4K"}),q.jsx("div",{className:"text-xs opacity-80",children:"3 créditos"})]})]})]}),J&&q.jsx("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-xl border border-red-100 dark:border-red-900/30",children:J}),q.jsxs("button",{onClick:fe,disabled:j||!s,className:`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg
          ${j||!s?"bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed":"bg-indigo-600 text-white dark:bg-indigo-500"}
        `,children:[j?q.jsx(JA,{className:"w-5 h-5 animate-spin"}):q.jsx(Rl,{className:"w-5 h-5"}),j?"Criando...":I==="4k"?"Gerar Foto 4K (3 créditos)":"Gerar Foto HD (1 crédito)"]})]})},TO="https://mp-pagamentos-final-894219859206.southamerica-east1.run.app".replace(/\/+$/,""),bO=[{id:"plano_basico",name:"Plano Básico",price:"39,90",credits:"25",description:"Para pequenos catálogos e testes frequentes",icon:dS,highlight:!1},{id:"plano_pro",name:"Plano Pro",price:"79,90",credits:"100",description:"Mais popular: ótimo custo-benefício para uso constante",icon:sS,highlight:!0},{id:"plano_avancado",name:"Plano Avançado",price:"149,90",credits:"250",description:"Para quem quer volume e máxima performance no dia a dia",icon:Rl,highlight:!1},{id:"plano_anual",name:"Plano Anual",price:"490,00",credits:"100/mês",description:"Assinatura anual com créditos mensais para escalar o negócio",icon:BA,highlight:!1}];function AO(){const[r,e]=Ye.useState(null),n=Ye.useMemo(()=>{const o=cm.currentUser;return{userId:(o==null?void 0:o.uid)||null,email:(o==null?void 0:o.email)||null}},[]);async function s(o){if(!n.userId||!n.email){alert("Você precisa estar logado.");return}if(o==="plano_anual"){alert("Este plano ainda não está habilitado no backend. Use Básico / Pro / Avançado.");return}e(o);try{const u=await fetch(`${TO}/create_preference`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({planId:o,userId:n.userId,email:n.email})}),f=await u.json().catch(()=>({}));if(!u.ok){alert(`Erro ao criar pagamento (${u.status}).`),console.log("Resposta do backend:",f);return}if(f!=null&&f.init_point){window.location.href=f.init_point;return}if(f!=null&&f.sandbox_init_point){window.location.href=f.sandbox_init_point;return}alert("Erro ao criar pagamento (sem init_point)."),console.log("Resposta do backend:",f)}catch(u){alert("Falha ao chamar o backend de pagamento."),console.log(u)}finally{e(null)}}return q.jsx("div",{className:"min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 px-4 py-6",children:q.jsxs("div",{className:"max-w-xl mx-auto",children:[q.jsxs("div",{className:"mb-6",children:[q.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Pagamentos"}),q.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400 mt-1",children:"Escolha um plano e libere créditos após a aprovação."})]}),q.jsx("div",{className:"grid grid-cols-1 gap-4",children:bO.map(o=>{const u=o.icon;return q.jsxs("div",{className:`relative rounded-2xl border bg-white dark:bg-slate-900 p-5 shadow-sm ${o.highlight?"border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900":"border-slate-200 dark:border-slate-800"}`,children:[o.highlight&&q.jsx("div",{className:"absolute -top-2 right-4 rounded-full bg-indigo-600 text-white text-[10px] px-3 py-1 uppercase tracking-widest",children:"Recomendado"}),q.jsxs("div",{className:"flex flex-col gap-3",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("div",{className:`h-11 w-11 rounded-2xl flex items-center justify-center ${o.highlight?"bg-indigo-600 text-white":"bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50"}`,children:q.jsx(u,{className:"w-5 h-5"})}),q.jsxs("div",{children:[q.jsx("h2",{className:"text-lg font-semibold",children:o.name}),q.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 mt-1",children:o.description})]})]}),q.jsxs("div",{className:"text-left",children:[q.jsxs("div",{className:"text-xl font-black",children:["R$ ",o.price]}),q.jsxs("div",{className:"text-xs text-slate-600 dark:text-slate-400",children:[o.credits," créditos"]})]})]}),q.jsxs("button",{onClick:()=>s(o.id),disabled:r===o.id,className:`mt-4 w-full rounded-xl py-3 font-semibold flex items-center justify-center gap-2 ${o.highlight?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"} ${r===o.id?"opacity-70":""}`,children:[q.jsx(xA,{className:"w-4 h-4"}),r===o.id?"Abrindo...":"Comprar agora"]}),q.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400",children:[q.jsxs("div",{className:"flex items-center gap-1",children:[q.jsx(yy,{className:"w-3.5 h-3.5"}),"Pagamento seguro"]}),q.jsxs("div",{className:"flex items-center gap-1",children:[q.jsx(Rl,{className:"w-3.5 h-3.5"}),"Mercado Pago"]})]})]},o.id)})}),q.jsx("div",{className:"mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4",children:q.jsxs("div",{className:"flex items-start gap-3",children:[q.jsx("div",{className:"h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center",children:q.jsx(yy,{className:"w-5 h-5"})}),q.jsxs("div",{children:[q.jsx("p",{className:"text-sm font-semibold",children:"Segurança e garantia"}),q.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed",children:"Todas as transações são criptografadas e processadas de forma segura via Mercado Pago."})]})]})}),q.jsxs("div",{className:"text-center mt-10 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest flex justify-center gap-2 items-center",children:[q.jsx(Rl,{className:"w-3 h-3"}),"ProPhoto IA • Premium"]})]})})}const SO=({imageUrl:r,onBack:e})=>{const n=()=>{const s=document.createElement("a");s.href=r,s.download=`prophoto-ia-${Date.now()}.png`,document.body.appendChild(s),s.click(),document.body.removeChild(s)};return q.jsxs("div",{className:"flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8",children:[q.jsx("div",{className:"bg-slate-900 dark:bg-black rounded-3xl overflow-hidden relative shadow-2xl aspect-[3/4] flex items-center justify-center mb-6",children:q.jsx("img",{src:r,alt:"Result",className:"w-full h-full object-contain"})}),q.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[q.jsxs("button",{onClick:e,className:"py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors",children:[q.jsx(IA,{className:"w-5 h-5"}),"Voltar"]}),q.jsxs("button",{onClick:n,className:"py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg dark:shadow-none transition-colors",children:[q.jsx(VA,{className:"w-5 h-5"}),"Baixar"]})]}),q.jsxs("button",{className:"mt-4 w-full py-4 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors",onClick:()=>{navigator.share&&navigator.share({title:"Minha ProPhoto IA",url:r})},children:[q.jsx(tS,{className:"w-4 h-4"}),"Compartilhar Resultado"]})]})},$v=$0(),wO=rT(),RO=()=>{const[r,e]=Ye.useState("login"),[n,s]=Ye.useState(null),[o,u]=Ye.useState({id:"",uid:"",email:"",credits:0,isLoggedIn:!1});Ye.useEffect(()=>{const g=Q1($v,async _=>{if(_!=null&&_.uid){const b=_.uid,I=_.email||"";let M=0;try{const $=await pT(iT(wO,"users",b));if($.exists()){const J=$.data();M=Number((J==null?void 0:J.credits)??0)}}catch{M=0}const j={id:b,uid:b,email:I,credits:M,isLoggedIn:!0};u(j),localStorage.setItem("prophotoia_user",JSON.stringify(j)),e("create");return}u({id:"",uid:"",email:"",credits:0,isLoggedIn:!1}),e("login")});return()=>g()},[]);const f=(g,_)=>{s(g),e("result")},m=async()=>{try{await Y1($v)}catch{}localStorage.removeItem("prophotoia_user"),u({id:"",uid:"",email:"",credits:0,isLoggedIn:!1}),e("login")};return q.jsxs("div",{className:"min-h-screen bg-slate-50",children:[q.jsx("header",{className:"w-full bg-white border-b border-slate-200",children:q.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-3 flex items-center justify-between",children:[q.jsxs("div",{children:[q.jsx("div",{className:"font-black text-slate-900",children:"ProPhoto IA"}),q.jsxs("div",{className:"text-xs text-slate-500",children:["Créditos: ",Number((o==null?void 0:o.credits)??0)]})]}),o!=null&&o.isLoggedIn?q.jsxs("div",{className:"flex gap-2",children:[q.jsx("button",{className:"px-3 py-2 rounded-xl text-sm font-bold bg-slate-100",onClick:()=>e("payments"),children:"Planos"}),q.jsx("button",{className:"px-3 py-2 rounded-xl text-sm font-bold bg-slate-900 text-white",onClick:m,children:"Sair"})]}):null]})}),q.jsxs("main",{className:"max-w-5xl mx-auto px-4 py-6",children:[r==="login"&&q.jsx(vO,{onLogin:()=>{e("create")}}),r==="create"&&(o==null?void 0:o.isLoggedIn)&&q.jsx(EO,{user:o,onImageGenerated:f,onCreditError:()=>e("payments")}),r==="payments"&&(o==null?void 0:o.isLoggedIn)&&q.jsx(AO,{}),r==="result"&&(o==null?void 0:o.isLoggedIn)&&n&&q.jsx(SO,{imageUrl:n,onBack:()=>e("create")})]})]})},Xv=document.getElementById("root");Xv&&bA.createRoot(Xv).render(q.jsx(mA.StrictMode,{children:q.jsx(RO,{})}));
