import{c as s}from"./index.f4e3cced.js";import{a as p}from"./codemirror.da9bdd86.js";import{g,S as c}from"./SchemaReference.107ede51.js";function M(e,n){return n.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in e)){var u=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,u.get?u:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var l={},y={},_=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(y,"__esModule",{value:!0});var a=_(p.exports);a.default.defineOption("jump",!1,function(e,n,t){if(t&&t!==a.default.Init){var r=e.state.jump.onMouseOver;a.default.off(e.getWrapperElement(),"mouseover",r);var u=e.state.jump.onMouseOut;a.default.off(e.getWrapperElement(),"mouseout",u),a.default.off(document,"keydown",e.state.jump.onKeyDown),delete e.state.jump}if(n){var o=e.state.jump={options:n,onMouseOver:k.bind(null,e),onMouseOut:D.bind(null,e),onKeyDown:O.bind(null,e)};a.default.on(e.getWrapperElement(),"mouseover",o.onMouseOver),a.default.on(e.getWrapperElement(),"mouseout",o.onMouseOut),a.default.on(document,"keydown",o.onKeyDown)}});function k(e,n){var t=n.target||n.srcElement;if(t instanceof HTMLElement&&(t==null?void 0:t.nodeName)==="SPAN"){var r=t.getBoundingClientRect(),u={left:(r.left+r.right)/2,top:(r.top+r.bottom)/2};e.state.jump.cursor=u,e.state.jump.isHoldingModifier&&d(e)}}function D(e){if(!e.state.jump.isHoldingModifier&&e.state.jump.cursor){e.state.jump.cursor=null;return}e.state.jump.isHoldingModifier&&e.state.jump.marker&&m(e)}function O(e,n){if(!(e.state.jump.isHoldingModifier||!h(n.key))){e.state.jump.isHoldingModifier=!0,e.state.jump.cursor&&d(e);var t=function(o){o.code===n.code&&(e.state.jump.isHoldingModifier=!1,e.state.jump.marker&&m(e),a.default.off(document,"keyup",t),a.default.off(document,"click",r),e.off("mousedown",u))},r=function(o){var i=e.state.jump.destination;i&&e.state.jump.options.onClick(i,o)},u=function(o,i){e.state.jump.destination&&(i.codemirrorIgnore=!0)};a.default.on(document,"keyup",t),a.default.on(document,"click",r),e.on("mousedown",u)}}var b=typeof navigator!="undefined"&&navigator&&navigator.appVersion.indexOf("Mac")!==-1;function h(e){return e===(b?"Meta":"Control")}function d(e){if(!e.state.jump.marker){var n=e.state.jump.cursor,t=e.coordsChar(n),r=e.getTokenAt(t,!0),u=e.state.jump.options,o=u.getDestination||e.getHelper(t,"jump");if(o){var i=o(r,u,e);if(i){var j=e.markText({line:t.line,ch:r.start},{line:t.line,ch:r.end},{className:"CodeMirror-jump-token"});e.state.jump.marker=j,e.state.jump.destination=i}}}}function m(e){var n=e.state.jump.marker;e.state.jump.marker=null,e.state.jump.destination=null,n.clear()}var v=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(l,"__esModule",{value:!0});var w=v(p.exports),E=v(g),f=c;w.default.registerHelper("jump","graphql",function(e,n){if(!(!n.schema||!n.onClick||!e.state)){var t=e.state,r=t.kind,u=t.step,o=E.default(n.schema,t);if(r==="Field"&&u===0&&o.fieldDef||r==="AliasedField"&&u===2&&o.fieldDef)return f.getFieldReference(o);if(r==="Directive"&&u===1&&o.directiveDef)return f.getDirectiveReference(o);if(r==="Argument"&&u===0&&o.argDef)return f.getArgumentReference(o);if(r==="EnumValue"&&o.enumValue)return f.getEnumValueReference(o);if(r==="NamedType"&&o.type)return f.getTypeReference(o)}});var T=M({__proto__:null,default:l},[l]);export{T as j};
