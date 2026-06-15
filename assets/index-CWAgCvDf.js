(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function sv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function Xy(){if(B_)return Go;B_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var I_;function qy(){return I_||(I_=1,Sh.exports=Xy()),Sh.exports}var it=qy(),Mh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function Wy(){if(F_)return ce;F_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function y(U,$,vt){this.props=U,this.context=$,this.refs=E,this.updater=vt||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function H(U,$,vt){this.props=U,this.context=$,this.refs=E,this.updater=vt||S}var L=H.prototype=new _;L.constructor=H,b(L,y.prototype),L.isPureReactComponent=!0;var D=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function I(U,$,vt,St,Ct,nt){return vt=nt.ref,{$$typeof:s,type:U,key:$,ref:vt!==void 0?vt:null,props:nt}}function V(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var B=/\/+/g;function et(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function st(){}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,$,vt,St,Ct){var nt=typeof U;(nt==="undefined"||nt==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(nt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case s:case t:dt=!0;break;case g:return dt=U._init,ut(dt(U._payload),$,vt,St,Ct)}}if(dt)return Ct=Ct(U),dt=St===""?"."+et(U,0):St,D(Ct)?(vt="",dt!=null&&(vt=dt.replace(B,"$&/")+"/"),ut(Ct,$,vt,"",function(qt){return qt})):Ct!=null&&(C(Ct)&&(Ct=V(Ct,vt+(Ct.key==null||U&&U.key===Ct.key?"":(""+Ct.key).replace(B,"$&/")+"/")+dt)),$.push(Ct)),1;dt=0;var Mt=St===""?".":St+":";if(D(U))for(var Ut=0;Ut<U.length;Ut++)St=U[Ut],nt=Mt+et(St,Ut),dt+=ut(St,$,vt,nt,Ct);else if(Ut=x(U),typeof Ut=="function")for(U=Ut.call(U),Ut=0;!(St=U.next()).done;)St=St.value,nt=Mt+et(St,Ut++),dt+=ut(St,$,vt,nt,Ct);else if(nt==="object"){if(typeof U.then=="function")return ut(ct(U),$,vt,St,Ct);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(U,$,vt){if(U==null)return U;var St=[],Ct=0;return ut(U,St,"","",function(nt){return $.call(vt,nt,Ct++)}),St}function Y(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ce.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ce.Component=y,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=H,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},ce.cache=function(U){return function(){return U.apply(null,arguments)}},ce.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),Ct=U.key,nt=void 0;if($!=null)for(dt in $.ref!==void 0&&(nt=void 0),$.key!==void 0&&(Ct=""+$.key),$)!F.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(St[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)St.children=vt;else if(1<dt){for(var Mt=Array(dt),Ut=0;Ut<dt;Ut++)Mt[Ut]=arguments[Ut+2];St.children=Mt}return I(U.type,Ct,void 0,void 0,nt,St)},ce.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ce.createElement=function(U,$,vt){var St,Ct={},nt=null;if($!=null)for(St in $.key!==void 0&&(nt=""+$.key),$)F.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Ct[St]=$[St]);var dt=arguments.length-2;if(dt===1)Ct.children=vt;else if(1<dt){for(var Mt=Array(dt),Ut=0;Ut<dt;Ut++)Mt[Ut]=arguments[Ut+2];Ct.children=Mt}if(U&&U.defaultProps)for(St in dt=U.defaultProps,dt)Ct[St]===void 0&&(Ct[St]=dt[St]);return I(U,nt,void 0,void 0,null,Ct)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(U){return{$$typeof:d,render:U}},ce.isValidElement=C,ce.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Y}},ce.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ce.startTransition=function(U){var $=O.T,vt={};O.T=vt;try{var St=U(),Ct=O.S;Ct!==null&&Ct(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,W)}catch(nt){W(nt)}finally{O.T=$}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(U){return O.H.use(U)},ce.useActionState=function(U,$,vt){return O.H.useActionState(U,$,vt)},ce.useCallback=function(U,$){return O.H.useCallback(U,$)},ce.useContext=function(U){return O.H.useContext(U)},ce.useDebugValue=function(){},ce.useDeferredValue=function(U,$){return O.H.useDeferredValue(U,$)},ce.useEffect=function(U,$,vt){var St=O.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(U,$,vt){return O.H.useImperativeHandle(U,$,vt)},ce.useInsertionEffect=function(U,$){return O.H.useInsertionEffect(U,$)},ce.useLayoutEffect=function(U,$){return O.H.useLayoutEffect(U,$)},ce.useMemo=function(U,$){return O.H.useMemo(U,$)},ce.useOptimistic=function(U,$){return O.H.useOptimistic(U,$)},ce.useReducer=function(U,$,vt){return O.H.useReducer(U,$,vt)},ce.useRef=function(U){return O.H.useRef(U)},ce.useState=function(U){return O.H.useState(U)},ce.useSyncExternalStore=function(U,$,vt){return O.H.useSyncExternalStore(U,$,vt)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.1.1",ce}var H_;function Jd(){return H_||(H_=1,Mh.exports=Wy()),Mh.exports}var ue=Jd();const fu=sv(ue);var Eh={exports:{}},Vo={},bh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Yy(){return G_||(G_=1,(function(s){function t(P,Y){var W=P.length;P.push(Y);t:for(;0<W;){var yt=W-1>>>1,U=P[yt];if(0<l(U,Y))P[yt]=Y,P[W]=U,W=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Y=P[0],W=P.pop();if(W!==Y){P[0]=W;t:for(var yt=0,U=P.length,$=U>>>1;yt<$;){var vt=2*(yt+1)-1,St=P[vt],Ct=vt+1,nt=P[Ct];if(0>l(St,W))Ct<U&&0>l(nt,St)?(P[yt]=nt,P[Ct]=W,yt=Ct):(P[yt]=St,P[vt]=W,yt=vt);else if(Ct<U&&0>l(nt,W))P[yt]=nt,P[Ct]=W,yt=Ct;else break t}}return Y}function l(P,Y){var W=P.sortIndex-Y.sortIndex;return W!==0?W:P.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,S=!1,b=!1,E=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=P)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function O(P){if(E=!1,D(P),!b)if(i(m)!==null)b=!0,F||(F=!0,et());else{var Y=i(p);Y!==null&&ut(O,Y.startTime-P)}}var F=!1,I=-1,V=5,C=-1;function R(){return y?!0:!(s.unstable_now()-C<V)}function B(){if(y=!1,F){var P=s.unstable_now();C=P;var Y=!0;try{t:{b=!1,E&&(E=!1,H(I),I=-1),S=!0;var W=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){v.callback=U,D(P),Y=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)Y=!0;else{var $=i(p);$!==null&&ut(O,$.startTime-P),Y=!1}}break t}finally{v=null,x=W,S=!1}Y=void 0}}finally{Y?et():F=!1}}}var et;if(typeof L=="function")et=function(){L(B)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ct=st.port2;st.port1.onmessage=B,et=function(){ct.postMessage(null)}}else et=function(){_(B,0)};function ut(P,Y){I=_(function(){P(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var W=x;x=Y;try{return P()}finally{x=W}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return Y()}finally{x=W}},s.unstable_scheduleCallback=function(P,Y,W){var yt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,P={id:g++,callback:Y,priorityLevel:P,startTime:W,expirationTime:U,sortIndex:-1},W>yt?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(E?(H(I),I=-1):E=!0,ut(O,W-yt))):(P.sortIndex=U,t(m,P),b||S||(b=!0,F||(F=!0,et()))),P},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(P){var Y=x;return function(){var W=x;x=Y;try{return P.apply(this,arguments)}finally{x=W}}}})(Th)),Th}var V_;function jy(){return V_||(V_=1,bh.exports=Yy()),bh.exports}var Ah={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function Zy(){if(k_)return Nn;k_=1;var s=Jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var X_;function Ky(){if(X_)return Ah.exports;X_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ah.exports=Zy(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function Qy(){if(q_)return Vo;q_=1;var s=jy(),t=Jd(),i=Ky();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case O:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function St(e,n){U++,yt[U]=e.current,e.current=n}var Ct=$(null),nt=$(null),dt=$(null),Mt=$(null);function Ut(e,n){switch(St(dt,n),St(nt,e),St(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?f_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=f_(n),e=h_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Ct),St(Ct,e)}function qt(){vt(Ct),vt(nt),vt(dt)}function ee(e){e.memoizedState!==null&&St(Mt,e);var n=Ct.current,a=h_(n,e.type);n!==a&&(St(nt,e),St(Ct,a))}function Ne(e){nt.current===e&&(vt(Ct),vt(nt)),Mt.current===e&&(vt(Mt),zo._currentValue=W)}var he=Object.prototype.hasOwnProperty,z=s.unstable_scheduleCallback,de=s.unstable_cancelCallback,Ft=s.unstable_shouldYield,_e=s.unstable_requestPaint,Ht=s.unstable_now,ze=s.unstable_getCurrentPriorityLevel,Bt=s.unstable_ImmediatePriority,le=s.unstable_UserBlockingPriority,Ke=s.unstable_NormalPriority,Qe=s.unstable_LowPriority,N=s.unstable_IdlePriority,T=s.log,tt=s.unstable_setDisableYieldValue,ht=null,xt=null;function ft(e){if(typeof T=="function"&&tt(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:Zt,Rt=Math.log,Wt=Math.LN2;function Zt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var Et=256,Nt=4194304;function Qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Qt(o):(M&=A,M!==0?u=Qt(M):a||(a=A&~e,a!==0&&(u=Qt(a))))):(A=o&~f,A!==0?u=Qt(A):M!==0?u=Qt(M):a||(a=o&~e,a!==0&&(u=Qt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,J=e.hiddenUpdates;for(a=M&~a;0<a;){var pt=31-zt(a),gt=1<<pt;A[pt]=0,G[pt]=-1;var at=J[pt];if(at!==null)for(J[pt]=null,pt=0;pt<at.length;pt++){var rt=at[pt];rt!==null&&(rt.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function kt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function yi(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,tn="__reactProps$"+dn,Li="__reactContainer$"+dn,Nr="__reactEvents$"+dn,hl="__reactListeners$"+dn,Or="__reactHandles$"+dn,Ys="__reactResources$"+dn,Ni="__reactMarker$"+dn;function Pr(e){delete e[pn],delete e[tn],delete e[Nr],delete e[hl],delete e[Or]}function ki(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=g_(e);e!==null;){if(a=e[pn])return a;e=g_(e)}return n}e=a,a=e.parentNode}return null}function ga(e){if(e=e[pn]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function er(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function _a(e){var n=e[Ys];return n||(n=e[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Ni]=!0}var dl=new Set,pl={};function w(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(pl[e]=n,e=0;e<n.length;e++)dl.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},K={};function Tt(e){return he.call(K,e)?!0:he.call(lt,e)?!1:ot.test(e)?K[e]=!0:(lt[e]=!0,!1)}function Lt(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,ne;function Yt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ne}var pe=!1;function Ae(e,n){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var at=rt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(rt){at=rt}e.call(gt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var G=M.split(`
`),J=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===J.length)for(o=G.length-1,u=J.length-1;1<=o&&0<=u&&G[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==J[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Yt("Activity");default:return""}}function Be(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ye(e){e._valueTracker||(e._valueTracker=Ye(e))}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function yn(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Un(e,M,me(n)):a!=null?Un(e,M,me(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function Fn(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,n,a){n==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function zr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function hp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&fp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&fp(e,f,n[f])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return kv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Ir=null;function dp(e){var n=ga(e);if(n&&(e=n.stateNode)){var a=e[tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[tn]||null;if(!u)throw Error(r(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var Mu=!1;function pp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(Br!==null||Ir!==null)&&(tc(),Br&&(n=Br,e=Ir,Ir=Br=null,dp(n),e)))for(n=0;n<e.length;n++)dp(e[n])}}function js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Xi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Eu=!1}var va=null,bu=null,gl=null;function mp(){if(gl)return gl;var e,n=bu,a=n.length,o,u="value"in va?va.value:va.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function gp(){return!1}function Wn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:gp,this.isPropagationStopped=gp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Wn(nr),Ks=g({},nr,{view:0,detail:0}),Xv=Wn(Ks),Tu,Au,Qs,yl=g({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(Tu=e.screenX-Qs.screenX,Au=e.screenY-Qs.screenY):Au=Tu=0,Qs=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),_p=Wn(yl),qv=g({},yl,{dataTransfer:0}),Wv=Wn(qv),Yv=g({},Ks,{relatedTarget:0}),Ru=Wn(Yv),jv=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=Wn(jv),Kv=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qv=Wn(Kv),Jv=g({},nr,{data:0}),vp=Wn(Jv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ex[e])?!!n[e]:!1}function wu(){return nx}var ix=g({},Ks,{key:function(e){if(e.key){var n=$v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ax=Wn(ix),rx=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Wn(rx),sx=g({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),ox=Wn(sx),lx=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Wn(lx),ux=g({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=Wn(ux),hx=g({},nr,{newState:0,oldState:0}),dx=Wn(hx),px=[9,13,27,32],Cu=Xi&&"CompositionEvent"in window,Js=null;Xi&&"documentMode"in document&&(Js=document.documentMode);var mx=Xi&&"TextEvent"in window&&!Js,yp=Xi&&(!Cu||Js&&8<Js&&11>=Js),Sp=" ",Mp=!1;function Ep(e,n){switch(e){case"keyup":return px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function gx(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Mp=!0,Sp);case"textInput":return e=n.data,e===Sp&&Mp?null:e;default:return null}}function _x(e,n){if(Fr)return e==="compositionend"||!Cu&&Ep(e,n)?(e=mp(),gl=bu=va=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vx[e.type]:n==="textarea"}function Ap(e,n,a,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=sc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,to=null;function xx(e){s_(e,0)}function Sl(e){var n=er(e);if(Dn(n))return e}function Rp(e,n){if(e==="change")return n}var wp=!1;if(Xi){var Du;if(Xi){var Uu="oninput"in document;if(!Uu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Uu=typeof Cp.oninput=="function"}Du=Uu}else Du=!1;wp=Du&&(!document.documentMode||9<document.documentMode)}function Dp(){$s&&($s.detachEvent("onpropertychange",Up),to=$s=null)}function Up(e){if(e.propertyName==="value"&&Sl(to)){var n=[];Ap(n,to,e,Su(e)),pp(xx,n)}}function yx(e,n,a){e==="focusin"?(Dp(),$s=n,to=a,$s.attachEvent("onpropertychange",Up)):e==="focusout"&&Dp()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(to)}function Mx(e,n){if(e==="click")return Sl(n)}function Ex(e,n){if(e==="input"||e==="change")return Sl(n)}function bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:bx;function eo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!he.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var a=Lp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lp(a)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Si(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Si(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Tx=Xi&&"documentMode"in document&&11>=document.documentMode,Hr=null,Nu=null,no=null,Ou=!1;function zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||Hr==null||Hr!==Si(o)||(o=Hr,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=sc(Nu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Hr)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Pu={},Bp={};Xi&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ar(e){if(Pu[e])return Pu[e];if(!Gr[e])return e;var n=Gr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bp)return Pu[e]=n[a];return e}var Ip=ar("animationend"),Fp=ar("animationiteration"),Hp=ar("animationstart"),Ax=ar("transitionrun"),Rx=ar("transitionstart"),wx=ar("transitioncancel"),Gp=ar("transitionend"),Vp=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Mi(e,n){Vp.set(e,n),w(n,[e])}var kp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Be(n)},kp.set(e,n),n)}return{value:e,source:n,stack:Be(n)}}var ui=[],Vr=0,Bu=0;function Ml(){for(var e=Vr,n=Bu=Vr=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Xp(a,u,f)}}function El(e,n,a,o){ui[Vr++]=e,ui[Vr++]=n,ui[Vr++]=a,ui[Vr++]=o,Bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return El(e,n,a,o),bl(e)}function kr(e,n){return El(e,null,null,n),bl(e)}function Xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(e){if(50<wo)throw wo=0,qf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xr={};function Cx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new Cx(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Fu(e)&&(M=1);else if(typeof e=="string")M=Uy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return rr(a.children,u,f,n);case E:M=8,u|=24;break;case y:return e=$n(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case O:return e=$n(13,a,n,u),e.elementType=O,e.lanes=f,e;case F:return e=$n(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case L:M=10;break t;case H:M=9;break t;case D:M=11;break t;case I:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function rr(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Hu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Gu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qr=[],Wr=0,Al=null,Rl=0,fi=[],hi=0,sr=null,Wi=1,Yi="";function or(e,n){qr[Wr++]=Rl,qr[Wr++]=Al,Al=e,Rl=n}function Wp(e,n,a){fi[hi++]=Wi,fi[hi++]=Yi,fi[hi++]=sr,sr=e;var o=Wi;e=Yi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Wi=1<<32-zt(n)+u|a<<u|o,Yi=f+e}else Wi=1<<f|a<<u|o,Yi=e}function Vu(e){e.return!==null&&(or(e,1),Wp(e,1,0))}function ku(e){for(;e===Al;)Al=qr[--Wr],qr[Wr]=null,Rl=qr[--Wr],qr[Wr]=null;for(;e===sr;)sr=fi[--hi],fi[hi]=null,Yi=fi[--hi],fi[hi]=null,Wi=fi[--hi],fi[hi]=null}var Hn=null,nn=null,Ce=!1,lr=null,Oi=!1,Xu=Error(r(519));function cr(e){var n=Error(r(418,""));throw ro(ci(n,e)),Xu}function Yp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[pn]=e,n[tn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)Me(Do[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ye(n);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),zr(n,o.value,o.defaultValue,o.children),ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||u_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=oc),n=!0):n=!1,n||cr(e)}function jp(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Hn=Hn.return}}function io(e){if(e!==Hn)return!1;if(!Ce)return jp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&nn&&cr(e),jp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){nn=bi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}nn=null}}else n===27?(n=nn,Oa(e.type)?(e=fh,fh=null,nn=e):nn=n):nn=Hn?bi(e.stateNode.nextSibling):null;return!0}function ao(){nn=Hn=null,Ce=!1}function Zp(){var e=lr;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),lr=null),e}function ro(e){lr===null?lr=[e]:lr.push(e)}var qu=$(null),ur=null,ji=null;function xa(e,n,a){St(qu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=qu.current,vt(qu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Wu(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Wu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function so(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Mt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Kp(ur,e)}function Cl(e,n){return ur===null&&fr(e),Kp(e,n)}function Kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ux=s.unstable_scheduleCallback,Lx=s.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Dx,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&Ux(Lx,function(){e.controller.abort()})}var lo=null,Zu=0,Yr=0,jr=null;function Nx(e,n){if(lo===null){var a=lo=[];Zu=0,Yr=Jf(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(Qp,Qp),n}function Qp(){if(--Zu===0&&lo!==null){jr!==null&&(jr.status="fulfilled");var e=lo;lo=null,Yr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ox(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Jp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),Jp!==null&&Jp(e,n)};var hr=$(null);function Ku(){var e=hr.current;return e!==null?e:We.pooledCache}function Dl(e,n){n===null?St(hr,hr.current):St(hr,n.pool)}function $p(){var e=Ku();return e===null?null:{parent:mn._currentValue,pool:e}}var co=Error(r(460)),tm=Error(r(474)),Ul=Error(r(542)),Qu={then:function(){}};function em(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ll(){}function nm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e}throw uo=n,co}}var uo=null;function im(){if(uo===null)throw Error(r(459));var e=uo;return uo=null,e}function am(e){if(e===co||e===Ul)throw Error(r(483))}var ya=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),Xp(e,null,a),n}return El(e,o,n,a),bl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kt(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function ho(){if(ef){var e=jr;if(e!==null)throw e}}function po(e,n,a,o){ef=!1;var u=e.updateQueue;ya=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,J=G.next;G.next=null,M===null?f=J:M.next=J,M=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==M&&(A===null?pt.firstBaseUpdate=J:A.next=J,pt.lastBaseUpdate=G))}if(f!==null){var gt=u.baseState;M=0,pt=J=G=null,A=f;do{var at=A.lane&-536870913,rt=at!==A.lane;if(rt?(be&at)===at:(o&at)===at){at!==0&&at===Yr&&(ef=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ae=e,te=A;at=n;var He=a;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){gt=ae.call(He,gt,at);break t}gt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,at=typeof ae=="function"?ae.call(He,gt,at):ae,at==null)break t;gt=g({},gt,at);break t;case 2:ya=!0}}at=A.callback,at!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(J=pt=rt,G=gt):pt=pt.next=rt,M|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);pt===null&&(G=gt),u.baseState=G,u.firstBaseUpdate=J,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Da|=M,e.lanes=M,e.memoizedState=gt}}function rm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rm(a[e],n)}var Zr=$(null),Nl=$(0);function om(e,n){e=na,St(Nl,e),St(Zr,n),na=e|n.baseLanes}function nf(){St(Nl,na),St(Zr,Zr.current)}function af(){na=Nl.current,vt(Zr),vt(Nl)}var Ea=0,ve=null,Ie=null,un=null,Ol=!1,Kr=!1,dr=!1,Pl=0,mo=0,Qr=null,Px=0;function sn(){throw Error(r(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function sf(e,n,a,o,u,f){return Ea=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Xm:qm,dr=!1,f=a(o,u),dr=!1,Kr&&(f=cm(n,a,o,u)),lm(e),f}function lm(e){P.H=Gl;var n=Ie!==null&&Ie.next!==null;if(Ea=0,un=Ie=ve=null,Ol=!1,mo=0,Qr=null,n)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&wl(e)&&(Sn=!0))}function cm(e,n,a,o){ve=e;var u=0;do{if(Kr&&(Qr=null),mo=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Vx,f=n(a,o)}while(Kr);return f}function zx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ve.flags|=1024),n}function of(){var e=Pl!==0;return Pl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Ea=0,un=Ie=ve=null,Kr=!1,mo=Pl=0,Qr=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ve.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ie===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=un===null?ve.memoizedState:un.next;if(n!==null)un=n,Ie=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},un===null?ve.memoizedState=un=e:un=un.next=e}return un}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,Qr===null&&(Qr=[]),e=nm(Qr,e,n),n=ve,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Xm:qm),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===L)return Ln(e)}throw Error(r(438,String(e)))}function ff(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uf(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=fn();return hf(n,Ie,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,G=null,J=n,pt=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(be&gt)===gt:(Ea&gt)===gt){var at=J.revertLane;if(at===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Yr&&(pt=!0);else if((Ea&at)===at){J=J.next,at===Yr&&(pt=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},G===null?(A=G=gt,M=f):G=G.next=gt,ve.lanes|=at,Da|=at;gt=J.action,dr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else at={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},G===null?(A=G=at,M=f):G=G.next=at,ve.lanes|=gt,Da|=gt;J=J.next}while(J!==null&&J!==n);if(G===null?M=f:G.next=A,!Jn(f,e.memoizedState)&&(Sn=!0,pt&&(a=jr,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Jn(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function um(e,n,a){var o=ve,u=fn(),f=Ce;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Jn((Ie||u).memoizedState,a);M&&(u.memoizedState=a,Sn=!0),u=u.queue;var A=dm.bind(null,o,u,e);if(_o(2048,8,A,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Jr(9,Il(),hm.bind(null,o,u,a,n),null),We===null)throw Error(r(349));f||(Ea&124)!==0||fm(o,n,a)}return a}function fm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=uf(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hm(e,n,a,o){n.value=a,n.getSnapshot=o,pm(n)&&mm(e)}function dm(e,n,a){return a(function(){pm(n)&&mm(e)})}function pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function mm(e){var n=kr(e,2);n!==null&&ai(n,e,2)}function pf(e){var n=Yn();if(typeof e=="function"){var a=e;if(e=a(),dr){ft(!0);try{a()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function gm(e,n,a,o){return e.baseState=a,hf(e,Ie,typeof o=="function"?o:Ki)}function Bx(e,n,a,o,u){if(Hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_m(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _m(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,M={};P.T=M;try{var A=a(u,o),G=P.S;G!==null&&G(M,A),vm(e,n,A)}catch(J){mf(e,n,J)}finally{P.T=f}}else try{f=a(u,o),vm(e,n,f)}catch(J){mf(e,n,J)}}function vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){xm(e,n,o)},function(o){return mf(e,n,o)}):xm(e,n,a)}function xm(e,n,a){n.status="fulfilled",n.value=a,ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,_m(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==o)}e.action=null}function ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function Mm(e,n){if(Ce){var a=We.formState;if(a!==null){t:{var o=ve;if(Ce){if(nn){e:{for(var u=nn,f=Oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=bi(u.nextSibling),o=u.data==="F!";break t}}cr(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Gm.bind(null,ve,o),o.dispatch=a,o=pf(!1),f=yf.bind(null,ve,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Bx.bind(null,ve,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Em(e){var n=fn();return bm(n,Ie,e)}function bm(e,n,a){if(n=hf(e,n,Sm)[0],e=Bl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(M){throw M===co?Ul:M}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Jr(9,Il(),Ix.bind(null,u,a),null)),[o,f,e]}function Ix(e,n){e.action=n}function Tm(e){var n=fn(),a=Ie;if(a!==null)return bm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=uf(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function Am(){return fn().memoizedState}function Fl(e,n,a,o){var u=Yn();o=o===void 0?null:o,ve.flags|=e,u.memoizedState=Jr(1|n,Il(),a,o)}function _o(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&rf(o,Ie.memoizedState.deps)?u.memoizedState=Jr(n,f,a,o):(ve.flags|=e,u.memoizedState=Jr(1|n,f,a,o))}function Rm(e,n){Fl(8390656,8,e,n)}function wm(e,n){_o(2048,8,e,n)}function Cm(e,n){return _o(4,2,e,n)}function Dm(e,n){return _o(4,4,e,n)}function Um(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lm(e,n,a){a=a!=null?a.concat([e]):null,_o(4,4,Um.bind(null,n,e),a)}function gf(){}function Nm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Om(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),dr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Bg(),ve.lanes|=e,Da|=e,a)}function Pm(e,n,a,o){return Jn(a,n)?a:Zr.current!==null?(e=_f(e,a,o),Jn(e,n)||(Sn=!0),e):(Ea&42)===0?(Sn=!0,e.memoizedState=a):(e=Bg(),ve.lanes|=e,Da|=e,n)}function zm(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var M=P.T,A={};P.T=A,yf(e,!1,n,a);try{var G=u(),J=P.S;if(J!==null&&J(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=Ox(G,o);vo(e,n,pt,ii(e))}else vo(e,n,o,ii(e))}catch(gt){vo(e,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{Y.p=f,P.T=M}}function Fx(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Bm(e).queue;zm(e,u,n,W,a===null?Fx:function(){return Im(e),a(o)})}function Bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=Bm(e).next.queue;vo(e,n,{},ii())}function xf(){return Ln(zo)}function Fm(){return fn().memoizedState}function Hm(){return fn().memoizedState}function Hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Sa(a);var o=Ma(n,e,a);o!==null&&(ai(o,n,a),fo(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var o=ii();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Vm(n,a):(a=Iu(e,n,a,o),a!==null&&(ai(a,e,o),km(a,n,o)))}function Gm(e,n,a){var o=ii();vo(e,n,a,o)}function vo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Vm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,M))return El(e,n,u,0),We===null&&Ml(),!1}catch{}finally{}if(a=Iu(e,n,u,o),a!==null)return ai(a,e,o),km(a,n,o),!0}return!1}function yf(e,n,a,o){if(o={lane:2,revertLane:Jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(r(479))}else n=Iu(e,a,o,2),n!==null&&ai(n,e,2)}function Hl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Vm(e,n){Kr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function km(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kt(e,a)}}var Gl={readContext:Ln,use:zl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Xm={readContext:Ln,use:zl,useCallback:function(e,n){return Yn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Rm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,Um.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=Yn();n=n===void 0?null:n;var o=e();if(dr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(dr){ft(!0);try{a(n)}finally{ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Gx.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var n=Yn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=Gm.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Yn();return _f(a,e,n)},useTransition:function(){var e=pf(!1);return e=zm.bind(null,ve,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ve,u=Yn();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(be&124)!==0||fm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Rm(dm.bind(null,o,f,e),[e]),o.flags|=2048,Jr(9,Il(),hm.bind(null,o,f,a,n),null),a},useId:function(){var e=Yn(),n=We.identifierPrefix;if(Ce){var a=Yi,o=Wi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Px++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var n=Yn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return Yn().memoizedState=Hx.bind(null,ve)}},qm={readContext:Ln,use:zl,useCallback:Nm,useContext:Ln,useEffect:wm,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Om,useReducer:Bl,useRef:Am,useState:function(){return Bl(Ki)},useDebugValue:gf,useDeferredValue:function(e,n){var a=fn();return Pm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Bl(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:xf,useFormState:Em,useActionState:Em,useOptimistic:function(e,n){var a=fn();return gm(a,Ie,e,n)},useMemoCache:ff,useCacheRefresh:Hm},Vx={readContext:Ln,use:zl,useCallback:Nm,useContext:Ln,useEffect:wm,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Om,useReducer:df,useRef:Am,useState:function(){return df(Ki)},useDebugValue:gf,useDeferredValue:function(e,n){var a=fn();return Ie===null?_f(a,e,n):Pm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=df(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:xf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=fn();return Ie!==null?gm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:Hm},$r=null,xo=0;function Vl(e){var n=xo;return xo+=1,$r===null&&($r=[]),nm($r,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wm(e){var n=e._init;return n(e._payload)}function Ym(e){function n(j,k){if(e){var Q=j.deletions;Q===null?(j.deletions=[k],j.flags|=16):Q.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=qi(j,k),j.index=0,j.sibling=null,j}function f(j,k,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<k?(j.flags|=67108866,k):Q):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,Q,mt){return k===null||k.tag!==6?(k=Hu(Q,j.mode,mt),k.return=j,k):(k=u(k,Q),k.return=j,k)}function G(j,k,Q,mt){var Vt=Q.type;return Vt===b?pt(j,k,Q.props.children,mt,Q.key):k!==null&&(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===V&&Wm(Vt)===k.type)?(k=u(k,Q.props),yo(k,Q),k.return=j,k):(k=Tl(Q.type,Q.key,Q.props,null,j.mode,mt),yo(k,Q),k.return=j,k)}function J(j,k,Q,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Gu(Q,j.mode,mt),k.return=j,k):(k=u(k,Q.children||[]),k.return=j,k)}function pt(j,k,Q,mt,Vt){return k===null||k.tag!==7?(k=rr(Q,j.mode,mt,Vt),k.return=j,k):(k=u(k,Q),k.return=j,k)}function gt(j,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Hu(""+k,j.mode,Q),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=Tl(k.type,k.key,k.props,null,j.mode,Q),yo(Q,k),Q.return=j,Q;case S:return k=Gu(k,j.mode,Q),k.return=j,k;case V:var mt=k._init;return k=mt(k._payload),gt(j,k,Q)}if(ut(k)||et(k))return k=rr(k,j.mode,Q,null),k.return=j,k;if(typeof k.then=="function")return gt(j,Vl(k),Q);if(k.$$typeof===L)return gt(j,Cl(j,k),Q);kl(j,k)}return null}function at(j,k,Q,mt){var Vt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Vt!==null?null:A(j,k,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Vt?G(j,k,Q,mt):null;case S:return Q.key===Vt?J(j,k,Q,mt):null;case V:return Vt=Q._init,Q=Vt(Q._payload),at(j,k,Q,mt)}if(ut(Q)||et(Q))return Vt!==null?null:pt(j,k,Q,mt,null);if(typeof Q.then=="function")return at(j,k,Vl(Q),mt);if(Q.$$typeof===L)return at(j,k,Cl(j,Q),mt);kl(j,Q)}return null}function rt(j,k,Q,mt,Vt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(Q)||null,A(k,j,""+mt,Vt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return j=j.get(mt.key===null?Q:mt.key)||null,G(k,j,mt,Vt);case S:return j=j.get(mt.key===null?Q:mt.key)||null,J(k,j,mt,Vt);case V:var xe=mt._init;return mt=xe(mt._payload),rt(j,k,Q,mt,Vt)}if(ut(mt)||et(mt))return j=j.get(Q)||null,pt(k,j,mt,Vt,null);if(typeof mt.then=="function")return rt(j,k,Q,Vl(mt),Vt);if(mt.$$typeof===L)return rt(j,k,Q,Cl(k,mt),Vt);kl(k,mt)}return null}function ae(j,k,Q,mt){for(var Vt=null,xe=null,Kt=k,ie=k=0,En=null;Kt!==null&&ie<Q.length;ie++){Kt.index>ie?(En=Kt,Kt=null):En=Kt.sibling;var Re=at(j,Kt,Q[ie],mt);if(Re===null){Kt===null&&(Kt=En);break}e&&Kt&&Re.alternate===null&&n(j,Kt),k=f(Re,k,ie),xe===null?Vt=Re:xe.sibling=Re,xe=Re,Kt=En}if(ie===Q.length)return a(j,Kt),Ce&&or(j,ie),Vt;if(Kt===null){for(;ie<Q.length;ie++)Kt=gt(j,Q[ie],mt),Kt!==null&&(k=f(Kt,k,ie),xe===null?Vt=Kt:xe.sibling=Kt,xe=Kt);return Ce&&or(j,ie),Vt}for(Kt=o(Kt);ie<Q.length;ie++)En=rt(Kt,j,ie,Q[ie],mt),En!==null&&(e&&En.alternate!==null&&Kt.delete(En.key===null?ie:En.key),k=f(En,k,ie),xe===null?Vt=En:xe.sibling=En,xe=En);return e&&Kt.forEach(function(Fa){return n(j,Fa)}),Ce&&or(j,ie),Vt}function te(j,k,Q,mt){if(Q==null)throw Error(r(151));for(var Vt=null,xe=null,Kt=k,ie=k=0,En=null,Re=Q.next();Kt!==null&&!Re.done;ie++,Re=Q.next()){Kt.index>ie?(En=Kt,Kt=null):En=Kt.sibling;var Fa=at(j,Kt,Re.value,mt);if(Fa===null){Kt===null&&(Kt=En);break}e&&Kt&&Fa.alternate===null&&n(j,Kt),k=f(Fa,k,ie),xe===null?Vt=Fa:xe.sibling=Fa,xe=Fa,Kt=En}if(Re.done)return a(j,Kt),Ce&&or(j,ie),Vt;if(Kt===null){for(;!Re.done;ie++,Re=Q.next())Re=gt(j,Re.value,mt),Re!==null&&(k=f(Re,k,ie),xe===null?Vt=Re:xe.sibling=Re,xe=Re);return Ce&&or(j,ie),Vt}for(Kt=o(Kt);!Re.done;ie++,Re=Q.next())Re=rt(Kt,j,ie,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Kt.delete(Re.key===null?ie:Re.key),k=f(Re,k,ie),xe===null?Vt=Re:xe.sibling=Re,xe=Re);return e&&Kt.forEach(function(ky){return n(j,ky)}),Ce&&or(j,ie),Vt}function He(j,k,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Vt=Q.key;k!==null;){if(k.key===Vt){if(Vt=Q.type,Vt===b){if(k.tag===7){a(j,k.sibling),mt=u(k,Q.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===V&&Wm(Vt)===k.type){a(j,k.sibling),mt=u(k,Q.props),yo(mt,Q),mt.return=j,j=mt;break t}a(j,k);break}else n(j,k);k=k.sibling}Q.type===b?(mt=rr(Q.props.children,j.mode,mt,Q.key),mt.return=j,j=mt):(mt=Tl(Q.type,Q.key,Q.props,null,j.mode,mt),yo(mt,Q),mt.return=j,j=mt)}return M(j);case S:t:{for(Vt=Q.key;k!==null;){if(k.key===Vt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(j,k.sibling),mt=u(k,Q.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}mt=Gu(Q,j.mode,mt),mt.return=j,j=mt}return M(j);case V:return Vt=Q._init,Q=Vt(Q._payload),He(j,k,Q,mt)}if(ut(Q))return ae(j,k,Q,mt);if(et(Q)){if(Vt=et(Q),typeof Vt!="function")throw Error(r(150));return Q=Vt.call(Q),te(j,k,Q,mt)}if(typeof Q.then=="function")return He(j,k,Vl(Q),mt);if(Q.$$typeof===L)return He(j,k,Cl(j,Q),mt);kl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(j,k.sibling),mt=u(k,Q),mt.return=j,j=mt):(a(j,k),mt=Hu(Q,j.mode,mt),mt.return=j,j=mt),M(j)):a(j,k)}return function(j,k,Q,mt){try{xo=0;var Vt=He(j,k,Q,mt);return $r=null,Vt}catch(Kt){if(Kt===co||Kt===Ul)throw Kt;var xe=$n(29,Kt,null,j.mode);return xe.lanes=mt,xe.return=j,xe}finally{}}}var ts=Ym(!0),jm=Ym(!1),di=$(null),Pi=null;function ba(e){var n=e.alternate;St(gn,gn.current&1),St(di,e),Pi===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(Pi=e)}function Zm(e){if(e.tag===22){if(St(gn,gn.current),St(di,e),Pi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Pi=e)}}else Ta()}function Ta(){St(gn,gn.current),St(di,di.current)}function Qi(e){vt(di),Pi===e&&(Pi=null),vt(gn)}var gn=$(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||uh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(ai(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(ai(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(ai(n,e,a),fo(n,e,a))}};function Km(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,f):!0}function Qm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Mf.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jm(e){ql(e)}function $m(e){console.error(e)}function tg(e){ql(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function eg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function ng(e){return e=Sa(e),e.tag=3,e}function ig(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){eg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){eg(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function kx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&so(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 13:return Pi===null?Yf():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Qu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Qu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(r(435,a.tag))}return Zf(e,o,u),Yf(),!1}if(Ce)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(e=Error(r(422),{cause:o}),ro(ci(e,a)))):(o!==Xu&&(n=Error(r(423),{cause:o}),ro(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=Ef(e.stateNode,o,u),tf(e,u),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:o});if(f=ci(f,a),Ro===null?Ro=[f]:Ro.push(f),an!==4&&(an=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ng(u),ig(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var ag=Error(r(461)),Sn=!1;function An(e,n,a,o){n.child=e===null?jm(n,null,a,o):ts(n,e.child,a,o)}function rg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return fr(n),o=sf(e,n,a,M,f,u),A=of(),e!==null&&!Sn?(lf(e,n,u),Ji(e,n,u)):(Ce&&A&&Vu(n),n.flags|=1,An(e,n,o,u),n.child)}function sg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,og(e,n,f,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=qi(f,o),e.ref=n.ref,e.return=n,n.child=e}function og(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(eo(f,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,Uf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return bf(e,n,a,o,u)}function lg(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return cg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?om(n,f):nf(),Zm(n);else return n.lanes=n.childLanes=536870912,cg(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Dl(n,f.cachePool),om(n,f),Ta(),n.memoizedState=null):(e!==null&&Dl(n,null),nf(),Ta());return An(e,n,u,a),n.child}function cg(e,n,a,o){var u=Ku();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Dl(n,null),nf(),Zm(n),e!==null&&so(e,n,o,!0),null}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,o,u){return fr(n),a=sf(e,n,a,o,void 0,u),o=of(),e!==null&&!Sn?(lf(e,n,u),Ji(e,n,u)):(Ce&&o&&Vu(n),n.flags|=1,An(e,n,a,u),n.child)}function ug(e,n,a,o,u,f){return fr(n),n.updateQueue=null,a=cm(n,o,a,u),lm(e),o=of(),e!==null&&!Sn?(lf(e,n,f),Ji(e,n,f)):(Ce&&o&&Vu(n),n.flags|=1,An(e,n,a,f),n.child)}function fg(e,n,a,o,u){if(fr(n),n.stateNode===null){var f=Xr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Ln(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Ln(M):Xr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Sf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Mf.enqueueReplaceState(f,f.state,null),po(n,o,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=pr(a,A);f.props=G;var J=f.context,pt=a.contextType;M=Xr,typeof pt=="object"&&pt!==null&&(M=Ln(pt));var gt=a.getDerivedStateFromProps;pt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==M)&&Qm(n,f,o,M),ya=!1;var at=n.memoizedState;f.state=at,po(n,o,f,u),ho(),J=n.memoizedState,A||at!==J||ya?(typeof gt=="function"&&(Sf(n,a,gt,o),J=n.memoizedState),(G=ya||Km(n,a,G,o,at,J,M))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=M,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(e,n),M=n.memoizedProps,pt=pr(a,M),f.props=pt,gt=n.pendingProps,at=f.context,J=a.contextType,G=Xr,typeof J=="object"&&J!==null&&(G=Ln(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==gt||at!==G)&&Qm(n,f,o,G),ya=!1,at=n.memoizedState,f.state=at,po(n,o,f,u),ho();var rt=n.memoizedState;M!==gt||at!==rt||ya||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof A=="function"&&(Sf(n,a,A,o),rt=n.memoizedState),(pt=ya||Km(n,a,pt,o,at,rt,G)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ts(n,e.child,null,u),n.child=ts(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ji(e,n,u),e}function hg(e,n,a,o){return ao(),n.flags|=256,An(e,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:$p()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function dg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?ba(n):Ta(),Ce){var A=nn,G;if(G=A){t:{for(G=A,A=Oi;G.nodeType!==8;){if(!A){A=null;break t}if(G=bi(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(n.memoizedState={dehydrated:A,treeContext:sr!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},G=$n(18,null,null,0),G.stateNode=A,G.return=n,n.child=G,Hn=n,nn=null,G=!0):G=!1}G||cr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return uh(A)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return A=o.children,o=o.fallback,u?(Ta(),u=n.mode,A=jl({mode:"hidden",children:A},u),o=rr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=Af(a),u.childLanes=Rf(e,M,a),n.memoizedState=Tf,o):(ba(n),wf(n,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Cf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),u=o.fallback,A=n.mode,o=jl({mode:"visible",children:o.children},A),u=rr(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ts(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,M,a),n.memoizedState=Tf,n=u);else if(ba(n),uh(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,ro({value:o,source:null,stack:null}),n=Cf(e,n,a)}else if(Sn||so(e,n,a,!1),M=(a&e.childLanes)!==0,Sn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:se(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,kr(e,o),ai(M,e,o),ag;A.data==="$?"||Yf(),n=Cf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,nn=bi(A.nextSibling),Hn=n,Ce=!0,lr=null,Oi=!1,e!==null&&(fi[hi++]=Wi,fi[hi++]=Yi,fi[hi++]=sr,Wi=e.id,Yi=e.overflow,sr=n),n=wf(n,o.children),n.flags|=4096);return n}return u?(Ta(),u=o.fallback,A=n.mode,G=e.child,J=G.sibling,o=qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,J!==null?u=qi(J,u):(u=rr(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=Af(a):(G=A.cachePool,G!==null?(J=mn._currentValue,G=G.parent!==J?{parent:J,pool:J}:G):G=$p(),A={baseLanes:A.baseLanes|a,cachePool:G}),u.memoizedState=A,u.childLanes=Rf(e,M,a),n.memoizedState=Tf,o):(ba(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function wf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=$n(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cf(e,n,a){return ts(n,e.child,null,a),e=wf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Df(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function mg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(An(e,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pg(e,a,n);else if(e.tag===19)pg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,f);break;case"together":Df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(so(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function Xx(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),xa(n,mn,e.memoizedState.cache),ao();break;case 27:case 5:ee(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dg(e,n,a):(ba(n),e=Ji(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(so(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return mg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,lg(e,n,a);case 24:xa(n,mn,e.memoizedState.cache)}return Ji(e,n,a)}function gg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return Sn=!1,Xx(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Ce&&(n.flags&1048576)!==0&&Wp(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Fu(o)?(e=pr(o,e),n.tag=1,n=fg(null,n,o,e,a)):(n.tag=0,n=bf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=rg(null,n,o,e,a);break t}else if(u===I){n.tag=14,n=sg(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(r(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=pr(o,n.pendingProps),fg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),po(n,o,null,a);var M=n.memoizedState;if(o=M.cache,xa(n,mn,o),o!==f.cache&&Yu(n,[mn],a,!0),ho(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=hg(e,n,o,a);break t}else if(o!==u){u=ci(Error(r(424)),n),ro(u),n=hg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=bi(e.firstChild),Hn=n,Ce=!0,lr=null,Oi=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ao(),o===u){n=Ji(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=y_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=lc(dt.current).createElement(a),o[pn]=n,o[tn]=e,wn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=y_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Ce&&(o=n.stateNode=__(n.type,n.pendingProps,dt.current),Hn=n,Oi=!0,u=nn,Oa(n.type)?(fh=u,nn=bi(o.firstChild)):nn=u),An(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=nn)&&(o=vy(o,n.type,n.pendingProps,Oi),o!==null?(n.stateNode=o,Hn=n,nn=bi(o.firstChild),Oi=!1,u=!0):u=!1),u||cr(n)),ee(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,oh(u,f)?o=null:M!==null&&oh(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=sf(e,n,zx,null,null,a),zo._currentValue=u),Yl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=nn)&&(a=xy(a,n.pendingProps,Oi),a!==null?(n.stateNode=a,Hn=n,nn=null,e=!0):e=!1),e||cr(n)),null;case 13:return dg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ts(n,null,o,a):An(e,n,o,a),n.child;case 11:return rg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fr(n),u=Ln(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return sg(e,n,n.type,n.pendingProps,a);case 15:return og(e,n,n.type,n.pendingProps,a);case 19:return mg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=qi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return lg(e,n,a);case 24:return fr(n),o=Ln(mn),e===null?(u=Ku(),u===null&&(u=We,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),xa(n,mn,u)):((e.lanes&a)!==0&&($u(e,n),po(n,null,null,a),ho()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,mn,o)):(o=f.cache,xa(n,mn,o),o!==u.cache&&Yu(n,[mn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function _g(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T_(n)){if(n=di.current,n!==null&&((be&4194048)===be?Pi!==null:(be&62914560)!==be&&(be&536870912)===0||n!==Pi))throw uo=Qu,tm;e.flags|=8192}}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,as|=n)}function So(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function qx(e,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(mn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(io(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zp())),Je(n),null;case 26:return a=n.memoizedState,e===null?($i(n),a!==null?(Je(n),_g(n,a)):(Je(n),n.flags&=-16777217)):a?a!==e.memoizedState?($i(n),Je(n),_g(n,a)):(Je(n),n.flags&=-16777217):(e.memoizedProps!==o&&$i(n),Je(n),n.flags&=-16777217),null;case 27:Ne(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=Ct.current,io(n)?Yp(n):(e=__(u,o,a),n.stateNode=e,$i(n))}return Je(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(e=Ct.current,io(n))Yp(n);else{switch(u=lc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[pn]=n,e[tn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(wn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$i(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,io(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||cr(n)}else e=lc(e).createTextNode(o),e[pn]=n,n.stateNode=e}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=io(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[pn]=n}else ao(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Zp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Je(n),null;case 4:return qt(),e===null&&nh(n.stateNode.containerInfo),Je(n),null;case 10:return Zi(n.type),Je(n),null;case 19:if(vt(gn),u=n.memoizedState,u===null)return Je(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)So(u,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Xl(e),f!==null){for(n.flags|=128,So(u,!1),e=f.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qp(a,e),a=a.sibling;return St(gn,gn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ht()>Jl&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304)}else{if(!o)if(e=Xl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),So(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return Je(n),null}else 2*Ht()-u.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ht(),n.sibling=null,e=gn.current,St(gn,o?e&1|2:e&1),n):(Je(n),null);case 22:case 23:return Qi(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(hr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(mn),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Wx(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(mn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ao()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(gn),null;case 4:return qt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Qi(n),af(),e!==null&&vt(hr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(mn),null;case 25:return null;default:return null}}function vg(e,n){switch(ku(n),n.tag){case 3:Zi(mn),qt();break;case 26:case 27:case 5:Ne(n);break;case 4:qt();break;case 13:Qi(n);break;case 19:vt(gn);break;case 10:Zi(n.type);break;case 22:case 23:Qi(n),af(),e!==null&&vt(hr);break;case 24:Zi(mn)}}function Mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){qe(n,n.return,A)}}function Aa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var G=a,J=A;try{J()}catch(pt){qe(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){qe(n,n.return,pt)}}function xg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(o){qe(e,e.return,o)}}}function yg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){qe(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function Sg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function Lf(e,n,a){try{var o=e.stateNode;dy(o,e.type,a,n),o[tn]=n}catch(u){qe(e,e.return,u)}}function Mg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Mg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oc));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Of(e,n,a),e=e.sibling;e!==null;)Of(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function Eg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[pn]=e,n[tn]=a}catch(f){qe(e,e.return,f)}}var ta=!1,on=!1,Pf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Yx(e,n){if(e=e.containerInfo,rh=pc,e=Pp(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,G=-1,J=0,pt=0,gt=e,at=null;e:for(;;){for(var rt;gt!==a||u!==0&&gt.nodeType!==3||(A=M+u),gt!==f||o!==0&&gt.nodeType!==3||(G=M+o),gt.nodeType===3&&(M+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)at=gt,gt=rt;for(;;){if(gt===e)break e;if(at===a&&++J===u&&(A=M),at===f&&++pt===o&&(G=M),(rt=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=rt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:e,selectionRange:a},pc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ae=pr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ae,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){qe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),o&4&&Mo(5,a);break;case 1:if(Ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){qe(a,a.return,M)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){qe(a,a.return,M)}}o&64&&xg(a),o&512&&Eo(a,a.return);break;case 3:if(Ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(M){qe(a,a.return,M)}}break;case 27:n===null&&o&4&&Eg(a);case 26:case 5:Ra(e,a),n===null&&o&4&&Sg(a),o&512&&Eo(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),o&4&&wg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ny.bind(null,a),yy(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||on,u=ta;var f=on;ta=o,(on=n)&&!f?wa(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),ta=u,on=f}break;case 30:break;default:Ra(e,a)}}function Ag(e){var n=e.alternate;n!==null&&(e.alternate=null,Ag(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Pr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,jn=!1;function ea(e,n,a){for(a=a.child;a!==null;)Rg(e,n,a),a=a.sibling}function Rg(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:on||zi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||zi(a,n);var o=Ze,u=jn;Oa(a.type)&&(Ze=a.stateNode,jn=!1),ea(e,n,a),Lo(a.stateNode),Ze=o,jn=u;break;case 5:on||zi(a,n);case 6:if(o=Ze,u=jn,Ze=null,ea(e,n,a),Ze=o,jn=u,Ze!==null)if(jn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){qe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){qe(a,n,f)}break;case 18:Ze!==null&&(jn?(e=Ze,m_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ho(e)):m_(Ze,a.stateNode));break;case 4:o=Ze,u=jn,Ze=a.stateNode.containerInfo,jn=!0,ea(e,n,a),Ze=o,jn=u;break;case 0:case 11:case 14:case 15:on||Aa(2,a,n),on||Aa(4,a,n),ea(e,n,a);break;case 1:on||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&yg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ea(e,n,a),on=o;break;default:ea(e,n,a)}}function wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(a){qe(n,n.return,a)}}function jx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bg),n;default:throw Error(r(435,e.tag))}}function zf(e,n){var a=jx(e);n.forEach(function(o){var u=iy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Oa(A.type)){Ze=A.stateNode,jn=!1;break t}break;case 5:Ze=A.stateNode,jn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,jn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));Rg(f,M,u),Ze=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cg(n,e),n=n.sibling}var Ei=null;function Cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(Aa(3,e,e.return),Mo(3,e),Aa(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(on||a===null||zi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(ti(n,e),ei(e),o&512&&(on||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ni]||f[pn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[pn]=e,cn(f),o=f;break t;case"link":var M=E_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=E_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[pn]=e,cn(f),o=f}e.stateNode=o}else b_(u,e.type,e.stateNode);else e.stateNode=M_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?b_(u,e.type,e.stateNode):M_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(on||a===null||zi(a,a.return)),a!==null&&o&4&&Lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(on||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{qn(u,"")}catch(rt){qe(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Lf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){qe(e,e.return,rt)}}break;case 3:if(fc=null,u=Ei,Ei=cc(n.containerInfo),ti(n,e),Ei=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ho(n.containerInfo)}catch(rt){qe(e,e.return,rt)}Pf&&(Pf=!1,Dg(e));break;case 4:o=Ei,Ei=cc(e.stateNode.containerInfo),ti(n,e),ei(e),Ei=o;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vf=Ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zf(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,J=ta,pt=on;if(ta=J||u,on=pt||G,ti(n,e),on=pt,ta=J,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ta||on||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var gt=G.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){qe(G,G.return,rt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(rt){qe(G,G.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,zf(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zf(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Mg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Nf(e);Kl(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(qn(M,""),a.flags&=-33);var A=Nf(e);Kl(e,A,M);break;case 3:case 4:var G=a.stateNode.containerInfo,J=Nf(e);Of(e,J,G);break;default:throw Error(r(161))}}catch(pt){qe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tg(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),mr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&yg(n,n.return,a),mr(n);break;case 27:Lo(n.stateNode);case 26:case 5:zi(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function wa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:wa(u,f,a),Mo(4,f);break;case 1:if(wa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){qe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)rm(G[u],A)}catch(J){qe(o,o.return,J)}}a&&M&64&&xg(f),Eo(f,f.return);break;case 27:Eg(f);case 26:case 5:wa(u,f,a),a&&o===null&&M&4&&Sg(f),Eo(f,f.return);break;case 12:wa(u,f,a);break;case 13:wa(u,f,a),a&&M&4&&wg(u,f);break;case 22:f.memoizedState===null&&wa(u,f,a),Eo(f,f.return);break;case 30:break;default:wa(u,f,a)}n=n.sibling}}function Bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(e,n,a,o),n=n.sibling}function Ug(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,o),u&2048&&Mo(9,n);break;case 1:Bi(e,n,a,o);break;case 3:Bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){qe(n,n.return,G)}}else Bi(e,n,a,o);break;case 13:Bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Bi(e,n,a,o):bo(e,n):f._visibility&2?Bi(e,n,a,o):(f._visibility|=2,es(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Bf(M,n);break;case 24:Bi(e,n,a,o),u&2048&&If(n.alternate,n);break;default:Bi(e,n,a,o)}}function es(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,G=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:es(f,M,A,G,u),Mo(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?es(f,M,A,G,u):bo(f,M):(pt._visibility|=2,es(f,M,A,G,u)),u&&J&2048&&Bf(M.alternate,M);break;case 24:es(f,M,A,G,u),u&&J&2048&&If(M.alternate,M);break;default:es(f,M,A,G,u)}n=n.sibling}}function bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&Bf(o.alternate,o);break;case 24:bo(a,o),u&2048&&If(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var To=8192;function ns(e){if(e.subtreeFlags&To)for(e=e.child;e!==null;)Lg(e),e=e.sibling}function Lg(e){switch(e.tag){case 26:ns(e),e.flags&To&&e.memoizedState!==null&&Ny(Ei,e.memoizedState,e.memoizedProps);break;case 5:ns(e);break;case 3:case 4:var n=Ei;Ei=cc(e.stateNode.containerInfo),ns(e),Ei=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=To,To=16777216,ns(e),To=n):ns(e));break;default:ns(e)}}function Ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Pg(o,e)}Ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Og(e),e=e.sibling}function Og(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Ao(e);break;default:Ao(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Pg(o,e)}Ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function Pg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(Ag(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var Zx={getCacheForType:function(e){var n=Ln(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Kx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,Se=null,be=0,Pe=0,ni=null,Ca=!1,is=!1,Ff=!1,na=0,an=0,Da=0,gr=0,Hf=0,pi=0,as=0,Ro=null,Zn=null,Gf=!1,Vf=0,Jl=1/0,$l=null,Ua=null,Rn=0,La=null,rs=null,ss=0,kf=0,Xf=null,zg=null,wo=0,qf=null;function ii(){if((Oe&2)!==0&&be!==0)return be&-be;if(P.T!==null){var e=Yr;return e!==0?e:Jf()}return Te()}function Bg(){pi===0&&(pi=(be&536870912)===0||Ce?X():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function ai(e,n,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(os(e,0),Na(e,be,pi,!1)),It(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(gr|=a),an===4&&Na(e,be,pi,!1)),Ii(e))}function Ig(e,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?$x(e,n):jf(e,n,!0),f=o;do{if(u===0){is&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qx(a)){u=jf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Ro;var G=A.current.memoizedState.isDehydrated;if(G&&(os(A,M).flags|=256),M=jf(A,M,!1),M!==2){if(Ff&&!G){A.errorRecoveryDisabledLanes|=f,gr|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){os(e,0),Na(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,pi,!Ca);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vf+300-Ht(),10<u)){if(Na(o,n,pi,!Ca),Xt(o,0,!0)!==0)break t;o.timeoutHandle=d_(Fg.bind(null,o,a,Zn,$l,Gf,n,pi,gr,as,Ca,f,2,-0,0),u);break t}Fg(o,a,Zn,$l,Gf,n,pi,gr,as,Ca,f,0,-0,0)}}break}while(!0);Ii(e)}function Fg(e,n,a,o,u,f,M,A,G,J,pt,gt,at,rt){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Po={stylesheets:null,count:0,unsuspend:Ly},Lg(n),gt=Oy(),gt!==null)){e.cancelPendingCommit=gt(Wg.bind(null,e,n,f,a,o,u,M,A,G,pt,1,at,rt)),Na(e,f,M,!J);return}Wg(e,n,f,a,o,u,M,A,G)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~Hf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&_t(e,a,n)}function tc(){return(Oe&6)===0?(Co(0),!1):!0}function Wf(){if(Se!==null){if(Pe===0)var e=Se.return;else e=Se,ji=ur=null,cf(e),$r=null,xo=0,e=Se;for(;e!==null;)vg(e.alternate,e),e=e.return;Se=null}}function os(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,my(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wf(),We=e,Se=a=qi(e.current,null),be=n,Pe=0,ni=null,Ca=!1,is=Dt(e,n),Ff=!1,as=pi=Hf=gr=Da=an=0,Zn=Ro=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return na=n,Ml(),a}function Hg(e,n){ve=null,P.H=Gl,n===co||n===Ul?(n=im(),Pe=3):n===tm?(n=im(),Pe=4):Pe=n===ag?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&(an=1,Wl(e,ci(n,e.current)))}function Gg(){var e=P.H;return P.H=Gl,e===null?Gl:e}function Vg(){var e=P.A;return P.A=Zx,e}function Yf(){an=4,Ca||(be&4194048)!==be&&di.current!==null||(is=!0),(Da&134217727)===0&&(gr&134217727)===0||We===null||Na(We,be,pi,!1)}function jf(e,n,a){var o=Oe;Oe|=2;var u=Gg(),f=Vg();(We!==e||be!==n)&&($l=null,os(e,n)),n=!1;var M=an;t:do try{if(Pe!==0&&Se!==null){var A=Se,G=ni;switch(Pe){case 8:Wf(),M=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var J=Pe;if(Pe=0,ni=null,ls(e,A,G,J),a&&is){M=0;break t}break;default:J=Pe,Pe=0,ni=null,ls(e,A,G,J)}}Jx(),M=an;break}catch(pt){Hg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ji=ur=null,Oe=o,P.H=u,P.A=f,Se===null&&(We=null,be=0,Ml()),M}function Jx(){for(;Se!==null;)kg(Se)}function $x(e,n){var a=Oe;Oe|=2;var o=Gg(),u=Vg();We!==e||be!==n?($l=null,Jl=Ht()+500,os(e,n)):is=Dt(e,n);t:do try{if(Pe!==0&&Se!==null){n=Se;var f=ni;e:switch(Pe){case 1:Pe=0,ni=null,ls(e,n,f,1);break;case 2:case 9:if(em(f)){Pe=0,ni=null,Xg(n);break}n=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),Ii(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:em(f)?(Pe=0,ni=null,Xg(n)):(Pe=0,ni=null,ls(e,n,f,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||T_(M)){Pe=0,ni=null;var G=A.sibling;if(G!==null)Se=G;else{var J=A.return;J!==null?(Se=J,ec(J)):Se=null}break e}}Pe=0,ni=null,ls(e,n,f,5);break;case 6:Pe=0,ni=null,ls(e,n,f,6);break;case 8:Wf(),an=6;break t;default:throw Error(r(462))}}ty();break}catch(pt){Hg(e,pt)}while(!0);return ji=ur=null,P.H=o,P.A=u,Oe=a,Se!==null?0:(We=null,be=0,Ml(),an)}function ty(){for(;Se!==null&&!Ft();)kg(Se)}function kg(e){var n=gg(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?ec(e):Se=n}function Xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ug(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=ug(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:cf(n);default:vg(a,n),n=Se=qp(n,na),n=gg(a,n,na)}e.memoizedProps=e.pendingProps,n===null?ec(e):Se=n}function ls(e,n,a,o){ji=ur=null,cf(n),$r=null,xo=0;var u=n.return;try{if(kx(e,u,n,a,be)){an=1,Wl(e,ci(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;an=1,Wl(e,ci(a,e.current)),Se=null;return}n.flags&32768?(Ce||o===1?e=!0:is||(be&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),qg(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){qg(n,Ca);return}e=n.return;var a=qx(n.alternate,n,na);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);an===0&&(an=5)}function qg(e,n){do{var a=Wx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);an=6,Se=null}function Wg(e,n,a,o,u,f,M,A,G){e.cancelPendingCommit=null;do nc();while(Rn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Bu,bt(e,a,f,M,A,G),e===We&&(Se=We=null,be=0),rs=n,La=e,ss=a,kf=f,Xf=u,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ay(Ke,function(){return Qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Y.p,Y.p=2,M=Oe,Oe|=4;try{Yx(e,n,a)}finally{Oe=M,Y.p=u,P.T=o}}Rn=1,Yg(),jg(),Zg()}}function Yg(){if(Rn===1){Rn=0;var e=La,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Oe;Oe|=4;try{Cg(n,e);var f=sh,M=Pp(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&Op(A.ownerDocument.documentElement,A)){if(G!==null&&Lu(A)){var J=G.start,pt=G.end;if(pt===void 0&&(pt=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(pt,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),ae=A.textContent.length,te=Math.min(G.start,ae),He=G.end===void 0?te:Math.min(G.end,ae);!rt.extend&&te>He&&(M=He,He=te,te=M);var j=Np(A,te),k=Np(A,He);if(j&&k&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var Q=gt.createRange();Q.setStart(j.node,j.offset),rt.removeAllRanges(),te>He?(rt.addRange(Q),rt.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),rt.addRange(Q))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}pc=!!rh,sh=rh=null}finally{Oe=u,Y.p=o,P.T=a}}e.current=n,Rn=2}}function jg(){if(Rn===2){Rn=0;var e=La,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Oe;Oe|=4;try{Tg(e,n.alternate,n)}finally{Oe=u,Y.p=o,P.T=a}}Rn=3}}function Zg(){if(Rn===4||Rn===3){Rn=0,_e();var e=La,n=rs,a=ss,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,rs=La=null,Kg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Ue(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{P.T=n,Y.p=u}}(ss&3)!==0&&nc(),Ii(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===qf?wo++:(wo=0,qf=e):wo=0,Co(0)}}function Kg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function nc(e){return Yg(),jg(),Zg(),Qg()}function Qg(){if(Rn!==5)return!1;var e=La,n=kf;kf=0;var a=Ue(ss),o=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Xf,Xf=null;var f=La,M=ss;if(Rn=0,rs=La=null,ss=0,(Oe&6)!==0)throw Error(r(331));var A=Oe;if(Oe|=4,Og(f.current),Ug(f,f.current,M,a),Oe=A,Co(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Y.p=u,P.T=o,Kg(e,n)}}function Jg(e,n,a){n=ci(a,n),n=Ef(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(It(e,2),Ii(e))}function qe(e,n,a){if(e.tag===3)Jg(e,e,a);else for(;n!==null;){if(n.tag===3){Jg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ci(a,e),a=ng(2),o=Ma(n,a,2),o!==null&&(ig(a,o,n,e),It(o,2),Ii(o));break}}n=n.return}}function Zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),e=ey.bind(null,e,n,a),n.then(e,e))}function ey(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(be&a)===a&&(an===4||an===3&&(be&62914560)===be&&300>Ht()-Vf?(Oe&2)===0&&os(e,0):Hf|=a,as===be&&(as=0)),Ii(e)}function $g(e,n){n===0&&(n=At()),e=kr(e,n),e!==null&&(It(e,n),Ii(e))}function ny(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$g(e,a)}function iy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),$g(e,a)}function ay(e,n){return z(e,n)}var ic=null,cs=null,Kf=!1,ac=!1,Qf=!1,_r=0;function Ii(e){e!==cs&&e.next===null&&(cs===null?ic=cs=e:cs=cs.next=e),ac=!0,Kf||(Kf=!0,sy())}function Co(e,n){if(!Qf&&ac){Qf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,i_(o,f))}else f=be,f=Xt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,i_(o,f));o=o.next}while(a);Qf=!1}}function ry(){t_()}function t_(){ac=Kf=!1;var e=0;_r!==0&&(py()&&(e=_r),_r=0);for(var n=Ht(),a=null,o=ic;o!==null;){var u=o.next,f=e_(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(cs=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}Co(e)}function e_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-zt(f),A=1<<M,G=u[M];G===-1?((A&a)===0||(A&o)!==0)&&(u[M]=oe(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=be,a=Xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&de(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&de(o),Ue(a)){case 2:case 8:a=le;break;case 32:a=Ke;break;case 268435456:a=N;break;default:a=Ke}return o=n_.bind(null,e),a=z(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&de(o),e.callbackPriority=2,e.callbackNode=null,2}function n_(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=be;return o=Xt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ig(e,o,n),e_(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?n_.bind(null,e):null)}function i_(e,n){if(nc())return null;Ig(e,n,!0)}function sy(){gy(function(){(Oe&6)!==0?z(Bt,ry):t_()})}function Jf(){return _r===0&&(_r=X()),_r}function a_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function r_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=a_((u[tn]||null).action),M=o.submitter;M&&(n=(n=M[tn]||null)?a_(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new xl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_r!==0){var G=M?r_(u,M):new FormData(u);vf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=M?r_(u,M):new FormData(u),vf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var $f=0;$f<zu.length;$f++){var th=zu[$f],ly=th.toLowerCase(),cy=th[0].toUpperCase()+th.slice(1);Mi(ly,"on"+cy)}Mi(Ip,"onAnimationEnd"),Mi(Fp,"onAnimationIteration"),Mi(Hp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ax,"onTransitionRun"),Mi(Rx,"onTransitionStart"),Mi(wx,"onTransitionCancel"),Mi(Gp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],G=A.instance,J=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(pt){ql(pt)}u.currentTarget=null,f=G}else for(M=0;M<o.length;M++){if(A=o[M],G=A.instance,J=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(pt){ql(pt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var o=e+"__bubble";a.has(o)||(o_(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),o_(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[rc]){e[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,eh("selectionchange",!1,n))}}function o_(e,n,a,o){switch(U_(n)){case 2:var u=By;break;case 8:u=Iy;break;default:u=gh}a=u.bind(null,n,a,e),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=ki(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=f=M;continue t}A=A.parentNode}}o=o.return}pp(function(){var J=f,pt=Su(a),gt=[];t:{var at=Vp.get(e);if(at!==void 0){var rt=xl,ae=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":rt=ax;break;case"focusin":ae="focus",rt=Ru;break;case"focusout":ae="blur",rt=Ru;break;case"beforeblur":case"afterblur":rt=Ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=ox;break;case Ip:case Fp:case Hp:rt=Zv;break;case Gp:rt=cx;break;case"scroll":case"scrollend":rt=Xv;break;case"wheel":rt=fx;break;case"copy":case"cut":case"paste":rt=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=xp;break;case"toggle":case"beforetoggle":rt=dx}var te=(n&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),j=te?at!==null?at+"Capture":null:at;te=[];for(var k=J,Q;k!==null;){var mt=k;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||j===null||(mt=js(k,j),mt!=null&&te.push(Uo(k,mt,Q))),He)break;k=k.return}0<te.length&&(at=new rt(at,ae,null,a,pt),gt.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",at&&a!==yu&&(ae=a.relatedTarget||a.fromElement)&&(ki(ae)||ae[Li]))break t;if((rt||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(ae=a.relatedTarget||a.toElement,rt=J,ae=ae?ki(ae):null,ae!==null&&(He=c(ae),te=ae.tag,ae!==He||te!==5&&te!==27&&te!==6)&&(ae=null)):(rt=null,ae=J),rt!==ae)){if(te=_p,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=xp,mt="onPointerLeave",j="onPointerEnter",k="pointer"),He=rt==null?at:er(rt),Q=ae==null?at:er(ae),at=new te(mt,k+"leave",rt,a,pt),at.target=He,at.relatedTarget=Q,mt=null,ki(pt)===J&&(te=new te(j,k+"enter",ae,a,pt),te.target=Q,te.relatedTarget=He,mt=te),He=mt,rt&&ae)e:{for(te=rt,j=ae,k=0,Q=te;Q;Q=us(Q))k++;for(Q=0,mt=j;mt;mt=us(mt))Q++;for(;0<k-Q;)te=us(te),k--;for(;0<Q-k;)j=us(j),Q--;for(;k--;){if(te===j||j!==null&&te===j.alternate)break e;te=us(te),j=us(j)}te=null}else te=null;rt!==null&&l_(gt,at,rt,te,!1),ae!==null&&He!==null&&l_(gt,He,ae,te,!0)}}t:{if(at=J?er(J):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Vt=Rp;else if(Tp(at))if(wp)Vt=Ex;else{Vt=Sx;var xe=yx}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?J&&xu(J.elementType)&&(Vt=Rp):Vt=Mx;if(Vt&&(Vt=Vt(e,J))){Ap(gt,Vt,a,pt);break t}xe&&xe(e,at,J),e==="focusout"&&J&&at.type==="number"&&J.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(xe=J?er(J):window,e){case"focusin":(Tp(xe)||xe.contentEditable==="true")&&(Hr=xe,Nu=J,no=null);break;case"focusout":no=Nu=Hr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,zp(gt,a,pt);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":zp(gt,a,pt)}var Kt;if(Cu)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Fr?Ep(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(yp&&a.locale!=="ko"&&(Fr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Fr&&(Kt=mp()):(va=pt,bu="value"in va?va.value:va.textContent,Fr=!0)),xe=sc(J,ie),0<xe.length&&(ie=new vp(ie,e,null,a,pt),gt.push({event:ie,listeners:xe}),Kt?ie.data=Kt:(Kt=bp(a),Kt!==null&&(ie.data=Kt)))),(Kt=mx?gx(e,a):_x(e,a))&&(ie=sc(J,"onBeforeInput"),0<ie.length&&(xe=new vp("onBeforeInput","beforeinput",null,a,pt),gt.push({event:xe,listeners:ie}),xe.data=Kt)),oy(gt,e,J,a,pt)}s_(gt,n)})}function Uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=js(e,a),u!=null&&o.unshift(Uo(e,u,f)),u=js(e,n),u!=null&&o.push(Uo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function l_(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,G=A.alternate,J=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||J===null||(G=J,u?(J=js(a,f),J!=null&&M.unshift(Uo(a,J,G))):u||(J=js(a,f),J!=null&&M.push(Uo(a,J,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function c_(e){return(typeof e=="string"?e:""+e).replace(fy,`
`).replace(hy,"")}function u_(e,n){return n=c_(n),c_(e)===n}function oc(){}function Fe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(e,""+o);break;case"className":Gt(e,"class",o);break;case"tabIndex":Gt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(e,a,o);break;case"style":hp(e,o,f);break;case"data":if(n!=="object"){Gt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oc);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vv.get(a)||a,Lt(e,a,o))}}function ah(e,n,a,o,u,f){switch(a){case"style":hp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,M,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=M=u=null,G=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":M=pt;break;case"checked":G=pt;break;case"defaultChecked":J=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Fe(e,n,o,pt,a,null)}}Fn(e,f,A,G,J,M,u,!1),ye(e);return;case"select":Me("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Fe(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,n,M,A,a,null)}zr(e,o,u,f),ye(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,n,G,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)Me(Do[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,J,o,a,null)}return;default:if(xu(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&ah(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Fe(e,n,A,o,a,null))}function dy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,G=null,J=null,pt=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":G=gt;default:o.hasOwnProperty(rt)||Fe(e,n,rt,null,o,gt)}}for(var at in o){var rt=o[at];if(gt=a[at],o.hasOwnProperty(at)&&(rt!=null||gt!=null))switch(at){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":pt=rt;break;case"value":M=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==gt&&Fe(e,n,at,rt,o,gt)}}Xe(e,M,A,G,J,pt,f,u);return;case"select":rt=M=A=at=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":rt=G;default:o.hasOwnProperty(f)||Fe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==G&&Fe(e,n,u,f,o,G)}n=A,a=M,o=rt,at!=null?en(e,!!a,at,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":rt=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":at=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Fe(e,n,M,u,o,f)}Tn(e,at,rt);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Fe(e,n,ae,null,o,at)}for(G in o)if(at=o[G],rt=a[G],o.hasOwnProperty(G)&&at!==rt&&(at!=null||rt!=null))switch(G){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,n,G,at,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Fe(e,n,te,null,o,at);for(J in o)if(at=o[J],rt=a[J],o.hasOwnProperty(J)&&at!==rt&&(at!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Fe(e,n,J,at,o,rt)}return;default:if(xu(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&ah(e,n,He,void 0,o,at);for(pt in o)at=o[pt],rt=a[pt],!o.hasOwnProperty(pt)||at===rt||at===void 0&&rt===void 0||ah(e,n,pt,at,o,rt);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&Fe(e,n,j,null,o,at);for(gt in o)at=o[gt],rt=a[gt],!o.hasOwnProperty(gt)||at===rt||at==null&&rt==null||Fe(e,n,gt,at,o,rt)}var rh=null,sh=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function f_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function py(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var d_=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(e){return p_.resolve(null).then(e).catch(_y)}:d_;function _y(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function m_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Lo(M.documentElement),a&2&&Lo(M.body),a&4)for(a=M.head,Lo(a),M=a.firstChild;M;){var A=M.nextSibling,G=M.nodeName;M[Ni]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),Ho(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ho(n)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ni])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function xy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var fh=null;function g_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function __(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Pr(e)}var mi=new Map,v_=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=Y.d;Y.d={f:Sy,r:My,D:Ey,C:by,L:Ty,m:Ay,X:wy,S:Ry,M:Cy};function Sy(){var e=ia.f(),n=tc();return e||n}function My(e){var n=ga(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):ia.r(e)}var fs=typeof document>"u"?null:document;function x_(e,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),v_.has(u)||(v_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Ey(e){ia.D(e),x_("dns-prefetch",e,null)}function by(e,n){ia.C(e,n),x_("preconnect",e,n)}function Ty(e,n,a){ia.L(e,n,a);var o=fs;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var f=u;switch(n){case"style":f=hs(e);break;case"script":f=ds(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Oo(f))||(n=o.createElement("link"),wn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Ay(e,n){ia.m(e,n);var a=fs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}o=a.createElement("link"),wn(o,"link",e),cn(o),a.head.appendChild(o)}}}function Ry(e,n,a){ia.S(e,n,a);var o=fs;if(o&&e){var u=_a(o).hoistableStyles,f=hs(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(No(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&hh(e,a);var G=M=o.createElement("link");cn(G),wn(G,"link",e),G._p=new Promise(function(J,pt){G.onload=J,G.onerror=pt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function wy(e,n){ia.X(e,n);var a=fs;if(a&&e){var o=_a(a).hoistableScripts,u=ds(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0},n),(n=mi.get(u))&&dh(e,n),f=a.createElement("script"),cn(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Cy(e,n){ia.M(e,n);var a=fs;if(a&&e){var o=_a(a).hoistableScripts,u=ds(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&dh(e,n),f=a.createElement("script"),cn(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function y_(e,n,a,o){var u=(u=dt.current)?cc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=_a(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hs(a.href);var f=_a(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(No(e)))&&!f._p&&(M.instance=f,M.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||Dy(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=_a(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function hs(e){return'href="'+yn(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function S_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Dy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),cn(n),e.head.appendChild(n))}function ds(e){return'[src="'+yn(e)+'"]'}function Oo(e){return"script[async]"+e}function M_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),wn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=hs(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,cn(f),f;o=S_(a),(u=mi.get(u))&&hh(o,u),f=(e.ownerDocument||e).createElement("link"),cn(f);var M=f;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),wn(f,"link",o),n.state.loading|=4,uc(f,a.precedence,e),n.instance=f;case"script":return f=ds(a.src),(u=e.querySelector(Oo(f)))?(n.instance=u,cn(u),u):(o=a,(u=mi.get(f))&&(o=g({},a),dh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),cn(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function E_(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ni]||f[pn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function b_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function T_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Po=null;function Ly(){}function Ny(e,n,a){if(Po===null)throw Error(r(475));var o=Po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(a.href),f=e.querySelector(No(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,cn(f);return}f=e.ownerDocument||e,a=S_(a),(u=mi.get(u))&&hh(a,u),f=f.createElement("link"),cn(f);var M=f;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),wn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Oy(){if(Po===null)throw Error(r(475));var e=Po;return e.stylesheets&&e.count===0&&ph(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&ph(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)ph(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function ph(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(Py,e),dc=null,hc.call(e))}function Py(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function zy(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function A_(e,n,a,o,u,f,M,A,G,J,pt,gt){return e=new zy(e,n,a,M,A,G,J,gt),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),e}function R_(e){return e?(e=Xr,e):Xr}function w_(e,n,a,o,u,f){u=R_(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ma(e,o,n),a!==null&&(ai(a,e,n),fo(a,e,n))}function C_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mh(e,n){C_(e,n),(e=e.alternate)&&C_(e,n)}function D_(e){if(e.tag===13){var n=kr(e,67108864);n!==null&&ai(n,e,67108864),mh(e,67108864)}}var pc=!0;function By(e,n,a,o){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,gh(e,n,a,o)}finally{Y.p=f,P.T=u}}function Iy(e,n,a,o){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,gh(e,n,a,o)}finally{Y.p=f,P.T=u}}function gh(e,n,a,o){if(pc){var u=_h(o);if(u===null)ih(e,n,o,mc,a),L_(e,o);else if(Hy(u,e,n,a,o))o.stopPropagation();else if(L_(e,o),n&4&&-1<Fy.indexOf(e)){for(;u!==null;){var f=ga(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Qt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-zt(M);A.entanglements[1]|=G,M&=~G}Ii(f),(Oe&6)===0&&(Jl=Ht()+500,Co(0))}}break;case 13:A=kr(f,2),A!==null&&ai(A,f,2),tc(),mh(f,2)}if(f=_h(o),f===null&&ih(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function _h(e){return e=Su(e),vh(e)}var mc=null;function vh(e){if(mc=null,e=ki(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ze()){case Bt:return 2;case le:return 8;case Ke:case Qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var xh=!1,Pa=null,za=null,Ba=null,Bo=new Map,Io=new Map,Ia=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Fo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ga(n),n!==null&&D_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Hy(e,n,a,o,u){switch(n){case"focusin":return Pa=Fo(Pa,e,n,a,o,u),!0;case"dragenter":return za=Fo(za,e,n,a,o,u),!0;case"mouseover":return Ba=Fo(Ba,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Fo(Bo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,Fo(Io.get(f)||null,e,n,a,o,u)),!0}return!1}function N_(e){var n=ki(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,yi(e.priority,function(){if(a.tag===13){var o=ii();o=se(o);var u=kr(a,o);u!==null&&ai(u,a,o),mh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_h(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=ga(a),n!==null&&D_(n),e.blockedOn=a,!1;n.shift()}return!0}function O_(e,n,a){gc(e)&&a.delete(n)}function Gy(){xh=!1,Pa!==null&&gc(Pa)&&(Pa=null),za!==null&&gc(za)&&(za=null),Ba!==null&&gc(Ba)&&(Ba=null),Bo.forEach(O_),Io.forEach(O_)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gy)))}var vc=null;function P_(e){vc!==e&&(vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(vh(o||a)===null)continue;break}var f=ga(a);f!==null&&(e.splice(n,3),n-=3,vf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ho(e){function n(G){return _c(G,e)}Pa!==null&&_c(Pa,e),za!==null&&_c(za,e),Ba!==null&&_c(Ba,e),Bo.forEach(n),Io.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[tn]||null;if(typeof f=="function")M||P_(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[tn]||null)A=M.formAction;else if(vh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),P_(a)}}}function yh(e){this._internalRoot=e}xc.prototype.render=yh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();w_(a,o,e,n,null,null)},xc.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;w_(e.current,2,null,e,null,null),tc(),n[Li]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&N_(e)}};var z_=t.version;if(z_!=="19.1.1")throw Error(r(527,z_,"19.1.1"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Vy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{ht=yc.inject(Vy),xt=yc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Jm,f=$m,M=tg,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=A_(e,1,!1,null,null,a,o,u,f,M,A,null),e[Li]=n.current,nh(e),new yh(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Jm,M=$m,A=tg,G=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=A_(e,1,!0,n,a??null,o,u,f,M,A,G,J),n.context=R_(null),a=n.current,o=ii(),o=se(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,It(n,a),Ii(n),e[Li]=n.current,nh(e),new xc(n)},Vo.version="19.1.1",Vo}var W_;function Jy(){if(W_)return Eh.exports;W_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Eh.exports=Qy(),Eh.exports}var $y=Jy();const tS=sv($y);var od=function(){return(od=Object.assign||function(s){for(var t,i=1,r=arguments.length;i<r;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(s[l]=t[l]);return s}).apply(this,arguments)},ko,Xo,ld=ue.createContext(void 0),Y_="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",j_="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",eS=function(v){var t=v.config,i=v.version,i=i===void 0?3:i,r=v.src,r=r===void 0?i===2?Y_:j_:r,l=v.onStartup,c=v.onLoad,m=v.asyncLoad,h=m!==void 0&&m,d=v.onError,m=v.typesettingOptions,p=v.renderMode,p=p===void 0?"post":p,g=v.hideUntilTypeset,v=v.children,S=ue.useContext(ld);if(S?.version!==void 0&&S?.version!==i)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(i===2&&Xo!==void 0||i===3&&ko!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var x=ue.useRef(S),S=ue.useRef(S?.version||null);if(S.current===null)S.current=i;else if(S.current!==i)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var b=r||(i===2?Y_:j_);function E(y,_){t&&(window.MathJax=t);var H=document.createElement("script");H.type="text/javascript",H.src=b,H.async=h,H.addEventListener("load",function(){var L=window.MathJax;l&&l(L),y(L),c&&c()}),H.addEventListener("error",function(L){return _(L)}),document.getElementsByTagName("head")[0].appendChild(H)}return x.current===void 0&&(S={typesettingOptions:m,renderMode:p,hideUntilTypeset:g},i===2?ko===void 0&&(typeof window<"u"?(ko=new Promise(E)).catch(function(y){if(!d)throw Error("Failed to download MathJax version 2 from '".concat(b,"' due to: ").concat(JSON.stringify(y)));d(y)}):(ko=Promise.reject()).catch(function(y){})):Xo===void 0&&(typeof window<"u"?(Xo=new Promise(E)).catch(function(y){if(!d)throw Error("Failed to download MathJax version 3 from '".concat(b,"' due to: ").concat(y));d(y)}):(Xo=Promise.reject()).catch(function(y){})),x.current=od(od({},S),i===2?{version:2,promise:ko}:{version:3,promise:Xo})),fu.createElement(ld.Provider,{value:x.current},v)},Ya=function(){return(Ya=Object.assign||function(s){for(var t,i=1,r=arguments.length;i<r;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(s[l]=t[l]);return s}).apply(this,arguments)},nS=function(s,t){var i={};for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&t.indexOf(l)<0&&(i[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(s);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(s,l[r])&&(i[l[r]]=s[l[r]]);return i},qo=function(s){return"Typesetting failed: ".concat(s.message!==void 0?s.message:JSON.stringify(s))},iS=function(s){function t(){var O;E==="every"&&H&&y==="post"&&S.current!==null&&(S.current.style.visibility=(O=(O=v.style)==null?void 0:O.visibility)!=null?O:"visible"),L.current||(E==="first"&&S.current!==null&&(S.current.style.visibility="visible"),l&&l(),L.current=!0),c&&c(),D.current=!1}var r=s.inline,i=r!==void 0&&r,r=s.hideUntilTypeset,l=s.onInitTypeset,c=s.onTypeset,h=s.text,d=s.dynamic,m=s.typesettingOptions,p=s.renderMode,g=s.children,v=nS(s,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),x=ue.useRef(""),S=ue.useRef(null),b=ue.useContext(ld),E=r??b?.hideUntilTypeset,y=p??b?.renderMode,_=m??b?.typesettingOptions,H=d!==!1&&(d||!1),L=ue.useRef(!1),D=ue.useRef(!1);return!D.current&&S.current!==null&&H&&E==="every"&&y==="post"&&(S.current.style.visibility="hidden"),(typeof window<"u"?ue.useLayoutEffect:ue.useEffect)(function(){if((H||!L.current)&&S.current!==null){if(!b)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(y==="pre"){if(!(typeof(O=h)=="string"&&0<O.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(h,'"'));if(!m||!m.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(b.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}y!=="post"&&h===x.current||D.current||(D.current=!0,b.version===3?b.promise.then(function(F){var I;y==="pre"?(I=function(V){x.current=h,F.startup.document.clear(),F.startup.document.updateDocument(),S.current!==null&&(S.current.innerHTML=V.outerHTML),t()},m.fn.endsWith("Promise")?F.startup.promise.then(function(){return F[_.fn](h,Ya(Ya({},_?.options||{}),{display:!i}))}).then(I).catch(function(V){throw t(),Error(qo(V))}):F.startup.promise.then(function(){var V=F[_.fn](h,Ya(Ya({},_?.options||{}),{display:!i}));I(V)}).catch(function(V){throw t(),Error(qo(V))})):F.startup.promise.then(function(){return F.typesetClear([S.current]),F.typesetPromise([S.current])}).then(t).catch(function(V){throw t(),Error(qo(V))})}).catch(function(F){throw t(),Error(qo(F))}):b.promise.then(function(F){F.Hub.Queue(["Typeset",F.Hub,S.current]),F.Hub.Queue(t)}).catch(function(F){throw t(),Error(qo(F))}))}var O}),fu.createElement("span",Ya({},v,{style:Ya(Ya({display:i?"inline":"block"},v.style),{visibility:E?"hidden":(s=v.style)==null?void 0:s.visibility}),ref:S}),g)};const oi=fu.memo(function({children:t,dynamic:i=!1}){return it.jsx(iS,{dynamic:i,children:t})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="179",Os={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aS=0,Z_=1,rS=2,ov=1,sS=2,ca=3,$a=0,Qn=1,ua=2,Ka=0,Ps=1,K_=2,Q_=3,J_=4,oS=5,Tr=100,lS=101,cS=102,uS=103,fS=104,hS=200,dS=201,pS=202,mS=203,cd=204,ud=205,gS=206,_S=207,vS=208,xS=209,yS=210,SS=211,MS=212,ES=213,bS=214,fd=0,hd=1,dd=2,Fs=3,pd=4,md=5,gd=6,_d=7,lv=0,TS=1,AS=2,Qa=0,RS=1,wS=2,CS=3,DS=4,US=5,LS=6,NS=7,cv=300,Hs=301,Gs=302,vd=303,xd=304,hu=306,yd=1e3,Rr=1001,Sd=1002,Di=1003,OS=1004,Sc=1005,wi=1006,Rh=1007,wr=1008,da=1009,uv=1010,fv=1011,al=1012,tp=1013,Dr=1014,fa=1015,cl=1016,ep=1017,np=1018,rl=1020,hv=35902,dv=1021,pv=1022,Ci=1023,sl=1026,ol=1027,mv=1028,ip=1029,gv=1030,ap=1031,rp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,wd=37496,Cd=37808,Dd=37809,Ud=37810,Ld=37811,Nd=37812,Od=37813,Pd=37814,zd=37815,Bd=37816,Id=37817,Fd=37818,Hd=37819,Gd=37820,Vd=37821,tu=36492,kd=36494,Xd=36495,_v=36283,qd=36284,Wd=36285,Yd=36286,PS=3200,zS=3201,BS=0,IS=1,Za="",_i="srgb",Vs="srgb-linear",ru="linear",Ge="srgb",ps=7680,$_=519,FS=512,HS=513,GS=514,vv=515,VS=516,kS=517,XS=518,qS=519,jd=35044,t0="300 es",Vi=2e3,su=2001;class Lr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,Zd=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function WS(s,t){return(s%t+t)%t}function wh(s,t,i){return(1-i)*s+i*t}function Gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const YS={DEG2RAD:eu};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pa{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],S=c[h+1],b=c[h+2],E=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=b,t[i+3]=E;return}if(v!==E||m!==x||p!==S||g!==b){let y=1-d;const _=m*x+p*S+g*b+v*E,H=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const O=Math.sqrt(L),F=Math.atan2(O,_*H);y=Math.sin(y*F)/O,d=Math.sin(d*F)/O}const D=d*H;if(m=m*y+x*D,p=p*y+S*D,g=g*y+b*D,v=v*y+E*D,y===1-d){const O=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=O,p*=O,g*=O,v*=O}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],x=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+g*v+m*S-p*x,t[i+1]=m*b+g*x+p*v-d*S,t[i+2]=p*b+g*S+d*x-m*v,t[i+3]=g*b-d*v-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),x=m(r/2),S=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*S*b,this._y=p*S*v-x*g*b,this._z=p*g*b+x*S*v,this._w=p*g*v-x*S*b;break;case"YXZ":this._x=x*g*v+p*S*b,this._y=p*S*v-x*g*b,this._z=p*g*b-x*S*v,this._w=p*g*v+x*S*b;break;case"ZXY":this._x=x*g*v-p*S*b,this._y=p*S*v+x*g*b,this._z=p*g*b+x*S*v,this._w=p*g*v-x*S*b;break;case"ZYX":this._x=x*g*v-p*S*b,this._y=p*S*v+x*g*b,this._z=p*g*b-x*S*v,this._w=p*g*v+x*S*b;break;case"YZX":this._x=x*g*v+p*S*b,this._y=p*S*v+x*g*b,this._z=p*g*b-x*S*v,this._w=p*g*v-x*S*b;break;case"XZY":this._x=x*g*v-p*S*b,this._y=p*S*v-x*g*b,this._z=p*g*b+x*S*v,this._w=p*g*v+x*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(e0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(e0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new Z,e0=new pa;class fe{constructor(t,i,r,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],b=r[8],E=l[0],y=l[3],_=l[6],H=l[1],L=l[4],D=l[7],O=l[2],F=l[5],I=l[8];return c[0]=h*E+d*H+m*O,c[3]=h*y+d*L+m*F,c[6]=h*_+d*D+m*I,c[1]=p*E+g*H+v*O,c[4]=p*y+g*L+v*F,c[7]=p*_+g*D+v*I,c[2]=x*E+S*H+b*O,c[5]=x*y+S*L+b*F,c[8]=x*_+S*D+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*c,S=p*c-h*m,b=i*v+r*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(l*p-g*r)*E,t[2]=(d*r-l*h)*E,t[3]=x*E,t[4]=(g*i-l*m)*E,t[5]=(l*c-d*i)*E,t[6]=S*E,t[7]=(r*m-p*i)*E,t[8]=(h*i-r*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Dh.makeScale(t,i)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new fe;function xv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jS(){const s=ou("canvas");return s.style.display="block",s}const n0={};function zs(s){s in n0||(n0[s]=!0,console.warn(s))}function ZS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const i0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vs]:{primaries:t,whitePoint:r,transfer:ru,toXYZ:i0,fromXYZ:a0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:i0,fromXYZ:a0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const we=KS();function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class QS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ms===void 0&&(ms=ou("canvas")),ms.width=t.width,ms.height=t.height;const l=ms.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ms}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ou("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ha(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JS=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ja(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Uh(l[h].image)):c.push(Uh(l[h]))}else c=Uh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?QS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;const Lh=new Z;class kn extends Lr{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Rr,l=Rr,c=wi,h=wr,d=Ci,m=da,p=kn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ja(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=cv;kn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,r=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],b=m[9],E=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-E)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+E)<.1&&Math.abs(b+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(S+1)/2,O=(_+1)/2,F=(g+x)/4,I=(v+E)/4,V=(b+y)/4;return L>D&&L>O?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=F/r,c=I/r):D>O?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=V/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=I/c,l=V/c),this.set(r,l,c,i),this}let H=Math.sqrt((y-b)*(y-b)+(v-E)*(v-E)+(x-g)*(x-g));return Math.abs(H)<.001&&(H=1),this.x=(y-b)/H,this.y=(v-E)/H,this.z=(x-g)/H,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Lr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends tM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class yv extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ec.subVectors(this.max,Wo),gs.subVectors(t.a,Wo),_s.subVectors(t.b,Wo),vs.subVectors(t.c,Wo),Ha.subVectors(_s,gs),Ga.subVectors(vs,_s),vr.subVectors(gs,vs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Nh(i,gs,_s,vs,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,gs,_s,vs,Ec))?!1:(bc.crossVectors(Ha,Ga),i=[bc.x,bc.y,bc.z],Nh(i,gs,_s,vs,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ti=new Z,Mc=new ul,gs=new Z,_s=new Z,vs=new Z,Ha=new Z,Ga=new Z,vr=new Z,Wo=new Z,Ec=new Z,bc=new Z,xr=new Z;function Nh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){xr.fromArray(s,c);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const nM=new ul,Yo=new Z,Oh=new Z;class du{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):nM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Oh)),this.expandByPoint(Yo.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new Z,Ph=new Z,Tc=new Z,Va=new Z,zh=new Z,Ac=new Z,Bh=new Z;class pu{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ph.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Ph);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=Va.dot(this.direction),m=-Va.dot(Tc),p=Va.lengthSq(),g=Math.abs(1-h*h);let v,x,S,b;if(g>0)if(v=h*m-d,x=h*d-m,b=c*g,v>=0)if(x>=-b)if(x<=b){const E=1/g;v*=E,x*=E,S=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),S=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),S=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ph).addScaledVector(Tc,x),S}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),l=ra.dot(ra)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,r,l,c){zh.subVectors(i,t),Ac.subVectors(r,t),Bh.crossVectors(zh,Ac);let h=this.direction.dot(Bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(Va,Ac));if(m<0)return null;const p=d*this.direction.dot(zh.cross(Va));if(p<0||m+p>h)return null;const g=-d*Va.dot(Bh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,c,h,d,m,p,g,v,x,S,b,E,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,v,x,S,b,E,y)}set(t,i,r,l,c,h,d,m,p,g,v,x,S,b,E,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=b,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/xs.setFromMatrixColumn(t,0).length(),c=1/xs.setFromMatrixColumn(t,1).length(),h=1/xs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=h*g,S=h*v,b=d*g,E=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+b*p,i[5]=x-E*p,i[9]=-d*m,i[2]=E-x*p,i[6]=b+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,S=m*v,b=p*g,E=p*v;i[0]=x+E*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=S*d-b,i[6]=E+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,S=m*v,b=p*g,E=p*v;i[0]=x-E*d,i[4]=-h*v,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*g,i[9]=E-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,S=h*v,b=d*g,E=d*v;i[0]=m*g,i[4]=b*p-S,i[8]=x*p+E,i[1]=m*v,i[5]=E*p+x,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,b=d*m,E=d*p;i[0]=m*g,i[4]=E-x*v,i[8]=b*v+S,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*v+b,i[10]=x-E*v}else if(t.order==="XZY"){const x=h*m,S=h*p,b=d*m,E=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+E,i[5]=h*g,i[9]=S*v-b,i[2]=b*v-S,i[6]=d*g,i[10]=E*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iM,t,aM)}lookAt(t,i,r){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ka.crossVectors(r,ri),ka.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ka.crossVectors(r,ri)),ka.normalize(),Rc.crossVectors(ri,ka),l[0]=ka.x,l[4]=Rc.x,l[8]=ri.x,l[1]=ka.y,l[5]=Rc.y,l[9]=ri.y,l[2]=ka.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],b=r[2],E=r[6],y=r[10],_=r[14],H=r[3],L=r[7],D=r[11],O=r[15],F=l[0],I=l[4],V=l[8],C=l[12],R=l[1],B=l[5],et=l[9],st=l[13],ct=l[2],ut=l[6],P=l[10],Y=l[14],W=l[3],yt=l[7],U=l[11],$=l[15];return c[0]=h*F+d*R+m*ct+p*W,c[4]=h*I+d*B+m*ut+p*yt,c[8]=h*V+d*et+m*P+p*U,c[12]=h*C+d*st+m*Y+p*$,c[1]=g*F+v*R+x*ct+S*W,c[5]=g*I+v*B+x*ut+S*yt,c[9]=g*V+v*et+x*P+S*U,c[13]=g*C+v*st+x*Y+S*$,c[2]=b*F+E*R+y*ct+_*W,c[6]=b*I+E*B+y*ut+_*yt,c[10]=b*V+E*et+y*P+_*U,c[14]=b*C+E*st+y*Y+_*$,c[3]=H*F+L*R+D*ct+O*W,c[7]=H*I+L*B+D*ut+O*yt,c[11]=H*V+L*et+D*P+O*U,c[15]=H*C+L*st+D*Y+O*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],S=t[14],b=t[3],E=t[7],y=t[11],_=t[15];return b*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*S-r*m*S)+E*(+i*m*S-i*p*x+c*h*x-l*h*S+l*p*g-c*m*g)+y*(+i*p*v-i*d*S-c*h*v+r*h*S+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],S=t[11],b=t[12],E=t[13],y=t[14],_=t[15],H=v*y*p-E*x*p+E*m*S-d*y*S-v*m*_+d*x*_,L=b*x*p-g*y*p-b*m*S+h*y*S+g*m*_-h*x*_,D=g*E*p-b*v*p+b*d*S-h*E*S-g*d*_+h*v*_,O=b*v*m-g*E*m-b*d*x+h*E*x+g*d*y-h*v*y,F=i*H+r*L+l*D+c*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=H*I,t[1]=(E*x*c-v*y*c-E*l*S+r*y*S+v*l*_-r*x*_)*I,t[2]=(d*y*c-E*m*c+E*l*p-r*y*p-d*l*_+r*m*_)*I,t[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*S-r*m*S)*I,t[4]=L*I,t[5]=(g*y*c-b*x*c+b*l*S-i*y*S-g*l*_+i*x*_)*I,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*_-i*m*_)*I,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*S+i*m*S)*I,t[8]=D*I,t[9]=(b*v*c-g*E*c-b*r*S+i*E*S+g*r*_-i*v*_)*I,t[10]=(h*E*c-b*d*c+b*r*p-i*E*p-h*r*_+i*d*_)*I,t[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*S-i*d*S)*I,t[12]=O*I,t[13]=(g*E*l-b*v*l+b*r*x-i*E*x-g*r*y+i*v*y)*I,t[14]=(b*d*l-h*E*l-b*r*m+i*E*m+h*r*y-i*d*y)*I,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,S=c*g,b=c*v,E=h*g,y=h*v,_=d*v,H=m*p,L=m*g,D=m*v,O=r.x,F=r.y,I=r.z;return l[0]=(1-(E+_))*O,l[1]=(S+D)*O,l[2]=(b-L)*O,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(x+_))*F,l[6]=(y+H)*F,l[7]=0,l[8]=(b+L)*I,l[9]=(y-H)*I,l[10]=(1-(x+E))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=xs.set(l[0],l[1],l[2]).length();const h=xs.set(l[4],l[5],l[6]).length(),d=xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const p=1/c,g=1/h,v=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,i.setFromRotationMatrix(Ai),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),S=(r+l)/(r-l);let b,E;if(m)b=c/(h-c),E=h*c/(h-c);else if(d===Vi)b=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===su)b=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Vi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),S=-(r+l)/(r-l);let b,E;if(m)b=1/(h-c),E=h/(h-c);else if(d===Vi)b=-2/(h-c),E=-(h+c)/(h-c);else if(d===su)b=-1/(h-c),E=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const xs=new Z,Ai=new rn,iM=new Z(0,0,0),aM=new Z(1,1,1),ka=new Z,Rc=new Z,ri=new Z,r0=new rn,s0=new pa;class ma{constructor(t=0,i=0,r=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return r0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(r0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return s0.setFromEuler(this),this.setFromQuaternion(s0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rM=0;const o0=new Z,ys=new pa,sa=new rn,wc=new Z,jo=new Z,sM=new Z,oM=new pa,l0=new Z(1,0,0),c0=new Z(0,1,0),u0=new Z(0,0,1),f0={type:"added"},lM={type:"removed"},Ss={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Xn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new Z,i=new ma,r=new pa,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new fe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(l0,t)}rotateY(t){return this.rotateOnAxis(c0,t)}rotateZ(t){return this.rotateOnAxis(u0,t)}translateOnAxis(t,i){return o0.copy(t).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(l0,t)}translateY(t){return this.translateOnAxis(c0,t)}translateZ(t){return this.translateOnAxis(u0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wc.copy(t):wc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(jo,wc,this.up):sa.lookAt(wc,jo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(sa),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f0),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f0),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,sM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,oM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new Z(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new Z,oa=new Z,Fh=new Z,la=new Z,Ms=new Z,Es=new Z,h0=new Z,Hh=new Z,Gh=new Z,Vh=new Z,kh=new ln,Xh=new ln,qh=new ln;class xi{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ri.subVectors(l,i),oa.subVectors(r,i),Fh.subVectors(t,i);const h=Ri.dot(Ri),d=Ri.dot(oa),m=Ri.dot(Fh),p=oa.dot(oa),g=oa.dot(Fh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*m-d*g)*x,b=(h*g-d*m)*x;return c.set(1-S-b,b,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(h,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return kh.setScalar(0),Xh.setScalar(0),qh.setScalar(0),kh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,r),qh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(kh,c.x),h.addScaledVector(Xh,c.y),h.addScaledVector(qh,c.z),h}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),oa.subVectors(t,i),Ri.cross(oa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ri.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Ms.subVectors(l,r),Es.subVectors(c,r),Hh.subVectors(t,r);const m=Ms.dot(Hh),p=Es.dot(Hh);if(m<=0&&p<=0)return i.copy(r);Gh.subVectors(t,l);const g=Ms.dot(Gh),v=Es.dot(Gh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Ms,h);Vh.subVectors(t,c);const S=Ms.dot(Vh),b=Es.dot(Vh);if(b>=0&&S<=b)return i.copy(c);const E=S*p-m*b;if(E<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Es,d);const y=g*b-S*v;if(y<=0&&v-g>=0&&S-b>=0)return h0.subVectors(c,l),d=(v-g)/(v-g+(S-b)),i.copy(l).addScaledVector(h0,d);const _=1/(y+E+x);return h=E*_,d=x*_,i.copy(r).addScaledVector(Ms,h).addScaledVector(Es,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Wh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Le{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=WS(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Wh(h,c,t+1/3),this.g=Wh(h,c,t),this.b=Wh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const r=Sv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return we.workingToColorSpace(Pn.copy(this),t),Math.round(Ee(Pn.r*255,0,255))*65536+Math.round(Ee(Pn.g*255,0,255))*256+Math.round(Ee(Pn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=_i){we.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Cc);const r=wh(Xa.h,Cc.h,i),l=wh(Xa.s,Cc.s,i),c=wh(Xa.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Le;Le.NAMES=Sv;let cM=0;class qs extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ps,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==cd&&(r.blendSrc=this.blendSrc),this.blendDst!==ud&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Is extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Z,Dc=new re;let uM=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=jd,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Gi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jd&&(t.usage=this.usage),t}}class Mv extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Ev extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Cn extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let fM=0;const gi=new rn,Yh=new Xn,bs=new Z,si=new ul,Zo=new ul,bn=new Z;class Bn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xv(t)?Ev:Mv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(si.min,Zo.min),si.expandByPoint(bn),bn.addVectors(si.max,Zo.max),si.expandByPoint(bn)):(si.expandByPoint(Zo.min),si.expandByPoint(Zo.max))}si.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)bn.fromBufferAttribute(d,p),m&&(bs.fromBufferAttribute(t,p),bn.add(bs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<r.count;V++)d[V]=new Z,m[V]=new Z;const p=new Z,g=new Z,v=new Z,x=new re,S=new re,b=new re,E=new Z,y=new Z;function _(V,C,R){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,C),b.fromBufferAttribute(c,R),g.sub(p),v.sub(p),S.sub(x),b.sub(x);const B=1/(S.x*b.y-b.x*S.y);isFinite(B)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(B),d[V].add(E),d[C].add(E),d[R].add(E),m[V].add(y),m[C].add(y),m[R].add(y))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let V=0,C=H.length;V<C;++V){const R=H[V],B=R.start,et=R.count;for(let st=B,ct=B+et;st<ct;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const L=new Z,D=new Z,O=new Z,F=new Z;function I(V){O.fromBufferAttribute(l,V),F.copy(O);const C=d[V];L.copy(C),L.sub(O.multiplyScalar(O.dot(C))).normalize(),D.crossVectors(F,C);const B=D.dot(m[V])<0?-1:1;h.setXYZW(V,L.x,L.y,L.z,B)}for(let V=0,C=H.length;V<C;++V){const R=H[V],B=R.start,et=R.count;for(let st=B,ct=B+et;st<ct;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,v=new Z;if(t)for(let x=0,S=t.count;x<S;x+=3){const b=t.getX(x+0),E=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let S=0,b=0;for(let E=0,y=m.length;E<y;E++){d.isInterleavedBufferAttribute?S=m[E]*d.data.stride+d.offset:S=m[E]*g;for(let _=0;_<g;_++)x[b++]=p[S++]}return new Ui(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=t(x,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d0=new rn,yr=new pu,Uc=new du,p0=new Z,Lc=new Z,Nc=new Z,Oc=new Z,jh=new Z,Pc=new Z,m0=new Z,zc=new Z;class li extends Xn{constructor(t=new Bn,i=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(jh.fromBufferAttribute(v,t),h?Pc.addScaledVector(jh,g):Pc.addScaledVector(jh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),yr.copy(t.ray).recast(t.near),!(Uc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Uc,p0)===null||yr.origin.distanceToSquared(p0)>(t.far-t.near)**2))&&(d0.copy(c).invert(),yr.copy(t.ray).applyMatrix4(d0),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,E=x.length;b<E;b++){const y=x[b],_=h[y.materialIndex],H=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=H,O=L;D<O;D+=3){const F=d.getX(D),I=d.getX(D+1),V=d.getX(D+2);l=Bc(this,_,t,r,p,g,v,F,I,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=b,_=E;y<_;y+=3){const H=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=Bc(this,h,t,r,p,g,v,H,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,E=x.length;b<E;b++){const y=x[b],_=h[y.materialIndex],H=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let D=H,O=L;D<O;D+=3){const F=D,I=D+1,V=D+2;l=Bc(this,_,t,r,p,g,v,F,I,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),E=Math.min(m.count,S.start+S.count);for(let y=b,_=E;y<_;y+=3){const H=y,L=y+1,D=y+2;l=Bc(this,h,t,r,p,g,v,H,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hM(s,t,i,r,l,c,h,d){let m;if(t.side===Qn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===$a,d),m===null)return null;zc.copy(d),zc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:s}}function Bc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Lc),s.getVertexPosition(m,Nc),s.getVertexPosition(p,Oc);const g=hM(s,t,i,r,Lc,Nc,Oc,m0);if(g){const v=new Z;xi.getBarycoord(m0,Lc,Nc,Oc,v),l&&(g.uv=xi.getInterpolatedAttribute(l,d,m,p,v,new re)),c&&(g.uv1=xi.getInterpolatedAttribute(c,d,m,p,v,new re)),h&&(g.normal=xi.getInterpolatedAttribute(h,d,m,p,v,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Z,materialIndex:0};xi.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=v}return g}class fl extends Bn{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,S=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(v,2));function b(E,y,_,H,L,D,O,F,I,V,C){const R=D/I,B=O/V,et=D/2,st=O/2,ct=F/2,ut=I+1,P=V+1;let Y=0,W=0;const yt=new Z;for(let U=0;U<P;U++){const $=U*B-st;for(let vt=0;vt<ut;vt++){const St=vt*R-et;yt[E]=St*H,yt[y]=$*L,yt[_]=ct,p.push(yt.x,yt.y,yt.z),yt[E]=0,yt[y]=0,yt[_]=F>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(vt/I),v.push(1-U/V),Y+=1}}for(let U=0;U<V;U++)for(let $=0;$<I;$++){const vt=x+$+ut*U,St=x+$+ut*(U+1),Ct=x+($+1)+ut*(U+1),nt=x+($+1)+ut*U;m.push(vt,St,nt),m.push(St,Ct,nt),W+=6}d.addGroup(S,W,C),S+=W,x+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const l in r)t[l]=r[l]}return t}function dM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function bv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const pM={clone:ks,merge:Vn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=dM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new Z,g0=new re,_0=new re;class vi extends Tv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,g0,_0),i.subVectors(_0,g0)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(eu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,As=1;class _M extends Xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Ts,As,t,i);l.layers=this.layers,this.add(l);const c=new vi(Ts,As,t,i);c.layers=this.layers,this.add(c);const h=new vi(Ts,As,t,i);h.layers=this.layers,this.add(h);const d=new vi(Ts,As,t,i);d.layers=this.layers,this.add(d);const m=new vi(Ts,As,t,i);m.layers=this.layers,this.add(m);const p=new vi(Ts,As,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Av extends kn{constructor(t=[],i=Hs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vM extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new tr({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Ka});c.uniforms.tEquirect.value=i;const h=new li(l,c),d=i.minFilter;return i.minFilter===wr&&(i.minFilter=wi),new _M(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Cr extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const E of t.hand.values()){const y=i.getJointPose(E,r),_=this._getHandJoint(p,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Cr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class yM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class SM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=Ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new Z;class lu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Gi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ui(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rv extends qs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rs;const Ko=new Z,ws=new Z,Cs=new Z,Ds=new re,Qo=new re,wv=new rn,Ic=new Z,Jo=new Z,Fc=new Z,v0=new re,Kh=new re,x0=new re;class MM extends Xn{constructor(t=new Rv){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Bn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new SM(i,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new lu(r,3,0,!1)),Rs.setAttribute("uv",new lu(r,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new re(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),wv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Cs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Hc(Ic.set(-.5,-.5,0),Cs,h,ws,l,c),Hc(Jo.set(.5,-.5,0),Cs,h,ws,l,c),Hc(Fc.set(.5,.5,0),Cs,h,ws,l,c),v0.set(0,0),Kh.set(1,0),x0.set(1,1);let d=t.ray.intersectTriangle(Ic,Jo,Fc,!1,Ko);if(d===null&&(Hc(Jo.set(-.5,.5,0),Cs,h,ws,l,c),Kh.set(0,1),d=t.ray.intersectTriangle(Ic,Fc,Jo,!1,Ko),d===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:xi.getInterpolation(Ko,Ic,Jo,Fc,v0,Kh,x0,new re),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(s,t,i,r,l,c){Ds.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Qo.x=c*Ds.x-l*Ds.y,Qo.y=l*Ds.x+c*Ds.y):Qo.copy(Ds),s.copy(t),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(wv)}const Qh=new Z,EM=new Z,bM=new fe;class ja{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Qh.subVectors(r,i).cross(EM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Qh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||bM.getNormalMatrix(t),l=this.coplanarPoint(Qh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new du,TM=new re(.5,.5),Gc=new Z;class Cv{constructor(t=new ja,i=new ja,r=new ja,l=new ja,c=new ja,h=new ja){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Vi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],S=c[7],b=c[8],E=c[9],y=c[10],_=c[11],H=c[12],L=c[13],D=c[14],O=c[15];if(l[0].setComponents(p-h,S-g,_-b,O-H).normalize(),l[1].setComponents(p+h,S+g,_+b,O+H).normalize(),l[2].setComponents(p+d,S+v,_+E,O+L).normalize(),l[3].setComponents(p-d,S-v,_-E,O-L).normalize(),r)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,S-x,_-y,O-D).normalize();else if(l[4].setComponents(p-m,S-x,_-y,O-D).normalize(),i===Vi)l[5].setComponents(p+m,S+x,_+y,O+D).normalize();else if(i===su)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);const i=TM.distanceTo(t.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new Z,uu=new Z,y0=new rn,$o=new pu,Vc=new du,Jh=new Z,S0=new Z;class ll extends Xn{constructor(t=new Bn,i=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new Cn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;y0.copy(l).invert(),$o.copy(t.ray).applyMatrix4(y0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let E=S,y=b-1;E<y;E+=p){const _=g.getX(E),H=g.getX(E+1),L=kc(this,t,$o,m,_,H,E);L&&i.push(L)}if(this.isLineLoop){const E=g.getX(b-1),y=g.getX(S),_=kc(this,t,$o,m,E,y,b-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let E=S,y=b-1;E<y;E+=p){const _=kc(this,t,$o,m,E,E+1,E);_&&i.push(_)}if(this.isLineLoop){const E=kc(this,t,$o,m,b-1,S,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function kc(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(cu.fromBufferAttribute(d,l),uu.fromBufferAttribute(d,c),i.distanceSqToSegment(cu,uu,Jh,S0)>r)return;Jh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Jh);if(!(p<t.near||p>t.far))return{distance:p,point:S0.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const M0=new Z,E0=new Z;class AM extends ll{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)M0.fromBufferAttribute(i,l),E0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+M0.distanceTo(E0);t.setAttribute("lineDistance",new Cn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RM extends ll{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class wM extends kn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dv extends kn{constructor(t,i,r=Dr,l,c,h,d=Di,m=Di,p,g=sl,v=1){if(g!==sl&&g!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mu extends Bn{constructor(t=1,i=1,r=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],S=[];let b=0;const E=[],y=r/2;let _=0;H(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Cn(v,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(S,2));function H(){const D=new Z,O=new Z;let F=0;const I=(i-t)/r;for(let V=0;V<=c;V++){const C=[],R=V/c,B=R*(i-t)+t;for(let et=0;et<=l;et++){const st=et/l,ct=st*m+d,ut=Math.sin(ct),P=Math.cos(ct);O.x=B*ut,O.y=-R*r+y,O.z=B*P,v.push(O.x,O.y,O.z),D.set(ut,I,P).normalize(),x.push(D.x,D.y,D.z),S.push(st,1-R),C.push(b++)}E.push(C)}for(let V=0;V<l;V++)for(let C=0;C<c;C++){const R=E[C][V],B=E[C+1][V],et=E[C+1][V+1],st=E[C][V+1];(t>0||C!==0)&&(g.push(R,B,st),F+=3),(i>0||C!==c-1)&&(g.push(B,et,st),F+=3)}p.addGroup(_,F,0),_+=F}function L(D){const O=b,F=new re,I=new Z;let V=0;const C=D===!0?t:i,R=D===!0?1:-1;for(let et=1;et<=l;et++)v.push(0,y*R,0),x.push(0,R,0),S.push(.5,.5),b++;const B=b;for(let et=0;et<=l;et++){const ct=et/l*m+d,ut=Math.cos(ct),P=Math.sin(ct);I.x=C*P,I.y=y*R,I.z=C*ut,v.push(I.x,I.y,I.z),x.push(0,R,0),F.x=ut*.5+.5,F.y=P*.5*R+.5,S.push(F.x,F.y),b++}for(let et=0;et<l;et++){const st=O+et,ct=B+et;D===!0?g.push(ct,ct+1,st):g.push(ct+1,ct,st),V+=3}p.addGroup(_,V,D===!0?1:2),_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gu extends mu{constructor(t=1,i=1,r=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,r,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new gu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _u extends Bn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,S=[],b=[],E=[],y=[];for(let _=0;_<g;_++){const H=_*x-h;for(let L=0;L<p;L++){const D=L*v-c;b.push(D,-H,0),E.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let H=0;H<d;H++){const L=H+p*_,D=H+p*(_+1),O=H+1+p*(_+1),F=H+1+p*_;S.push(L,D,F),S.push(D,O,F)}this.setIndex(S),this.setAttribute("position",new Cn(b,3)),this.setAttribute("normal",new Cn(E,3)),this.setAttribute("uv",new Cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.width,t.height,t.widthSegments,t.heightSegments)}}class lp extends Bn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new Z,x=new Z,S=[],b=[],E=[],y=[];for(let _=0;_<=r;_++){const H=[],L=_/r;let D=0;_===0&&h===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let O=0;O<=i;O++){const F=O/i;v.x=-t*Math.cos(l+F*c)*Math.sin(h+L*d),v.y=t*Math.cos(h+L*d),v.z=t*Math.sin(l+F*c)*Math.sin(h+L*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),E.push(x.x,x.y,x.z),y.push(F+D,1-L),H.push(p++)}g.push(H)}for(let _=0;_<r;_++)for(let H=0;H<i;H++){const L=g[_][H+1],D=g[_][H],O=g[_+1][H],F=g[_+1][H+1];(_!==0||h>0)&&S.push(L,D,F),(_!==r-1||m<Math.PI)&&S.push(D,O,F)}this.setIndex(S),this.setAttribute("position",new Cn(b,3)),this.setAttribute("normal",new Cn(E,3)),this.setAttribute("uv",new Cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class CM extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class UM extends Tv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LM extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const b0=new rn;class NM{constructor(t,i,r=0,l=1/0){this.ray=new pu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return b0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b0),this}intersectObject(t,i=!0,r=[]){return Kd(t,this,r,i),r.sort(T0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Kd(t[l],this,r,i);return r.sort(T0),r}}function T0(s,t){return s.distance-t.distance}function Kd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Kd(c[h],t,i,!0)}}class A0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OM extends Lr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function R0(s,t,i,r){const l=PM(r);switch(i){case dv:return s*t;case mv:return s*t/l.components*l.byteLength;case ip:return s*t/l.components*l.byteLength;case gv:return s*t*2/l.components*l.byteLength;case ap:return s*t*2/l.components*l.byteLength;case pv:return s*t*3/l.components*l.byteLength;case Ci:return s*t*4/l.components*l.byteLength;case rp:return s*t*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(s,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(s,8)*Math.max(t,8)/2;case Ad:case Rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case tu:case kd:case Xd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _v:case qd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wd:case Yd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PM(s){switch(s){case da:case uv:return{byteLength:1,components:1};case al:case fv:case cl:return{byteLength:2,components:1};case ep:case np:return{byteLength:2,components:4};case Dr:case tp:case fa:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function zM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<v.length;S++){const b=v[x],E=v[S];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,v[x]=E)}v.length=x+1;for(let S=0,b=v.length;S<b;S++){const E=v[S];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,QM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lE=`vec3 transformedNormal = objectNormal;
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
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_E=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bE=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
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
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
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
#endif`,PE=`struct PhysicalMaterial {
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
}`,zE=`
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
#endif`,BE=`#if defined( RE_IndirectDiffuse )
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
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WE=`#if defined( USE_POINTS_UV )
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
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
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
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sb=`float getShadowMask() {
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
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Db=`#ifdef USE_TRANSMISSION
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
#endif`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Xb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#define LAMBERT
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
}`,$b=`#define LAMBERT
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
}`,tT=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,nT=`#define NORMAL
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
}`,iT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,sT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,lT=`#define TOON
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
}`,cT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 color;
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
}`,pT=`uniform float rotation;
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
}`,mT=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:BM,alphahash_pars_fragment:IM,alphamap_fragment:FM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:kM,aomap_pars_fragment:XM,batching_pars_vertex:qM,batching_vertex:WM,begin_vertex:YM,beginnormal_vertex:jM,bsdfs:ZM,iridescence_fragment:KM,bumpmap_pars_fragment:QM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:aE,color_vertex:rE,common:sE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:dE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:_E,envmap_pars_vertex:vE,envmap_physical_pars_fragment:CE,envmap_vertex:xE,fog_vertex:yE,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:bE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:RE,lights_pars_begin:wE,lights_toon_fragment:DE,lights_toon_pars_fragment:UE,lights_phong_fragment:LE,lights_phong_pars_fragment:NE,lights_physical_fragment:OE,lights_physical_pars_fragment:PE,lights_fragment_begin:zE,lights_fragment_maps:BE,lights_fragment_end:IE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:VE,map_fragment:kE,map_pars_fragment:XE,map_particle_fragment:qE,map_particle_pars_fragment:WE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:jE,morphinstance_vertex:ZE,morphcolor_vertex:KE,morphnormal_vertex:QE,morphtarget_pars_vertex:JE,morphtarget_vertex:$E,normal_fragment_begin:tb,normal_fragment_maps:eb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:ab,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:lb,iridescence_pars_fragment:cb,opaque_fragment:ub,packing:fb,premultiplied_alpha_fragment:hb,project_vertex:db,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:_b,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:xb,shadowmap_vertex:yb,shadowmask_pars_fragment:Sb,skinbase_vertex:Mb,skinning_pars_vertex:Eb,skinning_vertex:bb,skinnormal_vertex:Tb,specularmap_fragment:Ab,specularmap_pars_fragment:Rb,tonemapping_fragment:wb,tonemapping_pars_fragment:Cb,transmission_fragment:Db,transmission_pars_fragment:Ub,uv_pars_fragment:Lb,uv_pars_vertex:Nb,uv_vertex:Ob,worldpos_vertex:Pb,background_vert:zb,background_frag:Bb,backgroundCube_vert:Ib,backgroundCube_frag:Fb,cube_vert:Hb,cube_frag:Gb,depth_vert:Vb,depth_frag:kb,distanceRGBA_vert:Xb,distanceRGBA_frag:qb,equirect_vert:Wb,equirect_frag:Yb,linedashed_vert:jb,linedashed_frag:Zb,meshbasic_vert:Kb,meshbasic_frag:Qb,meshlambert_vert:Jb,meshlambert_frag:$b,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:hT,shadow_frag:dT,sprite_vert:pT,sprite_frag:mT},Pt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Hi={basic:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Vn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Vn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Vn([Pt.points,Pt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Vn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Vn([Pt.common,Pt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Vn([Pt.sprite,Pt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Vn([Pt.common,Pt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Vn([Pt.lights,Pt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Hi.physical={uniforms:Vn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Xc={r:0,b:0,g:0},Mr=new ma,gT=new rn;function _T(s,t,i,r,l,c,h){const d=new Le(0);let m=c===!0?0:1,p,g,v=null,x=0,S=null;function b(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function E(L){let D=!1;const O=b(L);O===null?_(d,m):O&&O.isColor&&(_(O,1),D=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,D){const O=b(D);O&&(O.isCubeTexture||O.mapping===hu)?(g===void 0&&(g=new li(new fl(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:ks(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Mr.copy(D.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(Mr)),g.material.toneMapped=we.getTransfer(O.colorSpace)!==Ge,(v!==O||x!==O.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new li(new _u(2,2),new tr({name:"BackgroundMaterial",uniforms:ks(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(O.colorSpace)!==Ge,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Xc,bv(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,h)}function H(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:E,addToRenderList:y,dispose:H}}function vT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,B,et,st,ct){let ut=!1;const P=v(st,et,B);c!==P&&(c=P,p(c.object)),ut=S(R,st,et,ct),ut&&b(R,st,et,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(R,B,et,st),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,B,et){const st=et.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let ut=ct[B.id];ut===void 0&&(ut={},ct[B.id]=ut);let P=ut[st];return P===void 0&&(P=x(m()),ut[st]=P),P}function x(R){const B=[],et=[],st=[];for(let ct=0;ct<i;ct++)B[ct]=0,et[ct]=0,st[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:et,attributeDivisors:st,object:R,attributes:{},index:null}}function S(R,B,et,st){const ct=c.attributes,ut=B.attributes;let P=0;const Y=et.getAttributes();for(const W in Y)if(Y[W].location>=0){const U=ct[W];let $=ut[W];if($===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function b(R,B,et,st){const ct={},ut=B.attributes;let P=0;const Y=et.getAttributes();for(const W in Y)if(Y[W].location>=0){let U=ut[W];U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ct[W]=$,P++}c.attributes=ct,c.attributesNum=P,c.index=st}function E(){const R=c.newAttributes;for(let B=0,et=R.length;B<et;B++)R[B]=0}function y(R){_(R,0)}function _(R,B){const et=c.newAttributes,st=c.enabledAttributes,ct=c.attributeDivisors;et[R]=1,st[R]===0&&(s.enableVertexAttribArray(R),st[R]=1),ct[R]!==B&&(s.vertexAttribDivisor(R,B),ct[R]=B)}function H(){const R=c.newAttributes,B=c.enabledAttributes;for(let et=0,st=B.length;et<st;et++)B[et]!==R[et]&&(s.disableVertexAttribArray(et),B[et]=0)}function L(R,B,et,st,ct,ut,P){P===!0?s.vertexAttribIPointer(R,B,et,ct,ut):s.vertexAttribPointer(R,B,et,st,ct,ut)}function D(R,B,et,st){E();const ct=st.attributes,ut=et.getAttributes(),P=B.defaultAttributeValues;for(const Y in ut){const W=ut[Y];if(W.location>=0){let yt=ct[Y];if(yt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const St=vt.buffer,Ct=vt.type,nt=vt.bytesPerElement,dt=Ct===s.INT||Ct===s.UNSIGNED_INT||yt.gpuType===tp;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Ut=Mt.stride,qt=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<W.locationSize;ee++)_(W.location+ee,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<W.locationSize;ee++)y(W.location+ee);s.bindBuffer(s.ARRAY_BUFFER,St);for(let ee=0;ee<W.locationSize;ee++)L(W.location+ee,$/W.locationSize,Ct,U,Ut*nt,(qt+$/W.locationSize*ee)*nt,dt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)_(W.location+Mt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)y(W.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Mt=0;Mt<W.locationSize;Mt++)L(W.location+Mt,$/W.locationSize,Ct,U,$*nt,$/W.locationSize*Mt*nt,dt)}}else if(P!==void 0){const U=P[Y];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(W.location,U);break;case 3:s.vertexAttrib3fv(W.location,U);break;case 4:s.vertexAttrib4fv(W.location,U);break;default:s.vertexAttrib1fv(W.location,U)}}}}H()}function O(){V();for(const R in r){const B=r[R];for(const et in B){const st=B[et];for(const ct in st)g(st[ct].object),delete st[ct];delete B[et]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const et in B){const st=B[et];for(const ct in st)g(st[ct].object),delete st[ct];delete B[et]}delete r[R.id]}function I(R){for(const B in r){const et=r[B];if(et[R.id]===void 0)continue;const st=et[R.id];for(const ct in st)g(st[ct].object),delete st[ct];delete et[R.id]}}function V(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:y,disableUnusedAttributes:H}}function xT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let b=0;b<v;b++)S+=g[b];i.update(S,r,1)}function m(p,g,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let E=0;E<v;E++)b+=g[E]*x[E];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ci&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const V=I===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==da&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fa&&!V)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),H=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:H,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:O,maxSamples:F}}function ST(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new ja,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,S){const b=v.clippingPlanes,E=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const H=c?0:r,L=H*4;let D=_.clippingState||null;m.value=D,D=g(b,x,L,S);for(let O=0;O!==L;++O)D[O]=i[O];_.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,S,b){const E=v!==null?v.length:0;let y=null;if(E!==0){if(y=m.value,b!==!0||y===null){const _=S+E*4,H=x.matrixWorldInverse;d.getNormalMatrix(H),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,D=S;L!==E;++L,D+=4)h.copy(v[L]).applyMatrix4(H,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function MT(s){let t=new WeakMap;function i(h,d){return d===vd?h.mapping=Hs:d===xd&&(h.mapping=Gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===xd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ns=4,w0=[.125,.215,.35,.446,.526,.582],Ar=20,$h=new UM,C0=new Le;let td=null,ed=0,nd=0,id=!1;const br=(1+Math.sqrt(5))/2,Us=1/br,D0=[new Z(-br,Us,0),new Z(br,Us,0),new Z(-Us,0,br),new Z(Us,0,br),new Z(0,br,-Us),new Z(0,br,Us),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],ET=new Z;class U0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=ET}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:cl,format:Ci,colorSpace:Vs,depthBuffer:!1},l=L0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(c)),this._blurMaterial=TT(c,t,i)}return l}_compileMaterial(t){const i=new li(this._lodPlanes[0],t);this._renderer.compile(i,$h)}_sceneToCubeUV(t,i,r,l,c){const m=new vi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(C0),v.toneMapping=Qa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const E=new Is({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),y=new li(new fl,E);let _=!1;const H=t.background;H?H.isColor&&(E.color.copy(H),t.background=null,_=!0):(E.color.copy(C0),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;qc(l,D*O,L>2?O:0,O,O),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,t.background=H}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Hs||t.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new li(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,$h)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=D0[(l-c-1)%D0.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new li(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ar-1),E=c/b,y=isFinite(c)?1+Math.floor(g*E):Ar;y>Ar&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let H=0;for(let I=0;I<Ar;++I){const V=I/E,C=Math.exp(-V*V/2);_.push(C),I===0?H+=C:I<y&&(H+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/H;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-r;const D=this._sizeLods[l],O=3*D*(l>L-Ns?l-L+Ns:0),F=4*(this._cubeSize-D);qc(i,O,F,3*D,2*D),m.setRenderTarget(i),m.render(v,$h)}}function bT(s){const t=[],i=[],r=[];let l=s;const c=s-Ns+1+w0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Ns?m=w0[h-s+Ns-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,b=6,E=3,y=2,_=1,H=new Float32Array(E*b*S),L=new Float32Array(y*b*S),D=new Float32Array(_*b*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,V=F>2?0:-1,C=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];H.set(C,E*b*F),L.set(x,y*b*F);const R=[F,F,F,F,F,F];D.set(R,_*b*F)}const O=new Bn;O.setAttribute("position",new Ui(H,E)),O.setAttribute("uv",new Ui(L,y)),O.setAttribute("faceIndex",new Ui(D,_)),t.push(O),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function L0(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function TT(s,t,i){const r=new Float32Array(Ar),l=new Z(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function N0(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function O0(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function AT(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===vd||m===xd,g=m===Hs||m===Gs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new U0(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new U0(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function RT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function wT(s,t,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)t.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,b=v.attributes.position;let E=0;if(S!==null){const H=S.array;E=S.version;for(let L=0,D=H.length;L<D;L+=3){const O=H[L+0],F=H[L+1],I=H[L+2];x.push(O,F,F,I,I,O)}}else if(b!==void 0){const H=b.array;E=b.version;for(let L=0,D=H.length/3-1;L<D;L+=3){const O=L+0,F=L+1,I=L+2;x.push(O,F,F,I,I,O)}}else return;const y=new(xv(x)?Ev:Mv)(x,1);y.version=E;const _=c.get(v);_&&t.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function CT(s,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){s.drawElements(r,S,c,x*h),i.update(S,r,1)}function p(x,S,b){b!==0&&(s.drawElementsInstanced(r,S,c,x*h,b),i.update(S,r,b))}function g(x,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,b);let y=0;for(let _=0;_<b;_++)y+=S[_];i.update(y,r,1)}function v(x,S,b,E){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,S[_],E[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,E,0,b);let _=0;for(let H=0;H<b;H++)_+=S[H]*E[H];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function DT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function UT(s,t,i){const r=new WeakMap,l=new ln;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],H=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),E===!0&&(D=2),y===!0&&(D=3);let O=d.attributes.position.count*D,F=1;O>t.maxTextureSize&&(F=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*F*4*v),V=new yv(I,O,F,v);V.type=fa,V.needsUpdate=!0;const C=D*4;for(let B=0;B<v;B++){const et=_[B],st=H[B],ct=L[B],ut=O*F*4*B;for(let P=0;P<et.count;P++){const Y=P*C;b===!0&&(l.fromBufferAttribute(et,P),I[ut+Y+0]=l.x,I[ut+Y+1]=l.y,I[ut+Y+2]=l.z,I[ut+Y+3]=0),E===!0&&(l.fromBufferAttribute(st,P),I[ut+Y+4]=l.x,I[ut+Y+5]=l.y,I[ut+Y+6]=l.z,I[ut+Y+7]=0),y===!0&&(l.fromBufferAttribute(ct,P),I[ut+Y+8]=l.x,I[ut+Y+9]=l.y,I[ut+Y+10]=l.z,I[ut+Y+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:V,size:new re(O,F)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const E=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function LT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Lv=new kn,P0=new Dv(1,1),Nv=new yv,Ov=new eM,Pv=new Av,z0=[],B0=[],I0=new Float32Array(16),F0=new Float32Array(9),H0=new Float32Array(4);function Ws(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=z0[l];if(c===void 0&&(c=new Float32Array(l),z0[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function xn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function vu(s,t){let i=B0[t];i===void 0&&(i=new Int32Array(t),B0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function NT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function OT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),xn(i,t)}}function PT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),xn(i,t)}}function zT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),xn(i,t)}}function BT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;H0.set(r),s.uniformMatrix2fv(this.addr,!1,H0),xn(i,r)}}function IT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;F0.set(r),s.uniformMatrix3fv(this.addr,!1,F0),xn(i,r)}}function FT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;I0.set(r),s.uniformMatrix4fv(this.addr,!1,I0),xn(i,r)}}function HT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function GT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),xn(i,t)}}function VT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),xn(i,t)}}function kT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),xn(i,t)}}function XT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function qT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),xn(i,t)}}function WT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),xn(i,t)}}function YT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),xn(i,t)}}function jT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(P0.compareFunction=vv,c=P0):c=Lv,i.setTexture2D(t||c,l)}function ZT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ov,l)}function KT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Pv,l)}function QT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Nv,l)}function JT(s){switch(s){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return BT;case 35675:return IT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return qT;case 36295:return WT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(s,t){s.uniform1fv(this.addr,t)}function t1(s,t){const i=Ws(t,this.size,2);s.uniform2fv(this.addr,i)}function e1(s,t){const i=Ws(t,this.size,3);s.uniform3fv(this.addr,i)}function n1(s,t){const i=Ws(t,this.size,4);s.uniform4fv(this.addr,i)}function i1(s,t){const i=Ws(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function a1(s,t){const i=Ws(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function r1(s,t){const i=Ws(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function s1(s,t){s.uniform1iv(this.addr,t)}function o1(s,t){s.uniform2iv(this.addr,t)}function l1(s,t){s.uniform3iv(this.addr,t)}function c1(s,t){s.uniform4iv(this.addr,t)}function u1(s,t){s.uniform1uiv(this.addr,t)}function f1(s,t){s.uniform2uiv(this.addr,t)}function h1(s,t){s.uniform3uiv(this.addr,t)}function d1(s,t){s.uniform4uiv(this.addr,t)}function p1(s,t,i){const r=this.cache,l=t.length,c=vu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Lv,c[h])}function m1(s,t,i){const r=this.cache,l=t.length,c=vu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ov,c[h])}function g1(s,t,i){const r=this.cache,l=t.length,c=vu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Pv,c[h])}function _1(s,t,i){const r=this.cache,l=t.length,c=vu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Nv,c[h])}function v1(s){switch(s){case 5126:return $T;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}class x1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class y1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=v1(i.type)}}class S1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function G0(s,t){s.seq.push(t),s.map[t.id]=t}function M1(s,t,i){const r=s.name,l=r.length;for(ad.lastIndex=0;;){const c=ad.exec(r),h=ad.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){G0(i,p===void 0?new x1(d,s,t):new y1(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new S1(d),G0(i,v)),i=v}}}class nu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);M1(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function V0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const E1=37297;let b1=0;function T1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const k0=new fe;function A1(s){we._getMatrix(k0,we.workingColorSpace,s);const t=`mat3( ${k0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case ru:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function X0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+T1(s.getShaderSource(t),d)}else return c}function R1(s,t){const i=A1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function w1(s,t){let i;switch(t){case RS:i="Linear";break;case wS:i="Reinhard";break;case CS:i="Cineon";break;case DS:i="ACESFilmic";break;case LS:i="AgX";break;case NS:i="Neutral";break;case US:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Z;function C1(){we.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function U1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function L1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function tl(s){return s!==""}function q0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(s){return s.replace(N1,P1)}const O1=new Map;function P1(s,t){let i=ge[t];if(i===void 0){const r=O1.get(t);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Qd(i)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(s){return s.replace(z1,B1)}function B1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function j0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ov?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function F1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lv:t="ENVMAP_BLENDING_MULTIPLY";break;case TS:t="ENVMAP_BLENDING_MIX";break;case AS:t="ENVMAP_BLENDING_ADD";break}return t}function V1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k1(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=I1(i),p=F1(i),g=H1(i),v=G1(i),x=V1(i),S=D1(i),b=U1(c),E=l.createProgram();let y,_,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(tl).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(tl).join(`
`),_.length>0&&(_+=`
`)):(y=[j0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),_=[j0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?ge.tonemapping_pars_fragment:"",i.toneMapping!==Qa?w1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,R1("linearToOutputTexel",i.outputColorSpace),C1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),h=Qd(h),h=q0(h,i),h=W0(h,i),d=Qd(d),d=q0(d,i),d=W0(d,i),h=Y0(h),d=Y0(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===t0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=H+y+h,D=H+_+d,O=V0(l,l.VERTEX_SHADER,L),F=V0(l,l.FRAGMENT_SHADER,D);l.attachShader(E,O),l.attachShader(E,F),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function I(B){if(s.debug.checkShaderErrors){const et=l.getProgramInfoLog(E)||"",st=l.getShaderInfoLog(O)||"",ct=l.getShaderInfoLog(F)||"",ut=et.trim(),P=st.trim(),Y=ct.trim();let W=!0,yt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,O,F);else{const U=X0(l,O,"vertex"),$=X0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ut+`
`+U+`
`+$)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(P===""||Y==="")&&(yt=!1);yt&&(B.diagnostics={runnable:W,programLog:ut,vertexShader:{log:P,prefix:y},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(O),l.deleteShader(F),V=new nu(l,E),C=L1(l,E)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(E,E1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=b1++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=F,this}let X1=0;class q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new W1(t),i.set(t,r)),r}}class W1{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}}function Y1(s,t,i,r,l,c,h){const d=new op,m=new q1,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,et,st){const ct=et.fog,ut=st.geometry,P=C.isMeshStandardMaterial?et.environment:null,Y=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),W=Y&&Y.mapping===hu?Y.image.height:null,yt=b[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let St,Ct,nt,dt;if(yt){const Te=Hi[yt];St=Te.vertexShader,Ct=Te.fragmentShader}else St=C.vertexShader,Ct=C.fragmentShader,m.update(C),nt=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const Mt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),qt=st.isInstancedMesh===!0,ee=st.isBatchedMesh===!0,Ne=!!C.map,he=!!C.matcap,z=!!Y,de=!!C.aoMap,Ft=!!C.lightMap,_e=!!C.bumpMap,Ht=!!C.normalMap,ze=!!C.displacementMap,Bt=!!C.emissiveMap,le=!!C.metalnessMap,Ke=!!C.roughnessMap,Qe=C.anisotropy>0,N=C.clearcoat>0,T=C.dispersion>0,tt=C.iridescence>0,ht=C.sheen>0,xt=C.transmission>0,ft=Qe&&!!C.anisotropyMap,zt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Wt=N&&!!C.clearcoatRoughnessMap,Zt=tt&&!!C.iridescenceMap,Et=tt&&!!C.iridescenceThicknessMap,Nt=ht&&!!C.sheenColorMap,Qt=ht&&!!C.sheenRoughnessMap,Xt=!!C.specularMap,Dt=!!C.specularColorMap,oe=!!C.specularIntensityMap,X=xt&&!!C.transmissionMap,At=xt&&!!C.thicknessMap,wt=!!C.gradientMap,It=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,kt=!!C.extensions;let se=Qa;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(se=s.toneMapping);const Ue={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:Ct,defines:C.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ee,batchingColor:ee&&st._colorsTexture!==null,instancing:qt,instancingColor:qt&&st.instanceColor!==null,instancingMorph:qt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Vs,alphaToCoverage:!!C.alphaToCoverage,map:Ne,matcap:he,envMap:z,envMapMode:z&&Y.mapping,envMapCubeUVHeight:W,aoMap:de,lightMap:Ft,bumpMap:_e,normalMap:Ht,displacementMap:x&&ze,emissiveMap:Bt,normalMapObjectSpace:Ht&&C.normalMapType===IS,normalMapTangentSpace:Ht&&C.normalMapType===BS,metalnessMap:le,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ft,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:tt,iridescenceMap:Zt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Nt,sheenRoughnessMap:Qt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:oe,transmission:xt,transmissionMap:X,thicknessMap:At,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Ps&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:Ne&&E(C.map.channel),aoMapUv:de&&E(C.aoMap.channel),lightMapUv:Ft&&E(C.lightMap.channel),bumpMapUv:_e&&E(C.bumpMap.channel),normalMapUv:Ht&&E(C.normalMap.channel),displacementMapUv:ze&&E(C.displacementMap.channel),emissiveMapUv:Bt&&E(C.emissiveMap.channel),metalnessMapUv:le&&E(C.metalnessMap.channel),roughnessMapUv:Ke&&E(C.roughnessMap.channel),anisotropyMapUv:ft&&E(C.anisotropyMap.channel),clearcoatMapUv:zt&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&E(C.sheenRoughnessMap.channel),specularMapUv:Xt&&E(C.specularMap.channel),specularColorMapUv:Dt&&E(C.specularColorMap.channel),specularIntensityMapUv:oe&&E(C.specularIntensityMap.channel),transmissionMapUv:X&&E(C.transmissionMap.channel),thicknessMapUv:At&&E(C.thicknessMap.channel),alphaMapUv:It&&E(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ht||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(Ne||It),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:Ne&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===Ge,decodeVideoTextureEmissive:Bt&&C.emissiveMap.isVideoTexture===!0&&we.getTransfer(C.emissiveMap.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ua,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:kt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&C.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(H(R,C),L(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function H(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=b[C.type];let B;if(R){const et=Hi[R];B=pM.clone(et.uniforms)}else B=C.uniforms;return B}function O(C,R){let B;for(let et=0,st=g.length;et<st;et++){const ct=g[et];if(ct.cacheKey===R){B=ct,++B.usedTimes;break}}return B===void 0&&(B=new k1(s,R,C,c),g.push(B)),B}function F(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function I(C){m.remove(C)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:O,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:V}}function j1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Z1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Z0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function K0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,S,b,E,y){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:b,renderOrder:v.renderOrder,z:E,group:y},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=E,_.group=y),t++,_}function d(v,x,S,b,E,y){const _=h(v,x,S,b,E,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,x,S,b,E,y){const _=h(v,x,S,b,E,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Z1),r.length>1&&r.sort(x||Z0),l.length>1&&l.sort(x||Z0)}function g(){for(let v=t,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function K1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new K0,s.set(r,[h])):l>=c.length?(h=new K0,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function Q1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Le};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=i,i}}}function J1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $1=0;function tA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function eA(s){const t=new Q1,i=J1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const l=new Z,c=new rn,h=new rn;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,b=0,E=0,y=0,_=0,H=0,L=0,D=0,O=0,F=0,I=0;p.sort(tA);for(let C=0,R=p.length;C<R;C++){const B=p[C],et=B.color,st=B.intensity,ct=B.distance,ut=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=et.r*st,v+=et.g*st,x+=et.b*st;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],st);I++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Y=B.shadow,W=i.get(B);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=ut,r.directionalShadowMatrix[S]=B.shadow.matrix,H++}r.directional[S]=P,S++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(et).multiplyScalar(st),P.distance=ct,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[E]=P;const Y=B.shadow;if(B.map&&(r.spotLightMap[O]=B.map,O++,Y.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[E]=Y.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[E]=W,r.spotShadowMap[E]=ut,D++}E++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(et).multiplyScalar(st),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=P,y++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const Y=B.shadow,W=i.get(B);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=B.shadow.matrix,L++}r.point[b]=P,b++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(st),P.groundColor.copy(B.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==b||V.spotLength!==E||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==H||V.numPointShadows!==L||V.numSpotShadows!==D||V.numSpotMaps!==O||V.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,V.directionalLength=S,V.pointLength=b,V.spotLength=E,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=H,V.numPointShadows=L,V.numSpotShadows=D,V.numSpotMaps=O,V.numLightProbes=I,r.version=$1++)}function m(p,g){let v=0,x=0,S=0,b=0,E=0;const y=g.matrixWorldInverse;for(let _=0,H=p.length;_<H;_++){const L=p[_];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(L.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=r.hemi[E];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:r}}function Q0(s){const t=new eA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function nA(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Q0(s),t.set(l,[d])):c>=h.length?(d=new Q0(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
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
}`;function rA(s,t,i){let r=new Cv;const l=new re,c=new re,h=new ln,d=new CM({depthPacking:zS}),m=new DM,p={},g=i.maxTextureSize,v={[$a]:Qn,[Qn]:$a,[ua]:ua},x=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:iA,fragmentShader:aA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Bn;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new li(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ov;let _=this.type;this.render=function(F,I,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),et=s.state;et.setBlending(Ka),et.buffers.depth.getReversed()?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const st=_!==ca&&this.type===ca,ct=_===ca&&this.type!==ca;for(let ut=0,P=F.length;ut<P;ut++){const Y=F[ut],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const yt=W.getFrameExtents();if(l.multiply(yt),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,W.mapSize.y=c.y)),W.map===null||st===!0||ct===!0){const $=this.type!==ca?{minFilter:Di,magFilter:Di}:{};W.map!==null&&W.map.dispose(),W.map=new Ur(l.x,l.y,$),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const vt=W.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),et.viewport(h),W.updateMatrices(Y,$),r=W.getFrustum(),D(I,V,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ca&&H(W,V),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(C,R,B)};function H(F,I){const V=t.update(E);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ur(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,V,x,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,V,S,E,null)}function L(F,I,V,C){let R=null;const B=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)R=B;else if(R=V.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const et=R.uuid,st=I.uuid;let ct=p[et];ct===void 0&&(ct={},p[et]=ct);let ut=ct[st];ut===void 0&&(ut=R.clone(),ct[st]=ut,I.addEventListener("dispose",O)),R=ut}if(R.visible=I.visible,R.wireframe=I.wireframe,C===ca?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=s.properties.get(R);et.light=V}return R}function D(F,I,V,C,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ca)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const st=t.update(F),ct=F.material;if(Array.isArray(ct)){const ut=st.groups;for(let P=0,Y=ut.length;P<Y;P++){const W=ut[P],yt=ct[W.materialIndex];if(yt&&yt.visible){const U=L(F,yt,C,R);F.onBeforeShadow(s,F,I,V,st,U,W),s.renderBufferDirect(V,null,st,U,F,W),F.onAfterShadow(s,F,I,V,st,U,W)}}}else if(ct.visible){const ut=L(F,ct,C,R);F.onBeforeShadow(s,F,I,V,st,ut,null),s.renderBufferDirect(V,null,st,ut,F,null),F.onAfterShadow(s,F,I,V,st,ut,null)}}const et=F.children;for(let st=0,ct=et.length;st<ct;st++)D(et[st],I,V,C,R)}function O(F){F.target.removeEventListener("dispose",O);for(const V in p){const C=p[V],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const sA={[fd]:hd,[dd]:gd,[pd]:_d,[Fs]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Fs};function oA(s,t){function i(){let X=!1;const At=new ln;let wt=null;const It=new ln(0,0,0,0);return{setMask:function(bt){wt!==bt&&!X&&(s.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,_t,kt,se,Ue){Ue===!0&&(bt*=se,_t*=se,kt*=se),At.set(bt,_t,kt,se),It.equals(At)===!1&&(s.clearColor(bt,_t,kt,se),It.copy(At))},reset:function(){X=!1,wt=null,It.set(-1,0,0,0)}}}function r(){let X=!1,At=!1,wt=null,It=null,bt=null;return{setReversed:function(_t){if(At!==_t){const kt=t.get("EXT_clip_control");_t?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const se=bt;bt=null,this.setClear(se)}},getReversed:function(){return At},setTest:function(_t){_t?Mt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(s.depthMask(_t),wt=_t)},setFunc:function(_t){if(At&&(_t=sA[_t]),It!==_t){switch(_t){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=_t}},setLocked:function(_t){X=_t},setClear:function(_t){bt!==_t&&(At&&(_t=1-_t),s.clearDepth(_t),bt=_t)},reset:function(){X=!1,wt=null,It=null,bt=null,At=!1}}}function l(){let X=!1,At=null,wt=null,It=null,bt=null,_t=null,kt=null,se=null,Ue=null;return{setTest:function(Te){X||(Te?Mt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Te){At!==Te&&!X&&(s.stencilMask(Te),At=Te)},setFunc:function(Te,yi,dn){(wt!==Te||It!==yi||bt!==dn)&&(s.stencilFunc(Te,yi,dn),wt=Te,It=yi,bt=dn)},setOp:function(Te,yi,dn){(_t!==Te||kt!==yi||se!==dn)&&(s.stencilOp(Te,yi,dn),_t=Te,kt=yi,se=dn)},setLocked:function(Te){X=Te},setClear:function(Te){Ue!==Te&&(s.clearStencil(Te),Ue=Te)},reset:function(){X=!1,At=null,wt=null,It=null,bt=null,_t=null,kt=null,se=null,Ue=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],b=null,E=!1,y=null,_=null,H=null,L=null,D=null,O=null,F=null,I=new Le(0,0,0),V=0,C=!1,R=null,B=null,et=null,st=null,ct=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Y>=2);let yt=null,U={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new ln().fromArray($),Ct=new ln().fromArray(vt);function nt(X,At,wt,It){const bt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(X,_t),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<wt;kt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(At+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return _t}const dt={};dt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(s.DEPTH_TEST),h.setFunc(Fs),_e(!1),Ht(Z_),Mt(s.CULL_FACE),de(Ka);function Mt(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ut(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function qt(X,At){return v[X]!==At?(s.bindFramebuffer(X,At),v[X]=At,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=At),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(X,At){let wt=S,It=!1;if(X){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const bt=X.textures;if(wt.length!==bt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,kt=bt.length;_t<kt;_t++)wt[_t]=s.COLOR_ATTACHMENT0+_t;wt.length=bt.length,It=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,It=!0);It&&s.drawBuffers(wt)}function Ne(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const he={[Tr]:s.FUNC_ADD,[lS]:s.FUNC_SUBTRACT,[cS]:s.FUNC_REVERSE_SUBTRACT};he[uS]=s.MIN,he[fS]=s.MAX;const z={[hS]:s.ZERO,[dS]:s.ONE,[pS]:s.SRC_COLOR,[cd]:s.SRC_ALPHA,[yS]:s.SRC_ALPHA_SATURATE,[vS]:s.DST_COLOR,[gS]:s.DST_ALPHA,[mS]:s.ONE_MINUS_SRC_COLOR,[ud]:s.ONE_MINUS_SRC_ALPHA,[xS]:s.ONE_MINUS_DST_COLOR,[_S]:s.ONE_MINUS_DST_ALPHA,[SS]:s.CONSTANT_COLOR,[MS]:s.ONE_MINUS_CONSTANT_COLOR,[ES]:s.CONSTANT_ALPHA,[bS]:s.ONE_MINUS_CONSTANT_ALPHA};function de(X,At,wt,It,bt,_t,kt,se,Ue,Te){if(X===Ka){E===!0&&(Ut(s.BLEND),E=!1);return}if(E===!1&&(Mt(s.BLEND),E=!0),X!==oS){if(X!==y||Te!==C){if((_!==Tr||D!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,D=Tr),Te)switch(X){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFunc(s.ONE,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}H=null,L=null,O=null,F=null,I.set(0,0,0),V=0,y=X,C=Te}return}bt=bt||At,_t=_t||wt,kt=kt||It,(At!==_||bt!==D)&&(s.blendEquationSeparate(he[At],he[bt]),_=At,D=bt),(wt!==H||It!==L||_t!==O||kt!==F)&&(s.blendFuncSeparate(z[wt],z[It],z[_t],z[kt]),H=wt,L=It,O=_t,F=kt),(se.equals(I)===!1||Ue!==V)&&(s.blendColor(se.r,se.g,se.b,Ue),I.copy(se),V=Ue),y=X,C=!1}function Ft(X,At){X.side===ua?Ut(s.CULL_FACE):Mt(s.CULL_FACE);let wt=X.side===Qn;At&&(wt=!wt),_e(wt),X.blending===Ps&&X.transparent===!1?de(Ka):de(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function Ht(X){X!==aS?(Mt(s.CULL_FACE),X!==B&&(X===Z_?s.cullFace(s.BACK):X===rS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),B=X}function ze(X){X!==et&&(P&&s.lineWidth(X),et=X)}function Bt(X,At,wt){X?(Mt(s.POLYGON_OFFSET_FILL),(st!==At||ct!==wt)&&(s.polygonOffset(At,wt),st=At,ct=wt)):Ut(s.POLYGON_OFFSET_FILL)}function le(X){X?Mt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=s.TEXTURE0+ut-1),yt!==X&&(s.activeTexture(X),yt=X)}function Qe(X,At,wt){wt===void 0&&(yt===null?wt=s.TEXTURE0+ut-1:wt=yt);let It=U[wt];It===void 0&&(It={type:void 0,texture:void 0},U[wt]=It),(It.type!==X||It.texture!==At)&&(yt!==wt&&(s.activeTexture(wt),yt=wt),s.bindTexture(X,At||dt[X]),It.type=X,It.texture=At)}function N(){const X=U[yt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Qt(X){Ct.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function Xt(X,At){let wt=p.get(At);wt===void 0&&(wt=new WeakMap,p.set(At,wt));let It=wt.get(X);It===void 0&&(It=s.getUniformBlockIndex(At,X.name),wt.set(X,It))}function Dt(X,At){const It=p.get(At).get(X);m.get(At)!==It&&(s.uniformBlockBinding(At,It,X.__bindingPointIndex),m.set(At,It))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,S=[],b=null,E=!1,y=null,_=null,H=null,L=null,D=null,O=null,F=null,I=new Le(0,0,0),V=0,C=!1,R=null,B=null,et=null,st=null,ct=null,St.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:Ut,bindFramebuffer:qt,drawBuffers:ee,useProgram:Ne,setBlending:de,setMaterial:Ft,setFlipSided:_e,setCullFace:Ht,setLineWidth:ze,setPolygonOffset:Bt,setScissorTest:le,activeTexture:Ke,bindTexture:Qe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Zt,texImage3D:Et,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:zt,scissor:Nt,viewport:Qt,reset:oe}}function lA(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return S?new OffscreenCanvas(N,T):ou("canvas")}function E(N,T,tt){let ht=1;const xt=Qe(N);if((xt.width>tt||xt.height>tt)&&(ht=tt/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ht*xt.width),zt=Math.floor(ht*xt.height);v===void 0&&(v=b(ft,zt));const Rt=T?b(ft,zt):v;return Rt.width=ft,Rt.height=zt,Rt.getContext("2d").drawImage(N,0,0,ft,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+zt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function H(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,T,tt,ht,xt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=T;if(T===s.RED&&(tt===s.FLOAT&&(ft=s.R32F),tt===s.HALF_FLOAT&&(ft=s.R16F),tt===s.UNSIGNED_BYTE&&(ft=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.R8UI),tt===s.UNSIGNED_SHORT&&(ft=s.R16UI),tt===s.UNSIGNED_INT&&(ft=s.R32UI),tt===s.BYTE&&(ft=s.R8I),tt===s.SHORT&&(ft=s.R16I),tt===s.INT&&(ft=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ft=s.RG32F),tt===s.HALF_FLOAT&&(ft=s.RG16F),tt===s.UNSIGNED_BYTE&&(ft=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),tt===s.UNSIGNED_INT&&(ft=s.RG32UI),tt===s.BYTE&&(ft=s.RG8I),tt===s.SHORT&&(ft=s.RG16I),tt===s.INT&&(ft=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),tt===s.UNSIGNED_INT&&(ft=s.RGB32UI),tt===s.BYTE&&(ft=s.RGB8I),tt===s.SHORT&&(ft=s.RGB16I),tt===s.INT&&(ft=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),tt===s.BYTE&&(ft=s.RGBA8I),tt===s.SHORT&&(ft=s.RGBA16I),tt===s.INT&&(ft=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),T===s.RGBA){const zt=xt?ru:we.getTransfer(ht);tt===s.FLOAT&&(ft=s.RGBA32F),tt===s.HALF_FLOAT&&(ft=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ft=zt===Ge?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,T){let tt;return N?T===null||T===Dr||T===rl?tt=s.DEPTH24_STENCIL8:T===fa?tt=s.DEPTH32F_STENCIL8:T===al&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===rl?tt=s.DEPTH_COMPONENT24:T===fa?tt=s.DEPTH_COMPONENT32F:T===al&&(tt=s.DEPTH_COMPONENT16),tt}function O(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Di&&N.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&g.delete(T)}function I(N){const T=N.target;T.removeEventListener("dispose",I),R(T)}function V(N){const T=r.get(N);if(T.__webglInit===void 0)return;const tt=N.source,ht=x.get(tt);if(ht){const xt=ht[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(N),Object.keys(ht).length===0&&x.delete(tt)}r.remove(N)}function C(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const tt=N.source,ht=x.get(tt);delete ht[T.__cacheKey],h.memory.textures--}function R(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let xt=0;xt<T.__webglFramebuffer[ht].length;xt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][xt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=N.textures;for(let ht=0,xt=tt.length;ht<xt;ht++){const ft=r.get(tt[ht]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[ht])}r.remove(N)}let B=0;function et(){B=0}function st(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function ct(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ut(N,T){const tt=r.get(N);if(N.isVideoTexture&&le(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(tt,N,T);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function P(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){dt(tt,N,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function Y(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){dt(tt,N,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function W(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Mt(tt,N,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const yt={[yd]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[Sd]:s.MIRRORED_REPEAT},U={[Di]:s.NEAREST,[OS]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Rh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},$={[FS]:s.NEVER,[qS]:s.ALWAYS,[HS]:s.LESS,[vv]:s.LEQUAL,[GS]:s.EQUAL,[XS]:s.GEQUAL,[VS]:s.GREATER,[kS]:s.NOTEQUAL};function vt(N,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Rh||T.magFilter===Sc||T.magFilter===wr||T.minFilter===wi||T.minFilter===Rh||T.minFilter===Sc||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,yt[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,yt[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,yt[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Di||T.minFilter!==Sc&&T.minFilter!==wr||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const ht=T.source;let xt=x.get(ht);xt===void 0&&(xt={},x.set(ht,xt));const ft=ct(T);if(ft!==N.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[ft].usedTimes++;const zt=xt[N.__cacheKey];zt!==void 0&&(xt[N.__cacheKey].usedTimes--,zt.usedTimes===0&&C(T)),N.__cacheKey=ft,N.__webglTexture=xt[ft].texture}return tt}function Ct(N,T,tt){return Math.floor(Math.floor(N/tt)/T)}function nt(N,T,tt,ht){const ft=N.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,ht,T.data);else{ft.sort((Et,Nt)=>Et.start-Nt.start);let zt=0;for(let Et=1;Et<ft.length;Et++){const Nt=ft[zt],Qt=ft[Et],Xt=Nt.start+Nt.count,Dt=Ct(Qt.start,T.width,4),oe=Ct(Nt.start,T.width,4);Qt.start<=Xt+1&&Dt===oe&&Ct(Qt.start+Qt.count-1,T.width,4)===Dt?Nt.count=Math.max(Nt.count,Qt.start+Qt.count-Nt.start):(++zt,ft[zt]=Qt)}ft.length=zt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Zt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Et=0,Nt=ft.length;Et<Nt;Et++){const Qt=ft[Et],Xt=Math.floor(Qt.start/4),Dt=Math.ceil(Qt.count/4),oe=Xt%T.width,X=Math.floor(Xt/T.width),At=Dt,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,oe,X,At,wt,tt,ht,T.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Zt)}}function dt(N,T,tt){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const xt=St(N,T),ft=T.source;i.bindTexture(ht,N.__webglTexture,s.TEXTURE0+tt);const zt=r.get(ft);if(ft.version!==zt.__version||xt===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=we.getPrimaries(we.workingColorSpace),Wt=T.colorSpace===Za?null:we.getPrimaries(T.colorSpace),Zt=T.colorSpace===Za||Rt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Et=E(T.image,!1,l.maxTextureSize);Et=Ke(T,Et);const Nt=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let Xt=L(T.internalFormat,Nt,Qt,T.colorSpace,T.isVideoTexture);vt(ht,T);let Dt;const oe=T.mipmaps,X=T.isVideoTexture!==!0,At=zt.__version===void 0||xt===!0,wt=ft.dataReady,It=O(T,Et);if(T.isDepthTexture)Xt=D(T.format===ol,T.type),At&&(X?i.texStorage2D(s.TEXTURE_2D,1,Xt,Et.width,Et.height):i.texImage2D(s.TEXTURE_2D,0,Xt,Et.width,Et.height,0,Nt,Qt,null));else if(T.isDataTexture)if(oe.length>0){X&&At&&i.texStorage2D(s.TEXTURE_2D,It,Xt,oe[0].width,oe[0].height);for(let bt=0,_t=oe.length;bt<_t;bt++)Dt=oe[bt],X?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Qt,Dt.data):i.texImage2D(s.TEXTURE_2D,bt,Xt,Dt.width,Dt.height,0,Nt,Qt,Dt.data);T.generateMipmaps=!1}else X?(At&&i.texStorage2D(s.TEXTURE_2D,It,Xt,Et.width,Et.height),wt&&nt(T,Et,Nt,Qt)):i.texImage2D(s.TEXTURE_2D,0,Xt,Et.width,Et.height,0,Nt,Qt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Xt,oe[0].width,oe[0].height,Et.depth);for(let bt=0,_t=oe.length;bt<_t;bt++)if(Dt=oe[bt],T.format!==Ci)if(Nt!==null)if(X){if(wt)if(T.layerUpdates.size>0){const kt=R0(Dt.width,Dt.height,T.format,T.type);for(const se of T.layerUpdates){const Ue=Dt.data.subarray(se*kt/Dt.data.BYTES_PER_ELEMENT,(se+1)*kt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,se,Dt.width,Dt.height,1,Nt,Ue)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Dt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Xt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Qt,Dt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Xt,Dt.width,Dt.height,Et.depth,0,Nt,Qt,Dt.data)}else{X&&At&&i.texStorage2D(s.TEXTURE_2D,It,Xt,oe[0].width,oe[0].height);for(let bt=0,_t=oe.length;bt<_t;bt++)Dt=oe[bt],T.format!==Ci?Nt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Dt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Qt,Dt.data):i.texImage2D(s.TEXTURE_2D,bt,Xt,Dt.width,Dt.height,0,Nt,Qt,Dt.data)}else if(T.isDataArrayTexture)if(X){if(At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Xt,Et.width,Et.height,Et.depth),wt)if(T.layerUpdates.size>0){const bt=R0(Et.width,Et.height,T.format,T.type);for(const _t of T.layerUpdates){const kt=Et.data.subarray(_t*bt/Et.data.BYTES_PER_ELEMENT,(_t+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Nt,Qt,kt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Qt,Et.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,Et.width,Et.height,Et.depth,0,Nt,Qt,Et.data);else if(T.isData3DTexture)X?(At&&i.texStorage3D(s.TEXTURE_3D,It,Xt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Qt,Et.data)):i.texImage3D(s.TEXTURE_3D,0,Xt,Et.width,Et.height,Et.depth,0,Nt,Qt,Et.data);else if(T.isFramebufferTexture){if(At)if(X)i.texStorage2D(s.TEXTURE_2D,It,Xt,Et.width,Et.height);else{let bt=Et.width,_t=Et.height;for(let kt=0;kt<It;kt++)i.texImage2D(s.TEXTURE_2D,kt,Xt,bt,_t,0,Nt,Qt,null),bt>>=1,_t>>=1}}else if(oe.length>0){if(X&&At){const bt=Qe(oe[0]);i.texStorage2D(s.TEXTURE_2D,It,Xt,bt.width,bt.height)}for(let bt=0,_t=oe.length;bt<_t;bt++)Dt=oe[bt],X?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt,Qt,Dt):i.texImage2D(s.TEXTURE_2D,bt,Xt,Nt,Qt,Dt);T.generateMipmaps=!1}else if(X){if(At){const bt=Qe(Et);i.texStorage2D(s.TEXTURE_2D,It,Xt,bt.width,bt.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Qt,Et)}else i.texImage2D(s.TEXTURE_2D,0,Xt,Nt,Qt,Et);y(T)&&_(ht),zt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Mt(N,T,tt){if(T.image.length!==6)return;const ht=St(N,T),xt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ft=r.get(xt);if(xt.version!==ft.__version||ht===!0){i.activeTexture(s.TEXTURE0+tt);const zt=we.getPrimaries(we.workingColorSpace),Rt=T.colorSpace===Za?null:we.getPrimaries(T.colorSpace),Wt=T.colorSpace===Za||zt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let _t=0;_t<6;_t++)!Zt&&!Et?Nt[_t]=E(T.image[_t],!0,l.maxCubemapSize):Nt[_t]=Et?T.image[_t].image:T.image[_t],Nt[_t]=Ke(T,Nt[_t]);const Qt=Nt[0],Xt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),oe=L(T.internalFormat,Xt,Dt,T.colorSpace),X=T.isVideoTexture!==!0,At=ft.__version===void 0||ht===!0,wt=xt.dataReady;let It=O(T,Qt);vt(s.TEXTURE_CUBE_MAP,T);let bt;if(Zt){X&&At&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){bt=Nt[_t].mipmaps;for(let kt=0;kt<bt.length;kt++){const se=bt[kt];T.format!==Ci?Xt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,se.width,se.height,Xt,se.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,se.width,se.height,Xt,Dt,se.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,oe,se.width,se.height,0,Xt,Dt,se.data)}}}else{if(bt=T.mipmaps,X&&At){bt.length>0&&It++;const _t=Qe(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt[_t].width,Nt[_t].height,Xt,Dt,Nt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Nt[_t].width,Nt[_t].height,0,Xt,Dt,Nt[_t].data);for(let kt=0;kt<bt.length;kt++){const Ue=bt[kt].image[_t].image;X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Ue.width,Ue.height,Xt,Dt,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,oe,Ue.width,Ue.height,0,Xt,Dt,Ue.data)}}else{X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Dt,Nt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Xt,Dt,Nt[_t]);for(let kt=0;kt<bt.length;kt++){const se=bt[kt];X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Xt,Dt,se.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,oe,Xt,Dt,se.image[_t])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),ft.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ut(N,T,tt,ht,xt,ft){const zt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Wt=L(tt.internalFormat,zt,Rt,tt.colorSpace),Zt=r.get(T),Et=r.get(tt);if(Et.__renderTarget=T,!Zt.__hasExternalTextures){const Nt=Math.max(1,T.width>>ft),Qt=Math.max(1,T.height>>ft);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,ft,Wt,Nt,Qt,T.depth,0,zt,Rt,null):i.texImage2D(xt,ft,Wt,Nt,Qt,0,zt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,xt,Et.__webglTexture,0,ze(T)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,xt,Et.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(N,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ht=T.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ft=D(T.stencilBuffer,xt),zt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=ze(T);Bt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ft,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,N)}else{const ht=T.textures;for(let xt=0;xt<ht.length;xt++){const ft=ht[xt],zt=c.convert(ft.format,ft.colorSpace),Rt=c.convert(ft.type),Wt=L(ft.internalFormat,zt,Rt,ft.colorSpace),Zt=ze(T);tt&&Bt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Wt,T.width,T.height):Bt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const xt=ht.__webglTexture,ft=ze(T);if(T.depthTexture.format===sl)Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(T.depthTexture.format===ol)Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const T=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ht}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?ee(T.__webglFramebuffer[0],N):ee(T.__webglFramebuffer,N)}else if(tt){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=s.createRenderbuffer(),qt(T.__webglDepthbuffer[ht],N,!1);else{const xt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ft)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),qt(T.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function he(N,T,tt){const ht=r.get(N);T!==void 0&&Ut(ht.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Ne(N)}function z(N){const T=N.texture,tt=r.get(N),ht=r.get(T);N.addEventListener("dispose",I);const xt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,zt=xt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)tt.__webglFramebuffer[Rt][Wt]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(zt)for(let Rt=0,Wt=xt.length;Rt<Wt;Rt++){const Zt=r.get(xt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&Bt(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Wt=xt[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Zt=c.convert(Wt.format,Wt.colorSpace),Et=c.convert(Wt.type),Nt=L(Wt.internalFormat,Zt,Et,Wt.colorSpace,N.isXRRenderTarget===!0),Qt=ze(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Ut(tt.__webglFramebuffer[Rt][Wt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else Ut(tt.__webglFramebuffer[Rt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Wt=xt.length;Rt<Wt;Rt++){const Zt=xt[Rt],Et=r.get(Zt);let Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Et.__webglTexture),vt(Nt,Zt),Ut(tt.__webglFramebuffer,N,Zt,s.COLOR_ATTACHMENT0+Rt,Nt,0),y(Zt)&&_(Nt)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),vt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Ut(tt.__webglFramebuffer[Wt],N,T,s.COLOR_ATTACHMENT0,Rt,Wt);else Ut(tt.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Rt,0);y(T)&&_(Rt),i.unbindTexture()}N.depthBuffer&&Ne(N)}function de(N){const T=N.textures;for(let tt=0,ht=T.length;tt<ht;tt++){const xt=T[tt];if(y(xt)){const ft=H(N),zt=r.get(xt).__webglTexture;i.bindTexture(ft,zt),_(ft),i.unbindTexture()}}}const Ft=[],_e=[];function Ht(N){if(N.samples>0){if(Bt(N)===!1){const T=N.textures,tt=N.width,ht=N.height;let xt=s.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=r.get(N),Rt=T.length>1;if(Rt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Et=r.get(T[Zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,xt,s.NEAREST),m===!0&&(Ft.length=0,_e.length=0,Ft.push(s.COLOR_ATTACHMENT0+Zt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ft.push(ft),_e.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Et=r.get(T[Zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,Et,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ze(N){return Math.min(l.maxSamples,N.samples)}function Bt(N){const T=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(N){const T=h.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ke(N,T){const tt=N.colorSpace,ht=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Vs&&tt!==Za&&(we.getTransfer(tt)===Ge?(ht!==Ci||xt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=et,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=he,this.setupRenderTarget=z,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Bt}function cA(s,t){function i(r,l=Za){let c;const h=we.getTransfer(l);if(r===da)return s.UNSIGNED_BYTE;if(r===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===np)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===uv)return s.BYTE;if(r===fv)return s.SHORT;if(r===al)return s.UNSIGNED_SHORT;if(r===tp)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===cl)return s.HALF_FLOAT;if(r===dv)return s.ALPHA;if(r===pv)return s.RGB;if(r===Ci)return s.RGBA;if(r===sl)return s.DEPTH_COMPONENT;if(r===ol)return s.DEPTH_STENCIL;if(r===mv)return s.RED;if(r===ip)return s.RED_INTEGER;if(r===gv)return s.RG;if(r===ap)return s.RG_INTEGER;if(r===rp)return s.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===$c)if(h===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Md||r===Ed||r===bd||r===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad||r===Rd||r===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ad||r===Rd)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===zd||r===Bd||r===Id||r===Fd||r===Hd||r===Gd||r===Vd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ld)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tu||r===kd||r===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===tu)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_v||r===qd||r===Wd||r===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===tu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class zv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
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

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new tr({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new _u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Lr{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,b=null;const E=new hA,y={},_=i.getContextAttributes();let H=null,L=null;const D=[],O=[],F=new re;let I=null;const V=new vi;V.viewport=new ln;const C=new vi;C.viewport=new ln;const R=[V,C],B=new LM;let et=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=D[nt];return dt===void 0&&(dt=new Zh,D[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=D[nt];return dt===void 0&&(dt=new Zh,D[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=D[nt];return dt===void 0&&(dt=new Zh,D[nt]=dt),dt.getHandSpace()};function ct(nt){const dt=O.indexOf(nt.inputSource);if(dt===-1)return;const Mt=D[dt];Mt!==void 0&&(Mt.update(nt.inputSource,nt.frame,p||h),Mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ut(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",P);for(let nt=0;nt<D.length;nt++){const dt=O[nt];dt!==null&&(O[nt]=null,D[nt].disconnect(dt))}et=null,st=null,E.reset();for(const nt in y)delete y[nt];t.setRenderTarget(H),S=null,x=null,v=null,l=null,L=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(H=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,qt=null;_.depth&&(qt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?ol:sl,Ut=_.stencil?rl:Dr);const ee={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};x=v.createProjectionLayer(ee),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new Ur(x.textureWidth,x.textureHeight,{format:Ci,type:da,depthTexture:new Dv(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ur(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:da,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function P(nt){for(let dt=0;dt<nt.removed.length;dt++){const Mt=nt.removed[dt],Ut=O.indexOf(Mt);Ut>=0&&(O[Ut]=null,D[Ut].disconnect(Mt))}for(let dt=0;dt<nt.added.length;dt++){const Mt=nt.added[dt];let Ut=O.indexOf(Mt);if(Ut===-1){for(let ee=0;ee<D.length;ee++)if(ee>=O.length){O.push(Mt),Ut=ee;break}else if(O[ee]===null){O[ee]=Mt,Ut=ee;break}if(Ut===-1)break}const qt=D[Ut];qt&&qt.connect(Mt)}}const Y=new Z,W=new Z;function yt(nt,dt,Mt){Y.setFromMatrixPosition(dt.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const Ut=Y.distanceTo(W),qt=dt.projectionMatrix.elements,ee=Mt.projectionMatrix.elements,Ne=qt[14]/(qt[10]-1),he=qt[14]/(qt[10]+1),z=(qt[9]+1)/qt[5],de=(qt[9]-1)/qt[5],Ft=(qt[8]-1)/qt[0],_e=(ee[8]+1)/ee[0],Ht=Ne*Ft,ze=Ne*_e,Bt=Ut/(-Ft+_e),le=Bt*-Ft;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(le),nt.translateZ(Bt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ke=Ne+Bt,Qe=he+Bt,N=Ht-le,T=ze+(Ut-le),tt=z*he/Qe*Ke,ht=de*he/Qe*Ke;nt.projectionMatrix.makePerspective(N,T,tt,ht,Ke,Qe),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function U(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let dt=nt.near,Mt=nt.far;E.texture!==null&&(E.depthNear>0&&(dt=E.depthNear),E.depthFar>0&&(Mt=E.depthFar)),B.near=C.near=V.near=dt,B.far=C.far=V.far=Mt,(et!==B.near||st!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),et=B.near,st=B.far),B.layers.mask=nt.layers.mask|6,V.layers.mask=B.layers.mask&3,C.layers.mask=B.layers.mask&5;const Ut=nt.parent,qt=B.cameras;U(B,Ut);for(let ee=0;ee<qt.length;ee++)U(qt[ee],Ut);qt.length===2?yt(B,V,C):B.projectionMatrix.copy(V.projectionMatrix),$(nt,B,Ut)};function $(nt,dt,Mt){Mt===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(Mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Zd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(B)},this.getCameraTexture=function(nt){return y[nt]};let vt=null;function St(nt,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let Ut=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let he=0;he<Mt.length;he++){const z=Mt[he];let de=null;if(S!==null)de=S.getViewport(z);else{const _e=v.getViewSubImage(x,z);de=_e.viewport,he===0&&(t.setRenderTargetTextures(L,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(L))}let Ft=R[he];Ft===void 0&&(Ft=new vi,Ft.layers.enable(he),Ft.viewport=new ln,R[he]=Ft),Ft.matrix.fromArray(z.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(z.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(de.x,de.y,de.width,de.height),he===0&&(B.matrix.copy(Ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Ft)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const he=v.getDepthInformation(Mt[0]);he&&he.isValid&&he.texture&&E.init(he,l.renderState)}if(qt&&qt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let he=0;he<Mt.length;he++){const z=Mt[he].camera;if(z){let de=y[z];de||(de=new zv,y[z]=de);const Ft=v.getCameraImage(z);de.sourceTexture=Ft}}}for(let Mt=0;Mt<D.length;Mt++){const Ut=O[Mt],qt=D[Mt];Ut!==null&&qt!==void 0&&qt.update(Ut,dt,p||h)}vt&&vt(nt,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Ct=new Uv;Ct.setAnimationLoop(St),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const Er=new ma,pA=new rn;function mA(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,bv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,H,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,D)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),E(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,H,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Qn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Qn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const H=t.get(_),L=H.envMap,D=H.envMapRotation;L&&(y.envMap.value=L,Er.copy(D),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(Er)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,H,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*H,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,H){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=H.texture,y.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const H=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(H.matrixWorld),y.nearDistance.value=H.shadow.camera.near,y.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gA(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,L){const D=L.program;r.uniformBlockBinding(H,D)}function p(H,L){let D=l[H.id];D===void 0&&(b(H),D=g(H),l[H.id]=D,H.addEventListener("dispose",y));const O=L.program;r.updateUBOMapping(H,O);const F=t.render.frame;c[H.id]!==F&&(x(H),c[H.id]=F)}function g(H){const L=v();H.__bindingPointIndex=L;const D=s.createBuffer(),O=H.__size,F=H.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function v(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(H){const L=l[H.id],D=H.uniforms,O=H.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,I=D.length;F<I;F++){const V=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,R=V.length;C<R;C++){const B=V[C];if(S(B,F,C,O)===!0){const et=B.__offset,st=Array.isArray(B.value)?B.value:[B.value];let ct=0;for(let ut=0;ut<st.length;ut++){const P=st[ut],Y=E(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,et+ct,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ct),ct+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,et,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(H,L,D,O){const F=H.value,I=L+"_"+D;if(O[I]===void 0)return typeof F=="number"||typeof F=="boolean"?O[I]=F:O[I]=F.clone(),!0;{const V=O[I];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return O[I]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function b(H){const L=H.uniforms;let D=0;const O=16;for(let I=0,V=L.length;I<V;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,B=C.length;R<B;R++){const et=C[R],st=Array.isArray(et.value)?et.value:[et.value];for(let ct=0,ut=st.length;ct<ut;ct++){const P=st[ct],Y=E(P),W=D%O,yt=W%Y.boundary,U=W+yt;D+=yt,U!==0&&O-U<Y.storage&&(D+=O-U),et.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=Y.storage}}}const F=D%O;return F>0&&(D+=O-F),H.__size=D,H.__cache={},this}function E(H){const L={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(L.boundary=4,L.storage=4):H.isVector2?(L.boundary=8,L.storage=8):H.isVector3||H.isColor?(L.boundary=16,L.storage=12):H.isVector4?(L.boundary=16,L.storage=16):H.isMatrix3?(L.boundary=48,L.storage=48):H.isMatrix4?(L.boundary=64,L.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),L}function y(H){const L=H.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const H in l)s.deleteBuffer(l[H]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class _A{constructor(t={}){const{canvas:i=jS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const b=new Uint32Array(4),E=new Int32Array(4);let y=null,_=null;const H=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=_i;let F=0,I=0,V=null,C=-1,R=null;const B=new ln,et=new ln;let st=null;const ct=new Le(0);let ut=0,P=i.width,Y=i.height,W=1,yt=null,U=null;const $=new ln(0,0,P,Y),vt=new ln(0,0,P,Y);let St=!1;const Ct=new Cv;let nt=!1,dt=!1;const Mt=new rn,Ut=new Z,qt=new ln,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function he(){return V===null?W:1}let z=r;function de(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$d}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",bt,!1),z===null){const q="webgl2";if(z=de(q,w),z===null)throw de(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,_e,Ht,ze,Bt,le,Ke,Qe,N,T,tt,ht,xt,ft,zt,Rt,Wt,Zt,Et,Nt,Qt,Xt,Dt,oe;function X(){Ft=new RT(z),Ft.init(),Xt=new cA(z,Ft),_e=new yT(z,Ft,t,Xt),Ht=new oA(z,Ft),_e.reversedDepthBuffer&&x&&Ht.buffers.depth.setReversed(!0),ze=new DT(z),Bt=new j1,le=new lA(z,Ft,Ht,Bt,_e,Xt,ze),Ke=new MT(D),Qe=new AT(D),N=new zM(z),Dt=new vT(z,N),T=new wT(z,N,ze,Dt),tt=new LT(z,T,N,ze),Et=new UT(z,_e,le),Rt=new ST(Bt),ht=new Y1(D,Ke,Qe,Ft,_e,Dt,Rt),xt=new mA(D,Bt),ft=new K1,zt=new nA(Ft),Zt=new _T(D,Ke,Qe,Ht,tt,S,m),Wt=new rA(D,tt,_e),oe=new gA(z,ze,_e,Ht),Nt=new xT(z,Ft,ze),Qt=new CT(z,Ft,ze),ze.programs=ht.programs,D.capabilities=_e,D.extensions=Ft,D.properties=Bt,D.renderLists=ft,D.shadowMap=Wt,D.state=Ht,D.info=ze}X();const At=new dA(D,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(P,Y,!1))},this.getSize=function(w){return w.set(P,Y)},this.setSize=function(w,q,ot=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,Y=q,i.width=Math.floor(w*W),i.height=Math.floor(q*W),ot===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(P*W,Y*W).floor()},this.setDrawingBufferSize=function(w,q,ot){P=w,Y=q,W=ot,i.width=Math.floor(w*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,ot,lt){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,ot,lt),Ht.viewport(B.copy($).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,q,ot,lt){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,q,ot,lt),Ht.scissor(et.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){Ht.setScissorTest(St=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ot=!0){let lt=0;if(w){let K=!1;if(V!==null){const Tt=V.texture.format;K=Tt===rp||Tt===ap||Tt===ip}if(K){const Tt=V.texture.type,Lt=Tt===da||Tt===Dr||Tt===al||Tt===rl||Tt===ep||Tt===np,Gt=Zt.getClearColor(),Ot=Zt.getClearAlpha(),$t=Gt.r,ne=Gt.g,Yt=Gt.b;Lt?(b[0]=$t,b[1]=ne,b[2]=Yt,b[3]=Ot,z.clearBufferuiv(z.COLOR,0,b)):(E[0]=$t,E[1]=ne,E[2]=Yt,E[3]=Ot,z.clearBufferiv(z.COLOR,0,E))}else lt|=z.COLOR_BUFFER_BIT}q&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Zt.dispose(),ft.dispose(),zt.dispose(),Bt.dispose(),Ke.dispose(),Qe.dispose(),tt.dispose(),Dt.dispose(),oe.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",dn),At.removeEventListener("sessionend",pn),tn.stop()};function wt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=ze.autoReset,q=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,K=Wt.type;X(),ze.autoReset=w,Wt.enabled=q,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=K}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _t(w){const q=w.target;q.removeEventListener("dispose",_t),kt(q)}function kt(w){se(w),Bt.remove(w)}function se(w){const q=Bt.get(w).programs;q!==void 0&&(q.forEach(function(ot){ht.releaseProgram(ot)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ot,lt,K,Tt){q===null&&(q=ee);const Lt=K.isMesh&&K.matrixWorld.determinant()<0,Gt=ga(w,q,ot,lt,K);Ht.setMaterial(lt,Lt);let Ot=ot.index,$t=1;if(lt.wireframe===!0){if(Ot=T.getWireframeAttribute(ot),Ot===void 0)return;$t=2}const ne=ot.drawRange,Yt=ot.attributes.position;let pe=ne.start*$t,Ae=(ne.start+ne.count)*$t;Tt!==null&&(pe=Math.max(pe,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),Ot!==null?(pe=Math.max(pe,0),Ae=Math.min(Ae,Ot.count)):Yt!=null&&(pe=Math.max(pe,0),Ae=Math.min(Ae,Yt.count));const je=Ae-pe;if(je<0||je===1/0)return;Dt.setup(K,lt,Gt,ot,Ot);let Be,me=Nt;if(Ot!==null&&(Be=N.get(Ot),me=Qt,me.setIndex(Be)),K.isMesh)lt.wireframe===!0?(Ht.setLineWidth(lt.wireframeLinewidth*he()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(K.isLine){let Jt=lt.linewidth;Jt===void 0&&(Jt=1),Ht.setLineWidth(Jt*he()),K.isLineSegments?me.setMode(z.LINES):K.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else K.isPoints?me.setMode(z.POINTS):K.isSprite&&me.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ye=K._multiDrawCounts,ye=K._multiDrawCount,Dn=Ot?N.get(Ot).bytesPerElement:1,Si=Bt.get(lt).currentProgram.getUniforms();for(let In=0;In<ye;In++)Si.setValue(z,"_gl_DrawID",In),me.render(Jt[In]/Dn,Ye[In])}else if(K.isInstancedMesh)me.renderInstances(pe,je,K.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ye=Math.min(ot.instanceCount,Jt);me.renderInstances(pe,je,Ye)}else me.render(pe,je)};function Ue(w,q,ot){w.transparent===!0&&w.side===ua&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Ni(w,q,ot),w.side=$a,w.needsUpdate=!0,Ni(w,q,ot),w.side=ua):Ni(w,q,ot)}this.compile=function(w,q,ot=null){ot===null&&(ot=w),_=zt.get(ot),_.init(q),L.push(_),ot.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),w!==ot&&w.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const lt=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Gt=Tt[Lt];Ue(Gt,ot,K),lt.add(Gt)}else Ue(Tt,ot,K),lt.add(Tt)}),_=L.pop(),lt},this.compileAsync=function(w,q,ot=null){const lt=this.compile(w,q,ot);return new Promise(K=>{function Tt(){if(lt.forEach(function(Lt){Bt.get(Lt).currentProgram.isReady()&&lt.delete(Lt)}),lt.size===0){K(w);return}setTimeout(Tt,10)}Ft.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Te=null;function yi(w){Te&&Te(w)}function dn(){tn.stop()}function pn(){tn.start()}const tn=new Uv;tn.setAnimationLoop(yi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){Te=w,At.setAnimationLoop(w),w===null?tn.stop():tn.start()},At.addEventListener("sessionstart",dn),At.addEventListener("sessionend",pn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,V),_=zt.get(w,L.length),_.init(q),L.push(_),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix(Mt,Vi,q.reversedDepth),dt=this.localClippingEnabled,nt=Rt.init(this.clippingPlanes,dt),y=ft.get(w,H.length),y.init(),H.push(y),At.enabled===!0&&At.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Li(Tt,q,-1/0,D.sortObjects)}Li(w,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,U),Ne=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ne&&Zt.addToRenderList(y,w),this.info.render.frame++,nt===!0&&Rt.beginShadows();const ot=_.state.shadowsArray;Wt.render(ot,w,q),nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,K=y.transmissive;if(_.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Lt=0,Gt=Tt.length;Lt<Gt;Lt++){const Ot=Tt[Lt];hl(lt,K,w,Ot)}Ne&&Zt.render(w);for(let Lt=0,Gt=Tt.length;Lt<Gt;Lt++){const Ot=Tt[Lt];Nr(y,w,Ot,Ot.viewport)}}else K.length>0&&hl(lt,K,w,q),Ne&&Zt.render(w),Nr(y,w,q);V!==null&&I===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(D,w,q),Dt.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],nt===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,H.pop(),H.length>0?y=H[H.length-1]:y=null};function Li(w,q,ot,lt){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ct.intersectsSprite(w)){lt&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const Lt=tt.update(w),Gt=w.material;Gt.visible&&y.push(w,Lt,Gt,ot,qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ct.intersectsObject(w))){const Lt=tt.update(w),Gt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),qt.copy(Lt.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Gt)){const Ot=Lt.groups;for(let $t=0,ne=Ot.length;$t<ne;$t++){const Yt=Ot[$t],pe=Gt[Yt.materialIndex];pe&&pe.visible&&y.push(w,Lt,pe,ot,qt.z,Yt)}}else Gt.visible&&y.push(w,Lt,Gt,ot,qt.z,null)}}const Tt=w.children;for(let Lt=0,Gt=Tt.length;Lt<Gt;Lt++)Li(Tt[Lt],q,ot,lt)}function Nr(w,q,ot,lt){const K=w.opaque,Tt=w.transmissive,Lt=w.transparent;_.setupLightsView(ot),nt===!0&&Rt.setGlobalState(D.clippingPlanes,ot),lt&&Ht.viewport(B.copy(lt)),K.length>0&&Or(K,q,ot),Tt.length>0&&Or(Tt,q,ot),Lt.length>0&&Or(Lt,q,ot),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function hl(w,q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Ur(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?cl:da,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[lt.id],Lt=lt.viewport||B;Tt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ct),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Ne&&Zt.render(ot);const ne=D.toneMapping;D.toneMapping=Qa;const Yt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),nt===!0&&Rt.setGlobalState(D.clippingPlanes,lt),Or(w,ot,lt),le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ae=0,je=q.length;Ae<je;Ae++){const Be=q[Ae],me=Be.object,Jt=Be.geometry,Ye=Be.material,ye=Be.group;if(Ye.side===ua&&me.layers.test(lt.layers)){const Dn=Ye.side;Ye.side=Qn,Ye.needsUpdate=!0,Ys(me,ot,lt,Jt,Ye,ye),Ye.side=Dn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Gt,Ot,$t),D.setClearColor(ct,ut),Yt!==void 0&&(lt.viewport=Yt),D.toneMapping=ne}function Or(w,q,ot){const lt=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=w.length;K<Tt;K++){const Lt=w[K],Gt=Lt.object,Ot=Lt.geometry,$t=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&lt!==null&&(ne=lt),Gt.layers.test(ot.layers)&&Ys(Gt,q,ot,Ot,ne,$t)}}function Ys(w,q,ot,lt,K,Tt){w.onBeforeRender(D,q,ot,lt,K,Tt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(D,q,ot,lt,w,Tt),K.transparent===!0&&K.side===ua&&K.forceSinglePass===!1?(K.side=Qn,K.needsUpdate=!0,D.renderBufferDirect(ot,q,lt,K,w,Tt),K.side=$a,K.needsUpdate=!0,D.renderBufferDirect(ot,q,lt,K,w,Tt),K.side=ua):D.renderBufferDirect(ot,q,lt,K,w,Tt),w.onAfterRender(D,q,ot,lt,K,Tt)}function Ni(w,q,ot){q.isScene!==!0&&(q=ee);const lt=Bt.get(w),K=_.state.lights,Tt=_.state.shadowsArray,Lt=K.state.version,Gt=ht.getParameters(w,K.state,Tt,q,ot),Ot=ht.getProgramCacheKey(Gt);let $t=lt.programs;lt.environment=w.isMeshStandardMaterial?q.environment:null,lt.fog=q.fog,lt.envMap=(w.isMeshStandardMaterial?Qe:Ke).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",_t),$t=new Map,lt.programs=$t);let ne=$t.get(Ot);if(ne!==void 0){if(lt.currentProgram===ne&&lt.lightsStateVersion===Lt)return ki(w,Gt),ne}else Gt.uniforms=ht.getUniforms(w),w.onBeforeCompile(Gt,D),ne=ht.acquireProgram(Gt,Ot),$t.set(Ot,ne),lt.uniforms=Gt.uniforms;const Yt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),ki(w,Gt),lt.needsLights=_a(w),lt.lightsStateVersion=Lt,lt.needsLights&&(Yt.ambientLightColor.value=K.state.ambient,Yt.lightProbe.value=K.state.probe,Yt.directionalLights.value=K.state.directional,Yt.directionalLightShadows.value=K.state.directionalShadow,Yt.spotLights.value=K.state.spot,Yt.spotLightShadows.value=K.state.spotShadow,Yt.rectAreaLights.value=K.state.rectArea,Yt.ltc_1.value=K.state.rectAreaLTC1,Yt.ltc_2.value=K.state.rectAreaLTC2,Yt.pointLights.value=K.state.point,Yt.pointLightShadows.value=K.state.pointShadow,Yt.hemisphereLights.value=K.state.hemi,Yt.directionalShadowMap.value=K.state.directionalShadowMap,Yt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Yt.spotShadowMap.value=K.state.spotShadowMap,Yt.spotLightMatrix.value=K.state.spotLightMatrix,Yt.spotLightMap.value=K.state.spotLightMap,Yt.pointShadowMap.value=K.state.pointShadowMap,Yt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=ne,lt.uniformsList=null,ne}function Pr(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=nu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function ki(w,q){const ot=Bt.get(w);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function ga(w,q,ot,lt,K){q.isScene!==!0&&(q=ee),le.resetTextureUnits();const Tt=q.fog,Lt=lt.isMeshStandardMaterial?q.environment:null,Gt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Vs,Ot=(lt.isMeshStandardMaterial?Qe:Ke).get(lt.envMap||Lt),$t=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Yt=!!ot.morphAttributes.position,pe=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let je=Qa;lt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=D.toneMapping);const Be=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,me=Be!==void 0?Be.length:0,Jt=Bt.get(lt),Ye=_.state.lights;if(nt===!0&&(dt===!0||w!==R)){const en=w===R&&lt.id===C;Rt.setState(lt,w,en)}let ye=!1;lt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ye.state.version||Jt.outputColorSpace!==Gt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Ot||lt.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ne||Jt.morphTargets!==Yt||Jt.morphNormals!==pe||Jt.morphColors!==Ae||Jt.toneMapping!==je||Jt.morphTargetsCount!==me)&&(ye=!0):(ye=!0,Jt.__version=lt.version);let Dn=Jt.currentProgram;ye===!0&&(Dn=Ni(lt,q,K));let Si=!1,In=!1,yn=!1;const Xe=Dn.getUniforms(),Fn=Jt.uniforms;if(Ht.useProgram(Dn.program)&&(Si=!0,In=!0,yn=!0),lt.id!==C&&(C=lt.id,In=!0),Si||R!==w){Ht.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xe.setValue(z,"projectionMatrix",w.projectionMatrix),Xe.setValue(z,"viewMatrix",w.matrixWorldInverse);const Tn=Xe.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,Ut.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&Xe.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Xe.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,In=!0,yn=!0)}if(K.isSkinnedMesh){Xe.setOptional(z,K,"bindMatrix"),Xe.setOptional(z,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Xe.setValue(z,"boneTexture",en.boneTexture,le))}K.isBatchedMesh&&(Xe.setOptional(z,K,"batchingTexture"),Xe.setValue(z,"batchingTexture",K._matricesTexture,le),Xe.setOptional(z,K,"batchingIdTexture"),Xe.setValue(z,"batchingIdTexture",K._indirectTexture,le),Xe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(z,"batchingColorTexture",K._colorsTexture,le));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Et.update(K,ot,Dn),(In||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Xe.setValue(z,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Fn.envMap.value=Ot,Fn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&q.environment!==null&&(Fn.envMapIntensity.value=q.environmentIntensity),In&&(Xe.setValue(z,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&er(Fn,yn),Tt&&lt.fog===!0&&xt.refreshFogUniforms(Fn,Tt),xt.refreshMaterialUniforms(Fn,lt,W,Y,_.state.transmissionRenderTarget[w.id]),nu.upload(z,Pr(Jt),Fn,le)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(nu.upload(z,Pr(Jt),Fn,le),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Xe.setValue(z,"center",K.center),Xe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(z,"normalMatrix",K.normalMatrix),Xe.setValue(z,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let Tn=0,zr=en.length;Tn<zr;Tn++){const qn=en[Tn];oe.update(qn,Dn),oe.bind(qn,Dn)}}return Dn}function er(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function _a(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,q,ot){const lt=Bt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Bt.get(w.texture).__webglTexture=q,Bt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ot=Bt.get(w);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const cn=z.createFramebuffer();this.setRenderTarget=function(w,q=0,ot=0){V=w,F=q,I=ot;let lt=!0,K=null,Tt=!1,Lt=!1;if(w){const Ot=Bt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1;else if(Ot.__webglFramebuffer===void 0)le.setupRenderTarget(w);else if(Ot.__hasExternalTextures)le.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Yt=w.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Bt.has(Yt)&&(w.width!==Yt.image.width||w.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ne=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?K=ne[q][ot]:K=ne[q],Tt=!0):w.samples>0&&le.useMultisampledRTT(w)===!1?K=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[ot]:K=ne,B.copy(w.viewport),et.copy(w.scissor),st=w.scissorTest}else B.copy($).multiplyScalar(W).floor(),et.copy(vt).multiplyScalar(W).floor(),st=St;if(ot!==0&&(K=cn),Ht.bindFramebuffer(z.FRAMEBUFFER,K)&&lt&&Ht.drawBuffers(w,K),Ht.viewport(B),Ht.scissor(et),Ht.setScissorTest(st),Tt){const Ot=Bt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,ot)}else if(Lt){const Ot=q;for(let $t=0;$t<w.textures.length;$t++){const ne=Bt.get(w.textures[$t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$t,ne.__webglTexture,ot,Ot)}}else if(w!==null&&ot!==0){const Ot=Bt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(w,q,ot,lt,K,Tt,Lt,Gt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Ht.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const $t=w.textures[Gt],ne=$t.format,Yt=$t.type;if(!_e.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-lt&&ot>=0&&ot<=w.height-K&&(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Gt),z.readPixels(q,ot,lt,K,Xt.convert(ne),Xt.convert(Yt),Tt))}finally{const $t=V!==null?Bt.get(V).__webglFramebuffer:null;Ht.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,q,ot,lt,K,Tt,Lt,Gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(q>=0&&q<=w.width-lt&&ot>=0&&ot<=w.height-K){Ht.bindFramebuffer(z.FRAMEBUFFER,Ot);const $t=w.textures[Gt],ne=$t.format,Yt=$t.type;if(!_e.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Gt),z.readPixels(q,ot,lt,K,Xt.convert(ne),Xt.convert(Yt),0);const Ae=V!==null?Bt.get(V).__webglFramebuffer:null;Ht.bindFramebuffer(z.FRAMEBUFFER,Ae);const je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ZS(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(pe),z.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ot=0){const lt=Math.pow(2,-ot),K=Math.floor(w.image.width*lt),Tt=Math.floor(w.image.height*lt),Lt=q!==null?q.x:0,Gt=q!==null?q.y:0;le.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Lt,Gt,K,Tt),Ht.unbindTexture()};const dl=z.createFramebuffer(),pl=z.createFramebuffer();this.copyTextureToTexture=function(w,q,ot=null,lt=null,K=0,Tt=null){Tt===null&&(K!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Lt,Gt,Ot,$t,ne,Yt,pe,Ae,je;const Be=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,Ot=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,ne=ot.min.y,Yt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-K);Lt=Math.floor(Be.width*Un),Gt=Math.floor(Be.height*Un),w.isDataArrayTexture?Ot=Be.depth:w.isData3DTexture?Ot=Math.floor(Be.depth*Un):Ot=1,$t=0,ne=0,Yt=0}lt!==null?(pe=lt.x,Ae=lt.y,je=lt.z):(pe=0,Ae=0,je=0);const me=Xt.convert(q.format),Jt=Xt.convert(q.type);let Ye;q.isData3DTexture?(le.setTexture3D(q,0),Ye=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(le.setTexture2DArray(q,0),Ye=z.TEXTURE_2D_ARRAY):(le.setTexture2D(q,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=z.getParameter(z.UNPACK_ROW_LENGTH),Dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Si=z.getParameter(z.UNPACK_SKIP_PIXELS),In=z.getParameter(z.UNPACK_SKIP_ROWS),yn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Xe=w.isDataArrayTexture||w.isData3DTexture,Fn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Un=Bt.get(w),en=Bt.get(q),Tn=Bt.get(Un.__renderTarget),zr=Bt.get(en.__renderTarget);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let qn=0;qn<Ot;qn++)Xe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(w).__webglTexture,K,Yt+qn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(q).__webglTexture,Tt,je+qn)),z.blitFramebuffer($t,ne,Lt,Gt,pe,Ae,Lt,Gt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Bt.has(w)){const Un=Bt.get(w),en=Bt.get(q);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,dl),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,pl);for(let Tn=0;Tn<Ot;Tn++)Xe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Un.__webglTexture,K,Yt+Tn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Un.__webglTexture,K),Fn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,Tt,je+Tn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,Tt),K!==0?z.blitFramebuffer($t,ne,Lt,Gt,pe,Ae,Lt,Gt,z.COLOR_BUFFER_BIT,z.NEAREST):Fn?z.copyTexSubImage3D(Ye,Tt,pe,Ae,je+Tn,$t,ne,Lt,Gt):z.copyTexSubImage2D(Ye,Tt,pe,Ae,$t,ne,Lt,Gt);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Fn?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ye,Tt,pe,Ae,je,Lt,Gt,Ot,me,Jt,Be.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Tt,pe,Ae,je,Lt,Gt,Ot,me,Be.data):z.texSubImage3D(Ye,Tt,pe,Ae,je,Lt,Gt,Ot,me,Jt,Be):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,pe,Ae,Lt,Gt,me,Jt,Be.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,pe,Ae,Be.width,Be.height,me,Be.data):z.texSubImage2D(z.TEXTURE_2D,Tt,pe,Ae,Lt,Gt,me,Jt,Be);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Si),z.pixelStorei(z.UNPACK_SKIP_ROWS,In),z.pixelStorei(z.UNPACK_SKIP_IMAGES,yn),Tt===0&&q.generateMipmaps&&z.generateMipmap(Ye),Ht.unbindTexture()},this.copyTextureToTexture3D=function(w,q,ot=null,lt=null,K=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,ot,lt,K)},this.initRenderTarget=function(w){Bt.get(w).__webglFramebuffer===void 0&&le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),Ht.unbindTexture()},this.resetState=function(){F=0,I=0,V=null,Ht.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const De=Math.PI,$e=2*De,zn=(s,t=2)=>Number.isFinite(s)?s.toFixed(t):"—",Bv=s=>s*180/De;function J0(s,t){const i=(s.re*s.re+s.im*s.im).toFixed(3),r=(t.re*t.re+t.im*t.im).toFixed(3);return`|0⟩=${i}, |1⟩=${r}`}function Yc(s,t=2){if(!s||!Number.isFinite(s.re)||!Number.isFinite(s.im))return"—";const i=Math.hypot(s.re,s.im);let r=Math.atan2(s.im,s.re);return r<0&&(r+=$e),`${zn(i,t)} ∠ ${zn(r,t)}`}function jt(s=0,t=0){return{re:s,im:t}}function jc(s,t){return{re:s.re*t.re-s.im*t.im,im:s.re*t.im+s.im*t.re}}function $0(s,t){return{re:s.re+t.re,im:s.im+t.im}}function tv(s,t){return{re:s*Math.cos(t),im:s*Math.sin(t)}}function Iv(s,t){const i=2*(s.re*t.re+s.im*t.im),r=2*(s.re*t.im-s.im*t.re),l=s.re*s.re+s.im*s.im-(t.re*t.re+t.im*t.im);return{x:i,y:r,z:l}}function vA(s,t){const{x:i,y:r,z:l}=Iv(s,t);return new Z(i,l,-r).normalize()}function iu(s,t,i,r="#818cf8",l="#374151"){const c=t-s;if(!(c>0)||!(i>0))return l;const h=i/c*100;return`repeating-linear-gradient(90deg, ${r} 0, ${r} 2px, transparent 2px, transparent ${h}%), ${l}`}function au(s,t,i=t*.12){const r=Math.round(s/t)*t;return Math.abs(s-r)<i?r:s}const Fi=1/Math.sqrt(2),xA=[[jt(1,0),jt(0,0)],[jt(0,0),jt(1,0)]],il={RV:{nameLatex:"R(\\vec{v})",matrixLatex:String.raw`$$R(\vec{v}) = \begin{pmatrix} c - i n_z s & -n_y s - i n_x s \\ n_y s - i n_x s & c + i n_z s \end{pmatrix}$$ \(c=\cos(\tfrac{\|\vec{v}\|}{2}), s=\sin(\tfrac{\|\vec{v}\|}{2}), n_k = v_k/\|\vec{v}\|\)`,getMatrix:({vx:s=0,vy:t=0,vz:i=0})=>{const r=s??0,l=t??0,c=i??0,h=Math.hypot(r,l,c);if(h<1e-9)return xA;const d=Math.cos(h/2),m=Math.sin(h/2),p=r/h,g=l/h,v=c/h;return[[jt(d,-v*m),jt(-g*m,-p*m)],[jt(g*m,-p*m),jt(d,v*m)]]},alphaEq:String.raw`\(\alpha' = (c - i n_z s)\alpha + (-n_y s - i n_x s)\beta\)`,betaEq:String.raw`\(\beta' = (n_y s - i n_x s)\alpha + (c + i n_z s)\beta\)`,alphaTerm1:String.raw`\((c - i n_z s)\alpha\)`,alphaTerm2:String.raw`\((-n_y s - i n_x s)\beta\)`,betaTerm1:String.raw`\((n_y s - i n_x s)\alpha\)`,betaTerm2:String.raw`\((c + i n_z s)\beta\)`,params:[{id:"vx",label:"v_x",min:-4,max:4},{id:"vy",label:"v_y",min:-4,max:4},{id:"vz",label:"v_z",min:-4,max:4}]},U:{nameLatex:"U(\\theta,\\phi,\\lambda)",matrixLatex:String.raw`$$U = \begin{pmatrix} \cos(\theta/2) & -e^{i\lambda}\sin(\theta/2) \\ e^{i\phi}\sin(\theta/2) & e^{i(\phi+\lambda)}\cos(\theta/2) \end{pmatrix}$$`,getMatrix:({theta:s=0,phi:t=0,lambda:i=0})=>{const r=s??0,l=t??0,c=i??0,h=Math.cos(r/2),d=Math.sin(r/2);return[[jt(h,0),jt(-d*Math.cos(c),-d*Math.sin(c))],[jt(d*Math.cos(l),d*Math.sin(l)),jt(h*Math.cos(l+c),h*Math.sin(l+c))]]},alphaEq:String.raw`\(\alpha' = \alpha\cos(\theta/2) - \beta e^{i\lambda}\sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = \alpha e^{i\phi}\sin(\theta/2) + \beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha\cos(\theta/2)\)`,alphaTerm2:String.raw`\(-\beta e^{i\lambda}\sin(\theta/2)\)`,betaTerm1:String.raw`\(\alpha e^{i\phi}\sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e},{id:"phi",label:"\\phi",min:0,max:$e},{id:"lambda",label:"\\lambda",min:0,max:$e}]},P:{nameLatex:"P(\\theta)",matrixLatex:String.raw`$$P(\theta) = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\theta} \end{pmatrix}$$`,getMatrix:({theta:s=0})=>{const t=s??0;return[[jt(1,0),jt(0,0)],[jt(0,0),jt(Math.cos(t),Math.sin(t))]]},alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta' = (0)\alpha + (e^{i\theta})\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((e^{i\theta})\beta\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e}]},R:{nameLatex:"R(\\theta,\\phi)",matrixLatex:String.raw`$$R(\theta, \phi) = \begin{pmatrix} \cos(\theta/2) & -ie^{-i\phi}\sin(\theta/2) \\ -ie^{i\phi}\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,getMatrix:({theta:s=0,phi:t=0})=>{const i=s??0,r=t??0,l=Math.cos(i/2),c=Math.sin(i/2);return[[jt(l,0),jt(-c*Math.sin(r),-c*Math.cos(r))],[jt(c*Math.sin(r),-c*Math.cos(r)),jt(l,0)]]},alphaEq:String.raw`\(\alpha' = \alpha\cos(\theta/2) -i\beta e^{-i\phi}\sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = -i\alpha e^{i\phi}\sin(\theta/2) + \beta\cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha\cos(\theta/2)\)`,alphaTerm2:String.raw`\(-i\beta e^{-i\phi}\sin(\theta/2)\)`,betaTerm1:String.raw`\(-i\alpha e^{i\phi}\sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta\cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e},{id:"phi",label:"\\phi",min:0,max:$e}]},Rx:{nameLatex:"R_x(\\theta)",matrixLatex:String.raw`$$R_x(\theta) = \begin{pmatrix} \cos(\theta/2) & -i\sin(\theta/2) \\ -i\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,getMatrix:({theta:s=0})=>{const t=Math.cos((s??0)/2),i=Math.sin((s??0)/2);return[[jt(t,0),jt(0,-i)],[jt(0,-i),jt(t,0)]]},alphaEq:String.raw`\(\alpha' = \alpha \cos(\theta/2) - i\beta \sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = -i\alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha \cos(\theta/2)\)`,alphaTerm2:String.raw`\(-i\beta \sin(\theta/2)\)`,betaTerm1:String.raw`\(-i\alpha \sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta \cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e}]},Ry:{nameLatex:"R_y(\\theta)",matrixLatex:String.raw`$$R_y(\theta) = \begin{pmatrix} \cos(\theta/2) & -\sin(\theta/2) \\ \sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,getMatrix:({theta:s=0})=>{const t=Math.cos((s??0)/2),i=Math.sin((s??0)/2);return[[jt(t,0),jt(-i,0)],[jt(i,0),jt(t,0)]]},alphaEq:String.raw`\(\alpha' = \alpha \cos(\theta/2) - \beta \sin(\theta/2)\)`,betaEq:String.raw`\(\beta' = \alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,alphaTerm1:String.raw`\(\alpha \cos(\theta/2)\)`,alphaTerm2:String.raw`\(-\beta \sin(\theta/2)\)`,betaTerm1:String.raw`\(\alpha \sin(\theta/2)\)`,betaTerm2:String.raw`\(\beta \cos(\theta/2)\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e}]},Rz:{nameLatex:"R_z(\\theta)",matrixLatex:String.raw`$$R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$$`,getMatrix:({theta:s=0})=>{const t=Math.cos((s??0)/2),i=Math.sin((s??0)/2);return[[jt(t,-i),jt(0,0)],[jt(0,0),jt(t,i)]]},alphaEq:String.raw`\(\alpha' = e^{-i\theta/2} \alpha\)`,betaEq:String.raw`\(\beta' = e^{i\theta/2} \beta\)`,alphaTerm1:String.raw`\(e^{-i\theta/2} \alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\(e^{i\theta/2} \beta\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e}]},X:{nameLatex:"X",matrixLatex:String.raw`$$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$`,getMatrix:()=>[[jt(0,0),jt(1,0)],[jt(1,0),jt(0,0)]],alphaEq:String.raw`\(\alpha' = (0)\alpha + (1)\beta\)`,betaEq:String.raw`\(\beta'  = (1)\alpha + (0)\beta\)`,alphaTerm1:String.raw`\((0)\alpha\)`,alphaTerm2:String.raw`\((1)\beta\)`,betaTerm1:String.raw`\((1)\alpha\)`,betaTerm2:String.raw`\((0)\beta\)`,params:[]},Y:{nameLatex:"Y",matrixLatex:String.raw`$$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$`,getMatrix:()=>[[jt(0,0),jt(0,-1)],[jt(0,1),jt(0,0)]],alphaEq:String.raw`\(\alpha' = (0)\alpha + (-i)\beta\)`,betaEq:String.raw`\(\beta'  = (i)\alpha + (0)\beta\)`,alphaTerm1:String.raw`\((0)\alpha\)`,alphaTerm2:String.raw`\((-i)\beta\)`,betaTerm1:String.raw`\((i)\alpha\)`,betaTerm2:String.raw`\((0)\beta\)`,params:[]},Z:{nameLatex:"Z",matrixLatex:String.raw`$$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$`,getMatrix:()=>[[jt(1,0),jt(0,0)],[jt(0,0),jt(-1,0)]],alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (-1)\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((-1)\beta\)`,params:[]},S:{nameLatex:"S",matrixLatex:String.raw`$$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$$`,getMatrix:()=>[[jt(1,0),jt(0,0)],[jt(0,0),jt(0,1)]],alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (i)\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((i)\beta\)`,params:[]},T:{nameLatex:"T",matrixLatex:String.raw`$$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$$`,getMatrix:()=>[[jt(1,0),jt(0,0)],[jt(0,0),jt(Fi,Fi)]],alphaEq:String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,betaEq:String.raw`\(\beta'  = (0)\alpha + (e^{i\pi/4})\beta\)`,alphaTerm1:String.raw`\((1)\alpha\)`,alphaTerm2:String.raw`\((0)\beta\)`,betaTerm1:String.raw`\((0)\alpha\)`,betaTerm2:String.raw`\((e^{i\pi/4})\beta\)`,params:[]},H:{nameLatex:"H",matrixLatex:String.raw`$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$`,getMatrix:()=>[[jt(Fi,0),jt(Fi,0)],[jt(Fi,0),jt(-Fi,0)]],alphaEq:String.raw`\(\alpha' = \frac{1}{\sqrt{2}}\alpha + \frac{1}{\sqrt{2}}\beta\)`,betaEq:String.raw`\(\beta'  = \frac{1}{\sqrt{2}}\alpha - \frac{1}{\sqrt{2}}\beta\)`,alphaTerm1:String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,alphaTerm2:String.raw`\(\frac{1}{\sqrt{2}}\beta\)`,betaTerm1:String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,betaTerm2:String.raw`\(-\frac{1}{\sqrt{2}}\beta\)`,params:[]},H_theta:{nameLatex:"H(\\theta)",matrixLatex:String.raw`$$H(\theta) = \begin{pmatrix} \cos(\frac{\theta}{2}) - \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \\ -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & \cos(\frac{\theta}{2}) + \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \end{pmatrix}$$`,getMatrix:({theta:s=0})=>{const t=Math.cos((s??0)/2),i=Math.sin((s??0)/2);return[[jt(t,-Fi*i),jt(0,-Fi*i)],[jt(0,-Fi*i),jt(t,Fi*i)]]},alphaEq:String.raw`\(\alpha' = (\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha - (\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,betaEq:String.raw`\(\beta' = -(\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha + (\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,alphaTerm1:String.raw`\((\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,alphaTerm2:String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,betaTerm1:String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,betaTerm2:String.raw`\((\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,params:[{id:"theta",label:"\\theta",min:0,max:2*$e}]}};function yA(s,t,i){const r=il[i.type],[[l,c],[h,d]]=r.getMatrix(i),m=jc(l,s),p=jc(c,t),g=jc(h,s),v=jc(d,t);return{a1:m,a2:p,b1:g,b2:v,finalAlpha:$0(m,p),finalBeta:$0(g,v)}}function SA(s){const t=(i,r,l)=>{const c=Math.hypot(i,r,l);return c<1e-9?null:{x:i/c,y:r/c,z:l/c}};switch(s.type){case"Rx":case"X":return{x:1,y:0,z:0};case"Ry":case"Y":return{x:0,y:1,z:0};case"Rz":case"Z":case"S":case"T":case"P":return{x:0,y:0,z:1};case"R":return t(Math.cos(s.phi??0),Math.sin(s.phi??0),0);case"H":case"H_theta":return t(1,0,1);case"RV":return t(s.vx??0,s.vy??0,s.vz??0);default:return null}}const ev={type:"change"},up={type:"start"},Fv={type:"end"},Zc=new pu,nv=new ja,MA=Math.cos(70*YS.DEG2RAD),_n=new Z,Kn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class EA extends OM{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new pa,this._lastTargetPosition=new Z,this._quat=new pa().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new A0,this._sphericalDelta=new A0,this._scale=1,this._panOffset=new Z,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new Z,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TA.bind(this),this._onPointerDown=bA.bind(this),this._onPointerUp=AA.bind(this),this._onContextMenu=NA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=DA.bind(this),this._onTouchStart=UA.bind(this),this._onTouchMove=LA.bind(this),this._onMouseDown=RA.bind(this),this._onMouseMove=wA.bind(this),this._interceptControlDown=OA.bind(this),this._interceptControlUp=PA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ev),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<MA?this.object.lookAt(this.target):(nv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(nv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function bA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function TA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function AA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function RA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ke.DOLLY;break;case Os.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}break;case Os.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(up)}function wA(s){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function CA(s){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(s.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Fv))}function DA(s){this.enabled!==!1&&this._handleKeyDown(s)}function UA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ke.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ke.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(up)}function LA(s){switch(this._trackPointer(s),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ke.NONE}}function NA(s){this.enabled!==!1&&s.preventDefault()}function OA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zA=new Z(0,1,0);function Hv({x:s,y:t,z:i}){return new Z(s,i,-t)}function BA(s,t="#e5e7eb",i=180,r=.3){const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.font=`bold ${i}px Inter, Arial, sans-serif`,c.textAlign="center",c.textBaseline="middle",c.lineWidth=16,c.strokeStyle="rgba(0,0,0,0.6)",c.fillStyle=t;const h=l.width/2,d=l.height/2+12;c.strokeText(s,h,d),c.fillText(s,h,d);const m=new wM(l);m.minFilter=wi,m.generateMipmaps=!1;const p=new MM(new Rv({map:m,transparent:!0}));return p.scale.set(r,r,1),p}function sd(s,t,i,r=96){const l=[];for(let d=0;d<r;d++){const m=d/r*Math.PI*2,p=Math.cos(m),g=Math.sin(m);s==="xz"?l.push(new Z(p,0,g)):s==="xy"?l.push(new Z(p,g,0)):l.push(new Z(0,p,g))}const c=new Bn().setFromPoints(l),h=new Xs({color:t,transparent:!0,opacity:i});return new RM(c,h)}function IA(s,t=6809849){const i=Hv(s).normalize(),r=Math.abs(i.x)>.9?new Z(0,1,0):new Z(1,0,0),l=new Z().crossVectors(r,i).normalize(),c=new Z().crossVectors(i,l).normalize(),h=i.clone().multiplyScalar(1.18),d=.22,m=48,p=Math.PI*1.6,g=[];for(let b=0;b<=m;b++){const E=p*(b/m);g.push(h.clone().addScaledVector(l,d*Math.cos(E)).addScaledVector(c,d*Math.sin(E)))}const v=new Cr;v.add(new ll(new Bn().setFromPoints(g),new Xs({color:t,transparent:!0,opacity:.95})));const x=l.clone().multiplyScalar(-Math.sin(p)).addScaledVector(c,Math.cos(p)).normalize(),S=new li(new gu(.05,.13,12),new Is({color:t}));return S.quaternion.setFromUnitVectors(new Z(0,1,0),x),S.position.copy(g[g.length-1]),v.add(S),v.add(new ll(new Bn().setFromPoints([i.clone().multiplyScalar(-1.3),i.clone().multiplyScalar(1.3)]),new Xs({color:t,transparent:!0,opacity:.3}))),v}function iv({alpha:s,beta:t,vectorColor:i=16498468,rotationAxis:r=null,onPickState:l,spinAxis:c=null}){const h=ue.useRef(null),d=ue.useRef(l);ue.useEffect(()=>{d.current=l},[l]);const m=ue.useRef(null),p=ue.useRef(null),g=ue.useRef(null),v=ue.useRef(null),x=ue.useRef(null),S=ue.useRef(new pa),b=ue.useRef(!1),E=ue.useRef(null),y=ue.useRef(null);ue.useEffect(()=>{const I=h.current;if(!I)return;b.current=!1;const V=new yM,C=new vi(45,I.clientWidth/I.clientHeight,.1,1e3);C.position.set(2.8,1.9,-2.8);const R=new _A({antialias:!0,alpha:!0});R.setPixelRatio(window.devicePixelRatio),R.setSize(I.clientWidth,I.clientHeight),I.appendChild(R.domElement);const B=new EA(C,R.domElement);B.enableDamping=!0,B.dampingFactor=.1,x.current=B;const et=new li(new lp(1,32,16),new Is({color:5195493,wireframe:!0,transparent:!0,opacity:.2}));V.add(et),V.add(sd("xz",6514417,.4)),V.add(sd("xy",5195493,.15)),V.add(sd("yz",5195493,.15));const st=[-1.3,0,0,1.3,0,0,0,-1.3,0,0,1.3,0,0,0,-1.3,0,0,1.3],ct=[1,.2,.2,1,.2,.2,.2,1,.2,.2,1,.2,.2,.2,1,.2,.2,1],ut=new Bn;ut.setAttribute("position",new Cn(st,3)),ut.setAttribute("color",new Cn(ct,3)),V.add(new AM(ut,new Xs({vertexColors:!0})));const P=new Cr,Y=(z,de,Ft,_e,Ht,ze)=>{const Bt=BA(z,de,96,.5);Bt.position.set(Ft,_e,Ht),Bt.userData.stateKey=ze,P.add(Bt)};Y("|0⟩","#e2e8f0",0,1.5,0,"0"),Y("|1⟩","#e2e8f0",0,-1.5,0,"1"),Y("|+⟩","#f87171",1.5,0,0,"+"),Y("|-⟩","#f87171",-1.5,0,0,"-"),Y("|i⟩","#60a5fa",0,0,-1.5,"i"),Y("|-i⟩","#60a5fa",0,0,1.5,"-i"),V.add(P);const W=new li(new mu(.02,.02,1,8),new Is({color:i}));W.position.y=.5;const yt=new li(new gu(.06,.15,8),new Is({color:i}));yt.position.y=1;const U=new Cr;U.add(W),U.add(yt),V.add(U),p.current=V,g.current=R,v.current=C,m.current=U;const $=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let vt=0;const St=()=>{vt=requestAnimationFrame(St),B.update();const z=m.current;z&&($?z.quaternion.copy(S.current):z.quaternion.slerp(S.current,.25)),R.render(V,C)};St();const Ct=new ResizeObserver(z=>{for(const de of z){const{width:Ft,height:_e}=de.contentRect;!Ft||!_e||(C.aspect=Ft/_e,C.updateProjectionMatrix(),R.setSize(Ft,_e))}});Ct.observe(I);const nt=new NM,dt=new re;let Mt=0,Ut=0;const qt=(z,de)=>{const Ft=R.domElement.getBoundingClientRect();return dt.x=(z-Ft.left)/Ft.width*2-1,dt.y=-((de-Ft.top)/Ft.height)*2+1,nt.setFromCamera(dt,C),nt.intersectObjects(P.children,!1)},ee=z=>{Mt=z.clientX,Ut=z.clientY},Ne=z=>{if(!d.current||Math.hypot(z.clientX-Mt,z.clientY-Ut)>6)return;const de=qt(z.clientX,z.clientY);de.length&&d.current(de[0].object.userData.stateKey)},he=z=>{!d.current||z.buttons!==0||(R.domElement.style.cursor=qt(z.clientX,z.clientY).length?"pointer":"default")};return R.domElement.addEventListener("pointerdown",ee),R.domElement.addEventListener("pointerup",Ne),R.domElement.addEventListener("pointermove",he),()=>{cancelAnimationFrame(vt),Ct.disconnect(),R.domElement.removeEventListener("pointerdown",ee),R.domElement.removeEventListener("pointerup",Ne),R.domElement.removeEventListener("pointermove",he),B.dispose(),V.traverse(z=>{z.geometry&&z.geometry.dispose(),z.material&&(Array.isArray(z.material)?z.material:[z.material]).forEach(Ft=>{Ft.map&&Ft.map.dispose(),Ft.dispose()})}),R.dispose(),I.contains(R.domElement)&&I.removeChild(R.domElement)}},[i]),ue.useEffect(()=>{if(!m.current)return;const I=new pa().setFromUnitVectors(zA,vA(s,t));S.current=I,b.current||(m.current.quaternion.copy(I),b.current=!0)},[s,t]);const _=r?.x,H=r?.y,L=r?.z;ue.useEffect(()=>{const I=p.current;if(!I||(E.current&&(I.remove(E.current),E.current.geometry.dispose(),E.current.material.dispose(),E.current=null),_==null||H==null||L==null))return;const V=Hv({x:_,y:H,z:L}).normalize().multiplyScalar(1.25),C=new Bn().setFromPoints([V.clone().multiplyScalar(-1),V.clone()]),R=new Xs({color:16448250,transparent:!0,opacity:.7}),B=new ll(C,R);I.add(B),E.current=B},[_,H,L]);const D=c?.x,O=c?.y,F=c?.z;return ue.useEffect(()=>{const I=p.current;if(!I||(y.current&&(I.remove(y.current),y.current.traverse(C=>{C.geometry&&C.geometry.dispose(),C.material&&C.material.dispose()}),y.current=null),D==null||O==null||F==null))return;const V=IA({x:D,y:O,z:F});I.add(V),y.current=V},[D,O,F]),it.jsx("div",{ref:h,className:"bloch-sphere-container w-full flex-1 min-h-0"})}function Wa({vector:s,color:t="#fbbf24",size:i=120,onChange:r,title:l}){const c=ue.useRef(null),h=ue.useRef(!1),d=v=>{const x=c.current;if(!x||!r)return;const S=x.getBoundingClientRect(),b=i/2,E=i/2,y=i/2.2,_=(v.clientX-S.left-b)/y,H=(E-(v.clientY-S.top))/y;r({re:_,im:H})},m=v=>{r&&(h.current=!0,v.currentTarget.setPointerCapture(v.pointerId),d(v))},p=v=>{!r||!h.current||d(v)},g=v=>{if(r){h.current=!1;try{v.currentTarget.releasePointerCapture(v.pointerId)}catch{}}};return ue.useEffect(()=>{const v=c.current;if(!v)return;const x=window.devicePixelRatio||1,S=i,b=i;v.width=S*x,v.height=b*x;const E=v.getContext("2d");E.setTransform(x,0,0,x,0,0);const y=S/2,_=b/2,H=S/2.2;if(E.clearRect(0,0,S,b),E.beginPath(),E.strokeStyle="#4b5563",E.lineWidth=1,E.moveTo(0,_),E.lineTo(S,_),E.moveTo(y,0),E.lineTo(y,b),E.stroke(),E.fillStyle="#6b7280",E.font="10px sans-serif",E.fillText("Re",S-15,_-5),E.fillText("Im",y+5,12),Math.hypot(s.re,s.im)<.01){E.beginPath(),E.arc(y,_,2,0,$e),E.fillStyle=t,E.fill();return}const D=y+s.re*H,O=_-s.im*H;E.beginPath(),E.moveTo(y,_),E.lineTo(D,O),E.strokeStyle=t,E.lineWidth=2.5,E.stroke();const F=Math.atan2(O-_,D-y);E.beginPath(),E.moveTo(D,O),E.lineTo(D-10*Math.cos(F-De/6),O-10*Math.sin(F-De/6)),E.lineTo(D-10*Math.cos(F+De/6),O-10*Math.sin(F+De/6)),E.closePath(),E.fillStyle=t,E.fill()},[s,t,i]),it.jsx("div",{className:"canvas-container",style:{width:i,height:i,outline:r?"1px dashed #475569":"none"},title:l,children:it.jsx("canvas",{ref:c,onPointerDown:m,onPointerMove:p,onPointerUp:g,style:{width:i,height:i,display:"block",cursor:r?"crosshair":"default",touchAction:r?"none":"auto"}})})}function FA({init:s,setInit:t,presets:i,onPreset:r,angleUnit:l,setAngleUnit:c}){const h=(g,v)=>t(x=>({...x,[g]:v})),d=Math.cos(s.magnitudeAngle),m=Math.sin(s.magnitudeAngle),p=g=>l==="deg"?`${zn(Bv(g),0)}°`:`${zn(g,2)} rad`;return it.jsxs("section",{className:"panel","aria-labelledby":"custom-state-title",children:[it.jsxs("div",{className:"mb-2",children:[it.jsxs("div",{className:"flex items-start justify-between gap-2",children:[it.jsxs("h3",{id:"custom-state-title",className:"text-base text-white flex items-baseline gap-2 flex-wrap",children:[it.jsx("span",{children:"1) Initial State"}),it.jsx(oi,{children:String.raw`$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$`})]}),it.jsxs("div",{className:"flex shrink-0 text-[10px] rounded overflow-hidden border border-slate-600",children:[it.jsx("button",{className:`px-1.5 py-0.5 ${l==="rad"?"bg-indigo-500/40 text-white":"text-slate-400"}`,onClick:()=>c("rad"),children:"rad"}),it.jsx("button",{className:`px-1.5 py-0.5 ${l==="deg"?"bg-indigo-500/40 text-white":"text-slate-400"}`,onClick:()=>c("deg"),children:"deg"})]})]}),it.jsx("div",{className:"text-sm text-white leading-snug mt-1",children:it.jsxs("span",{className:"font-mono text-slate-200",children:["= (",zn(d,2)," e",it.jsxs("sup",{children:["i",zn(s.alphaPhase,2)]}),")|0⟩ + (",zn(m,2)," e",it.jsxs("sup",{children:["i",zn(s.betaPhase,2)]}),")|1⟩"]})})]}),it.jsxs("div",{className:"flex flex-col gap-2 p-1",children:[it.jsxs("div",{children:[it.jsxs("div",{className:"flex items-baseline justify-between",children:[it.jsx("label",{className:"text-sm font-medium text-slate-300",children:"Magnitudes"}),it.jsxs("span",{className:"font-mono text-sm",children:[it.jsx("span",{className:"text-indigo-400",children:`|α| = ${zn(d,2)}`}),it.jsx("span",{className:"text-teal-400 ml-3",children:`|β| = ${zn(m,2)}`})]})]}),it.jsx("input",{type:"range",min:0,max:De/2,step:.01,value:s.magnitudeAngle,style:{"--tick-bg":iu(0,De/2,De/8,"#94a3b8")},onChange:g=>h("magnitudeAngle",au(parseFloat(g.target.value),De/8))})]}),it.jsxs("div",{children:[it.jsxs("div",{className:"flex items-baseline gap-2",children:[it.jsx("span",{className:"font-mono text-indigo-300",children:"α"}),it.jsx("label",{className:"text-sm font-medium text-slate-300",children:"Phase"}),it.jsx("span",{className:"font-mono text-indigo-400 text-sm",children:p(s.alphaPhase)})]}),it.jsx("input",{type:"range",min:0,max:$e,step:.01,value:s.alphaPhase,style:{"--tick-bg":iu(0,$e,De/4,"#818cf8")},onChange:g=>h("alphaPhase",au(parseFloat(g.target.value),De/4))})]}),it.jsxs("div",{children:[it.jsxs("div",{className:"flex items-baseline gap-2",children:[it.jsx("span",{className:"font-mono text-teal-300",children:"β"}),it.jsx("label",{className:"text-sm font-medium text-slate-300",children:"Phase"}),it.jsx("span",{className:"font-mono text-teal-400 text-sm",children:p(s.betaPhase)})]}),it.jsx("input",{type:"range",min:0,max:$e,step:.01,value:s.betaPhase,style:{"--tick-bg":iu(0,$e,De/4,"#5eead4")},onChange:g=>h("betaPhase",au(parseFloat(g.target.value),De/4))})]}),it.jsxs("div",{className:"mt-1",children:[it.jsx("label",{className:"block text-sm font-medium text-slate-300 text-center mb-2",children:"Initial State Presets"}),it.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center",children:Object.keys(i).map(g=>it.jsx("button",{className:`btn btn-sm ${JSON.stringify(s)===JSON.stringify(i[g])?"active":""}`,onClick:()=>r(g),children:it.jsx(oi,{children:`$|${g}\\rangle$`})},g))})]})]})]})}function HA({gate:s,setGate:t,angleUnit:i,setStatus:r}){const l=il[s.type],c=l?.params??[],h=p=>i==="deg"?`${zn(Bv(p),1)}°`:`${zn(p,2)} rad`,d=(p,g)=>{let v=parseFloat(g);["theta","phi","lambda"].includes(p)&&(v=au(v,De/4)),t(x=>({...x,[p]:v}))},m=p=>{const v={...s,type:p,...{phi:0,lambda:0}};p==="RV"&&(v.theta=0),t(v),r(`Gate ${p} selected.`)};return it.jsxs("section",{className:"panel","aria-labelledby":"gate-select-title",children:[it.jsx("div",{className:"panel-header",children:it.jsx("h3",{id:"gate-select-title",className:"text-base text-white",children:"2) Select Gate"})}),it.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center",id:"gate-select-buttons",children:Object.keys(il).map(p=>it.jsx("button",{className:`btn btn-sm ${s.type===p?"active":""}`,onClick:()=>m(p),children:it.jsx(oi,{children:`$${il[p].nameLatex}$`})},p))}),it.jsxs("div",{className:"mt-4",id:"gate-params-container",children:[c.length>0&&it.jsx("label",{className:"block text-sm font-medium mb-2 text-slate-300 text-center",children:"Gate Parameters"}),c.map(p=>it.jsxs("div",{className:"flex items-center justify-center mb-2",children:[it.jsx("label",{className:"block text-sm font-medium text-slate-300 w-20 text-center",children:it.jsx(oi,{children:`$${p.label}$`})}),it.jsx("input",{type:"range",min:p.min,max:p.max,step:.01,value:s[p.id]??0,onChange:g=>d(p.id,g.target.value),className:"mx-4",style:["theta","phi","lambda"].includes(p.id)?{"--tick-bg":iu(p.min,p.max,De/4)}:void 0}),it.jsx("span",{className:"font-mono text-sm text-indigo-300 w-24 text-right",children:p.id.startsWith("v")?zn(s[p.id]??0,2):h(s[p.id]??0)})]},p.id)),it.jsx("div",{className:"mt-3 text-center text-base overflow-x-auto p-1",children:it.jsx(oi,{dynamic:!0,children:l?.matrixLatex??""})})]})]})}const av=(s,t)=>{const{x:i,y:r,z:l}=Iv(s,t);return`(${zn(i,2)}, ${zn(r,2)}, ${zn(l,2)})`},el="#a5b4fc",nl="#5eead4",rv=s=>(s??"").replaceAll("\\alpha",`{\\color{${el}}\\alpha}`).replaceAll("\\beta",`{\\color{${nl}}\\beta}`);function GA(){const[s,t]=ue.useState("rad"),[i,r]=ue.useState({type:"Rz",theta:De,phi:0,lambda:0,vx:1,vy:0,vz:0}),[l,c]=ue.useState({magnitudeAngle:De/4,alphaPhase:0,betaPhase:0}),[h,d]=ue.useState(""),[m,p]=ue.useState(320),g=ue.useRef(null),v=C=>{C.preventDefault();const R=C.clientY,B=m,et=g.current,st=et?et.clientHeight-200:900,ct=P=>{const Y=R-P.clientY;p(Math.max(150,Math.min(st,B+Y)))},ut=()=>{window.removeEventListener("pointermove",ct),window.removeEventListener("pointerup",ut)};window.addEventListener("pointermove",ct),window.addEventListener("pointerup",ut)},x=ue.useMemo(()=>({0:{magnitudeAngle:0,alphaPhase:0,betaPhase:0},1:{magnitudeAngle:De/2,alphaPhase:0,betaPhase:0},"+":{magnitudeAngle:De/4,alphaPhase:0,betaPhase:0},"-":{magnitudeAngle:De/4,alphaPhase:0,betaPhase:De},i:{magnitudeAngle:De/4,alphaPhase:0,betaPhase:De/2},"-i":{magnitudeAngle:De/4,alphaPhase:0,betaPhase:3*De/2}}),[]),{alpha:S,beta:b}=ue.useMemo(()=>{const C=Math.cos(l.magnitudeAngle),R=Math.sin(l.magnitudeAngle);return{alpha:tv(C,l.alphaPhase),beta:tv(R,l.betaPhase)}},[l]),E=Math.max(92,Math.min(190,Math.round((m-70)/2))),y=ue.useMemo(()=>yA(S,b,i),[S,b,i]),_=ue.useMemo(()=>SA(i),[i]),H=il[i.type],D=["Rx","Ry","Rz","X","Y","Z","S","T","H","H_theta"].includes(i.type)?_:null,O=C=>{const R=x[C];R&&(c(R),d(`Preset ${C} selected.`))},F=()=>{c({magnitudeAngle:Math.random()*(De/2),alphaPhase:Math.random()*$e,betaPhase:Math.random()*$e}),r(C=>{const R={...C};return["U","R"].includes(C.type)?(R.theta=Math.random()*$e,R.phi=Math.random()*$e,R.lambda=C.type==="U"?Math.random()*$e:0):["Rx","Ry","Rz","P"].includes(C.type)?(R.theta=Math.random()*$e,R.phi=0,R.lambda=0):C.type==="RV"&&(R.vx=(Math.random()*2-1)*De,R.vy=(Math.random()*2-1)*De,R.vz=(Math.random()*2-1)*De),R}),d("Randomized parameters.")},I=C=>({re:R,im:B})=>{const et=Math.min(1,Math.hypot(R,B));let st=Math.atan2(B,R);st<0&&(st+=$e),c(ct=>{const ut=C==="alpha"?Math.acos(et):Math.asin(et),P=C==="alpha"?"alphaPhase":"betaPhase";return{...ct,magnitudeAngle:ut,[P]:et<.02?ct[P]:st}}),d(`Set ${C} from the complex plane.`)},V=()=>{r({type:"Rz",theta:De,phi:0,lambda:0,vx:1,vy:0,vz:0}),O("+"),d("Reset to Rz and |+⟩.")};return it.jsxs("div",{className:"h-screen overflow-hidden flex flex-col p-3 gap-3",style:{background:"radial-gradient(1200px 800px at 10% -10%, rgba(99,102,241,.14), transparent 60%),radial-gradient(1000px 600px at 110% 0%, rgba(34,197,94,.10), transparent 60%),#0b1220",color:"#e5e7eb",fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'"},children:[it.jsx("style",{children:`
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0)) #111827;border:1px solid #334155;border-radius:.75rem;padding:.75rem;box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .panel-header{display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem}
          .canvas-container{position:relative;background-color:#1f2937;border:1px solid #334155;border-radius:.5rem}
          .btn{background-color:#111827;border:1px solid #334155;color:#e5e7eb;padding:.5rem .8rem;border-radius:.5rem;transition:.15s;box-shadow:0 2px 0 rgba(0,0,0,.3) inset}
          .btn:hover{background-color:#1f2937}
          .btn.active{background:linear-gradient(180deg,rgba(99,102,241,.35),rgba(99,102,241,.15));border-color:#6366f1;color:white}
          .btn-sm{padding:.25rem .55rem;font-size:.8rem;line-height:1.1;border-radius:.4rem}
          input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%}
          input[type=range]::-webkit-slider-runnable-track{height:.4rem;background:var(--tick-bg,#374151);border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-moz-range-track{height:.4rem;background:var(--tick-bg,#374151);border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:.9rem;height:.9rem;background:white;border-radius:9999px;margin-top:-.25rem;box-shadow:0 0 0 2px #6366f1 inset}
          input[type=range]::-moz-range-thumb{width:.9rem;height:.9rem;background:white;border:none;border-radius:9999px;box-shadow:0 0 0 2px #6366f1 inset}
          .op-symbol{display:inline-flex;align-items:center;justify-content:center;width:18px;color:#94a3b8}
          aside::-webkit-scrollbar{width:8px}
          aside::-webkit-scrollbar-thumb{background:#334155;border-radius:9999px}
          aside::-webkit-scrollbar-track{background:transparent}
        `}),it.jsxs("header",{className:"flex items-center justify-between gap-4 shrink-0",children:[it.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[it.jsx("h1",{className:"text-lg md:text-xl font-extrabold tracking-tight text-white truncate",children:it.jsx(oi,{children:"Interactive Gate Visualization"})}),it.jsx("p",{className:"hidden lg:block text-sm text-slate-400 truncate",children:it.jsx(oi,{children:"Visualize how a qubit's state vector is transformed."})})]}),it.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[it.jsx("button",{className:"btn btn-sm",onClick:V,children:"Reset"}),it.jsx("button",{className:"btn btn-sm",onClick:F,children:"Randomize"})]}),it.jsx("div",{className:"sr-only","aria-live":"polite",children:h})]}),it.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-3 flex-1 min-h-0",children:[it.jsxs("aside",{className:"flex flex-col gap-3 min-h-0 overflow-y-auto pr-1",children:[it.jsx(FA,{init:l,setInit:c,presets:x,onPreset:O,angleUnit:s,setAngleUnit:t}),it.jsx(HA,{gate:i,setGate:r,angleUnit:s,setStatus:d})]}),it.jsxs("main",{ref:g,className:"flex flex-col min-h-0",children:[it.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0 flex-1",children:[it.jsxs("section",{className:"panel flex flex-col gap-2 min-h-0",children:[it.jsxs("div",{className:"panel-header justify-between w-full shrink-0 m-0",children:[it.jsx("h3",{className:"text-base text-white",children:it.jsx(oi,{children:String.raw`Initial State: $(|\psi\rangle)$`})}),it.jsxs("div",{className:"text-xs text-slate-400",children:["|α|², |β|²:",it.jsx("span",{className:"font-mono text-slate-300 ml-1",children:J0(S,b)})]})]}),it.jsx(iv,{alpha:S,beta:b,vectorColor:16498468,onPickState:O,spinAxis:D}),it.jsxs("div",{className:"text-xs text-slate-400 self-start shrink-0",children:["Bloch ",it.jsxs("span",{className:"font-mono text-slate-300",children:["x, y, z = ",av(S,b)]})]})]}),it.jsxs("section",{className:"panel flex flex-col gap-2 min-h-0",children:[it.jsxs("div",{className:"panel-header justify-between w-full shrink-0 m-0",children:[it.jsx("h3",{className:"text-base text-white",children:it.jsx(oi,{dynamic:!0,children:`Final State: $${H?.nameLatex??i.type} |\\psi\\rangle$`})}),it.jsxs("div",{className:"text-xs text-slate-400",children:["|α'|², |β'|²:",it.jsx("span",{className:"font-mono text-slate-300 ml-1",children:J0(y.finalAlpha,y.finalBeta)})]})]}),it.jsx(iv,{alpha:y.finalAlpha,beta:y.finalBeta,vectorColor:4906624,rotationAxis:_}),it.jsxs("div",{className:"text-xs text-slate-400 self-start flex items-center gap-3 flex-wrap shrink-0",children:[it.jsxs("span",{children:["Bloch ",it.jsxs("span",{className:"font-mono text-slate-300",children:["x, y, z = ",av(y.finalAlpha,y.finalBeta)]})]}),_&&it.jsx("span",{className:"text-slate-500",children:"— white line: rotation axis"})]})]})]}),it.jsx("div",{role:"separator","aria-orientation":"horizontal",onPointerDown:v,className:"group flex items-center justify-center cursor-row-resize select-none touch-none",style:{height:14},title:"Drag to resize",children:it.jsx("div",{className:"h-1 w-20 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors"})}),it.jsx("section",{className:"panel shrink-0 overflow-y-auto",style:{height:m},children:it.jsxs("div",{className:"flex flex-col items-stretch gap-3",children:[it.jsxs("div",{className:"flex items-center justify-center gap-x-6 gap-y-2 flex-wrap",children:[it.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[it.jsx("div",{className:"w-10 text-center font-mono text-lg text-slate-400 flex items-center justify-center",children:it.jsx(oi,{children:String.raw`$|0\rangle$`})}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[10px] leading-tight text-indigo-300 whitespace-nowrap",children:["α = ",Yc(S)]}),it.jsx(Wa,{vector:S,color:"#818cf8",size:E,onChange:I("alpha"),title:"Drag the arrow to set α"})]}),it.jsx("span",{className:"op-symbol",children:"→"}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[11px] leading-tight whitespace-nowrap text-slate-300",children:["m",it.jsx("sub",{children:"00"}),"·",it.jsx("span",{style:{color:el},children:"α"})]}),it.jsx(Wa,{vector:y.a1,color:el,size:E})]}),it.jsx("span",{className:"op-symbol",children:"+"}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[11px] leading-tight whitespace-nowrap text-slate-300",children:["m",it.jsx("sub",{children:"01"}),"·",it.jsx("span",{style:{color:nl},children:"β"})]}),it.jsx(Wa,{vector:y.a2,color:nl,size:E})]}),it.jsx("span",{className:"op-symbol",children:"="}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[10px] leading-tight text-indigo-300 whitespace-nowrap",children:["α' = ",Yc(y.finalAlpha)]}),it.jsx(Wa,{vector:y.finalAlpha,color:"#6366f1",size:E})]})]}),it.jsx("p",{className:"flex-1 min-w-[220px] max-w-[460px] text-center font-mono text-sm md:text-base text-slate-200",children:it.jsx(oi,{dynamic:!0,children:rv(H?.alphaEq??String.raw`\(\alpha' = (m_{00})\alpha + (m_{01})\beta\)`)})})]}),it.jsx("div",{className:"border-t border-slate-700/60"}),it.jsxs("div",{className:"flex items-center justify-center gap-x-6 gap-y-2 flex-wrap",children:[it.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[it.jsx("div",{className:"w-10 text-center font-mono text-lg text-slate-400 flex items-center justify-center",children:it.jsx(oi,{children:String.raw`$|1\rangle$`})}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[10px] leading-tight text-teal-300 whitespace-nowrap",children:["β = ",Yc(b)]}),it.jsx(Wa,{vector:b,color:"#2dd4bf",size:E,onChange:I("beta"),title:"Drag the arrow to set β"})]}),it.jsx("span",{className:"op-symbol",children:"→"}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[11px] leading-tight whitespace-nowrap text-slate-300",children:["m",it.jsx("sub",{children:"10"}),"·",it.jsx("span",{style:{color:el},children:"α"})]}),it.jsx(Wa,{vector:y.b1,color:el,size:E})]}),it.jsx("span",{className:"op-symbol",children:"+"}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[11px] leading-tight whitespace-nowrap text-slate-300",children:["m",it.jsx("sub",{children:"11"}),"·",it.jsx("span",{style:{color:nl},children:"β"})]}),it.jsx(Wa,{vector:y.b2,color:nl,size:E})]}),it.jsx("span",{className:"op-symbol",children:"="}),it.jsxs("div",{className:"text-center",children:[it.jsxs("p",{className:"font-mono text-[10px] leading-tight text-teal-300 whitespace-nowrap",children:["β' = ",Yc(y.finalBeta)]}),it.jsx(Wa,{vector:y.finalBeta,color:"#14b8a6",size:E})]})]}),it.jsx("p",{className:"flex-1 min-w-[220px] max-w-[460px] text-center font-mono text-sm md:text-base text-slate-200",children:it.jsx(oi,{dynamic:!0,children:rv(H?.betaEq??String.raw`\(\beta' = (m_{10})\alpha + (m_{11})\beta\)`)})})]})]})})]})]})]})}const VA={loader:{load:["input/tex","output/chtml","[tex]/color"]},tex:{packages:{"[+]":["color"]},inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]]}};tS.createRoot(document.getElementById("root")).render(it.jsx(fu.StrictMode,{children:it.jsx(eS,{version:3,config:VA,children:it.jsx(GA,{})})}));
