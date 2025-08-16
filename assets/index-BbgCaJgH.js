(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Y0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fh={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function DS(){if(w_)return Ho;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var C_;function US(){return C_||(C_=1,fh.exports=DS()),fh.exports}var ot=US(),hh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function LS(){if(D_)return le;D_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(L,$,xt){this.props=L,this.context=$,this.refs=A,this.updater=xt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function P(L,$,xt){this.props=L,this.context=$,this.refs=A,this.updater=xt||S}var U=P.prototype=new g;U.constructor=P,E(U,y.prototype),U.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function H(L,$,xt,yt,Ct,nt){return xt=nt.ref,{$$typeof:r,type:L,key:$,ref:xt!==void 0?xt:null,props:nt}}function V(L,$){return H(L.type,$,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return $[xt]})}var F=/\/+/g;function it(L,$){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):$.toString(36)}function lt(){}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(lt,lt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,$,xt,yt,Ct){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var pt=!1;if(L===null)pt=!0;else switch(nt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(L.$$typeof){case r:case t:pt=!0;break;case v:return pt=L._init,ft(pt(L._payload),$,xt,yt,Ct)}}if(pt)return Ct=Ct(L),pt=yt===""?"."+it(L,0):yt,w(Ct)?(xt="",pt!=null&&(xt=pt.replace(F,"$&/")+"/"),ft(Ct,$,xt,"",function(Yt){return Yt})):Ct!=null&&(C(Ct)&&(Ct=V(Ct,xt+(Ct.key==null||L&&L.key===Ct.key?"":(""+Ct.key).replace(F,"$&/")+"/")+pt)),$.push(Ct)),1;pt=0;var Mt=yt===""?".":yt+":";if(w(L))for(var Pt=0;Pt<L.length;Pt++)yt=L[Pt],nt=Mt+it(yt,Pt),pt+=ft(yt,$,xt,nt,Ct);else if(Pt=x(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(yt=L.next()).done;)yt=yt.value,nt=Mt+it(yt,Pt++),pt+=ft(yt,$,xt,nt,Ct);else if(nt==="object"){if(typeof L.then=="function")return ft(ct(L),$,xt,yt,Ct);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pt}function z(L,$,xt){if(L==null)return L;var yt=[],Ct=0;return ft(L,yt,"","",function(nt){return $.call(xt,nt,Ct++)}),yt}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return le.Children={map:z,forEach:function(L,$,xt){z(L,function(){$.apply(this,arguments)},xt)},count:function(L){var $=0;return z(L,function(){$++}),$},toArray:function(L){return z(L,function($){return $})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=P,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,$,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=E({},L.props),Ct=L.key,nt=void 0;if($!=null)for(pt in $.ref!==void 0&&(nt=void 0),$.key!==void 0&&(Ct=""+$.key),$)!I.call($,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&$.ref===void 0||(yt[pt]=$[pt]);var pt=arguments.length-2;if(pt===1)yt.children=xt;else if(1<pt){for(var Mt=Array(pt),Pt=0;Pt<pt;Pt++)Mt[Pt]=arguments[Pt+2];yt.children=Mt}return H(L.type,Ct,void 0,void 0,nt,yt)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,$,xt){var yt,Ct={},nt=null;if($!=null)for(yt in $.key!==void 0&&(nt=""+$.key),$)I.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ct[yt]=$[yt]);var pt=arguments.length-2;if(pt===1)Ct.children=xt;else if(1<pt){for(var Mt=Array(pt),Pt=0;Pt<pt;Pt++)Mt[Pt]=arguments[Pt+2];Ct.children=Mt}if(L&&L.defaultProps)for(yt in pt=L.defaultProps,pt)Ct[yt]===void 0&&(Ct[yt]=pt[yt]);return H(L,nt,void 0,void 0,null,Ct)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=C,le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},le.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},le.startTransition=function(L){var $=O.T,xt={};O.T=xt;try{var yt=L(),Ct=O.S;Ct!==null&&Ct(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,Y)}catch(nt){Y(nt)}finally{O.T=$}},le.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},le.use=function(L){return O.H.use(L)},le.useActionState=function(L,$,xt){return O.H.useActionState(L,$,xt)},le.useCallback=function(L,$){return O.H.useCallback(L,$)},le.useContext=function(L){return O.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,$){return O.H.useDeferredValue(L,$)},le.useEffect=function(L,$,xt){var yt=O.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(L,$)},le.useId=function(){return O.H.useId()},le.useImperativeHandle=function(L,$,xt){return O.H.useImperativeHandle(L,$,xt)},le.useInsertionEffect=function(L,$){return O.H.useInsertionEffect(L,$)},le.useLayoutEffect=function(L,$){return O.H.useLayoutEffect(L,$)},le.useMemo=function(L,$){return O.H.useMemo(L,$)},le.useOptimistic=function(L,$){return O.H.useOptimistic(L,$)},le.useReducer=function(L,$,xt){return O.H.useReducer(L,$,xt)},le.useRef=function(L){return O.H.useRef(L)},le.useState=function(L){return O.H.useState(L)},le.useSyncExternalStore=function(L,$,xt){return O.H.useSyncExternalStore(L,$,xt)},le.useTransition=function(){return O.H.useTransition()},le.version="19.1.1",le}var U_;function Gd(){return U_||(U_=1,hh.exports=LS()),hh.exports}var Ne=Gd();const Vd=Y0(Ne);var dh={exports:{}},Go={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function NS(){return L_||(L_=1,(function(r){function t(z,Z){var Y=z.length;z.push(Z);t:for(;0<Y;){var St=Y-1>>>1,L=z[St];if(0<l(L,Z))z[St]=Z,z[Y]=L,Y=St;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;t:for(var St=0,L=z.length,$=L>>>1;St<$;){var xt=2*(St+1)-1,yt=z[xt],Ct=xt+1,nt=z[Ct];if(0>l(yt,Y))Ct<L&&0>l(nt,yt)?(z[St]=nt,z[Ct]=Y,St=Ct):(z[St]=yt,z[xt]=Y,St=xt);else if(Ct<L&&0>l(nt,Y))z[St]=nt,z[Ct]=Y,St=Ct;else break t}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,x=3,S=!1,E=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=z)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function O(z){if(A=!1,w(z),!E)if(i(m)!==null)E=!0,I||(I=!0,it());else{var Z=i(p);Z!==null&&ft(O,Z.startTime-z)}}var I=!1,H=-1,V=5,C=-1;function D(){return y?!0:!(r.unstable_now()-C<V)}function F(){if(y=!1,I){var z=r.unstable_now();C=z;var Z=!0;try{t:{E=!1,A&&(A=!1,P(H),H=-1),S=!0;var Y=x;try{e:{for(w(z),_=i(m);_!==null&&!(_.expirationTime>z&&D());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var L=St(_.expirationTime<=z);if(z=r.unstable_now(),typeof L=="function"){_.callback=L,w(z),Z=!0;break e}_===i(m)&&s(m),w(z)}else s(m);_=i(m)}if(_!==null)Z=!0;else{var $=i(p);$!==null&&ft(O,$.startTime-z),Z=!1}}break t}finally{_=null,x=Y,S=!1}Z=void 0}}finally{Z?it():I=!1}}}var it;if(typeof U=="function")it=function(){U(F)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ct=lt.port2;lt.port1.onmessage=F,it=function(){ct.postMessage(null)}}else it=function(){g(F,0)};function ft(z,Z){H=g(function(){z(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return z()}finally{x=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return Z()}finally{x=Y}},r.unstable_scheduleCallback=function(z,Z,Y){var St=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:v++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>St?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(A?(P(H),H=-1):A=!0,ft(O,Y-St))):(z.sortIndex=L,t(m,z),E||S||(E=!0,I||(I=!0,it()))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var Z=x;return function(){var Y=x;x=Z;try{return z.apply(this,arguments)}finally{x=Y}}}})(mh)),mh}var N_;function OS(){return N_||(N_=1,ph.exports=NS()),ph.exports}var gh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function PS(){if(O_)return On;O_=1;var r=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},On.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.1.1",On}var P_;function zS(){if(P_)return gh.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=PS(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function BS(){if(z_)return Go;z_=1;var r=OS(),t=Gd(),i=zS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=f;break}if(T===o){M=!0,o=u,a=f;break}T=T.sibling}if(!M){for(T=f.child;T;){if(T===a){M=!0,a=f,o=u;break}if(T===o){M=!0,o=f,a=u;break}T=T.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ft=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},St=[],L=-1;function $(e){return{current:e}}function xt(e){0>L||(e.current=St[L],St[L]=null,L--)}function yt(e,n){L++,St[L]=e.current,e.current=n}var Ct=$(null),nt=$(null),pt=$(null),Mt=$(null);function Pt(e,n){switch(yt(pt,n),yt(nt,e),yt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ct),yt(Ct,e)}function Yt(){xt(Ct),xt(nt),xt(pt)}function ie(e){e.memoizedState!==null&&yt(Mt,e);var n=Ct.current,a=i_(n,e.type);n!==a&&(yt(nt,e),yt(Ct,a))}function ke(e){nt.current===e&&(xt(Ct),xt(nt)),Mt.current===e&&(xt(Mt),Po._currentValue=Y)}var ge=Object.prototype.hasOwnProperty,G=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,Me=r.unstable_requestPaint,Ft=r.unstable_now,Xe=r.unstable_getCurrentPriorityLevel,Ht=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,N=r.unstable_IdlePriority,b=r.log,tt=r.unstable_setDisableYieldValue,ht=null,vt=null;function ut(e){if(typeof b=="function"&&tt(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:qt,Rt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Et=256,Lt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Zt(o):(M&=T,M!==0?u=Zt(M):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=o&~f,T!==0?u=Zt(T):M!==0?u=Zt(M):a||(a=o&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=M&~a;0<a;){var dt=31-zt(a),gt=1<<dt;T[dt]=0,B[dt]=-1;var et=J[dt];if(et!==null)for(J[dt]=null,dt=0;dt<et.length;dt++){var at=et[dt];at!==null&&(at.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:M_(e.type))}function yi(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,tn="__reactProps$"+dn,Ni="__reactContainer$"+dn,Ns="__reactEvents$"+dn,ll="__reactListeners$"+dn,Os="__reactHandles$"+dn,qr="__reactResources$"+dn,Oi="__reactMarker$"+dn;function Ps(e){delete e[pn],delete e[tn],delete e[Ns],delete e[ll],delete e[Os]}function ki(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ni]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=o_(e);e!==null;){if(a=e[pn])return a;e=o_(e)}return n}e=a,a=e.parentNode}return null}function ma(e){if(e=e[pn]||e[Ni]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function es(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ga(e){var n=e[qr];return n||(n=e[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Oi]=!0}var cl=new Set,ul={};function R(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(ul[e]=n,e=0;e<n.length;e++)cl.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},j={};function Tt(e){return ge.call(j,e)?!0:ge.call(rt,e)?!1:st.test(e)?j[e]=!0:(rt[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,te;function Wt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var ue=!1;function be(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(at){var et=at}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(at){et=at}e.call(gt.prototype)}}else{try{throw Error()}catch(at){et=at}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(at){if(at&&et&&typeof at.stack=="string")return[at.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],T=f[1];if(M&&T){var B=M.split(`
`),J=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var dt=`
`+B[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Wt("Activity");default:return""}}function Oe(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _e(e){e._valueTracker||(e._valueTracker=Ye(e))}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function yn(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,o,u,f,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,fe(n)):a!=null?Ln(e,M,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function In(e,n,a,o,u,f,M,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ln(e,n,a){n==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function An(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function zs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ip(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&np(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&np(e,f,n[f])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return Cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Is=null;function ap(e){var n=ma(e);if(n&&(e=n.stateNode)){var a=e[tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[tn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":An(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var hu=!1;function sp(e,n,a){if(hu)return e(n,a);hu=!0;try{var o=e(n);return o}finally{if(hu=!1,(Bs!==null||Is!==null)&&(Kl(),Bs&&(n=Bs,e=Is,Is=Bs=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Xi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){du=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{du=!1}var _a=null,pu=null,hl=null;function rp(){if(hl)return hl;var e,n=pu,a=n.length,o,u="value"in _a?_a.value:_a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function op(){return!1}function Wn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:op,this.isPropagationStopped=op,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Wn(ns),Zr=v({},ns,{view:0,detail:0}),Dv=Wn(Zr),mu,gu,Kr,gl=v({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(mu=e.screenX-Kr.screenX,gu=e.screenY-Kr.screenY):gu=mu=0,Kr=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),lp=Wn(gl),Uv=v({},gl,{dataTransfer:0}),Lv=Wn(Uv),Nv=v({},Zr,{relatedTarget:0}),_u=Wn(Nv),Ov=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Wn(Ov),zv=v({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=Wn(zv),Iv=v({},ns,{data:0}),cp=Wn(Iv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gv[e])?!!n[e]:!1}function vu(){return Vv}var kv=v({},Zr,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=Wn(kv),Wv=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Wn(Wv),qv=v({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Yv=Wn(qv),jv=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Wn(jv),Kv=v({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Wn(Kv),Jv=v({},ns,{newState:0,oldState:0}),$v=Wn(Jv),tx=[9,13,27,32],xu=Xi&&"CompositionEvent"in window,Qr=null;Xi&&"documentMode"in document&&(Qr=document.documentMode);var ex=Xi&&"TextEvent"in window&&!Qr,fp=Xi&&(!xu||Qr&&8<Qr&&11>=Qr),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fs=!1;function nx(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function ix(e,n){if(Fs)return e==="compositionend"||!xu&&pp(e,n)?(e=rp(),hl=pu=_a=null,Fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ax[e.type]:n==="textarea"}function _p(e,n,a,o){Bs?Is?Is.push(o):Is=[o]:Bs=o,n=nc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function sx(e){Qg(e,0)}function _l(e){var n=es(e);if(Un(n))return e}function vp(e,n){if(e==="change")return n}var xp=!1;if(Xi){var Su;if(Xi){var yu="oninput"in document;if(!yu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),yu=typeof Sp.oninput=="function"}Su=yu}else Su=!1;xp=Su&&(!document.documentMode||9<document.documentMode)}function yp(){Jr&&(Jr.detachEvent("onpropertychange",Mp),$r=Jr=null)}function Mp(e){if(e.propertyName==="value"&&_l($r)){var n=[];_p(n,$r,e,fu(e)),sp(sx,n)}}function rx(e,n,a){e==="focusin"?(yp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Mp)):e==="focusout"&&yp()}function ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l($r)}function lx(e,n){if(e==="click")return _l(n)}function cx(e,n){if(e==="input"||e==="change")return _l(n)}function ux(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:ux;function to(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ge.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bp(e,n){var a=Ep(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function Tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mi(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fx=Xi&&"documentMode"in document&&11>=document.documentMode,Hs=null,Eu=null,eo=null,bu=!1;function Rp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Hs==null||Hs!==Mi(o)||(o=Hs,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=nc(Eu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Hs)))}function is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},Tu={},wp={};Xi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function as(e){if(Tu[e])return Tu[e];if(!Gs[e])return e;var n=Gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return Tu[e]=n[a];return e}var Cp=as("animationend"),Dp=as("animationiteration"),Up=as("animationstart"),hx=as("transitionrun"),dx=as("transitionstart"),px=as("transitioncancel"),Lp=as("transitionend"),Np=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Ei(e,n){Np.set(e,n),R(n,[e])}var Op=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Oe(n)},Op.set(e,n),n)}return{value:e,source:n,stack:Oe(n)}}var li=[],Vs=0,Ru=0;function vl(){for(var e=Vs,n=Ru=Vs=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Pp(a,u,f)}}function xl(e,n,a,o){li[Vs++]=e,li[Vs++]=n,li[Vs++]=a,li[Vs++]=o,Ru|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return xl(e,n,a,o),Sl(e)}function ks(e,n){return xl(e,null,null,n),Sl(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(e){if(50<Ro)throw Ro=0,Pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function mx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new mx(e,n,a,o)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Cu(e)&&(M=1);else if(typeof e=="string")M=_S(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=f,e;case E:return ss(a.children,u,f,n);case A:M=8,u|=24;break;case y:return e=$n(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case O:return e=$n(13,a,n,u),e.elementType=O,e.lanes=f,e;case I:return e=$n(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case U:M=10;break t;case P:M=9;break t;case w:M=11;break t;case H:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ss(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Du(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Uu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ws=[],qs=0,Ml=null,El=0,ci=[],ui=0,rs=null,qi=1,Yi="";function os(e,n){Ws[qs++]=El,Ws[qs++]=Ml,Ml=e,El=n}function Bp(e,n,a){ci[ui++]=qi,ci[ui++]=Yi,ci[ui++]=rs,rs=e;var o=qi;e=Yi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,qi=1<<32-zt(n)+u|a<<u|o,Yi=f+e}else qi=1<<f|a<<u|o,Yi=e}function Lu(e){e.return!==null&&(os(e,1),Bp(e,1,0))}function Nu(e){for(;e===Ml;)Ml=Ws[--qs],Ws[qs]=null,El=Ws[--qs],Ws[qs]=null;for(;e===rs;)rs=ci[--ui],ci[ui]=null,Yi=ci[--ui],ci[ui]=null,qi=ci[--ui],ci[ui]=null}var Fn=null,nn=null,Re=!1,ls=null,Pi=!1,Ou=Error(s(519));function cs(e){var n=Error(s(418,""));throw ao(oi(n,e)),Ou}function Ip(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[pn]=e,n[tn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)xe(Co[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),zs(n,o.value,o.defaultValue,o.children),_e(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||e_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=ic),n=!0):n=!1,n||cs(e)}function Fp(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Fn=Fn.return}}function no(e){if(e!==Fn)return!1;if(!Re)return Fp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&nn&&cs(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){nn=Ti(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}nn=null}}else n===27?(n=nn,Na(e.type)?(e=eh,eh=null,nn=e):nn=n):nn=Fn?Ti(e.stateNode.nextSibling):null;return!0}function io(){nn=Fn=null,Re=!1}function Hp(){var e=ls;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ls=null),e}function ao(e){ls===null?ls=[e]:ls.push(e)}var Pu=$(null),us=null,ji=null;function va(e,n,a){yt(Pu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Pu.current,xt(Pu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),zu(f.return,a,e),o||(M=null);break t}f=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),zu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function so(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var T=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===Mt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Gp(us,e)}function Tl(e,n){return us===null&&fs(e),Gp(e,n)}function Gp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(s(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var gx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_x=r.unstable_scheduleCallback,vx=r.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new gx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&_x(vx,function(){e.controller.abort()})}var oo=null,Fu=0,Ys=0,js=null;function xx(e,n){if(oo===null){var a=oo=[];Fu=0,Ys=Vf(),js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(Vp,Vp),n}function Vp(){if(--Fu===0&&oo!==null){js!==null&&(js.status="fulfilled");var e=oo;oo=null,Ys=0,js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xx(e,n),kp!==null&&kp(e,n)};var hs=$(null);function Hu(){var e=hs.current;return e!==null?e:We.pooledCache}function Al(e,n){n===null?yt(hs,hs.current):yt(hs,n.pool)}function Xp(){var e=Hu();return e===null?null:{parent:mn._currentValue,pool:e}}var lo=Error(s(460)),Wp=Error(s(474)),Rl=Error(s(542)),Gu={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wl(){}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(wl,wl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(wl,wl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw co=n,lo}}var co=null;function jp(){if(co===null)throw Error(s(459));var e=co;return co=null,e}function Zp(e){if(e===lo||e===Rl)throw Error(s(483))}var xa=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(e),Pp(e,null,a),n}return xl(e,o,n,a),Sl(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}function Xu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wu=!1;function fo(){if(Wu){var e=js;if(e!==null)throw e}}function ho(e,n,a,o){Wu=!1;var u=e.updateQueue;xa=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,J=B.next;B.next=null,M===null?f=J:M.next=J,M=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==M&&(T===null?dt.firstBaseUpdate=J:T.next=J,dt.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;M=0,dt=J=B=null,T=f;do{var et=T.lane&-536870913,at=et!==T.lane;if(at?(ye&et)===et:(o&et)===et){et!==0&&et===Ys&&(Wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;et=n;var Be=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){gt=ne.call(Be,gt,et);break t}gt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,et=typeof ne=="function"?ne.call(Be,gt,et):ne,et==null)break t;gt=v({},gt,et);break t;case 2:xa=!0}}et=T.callback,et!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[et]:at.push(et))}else at={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(J=dt=at,B=gt):dt=dt.next=at,M|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);dt===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ca|=M,e.lanes=M,e.memoizedState=gt}}function Kp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kp(a[e],n)}var Zs=$(null),Cl=$(0);function Jp(e,n){e=na,yt(Cl,e),yt(Zs,n),na=e|n.baseLanes}function qu(){yt(Cl,na),yt(Zs,Zs.current)}function Yu(){na=Cl.current,xt(Zs),xt(Cl)}var Ma=0,pe=null,Pe=null,un=null,Dl=!1,Ks=!1,ds=!1,Ul=0,po=0,Qs=null,yx=0;function sn(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,u,f){return Ma=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pm:zm,ds=!1,f=a(o,u),ds=!1,Ks&&(f=tm(n,a,o,u)),$p(e),f}function $p(e){z.H=Bl;var n=Pe!==null&&Pe.next!==null;if(Ma=0,un=Pe=pe=null,Dl=!1,po=0,Qs=null,n)throw Error(s(300));e===null||Mn||(e=e.dependencies,e!==null&&bl(e)&&(Mn=!0))}function tm(e,n,a,o){pe=e;var u=0;do{if(Ks&&(Qs=null),po=0,Ks=!1,25<=u)throw Error(s(301));if(u+=1,un=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=wx,f=n(a,o)}while(Ks);return f}function Mx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(pe.flags|=1024),n}function Ku(){var e=Ul!==0;return Ul=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Ma=0,un=Pe=pe=null,Ks=!1,po=Ul=0,Qs=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function fn(){if(Pe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,Pe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,Qs===null&&(Qs=[]),e=Yp(Qs,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pm:zm),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===U)return Nn(e)}throw Error(s(438,String(e)))}function tf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=fn();return ef(n,Pe,e)}function ef(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=M=null,B=null,J=n,dt=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ye&gt)===gt:(Ma&gt)===gt){var et=J.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Ys&&(dt=!0);else if((Ma&et)===et){J=J.next,et===Ys&&(dt=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=gt,M=f):B=B.next=gt,pe.lanes|=et,Ca|=et;gt=J.action,ds&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else et={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=et,M=f):B=B.next=et,pe.lanes|=gt,Ca|=gt;J=J.next}while(J!==null&&J!==n);if(B===null?M=f:B.next=T,!Jn(f,e.memoizedState)&&(Mn=!0,dt&&(a=js,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Jn(f,n.memoizedState)||(Mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function em(e,n,a){var o=pe,u=fn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Jn((Pe||u).memoizedState,a);M&&(u.memoizedState=a,Mn=!0),u=u.queue;var T=am.bind(null,o,u,e);if(go(2048,8,T,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Js(9,Ol(),im.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(Ma&124)!==0||nm(o,n,a)}return a}function nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=$u(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function im(e,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&rm(e)}function am(e,n,a){return a(function(){sm(n)&&rm(e)})}function sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function rm(e){var n=ks(e,2);n!==null&&ai(n,e,2)}function af(e){var n=qn();if(typeof e=="function"){var a=e;if(e=a(),ds){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function om(e,n,a,o){return e.baseState=a,ef(e,Pe,typeof o=="function"?o:Ki)}function Ex(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,M={};z.T=M;try{var T=a(u,o),B=z.S;B!==null&&B(M,T),cm(e,n,T)}catch(J){sf(e,n,J)}finally{z.T=f}}else try{f=a(u,o),cm(e,n,f)}catch(J){sf(e,n,J)}}function cm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){um(e,n,o)},function(o){return sf(e,n,o)}):um(e,n,a)}function um(e,n,a){n.status="fulfilled",n.value=a,fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,lm(e,a)))}function sf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==o)}e.action=null}function fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function dm(e,n){if(Re){var a=We.formState;if(a!==null){t:{var o=pe;if(Re){if(nn){e:{for(var u=nn,f=Pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=Ti(u.nextSibling),o=u.data==="F!";break t}}cs(o)}o=!1}o&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,pe,o),o.dispatch=a,o=af(!1),f=uf.bind(null,pe,!1,o.queue),o=qn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ex.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function pm(e){var n=fn();return mm(n,Pe,e)}function mm(e,n,a){if(n=ef(e,n,hm)[0],e=Nl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(M){throw M===lo?Rl:M}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Js(9,Ol(),bx.bind(null,u,a),null)),[o,f,e]}function bx(e,n){e.action=n}function gm(e){var n=fn(),a=Pe;if(a!==null)return mm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Js(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=$u(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ol(){return{destroy:void 0,resource:void 0}}function _m(){return fn().memoizedState}function Pl(e,n,a,o){var u=qn();o=o===void 0?null:o,pe.flags|=e,u.memoizedState=Js(1|n,Ol(),a,o)}function go(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Pe!==null&&o!==null&&ju(o,Pe.memoizedState.deps)?u.memoizedState=Js(n,f,a,o):(pe.flags|=e,u.memoizedState=Js(1|n,f,a,o))}function vm(e,n){Pl(8390656,8,e,n)}function xm(e,n){go(2048,8,e,n)}function Sm(e,n){return go(4,2,e,n)}function ym(e,n){return go(4,4,e,n)}function Mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Em(e,n,a){a=a!=null?a.concat([e]):null,go(4,4,Mm.bind(null,n,e),a)}function rf(){}function bm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Tm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=e(),ds){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(Ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=wg(),pe.lanes|=e,Ca|=e,a)}function Am(e,n,a,o){return Jn(a,n)?a:Zs.current!==null?(e=of(e,a,o),Jn(e,n)||(Mn=!0),e):(Ma&42)===0?(Mn=!0,e.memoizedState=a):(e=wg(),pe.lanes|=e,Ca|=e,n)}function Rm(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var M=z.T,T={};z.T=T,uf(e,!1,n,a);try{var B=u(),J=z.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Sx(B,o);_o(e,n,dt,ii(e))}else _o(e,n,o,ii(e))}catch(gt){_o(e,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{Z.p=f,z.T=M}}function Tx(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=wm(e).queue;Rm(e,u,n,Y,a===null?Tx:function(){return Cm(e),a(o)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=wm(e).next.queue;_o(e,n,{},ii())}function cf(){return Nn(Po)}function Dm(){return fn().memoizedState}function Um(){return fn().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Sa(a);var o=ya(n,e,a);o!==null&&(ai(o,n,a),uo(o,n,a)),n={cache:Iu()},e.payload=n;return}n=n.return}}function Rx(e,n,a){var o=ii();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Nm(n,a):(a=wu(e,n,a,o),a!==null&&(ai(a,e,o),Om(a,n,o)))}function Lm(e,n,a){var o=ii();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,T=f(M,a);if(u.hasEagerState=!0,u.eagerState=T,Jn(T,M))return xl(e,n,u,0),We===null&&vl(),!1}catch{}finally{}if(a=wu(e,n,u,o),a!==null)return ai(a,e,o),Om(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&ai(n,e,2)}function zl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Nm(e,n){Ks=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Om(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}var Bl={readContext:Nn,use:Ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Pm={readContext:Nn,use:Ll,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=qn();n=n===void 0?null:n;var o=e();if(ds){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=qn();if(a!==void 0){var u=a(n);if(ds){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Rx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=Lm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=qn();return of(a,e,n)},useTransition:function(){var e=af(!1);return e=Rm.bind(null,pe,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=qn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(ye&124)!==0||nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,vm(am.bind(null,o,f,e),[e]),o.flags|=2048,Js(9,Ol(),im.bind(null,o,f,a,n),null),a},useId:function(){var e=qn(),n=We.identifierPrefix;if(Re){var a=Yi,o=qi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=yx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:dm,useActionState:dm,useOptimistic:function(e){var n=qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:tf,useCacheRefresh:function(){return qn().memoizedState=Ax.bind(null,pe)}},zm={readContext:Nn,use:Ll,useCallback:bm,useContext:Nn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:ym,useMemo:Tm,useReducer:Nl,useRef:_m,useState:function(){return Nl(Ki)},useDebugValue:rf,useDeferredValue:function(e,n){var a=fn();return Am(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Nl(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:cf,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=fn();return om(a,Pe,e,n)},useMemoCache:tf,useCacheRefresh:Um},wx={readContext:Nn,use:Ll,useCallback:bm,useContext:Nn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:ym,useMemo:Tm,useReducer:nf,useRef:_m,useState:function(){return nf(Ki)},useDebugValue:rf,useDeferredValue:function(e,n){var a=fn();return Pe===null?of(a,e,n):Am(a,Pe.memoizedState,e,n)},useTransition:function(){var e=nf(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:cf,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var a=fn();return Pe!==null?om(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Um},$s=null,vo=0;function Il(e){var n=vo;return vo+=1,$s===null&&($s=[]),Yp($s,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Fl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bm(e){var n=e._init;return n(e._payload)}function Im(e){function n(q,k){if(e){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Wi(q,k),q.index=0,q.sibling=null,q}function f(q,k,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,Q,mt){return k===null||k.tag!==6?(k=Du(Q,q.mode,mt),k.return=q,k):(k=u(k,Q),k.return=q,k)}function B(q,k,Q,mt){var Gt=Q.type;return Gt===E?dt(q,k,Q.props.children,mt,Q.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&Bm(Gt)===k.type)?(k=u(k,Q.props),xo(k,Q),k.return=q,k):(k=yl(Q.type,Q.key,Q.props,null,q.mode,mt),xo(k,Q),k.return=q,k)}function J(q,k,Q,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Uu(Q,q.mode,mt),k.return=q,k):(k=u(k,Q.children||[]),k.return=q,k)}function dt(q,k,Q,mt,Gt){return k===null||k.tag!==7?(k=ss(Q,q.mode,mt,Gt),k.return=q,k):(k=u(k,Q),k.return=q,k)}function gt(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Du(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=yl(k.type,k.key,k.props,null,q.mode,Q),xo(Q,k),Q.return=q,Q;case S:return k=Uu(k,q.mode,Q),k.return=q,k;case V:var mt=k._init;return k=mt(k._payload),gt(q,k,Q)}if(ft(k)||it(k))return k=ss(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return gt(q,Il(k),Q);if(k.$$typeof===U)return gt(q,Tl(q,k),Q);Fl(q,k)}return null}function et(q,k,Q,mt){var Gt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(q,k,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Gt?B(q,k,Q,mt):null;case S:return Q.key===Gt?J(q,k,Q,mt):null;case V:return Gt=Q._init,Q=Gt(Q._payload),et(q,k,Q,mt)}if(ft(Q)||it(Q))return Gt!==null?null:dt(q,k,Q,mt,null);if(typeof Q.then=="function")return et(q,k,Il(Q),mt);if(Q.$$typeof===U)return et(q,k,Tl(q,Q),mt);Fl(q,Q)}return null}function at(q,k,Q,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(Q)||null,T(k,q,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return q=q.get(mt.key===null?Q:mt.key)||null,B(k,q,mt,Gt);case S:return q=q.get(mt.key===null?Q:mt.key)||null,J(k,q,mt,Gt);case V:var me=mt._init;return mt=me(mt._payload),at(q,k,Q,mt,Gt)}if(ft(mt)||it(mt))return q=q.get(Q)||null,dt(k,q,mt,Gt,null);if(typeof mt.then=="function")return at(q,k,Q,Il(mt),Gt);if(mt.$$typeof===U)return at(q,k,Q,Tl(k,mt),Gt);Fl(k,mt)}return null}function ne(q,k,Q,mt){for(var Gt=null,me=null,jt=k,ee=k=0,bn=null;jt!==null&&ee<Q.length;ee++){jt.index>ee?(bn=jt,jt=null):bn=jt.sibling;var Te=et(q,jt,Q[ee],mt);if(Te===null){jt===null&&(jt=bn);break}e&&jt&&Te.alternate===null&&n(q,jt),k=f(Te,k,ee),me===null?Gt=Te:me.sibling=Te,me=Te,jt=bn}if(ee===Q.length)return a(q,jt),Re&&os(q,ee),Gt;if(jt===null){for(;ee<Q.length;ee++)jt=gt(q,Q[ee],mt),jt!==null&&(k=f(jt,k,ee),me===null?Gt=jt:me.sibling=jt,me=jt);return Re&&os(q,ee),Gt}for(jt=o(jt);ee<Q.length;ee++)bn=at(jt,q,ee,Q[ee],mt),bn!==null&&(e&&bn.alternate!==null&&jt.delete(bn.key===null?ee:bn.key),k=f(bn,k,ee),me===null?Gt=bn:me.sibling=bn,me=bn);return e&&jt.forEach(function(Ia){return n(q,Ia)}),Re&&os(q,ee),Gt}function $t(q,k,Q,mt){if(Q==null)throw Error(s(151));for(var Gt=null,me=null,jt=k,ee=k=0,bn=null,Te=Q.next();jt!==null&&!Te.done;ee++,Te=Q.next()){jt.index>ee?(bn=jt,jt=null):bn=jt.sibling;var Ia=et(q,jt,Te.value,mt);if(Ia===null){jt===null&&(jt=bn);break}e&&jt&&Ia.alternate===null&&n(q,jt),k=f(Ia,k,ee),me===null?Gt=Ia:me.sibling=Ia,me=Ia,jt=bn}if(Te.done)return a(q,jt),Re&&os(q,ee),Gt;if(jt===null){for(;!Te.done;ee++,Te=Q.next())Te=gt(q,Te.value,mt),Te!==null&&(k=f(Te,k,ee),me===null?Gt=Te:me.sibling=Te,me=Te);return Re&&os(q,ee),Gt}for(jt=o(jt);!Te.done;ee++,Te=Q.next())Te=at(jt,q,ee,Te.value,mt),Te!==null&&(e&&Te.alternate!==null&&jt.delete(Te.key===null?ee:Te.key),k=f(Te,k,ee),me===null?Gt=Te:me.sibling=Te,me=Te);return e&&jt.forEach(function(CS){return n(q,CS)}),Re&&os(q,ee),Gt}function Be(q,k,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Gt=Q.key;k!==null;){if(k.key===Gt){if(Gt=Q.type,Gt===E){if(k.tag===7){a(q,k.sibling),mt=u(k,Q.props.children),mt.return=q,q=mt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&Bm(Gt)===k.type){a(q,k.sibling),mt=u(k,Q.props),xo(mt,Q),mt.return=q,q=mt;break t}a(q,k);break}else n(q,k);k=k.sibling}Q.type===E?(mt=ss(Q.props.children,q.mode,mt,Q.key),mt.return=q,q=mt):(mt=yl(Q.type,Q.key,Q.props,null,q.mode,mt),xo(mt,Q),mt.return=q,q=mt)}return M(q);case S:t:{for(Gt=Q.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(q,k.sibling),mt=u(k,Q.children||[]),mt.return=q,q=mt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}mt=Uu(Q,q.mode,mt),mt.return=q,q=mt}return M(q);case V:return Gt=Q._init,Q=Gt(Q._payload),Be(q,k,Q,mt)}if(ft(Q))return ne(q,k,Q,mt);if(it(Q)){if(Gt=it(Q),typeof Gt!="function")throw Error(s(150));return Q=Gt.call(Q),$t(q,k,Q,mt)}if(typeof Q.then=="function")return Be(q,k,Il(Q),mt);if(Q.$$typeof===U)return Be(q,k,Tl(q,Q),mt);Fl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(q,k.sibling),mt=u(k,Q),mt.return=q,q=mt):(a(q,k),mt=Du(Q,q.mode,mt),mt.return=q,q=mt),M(q)):a(q,k)}return function(q,k,Q,mt){try{vo=0;var Gt=Be(q,k,Q,mt);return $s=null,Gt}catch(jt){if(jt===lo||jt===Rl)throw jt;var me=$n(29,jt,null,q.mode);return me.lanes=mt,me.return=q,me}finally{}}}var tr=Im(!0),Fm=Im(!1),fi=$(null),zi=null;function Ea(e){var n=e.alternate;yt(gn,gn.current&1),yt(fi,e),zi===null&&(n===null||Zs.current!==null||n.memoizedState!==null)&&(zi=e)}function Hm(e){if(e.tag===22){if(yt(gn,gn.current),yt(fi,e),zi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(zi=e)}}else ba()}function ba(){yt(gn,gn.current),yt(fi,fi.current)}function Qi(e){xt(fi),zi===e&&(zi=null),xt(gn)}var gn=$(0);function Hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||th(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(ai(n,e,a),uo(n,e,a))}};function Gm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function Vm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function ps(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function km(e){Gl(e)}function Xm(e){console.error(e)}function Wm(e){Gl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function Ym(e){return e=Sa(e),e.tag=3,e}function jm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){qm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){qm(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Cx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&so(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 13:return zi===null?Bf():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,u)),!1;case 22:return a.flags|=65536,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,u)),!1}throw Error(s(435,a.tag))}return Ff(e,o,u),Bf(),!1}if(Re)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(e=Error(s(422),{cause:o}),ao(oi(e,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),ao(oi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=oi(o,a),u=df(e.stateNode,o,u),Xu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=oi(f,a),Ao===null?Ao=[f]:Ao.push(f),an!==4&&(an=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=df(a.stateNode,o,e),Xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),jm(u,e,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var Zm=Error(s(461)),Mn=!1;function Rn(e,n,a,o){n.child=e===null?Fm(n,null,a,o):tr(n,e.child,a,o)}function Km(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return fs(n),o=Zu(e,n,a,M,f,u),T=Ku(),e!==null&&!Mn?(Qu(e,n,u),Ji(e,n,u)):(Re&&T&&Lu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function Qm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(e,n,f,o,u)):(e=yl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!yf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=Wi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=f,yf(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return pf(e,n,a,o,u)}function $m(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return tg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):qu(),Hm(n);else return n.lanes=n.childLanes=536870912,tg(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Al(n,f.cachePool),Jp(n,f),ba(),n.memoizedState=null):(e!==null&&Al(n,null),qu(),ba());return Rn(e,n,u,a),n.child}function tg(e,n,a,o){var u=Hu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Al(n,null),qu(),Hm(n),e!==null&&so(e,n,o,!0),null}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function pf(e,n,a,o,u){return fs(n),a=Zu(e,n,a,o,void 0,u),o=Ku(),e!==null&&!Mn?(Qu(e,n,u),Ji(e,n,u)):(Re&&o&&Lu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function eg(e,n,a,o,u,f){return fs(n),n.updateQueue=null,a=tm(n,o,a,u),$p(e),o=Ku(),e!==null&&!Mn?(Qu(e,n,f),Ji(e,n,f)):(Re&&o&&Lu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function ng(e,n,a,o,u){if(fs(n),n.stateNode===null){var f=Xs,M=a.contextType;typeof M=="object"&&M!==null&&(f=Nn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Vu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Nn(M):Xs,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ff(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&hf.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=ps(a,T);f.props=B;var J=f.context,dt=a.contextType;M=Xs,typeof dt=="object"&&dt!==null&&(M=Nn(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==M)&&Vm(n,f,o,M),xa=!1;var et=n.memoizedState;f.state=et,ho(n,o,f,u),fo(),J=n.memoizedState,T||et!==J||xa?(typeof gt=="function"&&(ff(n,a,gt,o),J=n.memoizedState),(B=xa||Gm(n,a,B,o,et,J,M))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=M,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ku(e,n),M=n.memoizedProps,dt=ps(a,M),f.props=dt,gt=n.pendingProps,et=f.context,J=a.contextType,B=Xs,typeof J=="object"&&J!==null&&(B=Nn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==gt||et!==B)&&Vm(n,f,o,B),xa=!1,et=n.memoizedState,f.state=et,ho(n,o,f,u),fo();var at=n.memoizedState;M!==gt||et!==at||xa||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof T=="function"&&(ff(n,a,T,o),at=n.memoizedState),(dt=xa||Gm(n,a,dt,o,et,at,B)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=B,o=dt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=tr(n,e.child,null,u),n.child=tr(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ji(e,n,u),e}function ig(e,n,a,o){return io(),n.flags|=256,Rn(e,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:Xp()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function ag(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Ea(n):ba(),Re){var T=nn,B;if(B=T){t:{for(B=T,T=Pi;B.nodeType!==8;){if(!T){T=null;break t}if(B=Ti(B.nextSibling),B===null){T=null;break t}}T=B}T!==null?(n.memoizedState={dehydrated:T,treeContext:rs!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},B=$n(18,null,null,0),B.stateNode=T,B.return=n,n.child=B,Fn=n,nn=null,B=!0):B=!1}B||cs(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return th(T)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return T=o.children,o=o.fallback,u?(ba(),u=n.mode,T=Xl({mode:"hidden",children:T},u),o=ss(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=gf(a),u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ea(n),vf(n,T))}if(B=e.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(ba(),n.child=e.child,n.flags|=128,n=null):(ba(),u=o.fallback,T=n.mode,o=Xl({mode:"visible",children:o.children},T),u=ss(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,tr(n,e.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=_f(e,M,a),n.memoizedState=mf,n=u);else if(Ea(n),th(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(s(419)),o.stack="",o.digest=M,ao({value:o,source:null,stack:null}),n=xf(e,n,a)}else if(Mn||so(e,n,a,!1),M=(a&e.childLanes)!==0,Mn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,ks(e,o),ai(M,e,o),Zm;T.data==="$?"||Bf(),n=xf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,nn=Ti(T.nextSibling),Fn=n,Re=!0,ls=null,Pi=!1,e!==null&&(ci[ui++]=qi,ci[ui++]=Yi,ci[ui++]=rs,qi=e.id,Yi=e.overflow,rs=n),n=vf(n,o.children),n.flags|=4096);return n}return u?(ba(),u=o.fallback,T=n.mode,B=e.child,J=B.sibling,o=Wi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?u=Wi(J,u):(u=ss(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=gf(a):(B=T.cachePool,B!==null?(J=mn._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=Xp(),T={baseLanes:T.baseLanes|a,cachePool:B}),u.memoizedState=T,u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ea(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=$n(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,n,a){return tr(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function Sf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Rn(e,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,a,n);else if(e.tag===19)sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Hl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Hl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Sf(n,!0,a,null,f);break;case"together":Sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(so(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Dx(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),va(n,mn,e.memoizedState.cache),io();break;case 27:case 5:ie(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(e,n,a):(Ea(n),e=Ji(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(so(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,$m(e,n,a);case 24:va(n,mn,e.memoizedState.cache)}return Ji(e,n,a)}function og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return Mn=!1,Dx(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Re&&(n.flags&1048576)!==0&&Bp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(e=ps(o,e),n.tag=1,n=ng(null,n,o,e,a)):(n.tag=0,n=pf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=Km(null,n,o,e,a);break t}else if(u===H){n.tag=14,n=Qm(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(s(306,n,""))}}return n;case 0:return pf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),ng(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ku(e,n),ho(n,o,null,a);var M=n.memoizedState;if(o=M.cache,va(n,mn,o),o!==f.cache&&Bu(n,[mn],a,!0),fo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ig(e,n,o,a);break t}else if(o!==u){u=oi(Error(s(424)),n),ao(u),n=ig(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ti(e.firstChild),Fn=n,Re=!0,ls=null,Pi=!0,a=Fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(io(),o===u){n=Ji(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=f_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=ac(pt.current).createElement(a),o[pn]=n,o[tn]=e,Cn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=f_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Re&&(o=n.stateNode=l_(n.type,n.pendingProps,pt.current),Fn=n,Pi=!0,u=nn,Na(n.type)?(eh=u,nn=Ti(o.firstChild)):nn=u),Rn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=nn)&&(o=aS(o,n.type,n.pendingProps,Pi),o!==null?(n.stateNode=o,Fn=n,nn=Ti(o.firstChild),Pi=!1,u=!0):u=!1),u||cs(n)),ie(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Qf(u,f)?o=null:M!==null&&Qf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,Mx,null,null,a),Po._currentValue=u),kl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=nn)&&(a=sS(a,n.pendingProps,Pi),a!==null?(n.stateNode=a,Fn=n,nn=null,e=!0):e=!1),e||cs(n)),null;case 13:return ag(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=tr(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fs(n),u=Nn(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Xl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Wi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return $m(e,n,a);case 24:return fs(n),o=Nn(mn),e===null?(u=Hu(),u===null&&(u=We,f=Iu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Vu(n),va(n,mn,u)):((e.lanes&a)!==0&&(ku(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,mn,o)):(o=f.cache,va(n,mn,o),o!==u.cache&&Bu(n,[mn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(e){e.flags|=4}function lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g_(n)){if(n=fi.current,n!==null&&((ye&4194048)===ye?zi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==zi))throw co=Gu,Wp;e.flags|=8192}}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,ar|=n)}function So(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ux(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(mn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(no(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hp())),Je(n),null;case 26:return a=n.memoizedState,e===null?($i(n),a!==null?(Je(n),lg(n,a)):(Je(n),n.flags&=-16777217)):a?a!==e.memoizedState?($i(n),Je(n),lg(n,a)):(Je(n),n.flags&=-16777217):(e.memoizedProps!==o&&$i(n),Je(n),n.flags&=-16777217),null;case 27:ke(n),a=pt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=Ct.current,no(n)?Ip(n):(e=l_(u,o,a),n.stateNode=e,$i(n))}return Je(n),null;case 5:if(ke(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(e=Ct.current,no(n))Ip(n);else{switch(u=ac(pt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[pn]=n,e[tn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Cn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$i(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=pt.current,no(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||e_(e.nodeValue,a)),e||cs(n)}else e=ac(e).createTextNode(o),e[pn]=n,n.stateNode=e}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=no(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Hp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Je(n),null;case 4:return Yt(),e===null&&qf(n.stateNode.containerInfo),Je(n),null;case 10:return Zi(n.type),Je(n),null;case 19:if(xt(gn),u=n.memoizedState,u===null)return Je(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)So(u,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Hl(e),f!==null){for(n.flags|=128,So(u,!1),e=f.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return yt(gn,gn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>jl&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304)}else{if(!o)if(e=Hl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),So(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Re)return Je(n),null}else 2*Ft()-u.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=gn.current,yt(gn,o?e&1|2:e&1),n):(Je(n),null);case 22:case 23:return Qi(n),Yu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(mn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Lx(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(mn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 13:if(Qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(gn),null;case 4:return Yt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Qi(n),Yu(),e!==null&&xt(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(mn),null;case 25:return null;default:return null}}function cg(e,n){switch(Nu(n),n.tag){case 3:Zi(mn),Yt();break;case 26:case 27:case 5:ke(n);break;case 4:Yt();break;case 13:Qi(n);break;case 19:xt(gn);break;case 10:Zi(n.type);break;case 22:case 23:Qi(n),Yu(),e!==null&&xt(hs);break;case 24:Zi(mn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){Ve(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var B=a,J=T;try{J()}catch(dt){Ve(u,B,dt)}}}o=o.next}while(o!==f)}}catch(dt){Ve(n,n.return,dt)}}function ug(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qp(n,a)}catch(o){Ve(e,e.return,o)}}}function fg(e,n,a){a.props=ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Mf(e,n,a){try{var o=e.stateNode;$x(o,e.type,a,n),o[tn]=n}catch(u){Ve(e,e.return,u)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ic));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bf(e,n,a),e=e.sibling;e!==null;)bf(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function pg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[pn]=e,n[tn]=a}catch(f){Ve(e,e.return,f)}}var ta=!1,rn=!1,Tf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Nx(e,n){if(e=e.containerInfo,Zf=uc,e=Ap(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,T=-1,B=-1,J=0,dt=0,gt=e,et=null;e:for(;;){for(var at;gt!==a||u!==0&&gt.nodeType!==3||(T=M+u),gt!==f||o!==0&&gt.nodeType!==3||(B=M+o),gt.nodeType===3&&(M+=gt.nodeValue.length),(at=gt.firstChild)!==null;)et=gt,gt=at;for(;;){if(gt===e)break e;if(et===a&&++J===u&&(T=M),et===f&&++dt===o&&(B=M),(at=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=at}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},uc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=ps(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function gg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),o&4&&yo(5,a);break;case 1:if(Aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&ug(a),o&512&&Mo(a,a.return);break;case 3:if(Aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&pg(a);case 26:case 5:Aa(e,a),n===null&&o&4&&hg(a),o&512&&Mo(a,a.return);break;case 12:Aa(e,a);break;case 13:Aa(e,a),o&4&&xg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),rS(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||rn,u=ta;var f=rn;ta=o,(rn=n)&&!f?Ra(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),ta=u,rn=f}break;case 30:break;default:Aa(e,a)}}function _g(e){var n=e.alternate;n!==null&&(e.alternate=null,_g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ps(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Yn=!1;function ea(e,n,a){for(a=a.child;a!==null;)vg(e,n,a),a=a.sibling}function vg(e,n,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:rn||Bi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Bi(a,n);var o=Ze,u=Yn;Na(a.type)&&(Ze=a.stateNode,Yn=!1),ea(e,n,a),Uo(a.stateNode),Ze=o,Yn=u;break;case 5:rn||Bi(a,n);case 6:if(o=Ze,u=Yn,Ze=null,ea(e,n,a),Ze=o,Yn=u,Ze!==null)if(Yn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:Ze!==null&&(Yn?(e=Ze,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fo(e)):r_(Ze,a.stateNode));break;case 4:o=Ze,u=Yn,Ze=a.stateNode.containerInfo,Yn=!0,ea(e,n,a),Ze=o,Yn=u;break;case 0:case 11:case 14:case 15:rn||Ta(2,a,n),rn||Ta(4,a,n),ea(e,n,a);break;case 1:rn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,ea(e,n,a),rn=o;break;default:ea(e,n,a)}}function xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(a){Ve(n,n.return,a)}}function Ox(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mg),n;default:throw Error(s(435,e.tag))}}function Af(e,n){var a=Ox(e);n.forEach(function(o){var u=kx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){Ze=T.stateNode,Yn=!1;break t}break;case 5:Ze=T.stateNode,Yn=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,Yn=!0;break t}T=T.return}if(Ze===null)throw Error(s(160));vg(f,M,u),Ze=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sg(n,e),n=n.sibling}var bi=null;function Sg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(Ta(3,e,e.return),yo(3,e),Ta(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(rn||a===null||Bi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(ti(n,e),ei(e),o&512&&(rn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Oi]||f[pn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[pn]=e,cn(f),o=f;break t;case"link":var M=p_("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(f=M[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=p_("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(f=M[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[pn]=e,cn(f),o=f}e.stateNode=o}else m_(u,e.type,e.stateNode);else e.stateNode=d_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?m_(u,e.type,e.stateNode):d_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(rn||a===null||Bi(a,a.return)),a!==null&&o&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(rn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Xn(u,"")}catch(at){Ve(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Ve(e,e.return,at)}}break;case 3:if(oc=null,u=bi,bi=sc(n.containerInfo),ti(n,e),bi=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fo(n.containerInfo)}catch(at){Ve(e,e.return,at)}Tf&&(Tf=!1,yg(e));break;case 4:o=bi,bi=sc(e.stateNode.containerInfo),ti(n,e),ei(e),bi=o;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ta,dt=rn;if(ta=J||u,rn=dt||B,ti(n,e),rn=dt,ta=J,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ta||rn||ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=B.stateNode;var gt=B.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(at){Ve(B,B.return,at)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(at){Ve(B,B.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Af(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Ef(e);ql(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Xn(M,""),a.flags&=-33);var T=Ef(e);ql(e,T,M);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Ef(e);bf(e,J,B);break;default:throw Error(s(161))}}catch(dt){Ve(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(e,n.alternate,n),n=n.sibling}function ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),ms(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),ms(n);break;case 27:Uo(n.stateNode);case 26:case 5:Bi(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}e=e.sibling}}function Ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ra(u,f,a),yo(4,f);break;case 1:if(Ra(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ve(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Kp(B[u],T)}catch(J){Ve(o,o.return,J)}}a&&M&64&&ug(f),Mo(f,f.return);break;case 27:pg(f);case 26:case 5:Ra(u,f,a),a&&o===null&&M&4&&hg(f),Mo(f,f.return);break;case 12:Ra(u,f,a);break;case 13:Ra(u,f,a),a&&M&4&&xg(u,f);break;case 22:f.memoizedState===null&&Ra(u,f,a),Mo(f,f.return);break;case 30:break;default:Ra(u,f,a)}n=n.sibling}}function Rf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ii(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,a,o),n=n.sibling}function Mg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ii(e,n,a,o);break;case 3:Ii(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ii(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,T=f.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ve(n,n.return,B)}}else Ii(e,n,a,o);break;case 13:Ii(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ii(e,n,a,o):Eo(e,n):f._visibility&2?Ii(e,n,a,o):(f._visibility|=2,er(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Rf(M,n);break;case 24:Ii(e,n,a,o),u&2048&&wf(n.alternate,n);break;default:Ii(e,n,a,o)}}function er(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,T=a,B=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:er(f,M,T,B,u),yo(8,M);break;case 23:break;case 22:var dt=M.stateNode;M.memoizedState!==null?dt._visibility&2?er(f,M,T,B,u):Eo(f,M):(dt._visibility|=2,er(f,M,T,B,u)),u&&J&2048&&Rf(M.alternate,M);break;case 24:er(f,M,T,B,u),u&&J&2048&&wf(M.alternate,M);break;default:er(f,M,T,B,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Rf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&wf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function nr(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 26:nr(e),e.flags&bo&&e.memoizedState!==null&&xS(bi,e.memoizedState,e.memoizedProps);break;case 5:nr(e);break;case 3:case 4:var n=bi;bi=sc(e.stateNode.containerInfo),nr(e),bi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,nr(e),bo=n):nr(e));break;default:nr(e)}}function bg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Ag(o,e)}bg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tg(e),e=e.sibling}function Tg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):To(e);break;default:To(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Ag(o,e)}bg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function Ag(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(_g(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var Px={getCacheForType:function(e){var n=Nn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},zx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,We=null,ve=null,ye=0,Le=0,ni=null,wa=!1,ir=!1,Cf=!1,na=0,an=0,Ca=0,gs=0,Df=0,hi=0,ar=0,Ao=null,jn=null,Uf=!1,Lf=0,jl=1/0,Zl=null,Da=null,wn=0,Ua=null,sr=null,rr=0,Nf=0,Of=null,Rg=null,Ro=0,Pf=null;function ii(){if((Ue&2)!==0&&ye!==0)return ye&-ye;if(z.T!==null){var e=Ys;return e!==0?e:Vf()}return Ee()}function wg(){hi===0&&(hi=(ye&536870912)===0||Re?X():536870912);var e=fi.current;return e!==null&&(e.flags|=32),hi}function ai(e,n,a){(e===We&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(or(e,0),La(e,ye,hi,!1)),Bt(e,a),((Ue&2)===0||e!==We)&&(e===We&&((Ue&2)===0&&(gs|=a),an===4&&La(e,ye,hi,!1)),Fi(e))}function Cg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?Fx(e,n):If(e,n,!0),f=o;do{if(u===0){ir&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Bx(a)){u=If(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=Ao;var B=T.current.memoizedState.isDehydrated;if(B&&(or(T,M).flags|=256),M=If(T,M,!1),M!==2){if(Cf&&!B){T.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){or(e,0),La(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,hi,!wa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Lf+300-Ft(),10<u)){if(La(o,n,hi,!wa),kt(o,0,!0)!==0)break t;o.timeoutHandle=a_(Dg.bind(null,o,a,jn,Zl,Uf,n,hi,gs,ar,wa,f,2,-0,0),u);break t}Dg(o,a,jn,Zl,Uf,n,hi,gs,ar,wa,f,0,-0,0)}}break}while(!0);Fi(e)}function Dg(e,n,a,o,u,f,M,T,B,J,dt,gt,et,at){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:vS},Eg(n),gt=SS(),gt!==null)){e.cancelPendingCommit=gt(Bg.bind(null,e,n,f,a,o,u,M,T,B,dt,1,et,at)),La(e,f,M,!J);return}Bg(e,n,f,a,o,u,M,T,B)}function Bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~Df,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&_t(e,a,n)}function Kl(){return(Ue&6)===0?(wo(0),!1):!0}function zf(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,ji=us=null,Ju(e),$s=null,vo=0,e=ve;for(;e!==null;)cg(e.alternate,e),e=e.return;ve=null}}function or(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zf(),We=e,ve=a=Wi(e.current,null),ye=n,Le=0,ni=null,wa=!1,ir=Dt(e,n),Cf=!1,ar=hi=Df=gs=Ca=an=0,jn=Ao=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return na=n,vl(),a}function Ug(e,n){pe=null,z.H=Bl,n===lo||n===Rl?(n=jp(),Le=3):n===Wp?(n=jp(),Le=4):Le=n===Zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,ve===null&&(an=1,Vl(e,oi(n,e.current)))}function Lg(){var e=z.H;return z.H=Bl,e===null?Bl:e}function Ng(){var e=z.A;return z.A=Px,e}function Bf(){an=4,wa||(ye&4194048)!==ye&&fi.current!==null||(ir=!0),(Ca&134217727)===0&&(gs&134217727)===0||We===null||La(We,ye,hi,!1)}function If(e,n,a){var o=Ue;Ue|=2;var u=Lg(),f=Ng();(We!==e||ye!==n)&&(Zl=null,or(e,n)),n=!1;var M=an;t:do try{if(Le!==0&&ve!==null){var T=ve,B=ni;switch(Le){case 8:zf(),M=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var J=Le;if(Le=0,ni=null,lr(e,T,B,J),a&&ir){M=0;break t}break;default:J=Le,Le=0,ni=null,lr(e,T,B,J)}}Ix(),M=an;break}catch(dt){Ug(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ji=us=null,Ue=o,z.H=u,z.A=f,ve===null&&(We=null,ye=0,vl()),M}function Ix(){for(;ve!==null;)Og(ve)}function Fx(e,n){var a=Ue;Ue|=2;var o=Lg(),u=Ng();We!==e||ye!==n?(Zl=null,jl=Ft()+500,or(e,n)):ir=Dt(e,n);t:do try{if(Le!==0&&ve!==null){n=ve;var f=ni;e:switch(Le){case 1:Le=0,ni=null,lr(e,n,f,1);break;case 2:case 9:if(qp(f)){Le=0,ni=null,Pg(n);break}n=function(){Le!==2&&Le!==9||We!==e||(Le=7),Fi(e)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:qp(f)?(Le=0,ni=null,Pg(n)):(Le=0,ni=null,lr(e,n,f,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var T=ve;if(!M||g_(M)){Le=0,ni=null;var B=T.sibling;if(B!==null)ve=B;else{var J=T.return;J!==null?(ve=J,Ql(J)):ve=null}break e}}Le=0,ni=null,lr(e,n,f,5);break;case 6:Le=0,ni=null,lr(e,n,f,6);break;case 8:zf(),an=6;break t;default:throw Error(s(462))}}Hx();break}catch(dt){Ug(e,dt)}while(!0);return ji=us=null,z.H=o,z.A=u,Ue=a,ve!==null?0:(We=null,ye=0,vl(),an)}function Hx(){for(;ve!==null&&!Qt();)Og(ve)}function Og(e){var n=og(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?Ql(e):ve=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Ju(n);default:cg(a,n),n=ve=zp(n,na),n=og(a,n,na)}e.memoizedProps=e.pendingProps,n===null?Ql(e):ve=n}function lr(e,n,a,o){ji=us=null,Ju(n),$s=null,vo=0;var u=n.return;try{if(Cx(e,u,n,a,ye)){an=1,Vl(e,oi(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;an=1,Vl(e,oi(a,e.current)),ve=null;return}n.flags&32768?(Re||o===1?e=!0:ir||(ye&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),zg(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){zg(n,wa);return}e=n.return;var a=Ux(n.alternate,n,na);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);an===0&&(an=5)}function zg(e,n){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);an=6,ve=null}function Bg(e,n,a,o,u,f,M,T,B){e.cancelPendingCommit=null;do Jl();while(wn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ru,bt(e,a,f,M,T,B),e===We&&(ve=We=null,ye=0),sr=n,Ua=e,rr=a,Nf=f,Of=u,Rg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(Ke,function(){return Vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Z.p,Z.p=2,M=Ue,Ue|=4;try{Nx(e,n,a)}finally{Ue=M,Z.p=u,z.T=o}}wn=1,Ig(),Fg(),Hg()}}function Ig(){if(wn===1){wn=0;var e=Ua,n=sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=Ue;Ue|=4;try{Sg(n,e);var f=Kf,M=Ap(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(M!==T&&T&&T.ownerDocument&&Tp(T.ownerDocument.documentElement,T)){if(B!==null&&Mu(T)){var J=B.start,dt=B.end;if(dt===void 0&&(dt=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(dt,T.value.length);else{var gt=T.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var at=et.getSelection(),ne=T.textContent.length,$t=Math.min(B.start,ne),Be=B.end===void 0?$t:Math.min(B.end,ne);!at.extend&&$t>Be&&(M=Be,Be=$t,$t=M);var q=bp(T,$t),k=bp(T,Be);if(q&&k&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var Q=gt.createRange();Q.setStart(q.node,q.offset),at.removeAllRanges(),$t>Be?(at.addRange(Q),at.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),at.addRange(Q))}}}}for(gt=[],at=T;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}uc=!!Zf,Kf=Zf=null}finally{Ue=u,Z.p=o,z.T=a}}e.current=n,wn=2}}function Fg(){if(wn===2){wn=0;var e=Ua,n=sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=Ue;Ue|=4;try{gg(e,n.alternate,n)}finally{Ue=u,Z.p=o,z.T=a}}wn=3}}function Hg(){if(wn===4||wn===3){wn=0,Me();var e=Ua,n=sr,a=rr,o=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,sr=Ua=null,Gg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Ce(a),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=Z.p,Z.p=2,z.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];f(T.value,{componentStack:T.stack})}}finally{z.T=n,Z.p=u}}(rr&3)!==0&&Jl(),Fi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Pf?Ro++:(Ro=0,Pf=e):Ro=0,wo(0)}}function Gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Jl(e){return Ig(),Fg(),Hg(),Vg()}function Vg(){if(wn!==5)return!1;var e=Ua,n=Nf;Nf=0;var a=Ce(rr),o=z.T,u=Z.p;try{Z.p=32>a?32:a,z.T=null,a=Of,Of=null;var f=Ua,M=rr;if(wn=0,sr=Ua=null,rr=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,Tg(f.current),Mg(f,f.current,M,a),Ue=T,wo(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Z.p=u,z.T=o,Gg(e,n)}}function kg(e,n,a){n=oi(a,n),n=df(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Bt(e,2),Fi(e))}function Ve(e,n,a){if(e.tag===3)kg(e,e,a);else for(;n!==null;){if(n.tag===3){kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=oi(a,e),a=Ym(2),o=ya(n,a,2),o!==null&&(jm(a,o,n,e),Bt(o,2),Fi(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(ye&a)===a&&(an===4||an===3&&(ye&62914560)===ye&&300>Ft()-Lf?(Ue&2)===0&&or(e,0):Df|=a,ar===ye&&(ar=0)),Fi(e)}function Xg(e,n){n===0&&(n=At()),e=ks(e,n),e!==null&&(Bt(e,n),Fi(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(e,a)}function kx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Xg(e,a)}function Xx(e,n){return G(e,n)}var $l=null,cr=null,Hf=!1,tc=!1,Gf=!1,_s=0;function Fi(e){e!==cr&&e.next===null&&(cr===null?$l=cr=e:cr=cr.next=e),tc=!0,Hf||(Hf=!0,qx())}function wo(e,n){if(!Gf&&tc){Gf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(M&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,jg(o,f))}else f=ye,f=kt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,jg(o,f));o=o.next}while(a);Gf=!1}}function Wx(){Wg()}function Wg(){tc=Hf=!1;var e=0;_s!==0&&(tS()&&(e=_s),_s=0);for(var n=Ft(),a=null,o=$l;o!==null;){var u=o.next,f=qg(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(cr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}wo(e)}function qg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-zt(f),T=1<<M,B=u[M];B===-1?((T&a)===0||(T&o)!==0)&&(u[M]=re(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=We,a=ye,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&we(o),Ce(a)){case 2:case 8:a=oe;break;case 32:a=Ke;break;case 268435456:a=N;break;default:a=Ke}return o=Yg.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&we(o),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=ye;return o=kt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),qg(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?Yg.bind(null,e):null)}function jg(e,n){if(Jl())return null;Cg(e,n,!0)}function qx(){nS(function(){(Ue&6)!==0?G(Ht,Wx):Wg()})}function Vf(){return _s===0&&(_s=X()),_s}function Zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function Kg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Zg((u[tn]||null).action),M=o.submitter;M&&(n=(n=M[tn]||null)?Zg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var T=new ml("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var B=M?Kg(u,M):new FormData(u);lf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=M?Kg(u,M):new FormData(u),lf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var Xf=Au[kf],jx=Xf.toLowerCase(),Zx=Xf[0].toUpperCase()+Xf.slice(1);Ei(jx,"on"+Zx)}Ei(Cp,"onAnimationEnd"),Ei(Dp,"onAnimationIteration"),Ei(Up,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(hx,"onTransitionRun"),Ei(dx,"onTransitionStart"),Ei(px,"onTransitionCancel"),Ei(Lp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function Qg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(dt){Gl(dt)}u.currentTarget=null,f=B}else for(M=0;M<o.length;M++){if(T=o[M],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(dt){Gl(dt)}u.currentTarget=null,f=B}}}}function xe(e,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var o=e+"__bubble";a.has(o)||(Jg(n,e,2,!1),a.add(o))}function Wf(e,n,a){var o=0;n&&(o|=4),Jg(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[ec]){e[ec]=!0,cl.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Wf("selectionchange",!1,n))}}function Jg(e,n,a,o){switch(M_(n)){case 2:var u=ES;break;case 8:u=bS;break;default:u=rh}a=u.bind(null,n,a,e),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=ki(T),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=f=M;continue t}T=T.parentNode}}o=o.return}sp(function(){var J=f,dt=fu(a),gt=[];t:{var et=Np.get(e);if(et!==void 0){var at=ml,ne=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":at=Xv;break;case"focusin":ne="focus",at=_u;break;case"focusout":ne="blur",at=_u;break;case"beforeblur":case"afterblur":at=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Yv;break;case Cp:case Dp:case Up:at=Pv;break;case Lp:at=Zv;break;case"scroll":case"scrollend":at=Dv;break;case"wheel":at=Qv;break;case"copy":case"cut":case"paste":at=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=up;break;case"toggle":case"beforetoggle":at=$v}var $t=(n&4)!==0,Be=!$t&&(e==="scroll"||e==="scrollend"),q=$t?et!==null?et+"Capture":null:et;$t=[];for(var k=J,Q;k!==null;){var mt=k;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||q===null||(mt=Yr(k,q),mt!=null&&$t.push(Do(k,mt,Q))),Be)break;k=k.return}0<$t.length&&(et=new at(et,ne,null,a,dt),gt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",et&&a!==uu&&(ne=a.relatedTarget||a.fromElement)&&(ki(ne)||ne[Ni]))break t;if((at||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,at?(ne=a.relatedTarget||a.toElement,at=J,ne=ne?ki(ne):null,ne!==null&&(Be=c(ne),$t=ne.tag,ne!==Be||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(at=null,ne=J),at!==ne)){if($t=lp,mt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=up,mt="onPointerLeave",q="onPointerEnter",k="pointer"),Be=at==null?et:es(at),Q=ne==null?et:es(ne),et=new $t(mt,k+"leave",at,a,dt),et.target=Be,et.relatedTarget=Q,mt=null,ki(dt)===J&&($t=new $t(q,k+"enter",ne,a,dt),$t.target=Q,$t.relatedTarget=Be,mt=$t),Be=mt,at&&ne)e:{for($t=at,q=ne,k=0,Q=$t;Q;Q=ur(Q))k++;for(Q=0,mt=q;mt;mt=ur(mt))Q++;for(;0<k-Q;)$t=ur($t),k--;for(;0<Q-k;)q=ur(q),Q--;for(;k--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=ur($t),q=ur(q)}$t=null}else $t=null;at!==null&&$g(gt,et,at,$t,!1),ne!==null&&Be!==null&&$g(gt,Be,ne,$t,!0)}}t:{if(et=J?es(J):window,at=et.nodeName&&et.nodeName.toLowerCase(),at==="select"||at==="input"&&et.type==="file")var Gt=vp;else if(gp(et))if(xp)Gt=cx;else{Gt=ox;var me=rx}else at=et.nodeName,!at||at.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&cu(J.elementType)&&(Gt=vp):Gt=lx;if(Gt&&(Gt=Gt(e,J))){_p(gt,Gt,a,dt);break t}me&&me(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Ln(et,"number",et.value)}switch(me=J?es(J):window,e){case"focusin":(gp(me)||me.contentEditable==="true")&&(Hs=me,Eu=J,eo=null);break;case"focusout":eo=Eu=Hs=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Rp(gt,a,dt);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Rp(gt,a,dt)}var jt;if(xu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Fs?pp(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(fp&&a.locale!=="ko"&&(Fs||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Fs&&(jt=rp()):(_a=dt,pu="value"in _a?_a.value:_a.textContent,Fs=!0)),me=nc(J,ee),0<me.length&&(ee=new cp(ee,e,null,a,dt),gt.push({event:ee,listeners:me}),jt?ee.data=jt:(jt=mp(a),jt!==null&&(ee.data=jt)))),(jt=ex?nx(e,a):ix(e,a))&&(ee=nc(J,"onBeforeInput"),0<ee.length&&(me=new cp("onBeforeInput","beforeinput",null,a,dt),gt.push({event:me,listeners:ee}),me.data=jt)),Yx(gt,e,J,a,dt)}Qg(gt,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&o.unshift(Do(e,u,f)),u=Yr(e,n),u!=null&&o.push(Do(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,u?(J=Yr(a,f),J!=null&&M.unshift(Do(a,J,B))):u||(J=Yr(a,f),J!=null&&M.push(Do(a,J,B)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function t_(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Jx,"")}function e_(e,n){return n=t_(n),t_(e)===n}function ic(){}function ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xn(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,o);break;case"style":ip(e,o,f);break;case"data":if(n!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ic);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,Ut(e,a,o))}}function jf(e,n,a,o,u,f){switch(a){case"style":ip(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&Xn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ul.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,M,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var T=f=M=u=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":M=dt;break;case"checked":B=dt;break;case"defaultChecked":J=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:ze(e,n,o,dt,a,null)}}In(e,f,T,B,J,M,u,!1),_e(e);return;case"select":xe("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:ze(e,n,u,T,a,null)}n=f,a=M,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:ze(e,n,M,T,a,null)}zs(e,o,u,f),_e(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,B,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)xe(Co[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,J,o,a,null)}return;default:if(cu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&jf(e,n,dt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&ze(e,n,T,o,a,null))}function $x(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,T=null,B=null,J=null,dt=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":B=gt;default:o.hasOwnProperty(at)||ze(e,n,at,null,o,gt)}}for(var et in o){var at=o[et];if(gt=a[et],o.hasOwnProperty(et)&&(at!=null||gt!=null))switch(et){case"type":f=at;break;case"name":u=at;break;case"checked":J=at;break;case"defaultChecked":dt=at;break;case"value":M=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==gt&&ze(e,n,et,at,o,gt)}}Ge(e,M,T,B,J,dt,f,u);return;case"select":at=M=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":at=B;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":M=f;default:f!==B&&ze(e,n,u,f,o,B)}n=T,a=M,o=at,et!=null?en(e,!!a,et,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":at=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(e,n,T,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":et=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ze(e,n,M,u,o,f)}An(e,et,at);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ze(e,n,ne,null,o,et)}for(B in o)if(et=o[B],at=a[B],o.hasOwnProperty(B)&&et!==at&&(et!=null||at!=null))switch(B){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:ze(e,n,B,et,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t)&&ze(e,n,$t,null,o,et);for(J in o)if(et=o[J],at=a[J],o.hasOwnProperty(J)&&et!==at&&(et!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:ze(e,n,J,et,o,at)}return;default:if(cu(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!o.hasOwnProperty(Be)&&jf(e,n,Be,void 0,o,et);for(dt in o)et=o[dt],at=a[dt],!o.hasOwnProperty(dt)||et===at||et===void 0&&at===void 0||jf(e,n,dt,et,o,at);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&ze(e,n,q,null,o,et);for(gt in o)et=o[gt],at=a[gt],!o.hasOwnProperty(gt)||et===at||et==null&&at==null||ze(e,n,gt,et,o,at)}var Zf=null,Kf=null;function ac(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(iS)}:a_;function iS(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function r_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Uo(M.documentElement),a&2&&Uo(M.body),a&4)for(a=M.head,Uo(a),M=a.firstChild;M;){var T=M.nextSibling,B=M.nodeName;M[Oi]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(f),Fo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Fo(n)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),Ps(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ti(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var eh=null;function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function l_(e,n,a){switch(n=ac(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ps(e)}var di=new Map,c_=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=Z.d;Z.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=ia.f(),n=Kl();return e||n}function lS(e){var n=ma(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):ia.r(e)}var fr=typeof document>"u"?null:document;function u_(e,n,a){var o=fr;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c_.has(u)||(c_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),cn(n),o.head.appendChild(n)))}}function cS(e){ia.D(e),u_("dns-prefetch",e,null)}function uS(e,n){ia.C(e,n),u_("preconnect",e,n)}function fS(e,n,a){ia.L(e,n,a);var o=fr;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var f=u;switch(n){case"style":f=hr(e);break;case"script":f=dr(e)}di.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(f))||n==="script"&&o.querySelector(No(f))||(n=o.createElement("link"),Cn(n,"link",e),cn(n),o.head.appendChild(n)))}}function hS(e,n){ia.m(e,n);var a=fr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(e)}if(!di.has(f)&&(e=v({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}o=a.createElement("link"),Cn(o,"link",e),cn(o),a.head.appendChild(o)}}}function dS(e,n,a){ia.S(e,n,a);var o=fr;if(o&&e){var u=ga(o).hoistableStyles,f=hr(e);n=n||"default";var M=u.get(f);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(Lo(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&nh(e,a);var B=M=o.createElement("link");cn(B),Cn(B,"link",e),B._p=new Promise(function(J,dt){B.onload=J,B.onerror=dt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,rc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(f,M)}}}function pS(e,n){ia.X(e,n);var a=fr;if(a&&e){var o=ga(a).hoistableScripts,u=dr(e),f=o.get(u);f||(f=a.querySelector(No(u)),f||(e=v({src:e,async:!0},n),(n=di.get(u))&&ih(e,n),f=a.createElement("script"),cn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function mS(e,n){ia.M(e,n);var a=fr;if(a&&e){var o=ga(a).hoistableScripts,u=dr(e),f=o.get(u);f||(f=a.querySelector(No(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=di.get(u))&&ih(e,n),f=a.createElement("script"),cn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function f_(e,n,a,o){var u=(u=pt.current)?sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hr(a.href);var f=ga(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Lo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||gS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hr(e){return'href="'+yn(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function h_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),cn(n),e.head.appendChild(n))}function dr(e){return'[src="'+yn(e)+'"]'}function No(e){return"script[async]"+e}function d_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),Cn(o,"style",u),rc(o,a.precedence,e),n.instance=o;case"stylesheet":u=hr(a.href);var f=e.querySelector(Lo(u));if(f)return n.state.loading|=4,n.instance=f,cn(f),f;o=h_(a),(u=di.get(u))&&nh(o,u),f=(e.ownerDocument||e).createElement("link"),cn(f);var M=f;return M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),Cn(f,"link",o),n.state.loading|=4,rc(f,a.precedence,e),n.instance=f;case"script":return f=dr(a.src),(u=e.querySelector(No(f)))?(n.instance=u,cn(u),u):(o=a,(u=di.get(f))&&(o=v({},a),ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),cn(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,e));return n.instance}function rc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var oc=null;function p_(e,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Oi]||f[pn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(f):o.set(M,[f])}}return o}function m_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Oo=null;function vS(){}function xS(e,n,a){if(Oo===null)throw Error(s(475));var o=Oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hr(a.href),f=e.querySelector(Lo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=lc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,cn(f);return}f=e.ownerDocument||e,a=h_(a),(u=di.get(u))&&nh(a,u),f=f.createElement("link"),cn(f);var M=f;M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),Cn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=lc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function SS(){if(Oo===null)throw Error(s(475));var e=Oo;return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)ah(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function ah(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,n.forEach(yS,e),cc=null,lc.call(e))}function yS(e,n){if(!(n.state.loading&4)){var a=cc.get(e);if(a)var o=a.get(null);else{a=new Map,cc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function MS(e,n,a,o,u,f,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function __(e,n,a,o,u,f,M,T,B,J,dt,gt){return e=new MS(e,n,a,M,T,B,J,gt),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Vu(f),e}function v_(e){return e?(e=Xs,e):Xs}function x_(e,n,a,o,u,f){u=v_(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ya(e,o,n),a!==null&&(ai(a,e,n),uo(a,e,n))}function S_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sh(e,n){S_(e,n),(e=e.alternate)&&S_(e,n)}function y_(e){if(e.tag===13){var n=ks(e,67108864);n!==null&&ai(n,e,67108864),sh(e,67108864)}}var uc=!0;function ES(e,n,a,o){var u=z.T;z.T=null;var f=Z.p;try{Z.p=2,rh(e,n,a,o)}finally{Z.p=f,z.T=u}}function bS(e,n,a,o){var u=z.T;z.T=null;var f=Z.p;try{Z.p=8,rh(e,n,a,o)}finally{Z.p=f,z.T=u}}function rh(e,n,a,o){if(uc){var u=oh(o);if(u===null)Yf(e,n,o,fc,a),E_(e,o);else if(AS(u,e,n,a,o))o.stopPropagation();else if(E_(e,o),n&4&&-1<TS.indexOf(e)){for(;u!==null;){var f=ma(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Zt(f.pendingLanes);if(M!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var B=1<<31-zt(M);T.entanglements[1]|=B,M&=~B}Fi(f),(Ue&6)===0&&(jl=Ft()+500,wo(0))}}break;case 13:T=ks(f,2),T!==null&&ai(T,f,2),Kl(),sh(f,2)}if(f=oh(o),f===null&&Yf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Yf(e,n,o,null,a)}}function oh(e){return e=fu(e),lh(e)}var fc=null;function lh(e){if(fc=null,e=ki(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function M_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Ht:return 2;case oe:return 8;case Ke:case Qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var ch=!1,Oa=null,Pa=null,za=null,zo=new Map,Bo=new Map,Ba=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ma(n),n!==null&&y_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function AS(e,n,a,o,u){switch(n){case"focusin":return Oa=Io(Oa,e,n,a,o,u),!0;case"dragenter":return Pa=Io(Pa,e,n,a,o,u),!0;case"mouseover":return za=Io(za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Io(zo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Io(Bo.get(f)||null,e,n,a,o,u)),!0}return!1}function b_(e){var n=ki(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,yi(e.priority,function(){if(a.tag===13){var o=ii();o=ae(o);var u=ks(a,o);u!==null&&ai(u,a,o),sh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=oh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=ma(a),n!==null&&y_(n),e.blockedOn=a,!1;n.shift()}return!0}function T_(e,n,a){hc(e)&&a.delete(n)}function RS(){ch=!1,Oa!==null&&hc(Oa)&&(Oa=null),Pa!==null&&hc(Pa)&&(Pa=null),za!==null&&hc(za)&&(za=null),zo.forEach(T_),Bo.forEach(T_)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ch||(ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,RS)))}var pc=null;function A_(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(lh(o||a)===null)continue;break}var f=ma(a);f!==null&&(e.splice(n,3),n-=3,lf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Fo(e){function n(B){return dc(B,e)}Oa!==null&&dc(Oa,e),Pa!==null&&dc(Pa,e),za!==null&&dc(za,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)b_(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[tn]||null;if(typeof f=="function")M||A_(a);else if(M){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[tn]||null)T=M.formAction;else if(lh(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),A_(a)}}}function uh(e){this._internalRoot=e}mc.prototype.render=uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();x_(a,o,e,n,null,null)},mc.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;x_(e.current,2,null,e,null,null),Kl(),n[Ni]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&b_(e)}};var R_=t.version;if(R_!=="19.1.1")throw Error(s(527,R_,"19.1.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ht=gc.inject(wS),vt=gc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=km,f=Xm,M=Wm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=__(e,1,!1,null,null,a,o,u,f,M,T,null),e[Ni]=n.current,qf(e),new uh(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=km,M=Xm,T=Wm,B=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=__(e,1,!0,n,a??null,o,u,f,M,T,B,J),n.context=v_(null),a=n.current,o=ii(),o=ae(o),u=Sa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Bt(n,a),Fi(n),e[Ni]=n.current,qf(e),new mc(n)},Go.version="19.1.1",Go}var B_;function IS(){if(B_)return dh.exports;B_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=BS(),dh.exports}var FS=IS();const HS=Y0(FS);var Qh=function(){return(Qh=Object.assign||function(r){for(var t,i=1,s=arguments.length;i<s;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l]);return r}).apply(this,arguments)},Vo,ko,Jh=Ne.createContext(void 0),I_="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",F_="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",GS=function(_){var t=_.config,i=_.version,i=i===void 0?3:i,s=_.src,s=s===void 0?i===2?I_:F_:s,l=_.onStartup,c=_.onLoad,m=_.asyncLoad,h=m!==void 0&&m,d=_.onError,m=_.typesettingOptions,p=_.renderMode,p=p===void 0?"post":p,v=_.hideUntilTypeset,_=_.children,S=Ne.useContext(Jh);if(S?.version!==void 0&&S?.version!==i)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(i===2&&ko!==void 0||i===3&&Vo!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var x=Ne.useRef(S),S=Ne.useRef(S?.version||null);if(S.current===null)S.current=i;else if(S.current!==i)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var E=s||(i===2?I_:F_);function A(y,g){t&&(window.MathJax=t);var P=document.createElement("script");P.type="text/javascript",P.src=E,P.async=h,P.addEventListener("load",function(){var U=window.MathJax;l&&l(U),y(U),c&&c()}),P.addEventListener("error",function(U){return g(U)}),document.getElementsByTagName("head")[0].appendChild(P)}return x.current===void 0&&(S={typesettingOptions:m,renderMode:p,hideUntilTypeset:v},i===2?Vo===void 0&&(typeof window<"u"?(Vo=new Promise(A)).catch(function(y){if(!d)throw Error("Failed to download MathJax version 2 from '".concat(E,"' due to: ").concat(JSON.stringify(y)));d(y)}):(Vo=Promise.reject()).catch(function(y){})):ko===void 0&&(typeof window<"u"?(ko=new Promise(A)).catch(function(y){if(!d)throw Error("Failed to download MathJax version 3 from '".concat(E,"' due to: ").concat(y));d(y)}):(ko=Promise.reject()).catch(function(y){})),x.current=Qh(Qh({},S),i===2?{version:2,promise:Vo}:{version:3,promise:ko})),Vd.createElement(Jh.Provider,{value:x.current},_)},qa=function(){return(qa=Object.assign||function(r){for(var t,i=1,s=arguments.length;i<s;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l]);return r}).apply(this,arguments)},VS=function(r,t){var i={};for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&t.indexOf(l)<0&&(i[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,l=Object.getOwnPropertySymbols(r);s<l.length;s++)t.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(r,l[s])&&(i[l[s]]=r[l[s]]);return i},Xo=function(r){return"Typesetting failed: ".concat(r.message!==void 0?r.message:JSON.stringify(r))},$e=function(r){function t(){var O;A==="every"&&P&&y==="post"&&S.current!==null&&(S.current.style.visibility=(O=(O=_.style)==null?void 0:O.visibility)!=null?O:"visible"),U.current||(A==="first"&&S.current!==null&&(S.current.style.visibility="visible"),l&&l(),U.current=!0),c&&c(),w.current=!1}var s=r.inline,i=s!==void 0&&s,s=r.hideUntilTypeset,l=r.onInitTypeset,c=r.onTypeset,h=r.text,d=r.dynamic,m=r.typesettingOptions,p=r.renderMode,v=r.children,_=VS(r,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),x=Ne.useRef(""),S=Ne.useRef(null),E=Ne.useContext(Jh),A=s??E?.hideUntilTypeset,y=p??E?.renderMode,g=m??E?.typesettingOptions,P=d!==!1&&(d||!1),U=Ne.useRef(!1),w=Ne.useRef(!1);return!w.current&&S.current!==null&&P&&A==="every"&&y==="post"&&(S.current.style.visibility="hidden"),(typeof window<"u"?Ne.useLayoutEffect:Ne.useEffect)(function(){if((P||!U.current)&&S.current!==null){if(!E)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(y==="pre"){if(!(typeof(O=h)=="string"&&0<O.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(h,'"'));if(!m||!m.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(E.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}y!=="post"&&h===x.current||w.current||(w.current=!0,E.version===3?E.promise.then(function(I){var H;y==="pre"?(H=function(V){x.current=h,I.startup.document.clear(),I.startup.document.updateDocument(),S.current!==null&&(S.current.innerHTML=V.outerHTML),t()},m.fn.endsWith("Promise")?I.startup.promise.then(function(){return I[g.fn](h,qa(qa({},g?.options||{}),{display:!i}))}).then(H).catch(function(V){throw t(),Error(Xo(V))}):I.startup.promise.then(function(){var V=I[g.fn](h,qa(qa({},g?.options||{}),{display:!i}));H(V)}).catch(function(V){throw t(),Error(Xo(V))})):I.startup.promise.then(function(){return I.typesetClear([S.current]),I.typesetPromise([S.current])}).then(t).catch(function(V){throw t(),Error(Xo(V))})}).catch(function(I){throw t(),Error(Xo(I))}):E.promise.then(function(I){I.Hub.Queue(["Typeset",I.Hub,S.current]),I.Hub.Queue(t)}).catch(function(I){throw t(),Error(Xo(I))}))}var O}),Vd.createElement("span",qa({},_,{style:qa(qa({display:i?"inline":"block"},_.style),{visibility:A?"hidden":(r=_.style)==null?void 0:r.visibility}),ref:S}),v)};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="179",Pr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kS=0,H_=1,XS=2,j0=1,WS=2,ca=3,Ja=0,Qn=1,ua=2,Za=0,zr=1,G_=2,V_=3,k_=4,qS=5,Ts=100,YS=101,jS=102,ZS=103,KS=104,QS=200,JS=201,$S=202,ty=203,$h=204,td=205,ey=206,ny=207,iy=208,ay=209,sy=210,ry=211,oy=212,ly=213,cy=214,ed=0,nd=1,id=2,Fr=3,ad=4,sd=5,rd=6,od=7,Z0=0,uy=1,fy=2,Ka=0,hy=1,dy=2,py=3,my=4,gy=5,_y=6,vy=7,K0=300,Hr=301,Gr=302,ld=303,cd=304,au=306,ud=1e3,Rs=1001,fd=1002,Ui=1003,xy=1004,_c=1005,Ci=1006,_h=1007,ws=1008,da=1009,Q0=1010,J0=1011,el=1012,Xd=1013,Ds=1014,fa=1015,sl=1016,Wd=1017,qd=1018,nl=1020,$0=35902,tv=1021,ev=1022,Di=1023,il=1026,al=1027,nv=1028,Yd=1029,iv=1030,jd=1031,Zd=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37808,Sd=37809,yd=37810,Md=37811,Ed=37812,bd=37813,Td=37814,Ad=37815,Rd=37816,wd=37817,Cd=37818,Dd=37819,Ud=37820,Ld=37821,jc=36492,Nd=36494,Od=36495,av=36283,Pd=36284,zd=36285,Bd=36286,Sy=3200,yy=3201,My=0,Ey=1,ja="",gi="srgb",Vr="srgb-linear",Jc="linear",Ie="srgb",pr=7680,X_=519,by=512,Ty=513,Ay=514,sv=515,Ry=516,wy=517,Cy=518,Dy=519,Id=35044,W_="300 es",Vi=2e3,$c=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Fd=180/Math.PI;function Qa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function Uy(r,t){return(r%t+t)%t}function vh(r,t,i){return(1-i)*r+i*t}function Gi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ly={DEG2RAD:Zc};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==x||p!==S||v!==E){let y=1-d;const g=m*x+p*S+v*E+_*A,P=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const O=Math.sqrt(U),I=Math.atan2(O,g*P);y=Math.sin(y*I)/O,d=Math.sin(d*I)/O}const w=d*P;if(m=m*y+x*w,p=p*y+S*w,v=v*y+E*w,_=_*y+A*w,y===1-d){const O=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=O,p*=O,v*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*_+m*S-p*x,t[i+1]=m*E+v*x+p*_-d*S,t[i+2]=p*E+v*S+d*x-m*_,t[i+3]=v*E-d*_-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*v*_+p*S*E,this._y=p*S*_-x*v*E,this._z=p*v*E+x*S*_,this._w=p*v*_-x*S*E;break;case"YXZ":this._x=x*v*_+p*S*E,this._y=p*S*_-x*v*E,this._z=p*v*E-x*S*_,this._w=p*v*_+x*S*E;break;case"ZXY":this._x=x*v*_-p*S*E,this._y=p*S*_+x*v*E,this._z=p*v*E+x*S*_,this._w=p*v*_-x*S*E;break;case"ZYX":this._x=x*v*_-p*S*E,this._y=p*S*_+x*v*E,this._z=p*v*E-x*S*_,this._w=p*v*_+x*S*E;break;case"YZX":this._x=x*v*_+p*S*E,this._y=p*S*_+x*v*E,this._z=p*v*E-x*S*_,this._w=p*v*_-x*S*E;break;case"XZY":this._x=x*v*_-p*S*E,this._y=p*S*_-x*v*E,this._z=p*v*E+x*S*_,this._w=p*v*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],x=s+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),_=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(q_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(q_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new K,q_=new $a;class ce{constructor(t,i,s,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],x=s[2],S=s[5],E=s[8],A=l[0],y=l[3],g=l[6],P=l[1],U=l[4],w=l[7],O=l[2],I=l[5],H=l[8];return c[0]=h*A+d*P+m*O,c[3]=h*y+d*U+m*I,c[6]=h*g+d*w+m*H,c[1]=p*A+v*P+_*O,c[4]=p*y+v*U+_*I,c[7]=p*g+v*w+_*H,c[2]=x*A+S*P+E*O,c[5]=x*y+S*U+E*I,c[8]=x*g+S*w+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,x=d*m-v*c,S=p*c-h*m,E=i*_+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-v*s)*A,t[2]=(d*s-l*h)*A,t[3]=x*A,t[4]=(v*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Sh.makeScale(t,i)),this}rotate(t){return this.premultiply(Sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sh=new ce;function rv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ny(){const r=tu("canvas");return r.style.display="block",r}const Y_={};function Br(r){r in Y_||(Y_[r]=!0,console.warn(r))}function Oy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const j_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Py(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Jc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:s,transfer:Jc,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Ae=Py();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mr;class zy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{mr===void 0&&(mr=tu("canvas")),mr.width=t.width,mr.height=t.height;const l=mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ha(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let By=0;class Kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Qa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(yh(l[h].image)):c.push(yh(l[h]))}else c=yh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iy=0;const Mh=new K;class Vn extends Ls{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Rs,l=Rs,c=Ci,h=ws,d=Di,m=da,p=Vn.DEFAULT_ANISOTROPY,v=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Qa(),this.name="",this.source=new Kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==K0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case Rs:t.x=t.x<0?0:1;break;case fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case Rs:t.y=t.y<0?0:1;break;case fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=K0;Vn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],x=m[1],S=m[5],E=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(S+1)/2,O=(g+1)/2,I=(v+x)/4,H=(_+A)/4,V=(E+y)/4;return U>w&&U>O?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=H/s):w>O?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=I/l,c=V/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=H/c,l=V/c),this.set(s,l,c,i),this}let P=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-A)/P,this.z=(x-v)/P,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fy extends Ls{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends Fy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ov extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hy extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),xc.subVectors(this.max,Wo),gr.subVectors(t.a,Wo),_r.subVectors(t.b,Wo),vr.subVectors(t.c,Wo),Fa.subVectors(_r,gr),Ha.subVectors(vr,_r),vs.subVectors(gr,vr);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-vs.z,vs.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,vs.z,0,-vs.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-vs.y,vs.x,0];return!Eh(i,gr,_r,vr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Eh(i,gr,_r,vr,xc))?!1:(Sc.crossVectors(Fa,Ha),i=[Sc.x,Sc.y,Sc.z],Eh(i,gr,_r,vr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new K,new K,new K,new K,new K,new K,new K,new K],Ai=new K,vc=new rl,gr=new K,_r=new K,vr=new K,Fa=new K,Ha=new K,vs=new K,Wo=new K,xc=new K,Sc=new K,xs=new K;function Eh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){xs.fromArray(r,c);const d=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),m=t.dot(xs),p=i.dot(xs),v=s.dot(xs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Gy=new rl,qo=new K,bh=new K;class su{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Gy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(bh)),this.expandByPoint(qo.copy(t.center).sub(bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new K,Th=new K,yc=new K,Ga=new K,Ah=new K,Mc=new K,Rh=new K;class Qd{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Th.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(Th);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Ga.dot(this.direction),m=-Ga.dot(yc),p=Ga.lengthSq(),v=Math.abs(1-h*h);let _,x,S,E;if(v>0)if(_=h*m-d,x=h*d-m,E=c*v,_>=0)if(x>=-E)if(x<=E){const A=1/v;_*=A,x*=A,S=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Th).addScaledVector(yc,x),S}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,s,l,c){Ah.subVectors(i,t),Mc.subVectors(s,t),Rh.crossVectors(Ah,Mc);let h=this.direction.dot(Rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,t);const m=d*this.direction.dot(Mc.crossVectors(Ga,Mc));if(m<0)return null;const p=d*this.direction.dot(Ah.cross(Ga));if(p<0||m+p>h)return null;const v=-d*Ga.dot(Rh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,s,l,c,h,d,m,p,v,_,x,S,E,A,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,_,x,S,E,A,y)}set(t,i,s,l,c,h,d,m,p,v,_,x,S,E,A,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=_,g[14]=x,g[3]=S,g[7]=E,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/xr.setFromMatrixColumn(t,0).length(),c=1/xr.setFromMatrixColumn(t,1).length(),h=1/xr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*v,S=h*_,E=d*v,A=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*v,S=m*_,E=p*v,A=p*_;i[0]=x+A*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=A+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*v,S=m*_,E=p*v,A=p*_;i[0]=x-A*d,i[4]=-h*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*v,S=h*_,E=d*v,A=d*_;i[0]=m*v,i[4]=E*p-S,i[8]=x*p+A,i[1]=m*_,i[5]=A*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=A-x*_,i[8]=E*_+S,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*_+E,i[10]=x-A*_}else if(t.order==="XZY"){const x=h*m,S=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=x*_+A,i[5]=h*v,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*v,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vy,t,ky)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Va.crossVectors(s,si),Va.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Va.crossVectors(s,si)),Va.normalize(),Ec.crossVectors(si,Va),l[0]=Va.x,l[4]=Ec.x,l[8]=si.x,l[1]=Va.y,l[5]=Ec.y,l[9]=si.y,l[2]=Va.z,l[6]=Ec.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],x=s[9],S=s[13],E=s[2],A=s[6],y=s[10],g=s[14],P=s[3],U=s[7],w=s[11],O=s[15],I=l[0],H=l[4],V=l[8],C=l[12],D=l[1],F=l[5],it=l[9],lt=l[13],ct=l[2],ft=l[6],z=l[10],Z=l[14],Y=l[3],St=l[7],L=l[11],$=l[15];return c[0]=h*I+d*D+m*ct+p*Y,c[4]=h*H+d*F+m*ft+p*St,c[8]=h*V+d*it+m*z+p*L,c[12]=h*C+d*lt+m*Z+p*$,c[1]=v*I+_*D+x*ct+S*Y,c[5]=v*H+_*F+x*ft+S*St,c[9]=v*V+_*it+x*z+S*L,c[13]=v*C+_*lt+x*Z+S*$,c[2]=E*I+A*D+y*ct+g*Y,c[6]=E*H+A*F+y*ft+g*St,c[10]=E*V+A*it+y*z+g*L,c[14]=E*C+A*lt+y*Z+g*$,c[3]=P*I+U*D+w*ct+O*Y,c[7]=P*H+U*F+w*ft+O*St,c[11]=P*V+U*it+w*z+O*L,c[15]=P*C+U*lt+w*Z+O*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],x=t[10],S=t[14],E=t[3],A=t[7],y=t[11],g=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*S-s*m*S)+A*(+i*m*S-i*p*x+c*h*x-l*h*S+l*p*v-c*m*v)+y*(+i*p*_-i*d*S-c*h*_+s*h*S+c*d*v-s*p*v)+g*(-l*d*v-i*m*_+i*d*x+l*h*_-s*h*x+s*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],x=t[10],S=t[11],E=t[12],A=t[13],y=t[14],g=t[15],P=_*y*p-A*x*p+A*m*S-d*y*S-_*m*g+d*x*g,U=E*x*p-v*y*p-E*m*S+h*y*S+v*m*g-h*x*g,w=v*A*p-E*_*p+E*d*S-h*A*S-v*d*g+h*_*g,O=E*_*m-v*A*m-E*d*x+h*A*x+v*d*y-h*_*y,I=i*P+s*U+l*w+c*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=P*H,t[1]=(A*x*c-_*y*c-A*l*S+s*y*S+_*l*g-s*x*g)*H,t[2]=(d*y*c-A*m*c+A*l*p-s*y*p-d*l*g+s*m*g)*H,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*S-s*m*S)*H,t[4]=U*H,t[5]=(v*y*c-E*x*c+E*l*S-i*y*S-v*l*g+i*x*g)*H,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*g-i*m*g)*H,t[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*S+i*m*S)*H,t[8]=w*H,t[9]=(E*_*c-v*A*c-E*s*S+i*A*S+v*s*g-i*_*g)*H,t[10]=(h*A*c-E*d*c+E*s*p-i*A*p-h*s*g+i*d*g)*H,t[11]=(v*d*c-h*_*c-v*s*p+i*_*p+h*s*S-i*d*S)*H,t[12]=O*H,t[13]=(v*A*l-E*_*l+E*s*x-i*A*x-v*s*y+i*_*y)*H,t[14]=(E*d*l-h*A*l-E*s*m+i*A*m+h*s*y-i*d*y)*H,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*x+i*d*x)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,x=c*p,S=c*v,E=c*_,A=h*v,y=h*_,g=d*_,P=m*p,U=m*v,w=m*_,O=s.x,I=s.y,H=s.z;return l[0]=(1-(A+g))*O,l[1]=(S+w)*O,l[2]=(E-U)*O,l[3]=0,l[4]=(S-w)*I,l[5]=(1-(x+g))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(E+U)*H,l[9]=(y-P)*H,l[10]=(1-(x+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),d=xr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,v=1/h,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=c/(h-c),A=h*c/(h-c);else if(d===Vi)E=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===$c)E=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(h-c),A=h/(h-c);else if(d===Vi)E=-2/(h-c),A=-(h+c)/(h-c);else if(d===$c)E=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const xr=new K,Ri=new ln,Vy=new K(0,0,0),ky=new K(1,1,1),Va=new K,Ec=new K,si=new K,K_=new ln,Q_=new $a;class pa{constructor(t=0,i=0,s=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xy=0;const J_=new K,Sr=new $a,ra=new ln,bc=new K,Yo=new K,Wy=new K,qy=new $a,$_=new K(1,0,0),t0=new K(0,1,0),e0=new K(0,0,1),n0={type:"added"},Yy={type:"removed"},yr={type:"childadded",child:null},wh={type:"childremoved",child:null};class kn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new K,i=new pa,s=new $a,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ce}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis($_,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,i){return J_.copy(t).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($_,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Yo,bc,this.up):ra.lookAt(bc,Yo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ra),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n0),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Yy),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n0),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,Wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),x=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new K,oa=new K,Ch=new K,la=new K,Mr=new K,Er=new K,i0=new K,Dh=new K,Uh=new K,Lh=new K,Nh=new on,Oh=new on,Ph=new on;class vi{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){wi.subVectors(l,i),oa.subVectors(s,i),Ch.subVectors(t,i);const h=wi.dot(wi),d=wi.dot(oa),m=wi.dot(Ch),p=oa.dot(oa),v=oa.dot(Ch),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-d*v)*x,E=(h*v-d*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(h,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Nh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),Ph.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Oh,c.y),h.addScaledVector(Ph,c.z),h}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),oa.subVectors(t,i),wi.cross(oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),wi.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Mr.subVectors(l,s),Er.subVectors(c,s),Dh.subVectors(t,s);const m=Mr.dot(Dh),p=Er.dot(Dh);if(m<=0&&p<=0)return i.copy(s);Uh.subVectors(t,l);const v=Mr.dot(Uh),_=Er.dot(Uh);if(v>=0&&_<=v)return i.copy(l);const x=m*_-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Mr,h);Lh.subVectors(t,c);const S=Mr.dot(Lh),E=Er.dot(Lh);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Er,d);const y=v*E-S*_;if(y<=0&&_-v>=0&&S-E>=0)return i0.subVectors(c,l),d=(_-v)/(_-v+(S-E)),i.copy(l).addScaledVector(i0,d);const g=1/(y+A+x);return h=A*g,d=x*g,i.copy(s).addScaledVector(Mr,h).addScaledVector(Er,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function zh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Uy(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=zh(h,c,t+1/3),this.g=zh(h,c,t),this.b=zh(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=cv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ae.workingToColorSpace(zn.copy(this),t),Math.round(Se(zn.r*255,0,255))*65536+Math.round(Se(zn.g*255,0,255))*256+Math.round(Se(zn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=gi){Ae.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(Tc);const s=vh(ka.h,Tc.h,i),l=vh(ka.s,Tc.s,i),c=vh(ka.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new De;De.NAMES=cv;let jy=0;class Xr extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=zr,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==Ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$h&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tl extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new K,Ac=new se;let Zy=0;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Id,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Id&&(t.usage=this.usage),t}}class uv extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fv extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Dn extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ky=0;const pi=new ln,Bh=new kn,br=new K,ri=new rl,jo=new rl,Tn=new K;class Si extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rv(t)?fv:uv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Dn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ri.min,jo.min),ri.expandByPoint(Tn),Tn.addVectors(ri.max,jo.max),ri.expandByPoint(Tn)):(ri.expandByPoint(jo.min),ri.expandByPoint(jo.max))}ri.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Tn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(t,p),Tn.add(br)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new K,m[V]=new K;const p=new K,v=new K,_=new K,x=new se,S=new se,E=new se,A=new K,y=new K;function g(V,C,D){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,C),_.fromBufferAttribute(s,D),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),v.sub(p),_.sub(p),S.sub(x),E.sub(x);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(F),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(F),d[V].add(A),d[C].add(A),d[D].add(A),m[V].add(y),m[C].add(y),m[D].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let V=0,C=P.length;V<C;++V){const D=P[V],F=D.start,it=D.count;for(let lt=F,ct=F+it;lt<ct;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new K,w=new K,O=new K,I=new K;function H(V){O.fromBufferAttribute(l,V),I.copy(O);const C=d[V];U.copy(C),U.sub(O.multiplyScalar(O.dot(C))).normalize(),w.crossVectors(I,C);const F=w.dot(m[V])<0?-1:1;h.setXYZW(V,U.x,U.y,U.z,F)}for(let V=0,C=P.length;V<C;++V){const D=P[V],F=D.start,it=D.count;for(let lt=F,ct=F+it;lt<ct;lt+=3)H(t.getX(lt+0)),H(t.getX(lt+1)),H(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,v=new K,_=new K;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),A=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,x=new p.constructor(m.length*v);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*v;for(let g=0;g<v;g++)x[E++]=p[S++]}return new Li(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const x=p[v],S=t(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let x=0,S=_.length;x<S;x++)v.push(_[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a0=new ln,Ss=new Qd,Rc=new su,s0=new K,wc=new K,Cc=new K,Dc=new K,Ih=new K,Uc=new K,r0=new K,Lc=new K;class xi extends kn{constructor(t=new Si,i=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(Ih.fromBufferAttribute(_,t),h?Uc.addScaledVector(Ih,v):Uc.addScaledVector(Ih.sub(i),v))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Ss.copy(t.ray).recast(t.near),!(Rc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Rc,s0)===null||Ss.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(a0.copy(c).invert(),Ss.copy(t.ray).applyMatrix4(a0),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=h[y.materialIndex],P=Math.max(y.start,S.start),U=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=P,O=U;w<O;w+=3){const I=d.getX(w),H=d.getX(w+1),V=d.getX(w+2);l=Nc(this,g,t,s,p,v,_,I,H,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const P=d.getX(y),U=d.getX(y+1),w=d.getX(y+2);l=Nc(this,h,t,s,p,v,_,P,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=h[y.materialIndex],P=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=P,O=U;w<O;w+=3){const I=w,H=w+1,V=w+2;l=Nc(this,g,t,s,p,v,_,I,H,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const P=y,U=y+1,w=y+2;l=Nc(this,h,t,s,p,v,_,P,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Qy(r,t,i,s,l,c,h,d){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ja,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:r}}function Nc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,wc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,Dc);const v=Qy(r,t,i,s,wc,Cc,Dc,r0);if(v){const _=new K;vi.getBarycoord(r0,wc,Cc,Dc,_),l&&(v.uv=vi.getInterpolatedAttribute(l,d,m,p,_,new se)),c&&(v.uv1=vi.getInterpolatedAttribute(c,d,m,p,_,new se)),h&&(v.normal=vi.getInterpolatedAttribute(h,d,m,p,_,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};vi.getNormal(wc,Cc,Dc,x.normal),v.face=x,v.barycoord=_}return v}class ol extends Si{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(_,2));function E(A,y,g,P,U,w,O,I,H,V,C){const D=w/H,F=O/V,it=w/2,lt=O/2,ct=I/2,ft=H+1,z=V+1;let Z=0,Y=0;const St=new K;for(let L=0;L<z;L++){const $=L*F-lt;for(let xt=0;xt<ft;xt++){const yt=xt*D-it;St[A]=yt*P,St[y]=$*U,St[g]=ct,p.push(St.x,St.y,St.z),St[A]=0,St[y]=0,St[g]=I>0?1:-1,v.push(St.x,St.y,St.z),_.push(xt/H),_.push(1-L/V),Z+=1}}for(let L=0;L<V;L++)for(let $=0;$<H;$++){const xt=x+$+ft*L,yt=x+$+ft*(L+1),Ct=x+($+1)+ft*(L+1),nt=x+($+1)+ft*L;m.push(xt,yt,nt),m.push(yt,Ct,nt),Y+=6}d.addGroup(S,Y,C),S+=Y,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=kr(r[i]);for(const l in s)t[l]=s[l]}return t}function Jy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function hv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const $y={clone:kr,merge:Gn};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new K,o0=new se,l0=new se;class _i extends dv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fd*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,o0,l0),i.subVectors(l0,o0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class nM extends kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Tr,Ar,t,i);l.layers=this.layers,this.add(l);const c=new _i(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const h=new _i(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const d=new _i(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const m=new _i(Tr,Ar,t,i);m.layers=this.layers,this.add(m);const p=new _i(Tr,Ar,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$c)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class pv extends Vn{constructor(t=[],i=Hr,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iM extends Us{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ol(5,5,5),c=new ts({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Za});c.uniforms.tEquirect.value=i;const h=new xi(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=Ci),new nM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Nr extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=v.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Nr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class sM extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class rM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Id,this.updateRanges=[],this.version=0,this.uuid=Qa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new K;class eu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Li(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new eu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mv extends Xr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rr;const Zo=new K,wr=new K,Cr=new K,Dr=new se,Ko=new se,gv=new ln,Oc=new K,Qo=new K,Pc=new K,c0=new se,Hh=new se,u0=new se;class oM extends kn{constructor(t=new mv){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new rM(i,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new eu(s,3,0,!1)),Rr.setAttribute("uv",new eu(s,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new se(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),gv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Cr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;zc(Oc.set(-.5,-.5,0),Cr,h,wr,l,c),zc(Qo.set(.5,-.5,0),Cr,h,wr,l,c),zc(Pc.set(.5,.5,0),Cr,h,wr,l,c),c0.set(0,0),Hh.set(1,0),u0.set(1,1);let d=t.ray.intersectTriangle(Oc,Qo,Pc,!1,Zo);if(d===null&&(zc(Qo.set(-.5,.5,0),Cr,h,wr,l,c),Hh.set(0,1),d=t.ray.intersectTriangle(Oc,Pc,Qo,!1,Zo),d===null))return;const m=t.ray.origin.distanceTo(Zo);m<t.near||m>t.far||i.push({distance:m,point:Zo.clone(),uv:vi.getInterpolation(Zo,Oc,Qo,Pc,c0,Hh,u0,new se),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zc(r,t,i,s,l,c){Dr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Ko.x=c*Dr.x-l*Dr.y,Ko.y=l*Dr.x+c*Dr.y):Ko.copy(Dr),r.copy(t),r.x+=Ko.x,r.y+=Ko.y,r.applyMatrix4(gv)}const Gh=new K,lM=new K,cM=new ce;class Ya{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Gh.subVectors(s,i).cross(lM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||cM.getNormalMatrix(t),l=this.coplanarPoint(Gh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new su,uM=new se(.5,.5),Bc=new K;class _v{constructor(t=new Ya,i=new Ya,s=new Ya,l=new Ya,c=new Ya,h=new Ya){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],x=c[6],S=c[7],E=c[8],A=c[9],y=c[10],g=c[11],P=c[12],U=c[13],w=c[14],O=c[15];if(l[0].setComponents(p-h,S-v,g-E,O-P).normalize(),l[1].setComponents(p+h,S+v,g+E,O+P).normalize(),l[2].setComponents(p+d,S+_,g+A,O+U).normalize(),l[3].setComponents(p-d,S-_,g-A,O-U).normalize(),s)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,S-x,g-y,O-w).normalize();else if(l[4].setComponents(p-m,S-x,g-y,O-w).normalize(),i===Vi)l[5].setComponents(p+m,S+x,g+y,O+w).normalize();else if(i===$c)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const i=uM.distanceTo(t.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nu=new K,iu=new K,f0=new ln,Jo=new Qd,Ic=new su,Vh=new K,h0=new K;class fM extends kn{constructor(t=new Si,i=new vv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)nu.fromBufferAttribute(i,l-1),iu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new Dn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;f0.copy(l).invert(),Jo.copy(t.ray).applyMatrix4(f0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let A=S,y=E-1;A<y;A+=p){const g=v.getX(A),P=v.getX(A+1),U=Fc(this,t,Jo,m,g,P,A);U&&i.push(U)}if(this.isLineLoop){const A=v.getX(E-1),y=v.getX(S),g=Fc(this,t,Jo,m,A,y,E-1);g&&i.push(g)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=S,y=E-1;A<y;A+=p){const g=Fc(this,t,Jo,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Fc(this,t,Jo,m,E-1,S,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(nu.fromBufferAttribute(d,l),iu.fromBufferAttribute(d,c),i.distanceSqToSegment(nu,iu,Vh,h0)>s)return;Vh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Vh);if(!(p<t.near||p>t.far))return{distance:p,point:h0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const d0=new K,p0=new K;class hM extends fM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)d0.fromBufferAttribute(i,l),p0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+d0.distanceTo(p0);t.setAttribute("lineDistance",new Dn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dM extends Vn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xv extends Vn{constructor(t,i,s=Ds,l,c,h,d=Ui,m=Ui,p,v=il,_=1){if(v!==il&&v!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ru extends Si{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],x=[],S=[];let E=0;const A=[],y=s/2;let g=0;P(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(S,2));function P(){const w=new K,O=new K;let I=0;const H=(i-t)/s;for(let V=0;V<=c;V++){const C=[],D=V/c,F=D*(i-t)+t;for(let it=0;it<=l;it++){const lt=it/l,ct=lt*m+d,ft=Math.sin(ct),z=Math.cos(ct);O.x=F*ft,O.y=-D*s+y,O.z=F*z,_.push(O.x,O.y,O.z),w.set(ft,H,z).normalize(),x.push(w.x,w.y,w.z),S.push(lt,1-D),C.push(E++)}A.push(C)}for(let V=0;V<l;V++)for(let C=0;C<c;C++){const D=A[C][V],F=A[C+1][V],it=A[C+1][V+1],lt=A[C][V+1];(t>0||C!==0)&&(v.push(D,F,lt),I+=3),(i>0||C!==c-1)&&(v.push(F,it,lt),I+=3)}p.addGroup(g,I,0),g+=I}function U(w){const O=E,I=new se,H=new K;let V=0;const C=w===!0?t:i,D=w===!0?1:-1;for(let it=1;it<=l;it++)_.push(0,y*D,0),x.push(0,D,0),S.push(.5,.5),E++;const F=E;for(let it=0;it<=l;it++){const ct=it/l*m+d,ft=Math.cos(ct),z=Math.sin(ct);H.x=C*z,H.y=y*D,H.z=C*ft,_.push(H.x,H.y,H.z),x.push(0,D,0),I.x=ft*.5+.5,I.y=z*.5*D+.5,S.push(I.x,I.y),E++}for(let it=0;it<l;it++){const lt=O+it,ct=F+it;w===!0?v.push(ct,ct+1,lt):v.push(ct+1,ct,lt),V+=3}p.addGroup(g,V,w===!0?1:2),g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jd extends ru{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Jd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,x=i/m,S=[],E=[],A=[],y=[];for(let g=0;g<v;g++){const P=g*x-h;for(let U=0;U<p;U++){const w=U*_-c;E.push(w,-P,0),A.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const U=P+p*g,w=P+p*(g+1),O=P+1+p*(g+1),I=P+1+p*g;S.push(U,w,I),S.push(w,O,I)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(A,3)),this.setAttribute("uv",new Dn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class $d extends Si{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],_=new K,x=new K,S=[],E=[],A=[],y=[];for(let g=0;g<=s;g++){const P=[],U=g/s;let w=0;g===0&&h===0?w=.5/i:g===s&&m===Math.PI&&(w=-.5/i);for(let O=0;O<=i;O++){const I=O/i;_.x=-t*Math.cos(l+I*c)*Math.sin(h+U*d),_.y=t*Math.cos(h+U*d),_.z=t*Math.sin(l+I*c)*Math.sin(h+U*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),y.push(I+w,1-U),P.push(p++)}v.push(P)}for(let g=0;g<s;g++)for(let P=0;P<i;P++){const U=v[g][P+1],w=v[g][P],O=v[g+1][P],I=v[g+1][P+1];(g!==0||h>0)&&S.push(U,w,I),(g!==s-1||m<Math.PI)&&S.push(w,O,I)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(A,3)),this.setAttribute("uv",new Dn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $d(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pM extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mM extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gM extends dv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class m0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vM extends Ls{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function g0(r,t,i,s){const l=xM(s);switch(i){case tv:return r*t;case nv:return r*t/l.components*l.byteLength;case Yd:return r*t/l.components*l.byteLength;case iv:return r*t*2/l.components*l.byteLength;case jd:return r*t*2/l.components*l.byteLength;case ev:return r*t*3/l.components*l.byteLength;case Di:return r*t*4/l.components*l.byteLength;case Zd:return r*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(r,16)*Math.max(t,8)/4;case hd:case pd:return Math.max(r,8)*Math.max(t,8)/2;case gd:case _d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jc:case Nd:case Od:return Math.ceil(r/4)*Math.ceil(t/4)*16;case av:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zd:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xM(r){switch(r){case da:case Q0:return{byteLength:1,components:1};case el:case J0:case sl:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case Ds:case Xd:case fa:return{byteLength:4,components:1};case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function SM(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,v);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],A=_[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,_[x]=A)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const A=_[S];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:yM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:bM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:RM,aomap_pars_fragment:wM,batching_pars_vertex:CM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:FM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:kM,common:XM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:qM,displacementmap_pars_vertex:YM,displacementmap_vertex:jM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:tE,envmap_pars_fragment:eE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:dE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:_E,lights_physical_fragment:vE,lights_physical_pars_fragment:xE,lights_fragment_begin:SE,lights_fragment_maps:yE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:wE,map_particle_fragment:CE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:zE,morphtarget_vertex:BE,normal_fragment_begin:IE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:jE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:tb,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:hb,tonemapping_pars_fragment:db,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:Sb,background_frag:yb,backgroundCube_vert:Mb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distanceRGBA_vert:wb,distanceRGBA_frag:Cb,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Lb,linedashed_frag:Nb,meshbasic_vert:Ob,meshbasic_frag:Pb,meshlambert_vert:zb,meshlambert_frag:Bb,meshmatcap_vert:Ib,meshmatcap_frag:Fb,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:kb,meshphysical_vert:Xb,meshphysical_frag:Wb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:jb,points_frag:Zb,shadow_vert:Kb,shadow_frag:Qb,sprite_vert:Jb,sprite_frag:$b},Ot={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Gn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Gn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Gn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Gn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Gn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Gn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Gn([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Gn([Ot.lights,Ot.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Hc={r:0,b:0,g:0},Ms=new pa,tT=new ln;function eT(r,t,i,s,l,c,h){const d=new De(0);let m=c===!0?0:1,p,v,_=null,x=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const O=E(U);O===null?g(d,m):O&&O.isColor&&(g(O,1),w=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,w){const O=E(w);O&&(O.isCubeTexture||O.mapping===au)?(v===void 0&&(v=new xi(new ol(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:kr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,H,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ms.copy(w.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Ms)),v.material.toneMapped=Ae.getTransfer(O.colorSpace)!==Ie,(_!==O||x!==O.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,_=O,x=O.version,S=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new xi(new ou(2,2),new ts({name:"BackgroundMaterial",uniforms:kr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(O.colorSpace)!==Ie,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,x=O.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,w){U.getRGB(Hc,hv(r)),s.buffers.color.setClear(Hc.r,Hc.g,Hc.b,w,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:A,addToRenderList:y,dispose:P}}function nT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(D,F,it,lt,ct){let ft=!1;const z=_(lt,it,F);c!==z&&(c=z,p(c.object)),ft=S(D,lt,it,ct),ft&&E(D,lt,it,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(D,F,it,lt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function _(D,F,it){const lt=it.wireframe===!0;let ct=s[D.id];ct===void 0&&(ct={},s[D.id]=ct);let ft=ct[F.id];ft===void 0&&(ft={},ct[F.id]=ft);let z=ft[lt];return z===void 0&&(z=x(m()),ft[lt]=z),z}function x(D){const F=[],it=[],lt=[];for(let ct=0;ct<i;ct++)F[ct]=0,it[ct]=0,lt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:it,attributeDivisors:lt,object:D,attributes:{},index:null}}function S(D,F,it,lt){const ct=c.attributes,ft=F.attributes;let z=0;const Z=it.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const L=ct[Y];let $=ft[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;z++}return c.attributesNum!==z||c.index!==lt}function E(D,F,it,lt){const ct={},ft=F.attributes;let z=0;const Z=it.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let L=ft[Y];L===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),ct[Y]=$,z++}c.attributes=ct,c.attributesNum=z,c.index=lt}function A(){const D=c.newAttributes;for(let F=0,it=D.length;F<it;F++)D[F]=0}function y(D){g(D,0)}function g(D,F){const it=c.newAttributes,lt=c.enabledAttributes,ct=c.attributeDivisors;it[D]=1,lt[D]===0&&(r.enableVertexAttribArray(D),lt[D]=1),ct[D]!==F&&(r.vertexAttribDivisor(D,F),ct[D]=F)}function P(){const D=c.newAttributes,F=c.enabledAttributes;for(let it=0,lt=F.length;it<lt;it++)F[it]!==D[it]&&(r.disableVertexAttribArray(it),F[it]=0)}function U(D,F,it,lt,ct,ft,z){z===!0?r.vertexAttribIPointer(D,F,it,ct,ft):r.vertexAttribPointer(D,F,it,lt,ct,ft)}function w(D,F,it,lt){A();const ct=lt.attributes,ft=it.getAttributes(),z=F.defaultAttributeValues;for(const Z in ft){const Y=ft[Z];if(Y.location>=0){let St=ct[Z];if(St===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const L=St.normalized,$=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const yt=xt.buffer,Ct=xt.type,nt=xt.bytesPerElement,pt=Ct===r.INT||Ct===r.UNSIGNED_INT||St.gpuType===Xd;if(St.isInterleavedBufferAttribute){const Mt=St.data,Pt=Mt.stride,Yt=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let ie=0;ie<Y.locationSize;ie++)g(Y.location+ie,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ie=0;ie<Y.locationSize;ie++)y(Y.location+ie);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let ie=0;ie<Y.locationSize;ie++)U(Y.location+ie,$/Y.locationSize,Ct,L,Pt*nt,(Yt+$/Y.locationSize*ie)*nt,pt)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<Y.locationSize;Mt++)g(Y.location+Mt,St.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)y(Y.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Mt=0;Mt<Y.locationSize;Mt++)U(Y.location+Mt,$/Y.locationSize,Ct,L,$*nt,$/Y.locationSize*Mt*nt,pt)}}else if(z!==void 0){const L=z[Z];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Y.location,L);break;case 3:r.vertexAttrib3fv(Y.location,L);break;case 4:r.vertexAttrib4fv(Y.location,L);break;default:r.vertexAttrib1fv(Y.location,L)}}}}P()}function O(){V();for(const D in s){const F=s[D];for(const it in F){const lt=F[it];for(const ct in lt)v(lt[ct].object),delete lt[ct];delete F[it]}delete s[D]}}function I(D){if(s[D.id]===void 0)return;const F=s[D.id];for(const it in F){const lt=F[it];for(const ct in lt)v(lt[ct].object),delete lt[ct];delete F[it]}delete s[D.id]}function H(D){for(const F in s){const it=s[F];if(it[D.id]===void 0)continue;const lt=it[D.id];for(const ct in lt)v(lt[ct].object),delete lt[ct];delete it[D.id]}}function V(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function iT(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let S=0;for(let E=0;E<_;E++)S+=v[E];i.update(S,s,1)}function m(p,v,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function aT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Di&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const V=H===sl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==da&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==fa&&!V)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:O,maxSamples:I}}function sT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ya,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,g=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?v(null):p();else{const P=c?0:s,U=P*4;let w=g.clippingState||null;m.value=w,w=v(E,x,U,S);for(let O=0;O!==U;++O)w[O]=i[O];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,x,S,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const g=S+A*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,w=S;U!==A;++U,w+=4)h.copy(_[U]).applyMatrix4(P,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function rT(r){let t=new WeakMap;function i(h,d){return d===ld?h.mapping=Hr:d===cd&&(h.mapping=Gr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new iM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Or=4,_0=[.125,.215,.35,.446,.526,.582],As=20,kh=new gM,v0=new De;let Xh=null,Wh=0,qh=0,Yh=!1;const bs=(1+Math.sqrt(5))/2,Ur=1/bs,x0=[new K(-bs,Ur,0),new K(bs,Ur,0),new K(-Ur,0,bs),new K(Ur,0,bs),new K(0,bs,-Ur),new K(0,bs,Ur),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],oT=new K;class S0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=oT}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,Gc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:sl,format:Di,colorSpace:Vr,depthBuffer:!1},l=y0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lT(c)),this._blurMaterial=cT(c,t,i)}return l}_compileMaterial(t){const i=new xi(this._lodPlanes[0],t);this._renderer.compile(i,kh)}_sceneToCubeUV(t,i,s,l,c){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(v0),_.toneMapping=Ka,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new tl({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),y=new xi(new ol,A);let g=!1;const P=t.background;P?P.isColor&&(A.color.copy(P),t.background=null,g=!0):(A.color.copy(v0),g=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const O=this._cubeSize;Gc(l,w*O,U>2?O:0,O,O),_.setRenderTarget(l),g&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=x,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hr||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new xi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Gc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,kh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=x0[(l-c-1)%x0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new xi(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*As-1),A=c/E,y=isFinite(c)?1+Math.floor(v*A):As;y>As&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${As}`);const g=[];let P=0;for(let H=0;H<As;++H){const V=H/A,C=Math.exp(-V*V/2);g.push(C),H===0?P+=C:H<y&&(P+=2*C)}for(let H=0;H<g.length;H++)g[H]=g[H]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const w=this._sizeLods[l],O=3*w*(l>U-Or?l-U+Or:0),I=4*(this._cubeSize-w);Gc(i,O,I,3*w,2*w),m.setRenderTarget(i),m.render(_,kh)}}function lT(r){const t=[],i=[],s=[];let l=r;const c=r-Or+1+_0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Or?m=_0[h-r+Or-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,_=1+p,x=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,E=6,A=3,y=2,g=1,P=new Float32Array(A*E*S),U=new Float32Array(y*E*S),w=new Float32Array(g*E*S);for(let I=0;I<S;I++){const H=I%3*2/3-1,V=I>2?0:-1,C=[H,V,0,H+2/3,V,0,H+2/3,V+1,0,H,V,0,H+2/3,V+1,0,H,V+1,0];P.set(C,A*E*I),U.set(x,y*E*I);const D=[I,I,I,I,I,I];w.set(D,g*E*I)}const O=new Si;O.setAttribute("position",new Li(P,A)),O.setAttribute("uv",new Li(U,y)),O.setAttribute("faceIndex",new Li(w,g)),t.push(O),l>Or&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function y0(r,t,i){const s=new Us(r,t,i);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function cT(r,t,i){const s=new Float32Array(As),l=new K(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function M0(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function E0(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,v=m===Hr||m===Gr;if(p||v){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new S0(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new S0(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function fT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Br("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function hT(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let U=0,w=P.length;U<w;U+=3){const O=P[U+0],I=P[U+1],H=P[U+2];x.push(O,I,I,H,H,O)}}else if(E!==void 0){const P=E.array;A=E.version;for(let U=0,w=P.length/3-1;U<w;U+=3){const O=U+0,I=U+1,H=U+2;x.push(O,I,I,H,H,O)}}else return;const y=new(rv(x)?fv:uv)(x,1);y.version=A;const g=c.get(_);g&&t.remove(g),c.set(_,y)}function v(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function dT(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*h),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function v(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];i.update(y,s,1)}function _(x,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,A,0,E);let g=0;for(let P=0;P<E;P++)g+=S[P]*A[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function pT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mT(r,t,i){const s=new WeakMap,l=new on;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let D=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var S=D;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let O=d.attributes.position.count*w,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const H=new Float32Array(O*I*4*_),V=new ov(H,O,I,_);V.type=fa,V.needsUpdate=!0;const C=w*4;for(let F=0;F<_;F++){const it=g[F],lt=P[F],ct=U[F],ft=O*I*4*F;for(let z=0;z<it.count;z++){const Z=z*C;E===!0&&(l.fromBufferAttribute(it,z),H[ft+Z+0]=l.x,H[ft+Z+1]=l.y,H[ft+Z+2]=l.z,H[ft+Z+3]=0),A===!0&&(l.fromBufferAttribute(lt,z),H[ft+Z+4]=l.x,H[ft+Z+5]=l.y,H[ft+Z+6]=l.z,H[ft+Z+7]=0),y===!0&&(l.fromBufferAttribute(ct,z),H[ft+Z+8]=l.x,H[ft+Z+9]=l.y,H[ft+Z+10]=l.z,H[ft+Z+11]=ct.itemSize===4?l.w:1)}}x={count:_,texture:V,size:new se(O,I)},s.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function gT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const yv=new Vn,b0=new xv(1,1),Mv=new ov,Ev=new Hy,bv=new pv,T0=[],A0=[],R0=new Float32Array(16),w0=new Float32Array(9),C0=new Float32Array(4);function Wr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=T0[l];if(c===void 0&&(c=new Float32Array(l),T0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function lu(r,t){let i=A0[t];i===void 0&&(i=new Int32Array(t),A0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function _T(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function vT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function xT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function ST(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function yT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;C0.set(s),r.uniformMatrix2fv(this.addr,!1,C0),Sn(i,s)}}function MT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;w0.set(s),r.uniformMatrix3fv(this.addr,!1,w0),Sn(i,s)}}function ET(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;R0.set(s),r.uniformMatrix4fv(this.addr,!1,R0),Sn(i,s)}}function bT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function wT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function LT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(b0.compareFunction=sv,c=b0):c=yv,i.setTexture2D(t||c,l)}function NT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ev,l)}function OT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function PT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Mv,l)}function zT(r){switch(r){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return ST;case 35674:return yT;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return bT;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return wT;case 36294:return CT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function BT(r,t){r.uniform1fv(this.addr,t)}function IT(r,t){const i=Wr(t,this.size,2);r.uniform2fv(this.addr,i)}function FT(r,t){const i=Wr(t,this.size,3);r.uniform3fv(this.addr,i)}function HT(r,t){const i=Wr(t,this.size,4);r.uniform4fv(this.addr,i)}function GT(r,t){const i=Wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function VT(r,t){const i=Wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function kT(r,t){const i=Wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function XT(r,t){r.uniform1iv(this.addr,t)}function WT(r,t){r.uniform2iv(this.addr,t)}function qT(r,t){r.uniform3iv(this.addr,t)}function YT(r,t){r.uniform4iv(this.addr,t)}function jT(r,t){r.uniform1uiv(this.addr,t)}function ZT(r,t){r.uniform2uiv(this.addr,t)}function KT(r,t){r.uniform3uiv(this.addr,t)}function QT(r,t){r.uniform4uiv(this.addr,t)}function JT(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||yv,c[h])}function $T(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ev,c[h])}function tA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function eA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Mv,c[h])}function nA(r){switch(r){case 5126:return BT;case 35664:return IT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class aA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function D0(r,t){r.seq.push(t),r.map[t.id]=t}function rA(r,t,i){const s=r.name,l=s.length;for(jh.lastIndex=0;;){const c=jh.exec(s),h=jh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){D0(i,p===void 0?new iA(d,r,t):new aA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new sA(d),D0(i,_)),i=_}}}class Kc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);rA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function U0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const oA=37297;let lA=0;function cA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const L0=new ce;function uA(r){Ae._getMatrix(L0,Ae.workingColorSpace,r);const t=`mat3( ${L0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case Jc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function N0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+cA(r.getShaderSource(t),d)}else return c}function fA(r,t){const i=uA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hA(r,t){let i;switch(t){case hy:i="Linear";break;case dy:i="Reinhard";break;case py:i="Cineon";break;case my:i="ACESFilmic";break;case _y:i="AgX";break;case vy:i="Neutral";break;case gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new K;function dA(){Ae.getLuminanceCoefficients(Vc);const r=Vc.x.toFixed(4),t=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function mA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function $o(r){return r!==""}function O0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(r){return r.replace(_A,xA)}const vA=new Map;function xA(r,t){let i=de[t];if(i===void 0){const s=vA.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Hd(i)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(r){return r.replace(SA,yA)}function yA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function B0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===j0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===WS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function EA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Gr:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function TA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Z0:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case fy:t="ENVMAP_BLENDING_ADD";break}return t}function AA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=MA(i),p=EA(i),v=bA(i),_=TA(i),x=AA(i),S=pA(i),E=mA(c),A=l.createProgram();let y,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),g.length>0&&(g+=`
`)):(y=[B0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),g=[B0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?de.tonemapping_pars_fragment:"",i.toneMapping!==Ka?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),dA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=Hd(h),h=O0(h,i),h=P0(h,i),d=Hd(d),d=O0(d,i),d=P0(d,i),h=z0(h),d=z0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=P+y+h,w=P+g+d,O=U0(l,l.VERTEX_SHADER,U),I=U0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,O),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(F){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(A)||"",lt=l.getShaderInfoLog(O)||"",ct=l.getShaderInfoLog(I)||"",ft=it.trim(),z=lt.trim(),Z=ct.trim();let Y=!0,St=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,O,I);else{const L=N0(l,O,"vertex"),$=N0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ft+`
`+L+`
`+$)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(z===""||Z==="")&&(St=!1);St&&(F.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:z,prefix:y},fragmentShader:{log:Z,prefix:g}})}l.deleteShader(O),l.deleteShader(I),V=new Kc(l,A),C=gA(l,A)}let V;this.getUniforms=function(){return V===void 0&&H(this),V};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,oA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=I,this}let wA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DA(t),i.set(t,s)),s}}class DA{constructor(t){this.id=wA++,this.code=t,this.usedTimes=0}}function UA(r,t,i,s,l,c,h){const d=new lv,m=new CA,p=new Set,v=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,F,it,lt){const ct=it.fog,ft=lt.geometry,z=C.isMeshStandardMaterial?it.environment:null,Z=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),Y=Z&&Z.mapping===au?Z.image.height:null,St=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,$=L!==void 0?L.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let yt,Ct,nt,pt;if(St){const Ee=Hi[St];yt=Ee.vertexShader,Ct=Ee.fragmentShader}else yt=C.vertexShader,Ct=C.fragmentShader,m.update(C),nt=m.getVertexShaderID(C),pt=m.getFragmentShaderID(C);const Mt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),Yt=lt.isInstancedMesh===!0,ie=lt.isBatchedMesh===!0,ke=!!C.map,ge=!!C.matcap,G=!!Z,we=!!C.aoMap,Qt=!!C.lightMap,Me=!!C.bumpMap,Ft=!!C.normalMap,Xe=!!C.displacementMap,Ht=!!C.emissiveMap,oe=!!C.metalnessMap,Ke=!!C.roughnessMap,Qe=C.anisotropy>0,N=C.clearcoat>0,b=C.dispersion>0,tt=C.iridescence>0,ht=C.sheen>0,vt=C.transmission>0,ut=Qe&&!!C.anisotropyMap,zt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Xt=N&&!!C.clearcoatRoughnessMap,qt=tt&&!!C.iridescenceMap,Et=tt&&!!C.iridescenceThicknessMap,Lt=ht&&!!C.sheenColorMap,Zt=ht&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Dt=!!C.specularColorMap,re=!!C.specularIntensityMap,X=vt&&!!C.transmissionMap,At=vt&&!!C.thicknessMap,wt=!!C.gradientMap,Bt=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,Vt=!!C.extensions;let ae=Ka;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ce={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:Ct,defines:C.defines,customVertexShaderID:nt,customFragmentShaderID:pt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ie,batchingColor:ie&&lt._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&lt.instanceColor!==null,instancingMorph:Yt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Vr,alphaToCoverage:!!C.alphaToCoverage,map:ke,matcap:ge,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:Y,aoMap:we,lightMap:Qt,bumpMap:Me,normalMap:Ft,displacementMap:x&&Xe,emissiveMap:Ht,normalMapObjectSpace:Ft&&C.normalMapType===Ey,normalMapTangentSpace:Ft&&C.normalMapType===My,metalnessMap:oe,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ut,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:re,transmission:vt,transmissionMap:X,thicknessMap:At,gradientMap:wt,opaque:C.transparent===!1&&C.blending===zr&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:ke&&A(C.map.channel),aoMapUv:we&&A(C.aoMap.channel),lightMapUv:Qt&&A(C.lightMap.channel),bumpMapUv:Me&&A(C.bumpMap.channel),normalMapUv:Ft&&A(C.normalMap.channel),displacementMapUv:Xe&&A(C.displacementMap.channel),emissiveMapUv:Ht&&A(C.emissiveMap.channel),metalnessMapUv:oe&&A(C.metalnessMap.channel),roughnessMapUv:Ke&&A(C.roughnessMap.channel),anisotropyMapUv:ut&&A(C.anisotropyMap.channel),clearcoatMapUv:zt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&A(C.sheenRoughnessMap.channel),specularMapUv:kt&&A(C.specularMap.channel),specularColorMapUv:Dt&&A(C.specularColorMap.channel),specularIntensityMapUv:re&&A(C.specularIntensityMap.channel),transmissionMapUv:X&&A(C.transmissionMap.channel),thicknessMapUv:At&&A(C.thicknessMap.channel),alphaMapUv:Bt&&A(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ft||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(ke||Bt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Ie,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ua,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||ie)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function g(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)D.push(F),D.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(D,C),U(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function w(C){const D=E[C.type];let F;if(D){const it=Hi[D];F=$y.clone(it.uniforms)}else F=C.uniforms;return F}function O(C,D){let F;for(let it=0,lt=v.length;it<lt;it++){const ct=v[it];if(ct.cacheKey===D){F=ct,++F.usedTimes;break}}return F===void 0&&(F=new RA(r,D,C,c),v.push(F)),F}function I(C){if(--C.usedTimes===0){const D=v.indexOf(C);v[D]=v[v.length-1],v.pop(),C.destroy()}}function H(C){m.remove(C)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:O,releaseProgram:I,releaseShaderCache:H,programs:v,dispose:V}}function LA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function NA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function I0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function F0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,S,E,A,y){let g=r[t];return g===void 0?(g={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:A,group:y},r[t]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=A,g.group=y),t++,g}function d(_,x,S,E,A,y){const g=h(_,x,S,E,A,y);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function m(_,x,S,E,A,y){const g=h(_,x,S,E,A,y);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,x){i.length>1&&i.sort(_||NA),s.length>1&&s.sort(x||I0),l.length>1&&l.sort(x||I0)}function v(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function OA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new F0,r.set(s,[h])):l>=c.length?(h=new F0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new De};break;case"SpotLight":i={position:new K,direction:new K,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function zA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let BA=0;function IA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function FA(r){const t=new PA,i=zA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new ln,h=new ln;function d(p){let v=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,A=0,y=0,g=0,P=0,U=0,w=0,O=0,I=0,H=0;p.sort(IA);for(let C=0,D=p.length;C<D;C++){const F=p[C],it=F.color,lt=F.intensity,ct=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=it.r*lt,_+=it.g*lt,x+=it.b*lt;else if(F.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(F.sh.coefficients[z],lt);H++}else if(F.isDirectionalLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[S]=Y,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=F.shadow.matrix,P++}s.directional[S]=z,S++}else if(F.isSpotLight){const z=t.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(it).multiplyScalar(lt),z.distance=ct,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,s.spot[A]=z;const Z=F.shadow;if(F.map&&(s.spotLightMap[O]=F.map,O++,Z.updateMatrices(F),F.castShadow&&I++),s.spotLightMatrix[A]=Z.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=ft,w++}A++}else if(F.isRectAreaLight){const z=t.get(F);z.color.copy(it).multiplyScalar(lt),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=z,y++}else if(F.isPointLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),z.distance=F.distance,z.decay=F.decay,F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=F.shadow.matrix,U++}s.point[E]=z,E++}else if(F.isHemisphereLight){const z=t.get(F);z.skyColor.copy(F.color).multiplyScalar(lt),z.groundColor.copy(F.groundColor).multiplyScalar(lt),s.hemi[g]=z,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==A||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==P||V.numPointShadows!==U||V.numSpotShadows!==w||V.numSpotMaps!==O||V.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+O-I,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=H,V.directionalLength=S,V.pointLength=E,V.spotLength=A,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=P,V.numPointShadows=U,V.numSpotShadows=w,V.numSpotMaps=O,V.numLightProbes=H,s.version=BA++)}function m(p,v){let _=0,x=0,S=0,E=0,A=0;const y=v.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const U=p[g];if(U.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),_++}else if(U.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=s.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function H0(r){const t=new FA(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function HA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new H0(r),t.set(l,[d])):c>=h.length?(d=new H0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kA(r,t,i){let s=new _v;const l=new se,c=new se,h=new on,d=new pM({depthPacking:yy}),m=new mM,p={},v=i.maxTextureSize,_={[Ja]:Qn,[Qn]:Ja,[ua]:ua},x=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Si;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new xi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let g=this.type;this.render=function(I,H,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),it=r.state;it.setBlending(Za),it.buffers.depth.getReversed()?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const lt=g!==ca&&this.type===ca,ct=g===ca&&this.type!==ca;for(let ft=0,z=I.length;ft<z;ft++){const Z=I[ft],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const St=Y.getFrameExtents();if(l.multiply(St),c.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,Y.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||ct===!0){const $=this.type!==ca?{minFilter:Ui,magFilter:Ui}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Us(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const xt=Y.getViewport($);h.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),it.viewport(h),Y.updateMatrices(Z,$),s=Y.getFrustum(),w(H,V,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ca&&P(Y,V),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(C,D,F)};function P(I,H){const V=t.update(A);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Us(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(H,null,V,x,A,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(H,null,V,S,A,null)}function U(I,H,V,C){let D=null;const F=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)D=F;else if(D=V.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const it=D.uuid,lt=H.uuid;let ct=p[it];ct===void 0&&(ct={},p[it]=ct);let ft=ct[lt];ft===void 0&&(ft=D.clone(),ct[lt]=ft,H.addEventListener("dispose",O)),D=ft}if(D.visible=H.visible,D.wireframe=H.wireframe,C===ca?D.side=H.shadowSide!==null?H.shadowSide:H.side:D.side=H.shadowSide!==null?H.shadowSide:_[H.side],D.alphaMap=H.alphaMap,D.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,D.map=H.map,D.clipShadows=H.clipShadows,D.clippingPlanes=H.clippingPlanes,D.clipIntersection=H.clipIntersection,D.displacementMap=H.displacementMap,D.displacementScale=H.displacementScale,D.displacementBias=H.displacementBias,D.wireframeLinewidth=H.wireframeLinewidth,D.linewidth=H.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const it=r.properties.get(D);it.light=V}return D}function w(I,H,V,C,D){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===ca)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const lt=t.update(I),ct=I.material;if(Array.isArray(ct)){const ft=lt.groups;for(let z=0,Z=ft.length;z<Z;z++){const Y=ft[z],St=ct[Y.materialIndex];if(St&&St.visible){const L=U(I,St,C,D);I.onBeforeShadow(r,I,H,V,lt,L,Y),r.renderBufferDirect(V,null,lt,L,I,Y),I.onAfterShadow(r,I,H,V,lt,L,Y)}}}else if(ct.visible){const ft=U(I,ct,C,D);I.onBeforeShadow(r,I,H,V,lt,ft,null),r.renderBufferDirect(V,null,lt,ft,I,null),I.onAfterShadow(r,I,H,V,lt,ft,null)}}const it=I.children;for(let lt=0,ct=it.length;lt<ct;lt++)w(it[lt],H,V,C,D)}function O(I){I.target.removeEventListener("dispose",O);for(const V in p){const C=p[V],D=I.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const XA={[ed]:nd,[id]:rd,[ad]:od,[Fr]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:Fr};function WA(r,t){function i(){let X=!1;const At=new on;let wt=null;const Bt=new on(0,0,0,0);return{setMask:function(bt){wt!==bt&&!X&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,_t,Vt,ae,Ce){Ce===!0&&(bt*=ae,_t*=ae,Vt*=ae),At.set(bt,_t,Vt,ae),Bt.equals(At)===!1&&(r.clearColor(bt,_t,Vt,ae),Bt.copy(At))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,wt=null,Bt=null,bt=null;return{setReversed:function(_t){if(At!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(_t){_t?Mt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(r.depthMask(_t),wt=_t)},setFunc:function(_t){if(At&&(_t=XA[_t]),Bt!==_t){switch(_t){case ed:r.depthFunc(r.NEVER);break;case nd:r.depthFunc(r.ALWAYS);break;case id:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case ad:r.depthFunc(r.EQUAL);break;case sd:r.depthFunc(r.GEQUAL);break;case rd:r.depthFunc(r.GREATER);break;case od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){bt!==_t&&(At&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){X=!1,wt=null,Bt=null,bt=null,At=!1}}}function l(){let X=!1,At=null,wt=null,Bt=null,bt=null,_t=null,Vt=null,ae=null,Ce=null;return{setTest:function(Ee){X||(Ee?Mt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!X&&(r.stencilMask(Ee),At=Ee)},setFunc:function(Ee,yi,dn){(wt!==Ee||Bt!==yi||bt!==dn)&&(r.stencilFunc(Ee,yi,dn),wt=Ee,Bt=yi,bt=dn)},setOp:function(Ee,yi,dn){(_t!==Ee||Vt!==yi||ae!==dn)&&(r.stencilOp(Ee,yi,dn),_t=Ee,Vt=yi,ae=dn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ce!==Ee&&(r.clearStencil(Ee),Ce=Ee)},reset:function(){X=!1,At=null,wt=null,Bt=null,bt=null,_t=null,Vt=null,ae=null,Ce=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,P=null,U=null,w=null,O=null,I=null,H=new De(0,0,0),V=0,C=!1,D=null,F=null,it=null,lt=null,ct=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Z>=2);let St=null,L={};const $=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),yt=new on().fromArray($),Ct=new on().fromArray(xt);function nt(X,At,wt,Bt){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<wt;Vt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(At+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const pt={};pt[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),pt[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pt[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),h.setFunc(Fr),Me(!1),Ft(H_),Mt(r.CULL_FACE),we(Za);function Mt(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Pt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Yt(X,At){return _[X]!==At?(r.bindFramebuffer(X,At),_[X]=At,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=At),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=At),!0):!1}function ie(X,At){let wt=S,Bt=!1;if(X){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const bt=X.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Vt=bt.length;_t<Vt;_t++)wt[_t]=r.COLOR_ATTACHMENT0+_t;wt.length=bt.length,Bt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(wt)}function ke(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const ge={[Ts]:r.FUNC_ADD,[YS]:r.FUNC_SUBTRACT,[jS]:r.FUNC_REVERSE_SUBTRACT};ge[ZS]=r.MIN,ge[KS]=r.MAX;const G={[QS]:r.ZERO,[JS]:r.ONE,[$S]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[sy]:r.SRC_ALPHA_SATURATE,[iy]:r.DST_COLOR,[ey]:r.DST_ALPHA,[ty]:r.ONE_MINUS_SRC_COLOR,[td]:r.ONE_MINUS_SRC_ALPHA,[ay]:r.ONE_MINUS_DST_COLOR,[ny]:r.ONE_MINUS_DST_ALPHA,[ry]:r.CONSTANT_COLOR,[oy]:r.ONE_MINUS_CONSTANT_COLOR,[ly]:r.CONSTANT_ALPHA,[cy]:r.ONE_MINUS_CONSTANT_ALPHA};function we(X,At,wt,Bt,bt,_t,Vt,ae,Ce,Ee){if(X===Za){A===!0&&(Pt(r.BLEND),A=!1);return}if(A===!1&&(Mt(r.BLEND),A=!0),X!==qS){if(X!==y||Ee!==C){if((g!==Ts||w!==Ts)&&(r.blendEquation(r.FUNC_ADD),g=Ts,w=Ts),Ee)switch(X){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G_:r.blendFunc(r.ONE,r.ONE);break;case V_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case k_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case V_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,U=null,O=null,I=null,H.set(0,0,0),V=0,y=X,C=Ee}return}bt=bt||At,_t=_t||wt,Vt=Vt||Bt,(At!==g||bt!==w)&&(r.blendEquationSeparate(ge[At],ge[bt]),g=At,w=bt),(wt!==P||Bt!==U||_t!==O||Vt!==I)&&(r.blendFuncSeparate(G[wt],G[Bt],G[_t],G[Vt]),P=wt,U=Bt,O=_t,I=Vt),(ae.equals(H)===!1||Ce!==V)&&(r.blendColor(ae.r,ae.g,ae.b,Ce),H.copy(ae),V=Ce),y=X,C=!1}function Qt(X,At){X.side===ua?Pt(r.CULL_FACE):Mt(r.CULL_FACE);let wt=X.side===Qn;At&&(wt=!wt),Me(wt),X.blending===zr&&X.transparent===!1?we(Za):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(X){D!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),D=X)}function Ft(X){X!==kS?(Mt(r.CULL_FACE),X!==F&&(X===H_?r.cullFace(r.BACK):X===XS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),F=X}function Xe(X){X!==it&&(z&&r.lineWidth(X),it=X)}function Ht(X,At,wt){X?(Mt(r.POLYGON_OFFSET_FILL),(lt!==At||ct!==wt)&&(r.polygonOffset(At,wt),lt=At,ct=wt)):Pt(r.POLYGON_OFFSET_FILL)}function oe(X){X?Mt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+ft-1),St!==X&&(r.activeTexture(X),St=X)}function Qe(X,At,wt){wt===void 0&&(St===null?wt=r.TEXTURE0+ft-1:wt=St);let Bt=L[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[wt]=Bt),(Bt.type!==X||Bt.texture!==At)&&(St!==wt&&(r.activeTexture(wt),St=wt),r.bindTexture(X,At||pt[X]),Bt.type=X,Bt.texture=At)}function N(){const X=L[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){yt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Zt(X){Ct.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function kt(X,At){let wt=p.get(At);wt===void 0&&(wt=new WeakMap,p.set(At,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(At,X.name),wt.set(X,Bt))}function Dt(X,At){const Bt=p.get(At).get(X);m.get(At)!==Bt&&(r.uniformBlockBinding(At,Bt,X.__bindingPointIndex),m.set(At,Bt))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},St=null,L={},_={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,P=null,U=null,w=null,O=null,I=null,H=new De(0,0,0),V=0,C=!1,D=null,F=null,it=null,lt=null,ct=null,yt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:Pt,bindFramebuffer:Yt,drawBuffers:ie,useProgram:ke,setBlending:we,setMaterial:Qt,setFlipSided:Me,setCullFace:Ft,setLineWidth:Xe,setPolygonOffset:Ht,setScissorTest:oe,activeTexture:Ke,bindTexture:Qe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Lt,viewport:Zt,reset:re}}function qA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,v=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):tu("canvas")}function A(N,b,tt){let ht=1;const vt=Qe(N);if((vt.width>tt||vt.height>tt)&&(ht=tt/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ht*vt.width),zt=Math.floor(ht*vt.height);_===void 0&&(_=E(ut,zt));const Rt=b?E(ut,zt):_;return Rt.width=ut,Rt.height=zt,Rt.getContext("2d").drawImage(N,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+zt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,tt,ht,vt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=b;if(b===r.RED&&(tt===r.FLOAT&&(ut=r.R32F),tt===r.HALF_FLOAT&&(ut=r.R16F),tt===r.UNSIGNED_BYTE&&(ut=r.R8)),b===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.R8UI),tt===r.UNSIGNED_SHORT&&(ut=r.R16UI),tt===r.UNSIGNED_INT&&(ut=r.R32UI),tt===r.BYTE&&(ut=r.R8I),tt===r.SHORT&&(ut=r.R16I),tt===r.INT&&(ut=r.R32I)),b===r.RG&&(tt===r.FLOAT&&(ut=r.RG32F),tt===r.HALF_FLOAT&&(ut=r.RG16F),tt===r.UNSIGNED_BYTE&&(ut=r.RG8)),b===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RG16UI),tt===r.UNSIGNED_INT&&(ut=r.RG32UI),tt===r.BYTE&&(ut=r.RG8I),tt===r.SHORT&&(ut=r.RG16I),tt===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),tt===r.UNSIGNED_INT&&(ut=r.RGB32UI),tt===r.BYTE&&(ut=r.RGB8I),tt===r.SHORT&&(ut=r.RGB16I),tt===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ut=r.RGBA32UI),tt===r.BYTE&&(ut=r.RGBA8I),tt===r.SHORT&&(ut=r.RGBA16I),tt===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),b===r.RGBA){const zt=vt?Jc:Ae.getTransfer(ht);tt===r.FLOAT&&(ut=r.RGBA32F),tt===r.HALF_FLOAT&&(ut=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ut=zt===Ie?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function w(N,b){let tt;return N?b===null||b===Ds||b===nl?tt=r.DEPTH24_STENCIL8:b===fa?tt=r.DEPTH32F_STENCIL8:b===el&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ds||b===nl?tt=r.DEPTH_COMPONENT24:b===fa?tt=r.DEPTH_COMPONENT32F:b===el&&(tt=r.DEPTH_COMPONENT16),tt}function O(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ui&&N.minFilter!==Ci?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function I(N){const b=N.target;b.removeEventListener("dispose",I),V(b),b.isVideoTexture&&v.delete(b)}function H(N){const b=N.target;b.removeEventListener("dispose",H),D(b)}function V(N){const b=s.get(N);if(b.__webglInit===void 0)return;const tt=N.source,ht=x.get(tt);if(ht){const vt=ht[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(N),Object.keys(ht).length===0&&x.delete(tt)}s.remove(N)}function C(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const tt=N.source,ht=x.get(tt);delete ht[b.__cacheKey],h.memory.textures--}function D(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let vt=0;vt<b.__webglFramebuffer[ht].length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][vt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=N.textures;for(let ht=0,vt=tt.length;ht<vt;ht++){const ut=s.get(tt[ht]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(tt[ht])}s.remove(N)}let F=0;function it(){F=0}function lt(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function ct(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ft(N,b){const tt=s.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(tt,N,b);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+b)}function z(N,b){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){pt(tt,N,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+b)}function Z(N,b){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){pt(tt,N,b);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+b)}function Y(N,b){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){Mt(tt,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+b)}const St={[ud]:r.REPEAT,[Rs]:r.CLAMP_TO_EDGE,[fd]:r.MIRRORED_REPEAT},L={[Ui]:r.NEAREST,[xy]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},$={[by]:r.NEVER,[Dy]:r.ALWAYS,[Ty]:r.LESS,[sv]:r.LEQUAL,[Ay]:r.EQUAL,[Cy]:r.GEQUAL,[Ry]:r.GREATER,[wy]:r.NOTEQUAL};function xt(N,b){if(b.type===fa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ci||b.magFilter===_h||b.magFilter===_c||b.magFilter===ws||b.minFilter===Ci||b.minFilter===_h||b.minFilter===_c||b.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,St[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,St[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,St[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==_c&&b.minFilter!==ws||b.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const ht=b.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const ut=ct(b);if(ut!==N.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ut].usedTimes++;const zt=vt[N.__cacheKey];zt!==void 0&&(vt[N.__cacheKey].usedTimes--,zt.usedTimes===0&&C(b)),N.__cacheKey=ut,N.__webglTexture=vt[ut].texture}return tt}function Ct(N,b,tt){return Math.floor(Math.floor(N/tt)/b)}function nt(N,b,tt,ht){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,tt,ht,b.data);else{ut.sort((Et,Lt)=>Et.start-Lt.start);let zt=0;for(let Et=1;Et<ut.length;Et++){const Lt=ut[zt],Zt=ut[Et],kt=Lt.start+Lt.count,Dt=Ct(Zt.start,b.width,4),re=Ct(Lt.start,b.width,4);Zt.start<=kt+1&&Dt===re&&Ct(Zt.start+Zt.count-1,b.width,4)===Dt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++zt,ut[zt]=Zt)}ut.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,Lt=ut.length;Et<Lt;Et++){const Zt=ut[Et],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),re=kt%b.width,X=Math.floor(kt/b.width),At=Dt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,re,X,At,wt,tt,ht,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function pt(N,b,tt){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const vt=yt(N,b),ut=b.source;i.bindTexture(ht,N.__webglTexture,r.TEXTURE0+tt);const zt=s.get(ut);if(ut.version!==zt.__version||vt===!0){i.activeTexture(r.TEXTURE0+tt);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Xt=b.colorSpace===ja?null:Ae.getPrimaries(b.colorSpace),qt=b.colorSpace===ja||Rt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=A(b.image,!1,l.maxTextureSize);Et=Ke(b,Et);const Lt=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let kt=U(b.internalFormat,Lt,Zt,b.colorSpace,b.isVideoTexture);xt(ht,b);let Dt;const re=b.mipmaps,X=b.isVideoTexture!==!0,At=zt.__version===void 0||vt===!0,wt=ut.dataReady,Bt=O(b,Et);if(b.isDepthTexture)kt=w(b.format===al,b.type),At&&(X?i.texStorage2D(r.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,Zt,null));else if(b.isDataTexture)if(re.length>0){X&&At&&i.texStorage2D(r.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let bt=0,_t=re.length;bt<_t;bt++)Dt=re[bt],X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data);b.generateMipmaps=!1}else X?(At&&i.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height),wt&&nt(b,Et,Lt,Zt)):i.texImage2D(r.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,Zt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,re[0].width,re[0].height,Et.depth);for(let bt=0,_t=re.length;bt<_t;bt++)if(Dt=re[bt],b.format!==Di)if(Lt!==null)if(X){if(wt)if(b.layerUpdates.size>0){const Vt=g0(Dt.width,Dt.height,b.format,b.type);for(const ae of b.layerUpdates){const Ce=Dt.data.subarray(ae*Vt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ae,Dt.width,Dt.height,1,Lt,Ce)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Zt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Dt.width,Dt.height,Et.depth,0,Lt,Zt,Dt.data)}else{X&&At&&i.texStorage2D(r.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let bt=0,_t=re.length;bt<_t;bt++)Dt=re[bt],b.format!==Di?Lt!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data)}else if(b.isDataArrayTexture)if(X){if(At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,Et.width,Et.height,Et.depth),wt)if(b.layerUpdates.size>0){const bt=g0(Et.width,Et.height,b.format,b.type);for(const _t of b.layerUpdates){const Vt=Et.data.subarray(_t*bt/Et.data.BYTES_PER_ELEMENT,(_t+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Lt,Zt,Vt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Zt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,Lt,Zt,Et.data);else if(b.isData3DTexture)X?(At&&i.texStorage3D(r.TEXTURE_3D,Bt,kt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Zt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,Lt,Zt,Et.data);else if(b.isFramebufferTexture){if(At)if(X)i.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height);else{let bt=Et.width,_t=Et.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,kt,bt,_t,0,Lt,Zt,null),bt>>=1,_t>>=1}}else if(re.length>0){if(X&&At){const bt=Qe(re[0]);i.texStorage2D(r.TEXTURE_2D,Bt,kt,bt.width,bt.height)}for(let bt=0,_t=re.length;bt<_t;bt++)Dt=re[bt],X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt,Zt,Dt):i.texImage2D(r.TEXTURE_2D,bt,kt,Lt,Zt,Dt);b.generateMipmaps=!1}else if(X){if(At){const bt=Qe(Et);i.texStorage2D(r.TEXTURE_2D,Bt,kt,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Zt,Et)}else i.texImage2D(r.TEXTURE_2D,0,kt,Lt,Zt,Et);y(b)&&g(ht),zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Mt(N,b,tt){if(b.image.length!==6)return;const ht=yt(N,b),vt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+tt);const ut=s.get(vt);if(vt.version!==ut.__version||ht===!0){i.activeTexture(r.TEXTURE0+tt);const zt=Ae.getPrimaries(Ae.workingColorSpace),Rt=b.colorSpace===ja?null:Ae.getPrimaries(b.colorSpace),Xt=b.colorSpace===ja||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!qt&&!Et?Lt[_t]=A(b.image[_t],!0,l.maxCubemapSize):Lt[_t]=Et?b.image[_t].image:b.image[_t],Lt[_t]=Ke(b,Lt[_t]);const Zt=Lt[0],kt=c.convert(b.format,b.colorSpace),Dt=c.convert(b.type),re=U(b.internalFormat,kt,Dt,b.colorSpace),X=b.isVideoTexture!==!0,At=ut.__version===void 0||ht===!0,wt=vt.dataReady;let Bt=O(b,Zt);xt(r.TEXTURE_CUBE_MAP,b);let bt;if(qt){X&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,re,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){bt=Lt[_t].mipmaps;for(let Vt=0;Vt<bt.length;Vt++){const ae=bt[Vt];b.format!==Di?kt!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,ae.width,ae.height,kt,Dt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,re,ae.width,ae.height,0,kt,Dt,ae.data)}}}else{if(bt=b.mipmaps,X&&At){bt.length>0&&Bt++;const _t=Qe(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,kt,Dt,Lt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Lt[_t].width,Lt[_t].height,0,kt,Dt,Lt[_t].data);for(let Vt=0;Vt<bt.length;Vt++){const Ce=bt[Vt].image[_t].image;X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Ce.width,Ce.height,kt,Dt,Ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,re,Ce.width,Ce.height,0,kt,Dt,Ce.data)}}else{X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Dt,Lt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,kt,Dt,Lt[_t]);for(let Vt=0;Vt<bt.length;Vt++){const ae=bt[Vt];X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,kt,Dt,ae.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,re,kt,Dt,ae.image[_t])}}}y(b)&&g(r.TEXTURE_CUBE_MAP),ut.__version=vt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Pt(N,b,tt,ht,vt,ut){const zt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Xt=U(tt.internalFormat,zt,Rt,tt.colorSpace),qt=s.get(b),Et=s.get(tt);if(Et.__renderTarget=b,!qt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ut),Zt=Math.max(1,b.height>>ut);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,ut,Xt,Lt,Zt,b.depth,0,zt,Rt,null):i.texImage2D(vt,ut,Xt,Lt,Zt,0,zt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,vt,Et.__webglTexture,0,Xe(b)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,vt,Et.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(N,b,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ht=b.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,ut=w(b.stencilBuffer,vt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=Xe(b);Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ut,b.width,b.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,N)}else{const ht=b.textures;for(let vt=0;vt<ht.length;vt++){const ut=ht[vt],zt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Xt=U(ut.internalFormat,zt,Rt,ut.colorSpace),qt=Xe(b);tt&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Xt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const vt=ht.__webglTexture,ut=Xe(b);if(b.depthTexture.format===il)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(b.depthTexture.format===al)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ke(N){const b=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=ht}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?ie(b.__webglFramebuffer[0],N):ie(b.__webglFramebuffer,N)}else if(tt){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Yt(b.__webglDepthbuffer[ht],N,!1);else{const vt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ut)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Yt(b.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(N,b,tt){const ht=s.get(N);b!==void 0&&Pt(ht.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&ke(N)}function G(N){const b=N.texture,tt=s.get(N),ht=s.get(b);N.addEventListener("dispose",H);const vt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)tt.__webglFramebuffer[Rt][Xt]=r.createFramebuffer()}else tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const qt=s.get(vt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&Ht(N)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];tt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const qt=c.convert(Xt.format,Xt.colorSpace),Et=c.convert(Xt.type),Lt=U(Xt.internalFormat,qt,Et,Xt.colorSpace,N.isXRRenderTarget===!0),Zt=Xe(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Lt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Rt][Xt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Pt(tt.__webglFramebuffer[Rt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(b)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const qt=vt[Rt],Et=s.get(qt);let Lt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Et.__webglTexture),xt(Lt,qt),Pt(tt.__webglFramebuffer,N,qt,r.COLOR_ATTACHMENT0+Rt,Lt,0),y(qt)&&g(Lt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Xt],N,b,r.COLOR_ATTACHMENT0,Rt,Xt);else Pt(tt.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Rt,0);y(b)&&g(Rt),i.unbindTexture()}N.depthBuffer&&ke(N)}function we(N){const b=N.textures;for(let tt=0,ht=b.length;tt<ht;tt++){const vt=b[tt];if(y(vt)){const ut=P(N),zt=s.get(vt).__webglTexture;i.bindTexture(ut,zt),g(ut),i.unbindTexture()}}}const Qt=[],Me=[];function Ft(N){if(N.samples>0){if(Ht(N)===!1){const b=N.textures,tt=N.width,ht=N.height;let vt=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=s.get(N),Rt=b.length>1;if(Rt)for(let qt=0;qt<b.length;qt++)i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<b.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Et=s.get(b[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,vt,r.NEAREST),m===!0&&(Qt.length=0,Me.length=0,Qt.push(r.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ut),Me.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<b.length;qt++){i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Et=s.get(b[qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Xe(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(N){const b=h.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Ke(N,b){const tt=N.colorSpace,ht=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Vr&&tt!==ja&&(Ae.getTransfer(tt)===Ie?(ht!==Di||vt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=it,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=G,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ht}function YA(r,t){function i(s,l=ja){let c;const h=Ae.getTransfer(l);if(s===da)return r.UNSIGNED_BYTE;if(s===Wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===qd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Q0)return r.BYTE;if(s===J0)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===Xd)return r.INT;if(s===Ds)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===sl)return r.HALF_FLOAT;if(s===tv)return r.ALPHA;if(s===ev)return r.RGB;if(s===Di)return r.RGBA;if(s===il)return r.DEPTH_COMPONENT;if(s===al)return r.DEPTH_STENCIL;if(s===nv)return r.RED;if(s===Yd)return r.RED_INTEGER;if(s===iv)return r.RG;if(s===jd)return r.RG_INTEGER;if(s===Zd)return r.RGBA_INTEGER;if(s===Xc||s===Wc||s===qc||s===Yc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===_d||s===vd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===_d)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xd||s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===wd||s===Cd||s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===Nd||s===Od)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jc)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===av||s===Pd||s===zd||s===Bd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class Tv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Tv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ts({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new ou(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends Ls{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,x=null,S=null,E=null;const A=new KA,y={},g=i.getContextAttributes();let P=null,U=null;const w=[],O=[],I=new se;let H=null;const V=new _i;V.viewport=new on;const C=new _i;C.viewport=new on;const D=[V,C],F=new _M;let it=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Fh,w[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Fh,w[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Fh,w[nt]=pt),pt.getHandSpace()};function ct(nt){const pt=O.indexOf(nt.inputSource);if(pt===-1)return;const Mt=w[pt];Mt!==void 0&&(Mt.update(nt.inputSource,nt.frame,p||h),Mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ft(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",z);for(let nt=0;nt<w.length;nt++){const pt=O[nt];pt!==null&&(O[nt]=null,w[nt].disconnect(pt))}it=null,lt=null,A.reset();for(const nt in y)delete y[nt];t.setRenderTarget(P),S=null,x=null,_=null,l=null,U=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,Yt=null;g.depth&&(Yt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=g.stencil?al:il,Pt=g.stencil?nl:Ds);const ie={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};x=_.createProjectionLayer(ie),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Us(x.textureWidth,x.textureHeight,{format:Di,type:da,depthTexture:new xv(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Us(S.framebufferWidth,S.framebufferHeight,{format:Di,type:da,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function z(nt){for(let pt=0;pt<nt.removed.length;pt++){const Mt=nt.removed[pt],Pt=O.indexOf(Mt);Pt>=0&&(O[Pt]=null,w[Pt].disconnect(Mt))}for(let pt=0;pt<nt.added.length;pt++){const Mt=nt.added[pt];let Pt=O.indexOf(Mt);if(Pt===-1){for(let ie=0;ie<w.length;ie++)if(ie>=O.length){O.push(Mt),Pt=ie;break}else if(O[ie]===null){O[ie]=Mt,Pt=ie;break}if(Pt===-1)break}const Yt=w[Pt];Yt&&Yt.connect(Mt)}}const Z=new K,Y=new K;function St(nt,pt,Mt){Z.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Pt=Z.distanceTo(Y),Yt=pt.projectionMatrix.elements,ie=Mt.projectionMatrix.elements,ke=Yt[14]/(Yt[10]-1),ge=Yt[14]/(Yt[10]+1),G=(Yt[9]+1)/Yt[5],we=(Yt[9]-1)/Yt[5],Qt=(Yt[8]-1)/Yt[0],Me=(ie[8]+1)/ie[0],Ft=ke*Qt,Xe=ke*Me,Ht=Pt/(-Qt+Me),oe=Ht*-Qt;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(oe),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Yt[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ke=ke+Ht,Qe=ge+Ht,N=Ft-oe,b=Xe+(Pt-oe),tt=G*ge/Qe*Ke,ht=we*ge/Qe*Ke;nt.projectionMatrix.makePerspective(N,b,tt,ht,Ke,Qe),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let pt=nt.near,Mt=nt.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(Mt=A.depthFar)),F.near=C.near=V.near=pt,F.far=C.far=V.far=Mt,(it!==F.near||lt!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),it=F.near,lt=F.far),F.layers.mask=nt.layers.mask|6,V.layers.mask=F.layers.mask&3,C.layers.mask=F.layers.mask&5;const Pt=nt.parent,Yt=F.cameras;L(F,Pt);for(let ie=0;ie<Yt.length;ie++)L(Yt[ie],Pt);Yt.length===2?St(F,V,C):F.projectionMatrix.copy(V.projectionMatrix),$(nt,F,Pt)};function $(nt,pt,Mt){Mt===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Fd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(F)},this.getCameraTexture=function(nt){return y[nt]};let xt=null;function yt(nt,pt){if(v=pt.getViewerPose(p||h),E=pt,v!==null){const Mt=v.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Pt=!1;Mt.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let ge=0;ge<Mt.length;ge++){const G=Mt[ge];let we=null;if(S!==null)we=S.getViewport(G);else{const Me=_.getViewSubImage(x,G);we=Me.viewport,ge===0&&(t.setRenderTargetTextures(U,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(U))}let Qt=D[ge];Qt===void 0&&(Qt=new _i,Qt.layers.enable(ge),Qt.viewport=new on,D[ge]=Qt),Qt.matrix.fromArray(G.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(G.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(F.matrix.copy(Qt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(Qt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ge=_.getDepthInformation(Mt[0]);ge&&ge.isValid&&ge.texture&&A.init(ge,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ge=0;ge<Mt.length;ge++){const G=Mt[ge].camera;if(G){let we=y[G];we||(we=new Tv,y[G]=we);const Qt=_.getCameraImage(G);we.sourceTexture=Qt}}}for(let Mt=0;Mt<w.length;Mt++){const Pt=O[Mt],Yt=w[Mt];Pt!==null&&Yt!==void 0&&Yt.update(Pt,pt,p||h)}xt&&xt(nt,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Ct=new Sv;Ct.setAnimationLoop(yt),this.setAnimationLoop=function(nt){xt=nt},this.dispose=function(){}}}const Es=new pa,JA=new ln;function $A(r,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,hv(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,P,U,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,w)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,P,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Qn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Qn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const P=t.get(g),U=P.envMap,w=P.envMapRotation;U&&(y.envMap.value=U,Es.copy(w),Es.x*=-1,Es.y*=-1,Es.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),y.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Es)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,P,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function t1(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const w=U.program;s.uniformBlockBinding(P,w)}function p(P,U){let w=l[P.id];w===void 0&&(E(P),w=v(P),l[P.id]=w,P.addEventListener("dispose",y));const O=U.program;s.updateUBOMapping(P,O);const I=t.render.frame;c[P.id]!==I&&(x(P),c[P.id]=I)}function v(P){const U=_();P.__bindingPointIndex=U;const w=r.createBuffer(),O=P.__size,I=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,O,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,w),w}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],w=P.uniforms,O=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,H=w.length;I<H;I++){const V=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,D=V.length;C<D;C++){const F=V[C];if(S(F,I,C,O)===!0){const it=F.__offset,lt=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let ft=0;ft<lt.length;ft++){const z=lt[ft],Z=A(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,it+ct,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,ct),ct+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,U,w,O){const I=P.value,H=U+"_"+w;if(O[H]===void 0)return typeof I=="number"||typeof I=="boolean"?O[H]=I:O[H]=I.clone(),!0;{const V=O[H];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return O[H]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function E(P){const U=P.uniforms;let w=0;const O=16;for(let H=0,V=U.length;H<V;H++){const C=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,F=C.length;D<F;D++){const it=C[D],lt=Array.isArray(it.value)?it.value:[it.value];for(let ct=0,ft=lt.length;ct<ft;ct++){const z=lt[ct],Z=A(z),Y=w%O,St=Y%Z.boundary,L=Y+St;w+=St,L!==0&&O-L<Z.storage&&(w+=O-L),it.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=w,w+=Z.storage}}}const I=w%O;return I>0&&(w+=O-I),P.__size=w,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class e1{constructor(t={}){const{canvas:i=Ny(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=gi;let I=0,H=0,V=null,C=-1,D=null;const F=new on,it=new on;let lt=null;const ct=new De(0);let ft=0,z=i.width,Z=i.height,Y=1,St=null,L=null;const $=new on(0,0,z,Z),xt=new on(0,0,z,Z);let yt=!1;const Ct=new _v;let nt=!1,pt=!1;const Mt=new ln,Pt=new K,Yt=new on,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ge(){return V===null?Y:1}let G=s;function we(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const W="webgl2";if(G=we(W,R),G===null)throw we(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Qt,Me,Ft,Xe,Ht,oe,Ke,Qe,N,b,tt,ht,vt,ut,zt,Rt,Xt,qt,Et,Lt,Zt,kt,Dt,re;function X(){Qt=new fT(G),Qt.init(),kt=new YA(G,Qt),Me=new aT(G,Qt,t,kt),Ft=new WA(G,Qt),Me.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),Xe=new pT(G),Ht=new LA,oe=new qA(G,Qt,Ft,Ht,Me,kt,Xe),Ke=new rT(w),Qe=new uT(w),N=new SM(G),Dt=new nT(G,N),b=new hT(G,N,Xe,Dt),tt=new gT(G,b,N,Xe),Et=new mT(G,Me,oe),Rt=new sT(Ht),ht=new UA(w,Ke,Qe,Qt,Me,Dt,Rt),vt=new $A(w,Ht),ut=new OA,zt=new HA(Qt),qt=new eT(w,Ke,Qe,Ft,tt,S,m),Xt=new kA(w,tt,Me),re=new t1(G,Xe,Me,Ft),Lt=new iT(G,Qt,Xe),Zt=new dT(G,Qt,Xe),Xe.programs=ht.programs,w.capabilities=Me,w.extensions=Qt,w.properties=Ht,w.renderLists=ut,w.shadowMap=Xt,w.state=Ft,w.info=Xe}X();const At=new QA(w,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,Z,!1))},this.getSize=function(R){return R.set(z,Z)},this.setSize=function(R,W,st=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Z=W,i.width=Math.floor(R*Y),i.height=Math.floor(W*Y),st===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,W,st){z=R,Z=W,Y=st,i.width=Math.floor(R*st),i.height=Math.floor(W*st),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,W,st,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,st,rt),Ft.viewport(F.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,W,st,rt){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,W,st,rt),Ft.scissor(it.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Ft.setScissorTest(yt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,st=!0){let rt=0;if(R){let j=!1;if(V!==null){const Tt=V.texture.format;j=Tt===Zd||Tt===jd||Tt===Yd}if(j){const Tt=V.texture.type,Ut=Tt===da||Tt===Ds||Tt===el||Tt===nl||Tt===Wd||Tt===qd,It=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=It.r,te=It.g,Wt=It.b;Ut?(E[0]=Jt,E[1]=te,E[2]=Wt,E[3]=Nt,G.clearBufferuiv(G.COLOR,0,E)):(A[0]=Jt,A[1]=te,A[2]=Wt,A[3]=Nt,G.clearBufferiv(G.COLOR,0,A))}else rt|=G.COLOR_BUFFER_BIT}W&&(rt|=G.DEPTH_BUFFER_BIT),st&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),qt.dispose(),ut.dispose(),zt.dispose(),Ht.dispose(),Ke.dispose(),Qe.dispose(),tt.dispose(),Dt.dispose(),re.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",dn),At.removeEventListener("sessionend",pn),tn.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Xe.autoReset,W=Xt.enabled,st=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;X(),Xe.autoReset=R,Xt.enabled=W,Xt.autoUpdate=st,Xt.needsUpdate=rt,Xt.type=j}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const W=R.target;W.removeEventListener("dispose",_t),Vt(W)}function Vt(R){ae(R),Ht.remove(R)}function ae(R){const W=Ht.get(R).programs;W!==void 0&&(W.forEach(function(st){ht.releaseProgram(st)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,st,rt,j,Tt){W===null&&(W=ie);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,It=ma(R,W,st,rt,j);Ft.setMaterial(rt,Ut);let Nt=st.index,Jt=1;if(rt.wireframe===!0){if(Nt=b.getWireframeAttribute(st),Nt===void 0)return;Jt=2}const te=st.drawRange,Wt=st.attributes.position;let ue=te.start*Jt,be=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),be=Math.min(be,(Tt.start+Tt.count)*Jt)),Nt!==null?(ue=Math.max(ue,0),be=Math.min(be,Nt.count)):Wt!=null&&(ue=Math.max(ue,0),be=Math.min(be,Wt.count));const je=be-ue;if(je<0||je===1/0)return;Dt.setup(j,rt,It,st,Nt);let Oe,fe=Lt;if(Nt!==null&&(Oe=N.get(Nt),fe=Zt,fe.setIndex(Oe)),j.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*ge()),fe.setMode(G.LINES)):fe.setMode(G.TRIANGLES);else if(j.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*ge()),j.isLineSegments?fe.setMode(G.LINES):j.isLineLoop?fe.setMode(G.LINE_LOOP):fe.setMode(G.LINE_STRIP)}else j.isPoints?fe.setMode(G.POINTS):j.isSprite&&fe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Ye=j._multiDrawCounts,_e=j._multiDrawCount,Un=Nt?N.get(Nt).bytesPerElement:1,Mi=Ht.get(rt).currentProgram.getUniforms();for(let Bn=0;Bn<_e;Bn++)Mi.setValue(G,"_gl_DrawID",Bn),fe.render(Kt[Bn]/Un,Ye[Bn])}else if(j.isInstancedMesh)fe.renderInstances(ue,je,j.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,Kt);fe.renderInstances(ue,je,Ye)}else fe.render(ue,je)};function Ce(R,W,st){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,Oi(R,W,st),R.side=Ja,R.needsUpdate=!0,Oi(R,W,st),R.side=ua):Oi(R,W,st)}this.compile=function(R,W,st=null){st===null&&(st=R),g=zt.get(st),g.init(W),U.push(g),st.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==st&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const It=Tt[Ut];Ce(It,st,j),rt.add(It)}else Ce(Tt,st,j),rt.add(Tt)}),g=U.pop(),rt},this.compileAsync=function(R,W,st=null){const rt=this.compile(R,W,st);return new Promise(j=>{function Tt(){if(rt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){j(R);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function yi(R){Ee&&Ee(R)}function dn(){tn.stop()}function pn(){tn.start()}const tn=new Sv;tn.setAnimationLoop(yi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){Ee=R,At.setAnimationLoop(R),R===null?tn.stop():tn.start()},At.addEventListener("sessionstart",dn),At.addEventListener("sessionend",pn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,V),g=zt.get(R,U.length),g.init(W),U.push(g),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ct.setFromProjectionMatrix(Mt,Vi,W.reversedDepth),pt=this.localClippingEnabled,nt=Rt.init(this.clippingPlanes,pt),y=ut.get(R,P.length),y.init(),P.push(y),At.enabled===!0&&At.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ni(Tt,W,-1/0,w.sortObjects)}Ni(R,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(St,L),ke=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ke&&qt.addToRenderList(y,R),this.info.render.frame++,nt===!0&&Rt.beginShadows();const st=g.state.shadowsArray;Xt.render(st,R,W),nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,j=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];ll(rt,j,R,Nt)}ke&&qt.render(R);for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];Ns(y,R,Nt,Nt.viewport)}}else j.length>0&&ll(rt,j,R,W),ke&&qt.render(R),Ns(y,R,W);V!==null&&H===0&&(oe.updateMultisampleRenderTarget(V),oe.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(w,R,W),Dt.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(g=U[U.length-1],nt===!0&&Rt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ni(R,W,st,rt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){rt&&Yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const Ut=tt.update(R),It=R.material;It.visible&&y.push(R,Ut,It,st,Yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Ut=tt.update(R),It=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Yt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(It)){const Nt=Ut.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const Wt=Nt[Jt],ue=It[Wt.materialIndex];ue&&ue.visible&&y.push(R,Ut,ue,st,Yt.z,Wt)}}else It.visible&&y.push(R,Ut,It,st,Yt.z,null)}}const Tt=R.children;for(let Ut=0,It=Tt.length;Ut<It;Ut++)Ni(Tt[Ut],W,st,rt)}function Ns(R,W,st,rt){const j=R.opaque,Tt=R.transmissive,Ut=R.transparent;g.setupLightsView(st),nt===!0&&Rt.setGlobalState(w.clippingPlanes,st),rt&&Ft.viewport(F.copy(rt)),j.length>0&&Os(j,W,st),Tt.length>0&&Os(Tt,W,st),Ut.length>0&&Os(Ut,W,st),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function ll(R,W,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new Us(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?sl:da,minFilter:ws,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||F;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Nt=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ct),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),ke&&qt.render(st);const te=w.toneMapping;w.toneMapping=Ka;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),nt===!0&&Rt.setGlobalState(w.clippingPlanes,rt),Os(R,st,rt),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let be=0,je=W.length;be<je;be++){const Oe=W[be],fe=Oe.object,Kt=Oe.geometry,Ye=Oe.material,_e=Oe.group;if(Ye.side===ua&&fe.layers.test(rt.layers)){const Un=Ye.side;Ye.side=Qn,Ye.needsUpdate=!0,qr(fe,st,rt,Kt,Ye,_e),Ye.side=Un,Ye.needsUpdate=!0,ue=!0}}ue===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}w.setRenderTarget(It,Nt,Jt),w.setClearColor(ct,ft),Wt!==void 0&&(rt.viewport=Wt),w.toneMapping=te}function Os(R,W,st){const rt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Ut=R[j],It=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&rt!==null&&(te=rt),It.layers.test(st.layers)&&qr(It,W,st,Nt,te,Jt)}}function qr(R,W,st,rt,j,Tt){R.onBeforeRender(w,W,st,rt,j,Tt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(w,W,st,rt,R,Tt),j.transparent===!0&&j.side===ua&&j.forceSinglePass===!1?(j.side=Qn,j.needsUpdate=!0,w.renderBufferDirect(st,W,rt,j,R,Tt),j.side=Ja,j.needsUpdate=!0,w.renderBufferDirect(st,W,rt,j,R,Tt),j.side=ua):w.renderBufferDirect(st,W,rt,j,R,Tt),R.onAfterRender(w,W,st,rt,j,Tt)}function Oi(R,W,st){W.isScene!==!0&&(W=ie);const rt=Ht.get(R),j=g.state.lights,Tt=g.state.shadowsArray,Ut=j.state.version,It=ht.getParameters(R,j.state,Tt,W,st),Nt=ht.getProgramCacheKey(It);let Jt=rt.programs;rt.environment=R.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(R.isMeshStandardMaterial?Qe:Ke).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",_t),Jt=new Map,rt.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return ki(R,It),te}else It.uniforms=ht.getUniforms(R),R.onBeforeCompile(It,w),te=ht.acquireProgram(It,Nt),Jt.set(Nt,te),rt.uniforms=It.uniforms;const Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),ki(R,It),rt.needsLights=ga(R),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function Ps(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Kc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ki(R,W){const st=Ht.get(R);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function ma(R,W,st,rt,j){W.isScene!==!0&&(W=ie),oe.resetTextureUnits();const Tt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,It=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Vr,Nt=(rt.isMeshStandardMaterial?Qe:Ke).get(rt.envMap||Ut),Jt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,te=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,be=!!st.morphAttributes.color;let je=Ka;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=w.toneMapping);const Oe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,fe=Oe!==void 0?Oe.length:0,Kt=Ht.get(rt),Ye=g.state.lights;if(nt===!0&&(pt===!0||R!==D)){const en=R===D&&rt.id===C;Rt.setState(rt,R,en)}let _e=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ye.state.version||Kt.outputColorSpace!==It||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Nt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==Wt||Kt.morphNormals!==ue||Kt.morphColors!==be||Kt.toneMapping!==je||Kt.morphTargetsCount!==fe)&&(_e=!0):(_e=!0,Kt.__version=rt.version);let Un=Kt.currentProgram;_e===!0&&(Un=Oi(rt,W,j));let Mi=!1,Bn=!1,yn=!1;const Ge=Un.getUniforms(),In=Kt.uniforms;if(Ft.useProgram(Un.program)&&(Mi=!0,Bn=!0,yn=!0),rt.id!==C&&(C=rt.id,Bn=!0),Mi||D!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ge.setValue(G,"projectionMatrix",R.projectionMatrix),Ge.setValue(G,"viewMatrix",R.matrixWorldInverse);const An=Ge.map.cameraPosition;An!==void 0&&An.setValue(G,Pt.setFromMatrixPosition(R.matrixWorld)),Me.logarithmicDepthBuffer&&Ge.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ge.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Bn=!0,yn=!0)}if(j.isSkinnedMesh){Ge.setOptional(G,j,"bindMatrix"),Ge.setOptional(G,j,"bindMatrixInverse");const en=j.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ge.setValue(G,"boneTexture",en.boneTexture,oe))}j.isBatchedMesh&&(Ge.setOptional(G,j,"batchingTexture"),Ge.setValue(G,"batchingTexture",j._matricesTexture,oe),Ge.setOptional(G,j,"batchingIdTexture"),Ge.setValue(G,"batchingIdTexture",j._indirectTexture,oe),Ge.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Ge.setValue(G,"batchingColorTexture",j._colorsTexture,oe));const Ln=st.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Et.update(j,st,Un),(Bn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ge.setValue(G,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(In.envMapIntensity.value=W.environmentIntensity),Bn&&(Ge.setValue(G,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&es(In,yn),Tt&&rt.fog===!0&&vt.refreshFogUniforms(In,Tt),vt.refreshMaterialUniforms(In,rt,Y,Z,g.state.transmissionRenderTarget[R.id]),Kc.upload(G,Ps(Kt),In,oe)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Kc.upload(G,Ps(Kt),In,oe),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ge.setValue(G,"center",j.center),Ge.setValue(G,"modelViewMatrix",j.modelViewMatrix),Ge.setValue(G,"normalMatrix",j.normalMatrix),Ge.setValue(G,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const en=rt.uniformsGroups;for(let An=0,zs=en.length;An<zs;An++){const Xn=en[An];re.update(Xn,Un),re.bind(Xn,Un)}}return Un}function es(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ga(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,W,st){const rt=Ht.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=W,Ht.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const st=Ht.get(R);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const cn=G.createFramebuffer();this.setRenderTarget=function(R,W=0,st=0){V=R,I=W,H=st;let rt=!0,j=null,Tt=!1,Ut=!1;if(R){const Nt=Ht.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Nt.__hasExternalTextures)oe.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[W])?j=te[W][st]:j=te[W],Tt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?j=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[st]:j=te,F.copy(R.viewport),it.copy(R.scissor),lt=R.scissorTest}else F.copy($).multiplyScalar(Y).floor(),it.copy(xt).multiplyScalar(Y).floor(),lt=yt;if(st!==0&&(j=cn),Ft.bindFramebuffer(G.FRAMEBUFFER,j)&&rt&&Ft.drawBuffers(R,j),Ft.viewport(F),Ft.scissor(it),Ft.setScissorTest(lt),Tt){const Nt=Ht.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,st)}else if(Ut){const Nt=W;for(let Jt=0;Jt<R.textures.length;Jt++){const te=Ht.get(R.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,te.__webglTexture,st,Nt)}}else if(R!==null&&st!==0){const Nt=Ht.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,st)}C=-1},this.readRenderTargetPixels=function(R,W,st,rt,j,Tt,Ut,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ft.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const Jt=R.textures[It],te=Jt.format,Wt=Jt.type;if(!Me.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-rt&&st>=0&&st<=R.height-j&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,st,rt,j,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=V!==null?Ht.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,W,st,rt,j,Tt,Ut,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=R.width-rt&&st>=0&&st<=R.height-j){Ft.bindFramebuffer(G.FRAMEBUFFER,Nt);const Jt=R.textures[It],te=Jt.format,Wt=Jt.type;if(!Me.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,st,rt,j,kt.convert(te),kt.convert(Wt),0);const be=V!==null?Ht.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,be);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Oy(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(ue),G.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,st=0){const rt=Math.pow(2,-st),j=Math.floor(R.image.width*rt),Tt=Math.floor(R.image.height*rt),Ut=W!==null?W.x:0,It=W!==null?W.y:0;oe.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ut,It,j,Tt),Ft.unbindTexture()};const cl=G.createFramebuffer(),ul=G.createFramebuffer();this.copyTextureToTexture=function(R,W,st=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ut,It,Nt,Jt,te,Wt,ue,be,je;const Oe=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(st!==null)Ut=st.max.x-st.min.x,It=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,te=st.min.y,Wt=st.isBox3?st.min.z:0;else{const Ln=Math.pow(2,-j);Ut=Math.floor(Oe.width*Ln),It=Math.floor(Oe.height*Ln),R.isDataArrayTexture?Nt=Oe.depth:R.isData3DTexture?Nt=Math.floor(Oe.depth*Ln):Nt=1,Jt=0,te=0,Wt=0}rt!==null?(ue=rt.x,be=rt.y,je=rt.z):(ue=0,be=0,je=0);const fe=kt.convert(W.format),Kt=kt.convert(W.type);let Ye;W.isData3DTexture?(oe.setTexture3D(W,0),Ye=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(oe.setTexture2DArray(W,0),Ye=G.TEXTURE_2D_ARRAY):(oe.setTexture2D(W,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const _e=G.getParameter(G.UNPACK_ROW_LENGTH),Un=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Mi=G.getParameter(G.UNPACK_SKIP_PIXELS),Bn=G.getParameter(G.UNPACK_SKIP_ROWS),yn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Oe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Oe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Ge=R.isDataArrayTexture||R.isData3DTexture,In=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Ln=Ht.get(R),en=Ht.get(W),An=Ht.get(Ln.__renderTarget),zs=Ht.get(en.__renderTarget);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Xn=0;Xn<Nt;Xn++)Ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,j,Wt+Xn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Tt,je+Xn)),G.blitFramebuffer(Jt,te,Ut,It,ue,be,Ut,It,G.DEPTH_BUFFER_BIT,G.NEAREST);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ht.has(R)){const Ln=Ht.get(R),en=Ht.get(W);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,cl),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,ul);for(let An=0;An<Nt;An++)Ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ln.__webglTexture,j,Wt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ln.__webglTexture,j),In?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,Tt,je+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,Tt),j!==0?G.blitFramebuffer(Jt,te,Ut,It,ue,be,Ut,It,G.COLOR_BUFFER_BIT,G.NEAREST):In?G.copyTexSubImage3D(Ye,Tt,ue,be,je+An,Jt,te,Ut,It):G.copyTexSubImage2D(Ye,Tt,ue,be,Jt,te,Ut,It);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ye,Tt,ue,be,je,Ut,It,Nt,fe,Kt,Oe.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,Tt,ue,be,je,Ut,It,Nt,fe,Oe.data):G.texSubImage3D(Ye,Tt,ue,be,je,Ut,It,Nt,fe,Kt,Oe):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,ue,be,Ut,It,fe,Kt,Oe.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,ue,be,Oe.width,Oe.height,fe,Oe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,ue,be,Ut,It,fe,Kt,Oe);G.pixelStorei(G.UNPACK_ROW_LENGTH,_e),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Un),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Mi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,yn),Tt===0&&W.generateMipmaps&&G.generateMipmap(Ye),Ft.unbindTexture()},this.copyTextureToTexture3D=function(R,W,st=null,rt=null,j=0){return Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,st,rt,j)},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){I=0,H=0,V=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const qe=Math.PI,vn=2*qe,Cs=(r,t=2)=>Number.isFinite(r)?r.toFixed(t):"—",n1=r=>r*180/qe;function G0(r,t){const i=(r.re*r.re+r.im*r.im).toFixed(3),s=(t.re*t.re+t.im*t.im).toFixed(3);return`|0⟩=${i}, |1⟩=${s}`}function he(r=0,t=0){return{re:r,im:t}}function mi(r,t){return{re:r.re*t.re-r.im*t.im,im:r.re*t.im+r.im*t.re}}function V0(r,t){return{re:r.re+t.re,im:r.im+t.im}}function Zn(r,t){return{re:r.re*t,im:r.im*t}}function k0(r,t){return{re:r*Math.cos(t),im:r*Math.sin(t)}}function i1(r,t){const i=r.re*r.re+r.im*r.im-(t.re*t.re+t.im*t.im),s=2*(r.re*t.re+r.im*t.im),l=2*(r.im*t.re-r.re*t.im);return new K(s,i,-l).normalize()}function a1(r,t=[0,qe/2,qe,3*qe/2,vn],i=.22){for(const s of t)if(Math.abs(r-s)<i)return s;return r}const Qc={RV:{nameLatex:"R(\\vec{v})",matrix:String.raw`$$R(\vec{v}) = \begin{pmatrix} c - i n_z s & -n_y s - i n_x s \\ n_y s - i n_x s & c + i n_z s \end{pmatrix}$$ <div class="text-xs mt-2">\(c=\cos(\tfrac{\|\vec{v}\|}{2}), s=\sin(\tfrac{\|\vec{v}\|}{2}), n_k = v_k/\|\vec{v}\|\)</div>`,alphaEq:String.raw`\(\alpha' = (c - i n_z s)\alpha + (-n_y s - i n_x s)\beta\)`,betaEq:String.raw`\(\beta' = (n_y s - i n_x s)\alpha + (c + i n_z s)\beta\)`,alphaTerm1:String.raw`\((c - i n_z s)\alpha\)`,alphaTerm2:String.raw`\((-n_y s - i n_x s)\beta\)`,betaTerm1:String.raw`\((n_y s - i n_x s)\alpha\)`,betaTerm2:String.raw`\((c + i n_z s)\beta\)`,params:[{id:"vx",label:"v_x",min:-4,max:4},{id:"vy",label:"v_y",min:-4,max:4},{id:"vz",label:"v_z",min:-4,max:4}]},U:{nameLatex:"U(\\theta,\\phi,\\lambda)",matrix:String.raw`$$U = \begin{pmatrix} \cos(\theta/2) & -e^{i\lambda}\sin(\theta/2) \\ e^{i\phi}\sin(\theta/2) & e^{i(\phi+\lambda)}\cos(\theta/2) \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = \alpha\cos(\theta/2) - \beta e^{i\lambda}\sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = \alpha e^{i\phi}\sin(\theta/2) + \beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha\cos(\theta/2)\)`,alphaTerm2:String.raw`\(-\beta e^{i\lambda}\sin(\theta/2)\)`,betaTerm1:String.raw`\(\alpha e^{i\phi}\sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn},{id:"phi",label:"\\phi",min:0,max:vn},{id:"lambda",label:"\\lambda",min:0,max:vn}]},P:{nameLatex:"P(\\theta)",matrix:String.raw`$$P(\theta) = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\theta} \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta' = (0)\alpha + (e^{i\theta})\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((e^{i\theta})\beta\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn}]},R:{nameLatex:"R(\\theta,\\phi)",matrix:String.raw`$$R(\theta, \phi) = \begin{pmatrix} \cos(\theta/2) & -ie^{-i\phi}\sin(\theta/2) \\ -ie^{i\phi}\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = \alpha\cos(\theta/2) -i\beta e^{-i\phi}\sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = -i\alpha e^{i\phi}\sin(\theta/2) + \beta\cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha\cos(\theta/2)\)`,alphaTerm2:String.raw`\(-i\beta e^{-i\phi}\sin(\theta/2)\)`,betaTerm1:String.raw`\(-i\alpha e^{i\phi}\sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta\cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn},{id:"phi",label:"\\phi",min:0,max:vn}]},Rx:{nameLatex:"R_x(\\theta)",matrix:String.raw`$$R_x(\theta) = \begin{pmatrix} \cos(\theta/2) & -i\sin(\theta/2) \\ -i\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = \alpha \cos(\theta/2) - i\beta \sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = -i\alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha \cos(\theta/2)\)`,alphaTerm2:String.raw`\(-i\beta \sin(\theta/2)\)`,betaTerm1:String.raw`\(-i\alpha \sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta \cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn}]},Ry:{nameLatex:"R_y(\\theta)",matrix:String.raw`$$R_y(\theta) = \begin{pmatrix} \cos(\theta/2) & -\sin(\theta/2) \\ \sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = \alpha \cos(\theta/2) - \beta \sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = \alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha \cos(\theta/2)\)`,alphaTerm2:String.raw`\(-\beta \sin(\theta/2)\)`,betaTerm1:String.raw`\(\alpha \sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta \cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn}]},Rz:{nameLatex:"R_z(\\theta)",matrix:String.raw`$$R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = e^{-i\theta/2} \alpha\)`,betaEq:String.raw`\(\beta' = e^{i\theta/2} \beta\)`,alphaTerm1:String.raw`\(e^{-i\theta/2} \alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\(e^{i\theta/2} \beta\)`,params:[{id:"theta",label:"\\theta",min:0,max:vn}]},X:{nameLatex:"X",matrix:String.raw`$$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = (0)\alpha + (1)\beta\)`,betaEq:String.raw`\(\beta'  = (1)\alpha + (0)\beta\)`,alphaTerm1:String.raw`\((0)\alpha\)`,alphaTerm2:String.raw`\((1)\beta\)`,betaTerm1:String.raw`\((1)\alpha\)`,betaTerm2:String.raw`\((0)\beta\)`,params:[]},Y:{nameLatex:"Y",matrix:String.raw`$$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = (0)\alpha + (-i)\beta\)`,betaEq:String.raw`\(\beta'  = (i)\alpha + (0)\beta\)`,alphaTerm1:String.raw`\((0)\alpha\)`,alphaTerm2:String.raw`\((-i)\beta\)`,betaTerm1:String.raw`\((i)\alpha\)`,betaTerm2:String.raw`\((0)\beta\)`,params:[]},Z:{nameLatex:"Z",matrix:String.raw`$$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (-1)\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((-1)\beta\)`,params:[]},S:{nameLatex:"S",matrix:String.raw`$$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$$`,alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (i)\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((i)\beta\)`,params:[]},T:{nameLatex:"T",matrix:String.raw`$$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$$`,params:[],alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (e^{i\pi/4})\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((e^{i\pi/4})\beta\)`,params:[]}};function s1(r,t,i){const{type:s,theta:l,phi:c,lambda:h,vx:d,vy:m,vz:p}=i,v=Math.cos((l??0)/2),_=Math.sin((l??0)/2);let x=he(),S=he(),E=he(),A=he();if(s==="RV"){const P=d??0,U=m??0,w=p??0,O=Math.hypot(P,U,w);if(O<1e-9)x={...r},S=he(0,0),E=he(0,0),A={...t};else{const I=O,H=Math.cos(I/2),V=Math.sin(I/2),C=P/O,D=U/O,F=w/O,it=he(H,-F*V),lt=he(-D*V,-C*V),ct=he(D*V,-C*V),ft=he(H,F*V);x=mi(it,r),S=mi(lt,t),E=mi(ct,r),A=mi(ft,t)}}else if(s==="U"){const P=he(Math.cos(h??0),Math.sin(h??0)),U=he(-P.re,-P.im),w=he(Math.cos(c??0),Math.sin(c??0)),O=he(Math.cos((c??0)+(h??0)),Math.sin((c??0)+(h??0)));x=Zn(r,v),S=mi(Zn(U,_),t),E=mi(Zn(w,_),r),A=mi(Zn(O,v),t)}else if(s==="P"){const P=he(Math.cos(l??0),Math.sin(l??0));x={...r},S=he(0,0),E=he(0,0),A=mi(P,t)}else if(s==="R"){const P=he(-Math.sin(c??0),-Math.cos(c??0)),U=he(Math.sin(c??0),-Math.cos(c??0));x=Zn(r,v),S=mi(Zn(P,_),t),E=mi(Zn(U,_),r),A=Zn(t,v)}else{let P=0;["Rx","Ry","Rz"].includes(s)?P=l??0:["X","Y"].includes(s)?P=qe:P=0;const U=Math.cos(P/2),w=Math.sin(P/2);if(s==="Rx")x=Zn(r,U),S=he(t.im*w,-t.re*w),E=he(r.im*w,-r.re*w),A=Zn(t,U);else if(s==="Ry")x=Zn(r,U),S=Zn(t,-w),E=Zn(r,w),A=Zn(t,U);else if(s==="Rz"){const O=he(U,-w),I=he(U,w);x=mi(O,r),S=he(0,0),E=he(0,0),A=mi(I,t)}else if(s==="X")x=he(0,0),S={...t},E={...r},A=he(0,0);else if(s==="Y")x=he(0,0),S=he(t.im,-t.re),E=he(-r.im,r.re),A=he(0,0);else if(s==="Z")x={...r},S=he(0,0),E=he(0,0),A=he(-t.re,-t.im);else if(s==="S")x={...r},S=he(0,0),E=he(0,0),A=he(-t.im,t.re);else if(s==="T"){const O=1/Math.sqrt(2);x={...r},S=he(0,0),E=he(0,0),A=he((t.re-t.im)*O,(t.re+t.im)*O)}}const y=V0(x,S),g=V0(E,A);return{a1:x,a2:S,b1:E,b2:A,finalAlpha:y,finalBeta:g}}const X0={type:"change"},ep={type:"start"},Av={type:"end"},kc=new Qd,W0=new Ya,r1=Math.cos(70*Ly.DEG2RAD),_n=new K,Kn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6;class o1 extends vM{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new $a,this._lastTargetPosition=new K,this._quat=new $a().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new m0,this._sphericalDelta=new m0,this._scale=1,this._panOffset=new K,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new K,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=u1.bind(this),this._onContextMenu=_1.bind(this),this._onMouseWheel=d1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=m1.bind(this),this._onTouchMove=g1.bind(this),this._onMouseDown=f1.bind(this),this._onMouseMove=h1.bind(this),this._interceptControlDown=v1.bind(this),this._interceptControlUp=x1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<r1?this.object.lookAt(this.target):(W0.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(W0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(X0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function l1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function c1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function u1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function f1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case Pr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case Pr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(ep)}function h1(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function d1(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Av))}function p1(r){this.enabled!==!1&&this._handleKeyDown(r)}function m1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(ep)}function g1(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function _1(r){this.enabled!==!1&&r.preventDefault()}function v1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kh(r,t="#e5e7eb"){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.font="bold 180px Inter, Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.lineWidth=16,s.strokeStyle="rgba(0,0,0,0.6)",s.fillStyle=t;const l=i.width/2,c=i.height/2+12;s.strokeText(r,l,c),s.fillText(r,l,c);const h=new dM(i);h.minFilter=Ci,h.generateMipmaps=!1;const d=new oM(new mv({map:h,transparent:!0}));return d.scale.set(.3,.3,1),d}function q0({alpha:r,beta:t,vectorColor:i=16498468}){const s=Ne.useRef(null),l=Ne.useRef(null),c=Ne.useRef(null),h=Ne.useRef(null),d=Ne.useRef(null),m=Ne.useRef(null);return Ne.useEffect(()=>{const p=s.current;if(!p)return;const v=new sM,_=new _i(45,p.clientWidth/p.clientHeight,.1,1e3);_.position.set(2.5,1.5,3.5);const x=new e1({antialias:!0,alpha:!0});x.setPixelRatio(window.devicePixelRatio),x.setSize(p.clientWidth,p.clientHeight),p.appendChild(x.domElement);const S=new o1(_,x.domElement);S.enableDamping=!0,S.dampingFactor=.1,m.current=S;const E=new xi(new $d(1,32,16),new tl({color:5195493,wireframe:!0,transparent:!0,opacity:.2}));v.add(E);const A=[-1.3,0,0,1.3,0,0,0,-1.3,0,0,1.3,0,0,0,-1.3,0,0,1.3],y=[1,.2,.2,1,.2,.2,.2,1,.2,.2,1,.2,.2,.2,1,.2,.2,1],g=new Si;g.setAttribute("position",new Dn(A,3)),g.setAttribute("color",new Dn(y,3)),v.add(new hM(g,new vv({vertexColors:!0})));const P=new Nr,U=Kh("x","#f87171"),w=Kh("y","#34d399"),O=Kh("z","#60a5fa");U.position.set(1.45,0,0),O.position.set(0,1.45,0),w.position.set(0,0,1.45),P.add(U,w,O),v.add(P);const I=new xi(new ru(.02,.02,1,8),new tl({color:i}));I.position.y=.5;const H=new xi(new Jd(.06,.15,8),new tl({color:i}));H.position.y=1;const V=new Nr;V.add(I),V.add(H),v.add(V),c.current=v,h.current=x,d.current=_,l.current=V;let C=0;const D=()=>{C=requestAnimationFrame(D),S.update(),x.render(v,_)};D();const F=new ResizeObserver(it=>{for(const lt of it){const{width:ct,height:ft}=lt.contentRect;!ct||!ft||(_.aspect=ct/ft,_.updateProjectionMatrix(),x.setSize(ct,ft))}});return F.observe(p),()=>{cancelAnimationFrame(C),F.disconnect(),x.dispose(),p.removeChild(x.domElement)}},[i]),Ne.useEffect(()=>{if(!l.current)return;const p=i1(r,t),v=new $a().setFromUnitVectors(new K(0,1,0),p);l.current.quaternion.copy(v)},[r,t]),ot.jsx("div",{ref:s,className:"bloch-sphere-container w-full min-h-[380px] h-[45vh]"})}function Wa({vector:r,color:t="#fbbf24",size:i=120}){const s=Ne.useRef(null);return Ne.useEffect(()=>{const l=s.current;if(!l)return;const c=l.getContext("2d"),h=l.width,d=l.height,m=h/2,p=d/2,v=h/2.2;if(c.clearRect(0,0,h,d),c.beginPath(),c.strokeStyle="#4b5563",c.lineWidth=1,c.moveTo(0,p),c.lineTo(h,p),c.moveTo(m,0),c.lineTo(m,d),c.stroke(),c.fillStyle="#6b7280",c.font="10px sans-serif",c.fillText("Re",h-15,p-5),c.fillText("Im",m+5,12),Math.hypot(r.re,r.im)<.01){c.beginPath(),c.arc(m,p,2,0,vn),c.fillStyle=t,c.fill();return}const x=m+r.re*v,S=p-r.im*v;c.beginPath(),c.moveTo(m,p),c.lineTo(x,S),c.strokeStyle=t,c.lineWidth=2.5,c.stroke();const E=Math.atan2(S-p,x-m);c.beginPath(),c.moveTo(x,S),c.lineTo(x-10*Math.cos(E-qe/6),S-10*Math.sin(E-qe/6)),c.lineTo(x-10*Math.cos(E+qe/6),S-10*Math.sin(E+qe/6)),c.closePath(),c.fillStyle=t,c.fill()},[r,t,i]),ot.jsx("div",{className:"canvas-container",style:{width:i,height:i},children:ot.jsx("canvas",{ref:s,width:i,height:i})})}function S1({init:r,setInit:t,presets:i,onPreset:s}){const l=(c,h)=>t(d=>({...d,[c]:h}));return ot.jsxs("section",{className:"panel","aria-labelledby":"custom-state-title",children:[ot.jsx("div",{className:"panel-header",children:ot.jsx("h3",{id:"custom-state-title",className:"text-xl text-white",children:ot.jsx($e,{children:String.raw`1) Custom Initial State $(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle)$`})})}),ot.jsxs("div",{className:"flex flex-col gap-3 p-1",children:[ot.jsxs("div",{className:"flex items-center gap-4",children:[ot.jsx("p",{className:"font-mono text-xl text-indigo-300 w-16 text-center",children:ot.jsx($e,{children:String.raw`$\alpha$`})}),ot.jsxs("div",{className:"flex-grow",children:[ot.jsx("label",{className:"block text-sm font-medium text-slate-300",children:ot.jsx($e,{children:String.raw`Phase $\phi_\alpha$`})}),ot.jsx("input",{type:"range",min:0,max:vn,step:.01,value:r.alphaPhase,onChange:c=>l("alphaPhase",parseFloat(c.target.value))}),ot.jsx("span",{className:"block text-right font-mono text-indigo-400 text-sm",children:`${Cs(r.alphaPhase,2)} rad`})]})]}),ot.jsxs("div",{children:[ot.jsx("label",{className:"block text-sm font-medium text-slate-300 text-center",children:"Magnitudes"}),ot.jsx("input",{type:"range",min:0,max:qe/2,step:.01,value:r.magnitudeAngle,onChange:c=>l("magnitudeAngle",parseFloat(c.target.value))}),ot.jsxs("div",{className:"flex justify-between font-mono text-sm",children:[ot.jsx("span",{className:"text-indigo-400",children:`|α| = ${Cs(Math.cos(r.magnitudeAngle),2)}`}),ot.jsx("span",{className:"text-teal-400",children:`|β| = ${Cs(Math.sin(r.magnitudeAngle),2)}`})]})]}),ot.jsxs("div",{className:"flex items-center gap-4",children:[ot.jsx("p",{className:"font-mono text-xl text-teal-300 w-16 text-center",children:ot.jsx($e,{children:String.raw`$\beta$`})}),ot.jsxs("div",{className:"flex-grow",children:[ot.jsx("label",{className:"block text-sm font-medium text-slate-300",children:ot.jsx($e,{children:String.raw`Phase $\phi_\beta$`})}),ot.jsx("input",{type:"range",min:0,max:vn,step:.01,value:r.betaPhase,onChange:c=>l("betaPhase",parseFloat(c.target.value))}),ot.jsx("span",{className:"block text-right font-mono text-teal-400 text-sm",children:`${Cs(r.betaPhase,2)} rad`})]})]}),ot.jsxs("div",{className:"mt-4",children:[ot.jsx("label",{className:"block text-sm font-medium text-slate-300 text-center mb-2",children:"Initial State Presets"}),ot.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:Object.keys(i).map(c=>ot.jsx("button",{className:`btn ${JSON.stringify(r)===JSON.stringify(i[c])?"active":""}`,onClick:()=>s(c),children:ot.jsx($e,{children:`$|${c}\\rangle$`})},c))})]})]})]})}function y1({gate:r,setGate:t,angleUnit:i,setAngleUnit:s,setStatus:l}){const c=Qc[r.type],h=c?.params??[],d=h.some(_=>["theta","phi","lambda"].includes(_.id)),m=_=>i==="deg"?`${Cs(n1(_),1)}°`:`${Cs(_,2)} rad`,p=(_,x)=>{let S=parseFloat(x);["Rx","Ry","Rz","P","R"].includes(r.type)&&["theta","phi"].includes(_)&&(S=a1(S)),t(E=>({...E,[_]:S}))},v=_=>{const S={...r,type:_,...{phi:0,lambda:0}};_==="RV"&&(S.theta=0),t(S),l(`Gate ${_} selected.`)};return ot.jsxs("section",{className:"panel","aria-labelledby":"gate-select-title",children:[ot.jsx("div",{className:"panel-header",children:ot.jsx("h3",{id:"gate-select-title",className:"text-xl text-white",children:"2) Select Gate"})}),ot.jsx("div",{className:"flex flex-wrap gap-2 justify-center",id:"gate-select-buttons",children:Object.keys(Qc).map(_=>ot.jsx("button",{className:`btn ${r.type===_?"active":""}`,onClick:()=>v(_),children:ot.jsx($e,{children:`$${Qc[_].nameLatex}$`})},_))}),ot.jsxs("div",{className:"mt-5",id:"gate-params-container",children:[h.length>0&&ot.jsx("label",{className:"block text-base font-medium mb-2 text-slate-300 text-center",children:"Gate Parameters"}),d&&ot.jsxs("div",{className:"text-center mb-4",children:[ot.jsx("button",{className:`btn text-xs px-2 py-1 ${i==="rad"?"active":""}`,onClick:()=>{s("rad"),l("Angle unit set to rad.")},children:"Radians"}),ot.jsx("button",{className:`btn text-xs px-2 py-1 ml-2 ${i==="deg"?"active":""}`,onClick:()=>{s("deg"),l("Angle unit set to deg.")},children:"Degrees"})]}),h.map(_=>ot.jsxs("div",{className:"flex items-center justify-center mb-2",children:[ot.jsx("label",{className:"block text-sm font-medium text-slate-300 w-20 text-center",children:ot.jsx($e,{children:`$${_.label}$`})}),ot.jsx("input",{type:"range",min:_.min,max:_.max,step:.01,value:r[_.id]??0,onChange:x=>p(_.id,x.target.value),className:"mx-4"}),ot.jsx("span",{className:"font-mono text-sm text-indigo-300 w-24 text-right",children:_.id.startsWith("v")?Cs(r[_.id]??0,2):m(r[_.id]??0)})]},_.id)),ot.jsx("div",{className:"mt-5 text-center text-lg",children:ot.jsx($e,{dynamic:!0,children:c?.matrix??""})})]})]})}function M1(){const[r,t]=Ne.useState("rad"),[i,s]=Ne.useState({type:"Rz",theta:qe,phi:0,lambda:0,vx:1,vy:0,vz:0}),[l,c]=Ne.useState({magnitudeAngle:qe/4,alphaPhase:0,betaPhase:0}),[h,d]=Ne.useState(""),m=Ne.useMemo(()=>({0:{magnitudeAngle:0,alphaPhase:0,betaPhase:0},1:{magnitudeAngle:qe/2,alphaPhase:0,betaPhase:0},"+":{magnitudeAngle:qe/4,alphaPhase:0,betaPhase:0},"-":{magnitudeAngle:qe/4,alphaPhase:0,betaPhase:qe},i:{magnitudeAngle:qe/4,alphaPhase:0,betaPhase:qe/2},"-i":{magnitudeAngle:qe/4,alphaPhase:0,betaPhase:3*qe/2}}),[]),{alpha:p,beta:v}=Ne.useMemo(()=>{const y=Math.cos(l.magnitudeAngle),g=Math.sin(l.magnitudeAngle);return{alpha:k0(y,l.alphaPhase),beta:k0(g,l.betaPhase)}},[l]),_=Ne.useMemo(()=>s1(p,v,i),[p,v,i]),x=Qc[i.type];console.log("Debugging nameLatex:",x?.nameLatex);const S=y=>{const g=m[y];g&&(c(g),d(`Preset ${y} selected.`))},E=()=>{c({magnitudeAngle:Math.random()*(qe/2),alphaPhase:Math.random()*vn,betaPhase:Math.random()*vn}),s(y=>{const g={...y};return["U","R"].includes(y.type)?(g.theta=Math.random()*vn,g.phi=Math.random()*vn,g.lambda=y.type==="U"?Math.random()*vn:0):["Rx","Ry","Rz","P"].includes(y.type)?(g.theta=Math.random()*vn,g.phi=0,g.lambda=0):y.type==="RV"&&(g.vx=(Math.random()*2-1)*qe,g.vy=(Math.random()*2-1)*qe,g.vz=(Math.random()*2-1)*qe),g}),d("Randomized parameters.")},A=()=>{s({type:"Rz",theta:qe,phi:0,lambda:0,vx:1,vy:0,vz:0}),S("+"),d("Reset to Rz and |+⟩.")};return ot.jsx(GS,{version:3,config:{tex:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]]},loader:{load:["input/tex","output/chtml"]}},children:ot.jsxs("div",{className:"p-4 md:p-8 min-h-screen",style:{background:"radial-gradient(1200px 800px at 10% -10%, rgba(99,102,241,.14), transparent 60%),radial-gradient(1000px 600px at 110% 0%, rgba(34,197,94,.10), transparent 60%),#0b1220",color:"#e5e7eb",fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'"},children:[ot.jsx("style",{children:`
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0)) #111827;border:1px solid #334155;border-radius:1rem;padding:1rem;box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .panel-header{display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem}
          .canvas-container{position:relative;background-color:#1f2937;border:1px solid #334155;border-radius:.75rem}
          .btn{background-color:#111827;border:1px solid #334155;color:#e5e7eb;padding:.5rem .8rem;border-radius:.625rem;transition:.15s;box-shadow:0 2px 0 rgba(0,0,0,.3) inset}
          .btn:hover{background-color:#1f2937}
          .btn.active{background:linear-gradient(180deg,rgba(99,102,241,.35),rgba(99,102,241,.15));border-color:#6366f1;color:white}
          input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%}
          input[type=range]::-webkit-slider-runnable-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-moz-range-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1rem;height:1rem;background:white;border-radius:9999px;margin-top:-.25rem;box-shadow:0 0 0 2px #6366f1 inset}
          input[type=range]::-moz-range-thumb{width:1rem;height:1rem;background:white;border:none;border-radius:9999px;box-shadow:0 0 0 2px #6366f1 inset}
          .op-symbol{display:inline-flex;align-items:center;justify-content:center;width:20px;color:#94a3b8}
        `}),ot.jsxs("header",{className:"mb-6 md:mb-8",children:[ot.jsxs("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[ot.jsxs("div",{children:[ot.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:ot.jsx($e,{children:"Interactive Gate Visualization"})}),ot.jsx("p",{className:"text-base md:text-lg text-slate-400 mt-2",children:ot.jsx($e,{children:"Visualize how a qubit's state vector is transformed."})})]}),ot.jsxs("div",{className:"flex items-center gap-2",children:[ot.jsx("button",{className:"btn",onClick:A,children:"Reset"}),ot.jsx("button",{className:"btn",onClick:E,children:"Randomize"})]})]}),ot.jsx("div",{className:"sr-only","aria-live":"polite",children:h})]}),ot.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 max-w-screen-2xl mx-auto",children:[ot.jsxs("aside",{className:"xl:sticky xl:top-6 h-max space-y-6",children:[ot.jsx(S1,{init:l,setInit:c,presets:m,onPreset:S}),ot.jsx(y1,{gate:i,setGate:s,angleUnit:r,setAngleUnit:t,setStatus:d})]}),ot.jsxs("main",{className:"space-y-6",children:[ot.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ot.jsxs("section",{className:"panel flex flex-col gap-3 items-center",children:[ot.jsxs("div",{className:"panel-header justify-between w-full",children:[ot.jsx("h3",{className:"text-xl text-white",children:ot.jsx($e,{children:String.raw`Initial State: $(|\psi\rangle)$`})}),ot.jsxs("div",{className:"text-xs text-slate-400",children:["|α|², |β|²:",ot.jsx("span",{className:"font-mono text-slate-300 ml-1",children:G0(p,v)})]})]}),ot.jsx(q0,{alpha:p,beta:v,vectorColor:16498468})]}),ot.jsxs("section",{className:"panel flex flex-col gap-3 items-center",children:[ot.jsxs("div",{className:"panel-header justify-between w-full",children:[ot.jsx("h3",{className:"text-xl text-white",children:ot.jsx($e,{children:String.raw`Final State: $${x?.nameLatex??i.type} |\psi\rangle$`})}),ot.jsxs("div",{className:"text-xs text-slate-400",children:["|α'|², |β'|²:",ot.jsx("span",{className:"font-mono text-slate-300 ml-1",children:G0(_.finalAlpha,_.finalBeta)})]})]}),ot.jsx(q0,{alpha:_.finalAlpha,beta:_.finalBeta,vectorColor:4906624})]})]}),ot.jsx("section",{className:"panel",children:ot.jsxs("details",{className:"group",open:!0,children:[ot.jsxs("summary",{className:"cursor-pointer select-none list-none flex items-center justify-between",children:[ot.jsx("h3",{className:"text-xl font-extrabold text-white",children:"3) Final State Calculation"}),ot.jsx("span",{className:"text-slate-400 text-sm",children:"(click to collapse)"})]}),ot.jsxs("div",{className:"mt-4 flex flex-col items-center gap-4",children:[ot.jsxs("div",{className:"w-full",children:[ot.jsx("p",{className:"text-center font-mono text-lg mb-2 text-indigo-400 min-h-8",children:ot.jsx($e,{dynamic:!0,children:x?.alphaEq??String.raw`\(\alpha' = (m_{00})\alpha + (m_{01})\beta\)`})}),ot.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap p-1",children:[ot.jsx("div",{className:"w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center",children:ot.jsx($e,{children:String.raw`$|0\rangle$`})}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs",children:"Initial α"}),ot.jsx(Wa,{vector:p,color:"#818cf8"})]}),ot.jsx("span",{className:"op-symbol",children:"→"}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs min-h-4",children:ot.jsx($e,{dynamic:!0,children:x?.alphaTerm1??String.raw`\((m_{00})\alpha\)`})}),ot.jsx(Wa,{vector:_.a1,color:"#a5b4fc"})]}),ot.jsx("span",{className:"op-symbol",children:"+"}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs min-h-4",children:ot.jsx($e,{dynamic:!0,children:x?.alphaTerm2??String.raw`\((m_{01})\beta\)`})}),ot.jsx(Wa,{vector:_.a2,color:"#a5b4fc"})]}),ot.jsx("span",{className:"op-symbol",children:"="}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs",children:ot.jsx($e,{children:String.raw`$\alpha'$`})}),ot.jsx(Wa,{vector:_.finalAlpha,color:"#6366f1"})]})]})]}),ot.jsxs("div",{className:"w-full",children:[ot.jsx("p",{className:"text-center font-mono text-lg mb-2 text-teal-400 min-h-8",children:ot.jsx($e,{dynamic:!0,children:x?.betaEq??String.raw`\(\beta' = (m_{10})\alpha + (m_{11})\beta\)`})}),ot.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap p-1",children:[ot.jsx("div",{className:"w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center",children:ot.jsx($e,{children:String.raw`$|1\rangle$`})}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs",children:"Initial β"}),ot.jsx(Wa,{vector:v,color:"#2dd4bf"})]}),ot.jsx("span",{className:"op-symbol",children:"→"}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs min-h-4",children:ot.jsx($e,{dynamic:!0,children:x?.betaTerm1??String.raw`\((m_{10})\alpha\)`})}),ot.jsx(Wa,{vector:_.b1,color:"#5eead4"})]}),ot.jsx("span",{className:"op-symbol",children:"+"}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs min-h-4",children:ot.jsx($e,{dynamic:!0,children:x?.betaTerm2??String.raw`\((m_{11})\beta\)`})}),ot.jsx(Wa,{vector:_.b2,color:"#5eead4"})]}),ot.jsx("span",{className:"op-symbol",children:"="}),ot.jsxs("div",{className:"text-center",children:[ot.jsx("p",{className:"font-mono text-xs",children:ot.jsx($e,{children:String.raw`$\beta'$`})}),ot.jsx(Wa,{vector:_.finalBeta,color:"#14b8a6"})]})]})]})]})]})})]})]})]})})}HS.createRoot(document.getElementById("root")).render(ot.jsx(Vd.StrictMode,{children:ot.jsx(M1,{})}));
