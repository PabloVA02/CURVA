import{Tn as e}from"./GuiaPrueba-BiLp3pfI.js";var t=e({default:()=>n}),n=`<title>La Nítida</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>/*!
 * GSAP 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\\.?\\d|\\.)+/gi,et=/[-+=.]*\\d+[.e\\-+]*\\d*[e\\-+]*\\d*/g,rt=/[-+=.]*\\d+[.e-]*\\d*[a-z%]*/g,it=/[-+=.]*\\d+\\.?\\d*(?:e-|e\\+)?\\d*/gi,nt=/[+-]=-?[.\\d]+/,at=/[^,'"\\[\\]\\s]+/gi,st=/^[+\\-=e\\s\\d]*\\d+[.\\d]*([a-z]*|%)\\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\\\b(?:(?:rgb|rgba|hsl|hsla)\\\\(.+?\\\\))|\\\\B#(?:[0-9a-f]{3,4}){1,2}\\\\b";for(t in zt)e+="|"+t+"\\\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),At.forEach(wb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\\d.\\-M][\\d.\\-,\\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if((M<a||a<0)&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.5",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\\s,\\(]\\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

<\/script>
<style>
  /* --- La página --------------------------------------------------------- */
  :root {
    --papel: #eef0f3;
    --tinta: #0e1116;
    --tinta-2: #525a66;
    --filo: #d7dbe1;
    --panel: #f8f9fb;
    --acento: #1450f5;
    --acento-suave: #1450f51f;
    --ui: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      color-scheme: dark;
      --papel: #0e1013;
      --tinta: #eceef2;
      --tinta-2: #9aa1ab;
      --filo: #262a31;
      --panel: #15181d;
      --acento: #6b95ff;
      --acento-suave: #6b95ff26;
    }
  }
  :root[data-theme="dark"] {
    color-scheme: dark;
    --papel: #0e1013;
    --tinta: #eceef2;
    --tinta-2: #9aa1ab;
    --filo: #262a31;
    --panel: #15181d;
    --acento: #6b95ff;
    --acento-suave: #6b95ff26;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--papel);
    color: var(--tinta);
    font: 15px/1.5 var(--ui);
    -webkit-font-smoothing: antialiased;
  }
  .envoltorio {
    max-width: 1040px;
    margin: 0 auto;
    padding: 32px 16px 64px;
    display: grid;
    grid-template-columns: minmax(0, 400px) minmax(0, 1fr);
    gap: 40px;
    align-items: start;
  }
  @media (max-width: 820px) {
    .envoltorio { grid-template-columns: minmax(0, 1fr); gap: 24px; }
    .columna-movil { max-width: 400px; margin: 0 auto; width: 100%; }
  }
  .cabecera h1 {
    margin: 0 0 8px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }
  .cabecera p { margin: 0; color: var(--tinta-2); max-width: 56ch; }
  .panel {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .bloque { display: flex; flex-direction: column; gap: 10px; }
  .etiqueta {
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--tinta-2);
  }
  .segmentado {
    display: inline-flex;
    padding: 3px;
    border-radius: 12px;
    background: var(--panel);
    border: 1px solid var(--filo);
    align-self: flex-start;
    max-width: 100%;
  }
  .segmentado button {
    border: 0;
    background: none;
    color: var(--tinta-2);
    font: 600 13.5px var(--ui);
    padding: 8px 14px;
    border-radius: 9px;
    cursor: pointer;
    white-space: nowrap;
  }
  .segmentado button[aria-pressed="true"] {
    background: var(--tinta);
    color: var(--papel);
  }
  .fichas { display: flex; flex-wrap: wrap; gap: 8px; }
  .ficha {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 12px 7px 8px;
    border-radius: 999px;
    border: 1px solid var(--filo);
    background: var(--panel);
    color: var(--tinta);
    font: 600 13.5px var(--ui);
    cursor: pointer;
  }
  .ficha b {
    display: inline-grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--filo);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
  }
  .ficha[data-activa="si"] { border-color: var(--acento); background: var(--acento-suave); }
  .ficha[data-activa="si"] b { background: var(--acento); color: #fff; }
  .mandos { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .boton-redondo {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 0;
    background: var(--tinta);
    color: var(--papel);
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: none;
  }
  .boton-redondo svg { width: 18px; height: 18px; }
  .lento {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font: 600 13.5px var(--ui);
    color: var(--tinta);
    cursor: pointer;
    user-select: none;
  }
  .lento input { width: 18px; height: 18px; accent-color: var(--acento); }
  .barrido { position: relative; flex: 1; min-width: 180px; height: 28px; display: flex; align-items: center; }
  .barrido input[type="range"] { width: 100%; accent-color: var(--acento); margin: 0; }
  button:focus-visible, input:focus-visible, .ficha:focus-visible {
    outline: 2px solid var(--acento);
    outline-offset: 2px;
  }
  .mejoras { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .mejoras li { display: grid; grid-template-columns: 22px 1fr; gap: 10px; color: var(--tinta); max-width: 60ch; }
  .mejoras li::before {
    content: "";
    width: 8px;
    height: 8px;
    margin: 8px 0 0 6px;
    border-radius: 50%;
    background: var(--acento);
  }
  .mejoras em { font-style: normal; color: var(--tinta-2); }
  .nota {
    margin: 0;
    padding: 14px 16px;
    border-radius: 14px;
    background: var(--panel);
    border: 1px solid var(--filo);
    color: var(--tinta-2);
    max-width: 60ch;
  }
  .nota strong { color: var(--tinta); }

  /* --- El móvil --------------------------------------------------------- */
  .movil {
    position: relative;
    width: 100%;
    padding: 11px;
    border-radius: 58px;
    background: #0a0a0b;
    box-shadow: 0 0 0 1.5px #2b2b2f, 0 40px 80px -30px #0000006b;
  }
  .escalador {
    position: relative;
    width: 100%;
    height: calc(844px * var(--k, 0.9));
    border-radius: 47px;
    overflow: hidden;
  }
  .pantalla {
    /* La pantalla se dibuja a su tamaño de verdad —un iPhone de 390 × 844— y
       se encoge entera; así cada medida de dentro es la que tendrá en la app. */
    position: absolute;
    left: 0;
    top: 0;
    width: 390px;
    height: 844px;
    transform: scale(var(--k, 0.9));
    transform-origin: 0 0;
    overflow: hidden;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
    background: var(--p-fondo);
    color: var(--p-tinta);
    transition: background 0.35s, color 0.35s;

    --p-fondo: #ffffff;
    --p-tinta: #0b0b0c;
    --p-tenue: #8a8f98;
    --p-azul: #1450f5;
    --p-azul-sel: #1450f524;
    --p-azul-tenue: #1450f526;
    --p-destello: #9dbbff;
    --p-boton: #0b0b0c;
    --p-boton-texto: #ffffff;
    --p-carril: #e7e8eb;
    --p-punta: #ffffff;
    --p-varita: #0b0b0c;
    --p-aura: #1450f517;
    --p-brillo-boton: rgba(255, 255, 255, 0.34);
  }
  .pantalla[data-tema="oscuro"] {
    /* Los colores de la intro de Curva: fondo #222, azul #0099FF. */
    --p-fondo: #222222;
    --p-tinta: #ffffff;
    --p-tenue: #8a8a8a;
    --p-azul: #2ea8ff;
    --p-azul-sel: #2ea8ff33;
    --p-azul-tenue: #2ea8ff2e;
    --p-destello: #d6efff;
    --p-boton: #0099ff;
    --p-boton-texto: #ffffff;
    --p-carril: #4d4d4d;
    --p-punta: #2ea8ff;
    --p-varita: #ffffff;
    --p-aura: #2ea8ff30;
    --p-brillo-boton: rgba(255, 255, 255, 0.45);
  }
  .isla {
    position: absolute;
    top: 11px;
    left: 50%;
    width: 124px;
    height: 36px;
    margin-left: -62px;
    border-radius: 20px;
    background: #000;
    z-index: 9;
  }
  .estado {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    padding: 0 30px 0 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: 600 16.5px/1 Inter, sans-serif;
    letter-spacing: -0.01em;
  }
  .estado .iconos { display: flex; gap: 6px; align-items: center; }
  .estado svg { display: block; }
  .progreso {
    position: absolute;
    top: 64px;
    left: 20px;
    right: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .progreso i { height: 4px; border-radius: 4px; background: var(--p-carril); overflow: hidden; }
  .progreso i span { display: block; height: 100%; background: var(--p-tinta); transform-origin: 0 50%; transform: scaleX(0.14); }
  .tramo {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid var(--p-carril);
    font: 600 11.5px/1.3 Inter, sans-serif;
    color: var(--p-tinta);
  }

  /* La frase */
  .escena {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: grid;
    place-items: center;
  }
  .mueve { position: relative; margin-top: -40px; }
  .linea {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 31px;
    font-weight: 600;
    letter-spacing: -0.022em;
    line-height: 1.3;
    transform: scale(var(--ajuste, 1));
    transform-origin: 50% 50%;
  }
  .fija { display: block; height: 1.3em; margin-right: 0.26em; }
  .hueco { position: relative; display: block; height: 1.3em; }
  .pieza {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.24em;
  }
  .t { position: relative; display: inline-block; height: 1.3em; line-height: 1.3em; }
  .t .l, .num, .rapido, .varita-caja, .auris, .ondas i,
  .caret, .asa, .sel, .tipo, .reloj, .quince, .aura, .onda-son, .punto, .rayas i, .chispa, .brillo, .fija, .bajada, .continuar {
    visibility: hidden;
    opacity: 0;
  }
  .l { display: inline-block; white-space: pre; }
  .azul { color: var(--p-azul); }

  /* 1 · escuchando */
  .ico-caja { position: relative; width: 1.12em; height: 1.12em; flex: none; }
  .auris { position: absolute; inset: 0; width: 100%; height: 100%; color: var(--p-tinta); }
  .ondas {
    position: absolute;
    inset: 0.1em 0.02em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ondas i {
    display: block;
    width: 0.085em;
    height: 100%;
    border-radius: 0.05em;
    background: var(--p-azul);
    transform-origin: 50% 50%;
  }

  /* 2 · leyendo */
  .sel {
    position: absolute;
    left: -3px;
    top: 0.1em;
    height: 1.1em;
    width: 10px;
    background: var(--p-azul-sel);
    border-radius: 2px;
    transform-origin: 100% 50%;
  }
  .caret {
    position: absolute;
    left: 0;
    top: 0.13em;
    width: 2.5px;
    height: 1.04em;
    border-radius: 2px;
    background: var(--p-azul);
  }
  .asa {
    position: absolute;
    top: 0.1em;
    width: 2.5px;
    height: 1.1em;
    margin-left: -1.25px;
    background: var(--p-azul);
    border-radius: 2px;
  }
  .asa b {
    position: absolute;
    left: 50%;
    width: 11px;
    height: 11px;
    margin-left: -5.5px;
    border-radius: 50%;
    background: var(--p-azul);
  }
  .asa-i { left: -3px; transform-origin: 50% 0%; }
  .asa-i b { top: -9px; }
  .asa-d { left: 0; transform-origin: 50% 100%; }
  .asa-d b { bottom: -9px; }
  #p2 { perspective: 420px; }
  .tipo {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    letter-spacing: 0;
    transform-origin: 50% 60%;
  }


  /* 3 · minutos */
  .cambia { position: relative; display: inline-block; height: 1.3em; flex: none; }
  .reloj {
    position: absolute;
    left: 0;
    top: 0.06em;
    width: 1.14em;
    height: 1.14em;
    overflow: visible;
    color: var(--p-azul);
  }
  .quince {
    position: absolute;
    left: 0;
    top: 0;
    height: 1.3em;
    line-height: 1.3em;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    transform-origin: 50% 55%;
  }
  .onda-ok {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.2em;
    height: 1.2em;
    margin: -0.6em 0 0 -0.6em;
    border-radius: 50%;
    border: 2px solid var(--p-azul);
    visibility: hidden;
    opacity: 0;
  }

  /* 4 · más rápido */
  .num {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 1.3em;
    font-size: 1.06em;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
    transform-origin: 50% 55%;
  }
  .decena { display: inline-block; overflow: hidden; height: 1.3em; }
  .decena span { display: block; }
  .unidad { display: inline-block; overflow: hidden; height: 1.3em; }
  .tira { display: flex; flex-direction: column; }
  .tira span { display: block; height: 1.3em; }
  .brillo {
    position: absolute;
    left: 0;
    top: 0;
    height: 1.3em;
    color: var(--p-destello);
    --m: 130;
    -webkit-mask-image: linear-gradient(105deg, transparent calc(var(--m) * 1% - 22%), #000 calc(var(--m) * 1%), transparent calc(var(--m) * 1% + 22%));
    mask-image: linear-gradient(105deg, transparent calc(var(--m) * 1% - 22%), #000 calc(var(--m) * 1%), transparent calc(var(--m) * 1% + 22%));
    pointer-events: none;
    white-space: nowrap;
  }
  .por { font-size: 1.12em; margin-left: 0.02em; }
  .rapido { display: inline-block; transform-origin: 0% 60%; }
  .rayas { position: absolute; top: 0; bottom: 0; left: 0; right: 0; pointer-events: none; }
  .rayas i {
    position: absolute;
    height: 2px;
    border-radius: 2px;
    background: var(--p-azul);
    transform-origin: 0% 50%;
  }

  /* 5 · a tu medida */
  .varita-caja {
    position: absolute;
    left: 0;
    top: 50%;
    width: 1.3em;
    height: 1.3em;
    margin-top: -0.72em;
    transform-origin: 18% 82%;
    z-index: 2;
    color: var(--p-varita);
  }
  .varita-caja svg { width: 100%; height: 100%; overflow: visible; }
  .chispa {
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    color: var(--p-azul);
    pointer-events: none;
  }
  .chispa svg { width: 100%; height: 100%; display: block; }

  /* Lo que da vida alrededor */
  .aura {
    position: absolute;
    left: 50%;
    top: calc(50% - 40px);
    width: 380px;
    height: 230px;
    margin: -115px 0 0 -190px;
    border-radius: 50%;
    background: radial-gradient(closest-side, var(--p-aura), transparent);
    pointer-events: none;
  }
  .chispero { position: absolute; left: 50%; top: 50%; width: 0; height: 0; z-index: 3; }
  .onda-son {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--p-azul);
  }
  .punto {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    background: var(--p-azul);
  }
  .brillo-boton {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(105deg, transparent 38%, var(--p-brillo-boton) 50%, transparent 62%) no-repeat;
    background-size: 250% 100%;
    background-position: 130% 0;
    pointer-events: none;
  }
  .continuar-texto { position: relative; }

  /* El final */
  .bajada {
    position: absolute;
    left: 50%;
    top: 100%;
    width: 300px;
    margin: 6px 0 0 -150px;
    text-align: center;
    font: 400 17px/1.45 Inter, sans-serif;
    letter-spacing: -0.01em;
    color: var(--p-tenue);
    text-wrap: balance;
  }
  .continuar {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 42px;
    height: 56px;
    border: 0;
    border-radius: 14px;
    background: var(--p-boton);
    color: var(--p-boton-texto);
    font: 600 17px Inter, sans-serif;
    letter-spacing: -0.01em;
    overflow: hidden;
  }
  .home {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 134px;
    height: 5px;
    margin-left: -67px;
    border-radius: 3px;
    background: var(--p-tinta);
    opacity: 0.9;
  }

  html, body { height: 100%; margin: 0; overflow: hidden; background: #222222; }
  .envoltorio { display: block; max-width: none; margin: 0; padding: 0; }
  .columna-movil { max-width: none !important; width: 100%; }
  .panel { display: none !important; }
  .movil { padding: 0; border-radius: 0; background: none; box-shadow: none; }
  .escalador { height: 100vh; border-radius: 0; }
  .pantalla { height: calc(100vh / var(--k, 1)); }
  .isla, .estado, .progreso, .tramo, .home { display: none !important; }
  /* Sin el halo azul de detrás de la frase. Pablo, el 26 de septiembre: «ese
     aura azul que rodea a "aprende a tu medida" y todo eso quítalo, que no me
     gusta cómo queda». La animación lo sigue moviendo, pero no se pinta. */
  .aura { display: none !important; }
  .continuar { cursor: pointer; }
  .saltar {
    position: absolute; top: 58px; right: 18px; z-index: 12;
    border: 0; background: none; padding: 8px 6px;
    font: 500 15px/1 Inter, -apple-system, sans-serif; color: #8a8a8a;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }

@font-face{font-family:"UnifrakturMaguntia";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Monoton";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,d09GMgABAAAAAATAAA8AAAAACOwAAARrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbUBwaBmAATBEICokEh0YBNgIkAxwLEAAEIAWCZAcgDAcbGgcIrgpsY/pQBeODqHw5RIOOTC27sY6CAFwRD/Tj/jtfwgpOojuUicT448INqjuvvZ17oJeXvFR5gjg1KSCOnrr9XJED6/Lp9ImDkUAdkQYwrbktZEFTN5/f/h7HiqwNtDGMOk8oi8KxPMwkC9sFANyAtLW4frif6dZvVk0tPpCBT+S9/1ZvGRdt1VYldmQRIXQgp0d6IOdve4n5cC6uoDBxXidH/PcuMUA6ALEQCLJ8DaSS4k24JjAlDhSIgIPRtzo0ySuCOY4I1UKtNiaimg+pQBpLbbkuIeZM93BcAoY0QAJI6BG/j/M6F4vj3eOqgBLFuHHd0vQUiFeHTTGNdtDacaFRT8I18o7JaiIAdZzkUwERi4T+21NRoVChADA2BCwBgKxfCJfDTJgOQ2I28YUgrpAEdebjTQQxk0AQW04A4iHJIkRC6lJSlZ1KDRpJwDleJzHL5QqTxqBKBKXkJJxUyDq9CQfe0mv0ym2kbYuuKeMBhsJ5AwBHYeSujqFZC0534cDHExfO92HvbILl2Y14+cYJS8UzMsZwJgfY1LvjoTAtHKQ66l0KutluJJnjRmEwrkQbXMnsM3hWyHRe/s+76qvCy6rr4qvai6Lzmt+ii9qr4sua75uYCLl6uReVTZFtyW0JOtT4FbHCf8XWUdHN5mnt2/Z+8e3WWc3zxkHx3fZ57cvmbtH1xknN61Z2WgZKF6sux8h8+iNd/Pilni7MCXMYWd+3mJbVu5hggWGOSbk+HuOPcMTq4z6c21lrn5xbrb0idogsEDfO6L1Hn9Gby7DwkpfSrtuqntLrs7KOcGKJ/oGlnXi+k3qxt5MeP9f+Nea60XBzVro3jys23uy/u2yNzEivmT3zuZvVqwpjcFNQ2Bjr1XDatUnPiMeH3/Or/Dqd37H38HolToOChHdfUhvSzxtLR6Y/fhzSXjtjiq7xFGIelrnnD441zRVY8ZyY1gEX7QacoHC0cdUuuBYobK0L1I4apHUZC13tdepJ62eXumlFrs0Ax78xR7vUh19sff06prRkyf9/mVLW2Pq5x/brMtOFn0w54fDyzuttPb/h9ZeQcLapnDC0SG14Hteew5KBQGzCCeOk+o2Qm45KA4HYhBNmY4aX0m/eSO81gUBswokw5+gCLjFj/cR/YrVTA3iPl4p/21g0o8BDxpwm35FxJNl58lSIr+U0DARO2HfAgGnZVCXHOJKcphAAOrZsmBHg51eBP6rDictJN0iGAsSAs1NNvBECFm6bupOSHJF4HeYmuBWJ15BoQ0vBPgmPqoNJQij4fLJ3cGjO5V7EkHilAGwgsMIItgQ1qs8LE1gYPEiMhknEnP7PZFL+jQBDsDDNGjUh2Lir5cEmkL8AAWxqsGwo9TAQGMSmWp1qIJwvmwQAgC2vgJtSr2mZMybr+EqXfhiB+3LUa0QCVMOkegVCT2Ia1e8ivmKxidyckfbWB4jgI5zP1oWC/w7imsMISuJhc6XFzVv0E+uShXS38GlMOHqXeBYAAA==) format("woff2");}
@font-face{font-family:"Press Start 2P";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Bungee Shade";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Rubik Glitch";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Lobster";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,d09GMgABAAAAAA8YABAAAAAAH5QAAA6+AAIZmQAAAAAAAAAAAAAAAAAAAAAAAAAAGyAcgQgGYABMCIFGCZptEQgKllCUJwE2AiQDNAscAAQgBYN8ByAMgTwbOx2jom6OVkqKvzjgyfBGCUpERAgT93L4wgfCtwqteJ1cJ/83dZwDPSz29+0ISWb9J5zr/9zJTJK60ARarEWKd9EaRdo1FlYMWDF/as5TX3lfXOs/bfO/BsR4HhIcMBUm4kyMAFuz2V5SyxrZGGLFrha1pQf4f7T975GiFEuzw8HvzWA2WK6Bv+cJfEmeFTVFPV21MrhZw5b70tVTeiiZ3JescTunkCh6jjIejERIi//f3L9vz55MiRwQLg9oSbgKUzmZXJokD3JvIc0jSvmmiLeMQqFCjbw88PKVACQcCVMjv7H+6xBnBWZWyVh6XcbU4rD3MYkQMcVw9851gwAYERZB+UJpHCo4AJTLAACgZnEpku++HNy1Za19nd6zLWqAMC1t2bh+GqphLQbZkm+bGFFFapPQiWCtxUAwhzpVxGukEdQcGTIY8sU5G6MrIQB2MVsMoLgN0kq0hgYcNQQGJJx1ZDkvgxkkDka/LMuwjKRfA+vQX9lvLZ1KGqPkuUnC8NFKcXBiFQwMa22x3UF+1BrAtr0PyreVbyhfX74MhKMa01rXoc9bGvs9rfzyv8tyWbf8R/qfY3bYYZMWWCZ7lawKbJZ9tBgg3CWAoFJoGsb+TWKbBmT/tv/0qIMGgYm0yNL7P7Bu3yM/fEm0X1D3WI40TCSY17+qqFbv257zHiwBOZuPILkSAwT0PAow6EDMWHj9MtYVExf7C+SWPJLnja/Jm3fDYjFvLXnS2YnU7fjUY1YzKagH1N2EVYJiSTMJp5kkHWm4uFbIqAo2dYBpvGWd1JlZ8nFhB3OM3AdjCRQxQjPpAotMHrmvf+yyDzvqHyGrcj6oGYqlNQPz0uEdD0jQQnCvB0JwLSEsIlt03mcoAxzmzeugiY+obump7YjLSxeR44NG2nshU4P+9+TxaMlxNbyup7Lm6kZOln0W6c0EhfOkSQiZWwCFkxGMYZLvmGLRBKKxwj6OoE8oEfuAAmkhzNz/w2WVcApJl6yZKPMRn0nFqKwkt4g3fczIsGgMbSPWpSkM5OBetBiiXQc8xxGKxST0C9JcuUjO2fOB1sRkxSH2KrBESWb5WHdoNC2GLXlnPt/0AQsaGzTW1HnACiglLHz3pOeuxWxJFcZgnTJgg7BPzFn1h8vqIdqxsWiYUiGekZ3VjvdbqfGveb6M5du+YXIUr6f3myvH+VFzte5Eg322HbOn54d6xBYZ5GAem0XCenbo2ITka6mR5Ao8eMPFGnx6694b1BW2AxHTE2PrZyxcDSLo1mIClkoYL9iAUzaHCPpHKmVzdheONbDhVsJuUQvM6Z3GZIiMKlD/6Vwfh002DlPNOUlw0eTiUg640eCaBDxotCAvY+RjEvkZpwATFGQyhZhCYaZSBTPk1sPYPy5yvt9Kpg56LZMdA3GdCl7+02OiQg3/PaIjOIYlvISGCHQoKqGogiIKRQyKaihqoKiFog5a1AD1yUqNwYIzNbOqNQtoISUNGfvFNIHGoHEfaIa0UiwLrT62V9LUYabjgJKhZWEzL1u+nYjmfRPlaJFuZ1/tlklKHVjUCj2gn9OGY2I1zfEuoSAU7SyE9weOs81f2OPWWjweH5J2qNfKCxfk+rco0IHuXB/o7JEJ2XrTzF1oTLxX1HUeiNaK/3a4eGXn3ahKe85nyOLYWejo9M1ACsCLwyLc4a599maULAZODocmk/oh5XoxK6FuMVFwiyaemHpFmTm9nr6zm5O6Sy9QTwZzjCZUaoiaHaAtC5zFapZXutDb0DEYy4EhsR5MszFWh8SyXKzhNVWT4NWW9bEzVC5hnhmuNlskTRPKbLOEZO/CKwLbg1ffLB+Lntprr6MLOSzNgW5GOpCEqK71jx9U6EmggmJLL4eWsUzvBRiPFOJb4M7GU6fevIuuTJFL43qO7Giltx8WQqFcYs6HY2Za4qf3HYwYhLdi2aWeR20k0G4/jJZciuTsDqY1t5GT+ty1puKeMD0PDLzh1lafRkjZbL8zU1IxbHJ2yqwY9Flm2hYOqR4BODuaXqNcAt4stSv/bsU4hSZA7qY19erssZNgftrUkcfGZZ7Y/4lVLkvP5KvZ7r09dj5rRvhMlgZzkZpwowpIzCO8taJ1MROBIdtT/PERdR47ZVZs3/fJsD8ybaCaQ4fERknVlVHxdPAuTJ2WQ7RzFi9N09qhWAnMno7AvAOMz0BBZQCWkRkCMcgiKSiuDCDDKJjFdyJkFDkNlK8CoKCRWQQzYiVGrMyIVRiZVcfIsRpyrI4cayBnNoEosBYKrI0CS1CwOuSQ1brIaj1ktT6y2gBZbYisNkJWGyM7aYJGLIzWVOWgBj6DNudTbzQwJQs0AGlZDtqqHGg9ijg2Npxjy7m9uwNDewCKH6D5EYZOo0ig4swFLlzgygVuvBcp78Wd9+JRQeLJJV5c4s0lPrwPX96HH++b7o/vLmefa08TA2ctUcx+e6M+Tvh3IFC5jASOlS2oGHQSP9CvQOwQjrNyQGwCB1OQxqKKW895lVmz+g3uep+z1hC2eg2OWrdDMx62HbCuPmw+8Ju3mx95gs562HjxgzjxkAcPDrGH99pnTJd8GpxJvToD76TSI/SQICq9e1rX4EvAot3ya18TIP8NzXRydz+LPJomnflco0W31+InT3anneojgIB+/kaceG1yzuReiH3nzqGznrrj735VjNSWoeFroepHrUX33OO7Q/PCM+HFxmUm/WvTJV8iPanfeKd+5Teaoy4ycd01eKYn8ODJ/Mlb/8zbZ6L3j9m1t988GnoMX+Uvij74Qd1wWsm0WP97eeu/8HWb6WQ7xotOP6GFmsV7Krznu/OLrS5D+IbmE7KZjxMyaklsffWW1I5u55h44I2Q6cmZ1DJ+ZpGscfPDdHoob58pal/Yy33yoh980p7D/swvNfs7P478r9b2ztWfJ7ewIRT68xuPaeGtbs9rPrvxPd4W9lzmbyz2pdqfqI+dc/ye6+rjpgvyLuegPK8TTte4c/JnxdkLRrvv3rNjfv1hH0/+7BrXrlC/w617w1e8EO99+tL6xJIbhttaFk+ZzhfJn56t1w0sj57d2vqxp5xzMb80Nthx38EDK7dNpQZWbEw9U2FscdZ0llq+qtr24r01lG2uG6mvD8TyR61zB6of6Q3s3/TXYW5xhf3+eGzz7tKsaEKk0knPtXd5d1lynrZYcNeLufSVG/9y5T2+XNsLsyoshbeOffRaY4830h1+iLZOjbZfNyRNFMfyXfcdPrDyxJ2kq5UTVXUXf7Y8vkFZmrlg/UjfwJK/R1cevC9W/1v7P92VfZPV57Ul51VkNv/rT82zluUL3uc+f0FLkvq759JXDi1IWBoiwSPPDhauXPV5+Y7+eHDxsrHbrUOuqenhfjH7fxcvn462WFz2EcZ+prWu3nmq5aeJug0X9YyNLZx6964BtjbzWU4e06Mu6A//7/rgNVfXYsBo99H8MfucXvFoX9T+4f15IlIlyi0cTeE/b+ztxMX83LnBjnsPHpjcp54/7v2lft+tTrEifdn60kBpycB+06IDsdpXNdVV2bMydj43n6B/y78KfXPDC4PaXbfUD83c8LEXwf+xVx3MuSbXjPTxxX+98OXMHTXmPfY+AEifvSQ4jUJwhQvlGBSVK+oRAEwGWwsZXMh8PVQTGSTVsN5IEpE0YSRJohUgiWbH45zHO+Ltyab6Oj0S9DtsXOGK02E3m3yJtNVAAqEgERs1E4bnTxrmLU5XggkSjI5BCEwCOueqzIikSYUzSWqSSqHikyb93iXXiQW3n9j6SS2Sa9YgFLqQIsZbfeK8i8tS9OpVi7Xk+CulPZoGaB0tURNDREXRGa82qP5EuhcSMZLYMZVkkCTTett5YMzaxf1+wF/w65EwfLzpmNvKvdNlomEQ6ByA4RyJGOtiJQAuznSCq97Ecy4Co1FeOtMhwCG43mROytmSRXBOkwrxkU00LauNgfVnsg/JPslylywpaffccn+XLEnbANSpTcerHK64qgYT6f6IVZVIChInNgqSuET8GCTJ/6ll4pxNCp+O4vMBvoavtkqfKvLUVFTvv7oQkhlYnGSwUXBixNkxMBDDkYiIkkUAXXOVZFlMKSREqyjV1gK1/dom1KjOumKeOoMaSKSdBuJwBeIBYiTleVEAnI8qOTpXBCPSirKUyzSW31G93kXWyoLTF7ZUbRhZVdMdDp813AzXRSsREizXV6uKT5xZLvFpVCEhFZmI2pLirNKkTJKkSSWvF/DmvNJaEB7usoHghywyQyBc5yQjIo1KAOxscUnxJNJGF4FFiYM1wwiBg8DJixRluhkVybQ6TVOhE7RPQmhCUoKV02QKwZpVo1rWVJRAUk/Qa1P50GvqMUpaRbd7MnfFHY2Ei0L3UGbpVgisioTIdKHI7IxhCqDNZZxPWsrSealqvYZWO5cpk6kq/i6CALDATZ2o3kzaev+mKtIvQcBp3+02APj5d92/Kn+7LEfxzkIFDDKHgH9CVJyh83YBwlFZjCCYpfwXOrH7pvI/6V98gF4o/5l+DtR3Y2ybD+Dz8t/pPRO/oE8MrGYWdOKKlbWGXZJz0rIV/VIKlpJA3ADgv6BoQbDiv8SqkbGFhPbgb8ERCaUWAsGwScnmLTgXOdvtcNAuG623wR66VkktknTjMNYGS7ZbZTej1vJjdPPsCmoTslabBTP22mODoXaxnq4OT+/VDjS6W/OZtd5GWHCvVZqs5tVWS21MW99h2hZbDCJpzY571SggCmpbN229Brr9qL5uzNpoANW+NG8NHT6lbo5pW/1YVdViV1Wa1BItZ729dFQrJZl4tUk9Rsw2T0YPscUYLg7SK91aKIS3NlJcQXezNNgJCcehlp9Dq5MX//HB2OKniC5f8iT9VnSe51NQss9j+bQzKhC/d4m0eZrNM/QZ4oaAKtRnTrAaS+IFuU2uFLNzm7Ov+0+407YTxhn5BAQMSo4ipJ04hcXRJeRfMbpw/uIn0xcuRrSG1SS9rJ4A8clbPb5YUx0O6ab1BfG03CiHj2aOv0jl857klz3FmMk/Yo2M/AAA) format("woff2");}
@font-face{font-family:"Rye";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Rubik Wet Paint";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Bangers";font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face{font-family:"Vollkorn";font-style:italic;font-weight:400 700;font-display:block;src:url(data:font/woff2;base64,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) format("woff2");}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url("data:font/woff2;base64,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") format("woff2");
}
</style>

<div class="envoltorio">
  <div class="columna-movil">
    <div class="movil">
      <div class="escalador" id="escalador">
        <div class="pantalla" id="pantalla" data-tema="oscuro">
          <span class="isla"></span>
          <div class="estado" aria-hidden="true">
            <span>9:41</span>
            <span class="iconos">
              <svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg>
              <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 11.2 5.6 8.6a3.4 3.4 0 0 1 4.8 0Z M3.4 6.4a6.5 6.5 0 0 1 9.2 0l-1.3 1.3a4.7 4.7 0 0 0-6.6 0Z M1.2 4.2a9.6 9.6 0 0 1 13.6 0l-1.3 1.3a7.8 7.8 0 0 0-11 0Z" fill="currentColor"/></svg>
              <svg width="27" height="13" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.6" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="17" height="9" rx="2.2" fill="currentColor"/><path d="M25 4.4v4.2a2.2 2.2 0 0 0 0-4.2Z" fill="currentColor" opacity=".45"/></svg>
            </span>
          </div>
          <div class="progreso" aria-hidden="true"><i><span id="relleno"></span></i><i></i><i></i></div>
          <span class="tramo">Sobre ti</span>

          <div class="escena">
            <div class="aura" id="aura"></div>
            <div class="mueve" id="mueve">
              <span class="chispero" id="chispero"></span>
              <div class="linea" id="linea" aria-label="Aprende leyendo, en 20 minutos, 10 veces más rápido y a tu medida">
                <span class="fija" id="fija">Aprende</span>
                <span class="hueco" id="hueco">
                  <span class="pieza" id="p2">
                    <span class="sel" id="sel"></span>
                    <span class="t" id="t2"></span>
                    <span id="tipos"></span>
                    <span class="caret" id="caret"></span>
                    <span class="asa asa-i" id="asaI"><b></b></span>
                    <span class="asa asa-d" id="asaD"><b></b></span>
                  </span>

                  <span class="pieza" id="p3">
                    <span class="t" id="t3a"></span>
                    <span class="cambia" id="cambia">
                      <svg class="reloj" id="reloj" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="10.2" y="0.6" width="3.6" height="2.6" rx="1" fill="currentColor"/>
                        <path d="M18.6 5.4 20.2 3.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                        <circle cx="12" cy="13.6" r="8.9" fill="none" stroke="currentColor" stroke-width="2.3" opacity=".22"/>
                        <circle id="anillo" cx="12" cy="13.6" r="8.9" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" transform="rotate(-90 12 13.6)"/>
                        <line id="aguja" x1="12" y1="13.6" x2="12" y2="8.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                        <circle cx="12" cy="13.6" r="1.7" fill="currentColor"/>
                      </svg>
                      <span class="quince azul" id="quince">20</span>
                      <span class="onda-ok" id="ondaOk"></span>
                    </span>
                    <span class="t" id="t3b"></span>
                  </span>

                  <span class="pieza" id="p4">
                    <span class="num azul" id="num">
                      <span class="decena" id="decena"><span id="uno">1</span></span>
                      <span class="unidad"><span class="tira" id="tira"><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span></span></span>
                      <span class="por">×</span>
                      <span class="brillo" id="brilloNum" aria-hidden="true">10<span class="por">×</span></span>
                    </span>
                    <span class="rapido azul" id="rapido">más rápido</span>
                    <span class="rayas" id="rayas" aria-hidden="true"><i></i><i></i><i></i></span>
                  </span>

                  <span class="pieza" id="p5">
                    <span class="t azul" id="t5"></span>
                    <span class="brillo" id="brilloMedida" aria-hidden="true">a tu medida</span>
                    <span class="varita-caja" id="varita" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M3.4 20.6 15.2 8.8" stroke="currentColor" stroke-width="3.1" stroke-linecap="round"/>
                        <path d="M15.2 8.8 18.4 5.6" stroke="currentColor" stroke-width="3.1" stroke-linecap="round"/>
                        <path d="M15.6 8.4 18 6" style="stroke:var(--p-punta)" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </span>
                    <span id="chispas"></span>
                  </span>
                </span>
              </div>
              <p class="bajada" id="bajada">Los mejores libros, resumidos en 20&nbsp;minutos.</p>
            </div>
          </div>

          <button class="continuar" id="continuar" tabindex="-1"><span class="brillo-boton" id="brilloBoton"></span><span class="continuar-texto">Continuar</span></button>
          <span class="home"></span>
          <button class="saltar" id="saltar" type="button">Saltar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="panel">
    <header class="cabecera">
      <h1>La Nítida, pulida</h1>
      <p>La que elegiste, rehecha desde cero y con más detalle. Tiene el tamaño y las medidas de un iPhone de verdad, así que lo que ves aquí es lo que irá en la app.</p>
    </header>

    <div class="bloque">
      <span class="etiqueta">Fondo</span>
      <div class="segmentado" role="group" aria-label="Fondo">
        <button type="button" data-tema="claro" aria-pressed="true">Blanco, como la captura</button>
        <button type="button" data-tema="oscuro" aria-pressed="false">Oscuro, como tu intro</button>
      </div>
    </div>

    <div class="bloque">
      <span class="etiqueta">Ir a una escena</span>
      <div class="fichas" id="fichas"></div>
      <div class="mandos">
        <button class="boton-redondo" id="play" type="button" aria-label="Pausar"></button>
        <div class="barrido"><input type="range" id="barra" min="0" max="1000" value="0" aria-label="Momento de la animación"></div>
        <label class="lento"><input type="checkbox" id="lento"> Cámara lenta</label>
      </div>
    </div>

    <div class="bloque">
      <span class="etiqueta">Lo que he mejorado</span>
      <ul class="mejoras">
        <li><span>Cada palabra entra <strong>letra a letra</strong>: se aclaran de un desenfoque y se van por arriba. La frase se recoloca sola para quedar siempre en el centro, y un <strong>halo azul</strong> se enciende detrás en cada cambio.</span></li>
        <li><span>Los auriculares <strong>laten y sueltan ondas de sonido</strong>, se deshacen en una onda que se mueve como un audio de verdad, y las letras de «escuchando» bailan con ella.</span></li>
        <li><span>«leyendo» se escribe con cursor, <strong>se selecciona como en el iPhone</strong>, con sus dos asas, y pasa a toda velocidad por <strong>nueve letras rarísimas</strong> —gótica, neón, píxeles, sombra 3D, glitch, rótulo, del oeste, pintura que gotea y cómic— hasta caer como un sello en la cursiva con la que se leen los libros en Curva.</span></li>
        <li><span><strong>«Aprende en 20 minutos»</strong>: un cronómetro da la vuelta, se llena, tiembla y <strong>estalla</strong> en el 20.</span></li>
        <li><span>El 3 cae desde arriba y sube <strong>como un cuentakilómetros</strong> hasta el 10, con un destello de luz y <strong>un temblor</strong> de toda la frase al llegar. «más rápido» entra con estela de velocidad.</span></li>
        <li><span>La varita hace un floreo con chispas, va <strong>pintando «a tu medida»</strong> letra a letra y, al acabar, las letras hacen la ola y <strong>revientan en estrellitas</strong>.</span></li>
        <li><span><strong>El final:</strong> la frase sube entre una lluvia de estrellas, aparece <em>«Los mejores libros, resumidos en 20 minutos.»</em> y el botón, que <strong>brilla</strong> para que se pulse.</span></li>
        <li><span>Versión oscura con los colores exactos de tu intro, y todo va <strong>un 20 % más deprisa</strong> que la primera vez: la vuelta entera dura unos 18 segundos.</span></li>
      </ul>
    </div>

    <p class="nota"><strong>Dónde la pondría:</strong> como primera pantalla de la intro, justo después de la bienvenida y antes de preguntar el nombre. Dime si te vale y la meto.</p>
  </div>
</div>

<script>
(() => {
  const $ = (id) => document.getElementById(id);
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- El móvil se escala para caber, sin cambiar sus medidas de dentro --- */
  const escalador = $("escalador");
  const pantalla = $("pantalla");
  const ajustaEscala = () => {
    const k = escalador.clientWidth / 390;
    escalador.style.setProperty("--k", k);
    pantalla.style.setProperty("--k", k);
  };
  new ResizeObserver(ajustaEscala).observe(escalador);
  ajustaEscala();

  /* --- Piezas que se montan con código ---------------------------------- */
  const letras = (el, texto) => {
    el.innerHTML = [...texto].map((c) => \`<span class="l">\${c}</span>\`).join("");
    return [...el.children];
  };
  const L2 = letras($("t2"), "leyendo");
  const L3a = letras($("t3a"), "en");
  const L3b = letras($("t3b"), "minutos");
  const L5 = letras($("t5"), "a tu medida");

  const ESTRELLA = \`<svg viewBox="0 0 24 24"><path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" fill="currentColor"/></svg>\`;

  /* Un azar con semilla: las ondas y las chispas se mueven igual cada vez, y
     así saltar a una escena o rebobinar da siempre el mismo fotograma. */
  let semilla = 7;
  const azar = () => {
    semilla |= 0; semilla = (semilla + 0x6d2b79f5) | 0;
    let t = Math.imul(semilla ^ (semilla >>> 15), 1 | semilla);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const ESCENAS = [
    { id: "s1", nombre: "Escuchando", t: 0.3 },
    { id: "s2", nombre: "Leyendo", t: 0.9 },
    { id: "s3", nombre: "20 minutos", t: 5.5 },
    { id: "s4", nombre: "Más rápido", t: 8.05 },
    { id: "s5", nombre: "A tu medida", t: 11.25 },
    { id: "s6", nombre: "Final", t: 14.75 },
  ];
  const [S1, S2, S3, S4, S5, S6] = ESCENAS.map((e) => e.t);
  const FIN = 16.6;
  /* Todo va un 20 % más deprisa que como está escrito. Pablo, al verla: «todo
     en general debería ser un poco más rápido». */
  const RITMO = 1.2;

  /* Las siete letras por las que pasa «leyendo». Acaba en Vollkorn, la de
     leer los libros en Curva. */
  const TIPOS = [
    { nombre: "gótica", css: 'font-family:UnifrakturMaguntia,serif;font-size:1.12em', carga: '400 35px UnifrakturMaguntia' },
    { nombre: "neón", css: 'font-family:Monoton,cursive;font-size:0.8em;letter-spacing:0.01em', carga: '400 25px Monoton' },
    { nombre: "píxeles", css: 'font-family:"Press Start 2P",monospace;font-size:0.6em', carga: '400 19px "Press Start 2P"' },
    { nombre: "sombra", css: 'font-family:"Bungee Shade",cursive;font-size:0.82em', carga: '400 25px "Bungee Shade"' },
    { nombre: "glitch", css: 'font-family:"Rubik Glitch",cursive;font-size:1em', carga: '400 31px "Rubik Glitch"' },
    { nombre: "rótulo", css: 'font-family:Lobster,cursive;font-size:1.1em', carga: '400 34px Lobster' },
    { nombre: "oeste", css: 'font-family:Rye,serif;font-size:0.9em', carga: '400 28px Rye' },
    { nombre: "pintura", css: 'font-family:"Rubik Wet Paint",cursive;font-size:1em', carga: '400 31px "Rubik Wet Paint"' },
    { nombre: "cómic", css: 'font-family:Bangers,cursive;font-size:1.18em;letter-spacing:0.04em', carga: '400 37px Bangers' },
    { nombre: "Curva", css: 'font-family:Vollkorn,Georgia,serif;font-style:italic;font-weight:500;font-size:1.14em;letter-spacing:-0.005em', carga: 'italic 500 35px Vollkorn' },
  ];
  $("tipos").innerHTML = TIPOS.map((f) => \`<span class="tipo" style='\${f.css}'>leyendo</span>\`).join("");


  let tl = null;

  function monta() {
    const hueco = $("hueco");
    const linea = $("linea");
    const fija = $("fija");

    /* --- Medidas, con la letra ya cargada ------------------------------- */
    const ancho = (el) => el.offsetWidth;
    const bordeDer = (l) => l.offsetLeft + l.offsetWidth;
    const bordes2 = L2.map(bordeDer);
    const tipos = [...$("tipos").children];
    const anchosTipo = tipos.map(ancho);
    const wReloj = $("reloj").getBoundingClientRect().width / (pantalla.getBoundingClientRect().width / 390);
    const w15 = ancho($("quince"));
    $("cambia").style.width = \`\${wReloj}px\`;
    const w3a = ancho($("p3"));
    const w3b = w3a - wReloj + w15;
    const wUno = ancho($("uno"));
    $("decena").style.width = "0px";
    const numSin = ancho($("num"));
    const hueco4 = parseFloat(getComputedStyle($("p4")).columnGap) || 0;
    const wRap = ancho($("rapido"));
    const w4a = numSin + hueco4 + wRap;
    const w4b = numSin + wUno + hueco4 + wRap;
    const w4c = numSin + wUno;
    const w5 = ancho($("t5"));
    const wVar = ancho($("varita"));
    const em = parseFloat(getComputedStyle(linea).fontSize);

    /* La cursiva tiene otra línea de base: se sube o se baja para que las dos
       «leyendo» caigan en el mismo renglón. */
    const base = (el) => {
      const i = document.createElement("i");
      i.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
      el.appendChild(i);
      const y = i.offsetTop;
      i.remove();
      return y;
    };
    const base2 = $("t2").offsetTop + base($("t2"));
    tipos.forEach((el) => { el.style.top = \`\${base2 - base(el)}px\`; });

    // La franja de la selección y sus asas
    const selW = bordes2[bordes2.length - 1] + 6;

    // Las rayas de velocidad, detrás de «más rápido»
    const rapX = $("rapido").offsetLeft;
    const wRap0 = $("rapido").offsetWidth;
    [...$("rayas").children].forEach((r, i) => {
      r.style.left = \`\${rapX + wRap0 + 6 + i * 4}px\`;
      r.style.top = \`\${[0.42, 0.62, 0.82][i] * em}px\`;
      r.style.width = \`\${[46, 64, 38][i]}px\`;
    });

    /* --- El encaje: si la frase no cabe, encoge un poco ----------------- */
    const libre = 390 - 2 * 18;
    const fijaW = fija.offsetWidth + parseFloat(getComputedStyle(fija).marginRight);
    gsap.ticker.add(() => {
      const total = fijaW + (parseFloat(hueco.style.width) || 0);
      linea.style.setProperty("--ajuste", Math.min(1, libre / total).toFixed(4));
    });

    /* --- La línea de tiempo ---------------------------------------------- */
    tl = gsap.timeline({ paused: true });
    const T = tl;
    const entra = (els, t, extra = {}) =>
      T.fromTo(els, { autoAlpha: 0, y: 14, filter: "blur(7px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power3.out", stagger: 0.03, immediateRender: false, ...extra }, t);
    const sale = (els, t, extra = {}) =>
      T.to(els, { autoAlpha: 0, y: -12, filter: "blur(7px)", duration: 0.3, ease: "power2.in", stagger: 0.014, ...extra }, t);
    const anchoA = (w, t, d = 0.45, ease = "power3.inOut") => T.to(hueco, { width: w, duration: d, ease }, t);
    /* El halo azul de detrás: se enciende en cada escena */
    const aura = (t, fuerza = 1) => {
      T.fromTo($("aura"), { autoAlpha: 0.3, scale: 0.75 }, { autoAlpha: Math.min(1, fuerza), scale: 0.95 + 0.15 * fuerza, duration: 0.45, ease: "power2.out", immediateRender: false }, t);
      T.to($("aura"), { autoAlpha: 0.45, scale: 1, duration: 0.9, ease: "power2.inOut" }, t + 0.45);
    };
    /* Una lluvia de estrellitas desde un punto de la línea */
    const ESTRELLA_SVG = \`<svg viewBox="0 0 24 24"><path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" fill="currentColor"/></svg>\`;
    const estallido = (cont, cx, cy, n, r0, r1, t, tam = [7, 14]) => {
      for (let i = 0; i < n; i++) {
        const c = document.createElement("span");
        c.className = "chispa";
        c.innerHTML = ESTRELLA_SVG;
        const s = tam[0] + azar() * (tam[1] - tam[0]);
        c.style.cssText = \`left:\${cx}px;top:\${cy}px;width:\${s}px;height:\${s}px;margin:\${-s / 2}px 0 0 \${-s / 2}px\`;
        if (azar() < 0.3) c.style.color = "var(--p-destello)";
        cont.appendChild(c);
        const a = (i / n) * Math.PI * 2 + azar() * 0.5;
        const r = r0 + azar() * (r1 - r0);
        const d = 0.55 + azar() * 0.35;
        T.fromTo(c, { autoAlpha: 1, x: 0, y: 0, scale: 0, rotate: 0 },
          { autoAlpha: 1, x: Math.cos(a) * r, y: Math.sin(a) * r * 0.62, scale: 1, rotate: 120, duration: d * 0.55, ease: "power3.out", immediateRender: false }, t + azar() * 0.08);
        T.to(c, { autoAlpha: 0, scale: 0, rotate: 220, y: \`+=\${8 + azar() * 10}\`, duration: d * 0.55, ease: "power2.in" }, t + d * 0.55);
      }
    };

    T.set(hueco, { width: 8 }, 0);
    T.set($("decena"), { width: 0 }, 0);
    T.set($("tira"), { yPercent: 0 }, 0);
    T.set($("sel"), { width: selW, scaleX: 0 }, 0);
    T.set($("asaD"), { x: selW - 3 }, 0);
    T.set($("caret"), { x: 0 }, 0);
    T.set($("varita"), { x: 0, y: 0, rotate: 0 }, 0);
    T.set($("brilloNum"), { "--m": 130 }, 0);
    T.set($("brilloMedida"), { "--m": 130 }, 0);
    T.set($("relleno"), { scaleX: 0.14 }, 0);

    T.fromTo(fija, { autoAlpha: 0, y: 14, filter: "blur(8px)" },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power3.out", immediateRender: false }, 0.02);

    /* 2 · LEYENDO: se escribe, se selecciona y cambia de letra */
    anchoA(8, S2 - 0.26, 0.36);
    aura(S2, 0.7);
    T.fromTo($("caret"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01, immediateRender: false }, S2 + 0.02);
    T.to($("caret"), { autoAlpha: 0, duration: 0.01, yoyo: true, repeat: 1, repeatDelay: 0.26 }, S2 + 0.1);
    const pausas = [0, 0.085, 0.07, 0.09, 0.075, 0.095, 0.07];
    let tEsc = S2 + 0.4;
    L2.forEach((l, i) => {
      tEsc += pausas[i];
      T.fromTo(l, { autoAlpha: 0, scale: 0.7, y: 2 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.14, ease: "back.out(3)", immediateRender: false }, tEsc);
      T.to($("caret"), { x: bordes2[i] + 2, duration: 0.07, ease: "power2.out" }, tEsc);
      T.to(hueco, { width: bordes2[i] + 8, duration: 0.1, ease: "power2.out" }, tEsc);
    });
    T.to($("caret"), { autoAlpha: 0, duration: 0.01, yoyo: true, repeat: 1, repeatDelay: 0.24 }, tEsc + 0.26);
    const tSel = tEsc + 0.55;
    T.to($("caret"), { autoAlpha: 0, duration: 0.05 }, tSel);
    T.fromTo($("sel"), { autoAlpha: 1, scaleX: 0 }, { autoAlpha: 1, scaleX: 1, duration: 0.32, ease: "power2.out", immediateRender: false }, tSel);
    T.fromTo([$("asaI"), $("asaD")], { autoAlpha: 0, scale: 0.2 },
      { autoAlpha: 1, scale: 1, duration: 0.34, ease: "back.out(2.6)", stagger: 0.07, immediateRender: false }, tSel + 0.14);
    /* El carrusel: «leyendo» pasa por siete letras, cada una con un giro
       corto, y la selección y el rótulo se estiran con ella. */
    const tCar = tSel + 0.35;
    const PASO = 0.17;
    T.to(L2, { autoAlpha: 0, yPercent: -40, duration: 0.12, ease: "power2.in", stagger: 0.008 }, tCar);
    tipos.forEach((el, k) => {
      const tk = tCar + k * PASO;
      T.fromTo(el, { autoAlpha: 0, yPercent: 45, rotateX: -75 },
        { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.14, ease: "power2.out", immediateRender: false }, k ? tk + 0.04 : tk);
      if (k < tipos.length - 1) T.to(el, { autoAlpha: 0, yPercent: -45, rotateX: 75, duration: 0.09, ease: "power2.in" }, tk + PASO);
      const w = anchosTipo[k];
      T.to($("sel"), { width: w + 6, duration: 0.14, ease: "power2.out" }, tk);
      T.to($("asaD"), { x: w + 3, duration: 0.14, ease: "power2.out" }, tk);
      T.to(hueco, { width: w + 6, duration: 0.14, ease: "power2.out" }, tk);
    });
    const tUltima = tCar + (tipos.length - 1) * PASO;
    T.fromTo(tipos[tipos.length - 1], { scale: 1.45 }, { scale: 1, duration: 0.42, ease: "back.out(2.6)", immediateRender: false }, tUltima + 0.04);
    T.to($("sel"), { scaleY: 1.18, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.out" }, tUltima + 0.12);
    aura(tUltima + 0.1, 1.25);
    const tSuelta = tUltima + 0.6;
    T.to([$("asaI"), $("asaD")], { autoAlpha: 0, scale: 0.3, duration: 0.2, ease: "power2.in", stagger: 0.04 }, tSuelta);
    T.to($("sel"), { autoAlpha: 0, duration: 0.35 }, tSuelta + 0.05);
    sale(tipos[tipos.length - 1], S3 - 0.36);

    /* 3 · 20 MINUTOS: el cronómetro se llena y estalla en un 20 */
    T.set($("cambia"), { width: wReloj }, 0);
    anchoA(w3a, S3 - 0.2);
    entra(L3a, S3);
    aura(S3, 0.8);
    T.fromTo($("reloj"), { autoAlpha: 0, scale: 0.4, rotate: -30 },
      { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.45, ease: "back.out(2.4)", immediateRender: false }, S3 + 0.04);
    entra(L3b, S3 + 0.1);
    T.fromTo($("anillo"), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.95, ease: "power1.inOut", immediateRender: false }, S3 + 0.3);
    T.fromTo($("aguja"), { rotate: 0 }, { rotate: 360, svgOrigin: "12 13.6", duration: 0.95, ease: "power1.inOut", immediateRender: false }, S3 + 0.3);
    T.to($("reloj"), { rotate: 9, duration: 0.05, yoyo: true, repeat: 5, ease: "sine.inOut" }, S3 + 1.25);
    const tQuince = S3 + 1.5;
    T.to($("reloj"), { autoAlpha: 0, scale: 0.2, rotate: 0, duration: 0.2, ease: "power2.in" }, tQuince);
    T.to($("cambia"), { width: w15, duration: 0.36, ease: "power3.inOut" }, tQuince + 0.06);
    T.to(hueco, { width: w3b, duration: 0.36, ease: "power3.inOut" }, tQuince + 0.06);
    T.fromTo($("quince"), { autoAlpha: 0, scale: 0.35, filter: "blur(6px)" },
      { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.5, ease: "back.out(2.6)", immediateRender: false }, tQuince + 0.14);
    const cambia = $("cambia");
    for (let i = 0; i < 12; i++) {
      const pt = document.createElement("span");
      pt.className = "punto";
      cambia.appendChild(pt);
      const a = (i / 12) * Math.PI * 2;
      const r = 26 + (i % 3) * 7;
      T.fromTo(pt, { autoAlpha: 1, x: 0, y: 0, scale: 1.2 },
        { autoAlpha: 0, x: Math.cos(a) * r, y: Math.sin(a) * r, scale: 0.3, duration: 0.6, ease: "power3.out", immediateRender: false }, tQuince + 0.02);
    }
    aura(tQuince + 0.05, 1.3);
    T.fromTo($("ondaOk"), { autoAlpha: 0.5, scale: 0.6 },
      { autoAlpha: 0, scale: 2.3, duration: 0.75, ease: "power2.out", immediateRender: false }, tQuince + 0.16);
    sale([...L3a, $("quince"), ...L3b], S4 - 0.36);

    /* 4 · MÁS RÁPIDO: el 3 cae y sube como un cuentakilómetros */
    anchoA(w4a, S4 - 0.2);
    aura(S4, 0.7);
    T.fromTo($("num"), { autoAlpha: 0, y: -24, scale: 1.35 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.62, ease: "back.out(2.4)", immediateRender: false }, S4);
    T.fromTo($("rapido"), { autoAlpha: 0, x: 48, skewX: -18, filter: "blur(8px)" },
      { autoAlpha: 1, x: 0, skewX: 0, filter: "blur(0px)", duration: 0.62, ease: "expo.out", immediateRender: false }, S4 + 0.16);
    const rayas = [...$("rayas").children];
    T.fromTo(rayas, { autoAlpha: 0, x: 60, scaleX: 0.5 },
      { autoAlpha: 0.5, x: 24, scaleX: 1, duration: 0.16, ease: "power2.out", stagger: 0.04, immediateRender: false }, S4 + 0.16);
    T.to(rayas, { autoAlpha: 0, x: 0, scaleX: 0, duration: 0.36, ease: "power2.inOut", stagger: 0.04 }, S4 + 0.32);
    const pasos = [0.26, 0.17, 0.13, 0.1, 0.085, 0.08, 0.1];
    let tCuenta = S4 + 0.85;
    pasos.forEach((d, k) => {
      T.to($("tira"), { yPercent: (-100 * (k + 1)) / 8, duration: d * 0.9, ease: k === 6 ? "back.out(2.2)" : "power2.out" }, tCuenta);
      tCuenta += d;
    });
    const tDiez = tCuenta - pasos[6];
    T.to($("decena"), { width: wUno, duration: 0.26, ease: "power2.out" }, tDiez);
    T.fromTo($("uno"), { yPercent: -90, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.34, ease: "back.out(2.2)", immediateRender: false }, tDiez);
    T.to(hueco, { width: w4b, duration: 0.26, ease: "power2.out" }, tDiez);
    T.to($("num"), { scale: 1.18, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 }, tDiez + 0.06);
    T.to($("mueve"), { keyframes: { x: [0, -5, 5, -4, 4, -2, 1, 0] }, duration: 0.36, ease: "none" }, tDiez + 0.04);
    aura(tDiez, 1.4);
    T.fromTo($("brilloNum"), { autoAlpha: 1, "--m": 130 },
      { autoAlpha: 1, "--m": -30, duration: 0.7, ease: "power1.inOut", immediateRender: false }, tDiez + 0.3);
    T.to($("brilloNum"), { autoAlpha: 0, duration: 0.01 }, tDiez + 1.02);
    T.to($("rapido"), { autoAlpha: 0, scale: 0.32, x: -6, duration: 0.42, ease: "power2.in" }, S5 - 1.0);
    anchoA(w4c, S5 - 0.9, 0.46);
    sale($("num"), S5 - 0.38);

    /* 5 · A TU MEDIDA: la varita hace un floreo y pinta las letras */
    anchoA(wVar, S5 - 0.22, 0.4);
    aura(S5, 0.8);
    T.fromTo($("varita"), { autoAlpha: 0, x: 28, y: -30, rotate: 75 },
      { autoAlpha: 1, x: 0, y: 0, rotate: -20, duration: 0.55, ease: "back.out(1.8)", immediateRender: false }, S5);
    T.to($("varita"), { rotate: 34, duration: 0.2, ease: "power2.inOut" }, S5 + 0.6);
    T.to($("varita"), { rotate: -10, duration: 0.18, ease: "power2.inOut" }, S5 + 0.8);
    T.to($("varita"), { rotate: 14, duration: 0.16, ease: "power2.inOut" }, S5 + 0.98);

    // La punta de la varita, donde nacen las chispas
    const puntaX = wVar * 0.8;
    const puntaY = em * 0.25;
    const chispas = $("chispas");
    const nueva = (x, y, tam) => {
      const c = document.createElement("span");
      c.className = "chispa";
      c.innerHTML = ESTRELLA;
      c.style.left = \`\${x}px\`;
      c.style.top = \`\${y}px\`;
      c.style.width = c.style.height = \`\${tam}px\`;
      c.style.margin = \`\${-tam / 2}px 0 0 \${-tam / 2}px\`;
      chispas.appendChild(c);
      return c;
    };
    for (let i = 0; i < 9; i++) {
      const c = nueva(puntaX, puntaY, 8 + azar() * 8);
      const a = (-160 + (i / 8) * 200) * (Math.PI / 180);
      const r = 16 + azar() * 16;
      const t = S5 + 0.66 + i * 0.022;
      T.fromTo(c, { autoAlpha: 1, scale: 0, x: 0, y: 0, rotate: 0 },
        { autoAlpha: 1, scale: 1, x: Math.cos(a) * r, y: Math.sin(a) * r, rotate: 90, duration: 0.36, ease: "power2.out", immediateRender: false }, t);
      T.to(c, { autoAlpha: 0, scale: 0, rotate: 180, duration: 0.32, ease: "power2.in" }, t + 0.36);
    }

    // La palabra se pinta al lado de la varita, de izquierda a derecha, y
    // luego la varita se va y la palabra ocupa su sitio.
    const huecoP5 = parseFloat(getComputedStyle($("p5")).columnGap) || 0;
    const desde = wVar + huecoP5;
    const dViaje = 0.95;
    const tViaje = S5 + 1.35;
    T.set([$("t5"), $("brilloMedida")], { x: desde }, 0);
    anchoA(desde + w5, S5 + 1.1, 0.55);
    T.fromTo(L5, { autoAlpha: 0 }, { autoAlpha: 0.14, duration: 0.3, immediateRender: false }, S5 + 1.15);
    T.to($("varita"), { rotate: 30, x: 3, duration: 0.24, ease: "power2.out" }, tViaje - 0.12);
    T.to($("varita"), { rotate: 18, duration: 0.09, ease: "sine.inOut", yoyo: true, repeat: 7 }, tViaje + 0.12);
    L5.forEach((l) => {
      const centro = l.offsetLeft + l.offsetWidth / 2;
      const t = tViaje + (centro / w5) * dViaje;
      T.to(l, { autoAlpha: 1, duration: 0.22, ease: "power1.out" }, t);
      T.fromTo(l, { y: 4, filter: "blur(3px)" }, { y: 0, filter: "blur(0px)", duration: 0.36, ease: "power2.out", immediateRender: false }, t);
      if (l.textContent.trim()) {
        const c = nueva(desde + centro, em * 0.18, 6 + azar() * 6);
        T.fromTo(c, { autoAlpha: 1, scale: 0, y: 0, rotate: 0 },
          { autoAlpha: 1, scale: 1, y: -10, rotate: 60, duration: 0.24, ease: "power2.out", immediateRender: false }, t - 0.04);
        T.to(c, { autoAlpha: 0, scale: 0, y: -20, rotate: 140, duration: 0.3, ease: "power2.in" }, t + 0.2);
      }
    });
    const tSeVa = tViaje + dViaje + 0.15;
    T.to($("varita"), { autoAlpha: 0, rotate: "-=50", y: 14, x: -6, scale: 0.6, duration: 0.34, ease: "power2.in" }, tSeVa);
    T.to([$("t5"), $("brilloMedida")], { x: 0, duration: 0.55, ease: "power3.inOut" }, tSeVa + 0.18);
    anchoA(w5, tSeVa + 0.18, 0.55);
    T.fromTo($("brilloMedida"), { autoAlpha: 1, "--m": 130 },
      { autoAlpha: 1, "--m": -30, duration: 0.8, ease: "power1.inOut", immediateRender: false }, tSeVa + 1.5);
    T.to($("brilloMedida"), { autoAlpha: 0, duration: 0.01 }, tSeVa + 2.32);
    T.to(L5, { y: -6, duration: 0.15, ease: "sine.out", yoyo: true, repeat: 1, stagger: 0.035 }, tSeVa + 0.78);
    estallido($("chispas"), w5 / 2, em * 0.62, 14, w5 * 0.45, w5 * 0.75, tSeVa + 0.8);
    aura(tSeVa + 0.78, 1.3);

    /* 6 · EL FINAL: la frase sube, llega la línea y el botón */
    T.to($("mueve"), { y: -34, duration: 0.8, ease: "power3.inOut" }, S6);
    estallido($("chispero"), 0, 0, 26, 100, 185, S6 + 0.1, [8, 17]);
    T.fromTo($("brilloBoton"), { backgroundPosition: "130% 0" },
      { backgroundPosition: "-30% 0", duration: 0.9, ease: "power2.inOut", repeat: 1, repeatDelay: 0.8, immediateRender: false }, S6 + 1.2);
    T.fromTo($("bajada"), { autoAlpha: 0, y: 16, filter: "blur(6px)" },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out", immediateRender: false }, S6 + 0.35);
    T.fromTo($("continuar"), { autoAlpha: 0, y: 44 },
      { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", immediateRender: false }, S6 + 0.6);
    T.to($("relleno"), { scaleX: 0.36, duration: 0.9, ease: "power2.inOut" }, S6 + 0.5);
    T.set({}, {}, FIN);

    ESCENAS.forEach((e) => T.addLabel(e.id, e.t));
  }

  /* --- Los mandos --------------------------------------------------------- */
  const fichas = $("fichas");
  ESCENAS.forEach((e, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ficha";
    b.dataset.escena = e.id;
    b.innerHTML = \`<b>\${i + 1}</b>\${e.nombre}\`;
    b.addEventListener("click", () => {
      if (!tl) return;
      tl.seek(Math.max(0, e.t - 0.35)).play();
      pinta();
    });
    fichas.appendChild(b);
  });

  const ICONO_PAUSA = \`<svg viewBox="0 0 24 24"><rect x="6" y="4.5" width="4" height="15" rx="1.2" fill="currentColor"/><rect x="14" y="4.5" width="4" height="15" rx="1.2" fill="currentColor"/></svg>\`;
  const ICONO_PLAY = \`<svg viewBox="0 0 24 24"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.86l12-7.2a1 1 0 0 0 0-1.72l-12-7.2a1 1 0 0 0-1.5.86Z" fill="currentColor"/></svg>\`;
  const play = $("play");
  const barra = $("barra");
  const pinta = () => {
    if (!tl) return;
    const parado = tl.paused();
    play.innerHTML = parado ? ICONO_PLAY : ICONO_PAUSA;
    play.setAttribute("aria-label", parado ? "Reproducir" : "Pausar");
  };
  play.addEventListener("click", () => {
    if (!tl) return;
    if (tl.paused()) { if (tl.progress() >= 1) tl.restart(); else tl.play(); }
    else tl.pause();
    pinta();
  });
  let arrastrando = false;
  barra.addEventListener("input", () => {
    if (!tl) return;
    arrastrando = true;
    tl.pause();
    tl.progress(barra.value / 1000);
    pinta();
  });
  barra.addEventListener("change", () => { arrastrando = false; });
  $("lento").addEventListener("change", (e) => { if (tl) tl.timeScale(e.target.checked ? 0.35 : RITMO); });

  document.querySelectorAll(".segmentado button").forEach((b) => {
    b.addEventListener("click", () => {
      pantalla.dataset.tema = b.dataset.tema;
      document.querySelectorAll(".segmentado button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
    });
  });

  gsap.ticker.add(() => {
    if (!tl) return;
    if (!arrastrando) barra.value = Math.round(tl.progress() * 1000);
    const t = tl.time();
    let actual = ESCENAS[0].id;
    for (const e of ESCENAS) if (t >= e.t - 0.4) actual = e.id;
    for (const f of fichas.children) f.dataset.activa = f.dataset.escena === actual ? "si" : "no";
  });


  const avisa = () => { try { parent.postMessage("curva:nitida-continuar", "*"); } catch (e) {} };
  $("continuar").addEventListener("click", avisa);
  $("saltar").addEventListener("click", avisa);

  /* --- Arranque: se mide con la letra ya puesta --------------------------- */
  const cargas = [
    document.fonts.load('600 31px "Inter"', "Aprende"),
    document.fonts.load('700 31px "Inter"', "10×"),
    ...TIPOS.map((f) => document.fonts.load(f.carga, "leyendo")),
  ];
  Promise.all(cargas).catch(() => {}).then(() => document.fonts.ready).then(() => {
    monta();
    tl.timeScale(RITMO);
    if (reducido) {
      tl.seek(S6 + 1.6).pause();
    } else {
      tl.play();
    }
    pinta();
  });
})();
<\/script>
`;export{t as n,n as t};