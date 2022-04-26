import{a as V}from"./codemirror.066a56f1.js";import{a as K}from"./searchcursor.b36d7b1b.js";import{a as L}from"./dialog.7cf39ab5.js";function z(b,R){return R.forEach(function(a){a&&typeof a!="string"&&!Array.isArray(a)&&Object.keys(a).forEach(function(h){if(h!=="default"&&!(h in b)){var O=Object.getOwnPropertyDescriptor(a,h);Object.defineProperty(b,h,O.get?O:{enumerable:!0,get:function(){return a[h]}})}})}),Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var Q={exports:{}};(function(b,R){(function(a){a(V.exports,K.exports,L.exports)})(function(a){a.defineOption("search",{bottom:!1});function h(e,n){return typeof e=="string"?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),n?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos;var r=e.exec(t.string);if(r&&r.index==t.pos)return t.pos+=r[0].length||1,"searching";r?t.pos=r.index:t.skipToEnd()}}}function O(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function v(e){return e.state.search||(e.state.search=new O)}function m(e){return typeof e=="string"&&e==e.toLowerCase()}function x(e,n,t){return e.getSearchCursor(n,t,{caseFold:m(n),multiline:!0})}function F(e,n,t,r,o){e.openDialog(n,r,{value:t,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){S(e)},onKeyDown:o,bottom:e.options.search.bottom})}function P(e,n,t,r,o){e.openDialog?e.openDialog(n,o,{value:r,selectValueOnOpen:!0,bottom:e.options.search.bottom}):o(prompt(t,r))}function $(e,n,t,r){e.openConfirm?e.openConfirm(n,r):confirm(t)&&r[0]()}function D(e){return e.replace(/\\([nrt\\])/g,function(n,t){return t=="n"?`
`:t=="r"?"\r":t=="t"?"	":t=="\\"?"\\":n})}function T(e){var n=e.match(/^\/(.*)\/([a-z]*)$/);if(n)try{e=new RegExp(n[1],n[2].indexOf("i")==-1?"":"i")}catch{}else e=D(e);return(typeof e=="string"?e=="":e.test(""))&&(e=/x^/),e}function N(e,n,t){n.queryText=t,n.query=T(t),e.removeOverlay(n.overlay,m(n.query)),n.overlay=h(n.query,m(n.query)),e.addOverlay(n.overlay),e.showMatchesOnScrollbar&&(n.annotate&&(n.annotate.clear(),n.annotate=null),n.annotate=e.showMatchesOnScrollbar(n.query,m(n.query)))}function y(e,n,t,r){var o=v(e);if(o.query)return w(e,n);var i=e.getSelection()||o.lastQuery;if(i instanceof RegExp&&i.source=="x^"&&(i=null),t&&e.openDialog){var u=null,f=function(l,d){a.e_stop(d),l&&(l!=o.queryText&&(N(e,o,l),o.posFrom=o.posTo=e.getCursor()),u&&(u.style.opacity=1),w(e,d.shiftKey,function(g,c){var p;c.line<3&&document.querySelector&&(p=e.display.wrapper.querySelector(".CodeMirror-dialog"))&&p.getBoundingClientRect().bottom-4>e.cursorCoords(c,"window").top&&((u=p).style.opacity=.4)}))};F(e,_(e),i,f,function(l,d){var g=a.keyName(l),c=e.getOption("extraKeys"),p=c&&c[g]||a.keyMap[e.getOption("keyMap")][g];p=="findNext"||p=="findPrev"||p=="findPersistentNext"||p=="findPersistentPrev"?(a.e_stop(l),N(e,v(e),d),e.execCommand(p)):(p=="find"||p=="findPersistent")&&(a.e_stop(l),f(d,l))}),r&&i&&(N(e,o,i),w(e,n))}else P(e,_(e),"Search for:",i,function(l){l&&!o.query&&e.operation(function(){N(e,o,l),o.posFrom=o.posTo=e.getCursor(),w(e,n)})})}function w(e,n,t){e.operation(function(){var r=v(e),o=x(e,r.query,n?r.posFrom:r.posTo);!o.find(n)&&(o=x(e,r.query,n?a.Pos(e.lastLine()):a.Pos(e.firstLine(),0)),!o.find(n))||(e.setSelection(o.from(),o.to()),e.scrollIntoView({from:o.from(),to:o.to()},20),r.posFrom=o.from(),r.posTo=o.to(),t&&t(o.from(),o.to()))})}function S(e){e.operation(function(){var n=v(e);n.lastQuery=n.query,n.query&&(n.query=n.queryText=null,e.removeOverlay(n.overlay),n.annotate&&(n.annotate.clear(),n.annotate=null))})}function s(e,n){var t=e?document.createElement(e):document.createDocumentFragment();for(var r in n)t[r]=n[r];for(var o=2;o<arguments.length;o++){var i=arguments[o];t.appendChild(typeof i=="string"?document.createTextNode(i):i)}return t}function _(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",s("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function j(e){return s("",null," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",s("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function A(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}function I(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",s("button",{},e.phrase("Yes"))," ",s("button",{},e.phrase("No"))," ",s("button",{},e.phrase("All"))," ",s("button",{},e.phrase("Stop")))}function C(e,n,t){e.operation(function(){for(var r=x(e,n);r.findNext();)if(typeof n!="string"){var o=e.getRange(r.from(),r.to()).match(n);r.replace(t.replace(/\$(\d)/g,function(i,u){return o[u]}))}else r.replace(t)})}function E(e,n){if(!e.getOption("readOnly")){var t=e.getSelection()||v(e).lastQuery,r=n?e.phrase("Replace all:"):e.phrase("Replace:"),o=s("",null,s("span",{className:"CodeMirror-search-label"},r),j(e));P(e,o,r,t,function(i){!i||(i=T(i),P(e,A(e),e.phrase("Replace with:"),"",function(u){if(u=D(u),n)C(e,i,u);else{S(e);var f=x(e,i,e.getCursor("from")),l=function(){var g=f.from(),c;!(c=f.findNext())&&(f=x(e,i),!(c=f.findNext())||g&&f.from().line==g.line&&f.from().ch==g.ch)||(e.setSelection(f.from(),f.to()),e.scrollIntoView({from:f.from(),to:f.to()}),$(e,I(e),e.phrase("Replace?"),[function(){d(c)},l,function(){C(e,i,u)}]))},d=function(g){f.replace(typeof i=="string"?u:u.replace(/\$(\d)/g,function(c,p){return g[p]})),l()};l()}}))})}}a.commands.find=function(e){S(e),y(e)},a.commands.findPersistent=function(e){S(e),y(e,!1,!0)},a.commands.findPersistentNext=function(e){y(e,!1,!0,!0)},a.commands.findPersistentPrev=function(e){y(e,!0,!0,!0)},a.commands.findNext=y,a.commands.findPrev=function(e){y(e,!0)},a.commands.clearSearch=S,a.commands.replace=E,a.commands.replaceAll=function(e){E(e,!0)}})})();var U=Q.exports,Y=z({__proto__:null,default:U},[Q.exports]);export{Y as s};