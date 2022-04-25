import{a as N}from"./codemirror.da9bdd86.js";function q(k,j){return j.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(u){if(u!=="default"&&!(u in k)){var f=Object.getOwnPropertyDescriptor(n,u);Object.defineProperty(k,u,f.get?f:{enumerable:!0,get:function(){return n[u]}})}})}),Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var F={exports:{}};(function(k,j){(function(n){n(N.exports)})(function(n){var u={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},f=n.Pos;n.defineOption("autoCloseBrackets",!1,function(e,t,a){a&&a!=n.Init&&(e.removeKeyMap(y),e.state.closeBrackets=null),t&&(E(b(t,"pairs")),e.state.closeBrackets=t,e.addKeyMap(y))});function b(e,t){return t=="pairs"&&typeof e=="string"?e:typeof e=="object"&&e[t]!=null?e[t]:u[t]}var y={Backspace:L,Enter:W};function E(e){for(var t=0;t<e.length;t++){var a=e.charAt(t),i="'"+a+"'";y[i]||(y[i]=K(a))}}E(u.pairs+"`");function K(e){return function(t){return z(t,e)}}function A(e){var t=e.state.closeBrackets;if(!t||t.override)return t;var a=e.getModeAt(e.getCursor());return a.closeBrackets||t}function L(e){var t=A(e);if(!t||e.getOption("disableInput"))return n.Pass;for(var a=b(t,"pairs"),i=e.listSelections(),r=0;r<i.length;r++){if(!i[r].empty())return n.Pass;var o=_(e,i[r].head);if(!o||a.indexOf(o)%2!=0)return n.Pass}for(var r=i.length-1;r>=0;r--){var l=i[r].head;e.replaceRange("",f(l.line,l.ch-1),f(l.line,l.ch+1),"+delete")}}function W(e){var t=A(e),a=t&&b(t,"explode");if(!a||e.getOption("disableInput"))return n.Pass;for(var i=e.listSelections(),r=0;r<i.length;r++){if(!i[r].empty())return n.Pass;var o=_(e,i[r].head);if(!o||a.indexOf(o)%2!=0)return n.Pass}e.operation(function(){var l=e.lineSeparator()||`
`;e.replaceSelection(l+l,null),S(e,-1),i=e.listSelections();for(var h=0;h<i.length;h++){var P=i[h].head.line;e.indentLine(P,null,!0),e.indentLine(P+1,null,!0)}})}function S(e,t){for(var a=[],i=e.listSelections(),r=0,o=0;o<i.length;o++){var l=i[o];l.head==e.getCursor()&&(r=o);var h=l.head.ch||t>0?{line:l.head.line,ch:l.head.ch+t}:{line:l.head.line-1};a.push({anchor:h,head:h})}e.setSelections(a,r)}function $(e){var t=n.cmpPos(e.anchor,e.head)>0;return{anchor:new f(e.anchor.line,e.anchor.ch+(t?-1:1)),head:new f(e.head.line,e.head.ch+(t?1:-1))}}function z(e,t){var a=A(e);if(!a||e.getOption("disableInput"))return n.Pass;var i=b(a,"pairs"),r=i.indexOf(t);if(r==-1)return n.Pass;for(var o=b(a,"closeBefore"),l=b(a,"triples"),h=i.charAt(r+1)==t,P=e.listSelections(),x=r%2==0,d,B=0;B<P.length;B++){var w=P[B],s=w.head,v,O=e.getRange(s,f(s.line,s.ch+1));if(x&&!w.empty())v="surround";else if((h||!x)&&O==t)h&&D(e,s)?v="both":l.indexOf(t)>=0&&e.getRange(s,f(s.line,s.ch+3))==t+t+t?v="skipThree":v="skip";else if(h&&s.ch>1&&l.indexOf(t)>=0&&e.getRange(f(s.line,s.ch-2),s)==t+t){if(s.ch>2&&/\bstring/.test(e.getTokenTypeAt(f(s.line,s.ch-2))))return n.Pass;v="addFour"}else if(h){var I=s.ch==0?" ":e.getRange(f(s.line,s.ch-1),s);if(!n.isWordChar(O)&&I!=t&&!n.isWordChar(I))v="both";else return n.Pass}else if(x&&(O.length===0||/\s/.test(O)||o.indexOf(O)>-1))v="both";else return n.Pass;if(!d)d=v;else if(d!=v)return n.Pass}var c=r%2?i.charAt(r-1):t,R=r%2?t:i.charAt(r+1);e.operation(function(){if(d=="skip")S(e,1);else if(d=="skipThree")S(e,3);else if(d=="surround"){for(var g=e.getSelections(),p=0;p<g.length;p++)g[p]=c+g[p]+R;e.replaceSelections(g,"around"),g=e.listSelections().slice();for(var p=0;p<g.length;p++)g[p]=$(g[p]);e.setSelections(g)}else d=="both"?(e.replaceSelection(c+R,null),e.triggerElectric(c+R),S(e,-1)):d=="addFour"&&(e.replaceSelection(c+c+c+c,"before"),S(e,1))})}function _(e,t){var a=e.getRange(f(t.line,t.ch-1),f(t.line,t.ch+1));return a.length==2?a:null}function D(e,t){var a=e.getTokenAt(f(t.line,t.ch+1));return/\bstring/.test(a.type)&&a.start==t.ch&&(t.ch==0||!/\bstring/.test(e.getTokenTypeAt(t)))}})})();var G=F.exports,J=q({__proto__:null,default:G},[F.exports]);export{J as c};
