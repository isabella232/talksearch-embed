!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.talksearch=n():t.talksearch=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=4)}([function(t,n,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;n.a=r}).call(this,r(2))},function(t,n,r){"use strict";r.r(n);var e=Array.isArray,o=r(0),i="object"==typeof self&&self&&self.Object===Object&&self,a=o.a||i||Function("return this")(),u=a.Symbol,c=Object.prototype,s=c.hasOwnProperty,l=c.toString,f=u?u.toStringTag:void 0;var v=function(t){var n=s.call(t,f),r=t[f];try{t[f]=void 0;var e=!0}catch(t){}var o=l.call(t);return e&&(n?t[f]=r:delete t[f]),o},p=Object.prototype.toString;var h=function(t){return p.call(t)},d="[object Null]",y="[object Undefined]",_=u?u.toStringTag:void 0;var b=function(t){return null==t?void 0===t?y:d:_&&_ in Object(t)?v(t):h(t)};var g=function(t){return null!=t&&"object"==typeof t},j="[object Symbol]";var m=function(t){return"symbol"==typeof t||g(t)&&b(t)==j},O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;var w=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!m(t))||$.test(t)||!O.test(t)||null!=n&&t in Object(n)};var x=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},S="[object AsyncFunction]",z="[object Function]",P="[object GeneratorFunction]",k="[object Proxy]";var F,T=function(t){if(!x(t))return!1;var n=b(t);return n==z||n==P||n==S||n==k},A=a["__core-js_shared__"],M=(F=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"";var C=function(t){return!!M&&M in t},E=Function.prototype.toString;var R=function(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""},B=/^\[object .+?Constructor\]$/,N=Function.prototype,G=Object.prototype,I=N.toString,L=G.hasOwnProperty,U=RegExp("^"+I.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!x(t)||C(t))&&(T(t)?U:B).test(R(t))};var q=function(t,n){return null==t?void 0:t[n]};var D=function(t,n){var r=q(t,n);return Y(r)?r:void 0},H=D(Object,"create");var J=function(){this.__data__=H?H(null):{},this.size=0};var K=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Q="__lodash_hash_undefined__",V=Object.prototype.hasOwnProperty;var W=function(t){var n=this.__data__;if(H){var r=n[t];return r===Q?void 0:r}return V.call(n,t)?n[t]:void 0},X=Object.prototype.hasOwnProperty;var Z=function(t){var n=this.__data__;return H?void 0!==n[t]:X.call(n,t)},tt="__lodash_hash_undefined__";var nt=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=H&&void 0===n?tt:n,this};function rt(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}rt.prototype.clear=J,rt.prototype.delete=K,rt.prototype.get=W,rt.prototype.has=Z,rt.prototype.set=nt;var et=rt;var ot=function(){this.__data__=[],this.size=0};var it=function(t,n){return t===n||t!=t&&n!=n};var at=function(t,n){for(var r=t.length;r--;)if(it(t[r][0],n))return r;return-1},ut=Array.prototype.splice;var ct=function(t){var n=this.__data__,r=at(n,t);return!(r<0||(r==n.length-1?n.pop():ut.call(n,r,1),--this.size,0))};var st=function(t){var n=this.__data__,r=at(n,t);return r<0?void 0:n[r][1]};var lt=function(t){return at(this.__data__,t)>-1};var ft=function(t,n){var r=this.__data__,e=at(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this};function vt(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}vt.prototype.clear=ot,vt.prototype.delete=ct,vt.prototype.get=st,vt.prototype.has=lt,vt.prototype.set=ft;var pt=vt,ht=D(a,"Map");var dt=function(){this.size=0,this.__data__={hash:new et,map:new(ht||pt),string:new et}};var yt=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var _t=function(t,n){var r=t.__data__;return yt(n)?r["string"==typeof n?"string":"hash"]:r.map};var bt=function(t){var n=_t(this,t).delete(t);return this.size-=n?1:0,n};var gt=function(t){return _t(this,t).get(t)};var jt=function(t){return _t(this,t).has(t)};var mt=function(t,n){var r=_t(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this};function Ot(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}Ot.prototype.clear=dt,Ot.prototype.delete=bt,Ot.prototype.get=gt,Ot.prototype.has=jt,Ot.prototype.set=mt;var $t=Ot,wt="Expected a function";function xt(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(wt);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return r.cache=i.set(o,a)||i,a};return r.cache=new(xt.Cache||$t),r}xt.Cache=$t;var St=xt,zt=500;var Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kt=/\\(\\)?/g,Ft=function(t){var n=St(t,function(t){return r.size===zt&&r.clear(),t}),r=n.cache;return n}(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Pt,function(t,r,e,o){n.push(e?o.replace(kt,"$1"):r||t)}),n});var Tt=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o},At=1/0,Mt=u?u.prototype:void 0,Ct=Mt?Mt.toString:void 0;var Et=function t(n){if("string"==typeof n)return n;if(e(n))return Tt(n,t)+"";if(m(n))return Ct?Ct.call(n):"";var r=n+"";return"0"==r&&1/n==-At?"-0":r};var Rt=function(t){return null==t?"":Et(t)};var Bt=function(t,n){return e(t)?t:w(t,n)?[t]:Ft(Rt(t))},Nt=1/0;var Gt=function(t){if("string"==typeof t||m(t))return t;var n=t+"";return"0"==n&&1/t==-Nt?"-0":n};var It=function(t,n){for(var r=0,e=(n=Bt(n,t)).length;null!=t&&r<e;)t=t[Gt(n[r++])];return r&&r==e?t:void 0};var Lt=function(t,n,r){var e=null==t?void 0:It(t,n);return void 0===e?r:e};function Ut(t,n){return Lt(t,`_highlightResult.${n}.value`)}const Yt={templates:{hits:{item:function(t){const n=t.video,r=Ut(t,"video.title"),e=n.thumbnails.high.url,o=Ut(t,"author.name"),i=t.conference.year,a=(u=n.popularity.views)<1e3?u:`${Math.ceil(u/1e3)}k`;var u;const c=Lt(t,"_snippetResult.caption.content");let s;"none"!==Lt(c,"matchLevel")&&(s=Lt(c,"value"));const l=Lt(t,"caption.url"),f=`\n    <div class="ats-hit--views">\n      ${a} views\n    </div>`;let v="";s&&(v=`\n      <div class="ats-hit--captionBackdrop">\n        <div \n          class="ats-hit--captionBlur" \n          style="background-image:url(${e})"\n        ></div>\n      </div>\n      <div class="ats-hit--caption">\n        <div>${s}</div>\n      </div>\n      `);const p=`<span class="ats-hit--conferenceYear">${i}</span>`;return`\n    <div class="ats-hit--root">\n      <a \n        class="ats-hit--thumbnail" \n        style="background-image:url(${e})"\n        href="${l}"\n        target="_blank"\n      >\n        ${f}\n        ${v}\n      </a>\n      <div class="ats-hit--details">\n        <div class="ats-hit--videoTitle">${r}</div>\n        <div class="ats-hit--videoSubtitle">${o?`${`<span class="ats-hit--authorName">${o}</span>`} in ${p}`:p}</div>\n      </div>\n    </div>\n  `}}}};n.default=Yt},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){const e=r(1);t.exports=e.default},function(t,n,r){t.exports=r(3)}])});