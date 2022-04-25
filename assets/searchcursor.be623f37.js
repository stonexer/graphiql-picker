import{a as A}from"./codemirror.da9bdd86.js";function B(P,E){return E.forEach(function(u){u&&typeof u!="string"&&!Array.isArray(u)&&Object.keys(u).forEach(function(a){if(a!=="default"&&!(a in P)){var b=Object.getOwnPropertyDescriptor(u,a);Object.defineProperty(P,a,b.get?b:{enumerable:!0,get:function(){return u[a]}})}})}),Object.freeze(Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(P,E){(function(u){u(A.exports)})(function(u){var a=u.Pos;function b(e){var t=e.flags;return t!=null?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function x(e,t){for(var n=b(e),r=n,l=0;l<t.length;l++)r.indexOf(t.charAt(l))==-1&&(r+=t.charAt(l));return n==r?e:new RegExp(e.source,r)}function S(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function j(e,t,n){t=x(t,"g");for(var r=n.line,l=n.ch,i=e.lastLine();r<=i;r++,l=0){t.lastIndex=l;var f=e.getLine(r),h=t.exec(f);if(h)return{from:a(r,h.index),to:a(r,h.index+h[0].length),match:h}}}function D(e,t,n){if(!S(t))return j(e,t,n);t=x(t,"gm");for(var r,l=1,i=n.line,f=e.lastLine();i<=f;){for(var h=0;h<l&&!(i>f);h++){var p=e.getLine(i++);r=r==null?p:r+`
`+p}l=l*2,t.lastIndex=n.ch;var c=t.exec(r);if(c){var s=r.slice(0,c.index).split(`
`),o=c[0].split(`
`),g=n.line+s.length-1,v=s[s.length-1].length;return{from:a(g,v),to:a(g+o.length-1,o.length==1?v+o[0].length:o[o.length-1].length),match:c}}}}function k(e,t,n){for(var r,l=0;l<=e.length;){t.lastIndex=l;var i=t.exec(e);if(!i)break;var f=i.index+i[0].length;if(f>e.length-n)break;(!r||f>r.index+r[0].length)&&(r=i),l=i.index+1}return r}function R(e,t,n){t=x(t,"g");for(var r=n.line,l=n.ch,i=e.firstLine();r>=i;r--,l=-1){var f=e.getLine(r),h=k(f,t,l<0?0:f.length-l);if(h)return{from:a(r,h.index),to:a(r,h.index+h[0].length),match:h}}}function I(e,t,n){if(!S(t))return R(e,t,n);t=x(t,"gm");for(var r,l=1,i=e.getLine(n.line).length-n.ch,f=n.line,h=e.firstLine();f>=h;){for(var p=0;p<l&&f>=h;p++){var c=e.getLine(f--);r=r==null?c:c+`
`+r}l*=2;var s=k(r,t,i);if(s){var o=r.slice(0,s.index).split(`
`),g=s[0].split(`
`),v=f+o.length,O=o[o.length-1].length;return{from:a(v,O),to:a(v+g.length-1,g.length==1?O+g[0].length:g[g.length-1].length),match:s}}}}var d,w;String.prototype.normalize?(d=function(e){return e.normalize("NFD").toLowerCase()},w=function(e){return e.normalize("NFD")}):(d=function(e){return e.toLowerCase()},w=function(e){return e});function m(e,t,n,r){if(e.length==t.length)return n;for(var l=0,i=n+Math.max(0,e.length-t.length);;){if(l==i)return l;var f=l+i>>1,h=r(e.slice(0,f)).length;if(h==n)return f;h>n?i=f:l=f+1}}function N(e,t,n,r){if(!t.length)return null;var l=r?d:w,i=l(t).split(/\r|\n\r?/);t:for(var f=n.line,h=n.ch,p=e.lastLine()+1-i.length;f<=p;f++,h=0){var c=e.getLine(f).slice(h),s=l(c);if(i.length==1){var o=s.indexOf(i[0]);if(o==-1)continue t;var n=m(c,s,o,l)+h;return{from:a(f,m(c,s,o,l)+h),to:a(f,m(c,s,o+i[0].length,l)+h)}}else{var g=s.length-i[0].length;if(s.slice(g)!=i[0])continue t;for(var v=1;v<i.length-1;v++)if(l(e.getLine(f+v))!=i[v])continue t;var O=e.getLine(f+i.length-1),L=l(O),y=i[i.length-1];if(L.slice(0,y.length)!=y)continue t;return{from:a(f,m(c,s,g,l)+h),to:a(f+i.length-1,m(O,L,y.length,l))}}}}function _(e,t,n,r){if(!t.length)return null;var l=r?d:w,i=l(t).split(/\r|\n\r?/);t:for(var f=n.line,h=n.ch,p=e.firstLine()-1+i.length;f>=p;f--,h=-1){var c=e.getLine(f);h>-1&&(c=c.slice(0,h));var s=l(c);if(i.length==1){var o=s.lastIndexOf(i[0]);if(o==-1)continue t;return{from:a(f,m(c,s,o,l)),to:a(f,m(c,s,o+i[0].length,l))}}else{var g=i[i.length-1];if(s.slice(0,g.length)!=g)continue t;for(var v=1,n=f-i.length+1;v<i.length-1;v++)if(l(e.getLine(n+v))!=i[v])continue t;var O=e.getLine(f+1-i.length),L=l(O);if(L.slice(L.length-i[0].length)!=i[0])continue t;return{from:a(f+1-i.length,m(O,L,O.length-i[0].length,l)),to:a(f,m(c,s,g.length,l))}}}}function F(e,t,n,r){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):a(0,0),this.pos={from:n,to:n};var l;typeof r=="object"?l=r.caseFold:(l=r,r=null),typeof t=="string"?(l==null&&(l=!1),this.matches=function(i,f){return(i?_:N)(e,t,f,l)}):(t=x(t,"gm"),!r||r.multiline!==!1?this.matches=function(i,f){return(i?I:D)(e,t,f)}:this.matches=function(i,f){return(i?R:j)(e,t,f)})}F.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){var t=this.doc.clipPos(e?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(t=a(t.line,t.ch),e?(t.ch--,t.ch<0&&(t.line--,t.ch=(this.doc.getLine(t.line)||"").length)):(t.ch++,t.ch>(this.doc.getLine(t.line)||"").length&&(t.ch=0,t.line++)),u.cmpPos(t,this.doc.clipPos(t))!=0))return this.atOccurrence=!1;var n=this.matches(e,t);if(this.afterEmptyMatch=n&&u.cmpPos(n.from,n.to)==0,n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var r=a(e?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(e,t){if(!!this.atOccurrence){var n=u.splitLines(e);this.doc.replaceRange(n,this.pos.from,this.pos.to,t),this.pos.to=a(this.pos.from.line+n.length-1,n[n.length-1].length+(n.length==1?this.pos.from.ch:0))}}},u.defineExtension("getSearchCursor",function(e,t,n){return new F(this.doc,e,t,n)}),u.defineDocExtension("getSearchCursor",function(e,t,n){return new F(this,e,t,n)}),u.defineExtension("selectMatches",function(e,t){for(var n=[],r=this.getSearchCursor(e,this.getCursor("from"),t);r.findNext()&&!(u.cmpPos(r.to(),this.getCursor("to"))>0);)n.push({anchor:r.from(),head:r.to()});n.length&&this.setSelections(n,0)})})})();var $=z.exports,W=B({__proto__:null,default:$},[z.exports]);export{z as a,W as s};
