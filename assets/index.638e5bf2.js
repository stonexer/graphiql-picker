var C0=Object.defineProperty,I0=Object.defineProperties;var D0=Object.getOwnPropertyDescriptors;var dd=Object.getOwnPropertySymbols;var A0=Object.prototype.hasOwnProperty,O0=Object.prototype.propertyIsEnumerable;var pd=(e,n,t)=>n in e?C0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ue=(e,n)=>{for(var t in n||(n={}))A0.call(n,t)&&pd(e,t,n[t]);if(dd)for(var t of dd(n))O0.call(n,t)&&pd(e,t,n[t]);return e},Pe=(e,n)=>I0(e,D0(n));const L0=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};L0();var Ooe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function F0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function R0(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var lc={},Du={exports:{}},Tn={},En={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),P0=Symbol.for("react.portal"),M0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),U0=Symbol.for("react.forward_ref"),z0=Symbol.for("react.suspense"),B0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),hd=Symbol.iterator;function H0(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var Mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,$m={};function hi(e,n,t){this.props=e,this.context=n,this.refs=$m,this.updater=t||Mm}hi.prototype.isReactComponent={};hi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};hi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jm(){}jm.prototype=hi.prototype;function Au(e,n,t){this.props=e,this.context=n,this.refs=$m,this.updater=t||Mm}var Ou=Au.prototype=new jm;Ou.constructor=Au;qm(Ou,hi.prototype);Ou.isPureReactComponent=!0;var md=Array.isArray,Vm=Object.prototype.hasOwnProperty,Lu={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Vm.call(n,r)&&!Um.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Do,type:e,key:o,ref:s,props:i,_owner:Lu.current}}function G0(e,n){return{$$typeof:Do,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Do}function W0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var gd=/\/+/g;function hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):n.toString(36)}function bs(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Do:case P0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+hl(s,0):r,md(i)?(t="",e!=null&&(t=e.replace(gd,"$&/")+"/"),bs(i,n,t,"",function(l){return l})):i!=null&&(Fu(i)&&(i=G0(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(gd,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",md(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+hl(o,a);s+=bs(o,n,t,c,i)}else if(c=H0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+hl(o,a++),s+=bs(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Qo(e,n,t){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Y0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var an={current:null},Ts={transition:null},J0={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:Lu};se.Children={map:Qo,forEach:function(e,n,t){Qo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Qo(e,function(){n++}),n},toArray:function(e){return Qo(e,function(n){return n})||[]},only:function(e){if(!Fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=hi;se.Fragment=M0;se.Profiler=$0;se.PureComponent=Au;se.StrictMode=q0;se.Suspense=z0;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;se.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qm({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Lu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in n)Vm.call(n,c)&&!Um.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&a!==void 0?a[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Do,type:e.type,key:i,ref:o,props:r,_owner:s}};se.createContext=function(e){return e={$$typeof:V0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};se.createElement=zm;se.createFactory=function(e){var n=zm.bind(null,e);return n.type=e,n};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:U0,render:e}};se.isValidElement=Fu;se.lazy=function(e){return{$$typeof:Q0,_payload:{_status:-1,_result:e},_init:Y0}};se.memo=function(e,n){return{$$typeof:B0,type:e,compare:n===void 0?null:n}};se.startTransition=function(e){var n=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=n}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,n){return an.current.useCallback(e,n)};se.useContext=function(e){return an.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return an.current.useDeferredValue(e)};se.useEffect=function(e,n){return an.current.useEffect(e,n)};se.useId=function(){return an.current.useId()};se.useImperativeHandle=function(e,n,t){return an.current.useImperativeHandle(e,n,t)};se.useInsertionEffect=function(e,n){return an.current.useInsertionEffect(e,n)};se.useLayoutEffect=function(e,n){return an.current.useLayoutEffect(e,n)};se.useMemo=function(e,n){return an.current.useMemo(e,n)};se.useReducer=function(e,n,t){return an.current.useReducer(e,n,t)};se.useRef=function(e){return an.current.useRef(e)};se.useState=function(e){return an.current.useState(e)};se.useSyncExternalStore=function(e,n,t){return an.current.useSyncExternalStore(e,n,t)};se.useTransition=function(){return an.current.useTransition()};se.version="18.0.0-fc46dba67-20220329";En.exports=se;var _=En.exports,Bm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,H){var B=R.length;R.push(H);e:for(;0<B;){var K=B-1>>>1,x=R[K];if(0<i(x,H))R[K]=H,R[B]=x,B=K;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],B=R.pop();if(B!==H){R[0]=B;e:for(var K=0,x=R.length,j=x>>>1;K<j;){var P=2*(K+1)-1,T=R[P],$=P+1,W=R[$];if(0>i(T,B))$<x&&0>i(W,T)?(R[K]=W,R[$]=B,K=$):(R[K]=T,R[P]=B,K=P);else if($<x&&0>i(W,B))R[K]=W,R[$]=B,K=$;else break e}}return H}function i(R,H){var B=R.sortIndex-H.sortIndex;return B!==0?B:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],l=[],u=1,f=null,p=3,h=!1,d=!1,E=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var H=t(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=R)r(l),H.sortIndex=H.expirationTime,n(c,H);else break;H=t(l)}}function S(R){if(E=!1,v(R),!d)if(t(c)!==null)d=!0,U(N);else{var H=t(l);H!==null&&ye(S,H.startTime-R)}}function N(R,H){d=!1,E&&(E=!1,g(M),M=-1),h=!0;var B=p;try{for(v(H),f=t(c);f!==null&&(!(f.expirationTime>H)||R&&!J());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var x=K(f.expirationTime<=H);H=e.unstable_now(),typeof x=="function"?f.callback=x:f===t(c)&&r(c),v(H)}else r(c);f=t(c)}if(f!==null)var j=!0;else{var P=t(l);P!==null&&ye(S,P.startTime-H),j=!1}return j}finally{f=null,p=B,h=!1}}var k=!1,A=null,M=-1,b=5,I=-1;function J(){return!(e.unstable_now()-I<b)}function G(){if(A!==null){var R=e.unstable_now();I=R;var H=!0;try{H=A(!0,R)}finally{H?ne():(k=!1,A=null)}}else k=!1}var ne;if(typeof m=="function")ne=function(){m(G)};else if(typeof MessageChannel!="undefined"){var F=new MessageChannel,z=F.port2;F.port1.onmessage=G,ne=function(){z.postMessage(null)}}else ne=function(){w(G,0)};function U(R){A=R,k||(k=!0,ne())}function ye(R,H){M=w(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){d||h||(d=!0,U(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var B=p;p=H;try{return R()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=p;p=R;try{return H()}finally{p=B}},e.unstable_scheduleCallback=function(R,H,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=B+x,R={id:u++,callback:H,priorityLevel:R,startTime:B,expirationTime:x,sortIndex:-1},B>K?(R.sortIndex=B,n(l,R),t(c)===null&&R===t(l)&&(E?(g(M),M=-1):E=!0,ye(S,B-K))):(R.sortIndex=x,n(c,R),d||h||(d=!0,U(N))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var H=p;return function(){var B=p;p=H;try{return R.apply(this,arguments)}finally{p=B}}}})(Qm);Bm.exports=Qm;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=En.exports,kn=Bm.exports;function q(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,no={};function Ir(e,n){ii(e,n),ii(e+"Capture",n)}function ii(e,n){for(no[e]=n,e=0;e<n.length;e++)Gm.add(n[e])}var xt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),cc=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},yd={};function X0(e){return cc.call(yd,e)?!0:cc.call(vd,e)?!1:Z0.test(e)?yd[e]=!0:(vd[e]=!0,!1)}function K0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function e_(e,n,t,r){if(n===null||typeof n=="undefined"||K0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ln(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];We[n]=new ln(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ru,Pu);We[n]=new ln(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ru,Pu);We[n]=new ln(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ru,Pu);We[n]=new ln(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new ln(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mu(e,n,t,r){var i=We.hasOwnProperty(n)?We[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(e_(n,t,i,r)&&(t=null),r||i===null?X0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ot=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),qu=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),_d=Symbol.iterator;function bi(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,ml;function Ri(e){if(ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ml=n&&n[1]||""}return`
`+ml+e}var gl=!1;function vl(e,n){if(!e||gl)return"";gl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(l){var r=l}Reflect.construct(e,[],n)}else{try{n.call()}catch(l){r=l}e.call(n.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ri(e):""}function n_(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function pc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Mr:return"Portal";case uc:return"Profiler";case qu:return"StrictMode";case fc:return"Suspense";case dc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ym:return(e.displayName||"Context")+".Consumer";case Wm:return(e._context.displayName||"Context")+".Provider";case $u:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return n=e.displayName||null,n!==null?n:pc(e.type)||"Memo";case Rt:n=e._payload,e=e._init;try{return pc(e(n))}catch{}}return null}function t_(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(n);case 8:return n===qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function r_(e){var n=Zm(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Go(e){e._valueTracker||(e._valueTracker=r_(e))}function Xm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Zm(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function js(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function hc(e,n){var t=n.checked;return Ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function Ed(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Jt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Km(e,n){n=n.checked,n!=null&&Mu(e,"checked",n,!1)}function mc(e,n){Km(e,n);var t=Jt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?gc(e,n.type,t):n.hasOwnProperty("defaultValue")&&gc(e,n.type,Jt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Sd(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function gc(e,n,t){(n!=="number"||js(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pi=Array.isArray;function Yr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Jt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function vc(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wd(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(q(92));if(Pi(t)){if(1<t.length)throw Error(q(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Jt(t)}}function eg(e,n){var t=Jt(n.value),r=Jt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function kd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ng(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ng(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wo,tg=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function to(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(e){i_.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zi[n]=zi[e]})});function rg(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zi.hasOwnProperty(e)&&zi[e]?(""+n).trim():n+"px"}function ig(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=rg(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var o_=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(e,n){if(n){if(o_[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(q(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(q(61))}if(n.style!=null&&typeof n.style!="object")throw Error(q(62))}}function Ec(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wc=null,Jr=null,Zr=null;function bd(e){if(e=Lo(e)){if(typeof wc!="function")throw Error(q(280));var n=e.stateNode;n&&(n=Fa(n),wc(e.stateNode,e.type,n))}}function og(e){Jr?Zr?Zr.push(e):Zr=[e]:Jr=e}function sg(){if(Jr){var e=Jr,n=Zr;if(Zr=Jr=null,bd(e),n)for(e=0;e<n.length;e++)bd(n[e])}}function ag(e,n){return e(n)}function lg(){}var yl=!1;function cg(e,n,t){if(yl)return e(n,t);yl=!0;try{return ag(e,n,t)}finally{yl=!1,(Jr!==null||Zr!==null)&&(lg(),sg())}}function ro(e,n){var t=e.stateNode;if(t===null)return null;var r=Fa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(q(231,n,typeof t));return t}var kc=!1;if(xt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{kc=!1}function s_(e,n,t,r,i,o,s,a,c){var l=Array.prototype.slice.call(arguments,3);try{n.apply(t,l)}catch(u){this.onError(u)}}var Bi=!1,Vs=null,Us=!1,bc=null,a_={onError:function(e){Bi=!0,Vs=e}};function l_(e,n,t,r,i,o,s,a,c){Bi=!1,Vs=null,s_.apply(a_,arguments)}function c_(e,n,t,r,i,o,s,a,c){if(l_.apply(this,arguments),Bi){if(Bi){var l=Vs;Bi=!1,Vs=null}else throw Error(q(198));Us||(Us=!0,bc=l)}}function Dr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ug(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Td(e){if(Dr(e)!==e)throw Error(q(188))}function u_(e){var n=e.alternate;if(!n){if(n=Dr(e),n===null)throw Error(q(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Td(i),e;if(o===r)return Td(i),n;o=o.sibling}throw Error(q(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(q(189))}}if(t.alternate!==r)throw Error(q(190))}if(t.tag!==3)throw Error(q(188));return t.stateNode.current===t?e:n}function fg(e){return e=u_(e),e!==null?dg(e):null}function dg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=dg(e);if(n!==null)return n;e=e.sibling}return null}var pg=kn.unstable_scheduleCallback,xd=kn.unstable_cancelCallback,f_=kn.unstable_shouldYield,d_=kn.unstable_requestPaint,Fe=kn.unstable_now,p_=kn.unstable_getCurrentPriorityLevel,Uu=kn.unstable_ImmediatePriority,hg=kn.unstable_UserBlockingPriority,zs=kn.unstable_NormalPriority,h_=kn.unstable_LowPriority,mg=kn.unstable_IdlePriority,Da=null,rt=null;function m_(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:y_,g_=Math.log,v_=Math.LN2;function y_(e){return e>>>=0,e===0?32:31-(g_(e)/v_|0)|0}var Yo=64,Jo=4194304;function Mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=Mi(a):(o&=s,o!==0&&(r=Mi(o)))}else s=t&~i,s!==0?r=Mi(s):o!==0&&(r=Mi(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Wn(n),i=1<<t,r|=e[t],n&=~i;return r}function __(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E_(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Wn(o),a=1<<s,c=i[s];c===-1?((a&t)===0||(a&r)!==0)&&(i[s]=__(a,n)):c<=n&&(e.expiredLanes|=a),o&=~a}}function Tc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ao(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Wn(n),e[n]=t}function S_(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Wn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function zu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Wn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var he=0;function gg(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vg,Bu,yg,_g,Eg,xc=!1,Zo=[],Ut=null,zt=null,Bt=null,io=new Map,oo=new Map,qt=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nd(e,n){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(n.pointerId)}}function xi(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Lo(n),n!==null&&Bu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function k_(e,n,t,r,i){switch(n){case"focusin":return Ut=xi(Ut,e,n,t,r,i),!0;case"dragenter":return zt=xi(zt,e,n,t,r,i),!0;case"mouseover":return Bt=xi(Bt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return io.set(o,xi(io.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oo.set(o,xi(oo.get(o)||null,e,n,t,r,i)),!0}return!1}function Sg(e){var n=lr(e.target);if(n!==null){var t=Dr(n);if(t!==null){if(n=t.tag,n===13){if(n=ug(t),n!==null){e.blockedOn=n,Eg(e.priority,function(){yg(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Nc(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Sc=r,t.target.dispatchEvent(r),Sc=null}else return n=Lo(t),n!==null&&Bu(n),e.blockedOn=t,!1;n.shift()}return!0}function Cd(e,n,t){xs(e)&&t.delete(n)}function b_(){xc=!1,Ut!==null&&xs(Ut)&&(Ut=null),zt!==null&&xs(zt)&&(zt=null),Bt!==null&&xs(Bt)&&(Bt=null),io.forEach(Cd),oo.forEach(Cd)}function Ni(e,n){e.blockedOn===n&&(e.blockedOn=null,xc||(xc=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,b_)))}function so(e){function n(i){return Ni(i,e)}if(0<Zo.length){Ni(Zo[0],e);for(var t=1;t<Zo.length;t++){var r=Zo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Ni(Ut,e),zt!==null&&Ni(zt,e),Bt!==null&&Ni(Bt,e),io.forEach(n),oo.forEach(n),t=0;t<qt.length;t++)r=qt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(t=qt[0],t.blockedOn===null);)Sg(t),t.blockedOn===null&&qt.shift()}var Xr=Ot.ReactCurrentBatchConfig;function T_(e,n,t,r){var i=he,o=Xr.transition;Xr.transition=null;try{he=1,Qu(e,n,t,r)}finally{he=i,Xr.transition=o}}function x_(e,n,t,r){var i=he,o=Xr.transition;Xr.transition=null;try{he=4,Qu(e,n,t,r)}finally{he=i,Xr.transition=o}}function Qu(e,n,t,r){var i=Nc(e,n,t,r);if(i===null)Il(e,n,r,Qs,t),Nd(e,r);else if(k_(i,e,n,t,r))r.stopPropagation();else if(Nd(e,r),n&4&&-1<w_.indexOf(e)){for(;i!==null;){var o=Lo(i);if(o!==null&&vg(o),o=Nc(e,n,t,r),o===null&&Il(e,n,r,Qs,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Il(e,n,r,null,t)}var Qs=null;function Nc(e,n,t,r){if(Qs=null,e=Vu(r),e=lr(e),e!==null)if(n=Dr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ug(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qs=e,null}function wg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p_()){case Uu:return 1;case hg:return 4;case zs:case h_:return 16;case mg:return 536870912;default:return 16}default:return 16}}var jt=null,Hu=null,Ns=null;function kg(){if(Ns)return Ns;var e,n=Hu,t=n.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Ns=i.slice(e,1<r?1-r:void 0)}function Cs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Id(){return!1}function xn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xo:Id,this.isPropagationStopped=Id,this}return Ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=xn(mi),Oo=Ie({},mi,{view:0,detail:0}),N_=xn(Oo),El,Sl,Ci,Aa=Ie({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(El=e.screenX-Ci.screenX,Sl=e.screenY-Ci.screenY):Sl=El=0,Ci=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Dd=xn(Aa),C_=Ie({},Aa,{dataTransfer:0}),I_=xn(C_),D_=Ie({},Oo,{relatedTarget:0}),wl=xn(D_),A_=Ie({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=xn(A_),L_=Ie({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F_=xn(L_),R_=Ie({},mi,{data:0}),Ad=xn(R_),P_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=q_[e])?!!n[e]:!1}function Wu(){return $_}var j_=Ie({},Oo,{key:function(e){if(e.key){var n=P_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?M_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V_=xn(j_),U_=Ie({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=xn(U_),z_=Ie({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),B_=xn(z_),Q_=Ie({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=xn(Q_),G_=Ie({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W_=xn(G_),Y_=[9,13,27,32],Yu=xt&&"CompositionEvent"in window,Qi=null;xt&&"documentMode"in document&&(Qi=document.documentMode);var J_=xt&&"TextEvent"in window&&!Qi,bg=xt&&(!Yu||Qi&&8<Qi&&11>=Qi),Ld=String.fromCharCode(32),Fd=!1;function Tg(e,n){switch(e){case"keyup":return Y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function Z_(e,n){switch(e){case"compositionend":return xg(n);case"keypress":return n.which!==32?null:(Fd=!0,Ld);case"textInput":return e=n.data,e===Ld&&Fd?null:e;default:return null}}function X_(e,n){if($r)return e==="compositionend"||!Yu&&Tg(e,n)?(e=kg(),Ns=Hu=jt=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bg&&n.locale!=="ko"?null:n.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!K_[e.type]:n==="textarea"}function Ng(e,n,t,r){og(r),n=Hs(n,"onChange"),0<n.length&&(t=new Gu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Hi=null,ao=null;function eE(e){qg(e,0)}function Oa(e){var n=Ur(e);if(Xm(n))return e}function nE(e,n){if(e==="change")return n}var Cg=!1;if(xt){var kl;if(xt){var bl="oninput"in document;if(!bl){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),bl=typeof Pd.oninput=="function"}kl=bl}else kl=!1;Cg=kl&&(!document.documentMode||9<document.documentMode)}function Md(){Hi&&(Hi.detachEvent("onpropertychange",Ig),ao=Hi=null)}function Ig(e){if(e.propertyName==="value"&&Oa(ao)){var n=[];Ng(n,ao,e,Vu(e)),cg(eE,n)}}function tE(e,n,t){e==="focusin"?(Md(),Hi=n,ao=t,Hi.attachEvent("onpropertychange",Ig)):e==="focusout"&&Md()}function rE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(ao)}function iE(e,n){if(e==="click")return Oa(n)}function oE(e,n){if(e==="input"||e==="change")return Oa(n)}function sE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ot=typeof Object.is=="function"?Object.is:sE;function lo(e,n){if(ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!cc.call(n,i)||!ot(e[i],n[i]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,n){var t=qd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=qd(t)}}function Dg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ag(){for(var e=window,n=js();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=js(e.document)}return n}function Ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function aE(e){var n=Ag(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Dg(t.ownerDocument.documentElement,t)){if(r!==null&&Ju(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$d(t,o);var s=$d(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lE=xt&&"documentMode"in document&&11>=document.documentMode,jr=null,Cc=null,Gi=null,Ic=!1;function jd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ic||jr==null||jr!==js(r)||(r=jr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&lo(Gi,r)||(Gi=r,r=Hs(Cc,"onSelect"),0<r.length&&(n=new Gu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=jr)))}function Ko(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},Tl={},Og={};xt&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function La(e){if(Tl[e])return Tl[e];if(!Vr[e])return e;var n=Vr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Og)return Tl[e]=n[t];return e}var Lg=La("animationend"),Fg=La("animationiteration"),Rg=La("animationstart"),Pg=La("transitionend"),Mg=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,n){Mg.set(e,n),Ir(n,[e])}for(var xl=0;xl<Vd.length;xl++){var Nl=Vd[xl],cE=Nl.toLowerCase(),uE=Nl[0].toUpperCase()+Nl.slice(1);er(cE,"on"+uE)}er(Lg,"onAnimationEnd");er(Fg,"onAnimationIteration");er(Rg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Pg,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function Ud(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,c_(r,n,void 0,e),e.currentTarget=null}function qg(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,l=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Ud(i,a,l),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,l=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Ud(i,a,l),o=c}}}if(Us)throw e=bc,Us=!1,bc=null,e}function ke(e,n){var t=n[Lc];t===void 0&&(t=n[Lc]=new Set);var r=e+"__bubble";t.has(r)||($g(n,e,2,!1),t.add(r))}function Cl(e,n,t){var r=0;n&&(r|=4),$g(t,e,r,n)}var es="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[es]){e[es]=!0,Gm.forEach(function(t){t!=="selectionchange"&&(fE.has(t)||Cl(t,!1,e),Cl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[es]||(n[es]=!0,Cl("selectionchange",!1,n))}}function $g(e,n,t,r){switch(wg(n)){case 1:var i=T_;break;case 4:i=x_;break;default:i=Qu}t=i.bind(null,n,t,e),i=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Il(e,n,t,r,i){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=lr(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}cg(function(){var l=o,u=Vu(t),f=[];e:{var p=Mg.get(e);if(p!==void 0){var h=Gu,d=e;switch(e){case"keypress":if(Cs(t)===0)break e;case"keydown":case"keyup":h=V_;break;case"focusin":d="focus",h=wl;break;case"focusout":d="blur",h=wl;break;case"beforeblur":case"afterblur":h=wl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=B_;break;case Lg:case Fg:case Rg:h=O_;break;case Pg:h=H_;break;case"scroll":h=N_;break;case"wheel":h=W_;break;case"copy":case"cut":case"paste":h=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Od}var E=(n&4)!==0,w=!E&&e==="scroll",g=E?p!==null?p+"Capture":null:p;E=[];for(var m=l,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=ro(m,g),S!=null&&E.push(uo(m,S,v)))),w)break;m=m.return}0<E.length&&(p=new h(p,d,null,t,u),f.push({event:p,listeners:E}))}}if((n&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==Sc&&(d=t.relatedTarget||t.fromElement)&&(lr(d)||d[Nt]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(d=t.relatedTarget||t.toElement,h=l,d=d?lr(d):null,d!==null&&(w=Dr(d),d!==w||d.tag!==5&&d.tag!==6)&&(d=null)):(h=null,d=l),h!==d)){if(E=Dd,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Od,S="onPointerLeave",g="onPointerEnter",m="pointer"),w=h==null?p:Ur(h),v=d==null?p:Ur(d),p=new E(S,m+"leave",h,t,u),p.target=w,p.relatedTarget=v,S=null,lr(u)===l&&(E=new E(g,m+"enter",d,t,u),E.target=v,E.relatedTarget=w,S=E),w=S,h&&d)n:{for(E=h,g=d,m=0,v=E;v;v=Lr(v))m++;for(v=0,S=g;S;S=Lr(S))v++;for(;0<m-v;)E=Lr(E),m--;for(;0<v-m;)g=Lr(g),v--;for(;m--;){if(E===g||g!==null&&E===g.alternate)break n;E=Lr(E),g=Lr(g)}E=null}else E=null;h!==null&&zd(f,p,h,E,!1),d!==null&&w!==null&&zd(f,w,d,E,!0)}}e:{if(p=l?Ur(l):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var N=nE;else if(Rd(p))if(Cg)N=oE;else{N=rE;var k=tE}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=iE);if(N&&(N=N(e,l))){Ng(f,N,t,u);break e}k&&k(e,p,l),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&gc(p,"number",p.value)}switch(k=l?Ur(l):window,e){case"focusin":(Rd(k)||k.contentEditable==="true")&&(jr=k,Cc=l,Gi=null);break;case"focusout":Gi=Cc=jr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,jd(f,t,u);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":jd(f,t,u)}var A;if(Yu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $r?Tg(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(bg&&t.locale!=="ko"&&($r||M!=="onCompositionStart"?M==="onCompositionEnd"&&$r&&(A=kg()):(jt=u,Hu="value"in jt?jt.value:jt.textContent,$r=!0)),k=Hs(l,M),0<k.length&&(M=new Ad(M,e,null,t,u),f.push({event:M,listeners:k}),A?M.data=A:(A=xg(t),A!==null&&(M.data=A)))),(A=J_?Z_(e,t):X_(e,t))&&(l=Hs(l,"onBeforeInput"),0<l.length&&(u=new Ad("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:l}),u.data=A))}qg(f,n)})}function uo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hs(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ro(e,t),o!=null&&r.unshift(uo(e,o,i)),o=ro(e,n),o!=null&&r.push(uo(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zd(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,c=a.alternate,l=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&l!==null&&(a=l,i?(c=ro(t,o),c!=null&&s.unshift(uo(t,c,a))):i||(c=ro(t,o),c!=null&&s.push(uo(t,c,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var dE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(dE,`
`).replace(pE,"")}function ns(e,n,t){if(n=Bd(n),Bd(e)!==n&&t)throw Error(q(425))}function Gs(){}var Dc=null;function Ac(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,hE=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd!="undefined"?function(e){return Qd.resolve(null).then(e).catch(gE)}:Oc;function gE(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),so(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);so(n)}function Et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Hd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),nt="__reactFiber$"+gi,fo="__reactProps$"+gi,Nt="__reactContainer$"+gi,Lc="__reactEvents$"+gi,vE="__reactListeners$"+gi,yE="__reactHandles$"+gi;function lr(e){var n=e[nt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nt]||t[nt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Hd(e);e!==null;){if(t=e[nt])return t;e=Hd(e)}return n}e=t,t=e.parentNode}return null}function Lo(e){return e=e[nt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Fa(e){return e[fo]||null}var Fc=[],zr=-1;function nr(e){return{current:e}}function be(e){0>zr||(e.current=Fc[zr],Fc[zr]=null,zr--)}function Se(e,n){zr++,Fc[zr]=e.current,e.current=n}var Zt={},Ke=nr(Zt),dn=nr(!1),vr=Zt;function oi(e,n){var t=e.type.contextTypes;if(!t)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pn(e){return e=e.childContextTypes,e!=null}function Ws(){be(dn),be(Ke)}function Gd(e,n,t){if(Ke.current!==Zt)throw Error(q(168));Se(Ke,n),Se(dn,t)}function jg(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(q(108,t_(e)||"Unknown",i));return Ie({},t,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,vr=Ke.current,Se(Ke,e),Se(dn,dn.current),!0}function Wd(e,n,t){var r=e.stateNode;if(!r)throw Error(q(169));t?(e=jg(e,n,vr),r.__reactInternalMemoizedMergedChildContext=e,be(dn),be(Ke),Se(Ke,e)):be(dn),Se(dn,t)}var vt=null,Ra=!1,Al=!1;function Vg(e){vt===null?vt=[e]:vt.push(e)}function _E(e){Ra=!0,Vg(e)}function tr(){if(!Al&&vt!==null){Al=!0;var e=0,n=he;try{var t=vt;for(he=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}vt=null,Ra=!1}catch(i){throw vt!==null&&(vt=vt.slice(e+1)),pg(Uu,tr),i}finally{he=n,Al=!1}}return null}var EE=Ot.ReactCurrentBatchConfig;function Bn(e,n){if(e&&e.defaultProps){n=Ie({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Js=nr(null),Zs=null,Br=null,Zu=null;function Xu(){Zu=Br=Zs=null}function Ku(e){var n=Js.current;be(Js),e._currentValue=n}function Rc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Kr(e,n){Zs=e,Zu=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(_n=!0),e.firstContext=null)}function Pn(e){var n=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:n,next:null},Br===null){if(Zs===null)throw Error(q(308));Br=e,Zs.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return n}var tt=null,Pt=!1;function ef(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qt(e,n){var t=e.updateQueue;t!==null&&(t=t.shared,$e!==null&&(e.mode&1)!==0&&(le&2)===0?(e=t.interleaved,e===null?(n.next=n,tt===null?tt=[t]:tt.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n))}function Is(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zu(e,t)}}function Yd(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xs(e,n,t,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,l=c.next;c.next=null,s===null?o=l:s.next=l,s=c;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=l:a.next=l,u.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,u=l=c=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var d=e,E=a;switch(p=n,h=t,E.tag){case 1:if(d=E.payload,typeof d=="function"){f=d.call(h,f,p);break e}f=d;break e;case 3:d.flags=d.flags&-65537|128;case 0:if(d=E.payload,p=typeof d=="function"?d.call(h,f,p):d,p==null)break e;f=Ie({},f,p);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(l=u=h,c=f):u=u.next=h,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(c=f),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);ui|=s,e.lanes=s,e.memoizedState=f}}function Jd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var zg=new Hm.Component().refs;function Pc(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Ie({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=rn(),i=Gt(e),o=bt(r,i);o.payload=n,t!=null&&(o.callback=t),Qt(e,o),n=Fn(e,i,r),n!==null&&Is(n,e,i)},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=rn(),i=Gt(e),o=bt(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),Qt(e,o),n=Fn(e,i,r),n!==null&&Is(n,e,i)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=rn(),r=Gt(e),i=bt(t,r);i.tag=2,n!=null&&(i.callback=n),Qt(e,i),n=Fn(e,r,t),n!==null&&Is(n,e,r)}};function Zd(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!lo(t,r)||!lo(i,o):!0}function Bg(e,n,t){var r=!1,i=Zt,o=n.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(i=pn(n)?vr:Ke.current,r=n.contextTypes,o=(r=r!=null)?oi(e,i):Zt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Pa.enqueueReplaceState(n,n.state,null)}function Mc(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=zg,ef(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Pn(o):(o=pn(n)?vr:Ke.current,i.context=oi(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Pc(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Pa.enqueueReplaceState(i,i.state,null),Xs(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}var Qr=[],Hr=0,Ks=null,ea=0,Nn=[],Cn=0,yr=null,St=1,wt="";function sr(e,n){Qr[Hr++]=ea,Qr[Hr++]=Ks,Ks=e,ea=n}function Qg(e,n,t){Nn[Cn++]=St,Nn[Cn++]=wt,Nn[Cn++]=yr,yr=e;var r=St;e=wt;var i=32-Wn(r)-1;r&=~(1<<i),t+=1;var o=32-Wn(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,St=1<<32-Wn(n)+i|t<<i|r,wt=o+e}else St=1<<o|t<<i|r,wt=e}function nf(e){e.return!==null&&(sr(e,1),Qg(e,1,0))}function tf(e){for(;e===Ks;)Ks=Qr[--Hr],Qr[Hr]=null,ea=Qr[--Hr],Qr[Hr]=null;for(;e===yr;)yr=Nn[--Cn],Nn[Cn]=null,wt=Nn[--Cn],Nn[Cn]=null,St=Nn[--Cn],Nn[Cn]=null}var Sn=null,un=null,xe=!1,Qn=null;function Hg(e,n){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Kd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Sn=e,un=Et(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Sn=e,un=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=yr!==null?{id:St,overflow:wt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Sn=e,un=null,!0):!1;default:return!1}}function qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $c(e){if(xe){var n=un;if(n){var t=n;if(!Kd(e,n)){if(qc(e))throw Error(q(418));n=Et(t.nextSibling);var r=Sn;n&&Kd(e,n)?Hg(r,t):(e.flags=e.flags&-4097|2,xe=!1,Sn=e)}}else{if(qc(e))throw Error(q(418));e.flags=e.flags&-4097|2,xe=!1,Sn=e}}}function ep(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Sn=e}function Ii(e){if(e!==Sn)return!1;if(!xe)return ep(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ac(e.type,e.memoizedProps)),n&&(n=un)){if(qc(e)){for(e=un;e;)e=Et(e.nextSibling);throw Error(q(418))}for(;n;)Hg(e,n),n=Et(n.nextSibling)}if(ep(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){un=Et(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}un=null}}else un=Sn?Et(e.stateNode.nextSibling):null;return!0}function si(){un=Sn=null,xe=!1}function rf(e){Qn===null?Qn=[e]:Qn.push(e)}function Di(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(q(309));var r=t.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;a===zg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(q(284));if(!t._owner)throw Error(q(290,e))}return e}function ts(e,n){throw e=Object.prototype.toString.call(n),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function np(e){var n=e._init;return n(e._payload)}function Gg(e){function n(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Xt(g,m),g.index=0,g.sibling=null,g}function o(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,S){return m===null||m.tag!==6?(m=Ml(v,g.mode,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function c(g,m,v,S){var N=v.type;return N===qr?u(g,m,v.props.children,S,v.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rt&&np(N)===m.type)?(S=i(m,v.props),S.ref=Di(g,m,v),S.return=g,S):(S=Fs(v.type,v.key,v.props,null,g.mode,S),S.ref=Di(g,m,v),S.return=g,S)}function l(g,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ql(v,g.mode,S),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function u(g,m,v,S,N){return m===null||m.tag!==7?(m=mr(v,g.mode,S,N),m.return=g,m):(m=i(m,v),m.return=g,m)}function f(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ml(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ho:return v=Fs(m.type,m.key,m.props,null,g.mode,v),v.ref=Di(g,null,m),v.return=g,v;case Mr:return m=ql(m,g.mode,v),m.return=g,m;case Rt:var S=m._init;return f(g,S(m._payload),v)}if(Pi(m)||bi(m))return m=mr(m,g.mode,v,null),m.return=g,m;ts(g,m)}return null}function p(g,m,v,S){var N=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(g,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:return v.key===N?c(g,m,v,S):null;case Mr:return v.key===N?l(g,m,v,S):null;case Rt:return N=v._init,p(g,m,N(v._payload),S)}if(Pi(v)||bi(v))return N!==null?null:u(g,m,v,S,null);ts(g,v)}return null}function h(g,m,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(m,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:return g=g.get(S.key===null?v:S.key)||null,c(m,g,S,N);case Mr:return g=g.get(S.key===null?v:S.key)||null,l(m,g,S,N);case Rt:var k=S._init;return h(g,m,v,k(S._payload),N)}if(Pi(S)||bi(S))return g=g.get(v)||null,u(m,g,S,N,null);ts(m,S)}return null}function d(g,m,v,S){for(var N=null,k=null,A=m,M=m=0,b=null;A!==null&&M<v.length;M++){A.index>M?(b=A,A=null):b=A.sibling;var I=p(g,A,v[M],S);if(I===null){A===null&&(A=b);break}e&&A&&I.alternate===null&&n(g,A),m=o(I,m,M),k===null?N=I:k.sibling=I,k=I,A=b}if(M===v.length)return t(g,A),xe&&sr(g,M),N;if(A===null){for(;M<v.length;M++)A=f(g,v[M],S),A!==null&&(m=o(A,m,M),k===null?N=A:k.sibling=A,k=A);return xe&&sr(g,M),N}for(A=r(g,A);M<v.length;M++)b=h(A,g,M,v[M],S),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?M:b.key),m=o(b,m,M),k===null?N=b:k.sibling=b,k=b);return e&&A.forEach(function(J){return n(g,J)}),xe&&sr(g,M),N}function E(g,m,v,S){var N=bi(v);if(typeof N!="function")throw Error(q(150));if(v=N.call(v),v==null)throw Error(q(151));for(var k=N=null,A=m,M=m=0,b=null,I=v.next();A!==null&&!I.done;M++,I=v.next()){A.index>M?(b=A,A=null):b=A.sibling;var J=p(g,A,I.value,S);if(J===null){A===null&&(A=b);break}e&&A&&J.alternate===null&&n(g,A),m=o(J,m,M),k===null?N=J:k.sibling=J,k=J,A=b}if(I.done)return t(g,A),xe&&sr(g,M),N;if(A===null){for(;!I.done;M++,I=v.next())I=f(g,I.value,S),I!==null&&(m=o(I,m,M),k===null?N=I:k.sibling=I,k=I);return xe&&sr(g,M),N}for(A=r(g,A);!I.done;M++,I=v.next())I=h(A,g,M,I.value,S),I!==null&&(e&&I.alternate!==null&&A.delete(I.key===null?M:I.key),m=o(I,m,M),k===null?N=I:k.sibling=I,k=I);return e&&A.forEach(function(G){return n(g,G)}),xe&&sr(g,M),N}function w(g,m,v,S){if(typeof v=="object"&&v!==null&&v.type===qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:e:{for(var N=v.key,k=m;k!==null;){if(k.key===N){if(N=v.type,N===qr){if(k.tag===7){t(g,k.sibling),m=i(k,v.props.children),m.return=g,g=m;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rt&&np(N)===k.type){t(g,k.sibling),m=i(k,v.props),m.ref=Di(g,k,v),m.return=g,g=m;break e}t(g,k);break}else n(g,k);k=k.sibling}v.type===qr?(m=mr(v.props.children,g.mode,S,v.key),m.return=g,g=m):(S=Fs(v.type,v.key,v.props,null,g.mode,S),S.ref=Di(g,m,v),S.return=g,g=S)}return s(g);case Mr:e:{for(k=v.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){t(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=ql(v,g.mode,S),m.return=g,g=m}return s(g);case Rt:return k=v._init,w(g,m,k(v._payload),S)}if(Pi(v))return d(g,m,v,S);if(bi(v))return E(g,m,v,S);ts(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(t(g,m.sibling),m=i(m,v),m.return=g,g=m):(t(g,m),m=Ml(v,g.mode,S),m.return=g,g=m),s(g)):t(g,m)}return w}var ai=Gg(!0),Wg=Gg(!1),Fo={},it=nr(Fo),po=nr(Fo),ho=nr(Fo);function cr(e){if(e===Fo)throw Error(q(174));return e}function of(e,n){switch(Se(ho,n),Se(po,e),Se(it,Fo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:yc(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=yc(n,e)}be(it),Se(it,n)}function li(){be(it),be(po),be(ho)}function Yg(e){cr(ho.current);var n=cr(it.current),t=yc(n,e.type);n!==t&&(Se(po,e),Se(it,t))}function sf(e){po.current===e&&(be(it),be(po))}var Ce=nr(0);function na(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ol=[];function af(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Ds=Ot.ReactCurrentDispatcher,On=Ot.ReactCurrentBatchConfig,ci=0,De=null,Ze=null,Ue=null,ta=!1,Wi=!1,mo=0,SE=0;function Ye(){throw Error(q(321))}function lf(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ot(e[t],n[t]))return!1;return!0}function cf(e,n,t,r,i,o){if(ci=o,De=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ds.current=e===null||e.memoizedState===null?TE:xE,e=t(r,i),Wi){o=0;do{if(Wi=!1,mo=0,25<=o)throw Error(q(301));o+=1,Ue=Ze=null,n.updateQueue=null,Ds.current=NE,e=t(r,i)}while(Wi)}if(Ds.current=ra,n=Ze!==null&&Ze.next!==null,ci=0,Ue=Ze=De=null,ta=!1,n)throw Error(q(300));return e}function uf(){var e=mo!==0;return mo=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function ct(){if(Ze===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=Ue===null?De.memoizedState:Ue.next;if(n!==null)Ue=n,Ze=e;else{if(e===null)throw Error(q(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function pr(e,n){return typeof n=="function"?n(e):n}function rs(e){var n=ct(),t=n.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var r=Ze,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,l=o;do{var u=l.lane;if((ci&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var f={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(a=c=f,s=r):c=c.next=f,De.lanes|=u,ui|=u}l=l.next}while(l!==null&&l!==o);c===null?s=r:c.next=a,ot(r,n.memoizedState)||(_n=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,De.lanes|=o,ui|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function is(e){var n=ct(),t=n.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ot(o,n.memoizedState)||(_n=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Jg(){}function Zg(e,n){var t=De,r=ct(),i=n(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,_n=!0),r=r.queue,vo(ev.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,go(9,Kg.bind(null,t,r,i,n),void 0,null),$e===null)throw Error(q(349));(ci&30)!==0||Xg(t,n,i)}return i}function Xg(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Kg(e,n,t,r){n.value=t,n.getSnapshot=r,nv(n)&&Fn(e,1,-1)}function ev(e,n,t){return t(function(){nv(n)&&Fn(e,1,-1)})}function nv(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ot(e,t)}catch{return!0}}function Ll(e){var n=gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},n.queue=e,e=e.dispatch=bE.bind(null,De,e),[n.memoizedState,e]}function go(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tv(){return ct().memoizedState}function As(e,n,t,r){var i=gt();De.flags|=e,i.memoizedState=go(1|n,t,void 0,r===void 0?null:r)}function Ma(e,n,t,r){var i=ct();r=r===void 0?null:r;var o=void 0;if(Ze!==null){var s=Ze.memoizedState;if(o=s.destroy,r!==null&&lf(r,s.deps)){i.memoizedState=go(n,t,o,r);return}}De.flags|=e,i.memoizedState=go(1|n,t,o,r)}function Fl(e,n){return As(8390656,8,e,n)}function vo(e,n){return Ma(2048,8,e,n)}function rv(e,n){return Ma(4,2,e,n)}function iv(e,n){return Ma(4,4,e,n)}function ov(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sv(e,n,t){return t=t!=null?t.concat([e]):null,Ma(4,4,ov.bind(null,n,e),t)}function ff(){}function av(e,n){var t=ct();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&lf(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function lv(e,n){var t=ct();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&lf(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function wE(e,n){var t=he;he=t!==0&&4>t?t:4,e(!0);var r=On.transition;On.transition={};try{e(!1),n()}finally{he=t,On.transition=r}}function cv(){return ct().memoizedState}function kE(e,n,t){var r=Gt(e);t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},uv(e)?fv(n,t):(dv(e,n,t),t=rn(),e=Fn(e,r,t),e!==null&&pv(e,n,r))}function bE(e,n,t){var r=Gt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(uv(e))fv(n,i);else{dv(e,n,i);var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,ot(a,s))return}catch{}finally{}t=rn(),e=Fn(e,r,t),e!==null&&pv(e,n,r)}}function uv(e){var n=e.alternate;return e===De||n!==null&&n===De}function fv(e,n){Wi=ta=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function dv(e,n,t){$e!==null&&(e.mode&1)!==0&&(le&2)===0?(e=n.interleaved,e===null?(t.next=t,tt===null?tt=[n]:tt.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t)}function pv(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zu(e,t)}}var ra={readContext:Pn,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},TE={readContext:Pn,useCallback:function(e,n){return gt().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:Fl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,As(4194308,4,ov.bind(null,n,e),t)},useLayoutEffect:function(e,n){return As(4194308,4,e,n)},useInsertionEffect:function(e,n){return As(4,2,e,n)},useMemo:function(e,n){var t=gt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kE.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var n=gt();return e={current:e},n.memoizedState=e},useState:Ll,useDebugValue:ff,useDeferredValue:function(e){var n=Ll(e),t=n[0],r=n[1];return Fl(function(){var i=On.transition;On.transition={};try{r(e)}finally{On.transition=i}},[e]),t},useTransition:function(){var e=Ll(!1),n=e[0];return e=wE.bind(null,e[1]),gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=De,i=gt();if(xe){if(t===void 0)throw Error(q(407));t=t()}else{if(t=n(),$e===null)throw Error(q(349));(ci&30)!==0||Xg(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Fl(ev.bind(null,r,o,e),[e]),r.flags|=2048,go(9,Kg.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=gt(),n=$e.identifierPrefix;if(xe){var t=wt,r=St;t=(r&~(1<<32-Wn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=mo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=SE++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xE={readContext:Pn,useCallback:av,useContext:Pn,useEffect:vo,useImperativeHandle:sv,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:rs,useRef:tv,useState:function(){return rs(pr)},useDebugValue:ff,useDeferredValue:function(e){var n=rs(pr),t=n[0],r=n[1];return vo(function(){var i=On.transition;On.transition={};try{r(e)}finally{On.transition=i}},[e]),t},useTransition:function(){var e=rs(pr)[0],n=ct().memoizedState;return[e,n]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:cv,unstable_isNewReconciler:!1},NE={readContext:Pn,useCallback:av,useContext:Pn,useEffect:vo,useImperativeHandle:sv,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:is,useRef:tv,useState:function(){return is(pr)},useDebugValue:ff,useDeferredValue:function(e){var n=is(pr),t=n[0],r=n[1];return vo(function(){var i=On.transition;On.transition={};try{r(e)}finally{On.transition=i}},[e]),t},useTransition:function(){var e=is(pr)[0],n=ct().memoizedState;return[e,n]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:cv,unstable_isNewReconciler:!1};function df(e,n){try{var t="",r=n;do t+=n_(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i}}function jc(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function hv(e,n,t){t=bt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){sa||(sa=!0,Yc=r),jc(e,n)},t}function mv(e,n,t){t=bt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){jc(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jc(e,n),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function tp(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new CE;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=UE.bind(null,e,n,t),n.then(e,e))}function rp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ip(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=bt(-1,1),n.tag=2,Qt(t,n))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var gv,Vc,vv,yv;gv=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Vc=function(){};vv=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,cr(it.current);var o=null;switch(t){case"input":i=hc(e,i),r=hc(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=vc(e,i),r=vc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gs)}_c(t,r);var s;t=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(no.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var c=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&c!==a&&(c!=null||a!=null))if(l==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(l,t)),t=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(no.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&ke("scroll",e),o||a===c||(o=[])):(o=o||[]).push(l,c))}t&&(o=o||[]).push("style",t);var l=o;(n.updateQueue=l)&&(n.flags|=4)}};yv=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ai(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function IE(e,n,t){var r=n.pendingProps;switch(tf(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return pn(n.type)&&Ws(),Je(n),null;case 3:return r=n.stateNode,li(),be(dn),be(Ke),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qn!==null&&(Xc(Qn),Qn=null))),Vc(e,n),Je(n),null;case 5:sf(n);var i=cr(ho.current);if(t=n.type,e!==null&&n.stateNode!=null)vv(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(q(166));return Je(n),null}if(e=cr(it.current),Ii(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[nt]=n,r[fo]=o,e=(n.mode&1)!==0,t){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)ke(qi[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Ed(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":wd(r,o),ke("invalid",r)}_c(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(ns(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(ns(r.textContent,a,e),i=["children",""+a]):no.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ke("scroll",r)}switch(t){case"input":Go(r),Sd(r,o,!0);break;case"textarea":Go(r),kd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gs)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ng(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[nt]=n,e[fo]=r,gv(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ec(t,r),t){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)ke(qi[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":Ed(e,r),i=hc(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ke("invalid",e);break;case"textarea":wd(e,r),i=vc(e,r),ke("invalid",e);break;default:i=r}_c(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?ig(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tg(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&to(e,c):typeof c=="number"&&to(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(no.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ke("scroll",e):c!=null&&Mu(e,o,c,s))}switch(t){case"input":Go(e),Sd(e,r,!1);break;case"textarea":Go(e),kd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Je(n),null;case 6:if(e&&n.stateNode!=null)yv(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(q(166));if(t=cr(ho.current),cr(it.current),Ii(n)){if(r=n.stateNode,t=n.memoizedProps,r[nt]=n,(o=r.nodeValue!==t)&&(e=Sn,e!==null))switch(s=(e.mode&1)!==0,e.tag){case 3:ns(r.nodeValue,t,s);break;case 5:e.memoizedProps[void 0]!==!0&&ns(r.nodeValue,t,s)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[nt]=n,n.stateNode=r}return Je(n),null;case 13:if(be(Ce),r=n.memoizedState,xe&&un!==null&&(n.mode&1)!==0&&(n.flags&128)===0){for(r=un;r;)r=Et(r.nextSibling);return si(),n.flags|=98560,n}if(r!==null&&r.dehydrated!==null){if(r=Ii(n),e===null){if(!r)throw Error(q(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(q(317));r[nt]=n}else si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;return Je(n),null}return Qn!==null&&(Xc(Qn),Qn=null),(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,t=!1,e===null?Ii(n):t=e.memoizedState!==null,r&&!t&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Ve===0&&(Ve=3):yf())),n.updateQueue!==null&&(n.flags|=4),Je(n),null);case 4:return li(),Vc(e,n),e===null&&co(n.stateNode.containerInfo),Je(n),null;case 10:return Ku(n.type._context),Je(n),null;case 17:return pn(n.type)&&Ws(),Je(n),null;case 19:if(be(Ce),o=n.memoizedState,o===null)return Je(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Ai(o,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=na(e),s!==null){for(n.flags|=128,Ai(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Se(Ce,Ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&Fe()>fi&&(n.flags|=128,r=!0,Ai(o,!1),n.lanes=4194304)}else{if(!r)if(e=na(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return Je(n),null}else 2*Fe()-o.renderingStartTime>fi&&t!==1073741824&&(n.flags|=128,r=!0,Ai(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Fe(),n.sibling=null,t=Ce.current,Se(Ce,r?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return vf(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(vn&1073741824)!==0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),null;case 24:return null;case 25:return null}throw Error(q(156,n.tag))}var DE=Ot.ReactCurrentOwner,_n=!1;function en(e,n,t,r){n.child=e===null?Wg(n,null,t,r):ai(n,e.child,t,r)}function op(e,n,t,r,i){t=t.render;var o=n.ref;return Kr(n,i),r=cf(e,n,t,r,o,i),t=uf(),e!==null&&!_n?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ct(e,n,i)):(xe&&t&&nf(n),n.flags|=1,en(e,n,r,i),n.child)}function sp(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!_f(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,_v(e,n,o,r,i)):(e=Fs(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:lo,t(s,r)&&e.ref===n.ref)return Ct(e,n,i)}return n.flags|=1,e=Xt(o,r),e.ref=n.ref,e.return=n,n.child=e}function _v(e,n,t,r,i){if(e!==null&&lo(e.memoizedProps,r)&&e.ref===n.ref)if(_n=!1,(e.lanes&i)!==0)(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ct(e,n,i);return Uc(e,n,t,r,i)}function Ev(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null},Se(Gr,vn),vn|=t;else if((t&1073741824)!==0)n.memoizedState={baseLanes:0,cachePool:null},r=o!==null?o.baseLanes:t,Se(Gr,vn),vn|=r;else return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null},n.updateQueue=null,Se(Gr,vn),vn|=e,null;else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Se(Gr,vn),vn|=r;return en(e,n,i,t),n.child}function Sv(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Uc(e,n,t,r,i){var o=pn(t)?vr:Ke.current;return o=oi(n,o),Kr(n,i),t=cf(e,n,t,r,o,i),r=uf(),e!==null&&!_n?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ct(e,n,i)):(xe&&r&&nf(n),n.flags|=1,en(e,n,t,i),n.child)}function ap(e,n,t,r,i){if(pn(t)){var o=!0;Ys(n)}else o=!1;if(Kr(n,i),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),Bg(n,t,r),Mc(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var c=s.context,l=t.contextType;typeof l=="object"&&l!==null?l=Pn(l):(l=pn(t)?vr:Ke.current,l=oi(n,l));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==l)&&Xd(n,s,r,l),Pt=!1;var p=n.memoizedState;s.state=p,Xs(n,r,s,i),c=n.memoizedState,a!==r||p!==c||dn.current||Pt?(typeof u=="function"&&(Pc(n,t,u,r),c=n.memoizedState),(a=Pt||Zd(n,t,a,r,p,c,l))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),s.props=r,s.state=c,s.context=l,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Ug(e,n),a=n.memoizedProps,l=n.type===n.elementType?a:Bn(n.type,a),s.props=l,f=n.pendingProps,p=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Pn(c):(c=pn(t)?vr:Ke.current,c=oi(n,c));var h=t.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==c)&&Xd(n,s,r,c),Pt=!1,p=n.memoizedState,s.state=p,Xs(n,r,s,i);var d=n.memoizedState;a!==f||p!==d||dn.current||Pt?(typeof h=="function"&&(Pc(n,t,h,r),d=n.memoizedState),(l=Pt||Zd(n,t,l,r,p,d,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,d,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,d,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=c,r=l):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return zc(e,n,t,r,o,i)}function zc(e,n,t,r,i,o){Sv(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Wd(n,t,!1),Ct(e,n,o);r=n.stateNode,DE.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=ai(n,e.child,null,o),n.child=ai(n,null,a,o)):en(e,n,a,o),n.memoizedState=r.state,i&&Wd(n,t,!0),n.child}function wv(e){var n=e.stateNode;n.pendingContext?Gd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gd(e,n.context,!1),of(e,n.containerInfo)}function lp(e,n,t,r,i){return si(),rf(i),n.flags|=256,en(e,n,t,r),n.child}var os={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null}}function kv(e,n,t){var r=n.pendingProps,i=Ce.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Ce,i&1),e===null)return $c(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ca(i,r,0,null),e=mr(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ss(t),n.memoizedState=os,e):Bc(n,i));if(i=e.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(s)return n.flags&256?(n.flags&=-257,as(e,n,t,Error(q(422)))):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=ca({mode:"visible",children:r.children},i,0,null),o=mr(o,i,t,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&ai(n,e.child,null,t),n.child.memoizedState=ss(t),n.memoizedState=os,o);if((n.mode&1)===0)n=as(e,n,t,null);else if(a.data==="$!")n=as(e,n,t,Error(q(419)));else if(r=(t&e.childLanes)!==0,_n||r){if(r=$e,r!==null){switch(t&-t){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}r=(o&(r.suspendedLanes|t))!==0?0:o,r!==0&&r!==i.retryLane&&(i.retryLane=r,Fn(e,r,-1))}yf(),n=as(e,n,t,Error(q(421)))}else a.data==="$?"?(n.flags|=128,n.child=e.child,n=zE.bind(null,e),a._reactRetry=n,n=null):(t=i.treeContext,un=Et(a.nextSibling),Sn=n,xe=!0,Qn=null,t!==null&&(Nn[Cn++]=St,Nn[Cn++]=wt,Nn[Cn++]=yr,St=t.id,wt=t.overflow,yr=n),n=Bc(n,n.pendingProps.children),n.flags|=4096);return n}return o?(r=up(e,n,r.children,r.fallback,t),o=n.child,i=e.child.memoizedState,o.memoizedState=i===null?ss(t):{baseLanes:i.baseLanes|t,cachePool:null},o.childLanes=e.childLanes&~t,n.memoizedState=os,r):(t=cp(e,n,r.children,t),n.memoizedState=null,t)}return o?(r=up(e,n,r.children,r.fallback,t),o=n.child,i=e.child.memoizedState,o.memoizedState=i===null?ss(t):{baseLanes:i.baseLanes|t,cachePool:null},o.childLanes=e.childLanes&~t,n.memoizedState=os,r):(t=cp(e,n,r.children,t),n.memoizedState=null,t)}function Bc(e,n){return n=ca({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function cp(e,n,t,r){var i=e.child;return e=i.sibling,t=Xt(i,{mode:"visible",children:t}),(n.mode&1)===0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t}function up(e,n,t,r,i){var o=n.mode;e=e.child;var s=e.sibling,a={mode:"hidden",children:t};return(o&1)===0&&n.child!==e?(t=n.child,t.childLanes=0,t.pendingProps=a,n.deletions=null):(t=Xt(e,a),t.subtreeFlags=e.subtreeFlags&14680064),s!==null?r=Xt(s,r):(r=mr(r,o,i,null),r.flags|=2),r.return=n,t.return=n,t.sibling=r,n.child=t,r}function as(e,n,t,r){return r!==null&&rf(r),ai(n,e.child,null,t),e=Bc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fp(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rc(e.return,n,t)}function Rl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function bv(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(en(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,t,n);else if(e.tag===19)fp(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&na(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Rl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&na(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Rl(n,!0,t,null,o);break;case"together":Rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ct(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ui|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(q(153));if(n.child!==null){for(e=n.child,t=Xt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function AE(e,n,t){switch(n.tag){case 3:wv(n),si();break;case 5:Yg(n);break;case 1:pn(n.type)&&Ys(n);break;case 4:of(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Se(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?kv(e,n,t):(Se(Ce,Ce.current&1),e=Ct(e,n,t),e!==null?e.sibling:null);Se(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return bv(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,Ev(e,n,t)}return Ct(e,n,t)}function OE(e,n){switch(tf(n),n.tag){case 1:return pn(n.type)&&Ws(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return li(),be(dn),be(Ke),af(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return sf(n),null;case 13:if(be(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(q(340));si()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return be(Ce),null;case 4:return li(),null;case 10:return Ku(n.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var ls=!1,ur=!1,LE=typeof WeakSet=="function"?WeakSet:Set,V=null;function ia(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){fn(e,n,r)}else t.current=null}function Qc(e,n,t){try{t()}catch(r){fn(e,n,r)}}var dp=!1;function FE(e,n){if(e=Ag(),Ju(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,c=-1,l=0,u=0,f=e,p=null;n:for(;;){for(var h;f!==t||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break n;if(p===t&&++l===i&&(a=s),p===o&&++u===r&&(c=s),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}t=a===-1||c===-1?null:{start:a,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Dc={focusedElem:e,selectionRange:t},V=n;V!==null;)if(n=V,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,V=e;else for(;V!==null;){n=V;try{var d=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var E=d.memoizedProps,w=d.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?E:Bn(n.type,E),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=n.stateNode.containerInfo;if(v.nodeType===1)v.textContent="";else if(v.nodeType===9){var S=v.body;S!=null&&(S.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(N){fn(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,V=e;break}V=n.return}return d=dp,dp=!1,d}function yo(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Qc(n,t,o)}i=i.next}while(i!==r)}}function qa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Hc(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function pp(e,n,t){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 0:case 11:case 14:case 15:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&Qc(n,t,o),r=r.next}while(r!==e)}break;case 1:if(ia(n,t),e=n.stateNode,typeof e.componentWillUnmount=="function")try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(s){fn(n,t,s)}break;case 5:ia(n,t);break;case 4:Nv(e,n,t)}}function Tv(e){var n=e.alternate;n!==null&&(e.alternate=null,Tv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nt],delete n[fo],delete n[Lc],delete n[vE],delete n[yE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xv(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mp(e){e:{for(var n=e.return;n!==null;){if(xv(n))break e;n=n.return}throw Error(q(160))}var t=n;switch(t.tag){case 5:n=t.stateNode,t.flags&32&&(to(n,""),t.flags&=-33),t=hp(e),Wc(e,t,n);break;case 3:case 4:n=t.stateNode.containerInfo,t=hp(e),Gc(e,t,n);break;default:throw Error(q(161))}}function Gc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Gs));else if(r!==4&&(e=e.child,e!==null))for(Gc(e,n,t),e=e.sibling;e!==null;)Gc(e,n,t),e=e.sibling}function Wc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wc(e,n,t),e=e.sibling;e!==null;)Wc(e,n,t),e=e.sibling}function Nv(e,n,t){for(var r=n,i=!1,o,s;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(q(160));switch(o=i.stateNode,i.tag){case 5:s=!1;break e;case 3:o=o.containerInfo,s=!0;break e;case 4:o=o.containerInfo,s=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=e,c=r,l=t,u=c;;)if(pp(a,u,l),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===c)break e;for(;u.sibling===null;){if(u.return===null||u.return===c)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(a=o,c=r.stateNode,a.nodeType===8?a.parentNode.removeChild(c):a.removeChild(c)):o.removeChild(r.stateNode)}else if(r.tag===18)s?(a=o,c=r.stateNode,a.nodeType===8?Dl(a.parentNode,c):a.nodeType===1&&Dl(a,c),so(a)):Dl(o,r.stateNode);else if(r.tag===4){if(r.child!==null){o=r.stateNode.containerInfo,s=!0,r.child.return=r,r=r.child;continue}}else if(pp(e,r,t),r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Pl(e,n){switch(n.tag){case 0:case 11:case 14:case 15:yo(3,n,n.return),qa(3,n),yo(5,n,n.return);return;case 1:return;case 5:var t=n.stateNode;if(t!=null){var r=n.memoizedProps,i=e!==null?e.memoizedProps:r;e=n.type;var o=n.updateQueue;if(n.updateQueue=null,o!==null){for(e==="input"&&r.type==="radio"&&r.name!=null&&Km(t,r),Ec(e,i),n=Ec(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?ig(t,a):s==="dangerouslySetInnerHTML"?tg(t,a):s==="children"?to(t,a):Mu(t,s,a,n)}switch(e){case"input":mc(t,r);break;case"textarea":eg(t,r);break;case"select":e=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?Yr(t,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?Yr(t,!!r.multiple,r.defaultValue,!0):Yr(t,!!r.multiple,r.multiple?[]:"",!1))}t[fo]=r}}return;case 6:if(n.stateNode===null)throw Error(q(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:e!==null&&e.memoizedState.isDehydrated&&so(n.stateNode.containerInfo);return;case 12:return;case 13:gp(n);return;case 19:gp(n);return;case 17:return}throw Error(q(163))}function gp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new LE),n.forEach(function(r){var i=BE.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function RE(e,n){for(V=n;V!==null;){n=V;var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{Nv(e,i,n);var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(M){fn(i,n,M)}}if(t=n.child,(n.subtreeFlags&12854)!==0&&t!==null)t.return=n,V=t;else for(;V!==null;){n=V;try{var s=n.flags;if(s&32&&to(n.stateNode,""),s&512){var a=n.alternate;if(a!==null){var c=a.ref;c!==null&&(typeof c=="function"?c(null):c.current=null)}}if(s&8192)switch(n.tag){case 13:if(n.memoizedState!==null){var l=n.alternate;(l===null||l.memoizedState===null)&&(mf=Fe())}break;case 22:var u=n.memoizedState!==null,f=n.alternate,p=f!==null&&f.memoizedState!==null;t=n;e:{r=t,i=u;for(var h=null,d=r;;){if(d.tag===5){if(h===null){h=d;var E=d.stateNode;if(i){var w=E.style;typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"}else{var g=d.stateNode,m=d.memoizedProps.style,v=m!=null&&m.hasOwnProperty("display")?m.display:null;g.style.display=rg("display",v)}}}else if(d.tag===6)h===null&&(d.stateNode.nodeValue=i?"":d.memoizedProps);else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===r)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}if(u&&!p&&(t.mode&1)!==0){V=t;for(var S=t.child;S!==null;){for(t=V=S;V!==null;){r=V;var N=r.child;switch(r.tag){case 0:case 11:case 14:case 15:yo(4,r,r.return);break;case 1:ia(r,r.return);var k=r.stateNode;if(typeof k.componentWillUnmount=="function"){var A=r.return;try{k.props=r.memoizedProps,k.state=r.memoizedState,k.componentWillUnmount()}catch(M){fn(r,A,M)}}break;case 5:ia(r,r.return);break;case 22:if(r.memoizedState!==null){yp(t);continue}}N!==null?(N.return=r,V=N):yp(t)}S=S.sibling}}}switch(s&4102){case 2:mp(n),n.flags&=-3;break;case 6:mp(n),n.flags&=-3,Pl(n.alternate,n);break;case 4096:n.flags&=-4097;break;case 4100:n.flags&=-4097,Pl(n.alternate,n);break;case 4:Pl(n.alternate,n)}}catch(M){fn(n,n.return,M)}if(t=n.sibling,t!==null){t.return=n.return,V=t;break}V=n.return}}}function PE(e,n,t){V=e,Cv(e)}function Cv(e,n,t){for(var r=(e.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ls;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ur;a=ls;var l=ur;if(ls=s,(ur=c)&&!l)for(V=i;V!==null;)s=V,c=s.child,s.tag===22&&s.memoizedState!==null?_p(i):c!==null?(c.return=s,V=c):_p(i);for(;o!==null;)V=o,Cv(o),o=o.sibling;V=i,ls=a,ur=l}vp(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,V=o):vp(e)}}function vp(e){for(;V!==null;){var n=V;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ur||qa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ur)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Bn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Jd(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Jd(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var l=n.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&so(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(q(163))}ur||n.flags&512&&Hc(n)}catch(p){fn(n,n.return,p)}}if(n===e){V=null;break}if(t=n.sibling,t!==null){t.return=n.return,V=t;break}V=n.return}}function yp(e){for(;V!==null;){var n=V;if(n===e){V=null;break}var t=n.sibling;if(t!==null){t.return=n.return,V=t;break}V=n.return}}function _p(e){for(;V!==null;){var n=V;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{qa(4,n)}catch(c){fn(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){fn(n,i,c)}}var o=n.return;try{Hc(n)}catch(c){fn(n,o,c)}break;case 5:var s=n.return;try{Hc(n)}catch(c){fn(n,s,c)}}}catch(c){fn(n,n.return,c)}if(n===e){V=null;break}var a=n.sibling;if(a!==null){a.return=n.return,V=a;break}V=n.return}}var ME=Math.ceil,oa=Ot.ReactCurrentDispatcher,pf=Ot.ReactCurrentOwner,Ln=Ot.ReactCurrentBatchConfig,le=0,$e=null,qe=null,He=0,vn=0,Gr=nr(0),Ve=0,_o=null,ui=0,$a=0,hf=0,Yi=null,cn=null,mf=0,fi=1/0,sa=!1,Yc=null,Ht=null,cs=!1,Vt=null,aa=0,Ji=0,Jc=null,Os=-1,Ls=0;function rn(){return(le&6)!==0?Fe():Os!==-1?Os:Os=Fe()}function Gt(e){return(e.mode&1)===0?1:(le&2)!==0&&He!==0?He&-He:EE.transition!==null?(Ls===0&&(e=Yo,Yo<<=1,(Yo&4194240)===0&&(Yo=64),Ls=e),Ls):(e=he,e!==0||(e=window.event,e=e===void 0?16:wg(e.type)),e)}function Fn(e,n,t){if(50<Ji)throw Ji=0,Jc=null,Error(q(185));var r=ja(e,n);return r===null?null:(Ao(r,n,t),((le&2)===0||r!==$e)&&(r===$e&&((le&2)===0&&($a|=n),Ve===4&&$t(r,He)),hn(r,t),n===1&&le===0&&(e.mode&1)===0&&(fi=Fe()+500,Ra&&tr())),r)}function ja(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}function hn(e,n){var t=e.callbackNode;E_(e,n);var r=Bs(e,e===$e?He:0);if(r===0)t!==null&&xd(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xd(t),n===1)e.tag===0?_E(Ep.bind(null,e)):Vg(Ep.bind(null,e)),mE(function(){le===0&&tr()}),t=null;else{switch(gg(r)){case 1:t=Uu;break;case 4:t=hg;break;case 16:t=zs;break;case 536870912:t=mg;break;default:t=zs}t=Pv(t,Iv.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Iv(e,n){if(Os=-1,Ls=0,(le&6)!==0)throw Error(q(327));var t=e.callbackNode;if(ei()&&e.callbackNode!==t)return null;var r=Bs(e,e===$e?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=la(e,r);else{n=r;var i=le;le|=2;var o=Av();($e!==e||He!==n)&&(fi=Fe()+500,hr(e,n));do try{jE();break}catch(a){Dv(e,a)}while(1);Xu(),oa.current=o,le=i,qe!==null?n=0:($e=null,He=0,n=Ve)}if(n!==0){if(n===2&&(i=Tc(e),i!==0&&(r=i,n=Zc(e,i))),n===1)throw t=_o,hr(e,0),$t(e,r),hn(e,Fe()),t;if(n===6)$t(e,r);else{if(i=e.current.alternate,(r&30)===0&&!qE(i)&&(n=la(e,r),n===2&&(o=Tc(e),o!==0&&(r=o,n=Zc(e,o))),n===1))throw t=_o,hr(e,0),$t(e,r),hn(e,Fe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(q(345));case 2:ar(e,cn);break;case 3:if($t(e,r),(r&130023424)===r&&(n=mf+500-Fe(),10<n)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Oc(ar.bind(null,e,cn),n);break}ar(e,cn);break;case 4:if($t(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-Wn(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ME(r/1960))-r,10<r){e.timeoutHandle=Oc(ar.bind(null,e,cn),r);break}ar(e,cn);break;case 5:ar(e,cn);break;default:throw Error(q(329))}}}return hn(e,Fe()),e.callbackNode===t?Iv.bind(null,e):null}function Zc(e,n){var t=Yi;return e.current.memoizedState.isDehydrated&&(hr(e,n).flags|=256),e=la(e,n),e!==2&&(n=cn,cn=t,n!==null&&Xc(n)),e}function Xc(e){cn===null?cn=e:cn.push.apply(cn,e)}function qE(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $t(e,n){for(n&=~hf,n&=~$a,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Wn(n),r=1<<t;e[t]=-1,n&=~r}}function Ep(e){if((le&6)!==0)throw Error(q(327));ei();var n=Bs(e,0);if((n&1)===0)return hn(e,Fe()),null;var t=la(e,n);if(e.tag!==0&&t===2){var r=Tc(e);r!==0&&(n=r,t=Zc(e,r))}if(t===1)throw t=_o,hr(e,0),$t(e,n),hn(e,Fe()),t;if(t===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ar(e,cn),hn(e,Fe()),null}function gf(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(fi=Fe()+500,Ra&&tr())}}function _r(e){Vt!==null&&Vt.tag===0&&(le&6)===0&&ei();var n=le;le|=1;var t=Ln.transition,r=he;try{if(Ln.transition=null,he=1,e)return e()}finally{he=r,Ln.transition=t,le=n,(le&6)===0&&tr()}}function vf(){vn=Gr.current,be(Gr)}function hr(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hE(t)),qe!==null)for(t=qe.return;t!==null;){var r=t;switch(tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ws();break;case 3:li(),be(dn),be(Ke),af();break;case 5:sf(r);break;case 4:li();break;case 13:be(Ce);break;case 19:be(Ce);break;case 10:Ku(r.type._context);break;case 22:case 23:vf()}t=t.return}if($e=e,qe=e=Xt(e.current,null),He=vn=n,Ve=0,_o=null,hf=$a=ui=0,cn=Yi=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}tt=null}return e}function Dv(e,n){do{var t=qe;try{if(Xu(),Ds.current=ra,ta){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ta=!1}if(ci=0,Ue=Ze=De=null,Wi=!1,mo=0,pf.current=null,t===null||t.return===null){Ve=1,_o=n,qe=null;break}e:{var o=e,s=t.return,a=t,c=n;if(n=He,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=rp(s);if(h!==null){h.flags&=-257,ip(h,s,a,o,n),h.mode&1&&tp(o,l,n),n=h,c=l;var d=n.updateQueue;if(d===null){var E=new Set;E.add(c),n.updateQueue=E}else d.add(c);break e}else{if((n&1)===0){tp(o,l,n),yf();break e}c=Error(q(426))}}else if(xe&&a.mode&1){var w=rp(s);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),ip(w,s,a,o,n),rf(c);break e}}o=c,Ve!==4&&(Ve=2),Yi===null?Yi=[o]:Yi.push(o),c=df(c,a),a=s;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var g=hv(a,c,n);Yd(a,g);break e;case 1:o=c;var m=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ht===null||!Ht.has(v)))){a.flags|=65536,n&=-n,a.lanes|=n;var S=mv(a,o,n);Yd(a,S);break e}}a=a.return}while(a!==null)}Lv(t)}catch(N){n=N,qe===t&&t!==null&&(qe=t=t.return);continue}break}while(1)}function Av(){var e=oa.current;return oa.current=ra,e===null?ra:e}function yf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),$e===null||(ui&268435455)===0&&($a&268435455)===0||$t($e,He)}function la(e,n){var t=le;le|=2;var r=Av();$e===e&&He===n||hr(e,n);do try{$E();break}catch(i){Dv(e,i)}while(1);if(Xu(),le=t,oa.current=r,qe!==null)throw Error(q(261));return $e=null,He=0,Ve}function $E(){for(;qe!==null;)Ov(qe)}function jE(){for(;qe!==null&&!f_();)Ov(qe)}function Ov(e){var n=Rv(e.alternate,e,vn);e.memoizedProps=e.pendingProps,n===null?Lv(e):qe=n,pf.current=null}function Lv(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=IE(t,n,vn),t!==null){qe=t;return}}else{if(t=OE(t,n),t!==null){t.flags&=32767,qe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,qe=null;return}}if(n=n.sibling,n!==null){qe=n;return}qe=n=e}while(n!==null);Ve===0&&(Ve=5)}function ar(e,n){var t=he,r=Ln.transition;try{Ln.transition=null,he=1,VE(e,n,t)}finally{Ln.transition=r,he=t}return null}function VE(e,n,t){do ei();while(Vt!==null);if((le&6)!==0)throw Error(q(327));var r=e.finishedWork,i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(S_(e,o),e===$e&&(qe=$e=null,He=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||cs||(cs=!0,Pv(zs,function(){return ei(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=Ln.transition,Ln.transition=null;var s=he;he=1;var a=le;le|=4,pf.current=null,FE(e,r),RE(e,r),aE(Dc),Dc=null,e.current=r,PE(r),d_(),le=a,he=s,Ln.transition=o}else e.current=r;if(cs&&(cs=!1,Vt=e,aa=i),o=e.pendingLanes,o===0&&(Ht=null),m_(r.stateNode),hn(e,Fe()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)t(n[r]);if(sa)throw sa=!1,e=Yc,Yc=null,e;return(aa&1)!==0&&e.tag!==0&&ei(),o=e.pendingLanes,(o&1)!==0?e===Jc?Ji++:(Ji=0,Jc=e):Ji=0,tr(),null}function ei(){if(Vt!==null){var e=gg(aa),n=Ln.transition,t=he;try{if(Ln.transition=null,he=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,aa=0,(le&6)!==0)throw Error(q(331));var i=le;for(le|=4,V=e.current;V!==null;){var o=V,s=o.child;if((V.flags&16)!==0){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var l=a[c];for(V=l;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:yo(8,u,o)}var f=u.child;if(f!==null)f.return=u,V=f;else for(;V!==null;){u=V;var p=u.sibling,h=u.return;if(Tv(u),u===l){V=null;break}if(p!==null){p.return=h,V=p;break}V=h}}}var d=o.alternate;if(d!==null){var E=d.child;if(E!==null){d.child=null;do{var w=E.sibling;E.sibling=null,E=w}while(E!==null)}}V=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:yo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break e}V=o.return}}var m=e.current;for(V=m;V!==null;){s=V;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,V=v;else e:for(s=m;V!==null;){if(a=V,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(N){fn(a,a.return,N)}if(a===s){V=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,V=S;break e}V=a.return}}if(le=i,tr(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Da,e)}catch{}r=!0}return r}finally{he=t,Ln.transition=n}}return!1}function Sp(e,n,t){n=df(t,n),n=hv(e,n,1),Qt(e,n),n=rn(),e=ja(e,1),e!==null&&(Ao(e,1,n),hn(e,n))}function fn(e,n,t){if(e.tag===3)Sp(e,e,t);else for(;n!==null;){if(n.tag===3){Sp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=df(t,e),e=mv(n,e,1),Qt(n,e),e=rn(),n=ja(n,1),n!==null&&(Ao(n,1,e),hn(n,e));break}}n=n.return}}function UE(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=rn(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(He&t)===t&&(Ve===4||Ve===3&&(He&130023424)===He&&500>Fe()-mf?hr(e,0):hf|=t),hn(e,n)}function Fv(e,n){n===0&&((e.mode&1)===0?n=1:(n=Jo,Jo<<=1,(Jo&130023424)===0&&(Jo=4194304)));var t=rn();e=ja(e,n),e!==null&&(Ao(e,n,t),hn(e,t))}function zE(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fv(e,t)}function BE(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(n),Fv(e,t)}var Rv;Rv=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||dn.current)_n=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return _n=!1,AE(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,xe&&(n.flags&1048576)!==0&&Qg(n,ea,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps;var i=oi(n,Ke.current);Kr(n,t),i=cf(null,n,r,e,i,t);var o=uf();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pn(r)?(o=!0,Ys(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(n),i.updater=Pa,n.stateNode=i,i._reactInternals=n,Mc(n,r,e,t),n=zc(null,n,r,!0,o,t)):(n.tag=0,xe&&o&&nf(n),en(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=HE(r),e=Bn(r,e),i){case 0:n=Uc(null,n,r,e,t);break e;case 1:n=ap(null,n,r,e,t);break e;case 11:n=op(null,n,r,e,t);break e;case 14:n=sp(null,n,r,Bn(r.type,e),t);break e}throw Error(q(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),Uc(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),ap(e,n,r,i,t);case 3:e:{if(wv(n),e===null)throw Error(q(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Ug(e,n),Xs(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Error(q(423)),n=lp(e,n,r,t,i);break e}else if(r!==i){i=Error(q(424)),n=lp(e,n,r,t,i);break e}else for(un=Et(n.stateNode.containerInfo.firstChild),Sn=n,xe=!0,Qn=null,t=Wg(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(si(),r===i){n=Ct(e,n,t);break e}en(e,n,r,t)}n=n.child}return n;case 5:return Yg(n),e===null&&$c(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ac(r,i)?s=null:o!==null&&Ac(r,o)&&(n.flags|=32),Sv(e,n),en(e,n,s,t),n.child;case 6:return e===null&&$c(n),null;case 13:return kv(e,n,t);case 4:return of(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ai(n,null,r,t):en(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),op(e,n,r,i,t);case 7:return en(e,n,n.pendingProps,t),n.child;case 8:return en(e,n,n.pendingProps.children,t),n.child;case 12:return en(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,Se(Js,r._currentValue),r._currentValue=s,o!==null)if(ot(o.value,s)){if(o.children===i.children&&!dn.current){n=Ct(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=bt(-1,t&-t),c.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Rc(o.return,t,n),a.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(q(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Rc(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Kr(n,t),i=Pn(i),r=r(i),n.flags|=1,en(e,n,r,t),n.child;case 14:return r=n.type,i=Bn(r,n.pendingProps),i=Bn(r.type,i),sp(e,n,r,i,t);case 15:return _v(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,pn(r)?(e=!0,Ys(n)):e=!1,Kr(n,t),Bg(n,r,i),Mc(n,r,i,t),zc(null,n,r,!0,e,t);case 19:return bv(e,n,t);case 22:return Ev(e,n,t)}throw Error(q(156,n.tag))};function Pv(e,n){return pg(e,n)}function QE(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,t,r){return new QE(e,n,t,r)}function _f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function HE(e){if(typeof e=="function")return _f(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===ju)return 14}return 2}function Xt(e,n){var t=e.alternate;return t===null?(t=Dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Fs(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")_f(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qr:return mr(t.children,i,o,n);case qu:s=8,i|=8;break;case uc:return e=Dn(12,t,n,i|2),e.elementType=uc,e.lanes=o,e;case fc:return e=Dn(13,t,n,i),e.elementType=fc,e.lanes=o,e;case dc:return e=Dn(19,t,n,i),e.elementType=dc,e.lanes=o,e;case Jm:return ca(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wm:s=10;break e;case Ym:s=9;break e;case $u:s=11;break e;case ju:s=14;break e;case Rt:s=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return n=Dn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function mr(e,n,t,r){return e=Dn(7,e,r,n),e.lanes=t,e}function ca(e,n,t,r){return e=Dn(22,e,r,n),e.elementType=Jm,e.lanes=t,e.stateNode={},e}function Ml(e,n,t){return e=Dn(6,e,null,n),e.lanes=t,e}function ql(e,n,t){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function GE(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ef(e,n,t,r,i,o,s,a,c){return e=new GE(e,n,t,a,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Dn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null},ef(o),e}function WE(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mv(e){if(!e)return Zt;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(q(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(q(171))}if(e.tag===1){var t=e.type;if(pn(t))return jg(e,t,n)}return n}function qv(e,n,t,r,i,o,s,a,c){return e=Ef(t,r,!0,e,i,o,s,a,c),e.context=Mv(null),t=e.current,r=rn(),i=Gt(t),o=bt(r,i),o.callback=n!=null?n:null,Qt(t,o),e.current.lanes=i,Ao(e,i,r),hn(e,r),e}function Va(e,n,t,r){var i=n.current,o=rn(),s=Gt(i);return t=Mv(t),n.context===null?n.context=t:n.pendingContext=t,n=bt(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),Qt(i,n),e=Fn(i,s,o),e!==null&&Is(e,i,s),s}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Sf(e,n){wp(e,n),(e=e.alternate)&&wp(e,n)}function YE(){return null}var $v=typeof reportError=="function"?reportError:function(e){console.error(e)};function wf(e){this._internalRoot=e}Ua.prototype.render=wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(q(409));Va(e,n,null,null)};Ua.prototype.unmount=wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_r(function(){Va(null,e,null,null)}),n[Nt]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var n=_g();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qt.length&&n!==0&&n<qt[t].priority;t++);qt.splice(t,0,e),t===0&&Sg(e)}};function kf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kp(){}function JE(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var l=ua(s);o.call(l)}}var s=qv(n,r,e,0,null,!1,!1,"",kp);return e._reactRootContainer=s,e[Nt]=s.current,co(e.nodeType===8?e.parentNode:e),_r(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=ua(c);a.call(l)}}var c=Ef(e,0,!1,null,null,!1,!1,"",kp);return e._reactRootContainer=c,e[Nt]=c.current,co(e.nodeType===8?e.parentNode:e),_r(function(){Va(n,c,t,r)}),c}function Ba(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=ua(s);a.call(c)}}Va(n,s,e,i)}else s=JE(t,n,e,i,r);return ua(s)}vg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mi(n.pendingLanes);t!==0&&(zu(n,t|1),hn(n,Fe()),(le&6)===0&&(fi=Fe()+500,tr()))}break;case 13:var r=rn();_r(function(){return Fn(e,1,r)}),Sf(e,1)}};Bu=function(e){if(e.tag===13){var n=rn();Fn(e,134217728,n),Sf(e,134217728)}};yg=function(e){if(e.tag===13){var n=rn(),t=Gt(e);Fn(e,t,n),Sf(e,t)}};_g=function(){return he};Eg=function(e,n){var t=he;try{return he=e,n()}finally{he=t}};wc=function(e,n,t){switch(n){case"input":if(mc(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Fa(r);if(!i)throw Error(q(90));Xm(r),mc(r,i)}}}break;case"textarea":eg(e,t);break;case"select":n=t.value,n!=null&&Yr(e,!!t.multiple,n,!1)}};ag=gf;lg=_r;var ZE={usingClientEntryPoint:!1,Events:[Lo,Ur,Fa,og,sg,gf]},Oi={findFiberByHostInstance:lr,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},XE={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fg(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||YE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Da=us.inject(XE),rt=us}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;Tn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(n))throw Error(q(200));return WE(e,n,null,t)};Tn.createRoot=function(e,n){if(!kf(e))throw Error(q(299));var t=!1,r="",i=$v;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ef(e,1,!1,null,null,t,!1,r,i),e[Nt]=n.current,co(e.nodeType===8?e.parentNode:e),new wf(n)};Tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=fg(n),e=e===null?null:e.stateNode,e};Tn.flushSync=function(e){return _r(e)};Tn.hydrate=function(e,n,t){if(!za(n))throw Error(q(200));return Ba(null,e,n,!0,t)};Tn.hydrateRoot=function(e,n,t){if(!kf(e))throw Error(q(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=$v;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=qv(n,null,e,1,t!=null?t:null,i,!1,o,s),e[Nt]=n.current,co(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ua(n)};Tn.render=function(e,n,t){if(!za(n))throw Error(q(200));return Ba(null,e,n,!1,t)};Tn.unmountComponentAtNode=function(e){if(!za(e))throw Error(q(40));return e._reactRootContainer?(_r(function(){Ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Tn.unstable_batchedUpdates=gf;Tn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!za(t))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Ba(e,n,t,!1,r)};Tn.version="18.0.0-fc46dba67-20220329";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(e){console.error(e)}}jv(),Du.exports=Tn;var bp=Du.exports,Tp=Du.exports;lc.createRoot=Tp.createRoot,lc.hydrateRoot=Tp.hydrateRoot;function ce(e,n){if(!Boolean(e))throw new Error(n)}function st(e){return typeof e=="object"&&e!==null}function on(e,n){if(!Boolean(e))throw new Error(n!=null?n:"Unexpected invariant triggered.")}const KE=/\r\n|[\n\r]/g;function Kc(e,n){let t=0,r=1;for(const i of e.body.matchAll(KE)){if(typeof i.index=="number"||on(!1),i.index>=n)break;t=i.index+i[0].length,r+=1}return{line:r,column:n+1-t}}function e1(e){return Vv(e.source,Kc(e.source,e.start))}function Vv(e,n){const t=e.locationOffset.column-1,r="".padStart(t)+e.body,i=n.line-1,o=e.locationOffset.line-1,s=n.line+o,a=n.line===1?t:0,c=n.column+a,l=`${e.name}:${s}:${c}
`,u=r.split(/\r\n|[\n\r]/g),f=u[i];if(f.length>120){const p=Math.floor(c/80),h=c%80,d=[];for(let E=0;E<f.length;E+=80)d.push(f.slice(E,E+80));return l+xp([[`${s} |`,d[0]],...d.slice(1,p+1).map(E=>["|",E]),["|","^".padStart(h)],["|",d[p+1]]])}return l+xp([[`${s-1} |`,u[i-1]],[`${s} |`,f],["|","^".padStart(c)],[`${s+1} |`,u[i+1]]])}function xp(e){const n=e.filter(([r,i])=>i!==void 0),t=Math.max(...n.map(([r])=>r.length));return n.map(([r,i])=>r.padStart(t)+(i?" "+i:"")).join(`
`)}function n1(e){const n=e[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:n}class L extends Error{constructor(n,...t){var r,i,o;const{nodes:s,source:a,positions:c,path:l,originalError:u,extensions:f}=n1(t);super(n),this.name="GraphQLError",this.path=l!=null?l:void 0,this.originalError=u!=null?u:void 0,this.nodes=Np(Array.isArray(s)?s:s?[s]:void 0);const p=Np((r=this.nodes)===null||r===void 0?void 0:r.map(d=>d.loc).filter(d=>d!=null));this.source=a!=null?a:p==null||(i=p[0])===null||i===void 0?void 0:i.source,this.positions=c!=null?c:p==null?void 0:p.map(d=>d.start),this.locations=c&&a?c.map(d=>Kc(a,d)):p==null?void 0:p.map(d=>Kc(d.source,d.start));const h=st(u==null?void 0:u.extensions)?u==null?void 0:u.extensions:void 0;this.extensions=(o=f!=null?f:h)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+e1(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Vv(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Np(e){return e===void 0||e.length===0?void 0:e}function Loe(e){return e.toString()}function Foe(e){return e.toJSON()}function Be(e,n,t){return new L(`Syntax Error: ${t}`,void 0,e,[n])}class t1{constructor(n,t,r){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Uv{constructor(n,t,r,i,o,s){this.kind=n,this.start=t,this.end=r,this.line=i,this.column=o,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const zv={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},r1=new Set(Object.keys(zv));function eu(e){const n=e==null?void 0:e.kind;return typeof n=="string"&&r1.has(n)}let nn;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(nn||(nn={}));let X;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(X||(X={}));let y;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(y||(y={}));function nu(e){return e===9||e===32}function Eo(e){return e>=48&&e<=57}function Bv(e){return e>=97&&e<=122||e>=65&&e<=90}function bf(e){return Bv(e)||e===95}function Qv(e){return Bv(e)||Eo(e)||e===95}function i1(e){var n;let t=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let s=0;s<e.length;++s){var o;const a=e[s],c=o1(a);c!==a.length&&(r=(o=r)!==null&&o!==void 0?o:s,i=s,s!==0&&c<t&&(t=c))}return e.map((s,a)=>a===0?s:s.slice(t)).slice((n=r)!==null&&n!==void 0?n:0,i+1)}function o1(e){let n=0;for(;n<e.length&&nu(e.charCodeAt(n));)++n;return n}function Roe(e){if(e==="")return!0;let n=!0,t=!1,r=!0,i=!1;for(let o=0;o<e.length;++o)switch(e.codePointAt(o)){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 11:case 12:case 14:case 15:return!1;case 13:return!1;case 10:if(n&&!i)return!1;i=!0,n=!0,t=!1;break;case 9:case 32:t||(t=n);break;default:r&&(r=t),n=!1}return!(n||r&&i)}function s1(e,n){const t=e.replace(/"""/g,'\\"""'),r=t.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(h=>h.length===0||nu(h.charCodeAt(0))),s=t.endsWith('\\"""'),a=e.endsWith('"')&&!s,c=e.endsWith("\\"),l=a||c,u=!(n!=null&&n.minimize)&&(!i||e.length>70||l||o||s);let f="";const p=i&&nu(e.charCodeAt(0));return(u&&!p||o)&&(f+=`
`),f+=t,(u||l)&&(f+=`
`),'"""'+f+'"""'}let D;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(D||(D={}));class a1{constructor(n){const t=new Uv(D.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==D.EOF)do if(n.next)n=n.next;else{const t=c1(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===D.COMMENT);return n}}function l1(e){return e===D.BANG||e===D.DOLLAR||e===D.AMP||e===D.PAREN_L||e===D.PAREN_R||e===D.SPREAD||e===D.COLON||e===D.EQUALS||e===D.AT||e===D.BRACKET_L||e===D.BRACKET_R||e===D.BRACE_L||e===D.PIPE||e===D.BRACE_R}function vi(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Qa(e,n){return Hv(e.charCodeAt(n))&&Gv(e.charCodeAt(n+1))}function Hv(e){return e>=55296&&e<=56319}function Gv(e){return e>=56320&&e<=57343}function Er(e,n){const t=e.source.body.codePointAt(n);if(t===void 0)return D.EOF;if(t>=32&&t<=126){const r=String.fromCodePoint(t);return r==='"'?`'"'`:`"${r}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Me(e,n,t,r,i){const o=e.line,s=1+t-e.lineStart;return new Uv(n,t,r,o,s,i)}function c1(e,n){const t=e.source.body,r=t.length;let i=n;for(;i<r;){const o=t.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:t.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return u1(e,i);case 33:return Me(e,D.BANG,i,i+1);case 36:return Me(e,D.DOLLAR,i,i+1);case 38:return Me(e,D.AMP,i,i+1);case 40:return Me(e,D.PAREN_L,i,i+1);case 41:return Me(e,D.PAREN_R,i,i+1);case 46:if(t.charCodeAt(i+1)===46&&t.charCodeAt(i+2)===46)return Me(e,D.SPREAD,i,i+3);break;case 58:return Me(e,D.COLON,i,i+1);case 61:return Me(e,D.EQUALS,i,i+1);case 64:return Me(e,D.AT,i,i+1);case 91:return Me(e,D.BRACKET_L,i,i+1);case 93:return Me(e,D.BRACKET_R,i,i+1);case 123:return Me(e,D.BRACE_L,i,i+1);case 124:return Me(e,D.PIPE,i,i+1);case 125:return Me(e,D.BRACE_R,i,i+1);case 34:return t.charCodeAt(i+1)===34&&t.charCodeAt(i+2)===34?g1(e,i):d1(e,i)}if(Eo(o)||o===45)return f1(e,i,o);if(bf(o))return v1(e,i);throw Be(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:vi(o)||Qa(t,i)?`Unexpected character: ${Er(e,i)}.`:`Invalid character: ${Er(e,i)}.`)}return Me(e,D.EOF,r,r)}function u1(e,n){const t=e.source.body,r=t.length;let i=n+1;for(;i<r;){const o=t.charCodeAt(i);if(o===10||o===13)break;if(vi(o))++i;else if(Qa(t,i))i+=2;else break}return Me(e,D.COMMENT,n,i,t.slice(n+1,i))}function f1(e,n,t){const r=e.source.body;let i=n,o=t,s=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),Eo(o))throw Be(e.source,i,`Invalid number, unexpected digit after 0: ${Er(e,i)}.`)}else i=$l(e,i,o),o=r.charCodeAt(i);if(o===46&&(s=!0,o=r.charCodeAt(++i),i=$l(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(s=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=$l(e,i,o),o=r.charCodeAt(i)),o===46||bf(o))throw Be(e.source,i,`Invalid number, expected digit but got: ${Er(e,i)}.`);return Me(e,s?D.FLOAT:D.INT,n,i,r.slice(n,i))}function $l(e,n,t){if(!Eo(t))throw Be(e.source,n,`Invalid number, expected digit but got: ${Er(e,n)}.`);const r=e.source.body;let i=n+1;for(;Eo(r.charCodeAt(i));)++i;return i}function d1(e,n){const t=e.source.body,r=t.length;let i=n+1,o=i,s="";for(;i<r;){const a=t.charCodeAt(i);if(a===34)return s+=t.slice(o,i),Me(e,D.STRING,n,i+1,s);if(a===92){s+=t.slice(o,i);const c=t.charCodeAt(i+1)===117?t.charCodeAt(i+2)===123?p1(e,i):h1(e,i):m1(e,i);s+=c.value,i+=c.size,o=i;continue}if(a===10||a===13)break;if(vi(a))++i;else if(Qa(t,i))i+=2;else throw Be(e.source,i,`Invalid character within String: ${Er(e,i)}.`)}throw Be(e.source,i,"Unterminated string.")}function p1(e,n){const t=e.source.body;let r=0,i=3;for(;i<12;){const o=t.charCodeAt(n+i++);if(o===125){if(i<5||!vi(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|$i(o),r<0)break}throw Be(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+i)}".`)}function h1(e,n){const t=e.source.body,r=Cp(t,n+2);if(vi(r))return{value:String.fromCodePoint(r),size:6};if(Hv(r)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const i=Cp(t,n+8);if(Gv(i))return{value:String.fromCodePoint(r,i),size:12}}throw Be(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Cp(e,n){return $i(e.charCodeAt(n))<<12|$i(e.charCodeAt(n+1))<<8|$i(e.charCodeAt(n+2))<<4|$i(e.charCodeAt(n+3))}function $i(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function m1(e,n){const t=e.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Be(e.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function g1(e,n){const t=e.source.body,r=t.length;let i=e.lineStart,o=n+3,s=o,a="";const c=[];for(;o<r;){const l=t.charCodeAt(o);if(l===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){a+=t.slice(s,o),c.push(a);const u=Me(e,D.BLOCK_STRING,n,o+3,i1(c).join(`
`));return e.line+=c.length-1,e.lineStart=i,u}if(l===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){a+=t.slice(s,o),s=o+1,o+=4;continue}if(l===10||l===13){a+=t.slice(s,o),c.push(a),l===13&&t.charCodeAt(o+1)===10?o+=2:++o,a="",s=o,i=o;continue}if(vi(l))++o;else if(Qa(t,o))o+=2;else throw Be(e.source,o,`Invalid character within String: ${Er(e,o)}.`)}throw Be(e.source,o,"Unterminated string.")}function v1(e,n){const t=e.source.body,r=t.length;let i=n+1;for(;i<r;){const o=t.charCodeAt(i);if(Qv(o))++i;else break}return Me(e,D.NAME,n,i,t.slice(n,i))}const y1=10,Wv=2;function O(e){return Ha(e,[])}function Ha(e,n){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return _1(e,n);default:return String(e)}}function _1(e,n){if(e===null)return"null";if(n.includes(e))return"[Circular]";const t=[...n,e];if(E1(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Ha(r,t)}else if(Array.isArray(e))return w1(e,t);return S1(e,t)}function E1(e){return typeof e.toJSON=="function"}function S1(e,n){const t=Object.entries(e);if(t.length===0)return"{}";if(n.length>Wv)return"["+k1(e)+"]";const r=t.map(([i,o])=>i+": "+Ha(o,n));return"{ "+r.join(", ")+" }"}function w1(e,n){if(e.length===0)return"[]";if(n.length>Wv)return"[Array]";const t=Math.min(y1,e.length),r=e.length-t,i=[];for(let o=0;o<t;++o)i.push(Ha(e[o],n));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function k1(e){const n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof e.constructor=="function"){const t=e.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const Yn=function(n,t){return n instanceof t};class Yv{constructor(n,t="GraphQL request",r={line:1,column:1}){typeof n=="string"||ce(!1,`Body must be a string. Received: ${O(n)}.`),this.body=n,this.name=t,this.locationOffset=r,this.locationOffset.line>0||ce(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ce(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function b1(e){return Yn(e,Yv)}function at(e,n){return new Ga(e,n).parseDocument()}function T1(e,n){const t=new Ga(e,n);t.expectToken(D.SOF);const r=t.parseValueLiteral(!1);return t.expectToken(D.EOF),r}function Poe(e,n){const t=new Ga(e,n);t.expectToken(D.SOF);const r=t.parseConstValueLiteral();return t.expectToken(D.EOF),r}function Moe(e,n){const t=new Ga(e,n);t.expectToken(D.SOF);const r=t.parseTypeReference();return t.expectToken(D.EOF),r}class Ga{constructor(n,t){const r=b1(n)?n:new Yv(n);this._lexer=new a1(r),this._options=t}parseName(){const n=this.expectToken(D.NAME);return this.node(n,{kind:y.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:y.DOCUMENT,definitions:this.many(D.SOF,this.parseDefinition,D.EOF)})}parseDefinition(){if(this.peek(D.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===D.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Be(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(D.BRACE_L))return this.node(n,{kind:y.OPERATION_DEFINITION,operation:nn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let r;return this.peek(D.NAME)&&(r=this.parseName()),this.node(n,{kind:y.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(D.NAME);switch(n.value){case"query":return nn.QUERY;case"mutation":return nn.MUTATION;case"subscription":return nn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(D.PAREN_L,this.parseVariableDefinition,D.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:y.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(D.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(D.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(D.DOLLAR),this.node(n,{kind:y.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:y.SELECTION_SET,selections:this.many(D.BRACE_L,this.parseSelection,D.BRACE_R)})}parseSelection(){return this.peek(D.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let r,i;return this.expectOptionalToken(D.COLON)?(r=t,i=this.parseName()):i=t,this.node(n,{kind:y.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(D.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(D.PAREN_L,t,D.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(t,{kind:y.ARGUMENT,name:r,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(D.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(D.NAME)?this.node(n,{kind:y.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:y.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var n;const t=this._lexer.token;return this.expectKeyword("fragment"),((n=this._options)===null||n===void 0?void 0:n.allowLegacyFragmentVariables)===!0?this.node(t,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case D.BRACKET_L:return this.parseList(n);case D.BRACE_L:return this.parseObject(n);case D.INT:return this._lexer.advance(),this.node(t,{kind:y.INT,value:t.value});case D.FLOAT:return this._lexer.advance(),this.node(t,{kind:y.FLOAT,value:t.value});case D.STRING:case D.BLOCK_STRING:return this.parseStringLiteral();case D.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:y.BOOLEAN,value:!0});case"false":return this.node(t,{kind:y.BOOLEAN,value:!1});case"null":return this.node(t,{kind:y.NULL});default:return this.node(t,{kind:y.ENUM,value:t.value})}case D.DOLLAR:if(n)if(this.expectToken(D.DOLLAR),this._lexer.token.kind===D.NAME){const r=this._lexer.token.value;throw Be(this._lexer.source,t.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this._lexer.advance(),this.node(n,{kind:y.STRING,value:n.value,block:n.kind===D.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:y.LIST,values:this.any(D.BRACKET_L,t,D.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:y.OBJECT,fields:this.any(D.BRACE_L,t,D.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(t,{kind:y.OBJECT_FIELD,name:r,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(D.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(D.AT),this.node(t,{kind:y.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(D.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(D.BRACKET_R),t=this.node(n,{kind:y.LIST_TYPE,type:r})}else t=this.parseNamedType();return this.expectOptionalToken(D.BANG)?this.node(n,{kind:y.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:y.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(D.STRING)||this.peek(D.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);return this.node(n,{kind:y.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(D.COLON);const r=this.parseNamedType();return this.node(n,{kind:y.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(n,{kind:y.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:i})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(n,{kind:y.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:o,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(D.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseFieldDefinition,D.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(D.COLON);const o=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(n,{kind:y.FIELD_DEFINITION,description:t,name:r,arguments:i,type:o,directives:s})}parseArgumentDefs(){return this.optionalMany(D.PAREN_L,this.parseInputValueDef,D.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName();this.expectToken(D.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(D.EQUALS)&&(o=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(n,{kind:y.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:o,directives:s})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(n,{kind:y.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:o,fields:s})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:y.UNION_TYPE_DEFINITION,description:t,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(D.EQUALS)?this.delimitedMany(D.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:y.ENUM_TYPE_DEFINITION,description:t,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(D.BRACE_L,this.parseEnumValueDefinition,D.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(n,{kind:y.ENUM_VALUE_DEFINITION,description:t,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Be(this._lexer.source,this._lexer.token.start,`${fs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:y.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseInputValueDef,D.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===D.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),r=this.optionalMany(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);if(t.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:y.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(n,{kind:y.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:y.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:y.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.UNION_TYPE_EXTENSION,name:t,directives:r,types:i})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.ENUM_TYPE_EXTENSION,name:t,directives:r,values:i})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:i})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(D.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(n,{kind:y.DIRECTIVE_DEFINITION,description:t,name:r,arguments:i,repeatable:o,locations:s})}parseDirectiveLocations(){return this.delimitedMany(D.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(X,t.value))return t;throw this.unexpected(n)}node(n,t){var r;return((r=this._options)===null||r===void 0?void 0:r.noLocation)!==!0&&(t.loc=new t1(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this._lexer.advance(),t;throw Be(this._lexer.source,t.start,`Expected ${Jv(n)}, found ${fs(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this._lexer.advance(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===D.NAME&&t.value===n)this._lexer.advance();else throw Be(this._lexer.source,t.start,`Expected "${n}", found ${fs(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===D.NAME&&t.value===n?(this._lexer.advance(),!0):!1}unexpected(n){const t=n!=null?n:this._lexer.token;return Be(this._lexer.source,t.start,`Unexpected ${fs(t)}.`)}any(n,t,r){this.expectToken(n);const i=[];for(;!this.expectOptionalToken(r);)i.push(t.call(this));return i}optionalMany(n,t,r){if(this.expectOptionalToken(n)){const i=[];do i.push(t.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(n,t,r){this.expectToken(n);const i=[];do i.push(t.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(n,t){this.expectOptionalToken(n);const r=[];do r.push(t.call(this));while(this.expectOptionalToken(n));return r}}function fs(e){const n=e.value;return Jv(e.kind)+(n!=null?` "${n}"`:"")}function Jv(e){return l1(e)?`"${e}"`:e}const x1=5;function It(e,n){const[t,r]=n?[e,n]:[void 0,e];let i=" Did you mean ";t&&(i+=t+" ");const o=r.map(c=>`"${c}"`);switch(o.length){case 0:return"";case 1:return i+o[0]+"?";case 2:return i+o[0]+" or "+o[1]+"?"}const s=o.slice(0,x1),a=s.pop();return i+s.join(", ")+", or "+a+"?"}function Ip(e){return e}function Sr(e,n){const t=Object.create(null);for(const r of e)t[n(r)]=r;return t}function fr(e,n,t){const r=Object.create(null);for(const i of e)r[n(i)]=t(i);return r}function _t(e,n){const t=Object.create(null);for(const r of Object.keys(e))t[r]=n(e[r],r);return t}function Tf(e,n){let t=0,r=0;for(;t<e.length&&r<n.length;){let i=e.charCodeAt(t),o=n.charCodeAt(r);if(ds(i)&&ds(o)){let s=0;do++t,s=s*10+i-tu,i=e.charCodeAt(t);while(ds(i)&&s>0);let a=0;do++r,a=a*10+o-tu,o=n.charCodeAt(r);while(ds(o)&&a>0);if(s<a)return-1;if(s>a)return 1}else{if(i<o)return-1;if(i>o)return 1;++t,++r}}return e.length-n.length}const tu=48,N1=57;function ds(e){return!isNaN(e)&&tu<=e&&e<=N1}function rr(e,n){const t=Object.create(null),r=new C1(e),i=Math.floor(e.length*.4)+1;for(const o of n){const s=r.measure(o,i);s!==void 0&&(t[o]=s)}return Object.keys(t).sort((o,s)=>{const a=t[o]-t[s];return a!==0?a:Tf(o,s)})}class C1{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Dp(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const r=n.toLowerCase();if(this._inputLowerCase===r)return 1;let i=Dp(r),o=this._inputArray;if(i.length<o.length){const u=i;i=o,o=u}const s=i.length,a=o.length;if(s-a>t)return;const c=this._rows;for(let u=0;u<=a;u++)c[0][u]=u;for(let u=1;u<=s;u++){const f=c[(u-1)%3],p=c[u%3];let h=p[0]=u;for(let d=1;d<=a;d++){const E=i[u-1]===o[d-1]?0:1;let w=Math.min(f[d]+1,p[d-1]+1,f[d-1]+E);if(u>1&&d>1&&i[u-1]===o[d-2]&&i[u-2]===o[d-1]){const g=c[(u-2)%3][d-2];w=Math.min(w,g+1)}w<h&&(h=w),p[d]=w}if(h>t)return}const l=c[s%3][a];return l<=t?l:void 0}}function Dp(e){const n=e.length,t=new Array(n);for(let r=0;r<n;++r)t[r]=e.charCodeAt(r);return t}function jn(e){if(e==null)return Object.create(null);if(Object.getPrototypeOf(e)===null)return e;const n=Object.create(null);for(const[t,r]of Object.entries(e))n[t]=r;return n}function I1(e){return`"${e.replace(D1,A1)}"`}const D1=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function A1(e){return O1[e.charCodeAt(0)]}const O1=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ji=Object.freeze({});function Mn(e,n,t=zv){const r=new Map;for(const g of Object.values(y))r.set(g,So(n,g));let i,o=Array.isArray(e),s=[e],a=-1,c=[],l=e,u,f;const p=[],h=[];do{a++;const g=a===s.length,m=g&&c.length!==0;if(g){if(u=h.length===0?void 0:p[p.length-1],l=f,f=h.pop(),m)if(o){l=l.slice();let S=0;for(const[N,k]of c){const A=N-S;k===null?(l.splice(A,1),S++):l[A]=k}}else{l=Object.defineProperties({},Object.getOwnPropertyDescriptors(l));for(const[S,N]of c)l[S]=N}a=i.index,s=i.keys,c=i.edits,o=i.inArray,i=i.prev}else if(f){if(u=o?a:s[a],l=f[u],l==null)continue;p.push(u)}let v;if(!Array.isArray(l)){var d,E;eu(l)||ce(!1,`Invalid AST Node: ${O(l)}.`);const S=g?(d=r.get(l.kind))===null||d===void 0?void 0:d.leave:(E=r.get(l.kind))===null||E===void 0?void 0:E.enter;if(v=S==null?void 0:S.call(n,l,u,f,p,h),v===ji)break;if(v===!1){if(!g){p.pop();continue}}else if(v!==void 0&&(c.push([u,v]),!g))if(eu(v))l=v;else{p.pop();continue}}if(v===void 0&&m&&c.push([u,l]),g)p.pop();else{var w;i={inArray:o,index:a,keys:s,edits:c,prev:i},o=Array.isArray(l),s=o?l:(w=t[l.kind])!==null&&w!==void 0?w:[],a=-1,c=[],f&&h.push(f),f=l}}while(i!==void 0);return c.length!==0?c[c.length-1][1]:e}function Zv(e){const n=new Array(e.length).fill(null),t=Object.create(null);for(const r of Object.values(y)){let i=!1;const o=new Array(e.length).fill(void 0),s=new Array(e.length).fill(void 0);for(let c=0;c<e.length;++c){const{enter:l,leave:u}=So(e[c],r);i||(i=l!=null||u!=null),o[c]=l,s[c]=u}if(!i)continue;const a={enter(...c){const l=c[0];for(let f=0;f<e.length;f++)if(n[f]===null){var u;const p=(u=o[f])===null||u===void 0?void 0:u.apply(e[f],c);if(p===!1)n[f]=l;else if(p===ji)n[f]=ji;else if(p!==void 0)return p}},leave(...c){const l=c[0];for(let f=0;f<e.length;f++)if(n[f]===null){var u;const p=(u=s[f])===null||u===void 0?void 0:u.apply(e[f],c);if(p===ji)n[f]=ji;else if(p!==void 0&&p!==!1)return p}else n[f]===l&&(n[f]=null)}};t[r]=a}return t}function So(e,n){const t=e[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:e.enter,leave:e.leave}}function qoe(e,n,t){const{enter:r,leave:i}=So(e,n);return t?i:r}function we(e){return Mn(e,F1)}const L1=80,F1={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>Q(e.definitions,`

`)},OperationDefinition:{leave(e){const n=oe("(",Q(e.variableDefinitions,", "),")"),t=Q([e.operation,Q([e.name,n]),Q(e.directives," ")]," ");return(t==="query"?"":t+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:n,defaultValue:t,directives:r})=>e+": "+n+oe(" = ",t)+oe(" ",Q(r," "))},SelectionSet:{leave:({selections:e})=>zn(e)},Field:{leave({alias:e,name:n,arguments:t,directives:r,selectionSet:i}){const o=oe("",e,": ")+n;let s=o+oe("(",Q(t,", "),")");return s.length>L1&&(s=o+oe(`(
`,Rs(Q(t,`
`)),`
)`)),Q([s,Q(r," "),i]," ")}},Argument:{leave:({name:e,value:n})=>e+": "+n},FragmentSpread:{leave:({name:e,directives:n})=>"..."+e+oe(" ",Q(n," "))},InlineFragment:{leave:({typeCondition:e,directives:n,selectionSet:t})=>Q(["...",oe("on ",e),Q(n," "),t]," ")},FragmentDefinition:{leave:({name:e,typeCondition:n,variableDefinitions:t,directives:r,selectionSet:i})=>`fragment ${e}${oe("(",Q(t,", "),")")} on ${n} ${oe("",Q(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:n})=>n?s1(e):I1(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+Q(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+Q(e,", ")+"}"},ObjectField:{leave:({name:e,value:n})=>e+": "+n},Directive:{leave:({name:e,arguments:n})=>"@"+e+oe("(",Q(n,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:n,operationTypes:t})=>oe("",e,`
`)+Q(["schema",Q(n," "),zn(t)]," ")},OperationTypeDefinition:{leave:({operation:e,type:n})=>e+": "+n},ScalarTypeDefinition:{leave:({description:e,name:n,directives:t})=>oe("",e,`
`)+Q(["scalar",n,Q(t," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:r,fields:i})=>oe("",e,`
`)+Q(["type",n,oe("implements ",Q(t," & ")),Q(r," "),zn(i)]," ")},FieldDefinition:{leave:({description:e,name:n,arguments:t,type:r,directives:i})=>oe("",e,`
`)+n+(Ap(t)?oe(`(
`,Rs(Q(t,`
`)),`
)`):oe("(",Q(t,", "),")"))+": "+r+oe(" ",Q(i," "))},InputValueDefinition:{leave:({description:e,name:n,type:t,defaultValue:r,directives:i})=>oe("",e,`
`)+Q([n+": "+t,oe("= ",r),Q(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:r,fields:i})=>oe("",e,`
`)+Q(["interface",n,oe("implements ",Q(t," & ")),Q(r," "),zn(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:n,directives:t,types:r})=>oe("",e,`
`)+Q(["union",n,Q(t," "),oe("= ",Q(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:n,directives:t,values:r})=>oe("",e,`
`)+Q(["enum",n,Q(t," "),zn(r)]," ")},EnumValueDefinition:{leave:({description:e,name:n,directives:t})=>oe("",e,`
`)+Q([n,Q(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:n,directives:t,fields:r})=>oe("",e,`
`)+Q(["input",n,Q(t," "),zn(r)]," ")},DirectiveDefinition:{leave:({description:e,name:n,arguments:t,repeatable:r,locations:i})=>oe("",e,`
`)+"directive @"+n+(Ap(t)?oe(`(
`,Rs(Q(t,`
`)),`
)`):oe("(",Q(t,", "),")"))+(r?" repeatable":"")+" on "+Q(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:n})=>Q(["extend schema",Q(e," "),zn(n)]," ")},ScalarTypeExtension:{leave:({name:e,directives:n})=>Q(["extend scalar",e,Q(n," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:r})=>Q(["extend type",e,oe("implements ",Q(n," & ")),Q(t," "),zn(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:r})=>Q(["extend interface",e,oe("implements ",Q(n," & ")),Q(t," "),zn(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:n,types:t})=>Q(["extend union",e,Q(n," "),oe("= ",Q(t," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:n,values:t})=>Q(["extend enum",e,Q(n," "),zn(t)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:n,fields:t})=>Q(["extend input",e,Q(n," "),zn(t)]," ")}};function Q(e,n=""){var t;return(t=e==null?void 0:e.filter(r=>r).join(n))!==null&&t!==void 0?t:""}function zn(e){return oe(`{
`,Rs(Q(e,`
`)),`
}`)}function oe(e,n,t=""){return n!=null&&n!==""?e+n+t:""}function Rs(e){return oe("  ",e.replace(/\n/g,`
  `))}function Ap(e){var n;return(n=e==null?void 0:e.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function ru(e,n){switch(e.kind){case y.NULL:return null;case y.INT:return parseInt(e.value,10);case y.FLOAT:return parseFloat(e.value);case y.STRING:case y.ENUM:case y.BOOLEAN:return e.value;case y.LIST:return e.values.map(t=>ru(t,n));case y.OBJECT:return fr(e.fields,t=>t.name.value,t=>ru(t.value,n));case y.VARIABLE:return n==null?void 0:n[e.name.value]}}function Jn(e){if(e!=null||ce(!1,"Must provide name."),typeof e=="string"||ce(!1,"Expected name to be a string."),e.length===0)throw new L("Expected name to be a non-empty string.");for(let n=1;n<e.length;++n)if(!Qv(e.charCodeAt(n)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);if(!bf(e.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${e}" does not.`);return e}function R1(e){if(e==="true"||e==="false"||e==="null")throw new L(`Enum values cannot be named: ${e}`);return Jn(e)}function di(e){return ut(e)||me(e)||Ne(e)||bn(e)||sn(e)||je(e)||Ae(e)||ie(e)}function $oe(e){if(!di(e))throw new Error(`Expected ${O(e)} to be a GraphQL type.`);return e}function ut(e){return Yn(e,At)}function joe(e){if(!ut(e))throw new Error(`Expected ${O(e)} to be a GraphQL Scalar type.`);return e}function me(e){return Yn(e,wn)}function P1(e){if(!me(e))throw new Error(`Expected ${O(e)} to be a GraphQL Object type.`);return e}function Ne(e){return Yn(e,wo)}function M1(e){if(!Ne(e))throw new Error(`Expected ${O(e)} to be a GraphQL Interface type.`);return e}function bn(e){return Yn(e,ko)}function Voe(e){if(!bn(e))throw new Error(`Expected ${O(e)} to be a GraphQL Union type.`);return e}function sn(e){return Yn(e,wr)}function Uoe(e){if(!sn(e))throw new Error(`Expected ${O(e)} to be a GraphQL Enum type.`);return e}function je(e){return Yn(e,fa)}function zoe(e){if(!je(e))throw new Error(`Expected ${O(e)} to be a GraphQL Input Object type.`);return e}function Ae(e){return Yn(e,Qe)}function Boe(e){if(!Ae(e))throw new Error(`Expected ${O(e)} to be a GraphQL List type.`);return e}function ie(e){return Yn(e,re)}function Qoe(e){if(!ie(e))throw new Error(`Expected ${O(e)} to be a GraphQL Non-Null type.`);return e}function yn(e){return ut(e)||sn(e)||je(e)||Wa(e)&&yn(e.ofType)}function Hoe(e){if(!yn(e))throw new Error(`Expected ${O(e)} to be a GraphQL input type.`);return e}function gr(e){return ut(e)||me(e)||Ne(e)||bn(e)||sn(e)||Wa(e)&&gr(e.ofType)}function Goe(e){if(!gr(e))throw new Error(`Expected ${O(e)} to be a GraphQL output type.`);return e}function lt(e){return ut(e)||sn(e)}function Woe(e){if(!lt(e))throw new Error(`Expected ${O(e)} to be a GraphQL leaf type.`);return e}function Dt(e){return me(e)||Ne(e)||bn(e)}function Yoe(e){if(!Dt(e))throw new Error(`Expected ${O(e)} to be a GraphQL composite type.`);return e}function Wt(e){return Ne(e)||bn(e)}function Joe(e){if(!Wt(e))throw new Error(`Expected ${O(e)} to be a GraphQL abstract type.`);return e}class Qe{constructor(n){di(n)||ce(!1,`Expected ${O(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class re{constructor(n){Xv(n)||ce(!1,`Expected ${O(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Wa(e){return Ae(e)||ie(e)}function Zoe(e){if(!Wa(e))throw new Error(`Expected ${O(e)} to be a GraphQL wrapping type.`);return e}function Xv(e){return di(e)&&!ie(e)}function q1(e){if(!Xv(e))throw new Error(`Expected ${O(e)} to be a GraphQL nullable type.`);return e}function Kv(e){if(e)return ie(e)?e.ofType:e}function ey(e){return ut(e)||me(e)||Ne(e)||bn(e)||sn(e)||je(e)}function Xoe(e){if(!ey(e))throw new Error(`Expected ${O(e)} to be a GraphQL named type.`);return e}function tn(e){if(e){let n=e;for(;Wa(n);)n=n.ofType;return n}}function ny(e){return typeof e=="function"?e():e}function ty(e){return typeof e=="function"?e():e}class At{constructor(n){var t,r,i,o;const s=(t=n.parseValue)!==null&&t!==void 0?t:Ip;this.name=Jn(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(r=n.serialize)!==null&&r!==void 0?r:Ip,this.parseValue=s,this.parseLiteral=(i=n.parseLiteral)!==null&&i!==void 0?i:(a,c)=>s(ru(a,c)),this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||ce(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${O(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||ce(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||ce(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class wn{constructor(n){var t;this.name=Jn(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>iy(n),this._interfaces=()=>ry(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||ce(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${O(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:sy(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ry(e){var n;const t=ny((n=e.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||ce(!1,`${e.name} interfaces must be an Array or a function which returns an Array.`),t}function iy(e){const n=ty(e.fields);return ni(n)||ce(!1,`${e.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,r)=>{var i;ni(t)||ce(!1,`${e.name}.${r} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||ce(!1,`${e.name}.${r} field resolver must be a function if provided, but got: ${O(t.resolve)}.`);const o=(i=t.args)!==null&&i!==void 0?i:{};return ni(o)||ce(!1,`${e.name}.${r} args must be an object with argument names as keys.`),{name:Jn(r),description:t.description,type:t.type,args:oy(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}})}function oy(e){return Object.entries(e).map(([n,t])=>({name:Jn(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function ni(e){return st(e)&&!Array.isArray(e)}function sy(e){return _t(e,n=>({description:n.description,type:n.type,args:ay(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function ay(e){return fr(e,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Ro(e){return ie(e.type)&&e.defaultValue===void 0}class wo{constructor(n){var t;this.name=Jn(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=iy.bind(void 0,n),this._interfaces=ry.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${O(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:sy(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ko{constructor(n){var t;this.name=Jn(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=$1.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${O(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function $1(e){const n=ny(e.types);return Array.isArray(n)||ce(!1,`Must provide Array of types or a function which returns such an array for Union ${e.name}.`),n}class wr{constructor(n){var t;this.name=Jn(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=j1(this.name,n.values),this._valueLookup=new Map(this._values.map(r=>[r.value,r])),this._nameLookup=Sr(this._values,r=>r.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${O(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const r=O(n);throw new L(`Enum "${this.name}" cannot represent non-string value: ${r}.`+ps(this,r))}const t=this.getValue(n);if(t==null)throw new L(`Value "${n}" does not exist in "${this.name}" enum.`+ps(this,n));return t.value}parseLiteral(n,t){if(n.kind!==y.ENUM){const i=we(n);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${i}.`+ps(this,i),n)}const r=this.getValue(n.value);if(r==null){const i=we(n);throw new L(`Value "${i}" does not exist in "${this.name}" enum.`+ps(this,i),n)}return r.value}toConfig(){const n=fr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ps(e,n){const t=e.getValues().map(i=>i.name),r=rr(n,t);return It("the enum value",r)}function j1(e,n){return ni(n)||ce(!1,`${e} values must be an object with value names as keys.`),Object.entries(n).map(([t,r])=>(ni(r)||ce(!1,`${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${O(r)}.`),{name:R1(t),description:r.description,value:r.value!==void 0?r.value:t,deprecationReason:r.deprecationReason,extensions:jn(r.extensions),astNode:r.astNode}))}class fa{constructor(n){var t;this.name=Jn(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=V1.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=_t(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function V1(e){const n=ty(e.fields);return ni(n)||ce(!1,`${e.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,r)=>(!("resolve"in t)||ce(!1,`${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`),{name:Jn(r),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function ly(e){return ie(e.type)&&e.defaultValue===void 0}function iu(e,n){return e===n?!0:ie(e)&&ie(n)||Ae(e)&&Ae(n)?iu(e.ofType,n.ofType):!1}function ti(e,n,t){return n===t?!0:ie(t)?ie(n)?ti(e,n.ofType,t.ofType):!1:ie(n)?ti(e,n.ofType,t):Ae(t)?Ae(n)?ti(e,n.ofType,t.ofType):!1:Ae(n)?!1:Wt(t)&&(Ne(n)||me(n))&&e.isSubType(t,n)}function Op(e,n,t){return n===t?!0:Wt(n)?Wt(t)?e.getPossibleTypes(n).some(r=>e.isSubType(t,r)):e.isSubType(n,t):Wt(t)?e.isSubType(t,n):!1}const jl=2147483647,Vl=-2147483648,U1=new At({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(e){const n=Po(e);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new L(`Int cannot represent non-integer value: ${O(n)}`);if(t>jl||t<Vl)throw new L("Int cannot represent non 32-bit signed integer value: "+O(n));return t},parseValue(e){if(typeof e!="number"||!Number.isInteger(e))throw new L(`Int cannot represent non-integer value: ${O(e)}`);if(e>jl||e<Vl)throw new L(`Int cannot represent non 32-bit signed integer value: ${e}`);return e},parseLiteral(e){if(e.kind!==y.INT)throw new L(`Int cannot represent non-integer value: ${we(e)}`,e);const n=parseInt(e.value,10);if(n>jl||n<Vl)throw new L(`Int cannot represent non 32-bit signed integer value: ${e.value}`,e);return n}}),cy=new At({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(e){const n=Po(e);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new L(`Float cannot represent non numeric value: ${O(n)}`);return t},parseValue(e){if(typeof e!="number"||!Number.isFinite(e))throw new L(`Float cannot represent non numeric value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.FLOAT&&e.kind!==y.INT)throw new L(`Float cannot represent non numeric value: ${we(e)}`,e);return parseFloat(e.value)}}),Re=new At({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(e){const n=Po(e);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new L(`String cannot represent value: ${O(e)}`)},parseValue(e){if(typeof e!="string")throw new L(`String cannot represent a non string value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.STRING)throw new L(`String cannot represent a non string value: ${we(e)}`,e);return e.value}}),Rn=new At({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(e){const n=Po(e);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new L(`Boolean cannot represent a non boolean value: ${O(n)}`)},parseValue(e){if(typeof e!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${we(e)}`,e);return e.value}}),uy=new At({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(e){const n=Po(e);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new L(`ID cannot represent value: ${O(e)}`)},parseValue(e){if(typeof e=="string")return e;if(typeof e=="number"&&Number.isInteger(e))return e.toString();throw new L(`ID cannot represent value: ${O(e)}`)},parseLiteral(e){if(e.kind!==y.STRING&&e.kind!==y.INT)throw new L("ID cannot represent a non-string and non-integer value: "+we(e),e);return e.value}}),Ya=Object.freeze([Re,U1,cy,Rn,uy]);function z1(e){return Ya.some(({name:n})=>e.name===n)}function Po(e){if(st(e)){if(typeof e.valueOf=="function"){const n=e.valueOf();if(!st(n))return n}if(typeof e.toJSON=="function")return e.toJSON()}return e}function xf(e){return Yn(e,Kt)}function Koe(e){if(!xf(e))throw new Error(`Expected ${O(e)} to be a GraphQL directive.`);return e}class Kt{constructor(n){var t,r;this.name=Jn(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=jn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||ce(!1,`@${n.name} locations must be an Array.`);const i=(r=n.args)!==null&&r!==void 0?r:{};st(i)&&!Array.isArray(i)||ce(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=oy(i)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:ay(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const fy=new Kt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[X.FIELD,X.FRAGMENT_SPREAD,X.INLINE_FRAGMENT],args:{if:{type:new re(Rn),description:"Included when true."}}}),dy=new Kt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[X.FIELD,X.FRAGMENT_SPREAD,X.INLINE_FRAGMENT],args:{if:{type:new re(Rn),description:"Skipped when true."}}}),B1="No longer supported",Nf=new Kt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[X.FIELD_DEFINITION,X.ARGUMENT_DEFINITION,X.INPUT_FIELD_DEFINITION,X.ENUM_VALUE],args:{reason:{type:Re,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:B1}}}),py=new Kt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[X.SCALAR],args:{url:{type:new re(Re),description:"The URL that specifies the behavior of this scalar."}}}),Ar=Object.freeze([fy,dy,Nf,py]);function ese(e){return Ar.some(({name:n})=>n===e.name)}function hy(e){return typeof e=="object"&&typeof(e==null?void 0:e[Symbol.iterator])=="function"}function Wr(e,n){if(ie(n)){const t=Wr(e,n.ofType);return(t==null?void 0:t.kind)===y.NULL?null:t}if(e===null)return{kind:y.NULL};if(e===void 0)return null;if(Ae(n)){const t=n.ofType;if(hy(e)){const r=[];for(const i of e){const o=Wr(i,t);o!=null&&r.push(o)}return{kind:y.LIST,values:r}}return Wr(e,t)}if(je(n)){if(!st(e))return null;const t=[];for(const r of Object.values(n.getFields())){const i=Wr(e[r.name],r.type);i&&t.push({kind:y.OBJECT_FIELD,name:{kind:y.NAME,value:r.name},value:i})}return{kind:y.OBJECT,fields:t}}if(lt(n)){const t=n.serialize(e);if(t==null)return null;if(typeof t=="boolean")return{kind:y.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const r=String(t);return Lp.test(r)?{kind:y.INT,value:r}:{kind:y.FLOAT,value:r}}if(typeof t=="string")return sn(n)?{kind:y.ENUM,value:t}:n===uy&&Lp.test(t)?{kind:y.INT,value:t}:{kind:y.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${O(t)}.`)}on(!1,"Unexpected input type: "+O(n))}const Lp=/^-?(?:0|[1-9][0-9]*)$/,Ja=new wn({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Re,resolve:e=>e.description},types:{description:"A list of all types supported by this server.",type:new re(new Qe(new re(An))),resolve(e){return Object.values(e.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new re(An),resolve:e=>e.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:An,resolve:e=>e.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:An,resolve:e=>e.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new re(new Qe(new re(Cf))),resolve:e=>e.getDirectives()}})}),Cf=new wn({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new re(Re),resolve:e=>e.name},description:{type:Re,resolve:e=>e.description},isRepeatable:{type:new re(Rn),resolve:e=>e.isRepeatable},locations:{type:new re(new Qe(new re(If))),resolve:e=>e.locations},args:{type:new re(new Qe(new re(Mo))),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){return n?e.args:e.args.filter(t=>t.deprecationReason==null)}}})}),If=new wr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:X.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:X.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:X.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:X.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:X.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:X.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:X.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:X.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:X.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:X.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:X.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:X.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:X.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:X.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:X.UNION,description:"Location adjacent to a union definition."},ENUM:{value:X.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:X.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:X.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:X.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),An=new wn({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new re(Of),resolve(e){if(ut(e))return ve.SCALAR;if(me(e))return ve.OBJECT;if(Ne(e))return ve.INTERFACE;if(bn(e))return ve.UNION;if(sn(e))return ve.ENUM;if(je(e))return ve.INPUT_OBJECT;if(Ae(e))return ve.LIST;if(ie(e))return ve.NON_NULL;on(!1,`Unexpected type: "${O(e)}".`)}},name:{type:Re,resolve:e=>"name"in e?e.name:void 0},description:{type:Re,resolve:e=>"description"in e?e.description:void 0},specifiedByURL:{type:Re,resolve:e=>"specifiedByURL"in e?e.specifiedByURL:void 0},fields:{type:new Qe(new re(Df)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(me(e)||Ne(e)){const t=Object.values(e.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},interfaces:{type:new Qe(new re(An)),resolve(e){if(me(e)||Ne(e))return e.getInterfaces()}},possibleTypes:{type:new Qe(new re(An)),resolve(e,n,t,{schema:r}){if(Wt(e))return r.getPossibleTypes(e)}},enumValues:{type:new Qe(new re(Af)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(sn(e)){const t=e.getValues();return n?t:t.filter(r=>r.deprecationReason==null)}}},inputFields:{type:new Qe(new re(Mo)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(je(e)){const t=Object.values(e.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},ofType:{type:An,resolve:e=>"ofType"in e?e.ofType:void 0}})}),Df=new wn({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new re(Re),resolve:e=>e.name},description:{type:Re,resolve:e=>e.description},args:{type:new re(new Qe(new re(Mo))),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){return n?e.args:e.args.filter(t=>t.deprecationReason==null)}},type:{type:new re(An),resolve:e=>e.type},isDeprecated:{type:new re(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Re,resolve:e=>e.deprecationReason}})}),Mo=new wn({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new re(Re),resolve:e=>e.name},description:{type:Re,resolve:e=>e.description},type:{type:new re(An),resolve:e=>e.type},defaultValue:{type:Re,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(e){const{type:n,defaultValue:t}=e,r=Wr(t,n);return r?we(r):null}},isDeprecated:{type:new re(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Re,resolve:e=>e.deprecationReason}})}),Af=new wn({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new re(Re),resolve:e=>e.name},description:{type:Re,resolve:e=>e.description},isDeprecated:{type:new re(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Re,resolve:e=>e.deprecationReason}})});let ve;(function(e){e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.INPUT_OBJECT="INPUT_OBJECT",e.LIST="LIST",e.NON_NULL="NON_NULL"})(ve||(ve={}));const Of=new wr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:ve.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:ve.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:ve.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:ve.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:ve.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:ve.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:ve.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:ve.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}}),ou={name:"__schema",type:new re(Ja),description:"Access the current type schema of this server.",args:[],resolve:(e,n,t,{schema:r})=>r,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},su={name:"__type",type:An,description:"Request the type information of a single type.",args:[{name:"name",description:void 0,type:new re(Re),defaultValue:void 0,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0}],resolve:(e,{name:n},t,{schema:r})=>r.getType(n),deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},au={name:"__typename",type:new re(Re),description:"The name of the current Object type at runtime.",args:[],resolve:(e,n,t,{parentType:r})=>r.name,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},qo=Object.freeze([Ja,Cf,If,An,Df,Mo,Af,Of]);function Lf(e){return qo.some(({name:n})=>e.name===n)}var nse=Object.freeze(Object.defineProperty({__proto__:null,__Schema:Ja,__Directive:Cf,__DirectiveLocation:If,__Type:An,__Field:Df,__InputValue:Mo,__EnumValue:Af,get TypeKind(){return ve},__TypeKind:Of,SchemaMetaFieldDef:ou,TypeMetaFieldDef:su,TypeNameMetaFieldDef:au,introspectionTypes:qo,isIntrospectionType:Lf},Symbol.toStringTag,{value:"Module"}));function Q1(e){return Yn(e,Za)}function my(e){if(!Q1(e))throw new Error(`Expected ${O(e)} to be a GraphQL schema.`);return e}class Za{constructor(n){var t,r;this.__validationErrors=n.assumeValid===!0?[]:void 0,st(n)||ce(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||ce(!1,`"types" must be Array if provided but got: ${O(n.types)}.`),!n.directives||Array.isArray(n.directives)||ce(!1,`"directives" must be Array if provided but got: ${O(n.directives)}.`),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(r=n.directives)!==null&&r!==void 0?r:Ar;const i=new Set(n.types);if(n.types!=null)for(const o of n.types)i.delete(o),Hn(o,i);this._queryType!=null&&Hn(this._queryType,i),this._mutationType!=null&&Hn(this._mutationType,i),this._subscriptionType!=null&&Hn(this._subscriptionType,i);for(const o of this._directives)if(xf(o))for(const s of o.args)Hn(s.type,i);Hn(Ja,i),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of i){if(o==null)continue;const s=o.name;if(s||ce(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[s]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${s}".`);if(this._typeMap[s]=o,Ne(o)){for(const a of o.getInterfaces())if(Ne(a)){let c=this._implementationsMap[a.name];c===void 0&&(c=this._implementationsMap[a.name]={objects:[],interfaces:[]}),c.interfaces.push(o)}}else if(me(o)){for(const a of o.getInterfaces())if(Ne(a)){let c=this._implementationsMap[a.name];c===void 0&&(c=this._implementationsMap[a.name]={objects:[],interfaces:[]}),c.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case nn.QUERY:return this.getQueryType();case nn.MUTATION:return this.getMutationType();case nn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return bn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t!=null?t:{objects:[],interfaces:[]}}isSubType(n,t){let r=this._subTypeMap[n.name];if(r===void 0){if(r=Object.create(null),bn(n))for(const i of n.getTypes())r[i.name]=!0;else{const i=this.getImplementations(n);for(const o of i.objects)r[o.name]=!0;for(const o of i.interfaces)r[o.name]=!0}this._subTypeMap[n.name]=r}return r[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Hn(e,n){const t=tn(e);if(!n.has(t)){if(n.add(t),bn(t))for(const r of t.getTypes())Hn(r,n);else if(me(t)||Ne(t)){for(const r of t.getInterfaces())Hn(r,n);for(const r of Object.values(t.getFields())){Hn(r.type,n);for(const i of r.args)Hn(i.type,n)}}else if(je(t))for(const r of Object.values(t.getFields()))Hn(r.type,n)}return n}function Ps(e){if(my(e),e.__validationErrors)return e.__validationErrors;const n=new G1(e);W1(n),Y1(n),J1(n);const t=n.getErrors();return e.__validationErrors=t,t}function H1(e){const n=Ps(e);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}class G1{constructor(n){this._errors=[],this.schema=n}reportError(n,t){const r=Array.isArray(t)?t.filter(Boolean):t;this._errors.push(new L(n,r))}getErrors(){return this._errors}}function W1(e){const n=e.schema,t=n.getQueryType();if(!t)e.reportError("Query root type must be provided.",n.astNode);else if(!me(t)){var r;e.reportError(`Query root type must be Object type, it cannot be ${O(t)}.`,(r=Ul(n,nn.QUERY))!==null&&r!==void 0?r:t.astNode)}const i=n.getMutationType();if(i&&!me(i)){var o;e.reportError(`Mutation root type must be Object type if provided, it cannot be ${O(i)}.`,(o=Ul(n,nn.MUTATION))!==null&&o!==void 0?o:i.astNode)}const s=n.getSubscriptionType();if(s&&!me(s)){var a;e.reportError(`Subscription root type must be Object type if provided, it cannot be ${O(s)}.`,(a=Ul(n,nn.SUBSCRIPTION))!==null&&a!==void 0?a:s.astNode)}}function Ul(e,n){var t;return(t=[e.astNode,...e.extensionASTNodes].flatMap(r=>{var i;return(i=r==null?void 0:r.operationTypes)!==null&&i!==void 0?i:[]}).find(r=>r.operation===n))===null||t===void 0?void 0:t.type}function Y1(e){for(const t of e.schema.getDirectives()){if(!xf(t)){e.reportError(`Expected directive but got: ${O(t)}.`,t==null?void 0:t.astNode);continue}kr(e,t);for(const r of t.args)if(kr(e,r),yn(r.type)||e.reportError(`The type of @${t.name}(${r.name}:) must be Input Type but got: ${O(r.type)}.`,r.astNode),Ro(r)&&r.deprecationReason!=null){var n;e.reportError(`Required argument @${t.name}(${r.name}:) cannot be deprecated.`,[Ff(r.astNode),(n=r.astNode)===null||n===void 0?void 0:n.type])}}}function kr(e,n){n.name.startsWith("__")&&e.reportError(`Name "${n.name}" must not begin with "__", which is reserved by GraphQL introspection.`,n.astNode)}function J1(e){const n=tS(e),t=e.schema.getTypeMap();for(const r of Object.values(t)){if(!ey(r)){e.reportError(`Expected GraphQL named type but got: ${O(r)}.`,r.astNode);continue}Lf(r)||kr(e,r),me(r)||Ne(r)?(Fp(e,r),Rp(e,r)):bn(r)?K1(e,r):sn(r)?eS(e,r):je(r)&&(nS(e,r),n(r))}}function Fp(e,n){const t=Object.values(n.getFields());t.length===0&&e.reportError(`Type ${n.name} must define one or more fields.`,[n.astNode,...n.extensionASTNodes]);for(const s of t){if(kr(e,s),!gr(s.type)){var r;e.reportError(`The type of ${n.name}.${s.name} must be Output Type but got: ${O(s.type)}.`,(r=s.astNode)===null||r===void 0?void 0:r.type)}for(const a of s.args){const c=a.name;if(kr(e,a),!yn(a.type)){var i;e.reportError(`The type of ${n.name}.${s.name}(${c}:) must be Input Type but got: ${O(a.type)}.`,(i=a.astNode)===null||i===void 0?void 0:i.type)}if(Ro(a)&&a.deprecationReason!=null){var o;e.reportError(`Required argument ${n.name}.${s.name}(${c}:) cannot be deprecated.`,[Ff(a.astNode),(o=a.astNode)===null||o===void 0?void 0:o.type])}}}}function Rp(e,n){const t=Object.create(null);for(const r of n.getInterfaces()){if(!Ne(r)){e.reportError(`Type ${O(n)} must only implement Interface types, it cannot implement ${O(r)}.`,Zi(n,r));continue}if(n===r){e.reportError(`Type ${n.name} cannot implement itself because it would create a circular reference.`,Zi(n,r));continue}if(t[r.name]){e.reportError(`Type ${n.name} can only implement ${r.name} once.`,Zi(n,r));continue}t[r.name]=!0,X1(e,n,r),Z1(e,n,r)}}function Z1(e,n,t){const r=n.getFields();for(const c of Object.values(t.getFields())){const l=c.name,u=r[l];if(!u){e.reportError(`Interface field ${t.name}.${l} expected but ${n.name} does not provide it.`,[c.astNode,n.astNode,...n.extensionASTNodes]);continue}if(!ti(e.schema,u.type,c.type)){var i,o;e.reportError(`Interface field ${t.name}.${l} expects type ${O(c.type)} but ${n.name}.${l} is type ${O(u.type)}.`,[(i=c.astNode)===null||i===void 0?void 0:i.type,(o=u.astNode)===null||o===void 0?void 0:o.type])}for(const f of c.args){const p=f.name,h=u.args.find(d=>d.name===p);if(!h){e.reportError(`Interface field argument ${t.name}.${l}(${p}:) expected but ${n.name}.${l} does not provide it.`,[f.astNode,u.astNode]);continue}if(!iu(f.type,h.type)){var s,a;e.reportError(`Interface field argument ${t.name}.${l}(${p}:) expects type ${O(f.type)} but ${n.name}.${l}(${p}:) is type ${O(h.type)}.`,[(s=f.astNode)===null||s===void 0?void 0:s.type,(a=h.astNode)===null||a===void 0?void 0:a.type])}}for(const f of u.args){const p=f.name;!c.args.find(d=>d.name===p)&&Ro(f)&&e.reportError(`Object field ${n.name}.${l} includes required argument ${p} that is missing from the Interface field ${t.name}.${l}.`,[f.astNode,c.astNode])}}}function X1(e,n,t){const r=n.getInterfaces();for(const i of t.getInterfaces())r.includes(i)||e.reportError(i===n?`Type ${n.name} cannot implement ${t.name} because it would create a circular reference.`:`Type ${n.name} must implement ${i.name} because it is implemented by ${t.name}.`,[...Zi(t,i),...Zi(n,t)])}function K1(e,n){const t=n.getTypes();t.length===0&&e.reportError(`Union type ${n.name} must define one or more member types.`,[n.astNode,...n.extensionASTNodes]);const r=Object.create(null);for(const i of t){if(r[i.name]){e.reportError(`Union type ${n.name} can only include type ${i.name} once.`,Pp(n,i.name));continue}r[i.name]=!0,me(i)||e.reportError(`Union type ${n.name} can only include Object types, it cannot include ${O(i)}.`,Pp(n,String(i)))}}function eS(e,n){const t=n.getValues();t.length===0&&e.reportError(`Enum type ${n.name} must define one or more values.`,[n.astNode,...n.extensionASTNodes]);for(const r of t)kr(e,r)}function nS(e,n){const t=Object.values(n.getFields());t.length===0&&e.reportError(`Input Object type ${n.name} must define one or more fields.`,[n.astNode,...n.extensionASTNodes]);for(const o of t){if(kr(e,o),!yn(o.type)){var r;e.reportError(`The type of ${n.name}.${o.name} must be Input Type but got: ${O(o.type)}.`,(r=o.astNode)===null||r===void 0?void 0:r.type)}if(ly(o)&&o.deprecationReason!=null){var i;e.reportError(`Required input field ${n.name}.${o.name} cannot be deprecated.`,[Ff(o.astNode),(i=o.astNode)===null||i===void 0?void 0:i.type])}}}function tS(e){const n=Object.create(null),t=[],r=Object.create(null);return i;function i(o){if(n[o.name])return;n[o.name]=!0,r[o.name]=t.length;const s=Object.values(o.getFields());for(const a of s)if(ie(a.type)&&je(a.type.ofType)){const c=a.type.ofType,l=r[c.name];if(t.push(a),l===void 0)i(c);else{const u=t.slice(l),f=u.map(p=>p.name).join(".");e.reportError(`Cannot reference Input Object "${c.name}" within itself through a series of non-null fields: "${f}".`,u.map(p=>p.astNode))}t.pop()}r[o.name]=void 0}}function Zi(e,n){const{astNode:t,extensionASTNodes:r}=e;return(t!=null?[t,...r]:r).flatMap(o=>{var s;return(s=o.interfaces)!==null&&s!==void 0?s:[]}).filter(o=>o.name.value===n.name)}function Pp(e,n){const{astNode:t,extensionASTNodes:r}=e;return(t!=null?[t,...r]:r).flatMap(o=>{var s;return(s=o.types)!==null&&s!==void 0?s:[]}).filter(o=>o.name.value===n)}function Ff(e){var n;return e==null||(n=e.directives)===null||n===void 0?void 0:n.find(t=>t.name.value===Nf.name)}function mn(e,n){switch(n.kind){case y.LIST_TYPE:{const t=mn(e,n.type);return t&&new Qe(t)}case y.NON_NULL_TYPE:{const t=mn(e,n.type);return t&&new re(t)}case y.NAMED_TYPE:return e.getType(n.name.value)}}class Xa{constructor(n,t,r){this._schema=n,this._typeStack=[],this._parentTypeStack=[],this._inputTypeStack=[],this._fieldDefStack=[],this._defaultValueStack=[],this._directive=null,this._argument=null,this._enumValue=null,this._getFieldDef=r!=null?r:rS,t&&(yn(t)&&this._inputTypeStack.push(t),Dt(t)&&this._parentTypeStack.push(t),gr(t)&&this._typeStack.push(t))}get[Symbol.toStringTag](){return"TypeInfo"}getType(){if(this._typeStack.length>0)return this._typeStack[this._typeStack.length-1]}getParentType(){if(this._parentTypeStack.length>0)return this._parentTypeStack[this._parentTypeStack.length-1]}getInputType(){if(this._inputTypeStack.length>0)return this._inputTypeStack[this._inputTypeStack.length-1]}getParentInputType(){if(this._inputTypeStack.length>1)return this._inputTypeStack[this._inputTypeStack.length-2]}getFieldDef(){if(this._fieldDefStack.length>0)return this._fieldDefStack[this._fieldDefStack.length-1]}getDefaultValue(){if(this._defaultValueStack.length>0)return this._defaultValueStack[this._defaultValueStack.length-1]}getDirective(){return this._directive}getArgument(){return this._argument}getEnumValue(){return this._enumValue}enter(n){const t=this._schema;switch(n.kind){case y.SELECTION_SET:{const i=tn(this.getType());this._parentTypeStack.push(Dt(i)?i:void 0);break}case y.FIELD:{const i=this.getParentType();let o,s;i&&(o=this._getFieldDef(t,i,n),o&&(s=o.type)),this._fieldDefStack.push(o),this._typeStack.push(gr(s)?s:void 0);break}case y.DIRECTIVE:this._directive=t.getDirective(n.name.value);break;case y.OPERATION_DEFINITION:{const i=t.getRootType(n.operation);this._typeStack.push(me(i)?i:void 0);break}case y.INLINE_FRAGMENT:case y.FRAGMENT_DEFINITION:{const i=n.typeCondition,o=i?mn(t,i):tn(this.getType());this._typeStack.push(gr(o)?o:void 0);break}case y.VARIABLE_DEFINITION:{const i=mn(t,n.type);this._inputTypeStack.push(yn(i)?i:void 0);break}case y.ARGUMENT:{var r;let i,o;const s=(r=this.getDirective())!==null&&r!==void 0?r:this.getFieldDef();s&&(i=s.args.find(a=>a.name===n.name.value),i&&(o=i.type)),this._argument=i,this._defaultValueStack.push(i?i.defaultValue:void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.LIST:{const i=Kv(this.getInputType()),o=Ae(i)?i.ofType:i;this._defaultValueStack.push(void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.OBJECT_FIELD:{const i=tn(this.getInputType());let o,s;je(i)&&(s=i.getFields()[n.name.value],s&&(o=s.type)),this._defaultValueStack.push(s?s.defaultValue:void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.ENUM:{const i=tn(this.getInputType());let o;sn(i)&&(o=i.getValue(n.value)),this._enumValue=o;break}}}leave(n){switch(n.kind){case y.SELECTION_SET:this._parentTypeStack.pop();break;case y.FIELD:this._fieldDefStack.pop(),this._typeStack.pop();break;case y.DIRECTIVE:this._directive=null;break;case y.OPERATION_DEFINITION:case y.INLINE_FRAGMENT:case y.FRAGMENT_DEFINITION:this._typeStack.pop();break;case y.VARIABLE_DEFINITION:this._inputTypeStack.pop();break;case y.ARGUMENT:this._argument=null,this._defaultValueStack.pop(),this._inputTypeStack.pop();break;case y.LIST:case y.OBJECT_FIELD:this._defaultValueStack.pop(),this._inputTypeStack.pop();break;case y.ENUM:this._enumValue=null;break}}}function rS(e,n,t){const r=t.name.value;if(r===ou.name&&e.getQueryType()===n)return ou;if(r===su.name&&e.getQueryType()===n)return su;if(r===au.name&&Dt(n))return au;if(me(n)||Ne(n))return n.getFields()[r]}function Rf(e,n){return{enter(...t){const r=t[0];e.enter(r);const i=So(n,r.kind).enter;if(i){const o=i.apply(n,t);return o!==void 0&&(e.leave(r),eu(o)&&e.enter(o)),o}},leave(...t){const r=t[0],i=So(n,r.kind).leave;let o;return i&&(o=i.apply(n,t)),e.leave(r),o}}}function tse(e){return Pf(e)||gy(e)||vy(e)}function Pf(e){return e.kind===y.OPERATION_DEFINITION||e.kind===y.FRAGMENT_DEFINITION}function rse(e){return e.kind===y.FIELD||e.kind===y.FRAGMENT_SPREAD||e.kind===y.INLINE_FRAGMENT}function iS(e){return e.kind===y.VARIABLE||e.kind===y.INT||e.kind===y.FLOAT||e.kind===y.STRING||e.kind===y.BOOLEAN||e.kind===y.NULL||e.kind===y.ENUM||e.kind===y.LIST||e.kind===y.OBJECT}function Mp(e){return iS(e)&&(e.kind===y.LIST?e.values.some(Mp):e.kind===y.OBJECT?e.fields.some(n=>Mp(n.value)):e.kind!==y.VARIABLE)}function ise(e){return e.kind===y.NAMED_TYPE||e.kind===y.LIST_TYPE||e.kind===y.NON_NULL_TYPE}function gy(e){return e.kind===y.SCHEMA_DEFINITION||$o(e)||e.kind===y.DIRECTIVE_DEFINITION}function $o(e){return e.kind===y.SCALAR_TYPE_DEFINITION||e.kind===y.OBJECT_TYPE_DEFINITION||e.kind===y.INTERFACE_TYPE_DEFINITION||e.kind===y.UNION_TYPE_DEFINITION||e.kind===y.ENUM_TYPE_DEFINITION||e.kind===y.INPUT_OBJECT_TYPE_DEFINITION}function vy(e){return e.kind===y.SCHEMA_EXTENSION||Mf(e)}function Mf(e){return e.kind===y.SCALAR_TYPE_EXTENSION||e.kind===y.OBJECT_TYPE_EXTENSION||e.kind===y.INTERFACE_TYPE_EXTENSION||e.kind===y.UNION_TYPE_EXTENSION||e.kind===y.ENUM_TYPE_EXTENSION||e.kind===y.INPUT_OBJECT_TYPE_EXTENSION}function yy(e){return{Document(n){for(const t of n.definitions)if(!Pf(t)){const r=t.kind===y.SCHEMA_DEFINITION||t.kind===y.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';e.reportError(new L(`The ${r} definition is not executable.`,t))}return!1}}}function oS(e){return{Field(n){const t=e.getParentType();if(t&&!e.getFieldDef()){const i=e.getSchema(),o=n.name.value;let s=It("to use an inline fragment on",sS(i,t,o));s===""&&(s=It(aS(t,o))),e.reportError(new L(`Cannot query field "${o}" on type "${t.name}".`+s,n))}}}}function sS(e,n,t){if(!Wt(n))return[];const r=new Set,i=Object.create(null);for(const s of e.getPossibleTypes(n))if(!!s.getFields()[t]){r.add(s),i[s.name]=1;for(const a of s.getInterfaces()){var o;!a.getFields()[t]||(r.add(a),i[a.name]=((o=i[a.name])!==null&&o!==void 0?o:0)+1)}}return[...r].sort((s,a)=>{const c=i[a.name]-i[s.name];return c!==0?c:Ne(s)&&e.isSubType(s,a)?-1:Ne(a)&&e.isSubType(a,s)?1:Tf(s.name,a.name)}).map(s=>s.name)}function aS(e,n){if(me(e)||Ne(e)){const t=Object.keys(e.getFields());return rr(n,t)}return[]}function lS(e){return{InlineFragment(n){const t=n.typeCondition;if(t){const r=mn(e.getSchema(),t);if(r&&!Dt(r)){const i=we(t);e.reportError(new L(`Fragment cannot condition on non composite type "${i}".`,t))}}},FragmentDefinition(n){const t=mn(e.getSchema(),n.typeCondition);if(t&&!Dt(t)){const r=we(n.typeCondition);e.reportError(new L(`Fragment "${n.name.value}" cannot condition on non composite type "${r}".`,n.typeCondition))}}}}function cS(e){return Pe(ue({},_y(e)),{Argument(n){const t=e.getArgument(),r=e.getFieldDef(),i=e.getParentType();if(!t&&r&&i){const o=n.name.value,s=r.args.map(c=>c.name),a=rr(o,s);e.reportError(new L(`Unknown argument "${o}" on field "${i.name}.${r.name}".`+It(a),n))}}})}function _y(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Ar;for(const s of r)n[s.name]=s.args.map(a=>a.name);const i=e.getDocument().definitions;for(const s of i)if(s.kind===y.DIRECTIVE_DEFINITION){var o;const a=(o=s.arguments)!==null&&o!==void 0?o:[];n[s.name.value]=a.map(c=>c.name.value)}return{Directive(s){const a=s.name.value,c=n[a];if(s.arguments&&c)for(const l of s.arguments){const u=l.name.value;if(!c.includes(u)){const f=rr(u,c);e.reportError(new L(`Unknown argument "${u}" on directive "@${a}".`+It(f),l))}}return!1}}}function qf(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Ar;for(const o of r)n[o.name]=o.locations;const i=e.getDocument().definitions;for(const o of i)o.kind===y.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(s=>s.value));return{Directive(o,s,a,c,l){const u=o.name.value,f=n[u];if(!f){e.reportError(new L(`Unknown directive "@${u}".`,o));return}const p=uS(l);p&&!f.includes(p)&&e.reportError(new L(`Directive "@${u}" may not be used on ${p}.`,o))}}}function uS(e){const n=e[e.length-1];switch("kind"in n||on(!1),n.kind){case y.OPERATION_DEFINITION:return fS(n.operation);case y.FIELD:return X.FIELD;case y.FRAGMENT_SPREAD:return X.FRAGMENT_SPREAD;case y.INLINE_FRAGMENT:return X.INLINE_FRAGMENT;case y.FRAGMENT_DEFINITION:return X.FRAGMENT_DEFINITION;case y.VARIABLE_DEFINITION:return X.VARIABLE_DEFINITION;case y.SCHEMA_DEFINITION:case y.SCHEMA_EXTENSION:return X.SCHEMA;case y.SCALAR_TYPE_DEFINITION:case y.SCALAR_TYPE_EXTENSION:return X.SCALAR;case y.OBJECT_TYPE_DEFINITION:case y.OBJECT_TYPE_EXTENSION:return X.OBJECT;case y.FIELD_DEFINITION:return X.FIELD_DEFINITION;case y.INTERFACE_TYPE_DEFINITION:case y.INTERFACE_TYPE_EXTENSION:return X.INTERFACE;case y.UNION_TYPE_DEFINITION:case y.UNION_TYPE_EXTENSION:return X.UNION;case y.ENUM_TYPE_DEFINITION:case y.ENUM_TYPE_EXTENSION:return X.ENUM;case y.ENUM_VALUE_DEFINITION:return X.ENUM_VALUE;case y.INPUT_OBJECT_TYPE_DEFINITION:case y.INPUT_OBJECT_TYPE_EXTENSION:return X.INPUT_OBJECT;case y.INPUT_VALUE_DEFINITION:{const t=e[e.length-3];return"kind"in t||on(!1),t.kind===y.INPUT_OBJECT_TYPE_DEFINITION?X.INPUT_FIELD_DEFINITION:X.ARGUMENT_DEFINITION}default:on(!1,"Unexpected kind: "+O(n.kind))}}function fS(e){switch(e){case nn.QUERY:return X.QUERY;case nn.MUTATION:return X.MUTATION;case nn.SUBSCRIPTION:return X.SUBSCRIPTION}}function Ey(e){return{FragmentSpread(n){const t=n.name.value;e.getFragment(t)||e.reportError(new L(`Unknown fragment "${t}".`,n.name))}}}function $f(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);for(const o of e.getDocument().definitions)$o(o)&&(r[o.name.value]=!0);const i=[...Object.keys(t),...Object.keys(r)];return{NamedType(o,s,a,c,l){const u=o.name.value;if(!t[u]&&!r[u]){var f;const p=(f=l[2])!==null&&f!==void 0?f:a,h=p!=null&&dS(p);if(h&&qp.includes(u))return;const d=rr(u,h?qp.concat(i):i);e.reportError(new L(`Unknown type "${u}".`+It(d),o))}}}}const qp=[...Ya,...qo].map(e=>e.name);function dS(e){return"kind"in e&&(gy(e)||vy(e))}function pS(e){let n=0;return{Document(t){n=t.definitions.filter(r=>r.kind===y.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&e.reportError(new L("This anonymous operation must be the only defined operation.",t))}}}function Sy(e){var n,t,r;const i=e.getSchema(),o=(n=(t=(r=i==null?void 0:i.astNode)!==null&&r!==void 0?r:i==null?void 0:i.getQueryType())!==null&&t!==void 0?t:i==null?void 0:i.getMutationType())!==null&&n!==void 0?n:i==null?void 0:i.getSubscriptionType();let s=0;return{SchemaDefinition(a){if(o){e.reportError(new L("Cannot define a new schema within a schema extension.",a));return}s>0&&e.reportError(new L("Must provide only one schema definition.",a)),++s}}}function hS(e){const n=Object.create(null),t=[],r=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return i(o),!1}};function i(o){if(n[o.name.value])return;const s=o.name.value;n[s]=!0;const a=e.getFragmentSpreads(o.selectionSet);if(a.length!==0){r[s]=t.length;for(const c of a){const l=c.name.value,u=r[l];if(t.push(c),u===void 0){const f=e.getFragment(l);f&&i(f)}else{const f=t.slice(u),p=f.slice(0,-1).map(h=>'"'+h.name.value+'"').join(", ");e.reportError(new L(`Cannot spread fragment "${l}" within itself`+(p!==""?` via ${p}.`:"."),f))}t.pop()}r[s]=void 0}}}function mS(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i}of r){const o=i.name.value;n[o]!==!0&&e.reportError(new L(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,[i,t]))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function wy(e){const n=[],t=[];return{OperationDefinition(r){return n.push(r),!1},FragmentDefinition(r){return t.push(r),!1},Document:{leave(){const r=Object.create(null);for(const i of n)for(const o of e.getRecursivelyReferencedFragments(i))r[o.name.value]=!0;for(const i of t){const o=i.name.value;r[o]!==!0&&e.reportError(new L(`Fragment "${o}" is never used.`,i))}}}}}function gS(e){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const r=Object.create(null),i=e.getRecursiveVariableUsages(t);for(const{node:o}of i)r[o.name.value]=!0;for(const o of n){const s=o.variable.name.value;r[s]!==!0&&e.reportError(new L(t.name?`Variable "$${s}" is never used in operation "${t.name.value}".`:`Variable "$${s}" is never used.`,o))}}},VariableDefinition(t){n.push(t)}}}function jf(e){switch(e.kind){case y.OBJECT:return Pe(ue({},e),{fields:vS(e.fields)});case y.LIST:return Pe(ue({},e),{values:e.values.map(jf)});case y.INT:case y.FLOAT:case y.STRING:case y.BOOLEAN:case y.NULL:case y.ENUM:case y.VARIABLE:return e}}function vS(e){return e.map(n=>Pe(ue({},n),{value:jf(n.value)})).sort((n,t)=>Tf(n.name.value,t.name.value))}function ky(e){return Array.isArray(e)?e.map(([n,t])=>`subfields "${n}" conflict because `+ky(t)).join(" and "):e}function yS(e){const n=new kS,t=new Map;return{SelectionSet(r){const i=_S(e,t,n,e.getParentType(),r);for(const[[o,s],a,c]of i){const l=ky(s);e.reportError(new L(`Fields "${o}" conflict because ${l}. Use different aliases on the fields to fetch both if this was intentional.`,a.concat(c)))}}}}function _S(e,n,t,r,i){const o=[],[s,a]=ha(e,n,r,i);if(SS(e,o,n,t,s),a.length!==0)for(let c=0;c<a.length;c++){da(e,o,n,t,!1,s,a[c]);for(let l=c+1;l<a.length;l++)pa(e,o,n,t,!1,a[c],a[l])}return o}function da(e,n,t,r,i,o,s){const a=e.getFragment(s);if(!a)return;const[c,l]=cu(e,t,a);if(o!==c){Vf(e,n,t,r,i,o,c);for(const u of l)r.has(u,s,i)||(r.add(u,s,i),da(e,n,t,r,i,o,u))}}function pa(e,n,t,r,i,o,s){if(o===s||r.has(o,s,i))return;r.add(o,s,i);const a=e.getFragment(o),c=e.getFragment(s);if(!a||!c)return;const[l,u]=cu(e,t,a),[f,p]=cu(e,t,c);Vf(e,n,t,r,i,l,f);for(const h of p)pa(e,n,t,r,i,o,h);for(const h of u)pa(e,n,t,r,i,h,s)}function ES(e,n,t,r,i,o,s,a){const c=[],[l,u]=ha(e,n,i,o),[f,p]=ha(e,n,s,a);Vf(e,c,n,t,r,l,f);for(const h of p)da(e,c,n,t,r,l,h);for(const h of u)da(e,c,n,t,r,f,h);for(const h of u)for(const d of p)pa(e,c,n,t,r,h,d);return c}function SS(e,n,t,r,i){for(const[o,s]of Object.entries(i))if(s.length>1)for(let a=0;a<s.length;a++)for(let c=a+1;c<s.length;c++){const l=by(e,t,r,!1,o,s[a],s[c]);l&&n.push(l)}}function Vf(e,n,t,r,i,o,s){for(const[a,c]of Object.entries(o)){const l=s[a];if(l)for(const u of c)for(const f of l){const p=by(e,t,r,i,a,u,f);p&&n.push(p)}}}function by(e,n,t,r,i,o,s){const[a,c,l]=o,[u,f,p]=s,h=r||a!==u&&me(a)&&me(u);if(!h){const m=c.name.value,v=f.name.value;if(m!==v)return[[i,`"${m}" and "${v}" are different fields`],[c],[f]];if($p(c)!==$p(f))return[[i,"they have differing arguments"],[c],[f]]}const d=l==null?void 0:l.type,E=p==null?void 0:p.type;if(d&&E&&lu(d,E))return[[i,`they return conflicting types "${O(d)}" and "${O(E)}"`],[c],[f]];const w=c.selectionSet,g=f.selectionSet;if(w&&g){const m=ES(e,n,t,h,tn(d),w,tn(E),g);return wS(m,i,c,f)}}function $p(e){var n;const t=(n=e.arguments)!==null&&n!==void 0?n:[],r={kind:y.OBJECT,fields:t.map(i=>({kind:y.OBJECT_FIELD,name:i.name,value:i.value}))};return we(jf(r))}function lu(e,n){return Ae(e)?Ae(n)?lu(e.ofType,n.ofType):!0:Ae(n)?!0:ie(e)?ie(n)?lu(e.ofType,n.ofType):!0:ie(n)?!0:lt(e)||lt(n)?e!==n:!1}function ha(e,n,t,r){const i=n.get(r);if(i)return i;const o=Object.create(null),s=Object.create(null);Ty(e,t,r,o,s);const a=[o,Object.keys(s)];return n.set(r,a),a}function cu(e,n,t){const r=n.get(t.selectionSet);if(r)return r;const i=mn(e.getSchema(),t.typeCondition);return ha(e,n,i,t.selectionSet)}function Ty(e,n,t,r,i){for(const o of t.selections)switch(o.kind){case y.FIELD:{const s=o.name.value;let a;(me(n)||Ne(n))&&(a=n.getFields()[s]);const c=o.alias?o.alias.value:s;r[c]||(r[c]=[]),r[c].push([n,o,a]);break}case y.FRAGMENT_SPREAD:i[o.name.value]=!0;break;case y.INLINE_FRAGMENT:{const s=o.typeCondition,a=s?mn(e.getSchema(),s):n;Ty(e,a,o.selectionSet,r,i);break}}}function wS(e,n,t,r){if(e.length>0)return[[n,e.map(([i])=>i)],[t,...e.map(([,i])=>i).flat()],[r,...e.map(([,,i])=>i).flat()]]}class kS{constructor(){this._data=new Map}has(n,t,r){var i;const[o,s]=n<t?[n,t]:[t,n],a=(i=this._data.get(o))===null||i===void 0?void 0:i.get(s);return a===void 0?!1:r?!0:r===a}add(n,t,r){const[i,o]=n<t?[n,t]:[t,n],s=this._data.get(i);s===void 0?this._data.set(i,new Map([[o,r]])):s.set(o,r)}}function bS(e){return{InlineFragment(n){const t=e.getType(),r=e.getParentType();if(Dt(t)&&Dt(r)&&!Op(e.getSchema(),t,r)){const i=O(r),o=O(t);e.reportError(new L(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${o}".`,n))}},FragmentSpread(n){const t=n.name.value,r=TS(e,t),i=e.getParentType();if(r&&i&&!Op(e.getSchema(),r,i)){const o=O(i),s=O(r);e.reportError(new L(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`,n))}}}}function TS(e,n){const t=e.getFragment(n);if(t){const r=mn(e.getSchema(),t.typeCondition);if(Dt(r))return r}}function xy(e){const n=e.getSchema(),t=Object.create(null);for(const i of e.getDocument().definitions)$o(i)&&(t[i.name.value]=i);return{ScalarTypeExtension:r,ObjectTypeExtension:r,InterfaceTypeExtension:r,UnionTypeExtension:r,EnumTypeExtension:r,InputObjectTypeExtension:r};function r(i){const o=i.name.value,s=t[o],a=n==null?void 0:n.getType(o);let c;if(s?c=xS[s.kind]:a&&(c=NS(a)),c){if(c!==i.kind){const l=CS(i.kind);e.reportError(new L(`Cannot extend non-${l} type "${o}".`,s?[s,i]:i))}}else{const l=Object.keys(ue(ue({},t),n==null?void 0:n.getTypeMap())),u=rr(o,l);e.reportError(new L(`Cannot extend type "${o}" because it is not defined.`+It(u),i.name))}}}const xS={[y.SCALAR_TYPE_DEFINITION]:y.SCALAR_TYPE_EXTENSION,[y.OBJECT_TYPE_DEFINITION]:y.OBJECT_TYPE_EXTENSION,[y.INTERFACE_TYPE_DEFINITION]:y.INTERFACE_TYPE_EXTENSION,[y.UNION_TYPE_DEFINITION]:y.UNION_TYPE_EXTENSION,[y.ENUM_TYPE_DEFINITION]:y.ENUM_TYPE_EXTENSION,[y.INPUT_OBJECT_TYPE_DEFINITION]:y.INPUT_OBJECT_TYPE_EXTENSION};function NS(e){if(ut(e))return y.SCALAR_TYPE_EXTENSION;if(me(e))return y.OBJECT_TYPE_EXTENSION;if(Ne(e))return y.INTERFACE_TYPE_EXTENSION;if(bn(e))return y.UNION_TYPE_EXTENSION;if(sn(e))return y.ENUM_TYPE_EXTENSION;if(je(e))return y.INPUT_OBJECT_TYPE_EXTENSION;on(!1,"Unexpected type: "+O(e))}function CS(e){switch(e){case y.SCALAR_TYPE_EXTENSION:return"scalar";case y.OBJECT_TYPE_EXTENSION:return"object";case y.INTERFACE_TYPE_EXTENSION:return"interface";case y.UNION_TYPE_EXTENSION:return"union";case y.ENUM_TYPE_EXTENSION:return"enum";case y.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:on(!1,"Unexpected kind: "+O(e))}}function IS(e){return Pe(ue({},Ny(e)),{Field:{leave(n){var t;const r=e.getFieldDef();if(!r)return!1;const i=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of r.args)if(!i.has(o.name)&&Ro(o)){const s=O(o.type);e.reportError(new L(`Field "${r.name}" argument "${o.name}" of type "${s}" is required, but it was not provided.`,n))}}}})}function Ny(e){var n;const t=Object.create(null),r=e.getSchema(),i=(n=r==null?void 0:r.getDirectives())!==null&&n!==void 0?n:Ar;for(const a of i)t[a.name]=Sr(a.args.filter(Ro),c=>c.name);const o=e.getDocument().definitions;for(const a of o)if(a.kind===y.DIRECTIVE_DEFINITION){var s;const c=(s=a.arguments)!==null&&s!==void 0?s:[];t[a.name.value]=Sr(c.filter(DS),l=>l.name.value)}return{Directive:{leave(a){const c=a.name.value,l=t[c];if(l){var u;const f=(u=a.arguments)!==null&&u!==void 0?u:[],p=new Set(f.map(h=>h.name.value));for(const[h,d]of Object.entries(l))if(!p.has(h)){const E=di(d.type)?O(d.type):we(d.type);e.reportError(new L(`Directive "@${c}" argument "${h}" of type "${E}" is required, but it was not provided.`,a))}}}}}}function DS(e){return e.type.kind===y.NON_NULL_TYPE&&e.defaultValue==null}function AS(e){return{Field(n){const t=e.getType(),r=n.selectionSet;if(t){if(lt(tn(t))){if(r){const i=n.name.value,o=O(t);e.reportError(new L(`Field "${i}" must not have a selection since type "${o}" has no subfields.`,r))}}else if(!r){const i=n.name.value,o=O(t);e.reportError(new L(`Field "${i}" of type "${o}" must have a selection of subfields. Did you mean "${i} { ... }"?`,n))}}}}}function Cy(e){return e.map(n=>typeof n=="number"?"["+n.toString()+"]":"."+n).join("")}function jp(e,n,t){return{prev:e,key:n,typename:t}}function ir(e){const n=[];let t=e;for(;t;)n.push(t.key),t=t.prev;return n.reverse()}function OS(e,n,t=LS){return Vi(e,n,t,void 0)}function LS(e,n,t){let r="Invalid value "+O(n);throw e.length>0&&(r+=` at "value${Cy(e)}"`),t.message=r+": "+t.message,t}function Vi(e,n,t,r){if(ie(n)){if(e!=null)return Vi(e,n.ofType,t,r);t(ir(r),e,new L(`Expected non-nullable type "${O(n)}" not to be null.`));return}if(e==null)return null;if(Ae(n)){const i=n.ofType;return hy(e)?Array.from(e,(o,s)=>{const a=jp(r,s,void 0);return Vi(o,i,t,a)}):[Vi(e,i,t,r)]}if(je(n)){if(!st(e)){t(ir(r),e,new L(`Expected type "${n.name}" to be an object.`));return}const i={},o=n.getFields();for(const s of Object.values(o)){const a=e[s.name];if(a===void 0){if(s.defaultValue!==void 0)i[s.name]=s.defaultValue;else if(ie(s.type)){const c=O(s.type);t(ir(r),e,new L(`Field "${s.name}" of required type "${c}" was not provided.`))}continue}i[s.name]=Vi(a,s.type,t,jp(r,s.name,n.name))}for(const s of Object.keys(e))if(!o[s]){const a=rr(s,Object.keys(n.getFields()));t(ir(r),e,new L(`Field "${s}" is not defined by type "${n.name}".`+It(a)))}return i}if(lt(n)){let i;try{i=n.parseValue(e)}catch(o){o instanceof L?t(ir(r),e,o):t(ir(r),e,new L(`Expected type "${n.name}". `+o.message,void 0,void 0,void 0,void 0,o));return}return i===void 0&&t(ir(r),e,new L(`Expected type "${n.name}".`)),i}on(!1,"Unexpected input type: "+O(n))}function kt(e,n,t){if(!!e){if(e.kind===y.VARIABLE){const r=e.name.value;if(t==null||t[r]===void 0)return;const i=t[r];return i===null&&ie(n)?void 0:i}if(ie(n))return e.kind===y.NULL?void 0:kt(e,n.ofType,t);if(e.kind===y.NULL)return null;if(Ae(n)){const r=n.ofType;if(e.kind===y.LIST){const o=[];for(const s of e.values)if(Vp(s,t)){if(ie(r))return;o.push(null)}else{const a=kt(s,r,t);if(a===void 0)return;o.push(a)}return o}const i=kt(e,r,t);return i===void 0?void 0:[i]}if(je(n)){if(e.kind!==y.OBJECT)return;const r=Object.create(null),i=Sr(e.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const s=i[o.name];if(!s||Vp(s.value,t)){if(o.defaultValue!==void 0)r[o.name]=o.defaultValue;else if(ie(o.type))return;continue}const a=kt(s.value,o.type,t);if(a===void 0)return;r[o.name]=a}return r}if(lt(n)){let r;try{r=n.parseLiteral(e,t)}catch{return}return r===void 0?void 0:r}on(!1,"Unexpected input type: "+O(n))}}function Vp(e,n){return e.kind===y.VARIABLE&&(n==null||n[e.name.value]===void 0)}function ose(e,n,t,r){const i=[],o=r==null?void 0:r.maxErrors;try{const s=FS(e,n,t,a=>{if(o!=null&&i.length>=o)throw new L("Too many errors processing variables, error limit reached. Execution aborted.");i.push(a)});if(i.length===0)return{coerced:s}}catch(s){i.push(s)}return{errors:i}}function FS(e,n,t,r){const i={};for(const o of n){const s=o.variable.name.value,a=mn(e,o.type);if(!yn(a)){const l=we(o.type);r(new L(`Variable "$${s}" expected value of type "${l}" which cannot be used as an input type.`,o.type));continue}if(!Iy(t,s)){if(o.defaultValue)i[s]=kt(o.defaultValue,a);else if(ie(a)){const l=O(a);r(new L(`Variable "$${s}" of required type "${l}" was not provided.`,o))}continue}const c=t[s];if(c===null&&ie(a)){const l=O(a);r(new L(`Variable "$${s}" of non-null type "${l}" must not be null.`,o));continue}i[s]=OS(c,a,(l,u,f)=>{let p=`Variable "$${s}" got invalid value `+O(u);l.length>0&&(p+=` at "${s}${Cy(l)}"`),r(new L(p+"; "+f.message,o,void 0,void 0,void 0,f.originalError))})}return i}function RS(e,n,t){var r;const i={},o=(r=n.arguments)!==null&&r!==void 0?r:[],s=Sr(o,a=>a.name.value);for(const a of e.args){const c=a.name,l=a.type,u=s[c];if(!u){if(a.defaultValue!==void 0)i[c]=a.defaultValue;else if(ie(l))throw new L(`Argument "${c}" of required type "${O(l)}" was not provided.`,n);continue}const f=u.value;let p=f.kind===y.NULL;if(f.kind===y.VARIABLE){const d=f.name.value;if(t==null||!Iy(t,d)){if(a.defaultValue!==void 0)i[c]=a.defaultValue;else if(ie(l))throw new L(`Argument "${c}" of required type "${O(l)}" was provided the variable "$${d}" which was not provided a runtime value.`,f);continue}p=t[d]==null}if(p&&ie(l))throw new L(`Argument "${c}" of non-null type "${O(l)}" must not be null.`,f);const h=kt(f,l,t);if(h===void 0)throw new L(`Argument "${c}" has invalid value ${we(f)}.`,f);i[c]=h}return i}function ma(e,n,t){var r;const i=(r=n.directives)===null||r===void 0?void 0:r.find(o=>o.name.value===e.name);if(i)return RS(e,i,t)}function Iy(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function PS(e,n,t,r,i){const o=new Map;return ga(e,n,t,r,i,o,new Set),o}function sse(e,n,t,r,i){const o=new Map,s=new Set;for(const a of i)a.selectionSet&&ga(e,n,t,r,a.selectionSet,o,s);return o}function ga(e,n,t,r,i,o,s){for(const a of i.selections)switch(a.kind){case y.FIELD:{if(!zl(t,a))continue;const c=MS(a),l=o.get(c);l!==void 0?l.push(a):o.set(c,[a]);break}case y.INLINE_FRAGMENT:{if(!zl(t,a)||!Up(e,a,r))continue;ga(e,n,t,r,a.selectionSet,o,s);break}case y.FRAGMENT_SPREAD:{const c=a.name.value;if(s.has(c)||!zl(t,a))continue;s.add(c);const l=n[c];if(!l||!Up(e,l,r))continue;ga(e,n,t,r,l.selectionSet,o,s);break}}}function zl(e,n){const t=ma(dy,n,e);if((t==null?void 0:t.if)===!0)return!1;const r=ma(fy,n,e);return(r==null?void 0:r.if)!==!1}function Up(e,n,t){const r=n.typeCondition;if(!r)return!0;const i=mn(e,r);return i===t?!0:Wt(i)?e.isSubType(i,t):!1}function MS(e){return e.alias?e.alias.value:e.name.value}function qS(e){return{OperationDefinition(n){if(n.operation==="subscription"){const t=e.getSchema(),r=t.getSubscriptionType();if(r){const i=n.name?n.name.value:null,o=Object.create(null),s=e.getDocument(),a=Object.create(null);for(const l of s.definitions)l.kind===y.FRAGMENT_DEFINITION&&(a[l.name.value]=l);const c=PS(t,a,o,r,n.selectionSet);if(c.size>1){const f=[...c.values()].slice(1).flat();e.reportError(new L(i!=null?`Subscription "${i}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",f))}for(const l of c.values())l[0].name.value.startsWith("__")&&e.reportError(new L(i!=null?`Subscription "${i}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",l))}}}}}function Uf(e,n){const t=new Map;for(const r of e){const i=n(r),o=t.get(i);o===void 0?t.set(i,[r]):o.push(r)}return t}function $S(e){return{DirectiveDefinition(r){var i;const o=(i=r.arguments)!==null&&i!==void 0?i:[];return t(`@${r.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(r){var i;const o=r.name.value,s=(i=r.fields)!==null&&i!==void 0?i:[];for(const c of s){var a;const l=c.name.value,u=(a=c.arguments)!==null&&a!==void 0?a:[];t(`${o}.${l}`,u)}return!1}function t(r,i){const o=Uf(i,s=>s.name.value);for(const[s,a]of o)a.length>1&&e.reportError(new L(`Argument "${r}(${s}:)" can only be defined once.`,a.map(c=>c.name)));return!1}}function zf(e){return{Field:n,Directive:n};function n(t){var r;const i=(r=t.arguments)!==null&&r!==void 0?r:[],o=Uf(i,s=>s.name.value);for(const[s,a]of o)a.length>1&&e.reportError(new L(`There can be only one argument named "${s}".`,a.map(c=>c.name)))}}function Dy(e){const n=Object.create(null),t=e.getSchema();return{DirectiveDefinition(r){const i=r.name.value;if(t!=null&&t.getDirective(i)){e.reportError(new L(`Directive "@${i}" already exists in the schema. It cannot be redefined.`,r.name));return}return n[i]?e.reportError(new L(`There can be only one directive named "@${i}".`,[n[i],r.name])):n[i]=r.name,!1}}}function Bf(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Ar;for(const a of r)n[a.name]=!a.isRepeatable;const i=e.getDocument().definitions;for(const a of i)a.kind===y.DIRECTIVE_DEFINITION&&(n[a.name.value]=!a.repeatable);const o=Object.create(null),s=Object.create(null);return{enter(a){if(!("directives"in a)||!a.directives)return;let c;if(a.kind===y.SCHEMA_DEFINITION||a.kind===y.SCHEMA_EXTENSION)c=o;else if($o(a)||Mf(a)){const l=a.name.value;c=s[l],c===void 0&&(s[l]=c=Object.create(null))}else c=Object.create(null);for(const l of a.directives){const u=l.name.value;n[u]&&(c[u]?e.reportError(new L(`The directive "@${u}" can only be used once at this location.`,[c[u],l])):c[u]=l)}}}}function Ay(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{EnumTypeDefinition:i,EnumTypeExtension:i};function i(o){var s;const a=o.name.value;r[a]||(r[a]=Object.create(null));const c=(s=o.values)!==null&&s!==void 0?s:[],l=r[a];for(const u of c){const f=u.name.value,p=t[a];sn(p)&&p.getValue(f)?e.reportError(new L(`Enum value "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,u.name)):l[f]?e.reportError(new L(`Enum value "${a}.${f}" can only be defined once.`,[l[f],u.name])):l[f]=u.name}return!1}}function Oy(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{InputObjectTypeDefinition:i,InputObjectTypeExtension:i,InterfaceTypeDefinition:i,InterfaceTypeExtension:i,ObjectTypeDefinition:i,ObjectTypeExtension:i};function i(o){var s;const a=o.name.value;r[a]||(r[a]=Object.create(null));const c=(s=o.fields)!==null&&s!==void 0?s:[],l=r[a];for(const u of c){const f=u.name.value;jS(t[a],f)?e.reportError(new L(`Field "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,u.name)):l[f]?e.reportError(new L(`Field "${a}.${f}" can only be defined once.`,[l[f],u.name])):l[f]=u.name}return!1}}function jS(e,n){return me(e)||Ne(e)||je(e)?e.getFields()[n]!=null:!1}function VS(e){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const r=t.name.value;return n[r]?e.reportError(new L(`There can be only one fragment named "${r}".`,[n[r],t.name])):n[r]=t.name,!1}}}function Qf(e){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const r=n.pop();r||on(!1),t=r}},ObjectField(r){const i=r.name.value;t[i]?e.reportError(new L(`There can be only one input field named "${i}".`,[t[i],r.name])):t[i]=r.name}}}function US(e){const n=Object.create(null);return{OperationDefinition(t){const r=t.name;return r&&(n[r.value]?e.reportError(new L(`There can be only one operation named "${r.value}".`,[n[r.value],r])):n[r.value]=r),!1},FragmentDefinition:()=>!1}}function Ly(e){const n=e.getSchema(),t=Object.create(null),r=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:i,SchemaExtension:i};function i(o){var s;const a=(s=o.operationTypes)!==null&&s!==void 0?s:[];for(const c of a){const l=c.operation,u=t[l];r[l]?e.reportError(new L(`Type for ${l} already defined in the schema. It cannot be redefined.`,c)):u?e.reportError(new L(`There can be only one ${l} type in schema.`,[u,c])):t[l]=c}return!1}}function Fy(e){const n=Object.create(null),t=e.getSchema();return{ScalarTypeDefinition:r,ObjectTypeDefinition:r,InterfaceTypeDefinition:r,UnionTypeDefinition:r,EnumTypeDefinition:r,InputObjectTypeDefinition:r};function r(i){const o=i.name.value;if(t!=null&&t.getType(o)){e.reportError(new L(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,i.name));return}return n[o]?e.reportError(new L(`There can be only one type named "${o}".`,[n[o],i.name])):n[o]=i.name,!1}}function zS(e){return{OperationDefinition(n){var t;const r=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],i=Uf(r,o=>o.variable.name.value);for(const[o,s]of i)s.length>1&&e.reportError(new L(`There can be only one variable named "$${o}".`,s.map(a=>a.variable.name)))}}}function BS(e){return{ListValue(n){const t=Kv(e.getParentInputType());if(!Ae(t))return or(e,n),!1},ObjectValue(n){const t=tn(e.getInputType());if(!je(t))return or(e,n),!1;const r=Sr(n.fields,i=>i.name.value);for(const i of Object.values(t.getFields()))if(!r[i.name]&&ly(i)){const s=O(i.type);e.reportError(new L(`Field "${t.name}.${i.name}" of required type "${s}" was not provided.`,n))}},ObjectField(n){const t=tn(e.getParentInputType());if(!e.getInputType()&&je(t)){const i=rr(n.name.value,Object.keys(t.getFields()));e.reportError(new L(`Field "${n.name.value}" is not defined by type "${t.name}".`+It(i),n))}},NullValue(n){const t=e.getInputType();ie(t)&&e.reportError(new L(`Expected value of type "${O(t)}", found ${we(n)}.`,n))},EnumValue:n=>or(e,n),IntValue:n=>or(e,n),FloatValue:n=>or(e,n),StringValue:n=>or(e,n),BooleanValue:n=>or(e,n)}}function or(e,n){const t=e.getInputType();if(!t)return;const r=tn(t);if(!lt(r)){const i=O(t);e.reportError(new L(`Expected value of type "${i}", found ${we(n)}.`,n));return}try{if(r.parseLiteral(n,void 0)===void 0){const o=O(t);e.reportError(new L(`Expected value of type "${o}", found ${we(n)}.`,n))}}catch(i){const o=O(t);i instanceof L?e.reportError(i):e.reportError(new L(`Expected value of type "${o}", found ${we(n)}; `+i.message,n,void 0,void 0,void 0,i))}}function QS(e){return{VariableDefinition(n){const t=mn(e.getSchema(),n.type);if(t!==void 0&&!yn(t)){const r=n.variable.name.value,i=we(n.type);e.reportError(new L(`Variable "$${r}" cannot be non-input type "${i}".`,n.type))}}}}function HS(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i,type:o,defaultValue:s}of r){const a=i.name.value,c=n[a];if(c&&o){const l=e.getSchema(),u=mn(l,c.type);if(u&&!GS(l,u,c.defaultValue,o,s)){const f=O(u),p=O(o);e.reportError(new L(`Variable "$${a}" of type "${f}" used in position expecting type "${p}".`,[c,i]))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function GS(e,n,t,r,i){if(ie(r)&&!ie(n)){if(!(t!=null&&t.kind!==y.NULL)&&!(i!==void 0))return!1;const a=r.ofType;return ti(e,n,a)}return ti(e,n,r)}const Ry=Object.freeze([yy,US,pS,qS,$f,lS,QS,AS,oS,VS,Ey,wy,bS,hS,zS,mS,gS,qf,Bf,cS,zf,BS,IS,HS,yS,Qf]),WS=Object.freeze([Sy,Ly,Fy,Ay,Oy,$S,Dy,$f,qf,Bf,xy,_y,zf,Qf,Ny]);class Py{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const r of this.getDocument().definitions)r.kind===y.FRAGMENT_DEFINITION&&(t[r.name.value]=r);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const r=[n];let i;for(;i=r.pop();)for(const o of i.selections)o.kind===y.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&r.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const r=Object.create(null),i=[n.selectionSet];let o;for(;o=i.pop();)for(const s of this.getFragmentSpreads(o)){const a=s.name.value;if(r[a]!==!0){r[a]=!0;const c=this.getFragment(a);c&&(t.push(c),i.push(c.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class YS extends Py{constructor(n,t,r){super(n,r),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}class JS extends Py{constructor(n,t,r,i){super(t,i),this._schema=n,this._typeInfo=r,this._variableUsages=new Map,this._recursiveVariableUsages=new Map}get[Symbol.toStringTag](){return"ValidationContext"}getSchema(){return this._schema}getVariableUsages(n){let t=this._variableUsages.get(n);if(!t){const r=[],i=new Xa(this._schema);Mn(n,Rf(i,{VariableDefinition:()=>!1,Variable(o){r.push({node:o,type:i.getInputType(),defaultValue:i.getDefaultValue()})}})),t=r,this._variableUsages.set(n,t)}return t}getRecursiveVariableUsages(n){let t=this._recursiveVariableUsages.get(n);if(!t){t=this.getVariableUsages(n);for(const r of this.getRecursivelyReferencedFragments(n))t=t.concat(this.getVariableUsages(r));this._recursiveVariableUsages.set(n,t)}return t}getType(){return this._typeInfo.getType()}getParentType(){return this._typeInfo.getParentType()}getInputType(){return this._typeInfo.getInputType()}getParentInputType(){return this._typeInfo.getParentInputType()}getFieldDef(){return this._typeInfo.getFieldDef()}getDirective(){return this._typeInfo.getDirective()}getArgument(){return this._typeInfo.getArgument()}getEnumValue(){return this._typeInfo.getEnumValue()}}function My(e,n,t=Ry,r,i=new Xa(e)){var o;const s=(o=r==null?void 0:r.maxErrors)!==null&&o!==void 0?o:100;n||ce(!1,"Must provide document."),H1(e);const a=Object.freeze({}),c=[],l=new JS(e,n,i,f=>{if(c.length>=s)throw c.push(new L("Too many validation errors, error limit reached. Validation aborted.")),a;c.push(f)}),u=Zv(t.map(f=>f(l)));try{Mn(n,Rf(i,u))}catch(f){if(f!==a)throw f}return c}function qy(e,n,t=WS){const r=[],i=new YS(e,n,s=>{r.push(s)}),o=t.map(s=>s(i));return Mn(e,Zv(o)),r}function ZS(e){const n=qy(e);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function XS(e,n){const t=qy(e,n);if(t.length!==0)throw new Error(t.map(r=>r.message).join(`

`))}function KS(e){return{Field(n){const t=e.getFieldDef(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=e.getParentType();i!=null||on(!1),e.reportError(new L(`The field ${i.name}.${t.name} is deprecated. ${r}`,n))}},Argument(n){const t=e.getArgument(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=e.getDirective();if(i!=null)e.reportError(new L(`Directive "@${i.name}" argument "${t.name}" is deprecated. ${r}`,n));else{const o=e.getParentType(),s=e.getFieldDef();o!=null&&s!=null||on(!1),e.reportError(new L(`Field "${o.name}.${s.name}" argument "${t.name}" is deprecated. ${r}`,n))}}},ObjectField(n){const t=tn(e.getParentInputType());if(je(t)){const r=t.getFields()[n.name.value],i=r==null?void 0:r.deprecationReason;i!=null&&e.reportError(new L(`The input field ${t.name}.${r.name} is deprecated. ${i}`,n))}},EnumValue(n){const t=e.getEnumValue(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=tn(e.getInputType());i!=null||on(!1),e.reportError(new L(`The enum value "${i.name}.${t.name}" is deprecated. ${r}`,n))}}}}function ew(e){const n=ue({descriptions:!0,specifiedByUrl:!1,directiveIsRepeatable:!1,schemaDescription:!1,inputValueDeprecation:!1},e),t=n.descriptions?"description":"",r=n.specifiedByUrl?"specifiedByURL":"",i=n.directiveIsRepeatable?"isRepeatable":"",o=n.schemaDescription?t:"";function s(a){return n.inputValueDeprecation?a:""}return`
    query IntrospectionQuery {
      __schema {
        ${o}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${t}
          ${i}
          locations
          args${s("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${t}
      ${r}
      fields(includeDeprecated: true) {
        name
        ${t}
        args${s("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${s("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${t}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${t}
      type { ...TypeRef }
      defaultValue
      ${s("isDeprecated")}
      ${s("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `}function nw(e,n){st(e)&&st(e.__schema)||ce(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${O(e)}.`);const t=e.__schema,r=fr(t.types,b=>b.name,b=>p(b));for(const b of[...Ya,...qo])r[b.name]&&(r[b.name]=b);const i=t.queryType?u(t.queryType):null,o=t.mutationType?u(t.mutationType):null,s=t.subscriptionType?u(t.subscriptionType):null,a=t.directives?t.directives.map(M):[];return new Za({description:t.description,query:i,mutation:o,subscription:s,types:Object.values(r),directives:a,assumeValid:n==null?void 0:n.assumeValid});function c(b){if(b.kind===ve.LIST){const I=b.ofType;if(!I)throw new Error("Decorated type deeper than introspection query.");return new Qe(c(I))}if(b.kind===ve.NON_NULL){const I=b.ofType;if(!I)throw new Error("Decorated type deeper than introspection query.");const J=c(I);return new re(q1(J))}return l(b)}function l(b){const I=b.name;if(!I)throw new Error(`Unknown type reference: ${O(b)}.`);const J=r[I];if(!J)throw new Error(`Invalid or incomplete schema, unknown type: ${I}. Ensure that a full introspection query is used in order to build a client schema.`);return J}function u(b){return P1(l(b))}function f(b){return M1(l(b))}function p(b){if(b!=null&&b.name!=null&&b.kind!=null)switch(b.kind){case ve.SCALAR:return h(b);case ve.OBJECT:return E(b);case ve.INTERFACE:return w(b);case ve.UNION:return g(b);case ve.ENUM:return m(b);case ve.INPUT_OBJECT:return v(b)}const I=O(b);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${I}.`)}function h(b){return new At({name:b.name,description:b.description,specifiedByURL:b.specifiedByURL})}function d(b){if(b.interfaces===null&&b.kind===ve.INTERFACE)return[];if(!b.interfaces){const I=O(b);throw new Error(`Introspection result missing interfaces: ${I}.`)}return b.interfaces.map(f)}function E(b){return new wn({name:b.name,description:b.description,interfaces:()=>d(b),fields:()=>S(b)})}function w(b){return new wo({name:b.name,description:b.description,interfaces:()=>d(b),fields:()=>S(b)})}function g(b){if(!b.possibleTypes){const I=O(b);throw new Error(`Introspection result missing possibleTypes: ${I}.`)}return new ko({name:b.name,description:b.description,types:()=>b.possibleTypes.map(u)})}function m(b){if(!b.enumValues){const I=O(b);throw new Error(`Introspection result missing enumValues: ${I}.`)}return new wr({name:b.name,description:b.description,values:fr(b.enumValues,I=>I.name,I=>({description:I.description,deprecationReason:I.deprecationReason}))})}function v(b){if(!b.inputFields){const I=O(b);throw new Error(`Introspection result missing inputFields: ${I}.`)}return new fa({name:b.name,description:b.description,fields:()=>k(b.inputFields)})}function S(b){if(!b.fields)throw new Error(`Introspection result missing fields: ${O(b)}.`);return fr(b.fields,I=>I.name,N)}function N(b){const I=c(b.type);if(!gr(I)){const J=O(I);throw new Error(`Introspection must provide output type for fields, but received: ${J}.`)}if(!b.args){const J=O(b);throw new Error(`Introspection result missing field args: ${J}.`)}return{description:b.description,deprecationReason:b.deprecationReason,type:I,args:k(b.args)}}function k(b){return fr(b,I=>I.name,A)}function A(b){const I=c(b.type);if(!yn(I)){const G=O(I);throw new Error(`Introspection must provide input type for arguments, but received: ${G}.`)}const J=b.defaultValue!=null?kt(T1(b.defaultValue),I):void 0;return{description:b.description,type:I,defaultValue:J,deprecationReason:b.deprecationReason}}function M(b){if(!b.args){const I=O(b);throw new Error(`Introspection result missing directive args: ${I}.`)}if(!b.locations){const I=O(b);throw new Error(`Introspection result missing directive locations: ${I}.`)}return new Kt({name:b.name,description:b.description,isRepeatable:b.isRepeatable,locations:b.locations.slice(),args:k(b.args)})}}function ase(e,n,t){my(e),n!=null&&n.kind===y.DOCUMENT||ce(!1,"Must provide valid Document AST."),(t==null?void 0:t.assumeValid)!==!0&&(t==null?void 0:t.assumeValidSDL)!==!0&&XS(n,e);const r=e.toConfig(),i=$y(r,n,t);return r===i?e:new Za(i)}function $y(e,n,t){var r,i,o,s;const a=[],c=Object.create(null),l=[];let u;const f=[];for(const x of n.definitions)if(x.kind===y.SCHEMA_DEFINITION)u=x;else if(x.kind===y.SCHEMA_EXTENSION)f.push(x);else if($o(x))a.push(x);else if(Mf(x)){const j=x.name.value,P=c[j];c[j]=P?P.concat([x]):[x]}else x.kind===y.DIRECTIVE_DEFINITION&&l.push(x);if(Object.keys(c).length===0&&a.length===0&&l.length===0&&f.length===0&&u==null)return e;const p=Object.create(null);for(const x of e.types)p[x.name]=m(x);for(const x of a){var h;const j=x.name.value;p[j]=(h=zp[j])!==null&&h!==void 0?h:K(x)}const d=ue(ue({query:e.query&&w(e.query),mutation:e.mutation&&w(e.mutation),subscription:e.subscription&&w(e.subscription)},u&&J([u])),J(f));return Pe(ue({description:(r=u)===null||r===void 0||(i=r.description)===null||i===void 0?void 0:i.value},d),{types:Object.values(p),directives:[...e.directives.map(g),...l.map(F)],extensions:Object.create(null),astNode:(o=u)!==null&&o!==void 0?o:e.astNode,extensionASTNodes:e.extensionASTNodes.concat(f),assumeValid:(s=t==null?void 0:t.assumeValid)!==null&&s!==void 0?s:!1});function E(x){return Ae(x)?new Qe(E(x.ofType)):ie(x)?new re(E(x.ofType)):w(x)}function w(x){return p[x.name]}function g(x){const j=x.toConfig();return new Kt(Pe(ue({},j),{args:_t(j.args,I)}))}function m(x){if(Lf(x)||z1(x))return x;if(ut(x))return N(x);if(me(x))return k(x);if(Ne(x))return A(x);if(bn(x))return M(x);if(sn(x))return S(x);if(je(x))return v(x);on(!1,"Unexpected type: "+O(x))}function v(x){var j;const P=x.toConfig(),T=(j=c[P.name])!==null&&j!==void 0?j:[];return new fa(Pe(ue({},P),{fields:()=>ue(ue({},_t(P.fields,$=>Pe(ue({},$),{type:E($.type)}))),ye(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function S(x){var j;const P=x.toConfig(),T=(j=c[x.name])!==null&&j!==void 0?j:[];return new wr(Pe(ue({},P),{values:ue(ue({},P.values),R(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function N(x){var j;const P=x.toConfig(),T=(j=c[P.name])!==null&&j!==void 0?j:[];let $=P.specifiedByURL;for(const Y of T){var W;$=(W=Bp(Y))!==null&&W!==void 0?W:$}return new At(Pe(ue({},P),{specifiedByURL:$,extensionASTNodes:P.extensionASTNodes.concat(T)}))}function k(x){var j;const P=x.toConfig(),T=(j=c[P.name])!==null&&j!==void 0?j:[];return new wn(Pe(ue({},P),{interfaces:()=>[...x.getInterfaces().map(w),...H(T)],fields:()=>ue(ue({},_t(P.fields,b)),z(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function A(x){var j;const P=x.toConfig(),T=(j=c[P.name])!==null&&j!==void 0?j:[];return new wo(Pe(ue({},P),{interfaces:()=>[...x.getInterfaces().map(w),...H(T)],fields:()=>ue(ue({},_t(P.fields,b)),z(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function M(x){var j;const P=x.toConfig(),T=(j=c[P.name])!==null&&j!==void 0?j:[];return new ko(Pe(ue({},P),{types:()=>[...x.getTypes().map(w),...B(T)],extensionASTNodes:P.extensionASTNodes.concat(T)}))}function b(x){return Pe(ue({},x),{type:E(x.type),args:x.args&&_t(x.args,I)})}function I(x){return Pe(ue({},x),{type:E(x.type)})}function J(x){const j={};for(const T of x){var P;const $=(P=T.operationTypes)!==null&&P!==void 0?P:[];for(const W of $)j[W.operation]=G(W.type)}return j}function G(x){var j;const P=x.name.value,T=(j=zp[P])!==null&&j!==void 0?j:p[P];if(T===void 0)throw new Error(`Unknown type: "${P}".`);return T}function ne(x){return x.kind===y.LIST_TYPE?new Qe(ne(x.type)):x.kind===y.NON_NULL_TYPE?new re(ne(x.type)):G(x)}function F(x){var j;return new Kt({name:x.name.value,description:(j=x.description)===null||j===void 0?void 0:j.value,locations:x.locations.map(({value:P})=>P),isRepeatable:x.repeatable,args:U(x.arguments),astNode:x})}function z(x){const j=Object.create(null);for(const $ of x){var P;const W=(P=$.fields)!==null&&P!==void 0?P:[];for(const Y of W){var T;j[Y.name.value]={type:ne(Y.type),description:(T=Y.description)===null||T===void 0?void 0:T.value,args:U(Y.arguments),deprecationReason:hs(Y),astNode:Y}}}return j}function U(x){const j=x!=null?x:[],P=Object.create(null);for(const $ of j){var T;const W=ne($.type);P[$.name.value]={type:W,description:(T=$.description)===null||T===void 0?void 0:T.value,defaultValue:kt($.defaultValue,W),deprecationReason:hs($),astNode:$}}return P}function ye(x){const j=Object.create(null);for(const $ of x){var P;const W=(P=$.fields)!==null&&P!==void 0?P:[];for(const Y of W){var T;const ge=ne(Y.type);j[Y.name.value]={type:ge,description:(T=Y.description)===null||T===void 0?void 0:T.value,defaultValue:kt(Y.defaultValue,ge),deprecationReason:hs(Y),astNode:Y}}}return j}function R(x){const j=Object.create(null);for(const $ of x){var P;const W=(P=$.values)!==null&&P!==void 0?P:[];for(const Y of W){var T;j[Y.name.value]={description:(T=Y.description)===null||T===void 0?void 0:T.value,deprecationReason:hs(Y),astNode:Y}}}return j}function H(x){return x.flatMap(j=>{var P,T;return(P=(T=j.interfaces)===null||T===void 0?void 0:T.map(G))!==null&&P!==void 0?P:[]})}function B(x){return x.flatMap(j=>{var P,T;return(P=(T=j.types)===null||T===void 0?void 0:T.map(G))!==null&&P!==void 0?P:[]})}function K(x){var j;const P=x.name.value,T=(j=c[P])!==null&&j!==void 0?j:[];switch(x.kind){case y.OBJECT_TYPE_DEFINITION:{var $;const pe=[x,...T];return new wn({name:P,description:($=x.description)===null||$===void 0?void 0:$.value,interfaces:()=>H(pe),fields:()=>z(pe),astNode:x,extensionASTNodes:T})}case y.INTERFACE_TYPE_DEFINITION:{var W;const pe=[x,...T];return new wo({name:P,description:(W=x.description)===null||W===void 0?void 0:W.value,interfaces:()=>H(pe),fields:()=>z(pe),astNode:x,extensionASTNodes:T})}case y.ENUM_TYPE_DEFINITION:{var Y;const pe=[x,...T];return new wr({name:P,description:(Y=x.description)===null||Y===void 0?void 0:Y.value,values:R(pe),astNode:x,extensionASTNodes:T})}case y.UNION_TYPE_DEFINITION:{var ge;const pe=[x,...T];return new ko({name:P,description:(ge=x.description)===null||ge===void 0?void 0:ge.value,types:()=>B(pe),astNode:x,extensionASTNodes:T})}case y.SCALAR_TYPE_DEFINITION:{var Te;return new At({name:P,description:(Te=x.description)===null||Te===void 0?void 0:Te.value,specifiedByURL:Bp(x),astNode:x,extensionASTNodes:T})}case y.INPUT_OBJECT_TYPE_DEFINITION:{var ae;const pe=[x,...T];return new fa({name:P,description:(ae=x.description)===null||ae===void 0?void 0:ae.value,fields:()=>ye(pe),astNode:x,extensionASTNodes:T})}}}}const zp=Sr([...Ya,...qo],e=>e.name);function hs(e){const n=ma(Nf,e);return n==null?void 0:n.reason}function Bp(e){const n=ma(py,e);return n==null?void 0:n.url}function tw(e,n){e!=null&&e.kind===y.DOCUMENT||ce(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&ZS(e);const r=$y({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},e,n);if(r.astNode==null)for(const o of r.types)switch(o.name){case"Query":r.query=o;break;case"Mutation":r.mutation=o;break;case"Subscription":r.subscription=o;break}const i=[...r.directives,...Ar.filter(o=>r.directives.every(s=>s.name!==o.name))];return new Za(Pe(ue({},r),{directives:i}))}function rw(e,n){const t=at(e,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return tw(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}var iw=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||t.forEach(function(i){e.addRange(i)}),n&&n.focus()}},ow=iw,Qp={"text/plain":"Text","text/html":"Url",default:"Text"},sw="Copy to clipboard: #{key}, Enter";function aw(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}function lw(e,n){var t,r,i,o,s,a,c=!1;n||(n={}),t=n.debug||!1;try{i=ow(),o=document.createRange(),s=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(u){if(u.stopPropagation(),n.format)if(u.preventDefault(),typeof u.clipboardData=="undefined"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=Qp[n.format]||Qp.default;window.clipboardData.setData(f,e)}else u.clipboardData.clearData(),u.clipboardData.setData(n.format,e);n.onCopy&&(u.preventDefault(),n.onCopy(u.clipboardData))}),document.body.appendChild(a),o.selectNodeContents(a),s.addRange(o);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");c=!0}catch(u){t&&console.error("unable to copy using execCommand: ",u),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),c=!0}catch(f){t&&console.error("unable to copy using clipboardData: ",f),t&&console.error("falling back to prompt"),r=aw("message"in n?n.message:sw),window.prompt(r,e)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(o):s.removeAllRanges()),a&&document.body.removeChild(a),i()}return c}var cw=lw,Hp;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(Hp||(Hp={}));var va;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(va||(va={}));var et;(function(e){function n(r,i){return r===Number.MAX_VALUE&&(r=va.MAX_VALUE),i===Number.MAX_VALUE&&(i=va.MAX_VALUE),{line:r,character:i}}e.create=n;function t(r){var i=r;return C.objectLiteral(i)&&C.uinteger(i.line)&&C.uinteger(i.character)}e.is=t})(et||(et={}));var Ge;(function(e){function n(r,i,o,s){if(C.uinteger(r)&&C.uinteger(i)&&C.uinteger(o)&&C.uinteger(s))return{start:et.create(r,i),end:et.create(o,s)};if(et.is(r)&&et.is(i))return{start:r,end:i};throw new Error("Range#create called with invalid arguments["+r+", "+i+", "+o+", "+s+"]")}e.create=n;function t(r){var i=r;return C.objectLiteral(i)&&et.is(i.start)&&et.is(i.end)}e.is=t})(Ge||(Ge={}));var uu;(function(e){function n(r,i){return{uri:r,range:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.string(i.uri)||C.undefined(i.uri))}e.is=t})(uu||(uu={}));var Gp;(function(e){function n(r,i,o,s){return{targetUri:r,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.targetRange)&&C.string(i.targetUri)&&(Ge.is(i.targetSelectionRange)||C.undefined(i.targetSelectionRange))&&(Ge.is(i.originSelectionRange)||C.undefined(i.originSelectionRange))}e.is=t})(Gp||(Gp={}));var fu;(function(e){function n(r,i,o,s){return{red:r,green:i,blue:o,alpha:s}}e.create=n;function t(r){var i=r;return C.numberRange(i.red,0,1)&&C.numberRange(i.green,0,1)&&C.numberRange(i.blue,0,1)&&C.numberRange(i.alpha,0,1)}e.is=t})(fu||(fu={}));var Wp;(function(e){function n(r,i){return{range:r,color:i}}e.create=n;function t(r){var i=r;return Ge.is(i.range)&&fu.is(i.color)}e.is=t})(Wp||(Wp={}));var Yp;(function(e){function n(r,i,o){return{label:r,textEdit:i,additionalTextEdits:o}}e.create=n;function t(r){var i=r;return C.string(i.label)&&(C.undefined(i.textEdit)||Yt.is(i))&&(C.undefined(i.additionalTextEdits)||C.typedArray(i.additionalTextEdits,Yt.is))}e.is=t})(Yp||(Yp={}));var Jp;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(Jp||(Jp={}));var Zp;(function(e){function n(r,i,o,s,a){var c={startLine:r,endLine:i};return C.defined(o)&&(c.startCharacter=o),C.defined(s)&&(c.endCharacter=s),C.defined(a)&&(c.kind=a),c}e.create=n;function t(r){var i=r;return C.uinteger(i.startLine)&&C.uinteger(i.startLine)&&(C.undefined(i.startCharacter)||C.uinteger(i.startCharacter))&&(C.undefined(i.endCharacter)||C.uinteger(i.endCharacter))&&(C.undefined(i.kind)||C.string(i.kind))}e.is=t})(Zp||(Zp={}));var du;(function(e){function n(r,i){return{location:r,message:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&uu.is(i.location)&&C.string(i.message)}e.is=t})(du||(du={}));var Xp;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(Xp||(Xp={}));var Kp;(function(e){e.Unnecessary=1,e.Deprecated=2})(Kp||(Kp={}));var eh;(function(e){function n(t){var r=t;return r!=null&&C.string(r.href)}e.is=n})(eh||(eh={}));var ya;(function(e){function n(r,i,o,s,a,c){var l={range:r,message:i};return C.defined(o)&&(l.severity=o),C.defined(s)&&(l.code=s),C.defined(a)&&(l.source=a),C.defined(c)&&(l.relatedInformation=c),l}e.create=n;function t(r){var i,o=r;return C.defined(o)&&Ge.is(o.range)&&C.string(o.message)&&(C.number(o.severity)||C.undefined(o.severity))&&(C.integer(o.code)||C.string(o.code)||C.undefined(o.code))&&(C.undefined(o.codeDescription)||C.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(C.string(o.source)||C.undefined(o.source))&&(C.undefined(o.relatedInformation)||C.typedArray(o.relatedInformation,du.is))}e.is=t})(ya||(ya={}));var bo;(function(e){function n(r,i){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var a={title:r,command:i};return C.defined(o)&&o.length>0&&(a.arguments=o),a}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.title)&&C.string(i.command)}e.is=t})(bo||(bo={}));var Yt;(function(e){function n(o,s){return{range:o,newText:s}}e.replace=n;function t(o,s){return{range:{start:o,end:o},newText:s}}e.insert=t;function r(o){return{range:o,newText:""}}e.del=r;function i(o){var s=o;return C.objectLiteral(s)&&C.string(s.newText)&&Ge.is(s.range)}e.is=i})(Yt||(Yt={}));var ri;(function(e){function n(r,i,o){var s={label:r};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}e.create=n;function t(r){var i=r;return i!==void 0&&C.objectLiteral(i)&&C.string(i.label)&&(C.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(C.string(i.description)||i.description===void 0)}e.is=t})(ri||(ri={}));var Xe;(function(e){function n(t){var r=t;return typeof r=="string"}e.is=n})(Xe||(Xe={}));var Mt;(function(e){function n(o,s,a){return{range:o,newText:s,annotationId:a}}e.replace=n;function t(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}e.insert=t;function r(o,s){return{range:o,newText:"",annotationId:s}}e.del=r;function i(o){var s=o;return Yt.is(s)&&(ri.is(s.annotationId)||Xe.is(s.annotationId))}e.is=i})(Mt||(Mt={}));var _a;(function(e){function n(r,i){return{textDocument:r,edits:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ea.is(i.textDocument)&&Array.isArray(i.edits)}e.is=t})(_a||(_a={}));var To;(function(e){function n(r,i,o){var s={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}e.create=n;function t(r){var i=r;return i&&i.kind==="create"&&C.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}e.is=t})(To||(To={}));var xo;(function(e){function n(r,i,o,s){var a={kind:"rename",oldUri:r,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}e.create=n;function t(r){var i=r;return i&&i.kind==="rename"&&C.string(i.oldUri)&&C.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}e.is=t})(xo||(xo={}));var No;(function(e){function n(r,i,o){var s={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}e.create=n;function t(r){var i=r;return i&&i.kind==="delete"&&C.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||C.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||C.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}e.is=t})(No||(No={}));var pu;(function(e){function n(t){var r=t;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(i){return C.string(i.kind)?To.is(i)||xo.is(i)||No.is(i):_a.is(i)}))}e.is=n})(pu||(pu={}));var ms=function(){function e(n,t){this.edits=n,this.changeAnnotations=t}return e.prototype.insert=function(n,t,r){var i,o;if(r===void 0?i=Yt.insert(n,t):Xe.is(r)?(o=r,i=Mt.insert(n,t,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),i=Mt.insert(n,t,o)),this.edits.push(i),o!==void 0)return o},e.prototype.replace=function(n,t,r){var i,o;if(r===void 0?i=Yt.replace(n,t):Xe.is(r)?(o=r,i=Mt.replace(n,t,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),i=Mt.replace(n,t,o)),this.edits.push(i),o!==void 0)return o},e.prototype.delete=function(n,t){var r,i;if(t===void 0?r=Yt.del(n):Xe.is(t)?(i=t,r=Mt.del(n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=Mt.del(n,i)),this.edits.push(r),i!==void 0)return i},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),nh=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,t){var r;if(Xe.is(n)?r=n:(r=this.nextId(),t=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(t===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=t,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var t=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new nh(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(_a.is(r)){var i=new ms(r.edits,t._changeAnnotations);t._textEditChanges[r.textDocument.uri]=i}})):n.changes&&Object.keys(n.changes).forEach(function(r){var i=new ms(n.changes[r]);t._textEditChanges[r]=i})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(Ea.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t={uri:n.uri,version:n.version},r=this._textEditChanges[t.uri];if(!r){var i=[],o={textDocument:t,edits:i};this._workspaceEdit.documentChanges.push(o),r=new ms(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var i=[];this._workspaceEdit.changes[n]=i,r=new ms(i),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new nh,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,t,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i;ri.is(t)||Xe.is(t)?i=t:r=t;var o,s;if(i===void 0?o=To.create(n,r):(s=Xe.is(i)?i:this._changeAnnotations.manage(i),o=To.create(n,r,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s},e.prototype.renameFile=function(n,t,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o;ri.is(r)||Xe.is(r)?o=r:i=r;var s,a;if(o===void 0?s=xo.create(n,t,i):(a=Xe.is(o)?o:this._changeAnnotations.manage(o),s=xo.create(n,t,i,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a},e.prototype.deleteFile=function(n,t,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i;ri.is(t)||Xe.is(t)?i=t:r=t;var o,s;if(i===void 0?o=No.create(n,r):(s=Xe.is(i)?i:this._changeAnnotations.manage(i),o=No.create(n,r,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s},e})();var th;(function(e){function n(r){return{uri:r}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)}e.is=t})(th||(th={}));var rh;(function(e){function n(r,i){return{uri:r,version:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&C.integer(i.version)}e.is=t})(rh||(rh={}));var Ea;(function(e){function n(r,i){return{uri:r,version:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&(i.version===null||C.integer(i.version))}e.is=t})(Ea||(Ea={}));var ih;(function(e){function n(r,i,o,s){return{uri:r,languageId:i,version:o,text:s}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&C.string(i.languageId)&&C.integer(i.version)&&C.string(i.text)}e.is=t})(ih||(ih={}));var Co;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(Co||(Co={}));(function(e){function n(t){var r=t;return r===e.PlainText||r===e.Markdown}e.is=n})(Co||(Co={}));var hu;(function(e){function n(t){var r=t;return C.objectLiteral(t)&&Co.is(r.kind)&&C.string(r.value)}e.is=n})(hu||(hu={}));var oh;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(oh||(oh={}));var sh;(function(e){e.PlainText=1,e.Snippet=2})(sh||(sh={}));var ah;(function(e){e.Deprecated=1})(ah||(ah={}));var lh;(function(e){function n(r,i,o){return{newText:r,insert:i,replace:o}}e.create=n;function t(r){var i=r;return i&&C.string(i.newText)&&Ge.is(i.insert)&&Ge.is(i.replace)}e.is=t})(lh||(lh={}));var ch;(function(e){e.asIs=1,e.adjustIndentation=2})(ch||(ch={}));var uh;(function(e){function n(t){return{label:t}}e.create=n})(uh||(uh={}));var fh;(function(e){function n(t,r){return{items:t||[],isIncomplete:!!r}}e.create=n})(fh||(fh={}));var Sa;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function t(r){var i=r;return C.string(i)||C.objectLiteral(i)&&C.string(i.language)&&C.string(i.value)}e.is=t})(Sa||(Sa={}));var dh;(function(e){function n(t){var r=t;return!!r&&C.objectLiteral(r)&&(hu.is(r.contents)||Sa.is(r.contents)||C.typedArray(r.contents,Sa.is))&&(t.range===void 0||Ge.is(t.range))}e.is=n})(dh||(dh={}));var ph;(function(e){function n(t,r){return r?{label:t,documentation:r}:{label:t}}e.create=n})(ph||(ph={}));var hh;(function(e){function n(t,r){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var s={label:t};return C.defined(r)&&(s.documentation=r),C.defined(i)?s.parameters=i:s.parameters=[],s}e.create=n})(hh||(hh={}));var mh;(function(e){e.Text=1,e.Read=2,e.Write=3})(mh||(mh={}));var gh;(function(e){function n(t,r){var i={range:t};return C.number(r)&&(i.kind=r),i}e.create=n})(gh||(gh={}));var vh;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(vh||(vh={}));var yh;(function(e){e.Deprecated=1})(yh||(yh={}));var _h;(function(e){function n(t,r,i,o,s){var a={name:t,kind:r,location:{uri:o,range:i}};return s&&(a.containerName=s),a}e.create=n})(_h||(_h={}));var Eh;(function(e){function n(r,i,o,s,a,c){var l={name:r,detail:i,kind:o,range:s,selectionRange:a};return c!==void 0&&(l.children=c),l}e.create=n;function t(r){var i=r;return i&&C.string(i.name)&&C.number(i.kind)&&Ge.is(i.range)&&Ge.is(i.selectionRange)&&(i.detail===void 0||C.string(i.detail))&&(i.deprecated===void 0||C.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}e.is=t})(Eh||(Eh={}));var Sh;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Sh||(Sh={}));var wh;(function(e){function n(r,i){var o={diagnostics:r};return i!=null&&(o.only=i),o}e.create=n;function t(r){var i=r;return C.defined(i)&&C.typedArray(i.diagnostics,ya.is)&&(i.only===void 0||C.typedArray(i.only,C.string))}e.is=t})(wh||(wh={}));var kh;(function(e){function n(r,i,o){var s={title:r},a=!0;return typeof i=="string"?(a=!1,s.kind=i):bo.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}e.create=n;function t(r){var i=r;return i&&C.string(i.title)&&(i.diagnostics===void 0||C.typedArray(i.diagnostics,ya.is))&&(i.kind===void 0||C.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||bo.is(i.command))&&(i.isPreferred===void 0||C.boolean(i.isPreferred))&&(i.edit===void 0||pu.is(i.edit))}e.is=t})(kh||(kh={}));var bh;(function(e){function n(r,i){var o={range:r};return C.defined(i)&&(o.data=i),o}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.undefined(i.command)||bo.is(i.command))}e.is=t})(bh||(bh={}));var Th;(function(e){function n(r,i){return{tabSize:r,insertSpaces:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.uinteger(i.tabSize)&&C.boolean(i.insertSpaces)}e.is=t})(Th||(Th={}));var xh;(function(e){function n(r,i,o){return{range:r,target:i,data:o}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.undefined(i.target)||C.string(i.target))}e.is=t})(xh||(xh={}));var Nh;(function(e){function n(r,i){return{range:r,parent:i}}e.create=n;function t(r){var i=r;return i!==void 0&&Ge.is(i.range)&&(i.parent===void 0||e.is(i.parent))}e.is=t})(Nh||(Nh={}));var Ch;(function(e){function n(o,s,a,c){return new uw(o,s,a,c)}e.create=n;function t(o){var s=o;return!!(C.defined(s)&&C.string(s.uri)&&(C.undefined(s.languageId)||C.string(s.languageId))&&C.uinteger(s.lineCount)&&C.func(s.getText)&&C.func(s.positionAt)&&C.func(s.offsetAt))}e.is=t;function r(o,s){for(var a=o.getText(),c=i(s,function(d,E){var w=d.range.start.line-E.range.start.line;return w===0?d.range.start.character-E.range.start.character:w}),l=a.length,u=c.length-1;u>=0;u--){var f=c[u],p=o.offsetAt(f.range.start),h=o.offsetAt(f.range.end);if(h<=l)a=a.substring(0,p)+f.newText+a.substring(h,a.length);else throw new Error("Overlapping edit");l=p}return a}e.applyEdits=r;function i(o,s){if(o.length<=1)return o;var a=o.length/2|0,c=o.slice(0,a),l=o.slice(a);i(c,s),i(l,s);for(var u=0,f=0,p=0;u<c.length&&f<l.length;){var h=s(c[u],l[f]);h<=0?o[p++]=c[u++]:o[p++]=l[f++]}for(;u<c.length;)o[p++]=c[u++];for(;f<l.length;)o[p++]=l[f++];return o}})(Ch||(Ch={}));var uw=function(){function e(n,t,r,i){this._uri=n,this._languageId=t,this._version=r,this._content=i,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var t=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(t,r)}return this._content},e.prototype.update=function(n,t){this._content=n.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],t=this._content,r=!0,i=0;i<t.length;i++){r&&(n.push(i),r=!1);var o=t.charAt(i);r=o==="\r"||o===`
`,o==="\r"&&i+1<t.length&&t.charAt(i+1)===`
`&&i++}r&&t.length>0&&n.push(t.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var t=this.getLineOffsets(),r=0,i=t.length;if(i===0)return et.create(0,n);for(;r<i;){var o=Math.floor((r+i)/2);t[o]>n?i=o:r=o+1}var s=r-1;return et.create(s,n-t[s])},e.prototype.offsetAt=function(n){var t=this.getLineOffsets();if(n.line>=t.length)return this._content.length;if(n.line<0)return 0;var r=t[n.line],i=n.line+1<t.length?t[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,i),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),C;(function(e){var n=Object.prototype.toString;function t(h){return typeof h!="undefined"}e.defined=t;function r(h){return typeof h=="undefined"}e.undefined=r;function i(h){return h===!0||h===!1}e.boolean=i;function o(h){return n.call(h)==="[object String]"}e.string=o;function s(h){return n.call(h)==="[object Number]"}e.number=s;function a(h,d,E){return n.call(h)==="[object Number]"&&d<=h&&h<=E}e.numberRange=a;function c(h){return n.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}e.integer=c;function l(h){return n.call(h)==="[object Number]"&&0<=h&&h<=2147483647}e.uinteger=l;function u(h){return n.call(h)==="[object Function]"}e.func=u;function f(h){return h!==null&&typeof h=="object"}e.objectLiteral=f;function p(h,d){return Array.isArray(h)&&h.every(d)}e.typedArray=p})(C||(C={}));class fw{constructor(n){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>this._pos===0,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const t=this._sourceText.charAt(this._pos);return this._pos++,t},this.eat=t=>{if(this._testNextCharacter(t))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=t=>{let r=this._testNextCharacter(t),i=!1;for(r&&(i=r,this._start=this._pos);r;)this._pos++,r=this._testNextCharacter(t),i=!0;return i},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=t=>{this._pos=t},this.match=(t,r=!0,i=!1)=>{let o=null,s=null;return typeof t=="string"?(s=new RegExp(t,i?"i":"g").test(this._sourceText.substr(this._pos,t.length)),o=t):t instanceof RegExp&&(s=this._sourceText.slice(this._pos).match(t),o=s&&s[0]),s!=null&&(typeof t=="string"||s instanceof Array&&this._sourceText.startsWith(s[0],this._pos))?(r&&(this._start=this._pos,o&&o.length&&(this._pos+=o.length)),s):!1},this.backUp=t=>{this._pos-=t},this.column=()=>this._pos,this.indentation=()=>{const t=this._sourceText.match(/\s*/);let r=0;if(t&&t.length!==0){const i=t[0];let o=0;for(;i.length>o;)i.charCodeAt(o)===9?r+=2:r++,o++}return r},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=n}_testNextCharacter(n){const t=this._sourceText.charAt(this._pos);let r=!1;return typeof n=="string"?r=t===n:r=n instanceof RegExp?n.test(t):n(t),r}}function Oe(e){return{ofRule:e}}function fe(e,n){return{ofRule:e,isList:!0,separator:n}}function dw(e,n){const t=e.match;return e.match=r=>{let i=!1;return t&&(i=t(r)),i&&n.every(o=>o.match&&!o.match(r))},e}function Bl(e,n){return{style:n,match:t=>t.kind===e}}function ee(e,n){return{style:n||"punctuation",match:t=>t.kind==="Punctuation"&&t.value===e}}const pw=e=>e===" "||e==="	"||e===","||e===`
`||e==="\r"||e==="\uFEFF"||e==="\xA0",hw={Name:/^[_A-Za-z][_0-9A-Za-z]*/,Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,Comment:/^#.*/},mw={Document:[fe("Definition")],Definition(e){switch(e.value){case"{":return"ShortQuery";case"query":return"Query";case"mutation":return"Mutation";case"subscription":return"Subscription";case"fragment":return y.FRAGMENT_DEFINITION;case"schema":return"SchemaDef";case"scalar":return"ScalarDef";case"type":return"ObjectTypeDef";case"interface":return"InterfaceDef";case"union":return"UnionDef";case"enum":return"EnumDef";case"input":return"InputDef";case"extend":return"ExtendDef";case"directive":return"DirectiveDef"}},ShortQuery:["SelectionSet"],Query:[ze("query"),Oe(_e("def")),Oe("VariableDefinitions"),fe("Directive"),"SelectionSet"],Mutation:[ze("mutation"),Oe(_e("def")),Oe("VariableDefinitions"),fe("Directive"),"SelectionSet"],Subscription:[ze("subscription"),Oe(_e("def")),Oe("VariableDefinitions"),fe("Directive"),"SelectionSet"],VariableDefinitions:[ee("("),fe("VariableDefinition"),ee(")")],VariableDefinition:["Variable",ee(":"),"Type",Oe("DefaultValue")],Variable:[ee("$","variable"),_e("variable")],DefaultValue:[ee("="),"Value"],SelectionSet:[ee("{"),fe("Selection"),ee("}")],Selection(e,n){return e.value==="..."?n.match(/[\s\u00a0,]*(on\b|@|{)/,!1)?"InlineFragment":"FragmentSpread":n.match(/[\s\u00a0,]*:/,!1)?"AliasedField":"Field"},AliasedField:[_e("property"),ee(":"),_e("qualifier"),Oe("Arguments"),fe("Directive"),Oe("SelectionSet")],Field:[_e("property"),Oe("Arguments"),fe("Directive"),Oe("SelectionSet")],Arguments:[ee("("),fe("Argument"),ee(")")],Argument:[_e("attribute"),ee(":"),"Value"],FragmentSpread:[ee("..."),_e("def"),fe("Directive")],InlineFragment:[ee("..."),Oe("TypeCondition"),fe("Directive"),"SelectionSet"],FragmentDefinition:[ze("fragment"),Oe(dw(_e("def"),[ze("on")])),"TypeCondition",fe("Directive"),"SelectionSet"],TypeCondition:[ze("on"),"NamedType"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue";case"$":return"Variable";case"&":return"NamedType"}return null;case"Name":switch(e.value){case"true":case"false":return"BooleanValue"}return e.value==="null"?"NullValue":"EnumValue"}},NumberValue:[Bl("Number","number")],StringValue:[{style:"string",match:e=>e.kind==="String",update(e,n){n.value.startsWith('"""')&&(e.inBlockstring=!n.value.slice(3).endsWith('"""'))}}],BooleanValue:[Bl("Name","builtin")],NullValue:[Bl("Name","keyword")],EnumValue:[_e("string-2")],ListValue:[ee("["),fe("Value"),ee("]")],ObjectValue:[ee("{"),fe("ObjectField"),ee("}")],ObjectField:[_e("attribute"),ee(":"),"Value"],Type(e){return e.value==="["?"ListType":"NonNullType"},ListType:[ee("["),"Type",ee("]"),Oe(ee("!"))],NonNullType:["NamedType",Oe(ee("!"))],NamedType:[gw("atom")],Directive:[ee("@","meta"),_e("meta"),Oe("Arguments")],DirectiveDef:[ze("directive"),ee("@","meta"),_e("meta"),Oe("ArgumentsDef"),ze("on"),fe("DirectiveLocation",ee("|"))],InterfaceDef:[ze("interface"),_e("atom"),Oe("Implements"),fe("Directive"),ee("{"),fe("FieldDef"),ee("}")],Implements:[ze("implements"),fe("NamedType",ee("&"))],DirectiveLocation:[_e("string-2")],SchemaDef:[ze("schema"),fe("Directive"),ee("{"),fe("OperationTypeDef"),ee("}")],OperationTypeDef:[_e("keyword"),ee(":"),_e("atom")],ScalarDef:[ze("scalar"),_e("atom"),fe("Directive")],ObjectTypeDef:[ze("type"),_e("atom"),Oe("Implements"),fe("Directive"),ee("{"),fe("FieldDef"),ee("}")],FieldDef:[_e("property"),Oe("ArgumentsDef"),ee(":"),"Type",fe("Directive")],ArgumentsDef:[ee("("),fe("InputValueDef"),ee(")")],InputValueDef:[_e("attribute"),ee(":"),"Type",Oe("DefaultValue"),fe("Directive")],UnionDef:[ze("union"),_e("atom"),fe("Directive"),ee("="),fe("UnionMember",ee("|"))],UnionMember:["NamedType"],EnumDef:[ze("enum"),_e("atom"),fe("Directive"),ee("{"),fe("EnumValueDef"),ee("}")],EnumValueDef:[_e("string-2"),fe("Directive")],InputDef:[ze("input"),_e("atom"),fe("Directive"),ee("{"),fe("InputValueDef"),ee("}")],ExtendDef:[ze("extend"),"ObjectTypeDef"]};function ze(e){return{style:"keyword",match:n=>n.kind==="Name"&&n.value===e}}function _e(e){return{style:e,match:n=>n.kind==="Name",update(n,t){n.name=t.value}}}function gw(e){return{style:e,match:n=>n.kind==="Name",update(n,t){n.prevState&&n.prevState.prevState&&(n.name=t.value,n.prevState.prevState.type=t.value)}}}function vw(e={eatWhitespace:n=>n.eatWhile(pw),lexRules:hw,parseRules:mw,editorConfig:{}}){return{startState(){const n={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeperator:!1,prevState:null};return Ui(e.parseRules,n,y.DOCUMENT),n},token(n,t){return yw(n,t,e)}}}function yw(e,n,t){if(n.inBlockstring)return e.match(/.*"""/)?(n.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:r,parseRules:i,eatWhitespace:o,editorConfig:s}=t;if(n.rule&&n.rule.length===0?Hf(n):n.needsAdvance&&(n.needsAdvance=!1,mu(n,!0)),e.sol()){const l=s&&s.tabSize||2;n.indentLevel=Math.floor(e.indentation()/l)}if(o(e))return"ws";const a=Ew(r,e);if(!a)return e.match(/\S+/)||e.match(/\s/),Ui(Ql,n,"Invalid"),"invalidchar";if(a.kind==="Comment")return Ui(Ql,n,"Comment"),"comment";const c=Ih({},n);if(a.kind==="Punctuation"){if(/^[{([]/.test(a.value))n.indentLevel!==void 0&&(n.levels=(n.levels||[]).concat(n.indentLevel+1));else if(/^[})\]]/.test(a.value)){const l=n.levels=(n.levels||[]).slice(0,-1);n.indentLevel&&l.length>0&&l[l.length-1]<n.indentLevel&&(n.indentLevel=l[l.length-1])}}for(;n.rule;){let l=typeof n.rule=="function"?n.step===0?n.rule(a,e):null:n.rule[n.step];if(n.needsSeperator&&(l=l&&(l==null?void 0:l.separator)),l){if(l.ofRule&&(l=l.ofRule),typeof l=="string"){Ui(i,n,l);continue}if(l.match&&l.match(a))return l.update&&l.update(n,a),a.kind==="Punctuation"?mu(n,!0):n.needsAdvance=!0,l.style}_w(n)}return Ih(n,c),Ui(Ql,n,"Invalid"),"invalidchar"}function Ih(e,n){const t=Object.keys(n);for(let r=0;r<t.length;r++)e[t[r]]=n[t[r]];return e}const Ql={Invalid:[],Comment:[]};function Ui(e,n,t){if(!e[t])throw new TypeError("Unknown rule: "+t);n.prevState=Object.assign({},n),n.kind=t,n.name=null,n.type=null,n.rule=e[t],n.step=0,n.needsSeperator=!1}function Hf(e){!e.prevState||(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeperator=e.prevState.needsSeperator,e.prevState=e.prevState.prevState)}function mu(e,n){if(Dh(e)&&e.rule){const t=e.rule[e.step];if(t.separator){const r=t.separator;if(e.needsSeperator=!e.needsSeperator,!e.needsSeperator&&r.ofRule)return}if(n)return}for(e.needsSeperator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)Hf(e),e.rule&&(Dh(e)?e.rule&&e.rule[e.step].separator&&(e.needsSeperator=!e.needsSeperator):(e.needsSeperator=!1,e.step++))}function Dh(e){const n=Array.isArray(e.rule)&&typeof e.rule[e.step]!="string"&&e.rule[e.step];return n&&n.isList}function _w(e){for(;e.rule&&!(Array.isArray(e.rule)&&e.rule[e.step].ofRule);)Hf(e);e.rule&&mu(e,!1)}function Ew(e,n){const t=Object.keys(e);for(let r=0;r<t.length;r++){const i=n.match(e[t[r]]);if(i&&i instanceof Array)return{kind:t[r],value:i[0]}}}const Sw={ALIASED_FIELD:"AliasedField",ARGUMENTS:"Arguments",SHORT_QUERY:"ShortQuery",QUERY:"Query",MUTATION:"Mutation",SUBSCRIPTION:"Subscription",TYPE_CONDITION:"TypeCondition",INVALID:"Invalid",COMMENT:"Comment",SCHEMA_DEF:"SchemaDef",SCALAR_DEF:"ScalarDef",OBJECT_TYPE_DEF:"ObjectTypeDef",OBJECT_VALUE:"ObjectValue",LIST_VALUE:"ListValue",INTERFACE_DEF:"InterfaceDef",UNION_DEF:"UnionDef",ENUM_DEF:"EnumDef",ENUM_VALUE:"EnumValue",FIELD_DEF:"FieldDef",INPUT_DEF:"InputDef",INPUT_VALUE_DEF:"InputValueDef",ARGUMENTS_DEF:"ArgumentsDef",EXTEND_DEF:"ExtendDef",DIRECTIVE_DEF:"DirectiveDef",IMPLEMENTS:"Implements",VARIABLE_DEFINITIONS:"VariableDefinitions",TYPE:"Type"},lse=Object.assign(Object.assign({},y),Sw);var Ka={exports:{}};function jy(e,n){if(e!=null)return e;var t=new Error(n!==void 0?n:"Got unexpected "+e);throw t.framesToPop=1,t}Ka.exports=jy;Ka.exports.default=jy;Object.defineProperty(Ka.exports,"__esModule",{value:!0});var Ah=F0(Ka.exports);const cse=(e,n)=>{if(!n)return[];let t;try{t=at(e)}catch{return[]}return Vy(t,n)},Vy=(e,n)=>{if(!n)return[];const t=new Map,r=new Set;Mn(e,{FragmentDefinition(s){t.set(s.name.value,!0)},FragmentSpread(s){r.has(s.name.value)||r.add(s.name.value)}});const i=new Set;r.forEach(s=>{!t.has(s)&&n.has(s)&&i.add(Ah(n.get(s)))});const o=[];return i.forEach(s=>{Mn(s,{FragmentSpread(a){!r.has(a.name.value)&&n.get(a.name.value)&&(i.add(Ah(n.get(a.name.value))),r.add(a.name.value))}}),t.has(s.name.value)||o.push(s)}),o};class Gf{constructor(n,t){this.containsPosition=r=>this.start.line===r.line?this.start.character<=r.character:this.end.line===r.line?this.end.character>=r.character:this.start.line<=r.line&&this.end.line>=r.line,this.start=n,this.end=t}setStart(n,t){this.start=new br(n,t)}setEnd(n,t){this.end=new br(n,t)}}class br{constructor(n,t){this.lessThanOrEqualTo=r=>this.line<r.line||this.line===r.line&&this.character<=r.character,this.line=n,this.character=t}setLine(n){this.line=n}setCharacter(n){this.character=n}}function Io(e,n){const t=`
`,r=e.slice(0,n),i=r.split(t).length-1,o=r.lastIndexOf(t);return new br(i,n-o-1)}function ww(e,n){const t=Io(e,n.start),r=Io(e,n.end);return new Gf(t,r)}const kw=[Sy,Ly,Fy,Ay,Oy,Dy,$f,qf,Bf,xy,zf,Qf];function bw(e,n,t,r,i){const o=Ry.filter(a=>!(a===wy||a===yy||r&&a===Ey));return t&&Array.prototype.push.apply(o,t),i&&Array.prototype.push.apply(o,kw),My(e,n,o).filter(a=>{if(a.message.indexOf("Unknown directive")!==-1&&a.nodes){const c=a.nodes[0];if(c&&c.kind===y.DIRECTIVE){const l=c.name.value;if(l==="arguments"||l==="argumentDefinitions")return!1}}return!0})}function Tw(e,n){const t=Object.create(null);return n.definitions.forEach(r=>{if(r.kind==="OperationDefinition"){const i=r.variableDefinitions;i&&i.forEach(({variable:o,type:s})=>{const a=mn(e,s);a?t[o.name.value]=a:s.kind===y.NAMED_TYPE&&s.name.value==="Float"&&(t[o.name.value]=cy)})}}),t}function xw(e,n){const t=n?Tw(n,e):void 0,r=[];return Mn(e,{OperationDefinition(i){r.push(i)}}),{variableToType:t,operations:r}}function Ms(e,n){if(!!n)try{const t=at(n);return Object.assign(Object.assign({},xw(t,e)),{documentAST:t})}catch{return}}const use=Ms;var Uy=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})};const zy="GraphQL";function Wf(e,n){if(!e)throw new Error(n)}function jo(e,n){const t=n.loc;return Wf(t,"Expected ASTNode to have a location."),ww(e,t)}function By(e,n){const t=n.loc;return Wf(t,"Expected ASTNode to have a location."),Io(e,t.start)}function fse(e,n,t){return Uy(this,void 0,void 0,function*(){const r=n.name.value,i=t.filter(({definition:s})=>s.name&&s.name.value===r);if(i.length===0)throw Error(`Definition not found for GraphQL type ${r}`);const o=i.map(({filePath:s,content:a,definition:c})=>Nw(s||"",a,c));return{definitions:o,queryRange:o.map(s=>jo(e,n))}})}function dse(e,n,t){return Uy(this,void 0,void 0,function*(){const r=n.name.value,i=t.filter(({definition:s})=>s.name.value===r);if(i.length===0)throw Error(`Definition not found for GraphQL fragment ${r}`);const o=i.map(({filePath:s,content:a,definition:c})=>Qy(s||"",a,c));return{definitions:o,queryRange:o.map(s=>jo(e,n))}})}function pse(e,n,t){return{definitions:[Qy(e,n,t)],queryRange:t.name?[jo(n,t.name)]:[]}}function Qy(e,n,t){const r=t.name;if(!r)throw Error("Expected ASTNode to have a Name.");return{path:e,position:By(n,t),range:jo(n,t),name:r.value||"",language:zy,projectRoot:e}}function Nw(e,n,t){const r=t.name;return Wf(r,"Expected ASTNode to have a Name."),{path:e,position:By(n,t),range:jo(n,t),name:r.value||"",language:zy,projectRoot:e}}const gs={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},gu={[gs.Error]:1,[gs.Warning]:2,[gs.Information]:3,[gs.Hint]:4},wa=(e,n)=>{if(!e)throw new Error(n)};function hse(e,n=null,t,r,i){let o=null;i&&(typeof i=="string"?e+=`

`+i:e+=`

`+i.reduce((s,a)=>(s+=we(a)+`

`,s),""));try{o=at(e)}catch(s){const a=Iw(s.locations[0],e);return[{severity:gu.Error,message:s.message,source:"GraphQL: Syntax",range:a}]}return Cw(o,n,t,r)}function Cw(e,n=null,t,r){if(!n)return[];const i=Oh(bw(n,e,t,r),s=>Lh(s,gu.Error,"Validation")),o=Oh(My(n,e,[KS]),s=>Lh(s,gu.Warning,"Deprecation"));return i.concat(o)}function Oh(e,n){return Array.prototype.concat.apply([],e.map(n))}function Lh(e,n,t){if(!e.nodes)return[];const r=[];return e.nodes.forEach(i=>{const o=i.kind!=="Variable"&&"name"in i&&i.name!==void 0?i.name:"variable"in i&&i.variable!==void 0?i.variable:i;if(o){wa(e.locations,"GraphQL validation error requires locations.");const s=e.locations[0],a=Dw(o),c=s.column+(a.end-a.start);r.push({source:`GraphQL: ${t}`,message:e.message,severity:n,range:new Gf(new br(s.line-1,s.column-1),new br(s.line-1,c))})}}),r}function Iw(e,n){const t=vw(),r=t.startState(),i=n.split(`
`);wa(i.length>=e.line,"Query text must have more lines than where the error happened");let o=null;for(let l=0;l<e.line;l++)for(o=new fw(i[l]);!o.eol()&&t.token(o,r)!=="invalidchar";);wa(o,"Expected Parser stream to be available.");const s=e.line-1,a=o.getStartOfToken(),c=o.getCurrentPosition();return new Gf(new br(s,a),new br(s,c))}function Dw(e){const t=e.loc;return wa(t,"Expected ASTNode to have a location."),t}const{INLINE_FRAGMENT:Aw}=y;function mse(e){let n;try{n=at(e)}catch{return null}const t=Ow(e);return{outlineTrees:Mn(n,{leave(i){return t!==void 0&&i.kind in t?t[i.kind](i):null}})}}function Ow(e){const n=t=>({representativeName:t.name,startPosition:Io(e,t.loc.start),endPosition:Io(e,t.loc.end),kind:t.kind,children:t.selectionSet||t.fields||t.values||t.arguments||[]});return{Field:t=>{const r=t.alias?[Ee("plain",t.alias),Ee("plain",": ")]:[];return r.push(Ee("plain",t.name)),Object.assign({tokenizedText:r},n(t))},OperationDefinition:t=>Object.assign({tokenizedText:[Ee("keyword",t.operation),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),Document:t=>t.definitions,SelectionSet:t=>Lw(t.selections,r=>r.kind===Aw?r.selectionSet:r),Name:t=>t.value,FragmentDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","fragment"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),InterfaceTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","interface"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),EnumTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","enum"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),EnumValueDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),ObjectTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","type"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),InputObjectTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","input"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),FragmentSpread:t=>Object.assign({tokenizedText:[Ee("plain","..."),Ee("class-name",t.name)]},n(t)),InputValueDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),FieldDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),InlineFragment:t=>t.selectionSet}}function Ee(e,n){return{kind:e,value:n}}function Lw(e,n){const t=[];for(let r=0;r<e.length;r++){const i=n(e[r],r);Array.isArray(i)?t.push(...i):t.push(i)}return t}const gse={Created:1,Changed:2,Deleted:3};var Fh;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(Fh||(Fh={}));var Fw=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Rw=function(e){Fw(n,e);function n(t){var r=e.call(this,t)||this;return r._onClick=function(){r.props.isRunning?r.props.onStop():r.props.onRun()},r._onOptionSelected=function(i){r.setState({optionsOpen:!1}),r.props.onRun(i.name&&i.name.value)},r._onOptionsOpen=function(i){var o=!0,s=i.currentTarget;r.setState({highlight:null,optionsOpen:!0});var a=function(c){var l;if(o&&c.target===s)o=!1;else{document.removeEventListener("mouseup",a),a=null;var u=c.currentTarget&&((l=s.parentNode)===null||l===void 0?void 0:l.compareDocumentPosition(c.currentTarget))&&Node.DOCUMENT_POSITION_CONTAINED_BY;u||r.setState({optionsOpen:!1})}};document.addEventListener("mouseup",a)},r.state={optionsOpen:!1,highlight:null},r}return n.prototype.render=function(){var t=this,r=this.props.operations||[],i=this.state.optionsOpen,o=r&&r.length>1,s=null;if(o&&i){var a=this.state.highlight;s=_.createElement("ul",{className:"execute-options"},r.map(function(f,p){var h=f.name?f.name.value:"<Unnamed "+f.operation+">";return _.createElement("li",{key:h+"-"+p,className:f===a?"selected":void 0,onMouseOver:function(){return t.setState({highlight:f})},onMouseOut:function(){return t.setState({highlight:null})},onMouseUp:function(){return t._onOptionSelected(f)}},h)}))}var c;(this.props.isRunning||!o)&&(c=this._onClick);var l=function(){};!this.props.isRunning&&o&&!i&&(l=this._onOptionsOpen);var u=this.props.isRunning?_.createElement("path",{d:"M 10 10 L 23 10 L 23 23 L 10 23 z"}):_.createElement("path",{d:"M 11 9 L 24 16 L 11 23 z"});return _.createElement("div",{className:"execute-button-wrap"},_.createElement("button",{type:"button",className:"execute-button",onMouseDown:l,onClick:c,title:"Execute Query (Ctrl-Enter)"},_.createElement("svg",{width:"34",height:"34"},u)),s)},n}(_.Component),Pw=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();function Rh(e){if(e.type==="string"){var n=e.string.slice(1).slice(0,-1).trim();try{var t=window.location;return new URL(n,t.protocol+"//"+t.host)}catch{return}}}function Mw(e){return/(bmp|gif|jpeg|jpg|png|svg)$/.test(e.pathname)}var qw=function(e){Pw(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t._node=null,t.state={width:null,height:null,src:null,mime:null},t}return n.shouldRender=function(t){var r=Rh(t);return r?Mw(r):!1},n.prototype.componentDidMount=function(){this._updateMetadata()},n.prototype.componentDidUpdate=function(){this._updateMetadata()},n.prototype.render=function(){var t=this,r,i=null;if(this.state.width!==null&&this.state.height!==null){var o=this.state.width+"x"+this.state.height;this.state.mime!==null&&(o+=" "+this.state.mime),i=_.createElement("div",null,o)}return _.createElement("div",null,_.createElement("img",{onLoad:function(){return t._updateMetadata()},ref:function(s){t._node=s},src:(r=Rh(this.props.token))===null||r===void 0?void 0:r.href}),i)},n.prototype._updateMetadata=function(){var t=this;if(!!this._node){var r=this._node.naturalWidth,i=this._node.naturalHeight,o=this._node.src;o!==this.state.src&&(this.setState({src:o}),fetch(o,{method:"HEAD"}).then(function(s){t.setState({mime:s.headers.get("Content-Type")})})),(r!==this.state.width||i!==this.state.height)&&this.setState({height:i,width:r})}},n}(_.Component),$w=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Fr=function(e){$w(n,e);function n(t){var r=e.call(this,t)||this;return r.handleClick=function(){try{r.props.onClick(),r.setState({error:null})}catch(i){r.setState({error:i})}},r.state={error:null},r}return n.prototype.render=function(){var t=this.state.error;return _.createElement("button",{className:"toolbar-button"+(t?" error":""),onClick:this.handleClick,title:t?t.message:this.props.title,"aria-invalid":t?"true":"false"},this.props.label)},n}(_.Component);function jw(e){var n=e.children;return _.createElement("div",{className:"toolbar-button-group"},n)}var Vw=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Uw=function(e){Vw(n,e);function n(t){var r=e.call(this,t)||this;return r._node=null,r._listener=null,r.handleOpen=function(i){vu(i),r.setState({visible:!0}),r._subscribe()},r.state={visible:!1},r}return n.prototype.componentWillUnmount=function(){this._release()},n.prototype.render=function(){var t=this,r=this.state.visible;return _.createElement("a",{className:"toolbar-menu toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:vu,ref:function(i){i&&(t._node=i)},title:this.props.title},this.props.label,_.createElement("svg",{width:"14",height:"8"},_.createElement("path",{fill:"#666",d:"M 5 1.5 L 14 1.5 L 9.5 7 z"})),_.createElement("ul",{className:"toolbar-menu-items"+(r?" open":"")},this.props.children))},n.prototype._subscribe=function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))},n.prototype._release=function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)},n.prototype.handleClick=function(t){this._node!==t.target&&(t.preventDefault(),this.setState({visible:!1}),this._release())},n}(_.Component),zw=function(e){var n=e.onSelect,t=e.title,r=e.label;return _.createElement("li",{onMouseOver:function(i){i.currentTarget.className="hover"},onMouseOut:function(i){i.currentTarget.className=""},onMouseDown:vu,onMouseUp:n,title:t},r)};function vu(e){e.preventDefault()}var de={};const Bw="\xC1",Qw="\xE1",Hw="\u0102",Gw="\u0103",Ww="\u223E",Yw="\u223F",Jw="\u223E\u0333",Zw="\xC2",Xw="\xE2",Kw="\xB4",ek="\u0410",nk="\u0430",tk="\xC6",rk="\xE6",ik="\u2061",ok="\u{1D504}",sk="\u{1D51E}",ak="\xC0",lk="\xE0",ck="\u2135",uk="\u2135",fk="\u0391",dk="\u03B1",pk="\u0100",hk="\u0101",mk="\u2A3F",gk="&",vk="&",yk="\u2A55",_k="\u2A53",Ek="\u2227",Sk="\u2A5C",wk="\u2A58",kk="\u2A5A",bk="\u2220",Tk="\u29A4",xk="\u2220",Nk="\u29A8",Ck="\u29A9",Ik="\u29AA",Dk="\u29AB",Ak="\u29AC",Ok="\u29AD",Lk="\u29AE",Fk="\u29AF",Rk="\u2221",Pk="\u221F",Mk="\u22BE",qk="\u299D",$k="\u2222",jk="\xC5",Vk="\u237C",Uk="\u0104",zk="\u0105",Bk="\u{1D538}",Qk="\u{1D552}",Hk="\u2A6F",Gk="\u2248",Wk="\u2A70",Yk="\u224A",Jk="\u224B",Zk="'",Xk="\u2061",Kk="\u2248",eb="\u224A",nb="\xC5",tb="\xE5",rb="\u{1D49C}",ib="\u{1D4B6}",ob="\u2254",sb="*",ab="\u2248",lb="\u224D",cb="\xC3",ub="\xE3",fb="\xC4",db="\xE4",pb="\u2233",hb="\u2A11",mb="\u224C",gb="\u03F6",vb="\u2035",yb="\u223D",_b="\u22CD",Eb="\u2216",Sb="\u2AE7",wb="\u22BD",kb="\u2305",bb="\u2306",Tb="\u2305",xb="\u23B5",Nb="\u23B6",Cb="\u224C",Ib="\u0411",Db="\u0431",Ab="\u201E",Ob="\u2235",Lb="\u2235",Fb="\u2235",Rb="\u29B0",Pb="\u03F6",Mb="\u212C",qb="\u212C",$b="\u0392",jb="\u03B2",Vb="\u2136",Ub="\u226C",zb="\u{1D505}",Bb="\u{1D51F}",Qb="\u22C2",Hb="\u25EF",Gb="\u22C3",Wb="\u2A00",Yb="\u2A01",Jb="\u2A02",Zb="\u2A06",Xb="\u2605",Kb="\u25BD",eT="\u25B3",nT="\u2A04",tT="\u22C1",rT="\u22C0",iT="\u290D",oT="\u29EB",sT="\u25AA",aT="\u25B4",lT="\u25BE",cT="\u25C2",uT="\u25B8",fT="\u2423",dT="\u2592",pT="\u2591",hT="\u2593",mT="\u2588",gT="=\u20E5",vT="\u2261\u20E5",yT="\u2AED",_T="\u2310",ET="\u{1D539}",ST="\u{1D553}",wT="\u22A5",kT="\u22A5",bT="\u22C8",TT="\u29C9",xT="\u2510",NT="\u2555",CT="\u2556",IT="\u2557",DT="\u250C",AT="\u2552",OT="\u2553",LT="\u2554",FT="\u2500",RT="\u2550",PT="\u252C",MT="\u2564",qT="\u2565",$T="\u2566",jT="\u2534",VT="\u2567",UT="\u2568",zT="\u2569",BT="\u229F",QT="\u229E",HT="\u22A0",GT="\u2518",WT="\u255B",YT="\u255C",JT="\u255D",ZT="\u2514",XT="\u2558",KT="\u2559",ex="\u255A",nx="\u2502",tx="\u2551",rx="\u253C",ix="\u256A",ox="\u256B",sx="\u256C",ax="\u2524",lx="\u2561",cx="\u2562",ux="\u2563",fx="\u251C",dx="\u255E",px="\u255F",hx="\u2560",mx="\u2035",gx="\u02D8",vx="\u02D8",yx="\xA6",_x="\u{1D4B7}",Ex="\u212C",Sx="\u204F",wx="\u223D",kx="\u22CD",bx="\u29C5",Tx="\\",xx="\u27C8",Nx="\u2022",Cx="\u2022",Ix="\u224E",Dx="\u2AAE",Ax="\u224F",Ox="\u224E",Lx="\u224F",Fx="\u0106",Rx="\u0107",Px="\u2A44",Mx="\u2A49",qx="\u2A4B",$x="\u2229",jx="\u22D2",Vx="\u2A47",Ux="\u2A40",zx="\u2145",Bx="\u2229\uFE00",Qx="\u2041",Hx="\u02C7",Gx="\u212D",Wx="\u2A4D",Yx="\u010C",Jx="\u010D",Zx="\xC7",Xx="\xE7",Kx="\u0108",eN="\u0109",nN="\u2230",tN="\u2A4C",rN="\u2A50",iN="\u010A",oN="\u010B",sN="\xB8",aN="\xB8",lN="\u29B2",cN="\xA2",uN="\xB7",fN="\xB7",dN="\u{1D520}",pN="\u212D",hN="\u0427",mN="\u0447",gN="\u2713",vN="\u2713",yN="\u03A7",_N="\u03C7",EN="\u02C6",SN="\u2257",wN="\u21BA",kN="\u21BB",bN="\u229B",TN="\u229A",xN="\u229D",NN="\u2299",CN="\xAE",IN="\u24C8",DN="\u2296",AN="\u2295",ON="\u2297",LN="\u25CB",FN="\u29C3",RN="\u2257",PN="\u2A10",MN="\u2AEF",qN="\u29C2",$N="\u2232",jN="\u201D",VN="\u2019",UN="\u2663",zN="\u2663",BN=":",QN="\u2237",HN="\u2A74",GN="\u2254",WN="\u2254",YN=",",JN="@",ZN="\u2201",XN="\u2218",KN="\u2201",eC="\u2102",nC="\u2245",tC="\u2A6D",rC="\u2261",iC="\u222E",oC="\u222F",sC="\u222E",aC="\u{1D554}",lC="\u2102",cC="\u2210",uC="\u2210",fC="\xA9",dC="\xA9",pC="\u2117",hC="\u2233",mC="\u21B5",gC="\u2717",vC="\u2A2F",yC="\u{1D49E}",_C="\u{1D4B8}",EC="\u2ACF",SC="\u2AD1",wC="\u2AD0",kC="\u2AD2",bC="\u22EF",TC="\u2938",xC="\u2935",NC="\u22DE",CC="\u22DF",IC="\u21B6",DC="\u293D",AC="\u2A48",OC="\u2A46",LC="\u224D",FC="\u222A",RC="\u22D3",PC="\u2A4A",MC="\u228D",qC="\u2A45",$C="\u222A\uFE00",jC="\u21B7",VC="\u293C",UC="\u22DE",zC="\u22DF",BC="\u22CE",QC="\u22CF",HC="\xA4",GC="\u21B6",WC="\u21B7",YC="\u22CE",JC="\u22CF",ZC="\u2232",XC="\u2231",KC="\u232D",eI="\u2020",nI="\u2021",tI="\u2138",rI="\u2193",iI="\u21A1",oI="\u21D3",sI="\u2010",aI="\u2AE4",lI="\u22A3",cI="\u290F",uI="\u02DD",fI="\u010E",dI="\u010F",pI="\u0414",hI="\u0434",mI="\u2021",gI="\u21CA",vI="\u2145",yI="\u2146",_I="\u2911",EI="\u2A77",SI="\xB0",wI="\u2207",kI="\u0394",bI="\u03B4",TI="\u29B1",xI="\u297F",NI="\u{1D507}",CI="\u{1D521}",II="\u2965",DI="\u21C3",AI="\u21C2",OI="\xB4",LI="\u02D9",FI="\u02DD",RI="`",PI="\u02DC",MI="\u22C4",qI="\u22C4",$I="\u22C4",jI="\u2666",VI="\u2666",UI="\xA8",zI="\u2146",BI="\u03DD",QI="\u22F2",HI="\xF7",GI="\xF7",WI="\u22C7",YI="\u22C7",JI="\u0402",ZI="\u0452",XI="\u231E",KI="\u230D",eD="$",nD="\u{1D53B}",tD="\u{1D555}",rD="\xA8",iD="\u02D9",oD="\u20DC",sD="\u2250",aD="\u2251",lD="\u2250",cD="\u2238",uD="\u2214",fD="\u22A1",dD="\u2306",pD="\u222F",hD="\xA8",mD="\u21D3",gD="\u21D0",vD="\u21D4",yD="\u2AE4",_D="\u27F8",ED="\u27FA",SD="\u27F9",wD="\u21D2",kD="\u22A8",bD="\u21D1",TD="\u21D5",xD="\u2225",ND="\u2913",CD="\u2193",ID="\u2193",DD="\u21D3",AD="\u21F5",OD="\u0311",LD="\u21CA",FD="\u21C3",RD="\u21C2",PD="\u2950",MD="\u295E",qD="\u2956",$D="\u21BD",jD="\u295F",VD="\u2957",UD="\u21C1",zD="\u21A7",BD="\u22A4",QD="\u2910",HD="\u231F",GD="\u230C",WD="\u{1D49F}",YD="\u{1D4B9}",JD="\u0405",ZD="\u0455",XD="\u29F6",KD="\u0110",eA="\u0111",nA="\u22F1",tA="\u25BF",rA="\u25BE",iA="\u21F5",oA="\u296F",sA="\u29A6",aA="\u040F",lA="\u045F",cA="\u27FF",uA="\xC9",fA="\xE9",dA="\u2A6E",pA="\u011A",hA="\u011B",mA="\xCA",gA="\xEA",vA="\u2256",yA="\u2255",_A="\u042D",EA="\u044D",SA="\u2A77",wA="\u0116",kA="\u0117",bA="\u2251",TA="\u2147",xA="\u2252",NA="\u{1D508}",CA="\u{1D522}",IA="\u2A9A",DA="\xC8",AA="\xE8",OA="\u2A96",LA="\u2A98",FA="\u2A99",RA="\u2208",PA="\u23E7",MA="\u2113",qA="\u2A95",$A="\u2A97",jA="\u0112",VA="\u0113",UA="\u2205",zA="\u2205",BA="\u25FB",QA="\u2205",HA="\u25AB",GA="\u2004",WA="\u2005",YA="\u2003",JA="\u014A",ZA="\u014B",XA="\u2002",KA="\u0118",e2="\u0119",n2="\u{1D53C}",t2="\u{1D556}",r2="\u22D5",i2="\u29E3",o2="\u2A71",s2="\u03B5",a2="\u0395",l2="\u03B5",c2="\u03F5",u2="\u2256",f2="\u2255",d2="\u2242",p2="\u2A96",h2="\u2A95",m2="\u2A75",g2="=",v2="\u2242",y2="\u225F",_2="\u21CC",E2="\u2261",S2="\u2A78",w2="\u29E5",k2="\u2971",b2="\u2253",T2="\u212F",x2="\u2130",N2="\u2250",C2="\u2A73",I2="\u2242",D2="\u0397",A2="\u03B7",O2="\xD0",L2="\xF0",F2="\xCB",R2="\xEB",P2="\u20AC",M2="!",q2="\u2203",$2="\u2203",j2="\u2130",V2="\u2147",U2="\u2147",z2="\u2252",B2="\u0424",Q2="\u0444",H2="\u2640",G2="\uFB03",W2="\uFB00",Y2="\uFB04",J2="\u{1D509}",Z2="\u{1D523}",X2="\uFB01",K2="\u25FC",eO="\u25AA",nO="fj",tO="\u266D",rO="\uFB02",iO="\u25B1",oO="\u0192",sO="\u{1D53D}",aO="\u{1D557}",lO="\u2200",cO="\u2200",uO="\u22D4",fO="\u2AD9",dO="\u2131",pO="\u2A0D",hO="\xBD",mO="\u2153",gO="\xBC",vO="\u2155",yO="\u2159",_O="\u215B",EO="\u2154",SO="\u2156",wO="\xBE",kO="\u2157",bO="\u215C",TO="\u2158",xO="\u215A",NO="\u215D",CO="\u215E",IO="\u2044",DO="\u2322",AO="\u{1D4BB}",OO="\u2131",LO="\u01F5",FO="\u0393",RO="\u03B3",PO="\u03DC",MO="\u03DD",qO="\u2A86",$O="\u011E",jO="\u011F",VO="\u0122",UO="\u011C",zO="\u011D",BO="\u0413",QO="\u0433",HO="\u0120",GO="\u0121",WO="\u2265",YO="\u2267",JO="\u2A8C",ZO="\u22DB",XO="\u2265",KO="\u2267",eL="\u2A7E",nL="\u2AA9",tL="\u2A7E",rL="\u2A80",iL="\u2A82",oL="\u2A84",sL="\u22DB\uFE00",aL="\u2A94",lL="\u{1D50A}",cL="\u{1D524}",uL="\u226B",fL="\u22D9",dL="\u22D9",pL="\u2137",hL="\u0403",mL="\u0453",gL="\u2AA5",vL="\u2277",yL="\u2A92",_L="\u2AA4",EL="\u2A8A",SL="\u2A8A",wL="\u2A88",kL="\u2269",bL="\u2A88",TL="\u2269",xL="\u22E7",NL="\u{1D53E}",CL="\u{1D558}",IL="`",DL="\u2265",AL="\u22DB",OL="\u2267",LL="\u2AA2",FL="\u2277",RL="\u2A7E",PL="\u2273",ML="\u{1D4A2}",qL="\u210A",$L="\u2273",jL="\u2A8E",VL="\u2A90",UL="\u2AA7",zL="\u2A7A",BL=">",QL=">",HL="\u226B",GL="\u22D7",WL="\u2995",YL="\u2A7C",JL="\u2A86",ZL="\u2978",XL="\u22D7",KL="\u22DB",eF="\u2A8C",nF="\u2277",tF="\u2273",rF="\u2269\uFE00",iF="\u2269\uFE00",oF="\u02C7",sF="\u200A",aF="\xBD",lF="\u210B",cF="\u042A",uF="\u044A",fF="\u2948",dF="\u2194",pF="\u21D4",hF="\u21AD",mF="^",gF="\u210F",vF="\u0124",yF="\u0125",_F="\u2665",EF="\u2665",SF="\u2026",wF="\u22B9",kF="\u{1D525}",bF="\u210C",TF="\u210B",xF="\u2925",NF="\u2926",CF="\u21FF",IF="\u223B",DF="\u21A9",AF="\u21AA",OF="\u{1D559}",LF="\u210D",FF="\u2015",RF="\u2500",PF="\u{1D4BD}",MF="\u210B",qF="\u210F",$F="\u0126",jF="\u0127",VF="\u224E",UF="\u224F",zF="\u2043",BF="\u2010",QF="\xCD",HF="\xED",GF="\u2063",WF="\xCE",YF="\xEE",JF="\u0418",ZF="\u0438",XF="\u0130",KF="\u0415",eR="\u0435",nR="\xA1",tR="\u21D4",rR="\u{1D526}",iR="\u2111",oR="\xCC",sR="\xEC",aR="\u2148",lR="\u2A0C",cR="\u222D",uR="\u29DC",fR="\u2129",dR="\u0132",pR="\u0133",hR="\u012A",mR="\u012B",gR="\u2111",vR="\u2148",yR="\u2110",_R="\u2111",ER="\u0131",SR="\u2111",wR="\u22B7",kR="\u01B5",bR="\u21D2",TR="\u2105",xR="\u221E",NR="\u29DD",CR="\u0131",IR="\u22BA",DR="\u222B",AR="\u222C",OR="\u2124",LR="\u222B",FR="\u22BA",RR="\u22C2",PR="\u2A17",MR="\u2A3C",qR="\u2063",$R="\u2062",jR="\u0401",VR="\u0451",UR="\u012E",zR="\u012F",BR="\u{1D540}",QR="\u{1D55A}",HR="\u0399",GR="\u03B9",WR="\u2A3C",YR="\xBF",JR="\u{1D4BE}",ZR="\u2110",XR="\u2208",KR="\u22F5",e3="\u22F9",n3="\u22F4",t3="\u22F3",r3="\u2208",i3="\u2062",o3="\u0128",s3="\u0129",a3="\u0406",l3="\u0456",c3="\xCF",u3="\xEF",f3="\u0134",d3="\u0135",p3="\u0419",h3="\u0439",m3="\u{1D50D}",g3="\u{1D527}",v3="\u0237",y3="\u{1D541}",_3="\u{1D55B}",E3="\u{1D4A5}",S3="\u{1D4BF}",w3="\u0408",k3="\u0458",b3="\u0404",T3="\u0454",x3="\u039A",N3="\u03BA",C3="\u03F0",I3="\u0136",D3="\u0137",A3="\u041A",O3="\u043A",L3="\u{1D50E}",F3="\u{1D528}",R3="\u0138",P3="\u0425",M3="\u0445",q3="\u040C",$3="\u045C",j3="\u{1D542}",V3="\u{1D55C}",U3="\u{1D4A6}",z3="\u{1D4C0}",B3="\u21DA",Q3="\u0139",H3="\u013A",G3="\u29B4",W3="\u2112",Y3="\u039B",J3="\u03BB",Z3="\u27E8",X3="\u27EA",K3="\u2991",eP="\u27E8",nP="\u2A85",tP="\u2112",rP="\xAB",iP="\u21E4",oP="\u291F",sP="\u2190",aP="\u219E",lP="\u21D0",cP="\u291D",uP="\u21A9",fP="\u21AB",dP="\u2939",pP="\u2973",hP="\u21A2",mP="\u2919",gP="\u291B",vP="\u2AAB",yP="\u2AAD",_P="\u2AAD\uFE00",EP="\u290C",SP="\u290E",wP="\u2772",kP="{",bP="[",TP="\u298B",xP="\u298F",NP="\u298D",CP="\u013D",IP="\u013E",DP="\u013B",AP="\u013C",OP="\u2308",LP="{",FP="\u041B",RP="\u043B",PP="\u2936",MP="\u201C",qP="\u201E",$P="\u2967",jP="\u294B",VP="\u21B2",UP="\u2264",zP="\u2266",BP="\u27E8",QP="\u21E4",HP="\u2190",GP="\u2190",WP="\u21D0",YP="\u21C6",JP="\u21A2",ZP="\u2308",XP="\u27E6",KP="\u2961",eM="\u2959",nM="\u21C3",tM="\u230A",rM="\u21BD",iM="\u21BC",oM="\u21C7",sM="\u2194",aM="\u2194",lM="\u21D4",cM="\u21C6",uM="\u21CB",fM="\u21AD",dM="\u294E",pM="\u21A4",hM="\u22A3",mM="\u295A",gM="\u22CB",vM="\u29CF",yM="\u22B2",_M="\u22B4",EM="\u2951",SM="\u2960",wM="\u2958",kM="\u21BF",bM="\u2952",TM="\u21BC",xM="\u2A8B",NM="\u22DA",CM="\u2264",IM="\u2266",DM="\u2A7D",AM="\u2AA8",OM="\u2A7D",LM="\u2A7F",FM="\u2A81",RM="\u2A83",PM="\u22DA\uFE00",MM="\u2A93",qM="\u2A85",$M="\u22D6",jM="\u22DA",VM="\u2A8B",UM="\u22DA",zM="\u2266",BM="\u2276",QM="\u2276",HM="\u2AA1",GM="\u2272",WM="\u2A7D",YM="\u2272",JM="\u297C",ZM="\u230A",XM="\u{1D50F}",KM="\u{1D529}",e4="\u2276",n4="\u2A91",t4="\u2962",r4="\u21BD",i4="\u21BC",o4="\u296A",s4="\u2584",a4="\u0409",l4="\u0459",c4="\u21C7",u4="\u226A",f4="\u22D8",d4="\u231E",p4="\u21DA",h4="\u296B",m4="\u25FA",g4="\u013F",v4="\u0140",y4="\u23B0",_4="\u23B0",E4="\u2A89",S4="\u2A89",w4="\u2A87",k4="\u2268",b4="\u2A87",T4="\u2268",x4="\u22E6",N4="\u27EC",C4="\u21FD",I4="\u27E6",D4="\u27F5",A4="\u27F5",O4="\u27F8",L4="\u27F7",F4="\u27F7",R4="\u27FA",P4="\u27FC",M4="\u27F6",q4="\u27F6",$4="\u27F9",j4="\u21AB",V4="\u21AC",U4="\u2985",z4="\u{1D543}",B4="\u{1D55D}",Q4="\u2A2D",H4="\u2A34",G4="\u2217",W4="_",Y4="\u2199",J4="\u2198",Z4="\u25CA",X4="\u25CA",K4="\u29EB",e6="(",n6="\u2993",t6="\u21C6",r6="\u231F",i6="\u21CB",o6="\u296D",s6="\u200E",a6="\u22BF",l6="\u2039",c6="\u{1D4C1}",u6="\u2112",f6="\u21B0",d6="\u21B0",p6="\u2272",h6="\u2A8D",m6="\u2A8F",g6="[",v6="\u2018",y6="\u201A",_6="\u0141",E6="\u0142",S6="\u2AA6",w6="\u2A79",k6="<",b6="<",T6="\u226A",x6="\u22D6",N6="\u22CB",C6="\u22C9",I6="\u2976",D6="\u2A7B",A6="\u25C3",O6="\u22B4",L6="\u25C2",F6="\u2996",R6="\u294A",P6="\u2966",M6="\u2268\uFE00",q6="\u2268\uFE00",$6="\xAF",j6="\u2642",V6="\u2720",U6="\u2720",z6="\u21A6",B6="\u21A6",Q6="\u21A7",H6="\u21A4",G6="\u21A5",W6="\u25AE",Y6="\u2A29",J6="\u041C",Z6="\u043C",X6="\u2014",K6="\u223A",eq="\u2221",nq="\u205F",tq="\u2133",rq="\u{1D510}",iq="\u{1D52A}",oq="\u2127",sq="\xB5",aq="*",lq="\u2AF0",cq="\u2223",uq="\xB7",fq="\u229F",dq="\u2212",pq="\u2238",hq="\u2A2A",mq="\u2213",gq="\u2ADB",vq="\u2026",yq="\u2213",_q="\u22A7",Eq="\u{1D544}",Sq="\u{1D55E}",wq="\u2213",kq="\u{1D4C2}",bq="\u2133",Tq="\u223E",xq="\u039C",Nq="\u03BC",Cq="\u22B8",Iq="\u22B8",Dq="\u2207",Aq="\u0143",Oq="\u0144",Lq="\u2220\u20D2",Fq="\u2249",Rq="\u2A70\u0338",Pq="\u224B\u0338",Mq="\u0149",qq="\u2249",$q="\u266E",jq="\u2115",Vq="\u266E",Uq="\xA0",zq="\u224E\u0338",Bq="\u224F\u0338",Qq="\u2A43",Hq="\u0147",Gq="\u0148",Wq="\u0145",Yq="\u0146",Jq="\u2247",Zq="\u2A6D\u0338",Xq="\u2A42",Kq="\u041D",e5="\u043D",n5="\u2013",t5="\u2924",r5="\u2197",i5="\u21D7",o5="\u2197",s5="\u2260",a5="\u2250\u0338",l5="\u200B",c5="\u200B",u5="\u200B",f5="\u200B",d5="\u2262",p5="\u2928",h5="\u2242\u0338",m5="\u226B",g5="\u226A",v5=`
`,y5="\u2204",_5="\u2204",E5="\u{1D511}",S5="\u{1D52B}",w5="\u2267\u0338",k5="\u2271",b5="\u2271",T5="\u2267\u0338",x5="\u2A7E\u0338",N5="\u2A7E\u0338",C5="\u22D9\u0338",I5="\u2275",D5="\u226B\u20D2",A5="\u226F",O5="\u226F",L5="\u226B\u0338",F5="\u21AE",R5="\u21CE",P5="\u2AF2",M5="\u220B",q5="\u22FC",$5="\u22FA",j5="\u220B",V5="\u040A",U5="\u045A",z5="\u219A",B5="\u21CD",Q5="\u2025",H5="\u2266\u0338",G5="\u2270",W5="\u219A",Y5="\u21CD",J5="\u21AE",Z5="\u21CE",X5="\u2270",K5="\u2266\u0338",e8="\u2A7D\u0338",n8="\u2A7D\u0338",t8="\u226E",r8="\u22D8\u0338",i8="\u2274",o8="\u226A\u20D2",s8="\u226E",a8="\u22EA",l8="\u22EC",c8="\u226A\u0338",u8="\u2224",f8="\u2060",d8="\xA0",p8="\u{1D55F}",h8="\u2115",m8="\u2AEC",g8="\xAC",v8="\u2262",y8="\u226D",_8="\u2226",E8="\u2209",S8="\u2260",w8="\u2242\u0338",k8="\u2204",b8="\u226F",T8="\u2271",x8="\u2267\u0338",N8="\u226B\u0338",C8="\u2279",I8="\u2A7E\u0338",D8="\u2275",A8="\u224E\u0338",O8="\u224F\u0338",L8="\u2209",F8="\u22F5\u0338",R8="\u22F9\u0338",P8="\u2209",M8="\u22F7",q8="\u22F6",$8="\u29CF\u0338",j8="\u22EA",V8="\u22EC",U8="\u226E",z8="\u2270",B8="\u2278",Q8="\u226A\u0338",H8="\u2A7D\u0338",G8="\u2274",W8="\u2AA2\u0338",Y8="\u2AA1\u0338",J8="\u220C",Z8="\u220C",X8="\u22FE",K8="\u22FD",e$="\u2280",n$="\u2AAF\u0338",t$="\u22E0",r$="\u220C",i$="\u29D0\u0338",o$="\u22EB",s$="\u22ED",a$="\u228F\u0338",l$="\u22E2",c$="\u2290\u0338",u$="\u22E3",f$="\u2282\u20D2",d$="\u2288",p$="\u2281",h$="\u2AB0\u0338",m$="\u22E1",g$="\u227F\u0338",v$="\u2283\u20D2",y$="\u2289",_$="\u2241",E$="\u2244",S$="\u2247",w$="\u2249",k$="\u2224",b$="\u2226",T$="\u2226",x$="\u2AFD\u20E5",N$="\u2202\u0338",C$="\u2A14",I$="\u2280",D$="\u22E0",A$="\u2280",O$="\u2AAF\u0338",L$="\u2AAF\u0338",F$="\u2933\u0338",R$="\u219B",P$="\u21CF",M$="\u219D\u0338",q$="\u219B",$$="\u21CF",j$="\u22EB",V$="\u22ED",U$="\u2281",z$="\u22E1",B$="\u2AB0\u0338",Q$="\u{1D4A9}",H$="\u{1D4C3}",G$="\u2224",W$="\u2226",Y$="\u2241",J$="\u2244",Z$="\u2244",X$="\u2224",K$="\u2226",ej="\u22E2",nj="\u22E3",tj="\u2284",rj="\u2AC5\u0338",ij="\u2288",oj="\u2282\u20D2",sj="\u2288",aj="\u2AC5\u0338",lj="\u2281",cj="\u2AB0\u0338",uj="\u2285",fj="\u2AC6\u0338",dj="\u2289",pj="\u2283\u20D2",hj="\u2289",mj="\u2AC6\u0338",gj="\u2279",vj="\xD1",yj="\xF1",_j="\u2278",Ej="\u22EA",Sj="\u22EC",wj="\u22EB",kj="\u22ED",bj="\u039D",Tj="\u03BD",xj="#",Nj="\u2116",Cj="\u2007",Ij="\u224D\u20D2",Dj="\u22AC",Aj="\u22AD",Oj="\u22AE",Lj="\u22AF",Fj="\u2265\u20D2",Rj=">\u20D2",Pj="\u2904",Mj="\u29DE",qj="\u2902",$j="\u2264\u20D2",jj="<\u20D2",Vj="\u22B4\u20D2",Uj="\u2903",zj="\u22B5\u20D2",Bj="\u223C\u20D2",Qj="\u2923",Hj="\u2196",Gj="\u21D6",Wj="\u2196",Yj="\u2927",Jj="\xD3",Zj="\xF3",Xj="\u229B",Kj="\xD4",e7="\xF4",n7="\u229A",t7="\u041E",r7="\u043E",i7="\u229D",o7="\u0150",s7="\u0151",a7="\u2A38",l7="\u2299",c7="\u29BC",u7="\u0152",f7="\u0153",d7="\u29BF",p7="\u{1D512}",h7="\u{1D52C}",m7="\u02DB",g7="\xD2",v7="\xF2",y7="\u29C1",_7="\u29B5",E7="\u03A9",S7="\u222E",w7="\u21BA",k7="\u29BE",b7="\u29BB",T7="\u203E",x7="\u29C0",N7="\u014C",C7="\u014D",I7="\u03A9",D7="\u03C9",A7="\u039F",O7="\u03BF",L7="\u29B6",F7="\u2296",R7="\u{1D546}",P7="\u{1D560}",M7="\u29B7",q7="\u201C",$7="\u2018",j7="\u29B9",V7="\u2295",U7="\u21BB",z7="\u2A54",B7="\u2228",Q7="\u2A5D",H7="\u2134",G7="\u2134",W7="\xAA",Y7="\xBA",J7="\u22B6",Z7="\u2A56",X7="\u2A57",K7="\u2A5B",eV="\u24C8",nV="\u{1D4AA}",tV="\u2134",rV="\xD8",iV="\xF8",oV="\u2298",sV="\xD5",aV="\xF5",lV="\u2A36",cV="\u2A37",uV="\u2297",fV="\xD6",dV="\xF6",pV="\u233D",hV="\u203E",mV="\u23DE",gV="\u23B4",vV="\u23DC",yV="\xB6",_V="\u2225",EV="\u2225",SV="\u2AF3",wV="\u2AFD",kV="\u2202",bV="\u2202",TV="\u041F",xV="\u043F",NV="%",CV=".",IV="\u2030",DV="\u22A5",AV="\u2031",OV="\u{1D513}",LV="\u{1D52D}",FV="\u03A6",RV="\u03C6",PV="\u03D5",MV="\u2133",qV="\u260E",$V="\u03A0",jV="\u03C0",VV="\u22D4",UV="\u03D6",zV="\u210F",BV="\u210E",QV="\u210F",HV="\u2A23",GV="\u229E",WV="\u2A22",YV="+",JV="\u2214",ZV="\u2A25",XV="\u2A72",KV="\xB1",e9="\xB1",n9="\u2A26",t9="\u2A27",r9="\xB1",i9="\u210C",o9="\u2A15",s9="\u{1D561}",a9="\u2119",l9="\xA3",c9="\u2AB7",u9="\u2ABB",f9="\u227A",d9="\u227C",p9="\u2AB7",h9="\u227A",m9="\u227C",g9="\u227A",v9="\u2AAF",y9="\u227C",_9="\u227E",E9="\u2AAF",S9="\u2AB9",w9="\u2AB5",k9="\u22E8",b9="\u2AAF",T9="\u2AB3",x9="\u227E",N9="\u2032",C9="\u2033",I9="\u2119",D9="\u2AB9",A9="\u2AB5",O9="\u22E8",L9="\u220F",F9="\u220F",R9="\u232E",P9="\u2312",M9="\u2313",q9="\u221D",$9="\u221D",j9="\u2237",V9="\u221D",U9="\u227E",z9="\u22B0",B9="\u{1D4AB}",Q9="\u{1D4C5}",H9="\u03A8",G9="\u03C8",W9="\u2008",Y9="\u{1D514}",J9="\u{1D52E}",Z9="\u2A0C",X9="\u{1D562}",K9="\u211A",eU="\u2057",nU="\u{1D4AC}",tU="\u{1D4C6}",rU="\u210D",iU="\u2A16",oU="?",sU="\u225F",aU='"',lU='"',cU="\u21DB",uU="\u223D\u0331",fU="\u0154",dU="\u0155",pU="\u221A",hU="\u29B3",mU="\u27E9",gU="\u27EB",vU="\u2992",yU="\u29A5",_U="\u27E9",EU="\xBB",SU="\u2975",wU="\u21E5",kU="\u2920",bU="\u2933",TU="\u2192",xU="\u21A0",NU="\u21D2",CU="\u291E",IU="\u21AA",DU="\u21AC",AU="\u2945",OU="\u2974",LU="\u2916",FU="\u21A3",RU="\u219D",PU="\u291A",MU="\u291C",qU="\u2236",$U="\u211A",jU="\u290D",VU="\u290F",UU="\u2910",zU="\u2773",BU="}",QU="]",HU="\u298C",GU="\u298E",WU="\u2990",YU="\u0158",JU="\u0159",ZU="\u0156",XU="\u0157",KU="\u2309",ez="}",nz="\u0420",tz="\u0440",rz="\u2937",iz="\u2969",oz="\u201D",sz="\u201D",az="\u21B3",lz="\u211C",cz="\u211B",uz="\u211C",fz="\u211D",dz="\u211C",pz="\u25AD",hz="\xAE",mz="\xAE",gz="\u220B",vz="\u21CB",yz="\u296F",_z="\u297D",Ez="\u230B",Sz="\u{1D52F}",wz="\u211C",kz="\u2964",bz="\u21C1",Tz="\u21C0",xz="\u296C",Nz="\u03A1",Cz="\u03C1",Iz="\u03F1",Dz="\u27E9",Az="\u21E5",Oz="\u2192",Lz="\u2192",Fz="\u21D2",Rz="\u21C4",Pz="\u21A3",Mz="\u2309",qz="\u27E7",$z="\u295D",jz="\u2955",Vz="\u21C2",Uz="\u230B",zz="\u21C1",Bz="\u21C0",Qz="\u21C4",Hz="\u21CC",Gz="\u21C9",Wz="\u219D",Yz="\u21A6",Jz="\u22A2",Zz="\u295B",Xz="\u22CC",Kz="\u29D0",eB="\u22B3",nB="\u22B5",tB="\u294F",rB="\u295C",iB="\u2954",oB="\u21BE",sB="\u2953",aB="\u21C0",lB="\u02DA",cB="\u2253",uB="\u21C4",fB="\u21CC",dB="\u200F",pB="\u23B1",hB="\u23B1",mB="\u2AEE",gB="\u27ED",vB="\u21FE",yB="\u27E7",_B="\u2986",EB="\u{1D563}",SB="\u211D",wB="\u2A2E",kB="\u2A35",bB="\u2970",TB=")",xB="\u2994",NB="\u2A12",CB="\u21C9",IB="\u21DB",DB="\u203A",AB="\u{1D4C7}",OB="\u211B",LB="\u21B1",FB="\u21B1",RB="]",PB="\u2019",MB="\u2019",qB="\u22CC",$B="\u22CA",jB="\u25B9",VB="\u22B5",UB="\u25B8",zB="\u29CE",BB="\u29F4",QB="\u2968",HB="\u211E",GB="\u015A",WB="\u015B",YB="\u201A",JB="\u2AB8",ZB="\u0160",XB="\u0161",KB="\u2ABC",eQ="\u227B",nQ="\u227D",tQ="\u2AB0",rQ="\u2AB4",iQ="\u015E",oQ="\u015F",sQ="\u015C",aQ="\u015D",lQ="\u2ABA",cQ="\u2AB6",uQ="\u22E9",fQ="\u2A13",dQ="\u227F",pQ="\u0421",hQ="\u0441",mQ="\u22A1",gQ="\u22C5",vQ="\u2A66",yQ="\u2925",_Q="\u2198",EQ="\u21D8",SQ="\u2198",wQ="\xA7",kQ=";",bQ="\u2929",TQ="\u2216",xQ="\u2216",NQ="\u2736",CQ="\u{1D516}",IQ="\u{1D530}",DQ="\u2322",AQ="\u266F",OQ="\u0429",LQ="\u0449",FQ="\u0428",RQ="\u0448",PQ="\u2193",MQ="\u2190",qQ="\u2223",$Q="\u2225",jQ="\u2192",VQ="\u2191",UQ="\xAD",zQ="\u03A3",BQ="\u03C3",QQ="\u03C2",HQ="\u03C2",GQ="\u223C",WQ="\u2A6A",YQ="\u2243",JQ="\u2243",ZQ="\u2A9E",XQ="\u2AA0",KQ="\u2A9D",eH="\u2A9F",nH="\u2246",tH="\u2A24",rH="\u2972",iH="\u2190",oH="\u2218",sH="\u2216",aH="\u2A33",lH="\u29E4",cH="\u2223",uH="\u2323",fH="\u2AAA",dH="\u2AAC",pH="\u2AAC\uFE00",hH="\u042C",mH="\u044C",gH="\u233F",vH="\u29C4",yH="/",_H="\u{1D54A}",EH="\u{1D564}",SH="\u2660",wH="\u2660",kH="\u2225",bH="\u2293",TH="\u2293\uFE00",xH="\u2294",NH="\u2294\uFE00",CH="\u221A",IH="\u228F",DH="\u2291",AH="\u228F",OH="\u2291",LH="\u2290",FH="\u2292",RH="\u2290",PH="\u2292",MH="\u25A1",qH="\u25A1",$H="\u2293",jH="\u228F",VH="\u2291",UH="\u2290",zH="\u2292",BH="\u2294",QH="\u25AA",HH="\u25A1",GH="\u25AA",WH="\u2192",YH="\u{1D4AE}",JH="\u{1D4C8}",ZH="\u2216",XH="\u2323",KH="\u22C6",eG="\u22C6",nG="\u2606",tG="\u2605",rG="\u03F5",iG="\u03D5",oG="\xAF",sG="\u2282",aG="\u22D0",lG="\u2ABD",cG="\u2AC5",uG="\u2286",fG="\u2AC3",dG="\u2AC1",pG="\u2ACB",hG="\u228A",mG="\u2ABF",gG="\u2979",vG="\u2282",yG="\u22D0",_G="\u2286",EG="\u2AC5",SG="\u2286",wG="\u228A",kG="\u2ACB",bG="\u2AC7",TG="\u2AD5",xG="\u2AD3",NG="\u2AB8",CG="\u227B",IG="\u227D",DG="\u227B",AG="\u2AB0",OG="\u227D",LG="\u227F",FG="\u2AB0",RG="\u2ABA",PG="\u2AB6",MG="\u22E9",qG="\u227F",$G="\u220B",jG="\u2211",VG="\u2211",UG="\u266A",zG="\xB9",BG="\xB2",QG="\xB3",HG="\u2283",GG="\u22D1",WG="\u2ABE",YG="\u2AD8",JG="\u2AC6",ZG="\u2287",XG="\u2AC4",KG="\u2283",eW="\u2287",nW="\u27C9",tW="\u2AD7",rW="\u297B",iW="\u2AC2",oW="\u2ACC",sW="\u228B",aW="\u2AC0",lW="\u2283",cW="\u22D1",uW="\u2287",fW="\u2AC6",dW="\u228B",pW="\u2ACC",hW="\u2AC8",mW="\u2AD4",gW="\u2AD6",vW="\u2926",yW="\u2199",_W="\u21D9",EW="\u2199",SW="\u292A",wW="\xDF",kW="	",bW="\u2316",TW="\u03A4",xW="\u03C4",NW="\u23B4",CW="\u0164",IW="\u0165",DW="\u0162",AW="\u0163",OW="\u0422",LW="\u0442",FW="\u20DB",RW="\u2315",PW="\u{1D517}",MW="\u{1D531}",qW="\u2234",$W="\u2234",jW="\u2234",VW="\u0398",UW="\u03B8",zW="\u03D1",BW="\u03D1",QW="\u2248",HW="\u223C",GW="\u205F\u200A",WW="\u2009",YW="\u2009",JW="\u2248",ZW="\u223C",XW="\xDE",KW="\xFE",eY="\u02DC",nY="\u223C",tY="\u2243",rY="\u2245",iY="\u2248",oY="\u2A31",sY="\u22A0",aY="\xD7",lY="\u2A30",cY="\u222D",uY="\u2928",fY="\u2336",dY="\u2AF1",pY="\u22A4",hY="\u{1D54B}",mY="\u{1D565}",gY="\u2ADA",vY="\u2929",yY="\u2034",_Y="\u2122",EY="\u2122",SY="\u25B5",wY="\u25BF",kY="\u25C3",bY="\u22B4",TY="\u225C",xY="\u25B9",NY="\u22B5",CY="\u25EC",IY="\u225C",DY="\u2A3A",AY="\u20DB",OY="\u2A39",LY="\u29CD",FY="\u2A3B",RY="\u23E2",PY="\u{1D4AF}",MY="\u{1D4C9}",qY="\u0426",$Y="\u0446",jY="\u040B",VY="\u045B",UY="\u0166",zY="\u0167",BY="\u226C",QY="\u219E",HY="\u21A0",GY="\xDA",WY="\xFA",YY="\u2191",JY="\u219F",ZY="\u21D1",XY="\u2949",KY="\u040E",eJ="\u045E",nJ="\u016C",tJ="\u016D",rJ="\xDB",iJ="\xFB",oJ="\u0423",sJ="\u0443",aJ="\u21C5",lJ="\u0170",cJ="\u0171",uJ="\u296E",fJ="\u297E",dJ="\u{1D518}",pJ="\u{1D532}",hJ="\xD9",mJ="\xF9",gJ="\u2963",vJ="\u21BF",yJ="\u21BE",_J="\u2580",EJ="\u231C",SJ="\u231C",wJ="\u230F",kJ="\u25F8",bJ="\u016A",TJ="\u016B",xJ="\xA8",NJ="_",CJ="\u23DF",IJ="\u23B5",DJ="\u23DD",AJ="\u22C3",OJ="\u228E",LJ="\u0172",FJ="\u0173",RJ="\u{1D54C}",PJ="\u{1D566}",MJ="\u2912",qJ="\u2191",$J="\u2191",jJ="\u21D1",VJ="\u21C5",UJ="\u2195",zJ="\u2195",BJ="\u21D5",QJ="\u296E",HJ="\u21BF",GJ="\u21BE",WJ="\u228E",YJ="\u2196",JJ="\u2197",ZJ="\u03C5",XJ="\u03D2",KJ="\u03D2",eZ="\u03A5",nZ="\u03C5",tZ="\u21A5",rZ="\u22A5",iZ="\u21C8",oZ="\u231D",sZ="\u231D",aZ="\u230E",lZ="\u016E",cZ="\u016F",uZ="\u25F9",fZ="\u{1D4B0}",dZ="\u{1D4CA}",pZ="\u22F0",hZ="\u0168",mZ="\u0169",gZ="\u25B5",vZ="\u25B4",yZ="\u21C8",_Z="\xDC",EZ="\xFC",SZ="\u29A7",wZ="\u299C",kZ="\u03F5",bZ="\u03F0",TZ="\u2205",xZ="\u03D5",NZ="\u03D6",CZ="\u221D",IZ="\u2195",DZ="\u21D5",AZ="\u03F1",OZ="\u03C2",LZ="\u228A\uFE00",FZ="\u2ACB\uFE00",RZ="\u228B\uFE00",PZ="\u2ACC\uFE00",MZ="\u03D1",qZ="\u22B2",$Z="\u22B3",jZ="\u2AE8",VZ="\u2AEB",UZ="\u2AE9",zZ="\u0412",BZ="\u0432",QZ="\u22A2",HZ="\u22A8",GZ="\u22A9",WZ="\u22AB",YZ="\u2AE6",JZ="\u22BB",ZZ="\u2228",XZ="\u22C1",KZ="\u225A",eX="\u22EE",nX="|",tX="\u2016",rX="|",iX="\u2016",oX="\u2223",sX="|",aX="\u2758",lX="\u2240",cX="\u200A",uX="\u{1D519}",fX="\u{1D533}",dX="\u22B2",pX="\u2282\u20D2",hX="\u2283\u20D2",mX="\u{1D54D}",gX="\u{1D567}",vX="\u221D",yX="\u22B3",_X="\u{1D4B1}",EX="\u{1D4CB}",SX="\u2ACB\uFE00",wX="\u228A\uFE00",kX="\u2ACC\uFE00",bX="\u228B\uFE00",TX="\u22AA",xX="\u299A",NX="\u0174",CX="\u0175",IX="\u2A5F",DX="\u2227",AX="\u22C0",OX="\u2259",LX="\u2118",FX="\u{1D51A}",RX="\u{1D534}",PX="\u{1D54E}",MX="\u{1D568}",qX="\u2118",$X="\u2240",jX="\u2240",VX="\u{1D4B2}",UX="\u{1D4CC}",zX="\u22C2",BX="\u25EF",QX="\u22C3",HX="\u25BD",GX="\u{1D51B}",WX="\u{1D535}",YX="\u27F7",JX="\u27FA",ZX="\u039E",XX="\u03BE",KX="\u27F5",eK="\u27F8",nK="\u27FC",tK="\u22FB",rK="\u2A00",iK="\u{1D54F}",oK="\u{1D569}",sK="\u2A01",aK="\u2A02",lK="\u27F6",cK="\u27F9",uK="\u{1D4B3}",fK="\u{1D4CD}",dK="\u2A06",pK="\u2A04",hK="\u25B3",mK="\u22C1",gK="\u22C0",vK="\xDD",yK="\xFD",_K="\u042F",EK="\u044F",SK="\u0176",wK="\u0177",kK="\u042B",bK="\u044B",TK="\xA5",xK="\u{1D51C}",NK="\u{1D536}",CK="\u0407",IK="\u0457",DK="\u{1D550}",AK="\u{1D56A}",OK="\u{1D4B4}",LK="\u{1D4CE}",FK="\u042E",RK="\u044E",PK="\xFF",MK="\u0178",qK="\u0179",$K="\u017A",jK="\u017D",VK="\u017E",UK="\u0417",zK="\u0437",BK="\u017B",QK="\u017C",HK="\u2128",GK="\u200B",WK="\u0396",YK="\u03B6",JK="\u{1D537}",ZK="\u2128",XK="\u0416",KK="\u0436",eee="\u21DD",nee="\u{1D56B}",tee="\u2124",ree="\u{1D4B5}",iee="\u{1D4CF}",oee="\u200D",see="\u200C";var aee={Aacute:Bw,aacute:Qw,Abreve:Hw,abreve:Gw,ac:Ww,acd:Yw,acE:Jw,Acirc:Zw,acirc:Xw,acute:Kw,Acy:ek,acy:nk,AElig:tk,aelig:rk,af:ik,Afr:ok,afr:sk,Agrave:ak,agrave:lk,alefsym:ck,aleph:uk,Alpha:fk,alpha:dk,Amacr:pk,amacr:hk,amalg:mk,amp:gk,AMP:vk,andand:yk,And:_k,and:Ek,andd:Sk,andslope:wk,andv:kk,ang:bk,ange:Tk,angle:xk,angmsdaa:Nk,angmsdab:Ck,angmsdac:Ik,angmsdad:Dk,angmsdae:Ak,angmsdaf:Ok,angmsdag:Lk,angmsdah:Fk,angmsd:Rk,angrt:Pk,angrtvb:Mk,angrtvbd:qk,angsph:$k,angst:jk,angzarr:Vk,Aogon:Uk,aogon:zk,Aopf:Bk,aopf:Qk,apacir:Hk,ap:Gk,apE:Wk,ape:Yk,apid:Jk,apos:Zk,ApplyFunction:Xk,approx:Kk,approxeq:eb,Aring:nb,aring:tb,Ascr:rb,ascr:ib,Assign:ob,ast:sb,asymp:ab,asympeq:lb,Atilde:cb,atilde:ub,Auml:fb,auml:db,awconint:pb,awint:hb,backcong:mb,backepsilon:gb,backprime:vb,backsim:yb,backsimeq:_b,Backslash:Eb,Barv:Sb,barvee:wb,barwed:kb,Barwed:bb,barwedge:Tb,bbrk:xb,bbrktbrk:Nb,bcong:Cb,Bcy:Ib,bcy:Db,bdquo:Ab,becaus:Ob,because:Lb,Because:Fb,bemptyv:Rb,bepsi:Pb,bernou:Mb,Bernoullis:qb,Beta:$b,beta:jb,beth:Vb,between:Ub,Bfr:zb,bfr:Bb,bigcap:Qb,bigcirc:Hb,bigcup:Gb,bigodot:Wb,bigoplus:Yb,bigotimes:Jb,bigsqcup:Zb,bigstar:Xb,bigtriangledown:Kb,bigtriangleup:eT,biguplus:nT,bigvee:tT,bigwedge:rT,bkarow:iT,blacklozenge:oT,blacksquare:sT,blacktriangle:aT,blacktriangledown:lT,blacktriangleleft:cT,blacktriangleright:uT,blank:fT,blk12:dT,blk14:pT,blk34:hT,block:mT,bne:gT,bnequiv:vT,bNot:yT,bnot:_T,Bopf:ET,bopf:ST,bot:wT,bottom:kT,bowtie:bT,boxbox:TT,boxdl:xT,boxdL:NT,boxDl:CT,boxDL:IT,boxdr:DT,boxdR:AT,boxDr:OT,boxDR:LT,boxh:FT,boxH:RT,boxhd:PT,boxHd:MT,boxhD:qT,boxHD:$T,boxhu:jT,boxHu:VT,boxhU:UT,boxHU:zT,boxminus:BT,boxplus:QT,boxtimes:HT,boxul:GT,boxuL:WT,boxUl:YT,boxUL:JT,boxur:ZT,boxuR:XT,boxUr:KT,boxUR:ex,boxv:nx,boxV:tx,boxvh:rx,boxvH:ix,boxVh:ox,boxVH:sx,boxvl:ax,boxvL:lx,boxVl:cx,boxVL:ux,boxvr:fx,boxvR:dx,boxVr:px,boxVR:hx,bprime:mx,breve:gx,Breve:vx,brvbar:yx,bscr:_x,Bscr:Ex,bsemi:Sx,bsim:wx,bsime:kx,bsolb:bx,bsol:Tx,bsolhsub:xx,bull:Nx,bullet:Cx,bump:Ix,bumpE:Dx,bumpe:Ax,Bumpeq:Ox,bumpeq:Lx,Cacute:Fx,cacute:Rx,capand:Px,capbrcup:Mx,capcap:qx,cap:$x,Cap:jx,capcup:Vx,capdot:Ux,CapitalDifferentialD:zx,caps:Bx,caret:Qx,caron:Hx,Cayleys:Gx,ccaps:Wx,Ccaron:Yx,ccaron:Jx,Ccedil:Zx,ccedil:Xx,Ccirc:Kx,ccirc:eN,Cconint:nN,ccups:tN,ccupssm:rN,Cdot:iN,cdot:oN,cedil:sN,Cedilla:aN,cemptyv:lN,cent:cN,centerdot:uN,CenterDot:fN,cfr:dN,Cfr:pN,CHcy:hN,chcy:mN,check:gN,checkmark:vN,Chi:yN,chi:_N,circ:EN,circeq:SN,circlearrowleft:wN,circlearrowright:kN,circledast:bN,circledcirc:TN,circleddash:xN,CircleDot:NN,circledR:CN,circledS:IN,CircleMinus:DN,CirclePlus:AN,CircleTimes:ON,cir:LN,cirE:FN,cire:RN,cirfnint:PN,cirmid:MN,cirscir:qN,ClockwiseContourIntegral:$N,CloseCurlyDoubleQuote:jN,CloseCurlyQuote:VN,clubs:UN,clubsuit:zN,colon:BN,Colon:QN,Colone:HN,colone:GN,coloneq:WN,comma:YN,commat:JN,comp:ZN,compfn:XN,complement:KN,complexes:eC,cong:nC,congdot:tC,Congruent:rC,conint:iC,Conint:oC,ContourIntegral:sC,copf:aC,Copf:lC,coprod:cC,Coproduct:uC,copy:fC,COPY:dC,copysr:pC,CounterClockwiseContourIntegral:hC,crarr:mC,cross:gC,Cross:vC,Cscr:yC,cscr:_C,csub:EC,csube:SC,csup:wC,csupe:kC,ctdot:bC,cudarrl:TC,cudarrr:xC,cuepr:NC,cuesc:CC,cularr:IC,cularrp:DC,cupbrcap:AC,cupcap:OC,CupCap:LC,cup:FC,Cup:RC,cupcup:PC,cupdot:MC,cupor:qC,cups:$C,curarr:jC,curarrm:VC,curlyeqprec:UC,curlyeqsucc:zC,curlyvee:BC,curlywedge:QC,curren:HC,curvearrowleft:GC,curvearrowright:WC,cuvee:YC,cuwed:JC,cwconint:ZC,cwint:XC,cylcty:KC,dagger:eI,Dagger:nI,daleth:tI,darr:rI,Darr:iI,dArr:oI,dash:sI,Dashv:aI,dashv:lI,dbkarow:cI,dblac:uI,Dcaron:fI,dcaron:dI,Dcy:pI,dcy:hI,ddagger:mI,ddarr:gI,DD:vI,dd:yI,DDotrahd:_I,ddotseq:EI,deg:SI,Del:wI,Delta:kI,delta:bI,demptyv:TI,dfisht:xI,Dfr:NI,dfr:CI,dHar:II,dharl:DI,dharr:AI,DiacriticalAcute:OI,DiacriticalDot:LI,DiacriticalDoubleAcute:FI,DiacriticalGrave:RI,DiacriticalTilde:PI,diam:MI,diamond:qI,Diamond:$I,diamondsuit:jI,diams:VI,die:UI,DifferentialD:zI,digamma:BI,disin:QI,div:HI,divide:GI,divideontimes:WI,divonx:YI,DJcy:JI,djcy:ZI,dlcorn:XI,dlcrop:KI,dollar:eD,Dopf:nD,dopf:tD,Dot:rD,dot:iD,DotDot:oD,doteq:sD,doteqdot:aD,DotEqual:lD,dotminus:cD,dotplus:uD,dotsquare:fD,doublebarwedge:dD,DoubleContourIntegral:pD,DoubleDot:hD,DoubleDownArrow:mD,DoubleLeftArrow:gD,DoubleLeftRightArrow:vD,DoubleLeftTee:yD,DoubleLongLeftArrow:_D,DoubleLongLeftRightArrow:ED,DoubleLongRightArrow:SD,DoubleRightArrow:wD,DoubleRightTee:kD,DoubleUpArrow:bD,DoubleUpDownArrow:TD,DoubleVerticalBar:xD,DownArrowBar:ND,downarrow:CD,DownArrow:ID,Downarrow:DD,DownArrowUpArrow:AD,DownBreve:OD,downdownarrows:LD,downharpoonleft:FD,downharpoonright:RD,DownLeftRightVector:PD,DownLeftTeeVector:MD,DownLeftVectorBar:qD,DownLeftVector:$D,DownRightTeeVector:jD,DownRightVectorBar:VD,DownRightVector:UD,DownTeeArrow:zD,DownTee:BD,drbkarow:QD,drcorn:HD,drcrop:GD,Dscr:WD,dscr:YD,DScy:JD,dscy:ZD,dsol:XD,Dstrok:KD,dstrok:eA,dtdot:nA,dtri:tA,dtrif:rA,duarr:iA,duhar:oA,dwangle:sA,DZcy:aA,dzcy:lA,dzigrarr:cA,Eacute:uA,eacute:fA,easter:dA,Ecaron:pA,ecaron:hA,Ecirc:mA,ecirc:gA,ecir:vA,ecolon:yA,Ecy:_A,ecy:EA,eDDot:SA,Edot:wA,edot:kA,eDot:bA,ee:TA,efDot:xA,Efr:NA,efr:CA,eg:IA,Egrave:DA,egrave:AA,egs:OA,egsdot:LA,el:FA,Element:RA,elinters:PA,ell:MA,els:qA,elsdot:$A,Emacr:jA,emacr:VA,empty:UA,emptyset:zA,EmptySmallSquare:BA,emptyv:QA,EmptyVerySmallSquare:HA,emsp13:GA,emsp14:WA,emsp:YA,ENG:JA,eng:ZA,ensp:XA,Eogon:KA,eogon:e2,Eopf:n2,eopf:t2,epar:r2,eparsl:i2,eplus:o2,epsi:s2,Epsilon:a2,epsilon:l2,epsiv:c2,eqcirc:u2,eqcolon:f2,eqsim:d2,eqslantgtr:p2,eqslantless:h2,Equal:m2,equals:g2,EqualTilde:v2,equest:y2,Equilibrium:_2,equiv:E2,equivDD:S2,eqvparsl:w2,erarr:k2,erDot:b2,escr:T2,Escr:x2,esdot:N2,Esim:C2,esim:I2,Eta:D2,eta:A2,ETH:O2,eth:L2,Euml:F2,euml:R2,euro:P2,excl:M2,exist:q2,Exists:$2,expectation:j2,exponentiale:V2,ExponentialE:U2,fallingdotseq:z2,Fcy:B2,fcy:Q2,female:H2,ffilig:G2,fflig:W2,ffllig:Y2,Ffr:J2,ffr:Z2,filig:X2,FilledSmallSquare:K2,FilledVerySmallSquare:eO,fjlig:nO,flat:tO,fllig:rO,fltns:iO,fnof:oO,Fopf:sO,fopf:aO,forall:lO,ForAll:cO,fork:uO,forkv:fO,Fouriertrf:dO,fpartint:pO,frac12:hO,frac13:mO,frac14:gO,frac15:vO,frac16:yO,frac18:_O,frac23:EO,frac25:SO,frac34:wO,frac35:kO,frac38:bO,frac45:TO,frac56:xO,frac58:NO,frac78:CO,frasl:IO,frown:DO,fscr:AO,Fscr:OO,gacute:LO,Gamma:FO,gamma:RO,Gammad:PO,gammad:MO,gap:qO,Gbreve:$O,gbreve:jO,Gcedil:VO,Gcirc:UO,gcirc:zO,Gcy:BO,gcy:QO,Gdot:HO,gdot:GO,ge:WO,gE:YO,gEl:JO,gel:ZO,geq:XO,geqq:KO,geqslant:eL,gescc:nL,ges:tL,gesdot:rL,gesdoto:iL,gesdotol:oL,gesl:sL,gesles:aL,Gfr:lL,gfr:cL,gg:uL,Gg:fL,ggg:dL,gimel:pL,GJcy:hL,gjcy:mL,gla:gL,gl:vL,glE:yL,glj:_L,gnap:EL,gnapprox:SL,gne:wL,gnE:kL,gneq:bL,gneqq:TL,gnsim:xL,Gopf:NL,gopf:CL,grave:IL,GreaterEqual:DL,GreaterEqualLess:AL,GreaterFullEqual:OL,GreaterGreater:LL,GreaterLess:FL,GreaterSlantEqual:RL,GreaterTilde:PL,Gscr:ML,gscr:qL,gsim:$L,gsime:jL,gsiml:VL,gtcc:UL,gtcir:zL,gt:BL,GT:QL,Gt:HL,gtdot:GL,gtlPar:WL,gtquest:YL,gtrapprox:JL,gtrarr:ZL,gtrdot:XL,gtreqless:KL,gtreqqless:eF,gtrless:nF,gtrsim:tF,gvertneqq:rF,gvnE:iF,Hacek:oF,hairsp:sF,half:aF,hamilt:lF,HARDcy:cF,hardcy:uF,harrcir:fF,harr:dF,hArr:pF,harrw:hF,Hat:mF,hbar:gF,Hcirc:vF,hcirc:yF,hearts:_F,heartsuit:EF,hellip:SF,hercon:wF,hfr:kF,Hfr:bF,HilbertSpace:TF,hksearow:xF,hkswarow:NF,hoarr:CF,homtht:IF,hookleftarrow:DF,hookrightarrow:AF,hopf:OF,Hopf:LF,horbar:FF,HorizontalLine:RF,hscr:PF,Hscr:MF,hslash:qF,Hstrok:$F,hstrok:jF,HumpDownHump:VF,HumpEqual:UF,hybull:zF,hyphen:BF,Iacute:QF,iacute:HF,ic:GF,Icirc:WF,icirc:YF,Icy:JF,icy:ZF,Idot:XF,IEcy:KF,iecy:eR,iexcl:nR,iff:tR,ifr:rR,Ifr:iR,Igrave:oR,igrave:sR,ii:aR,iiiint:lR,iiint:cR,iinfin:uR,iiota:fR,IJlig:dR,ijlig:pR,Imacr:hR,imacr:mR,image:gR,ImaginaryI:vR,imagline:yR,imagpart:_R,imath:ER,Im:SR,imof:wR,imped:kR,Implies:bR,incare:TR,in:"\u2208",infin:xR,infintie:NR,inodot:CR,intcal:IR,int:DR,Int:AR,integers:OR,Integral:LR,intercal:FR,Intersection:RR,intlarhk:PR,intprod:MR,InvisibleComma:qR,InvisibleTimes:$R,IOcy:jR,iocy:VR,Iogon:UR,iogon:zR,Iopf:BR,iopf:QR,Iota:HR,iota:GR,iprod:WR,iquest:YR,iscr:JR,Iscr:ZR,isin:XR,isindot:KR,isinE:e3,isins:n3,isinsv:t3,isinv:r3,it:i3,Itilde:o3,itilde:s3,Iukcy:a3,iukcy:l3,Iuml:c3,iuml:u3,Jcirc:f3,jcirc:d3,Jcy:p3,jcy:h3,Jfr:m3,jfr:g3,jmath:v3,Jopf:y3,jopf:_3,Jscr:E3,jscr:S3,Jsercy:w3,jsercy:k3,Jukcy:b3,jukcy:T3,Kappa:x3,kappa:N3,kappav:C3,Kcedil:I3,kcedil:D3,Kcy:A3,kcy:O3,Kfr:L3,kfr:F3,kgreen:R3,KHcy:P3,khcy:M3,KJcy:q3,kjcy:$3,Kopf:j3,kopf:V3,Kscr:U3,kscr:z3,lAarr:B3,Lacute:Q3,lacute:H3,laemptyv:G3,lagran:W3,Lambda:Y3,lambda:J3,lang:Z3,Lang:X3,langd:K3,langle:eP,lap:nP,Laplacetrf:tP,laquo:rP,larrb:iP,larrbfs:oP,larr:sP,Larr:aP,lArr:lP,larrfs:cP,larrhk:uP,larrlp:fP,larrpl:dP,larrsim:pP,larrtl:hP,latail:mP,lAtail:gP,lat:vP,late:yP,lates:_P,lbarr:EP,lBarr:SP,lbbrk:wP,lbrace:kP,lbrack:bP,lbrke:TP,lbrksld:xP,lbrkslu:NP,Lcaron:CP,lcaron:IP,Lcedil:DP,lcedil:AP,lceil:OP,lcub:LP,Lcy:FP,lcy:RP,ldca:PP,ldquo:MP,ldquor:qP,ldrdhar:$P,ldrushar:jP,ldsh:VP,le:UP,lE:zP,LeftAngleBracket:BP,LeftArrowBar:QP,leftarrow:HP,LeftArrow:GP,Leftarrow:WP,LeftArrowRightArrow:YP,leftarrowtail:JP,LeftCeiling:ZP,LeftDoubleBracket:XP,LeftDownTeeVector:KP,LeftDownVectorBar:eM,LeftDownVector:nM,LeftFloor:tM,leftharpoondown:rM,leftharpoonup:iM,leftleftarrows:oM,leftrightarrow:sM,LeftRightArrow:aM,Leftrightarrow:lM,leftrightarrows:cM,leftrightharpoons:uM,leftrightsquigarrow:fM,LeftRightVector:dM,LeftTeeArrow:pM,LeftTee:hM,LeftTeeVector:mM,leftthreetimes:gM,LeftTriangleBar:vM,LeftTriangle:yM,LeftTriangleEqual:_M,LeftUpDownVector:EM,LeftUpTeeVector:SM,LeftUpVectorBar:wM,LeftUpVector:kM,LeftVectorBar:bM,LeftVector:TM,lEg:xM,leg:NM,leq:CM,leqq:IM,leqslant:DM,lescc:AM,les:OM,lesdot:LM,lesdoto:FM,lesdotor:RM,lesg:PM,lesges:MM,lessapprox:qM,lessdot:$M,lesseqgtr:jM,lesseqqgtr:VM,LessEqualGreater:UM,LessFullEqual:zM,LessGreater:BM,lessgtr:QM,LessLess:HM,lesssim:GM,LessSlantEqual:WM,LessTilde:YM,lfisht:JM,lfloor:ZM,Lfr:XM,lfr:KM,lg:e4,lgE:n4,lHar:t4,lhard:r4,lharu:i4,lharul:o4,lhblk:s4,LJcy:a4,ljcy:l4,llarr:c4,ll:u4,Ll:f4,llcorner:d4,Lleftarrow:p4,llhard:h4,lltri:m4,Lmidot:g4,lmidot:v4,lmoustache:y4,lmoust:_4,lnap:E4,lnapprox:S4,lne:w4,lnE:k4,lneq:b4,lneqq:T4,lnsim:x4,loang:N4,loarr:C4,lobrk:I4,longleftarrow:D4,LongLeftArrow:A4,Longleftarrow:O4,longleftrightarrow:L4,LongLeftRightArrow:F4,Longleftrightarrow:R4,longmapsto:P4,longrightarrow:M4,LongRightArrow:q4,Longrightarrow:$4,looparrowleft:j4,looparrowright:V4,lopar:U4,Lopf:z4,lopf:B4,loplus:Q4,lotimes:H4,lowast:G4,lowbar:W4,LowerLeftArrow:Y4,LowerRightArrow:J4,loz:Z4,lozenge:X4,lozf:K4,lpar:e6,lparlt:n6,lrarr:t6,lrcorner:r6,lrhar:i6,lrhard:o6,lrm:s6,lrtri:a6,lsaquo:l6,lscr:c6,Lscr:u6,lsh:f6,Lsh:d6,lsim:p6,lsime:h6,lsimg:m6,lsqb:g6,lsquo:v6,lsquor:y6,Lstrok:_6,lstrok:E6,ltcc:S6,ltcir:w6,lt:k6,LT:b6,Lt:T6,ltdot:x6,lthree:N6,ltimes:C6,ltlarr:I6,ltquest:D6,ltri:A6,ltrie:O6,ltrif:L6,ltrPar:F6,lurdshar:R6,luruhar:P6,lvertneqq:M6,lvnE:q6,macr:$6,male:j6,malt:V6,maltese:U6,Map:"\u2905",map:z6,mapsto:B6,mapstodown:Q6,mapstoleft:H6,mapstoup:G6,marker:W6,mcomma:Y6,Mcy:J6,mcy:Z6,mdash:X6,mDDot:K6,measuredangle:eq,MediumSpace:nq,Mellintrf:tq,Mfr:rq,mfr:iq,mho:oq,micro:sq,midast:aq,midcir:lq,mid:cq,middot:uq,minusb:fq,minus:dq,minusd:pq,minusdu:hq,MinusPlus:mq,mlcp:gq,mldr:vq,mnplus:yq,models:_q,Mopf:Eq,mopf:Sq,mp:wq,mscr:kq,Mscr:bq,mstpos:Tq,Mu:xq,mu:Nq,multimap:Cq,mumap:Iq,nabla:Dq,Nacute:Aq,nacute:Oq,nang:Lq,nap:Fq,napE:Rq,napid:Pq,napos:Mq,napprox:qq,natural:$q,naturals:jq,natur:Vq,nbsp:Uq,nbump:zq,nbumpe:Bq,ncap:Qq,Ncaron:Hq,ncaron:Gq,Ncedil:Wq,ncedil:Yq,ncong:Jq,ncongdot:Zq,ncup:Xq,Ncy:Kq,ncy:e5,ndash:n5,nearhk:t5,nearr:r5,neArr:i5,nearrow:o5,ne:s5,nedot:a5,NegativeMediumSpace:l5,NegativeThickSpace:c5,NegativeThinSpace:u5,NegativeVeryThinSpace:f5,nequiv:d5,nesear:p5,nesim:h5,NestedGreaterGreater:m5,NestedLessLess:g5,NewLine:v5,nexist:y5,nexists:_5,Nfr:E5,nfr:S5,ngE:w5,nge:k5,ngeq:b5,ngeqq:T5,ngeqslant:x5,nges:N5,nGg:C5,ngsim:I5,nGt:D5,ngt:A5,ngtr:O5,nGtv:L5,nharr:F5,nhArr:R5,nhpar:P5,ni:M5,nis:q5,nisd:$5,niv:j5,NJcy:V5,njcy:U5,nlarr:z5,nlArr:B5,nldr:Q5,nlE:H5,nle:G5,nleftarrow:W5,nLeftarrow:Y5,nleftrightarrow:J5,nLeftrightarrow:Z5,nleq:X5,nleqq:K5,nleqslant:e8,nles:n8,nless:t8,nLl:r8,nlsim:i8,nLt:o8,nlt:s8,nltri:a8,nltrie:l8,nLtv:c8,nmid:u8,NoBreak:f8,NonBreakingSpace:d8,nopf:p8,Nopf:h8,Not:m8,not:g8,NotCongruent:v8,NotCupCap:y8,NotDoubleVerticalBar:_8,NotElement:E8,NotEqual:S8,NotEqualTilde:w8,NotExists:k8,NotGreater:b8,NotGreaterEqual:T8,NotGreaterFullEqual:x8,NotGreaterGreater:N8,NotGreaterLess:C8,NotGreaterSlantEqual:I8,NotGreaterTilde:D8,NotHumpDownHump:A8,NotHumpEqual:O8,notin:L8,notindot:F8,notinE:R8,notinva:P8,notinvb:M8,notinvc:q8,NotLeftTriangleBar:$8,NotLeftTriangle:j8,NotLeftTriangleEqual:V8,NotLess:U8,NotLessEqual:z8,NotLessGreater:B8,NotLessLess:Q8,NotLessSlantEqual:H8,NotLessTilde:G8,NotNestedGreaterGreater:W8,NotNestedLessLess:Y8,notni:J8,notniva:Z8,notnivb:X8,notnivc:K8,NotPrecedes:e$,NotPrecedesEqual:n$,NotPrecedesSlantEqual:t$,NotReverseElement:r$,NotRightTriangleBar:i$,NotRightTriangle:o$,NotRightTriangleEqual:s$,NotSquareSubset:a$,NotSquareSubsetEqual:l$,NotSquareSuperset:c$,NotSquareSupersetEqual:u$,NotSubset:f$,NotSubsetEqual:d$,NotSucceeds:p$,NotSucceedsEqual:h$,NotSucceedsSlantEqual:m$,NotSucceedsTilde:g$,NotSuperset:v$,NotSupersetEqual:y$,NotTilde:_$,NotTildeEqual:E$,NotTildeFullEqual:S$,NotTildeTilde:w$,NotVerticalBar:k$,nparallel:b$,npar:T$,nparsl:x$,npart:N$,npolint:C$,npr:I$,nprcue:D$,nprec:A$,npreceq:O$,npre:L$,nrarrc:F$,nrarr:R$,nrArr:P$,nrarrw:M$,nrightarrow:q$,nRightarrow:$$,nrtri:j$,nrtrie:V$,nsc:U$,nsccue:z$,nsce:B$,Nscr:Q$,nscr:H$,nshortmid:G$,nshortparallel:W$,nsim:Y$,nsime:J$,nsimeq:Z$,nsmid:X$,nspar:K$,nsqsube:ej,nsqsupe:nj,nsub:tj,nsubE:rj,nsube:ij,nsubset:oj,nsubseteq:sj,nsubseteqq:aj,nsucc:lj,nsucceq:cj,nsup:uj,nsupE:fj,nsupe:dj,nsupset:pj,nsupseteq:hj,nsupseteqq:mj,ntgl:gj,Ntilde:vj,ntilde:yj,ntlg:_j,ntriangleleft:Ej,ntrianglelefteq:Sj,ntriangleright:wj,ntrianglerighteq:kj,Nu:bj,nu:Tj,num:xj,numero:Nj,numsp:Cj,nvap:Ij,nvdash:Dj,nvDash:Aj,nVdash:Oj,nVDash:Lj,nvge:Fj,nvgt:Rj,nvHarr:Pj,nvinfin:Mj,nvlArr:qj,nvle:$j,nvlt:jj,nvltrie:Vj,nvrArr:Uj,nvrtrie:zj,nvsim:Bj,nwarhk:Qj,nwarr:Hj,nwArr:Gj,nwarrow:Wj,nwnear:Yj,Oacute:Jj,oacute:Zj,oast:Xj,Ocirc:Kj,ocirc:e7,ocir:n7,Ocy:t7,ocy:r7,odash:i7,Odblac:o7,odblac:s7,odiv:a7,odot:l7,odsold:c7,OElig:u7,oelig:f7,ofcir:d7,Ofr:p7,ofr:h7,ogon:m7,Ograve:g7,ograve:v7,ogt:y7,ohbar:_7,ohm:E7,oint:S7,olarr:w7,olcir:k7,olcross:b7,oline:T7,olt:x7,Omacr:N7,omacr:C7,Omega:I7,omega:D7,Omicron:A7,omicron:O7,omid:L7,ominus:F7,Oopf:R7,oopf:P7,opar:M7,OpenCurlyDoubleQuote:q7,OpenCurlyQuote:$7,operp:j7,oplus:V7,orarr:U7,Or:z7,or:B7,ord:Q7,order:H7,orderof:G7,ordf:W7,ordm:Y7,origof:J7,oror:Z7,orslope:X7,orv:K7,oS:eV,Oscr:nV,oscr:tV,Oslash:rV,oslash:iV,osol:oV,Otilde:sV,otilde:aV,otimesas:lV,Otimes:cV,otimes:uV,Ouml:fV,ouml:dV,ovbar:pV,OverBar:hV,OverBrace:mV,OverBracket:gV,OverParenthesis:vV,para:yV,parallel:_V,par:EV,parsim:SV,parsl:wV,part:kV,PartialD:bV,Pcy:TV,pcy:xV,percnt:NV,period:CV,permil:IV,perp:DV,pertenk:AV,Pfr:OV,pfr:LV,Phi:FV,phi:RV,phiv:PV,phmmat:MV,phone:qV,Pi:$V,pi:jV,pitchfork:VV,piv:UV,planck:zV,planckh:BV,plankv:QV,plusacir:HV,plusb:GV,pluscir:WV,plus:YV,plusdo:JV,plusdu:ZV,pluse:XV,PlusMinus:KV,plusmn:e9,plussim:n9,plustwo:t9,pm:r9,Poincareplane:i9,pointint:o9,popf:s9,Popf:a9,pound:l9,prap:c9,Pr:u9,pr:f9,prcue:d9,precapprox:p9,prec:h9,preccurlyeq:m9,Precedes:g9,PrecedesEqual:v9,PrecedesSlantEqual:y9,PrecedesTilde:_9,preceq:E9,precnapprox:S9,precneqq:w9,precnsim:k9,pre:b9,prE:T9,precsim:x9,prime:N9,Prime:C9,primes:I9,prnap:D9,prnE:A9,prnsim:O9,prod:L9,Product:F9,profalar:R9,profline:P9,profsurf:M9,prop:q9,Proportional:$9,Proportion:j9,propto:V9,prsim:U9,prurel:z9,Pscr:B9,pscr:Q9,Psi:H9,psi:G9,puncsp:W9,Qfr:Y9,qfr:J9,qint:Z9,qopf:X9,Qopf:K9,qprime:eU,Qscr:nU,qscr:tU,quaternions:rU,quatint:iU,quest:oU,questeq:sU,quot:aU,QUOT:lU,rAarr:cU,race:uU,Racute:fU,racute:dU,radic:pU,raemptyv:hU,rang:mU,Rang:gU,rangd:vU,range:yU,rangle:_U,raquo:EU,rarrap:SU,rarrb:wU,rarrbfs:kU,rarrc:bU,rarr:TU,Rarr:xU,rArr:NU,rarrfs:CU,rarrhk:IU,rarrlp:DU,rarrpl:AU,rarrsim:OU,Rarrtl:LU,rarrtl:FU,rarrw:RU,ratail:PU,rAtail:MU,ratio:qU,rationals:$U,rbarr:jU,rBarr:VU,RBarr:UU,rbbrk:zU,rbrace:BU,rbrack:QU,rbrke:HU,rbrksld:GU,rbrkslu:WU,Rcaron:YU,rcaron:JU,Rcedil:ZU,rcedil:XU,rceil:KU,rcub:ez,Rcy:nz,rcy:tz,rdca:rz,rdldhar:iz,rdquo:oz,rdquor:sz,rdsh:az,real:lz,realine:cz,realpart:uz,reals:fz,Re:dz,rect:pz,reg:hz,REG:mz,ReverseElement:gz,ReverseEquilibrium:vz,ReverseUpEquilibrium:yz,rfisht:_z,rfloor:Ez,rfr:Sz,Rfr:wz,rHar:kz,rhard:bz,rharu:Tz,rharul:xz,Rho:Nz,rho:Cz,rhov:Iz,RightAngleBracket:Dz,RightArrowBar:Az,rightarrow:Oz,RightArrow:Lz,Rightarrow:Fz,RightArrowLeftArrow:Rz,rightarrowtail:Pz,RightCeiling:Mz,RightDoubleBracket:qz,RightDownTeeVector:$z,RightDownVectorBar:jz,RightDownVector:Vz,RightFloor:Uz,rightharpoondown:zz,rightharpoonup:Bz,rightleftarrows:Qz,rightleftharpoons:Hz,rightrightarrows:Gz,rightsquigarrow:Wz,RightTeeArrow:Yz,RightTee:Jz,RightTeeVector:Zz,rightthreetimes:Xz,RightTriangleBar:Kz,RightTriangle:eB,RightTriangleEqual:nB,RightUpDownVector:tB,RightUpTeeVector:rB,RightUpVectorBar:iB,RightUpVector:oB,RightVectorBar:sB,RightVector:aB,ring:lB,risingdotseq:cB,rlarr:uB,rlhar:fB,rlm:dB,rmoustache:pB,rmoust:hB,rnmid:mB,roang:gB,roarr:vB,robrk:yB,ropar:_B,ropf:EB,Ropf:SB,roplus:wB,rotimes:kB,RoundImplies:bB,rpar:TB,rpargt:xB,rppolint:NB,rrarr:CB,Rrightarrow:IB,rsaquo:DB,rscr:AB,Rscr:OB,rsh:LB,Rsh:FB,rsqb:RB,rsquo:PB,rsquor:MB,rthree:qB,rtimes:$B,rtri:jB,rtrie:VB,rtrif:UB,rtriltri:zB,RuleDelayed:BB,ruluhar:QB,rx:HB,Sacute:GB,sacute:WB,sbquo:YB,scap:JB,Scaron:ZB,scaron:XB,Sc:KB,sc:eQ,sccue:nQ,sce:tQ,scE:rQ,Scedil:iQ,scedil:oQ,Scirc:sQ,scirc:aQ,scnap:lQ,scnE:cQ,scnsim:uQ,scpolint:fQ,scsim:dQ,Scy:pQ,scy:hQ,sdotb:mQ,sdot:gQ,sdote:vQ,searhk:yQ,searr:_Q,seArr:EQ,searrow:SQ,sect:wQ,semi:kQ,seswar:bQ,setminus:TQ,setmn:xQ,sext:NQ,Sfr:CQ,sfr:IQ,sfrown:DQ,sharp:AQ,SHCHcy:OQ,shchcy:LQ,SHcy:FQ,shcy:RQ,ShortDownArrow:PQ,ShortLeftArrow:MQ,shortmid:qQ,shortparallel:$Q,ShortRightArrow:jQ,ShortUpArrow:VQ,shy:UQ,Sigma:zQ,sigma:BQ,sigmaf:QQ,sigmav:HQ,sim:GQ,simdot:WQ,sime:YQ,simeq:JQ,simg:ZQ,simgE:XQ,siml:KQ,simlE:eH,simne:nH,simplus:tH,simrarr:rH,slarr:iH,SmallCircle:oH,smallsetminus:sH,smashp:aH,smeparsl:lH,smid:cH,smile:uH,smt:fH,smte:dH,smtes:pH,SOFTcy:hH,softcy:mH,solbar:gH,solb:vH,sol:yH,Sopf:_H,sopf:EH,spades:SH,spadesuit:wH,spar:kH,sqcap:bH,sqcaps:TH,sqcup:xH,sqcups:NH,Sqrt:CH,sqsub:IH,sqsube:DH,sqsubset:AH,sqsubseteq:OH,sqsup:LH,sqsupe:FH,sqsupset:RH,sqsupseteq:PH,square:MH,Square:qH,SquareIntersection:$H,SquareSubset:jH,SquareSubsetEqual:VH,SquareSuperset:UH,SquareSupersetEqual:zH,SquareUnion:BH,squarf:QH,squ:HH,squf:GH,srarr:WH,Sscr:YH,sscr:JH,ssetmn:ZH,ssmile:XH,sstarf:KH,Star:eG,star:nG,starf:tG,straightepsilon:rG,straightphi:iG,strns:oG,sub:sG,Sub:aG,subdot:lG,subE:cG,sube:uG,subedot:fG,submult:dG,subnE:pG,subne:hG,subplus:mG,subrarr:gG,subset:vG,Subset:yG,subseteq:_G,subseteqq:EG,SubsetEqual:SG,subsetneq:wG,subsetneqq:kG,subsim:bG,subsub:TG,subsup:xG,succapprox:NG,succ:CG,succcurlyeq:IG,Succeeds:DG,SucceedsEqual:AG,SucceedsSlantEqual:OG,SucceedsTilde:LG,succeq:FG,succnapprox:RG,succneqq:PG,succnsim:MG,succsim:qG,SuchThat:$G,sum:jG,Sum:VG,sung:UG,sup1:zG,sup2:BG,sup3:QG,sup:HG,Sup:GG,supdot:WG,supdsub:YG,supE:JG,supe:ZG,supedot:XG,Superset:KG,SupersetEqual:eW,suphsol:nW,suphsub:tW,suplarr:rW,supmult:iW,supnE:oW,supne:sW,supplus:aW,supset:lW,Supset:cW,supseteq:uW,supseteqq:fW,supsetneq:dW,supsetneqq:pW,supsim:hW,supsub:mW,supsup:gW,swarhk:vW,swarr:yW,swArr:_W,swarrow:EW,swnwar:SW,szlig:wW,Tab:kW,target:bW,Tau:TW,tau:xW,tbrk:NW,Tcaron:CW,tcaron:IW,Tcedil:DW,tcedil:AW,Tcy:OW,tcy:LW,tdot:FW,telrec:RW,Tfr:PW,tfr:MW,there4:qW,therefore:$W,Therefore:jW,Theta:VW,theta:UW,thetasym:zW,thetav:BW,thickapprox:QW,thicksim:HW,ThickSpace:GW,ThinSpace:WW,thinsp:YW,thkap:JW,thksim:ZW,THORN:XW,thorn:KW,tilde:eY,Tilde:nY,TildeEqual:tY,TildeFullEqual:rY,TildeTilde:iY,timesbar:oY,timesb:sY,times:aY,timesd:lY,tint:cY,toea:uY,topbot:fY,topcir:dY,top:pY,Topf:hY,topf:mY,topfork:gY,tosa:vY,tprime:yY,trade:_Y,TRADE:EY,triangle:SY,triangledown:wY,triangleleft:kY,trianglelefteq:bY,triangleq:TY,triangleright:xY,trianglerighteq:NY,tridot:CY,trie:IY,triminus:DY,TripleDot:AY,triplus:OY,trisb:LY,tritime:FY,trpezium:RY,Tscr:PY,tscr:MY,TScy:qY,tscy:$Y,TSHcy:jY,tshcy:VY,Tstrok:UY,tstrok:zY,twixt:BY,twoheadleftarrow:QY,twoheadrightarrow:HY,Uacute:GY,uacute:WY,uarr:YY,Uarr:JY,uArr:ZY,Uarrocir:XY,Ubrcy:KY,ubrcy:eJ,Ubreve:nJ,ubreve:tJ,Ucirc:rJ,ucirc:iJ,Ucy:oJ,ucy:sJ,udarr:aJ,Udblac:lJ,udblac:cJ,udhar:uJ,ufisht:fJ,Ufr:dJ,ufr:pJ,Ugrave:hJ,ugrave:mJ,uHar:gJ,uharl:vJ,uharr:yJ,uhblk:_J,ulcorn:EJ,ulcorner:SJ,ulcrop:wJ,ultri:kJ,Umacr:bJ,umacr:TJ,uml:xJ,UnderBar:NJ,UnderBrace:CJ,UnderBracket:IJ,UnderParenthesis:DJ,Union:AJ,UnionPlus:OJ,Uogon:LJ,uogon:FJ,Uopf:RJ,uopf:PJ,UpArrowBar:MJ,uparrow:qJ,UpArrow:$J,Uparrow:jJ,UpArrowDownArrow:VJ,updownarrow:UJ,UpDownArrow:zJ,Updownarrow:BJ,UpEquilibrium:QJ,upharpoonleft:HJ,upharpoonright:GJ,uplus:WJ,UpperLeftArrow:YJ,UpperRightArrow:JJ,upsi:ZJ,Upsi:XJ,upsih:KJ,Upsilon:eZ,upsilon:nZ,UpTeeArrow:tZ,UpTee:rZ,upuparrows:iZ,urcorn:oZ,urcorner:sZ,urcrop:aZ,Uring:lZ,uring:cZ,urtri:uZ,Uscr:fZ,uscr:dZ,utdot:pZ,Utilde:hZ,utilde:mZ,utri:gZ,utrif:vZ,uuarr:yZ,Uuml:_Z,uuml:EZ,uwangle:SZ,vangrt:wZ,varepsilon:kZ,varkappa:bZ,varnothing:TZ,varphi:xZ,varpi:NZ,varpropto:CZ,varr:IZ,vArr:DZ,varrho:AZ,varsigma:OZ,varsubsetneq:LZ,varsubsetneqq:FZ,varsupsetneq:RZ,varsupsetneqq:PZ,vartheta:MZ,vartriangleleft:qZ,vartriangleright:$Z,vBar:jZ,Vbar:VZ,vBarv:UZ,Vcy:zZ,vcy:BZ,vdash:QZ,vDash:HZ,Vdash:GZ,VDash:WZ,Vdashl:YZ,veebar:JZ,vee:ZZ,Vee:XZ,veeeq:KZ,vellip:eX,verbar:nX,Verbar:tX,vert:rX,Vert:iX,VerticalBar:oX,VerticalLine:sX,VerticalSeparator:aX,VerticalTilde:lX,VeryThinSpace:cX,Vfr:uX,vfr:fX,vltri:dX,vnsub:pX,vnsup:hX,Vopf:mX,vopf:gX,vprop:vX,vrtri:yX,Vscr:_X,vscr:EX,vsubnE:SX,vsubne:wX,vsupnE:kX,vsupne:bX,Vvdash:TX,vzigzag:xX,Wcirc:NX,wcirc:CX,wedbar:IX,wedge:DX,Wedge:AX,wedgeq:OX,weierp:LX,Wfr:FX,wfr:RX,Wopf:PX,wopf:MX,wp:qX,wr:$X,wreath:jX,Wscr:VX,wscr:UX,xcap:zX,xcirc:BX,xcup:QX,xdtri:HX,Xfr:GX,xfr:WX,xharr:YX,xhArr:JX,Xi:ZX,xi:XX,xlarr:KX,xlArr:eK,xmap:nK,xnis:tK,xodot:rK,Xopf:iK,xopf:oK,xoplus:sK,xotime:aK,xrarr:lK,xrArr:cK,Xscr:uK,xscr:fK,xsqcup:dK,xuplus:pK,xutri:hK,xvee:mK,xwedge:gK,Yacute:vK,yacute:yK,YAcy:_K,yacy:EK,Ycirc:SK,ycirc:wK,Ycy:kK,ycy:bK,yen:TK,Yfr:xK,yfr:NK,YIcy:CK,yicy:IK,Yopf:DK,yopf:AK,Yscr:OK,yscr:LK,YUcy:FK,yucy:RK,yuml:PK,Yuml:MK,Zacute:qK,zacute:$K,Zcaron:jK,zcaron:VK,Zcy:UK,zcy:zK,Zdot:BK,zdot:QK,zeetrf:HK,ZeroWidthSpace:GK,Zeta:WK,zeta:YK,zfr:JK,Zfr:ZK,ZHcy:XK,zhcy:KK,zigrarr:eee,zopf:nee,Zopf:tee,Zscr:ree,zscr:iee,zwj:oee,zwnj:see},Hy=aee,Yf=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,yi={},Ph={};function lee(e){var n,t,r=Ph[e];if(r)return r;for(r=Ph[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<e.length;n++)r[e.charCodeAt(n)]=e[n];return r}function el(e,n,t){var r,i,o,s,a,c="";for(typeof n!="string"&&(t=n,n=el.defaultChars),typeof t=="undefined"&&(t=!0),a=lee(n),r=0,i=e.length;r<i;r++){if(o=e.charCodeAt(r),t&&o===37&&r+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){c+=e.slice(r,r+3),r+=2;continue}if(o<128){c+=a[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&r+1<i&&(s=e.charCodeAt(r+1),s>=56320&&s<=57343)){c+=encodeURIComponent(e[r]+e[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(e[r])}return c}el.defaultChars=";/?:@&=+$,-_.!~*'()#";el.componentChars="-_.!~*'()";var cee=el,Mh={};function uee(e){var n,t,r=Mh[e];if(r)return r;for(r=Mh[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),r.push(t);for(n=0;n<e.length;n++)t=e.charCodeAt(n),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function nl(e,n){var t;return typeof n!="string"&&(n=nl.defaultChars),t=uee(n),e.replace(/(%[a-f0-9]{2})+/gi,function(r){var i,o,s,a,c,l,u,f="";for(i=0,o=r.length;i<o;i+=3){if(s=parseInt(r.slice(i+1,i+3),16),s<128){f+=t[s];continue}if((s&224)===192&&i+3<o&&(a=parseInt(r.slice(i+4,i+6),16),(a&192)===128)){u=s<<6&1984|a&63,u<128?f+="\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=3;continue}if((s&240)===224&&i+6<o&&(a=parseInt(r.slice(i+4,i+6),16),c=parseInt(r.slice(i+7,i+9),16),(a&192)===128&&(c&192)===128)){u=s<<12&61440|a<<6&4032|c&63,u<2048||u>=55296&&u<=57343?f+="\uFFFD\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=6;continue}if((s&248)===240&&i+9<o&&(a=parseInt(r.slice(i+4,i+6),16),c=parseInt(r.slice(i+7,i+9),16),l=parseInt(r.slice(i+10,i+12),16),(a&192)===128&&(c&192)===128&&(l&192)===128)){u=s<<18&1835008|a<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?f+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),i+=9;continue}f+="\uFFFD"}return f})}nl.defaultChars=";/?:@&=+$,#";nl.componentChars="";var fee=nl,dee=function(n){var t="";return t+=n.protocol||"",t+=n.slashes?"//":"",t+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?t+="["+n.hostname+"]":t+=n.hostname||"",t+=n.port?":"+n.port:"",t+=n.pathname||"",t+=n.search||"",t+=n.hash||"",t};function ka(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var pee=/^([a-z0-9.+-]+:)/i,hee=/:[0-9]*$/,mee=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,gee=["<",">",'"',"`"," ","\r",`
`,"	"],vee=["{","}","|","\\","^","`"].concat(gee),yee=["'"].concat(vee),qh=["%","/","?",";","#"].concat(yee),$h=["/","?","#"],_ee=255,jh=/^[+a-z0-9A-Z_-]{0,63}$/,Eee=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Vh={javascript:!0,"javascript:":!0},Uh={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function See(e,n){if(e&&e instanceof ka)return e;var t=new ka;return t.parse(e,n),t}ka.prototype.parse=function(e,n){var t,r,i,o,s,a=e;if(a=a.trim(),!n&&e.split("#").length===1){var c=mee.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=pee.exec(a);if(l&&(l=l[0],i=l.toLowerCase(),this.protocol=l,a=a.substr(l.length)),(n||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=a.substr(0,2)==="//",s&&!(l&&Vh[l])&&(a=a.substr(2),this.slashes=!0)),!Vh[l]&&(s||l&&!Uh[l])){var u=-1;for(t=0;t<$h.length;t++)o=a.indexOf($h[t]),o!==-1&&(u===-1||o<u)&&(u=o);var f,p;for(u===-1?p=a.lastIndexOf("@"):p=a.lastIndexOf("@",u),p!==-1&&(f=a.slice(0,p),a=a.slice(p+1),this.auth=f),u=-1,t=0;t<qh.length;t++)o=a.indexOf(qh[t]),o!==-1&&(u===-1||o<u)&&(u=o);u===-1&&(u=a.length),a[u-1]===":"&&u--;var h=a.slice(0,u);a=a.slice(u),this.parseHost(h),this.hostname=this.hostname||"";var d=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!d){var E=this.hostname.split(/\./);for(t=0,r=E.length;t<r;t++){var w=E[t];if(!!w&&!w.match(jh)){for(var g="",m=0,v=w.length;m<v;m++)w.charCodeAt(m)>127?g+="x":g+=w[m];if(!g.match(jh)){var S=E.slice(0,t),N=E.slice(t+1),k=w.match(Eee);k&&(S.push(k[1]),N.unshift(k[2])),N.length&&(a=N.join(".")+a),this.hostname=S.join(".");break}}}}this.hostname.length>_ee&&(this.hostname=""),d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var A=a.indexOf("#");A!==-1&&(this.hash=a.substr(A),a=a.slice(0,A));var M=a.indexOf("?");return M!==-1&&(this.search=a.substr(M),a=a.slice(0,M)),a&&(this.pathname=a),Uh[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ka.prototype.parseHost=function(e){var n=hee.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};var wee=See;yi.encode=cee;yi.decode=fee;yi.format=dee;yi.parse=wee;var _i={},Gy=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wy=/[\0-\x1F\x7F-\x9F]/,kee=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Yy=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;_i.Any=Gy;_i.Cc=Wy;_i.Cf=kee;_i.P=Yf;_i.Z=Yy;(function(e){function n(F){return Object.prototype.toString.call(F)}function t(F){return n(F)==="[object String]"}var r=Object.prototype.hasOwnProperty;function i(F,z){return r.call(F,z)}function o(F){var z=Array.prototype.slice.call(arguments,1);return z.forEach(function(U){if(!!U){if(typeof U!="object")throw new TypeError(U+"must be object");Object.keys(U).forEach(function(ye){F[ye]=U[ye]})}}),F}function s(F,z,U){return[].concat(F.slice(0,z),U,F.slice(z+1))}function a(F){return!(F>=55296&&F<=57343||F>=64976&&F<=65007||(F&65535)===65535||(F&65535)===65534||F>=0&&F<=8||F===11||F>=14&&F<=31||F>=127&&F<=159||F>1114111)}function c(F){if(F>65535){F-=65536;var z=55296+(F>>10),U=56320+(F&1023);return String.fromCharCode(z,U)}return String.fromCharCode(F)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,f=new RegExp(l.source+"|"+u.source,"gi"),p=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,h=Hy;function d(F,z){var U=0;return i(h,z)?h[z]:z.charCodeAt(0)===35&&p.test(z)&&(U=z[1].toLowerCase()==="x"?parseInt(z.slice(2),16):parseInt(z.slice(1),10),a(U))?c(U):F}function E(F){return F.indexOf("\\")<0?F:F.replace(l,"$1")}function w(F){return F.indexOf("\\")<0&&F.indexOf("&")<0?F:F.replace(f,function(z,U,ye){return U||d(z,ye)})}var g=/[&<>"]/,m=/[&<>"]/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function S(F){return v[F]}function N(F){return g.test(F)?F.replace(m,S):F}var k=/[.?*+^$[\]\\(){}|-]/g;function A(F){return F.replace(k,"\\$&")}function M(F){switch(F){case 9:case 32:return!0}return!1}function b(F){if(F>=8192&&F<=8202)return!0;switch(F){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var I=Yf;function J(F){return I.test(F)}function G(F){switch(F){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ne(F){return F=F.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(F=F.replace(/ẞ/g,"\xDF")),F.toLowerCase().toUpperCase()}e.lib={},e.lib.mdurl=yi,e.lib.ucmicro=_i,e.assign=o,e.isString=t,e.has=i,e.unescapeMd=E,e.unescapeAll=w,e.isValidEntityCode=a,e.fromCodePoint=c,e.escapeHtml=N,e.arrayReplaceAt=s,e.isSpace=M,e.isWhiteSpace=b,e.isMdAsciiPunct=G,e.isPunctChar=J,e.escapeRE=A,e.normalizeReference=ne})(de);var tl={},bee=function(n,t,r){var i,o,s,a,c=-1,l=n.posMax,u=n.pos;for(n.pos=t+1,i=1;n.pos<l;){if(s=n.src.charCodeAt(n.pos),s===93&&(i--,i===0)){o=!0;break}if(a=n.pos,n.md.inline.skipToken(n),s===91){if(a===n.pos-1)i++;else if(r)return n.pos=u,-1}}return o&&(c=n.pos),n.pos=u,c},zh=de.unescapeAll,Tee=function(n,t,r){var i,o,s=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(n.charCodeAt(t)===60){for(t++;t<r;){if(i=n.charCodeAt(t),i===10||i===60)return c;if(i===62)return c.pos=t+1,c.str=zh(n.slice(a+1,t)),c.ok=!0,c;if(i===92&&t+1<r){t+=2;continue}t++}return c}for(o=0;t<r&&(i=n.charCodeAt(t),!(i===32||i<32||i===127));){if(i===92&&t+1<r){if(n.charCodeAt(t+1)===32)break;t+=2;continue}if(i===40&&(o++,o>32))return c;if(i===41){if(o===0)break;o--}t++}return a===t||o!==0||(c.str=zh(n.slice(a,t)),c.lines=s,c.pos=t,c.ok=!0),c},xee=de.unescapeAll,Nee=function(n,t,r){var i,o,s=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(t>=r||(o=n.charCodeAt(t),o!==34&&o!==39&&o!==40))return c;for(t++,o===40&&(o=41);t<r;){if(i=n.charCodeAt(t),i===o)return c.pos=t+1,c.lines=s,c.str=xee(n.slice(a+1,t)),c.ok=!0,c;if(i===40&&o===41)return c;i===10?s++:i===92&&t+1<r&&(t++,n.charCodeAt(t)===10&&s++),t++}return c};tl.parseLinkLabel=bee;tl.parseLinkDestination=Tee;tl.parseLinkTitle=Nee;var Cee=de.assign,Iee=de.unescapeAll,Tr=de.escapeHtml,ft={};ft.code_inline=function(e,n,t,r,i){var o=e[n];return"<code"+i.renderAttrs(o)+">"+Tr(e[n].content)+"</code>"};ft.code_block=function(e,n,t,r,i){var o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+Tr(e[n].content)+`</code></pre>
`};ft.fence=function(e,n,t,r,i){var o=e[n],s=o.info?Iee(o.info).trim():"",a="",c="",l,u,f,p,h;return s&&(f=s.split(/(\s+)/g),a=f[0],c=f.slice(2).join("")),t.highlight?l=t.highlight(o.content,a,c)||Tr(o.content):l=Tr(o.content),l.indexOf("<pre")===0?l+`
`:s?(u=o.attrIndex("class"),p=o.attrs?o.attrs.slice():[],u<0?p.push(["class",t.langPrefix+a]):(p[u]=p[u].slice(),p[u][1]+=" "+t.langPrefix+a),h={attrs:p},"<pre><code"+i.renderAttrs(h)+">"+l+`</code></pre>
`):"<pre><code"+i.renderAttrs(o)+">"+l+`</code></pre>
`};ft.image=function(e,n,t,r,i){var o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};ft.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};ft.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};ft.text=function(e,n){return Tr(e[n].content)};ft.html_block=function(e,n){return e[n].content};ft.html_inline=function(e,n){return e[n].content};function Ei(){this.rules=Cee({},ft)}Ei.prototype.renderAttrs=function(n){var t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+Tr(n.attrs[t][0])+'="'+Tr(n.attrs[t][1])+'"';return i};Ei.prototype.renderToken=function(n,t,r){var i,o="",s=!1,a=n[t];return a.hidden?"":(a.block&&a.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(a.nesting===-1?"</":"<")+a.tag,o+=this.renderAttrs(a),a.nesting===0&&r.xhtmlOut&&(o+=" /"),a.block&&(s=!0,a.nesting===1&&t+1<n.length&&(i=n[t+1],(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===a.tag)&&(s=!1))),o+=s?`>
`:">",o)};Ei.prototype.renderInline=function(e,n,t){for(var r,i="",o=this.rules,s=0,a=e.length;s<a;s++)r=e[s].type,typeof o[r]!="undefined"?i+=o[r](e,s,n,t,this):i+=this.renderToken(e,s,n);return i};Ei.prototype.renderInlineAsText=function(e,n,t){for(var r="",i=0,o=e.length;i<o;i++)e[i].type==="text"?r+=e[i].content:e[i].type==="image"?r+=this.renderInlineAsText(e[i].children,n,t):e[i].type==="softbreak"&&(r+=`
`);return r};Ei.prototype.render=function(e,n,t){var r,i,o,s="",a=this.rules;for(r=0,i=e.length;r<i;r++)o=e[r].type,o==="inline"?s+=this.renderInline(e[r].children,n,t):typeof a[o]!="undefined"?s+=a[e[r].type](e,r,n,t,this):s+=this.renderToken(e,r,n,t);return s};var Dee=Ei;function Zn(){this.__rules__=[],this.__cache__=null}Zn.prototype.__find__=function(e){for(var n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Zn.prototype.__compile__=function(){var e=this,n=[""];e.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn)})})};Zn.prototype.at=function(e,n,t){var r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Zn.prototype.before=function(e,n,t,r){var i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Zn.prototype.after=function(e,n,t,r){var i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Zn.prototype.push=function(e,n,t){var r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};Zn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};Zn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Zn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};Zn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};var Jf=Zn,Aee=/\r\n?|\n/g,Oee=/\0/g,Lee=function(n){var t;t=n.src.replace(Aee,`
`),t=t.replace(Oee,"\uFFFD"),n.src=t},Fee=function(n){var t;n.inlineMode?(t=new n.Token("inline","",0),t.content=n.src,t.map=[0,1],t.children=[],n.tokens.push(t)):n.md.block.parse(n.src,n.md,n.env,n.tokens)},Ree=function(n){var t=n.tokens,r,i,o;for(i=0,o=t.length;i<o;i++)r=t[i],r.type==="inline"&&n.md.inline.parse(r.content,n.md,n.env,r.children)},Pee=de.arrayReplaceAt;function Mee(e){return/^<a[>\s]/i.test(e)}function qee(e){return/^<\/a\s*>/i.test(e)}var $ee=function(n){var t,r,i,o,s,a,c,l,u,f,p,h,d,E,w,g,m=n.tokens,v;if(!!n.md.options.linkify){for(r=0,i=m.length;r<i;r++)if(!(m[r].type!=="inline"||!n.md.linkify.pretest(m[r].content)))for(o=m[r].children,d=0,t=o.length-1;t>=0;t--){if(a=o[t],a.type==="link_close"){for(t--;o[t].level!==a.level&&o[t].type!=="link_open";)t--;continue}if(a.type==="html_inline"&&(Mee(a.content)&&d>0&&d--,qee(a.content)&&d++),!(d>0)&&a.type==="text"&&n.md.linkify.test(a.content)){for(u=a.content,v=n.md.linkify.match(u),c=[],h=a.level,p=0,l=0;l<v.length;l++)E=v[l].url,w=n.md.normalizeLink(E),n.md.validateLink(w)&&(g=v[l].text,v[l].schema?v[l].schema==="mailto:"&&!/^mailto:/i.test(g)?g=n.md.normalizeLinkText("mailto:"+g).replace(/^mailto:/,""):g=n.md.normalizeLinkText(g):g=n.md.normalizeLinkText("http://"+g).replace(/^http:\/\//,""),f=v[l].index,f>p&&(s=new n.Token("text","",0),s.content=u.slice(p,f),s.level=h,c.push(s)),s=new n.Token("link_open","a",1),s.attrs=[["href",w]],s.level=h++,s.markup="linkify",s.info="auto",c.push(s),s=new n.Token("text","",0),s.content=g,s.level=h,c.push(s),s=new n.Token("link_close","a",-1),s.level=--h,s.markup="linkify",s.info="auto",c.push(s),p=v[l].lastIndex);p<u.length&&(s=new n.Token("text","",0),s.content=u.slice(p),s.level=h,c.push(s)),m[r].children=o=Pee(o,t,c)}}}},Jy=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,jee=/\((c|tm|r|p)\)/i,Vee=/\((c|tm|r|p)\)/ig,Uee={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function zee(e,n){return Uee[n.toLowerCase()]}function Bee(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&(t.content=t.content.replace(Vee,zee)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function Qee(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&Jy.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var Hee=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type==="inline"&&(jee.test(n.tokens[t].content)&&Bee(n.tokens[t].children),Jy.test(n.tokens[t].content)&&Qee(n.tokens[t].children))},Bh=de.isWhiteSpace,Qh=de.isPunctChar,Hh=de.isMdAsciiPunct,Gee=/['"]/,Gh=/['"]/g,Wh="\u2019";function vs(e,n,t){return e.substr(0,n)+t+e.substr(n+1)}function Wee(e,n){var t,r,i,o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,k;for(S=[],t=0;t<e.length;t++){for(r=e[t],c=e[t].level,m=S.length-1;m>=0&&!(S[m].level<=c);m--);if(S.length=m+1,r.type!=="text")continue;i=r.content,s=0,a=i.length;e:for(;s<a&&(Gh.lastIndex=s,o=Gh.exec(i),!!o);){if(w=g=!0,s=o.index+1,v=o[0]==="'",u=32,o.index-1>=0)u=i.charCodeAt(o.index-1);else for(m=t-1;m>=0&&!(e[m].type==="softbreak"||e[m].type==="hardbreak");m--)if(!!e[m].content){u=e[m].content.charCodeAt(e[m].content.length-1);break}if(f=32,s<a)f=i.charCodeAt(s);else for(m=t+1;m<e.length&&!(e[m].type==="softbreak"||e[m].type==="hardbreak");m++)if(!!e[m].content){f=e[m].content.charCodeAt(0);break}if(p=Hh(u)||Qh(String.fromCharCode(u)),h=Hh(f)||Qh(String.fromCharCode(f)),d=Bh(u),E=Bh(f),E?w=!1:h&&(d||p||(w=!1)),d?g=!1:p&&(E||h||(g=!1)),f===34&&o[0]==='"'&&u>=48&&u<=57&&(g=w=!1),w&&g&&(w=p,g=h),!w&&!g){v&&(r.content=vs(r.content,o.index,Wh));continue}if(g){for(m=S.length-1;m>=0&&(l=S[m],!(S[m].level<c));m--)if(l.single===v&&S[m].level===c){l=S[m],v?(N=n.md.options.quotes[2],k=n.md.options.quotes[3]):(N=n.md.options.quotes[0],k=n.md.options.quotes[1]),r.content=vs(r.content,o.index,k),e[l.token].content=vs(e[l.token].content,l.pos,N),s+=k.length-1,l.token===t&&(s+=N.length-1),i=r.content,a=i.length,S.length=m;continue e}}w?S.push({token:t,pos:o.index,single:v,level:c}):g&&v&&(r.content=vs(r.content,o.index,Wh))}}}var Yee=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type!=="inline"||!Gee.test(n.tokens[t].content)||Wee(n.tokens[t].children,n)};function Si(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Si.prototype.attrIndex=function(n){var t,r,i;if(!this.attrs)return-1;for(t=this.attrs,r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Si.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Si.prototype.attrSet=function(n,t){var r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Si.prototype.attrGet=function(n){var t=this.attrIndex(n),r=null;return t>=0&&(r=this.attrs[t][1]),r};Si.prototype.attrJoin=function(n,t){var r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var Zf=Si,Jee=Zf;function Zy(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Zy.prototype.Token=Jee;var Zee=Zy,Xee=Jf,Hl=[["normalize",Lee],["block",Fee],["inline",Ree],["linkify",$ee],["replacements",Hee],["smartquotes",Yee]];function Xf(){this.ruler=new Xee;for(var e=0;e<Hl.length;e++)this.ruler.push(Hl[e][0],Hl[e][1])}Xf.prototype.process=function(e){var n,t,r;for(r=this.ruler.getRules(""),n=0,t=r.length;n<t;n++)r[n](e)};Xf.prototype.State=Zee;var Kee=Xf,Gl=de.isSpace;function Wl(e,n){var t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.substr(t,r-t)}function Yh(e){var n=[],t=0,r=e.length,i,o=!1,s=0,a="";for(i=e.charCodeAt(t);t<r;)i===124&&(o?(a+=e.substring(s,t-1),s=t):(n.push(a+e.substring(s,t)),a="",s=t+1)),o=i===92,t++,i=e.charCodeAt(t);return n.push(a+e.substring(s)),n}var ene=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,k;if(t+2>r||(u=t+1,n.sCount[u]<n.blkIndent)||n.sCount[u]-n.blkIndent>=4||(a=n.bMarks[u]+n.tShift[u],a>=n.eMarks[u])||(N=n.src.charCodeAt(a++),N!==124&&N!==45&&N!==58)||a>=n.eMarks[u]||(k=n.src.charCodeAt(a++),k!==124&&k!==45&&k!==58&&!Gl(k))||N===45&&Gl(k))return!1;for(;a<n.eMarks[u];){if(o=n.src.charCodeAt(a),o!==124&&o!==45&&o!==58&&!Gl(o))return!1;a++}for(s=Wl(n,t+1),f=s.split("|"),d=[],c=0;c<f.length;c++){if(E=f[c].trim(),!E){if(c===0||c===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?d.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?d.push("left"):d.push("")}if(s=Wl(n,t).trim(),s.indexOf("|")===-1||n.sCount[t]-n.blkIndent>=4||(f=Yh(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),p=f.length,p===0||p!==d.length))return!1;if(i)return!0;for(m=n.parentType,n.parentType="table",S=n.md.block.ruler.getRules("blockquote"),h=n.push("table_open","table",1),h.map=w=[t,0],h=n.push("thead_open","thead",1),h.map=[t,t+1],h=n.push("tr_open","tr",1),h.map=[t,t+1],c=0;c<f.length;c++)h=n.push("th_open","th",1),d[c]&&(h.attrs=[["style","text-align:"+d[c]]]),h=n.push("inline","",0),h.content=f[c].trim(),h.children=[],h=n.push("th_close","th",-1);for(h=n.push("tr_close","tr",-1),h=n.push("thead_close","thead",-1),u=t+2;u<r&&!(n.sCount[u]<n.blkIndent);u++){for(v=!1,c=0,l=S.length;c<l;c++)if(S[c](n,u,r,!0)){v=!0;break}if(v||(s=Wl(n,u).trim(),!s)||n.sCount[u]-n.blkIndent>=4)break;for(f=Yh(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===t+2&&(h=n.push("tbody_open","tbody",1),h.map=g=[t+2,0]),h=n.push("tr_open","tr",1),h.map=[u,u+1],c=0;c<p;c++)h=n.push("td_open","td",1),d[c]&&(h.attrs=[["style","text-align:"+d[c]]]),h=n.push("inline","",0),h.content=f[c]?f[c].trim():"",h.children=[],h=n.push("td_close","td",-1);h=n.push("tr_close","tr",-1)}return g&&(h=n.push("tbody_close","tbody",-1),g[1]=u),h=n.push("table_close","table",-1),w[1]=u,n.parentType=m,n.line=u,!0},nne=function(n,t,r){var i,o,s;if(n.sCount[t]-n.blkIndent<4)return!1;for(o=i=t+1;i<r;){if(n.isEmpty(i)){i++;continue}if(n.sCount[i]-n.blkIndent>=4){i++,o=i;continue}break}return n.line=o,s=n.push("code_block","code",0),s.content=n.getLines(t,o,4+n.blkIndent,!1)+`
`,s.map=[t,n.line],!0},tne=function(n,t,r,i){var o,s,a,c,l,u,f,p=!1,h=n.bMarks[t]+n.tShift[t],d=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||h+3>d||(o=n.src.charCodeAt(h),o!==126&&o!==96)||(l=h,h=n.skipChars(h,o),s=h-l,s<3)||(f=n.src.slice(l,h),a=n.src.slice(h,d),o===96&&a.indexOf(String.fromCharCode(o))>=0))return!1;if(i)return!0;for(c=t;c++,!(c>=r||(h=l=n.bMarks[c]+n.tShift[c],d=n.eMarks[c],h<d&&n.sCount[c]<n.blkIndent));)if(n.src.charCodeAt(h)===o&&!(n.sCount[c]-n.blkIndent>=4)&&(h=n.skipChars(h,o),!(h-l<s)&&(h=n.skipSpaces(h),!(h<d)))){p=!0;break}return s=n.sCount[t],n.line=c+(p?1:0),u=n.push("fence","code",0),u.info=a,u.content=n.getLines(t+1,c,s,!0),u.markup=f,u.map=[t,n.line],!0},Jh=de.isSpace,rne=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,k,A,M,b=n.lineMax,I=n.bMarks[t]+n.tShift[t],J=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(I++)!==62)return!1;if(i)return!0;for(c=h=n.sCount[t]+1,n.src.charCodeAt(I)===32?(I++,c++,h++,o=!1,S=!0):n.src.charCodeAt(I)===9?(S=!0,(n.bsCount[t]+h)%4===3?(I++,c++,h++,o=!1):o=!0):S=!1,d=[n.bMarks[t]],n.bMarks[t]=I;I<J&&(s=n.src.charCodeAt(I),Jh(s));){s===9?h+=4-(h+n.bsCount[t]+(o?1:0))%4:h++;I++}for(E=[n.bsCount[t]],n.bsCount[t]=n.sCount[t]+1+(S?1:0),u=I>=J,m=[n.sCount[t]],n.sCount[t]=h-c,v=[n.tShift[t]],n.tShift[t]=I-n.bMarks[t],k=n.md.block.ruler.getRules("blockquote"),g=n.parentType,n.parentType="blockquote",p=t+1;p<r&&(M=n.sCount[p]<n.blkIndent,I=n.bMarks[p]+n.tShift[p],J=n.eMarks[p],!(I>=J));p++){if(n.src.charCodeAt(I++)===62&&!M){for(c=h=n.sCount[p]+1,n.src.charCodeAt(I)===32?(I++,c++,h++,o=!1,S=!0):n.src.charCodeAt(I)===9?(S=!0,(n.bsCount[p]+h)%4===3?(I++,c++,h++,o=!1):o=!0):S=!1,d.push(n.bMarks[p]),n.bMarks[p]=I;I<J&&(s=n.src.charCodeAt(I),Jh(s));){s===9?h+=4-(h+n.bsCount[p]+(o?1:0))%4:h++;I++}u=I>=J,E.push(n.bsCount[p]),n.bsCount[p]=n.sCount[p]+1+(S?1:0),m.push(n.sCount[p]),n.sCount[p]=h-c,v.push(n.tShift[p]),n.tShift[p]=I-n.bMarks[p];continue}if(u)break;for(N=!1,a=0,l=k.length;a<l;a++)if(k[a](n,p,r,!0)){N=!0;break}if(N){n.lineMax=p,n.blkIndent!==0&&(d.push(n.bMarks[p]),E.push(n.bsCount[p]),v.push(n.tShift[p]),m.push(n.sCount[p]),n.sCount[p]-=n.blkIndent);break}d.push(n.bMarks[p]),E.push(n.bsCount[p]),v.push(n.tShift[p]),m.push(n.sCount[p]),n.sCount[p]=-1}for(w=n.blkIndent,n.blkIndent=0,A=n.push("blockquote_open","blockquote",1),A.markup=">",A.map=f=[t,0],n.md.block.tokenize(n,t,p),A=n.push("blockquote_close","blockquote",-1),A.markup=">",n.lineMax=b,n.parentType=g,f[1]=n.line,a=0;a<v.length;a++)n.bMarks[a+t]=d[a],n.tShift[a+t]=v[a],n.sCount[a+t]=m[a],n.bsCount[a+t]=E[a];return n.blkIndent=w,!0},ine=de.isSpace,one=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(o=n.src.charCodeAt(l++),o!==42&&o!==45&&o!==95))return!1;for(s=1;l<u;){if(a=n.src.charCodeAt(l++),a!==o&&!ine(a))return!1;a===o&&s++}return s<3?!1:(i||(n.line=t+1,c=n.push("hr","hr",0),c.map=[t,n.line],c.markup=Array(s+1).join(String.fromCharCode(o))),!0)},Xy=de.isSpace;function Zh(e,n){var t,r,i,o;return r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],t=e.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<i&&(o=e.src.charCodeAt(r),!Xy(o))?-1:r}function Xh(e,n){var t,r=e.bMarks[n]+e.tShift[n],i=r,o=e.eMarks[n];if(i+1>=o||(t=e.src.charCodeAt(i++),t<48||t>57))return-1;for(;;){if(i>=o)return-1;if(t=e.src.charCodeAt(i++),t>=48&&t<=57){if(i-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return i<o&&(t=e.src.charCodeAt(i),!Xy(t))?-1:i}function sne(e,n){var t,r,i=e.level+2;for(t=n+2,r=e.tokens.length-2;t<r;t++)e.tokens[t].level===i&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var ane=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,k,A,M,b,I,J,G,ne,F,z,U,ye=!1,R=!0;if(n.sCount[t]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[t]-n.listIndent>=4&&n.sCount[t]<n.blkIndent)return!1;if(i&&n.parentType==="paragraph"&&n.sCount[t]>=n.blkIndent&&(ye=!0),(J=Xh(n,t))>=0){if(f=!0,ne=n.bMarks[t]+n.tShift[t],g=Number(n.src.slice(ne,J-1)),ye&&g!==1)return!1}else if((J=Zh(n,t))>=0)f=!1;else return!1;if(ye&&n.skipSpaces(J)>=n.eMarks[t])return!1;if(w=n.src.charCodeAt(J-1),i)return!0;for(E=n.tokens.length,f?(U=n.push("ordered_list_open","ol",1),g!==1&&(U.attrs=[["start",g]])):U=n.push("bullet_list_open","ul",1),U.map=d=[t,0],U.markup=String.fromCharCode(w),v=t,G=!1,z=n.md.block.ruler.getRules("list"),k=n.parentType,n.parentType="list";v<r;){for(I=J,m=n.eMarks[v],u=S=n.sCount[v]+J-(n.bMarks[t]+n.tShift[t]);I<m;){if(o=n.src.charCodeAt(I),o===9)S+=4-(S+n.bsCount[v])%4;else if(o===32)S++;else break;I++}if(s=I,s>=m?l=1:l=S-u,l>4&&(l=1),c=u+l,U=n.push("list_item_open","li",1),U.markup=String.fromCharCode(w),U.map=p=[t,0],f&&(U.info=n.src.slice(ne,J-1)),b=n.tight,M=n.tShift[t],A=n.sCount[t],N=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=c,n.tight=!0,n.tShift[t]=s-n.bMarks[t],n.sCount[t]=S,s>=m&&n.isEmpty(t+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,t,r,!0),(!n.tight||G)&&(R=!1),G=n.line-t>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=N,n.tShift[t]=M,n.sCount[t]=A,n.tight=b,U=n.push("list_item_close","li",-1),U.markup=String.fromCharCode(w),v=t=n.line,p[1]=v,s=n.bMarks[t],v>=r||n.sCount[v]<n.blkIndent||n.sCount[t]-n.blkIndent>=4)break;for(F=!1,a=0,h=z.length;a<h;a++)if(z[a](n,v,r,!0)){F=!0;break}if(F)break;if(f){if(J=Xh(n,v),J<0)break;ne=n.bMarks[v]+n.tShift[v]}else if(J=Zh(n,v),J<0)break;if(w!==n.src.charCodeAt(J-1))break}return f?U=n.push("ordered_list_close","ol",-1):U=n.push("bullet_list_close","ul",-1),U.markup=String.fromCharCode(w),d[1]=v,n.line=v,n.parentType=k,R&&sne(n,E),!0},lne=de.normalizeReference,ys=de.isSpace,cne=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N=0,k=n.bMarks[t]+n.tShift[t],A=n.eMarks[t],M=t+1;if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(k)!==91)return!1;for(;++k<A;)if(n.src.charCodeAt(k)===93&&n.src.charCodeAt(k-1)!==92){if(k+1===A||n.src.charCodeAt(k+1)!==58)return!1;break}for(c=n.lineMax,v=n.md.block.ruler.getRules("reference"),d=n.parentType,n.parentType="reference";M<c&&!n.isEmpty(M);M++)if(!(n.sCount[M]-n.blkIndent>3)&&!(n.sCount[M]<0)){for(m=!1,u=0,f=v.length;u<f;u++)if(v[u](n,M,c,!0)){m=!0;break}if(m)break}for(g=n.getLines(t,M,n.blkIndent,!1).trim(),A=g.length,k=1;k<A;k++){if(o=g.charCodeAt(k),o===91)return!1;if(o===93){h=k;break}else o===10?N++:o===92&&(k++,k<A&&g.charCodeAt(k)===10&&N++)}if(h<0||g.charCodeAt(h+1)!==58)return!1;for(k=h+2;k<A;k++)if(o=g.charCodeAt(k),o===10)N++;else if(!ys(o))break;if(E=n.md.helpers.parseLinkDestination(g,k,A),!E.ok||(l=n.md.normalizeLink(E.str),!n.md.validateLink(l)))return!1;for(k=E.pos,N+=E.lines,s=k,a=N,w=k;k<A;k++)if(o=g.charCodeAt(k),o===10)N++;else if(!ys(o))break;for(E=n.md.helpers.parseLinkTitle(g,k,A),k<A&&w!==k&&E.ok?(S=E.str,k=E.pos,N+=E.lines):(S="",k=s,N=a);k<A&&(o=g.charCodeAt(k),!!ys(o));)k++;if(k<A&&g.charCodeAt(k)!==10&&S)for(S="",k=s,N=a;k<A&&(o=g.charCodeAt(k),!!ys(o));)k++;return k<A&&g.charCodeAt(k)!==10||(p=lne(g.slice(1,h)),!p)?!1:(i||(typeof n.env.references=="undefined"&&(n.env.references={}),typeof n.env.references[p]=="undefined"&&(n.env.references[p]={title:S,href:l}),n.parentType=d,n.line=t+N+1),!0)},une=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],rl={},fne="[a-zA-Z_:][a-zA-Z0-9:._-]*",dne="[^\"'=<>`\\x00-\\x20]+",pne="'[^']*'",hne='"[^"]*"',mne="(?:"+dne+"|"+pne+"|"+hne+")",gne="(?:\\s+"+fne+"(?:\\s*=\\s*"+mne+")?)",Ky="<[A-Za-z][A-Za-z0-9\\-]*"+gne+"*\\s*\\/?>",e0="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",vne="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",yne="<[?][\\s\\S]*?[?]>",_ne="<![A-Z]+\\s+[^>]*>",Ene="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Sne=new RegExp("^(?:"+Ky+"|"+e0+"|"+vne+"|"+yne+"|"+_ne+"|"+Ene+")"),wne=new RegExp("^(?:"+Ky+"|"+e0+")");rl.HTML_TAG_RE=Sne;rl.HTML_OPEN_CLOSE_TAG_RE=wne;var kne=une,bne=rl.HTML_OPEN_CLOSE_TAG_RE,Rr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+kne.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(bne.source+"\\s*$"),/^$/,!1]],Tne=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(l)!==60)return!1;for(c=n.src.slice(l,u),o=0;o<Rr.length&&!Rr[o][0].test(c);o++);if(o===Rr.length)return!1;if(i)return Rr[o][2];if(s=t+1,!Rr[o][1].test(c)){for(;s<r&&!(n.sCount[s]<n.blkIndent);s++)if(l=n.bMarks[s]+n.tShift[s],u=n.eMarks[s],c=n.src.slice(l,u),Rr[o][1].test(c)){c.length!==0&&s++;break}}return n.line=s,a=n.push("html_block","",0),a.map=[t,s],a.content=n.getLines(t,s,n.blkIndent,!0),!0},Kh=de.isSpace,xne=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(o=n.src.charCodeAt(l),o!==35||l>=u))return!1;for(s=1,o=n.src.charCodeAt(++l);o===35&&l<u&&s<=6;)s++,o=n.src.charCodeAt(++l);return s>6||l<u&&!Kh(o)?!1:(i||(u=n.skipSpacesBack(u,l),a=n.skipCharsBack(u,35,l),a>l&&Kh(n.src.charCodeAt(a-1))&&(u=a),n.line=t+1,c=n.push("heading_open","h"+String(s),1),c.markup="########".slice(0,s),c.map=[t,n.line],c=n.push("inline","",0),c.content=n.src.slice(l,u).trim(),c.map=[t,n.line],c.children=[],c=n.push("heading_close","h"+String(s),-1),c.markup="########".slice(0,s)),!0)},Nne=function(n,t,r){var i,o,s,a,c,l,u,f,p,h=t+1,d,E=n.md.block.ruler.getRules("paragraph");if(n.sCount[t]-n.blkIndent>=4)return!1;for(d=n.parentType,n.parentType="paragraph";h<r&&!n.isEmpty(h);h++)if(!(n.sCount[h]-n.blkIndent>3)){if(n.sCount[h]>=n.blkIndent&&(l=n.bMarks[h]+n.tShift[h],u=n.eMarks[h],l<u&&(p=n.src.charCodeAt(l),(p===45||p===61)&&(l=n.skipChars(l,p),l=n.skipSpaces(l),l>=u)))){f=p===61?1:2;break}if(!(n.sCount[h]<0)){for(o=!1,s=0,a=E.length;s<a;s++)if(E[s](n,h,r,!0)){o=!0;break}if(o)break}}return f?(i=n.getLines(t,h,n.blkIndent,!1).trim(),n.line=h+1,c=n.push("heading_open","h"+String(f),1),c.markup=String.fromCharCode(p),c.map=[t,n.line],c=n.push("inline","",0),c.content=i,c.map=[t,n.line-1],c.children=[],c=n.push("heading_close","h"+String(f),-1),c.markup=String.fromCharCode(p),n.parentType=d,!0):!1},Cne=function(n,t){var r,i,o,s,a,c,l=t+1,u=n.md.block.ruler.getRules("paragraph"),f=n.lineMax;for(c=n.parentType,n.parentType="paragraph";l<f&&!n.isEmpty(l);l++)if(!(n.sCount[l]-n.blkIndent>3)&&!(n.sCount[l]<0)){for(i=!1,o=0,s=u.length;o<s;o++)if(u[o](n,l,f,!0)){i=!0;break}if(i)break}return r=n.getLines(t,l,n.blkIndent,!1).trim(),n.line=l,a=n.push("paragraph_open","p",1),a.map=[t,n.line],a=n.push("inline","",0),a.content=r,a.map=[t,n.line],a.children=[],a=n.push("paragraph_close","p",-1),n.parentType=c,!0},n0=Zf,il=de.isSpace;function dt(e,n,t,r){var i,o,s,a,c,l,u,f;for(this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,f=!1,s=a=l=u=0,c=o.length;a<c;a++){if(i=o.charCodeAt(a),!f)if(il(i)){l++,i===9?u+=4-u%4:u++;continue}else f=!0;(i===10||a===c-1)&&(i!==10&&a++,this.bMarks.push(s),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,s=a+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}dt.prototype.push=function(e,n,t){var r=new n0(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};dt.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};dt.prototype.skipEmptyLines=function(n){for(var t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};dt.prototype.skipSpaces=function(n){for(var t,r=this.src.length;n<r&&(t=this.src.charCodeAt(n),!!il(t));n++);return n};dt.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!il(this.src.charCodeAt(--n)))return n+1;return n};dt.prototype.skipChars=function(n,t){for(var r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};dt.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};dt.prototype.getLines=function(n,t,r,i){var o,s,a,c,l,u,f,p=n;if(n>=t)return"";for(u=new Array(t-n),o=0;p<t;p++,o++){for(s=0,f=c=this.bMarks[p],p+1<t||i?l=this.eMarks[p]+1:l=this.eMarks[p];c<l&&s<r;){if(a=this.src.charCodeAt(c),il(a))a===9?s+=4-(s+this.bsCount[p])%4:s++;else if(c-f<this.tShift[p])s++;else break;c++}s>r?u[o]=new Array(s-r+1).join(" ")+this.src.slice(c,l):u[o]=this.src.slice(c,l)}return u.join("")};dt.prototype.Token=n0;var Ine=dt,Dne=Jf,_s=[["table",ene,["paragraph","reference"]],["code",nne],["fence",tne,["paragraph","reference","blockquote","list"]],["blockquote",rne,["paragraph","reference","blockquote","list"]],["hr",one,["paragraph","reference","blockquote","list"]],["list",ane,["paragraph","reference","blockquote"]],["reference",cne],["html_block",Tne,["paragraph","reference","blockquote"]],["heading",xne,["paragraph","reference","blockquote"]],["lheading",Nne],["paragraph",Cne]];function ol(){this.ruler=new Dne;for(var e=0;e<_s.length;e++)this.ruler.push(_s[e][0],_s[e][1],{alt:(_s[e][2]||[]).slice()})}ol.prototype.tokenize=function(e,n,t){for(var r,i,o=this.ruler.getRules(""),s=o.length,a=n,c=!1,l=e.md.options.maxNesting;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=l){e.line=t;break}for(i=0;i<s&&(r=o[i](e,a,t,!1),!r);i++);e.tight=!c,e.isEmpty(e.line-1)&&(c=!0),a=e.line,a<t&&e.isEmpty(a)&&(c=!0,a++,e.line=a)}};ol.prototype.parse=function(e,n,t,r){var i;!e||(i=new this.State(e,n,t,r),this.tokenize(i,i.line,i.lineMax))};ol.prototype.State=Ine;var Ane=ol;function One(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var Lne=function(n,t){for(var r=n.pos;r<n.posMax&&!One(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(t||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)},Fne=de.isSpace,Rne=function(n,t){var r,i,o,s=n.pos;if(n.src.charCodeAt(s)!==10)return!1;if(r=n.pending.length-1,i=n.posMax,!t)if(r>=0&&n.pending.charCodeAt(r)===32)if(r>=1&&n.pending.charCodeAt(r-1)===32){for(o=r-1;o>=1&&n.pending.charCodeAt(o-1)===32;)o--;n.pending=n.pending.slice(0,o),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(s++;s<i&&Fne(n.src.charCodeAt(s));)s++;return n.pos=s,!0},Pne=de.isSpace,Kf=[];for(var em=0;em<256;em++)Kf.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Kf[e.charCodeAt(0)]=1});var Mne=function(n,t){var r,i=n.pos,o=n.posMax;if(n.src.charCodeAt(i)!==92)return!1;if(i++,i<o){if(r=n.src.charCodeAt(i),r<256&&Kf[r]!==0)return t||(n.pending+=n.src[i]),n.pos+=2,!0;if(r===10){for(t||n.push("hardbreak","br",0),i++;i<o&&(r=n.src.charCodeAt(i),!!Pne(r));)i++;return n.pos=i,!0}}return t||(n.pending+="\\"),n.pos++,!0},qne=function(n,t){var r,i,o,s,a,c,l,u,f=n.pos,p=n.src.charCodeAt(f);if(p!==96)return!1;for(r=f,f++,i=n.posMax;f<i&&n.src.charCodeAt(f)===96;)f++;if(o=n.src.slice(r,f),l=o.length,n.backticksScanned&&(n.backticks[l]||0)<=r)return t||(n.pending+=o),n.pos+=l,!0;for(a=c=f;(a=n.src.indexOf("`",c))!==-1;){for(c=a+1;c<i&&n.src.charCodeAt(c)===96;)c++;if(u=c-a,u===l)return t||(s=n.push("code_inline","code",0),s.markup=o,s.content=n.src.slice(f,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),n.pos=c,!0;n.backticks[u]=a}return n.backticksScanned=!0,t||(n.pending+=o),n.pos+=l,!0},sl={};sl.tokenize=function(n,t){var r,i,o,s,a,c=n.pos,l=n.src.charCodeAt(c);if(t||l!==126||(i=n.scanDelims(n.pos,!0),s=i.length,a=String.fromCharCode(l),s<2))return!1;for(s%2&&(o=n.push("text","",0),o.content=a,s--),r=0;r<s;r+=2)o=n.push("text","",0),o.content=a+a,n.delimiters.push({marker:l,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0};function nm(e,n){var t,r,i,o,s,a=[],c=n.length;for(t=0;t<c;t++)i=n[t],i.marker===126&&i.end!==-1&&(o=n[i.end],s=e.tokens[i.token],s.type="s_open",s.tag="s",s.nesting=1,s.markup="~~",s.content="",s=e.tokens[o.token],s.type="s_close",s.tag="s",s.nesting=-1,s.markup="~~",s.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&a.push(o.token-1));for(;a.length;){for(t=a.pop(),r=t+1;r<e.tokens.length&&e.tokens[r].type==="s_close";)r++;r--,t!==r&&(s=e.tokens[r],e.tokens[r]=e.tokens[t],e.tokens[t]=s)}}sl.postProcess=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(nm(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&nm(n,r[t].delimiters)};var al={};al.tokenize=function(n,t){var r,i,o,s=n.pos,a=n.src.charCodeAt(s);if(t||a!==95&&a!==42)return!1;for(i=n.scanDelims(n.pos,a===42),r=0;r<i.length;r++)o=n.push("text","",0),o.content=String.fromCharCode(a),n.delimiters.push({marker:a,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0};function tm(e,n){var t,r,i,o,s,a,c=n.length;for(t=c-1;t>=0;t--)r=n[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(i=n[r.end],a=t>0&&n[t-1].end===r.end+1&&n[t-1].marker===r.marker&&n[t-1].token===r.token-1&&n[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),o=e.tokens[r.token],o.type=a?"strong_open":"em_open",o.tag=a?"strong":"em",o.nesting=1,o.markup=a?s+s:s,o.content="",o=e.tokens[i.token],o.type=a?"strong_close":"em_close",o.tag=a?"strong":"em",o.nesting=-1,o.markup=a?s+s:s,o.content="",a&&(e.tokens[n[t-1].token].content="",e.tokens[n[r.end+1].token].content="",t--))}al.postProcess=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(tm(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&tm(n,r[t].delimiters)};var $ne=de.normalizeReference,Yl=de.isSpace,jne=function(n,t){var r,i,o,s,a,c,l,u,f,p="",h="",d=n.pos,E=n.posMax,w=n.pos,g=!0;if(n.src.charCodeAt(n.pos)!==91||(a=n.pos+1,s=n.md.helpers.parseLinkLabel(n,n.pos,!0),s<0))return!1;if(c=s+1,c<E&&n.src.charCodeAt(c)===40){for(g=!1,c++;c<E&&(i=n.src.charCodeAt(c),!(!Yl(i)&&i!==10));c++);if(c>=E)return!1;if(w=c,l=n.md.helpers.parseLinkDestination(n.src,c,n.posMax),l.ok){for(p=n.md.normalizeLink(l.str),n.md.validateLink(p)?c=l.pos:p="",w=c;c<E&&(i=n.src.charCodeAt(c),!(!Yl(i)&&i!==10));c++);if(l=n.md.helpers.parseLinkTitle(n.src,c,n.posMax),c<E&&w!==c&&l.ok)for(h=l.str,c=l.pos;c<E&&(i=n.src.charCodeAt(c),!(!Yl(i)&&i!==10));c++);}(c>=E||n.src.charCodeAt(c)!==41)&&(g=!0),c++}if(g){if(typeof n.env.references=="undefined")return!1;if(c<E&&n.src.charCodeAt(c)===91?(w=c+1,c=n.md.helpers.parseLinkLabel(n,c),c>=0?o=n.src.slice(w,c++):c=s+1):c=s+1,o||(o=n.src.slice(a,s)),u=n.env.references[$ne(o)],!u)return n.pos=d,!1;p=u.href,h=u.title}return t||(n.pos=a,n.posMax=s,f=n.push("link_open","a",1),f.attrs=r=[["href",p]],h&&r.push(["title",h]),n.md.inline.tokenize(n),f=n.push("link_close","a",-1)),n.pos=c,n.posMax=E,!0},Vne=de.normalizeReference,Jl=de.isSpace,Une=function(n,t){var r,i,o,s,a,c,l,u,f,p,h,d,E,w="",g=n.pos,m=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91||(c=n.pos+2,a=n.md.helpers.parseLinkLabel(n,n.pos+1,!1),a<0))return!1;if(l=a+1,l<m&&n.src.charCodeAt(l)===40){for(l++;l<m&&(i=n.src.charCodeAt(l),!(!Jl(i)&&i!==10));l++);if(l>=m)return!1;for(E=l,f=n.md.helpers.parseLinkDestination(n.src,l,n.posMax),f.ok&&(w=n.md.normalizeLink(f.str),n.md.validateLink(w)?l=f.pos:w=""),E=l;l<m&&(i=n.src.charCodeAt(l),!(!Jl(i)&&i!==10));l++);if(f=n.md.helpers.parseLinkTitle(n.src,l,n.posMax),l<m&&E!==l&&f.ok)for(p=f.str,l=f.pos;l<m&&(i=n.src.charCodeAt(l),!(!Jl(i)&&i!==10));l++);else p="";if(l>=m||n.src.charCodeAt(l)!==41)return n.pos=g,!1;l++}else{if(typeof n.env.references=="undefined")return!1;if(l<m&&n.src.charCodeAt(l)===91?(E=l+1,l=n.md.helpers.parseLinkLabel(n,l),l>=0?s=n.src.slice(E,l++):l=a+1):l=a+1,s||(s=n.src.slice(c,a)),u=n.env.references[Vne(s)],!u)return n.pos=g,!1;w=u.href,p=u.title}return t||(o=n.src.slice(c,a),n.md.inline.parse(o,n.md,n.env,d=[]),h=n.push("image","img",0),h.attrs=r=[["src",w],["alt",""]],h.children=d,h.content=o,p&&r.push(["title",p])),n.pos=l,n.posMax=m,!0},zne=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Bne=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,Qne=function(n,t){var r,i,o,s,a,c,l=n.pos;if(n.src.charCodeAt(l)!==60)return!1;for(a=n.pos,c=n.posMax;;){if(++l>=c||(s=n.src.charCodeAt(l),s===60))return!1;if(s===62)break}return r=n.src.slice(a+1,l),Bne.test(r)?(i=n.md.normalizeLink(r),n.md.validateLink(i)?(t||(o=n.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=n.push("text","",0),o.content=n.md.normalizeLinkText(r),o=n.push("link_close","a",-1),o.markup="autolink",o.info="auto"),n.pos+=r.length+2,!0):!1):zne.test(r)?(i=n.md.normalizeLink("mailto:"+r),n.md.validateLink(i)?(t||(o=n.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=n.push("text","",0),o.content=n.md.normalizeLinkText(r),o=n.push("link_close","a",-1),o.markup="autolink",o.info="auto"),n.pos+=r.length+2,!0):!1):!1},Hne=rl.HTML_TAG_RE;function Gne(e){var n=e|32;return n>=97&&n<=122}var Wne=function(n,t){var r,i,o,s,a=n.pos;return!n.md.options.html||(o=n.posMax,n.src.charCodeAt(a)!==60||a+2>=o)||(r=n.src.charCodeAt(a+1),r!==33&&r!==63&&r!==47&&!Gne(r))||(i=n.src.slice(a).match(Hne),!i)?!1:(t||(s=n.push("html_inline","",0),s.content=n.src.slice(a,a+i[0].length)),n.pos+=i[0].length,!0)},rm=Hy,Yne=de.has,Jne=de.isValidEntityCode,im=de.fromCodePoint,Zne=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Xne=/^&([a-z][a-z0-9]{1,31});/i,Kne=function(n,t){var r,i,o,s=n.pos,a=n.posMax;if(n.src.charCodeAt(s)!==38)return!1;if(s+1<a){if(r=n.src.charCodeAt(s+1),r===35){if(o=n.src.slice(s).match(Zne),o)return t||(i=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),n.pending+=Jne(i)?im(i):im(65533)),n.pos+=o[0].length,!0}else if(o=n.src.slice(s).match(Xne),o&&Yne(rm,o[1]))return t||(n.pending+=rm[o[1]]),n.pos+=o[0].length,!0}return t||(n.pending+="&"),n.pos++,!0};function om(e,n){var t,r,i,o,s,a,c,l,u={},f=n.length;if(!!f){var p=0,h=-2,d=[];for(t=0;t<f;t++)if(i=n[t],d.push(0),(n[p].marker!==i.marker||h!==i.token-1)&&(p=t),h=i.token,i.length=i.length||0,!!i.close){for(u.hasOwnProperty(i.marker)||(u[i.marker]=[-1,-1,-1,-1,-1,-1]),s=u[i.marker][(i.open?3:0)+i.length%3],r=p-d[p]-1,a=r;r>s;r-=d[r]+1)if(o=n[r],o.marker===i.marker&&o.open&&o.end<0&&(c=!1,(o.close||i.open)&&(o.length+i.length)%3===0&&(o.length%3!==0||i.length%3!==0)&&(c=!0),!c)){l=r>0&&!n[r-1].open?d[r-1]+1:0,d[t]=t-r+l,d[r]=l,i.open=!1,o.end=t,o.close=!1,a=-1,h=-2;break}a!==-1&&(u[i.marker][(i.open?3:0)+(i.length||0)%3]=a)}}}var ete=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(om(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&om(n,r[t].delimiters)},nte=function(n){var t,r,i=0,o=n.tokens,s=n.tokens.length;for(t=r=0;t<s;t++)o[t].nesting<0&&i--,o[t].level=i,o[t].nesting>0&&i++,o[t].type==="text"&&t+1<s&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==r&&(o[r]=o[t]),r++);t!==r&&(o.length=r)},ed=Zf,sm=de.isWhiteSpace,am=de.isPunctChar,lm=de.isMdAsciiPunct;function Vo(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}Vo.prototype.pushPending=function(){var e=new ed("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Vo.prototype.push=function(e,n,t){this.pending&&this.pushPending();var r=new ed(e,n,t),i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Vo.prototype.scanDelims=function(e,n){var t=e,r,i,o,s,a,c,l,u,f,p=!0,h=!0,d=this.posMax,E=this.src.charCodeAt(e);for(r=e>0?this.src.charCodeAt(e-1):32;t<d&&this.src.charCodeAt(t)===E;)t++;return o=t-e,i=t<d?this.src.charCodeAt(t):32,l=lm(r)||am(String.fromCharCode(r)),f=lm(i)||am(String.fromCharCode(i)),c=sm(r),u=sm(i),u?p=!1:f&&(c||l||(p=!1)),c?h=!1:l&&(u||f||(h=!1)),n?(s=p,a=h):(s=p&&(!h||l),a=h&&(!p||f)),{can_open:s,can_close:a,length:o}};Vo.prototype.Token=ed;var tte=Vo,cm=Jf,Zl=[["text",Lne],["newline",Rne],["escape",Mne],["backticks",qne],["strikethrough",sl.tokenize],["emphasis",al.tokenize],["link",jne],["image",Une],["autolink",Qne],["html_inline",Wne],["entity",Kne]],Xl=[["balance_pairs",ete],["strikethrough",sl.postProcess],["emphasis",al.postProcess],["text_collapse",nte]];function Uo(){var e;for(this.ruler=new cm,e=0;e<Zl.length;e++)this.ruler.push(Zl[e][0],Zl[e][1]);for(this.ruler2=new cm,e=0;e<Xl.length;e++)this.ruler2.push(Xl[e][0],Xl[e][1])}Uo.prototype.skipToken=function(e){var n,t,r=e.pos,i=this.ruler.getRules(""),o=i.length,s=e.md.options.maxNesting,a=e.cache;if(typeof a[r]!="undefined"){e.pos=a[r];return}if(e.level<s)for(t=0;t<o&&(e.level++,n=i[t](e,!0),e.level--,!n);t++);else e.pos=e.posMax;n||e.pos++,a[r]=e.pos};Uo.prototype.tokenize=function(e){for(var n,t,r=this.ruler.getRules(""),i=r.length,o=e.posMax,s=e.md.options.maxNesting;e.pos<o;){if(e.level<s)for(t=0;t<i&&(n=r[t](e,!1),!n);t++);if(n){if(e.pos>=o)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Uo.prototype.parse=function(e,n,t,r){var i,o,s,a=new this.State(e,n,t,r);for(this.tokenize(a),o=this.ruler2.getRules(""),s=o.length,i=0;i<s;i++)o[i](a)};Uo.prototype.State=tte;var rte=Uo,ite=function(e){var n={};n.src_Any=Gy.source,n.src_Cc=Wy.source,n.src_Z=Yy.source,n.src_P=Yf.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");var t="[><\uFF5C]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+").|;(?!"+n.src_ZCc+").|\\!+(?!"+n.src_ZCc+"|[!]).|\\?(?!"+n.src_ZCc+"|[?]).)+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n};function yu(e){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(t){!t||Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function ll(e){return Object.prototype.toString.call(e)}function ote(e){return ll(e)==="[object String]"}function ste(e){return ll(e)==="[object Object]"}function ate(e){return ll(e)==="[object RegExp]"}function um(e){return ll(e)==="[object Function]"}function lte(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var t0={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function cte(e){return Object.keys(e||{}).reduce(function(n,t){return n||t0.hasOwnProperty(t)},!1)}var ute={"http:":{validate:function(e,n,t){var r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){var r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){var r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},fte="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",dte="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function pte(e){e.__index__=-1,e.__text_cache__=""}function hte(e){return function(n,t){var r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function fm(){return function(e,n){n.normalize(e)}}function ba(e){var n=e.re=ite(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(fte),t.push(n.src_xn),n.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");var i=[];e.__compiled__={};function o(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(e.__schemas__).forEach(function(a){var c=e.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(e.__compiled__[a]=l,ste(c)){ate(c.validate)?l.validate=hte(c.validate):um(c.validate)?l.validate=c.validate:o(a,c),um(c.normalize)?l.normalize=c.normalize:c.normalize?o(a,c):l.normalize=fm();return}if(ote(c)){i.push(a);return}o(a,c)}}),i.forEach(function(a){!e.__compiled__[e.__schemas__[a]]||(e.__compiled__[a].validate=e.__compiled__[e.__schemas__[a]].validate,e.__compiled__[a].normalize=e.__compiled__[e.__schemas__[a]].normalize)}),e.__compiled__[""]={validate:null,normalize:fm()};var s=Object.keys(e.__compiled__).filter(function(a){return a.length>0&&e.__compiled__[a]}).map(lte).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),pte(e)}function mte(e,n){var t=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=i,this.text=i,this.url=i}function dm(e,n){var t=new mte(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function qn(e,n){if(!(this instanceof qn))return new qn(e,n);n||cte(e)&&(n=e,e={}),this.__opts__=yu({},t0,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=yu({},ute,e),this.__compiled__={},this.__tlds__=dte,this.__tlds_replaced__=!1,this.re={},ba(this)}qn.prototype.add=function(n,t){return this.__schemas__[n]=t,ba(this),this};qn.prototype.set=function(n){return this.__opts__=yu(this.__opts__,n),this};qn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;var t,r,i,o,s,a,c,l,u;if(this.re.schema_test.test(n)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],c.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=n.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=r.index+r[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=n.indexOf("@"),u>=0&&(i=n.match(this.re.email_fuzzy))!==null&&(s=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=a))),this.__index__>=0};qn.prototype.pretest=function(n){return this.re.pretest.test(n)};qn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};qn.prototype.match=function(n){var t=0,r=[];this.__index__>=0&&this.__text_cache__===n&&(r.push(dm(this,t)),t=this.__last_index__);for(var i=t?n.slice(t):n;this.test(i);)r.push(dm(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};qn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),ba(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ba(this),this)};qn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};qn.prototype.onCompile=function(){};var gte=qn,vte={},yte=Object.freeze(Object.defineProperty({__proto__:null,default:vte},Symbol.toStringTag,{value:"Module"})),_te=R0(yte),Ete={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Ste={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},wte={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},Xi=de,kte=tl,bte=Dee,Tte=Kee,xte=Ane,Nte=rte,Cte=gte,dr=yi,r0=_te,Ite={default:Ete,zero:Ste,commonmark:wte},Dte=/^(vbscript|javascript|file|data):/,Ate=/^data:image\/(gif|png|jpeg|webp);/;function Ote(e){var n=e.trim().toLowerCase();return Dte.test(n)?!!Ate.test(n):!0}var i0=["http:","https:","mailto:"];function Lte(e){var n=dr.parse(e,!0);if(n.hostname&&(!n.protocol||i0.indexOf(n.protocol)>=0))try{n.hostname=r0.toASCII(n.hostname)}catch{}return dr.encode(dr.format(n))}function Fte(e){var n=dr.parse(e,!0);if(n.hostname&&(!n.protocol||i0.indexOf(n.protocol)>=0))try{n.hostname=r0.toUnicode(n.hostname)}catch{}return dr.decode(dr.format(n),dr.decode.defaultChars+"%")}function $n(e,n){if(!(this instanceof $n))return new $n(e,n);n||Xi.isString(e)||(n=e||{},e="default"),this.inline=new Nte,this.block=new xte,this.core=new Tte,this.renderer=new bte,this.linkify=new Cte,this.validateLink=Ote,this.normalizeLink=Lte,this.normalizeLinkText=Fte,this.utils=Xi,this.helpers=Xi.assign({},kte),this.options={},this.configure(e),n&&this.set(n)}$n.prototype.set=function(e){return Xi.assign(this.options,e),this};$n.prototype.configure=function(e){var n=this,t;if(Xi.isString(e)&&(t=e,e=Ite[t],!e))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&n[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&n[r].ruler2.enableOnly(e.components[r].rules2)}),this};$n.prototype.enable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};$n.prototype.disable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};$n.prototype.use=function(e){var n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};$n.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");var t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};$n.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};$n.prototype.parseInline=function(e,n){var t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};$n.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};var Rte=$n,nd=Rte,Pte=Array.from({length:11},function(e,n){return String.fromCharCode(8192+n)}).concat(["\u2028","\u2029","\u202F","\xA0"]),Mte=new RegExp("["+Pte.join("")+"]","g");function qte(e){return e.replace(Mte," ")}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var $te=/["'&<>]/,jte=Vte;function Vte(e){var n=""+e,t=$te.exec(n);if(!t)return n;var r,i="",o=0,s=0;for(o=t.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==o&&(i+=n.substring(s,o)),s=o+1,i+=r}return s!==o?i+n.substring(s,o):i}var pm=new nd;function td(e,n,t){import("./codemirror.60169312.js").then(function(r){return r.c}).then(function(r){var i=r.default,o,s;i.on(n,"select",function(a,c){if(!o){var l=c.parentNode;o=document.createElement("div"),o.className="CodeMirror-hint-information",l.appendChild(o),s=document.createElement("div"),s.className="CodeMirror-hint-deprecation",l.appendChild(s);var u;l.addEventListener("DOMNodeRemoved",u=function(d){d.target===l&&(l.removeEventListener("DOMNodeRemoved",u),o=null,s=null,u=null)})}var f=a.description?pm.render(a.description):"Self descriptive.",p=a.type?'<span class="infoType">'+_u(a.type)+"</span>":"";if(o.innerHTML='<div class="content">'+(f.slice(0,3)==="<p>"?"<p>"+p+f.slice(3):p+f)+"</div>",a&&s&&a.deprecationReason){var h=a.deprecationReason?pm.render(a.deprecationReason):"";s.innerHTML='<span class="deprecation-label">Deprecated</span>'+h,s.style.display="block"}else s&&(s.style.display="none");t&&t(o)})})}function _u(e){return e instanceof re?_u(e.ofType)+"!":e instanceof Qe?"["+_u(e.ofType)+"]":'<a class="typeName">'+jte(e.name)+"</a>"}var ht,o0=!1;typeof window=="object"&&(o0=window.navigator.platform==="MacIntel");var cl=(ht={},ht[o0?"Cmd-F":"Ctrl-F"]="findPersistent",ht["Cmd-G"]="findPersistent",ht["Ctrl-G"]="findPersistent",ht["Ctrl-Left"]="goSubwordLeft",ht["Ctrl-Right"]="goSubwordRight",ht["Alt-Left"]="goGroupLeft",ht["Alt-Right"]="goGroupRight",ht),Ute=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},zte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Bte=[import("./show-hint.a86f8f94.js").then(function(e){return e.s}),import("./matchbrackets.981a16ff.js").then(function(e){return e.m}),import("./closebrackets.95563f75.js").then(function(e){return e.c}),import("./brace-fold.a979f599.js").then(function(e){return e.b}),import("./foldgutter.d2fc3460.js").then(function(e){return e.f}),import("./lint.6d11832b.js").then(function(e){return e.l}),import("./searchcursor.4af619d4.js").then(function(e){return e.s}),import("./jump-to-line.2101d932.js").then(function(e){return e.j}),import("./dialog.d0b720be.js").then(function(e){return e.d}),import("./sublime.f345b33b.js").then(function(e){return e.s})];function ul(e,n){return Ute(this,void 0,void 0,function(){var t,r;return zte(this,function(i){switch(i.label){case 0:return[4,import("./codemirror.60169312.js").then(function(o){return o.c})];case 1:return t=i.sent().default,r=(n==null?void 0:n.useCommonAddons)===!1?e:Bte.concat(e),[4,Promise.all(r.map(function(o){return o}))];case 2:return i.sent(),[2,t]}})})}var Qte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Ta=globalThis&&globalThis.__assign||function(){return Ta=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ta.apply(this,arguments)},Hte=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Gte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Wte=new nd,Yte=/^[a-zA-Z0-9_@(]$/,hm=function(e){Qte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r.ignoreChangeEvent=!1,r._node=null,r.addonModules=function(){return[import("./comment.ee12c7f9.js").then(function(i){return i.c}),import("./search.a4bd39fb.js").then(function(i){return i.s}),import("./hint.d2eb0ee3.js").then(function(i){return i.h}),import("./lint.fbf1dd39.js").then(function(i){return i.l}),import("./info.d0799dab.js").then(function(i){return i.i}),import("./jump.44c43c0c.js").then(function(i){return i.j}),import("./mode.59f8e433.js").then(function(i){return i.m})]},r._onKeyUp=function(i,o){Yte.test(o.key)&&r.editor&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.ignoreChangeEvent&&r.editor&&(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){td(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r&&(r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion),r.on("beforeChange",t._onBeforeChange))}).catch(console.error)},n.prototype.componentDidUpdate=function(t){this.ignoreChangeEvent=!0;var r=!1;this.props.schema!==t.schema&&this.editor&&(this.editor.options.lint.schema=this.props.schema,this.editor.options.hintOptions.schema=this.props.schema,this.editor.options.info.schema=this.props.schema,this.editor.options.jump.schema=this.props.schema,r=!0),this.props.externalFragments!==t.externalFragments&&this.editor&&(this.editor.options.lint.externalFragments=this.props.externalFragments,this.editor.options.hintOptions.externalFragments=this.props.externalFragments,r=!0),r&&this.CodeMirror.signal(this.editor,"change",this.editor),this.props.value!==t.value&&this.props.value!==this.cachedValue&&this.editor&&(this.cachedValue=this.props.value,this.editor.setValue(this.props.value)),this.ignoreChangeEvent=!1},n.prototype.componentWillUnmount=function(){this.editor&&(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion))},n.prototype.render=function(){var t=this;return _.createElement("section",{className:"query-editor","aria-label":"Query Editor",ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){var t,r,i,o;return Hte(this,void 0,void 0,function(){var s,a,c,l=this;return Gte(this,function(u){switch(u.label){case 0:return a=this,[4,ul(this.addonModules())];case 1:return s=a.CodeMirror=u.sent(),c=this.editor=s(this._node,{value:(t=this.props.value)!==null&&t!==void 0?t:"",lineNumbers:!0,tabSize:2,foldGutter:{minFoldSize:4},mode:"graphql",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,lint:{schema:this.props.schema,validationRules:(r=this.props.validationRules)!==null&&r!==void 0?r:null,externalFragments:(i=this.props)===null||i===void 0?void 0:i.externalFragments},hintOptions:{schema:this.props.schema,closeOnUnfocus:!1,completeSingle:!1,container:this._node,externalFragments:(o=this.props)===null||o===void 0?void 0:o.externalFragments},info:{schema:this.props.schema,renderDescription:function(f){return Wte.render(f)},onClick:function(f){return l.props.onClickReference&&l.props.onClickReference(f)}},jump:{schema:this.props.schema,onClick:function(f){return l.props.onClickReference&&l.props.onClickReference(f)}},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:Ta(Ta({"Cmd-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Ctrl-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Alt-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Shift-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Shift-Alt-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Cmd-Enter":function(){l.props.onRunQuery&&l.props.onRunQuery()},"Ctrl-Enter":function(){l.props.onRunQuery&&l.props.onRunQuery()},"Shift-Ctrl-C":function(){l.props.onCopyQuery&&l.props.onCopyQuery()},"Shift-Ctrl-P":function(){l.props.onPrettifyQuery&&l.props.onPrettifyQuery()},"Shift-Ctrl-F":function(){l.props.onPrettifyQuery&&l.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){l.props.onMergeQuery&&l.props.onMergeQuery()}},cl),{"Cmd-S":function(){l.props.onRunQuery},"Ctrl-S":function(){l.props.onRunQuery}})}),[2,c]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n.prototype._onBeforeChange=function(t,r){if(r.origin==="paste"){var i=r.text.map(qte);r.update(r.from,r.to,i)}},n}(_.Component),Jte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Eu=globalThis&&globalThis.__assign||function(){return Eu=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Eu.apply(this,arguments)},Zte=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Xte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},mm=function(e){Jte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r._node=null,r.ignoreChangeEvent=!1,r.addonModules=function(){return[import("./hint.1ace0fb7.js").then(function(i){return i.h}),import("./lint.d4182826.js").then(function(i){return i.l}),import("./mode.87f941e6.js").then(function(i){return i.m})]},r._onKeyUp=function(i,o){var s=o.keyCode;!r.editor||(s>=65&&s<=90||!o.shiftKey&&s>=48&&s<=57||o.shiftKey&&s===189||o.shiftKey&&s===222)&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.editor||r.ignoreChangeEvent||(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){td(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion)}).catch(console.error)},n.prototype.componentDidUpdate=function(t){if(!!this.editor&&!!this.CodeMirror){if(this.ignoreChangeEvent=!0,this.props.variableToType!==t.variableToType&&(this.editor.options.lint.variableToType=this.props.variableToType,this.editor.options.hintOptions.variableToType=this.props.variableToType,this.CodeMirror.signal(this.editor,"change",this.editor)),this.props.value!==t.value&&this.props.value!==this.cachedValue){var r=this.props.value||"";this.cachedValue=r,this.editor.setValue(r)}this.ignoreChangeEvent=!1}},n.prototype.componentWillUnmount=function(){!this.editor||(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null)},n.prototype.render=function(){var t=this;return _.createElement("div",{className:"codemirrorWrap",style:{position:this.props.active?"relative":"absolute",visibility:this.props.active?"visible":"hidden"},ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){return Zte(this,void 0,void 0,function(){var t,r,i=this;return Xte(this,function(o){switch(o.label){case 0:return t=this,[4,ul(this.addonModules())];case 1:return t.CodeMirror=o.sent(),r=this.editor=this.CodeMirror(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:"graphql-variables",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,foldGutter:{minFoldSize:4},lint:{variableToType:this.props.variableToType},hintOptions:{variableToType:this.props.variableToType,closeOnUnfocus:!1,completeSingle:!1,container:this._node},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:Eu({"Cmd-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Ctrl-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Alt-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Shift-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Cmd-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Ctrl-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Shift-Ctrl-P":function(){i.props.onPrettifyQuery&&i.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){i.props.onMergeQuery&&i.props.onMergeQuery()}},cl)}),[2,r]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component),Kte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Su=globalThis&&globalThis.__assign||function(){return Su=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Su.apply(this,arguments)},ere=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},nre=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},gm=function(e){Kte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r._node=null,r.ignoreChangeEvent=!1,r.addonModules=function(){return[import("./javascript.5920e645.js").then(function(i){return i.j})]},r._onKeyUp=function(i,o){var s=o.keyCode;!r.editor||(s>=65&&s<=90||!o.shiftKey&&s>=48&&s<=57||o.shiftKey&&s===189||o.shiftKey&&s===222)&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.editor||r.ignoreChangeEvent||(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){td(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion)}).catch(console.error)},n.prototype.componentDidUpdate=function(t){if(!!this.editor){if(this.ignoreChangeEvent=!0,this.props.value!==t.value&&this.props.value!==this.cachedValue){var r=this.props.value||"";this.cachedValue=r,this.editor.setValue(r)}this.ignoreChangeEvent=!1}},n.prototype.componentWillUnmount=function(){!this.editor||(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null)},n.prototype.render=function(){var t=this;return _.createElement("div",{className:"codemirrorWrap",style:{position:this.props.active?"relative":"absolute",visibility:this.props.active?"visible":"hidden"},ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){return ere(this,void 0,void 0,function(){var t,r,i=this;return nre(this,function(o){switch(o.label){case 0:return t=this,[4,ul(this.addonModules())];case 1:return t.CodeMirror=o.sent(),r=this.editor=this.CodeMirror(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:{name:"javascript",json:!0},theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,foldGutter:{minFoldSize:4},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:Su({"Cmd-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Ctrl-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Alt-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Shift-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Cmd-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Ctrl-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Shift-Ctrl-P":function(){i.props.onPrettifyQuery&&i.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){i.props.onMergeQuery&&i.props.onMergeQuery()}},cl)}),[2,r]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component),tre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),rre=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},ire=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},vm=function(e){tre(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.viewer=null,t._node=null,t.allAddons=function(){return[import("./foldgutter.d2fc3460.js").then(function(r){return r.f}),import("./brace-fold.a979f599.js").then(function(r){return r.b}),import("./dialog.d0b720be.js").then(function(r){return r.d}),import("./search.a4bd39fb.js").then(function(r){return r.s}),import("./searchcursor.4af619d4.js").then(function(r){return r.s}),import("./jump-to-line.2101d932.js").then(function(r){return r.j}),import("./sublime.f345b33b.js").then(function(r){return r.s}),import("./mode.b1560e2d.js").then(function(r){return r.m})]},t}return n.prototype.componentDidMount=function(){this.initializeEditor()},n.prototype.shouldComponentUpdate=function(t){return this.props.value!==t.value},n.prototype.componentDidUpdate=function(){this.viewer&&this.viewer.setValue(this.props.value||"")},n.prototype.componentWillUnmount=function(){this.viewer=null},n.prototype.render=function(){var t=this;return _.createElement("section",{className:"result-window","aria-label":"Result Window","aria-live":"polite","aria-atomic":"true",ref:function(r){r&&(t.props.registerRef(r),t._node=r)}})},n.prototype.initializeEditor=function(){return rre(this,void 0,void 0,function(){var t,r,i,o;return ire(this,function(s){switch(s.label){case 0:return[4,ul(this.allAddons(),{useCommonAddons:!1})];case 1:return t=s.sent(),r=this.props.ResultsTooltip,i=this.props.ImagePreview,r||i?[4,import("./info-addon.d6dca4bd.js").then(function(a){return a.i})]:[3,3];case 2:s.sent(),o=document.createElement("div"),t.registerHelper("info","graphql-results",function(a,c,l,u){var f=[];return r&&f.push(_.createElement(r,{pos:u})),i&&typeof i.shouldRender=="function"&&i.shouldRender(a)&&f.push(_.createElement(i,{token:a})),f.length?(bp.render(_.createElement("div",null,f),o),o):(bp.unmountComponentAtNode(o),null)}),s.label=3;case 3:return this.viewer=t(this._node,{lineWrapping:!0,value:this.props.value||"",readOnly:!0,theme:this.props.editorTheme||"graphiql",mode:"graphql-results",keyMap:"sublime",foldGutter:{minFoldSize:4},gutters:["CodeMirror-foldgutter"],info:Boolean(this.props.ResultsTooltip||this.props.ImagePreview),extraKeys:cl}),[2]}})})},n.prototype.getCodeMirror=function(){return this.viewer},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component);function Tt(e){var n=e.onClick?e.onClick:function(){return null};return wu(e.type,n)}function wu(e,n){return e instanceof re?_.createElement("span",null,wu(e.ofType,n),"!"):e instanceof Qe?_.createElement("span",null,"[",wu(e.ofType,n),"]"):_.createElement("a",{className:"type-name",onClick:function(t){t.preventDefault(),n(e,t)},href:"#"},e==null?void 0:e.name)}var ore=function(e){return e?we(e):""};function s0(e){var n=e.field;return"defaultValue"in n&&n.defaultValue!==void 0?_.createElement("span",null," = ",_.createElement("span",{className:"arg-default-value"},ore(Wr(n.defaultValue,n.type)))):null}function xa(e){var n=e.arg,t=e.onClickType,r=e.showDefaultValue;return _.createElement("span",{className:"arg"},_.createElement("span",{className:"arg-name"},n.name),": ",_.createElement(Tt,{type:n.type,onClick:t}),r!==!1&&_.createElement(s0,{field:n}))}function sre(e){var n=e.directive;return _.createElement("span",{className:"doc-category-item",id:n.name.value},"@",n.name.value)}var are=new nd({breaks:!0,linkify:!0});function In(e){var n=e.markdown,t=e.className;return n?_.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:are.render(n)}}):_.createElement("div",null)}var lre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o};function cre(e){var n=e.field,t=e.onClickType,r=lre(_.useState(!1),2),i=r[0],o=r[1],s,a;if(n&&"args"in n&&n.args.length>0){s=_.createElement("div",{id:"doc-args",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"arguments"),n.args.filter(function(u){return!u.deprecationReason}).map(function(u){return _.createElement("div",{key:u.name,className:"doc-category-item"},_.createElement("div",null,_.createElement(xa,{arg:u,onClickType:t})),_.createElement(In,{className:"doc-value-description",markdown:u.description}),u&&"deprecationReason"in u&&_.createElement(In,{className:"doc-deprecation",markdown:u==null?void 0:u.deprecationReason}))}));var c=n.args.filter(function(u){return Boolean(u.deprecationReason)});c.length>0&&(a=_.createElement("div",{id:"doc-deprecated-args",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated arguments"),i?c.map(function(u,f){return _.createElement("div",{key:f},_.createElement("div",null,_.createElement(xa,{arg:u,onClickType:t})),_.createElement(In,{className:"doc-value-description",markdown:u.description}),u&&"deprecationReason"in u&&_.createElement(In,{className:"doc-deprecation",markdown:u==null?void 0:u.deprecationReason}))}):_.createElement("button",{className:"show-btn",onClick:function(){return o(!i)}},"Show deprecated arguments...")))}var l;return n&&n.astNode&&n.astNode.directives&&n.astNode.directives.length>0&&(l=_.createElement("div",{id:"doc-directives",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"directives"),n.astNode.directives.map(function(u){return _.createElement("div",{key:u.name.value,className:"doc-category-item"},_.createElement("div",null,_.createElement(sre,{directive:u})))}))),_.createElement("div",null,_.createElement(In,{className:"doc-type-description",markdown:(n==null?void 0:n.description)||"No Description"}),n&&"deprecationReason"in n&&_.createElement(In,{className:"doc-deprecation",markdown:n==null?void 0:n.deprecationReason}),_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"type"),_.createElement(Tt,{type:n==null?void 0:n.type,onClick:t})),s,l,a)}function ure(e){var n=e.schema,t=e.onClickType,r=n.getQueryType(),i=n.getMutationType&&n.getMutationType(),o=n.getSubscriptionType&&n.getSubscriptionType();return _.createElement("div",null,_.createElement(In,{className:"doc-type-description",markdown:n.description||"A GraphQL schema provides a root type for each kind of operation."}),_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"root types"),_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"query"),": ",_.createElement(Tt,{type:r,onClick:t})),i&&_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"mutation"),": ",_.createElement(Tt,{type:i,onClick:t})),o&&_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"subscription"),": ",_.createElement(Tt,{type:o,onClick:t}))))}function Kn(e,n){var t;return function(){for(var r=this,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];t&&window.clearTimeout(t),t=window.setTimeout(function(){t=null,n.apply(r,i)},e)}}var fre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),dre=function(e){fre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleChange=function(i){var o=i.currentTarget.value;r.setState({value:o}),r.debouncedOnSearch(o)},r.handleClear=function(){r.setState({value:""}),r.props.onSearch("")},r.state={value:t.value||""},r.debouncedOnSearch=Kn(200,r.props.onSearch),r}return n.prototype.render=function(){return _.createElement("label",{className:"search-box"},_.createElement("div",{className:"search-box-icon","aria-hidden":"true"},"\u26B2"),_.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",placeholder:this.props.placeholder,"aria-label":this.props.placeholder}),this.state.value&&_.createElement("button",{className:"search-box-clear",onClick:this.handleClear,"aria-label":"Clear search input"},"\u2715"))},n}(_.Component),pre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),hre=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},mre=function(e){pre(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.shouldComponentUpdate=function(t){return this.props.schema!==t.schema||this.props.searchValue!==t.searchValue},n.prototype.render=function(){var t,r,i=this.props.searchValue,o=this.props.withinType,s=this.props.schema,a=this.props.onClickType,c=this.props.onClickField,l=[],u=[],f=[],p=s.getTypeMap(),h=Object.keys(p);o&&(h=h.filter(function(v){return v!==o.name}),h.unshift(o.name));var d=function(v){if(l.length+u.length+f.length>=100)return"break";var S=p[v];if(o!==S&&Kl(v,i)&&u.push(_.createElement("div",{className:"doc-category-item",key:v},_.createElement(Tt,{type:S,onClick:a}))),S&&"getFields"in S){var N=S.getFields();Object.keys(N).forEach(function(k){var A=N[k],M;if(!Kl(k,i))if("args"in A&&A.args.length){if(M=A.args.filter(function(I){return Kl(I.name,i)}),M.length===0)return}else return;var b=_.createElement("div",{className:"doc-category-item",key:v+"."+k},o!==S&&[_.createElement(Tt,{key:"type",type:S,onClick:a}),"."],_.createElement("a",{className:"field-name",onClick:function(I){return c(A,S,I)}},A.name),M&&["(",_.createElement("span",{key:"args"},M.map(function(I){return _.createElement(xa,{key:I.name,arg:I,onClickType:a,showDefaultValue:!1})})),")"]);o===S?l.push(b):f.push(b)})}};try{for(var E=hre(h),w=E.next();!w.done;w=E.next()){var g=w.value,m=d(g);if(m==="break")break}}catch(v){t={error:v}}finally{try{w&&!w.done&&(r=E.return)&&r.call(E)}finally{if(t)throw t.error}}return l.length+u.length+f.length===0?_.createElement("span",{className:"doc-alert-text"},"No results found."):o&&u.length+f.length>0?_.createElement("div",null,l,_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"other results"),u,f)):_.createElement("div",{className:"doc-search-items"},l,u,f)},n}(_.Component);function Kl(e,n){try{var t=n.replace(/[^_0-9A-Za-z]/g,function(r){return"\\"+r});return e.search(new RegExp(t,"i"))!==-1}catch{return e.toLowerCase().indexOf(n.toLowerCase())!==-1}}var gre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),vre=function(e){gre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleShowDeprecated=function(){return r.setState({showDeprecated:!0})},r.state={showDeprecated:!1},r}return n.prototype.shouldComponentUpdate=function(t,r){return this.props.type!==t.type||this.props.schema!==t.schema||this.state.showDeprecated!==r.showDeprecated},n.prototype.render=function(){var t=this.props.schema,r=this.props.type,i=this.props.onClickType,o=this.props.onClickField,s=null,a=[];r instanceof ko?(s="possible types",a=t.getPossibleTypes(r)):r instanceof wo?(s="implementations",a=t.getPossibleTypes(r)):r instanceof wn&&(s="implements",a=r.getInterfaces());var c;a&&a.length>0&&(c=_.createElement("div",{id:"doc-types",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},s),a.map(function(m){return _.createElement("div",{key:m.name,className:"doc-category-item"},_.createElement(Tt,{type:m,onClick:i}))})));var l,u;if(r&&"getFields"in r){var f=r.getFields(),p=Object.keys(f).map(function(m){return f[m]});l=_.createElement("div",{id:"doc-fields",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"fields"),p.filter(function(m){return!m.deprecationReason}).map(function(m){return _.createElement(ym,{key:m.name,type:r,field:m,onClickType:i,onClickField:o})}));var h=p.filter(function(m){return Boolean(m.deprecationReason)});h.length>0&&(u=_.createElement("div",{id:"doc-deprecated-fields",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated fields"),this.state.showDeprecated?h.map(function(m){return _.createElement(ym,{key:m.name,type:r,field:m,onClickType:i,onClickField:o})}):_.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated fields...")))}var d,E;if(r instanceof wr){var w=r.getValues();d=_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"values"),w.filter(function(m){return Boolean(!m.deprecationReason)}).map(function(m){return _.createElement(_m,{key:m.name,value:m})}));var g=w.filter(function(m){return Boolean(m.deprecationReason)});g.length>0&&(E=_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated values"),this.state.showDeprecated?g.map(function(m){return _.createElement(_m,{key:m.name,value:m})}):_.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated values...")))}return _.createElement("div",null,_.createElement(In,{className:"doc-type-description",markdown:"description"in r&&r.description||"No Description"}),r instanceof wn&&c,l,u,d,E,!(r instanceof wn)&&c)},n}(_.Component);function ym(e){var n=e.type,t=e.field,r=e.onClickType,i=e.onClickField;return _.createElement("div",{className:"doc-category-item"},_.createElement("a",{className:"field-name",onClick:function(o){return i(t,n,o)}},t.name),"args"in t&&t.args&&t.args.length>0&&["(",_.createElement("span",{key:"args"},t.args.filter(function(o){return!o.deprecationReason}).map(function(o){return _.createElement(xa,{key:o.name,arg:o,onClickType:r})})),")"],": ",_.createElement(Tt,{type:t.type,onClick:r}),_.createElement(s0,{field:t}),t.description&&_.createElement(In,{className:"field-short-description",markdown:t.description}),"deprecationReason"in t&&t.deprecationReason&&_.createElement(In,{className:"doc-deprecation",markdown:t.deprecationReason}))}function _m(e){var n=e.value;return _.createElement("div",{className:"doc-category-item"},_.createElement("div",{className:"enum-value"},n.name),_.createElement(In,{className:"doc-value-description",markdown:n.description}),n.deprecationReason&&_.createElement(In,{className:"doc-deprecation",markdown:n.deprecationReason}))}var yre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Na=globalThis&&globalThis.__assign||function(){return Na=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Na.apply(this,arguments)},Em={name:"Schema",title:"Documentation Explorer"},_re=function(e){yre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleNavBackClick=function(){r.state.navStack.length>1&&r.setState({navStack:r.state.navStack.slice(0,-1)})},r.handleClickType=function(i){r.showDoc(i)},r.handleClickField=function(i){r.showDoc(i)},r.handleSearch=function(i){r.showSearch(i)},r.state={navStack:[Em]},r}return n.prototype.shouldComponentUpdate=function(t,r){return this.props.schema!==t.schema||this.state.navStack!==r.navStack||this.props.schemaErrors!==t.schemaErrors},n.prototype.render=function(){var t=this.props,r=t.schema,i=t.schemaErrors,o=this.state.navStack,s=o[o.length-1],a;i?a=_.createElement("div",{className:"error-container"},"Error fetching schema"):r===void 0?a=_.createElement("div",{className:"spinner-container"},_.createElement("div",{className:"spinner"})):r?s.search?a=_.createElement(mre,{searchValue:s.search,withinType:s.def,schema:r,onClickType:this.handleClickType,onClickField:this.handleClickField}):o.length===1?a=_.createElement(ure,{schema:r,onClickType:this.handleClickType}):di(s.def)?a=_.createElement(vre,{schema:r,type:s.def,onClickType:this.handleClickType,onClickField:this.handleClickField}):a=_.createElement(cre,{field:s.def,onClickType:this.handleClickType}):a=_.createElement("div",{className:"error-container"},"No Schema Available");var c=o.length===1||di(s.def)&&"getFields"in s.def,l;return o.length>1&&(l=o[o.length-2].name),_.createElement("section",{className:"doc-explorer",key:s.name,"aria-label":"Documentation Explorer"},_.createElement("div",{className:"doc-explorer-title-bar"},l&&_.createElement("button",{className:"doc-explorer-back",onClick:this.handleNavBackClick,"aria-label":"Go back to "+l},l),_.createElement("div",{className:"doc-explorer-title"},s.title||s.name),_.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),_.createElement("div",{className:"doc-explorer-contents"},c&&_.createElement(dre,{value:s.search,placeholder:"Search "+s.name+"...",onSearch:this.handleSearch}),a))},n.prototype.showDoc=function(t){var r=this.state.navStack,i=r[r.length-1];i.def!==t&&this.setState({navStack:r.concat([{name:t.name,def:t}])})},n.prototype.showDocForReference=function(t){t&&t.kind==="Type"?this.showDoc(t.type):t.kind==="Field"?this.showDoc(t.field):t.kind==="Argument"&&t.field?this.showDoc(t.field):t.kind==="EnumValue"&&t.type&&this.showDoc(t.type)},n.prototype.showSearch=function(t){var r=this.state.navStack.slice(),i=r[r.length-1];r[r.length-1]=Na(Na({},i),{search:t}),this.setState({navStack:r})},n.prototype.reset=function(){this.setState({navStack:[Em]})},n}(_.Component),Ere=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Sre=function(e){Ere(n,e);function n(t){var r=e.call(this,t)||this;return r.state={editable:!1},r.editField=null,r}return n.prototype.render=function(){var t=this,r,i=this.props.label||this.props.operationName||((r=this.props.query)===null||r===void 0?void 0:r.split(`
`).filter(function(s){return s.indexOf("#")!==0}).join("")),o=this.props.favorite?"\u2605":"\u2606";return _.createElement("li",{className:this.state.editable?"editable":void 0},this.state.editable?_.createElement("input",{type:"text",defaultValue:this.props.label,ref:function(s){t.editField=s},onBlur:this.handleFieldBlur.bind(this),onKeyDown:this.handleFieldKeyDown.bind(this),placeholder:"Type a label"}):_.createElement("button",{className:"history-label",onClick:this.handleClick.bind(this)},i),_.createElement("button",{onClick:this.handleEditClick.bind(this),"aria-label":"Edit label"},"\u270E"),_.createElement("button",{className:this.props.favorite?"favorited":void 0,onClick:this.handleStarClick.bind(this),"aria-label":this.props.favorite?"Remove favorite":"Add favorite"},o))},n.prototype.handleClick=function(){this.props.onSelect(this.props.query,this.props.variables,this.props.headers,this.props.operationName,this.props.label)},n.prototype.handleStarClick=function(t){t.stopPropagation(),this.props.handleToggleFavorite(this.props.query,this.props.variables,this.props.headers,this.props.operationName,this.props.label,this.props.favorite)},n.prototype.handleFieldBlur=function(t){t.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.headers,this.props.operationName,t.target.value,this.props.favorite)},n.prototype.handleFieldKeyDown=function(t){t.keyCode===13&&(t.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.headers,this.props.operationName,t.currentTarget.value,this.props.favorite))},n.prototype.handleEditClick=function(t){var r=this;t.stopPropagation(),this.setState({editable:!0},function(){r.editField&&r.editField.focus()})},n}(_.Component),wre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},kre=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(wre(arguments[n]));return e},Sm=function(){function e(n,t,r){r===void 0&&(r=null),this.key=n,this.storage=t,this.maxSize=r,this.items=this.fetchAll()}return Object.defineProperty(e.prototype,"length",{get:function(){return this.items.length},enumerable:!1,configurable:!0}),e.prototype.contains=function(n){return this.items.some(function(t){return t.query===n.query&&t.variables===n.variables&&t.headers===n.headers&&t.operationName===n.operationName})},e.prototype.edit=function(n){var t=this.items.findIndex(function(r){return r.query===n.query&&r.variables===n.variables&&r.headers===n.headers&&r.operationName===n.operationName});t!==-1&&(this.items.splice(t,1,n),this.save())},e.prototype.delete=function(n){var t=this.items.findIndex(function(r){return r.query===n.query&&r.variables===n.variables&&r.headers===n.headers&&r.operationName===n.operationName});t!==-1&&(this.items.splice(t,1),this.save())},e.prototype.fetchRecent=function(){return this.items[this.items.length-1]},e.prototype.fetchAll=function(){var n=this.storage.get(this.key);return n?JSON.parse(n)[this.key]:[]},e.prototype.push=function(n){var t,r=kre(this.items,[n]);this.maxSize&&r.length>this.maxSize&&r.shift();for(var i=0;i<5;i++){var o=this.storage.set(this.key,JSON.stringify((t={},t[this.key]=r,t)));if(!o||!o.error)this.items=r;else if(o.isQuotaError&&this.maxSize)r.shift();else return}},e.prototype.save=function(){var n;this.storage.set(this.key,JSON.stringify((n={},n[this.key]=this.items,n)))},e}(),Ca=globalThis&&globalThis.__assign||function(){return Ca=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ca.apply(this,arguments)},bre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},wm=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(bre(arguments[n]));return e},Tre=1e5,a0=function(){function e(n,t){var r=this;this.storage=n,this.maxHistoryLength=t,this.shouldSaveQuery=function(i,o,s,a){if(!i)return!1;try{at(i)}catch{return!1}return i.length>Tre?!1:a?!(JSON.stringify(i)===JSON.stringify(a.query)&&(JSON.stringify(o)===JSON.stringify(a.variables)&&(JSON.stringify(s)===JSON.stringify(a.headers)||s&&!a.headers)||o&&!a.variables)):!0},this.fetchAllQueries=function(){var i=r.history.fetchAll(),o=r.favorite.fetchAll();return i.concat(o)},this.updateHistory=function(i,o,s,a){if(r.shouldSaveQuery(i,o,s,r.history.fetchRecent())){r.history.push({query:i,variables:o,headers:s,operationName:a});var c=r.history.items,l=r.favorite.items;r.queries=c.concat(l)}},this.toggleFavorite=function(i,o,s,a,c,l){var u={query:i,variables:o,headers:s,operationName:a,label:c};r.favorite.contains(u)?l&&(u.favorite=!1,r.favorite.delete(u)):(u.favorite=!0,r.favorite.push(u)),r.queries=wm(r.history.items,r.favorite.items)},this.editLabel=function(i,o,s,a,c,l){var u={query:i,variables:o,headers:s,operationName:a,label:c};l?r.favorite.edit(Ca(Ca({},u),{favorite:l})):r.history.edit(u),r.queries=wm(r.history.items,r.favorite.items)},this.history=new Sm("queries",this.storage,this.maxHistoryLength),this.favorite=new Sm("favorites",this.storage,null),this.queries=this.fetchAllQueries()}return e}(),xre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ku=globalThis&&globalThis.__assign||function(){return ku=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ku.apply(this,arguments)},Nre=function(e){xre(n,e);function n(t){var r=e.call(this,t)||this;r.onUpdateHistory=function(o,s,a,c){r.historyStore.updateHistory(o,s,a,c),r.setState({queries:r.historyStore.queries})},r.onHandleEditLabel=function(o,s,a,c,l,u){r.historyStore.editLabel(o,s,a,c,l,u),r.setState({queries:r.historyStore.queries})},r.onToggleFavorite=function(o,s,a,c,l,u){r.historyStore.toggleFavorite(o,s,a,c,l,u),r.setState({queries:r.historyStore.queries})},r.historyStore=new a0(r.props.storage,r.props.maxHistoryLength);var i=r.historyStore.queries;return r.state={queries:i},r}return n.prototype.render=function(){var t=this,r=this.state.queries.slice().reverse(),i=r.map(function(o,s){return _.createElement(Sre,ku({handleEditLabel:t.onHandleEditLabel,handleToggleFavorite:t.onToggleFavorite,key:s+":"+(o.label||o.query),onSelect:t.props.onSelectQuery},o))});return _.createElement("section",{"aria-label":"History"},_.createElement("div",{className:"history-title-bar"},_.createElement("div",{className:"history-title"},"History"),_.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),_.createElement("ul",{className:"history-contents"},i))},n}(_.Component),Cre=function(){function e(){this.sizes=[]}return e.prototype.updateSizes=function(n){var t=this;n.forEach(function(r,i){if(r){var o=r.getClientHeight();if(i<=t.sizes.length&&o!==t.sizes[i]){var s=r.getCodeMirror();s&&s.setSize(null,null)}t.sizes[i]=o}})},e}();function Ire(e,n){return n instanceof DOMException&&(n.code===22||n.code===1014||n.name==="QuotaExceededError"||n.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e.length!==0}var Dre=function(){function e(n){this.storage=n||(typeof window!="undefined"?window.localStorage:null)}return e.prototype.get=function(n){if(this.storage){var t=this.storage.getItem("graphiql:"+n);if(t==="null"||t==="undefined")return this.storage.removeItem("graphiql:"+n),null;if(t)return t}return null},e.prototype.set=function(n,t){var r=!1,i=null;if(this.storage){var o="graphiql:"+n;if(t)try{this.storage.setItem(o,t)}catch(s){i=s,r=Ire(this.storage,s)}else this.storage.removeItem(o)}return{isQuotaError:r,error:i}},e}();function km(e,n,t){if(!(!t||t.length<1)){var r=t.map(function(s){return s.name&&s.name.value});if(n&&r.indexOf(n)!==-1)return n;if(n&&e){var i=e.map(function(s){return s.name&&s.name.value}),o=i.indexOf(n);if(o!==-1&&o<r.length)return r[o]}return r[0]}}function ec(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return e[t]}function Are(e,n,t){var r=[];if(!e||!n)return{insertions:r,result:n};var i;try{i=at(n)}catch{return{insertions:r,result:n}}var o=t||Ore,s=new Xa(e);return Mn(i,{leave:function(a){s.leave(a)},enter:function(a){if(s.enter(a),a.kind==="Field"&&!a.selectionSet){var c=s.getType(),l=l0(Rre(c),o);if(l&&a.loc){var u=Fre(n,a.loc.start);r.push({index:a.loc.end,string:" "+we(l).replace(/\n/g,`
`+u)})}}}}),{insertions:r,result:Lre(n,r)}}function Ore(e){if(!("getFields"in e))return[];var n=e.getFields();if(n.id)return["id"];if(n.edges)return["edges"];if(n.node)return["node"];var t=[];return Object.keys(n).forEach(function(r){lt(n[r].type)&&t.push(r)}),t}function l0(e,n){var t=tn(e);if(!(!e||lt(e))){var r=n(t);if(!(!Array.isArray(r)||r.length===0||!("getFields"in t)))return{kind:y.SELECTION_SET,selections:r.map(function(i){var o=t.getFields()[i],s=o?o.type:null;return{kind:y.FIELD,name:{kind:y.NAME,value:i},selectionSet:l0(s,n)}})}}}function Lre(e,n){if(n.length===0)return e;var t="",r=0;return n.forEach(function(i){var o=i.index,s=i.string;t+=e.slice(r,o)+s,r=o}),t+=e.slice(r),t}function Fre(e,n){for(var t=n,r=n;t;){var i=e.charCodeAt(t-1);if(i===10||i===13||i===8232||i===8233)break;t--,i!==9&&i!==11&&i!==12&&i!==32&&i!==160&&(r=t)}return e.substring(t,r)}function Rre(e){if(e)return e}function Es(e){for(var n=0,t=e;t.offsetParent;)n+=t.offsetLeft,t=t.offsetParent;return n}function bm(e){for(var n=0,t=e;t.offsetParent;)n+=t.offsetTop,t=t.offsetParent;return n}var pi=globalThis&&globalThis.__assign||function(){return pi=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},pi.apply(this,arguments)},rd=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},Pre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},c0=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Pre(arguments[n]));return e};function Mre(e,n){var t,r,i=new Map,o=[];try{for(var s=rd(e),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.kind==="Field"){var l=n(c),u=i.get(l);if(c.directives&&c.directives.length){var f=pi({},c);o.push(f)}else if(u&&u.selectionSet&&c.selectionSet)u.selectionSet.selections=c0(u.selectionSet.selections,c.selectionSet.selections);else if(!u){var f=pi({},c);i.set(l,f),o.push(f)}}else o.push(c)}}catch(p){t={error:p}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return o}function u0(e,n,t){var r,i,o,s=t?tn(t).name:null,a=[],c=[];try{for(var l=rd(n),u=l.next();!u.done;u=l.next()){var f=u.value;if(f.kind==="FragmentSpread"){var p=f.name.value;if(!f.directives||f.directives.length===0){if(c.indexOf(p)>=0)continue;c.push(p)}var h=e[f.name.value];if(h){var d=h.typeCondition,E=h.directives,w=h.selectionSet;f={kind:y.INLINE_FRAGMENT,typeCondition:d,directives:E,selectionSet:w}}}if(f.kind===y.INLINE_FRAGMENT&&(!f.directives||((o=f.directives)===null||o===void 0?void 0:o.length)===0)){var g=f.typeCondition?f.typeCondition.name.value:null;if(!g||g===s){a.push.apply(a,c0(u0(e,f.selectionSet.selections,t)));continue}}a.push(f)}}catch(m){r={error:m}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}return a}function qre(e,n){var t,r,i=n?new Xa(n):null,o=Object.create(null);try{for(var s=rd(e.definitions),a=s.next();!a.done;a=s.next()){var c=a.value;c.kind===y.FRAGMENT_DEFINITION&&(o[c.name.value]=c)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}var l={SelectionSet:function(u){var f=i?i.getParentType():null,p=u.selections;return p=u0(o,p,f),p=Mre(p,function(h){return h.alias?h.alias.value:h.name.value}),pi(pi({},u),{selections:p})},FragmentDefinition:function(){return null}};return Mn(e,i?Rf(i,l):l)}var $re="IntrospectionQuery",jre=$re;/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */var Vre=function(n){return typeof n=="object"?n===null:typeof n!="function"};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Ure=function(n){return n!=null&&typeof n=="object"&&Array.isArray(n)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var zre=Ure;function Tm(e){return zre(e)===!0&&Object.prototype.toString.call(e)==="[object Object]"}var Bre=function(n){var t,r;return!(Tm(n)===!1||(t=n.constructor,typeof t!="function")||(r=t.prototype,Tm(r)===!1)||r.hasOwnProperty("isPrototypeOf")===!1)};/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) Jon Schlinkert (https://github.com/jonschlinkert).
 * Released under the MIT License.
 */const{deleteProperty:Qre}=Reflect,Hre=Vre,xm=Bre,Nm=e=>typeof e=="object"&&e!==null||typeof e=="function",Gre=e=>e==="__proto__"||e==="constructor"||e==="prototype",id=e=>{if(!Hre(e))throw new TypeError("Object keys must be strings or symbols");if(Gre(e))throw new Error(`Cannot set unsafe key: "${e}"`)},Wre=e=>Array.isArray(e)?e.flat().map(String).join(","):e,Yre=(e,n)=>{if(typeof e!="string"||!n)return e;let t=e+";";return n.arrays!==void 0&&(t+=`arrays=${n.arrays};`),n.separator!==void 0&&(t+=`separator=${n.separator};`),n.split!==void 0&&(t+=`split=${n.split};`),n.merge!==void 0&&(t+=`merge=${n.merge};`),n.preservePaths!==void 0&&(t+=`preservePaths=${n.preservePaths};`),t},Jre=(e,n,t)=>{const r=Wre(n?Yre(e,n):e);id(r);const i=xr.cache.get(r)||t();return xr.cache.set(r,i),i},Zre=(e,n={})=>{const t=n.separator||".",r=t==="/"?!1:n.preservePaths;if(typeof e=="string"&&r!==!1&&/\//.test(e))return[e];const i=[];let o="";const s=a=>{let c;a.trim()!==""&&Number.isInteger(c=Number(a))?i.push(c):i.push(a)};for(let a=0;a<e.length;a++){const c=e[a];if(c==="\\"){o+=e[++a];continue}if(c===t){s(o),o="";continue}o+=c}return o&&s(o),i},f0=(e,n)=>n&&typeof n.split=="function"?n.split(e):typeof e=="symbol"?[e]:Array.isArray(e)?e:Jre(e,n,()=>Zre(e,n)),Xre=(e,n,t,r)=>{if(id(n),t===void 0)Qre(e,n);else if(r&&r.merge){const i=r.merge==="function"?r.merge:Object.assign;i&&xm(e[n])&&xm(t)?e[n]=i(e[n],t):e[n]=t}else e[n]=t;return e},xr=(e,n,t,r)=>{if(!n||!Nm(e))return e;const i=f0(n,r);let o=e;for(let s=0;s<i.length;s++){const a=i[s],c=i[s+1];if(id(a),c===void 0){Xre(o,a,t,r);break}if(typeof c=="number"&&!Array.isArray(o[a])){o=o[a]=[];continue}Nm(o[a])||(o[a]={}),o=o[a]}return e};xr.split=f0;xr.cache=new Map;xr.clear=()=>{xr.cache=new Map};var Kre=xr,Ia=globalThis&&globalThis.__assign||function(){return Ia=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ia.apply(this,arguments)};function eie(e){return _.createElement("div",{role:"button","aria-pressed":!1,className:"close","aria-label":"Close Tab",title:"Close Tab",onClick:function(n){n.stopPropagation(),e.onClick()}})}function nie(e){return _.createElement("button",Ia({},e.tabProps,{role:"tab",type:"button","aria-selected":e.isActive,title:e.title,className:"tab"+(e.isActive?" active":""),onClick:e.onSelect}),e.title,e.isCloseable?_.createElement(eie,{onClick:function(){return e.onClose()}}):null)}function tie(e){return _.createElement("button",{onClick:e.onClick,className:"tab-add",title:"Create new tab"},_.createElement("span",null,"+"))}function rie(e){return _.createElement("div",Ia({role:"tablist",className:"tabs"},e.tabsProps),e.children)}function iie(e){var n,t=/^(?!.*#).*(query|subscription|mutation)\s+([a-zA-Z0-9_]+)/,r=t.exec(e);return(n=r==null?void 0:r[2])!==null&&n!==void 0?n:"<untitled>"}function Nr(e){var n,t,r;return[(n=e.query)!==null&&n!==void 0?n:"",(t=e.variables)!==null&&t!==void 0?t:"",(r=e.headers)!==null&&r!==void 0?r:""].join("|")}function bu(){var e=function(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var oie=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Z.apply(this,arguments)},nc=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},tc=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},sie=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},aie=globalThis&&globalThis.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Ki=="function"?Ki(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}},lie=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},d0=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(lie(arguments[n]));return e},Ki=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},Cm=350,cie=parseInt(_.version.slice(0,2),10);if(cie<16)throw Error(["GraphiQL 0.18.0 and after is not compatible with React 15 or below.","If you are using a CDN source (jsdelivr, unpkg, etc), follow this example:","https://github.com/graphql/graphiql/blob/master/examples/graphiql-cdn/index.html#L49"].join(`
`));var Im=function(e){return JSON.stringify(e,null,2)},uie=function(e){return Z(Z({},e),{message:e.message,stack:e.stack})},Dm=function(e){return e instanceof L?e.toString():e instanceof Error?uie(e):e},fie=function(e){oie(n,e);function n(t){var r,i,o,s,a,c,l,u,f,p,h,d=e.call(this,t)||this;if(d._editorQueryID=0,d.safeSetState=function(T,$){d.componentIsMounted&&d.setState(T,$)},d.persistTabsState=function(){var T,$;d.props.tabs&&(d._storage.set("tabState",JSON.stringify(d.state.tabs,function(W,Y){return W==="response"||d.state.shouldPersistHeaders&&W==="headers"?void 0:Y})),typeof d.props.tabs=="object"&&(($=(T=d.props.tabs).onTabChange)===null||$===void 0||$.call(T,d.state.tabs)))},d.makeHandleOnSelectTab=function(T){return function(){d.handleStopQuery(),d.setState(function($){return yie(T,$)},function(){d.persistTabsState(),d.state.query&&d.handleEditQuery(d.state.query)})}},d.makeHandleOnCloseTab=function(T){return function(){d.state.tabs.activeTabIndex===T&&d.handleStopQuery(),d.setState(function($){return _ie(T,$)},d.persistTabsState)}},d.handleOnAddTab=function(){d.setState(function(T){return Eie(T)},d.persistTabsState)},d.handleClickReference=function(T){d.setState({docExplorerOpen:!0},function(){d.docExplorerComponent&&d.docExplorerComponent.showDocForReference(T)}),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))},d.handleRunQuery=function(T){return nc(d,void 0,void 0,function(){var $,W,Y,ge,Te,ae,pe,Vn,Un,Xn=this;return tc(this,function(Lt){switch(Lt.label){case 0:this._editorQueryID++,$=this._editorQueryID,W=this.autoCompleteLeafs()||this.state.query,Y=this.state.variables,ge=this.state.headers,Te=this.state.shouldPersistHeaders,ae=this.state.operationName,T&&T!==ae&&(ae=T,this.handleEditOperationName(ae)),Lt.label=1;case 1:return Lt.trys.push([1,3,,4]),this.setState({isWaitingForResponse:!0,response:void 0,operationName:ae}),this._storage.set("operationName",ae),this._queryHistory?this._queryHistory.onUpdateHistory(W,Y,ge,ae):this._historyStore&&this._historyStore.updateHistory(W,Y,ge,ae),pe={data:{}},[4,this._fetchQuery(W,Y,ge,ae,Te,function(pt){var dl,ad;if($===Xn._editorQueryID){var wi=Array.isArray(pt)?pt:!1;if(!wi&&typeof pt!="string"&&pt!==null&&"hasNext"in pt&&(wi=[pt]),wi){var zo={data:pe.data},ld=d0((pe==null?void 0:pe.errors)||[],wi.map(function(Ft){return Ft.errors}).flat().filter(Boolean));ld.length&&(zo.errors=ld);try{for(var Bo=Ki(wi),ki=Bo.next();!ki.done;ki=Bo.next()){var Or=ki.value,cd=Or.path,pl=Or.data,Doe=Or.errors,x0=sie(Or,["path","data","errors"]);if(cd){if(!pl)throw new Error("Expected part to contain a data property, but got "+Or);Kre(zo.data,cd,pl,{merge:!0})}else pl&&(zo.data=Or.data);pe=Z(Z({},zo),x0)}}catch(Ft){dl={error:Ft}}finally{try{ki&&!ki.done&&(ad=Bo.return)&&ad.call(Bo)}finally{if(dl)throw dl.error}}Xn.setState({isWaitingForResponse:!1,response:n.formatResult(pe)})}else{var ud=n.formatResult(pt);Xn.setState(function(Ft){return Z(Z({},Ft),{tabs:Z(Z({},Ft.tabs),{tabs:Ft.tabs.tabs.map(function(fd,N0){return N0!==Ft.tabs.activeTabIndex?fd:Z(Z({},fd),{response:ud})})}),isWaitingForResponse:!1,response:ud})},Xn.persistTabsState)}}})];case 2:return Vn=Lt.sent(),this.setState({subscription:Vn}),[3,4];case 3:return Un=Lt.sent(),this.setState({isWaitingForResponse:!1,response:Un.message}),[3,4];case 4:return[2]}})})},d.handleStopQuery=function(){var T=d.state.subscription;d.setState({isWaitingForResponse:!1,subscription:null}),T&&T.unsubscribe()},d.handlePrettifyQuery=function(){var T,$,W,Y=d.getQueryEditor(),ge=(T=Y==null?void 0:Y.getValue())!==null&&T!==void 0?T:"",Te=we(at(ge));Te!==ge&&(Y==null||Y.setValue(Te));var ae=d.getVariableEditor(),pe=($=ae==null?void 0:ae.getValue())!==null&&$!==void 0?$:"";try{var Vn=JSON.stringify(JSON.parse(pe),null,2);Vn!==pe&&(ae==null||ae.setValue(Vn))}catch{}var Un=d.getHeaderEditor(),Xn=(W=Un==null?void 0:Un.getValue())!==null&&W!==void 0?W:"";try{var Lt=JSON.stringify(JSON.parse(Xn),null,2);Lt!==Xn&&(Un==null||Un.setValue(Lt))}catch{}},d.handleMergeQuery=function(){var T=d.getQueryEditor(),$=T.getValue();if(!!$){var W=d.state.documentAST;T.setValue(we(qre(W,d.state.schema)))}},d.handleEditQuery=Kn(100,function(T){var $=d._updateQueryFacts(T,d.state.operationName,d.state.operations,d.state.schema);if(d.setState(function(W){return Z(Z(Z(Z({},W),{query:T}),$),{tabs:vie(T,W.tabs,$==null?void 0:$.operationName)})},d.persistTabsState),d._storage.set("query",T),d.props.onEditQuery)return d.props.onEditQuery(T,$==null?void 0:$.documentAST)}),d.handleCopyQuery=function(){var T=d.getQueryEditor(),$=T&&T.getValue();if(!!$&&(cw($),d.props.onCopyQuery))return d.props.onCopyQuery($)},d._updateQueryFacts=function(T,$,W,Y){var ge=Ms(Y,T);if(ge){var Te=km(W,$,ge.operations),ae=d.props.onEditOperationName;return ae&&Te&&$!==Te&&ae(Te),Z({operationName:Te},ge)}},d.handleEditVariables=function(T){d.setState(function($){return Z(Z({},$),{variables:T,tabs:gie(T,$.tabs)})},d.persistTabsState),Kn(500,function(){return d._storage.set("variables",T)})(),d.props.onEditVariables&&d.props.onEditVariables(T)},d.handleEditHeaders=function(T){d.setState(function($){return Z(Z({},$),{headers:T,tabs:mie(T,$.tabs)})},d.persistTabsState),d.props.shouldPersistHeaders&&Kn(500,function(){return d._storage.set("headers",T)})(),d.props.onEditHeaders&&d.props.onEditHeaders(T)},d.handleEditOperationName=function(T){var $=d.props.onEditOperationName;$&&$(T)},d.handleHintInformationRender=function(T){T.addEventListener("click",d._onClickHintInformation);var $;T.addEventListener("DOMNodeRemoved",$=function(){T.removeEventListener("DOMNodeRemoved",$),T.removeEventListener("click",d._onClickHintInformation)})},d.handleEditorRunQuery=function(){d._runQueryAtCursor()},d._onClickHintInformation=function(T){if((T==null?void 0:T.currentTarget)&&"className"in T.currentTarget&&T.currentTarget.className==="typeName"){var $=T.currentTarget.innerHTML,W=d.state.schema;if(W){var Y=W.getType($);Y&&(d.setState({docExplorerOpen:!0},function(){d.docExplorerComponent&&d.docExplorerComponent.showDoc(Y)}),Kn(500,function(){return d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))})())}}},d.handleToggleDocs=function(){typeof d.props.onToggleDocs=="function"&&d.props.onToggleDocs(!d.state.docExplorerOpen),d._storage.set("docExplorerOpen",JSON.stringify(!d.state.docExplorerOpen)),d.setState({docExplorerOpen:!d.state.docExplorerOpen})},d.handleToggleHistory=function(){typeof d.props.onToggleHistory=="function"&&d.props.onToggleHistory(!d.state.historyPaneOpen),d._storage.set("historyPaneOpen",JSON.stringify(!d.state.historyPaneOpen)),d.setState({historyPaneOpen:!d.state.historyPaneOpen})},d.handleSelectHistoryQuery=function(T,$,W,Y){T&&d.handleEditQuery(T),$&&d.handleEditVariables($),W&&d.handleEditHeaders(W),Y&&d.handleEditOperationName(Y)},d.handleResizeStart=function(T){if(!!d._didClickDragBar(T)){T.preventDefault();var $=T.clientX-Es(T.target),W=function(ge){if(ge.buttons===0)return Y();var Te=d.editorBarComponent,ae=ge.clientX-Es(Te)-$,pe=Te.clientWidth-ae;d.setState({editorFlex:ae/pe}),Kn(500,function(){return d._storage.set("editorFlex",JSON.stringify(d.state.editorFlex))})()},Y=function(){document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",Y),W=null,Y=null};document.addEventListener("mousemove",W),document.addEventListener("mouseup",Y)}},d.handleResetResize=function(){d.setState({editorFlex:1}),d._storage.set("editorFlex",JSON.stringify(d.state.editorFlex))},d.handleDocsResizeStart=function(T){T.preventDefault();var $=d.state.docExplorerWidth,W=T.clientX-Es(T.target),Y=function(Te){if(Te.buttons===0)return ge();var ae=d.graphiqlContainer,pe=Te.clientX-Es(ae)-W,Vn=ae.clientWidth-pe;Vn<100?(typeof d.props.onToggleDocs=="function"&&d.props.onToggleDocs(!d.state.docExplorerOpen),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen)),d.setState({docExplorerOpen:!1})):(d.setState({docExplorerOpen:!0,docExplorerWidth:Math.min(Vn,650)}),Kn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))},ge=function(){d.state.docExplorerOpen||(d.setState({docExplorerWidth:$}),Kn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",ge),Y=null,ge=null};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",ge)},d.handleDocsResetResize=function(){d.setState({docExplorerWidth:Cm}),Kn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()},d.handleTabClickPropogation=function(T){T.preventDefault(),T.stopPropagation()},d.handleOpenHeaderEditorTab=function(T){d.setState({headerEditorActive:!0,variableEditorActive:!1,secondaryEditorOpen:!0})},d.handleOpenVariableEditorTab=function(T){d.setState({headerEditorActive:!1,variableEditorActive:!0,secondaryEditorOpen:!0})},d.handleSecondaryEditorResizeStart=function(T){T.preventDefault();var $=!1,W=d.state.secondaryEditorOpen,Y=d.state.secondaryEditorHeight,ge=T.clientY-bm(T.target),Te=function(pe){if(pe.buttons===0)return ae();$=!0;var Vn=d.editorBarComponent,Un=pe.clientY-bm(Vn)-ge,Xn=Vn.clientHeight-Un;Xn<60?d.setState({secondaryEditorOpen:!1,secondaryEditorHeight:Y}):d.setState({secondaryEditorOpen:!0,secondaryEditorHeight:Xn}),Kn(500,function(){return d._storage.set("secondaryEditorHeight",JSON.stringify(d.state.secondaryEditorHeight))})()},ae=function(){$||d.setState({secondaryEditorOpen:!W}),document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",ae),Te=null,ae=null};document.addEventListener("mousemove",Te),document.addEventListener("mouseup",ae)},typeof t.fetcher!="function")throw new TypeError("GraphiQL requires a fetcher function.");d._storage=new Dre(t.storage);var E=(a=t.maxHistoryLength)!==null&&a!==void 0?a:20;d._historyStore=new a0(d._storage,E),d.componentIsMounted=!1;var w=t.query!==void 0?t.query:d._storage.get("query")?d._storage.get("query"):t.defaultQuery!==void 0?t.defaultQuery:die,g=Ms(t.schema,w),m=t.variables!==void 0?t.variables:d._storage.get("variables"),v=t.headers!==void 0?t.headers:d._storage.get("headers"),S=t.operationName!==void 0?t.operationName:km(void 0,d._storage.get("operationName"),g&&g.operations),N=t.docExplorerOpen||!1;d._storage.get("docExplorerOpen")&&(N=d._storage.get("docExplorerOpen")==="true");var k;t.defaultVariableEditorOpen!==void 0?k=t.defaultVariableEditorOpen:t.defaultSecondaryEditorOpen!==void 0?k=t.defaultSecondaryEditorOpen:k=Boolean(m||v);var A=(c=t.headerEditorEnabled)!==null&&c!==void 0?c:!0,M=(l=t.shouldPersistHeaders)!==null&&l!==void 0?l:!1,b=t.schema,I=t.response,J=void 0;if(b&&!d.props.dangerouslyAssumeSchemaIsValid){var G=Ps(b);G&&G.length>0&&(I=n.formatError(G),b=void 0,J=G)}d._introspectionQuery=ew({schemaDescription:(u=t.schemaDescription)!==null&&u!==void 0?u:void 0,inputValueDeprecation:(f=t.inputValueDeprecation)!==null&&f!==void 0?f:void 0}),d._introspectionQueryName=(p=t.introspectionQueryName)!==null&&p!==void 0?p:jre,d._introspectionQuerySansSubscriptions=d._introspectionQuery.replace("subscriptionType { name }","");var ne=Nr({query:w,variables:m,headers:v}),F={id:bu(),hash:ne,title:S!=null?S:"<untitled>",query:w,variables:m,headers:v,operationName:S,response:void 0},z=null;d.props.tabs&&(z=d._storage.get("tabState"));var U;if(z===null)U={activeTabIndex:0,tabs:[F]};else{U=JSON.parse(z);var ye=!1;try{for(var R=Ki(U.tabs),H=R.next();!H.done;H=R.next()){var B=H.value;B.query=B.query,B.variables=B.variables,B.headers=M?B.headers:void 0,B.response=void 0,B.operationName=void 0,B.id=bu(),B.hash=Nr(B),B.hash===ne&&(ye=!0)}}catch(T){r={error:T}}finally{try{H&&!H.done&&(i=R.return)&&i.call(R)}finally{if(r)throw r.error}}ye===!1&&(U.tabs.push(F),U.activeTabIndex=U.tabs.length-1)}var K=U.tabs[0],x=0;try{for(var j=Ki(U.tabs),P=j.next();!P.done;P=j.next()){var B=P.value;if(B.hash===ne){U.activeTabIndex=x,K=B;break}x++}}catch(T){o={error:T}}finally{try{P&&!P.done&&(s=j.return)&&s.call(j)}finally{if(o)throw o.error}}return d.state=Z({tabs:U,schema:b,query:K==null?void 0:K.query,variables:K==null?void 0:K.variables,headers:K==null?void 0:K.headers,operationName:K==null?void 0:K.operationName,response:(h=K==null?void 0:K.response)!==null&&h!==void 0?h:I,docExplorerOpen:N,schemaErrors:J,editorFlex:Number(d._storage.get("editorFlex"))||1,secondaryEditorOpen:k,secondaryEditorHeight:Number(d._storage.get("secondaryEditorHeight"))||200,variableEditorActive:d._storage.get("variableEditorActive")==="true"||t.headerEditorEnabled?d._storage.get("headerEditorActive")!=="true":!0,headerEditorActive:d._storage.get("headerEditorActive")==="true",headerEditorEnabled:A,shouldPersistHeaders:M,historyPaneOpen:d._storage.get("historyPaneOpen")==="true"||!1,docExplorerWidth:Number(d._storage.get("docExplorerWidth"))||Cm,isWaitingForResponse:!1,subscription:null,maxHistoryLength:E},g),d.state.query&&d.handleEditQuery(d.state.query),d}return n.formatResult=function(t){return JSON.stringify(t,null,2)},n.prototype.componentDidMount=function(){this.componentIsMounted=!0,this.state.schema===void 0&&this.fetchSchema(),this.codeMirrorSizer=new Cre,typeof window!="undefined"&&(window.g=this)},n.prototype.UNSAFE_componentWillMount=function(){this.componentIsMounted=!1},n.prototype.UNSAFE_componentWillReceiveProps=function(t){var r=this,i=this.state.schema,o=this.state.query,s=this.state.variables,a=this.state.headers,c=this.state.operationName,l=this.state.response;if(t.schema!==void 0&&(i=t.schema),t.query!==void 0&&this.props.query!==t.query&&(o=t.query),t.variables!==void 0&&this.props.variables!==t.variables&&(s=t.variables),t.headers!==void 0&&this.props.headers!==t.headers&&(a=t.headers),t.operationName!==void 0&&(c=t.operationName),t.response!==void 0&&(l=t.response),o&&i&&(i!==this.state.schema||o!==this.state.query||c!==this.state.operationName)){if(!this.props.dangerouslyAssumeSchemaIsValid){var u=Ps(i);u&&u.length>0&&(this.handleSchemaErrors(u),i=void 0)}var f=this._updateQueryFacts(o,c,this.state.operations,i);f!==void 0&&(c=f.operationName,this.setState(f))}t.schema===void 0&&t.fetcher!==this.props.fetcher&&(i=void 0),this._storage.set("operationName",c),this.setState({schema:i,query:o,variables:s,headers:a,operationName:c,response:l},function(){r.state.schema===void 0&&(r.docExplorerComponent&&r.docExplorerComponent.reset(),r.fetchSchema())})},n.prototype.componentDidUpdate=function(){this.codeMirrorSizer.updateSizes([this.queryEditorComponent,this.variableEditorComponent,this.headerEditorComponent,this.resultComponent])},n.prototype.render=function(){var t=this,r,i=_.Children.toArray(this.props.children),o=ec(i,function(E){return rc(E,n.Logo)})||_.createElement(n.Logo,null),s=ec(i,function(E){return rc(E,n.Toolbar)})||_.createElement(n.Toolbar,null,_.createElement(Fr,{onClick:this.handlePrettifyQuery,title:"Prettify Query (Shift-Ctrl-P)",label:"Prettify"}),_.createElement(Fr,{onClick:this.handleMergeQuery,title:"Merge Query (Shift-Ctrl-M)",label:"Merge"}),_.createElement(Fr,{onClick:this.handleCopyQuery,title:"Copy Query (Shift-Ctrl-C)",label:"Copy"}),_.createElement(Fr,{onClick:this.handleToggleHistory,title:"Show History",label:"History"}),!((r=this.props.toolbar)===null||r===void 0)&&r.additionalContent?this.props.toolbar.additionalContent:null),a=ec(i,function(E){return rc(E,n.Footer)}),c={WebkitFlex:this.state.editorFlex,flex:this.state.editorFlex},l={display:"block",width:this.state.docExplorerWidth},u="docExplorerWrap"+(this.state.docExplorerWidth<200?" doc-explorer-narrow":""),f={display:this.state.historyPaneOpen?"block":"none",width:"230px",zIndex:7},p=this.state.secondaryEditorOpen,h={height:p?this.state.secondaryEditorHeight:void 0},d=this.state.tabs;return _.createElement("div",{ref:function(E){t.graphiqlContainer=E},"data-testid":"graphiql-container",className:"graphiql-container"},this.state.historyPaneOpen&&_.createElement("div",{className:"historyPaneWrap",style:f},_.createElement(Nre,{ref:function(E){t._queryHistory=E},operationName:this.state.operationName,query:this.state.query,variables:this.state.variables,onSelectQuery:this.handleSelectHistoryQuery,storage:this._storage,maxHistoryLength:this.state.maxHistoryLength,queryID:this._editorQueryID},_.createElement("button",{className:"docExplorerHide",onClick:this.handleToggleHistory,"aria-label":"Close History"},"\u2715"))),_.createElement("div",{className:"editorWrap"},_.createElement("div",{className:"topBarWrap"},this.props.beforeTopBarContent,_.createElement("div",{className:"topBar"},o,_.createElement(Rw,{isRunning:Boolean(this.state.subscription),onRun:this.handleRunQuery,onStop:this.handleStopQuery,operations:this.state.operations}),s),!this.state.docExplorerOpen&&_.createElement("button",{className:"docExplorerShow",onClick:this.handleToggleDocs,"aria-label":"Open Documentation Explorer"},"Docs")),this.props.tabs?_.createElement(rie,{tabsProps:{"aria-label":"Select active operation"}},d.tabs.map(function(E,w){return _.createElement(nie,{key:E.id,isActive:w===d.activeTabIndex,title:E.title,isCloseable:d.tabs.length>1,onSelect:t.makeHandleOnSelectTab(w),onClose:t.makeHandleOnCloseTab(w),tabProps:{"aria-controls":"sessionWrap",id:"session-tab-"+w}})}),_.createElement(tie,{onClick:this.handleOnAddTab})):null,_.createElement("div",{ref:function(E){t.editorBarComponent=E},role:"tabpanel",id:"sessionWrap",className:"editorBar","aria-labelledby":"session-tab-"+d.activeTabIndex,onDoubleClick:this.handleResetResize,onMouseDown:this.handleResizeStart},_.createElement("div",{className:"queryWrap",style:c},_.createElement(hm,{ref:function(E){t.queryEditorComponent=E},schema:this.state.schema,validationRules:this.props.validationRules,value:this.state.query,onEdit:this.handleEditQuery,onHintInformationRender:this.handleHintInformationRender,onClickReference:this.handleClickReference,onCopyQuery:this.handleCopyQuery,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,externalFragments:this.props.externalFragments}),_.createElement("section",{className:"variable-editor secondary-editor",style:h,"aria-label":this.state.variableEditorActive?"Query Variables":"Request Headers"},_.createElement("div",{className:"secondary-editor-title variable-editor-title",id:"secondary-editor-title",style:{cursor:p?"row-resize":"n-resize"},onMouseDown:this.handleSecondaryEditorResizeStart},_.createElement("div",{className:"variable-editor-title-text"+(this.state.variableEditorActive?" active":""),onClick:this.handleOpenVariableEditorTab,onMouseDown:this.handleTabClickPropogation},"Query Variables"),this.state.headerEditorEnabled&&_.createElement("div",{style:{marginLeft:"20px"},className:"variable-editor-title-text"+(this.state.headerEditorActive?" active":""),onClick:this.handleOpenHeaderEditorTab,onMouseDown:this.handleTabClickPropogation},"Request Headers")),_.createElement(mm,{ref:function(E){t.variableEditorComponent=E},value:this.state.variables,variableToType:this.state.variableToType,onEdit:this.handleEditVariables,onHintInformationRender:this.handleHintInformationRender,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,active:this.state.variableEditorActive}),this.state.headerEditorEnabled&&_.createElement(gm,{ref:function(E){t.headerEditorComponent=E},value:this.state.headers,onEdit:this.handleEditHeaders,onHintInformationRender:this.handleHintInformationRender,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,active:this.state.headerEditorActive}))),_.createElement("div",{className:"resultWrap"},this.state.isWaitingForResponse&&_.createElement("div",{className:"spinner-container"},_.createElement("div",{className:"spinner"})),_.createElement(vm,{registerRef:function(E){t.resultViewerElement=E},ref:function(E){t.resultComponent=E},value:this.state.response,editorTheme:this.props.editorTheme,ResultsTooltip:this.props.ResultsTooltip,ImagePreview:qw}),a))),this.state.docExplorerOpen&&_.createElement("div",{className:u,style:l},_.createElement("div",{className:"docExplorerResizer",onDoubleClick:this.handleDocsResetResize,onMouseDown:this.handleDocsResizeStart}),_.createElement(_re,{ref:function(E){t.docExplorerComponent=E},schemaErrors:this.state.schemaErrors,schema:this.state.schema},_.createElement("button",{className:"docExplorerHide",onClick:this.handleToggleDocs,"aria-label":"Close Documentation Explorer"},"\u2715"))))},n.prototype.getQueryEditor=function(){if(this.queryEditorComponent)return this.queryEditorComponent.getCodeMirror()},n.prototype.getVariableEditor=function(){return this.variableEditorComponent?this.variableEditorComponent.getCodeMirror():null},n.prototype.getHeaderEditor=function(){return this.headerEditorComponent?this.headerEditorComponent.getCodeMirror():null},n.prototype.refresh=function(){this.queryEditorComponent&&this.queryEditorComponent.getCodeMirror().refresh(),this.variableEditorComponent&&this.variableEditorComponent.getCodeMirror().refresh(),this.headerEditorComponent&&this.headerEditorComponent.getCodeMirror().refresh(),this.resultComponent&&this.resultComponent.getCodeMirror().refresh()},n.prototype.autoCompleteLeafs=function(){var t=Are(this.state.schema,this.state.query,this.props.getDefaultFieldNames),r=t.insertions,i=t.result;if(r&&r.length>0){var o=this.getQueryEditor();o&&o.operation(function(){var s=o.getCursor(),a=o.indexFromPos(s);o.setValue(i||"");var c=0,l=r.map(function(f){var p=f.index,h=f.string;return o.markText(o.posFromIndex(p+c),o.posFromIndex(p+(c+=h.length)),{className:"autoInsertedLeaf",clearOnEnter:!0,title:"Automatically added leaf fields"})});setTimeout(function(){return l.forEach(function(f){return f.clear()})},7e3);var u=a;r.forEach(function(f){var p=f.index,h=f.string;p<a&&(u+=h.length)}),o.setCursor(o.posFromIndex(u))})}return i},n.prototype.fetchSchema=function(){var t=this,r=this.props.fetcher,i={shouldPersistHeaders:Boolean(this.props.shouldPersistHeaders),documentAST:this.state.documentAST};try{this.state.headers&&this.state.headers.trim().length>2?i.headers=JSON.parse(this.state.headers):this.props.headers&&(i.headers=JSON.parse(this.props.headers))}catch{this.setState({response:"Introspection failed as headers are invalid."});return}var o=Om(r({query:this._introspectionQuery,operationName:this._introspectionQueryName},i));if(!Am(o)){this.setState({response:"Fetcher did not return a Promise for introspection."});return}o.then(function(s){if(typeof s!="string"&&"data"in s)return s;var a=Om(r({query:t._introspectionQuerySansSubscriptions,operationName:t._introspectionQueryName},i));if(!Am(o))throw new Error("Fetcher did not return a Promise for introspection.");return a}).then(function(s){var a,c;if(t.state.schema===void 0)if(s&&s.data&&"__schema"in(s==null?void 0:s.data)){var l=nw(s.data);if(!t.props.dangerouslyAssumeSchemaIsValid){var u=Ps(l);u&&u.length>0&&(l=void 0,t.handleSchemaErrors(u))}if(l){var f=Ms(l,t.state.query);t.safeSetState(Z(Z({schema:l},f),{schemaErrors:void 0})),(c=(a=t.props).onSchemaChange)===null||c===void 0||c.call(a,l)}}else{var p=typeof s=="string"?s:n.formatResult(s);t.handleSchemaErrors([p])}}).catch(function(s){t.handleSchemaErrors([s])})},n.prototype.handleSchemaErrors=function(t){this.safeSetState({response:t?n.formatError(t):void 0,schema:void 0,schemaErrors:t})},n.prototype._fetchQuery=function(t,r,i,o,s,a){return nc(this,void 0,void 0,function(){var c,l,u,f,p,h,d=this;return tc(this,function(E){c=this.props.fetcher,l=null,u=null;try{l=r&&r.trim()!==""?JSON.parse(r):null}catch(w){throw new Error("Variables are invalid JSON: "+w.message+".")}if(typeof l!="object")throw new Error("Variables are not a JSON object.");try{u=i&&i.trim()!==""?JSON.parse(i):null}catch(w){throw new Error("Headers are invalid JSON: "+w.message+".")}if(typeof u!="object")throw new Error("Headers are not a JSON object.");return this.props.externalFragments&&(f=new Map,Array.isArray(this.props.externalFragments)?this.props.externalFragments.forEach(function(w){f.set(w.name.value,w)}):Mn(at(this.props.externalFragments,{}),{FragmentDefinition:function(w){f.set(w.name.value,w)}}),p=Vy(this.state.documentAST,f),p.length>0&&(t+=`
`+p.map(function(w){return we(w)}).join(`
`))),h=c({query:t,variables:l,operationName:o},{headers:u,shouldPersistHeaders:s,documentAST:this.state.documentAST}),[2,Promise.resolve(h).then(function(w){if(g0(w)){var g=w.subscribe({next:a,error:function(m){d.safeSetState({isWaitingForResponse:!1,response:m?n.formatError(m):void 0,subscription:null})},complete:function(){d.safeSetState({isWaitingForResponse:!1,subscription:null})}});return g}else return v0(w)?(function(){return nc(d,void 0,void 0,function(){var m,v,S,N,k,A,M;return tc(this,function(b){switch(b.label){case 0:b.trys.push([0,13,,14]),b.label=1;case 1:b.trys.push([1,6,7,12]),m=aie(w),b.label=2;case 2:return[4,m.next()];case 3:if(v=b.sent(),!!v.done)return[3,5];S=v.value,a(S),b.label=4;case 4:return[3,2];case 5:return[3,12];case 6:return N=b.sent(),A={error:N},[3,12];case 7:return b.trys.push([7,,10,11]),v&&!v.done&&(M=m.return)?[4,M.call(m)]:[3,9];case 8:b.sent(),b.label=9;case 9:return[3,11];case 10:if(A)throw A.error;return[7];case 11:return[7];case 12:return this.safeSetState({isWaitingForResponse:!1,subscription:null}),[3,14];case 13:return k=b.sent(),this.safeSetState({isWaitingForResponse:!1,response:k?n.formatError(k):void 0,subscription:null}),[3,14];case 14:return[2]}})})}(),{unsubscribe:function(){var m,v;return(v=(m=w[Symbol.asyncIterator]()).return)===null||v===void 0?void 0:v.call(m)}}):(a(w),null)}).catch(function(w){return d.safeSetState({isWaitingForResponse:!1,response:w?n.formatError(w):void 0}),null})]})})},n.prototype._runQueryAtCursor=function(){if(this.state.subscription){this.handleStopQuery();return}var t,r=this.state.operations;if(r){var i=this.getQueryEditor();if(i&&i.hasFocus())for(var o=i.getCursor(),s=i.indexFromPos(o),a=0;a<r.length;a++){var c=r[a];if(c.loc&&c.loc.start<=s&&c.loc.end>=s){t=c.name&&c.name.value;break}}}this.handleRunQuery(t)},n.prototype._didClickDragBar=function(t){if(t.button!==0||t.ctrlKey)return!1;var r=t.target;if(r.className.indexOf("CodeMirror-gutter")!==0)return!1;for(var i=this.resultViewerElement;r;){if(r===i)return!0;r=r.parentNode}return!1},n.formatError=function(t){return Array.isArray(t)?Im({errors:t.map(function(r){return Dm(r)})}):Im({errors:Dm(t)})},n.Logo=p0,n.Toolbar=h0,n.Footer=m0,n.QueryEditor=hm,n.VariableEditor=mm,n.HeaderEditor=gm,n.ResultViewer=vm,n.Button=Fr,n.ToolbarButton=Fr,n.Group=jw,n.Menu=Uw,n.MenuItem=zw,n}(_.Component);function p0(e){return _.createElement("div",{className:"title"},e.children||_.createElement("span",null,"Graph",_.createElement("em",null,"i"),"QL"))}p0.displayName="GraphiQLLogo";function h0(e){return _.createElement("div",{className:"toolbar",role:"toolbar","aria-label":"Editor Commands"},e.children)}h0.displayName="GraphiQLToolbar";function m0(e){return _.createElement("div",{className:"footer"},e.children)}m0.displayName="GraphiQLFooter";var die=`# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#     Merge Query:  Shift-Ctrl-M (or press the merge button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#

`;function Am(e){return typeof e=="object"&&typeof e.then=="function"}function pie(e){return new Promise(function(n,t){var r=e.subscribe({next:function(i){n(i),r.unsubscribe()},error:t,complete:function(){t(new Error("no value resolved"))}})})}function g0(e){return typeof e=="object"&&"subscribe"in e&&typeof e.subscribe=="function"}function v0(e){return typeof e=="object"&&e!==null&&(e[Symbol.toStringTag]==="AsyncGenerator"||Symbol.asyncIterator in e)}function hie(e){return new Promise(function(n,t){var r,i=(r=("return"in e?e:e[Symbol.asyncIterator]()).return)===null||r===void 0?void 0:r.bind(e),o=("next"in e?e:e[Symbol.asyncIterator]()).next.bind(e);o().then(function(s){n(s.value),i==null||i()}).catch(function(s){t(s)})})}function Om(e){return Promise.resolve(e).then(function(n){return v0(n)?hie(n):g0(n)?pie(n):n})}function rc(e,n){var t;return((t=e==null?void 0:e.type)===null||t===void 0?void 0:t.displayName)&&e.type.displayName===n.displayName?!0:e.type===n}function mie(e,n){return Z(Z({},n),{tabs:n.tabs.map(function(t,r){return r!==n.activeTabIndex?t:Z(Z({},t),{headers:e,hash:Nr({query:t.query,headers:e,variables:t.variables})})})})}function gie(e,n){return Z(Z({},n),{tabs:n.tabs.map(function(t,r){return r!==n.activeTabIndex?t:Z(Z({},t),{variables:e,hash:Nr({query:t.query,headers:t.headers,variables:e})})})})}function vie(e,n,t){return Z(Z({},n),{tabs:n.tabs.map(function(r,i){return i!==n.activeTabIndex?r:Z(Z({},r),{title:t!=null?t:iie(e),query:e,hash:Nr({query:e,headers:r.headers,variables:r.variables})})})})}function yie(e,n){var t=n.tabs.activeTabIndex,r=n.tabs.tabs.map(function(o,s){return s!==t?o:Z(Z({},o),{query:n.query,variables:n.variables,operationName:n.operationName,headers:n.headers,response:n.response,hash:Nr({query:n.query,variables:n.variables,headers:n.headers})})}),i=n.tabs.tabs[e];return Z(Z({},n),{query:i.query,variables:i.variables,operationName:i.operationName,headers:i.headers,response:i.response,tabs:Z(Z({},n.tabs),{tabs:r,activeTabIndex:e})})}function _ie(e,n){var t=n.tabs.activeTabIndex>0?n.tabs.activeTabIndex-1:0,r=Z(Z({},n.tabs),{activeTabIndex:t,tabs:n.tabs.tabs.filter(function(o,s){return e!==s})}),i=r.tabs[t];return Z(Z({},n),{query:i.query,variables:i.variables,operationName:i.operationName,headers:i.headers,response:i.response,tabs:r})}function Eie(e){var n=e.tabs.activeTabIndex,t={id:bu(),title:"<untitled>",headers:"",variables:"",query:"",operationName:"",response:"",hash:Nr({query:"",variables:"",headers:""})},r=e.tabs.tabs.map(function(i,o){return o!==n?i:Z(Z({},i),{headers:e.headers,variables:e.variables,query:e.query,operationName:e.operationName,response:e.response})});return Z(Z({},e),{headers:t.headers,variables:t.variables,query:t.query,operationName:t.operationName,response:t.response,tabs:Z(Z({},e.tabs),{activeTabIndex:e.tabs.tabs.length,tabs:d0(r,[t])})})}var Sie=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Tu=globalThis&&globalThis.__assign||function(){return Tu=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Tu.apply(this,arguments)};function wie(e){return!(!e||typeof e!="object"||!("props"in e))}(function(e){Sie(n,e);function n(t){var r=e.call(this,t)||this;return r._node=null,r._listener=null,r.handleOpen=function(i){qs(i),r.setState({visible:!0}),r._subscribe()},r.state={visible:!1},r}return n.prototype.componentWillUnmount=function(){this._release()},n.prototype.render=function(){var t=this,r,i=this.state.visible,o=_.Children.map(this.props.children,function(s,a){if(!wie(s))return null;(!r||s.props.selected)&&(r=s);var c=s.props.onSelect||t.props.onSelect&&t.props.onSelect.bind(null,s.props.value,a);return _.createElement(kie,Tu({},s.props,{onSelect:c}))});return _.createElement("a",{className:"toolbar-select toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:qs,ref:function(s){t._node=s},title:this.props.title},r==null?void 0:r.props.label,_.createElement("svg",{width:"13",height:"10"},_.createElement("path",{fill:"#666",d:"M 5 5 L 13 5 L 9 1 z"}),_.createElement("path",{fill:"#666",d:"M 5 6 L 13 6 L 9 10 z"})),_.createElement("ul",{className:"toolbar-select-options"+(i?" open":"")},o))},n.prototype._subscribe=function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))},n.prototype._release=function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)},n.prototype.handleClick=function(t){this._node!==t.target&&(qs(t),this.setState({visible:!1}),this._release())},n})(_.Component);function kie(e){var n=e.onSelect,t=e.label,r=e.selected;return _.createElement("li",{onMouseOver:function(i){i.currentTarget.className="hover"},onMouseOut:function(i){i.currentTarget.className=""},onMouseDown:qs,onMouseUp:n},t,r&&_.createElement("svg",{width:"13",height:"13"},_.createElement("polygon",{points:`4.851,10.462 0,5.611 2.314,3.297 4.851,5.835
    10.686,0 13,2.314 4.851,10.462`})))}function qs(e){e.preventDefault()}var y0={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&r.push(a)}}else if(s==="object")if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&r.push(c);else r.push(o.toString())}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(y0);var Cr=y0.exports;const _0=En.exports.createContext({});function bie(){return En.exports.useContext(_0)}function Tie(e){const n=e.getQueryType(),t=e.getMutationType();return{queryType:n,mutationType:t}}function xu(e){return Ae(e)||ie(e)?xu(e.ofType):me(e)?e:null}function xie(e){try{return e.trim()?at(e,{noLocation:!0}):null}catch(n){return n}}function E0(e,n){switch(n.type){case"addField":{const t=n.payloads,r=xu(t.type),i=(()=>{if(!r)return;const o=r.getFields(),s=o.id?"id":Object.keys(o)[0];return{kind:y.SELECTION_SET,selections:[{kind:y.FIELD,name:{kind:y.NAME,value:s}}]}})();return[...e,{kind:y.FIELD,name:{kind:y.NAME,value:n.payloads.name},arguments:Cie(n.payloads),selectionSet:i}]}case"removeField":return e.filter(t=>t.name.value!==n.payloads.name);case"updateField":return e.map(t=>t.name.value===n.payloads.name.value?n.payloads:t);default:return[...e]}}function Nie(e){return e.args.map(n=>({kind:y.VARIABLE_DEFINITION,variable:{kind:y.VARIABLE,name:{kind:y.NAME,value:n.name}},type:{kind:y.NAMED_TYPE,name:{kind:y.NAME,value:n.type.toString()}}}))}function Cie(e){return e.args.map(n=>({kind:y.ARGUMENT,name:{kind:y.NAME,value:n.name},value:{kind:y.VARIABLE,name:{kind:y.NAME,value:n.name}}}))}const Iie="_container_6qvll_1",Die="_uncheck_6qvll_9";var Lm={container:Iie,uncheck:Die},od={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aie=En.exports,Oie=Symbol.for("react.element"),Lie=Symbol.for("react.fragment"),Fie=Object.prototype.hasOwnProperty,Rie=Aie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pie={key:!0,ref:!0,__self:!0,__source:!0};function S0(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Fie.call(n,r)&&!Pie.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Oie,type:e,key:o,ref:s,props:i,_owner:Rie.current}}fl.Fragment=Lie;fl.jsx=S0;fl.jsxs=S0;od.exports=fl;const te=od.exports.jsx,Gn=od.exports.jsxs,Mie=({className:e,checked:n,onClick:t})=>{return te("div",{className:Cr(Lm.container,e),onClick:t,children:n?r():i()});function r(){return Gn("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[te("circle",{cx:"7.49951",cy:"7.5",r:"7.5",fill:"#6E6ACF"}),te("path",{d:"M4.64593 7.00106L6.87961 9.23256L10.5012 5.61325",stroke:"white",strokeWidth:"1.5"})]})}function i(){return te("div",{className:Lm.uncheck})}},qie="_container_18xi6_1",$ie="_icon_18xi6_10",jie="_folded_18xi6_19";var ic={container:qie,icon:$ie,folded:jie};const w0=({className:e,isFolded:n})=>te("div",{className:Cr(ic.container,e),children:te("svg",{className:Cr(ic.icon,{[ic.folded]:n}),xmlns:"http://www.w3.org/2000/svg",children:te("path",{d:"M0.853553 7.14645L3.64645 4.35355C3.84171 4.15829 3.84171 3.84171 3.64645 3.64645L0.853554 0.853553C0.538571 0.538571 2.05126e-07 0.761654 1.85654e-07 1.20711L-5.85082e-08 6.79289C-7.79796e-08 7.23835 0.53857 7.46143 0.853553 7.14645Z"})})}),Vie="_container_1vktp_1";var Uie={container:Vie};const zie=({className:e})=>te("svg",{className:Cr(Uie.container,e),width:"33",height:"18",viewBox:"0 0 33 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Gn("g",{opacity:"0.4",children:[te("mask",{id:"path-1-inside-1_1522_7813",fill:"white",children:te("path",{d:"M19.09 10.4244C18.3033 9.63774 18.3033 8.36226 19.09 7.57556L24.0756 2.59002C24.8623 1.80333 26.1377 1.80333 26.9244 2.59002L31.91 7.57556C32.6967 8.36226 32.6967 9.63774 31.91 10.4244L26.9244 15.41C26.1377 16.1967 24.8623 16.1967 24.0756 15.41L19.09 10.4244Z"})}),te("path",{d:"M24.0756 15.41L24.7827 14.7029L24.0756 15.41ZM31.91 7.57556L31.2029 8.28267L31.91 7.57556ZM26.9244 2.59002L27.6315 1.88292V1.88292L26.9244 2.59002ZM19.09 10.4244L18.3829 11.1315H18.3829L19.09 10.4244ZM19.7971 8.28267L24.7827 3.29713L23.3685 1.88292L18.3829 6.86845L19.7971 8.28267ZM26.2173 3.29713L31.2029 8.28267L32.6171 6.86845L27.6315 1.88292L26.2173 3.29713ZM31.2029 9.71733L26.2173 14.7029L27.6315 16.1171L32.6171 11.1315L31.2029 9.71733ZM24.7827 14.7029L19.7971 9.71733L18.3829 11.1315L23.3685 16.1171L24.7827 14.7029ZM26.2173 14.7029C25.8212 15.099 25.1788 15.099 24.7827 14.7029L23.3685 16.1171C24.5457 17.2943 26.4543 17.2943 27.6315 16.1171L26.2173 14.7029ZM31.2029 8.28267C31.599 8.67884 31.599 9.32116 31.2029 9.71733L32.6171 11.1315C33.7943 9.95433 33.7943 8.04567 32.6171 6.86845L31.2029 8.28267ZM24.7827 3.29713C25.1788 2.90096 25.8212 2.90096 26.2173 3.29713L27.6315 1.88292C26.4543 0.705695 24.5457 0.705695 23.3685 1.88292L24.7827 3.29713ZM18.3829 6.86845C17.2057 8.04567 17.2057 9.95433 18.3829 11.1315L19.7971 9.71733C19.401 9.32116 19.401 8.67884 19.7971 8.28267L18.3829 6.86845Z",fill:"#3B4C6A",mask:"url(#path-1-inside-1_1522_7813)"}),te("path",{d:"M10.3829 6.86845C9.20569 8.04567 9.20569 9.95433 10.3829 11.1315L15.3685 16.1171C16.5457 17.2943 18.4543 17.2943 19.6315 16.1171L24.6171 11.1315C25.7943 9.95433 25.7943 8.04567 24.6171 6.86845L19.6315 1.88292C18.4543 0.705695 16.5457 0.705695 15.3685 1.88292L10.3829 6.86845Z",fill:"#F8FAFC",stroke:"#F8FAFC",strokeWidth:"2"}),te("mask",{id:"path-4-inside-2_1522_7813",fill:"white",children:te("path",{d:"M11.09 10.4244C10.3033 9.63774 10.3033 8.36226 11.09 7.57556L16.0756 2.59002C16.8623 1.80333 18.1377 1.80333 18.9244 2.59002L23.91 7.57556C24.6967 8.36226 24.6967 9.63774 23.91 10.4244L18.9244 15.41C18.1377 16.1967 16.8623 16.1967 16.0756 15.41L11.09 10.4244Z"})}),te("path",{d:"M16.0756 15.41L16.7827 14.7029L16.0756 15.41ZM23.91 7.57556L23.2029 8.28267L23.91 7.57556ZM18.9244 2.59002L19.6315 1.88292V1.88292L18.9244 2.59002ZM11.09 10.4244L10.3829 11.1315H10.3829L11.09 10.4244ZM11.7971 8.28267L16.7827 3.29713L15.3685 1.88292L10.3829 6.86845L11.7971 8.28267ZM18.2173 3.29713L23.2029 8.28267L24.6171 6.86845L19.6315 1.88292L18.2173 3.29713ZM23.2029 9.71733L18.2173 14.7029L19.6315 16.1171L24.6171 11.1315L23.2029 9.71733ZM16.7827 14.7029L11.7971 9.71733L10.3829 11.1315L15.3685 16.1171L16.7827 14.7029ZM18.2173 14.7029C17.8212 15.099 17.1788 15.099 16.7827 14.7029L15.3685 16.1171C16.5457 17.2943 18.4543 17.2943 19.6315 16.1171L18.2173 14.7029ZM23.2029 8.28267C23.599 8.67884 23.599 9.32116 23.2029 9.71733L24.6171 11.1315C25.7943 9.95433 25.7943 8.04567 24.6171 6.86845L23.2029 8.28267ZM16.7827 3.29713C17.1788 2.90096 17.8212 2.90096 18.2173 3.29713L19.6315 1.88292C18.4543 0.705695 16.5457 0.705695 15.3685 1.88292L16.7827 3.29713ZM10.3829 6.86845C9.20569 8.04567 9.20569 9.95433 10.3829 11.1315L11.7971 9.71733C11.401 9.32116 11.401 8.67884 11.7971 8.28267L10.3829 6.86845Z",fill:"#3B4C6A",mask:"url(#path-4-inside-2_1522_7813)"}),te("path",{d:"M2.38292 6.86845C1.20569 8.04567 1.20569 9.95433 2.38292 11.1315L7.36845 16.1171C8.54567 17.2943 10.4543 17.2943 11.6315 16.1171L16.6171 11.1315C17.7943 9.95433 17.7943 8.04567 16.6171 6.86845L11.6315 1.88292C10.4543 0.705695 8.54567 0.705695 7.36845 1.88292L2.38292 6.86845Z",fill:"#F8FAFC",stroke:"#F8FAFC",strokeWidth:"2"}),te("mask",{id:"path-7-inside-3_1522_7813",fill:"white",children:te("path",{d:"M3.09002 10.4244C2.30333 9.63774 2.30333 8.36226 3.09002 7.57556L8.07556 2.59002C8.86226 1.80333 10.1377 1.80333 10.9244 2.59002L15.91 7.57556C16.6967 8.36226 16.6967 9.63774 15.91 10.4244L10.9244 15.41C10.1377 16.1967 8.86226 16.1967 8.07556 15.41L3.09002 10.4244Z"})}),te("path",{d:"M8.07556 15.41L8.78267 14.7029L8.07556 15.41ZM15.91 7.57556L15.2029 8.28267L15.91 7.57556ZM10.9244 2.59002L11.6315 1.88292V1.88292L10.9244 2.59002ZM3.09002 10.4244L2.38292 11.1315H2.38292L3.09002 10.4244ZM3.79713 8.28267L8.78267 3.29713L7.36845 1.88292L2.38292 6.86845L3.79713 8.28267ZM10.2173 3.29713L15.2029 8.28267L16.6171 6.86845L11.6315 1.88292L10.2173 3.29713ZM15.2029 9.71733L10.2173 14.7029L11.6315 16.1171L16.6171 11.1315L15.2029 9.71733ZM8.78267 14.7029L3.79713 9.71733L2.38292 11.1315L7.36845 16.1171L8.78267 14.7029ZM10.2173 14.7029C9.82116 15.099 9.17884 15.099 8.78267 14.7029L7.36845 16.1171C8.54567 17.2943 10.4543 17.2943 11.6315 16.1171L10.2173 14.7029ZM15.2029 8.28267C15.599 8.67884 15.599 9.32116 15.2029 9.71733L16.6171 11.1315C17.7943 9.95433 17.7943 8.04567 16.6171 6.86845L15.2029 8.28267ZM8.78267 3.29713C9.17884 2.90096 9.82116 2.90096 10.2173 3.29713L11.6315 1.88292C10.4543 0.705695 8.54567 0.705695 7.36845 1.88292L8.78267 3.29713ZM2.38292 6.86845C1.20569 8.04567 1.20569 9.95433 2.38292 11.1315L3.79713 9.71733C3.40096 9.32116 3.40096 8.67884 3.79713 8.28267L2.38292 6.86845Z",fill:"#3B4C6A",mask:"url(#path-7-inside-3_1522_7813)"})]})}),Bie="_checkbox_1c0zt_1",Qie="_fieldTitle_1c0zt_5",Hie="_foldIcon_1c0zt_17",Gie="_showArgument_1c0zt_22",Wie="_name_1c0zt_34",Yie="_typeName_1c0zt_42",Jie="_description_1c0zt_48",Zie="_fields_1c0zt_66";var mt={checkbox:Bie,fieldTitle:Qie,foldIcon:Hie,showArgument:Gie,name:Wie,typeName:Yie,description:Jie,fields:Zie};const k0=({className:e,field:n,schema:t,selectionSet:r,onEdit:i})=>{var p;const o=n.args,s=Nu(n.type),a=Cu(n.type),[c,l]=En.exports.useState(!0),u=(p=r==null?void 0:r.selections)==null?void 0:p.find(h=>h.name.value===n.name),f=h=>{if(!u)return null;const d=(()=>{const E=u.selectionSet?u.selectionSet:{kind:y.SELECTION_SET,selections:[]};return E.selections=E0(E.selections,h),E})();i({type:"updateField",payloads:Pe(ue({},u),{selectionSet:d})})};return Gn("div",{className:Cr(mt.container,e),children:[Gn("div",{className:mt.fieldTitle,onClick:()=>{const h=!u;h&&l(!1),i(h?{type:"addField",payloads:n}:{type:"removeField",payloads:{name:n.name}})},children:[te(Mie,{className:mt.checkbox,checked:!!u}),te("div",{className:mt.foldIcon,onClick:h=>{h.stopPropagation(),l(!c)},children:s?te(w0,{isFolded:c}):null}),te("span",{className:mt.name,children:n.name}),te("span",{className:mt.typeName,children:n.type.toString()}),n.description?te("span",{className:mt.description,title:n.description,children:n.description}):null]}),c||!a?null:Gn("div",{className:mt.fields,children:[o.length>0?Gn("div",{className:mt.showArgument,children:[te(zie,{}),te("span",{children:"Show Arguments"})]}):null,Object.keys(a).map(h=>te(k0,{field:a[h],schema:t,selectionSet:u==null?void 0:u.selectionSet,onEdit:f},h))]})]})};function Nu(e){return me(e)?!0:Ae(e)||ie(e)?Nu(e.ofType):!1}function Cu(e){return me(e)?e.getFields():Ae(e)||ie(e)?Cu(e.ofType):null}const Xie="_typeTitle_rkpyq_1",Kie="_name_rkpyq_8",eoe="_fields_rkpyq_16";var Ss={typeTitle:Xie,name:Kie,fields:eoe};const Fm=({className:e,type:n,schema:t,operation:r})=>{const{onEditDefinition:i}=bie(),o=n.getFields(),[s,a]=En.exports.useState(!1),c=l=>{const u=(()=>{if(l.type==="addField")return Nie(l.payloads)})(),f=E0((r==null?void 0:r.selectionSet.selections)||[],l);f.length?i(Pe(ue({},r||{kind:y.OPERATION_DEFINITION,operation:n.name==="Mutation"?"mutation":"query",name:{kind:y.NAME,value:"ExampleQuery"}}),{variableDefinitions:u!=null?u:r==null?void 0:r.variableDefinitions,selectionSet:{kind:y.SELECTION_SET,selections:f}}),l):i(null,l)};return Gn("div",{className:Cr(Ss.container,e),children:[Gn("div",{className:Ss.typeTitle,onClick:()=>{a(!s)},children:[te(w0,{isFolded:s}),te("span",{className:Ss.name,children:n.name})]}),s?null:te("div",{className:Ss.fields,children:Object.keys(o).sort().map(l=>te(k0,{field:o[l],schema:t,selectionSet:r==null?void 0:r.selectionSet,onEdit:c},l))})]})},noe="_container_taixv_1",toe="_title_taixv_14";var oc={container:noe,title:toe};function roe(e){if(!e.length)return null;const n={};return e.forEach(t=>{n[t.name]=$s(t.type)}),n}function $s(e,n=0){if(n>=3)return null;const t=n+1;if(Ae(e))return[$s(e.ofType,t)];if(ie(e))return $s(e.ofType,t);if(me(e)||je(e)){const r=e.getFields(),i={};return Object.keys(r).forEach(o=>{const s=r[o].type;i[o]=$s(s,t)}),i}if(sn(e))return e.getValues()[0].name||null;if(ut(e))switch(e.name){case"ID":return"id";case"Int":return 1;case"String":return"string";case"Float":return 3.1;case"Boolean":return!0}return"Unknown"}const ioe=({className:e,schema:n,query:t,onEdit:r,onEditVariables:i})=>{const{queryType:o,mutationType:s}=Tie(n),[a,c]=En.exports.useState(null);En.exports.useEffect(()=>{const f=xie(t);f instanceof Error||c(f)},[t]);const l=(()=>{const f=a==null?void 0:a.definitions[0];return f&&Pf(f)?f:null})(),u=(f,p)=>{(p==null?void 0:p.type)==="addField"&&i(JSON.stringify(roe(p.payloads.args),null,2)),f?r(we({kind:y.DOCUMENT,definitions:[f]})):(r(""),i(""))};return te(_0.Provider,{value:{schema:n,onEditDefinition:u},children:Gn("div",{className:Cr(oc.container,e),children:[te("div",{className:oc.title,children:te("h2",{children:"Docs"})}),Gn("div",{className:oc.content,children:[o?te(Fm,{type:o,schema:n,operation:l}):null,s?te(Fm,{type:s,schema:n,operation:l}):null]})]})})};var ooe=`type Query {
  """
  fetch data from the table: "users"
  """
  users(
    """
    distinct select on columns
    """
    distinct_on: [users_select_column!]

    """
    limit the nuber of rows returned
    """
    limit: Int

    """
    skip the first n rows. Use only with order_by
    """
    offset: Int

    """
    sort the rows by one or more columns
    """
    order_by: [users_order_by!]

    """
    filter the rows returned
    """
    where: users_bool_exp
  ): [users!]!

  """
  fetch aggregated fields from the table: "users"
  """
  users_aggregate(
    """
    distinct select on columns
    """
    distinct_on: [users_select_column!]

    """
    limit the nuber of rows returned
    """
    limit: Int

    """
    skip the first n rows. Use only with order_by
    """
    offset: Int

    """
    sort the rows by one or more columns
    """
    order_by: [users_order_by!]

    """
    filter the rows returned
    """
    where: users_bool_exp
  ): users_aggregate!

  """
  fetch data from the table: "users" using primary key columns
  """
  users_by_pk(id: uuid!): users

  """

  """
  capsules(
    find: CapsulesFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Capsule]

  """

  """
  capsulesPast(
    find: CapsulesFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Capsule]

  """

  """
  capsulesUpcoming(
    find: CapsulesFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Capsule]

  """

  """
  capsule(id: ID!): Capsule

  """

  """
  company: Info

  """

  """
  cores(
    find: CoresFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Core]

  """

  """
  coresPast(
    find: CoresFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Core]

  """

  """
  coresUpcoming(
    find: CoresFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Core]

  """

  """
  core(id: ID!): Core

  """

  """
  dragons(limit: Int, offset: Int): [Dragon]

  """

  """
  dragon(id: ID!): Dragon

  """

  """
  histories(
    find: HistoryFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [History]

  """

  """
  historiesResult(
    find: HistoryFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): HistoriesResult

  """

  """
  history(id: ID!): History

  """

  """
  landpads(limit: Int, offset: Int): [Landpad]

  """

  """
  landpad(id: ID!): Landpad

  """

  """
  launches(
    find: LaunchFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Launch]

  """

  """
  launchesPast(
    find: LaunchFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Launch]

  """

  """
  launchesPastResult(
    find: LaunchFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): LaunchesPastResult

  """

  """
  launchesUpcoming(
    find: LaunchFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Launch]

  """

  """
  launch(id: ID!): Launch

  """

  """
  launchLatest(offset: Int): Launch

  """

  """
  launchNext(offset: Int): Launch

  """

  """
  launchpads(limit: Int, offset: Int): [Launchpad]

  """

  """
  launchpad(id: ID!): Launchpad

  """

  """
  missions(find: MissionsFind, limit: Int, offset: Int): [Mission]

  """

  """
  missionsResult(find: MissionsFind, limit: Int, offset: Int): MissionResult

  """

  """
  mission(id: ID!): Mission

  """

  """
  payloads(
    find: PayloadsFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Payload]

  """

  """
  payload(id: ID!): Payload

  """

  """
  roadster: Roadster

  """

  """
  rockets(limit: Int, offset: Int): [Rocket]

  """

  """
  rocketsResult(limit: Int, offset: Int): RocketsResult

  """

  """
  rocket(id: ID!): Rocket

  """

  """
  ships(
    find: ShipsFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): [Ship]

  """

  """
  shipsResult(
    find: ShipsFind
    limit: Int
    offset: Int
    order: String
    sort: String
  ): ShipsResult

  """

  """
  ship(id: ID!): Ship
}

"""
select columns of table "users"
"""
enum users_select_column {
  """
  column name
  """
  id

  """
  column name
  """
  name

  """
  column name
  """
  rocket

  """
  column name
  """
  timestamp

  """
  column name
  """
  twitter
}

"""
ordering options when selecting data from "users"
"""
input users_order_by {
  """

  """
  id: order_by

  """

  """
  name: order_by

  """

  """
  rocket: order_by

  """

  """
  timestamp: order_by

  """

  """
  twitter: order_by
}

"""
column ordering options
"""
enum order_by {
  """
  in the ascending order, nulls last
  """
  asc

  """
  in the ascending order, nulls first
  """
  asc_nulls_first

  """
  in the ascending order, nulls last
  """
  asc_nulls_last

  """
  in the descending order, nulls first
  """
  desc

  """
  in the descending order, nulls first
  """
  desc_nulls_first

  """
  in the descending order, nulls last
  """
  desc_nulls_last
}

"""
Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'.
"""
input users_bool_exp {
  """

  """
  _and: [users_bool_exp]

  """

  """
  _not: users_bool_exp

  """

  """
  _or: [users_bool_exp]

  """

  """
  id: uuid_comparison_exp

  """

  """
  name: String_comparison_exp

  """

  """
  rocket: String_comparison_exp

  """

  """
  timestamp: timestamptz_comparison_exp

  """

  """
  twitter: String_comparison_exp
}

"""
expression to compare columns of type uuid. All fields are combined with logical 'AND'.
"""
input uuid_comparison_exp {
  """

  """
  _eq: uuid

  """

  """
  _gt: uuid

  """

  """
  _gte: uuid

  """

  """
  _in: [uuid!]

  """

  """
  _is_null: Boolean

  """

  """
  _lt: uuid

  """

  """
  _lte: uuid

  """

  """
  _neq: uuid

  """

  """
  _nin: [uuid!]
}

scalar uuid

"""
expression to compare columns of type String. All fields are combined with logical 'AND'.
"""
input String_comparison_exp {
  """

  """
  _eq: String

  """

  """
  _gt: String

  """

  """
  _gte: String

  """

  """
  _ilike: String

  """

  """
  _in: [String!]

  """

  """
  _is_null: Boolean

  """

  """
  _like: String

  """

  """
  _lt: String

  """

  """
  _lte: String

  """

  """
  _neq: String

  """

  """
  _nilike: String

  """

  """
  _nin: [String!]

  """

  """
  _nlike: String

  """

  """
  _nsimilar: String

  """

  """
  _similar: String
}

"""
expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
"""
input timestamptz_comparison_exp {
  """

  """
  _eq: timestamptz

  """

  """
  _gt: timestamptz

  """

  """
  _gte: timestamptz

  """

  """
  _in: [timestamptz!]

  """

  """
  _is_null: Boolean

  """

  """
  _lt: timestamptz

  """

  """
  _lte: timestamptz

  """

  """
  _neq: timestamptz

  """

  """
  _nin: [timestamptz!]
}

scalar timestamptz

"""
columns and relationships of "users"
"""
type users {
  """

  """
  id: uuid!

  """

  """
  name: String

  """

  """
  rocket: String

  """

  """
  timestamp: timestamptz!

  """

  """
  twitter: String
}

"""
aggregated selection of "users"
"""
type users_aggregate {
  """

  """
  aggregate: users_aggregate_fields

  """

  """
  nodes: [users!]!
}

"""
aggregate fields of "users"
"""
type users_aggregate_fields {
  """

  """
  count(columns: [users_select_column!], distinct: Boolean): Int

  """

  """
  max: users_max_fields

  """

  """
  min: users_min_fields
}

"""
aggregate max on columns
"""
type users_max_fields {
  """

  """
  name: String

  """

  """
  rocket: String

  """

  """
  timestamp: timestamptz

  """

  """
  twitter: String
}

"""
aggregate min on columns
"""
type users_min_fields {
  """

  """
  name: String

  """

  """
  rocket: String

  """

  """
  timestamp: timestamptz

  """

  """
  twitter: String
}

"""

"""
input CapsulesFind {
  """

  """
  id: ID

  """

  """
  landings: Int

  """

  """
  mission: String

  """

  """
  original_launch: Date

  """

  """
  reuse_count: Int

  """

  """
  status: String

  """

  """
  type: String
}

"""

"""
scalar Date

"""

"""
type Capsule {
  """

  """
  id: ID

  """

  """
  landings: Int

  """

  """
  missions: [CapsuleMission]

  """

  """
  original_launch: Date

  """

  """
  reuse_count: Int

  """

  """
  status: String

  """

  """
  type: String

  """

  """
  dragon: Dragon
}

"""

"""
type CapsuleMission {
  """

  """
  flight: Int

  """

  """
  name: String
}

"""

"""
type Dragon {
  """

  """
  active: Boolean

  """

  """
  crew_capacity: Int

  """

  """
  description: String

  """

  """
  diameter: Distance

  """

  """
  dry_mass_kg: Int

  """

  """
  dry_mass_lb: Int

  """

  """
  first_flight: String

  """

  """
  heat_shield: DragonHeatShield

  """

  """
  height_w_trunk: Distance

  """

  """
  id: ID

  """

  """
  launch_payload_mass: Mass

  """

  """
  launch_payload_vol: Volume

  """

  """
  name: String

  """

  """
  orbit_duration_yr: Int

  """

  """
  pressurized_capsule: DragonPressurizedCapsule

  """

  """
  return_payload_mass: Mass

  """

  """
  return_payload_vol: Volume

  """

  """
  sidewall_angle_deg: Float

  """

  """
  thrusters: [DragonThrust]

  """

  """
  trunk: DragonTrunk

  """

  """
  type: String

  """

  """
  wikipedia: String
}

"""

"""
type Distance {
  """

  """
  feet: Float

  """

  """
  meters: Float
}

"""

"""
type DragonHeatShield {
  """

  """
  dev_partner: String

  """

  """
  material: String

  """

  """
  size_meters: Float

  """

  """
  temp_degrees: Int
}

"""

"""
type Mass {
  """

  """
  kg: Int

  """

  """
  lb: Int
}

"""

"""
type Volume {
  """

  """
  cubic_feet: Int

  """

  """
  cubic_meters: Int
}

"""

"""
type DragonPressurizedCapsule {
  """

  """
  payload_volume: Volume
}

"""

"""
type DragonThrust {
  """

  """
  amount: Int

  """

  """
  fuel_1: String

  """

  """
  fuel_2: String

  """

  """
  pods: Int

  """

  """
  thrust: Force

  """

  """
  type: String
}

"""

"""
type Force {
  """

  """
  kN: Float

  """

  """
  lbf: Float
}

"""

"""
type DragonTrunk {
  """

  """
  cargo: DragonTrunkCargo

  """

  """
  trunk_volume: Volume
}

"""

"""
type DragonTrunkCargo {
  """

  """
  solar_array: Int

  """

  """
  unpressurized_cargo: Boolean
}

"""

"""
type Info {
  """

  """
  ceo: String

  """

  """
  coo: String

  """

  """
  cto_propulsion: String

  """

  """
  cto: String

  """

  """
  employees: Int

  """

  """
  founded: Int

  """

  """
  founder: String

  """

  """
  headquarters: Address

  """

  """
  launch_sites: Int

  """

  """
  links: InfoLinks

  """

  """
  name: String

  """

  """
  summary: String

  """

  """
  test_sites: Int

  """

  """
  valuation: Float

  """

  """
  vehicles: Int
}

"""

"""
type Address {
  """

  """
  address: String

  """

  """
  city: String

  """

  """
  state: String
}

"""

"""
type InfoLinks {
  """

  """
  elon_twitter: String

  """

  """
  flickr: String

  """

  """
  twitter: String

  """

  """
  website: String
}

"""

"""
input CoresFind {
  """

  """
  asds_attempts: Int

  """

  """
  asds_landings: Int

  """

  """
  block: Int

  """

  """
  id: String

  """

  """
  missions: String

  """

  """
  original_launch: Date

  """

  """
  reuse_count: Int

  """

  """
  rtls_attempts: Int

  """

  """
  rtls_landings: Int

  """

  """
  status: String

  """

  """
  water_landing: Boolean
}

"""

"""
type Core {
  """

  """
  asds_attempts: Int

  """

  """
  asds_landings: Int

  """

  """
  block: Int

  """

  """
  id: ID

  """

  """
  missions: [CapsuleMission]

  """

  """
  original_launch: Date

  """

  """
  reuse_count: Int

  """

  """
  rtls_attempts: Int

  """

  """
  rtls_landings: Int

  """

  """
  status: String

  """

  """
  water_landing: Boolean
}

"""

"""
input HistoryFind {
  """

  """
  end: Date

  """

  """
  flight_number: Int

  """

  """
  id: ID

  """

  """
  start: Date
}

"""

"""
type History {
  """

  """
  details: String

  """

  """
  event_date_unix: Date

  """

  """
  event_date_utc: Date

  """

  """
  id: ID

  """

  """
  links: Link

  """

  """
  title: String

  """

  """
  flight: Launch
}

"""

"""
type Link {
  """

  """
  article: String

  """

  """
  reddit: String

  """

  """
  wikipedia: String
}

"""

"""
type Launch {
  """

  """
  details: String

  """

  """
  id: ID

  """

  """
  is_tentative: Boolean

  """

  """
  launch_date_local: Date

  """

  """
  launch_date_unix: Date

  """

  """
  launch_date_utc: Date

  """

  """
  launch_site: LaunchSite

  """

  """
  launch_success: Boolean

  """

  """
  launch_year: String

  """

  """
  links: LaunchLinks

  """

  """
  mission_id: [String]

  """

  """
  mission_name: String

  """

  """
  rocket: LaunchRocket

  """

  """
  static_fire_date_unix: Date

  """

  """
  static_fire_date_utc: Date

  """

  """
  telemetry: LaunchTelemetry

  """

  """
  tentative_max_precision: String

  """

  """
  upcoming: Boolean

  """

  """
  ships: [Ship]
}

"""

"""
type LaunchSite {
  """

  """
  site_id: String

  """

  """
  site_name_long: String

  """

  """
  site_name: String
}

"""

"""
type LaunchLinks {
  """

  """
  article_link: String

  """

  """
  flickr_images: [String]

  """

  """
  mission_patch_small: String

  """

  """
  mission_patch: String

  """

  """
  presskit: String

  """

  """
  reddit_campaign: String

  """

  """
  reddit_launch: String

  """

  """
  reddit_media: String

  """

  """
  reddit_recovery: String

  """

  """
  video_link: String

  """

  """
  wikipedia: String
}

"""

"""
type LaunchRocket {
  """

  """
  fairings: LaunchRocketFairings

  """

  """
  first_stage: LaunchRocketFirstStage

  """

  """
  rocket_name: String

  """

  """
  rocket_type: String

  """

  """
  rocket: Rocket

  """

  """
  second_stage: LaunchRocketSecondStage
}

"""

"""
type LaunchRocketFairings {
  """

  """
  recovered: Boolean

  """

  """
  recovery_attempt: Boolean

  """

  """
  reused: Boolean

  """

  """
  ship: String
}

"""

"""
type LaunchRocketFirstStage {
  """

  """
  cores: [LaunchRocketFirstStageCore]
}

"""

"""
type LaunchRocketFirstStageCore {
  """

  """
  block: Int

  """

  """
  core: Core

  """

  """
  flight: Int

  """

  """
  gridfins: Boolean

  """

  """
  land_success: Boolean

  """

  """
  landing_intent: Boolean

  """

  """
  landing_type: String

  """

  """
  landing_vehicle: String

  """

  """
  legs: Boolean

  """

  """
  reused: Boolean
}

"""

"""
type Rocket {
  """

  """
  active: Boolean

  """

  """
  boosters: Int

  """

  """
  company: String

  """

  """
  cost_per_launch: Int

  """

  """
  country: String

  """

  """
  description: String

  """

  """
  diameter: Distance

  """

  """
  engines: RocketEngines

  """

  """
  first_flight: Date

  """

  """
  first_stage: RocketFirstStage

  """

  """
  height: Distance

  """

  """
  id: ID

  """

  """
  landing_legs: RocketLandingLegs

  """

  """
  mass: Mass

  """

  """
  name: String

  """

  """
  payload_weights: [RocketPayloadWeight]

  """

  """
  second_stage: RocketSecondStage

  """

  """
  stages: Int

  """

  """
  success_rate_pct: Int

  """

  """
  type: String

  """

  """
  wikipedia: String
}

"""

"""
type RocketEngines {
  """

  """
  number: Int

  """

  """
  type: String

  """

  """
  version: String

  """

  """
  layout: String

  """

  """
  engine_loss_max: String

  """

  """
  propellant_1: String

  """

  """
  propellant_2: String

  """

  """
  thrust_sea_level: Force

  """

  """
  thrust_vacuum: Force

  """

  """
  thrust_to_weight: Float
}

"""

"""
type RocketFirstStage {
  """

  """
  burn_time_sec: Int

  """

  """
  engines: Int

  """

  """
  fuel_amount_tons: Float

  """

  """
  reusable: Boolean

  """

  """
  thrust_sea_level: Force

  """

  """
  thrust_vacuum: Force
}

"""

"""
type RocketLandingLegs {
  """

  """
  number: Int

  """

  """
  material: String
}

"""

"""
type RocketPayloadWeight {
  """

  """
  id: String

  """

  """
  kg: Int

  """

  """
  lb: Int

  """

  """
  name: String
}

"""

"""
type RocketSecondStage {
  """

  """
  burn_time_sec: Int

  """

  """
  engines: Int

  """

  """
  fuel_amount_tons: Float

  """

  """
  payloads: RocketSecondStagePayloads

  """

  """
  thrust: Force
}

"""

"""
type RocketSecondStagePayloads {
  """

  """
  option_1: String

  """

  """
  composite_fairing: RocketSecondStagePayloadCompositeFairing
}

"""

"""
type RocketSecondStagePayloadCompositeFairing {
  """

  """
  height: Distance

  """

  """
  diameter: Distance
}

"""

"""
type LaunchRocketSecondStage {
  """

  """
  block: Int

  """

  """
  payloads: [Payload]
}

"""

"""
type Payload {
  """

  """
  customers: [String]

  """

  """
  id: ID

  """

  """
  manufacturer: String

  """

  """
  nationality: String

  """

  """
  norad_id: [Int]

  """

  """
  orbit_params: PayloadOrbitParams

  """

  """
  orbit: String

  """

  """
  payload_mass_kg: Float

  """

  """
  payload_mass_lbs: Float

  """

  """
  payload_type: String

  """

  """
  reused: Boolean
}

"""

"""
type PayloadOrbitParams {
  """

  """
  apoapsis_km: Float

  """

  """
  arg_of_pericenter: Float

  """

  """
  eccentricity: Float

  """

  """
  epoch: Date

  """

  """
  inclination_deg: Float

  """

  """
  lifespan_years: Float

  """

  """
  longitude: Float

  """

  """
  mean_anomaly: Float

  """

  """
  mean_motion: Float

  """

  """
  periapsis_km: Float

  """

  """
  period_min: Float

  """

  """
  raan: Float

  """

  """
  reference_system: String

  """

  """
  regime: String

  """

  """
  semi_major_axis_km: Float
}

"""

"""
type LaunchTelemetry {
  """

  """
  flight_club: String
}

"""

"""
type Ship {
  """

  """
  abs: Int

  """

  """
  active: Boolean

  """

  """
  attempted_landings: Int

  """

  """
  class: Int

  """

  """
  course_deg: Int

  """

  """
  home_port: String

  """

  """
  id: ID

  """

  """
  image: String

  """

  """
  imo: Int

  """

  """
  missions: [ShipMission]

  """

  """
  mmsi: Int

  """

  """
  model: String

  """

  """
  name: String

  """

  """
  position: ShipLocation

  """

  """
  roles: [String]

  """

  """
  speed_kn: Float

  """

  """
  status: String

  """

  """
  successful_landings: Int

  """

  """
  type: String

  """

  """
  url: String

  """

  """
  weight_kg: Int

  """

  """
  weight_lbs: Int

  """

  """
  year_built: Int
}

"""

"""
type ShipMission {
  """

  """
  flight: String

  """

  """
  name: String
}

"""

"""
type ShipLocation {
  """

  """
  latitude: Float

  """

  """
  longitude: Float
}

"""

"""
type HistoriesResult {
  """

  """
  result: Result

  """

  """
  data: [History]
}

"""

"""
type Result {
  """

  """
  totalCount: Int
}

"""

"""
type Landpad {
  """

  """
  attempted_landings: String

  """

  """
  details: String

  """

  """
  full_name: String

  """

  """
  id: ID

  """

  """
  landing_type: String

  """

  """
  location: Location

  """

  """
  status: String

  """

  """
  successful_landings: String

  """

  """
  wikipedia: String
}

"""

"""
type Location {
  """

  """
  latitude: Float

  """

  """
  longitude: Float

  """

  """
  name: String

  """

  """
  region: String
}

"""

"""
input LaunchFind {
  """

  """
  apoapsis_km: Float

  """

  """
  block: Int

  """

  """
  cap_serial: String

  """

  """
  capsule_reuse: String

  """

  """
  core_flight: Int

  """

  """
  core_reuse: String

  """

  """
  core_serial: String

  """

  """
  customer: String

  """

  """
  eccentricity: Float

  """

  """
  end: Date

  """

  """
  epoch: Date

  """

  """
  fairings_recovered: String

  """

  """
  fairings_recovery_attempt: String

  """

  """
  fairings_reuse: String

  """

  """
  fairings_reused: String

  """

  """
  fairings_ship: String

  """

  """
  gridfins: String

  """

  """
  id: ID

  """

  """
  inclination_deg: Float

  """

  """
  land_success: String

  """

  """
  landing_intent: String

  """

  """
  landing_type: String

  """

  """
  landing_vehicle: String

  """

  """
  launch_date_local: Date

  """

  """
  launch_date_utc: Date

  """

  """
  launch_success: String

  """

  """
  launch_year: String

  """

  """
  legs: String

  """

  """
  lifespan_years: Float

  """

  """
  longitude: Float

  """

  """
  manufacturer: String

  """

  """
  mean_motion: Float

  """

  """
  mission_id: String

  """

  """
  mission_name: String

  """

  """
  nationality: String

  """

  """
  norad_id: Int

  """

  """
  orbit: String

  """

  """
  payload_id: String

  """

  """
  payload_type: String

  """

  """
  periapsis_km: Float

  """

  """
  period_min: Float

  """

  """
  raan: Float

  """

  """
  reference_system: String

  """

  """
  regime: String

  """

  """
  reused: String

  """

  """
  rocket_id: String

  """

  """
  rocket_name: String

  """

  """
  rocket_type: String

  """

  """
  second_stage_block: String

  """

  """
  semi_major_axis_km: Float

  """

  """
  ship: String

  """

  """
  side_core1_reuse: String

  """

  """
  side_core2_reuse: String

  """

  """
  site_id: String

  """

  """
  site_name_long: String

  """

  """
  site_name: String

  """

  """
  start: Date

  """

  """
  tbd: String

  """

  """
  tentative_max_precision: String

  """

  """
  tentative: String
}

"""

"""
type LaunchesPastResult {
  """

  """
  result: Result

  """

  """
  data: [Launch]
}

"""

"""
type Launchpad {
  """

  """
  attempted_launches: Int

  """

  """
  details: String

  """

  """
  id: ID

  """

  """
  location: Location

  """

  """
  name: String

  """

  """
  status: String

  """

  """
  successful_launches: Int

  """

  """
  vehicles_launched: [Rocket]

  """

  """
  wikipedia: String
}

"""

"""
input MissionsFind {
  """

  """
  id: ID

  """

  """
  manufacturer: String

  """

  """
  name: String

  """

  """
  payload_id: String
}

"""

"""
type Mission {
  """

  """
  description: String

  """

  """
  id: ID

  """

  """
  manufacturers: [String]

  """

  """
  name: String

  """

  """
  twitter: String

  """

  """
  website: String

  """

  """
  wikipedia: String

  """

  """
  payloads: [Payload]
}

"""

"""
type MissionResult {
  """

  """
  result: Result

  """

  """
  data: [Mission]
}

"""

"""
input PayloadsFind {
  """

  """
  apoapsis_km: Float

  """

  """
  customer: String

  """

  """
  eccentricity: Float

  """

  """
  epoch: Date

  """

  """
  inclination_deg: Float

  """

  """
  lifespan_years: Float

  """

  """
  longitude: Float

  """

  """
  manufacturer: String

  """

  """
  mean_motion: Float

  """

  """
  nationality: String

  """

  """
  norad_id: Int

  """

  """
  orbit: String

  """

  """
  payload_id: ID

  """

  """
  payload_type: String

  """

  """
  periapsis_km: Float

  """

  """
  period_min: Float

  """

  """
  raan: Float

  """

  """
  reference_system: String

  """

  """
  regime: String

  """

  """
  reused: Boolean

  """

  """
  semi_major_axis_km: Float
}

"""

"""
type Roadster {
  """

  """
  apoapsis_au: Float

  """

  """
  details: String

  """

  """
  earth_distance_km: Float

  """

  """
  earth_distance_mi: Float

  """

  """
  eccentricity: Float

  """

  """
  epoch_jd: Float

  """

  """
  inclination: Float

  """

  """
  launch_date_unix: Date

  """

  """
  launch_date_utc: Date

  """

  """
  launch_mass_kg: Int

  """

  """
  launch_mass_lbs: Int

  """

  """
  longitude: Float

  """

  """
  mars_distance_km: Float

  """

  """
  mars_distance_mi: Float

  """

  """
  name: String

  """

  """
  norad_id: Int

  """

  """
  orbit_type: Float

  """

  """
  periapsis_arg: Float

  """

  """
  periapsis_au: Float

  """

  """
  period_days: Float

  """

  """
  semi_major_axis_au: Float

  """

  """
  speed_kph: Float

  """

  """
  speed_mph: Float

  """

  """
  wikipedia: String
}

"""

"""
type RocketsResult {
  """

  """
  result: Result

  """

  """
  data: [Rocket]
}

"""

"""
input ShipsFind {
  """

  """
  id: ID

  """

  """
  name: String

  """

  """
  model: String

  """

  """
  type: String

  """

  """
  role: String

  """

  """
  active: Boolean

  """

  """
  imo: Int

  """

  """
  mmsi: Int

  """

  """
  abs: Int

  """

  """
  class: Int

  """

  """
  weight_lbs: Int

  """

  """
  weight_kg: Int

  """

  """
  year_built: Int

  """

  """
  home_port: String

  """

  """
  status: String

  """

  """
  speed_kn: Int

  """

  """
  course_deg: Int

  """

  """
  latitude: Float

  """

  """
  longitude: Float

  """

  """
  successful_landings: Int

  """

  """
  attempted_landings: Int

  """

  """
  mission: String
}

"""

"""
type ShipsResult {
  """

  """
  result: Result

  """

  """
  data: [Ship]
}

type Mutation {
  """
  delete data from the table: "users"
  """
  delete_users(
    """
    filter the rows which have to be deleted
    """
    where: users_bool_exp!
  ): users_mutation_response

  """
  insert data into the table: "users"
  """
  insert_users(
    """
    the rows to be inserted
    """
    objects: [users_insert_input!]!

    """
    on conflict condition
    """
    on_conflict: users_on_conflict
  ): users_mutation_response

  """
  update data of the table: "users"
  """
  update_users(
    """
    sets the columns of the filtered rows to the given values
    """
    _set: users_set_input

    """
    filter the rows which have to be updated
    """
    where: users_bool_exp!
  ): users_mutation_response
}

"""
response of any mutation on the table "users"
"""
type users_mutation_response {
  """
  number of affected rows by the mutation
  """
  affected_rows: Int!

  """
  data of the affected rows by the mutation
  """
  returning: [users!]!
}

"""
input type for inserting data into table "users"
"""
input users_insert_input {
  """

  """
  id: uuid

  """

  """
  name: String

  """

  """
  rocket: String

  """

  """
  timestamp: timestamptz

  """

  """
  twitter: String
}

"""
on conflict condition type for table "users"
"""
input users_on_conflict {
  """

  """
  constraint: users_constraint!

  """

  """
  update_columns: [users_update_column!]!
}

"""
unique or primary key constraints on table "users"
"""
enum users_constraint {
  """
  unique or primary key constraint
  """
  users_pkey
}

"""
update columns of table "users"
"""
enum users_update_column {
  """
  column name
  """
  id

  """
  column name
  """
  name

  """
  column name
  """
  rocket

  """
  column name
  """
  timestamp

  """
  column name
  """
  twitter
}

"""
input type for updating data in table "users"
"""
input users_set_input {
  """

  """
  id: uuid

  """

  """
  name: String

  """

  """
  rocket: String

  """

  """
  timestamp: timestamptz

  """

  """
  twitter: String
}

type Subscription {
  """
  fetch data from the table: "users"
  """
  users(
    """
    distinct select on columns
    """
    distinct_on: [users_select_column!]

    """
    limit the nuber of rows returned
    """
    limit: Int

    """
    skip the first n rows. Use only with order_by
    """
    offset: Int

    """
    sort the rows by one or more columns
    """
    order_by: [users_order_by!]

    """
    filter the rows returned
    """
    where: users_bool_exp
  ): [users!]!

  """
  fetch aggregated fields from the table: "users"
  """
  users_aggregate(
    """
    distinct select on columns
    """
    distinct_on: [users_select_column!]

    """
    limit the nuber of rows returned
    """
    limit: Int

    """
    skip the first n rows. Use only with order_by
    """
    offset: Int

    """
    sort the rows by one or more columns
    """
    order_by: [users_order_by!]

    """
    filter the rows returned
    """
    where: users_bool_exp
  ): users_aggregate!

  """
  fetch data from the table: "users" using primary key columns
  """
  users_by_pk(id: uuid!): users
}

"""
conflict action
"""
enum conflict_action {
  """
  ignore the insert on this row
  """
  ignore

  """
  update the row with the given values
  """
  update
}

"""
order by aggregate values of table "users"
"""
input users_aggregate_order_by {
  """

  """
  count: order_by

  """

  """
  max: users_max_order_by

  """

  """
  min: users_min_order_by
}

"""
order by max() on columns of table "users"
"""
input users_max_order_by {
  """

  """
  name: order_by

  """

  """
  rocket: order_by

  """

  """
  timestamp: order_by

  """

  """
  twitter: order_by
}

"""
order by min() on columns of table "users"
"""
input users_min_order_by {
  """

  """
  name: order_by

  """

  """
  rocket: order_by

  """

  """
  timestamp: order_by

  """

  """
  twitter: order_by
}

"""
input type for inserting array relation for remote table "users"
"""
input users_arr_rel_insert_input {
  """

  """
  data: [users_insert_input!]!

  """

  """
  on_conflict: users_on_conflict
}

"""
input type for inserting object relation for remote table "users"
"""
input users_obj_rel_insert_input {
  """

  """
  data: users_insert_input!

  """

  """
  on_conflict: users_on_conflict
}

"""

"""
scalar ObjectID

"""

"""
type CoreMission {
  """

  """
  name: String

  """

  """
  flight: Int
}
`;const sc=`\r
\r
`;async function*soe(e,n,t){const r=!t||!t.multiple;let i=Buffer.byteLength(n),o=Buffer.alloc(0),s=!0,a=[];e:for await(const c of e){let l=o.byteLength;o=Buffer.concat([o,c]);const u=c.indexOf(n);for(~u?l+=u:l=o.indexOf(n),a=[];~l;){const f=o.slice(0,l),p=o.slice(l+i);if(s)s=!1,n=`\r
`+n,i+=2;else{const h={},d=f.indexOf(sc),E=o.slice(0,d).toString().trim().split(/\r\n/);let w;for(;w=E.shift();)w=w.split(": "),h[w.shift().toLowerCase()]=w.join(": ");const g=f.lastIndexOf(`\r
`,d+sc.length);let m=f.slice(d+sc.length,g>-1?void 0:g),v=!1;if(w=h["content-type"],w&&!!~w.indexOf("application/json"))try{m=JSON.parse(m.toString()),v=!0}catch{}if(w={headers:h,body:m,json:v},r?yield w:a.push(w),p.slice(0,2).toString()==="--")break e}o=p,l=o.indexOf(n)}a.length&&(yield a)}a.length&&(yield a)}async function aoe(e,n){const t=e.headers["content-type"];if(!t||!~t.indexOf("multipart/mixed"))return e;const r=t.indexOf("boundary=");return soe(e,`--${~r?t.substring(r+9).trim().replace(/['"]/g,""):"-"}`,n)}const sd=Object.prototype.hasOwnProperty;function eo(e){return typeof e=="object"&&e!==null}function loe(e){return Array.isArray(e)&&e.length>0&&e.every(n=>"message"in n)}function Li(e,n){return sd.call(e,n)}function ws(e,n){return sd.call(e,n)&&eo(e[n])}function Pr(e,n){return sd.call(e,n)&&typeof e[n]=="string"}function Rm(e,n){return e.length<124?e:n}const coe="graphql-transport-ws";var gn;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(gn||(gn={}));var Le;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(Le||(Le={}));function Iu(e){if(eo(e)){if(!Pr(e,"type"))return!1;switch(e.type){case Le.ConnectionInit:return!Li(e,"payload")||e.payload===void 0||eo(e.payload);case Le.ConnectionAck:case Le.Ping:case Le.Pong:return!Li(e,"payload")||e.payload===void 0||eo(e.payload);case Le.Subscribe:return Pr(e,"id")&&ws(e,"payload")&&(!Li(e.payload,"operationName")||e.payload.operationName===void 0||e.payload.operationName===null||typeof e.payload.operationName=="string")&&Pr(e.payload,"query")&&(!Li(e.payload,"variables")||e.payload.variables===void 0||e.payload.variables===null||ws(e.payload,"variables"))&&(!Li(e.payload,"extensions")||e.payload.extensions===void 0||e.payload.extensions===null||ws(e.payload,"extensions"));case Le.Next:return Pr(e,"id")&&ws(e,"payload");case Le.Error:return Pr(e,"id")&&loe(e.payload);case Le.Complete:return Pr(e,"id");default:return!1}}return!1}function uoe(e,n){if(Iu(e))return e;if(typeof e!="string")throw new Error("Message not parsable");const t=JSON.parse(e,n);if(!Iu(t))throw new Error("Invalid message");return t}function Fi(e,n){if(!Iu(e))throw new Error("Cannot stringify invalid message");return JSON.stringify(e,n)}function foe(e){const{url:n,connectionParams:t,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:o=0,keepAlive:s=0,disablePong:a,connectionAckWaitTimeout:c=0,retryAttempts:l=5,retryWait:u=async function(ne){let F=1e3;for(let z=0;z<ne;z++)F*=2;await new Promise(z=>setTimeout(z,F+Math.floor(Math.random()*(3e3-300)+300)))},isFatalConnectionProblem:f=G=>!ks(G),on:p,webSocketImpl:h,generateID:d=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ne=>{const F=Math.random()*16|0;return(ne=="x"?F:F&3|8).toString(16)})},jsonMessageReplacer:E,jsonMessageReviver:w}=e;let g;if(h){if(!poe(h))throw new Error("Invalid WebSocket implementation provided");g=h}else typeof WebSocket!="undefined"?g=WebSocket:typeof global!="undefined"?g=global.WebSocket||global.MozWebSocket:typeof window!="undefined"&&(g=window.WebSocket||window.MozWebSocket);if(!g)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const m=g,v=(()=>{const G=(()=>{const F={};return{on(z,U){return F[z]=U,()=>{delete F[z]}},emit(z){var U;"id"in z&&((U=F[z.id])===null||U===void 0||U.call(F,z))}}})(),ne={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[G.emit,p.message]:[G.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:G.on,on(F,z){const U=ne[F];return U.push(z),()=>{U.splice(U.indexOf(z),1)}},emit(F,...z){for(const U of[...ne[F]])U(...z)}}})();function S(G){const ne=[v.on("error",F=>{ne.forEach(z=>z()),G(F)}),v.on("closed",F=>{ne.forEach(z=>z()),G(F)})]}let N,k=0,A=!1,M=0,b=!1;async function I(){const[G,ne]=await(N!=null?N:N=new Promise((U,ye)=>(async()=>{if(A){if(await u(M),!k)return N=void 0,ye({code:1e3,reason:"All Subscriptions Gone"});M++}v.emit("connecting");const R=new m(typeof n=="function"?await n():n,coe);let H,B;function K(){isFinite(s)&&s>0&&(clearTimeout(B),B=setTimeout(()=>{R.readyState===m.OPEN&&(R.send(Fi({type:Le.Ping})),v.emit("ping",!1,void 0))},s))}S(j=>{N=void 0,clearTimeout(H),clearTimeout(B),ye(j),ks(j)&&j.code===4499&&(R.close(4499,"Terminated"),R.onerror=null,R.onclose=null)}),R.onerror=j=>v.emit("error",j),R.onclose=j=>v.emit("closed",j),R.onopen=async()=>{try{v.emit("opened",R);const j=typeof t=="function"?await t():t;if(R.readyState!==m.OPEN)return;R.send(Fi(j?{type:Le.ConnectionInit,payload:j}:{type:Le.ConnectionInit},E)),isFinite(c)&&c>0&&(H=setTimeout(()=>{R.close(gn.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},c)),K()}catch(j){v.emit("error",j),R.close(gn.InternalClientError,Rm(j instanceof Error?j.message:new Error(j).message,"Internal client error"))}};let x=!1;R.onmessage=({data:j})=>{try{const P=uoe(j,w);if(v.emit("message",P),P.type==="ping"||P.type==="pong"){v.emit(P.type,!0,P.payload),P.type==="pong"?K():a||(R.send(Fi(P.payload?{type:Le.Pong,payload:P.payload}:{type:Le.Pong})),v.emit("pong",!1,P.payload));return}if(x)return;if(P.type!==Le.ConnectionAck)throw new Error(`First message cannot be of type ${P.type}`);clearTimeout(H),x=!0,v.emit("connected",R,P.payload),A=!1,M=0,U([R,new Promise((T,$)=>S($))])}catch(P){R.onmessage=null,v.emit("error",P),R.close(gn.BadResponse,Rm(P instanceof Error?P.message:new Error(P).message,"Bad response"))}}})()));G.readyState===m.CLOSING&&await ne;let F=()=>{};const z=new Promise(U=>F=U);return[G,F,Promise.race([z.then(()=>{if(!k){const U=()=>G.close(1e3,"Normal Closure");isFinite(o)&&o>0?setTimeout(()=>{!k&&G.readyState===m.OPEN&&U()},o):U()}}),ne])]}function J(G){if(ks(G)&&(doe(G.code)||[gn.InternalServerError,gn.InternalClientError,gn.BadRequest,gn.BadResponse,gn.Unauthorized,gn.SubprotocolNotAcceptable,gn.SubscriberAlreadyExists,gn.TooManyInitialisationRequests].includes(G.code)))throw G;if(b)return!1;if(ks(G)&&G.code===1e3)return k>0;if(!l||M>=l||f(G))throw G;return A=!0}return r||(async()=>{for(k++;;)try{const[,,G]=await I();await G}catch(G){try{if(!J(G))return}catch(ne){return i==null?void 0:i(ne)}}})(),{on:v.on,subscribe(G,ne){const F=d();let z=!1,U=!1,ye=()=>{k--,z=!0};return(async()=>{for(k++;;)try{const[R,H,B]=await I();if(z)return H();const K=v.onMessage(F,x=>{switch(x.type){case Le.Next:{ne.next(x.payload);return}case Le.Error:{U=!0,z=!0,ne.error(x.payload),ye();return}case Le.Complete:{z=!0,ye();return}}});R.send(Fi({id:F,type:Le.Subscribe,payload:G},E)),ye=()=>{!z&&R.readyState===m.OPEN&&R.send(Fi({id:F,type:Le.Complete},E)),k--,z=!0,H()},await B.finally(K);return}catch(R){if(!J(R))return}})().then(()=>{U||ne.complete()}).catch(R=>{ne.error(R)}),()=>{z||ye()}},async dispose(){if(b=!0,N){const[G]=await N;G.close(1e3,"Normal Closure")}},terminate(){N&&v.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}function ks(e){return eo(e)&&"code"in e&&"reason"in e}function doe(e){return[1e3,1001,1006,1005,1012,1013,1013].includes(e)?!1:e>=1e3&&e<=1999}function poe(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function hoe(e,n,t){const r=async function*(){yield*e}(),i=r.return.bind(r);if(n&&(r.return=(...o)=>(n(),i(...o))),t){const o=r.throw.bind(r);r.throw=s=>(t(s),o(s))}return r}function Pm(){const e={};return e.promise=new Promise((n,t)=>{e.resolve=n,e.reject=t}),e}function moe(){let e={type:"running"},n=Pm();const t=[];function r(s){e.type==="running"&&(t.push(s),n.resolve(),n=Pm())}const i=async function*(){for(;;)if(t.length>0)yield t.shift();else{if(e.type==="error")throw e.error;if(e.type==="finished")return;await n.promise}}(),o=hoe(i,()=>{e.type==="running"&&(e={type:"finished"},n.resolve())},s=>{e.type==="running"&&(e={type:"error",error:s},n.resolve())});return{pushValue:r,asyncIterableIterator:o}}const b0=e=>{const{pushValue:n,asyncIterableIterator:t}=moe(),r=e({next:s=>{n(s)},complete:()=>{t.return()},error:s=>{t.throw(s)}}),i=t.return;let o;return t.return=()=>(o===void 0&&(r(),o=i()),o),t};function goe(e){return typeof e=="object"&&e!==null&&(e[Symbol.toStringTag]==="AsyncGenerator"||Symbol.asyncIterator&&Symbol.asyncIterator in e)}var voe=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},yt=globalThis&&globalThis.__await||function(e){return this instanceof yt?(this.v=e,this):new yt(e)},yoe=globalThis&&globalThis.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof __values=="function"?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}},_oe=globalThis&&globalThis.__asyncGenerator||function(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(h){return new Promise(function(d,E){o.push([p,h,d,E])>1||a(p,h)})})}function a(p,h){try{c(r[p](h))}catch(d){f(o[0][3],d)}}function c(p){p.value instanceof yt?Promise.resolve(p.value.v).then(l,u):f(o[0][2],p)}function l(p){a("next",p)}function u(p){a("throw",p)}function f(p,h){p(h),o.shift(),o.length&&a(o[0][0],o[0][1])}};const Eoe=(e,n)=>{let t=!1;return Mn(e,{OperationDefinition(r){var i;n===((i=r.name)===null||i===void 0?void 0:i.value)&&r.operation==="subscription"&&(t=!0)}}),t},Soe=(e,n)=>(t,r)=>voe(void 0,void 0,void 0,function*(){return(yield n(e.url,{method:"POST",body:JSON.stringify(t),headers:Object.assign(Object.assign({"content-type":"application/json"},e.headers),r==null?void 0:r.headers)})).json()}),woe=(e,n)=>{let t;try{return t=foe({url:e,connectionParams:n}),T0(t)}catch(r){console.error(`Error creating websocket client for:
${e}

${r}`)}},T0=e=>n=>b0(t=>e.subscribe(n,Object.assign(Object.assign({},t),{error:r=>{r instanceof Error?t.error(r):r instanceof CloseEvent?t.error(new Error(`Socket closed with event ${r.code} ${r.reason||""}`.trim())):t.error(new Error(r.map(({message:i})=>i).join(", ")))}}))),koe=e=>n=>{const t=e.request(n);return b0(r=>t.subscribe(r).unsubscribe)},boe=(e,n)=>function(t,r){return _oe(this,arguments,function*(){var i,o;const s=yield yt(n(e.url,{method:"POST",body:JSON.stringify(t),headers:Object.assign(Object.assign({"content-type":"application/json",accept:"application/json, multipart/mixed"},e.headers),r==null?void 0:r.headers)}).then(l=>aoe(l,{multiple:!0})));if(!goe(s))return yield yt(yield yield yt(s.json()));try{for(var a=yoe(s),c;c=yield yt(a.next()),!c.done;){const l=c.value;if(l.some(u=>!u.json)){const u=l.map(f=>`Headers::
${f.headers}

Body::
${f.body}`);throw new Error(`Expected multipart chunks to be of json type. got:
${u}`)}yield yield yt(l.map(u=>u.body))}}catch(l){i={error:l}}finally{try{c&&!c.done&&(o=a.return)&&(yield yt(o.call(a)))}finally{if(i)throw i.error}}})},Toe=e=>{if(e.wsClient)return T0(e.wsClient);if(e.subscriptionUrl)return woe(e.subscriptionUrl,e.wsConnectionParams);const n=e.legacyClient||e.legacyWsClient;if(n)return koe(n)};function xoe(e){let n;if(typeof window!="undefined"&&window.fetch&&(n=window.fetch),((e==null?void 0:e.enableIncrementalDelivery)===null||e.enableIncrementalDelivery!==!1)&&(e.enableIncrementalDelivery=!0),e.fetch&&(n=e.fetch),!n)throw Error("No valid fetcher implementation available");const t=Soe(e,n),r=Toe(e),i=e.enableIncrementalDelivery?boe(e,n):t;return(o,s)=>{if(o.operationName==="IntrospectionQuery")return(e.schemaFetcher||t)(o,s);if(Eoe(s==null?void 0:s.documentAST,o.operationName)){if(!r)throw Error(`Your GraphiQL createFetcher is not properly configured for websocket subscriptions yet. ${e.subscriptionUrl?`Provided URL ${e.subscriptionUrl} failed`:"Please provide subscriptionUrl, wsClient or legacyClient option first."}`);return r(o)}return i(o,s)}}const ac=rw(ooe),Noe=xoe({url:"https://api.spacex.land/graphql/"}),Coe="";function Ioe(){const[e,n]=En.exports.useState(Coe),[t,r]=En.exports.useState("");return Gn("div",{className:"App",children:[ac?te(En.exports.StrictMode,{children:te(ioe,{schema:ac,query:e,onEdit:n,onEditVariables:r})}):null,te(fie,{defaultVariableEditorOpen:!0,query:e,schema:ac,fetcher:Noe,variables:t,onEditQuery:i=>n(i!=null?i:""),onEditVariables:r})]})}lc.createRoot(document.getElementById("root")).render(te(Ioe,{}));export{xw as $,dse as A,fse as B,oh as C,X as D,hse as E,mse as F,wr as G,Iw as H,sh as I,gs as J,y as K,gu as L,Cw as M,hw as N,pw as O,mw as P,ee as Q,lse as R,ou as S,su as T,fe as U,Bl as V,Oe as W,Fh as X,gse as Y,cse as Z,Vy as _,au as a,fy as a$,Ms as a0,use as a1,Io as a2,br as a3,Tw as a4,bw as a5,Gf as a6,R0 as a7,O as a8,L as a9,B1 as aA,Roe as aB,ese as aC,z1 as aD,b1 as aE,Yv as aF,a1 as aG,D as aH,l1 as aI,s1 as aJ,Jn as aK,Ro as aL,ly as aM,jf as aN,ey as aO,Sr as aP,ty as aQ,ny as aR,At as aS,Ya as aT,U1 as aU,cy as aV,Re as aW,uy as aX,jl as aY,Vl as aZ,Ar as a_,ce as aa,H1 as ab,st as ac,ose as ad,PS as ae,nn as af,jp as ag,RS as ah,ir as ai,lt as aj,me as ak,on as al,hy as am,sse as an,Ps as ao,My as ap,Lf as aq,ew as ar,fr as as,Tf as at,Za as au,Kt as av,bn as aw,ko as ax,Wr as ay,we as az,Rn as b,yy as b$,dy as b0,Nf as b1,py as b2,ve as b3,qo as b4,Ja as b5,Cf as b6,If as b7,An as b8,Df as b9,Xoe as bA,R1 as bB,Uv as bC,t1 as bD,Kc as bE,e1 as bF,Vv as bG,T1 as bH,Poe as bI,Moe as bJ,Zv as bK,qoe as bL,So as bM,ji as bN,tse as bO,Pf as bP,rse as bQ,iS as bR,Mp as bS,ise as bT,gy as bU,$o as bV,vy as bW,Mf as bX,ma as bY,JS as bZ,Ry as b_,Mo as ba,Af as bb,Of as bc,Q1 as bd,xf as be,di as bf,gr as bg,Wa as bh,Xv as bi,my as bj,Koe as bk,$oe as bl,joe as bm,P1 as bn,M1 as bo,Voe as bp,Uoe as bq,zoe as br,Boe as bs,Qoe as bt,Hoe as bu,Goe as bv,Woe as bw,Yoe as bx,Zoe as by,q1 as bz,Ooe as c,oS as c0,lS as c1,cS as c2,qf as c3,Ey as c4,$f as c5,pS as c6,hS as c7,mS as c8,wy as c9,Foe as cA,nw as cB,tw as cC,rw as cD,ase as cE,mn as cF,kt as cG,ru as cH,Xa as cI,Rf as cJ,OS as cK,iu as cL,ti as cM,nse as cN,gS as ca,yS as cb,bS as cc,IS as cd,AS as ce,qS as cf,zf as cg,Bf as ch,VS as ci,Qf as cj,US as ck,zS as cl,BS as cm,QS as cn,HS as co,Sy as cp,Ly as cq,Fy as cr,Ay as cs,Oy as ct,$S as cu,Dy as cv,xy as cw,KS as cx,Be as cy,Loe as cz,Ne as d,Wt as e,Joe as f,tn as g,Op as h,Dt as i,yn as j,fw as k,fa as l,Kv as m,Qe as n,wn as o,wo as p,at as q,Ae as r,ie as s,vw as t,sn as u,Mn as v,ut as w,je as x,re as y,pse as z};
