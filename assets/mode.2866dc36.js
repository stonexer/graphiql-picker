import{c as l}from"./index.e94d3c0d.js";import{a as s}from"./codemirror.066a56f1.js";import{r as _}from"./index.d8e6e101.js";function p(e,o){return o.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(t){if(t!=="default"&&!(t in e)){var a=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:function(){return r[t]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},u={},f={};Object.defineProperty(f,"__esModule",{value:!0});function v(e,o){var r,t,a=e.levels,d=!a||a.length===0?e.indentLevel:a[a.length-1]-(!((r=this.electricInput)===null||r===void 0)&&r.test(o)?1:0);return(d||0)*(((t=this.config)===null||t===void 0?void 0:t.indentUnit)||0)}f.default=v;var m=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(u,"__esModule",{value:!0});var n=_,g=m(f),b=function(e){var o=n.onlineParser({eatWhitespace:function(r){return r.eatWhile(n.isIgnored)},lexRules:n.LexRules,parseRules:n.ParseRules,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:o.startState,token:o.token,indent:g.default,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}};u.default=b;var c=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0});var y=c(s.exports),h=c(u);y.default.defineMode("graphql",h.default);var P=p({__proto__:null,default:i},[i]);export{P as m};