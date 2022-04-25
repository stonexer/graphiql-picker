var x0=Object.defineProperty,N0=Object.defineProperties;var C0=Object.getOwnPropertyDescriptors;var ud=Object.getOwnPropertySymbols;var I0=Object.prototype.hasOwnProperty,D0=Object.prototype.propertyIsEnumerable;var fd=(e,n,t)=>n in e?x0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,oe=(e,n)=>{for(var t in n||(n={}))I0.call(n,t)&&fd(e,t,n[t]);if(ud)for(var t of ud(n))D0.call(n,t)&&fd(e,t,n[t]);return e},De=(e,n)=>N0(e,C0(n));const A0=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};A0();var woe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function F0(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var ac={},Cu={exports:{}},kn={},Ln={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),R0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),M0=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),$0=Symbol.for("react.forward_ref"),V0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),z0=Symbol.for("react.lazy"),dd=Symbol.iterator;function B0(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,qm={};function hi(e,n,t){this.props=e,this.context=n,this.refs=qm,this.updater=t||Pm}hi.prototype.isReactComponent={};hi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};hi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jm(){}jm.prototype=hi.prototype;function Iu(e,n,t){this.props=e,this.context=n,this.refs=qm,this.updater=t||Pm}var Du=Iu.prototype=new jm;Du.constructor=Iu;Mm(Du,hi.prototype);Du.isPureReactComponent=!0;var pd=Array.isArray,$m=Object.prototype.hasOwnProperty,Au={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Um(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)$m.call(n,r)&&!Vm.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Do,type:e,key:o,ref:s,props:i,_owner:Au.current}}function Q0(e,n){return{$$typeof:Do,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===Do}function H0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hd=/\/+/g;function pl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?H0(""+e.key):n.toString(36)}function ks(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Do:case R0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+pl(s,0):r,pd(i)?(t="",e!=null&&(t=e.replace(hd,"$&/")+"/"),ks(i,n,t,"",function(l){return l})):i!=null&&(Ou(i)&&(i=Q0(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hd,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",pd(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+pl(o,a);s+=ks(o,n,t,c,i)}else if(c=B0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+pl(o,a++),s+=ks(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Qo(e,n,t){if(e==null)return e;var r=[],i=0;return ks(e,r,"","",function(o){return n.call(t,o,i++)}),r}function G0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var sn={current:null},Ts={transition:null},W0={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:Au};ie.Children={map:Qo,forEach:function(e,n,t){Qo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Qo(e,function(){n++}),n},toArray:function(e){return Qo(e,function(n){return n})||[]},only:function(e){if(!Ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=hi;ie.Fragment=L0;ie.Profiler=M0;ie.PureComponent=Iu;ie.StrictMode=P0;ie.Suspense=V0;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;ie.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mm({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Au.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in n)$m.call(n,c)&&!Vm.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&a!==void 0?a[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Do,type:e.type,key:i,ref:o,props:r,_owner:s}};ie.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q0,_context:e},e.Consumer=e};ie.createElement=Um;ie.createFactory=function(e){var n=Um.bind(null,e);return n.type=e,n};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:$0,render:e}};ie.isValidElement=Ou;ie.lazy=function(e){return{$$typeof:z0,_payload:{_status:-1,_result:e},_init:G0}};ie.memo=function(e,n){return{$$typeof:U0,type:e,compare:n===void 0?null:n}};ie.startTransition=function(e){var n=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=n}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,n){return sn.current.useCallback(e,n)};ie.useContext=function(e){return sn.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return sn.current.useDeferredValue(e)};ie.useEffect=function(e,n){return sn.current.useEffect(e,n)};ie.useId=function(){return sn.current.useId()};ie.useImperativeHandle=function(e,n,t){return sn.current.useImperativeHandle(e,n,t)};ie.useInsertionEffect=function(e,n){return sn.current.useInsertionEffect(e,n)};ie.useLayoutEffect=function(e,n){return sn.current.useLayoutEffect(e,n)};ie.useMemo=function(e,n){return sn.current.useMemo(e,n)};ie.useReducer=function(e,n,t){return sn.current.useReducer(e,n,t)};ie.useRef=function(e){return sn.current.useRef(e)};ie.useState=function(e){return sn.current.useState(e)};ie.useSyncExternalStore=function(e,n,t){return sn.current.useSyncExternalStore(e,n,t)};ie.useTransition=function(){return sn.current.useTransition()};ie.version="18.0.0-fc46dba67-20220329";Ln.exports=ie;var _=Ln.exports,zm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,H){var B=L.length;L.push(H);e:for(;0<B;){var K=B-1>>>1,x=L[K];if(0<i(x,H))L[K]=H,L[B]=x,B=K;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],B=L.pop();if(B!==H){L[0]=B;e:for(var K=0,x=L.length,$=x>>>1;K<$;){var P=2*(K+1)-1,T=L[P],j=P+1,W=L[j];if(0>i(T,B))j<x&&0>i(W,T)?(L[K]=W,L[j]=B,K=j):(L[K]=T,L[P]=B,K=P);else if(j<x&&0>i(W,B))L[K]=W,L[j]=B,K=j;else break e}}return H}function i(L,H){var B=L.sortIndex-H.sortIndex;return B!==0?B:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],l=[],u=1,f=null,p=3,h=!1,d=!1,E=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var H=t(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=L)r(l),H.sortIndex=H.expirationTime,n(c,H);else break;H=t(l)}}function S(L){if(E=!1,v(L),!d)if(t(c)!==null)d=!0,U(N);else{var H=t(l);H!==null&&ye(S,H.startTime-L)}}function N(L,H){d=!1,E&&(E=!1,g(M),M=-1),h=!0;var B=p;try{for(v(H),f=t(c);f!==null&&(!(f.expirationTime>H)||L&&!J());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var x=K(f.expirationTime<=H);H=e.unstable_now(),typeof x=="function"?f.callback=x:f===t(c)&&r(c),v(H)}else r(c);f=t(c)}if(f!==null)var $=!0;else{var P=t(l);P!==null&&ye(S,P.startTime-H),$=!1}return $}finally{f=null,p=B,h=!1}}var b=!1,A=null,M=-1,k=5,I=-1;function J(){return!(e.unstable_now()-I<k)}function G(){if(A!==null){var L=e.unstable_now();I=L;var H=!0;try{H=A(!0,L)}finally{H?ne():(b=!1,A=null)}}else b=!1}var ne;if(typeof m=="function")ne=function(){m(G)};else if(typeof MessageChannel!="undefined"){var R=new MessageChannel,z=R.port2;R.port1.onmessage=G,ne=function(){z.postMessage(null)}}else ne=function(){w(G,0)};function U(L){A=L,b||(b=!0,ne())}function ye(L,H){M=w(function(){L(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){d||h||(d=!0,U(N))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var B=p;p=H;try{return L()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=p;p=L;try{return H()}finally{p=B}},e.unstable_scheduleCallback=function(L,H,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,L){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=B+x,L={id:u++,callback:H,priorityLevel:L,startTime:B,expirationTime:x,sortIndex:-1},B>K?(L.sortIndex=B,n(l,L),t(c)===null&&L===t(l)&&(E?(g(M),M=-1):E=!0,ye(S,B-K))):(L.sortIndex=x,n(c,L),d||h||(d=!0,U(N))),L},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(L){var H=p;return function(){var B=p;p=H;try{return L.apply(this,arguments)}finally{p=B}}}})(Bm);zm.exports=Bm;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=Ln.exports,wn=zm.exports;function q(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,no={};function Cr(e,n){ri(e,n),ri(e+"Capture",n)}function ri(e,n){for(no[e]=n,e=0;e<n.length;e++)Hm.add(n[e])}var bt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),lc=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,md={},gd={};function J0(e){return lc.call(gd,e)?!0:lc.call(md,e)?!1:Y0.test(e)?gd[e]=!0:(md[e]=!0,!1)}function X0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z0(e,n,t,r){if(n===null||typeof n=="undefined"||X0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function an(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new an(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];We[n]=new an(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new an(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new an(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new an(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new an(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new an(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new an(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new an(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fu,Ru);We[n]=new an(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fu,Ru);We[n]=new an(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fu,Ru);We[n]=new an(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new an(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new an(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,n,t,r){var i=We.hasOwnProperty(n)?We[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Z0(n,t,i,r)&&(t=null),r||i===null?J0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var It=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Ym=Symbol.for("react.offscreen"),vd=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,hl;function Li(e){if(hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);hl=n&&n[1]||""}return`
`+hl+e}var ml=!1;function gl(e,n){if(!e||ml)return"";ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(l){var r=l}Reflect.construct(e,[],n)}else{try{n.call()}catch(l){r=l}e.call(n.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Li(e):""}function K0(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function dc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case Pr:return"Portal";case cc:return"Profiler";case Pu:return"StrictMode";case uc:return"Suspense";case fc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wm:return(e.displayName||"Context")+".Consumer";case Gm:return(e._context.displayName||"Context")+".Provider";case Mu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return n=e.displayName||null,n!==null?n:dc(e.type)||"Memo";case Rt:n=e._payload,e=e._init;try{return dc(e(n))}catch{}}return null}function e_(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dc(n);case 8:return n===Pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function n_(e){var n=Jm(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Go(e){e._valueTracker||(e._valueTracker=n_(e))}function Xm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Jm(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function js(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function pc(e,n){var t=n.checked;return Ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function yd(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Yt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zm(e,n){n=n.checked,n!=null&&Lu(e,"checked",n,!1)}function hc(e,n){Zm(e,n);var t=Yt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?mc(e,n.type,t):n.hasOwnProperty("defaultValue")&&mc(e,n.type,Yt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _d(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function mc(e,n,t){(n!=="number"||js(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pi=Array.isArray;function Wr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Yt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function gc(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ed(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(q(92));if(Pi(t)){if(1<t.length)throw Error(q(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Yt(t)}}function Km(e,n){var t=Yt(n.value),r=Yt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function eg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?eg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wo,ng=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function to(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t_=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(e){t_.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zi[n]=zi[e]})});function tg(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zi.hasOwnProperty(e)&&zi[e]?(""+n).trim():n+"px"}function rg(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tg(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var r_=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(e,n){if(n){if(r_[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(q(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(q(61))}if(n.style!=null&&typeof n.style!="object")throw Error(q(62))}}function _c(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sc=null,Yr=null,Jr=null;function wd(e){if(e=Fo(e)){if(typeof Sc!="function")throw Error(q(280));var n=e.stateNode;n&&(n=Fa(n),Sc(e.stateNode,e.type,n))}}function ig(e){Yr?Jr?Jr.push(e):Jr=[e]:Yr=e}function og(){if(Yr){var e=Yr,n=Jr;if(Jr=Yr=null,wd(e),n)for(e=0;e<n.length;e++)wd(n[e])}}function sg(e,n){return e(n)}function ag(){}var vl=!1;function lg(e,n,t){if(vl)return e(n,t);vl=!0;try{return sg(e,n,t)}finally{vl=!1,(Yr!==null||Jr!==null)&&(ag(),og())}}function ro(e,n){var t=e.stateNode;if(t===null)return null;var r=Fa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(q(231,n,typeof t));return t}var wc=!1;if(bt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{wc=!1}function i_(e,n,t,r,i,o,s,a,c){var l=Array.prototype.slice.call(arguments,3);try{n.apply(t,l)}catch(u){this.onError(u)}}var Bi=!1,$s=null,Vs=!1,bc=null,o_={onError:function(e){Bi=!0,$s=e}};function s_(e,n,t,r,i,o,s,a,c){Bi=!1,$s=null,i_.apply(o_,arguments)}function a_(e,n,t,r,i,o,s,a,c){if(s_.apply(this,arguments),Bi){if(Bi){var l=$s;Bi=!1,$s=null}else throw Error(q(198));Vs||(Vs=!0,bc=l)}}function Ir(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function cg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bd(e){if(Ir(e)!==e)throw Error(q(188))}function l_(e){var n=e.alternate;if(!n){if(n=Ir(e),n===null)throw Error(q(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return bd(i),e;if(o===r)return bd(i),n;o=o.sibling}throw Error(q(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(q(189))}}if(t.alternate!==r)throw Error(q(190))}if(t.tag!==3)throw Error(q(188));return t.stateNode.current===t?e:n}function ug(e){return e=l_(e),e!==null?fg(e):null}function fg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fg(e);if(n!==null)return n;e=e.sibling}return null}var dg=wn.unstable_scheduleCallback,kd=wn.unstable_cancelCallback,c_=wn.unstable_shouldYield,u_=wn.unstable_requestPaint,Re=wn.unstable_now,f_=wn.unstable_getCurrentPriorityLevel,$u=wn.unstable_ImmediatePriority,pg=wn.unstable_UserBlockingPriority,Us=wn.unstable_NormalPriority,d_=wn.unstable_LowPriority,hg=wn.unstable_IdlePriority,Ia=null,tt=null;function p_(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:g_,h_=Math.log,m_=Math.LN2;function g_(e){return e>>>=0,e===0?32:31-(h_(e)/m_|0)|0}var Yo=64,Jo=4194304;function Mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=Mi(a):(o&=s,o!==0&&(r=Mi(o)))}else s=t&~i,s!==0?r=Mi(s):o!==0&&(r=Mi(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Gn(n),i=1<<t,r|=e[t],n&=~i;return r}function v_(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y_(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Gn(o),a=1<<s,c=i[s];c===-1?((a&t)===0||(a&r)!==0)&&(i[s]=v_(a,n)):c<=n&&(e.expiredLanes|=a),o&=~a}}function kc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ao(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Gn(n),e[n]=t}function __(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Gn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Vu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Gn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var pe=0;function mg(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gg,Uu,vg,yg,_g,Tc=!1,Xo=[],Vt=null,Ut=null,zt=null,io=new Map,oo=new Map,Mt=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(e,n){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(n.pointerId)}}function xi(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Fo(n),n!==null&&Uu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function S_(e,n,t,r,i){switch(n){case"focusin":return Vt=xi(Vt,e,n,t,r,i),!0;case"dragenter":return Ut=xi(Ut,e,n,t,r,i),!0;case"mouseover":return zt=xi(zt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return io.set(o,xi(io.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oo.set(o,xi(oo.get(o)||null,e,n,t,r,i)),!0}return!1}function Eg(e){var n=lr(e.target);if(n!==null){var t=Ir(n);if(t!==null){if(n=t.tag,n===13){if(n=cg(t),n!==null){e.blockedOn=n,_g(e.priority,function(){vg(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xc(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ec=r,t.target.dispatchEvent(r),Ec=null}else return n=Fo(t),n!==null&&Uu(n),e.blockedOn=t,!1;n.shift()}return!0}function xd(e,n,t){xs(e)&&t.delete(n)}function w_(){Tc=!1,Vt!==null&&xs(Vt)&&(Vt=null),Ut!==null&&xs(Ut)&&(Ut=null),zt!==null&&xs(zt)&&(zt=null),io.forEach(xd),oo.forEach(xd)}function Ni(e,n){e.blockedOn===n&&(e.blockedOn=null,Tc||(Tc=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,w_)))}function so(e){function n(i){return Ni(i,e)}if(0<Xo.length){Ni(Xo[0],e);for(var t=1;t<Xo.length;t++){var r=Xo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&Ni(Vt,e),Ut!==null&&Ni(Ut,e),zt!==null&&Ni(zt,e),io.forEach(n),oo.forEach(n),t=0;t<Mt.length;t++)r=Mt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(t=Mt[0],t.blockedOn===null);)Eg(t),t.blockedOn===null&&Mt.shift()}var Xr=It.ReactCurrentBatchConfig;function b_(e,n,t,r){var i=pe,o=Xr.transition;Xr.transition=null;try{pe=1,zu(e,n,t,r)}finally{pe=i,Xr.transition=o}}function k_(e,n,t,r){var i=pe,o=Xr.transition;Xr.transition=null;try{pe=4,zu(e,n,t,r)}finally{pe=i,Xr.transition=o}}function zu(e,n,t,r){var i=xc(e,n,t,r);if(i===null)Cl(e,n,r,Bs,t),Td(e,r);else if(S_(i,e,n,t,r))r.stopPropagation();else if(Td(e,r),n&4&&-1<E_.indexOf(e)){for(;i!==null;){var o=Fo(i);if(o!==null&&gg(o),o=xc(e,n,t,r),o===null&&Cl(e,n,r,Bs,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,n,r,null,t)}var Bs=null;function xc(e,n,t,r){if(Bs=null,e=ju(r),e=lr(e),e!==null)if(n=Ir(e),n===null)e=null;else if(t=n.tag,t===13){if(e=cg(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bs=e,null}function Sg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f_()){case $u:return 1;case pg:return 4;case Us:case d_:return 16;case hg:return 536870912;default:return 16}default:return 16}}var jt=null,Bu=null,Ns=null;function wg(){if(Ns)return Ns;var e,n=Bu,t=n.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Ns=i.slice(e,1<r?1-r:void 0)}function Cs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Nd(){return!1}function Tn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zo:Nd,this.isPropagationStopped=Nd,this}return Ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Tn(mi),Oo=Ie({},mi,{view:0,detail:0}),T_=Tn(Oo),_l,El,Ci,Da=Ie({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(_l=e.screenX-Ci.screenX,El=e.screenY-Ci.screenY):El=_l=0,Ci=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:El}}),Cd=Tn(Da),x_=Ie({},Da,{dataTransfer:0}),N_=Tn(x_),C_=Ie({},Oo,{relatedTarget:0}),Sl=Tn(C_),I_=Ie({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=Tn(I_),A_=Ie({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O_=Tn(A_),F_=Ie({},mi,{data:0}),Id=Tn(F_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P_[e])?!!n[e]:!1}function Hu(){return M_}var q_=Ie({},Oo,{key:function(e){if(e.key){var n=R_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j_=Tn(q_),$_=Ie({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Tn($_),V_=Ie({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),U_=Tn(V_),z_=Ie({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=Tn(z_),Q_=Ie({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=Tn(Q_),G_=[9,13,27,32],Gu=bt&&"CompositionEvent"in window,Qi=null;bt&&"documentMode"in document&&(Qi=document.documentMode);var W_=bt&&"TextEvent"in window&&!Qi,bg=bt&&(!Gu||Qi&&8<Qi&&11>=Qi),Ad=String.fromCharCode(32),Od=!1;function kg(e,n){switch(e){case"keyup":return G_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function Y_(e,n){switch(e){case"compositionend":return Tg(n);case"keypress":return n.which!==32?null:(Od=!0,Ad);case"textInput":return e=n.data,e===Ad&&Od?null:e;default:return null}}function J_(e,n){if(qr)return e==="compositionend"||!Gu&&kg(e,n)?(e=wg(),Ns=Bu=jt=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bg&&n.locale!=="ko"?null:n.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!X_[e.type]:n==="textarea"}function xg(e,n,t,r){ig(r),n=Qs(n,"onChange"),0<n.length&&(t=new Qu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Hi=null,ao=null;function Z_(e){Mg(e,0)}function Aa(e){var n=Vr(e);if(Xm(n))return e}function K_(e,n){if(e==="change")return n}var Ng=!1;if(bt){var wl;if(bt){var bl="oninput"in document;if(!bl){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),bl=typeof Rd.oninput=="function"}wl=bl}else wl=!1;Ng=wl&&(!document.documentMode||9<document.documentMode)}function Ld(){Hi&&(Hi.detachEvent("onpropertychange",Cg),ao=Hi=null)}function Cg(e){if(e.propertyName==="value"&&Aa(ao)){var n=[];xg(n,ao,e,ju(e)),lg(Z_,n)}}function eE(e,n,t){e==="focusin"?(Ld(),Hi=n,ao=t,Hi.attachEvent("onpropertychange",Cg)):e==="focusout"&&Ld()}function nE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Aa(ao)}function tE(e,n){if(e==="click")return Aa(n)}function rE(e,n){if(e==="input"||e==="change")return Aa(n)}function iE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var it=typeof Object.is=="function"?Object.is:iE;function lo(e,n){if(it(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!lc.call(n,i)||!it(e[i],n[i]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,n){var t=Pd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pd(t)}}function Ig(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ig(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dg(){for(var e=window,n=js();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=js(e.document)}return n}function Wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function oE(e){var n=Dg(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ig(t.ownerDocument.documentElement,t)){if(r!==null&&Wu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Md(t,o);var s=Md(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sE=bt&&"documentMode"in document&&11>=document.documentMode,jr=null,Nc=null,Gi=null,Cc=!1;function qd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cc||jr==null||jr!==js(r)||(r=jr,"selectionStart"in r&&Wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&lo(Gi,r)||(Gi=r,r=Qs(Nc,"onSelect"),0<r.length&&(n=new Qu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=jr)))}function Ko(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $r={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},kl={},Ag={};bt&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Oa(e){if(kl[e])return kl[e];if(!$r[e])return e;var n=$r[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ag)return kl[e]=n[t];return e}var Og=Oa("animationend"),Fg=Oa("animationiteration"),Rg=Oa("animationstart"),Lg=Oa("transitionend"),Pg=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,n){Pg.set(e,n),Cr(n,[e])}for(var Tl=0;Tl<jd.length;Tl++){var xl=jd[Tl],aE=xl.toLowerCase(),lE=xl[0].toUpperCase()+xl.slice(1);er(aE,"on"+lE)}er(Og,"onAnimationEnd");er(Fg,"onAnimationIteration");er(Rg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Lg,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function $d(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,a_(r,n,void 0,e),e.currentTarget=null}function Mg(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,l=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;$d(i,a,l),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,l=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;$d(i,a,l),o=c}}}if(Vs)throw e=bc,Vs=!1,bc=null,e}function be(e,n){var t=n[Oc];t===void 0&&(t=n[Oc]=new Set);var r=e+"__bubble";t.has(r)||(qg(n,e,2,!1),t.add(r))}function Nl(e,n,t){var r=0;n&&(r|=4),qg(t,e,r,n)}var es="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[es]){e[es]=!0,Hm.forEach(function(t){t!=="selectionchange"&&(cE.has(t)||Nl(t,!1,e),Nl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[es]||(n[es]=!0,Nl("selectionchange",!1,n))}}function qg(e,n,t,r){switch(Sg(n)){case 1:var i=b_;break;case 4:i=k_;break;default:i=zu}t=i.bind(null,n,t,e),i=void 0,!wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Cl(e,n,t,r,i){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=lr(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}lg(function(){var l=o,u=ju(t),f=[];e:{var p=Pg.get(e);if(p!==void 0){var h=Qu,d=e;switch(e){case"keypress":if(Cs(t)===0)break e;case"keydown":case"keyup":h=j_;break;case"focusin":d="focus",h=Sl;break;case"focusout":d="blur",h=Sl;break;case"beforeblur":case"afterblur":h=Sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=U_;break;case Og:case Fg:case Rg:h=D_;break;case Lg:h=B_;break;case"scroll":h=T_;break;case"wheel":h=H_;break;case"copy":case"cut":case"paste":h=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Dd}var E=(n&4)!==0,w=!E&&e==="scroll",g=E?p!==null?p+"Capture":null:p;E=[];for(var m=l,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=ro(m,g),S!=null&&E.push(uo(m,S,v)))),w)break;m=m.return}0<E.length&&(p=new h(p,d,null,t,u),f.push({event:p,listeners:E}))}}if((n&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==Ec&&(d=t.relatedTarget||t.fromElement)&&(lr(d)||d[kt]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(d=t.relatedTarget||t.toElement,h=l,d=d?lr(d):null,d!==null&&(w=Ir(d),d!==w||d.tag!==5&&d.tag!==6)&&(d=null)):(h=null,d=l),h!==d)){if(E=Cd,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Dd,S="onPointerLeave",g="onPointerEnter",m="pointer"),w=h==null?p:Vr(h),v=d==null?p:Vr(d),p=new E(S,m+"leave",h,t,u),p.target=w,p.relatedTarget=v,S=null,lr(u)===l&&(E=new E(g,m+"enter",d,t,u),E.target=v,E.relatedTarget=w,S=E),w=S,h&&d)n:{for(E=h,g=d,m=0,v=E;v;v=Or(v))m++;for(v=0,S=g;S;S=Or(S))v++;for(;0<m-v;)E=Or(E),m--;for(;0<v-m;)g=Or(g),v--;for(;m--;){if(E===g||g!==null&&E===g.alternate)break n;E=Or(E),g=Or(g)}E=null}else E=null;h!==null&&Vd(f,p,h,E,!1),d!==null&&w!==null&&Vd(f,w,d,E,!0)}}e:{if(p=l?Vr(l):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var N=K_;else if(Fd(p))if(Ng)N=rE;else{N=nE;var b=eE}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=tE);if(N&&(N=N(e,l))){xg(f,N,t,u);break e}b&&b(e,p,l),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&mc(p,"number",p.value)}switch(b=l?Vr(l):window,e){case"focusin":(Fd(b)||b.contentEditable==="true")&&(jr=b,Nc=l,Gi=null);break;case"focusout":Gi=Nc=jr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,qd(f,t,u);break;case"selectionchange":if(sE)break;case"keydown":case"keyup":qd(f,t,u)}var A;if(Gu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else qr?kg(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(bg&&t.locale!=="ko"&&(qr||M!=="onCompositionStart"?M==="onCompositionEnd"&&qr&&(A=wg()):(jt=u,Bu="value"in jt?jt.value:jt.textContent,qr=!0)),b=Qs(l,M),0<b.length&&(M=new Id(M,e,null,t,u),f.push({event:M,listeners:b}),A?M.data=A:(A=Tg(t),A!==null&&(M.data=A)))),(A=W_?Y_(e,t):J_(e,t))&&(l=Qs(l,"onBeforeInput"),0<l.length&&(u=new Id("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:l}),u.data=A))}Mg(f,n)})}function uo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qs(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ro(e,t),o!=null&&r.unshift(uo(e,o,i)),o=ro(e,n),o!=null&&r.push(uo(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vd(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,c=a.alternate,l=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&l!==null&&(a=l,i?(c=ro(t,o),c!=null&&s.unshift(uo(t,c,a))):i||(c=ro(t,o),c!=null&&s.push(uo(t,c,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var uE=/\r\n?/g,fE=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(uE,`
`).replace(fE,"")}function ns(e,n,t){if(n=Ud(n),Ud(e)!==n&&t)throw Error(q(425))}function Hs(){}var Ic=null;function Dc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof zd!="undefined"?function(e){return zd.resolve(null).then(e).catch(hE)}:Ac;function hE(e){setTimeout(function(){throw e})}function Il(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),so(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);so(n)}function vt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Bd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),et="__reactFiber$"+gi,fo="__reactProps$"+gi,kt="__reactContainer$"+gi,Oc="__reactEvents$"+gi,mE="__reactListeners$"+gi,gE="__reactHandles$"+gi;function lr(e){var n=e[et];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kt]||t[et]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Bd(e);e!==null;){if(t=e[et])return t;e=Bd(e)}return n}e=t,t=e.parentNode}return null}function Fo(e){return e=e[et]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Fa(e){return e[fo]||null}var Fc=[],Ur=-1;function nr(e){return{current:e}}function ke(e){0>Ur||(e.current=Fc[Ur],Fc[Ur]=null,Ur--)}function Se(e,n){Ur++,Fc[Ur]=e.current,e.current=n}var Jt={},Ke=nr(Jt),fn=nr(!1),vr=Jt;function ii(e,n){var t=e.type.contextTypes;if(!t)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function dn(e){return e=e.childContextTypes,e!=null}function Gs(){ke(fn),ke(Ke)}function Qd(e,n,t){if(Ke.current!==Jt)throw Error(q(168));Se(Ke,n),Se(fn,t)}function jg(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(q(108,e_(e)||"Unknown",i));return Ie({},t,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,vr=Ke.current,Se(Ke,e),Se(fn,fn.current),!0}function Hd(e,n,t){var r=e.stateNode;if(!r)throw Error(q(169));t?(e=jg(e,n,vr),r.__reactInternalMemoizedMergedChildContext=e,ke(fn),ke(Ke),Se(Ke,e)):ke(fn),Se(fn,t)}var ht=null,Ra=!1,Dl=!1;function $g(e){ht===null?ht=[e]:ht.push(e)}function vE(e){Ra=!0,$g(e)}function tr(){if(!Dl&&ht!==null){Dl=!0;var e=0,n=pe;try{var t=ht;for(pe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ht=null,Ra=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),dg($u,tr),i}finally{pe=n,Dl=!1}}return null}var yE=It.ReactCurrentBatchConfig;function Bn(e,n){if(e&&e.defaultProps){n=Ie({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ys=nr(null),Js=null,zr=null,Yu=null;function Ju(){Yu=zr=Js=null}function Xu(e){var n=Ys.current;ke(Ys),e._currentValue=n}function Rc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Zr(e,n){Js=e,Yu=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(_n=!0),e.firstContext=null)}function Pn(e){var n=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:n,next:null},zr===null){if(Js===null)throw Error(q(308));zr=e,Js.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return n}var nt=null,Lt=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bt(e,n){var t=e.updateQueue;t!==null&&(t=t.shared,qe!==null&&(e.mode&1)!==0&&(le&2)===0?(e=t.interleaved,e===null?(n.next=n,nt===null?nt=[t]:nt.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n))}function Is(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Vu(e,t)}}function Gd(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xs(e,n,t,r){var i=e.updateQueue;Lt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,l=c.next;c.next=null,s===null?o=l:s.next=l,s=c;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=l:a.next=l,u.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,u=l=c=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var d=e,E=a;switch(p=n,h=t,E.tag){case 1:if(d=E.payload,typeof d=="function"){f=d.call(h,f,p);break e}f=d;break e;case 3:d.flags=d.flags&-65537|128;case 0:if(d=E.payload,p=typeof d=="function"?d.call(h,f,p):d,p==null)break e;f=Ie({},f,p);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(l=u=h,c=f):u=u.next=h,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(c=f),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);ci|=s,e.lanes=s,e.memoizedState=f}}function Wd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Ug=new Qm.Component().refs;function Lc(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Ie({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var La={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=rn(),i=Ht(e),o=St(r,i);o.payload=n,t!=null&&(o.callback=t),Bt(e,o),n=Fn(e,i,r),n!==null&&Is(n,e,i)},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=rn(),i=Ht(e),o=St(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),Bt(e,o),n=Fn(e,i,r),n!==null&&Is(n,e,i)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=rn(),r=Ht(e),i=St(t,r);i.tag=2,n!=null&&(i.callback=n),Bt(e,i),n=Fn(e,r,t),n!==null&&Is(n,e,r)}};function Yd(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!lo(t,r)||!lo(i,o):!0}function zg(e,n,t){var r=!1,i=Jt,o=n.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(i=dn(n)?vr:Ke.current,r=n.contextTypes,o=(r=r!=null)?ii(e,i):Jt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=La,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Jd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&La.enqueueReplaceState(n,n.state,null)}function Pc(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ug,Zu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Pn(o):(o=dn(n)?vr:Ke.current,i.context=ii(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Lc(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&La.enqueueReplaceState(i,i.state,null),Xs(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}var Br=[],Qr=0,Zs=null,Ks=0,xn=[],Nn=0,yr=null,yt=1,_t="";function sr(e,n){Br[Qr++]=Ks,Br[Qr++]=Zs,Zs=e,Ks=n}function Bg(e,n,t){xn[Nn++]=yt,xn[Nn++]=_t,xn[Nn++]=yr,yr=e;var r=yt;e=_t;var i=32-Gn(r)-1;r&=~(1<<i),t+=1;var o=32-Gn(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yt=1<<32-Gn(n)+i|t<<i|r,_t=o+e}else yt=1<<o|t<<i|r,_t=e}function Ku(e){e.return!==null&&(sr(e,1),Bg(e,1,0))}function ef(e){for(;e===Zs;)Zs=Br[--Qr],Br[Qr]=null,Ks=Br[--Qr],Br[Qr]=null;for(;e===yr;)yr=xn[--Nn],xn[Nn]=null,_t=xn[--Nn],xn[Nn]=null,yt=xn[--Nn],xn[Nn]=null}var En=null,cn=null,xe=!1,Qn=null;function Qg(e,n){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,En=e,cn=vt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,En=e,cn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=yr!==null?{id:yt,overflow:_t}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,En=e,cn=null,!0):!1;default:return!1}}function Mc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qc(e){if(xe){var n=cn;if(n){var t=n;if(!Xd(e,n)){if(Mc(e))throw Error(q(418));n=vt(t.nextSibling);var r=En;n&&Xd(e,n)?Qg(r,t):(e.flags=e.flags&-4097|2,xe=!1,En=e)}}else{if(Mc(e))throw Error(q(418));e.flags=e.flags&-4097|2,xe=!1,En=e}}}function Zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;En=e}function Ii(e){if(e!==En)return!1;if(!xe)return Zd(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Dc(e.type,e.memoizedProps)),n&&(n=cn)){if(Mc(e)){for(e=cn;e;)e=vt(e.nextSibling);throw Error(q(418))}for(;n;)Qg(e,n),n=vt(n.nextSibling)}if(Zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){cn=vt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}cn=null}}else cn=En?vt(e.stateNode.nextSibling):null;return!0}function oi(){cn=En=null,xe=!1}function nf(e){Qn===null?Qn=[e]:Qn.push(e)}function Di(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(q(309));var r=t.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;a===Ug&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(q(284));if(!t._owner)throw Error(q(290,e))}return e}function ts(e,n){throw e=Object.prototype.toString.call(n),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Kd(e){var n=e._init;return n(e._payload)}function Hg(e){function n(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Xt(g,m),g.index=0,g.sibling=null,g}function o(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,S){return m===null||m.tag!==6?(m=Pl(v,g.mode,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function c(g,m,v,S){var N=v.type;return N===Mr?u(g,m,v.props.children,S,v.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rt&&Kd(N)===m.type)?(S=i(m,v.props),S.ref=Di(g,m,v),S.return=g,S):(S=Rs(v.type,v.key,v.props,null,g.mode,S),S.ref=Di(g,m,v),S.return=g,S)}function l(g,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ml(v,g.mode,S),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function u(g,m,v,S,N){return m===null||m.tag!==7?(m=mr(v,g.mode,S,N),m.return=g,m):(m=i(m,v),m.return=g,m)}function f(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Pl(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ho:return v=Rs(m.type,m.key,m.props,null,g.mode,v),v.ref=Di(g,null,m),v.return=g,v;case Pr:return m=Ml(m,g.mode,v),m.return=g,m;case Rt:var S=m._init;return f(g,S(m._payload),v)}if(Pi(m)||ki(m))return m=mr(m,g.mode,v,null),m.return=g,m;ts(g,m)}return null}function p(g,m,v,S){var N=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(g,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:return v.key===N?c(g,m,v,S):null;case Pr:return v.key===N?l(g,m,v,S):null;case Rt:return N=v._init,p(g,m,N(v._payload),S)}if(Pi(v)||ki(v))return N!==null?null:u(g,m,v,S,null);ts(g,v)}return null}function h(g,m,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(m,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:return g=g.get(S.key===null?v:S.key)||null,c(m,g,S,N);case Pr:return g=g.get(S.key===null?v:S.key)||null,l(m,g,S,N);case Rt:var b=S._init;return h(g,m,v,b(S._payload),N)}if(Pi(S)||ki(S))return g=g.get(v)||null,u(m,g,S,N,null);ts(m,S)}return null}function d(g,m,v,S){for(var N=null,b=null,A=m,M=m=0,k=null;A!==null&&M<v.length;M++){A.index>M?(k=A,A=null):k=A.sibling;var I=p(g,A,v[M],S);if(I===null){A===null&&(A=k);break}e&&A&&I.alternate===null&&n(g,A),m=o(I,m,M),b===null?N=I:b.sibling=I,b=I,A=k}if(M===v.length)return t(g,A),xe&&sr(g,M),N;if(A===null){for(;M<v.length;M++)A=f(g,v[M],S),A!==null&&(m=o(A,m,M),b===null?N=A:b.sibling=A,b=A);return xe&&sr(g,M),N}for(A=r(g,A);M<v.length;M++)k=h(A,g,M,v[M],S),k!==null&&(e&&k.alternate!==null&&A.delete(k.key===null?M:k.key),m=o(k,m,M),b===null?N=k:b.sibling=k,b=k);return e&&A.forEach(function(J){return n(g,J)}),xe&&sr(g,M),N}function E(g,m,v,S){var N=ki(v);if(typeof N!="function")throw Error(q(150));if(v=N.call(v),v==null)throw Error(q(151));for(var b=N=null,A=m,M=m=0,k=null,I=v.next();A!==null&&!I.done;M++,I=v.next()){A.index>M?(k=A,A=null):k=A.sibling;var J=p(g,A,I.value,S);if(J===null){A===null&&(A=k);break}e&&A&&J.alternate===null&&n(g,A),m=o(J,m,M),b===null?N=J:b.sibling=J,b=J,A=k}if(I.done)return t(g,A),xe&&sr(g,M),N;if(A===null){for(;!I.done;M++,I=v.next())I=f(g,I.value,S),I!==null&&(m=o(I,m,M),b===null?N=I:b.sibling=I,b=I);return xe&&sr(g,M),N}for(A=r(g,A);!I.done;M++,I=v.next())I=h(A,g,M,I.value,S),I!==null&&(e&&I.alternate!==null&&A.delete(I.key===null?M:I.key),m=o(I,m,M),b===null?N=I:b.sibling=I,b=I);return e&&A.forEach(function(G){return n(g,G)}),xe&&sr(g,M),N}function w(g,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Mr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:e:{for(var N=v.key,b=m;b!==null;){if(b.key===N){if(N=v.type,N===Mr){if(b.tag===7){t(g,b.sibling),m=i(b,v.props.children),m.return=g,g=m;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rt&&Kd(N)===b.type){t(g,b.sibling),m=i(b,v.props),m.ref=Di(g,b,v),m.return=g,g=m;break e}t(g,b);break}else n(g,b);b=b.sibling}v.type===Mr?(m=mr(v.props.children,g.mode,S,v.key),m.return=g,g=m):(S=Rs(v.type,v.key,v.props,null,g.mode,S),S.ref=Di(g,m,v),S.return=g,g=S)}return s(g);case Pr:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){t(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=Ml(v,g.mode,S),m.return=g,g=m}return s(g);case Rt:return b=v._init,w(g,m,b(v._payload),S)}if(Pi(v))return d(g,m,v,S);if(ki(v))return E(g,m,v,S);ts(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(t(g,m.sibling),m=i(m,v),m.return=g,g=m):(t(g,m),m=Pl(v,g.mode,S),m.return=g,g=m),s(g)):t(g,m)}return w}var si=Hg(!0),Gg=Hg(!1),Ro={},rt=nr(Ro),po=nr(Ro),ho=nr(Ro);function cr(e){if(e===Ro)throw Error(q(174));return e}function tf(e,n){switch(Se(ho,n),Se(po,e),Se(rt,Ro),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vc(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vc(n,e)}ke(rt),Se(rt,n)}function ai(){ke(rt),ke(po),ke(ho)}function Wg(e){cr(ho.current);var n=cr(rt.current),t=vc(n,e.type);n!==t&&(Se(po,e),Se(rt,t))}function rf(e){po.current===e&&(ke(rt),ke(po))}var Ce=nr(0);function ea(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Al=[];function of(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Ds=It.ReactCurrentDispatcher,An=It.ReactCurrentBatchConfig,li=0,Ae=null,Xe=null,Ue=null,na=!1,Wi=!1,mo=0,_E=0;function Ye(){throw Error(q(321))}function sf(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!it(e[t],n[t]))return!1;return!0}function af(e,n,t,r,i,o){if(li=o,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ds.current=e===null||e.memoizedState===null?bE:kE,e=t(r,i),Wi){o=0;do{if(Wi=!1,mo=0,25<=o)throw Error(q(301));o+=1,Ue=Xe=null,n.updateQueue=null,Ds.current=TE,e=t(r,i)}while(Wi)}if(Ds.current=ta,n=Xe!==null&&Xe.next!==null,li=0,Ue=Xe=Ae=null,na=!1,n)throw Error(q(300));return e}function lf(){var e=mo!==0;return mo=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function lt(){if(Xe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=Ue===null?Ae.memoizedState:Ue.next;if(n!==null)Ue=n,Xe=e;else{if(e===null)throw Error(q(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function pr(e,n){return typeof n=="function"?n(e):n}function rs(e){var n=lt(),t=n.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,l=o;do{var u=l.lane;if((li&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var f={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(a=c=f,s=r):c=c.next=f,Ae.lanes|=u,ci|=u}l=l.next}while(l!==null&&l!==o);c===null?s=r:c.next=a,it(r,n.memoizedState)||(_n=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,ci|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function is(e){var n=lt(),t=n.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);it(o,n.memoizedState)||(_n=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Yg(){}function Jg(e,n){var t=Ae,r=lt(),i=n(),o=!it(r.memoizedState,i);if(o&&(r.memoizedState=i,_n=!0),r=r.queue,vo(Kg.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,go(9,Zg.bind(null,t,r,i,n),void 0,null),qe===null)throw Error(q(349));(li&30)!==0||Xg(t,n,i)}return i}function Xg(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zg(e,n,t,r){n.value=t,n.getSnapshot=r,ev(n)&&Fn(e,1,-1)}function Kg(e,n,t){return t(function(){ev(n)&&Fn(e,1,-1)})}function ev(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!it(e,t)}catch{return!0}}function Ol(e){var n=pt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},n.queue=e,e=e.dispatch=wE.bind(null,Ae,e),[n.memoizedState,e]}function go(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function nv(){return lt().memoizedState}function As(e,n,t,r){var i=pt();Ae.flags|=e,i.memoizedState=go(1|n,t,void 0,r===void 0?null:r)}function Pa(e,n,t,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(Xe!==null){var s=Xe.memoizedState;if(o=s.destroy,r!==null&&sf(r,s.deps)){i.memoizedState=go(n,t,o,r);return}}Ae.flags|=e,i.memoizedState=go(1|n,t,o,r)}function Fl(e,n){return As(8390656,8,e,n)}function vo(e,n){return Pa(2048,8,e,n)}function tv(e,n){return Pa(4,2,e,n)}function rv(e,n){return Pa(4,4,e,n)}function iv(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ov(e,n,t){return t=t!=null?t.concat([e]):null,Pa(4,4,iv.bind(null,n,e),t)}function cf(){}function sv(e,n){var t=lt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&sf(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function av(e,n){var t=lt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&sf(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function EE(e,n){var t=pe;pe=t!==0&&4>t?t:4,e(!0);var r=An.transition;An.transition={};try{e(!1),n()}finally{pe=t,An.transition=r}}function lv(){return lt().memoizedState}function SE(e,n,t){var r=Ht(e);t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},cv(e)?uv(n,t):(fv(e,n,t),t=rn(),e=Fn(e,r,t),e!==null&&dv(e,n,r))}function wE(e,n,t){var r=Ht(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(cv(e))uv(n,i);else{fv(e,n,i);var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,it(a,s))return}catch{}finally{}t=rn(),e=Fn(e,r,t),e!==null&&dv(e,n,r)}}function cv(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function uv(e,n){Wi=na=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fv(e,n,t){qe!==null&&(e.mode&1)!==0&&(le&2)===0?(e=n.interleaved,e===null?(t.next=t,nt===null?nt=[n]:nt.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t)}function dv(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Vu(e,t)}}var ta={readContext:Pn,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},bE={readContext:Pn,useCallback:function(e,n){return pt().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:Fl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,As(4194308,4,iv.bind(null,n,e),t)},useLayoutEffect:function(e,n){return As(4194308,4,e,n)},useInsertionEffect:function(e,n){return As(4,2,e,n)},useMemo:function(e,n){var t=pt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=pt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=SE.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var n=pt();return e={current:e},n.memoizedState=e},useState:Ol,useDebugValue:cf,useDeferredValue:function(e){var n=Ol(e),t=n[0],r=n[1];return Fl(function(){var i=An.transition;An.transition={};try{r(e)}finally{An.transition=i}},[e]),t},useTransition:function(){var e=Ol(!1),n=e[0];return e=EE.bind(null,e[1]),pt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ae,i=pt();if(xe){if(t===void 0)throw Error(q(407));t=t()}else{if(t=n(),qe===null)throw Error(q(349));(li&30)!==0||Xg(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Fl(Kg.bind(null,r,o,e),[e]),r.flags|=2048,go(9,Zg.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=pt(),n=qe.identifierPrefix;if(xe){var t=_t,r=yt;t=(r&~(1<<32-Gn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=mo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_E++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},kE={readContext:Pn,useCallback:sv,useContext:Pn,useEffect:vo,useImperativeHandle:ov,useInsertionEffect:tv,useLayoutEffect:rv,useMemo:av,useReducer:rs,useRef:nv,useState:function(){return rs(pr)},useDebugValue:cf,useDeferredValue:function(e){var n=rs(pr),t=n[0],r=n[1];return vo(function(){var i=An.transition;An.transition={};try{r(e)}finally{An.transition=i}},[e]),t},useTransition:function(){var e=rs(pr)[0],n=lt().memoizedState;return[e,n]},useMutableSource:Yg,useSyncExternalStore:Jg,useId:lv,unstable_isNewReconciler:!1},TE={readContext:Pn,useCallback:sv,useContext:Pn,useEffect:vo,useImperativeHandle:ov,useInsertionEffect:tv,useLayoutEffect:rv,useMemo:av,useReducer:is,useRef:nv,useState:function(){return is(pr)},useDebugValue:cf,useDeferredValue:function(e){var n=is(pr),t=n[0],r=n[1];return vo(function(){var i=An.transition;An.transition={};try{r(e)}finally{An.transition=i}},[e]),t},useTransition:function(){var e=is(pr)[0],n=lt().memoizedState;return[e,n]},useMutableSource:Yg,useSyncExternalStore:Jg,useId:lv,unstable_isNewReconciler:!1};function uf(e,n){try{var t="",r=n;do t+=K0(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i}}function jc(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xE=typeof WeakMap=="function"?WeakMap:Map;function pv(e,n,t){t=St(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){oa||(oa=!0,Wc=r),jc(e,n)},t}function hv(e,n,t){t=St(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){jc(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jc(e,n),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ep(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xE;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=$E.bind(null,e,n,t),n.then(e,e))}function np(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function tp(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=St(-1,1),n.tag=2,Bt(t,n))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var mv,$c,gv,vv;mv=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$c=function(){};gv=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,cr(rt.current);var o=null;switch(t){case"input":i=pc(e,i),r=pc(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=gc(e,i),r=gc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hs)}yc(t,r);var s;t=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(no.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var c=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&c!==a&&(c!=null||a!=null))if(l==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(l,t)),t=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(no.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&be("scroll",e),o||a===c||(o=[])):(o=o||[]).push(l,c))}t&&(o=o||[]).push("style",t);var l=o;(n.updateQueue=l)&&(n.flags|=4)}};vv=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ai(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function NE(e,n,t){var r=n.pendingProps;switch(ef(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return dn(n.type)&&Gs(),Je(n),null;case 3:return r=n.stateNode,ai(),ke(fn),ke(Ke),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qn!==null&&(Xc(Qn),Qn=null))),$c(e,n),Je(n),null;case 5:rf(n);var i=cr(ho.current);if(t=n.type,e!==null&&n.stateNode!=null)gv(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(q(166));return Je(n),null}if(e=cr(rt.current),Ii(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[et]=n,r[fo]=o,e=(n.mode&1)!==0,t){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)be(qi[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":yd(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Ed(r,o),be("invalid",r)}yc(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(ns(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(ns(r.textContent,a,e),i=["children",""+a]):no.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&be("scroll",r)}switch(t){case"input":Go(r),_d(r,o,!0);break;case"textarea":Go(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hs)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eg(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[et]=n,e[fo]=r,mv(e,n,!1,!1),n.stateNode=e;e:{switch(s=_c(t,r),t){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)be(qi[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":yd(e,r),i=pc(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),be("invalid",e);break;case"textarea":Ed(e,r),i=gc(e,r),be("invalid",e);break;default:i=r}yc(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?rg(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ng(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&to(e,c):typeof c=="number"&&to(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(no.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",e):c!=null&&Lu(e,o,c,s))}switch(t){case"input":Go(e),_d(e,r,!1);break;case"textarea":Go(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Je(n),null;case 6:if(e&&n.stateNode!=null)vv(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(q(166));if(t=cr(ho.current),cr(rt.current),Ii(n)){if(r=n.stateNode,t=n.memoizedProps,r[et]=n,(o=r.nodeValue!==t)&&(e=En,e!==null))switch(s=(e.mode&1)!==0,e.tag){case 3:ns(r.nodeValue,t,s);break;case 5:e.memoizedProps[void 0]!==!0&&ns(r.nodeValue,t,s)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[et]=n,n.stateNode=r}return Je(n),null;case 13:if(ke(Ce),r=n.memoizedState,xe&&cn!==null&&(n.mode&1)!==0&&(n.flags&128)===0){for(r=cn;r;)r=vt(r.nextSibling);return oi(),n.flags|=98560,n}if(r!==null&&r.dehydrated!==null){if(r=Ii(n),e===null){if(!r)throw Error(q(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(q(317));r[et]=n}else oi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;return Je(n),null}return Qn!==null&&(Xc(Qn),Qn=null),(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,t=!1,e===null?Ii(n):t=e.memoizedState!==null,r&&!t&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?$e===0&&($e=3):gf())),n.updateQueue!==null&&(n.flags|=4),Je(n),null);case 4:return ai(),$c(e,n),e===null&&co(n.stateNode.containerInfo),Je(n),null;case 10:return Xu(n.type._context),Je(n),null;case 17:return dn(n.type)&&Gs(),Je(n),null;case 19:if(ke(Ce),o=n.memoizedState,o===null)return Je(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Ai(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=ea(e),s!==null){for(n.flags|=128,Ai(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Se(Ce,Ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&Re()>ui&&(n.flags|=128,r=!0,Ai(o,!1),n.lanes=4194304)}else{if(!r)if(e=ea(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return Je(n),null}else 2*Re()-o.renderingStartTime>ui&&t!==1073741824&&(n.flags|=128,r=!0,Ai(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Re(),n.sibling=null,t=Ce.current,Se(Ce,r?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return mf(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(vn&1073741824)!==0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),null;case 24:return null;case 25:return null}throw Error(q(156,n.tag))}var CE=It.ReactCurrentOwner,_n=!1;function en(e,n,t,r){n.child=e===null?Gg(n,null,t,r):si(n,e.child,t,r)}function rp(e,n,t,r,i){t=t.render;var o=n.ref;return Zr(n,i),r=af(e,n,t,r,o,i),t=lf(),e!==null&&!_n?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tt(e,n,i)):(xe&&t&&Ku(n),n.flags|=1,en(e,n,r,i),n.child)}function ip(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!vf(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,yv(e,n,o,r,i)):(e=Rs(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:lo,t(s,r)&&e.ref===n.ref)return Tt(e,n,i)}return n.flags|=1,e=Xt(o,r),e.ref=n.ref,e.return=n,n.child=e}function yv(e,n,t,r,i){if(e!==null&&lo(e.memoizedProps,r)&&e.ref===n.ref)if(_n=!1,(e.lanes&i)!==0)(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Tt(e,n,i);return Vc(e,n,t,r,i)}function _v(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null},Se(Hr,vn),vn|=t;else if((t&1073741824)!==0)n.memoizedState={baseLanes:0,cachePool:null},r=o!==null?o.baseLanes:t,Se(Hr,vn),vn|=r;else return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null},n.updateQueue=null,Se(Hr,vn),vn|=e,null;else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Se(Hr,vn),vn|=r;return en(e,n,i,t),n.child}function Ev(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Vc(e,n,t,r,i){var o=dn(t)?vr:Ke.current;return o=ii(n,o),Zr(n,i),t=af(e,n,t,r,o,i),r=lf(),e!==null&&!_n?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tt(e,n,i)):(xe&&r&&Ku(n),n.flags|=1,en(e,n,t,i),n.child)}function op(e,n,t,r,i){if(dn(t)){var o=!0;Ws(n)}else o=!1;if(Zr(n,i),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),zg(n,t,r),Pc(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var c=s.context,l=t.contextType;typeof l=="object"&&l!==null?l=Pn(l):(l=dn(t)?vr:Ke.current,l=ii(n,l));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==l)&&Jd(n,s,r,l),Lt=!1;var p=n.memoizedState;s.state=p,Xs(n,r,s,i),c=n.memoizedState,a!==r||p!==c||fn.current||Lt?(typeof u=="function"&&(Lc(n,t,u,r),c=n.memoizedState),(a=Lt||Yd(n,t,a,r,p,c,l))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),s.props=r,s.state=c,s.context=l,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Vg(e,n),a=n.memoizedProps,l=n.type===n.elementType?a:Bn(n.type,a),s.props=l,f=n.pendingProps,p=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Pn(c):(c=dn(t)?vr:Ke.current,c=ii(n,c));var h=t.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==c)&&Jd(n,s,r,c),Lt=!1,p=n.memoizedState,s.state=p,Xs(n,r,s,i);var d=n.memoizedState;a!==f||p!==d||fn.current||Lt?(typeof h=="function"&&(Lc(n,t,h,r),d=n.memoizedState),(l=Lt||Yd(n,t,l,r,p,d,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,d,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,d,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=c,r=l):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Uc(e,n,t,r,o,i)}function Uc(e,n,t,r,i,o){Ev(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Hd(n,t,!1),Tt(e,n,o);r=n.stateNode,CE.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=si(n,e.child,null,o),n.child=si(n,null,a,o)):en(e,n,a,o),n.memoizedState=r.state,i&&Hd(n,t,!0),n.child}function Sv(e){var n=e.stateNode;n.pendingContext?Qd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qd(e,n.context,!1),tf(e,n.containerInfo)}function sp(e,n,t,r,i){return oi(),nf(i),n.flags|=256,en(e,n,t,r),n.child}var os={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null}}function wv(e,n,t){var r=n.pendingProps,i=Ce.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Ce,i&1),e===null)return qc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=la(i,r,0,null),e=mr(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ss(t),n.memoizedState=os,e):zc(n,i));if(i=e.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(s)return n.flags&256?(n.flags&=-257,as(e,n,t,Error(q(422)))):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=la({mode:"visible",children:r.children},i,0,null),o=mr(o,i,t,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&si(n,e.child,null,t),n.child.memoizedState=ss(t),n.memoizedState=os,o);if((n.mode&1)===0)n=as(e,n,t,null);else if(a.data==="$!")n=as(e,n,t,Error(q(419)));else if(r=(t&e.childLanes)!==0,_n||r){if(r=qe,r!==null){switch(t&-t){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}r=(o&(r.suspendedLanes|t))!==0?0:o,r!==0&&r!==i.retryLane&&(i.retryLane=r,Fn(e,r,-1))}gf(),n=as(e,n,t,Error(q(421)))}else a.data==="$?"?(n.flags|=128,n.child=e.child,n=VE.bind(null,e),a._reactRetry=n,n=null):(t=i.treeContext,cn=vt(a.nextSibling),En=n,xe=!0,Qn=null,t!==null&&(xn[Nn++]=yt,xn[Nn++]=_t,xn[Nn++]=yr,yt=t.id,_t=t.overflow,yr=n),n=zc(n,n.pendingProps.children),n.flags|=4096);return n}return o?(r=lp(e,n,r.children,r.fallback,t),o=n.child,i=e.child.memoizedState,o.memoizedState=i===null?ss(t):{baseLanes:i.baseLanes|t,cachePool:null},o.childLanes=e.childLanes&~t,n.memoizedState=os,r):(t=ap(e,n,r.children,t),n.memoizedState=null,t)}return o?(r=lp(e,n,r.children,r.fallback,t),o=n.child,i=e.child.memoizedState,o.memoizedState=i===null?ss(t):{baseLanes:i.baseLanes|t,cachePool:null},o.childLanes=e.childLanes&~t,n.memoizedState=os,r):(t=ap(e,n,r.children,t),n.memoizedState=null,t)}function zc(e,n){return n=la({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ap(e,n,t,r){var i=e.child;return e=i.sibling,t=Xt(i,{mode:"visible",children:t}),(n.mode&1)===0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t}function lp(e,n,t,r,i){var o=n.mode;e=e.child;var s=e.sibling,a={mode:"hidden",children:t};return(o&1)===0&&n.child!==e?(t=n.child,t.childLanes=0,t.pendingProps=a,n.deletions=null):(t=Xt(e,a),t.subtreeFlags=e.subtreeFlags&14680064),s!==null?r=Xt(s,r):(r=mr(r,o,i,null),r.flags|=2),r.return=n,t.return=n,t.sibling=r,n.child=t,r}function as(e,n,t,r){return r!==null&&nf(r),si(n,e.child,null,t),e=zc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cp(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rc(e.return,n,t)}function Rl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function bv(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(en(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cp(e,t,n);else if(e.tag===19)cp(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ea(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Rl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ea(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Rl(n,!0,t,null,o);break;case"together":Rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ci|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(q(153));if(n.child!==null){for(e=n.child,t=Xt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function IE(e,n,t){switch(n.tag){case 3:Sv(n),oi();break;case 5:Wg(n);break;case 1:dn(n.type)&&Ws(n);break;case 4:tf(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Se(Ys,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?wv(e,n,t):(Se(Ce,Ce.current&1),e=Tt(e,n,t),e!==null?e.sibling:null);Se(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return bv(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,_v(e,n,t)}return Tt(e,n,t)}function DE(e,n){switch(ef(n),n.tag){case 1:return dn(n.type)&&Gs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ai(),ke(fn),ke(Ke),of(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return rf(n),null;case 13:if(ke(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(q(340));oi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Ce),null;case 4:return ai(),null;case 10:return Xu(n.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var ls=!1,ur=!1,AE=typeof WeakSet=="function"?WeakSet:Set,V=null;function ra(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){un(e,n,r)}else t.current=null}function Bc(e,n,t){try{t()}catch(r){un(e,n,r)}}var up=!1;function OE(e,n){if(e=Dg(),Wu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,c=-1,l=0,u=0,f=e,p=null;n:for(;;){for(var h;f!==t||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break n;if(p===t&&++l===i&&(a=s),p===o&&++u===r&&(c=s),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}t=a===-1||c===-1?null:{start:a,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ic={focusedElem:e,selectionRange:t},V=n;V!==null;)if(n=V,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,V=e;else for(;V!==null;){n=V;try{var d=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var E=d.memoizedProps,w=d.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?E:Bn(n.type,E),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=n.stateNode.containerInfo;if(v.nodeType===1)v.textContent="";else if(v.nodeType===9){var S=v.body;S!=null&&(S.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(N){un(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,V=e;break}V=n.return}return d=up,up=!1,d}function yo(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bc(n,t,o)}i=i.next}while(i!==r)}}function Ma(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Qc(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function fp(e,n,t){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ia,n)}catch{}switch(n.tag){case 0:case 11:case 14:case 15:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&Bc(n,t,o),r=r.next}while(r!==e)}break;case 1:if(ra(n,t),e=n.stateNode,typeof e.componentWillUnmount=="function")try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(s){un(n,t,s)}break;case 5:ra(n,t);break;case 4:xv(e,n,t)}}function kv(e){var n=e.alternate;n!==null&&(e.alternate=null,kv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[et],delete n[fo],delete n[Oc],delete n[mE],delete n[gE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tv(e){return e.tag===5||e.tag===3||e.tag===4}function dp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pp(e){e:{for(var n=e.return;n!==null;){if(Tv(n))break e;n=n.return}throw Error(q(160))}var t=n;switch(t.tag){case 5:n=t.stateNode,t.flags&32&&(to(n,""),t.flags&=-33),t=dp(e),Gc(e,t,n);break;case 3:case 4:n=t.stateNode.containerInfo,t=dp(e),Hc(e,t,n);break;default:throw Error(q(161))}}function Hc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hs));else if(r!==4&&(e=e.child,e!==null))for(Hc(e,n,t),e=e.sibling;e!==null;)Hc(e,n,t),e=e.sibling}function Gc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gc(e,n,t),e=e.sibling;e!==null;)Gc(e,n,t),e=e.sibling}function xv(e,n,t){for(var r=n,i=!1,o,s;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(q(160));switch(o=i.stateNode,i.tag){case 5:s=!1;break e;case 3:o=o.containerInfo,s=!0;break e;case 4:o=o.containerInfo,s=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=e,c=r,l=t,u=c;;)if(fp(a,u,l),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===c)break e;for(;u.sibling===null;){if(u.return===null||u.return===c)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(a=o,c=r.stateNode,a.nodeType===8?a.parentNode.removeChild(c):a.removeChild(c)):o.removeChild(r.stateNode)}else if(r.tag===18)s?(a=o,c=r.stateNode,a.nodeType===8?Il(a.parentNode,c):a.nodeType===1&&Il(a,c),so(a)):Il(o,r.stateNode);else if(r.tag===4){if(r.child!==null){o=r.stateNode.containerInfo,s=!0,r.child.return=r,r=r.child;continue}}else if(fp(e,r,t),r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Ll(e,n){switch(n.tag){case 0:case 11:case 14:case 15:yo(3,n,n.return),Ma(3,n),yo(5,n,n.return);return;case 1:return;case 5:var t=n.stateNode;if(t!=null){var r=n.memoizedProps,i=e!==null?e.memoizedProps:r;e=n.type;var o=n.updateQueue;if(n.updateQueue=null,o!==null){for(e==="input"&&r.type==="radio"&&r.name!=null&&Zm(t,r),_c(e,i),n=_c(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?rg(t,a):s==="dangerouslySetInnerHTML"?ng(t,a):s==="children"?to(t,a):Lu(t,s,a,n)}switch(e){case"input":hc(t,r);break;case"textarea":Km(t,r);break;case"select":e=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?Wr(t,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?Wr(t,!!r.multiple,r.defaultValue,!0):Wr(t,!!r.multiple,r.multiple?[]:"",!1))}t[fo]=r}}return;case 6:if(n.stateNode===null)throw Error(q(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:e!==null&&e.memoizedState.isDehydrated&&so(n.stateNode.containerInfo);return;case 12:return;case 13:hp(n);return;case 19:hp(n);return;case 17:return}throw Error(q(163))}function hp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new AE),n.forEach(function(r){var i=UE.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function FE(e,n){for(V=n;V!==null;){n=V;var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{xv(e,i,n);var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(M){un(i,n,M)}}if(t=n.child,(n.subtreeFlags&12854)!==0&&t!==null)t.return=n,V=t;else for(;V!==null;){n=V;try{var s=n.flags;if(s&32&&to(n.stateNode,""),s&512){var a=n.alternate;if(a!==null){var c=a.ref;c!==null&&(typeof c=="function"?c(null):c.current=null)}}if(s&8192)switch(n.tag){case 13:if(n.memoizedState!==null){var l=n.alternate;(l===null||l.memoizedState===null)&&(pf=Re())}break;case 22:var u=n.memoizedState!==null,f=n.alternate,p=f!==null&&f.memoizedState!==null;t=n;e:{r=t,i=u;for(var h=null,d=r;;){if(d.tag===5){if(h===null){h=d;var E=d.stateNode;if(i){var w=E.style;typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"}else{var g=d.stateNode,m=d.memoizedProps.style,v=m!=null&&m.hasOwnProperty("display")?m.display:null;g.style.display=tg("display",v)}}}else if(d.tag===6)h===null&&(d.stateNode.nodeValue=i?"":d.memoizedProps);else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===r)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}if(u&&!p&&(t.mode&1)!==0){V=t;for(var S=t.child;S!==null;){for(t=V=S;V!==null;){r=V;var N=r.child;switch(r.tag){case 0:case 11:case 14:case 15:yo(4,r,r.return);break;case 1:ra(r,r.return);var b=r.stateNode;if(typeof b.componentWillUnmount=="function"){var A=r.return;try{b.props=r.memoizedProps,b.state=r.memoizedState,b.componentWillUnmount()}catch(M){un(r,A,M)}}break;case 5:ra(r,r.return);break;case 22:if(r.memoizedState!==null){gp(t);continue}}N!==null?(N.return=r,V=N):gp(t)}S=S.sibling}}}switch(s&4102){case 2:pp(n),n.flags&=-3;break;case 6:pp(n),n.flags&=-3,Ll(n.alternate,n);break;case 4096:n.flags&=-4097;break;case 4100:n.flags&=-4097,Ll(n.alternate,n);break;case 4:Ll(n.alternate,n)}}catch(M){un(n,n.return,M)}if(t=n.sibling,t!==null){t.return=n.return,V=t;break}V=n.return}}}function RE(e,n,t){V=e,Nv(e)}function Nv(e,n,t){for(var r=(e.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ls;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ur;a=ls;var l=ur;if(ls=s,(ur=c)&&!l)for(V=i;V!==null;)s=V,c=s.child,s.tag===22&&s.memoizedState!==null?vp(i):c!==null?(c.return=s,V=c):vp(i);for(;o!==null;)V=o,Nv(o),o=o.sibling;V=i,ls=a,ur=l}mp(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,V=o):mp(e)}}function mp(e){for(;V!==null;){var n=V;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ur||Ma(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ur)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Bn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Wd(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Wd(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var l=n.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&so(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(q(163))}ur||n.flags&512&&Qc(n)}catch(p){un(n,n.return,p)}}if(n===e){V=null;break}if(t=n.sibling,t!==null){t.return=n.return,V=t;break}V=n.return}}function gp(e){for(;V!==null;){var n=V;if(n===e){V=null;break}var t=n.sibling;if(t!==null){t.return=n.return,V=t;break}V=n.return}}function vp(e){for(;V!==null;){var n=V;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ma(4,n)}catch(c){un(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){un(n,i,c)}}var o=n.return;try{Qc(n)}catch(c){un(n,o,c)}break;case 5:var s=n.return;try{Qc(n)}catch(c){un(n,s,c)}}}catch(c){un(n,n.return,c)}if(n===e){V=null;break}var a=n.sibling;if(a!==null){a.return=n.return,V=a;break}V=n.return}}var LE=Math.ceil,ia=It.ReactCurrentDispatcher,ff=It.ReactCurrentOwner,On=It.ReactCurrentBatchConfig,le=0,qe=null,Me=null,He=0,vn=0,Hr=nr(0),$e=0,_o=null,ci=0,qa=0,df=0,Yi=null,ln=null,pf=0,ui=1/0,oa=!1,Wc=null,Qt=null,cs=!1,$t=null,sa=0,Ji=0,Yc=null,Os=-1,Fs=0;function rn(){return(le&6)!==0?Re():Os!==-1?Os:Os=Re()}function Ht(e){return(e.mode&1)===0?1:(le&2)!==0&&He!==0?He&-He:yE.transition!==null?(Fs===0&&(e=Yo,Yo<<=1,(Yo&4194240)===0&&(Yo=64),Fs=e),Fs):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Sg(e.type)),e)}function Fn(e,n,t){if(50<Ji)throw Ji=0,Yc=null,Error(q(185));var r=ja(e,n);return r===null?null:(Ao(r,n,t),((le&2)===0||r!==qe)&&(r===qe&&((le&2)===0&&(qa|=n),$e===4&&qt(r,He)),pn(r,t),n===1&&le===0&&(e.mode&1)===0&&(ui=Re()+500,Ra&&tr())),r)}function ja(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}function pn(e,n){var t=e.callbackNode;y_(e,n);var r=zs(e,e===qe?He:0);if(r===0)t!==null&&kd(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&kd(t),n===1)e.tag===0?vE(yp.bind(null,e)):$g(yp.bind(null,e)),pE(function(){le===0&&tr()}),t=null;else{switch(mg(r)){case 1:t=$u;break;case 4:t=pg;break;case 16:t=Us;break;case 536870912:t=hg;break;default:t=Us}t=Lv(t,Cv.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cv(e,n){if(Os=-1,Fs=0,(le&6)!==0)throw Error(q(327));var t=e.callbackNode;if(Kr()&&e.callbackNode!==t)return null;var r=zs(e,e===qe?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=aa(e,r);else{n=r;var i=le;le|=2;var o=Dv();(qe!==e||He!==n)&&(ui=Re()+500,hr(e,n));do try{qE();break}catch(a){Iv(e,a)}while(1);Ju(),ia.current=o,le=i,Me!==null?n=0:(qe=null,He=0,n=$e)}if(n!==0){if(n===2&&(i=kc(e),i!==0&&(r=i,n=Jc(e,i))),n===1)throw t=_o,hr(e,0),qt(e,r),pn(e,Re()),t;if(n===6)qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!PE(i)&&(n=aa(e,r),n===2&&(o=kc(e),o!==0&&(r=o,n=Jc(e,o))),n===1))throw t=_o,hr(e,0),qt(e,r),pn(e,Re()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(q(345));case 2:ar(e,ln);break;case 3:if(qt(e,r),(r&130023424)===r&&(n=pf+500-Re(),10<n)){if(zs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ac(ar.bind(null,e,ln),n);break}ar(e,ln);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-Gn(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LE(r/1960))-r,10<r){e.timeoutHandle=Ac(ar.bind(null,e,ln),r);break}ar(e,ln);break;case 5:ar(e,ln);break;default:throw Error(q(329))}}}return pn(e,Re()),e.callbackNode===t?Cv.bind(null,e):null}function Jc(e,n){var t=Yi;return e.current.memoizedState.isDehydrated&&(hr(e,n).flags|=256),e=aa(e,n),e!==2&&(n=ln,ln=t,n!==null&&Xc(n)),e}function Xc(e){ln===null?ln=e:ln.push.apply(ln,e)}function PE(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qt(e,n){for(n&=~df,n&=~qa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Gn(n),r=1<<t;e[t]=-1,n&=~r}}function yp(e){if((le&6)!==0)throw Error(q(327));Kr();var n=zs(e,0);if((n&1)===0)return pn(e,Re()),null;var t=aa(e,n);if(e.tag!==0&&t===2){var r=kc(e);r!==0&&(n=r,t=Jc(e,r))}if(t===1)throw t=_o,hr(e,0),qt(e,n),pn(e,Re()),t;if(t===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ar(e,ln),pn(e,Re()),null}function hf(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(ui=Re()+500,Ra&&tr())}}function _r(e){$t!==null&&$t.tag===0&&(le&6)===0&&Kr();var n=le;le|=1;var t=On.transition,r=pe;try{if(On.transition=null,pe=1,e)return e()}finally{pe=r,On.transition=t,le=n,(le&6)===0&&tr()}}function mf(){vn=Hr.current,ke(Hr)}function hr(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,dE(t)),Me!==null)for(t=Me.return;t!==null;){var r=t;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:ai(),ke(fn),ke(Ke),of();break;case 5:rf(r);break;case 4:ai();break;case 13:ke(Ce);break;case 19:ke(Ce);break;case 10:Xu(r.type._context);break;case 22:case 23:mf()}t=t.return}if(qe=e,Me=e=Xt(e.current,null),He=vn=n,$e=0,_o=null,df=qa=ci=0,ln=Yi=null,nt!==null){for(n=0;n<nt.length;n++)if(t=nt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}nt=null}return e}function Iv(e,n){do{var t=Me;try{if(Ju(),Ds.current=ta,na){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}na=!1}if(li=0,Ue=Xe=Ae=null,Wi=!1,mo=0,ff.current=null,t===null||t.return===null){$e=1,_o=n,Me=null;break}e:{var o=e,s=t.return,a=t,c=n;if(n=He,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=np(s);if(h!==null){h.flags&=-257,tp(h,s,a,o,n),h.mode&1&&ep(o,l,n),n=h,c=l;var d=n.updateQueue;if(d===null){var E=new Set;E.add(c),n.updateQueue=E}else d.add(c);break e}else{if((n&1)===0){ep(o,l,n),gf();break e}c=Error(q(426))}}else if(xe&&a.mode&1){var w=np(s);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),tp(w,s,a,o,n),nf(c);break e}}o=c,$e!==4&&($e=2),Yi===null?Yi=[o]:Yi.push(o),c=uf(c,a),a=s;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var g=pv(a,c,n);Gd(a,g);break e;case 1:o=c;var m=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qt===null||!Qt.has(v)))){a.flags|=65536,n&=-n,a.lanes|=n;var S=hv(a,o,n);Gd(a,S);break e}}a=a.return}while(a!==null)}Ov(t)}catch(N){n=N,Me===t&&t!==null&&(Me=t=t.return);continue}break}while(1)}function Dv(){var e=ia.current;return ia.current=ta,e===null?ta:e}function gf(){($e===0||$e===3||$e===2)&&($e=4),qe===null||(ci&268435455)===0&&(qa&268435455)===0||qt(qe,He)}function aa(e,n){var t=le;le|=2;var r=Dv();qe===e&&He===n||hr(e,n);do try{ME();break}catch(i){Iv(e,i)}while(1);if(Ju(),le=t,ia.current=r,Me!==null)throw Error(q(261));return qe=null,He=0,$e}function ME(){for(;Me!==null;)Av(Me)}function qE(){for(;Me!==null&&!c_();)Av(Me)}function Av(e){var n=Rv(e.alternate,e,vn);e.memoizedProps=e.pendingProps,n===null?Ov(e):Me=n,ff.current=null}function Ov(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=NE(t,n,vn),t!==null){Me=t;return}}else{if(t=DE(t,n),t!==null){t.flags&=32767,Me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Me=null;return}}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);$e===0&&($e=5)}function ar(e,n){var t=pe,r=On.transition;try{On.transition=null,pe=1,jE(e,n,t)}finally{On.transition=r,pe=t}return null}function jE(e,n,t){do Kr();while($t!==null);if((le&6)!==0)throw Error(q(327));var r=e.finishedWork,i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(__(e,o),e===qe&&(Me=qe=null,He=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||cs||(cs=!0,Lv(Us,function(){return Kr(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=On.transition,On.transition=null;var s=pe;pe=1;var a=le;le|=4,ff.current=null,OE(e,r),FE(e,r),oE(Ic),Ic=null,e.current=r,RE(r),u_(),le=a,pe=s,On.transition=o}else e.current=r;if(cs&&(cs=!1,$t=e,sa=i),o=e.pendingLanes,o===0&&(Qt=null),p_(r.stateNode),pn(e,Re()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)t(n[r]);if(oa)throw oa=!1,e=Wc,Wc=null,e;return(sa&1)!==0&&e.tag!==0&&Kr(),o=e.pendingLanes,(o&1)!==0?e===Yc?Ji++:(Ji=0,Yc=e):Ji=0,tr(),null}function Kr(){if($t!==null){var e=mg(sa),n=On.transition,t=pe;try{if(On.transition=null,pe=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,sa=0,(le&6)!==0)throw Error(q(331));var i=le;for(le|=4,V=e.current;V!==null;){var o=V,s=o.child;if((V.flags&16)!==0){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var l=a[c];for(V=l;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:yo(8,u,o)}var f=u.child;if(f!==null)f.return=u,V=f;else for(;V!==null;){u=V;var p=u.sibling,h=u.return;if(kv(u),u===l){V=null;break}if(p!==null){p.return=h,V=p;break}V=h}}}var d=o.alternate;if(d!==null){var E=d.child;if(E!==null){d.child=null;do{var w=E.sibling;E.sibling=null,E=w}while(E!==null)}}V=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:yo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break e}V=o.return}}var m=e.current;for(V=m;V!==null;){s=V;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,V=v;else e:for(s=m;V!==null;){if(a=V,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ma(9,a)}}catch(N){un(a,a.return,N)}if(a===s){V=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,V=S;break e}V=a.return}}if(le=i,tr(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ia,e)}catch{}r=!0}return r}finally{pe=t,On.transition=n}}return!1}function _p(e,n,t){n=uf(t,n),n=pv(e,n,1),Bt(e,n),n=rn(),e=ja(e,1),e!==null&&(Ao(e,1,n),pn(e,n))}function un(e,n,t){if(e.tag===3)_p(e,e,t);else for(;n!==null;){if(n.tag===3){_p(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=uf(t,e),e=hv(n,e,1),Bt(n,e),e=rn(),n=ja(n,1),n!==null&&(Ao(n,1,e),pn(n,e));break}}n=n.return}}function $E(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=rn(),e.pingedLanes|=e.suspendedLanes&t,qe===e&&(He&t)===t&&($e===4||$e===3&&(He&130023424)===He&&500>Re()-pf?hr(e,0):df|=t),pn(e,n)}function Fv(e,n){n===0&&((e.mode&1)===0?n=1:(n=Jo,Jo<<=1,(Jo&130023424)===0&&(Jo=4194304)));var t=rn();e=ja(e,n),e!==null&&(Ao(e,n,t),pn(e,t))}function VE(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fv(e,t)}function UE(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(n),Fv(e,t)}var Rv;Rv=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fn.current)_n=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return _n=!1,IE(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,xe&&(n.flags&1048576)!==0&&Bg(n,Ks,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps;var i=ii(n,Ke.current);Zr(n,t),i=af(null,n,r,e,i,t);var o=lf();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,dn(r)?(o=!0,Ws(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(n),i.updater=La,n.stateNode=i,i._reactInternals=n,Pc(n,r,e,t),n=Uc(null,n,r,!0,o,t)):(n.tag=0,xe&&o&&Ku(n),en(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=BE(r),e=Bn(r,e),i){case 0:n=Vc(null,n,r,e,t);break e;case 1:n=op(null,n,r,e,t);break e;case 11:n=rp(null,n,r,e,t);break e;case 14:n=ip(null,n,r,Bn(r.type,e),t);break e}throw Error(q(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),Vc(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),op(e,n,r,i,t);case 3:e:{if(Sv(n),e===null)throw Error(q(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Vg(e,n),Xs(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Error(q(423)),n=sp(e,n,r,t,i);break e}else if(r!==i){i=Error(q(424)),n=sp(e,n,r,t,i);break e}else for(cn=vt(n.stateNode.containerInfo.firstChild),En=n,xe=!0,Qn=null,t=Gg(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(oi(),r===i){n=Tt(e,n,t);break e}en(e,n,r,t)}n=n.child}return n;case 5:return Wg(n),e===null&&qc(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Dc(r,i)?s=null:o!==null&&Dc(r,o)&&(n.flags|=32),Ev(e,n),en(e,n,s,t),n.child;case 6:return e===null&&qc(n),null;case 13:return wv(e,n,t);case 4:return tf(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=si(n,null,r,t):en(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),rp(e,n,r,i,t);case 7:return en(e,n,n.pendingProps,t),n.child;case 8:return en(e,n,n.pendingProps.children,t),n.child;case 12:return en(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,Se(Ys,r._currentValue),r._currentValue=s,o!==null)if(it(o.value,s)){if(o.children===i.children&&!fn.current){n=Tt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=St(-1,t&-t),c.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Rc(o.return,t,n),a.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(q(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Rc(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Zr(n,t),i=Pn(i),r=r(i),n.flags|=1,en(e,n,r,t),n.child;case 14:return r=n.type,i=Bn(r,n.pendingProps),i=Bn(r.type,i),ip(e,n,r,i,t);case 15:return yv(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,dn(r)?(e=!0,Ws(n)):e=!1,Zr(n,t),zg(n,r,i),Pc(n,r,i,t),Uc(null,n,r,!0,e,t);case 19:return bv(e,n,t);case 22:return _v(e,n,t)}throw Error(q(156,n.tag))};function Lv(e,n){return dg(e,n)}function zE(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,n,t,r){return new zE(e,n,t,r)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function BE(e){if(typeof e=="function")return vf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===qu)return 14}return 2}function Xt(e,n){var t=e.alternate;return t===null?(t=In(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rs(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")vf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mr:return mr(t.children,i,o,n);case Pu:s=8,i|=8;break;case cc:return e=In(12,t,n,i|2),e.elementType=cc,e.lanes=o,e;case uc:return e=In(13,t,n,i),e.elementType=uc,e.lanes=o,e;case fc:return e=In(19,t,n,i),e.elementType=fc,e.lanes=o,e;case Ym:return la(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gm:s=10;break e;case Wm:s=9;break e;case Mu:s=11;break e;case qu:s=14;break e;case Rt:s=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return n=In(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function mr(e,n,t,r){return e=In(7,e,r,n),e.lanes=t,e}function la(e,n,t,r){return e=In(22,e,r,n),e.elementType=Ym,e.lanes=t,e.stateNode={},e}function Pl(e,n,t){return e=In(6,e,null,n),e.lanes=t,e}function Ml(e,n,t){return n=In(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function QE(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(e,n,t,r,i,o,s,a,c){return e=new QE(e,n,t,a,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=In(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null},Zu(o),e}function HE(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Pv(e){if(!e)return Jt;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(q(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(dn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(q(171))}if(e.tag===1){var t=e.type;if(dn(t))return jg(e,t,n)}return n}function Mv(e,n,t,r,i,o,s,a,c){return e=yf(t,r,!0,e,i,o,s,a,c),e.context=Pv(null),t=e.current,r=rn(),i=Ht(t),o=St(r,i),o.callback=n!=null?n:null,Bt(t,o),e.current.lanes=i,Ao(e,i,r),pn(e,r),e}function $a(e,n,t,r){var i=n.current,o=rn(),s=Ht(i);return t=Pv(t),n.context===null?n.context=t:n.pendingContext=t,n=St(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),Bt(i,n),e=Fn(i,s,o),e!==null&&Is(e,i,s),s}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ep(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _f(e,n){Ep(e,n),(e=e.alternate)&&Ep(e,n)}function GE(){return null}var qv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ef(e){this._internalRoot=e}Va.prototype.render=Ef.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(q(409));$a(e,n,null,null)};Va.prototype.unmount=Ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_r(function(){$a(null,e,null,null)}),n[kt]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var n=yg();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Mt.length&&n!==0&&n<Mt[t].priority;t++);Mt.splice(t,0,e),t===0&&Eg(e)}};function Sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function WE(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var l=ca(s);o.call(l)}}var s=Mv(n,r,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=s,e[kt]=s.current,co(e.nodeType===8?e.parentNode:e),_r(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=ca(c);a.call(l)}}var c=yf(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=c,e[kt]=c.current,co(e.nodeType===8?e.parentNode:e),_r(function(){$a(n,c,t,r)}),c}function za(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=ca(s);a.call(c)}}$a(n,s,e,i)}else s=WE(t,n,e,i,r);return ca(s)}gg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mi(n.pendingLanes);t!==0&&(Vu(n,t|1),pn(n,Re()),(le&6)===0&&(ui=Re()+500,tr()))}break;case 13:var r=rn();_r(function(){return Fn(e,1,r)}),_f(e,1)}};Uu=function(e){if(e.tag===13){var n=rn();Fn(e,134217728,n),_f(e,134217728)}};vg=function(e){if(e.tag===13){var n=rn(),t=Ht(e);Fn(e,t,n),_f(e,t)}};yg=function(){return pe};_g=function(e,n){var t=pe;try{return pe=e,n()}finally{pe=t}};Sc=function(e,n,t){switch(n){case"input":if(hc(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Fa(r);if(!i)throw Error(q(90));Xm(r),hc(r,i)}}}break;case"textarea":Km(e,t);break;case"select":n=t.value,n!=null&&Wr(e,!!t.multiple,n,!1)}};sg=hf;ag=_r;var YE={usingClientEntryPoint:!1,Events:[Fo,Vr,Fa,ig,og,hf]},Oi={findFiberByHostInstance:lr,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},JE={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ug(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||GE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Ia=us.inject(JE),tt=us}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;kn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(n))throw Error(q(200));return HE(e,n,null,t)};kn.createRoot=function(e,n){if(!Sf(e))throw Error(q(299));var t=!1,r="",i=qv;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=yf(e,1,!1,null,null,t,!1,r,i),e[kt]=n.current,co(e.nodeType===8?e.parentNode:e),new Ef(n)};kn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=ug(n),e=e===null?null:e.stateNode,e};kn.flushSync=function(e){return _r(e)};kn.hydrate=function(e,n,t){if(!Ua(n))throw Error(q(200));return za(null,e,n,!0,t)};kn.hydrateRoot=function(e,n,t){if(!Sf(e))throw Error(q(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=qv;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Mv(n,null,e,1,t!=null?t:null,i,!1,o,s),e[kt]=n.current,co(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Va(n)};kn.render=function(e,n,t){if(!Ua(n))throw Error(q(200));return za(null,e,n,!1,t)};kn.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(q(40));return e._reactRootContainer?(_r(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};kn.unstable_batchedUpdates=hf;kn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ua(t))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return za(e,n,t,!1,r)};kn.version="18.0.0-fc46dba67-20220329";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(e){console.error(e)}}jv(),Cu.exports=kn;var wp=Cu.exports,bp=Cu.exports;ac.createRoot=bp.createRoot,ac.hydrateRoot=bp.hydrateRoot;function ce(e,n){if(!Boolean(e))throw new Error(n)}function ot(e){return typeof e=="object"&&e!==null}function on(e,n){if(!Boolean(e))throw new Error(n!=null?n:"Unexpected invariant triggered.")}const XE=/\r\n|[\n\r]/g;function Zc(e,n){let t=0,r=1;for(const i of e.body.matchAll(XE)){if(typeof i.index=="number"||on(!1),i.index>=n)break;t=i.index+i[0].length,r+=1}return{line:r,column:n+1-t}}function ZE(e){return $v(e.source,Zc(e.source,e.start))}function $v(e,n){const t=e.locationOffset.column-1,r="".padStart(t)+e.body,i=n.line-1,o=e.locationOffset.line-1,s=n.line+o,a=n.line===1?t:0,c=n.column+a,l=`${e.name}:${s}:${c}
`,u=r.split(/\r\n|[\n\r]/g),f=u[i];if(f.length>120){const p=Math.floor(c/80),h=c%80,d=[];for(let E=0;E<f.length;E+=80)d.push(f.slice(E,E+80));return l+kp([[`${s} |`,d[0]],...d.slice(1,p+1).map(E=>["|",E]),["|","^".padStart(h)],["|",d[p+1]]])}return l+kp([[`${s-1} |`,u[i-1]],[`${s} |`,f],["|","^".padStart(c)],[`${s+1} |`,u[i+1]]])}function kp(e){const n=e.filter(([r,i])=>i!==void 0),t=Math.max(...n.map(([r])=>r.length));return n.map(([r,i])=>r.padStart(t)+(i?" "+i:"")).join(`
`)}function KE(e){const n=e[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:n}class F extends Error{constructor(n,...t){var r,i,o;const{nodes:s,source:a,positions:c,path:l,originalError:u,extensions:f}=KE(t);super(n),this.name="GraphQLError",this.path=l!=null?l:void 0,this.originalError=u!=null?u:void 0,this.nodes=Tp(Array.isArray(s)?s:s?[s]:void 0);const p=Tp((r=this.nodes)===null||r===void 0?void 0:r.map(d=>d.loc).filter(d=>d!=null));this.source=a!=null?a:p==null||(i=p[0])===null||i===void 0?void 0:i.source,this.positions=c!=null?c:p==null?void 0:p.map(d=>d.start),this.locations=c&&a?c.map(d=>Zc(a,d)):p==null?void 0:p.map(d=>Zc(d.source,d.start));const h=ot(u==null?void 0:u.extensions)?u==null?void 0:u.extensions:void 0;this.extensions=(o=f!=null?f:h)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,F):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+ZE(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+$v(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Tp(e){return e===void 0||e.length===0?void 0:e}function boe(e){return e.toString()}function koe(e){return e.toJSON()}function Be(e,n,t){return new F(`Syntax Error: ${t}`,void 0,e,[n])}class eS{constructor(n,t,r){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Vv{constructor(n,t,r,i,o,s){this.kind=n,this.start=t,this.end=r,this.line=i,this.column=o,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Uv={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},nS=new Set(Object.keys(Uv));function Kc(e){const n=e==null?void 0:e.kind;return typeof n=="string"&&nS.has(n)}let nn;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(nn||(nn={}));let Z;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Z||(Z={}));let y;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(y||(y={}));function eu(e){return e===9||e===32}function Eo(e){return e>=48&&e<=57}function zv(e){return e>=97&&e<=122||e>=65&&e<=90}function wf(e){return zv(e)||e===95}function Bv(e){return zv(e)||Eo(e)||e===95}function tS(e){var n;let t=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let s=0;s<e.length;++s){var o;const a=e[s],c=rS(a);c!==a.length&&(r=(o=r)!==null&&o!==void 0?o:s,i=s,s!==0&&c<t&&(t=c))}return e.map((s,a)=>a===0?s:s.slice(t)).slice((n=r)!==null&&n!==void 0?n:0,i+1)}function rS(e){let n=0;for(;n<e.length&&eu(e.charCodeAt(n));)++n;return n}function Toe(e){if(e==="")return!0;let n=!0,t=!1,r=!0,i=!1;for(let o=0;o<e.length;++o)switch(e.codePointAt(o)){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 11:case 12:case 14:case 15:return!1;case 13:return!1;case 10:if(n&&!i)return!1;i=!0,n=!0,t=!1;break;case 9:case 32:t||(t=n);break;default:r&&(r=t),n=!1}return!(n||r&&i)}function iS(e,n){const t=e.replace(/"""/g,'\\"""'),r=t.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(h=>h.length===0||eu(h.charCodeAt(0))),s=t.endsWith('\\"""'),a=e.endsWith('"')&&!s,c=e.endsWith("\\"),l=a||c,u=!(n!=null&&n.minimize)&&(!i||e.length>70||l||o||s);let f="";const p=i&&eu(e.charCodeAt(0));return(u&&!p||o)&&(f+=`
`),f+=t,(u||l)&&(f+=`
`),'"""'+f+'"""'}let D;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(D||(D={}));class oS{constructor(n){const t=new Vv(D.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==D.EOF)do if(n.next)n=n.next;else{const t=aS(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===D.COMMENT);return n}}function sS(e){return e===D.BANG||e===D.DOLLAR||e===D.AMP||e===D.PAREN_L||e===D.PAREN_R||e===D.SPREAD||e===D.COLON||e===D.EQUALS||e===D.AT||e===D.BRACKET_L||e===D.BRACKET_R||e===D.BRACE_L||e===D.PIPE||e===D.BRACE_R}function vi(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Ba(e,n){return Qv(e.charCodeAt(n))&&Hv(e.charCodeAt(n+1))}function Qv(e){return e>=55296&&e<=56319}function Hv(e){return e>=56320&&e<=57343}function Er(e,n){const t=e.source.body.codePointAt(n);if(t===void 0)return D.EOF;if(t>=32&&t<=126){const r=String.fromCodePoint(t);return r==='"'?`'"'`:`"${r}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Pe(e,n,t,r,i){const o=e.line,s=1+t-e.lineStart;return new Vv(n,t,r,o,s,i)}function aS(e,n){const t=e.source.body,r=t.length;let i=n;for(;i<r;){const o=t.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:t.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return lS(e,i);case 33:return Pe(e,D.BANG,i,i+1);case 36:return Pe(e,D.DOLLAR,i,i+1);case 38:return Pe(e,D.AMP,i,i+1);case 40:return Pe(e,D.PAREN_L,i,i+1);case 41:return Pe(e,D.PAREN_R,i,i+1);case 46:if(t.charCodeAt(i+1)===46&&t.charCodeAt(i+2)===46)return Pe(e,D.SPREAD,i,i+3);break;case 58:return Pe(e,D.COLON,i,i+1);case 61:return Pe(e,D.EQUALS,i,i+1);case 64:return Pe(e,D.AT,i,i+1);case 91:return Pe(e,D.BRACKET_L,i,i+1);case 93:return Pe(e,D.BRACKET_R,i,i+1);case 123:return Pe(e,D.BRACE_L,i,i+1);case 124:return Pe(e,D.PIPE,i,i+1);case 125:return Pe(e,D.BRACE_R,i,i+1);case 34:return t.charCodeAt(i+1)===34&&t.charCodeAt(i+2)===34?hS(e,i):uS(e,i)}if(Eo(o)||o===45)return cS(e,i,o);if(wf(o))return mS(e,i);throw Be(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:vi(o)||Ba(t,i)?`Unexpected character: ${Er(e,i)}.`:`Invalid character: ${Er(e,i)}.`)}return Pe(e,D.EOF,r,r)}function lS(e,n){const t=e.source.body,r=t.length;let i=n+1;for(;i<r;){const o=t.charCodeAt(i);if(o===10||o===13)break;if(vi(o))++i;else if(Ba(t,i))i+=2;else break}return Pe(e,D.COMMENT,n,i,t.slice(n+1,i))}function cS(e,n,t){const r=e.source.body;let i=n,o=t,s=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),Eo(o))throw Be(e.source,i,`Invalid number, unexpected digit after 0: ${Er(e,i)}.`)}else i=ql(e,i,o),o=r.charCodeAt(i);if(o===46&&(s=!0,o=r.charCodeAt(++i),i=ql(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(s=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=ql(e,i,o),o=r.charCodeAt(i)),o===46||wf(o))throw Be(e.source,i,`Invalid number, expected digit but got: ${Er(e,i)}.`);return Pe(e,s?D.FLOAT:D.INT,n,i,r.slice(n,i))}function ql(e,n,t){if(!Eo(t))throw Be(e.source,n,`Invalid number, expected digit but got: ${Er(e,n)}.`);const r=e.source.body;let i=n+1;for(;Eo(r.charCodeAt(i));)++i;return i}function uS(e,n){const t=e.source.body,r=t.length;let i=n+1,o=i,s="";for(;i<r;){const a=t.charCodeAt(i);if(a===34)return s+=t.slice(o,i),Pe(e,D.STRING,n,i+1,s);if(a===92){s+=t.slice(o,i);const c=t.charCodeAt(i+1)===117?t.charCodeAt(i+2)===123?fS(e,i):dS(e,i):pS(e,i);s+=c.value,i+=c.size,o=i;continue}if(a===10||a===13)break;if(vi(a))++i;else if(Ba(t,i))i+=2;else throw Be(e.source,i,`Invalid character within String: ${Er(e,i)}.`)}throw Be(e.source,i,"Unterminated string.")}function fS(e,n){const t=e.source.body;let r=0,i=3;for(;i<12;){const o=t.charCodeAt(n+i++);if(o===125){if(i<5||!vi(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|ji(o),r<0)break}throw Be(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+i)}".`)}function dS(e,n){const t=e.source.body,r=xp(t,n+2);if(vi(r))return{value:String.fromCodePoint(r),size:6};if(Qv(r)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const i=xp(t,n+8);if(Hv(i))return{value:String.fromCodePoint(r,i),size:12}}throw Be(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function xp(e,n){return ji(e.charCodeAt(n))<<12|ji(e.charCodeAt(n+1))<<8|ji(e.charCodeAt(n+2))<<4|ji(e.charCodeAt(n+3))}function ji(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function pS(e,n){const t=e.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Be(e.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function hS(e,n){const t=e.source.body,r=t.length;let i=e.lineStart,o=n+3,s=o,a="";const c=[];for(;o<r;){const l=t.charCodeAt(o);if(l===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){a+=t.slice(s,o),c.push(a);const u=Pe(e,D.BLOCK_STRING,n,o+3,tS(c).join(`
`));return e.line+=c.length-1,e.lineStart=i,u}if(l===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){a+=t.slice(s,o),s=o+1,o+=4;continue}if(l===10||l===13){a+=t.slice(s,o),c.push(a),l===13&&t.charCodeAt(o+1)===10?o+=2:++o,a="",s=o,i=o;continue}if(vi(l))++o;else if(Ba(t,o))o+=2;else throw Be(e.source,o,`Invalid character within String: ${Er(e,o)}.`)}throw Be(e.source,o,"Unterminated string.")}function mS(e,n){const t=e.source.body,r=t.length;let i=n+1;for(;i<r;){const o=t.charCodeAt(i);if(Bv(o))++i;else break}return Pe(e,D.NAME,n,i,t.slice(n,i))}const gS=10,Gv=2;function O(e){return Qa(e,[])}function Qa(e,n){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return vS(e,n);default:return String(e)}}function vS(e,n){if(e===null)return"null";if(n.includes(e))return"[Circular]";const t=[...n,e];if(yS(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Qa(r,t)}else if(Array.isArray(e))return ES(e,t);return _S(e,t)}function yS(e){return typeof e.toJSON=="function"}function _S(e,n){const t=Object.entries(e);if(t.length===0)return"{}";if(n.length>Gv)return"["+SS(e)+"]";const r=t.map(([i,o])=>i+": "+Qa(o,n));return"{ "+r.join(", ")+" }"}function ES(e,n){if(e.length===0)return"[]";if(n.length>Gv)return"[Array]";const t=Math.min(gS,e.length),r=e.length-t,i=[];for(let o=0;o<t;++o)i.push(Qa(e[o],n));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function SS(e){const n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof e.constructor=="function"){const t=e.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const Wn=function(n,t){return n instanceof t};class Wv{constructor(n,t="GraphQL request",r={line:1,column:1}){typeof n=="string"||ce(!1,`Body must be a string. Received: ${O(n)}.`),this.body=n,this.name=t,this.locationOffset=r,this.locationOffset.line>0||ce(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ce(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function wS(e){return Wn(e,Wv)}function st(e,n){return new Ha(e,n).parseDocument()}function bS(e,n){const t=new Ha(e,n);t.expectToken(D.SOF);const r=t.parseValueLiteral(!1);return t.expectToken(D.EOF),r}function xoe(e,n){const t=new Ha(e,n);t.expectToken(D.SOF);const r=t.parseConstValueLiteral();return t.expectToken(D.EOF),r}function Noe(e,n){const t=new Ha(e,n);t.expectToken(D.SOF);const r=t.parseTypeReference();return t.expectToken(D.EOF),r}class Ha{constructor(n,t){const r=wS(n)?n:new Wv(n);this._lexer=new oS(r),this._options=t}parseName(){const n=this.expectToken(D.NAME);return this.node(n,{kind:y.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:y.DOCUMENT,definitions:this.many(D.SOF,this.parseDefinition,D.EOF)})}parseDefinition(){if(this.peek(D.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===D.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Be(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(D.BRACE_L))return this.node(n,{kind:y.OPERATION_DEFINITION,operation:nn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let r;return this.peek(D.NAME)&&(r=this.parseName()),this.node(n,{kind:y.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(D.NAME);switch(n.value){case"query":return nn.QUERY;case"mutation":return nn.MUTATION;case"subscription":return nn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(D.PAREN_L,this.parseVariableDefinition,D.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:y.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(D.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(D.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(D.DOLLAR),this.node(n,{kind:y.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:y.SELECTION_SET,selections:this.many(D.BRACE_L,this.parseSelection,D.BRACE_R)})}parseSelection(){return this.peek(D.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let r,i;return this.expectOptionalToken(D.COLON)?(r=t,i=this.parseName()):i=t,this.node(n,{kind:y.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(D.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(D.PAREN_L,t,D.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(t,{kind:y.ARGUMENT,name:r,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(D.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(D.NAME)?this.node(n,{kind:y.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:y.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var n;const t=this._lexer.token;return this.expectKeyword("fragment"),((n=this._options)===null||n===void 0?void 0:n.allowLegacyFragmentVariables)===!0?this.node(t,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case D.BRACKET_L:return this.parseList(n);case D.BRACE_L:return this.parseObject(n);case D.INT:return this._lexer.advance(),this.node(t,{kind:y.INT,value:t.value});case D.FLOAT:return this._lexer.advance(),this.node(t,{kind:y.FLOAT,value:t.value});case D.STRING:case D.BLOCK_STRING:return this.parseStringLiteral();case D.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:y.BOOLEAN,value:!0});case"false":return this.node(t,{kind:y.BOOLEAN,value:!1});case"null":return this.node(t,{kind:y.NULL});default:return this.node(t,{kind:y.ENUM,value:t.value})}case D.DOLLAR:if(n)if(this.expectToken(D.DOLLAR),this._lexer.token.kind===D.NAME){const r=this._lexer.token.value;throw Be(this._lexer.source,t.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this._lexer.advance(),this.node(n,{kind:y.STRING,value:n.value,block:n.kind===D.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:y.LIST,values:this.any(D.BRACKET_L,t,D.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:y.OBJECT,fields:this.any(D.BRACE_L,t,D.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(t,{kind:y.OBJECT_FIELD,name:r,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(D.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(D.AT),this.node(t,{kind:y.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(D.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(D.BRACKET_R),t=this.node(n,{kind:y.LIST_TYPE,type:r})}else t=this.parseNamedType();return this.expectOptionalToken(D.BANG)?this.node(n,{kind:y.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:y.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(D.STRING)||this.peek(D.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);return this.node(n,{kind:y.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(D.COLON);const r=this.parseNamedType();return this.node(n,{kind:y.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(n,{kind:y.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:i})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(n,{kind:y.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:o,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(D.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseFieldDefinition,D.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(D.COLON);const o=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(n,{kind:y.FIELD_DEFINITION,description:t,name:r,arguments:i,type:o,directives:s})}parseArgumentDefs(){return this.optionalMany(D.PAREN_L,this.parseInputValueDef,D.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName();this.expectToken(D.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(D.EQUALS)&&(o=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(n,{kind:y.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:o,directives:s})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(n,{kind:y.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:o,fields:s})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:y.UNION_TYPE_DEFINITION,description:t,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(D.EQUALS)?this.delimitedMany(D.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:y.ENUM_TYPE_DEFINITION,description:t,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(D.BRACE_L,this.parseEnumValueDefinition,D.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(n,{kind:y.ENUM_VALUE_DEFINITION,description:t,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Be(this._lexer.source,this._lexer.token.start,`${fs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:y.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseInputValueDef,D.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===D.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),r=this.optionalMany(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);if(t.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:y.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(n,{kind:y.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:y.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:y.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.UNION_TYPE_EXTENSION,name:t,directives:r,types:i})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.ENUM_TYPE_EXTENSION,name:t,directives:r,values:i})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:y.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:i})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(D.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(n,{kind:y.DIRECTIVE_DEFINITION,description:t,name:r,arguments:i,repeatable:o,locations:s})}parseDirectiveLocations(){return this.delimitedMany(D.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Z,t.value))return t;throw this.unexpected(n)}node(n,t){var r;return((r=this._options)===null||r===void 0?void 0:r.noLocation)!==!0&&(t.loc=new eS(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this._lexer.advance(),t;throw Be(this._lexer.source,t.start,`Expected ${Yv(n)}, found ${fs(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this._lexer.advance(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===D.NAME&&t.value===n)this._lexer.advance();else throw Be(this._lexer.source,t.start,`Expected "${n}", found ${fs(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===D.NAME&&t.value===n?(this._lexer.advance(),!0):!1}unexpected(n){const t=n!=null?n:this._lexer.token;return Be(this._lexer.source,t.start,`Unexpected ${fs(t)}.`)}any(n,t,r){this.expectToken(n);const i=[];for(;!this.expectOptionalToken(r);)i.push(t.call(this));return i}optionalMany(n,t,r){if(this.expectOptionalToken(n)){const i=[];do i.push(t.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(n,t,r){this.expectToken(n);const i=[];do i.push(t.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(n,t){this.expectOptionalToken(n);const r=[];do r.push(t.call(this));while(this.expectOptionalToken(n));return r}}function fs(e){const n=e.value;return Yv(e.kind)+(n!=null?` "${n}"`:"")}function Yv(e){return sS(e)?`"${e}"`:e}const kS=5;function xt(e,n){const[t,r]=n?[e,n]:[void 0,e];let i=" Did you mean ";t&&(i+=t+" ");const o=r.map(c=>`"${c}"`);switch(o.length){case 0:return"";case 1:return i+o[0]+"?";case 2:return i+o[0]+" or "+o[1]+"?"}const s=o.slice(0,kS),a=s.pop();return i+s.join(", ")+", or "+a+"?"}function Np(e){return e}function Sr(e,n){const t=Object.create(null);for(const r of e)t[n(r)]=r;return t}function fr(e,n,t){const r=Object.create(null);for(const i of e)r[n(i)]=t(i);return r}function gt(e,n){const t=Object.create(null);for(const r of Object.keys(e))t[r]=n(e[r],r);return t}function bf(e,n){let t=0,r=0;for(;t<e.length&&r<n.length;){let i=e.charCodeAt(t),o=n.charCodeAt(r);if(ds(i)&&ds(o)){let s=0;do++t,s=s*10+i-nu,i=e.charCodeAt(t);while(ds(i)&&s>0);let a=0;do++r,a=a*10+o-nu,o=n.charCodeAt(r);while(ds(o)&&a>0);if(s<a)return-1;if(s>a)return 1}else{if(i<o)return-1;if(i>o)return 1;++t,++r}}return e.length-n.length}const nu=48,TS=57;function ds(e){return!isNaN(e)&&nu<=e&&e<=TS}function rr(e,n){const t=Object.create(null),r=new xS(e),i=Math.floor(e.length*.4)+1;for(const o of n){const s=r.measure(o,i);s!==void 0&&(t[o]=s)}return Object.keys(t).sort((o,s)=>{const a=t[o]-t[s];return a!==0?a:bf(o,s)})}class xS{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Cp(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const r=n.toLowerCase();if(this._inputLowerCase===r)return 1;let i=Cp(r),o=this._inputArray;if(i.length<o.length){const u=i;i=o,o=u}const s=i.length,a=o.length;if(s-a>t)return;const c=this._rows;for(let u=0;u<=a;u++)c[0][u]=u;for(let u=1;u<=s;u++){const f=c[(u-1)%3],p=c[u%3];let h=p[0]=u;for(let d=1;d<=a;d++){const E=i[u-1]===o[d-1]?0:1;let w=Math.min(f[d]+1,p[d-1]+1,f[d-1]+E);if(u>1&&d>1&&i[u-1]===o[d-2]&&i[u-2]===o[d-1]){const g=c[(u-2)%3][d-2];w=Math.min(w,g+1)}w<h&&(h=w),p[d]=w}if(h>t)return}const l=c[s%3][a];return l<=t?l:void 0}}function Cp(e){const n=e.length,t=new Array(n);for(let r=0;r<n;++r)t[r]=e.charCodeAt(r);return t}function $n(e){if(e==null)return Object.create(null);if(Object.getPrototypeOf(e)===null)return e;const n=Object.create(null);for(const[t,r]of Object.entries(e))n[t]=r;return n}function NS(e){return`"${e.replace(CS,IS)}"`}const CS=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function IS(e){return DS[e.charCodeAt(0)]}const DS=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],$i=Object.freeze({});function Mn(e,n,t=Uv){const r=new Map;for(const g of Object.values(y))r.set(g,So(n,g));let i,o=Array.isArray(e),s=[e],a=-1,c=[],l=e,u,f;const p=[],h=[];do{a++;const g=a===s.length,m=g&&c.length!==0;if(g){if(u=h.length===0?void 0:p[p.length-1],l=f,f=h.pop(),m)if(o){l=l.slice();let S=0;for(const[N,b]of c){const A=N-S;b===null?(l.splice(A,1),S++):l[A]=b}}else{l=Object.defineProperties({},Object.getOwnPropertyDescriptors(l));for(const[S,N]of c)l[S]=N}a=i.index,s=i.keys,c=i.edits,o=i.inArray,i=i.prev}else if(f){if(u=o?a:s[a],l=f[u],l==null)continue;p.push(u)}let v;if(!Array.isArray(l)){var d,E;Kc(l)||ce(!1,`Invalid AST Node: ${O(l)}.`);const S=g?(d=r.get(l.kind))===null||d===void 0?void 0:d.leave:(E=r.get(l.kind))===null||E===void 0?void 0:E.enter;if(v=S==null?void 0:S.call(n,l,u,f,p,h),v===$i)break;if(v===!1){if(!g){p.pop();continue}}else if(v!==void 0&&(c.push([u,v]),!g))if(Kc(v))l=v;else{p.pop();continue}}if(v===void 0&&m&&c.push([u,l]),g)p.pop();else{var w;i={inArray:o,index:a,keys:s,edits:c,prev:i},o=Array.isArray(l),s=o?l:(w=t[l.kind])!==null&&w!==void 0?w:[],a=-1,c=[],f&&h.push(f),f=l}}while(i!==void 0);return c.length!==0?c[c.length-1][1]:e}function Jv(e){const n=new Array(e.length).fill(null),t=Object.create(null);for(const r of Object.values(y)){let i=!1;const o=new Array(e.length).fill(void 0),s=new Array(e.length).fill(void 0);for(let c=0;c<e.length;++c){const{enter:l,leave:u}=So(e[c],r);i||(i=l!=null||u!=null),o[c]=l,s[c]=u}if(!i)continue;const a={enter(...c){const l=c[0];for(let f=0;f<e.length;f++)if(n[f]===null){var u;const p=(u=o[f])===null||u===void 0?void 0:u.apply(e[f],c);if(p===!1)n[f]=l;else if(p===$i)n[f]=$i;else if(p!==void 0)return p}},leave(...c){const l=c[0];for(let f=0;f<e.length;f++)if(n[f]===null){var u;const p=(u=s[f])===null||u===void 0?void 0:u.apply(e[f],c);if(p===$i)n[f]=$i;else if(p!==void 0&&p!==!1)return p}else n[f]===l&&(n[f]=null)}};t[r]=a}return t}function So(e,n){const t=e[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:e.enter,leave:e.leave}}function Coe(e,n,t){const{enter:r,leave:i}=So(e,n);return t?i:r}function we(e){return Mn(e,OS)}const AS=80,OS={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>Q(e.definitions,`

`)},OperationDefinition:{leave(e){const n=re("(",Q(e.variableDefinitions,", "),")"),t=Q([e.operation,Q([e.name,n]),Q(e.directives," ")]," ");return(t==="query"?"":t+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:n,defaultValue:t,directives:r})=>e+": "+n+re(" = ",t)+re(" ",Q(r," "))},SelectionSet:{leave:({selections:e})=>zn(e)},Field:{leave({alias:e,name:n,arguments:t,directives:r,selectionSet:i}){const o=re("",e,": ")+n;let s=o+re("(",Q(t,", "),")");return s.length>AS&&(s=o+re(`(
`,Ls(Q(t,`
`)),`
)`)),Q([s,Q(r," "),i]," ")}},Argument:{leave:({name:e,value:n})=>e+": "+n},FragmentSpread:{leave:({name:e,directives:n})=>"..."+e+re(" ",Q(n," "))},InlineFragment:{leave:({typeCondition:e,directives:n,selectionSet:t})=>Q(["...",re("on ",e),Q(n," "),t]," ")},FragmentDefinition:{leave:({name:e,typeCondition:n,variableDefinitions:t,directives:r,selectionSet:i})=>`fragment ${e}${re("(",Q(t,", "),")")} on ${n} ${re("",Q(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:n})=>n?iS(e):NS(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+Q(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+Q(e,", ")+"}"},ObjectField:{leave:({name:e,value:n})=>e+": "+n},Directive:{leave:({name:e,arguments:n})=>"@"+e+re("(",Q(n,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:n,operationTypes:t})=>re("",e,`
`)+Q(["schema",Q(n," "),zn(t)]," ")},OperationTypeDefinition:{leave:({operation:e,type:n})=>e+": "+n},ScalarTypeDefinition:{leave:({description:e,name:n,directives:t})=>re("",e,`
`)+Q(["scalar",n,Q(t," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:r,fields:i})=>re("",e,`
`)+Q(["type",n,re("implements ",Q(t," & ")),Q(r," "),zn(i)]," ")},FieldDefinition:{leave:({description:e,name:n,arguments:t,type:r,directives:i})=>re("",e,`
`)+n+(Ip(t)?re(`(
`,Ls(Q(t,`
`)),`
)`):re("(",Q(t,", "),")"))+": "+r+re(" ",Q(i," "))},InputValueDefinition:{leave:({description:e,name:n,type:t,defaultValue:r,directives:i})=>re("",e,`
`)+Q([n+": "+t,re("= ",r),Q(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:r,fields:i})=>re("",e,`
`)+Q(["interface",n,re("implements ",Q(t," & ")),Q(r," "),zn(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:n,directives:t,types:r})=>re("",e,`
`)+Q(["union",n,Q(t," "),re("= ",Q(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:n,directives:t,values:r})=>re("",e,`
`)+Q(["enum",n,Q(t," "),zn(r)]," ")},EnumValueDefinition:{leave:({description:e,name:n,directives:t})=>re("",e,`
`)+Q([n,Q(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:n,directives:t,fields:r})=>re("",e,`
`)+Q(["input",n,Q(t," "),zn(r)]," ")},DirectiveDefinition:{leave:({description:e,name:n,arguments:t,repeatable:r,locations:i})=>re("",e,`
`)+"directive @"+n+(Ip(t)?re(`(
`,Ls(Q(t,`
`)),`
)`):re("(",Q(t,", "),")"))+(r?" repeatable":"")+" on "+Q(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:n})=>Q(["extend schema",Q(e," "),zn(n)]," ")},ScalarTypeExtension:{leave:({name:e,directives:n})=>Q(["extend scalar",e,Q(n," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:r})=>Q(["extend type",e,re("implements ",Q(n," & ")),Q(t," "),zn(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:r})=>Q(["extend interface",e,re("implements ",Q(n," & ")),Q(t," "),zn(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:n,types:t})=>Q(["extend union",e,Q(n," "),re("= ",Q(t," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:n,values:t})=>Q(["extend enum",e,Q(n," "),zn(t)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:n,fields:t})=>Q(["extend input",e,Q(n," "),zn(t)]," ")}};function Q(e,n=""){var t;return(t=e==null?void 0:e.filter(r=>r).join(n))!==null&&t!==void 0?t:""}function zn(e){return re(`{
`,Ls(Q(e,`
`)),`
}`)}function re(e,n,t=""){return n!=null&&n!==""?e+n+t:""}function Ls(e){return re("  ",e.replace(/\n/g,`
  `))}function Ip(e){var n;return(n=e==null?void 0:e.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function tu(e,n){switch(e.kind){case y.NULL:return null;case y.INT:return parseInt(e.value,10);case y.FLOAT:return parseFloat(e.value);case y.STRING:case y.ENUM:case y.BOOLEAN:return e.value;case y.LIST:return e.values.map(t=>tu(t,n));case y.OBJECT:return fr(e.fields,t=>t.name.value,t=>tu(t.value,n));case y.VARIABLE:return n==null?void 0:n[e.name.value]}}function Yn(e){if(e!=null||ce(!1,"Must provide name."),typeof e=="string"||ce(!1,"Expected name to be a string."),e.length===0)throw new F("Expected name to be a non-empty string.");for(let n=1;n<e.length;++n)if(!Bv(e.charCodeAt(n)))throw new F(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);if(!wf(e.charCodeAt(0)))throw new F(`Names must start with [_a-zA-Z] but "${e}" does not.`);return e}function FS(e){if(e==="true"||e==="false"||e==="null")throw new F(`Enum values cannot be named: ${e}`);return Yn(e)}function fi(e){return Dt(e)||ve(e)||Ne(e)||bn(e)||hn(e)||Ve(e)||je(e)||se(e)}function Ioe(e){if(!fi(e))throw new Error(`Expected ${O(e)} to be a GraphQL type.`);return e}function Dt(e){return Wn(e,Ct)}function Doe(e){if(!Dt(e))throw new Error(`Expected ${O(e)} to be a GraphQL Scalar type.`);return e}function ve(e){return Wn(e,Sn)}function RS(e){if(!ve(e))throw new Error(`Expected ${O(e)} to be a GraphQL Object type.`);return e}function Ne(e){return Wn(e,wo)}function LS(e){if(!Ne(e))throw new Error(`Expected ${O(e)} to be a GraphQL Interface type.`);return e}function bn(e){return Wn(e,bo)}function Aoe(e){if(!bn(e))throw new Error(`Expected ${O(e)} to be a GraphQL Union type.`);return e}function hn(e){return Wn(e,wr)}function Ooe(e){if(!hn(e))throw new Error(`Expected ${O(e)} to be a GraphQL Enum type.`);return e}function Ve(e){return Wn(e,ua)}function Foe(e){if(!Ve(e))throw new Error(`Expected ${O(e)} to be a GraphQL Input Object type.`);return e}function je(e){return Wn(e,Qe)}function Roe(e){if(!je(e))throw new Error(`Expected ${O(e)} to be a GraphQL List type.`);return e}function se(e){return Wn(e,te)}function Loe(e){if(!se(e))throw new Error(`Expected ${O(e)} to be a GraphQL Non-Null type.`);return e}function yn(e){return Dt(e)||hn(e)||Ve(e)||Ga(e)&&yn(e.ofType)}function Poe(e){if(!yn(e))throw new Error(`Expected ${O(e)} to be a GraphQL input type.`);return e}function gr(e){return Dt(e)||ve(e)||Ne(e)||bn(e)||hn(e)||Ga(e)&&gr(e.ofType)}function Moe(e){if(!gr(e))throw new Error(`Expected ${O(e)} to be a GraphQL output type.`);return e}function at(e){return Dt(e)||hn(e)}function qoe(e){if(!at(e))throw new Error(`Expected ${O(e)} to be a GraphQL leaf type.`);return e}function Nt(e){return ve(e)||Ne(e)||bn(e)}function joe(e){if(!Nt(e))throw new Error(`Expected ${O(e)} to be a GraphQL composite type.`);return e}function Gt(e){return Ne(e)||bn(e)}function $oe(e){if(!Gt(e))throw new Error(`Expected ${O(e)} to be a GraphQL abstract type.`);return e}class Qe{constructor(n){fi(n)||ce(!1,`Expected ${O(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class te{constructor(n){Xv(n)||ce(!1,`Expected ${O(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Ga(e){return je(e)||se(e)}function Voe(e){if(!Ga(e))throw new Error(`Expected ${O(e)} to be a GraphQL wrapping type.`);return e}function Xv(e){return fi(e)&&!se(e)}function PS(e){if(!Xv(e))throw new Error(`Expected ${O(e)} to be a GraphQL nullable type.`);return e}function Zv(e){if(e)return se(e)?e.ofType:e}function Kv(e){return Dt(e)||ve(e)||Ne(e)||bn(e)||hn(e)||Ve(e)}function Uoe(e){if(!Kv(e))throw new Error(`Expected ${O(e)} to be a GraphQL named type.`);return e}function tn(e){if(e){let n=e;for(;Ga(n);)n=n.ofType;return n}}function ey(e){return typeof e=="function"?e():e}function ny(e){return typeof e=="function"?e():e}class Ct{constructor(n){var t,r,i,o;const s=(t=n.parseValue)!==null&&t!==void 0?t:Np;this.name=Yn(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(r=n.serialize)!==null&&r!==void 0?r:Np,this.parseValue=s,this.parseLiteral=(i=n.parseLiteral)!==null&&i!==void 0?i:(a,c)=>s(tu(a,c)),this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||ce(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${O(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||ce(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||ce(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Sn{constructor(n){var t;this.name=Yn(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>ry(n),this._interfaces=()=>ty(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||ce(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${O(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:oy(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ty(e){var n;const t=ey((n=e.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||ce(!1,`${e.name} interfaces must be an Array or a function which returns an Array.`),t}function ry(e){const n=ny(e.fields);return ei(n)||ce(!1,`${e.name} fields must be an object with field names as keys or a function which returns such an object.`),gt(n,(t,r)=>{var i;ei(t)||ce(!1,`${e.name}.${r} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||ce(!1,`${e.name}.${r} field resolver must be a function if provided, but got: ${O(t.resolve)}.`);const o=(i=t.args)!==null&&i!==void 0?i:{};return ei(o)||ce(!1,`${e.name}.${r} args must be an object with argument names as keys.`),{name:Yn(r),description:t.description,type:t.type,args:iy(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:$n(t.extensions),astNode:t.astNode}})}function iy(e){return Object.entries(e).map(([n,t])=>({name:Yn(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:$n(t.extensions),astNode:t.astNode}))}function ei(e){return ot(e)&&!Array.isArray(e)}function oy(e){return gt(e,n=>({description:n.description,type:n.type,args:sy(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function sy(e){return fr(e,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Lo(e){return se(e.type)&&e.defaultValue===void 0}class wo{constructor(n){var t;this.name=Yn(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=ry.bind(void 0,n),this._interfaces=ty.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${O(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:oy(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class bo{constructor(n){var t;this.name=Yn(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=MS.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${O(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function MS(e){const n=ey(e.types);return Array.isArray(n)||ce(!1,`Must provide Array of types or a function which returns such an array for Union ${e.name}.`),n}class wr{constructor(n){var t;this.name=Yn(n.name),this.description=n.description,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=qS(this.name,n.values),this._valueLookup=new Map(this._values.map(r=>[r.value,r])),this._nameLookup=Sr(this._values,r=>r.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new F(`Enum "${this.name}" cannot represent value: ${O(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const r=O(n);throw new F(`Enum "${this.name}" cannot represent non-string value: ${r}.`+ps(this,r))}const t=this.getValue(n);if(t==null)throw new F(`Value "${n}" does not exist in "${this.name}" enum.`+ps(this,n));return t.value}parseLiteral(n,t){if(n.kind!==y.ENUM){const i=we(n);throw new F(`Enum "${this.name}" cannot represent non-enum value: ${i}.`+ps(this,i),n)}const r=this.getValue(n.value);if(r==null){const i=we(n);throw new F(`Value "${i}" does not exist in "${this.name}" enum.`+ps(this,i),n)}return r.value}toConfig(){const n=fr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ps(e,n){const t=e.getValues().map(i=>i.name),r=rr(n,t);return xt("the enum value",r)}function qS(e,n){return ei(n)||ce(!1,`${e} values must be an object with value names as keys.`),Object.entries(n).map(([t,r])=>(ei(r)||ce(!1,`${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${O(r)}.`),{name:FS(t),description:r.description,value:r.value!==void 0?r.value:t,deprecationReason:r.deprecationReason,extensions:$n(r.extensions),astNode:r.astNode}))}class ua{constructor(n){var t;this.name=Yn(n.name),this.description=n.description,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=jS.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=gt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function jS(e){const n=ny(e.fields);return ei(n)||ce(!1,`${e.name} fields must be an object with field names as keys or a function which returns such an object.`),gt(n,(t,r)=>(!("resolve"in t)||ce(!1,`${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`),{name:Yn(r),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:$n(t.extensions),astNode:t.astNode}))}function ay(e){return se(e.type)&&e.defaultValue===void 0}function ru(e,n){return e===n?!0:se(e)&&se(n)||je(e)&&je(n)?ru(e.ofType,n.ofType):!1}function ni(e,n,t){return n===t?!0:se(t)?se(n)?ni(e,n.ofType,t.ofType):!1:se(n)?ni(e,n.ofType,t):je(t)?je(n)?ni(e,n.ofType,t.ofType):!1:je(n)?!1:Gt(t)&&(Ne(n)||ve(n))&&e.isSubType(t,n)}function Dp(e,n,t){return n===t?!0:Gt(n)?Gt(t)?e.getPossibleTypes(n).some(r=>e.isSubType(t,r)):e.isSubType(n,t):Gt(t)?e.isSubType(t,n):!1}const jl=2147483647,$l=-2147483648,$S=new Ct({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(e){const n=Po(e);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new F(`Int cannot represent non-integer value: ${O(n)}`);if(t>jl||t<$l)throw new F("Int cannot represent non 32-bit signed integer value: "+O(n));return t},parseValue(e){if(typeof e!="number"||!Number.isInteger(e))throw new F(`Int cannot represent non-integer value: ${O(e)}`);if(e>jl||e<$l)throw new F(`Int cannot represent non 32-bit signed integer value: ${e}`);return e},parseLiteral(e){if(e.kind!==y.INT)throw new F(`Int cannot represent non-integer value: ${we(e)}`,e);const n=parseInt(e.value,10);if(n>jl||n<$l)throw new F(`Int cannot represent non 32-bit signed integer value: ${e.value}`,e);return n}}),ly=new Ct({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(e){const n=Po(e);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new F(`Float cannot represent non numeric value: ${O(n)}`);return t},parseValue(e){if(typeof e!="number"||!Number.isFinite(e))throw new F(`Float cannot represent non numeric value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.FLOAT&&e.kind!==y.INT)throw new F(`Float cannot represent non numeric value: ${we(e)}`,e);return parseFloat(e.value)}}),Le=new Ct({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(e){const n=Po(e);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new F(`String cannot represent value: ${O(e)}`)},parseValue(e){if(typeof e!="string")throw new F(`String cannot represent a non string value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.STRING)throw new F(`String cannot represent a non string value: ${we(e)}`,e);return e.value}}),Rn=new Ct({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(e){const n=Po(e);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new F(`Boolean cannot represent a non boolean value: ${O(n)}`)},parseValue(e){if(typeof e!="boolean")throw new F(`Boolean cannot represent a non boolean value: ${O(e)}`);return e},parseLiteral(e){if(e.kind!==y.BOOLEAN)throw new F(`Boolean cannot represent a non boolean value: ${we(e)}`,e);return e.value}}),cy=new Ct({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(e){const n=Po(e);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new F(`ID cannot represent value: ${O(e)}`)},parseValue(e){if(typeof e=="string")return e;if(typeof e=="number"&&Number.isInteger(e))return e.toString();throw new F(`ID cannot represent value: ${O(e)}`)},parseLiteral(e){if(e.kind!==y.STRING&&e.kind!==y.INT)throw new F("ID cannot represent a non-string and non-integer value: "+we(e),e);return e.value}}),Wa=Object.freeze([Le,$S,ly,Rn,cy]);function VS(e){return Wa.some(({name:n})=>e.name===n)}function Po(e){if(ot(e)){if(typeof e.valueOf=="function"){const n=e.valueOf();if(!ot(n))return n}if(typeof e.toJSON=="function")return e.toJSON()}return e}function kf(e){return Wn(e,Zt)}function zoe(e){if(!kf(e))throw new Error(`Expected ${O(e)} to be a GraphQL directive.`);return e}class Zt{constructor(n){var t,r;this.name=Yn(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=$n(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||ce(!1,`@${n.name} locations must be an Array.`);const i=(r=n.args)!==null&&r!==void 0?r:{};ot(i)&&!Array.isArray(i)||ce(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=iy(i)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:sy(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const uy=new Zt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[Z.FIELD,Z.FRAGMENT_SPREAD,Z.INLINE_FRAGMENT],args:{if:{type:new te(Rn),description:"Included when true."}}}),fy=new Zt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[Z.FIELD,Z.FRAGMENT_SPREAD,Z.INLINE_FRAGMENT],args:{if:{type:new te(Rn),description:"Skipped when true."}}}),US="No longer supported",Tf=new Zt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[Z.FIELD_DEFINITION,Z.ARGUMENT_DEFINITION,Z.INPUT_FIELD_DEFINITION,Z.ENUM_VALUE],args:{reason:{type:Le,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:US}}}),dy=new Zt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[Z.SCALAR],args:{url:{type:new te(Le),description:"The URL that specifies the behavior of this scalar."}}}),Dr=Object.freeze([uy,fy,Tf,dy]);function Boe(e){return Dr.some(({name:n})=>n===e.name)}function py(e){return typeof e=="object"&&typeof(e==null?void 0:e[Symbol.iterator])=="function"}function Gr(e,n){if(se(n)){const t=Gr(e,n.ofType);return(t==null?void 0:t.kind)===y.NULL?null:t}if(e===null)return{kind:y.NULL};if(e===void 0)return null;if(je(n)){const t=n.ofType;if(py(e)){const r=[];for(const i of e){const o=Gr(i,t);o!=null&&r.push(o)}return{kind:y.LIST,values:r}}return Gr(e,t)}if(Ve(n)){if(!ot(e))return null;const t=[];for(const r of Object.values(n.getFields())){const i=Gr(e[r.name],r.type);i&&t.push({kind:y.OBJECT_FIELD,name:{kind:y.NAME,value:r.name},value:i})}return{kind:y.OBJECT,fields:t}}if(at(n)){const t=n.serialize(e);if(t==null)return null;if(typeof t=="boolean")return{kind:y.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const r=String(t);return Ap.test(r)?{kind:y.INT,value:r}:{kind:y.FLOAT,value:r}}if(typeof t=="string")return hn(n)?{kind:y.ENUM,value:t}:n===cy&&Ap.test(t)?{kind:y.INT,value:t}:{kind:y.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${O(t)}.`)}on(!1,"Unexpected input type: "+O(n))}const Ap=/^-?(?:0|[1-9][0-9]*)$/,Ya=new Sn({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Le,resolve:e=>e.description},types:{description:"A list of all types supported by this server.",type:new te(new Qe(new te(Dn))),resolve(e){return Object.values(e.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new te(Dn),resolve:e=>e.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Dn,resolve:e=>e.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Dn,resolve:e=>e.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new te(new Qe(new te(xf))),resolve:e=>e.getDirectives()}})}),xf=new Sn({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new te(Le),resolve:e=>e.name},description:{type:Le,resolve:e=>e.description},isRepeatable:{type:new te(Rn),resolve:e=>e.isRepeatable},locations:{type:new te(new Qe(new te(Nf))),resolve:e=>e.locations},args:{type:new te(new Qe(new te(Mo))),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){return n?e.args:e.args.filter(t=>t.deprecationReason==null)}}})}),Nf=new wr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:Z.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:Z.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:Z.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:Z.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:Z.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:Z.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:Z.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:Z.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:Z.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:Z.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:Z.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:Z.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:Z.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:Z.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:Z.UNION,description:"Location adjacent to a union definition."},ENUM:{value:Z.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:Z.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:Z.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:Z.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Dn=new Sn({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new te(Df),resolve(e){if(Dt(e))return me.SCALAR;if(ve(e))return me.OBJECT;if(Ne(e))return me.INTERFACE;if(bn(e))return me.UNION;if(hn(e))return me.ENUM;if(Ve(e))return me.INPUT_OBJECT;if(je(e))return me.LIST;if(se(e))return me.NON_NULL;on(!1,`Unexpected type: "${O(e)}".`)}},name:{type:Le,resolve:e=>"name"in e?e.name:void 0},description:{type:Le,resolve:e=>"description"in e?e.description:void 0},specifiedByURL:{type:Le,resolve:e=>"specifiedByURL"in e?e.specifiedByURL:void 0},fields:{type:new Qe(new te(Cf)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(ve(e)||Ne(e)){const t=Object.values(e.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},interfaces:{type:new Qe(new te(Dn)),resolve(e){if(ve(e)||Ne(e))return e.getInterfaces()}},possibleTypes:{type:new Qe(new te(Dn)),resolve(e,n,t,{schema:r}){if(Gt(e))return r.getPossibleTypes(e)}},enumValues:{type:new Qe(new te(If)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(hn(e)){const t=e.getValues();return n?t:t.filter(r=>r.deprecationReason==null)}}},inputFields:{type:new Qe(new te(Mo)),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){if(Ve(e)){const t=Object.values(e.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},ofType:{type:Dn,resolve:e=>"ofType"in e?e.ofType:void 0}})}),Cf=new Sn({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new te(Le),resolve:e=>e.name},description:{type:Le,resolve:e=>e.description},args:{type:new te(new Qe(new te(Mo))),args:{includeDeprecated:{type:Rn,defaultValue:!1}},resolve(e,{includeDeprecated:n}){return n?e.args:e.args.filter(t=>t.deprecationReason==null)}},type:{type:new te(Dn),resolve:e=>e.type},isDeprecated:{type:new te(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Le,resolve:e=>e.deprecationReason}})}),Mo=new Sn({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new te(Le),resolve:e=>e.name},description:{type:Le,resolve:e=>e.description},type:{type:new te(Dn),resolve:e=>e.type},defaultValue:{type:Le,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(e){const{type:n,defaultValue:t}=e,r=Gr(t,n);return r?we(r):null}},isDeprecated:{type:new te(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Le,resolve:e=>e.deprecationReason}})}),If=new Sn({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new te(Le),resolve:e=>e.name},description:{type:Le,resolve:e=>e.description},isDeprecated:{type:new te(Rn),resolve:e=>e.deprecationReason!=null},deprecationReason:{type:Le,resolve:e=>e.deprecationReason}})});let me;(function(e){e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.INPUT_OBJECT="INPUT_OBJECT",e.LIST="LIST",e.NON_NULL="NON_NULL"})(me||(me={}));const Df=new wr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:me.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:me.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:me.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:me.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:me.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:me.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:me.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:me.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}}),iu={name:"__schema",type:new te(Ya),description:"Access the current type schema of this server.",args:[],resolve:(e,n,t,{schema:r})=>r,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},ou={name:"__type",type:Dn,description:"Request the type information of a single type.",args:[{name:"name",description:void 0,type:new te(Le),defaultValue:void 0,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0}],resolve:(e,{name:n},t,{schema:r})=>r.getType(n),deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},su={name:"__typename",type:new te(Le),description:"The name of the current Object type at runtime.",args:[],resolve:(e,n,t,{parentType:r})=>r.name,deprecationReason:void 0,extensions:Object.create(null),astNode:void 0},qo=Object.freeze([Ya,xf,Nf,Dn,Cf,Mo,If,Df]);function Af(e){return qo.some(({name:n})=>e.name===n)}var Qoe=Object.freeze(Object.defineProperty({__proto__:null,__Schema:Ya,__Directive:xf,__DirectiveLocation:Nf,__Type:Dn,__Field:Cf,__InputValue:Mo,__EnumValue:If,get TypeKind(){return me},__TypeKind:Df,SchemaMetaFieldDef:iu,TypeMetaFieldDef:ou,TypeNameMetaFieldDef:su,introspectionTypes:qo,isIntrospectionType:Af},Symbol.toStringTag,{value:"Module"}));function zS(e){return Wn(e,Ja)}function hy(e){if(!zS(e))throw new Error(`Expected ${O(e)} to be a GraphQL schema.`);return e}class Ja{constructor(n){var t,r;this.__validationErrors=n.assumeValid===!0?[]:void 0,ot(n)||ce(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||ce(!1,`"types" must be Array if provided but got: ${O(n.types)}.`),!n.directives||Array.isArray(n.directives)||ce(!1,`"directives" must be Array if provided but got: ${O(n.directives)}.`),this.description=n.description,this.extensions=$n(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(r=n.directives)!==null&&r!==void 0?r:Dr;const i=new Set(n.types);if(n.types!=null)for(const o of n.types)i.delete(o),Hn(o,i);this._queryType!=null&&Hn(this._queryType,i),this._mutationType!=null&&Hn(this._mutationType,i),this._subscriptionType!=null&&Hn(this._subscriptionType,i);for(const o of this._directives)if(kf(o))for(const s of o.args)Hn(s.type,i);Hn(Ya,i),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of i){if(o==null)continue;const s=o.name;if(s||ce(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[s]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${s}".`);if(this._typeMap[s]=o,Ne(o)){for(const a of o.getInterfaces())if(Ne(a)){let c=this._implementationsMap[a.name];c===void 0&&(c=this._implementationsMap[a.name]={objects:[],interfaces:[]}),c.interfaces.push(o)}}else if(ve(o)){for(const a of o.getInterfaces())if(Ne(a)){let c=this._implementationsMap[a.name];c===void 0&&(c=this._implementationsMap[a.name]={objects:[],interfaces:[]}),c.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case nn.QUERY:return this.getQueryType();case nn.MUTATION:return this.getMutationType();case nn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return bn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t!=null?t:{objects:[],interfaces:[]}}isSubType(n,t){let r=this._subTypeMap[n.name];if(r===void 0){if(r=Object.create(null),bn(n))for(const i of n.getTypes())r[i.name]=!0;else{const i=this.getImplementations(n);for(const o of i.objects)r[o.name]=!0;for(const o of i.interfaces)r[o.name]=!0}this._subTypeMap[n.name]=r}return r[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Hn(e,n){const t=tn(e);if(!n.has(t)){if(n.add(t),bn(t))for(const r of t.getTypes())Hn(r,n);else if(ve(t)||Ne(t)){for(const r of t.getInterfaces())Hn(r,n);for(const r of Object.values(t.getFields())){Hn(r.type,n);for(const i of r.args)Hn(i.type,n)}}else if(Ve(t))for(const r of Object.values(t.getFields()))Hn(r.type,n)}return n}function Ps(e){if(hy(e),e.__validationErrors)return e.__validationErrors;const n=new QS(e);HS(n),GS(n),WS(n);const t=n.getErrors();return e.__validationErrors=t,t}function BS(e){const n=Ps(e);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}class QS{constructor(n){this._errors=[],this.schema=n}reportError(n,t){const r=Array.isArray(t)?t.filter(Boolean):t;this._errors.push(new F(n,r))}getErrors(){return this._errors}}function HS(e){const n=e.schema,t=n.getQueryType();if(!t)e.reportError("Query root type must be provided.",n.astNode);else if(!ve(t)){var r;e.reportError(`Query root type must be Object type, it cannot be ${O(t)}.`,(r=Vl(n,nn.QUERY))!==null&&r!==void 0?r:t.astNode)}const i=n.getMutationType();if(i&&!ve(i)){var o;e.reportError(`Mutation root type must be Object type if provided, it cannot be ${O(i)}.`,(o=Vl(n,nn.MUTATION))!==null&&o!==void 0?o:i.astNode)}const s=n.getSubscriptionType();if(s&&!ve(s)){var a;e.reportError(`Subscription root type must be Object type if provided, it cannot be ${O(s)}.`,(a=Vl(n,nn.SUBSCRIPTION))!==null&&a!==void 0?a:s.astNode)}}function Vl(e,n){var t;return(t=[e.astNode,...e.extensionASTNodes].flatMap(r=>{var i;return(i=r==null?void 0:r.operationTypes)!==null&&i!==void 0?i:[]}).find(r=>r.operation===n))===null||t===void 0?void 0:t.type}function GS(e){for(const t of e.schema.getDirectives()){if(!kf(t)){e.reportError(`Expected directive but got: ${O(t)}.`,t==null?void 0:t.astNode);continue}br(e,t);for(const r of t.args)if(br(e,r),yn(r.type)||e.reportError(`The type of @${t.name}(${r.name}:) must be Input Type but got: ${O(r.type)}.`,r.astNode),Lo(r)&&r.deprecationReason!=null){var n;e.reportError(`Required argument @${t.name}(${r.name}:) cannot be deprecated.`,[Of(r.astNode),(n=r.astNode)===null||n===void 0?void 0:n.type])}}}function br(e,n){n.name.startsWith("__")&&e.reportError(`Name "${n.name}" must not begin with "__", which is reserved by GraphQL introspection.`,n.astNode)}function WS(e){const n=ew(e),t=e.schema.getTypeMap();for(const r of Object.values(t)){if(!Kv(r)){e.reportError(`Expected GraphQL named type but got: ${O(r)}.`,r.astNode);continue}Af(r)||br(e,r),ve(r)||Ne(r)?(Op(e,r),Fp(e,r)):bn(r)?XS(e,r):hn(r)?ZS(e,r):Ve(r)&&(KS(e,r),n(r))}}function Op(e,n){const t=Object.values(n.getFields());t.length===0&&e.reportError(`Type ${n.name} must define one or more fields.`,[n.astNode,...n.extensionASTNodes]);for(const s of t){if(br(e,s),!gr(s.type)){var r;e.reportError(`The type of ${n.name}.${s.name} must be Output Type but got: ${O(s.type)}.`,(r=s.astNode)===null||r===void 0?void 0:r.type)}for(const a of s.args){const c=a.name;if(br(e,a),!yn(a.type)){var i;e.reportError(`The type of ${n.name}.${s.name}(${c}:) must be Input Type but got: ${O(a.type)}.`,(i=a.astNode)===null||i===void 0?void 0:i.type)}if(Lo(a)&&a.deprecationReason!=null){var o;e.reportError(`Required argument ${n.name}.${s.name}(${c}:) cannot be deprecated.`,[Of(a.astNode),(o=a.astNode)===null||o===void 0?void 0:o.type])}}}}function Fp(e,n){const t=Object.create(null);for(const r of n.getInterfaces()){if(!Ne(r)){e.reportError(`Type ${O(n)} must only implement Interface types, it cannot implement ${O(r)}.`,Xi(n,r));continue}if(n===r){e.reportError(`Type ${n.name} cannot implement itself because it would create a circular reference.`,Xi(n,r));continue}if(t[r.name]){e.reportError(`Type ${n.name} can only implement ${r.name} once.`,Xi(n,r));continue}t[r.name]=!0,JS(e,n,r),YS(e,n,r)}}function YS(e,n,t){const r=n.getFields();for(const c of Object.values(t.getFields())){const l=c.name,u=r[l];if(!u){e.reportError(`Interface field ${t.name}.${l} expected but ${n.name} does not provide it.`,[c.astNode,n.astNode,...n.extensionASTNodes]);continue}if(!ni(e.schema,u.type,c.type)){var i,o;e.reportError(`Interface field ${t.name}.${l} expects type ${O(c.type)} but ${n.name}.${l} is type ${O(u.type)}.`,[(i=c.astNode)===null||i===void 0?void 0:i.type,(o=u.astNode)===null||o===void 0?void 0:o.type])}for(const f of c.args){const p=f.name,h=u.args.find(d=>d.name===p);if(!h){e.reportError(`Interface field argument ${t.name}.${l}(${p}:) expected but ${n.name}.${l} does not provide it.`,[f.astNode,u.astNode]);continue}if(!ru(f.type,h.type)){var s,a;e.reportError(`Interface field argument ${t.name}.${l}(${p}:) expects type ${O(f.type)} but ${n.name}.${l}(${p}:) is type ${O(h.type)}.`,[(s=f.astNode)===null||s===void 0?void 0:s.type,(a=h.astNode)===null||a===void 0?void 0:a.type])}}for(const f of u.args){const p=f.name;!c.args.find(d=>d.name===p)&&Lo(f)&&e.reportError(`Object field ${n.name}.${l} includes required argument ${p} that is missing from the Interface field ${t.name}.${l}.`,[f.astNode,c.astNode])}}}function JS(e,n,t){const r=n.getInterfaces();for(const i of t.getInterfaces())r.includes(i)||e.reportError(i===n?`Type ${n.name} cannot implement ${t.name} because it would create a circular reference.`:`Type ${n.name} must implement ${i.name} because it is implemented by ${t.name}.`,[...Xi(t,i),...Xi(n,t)])}function XS(e,n){const t=n.getTypes();t.length===0&&e.reportError(`Union type ${n.name} must define one or more member types.`,[n.astNode,...n.extensionASTNodes]);const r=Object.create(null);for(const i of t){if(r[i.name]){e.reportError(`Union type ${n.name} can only include type ${i.name} once.`,Rp(n,i.name));continue}r[i.name]=!0,ve(i)||e.reportError(`Union type ${n.name} can only include Object types, it cannot include ${O(i)}.`,Rp(n,String(i)))}}function ZS(e,n){const t=n.getValues();t.length===0&&e.reportError(`Enum type ${n.name} must define one or more values.`,[n.astNode,...n.extensionASTNodes]);for(const r of t)br(e,r)}function KS(e,n){const t=Object.values(n.getFields());t.length===0&&e.reportError(`Input Object type ${n.name} must define one or more fields.`,[n.astNode,...n.extensionASTNodes]);for(const o of t){if(br(e,o),!yn(o.type)){var r;e.reportError(`The type of ${n.name}.${o.name} must be Input Type but got: ${O(o.type)}.`,(r=o.astNode)===null||r===void 0?void 0:r.type)}if(ay(o)&&o.deprecationReason!=null){var i;e.reportError(`Required input field ${n.name}.${o.name} cannot be deprecated.`,[Of(o.astNode),(i=o.astNode)===null||i===void 0?void 0:i.type])}}}function ew(e){const n=Object.create(null),t=[],r=Object.create(null);return i;function i(o){if(n[o.name])return;n[o.name]=!0,r[o.name]=t.length;const s=Object.values(o.getFields());for(const a of s)if(se(a.type)&&Ve(a.type.ofType)){const c=a.type.ofType,l=r[c.name];if(t.push(a),l===void 0)i(c);else{const u=t.slice(l),f=u.map(p=>p.name).join(".");e.reportError(`Cannot reference Input Object "${c.name}" within itself through a series of non-null fields: "${f}".`,u.map(p=>p.astNode))}t.pop()}r[o.name]=void 0}}function Xi(e,n){const{astNode:t,extensionASTNodes:r}=e;return(t!=null?[t,...r]:r).flatMap(o=>{var s;return(s=o.interfaces)!==null&&s!==void 0?s:[]}).filter(o=>o.name.value===n.name)}function Rp(e,n){const{astNode:t,extensionASTNodes:r}=e;return(t!=null?[t,...r]:r).flatMap(o=>{var s;return(s=o.types)!==null&&s!==void 0?s:[]}).filter(o=>o.name.value===n)}function Of(e){var n;return e==null||(n=e.directives)===null||n===void 0?void 0:n.find(t=>t.name.value===Tf.name)}function mn(e,n){switch(n.kind){case y.LIST_TYPE:{const t=mn(e,n.type);return t&&new Qe(t)}case y.NON_NULL_TYPE:{const t=mn(e,n.type);return t&&new te(t)}case y.NAMED_TYPE:return e.getType(n.name.value)}}class Xa{constructor(n,t,r){this._schema=n,this._typeStack=[],this._parentTypeStack=[],this._inputTypeStack=[],this._fieldDefStack=[],this._defaultValueStack=[],this._directive=null,this._argument=null,this._enumValue=null,this._getFieldDef=r!=null?r:nw,t&&(yn(t)&&this._inputTypeStack.push(t),Nt(t)&&this._parentTypeStack.push(t),gr(t)&&this._typeStack.push(t))}get[Symbol.toStringTag](){return"TypeInfo"}getType(){if(this._typeStack.length>0)return this._typeStack[this._typeStack.length-1]}getParentType(){if(this._parentTypeStack.length>0)return this._parentTypeStack[this._parentTypeStack.length-1]}getInputType(){if(this._inputTypeStack.length>0)return this._inputTypeStack[this._inputTypeStack.length-1]}getParentInputType(){if(this._inputTypeStack.length>1)return this._inputTypeStack[this._inputTypeStack.length-2]}getFieldDef(){if(this._fieldDefStack.length>0)return this._fieldDefStack[this._fieldDefStack.length-1]}getDefaultValue(){if(this._defaultValueStack.length>0)return this._defaultValueStack[this._defaultValueStack.length-1]}getDirective(){return this._directive}getArgument(){return this._argument}getEnumValue(){return this._enumValue}enter(n){const t=this._schema;switch(n.kind){case y.SELECTION_SET:{const i=tn(this.getType());this._parentTypeStack.push(Nt(i)?i:void 0);break}case y.FIELD:{const i=this.getParentType();let o,s;i&&(o=this._getFieldDef(t,i,n),o&&(s=o.type)),this._fieldDefStack.push(o),this._typeStack.push(gr(s)?s:void 0);break}case y.DIRECTIVE:this._directive=t.getDirective(n.name.value);break;case y.OPERATION_DEFINITION:{const i=t.getRootType(n.operation);this._typeStack.push(ve(i)?i:void 0);break}case y.INLINE_FRAGMENT:case y.FRAGMENT_DEFINITION:{const i=n.typeCondition,o=i?mn(t,i):tn(this.getType());this._typeStack.push(gr(o)?o:void 0);break}case y.VARIABLE_DEFINITION:{const i=mn(t,n.type);this._inputTypeStack.push(yn(i)?i:void 0);break}case y.ARGUMENT:{var r;let i,o;const s=(r=this.getDirective())!==null&&r!==void 0?r:this.getFieldDef();s&&(i=s.args.find(a=>a.name===n.name.value),i&&(o=i.type)),this._argument=i,this._defaultValueStack.push(i?i.defaultValue:void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.LIST:{const i=Zv(this.getInputType()),o=je(i)?i.ofType:i;this._defaultValueStack.push(void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.OBJECT_FIELD:{const i=tn(this.getInputType());let o,s;Ve(i)&&(s=i.getFields()[n.name.value],s&&(o=s.type)),this._defaultValueStack.push(s?s.defaultValue:void 0),this._inputTypeStack.push(yn(o)?o:void 0);break}case y.ENUM:{const i=tn(this.getInputType());let o;hn(i)&&(o=i.getValue(n.value)),this._enumValue=o;break}}}leave(n){switch(n.kind){case y.SELECTION_SET:this._parentTypeStack.pop();break;case y.FIELD:this._fieldDefStack.pop(),this._typeStack.pop();break;case y.DIRECTIVE:this._directive=null;break;case y.OPERATION_DEFINITION:case y.INLINE_FRAGMENT:case y.FRAGMENT_DEFINITION:this._typeStack.pop();break;case y.VARIABLE_DEFINITION:this._inputTypeStack.pop();break;case y.ARGUMENT:this._argument=null,this._defaultValueStack.pop(),this._inputTypeStack.pop();break;case y.LIST:case y.OBJECT_FIELD:this._defaultValueStack.pop(),this._inputTypeStack.pop();break;case y.ENUM:this._enumValue=null;break}}}function nw(e,n,t){const r=t.name.value;if(r===iu.name&&e.getQueryType()===n)return iu;if(r===ou.name&&e.getQueryType()===n)return ou;if(r===su.name&&Nt(n))return su;if(ve(n)||Ne(n))return n.getFields()[r]}function Ff(e,n){return{enter(...t){const r=t[0];e.enter(r);const i=So(n,r.kind).enter;if(i){const o=i.apply(n,t);return o!==void 0&&(e.leave(r),Kc(o)&&e.enter(o)),o}},leave(...t){const r=t[0],i=So(n,r.kind).leave;let o;return i&&(o=i.apply(n,t)),e.leave(r),o}}}function Hoe(e){return Rf(e)||my(e)||gy(e)}function Rf(e){return e.kind===y.OPERATION_DEFINITION||e.kind===y.FRAGMENT_DEFINITION}function Goe(e){return e.kind===y.FIELD||e.kind===y.FRAGMENT_SPREAD||e.kind===y.INLINE_FRAGMENT}function tw(e){return e.kind===y.VARIABLE||e.kind===y.INT||e.kind===y.FLOAT||e.kind===y.STRING||e.kind===y.BOOLEAN||e.kind===y.NULL||e.kind===y.ENUM||e.kind===y.LIST||e.kind===y.OBJECT}function Lp(e){return tw(e)&&(e.kind===y.LIST?e.values.some(Lp):e.kind===y.OBJECT?e.fields.some(n=>Lp(n.value)):e.kind!==y.VARIABLE)}function Woe(e){return e.kind===y.NAMED_TYPE||e.kind===y.LIST_TYPE||e.kind===y.NON_NULL_TYPE}function my(e){return e.kind===y.SCHEMA_DEFINITION||jo(e)||e.kind===y.DIRECTIVE_DEFINITION}function jo(e){return e.kind===y.SCALAR_TYPE_DEFINITION||e.kind===y.OBJECT_TYPE_DEFINITION||e.kind===y.INTERFACE_TYPE_DEFINITION||e.kind===y.UNION_TYPE_DEFINITION||e.kind===y.ENUM_TYPE_DEFINITION||e.kind===y.INPUT_OBJECT_TYPE_DEFINITION}function gy(e){return e.kind===y.SCHEMA_EXTENSION||Lf(e)}function Lf(e){return e.kind===y.SCALAR_TYPE_EXTENSION||e.kind===y.OBJECT_TYPE_EXTENSION||e.kind===y.INTERFACE_TYPE_EXTENSION||e.kind===y.UNION_TYPE_EXTENSION||e.kind===y.ENUM_TYPE_EXTENSION||e.kind===y.INPUT_OBJECT_TYPE_EXTENSION}function vy(e){return{Document(n){for(const t of n.definitions)if(!Rf(t)){const r=t.kind===y.SCHEMA_DEFINITION||t.kind===y.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';e.reportError(new F(`The ${r} definition is not executable.`,t))}return!1}}}function rw(e){return{Field(n){const t=e.getParentType();if(t&&!e.getFieldDef()){const i=e.getSchema(),o=n.name.value;let s=xt("to use an inline fragment on",iw(i,t,o));s===""&&(s=xt(ow(t,o))),e.reportError(new F(`Cannot query field "${o}" on type "${t.name}".`+s,n))}}}}function iw(e,n,t){if(!Gt(n))return[];const r=new Set,i=Object.create(null);for(const s of e.getPossibleTypes(n))if(!!s.getFields()[t]){r.add(s),i[s.name]=1;for(const a of s.getInterfaces()){var o;!a.getFields()[t]||(r.add(a),i[a.name]=((o=i[a.name])!==null&&o!==void 0?o:0)+1)}}return[...r].sort((s,a)=>{const c=i[a.name]-i[s.name];return c!==0?c:Ne(s)&&e.isSubType(s,a)?-1:Ne(a)&&e.isSubType(a,s)?1:bf(s.name,a.name)}).map(s=>s.name)}function ow(e,n){if(ve(e)||Ne(e)){const t=Object.keys(e.getFields());return rr(n,t)}return[]}function sw(e){return{InlineFragment(n){const t=n.typeCondition;if(t){const r=mn(e.getSchema(),t);if(r&&!Nt(r)){const i=we(t);e.reportError(new F(`Fragment cannot condition on non composite type "${i}".`,t))}}},FragmentDefinition(n){const t=mn(e.getSchema(),n.typeCondition);if(t&&!Nt(t)){const r=we(n.typeCondition);e.reportError(new F(`Fragment "${n.name.value}" cannot condition on non composite type "${r}".`,n.typeCondition))}}}}function aw(e){return De(oe({},yy(e)),{Argument(n){const t=e.getArgument(),r=e.getFieldDef(),i=e.getParentType();if(!t&&r&&i){const o=n.name.value,s=r.args.map(c=>c.name),a=rr(o,s);e.reportError(new F(`Unknown argument "${o}" on field "${i.name}.${r.name}".`+xt(a),n))}}})}function yy(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Dr;for(const s of r)n[s.name]=s.args.map(a=>a.name);const i=e.getDocument().definitions;for(const s of i)if(s.kind===y.DIRECTIVE_DEFINITION){var o;const a=(o=s.arguments)!==null&&o!==void 0?o:[];n[s.name.value]=a.map(c=>c.name.value)}return{Directive(s){const a=s.name.value,c=n[a];if(s.arguments&&c)for(const l of s.arguments){const u=l.name.value;if(!c.includes(u)){const f=rr(u,c);e.reportError(new F(`Unknown argument "${u}" on directive "@${a}".`+xt(f),l))}}return!1}}}function Pf(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Dr;for(const o of r)n[o.name]=o.locations;const i=e.getDocument().definitions;for(const o of i)o.kind===y.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(s=>s.value));return{Directive(o,s,a,c,l){const u=o.name.value,f=n[u];if(!f){e.reportError(new F(`Unknown directive "@${u}".`,o));return}const p=lw(l);p&&!f.includes(p)&&e.reportError(new F(`Directive "@${u}" may not be used on ${p}.`,o))}}}function lw(e){const n=e[e.length-1];switch("kind"in n||on(!1),n.kind){case y.OPERATION_DEFINITION:return cw(n.operation);case y.FIELD:return Z.FIELD;case y.FRAGMENT_SPREAD:return Z.FRAGMENT_SPREAD;case y.INLINE_FRAGMENT:return Z.INLINE_FRAGMENT;case y.FRAGMENT_DEFINITION:return Z.FRAGMENT_DEFINITION;case y.VARIABLE_DEFINITION:return Z.VARIABLE_DEFINITION;case y.SCHEMA_DEFINITION:case y.SCHEMA_EXTENSION:return Z.SCHEMA;case y.SCALAR_TYPE_DEFINITION:case y.SCALAR_TYPE_EXTENSION:return Z.SCALAR;case y.OBJECT_TYPE_DEFINITION:case y.OBJECT_TYPE_EXTENSION:return Z.OBJECT;case y.FIELD_DEFINITION:return Z.FIELD_DEFINITION;case y.INTERFACE_TYPE_DEFINITION:case y.INTERFACE_TYPE_EXTENSION:return Z.INTERFACE;case y.UNION_TYPE_DEFINITION:case y.UNION_TYPE_EXTENSION:return Z.UNION;case y.ENUM_TYPE_DEFINITION:case y.ENUM_TYPE_EXTENSION:return Z.ENUM;case y.ENUM_VALUE_DEFINITION:return Z.ENUM_VALUE;case y.INPUT_OBJECT_TYPE_DEFINITION:case y.INPUT_OBJECT_TYPE_EXTENSION:return Z.INPUT_OBJECT;case y.INPUT_VALUE_DEFINITION:{const t=e[e.length-3];return"kind"in t||on(!1),t.kind===y.INPUT_OBJECT_TYPE_DEFINITION?Z.INPUT_FIELD_DEFINITION:Z.ARGUMENT_DEFINITION}default:on(!1,"Unexpected kind: "+O(n.kind))}}function cw(e){switch(e){case nn.QUERY:return Z.QUERY;case nn.MUTATION:return Z.MUTATION;case nn.SUBSCRIPTION:return Z.SUBSCRIPTION}}function _y(e){return{FragmentSpread(n){const t=n.name.value;e.getFragment(t)||e.reportError(new F(`Unknown fragment "${t}".`,n.name))}}}function Mf(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);for(const o of e.getDocument().definitions)jo(o)&&(r[o.name.value]=!0);const i=[...Object.keys(t),...Object.keys(r)];return{NamedType(o,s,a,c,l){const u=o.name.value;if(!t[u]&&!r[u]){var f;const p=(f=l[2])!==null&&f!==void 0?f:a,h=p!=null&&uw(p);if(h&&Pp.includes(u))return;const d=rr(u,h?Pp.concat(i):i);e.reportError(new F(`Unknown type "${u}".`+xt(d),o))}}}}const Pp=[...Wa,...qo].map(e=>e.name);function uw(e){return"kind"in e&&(my(e)||gy(e))}function fw(e){let n=0;return{Document(t){n=t.definitions.filter(r=>r.kind===y.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&e.reportError(new F("This anonymous operation must be the only defined operation.",t))}}}function Ey(e){var n,t,r;const i=e.getSchema(),o=(n=(t=(r=i==null?void 0:i.astNode)!==null&&r!==void 0?r:i==null?void 0:i.getQueryType())!==null&&t!==void 0?t:i==null?void 0:i.getMutationType())!==null&&n!==void 0?n:i==null?void 0:i.getSubscriptionType();let s=0;return{SchemaDefinition(a){if(o){e.reportError(new F("Cannot define a new schema within a schema extension.",a));return}s>0&&e.reportError(new F("Must provide only one schema definition.",a)),++s}}}function dw(e){const n=Object.create(null),t=[],r=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return i(o),!1}};function i(o){if(n[o.name.value])return;const s=o.name.value;n[s]=!0;const a=e.getFragmentSpreads(o.selectionSet);if(a.length!==0){r[s]=t.length;for(const c of a){const l=c.name.value,u=r[l];if(t.push(c),u===void 0){const f=e.getFragment(l);f&&i(f)}else{const f=t.slice(u),p=f.slice(0,-1).map(h=>'"'+h.name.value+'"').join(", ");e.reportError(new F(`Cannot spread fragment "${l}" within itself`+(p!==""?` via ${p}.`:"."),f))}t.pop()}r[s]=void 0}}}function pw(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i}of r){const o=i.name.value;n[o]!==!0&&e.reportError(new F(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,[i,t]))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function Sy(e){const n=[],t=[];return{OperationDefinition(r){return n.push(r),!1},FragmentDefinition(r){return t.push(r),!1},Document:{leave(){const r=Object.create(null);for(const i of n)for(const o of e.getRecursivelyReferencedFragments(i))r[o.name.value]=!0;for(const i of t){const o=i.name.value;r[o]!==!0&&e.reportError(new F(`Fragment "${o}" is never used.`,i))}}}}}function hw(e){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const r=Object.create(null),i=e.getRecursiveVariableUsages(t);for(const{node:o}of i)r[o.name.value]=!0;for(const o of n){const s=o.variable.name.value;r[s]!==!0&&e.reportError(new F(t.name?`Variable "$${s}" is never used in operation "${t.name.value}".`:`Variable "$${s}" is never used.`,o))}}},VariableDefinition(t){n.push(t)}}}function qf(e){switch(e.kind){case y.OBJECT:return De(oe({},e),{fields:mw(e.fields)});case y.LIST:return De(oe({},e),{values:e.values.map(qf)});case y.INT:case y.FLOAT:case y.STRING:case y.BOOLEAN:case y.NULL:case y.ENUM:case y.VARIABLE:return e}}function mw(e){return e.map(n=>De(oe({},n),{value:qf(n.value)})).sort((n,t)=>bf(n.name.value,t.name.value))}function wy(e){return Array.isArray(e)?e.map(([n,t])=>`subfields "${n}" conflict because `+wy(t)).join(" and "):e}function gw(e){const n=new Sw,t=new Map;return{SelectionSet(r){const i=vw(e,t,n,e.getParentType(),r);for(const[[o,s],a,c]of i){const l=wy(s);e.reportError(new F(`Fields "${o}" conflict because ${l}. Use different aliases on the fields to fetch both if this was intentional.`,a.concat(c)))}}}}function vw(e,n,t,r,i){const o=[],[s,a]=pa(e,n,r,i);if(_w(e,o,n,t,s),a.length!==0)for(let c=0;c<a.length;c++){fa(e,o,n,t,!1,s,a[c]);for(let l=c+1;l<a.length;l++)da(e,o,n,t,!1,a[c],a[l])}return o}function fa(e,n,t,r,i,o,s){const a=e.getFragment(s);if(!a)return;const[c,l]=lu(e,t,a);if(o!==c){jf(e,n,t,r,i,o,c);for(const u of l)r.has(u,s,i)||(r.add(u,s,i),fa(e,n,t,r,i,o,u))}}function da(e,n,t,r,i,o,s){if(o===s||r.has(o,s,i))return;r.add(o,s,i);const a=e.getFragment(o),c=e.getFragment(s);if(!a||!c)return;const[l,u]=lu(e,t,a),[f,p]=lu(e,t,c);jf(e,n,t,r,i,l,f);for(const h of p)da(e,n,t,r,i,o,h);for(const h of u)da(e,n,t,r,i,h,s)}function yw(e,n,t,r,i,o,s,a){const c=[],[l,u]=pa(e,n,i,o),[f,p]=pa(e,n,s,a);jf(e,c,n,t,r,l,f);for(const h of p)fa(e,c,n,t,r,l,h);for(const h of u)fa(e,c,n,t,r,f,h);for(const h of u)for(const d of p)da(e,c,n,t,r,h,d);return c}function _w(e,n,t,r,i){for(const[o,s]of Object.entries(i))if(s.length>1)for(let a=0;a<s.length;a++)for(let c=a+1;c<s.length;c++){const l=by(e,t,r,!1,o,s[a],s[c]);l&&n.push(l)}}function jf(e,n,t,r,i,o,s){for(const[a,c]of Object.entries(o)){const l=s[a];if(l)for(const u of c)for(const f of l){const p=by(e,t,r,i,a,u,f);p&&n.push(p)}}}function by(e,n,t,r,i,o,s){const[a,c,l]=o,[u,f,p]=s,h=r||a!==u&&ve(a)&&ve(u);if(!h){const m=c.name.value,v=f.name.value;if(m!==v)return[[i,`"${m}" and "${v}" are different fields`],[c],[f]];if(Mp(c)!==Mp(f))return[[i,"they have differing arguments"],[c],[f]]}const d=l==null?void 0:l.type,E=p==null?void 0:p.type;if(d&&E&&au(d,E))return[[i,`they return conflicting types "${O(d)}" and "${O(E)}"`],[c],[f]];const w=c.selectionSet,g=f.selectionSet;if(w&&g){const m=yw(e,n,t,h,tn(d),w,tn(E),g);return Ew(m,i,c,f)}}function Mp(e){var n;const t=(n=e.arguments)!==null&&n!==void 0?n:[],r={kind:y.OBJECT,fields:t.map(i=>({kind:y.OBJECT_FIELD,name:i.name,value:i.value}))};return we(qf(r))}function au(e,n){return je(e)?je(n)?au(e.ofType,n.ofType):!0:je(n)?!0:se(e)?se(n)?au(e.ofType,n.ofType):!0:se(n)?!0:at(e)||at(n)?e!==n:!1}function pa(e,n,t,r){const i=n.get(r);if(i)return i;const o=Object.create(null),s=Object.create(null);ky(e,t,r,o,s);const a=[o,Object.keys(s)];return n.set(r,a),a}function lu(e,n,t){const r=n.get(t.selectionSet);if(r)return r;const i=mn(e.getSchema(),t.typeCondition);return pa(e,n,i,t.selectionSet)}function ky(e,n,t,r,i){for(const o of t.selections)switch(o.kind){case y.FIELD:{const s=o.name.value;let a;(ve(n)||Ne(n))&&(a=n.getFields()[s]);const c=o.alias?o.alias.value:s;r[c]||(r[c]=[]),r[c].push([n,o,a]);break}case y.FRAGMENT_SPREAD:i[o.name.value]=!0;break;case y.INLINE_FRAGMENT:{const s=o.typeCondition,a=s?mn(e.getSchema(),s):n;ky(e,a,o.selectionSet,r,i);break}}}function Ew(e,n,t,r){if(e.length>0)return[[n,e.map(([i])=>i)],[t,...e.map(([,i])=>i).flat()],[r,...e.map(([,,i])=>i).flat()]]}class Sw{constructor(){this._data=new Map}has(n,t,r){var i;const[o,s]=n<t?[n,t]:[t,n],a=(i=this._data.get(o))===null||i===void 0?void 0:i.get(s);return a===void 0?!1:r?!0:r===a}add(n,t,r){const[i,o]=n<t?[n,t]:[t,n],s=this._data.get(i);s===void 0?this._data.set(i,new Map([[o,r]])):s.set(o,r)}}function ww(e){return{InlineFragment(n){const t=e.getType(),r=e.getParentType();if(Nt(t)&&Nt(r)&&!Dp(e.getSchema(),t,r)){const i=O(r),o=O(t);e.reportError(new F(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${o}".`,n))}},FragmentSpread(n){const t=n.name.value,r=bw(e,t),i=e.getParentType();if(r&&i&&!Dp(e.getSchema(),r,i)){const o=O(i),s=O(r);e.reportError(new F(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`,n))}}}}function bw(e,n){const t=e.getFragment(n);if(t){const r=mn(e.getSchema(),t.typeCondition);if(Nt(r))return r}}function Ty(e){const n=e.getSchema(),t=Object.create(null);for(const i of e.getDocument().definitions)jo(i)&&(t[i.name.value]=i);return{ScalarTypeExtension:r,ObjectTypeExtension:r,InterfaceTypeExtension:r,UnionTypeExtension:r,EnumTypeExtension:r,InputObjectTypeExtension:r};function r(i){const o=i.name.value,s=t[o],a=n==null?void 0:n.getType(o);let c;if(s?c=kw[s.kind]:a&&(c=Tw(a)),c){if(c!==i.kind){const l=xw(i.kind);e.reportError(new F(`Cannot extend non-${l} type "${o}".`,s?[s,i]:i))}}else{const l=Object.keys(oe(oe({},t),n==null?void 0:n.getTypeMap())),u=rr(o,l);e.reportError(new F(`Cannot extend type "${o}" because it is not defined.`+xt(u),i.name))}}}const kw={[y.SCALAR_TYPE_DEFINITION]:y.SCALAR_TYPE_EXTENSION,[y.OBJECT_TYPE_DEFINITION]:y.OBJECT_TYPE_EXTENSION,[y.INTERFACE_TYPE_DEFINITION]:y.INTERFACE_TYPE_EXTENSION,[y.UNION_TYPE_DEFINITION]:y.UNION_TYPE_EXTENSION,[y.ENUM_TYPE_DEFINITION]:y.ENUM_TYPE_EXTENSION,[y.INPUT_OBJECT_TYPE_DEFINITION]:y.INPUT_OBJECT_TYPE_EXTENSION};function Tw(e){if(Dt(e))return y.SCALAR_TYPE_EXTENSION;if(ve(e))return y.OBJECT_TYPE_EXTENSION;if(Ne(e))return y.INTERFACE_TYPE_EXTENSION;if(bn(e))return y.UNION_TYPE_EXTENSION;if(hn(e))return y.ENUM_TYPE_EXTENSION;if(Ve(e))return y.INPUT_OBJECT_TYPE_EXTENSION;on(!1,"Unexpected type: "+O(e))}function xw(e){switch(e){case y.SCALAR_TYPE_EXTENSION:return"scalar";case y.OBJECT_TYPE_EXTENSION:return"object";case y.INTERFACE_TYPE_EXTENSION:return"interface";case y.UNION_TYPE_EXTENSION:return"union";case y.ENUM_TYPE_EXTENSION:return"enum";case y.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:on(!1,"Unexpected kind: "+O(e))}}function Nw(e){return De(oe({},xy(e)),{Field:{leave(n){var t;const r=e.getFieldDef();if(!r)return!1;const i=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of r.args)if(!i.has(o.name)&&Lo(o)){const s=O(o.type);e.reportError(new F(`Field "${r.name}" argument "${o.name}" of type "${s}" is required, but it was not provided.`,n))}}}})}function xy(e){var n;const t=Object.create(null),r=e.getSchema(),i=(n=r==null?void 0:r.getDirectives())!==null&&n!==void 0?n:Dr;for(const a of i)t[a.name]=Sr(a.args.filter(Lo),c=>c.name);const o=e.getDocument().definitions;for(const a of o)if(a.kind===y.DIRECTIVE_DEFINITION){var s;const c=(s=a.arguments)!==null&&s!==void 0?s:[];t[a.name.value]=Sr(c.filter(Cw),l=>l.name.value)}return{Directive:{leave(a){const c=a.name.value,l=t[c];if(l){var u;const f=(u=a.arguments)!==null&&u!==void 0?u:[],p=new Set(f.map(h=>h.name.value));for(const[h,d]of Object.entries(l))if(!p.has(h)){const E=fi(d.type)?O(d.type):we(d.type);e.reportError(new F(`Directive "@${c}" argument "${h}" of type "${E}" is required, but it was not provided.`,a))}}}}}}function Cw(e){return e.type.kind===y.NON_NULL_TYPE&&e.defaultValue==null}function Iw(e){return{Field(n){const t=e.getType(),r=n.selectionSet;if(t){if(at(tn(t))){if(r){const i=n.name.value,o=O(t);e.reportError(new F(`Field "${i}" must not have a selection since type "${o}" has no subfields.`,r))}}else if(!r){const i=n.name.value,o=O(t);e.reportError(new F(`Field "${i}" of type "${o}" must have a selection of subfields. Did you mean "${i} { ... }"?`,n))}}}}}function Ny(e){return e.map(n=>typeof n=="number"?"["+n.toString()+"]":"."+n).join("")}function qp(e,n,t){return{prev:e,key:n,typename:t}}function ir(e){const n=[];let t=e;for(;t;)n.push(t.key),t=t.prev;return n.reverse()}function Dw(e,n,t=Aw){return Vi(e,n,t,void 0)}function Aw(e,n,t){let r="Invalid value "+O(n);throw e.length>0&&(r+=` at "value${Ny(e)}"`),t.message=r+": "+t.message,t}function Vi(e,n,t,r){if(se(n)){if(e!=null)return Vi(e,n.ofType,t,r);t(ir(r),e,new F(`Expected non-nullable type "${O(n)}" not to be null.`));return}if(e==null)return null;if(je(n)){const i=n.ofType;return py(e)?Array.from(e,(o,s)=>{const a=qp(r,s,void 0);return Vi(o,i,t,a)}):[Vi(e,i,t,r)]}if(Ve(n)){if(!ot(e)){t(ir(r),e,new F(`Expected type "${n.name}" to be an object.`));return}const i={},o=n.getFields();for(const s of Object.values(o)){const a=e[s.name];if(a===void 0){if(s.defaultValue!==void 0)i[s.name]=s.defaultValue;else if(se(s.type)){const c=O(s.type);t(ir(r),e,new F(`Field "${s.name}" of required type "${c}" was not provided.`))}continue}i[s.name]=Vi(a,s.type,t,qp(r,s.name,n.name))}for(const s of Object.keys(e))if(!o[s]){const a=rr(s,Object.keys(n.getFields()));t(ir(r),e,new F(`Field "${s}" is not defined by type "${n.name}".`+xt(a)))}return i}if(at(n)){let i;try{i=n.parseValue(e)}catch(o){o instanceof F?t(ir(r),e,o):t(ir(r),e,new F(`Expected type "${n.name}". `+o.message,void 0,void 0,void 0,void 0,o));return}return i===void 0&&t(ir(r),e,new F(`Expected type "${n.name}".`)),i}on(!1,"Unexpected input type: "+O(n))}function Et(e,n,t){if(!!e){if(e.kind===y.VARIABLE){const r=e.name.value;if(t==null||t[r]===void 0)return;const i=t[r];return i===null&&se(n)?void 0:i}if(se(n))return e.kind===y.NULL?void 0:Et(e,n.ofType,t);if(e.kind===y.NULL)return null;if(je(n)){const r=n.ofType;if(e.kind===y.LIST){const o=[];for(const s of e.values)if(jp(s,t)){if(se(r))return;o.push(null)}else{const a=Et(s,r,t);if(a===void 0)return;o.push(a)}return o}const i=Et(e,r,t);return i===void 0?void 0:[i]}if(Ve(n)){if(e.kind!==y.OBJECT)return;const r=Object.create(null),i=Sr(e.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const s=i[o.name];if(!s||jp(s.value,t)){if(o.defaultValue!==void 0)r[o.name]=o.defaultValue;else if(se(o.type))return;continue}const a=Et(s.value,o.type,t);if(a===void 0)return;r[o.name]=a}return r}if(at(n)){let r;try{r=n.parseLiteral(e,t)}catch{return}return r===void 0?void 0:r}on(!1,"Unexpected input type: "+O(n))}}function jp(e,n){return e.kind===y.VARIABLE&&(n==null||n[e.name.value]===void 0)}function Yoe(e,n,t,r){const i=[],o=r==null?void 0:r.maxErrors;try{const s=Ow(e,n,t,a=>{if(o!=null&&i.length>=o)throw new F("Too many errors processing variables, error limit reached. Execution aborted.");i.push(a)});if(i.length===0)return{coerced:s}}catch(s){i.push(s)}return{errors:i}}function Ow(e,n,t,r){const i={};for(const o of n){const s=o.variable.name.value,a=mn(e,o.type);if(!yn(a)){const l=we(o.type);r(new F(`Variable "$${s}" expected value of type "${l}" which cannot be used as an input type.`,o.type));continue}if(!Cy(t,s)){if(o.defaultValue)i[s]=Et(o.defaultValue,a);else if(se(a)){const l=O(a);r(new F(`Variable "$${s}" of required type "${l}" was not provided.`,o))}continue}const c=t[s];if(c===null&&se(a)){const l=O(a);r(new F(`Variable "$${s}" of non-null type "${l}" must not be null.`,o));continue}i[s]=Dw(c,a,(l,u,f)=>{let p=`Variable "$${s}" got invalid value `+O(u);l.length>0&&(p+=` at "${s}${Ny(l)}"`),r(new F(p+"; "+f.message,o,void 0,void 0,void 0,f.originalError))})}return i}function Fw(e,n,t){var r;const i={},o=(r=n.arguments)!==null&&r!==void 0?r:[],s=Sr(o,a=>a.name.value);for(const a of e.args){const c=a.name,l=a.type,u=s[c];if(!u){if(a.defaultValue!==void 0)i[c]=a.defaultValue;else if(se(l))throw new F(`Argument "${c}" of required type "${O(l)}" was not provided.`,n);continue}const f=u.value;let p=f.kind===y.NULL;if(f.kind===y.VARIABLE){const d=f.name.value;if(t==null||!Cy(t,d)){if(a.defaultValue!==void 0)i[c]=a.defaultValue;else if(se(l))throw new F(`Argument "${c}" of required type "${O(l)}" was provided the variable "$${d}" which was not provided a runtime value.`,f);continue}p=t[d]==null}if(p&&se(l))throw new F(`Argument "${c}" of non-null type "${O(l)}" must not be null.`,f);const h=Et(f,l,t);if(h===void 0)throw new F(`Argument "${c}" has invalid value ${we(f)}.`,f);i[c]=h}return i}function ha(e,n,t){var r;const i=(r=n.directives)===null||r===void 0?void 0:r.find(o=>o.name.value===e.name);if(i)return Fw(e,i,t)}function Cy(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Rw(e,n,t,r,i){const o=new Map;return ma(e,n,t,r,i,o,new Set),o}function Joe(e,n,t,r,i){const o=new Map,s=new Set;for(const a of i)a.selectionSet&&ma(e,n,t,r,a.selectionSet,o,s);return o}function ma(e,n,t,r,i,o,s){for(const a of i.selections)switch(a.kind){case y.FIELD:{if(!Ul(t,a))continue;const c=Lw(a),l=o.get(c);l!==void 0?l.push(a):o.set(c,[a]);break}case y.INLINE_FRAGMENT:{if(!Ul(t,a)||!$p(e,a,r))continue;ma(e,n,t,r,a.selectionSet,o,s);break}case y.FRAGMENT_SPREAD:{const c=a.name.value;if(s.has(c)||!Ul(t,a))continue;s.add(c);const l=n[c];if(!l||!$p(e,l,r))continue;ma(e,n,t,r,l.selectionSet,o,s);break}}}function Ul(e,n){const t=ha(fy,n,e);if((t==null?void 0:t.if)===!0)return!1;const r=ha(uy,n,e);return(r==null?void 0:r.if)!==!1}function $p(e,n,t){const r=n.typeCondition;if(!r)return!0;const i=mn(e,r);return i===t?!0:Gt(i)?e.isSubType(i,t):!1}function Lw(e){return e.alias?e.alias.value:e.name.value}function Pw(e){return{OperationDefinition(n){if(n.operation==="subscription"){const t=e.getSchema(),r=t.getSubscriptionType();if(r){const i=n.name?n.name.value:null,o=Object.create(null),s=e.getDocument(),a=Object.create(null);for(const l of s.definitions)l.kind===y.FRAGMENT_DEFINITION&&(a[l.name.value]=l);const c=Rw(t,a,o,r,n.selectionSet);if(c.size>1){const f=[...c.values()].slice(1).flat();e.reportError(new F(i!=null?`Subscription "${i}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",f))}for(const l of c.values())l[0].name.value.startsWith("__")&&e.reportError(new F(i!=null?`Subscription "${i}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",l))}}}}}function $f(e,n){const t=new Map;for(const r of e){const i=n(r),o=t.get(i);o===void 0?t.set(i,[r]):o.push(r)}return t}function Mw(e){return{DirectiveDefinition(r){var i;const o=(i=r.arguments)!==null&&i!==void 0?i:[];return t(`@${r.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(r){var i;const o=r.name.value,s=(i=r.fields)!==null&&i!==void 0?i:[];for(const c of s){var a;const l=c.name.value,u=(a=c.arguments)!==null&&a!==void 0?a:[];t(`${o}.${l}`,u)}return!1}function t(r,i){const o=$f(i,s=>s.name.value);for(const[s,a]of o)a.length>1&&e.reportError(new F(`Argument "${r}(${s}:)" can only be defined once.`,a.map(c=>c.name)));return!1}}function Vf(e){return{Field:n,Directive:n};function n(t){var r;const i=(r=t.arguments)!==null&&r!==void 0?r:[],o=$f(i,s=>s.name.value);for(const[s,a]of o)a.length>1&&e.reportError(new F(`There can be only one argument named "${s}".`,a.map(c=>c.name)))}}function Iy(e){const n=Object.create(null),t=e.getSchema();return{DirectiveDefinition(r){const i=r.name.value;if(t!=null&&t.getDirective(i)){e.reportError(new F(`Directive "@${i}" already exists in the schema. It cannot be redefined.`,r.name));return}return n[i]?e.reportError(new F(`There can be only one directive named "@${i}".`,[n[i],r.name])):n[i]=r.name,!1}}}function Uf(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():Dr;for(const a of r)n[a.name]=!a.isRepeatable;const i=e.getDocument().definitions;for(const a of i)a.kind===y.DIRECTIVE_DEFINITION&&(n[a.name.value]=!a.repeatable);const o=Object.create(null),s=Object.create(null);return{enter(a){if(!("directives"in a)||!a.directives)return;let c;if(a.kind===y.SCHEMA_DEFINITION||a.kind===y.SCHEMA_EXTENSION)c=o;else if(jo(a)||Lf(a)){const l=a.name.value;c=s[l],c===void 0&&(s[l]=c=Object.create(null))}else c=Object.create(null);for(const l of a.directives){const u=l.name.value;n[u]&&(c[u]?e.reportError(new F(`The directive "@${u}" can only be used once at this location.`,[c[u],l])):c[u]=l)}}}}function Dy(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{EnumTypeDefinition:i,EnumTypeExtension:i};function i(o){var s;const a=o.name.value;r[a]||(r[a]=Object.create(null));const c=(s=o.values)!==null&&s!==void 0?s:[],l=r[a];for(const u of c){const f=u.name.value,p=t[a];hn(p)&&p.getValue(f)?e.reportError(new F(`Enum value "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,u.name)):l[f]?e.reportError(new F(`Enum value "${a}.${f}" can only be defined once.`,[l[f],u.name])):l[f]=u.name}return!1}}function Ay(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{InputObjectTypeDefinition:i,InputObjectTypeExtension:i,InterfaceTypeDefinition:i,InterfaceTypeExtension:i,ObjectTypeDefinition:i,ObjectTypeExtension:i};function i(o){var s;const a=o.name.value;r[a]||(r[a]=Object.create(null));const c=(s=o.fields)!==null&&s!==void 0?s:[],l=r[a];for(const u of c){const f=u.name.value;qw(t[a],f)?e.reportError(new F(`Field "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,u.name)):l[f]?e.reportError(new F(`Field "${a}.${f}" can only be defined once.`,[l[f],u.name])):l[f]=u.name}return!1}}function qw(e,n){return ve(e)||Ne(e)||Ve(e)?e.getFields()[n]!=null:!1}function jw(e){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const r=t.name.value;return n[r]?e.reportError(new F(`There can be only one fragment named "${r}".`,[n[r],t.name])):n[r]=t.name,!1}}}function zf(e){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const r=n.pop();r||on(!1),t=r}},ObjectField(r){const i=r.name.value;t[i]?e.reportError(new F(`There can be only one input field named "${i}".`,[t[i],r.name])):t[i]=r.name}}}function $w(e){const n=Object.create(null);return{OperationDefinition(t){const r=t.name;return r&&(n[r.value]?e.reportError(new F(`There can be only one operation named "${r.value}".`,[n[r.value],r])):n[r.value]=r),!1},FragmentDefinition:()=>!1}}function Oy(e){const n=e.getSchema(),t=Object.create(null),r=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:i,SchemaExtension:i};function i(o){var s;const a=(s=o.operationTypes)!==null&&s!==void 0?s:[];for(const c of a){const l=c.operation,u=t[l];r[l]?e.reportError(new F(`Type for ${l} already defined in the schema. It cannot be redefined.`,c)):u?e.reportError(new F(`There can be only one ${l} type in schema.`,[u,c])):t[l]=c}return!1}}function Fy(e){const n=Object.create(null),t=e.getSchema();return{ScalarTypeDefinition:r,ObjectTypeDefinition:r,InterfaceTypeDefinition:r,UnionTypeDefinition:r,EnumTypeDefinition:r,InputObjectTypeDefinition:r};function r(i){const o=i.name.value;if(t!=null&&t.getType(o)){e.reportError(new F(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,i.name));return}return n[o]?e.reportError(new F(`There can be only one type named "${o}".`,[n[o],i.name])):n[o]=i.name,!1}}function Vw(e){return{OperationDefinition(n){var t;const r=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],i=$f(r,o=>o.variable.name.value);for(const[o,s]of i)s.length>1&&e.reportError(new F(`There can be only one variable named "$${o}".`,s.map(a=>a.variable.name)))}}}function Uw(e){return{ListValue(n){const t=Zv(e.getParentInputType());if(!je(t))return or(e,n),!1},ObjectValue(n){const t=tn(e.getInputType());if(!Ve(t))return or(e,n),!1;const r=Sr(n.fields,i=>i.name.value);for(const i of Object.values(t.getFields()))if(!r[i.name]&&ay(i)){const s=O(i.type);e.reportError(new F(`Field "${t.name}.${i.name}" of required type "${s}" was not provided.`,n))}},ObjectField(n){const t=tn(e.getParentInputType());if(!e.getInputType()&&Ve(t)){const i=rr(n.name.value,Object.keys(t.getFields()));e.reportError(new F(`Field "${n.name.value}" is not defined by type "${t.name}".`+xt(i),n))}},NullValue(n){const t=e.getInputType();se(t)&&e.reportError(new F(`Expected value of type "${O(t)}", found ${we(n)}.`,n))},EnumValue:n=>or(e,n),IntValue:n=>or(e,n),FloatValue:n=>or(e,n),StringValue:n=>or(e,n),BooleanValue:n=>or(e,n)}}function or(e,n){const t=e.getInputType();if(!t)return;const r=tn(t);if(!at(r)){const i=O(t);e.reportError(new F(`Expected value of type "${i}", found ${we(n)}.`,n));return}try{if(r.parseLiteral(n,void 0)===void 0){const o=O(t);e.reportError(new F(`Expected value of type "${o}", found ${we(n)}.`,n))}}catch(i){const o=O(t);i instanceof F?e.reportError(i):e.reportError(new F(`Expected value of type "${o}", found ${we(n)}; `+i.message,n,void 0,void 0,void 0,i))}}function zw(e){return{VariableDefinition(n){const t=mn(e.getSchema(),n.type);if(t!==void 0&&!yn(t)){const r=n.variable.name.value,i=we(n.type);e.reportError(new F(`Variable "$${r}" cannot be non-input type "${i}".`,n.type))}}}}function Bw(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i,type:o,defaultValue:s}of r){const a=i.name.value,c=n[a];if(c&&o){const l=e.getSchema(),u=mn(l,c.type);if(u&&!Qw(l,u,c.defaultValue,o,s)){const f=O(u),p=O(o);e.reportError(new F(`Variable "$${a}" of type "${f}" used in position expecting type "${p}".`,[c,i]))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function Qw(e,n,t,r,i){if(se(r)&&!se(n)){if(!(t!=null&&t.kind!==y.NULL)&&!(i!==void 0))return!1;const a=r.ofType;return ni(e,n,a)}return ni(e,n,r)}const Ry=Object.freeze([vy,$w,fw,Pw,Mf,sw,zw,Iw,rw,jw,_y,Sy,ww,dw,Vw,pw,hw,Pf,Uf,aw,Vf,Uw,Nw,Bw,gw,zf]),Hw=Object.freeze([Ey,Oy,Fy,Dy,Ay,Mw,Iy,Mf,Pf,Uf,Ty,yy,Vf,zf,xy]);class Ly{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const r of this.getDocument().definitions)r.kind===y.FRAGMENT_DEFINITION&&(t[r.name.value]=r);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const r=[n];let i;for(;i=r.pop();)for(const o of i.selections)o.kind===y.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&r.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const r=Object.create(null),i=[n.selectionSet];let o;for(;o=i.pop();)for(const s of this.getFragmentSpreads(o)){const a=s.name.value;if(r[a]!==!0){r[a]=!0;const c=this.getFragment(a);c&&(t.push(c),i.push(c.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class Gw extends Ly{constructor(n,t,r){super(n,r),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}class Ww extends Ly{constructor(n,t,r,i){super(t,i),this._schema=n,this._typeInfo=r,this._variableUsages=new Map,this._recursiveVariableUsages=new Map}get[Symbol.toStringTag](){return"ValidationContext"}getSchema(){return this._schema}getVariableUsages(n){let t=this._variableUsages.get(n);if(!t){const r=[],i=new Xa(this._schema);Mn(n,Ff(i,{VariableDefinition:()=>!1,Variable(o){r.push({node:o,type:i.getInputType(),defaultValue:i.getDefaultValue()})}})),t=r,this._variableUsages.set(n,t)}return t}getRecursiveVariableUsages(n){let t=this._recursiveVariableUsages.get(n);if(!t){t=this.getVariableUsages(n);for(const r of this.getRecursivelyReferencedFragments(n))t=t.concat(this.getVariableUsages(r));this._recursiveVariableUsages.set(n,t)}return t}getType(){return this._typeInfo.getType()}getParentType(){return this._typeInfo.getParentType()}getInputType(){return this._typeInfo.getInputType()}getParentInputType(){return this._typeInfo.getParentInputType()}getFieldDef(){return this._typeInfo.getFieldDef()}getDirective(){return this._typeInfo.getDirective()}getArgument(){return this._typeInfo.getArgument()}getEnumValue(){return this._typeInfo.getEnumValue()}}function Py(e,n,t=Ry,r,i=new Xa(e)){var o;const s=(o=r==null?void 0:r.maxErrors)!==null&&o!==void 0?o:100;n||ce(!1,"Must provide document."),BS(e);const a=Object.freeze({}),c=[],l=new Ww(e,n,i,f=>{if(c.length>=s)throw c.push(new F("Too many validation errors, error limit reached. Validation aborted.")),a;c.push(f)}),u=Jv(t.map(f=>f(l)));try{Mn(n,Ff(i,u))}catch(f){if(f!==a)throw f}return c}function My(e,n,t=Hw){const r=[],i=new Gw(e,n,s=>{r.push(s)}),o=t.map(s=>s(i));return Mn(e,Jv(o)),r}function Yw(e){const n=My(e);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function Jw(e,n){const t=My(e,n);if(t.length!==0)throw new Error(t.map(r=>r.message).join(`

`))}function Xw(e){return{Field(n){const t=e.getFieldDef(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=e.getParentType();i!=null||on(!1),e.reportError(new F(`The field ${i.name}.${t.name} is deprecated. ${r}`,n))}},Argument(n){const t=e.getArgument(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=e.getDirective();if(i!=null)e.reportError(new F(`Directive "@${i.name}" argument "${t.name}" is deprecated. ${r}`,n));else{const o=e.getParentType(),s=e.getFieldDef();o!=null&&s!=null||on(!1),e.reportError(new F(`Field "${o.name}.${s.name}" argument "${t.name}" is deprecated. ${r}`,n))}}},ObjectField(n){const t=tn(e.getParentInputType());if(Ve(t)){const r=t.getFields()[n.name.value],i=r==null?void 0:r.deprecationReason;i!=null&&e.reportError(new F(`The input field ${t.name}.${r.name} is deprecated. ${i}`,n))}},EnumValue(n){const t=e.getEnumValue(),r=t==null?void 0:t.deprecationReason;if(t&&r!=null){const i=tn(e.getInputType());i!=null||on(!1),e.reportError(new F(`The enum value "${i.name}.${t.name}" is deprecated. ${r}`,n))}}}}function Zw(e){const n=oe({descriptions:!0,specifiedByUrl:!1,directiveIsRepeatable:!1,schemaDescription:!1,inputValueDeprecation:!1},e),t=n.descriptions?"description":"",r=n.specifiedByUrl?"specifiedByURL":"",i=n.directiveIsRepeatable?"isRepeatable":"",o=n.schemaDescription?t:"";function s(a){return n.inputValueDeprecation?a:""}return`
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
  `}function Kw(e,n){ot(e)&&ot(e.__schema)||ce(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${O(e)}.`);const t=e.__schema,r=fr(t.types,k=>k.name,k=>p(k));for(const k of[...Wa,...qo])r[k.name]&&(r[k.name]=k);const i=t.queryType?u(t.queryType):null,o=t.mutationType?u(t.mutationType):null,s=t.subscriptionType?u(t.subscriptionType):null,a=t.directives?t.directives.map(M):[];return new Ja({description:t.description,query:i,mutation:o,subscription:s,types:Object.values(r),directives:a,assumeValid:n==null?void 0:n.assumeValid});function c(k){if(k.kind===me.LIST){const I=k.ofType;if(!I)throw new Error("Decorated type deeper than introspection query.");return new Qe(c(I))}if(k.kind===me.NON_NULL){const I=k.ofType;if(!I)throw new Error("Decorated type deeper than introspection query.");const J=c(I);return new te(PS(J))}return l(k)}function l(k){const I=k.name;if(!I)throw new Error(`Unknown type reference: ${O(k)}.`);const J=r[I];if(!J)throw new Error(`Invalid or incomplete schema, unknown type: ${I}. Ensure that a full introspection query is used in order to build a client schema.`);return J}function u(k){return RS(l(k))}function f(k){return LS(l(k))}function p(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case me.SCALAR:return h(k);case me.OBJECT:return E(k);case me.INTERFACE:return w(k);case me.UNION:return g(k);case me.ENUM:return m(k);case me.INPUT_OBJECT:return v(k)}const I=O(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${I}.`)}function h(k){return new Ct({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function d(k){if(k.interfaces===null&&k.kind===me.INTERFACE)return[];if(!k.interfaces){const I=O(k);throw new Error(`Introspection result missing interfaces: ${I}.`)}return k.interfaces.map(f)}function E(k){return new Sn({name:k.name,description:k.description,interfaces:()=>d(k),fields:()=>S(k)})}function w(k){return new wo({name:k.name,description:k.description,interfaces:()=>d(k),fields:()=>S(k)})}function g(k){if(!k.possibleTypes){const I=O(k);throw new Error(`Introspection result missing possibleTypes: ${I}.`)}return new bo({name:k.name,description:k.description,types:()=>k.possibleTypes.map(u)})}function m(k){if(!k.enumValues){const I=O(k);throw new Error(`Introspection result missing enumValues: ${I}.`)}return new wr({name:k.name,description:k.description,values:fr(k.enumValues,I=>I.name,I=>({description:I.description,deprecationReason:I.deprecationReason}))})}function v(k){if(!k.inputFields){const I=O(k);throw new Error(`Introspection result missing inputFields: ${I}.`)}return new ua({name:k.name,description:k.description,fields:()=>b(k.inputFields)})}function S(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${O(k)}.`);return fr(k.fields,I=>I.name,N)}function N(k){const I=c(k.type);if(!gr(I)){const J=O(I);throw new Error(`Introspection must provide output type for fields, but received: ${J}.`)}if(!k.args){const J=O(k);throw new Error(`Introspection result missing field args: ${J}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:I,args:b(k.args)}}function b(k){return fr(k,I=>I.name,A)}function A(k){const I=c(k.type);if(!yn(I)){const G=O(I);throw new Error(`Introspection must provide input type for arguments, but received: ${G}.`)}const J=k.defaultValue!=null?Et(bS(k.defaultValue),I):void 0;return{description:k.description,type:I,defaultValue:J,deprecationReason:k.deprecationReason}}function M(k){if(!k.args){const I=O(k);throw new Error(`Introspection result missing directive args: ${I}.`)}if(!k.locations){const I=O(k);throw new Error(`Introspection result missing directive locations: ${I}.`)}return new Zt({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:b(k.args)})}}function Xoe(e,n,t){hy(e),n!=null&&n.kind===y.DOCUMENT||ce(!1,"Must provide valid Document AST."),(t==null?void 0:t.assumeValid)!==!0&&(t==null?void 0:t.assumeValidSDL)!==!0&&Jw(n,e);const r=e.toConfig(),i=qy(r,n,t);return r===i?e:new Ja(i)}function qy(e,n,t){var r,i,o,s;const a=[],c=Object.create(null),l=[];let u;const f=[];for(const x of n.definitions)if(x.kind===y.SCHEMA_DEFINITION)u=x;else if(x.kind===y.SCHEMA_EXTENSION)f.push(x);else if(jo(x))a.push(x);else if(Lf(x)){const $=x.name.value,P=c[$];c[$]=P?P.concat([x]):[x]}else x.kind===y.DIRECTIVE_DEFINITION&&l.push(x);if(Object.keys(c).length===0&&a.length===0&&l.length===0&&f.length===0&&u==null)return e;const p=Object.create(null);for(const x of e.types)p[x.name]=m(x);for(const x of a){var h;const $=x.name.value;p[$]=(h=Vp[$])!==null&&h!==void 0?h:K(x)}const d=oe(oe({query:e.query&&w(e.query),mutation:e.mutation&&w(e.mutation),subscription:e.subscription&&w(e.subscription)},u&&J([u])),J(f));return De(oe({description:(r=u)===null||r===void 0||(i=r.description)===null||i===void 0?void 0:i.value},d),{types:Object.values(p),directives:[...e.directives.map(g),...l.map(R)],extensions:Object.create(null),astNode:(o=u)!==null&&o!==void 0?o:e.astNode,extensionASTNodes:e.extensionASTNodes.concat(f),assumeValid:(s=t==null?void 0:t.assumeValid)!==null&&s!==void 0?s:!1});function E(x){return je(x)?new Qe(E(x.ofType)):se(x)?new te(E(x.ofType)):w(x)}function w(x){return p[x.name]}function g(x){const $=x.toConfig();return new Zt(De(oe({},$),{args:gt($.args,I)}))}function m(x){if(Af(x)||VS(x))return x;if(Dt(x))return N(x);if(ve(x))return b(x);if(Ne(x))return A(x);if(bn(x))return M(x);if(hn(x))return S(x);if(Ve(x))return v(x);on(!1,"Unexpected type: "+O(x))}function v(x){var $;const P=x.toConfig(),T=($=c[P.name])!==null&&$!==void 0?$:[];return new ua(De(oe({},P),{fields:()=>oe(oe({},gt(P.fields,j=>De(oe({},j),{type:E(j.type)}))),ye(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function S(x){var $;const P=x.toConfig(),T=($=c[x.name])!==null&&$!==void 0?$:[];return new wr(De(oe({},P),{values:oe(oe({},P.values),L(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function N(x){var $;const P=x.toConfig(),T=($=c[P.name])!==null&&$!==void 0?$:[];let j=P.specifiedByURL;for(const Y of T){var W;j=(W=Up(Y))!==null&&W!==void 0?W:j}return new Ct(De(oe({},P),{specifiedByURL:j,extensionASTNodes:P.extensionASTNodes.concat(T)}))}function b(x){var $;const P=x.toConfig(),T=($=c[P.name])!==null&&$!==void 0?$:[];return new Sn(De(oe({},P),{interfaces:()=>[...x.getInterfaces().map(w),...H(T)],fields:()=>oe(oe({},gt(P.fields,k)),z(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function A(x){var $;const P=x.toConfig(),T=($=c[P.name])!==null&&$!==void 0?$:[];return new wo(De(oe({},P),{interfaces:()=>[...x.getInterfaces().map(w),...H(T)],fields:()=>oe(oe({},gt(P.fields,k)),z(T)),extensionASTNodes:P.extensionASTNodes.concat(T)}))}function M(x){var $;const P=x.toConfig(),T=($=c[P.name])!==null&&$!==void 0?$:[];return new bo(De(oe({},P),{types:()=>[...x.getTypes().map(w),...B(T)],extensionASTNodes:P.extensionASTNodes.concat(T)}))}function k(x){return De(oe({},x),{type:E(x.type),args:x.args&&gt(x.args,I)})}function I(x){return De(oe({},x),{type:E(x.type)})}function J(x){const $={};for(const T of x){var P;const j=(P=T.operationTypes)!==null&&P!==void 0?P:[];for(const W of j)$[W.operation]=G(W.type)}return $}function G(x){var $;const P=x.name.value,T=($=Vp[P])!==null&&$!==void 0?$:p[P];if(T===void 0)throw new Error(`Unknown type: "${P}".`);return T}function ne(x){return x.kind===y.LIST_TYPE?new Qe(ne(x.type)):x.kind===y.NON_NULL_TYPE?new te(ne(x.type)):G(x)}function R(x){var $;return new Zt({name:x.name.value,description:($=x.description)===null||$===void 0?void 0:$.value,locations:x.locations.map(({value:P})=>P),isRepeatable:x.repeatable,args:U(x.arguments),astNode:x})}function z(x){const $=Object.create(null);for(const j of x){var P;const W=(P=j.fields)!==null&&P!==void 0?P:[];for(const Y of W){var T;$[Y.name.value]={type:ne(Y.type),description:(T=Y.description)===null||T===void 0?void 0:T.value,args:U(Y.arguments),deprecationReason:hs(Y),astNode:Y}}}return $}function U(x){const $=x!=null?x:[],P=Object.create(null);for(const j of $){var T;const W=ne(j.type);P[j.name.value]={type:W,description:(T=j.description)===null||T===void 0?void 0:T.value,defaultValue:Et(j.defaultValue,W),deprecationReason:hs(j),astNode:j}}return P}function ye(x){const $=Object.create(null);for(const j of x){var P;const W=(P=j.fields)!==null&&P!==void 0?P:[];for(const Y of W){var T;const he=ne(Y.type);$[Y.name.value]={type:he,description:(T=Y.description)===null||T===void 0?void 0:T.value,defaultValue:Et(Y.defaultValue,he),deprecationReason:hs(Y),astNode:Y}}}return $}function L(x){const $=Object.create(null);for(const j of x){var P;const W=(P=j.values)!==null&&P!==void 0?P:[];for(const Y of W){var T;$[Y.name.value]={description:(T=Y.description)===null||T===void 0?void 0:T.value,deprecationReason:hs(Y),astNode:Y}}}return $}function H(x){return x.flatMap($=>{var P,T;return(P=(T=$.interfaces)===null||T===void 0?void 0:T.map(G))!==null&&P!==void 0?P:[]})}function B(x){return x.flatMap($=>{var P,T;return(P=(T=$.types)===null||T===void 0?void 0:T.map(G))!==null&&P!==void 0?P:[]})}function K(x){var $;const P=x.name.value,T=($=c[P])!==null&&$!==void 0?$:[];switch(x.kind){case y.OBJECT_TYPE_DEFINITION:{var j;const de=[x,...T];return new Sn({name:P,description:(j=x.description)===null||j===void 0?void 0:j.value,interfaces:()=>H(de),fields:()=>z(de),astNode:x,extensionASTNodes:T})}case y.INTERFACE_TYPE_DEFINITION:{var W;const de=[x,...T];return new wo({name:P,description:(W=x.description)===null||W===void 0?void 0:W.value,interfaces:()=>H(de),fields:()=>z(de),astNode:x,extensionASTNodes:T})}case y.ENUM_TYPE_DEFINITION:{var Y;const de=[x,...T];return new wr({name:P,description:(Y=x.description)===null||Y===void 0?void 0:Y.value,values:L(de),astNode:x,extensionASTNodes:T})}case y.UNION_TYPE_DEFINITION:{var he;const de=[x,...T];return new bo({name:P,description:(he=x.description)===null||he===void 0?void 0:he.value,types:()=>B(de),astNode:x,extensionASTNodes:T})}case y.SCALAR_TYPE_DEFINITION:{var Te;return new Ct({name:P,description:(Te=x.description)===null||Te===void 0?void 0:Te.value,specifiedByURL:Up(x),astNode:x,extensionASTNodes:T})}case y.INPUT_OBJECT_TYPE_DEFINITION:{var ae;const de=[x,...T];return new ua({name:P,description:(ae=x.description)===null||ae===void 0?void 0:ae.value,fields:()=>ye(de),astNode:x,extensionASTNodes:T})}}}}const Vp=Sr([...Wa,...qo],e=>e.name);function hs(e){const n=ha(Tf,e);return n==null?void 0:n.reason}function Up(e){const n=ha(dy,e);return n==null?void 0:n.url}function eb(e,n){e!=null&&e.kind===y.DOCUMENT||ce(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&Yw(e);const r=qy({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},e,n);if(r.astNode==null)for(const o of r.types)switch(o.name){case"Query":r.query=o;break;case"Mutation":r.mutation=o;break;case"Subscription":r.subscription=o;break}const i=[...r.directives,...Dr.filter(o=>r.directives.every(s=>s.name!==o.name))];return new Ja(De(oe({},r),{directives:i}))}function nb(e,n){const t=st(e,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return eb(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}var tb=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||t.forEach(function(i){e.addRange(i)}),n&&n.focus()}},rb=tb,zp={"text/plain":"Text","text/html":"Url",default:"Text"},ib="Copy to clipboard: #{key}, Enter";function ob(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}function sb(e,n){var t,r,i,o,s,a,c=!1;n||(n={}),t=n.debug||!1;try{i=rb(),o=document.createRange(),s=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(u){if(u.stopPropagation(),n.format)if(u.preventDefault(),typeof u.clipboardData=="undefined"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=zp[n.format]||zp.default;window.clipboardData.setData(f,e)}else u.clipboardData.clearData(),u.clipboardData.setData(n.format,e);n.onCopy&&(u.preventDefault(),n.onCopy(u.clipboardData))}),document.body.appendChild(a),o.selectNodeContents(a),s.addRange(o);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");c=!0}catch(u){t&&console.error("unable to copy using execCommand: ",u),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),c=!0}catch(f){t&&console.error("unable to copy using clipboardData: ",f),t&&console.error("falling back to prompt"),r=ob("message"in n?n.message:ib),window.prompt(r,e)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(o):s.removeAllRanges()),a&&document.body.removeChild(a),i()}return c}var ab=sb,Bp;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(Bp||(Bp={}));var ga;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(ga||(ga={}));var Kn;(function(e){function n(r,i){return r===Number.MAX_VALUE&&(r=ga.MAX_VALUE),i===Number.MAX_VALUE&&(i=ga.MAX_VALUE),{line:r,character:i}}e.create=n;function t(r){var i=r;return C.objectLiteral(i)&&C.uinteger(i.line)&&C.uinteger(i.character)}e.is=t})(Kn||(Kn={}));var Ge;(function(e){function n(r,i,o,s){if(C.uinteger(r)&&C.uinteger(i)&&C.uinteger(o)&&C.uinteger(s))return{start:Kn.create(r,i),end:Kn.create(o,s)};if(Kn.is(r)&&Kn.is(i))return{start:r,end:i};throw new Error("Range#create called with invalid arguments["+r+", "+i+", "+o+", "+s+"]")}e.create=n;function t(r){var i=r;return C.objectLiteral(i)&&Kn.is(i.start)&&Kn.is(i.end)}e.is=t})(Ge||(Ge={}));var cu;(function(e){function n(r,i){return{uri:r,range:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.string(i.uri)||C.undefined(i.uri))}e.is=t})(cu||(cu={}));var Qp;(function(e){function n(r,i,o,s){return{targetUri:r,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.targetRange)&&C.string(i.targetUri)&&(Ge.is(i.targetSelectionRange)||C.undefined(i.targetSelectionRange))&&(Ge.is(i.originSelectionRange)||C.undefined(i.originSelectionRange))}e.is=t})(Qp||(Qp={}));var uu;(function(e){function n(r,i,o,s){return{red:r,green:i,blue:o,alpha:s}}e.create=n;function t(r){var i=r;return C.numberRange(i.red,0,1)&&C.numberRange(i.green,0,1)&&C.numberRange(i.blue,0,1)&&C.numberRange(i.alpha,0,1)}e.is=t})(uu||(uu={}));var Hp;(function(e){function n(r,i){return{range:r,color:i}}e.create=n;function t(r){var i=r;return Ge.is(i.range)&&uu.is(i.color)}e.is=t})(Hp||(Hp={}));var Gp;(function(e){function n(r,i,o){return{label:r,textEdit:i,additionalTextEdits:o}}e.create=n;function t(r){var i=r;return C.string(i.label)&&(C.undefined(i.textEdit)||Wt.is(i))&&(C.undefined(i.additionalTextEdits)||C.typedArray(i.additionalTextEdits,Wt.is))}e.is=t})(Gp||(Gp={}));var Wp;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(Wp||(Wp={}));var Yp;(function(e){function n(r,i,o,s,a){var c={startLine:r,endLine:i};return C.defined(o)&&(c.startCharacter=o),C.defined(s)&&(c.endCharacter=s),C.defined(a)&&(c.kind=a),c}e.create=n;function t(r){var i=r;return C.uinteger(i.startLine)&&C.uinteger(i.startLine)&&(C.undefined(i.startCharacter)||C.uinteger(i.startCharacter))&&(C.undefined(i.endCharacter)||C.uinteger(i.endCharacter))&&(C.undefined(i.kind)||C.string(i.kind))}e.is=t})(Yp||(Yp={}));var fu;(function(e){function n(r,i){return{location:r,message:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&cu.is(i.location)&&C.string(i.message)}e.is=t})(fu||(fu={}));var Jp;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(Jp||(Jp={}));var Xp;(function(e){e.Unnecessary=1,e.Deprecated=2})(Xp||(Xp={}));var Zp;(function(e){function n(t){var r=t;return r!=null&&C.string(r.href)}e.is=n})(Zp||(Zp={}));var va;(function(e){function n(r,i,o,s,a,c){var l={range:r,message:i};return C.defined(o)&&(l.severity=o),C.defined(s)&&(l.code=s),C.defined(a)&&(l.source=a),C.defined(c)&&(l.relatedInformation=c),l}e.create=n;function t(r){var i,o=r;return C.defined(o)&&Ge.is(o.range)&&C.string(o.message)&&(C.number(o.severity)||C.undefined(o.severity))&&(C.integer(o.code)||C.string(o.code)||C.undefined(o.code))&&(C.undefined(o.codeDescription)||C.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(C.string(o.source)||C.undefined(o.source))&&(C.undefined(o.relatedInformation)||C.typedArray(o.relatedInformation,fu.is))}e.is=t})(va||(va={}));var ko;(function(e){function n(r,i){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var a={title:r,command:i};return C.defined(o)&&o.length>0&&(a.arguments=o),a}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.title)&&C.string(i.command)}e.is=t})(ko||(ko={}));var Wt;(function(e){function n(o,s){return{range:o,newText:s}}e.replace=n;function t(o,s){return{range:{start:o,end:o},newText:s}}e.insert=t;function r(o){return{range:o,newText:""}}e.del=r;function i(o){var s=o;return C.objectLiteral(s)&&C.string(s.newText)&&Ge.is(s.range)}e.is=i})(Wt||(Wt={}));var ti;(function(e){function n(r,i,o){var s={label:r};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}e.create=n;function t(r){var i=r;return i!==void 0&&C.objectLiteral(i)&&C.string(i.label)&&(C.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(C.string(i.description)||i.description===void 0)}e.is=t})(ti||(ti={}));var Ze;(function(e){function n(t){var r=t;return typeof r=="string"}e.is=n})(Ze||(Ze={}));var Pt;(function(e){function n(o,s,a){return{range:o,newText:s,annotationId:a}}e.replace=n;function t(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}e.insert=t;function r(o,s){return{range:o,newText:"",annotationId:s}}e.del=r;function i(o){var s=o;return Wt.is(s)&&(ti.is(s.annotationId)||Ze.is(s.annotationId))}e.is=i})(Pt||(Pt={}));var ya;(function(e){function n(r,i){return{textDocument:r,edits:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&_a.is(i.textDocument)&&Array.isArray(i.edits)}e.is=t})(ya||(ya={}));var To;(function(e){function n(r,i,o){var s={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}e.create=n;function t(r){var i=r;return i&&i.kind==="create"&&C.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ze.is(i.annotationId))}e.is=t})(To||(To={}));var xo;(function(e){function n(r,i,o,s){var a={kind:"rename",oldUri:r,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}e.create=n;function t(r){var i=r;return i&&i.kind==="rename"&&C.string(i.oldUri)&&C.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ze.is(i.annotationId))}e.is=t})(xo||(xo={}));var No;(function(e){function n(r,i,o){var s={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}e.create=n;function t(r){var i=r;return i&&i.kind==="delete"&&C.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||C.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||C.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Ze.is(i.annotationId))}e.is=t})(No||(No={}));var du;(function(e){function n(t){var r=t;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(i){return C.string(i.kind)?To.is(i)||xo.is(i)||No.is(i):ya.is(i)}))}e.is=n})(du||(du={}));var ms=function(){function e(n,t){this.edits=n,this.changeAnnotations=t}return e.prototype.insert=function(n,t,r){var i,o;if(r===void 0?i=Wt.insert(n,t):Ze.is(r)?(o=r,i=Pt.insert(n,t,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),i=Pt.insert(n,t,o)),this.edits.push(i),o!==void 0)return o},e.prototype.replace=function(n,t,r){var i,o;if(r===void 0?i=Wt.replace(n,t):Ze.is(r)?(o=r,i=Pt.replace(n,t,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),i=Pt.replace(n,t,o)),this.edits.push(i),o!==void 0)return o},e.prototype.delete=function(n,t){var r,i;if(t===void 0?r=Wt.del(n):Ze.is(t)?(i=t,r=Pt.del(n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=Pt.del(n,i)),this.edits.push(r),i!==void 0)return i},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),Kp=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,t){var r;if(Ze.is(n)?r=n:(r=this.nextId(),t=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(t===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=t,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var t=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new Kp(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(ya.is(r)){var i=new ms(r.edits,t._changeAnnotations);t._textEditChanges[r.textDocument.uri]=i}})):n.changes&&Object.keys(n.changes).forEach(function(r){var i=new ms(n.changes[r]);t._textEditChanges[r]=i})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(_a.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t={uri:n.uri,version:n.version},r=this._textEditChanges[t.uri];if(!r){var i=[],o={textDocument:t,edits:i};this._workspaceEdit.documentChanges.push(o),r=new ms(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var i=[];this._workspaceEdit.changes[n]=i,r=new ms(i),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Kp,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,t,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i;ti.is(t)||Ze.is(t)?i=t:r=t;var o,s;if(i===void 0?o=To.create(n,r):(s=Ze.is(i)?i:this._changeAnnotations.manage(i),o=To.create(n,r,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s},e.prototype.renameFile=function(n,t,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o;ti.is(r)||Ze.is(r)?o=r:i=r;var s,a;if(o===void 0?s=xo.create(n,t,i):(a=Ze.is(o)?o:this._changeAnnotations.manage(o),s=xo.create(n,t,i,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a},e.prototype.deleteFile=function(n,t,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i;ti.is(t)||Ze.is(t)?i=t:r=t;var o,s;if(i===void 0?o=No.create(n,r):(s=Ze.is(i)?i:this._changeAnnotations.manage(i),o=No.create(n,r,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s},e})();var eh;(function(e){function n(r){return{uri:r}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)}e.is=t})(eh||(eh={}));var nh;(function(e){function n(r,i){return{uri:r,version:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&C.integer(i.version)}e.is=t})(nh||(nh={}));var _a;(function(e){function n(r,i){return{uri:r,version:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&(i.version===null||C.integer(i.version))}e.is=t})(_a||(_a={}));var th;(function(e){function n(r,i,o,s){return{uri:r,languageId:i,version:o,text:s}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.string(i.uri)&&C.string(i.languageId)&&C.integer(i.version)&&C.string(i.text)}e.is=t})(th||(th={}));var Co;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(Co||(Co={}));(function(e){function n(t){var r=t;return r===e.PlainText||r===e.Markdown}e.is=n})(Co||(Co={}));var pu;(function(e){function n(t){var r=t;return C.objectLiteral(t)&&Co.is(r.kind)&&C.string(r.value)}e.is=n})(pu||(pu={}));var rh;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(rh||(rh={}));var ih;(function(e){e.PlainText=1,e.Snippet=2})(ih||(ih={}));var oh;(function(e){e.Deprecated=1})(oh||(oh={}));var sh;(function(e){function n(r,i,o){return{newText:r,insert:i,replace:o}}e.create=n;function t(r){var i=r;return i&&C.string(i.newText)&&Ge.is(i.insert)&&Ge.is(i.replace)}e.is=t})(sh||(sh={}));var ah;(function(e){e.asIs=1,e.adjustIndentation=2})(ah||(ah={}));var lh;(function(e){function n(t){return{label:t}}e.create=n})(lh||(lh={}));var ch;(function(e){function n(t,r){return{items:t||[],isIncomplete:!!r}}e.create=n})(ch||(ch={}));var Ea;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function t(r){var i=r;return C.string(i)||C.objectLiteral(i)&&C.string(i.language)&&C.string(i.value)}e.is=t})(Ea||(Ea={}));var uh;(function(e){function n(t){var r=t;return!!r&&C.objectLiteral(r)&&(pu.is(r.contents)||Ea.is(r.contents)||C.typedArray(r.contents,Ea.is))&&(t.range===void 0||Ge.is(t.range))}e.is=n})(uh||(uh={}));var fh;(function(e){function n(t,r){return r?{label:t,documentation:r}:{label:t}}e.create=n})(fh||(fh={}));var dh;(function(e){function n(t,r){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var s={label:t};return C.defined(r)&&(s.documentation=r),C.defined(i)?s.parameters=i:s.parameters=[],s}e.create=n})(dh||(dh={}));var ph;(function(e){e.Text=1,e.Read=2,e.Write=3})(ph||(ph={}));var hh;(function(e){function n(t,r){var i={range:t};return C.number(r)&&(i.kind=r),i}e.create=n})(hh||(hh={}));var mh;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(mh||(mh={}));var gh;(function(e){e.Deprecated=1})(gh||(gh={}));var vh;(function(e){function n(t,r,i,o,s){var a={name:t,kind:r,location:{uri:o,range:i}};return s&&(a.containerName=s),a}e.create=n})(vh||(vh={}));var yh;(function(e){function n(r,i,o,s,a,c){var l={name:r,detail:i,kind:o,range:s,selectionRange:a};return c!==void 0&&(l.children=c),l}e.create=n;function t(r){var i=r;return i&&C.string(i.name)&&C.number(i.kind)&&Ge.is(i.range)&&Ge.is(i.selectionRange)&&(i.detail===void 0||C.string(i.detail))&&(i.deprecated===void 0||C.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}e.is=t})(yh||(yh={}));var _h;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(_h||(_h={}));var Eh;(function(e){function n(r,i){var o={diagnostics:r};return i!=null&&(o.only=i),o}e.create=n;function t(r){var i=r;return C.defined(i)&&C.typedArray(i.diagnostics,va.is)&&(i.only===void 0||C.typedArray(i.only,C.string))}e.is=t})(Eh||(Eh={}));var Sh;(function(e){function n(r,i,o){var s={title:r},a=!0;return typeof i=="string"?(a=!1,s.kind=i):ko.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}e.create=n;function t(r){var i=r;return i&&C.string(i.title)&&(i.diagnostics===void 0||C.typedArray(i.diagnostics,va.is))&&(i.kind===void 0||C.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||ko.is(i.command))&&(i.isPreferred===void 0||C.boolean(i.isPreferred))&&(i.edit===void 0||du.is(i.edit))}e.is=t})(Sh||(Sh={}));var wh;(function(e){function n(r,i){var o={range:r};return C.defined(i)&&(o.data=i),o}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.undefined(i.command)||ko.is(i.command))}e.is=t})(wh||(wh={}));var bh;(function(e){function n(r,i){return{tabSize:r,insertSpaces:i}}e.create=n;function t(r){var i=r;return C.defined(i)&&C.uinteger(i.tabSize)&&C.boolean(i.insertSpaces)}e.is=t})(bh||(bh={}));var kh;(function(e){function n(r,i,o){return{range:r,target:i,data:o}}e.create=n;function t(r){var i=r;return C.defined(i)&&Ge.is(i.range)&&(C.undefined(i.target)||C.string(i.target))}e.is=t})(kh||(kh={}));var Th;(function(e){function n(r,i){return{range:r,parent:i}}e.create=n;function t(r){var i=r;return i!==void 0&&Ge.is(i.range)&&(i.parent===void 0||e.is(i.parent))}e.is=t})(Th||(Th={}));var xh;(function(e){function n(o,s,a,c){return new lb(o,s,a,c)}e.create=n;function t(o){var s=o;return!!(C.defined(s)&&C.string(s.uri)&&(C.undefined(s.languageId)||C.string(s.languageId))&&C.uinteger(s.lineCount)&&C.func(s.getText)&&C.func(s.positionAt)&&C.func(s.offsetAt))}e.is=t;function r(o,s){for(var a=o.getText(),c=i(s,function(d,E){var w=d.range.start.line-E.range.start.line;return w===0?d.range.start.character-E.range.start.character:w}),l=a.length,u=c.length-1;u>=0;u--){var f=c[u],p=o.offsetAt(f.range.start),h=o.offsetAt(f.range.end);if(h<=l)a=a.substring(0,p)+f.newText+a.substring(h,a.length);else throw new Error("Overlapping edit");l=p}return a}e.applyEdits=r;function i(o,s){if(o.length<=1)return o;var a=o.length/2|0,c=o.slice(0,a),l=o.slice(a);i(c,s),i(l,s);for(var u=0,f=0,p=0;u<c.length&&f<l.length;){var h=s(c[u],l[f]);h<=0?o[p++]=c[u++]:o[p++]=l[f++]}for(;u<c.length;)o[p++]=c[u++];for(;f<l.length;)o[p++]=l[f++];return o}})(xh||(xh={}));var lb=function(){function e(n,t,r,i){this._uri=n,this._languageId=t,this._version=r,this._content=i,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var t=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(t,r)}return this._content},e.prototype.update=function(n,t){this._content=n.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],t=this._content,r=!0,i=0;i<t.length;i++){r&&(n.push(i),r=!1);var o=t.charAt(i);r=o==="\r"||o===`
`,o==="\r"&&i+1<t.length&&t.charAt(i+1)===`
`&&i++}r&&t.length>0&&n.push(t.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var t=this.getLineOffsets(),r=0,i=t.length;if(i===0)return Kn.create(0,n);for(;r<i;){var o=Math.floor((r+i)/2);t[o]>n?i=o:r=o+1}var s=r-1;return Kn.create(s,n-t[s])},e.prototype.offsetAt=function(n){var t=this.getLineOffsets();if(n.line>=t.length)return this._content.length;if(n.line<0)return 0;var r=t[n.line],i=n.line+1<t.length?t[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,i),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),C;(function(e){var n=Object.prototype.toString;function t(h){return typeof h!="undefined"}e.defined=t;function r(h){return typeof h=="undefined"}e.undefined=r;function i(h){return h===!0||h===!1}e.boolean=i;function o(h){return n.call(h)==="[object String]"}e.string=o;function s(h){return n.call(h)==="[object Number]"}e.number=s;function a(h,d,E){return n.call(h)==="[object Number]"&&d<=h&&h<=E}e.numberRange=a;function c(h){return n.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}e.integer=c;function l(h){return n.call(h)==="[object Number]"&&0<=h&&h<=2147483647}e.uinteger=l;function u(h){return n.call(h)==="[object Function]"}e.func=u;function f(h){return h!==null&&typeof h=="object"}e.objectLiteral=f;function p(h,d){return Array.isArray(h)&&h.every(d)}e.typedArray=p})(C||(C={}));class cb{constructor(n){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>this._pos===0,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const t=this._sourceText.charAt(this._pos);return this._pos++,t},this.eat=t=>{if(this._testNextCharacter(t))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=t=>{let r=this._testNextCharacter(t),i=!1;for(r&&(i=r,this._start=this._pos);r;)this._pos++,r=this._testNextCharacter(t),i=!0;return i},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=t=>{this._pos=t},this.match=(t,r=!0,i=!1)=>{let o=null,s=null;return typeof t=="string"?(s=new RegExp(t,i?"i":"g").test(this._sourceText.substr(this._pos,t.length)),o=t):t instanceof RegExp&&(s=this._sourceText.slice(this._pos).match(t),o=s&&s[0]),s!=null&&(typeof t=="string"||s instanceof Array&&this._sourceText.startsWith(s[0],this._pos))?(r&&(this._start=this._pos,o&&o.length&&(this._pos+=o.length)),s):!1},this.backUp=t=>{this._pos-=t},this.column=()=>this._pos,this.indentation=()=>{const t=this._sourceText.match(/\s*/);let r=0;if(t&&t.length!==0){const i=t[0];let o=0;for(;i.length>o;)i.charCodeAt(o)===9?r+=2:r++,o++}return r},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=n}_testNextCharacter(n){const t=this._sourceText.charAt(this._pos);let r=!1;return typeof n=="string"?r=t===n:r=n instanceof RegExp?n.test(t):n(t),r}}function Oe(e){return{ofRule:e}}function ue(e,n){return{ofRule:e,isList:!0,separator:n}}function ub(e,n){const t=e.match;return e.match=r=>{let i=!1;return t&&(i=t(r)),i&&n.every(o=>o.match&&!o.match(r))},e}function zl(e,n){return{style:n,match:t=>t.kind===e}}function ee(e,n){return{style:n||"punctuation",match:t=>t.kind==="Punctuation"&&t.value===e}}const fb=e=>e===" "||e==="	"||e===","||e===`
`||e==="\r"||e==="\uFEFF"||e==="\xA0",db={Name:/^[_A-Za-z][_0-9A-Za-z]*/,Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,Comment:/^#.*/},pb={Document:[ue("Definition")],Definition(e){switch(e.value){case"{":return"ShortQuery";case"query":return"Query";case"mutation":return"Mutation";case"subscription":return"Subscription";case"fragment":return y.FRAGMENT_DEFINITION;case"schema":return"SchemaDef";case"scalar":return"ScalarDef";case"type":return"ObjectTypeDef";case"interface":return"InterfaceDef";case"union":return"UnionDef";case"enum":return"EnumDef";case"input":return"InputDef";case"extend":return"ExtendDef";case"directive":return"DirectiveDef"}},ShortQuery:["SelectionSet"],Query:[ze("query"),Oe(_e("def")),Oe("VariableDefinitions"),ue("Directive"),"SelectionSet"],Mutation:[ze("mutation"),Oe(_e("def")),Oe("VariableDefinitions"),ue("Directive"),"SelectionSet"],Subscription:[ze("subscription"),Oe(_e("def")),Oe("VariableDefinitions"),ue("Directive"),"SelectionSet"],VariableDefinitions:[ee("("),ue("VariableDefinition"),ee(")")],VariableDefinition:["Variable",ee(":"),"Type",Oe("DefaultValue")],Variable:[ee("$","variable"),_e("variable")],DefaultValue:[ee("="),"Value"],SelectionSet:[ee("{"),ue("Selection"),ee("}")],Selection(e,n){return e.value==="..."?n.match(/[\s\u00a0,]*(on\b|@|{)/,!1)?"InlineFragment":"FragmentSpread":n.match(/[\s\u00a0,]*:/,!1)?"AliasedField":"Field"},AliasedField:[_e("property"),ee(":"),_e("qualifier"),Oe("Arguments"),ue("Directive"),Oe("SelectionSet")],Field:[_e("property"),Oe("Arguments"),ue("Directive"),Oe("SelectionSet")],Arguments:[ee("("),ue("Argument"),ee(")")],Argument:[_e("attribute"),ee(":"),"Value"],FragmentSpread:[ee("..."),_e("def"),ue("Directive")],InlineFragment:[ee("..."),Oe("TypeCondition"),ue("Directive"),"SelectionSet"],FragmentDefinition:[ze("fragment"),Oe(ub(_e("def"),[ze("on")])),"TypeCondition",ue("Directive"),"SelectionSet"],TypeCondition:[ze("on"),"NamedType"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue";case"$":return"Variable";case"&":return"NamedType"}return null;case"Name":switch(e.value){case"true":case"false":return"BooleanValue"}return e.value==="null"?"NullValue":"EnumValue"}},NumberValue:[zl("Number","number")],StringValue:[{style:"string",match:e=>e.kind==="String",update(e,n){n.value.startsWith('"""')&&(e.inBlockstring=!n.value.slice(3).endsWith('"""'))}}],BooleanValue:[zl("Name","builtin")],NullValue:[zl("Name","keyword")],EnumValue:[_e("string-2")],ListValue:[ee("["),ue("Value"),ee("]")],ObjectValue:[ee("{"),ue("ObjectField"),ee("}")],ObjectField:[_e("attribute"),ee(":"),"Value"],Type(e){return e.value==="["?"ListType":"NonNullType"},ListType:[ee("["),"Type",ee("]"),Oe(ee("!"))],NonNullType:["NamedType",Oe(ee("!"))],NamedType:[hb("atom")],Directive:[ee("@","meta"),_e("meta"),Oe("Arguments")],DirectiveDef:[ze("directive"),ee("@","meta"),_e("meta"),Oe("ArgumentsDef"),ze("on"),ue("DirectiveLocation",ee("|"))],InterfaceDef:[ze("interface"),_e("atom"),Oe("Implements"),ue("Directive"),ee("{"),ue("FieldDef"),ee("}")],Implements:[ze("implements"),ue("NamedType",ee("&"))],DirectiveLocation:[_e("string-2")],SchemaDef:[ze("schema"),ue("Directive"),ee("{"),ue("OperationTypeDef"),ee("}")],OperationTypeDef:[_e("keyword"),ee(":"),_e("atom")],ScalarDef:[ze("scalar"),_e("atom"),ue("Directive")],ObjectTypeDef:[ze("type"),_e("atom"),Oe("Implements"),ue("Directive"),ee("{"),ue("FieldDef"),ee("}")],FieldDef:[_e("property"),Oe("ArgumentsDef"),ee(":"),"Type",ue("Directive")],ArgumentsDef:[ee("("),ue("InputValueDef"),ee(")")],InputValueDef:[_e("attribute"),ee(":"),"Type",Oe("DefaultValue"),ue("Directive")],UnionDef:[ze("union"),_e("atom"),ue("Directive"),ee("="),ue("UnionMember",ee("|"))],UnionMember:["NamedType"],EnumDef:[ze("enum"),_e("atom"),ue("Directive"),ee("{"),ue("EnumValueDef"),ee("}")],EnumValueDef:[_e("string-2"),ue("Directive")],InputDef:[ze("input"),_e("atom"),ue("Directive"),ee("{"),ue("InputValueDef"),ee("}")],ExtendDef:[ze("extend"),"ObjectTypeDef"]};function ze(e){return{style:"keyword",match:n=>n.kind==="Name"&&n.value===e}}function _e(e){return{style:e,match:n=>n.kind==="Name",update(n,t){n.name=t.value}}}function hb(e){return{style:e,match:n=>n.kind==="Name",update(n,t){n.prevState&&n.prevState.prevState&&(n.name=t.value,n.prevState.prevState.type=t.value)}}}function mb(e={eatWhitespace:n=>n.eatWhile(fb),lexRules:db,parseRules:pb,editorConfig:{}}){return{startState(){const n={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeperator:!1,prevState:null};return Ui(e.parseRules,n,y.DOCUMENT),n},token(n,t){return gb(n,t,e)}}}function gb(e,n,t){if(n.inBlockstring)return e.match(/.*"""/)?(n.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:r,parseRules:i,eatWhitespace:o,editorConfig:s}=t;if(n.rule&&n.rule.length===0?Bf(n):n.needsAdvance&&(n.needsAdvance=!1,hu(n,!0)),e.sol()){const l=s&&s.tabSize||2;n.indentLevel=Math.floor(e.indentation()/l)}if(o(e))return"ws";const a=yb(r,e);if(!a)return e.match(/\S+/)||e.match(/\s/),Ui(Bl,n,"Invalid"),"invalidchar";if(a.kind==="Comment")return Ui(Bl,n,"Comment"),"comment";const c=Nh({},n);if(a.kind==="Punctuation"){if(/^[{([]/.test(a.value))n.indentLevel!==void 0&&(n.levels=(n.levels||[]).concat(n.indentLevel+1));else if(/^[})\]]/.test(a.value)){const l=n.levels=(n.levels||[]).slice(0,-1);n.indentLevel&&l.length>0&&l[l.length-1]<n.indentLevel&&(n.indentLevel=l[l.length-1])}}for(;n.rule;){let l=typeof n.rule=="function"?n.step===0?n.rule(a,e):null:n.rule[n.step];if(n.needsSeperator&&(l=l&&(l==null?void 0:l.separator)),l){if(l.ofRule&&(l=l.ofRule),typeof l=="string"){Ui(i,n,l);continue}if(l.match&&l.match(a))return l.update&&l.update(n,a),a.kind==="Punctuation"?hu(n,!0):n.needsAdvance=!0,l.style}vb(n)}return Nh(n,c),Ui(Bl,n,"Invalid"),"invalidchar"}function Nh(e,n){const t=Object.keys(n);for(let r=0;r<t.length;r++)e[t[r]]=n[t[r]];return e}const Bl={Invalid:[],Comment:[]};function Ui(e,n,t){if(!e[t])throw new TypeError("Unknown rule: "+t);n.prevState=Object.assign({},n),n.kind=t,n.name=null,n.type=null,n.rule=e[t],n.step=0,n.needsSeperator=!1}function Bf(e){!e.prevState||(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeperator=e.prevState.needsSeperator,e.prevState=e.prevState.prevState)}function hu(e,n){if(Ch(e)&&e.rule){const t=e.rule[e.step];if(t.separator){const r=t.separator;if(e.needsSeperator=!e.needsSeperator,!e.needsSeperator&&r.ofRule)return}if(n)return}for(e.needsSeperator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)Bf(e),e.rule&&(Ch(e)?e.rule&&e.rule[e.step].separator&&(e.needsSeperator=!e.needsSeperator):(e.needsSeperator=!1,e.step++))}function Ch(e){const n=Array.isArray(e.rule)&&typeof e.rule[e.step]!="string"&&e.rule[e.step];return n&&n.isList}function vb(e){for(;e.rule&&!(Array.isArray(e.rule)&&e.rule[e.step].ofRule);)Bf(e);e.rule&&hu(e,!1)}function yb(e,n){const t=Object.keys(e);for(let r=0;r<t.length;r++){const i=n.match(e[t[r]]);if(i&&i instanceof Array)return{kind:t[r],value:i[0]}}}const _b={ALIASED_FIELD:"AliasedField",ARGUMENTS:"Arguments",SHORT_QUERY:"ShortQuery",QUERY:"Query",MUTATION:"Mutation",SUBSCRIPTION:"Subscription",TYPE_CONDITION:"TypeCondition",INVALID:"Invalid",COMMENT:"Comment",SCHEMA_DEF:"SchemaDef",SCALAR_DEF:"ScalarDef",OBJECT_TYPE_DEF:"ObjectTypeDef",OBJECT_VALUE:"ObjectValue",LIST_VALUE:"ListValue",INTERFACE_DEF:"InterfaceDef",UNION_DEF:"UnionDef",ENUM_DEF:"EnumDef",ENUM_VALUE:"EnumValue",FIELD_DEF:"FieldDef",INPUT_DEF:"InputDef",INPUT_VALUE_DEF:"InputValueDef",ARGUMENTS_DEF:"ArgumentsDef",EXTEND_DEF:"ExtendDef",DIRECTIVE_DEF:"DirectiveDef",IMPLEMENTS:"Implements",VARIABLE_DEFINITIONS:"VariableDefinitions",TYPE:"Type"},Zoe=Object.assign(Object.assign({},y),_b);var Za={exports:{}};function jy(e,n){if(e!=null)return e;var t=new Error(n!==void 0?n:"Got unexpected "+e);throw t.framesToPop=1,t}Za.exports=jy;Za.exports.default=jy;Object.defineProperty(Za.exports,"__esModule",{value:!0});var Ih=O0(Za.exports);const Koe=(e,n)=>{if(!n)return[];let t;try{t=st(e)}catch{return[]}return $y(t,n)},$y=(e,n)=>{if(!n)return[];const t=new Map,r=new Set;Mn(e,{FragmentDefinition(s){t.set(s.name.value,!0)},FragmentSpread(s){r.has(s.name.value)||r.add(s.name.value)}});const i=new Set;r.forEach(s=>{!t.has(s)&&n.has(s)&&i.add(Ih(n.get(s)))});const o=[];return i.forEach(s=>{Mn(s,{FragmentSpread(a){!r.has(a.name.value)&&n.get(a.name.value)&&(i.add(Ih(n.get(a.name.value))),r.add(a.name.value))}}),t.has(s.name.value)||o.push(s)}),o};class Qf{constructor(n,t){this.containsPosition=r=>this.start.line===r.line?this.start.character<=r.character:this.end.line===r.line?this.end.character>=r.character:this.start.line<=r.line&&this.end.line>=r.line,this.start=n,this.end=t}setStart(n,t){this.start=new kr(n,t)}setEnd(n,t){this.end=new kr(n,t)}}class kr{constructor(n,t){this.lessThanOrEqualTo=r=>this.line<r.line||this.line===r.line&&this.character<=r.character,this.line=n,this.character=t}setLine(n){this.line=n}setCharacter(n){this.character=n}}function Io(e,n){const t=`
`,r=e.slice(0,n),i=r.split(t).length-1,o=r.lastIndexOf(t);return new kr(i,n-o-1)}function Eb(e,n){const t=Io(e,n.start),r=Io(e,n.end);return new Qf(t,r)}const Sb=[Ey,Oy,Fy,Dy,Ay,Iy,Mf,Pf,Uf,Ty,Vf,zf];function wb(e,n,t,r,i){const o=Ry.filter(a=>!(a===Sy||a===vy||r&&a===_y));return t&&Array.prototype.push.apply(o,t),i&&Array.prototype.push.apply(o,Sb),Py(e,n,o).filter(a=>{if(a.message.indexOf("Unknown directive")!==-1&&a.nodes){const c=a.nodes[0];if(c&&c.kind===y.DIRECTIVE){const l=c.name.value;if(l==="arguments"||l==="argumentDefinitions")return!1}}return!0})}function bb(e,n){const t=Object.create(null);return n.definitions.forEach(r=>{if(r.kind==="OperationDefinition"){const i=r.variableDefinitions;i&&i.forEach(({variable:o,type:s})=>{const a=mn(e,s);a?t[o.name.value]=a:s.kind===y.NAMED_TYPE&&s.name.value==="Float"&&(t[o.name.value]=ly)})}}),t}function kb(e,n){const t=n?bb(n,e):void 0,r=[];return Mn(e,{OperationDefinition(i){r.push(i)}}),{variableToType:t,operations:r}}function Ms(e,n){if(!!n)try{const t=st(n);return Object.assign(Object.assign({},kb(t,e)),{documentAST:t})}catch{return}}const ese=Ms;var Vy=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})};const Uy="GraphQL";function Hf(e,n){if(!e)throw new Error(n)}function $o(e,n){const t=n.loc;return Hf(t,"Expected ASTNode to have a location."),Eb(e,t)}function zy(e,n){const t=n.loc;return Hf(t,"Expected ASTNode to have a location."),Io(e,t.start)}function nse(e,n,t){return Vy(this,void 0,void 0,function*(){const r=n.name.value,i=t.filter(({definition:s})=>s.name&&s.name.value===r);if(i.length===0)throw Error(`Definition not found for GraphQL type ${r}`);const o=i.map(({filePath:s,content:a,definition:c})=>Tb(s||"",a,c));return{definitions:o,queryRange:o.map(s=>$o(e,n))}})}function tse(e,n,t){return Vy(this,void 0,void 0,function*(){const r=n.name.value,i=t.filter(({definition:s})=>s.name.value===r);if(i.length===0)throw Error(`Definition not found for GraphQL fragment ${r}`);const o=i.map(({filePath:s,content:a,definition:c})=>By(s||"",a,c));return{definitions:o,queryRange:o.map(s=>$o(e,n))}})}function rse(e,n,t){return{definitions:[By(e,n,t)],queryRange:t.name?[$o(n,t.name)]:[]}}function By(e,n,t){const r=t.name;if(!r)throw Error("Expected ASTNode to have a Name.");return{path:e,position:zy(n,t),range:$o(n,t),name:r.value||"",language:Uy,projectRoot:e}}function Tb(e,n,t){const r=t.name;return Hf(r,"Expected ASTNode to have a Name."),{path:e,position:zy(n,t),range:$o(n,t),name:r.value||"",language:Uy,projectRoot:e}}const gs={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},mu={[gs.Error]:1,[gs.Warning]:2,[gs.Information]:3,[gs.Hint]:4},Sa=(e,n)=>{if(!e)throw new Error(n)};function ise(e,n=null,t,r,i){let o=null;i&&(typeof i=="string"?e+=`

`+i:e+=`

`+i.reduce((s,a)=>(s+=we(a)+`

`,s),""));try{o=st(e)}catch(s){const a=Nb(s.locations[0],e);return[{severity:mu.Error,message:s.message,source:"GraphQL: Syntax",range:a}]}return xb(o,n,t,r)}function xb(e,n=null,t,r){if(!n)return[];const i=Dh(wb(n,e,t,r),s=>Ah(s,mu.Error,"Validation")),o=Dh(Py(n,e,[Xw]),s=>Ah(s,mu.Warning,"Deprecation"));return i.concat(o)}function Dh(e,n){return Array.prototype.concat.apply([],e.map(n))}function Ah(e,n,t){if(!e.nodes)return[];const r=[];return e.nodes.forEach(i=>{const o=i.kind!=="Variable"&&"name"in i&&i.name!==void 0?i.name:"variable"in i&&i.variable!==void 0?i.variable:i;if(o){Sa(e.locations,"GraphQL validation error requires locations.");const s=e.locations[0],a=Cb(o),c=s.column+(a.end-a.start);r.push({source:`GraphQL: ${t}`,message:e.message,severity:n,range:new Qf(new kr(s.line-1,s.column-1),new kr(s.line-1,c))})}}),r}function Nb(e,n){const t=mb(),r=t.startState(),i=n.split(`
`);Sa(i.length>=e.line,"Query text must have more lines than where the error happened");let o=null;for(let l=0;l<e.line;l++)for(o=new cb(i[l]);!o.eol()&&t.token(o,r)!=="invalidchar";);Sa(o,"Expected Parser stream to be available.");const s=e.line-1,a=o.getStartOfToken(),c=o.getCurrentPosition();return new Qf(new kr(s,a),new kr(s,c))}function Cb(e){const t=e.loc;return Sa(t,"Expected ASTNode to have a location."),t}const{INLINE_FRAGMENT:Ib}=y;function ose(e){let n;try{n=st(e)}catch{return null}const t=Db(e);return{outlineTrees:Mn(n,{leave(i){return t!==void 0&&i.kind in t?t[i.kind](i):null}})}}function Db(e){const n=t=>({representativeName:t.name,startPosition:Io(e,t.loc.start),endPosition:Io(e,t.loc.end),kind:t.kind,children:t.selectionSet||t.fields||t.values||t.arguments||[]});return{Field:t=>{const r=t.alias?[Ee("plain",t.alias),Ee("plain",": ")]:[];return r.push(Ee("plain",t.name)),Object.assign({tokenizedText:r},n(t))},OperationDefinition:t=>Object.assign({tokenizedText:[Ee("keyword",t.operation),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),Document:t=>t.definitions,SelectionSet:t=>Ab(t.selections,r=>r.kind===Ib?r.selectionSet:r),Name:t=>t.value,FragmentDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","fragment"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),InterfaceTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","interface"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),EnumTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","enum"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),EnumValueDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),ObjectTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","type"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),InputObjectTypeDefinition:t=>Object.assign({tokenizedText:[Ee("keyword","input"),Ee("whitespace"," "),Ee("class-name",t.name)]},n(t)),FragmentSpread:t=>Object.assign({tokenizedText:[Ee("plain","..."),Ee("class-name",t.name)]},n(t)),InputValueDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),FieldDefinition:t=>Object.assign({tokenizedText:[Ee("plain",t.name)]},n(t)),InlineFragment:t=>t.selectionSet}}function Ee(e,n){return{kind:e,value:n}}function Ab(e,n){const t=[];for(let r=0;r<e.length;r++){const i=n(e[r],r);Array.isArray(i)?t.push(...i):t.push(i)}return t}const sse={Created:1,Changed:2,Deleted:3};var Oh;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(Oh||(Oh={}));var Ob=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Fb=function(e){Ob(n,e);function n(t){var r=e.call(this,t)||this;return r._onClick=function(){r.props.isRunning?r.props.onStop():r.props.onRun()},r._onOptionSelected=function(i){r.setState({optionsOpen:!1}),r.props.onRun(i.name&&i.name.value)},r._onOptionsOpen=function(i){var o=!0,s=i.currentTarget;r.setState({highlight:null,optionsOpen:!0});var a=function(c){var l;if(o&&c.target===s)o=!1;else{document.removeEventListener("mouseup",a),a=null;var u=c.currentTarget&&((l=s.parentNode)===null||l===void 0?void 0:l.compareDocumentPosition(c.currentTarget))&&Node.DOCUMENT_POSITION_CONTAINED_BY;u||r.setState({optionsOpen:!1})}};document.addEventListener("mouseup",a)},r.state={optionsOpen:!1,highlight:null},r}return n.prototype.render=function(){var t=this,r=this.props.operations||[],i=this.state.optionsOpen,o=r&&r.length>1,s=null;if(o&&i){var a=this.state.highlight;s=_.createElement("ul",{className:"execute-options"},r.map(function(f,p){var h=f.name?f.name.value:"<Unnamed "+f.operation+">";return _.createElement("li",{key:h+"-"+p,className:f===a?"selected":void 0,onMouseOver:function(){return t.setState({highlight:f})},onMouseOut:function(){return t.setState({highlight:null})},onMouseUp:function(){return t._onOptionSelected(f)}},h)}))}var c;(this.props.isRunning||!o)&&(c=this._onClick);var l=function(){};!this.props.isRunning&&o&&!i&&(l=this._onOptionsOpen);var u=this.props.isRunning?_.createElement("path",{d:"M 10 10 L 23 10 L 23 23 L 10 23 z"}):_.createElement("path",{d:"M 11 9 L 24 16 L 11 23 z"});return _.createElement("div",{className:"execute-button-wrap"},_.createElement("button",{type:"button",className:"execute-button",onMouseDown:l,onClick:c,title:"Execute Query (Ctrl-Enter)"},_.createElement("svg",{width:"34",height:"34"},u)),s)},n}(_.Component),Rb=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();function Fh(e){if(e.type==="string"){var n=e.string.slice(1).slice(0,-1).trim();try{var t=window.location;return new URL(n,t.protocol+"//"+t.host)}catch{return}}}function Lb(e){return/(bmp|gif|jpeg|jpg|png|svg)$/.test(e.pathname)}var Pb=function(e){Rb(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t._node=null,t.state={width:null,height:null,src:null,mime:null},t}return n.shouldRender=function(t){var r=Fh(t);return r?Lb(r):!1},n.prototype.componentDidMount=function(){this._updateMetadata()},n.prototype.componentDidUpdate=function(){this._updateMetadata()},n.prototype.render=function(){var t=this,r,i=null;if(this.state.width!==null&&this.state.height!==null){var o=this.state.width+"x"+this.state.height;this.state.mime!==null&&(o+=" "+this.state.mime),i=_.createElement("div",null,o)}return _.createElement("div",null,_.createElement("img",{onLoad:function(){return t._updateMetadata()},ref:function(s){t._node=s},src:(r=Fh(this.props.token))===null||r===void 0?void 0:r.href}),i)},n.prototype._updateMetadata=function(){var t=this;if(!!this._node){var r=this._node.naturalWidth,i=this._node.naturalHeight,o=this._node.src;o!==this.state.src&&(this.setState({src:o}),fetch(o,{method:"HEAD"}).then(function(s){t.setState({mime:s.headers.get("Content-Type")})})),(r!==this.state.width||i!==this.state.height)&&this.setState({height:i,width:r})}},n}(_.Component),Mb=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Fr=function(e){Mb(n,e);function n(t){var r=e.call(this,t)||this;return r.handleClick=function(){try{r.props.onClick(),r.setState({error:null})}catch(i){r.setState({error:i})}},r.state={error:null},r}return n.prototype.render=function(){var t=this.state.error;return _.createElement("button",{className:"toolbar-button"+(t?" error":""),onClick:this.handleClick,title:t?t.message:this.props.title,"aria-invalid":t?"true":"false"},this.props.label)},n}(_.Component);function qb(e){var n=e.children;return _.createElement("div",{className:"toolbar-button-group"},n)}var jb=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),$b=function(e){jb(n,e);function n(t){var r=e.call(this,t)||this;return r._node=null,r._listener=null,r.handleOpen=function(i){gu(i),r.setState({visible:!0}),r._subscribe()},r.state={visible:!1},r}return n.prototype.componentWillUnmount=function(){this._release()},n.prototype.render=function(){var t=this,r=this.state.visible;return _.createElement("a",{className:"toolbar-menu toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:gu,ref:function(i){i&&(t._node=i)},title:this.props.title},this.props.label,_.createElement("svg",{width:"14",height:"8"},_.createElement("path",{fill:"#666",d:"M 5 1.5 L 14 1.5 L 9.5 7 z"})),_.createElement("ul",{className:"toolbar-menu-items"+(r?" open":"")},this.props.children))},n.prototype._subscribe=function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))},n.prototype._release=function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)},n.prototype.handleClick=function(t){this._node!==t.target&&(t.preventDefault(),this.setState({visible:!1}),this._release())},n}(_.Component),Vb=function(e){var n=e.onSelect,t=e.title,r=e.label;return _.createElement("li",{onMouseOver:function(i){i.currentTarget.className="hover"},onMouseOut:function(i){i.currentTarget.className=""},onMouseDown:gu,onMouseUp:n,title:t},r)};function gu(e){e.preventDefault()}var fe={};const Ub="\xC1",zb="\xE1",Bb="\u0102",Qb="\u0103",Hb="\u223E",Gb="\u223F",Wb="\u223E\u0333",Yb="\xC2",Jb="\xE2",Xb="\xB4",Zb="\u0410",Kb="\u0430",ek="\xC6",nk="\xE6",tk="\u2061",rk="\u{1D504}",ik="\u{1D51E}",ok="\xC0",sk="\xE0",ak="\u2135",lk="\u2135",ck="\u0391",uk="\u03B1",fk="\u0100",dk="\u0101",pk="\u2A3F",hk="&",mk="&",gk="\u2A55",vk="\u2A53",yk="\u2227",_k="\u2A5C",Ek="\u2A58",Sk="\u2A5A",wk="\u2220",bk="\u29A4",kk="\u2220",Tk="\u29A8",xk="\u29A9",Nk="\u29AA",Ck="\u29AB",Ik="\u29AC",Dk="\u29AD",Ak="\u29AE",Ok="\u29AF",Fk="\u2221",Rk="\u221F",Lk="\u22BE",Pk="\u299D",Mk="\u2222",qk="\xC5",jk="\u237C",$k="\u0104",Vk="\u0105",Uk="\u{1D538}",zk="\u{1D552}",Bk="\u2A6F",Qk="\u2248",Hk="\u2A70",Gk="\u224A",Wk="\u224B",Yk="'",Jk="\u2061",Xk="\u2248",Zk="\u224A",Kk="\xC5",eT="\xE5",nT="\u{1D49C}",tT="\u{1D4B6}",rT="\u2254",iT="*",oT="\u2248",sT="\u224D",aT="\xC3",lT="\xE3",cT="\xC4",uT="\xE4",fT="\u2233",dT="\u2A11",pT="\u224C",hT="\u03F6",mT="\u2035",gT="\u223D",vT="\u22CD",yT="\u2216",_T="\u2AE7",ET="\u22BD",ST="\u2305",wT="\u2306",bT="\u2305",kT="\u23B5",TT="\u23B6",xT="\u224C",NT="\u0411",CT="\u0431",IT="\u201E",DT="\u2235",AT="\u2235",OT="\u2235",FT="\u29B0",RT="\u03F6",LT="\u212C",PT="\u212C",MT="\u0392",qT="\u03B2",jT="\u2136",$T="\u226C",VT="\u{1D505}",UT="\u{1D51F}",zT="\u22C2",BT="\u25EF",QT="\u22C3",HT="\u2A00",GT="\u2A01",WT="\u2A02",YT="\u2A06",JT="\u2605",XT="\u25BD",ZT="\u25B3",KT="\u2A04",e1="\u22C1",n1="\u22C0",t1="\u290D",r1="\u29EB",i1="\u25AA",o1="\u25B4",s1="\u25BE",a1="\u25C2",l1="\u25B8",c1="\u2423",u1="\u2592",f1="\u2591",d1="\u2593",p1="\u2588",h1="=\u20E5",m1="\u2261\u20E5",g1="\u2AED",v1="\u2310",y1="\u{1D539}",_1="\u{1D553}",E1="\u22A5",S1="\u22A5",w1="\u22C8",b1="\u29C9",k1="\u2510",T1="\u2555",x1="\u2556",N1="\u2557",C1="\u250C",I1="\u2552",D1="\u2553",A1="\u2554",O1="\u2500",F1="\u2550",R1="\u252C",L1="\u2564",P1="\u2565",M1="\u2566",q1="\u2534",j1="\u2567",$1="\u2568",V1="\u2569",U1="\u229F",z1="\u229E",B1="\u22A0",Q1="\u2518",H1="\u255B",G1="\u255C",W1="\u255D",Y1="\u2514",J1="\u2558",X1="\u2559",Z1="\u255A",K1="\u2502",ex="\u2551",nx="\u253C",tx="\u256A",rx="\u256B",ix="\u256C",ox="\u2524",sx="\u2561",ax="\u2562",lx="\u2563",cx="\u251C",ux="\u255E",fx="\u255F",dx="\u2560",px="\u2035",hx="\u02D8",mx="\u02D8",gx="\xA6",vx="\u{1D4B7}",yx="\u212C",_x="\u204F",Ex="\u223D",Sx="\u22CD",wx="\u29C5",bx="\\",kx="\u27C8",Tx="\u2022",xx="\u2022",Nx="\u224E",Cx="\u2AAE",Ix="\u224F",Dx="\u224E",Ax="\u224F",Ox="\u0106",Fx="\u0107",Rx="\u2A44",Lx="\u2A49",Px="\u2A4B",Mx="\u2229",qx="\u22D2",jx="\u2A47",$x="\u2A40",Vx="\u2145",Ux="\u2229\uFE00",zx="\u2041",Bx="\u02C7",Qx="\u212D",Hx="\u2A4D",Gx="\u010C",Wx="\u010D",Yx="\xC7",Jx="\xE7",Xx="\u0108",Zx="\u0109",Kx="\u2230",eN="\u2A4C",nN="\u2A50",tN="\u010A",rN="\u010B",iN="\xB8",oN="\xB8",sN="\u29B2",aN="\xA2",lN="\xB7",cN="\xB7",uN="\u{1D520}",fN="\u212D",dN="\u0427",pN="\u0447",hN="\u2713",mN="\u2713",gN="\u03A7",vN="\u03C7",yN="\u02C6",_N="\u2257",EN="\u21BA",SN="\u21BB",wN="\u229B",bN="\u229A",kN="\u229D",TN="\u2299",xN="\xAE",NN="\u24C8",CN="\u2296",IN="\u2295",DN="\u2297",AN="\u25CB",ON="\u29C3",FN="\u2257",RN="\u2A10",LN="\u2AEF",PN="\u29C2",MN="\u2232",qN="\u201D",jN="\u2019",$N="\u2663",VN="\u2663",UN=":",zN="\u2237",BN="\u2A74",QN="\u2254",HN="\u2254",GN=",",WN="@",YN="\u2201",JN="\u2218",XN="\u2201",ZN="\u2102",KN="\u2245",eC="\u2A6D",nC="\u2261",tC="\u222E",rC="\u222F",iC="\u222E",oC="\u{1D554}",sC="\u2102",aC="\u2210",lC="\u2210",cC="\xA9",uC="\xA9",fC="\u2117",dC="\u2233",pC="\u21B5",hC="\u2717",mC="\u2A2F",gC="\u{1D49E}",vC="\u{1D4B8}",yC="\u2ACF",_C="\u2AD1",EC="\u2AD0",SC="\u2AD2",wC="\u22EF",bC="\u2938",kC="\u2935",TC="\u22DE",xC="\u22DF",NC="\u21B6",CC="\u293D",IC="\u2A48",DC="\u2A46",AC="\u224D",OC="\u222A",FC="\u22D3",RC="\u2A4A",LC="\u228D",PC="\u2A45",MC="\u222A\uFE00",qC="\u21B7",jC="\u293C",$C="\u22DE",VC="\u22DF",UC="\u22CE",zC="\u22CF",BC="\xA4",QC="\u21B6",HC="\u21B7",GC="\u22CE",WC="\u22CF",YC="\u2232",JC="\u2231",XC="\u232D",ZC="\u2020",KC="\u2021",eI="\u2138",nI="\u2193",tI="\u21A1",rI="\u21D3",iI="\u2010",oI="\u2AE4",sI="\u22A3",aI="\u290F",lI="\u02DD",cI="\u010E",uI="\u010F",fI="\u0414",dI="\u0434",pI="\u2021",hI="\u21CA",mI="\u2145",gI="\u2146",vI="\u2911",yI="\u2A77",_I="\xB0",EI="\u2207",SI="\u0394",wI="\u03B4",bI="\u29B1",kI="\u297F",TI="\u{1D507}",xI="\u{1D521}",NI="\u2965",CI="\u21C3",II="\u21C2",DI="\xB4",AI="\u02D9",OI="\u02DD",FI="`",RI="\u02DC",LI="\u22C4",PI="\u22C4",MI="\u22C4",qI="\u2666",jI="\u2666",$I="\xA8",VI="\u2146",UI="\u03DD",zI="\u22F2",BI="\xF7",QI="\xF7",HI="\u22C7",GI="\u22C7",WI="\u0402",YI="\u0452",JI="\u231E",XI="\u230D",ZI="$",KI="\u{1D53B}",eD="\u{1D555}",nD="\xA8",tD="\u02D9",rD="\u20DC",iD="\u2250",oD="\u2251",sD="\u2250",aD="\u2238",lD="\u2214",cD="\u22A1",uD="\u2306",fD="\u222F",dD="\xA8",pD="\u21D3",hD="\u21D0",mD="\u21D4",gD="\u2AE4",vD="\u27F8",yD="\u27FA",_D="\u27F9",ED="\u21D2",SD="\u22A8",wD="\u21D1",bD="\u21D5",kD="\u2225",TD="\u2913",xD="\u2193",ND="\u2193",CD="\u21D3",ID="\u21F5",DD="\u0311",AD="\u21CA",OD="\u21C3",FD="\u21C2",RD="\u2950",LD="\u295E",PD="\u2956",MD="\u21BD",qD="\u295F",jD="\u2957",$D="\u21C1",VD="\u21A7",UD="\u22A4",zD="\u2910",BD="\u231F",QD="\u230C",HD="\u{1D49F}",GD="\u{1D4B9}",WD="\u0405",YD="\u0455",JD="\u29F6",XD="\u0110",ZD="\u0111",KD="\u22F1",eA="\u25BF",nA="\u25BE",tA="\u21F5",rA="\u296F",iA="\u29A6",oA="\u040F",sA="\u045F",aA="\u27FF",lA="\xC9",cA="\xE9",uA="\u2A6E",fA="\u011A",dA="\u011B",pA="\xCA",hA="\xEA",mA="\u2256",gA="\u2255",vA="\u042D",yA="\u044D",_A="\u2A77",EA="\u0116",SA="\u0117",wA="\u2251",bA="\u2147",kA="\u2252",TA="\u{1D508}",xA="\u{1D522}",NA="\u2A9A",CA="\xC8",IA="\xE8",DA="\u2A96",AA="\u2A98",OA="\u2A99",FA="\u2208",RA="\u23E7",LA="\u2113",PA="\u2A95",MA="\u2A97",qA="\u0112",jA="\u0113",$A="\u2205",VA="\u2205",UA="\u25FB",zA="\u2205",BA="\u25AB",QA="\u2004",HA="\u2005",GA="\u2003",WA="\u014A",YA="\u014B",JA="\u2002",XA="\u0118",ZA="\u0119",KA="\u{1D53C}",eO="\u{1D556}",nO="\u22D5",tO="\u29E3",rO="\u2A71",iO="\u03B5",oO="\u0395",sO="\u03B5",aO="\u03F5",lO="\u2256",cO="\u2255",uO="\u2242",fO="\u2A96",dO="\u2A95",pO="\u2A75",hO="=",mO="\u2242",gO="\u225F",vO="\u21CC",yO="\u2261",_O="\u2A78",EO="\u29E5",SO="\u2971",wO="\u2253",bO="\u212F",kO="\u2130",TO="\u2250",xO="\u2A73",NO="\u2242",CO="\u0397",IO="\u03B7",DO="\xD0",AO="\xF0",OO="\xCB",FO="\xEB",RO="\u20AC",LO="!",PO="\u2203",MO="\u2203",qO="\u2130",jO="\u2147",$O="\u2147",VO="\u2252",UO="\u0424",zO="\u0444",BO="\u2640",QO="\uFB03",HO="\uFB00",GO="\uFB04",WO="\u{1D509}",YO="\u{1D523}",JO="\uFB01",XO="\u25FC",ZO="\u25AA",KO="fj",eF="\u266D",nF="\uFB02",tF="\u25B1",rF="\u0192",iF="\u{1D53D}",oF="\u{1D557}",sF="\u2200",aF="\u2200",lF="\u22D4",cF="\u2AD9",uF="\u2131",fF="\u2A0D",dF="\xBD",pF="\u2153",hF="\xBC",mF="\u2155",gF="\u2159",vF="\u215B",yF="\u2154",_F="\u2156",EF="\xBE",SF="\u2157",wF="\u215C",bF="\u2158",kF="\u215A",TF="\u215D",xF="\u215E",NF="\u2044",CF="\u2322",IF="\u{1D4BB}",DF="\u2131",AF="\u01F5",OF="\u0393",FF="\u03B3",RF="\u03DC",LF="\u03DD",PF="\u2A86",MF="\u011E",qF="\u011F",jF="\u0122",$F="\u011C",VF="\u011D",UF="\u0413",zF="\u0433",BF="\u0120",QF="\u0121",HF="\u2265",GF="\u2267",WF="\u2A8C",YF="\u22DB",JF="\u2265",XF="\u2267",ZF="\u2A7E",KF="\u2AA9",eR="\u2A7E",nR="\u2A80",tR="\u2A82",rR="\u2A84",iR="\u22DB\uFE00",oR="\u2A94",sR="\u{1D50A}",aR="\u{1D524}",lR="\u226B",cR="\u22D9",uR="\u22D9",fR="\u2137",dR="\u0403",pR="\u0453",hR="\u2AA5",mR="\u2277",gR="\u2A92",vR="\u2AA4",yR="\u2A8A",_R="\u2A8A",ER="\u2A88",SR="\u2269",wR="\u2A88",bR="\u2269",kR="\u22E7",TR="\u{1D53E}",xR="\u{1D558}",NR="`",CR="\u2265",IR="\u22DB",DR="\u2267",AR="\u2AA2",OR="\u2277",FR="\u2A7E",RR="\u2273",LR="\u{1D4A2}",PR="\u210A",MR="\u2273",qR="\u2A8E",jR="\u2A90",$R="\u2AA7",VR="\u2A7A",UR=">",zR=">",BR="\u226B",QR="\u22D7",HR="\u2995",GR="\u2A7C",WR="\u2A86",YR="\u2978",JR="\u22D7",XR="\u22DB",ZR="\u2A8C",KR="\u2277",eL="\u2273",nL="\u2269\uFE00",tL="\u2269\uFE00",rL="\u02C7",iL="\u200A",oL="\xBD",sL="\u210B",aL="\u042A",lL="\u044A",cL="\u2948",uL="\u2194",fL="\u21D4",dL="\u21AD",pL="^",hL="\u210F",mL="\u0124",gL="\u0125",vL="\u2665",yL="\u2665",_L="\u2026",EL="\u22B9",SL="\u{1D525}",wL="\u210C",bL="\u210B",kL="\u2925",TL="\u2926",xL="\u21FF",NL="\u223B",CL="\u21A9",IL="\u21AA",DL="\u{1D559}",AL="\u210D",OL="\u2015",FL="\u2500",RL="\u{1D4BD}",LL="\u210B",PL="\u210F",ML="\u0126",qL="\u0127",jL="\u224E",$L="\u224F",VL="\u2043",UL="\u2010",zL="\xCD",BL="\xED",QL="\u2063",HL="\xCE",GL="\xEE",WL="\u0418",YL="\u0438",JL="\u0130",XL="\u0415",ZL="\u0435",KL="\xA1",e2="\u21D4",n2="\u{1D526}",t2="\u2111",r2="\xCC",i2="\xEC",o2="\u2148",s2="\u2A0C",a2="\u222D",l2="\u29DC",c2="\u2129",u2="\u0132",f2="\u0133",d2="\u012A",p2="\u012B",h2="\u2111",m2="\u2148",g2="\u2110",v2="\u2111",y2="\u0131",_2="\u2111",E2="\u22B7",S2="\u01B5",w2="\u21D2",b2="\u2105",k2="\u221E",T2="\u29DD",x2="\u0131",N2="\u22BA",C2="\u222B",I2="\u222C",D2="\u2124",A2="\u222B",O2="\u22BA",F2="\u22C2",R2="\u2A17",L2="\u2A3C",P2="\u2063",M2="\u2062",q2="\u0401",j2="\u0451",$2="\u012E",V2="\u012F",U2="\u{1D540}",z2="\u{1D55A}",B2="\u0399",Q2="\u03B9",H2="\u2A3C",G2="\xBF",W2="\u{1D4BE}",Y2="\u2110",J2="\u2208",X2="\u22F5",Z2="\u22F9",K2="\u22F4",eP="\u22F3",nP="\u2208",tP="\u2062",rP="\u0128",iP="\u0129",oP="\u0406",sP="\u0456",aP="\xCF",lP="\xEF",cP="\u0134",uP="\u0135",fP="\u0419",dP="\u0439",pP="\u{1D50D}",hP="\u{1D527}",mP="\u0237",gP="\u{1D541}",vP="\u{1D55B}",yP="\u{1D4A5}",_P="\u{1D4BF}",EP="\u0408",SP="\u0458",wP="\u0404",bP="\u0454",kP="\u039A",TP="\u03BA",xP="\u03F0",NP="\u0136",CP="\u0137",IP="\u041A",DP="\u043A",AP="\u{1D50E}",OP="\u{1D528}",FP="\u0138",RP="\u0425",LP="\u0445",PP="\u040C",MP="\u045C",qP="\u{1D542}",jP="\u{1D55C}",$P="\u{1D4A6}",VP="\u{1D4C0}",UP="\u21DA",zP="\u0139",BP="\u013A",QP="\u29B4",HP="\u2112",GP="\u039B",WP="\u03BB",YP="\u27E8",JP="\u27EA",XP="\u2991",ZP="\u27E8",KP="\u2A85",eM="\u2112",nM="\xAB",tM="\u21E4",rM="\u291F",iM="\u2190",oM="\u219E",sM="\u21D0",aM="\u291D",lM="\u21A9",cM="\u21AB",uM="\u2939",fM="\u2973",dM="\u21A2",pM="\u2919",hM="\u291B",mM="\u2AAB",gM="\u2AAD",vM="\u2AAD\uFE00",yM="\u290C",_M="\u290E",EM="\u2772",SM="{",wM="[",bM="\u298B",kM="\u298F",TM="\u298D",xM="\u013D",NM="\u013E",CM="\u013B",IM="\u013C",DM="\u2308",AM="{",OM="\u041B",FM="\u043B",RM="\u2936",LM="\u201C",PM="\u201E",MM="\u2967",qM="\u294B",jM="\u21B2",$M="\u2264",VM="\u2266",UM="\u27E8",zM="\u21E4",BM="\u2190",QM="\u2190",HM="\u21D0",GM="\u21C6",WM="\u21A2",YM="\u2308",JM="\u27E6",XM="\u2961",ZM="\u2959",KM="\u21C3",eq="\u230A",nq="\u21BD",tq="\u21BC",rq="\u21C7",iq="\u2194",oq="\u2194",sq="\u21D4",aq="\u21C6",lq="\u21CB",cq="\u21AD",uq="\u294E",fq="\u21A4",dq="\u22A3",pq="\u295A",hq="\u22CB",mq="\u29CF",gq="\u22B2",vq="\u22B4",yq="\u2951",_q="\u2960",Eq="\u2958",Sq="\u21BF",wq="\u2952",bq="\u21BC",kq="\u2A8B",Tq="\u22DA",xq="\u2264",Nq="\u2266",Cq="\u2A7D",Iq="\u2AA8",Dq="\u2A7D",Aq="\u2A7F",Oq="\u2A81",Fq="\u2A83",Rq="\u22DA\uFE00",Lq="\u2A93",Pq="\u2A85",Mq="\u22D6",qq="\u22DA",jq="\u2A8B",$q="\u22DA",Vq="\u2266",Uq="\u2276",zq="\u2276",Bq="\u2AA1",Qq="\u2272",Hq="\u2A7D",Gq="\u2272",Wq="\u297C",Yq="\u230A",Jq="\u{1D50F}",Xq="\u{1D529}",Zq="\u2276",Kq="\u2A91",ej="\u2962",nj="\u21BD",tj="\u21BC",rj="\u296A",ij="\u2584",oj="\u0409",sj="\u0459",aj="\u21C7",lj="\u226A",cj="\u22D8",uj="\u231E",fj="\u21DA",dj="\u296B",pj="\u25FA",hj="\u013F",mj="\u0140",gj="\u23B0",vj="\u23B0",yj="\u2A89",_j="\u2A89",Ej="\u2A87",Sj="\u2268",wj="\u2A87",bj="\u2268",kj="\u22E6",Tj="\u27EC",xj="\u21FD",Nj="\u27E6",Cj="\u27F5",Ij="\u27F5",Dj="\u27F8",Aj="\u27F7",Oj="\u27F7",Fj="\u27FA",Rj="\u27FC",Lj="\u27F6",Pj="\u27F6",Mj="\u27F9",qj="\u21AB",jj="\u21AC",$j="\u2985",Vj="\u{1D543}",Uj="\u{1D55D}",zj="\u2A2D",Bj="\u2A34",Qj="\u2217",Hj="_",Gj="\u2199",Wj="\u2198",Yj="\u25CA",Jj="\u25CA",Xj="\u29EB",Zj="(",Kj="\u2993",e$="\u21C6",n$="\u231F",t$="\u21CB",r$="\u296D",i$="\u200E",o$="\u22BF",s$="\u2039",a$="\u{1D4C1}",l$="\u2112",c$="\u21B0",u$="\u21B0",f$="\u2272",d$="\u2A8D",p$="\u2A8F",h$="[",m$="\u2018",g$="\u201A",v$="\u0141",y$="\u0142",_$="\u2AA6",E$="\u2A79",S$="<",w$="<",b$="\u226A",k$="\u22D6",T$="\u22CB",x$="\u22C9",N$="\u2976",C$="\u2A7B",I$="\u25C3",D$="\u22B4",A$="\u25C2",O$="\u2996",F$="\u294A",R$="\u2966",L$="\u2268\uFE00",P$="\u2268\uFE00",M$="\xAF",q$="\u2642",j$="\u2720",$$="\u2720",V$="\u21A6",U$="\u21A6",z$="\u21A7",B$="\u21A4",Q$="\u21A5",H$="\u25AE",G$="\u2A29",W$="\u041C",Y$="\u043C",J$="\u2014",X$="\u223A",Z$="\u2221",K$="\u205F",eV="\u2133",nV="\u{1D510}",tV="\u{1D52A}",rV="\u2127",iV="\xB5",oV="*",sV="\u2AF0",aV="\u2223",lV="\xB7",cV="\u229F",uV="\u2212",fV="\u2238",dV="\u2A2A",pV="\u2213",hV="\u2ADB",mV="\u2026",gV="\u2213",vV="\u22A7",yV="\u{1D544}",_V="\u{1D55E}",EV="\u2213",SV="\u{1D4C2}",wV="\u2133",bV="\u223E",kV="\u039C",TV="\u03BC",xV="\u22B8",NV="\u22B8",CV="\u2207",IV="\u0143",DV="\u0144",AV="\u2220\u20D2",OV="\u2249",FV="\u2A70\u0338",RV="\u224B\u0338",LV="\u0149",PV="\u2249",MV="\u266E",qV="\u2115",jV="\u266E",$V="\xA0",VV="\u224E\u0338",UV="\u224F\u0338",zV="\u2A43",BV="\u0147",QV="\u0148",HV="\u0145",GV="\u0146",WV="\u2247",YV="\u2A6D\u0338",JV="\u2A42",XV="\u041D",ZV="\u043D",KV="\u2013",eU="\u2924",nU="\u2197",tU="\u21D7",rU="\u2197",iU="\u2260",oU="\u2250\u0338",sU="\u200B",aU="\u200B",lU="\u200B",cU="\u200B",uU="\u2262",fU="\u2928",dU="\u2242\u0338",pU="\u226B",hU="\u226A",mU=`
`,gU="\u2204",vU="\u2204",yU="\u{1D511}",_U="\u{1D52B}",EU="\u2267\u0338",SU="\u2271",wU="\u2271",bU="\u2267\u0338",kU="\u2A7E\u0338",TU="\u2A7E\u0338",xU="\u22D9\u0338",NU="\u2275",CU="\u226B\u20D2",IU="\u226F",DU="\u226F",AU="\u226B\u0338",OU="\u21AE",FU="\u21CE",RU="\u2AF2",LU="\u220B",PU="\u22FC",MU="\u22FA",qU="\u220B",jU="\u040A",$U="\u045A",VU="\u219A",UU="\u21CD",zU="\u2025",BU="\u2266\u0338",QU="\u2270",HU="\u219A",GU="\u21CD",WU="\u21AE",YU="\u21CE",JU="\u2270",XU="\u2266\u0338",ZU="\u2A7D\u0338",KU="\u2A7D\u0338",e3="\u226E",n3="\u22D8\u0338",t3="\u2274",r3="\u226A\u20D2",i3="\u226E",o3="\u22EA",s3="\u22EC",a3="\u226A\u0338",l3="\u2224",c3="\u2060",u3="\xA0",f3="\u{1D55F}",d3="\u2115",p3="\u2AEC",h3="\xAC",m3="\u2262",g3="\u226D",v3="\u2226",y3="\u2209",_3="\u2260",E3="\u2242\u0338",S3="\u2204",w3="\u226F",b3="\u2271",k3="\u2267\u0338",T3="\u226B\u0338",x3="\u2279",N3="\u2A7E\u0338",C3="\u2275",I3="\u224E\u0338",D3="\u224F\u0338",A3="\u2209",O3="\u22F5\u0338",F3="\u22F9\u0338",R3="\u2209",L3="\u22F7",P3="\u22F6",M3="\u29CF\u0338",q3="\u22EA",j3="\u22EC",$3="\u226E",V3="\u2270",U3="\u2278",z3="\u226A\u0338",B3="\u2A7D\u0338",Q3="\u2274",H3="\u2AA2\u0338",G3="\u2AA1\u0338",W3="\u220C",Y3="\u220C",J3="\u22FE",X3="\u22FD",Z3="\u2280",K3="\u2AAF\u0338",ez="\u22E0",nz="\u220C",tz="\u29D0\u0338",rz="\u22EB",iz="\u22ED",oz="\u228F\u0338",sz="\u22E2",az="\u2290\u0338",lz="\u22E3",cz="\u2282\u20D2",uz="\u2288",fz="\u2281",dz="\u2AB0\u0338",pz="\u22E1",hz="\u227F\u0338",mz="\u2283\u20D2",gz="\u2289",vz="\u2241",yz="\u2244",_z="\u2247",Ez="\u2249",Sz="\u2224",wz="\u2226",bz="\u2226",kz="\u2AFD\u20E5",Tz="\u2202\u0338",xz="\u2A14",Nz="\u2280",Cz="\u22E0",Iz="\u2280",Dz="\u2AAF\u0338",Az="\u2AAF\u0338",Oz="\u2933\u0338",Fz="\u219B",Rz="\u21CF",Lz="\u219D\u0338",Pz="\u219B",Mz="\u21CF",qz="\u22EB",jz="\u22ED",$z="\u2281",Vz="\u22E1",Uz="\u2AB0\u0338",zz="\u{1D4A9}",Bz="\u{1D4C3}",Qz="\u2224",Hz="\u2226",Gz="\u2241",Wz="\u2244",Yz="\u2244",Jz="\u2224",Xz="\u2226",Zz="\u22E2",Kz="\u22E3",e4="\u2284",n4="\u2AC5\u0338",t4="\u2288",r4="\u2282\u20D2",i4="\u2288",o4="\u2AC5\u0338",s4="\u2281",a4="\u2AB0\u0338",l4="\u2285",c4="\u2AC6\u0338",u4="\u2289",f4="\u2283\u20D2",d4="\u2289",p4="\u2AC6\u0338",h4="\u2279",m4="\xD1",g4="\xF1",v4="\u2278",y4="\u22EA",_4="\u22EC",E4="\u22EB",S4="\u22ED",w4="\u039D",b4="\u03BD",k4="#",T4="\u2116",x4="\u2007",N4="\u224D\u20D2",C4="\u22AC",I4="\u22AD",D4="\u22AE",A4="\u22AF",O4="\u2265\u20D2",F4=">\u20D2",R4="\u2904",L4="\u29DE",P4="\u2902",M4="\u2264\u20D2",q4="<\u20D2",j4="\u22B4\u20D2",$4="\u2903",V4="\u22B5\u20D2",U4="\u223C\u20D2",z4="\u2923",B4="\u2196",Q4="\u21D6",H4="\u2196",G4="\u2927",W4="\xD3",Y4="\xF3",J4="\u229B",X4="\xD4",Z4="\xF4",K4="\u229A",eB="\u041E",nB="\u043E",tB="\u229D",rB="\u0150",iB="\u0151",oB="\u2A38",sB="\u2299",aB="\u29BC",lB="\u0152",cB="\u0153",uB="\u29BF",fB="\u{1D512}",dB="\u{1D52C}",pB="\u02DB",hB="\xD2",mB="\xF2",gB="\u29C1",vB="\u29B5",yB="\u03A9",_B="\u222E",EB="\u21BA",SB="\u29BE",wB="\u29BB",bB="\u203E",kB="\u29C0",TB="\u014C",xB="\u014D",NB="\u03A9",CB="\u03C9",IB="\u039F",DB="\u03BF",AB="\u29B6",OB="\u2296",FB="\u{1D546}",RB="\u{1D560}",LB="\u29B7",PB="\u201C",MB="\u2018",qB="\u29B9",jB="\u2295",$B="\u21BB",VB="\u2A54",UB="\u2228",zB="\u2A5D",BB="\u2134",QB="\u2134",HB="\xAA",GB="\xBA",WB="\u22B6",YB="\u2A56",JB="\u2A57",XB="\u2A5B",ZB="\u24C8",KB="\u{1D4AA}",e5="\u2134",n5="\xD8",t5="\xF8",r5="\u2298",i5="\xD5",o5="\xF5",s5="\u2A36",a5="\u2A37",l5="\u2297",c5="\xD6",u5="\xF6",f5="\u233D",d5="\u203E",p5="\u23DE",h5="\u23B4",m5="\u23DC",g5="\xB6",v5="\u2225",y5="\u2225",_5="\u2AF3",E5="\u2AFD",S5="\u2202",w5="\u2202",b5="\u041F",k5="\u043F",T5="%",x5=".",N5="\u2030",C5="\u22A5",I5="\u2031",D5="\u{1D513}",A5="\u{1D52D}",O5="\u03A6",F5="\u03C6",R5="\u03D5",L5="\u2133",P5="\u260E",M5="\u03A0",q5="\u03C0",j5="\u22D4",$5="\u03D6",V5="\u210F",U5="\u210E",z5="\u210F",B5="\u2A23",Q5="\u229E",H5="\u2A22",G5="+",W5="\u2214",Y5="\u2A25",J5="\u2A72",X5="\xB1",Z5="\xB1",K5="\u2A26",e6="\u2A27",n6="\xB1",t6="\u210C",r6="\u2A15",i6="\u{1D561}",o6="\u2119",s6="\xA3",a6="\u2AB7",l6="\u2ABB",c6="\u227A",u6="\u227C",f6="\u2AB7",d6="\u227A",p6="\u227C",h6="\u227A",m6="\u2AAF",g6="\u227C",v6="\u227E",y6="\u2AAF",_6="\u2AB9",E6="\u2AB5",S6="\u22E8",w6="\u2AAF",b6="\u2AB3",k6="\u227E",T6="\u2032",x6="\u2033",N6="\u2119",C6="\u2AB9",I6="\u2AB5",D6="\u22E8",A6="\u220F",O6="\u220F",F6="\u232E",R6="\u2312",L6="\u2313",P6="\u221D",M6="\u221D",q6="\u2237",j6="\u221D",$6="\u227E",V6="\u22B0",U6="\u{1D4AB}",z6="\u{1D4C5}",B6="\u03A8",Q6="\u03C8",H6="\u2008",G6="\u{1D514}",W6="\u{1D52E}",Y6="\u2A0C",J6="\u{1D562}",X6="\u211A",Z6="\u2057",K6="\u{1D4AC}",e8="\u{1D4C6}",n8="\u210D",t8="\u2A16",r8="?",i8="\u225F",o8='"',s8='"',a8="\u21DB",l8="\u223D\u0331",c8="\u0154",u8="\u0155",f8="\u221A",d8="\u29B3",p8="\u27E9",h8="\u27EB",m8="\u2992",g8="\u29A5",v8="\u27E9",y8="\xBB",_8="\u2975",E8="\u21E5",S8="\u2920",w8="\u2933",b8="\u2192",k8="\u21A0",T8="\u21D2",x8="\u291E",N8="\u21AA",C8="\u21AC",I8="\u2945",D8="\u2974",A8="\u2916",O8="\u21A3",F8="\u219D",R8="\u291A",L8="\u291C",P8="\u2236",M8="\u211A",q8="\u290D",j8="\u290F",$8="\u2910",V8="\u2773",U8="}",z8="]",B8="\u298C",Q8="\u298E",H8="\u2990",G8="\u0158",W8="\u0159",Y8="\u0156",J8="\u0157",X8="\u2309",Z8="}",K8="\u0420",eQ="\u0440",nQ="\u2937",tQ="\u2969",rQ="\u201D",iQ="\u201D",oQ="\u21B3",sQ="\u211C",aQ="\u211B",lQ="\u211C",cQ="\u211D",uQ="\u211C",fQ="\u25AD",dQ="\xAE",pQ="\xAE",hQ="\u220B",mQ="\u21CB",gQ="\u296F",vQ="\u297D",yQ="\u230B",_Q="\u{1D52F}",EQ="\u211C",SQ="\u2964",wQ="\u21C1",bQ="\u21C0",kQ="\u296C",TQ="\u03A1",xQ="\u03C1",NQ="\u03F1",CQ="\u27E9",IQ="\u21E5",DQ="\u2192",AQ="\u2192",OQ="\u21D2",FQ="\u21C4",RQ="\u21A3",LQ="\u2309",PQ="\u27E7",MQ="\u295D",qQ="\u2955",jQ="\u21C2",$Q="\u230B",VQ="\u21C1",UQ="\u21C0",zQ="\u21C4",BQ="\u21CC",QQ="\u21C9",HQ="\u219D",GQ="\u21A6",WQ="\u22A2",YQ="\u295B",JQ="\u22CC",XQ="\u29D0",ZQ="\u22B3",KQ="\u22B5",eH="\u294F",nH="\u295C",tH="\u2954",rH="\u21BE",iH="\u2953",oH="\u21C0",sH="\u02DA",aH="\u2253",lH="\u21C4",cH="\u21CC",uH="\u200F",fH="\u23B1",dH="\u23B1",pH="\u2AEE",hH="\u27ED",mH="\u21FE",gH="\u27E7",vH="\u2986",yH="\u{1D563}",_H="\u211D",EH="\u2A2E",SH="\u2A35",wH="\u2970",bH=")",kH="\u2994",TH="\u2A12",xH="\u21C9",NH="\u21DB",CH="\u203A",IH="\u{1D4C7}",DH="\u211B",AH="\u21B1",OH="\u21B1",FH="]",RH="\u2019",LH="\u2019",PH="\u22CC",MH="\u22CA",qH="\u25B9",jH="\u22B5",$H="\u25B8",VH="\u29CE",UH="\u29F4",zH="\u2968",BH="\u211E",QH="\u015A",HH="\u015B",GH="\u201A",WH="\u2AB8",YH="\u0160",JH="\u0161",XH="\u2ABC",ZH="\u227B",KH="\u227D",e9="\u2AB0",n9="\u2AB4",t9="\u015E",r9="\u015F",i9="\u015C",o9="\u015D",s9="\u2ABA",a9="\u2AB6",l9="\u22E9",c9="\u2A13",u9="\u227F",f9="\u0421",d9="\u0441",p9="\u22A1",h9="\u22C5",m9="\u2A66",g9="\u2925",v9="\u2198",y9="\u21D8",_9="\u2198",E9="\xA7",S9=";",w9="\u2929",b9="\u2216",k9="\u2216",T9="\u2736",x9="\u{1D516}",N9="\u{1D530}",C9="\u2322",I9="\u266F",D9="\u0429",A9="\u0449",O9="\u0428",F9="\u0448",R9="\u2193",L9="\u2190",P9="\u2223",M9="\u2225",q9="\u2192",j9="\u2191",$9="\xAD",V9="\u03A3",U9="\u03C3",z9="\u03C2",B9="\u03C2",Q9="\u223C",H9="\u2A6A",G9="\u2243",W9="\u2243",Y9="\u2A9E",J9="\u2AA0",X9="\u2A9D",Z9="\u2A9F",K9="\u2246",eG="\u2A24",nG="\u2972",tG="\u2190",rG="\u2218",iG="\u2216",oG="\u2A33",sG="\u29E4",aG="\u2223",lG="\u2323",cG="\u2AAA",uG="\u2AAC",fG="\u2AAC\uFE00",dG="\u042C",pG="\u044C",hG="\u233F",mG="\u29C4",gG="/",vG="\u{1D54A}",yG="\u{1D564}",_G="\u2660",EG="\u2660",SG="\u2225",wG="\u2293",bG="\u2293\uFE00",kG="\u2294",TG="\u2294\uFE00",xG="\u221A",NG="\u228F",CG="\u2291",IG="\u228F",DG="\u2291",AG="\u2290",OG="\u2292",FG="\u2290",RG="\u2292",LG="\u25A1",PG="\u25A1",MG="\u2293",qG="\u228F",jG="\u2291",$G="\u2290",VG="\u2292",UG="\u2294",zG="\u25AA",BG="\u25A1",QG="\u25AA",HG="\u2192",GG="\u{1D4AE}",WG="\u{1D4C8}",YG="\u2216",JG="\u2323",XG="\u22C6",ZG="\u22C6",KG="\u2606",e7="\u2605",n7="\u03F5",t7="\u03D5",r7="\xAF",i7="\u2282",o7="\u22D0",s7="\u2ABD",a7="\u2AC5",l7="\u2286",c7="\u2AC3",u7="\u2AC1",f7="\u2ACB",d7="\u228A",p7="\u2ABF",h7="\u2979",m7="\u2282",g7="\u22D0",v7="\u2286",y7="\u2AC5",_7="\u2286",E7="\u228A",S7="\u2ACB",w7="\u2AC7",b7="\u2AD5",k7="\u2AD3",T7="\u2AB8",x7="\u227B",N7="\u227D",C7="\u227B",I7="\u2AB0",D7="\u227D",A7="\u227F",O7="\u2AB0",F7="\u2ABA",R7="\u2AB6",L7="\u22E9",P7="\u227F",M7="\u220B",q7="\u2211",j7="\u2211",$7="\u266A",V7="\xB9",U7="\xB2",z7="\xB3",B7="\u2283",Q7="\u22D1",H7="\u2ABE",G7="\u2AD8",W7="\u2AC6",Y7="\u2287",J7="\u2AC4",X7="\u2283",Z7="\u2287",K7="\u27C9",eW="\u2AD7",nW="\u297B",tW="\u2AC2",rW="\u2ACC",iW="\u228B",oW="\u2AC0",sW="\u2283",aW="\u22D1",lW="\u2287",cW="\u2AC6",uW="\u228B",fW="\u2ACC",dW="\u2AC8",pW="\u2AD4",hW="\u2AD6",mW="\u2926",gW="\u2199",vW="\u21D9",yW="\u2199",_W="\u292A",EW="\xDF",SW="	",wW="\u2316",bW="\u03A4",kW="\u03C4",TW="\u23B4",xW="\u0164",NW="\u0165",CW="\u0162",IW="\u0163",DW="\u0422",AW="\u0442",OW="\u20DB",FW="\u2315",RW="\u{1D517}",LW="\u{1D531}",PW="\u2234",MW="\u2234",qW="\u2234",jW="\u0398",$W="\u03B8",VW="\u03D1",UW="\u03D1",zW="\u2248",BW="\u223C",QW="\u205F\u200A",HW="\u2009",GW="\u2009",WW="\u2248",YW="\u223C",JW="\xDE",XW="\xFE",ZW="\u02DC",KW="\u223C",eY="\u2243",nY="\u2245",tY="\u2248",rY="\u2A31",iY="\u22A0",oY="\xD7",sY="\u2A30",aY="\u222D",lY="\u2928",cY="\u2336",uY="\u2AF1",fY="\u22A4",dY="\u{1D54B}",pY="\u{1D565}",hY="\u2ADA",mY="\u2929",gY="\u2034",vY="\u2122",yY="\u2122",_Y="\u25B5",EY="\u25BF",SY="\u25C3",wY="\u22B4",bY="\u225C",kY="\u25B9",TY="\u22B5",xY="\u25EC",NY="\u225C",CY="\u2A3A",IY="\u20DB",DY="\u2A39",AY="\u29CD",OY="\u2A3B",FY="\u23E2",RY="\u{1D4AF}",LY="\u{1D4C9}",PY="\u0426",MY="\u0446",qY="\u040B",jY="\u045B",$Y="\u0166",VY="\u0167",UY="\u226C",zY="\u219E",BY="\u21A0",QY="\xDA",HY="\xFA",GY="\u2191",WY="\u219F",YY="\u21D1",JY="\u2949",XY="\u040E",ZY="\u045E",KY="\u016C",eJ="\u016D",nJ="\xDB",tJ="\xFB",rJ="\u0423",iJ="\u0443",oJ="\u21C5",sJ="\u0170",aJ="\u0171",lJ="\u296E",cJ="\u297E",uJ="\u{1D518}",fJ="\u{1D532}",dJ="\xD9",pJ="\xF9",hJ="\u2963",mJ="\u21BF",gJ="\u21BE",vJ="\u2580",yJ="\u231C",_J="\u231C",EJ="\u230F",SJ="\u25F8",wJ="\u016A",bJ="\u016B",kJ="\xA8",TJ="_",xJ="\u23DF",NJ="\u23B5",CJ="\u23DD",IJ="\u22C3",DJ="\u228E",AJ="\u0172",OJ="\u0173",FJ="\u{1D54C}",RJ="\u{1D566}",LJ="\u2912",PJ="\u2191",MJ="\u2191",qJ="\u21D1",jJ="\u21C5",$J="\u2195",VJ="\u2195",UJ="\u21D5",zJ="\u296E",BJ="\u21BF",QJ="\u21BE",HJ="\u228E",GJ="\u2196",WJ="\u2197",YJ="\u03C5",JJ="\u03D2",XJ="\u03D2",ZJ="\u03A5",KJ="\u03C5",eX="\u21A5",nX="\u22A5",tX="\u21C8",rX="\u231D",iX="\u231D",oX="\u230E",sX="\u016E",aX="\u016F",lX="\u25F9",cX="\u{1D4B0}",uX="\u{1D4CA}",fX="\u22F0",dX="\u0168",pX="\u0169",hX="\u25B5",mX="\u25B4",gX="\u21C8",vX="\xDC",yX="\xFC",_X="\u29A7",EX="\u299C",SX="\u03F5",wX="\u03F0",bX="\u2205",kX="\u03D5",TX="\u03D6",xX="\u221D",NX="\u2195",CX="\u21D5",IX="\u03F1",DX="\u03C2",AX="\u228A\uFE00",OX="\u2ACB\uFE00",FX="\u228B\uFE00",RX="\u2ACC\uFE00",LX="\u03D1",PX="\u22B2",MX="\u22B3",qX="\u2AE8",jX="\u2AEB",$X="\u2AE9",VX="\u0412",UX="\u0432",zX="\u22A2",BX="\u22A8",QX="\u22A9",HX="\u22AB",GX="\u2AE6",WX="\u22BB",YX="\u2228",JX="\u22C1",XX="\u225A",ZX="\u22EE",KX="|",eZ="\u2016",nZ="|",tZ="\u2016",rZ="\u2223",iZ="|",oZ="\u2758",sZ="\u2240",aZ="\u200A",lZ="\u{1D519}",cZ="\u{1D533}",uZ="\u22B2",fZ="\u2282\u20D2",dZ="\u2283\u20D2",pZ="\u{1D54D}",hZ="\u{1D567}",mZ="\u221D",gZ="\u22B3",vZ="\u{1D4B1}",yZ="\u{1D4CB}",_Z="\u2ACB\uFE00",EZ="\u228A\uFE00",SZ="\u2ACC\uFE00",wZ="\u228B\uFE00",bZ="\u22AA",kZ="\u299A",TZ="\u0174",xZ="\u0175",NZ="\u2A5F",CZ="\u2227",IZ="\u22C0",DZ="\u2259",AZ="\u2118",OZ="\u{1D51A}",FZ="\u{1D534}",RZ="\u{1D54E}",LZ="\u{1D568}",PZ="\u2118",MZ="\u2240",qZ="\u2240",jZ="\u{1D4B2}",$Z="\u{1D4CC}",VZ="\u22C2",UZ="\u25EF",zZ="\u22C3",BZ="\u25BD",QZ="\u{1D51B}",HZ="\u{1D535}",GZ="\u27F7",WZ="\u27FA",YZ="\u039E",JZ="\u03BE",XZ="\u27F5",ZZ="\u27F8",KZ="\u27FC",eK="\u22FB",nK="\u2A00",tK="\u{1D54F}",rK="\u{1D569}",iK="\u2A01",oK="\u2A02",sK="\u27F6",aK="\u27F9",lK="\u{1D4B3}",cK="\u{1D4CD}",uK="\u2A06",fK="\u2A04",dK="\u25B3",pK="\u22C1",hK="\u22C0",mK="\xDD",gK="\xFD",vK="\u042F",yK="\u044F",_K="\u0176",EK="\u0177",SK="\u042B",wK="\u044B",bK="\xA5",kK="\u{1D51C}",TK="\u{1D536}",xK="\u0407",NK="\u0457",CK="\u{1D550}",IK="\u{1D56A}",DK="\u{1D4B4}",AK="\u{1D4CE}",OK="\u042E",FK="\u044E",RK="\xFF",LK="\u0178",PK="\u0179",MK="\u017A",qK="\u017D",jK="\u017E",$K="\u0417",VK="\u0437",UK="\u017B",zK="\u017C",BK="\u2128",QK="\u200B",HK="\u0396",GK="\u03B6",WK="\u{1D537}",YK="\u2128",JK="\u0416",XK="\u0436",ZK="\u21DD",KK="\u{1D56B}",eee="\u2124",nee="\u{1D4B5}",tee="\u{1D4CF}",ree="\u200D",iee="\u200C";var oee={Aacute:Ub,aacute:zb,Abreve:Bb,abreve:Qb,ac:Hb,acd:Gb,acE:Wb,Acirc:Yb,acirc:Jb,acute:Xb,Acy:Zb,acy:Kb,AElig:ek,aelig:nk,af:tk,Afr:rk,afr:ik,Agrave:ok,agrave:sk,alefsym:ak,aleph:lk,Alpha:ck,alpha:uk,Amacr:fk,amacr:dk,amalg:pk,amp:hk,AMP:mk,andand:gk,And:vk,and:yk,andd:_k,andslope:Ek,andv:Sk,ang:wk,ange:bk,angle:kk,angmsdaa:Tk,angmsdab:xk,angmsdac:Nk,angmsdad:Ck,angmsdae:Ik,angmsdaf:Dk,angmsdag:Ak,angmsdah:Ok,angmsd:Fk,angrt:Rk,angrtvb:Lk,angrtvbd:Pk,angsph:Mk,angst:qk,angzarr:jk,Aogon:$k,aogon:Vk,Aopf:Uk,aopf:zk,apacir:Bk,ap:Qk,apE:Hk,ape:Gk,apid:Wk,apos:Yk,ApplyFunction:Jk,approx:Xk,approxeq:Zk,Aring:Kk,aring:eT,Ascr:nT,ascr:tT,Assign:rT,ast:iT,asymp:oT,asympeq:sT,Atilde:aT,atilde:lT,Auml:cT,auml:uT,awconint:fT,awint:dT,backcong:pT,backepsilon:hT,backprime:mT,backsim:gT,backsimeq:vT,Backslash:yT,Barv:_T,barvee:ET,barwed:ST,Barwed:wT,barwedge:bT,bbrk:kT,bbrktbrk:TT,bcong:xT,Bcy:NT,bcy:CT,bdquo:IT,becaus:DT,because:AT,Because:OT,bemptyv:FT,bepsi:RT,bernou:LT,Bernoullis:PT,Beta:MT,beta:qT,beth:jT,between:$T,Bfr:VT,bfr:UT,bigcap:zT,bigcirc:BT,bigcup:QT,bigodot:HT,bigoplus:GT,bigotimes:WT,bigsqcup:YT,bigstar:JT,bigtriangledown:XT,bigtriangleup:ZT,biguplus:KT,bigvee:e1,bigwedge:n1,bkarow:t1,blacklozenge:r1,blacksquare:i1,blacktriangle:o1,blacktriangledown:s1,blacktriangleleft:a1,blacktriangleright:l1,blank:c1,blk12:u1,blk14:f1,blk34:d1,block:p1,bne:h1,bnequiv:m1,bNot:g1,bnot:v1,Bopf:y1,bopf:_1,bot:E1,bottom:S1,bowtie:w1,boxbox:b1,boxdl:k1,boxdL:T1,boxDl:x1,boxDL:N1,boxdr:C1,boxdR:I1,boxDr:D1,boxDR:A1,boxh:O1,boxH:F1,boxhd:R1,boxHd:L1,boxhD:P1,boxHD:M1,boxhu:q1,boxHu:j1,boxhU:$1,boxHU:V1,boxminus:U1,boxplus:z1,boxtimes:B1,boxul:Q1,boxuL:H1,boxUl:G1,boxUL:W1,boxur:Y1,boxuR:J1,boxUr:X1,boxUR:Z1,boxv:K1,boxV:ex,boxvh:nx,boxvH:tx,boxVh:rx,boxVH:ix,boxvl:ox,boxvL:sx,boxVl:ax,boxVL:lx,boxvr:cx,boxvR:ux,boxVr:fx,boxVR:dx,bprime:px,breve:hx,Breve:mx,brvbar:gx,bscr:vx,Bscr:yx,bsemi:_x,bsim:Ex,bsime:Sx,bsolb:wx,bsol:bx,bsolhsub:kx,bull:Tx,bullet:xx,bump:Nx,bumpE:Cx,bumpe:Ix,Bumpeq:Dx,bumpeq:Ax,Cacute:Ox,cacute:Fx,capand:Rx,capbrcup:Lx,capcap:Px,cap:Mx,Cap:qx,capcup:jx,capdot:$x,CapitalDifferentialD:Vx,caps:Ux,caret:zx,caron:Bx,Cayleys:Qx,ccaps:Hx,Ccaron:Gx,ccaron:Wx,Ccedil:Yx,ccedil:Jx,Ccirc:Xx,ccirc:Zx,Cconint:Kx,ccups:eN,ccupssm:nN,Cdot:tN,cdot:rN,cedil:iN,Cedilla:oN,cemptyv:sN,cent:aN,centerdot:lN,CenterDot:cN,cfr:uN,Cfr:fN,CHcy:dN,chcy:pN,check:hN,checkmark:mN,Chi:gN,chi:vN,circ:yN,circeq:_N,circlearrowleft:EN,circlearrowright:SN,circledast:wN,circledcirc:bN,circleddash:kN,CircleDot:TN,circledR:xN,circledS:NN,CircleMinus:CN,CirclePlus:IN,CircleTimes:DN,cir:AN,cirE:ON,cire:FN,cirfnint:RN,cirmid:LN,cirscir:PN,ClockwiseContourIntegral:MN,CloseCurlyDoubleQuote:qN,CloseCurlyQuote:jN,clubs:$N,clubsuit:VN,colon:UN,Colon:zN,Colone:BN,colone:QN,coloneq:HN,comma:GN,commat:WN,comp:YN,compfn:JN,complement:XN,complexes:ZN,cong:KN,congdot:eC,Congruent:nC,conint:tC,Conint:rC,ContourIntegral:iC,copf:oC,Copf:sC,coprod:aC,Coproduct:lC,copy:cC,COPY:uC,copysr:fC,CounterClockwiseContourIntegral:dC,crarr:pC,cross:hC,Cross:mC,Cscr:gC,cscr:vC,csub:yC,csube:_C,csup:EC,csupe:SC,ctdot:wC,cudarrl:bC,cudarrr:kC,cuepr:TC,cuesc:xC,cularr:NC,cularrp:CC,cupbrcap:IC,cupcap:DC,CupCap:AC,cup:OC,Cup:FC,cupcup:RC,cupdot:LC,cupor:PC,cups:MC,curarr:qC,curarrm:jC,curlyeqprec:$C,curlyeqsucc:VC,curlyvee:UC,curlywedge:zC,curren:BC,curvearrowleft:QC,curvearrowright:HC,cuvee:GC,cuwed:WC,cwconint:YC,cwint:JC,cylcty:XC,dagger:ZC,Dagger:KC,daleth:eI,darr:nI,Darr:tI,dArr:rI,dash:iI,Dashv:oI,dashv:sI,dbkarow:aI,dblac:lI,Dcaron:cI,dcaron:uI,Dcy:fI,dcy:dI,ddagger:pI,ddarr:hI,DD:mI,dd:gI,DDotrahd:vI,ddotseq:yI,deg:_I,Del:EI,Delta:SI,delta:wI,demptyv:bI,dfisht:kI,Dfr:TI,dfr:xI,dHar:NI,dharl:CI,dharr:II,DiacriticalAcute:DI,DiacriticalDot:AI,DiacriticalDoubleAcute:OI,DiacriticalGrave:FI,DiacriticalTilde:RI,diam:LI,diamond:PI,Diamond:MI,diamondsuit:qI,diams:jI,die:$I,DifferentialD:VI,digamma:UI,disin:zI,div:BI,divide:QI,divideontimes:HI,divonx:GI,DJcy:WI,djcy:YI,dlcorn:JI,dlcrop:XI,dollar:ZI,Dopf:KI,dopf:eD,Dot:nD,dot:tD,DotDot:rD,doteq:iD,doteqdot:oD,DotEqual:sD,dotminus:aD,dotplus:lD,dotsquare:cD,doublebarwedge:uD,DoubleContourIntegral:fD,DoubleDot:dD,DoubleDownArrow:pD,DoubleLeftArrow:hD,DoubleLeftRightArrow:mD,DoubleLeftTee:gD,DoubleLongLeftArrow:vD,DoubleLongLeftRightArrow:yD,DoubleLongRightArrow:_D,DoubleRightArrow:ED,DoubleRightTee:SD,DoubleUpArrow:wD,DoubleUpDownArrow:bD,DoubleVerticalBar:kD,DownArrowBar:TD,downarrow:xD,DownArrow:ND,Downarrow:CD,DownArrowUpArrow:ID,DownBreve:DD,downdownarrows:AD,downharpoonleft:OD,downharpoonright:FD,DownLeftRightVector:RD,DownLeftTeeVector:LD,DownLeftVectorBar:PD,DownLeftVector:MD,DownRightTeeVector:qD,DownRightVectorBar:jD,DownRightVector:$D,DownTeeArrow:VD,DownTee:UD,drbkarow:zD,drcorn:BD,drcrop:QD,Dscr:HD,dscr:GD,DScy:WD,dscy:YD,dsol:JD,Dstrok:XD,dstrok:ZD,dtdot:KD,dtri:eA,dtrif:nA,duarr:tA,duhar:rA,dwangle:iA,DZcy:oA,dzcy:sA,dzigrarr:aA,Eacute:lA,eacute:cA,easter:uA,Ecaron:fA,ecaron:dA,Ecirc:pA,ecirc:hA,ecir:mA,ecolon:gA,Ecy:vA,ecy:yA,eDDot:_A,Edot:EA,edot:SA,eDot:wA,ee:bA,efDot:kA,Efr:TA,efr:xA,eg:NA,Egrave:CA,egrave:IA,egs:DA,egsdot:AA,el:OA,Element:FA,elinters:RA,ell:LA,els:PA,elsdot:MA,Emacr:qA,emacr:jA,empty:$A,emptyset:VA,EmptySmallSquare:UA,emptyv:zA,EmptyVerySmallSquare:BA,emsp13:QA,emsp14:HA,emsp:GA,ENG:WA,eng:YA,ensp:JA,Eogon:XA,eogon:ZA,Eopf:KA,eopf:eO,epar:nO,eparsl:tO,eplus:rO,epsi:iO,Epsilon:oO,epsilon:sO,epsiv:aO,eqcirc:lO,eqcolon:cO,eqsim:uO,eqslantgtr:fO,eqslantless:dO,Equal:pO,equals:hO,EqualTilde:mO,equest:gO,Equilibrium:vO,equiv:yO,equivDD:_O,eqvparsl:EO,erarr:SO,erDot:wO,escr:bO,Escr:kO,esdot:TO,Esim:xO,esim:NO,Eta:CO,eta:IO,ETH:DO,eth:AO,Euml:OO,euml:FO,euro:RO,excl:LO,exist:PO,Exists:MO,expectation:qO,exponentiale:jO,ExponentialE:$O,fallingdotseq:VO,Fcy:UO,fcy:zO,female:BO,ffilig:QO,fflig:HO,ffllig:GO,Ffr:WO,ffr:YO,filig:JO,FilledSmallSquare:XO,FilledVerySmallSquare:ZO,fjlig:KO,flat:eF,fllig:nF,fltns:tF,fnof:rF,Fopf:iF,fopf:oF,forall:sF,ForAll:aF,fork:lF,forkv:cF,Fouriertrf:uF,fpartint:fF,frac12:dF,frac13:pF,frac14:hF,frac15:mF,frac16:gF,frac18:vF,frac23:yF,frac25:_F,frac34:EF,frac35:SF,frac38:wF,frac45:bF,frac56:kF,frac58:TF,frac78:xF,frasl:NF,frown:CF,fscr:IF,Fscr:DF,gacute:AF,Gamma:OF,gamma:FF,Gammad:RF,gammad:LF,gap:PF,Gbreve:MF,gbreve:qF,Gcedil:jF,Gcirc:$F,gcirc:VF,Gcy:UF,gcy:zF,Gdot:BF,gdot:QF,ge:HF,gE:GF,gEl:WF,gel:YF,geq:JF,geqq:XF,geqslant:ZF,gescc:KF,ges:eR,gesdot:nR,gesdoto:tR,gesdotol:rR,gesl:iR,gesles:oR,Gfr:sR,gfr:aR,gg:lR,Gg:cR,ggg:uR,gimel:fR,GJcy:dR,gjcy:pR,gla:hR,gl:mR,glE:gR,glj:vR,gnap:yR,gnapprox:_R,gne:ER,gnE:SR,gneq:wR,gneqq:bR,gnsim:kR,Gopf:TR,gopf:xR,grave:NR,GreaterEqual:CR,GreaterEqualLess:IR,GreaterFullEqual:DR,GreaterGreater:AR,GreaterLess:OR,GreaterSlantEqual:FR,GreaterTilde:RR,Gscr:LR,gscr:PR,gsim:MR,gsime:qR,gsiml:jR,gtcc:$R,gtcir:VR,gt:UR,GT:zR,Gt:BR,gtdot:QR,gtlPar:HR,gtquest:GR,gtrapprox:WR,gtrarr:YR,gtrdot:JR,gtreqless:XR,gtreqqless:ZR,gtrless:KR,gtrsim:eL,gvertneqq:nL,gvnE:tL,Hacek:rL,hairsp:iL,half:oL,hamilt:sL,HARDcy:aL,hardcy:lL,harrcir:cL,harr:uL,hArr:fL,harrw:dL,Hat:pL,hbar:hL,Hcirc:mL,hcirc:gL,hearts:vL,heartsuit:yL,hellip:_L,hercon:EL,hfr:SL,Hfr:wL,HilbertSpace:bL,hksearow:kL,hkswarow:TL,hoarr:xL,homtht:NL,hookleftarrow:CL,hookrightarrow:IL,hopf:DL,Hopf:AL,horbar:OL,HorizontalLine:FL,hscr:RL,Hscr:LL,hslash:PL,Hstrok:ML,hstrok:qL,HumpDownHump:jL,HumpEqual:$L,hybull:VL,hyphen:UL,Iacute:zL,iacute:BL,ic:QL,Icirc:HL,icirc:GL,Icy:WL,icy:YL,Idot:JL,IEcy:XL,iecy:ZL,iexcl:KL,iff:e2,ifr:n2,Ifr:t2,Igrave:r2,igrave:i2,ii:o2,iiiint:s2,iiint:a2,iinfin:l2,iiota:c2,IJlig:u2,ijlig:f2,Imacr:d2,imacr:p2,image:h2,ImaginaryI:m2,imagline:g2,imagpart:v2,imath:y2,Im:_2,imof:E2,imped:S2,Implies:w2,incare:b2,in:"\u2208",infin:k2,infintie:T2,inodot:x2,intcal:N2,int:C2,Int:I2,integers:D2,Integral:A2,intercal:O2,Intersection:F2,intlarhk:R2,intprod:L2,InvisibleComma:P2,InvisibleTimes:M2,IOcy:q2,iocy:j2,Iogon:$2,iogon:V2,Iopf:U2,iopf:z2,Iota:B2,iota:Q2,iprod:H2,iquest:G2,iscr:W2,Iscr:Y2,isin:J2,isindot:X2,isinE:Z2,isins:K2,isinsv:eP,isinv:nP,it:tP,Itilde:rP,itilde:iP,Iukcy:oP,iukcy:sP,Iuml:aP,iuml:lP,Jcirc:cP,jcirc:uP,Jcy:fP,jcy:dP,Jfr:pP,jfr:hP,jmath:mP,Jopf:gP,jopf:vP,Jscr:yP,jscr:_P,Jsercy:EP,jsercy:SP,Jukcy:wP,jukcy:bP,Kappa:kP,kappa:TP,kappav:xP,Kcedil:NP,kcedil:CP,Kcy:IP,kcy:DP,Kfr:AP,kfr:OP,kgreen:FP,KHcy:RP,khcy:LP,KJcy:PP,kjcy:MP,Kopf:qP,kopf:jP,Kscr:$P,kscr:VP,lAarr:UP,Lacute:zP,lacute:BP,laemptyv:QP,lagran:HP,Lambda:GP,lambda:WP,lang:YP,Lang:JP,langd:XP,langle:ZP,lap:KP,Laplacetrf:eM,laquo:nM,larrb:tM,larrbfs:rM,larr:iM,Larr:oM,lArr:sM,larrfs:aM,larrhk:lM,larrlp:cM,larrpl:uM,larrsim:fM,larrtl:dM,latail:pM,lAtail:hM,lat:mM,late:gM,lates:vM,lbarr:yM,lBarr:_M,lbbrk:EM,lbrace:SM,lbrack:wM,lbrke:bM,lbrksld:kM,lbrkslu:TM,Lcaron:xM,lcaron:NM,Lcedil:CM,lcedil:IM,lceil:DM,lcub:AM,Lcy:OM,lcy:FM,ldca:RM,ldquo:LM,ldquor:PM,ldrdhar:MM,ldrushar:qM,ldsh:jM,le:$M,lE:VM,LeftAngleBracket:UM,LeftArrowBar:zM,leftarrow:BM,LeftArrow:QM,Leftarrow:HM,LeftArrowRightArrow:GM,leftarrowtail:WM,LeftCeiling:YM,LeftDoubleBracket:JM,LeftDownTeeVector:XM,LeftDownVectorBar:ZM,LeftDownVector:KM,LeftFloor:eq,leftharpoondown:nq,leftharpoonup:tq,leftleftarrows:rq,leftrightarrow:iq,LeftRightArrow:oq,Leftrightarrow:sq,leftrightarrows:aq,leftrightharpoons:lq,leftrightsquigarrow:cq,LeftRightVector:uq,LeftTeeArrow:fq,LeftTee:dq,LeftTeeVector:pq,leftthreetimes:hq,LeftTriangleBar:mq,LeftTriangle:gq,LeftTriangleEqual:vq,LeftUpDownVector:yq,LeftUpTeeVector:_q,LeftUpVectorBar:Eq,LeftUpVector:Sq,LeftVectorBar:wq,LeftVector:bq,lEg:kq,leg:Tq,leq:xq,leqq:Nq,leqslant:Cq,lescc:Iq,les:Dq,lesdot:Aq,lesdoto:Oq,lesdotor:Fq,lesg:Rq,lesges:Lq,lessapprox:Pq,lessdot:Mq,lesseqgtr:qq,lesseqqgtr:jq,LessEqualGreater:$q,LessFullEqual:Vq,LessGreater:Uq,lessgtr:zq,LessLess:Bq,lesssim:Qq,LessSlantEqual:Hq,LessTilde:Gq,lfisht:Wq,lfloor:Yq,Lfr:Jq,lfr:Xq,lg:Zq,lgE:Kq,lHar:ej,lhard:nj,lharu:tj,lharul:rj,lhblk:ij,LJcy:oj,ljcy:sj,llarr:aj,ll:lj,Ll:cj,llcorner:uj,Lleftarrow:fj,llhard:dj,lltri:pj,Lmidot:hj,lmidot:mj,lmoustache:gj,lmoust:vj,lnap:yj,lnapprox:_j,lne:Ej,lnE:Sj,lneq:wj,lneqq:bj,lnsim:kj,loang:Tj,loarr:xj,lobrk:Nj,longleftarrow:Cj,LongLeftArrow:Ij,Longleftarrow:Dj,longleftrightarrow:Aj,LongLeftRightArrow:Oj,Longleftrightarrow:Fj,longmapsto:Rj,longrightarrow:Lj,LongRightArrow:Pj,Longrightarrow:Mj,looparrowleft:qj,looparrowright:jj,lopar:$j,Lopf:Vj,lopf:Uj,loplus:zj,lotimes:Bj,lowast:Qj,lowbar:Hj,LowerLeftArrow:Gj,LowerRightArrow:Wj,loz:Yj,lozenge:Jj,lozf:Xj,lpar:Zj,lparlt:Kj,lrarr:e$,lrcorner:n$,lrhar:t$,lrhard:r$,lrm:i$,lrtri:o$,lsaquo:s$,lscr:a$,Lscr:l$,lsh:c$,Lsh:u$,lsim:f$,lsime:d$,lsimg:p$,lsqb:h$,lsquo:m$,lsquor:g$,Lstrok:v$,lstrok:y$,ltcc:_$,ltcir:E$,lt:S$,LT:w$,Lt:b$,ltdot:k$,lthree:T$,ltimes:x$,ltlarr:N$,ltquest:C$,ltri:I$,ltrie:D$,ltrif:A$,ltrPar:O$,lurdshar:F$,luruhar:R$,lvertneqq:L$,lvnE:P$,macr:M$,male:q$,malt:j$,maltese:$$,Map:"\u2905",map:V$,mapsto:U$,mapstodown:z$,mapstoleft:B$,mapstoup:Q$,marker:H$,mcomma:G$,Mcy:W$,mcy:Y$,mdash:J$,mDDot:X$,measuredangle:Z$,MediumSpace:K$,Mellintrf:eV,Mfr:nV,mfr:tV,mho:rV,micro:iV,midast:oV,midcir:sV,mid:aV,middot:lV,minusb:cV,minus:uV,minusd:fV,minusdu:dV,MinusPlus:pV,mlcp:hV,mldr:mV,mnplus:gV,models:vV,Mopf:yV,mopf:_V,mp:EV,mscr:SV,Mscr:wV,mstpos:bV,Mu:kV,mu:TV,multimap:xV,mumap:NV,nabla:CV,Nacute:IV,nacute:DV,nang:AV,nap:OV,napE:FV,napid:RV,napos:LV,napprox:PV,natural:MV,naturals:qV,natur:jV,nbsp:$V,nbump:VV,nbumpe:UV,ncap:zV,Ncaron:BV,ncaron:QV,Ncedil:HV,ncedil:GV,ncong:WV,ncongdot:YV,ncup:JV,Ncy:XV,ncy:ZV,ndash:KV,nearhk:eU,nearr:nU,neArr:tU,nearrow:rU,ne:iU,nedot:oU,NegativeMediumSpace:sU,NegativeThickSpace:aU,NegativeThinSpace:lU,NegativeVeryThinSpace:cU,nequiv:uU,nesear:fU,nesim:dU,NestedGreaterGreater:pU,NestedLessLess:hU,NewLine:mU,nexist:gU,nexists:vU,Nfr:yU,nfr:_U,ngE:EU,nge:SU,ngeq:wU,ngeqq:bU,ngeqslant:kU,nges:TU,nGg:xU,ngsim:NU,nGt:CU,ngt:IU,ngtr:DU,nGtv:AU,nharr:OU,nhArr:FU,nhpar:RU,ni:LU,nis:PU,nisd:MU,niv:qU,NJcy:jU,njcy:$U,nlarr:VU,nlArr:UU,nldr:zU,nlE:BU,nle:QU,nleftarrow:HU,nLeftarrow:GU,nleftrightarrow:WU,nLeftrightarrow:YU,nleq:JU,nleqq:XU,nleqslant:ZU,nles:KU,nless:e3,nLl:n3,nlsim:t3,nLt:r3,nlt:i3,nltri:o3,nltrie:s3,nLtv:a3,nmid:l3,NoBreak:c3,NonBreakingSpace:u3,nopf:f3,Nopf:d3,Not:p3,not:h3,NotCongruent:m3,NotCupCap:g3,NotDoubleVerticalBar:v3,NotElement:y3,NotEqual:_3,NotEqualTilde:E3,NotExists:S3,NotGreater:w3,NotGreaterEqual:b3,NotGreaterFullEqual:k3,NotGreaterGreater:T3,NotGreaterLess:x3,NotGreaterSlantEqual:N3,NotGreaterTilde:C3,NotHumpDownHump:I3,NotHumpEqual:D3,notin:A3,notindot:O3,notinE:F3,notinva:R3,notinvb:L3,notinvc:P3,NotLeftTriangleBar:M3,NotLeftTriangle:q3,NotLeftTriangleEqual:j3,NotLess:$3,NotLessEqual:V3,NotLessGreater:U3,NotLessLess:z3,NotLessSlantEqual:B3,NotLessTilde:Q3,NotNestedGreaterGreater:H3,NotNestedLessLess:G3,notni:W3,notniva:Y3,notnivb:J3,notnivc:X3,NotPrecedes:Z3,NotPrecedesEqual:K3,NotPrecedesSlantEqual:ez,NotReverseElement:nz,NotRightTriangleBar:tz,NotRightTriangle:rz,NotRightTriangleEqual:iz,NotSquareSubset:oz,NotSquareSubsetEqual:sz,NotSquareSuperset:az,NotSquareSupersetEqual:lz,NotSubset:cz,NotSubsetEqual:uz,NotSucceeds:fz,NotSucceedsEqual:dz,NotSucceedsSlantEqual:pz,NotSucceedsTilde:hz,NotSuperset:mz,NotSupersetEqual:gz,NotTilde:vz,NotTildeEqual:yz,NotTildeFullEqual:_z,NotTildeTilde:Ez,NotVerticalBar:Sz,nparallel:wz,npar:bz,nparsl:kz,npart:Tz,npolint:xz,npr:Nz,nprcue:Cz,nprec:Iz,npreceq:Dz,npre:Az,nrarrc:Oz,nrarr:Fz,nrArr:Rz,nrarrw:Lz,nrightarrow:Pz,nRightarrow:Mz,nrtri:qz,nrtrie:jz,nsc:$z,nsccue:Vz,nsce:Uz,Nscr:zz,nscr:Bz,nshortmid:Qz,nshortparallel:Hz,nsim:Gz,nsime:Wz,nsimeq:Yz,nsmid:Jz,nspar:Xz,nsqsube:Zz,nsqsupe:Kz,nsub:e4,nsubE:n4,nsube:t4,nsubset:r4,nsubseteq:i4,nsubseteqq:o4,nsucc:s4,nsucceq:a4,nsup:l4,nsupE:c4,nsupe:u4,nsupset:f4,nsupseteq:d4,nsupseteqq:p4,ntgl:h4,Ntilde:m4,ntilde:g4,ntlg:v4,ntriangleleft:y4,ntrianglelefteq:_4,ntriangleright:E4,ntrianglerighteq:S4,Nu:w4,nu:b4,num:k4,numero:T4,numsp:x4,nvap:N4,nvdash:C4,nvDash:I4,nVdash:D4,nVDash:A4,nvge:O4,nvgt:F4,nvHarr:R4,nvinfin:L4,nvlArr:P4,nvle:M4,nvlt:q4,nvltrie:j4,nvrArr:$4,nvrtrie:V4,nvsim:U4,nwarhk:z4,nwarr:B4,nwArr:Q4,nwarrow:H4,nwnear:G4,Oacute:W4,oacute:Y4,oast:J4,Ocirc:X4,ocirc:Z4,ocir:K4,Ocy:eB,ocy:nB,odash:tB,Odblac:rB,odblac:iB,odiv:oB,odot:sB,odsold:aB,OElig:lB,oelig:cB,ofcir:uB,Ofr:fB,ofr:dB,ogon:pB,Ograve:hB,ograve:mB,ogt:gB,ohbar:vB,ohm:yB,oint:_B,olarr:EB,olcir:SB,olcross:wB,oline:bB,olt:kB,Omacr:TB,omacr:xB,Omega:NB,omega:CB,Omicron:IB,omicron:DB,omid:AB,ominus:OB,Oopf:FB,oopf:RB,opar:LB,OpenCurlyDoubleQuote:PB,OpenCurlyQuote:MB,operp:qB,oplus:jB,orarr:$B,Or:VB,or:UB,ord:zB,order:BB,orderof:QB,ordf:HB,ordm:GB,origof:WB,oror:YB,orslope:JB,orv:XB,oS:ZB,Oscr:KB,oscr:e5,Oslash:n5,oslash:t5,osol:r5,Otilde:i5,otilde:o5,otimesas:s5,Otimes:a5,otimes:l5,Ouml:c5,ouml:u5,ovbar:f5,OverBar:d5,OverBrace:p5,OverBracket:h5,OverParenthesis:m5,para:g5,parallel:v5,par:y5,parsim:_5,parsl:E5,part:S5,PartialD:w5,Pcy:b5,pcy:k5,percnt:T5,period:x5,permil:N5,perp:C5,pertenk:I5,Pfr:D5,pfr:A5,Phi:O5,phi:F5,phiv:R5,phmmat:L5,phone:P5,Pi:M5,pi:q5,pitchfork:j5,piv:$5,planck:V5,planckh:U5,plankv:z5,plusacir:B5,plusb:Q5,pluscir:H5,plus:G5,plusdo:W5,plusdu:Y5,pluse:J5,PlusMinus:X5,plusmn:Z5,plussim:K5,plustwo:e6,pm:n6,Poincareplane:t6,pointint:r6,popf:i6,Popf:o6,pound:s6,prap:a6,Pr:l6,pr:c6,prcue:u6,precapprox:f6,prec:d6,preccurlyeq:p6,Precedes:h6,PrecedesEqual:m6,PrecedesSlantEqual:g6,PrecedesTilde:v6,preceq:y6,precnapprox:_6,precneqq:E6,precnsim:S6,pre:w6,prE:b6,precsim:k6,prime:T6,Prime:x6,primes:N6,prnap:C6,prnE:I6,prnsim:D6,prod:A6,Product:O6,profalar:F6,profline:R6,profsurf:L6,prop:P6,Proportional:M6,Proportion:q6,propto:j6,prsim:$6,prurel:V6,Pscr:U6,pscr:z6,Psi:B6,psi:Q6,puncsp:H6,Qfr:G6,qfr:W6,qint:Y6,qopf:J6,Qopf:X6,qprime:Z6,Qscr:K6,qscr:e8,quaternions:n8,quatint:t8,quest:r8,questeq:i8,quot:o8,QUOT:s8,rAarr:a8,race:l8,Racute:c8,racute:u8,radic:f8,raemptyv:d8,rang:p8,Rang:h8,rangd:m8,range:g8,rangle:v8,raquo:y8,rarrap:_8,rarrb:E8,rarrbfs:S8,rarrc:w8,rarr:b8,Rarr:k8,rArr:T8,rarrfs:x8,rarrhk:N8,rarrlp:C8,rarrpl:I8,rarrsim:D8,Rarrtl:A8,rarrtl:O8,rarrw:F8,ratail:R8,rAtail:L8,ratio:P8,rationals:M8,rbarr:q8,rBarr:j8,RBarr:$8,rbbrk:V8,rbrace:U8,rbrack:z8,rbrke:B8,rbrksld:Q8,rbrkslu:H8,Rcaron:G8,rcaron:W8,Rcedil:Y8,rcedil:J8,rceil:X8,rcub:Z8,Rcy:K8,rcy:eQ,rdca:nQ,rdldhar:tQ,rdquo:rQ,rdquor:iQ,rdsh:oQ,real:sQ,realine:aQ,realpart:lQ,reals:cQ,Re:uQ,rect:fQ,reg:dQ,REG:pQ,ReverseElement:hQ,ReverseEquilibrium:mQ,ReverseUpEquilibrium:gQ,rfisht:vQ,rfloor:yQ,rfr:_Q,Rfr:EQ,rHar:SQ,rhard:wQ,rharu:bQ,rharul:kQ,Rho:TQ,rho:xQ,rhov:NQ,RightAngleBracket:CQ,RightArrowBar:IQ,rightarrow:DQ,RightArrow:AQ,Rightarrow:OQ,RightArrowLeftArrow:FQ,rightarrowtail:RQ,RightCeiling:LQ,RightDoubleBracket:PQ,RightDownTeeVector:MQ,RightDownVectorBar:qQ,RightDownVector:jQ,RightFloor:$Q,rightharpoondown:VQ,rightharpoonup:UQ,rightleftarrows:zQ,rightleftharpoons:BQ,rightrightarrows:QQ,rightsquigarrow:HQ,RightTeeArrow:GQ,RightTee:WQ,RightTeeVector:YQ,rightthreetimes:JQ,RightTriangleBar:XQ,RightTriangle:ZQ,RightTriangleEqual:KQ,RightUpDownVector:eH,RightUpTeeVector:nH,RightUpVectorBar:tH,RightUpVector:rH,RightVectorBar:iH,RightVector:oH,ring:sH,risingdotseq:aH,rlarr:lH,rlhar:cH,rlm:uH,rmoustache:fH,rmoust:dH,rnmid:pH,roang:hH,roarr:mH,robrk:gH,ropar:vH,ropf:yH,Ropf:_H,roplus:EH,rotimes:SH,RoundImplies:wH,rpar:bH,rpargt:kH,rppolint:TH,rrarr:xH,Rrightarrow:NH,rsaquo:CH,rscr:IH,Rscr:DH,rsh:AH,Rsh:OH,rsqb:FH,rsquo:RH,rsquor:LH,rthree:PH,rtimes:MH,rtri:qH,rtrie:jH,rtrif:$H,rtriltri:VH,RuleDelayed:UH,ruluhar:zH,rx:BH,Sacute:QH,sacute:HH,sbquo:GH,scap:WH,Scaron:YH,scaron:JH,Sc:XH,sc:ZH,sccue:KH,sce:e9,scE:n9,Scedil:t9,scedil:r9,Scirc:i9,scirc:o9,scnap:s9,scnE:a9,scnsim:l9,scpolint:c9,scsim:u9,Scy:f9,scy:d9,sdotb:p9,sdot:h9,sdote:m9,searhk:g9,searr:v9,seArr:y9,searrow:_9,sect:E9,semi:S9,seswar:w9,setminus:b9,setmn:k9,sext:T9,Sfr:x9,sfr:N9,sfrown:C9,sharp:I9,SHCHcy:D9,shchcy:A9,SHcy:O9,shcy:F9,ShortDownArrow:R9,ShortLeftArrow:L9,shortmid:P9,shortparallel:M9,ShortRightArrow:q9,ShortUpArrow:j9,shy:$9,Sigma:V9,sigma:U9,sigmaf:z9,sigmav:B9,sim:Q9,simdot:H9,sime:G9,simeq:W9,simg:Y9,simgE:J9,siml:X9,simlE:Z9,simne:K9,simplus:eG,simrarr:nG,slarr:tG,SmallCircle:rG,smallsetminus:iG,smashp:oG,smeparsl:sG,smid:aG,smile:lG,smt:cG,smte:uG,smtes:fG,SOFTcy:dG,softcy:pG,solbar:hG,solb:mG,sol:gG,Sopf:vG,sopf:yG,spades:_G,spadesuit:EG,spar:SG,sqcap:wG,sqcaps:bG,sqcup:kG,sqcups:TG,Sqrt:xG,sqsub:NG,sqsube:CG,sqsubset:IG,sqsubseteq:DG,sqsup:AG,sqsupe:OG,sqsupset:FG,sqsupseteq:RG,square:LG,Square:PG,SquareIntersection:MG,SquareSubset:qG,SquareSubsetEqual:jG,SquareSuperset:$G,SquareSupersetEqual:VG,SquareUnion:UG,squarf:zG,squ:BG,squf:QG,srarr:HG,Sscr:GG,sscr:WG,ssetmn:YG,ssmile:JG,sstarf:XG,Star:ZG,star:KG,starf:e7,straightepsilon:n7,straightphi:t7,strns:r7,sub:i7,Sub:o7,subdot:s7,subE:a7,sube:l7,subedot:c7,submult:u7,subnE:f7,subne:d7,subplus:p7,subrarr:h7,subset:m7,Subset:g7,subseteq:v7,subseteqq:y7,SubsetEqual:_7,subsetneq:E7,subsetneqq:S7,subsim:w7,subsub:b7,subsup:k7,succapprox:T7,succ:x7,succcurlyeq:N7,Succeeds:C7,SucceedsEqual:I7,SucceedsSlantEqual:D7,SucceedsTilde:A7,succeq:O7,succnapprox:F7,succneqq:R7,succnsim:L7,succsim:P7,SuchThat:M7,sum:q7,Sum:j7,sung:$7,sup1:V7,sup2:U7,sup3:z7,sup:B7,Sup:Q7,supdot:H7,supdsub:G7,supE:W7,supe:Y7,supedot:J7,Superset:X7,SupersetEqual:Z7,suphsol:K7,suphsub:eW,suplarr:nW,supmult:tW,supnE:rW,supne:iW,supplus:oW,supset:sW,Supset:aW,supseteq:lW,supseteqq:cW,supsetneq:uW,supsetneqq:fW,supsim:dW,supsub:pW,supsup:hW,swarhk:mW,swarr:gW,swArr:vW,swarrow:yW,swnwar:_W,szlig:EW,Tab:SW,target:wW,Tau:bW,tau:kW,tbrk:TW,Tcaron:xW,tcaron:NW,Tcedil:CW,tcedil:IW,Tcy:DW,tcy:AW,tdot:OW,telrec:FW,Tfr:RW,tfr:LW,there4:PW,therefore:MW,Therefore:qW,Theta:jW,theta:$W,thetasym:VW,thetav:UW,thickapprox:zW,thicksim:BW,ThickSpace:QW,ThinSpace:HW,thinsp:GW,thkap:WW,thksim:YW,THORN:JW,thorn:XW,tilde:ZW,Tilde:KW,TildeEqual:eY,TildeFullEqual:nY,TildeTilde:tY,timesbar:rY,timesb:iY,times:oY,timesd:sY,tint:aY,toea:lY,topbot:cY,topcir:uY,top:fY,Topf:dY,topf:pY,topfork:hY,tosa:mY,tprime:gY,trade:vY,TRADE:yY,triangle:_Y,triangledown:EY,triangleleft:SY,trianglelefteq:wY,triangleq:bY,triangleright:kY,trianglerighteq:TY,tridot:xY,trie:NY,triminus:CY,TripleDot:IY,triplus:DY,trisb:AY,tritime:OY,trpezium:FY,Tscr:RY,tscr:LY,TScy:PY,tscy:MY,TSHcy:qY,tshcy:jY,Tstrok:$Y,tstrok:VY,twixt:UY,twoheadleftarrow:zY,twoheadrightarrow:BY,Uacute:QY,uacute:HY,uarr:GY,Uarr:WY,uArr:YY,Uarrocir:JY,Ubrcy:XY,ubrcy:ZY,Ubreve:KY,ubreve:eJ,Ucirc:nJ,ucirc:tJ,Ucy:rJ,ucy:iJ,udarr:oJ,Udblac:sJ,udblac:aJ,udhar:lJ,ufisht:cJ,Ufr:uJ,ufr:fJ,Ugrave:dJ,ugrave:pJ,uHar:hJ,uharl:mJ,uharr:gJ,uhblk:vJ,ulcorn:yJ,ulcorner:_J,ulcrop:EJ,ultri:SJ,Umacr:wJ,umacr:bJ,uml:kJ,UnderBar:TJ,UnderBrace:xJ,UnderBracket:NJ,UnderParenthesis:CJ,Union:IJ,UnionPlus:DJ,Uogon:AJ,uogon:OJ,Uopf:FJ,uopf:RJ,UpArrowBar:LJ,uparrow:PJ,UpArrow:MJ,Uparrow:qJ,UpArrowDownArrow:jJ,updownarrow:$J,UpDownArrow:VJ,Updownarrow:UJ,UpEquilibrium:zJ,upharpoonleft:BJ,upharpoonright:QJ,uplus:HJ,UpperLeftArrow:GJ,UpperRightArrow:WJ,upsi:YJ,Upsi:JJ,upsih:XJ,Upsilon:ZJ,upsilon:KJ,UpTeeArrow:eX,UpTee:nX,upuparrows:tX,urcorn:rX,urcorner:iX,urcrop:oX,Uring:sX,uring:aX,urtri:lX,Uscr:cX,uscr:uX,utdot:fX,Utilde:dX,utilde:pX,utri:hX,utrif:mX,uuarr:gX,Uuml:vX,uuml:yX,uwangle:_X,vangrt:EX,varepsilon:SX,varkappa:wX,varnothing:bX,varphi:kX,varpi:TX,varpropto:xX,varr:NX,vArr:CX,varrho:IX,varsigma:DX,varsubsetneq:AX,varsubsetneqq:OX,varsupsetneq:FX,varsupsetneqq:RX,vartheta:LX,vartriangleleft:PX,vartriangleright:MX,vBar:qX,Vbar:jX,vBarv:$X,Vcy:VX,vcy:UX,vdash:zX,vDash:BX,Vdash:QX,VDash:HX,Vdashl:GX,veebar:WX,vee:YX,Vee:JX,veeeq:XX,vellip:ZX,verbar:KX,Verbar:eZ,vert:nZ,Vert:tZ,VerticalBar:rZ,VerticalLine:iZ,VerticalSeparator:oZ,VerticalTilde:sZ,VeryThinSpace:aZ,Vfr:lZ,vfr:cZ,vltri:uZ,vnsub:fZ,vnsup:dZ,Vopf:pZ,vopf:hZ,vprop:mZ,vrtri:gZ,Vscr:vZ,vscr:yZ,vsubnE:_Z,vsubne:EZ,vsupnE:SZ,vsupne:wZ,Vvdash:bZ,vzigzag:kZ,Wcirc:TZ,wcirc:xZ,wedbar:NZ,wedge:CZ,Wedge:IZ,wedgeq:DZ,weierp:AZ,Wfr:OZ,wfr:FZ,Wopf:RZ,wopf:LZ,wp:PZ,wr:MZ,wreath:qZ,Wscr:jZ,wscr:$Z,xcap:VZ,xcirc:UZ,xcup:zZ,xdtri:BZ,Xfr:QZ,xfr:HZ,xharr:GZ,xhArr:WZ,Xi:YZ,xi:JZ,xlarr:XZ,xlArr:ZZ,xmap:KZ,xnis:eK,xodot:nK,Xopf:tK,xopf:rK,xoplus:iK,xotime:oK,xrarr:sK,xrArr:aK,Xscr:lK,xscr:cK,xsqcup:uK,xuplus:fK,xutri:dK,xvee:pK,xwedge:hK,Yacute:mK,yacute:gK,YAcy:vK,yacy:yK,Ycirc:_K,ycirc:EK,Ycy:SK,ycy:wK,yen:bK,Yfr:kK,yfr:TK,YIcy:xK,yicy:NK,Yopf:CK,yopf:IK,Yscr:DK,yscr:AK,YUcy:OK,yucy:FK,yuml:RK,Yuml:LK,Zacute:PK,zacute:MK,Zcaron:qK,zcaron:jK,Zcy:$K,zcy:VK,Zdot:UK,zdot:zK,zeetrf:BK,ZeroWidthSpace:QK,Zeta:HK,zeta:GK,zfr:WK,Zfr:YK,ZHcy:JK,zhcy:XK,zigrarr:ZK,zopf:KK,Zopf:eee,Zscr:nee,zscr:tee,zwj:ree,zwnj:iee},Qy=oee,Gf=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,yi={},Rh={};function see(e){var n,t,r=Rh[e];if(r)return r;for(r=Rh[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<e.length;n++)r[e.charCodeAt(n)]=e[n];return r}function Ka(e,n,t){var r,i,o,s,a,c="";for(typeof n!="string"&&(t=n,n=Ka.defaultChars),typeof t=="undefined"&&(t=!0),a=see(n),r=0,i=e.length;r<i;r++){if(o=e.charCodeAt(r),t&&o===37&&r+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){c+=e.slice(r,r+3),r+=2;continue}if(o<128){c+=a[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&r+1<i&&(s=e.charCodeAt(r+1),s>=56320&&s<=57343)){c+=encodeURIComponent(e[r]+e[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(e[r])}return c}Ka.defaultChars=";/?:@&=+$,-_.!~*'()#";Ka.componentChars="-_.!~*'()";var aee=Ka,Lh={};function lee(e){var n,t,r=Lh[e];if(r)return r;for(r=Lh[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),r.push(t);for(n=0;n<e.length;n++)t=e.charCodeAt(n),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function el(e,n){var t;return typeof n!="string"&&(n=el.defaultChars),t=lee(n),e.replace(/(%[a-f0-9]{2})+/gi,function(r){var i,o,s,a,c,l,u,f="";for(i=0,o=r.length;i<o;i+=3){if(s=parseInt(r.slice(i+1,i+3),16),s<128){f+=t[s];continue}if((s&224)===192&&i+3<o&&(a=parseInt(r.slice(i+4,i+6),16),(a&192)===128)){u=s<<6&1984|a&63,u<128?f+="\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=3;continue}if((s&240)===224&&i+6<o&&(a=parseInt(r.slice(i+4,i+6),16),c=parseInt(r.slice(i+7,i+9),16),(a&192)===128&&(c&192)===128)){u=s<<12&61440|a<<6&4032|c&63,u<2048||u>=55296&&u<=57343?f+="\uFFFD\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=6;continue}if((s&248)===240&&i+9<o&&(a=parseInt(r.slice(i+4,i+6),16),c=parseInt(r.slice(i+7,i+9),16),l=parseInt(r.slice(i+10,i+12),16),(a&192)===128&&(c&192)===128&&(l&192)===128)){u=s<<18&1835008|a<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?f+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),i+=9;continue}f+="\uFFFD"}return f})}el.defaultChars=";/?:@&=+$,#";el.componentChars="";var cee=el,uee=function(n){var t="";return t+=n.protocol||"",t+=n.slashes?"//":"",t+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?t+="["+n.hostname+"]":t+=n.hostname||"",t+=n.port?":"+n.port:"",t+=n.pathname||"",t+=n.search||"",t+=n.hash||"",t};function wa(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var fee=/^([a-z0-9.+-]+:)/i,dee=/:[0-9]*$/,pee=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,hee=["<",">",'"',"`"," ","\r",`
`,"	"],mee=["{","}","|","\\","^","`"].concat(hee),gee=["'"].concat(mee),Ph=["%","/","?",";","#"].concat(gee),Mh=["/","?","#"],vee=255,qh=/^[+a-z0-9A-Z_-]{0,63}$/,yee=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,jh={javascript:!0,"javascript:":!0},$h={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function _ee(e,n){if(e&&e instanceof wa)return e;var t=new wa;return t.parse(e,n),t}wa.prototype.parse=function(e,n){var t,r,i,o,s,a=e;if(a=a.trim(),!n&&e.split("#").length===1){var c=pee.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=fee.exec(a);if(l&&(l=l[0],i=l.toLowerCase(),this.protocol=l,a=a.substr(l.length)),(n||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=a.substr(0,2)==="//",s&&!(l&&jh[l])&&(a=a.substr(2),this.slashes=!0)),!jh[l]&&(s||l&&!$h[l])){var u=-1;for(t=0;t<Mh.length;t++)o=a.indexOf(Mh[t]),o!==-1&&(u===-1||o<u)&&(u=o);var f,p;for(u===-1?p=a.lastIndexOf("@"):p=a.lastIndexOf("@",u),p!==-1&&(f=a.slice(0,p),a=a.slice(p+1),this.auth=f),u=-1,t=0;t<Ph.length;t++)o=a.indexOf(Ph[t]),o!==-1&&(u===-1||o<u)&&(u=o);u===-1&&(u=a.length),a[u-1]===":"&&u--;var h=a.slice(0,u);a=a.slice(u),this.parseHost(h),this.hostname=this.hostname||"";var d=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!d){var E=this.hostname.split(/\./);for(t=0,r=E.length;t<r;t++){var w=E[t];if(!!w&&!w.match(qh)){for(var g="",m=0,v=w.length;m<v;m++)w.charCodeAt(m)>127?g+="x":g+=w[m];if(!g.match(qh)){var S=E.slice(0,t),N=E.slice(t+1),b=w.match(yee);b&&(S.push(b[1]),N.unshift(b[2])),N.length&&(a=N.join(".")+a),this.hostname=S.join(".");break}}}}this.hostname.length>vee&&(this.hostname=""),d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var A=a.indexOf("#");A!==-1&&(this.hash=a.substr(A),a=a.slice(0,A));var M=a.indexOf("?");return M!==-1&&(this.search=a.substr(M),a=a.slice(0,M)),a&&(this.pathname=a),$h[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this};wa.prototype.parseHost=function(e){var n=dee.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};var Eee=_ee;yi.encode=aee;yi.decode=cee;yi.format=uee;yi.parse=Eee;var _i={},Hy=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Gy=/[\0-\x1F\x7F-\x9F]/,See=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Wy=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;_i.Any=Hy;_i.Cc=Gy;_i.Cf=See;_i.P=Gf;_i.Z=Wy;(function(e){function n(R){return Object.prototype.toString.call(R)}function t(R){return n(R)==="[object String]"}var r=Object.prototype.hasOwnProperty;function i(R,z){return r.call(R,z)}function o(R){var z=Array.prototype.slice.call(arguments,1);return z.forEach(function(U){if(!!U){if(typeof U!="object")throw new TypeError(U+"must be object");Object.keys(U).forEach(function(ye){R[ye]=U[ye]})}}),R}function s(R,z,U){return[].concat(R.slice(0,z),U,R.slice(z+1))}function a(R){return!(R>=55296&&R<=57343||R>=64976&&R<=65007||(R&65535)===65535||(R&65535)===65534||R>=0&&R<=8||R===11||R>=14&&R<=31||R>=127&&R<=159||R>1114111)}function c(R){if(R>65535){R-=65536;var z=55296+(R>>10),U=56320+(R&1023);return String.fromCharCode(z,U)}return String.fromCharCode(R)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,f=new RegExp(l.source+"|"+u.source,"gi"),p=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,h=Qy;function d(R,z){var U=0;return i(h,z)?h[z]:z.charCodeAt(0)===35&&p.test(z)&&(U=z[1].toLowerCase()==="x"?parseInt(z.slice(2),16):parseInt(z.slice(1),10),a(U))?c(U):R}function E(R){return R.indexOf("\\")<0?R:R.replace(l,"$1")}function w(R){return R.indexOf("\\")<0&&R.indexOf("&")<0?R:R.replace(f,function(z,U,ye){return U||d(z,ye)})}var g=/[&<>"]/,m=/[&<>"]/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function S(R){return v[R]}function N(R){return g.test(R)?R.replace(m,S):R}var b=/[.?*+^$[\]\\(){}|-]/g;function A(R){return R.replace(b,"\\$&")}function M(R){switch(R){case 9:case 32:return!0}return!1}function k(R){if(R>=8192&&R<=8202)return!0;switch(R){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var I=Gf;function J(R){return I.test(R)}function G(R){switch(R){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ne(R){return R=R.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(R=R.replace(/ẞ/g,"\xDF")),R.toLowerCase().toUpperCase()}e.lib={},e.lib.mdurl=yi,e.lib.ucmicro=_i,e.assign=o,e.isString=t,e.has=i,e.unescapeMd=E,e.unescapeAll=w,e.isValidEntityCode=a,e.fromCodePoint=c,e.escapeHtml=N,e.arrayReplaceAt=s,e.isSpace=M,e.isWhiteSpace=k,e.isMdAsciiPunct=G,e.isPunctChar=J,e.escapeRE=A,e.normalizeReference=ne})(fe);var nl={},wee=function(n,t,r){var i,o,s,a,c=-1,l=n.posMax,u=n.pos;for(n.pos=t+1,i=1;n.pos<l;){if(s=n.src.charCodeAt(n.pos),s===93&&(i--,i===0)){o=!0;break}if(a=n.pos,n.md.inline.skipToken(n),s===91){if(a===n.pos-1)i++;else if(r)return n.pos=u,-1}}return o&&(c=n.pos),n.pos=u,c},Vh=fe.unescapeAll,bee=function(n,t,r){var i,o,s=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(n.charCodeAt(t)===60){for(t++;t<r;){if(i=n.charCodeAt(t),i===10||i===60)return c;if(i===62)return c.pos=t+1,c.str=Vh(n.slice(a+1,t)),c.ok=!0,c;if(i===92&&t+1<r){t+=2;continue}t++}return c}for(o=0;t<r&&(i=n.charCodeAt(t),!(i===32||i<32||i===127));){if(i===92&&t+1<r){if(n.charCodeAt(t+1)===32)break;t+=2;continue}if(i===40&&(o++,o>32))return c;if(i===41){if(o===0)break;o--}t++}return a===t||o!==0||(c.str=Vh(n.slice(a,t)),c.lines=s,c.pos=t,c.ok=!0),c},kee=fe.unescapeAll,Tee=function(n,t,r){var i,o,s=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(t>=r||(o=n.charCodeAt(t),o!==34&&o!==39&&o!==40))return c;for(t++,o===40&&(o=41);t<r;){if(i=n.charCodeAt(t),i===o)return c.pos=t+1,c.lines=s,c.str=kee(n.slice(a+1,t)),c.ok=!0,c;if(i===40&&o===41)return c;i===10?s++:i===92&&t+1<r&&(t++,n.charCodeAt(t)===10&&s++),t++}return c};nl.parseLinkLabel=wee;nl.parseLinkDestination=bee;nl.parseLinkTitle=Tee;var xee=fe.assign,Nee=fe.unescapeAll,Tr=fe.escapeHtml,ct={};ct.code_inline=function(e,n,t,r,i){var o=e[n];return"<code"+i.renderAttrs(o)+">"+Tr(e[n].content)+"</code>"};ct.code_block=function(e,n,t,r,i){var o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+Tr(e[n].content)+`</code></pre>
`};ct.fence=function(e,n,t,r,i){var o=e[n],s=o.info?Nee(o.info).trim():"",a="",c="",l,u,f,p,h;return s&&(f=s.split(/(\s+)/g),a=f[0],c=f.slice(2).join("")),t.highlight?l=t.highlight(o.content,a,c)||Tr(o.content):l=Tr(o.content),l.indexOf("<pre")===0?l+`
`:s?(u=o.attrIndex("class"),p=o.attrs?o.attrs.slice():[],u<0?p.push(["class",t.langPrefix+a]):(p[u]=p[u].slice(),p[u][1]+=" "+t.langPrefix+a),h={attrs:p},"<pre><code"+i.renderAttrs(h)+">"+l+`</code></pre>
`):"<pre><code"+i.renderAttrs(o)+">"+l+`</code></pre>
`};ct.image=function(e,n,t,r,i){var o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};ct.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};ct.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};ct.text=function(e,n){return Tr(e[n].content)};ct.html_block=function(e,n){return e[n].content};ct.html_inline=function(e,n){return e[n].content};function Ei(){this.rules=xee({},ct)}Ei.prototype.renderAttrs=function(n){var t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+Tr(n.attrs[t][0])+'="'+Tr(n.attrs[t][1])+'"';return i};Ei.prototype.renderToken=function(n,t,r){var i,o="",s=!1,a=n[t];return a.hidden?"":(a.block&&a.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(a.nesting===-1?"</":"<")+a.tag,o+=this.renderAttrs(a),a.nesting===0&&r.xhtmlOut&&(o+=" /"),a.block&&(s=!0,a.nesting===1&&t+1<n.length&&(i=n[t+1],(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===a.tag)&&(s=!1))),o+=s?`>
`:">",o)};Ei.prototype.renderInline=function(e,n,t){for(var r,i="",o=this.rules,s=0,a=e.length;s<a;s++)r=e[s].type,typeof o[r]!="undefined"?i+=o[r](e,s,n,t,this):i+=this.renderToken(e,s,n);return i};Ei.prototype.renderInlineAsText=function(e,n,t){for(var r="",i=0,o=e.length;i<o;i++)e[i].type==="text"?r+=e[i].content:e[i].type==="image"?r+=this.renderInlineAsText(e[i].children,n,t):e[i].type==="softbreak"&&(r+=`
`);return r};Ei.prototype.render=function(e,n,t){var r,i,o,s="",a=this.rules;for(r=0,i=e.length;r<i;r++)o=e[r].type,o==="inline"?s+=this.renderInline(e[r].children,n,t):typeof a[o]!="undefined"?s+=a[e[r].type](e,r,n,t,this):s+=this.renderToken(e,r,n,t);return s};var Cee=Ei;function Jn(){this.__rules__=[],this.__cache__=null}Jn.prototype.__find__=function(e){for(var n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Jn.prototype.__compile__=function(){var e=this,n=[""];e.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn)})})};Jn.prototype.at=function(e,n,t){var r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Jn.prototype.before=function(e,n,t,r){var i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Jn.prototype.after=function(e,n,t,r){var i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Jn.prototype.push=function(e,n,t){var r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};Jn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};Jn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Jn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};Jn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};var Wf=Jn,Iee=/\r\n?|\n/g,Dee=/\0/g,Aee=function(n){var t;t=n.src.replace(Iee,`
`),t=t.replace(Dee,"\uFFFD"),n.src=t},Oee=function(n){var t;n.inlineMode?(t=new n.Token("inline","",0),t.content=n.src,t.map=[0,1],t.children=[],n.tokens.push(t)):n.md.block.parse(n.src,n.md,n.env,n.tokens)},Fee=function(n){var t=n.tokens,r,i,o;for(i=0,o=t.length;i<o;i++)r=t[i],r.type==="inline"&&n.md.inline.parse(r.content,n.md,n.env,r.children)},Ree=fe.arrayReplaceAt;function Lee(e){return/^<a[>\s]/i.test(e)}function Pee(e){return/^<\/a\s*>/i.test(e)}var Mee=function(n){var t,r,i,o,s,a,c,l,u,f,p,h,d,E,w,g,m=n.tokens,v;if(!!n.md.options.linkify){for(r=0,i=m.length;r<i;r++)if(!(m[r].type!=="inline"||!n.md.linkify.pretest(m[r].content)))for(o=m[r].children,d=0,t=o.length-1;t>=0;t--){if(a=o[t],a.type==="link_close"){for(t--;o[t].level!==a.level&&o[t].type!=="link_open";)t--;continue}if(a.type==="html_inline"&&(Lee(a.content)&&d>0&&d--,Pee(a.content)&&d++),!(d>0)&&a.type==="text"&&n.md.linkify.test(a.content)){for(u=a.content,v=n.md.linkify.match(u),c=[],h=a.level,p=0,l=0;l<v.length;l++)E=v[l].url,w=n.md.normalizeLink(E),n.md.validateLink(w)&&(g=v[l].text,v[l].schema?v[l].schema==="mailto:"&&!/^mailto:/i.test(g)?g=n.md.normalizeLinkText("mailto:"+g).replace(/^mailto:/,""):g=n.md.normalizeLinkText(g):g=n.md.normalizeLinkText("http://"+g).replace(/^http:\/\//,""),f=v[l].index,f>p&&(s=new n.Token("text","",0),s.content=u.slice(p,f),s.level=h,c.push(s)),s=new n.Token("link_open","a",1),s.attrs=[["href",w]],s.level=h++,s.markup="linkify",s.info="auto",c.push(s),s=new n.Token("text","",0),s.content=g,s.level=h,c.push(s),s=new n.Token("link_close","a",-1),s.level=--h,s.markup="linkify",s.info="auto",c.push(s),p=v[l].lastIndex);p<u.length&&(s=new n.Token("text","",0),s.content=u.slice(p),s.level=h,c.push(s)),m[r].children=o=Ree(o,t,c)}}}},Yy=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,qee=/\((c|tm|r|p)\)/i,jee=/\((c|tm|r|p)\)/ig,$ee={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function Vee(e,n){return $ee[n.toLowerCase()]}function Uee(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&(t.content=t.content.replace(jee,Vee)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function zee(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&Yy.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var Bee=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type==="inline"&&(qee.test(n.tokens[t].content)&&Uee(n.tokens[t].children),Yy.test(n.tokens[t].content)&&zee(n.tokens[t].children))},Uh=fe.isWhiteSpace,zh=fe.isPunctChar,Bh=fe.isMdAsciiPunct,Qee=/['"]/,Qh=/['"]/g,Hh="\u2019";function vs(e,n,t){return e.substr(0,n)+t+e.substr(n+1)}function Hee(e,n){var t,r,i,o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,b;for(S=[],t=0;t<e.length;t++){for(r=e[t],c=e[t].level,m=S.length-1;m>=0&&!(S[m].level<=c);m--);if(S.length=m+1,r.type!=="text")continue;i=r.content,s=0,a=i.length;e:for(;s<a&&(Qh.lastIndex=s,o=Qh.exec(i),!!o);){if(w=g=!0,s=o.index+1,v=o[0]==="'",u=32,o.index-1>=0)u=i.charCodeAt(o.index-1);else for(m=t-1;m>=0&&!(e[m].type==="softbreak"||e[m].type==="hardbreak");m--)if(!!e[m].content){u=e[m].content.charCodeAt(e[m].content.length-1);break}if(f=32,s<a)f=i.charCodeAt(s);else for(m=t+1;m<e.length&&!(e[m].type==="softbreak"||e[m].type==="hardbreak");m++)if(!!e[m].content){f=e[m].content.charCodeAt(0);break}if(p=Bh(u)||zh(String.fromCharCode(u)),h=Bh(f)||zh(String.fromCharCode(f)),d=Uh(u),E=Uh(f),E?w=!1:h&&(d||p||(w=!1)),d?g=!1:p&&(E||h||(g=!1)),f===34&&o[0]==='"'&&u>=48&&u<=57&&(g=w=!1),w&&g&&(w=p,g=h),!w&&!g){v&&(r.content=vs(r.content,o.index,Hh));continue}if(g){for(m=S.length-1;m>=0&&(l=S[m],!(S[m].level<c));m--)if(l.single===v&&S[m].level===c){l=S[m],v?(N=n.md.options.quotes[2],b=n.md.options.quotes[3]):(N=n.md.options.quotes[0],b=n.md.options.quotes[1]),r.content=vs(r.content,o.index,b),e[l.token].content=vs(e[l.token].content,l.pos,N),s+=b.length-1,l.token===t&&(s+=N.length-1),i=r.content,a=i.length,S.length=m;continue e}}w?S.push({token:t,pos:o.index,single:v,level:c}):g&&v&&(r.content=vs(r.content,o.index,Hh))}}}var Gee=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type!=="inline"||!Qee.test(n.tokens[t].content)||Hee(n.tokens[t].children,n)};function Si(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Si.prototype.attrIndex=function(n){var t,r,i;if(!this.attrs)return-1;for(t=this.attrs,r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Si.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Si.prototype.attrSet=function(n,t){var r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Si.prototype.attrGet=function(n){var t=this.attrIndex(n),r=null;return t>=0&&(r=this.attrs[t][1]),r};Si.prototype.attrJoin=function(n,t){var r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var Yf=Si,Wee=Yf;function Jy(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Jy.prototype.Token=Wee;var Yee=Jy,Jee=Wf,Ql=[["normalize",Aee],["block",Oee],["inline",Fee],["linkify",Mee],["replacements",Bee],["smartquotes",Gee]];function Jf(){this.ruler=new Jee;for(var e=0;e<Ql.length;e++)this.ruler.push(Ql[e][0],Ql[e][1])}Jf.prototype.process=function(e){var n,t,r;for(r=this.ruler.getRules(""),n=0,t=r.length;n<t;n++)r[n](e)};Jf.prototype.State=Yee;var Xee=Jf,Hl=fe.isSpace;function Gl(e,n){var t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.substr(t,r-t)}function Gh(e){var n=[],t=0,r=e.length,i,o=!1,s=0,a="";for(i=e.charCodeAt(t);t<r;)i===124&&(o?(a+=e.substring(s,t-1),s=t):(n.push(a+e.substring(s,t)),a="",s=t+1)),o=i===92,t++,i=e.charCodeAt(t);return n.push(a+e.substring(s)),n}var Zee=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,b;if(t+2>r||(u=t+1,n.sCount[u]<n.blkIndent)||n.sCount[u]-n.blkIndent>=4||(a=n.bMarks[u]+n.tShift[u],a>=n.eMarks[u])||(N=n.src.charCodeAt(a++),N!==124&&N!==45&&N!==58)||a>=n.eMarks[u]||(b=n.src.charCodeAt(a++),b!==124&&b!==45&&b!==58&&!Hl(b))||N===45&&Hl(b))return!1;for(;a<n.eMarks[u];){if(o=n.src.charCodeAt(a),o!==124&&o!==45&&o!==58&&!Hl(o))return!1;a++}for(s=Gl(n,t+1),f=s.split("|"),d=[],c=0;c<f.length;c++){if(E=f[c].trim(),!E){if(c===0||c===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?d.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?d.push("left"):d.push("")}if(s=Gl(n,t).trim(),s.indexOf("|")===-1||n.sCount[t]-n.blkIndent>=4||(f=Gh(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),p=f.length,p===0||p!==d.length))return!1;if(i)return!0;for(m=n.parentType,n.parentType="table",S=n.md.block.ruler.getRules("blockquote"),h=n.push("table_open","table",1),h.map=w=[t,0],h=n.push("thead_open","thead",1),h.map=[t,t+1],h=n.push("tr_open","tr",1),h.map=[t,t+1],c=0;c<f.length;c++)h=n.push("th_open","th",1),d[c]&&(h.attrs=[["style","text-align:"+d[c]]]),h=n.push("inline","",0),h.content=f[c].trim(),h.children=[],h=n.push("th_close","th",-1);for(h=n.push("tr_close","tr",-1),h=n.push("thead_close","thead",-1),u=t+2;u<r&&!(n.sCount[u]<n.blkIndent);u++){for(v=!1,c=0,l=S.length;c<l;c++)if(S[c](n,u,r,!0)){v=!0;break}if(v||(s=Gl(n,u).trim(),!s)||n.sCount[u]-n.blkIndent>=4)break;for(f=Gh(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===t+2&&(h=n.push("tbody_open","tbody",1),h.map=g=[t+2,0]),h=n.push("tr_open","tr",1),h.map=[u,u+1],c=0;c<p;c++)h=n.push("td_open","td",1),d[c]&&(h.attrs=[["style","text-align:"+d[c]]]),h=n.push("inline","",0),h.content=f[c]?f[c].trim():"",h.children=[],h=n.push("td_close","td",-1);h=n.push("tr_close","tr",-1)}return g&&(h=n.push("tbody_close","tbody",-1),g[1]=u),h=n.push("table_close","table",-1),w[1]=u,n.parentType=m,n.line=u,!0},Kee=function(n,t,r){var i,o,s;if(n.sCount[t]-n.blkIndent<4)return!1;for(o=i=t+1;i<r;){if(n.isEmpty(i)){i++;continue}if(n.sCount[i]-n.blkIndent>=4){i++,o=i;continue}break}return n.line=o,s=n.push("code_block","code",0),s.content=n.getLines(t,o,4+n.blkIndent,!1)+`
`,s.map=[t,n.line],!0},ene=function(n,t,r,i){var o,s,a,c,l,u,f,p=!1,h=n.bMarks[t]+n.tShift[t],d=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||h+3>d||(o=n.src.charCodeAt(h),o!==126&&o!==96)||(l=h,h=n.skipChars(h,o),s=h-l,s<3)||(f=n.src.slice(l,h),a=n.src.slice(h,d),o===96&&a.indexOf(String.fromCharCode(o))>=0))return!1;if(i)return!0;for(c=t;c++,!(c>=r||(h=l=n.bMarks[c]+n.tShift[c],d=n.eMarks[c],h<d&&n.sCount[c]<n.blkIndent));)if(n.src.charCodeAt(h)===o&&!(n.sCount[c]-n.blkIndent>=4)&&(h=n.skipChars(h,o),!(h-l<s)&&(h=n.skipSpaces(h),!(h<d)))){p=!0;break}return s=n.sCount[t],n.line=c+(p?1:0),u=n.push("fence","code",0),u.info=a,u.content=n.getLines(t+1,c,s,!0),u.markup=f,u.map=[t,n.line],!0},Wh=fe.isSpace,nne=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,b,A,M,k=n.lineMax,I=n.bMarks[t]+n.tShift[t],J=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(I++)!==62)return!1;if(i)return!0;for(c=h=n.sCount[t]+1,n.src.charCodeAt(I)===32?(I++,c++,h++,o=!1,S=!0):n.src.charCodeAt(I)===9?(S=!0,(n.bsCount[t]+h)%4===3?(I++,c++,h++,o=!1):o=!0):S=!1,d=[n.bMarks[t]],n.bMarks[t]=I;I<J&&(s=n.src.charCodeAt(I),Wh(s));){s===9?h+=4-(h+n.bsCount[t]+(o?1:0))%4:h++;I++}for(E=[n.bsCount[t]],n.bsCount[t]=n.sCount[t]+1+(S?1:0),u=I>=J,m=[n.sCount[t]],n.sCount[t]=h-c,v=[n.tShift[t]],n.tShift[t]=I-n.bMarks[t],b=n.md.block.ruler.getRules("blockquote"),g=n.parentType,n.parentType="blockquote",p=t+1;p<r&&(M=n.sCount[p]<n.blkIndent,I=n.bMarks[p]+n.tShift[p],J=n.eMarks[p],!(I>=J));p++){if(n.src.charCodeAt(I++)===62&&!M){for(c=h=n.sCount[p]+1,n.src.charCodeAt(I)===32?(I++,c++,h++,o=!1,S=!0):n.src.charCodeAt(I)===9?(S=!0,(n.bsCount[p]+h)%4===3?(I++,c++,h++,o=!1):o=!0):S=!1,d.push(n.bMarks[p]),n.bMarks[p]=I;I<J&&(s=n.src.charCodeAt(I),Wh(s));){s===9?h+=4-(h+n.bsCount[p]+(o?1:0))%4:h++;I++}u=I>=J,E.push(n.bsCount[p]),n.bsCount[p]=n.sCount[p]+1+(S?1:0),m.push(n.sCount[p]),n.sCount[p]=h-c,v.push(n.tShift[p]),n.tShift[p]=I-n.bMarks[p];continue}if(u)break;for(N=!1,a=0,l=b.length;a<l;a++)if(b[a](n,p,r,!0)){N=!0;break}if(N){n.lineMax=p,n.blkIndent!==0&&(d.push(n.bMarks[p]),E.push(n.bsCount[p]),v.push(n.tShift[p]),m.push(n.sCount[p]),n.sCount[p]-=n.blkIndent);break}d.push(n.bMarks[p]),E.push(n.bsCount[p]),v.push(n.tShift[p]),m.push(n.sCount[p]),n.sCount[p]=-1}for(w=n.blkIndent,n.blkIndent=0,A=n.push("blockquote_open","blockquote",1),A.markup=">",A.map=f=[t,0],n.md.block.tokenize(n,t,p),A=n.push("blockquote_close","blockquote",-1),A.markup=">",n.lineMax=k,n.parentType=g,f[1]=n.line,a=0;a<v.length;a++)n.bMarks[a+t]=d[a],n.tShift[a+t]=v[a],n.sCount[a+t]=m[a],n.bsCount[a+t]=E[a];return n.blkIndent=w,!0},tne=fe.isSpace,rne=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(o=n.src.charCodeAt(l++),o!==42&&o!==45&&o!==95))return!1;for(s=1;l<u;){if(a=n.src.charCodeAt(l++),a!==o&&!tne(a))return!1;a===o&&s++}return s<3?!1:(i||(n.line=t+1,c=n.push("hr","hr",0),c.map=[t,n.line],c.markup=Array(s+1).join(String.fromCharCode(o))),!0)},Xy=fe.isSpace;function Yh(e,n){var t,r,i,o;return r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],t=e.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<i&&(o=e.src.charCodeAt(r),!Xy(o))?-1:r}function Jh(e,n){var t,r=e.bMarks[n]+e.tShift[n],i=r,o=e.eMarks[n];if(i+1>=o||(t=e.src.charCodeAt(i++),t<48||t>57))return-1;for(;;){if(i>=o)return-1;if(t=e.src.charCodeAt(i++),t>=48&&t<=57){if(i-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return i<o&&(t=e.src.charCodeAt(i),!Xy(t))?-1:i}function ine(e,n){var t,r,i=e.level+2;for(t=n+2,r=e.tokens.length-2;t<r;t++)e.tokens[t].level===i&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var one=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N,b,A,M,k,I,J,G,ne,R,z,U,ye=!1,L=!0;if(n.sCount[t]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[t]-n.listIndent>=4&&n.sCount[t]<n.blkIndent)return!1;if(i&&n.parentType==="paragraph"&&n.sCount[t]>=n.blkIndent&&(ye=!0),(J=Jh(n,t))>=0){if(f=!0,ne=n.bMarks[t]+n.tShift[t],g=Number(n.src.slice(ne,J-1)),ye&&g!==1)return!1}else if((J=Yh(n,t))>=0)f=!1;else return!1;if(ye&&n.skipSpaces(J)>=n.eMarks[t])return!1;if(w=n.src.charCodeAt(J-1),i)return!0;for(E=n.tokens.length,f?(U=n.push("ordered_list_open","ol",1),g!==1&&(U.attrs=[["start",g]])):U=n.push("bullet_list_open","ul",1),U.map=d=[t,0],U.markup=String.fromCharCode(w),v=t,G=!1,z=n.md.block.ruler.getRules("list"),b=n.parentType,n.parentType="list";v<r;){for(I=J,m=n.eMarks[v],u=S=n.sCount[v]+J-(n.bMarks[t]+n.tShift[t]);I<m;){if(o=n.src.charCodeAt(I),o===9)S+=4-(S+n.bsCount[v])%4;else if(o===32)S++;else break;I++}if(s=I,s>=m?l=1:l=S-u,l>4&&(l=1),c=u+l,U=n.push("list_item_open","li",1),U.markup=String.fromCharCode(w),U.map=p=[t,0],f&&(U.info=n.src.slice(ne,J-1)),k=n.tight,M=n.tShift[t],A=n.sCount[t],N=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=c,n.tight=!0,n.tShift[t]=s-n.bMarks[t],n.sCount[t]=S,s>=m&&n.isEmpty(t+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,t,r,!0),(!n.tight||G)&&(L=!1),G=n.line-t>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=N,n.tShift[t]=M,n.sCount[t]=A,n.tight=k,U=n.push("list_item_close","li",-1),U.markup=String.fromCharCode(w),v=t=n.line,p[1]=v,s=n.bMarks[t],v>=r||n.sCount[v]<n.blkIndent||n.sCount[t]-n.blkIndent>=4)break;for(R=!1,a=0,h=z.length;a<h;a++)if(z[a](n,v,r,!0)){R=!0;break}if(R)break;if(f){if(J=Jh(n,v),J<0)break;ne=n.bMarks[v]+n.tShift[v]}else if(J=Yh(n,v),J<0)break;if(w!==n.src.charCodeAt(J-1))break}return f?U=n.push("ordered_list_close","ol",-1):U=n.push("bullet_list_close","ul",-1),U.markup=String.fromCharCode(w),d[1]=v,n.line=v,n.parentType=b,L&&ine(n,E),!0},sne=fe.normalizeReference,ys=fe.isSpace,ane=function(n,t,r,i){var o,s,a,c,l,u,f,p,h,d,E,w,g,m,v,S,N=0,b=n.bMarks[t]+n.tShift[t],A=n.eMarks[t],M=t+1;if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(b)!==91)return!1;for(;++b<A;)if(n.src.charCodeAt(b)===93&&n.src.charCodeAt(b-1)!==92){if(b+1===A||n.src.charCodeAt(b+1)!==58)return!1;break}for(c=n.lineMax,v=n.md.block.ruler.getRules("reference"),d=n.parentType,n.parentType="reference";M<c&&!n.isEmpty(M);M++)if(!(n.sCount[M]-n.blkIndent>3)&&!(n.sCount[M]<0)){for(m=!1,u=0,f=v.length;u<f;u++)if(v[u](n,M,c,!0)){m=!0;break}if(m)break}for(g=n.getLines(t,M,n.blkIndent,!1).trim(),A=g.length,b=1;b<A;b++){if(o=g.charCodeAt(b),o===91)return!1;if(o===93){h=b;break}else o===10?N++:o===92&&(b++,b<A&&g.charCodeAt(b)===10&&N++)}if(h<0||g.charCodeAt(h+1)!==58)return!1;for(b=h+2;b<A;b++)if(o=g.charCodeAt(b),o===10)N++;else if(!ys(o))break;if(E=n.md.helpers.parseLinkDestination(g,b,A),!E.ok||(l=n.md.normalizeLink(E.str),!n.md.validateLink(l)))return!1;for(b=E.pos,N+=E.lines,s=b,a=N,w=b;b<A;b++)if(o=g.charCodeAt(b),o===10)N++;else if(!ys(o))break;for(E=n.md.helpers.parseLinkTitle(g,b,A),b<A&&w!==b&&E.ok?(S=E.str,b=E.pos,N+=E.lines):(S="",b=s,N=a);b<A&&(o=g.charCodeAt(b),!!ys(o));)b++;if(b<A&&g.charCodeAt(b)!==10&&S)for(S="",b=s,N=a;b<A&&(o=g.charCodeAt(b),!!ys(o));)b++;return b<A&&g.charCodeAt(b)!==10||(p=sne(g.slice(1,h)),!p)?!1:(i||(typeof n.env.references=="undefined"&&(n.env.references={}),typeof n.env.references[p]=="undefined"&&(n.env.references[p]={title:S,href:l}),n.parentType=d,n.line=t+N+1),!0)},lne=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tl={},cne="[a-zA-Z_:][a-zA-Z0-9:._-]*",une="[^\"'=<>`\\x00-\\x20]+",fne="'[^']*'",dne='"[^"]*"',pne="(?:"+une+"|"+fne+"|"+dne+")",hne="(?:\\s+"+cne+"(?:\\s*=\\s*"+pne+")?)",Zy="<[A-Za-z][A-Za-z0-9\\-]*"+hne+"*\\s*\\/?>",Ky="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",mne="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",gne="<[?][\\s\\S]*?[?]>",vne="<![A-Z]+\\s+[^>]*>",yne="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",_ne=new RegExp("^(?:"+Zy+"|"+Ky+"|"+mne+"|"+gne+"|"+vne+"|"+yne+")"),Ene=new RegExp("^(?:"+Zy+"|"+Ky+")");tl.HTML_TAG_RE=_ne;tl.HTML_OPEN_CLOSE_TAG_RE=Ene;var Sne=lne,wne=tl.HTML_OPEN_CLOSE_TAG_RE,Rr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Sne.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(wne.source+"\\s*$"),/^$/,!1]],bne=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(l)!==60)return!1;for(c=n.src.slice(l,u),o=0;o<Rr.length&&!Rr[o][0].test(c);o++);if(o===Rr.length)return!1;if(i)return Rr[o][2];if(s=t+1,!Rr[o][1].test(c)){for(;s<r&&!(n.sCount[s]<n.blkIndent);s++)if(l=n.bMarks[s]+n.tShift[s],u=n.eMarks[s],c=n.src.slice(l,u),Rr[o][1].test(c)){c.length!==0&&s++;break}}return n.line=s,a=n.push("html_block","",0),a.map=[t,s],a.content=n.getLines(t,s,n.blkIndent,!0),!0},Xh=fe.isSpace,kne=function(n,t,r,i){var o,s,a,c,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(o=n.src.charCodeAt(l),o!==35||l>=u))return!1;for(s=1,o=n.src.charCodeAt(++l);o===35&&l<u&&s<=6;)s++,o=n.src.charCodeAt(++l);return s>6||l<u&&!Xh(o)?!1:(i||(u=n.skipSpacesBack(u,l),a=n.skipCharsBack(u,35,l),a>l&&Xh(n.src.charCodeAt(a-1))&&(u=a),n.line=t+1,c=n.push("heading_open","h"+String(s),1),c.markup="########".slice(0,s),c.map=[t,n.line],c=n.push("inline","",0),c.content=n.src.slice(l,u).trim(),c.map=[t,n.line],c.children=[],c=n.push("heading_close","h"+String(s),-1),c.markup="########".slice(0,s)),!0)},Tne=function(n,t,r){var i,o,s,a,c,l,u,f,p,h=t+1,d,E=n.md.block.ruler.getRules("paragraph");if(n.sCount[t]-n.blkIndent>=4)return!1;for(d=n.parentType,n.parentType="paragraph";h<r&&!n.isEmpty(h);h++)if(!(n.sCount[h]-n.blkIndent>3)){if(n.sCount[h]>=n.blkIndent&&(l=n.bMarks[h]+n.tShift[h],u=n.eMarks[h],l<u&&(p=n.src.charCodeAt(l),(p===45||p===61)&&(l=n.skipChars(l,p),l=n.skipSpaces(l),l>=u)))){f=p===61?1:2;break}if(!(n.sCount[h]<0)){for(o=!1,s=0,a=E.length;s<a;s++)if(E[s](n,h,r,!0)){o=!0;break}if(o)break}}return f?(i=n.getLines(t,h,n.blkIndent,!1).trim(),n.line=h+1,c=n.push("heading_open","h"+String(f),1),c.markup=String.fromCharCode(p),c.map=[t,n.line],c=n.push("inline","",0),c.content=i,c.map=[t,n.line-1],c.children=[],c=n.push("heading_close","h"+String(f),-1),c.markup=String.fromCharCode(p),n.parentType=d,!0):!1},xne=function(n,t){var r,i,o,s,a,c,l=t+1,u=n.md.block.ruler.getRules("paragraph"),f=n.lineMax;for(c=n.parentType,n.parentType="paragraph";l<f&&!n.isEmpty(l);l++)if(!(n.sCount[l]-n.blkIndent>3)&&!(n.sCount[l]<0)){for(i=!1,o=0,s=u.length;o<s;o++)if(u[o](n,l,f,!0)){i=!0;break}if(i)break}return r=n.getLines(t,l,n.blkIndent,!1).trim(),n.line=l,a=n.push("paragraph_open","p",1),a.map=[t,n.line],a=n.push("inline","",0),a.content=r,a.map=[t,n.line],a.children=[],a=n.push("paragraph_close","p",-1),n.parentType=c,!0},e0=Yf,rl=fe.isSpace;function ut(e,n,t,r){var i,o,s,a,c,l,u,f;for(this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,f=!1,s=a=l=u=0,c=o.length;a<c;a++){if(i=o.charCodeAt(a),!f)if(rl(i)){l++,i===9?u+=4-u%4:u++;continue}else f=!0;(i===10||a===c-1)&&(i!==10&&a++,this.bMarks.push(s),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,s=a+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ut.prototype.push=function(e,n,t){var r=new e0(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};ut.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};ut.prototype.skipEmptyLines=function(n){for(var t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};ut.prototype.skipSpaces=function(n){for(var t,r=this.src.length;n<r&&(t=this.src.charCodeAt(n),!!rl(t));n++);return n};ut.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!rl(this.src.charCodeAt(--n)))return n+1;return n};ut.prototype.skipChars=function(n,t){for(var r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};ut.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};ut.prototype.getLines=function(n,t,r,i){var o,s,a,c,l,u,f,p=n;if(n>=t)return"";for(u=new Array(t-n),o=0;p<t;p++,o++){for(s=0,f=c=this.bMarks[p],p+1<t||i?l=this.eMarks[p]+1:l=this.eMarks[p];c<l&&s<r;){if(a=this.src.charCodeAt(c),rl(a))a===9?s+=4-(s+this.bsCount[p])%4:s++;else if(c-f<this.tShift[p])s++;else break;c++}s>r?u[o]=new Array(s-r+1).join(" ")+this.src.slice(c,l):u[o]=this.src.slice(c,l)}return u.join("")};ut.prototype.Token=e0;var Nne=ut,Cne=Wf,_s=[["table",Zee,["paragraph","reference"]],["code",Kee],["fence",ene,["paragraph","reference","blockquote","list"]],["blockquote",nne,["paragraph","reference","blockquote","list"]],["hr",rne,["paragraph","reference","blockquote","list"]],["list",one,["paragraph","reference","blockquote"]],["reference",ane],["html_block",bne,["paragraph","reference","blockquote"]],["heading",kne,["paragraph","reference","blockquote"]],["lheading",Tne],["paragraph",xne]];function il(){this.ruler=new Cne;for(var e=0;e<_s.length;e++)this.ruler.push(_s[e][0],_s[e][1],{alt:(_s[e][2]||[]).slice()})}il.prototype.tokenize=function(e,n,t){for(var r,i,o=this.ruler.getRules(""),s=o.length,a=n,c=!1,l=e.md.options.maxNesting;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=l){e.line=t;break}for(i=0;i<s&&(r=o[i](e,a,t,!1),!r);i++);e.tight=!c,e.isEmpty(e.line-1)&&(c=!0),a=e.line,a<t&&e.isEmpty(a)&&(c=!0,a++,e.line=a)}};il.prototype.parse=function(e,n,t,r){var i;!e||(i=new this.State(e,n,t,r),this.tokenize(i,i.line,i.lineMax))};il.prototype.State=Nne;var Ine=il;function Dne(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var Ane=function(n,t){for(var r=n.pos;r<n.posMax&&!Dne(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(t||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)},One=fe.isSpace,Fne=function(n,t){var r,i,o,s=n.pos;if(n.src.charCodeAt(s)!==10)return!1;if(r=n.pending.length-1,i=n.posMax,!t)if(r>=0&&n.pending.charCodeAt(r)===32)if(r>=1&&n.pending.charCodeAt(r-1)===32){for(o=r-1;o>=1&&n.pending.charCodeAt(o-1)===32;)o--;n.pending=n.pending.slice(0,o),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(s++;s<i&&One(n.src.charCodeAt(s));)s++;return n.pos=s,!0},Rne=fe.isSpace,Xf=[];for(var Zh=0;Zh<256;Zh++)Xf.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Xf[e.charCodeAt(0)]=1});var Lne=function(n,t){var r,i=n.pos,o=n.posMax;if(n.src.charCodeAt(i)!==92)return!1;if(i++,i<o){if(r=n.src.charCodeAt(i),r<256&&Xf[r]!==0)return t||(n.pending+=n.src[i]),n.pos+=2,!0;if(r===10){for(t||n.push("hardbreak","br",0),i++;i<o&&(r=n.src.charCodeAt(i),!!Rne(r));)i++;return n.pos=i,!0}}return t||(n.pending+="\\"),n.pos++,!0},Pne=function(n,t){var r,i,o,s,a,c,l,u,f=n.pos,p=n.src.charCodeAt(f);if(p!==96)return!1;for(r=f,f++,i=n.posMax;f<i&&n.src.charCodeAt(f)===96;)f++;if(o=n.src.slice(r,f),l=o.length,n.backticksScanned&&(n.backticks[l]||0)<=r)return t||(n.pending+=o),n.pos+=l,!0;for(a=c=f;(a=n.src.indexOf("`",c))!==-1;){for(c=a+1;c<i&&n.src.charCodeAt(c)===96;)c++;if(u=c-a,u===l)return t||(s=n.push("code_inline","code",0),s.markup=o,s.content=n.src.slice(f,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),n.pos=c,!0;n.backticks[u]=a}return n.backticksScanned=!0,t||(n.pending+=o),n.pos+=l,!0},ol={};ol.tokenize=function(n,t){var r,i,o,s,a,c=n.pos,l=n.src.charCodeAt(c);if(t||l!==126||(i=n.scanDelims(n.pos,!0),s=i.length,a=String.fromCharCode(l),s<2))return!1;for(s%2&&(o=n.push("text","",0),o.content=a,s--),r=0;r<s;r+=2)o=n.push("text","",0),o.content=a+a,n.delimiters.push({marker:l,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0};function Kh(e,n){var t,r,i,o,s,a=[],c=n.length;for(t=0;t<c;t++)i=n[t],i.marker===126&&i.end!==-1&&(o=n[i.end],s=e.tokens[i.token],s.type="s_open",s.tag="s",s.nesting=1,s.markup="~~",s.content="",s=e.tokens[o.token],s.type="s_close",s.tag="s",s.nesting=-1,s.markup="~~",s.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&a.push(o.token-1));for(;a.length;){for(t=a.pop(),r=t+1;r<e.tokens.length&&e.tokens[r].type==="s_close";)r++;r--,t!==r&&(s=e.tokens[r],e.tokens[r]=e.tokens[t],e.tokens[t]=s)}}ol.postProcess=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(Kh(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&Kh(n,r[t].delimiters)};var sl={};sl.tokenize=function(n,t){var r,i,o,s=n.pos,a=n.src.charCodeAt(s);if(t||a!==95&&a!==42)return!1;for(i=n.scanDelims(n.pos,a===42),r=0;r<i.length;r++)o=n.push("text","",0),o.content=String.fromCharCode(a),n.delimiters.push({marker:a,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0};function em(e,n){var t,r,i,o,s,a,c=n.length;for(t=c-1;t>=0;t--)r=n[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(i=n[r.end],a=t>0&&n[t-1].end===r.end+1&&n[t-1].marker===r.marker&&n[t-1].token===r.token-1&&n[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),o=e.tokens[r.token],o.type=a?"strong_open":"em_open",o.tag=a?"strong":"em",o.nesting=1,o.markup=a?s+s:s,o.content="",o=e.tokens[i.token],o.type=a?"strong_close":"em_close",o.tag=a?"strong":"em",o.nesting=-1,o.markup=a?s+s:s,o.content="",a&&(e.tokens[n[t-1].token].content="",e.tokens[n[r.end+1].token].content="",t--))}sl.postProcess=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(em(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&em(n,r[t].delimiters)};var Mne=fe.normalizeReference,Wl=fe.isSpace,qne=function(n,t){var r,i,o,s,a,c,l,u,f,p="",h="",d=n.pos,E=n.posMax,w=n.pos,g=!0;if(n.src.charCodeAt(n.pos)!==91||(a=n.pos+1,s=n.md.helpers.parseLinkLabel(n,n.pos,!0),s<0))return!1;if(c=s+1,c<E&&n.src.charCodeAt(c)===40){for(g=!1,c++;c<E&&(i=n.src.charCodeAt(c),!(!Wl(i)&&i!==10));c++);if(c>=E)return!1;if(w=c,l=n.md.helpers.parseLinkDestination(n.src,c,n.posMax),l.ok){for(p=n.md.normalizeLink(l.str),n.md.validateLink(p)?c=l.pos:p="",w=c;c<E&&(i=n.src.charCodeAt(c),!(!Wl(i)&&i!==10));c++);if(l=n.md.helpers.parseLinkTitle(n.src,c,n.posMax),c<E&&w!==c&&l.ok)for(h=l.str,c=l.pos;c<E&&(i=n.src.charCodeAt(c),!(!Wl(i)&&i!==10));c++);}(c>=E||n.src.charCodeAt(c)!==41)&&(g=!0),c++}if(g){if(typeof n.env.references=="undefined")return!1;if(c<E&&n.src.charCodeAt(c)===91?(w=c+1,c=n.md.helpers.parseLinkLabel(n,c),c>=0?o=n.src.slice(w,c++):c=s+1):c=s+1,o||(o=n.src.slice(a,s)),u=n.env.references[Mne(o)],!u)return n.pos=d,!1;p=u.href,h=u.title}return t||(n.pos=a,n.posMax=s,f=n.push("link_open","a",1),f.attrs=r=[["href",p]],h&&r.push(["title",h]),n.md.inline.tokenize(n),f=n.push("link_close","a",-1)),n.pos=c,n.posMax=E,!0},jne=fe.normalizeReference,Yl=fe.isSpace,$ne=function(n,t){var r,i,o,s,a,c,l,u,f,p,h,d,E,w="",g=n.pos,m=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91||(c=n.pos+2,a=n.md.helpers.parseLinkLabel(n,n.pos+1,!1),a<0))return!1;if(l=a+1,l<m&&n.src.charCodeAt(l)===40){for(l++;l<m&&(i=n.src.charCodeAt(l),!(!Yl(i)&&i!==10));l++);if(l>=m)return!1;for(E=l,f=n.md.helpers.parseLinkDestination(n.src,l,n.posMax),f.ok&&(w=n.md.normalizeLink(f.str),n.md.validateLink(w)?l=f.pos:w=""),E=l;l<m&&(i=n.src.charCodeAt(l),!(!Yl(i)&&i!==10));l++);if(f=n.md.helpers.parseLinkTitle(n.src,l,n.posMax),l<m&&E!==l&&f.ok)for(p=f.str,l=f.pos;l<m&&(i=n.src.charCodeAt(l),!(!Yl(i)&&i!==10));l++);else p="";if(l>=m||n.src.charCodeAt(l)!==41)return n.pos=g,!1;l++}else{if(typeof n.env.references=="undefined")return!1;if(l<m&&n.src.charCodeAt(l)===91?(E=l+1,l=n.md.helpers.parseLinkLabel(n,l),l>=0?s=n.src.slice(E,l++):l=a+1):l=a+1,s||(s=n.src.slice(c,a)),u=n.env.references[jne(s)],!u)return n.pos=g,!1;w=u.href,p=u.title}return t||(o=n.src.slice(c,a),n.md.inline.parse(o,n.md,n.env,d=[]),h=n.push("image","img",0),h.attrs=r=[["src",w],["alt",""]],h.children=d,h.content=o,p&&r.push(["title",p])),n.pos=l,n.posMax=m,!0},Vne=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Une=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,zne=function(n,t){var r,i,o,s,a,c,l=n.pos;if(n.src.charCodeAt(l)!==60)return!1;for(a=n.pos,c=n.posMax;;){if(++l>=c||(s=n.src.charCodeAt(l),s===60))return!1;if(s===62)break}return r=n.src.slice(a+1,l),Une.test(r)?(i=n.md.normalizeLink(r),n.md.validateLink(i)?(t||(o=n.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=n.push("text","",0),o.content=n.md.normalizeLinkText(r),o=n.push("link_close","a",-1),o.markup="autolink",o.info="auto"),n.pos+=r.length+2,!0):!1):Vne.test(r)?(i=n.md.normalizeLink("mailto:"+r),n.md.validateLink(i)?(t||(o=n.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=n.push("text","",0),o.content=n.md.normalizeLinkText(r),o=n.push("link_close","a",-1),o.markup="autolink",o.info="auto"),n.pos+=r.length+2,!0):!1):!1},Bne=tl.HTML_TAG_RE;function Qne(e){var n=e|32;return n>=97&&n<=122}var Hne=function(n,t){var r,i,o,s,a=n.pos;return!n.md.options.html||(o=n.posMax,n.src.charCodeAt(a)!==60||a+2>=o)||(r=n.src.charCodeAt(a+1),r!==33&&r!==63&&r!==47&&!Qne(r))||(i=n.src.slice(a).match(Bne),!i)?!1:(t||(s=n.push("html_inline","",0),s.content=n.src.slice(a,a+i[0].length)),n.pos+=i[0].length,!0)},nm=Qy,Gne=fe.has,Wne=fe.isValidEntityCode,tm=fe.fromCodePoint,Yne=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Jne=/^&([a-z][a-z0-9]{1,31});/i,Xne=function(n,t){var r,i,o,s=n.pos,a=n.posMax;if(n.src.charCodeAt(s)!==38)return!1;if(s+1<a){if(r=n.src.charCodeAt(s+1),r===35){if(o=n.src.slice(s).match(Yne),o)return t||(i=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),n.pending+=Wne(i)?tm(i):tm(65533)),n.pos+=o[0].length,!0}else if(o=n.src.slice(s).match(Jne),o&&Gne(nm,o[1]))return t||(n.pending+=nm[o[1]]),n.pos+=o[0].length,!0}return t||(n.pending+="&"),n.pos++,!0};function rm(e,n){var t,r,i,o,s,a,c,l,u={},f=n.length;if(!!f){var p=0,h=-2,d=[];for(t=0;t<f;t++)if(i=n[t],d.push(0),(n[p].marker!==i.marker||h!==i.token-1)&&(p=t),h=i.token,i.length=i.length||0,!!i.close){for(u.hasOwnProperty(i.marker)||(u[i.marker]=[-1,-1,-1,-1,-1,-1]),s=u[i.marker][(i.open?3:0)+i.length%3],r=p-d[p]-1,a=r;r>s;r-=d[r]+1)if(o=n[r],o.marker===i.marker&&o.open&&o.end<0&&(c=!1,(o.close||i.open)&&(o.length+i.length)%3===0&&(o.length%3!==0||i.length%3!==0)&&(c=!0),!c)){l=r>0&&!n[r-1].open?d[r-1]+1:0,d[t]=t-r+l,d[r]=l,i.open=!1,o.end=t,o.close=!1,a=-1,h=-2;break}a!==-1&&(u[i.marker][(i.open?3:0)+(i.length||0)%3]=a)}}}var Zne=function(n){var t,r=n.tokens_meta,i=n.tokens_meta.length;for(rm(n,n.delimiters),t=0;t<i;t++)r[t]&&r[t].delimiters&&rm(n,r[t].delimiters)},Kne=function(n){var t,r,i=0,o=n.tokens,s=n.tokens.length;for(t=r=0;t<s;t++)o[t].nesting<0&&i--,o[t].level=i,o[t].nesting>0&&i++,o[t].type==="text"&&t+1<s&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==r&&(o[r]=o[t]),r++);t!==r&&(o.length=r)},Zf=Yf,im=fe.isWhiteSpace,om=fe.isPunctChar,sm=fe.isMdAsciiPunct;function Vo(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}Vo.prototype.pushPending=function(){var e=new Zf("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Vo.prototype.push=function(e,n,t){this.pending&&this.pushPending();var r=new Zf(e,n,t),i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Vo.prototype.scanDelims=function(e,n){var t=e,r,i,o,s,a,c,l,u,f,p=!0,h=!0,d=this.posMax,E=this.src.charCodeAt(e);for(r=e>0?this.src.charCodeAt(e-1):32;t<d&&this.src.charCodeAt(t)===E;)t++;return o=t-e,i=t<d?this.src.charCodeAt(t):32,l=sm(r)||om(String.fromCharCode(r)),f=sm(i)||om(String.fromCharCode(i)),c=im(r),u=im(i),u?p=!1:f&&(c||l||(p=!1)),c?h=!1:l&&(u||f||(h=!1)),n?(s=p,a=h):(s=p&&(!h||l),a=h&&(!p||f)),{can_open:s,can_close:a,length:o}};Vo.prototype.Token=Zf;var ete=Vo,am=Wf,Jl=[["text",Ane],["newline",Fne],["escape",Lne],["backticks",Pne],["strikethrough",ol.tokenize],["emphasis",sl.tokenize],["link",qne],["image",$ne],["autolink",zne],["html_inline",Hne],["entity",Xne]],Xl=[["balance_pairs",Zne],["strikethrough",ol.postProcess],["emphasis",sl.postProcess],["text_collapse",Kne]];function Uo(){var e;for(this.ruler=new am,e=0;e<Jl.length;e++)this.ruler.push(Jl[e][0],Jl[e][1]);for(this.ruler2=new am,e=0;e<Xl.length;e++)this.ruler2.push(Xl[e][0],Xl[e][1])}Uo.prototype.skipToken=function(e){var n,t,r=e.pos,i=this.ruler.getRules(""),o=i.length,s=e.md.options.maxNesting,a=e.cache;if(typeof a[r]!="undefined"){e.pos=a[r];return}if(e.level<s)for(t=0;t<o&&(e.level++,n=i[t](e,!0),e.level--,!n);t++);else e.pos=e.posMax;n||e.pos++,a[r]=e.pos};Uo.prototype.tokenize=function(e){for(var n,t,r=this.ruler.getRules(""),i=r.length,o=e.posMax,s=e.md.options.maxNesting;e.pos<o;){if(e.level<s)for(t=0;t<i&&(n=r[t](e,!1),!n);t++);if(n){if(e.pos>=o)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Uo.prototype.parse=function(e,n,t,r){var i,o,s,a=new this.State(e,n,t,r);for(this.tokenize(a),o=this.ruler2.getRules(""),s=o.length,i=0;i<s;i++)o[i](a)};Uo.prototype.State=ete;var nte=Uo,tte=function(e){var n={};n.src_Any=Hy.source,n.src_Cc=Gy.source,n.src_Z=Wy.source,n.src_P=Gf.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");var t="[><\uFF5C]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+").|;(?!"+n.src_ZCc+").|\\!+(?!"+n.src_ZCc+"|[!]).|\\?(?!"+n.src_ZCc+"|[?]).)+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n};function vu(e){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(t){!t||Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function al(e){return Object.prototype.toString.call(e)}function rte(e){return al(e)==="[object String]"}function ite(e){return al(e)==="[object Object]"}function ote(e){return al(e)==="[object RegExp]"}function lm(e){return al(e)==="[object Function]"}function ste(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var n0={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function ate(e){return Object.keys(e||{}).reduce(function(n,t){return n||n0.hasOwnProperty(t)},!1)}var lte={"http:":{validate:function(e,n,t){var r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){var r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){var r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},cte="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",ute="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function fte(e){e.__index__=-1,e.__text_cache__=""}function dte(e){return function(n,t){var r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function cm(){return function(e,n){n.normalize(e)}}function ba(e){var n=e.re=tte(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(cte),t.push(n.src_xn),n.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");var i=[];e.__compiled__={};function o(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(e.__schemas__).forEach(function(a){var c=e.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(e.__compiled__[a]=l,ite(c)){ote(c.validate)?l.validate=dte(c.validate):lm(c.validate)?l.validate=c.validate:o(a,c),lm(c.normalize)?l.normalize=c.normalize:c.normalize?o(a,c):l.normalize=cm();return}if(rte(c)){i.push(a);return}o(a,c)}}),i.forEach(function(a){!e.__compiled__[e.__schemas__[a]]||(e.__compiled__[a].validate=e.__compiled__[e.__schemas__[a]].validate,e.__compiled__[a].normalize=e.__compiled__[e.__schemas__[a]].normalize)}),e.__compiled__[""]={validate:null,normalize:cm()};var s=Object.keys(e.__compiled__).filter(function(a){return a.length>0&&e.__compiled__[a]}).map(ste).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),fte(e)}function pte(e,n){var t=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=i,this.text=i,this.url=i}function um(e,n){var t=new pte(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function qn(e,n){if(!(this instanceof qn))return new qn(e,n);n||ate(e)&&(n=e,e={}),this.__opts__=vu({},n0,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=vu({},lte,e),this.__compiled__={},this.__tlds__=ute,this.__tlds_replaced__=!1,this.re={},ba(this)}qn.prototype.add=function(n,t){return this.__schemas__[n]=t,ba(this),this};qn.prototype.set=function(n){return this.__opts__=vu(this.__opts__,n),this};qn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;var t,r,i,o,s,a,c,l,u;if(this.re.schema_test.test(n)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],c.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=n.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=r.index+r[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=n.indexOf("@"),u>=0&&(i=n.match(this.re.email_fuzzy))!==null&&(s=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=a))),this.__index__>=0};qn.prototype.pretest=function(n){return this.re.pretest.test(n)};qn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};qn.prototype.match=function(n){var t=0,r=[];this.__index__>=0&&this.__text_cache__===n&&(r.push(um(this,t)),t=this.__last_index__);for(var i=t?n.slice(t):n;this.test(i);)r.push(um(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};qn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),ba(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ba(this),this)};qn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};qn.prototype.onCompile=function(){};var hte=qn,mte={},gte=Object.freeze(Object.defineProperty({__proto__:null,default:mte},Symbol.toStringTag,{value:"Module"})),vte=F0(gte),yte={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},_te={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},Ete={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},Zi=fe,Ste=nl,wte=Cee,bte=Xee,kte=Ine,Tte=nte,xte=hte,dr=yi,t0=vte,Nte={default:yte,zero:_te,commonmark:Ete},Cte=/^(vbscript|javascript|file|data):/,Ite=/^data:image\/(gif|png|jpeg|webp);/;function Dte(e){var n=e.trim().toLowerCase();return Cte.test(n)?!!Ite.test(n):!0}var r0=["http:","https:","mailto:"];function Ate(e){var n=dr.parse(e,!0);if(n.hostname&&(!n.protocol||r0.indexOf(n.protocol)>=0))try{n.hostname=t0.toASCII(n.hostname)}catch{}return dr.encode(dr.format(n))}function Ote(e){var n=dr.parse(e,!0);if(n.hostname&&(!n.protocol||r0.indexOf(n.protocol)>=0))try{n.hostname=t0.toUnicode(n.hostname)}catch{}return dr.decode(dr.format(n),dr.decode.defaultChars+"%")}function jn(e,n){if(!(this instanceof jn))return new jn(e,n);n||Zi.isString(e)||(n=e||{},e="default"),this.inline=new Tte,this.block=new kte,this.core=new bte,this.renderer=new wte,this.linkify=new xte,this.validateLink=Dte,this.normalizeLink=Ate,this.normalizeLinkText=Ote,this.utils=Zi,this.helpers=Zi.assign({},Ste),this.options={},this.configure(e),n&&this.set(n)}jn.prototype.set=function(e){return Zi.assign(this.options,e),this};jn.prototype.configure=function(e){var n=this,t;if(Zi.isString(e)&&(t=e,e=Nte[t],!e))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&n[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&n[r].ruler2.enableOnly(e.components[r].rules2)}),this};jn.prototype.enable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};jn.prototype.disable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};jn.prototype.use=function(e){var n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};jn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");var t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};jn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};jn.prototype.parseInline=function(e,n){var t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};jn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};var Fte=jn,Kf=Fte,Rte=Array.from({length:11},function(e,n){return String.fromCharCode(8192+n)}).concat(["\u2028","\u2029","\u202F","\xA0"]),Lte=new RegExp("["+Rte.join("")+"]","g");function Pte(e){return e.replace(Lte," ")}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var Mte=/["'&<>]/,qte=jte;function jte(e){var n=""+e,t=Mte.exec(n);if(!t)return n;var r,i="",o=0,s=0;for(o=t.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==o&&(i+=n.substring(s,o)),s=o+1,i+=r}return s!==o?i+n.substring(s,o):i}var fm=new Kf;function ed(e,n,t){import("./codemirror.da9bdd86.js").then(function(r){return r.c}).then(function(r){var i=r.default,o,s;i.on(n,"select",function(a,c){if(!o){var l=c.parentNode;o=document.createElement("div"),o.className="CodeMirror-hint-information",l.appendChild(o),s=document.createElement("div"),s.className="CodeMirror-hint-deprecation",l.appendChild(s);var u;l.addEventListener("DOMNodeRemoved",u=function(d){d.target===l&&(l.removeEventListener("DOMNodeRemoved",u),o=null,s=null,u=null)})}var f=a.description?fm.render(a.description):"Self descriptive.",p=a.type?'<span class="infoType">'+yu(a.type)+"</span>":"";if(o.innerHTML='<div class="content">'+(f.slice(0,3)==="<p>"?"<p>"+p+f.slice(3):p+f)+"</div>",a&&s&&a.deprecationReason){var h=a.deprecationReason?fm.render(a.deprecationReason):"";s.innerHTML='<span class="deprecation-label">Deprecated</span>'+h,s.style.display="block"}else s&&(s.style.display="none");t&&t(o)})})}function yu(e){return e instanceof te?yu(e.ofType)+"!":e instanceof Qe?"["+yu(e.ofType)+"]":'<a class="typeName">'+qte(e.name)+"</a>"}var dt,i0=!1;typeof window=="object"&&(i0=window.navigator.platform==="MacIntel");var ll=(dt={},dt[i0?"Cmd-F":"Ctrl-F"]="findPersistent",dt["Cmd-G"]="findPersistent",dt["Ctrl-G"]="findPersistent",dt["Ctrl-Left"]="goSubwordLeft",dt["Ctrl-Right"]="goSubwordRight",dt["Alt-Left"]="goGroupLeft",dt["Alt-Right"]="goGroupRight",dt),$te=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Vte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Ute=[import("./show-hint.e28d7fd9.js").then(function(e){return e.s}),import("./matchbrackets.545756ff.js").then(function(e){return e.m}),import("./closebrackets.36bbee14.js").then(function(e){return e.c}),import("./brace-fold.a4c1397b.js").then(function(e){return e.b}),import("./foldgutter.b57edc84.js").then(function(e){return e.f}),import("./lint.db5a21af.js").then(function(e){return e.l}),import("./searchcursor.be623f37.js").then(function(e){return e.s}),import("./jump-to-line.1cb761fa.js").then(function(e){return e.j}),import("./dialog.5a304969.js").then(function(e){return e.d}),import("./sublime.164659aa.js").then(function(e){return e.s})];function cl(e,n){return $te(this,void 0,void 0,function(){var t,r;return Vte(this,function(i){switch(i.label){case 0:return[4,import("./codemirror.da9bdd86.js").then(function(o){return o.c})];case 1:return t=i.sent().default,r=(n==null?void 0:n.useCommonAddons)===!1?e:Ute.concat(e),[4,Promise.all(r.map(function(o){return o}))];case 2:return i.sent(),[2,t]}})})}var zte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ka=globalThis&&globalThis.__assign||function(){return ka=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ka.apply(this,arguments)},Bte=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Qte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Hte=new Kf,Gte=/^[a-zA-Z0-9_@(]$/,dm=function(e){zte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r.ignoreChangeEvent=!1,r._node=null,r.addonModules=function(){return[import("./comment.b843d73e.js").then(function(i){return i.c}),import("./search.eacf1046.js").then(function(i){return i.s}),import("./hint.1487bd34.js").then(function(i){return i.h}),import("./lint.8b81ccd2.js").then(function(i){return i.l}),import("./info.9e865265.js").then(function(i){return i.i}),import("./jump.ba4a4365.js").then(function(i){return i.j}),import("./mode.ba8d4cac.js").then(function(i){return i.m})]},r._onKeyUp=function(i,o){Gte.test(o.key)&&r.editor&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.ignoreChangeEvent&&r.editor&&(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){ed(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r&&(r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion),r.on("beforeChange",t._onBeforeChange))}).catch(console.error)},n.prototype.componentDidUpdate=function(t){this.ignoreChangeEvent=!0;var r=!1;this.props.schema!==t.schema&&this.editor&&(this.editor.options.lint.schema=this.props.schema,this.editor.options.hintOptions.schema=this.props.schema,this.editor.options.info.schema=this.props.schema,this.editor.options.jump.schema=this.props.schema,r=!0),this.props.externalFragments!==t.externalFragments&&this.editor&&(this.editor.options.lint.externalFragments=this.props.externalFragments,this.editor.options.hintOptions.externalFragments=this.props.externalFragments,r=!0),r&&this.CodeMirror.signal(this.editor,"change",this.editor),this.props.value!==t.value&&this.props.value!==this.cachedValue&&this.editor&&(this.cachedValue=this.props.value,this.editor.setValue(this.props.value)),this.ignoreChangeEvent=!1},n.prototype.componentWillUnmount=function(){this.editor&&(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion))},n.prototype.render=function(){var t=this;return _.createElement("section",{className:"query-editor","aria-label":"Query Editor",ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){var t,r,i,o;return Bte(this,void 0,void 0,function(){var s,a,c,l=this;return Qte(this,function(u){switch(u.label){case 0:return a=this,[4,cl(this.addonModules())];case 1:return s=a.CodeMirror=u.sent(),c=this.editor=s(this._node,{value:(t=this.props.value)!==null&&t!==void 0?t:"",lineNumbers:!0,tabSize:2,foldGutter:{minFoldSize:4},mode:"graphql",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,lint:{schema:this.props.schema,validationRules:(r=this.props.validationRules)!==null&&r!==void 0?r:null,externalFragments:(i=this.props)===null||i===void 0?void 0:i.externalFragments},hintOptions:{schema:this.props.schema,closeOnUnfocus:!1,completeSingle:!1,container:this._node,externalFragments:(o=this.props)===null||o===void 0?void 0:o.externalFragments},info:{schema:this.props.schema,renderDescription:function(f){return Hte.render(f)},onClick:function(f){return l.props.onClickReference&&l.props.onClickReference(f)}},jump:{schema:this.props.schema,onClick:function(f){return l.props.onClickReference&&l.props.onClickReference(f)}},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:ka(ka({"Cmd-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Ctrl-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Alt-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Shift-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Shift-Alt-Space":function(){return c.showHint({completeSingle:!0,container:l._node})},"Cmd-Enter":function(){l.props.onRunQuery&&l.props.onRunQuery()},"Ctrl-Enter":function(){l.props.onRunQuery&&l.props.onRunQuery()},"Shift-Ctrl-C":function(){l.props.onCopyQuery&&l.props.onCopyQuery()},"Shift-Ctrl-P":function(){l.props.onPrettifyQuery&&l.props.onPrettifyQuery()},"Shift-Ctrl-F":function(){l.props.onPrettifyQuery&&l.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){l.props.onMergeQuery&&l.props.onMergeQuery()}},ll),{"Cmd-S":function(){l.props.onRunQuery},"Ctrl-S":function(){l.props.onRunQuery}})}),[2,c]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n.prototype._onBeforeChange=function(t,r){if(r.origin==="paste"){var i=r.text.map(Pte);r.update(r.from,r.to,i)}},n}(_.Component),Wte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),_u=globalThis&&globalThis.__assign||function(){return _u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_u.apply(this,arguments)},Yte=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Jte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},pm=function(e){Wte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r._node=null,r.ignoreChangeEvent=!1,r.addonModules=function(){return[import("./hint.987915e2.js").then(function(i){return i.h}),import("./lint.d24d5891.js").then(function(i){return i.l}),import("./mode.3a69440e.js").then(function(i){return i.m})]},r._onKeyUp=function(i,o){var s=o.keyCode;!r.editor||(s>=65&&s<=90||!o.shiftKey&&s>=48&&s<=57||o.shiftKey&&s===189||o.shiftKey&&s===222)&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.editor||r.ignoreChangeEvent||(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){ed(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion)}).catch(console.error)},n.prototype.componentDidUpdate=function(t){if(!!this.editor&&!!this.CodeMirror){if(this.ignoreChangeEvent=!0,this.props.variableToType!==t.variableToType&&(this.editor.options.lint.variableToType=this.props.variableToType,this.editor.options.hintOptions.variableToType=this.props.variableToType,this.CodeMirror.signal(this.editor,"change",this.editor)),this.props.value!==t.value&&this.props.value!==this.cachedValue){var r=this.props.value||"";this.cachedValue=r,this.editor.setValue(r)}this.ignoreChangeEvent=!1}},n.prototype.componentWillUnmount=function(){!this.editor||(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null)},n.prototype.render=function(){var t=this;return _.createElement("div",{className:"codemirrorWrap",style:{position:this.props.active?"relative":"absolute",visibility:this.props.active?"visible":"hidden"},ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){return Yte(this,void 0,void 0,function(){var t,r,i=this;return Jte(this,function(o){switch(o.label){case 0:return t=this,[4,cl(this.addonModules())];case 1:return t.CodeMirror=o.sent(),r=this.editor=this.CodeMirror(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:"graphql-variables",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,foldGutter:{minFoldSize:4},lint:{variableToType:this.props.variableToType},hintOptions:{variableToType:this.props.variableToType,closeOnUnfocus:!1,completeSingle:!1,container:this._node},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:_u({"Cmd-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Ctrl-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Alt-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Shift-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Cmd-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Ctrl-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Shift-Ctrl-P":function(){i.props.onPrettifyQuery&&i.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){i.props.onMergeQuery&&i.props.onMergeQuery()}},ll)}),[2,r]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component),Xte=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Eu=globalThis&&globalThis.__assign||function(){return Eu=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Eu.apply(this,arguments)},Zte=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},Kte=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},hm=function(e){Xte(n,e);function n(t){var r=e.call(this,t)||this;return r.editor=null,r._node=null,r.ignoreChangeEvent=!1,r.addonModules=function(){return[import("./javascript.dbc99020.js").then(function(i){return i.j})]},r._onKeyUp=function(i,o){var s=o.keyCode;!r.editor||(s>=65&&s<=90||!o.shiftKey&&s>=48&&s<=57||o.shiftKey&&s===189||o.shiftKey&&s===222)&&r.editor.execCommand("autocomplete")},r._onEdit=function(){!r.editor||r.ignoreChangeEvent||(r.cachedValue=r.editor.getValue(),r.props.onEdit&&r.props.onEdit(r.cachedValue))},r._onHasCompletion=function(i,o){ed(i,o,r.props.onHintInformationRender)},r.cachedValue=t.value||"",r}return n.prototype.componentDidMount=function(){var t=this;this.initializeEditor().then(function(r){r.on("change",t._onEdit),r.on("keyup",t._onKeyUp),r.on("hasCompletion",t._onHasCompletion)}).catch(console.error)},n.prototype.componentDidUpdate=function(t){if(!!this.editor){if(this.ignoreChangeEvent=!0,this.props.value!==t.value&&this.props.value!==this.cachedValue){var r=this.props.value||"";this.cachedValue=r,this.editor.setValue(r)}this.ignoreChangeEvent=!1}},n.prototype.componentWillUnmount=function(){!this.editor||(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null)},n.prototype.render=function(){var t=this;return _.createElement("div",{className:"codemirrorWrap",style:{position:this.props.active?"relative":"absolute",visibility:this.props.active?"visible":"hidden"},ref:function(r){t._node=r}})},n.prototype.initializeEditor=function(){return Zte(this,void 0,void 0,function(){var t,r,i=this;return Kte(this,function(o){switch(o.label){case 0:return t=this,[4,cl(this.addonModules())];case 1:return t.CodeMirror=o.sent(),r=this.editor=this.CodeMirror(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:{name:"javascript",json:!0},theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:this.props.readOnly?"nocursor":!1,foldGutter:{minFoldSize:4},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:Eu({"Cmd-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Ctrl-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Alt-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Shift-Space":function(){return i.editor.showHint({completeSingle:!1,container:i._node})},"Cmd-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Ctrl-Enter":function(){i.props.onRunQuery&&i.props.onRunQuery()},"Shift-Ctrl-P":function(){i.props.onPrettifyQuery&&i.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){i.props.onMergeQuery&&i.props.onMergeQuery()}},ll)}),[2,r]}})})},n.prototype.getCodeMirror=function(){return this.editor},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component),ere=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),nre=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},tre=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},mm=function(e){ere(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.viewer=null,t._node=null,t.allAddons=function(){return[import("./foldgutter.b57edc84.js").then(function(r){return r.f}),import("./brace-fold.a4c1397b.js").then(function(r){return r.b}),import("./dialog.5a304969.js").then(function(r){return r.d}),import("./search.eacf1046.js").then(function(r){return r.s}),import("./searchcursor.be623f37.js").then(function(r){return r.s}),import("./jump-to-line.1cb761fa.js").then(function(r){return r.j}),import("./sublime.164659aa.js").then(function(r){return r.s}),import("./mode.19f6993a.js").then(function(r){return r.m})]},t}return n.prototype.componentDidMount=function(){this.initializeEditor()},n.prototype.shouldComponentUpdate=function(t){return this.props.value!==t.value},n.prototype.componentDidUpdate=function(){this.viewer&&this.viewer.setValue(this.props.value||"")},n.prototype.componentWillUnmount=function(){this.viewer=null},n.prototype.render=function(){var t=this;return _.createElement("section",{className:"result-window","aria-label":"Result Window","aria-live":"polite","aria-atomic":"true",ref:function(r){r&&(t.props.registerRef(r),t._node=r)}})},n.prototype.initializeEditor=function(){return nre(this,void 0,void 0,function(){var t,r,i,o;return tre(this,function(s){switch(s.label){case 0:return[4,cl(this.allAddons(),{useCommonAddons:!1})];case 1:return t=s.sent(),r=this.props.ResultsTooltip,i=this.props.ImagePreview,r||i?[4,import("./info-addon.09fd688e.js").then(function(a){return a.i})]:[3,3];case 2:s.sent(),o=document.createElement("div"),t.registerHelper("info","graphql-results",function(a,c,l,u){var f=[];return r&&f.push(_.createElement(r,{pos:u})),i&&typeof i.shouldRender=="function"&&i.shouldRender(a)&&f.push(_.createElement(i,{token:a})),f.length?(wp.render(_.createElement("div",null,f),o),o):(wp.unmountComponentAtNode(o),null)}),s.label=3;case 3:return this.viewer=t(this._node,{lineWrapping:!0,value:this.props.value||"",readOnly:!0,theme:this.props.editorTheme||"graphiql",mode:"graphql-results",keyMap:"sublime",foldGutter:{minFoldSize:4},gutters:["CodeMirror-foldgutter"],info:Boolean(this.props.ResultsTooltip||this.props.ImagePreview),extraKeys:ll}),[2]}})})},n.prototype.getCodeMirror=function(){return this.viewer},n.prototype.getClientHeight=function(){return this._node&&this._node.clientHeight},n}(_.Component);function wt(e){var n=e.onClick?e.onClick:function(){return null};return Su(e.type,n)}function Su(e,n){return e instanceof te?_.createElement("span",null,Su(e.ofType,n),"!"):e instanceof Qe?_.createElement("span",null,"[",Su(e.ofType,n),"]"):_.createElement("a",{className:"type-name",onClick:function(t){t.preventDefault(),n(e,t)},href:"#"},e==null?void 0:e.name)}var rre=function(e){return e?we(e):""};function o0(e){var n=e.field;return"defaultValue"in n&&n.defaultValue!==void 0?_.createElement("span",null," = ",_.createElement("span",{className:"arg-default-value"},rre(Gr(n.defaultValue,n.type)))):null}function Ta(e){var n=e.arg,t=e.onClickType,r=e.showDefaultValue;return _.createElement("span",{className:"arg"},_.createElement("span",{className:"arg-name"},n.name),": ",_.createElement(wt,{type:n.type,onClick:t}),r!==!1&&_.createElement(o0,{field:n}))}function ire(e){var n=e.directive;return _.createElement("span",{className:"doc-category-item",id:n.name.value},"@",n.name.value)}var ore=new Kf({breaks:!0,linkify:!0});function Cn(e){var n=e.markdown,t=e.className;return n?_.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:ore.render(n)}}):_.createElement("div",null)}var sre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o};function are(e){var n=e.field,t=e.onClickType,r=sre(_.useState(!1),2),i=r[0],o=r[1],s,a;if(n&&"args"in n&&n.args.length>0){s=_.createElement("div",{id:"doc-args",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"arguments"),n.args.filter(function(u){return!u.deprecationReason}).map(function(u){return _.createElement("div",{key:u.name,className:"doc-category-item"},_.createElement("div",null,_.createElement(Ta,{arg:u,onClickType:t})),_.createElement(Cn,{className:"doc-value-description",markdown:u.description}),u&&"deprecationReason"in u&&_.createElement(Cn,{className:"doc-deprecation",markdown:u==null?void 0:u.deprecationReason}))}));var c=n.args.filter(function(u){return Boolean(u.deprecationReason)});c.length>0&&(a=_.createElement("div",{id:"doc-deprecated-args",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated arguments"),i?c.map(function(u,f){return _.createElement("div",{key:f},_.createElement("div",null,_.createElement(Ta,{arg:u,onClickType:t})),_.createElement(Cn,{className:"doc-value-description",markdown:u.description}),u&&"deprecationReason"in u&&_.createElement(Cn,{className:"doc-deprecation",markdown:u==null?void 0:u.deprecationReason}))}):_.createElement("button",{className:"show-btn",onClick:function(){return o(!i)}},"Show deprecated arguments...")))}var l;return n&&n.astNode&&n.astNode.directives&&n.astNode.directives.length>0&&(l=_.createElement("div",{id:"doc-directives",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"directives"),n.astNode.directives.map(function(u){return _.createElement("div",{key:u.name.value,className:"doc-category-item"},_.createElement("div",null,_.createElement(ire,{directive:u})))}))),_.createElement("div",null,_.createElement(Cn,{className:"doc-type-description",markdown:(n==null?void 0:n.description)||"No Description"}),n&&"deprecationReason"in n&&_.createElement(Cn,{className:"doc-deprecation",markdown:n==null?void 0:n.deprecationReason}),_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"type"),_.createElement(wt,{type:n==null?void 0:n.type,onClick:t})),s,l,a)}function lre(e){var n=e.schema,t=e.onClickType,r=n.getQueryType(),i=n.getMutationType&&n.getMutationType(),o=n.getSubscriptionType&&n.getSubscriptionType();return _.createElement("div",null,_.createElement(Cn,{className:"doc-type-description",markdown:n.description||"A GraphQL schema provides a root type for each kind of operation."}),_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"root types"),_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"query"),": ",_.createElement(wt,{type:r,onClick:t})),i&&_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"mutation"),": ",_.createElement(wt,{type:i,onClick:t})),o&&_.createElement("div",{className:"doc-category-item"},_.createElement("span",{className:"keyword"},"subscription"),": ",_.createElement(wt,{type:o,onClick:t}))))}function Zn(e,n){var t;return function(){for(var r=this,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];t&&window.clearTimeout(t),t=window.setTimeout(function(){t=null,n.apply(r,i)},e)}}var cre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ure=function(e){cre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleChange=function(i){var o=i.currentTarget.value;r.setState({value:o}),r.debouncedOnSearch(o)},r.handleClear=function(){r.setState({value:""}),r.props.onSearch("")},r.state={value:t.value||""},r.debouncedOnSearch=Zn(200,r.props.onSearch),r}return n.prototype.render=function(){return _.createElement("label",{className:"search-box"},_.createElement("div",{className:"search-box-icon","aria-hidden":"true"},"\u26B2"),_.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",placeholder:this.props.placeholder,"aria-label":this.props.placeholder}),this.state.value&&_.createElement("button",{className:"search-box-clear",onClick:this.handleClear,"aria-label":"Clear search input"},"\u2715"))},n}(_.Component),fre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),dre=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},pre=function(e){fre(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.shouldComponentUpdate=function(t){return this.props.schema!==t.schema||this.props.searchValue!==t.searchValue},n.prototype.render=function(){var t,r,i=this.props.searchValue,o=this.props.withinType,s=this.props.schema,a=this.props.onClickType,c=this.props.onClickField,l=[],u=[],f=[],p=s.getTypeMap(),h=Object.keys(p);o&&(h=h.filter(function(v){return v!==o.name}),h.unshift(o.name));var d=function(v){if(l.length+u.length+f.length>=100)return"break";var S=p[v];if(o!==S&&Zl(v,i)&&u.push(_.createElement("div",{className:"doc-category-item",key:v},_.createElement(wt,{type:S,onClick:a}))),S&&"getFields"in S){var N=S.getFields();Object.keys(N).forEach(function(b){var A=N[b],M;if(!Zl(b,i))if("args"in A&&A.args.length){if(M=A.args.filter(function(I){return Zl(I.name,i)}),M.length===0)return}else return;var k=_.createElement("div",{className:"doc-category-item",key:v+"."+b},o!==S&&[_.createElement(wt,{key:"type",type:S,onClick:a}),"."],_.createElement("a",{className:"field-name",onClick:function(I){return c(A,S,I)}},A.name),M&&["(",_.createElement("span",{key:"args"},M.map(function(I){return _.createElement(Ta,{key:I.name,arg:I,onClickType:a,showDefaultValue:!1})})),")"]);o===S?l.push(k):f.push(k)})}};try{for(var E=dre(h),w=E.next();!w.done;w=E.next()){var g=w.value,m=d(g);if(m==="break")break}}catch(v){t={error:v}}finally{try{w&&!w.done&&(r=E.return)&&r.call(E)}finally{if(t)throw t.error}}return l.length+u.length+f.length===0?_.createElement("span",{className:"doc-alert-text"},"No results found."):o&&u.length+f.length>0?_.createElement("div",null,l,_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"other results"),u,f)):_.createElement("div",{className:"doc-search-items"},l,u,f)},n}(_.Component);function Zl(e,n){try{var t=n.replace(/[^_0-9A-Za-z]/g,function(r){return"\\"+r});return e.search(new RegExp(t,"i"))!==-1}catch{return e.toLowerCase().indexOf(n.toLowerCase())!==-1}}var hre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),mre=function(e){hre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleShowDeprecated=function(){return r.setState({showDeprecated:!0})},r.state={showDeprecated:!1},r}return n.prototype.shouldComponentUpdate=function(t,r){return this.props.type!==t.type||this.props.schema!==t.schema||this.state.showDeprecated!==r.showDeprecated},n.prototype.render=function(){var t=this.props.schema,r=this.props.type,i=this.props.onClickType,o=this.props.onClickField,s=null,a=[];r instanceof bo?(s="possible types",a=t.getPossibleTypes(r)):r instanceof wo?(s="implementations",a=t.getPossibleTypes(r)):r instanceof Sn&&(s="implements",a=r.getInterfaces());var c;a&&a.length>0&&(c=_.createElement("div",{id:"doc-types",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},s),a.map(function(m){return _.createElement("div",{key:m.name,className:"doc-category-item"},_.createElement(wt,{type:m,onClick:i}))})));var l,u;if(r&&"getFields"in r){var f=r.getFields(),p=Object.keys(f).map(function(m){return f[m]});l=_.createElement("div",{id:"doc-fields",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"fields"),p.filter(function(m){return!m.deprecationReason}).map(function(m){return _.createElement(gm,{key:m.name,type:r,field:m,onClickType:i,onClickField:o})}));var h=p.filter(function(m){return Boolean(m.deprecationReason)});h.length>0&&(u=_.createElement("div",{id:"doc-deprecated-fields",className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated fields"),this.state.showDeprecated?h.map(function(m){return _.createElement(gm,{key:m.name,type:r,field:m,onClickType:i,onClickField:o})}):_.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated fields...")))}var d,E;if(r instanceof wr){var w=r.getValues();d=_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"values"),w.filter(function(m){return Boolean(!m.deprecationReason)}).map(function(m){return _.createElement(vm,{key:m.name,value:m})}));var g=w.filter(function(m){return Boolean(m.deprecationReason)});g.length>0&&(E=_.createElement("div",{className:"doc-category"},_.createElement("div",{className:"doc-category-title"},"deprecated values"),this.state.showDeprecated?g.map(function(m){return _.createElement(vm,{key:m.name,value:m})}):_.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated values...")))}return _.createElement("div",null,_.createElement(Cn,{className:"doc-type-description",markdown:"description"in r&&r.description||"No Description"}),r instanceof Sn&&c,l,u,d,E,!(r instanceof Sn)&&c)},n}(_.Component);function gm(e){var n=e.type,t=e.field,r=e.onClickType,i=e.onClickField;return _.createElement("div",{className:"doc-category-item"},_.createElement("a",{className:"field-name",onClick:function(o){return i(t,n,o)}},t.name),"args"in t&&t.args&&t.args.length>0&&["(",_.createElement("span",{key:"args"},t.args.filter(function(o){return!o.deprecationReason}).map(function(o){return _.createElement(Ta,{key:o.name,arg:o,onClickType:r})})),")"],": ",_.createElement(wt,{type:t.type,onClick:r}),_.createElement(o0,{field:t}),t.description&&_.createElement(Cn,{className:"field-short-description",markdown:t.description}),"deprecationReason"in t&&t.deprecationReason&&_.createElement(Cn,{className:"doc-deprecation",markdown:t.deprecationReason}))}function vm(e){var n=e.value;return _.createElement("div",{className:"doc-category-item"},_.createElement("div",{className:"enum-value"},n.name),_.createElement(Cn,{className:"doc-value-description",markdown:n.description}),n.deprecationReason&&_.createElement(Cn,{className:"doc-deprecation",markdown:n.deprecationReason}))}var gre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),xa=globalThis&&globalThis.__assign||function(){return xa=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xa.apply(this,arguments)},ym={name:"Schema",title:"Documentation Explorer"},vre=function(e){gre(n,e);function n(t){var r=e.call(this,t)||this;return r.handleNavBackClick=function(){r.state.navStack.length>1&&r.setState({navStack:r.state.navStack.slice(0,-1)})},r.handleClickType=function(i){r.showDoc(i)},r.handleClickField=function(i){r.showDoc(i)},r.handleSearch=function(i){r.showSearch(i)},r.state={navStack:[ym]},r}return n.prototype.shouldComponentUpdate=function(t,r){return this.props.schema!==t.schema||this.state.navStack!==r.navStack||this.props.schemaErrors!==t.schemaErrors},n.prototype.render=function(){var t=this.props,r=t.schema,i=t.schemaErrors,o=this.state.navStack,s=o[o.length-1],a;i?a=_.createElement("div",{className:"error-container"},"Error fetching schema"):r===void 0?a=_.createElement("div",{className:"spinner-container"},_.createElement("div",{className:"spinner"})):r?s.search?a=_.createElement(pre,{searchValue:s.search,withinType:s.def,schema:r,onClickType:this.handleClickType,onClickField:this.handleClickField}):o.length===1?a=_.createElement(lre,{schema:r,onClickType:this.handleClickType}):fi(s.def)?a=_.createElement(mre,{schema:r,type:s.def,onClickType:this.handleClickType,onClickField:this.handleClickField}):a=_.createElement(are,{field:s.def,onClickType:this.handleClickType}):a=_.createElement("div",{className:"error-container"},"No Schema Available");var c=o.length===1||fi(s.def)&&"getFields"in s.def,l;return o.length>1&&(l=o[o.length-2].name),_.createElement("section",{className:"doc-explorer",key:s.name,"aria-label":"Documentation Explorer"},_.createElement("div",{className:"doc-explorer-title-bar"},l&&_.createElement("button",{className:"doc-explorer-back",onClick:this.handleNavBackClick,"aria-label":"Go back to "+l},l),_.createElement("div",{className:"doc-explorer-title"},s.title||s.name),_.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),_.createElement("div",{className:"doc-explorer-contents"},c&&_.createElement(ure,{value:s.search,placeholder:"Search "+s.name+"...",onSearch:this.handleSearch}),a))},n.prototype.showDoc=function(t){var r=this.state.navStack,i=r[r.length-1];i.def!==t&&this.setState({navStack:r.concat([{name:t.name,def:t}])})},n.prototype.showDocForReference=function(t){t&&t.kind==="Type"?this.showDoc(t.type):t.kind==="Field"?this.showDoc(t.field):t.kind==="Argument"&&t.field?this.showDoc(t.field):t.kind==="EnumValue"&&t.type&&this.showDoc(t.type)},n.prototype.showSearch=function(t){var r=this.state.navStack.slice(),i=r[r.length-1];r[r.length-1]=xa(xa({},i),{search:t}),this.setState({navStack:r})},n.prototype.reset=function(){this.setState({navStack:[ym]})},n}(_.Component),yre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),_re=function(e){yre(n,e);function n(t){var r=e.call(this,t)||this;return r.state={editable:!1},r.editField=null,r}return n.prototype.render=function(){var t=this,r,i=this.props.label||this.props.operationName||((r=this.props.query)===null||r===void 0?void 0:r.split(`
`).filter(function(s){return s.indexOf("#")!==0}).join("")),o=this.props.favorite?"\u2605":"\u2606";return _.createElement("li",{className:this.state.editable?"editable":void 0},this.state.editable?_.createElement("input",{type:"text",defaultValue:this.props.label,ref:function(s){t.editField=s},onBlur:this.handleFieldBlur.bind(this),onKeyDown:this.handleFieldKeyDown.bind(this),placeholder:"Type a label"}):_.createElement("button",{className:"history-label",onClick:this.handleClick.bind(this)},i),_.createElement("button",{onClick:this.handleEditClick.bind(this),"aria-label":"Edit label"},"\u270E"),_.createElement("button",{className:this.props.favorite?"favorited":void 0,onClick:this.handleStarClick.bind(this),"aria-label":this.props.favorite?"Remove favorite":"Add favorite"},o))},n.prototype.handleClick=function(){this.props.onSelect(this.props.query,this.props.variables,this.props.headers,this.props.operationName,this.props.label)},n.prototype.handleStarClick=function(t){t.stopPropagation(),this.props.handleToggleFavorite(this.props.query,this.props.variables,this.props.headers,this.props.operationName,this.props.label,this.props.favorite)},n.prototype.handleFieldBlur=function(t){t.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.headers,this.props.operationName,t.target.value,this.props.favorite)},n.prototype.handleFieldKeyDown=function(t){t.keyCode===13&&(t.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.headers,this.props.operationName,t.currentTarget.value,this.props.favorite))},n.prototype.handleEditClick=function(t){var r=this;t.stopPropagation(),this.setState({editable:!0},function(){r.editField&&r.editField.focus()})},n}(_.Component),Ere=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},Sre=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Ere(arguments[n]));return e},_m=function(){function e(n,t,r){r===void 0&&(r=null),this.key=n,this.storage=t,this.maxSize=r,this.items=this.fetchAll()}return Object.defineProperty(e.prototype,"length",{get:function(){return this.items.length},enumerable:!1,configurable:!0}),e.prototype.contains=function(n){return this.items.some(function(t){return t.query===n.query&&t.variables===n.variables&&t.headers===n.headers&&t.operationName===n.operationName})},e.prototype.edit=function(n){var t=this.items.findIndex(function(r){return r.query===n.query&&r.variables===n.variables&&r.headers===n.headers&&r.operationName===n.operationName});t!==-1&&(this.items.splice(t,1,n),this.save())},e.prototype.delete=function(n){var t=this.items.findIndex(function(r){return r.query===n.query&&r.variables===n.variables&&r.headers===n.headers&&r.operationName===n.operationName});t!==-1&&(this.items.splice(t,1),this.save())},e.prototype.fetchRecent=function(){return this.items[this.items.length-1]},e.prototype.fetchAll=function(){var n=this.storage.get(this.key);return n?JSON.parse(n)[this.key]:[]},e.prototype.push=function(n){var t,r=Sre(this.items,[n]);this.maxSize&&r.length>this.maxSize&&r.shift();for(var i=0;i<5;i++){var o=this.storage.set(this.key,JSON.stringify((t={},t[this.key]=r,t)));if(!o||!o.error)this.items=r;else if(o.isQuotaError&&this.maxSize)r.shift();else return}},e.prototype.save=function(){var n;this.storage.set(this.key,JSON.stringify((n={},n[this.key]=this.items,n)))},e}(),Na=globalThis&&globalThis.__assign||function(){return Na=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Na.apply(this,arguments)},wre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},Em=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(wre(arguments[n]));return e},bre=1e5,s0=function(){function e(n,t){var r=this;this.storage=n,this.maxHistoryLength=t,this.shouldSaveQuery=function(i,o,s,a){if(!i)return!1;try{st(i)}catch{return!1}return i.length>bre?!1:a?!(JSON.stringify(i)===JSON.stringify(a.query)&&(JSON.stringify(o)===JSON.stringify(a.variables)&&(JSON.stringify(s)===JSON.stringify(a.headers)||s&&!a.headers)||o&&!a.variables)):!0},this.fetchAllQueries=function(){var i=r.history.fetchAll(),o=r.favorite.fetchAll();return i.concat(o)},this.updateHistory=function(i,o,s,a){if(r.shouldSaveQuery(i,o,s,r.history.fetchRecent())){r.history.push({query:i,variables:o,headers:s,operationName:a});var c=r.history.items,l=r.favorite.items;r.queries=c.concat(l)}},this.toggleFavorite=function(i,o,s,a,c,l){var u={query:i,variables:o,headers:s,operationName:a,label:c};r.favorite.contains(u)?l&&(u.favorite=!1,r.favorite.delete(u)):(u.favorite=!0,r.favorite.push(u)),r.queries=Em(r.history.items,r.favorite.items)},this.editLabel=function(i,o,s,a,c,l){var u={query:i,variables:o,headers:s,operationName:a,label:c};l?r.favorite.edit(Na(Na({},u),{favorite:l})):r.history.edit(u),r.queries=Em(r.history.items,r.favorite.items)},this.history=new _m("queries",this.storage,this.maxHistoryLength),this.favorite=new _m("favorites",this.storage,null),this.queries=this.fetchAllQueries()}return e}(),kre=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),wu=globalThis&&globalThis.__assign||function(){return wu=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},wu.apply(this,arguments)},Tre=function(e){kre(n,e);function n(t){var r=e.call(this,t)||this;r.onUpdateHistory=function(o,s,a,c){r.historyStore.updateHistory(o,s,a,c),r.setState({queries:r.historyStore.queries})},r.onHandleEditLabel=function(o,s,a,c,l,u){r.historyStore.editLabel(o,s,a,c,l,u),r.setState({queries:r.historyStore.queries})},r.onToggleFavorite=function(o,s,a,c,l,u){r.historyStore.toggleFavorite(o,s,a,c,l,u),r.setState({queries:r.historyStore.queries})},r.historyStore=new s0(r.props.storage,r.props.maxHistoryLength);var i=r.historyStore.queries;return r.state={queries:i},r}return n.prototype.render=function(){var t=this,r=this.state.queries.slice().reverse(),i=r.map(function(o,s){return _.createElement(_re,wu({handleEditLabel:t.onHandleEditLabel,handleToggleFavorite:t.onToggleFavorite,key:s+":"+(o.label||o.query),onSelect:t.props.onSelectQuery},o))});return _.createElement("section",{"aria-label":"History"},_.createElement("div",{className:"history-title-bar"},_.createElement("div",{className:"history-title"},"History"),_.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),_.createElement("ul",{className:"history-contents"},i))},n}(_.Component),xre=function(){function e(){this.sizes=[]}return e.prototype.updateSizes=function(n){var t=this;n.forEach(function(r,i){if(r){var o=r.getClientHeight();if(i<=t.sizes.length&&o!==t.sizes[i]){var s=r.getCodeMirror();s&&s.setSize(null,null)}t.sizes[i]=o}})},e}();function Nre(e,n){return n instanceof DOMException&&(n.code===22||n.code===1014||n.name==="QuotaExceededError"||n.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e.length!==0}var Cre=function(){function e(n){this.storage=n||(typeof window!="undefined"?window.localStorage:null)}return e.prototype.get=function(n){if(this.storage){var t=this.storage.getItem("graphiql:"+n);if(t==="null"||t==="undefined")return this.storage.removeItem("graphiql:"+n),null;if(t)return t}return null},e.prototype.set=function(n,t){var r=!1,i=null;if(this.storage){var o="graphiql:"+n;if(t)try{this.storage.setItem(o,t)}catch(s){i=s,r=Nre(this.storage,s)}else this.storage.removeItem(o)}return{isQuotaError:r,error:i}},e}();function Sm(e,n,t){if(!(!t||t.length<1)){var r=t.map(function(s){return s.name&&s.name.value});if(n&&r.indexOf(n)!==-1)return n;if(n&&e){var i=e.map(function(s){return s.name&&s.name.value}),o=i.indexOf(n);if(o!==-1&&o<r.length)return r[o]}return r[0]}}function Kl(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return e[t]}function Ire(e,n,t){var r=[];if(!e||!n)return{insertions:r,result:n};var i;try{i=st(n)}catch{return{insertions:r,result:n}}var o=t||Dre,s=new Xa(e);return Mn(i,{leave:function(a){s.leave(a)},enter:function(a){if(s.enter(a),a.kind==="Field"&&!a.selectionSet){var c=s.getType(),l=a0(Fre(c),o);if(l&&a.loc){var u=Ore(n,a.loc.start);r.push({index:a.loc.end,string:" "+we(l).replace(/\n/g,`
`+u)})}}}}),{insertions:r,result:Are(n,r)}}function Dre(e){if(!("getFields"in e))return[];var n=e.getFields();if(n.id)return["id"];if(n.edges)return["edges"];if(n.node)return["node"];var t=[];return Object.keys(n).forEach(function(r){at(n[r].type)&&t.push(r)}),t}function a0(e,n){var t=tn(e);if(!(!e||at(e))){var r=n(t);if(!(!Array.isArray(r)||r.length===0||!("getFields"in t)))return{kind:y.SELECTION_SET,selections:r.map(function(i){var o=t.getFields()[i],s=o?o.type:null;return{kind:y.FIELD,name:{kind:y.NAME,value:i},selectionSet:a0(s,n)}})}}}function Are(e,n){if(n.length===0)return e;var t="",r=0;return n.forEach(function(i){var o=i.index,s=i.string;t+=e.slice(r,o)+s,r=o}),t+=e.slice(r),t}function Ore(e,n){for(var t=n,r=n;t;){var i=e.charCodeAt(t-1);if(i===10||i===13||i===8232||i===8233)break;t--,i!==9&&i!==11&&i!==12&&i!==32&&i!==160&&(r=t)}return e.substring(t,r)}function Fre(e){if(e)return e}function Es(e){for(var n=0,t=e;t.offsetParent;)n+=t.offsetLeft,t=t.offsetParent;return n}function wm(e){for(var n=0,t=e;t.offsetParent;)n+=t.offsetTop,t=t.offsetParent;return n}var di=globalThis&&globalThis.__assign||function(){return di=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},di.apply(this,arguments)},nd=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},Rre=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},l0=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Rre(arguments[n]));return e};function Lre(e,n){var t,r,i=new Map,o=[];try{for(var s=nd(e),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.kind==="Field"){var l=n(c),u=i.get(l);if(c.directives&&c.directives.length){var f=di({},c);o.push(f)}else if(u&&u.selectionSet&&c.selectionSet)u.selectionSet.selections=l0(u.selectionSet.selections,c.selectionSet.selections);else if(!u){var f=di({},c);i.set(l,f),o.push(f)}}else o.push(c)}}catch(p){t={error:p}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return o}function c0(e,n,t){var r,i,o,s=t?tn(t).name:null,a=[],c=[];try{for(var l=nd(n),u=l.next();!u.done;u=l.next()){var f=u.value;if(f.kind==="FragmentSpread"){var p=f.name.value;if(!f.directives||f.directives.length===0){if(c.indexOf(p)>=0)continue;c.push(p)}var h=e[f.name.value];if(h){var d=h.typeCondition,E=h.directives,w=h.selectionSet;f={kind:y.INLINE_FRAGMENT,typeCondition:d,directives:E,selectionSet:w}}}if(f.kind===y.INLINE_FRAGMENT&&(!f.directives||((o=f.directives)===null||o===void 0?void 0:o.length)===0)){var g=f.typeCondition?f.typeCondition.name.value:null;if(!g||g===s){a.push.apply(a,l0(c0(e,f.selectionSet.selections,t)));continue}}a.push(f)}}catch(m){r={error:m}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}return a}function Pre(e,n){var t,r,i=n?new Xa(n):null,o=Object.create(null);try{for(var s=nd(e.definitions),a=s.next();!a.done;a=s.next()){var c=a.value;c.kind===y.FRAGMENT_DEFINITION&&(o[c.name.value]=c)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}var l={SelectionSet:function(u){var f=i?i.getParentType():null,p=u.selections;return p=c0(o,p,f),p=Lre(p,function(h){return h.alias?h.alias.value:h.name.value}),di(di({},u),{selections:p})},FragmentDefinition:function(){return null}};return Mn(e,i?Ff(i,l):l)}var Mre="IntrospectionQuery",qre=Mre;/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */var jre=function(n){return typeof n=="object"?n===null:typeof n!="function"};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var $re=function(n){return n!=null&&typeof n=="object"&&Array.isArray(n)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Vre=$re;function bm(e){return Vre(e)===!0&&Object.prototype.toString.call(e)==="[object Object]"}var Ure=function(n){var t,r;return!(bm(n)===!1||(t=n.constructor,typeof t!="function")||(r=t.prototype,bm(r)===!1)||r.hasOwnProperty("isPrototypeOf")===!1)};/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) Jon Schlinkert (https://github.com/jonschlinkert).
 * Released under the MIT License.
 */const{deleteProperty:zre}=Reflect,Bre=jre,km=Ure,Tm=e=>typeof e=="object"&&e!==null||typeof e=="function",Qre=e=>e==="__proto__"||e==="constructor"||e==="prototype",td=e=>{if(!Bre(e))throw new TypeError("Object keys must be strings or symbols");if(Qre(e))throw new Error(`Cannot set unsafe key: "${e}"`)},Hre=e=>Array.isArray(e)?e.flat().map(String).join(","):e,Gre=(e,n)=>{if(typeof e!="string"||!n)return e;let t=e+";";return n.arrays!==void 0&&(t+=`arrays=${n.arrays};`),n.separator!==void 0&&(t+=`separator=${n.separator};`),n.split!==void 0&&(t+=`split=${n.split};`),n.merge!==void 0&&(t+=`merge=${n.merge};`),n.preservePaths!==void 0&&(t+=`preservePaths=${n.preservePaths};`),t},Wre=(e,n,t)=>{const r=Hre(n?Gre(e,n):e);td(r);const i=xr.cache.get(r)||t();return xr.cache.set(r,i),i},Yre=(e,n={})=>{const t=n.separator||".",r=t==="/"?!1:n.preservePaths;if(typeof e=="string"&&r!==!1&&/\//.test(e))return[e];const i=[];let o="";const s=a=>{let c;a.trim()!==""&&Number.isInteger(c=Number(a))?i.push(c):i.push(a)};for(let a=0;a<e.length;a++){const c=e[a];if(c==="\\"){o+=e[++a];continue}if(c===t){s(o),o="";continue}o+=c}return o&&s(o),i},u0=(e,n)=>n&&typeof n.split=="function"?n.split(e):typeof e=="symbol"?[e]:Array.isArray(e)?e:Wre(e,n,()=>Yre(e,n)),Jre=(e,n,t,r)=>{if(td(n),t===void 0)zre(e,n);else if(r&&r.merge){const i=r.merge==="function"?r.merge:Object.assign;i&&km(e[n])&&km(t)?e[n]=i(e[n],t):e[n]=t}else e[n]=t;return e},xr=(e,n,t,r)=>{if(!n||!Tm(e))return e;const i=u0(n,r);let o=e;for(let s=0;s<i.length;s++){const a=i[s],c=i[s+1];if(td(a),c===void 0){Jre(o,a,t,r);break}if(typeof c=="number"&&!Array.isArray(o[a])){o=o[a]=[];continue}Tm(o[a])||(o[a]={}),o=o[a]}return e};xr.split=u0;xr.cache=new Map;xr.clear=()=>{xr.cache=new Map};var Xre=xr,Ca=globalThis&&globalThis.__assign||function(){return Ca=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ca.apply(this,arguments)};function Zre(e){return _.createElement("div",{role:"button","aria-pressed":!1,className:"close","aria-label":"Close Tab",title:"Close Tab",onClick:function(n){n.stopPropagation(),e.onClick()}})}function Kre(e){return _.createElement("button",Ca({},e.tabProps,{role:"tab",type:"button","aria-selected":e.isActive,title:e.title,className:"tab"+(e.isActive?" active":""),onClick:e.onSelect}),e.title,e.isCloseable?_.createElement(Zre,{onClick:function(){return e.onClose()}}):null)}function eie(e){return _.createElement("button",{onClick:e.onClick,className:"tab-add",title:"Create new tab"},_.createElement("span",null,"+"))}function nie(e){return _.createElement("div",Ca({role:"tablist",className:"tabs"},e.tabsProps),e.children)}function tie(e){var n,t=/^(?!.*#).*(query|subscription|mutation)\s+([a-zA-Z0-9_]+)/,r=t.exec(e);return(n=r==null?void 0:r[2])!==null&&n!==void 0?n:"<untitled>"}function Nr(e){var n,t,r;return[(n=e.query)!==null&&n!==void 0?n:"",(t=e.variables)!==null&&t!==void 0?t:"",(r=e.headers)!==null&&r!==void 0?r:""].join("|")}function bu(){var e=function(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var rie=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},X.apply(this,arguments)},ec=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},nc=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(u){l=[6,u],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},iie=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},oie=globalThis&&globalThis.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Ki=="function"?Ki(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}},sie=globalThis&&globalThis.__read||function(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o},f0=globalThis&&globalThis.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(sie(arguments[n]));return e},Ki=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},xm=350,aie=parseInt(_.version.slice(0,2),10);if(aie<16)throw Error(["GraphiQL 0.18.0 and after is not compatible with React 15 or below.","If you are using a CDN source (jsdelivr, unpkg, etc), follow this example:","https://github.com/graphql/graphiql/blob/master/examples/graphiql-cdn/index.html#L49"].join(`
`));var Nm=function(e){return JSON.stringify(e,null,2)},lie=function(e){return X(X({},e),{message:e.message,stack:e.stack})},Cm=function(e){return e instanceof F?e.toString():e instanceof Error?lie(e):e},cie=function(e){rie(n,e);function n(t){var r,i,o,s,a,c,l,u,f,p,h,d=e.call(this,t)||this;if(d._editorQueryID=0,d.safeSetState=function(T,j){d.componentIsMounted&&d.setState(T,j)},d.persistTabsState=function(){var T,j;d.props.tabs&&(d._storage.set("tabState",JSON.stringify(d.state.tabs,function(W,Y){return W==="response"||d.state.shouldPersistHeaders&&W==="headers"?void 0:Y})),typeof d.props.tabs=="object"&&((j=(T=d.props.tabs).onTabChange)===null||j===void 0||j.call(T,d.state.tabs)))},d.makeHandleOnSelectTab=function(T){return function(){d.handleStopQuery(),d.setState(function(j){return gie(T,j)},function(){d.persistTabsState(),d.state.query&&d.handleEditQuery(d.state.query)})}},d.makeHandleOnCloseTab=function(T){return function(){d.state.tabs.activeTabIndex===T&&d.handleStopQuery(),d.setState(function(j){return vie(T,j)},d.persistTabsState)}},d.handleOnAddTab=function(){d.setState(function(T){return yie(T)},d.persistTabsState)},d.handleClickReference=function(T){d.setState({docExplorerOpen:!0},function(){d.docExplorerComponent&&d.docExplorerComponent.showDocForReference(T)}),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))},d.handleRunQuery=function(T){return ec(d,void 0,void 0,function(){var j,W,Y,he,Te,ae,de,Vn,Un,Xn=this;return nc(this,function(At){switch(At.label){case 0:this._editorQueryID++,j=this._editorQueryID,W=this.autoCompleteLeafs()||this.state.query,Y=this.state.variables,he=this.state.headers,Te=this.state.shouldPersistHeaders,ae=this.state.operationName,T&&T!==ae&&(ae=T,this.handleEditOperationName(ae)),At.label=1;case 1:return At.trys.push([1,3,,4]),this.setState({isWaitingForResponse:!0,response:void 0,operationName:ae}),this._storage.set("operationName",ae),this._queryHistory?this._queryHistory.onUpdateHistory(W,Y,he,ae):this._historyStore&&this._historyStore.updateHistory(W,Y,he,ae),de={data:{}},[4,this._fetchQuery(W,Y,he,ae,Te,function(ft){var fl,od;if(j===Xn._editorQueryID){var wi=Array.isArray(ft)?ft:!1;if(!wi&&typeof ft!="string"&&ft!==null&&"hasNext"in ft&&(wi=[ft]),wi){var zo={data:de.data},sd=f0((de==null?void 0:de.errors)||[],wi.map(function(Ot){return Ot.errors}).flat().filter(Boolean));sd.length&&(zo.errors=sd);try{for(var Bo=Ki(wi),bi=Bo.next();!bi.done;bi=Bo.next()){var Ar=bi.value,ad=Ar.path,dl=Ar.data,Eoe=Ar.errors,k0=iie(Ar,["path","data","errors"]);if(ad){if(!dl)throw new Error("Expected part to contain a data property, but got "+Ar);Xre(zo.data,ad,dl,{merge:!0})}else dl&&(zo.data=Ar.data);de=X(X({},zo),k0)}}catch(Ot){fl={error:Ot}}finally{try{bi&&!bi.done&&(od=Bo.return)&&od.call(Bo)}finally{if(fl)throw fl.error}}Xn.setState({isWaitingForResponse:!1,response:n.formatResult(de)})}else{var ld=n.formatResult(ft);Xn.setState(function(Ot){return X(X({},Ot),{tabs:X(X({},Ot.tabs),{tabs:Ot.tabs.tabs.map(function(cd,T0){return T0!==Ot.tabs.activeTabIndex?cd:X(X({},cd),{response:ld})})}),isWaitingForResponse:!1,response:ld})},Xn.persistTabsState)}}})];case 2:return Vn=At.sent(),this.setState({subscription:Vn}),[3,4];case 3:return Un=At.sent(),this.setState({isWaitingForResponse:!1,response:Un.message}),[3,4];case 4:return[2]}})})},d.handleStopQuery=function(){var T=d.state.subscription;d.setState({isWaitingForResponse:!1,subscription:null}),T&&T.unsubscribe()},d.handlePrettifyQuery=function(){var T,j,W,Y=d.getQueryEditor(),he=(T=Y==null?void 0:Y.getValue())!==null&&T!==void 0?T:"",Te=we(st(he));Te!==he&&(Y==null||Y.setValue(Te));var ae=d.getVariableEditor(),de=(j=ae==null?void 0:ae.getValue())!==null&&j!==void 0?j:"";try{var Vn=JSON.stringify(JSON.parse(de),null,2);Vn!==de&&(ae==null||ae.setValue(Vn))}catch{}var Un=d.getHeaderEditor(),Xn=(W=Un==null?void 0:Un.getValue())!==null&&W!==void 0?W:"";try{var At=JSON.stringify(JSON.parse(Xn),null,2);At!==Xn&&(Un==null||Un.setValue(At))}catch{}},d.handleMergeQuery=function(){var T=d.getQueryEditor(),j=T.getValue();if(!!j){var W=d.state.documentAST;T.setValue(we(Pre(W,d.state.schema)))}},d.handleEditQuery=Zn(100,function(T){var j=d._updateQueryFacts(T,d.state.operationName,d.state.operations,d.state.schema);if(d.setState(function(W){return X(X(X(X({},W),{query:T}),j),{tabs:mie(T,W.tabs,j==null?void 0:j.operationName)})},d.persistTabsState),d._storage.set("query",T),d.props.onEditQuery)return d.props.onEditQuery(T,j==null?void 0:j.documentAST)}),d.handleCopyQuery=function(){var T=d.getQueryEditor(),j=T&&T.getValue();if(!!j&&(ab(j),d.props.onCopyQuery))return d.props.onCopyQuery(j)},d._updateQueryFacts=function(T,j,W,Y){var he=Ms(Y,T);if(he){var Te=Sm(W,j,he.operations),ae=d.props.onEditOperationName;return ae&&Te&&j!==Te&&ae(Te),X({operationName:Te},he)}},d.handleEditVariables=function(T){d.setState(function(j){return X(X({},j),{variables:T,tabs:hie(T,j.tabs)})},d.persistTabsState),Zn(500,function(){return d._storage.set("variables",T)})(),d.props.onEditVariables&&d.props.onEditVariables(T)},d.handleEditHeaders=function(T){d.setState(function(j){return X(X({},j),{headers:T,tabs:pie(T,j.tabs)})},d.persistTabsState),d.props.shouldPersistHeaders&&Zn(500,function(){return d._storage.set("headers",T)})(),d.props.onEditHeaders&&d.props.onEditHeaders(T)},d.handleEditOperationName=function(T){var j=d.props.onEditOperationName;j&&j(T)},d.handleHintInformationRender=function(T){T.addEventListener("click",d._onClickHintInformation);var j;T.addEventListener("DOMNodeRemoved",j=function(){T.removeEventListener("DOMNodeRemoved",j),T.removeEventListener("click",d._onClickHintInformation)})},d.handleEditorRunQuery=function(){d._runQueryAtCursor()},d._onClickHintInformation=function(T){if((T==null?void 0:T.currentTarget)&&"className"in T.currentTarget&&T.currentTarget.className==="typeName"){var j=T.currentTarget.innerHTML,W=d.state.schema;if(W){var Y=W.getType(j);Y&&(d.setState({docExplorerOpen:!0},function(){d.docExplorerComponent&&d.docExplorerComponent.showDoc(Y)}),Zn(500,function(){return d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))})())}}},d.handleToggleDocs=function(){typeof d.props.onToggleDocs=="function"&&d.props.onToggleDocs(!d.state.docExplorerOpen),d._storage.set("docExplorerOpen",JSON.stringify(!d.state.docExplorerOpen)),d.setState({docExplorerOpen:!d.state.docExplorerOpen})},d.handleToggleHistory=function(){typeof d.props.onToggleHistory=="function"&&d.props.onToggleHistory(!d.state.historyPaneOpen),d._storage.set("historyPaneOpen",JSON.stringify(!d.state.historyPaneOpen)),d.setState({historyPaneOpen:!d.state.historyPaneOpen})},d.handleSelectHistoryQuery=function(T,j,W,Y){T&&d.handleEditQuery(T),j&&d.handleEditVariables(j),W&&d.handleEditHeaders(W),Y&&d.handleEditOperationName(Y)},d.handleResizeStart=function(T){if(!!d._didClickDragBar(T)){T.preventDefault();var j=T.clientX-Es(T.target),W=function(he){if(he.buttons===0)return Y();var Te=d.editorBarComponent,ae=he.clientX-Es(Te)-j,de=Te.clientWidth-ae;d.setState({editorFlex:ae/de}),Zn(500,function(){return d._storage.set("editorFlex",JSON.stringify(d.state.editorFlex))})()},Y=function(){document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",Y),W=null,Y=null};document.addEventListener("mousemove",W),document.addEventListener("mouseup",Y)}},d.handleResetResize=function(){d.setState({editorFlex:1}),d._storage.set("editorFlex",JSON.stringify(d.state.editorFlex))},d.handleDocsResizeStart=function(T){T.preventDefault();var j=d.state.docExplorerWidth,W=T.clientX-Es(T.target),Y=function(Te){if(Te.buttons===0)return he();var ae=d.graphiqlContainer,de=Te.clientX-Es(ae)-W,Vn=ae.clientWidth-de;Vn<100?(typeof d.props.onToggleDocs=="function"&&d.props.onToggleDocs(!d.state.docExplorerOpen),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen)),d.setState({docExplorerOpen:!1})):(d.setState({docExplorerOpen:!0,docExplorerWidth:Math.min(Vn,650)}),Zn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()),d._storage.set("docExplorerOpen",JSON.stringify(d.state.docExplorerOpen))},he=function(){d.state.docExplorerOpen||(d.setState({docExplorerWidth:j}),Zn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",he),Y=null,he=null};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",he)},d.handleDocsResetResize=function(){d.setState({docExplorerWidth:xm}),Zn(500,function(){return d._storage.set("docExplorerWidth",JSON.stringify(d.state.docExplorerWidth))})()},d.handleTabClickPropogation=function(T){T.preventDefault(),T.stopPropagation()},d.handleOpenHeaderEditorTab=function(T){d.setState({headerEditorActive:!0,variableEditorActive:!1,secondaryEditorOpen:!0})},d.handleOpenVariableEditorTab=function(T){d.setState({headerEditorActive:!1,variableEditorActive:!0,secondaryEditorOpen:!0})},d.handleSecondaryEditorResizeStart=function(T){T.preventDefault();var j=!1,W=d.state.secondaryEditorOpen,Y=d.state.secondaryEditorHeight,he=T.clientY-wm(T.target),Te=function(de){if(de.buttons===0)return ae();j=!0;var Vn=d.editorBarComponent,Un=de.clientY-wm(Vn)-he,Xn=Vn.clientHeight-Un;Xn<60?d.setState({secondaryEditorOpen:!1,secondaryEditorHeight:Y}):d.setState({secondaryEditorOpen:!0,secondaryEditorHeight:Xn}),Zn(500,function(){return d._storage.set("secondaryEditorHeight",JSON.stringify(d.state.secondaryEditorHeight))})()},ae=function(){j||d.setState({secondaryEditorOpen:!W}),document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",ae),Te=null,ae=null};document.addEventListener("mousemove",Te),document.addEventListener("mouseup",ae)},typeof t.fetcher!="function")throw new TypeError("GraphiQL requires a fetcher function.");d._storage=new Cre(t.storage);var E=(a=t.maxHistoryLength)!==null&&a!==void 0?a:20;d._historyStore=new s0(d._storage,E),d.componentIsMounted=!1;var w=t.query!==void 0?t.query:d._storage.get("query")?d._storage.get("query"):t.defaultQuery!==void 0?t.defaultQuery:uie,g=Ms(t.schema,w),m=t.variables!==void 0?t.variables:d._storage.get("variables"),v=t.headers!==void 0?t.headers:d._storage.get("headers"),S=t.operationName!==void 0?t.operationName:Sm(void 0,d._storage.get("operationName"),g&&g.operations),N=t.docExplorerOpen||!1;d._storage.get("docExplorerOpen")&&(N=d._storage.get("docExplorerOpen")==="true");var b;t.defaultVariableEditorOpen!==void 0?b=t.defaultVariableEditorOpen:t.defaultSecondaryEditorOpen!==void 0?b=t.defaultSecondaryEditorOpen:b=Boolean(m||v);var A=(c=t.headerEditorEnabled)!==null&&c!==void 0?c:!0,M=(l=t.shouldPersistHeaders)!==null&&l!==void 0?l:!1,k=t.schema,I=t.response,J=void 0;if(k&&!d.props.dangerouslyAssumeSchemaIsValid){var G=Ps(k);G&&G.length>0&&(I=n.formatError(G),k=void 0,J=G)}d._introspectionQuery=Zw({schemaDescription:(u=t.schemaDescription)!==null&&u!==void 0?u:void 0,inputValueDeprecation:(f=t.inputValueDeprecation)!==null&&f!==void 0?f:void 0}),d._introspectionQueryName=(p=t.introspectionQueryName)!==null&&p!==void 0?p:qre,d._introspectionQuerySansSubscriptions=d._introspectionQuery.replace("subscriptionType { name }","");var ne=Nr({query:w,variables:m,headers:v}),R={id:bu(),hash:ne,title:S!=null?S:"<untitled>",query:w,variables:m,headers:v,operationName:S,response:void 0},z=null;d.props.tabs&&(z=d._storage.get("tabState"));var U;if(z===null)U={activeTabIndex:0,tabs:[R]};else{U=JSON.parse(z);var ye=!1;try{for(var L=Ki(U.tabs),H=L.next();!H.done;H=L.next()){var B=H.value;B.query=B.query,B.variables=B.variables,B.headers=M?B.headers:void 0,B.response=void 0,B.operationName=void 0,B.id=bu(),B.hash=Nr(B),B.hash===ne&&(ye=!0)}}catch(T){r={error:T}}finally{try{H&&!H.done&&(i=L.return)&&i.call(L)}finally{if(r)throw r.error}}ye===!1&&(U.tabs.push(R),U.activeTabIndex=U.tabs.length-1)}var K=U.tabs[0],x=0;try{for(var $=Ki(U.tabs),P=$.next();!P.done;P=$.next()){var B=P.value;if(B.hash===ne){U.activeTabIndex=x,K=B;break}x++}}catch(T){o={error:T}}finally{try{P&&!P.done&&(s=$.return)&&s.call($)}finally{if(o)throw o.error}}return d.state=X({tabs:U,schema:k,query:K==null?void 0:K.query,variables:K==null?void 0:K.variables,headers:K==null?void 0:K.headers,operationName:K==null?void 0:K.operationName,response:(h=K==null?void 0:K.response)!==null&&h!==void 0?h:I,docExplorerOpen:N,schemaErrors:J,editorFlex:Number(d._storage.get("editorFlex"))||1,secondaryEditorOpen:b,secondaryEditorHeight:Number(d._storage.get("secondaryEditorHeight"))||200,variableEditorActive:d._storage.get("variableEditorActive")==="true"||t.headerEditorEnabled?d._storage.get("headerEditorActive")!=="true":!0,headerEditorActive:d._storage.get("headerEditorActive")==="true",headerEditorEnabled:A,shouldPersistHeaders:M,historyPaneOpen:d._storage.get("historyPaneOpen")==="true"||!1,docExplorerWidth:Number(d._storage.get("docExplorerWidth"))||xm,isWaitingForResponse:!1,subscription:null,maxHistoryLength:E},g),d.state.query&&d.handleEditQuery(d.state.query),d}return n.formatResult=function(t){return JSON.stringify(t,null,2)},n.prototype.componentDidMount=function(){this.componentIsMounted=!0,this.state.schema===void 0&&this.fetchSchema(),this.codeMirrorSizer=new xre,typeof window!="undefined"&&(window.g=this)},n.prototype.UNSAFE_componentWillMount=function(){this.componentIsMounted=!1},n.prototype.UNSAFE_componentWillReceiveProps=function(t){var r=this,i=this.state.schema,o=this.state.query,s=this.state.variables,a=this.state.headers,c=this.state.operationName,l=this.state.response;if(t.schema!==void 0&&(i=t.schema),t.query!==void 0&&this.props.query!==t.query&&(o=t.query),t.variables!==void 0&&this.props.variables!==t.variables&&(s=t.variables),t.headers!==void 0&&this.props.headers!==t.headers&&(a=t.headers),t.operationName!==void 0&&(c=t.operationName),t.response!==void 0&&(l=t.response),o&&i&&(i!==this.state.schema||o!==this.state.query||c!==this.state.operationName)){if(!this.props.dangerouslyAssumeSchemaIsValid){var u=Ps(i);u&&u.length>0&&(this.handleSchemaErrors(u),i=void 0)}var f=this._updateQueryFacts(o,c,this.state.operations,i);f!==void 0&&(c=f.operationName,this.setState(f))}t.schema===void 0&&t.fetcher!==this.props.fetcher&&(i=void 0),this._storage.set("operationName",c),this.setState({schema:i,query:o,variables:s,headers:a,operationName:c,response:l},function(){r.state.schema===void 0&&(r.docExplorerComponent&&r.docExplorerComponent.reset(),r.fetchSchema())})},n.prototype.componentDidUpdate=function(){this.codeMirrorSizer.updateSizes([this.queryEditorComponent,this.variableEditorComponent,this.headerEditorComponent,this.resultComponent])},n.prototype.render=function(){var t=this,r,i=_.Children.toArray(this.props.children),o=Kl(i,function(E){return tc(E,n.Logo)})||_.createElement(n.Logo,null),s=Kl(i,function(E){return tc(E,n.Toolbar)})||_.createElement(n.Toolbar,null,_.createElement(Fr,{onClick:this.handlePrettifyQuery,title:"Prettify Query (Shift-Ctrl-P)",label:"Prettify"}),_.createElement(Fr,{onClick:this.handleMergeQuery,title:"Merge Query (Shift-Ctrl-M)",label:"Merge"}),_.createElement(Fr,{onClick:this.handleCopyQuery,title:"Copy Query (Shift-Ctrl-C)",label:"Copy"}),_.createElement(Fr,{onClick:this.handleToggleHistory,title:"Show History",label:"History"}),!((r=this.props.toolbar)===null||r===void 0)&&r.additionalContent?this.props.toolbar.additionalContent:null),a=Kl(i,function(E){return tc(E,n.Footer)}),c={WebkitFlex:this.state.editorFlex,flex:this.state.editorFlex},l={display:"block",width:this.state.docExplorerWidth},u="docExplorerWrap"+(this.state.docExplorerWidth<200?" doc-explorer-narrow":""),f={display:this.state.historyPaneOpen?"block":"none",width:"230px",zIndex:7},p=this.state.secondaryEditorOpen,h={height:p?this.state.secondaryEditorHeight:void 0},d=this.state.tabs;return _.createElement("div",{ref:function(E){t.graphiqlContainer=E},"data-testid":"graphiql-container",className:"graphiql-container"},this.state.historyPaneOpen&&_.createElement("div",{className:"historyPaneWrap",style:f},_.createElement(Tre,{ref:function(E){t._queryHistory=E},operationName:this.state.operationName,query:this.state.query,variables:this.state.variables,onSelectQuery:this.handleSelectHistoryQuery,storage:this._storage,maxHistoryLength:this.state.maxHistoryLength,queryID:this._editorQueryID},_.createElement("button",{className:"docExplorerHide",onClick:this.handleToggleHistory,"aria-label":"Close History"},"\u2715"))),_.createElement("div",{className:"editorWrap"},_.createElement("div",{className:"topBarWrap"},this.props.beforeTopBarContent,_.createElement("div",{className:"topBar"},o,_.createElement(Fb,{isRunning:Boolean(this.state.subscription),onRun:this.handleRunQuery,onStop:this.handleStopQuery,operations:this.state.operations}),s),!this.state.docExplorerOpen&&_.createElement("button",{className:"docExplorerShow",onClick:this.handleToggleDocs,"aria-label":"Open Documentation Explorer"},"Docs")),this.props.tabs?_.createElement(nie,{tabsProps:{"aria-label":"Select active operation"}},d.tabs.map(function(E,w){return _.createElement(Kre,{key:E.id,isActive:w===d.activeTabIndex,title:E.title,isCloseable:d.tabs.length>1,onSelect:t.makeHandleOnSelectTab(w),onClose:t.makeHandleOnCloseTab(w),tabProps:{"aria-controls":"sessionWrap",id:"session-tab-"+w}})}),_.createElement(eie,{onClick:this.handleOnAddTab})):null,_.createElement("div",{ref:function(E){t.editorBarComponent=E},role:"tabpanel",id:"sessionWrap",className:"editorBar","aria-labelledby":"session-tab-"+d.activeTabIndex,onDoubleClick:this.handleResetResize,onMouseDown:this.handleResizeStart},_.createElement("div",{className:"queryWrap",style:c},_.createElement(dm,{ref:function(E){t.queryEditorComponent=E},schema:this.state.schema,validationRules:this.props.validationRules,value:this.state.query,onEdit:this.handleEditQuery,onHintInformationRender:this.handleHintInformationRender,onClickReference:this.handleClickReference,onCopyQuery:this.handleCopyQuery,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,externalFragments:this.props.externalFragments}),_.createElement("section",{className:"variable-editor secondary-editor",style:h,"aria-label":this.state.variableEditorActive?"Query Variables":"Request Headers"},_.createElement("div",{className:"secondary-editor-title variable-editor-title",id:"secondary-editor-title",style:{cursor:p?"row-resize":"n-resize"},onMouseDown:this.handleSecondaryEditorResizeStart},_.createElement("div",{className:"variable-editor-title-text"+(this.state.variableEditorActive?" active":""),onClick:this.handleOpenVariableEditorTab,onMouseDown:this.handleTabClickPropogation},"Query Variables"),this.state.headerEditorEnabled&&_.createElement("div",{style:{marginLeft:"20px"},className:"variable-editor-title-text"+(this.state.headerEditorActive?" active":""),onClick:this.handleOpenHeaderEditorTab,onMouseDown:this.handleTabClickPropogation},"Request Headers")),_.createElement(pm,{ref:function(E){t.variableEditorComponent=E},value:this.state.variables,variableToType:this.state.variableToType,onEdit:this.handleEditVariables,onHintInformationRender:this.handleHintInformationRender,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,active:this.state.variableEditorActive}),this.state.headerEditorEnabled&&_.createElement(hm,{ref:function(E){t.headerEditorComponent=E},value:this.state.headers,onEdit:this.handleEditHeaders,onHintInformationRender:this.handleHintInformationRender,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly,active:this.state.headerEditorActive}))),_.createElement("div",{className:"resultWrap"},this.state.isWaitingForResponse&&_.createElement("div",{className:"spinner-container"},_.createElement("div",{className:"spinner"})),_.createElement(mm,{registerRef:function(E){t.resultViewerElement=E},ref:function(E){t.resultComponent=E},value:this.state.response,editorTheme:this.props.editorTheme,ResultsTooltip:this.props.ResultsTooltip,ImagePreview:Pb}),a))),this.state.docExplorerOpen&&_.createElement("div",{className:u,style:l},_.createElement("div",{className:"docExplorerResizer",onDoubleClick:this.handleDocsResetResize,onMouseDown:this.handleDocsResizeStart}),_.createElement(vre,{ref:function(E){t.docExplorerComponent=E},schemaErrors:this.state.schemaErrors,schema:this.state.schema},_.createElement("button",{className:"docExplorerHide",onClick:this.handleToggleDocs,"aria-label":"Close Documentation Explorer"},"\u2715"))))},n.prototype.getQueryEditor=function(){if(this.queryEditorComponent)return this.queryEditorComponent.getCodeMirror()},n.prototype.getVariableEditor=function(){return this.variableEditorComponent?this.variableEditorComponent.getCodeMirror():null},n.prototype.getHeaderEditor=function(){return this.headerEditorComponent?this.headerEditorComponent.getCodeMirror():null},n.prototype.refresh=function(){this.queryEditorComponent&&this.queryEditorComponent.getCodeMirror().refresh(),this.variableEditorComponent&&this.variableEditorComponent.getCodeMirror().refresh(),this.headerEditorComponent&&this.headerEditorComponent.getCodeMirror().refresh(),this.resultComponent&&this.resultComponent.getCodeMirror().refresh()},n.prototype.autoCompleteLeafs=function(){var t=Ire(this.state.schema,this.state.query,this.props.getDefaultFieldNames),r=t.insertions,i=t.result;if(r&&r.length>0){var o=this.getQueryEditor();o&&o.operation(function(){var s=o.getCursor(),a=o.indexFromPos(s);o.setValue(i||"");var c=0,l=r.map(function(f){var p=f.index,h=f.string;return o.markText(o.posFromIndex(p+c),o.posFromIndex(p+(c+=h.length)),{className:"autoInsertedLeaf",clearOnEnter:!0,title:"Automatically added leaf fields"})});setTimeout(function(){return l.forEach(function(f){return f.clear()})},7e3);var u=a;r.forEach(function(f){var p=f.index,h=f.string;p<a&&(u+=h.length)}),o.setCursor(o.posFromIndex(u))})}return i},n.prototype.fetchSchema=function(){var t=this,r=this.props.fetcher,i={shouldPersistHeaders:Boolean(this.props.shouldPersistHeaders),documentAST:this.state.documentAST};try{this.state.headers&&this.state.headers.trim().length>2?i.headers=JSON.parse(this.state.headers):this.props.headers&&(i.headers=JSON.parse(this.props.headers))}catch{this.setState({response:"Introspection failed as headers are invalid."});return}var o=Dm(r({query:this._introspectionQuery,operationName:this._introspectionQueryName},i));if(!Im(o)){this.setState({response:"Fetcher did not return a Promise for introspection."});return}o.then(function(s){if(typeof s!="string"&&"data"in s)return s;var a=Dm(r({query:t._introspectionQuerySansSubscriptions,operationName:t._introspectionQueryName},i));if(!Im(o))throw new Error("Fetcher did not return a Promise for introspection.");return a}).then(function(s){var a,c;if(t.state.schema===void 0)if(s&&s.data&&"__schema"in(s==null?void 0:s.data)){var l=Kw(s.data);if(!t.props.dangerouslyAssumeSchemaIsValid){var u=Ps(l);u&&u.length>0&&(l=void 0,t.handleSchemaErrors(u))}if(l){var f=Ms(l,t.state.query);t.safeSetState(X(X({schema:l},f),{schemaErrors:void 0})),(c=(a=t.props).onSchemaChange)===null||c===void 0||c.call(a,l)}}else{var p=typeof s=="string"?s:n.formatResult(s);t.handleSchemaErrors([p])}}).catch(function(s){t.handleSchemaErrors([s])})},n.prototype.handleSchemaErrors=function(t){this.safeSetState({response:t?n.formatError(t):void 0,schema:void 0,schemaErrors:t})},n.prototype._fetchQuery=function(t,r,i,o,s,a){return ec(this,void 0,void 0,function(){var c,l,u,f,p,h,d=this;return nc(this,function(E){c=this.props.fetcher,l=null,u=null;try{l=r&&r.trim()!==""?JSON.parse(r):null}catch(w){throw new Error("Variables are invalid JSON: "+w.message+".")}if(typeof l!="object")throw new Error("Variables are not a JSON object.");try{u=i&&i.trim()!==""?JSON.parse(i):null}catch(w){throw new Error("Headers are invalid JSON: "+w.message+".")}if(typeof u!="object")throw new Error("Headers are not a JSON object.");return this.props.externalFragments&&(f=new Map,Array.isArray(this.props.externalFragments)?this.props.externalFragments.forEach(function(w){f.set(w.name.value,w)}):Mn(st(this.props.externalFragments,{}),{FragmentDefinition:function(w){f.set(w.name.value,w)}}),p=$y(this.state.documentAST,f),p.length>0&&(t+=`
`+p.map(function(w){return we(w)}).join(`
`))),h=c({query:t,variables:l,operationName:o},{headers:u,shouldPersistHeaders:s,documentAST:this.state.documentAST}),[2,Promise.resolve(h).then(function(w){if(m0(w)){var g=w.subscribe({next:a,error:function(m){d.safeSetState({isWaitingForResponse:!1,response:m?n.formatError(m):void 0,subscription:null})},complete:function(){d.safeSetState({isWaitingForResponse:!1,subscription:null})}});return g}else return g0(w)?(function(){return ec(d,void 0,void 0,function(){var m,v,S,N,b,A,M;return nc(this,function(k){switch(k.label){case 0:k.trys.push([0,13,,14]),k.label=1;case 1:k.trys.push([1,6,7,12]),m=oie(w),k.label=2;case 2:return[4,m.next()];case 3:if(v=k.sent(),!!v.done)return[3,5];S=v.value,a(S),k.label=4;case 4:return[3,2];case 5:return[3,12];case 6:return N=k.sent(),A={error:N},[3,12];case 7:return k.trys.push([7,,10,11]),v&&!v.done&&(M=m.return)?[4,M.call(m)]:[3,9];case 8:k.sent(),k.label=9;case 9:return[3,11];case 10:if(A)throw A.error;return[7];case 11:return[7];case 12:return this.safeSetState({isWaitingForResponse:!1,subscription:null}),[3,14];case 13:return b=k.sent(),this.safeSetState({isWaitingForResponse:!1,response:b?n.formatError(b):void 0,subscription:null}),[3,14];case 14:return[2]}})})}(),{unsubscribe:function(){var m,v;return(v=(m=w[Symbol.asyncIterator]()).return)===null||v===void 0?void 0:v.call(m)}}):(a(w),null)}).catch(function(w){return d.safeSetState({isWaitingForResponse:!1,response:w?n.formatError(w):void 0}),null})]})})},n.prototype._runQueryAtCursor=function(){if(this.state.subscription){this.handleStopQuery();return}var t,r=this.state.operations;if(r){var i=this.getQueryEditor();if(i&&i.hasFocus())for(var o=i.getCursor(),s=i.indexFromPos(o),a=0;a<r.length;a++){var c=r[a];if(c.loc&&c.loc.start<=s&&c.loc.end>=s){t=c.name&&c.name.value;break}}}this.handleRunQuery(t)},n.prototype._didClickDragBar=function(t){if(t.button!==0||t.ctrlKey)return!1;var r=t.target;if(r.className.indexOf("CodeMirror-gutter")!==0)return!1;for(var i=this.resultViewerElement;r;){if(r===i)return!0;r=r.parentNode}return!1},n.formatError=function(t){return Array.isArray(t)?Nm({errors:t.map(function(r){return Cm(r)})}):Nm({errors:Cm(t)})},n.Logo=d0,n.Toolbar=p0,n.Footer=h0,n.QueryEditor=dm,n.VariableEditor=pm,n.HeaderEditor=hm,n.ResultViewer=mm,n.Button=Fr,n.ToolbarButton=Fr,n.Group=qb,n.Menu=$b,n.MenuItem=Vb,n}(_.Component);function d0(e){return _.createElement("div",{className:"title"},e.children||_.createElement("span",null,"Graph",_.createElement("em",null,"i"),"QL"))}d0.displayName="GraphiQLLogo";function p0(e){return _.createElement("div",{className:"toolbar",role:"toolbar","aria-label":"Editor Commands"},e.children)}p0.displayName="GraphiQLToolbar";function h0(e){return _.createElement("div",{className:"footer"},e.children)}h0.displayName="GraphiQLFooter";var uie=`# Welcome to GraphiQL
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

`;function Im(e){return typeof e=="object"&&typeof e.then=="function"}function fie(e){return new Promise(function(n,t){var r=e.subscribe({next:function(i){n(i),r.unsubscribe()},error:t,complete:function(){t(new Error("no value resolved"))}})})}function m0(e){return typeof e=="object"&&"subscribe"in e&&typeof e.subscribe=="function"}function g0(e){return typeof e=="object"&&e!==null&&(e[Symbol.toStringTag]==="AsyncGenerator"||Symbol.asyncIterator in e)}function die(e){return new Promise(function(n,t){var r,i=(r=("return"in e?e:e[Symbol.asyncIterator]()).return)===null||r===void 0?void 0:r.bind(e),o=("next"in e?e:e[Symbol.asyncIterator]()).next.bind(e);o().then(function(s){n(s.value),i==null||i()}).catch(function(s){t(s)})})}function Dm(e){return Promise.resolve(e).then(function(n){return g0(n)?die(n):m0(n)?fie(n):n})}function tc(e,n){var t;return((t=e==null?void 0:e.type)===null||t===void 0?void 0:t.displayName)&&e.type.displayName===n.displayName?!0:e.type===n}function pie(e,n){return X(X({},n),{tabs:n.tabs.map(function(t,r){return r!==n.activeTabIndex?t:X(X({},t),{headers:e,hash:Nr({query:t.query,headers:e,variables:t.variables})})})})}function hie(e,n){return X(X({},n),{tabs:n.tabs.map(function(t,r){return r!==n.activeTabIndex?t:X(X({},t),{variables:e,hash:Nr({query:t.query,headers:t.headers,variables:e})})})})}function mie(e,n,t){return X(X({},n),{tabs:n.tabs.map(function(r,i){return i!==n.activeTabIndex?r:X(X({},r),{title:t!=null?t:tie(e),query:e,hash:Nr({query:e,headers:r.headers,variables:r.variables})})})})}function gie(e,n){var t=n.tabs.activeTabIndex,r=n.tabs.tabs.map(function(o,s){return s!==t?o:X(X({},o),{query:n.query,variables:n.variables,operationName:n.operationName,headers:n.headers,response:n.response,hash:Nr({query:n.query,variables:n.variables,headers:n.headers})})}),i=n.tabs.tabs[e];return X(X({},n),{query:i.query,variables:i.variables,operationName:i.operationName,headers:i.headers,response:i.response,tabs:X(X({},n.tabs),{tabs:r,activeTabIndex:e})})}function vie(e,n){var t=n.tabs.activeTabIndex>0?n.tabs.activeTabIndex-1:0,r=X(X({},n.tabs),{activeTabIndex:t,tabs:n.tabs.tabs.filter(function(o,s){return e!==s})}),i=r.tabs[t];return X(X({},n),{query:i.query,variables:i.variables,operationName:i.operationName,headers:i.headers,response:i.response,tabs:r})}function yie(e){var n=e.tabs.activeTabIndex,t={id:bu(),title:"<untitled>",headers:"",variables:"",query:"",operationName:"",response:"",hash:Nr({query:"",variables:"",headers:""})},r=e.tabs.tabs.map(function(i,o){return o!==n?i:X(X({},i),{headers:e.headers,variables:e.variables,query:e.query,operationName:e.operationName,response:e.response})});return X(X({},e),{headers:t.headers,variables:t.variables,query:t.query,operationName:t.operationName,response:t.response,tabs:X(X({},e.tabs),{activeTabIndex:e.tabs.tabs.length,tabs:f0(r,[t])})})}var _ie=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ku=globalThis&&globalThis.__assign||function(){return ku=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ku.apply(this,arguments)};function Eie(e){return!(!e||typeof e!="object"||!("props"in e))}(function(e){_ie(n,e);function n(t){var r=e.call(this,t)||this;return r._node=null,r._listener=null,r.handleOpen=function(i){qs(i),r.setState({visible:!0}),r._subscribe()},r.state={visible:!1},r}return n.prototype.componentWillUnmount=function(){this._release()},n.prototype.render=function(){var t=this,r,i=this.state.visible,o=_.Children.map(this.props.children,function(s,a){if(!Eie(s))return null;(!r||s.props.selected)&&(r=s);var c=s.props.onSelect||t.props.onSelect&&t.props.onSelect.bind(null,s.props.value,a);return _.createElement(Sie,ku({},s.props,{onSelect:c}))});return _.createElement("a",{className:"toolbar-select toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:qs,ref:function(s){t._node=s},title:this.props.title},r==null?void 0:r.props.label,_.createElement("svg",{width:"13",height:"10"},_.createElement("path",{fill:"#666",d:"M 5 5 L 13 5 L 9 1 z"}),_.createElement("path",{fill:"#666",d:"M 5 6 L 13 6 L 9 10 z"})),_.createElement("ul",{className:"toolbar-select-options"+(i?" open":"")},o))},n.prototype._subscribe=function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))},n.prototype._release=function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)},n.prototype.handleClick=function(t){this._node!==t.target&&(qs(t),this.setState({visible:!1}),this._release())},n})(_.Component);function Sie(e){var n=e.onSelect,t=e.label,r=e.selected;return _.createElement("li",{onMouseOver:function(i){i.currentTarget.className="hover"},onMouseOut:function(i){i.currentTarget.className=""},onMouseDown:qs,onMouseUp:n},t,r&&_.createElement("svg",{width:"13",height:"13"},_.createElement("polygon",{points:`4.851,10.462 0,5.611 2.314,3.297 4.851,5.835
    10.686,0 13,2.314 4.851,10.462`})))}function qs(e){e.preventDefault()}var v0={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&r.push(a)}}else if(s==="object")if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&r.push(c);else r.push(o.toString())}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(v0);var pi=v0.exports;const y0=Ln.exports.createContext({});function wie(){return Ln.exports.useContext(y0)}function bie(e){const n=e.getQueryType(),t=e.getMutationType();return{queryType:n,mutationType:t}}function Am(e){try{return e.trim()?st(e,{noLocation:!0}):null}catch{return null}}const kie="_container_6qvll_1",Tie="_uncheck_6qvll_9";var Om={container:kie,uncheck:Tie},rd={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xie=Ln.exports,Nie=Symbol.for("react.element"),Cie=Symbol.for("react.fragment"),Iie=Object.prototype.hasOwnProperty,Die=xie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Aie={key:!0,ref:!0,__self:!0,__source:!0};function _0(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Iie.call(n,r)&&!Aie.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Nie,type:e,key:o,ref:s,props:i,_owner:Die.current}}ul.Fragment=Cie;ul.jsx=_0;ul.jsxs=_0;rd.exports=ul;const ge=rd.exports.jsx,Kt=rd.exports.jsxs,Oie=({className:e,checked:n,onClick:t})=>{return ge("div",{className:pi(Om.container,e),onClick:t,children:n?r():i()});function r(){return Kt("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[ge("circle",{cx:"7.49951",cy:"7.5",r:"7.5",fill:"#6E6ACF"}),ge("path",{d:"M4.64593 7.00106L6.87961 9.23256L10.5012 5.61325",stroke:"white",strokeWidth:"1.5"})]})}function i(){return ge("div",{className:Om.uncheck})}},Fie="_container_18xi6_1",Rie="_icon_18xi6_10",Lie="_folded_18xi6_19";var rc={container:Fie,icon:Rie,folded:Lie};const E0=({className:e,isFolded:n})=>ge("div",{className:pi(rc.container,e),children:ge("svg",{className:pi(rc.icon,{[rc.folded]:n}),xmlns:"http://www.w3.org/2000/svg",children:ge("path",{d:"M0.853553 7.14645L3.64645 4.35355C3.84171 4.15829 3.84171 3.84171 3.64645 3.64645L0.853554 0.853553C0.538571 0.538571 2.05126e-07 0.761654 1.85654e-07 1.20711L-5.85082e-08 6.79289C-7.79796e-08 7.23835 0.53857 7.46143 0.853553 7.14645Z"})})}),Pie="_checkbox_yahlj_1",Mie="_fieldTitle_yahlj_5",qie="_foldIcon_yahlj_17",jie="_name_yahlj_22",$ie="_typeName_yahlj_30",Vie="_description_yahlj_36",Uie="_fields_yahlj_54";var Ft={checkbox:Pie,fieldTitle:Mie,foldIcon:qie,name:jie,typeName:$ie,description:Vie,fields:Uie};const S0=({className:e,field:n,schema:t,selectionSet:r,onEdit:i})=>{var f;n.args;const o=Tu(n.type),s=xu(n.type),[a,c]=Ln.exports.useState(!0),l=(f=r==null?void 0:r.selections)==null?void 0:f.find(p=>p.name.value===n.name),u=p=>{var d,E,w;if(!l)return null;const h=l.selectionSet?l.selectionSet:{kind:y.SELECTION_SET,selections:[]};p.type==="addField"?h.selections=[...(E=(d=l.selectionSet)==null?void 0:d.selections)!=null?E:[],{kind:y.FIELD,name:{kind:y.NAME,value:p.payloads.name}}]:h.selections=((w=l.selectionSet)==null?void 0:w.selections).filter(g=>g.name.value!==p.payloads.name),i({type:"updateField",payloads:De(oe({},l),{selectionSet:h})})};return Kt("div",{className:pi(Ft.container,e),children:[Kt("div",{className:Ft.fieldTitle,onClick:()=>{c(!a)},children:[ge(Oie,{className:Ft.checkbox,checked:!!l,onClick:p=>{p.stopPropagation();const h=!l;h&&c(!1),i(h?{type:"addField",payloads:n}:{type:"removeField",payloads:{name:n.name}})}}),ge("div",{className:Ft.foldIcon,children:o?ge(E0,{isFolded:a}):null}),ge("span",{className:Ft.name,children:n.name}),ge("span",{className:Ft.typeName,children:n.type.toString()}),n.description?ge("span",{className:Ft.description,children:n.description}):null]}),a||!s?null:ge("div",{className:Ft.fields,children:Object.keys(s).map(p=>ge(S0,{field:s[p],schema:t,selectionSet:l==null?void 0:l.selectionSet,onEdit:u},p))})]})};function Tu(e){return ve(e)?!0:je(e)||se(e)?Tu(e.ofType):!1}function xu(e){return ve(e)?e.getFields():je(e)||se(e)?xu(e.ofType):null}const zie="_typeTitle_rkpyq_1",Bie="_name_rkpyq_8",Qie="_fields_rkpyq_16";var Ss={typeTitle:zie,name:Bie,fields:Qie};const Fm=({className:e,type:n,schema:t,operation:r})=>{const{onEditDefinition:i}=wie(),o=n.getFields(),[s,a]=Ln.exports.useState(!1),c=l=>{if(!r)return null;const u=(()=>{switch(l.type){case"addField":return[...r.selectionSet.selections,{kind:y.FIELD,name:{kind:y.NAME,value:l.payloads.name}}];case"removeField":return r.selectionSet.selections.filter(f=>f.name.value!==l.payloads.name);case"updateField":return r.selectionSet.selections.map(f=>f.name.value===l.payloads.name.value?l.payloads:f)}})();i(De(oe({},r),{selectionSet:De(oe({},r.selectionSet),{selections:u})}))};return Kt("div",{className:pi(Ss.container,e),children:[Kt("div",{className:Ss.typeTitle,onClick:()=>{a(!s)},children:[ge(E0,{isFolded:s}),ge("span",{className:Ss.name,children:n.name})]}),s?null:ge("div",{className:Ss.fields,children:Object.keys(o).map(l=>ge(S0,{field:o[l],schema:t,selectionSet:r==null?void 0:r.selectionSet,onEdit:c},l))})]})},Hie="_container_taixv_1",Gie="_title_taixv_14";var ic={container:Hie,title:Gie};const Wie=({className:e,schema:n,query:t,onEdit:r})=>{const{queryType:i,mutationType:o}=bie(n),[s,a]=Ln.exports.useState(()=>Am(t));Ln.exports.useEffect(()=>{const u=Am(t);u&&a(u)},[t]);const c=(()=>{const u=s==null?void 0:s.definitions[0];return u&&Rf(u)?u:null})(),l=u=>{!s||r(we(De(oe({},s),{definitions:[u]})))};return ge(y0.Provider,{value:{schema:n,onEditDefinition:l},children:Kt("div",{className:pi(ic.container,e),children:[ge("div",{className:ic.title,children:ge("h2",{children:"Docs"})}),Kt("div",{className:ic.content,children:[i?ge(Fm,{type:i,schema:n,operation:c}):null,o?ge(Fm,{type:o,schema:n,operation:c}):null]})]})})};var Yie=`type Query {
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
`;const oc=`\r
\r
`;async function*Jie(e,n,t){const r=!t||!t.multiple;let i=Buffer.byteLength(n),o=Buffer.alloc(0),s=!0,a=[];e:for await(const c of e){let l=o.byteLength;o=Buffer.concat([o,c]);const u=c.indexOf(n);for(~u?l+=u:l=o.indexOf(n),a=[];~l;){const f=o.slice(0,l),p=o.slice(l+i);if(s)s=!1,n=`\r
`+n,i+=2;else{const h={},d=f.indexOf(oc),E=o.slice(0,d).toString().trim().split(/\r\n/);let w;for(;w=E.shift();)w=w.split(": "),h[w.shift().toLowerCase()]=w.join(": ");const g=f.lastIndexOf(`\r
`,d+oc.length);let m=f.slice(d+oc.length,g>-1?void 0:g),v=!1;if(w=h["content-type"],w&&!!~w.indexOf("application/json"))try{m=JSON.parse(m.toString()),v=!0}catch{}if(w={headers:h,body:m,json:v},r?yield w:a.push(w),p.slice(0,2).toString()==="--")break e}o=p,l=o.indexOf(n)}a.length&&(yield a)}a.length&&(yield a)}async function Xie(e,n){const t=e.headers["content-type"];if(!t||!~t.indexOf("multipart/mixed"))return e;const r=t.indexOf("boundary=");return Jie(e,`--${~r?t.substring(r+9).trim().replace(/['"]/g,""):"-"}`,n)}const id=Object.prototype.hasOwnProperty;function eo(e){return typeof e=="object"&&e!==null}function Zie(e){return Array.isArray(e)&&e.length>0&&e.every(n=>"message"in n)}function Fi(e,n){return id.call(e,n)}function ws(e,n){return id.call(e,n)&&eo(e[n])}function Lr(e,n){return id.call(e,n)&&typeof e[n]=="string"}function Rm(e,n){return e.length<124?e:n}const Kie="graphql-transport-ws";var gn;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(gn||(gn={}));var Fe;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(Fe||(Fe={}));function Nu(e){if(eo(e)){if(!Lr(e,"type"))return!1;switch(e.type){case Fe.ConnectionInit:return!Fi(e,"payload")||e.payload===void 0||eo(e.payload);case Fe.ConnectionAck:case Fe.Ping:case Fe.Pong:return!Fi(e,"payload")||e.payload===void 0||eo(e.payload);case Fe.Subscribe:return Lr(e,"id")&&ws(e,"payload")&&(!Fi(e.payload,"operationName")||e.payload.operationName===void 0||e.payload.operationName===null||typeof e.payload.operationName=="string")&&Lr(e.payload,"query")&&(!Fi(e.payload,"variables")||e.payload.variables===void 0||e.payload.variables===null||ws(e.payload,"variables"))&&(!Fi(e.payload,"extensions")||e.payload.extensions===void 0||e.payload.extensions===null||ws(e.payload,"extensions"));case Fe.Next:return Lr(e,"id")&&ws(e,"payload");case Fe.Error:return Lr(e,"id")&&Zie(e.payload);case Fe.Complete:return Lr(e,"id");default:return!1}}return!1}function eoe(e,n){if(Nu(e))return e;if(typeof e!="string")throw new Error("Message not parsable");const t=JSON.parse(e,n);if(!Nu(t))throw new Error("Invalid message");return t}function Ri(e,n){if(!Nu(e))throw new Error("Cannot stringify invalid message");return JSON.stringify(e,n)}function noe(e){const{url:n,connectionParams:t,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:o=0,keepAlive:s=0,disablePong:a,connectionAckWaitTimeout:c=0,retryAttempts:l=5,retryWait:u=async function(ne){let R=1e3;for(let z=0;z<ne;z++)R*=2;await new Promise(z=>setTimeout(z,R+Math.floor(Math.random()*(3e3-300)+300)))},isFatalConnectionProblem:f=G=>!bs(G),on:p,webSocketImpl:h,generateID:d=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ne=>{const R=Math.random()*16|0;return(ne=="x"?R:R&3|8).toString(16)})},jsonMessageReplacer:E,jsonMessageReviver:w}=e;let g;if(h){if(!roe(h))throw new Error("Invalid WebSocket implementation provided");g=h}else typeof WebSocket!="undefined"?g=WebSocket:typeof global!="undefined"?g=global.WebSocket||global.MozWebSocket:typeof window!="undefined"&&(g=window.WebSocket||window.MozWebSocket);if(!g)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const m=g,v=(()=>{const G=(()=>{const R={};return{on(z,U){return R[z]=U,()=>{delete R[z]}},emit(z){var U;"id"in z&&((U=R[z.id])===null||U===void 0||U.call(R,z))}}})(),ne={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[G.emit,p.message]:[G.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:G.on,on(R,z){const U=ne[R];return U.push(z),()=>{U.splice(U.indexOf(z),1)}},emit(R,...z){for(const U of[...ne[R]])U(...z)}}})();function S(G){const ne=[v.on("error",R=>{ne.forEach(z=>z()),G(R)}),v.on("closed",R=>{ne.forEach(z=>z()),G(R)})]}let N,b=0,A=!1,M=0,k=!1;async function I(){const[G,ne]=await(N!=null?N:N=new Promise((U,ye)=>(async()=>{if(A){if(await u(M),!b)return N=void 0,ye({code:1e3,reason:"All Subscriptions Gone"});M++}v.emit("connecting");const L=new m(typeof n=="function"?await n():n,Kie);let H,B;function K(){isFinite(s)&&s>0&&(clearTimeout(B),B=setTimeout(()=>{L.readyState===m.OPEN&&(L.send(Ri({type:Fe.Ping})),v.emit("ping",!1,void 0))},s))}S($=>{N=void 0,clearTimeout(H),clearTimeout(B),ye($),bs($)&&$.code===4499&&(L.close(4499,"Terminated"),L.onerror=null,L.onclose=null)}),L.onerror=$=>v.emit("error",$),L.onclose=$=>v.emit("closed",$),L.onopen=async()=>{try{v.emit("opened",L);const $=typeof t=="function"?await t():t;if(L.readyState!==m.OPEN)return;L.send(Ri($?{type:Fe.ConnectionInit,payload:$}:{type:Fe.ConnectionInit},E)),isFinite(c)&&c>0&&(H=setTimeout(()=>{L.close(gn.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},c)),K()}catch($){v.emit("error",$),L.close(gn.InternalClientError,Rm($ instanceof Error?$.message:new Error($).message,"Internal client error"))}};let x=!1;L.onmessage=({data:$})=>{try{const P=eoe($,w);if(v.emit("message",P),P.type==="ping"||P.type==="pong"){v.emit(P.type,!0,P.payload),P.type==="pong"?K():a||(L.send(Ri(P.payload?{type:Fe.Pong,payload:P.payload}:{type:Fe.Pong})),v.emit("pong",!1,P.payload));return}if(x)return;if(P.type!==Fe.ConnectionAck)throw new Error(`First message cannot be of type ${P.type}`);clearTimeout(H),x=!0,v.emit("connected",L,P.payload),A=!1,M=0,U([L,new Promise((T,j)=>S(j))])}catch(P){L.onmessage=null,v.emit("error",P),L.close(gn.BadResponse,Rm(P instanceof Error?P.message:new Error(P).message,"Bad response"))}}})()));G.readyState===m.CLOSING&&await ne;let R=()=>{};const z=new Promise(U=>R=U);return[G,R,Promise.race([z.then(()=>{if(!b){const U=()=>G.close(1e3,"Normal Closure");isFinite(o)&&o>0?setTimeout(()=>{!b&&G.readyState===m.OPEN&&U()},o):U()}}),ne])]}function J(G){if(bs(G)&&(toe(G.code)||[gn.InternalServerError,gn.InternalClientError,gn.BadRequest,gn.BadResponse,gn.Unauthorized,gn.SubprotocolNotAcceptable,gn.SubscriberAlreadyExists,gn.TooManyInitialisationRequests].includes(G.code)))throw G;if(k)return!1;if(bs(G)&&G.code===1e3)return b>0;if(!l||M>=l||f(G))throw G;return A=!0}return r||(async()=>{for(b++;;)try{const[,,G]=await I();await G}catch(G){try{if(!J(G))return}catch(ne){return i==null?void 0:i(ne)}}})(),{on:v.on,subscribe(G,ne){const R=d();let z=!1,U=!1,ye=()=>{b--,z=!0};return(async()=>{for(b++;;)try{const[L,H,B]=await I();if(z)return H();const K=v.onMessage(R,x=>{switch(x.type){case Fe.Next:{ne.next(x.payload);return}case Fe.Error:{U=!0,z=!0,ne.error(x.payload),ye();return}case Fe.Complete:{z=!0,ye();return}}});L.send(Ri({id:R,type:Fe.Subscribe,payload:G},E)),ye=()=>{!z&&L.readyState===m.OPEN&&L.send(Ri({id:R,type:Fe.Complete},E)),b--,z=!0,H()},await B.finally(K);return}catch(L){if(!J(L))return}})().then(()=>{U||ne.complete()}).catch(L=>{ne.error(L)}),()=>{z||ye()}},async dispose(){if(k=!0,N){const[G]=await N;G.close(1e3,"Normal Closure")}},terminate(){N&&v.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}function bs(e){return eo(e)&&"code"in e&&"reason"in e}function toe(e){return[1e3,1001,1006,1005,1012,1013,1013].includes(e)?!1:e>=1e3&&e<=1999}function roe(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function ioe(e,n,t){const r=async function*(){yield*e}(),i=r.return.bind(r);if(n&&(r.return=(...o)=>(n(),i(...o))),t){const o=r.throw.bind(r);r.throw=s=>(t(s),o(s))}return r}function Lm(){const e={};return e.promise=new Promise((n,t)=>{e.resolve=n,e.reject=t}),e}function ooe(){let e={type:"running"},n=Lm();const t=[];function r(s){e.type==="running"&&(t.push(s),n.resolve(),n=Lm())}const i=async function*(){for(;;)if(t.length>0)yield t.shift();else{if(e.type==="error")throw e.error;if(e.type==="finished")return;await n.promise}}(),o=ioe(i,()=>{e.type==="running"&&(e={type:"finished"},n.resolve())},s=>{e.type==="running"&&(e={type:"error",error:s},n.resolve())});return{pushValue:r,asyncIterableIterator:o}}const w0=e=>{const{pushValue:n,asyncIterableIterator:t}=ooe(),r=e({next:s=>{n(s)},complete:()=>{t.return()},error:s=>{t.throw(s)}}),i=t.return;let o;return t.return=()=>(o===void 0&&(r(),o=i()),o),t};function soe(e){return typeof e=="object"&&e!==null&&(e[Symbol.toStringTag]==="AsyncGenerator"||Symbol.asyncIterator&&Symbol.asyncIterator in e)}var aoe=globalThis&&globalThis.__awaiter||function(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(e,n||[])).next())})},mt=globalThis&&globalThis.__await||function(e){return this instanceof mt?(this.v=e,this):new mt(e)},loe=globalThis&&globalThis.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof __values=="function"?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}},coe=globalThis&&globalThis.__asyncGenerator||function(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(h){return new Promise(function(d,E){o.push([p,h,d,E])>1||a(p,h)})})}function a(p,h){try{c(r[p](h))}catch(d){f(o[0][3],d)}}function c(p){p.value instanceof mt?Promise.resolve(p.value.v).then(l,u):f(o[0][2],p)}function l(p){a("next",p)}function u(p){a("throw",p)}function f(p,h){p(h),o.shift(),o.length&&a(o[0][0],o[0][1])}};const uoe=(e,n)=>{let t=!1;return Mn(e,{OperationDefinition(r){var i;n===((i=r.name)===null||i===void 0?void 0:i.value)&&r.operation==="subscription"&&(t=!0)}}),t},foe=(e,n)=>(t,r)=>aoe(void 0,void 0,void 0,function*(){return(yield n(e.url,{method:"POST",body:JSON.stringify(t),headers:Object.assign(Object.assign({"content-type":"application/json"},e.headers),r==null?void 0:r.headers)})).json()}),doe=(e,n)=>{let t;try{return t=noe({url:e,connectionParams:n}),b0(t)}catch(r){console.error(`Error creating websocket client for:
${e}

${r}`)}},b0=e=>n=>w0(t=>e.subscribe(n,Object.assign(Object.assign({},t),{error:r=>{r instanceof Error?t.error(r):r instanceof CloseEvent?t.error(new Error(`Socket closed with event ${r.code} ${r.reason||""}`.trim())):t.error(new Error(r.map(({message:i})=>i).join(", ")))}}))),poe=e=>n=>{const t=e.request(n);return w0(r=>t.subscribe(r).unsubscribe)},hoe=(e,n)=>function(t,r){return coe(this,arguments,function*(){var i,o;const s=yield mt(n(e.url,{method:"POST",body:JSON.stringify(t),headers:Object.assign(Object.assign({"content-type":"application/json",accept:"application/json, multipart/mixed"},e.headers),r==null?void 0:r.headers)}).then(l=>Xie(l,{multiple:!0})));if(!soe(s))return yield mt(yield yield mt(s.json()));try{for(var a=loe(s),c;c=yield mt(a.next()),!c.done;){const l=c.value;if(l.some(u=>!u.json)){const u=l.map(f=>`Headers::
${f.headers}

Body::
${f.body}`);throw new Error(`Expected multipart chunks to be of json type. got:
${u}`)}yield yield mt(l.map(u=>u.body))}}catch(l){i={error:l}}finally{try{c&&!c.done&&(o=a.return)&&(yield mt(o.call(a)))}finally{if(i)throw i.error}}})},moe=e=>{if(e.wsClient)return b0(e.wsClient);if(e.subscriptionUrl)return doe(e.subscriptionUrl,e.wsConnectionParams);const n=e.legacyClient||e.legacyWsClient;if(n)return poe(n)};function goe(e){let n;if(typeof window!="undefined"&&window.fetch&&(n=window.fetch),((e==null?void 0:e.enableIncrementalDelivery)===null||e.enableIncrementalDelivery!==!1)&&(e.enableIncrementalDelivery=!0),e.fetch&&(n=e.fetch),!n)throw Error("No valid fetcher implementation available");const t=foe(e,n),r=moe(e),i=e.enableIncrementalDelivery?hoe(e,n):t;return(o,s)=>{if(o.operationName==="IntrospectionQuery")return(e.schemaFetcher||t)(o,s);if(uoe(s==null?void 0:s.documentAST,o.operationName)){if(!r)throw Error(`Your GraphiQL createFetcher is not properly configured for websocket subscriptions yet. ${e.subscriptionUrl?`Provided URL ${e.subscriptionUrl} failed`:"Please provide subscriptionUrl, wsClient or legacyClient option first."}`);return r(o)}return i(o,s)}}const sc=nb(Yie),voe=goe({url:"https://api.spacex.land/graphql/"}),yoe=`query Something {
  __typename
}
`;function _oe(){const[e,n]=Ln.exports.useState(yoe);return Kt("div",{className:"App",children:[sc?ge(Ln.exports.StrictMode,{children:ge(Wie,{schema:sc,query:e,onEdit:n})}):null,ge(cie,{query:e,schema:sc,fetcher:voe,onEditQuery:t=>n(t!=null?t:"")})]})}ac.createRoot(document.getElementById("root")).render(ge(_oe,{}));export{kb as $,tse as A,nse as B,rh as C,Z as D,ise as E,ose as F,wr as G,Nb as H,ih as I,gs as J,y as K,mu as L,xb as M,db as N,fb as O,pb as P,ee as Q,Zoe as R,iu as S,ou as T,ue as U,zl as V,Oe as W,Oh as X,sse as Y,Koe as Z,$y as _,su as a,uy as a$,Ms as a0,ese as a1,Io as a2,kr as a3,bb as a4,wb as a5,Qf as a6,F0 as a7,O as a8,F as a9,US as aA,Toe as aB,Boe as aC,VS as aD,wS as aE,Wv as aF,oS as aG,D as aH,sS as aI,iS as aJ,Yn as aK,Lo as aL,ay as aM,qf as aN,Kv as aO,Sr as aP,ny as aQ,ey as aR,Ct as aS,Wa as aT,$S as aU,ly as aV,Le as aW,cy as aX,jl as aY,$l as aZ,Dr as a_,ce as aa,BS as ab,ot as ac,Yoe as ad,Rw as ae,nn as af,qp as ag,Fw as ah,ir as ai,at as aj,ve as ak,on as al,py as am,Joe as an,Ps as ao,Py as ap,Af as aq,Zw as ar,fr as as,bf as at,Ja as au,Zt as av,bn as aw,bo as ax,Gr as ay,we as az,Rn as b,vy as b$,fy as b0,Tf as b1,dy as b2,me as b3,qo as b4,Ya as b5,xf as b6,Nf as b7,Dn as b8,Cf as b9,Uoe as bA,FS as bB,Vv as bC,eS as bD,Zc as bE,ZE as bF,$v as bG,bS as bH,xoe as bI,Noe as bJ,Jv as bK,Coe as bL,So as bM,$i as bN,Hoe as bO,Rf as bP,Goe as bQ,tw as bR,Lp as bS,Woe as bT,my as bU,jo as bV,gy as bW,Lf as bX,ha as bY,Ww as bZ,Ry as b_,Mo as ba,If as bb,Df as bc,zS as bd,kf as be,fi as bf,gr as bg,Ga as bh,Xv as bi,hy as bj,zoe as bk,Ioe as bl,Doe as bm,RS as bn,LS as bo,Aoe as bp,Ooe as bq,Foe as br,Roe as bs,Loe as bt,Poe as bu,Moe as bv,qoe as bw,joe as bx,Voe as by,PS as bz,woe as c,rw as c0,sw as c1,aw as c2,Pf as c3,_y as c4,Mf as c5,fw as c6,dw as c7,pw as c8,Sy as c9,koe as cA,Kw as cB,eb as cC,nb as cD,Xoe as cE,mn as cF,Et as cG,tu as cH,Xa as cI,Ff as cJ,Dw as cK,ru as cL,ni as cM,Qoe as cN,hw as ca,gw as cb,ww as cc,Nw as cd,Iw as ce,Pw as cf,Vf as cg,Uf as ch,jw as ci,zf as cj,$w as ck,Vw as cl,Uw as cm,zw as cn,Bw as co,Ey as cp,Oy as cq,Fy as cr,Dy as cs,Ay as ct,Mw as cu,Iy as cv,Ty as cw,Xw as cx,Be as cy,boe as cz,Ne as d,Gt as e,$oe as f,tn as g,Dp as h,Nt as i,yn as j,cb as k,ua as l,Zv as m,Qe as n,Sn as o,wo as p,st as q,je as r,se as s,mb as t,hn as u,Mn as v,Dt as w,Ve as x,te as y,rse as z};
